!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(((t = t || self).PDFLib = {}));
})(this, function (t) {
  "use strict";
   var e =
    function (t, n) {
      return (e =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        })(t, n);
    };
  function n(t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n),
      (t.prototype =
        null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
  }
  var r = function () {
    return (r =
      Object.assign ||
      function (t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in (e = arguments[n]))
            Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t;
      }).apply(this, arguments);
  };
  function i(t, e, n, r) {
    return new (n || (n = Promise))(function (i, o) {
      function a(t) {
        try {
          l(r.next(t));
        } catch (t) {
          o(t);
        }
      }
      function s(t) {
        try {
          l(r.throw(t));
        } catch (t) {
          o(t);
        }
      }
      function l(t) {
        var e;
        t.done
          ? i(t.value)
          : ((e = t.value),
            e instanceof n
              ? e
              : new n(function (t) {
                  t(e);
                })).then(a, s);
      }
      l((r = r.apply(t, e || [])).next());
    });
  }
  function o(t, e) {
    var n,
      r,
      i,
      o,
      a = {
        label: 0,
        sent: function () {
          if (1 & i[0]) throw i[1];
          return i[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (o = { next: s(0), throw: s(1), return: s(2) }),
      "function" == typeof Symbol &&
        (o[Symbol.iterator] = function () {
          return this;
        }),
      o
    );
    function s(o) {
      return function (s) {
        return (function (o) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; a; )
            try {
              if (
                ((n = 1),
                r &&
                  (i =
                    2 & o[0]
                      ? r.return
                      : o[0]
                      ? r.throw || ((i = r.return) && i.call(r), 0)
                      : r.next) &&
                  !(i = i.call(r, o[1])).done)
              )
                return i;
              switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                case 0:
                case 1:
                  i = o;
                  break;
                case 4:
                  return a.label++, { value: o[1], done: !1 };
                case 5:
                  a.label++, (r = o[1]), (o = [0]);
                  continue;
                case 7:
                  (o = a.ops.pop()), a.trys.pop();
                  continue;
                default:
                  if (
                    !((i = a.trys),
                    (i = i.length > 0 && i[i.length - 1]) ||
                      (6 !== o[0] && 2 !== o[0]))
                  ) {
                    a = 0;
                    continue;
                  }
                  if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                    a.label = o[1];
                    break;
                  }
                  if (6 === o[0] && a.label < i[1]) {
                    (a.label = i[1]), (i = o);
                    break;
                  }
                  if (i && a.label < i[2]) {
                    (a.label = i[2]), a.ops.push(o);
                    break;
                  }
                  i[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }
              o = e.call(t, a);
            } catch (t) {
              (o = [6, t]), (r = 0);
            } finally {
              n = i = 0;
            }
          if (5 & o[0]) throw o[1];
          return { value: o[0] ? o[1] : void 0, done: !0 };
        })([o, s]);
      };
    }
  }
  function a() {
    for (var t = 0, e = 0, n = arguments.length; e < n; e++)
      t += arguments[e].length;
    var r = Array(t),
      i = 0;
    for (e = 0; e < n; e++)
      for (var o = arguments[e], a = 0, s = o.length; a < s; a++, i++)
        r[i] = o[a];
    return r;
  }
  for (
    var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      l = new Uint8Array(256),
      h = 0;
    h < s.length;
    h++
  )
    l[s.charCodeAt(h)] = h;
  var u,
    c = function (t) {
      for (var e = "", n = t.length, r = 0; r < n; r += 3)
        (e += s[t[r] >> 2]),
          (e += s[((3 & t[r]) << 4) | (t[r + 1] >> 4)]),
          (e += s[((15 & t[r + 1]) << 2) | (t[r + 2] >> 6)]),
          (e += s[63 & t[r + 2]]);
      return (
        n % 3 == 2
          ? (e = e.substring(0, e.length - 1) + "=")
          : n % 3 == 1 && (e = e.substring(0, e.length - 2) + "=="),
        e
      );
    },
    d = function (t) {
      var e,
        n,
        r,
        i,
        o,
        a = 0.75 * t.length,
        s = t.length,
        h = 0;
      "=" === t[t.length - 1] && (a--, "=" === t[t.length - 2] && a--);
      var u = new Uint8Array(a);
      for (e = 0; e < s; e += 4)
        (n = l[t.charCodeAt(e)]),
          (r = l[t.charCodeAt(e + 1)]),
          (i = l[t.charCodeAt(e + 2)]),
          (o = l[t.charCodeAt(e + 3)]),
          (u[h++] = (n << 2) | (r >> 4)),
          (u[h++] = ((15 & r) << 4) | (i >> 2)),
          (u[h++] = ((3 & i) << 6) | (63 & o));
      return u;
    },
    f = /^(data)?:?([\w\/\+]+)?;?(charset=[\w-]+|base64)?.*,/i,
    p = function (t) {
      var e = t.trim(),
        n = e.substring(0, 100).match(f);
      if (!n) return d(e);
      var r = n[0],
        i = e.substring(r.length);
      return d(i);
    },
    g = function (t) {
      return t.charCodeAt(0);
    },
    v = function (t) {
      return t.codePointAt(0);
    },
    y = function (t, e) {
      return x(t.toString(16), e, "0").toUpperCase();
    },
    m = function (t) {
      return y(t, 2);
    },
    b = function (t) {
      return String.fromCharCode(t);
    },
    w = function (t) {
      return b(parseInt(t, 16));
    },
    x = function (t, e, n) {
      for (var r = "", i = 0, o = e - t.length; i < o; i++) r += n;
      return r + t;
    },
    k = function (t, e, n) {
      for (var r = t.length, i = 0; i < r; i++) e[n++] = t.charCodeAt(i);
      return r;
    },
    F = function (t, e) {
      return (
        void 0 === e && (e = 4),
        t + "-" + Math.floor(Math.random() * Math.pow(10, e))
      );
    },
    S = function (t) {
      return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    },
    C = function (t) {
      return t
        .replace(/\t|\u0085|\u2028|\u2029/g, "    ")
        .replace(/[\b\v]/g, "");
    },
    A = ["\\n", "\\f", "\\r", "\\u000B"],
    T = function (t) {
      return /^[\n\f\r\u000B]$/.test(t);
    },
    P = function (t) {
      return t.split(/[\n\f\r\u000B]/);
    },
    z = function (t) {
      return t.replace(/[\n\f\r\u000B]/g, " ");
    },
    R = function (t, e) {
      var n,
        r = t.charCodeAt(e),
        i = e + 1,
        o = 1;
      return (
        r >= 55296 &&
          r <= 56319 &&
          t.length > i &&
          (n = t.charCodeAt(i)) >= 56320 &&
          n <= 57343 &&
          (o = 2),
        [t.slice(e, e + o), o]
      );
    },
    O = function (t) {
      for (var e = [], n = 0, r = t.length; n < r; ) {
        var i = R(t, n),
          o = i[0],
          a = i[1];
        e.push(o), (n += a);
      }
      return e;
    },
    D = function (t, e, n, r) {
      for (
        var i = (function (t) {
            for (
              var e = A.join("|"), n = ["$"], r = 0, i = t.length;
              r < i;
              r++
            ) {
              var o = t[r];
              if (T(o))
                throw new TypeError("`wordBreak` must not include " + e);
              n.push("" === o ? "." : S(o));
            }
            var a = n.join("|");
            return new RegExp("(" + e + ")|((.*?)(" + a + "))", "gm");
          })(e),
          o = C(t).match(i),
          a = "",
          s = 0,
          l = [],
          h = function () {
            "" !== a && l.push(a), (a = ""), (s = 0);
          },
          u = 0,
          c = o.length;
        u < c;
        u++
      ) {
        var d = o[u];
        if (T(d)) h();
        else {
          var f = r(d);
          s + f > n && h(), (a += d), (s += f);
        }
      }
      return h(), l;
    },
    B =
      /^D:(\d\d\d\d)(\d\d)?(\d\d)?(\d\d)?(\d\d)?(\d\d)?([+\-Z])?(\d\d)?'?(\d\d)?'?$/,
    N = function (t) {
      var e = t.match(B);
      if (e) {
        var n = e[1],
          r = e[2],
          i = void 0 === r ? "01" : r,
          o = e[3],
          a = void 0 === o ? "01" : o,
          s = e[4],
          l = void 0 === s ? "00" : s,
          h = e[5],
          u = void 0 === h ? "00" : h,
          c = e[6],
          d = void 0 === c ? "00" : c,
          f = e[7],
          p = void 0 === f ? "Z" : f,
          g = e[8],
          v = void 0 === g ? "00" : g,
          y = e[9];
        return new Date(
          n +
            "-" +
            i +
            "-" +
            a +
            "T" +
            l +
            ":" +
            u +
            ":" +
            d +
            ("Z" === p ? "Z" : "" + p + v + ":" + (void 0 === y ? "00" : y))
        );
      }
    },
    E = function (t, e) {
      for (var n, r, i = 0; i < t.length; ) {
        var o = t.substring(i).match(e);
        if (!o) return { match: r, pos: i };
        (r = o),
          (i += (null !== (n = o.index) && void 0 !== n ? n : 0) + o[0].length);
      }
      return { match: r, pos: i };
    },
    j = function (t) {
      return t[t.length - 1];
    },
    M = function (t) {
      if (t instanceof Uint8Array) return t;
      for (var e = t.length, n = new Uint8Array(e), r = 0; r < e; r++)
        n[r] = t.charCodeAt(r);
      return n;
    },
    I = function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      for (var n = t.length, r = [], i = 0; i < n; i++) {
        var o = t[i];
        r[i] = o instanceof Uint8Array ? o : M(o);
      }
      var a = 0;
      for (i = 0; i < n; i++) a += t[i].length;
      for (var s = new Uint8Array(a), l = 0, h = 0; h < n; h++)
        for (var u = r[h], c = 0, d = u.length; c < d; c++) s[l++] = u[c];
      return s;
    },
    U = function (t) {
      for (var e = 0, n = 0, r = t.length; n < r; n++) e += t[n].length;
      var i = new Uint8Array(e),
        o = 0;
      for (n = 0, r = t.length; n < r; n++) {
        var a = t[n];
        i.set(a, o), (o += a.length);
      }
      return i;
    },
    V = function (t) {
      for (var e = "", n = 0, r = t.length; n < r; n++) e += b(t[n]);
      return e;
    },
    W = function (t, e) {
      return t.id - e.id;
    },
    q = function (t, e) {
      for (var n = [], r = 0, i = t.length; r < i; r++) {
        var o = t[r],
          a = t[r - 1];
        (0 !== r && e(o) === e(a)) || n.push(o);
      }
      return n;
    },
    L = function (t) {
      for (var e = t.length, n = 0, r = Math.floor(e / 2); n < r; n++) {
        var i = n,
          o = e - n - 1,
          a = t[n];
        (t[i] = t[o]), (t[o] = a);
      }
      return t;
    },
    K = function (t) {
      for (var e = 0, n = 0, r = t.length; n < r; n++) e += t[n];
      return e;
    },
    G = function (t, e) {
      for (var n = new Array(e - t), r = 0, i = n.length; r < i; r++)
        n[r] = t + r;
      return n;
    },
    H = function (t, e) {
      for (var n = new Array(e.length), r = 0, i = e.length; r < i; r++)
        n[r] = t[e[r]];
      return n;
    },
    _ = function (t) {
      return (
        t instanceof Uint8Array ||
        t instanceof ArrayBuffer ||
        "string" == typeof t
      );
    },
    X = function (t) {
      if ("string" == typeof t) return p(t);
      if (t instanceof ArrayBuffer) return new Uint8Array(t);
      if (t instanceof Uint8Array) return t;
      throw new TypeError(
        "`input` must be one of `string | ArrayBuffer | Uint8Array`"
      );
    },
    Z = function () {
      return new Promise(function (t) {
        setTimeout(function () {
          return t();
        }, 0);
      });
    },
    Y = function (t, e) {
      void 0 === e && (e = !0);
      var n = [];
      e && n.push(65279);
      for (var r = 0, i = t.length; r < i; ) {
        var o = t.codePointAt(r);
        if (o < 65536) n.push(o), (r += 1);
        else {
          if (!(o < 1114112)) throw new Error("Invalid code point: 0x" + m(o));
          n.push($(o), tt(o)), (r += 2);
        }
      }
      return new Uint16Array(n);
    },
    J = function (t) {
      return t >= 0 && t <= 65535;
    },
    Q = function (t) {
      return t >= 65536 && t <= 1114111;
    },
    $ = function (t) {
      return Math.floor((t - 65536) / 1024) + 55296;
    },
    tt = function (t) {
      return ((t - 65536) % 1024) + 56320;
    };
  !(function (t) {
    (t.BigEndian = "BigEndian"), (t.LittleEndian = "LittleEndian");
  })(u || (u = {}));
  var et = "�".codePointAt(0),
    nt = function (t, e) {
      if ((void 0 === e && (e = !0), t.length <= 1))
        return String.fromCodePoint(et);
      for (
        var n = e ? at(t) : u.BigEndian, r = e ? 2 : 0, i = [];
        t.length - r >= 2;

      ) {
        var o = ot(t[r++], t[r++], n);
        if (rt(o))
          if (t.length - r < 2) i.push(et);
          else {
            var a = ot(t[r++], t[r++], n);
            it(a) ? i.push(o, a) : i.push(et);
          }
        else it(o) ? ((r += 2), i.push(et)) : i.push(o);
      }
      return r < t.length && i.push(et), String.fromCodePoint.apply(String, i);
    },
    rt = function (t) {
      return t >= 55296 && t <= 56319;
    },
    it = function (t) {
      return t >= 56320 && t <= 57343;
    },
    ot = function (t, e, n) {
      if (n === u.LittleEndian) return (e << 8) | t;
      if (n === u.BigEndian) return (t << 8) | e;
      throw new Error("Invalid byteOrder: " + n);
    },
    at = function (t) {
      return st(t) ? u.BigEndian : lt(t) ? u.LittleEndian : u.BigEndian;
    },
    st = function (t) {
      return 254 === t[0] && 255 === t[1];
    },
    lt = function (t) {
      return 255 === t[0] && 254 === t[1];
    },
    ht = function (t) {
      return st(t) || lt(t);
    },
    ut = function (t) {
      var e,
        n = String(t);
      if (Math.abs(t) < 1) {
        if ((e = parseInt(t.toString().split("e-")[1]))) {
          var r = t < 0;
          r && (t *= -1),
            (t *= Math.pow(10, e - 1)),
            (n = "0." + new Array(e).join("0") + t.toString().substring(2)),
            r && (n = "-" + n);
        }
      } else
        (e = parseInt(t.toString().split("+")[1])) > 20 &&
          ((e -= 20),
          (n = (t /= Math.pow(10, e)).toString() + new Array(e + 1).join("0")));
      return n;
    },
    ct = function (t) {
      return Math.ceil(t.toString(2).length / 8);
    },
    dt = function (t) {
      for (var e = new Uint8Array(ct(t)), n = 1; n <= e.length; n++)
        e[n - 1] = t >> (8 * (e.length - n));
      return e;
    },
    ft = function (t) {
      throw new Error(t);
    };
  function pt(t, e, n) {
    return (
      t(
        (n = {
          path: e,
          exports: {},
          require: function (t, e) {
            return (function () {
              throw new Error(
                "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
              );
            })(null == e && n.path);
          },
        }),
        n.exports
      ),
      n.exports
    );
  }
  var gt = pt(function (t, e) {
    var n =
      "undefined" != typeof Uint8Array &&
      "undefined" != typeof Uint16Array &&
      "undefined" != typeof Int32Array;
    function r(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }
    (e.assign = function (t) {
      for (var e = Array.prototype.slice.call(arguments, 1); e.length; ) {
        var n = e.shift();
        if (n) {
          if ("object" != typeof n)
            throw new TypeError(n + "must be non-object");
          for (var i in n) r(n, i) && (t[i] = n[i]);
        }
      }
      return t;
    }),
      (e.shrinkBuf = function (t, e) {
        return t.length === e
          ? t
          : t.subarray
          ? t.subarray(0, e)
          : ((t.length = e), t);
      });
    var i = {
        arraySet: function (t, e, n, r, i) {
          if (e.subarray && t.subarray) t.set(e.subarray(n, n + r), i);
          else for (var o = 0; o < r; o++) t[i + o] = e[n + o];
        },
        flattenChunks: function (t) {
          var e, n, r, i, o, a;
          for (r = 0, e = 0, n = t.length; e < n; e++) r += t[e].length;
          for (a = new Uint8Array(r), i = 0, e = 0, n = t.length; e < n; e++)
            (o = t[e]), a.set(o, i), (i += o.length);
          return a;
        },
      },
      o = {
        arraySet: function (t, e, n, r, i) {
          for (var o = 0; o < r; o++) t[i + o] = e[n + o];
        },
        flattenChunks: function (t) {
          return [].concat.apply([], t);
        },
      };
    (e.setTyped = function (t) {
      t
        ? ((e.Buf8 = Uint8Array),
          (e.Buf16 = Uint16Array),
          (e.Buf32 = Int32Array),
          e.assign(e, i))
        : ((e.Buf8 = Array),
          (e.Buf16 = Array),
          (e.Buf32 = Array),
          e.assign(e, o));
    }),
      e.setTyped(n);
  });
  function vt(t) {
    for (var e = t.length; --e >= 0; ) t[e] = 0;
  }
  var yt = [
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
      5, 5, 5, 0,
    ],
    mt = [
      0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
      11, 11, 12, 12, 13, 13,
    ],
    bt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
    wt = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
    xt = new Array(576);
  vt(xt);
  var kt = new Array(60);
  vt(kt);
  var Ft = new Array(512);
  vt(Ft);
  var St = new Array(256);
  vt(St);
  var Ct = new Array(29);
  vt(Ct);
  var At,
    Tt,
    Pt,
    zt = new Array(30);
  function Rt(t, e, n, r, i) {
    (this.static_tree = t),
      (this.extra_bits = e),
      (this.extra_base = n),
      (this.elems = r),
      (this.max_length = i),
      (this.has_stree = t && t.length);
  }
  function Ot(t, e) {
    (this.dyn_tree = t), (this.max_code = 0), (this.stat_desc = e);
  }
  function Dt(t) {
    return t < 256 ? Ft[t] : Ft[256 + (t >>> 7)];
  }
  function Bt(t, e) {
    (t.pending_buf[t.pending++] = 255 & e),
      (t.pending_buf[t.pending++] = (e >>> 8) & 255);
  }
  function Nt(t, e, n) {
    t.bi_valid > 16 - n
      ? ((t.bi_buf |= (e << t.bi_valid) & 65535),
        Bt(t, t.bi_buf),
        (t.bi_buf = e >> (16 - t.bi_valid)),
        (t.bi_valid += n - 16))
      : ((t.bi_buf |= (e << t.bi_valid) & 65535), (t.bi_valid += n));
  }
  function Et(t, e, n) {
    Nt(t, n[2 * e], n[2 * e + 1]);
  }
  function jt(t, e) {
    var n = 0;
    do {
      (n |= 1 & t), (t >>>= 1), (n <<= 1);
    } while (--e > 0);
    return n >>> 1;
  }
  function Mt(t, e, n) {
    var r,
      i,
      o = new Array(16),
      a = 0;
    for (r = 1; r <= 15; r++) o[r] = a = (a + n[r - 1]) << 1;
    for (i = 0; i <= e; i++) {
      var s = t[2 * i + 1];
      0 !== s && (t[2 * i] = jt(o[s]++, s));
    }
  }
  function It(t) {
    var e;
    for (e = 0; e < 286; e++) t.dyn_ltree[2 * e] = 0;
    for (e = 0; e < 30; e++) t.dyn_dtree[2 * e] = 0;
    for (e = 0; e < 19; e++) t.bl_tree[2 * e] = 0;
    (t.dyn_ltree[512] = 1),
      (t.opt_len = t.static_len = 0),
      (t.last_lit = t.matches = 0);
  }
  function Ut(t) {
    t.bi_valid > 8
      ? Bt(t, t.bi_buf)
      : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf),
      (t.bi_buf = 0),
      (t.bi_valid = 0);
  }
  function Vt(t, e, n, r) {
    var i = 2 * e,
      o = 2 * n;
    return t[i] < t[o] || (t[i] === t[o] && r[e] <= r[n]);
  }
  function Wt(t, e, n) {
    for (
      var r = t.heap[n], i = n << 1;
      i <= t.heap_len &&
      (i < t.heap_len && Vt(e, t.heap[i + 1], t.heap[i], t.depth) && i++,
      !Vt(e, r, t.heap[i], t.depth));

    )
      (t.heap[n] = t.heap[i]), (n = i), (i <<= 1);
    t.heap[n] = r;
  }
  function qt(t, e, n) {
    var r,
      i,
      o,
      a,
      s = 0;
    if (0 !== t.last_lit)
      do {
        (r =
          (t.pending_buf[t.d_buf + 2 * s] << 8) |
          t.pending_buf[t.d_buf + 2 * s + 1]),
          (i = t.pending_buf[t.l_buf + s]),
          s++,
          0 === r
            ? Et(t, i, e)
            : (Et(t, (o = St[i]) + 256 + 1, e),
              0 !== (a = yt[o]) && Nt(t, (i -= Ct[o]), a),
              Et(t, (o = Dt(--r)), n),
              0 !== (a = mt[o]) && Nt(t, (r -= zt[o]), a));
      } while (s < t.last_lit);
    Et(t, 256, e);
  }
  function Lt(t, e) {
    var n,
      r,
      i,
      o = e.dyn_tree,
      a = e.stat_desc.static_tree,
      s = e.stat_desc.has_stree,
      l = e.stat_desc.elems,
      h = -1;
    for (t.heap_len = 0, t.heap_max = 573, n = 0; n < l; n++)
      0 !== o[2 * n]
        ? ((t.heap[++t.heap_len] = h = n), (t.depth[n] = 0))
        : (o[2 * n + 1] = 0);
    for (; t.heap_len < 2; )
      (o[2 * (i = t.heap[++t.heap_len] = h < 2 ? ++h : 0)] = 1),
        (t.depth[i] = 0),
        t.opt_len--,
        s && (t.static_len -= a[2 * i + 1]);
    for (e.max_code = h, n = t.heap_len >> 1; n >= 1; n--) Wt(t, o, n);
    i = l;
    do {
      (n = t.heap[1]),
        (t.heap[1] = t.heap[t.heap_len--]),
        Wt(t, o, 1),
        (r = t.heap[1]),
        (t.heap[--t.heap_max] = n),
        (t.heap[--t.heap_max] = r),
        (o[2 * i] = o[2 * n] + o[2 * r]),
        (t.depth[i] = (t.depth[n] >= t.depth[r] ? t.depth[n] : t.depth[r]) + 1),
        (o[2 * n + 1] = o[2 * r + 1] = i),
        (t.heap[1] = i++),
        Wt(t, o, 1);
    } while (t.heap_len >= 2);
    (t.heap[--t.heap_max] = t.heap[1]),
      (function (t, e) {
        var n,
          r,
          i,
          o,
          a,
          s,
          l = e.dyn_tree,
          h = e.max_code,
          u = e.stat_desc.static_tree,
          c = e.stat_desc.has_stree,
          d = e.stat_desc.extra_bits,
          f = e.stat_desc.extra_base,
          p = e.stat_desc.max_length,
          g = 0;
        for (o = 0; o <= 15; o++) t.bl_count[o] = 0;
        for (
          l[2 * t.heap[t.heap_max] + 1] = 0, n = t.heap_max + 1;
          n < 573;
          n++
        )
          (o = l[2 * l[2 * (r = t.heap[n]) + 1] + 1] + 1) > p && ((o = p), g++),
            (l[2 * r + 1] = o),
            r > h ||
              (t.bl_count[o]++,
              (a = 0),
              r >= f && (a = d[r - f]),
              (s = l[2 * r]),
              (t.opt_len += s * (o + a)),
              c && (t.static_len += s * (u[2 * r + 1] + a)));
        if (0 !== g) {
          do {
            for (o = p - 1; 0 === t.bl_count[o]; ) o--;
            t.bl_count[o]--,
              (t.bl_count[o + 1] += 2),
              t.bl_count[p]--,
              (g -= 2);
          } while (g > 0);
          for (o = p; 0 !== o; o--)
            for (r = t.bl_count[o]; 0 !== r; )
              (i = t.heap[--n]) > h ||
                (l[2 * i + 1] !== o &&
                  ((t.opt_len += (o - l[2 * i + 1]) * l[2 * i]),
                  (l[2 * i + 1] = o)),
                r--);
        }
      })(t, e),
      Mt(o, h, t.bl_count);
  }
  function Kt(t, e, n) {
    var r,
      i,
      o = -1,
      a = e[1],
      s = 0,
      l = 7,
      h = 4;
    for (
      0 === a && ((l = 138), (h = 3)), e[2 * (n + 1) + 1] = 65535, r = 0;
      r <= n;
      r++
    )
      (i = a),
        (a = e[2 * (r + 1) + 1]),
        (++s < l && i === a) ||
          (s < h
            ? (t.bl_tree[2 * i] += s)
            : 0 !== i
            ? (i !== o && t.bl_tree[2 * i]++, t.bl_tree[32]++)
            : s <= 10
            ? t.bl_tree[34]++
            : t.bl_tree[36]++,
          (s = 0),
          (o = i),
          0 === a
            ? ((l = 138), (h = 3))
            : i === a
            ? ((l = 6), (h = 3))
            : ((l = 7), (h = 4)));
  }
  function Gt(t, e, n) {
    var r,
      i,
      o = -1,
      a = e[1],
      s = 0,
      l = 7,
      h = 4;
    for (0 === a && ((l = 138), (h = 3)), r = 0; r <= n; r++)
      if (((i = a), (a = e[2 * (r + 1) + 1]), !(++s < l && i === a))) {
        if (s < h)
          do {
            Et(t, i, t.bl_tree);
          } while (0 != --s);
        else
          0 !== i
            ? (i !== o && (Et(t, i, t.bl_tree), s--),
              Et(t, 16, t.bl_tree),
              Nt(t, s - 3, 2))
            : s <= 10
            ? (Et(t, 17, t.bl_tree), Nt(t, s - 3, 3))
            : (Et(t, 18, t.bl_tree), Nt(t, s - 11, 7));
        (s = 0),
          (o = i),
          0 === a
            ? ((l = 138), (h = 3))
            : i === a
            ? ((l = 6), (h = 3))
            : ((l = 7), (h = 4));
      }
  }
  vt(zt);
  var Ht = !1;
  function _t(t, e, n, r) {
    Nt(t, 0 + (r ? 1 : 0), 3),
      (function (t, e, n, r) {
        Ut(t),
          r && (Bt(t, n), Bt(t, ~n)),
          gt.arraySet(t.pending_buf, t.window, e, n, t.pending),
          (t.pending += n);
      })(t, e, n, !0);
  }
  var Xt = {
    _tr_init: function (t) {
      Ht ||
        (!(function () {
          var t,
            e,
            n,
            r,
            i,
            o = new Array(16);
          for (n = 0, r = 0; r < 28; r++)
            for (Ct[r] = n, t = 0; t < 1 << yt[r]; t++) St[n++] = r;
          for (St[n - 1] = r, i = 0, r = 0; r < 16; r++)
            for (zt[r] = i, t = 0; t < 1 << mt[r]; t++) Ft[i++] = r;
          for (i >>= 7; r < 30; r++)
            for (zt[r] = i << 7, t = 0; t < 1 << (mt[r] - 7); t++)
              Ft[256 + i++] = r;
          for (e = 0; e <= 15; e++) o[e] = 0;
          for (t = 0; t <= 143; ) (xt[2 * t + 1] = 8), t++, o[8]++;
          for (; t <= 255; ) (xt[2 * t + 1] = 9), t++, o[9]++;
          for (; t <= 279; ) (xt[2 * t + 1] = 7), t++, o[7]++;
          for (; t <= 287; ) (xt[2 * t + 1] = 8), t++, o[8]++;
          for (Mt(xt, 287, o), t = 0; t < 30; t++)
            (kt[2 * t + 1] = 5), (kt[2 * t] = jt(t, 5));
          (At = new Rt(xt, yt, 257, 286, 15)),
            (Tt = new Rt(kt, mt, 0, 30, 15)),
            (Pt = new Rt(new Array(0), bt, 0, 19, 7));
        })(),
        (Ht = !0)),
        (t.l_desc = new Ot(t.dyn_ltree, At)),
        (t.d_desc = new Ot(t.dyn_dtree, Tt)),
        (t.bl_desc = new Ot(t.bl_tree, Pt)),
        (t.bi_buf = 0),
        (t.bi_valid = 0),
        It(t);
    },
    _tr_stored_block: _t,
    _tr_flush_block: function (t, e, n, r) {
      var i,
        o,
        a = 0;
      t.level > 0
        ? (2 === t.strm.data_type &&
            (t.strm.data_type = (function (t) {
              var e,
                n = 4093624447;
              for (e = 0; e <= 31; e++, n >>>= 1)
                if (1 & n && 0 !== t.dyn_ltree[2 * e]) return 0;
              if (
                0 !== t.dyn_ltree[18] ||
                0 !== t.dyn_ltree[20] ||
                0 !== t.dyn_ltree[26]
              )
                return 1;
              for (e = 32; e < 256; e++) if (0 !== t.dyn_ltree[2 * e]) return 1;
              return 0;
            })(t)),
          Lt(t, t.l_desc),
          Lt(t, t.d_desc),
          (a = (function (t) {
            var e;
            for (
              Kt(t, t.dyn_ltree, t.l_desc.max_code),
                Kt(t, t.dyn_dtree, t.d_desc.max_code),
                Lt(t, t.bl_desc),
                e = 18;
              e >= 3 && 0 === t.bl_tree[2 * wt[e] + 1];
              e--
            );
            return (t.opt_len += 3 * (e + 1) + 5 + 5 + 4), e;
          })(t)),
          (i = (t.opt_len + 3 + 7) >>> 3),
          (o = (t.static_len + 3 + 7) >>> 3) <= i && (i = o))
        : (i = o = n + 5),
        n + 4 <= i && -1 !== e
          ? _t(t, e, n, r)
          : 4 === t.strategy || o === i
          ? (Nt(t, 2 + (r ? 1 : 0), 3), qt(t, xt, kt))
          : (Nt(t, 4 + (r ? 1 : 0), 3),
            (function (t, e, n, r) {
              var i;
              for (
                Nt(t, e - 257, 5), Nt(t, n - 1, 5), Nt(t, r - 4, 4), i = 0;
                i < r;
                i++
              )
                Nt(t, t.bl_tree[2 * wt[i] + 1], 3);
              Gt(t, t.dyn_ltree, e - 1), Gt(t, t.dyn_dtree, n - 1);
            })(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, a + 1),
            qt(t, t.dyn_ltree, t.dyn_dtree)),
        It(t),
        r && Ut(t);
    },
    _tr_tally: function (t, e, n) {
      return (
        (t.pending_buf[t.d_buf + 2 * t.last_lit] = (e >>> 8) & 255),
        (t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e),
        (t.pending_buf[t.l_buf + t.last_lit] = 255 & n),
        t.last_lit++,
        0 === e
          ? t.dyn_ltree[2 * n]++
          : (t.matches++,
            e--,
            t.dyn_ltree[2 * (St[n] + 256 + 1)]++,
            t.dyn_dtree[2 * Dt(e)]++),
        t.last_lit === t.lit_bufsize - 1
      );
    },
    _tr_align: function (t) {
      Nt(t, 2, 3),
        Et(t, 256, xt),
        (function (t) {
          16 === t.bi_valid
            ? (Bt(t, t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0))
            : t.bi_valid >= 8 &&
              ((t.pending_buf[t.pending++] = 255 & t.bi_buf),
              (t.bi_buf >>= 8),
              (t.bi_valid -= 8));
        })(t);
    },
  };
  var Zt = function (t, e, n, r) {
    for (
      var i = (65535 & t) | 0, o = ((t >>> 16) & 65535) | 0, a = 0;
      0 !== n;

    ) {
      n -= a = n > 2e3 ? 2e3 : n;
      do {
        o = (o + (i = (i + e[r++]) | 0)) | 0;
      } while (--a);
      (i %= 65521), (o %= 65521);
    }
    return i | (o << 16) | 0;
  };
  var Yt = (function () {
    for (var t, e = [], n = 0; n < 256; n++) {
      t = n;
      for (var r = 0; r < 8; r++) t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
      e[n] = t;
    }
    return e;
  })();
  var Jt,
    Qt = function (t, e, n, r) {
      var i = Yt,
        o = r + n;
      t ^= -1;
      for (var a = r; a < o; a++) t = (t >>> 8) ^ i[255 & (t ^ e[a])];
      return -1 ^ t;
    },
    $t = {
      2: "need dictionary",
      1: "stream end",
      0: "",
      "-1": "file error",
      "-2": "stream error",
      "-3": "data error",
      "-4": "insufficient memory",
      "-5": "buffer error",
      "-6": "incompatible version",
    };
  function te(t, e) {
    return (t.msg = $t[e]), e;
  }
  function ee(t) {
    return (t << 1) - (t > 4 ? 9 : 0);
  }
  function ne(t) {
    for (var e = t.length; --e >= 0; ) t[e] = 0;
  }
  function re(t) {
    var e = t.state,
      n = e.pending;
    n > t.avail_out && (n = t.avail_out),
      0 !== n &&
        (gt.arraySet(t.output, e.pending_buf, e.pending_out, n, t.next_out),
        (t.next_out += n),
        (e.pending_out += n),
        (t.total_out += n),
        (t.avail_out -= n),
        (e.pending -= n),
        0 === e.pending && (e.pending_out = 0));
  }
  function ie(t, e) {
    Xt._tr_flush_block(
      t,
      t.block_start >= 0 ? t.block_start : -1,
      t.strstart - t.block_start,
      e
    ),
      (t.block_start = t.strstart),
      re(t.strm);
  }
  function oe(t, e) {
    t.pending_buf[t.pending++] = e;
  }
  function ae(t, e) {
    (t.pending_buf[t.pending++] = (e >>> 8) & 255),
      (t.pending_buf[t.pending++] = 255 & e);
  }
  function se(t, e, n, r) {
    var i = t.avail_in;
    return (
      i > r && (i = r),
      0 === i
        ? 0
        : ((t.avail_in -= i),
          gt.arraySet(e, t.input, t.next_in, i, n),
          1 === t.state.wrap
            ? (t.adler = Zt(t.adler, e, i, n))
            : 2 === t.state.wrap && (t.adler = Qt(t.adler, e, i, n)),
          (t.next_in += i),
          (t.total_in += i),
          i)
    );
  }
  function le(t, e) {
    var n,
      r,
      i = t.max_chain_length,
      o = t.strstart,
      a = t.prev_length,
      s = t.nice_match,
      l = t.strstart > t.w_size - 262 ? t.strstart - (t.w_size - 262) : 0,
      h = t.window,
      u = t.w_mask,
      c = t.prev,
      d = t.strstart + 258,
      f = h[o + a - 1],
      p = h[o + a];
    t.prev_length >= t.good_match && (i >>= 2),
      s > t.lookahead && (s = t.lookahead);
    do {
      if (
        h[(n = e) + a] === p &&
        h[n + a - 1] === f &&
        h[n] === h[o] &&
        h[++n] === h[o + 1]
      ) {
        (o += 2), n++;
        do {} while (
          h[++o] === h[++n] &&
          h[++o] === h[++n] &&
          h[++o] === h[++n] &&
          h[++o] === h[++n] &&
          h[++o] === h[++n] &&
          h[++o] === h[++n] &&
          h[++o] === h[++n] &&
          h[++o] === h[++n] &&
          o < d
        );
        if (((r = 258 - (d - o)), (o = d - 258), r > a)) {
          if (((t.match_start = e), (a = r), r >= s)) break;
          (f = h[o + a - 1]), (p = h[o + a]);
        }
      }
    } while ((e = c[e & u]) > l && 0 != --i);
    return a <= t.lookahead ? a : t.lookahead;
  }
  function he(t) {
    var e,
      n,
      r,
      i,
      o,
      a = t.w_size;
    do {
      if (
        ((i = t.window_size - t.lookahead - t.strstart),
        t.strstart >= a + (a - 262))
      ) {
        gt.arraySet(t.window, t.window, a, a, 0),
          (t.match_start -= a),
          (t.strstart -= a),
          (t.block_start -= a),
          (e = n = t.hash_size);
        do {
          (r = t.head[--e]), (t.head[e] = r >= a ? r - a : 0);
        } while (--n);
        e = n = a;
        do {
          (r = t.prev[--e]), (t.prev[e] = r >= a ? r - a : 0);
        } while (--n);
        i += a;
      }
      if (0 === t.strm.avail_in) break;
      if (
        ((n = se(t.strm, t.window, t.strstart + t.lookahead, i)),
        (t.lookahead += n),
        t.lookahead + t.insert >= 3)
      )
        for (
          o = t.strstart - t.insert,
            t.ins_h = t.window[o],
            t.ins_h =
              ((t.ins_h << t.hash_shift) ^ t.window[o + 1]) & t.hash_mask;
          t.insert &&
          ((t.ins_h =
            ((t.ins_h << t.hash_shift) ^ t.window[o + 3 - 1]) & t.hash_mask),
          (t.prev[o & t.w_mask] = t.head[t.ins_h]),
          (t.head[t.ins_h] = o),
          o++,
          t.insert--,
          !(t.lookahead + t.insert < 3));

        );
    } while (t.lookahead < 262 && 0 !== t.strm.avail_in);
  }
  function ue(t, e) {
    for (var n, r; ; ) {
      if (t.lookahead < 262) {
        if ((he(t), t.lookahead < 262 && 0 === e)) return 1;
        if (0 === t.lookahead) break;
      }
      if (
        ((n = 0),
        t.lookahead >= 3 &&
          ((t.ins_h =
            ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 3 - 1]) &
            t.hash_mask),
          (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
          (t.head[t.ins_h] = t.strstart)),
        0 !== n &&
          t.strstart - n <= t.w_size - 262 &&
          (t.match_length = le(t, n)),
        t.match_length >= 3)
      )
        if (
          ((r = Xt._tr_tally(
            t,
            t.strstart - t.match_start,
            t.match_length - 3
          )),
          (t.lookahead -= t.match_length),
          t.match_length <= t.max_lazy_match && t.lookahead >= 3)
        ) {
          t.match_length--;
          do {
            t.strstart++,
              (t.ins_h =
                ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 3 - 1]) &
                t.hash_mask),
              (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
              (t.head[t.ins_h] = t.strstart);
          } while (0 != --t.match_length);
          t.strstart++;
        } else
          (t.strstart += t.match_length),
            (t.match_length = 0),
            (t.ins_h = t.window[t.strstart]),
            (t.ins_h =
              ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 1]) &
              t.hash_mask);
      else
        (r = Xt._tr_tally(t, 0, t.window[t.strstart])),
          t.lookahead--,
          t.strstart++;
      if (r && (ie(t, !1), 0 === t.strm.avail_out)) return 1;
    }
    return (
      (t.insert = t.strstart < 2 ? t.strstart : 2),
      4 === e
        ? (ie(t, !0), 0 === t.strm.avail_out ? 3 : 4)
        : t.last_lit && (ie(t, !1), 0 === t.strm.avail_out)
        ? 1
        : 2
    );
  }
  function ce(t, e) {
    for (var n, r, i; ; ) {
      if (t.lookahead < 262) {
        if ((he(t), t.lookahead < 262 && 0 === e)) return 1;
        if (0 === t.lookahead) break;
      }
      if (
        ((n = 0),
        t.lookahead >= 3 &&
          ((t.ins_h =
            ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 3 - 1]) &
            t.hash_mask),
          (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
          (t.head[t.ins_h] = t.strstart)),
        (t.prev_length = t.match_length),
        (t.prev_match = t.match_start),
        (t.match_length = 2),
        0 !== n &&
          t.prev_length < t.max_lazy_match &&
          t.strstart - n <= t.w_size - 262 &&
          ((t.match_length = le(t, n)),
          t.match_length <= 5 &&
            (1 === t.strategy ||
              (3 === t.match_length && t.strstart - t.match_start > 4096)) &&
            (t.match_length = 2)),
        t.prev_length >= 3 && t.match_length <= t.prev_length)
      ) {
        (i = t.strstart + t.lookahead - 3),
          (r = Xt._tr_tally(
            t,
            t.strstart - 1 - t.prev_match,
            t.prev_length - 3
          )),
          (t.lookahead -= t.prev_length - 1),
          (t.prev_length -= 2);
        do {
          ++t.strstart <= i &&
            ((t.ins_h =
              ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 3 - 1]) &
              t.hash_mask),
            (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
            (t.head[t.ins_h] = t.strstart));
        } while (0 != --t.prev_length);
        if (
          ((t.match_available = 0),
          (t.match_length = 2),
          t.strstart++,
          r && (ie(t, !1), 0 === t.strm.avail_out))
        )
          return 1;
      } else if (t.match_available) {
        if (
          ((r = Xt._tr_tally(t, 0, t.window[t.strstart - 1])) && ie(t, !1),
          t.strstart++,
          t.lookahead--,
          0 === t.strm.avail_out)
        )
          return 1;
      } else (t.match_available = 1), t.strstart++, t.lookahead--;
    }
    return (
      t.match_available &&
        ((r = Xt._tr_tally(t, 0, t.window[t.strstart - 1])),
        (t.match_available = 0)),
      (t.insert = t.strstart < 2 ? t.strstart : 2),
      4 === e
        ? (ie(t, !0), 0 === t.strm.avail_out ? 3 : 4)
        : t.last_lit && (ie(t, !1), 0 === t.strm.avail_out)
        ? 1
        : 2
    );
  }
  function de(t, e, n, r, i) {
    (this.good_length = t),
      (this.max_lazy = e),
      (this.nice_length = n),
      (this.max_chain = r),
      (this.func = i);
  }
  function fe() {
    (this.strm = null),
      (this.status = 0),
      (this.pending_buf = null),
      (this.pending_buf_size = 0),
      (this.pending_out = 0),
      (this.pending = 0),
      (this.wrap = 0),
      (this.gzhead = null),
      (this.gzindex = 0),
      (this.method = 8),
      (this.last_flush = -1),
      (this.w_size = 0),
      (this.w_bits = 0),
      (this.w_mask = 0),
      (this.window = null),
      (this.window_size = 0),
      (this.prev = null),
      (this.head = null),
      (this.ins_h = 0),
      (this.hash_size = 0),
      (this.hash_bits = 0),
      (this.hash_mask = 0),
      (this.hash_shift = 0),
      (this.block_start = 0),
      (this.match_length = 0),
      (this.prev_match = 0),
      (this.match_available = 0),
      (this.strstart = 0),
      (this.match_start = 0),
      (this.lookahead = 0),
      (this.prev_length = 0),
      (this.max_chain_length = 0),
      (this.max_lazy_match = 0),
      (this.level = 0),
      (this.strategy = 0),
      (this.good_match = 0),
      (this.nice_match = 0),
      (this.dyn_ltree = new gt.Buf16(1146)),
      (this.dyn_dtree = new gt.Buf16(122)),
      (this.bl_tree = new gt.Buf16(78)),
      ne(this.dyn_ltree),
      ne(this.dyn_dtree),
      ne(this.bl_tree),
      (this.l_desc = null),
      (this.d_desc = null),
      (this.bl_desc = null),
      (this.bl_count = new gt.Buf16(16)),
      (this.heap = new gt.Buf16(573)),
      ne(this.heap),
      (this.heap_len = 0),
      (this.heap_max = 0),
      (this.depth = new gt.Buf16(573)),
      ne(this.depth),
      (this.l_buf = 0),
      (this.lit_bufsize = 0),
      (this.last_lit = 0),
      (this.d_buf = 0),
      (this.opt_len = 0),
      (this.static_len = 0),
      (this.matches = 0),
      (this.insert = 0),
      (this.bi_buf = 0),
      (this.bi_valid = 0);
  }
  function pe(t) {
    var e;
    return t && t.state
      ? ((t.total_in = t.total_out = 0),
        (t.data_type = 2),
        ((e = t.state).pending = 0),
        (e.pending_out = 0),
        e.wrap < 0 && (e.wrap = -e.wrap),
        (e.status = e.wrap ? 42 : 113),
        (t.adler = 2 === e.wrap ? 0 : 1),
        (e.last_flush = 0),
        Xt._tr_init(e),
        0)
      : te(t, -2);
  }
  function ge(t) {
    var e,
      n = pe(t);
    return (
      0 === n &&
        (((e = t.state).window_size = 2 * e.w_size),
        ne(e.head),
        (e.max_lazy_match = Jt[e.level].max_lazy),
        (e.good_match = Jt[e.level].good_length),
        (e.nice_match = Jt[e.level].nice_length),
        (e.max_chain_length = Jt[e.level].max_chain),
        (e.strstart = 0),
        (e.block_start = 0),
        (e.lookahead = 0),
        (e.insert = 0),
        (e.match_length = e.prev_length = 2),
        (e.match_available = 0),
        (e.ins_h = 0)),
      n
    );
  }
  function ve(t, e, n, r, i, o) {
    if (!t) return -2;
    var a = 1;
    if (
      (-1 === e && (e = 6),
      r < 0 ? ((a = 0), (r = -r)) : r > 15 && ((a = 2), (r -= 16)),
      i < 1 ||
        i > 9 ||
        8 !== n ||
        r < 8 ||
        r > 15 ||
        e < 0 ||
        e > 9 ||
        o < 0 ||
        o > 4)
    )
      return te(t, -2);
    8 === r && (r = 9);
    var s = new fe();
    return (
      (t.state = s),
      (s.strm = t),
      (s.wrap = a),
      (s.gzhead = null),
      (s.w_bits = r),
      (s.w_size = 1 << s.w_bits),
      (s.w_mask = s.w_size - 1),
      (s.hash_bits = i + 7),
      (s.hash_size = 1 << s.hash_bits),
      (s.hash_mask = s.hash_size - 1),
      (s.hash_shift = ~~((s.hash_bits + 3 - 1) / 3)),
      (s.window = new gt.Buf8(2 * s.w_size)),
      (s.head = new gt.Buf16(s.hash_size)),
      (s.prev = new gt.Buf16(s.w_size)),
      (s.lit_bufsize = 1 << (i + 6)),
      (s.pending_buf_size = 4 * s.lit_bufsize),
      (s.pending_buf = new gt.Buf8(s.pending_buf_size)),
      (s.d_buf = 1 * s.lit_bufsize),
      (s.l_buf = 3 * s.lit_bufsize),
      (s.level = e),
      (s.strategy = o),
      (s.method = n),
      ge(t)
    );
  }
  Jt = [
    new de(0, 0, 0, 0, function (t, e) {
      var n = 65535;
      for (n > t.pending_buf_size - 5 && (n = t.pending_buf_size - 5); ; ) {
        if (t.lookahead <= 1) {
          if ((he(t), 0 === t.lookahead && 0 === e)) return 1;
          if (0 === t.lookahead) break;
        }
        (t.strstart += t.lookahead), (t.lookahead = 0);
        var r = t.block_start + n;
        if (
          (0 === t.strstart || t.strstart >= r) &&
          ((t.lookahead = t.strstart - r),
          (t.strstart = r),
          ie(t, !1),
          0 === t.strm.avail_out)
        )
          return 1;
        if (
          t.strstart - t.block_start >= t.w_size - 262 &&
          (ie(t, !1), 0 === t.strm.avail_out)
        )
          return 1;
      }
      return (
        (t.insert = 0),
        4 === e
          ? (ie(t, !0), 0 === t.strm.avail_out ? 3 : 4)
          : (t.strstart > t.block_start && (ie(t, !1), t.strm.avail_out), 1)
      );
    }),
    new de(4, 4, 8, 4, ue),
    new de(4, 5, 16, 8, ue),
    new de(4, 6, 32, 32, ue),
    new de(4, 4, 16, 16, ce),
    new de(8, 16, 32, 32, ce),
    new de(8, 16, 128, 128, ce),
    new de(8, 32, 128, 256, ce),
    new de(32, 128, 258, 1024, ce),
    new de(32, 258, 258, 4096, ce),
  ];
  var ye = {
      deflateInit: function (t, e) {
        return ve(t, e, 8, 15, 8, 0);
      },
      deflateInit2: ve,
      deflateReset: ge,
      deflateResetKeep: pe,
      deflateSetHeader: function (t, e) {
        return t && t.state
          ? 2 !== t.state.wrap
            ? -2
            : ((t.state.gzhead = e), 0)
          : -2;
      },
      deflate: function (t, e) {
        var n, r, i, o;
        if (!t || !t.state || e > 5 || e < 0) return t ? te(t, -2) : -2;
        if (
          ((r = t.state),
          !t.output ||
            (!t.input && 0 !== t.avail_in) ||
            (666 === r.status && 4 !== e))
        )
          return te(t, 0 === t.avail_out ? -5 : -2);
        if (
          ((r.strm = t),
          (n = r.last_flush),
          (r.last_flush = e),
          42 === r.status)
        )
          if (2 === r.wrap)
            (t.adler = 0),
              oe(r, 31),
              oe(r, 139),
              oe(r, 8),
              r.gzhead
                ? (oe(
                    r,
                    (r.gzhead.text ? 1 : 0) +
                      (r.gzhead.hcrc ? 2 : 0) +
                      (r.gzhead.extra ? 4 : 0) +
                      (r.gzhead.name ? 8 : 0) +
                      (r.gzhead.comment ? 16 : 0)
                  ),
                  oe(r, 255 & r.gzhead.time),
                  oe(r, (r.gzhead.time >> 8) & 255),
                  oe(r, (r.gzhead.time >> 16) & 255),
                  oe(r, (r.gzhead.time >> 24) & 255),
                  oe(
                    r,
                    9 === r.level ? 2 : r.strategy >= 2 || r.level < 2 ? 4 : 0
                  ),
                  oe(r, 255 & r.gzhead.os),
                  r.gzhead.extra &&
                    r.gzhead.extra.length &&
                    (oe(r, 255 & r.gzhead.extra.length),
                    oe(r, (r.gzhead.extra.length >> 8) & 255)),
                  r.gzhead.hcrc &&
                    (t.adler = Qt(t.adler, r.pending_buf, r.pending, 0)),
                  (r.gzindex = 0),
                  (r.status = 69))
                : (oe(r, 0),
                  oe(r, 0),
                  oe(r, 0),
                  oe(r, 0),
                  oe(r, 0),
                  oe(
                    r,
                    9 === r.level ? 2 : r.strategy >= 2 || r.level < 2 ? 4 : 0
                  ),
                  oe(r, 3),
                  (r.status = 113));
          else {
            var a = (8 + ((r.w_bits - 8) << 4)) << 8;
            (a |=
              (r.strategy >= 2 || r.level < 2
                ? 0
                : r.level < 6
                ? 1
                : 6 === r.level
                ? 2
                : 3) << 6),
              0 !== r.strstart && (a |= 32),
              (a += 31 - (a % 31)),
              (r.status = 113),
              ae(r, a),
              0 !== r.strstart &&
                (ae(r, t.adler >>> 16), ae(r, 65535 & t.adler)),
              (t.adler = 1);
          }
        if (69 === r.status)
          if (r.gzhead.extra) {
            for (
              i = r.pending;
              r.gzindex < (65535 & r.gzhead.extra.length) &&
              (r.pending !== r.pending_buf_size ||
                (r.gzhead.hcrc &&
                  r.pending > i &&
                  (t.adler = Qt(t.adler, r.pending_buf, r.pending - i, i)),
                re(t),
                (i = r.pending),
                r.pending !== r.pending_buf_size));

            )
              oe(r, 255 & r.gzhead.extra[r.gzindex]), r.gzindex++;
            r.gzhead.hcrc &&
              r.pending > i &&
              (t.adler = Qt(t.adler, r.pending_buf, r.pending - i, i)),
              r.gzindex === r.gzhead.extra.length &&
                ((r.gzindex = 0), (r.status = 73));
          } else r.status = 73;
        if (73 === r.status)
          if (r.gzhead.name) {
            i = r.pending;
            do {
              if (
                r.pending === r.pending_buf_size &&
                (r.gzhead.hcrc &&
                  r.pending > i &&
                  (t.adler = Qt(t.adler, r.pending_buf, r.pending - i, i)),
                re(t),
                (i = r.pending),
                r.pending === r.pending_buf_size)
              ) {
                o = 1;
                break;
              }
              (o =
                r.gzindex < r.gzhead.name.length
                  ? 255 & r.gzhead.name.charCodeAt(r.gzindex++)
                  : 0),
                oe(r, o);
            } while (0 !== o);
            r.gzhead.hcrc &&
              r.pending > i &&
              (t.adler = Qt(t.adler, r.pending_buf, r.pending - i, i)),
              0 === o && ((r.gzindex = 0), (r.status = 91));
          } else r.status = 91;
        if (91 === r.status)
          if (r.gzhead.comment) {
            i = r.pending;
            do {
              if (
                r.pending === r.pending_buf_size &&
                (r.gzhead.hcrc &&
                  r.pending > i &&
                  (t.adler = Qt(t.adler, r.pending_buf, r.pending - i, i)),
                re(t),
                (i = r.pending),
                r.pending === r.pending_buf_size)
              ) {
                o = 1;
                break;
              }
              (o =
                r.gzindex < r.gzhead.comment.length
                  ? 255 & r.gzhead.comment.charCodeAt(r.gzindex++)
                  : 0),
                oe(r, o);
            } while (0 !== o);
            r.gzhead.hcrc &&
              r.pending > i &&
              (t.adler = Qt(t.adler, r.pending_buf, r.pending - i, i)),
              0 === o && (r.status = 103);
          } else r.status = 103;
        if (
          (103 === r.status &&
            (r.gzhead.hcrc
              ? (r.pending + 2 > r.pending_buf_size && re(t),
                r.pending + 2 <= r.pending_buf_size &&
                  (oe(r, 255 & t.adler),
                  oe(r, (t.adler >> 8) & 255),
                  (t.adler = 0),
                  (r.status = 113)))
              : (r.status = 113)),
          0 !== r.pending)
        ) {
          if ((re(t), 0 === t.avail_out)) return (r.last_flush = -1), 0;
        } else if (0 === t.avail_in && ee(e) <= ee(n) && 4 !== e)
          return te(t, -5);
        if (666 === r.status && 0 !== t.avail_in) return te(t, -5);
        if (
          0 !== t.avail_in ||
          0 !== r.lookahead ||
          (0 !== e && 666 !== r.status)
        ) {
          var s =
            2 === r.strategy
              ? (function (t, e) {
                  for (var n; ; ) {
                    if (0 === t.lookahead && (he(t), 0 === t.lookahead)) {
                      if (0 === e) return 1;
                      break;
                    }
                    if (
                      ((t.match_length = 0),
                      (n = Xt._tr_tally(t, 0, t.window[t.strstart])),
                      t.lookahead--,
                      t.strstart++,
                      n && (ie(t, !1), 0 === t.strm.avail_out))
                    )
                      return 1;
                  }
                  return (
                    (t.insert = 0),
                    4 === e
                      ? (ie(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                      : t.last_lit && (ie(t, !1), 0 === t.strm.avail_out)
                      ? 1
                      : 2
                  );
                })(r, e)
              : 3 === r.strategy
              ? (function (t, e) {
                  for (var n, r, i, o, a = t.window; ; ) {
                    if (t.lookahead <= 258) {
                      if ((he(t), t.lookahead <= 258 && 0 === e)) return 1;
                      if (0 === t.lookahead) break;
                    }
                    if (
                      ((t.match_length = 0),
                      t.lookahead >= 3 &&
                        t.strstart > 0 &&
                        (r = a[(i = t.strstart - 1)]) === a[++i] &&
                        r === a[++i] &&
                        r === a[++i])
                    ) {
                      o = t.strstart + 258;
                      do {} while (
                        r === a[++i] &&
                        r === a[++i] &&
                        r === a[++i] &&
                        r === a[++i] &&
                        r === a[++i] &&
                        r === a[++i] &&
                        r === a[++i] &&
                        r === a[++i] &&
                        i < o
                      );
                      (t.match_length = 258 - (o - i)),
                        t.match_length > t.lookahead &&
                          (t.match_length = t.lookahead);
                    }
                    if (
                      (t.match_length >= 3
                        ? ((n = Xt._tr_tally(t, 1, t.match_length - 3)),
                          (t.lookahead -= t.match_length),
                          (t.strstart += t.match_length),
                          (t.match_length = 0))
                        : ((n = Xt._tr_tally(t, 0, t.window[t.strstart])),
                          t.lookahead--,
                          t.strstart++),
                      n && (ie(t, !1), 0 === t.strm.avail_out))
                    )
                      return 1;
                  }
                  return (
                    (t.insert = 0),
                    4 === e
                      ? (ie(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                      : t.last_lit && (ie(t, !1), 0 === t.strm.avail_out)
                      ? 1
                      : 2
                  );
                })(r, e)
              : Jt[r.level].func(r, e);
          if (((3 !== s && 4 !== s) || (r.status = 666), 1 === s || 3 === s))
            return 0 === t.avail_out && (r.last_flush = -1), 0;
          if (
            2 === s &&
            (1 === e
              ? Xt._tr_align(r)
              : 5 !== e &&
                (Xt._tr_stored_block(r, 0, 0, !1),
                3 === e &&
                  (ne(r.head),
                  0 === r.lookahead &&
                    ((r.strstart = 0), (r.block_start = 0), (r.insert = 0)))),
            re(t),
            0 === t.avail_out)
          )
            return (r.last_flush = -1), 0;
        }
        return 4 !== e
          ? 0
          : r.wrap <= 0
          ? 1
          : (2 === r.wrap
              ? (oe(r, 255 & t.adler),
                oe(r, (t.adler >> 8) & 255),
                oe(r, (t.adler >> 16) & 255),
                oe(r, (t.adler >> 24) & 255),
                oe(r, 255 & t.total_in),
                oe(r, (t.total_in >> 8) & 255),
                oe(r, (t.total_in >> 16) & 255),
                oe(r, (t.total_in >> 24) & 255))
              : (ae(r, t.adler >>> 16), ae(r, 65535 & t.adler)),
            re(t),
            r.wrap > 0 && (r.wrap = -r.wrap),
            0 !== r.pending ? 0 : 1);
      },
      deflateEnd: function (t) {
        var e;
        return t && t.state
          ? 42 !== (e = t.state.status) &&
            69 !== e &&
            73 !== e &&
            91 !== e &&
            103 !== e &&
            113 !== e &&
            666 !== e
            ? te(t, -2)
            : ((t.state = null), 113 === e ? te(t, -3) : 0)
          : -2;
      },
      deflateSetDictionary: function (t, e) {
        var n,
          r,
          i,
          o,
          a,
          s,
          l,
          h,
          u = e.length;
        if (!t || !t.state) return -2;
        if (
          2 === (o = (n = t.state).wrap) ||
          (1 === o && 42 !== n.status) ||
          n.lookahead
        )
          return -2;
        for (
          1 === o && (t.adler = Zt(t.adler, e, u, 0)),
            n.wrap = 0,
            u >= n.w_size &&
              (0 === o &&
                (ne(n.head),
                (n.strstart = 0),
                (n.block_start = 0),
                (n.insert = 0)),
              (h = new gt.Buf8(n.w_size)),
              gt.arraySet(h, e, u - n.w_size, n.w_size, 0),
              (e = h),
              (u = n.w_size)),
            a = t.avail_in,
            s = t.next_in,
            l = t.input,
            t.avail_in = u,
            t.next_in = 0,
            t.input = e,
            he(n);
          n.lookahead >= 3;

        ) {
          (r = n.strstart), (i = n.lookahead - 2);
          do {
            (n.ins_h =
              ((n.ins_h << n.hash_shift) ^ n.window[r + 3 - 1]) & n.hash_mask),
              (n.prev[r & n.w_mask] = n.head[n.ins_h]),
              (n.head[n.ins_h] = r),
              r++;
          } while (--i);
          (n.strstart = r), (n.lookahead = 2), he(n);
        }
        return (
          (n.strstart += n.lookahead),
          (n.block_start = n.strstart),
          (n.insert = n.lookahead),
          (n.lookahead = 0),
          (n.match_length = n.prev_length = 2),
          (n.match_available = 0),
          (t.next_in = s),
          (t.input = l),
          (t.avail_in = a),
          (n.wrap = o),
          0
        );
      },
      deflateInfo: "pako deflate (from Nodeca project)",
    },
    me = !0,
    be = !0;
  try {
    String.fromCharCode.apply(null, [0]);
  } catch (t) {
    me = !1;
  }
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch (t) {
    be = !1;
  }
  for (var we = new gt.Buf8(256), xe = 0; xe < 256; xe++)
    we[xe] =
      xe >= 252
        ? 6
        : xe >= 248
        ? 5
        : xe >= 240
        ? 4
        : xe >= 224
        ? 3
        : xe >= 192
        ? 2
        : 1;
  we[254] = we[254] = 1;
  function ke(t, e) {
    if (e < 65534 && ((t.subarray && be) || (!t.subarray && me)))
      return String.fromCharCode.apply(null, gt.shrinkBuf(t, e));
    for (var n = "", r = 0; r < e; r++) n += String.fromCharCode(t[r]);
    return n;
  }
  var Fe = function (t) {
      var e,
        n,
        r,
        i,
        o,
        a = t.length,
        s = 0;
      for (i = 0; i < a; i++)
        55296 == (64512 & (n = t.charCodeAt(i))) &&
          i + 1 < a &&
          56320 == (64512 & (r = t.charCodeAt(i + 1))) &&
          ((n = 65536 + ((n - 55296) << 10) + (r - 56320)), i++),
          (s += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4);
      for (e = new gt.Buf8(s), o = 0, i = 0; o < s; i++)
        55296 == (64512 & (n = t.charCodeAt(i))) &&
          i + 1 < a &&
          56320 == (64512 & (r = t.charCodeAt(i + 1))) &&
          ((n = 65536 + ((n - 55296) << 10) + (r - 56320)), i++),
          n < 128
            ? (e[o++] = n)
            : n < 2048
            ? ((e[o++] = 192 | (n >>> 6)), (e[o++] = 128 | (63 & n)))
            : n < 65536
            ? ((e[o++] = 224 | (n >>> 12)),
              (e[o++] = 128 | ((n >>> 6) & 63)),
              (e[o++] = 128 | (63 & n)))
            : ((e[o++] = 240 | (n >>> 18)),
              (e[o++] = 128 | ((n >>> 12) & 63)),
              (e[o++] = 128 | ((n >>> 6) & 63)),
              (e[o++] = 128 | (63 & n)));
      return e;
    },
    Se = function (t) {
      return ke(t, t.length);
    },
    Ce = function (t) {
      for (var e = new gt.Buf8(t.length), n = 0, r = e.length; n < r; n++)
        e[n] = t.charCodeAt(n);
      return e;
    },
    Ae = function (t, e) {
      var n,
        r,
        i,
        o,
        a = e || t.length,
        s = new Array(2 * a);
      for (r = 0, n = 0; n < a; )
        if ((i = t[n++]) < 128) s[r++] = i;
        else if ((o = we[i]) > 4) (s[r++] = 65533), (n += o - 1);
        else {
          for (i &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && n < a; )
            (i = (i << 6) | (63 & t[n++])), o--;
          o > 1
            ? (s[r++] = 65533)
            : i < 65536
            ? (s[r++] = i)
            : ((i -= 65536),
              (s[r++] = 55296 | ((i >> 10) & 1023)),
              (s[r++] = 56320 | (1023 & i)));
        }
      return ke(s, r);
    },
    Te = function (t, e) {
      var n;
      for (
        (e = e || t.length) > t.length && (e = t.length), n = e - 1;
        n >= 0 && 128 == (192 & t[n]);

      )
        n--;
      return n < 0 || 0 === n ? e : n + we[t[n]] > e ? n : e;
    };
  var Pe = function () {
      (this.input = null),
        (this.next_in = 0),
        (this.avail_in = 0),
        (this.total_in = 0),
        (this.output = null),
        (this.next_out = 0),
        (this.avail_out = 0),
        (this.total_out = 0),
        (this.msg = ""),
        (this.state = null),
        (this.data_type = 2),
        (this.adler = 0);
    },
    ze = Object.prototype.toString;
  function Re(t) {
    if (!(this instanceof Re)) return new Re(t);
    this.options = gt.assign(
      {
        level: -1,
        method: 8,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: 0,
        to: "",
      },
      t || {}
    );
    var e = this.options;
    e.raw && e.windowBits > 0
      ? (e.windowBits = -e.windowBits)
      : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16),
      (this.err = 0),
      (this.msg = ""),
      (this.ended = !1),
      (this.chunks = []),
      (this.strm = new Pe()),
      (this.strm.avail_out = 0);
    var n = ye.deflateInit2(
      this.strm,
      e.level,
      e.method,
      e.windowBits,
      e.memLevel,
      e.strategy
    );
    if (0 !== n) throw new Error($t[n]);
    if ((e.header && ye.deflateSetHeader(this.strm, e.header), e.dictionary)) {
      var r;
      if (
        ((r =
          "string" == typeof e.dictionary
            ? Fe(e.dictionary)
            : "[object ArrayBuffer]" === ze.call(e.dictionary)
            ? new Uint8Array(e.dictionary)
            : e.dictionary),
        0 !== (n = ye.deflateSetDictionary(this.strm, r)))
      )
        throw new Error($t[n]);
      this._dict_set = !0;
    }
  }
  function Oe(t, e) {
    var n = new Re(e);
    if ((n.push(t, !0), n.err)) throw n.msg || $t[n.err];
    return n.result;
  }
  (Re.prototype.push = function (t, e) {
    var n,
      r,
      i = this.strm,
      o = this.options.chunkSize;
    if (this.ended) return !1;
    (r = e === ~~e ? e : !0 === e ? 4 : 0),
      "string" == typeof t
        ? (i.input = Fe(t))
        : "[object ArrayBuffer]" === ze.call(t)
        ? (i.input = new Uint8Array(t))
        : (i.input = t),
      (i.next_in = 0),
      (i.avail_in = i.input.length);
    do {
      if (
        (0 === i.avail_out &&
          ((i.output = new gt.Buf8(o)), (i.next_out = 0), (i.avail_out = o)),
        1 !== (n = ye.deflate(i, r)) && 0 !== n)
      )
        return this.onEnd(n), (this.ended = !0), !1;
      (0 !== i.avail_out && (0 !== i.avail_in || (4 !== r && 2 !== r))) ||
        ("string" === this.options.to
          ? this.onData(Se(gt.shrinkBuf(i.output, i.next_out)))
          : this.onData(gt.shrinkBuf(i.output, i.next_out)));
    } while ((i.avail_in > 0 || 0 === i.avail_out) && 1 !== n);
    return 4 === r
      ? ((n = ye.deflateEnd(this.strm)),
        this.onEnd(n),
        (this.ended = !0),
        0 === n)
      : 2 !== r || (this.onEnd(0), (i.avail_out = 0), !0);
  }),
    (Re.prototype.onData = function (t) {
      this.chunks.push(t);
    }),
    (Re.prototype.onEnd = function (t) {
      0 === t &&
        ("string" === this.options.to
          ? (this.result = this.chunks.join(""))
          : (this.result = gt.flattenChunks(this.chunks))),
        (this.chunks = []),
        (this.err = t),
        (this.msg = this.strm.msg);
    });
  var De = {
      Deflate: Re,
      deflate: Oe,
      deflateRaw: function (t, e) {
        return ((e = e || {}).raw = !0), Oe(t, e);
      },
      gzip: function (t, e) {
        return ((e = e || {}).gzip = !0), Oe(t, e);
      },
    },
    Be = function (t, e) {
      var n,
        r,
        i,
        o,
        a,
        s,
        l,
        h,
        u,
        c,
        d,
        f,
        p,
        g,
        v,
        y,
        m,
        b,
        w,
        x,
        k,
        F,
        S,
        C,
        A;
      (n = t.state),
        (r = t.next_in),
        (C = t.input),
        (i = r + (t.avail_in - 5)),
        (o = t.next_out),
        (A = t.output),
        (a = o - (e - t.avail_out)),
        (s = o + (t.avail_out - 257)),
        (l = n.dmax),
        (h = n.wsize),
        (u = n.whave),
        (c = n.wnext),
        (d = n.window),
        (f = n.hold),
        (p = n.bits),
        (g = n.lencode),
        (v = n.distcode),
        (y = (1 << n.lenbits) - 1),
        (m = (1 << n.distbits) - 1);
      t: do {
        p < 15 && ((f += C[r++] << p), (p += 8), (f += C[r++] << p), (p += 8)),
          (b = g[f & y]);
        e: for (;;) {
          if (((f >>>= w = b >>> 24), (p -= w), 0 === (w = (b >>> 16) & 255)))
            A[o++] = 65535 & b;
          else {
            if (!(16 & w)) {
              if (0 == (64 & w)) {
                b = g[(65535 & b) + (f & ((1 << w) - 1))];
                continue e;
              }
              if (32 & w) {
                n.mode = 12;
                break t;
              }
              (t.msg = "invalid literal/length code"), (n.mode = 30);
              break t;
            }
            (x = 65535 & b),
              (w &= 15) &&
                (p < w && ((f += C[r++] << p), (p += 8)),
                (x += f & ((1 << w) - 1)),
                (f >>>= w),
                (p -= w)),
              p < 15 &&
                ((f += C[r++] << p), (p += 8), (f += C[r++] << p), (p += 8)),
              (b = v[f & m]);
            n: for (;;) {
              if (
                ((f >>>= w = b >>> 24),
                (p -= w),
                !(16 & (w = (b >>> 16) & 255)))
              ) {
                if (0 == (64 & w)) {
                  b = v[(65535 & b) + (f & ((1 << w) - 1))];
                  continue n;
                }
                (t.msg = "invalid distance code"), (n.mode = 30);
                break t;
              }
              if (
                ((k = 65535 & b),
                p < (w &= 15) &&
                  ((f += C[r++] << p),
                  (p += 8) < w && ((f += C[r++] << p), (p += 8))),
                (k += f & ((1 << w) - 1)) > l)
              ) {
                (t.msg = "invalid distance too far back"), (n.mode = 30);
                break t;
              }
              if (((f >>>= w), (p -= w), k > (w = o - a))) {
                if ((w = k - w) > u && n.sane) {
                  (t.msg = "invalid distance too far back"), (n.mode = 30);
                  break t;
                }
                if (((F = 0), (S = d), 0 === c)) {
                  if (((F += h - w), w < x)) {
                    x -= w;
                    do {
                      A[o++] = d[F++];
                    } while (--w);
                    (F = o - k), (S = A);
                  }
                } else if (c < w) {
                  if (((F += h + c - w), (w -= c) < x)) {
                    x -= w;
                    do {
                      A[o++] = d[F++];
                    } while (--w);
                    if (((F = 0), c < x)) {
                      x -= w = c;
                      do {
                        A[o++] = d[F++];
                      } while (--w);
                      (F = o - k), (S = A);
                    }
                  }
                } else if (((F += c - w), w < x)) {
                  x -= w;
                  do {
                    A[o++] = d[F++];
                  } while (--w);
                  (F = o - k), (S = A);
                }
                for (; x > 2; )
                  (A[o++] = S[F++]),
                    (A[o++] = S[F++]),
                    (A[o++] = S[F++]),
                    (x -= 3);
                x && ((A[o++] = S[F++]), x > 1 && (A[o++] = S[F++]));
              } else {
                F = o - k;
                do {
                  (A[o++] = A[F++]),
                    (A[o++] = A[F++]),
                    (A[o++] = A[F++]),
                    (x -= 3);
                } while (x > 2);
                x && ((A[o++] = A[F++]), x > 1 && (A[o++] = A[F++]));
              }
              break;
            }
          }
          break;
        }
      } while (r < i && o < s);
      (r -= x = p >> 3),
        (f &= (1 << (p -= x << 3)) - 1),
        (t.next_in = r),
        (t.next_out = o),
        (t.avail_in = r < i ? i - r + 5 : 5 - (r - i)),
        (t.avail_out = o < s ? s - o + 257 : 257 - (o - s)),
        (n.hold = f),
        (n.bits = p);
    },
    Ne = [
      3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
      67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
    ],
    Ee = [
      16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19,
      19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
    ],
    je = [
      1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513,
      769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0,
    ],
    Me = [
      16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23,
      24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
    ],
    Ie = function (t, e, n, r, i, o, a, s) {
      var l,
        h,
        u,
        c,
        d,
        f,
        p,
        g,
        v,
        y = s.bits,
        m = 0,
        b = 0,
        w = 0,
        x = 0,
        k = 0,
        F = 0,
        S = 0,
        C = 0,
        A = 0,
        T = 0,
        P = null,
        z = 0,
        R = new gt.Buf16(16),
        O = new gt.Buf16(16),
        D = null,
        B = 0;
      for (m = 0; m <= 15; m++) R[m] = 0;
      for (b = 0; b < r; b++) R[e[n + b]]++;
      for (k = y, x = 15; x >= 1 && 0 === R[x]; x--);
      if ((k > x && (k = x), 0 === x))
        return (i[o++] = 20971520), (i[o++] = 20971520), (s.bits = 1), 0;
      for (w = 1; w < x && 0 === R[w]; w++);
      for (k < w && (k = w), C = 1, m = 1; m <= 15; m++)
        if (((C <<= 1), (C -= R[m]) < 0)) return -1;
      if (C > 0 && (0 === t || 1 !== x)) return -1;
      for (O[1] = 0, m = 1; m < 15; m++) O[m + 1] = O[m] + R[m];
      for (b = 0; b < r; b++) 0 !== e[n + b] && (a[O[e[n + b]]++] = b);
      if (
        (0 === t
          ? ((P = D = a), (f = 19))
          : 1 === t
          ? ((P = Ne), (z -= 257), (D = Ee), (B -= 257), (f = 256))
          : ((P = je), (D = Me), (f = -1)),
        (T = 0),
        (b = 0),
        (m = w),
        (d = o),
        (F = k),
        (S = 0),
        (u = -1),
        (c = (A = 1 << k) - 1),
        (1 === t && A > 852) || (2 === t && A > 592))
      )
        return 1;
      for (;;) {
        (p = m - S),
          a[b] < f
            ? ((g = 0), (v = a[b]))
            : a[b] > f
            ? ((g = D[B + a[b]]), (v = P[z + a[b]]))
            : ((g = 96), (v = 0)),
          (l = 1 << (m - S)),
          (w = h = 1 << F);
        do {
          i[d + (T >> S) + (h -= l)] = (p << 24) | (g << 16) | v | 0;
        } while (0 !== h);
        for (l = 1 << (m - 1); T & l; ) l >>= 1;
        if ((0 !== l ? ((T &= l - 1), (T += l)) : (T = 0), b++, 0 == --R[m])) {
          if (m === x) break;
          m = e[n + a[b]];
        }
        if (m > k && (T & c) !== u) {
          for (
            0 === S && (S = k), d += w, C = 1 << (F = m - S);
            F + S < x && !((C -= R[F + S]) <= 0);

          )
            F++, (C <<= 1);
          if (((A += 1 << F), (1 === t && A > 852) || (2 === t && A > 592)))
            return 1;
          i[(u = T & c)] = (k << 24) | (F << 16) | (d - o) | 0;
        }
      }
      return (
        0 !== T && (i[d + T] = ((m - S) << 24) | (64 << 16) | 0),
        (s.bits = k),
        0
      );
    };
  function Ue(t) {
    return (
      ((t >>> 24) & 255) +
      ((t >>> 8) & 65280) +
      ((65280 & t) << 8) +
      ((255 & t) << 24)
    );
  }
  function Ve() {
    (this.mode = 0),
      (this.last = !1),
      (this.wrap = 0),
      (this.havedict = !1),
      (this.flags = 0),
      (this.dmax = 0),
      (this.check = 0),
      (this.total = 0),
      (this.head = null),
      (this.wbits = 0),
      (this.wsize = 0),
      (this.whave = 0),
      (this.wnext = 0),
      (this.window = null),
      (this.hold = 0),
      (this.bits = 0),
      (this.length = 0),
      (this.offset = 0),
      (this.extra = 0),
      (this.lencode = null),
      (this.distcode = null),
      (this.lenbits = 0),
      (this.distbits = 0),
      (this.ncode = 0),
      (this.nlen = 0),
      (this.ndist = 0),
      (this.have = 0),
      (this.next = null),
      (this.lens = new gt.Buf16(320)),
      (this.work = new gt.Buf16(288)),
      (this.lendyn = null),
      (this.distdyn = null),
      (this.sane = 0),
      (this.back = 0),
      (this.was = 0);
  }
  function We(t) {
    var e;
    return t && t.state
      ? ((e = t.state),
        (t.total_in = t.total_out = e.total = 0),
        (t.msg = ""),
        e.wrap && (t.adler = 1 & e.wrap),
        (e.mode = 1),
        (e.last = 0),
        (e.havedict = 0),
        (e.dmax = 32768),
        (e.head = null),
        (e.hold = 0),
        (e.bits = 0),
        (e.lencode = e.lendyn = new gt.Buf32(852)),
        (e.distcode = e.distdyn = new gt.Buf32(592)),
        (e.sane = 1),
        (e.back = -1),
        0)
      : -2;
  }
  function qe(t) {
    var e;
    return t && t.state
      ? (((e = t.state).wsize = 0), (e.whave = 0), (e.wnext = 0), We(t))
      : -2;
  }
  function Le(t, e) {
    var n, r;
    return t && t.state
      ? ((r = t.state),
        e < 0 ? ((n = 0), (e = -e)) : ((n = 1 + (e >> 4)), e < 48 && (e &= 15)),
        e && (e < 8 || e > 15)
          ? -2
          : (null !== r.window && r.wbits !== e && (r.window = null),
            (r.wrap = n),
            (r.wbits = e),
            qe(t)))
      : -2;
  }
  function Ke(t, e) {
    var n, r;
    return t
      ? ((r = new Ve()),
        (t.state = r),
        (r.window = null),
        0 !== (n = Le(t, e)) && (t.state = null),
        n)
      : -2;
  }
  var Ge,
    He,
    _e = !0;
  function Xe(t) {
    if (_e) {
      var e;
      for (Ge = new gt.Buf32(512), He = new gt.Buf32(32), e = 0; e < 144; )
        t.lens[e++] = 8;
      for (; e < 256; ) t.lens[e++] = 9;
      for (; e < 280; ) t.lens[e++] = 7;
      for (; e < 288; ) t.lens[e++] = 8;
      for (Ie(1, t.lens, 0, 288, Ge, 0, t.work, { bits: 9 }), e = 0; e < 32; )
        t.lens[e++] = 5;
      Ie(2, t.lens, 0, 32, He, 0, t.work, { bits: 5 }), (_e = !1);
    }
    (t.lencode = Ge), (t.lenbits = 9), (t.distcode = He), (t.distbits = 5);
  }
  function Ze(t, e, n, r) {
    var i,
      o = t.state;
    return (
      null === o.window &&
        ((o.wsize = 1 << o.wbits),
        (o.wnext = 0),
        (o.whave = 0),
        (o.window = new gt.Buf8(o.wsize))),
      r >= o.wsize
        ? (gt.arraySet(o.window, e, n - o.wsize, o.wsize, 0),
          (o.wnext = 0),
          (o.whave = o.wsize))
        : ((i = o.wsize - o.wnext) > r && (i = r),
          gt.arraySet(o.window, e, n - r, i, o.wnext),
          (r -= i)
            ? (gt.arraySet(o.window, e, n - r, r, 0),
              (o.wnext = r),
              (o.whave = o.wsize))
            : ((o.wnext += i),
              o.wnext === o.wsize && (o.wnext = 0),
              o.whave < o.wsize && (o.whave += i))),
      0
    );
  }
  var Ye = {
      inflateReset: qe,
      inflateReset2: Le,
      inflateResetKeep: We,
      inflateInit: function (t) {
        return Ke(t, 15);
      },
      inflateInit2: Ke,
      inflate: function (t, e) {
        var n,
          r,
          i,
          o,
          a,
          s,
          l,
          h,
          u,
          c,
          d,
          f,
          p,
          g,
          v,
          y,
          m,
          b,
          w,
          x,
          k,
          F,
          S,
          C,
          A = 0,
          T = new gt.Buf8(4),
          P = [
            16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
          ];
        if (!t || !t.state || !t.output || (!t.input && 0 !== t.avail_in))
          return -2;
        12 === (n = t.state).mode && (n.mode = 13),
          (a = t.next_out),
          (i = t.output),
          (l = t.avail_out),
          (o = t.next_in),
          (r = t.input),
          (s = t.avail_in),
          (h = n.hold),
          (u = n.bits),
          (c = s),
          (d = l),
          (F = 0);
        t: for (;;)
          switch (n.mode) {
            case 1:
              if (0 === n.wrap) {
                n.mode = 13;
                break;
              }
              for (; u < 16; ) {
                if (0 === s) break t;
                s--, (h += r[o++] << u), (u += 8);
              }
              if (2 & n.wrap && 35615 === h) {
                (n.check = 0),
                  (T[0] = 255 & h),
                  (T[1] = (h >>> 8) & 255),
                  (n.check = Qt(n.check, T, 2, 0)),
                  (h = 0),
                  (u = 0),
                  (n.mode = 2);
                break;
              }
              if (
                ((n.flags = 0),
                n.head && (n.head.done = !1),
                !(1 & n.wrap) || (((255 & h) << 8) + (h >> 8)) % 31)
              ) {
                (t.msg = "incorrect header check"), (n.mode = 30);
                break;
              }
              if (8 != (15 & h)) {
                (t.msg = "unknown compression method"), (n.mode = 30);
                break;
              }
              if (((u -= 4), (k = 8 + (15 & (h >>>= 4))), 0 === n.wbits))
                n.wbits = k;
              else if (k > n.wbits) {
                (t.msg = "invalid window size"), (n.mode = 30);
                break;
              }
              (n.dmax = 1 << k),
                (t.adler = n.check = 1),
                (n.mode = 512 & h ? 10 : 12),
                (h = 0),
                (u = 0);
              break;
            case 2:
              for (; u < 16; ) {
                if (0 === s) break t;
                s--, (h += r[o++] << u), (u += 8);
              }
              if (((n.flags = h), 8 != (255 & n.flags))) {
                (t.msg = "unknown compression method"), (n.mode = 30);
                break;
              }
              if (57344 & n.flags) {
                (t.msg = "unknown header flags set"), (n.mode = 30);
                break;
              }
              n.head && (n.head.text = (h >> 8) & 1),
                512 & n.flags &&
                  ((T[0] = 255 & h),
                  (T[1] = (h >>> 8) & 255),
                  (n.check = Qt(n.check, T, 2, 0))),
                (h = 0),
                (u = 0),
                (n.mode = 3);
            case 3:
              for (; u < 32; ) {
                if (0 === s) break t;
                s--, (h += r[o++] << u), (u += 8);
              }
              n.head && (n.head.time = h),
                512 & n.flags &&
                  ((T[0] = 255 & h),
                  (T[1] = (h >>> 8) & 255),
                  (T[2] = (h >>> 16) & 255),
                  (T[3] = (h >>> 24) & 255),
                  (n.check = Qt(n.check, T, 4, 0))),
                (h = 0),
                (u = 0),
                (n.mode = 4);
            case 4:
              for (; u < 16; ) {
                if (0 === s) break t;
                s--, (h += r[o++] << u), (u += 8);
              }
              n.head && ((n.head.xflags = 255 & h), (n.head.os = h >> 8)),
                512 & n.flags &&
                  ((T[0] = 255 & h),
                  (T[1] = (h >>> 8) & 255),
                  (n.check = Qt(n.check, T, 2, 0))),
                (h = 0),
                (u = 0),
                (n.mode = 5);
            case 5:
              if (1024 & n.flags) {
                for (; u < 16; ) {
                  if (0 === s) break t;
                  s--, (h += r[o++] << u), (u += 8);
                }
                (n.length = h),
                  n.head && (n.head.extra_len = h),
                  512 & n.flags &&
                    ((T[0] = 255 & h),
                    (T[1] = (h >>> 8) & 255),
                    (n.check = Qt(n.check, T, 2, 0))),
                  (h = 0),
                  (u = 0);
              } else n.head && (n.head.extra = null);
              n.mode = 6;
            case 6:
              if (
                1024 & n.flags &&
                ((f = n.length) > s && (f = s),
                f &&
                  (n.head &&
                    ((k = n.head.extra_len - n.length),
                    n.head.extra ||
                      (n.head.extra = new Array(n.head.extra_len)),
                    gt.arraySet(n.head.extra, r, o, f, k)),
                  512 & n.flags && (n.check = Qt(n.check, r, f, o)),
                  (s -= f),
                  (o += f),
                  (n.length -= f)),
                n.length)
              )
                break t;
              (n.length = 0), (n.mode = 7);
            case 7:
              if (2048 & n.flags) {
                if (0 === s) break t;
                f = 0;
                do {
                  (k = r[o + f++]),
                    n.head &&
                      k &&
                      n.length < 65536 &&
                      (n.head.name += String.fromCharCode(k));
                } while (k && f < s);
                if (
                  (512 & n.flags && (n.check = Qt(n.check, r, f, o)),
                  (s -= f),
                  (o += f),
                  k)
                )
                  break t;
              } else n.head && (n.head.name = null);
              (n.length = 0), (n.mode = 8);
            case 8:
              if (4096 & n.flags) {
                if (0 === s) break t;
                f = 0;
                do {
                  (k = r[o + f++]),
                    n.head &&
                      k &&
                      n.length < 65536 &&
                      (n.head.comment += String.fromCharCode(k));
                } while (k && f < s);
                if (
                  (512 & n.flags && (n.check = Qt(n.check, r, f, o)),
                  (s -= f),
                  (o += f),
                  k)
                )
                  break t;
              } else n.head && (n.head.comment = null);
              n.mode = 9;
            case 9:
              if (512 & n.flags) {
                for (; u < 16; ) {
                  if (0 === s) break t;
                  s--, (h += r[o++] << u), (u += 8);
                }
                if (h !== (65535 & n.check)) {
                  (t.msg = "header crc mismatch"), (n.mode = 30);
                  break;
                }
                (h = 0), (u = 0);
              }
              n.head &&
                ((n.head.hcrc = (n.flags >> 9) & 1), (n.head.done = !0)),
                (t.adler = n.check = 0),
                (n.mode = 12);
              break;
            case 10:
              for (; u < 32; ) {
                if (0 === s) break t;
                s--, (h += r[o++] << u), (u += 8);
              }
              (t.adler = n.check = Ue(h)), (h = 0), (u = 0), (n.mode = 11);
            case 11:
              if (0 === n.havedict)
                return (
                  (t.next_out = a),
                  (t.avail_out = l),
                  (t.next_in = o),
                  (t.avail_in = s),
                  (n.hold = h),
                  (n.bits = u),
                  2
                );
              (t.adler = n.check = 1), (n.mode = 12);
            case 12:
              if (5 === e || 6 === e) break t;
            case 13:
              if (n.last) {
                (h >>>= 7 & u), (u -= 7 & u), (n.mode = 27);
                break;
              }
              for (; u < 3; ) {
                if (0 === s) break t;
                s--, (h += r[o++] << u), (u += 8);
              }
              switch (((n.last = 1 & h), (u -= 1), 3 & (h >>>= 1))) {
                case 0:
                  n.mode = 14;
                  break;
                case 1:
                  if ((Xe(n), (n.mode = 20), 6 === e)) {
                    (h >>>= 2), (u -= 2);
                    break t;
                  }
                  break;
                case 2:
                  n.mode = 17;
                  break;
                case 3:
                  (t.msg = "invalid block type"), (n.mode = 30);
              }
              (h >>>= 2), (u -= 2);
              break;
            case 14:
              for (h >>>= 7 & u, u -= 7 & u; u < 32; ) {
                if (0 === s) break t;
                s--, (h += r[o++] << u), (u += 8);
              }
              if ((65535 & h) != ((h >>> 16) ^ 65535)) {
                (t.msg = "invalid stored block lengths"), (n.mode = 30);
                break;
              }
              if (
                ((n.length = 65535 & h),
                (h = 0),
                (u = 0),
                (n.mode = 15),
                6 === e)
              )
                break t;
            case 15:
              n.mode = 16;
            case 16:
              if ((f = n.length)) {
                if ((f > s && (f = s), f > l && (f = l), 0 === f)) break t;
                gt.arraySet(i, r, o, f, a),
                  (s -= f),
                  (o += f),
                  (l -= f),
                  (a += f),
                  (n.length -= f);
                break;
              }
              n.mode = 12;
              break;
            case 17:
              for (; u < 14; ) {
                if (0 === s) break t;
                s--, (h += r[o++] << u), (u += 8);
              }
              if (
                ((n.nlen = 257 + (31 & h)),
                (h >>>= 5),
                (u -= 5),
                (n.ndist = 1 + (31 & h)),
                (h >>>= 5),
                (u -= 5),
                (n.ncode = 4 + (15 & h)),
                (h >>>= 4),
                (u -= 4),
                n.nlen > 286 || n.ndist > 30)
              ) {
                (t.msg = "too many length or distance symbols"), (n.mode = 30);
                break;
              }
              (n.have = 0), (n.mode = 18);
            case 18:
              for (; n.have < n.ncode; ) {
                for (; u < 3; ) {
                  if (0 === s) break t;
                  s--, (h += r[o++] << u), (u += 8);
                }
                (n.lens[P[n.have++]] = 7 & h), (h >>>= 3), (u -= 3);
              }
              for (; n.have < 19; ) n.lens[P[n.have++]] = 0;
              if (
                ((n.lencode = n.lendyn),
                (n.lenbits = 7),
                (S = { bits: n.lenbits }),
                (F = Ie(0, n.lens, 0, 19, n.lencode, 0, n.work, S)),
                (n.lenbits = S.bits),
                F)
              ) {
                (t.msg = "invalid code lengths set"), (n.mode = 30);
                break;
              }
              (n.have = 0), (n.mode = 19);
            case 19:
              for (; n.have < n.nlen + n.ndist; ) {
                for (
                  ;
                  (y =
                    ((A = n.lencode[h & ((1 << n.lenbits) - 1)]) >>> 16) & 255),
                    (m = 65535 & A),
                    !((v = A >>> 24) <= u);

                ) {
                  if (0 === s) break t;
                  s--, (h += r[o++] << u), (u += 8);
                }
                if (m < 16) (h >>>= v), (u -= v), (n.lens[n.have++] = m);
                else {
                  if (16 === m) {
                    for (C = v + 2; u < C; ) {
                      if (0 === s) break t;
                      s--, (h += r[o++] << u), (u += 8);
                    }
                    if (((h >>>= v), (u -= v), 0 === n.have)) {
                      (t.msg = "invalid bit length repeat"), (n.mode = 30);
                      break;
                    }
                    (k = n.lens[n.have - 1]),
                      (f = 3 + (3 & h)),
                      (h >>>= 2),
                      (u -= 2);
                  } else if (17 === m) {
                    for (C = v + 3; u < C; ) {
                      if (0 === s) break t;
                      s--, (h += r[o++] << u), (u += 8);
                    }
                    (u -= v),
                      (k = 0),
                      (f = 3 + (7 & (h >>>= v))),
                      (h >>>= 3),
                      (u -= 3);
                  } else {
                    for (C = v + 7; u < C; ) {
                      if (0 === s) break t;
                      s--, (h += r[o++] << u), (u += 8);
                    }
                    (u -= v),
                      (k = 0),
                      (f = 11 + (127 & (h >>>= v))),
                      (h >>>= 7),
                      (u -= 7);
                  }
                  if (n.have + f > n.nlen + n.ndist) {
                    (t.msg = "invalid bit length repeat"), (n.mode = 30);
                    break;
                  }
                  for (; f--; ) n.lens[n.have++] = k;
                }
              }
              if (30 === n.mode) break;
              if (0 === n.lens[256]) {
                (t.msg = "invalid code -- missing end-of-block"), (n.mode = 30);
                break;
              }
              if (
                ((n.lenbits = 9),
                (S = { bits: n.lenbits }),
                (F = Ie(1, n.lens, 0, n.nlen, n.lencode, 0, n.work, S)),
                (n.lenbits = S.bits),
                F)
              ) {
                (t.msg = "invalid literal/lengths set"), (n.mode = 30);
                break;
              }
              if (
                ((n.distbits = 6),
                (n.distcode = n.distdyn),
                (S = { bits: n.distbits }),
                (F = Ie(2, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, S)),
                (n.distbits = S.bits),
                F)
              ) {
                (t.msg = "invalid distances set"), (n.mode = 30);
                break;
              }
              if (((n.mode = 20), 6 === e)) break t;
            case 20:
              n.mode = 21;
            case 21:
              if (s >= 6 && l >= 258) {
                (t.next_out = a),
                  (t.avail_out = l),
                  (t.next_in = o),
                  (t.avail_in = s),
                  (n.hold = h),
                  (n.bits = u),
                  Be(t, d),
                  (a = t.next_out),
                  (i = t.output),
                  (l = t.avail_out),
                  (o = t.next_in),
                  (r = t.input),
                  (s = t.avail_in),
                  (h = n.hold),
                  (u = n.bits),
                  12 === n.mode && (n.back = -1);
                break;
              }
              for (
                n.back = 0;
                (y =
                  ((A = n.lencode[h & ((1 << n.lenbits) - 1)]) >>> 16) & 255),
                  (m = 65535 & A),
                  !((v = A >>> 24) <= u);

              ) {
                if (0 === s) break t;
                s--, (h += r[o++] << u), (u += 8);
              }
              if (y && 0 == (240 & y)) {
                for (
                  b = v, w = y, x = m;
                  (y =
                    ((A = n.lencode[x + ((h & ((1 << (b + w)) - 1)) >> b)]) >>>
                      16) &
                    255),
                    (m = 65535 & A),
                    !(b + (v = A >>> 24) <= u);

                ) {
                  if (0 === s) break t;
                  s--, (h += r[o++] << u), (u += 8);
                }
                (h >>>= b), (u -= b), (n.back += b);
              }
              if (
                ((h >>>= v), (u -= v), (n.back += v), (n.length = m), 0 === y)
              ) {
                n.mode = 26;
                break;
              }
              if (32 & y) {
                (n.back = -1), (n.mode = 12);
                break;
              }
              if (64 & y) {
                (t.msg = "invalid literal/length code"), (n.mode = 30);
                break;
              }
              (n.extra = 15 & y), (n.mode = 22);
            case 22:
              if (n.extra) {
                for (C = n.extra; u < C; ) {
                  if (0 === s) break t;
                  s--, (h += r[o++] << u), (u += 8);
                }
                (n.length += h & ((1 << n.extra) - 1)),
                  (h >>>= n.extra),
                  (u -= n.extra),
                  (n.back += n.extra);
              }
              (n.was = n.length), (n.mode = 23);
            case 23:
              for (
                ;
                (y =
                  ((A = n.distcode[h & ((1 << n.distbits) - 1)]) >>> 16) & 255),
                  (m = 65535 & A),
                  !((v = A >>> 24) <= u);

              ) {
                if (0 === s) break t;
                s--, (h += r[o++] << u), (u += 8);
              }
              if (0 == (240 & y)) {
                for (
                  b = v, w = y, x = m;
                  (y =
                    ((A = n.distcode[x + ((h & ((1 << (b + w)) - 1)) >> b)]) >>>
                      16) &
                    255),
                    (m = 65535 & A),
                    !(b + (v = A >>> 24) <= u);

                ) {
                  if (0 === s) break t;
                  s--, (h += r[o++] << u), (u += 8);
                }
                (h >>>= b), (u -= b), (n.back += b);
              }
              if (((h >>>= v), (u -= v), (n.back += v), 64 & y)) {
                (t.msg = "invalid distance code"), (n.mode = 30);
                break;
              }
              (n.offset = m), (n.extra = 15 & y), (n.mode = 24);
            case 24:
              if (n.extra) {
                for (C = n.extra; u < C; ) {
                  if (0 === s) break t;
                  s--, (h += r[o++] << u), (u += 8);
                }
                (n.offset += h & ((1 << n.extra) - 1)),
                  (h >>>= n.extra),
                  (u -= n.extra),
                  (n.back += n.extra);
              }
              if (n.offset > n.dmax) {
                (t.msg = "invalid distance too far back"), (n.mode = 30);
                break;
              }
              n.mode = 25;
            case 25:
              if (0 === l) break t;
              if (((f = d - l), n.offset > f)) {
                if ((f = n.offset - f) > n.whave && n.sane) {
                  (t.msg = "invalid distance too far back"), (n.mode = 30);
                  break;
                }
                f > n.wnext
                  ? ((f -= n.wnext), (p = n.wsize - f))
                  : (p = n.wnext - f),
                  f > n.length && (f = n.length),
                  (g = n.window);
              } else (g = i), (p = a - n.offset), (f = n.length);
              f > l && (f = l), (l -= f), (n.length -= f);
              do {
                i[a++] = g[p++];
              } while (--f);
              0 === n.length && (n.mode = 21);
              break;
            case 26:
              if (0 === l) break t;
              (i[a++] = n.length), l--, (n.mode = 21);
              break;
            case 27:
              if (n.wrap) {
                for (; u < 32; ) {
                  if (0 === s) break t;
                  s--, (h |= r[o++] << u), (u += 8);
                }
                if (
                  ((d -= l),
                  (t.total_out += d),
                  (n.total += d),
                  d &&
                    (t.adler = n.check =
                      n.flags
                        ? Qt(n.check, i, d, a - d)
                        : Zt(n.check, i, d, a - d)),
                  (d = l),
                  (n.flags ? h : Ue(h)) !== n.check)
                ) {
                  (t.msg = "incorrect data check"), (n.mode = 30);
                  break;
                }
                (h = 0), (u = 0);
              }
              n.mode = 28;
            case 28:
              if (n.wrap && n.flags) {
                for (; u < 32; ) {
                  if (0 === s) break t;
                  s--, (h += r[o++] << u), (u += 8);
                }
                if (h !== (4294967295 & n.total)) {
                  (t.msg = "incorrect length check"), (n.mode = 30);
                  break;
                }
                (h = 0), (u = 0);
              }
              n.mode = 29;
            case 29:
              F = 1;
              break t;
            case 30:
              F = -3;
              break t;
            case 31:
              return -4;
            case 32:
            default:
              return -2;
          }
        return (
          (t.next_out = a),
          (t.avail_out = l),
          (t.next_in = o),
          (t.avail_in = s),
          (n.hold = h),
          (n.bits = u),
          (n.wsize ||
            (d !== t.avail_out && n.mode < 30 && (n.mode < 27 || 4 !== e))) &&
            Ze(t, t.output, t.next_out, d - t.avail_out),
          (c -= t.avail_in),
          (d -= t.avail_out),
          (t.total_in += c),
          (t.total_out += d),
          (n.total += d),
          n.wrap &&
            d &&
            (t.adler = n.check =
              n.flags
                ? Qt(n.check, i, d, t.next_out - d)
                : Zt(n.check, i, d, t.next_out - d)),
          (t.data_type =
            n.bits +
            (n.last ? 64 : 0) +
            (12 === n.mode ? 128 : 0) +
            (20 === n.mode || 15 === n.mode ? 256 : 0)),
          ((0 === c && 0 === d) || 4 === e) && 0 === F && (F = -5),
          F
        );
      },
      inflateEnd: function (t) {
        if (!t || !t.state) return -2;
        var e = t.state;
        return e.window && (e.window = null), (t.state = null), 0;
      },
      inflateGetHeader: function (t, e) {
        var n;
        return t && t.state
          ? 0 == (2 & (n = t.state).wrap)
            ? -2
            : ((n.head = e), (e.done = !1), 0)
          : -2;
      },
      inflateSetDictionary: function (t, e) {
        var n,
          r = e.length;
        return t && t.state
          ? 0 !== (n = t.state).wrap && 11 !== n.mode
            ? -2
            : 11 === n.mode && Zt(1, e, r, 0) !== n.check
            ? -3
            : Ze(t, e, r, r)
            ? ((n.mode = 31), -4)
            : ((n.havedict = 1), 0)
          : -2;
      },
      inflateInfo: "pako inflate (from Nodeca project)",
    },
    Je = {
      Z_NO_FLUSH: 0,
      Z_PARTIAL_FLUSH: 1,
      Z_SYNC_FLUSH: 2,
      Z_FULL_FLUSH: 3,
      Z_FINISH: 4,
      Z_BLOCK: 5,
      Z_TREES: 6,
      Z_OK: 0,
      Z_STREAM_END: 1,
      Z_NEED_DICT: 2,
      Z_ERRNO: -1,
      Z_STREAM_ERROR: -2,
      Z_DATA_ERROR: -3,
      Z_BUF_ERROR: -5,
      Z_NO_COMPRESSION: 0,
      Z_BEST_SPEED: 1,
      Z_BEST_COMPRESSION: 9,
      Z_DEFAULT_COMPRESSION: -1,
      Z_FILTERED: 1,
      Z_HUFFMAN_ONLY: 2,
      Z_RLE: 3,
      Z_FIXED: 4,
      Z_DEFAULT_STRATEGY: 0,
      Z_BINARY: 0,
      Z_TEXT: 1,
      Z_UNKNOWN: 2,
      Z_DEFLATED: 8,
    };
  var Qe = function () {
      (this.text = 0),
        (this.time = 0),
        (this.xflags = 0),
        (this.os = 0),
        (this.extra = null),
        (this.extra_len = 0),
        (this.name = ""),
        (this.comment = ""),
        (this.hcrc = 0),
        (this.done = !1);
    },
    $e = Object.prototype.toString;
  function tn(t) {
    if (!(this instanceof tn)) return new tn(t);
    this.options = gt.assign(
      { chunkSize: 16384, windowBits: 0, to: "" },
      t || {}
    );
    var e = this.options;
    e.raw &&
      e.windowBits >= 0 &&
      e.windowBits < 16 &&
      ((e.windowBits = -e.windowBits),
      0 === e.windowBits && (e.windowBits = -15)),
      !(e.windowBits >= 0 && e.windowBits < 16) ||
        (t && t.windowBits) ||
        (e.windowBits += 32),
      e.windowBits > 15 &&
        e.windowBits < 48 &&
        0 == (15 & e.windowBits) &&
        (e.windowBits |= 15),
      (this.err = 0),
      (this.msg = ""),
      (this.ended = !1),
      (this.chunks = []),
      (this.strm = new Pe()),
      (this.strm.avail_out = 0);
    var n = Ye.inflateInit2(this.strm, e.windowBits);
    if (n !== Je.Z_OK) throw new Error($t[n]);
    if (
      ((this.header = new Qe()),
      Ye.inflateGetHeader(this.strm, this.header),
      e.dictionary &&
        ("string" == typeof e.dictionary
          ? (e.dictionary = Fe(e.dictionary))
          : "[object ArrayBuffer]" === $e.call(e.dictionary) &&
            (e.dictionary = new Uint8Array(e.dictionary)),
        e.raw &&
          (n = Ye.inflateSetDictionary(this.strm, e.dictionary)) !== Je.Z_OK))
    )
      throw new Error($t[n]);
  }
  function en(t, e) {
    var n = new tn(e);
    if ((n.push(t, !0), n.err)) throw n.msg || $t[n.err];
    return n.result;
  }
  (tn.prototype.push = function (t, e) {
    var n,
      r,
      i,
      o,
      a,
      s = this.strm,
      l = this.options.chunkSize,
      h = this.options.dictionary,
      u = !1;
    if (this.ended) return !1;
    (r = e === ~~e ? e : !0 === e ? Je.Z_FINISH : Je.Z_NO_FLUSH),
      "string" == typeof t
        ? (s.input = Ce(t))
        : "[object ArrayBuffer]" === $e.call(t)
        ? (s.input = new Uint8Array(t))
        : (s.input = t),
      (s.next_in = 0),
      (s.avail_in = s.input.length);
    do {
      if (
        (0 === s.avail_out &&
          ((s.output = new gt.Buf8(l)), (s.next_out = 0), (s.avail_out = l)),
        (n = Ye.inflate(s, Je.Z_NO_FLUSH)) === Je.Z_NEED_DICT &&
          h &&
          (n = Ye.inflateSetDictionary(this.strm, h)),
        n === Je.Z_BUF_ERROR && !0 === u && ((n = Je.Z_OK), (u = !1)),
        n !== Je.Z_STREAM_END && n !== Je.Z_OK)
      )
        return this.onEnd(n), (this.ended = !0), !1;
      s.next_out &&
        ((0 !== s.avail_out &&
          n !== Je.Z_STREAM_END &&
          (0 !== s.avail_in || (r !== Je.Z_FINISH && r !== Je.Z_SYNC_FLUSH))) ||
          ("string" === this.options.to
            ? ((i = Te(s.output, s.next_out)),
              (o = s.next_out - i),
              (a = Ae(s.output, i)),
              (s.next_out = o),
              (s.avail_out = l - o),
              o && gt.arraySet(s.output, s.output, i, o, 0),
              this.onData(a))
            : this.onData(gt.shrinkBuf(s.output, s.next_out)))),
        0 === s.avail_in && 0 === s.avail_out && (u = !0);
    } while ((s.avail_in > 0 || 0 === s.avail_out) && n !== Je.Z_STREAM_END);
    return (
      n === Je.Z_STREAM_END && (r = Je.Z_FINISH),
      r === Je.Z_FINISH
        ? ((n = Ye.inflateEnd(this.strm)),
          this.onEnd(n),
          (this.ended = !0),
          n === Je.Z_OK)
        : r !== Je.Z_SYNC_FLUSH || (this.onEnd(Je.Z_OK), (s.avail_out = 0), !0)
    );
  }),
    (tn.prototype.onData = function (t) {
      this.chunks.push(t);
    }),
    (tn.prototype.onEnd = function (t) {
      t === Je.Z_OK &&
        ("string" === this.options.to
          ? (this.result = this.chunks.join(""))
          : (this.result = gt.flattenChunks(this.chunks))),
        (this.chunks = []),
        (this.err = t),
        (this.msg = this.strm.msg);
    });
  var nn = {
      Inflate: tn,
      inflate: en,
      inflateRaw: function (t, e) {
        return ((e = e || {}).raw = !0), en(t, e);
      },
      ungzip: en,
    },
    rn = {};
  (0, gt.assign)(rn, De, nn, Je);
  for (
    var on = rn,
      an = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      sn = new Uint8Array(256),
      ln = 0;
    ln < an.length;
    ln++
  )
    sn[an.charCodeAt(ln)] = ln;
  var hn,
    un = function (t) {
      return (function (t) {
        for (var e = "", n = 0; n < t.length; n++)
          e += String.fromCharCode(t[n]);
        return e;
      })(
        on.inflate(
          (function (t) {
            var e,
              n,
              r,
              i,
              o,
              a = 0.75 * t.length,
              s = t.length,
              l = 0;
            "=" === t[t.length - 1] && (a--, "=" === t[t.length - 2] && a--);
            var h = new Uint8Array(a);
            for (e = 0; e < s; e += 4)
              (n = sn[t.charCodeAt(e)]),
                (r = sn[t.charCodeAt(e + 1)]),
                (i = sn[t.charCodeAt(e + 2)]),
                (o = sn[t.charCodeAt(e + 3)]),
                (h[l++] = (n << 2) | (r >> 4)),
                (h[l++] = ((15 & r) << 4) | (i >> 2)),
                (h[l++] = ((3 & i) << 6) | (63 & o));
            return h;
          })(t)
        )
      );
    },
    cn = {
      Courier:
        "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",
      "Courier-Bold":
        "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",
      "Courier-Oblique":
        "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",
      "Courier-BoldOblique":
        "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",
      Helvetica:
        "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",
      "Helvetica-Bold":
        "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",
      "Helvetica-Oblique":
        "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",
      "Helvetica-BoldOblique":
        "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",
      "Times-Roman":
        "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",
      "Times-Bold":
        "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",
      "Times-Italic":
        "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",
      "Times-BoldItalic":
        "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",
      Symbol:
        "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",
      ZapfDingbats:
        "eJxtmNtu20YQhl+F4FULyMGeD7pz3AY1ChtG7NpFA18w1NomIlECSRcxgrx7SVk7+wOdG8H5OJydf2Z2d5gf9cV+t0v9VK/r+6vXsXlOlbHe28paq229qj/t++m62aXZ4J/m8PRb1z9/baZxefK63Z6eXN5dVMvTCh83u277xr/6kLrnl2XNq7TpXnczuZyabdee98/b2VzM/x4/dd/T5qab2pd6PQ2vaVVfvDRD005puE3Lu7eH1HbN9hTjx4/77/X6y5lcnUmjVzHIVVDicVX/1W/SsO36dLMfu6nb9/X6TAoBD+5euvZbn8axXtuZ36dhPJrVQqgPQoh5hev91LWLkIv94W1Ygq9+aX+tZAx2tfz64284/sblN/rqfLP/mqrbt3FKu7G67Nv9cNgPzZQ2H6rz7bb6vLgZq89pTMO/M/xfEqturJpqSM/d7GJIm2oamk3aNcO3av80O5xh3yyKmm1193ZIT02bqovTKjP+MAf++7zsZvZ3276kYyWWXB0z99S18/PbafPHQ71W4fjn/fxnFO+ZvkrT0LVzTr78qB/+nk38bHM9exgP8zr1z9U7jt6840YW5uSJKcZOCaBBnKgm5mU8MVNYyMwWFvO7Ukagkmgg6sDWQ5yFFqjzUrLEaQ3BEmiwNsMSaZS0vgWfOkPHWQowNeTUc0kumnxZvsgPxlGai6VTGUqAVCTQ6QkWnc77DKEiLktSUBJKqHIQZ86d8gCpHYoiEzMsb1ubYy8vW50DChB5ZhGqrijD0EqUIeiaEHIfCg5Kpuu0ApiToaGPSY0uaQsyr65L2oKi1yFt1PLaQ3lzfXTgXodGoJYzglndSLDMPg1sTPJpQJHJigw0QrGERqD9YhyTOgONQDUyuF1zaxuokc/BW2ztXCMrGZ9WMW1oQZHIXWNBkSCfRZEL5BMUiZw6CzVSFCfUSGZFNjIldoKDkonTKQiJIGzWmFd3BizJJ9SINoLDriOfUCOZS+zg+KGD1qGiLNMLxtJD1/ns00ON6EzyUCM6vbxhoBKaqbG3DFQCNiL1iHccBPV0DHhQH/JW8EW90dkyFKGywCJU0WkVSvSGeiSUODWFFD0HYdPQVoiRgfPMA+/nnRgiAyNYSjpWNQcNSMrtFCUH4ZIRpSCWocFCSuhCEY6hoUClc0WC52BJlCYYLQdhN+hygRRRlo5BKRRLS6oihSqh+ZzzRGG1Mo4Iz1LoP0qsxDGFzk0JE42ji0jCPejomJKCuwil4m5CiRMEUMVSzVLDUstSx1Juc0oVWMpqY295qVltmtWmWW2a1aZZbZrVplltmtWmWW2G1WZYbYbVZlhthtVmWG2G1WZYbYbVZlhtltVmWW2W1WZZbZbVZlltltVmWW2W1QYjQCh7E2aAQHeGhCFgPoNoy8KNb2wxBhmGKBxoUZXlLGsLI6AsftEDHV0wIURVbANLcTKlGGBIKPOAxCmhePCKUwFzAmpDFRQvjA9R06Hq8TONvshgKDCuRAZTXigUxjxNFfKRo3CLhnIJBMFRvMZpqpNBMlQJzGT5WFQMVQI/AikPMIhEU1aDjqJvQwmjSHB05cC9jbYwc5UtAHNLhDw41ha+lEqF4JaH3gmB61SYcqInxTDmQK8v08vjqv4zDf1N0w3Lf4A8/vwPpfK11w==",
    };
  !(function (t) {
    (t.Courier = "Courier"),
      (t.CourierBold = "Courier-Bold"),
      (t.CourierOblique = "Courier-Oblique"),
      (t.CourierBoldOblique = "Courier-BoldOblique"),
      (t.Helvetica = "Helvetica"),
      (t.HelveticaBold = "Helvetica-Bold"),
      (t.HelveticaOblique = "Helvetica-Oblique"),
      (t.HelveticaBoldOblique = "Helvetica-BoldOblique"),
      (t.TimesRoman = "Times-Roman"),
      (t.TimesRomanBold = "Times-Bold"),
      (t.TimesRomanItalic = "Times-Italic"),
      (t.TimesRomanBoldItalic = "Times-BoldItalic"),
      (t.Symbol = "Symbol"),
      (t.ZapfDingbats = "ZapfDingbats");
  })(hn || (hn = {}));
  for (
    var dn = {},
      fn = (function () {
        function t() {
          var t = this;
          (this.getWidthOfGlyph = function (e) {
            return t.CharWidths[e];
          }),
            (this.getXAxisKerningForPair = function (e, n) {
              return (t.KernPairXAmounts[e] || {})[n];
            });
        }
        return (
          (t.load = function (e) {
            var n = dn[e];
            if (n) return n;
            var r = un(cn[e]),
              i = Object.assign(new t(), JSON.parse(r));
            return (
              (i.CharWidths = i.CharMetrics.reduce(function (t, e) {
                return (t[e.N] = e.WX), t;
              }, {})),
              (i.KernPairXAmounts = i.KernPairs.reduce(function (t, e) {
                var n = e[0],
                  r = e[1],
                  i = e[2];
                return t[n] || (t[n] = {}), (t[n][r] = i), t;
              }, {})),
              (dn[e] = i),
              i
            );
          }),
          t
        );
      })(),
      pn = un(
        "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"
      ),
      gn = JSON.parse(pn),
      vn = function (t, e) {
        var n = this;
        (this.canEncodeUnicodeCodePoint = function (t) {
          return (t in n.unicodeMappings);
        }),
          (this.encodeUnicodeCodePoint = function (t) {
            var e = n.unicodeMappings[t];
            if (!e) {
              var r = String.fromCharCode(t),
                i =
                  "0x" +
                  (function (t, e, n) {
                    for (var r = "", i = 0, o = e - t.length; i < o; i++)
                      r += n;
                    return r + t;
                  })(t.toString(16), 4, "0"),
                o = n.name + ' cannot encode "' + r + '" (' + i + ")";
              throw new Error(o);
            }
            return { code: e[0], name: e[1] };
          }),
          (this.name = t),
          (this.supportedCodePoints = Object.keys(e)
            .map(Number)
            .sort(function (t, e) {
              return t - e;
            })),
          (this.unicodeMappings = e);
      },
      yn = {
        Symbol: new vn("Symbol", gn.symbol),
        ZapfDingbats: new vn("ZapfDingbats", gn.zapfdingbats),
        WinAnsi: new vn("WinAnsi", gn.win1252),
      },
      mn = function (t) {
        return Object.keys(t).map(function (e) {
          return t[e];
        });
      },
      bn = mn(hn),
      wn = function (t) {
        return bn.includes(t);
      },
      xn = function (t, e) {
        return (
          t.x === e.x &&
          t.y === e.y &&
          t.width === e.width &&
          t.height === e.height
        );
      },
      kn = function (t) {
        return "`" + t + "`";
      },
      Fn = function (t) {
        return "'" + t + "'";
      },
      Sn = function (t) {
        var e = typeof t;
        return "string" === e ? Fn(t) : "undefined" === e ? kn(t) : t;
      },
      Cn = function (t, e, n) {
        for (var r = new Array(n.length), i = 0, o = n.length; i < o; i++) {
          var a = n[i];
          r[i] = Sn(a);
        }
        var s = r.join(" or ");
        return kn(e) + " must be one of " + s + ", but was actually " + Sn(t);
      },
      An = function (t, e, n) {
        Array.isArray(n) || (n = mn(n));
        for (var r = 0, i = n.length; r < i; r++) if (t === n[r]) return;
        throw new TypeError(Cn(t, e, n));
      },
      Tn = function (t, e, n) {
        Array.isArray(n) || (n = mn(n)), An(t, e, n.concat(void 0));
      },
      Pn = function (t, e, n) {
        Array.isArray(n) || (n = mn(n));
        for (var r = 0, i = t.length; r < i; r++) An(t[r], e, n);
      },
      zn = function (t) {
        return null === t
          ? "null"
          : void 0 === t
          ? "undefined"
          : "string" == typeof t
          ? "string"
          : isNaN(t)
          ? "NaN"
          : "number" == typeof t
          ? "number"
          : "boolean" == typeof t
          ? "boolean"
          : "symbol" == typeof t
          ? "symbol"
          : "bigint" == typeof t
          ? "bigint"
          : t.constructor && t.constructor.name
          ? t.constructor.name
          : t.name
          ? t.name
          : t.constructor
          ? String(t.constructor)
          : String(t);
      },
      Rn = function (t, e) {
        return "null" === e
          ? null === t
          : "undefined" === e
          ? void 0 === t
          : "string" === e
          ? "string" == typeof t
          : "number" === e
          ? "number" == typeof t && !isNaN(t)
          : "boolean" === e
          ? "boolean" == typeof t
          : "symbol" === e
          ? "symbol" == typeof t
          : "bigint" === e
          ? "bigint" == typeof t
          : e === Date
          ? t instanceof Date
          : e === Array
          ? t instanceof Array
          : e === Uint8Array
          ? t instanceof Uint8Array
          : e === ArrayBuffer
          ? t instanceof ArrayBuffer
          : e === Function
          ? t instanceof Function
          : t instanceof e[0];
      },
      On = function (t, e, n) {
        for (var r = new Array(n.length), i = 0, o = n.length; i < o; i++) {
          var a = n[i];
          "null" === a && (r[i] = kn("null")),
            "undefined" === a && (r[i] = kn("undefined")),
            "string" === a
              ? (r[i] = kn("string"))
              : "number" === a
              ? (r[i] = kn("number"))
              : "boolean" === a
              ? (r[i] = kn("boolean"))
              : "symbol" === a
              ? (r[i] = kn("symbol"))
              : "bigint" === a
              ? (r[i] = kn("bigint"))
              : a === Array
              ? (r[i] = kn("Array"))
              : a === Uint8Array
              ? (r[i] = kn("Uint8Array"))
              : a === ArrayBuffer
              ? (r[i] = kn("ArrayBuffer"))
              : (r[i] = kn(a[1]));
        }
        var s = r.join(" or ");
        return (
          kn(e) +
          " must be of type " +
          s +
          ", but was actually of type " +
          kn(zn(t))
        );
      },
      Dn = function (t, e, n) {
        for (var r = 0, i = n.length; r < i; r++) if (Rn(t, n[r])) return;
        throw new TypeError(On(t, e, n));
      },
      Bn = function (t, e, n) {
        Dn(t, e, n.concat("undefined"));
      },
      Nn = function (t, e, n) {
        for (var r = 0, i = t.length; r < i; r++) Dn(t[r], e, n);
      },
      En = function (t, e, n, r) {
        if (
          (Dn(t, e, ["number"]),
          Dn(n, "min", ["number"]),
          Dn(r, "max", ["number"]),
          (r = Math.max(n, r)),
          t < n || t > r)
        )
          throw new Error(
            kn(e) +
              " must be at least " +
              n +
              " and at most " +
              r +
              ", but was actually " +
              t
          );
      },
      jn = function (t, e, n, r) {
        Dn(t, e, ["number", "undefined"]),
          "number" == typeof t && En(t, e, n, r);
      },
      Mn = function (t, e, n) {
        if ((Dn(t, e, ["number"]), t % n != 0))
          throw new Error(
            kn(e) + " must be a multiple of " + n + ", but was actually " + t
          );
      },
      In = function (t, e) {
        if (!Number.isInteger(t))
          throw new Error(kn(e) + " must be an integer, but was actually " + t);
      },
      Un = function (t, e) {
        if (![1, 0].includes(Math.sign(t)))
          throw new Error(
            kn(e) + " must be a positive number or 0, but was actually " + t
          );
      },
      Vn = new Uint16Array(256),
      Wn = 0;
    Wn < 256;
    Wn++
  )
    Vn[Wn] = Wn;
  (Vn[22] = g("")),
    (Vn[24] = g("˘")),
    (Vn[25] = g("ˇ")),
    (Vn[26] = g("ˆ")),
    (Vn[27] = g("˙")),
    (Vn[28] = g("˝")),
    (Vn[29] = g("˛")),
    (Vn[30] = g("˚")),
    (Vn[31] = g("˜")),
    (Vn[127] = g("�")),
    (Vn[128] = g("•")),
    (Vn[129] = g("†")),
    (Vn[130] = g("‡")),
    (Vn[131] = g("…")),
    (Vn[132] = g("—")),
    (Vn[133] = g("–")),
    (Vn[134] = g("ƒ")),
    (Vn[135] = g("⁄")),
    (Vn[136] = g("‹")),
    (Vn[137] = g("›")),
    (Vn[138] = g("−")),
    (Vn[139] = g("‰")),
    (Vn[140] = g("„")),
    (Vn[141] = g("“")),
    (Vn[142] = g("”")),
    (Vn[143] = g("‘")),
    (Vn[144] = g("’")),
    (Vn[145] = g("‚")),
    (Vn[146] = g("™")),
    (Vn[147] = g("ﬁ")),
    (Vn[148] = g("ﬂ")),
    (Vn[149] = g("Ł")),
    (Vn[150] = g("Œ")),
    (Vn[151] = g("Š")),
    (Vn[152] = g("Ÿ")),
    (Vn[153] = g("Ž")),
    (Vn[154] = g("ı")),
    (Vn[155] = g("ł")),
    (Vn[156] = g("œ")),
    (Vn[157] = g("š")),
    (Vn[158] = g("ž")),
    (Vn[159] = g("�")),
    (Vn[160] = g("€")),
    (Vn[173] = g("�"));
  var qn,
    Ln = function (t) {
      for (var e = new Array(t.length), n = 0, r = t.length; n < r; n++)
        e[n] = Vn[t[n]];
      return String.fromCodePoint.apply(String, e);
    },
    Kn = (function () {
      function t(t) {
        (this.populate = t), (this.value = void 0);
      }
      return (
        (t.prototype.getValue = function () {
          return this.value;
        }),
        (t.prototype.access = function () {
          return this.value || (this.value = this.populate()), this.value;
        }),
        (t.prototype.invalidate = function () {
          this.value = void 0;
        }),
        (t.populatedBy = function (e) {
          return new t(e);
        }),
        t
      );
    })(),
    Gn = (function (t) {
      function e(e, n) {
        var r = "Method " + e + "." + n + "() not implemented";
        return t.call(this, r) || this;
      }
      return n(e, t), e;
    })(Error),
    Hn = (function (t) {
      function e(e) {
        var n = "Cannot construct " + e + " - it has a private constructor";
        return t.call(this, n) || this;
      }
      return n(e, t), e;
    })(Error),
    _n = (function (t) {
      function e(e, n) {
        var r = function (t) {
            var e, n;
            return null !== (e = null == t ? void 0 : t.name) && void 0 !== e
              ? e
              : null === (n = null == t ? void 0 : t.constructor) ||
                void 0 === n
              ? void 0
              : n.name;
          },
          i =
            "Expected instance of " +
            (Array.isArray(e) ? e.map(r) : [r(e)]).join(" or ") +
            ", but got instance of " +
            (n ? r(n) : n);
        return t.call(this, i) || this;
      }
      return n(e, t), e;
    })(Error),
    Xn = (function (t) {
      function e(e) {
        var n = e + " stream encoding not supported";
        return t.call(this, n) || this;
      }
      return n(e, t), e;
    })(Error),
    Zn = (function (t) {
      function e(e, n) {
        var r = "Cannot call " + e + "." + n + "() more than once";
        return t.call(this, r) || this;
      }
      return n(e, t), e;
    })(Error),
    Yn = (function (t) {
      function e(e) {
        var n = "Missing catalog (ref=" + e + ")";
        return t.call(this, n) || this;
      }
      return n(e, t), e;
    })(Error),
    Jn = (function (t) {
      function e() {
        return t.call(this, "Can't embed page with missing Contents") || this;
      }
      return n(e, t), e;
    })(Error),
    Qn = (function (t) {
      function e(e) {
        var n,
          r,
          i,
          o =
            "Unrecognized stream type: " +
            (null !==
              (i =
                null !==
                  (r =
                    null === (n = null == e ? void 0 : e.contructor) ||
                    void 0 === n
                      ? void 0
                      : n.name) && void 0 !== r
                  ? r
                  : null == e
                  ? void 0
                  : e.name) && void 0 !== i
              ? i
              : e);
        return t.call(this, o) || this;
      }
      return n(e, t), e;
    })(Error),
    $n = (function (t) {
      function e() {
        return (
          t.call(
            this,
            "Found mismatched contexts while embedding pages. All pages in the array passed to `PDFDocument.embedPages()` must be from the same document."
          ) || this
        );
      }
      return n(e, t), e;
    })(Error),
    tr = (function (t) {
      function e(e) {
        var n =
          "Attempted to convert PDFArray with " +
          e +
          " elements to rectangle, but must have exactly 4 elements.";
        return t.call(this, n) || this;
      }
      return n(e, t), e;
    })(Error),
    er = (function (t) {
      function e(e) {
        var n =
          'Attempted to convert "' +
          e +
          '" to a date, but it does not match the PDF date string format.';
        return t.call(this, n) || this;
      }
      return n(e, t), e;
    })(Error),
    nr = (function (t) {
      function e(e, n) {
        var r =
          "Invalid targetIndex specified: targetIndex=" +
          e +
          " must be less than Count=" +
          n;
        return t.call(this, r) || this;
      }
      return n(e, t), e;
    })(Error),
    rr = (function (t) {
      function e(e, n) {
        var r =
          "Failed to " +
          n +
          " at targetIndex=" +
          e +
          " due to corrupt page tree: It is likely that one or more 'Count' entries are invalid";
        return t.call(this, r) || this;
      }
      return n(e, t), e;
    })(Error),
    ir = (function (t) {
      function e(e, n, r) {
        var i =
          "index should be at least " +
          n +
          " and at most " +
          r +
          ", but was actually " +
          e;
        return t.call(this, i) || this;
      }
      return n(e, t), e;
    })(Error),
    or = (function (t) {
      function e() {
        return t.call(this, "Attempted to set invalid field value") || this;
      }
      return n(e, t), e;
    })(Error),
    ar = (function (t) {
      function e() {
        return (
          t.call(
            this,
            "Attempted to select multiple values for single-select field"
          ) || this
        );
      }
      return n(e, t), e;
    })(Error),
    sr = (function (t) {
      function e(e) {
        var n = "No /DA (default appearance) entry found for field: " + e;
        return t.call(this, n) || this;
      }
      return n(e, t), e;
    })(Error),
    lr = (function (t) {
      function e(e) {
        var n = "No Tf operator found for DA of field: " + e;
        return t.call(this, n) || this;
      }
      return n(e, t), e;
    })(Error),
    hr = (function (t) {
      function e(e, n) {
        var r =
          "Failed to parse number (line:" +
          e.line +
          " col:" +
          e.column +
          " offset=" +
          e.offset +
          '): "' +
          n +
          '"';
        return t.call(this, r) || this;
      }
      return n(e, t), e;
    })(Error),
    ur = (function (t) {
      function e(e, n) {
        var r =
          "Failed to parse PDF document (line:" +
          e.line +
          " col:" +
          e.column +
          " offset=" +
          e.offset +
          "): " +
          n;
        return t.call(this, r) || this;
      }
      return n(e, t), e;
    })(Error),
    cr = (function (t) {
      function e(e, n, r) {
        var i = "Expected next byte to be " + n + " but it was actually " + r;
        return t.call(this, e, i) || this;
      }
      return n(e, t), e;
    })(ur),
    dr = (function (t) {
      function e(e, n) {
        var r =
          "Failed to parse PDF object starting with the following byte: " + n;
        return t.call(this, e, r) || this;
      }
      return n(e, t), e;
    })(ur),
    fr = (function (t) {
      function e(e) {
        return t.call(this, e, "Failed to parse invalid PDF object") || this;
      }
      return n(e, t), e;
    })(ur),
    pr = (function (t) {
      function e(e) {
        return t.call(this, e, "Failed to parse PDF stream") || this;
      }
      return n(e, t), e;
    })(ur),
    gr = (function (t) {
      function e(e) {
        return (
          t.call(
            this,
            e,
            "Failed to parse PDF literal string due to unbalanced parenthesis"
          ) || this
        );
      }
      return n(e, t), e;
    })(ur),
    vr = (function (t) {
      function e(e) {
        return t.call(this, e, "Parser stalled") || this;
      }
      return n(e, t), e;
    })(ur),
    yr = (function (t) {
      function e(e) {
        return t.call(this, e, "No PDF header found") || this;
      }
      return n(e, t), e;
    })(ur),
    mr = (function (t) {
      function e(e, n) {
        var r = "Did not find expected keyword '" + V(n) + "'";
        return t.call(this, e, r) || this;
      }
      return n(e, t), e;
    })(ur);
  !(function (t) {
    (t[(t.Null = 0)] = "Null"),
      (t[(t.Backspace = 8)] = "Backspace"),
      (t[(t.Tab = 9)] = "Tab"),
      (t[(t.Newline = 10)] = "Newline"),
      (t[(t.FormFeed = 12)] = "FormFeed"),
      (t[(t.CarriageReturn = 13)] = "CarriageReturn"),
      (t[(t.Space = 32)] = "Space"),
      (t[(t.ExclamationPoint = 33)] = "ExclamationPoint"),
      (t[(t.Hash = 35)] = "Hash"),
      (t[(t.Percent = 37)] = "Percent"),
      (t[(t.LeftParen = 40)] = "LeftParen"),
      (t[(t.RightParen = 41)] = "RightParen"),
      (t[(t.Plus = 43)] = "Plus"),
      (t[(t.Minus = 45)] = "Minus"),
      (t[(t.Dash = 45)] = "Dash"),
      (t[(t.Period = 46)] = "Period"),
      (t[(t.ForwardSlash = 47)] = "ForwardSlash"),
      (t[(t.Zero = 48)] = "Zero"),
      (t[(t.One = 49)] = "One"),
      (t[(t.Two = 50)] = "Two"),
      (t[(t.Three = 51)] = "Three"),
      (t[(t.Four = 52)] = "Four"),
      (t[(t.Five = 53)] = "Five"),
      (t[(t.Six = 54)] = "Six"),
      (t[(t.Seven = 55)] = "Seven"),
      (t[(t.Eight = 56)] = "Eight"),
      (t[(t.Nine = 57)] = "Nine"),
      (t[(t.LessThan = 60)] = "LessThan"),
      (t[(t.GreaterThan = 62)] = "GreaterThan"),
      (t[(t.A = 65)] = "A"),
      (t[(t.D = 68)] = "D"),
      (t[(t.E = 69)] = "E"),
      (t[(t.F = 70)] = "F"),
      (t[(t.O = 79)] = "O"),
      (t[(t.P = 80)] = "P"),
      (t[(t.R = 82)] = "R"),
      (t[(t.LeftSquareBracket = 91)] = "LeftSquareBracket"),
      (t[(t.BackSlash = 92)] = "BackSlash"),
      (t[(t.RightSquareBracket = 93)] = "RightSquareBracket"),
      (t[(t.a = 97)] = "a"),
      (t[(t.b = 98)] = "b"),
      (t[(t.d = 100)] = "d"),
      (t[(t.e = 101)] = "e"),
      (t[(t.f = 102)] = "f"),
      (t[(t.i = 105)] = "i"),
      (t[(t.j = 106)] = "j"),
      (t[(t.l = 108)] = "l"),
      (t[(t.m = 109)] = "m"),
      (t[(t.n = 110)] = "n"),
      (t[(t.o = 111)] = "o"),
      (t[(t.r = 114)] = "r"),
      (t[(t.s = 115)] = "s"),
      (t[(t.t = 116)] = "t"),
      (t[(t.u = 117)] = "u"),
      (t[(t.x = 120)] = "x"),
      (t[(t.LeftCurly = 123)] = "LeftCurly"),
      (t[(t.RightCurly = 125)] = "RightCurly"),
      (t[(t.Tilde = 126)] = "Tilde");
  })(qn || (qn = {}));
  var br = qn,
    wr = pt(function (t, e) {
      var n =
        "undefined" != typeof Uint8Array &&
        "undefined" != typeof Uint16Array &&
        "undefined" != typeof Int32Array;
      function r(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }
      (e.assign = function (t) {
        for (var e = Array.prototype.slice.call(arguments, 1); e.length; ) {
          var n = e.shift();
          if (n) {
            if ("object" != typeof n)
              throw new TypeError(n + "must be non-object");
            for (var i in n) r(n, i) && (t[i] = n[i]);
          }
        }
        return t;
      }),
        (e.shrinkBuf = function (t, e) {
          return t.length === e
            ? t
            : t.subarray
            ? t.subarray(0, e)
            : ((t.length = e), t);
        });
      var i = {
          arraySet: function (t, e, n, r, i) {
            if (e.subarray && t.subarray) t.set(e.subarray(n, n + r), i);
            else for (var o = 0; o < r; o++) t[i + o] = e[n + o];
          },
          flattenChunks: function (t) {
            var e, n, r, i, o, a;
            for (r = 0, e = 0, n = t.length; e < n; e++) r += t[e].length;
            for (a = new Uint8Array(r), i = 0, e = 0, n = t.length; e < n; e++)
              (o = t[e]), a.set(o, i), (i += o.length);
            return a;
          },
        },
        o = {
          arraySet: function (t, e, n, r, i) {
            for (var o = 0; o < r; o++) t[i + o] = e[n + o];
          },
          flattenChunks: function (t) {
            return [].concat.apply([], t);
          },
        };
      (e.setTyped = function (t) {
        t
          ? ((e.Buf8 = Uint8Array),
            (e.Buf16 = Uint16Array),
            (e.Buf32 = Int32Array),
            e.assign(e, i))
          : ((e.Buf8 = Array),
            (e.Buf16 = Array),
            (e.Buf32 = Array),
            e.assign(e, o));
      }),
        e.setTyped(n);
    });
  function xr(t) {
    for (var e = t.length; --e >= 0; ) t[e] = 0;
  }
  var kr = [
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
      5, 5, 5, 0,
    ],
    Fr = [
      0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
      11, 11, 12, 12, 13, 13,
    ],
    Sr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
    Cr = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
    Ar = new Array(576);
  xr(Ar);
  var Tr = new Array(60);
  xr(Tr);
  var Pr = new Array(512);
  xr(Pr);
  var zr = new Array(256);
  xr(zr);
  var Rr = new Array(29);
  xr(Rr);
  var Or,
    Dr,
    Br,
    Nr = new Array(30);
  function Er(t, e, n, r, i) {
    (this.static_tree = t),
      (this.extra_bits = e),
      (this.extra_base = n),
      (this.elems = r),
      (this.max_length = i),
      (this.has_stree = t && t.length);
  }
  function jr(t, e) {
    (this.dyn_tree = t), (this.max_code = 0), (this.stat_desc = e);
  }
  function Mr(t) {
    return t < 256 ? Pr[t] : Pr[256 + (t >>> 7)];
  }
  function Ir(t, e) {
    (t.pending_buf[t.pending++] = 255 & e),
      (t.pending_buf[t.pending++] = (e >>> 8) & 255);
  }
  function Ur(t, e, n) {
    t.bi_valid > 16 - n
      ? ((t.bi_buf |= (e << t.bi_valid) & 65535),
        Ir(t, t.bi_buf),
        (t.bi_buf = e >> (16 - t.bi_valid)),
        (t.bi_valid += n - 16))
      : ((t.bi_buf |= (e << t.bi_valid) & 65535), (t.bi_valid += n));
  }
  function Vr(t, e, n) {
    Ur(t, n[2 * e], n[2 * e + 1]);
  }
  function Wr(t, e) {
    var n = 0;
    do {
      (n |= 1 & t), (t >>>= 1), (n <<= 1);
    } while (--e > 0);
    return n >>> 1;
  }
  function qr(t, e, n) {
    var r,
      i,
      o = new Array(16),
      a = 0;
    for (r = 1; r <= 15; r++) o[r] = a = (a + n[r - 1]) << 1;
    for (i = 0; i <= e; i++) {
      var s = t[2 * i + 1];
      0 !== s && (t[2 * i] = Wr(o[s]++, s));
    }
  }
  function Lr(t) {
    var e;
    for (e = 0; e < 286; e++) t.dyn_ltree[2 * e] = 0;
    for (e = 0; e < 30; e++) t.dyn_dtree[2 * e] = 0;
    for (e = 0; e < 19; e++) t.bl_tree[2 * e] = 0;
    (t.dyn_ltree[512] = 1),
      (t.opt_len = t.static_len = 0),
      (t.last_lit = t.matches = 0);
  }
  function Kr(t) {
    t.bi_valid > 8
      ? Ir(t, t.bi_buf)
      : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf),
      (t.bi_buf = 0),
      (t.bi_valid = 0);
  }
  function Gr(t, e, n, r) {
    var i = 2 * e,
      o = 2 * n;
    return t[i] < t[o] || (t[i] === t[o] && r[e] <= r[n]);
  }
  function Hr(t, e, n) {
    for (
      var r = t.heap[n], i = n << 1;
      i <= t.heap_len &&
      (i < t.heap_len && Gr(e, t.heap[i + 1], t.heap[i], t.depth) && i++,
      !Gr(e, r, t.heap[i], t.depth));

    )
      (t.heap[n] = t.heap[i]), (n = i), (i <<= 1);
    t.heap[n] = r;
  }
  function _r(t, e, n) {
    var r,
      i,
      o,
      a,
      s = 0;
    if (0 !== t.last_lit)
      do {
        (r =
          (t.pending_buf[t.d_buf + 2 * s] << 8) |
          t.pending_buf[t.d_buf + 2 * s + 1]),
          (i = t.pending_buf[t.l_buf + s]),
          s++,
          0 === r
            ? Vr(t, i, e)
            : (Vr(t, (o = zr[i]) + 256 + 1, e),
              0 !== (a = kr[o]) && Ur(t, (i -= Rr[o]), a),
              Vr(t, (o = Mr(--r)), n),
              0 !== (a = Fr[o]) && Ur(t, (r -= Nr[o]), a));
      } while (s < t.last_lit);
    Vr(t, 256, e);
  }
  function Xr(t, e) {
    var n,
      r,
      i,
      o = e.dyn_tree,
      a = e.stat_desc.static_tree,
      s = e.stat_desc.has_stree,
      l = e.stat_desc.elems,
      h = -1;
    for (t.heap_len = 0, t.heap_max = 573, n = 0; n < l; n++)
      0 !== o[2 * n]
        ? ((t.heap[++t.heap_len] = h = n), (t.depth[n] = 0))
        : (o[2 * n + 1] = 0);
    for (; t.heap_len < 2; )
      (o[2 * (i = t.heap[++t.heap_len] = h < 2 ? ++h : 0)] = 1),
        (t.depth[i] = 0),
        t.opt_len--,
        s && (t.static_len -= a[2 * i + 1]);
    for (e.max_code = h, n = t.heap_len >> 1; n >= 1; n--) Hr(t, o, n);
    i = l;
    do {
      (n = t.heap[1]),
        (t.heap[1] = t.heap[t.heap_len--]),
        Hr(t, o, 1),
        (r = t.heap[1]),
        (t.heap[--t.heap_max] = n),
        (t.heap[--t.heap_max] = r),
        (o[2 * i] = o[2 * n] + o[2 * r]),
        (t.depth[i] = (t.depth[n] >= t.depth[r] ? t.depth[n] : t.depth[r]) + 1),
        (o[2 * n + 1] = o[2 * r + 1] = i),
        (t.heap[1] = i++),
        Hr(t, o, 1);
    } while (t.heap_len >= 2);
    (t.heap[--t.heap_max] = t.heap[1]),
      (function (t, e) {
        var n,
          r,
          i,
          o,
          a,
          s,
          l = e.dyn_tree,
          h = e.max_code,
          u = e.stat_desc.static_tree,
          c = e.stat_desc.has_stree,
          d = e.stat_desc.extra_bits,
          f = e.stat_desc.extra_base,
          p = e.stat_desc.max_length,
          g = 0;
        for (o = 0; o <= 15; o++) t.bl_count[o] = 0;
        for (
          l[2 * t.heap[t.heap_max] + 1] = 0, n = t.heap_max + 1;
          n < 573;
          n++
        )
          (o = l[2 * l[2 * (r = t.heap[n]) + 1] + 1] + 1) > p && ((o = p), g++),
            (l[2 * r + 1] = o),
            r > h ||
              (t.bl_count[o]++,
              (a = 0),
              r >= f && (a = d[r - f]),
              (s = l[2 * r]),
              (t.opt_len += s * (o + a)),
              c && (t.static_len += s * (u[2 * r + 1] + a)));
        if (0 !== g) {
          do {
            for (o = p - 1; 0 === t.bl_count[o]; ) o--;
            t.bl_count[o]--,
              (t.bl_count[o + 1] += 2),
              t.bl_count[p]--,
              (g -= 2);
          } while (g > 0);
          for (o = p; 0 !== o; o--)
            for (r = t.bl_count[o]; 0 !== r; )
              (i = t.heap[--n]) > h ||
                (l[2 * i + 1] !== o &&
                  ((t.opt_len += (o - l[2 * i + 1]) * l[2 * i]),
                  (l[2 * i + 1] = o)),
                r--);
        }
      })(t, e),
      qr(o, h, t.bl_count);
  }
  function Zr(t, e, n) {
    var r,
      i,
      o = -1,
      a = e[1],
      s = 0,
      l = 7,
      h = 4;
    for (
      0 === a && ((l = 138), (h = 3)), e[2 * (n + 1) + 1] = 65535, r = 0;
      r <= n;
      r++
    )
      (i = a),
        (a = e[2 * (r + 1) + 1]),
        (++s < l && i === a) ||
          (s < h
            ? (t.bl_tree[2 * i] += s)
            : 0 !== i
            ? (i !== o && t.bl_tree[2 * i]++, t.bl_tree[32]++)
            : s <= 10
            ? t.bl_tree[34]++
            : t.bl_tree[36]++,
          (s = 0),
          (o = i),
          0 === a
            ? ((l = 138), (h = 3))
            : i === a
            ? ((l = 6), (h = 3))
            : ((l = 7), (h = 4)));
  }
  function Yr(t, e, n) {
    var r,
      i,
      o = -1,
      a = e[1],
      s = 0,
      l = 7,
      h = 4;
    for (0 === a && ((l = 138), (h = 3)), r = 0; r <= n; r++)
      if (((i = a), (a = e[2 * (r + 1) + 1]), !(++s < l && i === a))) {
        if (s < h)
          do {
            Vr(t, i, t.bl_tree);
          } while (0 != --s);
        else
          0 !== i
            ? (i !== o && (Vr(t, i, t.bl_tree), s--),
              Vr(t, 16, t.bl_tree),
              Ur(t, s - 3, 2))
            : s <= 10
            ? (Vr(t, 17, t.bl_tree), Ur(t, s - 3, 3))
            : (Vr(t, 18, t.bl_tree), Ur(t, s - 11, 7));
        (s = 0),
          (o = i),
          0 === a
            ? ((l = 138), (h = 3))
            : i === a
            ? ((l = 6), (h = 3))
            : ((l = 7), (h = 4));
      }
  }
  xr(Nr);
  var Jr = !1;
  function Qr(t, e, n, r) {
    Ur(t, 0 + (r ? 1 : 0), 3),
      (function (t, e, n, r) {
        Kr(t),
          r && (Ir(t, n), Ir(t, ~n)),
          wr.arraySet(t.pending_buf, t.window, e, n, t.pending),
          (t.pending += n);
      })(t, e, n, !0);
  }
  var $r = {
    _tr_init: function (t) {
      Jr ||
        (!(function () {
          var t,
            e,
            n,
            r,
            i,
            o = new Array(16);
          for (n = 0, r = 0; r < 28; r++)
            for (Rr[r] = n, t = 0; t < 1 << kr[r]; t++) zr[n++] = r;
          for (zr[n - 1] = r, i = 0, r = 0; r < 16; r++)
            for (Nr[r] = i, t = 0; t < 1 << Fr[r]; t++) Pr[i++] = r;
          for (i >>= 7; r < 30; r++)
            for (Nr[r] = i << 7, t = 0; t < 1 << (Fr[r] - 7); t++)
              Pr[256 + i++] = r;
          for (e = 0; e <= 15; e++) o[e] = 0;
          for (t = 0; t <= 143; ) (Ar[2 * t + 1] = 8), t++, o[8]++;
          for (; t <= 255; ) (Ar[2 * t + 1] = 9), t++, o[9]++;
          for (; t <= 279; ) (Ar[2 * t + 1] = 7), t++, o[7]++;
          for (; t <= 287; ) (Ar[2 * t + 1] = 8), t++, o[8]++;
          for (qr(Ar, 287, o), t = 0; t < 30; t++)
            (Tr[2 * t + 1] = 5), (Tr[2 * t] = Wr(t, 5));
          (Or = new Er(Ar, kr, 257, 286, 15)),
            (Dr = new Er(Tr, Fr, 0, 30, 15)),
            (Br = new Er(new Array(0), Sr, 0, 19, 7));
        })(),
        (Jr = !0)),
        (t.l_desc = new jr(t.dyn_ltree, Or)),
        (t.d_desc = new jr(t.dyn_dtree, Dr)),
        (t.bl_desc = new jr(t.bl_tree, Br)),
        (t.bi_buf = 0),
        (t.bi_valid = 0),
        Lr(t);
    },
    _tr_stored_block: Qr,
    _tr_flush_block: function (t, e, n, r) {
      var i,
        o,
        a = 0;
      t.level > 0
        ? (2 === t.strm.data_type &&
            (t.strm.data_type = (function (t) {
              var e,
                n = 4093624447;
              for (e = 0; e <= 31; e++, n >>>= 1)
                if (1 & n && 0 !== t.dyn_ltree[2 * e]) return 0;
              if (
                0 !== t.dyn_ltree[18] ||
                0 !== t.dyn_ltree[20] ||
                0 !== t.dyn_ltree[26]
              )
                return 1;
              for (e = 32; e < 256; e++) if (0 !== t.dyn_ltree[2 * e]) return 1;
              return 0;
            })(t)),
          Xr(t, t.l_desc),
          Xr(t, t.d_desc),
          (a = (function (t) {
            var e;
            for (
              Zr(t, t.dyn_ltree, t.l_desc.max_code),
                Zr(t, t.dyn_dtree, t.d_desc.max_code),
                Xr(t, t.bl_desc),
                e = 18;
              e >= 3 && 0 === t.bl_tree[2 * Cr[e] + 1];
              e--
            );
            return (t.opt_len += 3 * (e + 1) + 5 + 5 + 4), e;
          })(t)),
          (i = (t.opt_len + 3 + 7) >>> 3),
          (o = (t.static_len + 3 + 7) >>> 3) <= i && (i = o))
        : (i = o = n + 5),
        n + 4 <= i && -1 !== e
          ? Qr(t, e, n, r)
          : 4 === t.strategy || o === i
          ? (Ur(t, 2 + (r ? 1 : 0), 3), _r(t, Ar, Tr))
          : (Ur(t, 4 + (r ? 1 : 0), 3),
            (function (t, e, n, r) {
              var i;
              for (
                Ur(t, e - 257, 5), Ur(t, n - 1, 5), Ur(t, r - 4, 4), i = 0;
                i < r;
                i++
              )
                Ur(t, t.bl_tree[2 * Cr[i] + 1], 3);
              Yr(t, t.dyn_ltree, e - 1), Yr(t, t.dyn_dtree, n - 1);
            })(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, a + 1),
            _r(t, t.dyn_ltree, t.dyn_dtree)),
        Lr(t),
        r && Kr(t);
    },
    _tr_tally: function (t, e, n) {
      return (
        (t.pending_buf[t.d_buf + 2 * t.last_lit] = (e >>> 8) & 255),
        (t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e),
        (t.pending_buf[t.l_buf + t.last_lit] = 255 & n),
        t.last_lit++,
        0 === e
          ? t.dyn_ltree[2 * n]++
          : (t.matches++,
            e--,
            t.dyn_ltree[2 * (zr[n] + 256 + 1)]++,
            t.dyn_dtree[2 * Mr(e)]++),
        t.last_lit === t.lit_bufsize - 1
      );
    },
    _tr_align: function (t) {
      Ur(t, 2, 3),
        Vr(t, 256, Ar),
        (function (t) {
          16 === t.bi_valid
            ? (Ir(t, t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0))
            : t.bi_valid >= 8 &&
              ((t.pending_buf[t.pending++] = 255 & t.bi_buf),
              (t.bi_buf >>= 8),
              (t.bi_valid -= 8));
        })(t);
    },
  };
  var ti = function (t, e, n, r) {
    for (
      var i = (65535 & t) | 0, o = ((t >>> 16) & 65535) | 0, a = 0;
      0 !== n;

    ) {
      n -= a = n > 2e3 ? 2e3 : n;
      do {
        o = (o + (i = (i + e[r++]) | 0)) | 0;
      } while (--a);
      (i %= 65521), (o %= 65521);
    }
    return i | (o << 16) | 0;
  };
  var ei = (function () {
    for (var t, e = [], n = 0; n < 256; n++) {
      t = n;
      for (var r = 0; r < 8; r++) t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
      e[n] = t;
    }
    return e;
  })();
  var ni,
    ri = function (t, e, n, r) {
      var i = ei,
        o = r + n;
      t ^= -1;
      for (var a = r; a < o; a++) t = (t >>> 8) ^ i[255 & (t ^ e[a])];
      return -1 ^ t;
    },
    ii = {
      2: "need dictionary",
      1: "stream end",
      0: "",
      "-1": "file error",
      "-2": "stream error",
      "-3": "data error",
      "-4": "insufficient memory",
      "-5": "buffer error",
      "-6": "incompatible version",
    };
  function oi(t, e) {
    return (t.msg = ii[e]), e;
  }
  function ai(t) {
    return (t << 1) - (t > 4 ? 9 : 0);
  }
  function si(t) {
    for (var e = t.length; --e >= 0; ) t[e] = 0;
  }
  function li(t) {
    var e = t.state,
      n = e.pending;
    n > t.avail_out && (n = t.avail_out),
      0 !== n &&
        (wr.arraySet(t.output, e.pending_buf, e.pending_out, n, t.next_out),
        (t.next_out += n),
        (e.pending_out += n),
        (t.total_out += n),
        (t.avail_out -= n),
        (e.pending -= n),
        0 === e.pending && (e.pending_out = 0));
  }
  function hi(t, e) {
    $r._tr_flush_block(
      t,
      t.block_start >= 0 ? t.block_start : -1,
      t.strstart - t.block_start,
      e
    ),
      (t.block_start = t.strstart),
      li(t.strm);
  }
  function ui(t, e) {
    t.pending_buf[t.pending++] = e;
  }
  function ci(t, e) {
    (t.pending_buf[t.pending++] = (e >>> 8) & 255),
      (t.pending_buf[t.pending++] = 255 & e);
  }
  function di(t, e, n, r) {
    var i = t.avail_in;
    return (
      i > r && (i = r),
      0 === i
        ? 0
        : ((t.avail_in -= i),
          wr.arraySet(e, t.input, t.next_in, i, n),
          1 === t.state.wrap
            ? (t.adler = ti(t.adler, e, i, n))
            : 2 === t.state.wrap && (t.adler = ri(t.adler, e, i, n)),
          (t.next_in += i),
          (t.total_in += i),
          i)
    );
  }
  function fi(t, e) {
    var n,
      r,
      i = t.max_chain_length,
      o = t.strstart,
      a = t.prev_length,
      s = t.nice_match,
      l = t.strstart > t.w_size - 262 ? t.strstart - (t.w_size - 262) : 0,
      h = t.window,
      u = t.w_mask,
      c = t.prev,
      d = t.strstart + 258,
      f = h[o + a - 1],
      p = h[o + a];
    t.prev_length >= t.good_match && (i >>= 2),
      s > t.lookahead && (s = t.lookahead);
    do {
      if (
        h[(n = e) + a] === p &&
        h[n + a - 1] === f &&
        h[n] === h[o] &&
        h[++n] === h[o + 1]
      ) {
        (o += 2), n++;
        do {} while (
          h[++o] === h[++n] &&
          h[++o] === h[++n] &&
          h[++o] === h[++n] &&
          h[++o] === h[++n] &&
          h[++o] === h[++n] &&
          h[++o] === h[++n] &&
          h[++o] === h[++n] &&
          h[++o] === h[++n] &&
          o < d
        );
        if (((r = 258 - (d - o)), (o = d - 258), r > a)) {
          if (((t.match_start = e), (a = r), r >= s)) break;
          (f = h[o + a - 1]), (p = h[o + a]);
        }
      }
    } while ((e = c[e & u]) > l && 0 != --i);
    return a <= t.lookahead ? a : t.lookahead;
  }
  function pi(t) {
    var e,
      n,
      r,
      i,
      o,
      a = t.w_size;
    do {
      if (
        ((i = t.window_size - t.lookahead - t.strstart),
        t.strstart >= a + (a - 262))
      ) {
        wr.arraySet(t.window, t.window, a, a, 0),
          (t.match_start -= a),
          (t.strstart -= a),
          (t.block_start -= a),
          (e = n = t.hash_size);
        do {
          (r = t.head[--e]), (t.head[e] = r >= a ? r - a : 0);
        } while (--n);
        e = n = a;
        do {
          (r = t.prev[--e]), (t.prev[e] = r >= a ? r - a : 0);
        } while (--n);
        i += a;
      }
      if (0 === t.strm.avail_in) break;
      if (
        ((n = di(t.strm, t.window, t.strstart + t.lookahead, i)),
        (t.lookahead += n),
        t.lookahead + t.insert >= 3)
      )
        for (
          o = t.strstart - t.insert,
            t.ins_h = t.window[o],
            t.ins_h =
              ((t.ins_h << t.hash_shift) ^ t.window[o + 1]) & t.hash_mask;
          t.insert &&
          ((t.ins_h =
            ((t.ins_h << t.hash_shift) ^ t.window[o + 3 - 1]) & t.hash_mask),
          (t.prev[o & t.w_mask] = t.head[t.ins_h]),
          (t.head[t.ins_h] = o),
          o++,
          t.insert--,
          !(t.lookahead + t.insert < 3));

        );
    } while (t.lookahead < 262 && 0 !== t.strm.avail_in);
  }
  function gi(t, e) {
    for (var n, r; ; ) {
      if (t.lookahead < 262) {
        if ((pi(t), t.lookahead < 262 && 0 === e)) return 1;
        if (0 === t.lookahead) break;
      }
      if (
        ((n = 0),
        t.lookahead >= 3 &&
          ((t.ins_h =
            ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 3 - 1]) &
            t.hash_mask),
          (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
          (t.head[t.ins_h] = t.strstart)),
        0 !== n &&
          t.strstart - n <= t.w_size - 262 &&
          (t.match_length = fi(t, n)),
        t.match_length >= 3)
      )
        if (
          ((r = $r._tr_tally(
            t,
            t.strstart - t.match_start,
            t.match_length - 3
          )),
          (t.lookahead -= t.match_length),
          t.match_length <= t.max_lazy_match && t.lookahead >= 3)
        ) {
          t.match_length--;
          do {
            t.strstart++,
              (t.ins_h =
                ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 3 - 1]) &
                t.hash_mask),
              (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
              (t.head[t.ins_h] = t.strstart);
          } while (0 != --t.match_length);
          t.strstart++;
        } else
          (t.strstart += t.match_length),
            (t.match_length = 0),
            (t.ins_h = t.window[t.strstart]),
            (t.ins_h =
              ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 1]) &
              t.hash_mask);
      else
        (r = $r._tr_tally(t, 0, t.window[t.strstart])),
          t.lookahead--,
          t.strstart++;
      if (r && (hi(t, !1), 0 === t.strm.avail_out)) return 1;
    }
    return (
      (t.insert = t.strstart < 2 ? t.strstart : 2),
      4 === e
        ? (hi(t, !0), 0 === t.strm.avail_out ? 3 : 4)
        : t.last_lit && (hi(t, !1), 0 === t.strm.avail_out)
        ? 1
        : 2
    );
  }
  function vi(t, e) {
    for (var n, r, i; ; ) {
      if (t.lookahead < 262) {
        if ((pi(t), t.lookahead < 262 && 0 === e)) return 1;
        if (0 === t.lookahead) break;
      }
      if (
        ((n = 0),
        t.lookahead >= 3 &&
          ((t.ins_h =
            ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 3 - 1]) &
            t.hash_mask),
          (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
          (t.head[t.ins_h] = t.strstart)),
        (t.prev_length = t.match_length),
        (t.prev_match = t.match_start),
        (t.match_length = 2),
        0 !== n &&
          t.prev_length < t.max_lazy_match &&
          t.strstart - n <= t.w_size - 262 &&
          ((t.match_length = fi(t, n)),
          t.match_length <= 5 &&
            (1 === t.strategy ||
              (3 === t.match_length && t.strstart - t.match_start > 4096)) &&
            (t.match_length = 2)),
        t.prev_length >= 3 && t.match_length <= t.prev_length)
      ) {
        (i = t.strstart + t.lookahead - 3),
          (r = $r._tr_tally(
            t,
            t.strstart - 1 - t.prev_match,
            t.prev_length - 3
          )),
          (t.lookahead -= t.prev_length - 1),
          (t.prev_length -= 2);
        do {
          ++t.strstart <= i &&
            ((t.ins_h =
              ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 3 - 1]) &
              t.hash_mask),
            (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
            (t.head[t.ins_h] = t.strstart));
        } while (0 != --t.prev_length);
        if (
          ((t.match_available = 0),
          (t.match_length = 2),
          t.strstart++,
          r && (hi(t, !1), 0 === t.strm.avail_out))
        )
          return 1;
      } else if (t.match_available) {
        if (
          ((r = $r._tr_tally(t, 0, t.window[t.strstart - 1])) && hi(t, !1),
          t.strstart++,
          t.lookahead--,
          0 === t.strm.avail_out)
        )
          return 1;
      } else (t.match_available = 1), t.strstart++, t.lookahead--;
    }
    return (
      t.match_available &&
        ((r = $r._tr_tally(t, 0, t.window[t.strstart - 1])),
        (t.match_available = 0)),
      (t.insert = t.strstart < 2 ? t.strstart : 2),
      4 === e
        ? (hi(t, !0), 0 === t.strm.avail_out ? 3 : 4)
        : t.last_lit && (hi(t, !1), 0 === t.strm.avail_out)
        ? 1
        : 2
    );
  }
  function yi(t, e, n, r, i) {
    (this.good_length = t),
      (this.max_lazy = e),
      (this.nice_length = n),
      (this.max_chain = r),
      (this.func = i);
  }
  function mi() {
    (this.strm = null),
      (this.status = 0),
      (this.pending_buf = null),
      (this.pending_buf_size = 0),
      (this.pending_out = 0),
      (this.pending = 0),
      (this.wrap = 0),
      (this.gzhead = null),
      (this.gzindex = 0),
      (this.method = 8),
      (this.last_flush = -1),
      (this.w_size = 0),
      (this.w_bits = 0),
      (this.w_mask = 0),
      (this.window = null),
      (this.window_size = 0),
      (this.prev = null),
      (this.head = null),
      (this.ins_h = 0),
      (this.hash_size = 0),
      (this.hash_bits = 0),
      (this.hash_mask = 0),
      (this.hash_shift = 0),
      (this.block_start = 0),
      (this.match_length = 0),
      (this.prev_match = 0),
      (this.match_available = 0),
      (this.strstart = 0),
      (this.match_start = 0),
      (this.lookahead = 0),
      (this.prev_length = 0),
      (this.max_chain_length = 0),
      (this.max_lazy_match = 0),
      (this.level = 0),
      (this.strategy = 0),
      (this.good_match = 0),
      (this.nice_match = 0),
      (this.dyn_ltree = new wr.Buf16(1146)),
      (this.dyn_dtree = new wr.Buf16(122)),
      (this.bl_tree = new wr.Buf16(78)),
      si(this.dyn_ltree),
      si(this.dyn_dtree),
      si(this.bl_tree),
      (this.l_desc = null),
      (this.d_desc = null),
      (this.bl_desc = null),
      (this.bl_count = new wr.Buf16(16)),
      (this.heap = new wr.Buf16(573)),
      si(this.heap),
      (this.heap_len = 0),
      (this.heap_max = 0),
      (this.depth = new wr.Buf16(573)),
      si(this.depth),
      (this.l_buf = 0),
      (this.lit_bufsize = 0),
      (this.last_lit = 0),
      (this.d_buf = 0),
      (this.opt_len = 0),
      (this.static_len = 0),
      (this.matches = 0),
      (this.insert = 0),
      (this.bi_buf = 0),
      (this.bi_valid = 0);
  }
  function bi(t) {
    var e;
    return t && t.state
      ? ((t.total_in = t.total_out = 0),
        (t.data_type = 2),
        ((e = t.state).pending = 0),
        (e.pending_out = 0),
        e.wrap < 0 && (e.wrap = -e.wrap),
        (e.status = e.wrap ? 42 : 113),
        (t.adler = 2 === e.wrap ? 0 : 1),
        (e.last_flush = 0),
        $r._tr_init(e),
        0)
      : oi(t, -2);
  }
  function wi(t) {
    var e,
      n = bi(t);
    return (
      0 === n &&
        (((e = t.state).window_size = 2 * e.w_size),
        si(e.head),
        (e.max_lazy_match = ni[e.level].max_lazy),
        (e.good_match = ni[e.level].good_length),
        (e.nice_match = ni[e.level].nice_length),
        (e.max_chain_length = ni[e.level].max_chain),
        (e.strstart = 0),
        (e.block_start = 0),
        (e.lookahead = 0),
        (e.insert = 0),
        (e.match_length = e.prev_length = 2),
        (e.match_available = 0),
        (e.ins_h = 0)),
      n
    );
  }
  function xi(t, e, n, r, i, o) {
    if (!t) return -2;
    var a = 1;
    if (
      (-1 === e && (e = 6),
      r < 0 ? ((a = 0), (r = -r)) : r > 15 && ((a = 2), (r -= 16)),
      i < 1 ||
        i > 9 ||
        8 !== n ||
        r < 8 ||
        r > 15 ||
        e < 0 ||
        e > 9 ||
        o < 0 ||
        o > 4)
    )
      return oi(t, -2);
    8 === r && (r = 9);
    var s = new mi();
    return (
      (t.state = s),
      (s.strm = t),
      (s.wrap = a),
      (s.gzhead = null),
      (s.w_bits = r),
      (s.w_size = 1 << s.w_bits),
      (s.w_mask = s.w_size - 1),
      (s.hash_bits = i + 7),
      (s.hash_size = 1 << s.hash_bits),
      (s.hash_mask = s.hash_size - 1),
      (s.hash_shift = ~~((s.hash_bits + 3 - 1) / 3)),
      (s.window = new wr.Buf8(2 * s.w_size)),
      (s.head = new wr.Buf16(s.hash_size)),
      (s.prev = new wr.Buf16(s.w_size)),
      (s.lit_bufsize = 1 << (i + 6)),
      (s.pending_buf_size = 4 * s.lit_bufsize),
      (s.pending_buf = new wr.Buf8(s.pending_buf_size)),
      (s.d_buf = 1 * s.lit_bufsize),
      (s.l_buf = 3 * s.lit_bufsize),
      (s.level = e),
      (s.strategy = o),
      (s.method = n),
      wi(t)
    );
  }
  ni = [
    new yi(0, 0, 0, 0, function (t, e) {
      var n = 65535;
      for (n > t.pending_buf_size - 5 && (n = t.pending_buf_size - 5); ; ) {
        if (t.lookahead <= 1) {
          if ((pi(t), 0 === t.lookahead && 0 === e)) return 1;
          if (0 === t.lookahead) break;
        }
        (t.strstart += t.lookahead), (t.lookahead = 0);
        var r = t.block_start + n;
        if (
          (0 === t.strstart || t.strstart >= r) &&
          ((t.lookahead = t.strstart - r),
          (t.strstart = r),
          hi(t, !1),
          0 === t.strm.avail_out)
        )
          return 1;
        if (
          t.strstart - t.block_start >= t.w_size - 262 &&
          (hi(t, !1), 0 === t.strm.avail_out)
        )
          return 1;
      }
      return (
        (t.insert = 0),
        4 === e
          ? (hi(t, !0), 0 === t.strm.avail_out ? 3 : 4)
          : (t.strstart > t.block_start && (hi(t, !1), t.strm.avail_out), 1)
      );
    }),
    new yi(4, 4, 8, 4, gi),
    new yi(4, 5, 16, 8, gi),
    new yi(4, 6, 32, 32, gi),
    new yi(4, 4, 16, 16, vi),
    new yi(8, 16, 32, 32, vi),
    new yi(8, 16, 128, 128, vi),
    new yi(8, 32, 128, 256, vi),
    new yi(32, 128, 258, 1024, vi),
    new yi(32, 258, 258, 4096, vi),
  ];
  var ki = {
      deflateInit: function (t, e) {
        return xi(t, e, 8, 15, 8, 0);
      },
      deflateInit2: xi,
      deflateReset: wi,
      deflateResetKeep: bi,
      deflateSetHeader: function (t, e) {
        return t && t.state
          ? 2 !== t.state.wrap
            ? -2
            : ((t.state.gzhead = e), 0)
          : -2;
      },
      deflate: function (t, e) {
        var n, r, i, o;
        if (!t || !t.state || e > 5 || e < 0) return t ? oi(t, -2) : -2;
        if (
          ((r = t.state),
          !t.output ||
            (!t.input && 0 !== t.avail_in) ||
            (666 === r.status && 4 !== e))
        )
          return oi(t, 0 === t.avail_out ? -5 : -2);
        if (
          ((r.strm = t),
          (n = r.last_flush),
          (r.last_flush = e),
          42 === r.status)
        )
          if (2 === r.wrap)
            (t.adler = 0),
              ui(r, 31),
              ui(r, 139),
              ui(r, 8),
              r.gzhead
                ? (ui(
                    r,
                    (r.gzhead.text ? 1 : 0) +
                      (r.gzhead.hcrc ? 2 : 0) +
                      (r.gzhead.extra ? 4 : 0) +
                      (r.gzhead.name ? 8 : 0) +
                      (r.gzhead.comment ? 16 : 0)
                  ),
                  ui(r, 255 & r.gzhead.time),
                  ui(r, (r.gzhead.time >> 8) & 255),
                  ui(r, (r.gzhead.time >> 16) & 255),
                  ui(r, (r.gzhead.time >> 24) & 255),
                  ui(
                    r,
                    9 === r.level ? 2 : r.strategy >= 2 || r.level < 2 ? 4 : 0
                  ),
                  ui(r, 255 & r.gzhead.os),
                  r.gzhead.extra &&
                    r.gzhead.extra.length &&
                    (ui(r, 255 & r.gzhead.extra.length),
                    ui(r, (r.gzhead.extra.length >> 8) & 255)),
                  r.gzhead.hcrc &&
                    (t.adler = ri(t.adler, r.pending_buf, r.pending, 0)),
                  (r.gzindex = 0),
                  (r.status = 69))
                : (ui(r, 0),
                  ui(r, 0),
                  ui(r, 0),
                  ui(r, 0),
                  ui(r, 0),
                  ui(
                    r,
                    9 === r.level ? 2 : r.strategy >= 2 || r.level < 2 ? 4 : 0
                  ),
                  ui(r, 3),
                  (r.status = 113));
          else {
            var a = (8 + ((r.w_bits - 8) << 4)) << 8;
            (a |=
              (r.strategy >= 2 || r.level < 2
                ? 0
                : r.level < 6
                ? 1
                : 6 === r.level
                ? 2
                : 3) << 6),
              0 !== r.strstart && (a |= 32),
              (a += 31 - (a % 31)),
              (r.status = 113),
              ci(r, a),
              0 !== r.strstart &&
                (ci(r, t.adler >>> 16), ci(r, 65535 & t.adler)),
              (t.adler = 1);
          }
        if (69 === r.status)
          if (r.gzhead.extra) {
            for (
              i = r.pending;
              r.gzindex < (65535 & r.gzhead.extra.length) &&
              (r.pending !== r.pending_buf_size ||
                (r.gzhead.hcrc &&
                  r.pending > i &&
                  (t.adler = ri(t.adler, r.pending_buf, r.pending - i, i)),
                li(t),
                (i = r.pending),
                r.pending !== r.pending_buf_size));

            )
              ui(r, 255 & r.gzhead.extra[r.gzindex]), r.gzindex++;
            r.gzhead.hcrc &&
              r.pending > i &&
              (t.adler = ri(t.adler, r.pending_buf, r.pending - i, i)),
              r.gzindex === r.gzhead.extra.length &&
                ((r.gzindex = 0), (r.status = 73));
          } else r.status = 73;
        if (73 === r.status)
          if (r.gzhead.name) {
            i = r.pending;
            do {
              if (
                r.pending === r.pending_buf_size &&
                (r.gzhead.hcrc &&
                  r.pending > i &&
                  (t.adler = ri(t.adler, r.pending_buf, r.pending - i, i)),
                li(t),
                (i = r.pending),
                r.pending === r.pending_buf_size)
              ) {
                o = 1;
                break;
              }
              (o =
                r.gzindex < r.gzhead.name.length
                  ? 255 & r.gzhead.name.charCodeAt(r.gzindex++)
                  : 0),
                ui(r, o);
            } while (0 !== o);
            r.gzhead.hcrc &&
              r.pending > i &&
              (t.adler = ri(t.adler, r.pending_buf, r.pending - i, i)),
              0 === o && ((r.gzindex = 0), (r.status = 91));
          } else r.status = 91;
        if (91 === r.status)
          if (r.gzhead.comment) {
            i = r.pending;
            do {
              if (
                r.pending === r.pending_buf_size &&
                (r.gzhead.hcrc &&
                  r.pending > i &&
                  (t.adler = ri(t.adler, r.pending_buf, r.pending - i, i)),
                li(t),
                (i = r.pending),
                r.pending === r.pending_buf_size)
              ) {
                o = 1;
                break;
              }
              (o =
                r.gzindex < r.gzhead.comment.length
                  ? 255 & r.gzhead.comment.charCodeAt(r.gzindex++)
                  : 0),
                ui(r, o);
            } while (0 !== o);
            r.gzhead.hcrc &&
              r.pending > i &&
              (t.adler = ri(t.adler, r.pending_buf, r.pending - i, i)),
              0 === o && (r.status = 103);
          } else r.status = 103;
        if (
          (103 === r.status &&
            (r.gzhead.hcrc
              ? (r.pending + 2 > r.pending_buf_size && li(t),
                r.pending + 2 <= r.pending_buf_size &&
                  (ui(r, 255 & t.adler),
                  ui(r, (t.adler >> 8) & 255),
                  (t.adler = 0),
                  (r.status = 113)))
              : (r.status = 113)),
          0 !== r.pending)
        ) {
          if ((li(t), 0 === t.avail_out)) return (r.last_flush = -1), 0;
        } else if (0 === t.avail_in && ai(e) <= ai(n) && 4 !== e)
          return oi(t, -5);
        if (666 === r.status && 0 !== t.avail_in) return oi(t, -5);
        if (
          0 !== t.avail_in ||
          0 !== r.lookahead ||
          (0 !== e && 666 !== r.status)
        ) {
          var s =
            2 === r.strategy
              ? (function (t, e) {
                  for (var n; ; ) {
                    if (0 === t.lookahead && (pi(t), 0 === t.lookahead)) {
                      if (0 === e) return 1;
                      break;
                    }
                    if (
                      ((t.match_length = 0),
                      (n = $r._tr_tally(t, 0, t.window[t.strstart])),
                      t.lookahead--,
                      t.strstart++,
                      n && (hi(t, !1), 0 === t.strm.avail_out))
                    )
                      return 1;
                  }
                  return (
                    (t.insert = 0),
                    4 === e
                      ? (hi(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                      : t.last_lit && (hi(t, !1), 0 === t.strm.avail_out)
                      ? 1
                      : 2
                  );
                })(r, e)
              : 3 === r.strategy
              ? (function (t, e) {
                  for (var n, r, i, o, a = t.window; ; ) {
                    if (t.lookahead <= 258) {
                      if ((pi(t), t.lookahead <= 258 && 0 === e)) return 1;
                      if (0 === t.lookahead) break;
                    }
                    if (
                      ((t.match_length = 0),
                      t.lookahead >= 3 &&
                        t.strstart > 0 &&
                        (r = a[(i = t.strstart - 1)]) === a[++i] &&
                        r === a[++i] &&
                        r === a[++i])
                    ) {
                      o = t.strstart + 258;
                      do {} while (
                        r === a[++i] &&
                        r === a[++i] &&
                        r === a[++i] &&
                        r === a[++i] &&
                        r === a[++i] &&
                        r === a[++i] &&
                        r === a[++i] &&
                        r === a[++i] &&
                        i < o
                      );
                      (t.match_length = 258 - (o - i)),
                        t.match_length > t.lookahead &&
                          (t.match_length = t.lookahead);
                    }
                    if (
                      (t.match_length >= 3
                        ? ((n = $r._tr_tally(t, 1, t.match_length - 3)),
                          (t.lookahead -= t.match_length),
                          (t.strstart += t.match_length),
                          (t.match_length = 0))
                        : ((n = $r._tr_tally(t, 0, t.window[t.strstart])),
                          t.lookahead--,
                          t.strstart++),
                      n && (hi(t, !1), 0 === t.strm.avail_out))
                    )
                      return 1;
                  }
                  return (
                    (t.insert = 0),
                    4 === e
                      ? (hi(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                      : t.last_lit && (hi(t, !1), 0 === t.strm.avail_out)
                      ? 1
                      : 2
                  );
                })(r, e)
              : ni[r.level].func(r, e);
          if (((3 !== s && 4 !== s) || (r.status = 666), 1 === s || 3 === s))
            return 0 === t.avail_out && (r.last_flush = -1), 0;
          if (
            2 === s &&
            (1 === e
              ? $r._tr_align(r)
              : 5 !== e &&
                ($r._tr_stored_block(r, 0, 0, !1),
                3 === e &&
                  (si(r.head),
                  0 === r.lookahead &&
                    ((r.strstart = 0), (r.block_start = 0), (r.insert = 0)))),
            li(t),
            0 === t.avail_out)
          )
            return (r.last_flush = -1), 0;
        }
        return 4 !== e
          ? 0
          : r.wrap <= 0
          ? 1
          : (2 === r.wrap
              ? (ui(r, 255 & t.adler),
                ui(r, (t.adler >> 8) & 255),
                ui(r, (t.adler >> 16) & 255),
                ui(r, (t.adler >> 24) & 255),
                ui(r, 255 & t.total_in),
                ui(r, (t.total_in >> 8) & 255),
                ui(r, (t.total_in >> 16) & 255),
                ui(r, (t.total_in >> 24) & 255))
              : (ci(r, t.adler >>> 16), ci(r, 65535 & t.adler)),
            li(t),
            r.wrap > 0 && (r.wrap = -r.wrap),
            0 !== r.pending ? 0 : 1);
      },
      deflateEnd: function (t) {
        var e;
        return t && t.state
          ? 42 !== (e = t.state.status) &&
            69 !== e &&
            73 !== e &&
            91 !== e &&
            103 !== e &&
            113 !== e &&
            666 !== e
            ? oi(t, -2)
            : ((t.state = null), 113 === e ? oi(t, -3) : 0)
          : -2;
      },
      deflateSetDictionary: function (t, e) {
        var n,
          r,
          i,
          o,
          a,
          s,
          l,
          h,
          u = e.length;
        if (!t || !t.state) return -2;
        if (
          2 === (o = (n = t.state).wrap) ||
          (1 === o && 42 !== n.status) ||
          n.lookahead
        )
          return -2;
        for (
          1 === o && (t.adler = ti(t.adler, e, u, 0)),
            n.wrap = 0,
            u >= n.w_size &&
              (0 === o &&
                (si(n.head),
                (n.strstart = 0),
                (n.block_start = 0),
                (n.insert = 0)),
              (h = new wr.Buf8(n.w_size)),
              wr.arraySet(h, e, u - n.w_size, n.w_size, 0),
              (e = h),
              (u = n.w_size)),
            a = t.avail_in,
            s = t.next_in,
            l = t.input,
            t.avail_in = u,
            t.next_in = 0,
            t.input = e,
            pi(n);
          n.lookahead >= 3;

        ) {
          (r = n.strstart), (i = n.lookahead - 2);
          do {
            (n.ins_h =
              ((n.ins_h << n.hash_shift) ^ n.window[r + 3 - 1]) & n.hash_mask),
              (n.prev[r & n.w_mask] = n.head[n.ins_h]),
              (n.head[n.ins_h] = r),
              r++;
          } while (--i);
          (n.strstart = r), (n.lookahead = 2), pi(n);
        }
        return (
          (n.strstart += n.lookahead),
          (n.block_start = n.strstart),
          (n.insert = n.lookahead),
          (n.lookahead = 0),
          (n.match_length = n.prev_length = 2),
          (n.match_available = 0),
          (t.next_in = s),
          (t.input = l),
          (t.avail_in = a),
          (n.wrap = o),
          0
        );
      },
      deflateInfo: "pako deflate (from Nodeca project)",
    },
    Fi = !0,
    Si = !0;
  try {
    String.fromCharCode.apply(null, [0]);
  } catch (t) {
    Fi = !1;
  }
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch (t) {
    Si = !1;
  }
  for (var Ci = new wr.Buf8(256), Ai = 0; Ai < 256; Ai++)
    Ci[Ai] =
      Ai >= 252
        ? 6
        : Ai >= 248
        ? 5
        : Ai >= 240
        ? 4
        : Ai >= 224
        ? 3
        : Ai >= 192
        ? 2
        : 1;
  Ci[254] = Ci[254] = 1;
  function Ti(t, e) {
    if (e < 65534 && ((t.subarray && Si) || (!t.subarray && Fi)))
      return String.fromCharCode.apply(null, wr.shrinkBuf(t, e));
    for (var n = "", r = 0; r < e; r++) n += String.fromCharCode(t[r]);
    return n;
  }
  var Pi = function (t) {
      var e,
        n,
        r,
        i,
        o,
        a = t.length,
        s = 0;
      for (i = 0; i < a; i++)
        55296 == (64512 & (n = t.charCodeAt(i))) &&
          i + 1 < a &&
          56320 == (64512 & (r = t.charCodeAt(i + 1))) &&
          ((n = 65536 + ((n - 55296) << 10) + (r - 56320)), i++),
          (s += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4);
      for (e = new wr.Buf8(s), o = 0, i = 0; o < s; i++)
        55296 == (64512 & (n = t.charCodeAt(i))) &&
          i + 1 < a &&
          56320 == (64512 & (r = t.charCodeAt(i + 1))) &&
          ((n = 65536 + ((n - 55296) << 10) + (r - 56320)), i++),
          n < 128
            ? (e[o++] = n)
            : n < 2048
            ? ((e[o++] = 192 | (n >>> 6)), (e[o++] = 128 | (63 & n)))
            : n < 65536
            ? ((e[o++] = 224 | (n >>> 12)),
              (e[o++] = 128 | ((n >>> 6) & 63)),
              (e[o++] = 128 | (63 & n)))
            : ((e[o++] = 240 | (n >>> 18)),
              (e[o++] = 128 | ((n >>> 12) & 63)),
              (e[o++] = 128 | ((n >>> 6) & 63)),
              (e[o++] = 128 | (63 & n)));
      return e;
    },
    zi = function (t) {
      return Ti(t, t.length);
    },
    Ri = function (t) {
      for (var e = new wr.Buf8(t.length), n = 0, r = e.length; n < r; n++)
        e[n] = t.charCodeAt(n);
      return e;
    },
    Oi = function (t, e) {
      var n,
        r,
        i,
        o,
        a = e || t.length,
        s = new Array(2 * a);
      for (r = 0, n = 0; n < a; )
        if ((i = t[n++]) < 128) s[r++] = i;
        else if ((o = Ci[i]) > 4) (s[r++] = 65533), (n += o - 1);
        else {
          for (i &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && n < a; )
            (i = (i << 6) | (63 & t[n++])), o--;
          o > 1
            ? (s[r++] = 65533)
            : i < 65536
            ? (s[r++] = i)
            : ((i -= 65536),
              (s[r++] = 55296 | ((i >> 10) & 1023)),
              (s[r++] = 56320 | (1023 & i)));
        }
      return Ti(s, r);
    },
    Di = function (t, e) {
      var n;
      for (
        (e = e || t.length) > t.length && (e = t.length), n = e - 1;
        n >= 0 && 128 == (192 & t[n]);

      )
        n--;
      return n < 0 || 0 === n ? e : n + Ci[t[n]] > e ? n : e;
    };
  var Bi = function () {
      (this.input = null),
        (this.next_in = 0),
        (this.avail_in = 0),
        (this.total_in = 0),
        (this.output = null),
        (this.next_out = 0),
        (this.avail_out = 0),
        (this.total_out = 0),
        (this.msg = ""),
        (this.state = null),
        (this.data_type = 2),
        (this.adler = 0);
    },
    Ni = Object.prototype.toString;
  function Ei(t) {
    if (!(this instanceof Ei)) return new Ei(t);
    this.options = wr.assign(
      {
        level: -1,
        method: 8,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: 0,
        to: "",
      },
      t || {}
    );
    var e = this.options;
    e.raw && e.windowBits > 0
      ? (e.windowBits = -e.windowBits)
      : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16),
      (this.err = 0),
      (this.msg = ""),
      (this.ended = !1),
      (this.chunks = []),
      (this.strm = new Bi()),
      (this.strm.avail_out = 0);
    var n = ki.deflateInit2(
      this.strm,
      e.level,
      e.method,
      e.windowBits,
      e.memLevel,
      e.strategy
    );
    if (0 !== n) throw new Error(ii[n]);
    if ((e.header && ki.deflateSetHeader(this.strm, e.header), e.dictionary)) {
      var r;
      if (
        ((r =
          "string" == typeof e.dictionary
            ? Pi(e.dictionary)
            : "[object ArrayBuffer]" === Ni.call(e.dictionary)
            ? new Uint8Array(e.dictionary)
            : e.dictionary),
        0 !== (n = ki.deflateSetDictionary(this.strm, r)))
      )
        throw new Error(ii[n]);
      this._dict_set = !0;
    }
  }
  function ji(t, e) {
    var n = new Ei(e);
    if ((n.push(t, !0), n.err)) throw n.msg || ii[n.err];
    return n.result;
  }
  (Ei.prototype.push = function (t, e) {
    var n,
      r,
      i = this.strm,
      o = this.options.chunkSize;
    if (this.ended) return !1;
    (r = e === ~~e ? e : !0 === e ? 4 : 0),
      "string" == typeof t
        ? (i.input = Pi(t))
        : "[object ArrayBuffer]" === Ni.call(t)
        ? (i.input = new Uint8Array(t))
        : (i.input = t),
      (i.next_in = 0),
      (i.avail_in = i.input.length);
    do {
      if (
        (0 === i.avail_out &&
          ((i.output = new wr.Buf8(o)), (i.next_out = 0), (i.avail_out = o)),
        1 !== (n = ki.deflate(i, r)) && 0 !== n)
      )
        return this.onEnd(n), (this.ended = !0), !1;
      (0 !== i.avail_out && (0 !== i.avail_in || (4 !== r && 2 !== r))) ||
        ("string" === this.options.to
          ? this.onData(zi(wr.shrinkBuf(i.output, i.next_out)))
          : this.onData(wr.shrinkBuf(i.output, i.next_out)));
    } while ((i.avail_in > 0 || 0 === i.avail_out) && 1 !== n);
    return 4 === r
      ? ((n = ki.deflateEnd(this.strm)),
        this.onEnd(n),
        (this.ended = !0),
        0 === n)
      : 2 !== r || (this.onEnd(0), (i.avail_out = 0), !0);
  }),
    (Ei.prototype.onData = function (t) {
      this.chunks.push(t);
    }),
    (Ei.prototype.onEnd = function (t) {
      0 === t &&
        ("string" === this.options.to
          ? (this.result = this.chunks.join(""))
          : (this.result = wr.flattenChunks(this.chunks))),
        (this.chunks = []),
        (this.err = t),
        (this.msg = this.strm.msg);
    });
  var Mi = {
      Deflate: Ei,
      deflate: ji,
      deflateRaw: function (t, e) {
        return ((e = e || {}).raw = !0), ji(t, e);
      },
      gzip: function (t, e) {
        return ((e = e || {}).gzip = !0), ji(t, e);
      },
    },
    Ii = function (t, e) {
      var n,
        r,
        i,
        o,
        a,
        s,
        l,
        h,
        u,
        c,
        d,
        f,
        p,
        g,
        v,
        y,
        m,
        b,
        w,
        x,
        k,
        F,
        S,
        C,
        A;
      (n = t.state),
        (r = t.next_in),
        (C = t.input),
        (i = r + (t.avail_in - 5)),
        (o = t.next_out),
        (A = t.output),
        (a = o - (e - t.avail_out)),
        (s = o + (t.avail_out - 257)),
        (l = n.dmax),
        (h = n.wsize),
        (u = n.whave),
        (c = n.wnext),
        (d = n.window),
        (f = n.hold),
        (p = n.bits),
        (g = n.lencode),
        (v = n.distcode),
        (y = (1 << n.lenbits) - 1),
        (m = (1 << n.distbits) - 1);
      t: do {
        p < 15 && ((f += C[r++] << p), (p += 8), (f += C[r++] << p), (p += 8)),
          (b = g[f & y]);
        e: for (;;) {
          if (((f >>>= w = b >>> 24), (p -= w), 0 === (w = (b >>> 16) & 255)))
            A[o++] = 65535 & b;
          else {
            if (!(16 & w)) {
              if (0 == (64 & w)) {
                b = g[(65535 & b) + (f & ((1 << w) - 1))];
                continue e;
              }
              if (32 & w) {
                n.mode = 12;
                break t;
              }
              (t.msg = "invalid literal/length code"), (n.mode = 30);
              break t;
            }
            (x = 65535 & b),
              (w &= 15) &&
                (p < w && ((f += C[r++] << p), (p += 8)),
                (x += f & ((1 << w) - 1)),
                (f >>>= w),
                (p -= w)),
              p < 15 &&
                ((f += C[r++] << p), (p += 8), (f += C[r++] << p), (p += 8)),
              (b = v[f & m]);
            n: for (;;) {
              if (
                ((f >>>= w = b >>> 24),
                (p -= w),
                !(16 & (w = (b >>> 16) & 255)))
              ) {
                if (0 == (64 & w)) {
                  b = v[(65535 & b) + (f & ((1 << w) - 1))];
                  continue n;
                }
                (t.msg = "invalid distance code"), (n.mode = 30);
                break t;
              }
              if (
                ((k = 65535 & b),
                p < (w &= 15) &&
                  ((f += C[r++] << p),
                  (p += 8) < w && ((f += C[r++] << p), (p += 8))),
                (k += f & ((1 << w) - 1)) > l)
              ) {
                (t.msg = "invalid distance too far back"), (n.mode = 30);
                break t;
              }
              if (((f >>>= w), (p -= w), k > (w = o - a))) {
                if ((w = k - w) > u && n.sane) {
                  (t.msg = "invalid distance too far back"), (n.mode = 30);
                  break t;
                }
                if (((F = 0), (S = d), 0 === c)) {
                  if (((F += h - w), w < x)) {
                    x -= w;
                    do {
                      A[o++] = d[F++];
                    } while (--w);
                    (F = o - k), (S = A);
                  }
                } else if (c < w) {
                  if (((F += h + c - w), (w -= c) < x)) {
                    x -= w;
                    do {
                      A[o++] = d[F++];
                    } while (--w);
                    if (((F = 0), c < x)) {
                      x -= w = c;
                      do {
                        A[o++] = d[F++];
                      } while (--w);
                      (F = o - k), (S = A);
                    }
                  }
                } else if (((F += c - w), w < x)) {
                  x -= w;
                  do {
                    A[o++] = d[F++];
                  } while (--w);
                  (F = o - k), (S = A);
                }
                for (; x > 2; )
                  (A[o++] = S[F++]),
                    (A[o++] = S[F++]),
                    (A[o++] = S[F++]),
                    (x -= 3);
                x && ((A[o++] = S[F++]), x > 1 && (A[o++] = S[F++]));
              } else {
                F = o - k;
                do {
                  (A[o++] = A[F++]),
                    (A[o++] = A[F++]),
                    (A[o++] = A[F++]),
                    (x -= 3);
                } while (x > 2);
                x && ((A[o++] = A[F++]), x > 1 && (A[o++] = A[F++]));
              }
              break;
            }
          }
          break;
        }
      } while (r < i && o < s);
      (r -= x = p >> 3),
        (f &= (1 << (p -= x << 3)) - 1),
        (t.next_in = r),
        (t.next_out = o),
        (t.avail_in = r < i ? i - r + 5 : 5 - (r - i)),
        (t.avail_out = o < s ? s - o + 257 : 257 - (o - s)),
        (n.hold = f),
        (n.bits = p);
    },
    Ui = [
      3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
      67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
    ],
    Vi = [
      16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19,
      19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
    ],
    Wi = [
      1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513,
      769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0,
    ],
    qi = [
      16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23,
      24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
    ],
    Li = function (t, e, n, r, i, o, a, s) {
      var l,
        h,
        u,
        c,
        d,
        f,
        p,
        g,
        v,
        y = s.bits,
        m = 0,
        b = 0,
        w = 0,
        x = 0,
        k = 0,
        F = 0,
        S = 0,
        C = 0,
        A = 0,
        T = 0,
        P = null,
        z = 0,
        R = new wr.Buf16(16),
        O = new wr.Buf16(16),
        D = null,
        B = 0;
      for (m = 0; m <= 15; m++) R[m] = 0;
      for (b = 0; b < r; b++) R[e[n + b]]++;
      for (k = y, x = 15; x >= 1 && 0 === R[x]; x--);
      if ((k > x && (k = x), 0 === x))
        return (i[o++] = 20971520), (i[o++] = 20971520), (s.bits = 1), 0;
      for (w = 1; w < x && 0 === R[w]; w++);
      for (k < w && (k = w), C = 1, m = 1; m <= 15; m++)
        if (((C <<= 1), (C -= R[m]) < 0)) return -1;
      if (C > 0 && (0 === t || 1 !== x)) return -1;
      for (O[1] = 0, m = 1; m < 15; m++) O[m + 1] = O[m] + R[m];
      for (b = 0; b < r; b++) 0 !== e[n + b] && (a[O[e[n + b]]++] = b);
      if (
        (0 === t
          ? ((P = D = a), (f = 19))
          : 1 === t
          ? ((P = Ui), (z -= 257), (D = Vi), (B -= 257), (f = 256))
          : ((P = Wi), (D = qi), (f = -1)),
        (T = 0),
        (b = 0),
        (m = w),
        (d = o),
        (F = k),
        (S = 0),
        (u = -1),
        (c = (A = 1 << k) - 1),
        (1 === t && A > 852) || (2 === t && A > 592))
      )
        return 1;
      for (;;) {
        (p = m - S),
          a[b] < f
            ? ((g = 0), (v = a[b]))
            : a[b] > f
            ? ((g = D[B + a[b]]), (v = P[z + a[b]]))
            : ((g = 96), (v = 0)),
          (l = 1 << (m - S)),
          (w = h = 1 << F);
        do {
          i[d + (T >> S) + (h -= l)] = (p << 24) | (g << 16) | v | 0;
        } while (0 !== h);
        for (l = 1 << (m - 1); T & l; ) l >>= 1;
        if ((0 !== l ? ((T &= l - 1), (T += l)) : (T = 0), b++, 0 == --R[m])) {
          if (m === x) break;
          m = e[n + a[b]];
        }
        if (m > k && (T & c) !== u) {
          for (
            0 === S && (S = k), d += w, C = 1 << (F = m - S);
            F + S < x && !((C -= R[F + S]) <= 0);

          )
            F++, (C <<= 1);
          if (((A += 1 << F), (1 === t && A > 852) || (2 === t && A > 592)))
            return 1;
          i[(u = T & c)] = (k << 24) | (F << 16) | (d - o) | 0;
        }
      }
      return (
        0 !== T && (i[d + T] = ((m - S) << 24) | (64 << 16) | 0),
        (s.bits = k),
        0
      );
    };
  function Ki(t) {
    return (
      ((t >>> 24) & 255) +
      ((t >>> 8) & 65280) +
      ((65280 & t) << 8) +
      ((255 & t) << 24)
    );
  }
  function Gi() {
    (this.mode = 0),
      (this.last = !1),
      (this.wrap = 0),
      (this.havedict = !1),
      (this.flags = 0),
      (this.dmax = 0),
      (this.check = 0),
      (this.total = 0),
      (this.head = null),
      (this.wbits = 0),
      (this.wsize = 0),
      (this.whave = 0),
      (this.wnext = 0),
      (this.window = null),
      (this.hold = 0),
      (this.bits = 0),
      (this.length = 0),
      (this.offset = 0),
      (this.extra = 0),
      (this.lencode = null),
      (this.distcode = null),
      (this.lenbits = 0),
      (this.distbits = 0),
      (this.ncode = 0),
      (this.nlen = 0),
      (this.ndist = 0),
      (this.have = 0),
      (this.next = null),
      (this.lens = new wr.Buf16(320)),
      (this.work = new wr.Buf16(288)),
      (this.lendyn = null),
      (this.distdyn = null),
      (this.sane = 0),
      (this.back = 0),
      (this.was = 0);
  }
  function Hi(t) {
    var e;
    return t && t.state
      ? ((e = t.state),
        (t.total_in = t.total_out = e.total = 0),
        (t.msg = ""),
        e.wrap && (t.adler = 1 & e.wrap),
        (e.mode = 1),
        (e.last = 0),
        (e.havedict = 0),
        (e.dmax = 32768),
        (e.head = null),
        (e.hold = 0),
        (e.bits = 0),
        (e.lencode = e.lendyn = new wr.Buf32(852)),
        (e.distcode = e.distdyn = new wr.Buf32(592)),
        (e.sane = 1),
        (e.back = -1),
        0)
      : -2;
  }
  function _i(t) {
    var e;
    return t && t.state
      ? (((e = t.state).wsize = 0), (e.whave = 0), (e.wnext = 0), Hi(t))
      : -2;
  }
  function Xi(t, e) {
    var n, r;
    return t && t.state
      ? ((r = t.state),
        e < 0 ? ((n = 0), (e = -e)) : ((n = 1 + (e >> 4)), e < 48 && (e &= 15)),
        e && (e < 8 || e > 15)
          ? -2
          : (null !== r.window && r.wbits !== e && (r.window = null),
            (r.wrap = n),
            (r.wbits = e),
            _i(t)))
      : -2;
  }
  function Zi(t, e) {
    var n, r;
    return t
      ? ((r = new Gi()),
        (t.state = r),
        (r.window = null),
        0 !== (n = Xi(t, e)) && (t.state = null),
        n)
      : -2;
  }
  var Yi,
    Ji,
    Qi = !0;
  function $i(t) {
    if (Qi) {
      var e;
      for (Yi = new wr.Buf32(512), Ji = new wr.Buf32(32), e = 0; e < 144; )
        t.lens[e++] = 8;
      for (; e < 256; ) t.lens[e++] = 9;
      for (; e < 280; ) t.lens[e++] = 7;
      for (; e < 288; ) t.lens[e++] = 8;
      for (Li(1, t.lens, 0, 288, Yi, 0, t.work, { bits: 9 }), e = 0; e < 32; )
        t.lens[e++] = 5;
      Li(2, t.lens, 0, 32, Ji, 0, t.work, { bits: 5 }), (Qi = !1);
    }
    (t.lencode = Yi), (t.lenbits = 9), (t.distcode = Ji), (t.distbits = 5);
  }
  function to(t, e, n, r) {
    var i,
      o = t.state;
    return (
      null === o.window &&
        ((o.wsize = 1 << o.wbits),
        (o.wnext = 0),
        (o.whave = 0),
        (o.window = new wr.Buf8(o.wsize))),
      r >= o.wsize
        ? (wr.arraySet(o.window, e, n - o.wsize, o.wsize, 0),
          (o.wnext = 0),
          (o.whave = o.wsize))
        : ((i = o.wsize - o.wnext) > r && (i = r),
          wr.arraySet(o.window, e, n - r, i, o.wnext),
          (r -= i)
            ? (wr.arraySet(o.window, e, n - r, r, 0),
              (o.wnext = r),
              (o.whave = o.wsize))
            : ((o.wnext += i),
              o.wnext === o.wsize && (o.wnext = 0),
              o.whave < o.wsize && (o.whave += i))),
      0
    );
  }
  var eo = {
      inflateReset: _i,
      inflateReset2: Xi,
      inflateResetKeep: Hi,
      inflateInit: function (t) {
        return Zi(t, 15);
      },
      inflateInit2: Zi,
      inflate: function (t, e) {
        var n,
          r,
          i,
          o,
          a,
          s,
          l,
          h,
          u,
          c,
          d,
          f,
          p,
          g,
          v,
          y,
          m,
          b,
          w,
          x,
          k,
          F,
          S,
          C,
          A = 0,
          T = new wr.Buf8(4),
          P = [
            16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
          ];
        if (!t || !t.state || !t.output || (!t.input && 0 !== t.avail_in))
          return -2;
        12 === (n = t.state).mode && (n.mode = 13),
          (a = t.next_out),
          (i = t.output),
          (l = t.avail_out),
          (o = t.next_in),
          (r = t.input),
          (s = t.avail_in),
          (h = n.hold),
          (u = n.bits),
          (c = s),
          (d = l),
          (F = 0);
        t: for (;;)
          switch (n.mode) {
            case 1:
              if (0 === n.wrap) {
                n.mode = 13;
                break;
              }
              for (; u < 16; ) {
                if (0 === s) break t;
                s--, (h += r[o++] << u), (u += 8);
              }
              if (2 & n.wrap && 35615 === h) {
                (n.check = 0),
                  (T[0] = 255 & h),
                  (T[1] = (h >>> 8) & 255),
                  (n.check = ri(n.check, T, 2, 0)),
                  (h = 0),
                  (u = 0),
                  (n.mode = 2);
                break;
              }
              if (
                ((n.flags = 0),
                n.head && (n.head.done = !1),
                !(1 & n.wrap) || (((255 & h) << 8) + (h >> 8)) % 31)
              ) {
                (t.msg = "incorrect header check"), (n.mode = 30);
                break;
              }
              if (8 != (15 & h)) {
                (t.msg = "unknown compression method"), (n.mode = 30);
                break;
              }
              if (((u -= 4), (k = 8 + (15 & (h >>>= 4))), 0 === n.wbits))
                n.wbits = k;
              else if (k > n.wbits) {
                (t.msg = "invalid window size"), (n.mode = 30);
                break;
              }
              (n.dmax = 1 << k),
                (t.adler = n.check = 1),
                (n.mode = 512 & h ? 10 : 12),
                (h = 0),
                (u = 0);
              break;
            case 2:
              for (; u < 16; ) {
                if (0 === s) break t;
                s--, (h += r[o++] << u), (u += 8);
              }
              if (((n.flags = h), 8 != (255 & n.flags))) {
                (t.msg = "unknown compression method"), (n.mode = 30);
                break;
              }
              if (57344 & n.flags) {
                (t.msg = "unknown header flags set"), (n.mode = 30);
                break;
              }
              n.head && (n.head.text = (h >> 8) & 1),
                512 & n.flags &&
                  ((T[0] = 255 & h),
                  (T[1] = (h >>> 8) & 255),
                  (n.check = ri(n.check, T, 2, 0))),
                (h = 0),
                (u = 0),
                (n.mode = 3);
            case 3:
              for (; u < 32; ) {
                if (0 === s) break t;
                s--, (h += r[o++] << u), (u += 8);
              }
              n.head && (n.head.time = h),
                512 & n.flags &&
                  ((T[0] = 255 & h),
                  (T[1] = (h >>> 8) & 255),
                  (T[2] = (h >>> 16) & 255),
                  (T[3] = (h >>> 24) & 255),
                  (n.check = ri(n.check, T, 4, 0))),
                (h = 0),
                (u = 0),
                (n.mode = 4);
            case 4:
              for (; u < 16; ) {
                if (0 === s) break t;
                s--, (h += r[o++] << u), (u += 8);
              }
              n.head && ((n.head.xflags = 255 & h), (n.head.os = h >> 8)),
                512 & n.flags &&
                  ((T[0] = 255 & h),
                  (T[1] = (h >>> 8) & 255),
                  (n.check = ri(n.check, T, 2, 0))),
                (h = 0),
                (u = 0),
                (n.mode = 5);
            case 5:
              if (1024 & n.flags) {
                for (; u < 16; ) {
                  if (0 === s) break t;
                  s--, (h += r[o++] << u), (u += 8);
                }
                (n.length = h),
                  n.head && (n.head.extra_len = h),
                  512 & n.flags &&
                    ((T[0] = 255 & h),
                    (T[1] = (h >>> 8) & 255),
                    (n.check = ri(n.check, T, 2, 0))),
                  (h = 0),
                  (u = 0);
              } else n.head && (n.head.extra = null);
              n.mode = 6;
            case 6:
              if (
                1024 & n.flags &&
                ((f = n.length) > s && (f = s),
                f &&
                  (n.head &&
                    ((k = n.head.extra_len - n.length),
                    n.head.extra ||
                      (n.head.extra = new Array(n.head.extra_len)),
                    wr.arraySet(n.head.extra, r, o, f, k)),
                  512 & n.flags && (n.check = ri(n.check, r, f, o)),
                  (s -= f),
                  (o += f),
                  (n.length -= f)),
                n.length)
              )
                break t;
              (n.length = 0), (n.mode = 7);
            case 7:
              if (2048 & n.flags) {
                if (0 === s) break t;
                f = 0;
                do {
                  (k = r[o + f++]),
                    n.head &&
                      k &&
                      n.length < 65536 &&
                      (n.head.name += String.fromCharCode(k));
                } while (k && f < s);
                if (
                  (512 & n.flags && (n.check = ri(n.check, r, f, o)),
                  (s -= f),
                  (o += f),
                  k)
                )
                  break t;
              } else n.head && (n.head.name = null);
              (n.length = 0), (n.mode = 8);
            case 8:
              if (4096 & n.flags) {
                if (0 === s) break t;
                f = 0;
                do {
                  (k = r[o + f++]),
                    n.head &&
                      k &&
                      n.length < 65536 &&
                      (n.head.comment += String.fromCharCode(k));
                } while (k && f < s);
                if (
                  (512 & n.flags && (n.check = ri(n.check, r, f, o)),
                  (s -= f),
                  (o += f),
                  k)
                )
                  break t;
              } else n.head && (n.head.comment = null);
              n.mode = 9;
            case 9:
              if (512 & n.flags) {
                for (; u < 16; ) {
                  if (0 === s) break t;
                  s--, (h += r[o++] << u), (u += 8);
                }
                if (h !== (65535 & n.check)) {
                  (t.msg = "header crc mismatch"), (n.mode = 30);
                  break;
                }
                (h = 0), (u = 0);
              }
              n.head &&
                ((n.head.hcrc = (n.flags >> 9) & 1), (n.head.done = !0)),
                (t.adler = n.check = 0),
                (n.mode = 12);
              break;
            case 10:
              for (; u < 32; ) {
                if (0 === s) break t;
                s--, (h += r[o++] << u), (u += 8);
              }
              (t.adler = n.check = Ki(h)), (h = 0), (u = 0), (n.mode = 11);
            case 11:
              if (0 === n.havedict)
                return (
                  (t.next_out = a),
                  (t.avail_out = l),
                  (t.next_in = o),
                  (t.avail_in = s),
                  (n.hold = h),
                  (n.bits = u),
                  2
                );
              (t.adler = n.check = 1), (n.mode = 12);
            case 12:
              if (5 === e || 6 === e) break t;
            case 13:
              if (n.last) {
                (h >>>= 7 & u), (u -= 7 & u), (n.mode = 27);
                break;
              }
              for (; u < 3; ) {
                if (0 === s) break t;
                s--, (h += r[o++] << u), (u += 8);
              }
              switch (((n.last = 1 & h), (u -= 1), 3 & (h >>>= 1))) {
                case 0:
                  n.mode = 14;
                  break;
                case 1:
                  if (($i(n), (n.mode = 20), 6 === e)) {
                    (h >>>= 2), (u -= 2);
                    break t;
                  }
                  break;
                case 2:
                  n.mode = 17;
                  break;
                case 3:
                  (t.msg = "invalid block type"), (n.mode = 30);
              }
              (h >>>= 2), (u -= 2);
              break;
            case 14:
              for (h >>>= 7 & u, u -= 7 & u; u < 32; ) {
                if (0 === s) break t;
                s--, (h += r[o++] << u), (u += 8);
              }
              if ((65535 & h) != ((h >>> 16) ^ 65535)) {
                (t.msg = "invalid stored block lengths"), (n.mode = 30);
                break;
              }
              if (
                ((n.length = 65535 & h),
                (h = 0),
                (u = 0),
                (n.mode = 15),
                6 === e)
              )
                break t;
            case 15:
              n.mode = 16;
            case 16:
              if ((f = n.length)) {
                if ((f > s && (f = s), f > l && (f = l), 0 === f)) break t;
                wr.arraySet(i, r, o, f, a),
                  (s -= f),
                  (o += f),
                  (l -= f),
                  (a += f),
                  (n.length -= f);
                break;
              }
              n.mode = 12;
              break;
            case 17:
              for (; u < 14; ) {
                if (0 === s) break t;
                s--, (h += r[o++] << u), (u += 8);
              }
              if (
                ((n.nlen = 257 + (31 & h)),
                (h >>>= 5),
                (u -= 5),
                (n.ndist = 1 + (31 & h)),
                (h >>>= 5),
                (u -= 5),
                (n.ncode = 4 + (15 & h)),
                (h >>>= 4),
                (u -= 4),
                n.nlen > 286 || n.ndist > 30)
              ) {
                (t.msg = "too many length or distance symbols"), (n.mode = 30);
                break;
              }
              (n.have = 0), (n.mode = 18);
            case 18:
              for (; n.have < n.ncode; ) {
                for (; u < 3; ) {
                  if (0 === s) break t;
                  s--, (h += r[o++] << u), (u += 8);
                }
                (n.lens[P[n.have++]] = 7 & h), (h >>>= 3), (u -= 3);
              }
              for (; n.have < 19; ) n.lens[P[n.have++]] = 0;
              if (
                ((n.lencode = n.lendyn),
                (n.lenbits = 7),
                (S = { bits: n.lenbits }),
                (F = Li(0, n.lens, 0, 19, n.lencode, 0, n.work, S)),
                (n.lenbits = S.bits),
                F)
              ) {
                (t.msg = "invalid code lengths set"), (n.mode = 30);
                break;
              }
              (n.have = 0), (n.mode = 19);
            case 19:
              for (; n.have < n.nlen + n.ndist; ) {
                for (
                  ;
                  (y =
                    ((A = n.lencode[h & ((1 << n.lenbits) - 1)]) >>> 16) & 255),
                    (m = 65535 & A),
                    !((v = A >>> 24) <= u);

                ) {
                  if (0 === s) break t;
                  s--, (h += r[o++] << u), (u += 8);
                }
                if (m < 16) (h >>>= v), (u -= v), (n.lens[n.have++] = m);
                else {
                  if (16 === m) {
                    for (C = v + 2; u < C; ) {
                      if (0 === s) break t;
                      s--, (h += r[o++] << u), (u += 8);
                    }
                    if (((h >>>= v), (u -= v), 0 === n.have)) {
                      (t.msg = "invalid bit length repeat"), (n.mode = 30);
                      break;
                    }
                    (k = n.lens[n.have - 1]),
                      (f = 3 + (3 & h)),
                      (h >>>= 2),
                      (u -= 2);
                  } else if (17 === m) {
                    for (C = v + 3; u < C; ) {
                      if (0 === s) break t;
                      s--, (h += r[o++] << u), (u += 8);
                    }
                    (u -= v),
                      (k = 0),
                      (f = 3 + (7 & (h >>>= v))),
                      (h >>>= 3),
                      (u -= 3);
                  } else {
                    for (C = v + 7; u < C; ) {
                      if (0 === s) break t;
                      s--, (h += r[o++] << u), (u += 8);
                    }
                    (u -= v),
                      (k = 0),
                      (f = 11 + (127 & (h >>>= v))),
                      (h >>>= 7),
                      (u -= 7);
                  }
                  if (n.have + f > n.nlen + n.ndist) {
                    (t.msg = "invalid bit length repeat"), (n.mode = 30);
                    break;
                  }
                  for (; f--; ) n.lens[n.have++] = k;
                }
              }
              if (30 === n.mode) break;
              if (0 === n.lens[256]) {
                (t.msg = "invalid code -- missing end-of-block"), (n.mode = 30);
                break;
              }
              if (
                ((n.lenbits = 9),
                (S = { bits: n.lenbits }),
                (F = Li(1, n.lens, 0, n.nlen, n.lencode, 0, n.work, S)),
                (n.lenbits = S.bits),
                F)
              ) {
                (t.msg = "invalid literal/lengths set"), (n.mode = 30);
                break;
              }
              if (
                ((n.distbits = 6),
                (n.distcode = n.distdyn),
                (S = { bits: n.distbits }),
                (F = Li(2, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, S)),
                (n.distbits = S.bits),
                F)
              ) {
                (t.msg = "invalid distances set"), (n.mode = 30);
                break;
              }
              if (((n.mode = 20), 6 === e)) break t;
            case 20:
              n.mode = 21;
            case 21:
              if (s >= 6 && l >= 258) {
                (t.next_out = a),
                  (t.avail_out = l),
                  (t.next_in = o),
                  (t.avail_in = s),
                  (n.hold = h),
                  (n.bits = u),
                  Ii(t, d),
                  (a = t.next_out),
                  (i = t.output),
                  (l = t.avail_out),
                  (o = t.next_in),
                  (r = t.input),
                  (s = t.avail_in),
                  (h = n.hold),
                  (u = n.bits),
                  12 === n.mode && (n.back = -1);
                break;
              }
              for (
                n.back = 0;
                (y =
                  ((A = n.lencode[h & ((1 << n.lenbits) - 1)]) >>> 16) & 255),
                  (m = 65535 & A),
                  !((v = A >>> 24) <= u);

              ) {
                if (0 === s) break t;
                s--, (h += r[o++] << u), (u += 8);
              }
              if (y && 0 == (240 & y)) {
                for (
                  b = v, w = y, x = m;
                  (y =
                    ((A = n.lencode[x + ((h & ((1 << (b + w)) - 1)) >> b)]) >>>
                      16) &
                    255),
                    (m = 65535 & A),
                    !(b + (v = A >>> 24) <= u);

                ) {
                  if (0 === s) break t;
                  s--, (h += r[o++] << u), (u += 8);
                }
                (h >>>= b), (u -= b), (n.back += b);
              }
              if (
                ((h >>>= v), (u -= v), (n.back += v), (n.length = m), 0 === y)
              ) {
                n.mode = 26;
                break;
              }
              if (32 & y) {
                (n.back = -1), (n.mode = 12);
                break;
              }
              if (64 & y) {
                (t.msg = "invalid literal/length code"), (n.mode = 30);
                break;
              }
              (n.extra = 15 & y), (n.mode = 22);
            case 22:
              if (n.extra) {
                for (C = n.extra; u < C; ) {
                  if (0 === s) break t;
                  s--, (h += r[o++] << u), (u += 8);
                }
                (n.length += h & ((1 << n.extra) - 1)),
                  (h >>>= n.extra),
                  (u -= n.extra),
                  (n.back += n.extra);
              }
              (n.was = n.length), (n.mode = 23);
            case 23:
              for (
                ;
                (y =
                  ((A = n.distcode[h & ((1 << n.distbits) - 1)]) >>> 16) & 255),
                  (m = 65535 & A),
                  !((v = A >>> 24) <= u);

              ) {
                if (0 === s) break t;
                s--, (h += r[o++] << u), (u += 8);
              }
              if (0 == (240 & y)) {
                for (
                  b = v, w = y, x = m;
                  (y =
                    ((A = n.distcode[x + ((h & ((1 << (b + w)) - 1)) >> b)]) >>>
                      16) &
                    255),
                    (m = 65535 & A),
                    !(b + (v = A >>> 24) <= u);

                ) {
                  if (0 === s) break t;
                  s--, (h += r[o++] << u), (u += 8);
                }
                (h >>>= b), (u -= b), (n.back += b);
              }
              if (((h >>>= v), (u -= v), (n.back += v), 64 & y)) {
                (t.msg = "invalid distance code"), (n.mode = 30);
                break;
              }
              (n.offset = m), (n.extra = 15 & y), (n.mode = 24);
            case 24:
              if (n.extra) {
                for (C = n.extra; u < C; ) {
                  if (0 === s) break t;
                  s--, (h += r[o++] << u), (u += 8);
                }
                (n.offset += h & ((1 << n.extra) - 1)),
                  (h >>>= n.extra),
                  (u -= n.extra),
                  (n.back += n.extra);
              }
              if (n.offset > n.dmax) {
                (t.msg = "invalid distance too far back"), (n.mode = 30);
                break;
              }
              n.mode = 25;
            case 25:
              if (0 === l) break t;
              if (((f = d - l), n.offset > f)) {
                if ((f = n.offset - f) > n.whave && n.sane) {
                  (t.msg = "invalid distance too far back"), (n.mode = 30);
                  break;
                }
                f > n.wnext
                  ? ((f -= n.wnext), (p = n.wsize - f))
                  : (p = n.wnext - f),
                  f > n.length && (f = n.length),
                  (g = n.window);
              } else (g = i), (p = a - n.offset), (f = n.length);
              f > l && (f = l), (l -= f), (n.length -= f);
              do {
                i[a++] = g[p++];
              } while (--f);
              0 === n.length && (n.mode = 21);
              break;
            case 26:
              if (0 === l) break t;
              (i[a++] = n.length), l--, (n.mode = 21);
              break;
            case 27:
              if (n.wrap) {
                for (; u < 32; ) {
                  if (0 === s) break t;
                  s--, (h |= r[o++] << u), (u += 8);
                }
                if (
                  ((d -= l),
                  (t.total_out += d),
                  (n.total += d),
                  d &&
                    (t.adler = n.check =
                      n.flags
                        ? ri(n.check, i, d, a - d)
                        : ti(n.check, i, d, a - d)),
                  (d = l),
                  (n.flags ? h : Ki(h)) !== n.check)
                ) {
                  (t.msg = "incorrect data check"), (n.mode = 30);
                  break;
                }
                (h = 0), (u = 0);
              }
              n.mode = 28;
            case 28:
              if (n.wrap && n.flags) {
                for (; u < 32; ) {
                  if (0 === s) break t;
                  s--, (h += r[o++] << u), (u += 8);
                }
                if (h !== (4294967295 & n.total)) {
                  (t.msg = "incorrect length check"), (n.mode = 30);
                  break;
                }
                (h = 0), (u = 0);
              }
              n.mode = 29;
            case 29:
              F = 1;
              break t;
            case 30:
              F = -3;
              break t;
            case 31:
              return -4;
            case 32:
            default:
              return -2;
          }
        return (
          (t.next_out = a),
          (t.avail_out = l),
          (t.next_in = o),
          (t.avail_in = s),
          (n.hold = h),
          (n.bits = u),
          (n.wsize ||
            (d !== t.avail_out && n.mode < 30 && (n.mode < 27 || 4 !== e))) &&
            to(t, t.output, t.next_out, d - t.avail_out),
          (c -= t.avail_in),
          (d -= t.avail_out),
          (t.total_in += c),
          (t.total_out += d),
          (n.total += d),
          n.wrap &&
            d &&
            (t.adler = n.check =
              n.flags
                ? ri(n.check, i, d, t.next_out - d)
                : ti(n.check, i, d, t.next_out - d)),
          (t.data_type =
            n.bits +
            (n.last ? 64 : 0) +
            (12 === n.mode ? 128 : 0) +
            (20 === n.mode || 15 === n.mode ? 256 : 0)),
          ((0 === c && 0 === d) || 4 === e) && 0 === F && (F = -5),
          F
        );
      },
      inflateEnd: function (t) {
        if (!t || !t.state) return -2;
        var e = t.state;
        return e.window && (e.window = null), (t.state = null), 0;
      },
      inflateGetHeader: function (t, e) {
        var n;
        return t && t.state
          ? 0 == (2 & (n = t.state).wrap)
            ? -2
            : ((n.head = e), (e.done = !1), 0)
          : -2;
      },
      inflateSetDictionary: function (t, e) {
        var n,
          r = e.length;
        return t && t.state
          ? 0 !== (n = t.state).wrap && 11 !== n.mode
            ? -2
            : 11 === n.mode && ti(1, e, r, 0) !== n.check
            ? -3
            : to(t, e, r, r)
            ? ((n.mode = 31), -4)
            : ((n.havedict = 1), 0)
          : -2;
      },
      inflateInfo: "pako inflate (from Nodeca project)",
    },
    no = {
      Z_NO_FLUSH: 0,
      Z_PARTIAL_FLUSH: 1,
      Z_SYNC_FLUSH: 2,
      Z_FULL_FLUSH: 3,
      Z_FINISH: 4,
      Z_BLOCK: 5,
      Z_TREES: 6,
      Z_OK: 0,
      Z_STREAM_END: 1,
      Z_NEED_DICT: 2,
      Z_ERRNO: -1,
      Z_STREAM_ERROR: -2,
      Z_DATA_ERROR: -3,
      Z_BUF_ERROR: -5,
      Z_NO_COMPRESSION: 0,
      Z_BEST_SPEED: 1,
      Z_BEST_COMPRESSION: 9,
      Z_DEFAULT_COMPRESSION: -1,
      Z_FILTERED: 1,
      Z_HUFFMAN_ONLY: 2,
      Z_RLE: 3,
      Z_FIXED: 4,
      Z_DEFAULT_STRATEGY: 0,
      Z_BINARY: 0,
      Z_TEXT: 1,
      Z_UNKNOWN: 2,
      Z_DEFLATED: 8,
    };
  var ro = function () {
      (this.text = 0),
        (this.time = 0),
        (this.xflags = 0),
        (this.os = 0),
        (this.extra = null),
        (this.extra_len = 0),
        (this.name = ""),
        (this.comment = ""),
        (this.hcrc = 0),
        (this.done = !1);
    },
    io = Object.prototype.toString;
  function oo(t) {
    if (!(this instanceof oo)) return new oo(t);
    this.options = wr.assign(
      { chunkSize: 16384, windowBits: 0, to: "" },
      t || {}
    );
    var e = this.options;
    e.raw &&
      e.windowBits >= 0 &&
      e.windowBits < 16 &&
      ((e.windowBits = -e.windowBits),
      0 === e.windowBits && (e.windowBits = -15)),
      !(e.windowBits >= 0 && e.windowBits < 16) ||
        (t && t.windowBits) ||
        (e.windowBits += 32),
      e.windowBits > 15 &&
        e.windowBits < 48 &&
        0 == (15 & e.windowBits) &&
        (e.windowBits |= 15),
      (this.err = 0),
      (this.msg = ""),
      (this.ended = !1),
      (this.chunks = []),
      (this.strm = new Bi()),
      (this.strm.avail_out = 0);
    var n = eo.inflateInit2(this.strm, e.windowBits);
    if (n !== no.Z_OK) throw new Error(ii[n]);
    if (
      ((this.header = new ro()),
      eo.inflateGetHeader(this.strm, this.header),
      e.dictionary &&
        ("string" == typeof e.dictionary
          ? (e.dictionary = Pi(e.dictionary))
          : "[object ArrayBuffer]" === io.call(e.dictionary) &&
            (e.dictionary = new Uint8Array(e.dictionary)),
        e.raw &&
          (n = eo.inflateSetDictionary(this.strm, e.dictionary)) !== no.Z_OK))
    )
      throw new Error(ii[n]);
  }
  function ao(t, e) {
    var n = new oo(e);
    if ((n.push(t, !0), n.err)) throw n.msg || ii[n.err];
    return n.result;
  }
  (oo.prototype.push = function (t, e) {
    var n,
      r,
      i,
      o,
      a,
      s = this.strm,
      l = this.options.chunkSize,
      h = this.options.dictionary,
      u = !1;
    if (this.ended) return !1;
    (r = e === ~~e ? e : !0 === e ? no.Z_FINISH : no.Z_NO_FLUSH),
      "string" == typeof t
        ? (s.input = Ri(t))
        : "[object ArrayBuffer]" === io.call(t)
        ? (s.input = new Uint8Array(t))
        : (s.input = t),
      (s.next_in = 0),
      (s.avail_in = s.input.length);
    do {
      if (
        (0 === s.avail_out &&
          ((s.output = new wr.Buf8(l)), (s.next_out = 0), (s.avail_out = l)),
        (n = eo.inflate(s, no.Z_NO_FLUSH)) === no.Z_NEED_DICT &&
          h &&
          (n = eo.inflateSetDictionary(this.strm, h)),
        n === no.Z_BUF_ERROR && !0 === u && ((n = no.Z_OK), (u = !1)),
        n !== no.Z_STREAM_END && n !== no.Z_OK)
      )
        return this.onEnd(n), (this.ended = !0), !1;
      s.next_out &&
        ((0 !== s.avail_out &&
          n !== no.Z_STREAM_END &&
          (0 !== s.avail_in || (r !== no.Z_FINISH && r !== no.Z_SYNC_FLUSH))) ||
          ("string" === this.options.to
            ? ((i = Di(s.output, s.next_out)),
              (o = s.next_out - i),
              (a = Oi(s.output, i)),
              (s.next_out = o),
              (s.avail_out = l - o),
              o && wr.arraySet(s.output, s.output, i, o, 0),
              this.onData(a))
            : this.onData(wr.shrinkBuf(s.output, s.next_out)))),
        0 === s.avail_in && 0 === s.avail_out && (u = !0);
    } while ((s.avail_in > 0 || 0 === s.avail_out) && n !== no.Z_STREAM_END);
    return (
      n === no.Z_STREAM_END && (r = no.Z_FINISH),
      r === no.Z_FINISH
        ? ((n = eo.inflateEnd(this.strm)),
          this.onEnd(n),
          (this.ended = !0),
          n === no.Z_OK)
        : r !== no.Z_SYNC_FLUSH || (this.onEnd(no.Z_OK), (s.avail_out = 0), !0)
    );
  }),
    (oo.prototype.onData = function (t) {
      this.chunks.push(t);
    }),
    (oo.prototype.onEnd = function (t) {
      t === no.Z_OK &&
        ("string" === this.options.to
          ? (this.result = this.chunks.join(""))
          : (this.result = wr.flattenChunks(this.chunks))),
        (this.chunks = []),
        (this.err = t),
        (this.msg = this.strm.msg);
    });
  var so = {
      Inflate: oo,
      inflate: ao,
      inflateRaw: function (t, e) {
        return ((e = e || {}).raw = !0), ao(t, e);
      },
      ungzip: ao,
    },
    lo = {};
  (0, wr.assign)(lo, Mi, so, no);
  var ho = lo,
    uo = (function () {
      function t(t, e) {
        (this.major = String(t)), (this.minor = String(e));
      }
      return (
        (t.prototype.toString = function () {
          var t = b(129);
          return (
            "%PDF-" + this.major + "." + this.minor + "\n%" + t + t + t + t
          );
        }),
        (t.prototype.sizeInBytes = function () {
          return 12 + this.major.length + this.minor.length;
        }),
        (t.prototype.copyBytesInto = function (t, e) {
          var n = e;
          return (
            (t[e++] = br.Percent),
            (t[e++] = br.P),
            (t[e++] = br.D),
            (t[e++] = br.F),
            (t[e++] = br.Dash),
            (e += k(this.major, t, e)),
            (t[e++] = br.Period),
            (e += k(this.minor, t, e)),
            (t[e++] = br.Newline),
            (t[e++] = br.Percent),
            (t[e++] = 129),
            (t[e++] = 129),
            (t[e++] = 129),
            (t[e++] = 129),
            e - n
          );
        }),
        (t.forVersion = function (e, n) {
          return new t(e, n);
        }),
        t
      );
    })(),
    co = (function () {
      function t() {}
      return (
        (t.prototype.clone = function (t) {
          throw new Gn(this.constructor.name, "clone");
        }),
        (t.prototype.toString = function () {
          throw new Gn(this.constructor.name, "toString");
        }),
        (t.prototype.sizeInBytes = function () {
          throw new Gn(this.constructor.name, "sizeInBytes");
        }),
        (t.prototype.copyBytesInto = function (t, e) {
          throw new Gn(this.constructor.name, "copyBytesInto");
        }),
        t
      );
    })(),
    fo = (function (t) {
      function e(e) {
        var n = t.call(this) || this;
        return (n.numberValue = e), (n.stringValue = ut(e)), n;
      }
      return (
        n(e, t),
        (e.prototype.asNumber = function () {
          return this.numberValue;
        }),
        (e.prototype.value = function () {
          return this.numberValue;
        }),
        (e.prototype.clone = function () {
          return e.of(this.numberValue);
        }),
        (e.prototype.toString = function () {
          return this.stringValue;
        }),
        (e.prototype.sizeInBytes = function () {
          return this.stringValue.length;
        }),
        (e.prototype.copyBytesInto = function (t, e) {
          return (e += k(this.stringValue, t, e)), this.stringValue.length;
        }),
        (e.of = function (t) {
          return new e(t);
        }),
        e
      );
    })(co),
    po = (function (t) {
      function e(e) {
        var n = t.call(this) || this;
        return (n.array = []), (n.context = e), n;
      }
      return (
        n(e, t),
        (e.prototype.size = function () {
          return this.array.length;
        }),
        (e.prototype.push = function (t) {
          this.array.push(t);
        }),
        (e.prototype.insert = function (t, e) {
          this.array.splice(t, 0, e);
        }),
        (e.prototype.indexOf = function (t) {
          var e = this.array.indexOf(t);
          return -1 === e ? void 0 : e;
        }),
        (e.prototype.remove = function (t) {
          this.array.splice(t, 1);
        }),
        (e.prototype.set = function (t, e) {
          this.array[t] = e;
        }),
        (e.prototype.get = function (t) {
          return this.array[t];
        }),
        (e.prototype.lookupMaybe = function (t) {
          for (var e, n = [], r = 1; r < arguments.length; r++)
            n[r - 1] = arguments[r];
          return (e = this.context).lookupMaybe.apply(e, a([this.get(t)], n));
        }),
        (e.prototype.lookup = function (t) {
          for (var e, n = [], r = 1; r < arguments.length; r++)
            n[r - 1] = arguments[r];
          return (e = this.context).lookup.apply(e, a([this.get(t)], n));
        }),
        (e.prototype.asRectangle = function () {
          if (4 !== this.size()) throw new tr(this.size());
          var t = this.lookup(0, fo).asNumber(),
            e = this.lookup(1, fo).asNumber();
          return {
            x: t,
            y: e,
            width: this.lookup(2, fo).asNumber() - t,
            height: this.lookup(3, fo).asNumber() - e,
          };
        }),
        (e.prototype.asArray = function () {
          return this.array.slice();
        }),
        (e.prototype.clone = function (t) {
          for (
            var n = e.withContext(t || this.context), r = 0, i = this.size();
            r < i;
            r++
          )
            n.push(this.array[r]);
          return n;
        }),
        (e.prototype.toString = function () {
          for (var t = "[ ", e = 0, n = this.size(); e < n; e++)
            (t += this.get(e).toString()), (t += " ");
          return (t += "]");
        }),
        (e.prototype.sizeInBytes = function () {
          for (var t = 3, e = 0, n = this.size(); e < n; e++)
            t += this.get(e).sizeInBytes() + 1;
          return t;
        }),
        (e.prototype.copyBytesInto = function (t, e) {
          var n = e;
          (t[e++] = br.LeftSquareBracket), (t[e++] = br.Space);
          for (var r = 0, i = this.size(); r < i; r++)
            (e += this.get(r).copyBytesInto(t, e)), (t[e++] = br.Space);
          return (t[e++] = br.RightSquareBracket), e - n;
        }),
        (e.withContext = function (t) {
          return new e(t);
        }),
        e
      );
    })(co),
    go = {},
    vo = (function (t) {
      function e(e, n) {
        var r = this;
        if (e !== go) throw new Hn("PDFBool");
        return ((r = t.call(this) || this).value = n), r;
      }
      return (
        n(e, t),
        (e.prototype.asBoolean = function () {
          return this.value;
        }),
        (e.prototype.clone = function () {
          return this;
        }),
        (e.prototype.toString = function () {
          return String(this.value);
        }),
        (e.prototype.sizeInBytes = function () {
          return this.value ? 4 : 5;
        }),
        (e.prototype.copyBytesInto = function (t, e) {
          return this.value
            ? ((t[e++] = br.t),
              (t[e++] = br.r),
              (t[e++] = br.u),
              (t[e++] = br.e),
              4)
            : ((t[e++] = br.f),
              (t[e++] = br.a),
              (t[e++] = br.l),
              (t[e++] = br.s),
              (t[e++] = br.e),
              5);
        }),
        (e.True = new e(go, !0)),
        (e.False = new e(go, !1)),
        e
      );
    })(co),
    yo = new ((function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        n(e, t),
        (e.prototype.asNull = function () {
          return null;
        }),
        (e.prototype.clone = function () {
          return this;
        }),
        (e.prototype.toString = function () {
          return "null";
        }),
        (e.prototype.sizeInBytes = function () {
          return 4;
        }),
        (e.prototype.copyBytesInto = function (t, e) {
          return (
            (t[e++] = br.n),
            (t[e++] = br.u),
            (t[e++] = br.l),
            (t[e++] = br.l),
            4
          );
        }),
        e
      );
    })(co))(),
    mo = (function (t) {
      function e(e, n) {
        var r = t.call(this) || this;
        return (r.dict = e), (r.context = n), r;
      }
      return (
        n(e, t),
        (e.prototype.keys = function () {
          return Array.from(this.dict.keys());
        }),
        (e.prototype.values = function () {
          return Array.from(this.dict.values());
        }),
        (e.prototype.entries = function () {
          return Array.from(this.dict.entries());
        }),
        (e.prototype.set = function (t, e) {
          this.dict.set(t, e);
        }),
        (e.prototype.get = function (t, e) {
          void 0 === e && (e = !1);
          var n = this.dict.get(t);
          if (n !== yo || e) return n;
        }),
        (e.prototype.has = function (t) {
          var e = this.dict.get(t);
          return void 0 !== e && e !== yo;
        }),
        (e.prototype.lookupMaybe = function (t) {
          for (var e, n = [], r = 1; r < arguments.length; r++)
            n[r - 1] = arguments[r];
          var i = n.includes(yo),
            o = (e = this.context).lookupMaybe.apply(e, a([this.get(t, i)], n));
          if (o !== yo || i) return o;
        }),
        (e.prototype.lookup = function (t) {
          for (var e, n = [], r = 1; r < arguments.length; r++)
            n[r - 1] = arguments[r];
          var i = n.includes(yo),
            o = (e = this.context).lookup.apply(e, a([this.get(t, i)], n));
          if (o !== yo || i) return o;
        }),
        (e.prototype.delete = function (t) {
          return this.dict.delete(t);
        }),
        (e.prototype.asMap = function () {
          return new Map(this.dict);
        }),
        (e.prototype.clone = function (t) {
          for (
            var n = e.withContext(t || this.context),
              r = this.entries(),
              i = 0,
              o = r.length;
            i < o;
            i++
          ) {
            var a = r[i],
              s = a[0],
              l = a[1];
            n.set(s, l);
          }
          return n;
        }),
        (e.prototype.toString = function () {
          for (
            var t = "<<\n", e = this.entries(), n = 0, r = e.length;
            n < r;
            n++
          ) {
            var i = e[n],
              o = i[0],
              a = i[1];
            t += o.toString() + " " + a.toString() + "\n";
          }
          return (t += ">>");
        }),
        (e.prototype.sizeInBytes = function () {
          for (var t = 5, e = this.entries(), n = 0, r = e.length; n < r; n++) {
            var i = e[n],
              o = i[0],
              a = i[1];
            t += o.sizeInBytes() + a.sizeInBytes() + 2;
          }
          return t;
        }),
        (e.prototype.copyBytesInto = function (t, e) {
          var n = e;
          (t[e++] = br.LessThan), (t[e++] = br.LessThan), (t[e++] = br.Newline);
          for (var r = this.entries(), i = 0, o = r.length; i < o; i++) {
            var a = r[i],
              s = a[0],
              l = a[1];
            (e += s.copyBytesInto(t, e)),
              (t[e++] = br.Space),
              (e += l.copyBytesInto(t, e)),
              (t[e++] = br.Newline);
          }
          return (t[e++] = br.GreaterThan), (t[e++] = br.GreaterThan), e - n;
        }),
        (e.withContext = function (t) {
          return new e(new Map(), t);
        }),
        (e.fromMapWithContext = function (t, n) {
          return new e(t, n);
        }),
        e
      );
    })(co),
    bo = new Uint8Array(256);
  (bo[br.LeftParen] = 1),
    (bo[br.RightParen] = 1),
    (bo[br.LessThan] = 1),
    (bo[br.GreaterThan] = 1),
    (bo[br.LeftSquareBracket] = 1),
    (bo[br.RightSquareBracket] = 1),
    (bo[br.LeftCurly] = 1),
    (bo[br.RightCurly] = 1),
    (bo[br.ForwardSlash] = 1),
    (bo[br.Percent] = 1);
  var wo = new Uint8Array(256);
  (wo[br.Null] = 1),
    (wo[br.Tab] = 1),
    (wo[br.Newline] = 1),
    (wo[br.FormFeed] = 1),
    (wo[br.CarriageReturn] = 1),
    (wo[br.Space] = 1);
  for (var xo = new Uint8Array(256), ko = 0; ko < 256; ko++)
    xo[ko] = wo[ko] || bo[ko] ? 1 : 0;
  xo[br.Hash] = 1;
  var Fo,
    So = {},
    Co = new Map(),
    Ao = (function (t) {
      function e(e, n) {
        var r = this;
        if (e !== So) throw new Hn("PDFName");
        r = t.call(this) || this;
        for (var i, o = "/", a = 0, s = n.length; a < s; a++) {
          var l = n[a],
            h = g(l);
          o +=
            (i = h) >= br.ExclamationPoint && i <= br.Tilde && !xo[i]
              ? l
              : "#" + m(h);
        }
        return (r.encodedName = o), r;
      }
      return (
        n(e, t),
        (e.prototype.asBytes = function () {
          for (
            var t = [],
              e = "",
              n = !1,
              r = function (e) {
                void 0 !== e && t.push(e), (n = !1);
              },
              i = 1,
              o = this.encodedName.length;
            i < o;
            i++
          ) {
            var a = this.encodedName[i],
              s = g(a),
              l = this.encodedName[i + 1];
            n
              ? (s >= br.Zero && s <= br.Nine) ||
                (s >= br.a && s <= br.f) ||
                (s >= br.A && s <= br.F)
                ? (2 !== (e += a).length &&
                    ((l >= "0" && l <= "9") ||
                      (l >= "a" && l <= "f") ||
                      (l >= "A" && l <= "F"))) ||
                  (r(parseInt(e, 16)), (e = ""))
                : r(s)
              : s === br.Hash
              ? (n = !0)
              : r(s);
          }
          return new Uint8Array(t);
        }),
        (e.prototype.decodeText = function () {
          var t = this.asBytes();
          return String.fromCharCode.apply(String, Array.from(t));
        }),
        (e.prototype.asString = function () {
          return this.encodedName;
        }),
        (e.prototype.value = function () {
          return this.encodedName;
        }),
        (e.prototype.clone = function () {
          return this;
        }),
        (e.prototype.toString = function () {
          return this.encodedName;
        }),
        (e.prototype.sizeInBytes = function () {
          return this.encodedName.length;
        }),
        (e.prototype.copyBytesInto = function (t, e) {
          return (e += k(this.encodedName, t, e)), this.encodedName.length;
        }),
        (e.of = function (t) {
          var n = (function (t) {
              return t.replace(/#([\dABCDEF]{2})/g, function (t, e) {
                return w(e);
              });
            })(t),
            r = Co.get(n);
          return r || ((r = new e(So, n)), Co.set(n, r)), r;
        }),
        (e.Length = e.of("Length")),
        (e.FlateDecode = e.of("FlateDecode")),
        (e.Resources = e.of("Resources")),
        (e.Font = e.of("Font")),
        (e.XObject = e.of("XObject")),
        (e.ExtGState = e.of("ExtGState")),
        (e.Contents = e.of("Contents")),
        (e.Type = e.of("Type")),
        (e.Parent = e.of("Parent")),
        (e.MediaBox = e.of("MediaBox")),
        (e.Page = e.of("Page")),
        (e.Annots = e.of("Annots")),
        (e.TrimBox = e.of("TrimBox")),
        (e.ArtBox = e.of("ArtBox")),
        (e.BleedBox = e.of("BleedBox")),
        (e.CropBox = e.of("CropBox")),
        (e.Rotate = e.of("Rotate")),
        (e.Title = e.of("Title")),
        (e.Author = e.of("Author")),
        (e.Subject = e.of("Subject")),
        (e.Creator = e.of("Creator")),
        (e.Keywords = e.of("Keywords")),
        (e.Producer = e.of("Producer")),
        (e.CreationDate = e.of("CreationDate")),
        (e.ModDate = e.of("ModDate")),
        e
      );
    })(co),
    To = (function (t) {
      function e(e) {
        var n = t.call(this) || this;
        return (n.dict = e), n;
      }
      return (
        n(e, t),
        (e.prototype.clone = function (t) {
          throw new Gn(this.constructor.name, "clone");
        }),
        (e.prototype.getContentsString = function () {
          throw new Gn(this.constructor.name, "getContentsString");
        }),
        (e.prototype.getContents = function () {
          throw new Gn(this.constructor.name, "getContents");
        }),
        (e.prototype.getContentsSize = function () {
          throw new Gn(this.constructor.name, "getContentsSize");
        }),
        (e.prototype.updateDict = function () {
          var t = this.getContentsSize();
          this.dict.set(Ao.Length, fo.of(t));
        }),
        (e.prototype.sizeInBytes = function () {
          return (
            this.updateDict(),
            this.dict.sizeInBytes() + this.getContentsSize() + 18
          );
        }),
        (e.prototype.toString = function () {
          this.updateDict();
          var t = this.dict.toString();
          return (
            (t += "\nstream\n"),
            (t += this.getContentsString()),
            (t += "\nendstream")
          );
        }),
        (e.prototype.copyBytesInto = function (t, e) {
          this.updateDict();
          var n = e;
          (e += this.dict.copyBytesInto(t, e)),
            (t[e++] = br.Newline),
            (t[e++] = br.s),
            (t[e++] = br.t),
            (t[e++] = br.r),
            (t[e++] = br.e),
            (t[e++] = br.a),
            (t[e++] = br.m),
            (t[e++] = br.Newline);
          for (var r = this.getContents(), i = 0, o = r.length; i < o; i++)
            t[e++] = r[i];
          return (
            (t[e++] = br.Newline),
            (t[e++] = br.e),
            (t[e++] = br.n),
            (t[e++] = br.d),
            (t[e++] = br.s),
            (t[e++] = br.t),
            (t[e++] = br.r),
            (t[e++] = br.e),
            (t[e++] = br.a),
            (t[e++] = br.m),
            e - n
          );
        }),
        e
      );
    })(co),
    Po = (function (t) {
      function e(e, n) {
        var r = t.call(this, e) || this;
        return (r.contents = n), r;
      }
      return (
        n(e, t),
        (e.prototype.asUint8Array = function () {
          return this.contents.slice();
        }),
        (e.prototype.clone = function (t) {
          return e.of(this.dict.clone(t), this.contents.slice());
        }),
        (e.prototype.getContentsString = function () {
          return V(this.contents);
        }),
        (e.prototype.getContents = function () {
          return this.contents;
        }),
        (e.prototype.getContentsSize = function () {
          return this.contents.length;
        }),
        (e.of = function (t, n) {
          return new e(t, n);
        }),
        e
      );
    })(To),
    zo = {},
    Ro = new Map(),
    Oo = (function (t) {
      function e(e, n, r) {
        var i = this;
        if (e !== zo) throw new Hn("PDFRef");
        return (
          ((i = t.call(this) || this).objectNumber = n),
          (i.generationNumber = r),
          (i.tag = n + " " + r + " R"),
          i
        );
      }
      return (
        n(e, t),
        (e.prototype.clone = function () {
          return this;
        }),
        (e.prototype.toString = function () {
          return this.tag;
        }),
        (e.prototype.sizeInBytes = function () {
          return this.tag.length;
        }),
        (e.prototype.copyBytesInto = function (t, e) {
          return (e += k(this.tag, t, e)), this.tag.length;
        }),
        (e.of = function (t, n) {
          void 0 === n && (n = 0);
          var r = t + " " + n + " R",
            i = Ro.get(r);
          return i || ((i = new e(zo, t, n)), Ro.set(r, i)), i;
        }),
        e
      );
    })(co),
    Do = (function () {
      function t(t, e) {
        (this.name = t), (this.args = e || []);
      }
      return (
        (t.prototype.clone = function (e) {
          for (
            var n = new Array(this.args.length), r = 0, i = n.length;
            r < i;
            r++
          ) {
            var o = this.args[r];
            n[r] = o instanceof co ? o.clone(e) : o;
          }
          return t.of(this.name, n);
        }),
        (t.prototype.toString = function () {
          for (var t = "", e = 0, n = this.args.length; e < n; e++)
            t += String(this.args[e]) + " ";
          return (t += this.name);
        }),
        (t.prototype.sizeInBytes = function () {
          for (var t = 0, e = 0, n = this.args.length; e < n; e++) {
            var r = this.args[e];
            t += (r instanceof co ? r.sizeInBytes() : r.length) + 1;
          }
          return (t += this.name.length);
        }),
        (t.prototype.copyBytesInto = function (t, e) {
          for (var n = e, r = 0, i = this.args.length; r < i; r++) {
            var o = this.args[r];
            (e += o instanceof co ? o.copyBytesInto(t, e) : k(o, t, e)),
              (t[e++] = br.Space);
          }
          return (e += k(this.name, t, e)) - n;
        }),
        (t.of = function (e, n) {
          return new t(e, n);
        }),
        t
      );
    })();
  !(function (t) {
    (t.NonStrokingColor = "sc"),
      (t.NonStrokingColorN = "scn"),
      (t.NonStrokingColorRgb = "rg"),
      (t.NonStrokingColorGray = "g"),
      (t.NonStrokingColorCmyk = "k"),
      (t.NonStrokingColorspace = "cs"),
      (t.StrokingColor = "SC"),
      (t.StrokingColorN = "SCN"),
      (t.StrokingColorRgb = "RG"),
      (t.StrokingColorGray = "G"),
      (t.StrokingColorCmyk = "K"),
      (t.StrokingColorspace = "CS"),
      (t.BeginMarkedContentSequence = "BDC"),
      (t.BeginMarkedContent = "BMC"),
      (t.EndMarkedContent = "EMC"),
      (t.MarkedContentPointWithProps = "DP"),
      (t.MarkedContentPoint = "MP"),
      (t.DrawObject = "Do"),
      (t.ConcatTransformationMatrix = "cm"),
      (t.PopGraphicsState = "Q"),
      (t.PushGraphicsState = "q"),
      (t.SetFlatness = "i"),
      (t.SetGraphicsStateParams = "gs"),
      (t.SetLineCapStyle = "J"),
      (t.SetLineDashPattern = "d"),
      (t.SetLineJoinStyle = "j"),
      (t.SetLineMiterLimit = "M"),
      (t.SetLineWidth = "w"),
      (t.SetTextMatrix = "Tm"),
      (t.SetRenderingIntent = "ri"),
      (t.AppendRectangle = "re"),
      (t.BeginInlineImage = "BI"),
      (t.BeginInlineImageData = "ID"),
      (t.EndInlineImage = "EI"),
      (t.ClipEvenOdd = "W*"),
      (t.ClipNonZero = "W"),
      (t.CloseAndStroke = "s"),
      (t.CloseFillEvenOddAndStroke = "b*"),
      (t.CloseFillNonZeroAndStroke = "b"),
      (t.ClosePath = "h"),
      (t.AppendBezierCurve = "c"),
      (t.CurveToReplicateFinalPoint = "y"),
      (t.CurveToReplicateInitialPoint = "v"),
      (t.EndPath = "n"),
      (t.FillEvenOddAndStroke = "B*"),
      (t.FillEvenOdd = "f*"),
      (t.FillNonZeroAndStroke = "B"),
      (t.FillNonZero = "f"),
      (t.LegacyFillNonZero = "F"),
      (t.LineTo = "l"),
      (t.MoveTo = "m"),
      (t.ShadingFill = "sh"),
      (t.StrokePath = "S"),
      (t.BeginText = "BT"),
      (t.EndText = "ET"),
      (t.MoveText = "Td"),
      (t.MoveTextSetLeading = "TD"),
      (t.NextLine = "T*"),
      (t.SetCharacterSpacing = "Tc"),
      (t.SetFontAndSize = "Tf"),
      (t.SetTextHorizontalScaling = "Tz"),
      (t.SetTextLineHeight = "TL"),
      (t.SetTextRenderingMode = "Tr"),
      (t.SetTextRise = "Ts"),
      (t.SetWordSpacing = "Tw"),
      (t.ShowText = "Tj"),
      (t.ShowTextAdjusted = "TJ"),
      (t.ShowTextLine = "'"),
      (t.ShowTextLineAndSpace = '"'),
      (t.Type3D0 = "d0"),
      (t.Type3D1 = "d1"),
      (t.BeginCompatibilitySection = "BX"),
      (t.EndCompatibilitySection = "EX");
  })(Fo || (Fo = {}));
  var Bo,
    No = Fo,
    Eo = (function (t) {
      function e(e, n) {
        var r = t.call(this, e) || this;
        return (
          (r.computeContents = function () {
            var t = r.getUnencodedContents();
            return r.encode ? ho.deflate(t) : t;
          }),
          (r.encode = n),
          n && e.set(Ao.of("Filter"), Ao.of("FlateDecode")),
          (r.contentsCache = Kn.populatedBy(r.computeContents)),
          r
        );
      }
      return (
        n(e, t),
        (e.prototype.getContents = function () {
          return this.contentsCache.access();
        }),
        (e.prototype.getContentsSize = function () {
          return this.contentsCache.access().length;
        }),
        (e.prototype.getUnencodedContents = function () {
          throw new Gn(this.constructor.name, "getUnencodedContents");
        }),
        e
      );
    })(To),
    jo = (function (t) {
      function e(e, n, r) {
        void 0 === r && (r = !0);
        var i = t.call(this, e, r) || this;
        return (i.operators = n), i;
      }
      return (
        n(e, t),
        (e.prototype.push = function () {
          for (var t, e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          (t = this.operators).push.apply(t, e);
        }),
        (e.prototype.clone = function (t) {
          for (
            var n = new Array(this.operators.length),
              r = 0,
              i = this.operators.length;
            r < i;
            r++
          )
            n[r] = this.operators[r].clone(t);
          var o = this.dict,
            a = this.encode;
          return e.of(o.clone(t), n, a);
        }),
        (e.prototype.getContentsString = function () {
          for (var t = "", e = 0, n = this.operators.length; e < n; e++)
            t += this.operators[e] + "\n";
          return t;
        }),
        (e.prototype.getUnencodedContents = function () {
          for (
            var t = new Uint8Array(this.getUnencodedContentsSize()),
              e = 0,
              n = 0,
              r = this.operators.length;
            n < r;
            n++
          )
            (e += this.operators[n].copyBytesInto(t, e)), (t[e++] = br.Newline);
          return t;
        }),
        (e.prototype.getUnencodedContentsSize = function () {
          for (var t = 0, e = 0, n = this.operators.length; e < n; e++)
            t += this.operators[e].sizeInBytes() + 1;
          return t;
        }),
        (e.of = function (t, n, r) {
          return void 0 === r && (r = !0), new e(t, n, r);
        }),
        e
      );
    })(Eo),
    Mo = function (t, e) {
      var n = t[0],
        r = e[0];
      return n.objectNumber - r.objectNumber;
    },
    Io = (function () {
      function t() {
        (this.largestObjectNumber = 0),
          (this.header = uo.forVersion(1, 7)),
          (this.trailerInfo = {}),
          (this.indirectObjects = new Map());
      }
      return (
        (t.prototype.assign = function (t, e) {
          this.indirectObjects.set(t, e),
            t.objectNumber > this.largestObjectNumber &&
              (this.largestObjectNumber = t.objectNumber);
        }),
        (t.prototype.nextRef = function () {
          return (
            (this.largestObjectNumber += 1), Oo.of(this.largestObjectNumber)
          );
        }),
        (t.prototype.register = function (t) {
          var e = this.nextRef();
          return this.assign(e, t), e;
        }),
        (t.prototype.delete = function (t) {
          return this.indirectObjects.delete(t);
        }),
        (t.prototype.lookupMaybe = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          var r = e.includes(yo),
            i = t instanceof Oo ? this.indirectObjects.get(t) : t;
          if (i && (i !== yo || r)) {
            for (var o = 0, a = e.length; o < a; o++) {
              var s = e[o];
              if (s === yo) {
                if (i === yo) return i;
              } else if (i instanceof s) return i;
            }
            throw new _n(e, i);
          }
        }),
        (t.prototype.lookup = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          var r = t instanceof Oo ? this.indirectObjects.get(t) : t;
          if (0 === e.length) return r;
          for (var i = 0, o = e.length; i < o; i++) {
            var a = e[i];
            if (a === yo) {
              if (r === yo) return r;
            } else if (r instanceof a) return r;
          }
          throw new _n(e, r);
        }),
        (t.prototype.getObjectRef = function (t) {
          for (
            var e = Array.from(this.indirectObjects.entries()),
              n = 0,
              r = e.length;
            n < r;
            n++
          ) {
            var i = e[n],
              o = i[0];
            if (i[1] === t) return o;
          }
        }),
        (t.prototype.enumerateIndirectObjects = function () {
          return Array.from(this.indirectObjects.entries()).sort(Mo);
        }),
        (t.prototype.obj = function (t) {
          if (t instanceof co) return t;
          if (null == t) return yo;
          if ("string" == typeof t) return Ao.of(t);
          if ("number" == typeof t) return fo.of(t);
          if ("boolean" == typeof t) return t ? vo.True : vo.False;
          if (Array.isArray(t)) {
            for (var e = po.withContext(this), n = 0, r = t.length; n < r; n++)
              e.push(this.obj(t[n]));
            return e;
          }
          var i = mo.withContext(this),
            o = Object.keys(t);
          for (n = 0, r = o.length; n < r; n++) {
            var a = o[n],
              s = t[a];
            void 0 !== s && i.set(Ao.of(a), this.obj(s));
          }
          return i;
        }),
        (t.prototype.stream = function (t, e) {
          return void 0 === e && (e = {}), Po.of(this.obj(e), M(t));
        }),
        (t.prototype.flateStream = function (t, e) {
          return (
            void 0 === e && (e = {}),
            this.stream(
              ho.deflate(M(t)),
              r(r({}, e), { Filter: "FlateDecode" })
            )
          );
        }),
        (t.prototype.contentStream = function (t, e) {
          return void 0 === e && (e = {}), jo.of(this.obj(e), t);
        }),
        (t.prototype.formXObject = function (t, e) {
          return (
            void 0 === e && (e = {}),
            this.contentStream(
              t,
              r(
                r(
                  {
                    BBox: this.obj([0, 0, 0, 0]),
                    Matrix: this.obj([1, 0, 0, 1, 0, 0]),
                  },
                  e
                ),
                { Type: "XObject", Subtype: "Form" }
              )
            )
          );
        }),
        (t.prototype.getPushGraphicsStateContentStream = function () {
          if (this.pushGraphicsStateContentStreamRef)
            return this.pushGraphicsStateContentStreamRef;
          var t = this.obj({}),
            e = Do.of(No.PushGraphicsState),
            n = jo.of(t, [e]);
          return (
            (this.pushGraphicsStateContentStreamRef = this.register(n)),
            this.pushGraphicsStateContentStreamRef
          );
        }),
        (t.prototype.getPopGraphicsStateContentStream = function () {
          if (this.popGraphicsStateContentStreamRef)
            return this.popGraphicsStateContentStreamRef;
          var t = this.obj({}),
            e = Do.of(No.PopGraphicsState),
            n = jo.of(t, [e]);
          return (
            (this.popGraphicsStateContentStreamRef = this.register(n)),
            this.popGraphicsStateContentStreamRef
          );
        }),
        (t.create = function () {
          return new t();
        }),
        t
      );
    })(),
    Uo = (function (t) {
      function e(e, n, r) {
        void 0 === r && (r = !0);
        var i = t.call(this, e, n) || this;
        return (i.normalized = !1), (i.autoNormalizeCTM = r), i;
      }
      return (
        n(e, t),
        (e.prototype.clone = function (t) {
          for (
            var n = e.fromMapWithContext(
                new Map(),
                t || this.context,
                this.autoNormalizeCTM
              ),
              r = this.entries(),
              i = 0,
              o = r.length;
            i < o;
            i++
          ) {
            var a = r[i],
              s = a[0],
              l = a[1];
            n.set(s, l);
          }
          return n;
        }),
        (e.prototype.Parent = function () {
          return this.lookupMaybe(Ao.Parent, mo);
        }),
        (e.prototype.Contents = function () {
          return this.lookup(Ao.of("Contents"));
        }),
        (e.prototype.Annots = function () {
          return this.lookupMaybe(Ao.Annots, po);
        }),
        (e.prototype.BleedBox = function () {
          return this.lookupMaybe(Ao.BleedBox, po);
        }),
        (e.prototype.TrimBox = function () {
          return this.lookupMaybe(Ao.TrimBox, po);
        }),
        (e.prototype.ArtBox = function () {
          return this.lookupMaybe(Ao.ArtBox, po);
        }),
        (e.prototype.Resources = function () {
          var t = this.getInheritableAttribute(Ao.Resources);
          return this.context.lookupMaybe(t, mo);
        }),
        (e.prototype.MediaBox = function () {
          var t = this.getInheritableAttribute(Ao.MediaBox);
          return this.context.lookup(t, po);
        }),
        (e.prototype.CropBox = function () {
          var t = this.getInheritableAttribute(Ao.CropBox);
          return this.context.lookupMaybe(t, po);
        }),
        (e.prototype.Rotate = function () {
          var t = this.getInheritableAttribute(Ao.Rotate);
          return this.context.lookupMaybe(t, fo);
        }),
        (e.prototype.getInheritableAttribute = function (t) {
          var e;
          return (
            this.ascend(function (n) {
              e || (e = n.get(t));
            }),
            e
          );
        }),
        (e.prototype.setParent = function (t) {
          this.set(Ao.Parent, t);
        }),
        (e.prototype.addContentStream = function (t) {
          var e = this.normalizedEntries().Contents || this.context.obj([]);
          this.set(Ao.Contents, e), e.push(t);
        }),
        (e.prototype.wrapContentStreams = function (t, e) {
          var n = this.Contents();
          return n instanceof po && (n.insert(0, t), n.push(e), !0);
        }),
        (e.prototype.addAnnot = function (t) {
          this.normalizedEntries().Annots.push(t);
        }),
        (e.prototype.removeAnnot = function (t) {
          var e = this.normalizedEntries().Annots,
            n = e.indexOf(t);
          void 0 !== n && e.remove(n);
        }),
        (e.prototype.setFontDictionary = function (t, e) {
          this.normalizedEntries().Font.set(t, e);
        }),
        (e.prototype.setXObject = function (t, e) {
          this.normalizedEntries().XObject.set(t, e);
        }),
        (e.prototype.setExtGState = function (t, e) {
          this.normalizedEntries().ExtGState.set(t, e);
        }),
        (e.prototype.ascend = function (t) {
          t(this);
          var e = this.Parent();
          e && e.ascend(t);
        }),
        (e.prototype.normalize = function () {
          if (!this.normalized) {
            var t = this.context,
              e = this.get(Ao.Contents);
            this.context.lookup(e) instanceof To &&
              this.set(Ao.Contents, t.obj([e])),
              this.autoNormalizeCTM &&
                this.wrapContentStreams(
                  this.context.getPushGraphicsStateContentStream(),
                  this.context.getPopGraphicsStateContentStream()
                );
            var n = this.getInheritableAttribute(Ao.Resources),
              r = t.lookupMaybe(n, mo) || t.obj({});
            this.set(Ao.Resources, r);
            var i = r.lookupMaybe(Ao.Font, mo) || t.obj({});
            r.set(Ao.Font, i);
            var o = r.lookupMaybe(Ao.XObject, mo) || t.obj({});
            r.set(Ao.XObject, o);
            var a = r.lookupMaybe(Ao.ExtGState, mo) || t.obj({});
            r.set(Ao.ExtGState, a);
            var s = this.Annots() || t.obj([]);
            this.set(Ao.Annots, s), (this.normalized = !0);
          }
        }),
        (e.prototype.normalizedEntries = function () {
          this.normalize();
          var t = this.Annots(),
            e = this.Resources();
          return {
            Annots: t,
            Resources: e,
            Contents: this.Contents(),
            Font: e.lookup(Ao.Font, mo),
            XObject: e.lookup(Ao.XObject, mo),
            ExtGState: e.lookup(Ao.ExtGState, mo),
          };
        }),
        (e.InheritableEntries = ["Resources", "MediaBox", "CropBox", "Rotate"]),
        (e.withContextAndParent = function (t, n) {
          var r = new Map();
          return (
            r.set(Ao.Type, Ao.Page),
            r.set(Ao.Parent, n),
            r.set(Ao.Resources, t.obj({})),
            r.set(Ao.MediaBox, t.obj([0, 0, 612, 792])),
            new e(r, t, !1)
          );
        }),
        (e.fromMapWithContext = function (t, n, r) {
          return void 0 === r && (r = !0), new e(t, n, r);
        }),
        e
      );
    })(mo),
    Vo = (function () {
      function t(t, e) {
        var n = this;
        (this.traversedObjects = new Map()),
          (this.copy = function (t) {
            return t instanceof Uo
              ? n.copyPDFPage(t)
              : t instanceof mo
              ? n.copyPDFDict(t)
              : t instanceof po
              ? n.copyPDFArray(t)
              : t instanceof To
              ? n.copyPDFStream(t)
              : t instanceof Oo
              ? n.copyPDFIndirectObject(t)
              : t.clone();
          }),
          (this.copyPDFPage = function (t) {
            for (
              var e = t.clone(), r = Uo.InheritableEntries, i = 0, o = r.length;
              i < o;
              i++
            ) {
              var a = Ao.of(r[i]),
                s = e.getInheritableAttribute(a);
              !e.get(a) && s && e.set(a, s);
            }
            return e.delete(Ao.of("Parent")), n.copyPDFDict(e);
          }),
          (this.copyPDFDict = function (t) {
            if (n.traversedObjects.has(t)) return n.traversedObjects.get(t);
            var e = t.clone(n.dest);
            n.traversedObjects.set(t, e);
            for (var r = t.entries(), i = 0, o = r.length; i < o; i++) {
              var a = r[i],
                s = a[0],
                l = a[1];
              e.set(s, n.copy(l));
            }
            return e;
          }),
          (this.copyPDFArray = function (t) {
            if (n.traversedObjects.has(t)) return n.traversedObjects.get(t);
            var e = t.clone(n.dest);
            n.traversedObjects.set(t, e);
            for (var r = 0, i = t.size(); r < i; r++) {
              var o = t.get(r);
              e.set(r, n.copy(o));
            }
            return e;
          }),
          (this.copyPDFStream = function (t) {
            if (n.traversedObjects.has(t)) return n.traversedObjects.get(t);
            var e = t.clone(n.dest);
            n.traversedObjects.set(t, e);
            for (var r = t.dict.entries(), i = 0, o = r.length; i < o; i++) {
              var a = r[i],
                s = a[0],
                l = a[1];
              e.dict.set(s, n.copy(l));
            }
            return e;
          }),
          (this.copyPDFIndirectObject = function (t) {
            if (!n.traversedObjects.has(t)) {
              var e = n.dest.nextRef();
              n.traversedObjects.set(t, e);
              var r = n.src.lookup(t);
              if (r) {
                var i = n.copy(r);
                n.dest.assign(e, i);
              }
            }
            return n.traversedObjects.get(t);
          }),
          (this.src = t),
          (this.dest = e);
      }
      return (
        (t.for = function (e, n) {
          return new t(e, n);
        }),
        t
      );
    })(),
    Wo = (function () {
      function t(t) {
        (this.subsections = t ? [[t]] : []),
          (this.chunkIdx = 0),
          (this.chunkLength = t ? 1 : 0);
      }
      return (
        (t.prototype.addEntry = function (t, e) {
          this.append({ ref: t, offset: e, deleted: !1 });
        }),
        (t.prototype.addDeletedEntry = function (t, e) {
          this.append({ ref: t, offset: e, deleted: !0 });
        }),
        (t.prototype.toString = function () {
          for (
            var t = "xref\n", e = 0, n = this.subsections.length;
            e < n;
            e++
          ) {
            var r = this.subsections[e];
            t += r[0].ref.objectNumber + " " + r.length + "\n";
            for (var i = 0, o = r.length; i < o; i++) {
              var a = r[i];
              (t += x(String(a.offset), 10, "0")),
                (t += " "),
                (t += x(String(a.ref.generationNumber), 5, "0")),
                (t += " "),
                (t += a.deleted ? "f" : "n"),
                (t += " \n");
            }
          }
          return t;
        }),
        (t.prototype.sizeInBytes = function () {
          for (var t = 5, e = 0, n = this.subsections.length; e < n; e++) {
            var r = this.subsections[e],
              i = r.length,
              o = r[0];
            (t += 2),
              (t += String(o.ref.objectNumber).length),
              (t += String(i).length),
              (t += 20 * i);
          }
          return t;
        }),
        (t.prototype.copyBytesInto = function (t, e) {
          var n = e;
          return (
            (t[e++] = br.x),
            (t[e++] = br.r),
            (t[e++] = br.e),
            (t[e++] = br.f),
            (t[e++] = br.Newline),
            (e += this.copySubsectionsIntoBuffer(this.subsections, t, e)) - n
          );
        }),
        (t.prototype.copySubsectionsIntoBuffer = function (t, e, n) {
          for (var r = n, i = t.length, o = 0; o < i; o++) {
            var a = this.subsections[o],
              s = String(a[0].ref.objectNumber);
            (n += k(s, e, n)), (e[n++] = br.Space);
            var l = String(a.length);
            (n += k(l, e, n)),
              (e[n++] = br.Newline),
              (n += this.copyEntriesIntoBuffer(a, e, n));
          }
          return n - r;
        }),
        (t.prototype.copyEntriesIntoBuffer = function (t, e, n) {
          for (var r = t.length, i = 0; i < r; i++) {
            var o = t[i],
              a = x(String(o.offset), 10, "0");
            (n += k(a, e, n)), (e[n++] = br.Space);
            var s = x(String(o.ref.generationNumber), 5, "0");
            (n += k(s, e, n)),
              (e[n++] = br.Space),
              (e[n++] = o.deleted ? br.f : br.n),
              (e[n++] = br.Space),
              (e[n++] = br.Newline);
          }
          return 20 * r;
        }),
        (t.prototype.append = function (t) {
          if (0 === this.chunkLength)
            return (
              this.subsections.push([t]),
              (this.chunkIdx = 0),
              void (this.chunkLength = 1)
            );
          var e = this.subsections[this.chunkIdx],
            n = e[this.chunkLength - 1];
          t.ref.objectNumber - n.ref.objectNumber > 1
            ? (this.subsections.push([t]),
              (this.chunkIdx += 1),
              (this.chunkLength = 1))
            : (e.push(t), (this.chunkLength += 1));
        }),
        (t.create = function () {
          return new t({ ref: Oo.of(0, 65535), offset: 0, deleted: !0 });
        }),
        (t.createEmpty = function () {
          return new t();
        }),
        t
      );
    })(),
    qo = (function () {
      function t(t) {
        this.lastXRefOffset = String(t);
      }
      return (
        (t.prototype.toString = function () {
          return "startxref\n" + this.lastXRefOffset + "\n%%EOF";
        }),
        (t.prototype.sizeInBytes = function () {
          return 16 + this.lastXRefOffset.length;
        }),
        (t.prototype.copyBytesInto = function (t, e) {
          var n = e;
          return (
            (t[e++] = br.s),
            (t[e++] = br.t),
            (t[e++] = br.a),
            (t[e++] = br.r),
            (t[e++] = br.t),
            (t[e++] = br.x),
            (t[e++] = br.r),
            (t[e++] = br.e),
            (t[e++] = br.f),
            (t[e++] = br.Newline),
            (e += k(this.lastXRefOffset, t, e)),
            (t[e++] = br.Newline),
            (t[e++] = br.Percent),
            (t[e++] = br.Percent),
            (t[e++] = br.E),
            (t[e++] = br.O),
            (t[e++] = br.F),
            e - n
          );
        }),
        (t.forLastCrossRefSectionOffset = function (e) {
          return new t(e);
        }),
        t
      );
    })(),
    Lo = (function () {
      function t(t) {
        this.dict = t;
      }
      return (
        (t.prototype.toString = function () {
          return "trailer\n" + this.dict.toString();
        }),
        (t.prototype.sizeInBytes = function () {
          return 8 + this.dict.sizeInBytes();
        }),
        (t.prototype.copyBytesInto = function (t, e) {
          var n = e;
          return (
            (t[e++] = br.t),
            (t[e++] = br.r),
            (t[e++] = br.a),
            (t[e++] = br.i),
            (t[e++] = br.l),
            (t[e++] = br.e),
            (t[e++] = br.r),
            (t[e++] = br.Newline),
            (e += this.dict.copyBytesInto(t, e)) - n
          );
        }),
        (t.of = function (e) {
          return new t(e);
        }),
        t
      );
    })(),
    Ko = (function (t) {
      function e(e, n, r) {
        void 0 === r && (r = !0);
        var i = t.call(this, e.obj({}), r) || this;
        return (
          (i.objects = n),
          (i.offsets = i.computeObjectOffsets()),
          (i.offsetsString = i.computeOffsetsString()),
          i.dict.set(Ao.of("Type"), Ao.of("ObjStm")),
          i.dict.set(Ao.of("N"), fo.of(i.objects.length)),
          i.dict.set(Ao.of("First"), fo.of(i.offsetsString.length)),
          i
        );
      }
      return (
        n(e, t),
        (e.prototype.getObjectsCount = function () {
          return this.objects.length;
        }),
        (e.prototype.clone = function (t) {
          return e.withContextAndObjects(
            t || this.dict.context,
            this.objects.slice(),
            this.encode
          );
        }),
        (e.prototype.getContentsString = function () {
          for (
            var t = this.offsetsString, e = 0, n = this.objects.length;
            e < n;
            e++
          ) {
            t += this.objects[e][1] + "\n";
          }
          return t;
        }),
        (e.prototype.getUnencodedContents = function () {
          for (
            var t = new Uint8Array(this.getUnencodedContentsSize()),
              e = k(this.offsetsString, t, 0),
              n = 0,
              r = this.objects.length;
            n < r;
            n++
          ) {
            (e += this.objects[n][1].copyBytesInto(t, e)),
              (t[e++] = br.Newline);
          }
          return t;
        }),
        (e.prototype.getUnencodedContentsSize = function () {
          return (
            this.offsetsString.length +
            j(this.offsets)[1] +
            j(this.objects)[1].sizeInBytes() +
            1
          );
        }),
        (e.prototype.computeOffsetsString = function () {
          for (var t = "", e = 0, n = this.offsets.length; e < n; e++) {
            var r = this.offsets[e];
            t += r[0] + " " + r[1] + " ";
          }
          return t;
        }),
        (e.prototype.computeObjectOffsets = function () {
          for (
            var t = 0,
              e = new Array(this.objects.length),
              n = 0,
              r = this.objects.length;
            n < r;
            n++
          ) {
            var i = this.objects[n],
              o = i[0],
              a = i[1];
            (e[n] = [o.objectNumber, t]), (t += a.sizeInBytes() + 1);
          }
          return e;
        }),
        (e.withContextAndObjects = function (t, n, r) {
          return void 0 === r && (r = !0), new e(t, n, r);
        }),
        e
      );
    })(Eo),
    Go = (function () {
      function t(t, e) {
        var n = this;
        (this.parsedObjects = 0),
          (this.shouldWaitForTick = function (t) {
            return (
              (n.parsedObjects += t), n.parsedObjects % n.objectsPerTick == 0
            );
          }),
          (this.context = t),
          (this.objectsPerTick = e);
      }
      return (
        (t.prototype.serializeToBuffer = function () {
          return i(this, void 0, void 0, function () {
            var t, e, n, r, i, a, s, l, h, u, c, d, f, p, g, v, y;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  return [4, this.computeBufferSize()];
                case 1:
                  (t = o.sent()),
                    (e = t.size),
                    (n = t.header),
                    (r = t.indirectObjects),
                    (i = t.xref),
                    (a = t.trailerDict),
                    (s = t.trailer),
                    (l = 0),
                    (h = new Uint8Array(e)),
                    (l += n.copyBytesInto(h, l)),
                    (h[l++] = br.Newline),
                    (h[l++] = br.Newline),
                    (u = 0),
                    (c = r.length),
                    (o.label = 2);
                case 2:
                  return u < c
                    ? ((d = r[u]),
                      (f = d[0]),
                      (p = d[1]),
                      (g = String(f.objectNumber)),
                      (l += k(g, h, l)),
                      (h[l++] = br.Space),
                      (v = String(f.generationNumber)),
                      (l += k(v, h, l)),
                      (h[l++] = br.Space),
                      (h[l++] = br.o),
                      (h[l++] = br.b),
                      (h[l++] = br.j),
                      (h[l++] = br.Newline),
                      (l += p.copyBytesInto(h, l)),
                      (h[l++] = br.Newline),
                      (h[l++] = br.e),
                      (h[l++] = br.n),
                      (h[l++] = br.d),
                      (h[l++] = br.o),
                      (h[l++] = br.b),
                      (h[l++] = br.j),
                      (h[l++] = br.Newline),
                      (h[l++] = br.Newline),
                      (y = p instanceof Ko ? p.getObjectsCount() : 1),
                      this.shouldWaitForTick(y) ? [4, Z()] : [3, 4])
                    : [3, 5];
                case 3:
                  o.sent(), (o.label = 4);
                case 4:
                  return u++, [3, 2];
                case 5:
                  return (
                    i && ((l += i.copyBytesInto(h, l)), (h[l++] = br.Newline)),
                    a &&
                      ((l += a.copyBytesInto(h, l)),
                      (h[l++] = br.Newline),
                      (h[l++] = br.Newline)),
                    (l += s.copyBytesInto(h, l)),
                    [2, h]
                  );
              }
            });
          });
        }),
        (t.prototype.computeIndirectObjectSize = function (t) {
          var e = t[0],
            n = t[1];
          return e.sizeInBytes() + 3 + (n.sizeInBytes() + 9);
        }),
        (t.prototype.createTrailerDict = function () {
          return this.context.obj({
            Size: this.context.largestObjectNumber + 1,
            Root: this.context.trailerInfo.Root,
            Encrypt: this.context.trailerInfo.Encrypt,
            Info: this.context.trailerInfo.Info,
            ID: this.context.trailerInfo.ID,
          });
        }),
        (t.prototype.computeBufferSize = function () {
          return i(this, void 0, void 0, function () {
            var t, e, n, r, i, a, s, l, h, u, c;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  (t = uo.forVersion(1, 7)),
                    (e = t.sizeInBytes() + 2),
                    (n = Wo.create()),
                    (r = this.context.enumerateIndirectObjects()),
                    (i = 0),
                    (a = r.length),
                    (o.label = 1);
                case 1:
                  return i < a
                    ? ((s = r[i]),
                      (l = s[0]),
                      n.addEntry(l, e),
                      (e += this.computeIndirectObjectSize(s)),
                      this.shouldWaitForTick(1) ? [4, Z()] : [3, 3])
                    : [3, 4];
                case 2:
                  o.sent(), (o.label = 3);
                case 3:
                  return i++, [3, 1];
                case 4:
                  return (
                    (h = e),
                    (e += n.sizeInBytes() + 1),
                    (u = Lo.of(this.createTrailerDict())),
                    (e += u.sizeInBytes() + 2),
                    (c = qo.forLastCrossRefSectionOffset(h)),
                    [
                      2,
                      {
                        size: (e += c.sizeInBytes()),
                        header: t,
                        indirectObjects: r,
                        xref: n,
                        trailerDict: u,
                        trailer: c,
                      },
                    ]
                  );
              }
            });
          });
        }),
        (t.forContext = function (e, n) {
          return new t(e, n);
        }),
        t
      );
    })(),
    Ho = (function (t) {
      function e(e) {
        var n = t.call(this) || this;
        return (n.data = e), n;
      }
      return (
        n(e, t),
        (e.prototype.clone = function () {
          return e.of(this.data.slice());
        }),
        (e.prototype.toString = function () {
          return "PDFInvalidObject(" + this.data.length + " bytes)";
        }),
        (e.prototype.sizeInBytes = function () {
          return this.data.length;
        }),
        (e.prototype.copyBytesInto = function (t, e) {
          for (var n = this.data.length, r = 0; r < n; r++)
            t[e++] = this.data[r];
          return n;
        }),
        (e.of = function (t) {
          return new e(t);
        }),
        e
      );
    })(co);
  !(function (t) {
    (t[(t.Deleted = 0)] = "Deleted"),
      (t[(t.Uncompressed = 1)] = "Uncompressed"),
      (t[(t.Compressed = 2)] = "Compressed");
  })(Bo || (Bo = {}));
  var _o,
    Xo = (function (t) {
      function e(e, n, r) {
        void 0 === r && (r = !0);
        var i = t.call(this, e, r) || this;
        return (
          (i.computeIndex = function () {
            for (var t = [], e = 0, n = 0, r = i.entries.length; n < r; n++) {
              var o = i.entries[n],
                a = i.entries[n - 1];
              0 === n
                ? t.push(o.ref.objectNumber)
                : o.ref.objectNumber - a.ref.objectNumber > 1 &&
                  (t.push(e), t.push(o.ref.objectNumber), (e = 0)),
                (e += 1);
            }
            return t.push(e), t;
          }),
          (i.computeEntryTuples = function () {
            for (
              var t = new Array(i.entries.length), e = 0, n = i.entries.length;
              e < n;
              e++
            ) {
              var r = i.entries[e];
              if (r.type === Bo.Deleted) {
                var o = r.type,
                  a = r.nextFreeObjectNumber,
                  s = r.ref;
                t[e] = [o, a, s.generationNumber];
              }
              if (r.type === Bo.Uncompressed) {
                o = r.type;
                var l = r.offset;
                s = r.ref;
                t[e] = [o, l, s.generationNumber];
              }
              if (r.type === Bo.Compressed) {
                o = r.type;
                var h = r.objectStreamRef,
                  u = r.index;
                t[e] = [o, h.objectNumber, u];
              }
            }
            return t;
          }),
          (i.computeMaxEntryByteWidths = function () {
            for (
              var t = i.entryTuplesCache.access(),
                e = [0, 0, 0],
                n = 0,
                r = t.length;
              n < r;
              n++
            ) {
              var o = t[n],
                a = o[0],
                s = o[1],
                l = o[2],
                h = ct(a),
                u = ct(s),
                c = ct(l);
              h > e[0] && (e[0] = h),
                u > e[1] && (e[1] = u),
                c > e[2] && (e[2] = c);
            }
            return e;
          }),
          (i.entries = n || []),
          (i.entryTuplesCache = Kn.populatedBy(i.computeEntryTuples)),
          (i.maxByteWidthsCache = Kn.populatedBy(i.computeMaxEntryByteWidths)),
          (i.indexCache = Kn.populatedBy(i.computeIndex)),
          e.set(Ao.of("Type"), Ao.of("XRef")),
          i
        );
      }
      return (
        n(e, t),
        (e.prototype.addDeletedEntry = function (t, e) {
          var n = Bo.Deleted;
          this.entries.push({ type: n, ref: t, nextFreeObjectNumber: e }),
            this.entryTuplesCache.invalidate(),
            this.maxByteWidthsCache.invalidate(),
            this.indexCache.invalidate(),
            this.contentsCache.invalidate();
        }),
        (e.prototype.addUncompressedEntry = function (t, e) {
          var n = Bo.Uncompressed;
          this.entries.push({ type: n, ref: t, offset: e }),
            this.entryTuplesCache.invalidate(),
            this.maxByteWidthsCache.invalidate(),
            this.indexCache.invalidate(),
            this.contentsCache.invalidate();
        }),
        (e.prototype.addCompressedEntry = function (t, e, n) {
          var r = Bo.Compressed;
          this.entries.push({ type: r, ref: t, objectStreamRef: e, index: n }),
            this.entryTuplesCache.invalidate(),
            this.maxByteWidthsCache.invalidate(),
            this.indexCache.invalidate(),
            this.contentsCache.invalidate();
        }),
        (e.prototype.clone = function (t) {
          var n = this.dict,
            r = this.entries,
            i = this.encode;
          return e.of(n.clone(t), r.slice(), i);
        }),
        (e.prototype.getContentsString = function () {
          for (
            var t = this.entryTuplesCache.access(),
              e = this.maxByteWidthsCache.access(),
              n = "",
              r = 0,
              i = t.length;
            r < i;
            r++
          ) {
            for (
              var o = t[r],
                a = o[0],
                s = o[1],
                l = o[2],
                h = L(dt(a)),
                u = L(dt(s)),
                c = L(dt(l)),
                d = e[0] - 1;
              d >= 0;
              d--
            )
              n += (h[d] || 0).toString(2);
            for (d = e[1] - 1; d >= 0; d--) n += (u[d] || 0).toString(2);
            for (d = e[2] - 1; d >= 0; d--) n += (c[d] || 0).toString(2);
          }
          return n;
        }),
        (e.prototype.getUnencodedContents = function () {
          for (
            var t = this.entryTuplesCache.access(),
              e = this.maxByteWidthsCache.access(),
              n = new Uint8Array(this.getUnencodedContentsSize()),
              r = 0,
              i = 0,
              o = t.length;
            i < o;
            i++
          ) {
            for (
              var a = t[i],
                s = a[0],
                l = a[1],
                h = a[2],
                u = L(dt(s)),
                c = L(dt(l)),
                d = L(dt(h)),
                f = e[0] - 1;
              f >= 0;
              f--
            )
              n[r++] = u[f] || 0;
            for (f = e[1] - 1; f >= 0; f--) n[r++] = c[f] || 0;
            for (f = e[2] - 1; f >= 0; f--) n[r++] = d[f] || 0;
          }
          return n;
        }),
        (e.prototype.getUnencodedContentsSize = function () {
          var t = this.maxByteWidthsCache.access();
          return K(t) * this.entries.length;
        }),
        (e.prototype.updateDict = function () {
          t.prototype.updateDict.call(this);
          var e = this.maxByteWidthsCache.access(),
            n = this.indexCache.access(),
            r = this.dict.context;
          this.dict.set(Ao.of("W"), r.obj(e)),
            this.dict.set(Ao.of("Index"), r.obj(n));
        }),
        (e.create = function (t, n) {
          void 0 === n && (n = !0);
          var r = new e(t, [], n);
          return r.addDeletedEntry(Oo.of(0, 65535), 0), r;
        }),
        (e.of = function (t, n, r) {
          return void 0 === r && (r = !0), new e(t, n, r);
        }),
        e
      );
    })(Eo),
    Zo = (function (t) {
      function e(e, n, r, i) {
        var o = t.call(this, e, n) || this;
        return (o.encodeStreams = r), (o.objectsPerStream = i), o;
      }
      return (
        n(e, t),
        (e.prototype.computeBufferSize = function () {
          return i(this, void 0, void 0, function () {
            var t, e, n, r, i, a, s, l, h, u, c, d, f, p, g, v, y, m, b;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  (t = this.context.largestObjectNumber + 1),
                    (e = uo.forVersion(1, 7)),
                    (n = e.sizeInBytes() + 2),
                    (r = Xo.create(
                      this.createTrailerDict(),
                      this.encodeStreams
                    )),
                    (i = []),
                    (a = []),
                    (s = []),
                    (l = this.context.enumerateIndirectObjects()),
                    (d = 0),
                    (f = l.length),
                    (o.label = 1);
                case 1:
                  return d < f
                    ? ((h = l[d]),
                      (g = h[0]),
                      (u = h[1]),
                      g === this.context.trailerInfo.Encrypt ||
                      u instanceof To ||
                      u instanceof Ho ||
                      0 !== g.generationNumber
                        ? (i.push(h),
                          r.addUncompressedEntry(g, n),
                          (n += this.computeIndirectObjectSize(h)),
                          this.shouldWaitForTick(1) ? [4, Z()] : [3, 3])
                        : [3, 4])
                    : [3, 6];
                case 2:
                  o.sent(), (o.label = 3);
                case 3:
                  return [3, 5];
                case 4:
                  (p = j(a)),
                    (c = j(s)),
                    (p && p.length % this.objectsPerStream != 0) ||
                      ((p = []), a.push(p), (c = Oo.of(t++)), s.push(c)),
                    r.addCompressedEntry(g, c, p.length),
                    p.push(h),
                    (o.label = 5);
                case 5:
                  return d++, [3, 1];
                case 6:
                  (d = 0), (f = a.length), (o.label = 7);
                case 7:
                  return d < f
                    ? ((p = a[d]),
                      (g = s[d]),
                      (v = Ko.withContextAndObjects(
                        this.context,
                        p,
                        this.encodeStreams
                      )),
                      r.addUncompressedEntry(g, n),
                      (n += this.computeIndirectObjectSize([g, v])),
                      i.push([g, v]),
                      this.shouldWaitForTick(p.length) ? [4, Z()] : [3, 9])
                    : [3, 10];
                case 8:
                  o.sent(), (o.label = 9);
                case 9:
                  return d++, [3, 7];
                case 10:
                  return (
                    (y = Oo.of(t++)),
                    r.dict.set(Ao.of("Size"), fo.of(t)),
                    r.addUncompressedEntry(y, n),
                    (m = n),
                    (n += this.computeIndirectObjectSize([y, r])),
                    i.push([y, r]),
                    (b = qo.forLastCrossRefSectionOffset(m)),
                    [
                      2,
                      {
                        size: (n += b.sizeInBytes()),
                        header: e,
                        indirectObjects: i,
                        trailer: b,
                      },
                    ]
                  );
              }
            });
          });
        }),
        (e.forContext = function (t, n, r, i) {
          return (
            void 0 === r && (r = !0),
            void 0 === i && (i = 50),
            new e(t, n, r, i)
          );
        }),
        e
      );
    })(Go),
    Yo = (function (t) {
      function e(e) {
        var n = t.call(this) || this;
        return (n.value = e), n;
      }
      return (
        n(e, t),
        (e.prototype.asBytes = function () {
          for (
            var t = this.value + (this.value.length % 2 == 1 ? "0" : ""),
              e = t.length,
              n = new Uint8Array(t.length / 2),
              r = 0,
              i = 0;
            r < e;

          ) {
            var o = parseInt(t.substring(r, r + 2), 16);
            (n[i] = o), (r += 2), (i += 1);
          }
          return n;
        }),
        (e.prototype.decodeText = function () {
          var t = this.asBytes();
          return ht(t) ? nt(t) : Ln(t);
        }),
        (e.prototype.decodeDate = function () {
          var t = this.decodeText(),
            e = N(t);
          if (!e) throw new er(t);
          return e;
        }),
        (e.prototype.asString = function () {
          return this.value;
        }),
        (e.prototype.clone = function () {
          return e.of(this.value);
        }),
        (e.prototype.toString = function () {
          return "<" + this.value + ">";
        }),
        (e.prototype.sizeInBytes = function () {
          return this.value.length + 2;
        }),
        (e.prototype.copyBytesInto = function (t, e) {
          return (
            (t[e++] = br.LessThan),
            (e += k(this.value, t, e)),
            (t[e++] = br.GreaterThan),
            this.value.length + 2
          );
        }),
        (e.of = function (t) {
          return new e(t);
        }),
        (e.fromText = function (t) {
          for (var n = Y(t), r = "", i = 0, o = n.length; i < o; i++)
            r += y(n[i], 4);
          return new e(r);
        }),
        e
      );
    })(co),
    Jo = (function () {
      function t(t, e) {
        (this.encoding =
          t === hn.ZapfDingbats
            ? yn.ZapfDingbats
            : t === hn.Symbol
            ? yn.Symbol
            : yn.WinAnsi),
          (this.font = fn.load(t)),
          (this.fontName = this.font.FontName),
          (this.customName = e);
      }
      return (
        (t.prototype.encodeText = function (t) {
          for (
            var e = this.encodeTextAsGlyphs(t),
              n = new Array(e.length),
              r = 0,
              i = e.length;
            r < i;
            r++
          )
            n[r] = m(e[r].code);
          return Yo.of(n.join(""));
        }),
        (t.prototype.widthOfTextAtSize = function (t, e) {
          for (
            var n = this.encodeTextAsGlyphs(t), r = 0, i = 0, o = n.length;
            i < o;
            i++
          ) {
            var a = n[i].name,
              s = (n[i + 1] || {}).name,
              l = this.font.getXAxisKerningForPair(a, s) || 0;
            r += this.widthOfGlyph(a) + l;
          }
          return r * (e / 1e3);
        }),
        (t.prototype.heightOfFontAtSize = function (t, e) {
          void 0 === e && (e = {});
          var n = e.descender,
            r = void 0 === n || n,
            i = this.font,
            o = i.Ascender,
            a = i.Descender,
            s = i.FontBBox,
            l = (o || s[3]) - (a || s[1]);
          return r || (l += a || 0), (l / 1e3) * t;
        }),
        (t.prototype.sizeOfFontAtHeight = function (t) {
          var e = this.font,
            n = e.Ascender,
            r = e.Descender,
            i = e.FontBBox;
          return (1e3 * t) / ((n || i[3]) - (r || i[1]));
        }),
        (t.prototype.embedIntoContext = function (t, e) {
          var n = t.obj({
            Type: "Font",
            Subtype: "Type1",
            BaseFont: this.customName || this.fontName,
            Encoding: this.encoding === yn.WinAnsi ? "WinAnsiEncoding" : void 0,
          });
          return e ? (t.assign(e, n), e) : t.register(n);
        }),
        (t.prototype.widthOfGlyph = function (t) {
          return this.font.getWidthOfGlyph(t) || 250;
        }),
        (t.prototype.encodeTextAsGlyphs = function (t) {
          for (
            var e = Array.from(t), n = new Array(e.length), r = 0, i = e.length;
            r < i;
            r++
          ) {
            var o = v(e[r]);
            n[r] = this.encoding.encodeUnicodeCodePoint(o);
          }
          return n;
        }),
        (t.for = function (e, n) {
          return new t(e, n);
        }),
        t
      );
    })(),
    Qo = function (t) {
      return (
        "/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange\n" +
        t.length +
        " beginbfchar\n" +
        t
          .map(function (t) {
            return t[0] + " " + t[1];
          })
          .join("\n") +
        "\nendbfchar\nendcmap\nCMapName currentdict /CMap defineresource pop\nend\nend"
      );
    },
    $o = function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      return "<" + t.join("") + ">";
    },
    ta = function (t) {
      return y(t, 4);
    },
    ea = function (t) {
      if (J(t)) return ta(t);
      if (Q(t)) {
        var e = $(t),
          n = tt(t);
        return "" + ta(e) + ta(n);
      }
      var r = m(t);
      throw new Error("0x" + r + " is not a valid UTF-8 or UTF-16 codepoint.");
    },
    na = (function (t) {
      function e(e) {
        var n = t.call(this) || this;
        return (n.value = e), n;
      }
      return (
        n(e, t),
        (e.prototype.asBytes = function () {
          for (
            var t = [],
              e = "",
              n = !1,
              r = function (e) {
                void 0 !== e && t.push(e), (n = !1);
              },
              i = 0,
              o = this.value.length;
            i < o;
            i++
          ) {
            var a = this.value[i],
              s = g(a),
              l = this.value[i + 1];
            n
              ? s === br.Newline || s === br.CarriageReturn
                ? r()
                : s === br.n
                ? r(br.Newline)
                : s === br.r
                ? r(br.CarriageReturn)
                : s === br.t
                ? r(br.Tab)
                : s === br.b
                ? r(br.Backspace)
                : s === br.f
                ? r(br.FormFeed)
                : s === br.LeftParen
                ? r(br.LeftParen)
                : s === br.RightParen
                ? r(br.RightParen)
                : s === br.Backspace
                ? r(br.BackSlash)
                : s >= br.Zero && s <= br.Seven
                ? (3 !== (e += a).length && l >= "0" && l <= "7") ||
                  (r(parseInt(e, 8)), (e = ""))
                : r(s)
              : s === br.BackSlash
              ? (n = !0)
              : r(s);
          }
          return new Uint8Array(t);
        }),
        (e.prototype.decodeText = function () {
          var t = this.asBytes();
          return ht(t) ? nt(t) : Ln(t);
        }),
        (e.prototype.decodeDate = function () {
          var t = this.decodeText(),
            e = N(t);
          if (!e) throw new er(t);
          return e;
        }),
        (e.prototype.asString = function () {
          return this.value;
        }),
        (e.prototype.clone = function () {
          return e.of(this.value);
        }),
        (e.prototype.toString = function () {
          return "(" + this.value + ")";
        }),
        (e.prototype.sizeInBytes = function () {
          return this.value.length + 2;
        }),
        (e.prototype.copyBytesInto = function (t, e) {
          return (
            (t[e++] = br.LeftParen),
            (e += k(this.value, t, e)),
            (t[e++] = br.RightParen),
            this.value.length + 2
          );
        }),
        (e.of = function (t) {
          return new e(t);
        }),
        (e.fromDate = function (t) {
          return new e(
            "D:" +
              x(String(t.getUTCFullYear()), 4, "0") +
              x(String(t.getUTCMonth() + 1), 2, "0") +
              x(String(t.getUTCDate()), 2, "0") +
              x(String(t.getUTCHours()), 2, "0") +
              x(String(t.getUTCMinutes()), 2, "0") +
              x(String(t.getUTCSeconds()), 2, "0") +
              "Z"
          );
        }),
        e
      );
    })(co),
    ra = (function () {
      function t(t, e, n, r) {
        var i = this;
        (this.allGlyphsInFontSortedById = function () {
          for (
            var t = new Array(i.font.characterSet.length), e = 0, n = t.length;
            e < n;
            e++
          ) {
            var r = i.font.characterSet[e];
            t[e] = i.font.glyphForCodePoint(r);
          }
          return q(t.sort(W), function (t) {
            return t.id;
          });
        }),
          (this.font = t),
          (this.scale = 1e3 / this.font.unitsPerEm),
          (this.fontData = e),
          (this.fontName = this.font.postscriptName || "Font"),
          (this.customName = n),
          (this.fontFeatures = r),
          (this.baseFontName = ""),
          (this.glyphCache = Kn.populatedBy(this.allGlyphsInFontSortedById));
      }
      return (
        (t.for = function (e, n, r, a) {
          return i(this, void 0, void 0, function () {
            return o(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4, e.create(n)];
                case 1:
                  return [2, new t(i.sent(), n, r, a)];
              }
            });
          });
        }),
        (t.prototype.encodeText = function (t) {
          for (
            var e = this.font.layout(t, this.fontFeatures).glyphs,
              n = new Array(e.length),
              r = 0,
              i = e.length;
            r < i;
            r++
          )
            n[r] = y(e[r].id, 4);
          return Yo.of(n.join(""));
        }),
        (t.prototype.widthOfTextAtSize = function (t, e) {
          for (
            var n = this.font.layout(t, this.fontFeatures).glyphs,
              r = 0,
              i = 0,
              o = n.length;
            i < o;
            i++
          )
            r += n[i].advanceWidth * this.scale;
          return r * (e / 1e3);
        }),
        (t.prototype.heightOfFontAtSize = function (t, e) {
          void 0 === e && (e = {});
          var n = e.descender,
            r = void 0 === n || n,
            i = this.font,
            o = i.ascent,
            a = i.descent,
            s = i.bbox,
            l = (o || s.maxY) * this.scale - (a || s.minY) * this.scale;
          return r || (l -= Math.abs(a) || 0), (l / 1e3) * t;
        }),
        (t.prototype.sizeOfFontAtHeight = function (t) {
          var e = this.font,
            n = e.ascent,
            r = e.descent,
            i = e.bbox;
          return (
            (1e3 * t) /
            ((n || i.maxY) * this.scale - (r || i.minY) * this.scale)
          );
        }),
        (t.prototype.embedIntoContext = function (t, e) {
          return (
            (this.baseFontName = this.customName || F(this.fontName)),
            this.embedFontDict(t, e)
          );
        }),
        (t.prototype.embedFontDict = function (t, e) {
          return i(this, void 0, void 0, function () {
            var n, r, i;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  return [4, this.embedCIDFontDict(t)];
                case 1:
                  return (
                    (n = o.sent()),
                    (r = this.embedUnicodeCmap(t)),
                    (i = t.obj({
                      Type: "Font",
                      Subtype: "Type0",
                      BaseFont: this.baseFontName,
                      Encoding: "Identity-H",
                      DescendantFonts: [n],
                      ToUnicode: r,
                    })),
                    e ? (t.assign(e, i), [2, e]) : [2, t.register(i)]
                  );
              }
            });
          });
        }),
        (t.prototype.isCFF = function () {
          return this.font.cff;
        }),
        (t.prototype.embedCIDFontDict = function (t) {
          return i(this, void 0, void 0, function () {
            var e, n;
            return o(this, function (r) {
              switch (r.label) {
                case 0:
                  return [4, this.embedFontDescriptor(t)];
                case 1:
                  return (
                    (e = r.sent()),
                    (n = t.obj({
                      Type: "Font",
                      Subtype: this.isCFF() ? "CIDFontType0" : "CIDFontType2",
                      CIDToGIDMap: "Identity",
                      BaseFont: this.baseFontName,
                      CIDSystemInfo: {
                        Registry: na.of("Adobe"),
                        Ordering: na.of("Identity"),
                        Supplement: 0,
                      },
                      FontDescriptor: e,
                      W: this.computeWidths(),
                    })),
                    [2, t.register(n)]
                  );
              }
            });
          });
        }),
        (t.prototype.embedFontDescriptor = function (t) {
          return i(this, void 0, void 0, function () {
            var e, n, r, i, a, s, l, h, u, c, d, f, p, g, v;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  return [4, this.embedFontStream(t)];
                case 1:
                  return (
                    (e = o.sent()),
                    (n = this.scale),
                    (r = this.font),
                    (i = r.italicAngle),
                    (a = r.ascent),
                    (s = r.descent),
                    (l = r.capHeight),
                    (h = r.xHeight),
                    (u = this.font.bbox),
                    (c = u.minX),
                    (d = u.minY),
                    (f = u.maxX),
                    (p = u.maxY),
                    (g = t.obj(
                      (((v = {
                        Type: "FontDescriptor",
                        FontName: this.baseFontName,
                        Flags:
                          ((w = this.font),
                          (x = w["OS/2"] ? w["OS/2"].sFamilyClass : 0),
                          (y = {
                            fixedPitch: w.post.isFixedPitch,
                            serif: 1 <= x && x <= 7,
                            symbolic: !0,
                            script: 10 === x,
                            italic: w.head.macStyle.italic,
                          }),
                          (m = 0),
                          (b = function (t) {
                            m |= 1 << (t - 1);
                          }),
                          y.fixedPitch && b(1),
                          y.serif && b(2),
                          y.symbolic && b(3),
                          y.script && b(4),
                          y.nonsymbolic && b(6),
                          y.italic && b(7),
                          y.allCap && b(17),
                          y.smallCap && b(18),
                          y.forceBold && b(19),
                          m),
                        FontBBox: [c * n, d * n, f * n, p * n],
                        ItalicAngle: i,
                        Ascent: a * n,
                        Descent: s * n,
                        CapHeight: (l || a) * n,
                        XHeight: (h || 0) * n,
                        StemV: 0,
                      })[this.isCFF() ? "FontFile3" : "FontFile2"] = e),
                      v)
                    )),
                    [2, t.register(g)]
                  );
              }
              var y, m, b, w, x;
            });
          });
        }),
        (t.prototype.serializeFont = function () {
          return i(this, void 0, void 0, function () {
            return o(this, function (t) {
              return [2, this.fontData];
            });
          });
        }),
        (t.prototype.embedFontStream = function (t) {
          return i(this, void 0, void 0, function () {
            var e, n, r;
            return o(this, function (i) {
              switch (i.label) {
                case 0:
                  return (r = (n = t).flateStream), [4, this.serializeFont()];
                case 1:
                  return (
                    (e = r.apply(n, [
                      i.sent(),
                      { Subtype: this.isCFF() ? "CIDFontType0C" : void 0 },
                    ])),
                    [2, t.register(e)]
                  );
              }
            });
          });
        }),
        (t.prototype.embedUnicodeCmap = function (t) {
          var e = (function (t, e) {
              for (
                var n = new Array(t.length), r = 0, i = t.length;
                r < i;
                r++
              ) {
                var o = t[r],
                  a = $o(ta(e(o))),
                  s = $o.apply(void 0, o.codePoints.map(ea));
                n[r] = [a, s];
              }
              return Qo(n);
            })(this.glyphCache.access(), this.glyphId.bind(this)),
            n = t.flateStream(e);
          return t.register(n);
        }),
        (t.prototype.glyphId = function (t) {
          return t ? t.id : -1;
        }),
        (t.prototype.computeWidths = function () {
          for (
            var t = this.glyphCache.access(),
              e = [],
              n = [],
              r = 0,
              i = t.length;
            r < i;
            r++
          ) {
            var o = t[r],
              a = t[r - 1],
              s = this.glyphId(o),
              l = this.glyphId(a);
            0 === r
              ? e.push(s)
              : s - l != 1 && (e.push(n), e.push(s), (n = [])),
              n.push(o.advanceWidth * this.scale);
          }
          return e.push(n), e;
        }),
        t
      );
    })(),
    ia = (function (t) {
      function e(e, n, r, i) {
        var o = t.call(this, e, n, r, i) || this;
        return (
          (o.subset = o.font.createSubset()),
          (o.glyphs = []),
          (o.glyphCache = Kn.populatedBy(function () {
            return o.glyphs;
          })),
          (o.glyphIdMap = new Map()),
          o
        );
      }
      return (
        n(e, t),
        (e.for = function (t, n, r, a) {
          return i(this, void 0, void 0, function () {
            return o(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4, t.create(n)];
                case 1:
                  return [2, new e(i.sent(), n, r, a)];
              }
            });
          });
        }),
        (e.prototype.encodeText = function (t) {
          for (
            var e = this.font.layout(t, this.fontFeatures).glyphs,
              n = new Array(e.length),
              r = 0,
              i = e.length;
            r < i;
            r++
          ) {
            var o = e[r],
              a = this.subset.includeGlyph(o);
            (this.glyphs[a - 1] = o),
              this.glyphIdMap.set(o.id, a),
              (n[r] = y(a, 4));
          }
          return this.glyphCache.invalidate(), Yo.of(n.join(""));
        }),
        (e.prototype.isCFF = function () {
          return this.subset.cff;
        }),
        (e.prototype.glyphId = function (t) {
          return t ? this.glyphIdMap.get(t.id) : -1;
        }),
        (e.prototype.serializeFont = function () {
          var t = this;
          return new Promise(function (e, n) {
            var r = [];
            t.subset
              .encodeStream()
              .on("data", function (t) {
                return r.push(t);
              })
              .on("end", function () {
                return e(U(r));
              })
              .on("error", function (t) {
                return n(t);
              });
          });
        }),
        e
      );
    })(ra);
  ((_o = t.AFRelationship || (t.AFRelationship = {})).Source = "Source"),
    (_o.Data = "Data"),
    (_o.Alternative = "Alternative"),
    (_o.Supplement = "Supplement"),
    (_o.EncryptedPayload = "EncryptedPayload"),
    (_o.FormData = "EncryptedPayload"),
    (_o.Schema = "Schema"),
    (_o.Unspecified = "Unspecified");
  var oa,
    aa = (function () {
      function t(t, e, n) {
        void 0 === n && (n = {}),
          (this.fileData = t),
          (this.fileName = e),
          (this.options = n);
      }
      return (
        (t.for = function (e, n, r) {
          return void 0 === r && (r = {}), new t(e, n, r);
        }),
        (t.prototype.embedIntoContext = function (t, e) {
          return i(this, void 0, void 0, function () {
            var n, r, i, a, s, l, h, u, c;
            return o(this, function (o) {
              return (
                (n = this.options),
                (r = n.mimeType),
                (i = n.description),
                (a = n.creationDate),
                (s = n.modificationDate),
                (l = n.afRelationship),
                (h = t.flateStream(this.fileData, {
                  Type: "EmbeddedFile",
                  Subtype: null != r ? r : void 0,
                  Params: {
                    Size: this.fileData.length,
                    CreationDate: a ? na.fromDate(a) : void 0,
                    ModDate: s ? na.fromDate(s) : void 0,
                  },
                })),
                (u = t.register(h)),
                (c = t.obj({
                  Type: "Filespec",
                  F: na.of(this.fileName),
                  UF: Yo.fromText(this.fileName),
                  EF: { F: u },
                  Desc: i ? Yo.fromText(i) : void 0,
                  AFRelationship: null != l ? l : void 0,
                })),
                e ? (t.assign(e, c), [2, e]) : [2, t.register(c)]
              );
            });
          });
        }),
        t
      );
    })(),
    sa = [
      65472, 65473, 65474, 65475, 65477, 65478, 65479, 65480, 65481, 65482,
      65483, 65484, 65485, 65486, 65487,
    ];
  !(function (t) {
    (t.DeviceGray = "DeviceGray"),
      (t.DeviceRGB = "DeviceRGB"),
      (t.DeviceCMYK = "DeviceCMYK");
  })(oa || (oa = {}));
  var la = { 1: oa.DeviceGray, 3: oa.DeviceRGB, 4: oa.DeviceCMYK },
    ha = (function () {
      function t(t, e, n, r, i) {
        (this.imageData = t),
          (this.bitsPerComponent = e),
          (this.width = n),
          (this.height = r),
          (this.colorSpace = i);
      }
      return (
        (t.for = function (e) {
          return i(this, void 0, void 0, function () {
            var n, r, i, a, s, l, h, u;
            return o(this, function (o) {
              if (((n = new DataView(e.buffer)), 65496 !== n.getUint16(0)))
                throw new Error("SOI not found in JPEG");
              for (
                r = 2;
                r < n.byteLength &&
                ((i = n.getUint16(r)), (r += 2), !sa.includes(i));

              )
                r += n.getUint16(r);
              if (!sa.includes(i)) throw new Error("Invalid JPEG");
              if (
                ((r += 2),
                (a = n.getUint8(r++)),
                (s = n.getUint16(r)),
                (r += 2),
                (l = n.getUint16(r)),
                (r += 2),
                (h = n.getUint8(r++)),
                !(u = la[h]))
              )
                throw new Error("Unknown JPEG channel.");
              return [2, new t(e, a, l, s, u)];
            });
          });
        }),
        (t.prototype.embedIntoContext = function (t, e) {
          return i(this, void 0, void 0, function () {
            var n;
            return o(this, function (r) {
              return (
                (n = t.stream(this.imageData, {
                  Type: "XObject",
                  Subtype: "Image",
                  BitsPerComponent: this.bitsPerComponent,
                  Width: this.width,
                  Height: this.height,
                  ColorSpace: this.colorSpace,
                  Filter: "DCTDecode",
                  Decode:
                    this.colorSpace === oa.DeviceCMYK
                      ? [1, 0, 1, 0, 1, 0, 1, 0]
                      : void 0,
                })),
                e ? (t.assign(e, n), [2, e]) : [2, t.register(n)]
              );
            });
          });
        }),
        t
      );
    })(),
    ua = pt(function (t, e) {
      var n =
        "undefined" != typeof Uint8Array &&
        "undefined" != typeof Uint16Array &&
        "undefined" != typeof Int32Array;
      function r(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }
      (e.assign = function (t) {
        for (var e = Array.prototype.slice.call(arguments, 1); e.length; ) {
          var n = e.shift();
          if (n) {
            if ("object" != typeof n)
              throw new TypeError(n + "must be non-object");
            for (var i in n) r(n, i) && (t[i] = n[i]);
          }
        }
        return t;
      }),
        (e.shrinkBuf = function (t, e) {
          return t.length === e
            ? t
            : t.subarray
            ? t.subarray(0, e)
            : ((t.length = e), t);
        });
      var i = {
          arraySet: function (t, e, n, r, i) {
            if (e.subarray && t.subarray) t.set(e.subarray(n, n + r), i);
            else for (var o = 0; o < r; o++) t[i + o] = e[n + o];
          },
          flattenChunks: function (t) {
            var e, n, r, i, o, a;
            for (r = 0, e = 0, n = t.length; e < n; e++) r += t[e].length;
            for (a = new Uint8Array(r), i = 0, e = 0, n = t.length; e < n; e++)
              (o = t[e]), a.set(o, i), (i += o.length);
            return a;
          },
        },
        o = {
          arraySet: function (t, e, n, r, i) {
            for (var o = 0; o < r; o++) t[i + o] = e[n + o];
          },
          flattenChunks: function (t) {
            return [].concat.apply([], t);
          },
        };
      (e.setTyped = function (t) {
        t
          ? ((e.Buf8 = Uint8Array),
            (e.Buf16 = Uint16Array),
            (e.Buf32 = Int32Array),
            e.assign(e, i))
          : ((e.Buf8 = Array),
            (e.Buf16 = Array),
            (e.Buf32 = Array),
            e.assign(e, o));
      }),
        e.setTyped(n);
    });
  function ca(t) {
    for (var e = t.length; --e >= 0; ) t[e] = 0;
  }
  var da = [
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
      5, 5, 5, 0,
    ],
    fa = [
      0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
      11, 11, 12, 12, 13, 13,
    ],
    pa = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
    ga = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
    va = new Array(576);
  ca(va);
  var ya = new Array(60);
  ca(ya);
  var ma = new Array(512);
  ca(ma);
  var ba = new Array(256);
  ca(ba);
  var wa = new Array(29);
  ca(wa);
  var xa,
    ka,
    Fa,
    Sa = new Array(30);
  function Ca(t, e, n, r, i) {
    (this.static_tree = t),
      (this.extra_bits = e),
      (this.extra_base = n),
      (this.elems = r),
      (this.max_length = i),
      (this.has_stree = t && t.length);
  }
  function Aa(t, e) {
    (this.dyn_tree = t), (this.max_code = 0), (this.stat_desc = e);
  }
  function Ta(t) {
    return t < 256 ? ma[t] : ma[256 + (t >>> 7)];
  }
  function Pa(t, e) {
    (t.pending_buf[t.pending++] = 255 & e),
      (t.pending_buf[t.pending++] = (e >>> 8) & 255);
  }
  function za(t, e, n) {
    t.bi_valid > 16 - n
      ? ((t.bi_buf |= (e << t.bi_valid) & 65535),
        Pa(t, t.bi_buf),
        (t.bi_buf = e >> (16 - t.bi_valid)),
        (t.bi_valid += n - 16))
      : ((t.bi_buf |= (e << t.bi_valid) & 65535), (t.bi_valid += n));
  }
  function Ra(t, e, n) {
    za(t, n[2 * e], n[2 * e + 1]);
  }
  function Oa(t, e) {
    var n = 0;
    do {
      (n |= 1 & t), (t >>>= 1), (n <<= 1);
    } while (--e > 0);
    return n >>> 1;
  }
  function Da(t, e, n) {
    var r,
      i,
      o = new Array(16),
      a = 0;
    for (r = 1; r <= 15; r++) o[r] = a = (a + n[r - 1]) << 1;
    for (i = 0; i <= e; i++) {
      var s = t[2 * i + 1];
      0 !== s && (t[2 * i] = Oa(o[s]++, s));
    }
  }
  function Ba(t) {
    var e;
    for (e = 0; e < 286; e++) t.dyn_ltree[2 * e] = 0;
    for (e = 0; e < 30; e++) t.dyn_dtree[2 * e] = 0;
    for (e = 0; e < 19; e++) t.bl_tree[2 * e] = 0;
    (t.dyn_ltree[512] = 1),
      (t.opt_len = t.static_len = 0),
      (t.last_lit = t.matches = 0);
  }
  function Na(t) {
    t.bi_valid > 8
      ? Pa(t, t.bi_buf)
      : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf),
      (t.bi_buf = 0),
      (t.bi_valid = 0);
  }
  function Ea(t, e, n, r) {
    var i = 2 * e,
      o = 2 * n;
    return t[i] < t[o] || (t[i] === t[o] && r[e] <= r[n]);
  }
  function ja(t, e, n) {
    for (
      var r = t.heap[n], i = n << 1;
      i <= t.heap_len &&
      (i < t.heap_len && Ea(e, t.heap[i + 1], t.heap[i], t.depth) && i++,
      !Ea(e, r, t.heap[i], t.depth));

    )
      (t.heap[n] = t.heap[i]), (n = i), (i <<= 1);
    t.heap[n] = r;
  }
  function Ma(t, e, n) {
    var r,
      i,
      o,
      a,
      s = 0;
    if (0 !== t.last_lit)
      do {
        (r =
          (t.pending_buf[t.d_buf + 2 * s] << 8) |
          t.pending_buf[t.d_buf + 2 * s + 1]),
          (i = t.pending_buf[t.l_buf + s]),
          s++,
          0 === r
            ? Ra(t, i, e)
            : (Ra(t, (o = ba[i]) + 256 + 1, e),
              0 !== (a = da[o]) && za(t, (i -= wa[o]), a),
              Ra(t, (o = Ta(--r)), n),
              0 !== (a = fa[o]) && za(t, (r -= Sa[o]), a));
      } while (s < t.last_lit);
    Ra(t, 256, e);
  }
  function Ia(t, e) {
    var n,
      r,
      i,
      o = e.dyn_tree,
      a = e.stat_desc.static_tree,
      s = e.stat_desc.has_stree,
      l = e.stat_desc.elems,
      h = -1;
    for (t.heap_len = 0, t.heap_max = 573, n = 0; n < l; n++)
      0 !== o[2 * n]
        ? ((t.heap[++t.heap_len] = h = n), (t.depth[n] = 0))
        : (o[2 * n + 1] = 0);
    for (; t.heap_len < 2; )
      (o[2 * (i = t.heap[++t.heap_len] = h < 2 ? ++h : 0)] = 1),
        (t.depth[i] = 0),
        t.opt_len--,
        s && (t.static_len -= a[2 * i + 1]);
    for (e.max_code = h, n = t.heap_len >> 1; n >= 1; n--) ja(t, o, n);
    i = l;
    do {
      (n = t.heap[1]),
        (t.heap[1] = t.heap[t.heap_len--]),
        ja(t, o, 1),
        (r = t.heap[1]),
        (t.heap[--t.heap_max] = n),
        (t.heap[--t.heap_max] = r),
        (o[2 * i] = o[2 * n] + o[2 * r]),
        (t.depth[i] = (t.depth[n] >= t.depth[r] ? t.depth[n] : t.depth[r]) + 1),
        (o[2 * n + 1] = o[2 * r + 1] = i),
        (t.heap[1] = i++),
        ja(t, o, 1);
    } while (t.heap_len >= 2);
    (t.heap[--t.heap_max] = t.heap[1]),
      (function (t, e) {
        var n,
          r,
          i,
          o,
          a,
          s,
          l = e.dyn_tree,
          h = e.max_code,
          u = e.stat_desc.static_tree,
          c = e.stat_desc.has_stree,
          d = e.stat_desc.extra_bits,
          f = e.stat_desc.extra_base,
          p = e.stat_desc.max_length,
          g = 0;
        for (o = 0; o <= 15; o++) t.bl_count[o] = 0;
        for (
          l[2 * t.heap[t.heap_max] + 1] = 0, n = t.heap_max + 1;
          n < 573;
          n++
        )
          (o = l[2 * l[2 * (r = t.heap[n]) + 1] + 1] + 1) > p && ((o = p), g++),
            (l[2 * r + 1] = o),
            r > h ||
              (t.bl_count[o]++,
              (a = 0),
              r >= f && (a = d[r - f]),
              (s = l[2 * r]),
              (t.opt_len += s * (o + a)),
              c && (t.static_len += s * (u[2 * r + 1] + a)));
        if (0 !== g) {
          do {
            for (o = p - 1; 0 === t.bl_count[o]; ) o--;
            t.bl_count[o]--,
              (t.bl_count[o + 1] += 2),
              t.bl_count[p]--,
              (g -= 2);
          } while (g > 0);
          for (o = p; 0 !== o; o--)
            for (r = t.bl_count[o]; 0 !== r; )
              (i = t.heap[--n]) > h ||
                (l[2 * i + 1] !== o &&
                  ((t.opt_len += (o - l[2 * i + 1]) * l[2 * i]),
                  (l[2 * i + 1] = o)),
                r--);
        }
      })(t, e),
      Da(o, h, t.bl_count);
  }
  function Ua(t, e, n) {
    var r,
      i,
      o = -1,
      a = e[1],
      s = 0,
      l = 7,
      h = 4;
    for (
      0 === a && ((l = 138), (h = 3)), e[2 * (n + 1) + 1] = 65535, r = 0;
      r <= n;
      r++
    )
      (i = a),
        (a = e[2 * (r + 1) + 1]),
        (++s < l && i === a) ||
          (s < h
            ? (t.bl_tree[2 * i] += s)
            : 0 !== i
            ? (i !== o && t.bl_tree[2 * i]++, t.bl_tree[32]++)
            : s <= 10
            ? t.bl_tree[34]++
            : t.bl_tree[36]++,
          (s = 0),
          (o = i),
          0 === a
            ? ((l = 138), (h = 3))
            : i === a
            ? ((l = 6), (h = 3))
            : ((l = 7), (h = 4)));
  }
  function Va(t, e, n) {
    var r,
      i,
      o = -1,
      a = e[1],
      s = 0,
      l = 7,
      h = 4;
    for (0 === a && ((l = 138), (h = 3)), r = 0; r <= n; r++)
      if (((i = a), (a = e[2 * (r + 1) + 1]), !(++s < l && i === a))) {
        if (s < h)
          do {
            Ra(t, i, t.bl_tree);
          } while (0 != --s);
        else
          0 !== i
            ? (i !== o && (Ra(t, i, t.bl_tree), s--),
              Ra(t, 16, t.bl_tree),
              za(t, s - 3, 2))
            : s <= 10
            ? (Ra(t, 17, t.bl_tree), za(t, s - 3, 3))
            : (Ra(t, 18, t.bl_tree), za(t, s - 11, 7));
        (s = 0),
          (o = i),
          0 === a
            ? ((l = 138), (h = 3))
            : i === a
            ? ((l = 6), (h = 3))
            : ((l = 7), (h = 4));
      }
  }
  ca(Sa);
  var Wa = !1;
  function qa(t, e, n, r) {
    za(t, 0 + (r ? 1 : 0), 3),
      (function (t, e, n, r) {
        Na(t),
          r && (Pa(t, n), Pa(t, ~n)),
          ua.arraySet(t.pending_buf, t.window, e, n, t.pending),
          (t.pending += n);
      })(t, e, n, !0);
  }
  var La = {
    _tr_init: function (t) {
      Wa ||
        (!(function () {
          var t,
            e,
            n,
            r,
            i,
            o = new Array(16);
          for (n = 0, r = 0; r < 28; r++)
            for (wa[r] = n, t = 0; t < 1 << da[r]; t++) ba[n++] = r;
          for (ba[n - 1] = r, i = 0, r = 0; r < 16; r++)
            for (Sa[r] = i, t = 0; t < 1 << fa[r]; t++) ma[i++] = r;
          for (i >>= 7; r < 30; r++)
            for (Sa[r] = i << 7, t = 0; t < 1 << (fa[r] - 7); t++)
              ma[256 + i++] = r;
          for (e = 0; e <= 15; e++) o[e] = 0;
          for (t = 0; t <= 143; ) (va[2 * t + 1] = 8), t++, o[8]++;
          for (; t <= 255; ) (va[2 * t + 1] = 9), t++, o[9]++;
          for (; t <= 279; ) (va[2 * t + 1] = 7), t++, o[7]++;
          for (; t <= 287; ) (va[2 * t + 1] = 8), t++, o[8]++;
          for (Da(va, 287, o), t = 0; t < 30; t++)
            (ya[2 * t + 1] = 5), (ya[2 * t] = Oa(t, 5));
          (xa = new Ca(va, da, 257, 286, 15)),
            (ka = new Ca(ya, fa, 0, 30, 15)),
            (Fa = new Ca(new Array(0), pa, 0, 19, 7));
        })(),
        (Wa = !0)),
        (t.l_desc = new Aa(t.dyn_ltree, xa)),
        (t.d_desc = new Aa(t.dyn_dtree, ka)),
        (t.bl_desc = new Aa(t.bl_tree, Fa)),
        (t.bi_buf = 0),
        (t.bi_valid = 0),
        Ba(t);
    },
    _tr_stored_block: qa,
    _tr_flush_block: function (t, e, n, r) {
      var i,
        o,
        a = 0;
      t.level > 0
        ? (2 === t.strm.data_type &&
            (t.strm.data_type = (function (t) {
              var e,
                n = 4093624447;
              for (e = 0; e <= 31; e++, n >>>= 1)
                if (1 & n && 0 !== t.dyn_ltree[2 * e]) return 0;
              if (
                0 !== t.dyn_ltree[18] ||
                0 !== t.dyn_ltree[20] ||
                0 !== t.dyn_ltree[26]
              )
                return 1;
              for (e = 32; e < 256; e++) if (0 !== t.dyn_ltree[2 * e]) return 1;
              return 0;
            })(t)),
          Ia(t, t.l_desc),
          Ia(t, t.d_desc),
          (a = (function (t) {
            var e;
            for (
              Ua(t, t.dyn_ltree, t.l_desc.max_code),
                Ua(t, t.dyn_dtree, t.d_desc.max_code),
                Ia(t, t.bl_desc),
                e = 18;
              e >= 3 && 0 === t.bl_tree[2 * ga[e] + 1];
              e--
            );
            return (t.opt_len += 3 * (e + 1) + 5 + 5 + 4), e;
          })(t)),
          (i = (t.opt_len + 3 + 7) >>> 3),
          (o = (t.static_len + 3 + 7) >>> 3) <= i && (i = o))
        : (i = o = n + 5),
        n + 4 <= i && -1 !== e
          ? qa(t, e, n, r)
          : 4 === t.strategy || o === i
          ? (za(t, 2 + (r ? 1 : 0), 3), Ma(t, va, ya))
          : (za(t, 4 + (r ? 1 : 0), 3),
            (function (t, e, n, r) {
              var i;
              for (
                za(t, e - 257, 5), za(t, n - 1, 5), za(t, r - 4, 4), i = 0;
                i < r;
                i++
              )
                za(t, t.bl_tree[2 * ga[i] + 1], 3);
              Va(t, t.dyn_ltree, e - 1), Va(t, t.dyn_dtree, n - 1);
            })(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, a + 1),
            Ma(t, t.dyn_ltree, t.dyn_dtree)),
        Ba(t),
        r && Na(t);
    },
    _tr_tally: function (t, e, n) {
      return (
        (t.pending_buf[t.d_buf + 2 * t.last_lit] = (e >>> 8) & 255),
        (t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e),
        (t.pending_buf[t.l_buf + t.last_lit] = 255 & n),
        t.last_lit++,
        0 === e
          ? t.dyn_ltree[2 * n]++
          : (t.matches++,
            e--,
            t.dyn_ltree[2 * (ba[n] + 256 + 1)]++,
            t.dyn_dtree[2 * Ta(e)]++),
        t.last_lit === t.lit_bufsize - 1
      );
    },
    _tr_align: function (t) {
      za(t, 2, 3),
        Ra(t, 256, va),
        (function (t) {
          16 === t.bi_valid
            ? (Pa(t, t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0))
            : t.bi_valid >= 8 &&
              ((t.pending_buf[t.pending++] = 255 & t.bi_buf),
              (t.bi_buf >>= 8),
              (t.bi_valid -= 8));
        })(t);
    },
  };
  var Ka = function (t, e, n, r) {
    for (
      var i = (65535 & t) | 0, o = ((t >>> 16) & 65535) | 0, a = 0;
      0 !== n;

    ) {
      n -= a = n > 2e3 ? 2e3 : n;
      do {
        o = (o + (i = (i + e[r++]) | 0)) | 0;
      } while (--a);
      (i %= 65521), (o %= 65521);
    }
    return i | (o << 16) | 0;
  };
  var Ga = (function () {
    for (var t, e = [], n = 0; n < 256; n++) {
      t = n;
      for (var r = 0; r < 8; r++) t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
      e[n] = t;
    }
    return e;
  })();
  var Ha,
    _a = function (t, e, n, r) {
      var i = Ga,
        o = r + n;
      t ^= -1;
      for (var a = r; a < o; a++) t = (t >>> 8) ^ i[255 & (t ^ e[a])];
      return -1 ^ t;
    },
    Xa = {
      2: "need dictionary",
      1: "stream end",
      0: "",
      "-1": "file error",
      "-2": "stream error",
      "-3": "data error",
      "-4": "insufficient memory",
      "-5": "buffer error",
      "-6": "incompatible version",
    };
  function Za(t, e) {
    return (t.msg = Xa[e]), e;
  }
  function Ya(t) {
    return (t << 1) - (t > 4 ? 9 : 0);
  }
  function Ja(t) {
    for (var e = t.length; --e >= 0; ) t[e] = 0;
  }
  function Qa(t) {
    var e = t.state,
      n = e.pending;
    n > t.avail_out && (n = t.avail_out),
      0 !== n &&
        (ua.arraySet(t.output, e.pending_buf, e.pending_out, n, t.next_out),
        (t.next_out += n),
        (e.pending_out += n),
        (t.total_out += n),
        (t.avail_out -= n),
        (e.pending -= n),
        0 === e.pending && (e.pending_out = 0));
  }
  function $a(t, e) {
    La._tr_flush_block(
      t,
      t.block_start >= 0 ? t.block_start : -1,
      t.strstart - t.block_start,
      e
    ),
      (t.block_start = t.strstart),
      Qa(t.strm);
  }
  function ts(t, e) {
    t.pending_buf[t.pending++] = e;
  }
  function es(t, e) {
    (t.pending_buf[t.pending++] = (e >>> 8) & 255),
      (t.pending_buf[t.pending++] = 255 & e);
  }
  function ns(t, e, n, r) {
    var i = t.avail_in;
    return (
      i > r && (i = r),
      0 === i
        ? 0
        : ((t.avail_in -= i),
          ua.arraySet(e, t.input, t.next_in, i, n),
          1 === t.state.wrap
            ? (t.adler = Ka(t.adler, e, i, n))
            : 2 === t.state.wrap && (t.adler = _a(t.adler, e, i, n)),
          (t.next_in += i),
          (t.total_in += i),
          i)
    );
  }
  function rs(t, e) {
    var n,
      r,
      i = t.max_chain_length,
      o = t.strstart,
      a = t.prev_length,
      s = t.nice_match,
      l = t.strstart > t.w_size - 262 ? t.strstart - (t.w_size - 262) : 0,
      h = t.window,
      u = t.w_mask,
      c = t.prev,
      d = t.strstart + 258,
      f = h[o + a - 1],
      p = h[o + a];
    t.prev_length >= t.good_match && (i >>= 2),
      s > t.lookahead && (s = t.lookahead);
    do {
      if (
        h[(n = e) + a] === p &&
        h[n + a - 1] === f &&
        h[n] === h[o] &&
        h[++n] === h[o + 1]
      ) {
        (o += 2), n++;
        do {} while (
          h[++o] === h[++n] &&
          h[++o] === h[++n] &&
          h[++o] === h[++n] &&
          h[++o] === h[++n] &&
          h[++o] === h[++n] &&
          h[++o] === h[++n] &&
          h[++o] === h[++n] &&
          h[++o] === h[++n] &&
          o < d
        );
        if (((r = 258 - (d - o)), (o = d - 258), r > a)) {
          if (((t.match_start = e), (a = r), r >= s)) break;
          (f = h[o + a - 1]), (p = h[o + a]);
        }
      }
    } while ((e = c[e & u]) > l && 0 != --i);
    return a <= t.lookahead ? a : t.lookahead;
  }
  function is(t) {
    var e,
      n,
      r,
      i,
      o,
      a = t.w_size;
    do {
      if (
        ((i = t.window_size - t.lookahead - t.strstart),
        t.strstart >= a + (a - 262))
      ) {
        ua.arraySet(t.window, t.window, a, a, 0),
          (t.match_start -= a),
          (t.strstart -= a),
          (t.block_start -= a),
          (e = n = t.hash_size);
        do {
          (r = t.head[--e]), (t.head[e] = r >= a ? r - a : 0);
        } while (--n);
        e = n = a;
        do {
          (r = t.prev[--e]), (t.prev[e] = r >= a ? r - a : 0);
        } while (--n);
        i += a;
      }
      if (0 === t.strm.avail_in) break;
      if (
        ((n = ns(t.strm, t.window, t.strstart + t.lookahead, i)),
        (t.lookahead += n),
        t.lookahead + t.insert >= 3)
      )
        for (
          o = t.strstart - t.insert,
            t.ins_h = t.window[o],
            t.ins_h =
              ((t.ins_h << t.hash_shift) ^ t.window[o + 1]) & t.hash_mask;
          t.insert &&
          ((t.ins_h =
            ((t.ins_h << t.hash_shift) ^ t.window[o + 3 - 1]) & t.hash_mask),
          (t.prev[o & t.w_mask] = t.head[t.ins_h]),
          (t.head[t.ins_h] = o),
          o++,
          t.insert--,
          !(t.lookahead + t.insert < 3));

        );
    } while (t.lookahead < 262 && 0 !== t.strm.avail_in);
  }
  function os(t, e) {
    for (var n, r; ; ) {
      if (t.lookahead < 262) {
        if ((is(t), t.lookahead < 262 && 0 === e)) return 1;
        if (0 === t.lookahead) break;
      }
      if (
        ((n = 0),
        t.lookahead >= 3 &&
          ((t.ins_h =
            ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 3 - 1]) &
            t.hash_mask),
          (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
          (t.head[t.ins_h] = t.strstart)),
        0 !== n &&
          t.strstart - n <= t.w_size - 262 &&
          (t.match_length = rs(t, n)),
        t.match_length >= 3)
      )
        if (
          ((r = La._tr_tally(
            t,
            t.strstart - t.match_start,
            t.match_length - 3
          )),
          (t.lookahead -= t.match_length),
          t.match_length <= t.max_lazy_match && t.lookahead >= 3)
        ) {
          t.match_length--;
          do {
            t.strstart++,
              (t.ins_h =
                ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 3 - 1]) &
                t.hash_mask),
              (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
              (t.head[t.ins_h] = t.strstart);
          } while (0 != --t.match_length);
          t.strstart++;
        } else
          (t.strstart += t.match_length),
            (t.match_length = 0),
            (t.ins_h = t.window[t.strstart]),
            (t.ins_h =
              ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 1]) &
              t.hash_mask);
      else
        (r = La._tr_tally(t, 0, t.window[t.strstart])),
          t.lookahead--,
          t.strstart++;
      if (r && ($a(t, !1), 0 === t.strm.avail_out)) return 1;
    }
    return (
      (t.insert = t.strstart < 2 ? t.strstart : 2),
      4 === e
        ? ($a(t, !0), 0 === t.strm.avail_out ? 3 : 4)
        : t.last_lit && ($a(t, !1), 0 === t.strm.avail_out)
        ? 1
        : 2
    );
  }
  function as(t, e) {
    for (var n, r, i; ; ) {
      if (t.lookahead < 262) {
        if ((is(t), t.lookahead < 262 && 0 === e)) return 1;
        if (0 === t.lookahead) break;
      }
      if (
        ((n = 0),
        t.lookahead >= 3 &&
          ((t.ins_h =
            ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 3 - 1]) &
            t.hash_mask),
          (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
          (t.head[t.ins_h] = t.strstart)),
        (t.prev_length = t.match_length),
        (t.prev_match = t.match_start),
        (t.match_length = 2),
        0 !== n &&
          t.prev_length < t.max_lazy_match &&
          t.strstart - n <= t.w_size - 262 &&
          ((t.match_length = rs(t, n)),
          t.match_length <= 5 &&
            (1 === t.strategy ||
              (3 === t.match_length && t.strstart - t.match_start > 4096)) &&
            (t.match_length = 2)),
        t.prev_length >= 3 && t.match_length <= t.prev_length)
      ) {
        (i = t.strstart + t.lookahead - 3),
          (r = La._tr_tally(
            t,
            t.strstart - 1 - t.prev_match,
            t.prev_length - 3
          )),
          (t.lookahead -= t.prev_length - 1),
          (t.prev_length -= 2);
        do {
          ++t.strstart <= i &&
            ((t.ins_h =
              ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 3 - 1]) &
              t.hash_mask),
            (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
            (t.head[t.ins_h] = t.strstart));
        } while (0 != --t.prev_length);
        if (
          ((t.match_available = 0),
          (t.match_length = 2),
          t.strstart++,
          r && ($a(t, !1), 0 === t.strm.avail_out))
        )
          return 1;
      } else if (t.match_available) {
        if (
          ((r = La._tr_tally(t, 0, t.window[t.strstart - 1])) && $a(t, !1),
          t.strstart++,
          t.lookahead--,
          0 === t.strm.avail_out)
        )
          return 1;
      } else (t.match_available = 1), t.strstart++, t.lookahead--;
    }
    return (
      t.match_available &&
        ((r = La._tr_tally(t, 0, t.window[t.strstart - 1])),
        (t.match_available = 0)),
      (t.insert = t.strstart < 2 ? t.strstart : 2),
      4 === e
        ? ($a(t, !0), 0 === t.strm.avail_out ? 3 : 4)
        : t.last_lit && ($a(t, !1), 0 === t.strm.avail_out)
        ? 1
        : 2
    );
  }
  function ss(t, e, n, r, i) {
    (this.good_length = t),
      (this.max_lazy = e),
      (this.nice_length = n),
      (this.max_chain = r),
      (this.func = i);
  }
  function ls() {
    (this.strm = null),
      (this.status = 0),
      (this.pending_buf = null),
      (this.pending_buf_size = 0),
      (this.pending_out = 0),
      (this.pending = 0),
      (this.wrap = 0),
      (this.gzhead = null),
      (this.gzindex = 0),
      (this.method = 8),
      (this.last_flush = -1),
      (this.w_size = 0),
      (this.w_bits = 0),
      (this.w_mask = 0),
      (this.window = null),
      (this.window_size = 0),
      (this.prev = null),
      (this.head = null),
      (this.ins_h = 0),
      (this.hash_size = 0),
      (this.hash_bits = 0),
      (this.hash_mask = 0),
      (this.hash_shift = 0),
      (this.block_start = 0),
      (this.match_length = 0),
      (this.prev_match = 0),
      (this.match_available = 0),
      (this.strstart = 0),
      (this.match_start = 0),
      (this.lookahead = 0),
      (this.prev_length = 0),
      (this.max_chain_length = 0),
      (this.max_lazy_match = 0),
      (this.level = 0),
      (this.strategy = 0),
      (this.good_match = 0),
      (this.nice_match = 0),
      (this.dyn_ltree = new ua.Buf16(1146)),
      (this.dyn_dtree = new ua.Buf16(122)),
      (this.bl_tree = new ua.Buf16(78)),
      Ja(this.dyn_ltree),
      Ja(this.dyn_dtree),
      Ja(this.bl_tree),
      (this.l_desc = null),
      (this.d_desc = null),
      (this.bl_desc = null),
      (this.bl_count = new ua.Buf16(16)),
      (this.heap = new ua.Buf16(573)),
      Ja(this.heap),
      (this.heap_len = 0),
      (this.heap_max = 0),
      (this.depth = new ua.Buf16(573)),
      Ja(this.depth),
      (this.l_buf = 0),
      (this.lit_bufsize = 0),
      (this.last_lit = 0),
      (this.d_buf = 0),
      (this.opt_len = 0),
      (this.static_len = 0),
      (this.matches = 0),
      (this.insert = 0),
      (this.bi_buf = 0),
      (this.bi_valid = 0);
  }
  function hs(t) {
    var e;
    return t && t.state
      ? ((t.total_in = t.total_out = 0),
        (t.data_type = 2),
        ((e = t.state).pending = 0),
        (e.pending_out = 0),
        e.wrap < 0 && (e.wrap = -e.wrap),
        (e.status = e.wrap ? 42 : 113),
        (t.adler = 2 === e.wrap ? 0 : 1),
        (e.last_flush = 0),
        La._tr_init(e),
        0)
      : Za(t, -2);
  }
  function us(t) {
    var e,
      n = hs(t);
    return (
      0 === n &&
        (((e = t.state).window_size = 2 * e.w_size),
        Ja(e.head),
        (e.max_lazy_match = Ha[e.level].max_lazy),
        (e.good_match = Ha[e.level].good_length),
        (e.nice_match = Ha[e.level].nice_length),
        (e.max_chain_length = Ha[e.level].max_chain),
        (e.strstart = 0),
        (e.block_start = 0),
        (e.lookahead = 0),
        (e.insert = 0),
        (e.match_length = e.prev_length = 2),
        (e.match_available = 0),
        (e.ins_h = 0)),
      n
    );
  }
  function cs(t, e, n, r, i, o) {
    if (!t) return -2;
    var a = 1;
    if (
      (-1 === e && (e = 6),
      r < 0 ? ((a = 0), (r = -r)) : r > 15 && ((a = 2), (r -= 16)),
      i < 1 ||
        i > 9 ||
        8 !== n ||
        r < 8 ||
        r > 15 ||
        e < 0 ||
        e > 9 ||
        o < 0 ||
        o > 4)
    )
      return Za(t, -2);
    8 === r && (r = 9);
    var s = new ls();
    return (
      (t.state = s),
      (s.strm = t),
      (s.wrap = a),
      (s.gzhead = null),
      (s.w_bits = r),
      (s.w_size = 1 << s.w_bits),
      (s.w_mask = s.w_size - 1),
      (s.hash_bits = i + 7),
      (s.hash_size = 1 << s.hash_bits),
      (s.hash_mask = s.hash_size - 1),
      (s.hash_shift = ~~((s.hash_bits + 3 - 1) / 3)),
      (s.window = new ua.Buf8(2 * s.w_size)),
      (s.head = new ua.Buf16(s.hash_size)),
      (s.prev = new ua.Buf16(s.w_size)),
      (s.lit_bufsize = 1 << (i + 6)),
      (s.pending_buf_size = 4 * s.lit_bufsize),
      (s.pending_buf = new ua.Buf8(s.pending_buf_size)),
      (s.d_buf = 1 * s.lit_bufsize),
      (s.l_buf = 3 * s.lit_bufsize),
      (s.level = e),
      (s.strategy = o),
      (s.method = n),
      us(t)
    );
  }
  Ha = [
    new ss(0, 0, 0, 0, function (t, e) {
      var n = 65535;
      for (n > t.pending_buf_size - 5 && (n = t.pending_buf_size - 5); ; ) {
        if (t.lookahead <= 1) {
          if ((is(t), 0 === t.lookahead && 0 === e)) return 1;
          if (0 === t.lookahead) break;
        }
        (t.strstart += t.lookahead), (t.lookahead = 0);
        var r = t.block_start + n;
        if (
          (0 === t.strstart || t.strstart >= r) &&
          ((t.lookahead = t.strstart - r),
          (t.strstart = r),
          $a(t, !1),
          0 === t.strm.avail_out)
        )
          return 1;
        if (
          t.strstart - t.block_start >= t.w_size - 262 &&
          ($a(t, !1), 0 === t.strm.avail_out)
        )
          return 1;
      }
      return (
        (t.insert = 0),
        4 === e
          ? ($a(t, !0), 0 === t.strm.avail_out ? 3 : 4)
          : (t.strstart > t.block_start && ($a(t, !1), t.strm.avail_out), 1)
      );
    }),
    new ss(4, 4, 8, 4, os),
    new ss(4, 5, 16, 8, os),
    new ss(4, 6, 32, 32, os),
    new ss(4, 4, 16, 16, as),
    new ss(8, 16, 32, 32, as),
    new ss(8, 16, 128, 128, as),
    new ss(8, 32, 128, 256, as),
    new ss(32, 128, 258, 1024, as),
    new ss(32, 258, 258, 4096, as),
  ];
  var ds = {
      deflateInit: function (t, e) {
        return cs(t, e, 8, 15, 8, 0);
      },
      deflateInit2: cs,
      deflateReset: us,
      deflateResetKeep: hs,
      deflateSetHeader: function (t, e) {
        return t && t.state
          ? 2 !== t.state.wrap
            ? -2
            : ((t.state.gzhead = e), 0)
          : -2;
      },
      deflate: function (t, e) {
        var n, r, i, o;
        if (!t || !t.state || e > 5 || e < 0) return t ? Za(t, -2) : -2;
        if (
          ((r = t.state),
          !t.output ||
            (!t.input && 0 !== t.avail_in) ||
            (666 === r.status && 4 !== e))
        )
          return Za(t, 0 === t.avail_out ? -5 : -2);
        if (
          ((r.strm = t),
          (n = r.last_flush),
          (r.last_flush = e),
          42 === r.status)
        )
          if (2 === r.wrap)
            (t.adler = 0),
              ts(r, 31),
              ts(r, 139),
              ts(r, 8),
              r.gzhead
                ? (ts(
                    r,
                    (r.gzhead.text ? 1 : 0) +
                      (r.gzhead.hcrc ? 2 : 0) +
                      (r.gzhead.extra ? 4 : 0) +
                      (r.gzhead.name ? 8 : 0) +
                      (r.gzhead.comment ? 16 : 0)
                  ),
                  ts(r, 255 & r.gzhead.time),
                  ts(r, (r.gzhead.time >> 8) & 255),
                  ts(r, (r.gzhead.time >> 16) & 255),
                  ts(r, (r.gzhead.time >> 24) & 255),
                  ts(
                    r,
                    9 === r.level ? 2 : r.strategy >= 2 || r.level < 2 ? 4 : 0
                  ),
                  ts(r, 255 & r.gzhead.os),
                  r.gzhead.extra &&
                    r.gzhead.extra.length &&
                    (ts(r, 255 & r.gzhead.extra.length),
                    ts(r, (r.gzhead.extra.length >> 8) & 255)),
                  r.gzhead.hcrc &&
                    (t.adler = _a(t.adler, r.pending_buf, r.pending, 0)),
                  (r.gzindex = 0),
                  (r.status = 69))
                : (ts(r, 0),
                  ts(r, 0),
                  ts(r, 0),
                  ts(r, 0),
                  ts(r, 0),
                  ts(
                    r,
                    9 === r.level ? 2 : r.strategy >= 2 || r.level < 2 ? 4 : 0
                  ),
                  ts(r, 3),
                  (r.status = 113));
          else {
            var a = (8 + ((r.w_bits - 8) << 4)) << 8;
            (a |=
              (r.strategy >= 2 || r.level < 2
                ? 0
                : r.level < 6
                ? 1
                : 6 === r.level
                ? 2
                : 3) << 6),
              0 !== r.strstart && (a |= 32),
              (a += 31 - (a % 31)),
              (r.status = 113),
              es(r, a),
              0 !== r.strstart &&
                (es(r, t.adler >>> 16), es(r, 65535 & t.adler)),
              (t.adler = 1);
          }
        if (69 === r.status)
          if (r.gzhead.extra) {
            for (
              i = r.pending;
              r.gzindex < (65535 & r.gzhead.extra.length) &&
              (r.pending !== r.pending_buf_size ||
                (r.gzhead.hcrc &&
                  r.pending > i &&
                  (t.adler = _a(t.adler, r.pending_buf, r.pending - i, i)),
                Qa(t),
                (i = r.pending),
                r.pending !== r.pending_buf_size));

            )
              ts(r, 255 & r.gzhead.extra[r.gzindex]), r.gzindex++;
            r.gzhead.hcrc &&
              r.pending > i &&
              (t.adler = _a(t.adler, r.pending_buf, r.pending - i, i)),
              r.gzindex === r.gzhead.extra.length &&
                ((r.gzindex = 0), (r.status = 73));
          } else r.status = 73;
        if (73 === r.status)
          if (r.gzhead.name) {
            i = r.pending;
            do {
              if (
                r.pending === r.pending_buf_size &&
                (r.gzhead.hcrc &&
                  r.pending > i &&
                  (t.adler = _a(t.adler, r.pending_buf, r.pending - i, i)),
                Qa(t),
                (i = r.pending),
                r.pending === r.pending_buf_size)
              ) {
                o = 1;
                break;
              }
              (o =
                r.gzindex < r.gzhead.name.length
                  ? 255 & r.gzhead.name.charCodeAt(r.gzindex++)
                  : 0),
                ts(r, o);
            } while (0 !== o);
            r.gzhead.hcrc &&
              r.pending > i &&
              (t.adler = _a(t.adler, r.pending_buf, r.pending - i, i)),
              0 === o && ((r.gzindex = 0), (r.status = 91));
          } else r.status = 91;
        if (91 === r.status)
          if (r.gzhead.comment) {
            i = r.pending;
            do {
              if (
                r.pending === r.pending_buf_size &&
                (r.gzhead.hcrc &&
                  r.pending > i &&
                  (t.adler = _a(t.adler, r.pending_buf, r.pending - i, i)),
                Qa(t),
                (i = r.pending),
                r.pending === r.pending_buf_size)
              ) {
                o = 1;
                break;
              }
              (o =
                r.gzindex < r.gzhead.comment.length
                  ? 255 & r.gzhead.comment.charCodeAt(r.gzindex++)
                  : 0),
                ts(r, o);
            } while (0 !== o);
            r.gzhead.hcrc &&
              r.pending > i &&
              (t.adler = _a(t.adler, r.pending_buf, r.pending - i, i)),
              0 === o && (r.status = 103);
          } else r.status = 103;
        if (
          (103 === r.status &&
            (r.gzhead.hcrc
              ? (r.pending + 2 > r.pending_buf_size && Qa(t),
                r.pending + 2 <= r.pending_buf_size &&
                  (ts(r, 255 & t.adler),
                  ts(r, (t.adler >> 8) & 255),
                  (t.adler = 0),
                  (r.status = 113)))
              : (r.status = 113)),
          0 !== r.pending)
        ) {
          if ((Qa(t), 0 === t.avail_out)) return (r.last_flush = -1), 0;
        } else if (0 === t.avail_in && Ya(e) <= Ya(n) && 4 !== e)
          return Za(t, -5);
        if (666 === r.status && 0 !== t.avail_in) return Za(t, -5);
        if (
          0 !== t.avail_in ||
          0 !== r.lookahead ||
          (0 !== e && 666 !== r.status)
        ) {
          var s =
            2 === r.strategy
              ? (function (t, e) {
                  for (var n; ; ) {
                    if (0 === t.lookahead && (is(t), 0 === t.lookahead)) {
                      if (0 === e) return 1;
                      break;
                    }
                    if (
                      ((t.match_length = 0),
                      (n = La._tr_tally(t, 0, t.window[t.strstart])),
                      t.lookahead--,
                      t.strstart++,
                      n && ($a(t, !1), 0 === t.strm.avail_out))
                    )
                      return 1;
                  }
                  return (
                    (t.insert = 0),
                    4 === e
                      ? ($a(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                      : t.last_lit && ($a(t, !1), 0 === t.strm.avail_out)
                      ? 1
                      : 2
                  );
                })(r, e)
              : 3 === r.strategy
              ? (function (t, e) {
                  for (var n, r, i, o, a = t.window; ; ) {
                    if (t.lookahead <= 258) {
                      if ((is(t), t.lookahead <= 258 && 0 === e)) return 1;
                      if (0 === t.lookahead) break;
                    }
                    if (
                      ((t.match_length = 0),
                      t.lookahead >= 3 &&
                        t.strstart > 0 &&
                        (r = a[(i = t.strstart - 1)]) === a[++i] &&
                        r === a[++i] &&
                        r === a[++i])
                    ) {
                      o = t.strstart + 258;
                      do {} while (
                        r === a[++i] &&
                        r === a[++i] &&
                        r === a[++i] &&
                        r === a[++i] &&
                        r === a[++i] &&
                        r === a[++i] &&
                        r === a[++i] &&
                        r === a[++i] &&
                        i < o
                      );
                      (t.match_length = 258 - (o - i)),
                        t.match_length > t.lookahead &&
                          (t.match_length = t.lookahead);
                    }
                    if (
                      (t.match_length >= 3
                        ? ((n = La._tr_tally(t, 1, t.match_length - 3)),
                          (t.lookahead -= t.match_length),
                          (t.strstart += t.match_length),
                          (t.match_length = 0))
                        : ((n = La._tr_tally(t, 0, t.window[t.strstart])),
                          t.lookahead--,
                          t.strstart++),
                      n && ($a(t, !1), 0 === t.strm.avail_out))
                    )
                      return 1;
                  }
                  return (
                    (t.insert = 0),
                    4 === e
                      ? ($a(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                      : t.last_lit && ($a(t, !1), 0 === t.strm.avail_out)
                      ? 1
                      : 2
                  );
                })(r, e)
              : Ha[r.level].func(r, e);
          if (((3 !== s && 4 !== s) || (r.status = 666), 1 === s || 3 === s))
            return 0 === t.avail_out && (r.last_flush = -1), 0;
          if (
            2 === s &&
            (1 === e
              ? La._tr_align(r)
              : 5 !== e &&
                (La._tr_stored_block(r, 0, 0, !1),
                3 === e &&
                  (Ja(r.head),
                  0 === r.lookahead &&
                    ((r.strstart = 0), (r.block_start = 0), (r.insert = 0)))),
            Qa(t),
            0 === t.avail_out)
          )
            return (r.last_flush = -1), 0;
        }
        return 4 !== e
          ? 0
          : r.wrap <= 0
          ? 1
          : (2 === r.wrap
              ? (ts(r, 255 & t.adler),
                ts(r, (t.adler >> 8) & 255),
                ts(r, (t.adler >> 16) & 255),
                ts(r, (t.adler >> 24) & 255),
                ts(r, 255 & t.total_in),
                ts(r, (t.total_in >> 8) & 255),
                ts(r, (t.total_in >> 16) & 255),
                ts(r, (t.total_in >> 24) & 255))
              : (es(r, t.adler >>> 16), es(r, 65535 & t.adler)),
            Qa(t),
            r.wrap > 0 && (r.wrap = -r.wrap),
            0 !== r.pending ? 0 : 1);
      },
      deflateEnd: function (t) {
        var e;
        return t && t.state
          ? 42 !== (e = t.state.status) &&
            69 !== e &&
            73 !== e &&
            91 !== e &&
            103 !== e &&
            113 !== e &&
            666 !== e
            ? Za(t, -2)
            : ((t.state = null), 113 === e ? Za(t, -3) : 0)
          : -2;
      },
      deflateSetDictionary: function (t, e) {
        var n,
          r,
          i,
          o,
          a,
          s,
          l,
          h,
          u = e.length;
        if (!t || !t.state) return -2;
        if (
          2 === (o = (n = t.state).wrap) ||
          (1 === o && 42 !== n.status) ||
          n.lookahead
        )
          return -2;
        for (
          1 === o && (t.adler = Ka(t.adler, e, u, 0)),
            n.wrap = 0,
            u >= n.w_size &&
              (0 === o &&
                (Ja(n.head),
                (n.strstart = 0),
                (n.block_start = 0),
                (n.insert = 0)),
              (h = new ua.Buf8(n.w_size)),
              ua.arraySet(h, e, u - n.w_size, n.w_size, 0),
              (e = h),
              (u = n.w_size)),
            a = t.avail_in,
            s = t.next_in,
            l = t.input,
            t.avail_in = u,
            t.next_in = 0,
            t.input = e,
            is(n);
          n.lookahead >= 3;

        ) {
          (r = n.strstart), (i = n.lookahead - 2);
          do {
            (n.ins_h =
              ((n.ins_h << n.hash_shift) ^ n.window[r + 3 - 1]) & n.hash_mask),
              (n.prev[r & n.w_mask] = n.head[n.ins_h]),
              (n.head[n.ins_h] = r),
              r++;
          } while (--i);
          (n.strstart = r), (n.lookahead = 2), is(n);
        }
        return (
          (n.strstart += n.lookahead),
          (n.block_start = n.strstart),
          (n.insert = n.lookahead),
          (n.lookahead = 0),
          (n.match_length = n.prev_length = 2),
          (n.match_available = 0),
          (t.next_in = s),
          (t.input = l),
          (t.avail_in = a),
          (n.wrap = o),
          0
        );
      },
      deflateInfo: "pako deflate (from Nodeca project)",
    },
    fs = !0,
    ps = !0;
  try {
    String.fromCharCode.apply(null, [0]);
  } catch (t) {
    fs = !1;
  }
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch (t) {
    ps = !1;
  }
  for (var gs = new ua.Buf8(256), vs = 0; vs < 256; vs++)
    gs[vs] =
      vs >= 252
        ? 6
        : vs >= 248
        ? 5
        : vs >= 240
        ? 4
        : vs >= 224
        ? 3
        : vs >= 192
        ? 2
        : 1;
  gs[254] = gs[254] = 1;
  function ys(t, e) {
    if (e < 65534 && ((t.subarray && ps) || (!t.subarray && fs)))
      return String.fromCharCode.apply(null, ua.shrinkBuf(t, e));
    for (var n = "", r = 0; r < e; r++) n += String.fromCharCode(t[r]);
    return n;
  }
  var ms = function (t) {
      var e,
        n,
        r,
        i,
        o,
        a = t.length,
        s = 0;
      for (i = 0; i < a; i++)
        55296 == (64512 & (n = t.charCodeAt(i))) &&
          i + 1 < a &&
          56320 == (64512 & (r = t.charCodeAt(i + 1))) &&
          ((n = 65536 + ((n - 55296) << 10) + (r - 56320)), i++),
          (s += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4);
      for (e = new ua.Buf8(s), o = 0, i = 0; o < s; i++)
        55296 == (64512 & (n = t.charCodeAt(i))) &&
          i + 1 < a &&
          56320 == (64512 & (r = t.charCodeAt(i + 1))) &&
          ((n = 65536 + ((n - 55296) << 10) + (r - 56320)), i++),
          n < 128
            ? (e[o++] = n)
            : n < 2048
            ? ((e[o++] = 192 | (n >>> 6)), (e[o++] = 128 | (63 & n)))
            : n < 65536
            ? ((e[o++] = 224 | (n >>> 12)),
              (e[o++] = 128 | ((n >>> 6) & 63)),
              (e[o++] = 128 | (63 & n)))
            : ((e[o++] = 240 | (n >>> 18)),
              (e[o++] = 128 | ((n >>> 12) & 63)),
              (e[o++] = 128 | ((n >>> 6) & 63)),
              (e[o++] = 128 | (63 & n)));
      return e;
    },
    bs = function (t) {
      return ys(t, t.length);
    },
    ws = function (t) {
      for (var e = new ua.Buf8(t.length), n = 0, r = e.length; n < r; n++)
        e[n] = t.charCodeAt(n);
      return e;
    },
    xs = function (t, e) {
      var n,
        r,
        i,
        o,
        a = e || t.length,
        s = new Array(2 * a);
      for (r = 0, n = 0; n < a; )
        if ((i = t[n++]) < 128) s[r++] = i;
        else if ((o = gs[i]) > 4) (s[r++] = 65533), (n += o - 1);
        else {
          for (i &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && n < a; )
            (i = (i << 6) | (63 & t[n++])), o--;
          o > 1
            ? (s[r++] = 65533)
            : i < 65536
            ? (s[r++] = i)
            : ((i -= 65536),
              (s[r++] = 55296 | ((i >> 10) & 1023)),
              (s[r++] = 56320 | (1023 & i)));
        }
      return ys(s, r);
    },
    ks = function (t, e) {
      var n;
      for (
        (e = e || t.length) > t.length && (e = t.length), n = e - 1;
        n >= 0 && 128 == (192 & t[n]);

      )
        n--;
      return n < 0 || 0 === n ? e : n + gs[t[n]] > e ? n : e;
    };
  var Fs = function () {
      (this.input = null),
        (this.next_in = 0),
        (this.avail_in = 0),
        (this.total_in = 0),
        (this.output = null),
        (this.next_out = 0),
        (this.avail_out = 0),
        (this.total_out = 0),
        (this.msg = ""),
        (this.state = null),
        (this.data_type = 2),
        (this.adler = 0);
    },
    Ss = Object.prototype.toString;
  function Cs(t) {
    if (!(this instanceof Cs)) return new Cs(t);
    this.options = ua.assign(
      {
        level: -1,
        method: 8,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: 0,
        to: "",
      },
      t || {}
    );
    var e = this.options;
    e.raw && e.windowBits > 0
      ? (e.windowBits = -e.windowBits)
      : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16),
      (this.err = 0),
      (this.msg = ""),
      (this.ended = !1),
      (this.chunks = []),
      (this.strm = new Fs()),
      (this.strm.avail_out = 0);
    var n = ds.deflateInit2(
      this.strm,
      e.level,
      e.method,
      e.windowBits,
      e.memLevel,
      e.strategy
    );
    if (0 !== n) throw new Error(Xa[n]);
    if ((e.header && ds.deflateSetHeader(this.strm, e.header), e.dictionary)) {
      var r;
      if (
        ((r =
          "string" == typeof e.dictionary
            ? ms(e.dictionary)
            : "[object ArrayBuffer]" === Ss.call(e.dictionary)
            ? new Uint8Array(e.dictionary)
            : e.dictionary),
        0 !== (n = ds.deflateSetDictionary(this.strm, r)))
      )
        throw new Error(Xa[n]);
      this._dict_set = !0;
    }
  }
  function As(t, e) {
    var n = new Cs(e);
    if ((n.push(t, !0), n.err)) throw n.msg || Xa[n.err];
    return n.result;
  }
  (Cs.prototype.push = function (t, e) {
    var n,
      r,
      i = this.strm,
      o = this.options.chunkSize;
    if (this.ended) return !1;
    (r = e === ~~e ? e : !0 === e ? 4 : 0),
      "string" == typeof t
        ? (i.input = ms(t))
        : "[object ArrayBuffer]" === Ss.call(t)
        ? (i.input = new Uint8Array(t))
        : (i.input = t),
      (i.next_in = 0),
      (i.avail_in = i.input.length);
    do {
      if (
        (0 === i.avail_out &&
          ((i.output = new ua.Buf8(o)), (i.next_out = 0), (i.avail_out = o)),
        1 !== (n = ds.deflate(i, r)) && 0 !== n)
      )
        return this.onEnd(n), (this.ended = !0), !1;
      (0 !== i.avail_out && (0 !== i.avail_in || (4 !== r && 2 !== r))) ||
        ("string" === this.options.to
          ? this.onData(bs(ua.shrinkBuf(i.output, i.next_out)))
          : this.onData(ua.shrinkBuf(i.output, i.next_out)));
    } while ((i.avail_in > 0 || 0 === i.avail_out) && 1 !== n);
    return 4 === r
      ? ((n = ds.deflateEnd(this.strm)),
        this.onEnd(n),
        (this.ended = !0),
        0 === n)
      : 2 !== r || (this.onEnd(0), (i.avail_out = 0), !0);
  }),
    (Cs.prototype.onData = function (t) {
      this.chunks.push(t);
    }),
    (Cs.prototype.onEnd = function (t) {
      0 === t &&
        ("string" === this.options.to
          ? (this.result = this.chunks.join(""))
          : (this.result = ua.flattenChunks(this.chunks))),
        (this.chunks = []),
        (this.err = t),
        (this.msg = this.strm.msg);
    });
  var Ts = {
      Deflate: Cs,
      deflate: As,
      deflateRaw: function (t, e) {
        return ((e = e || {}).raw = !0), As(t, e);
      },
      gzip: function (t, e) {
        return ((e = e || {}).gzip = !0), As(t, e);
      },
    },
    Ps = function (t, e) {
      var n,
        r,
        i,
        o,
        a,
        s,
        l,
        h,
        u,
        c,
        d,
        f,
        p,
        g,
        v,
        y,
        m,
        b,
        w,
        x,
        k,
        F,
        S,
        C,
        A;
      (n = t.state),
        (r = t.next_in),
        (C = t.input),
        (i = r + (t.avail_in - 5)),
        (o = t.next_out),
        (A = t.output),
        (a = o - (e - t.avail_out)),
        (s = o + (t.avail_out - 257)),
        (l = n.dmax),
        (h = n.wsize),
        (u = n.whave),
        (c = n.wnext),
        (d = n.window),
        (f = n.hold),
        (p = n.bits),
        (g = n.lencode),
        (v = n.distcode),
        (y = (1 << n.lenbits) - 1),
        (m = (1 << n.distbits) - 1);
      t: do {
        p < 15 && ((f += C[r++] << p), (p += 8), (f += C[r++] << p), (p += 8)),
          (b = g[f & y]);
        e: for (;;) {
          if (((f >>>= w = b >>> 24), (p -= w), 0 === (w = (b >>> 16) & 255)))
            A[o++] = 65535 & b;
          else {
            if (!(16 & w)) {
              if (0 == (64 & w)) {
                b = g[(65535 & b) + (f & ((1 << w) - 1))];
                continue e;
              }
              if (32 & w) {
                n.mode = 12;
                break t;
              }
              (t.msg = "invalid literal/length code"), (n.mode = 30);
              break t;
            }
            (x = 65535 & b),
              (w &= 15) &&
                (p < w && ((f += C[r++] << p), (p += 8)),
                (x += f & ((1 << w) - 1)),
                (f >>>= w),
                (p -= w)),
              p < 15 &&
                ((f += C[r++] << p), (p += 8), (f += C[r++] << p), (p += 8)),
              (b = v[f & m]);
            n: for (;;) {
              if (
                ((f >>>= w = b >>> 24),
                (p -= w),
                !(16 & (w = (b >>> 16) & 255)))
              ) {
                if (0 == (64 & w)) {
                  b = v[(65535 & b) + (f & ((1 << w) - 1))];
                  continue n;
                }
                (t.msg = "invalid distance code"), (n.mode = 30);
                break t;
              }
              if (
                ((k = 65535 & b),
                p < (w &= 15) &&
                  ((f += C[r++] << p),
                  (p += 8) < w && ((f += C[r++] << p), (p += 8))),
                (k += f & ((1 << w) - 1)) > l)
              ) {
                (t.msg = "invalid distance too far back"), (n.mode = 30);
                break t;
              }
              if (((f >>>= w), (p -= w), k > (w = o - a))) {
                if ((w = k - w) > u && n.sane) {
                  (t.msg = "invalid distance too far back"), (n.mode = 30);
                  break t;
                }
                if (((F = 0), (S = d), 0 === c)) {
                  if (((F += h - w), w < x)) {
                    x -= w;
                    do {
                      A[o++] = d[F++];
                    } while (--w);
                    (F = o - k), (S = A);
                  }
                } else if (c < w) {
                  if (((F += h + c - w), (w -= c) < x)) {
                    x -= w;
                    do {
                      A[o++] = d[F++];
                    } while (--w);
                    if (((F = 0), c < x)) {
                      x -= w = c;
                      do {
                        A[o++] = d[F++];
                      } while (--w);
                      (F = o - k), (S = A);
                    }
                  }
                } else if (((F += c - w), w < x)) {
                  x -= w;
                  do {
                    A[o++] = d[F++];
                  } while (--w);
                  (F = o - k), (S = A);
                }
                for (; x > 2; )
                  (A[o++] = S[F++]),
                    (A[o++] = S[F++]),
                    (A[o++] = S[F++]),
                    (x -= 3);
                x && ((A[o++] = S[F++]), x > 1 && (A[o++] = S[F++]));
              } else {
                F = o - k;
                do {
                  (A[o++] = A[F++]),
                    (A[o++] = A[F++]),
                    (A[o++] = A[F++]),
                    (x -= 3);
                } while (x > 2);
                x && ((A[o++] = A[F++]), x > 1 && (A[o++] = A[F++]));
              }
              break;
            }
          }
          break;
        }
      } while (r < i && o < s);
      (r -= x = p >> 3),
        (f &= (1 << (p -= x << 3)) - 1),
        (t.next_in = r),
        (t.next_out = o),
        (t.avail_in = r < i ? i - r + 5 : 5 - (r - i)),
        (t.avail_out = o < s ? s - o + 257 : 257 - (o - s)),
        (n.hold = f),
        (n.bits = p);
    },
    zs = [
      3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
      67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
    ],
    Rs = [
      16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19,
      19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
    ],
    Os = [
      1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513,
      769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0,
    ],
    Ds = [
      16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23,
      24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
    ],
    Bs = function (t, e, n, r, i, o, a, s) {
      var l,
        h,
        u,
        c,
        d,
        f,
        p,
        g,
        v,
        y = s.bits,
        m = 0,
        b = 0,
        w = 0,
        x = 0,
        k = 0,
        F = 0,
        S = 0,
        C = 0,
        A = 0,
        T = 0,
        P = null,
        z = 0,
        R = new ua.Buf16(16),
        O = new ua.Buf16(16),
        D = null,
        B = 0;
      for (m = 0; m <= 15; m++) R[m] = 0;
      for (b = 0; b < r; b++) R[e[n + b]]++;
      for (k = y, x = 15; x >= 1 && 0 === R[x]; x--);
      if ((k > x && (k = x), 0 === x))
        return (i[o++] = 20971520), (i[o++] = 20971520), (s.bits = 1), 0;
      for (w = 1; w < x && 0 === R[w]; w++);
      for (k < w && (k = w), C = 1, m = 1; m <= 15; m++)
        if (((C <<= 1), (C -= R[m]) < 0)) return -1;
      if (C > 0 && (0 === t || 1 !== x)) return -1;
      for (O[1] = 0, m = 1; m < 15; m++) O[m + 1] = O[m] + R[m];
      for (b = 0; b < r; b++) 0 !== e[n + b] && (a[O[e[n + b]]++] = b);
      if (
        (0 === t
          ? ((P = D = a), (f = 19))
          : 1 === t
          ? ((P = zs), (z -= 257), (D = Rs), (B -= 257), (f = 256))
          : ((P = Os), (D = Ds), (f = -1)),
        (T = 0),
        (b = 0),
        (m = w),
        (d = o),
        (F = k),
        (S = 0),
        (u = -1),
        (c = (A = 1 << k) - 1),
        (1 === t && A > 852) || (2 === t && A > 592))
      )
        return 1;
      for (;;) {
        (p = m - S),
          a[b] < f
            ? ((g = 0), (v = a[b]))
            : a[b] > f
            ? ((g = D[B + a[b]]), (v = P[z + a[b]]))
            : ((g = 96), (v = 0)),
          (l = 1 << (m - S)),
          (w = h = 1 << F);
        do {
          i[d + (T >> S) + (h -= l)] = (p << 24) | (g << 16) | v | 0;
        } while (0 !== h);
        for (l = 1 << (m - 1); T & l; ) l >>= 1;
        if ((0 !== l ? ((T &= l - 1), (T += l)) : (T = 0), b++, 0 == --R[m])) {
          if (m === x) break;
          m = e[n + a[b]];
        }
        if (m > k && (T & c) !== u) {
          for (
            0 === S && (S = k), d += w, C = 1 << (F = m - S);
            F + S < x && !((C -= R[F + S]) <= 0);

          )
            F++, (C <<= 1);
          if (((A += 1 << F), (1 === t && A > 852) || (2 === t && A > 592)))
            return 1;
          i[(u = T & c)] = (k << 24) | (F << 16) | (d - o) | 0;
        }
      }
      return (
        0 !== T && (i[d + T] = ((m - S) << 24) | (64 << 16) | 0),
        (s.bits = k),
        0
      );
    };
  function Ns(t) {
    return (
      ((t >>> 24) & 255) +
      ((t >>> 8) & 65280) +
      ((65280 & t) << 8) +
      ((255 & t) << 24)
    );
  }
  function Es() {
    (this.mode = 0),
      (this.last = !1),
      (this.wrap = 0),
      (this.havedict = !1),
      (this.flags = 0),
      (this.dmax = 0),
      (this.check = 0),
      (this.total = 0),
      (this.head = null),
      (this.wbits = 0),
      (this.wsize = 0),
      (this.whave = 0),
      (this.wnext = 0),
      (this.window = null),
      (this.hold = 0),
      (this.bits = 0),
      (this.length = 0),
      (this.offset = 0),
      (this.extra = 0),
      (this.lencode = null),
      (this.distcode = null),
      (this.lenbits = 0),
      (this.distbits = 0),
      (this.ncode = 0),
      (this.nlen = 0),
      (this.ndist = 0),
      (this.have = 0),
      (this.next = null),
      (this.lens = new ua.Buf16(320)),
      (this.work = new ua.Buf16(288)),
      (this.lendyn = null),
      (this.distdyn = null),
      (this.sane = 0),
      (this.back = 0),
      (this.was = 0);
  }
  function js(t) {
    var e;
    return t && t.state
      ? ((e = t.state),
        (t.total_in = t.total_out = e.total = 0),
        (t.msg = ""),
        e.wrap && (t.adler = 1 & e.wrap),
        (e.mode = 1),
        (e.last = 0),
        (e.havedict = 0),
        (e.dmax = 32768),
        (e.head = null),
        (e.hold = 0),
        (e.bits = 0),
        (e.lencode = e.lendyn = new ua.Buf32(852)),
        (e.distcode = e.distdyn = new ua.Buf32(592)),
        (e.sane = 1),
        (e.back = -1),
        0)
      : -2;
  }
  function Ms(t) {
    var e;
    return t && t.state
      ? (((e = t.state).wsize = 0), (e.whave = 0), (e.wnext = 0), js(t))
      : -2;
  }
  function Is(t, e) {
    var n, r;
    return t && t.state
      ? ((r = t.state),
        e < 0 ? ((n = 0), (e = -e)) : ((n = 1 + (e >> 4)), e < 48 && (e &= 15)),
        e && (e < 8 || e > 15)
          ? -2
          : (null !== r.window && r.wbits !== e && (r.window = null),
            (r.wrap = n),
            (r.wbits = e),
            Ms(t)))
      : -2;
  }
  function Us(t, e) {
    var n, r;
    return t
      ? ((r = new Es()),
        (t.state = r),
        (r.window = null),
        0 !== (n = Is(t, e)) && (t.state = null),
        n)
      : -2;
  }
  var Vs,
    Ws,
    qs = !0;
  function Ls(t) {
    if (qs) {
      var e;
      for (Vs = new ua.Buf32(512), Ws = new ua.Buf32(32), e = 0; e < 144; )
        t.lens[e++] = 8;
      for (; e < 256; ) t.lens[e++] = 9;
      for (; e < 280; ) t.lens[e++] = 7;
      for (; e < 288; ) t.lens[e++] = 8;
      for (Bs(1, t.lens, 0, 288, Vs, 0, t.work, { bits: 9 }), e = 0; e < 32; )
        t.lens[e++] = 5;
      Bs(2, t.lens, 0, 32, Ws, 0, t.work, { bits: 5 }), (qs = !1);
    }
    (t.lencode = Vs), (t.lenbits = 9), (t.distcode = Ws), (t.distbits = 5);
  }
  function Ks(t, e, n, r) {
    var i,
      o = t.state;
    return (
      null === o.window &&
        ((o.wsize = 1 << o.wbits),
        (o.wnext = 0),
        (o.whave = 0),
        (o.window = new ua.Buf8(o.wsize))),
      r >= o.wsize
        ? (ua.arraySet(o.window, e, n - o.wsize, o.wsize, 0),
          (o.wnext = 0),
          (o.whave = o.wsize))
        : ((i = o.wsize - o.wnext) > r && (i = r),
          ua.arraySet(o.window, e, n - r, i, o.wnext),
          (r -= i)
            ? (ua.arraySet(o.window, e, n - r, r, 0),
              (o.wnext = r),
              (o.whave = o.wsize))
            : ((o.wnext += i),
              o.wnext === o.wsize && (o.wnext = 0),
              o.whave < o.wsize && (o.whave += i))),
      0
    );
  }
  var Gs = {
      inflateReset: Ms,
      inflateReset2: Is,
      inflateResetKeep: js,
      inflateInit: function (t) {
        return Us(t, 15);
      },
      inflateInit2: Us,
      inflate: function (t, e) {
        var n,
          r,
          i,
          o,
          a,
          s,
          l,
          h,
          u,
          c,
          d,
          f,
          p,
          g,
          v,
          y,
          m,
          b,
          w,
          x,
          k,
          F,
          S,
          C,
          A = 0,
          T = new ua.Buf8(4),
          P = [
            16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
          ];
        if (!t || !t.state || !t.output || (!t.input && 0 !== t.avail_in))
          return -2;
        12 === (n = t.state).mode && (n.mode = 13),
          (a = t.next_out),
          (i = t.output),
          (l = t.avail_out),
          (o = t.next_in),
          (r = t.input),
          (s = t.avail_in),
          (h = n.hold),
          (u = n.bits),
          (c = s),
          (d = l),
          (F = 0);
        t: for (;;)
          switch (n.mode) {
            case 1:
              if (0 === n.wrap) {
                n.mode = 13;
                break;
              }
              for (; u < 16; ) {
                if (0 === s) break t;
                s--, (h += r[o++] << u), (u += 8);
              }
              if (2 & n.wrap && 35615 === h) {
                (n.check = 0),
                  (T[0] = 255 & h),
                  (T[1] = (h >>> 8) & 255),
                  (n.check = _a(n.check, T, 2, 0)),
                  (h = 0),
                  (u = 0),
                  (n.mode = 2);
                break;
              }
              if (
                ((n.flags = 0),
                n.head && (n.head.done = !1),
                !(1 & n.wrap) || (((255 & h) << 8) + (h >> 8)) % 31)
              ) {
                (t.msg = "incorrect header check"), (n.mode = 30);
                break;
              }
              if (8 != (15 & h)) {
                (t.msg = "unknown compression method"), (n.mode = 30);
                break;
              }
              if (((u -= 4), (k = 8 + (15 & (h >>>= 4))), 0 === n.wbits))
                n.wbits = k;
              else if (k > n.wbits) {
                (t.msg = "invalid window size"), (n.mode = 30);
                break;
              }
              (n.dmax = 1 << k),
                (t.adler = n.check = 1),
                (n.mode = 512 & h ? 10 : 12),
                (h = 0),
                (u = 0);
              break;
            case 2:
              for (; u < 16; ) {
                if (0 === s) break t;
                s--, (h += r[o++] << u), (u += 8);
              }
              if (((n.flags = h), 8 != (255 & n.flags))) {
                (t.msg = "unknown compression method"), (n.mode = 30);
                break;
              }
              if (57344 & n.flags) {
                (t.msg = "unknown header flags set"), (n.mode = 30);
                break;
              }
              n.head && (n.head.text = (h >> 8) & 1),
                512 & n.flags &&
                  ((T[0] = 255 & h),
                  (T[1] = (h >>> 8) & 255),
                  (n.check = _a(n.check, T, 2, 0))),
                (h = 0),
                (u = 0),
                (n.mode = 3);
            case 3:
              for (; u < 32; ) {
                if (0 === s) break t;
                s--, (h += r[o++] << u), (u += 8);
              }
              n.head && (n.head.time = h),
                512 & n.flags &&
                  ((T[0] = 255 & h),
                  (T[1] = (h >>> 8) & 255),
                  (T[2] = (h >>> 16) & 255),
                  (T[3] = (h >>> 24) & 255),
                  (n.check = _a(n.check, T, 4, 0))),
                (h = 0),
                (u = 0),
                (n.mode = 4);
            case 4:
              for (; u < 16; ) {
                if (0 === s) break t;
                s--, (h += r[o++] << u), (u += 8);
              }
              n.head && ((n.head.xflags = 255 & h), (n.head.os = h >> 8)),
                512 & n.flags &&
                  ((T[0] = 255 & h),
                  (T[1] = (h >>> 8) & 255),
                  (n.check = _a(n.check, T, 2, 0))),
                (h = 0),
                (u = 0),
                (n.mode = 5);
            case 5:
              if (1024 & n.flags) {
                for (; u < 16; ) {
                  if (0 === s) break t;
                  s--, (h += r[o++] << u), (u += 8);
                }
                (n.length = h),
                  n.head && (n.head.extra_len = h),
                  512 & n.flags &&
                    ((T[0] = 255 & h),
                    (T[1] = (h >>> 8) & 255),
                    (n.check = _a(n.check, T, 2, 0))),
                  (h = 0),
                  (u = 0);
              } else n.head && (n.head.extra = null);
              n.mode = 6;
            case 6:
              if (
                1024 & n.flags &&
                ((f = n.length) > s && (f = s),
                f &&
                  (n.head &&
                    ((k = n.head.extra_len - n.length),
                    n.head.extra ||
                      (n.head.extra = new Array(n.head.extra_len)),
                    ua.arraySet(n.head.extra, r, o, f, k)),
                  512 & n.flags && (n.check = _a(n.check, r, f, o)),
                  (s -= f),
                  (o += f),
                  (n.length -= f)),
                n.length)
              )
                break t;
              (n.length = 0), (n.mode = 7);
            case 7:
              if (2048 & n.flags) {
                if (0 === s) break t;
                f = 0;
                do {
                  (k = r[o + f++]),
                    n.head &&
                      k &&
                      n.length < 65536 &&
                      (n.head.name += String.fromCharCode(k));
                } while (k && f < s);
                if (
                  (512 & n.flags && (n.check = _a(n.check, r, f, o)),
                  (s -= f),
                  (o += f),
                  k)
                )
                  break t;
              } else n.head && (n.head.name = null);
              (n.length = 0), (n.mode = 8);
            case 8:
              if (4096 & n.flags) {
                if (0 === s) break t;
                f = 0;
                do {
                  (k = r[o + f++]),
                    n.head &&
                      k &&
                      n.length < 65536 &&
                      (n.head.comment += String.fromCharCode(k));
                } while (k && f < s);
                if (
                  (512 & n.flags && (n.check = _a(n.check, r, f, o)),
                  (s -= f),
                  (o += f),
                  k)
                )
                  break t;
              } else n.head && (n.head.comment = null);
              n.mode = 9;
            case 9:
              if (512 & n.flags) {
                for (; u < 16; ) {
                  if (0 === s) break t;
                  s--, (h += r[o++] << u), (u += 8);
                }
                if (h !== (65535 & n.check)) {
                  (t.msg = "header crc mismatch"), (n.mode = 30);
                  break;
                }
                (h = 0), (u = 0);
              }
              n.head &&
                ((n.head.hcrc = (n.flags >> 9) & 1), (n.head.done = !0)),
                (t.adler = n.check = 0),
                (n.mode = 12);
              break;
            case 10:
              for (; u < 32; ) {
                if (0 === s) break t;
                s--, (h += r[o++] << u), (u += 8);
              }
              (t.adler = n.check = Ns(h)), (h = 0), (u = 0), (n.mode = 11);
            case 11:
              if (0 === n.havedict)
                return (
                  (t.next_out = a),
                  (t.avail_out = l),
                  (t.next_in = o),
                  (t.avail_in = s),
                  (n.hold = h),
                  (n.bits = u),
                  2
                );
              (t.adler = n.check = 1), (n.mode = 12);
            case 12:
              if (5 === e || 6 === e) break t;
            case 13:
              if (n.last) {
                (h >>>= 7 & u), (u -= 7 & u), (n.mode = 27);
                break;
              }
              for (; u < 3; ) {
                if (0 === s) break t;
                s--, (h += r[o++] << u), (u += 8);
              }
              switch (((n.last = 1 & h), (u -= 1), 3 & (h >>>= 1))) {
                case 0:
                  n.mode = 14;
                  break;
                case 1:
                  if ((Ls(n), (n.mode = 20), 6 === e)) {
                    (h >>>= 2), (u -= 2);
                    break t;
                  }
                  break;
                case 2:
                  n.mode = 17;
                  break;
                case 3:
                  (t.msg = "invalid block type"), (n.mode = 30);
              }
              (h >>>= 2), (u -= 2);
              break;
            case 14:
              for (h >>>= 7 & u, u -= 7 & u; u < 32; ) {
                if (0 === s) break t;
                s--, (h += r[o++] << u), (u += 8);
              }
              if ((65535 & h) != ((h >>> 16) ^ 65535)) {
                (t.msg = "invalid stored block lengths"), (n.mode = 30);
                break;
              }
              if (
                ((n.length = 65535 & h),
                (h = 0),
                (u = 0),
                (n.mode = 15),
                6 === e)
              )
                break t;
            case 15:
              n.mode = 16;
            case 16:
              if ((f = n.length)) {
                if ((f > s && (f = s), f > l && (f = l), 0 === f)) break t;
                ua.arraySet(i, r, o, f, a),
                  (s -= f),
                  (o += f),
                  (l -= f),
                  (a += f),
                  (n.length -= f);
                break;
              }
              n.mode = 12;
              break;
            case 17:
              for (; u < 14; ) {
                if (0 === s) break t;
                s--, (h += r[o++] << u), (u += 8);
              }
              if (
                ((n.nlen = 257 + (31 & h)),
                (h >>>= 5),
                (u -= 5),
                (n.ndist = 1 + (31 & h)),
                (h >>>= 5),
                (u -= 5),
                (n.ncode = 4 + (15 & h)),
                (h >>>= 4),
                (u -= 4),
                n.nlen > 286 || n.ndist > 30)
              ) {
                (t.msg = "too many length or distance symbols"), (n.mode = 30);
                break;
              }
              (n.have = 0), (n.mode = 18);
            case 18:
              for (; n.have < n.ncode; ) {
                for (; u < 3; ) {
                  if (0 === s) break t;
                  s--, (h += r[o++] << u), (u += 8);
                }
                (n.lens[P[n.have++]] = 7 & h), (h >>>= 3), (u -= 3);
              }
              for (; n.have < 19; ) n.lens[P[n.have++]] = 0;
              if (
                ((n.lencode = n.lendyn),
                (n.lenbits = 7),
                (S = { bits: n.lenbits }),
                (F = Bs(0, n.lens, 0, 19, n.lencode, 0, n.work, S)),
                (n.lenbits = S.bits),
                F)
              ) {
                (t.msg = "invalid code lengths set"), (n.mode = 30);
                break;
              }
              (n.have = 0), (n.mode = 19);
            case 19:
              for (; n.have < n.nlen + n.ndist; ) {
                for (
                  ;
                  (y =
                    ((A = n.lencode[h & ((1 << n.lenbits) - 1)]) >>> 16) & 255),
                    (m = 65535 & A),
                    !((v = A >>> 24) <= u);

                ) {
                  if (0 === s) break t;
                  s--, (h += r[o++] << u), (u += 8);
                }
                if (m < 16) (h >>>= v), (u -= v), (n.lens[n.have++] = m);
                else {
                  if (16 === m) {
                    for (C = v + 2; u < C; ) {
                      if (0 === s) break t;
                      s--, (h += r[o++] << u), (u += 8);
                    }
                    if (((h >>>= v), (u -= v), 0 === n.have)) {
                      (t.msg = "invalid bit length repeat"), (n.mode = 30);
                      break;
                    }
                    (k = n.lens[n.have - 1]),
                      (f = 3 + (3 & h)),
                      (h >>>= 2),
                      (u -= 2);
                  } else if (17 === m) {
                    for (C = v + 3; u < C; ) {
                      if (0 === s) break t;
                      s--, (h += r[o++] << u), (u += 8);
                    }
                    (u -= v),
                      (k = 0),
                      (f = 3 + (7 & (h >>>= v))),
                      (h >>>= 3),
                      (u -= 3);
                  } else {
                    for (C = v + 7; u < C; ) {
                      if (0 === s) break t;
                      s--, (h += r[o++] << u), (u += 8);
                    }
                    (u -= v),
                      (k = 0),
                      (f = 11 + (127 & (h >>>= v))),
                      (h >>>= 7),
                      (u -= 7);
                  }
                  if (n.have + f > n.nlen + n.ndist) {
                    (t.msg = "invalid bit length repeat"), (n.mode = 30);
                    break;
                  }
                  for (; f--; ) n.lens[n.have++] = k;
                }
              }
              if (30 === n.mode) break;
              if (0 === n.lens[256]) {
                (t.msg = "invalid code -- missing end-of-block"), (n.mode = 30);
                break;
              }
              if (
                ((n.lenbits = 9),
                (S = { bits: n.lenbits }),
                (F = Bs(1, n.lens, 0, n.nlen, n.lencode, 0, n.work, S)),
                (n.lenbits = S.bits),
                F)
              ) {
                (t.msg = "invalid literal/lengths set"), (n.mode = 30);
                break;
              }
              if (
                ((n.distbits = 6),
                (n.distcode = n.distdyn),
                (S = { bits: n.distbits }),
                (F = Bs(2, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, S)),
                (n.distbits = S.bits),
                F)
              ) {
                (t.msg = "invalid distances set"), (n.mode = 30);
                break;
              }
              if (((n.mode = 20), 6 === e)) break t;
            case 20:
              n.mode = 21;
            case 21:
              if (s >= 6 && l >= 258) {
                (t.next_out = a),
                  (t.avail_out = l),
                  (t.next_in = o),
                  (t.avail_in = s),
                  (n.hold = h),
                  (n.bits = u),
                  Ps(t, d),
                  (a = t.next_out),
                  (i = t.output),
                  (l = t.avail_out),
                  (o = t.next_in),
                  (r = t.input),
                  (s = t.avail_in),
                  (h = n.hold),
                  (u = n.bits),
                  12 === n.mode && (n.back = -1);
                break;
              }
              for (
                n.back = 0;
                (y =
                  ((A = n.lencode[h & ((1 << n.lenbits) - 1)]) >>> 16) & 255),
                  (m = 65535 & A),
                  !((v = A >>> 24) <= u);

              ) {
                if (0 === s) break t;
                s--, (h += r[o++] << u), (u += 8);
              }
              if (y && 0 == (240 & y)) {
                for (
                  b = v, w = y, x = m;
                  (y =
                    ((A = n.lencode[x + ((h & ((1 << (b + w)) - 1)) >> b)]) >>>
                      16) &
                    255),
                    (m = 65535 & A),
                    !(b + (v = A >>> 24) <= u);

                ) {
                  if (0 === s) break t;
                  s--, (h += r[o++] << u), (u += 8);
                }
                (h >>>= b), (u -= b), (n.back += b);
              }
              if (
                ((h >>>= v), (u -= v), (n.back += v), (n.length = m), 0 === y)
              ) {
                n.mode = 26;
                break;
              }
              if (32 & y) {
                (n.back = -1), (n.mode = 12);
                break;
              }
              if (64 & y) {
                (t.msg = "invalid literal/length code"), (n.mode = 30);
                break;
              }
              (n.extra = 15 & y), (n.mode = 22);
            case 22:
              if (n.extra) {
                for (C = n.extra; u < C; ) {
                  if (0 === s) break t;
                  s--, (h += r[o++] << u), (u += 8);
                }
                (n.length += h & ((1 << n.extra) - 1)),
                  (h >>>= n.extra),
                  (u -= n.extra),
                  (n.back += n.extra);
              }
              (n.was = n.length), (n.mode = 23);
            case 23:
              for (
                ;
                (y =
                  ((A = n.distcode[h & ((1 << n.distbits) - 1)]) >>> 16) & 255),
                  (m = 65535 & A),
                  !((v = A >>> 24) <= u);

              ) {
                if (0 === s) break t;
                s--, (h += r[o++] << u), (u += 8);
              }
              if (0 == (240 & y)) {
                for (
                  b = v, w = y, x = m;
                  (y =
                    ((A = n.distcode[x + ((h & ((1 << (b + w)) - 1)) >> b)]) >>>
                      16) &
                    255),
                    (m = 65535 & A),
                    !(b + (v = A >>> 24) <= u);

                ) {
                  if (0 === s) break t;
                  s--, (h += r[o++] << u), (u += 8);
                }
                (h >>>= b), (u -= b), (n.back += b);
              }
              if (((h >>>= v), (u -= v), (n.back += v), 64 & y)) {
                (t.msg = "invalid distance code"), (n.mode = 30);
                break;
              }
              (n.offset = m), (n.extra = 15 & y), (n.mode = 24);
            case 24:
              if (n.extra) {
                for (C = n.extra; u < C; ) {
                  if (0 === s) break t;
                  s--, (h += r[o++] << u), (u += 8);
                }
                (n.offset += h & ((1 << n.extra) - 1)),
                  (h >>>= n.extra),
                  (u -= n.extra),
                  (n.back += n.extra);
              }
              if (n.offset > n.dmax) {
                (t.msg = "invalid distance too far back"), (n.mode = 30);
                break;
              }
              n.mode = 25;
            case 25:
              if (0 === l) break t;
              if (((f = d - l), n.offset > f)) {
                if ((f = n.offset - f) > n.whave && n.sane) {
                  (t.msg = "invalid distance too far back"), (n.mode = 30);
                  break;
                }
                f > n.wnext
                  ? ((f -= n.wnext), (p = n.wsize - f))
                  : (p = n.wnext - f),
                  f > n.length && (f = n.length),
                  (g = n.window);
              } else (g = i), (p = a - n.offset), (f = n.length);
              f > l && (f = l), (l -= f), (n.length -= f);
              do {
                i[a++] = g[p++];
              } while (--f);
              0 === n.length && (n.mode = 21);
              break;
            case 26:
              if (0 === l) break t;
              (i[a++] = n.length), l--, (n.mode = 21);
              break;
            case 27:
              if (n.wrap) {
                for (; u < 32; ) {
                  if (0 === s) break t;
                  s--, (h |= r[o++] << u), (u += 8);
                }
                if (
                  ((d -= l),
                  (t.total_out += d),
                  (n.total += d),
                  d &&
                    (t.adler = n.check =
                      n.flags
                        ? _a(n.check, i, d, a - d)
                        : Ka(n.check, i, d, a - d)),
                  (d = l),
                  (n.flags ? h : Ns(h)) !== n.check)
                ) {
                  (t.msg = "incorrect data check"), (n.mode = 30);
                  break;
                }
                (h = 0), (u = 0);
              }
              n.mode = 28;
            case 28:
              if (n.wrap && n.flags) {
                for (; u < 32; ) {
                  if (0 === s) break t;
                  s--, (h += r[o++] << u), (u += 8);
                }
                if (h !== (4294967295 & n.total)) {
                  (t.msg = "incorrect length check"), (n.mode = 30);
                  break;
                }
                (h = 0), (u = 0);
              }
              n.mode = 29;
            case 29:
              F = 1;
              break t;
            case 30:
              F = -3;
              break t;
            case 31:
              return -4;
            case 32:
            default:
              return -2;
          }
        return (
          (t.next_out = a),
          (t.avail_out = l),
          (t.next_in = o),
          (t.avail_in = s),
          (n.hold = h),
          (n.bits = u),
          (n.wsize ||
            (d !== t.avail_out && n.mode < 30 && (n.mode < 27 || 4 !== e))) &&
            Ks(t, t.output, t.next_out, d - t.avail_out),
          (c -= t.avail_in),
          (d -= t.avail_out),
          (t.total_in += c),
          (t.total_out += d),
          (n.total += d),
          n.wrap &&
            d &&
            (t.adler = n.check =
              n.flags
                ? _a(n.check, i, d, t.next_out - d)
                : Ka(n.check, i, d, t.next_out - d)),
          (t.data_type =
            n.bits +
            (n.last ? 64 : 0) +
            (12 === n.mode ? 128 : 0) +
            (20 === n.mode || 15 === n.mode ? 256 : 0)),
          ((0 === c && 0 === d) || 4 === e) && 0 === F && (F = -5),
          F
        );
      },
      inflateEnd: function (t) {
        if (!t || !t.state) return -2;
        var e = t.state;
        return e.window && (e.window = null), (t.state = null), 0;
      },
      inflateGetHeader: function (t, e) {
        var n;
        return t && t.state
          ? 0 == (2 & (n = t.state).wrap)
            ? -2
            : ((n.head = e), (e.done = !1), 0)
          : -2;
      },
      inflateSetDictionary: function (t, e) {
        var n,
          r = e.length;
        return t && t.state
          ? 0 !== (n = t.state).wrap && 11 !== n.mode
            ? -2
            : 11 === n.mode && Ka(1, e, r, 0) !== n.check
            ? -3
            : Ks(t, e, r, r)
            ? ((n.mode = 31), -4)
            : ((n.havedict = 1), 0)
          : -2;
      },
      inflateInfo: "pako inflate (from Nodeca project)",
    },
    Hs = {
      Z_NO_FLUSH: 0,
      Z_PARTIAL_FLUSH: 1,
      Z_SYNC_FLUSH: 2,
      Z_FULL_FLUSH: 3,
      Z_FINISH: 4,
      Z_BLOCK: 5,
      Z_TREES: 6,
      Z_OK: 0,
      Z_STREAM_END: 1,
      Z_NEED_DICT: 2,
      Z_ERRNO: -1,
      Z_STREAM_ERROR: -2,
      Z_DATA_ERROR: -3,
      Z_BUF_ERROR: -5,
      Z_NO_COMPRESSION: 0,
      Z_BEST_SPEED: 1,
      Z_BEST_COMPRESSION: 9,
      Z_DEFAULT_COMPRESSION: -1,
      Z_FILTERED: 1,
      Z_HUFFMAN_ONLY: 2,
      Z_RLE: 3,
      Z_FIXED: 4,
      Z_DEFAULT_STRATEGY: 0,
      Z_BINARY: 0,
      Z_TEXT: 1,
      Z_UNKNOWN: 2,
      Z_DEFLATED: 8,
    };
  var _s = function () {
      (this.text = 0),
        (this.time = 0),
        (this.xflags = 0),
        (this.os = 0),
        (this.extra = null),
        (this.extra_len = 0),
        (this.name = ""),
        (this.comment = ""),
        (this.hcrc = 0),
        (this.done = !1);
    },
    Xs = Object.prototype.toString;
  function Zs(t) {
    if (!(this instanceof Zs)) return new Zs(t);
    this.options = ua.assign(
      { chunkSize: 16384, windowBits: 0, to: "" },
      t || {}
    );
    var e = this.options;
    e.raw &&
      e.windowBits >= 0 &&
      e.windowBits < 16 &&
      ((e.windowBits = -e.windowBits),
      0 === e.windowBits && (e.windowBits = -15)),
      !(e.windowBits >= 0 && e.windowBits < 16) ||
        (t && t.windowBits) ||
        (e.windowBits += 32),
      e.windowBits > 15 &&
        e.windowBits < 48 &&
        0 == (15 & e.windowBits) &&
        (e.windowBits |= 15),
      (this.err = 0),
      (this.msg = ""),
      (this.ended = !1),
      (this.chunks = []),
      (this.strm = new Fs()),
      (this.strm.avail_out = 0);
    var n = Gs.inflateInit2(this.strm, e.windowBits);
    if (n !== Hs.Z_OK) throw new Error(Xa[n]);
    if (
      ((this.header = new _s()),
      Gs.inflateGetHeader(this.strm, this.header),
      e.dictionary &&
        ("string" == typeof e.dictionary
          ? (e.dictionary = ms(e.dictionary))
          : "[object ArrayBuffer]" === Xs.call(e.dictionary) &&
            (e.dictionary = new Uint8Array(e.dictionary)),
        e.raw &&
          (n = Gs.inflateSetDictionary(this.strm, e.dictionary)) !== Hs.Z_OK))
    )
      throw new Error(Xa[n]);
  }
  function Ys(t, e) {
    var n = new Zs(e);
    if ((n.push(t, !0), n.err)) throw n.msg || Xa[n.err];
    return n.result;
  }
  (Zs.prototype.push = function (t, e) {
    var n,
      r,
      i,
      o,
      a,
      s = this.strm,
      l = this.options.chunkSize,
      h = this.options.dictionary,
      u = !1;
    if (this.ended) return !1;
    (r = e === ~~e ? e : !0 === e ? Hs.Z_FINISH : Hs.Z_NO_FLUSH),
      "string" == typeof t
        ? (s.input = ws(t))
        : "[object ArrayBuffer]" === Xs.call(t)
        ? (s.input = new Uint8Array(t))
        : (s.input = t),
      (s.next_in = 0),
      (s.avail_in = s.input.length);
    do {
      if (
        (0 === s.avail_out &&
          ((s.output = new ua.Buf8(l)), (s.next_out = 0), (s.avail_out = l)),
        (n = Gs.inflate(s, Hs.Z_NO_FLUSH)) === Hs.Z_NEED_DICT &&
          h &&
          (n = Gs.inflateSetDictionary(this.strm, h)),
        n === Hs.Z_BUF_ERROR && !0 === u && ((n = Hs.Z_OK), (u = !1)),
        n !== Hs.Z_STREAM_END && n !== Hs.Z_OK)
      )
        return this.onEnd(n), (this.ended = !0), !1;
      s.next_out &&
        ((0 !== s.avail_out &&
          n !== Hs.Z_STREAM_END &&
          (0 !== s.avail_in || (r !== Hs.Z_FINISH && r !== Hs.Z_SYNC_FLUSH))) ||
          ("string" === this.options.to
            ? ((i = ks(s.output, s.next_out)),
              (o = s.next_out - i),
              (a = xs(s.output, i)),
              (s.next_out = o),
              (s.avail_out = l - o),
              o && ua.arraySet(s.output, s.output, i, o, 0),
              this.onData(a))
            : this.onData(ua.shrinkBuf(s.output, s.next_out)))),
        0 === s.avail_in && 0 === s.avail_out && (u = !0);
    } while ((s.avail_in > 0 || 0 === s.avail_out) && n !== Hs.Z_STREAM_END);
    return (
      n === Hs.Z_STREAM_END && (r = Hs.Z_FINISH),
      r === Hs.Z_FINISH
        ? ((n = Gs.inflateEnd(this.strm)),
          this.onEnd(n),
          (this.ended = !0),
          n === Hs.Z_OK)
        : r !== Hs.Z_SYNC_FLUSH || (this.onEnd(Hs.Z_OK), (s.avail_out = 0), !0)
    );
  }),
    (Zs.prototype.onData = function (t) {
      this.chunks.push(t);
    }),
    (Zs.prototype.onEnd = function (t) {
      t === Hs.Z_OK &&
        ("string" === this.options.to
          ? (this.result = this.chunks.join(""))
          : (this.result = ua.flattenChunks(this.chunks))),
        (this.chunks = []),
        (this.err = t),
        (this.msg = this.strm.msg);
    });
  var Js = {
      Inflate: Zs,
      inflate: Ys,
      inflateRaw: function (t, e) {
        return ((e = e || {}).raw = !0), Ys(t, e);
      },
      ungzip: Ys,
    },
    Qs = {};
  (0, ua.assign)(Qs, Ts, Js, Hs);
  var $s,
    tl,
    el,
    nl = Qs,
    rl = {};
  (rl.toRGBA8 = function (t) {
    var e = t.width,
      n = t.height;
    if (null == t.tabs.acTL)
      return [rl.toRGBA8.decodeImage(t.data, e, n, t).buffer];
    var r = [];
    null == t.frames[0].data && (t.frames[0].data = t.data);
    for (
      var i = e * n * 4,
        o = new Uint8Array(i),
        a = new Uint8Array(i),
        s = new Uint8Array(i),
        l = 0;
      l < t.frames.length;
      l++
    ) {
      var h = t.frames[l],
        u = h.rect.x,
        c = h.rect.y,
        d = h.rect.width,
        f = h.rect.height,
        p = rl.toRGBA8.decodeImage(h.data, d, f, t);
      if (0 != l) for (var g = 0; g < i; g++) s[g] = o[g];
      if (
        (0 == h.blend
          ? rl._copyTile(p, d, f, o, e, n, u, c, 0)
          : 1 == h.blend && rl._copyTile(p, d, f, o, e, n, u, c, 1),
        r.push(o.buffer.slice(0)),
        0 == h.dispose)
      );
      else if (1 == h.dispose) rl._copyTile(a, d, f, o, e, n, u, c, 0);
      else if (2 == h.dispose) for (g = 0; g < i; g++) o[g] = s[g];
    }
    return r;
  }),
    (rl.toRGBA8.decodeImage = function (t, e, n, r) {
      var i = e * n,
        o = rl.decode._getBPP(r),
        a = Math.ceil((e * o) / 8),
        s = new Uint8Array(4 * i),
        l = new Uint32Array(s.buffer),
        h = r.ctype,
        u = r.depth,
        c = rl._bin.readUshort;
      if (6 == h) {
        var d = i << 2;
        if (8 == u)
          for (var f = 0; f < d; f += 4)
            (s[f] = t[f]),
              (s[f + 1] = t[f + 1]),
              (s[f + 2] = t[f + 2]),
              (s[f + 3] = t[f + 3]);
        if (16 == u) for (f = 0; f < d; f++) s[f] = t[f << 1];
      } else if (2 == h) {
        var p = r.tabs.tRNS;
        if (null == p) {
          if (8 == u)
            for (f = 0; f < i; f++) {
              var g = 3 * f;
              l[f] = (255 << 24) | (t[g + 2] << 16) | (t[g + 1] << 8) | t[g];
            }
          if (16 == u)
            for (f = 0; f < i; f++) {
              g = 6 * f;
              l[f] = (255 << 24) | (t[g + 4] << 16) | (t[g + 2] << 8) | t[g];
            }
        } else {
          var v = p[0],
            y = p[1],
            m = p[2];
          if (8 == u)
            for (f = 0; f < i; f++) {
              var b = f << 2;
              g = 3 * f;
              (l[f] = (255 << 24) | (t[g + 2] << 16) | (t[g + 1] << 8) | t[g]),
                t[g] == v && t[g + 1] == y && t[g + 2] == m && (s[b + 3] = 0);
            }
          if (16 == u)
            for (f = 0; f < i; f++) {
              (b = f << 2), (g = 6 * f);
              (l[f] = (255 << 24) | (t[g + 4] << 16) | (t[g + 2] << 8) | t[g]),
                c(t, g) == v &&
                  c(t, g + 2) == y &&
                  c(t, g + 4) == m &&
                  (s[b + 3] = 0);
            }
        }
      } else if (3 == h) {
        var w = r.tabs.PLTE,
          x = r.tabs.tRNS,
          k = x ? x.length : 0;
        if (1 == u)
          for (var F = 0; F < n; F++) {
            var S = F * a,
              C = F * e;
            for (f = 0; f < e; f++) {
              b = (C + f) << 2;
              var A = 3 * (T = (t[S + (f >> 3)] >> (7 - ((7 & f) << 0))) & 1);
              (s[b] = w[A]),
                (s[b + 1] = w[A + 1]),
                (s[b + 2] = w[A + 2]),
                (s[b + 3] = T < k ? x[T] : 255);
            }
          }
        if (2 == u)
          for (F = 0; F < n; F++)
            for (S = F * a, C = F * e, f = 0; f < e; f++) {
              (b = (C + f) << 2),
                (A = 3 * (T = (t[S + (f >> 2)] >> (6 - ((3 & f) << 1))) & 3));
              (s[b] = w[A]),
                (s[b + 1] = w[A + 1]),
                (s[b + 2] = w[A + 2]),
                (s[b + 3] = T < k ? x[T] : 255);
            }
        if (4 == u)
          for (F = 0; F < n; F++)
            for (S = F * a, C = F * e, f = 0; f < e; f++) {
              (b = (C + f) << 2),
                (A = 3 * (T = (t[S + (f >> 1)] >> (4 - ((1 & f) << 2))) & 15));
              (s[b] = w[A]),
                (s[b + 1] = w[A + 1]),
                (s[b + 2] = w[A + 2]),
                (s[b + 3] = T < k ? x[T] : 255);
            }
        if (8 == u)
          for (f = 0; f < i; f++) {
            var T;
            (b = f << 2), (A = 3 * (T = t[f]));
            (s[b] = w[A]),
              (s[b + 1] = w[A + 1]),
              (s[b + 2] = w[A + 2]),
              (s[b + 3] = T < k ? x[T] : 255);
          }
      } else if (4 == h) {
        if (8 == u)
          for (f = 0; f < i; f++) {
            b = f << 2;
            var P = t[(z = f << 1)];
            (s[b] = P), (s[b + 1] = P), (s[b + 2] = P), (s[b + 3] = t[z + 1]);
          }
        if (16 == u)
          for (f = 0; f < i; f++) {
            var z;
            (b = f << 2), (P = t[(z = f << 2)]);
            (s[b] = P), (s[b + 1] = P), (s[b + 2] = P), (s[b + 3] = t[z + 2]);
          }
      } else if (0 == h)
        for (v = r.tabs.tRNS ? r.tabs.tRNS : -1, F = 0; F < n; F++) {
          var R = F * a,
            O = F * e;
          if (1 == u)
            for (var D = 0; D < e; D++) {
              var B =
                (P = 255 * ((t[R + (D >>> 3)] >>> (7 - (7 & D))) & 1)) ==
                255 * v
                  ? 0
                  : 255;
              l[O + D] = (B << 24) | (P << 16) | (P << 8) | P;
            }
          else if (2 == u)
            for (D = 0; D < e; D++) {
              B =
                (P = 85 * ((t[R + (D >>> 2)] >>> (6 - ((3 & D) << 1))) & 3)) ==
                85 * v
                  ? 0
                  : 255;
              l[O + D] = (B << 24) | (P << 16) | (P << 8) | P;
            }
          else if (4 == u)
            for (D = 0; D < e; D++) {
              B =
                (P = 17 * ((t[R + (D >>> 1)] >>> (4 - ((1 & D) << 2))) & 15)) ==
                17 * v
                  ? 0
                  : 255;
              l[O + D] = (B << 24) | (P << 16) | (P << 8) | P;
            }
          else if (8 == u)
            for (D = 0; D < e; D++) {
              B = (P = t[R + D]) == v ? 0 : 255;
              l[O + D] = (B << 24) | (P << 16) | (P << 8) | P;
            }
          else if (16 == u)
            for (D = 0; D < e; D++) {
              (P = t[R + (D << 1)]), (B = c(t, R + (D << f)) == v ? 0 : 255);
              l[O + D] = (B << 24) | (P << 16) | (P << 8) | P;
            }
        }
      return s;
    }),
    (rl.decode = function (t) {
      for (
        var e,
          n = new Uint8Array(t),
          r = 8,
          i = rl._bin,
          o = i.readUshort,
          a = i.readUint,
          s = { tabs: {}, frames: [] },
          l = new Uint8Array(n.length),
          h = 0,
          u = 0,
          c = [137, 80, 78, 71, 13, 10, 26, 10],
          d = 0;
        d < 8;
        d++
      )
        if (n[d] != c[d]) throw "The input is not a PNG file!";
      for (; r < n.length; ) {
        var f = i.readUint(n, r);
        r += 4;
        var p = i.readASCII(n, r, 4);
        if (((r += 4), "IHDR" == p)) rl.decode._IHDR(n, r, s);
        else if ("IDAT" == p) {
          for (d = 0; d < f; d++) l[h + d] = n[r + d];
          h += f;
        } else if ("acTL" == p)
          (s.tabs[p] = { num_frames: a(n, r), num_plays: a(n, r + 4) }),
            (e = new Uint8Array(n.length));
        else if ("fcTL" == p) {
          var g;
          if (0 != u)
            ((g = s.frames[s.frames.length - 1]).data = rl.decode._decompress(
              s,
              e.slice(0, u),
              g.rect.width,
              g.rect.height
            )),
              (u = 0);
          var v = {
              x: a(n, r + 12),
              y: a(n, r + 16),
              width: a(n, r + 4),
              height: a(n, r + 8),
            },
            y = o(n, r + 22);
          y = o(n, r + 20) / (0 == y ? 100 : y);
          var m = {
            rect: v,
            delay: Math.round(1e3 * y),
            dispose: n[r + 24],
            blend: n[r + 25],
          };
          s.frames.push(m);
        } else if ("fdAT" == p) {
          for (d = 0; d < f - 4; d++) e[u + d] = n[r + d + 4];
          u += f - 4;
        } else if ("pHYs" == p)
          s.tabs[p] = [i.readUint(n, r), i.readUint(n, r + 4), n[r + 8]];
        else if ("cHRM" == p) {
          s.tabs[p] = [];
          for (d = 0; d < 8; d++) s.tabs[p].push(i.readUint(n, r + 4 * d));
        } else if ("tEXt" == p) {
          null == s.tabs[p] && (s.tabs[p] = {});
          var b = i.nextZero(n, r),
            w = i.readASCII(n, r, b - r),
            x = i.readASCII(n, b + 1, r + f - b - 1);
          s.tabs[p][w] = x;
        } else if ("iTXt" == p) {
          null == s.tabs[p] && (s.tabs[p] = {});
          b = 0;
          var k = r;
          b = i.nextZero(n, k);
          w = i.readASCII(n, k, b - k);
          (k = b + 1), (k += 2), (b = i.nextZero(n, k));
          i.readASCII(n, k, b - k);
          (k = b + 1), (b = i.nextZero(n, k));
          i.readUTF8(n, k, b - k);
          k = b + 1;
          x = i.readUTF8(n, k, f - (k - r));
          s.tabs[p][w] = x;
        } else if ("PLTE" == p) s.tabs[p] = i.readBytes(n, r, f);
        else if ("hIST" == p) {
          var F = s.tabs.PLTE.length / 3;
          s.tabs[p] = [];
          for (d = 0; d < F; d++) s.tabs[p].push(o(n, r + 2 * d));
        } else if ("tRNS" == p)
          3 == s.ctype
            ? (s.tabs[p] = i.readBytes(n, r, f))
            : 0 == s.ctype
            ? (s.tabs[p] = o(n, r))
            : 2 == s.ctype && (s.tabs[p] = [o(n, r), o(n, r + 2), o(n, r + 4)]);
        else if ("gAMA" == p) s.tabs[p] = i.readUint(n, r) / 1e5;
        else if ("sRGB" == p) s.tabs[p] = n[r];
        else if ("bKGD" == p)
          0 == s.ctype || 4 == s.ctype
            ? (s.tabs[p] = [o(n, r)])
            : 2 == s.ctype || 6 == s.ctype
            ? (s.tabs[p] = [o(n, r), o(n, r + 2), o(n, r + 4)])
            : 3 == s.ctype && (s.tabs[p] = n[r]);
        else if ("IEND" == p) break;
        r += f;
        i.readUint(n, r);
        r += 4;
      }
      0 != u &&
        (((g = s.frames[s.frames.length - 1]).data = rl.decode._decompress(
          s,
          e.slice(0, u),
          g.rect.width,
          g.rect.height
        )),
        (u = 0));
      return (
        (s.data = rl.decode._decompress(s, l, s.width, s.height)),
        delete s.compress,
        delete s.interlace,
        delete s.filter,
        s
      );
    }),
    (rl.decode._decompress = function (t, e, n, r) {
      var i = rl.decode._getBPP(t),
        o = Math.ceil((n * i) / 8),
        a = new Uint8Array((o + 1 + t.interlace) * r);
      return (
        (e = rl.decode._inflate(e, a)),
        0 == t.interlace
          ? (e = rl.decode._filterZero(e, t, 0, n, r))
          : 1 == t.interlace && (e = rl.decode._readInterlace(e, t)),
        e
      );
    }),
    (rl.decode._inflate = function (t, e) {
      return rl.inflateRaw(new Uint8Array(t.buffer, 2, t.length - 6), e);
    }),
    (rl.inflateRaw =
      (((el = {}).H = {}),
      (el.H.N = function (t, e) {
        var n,
          r,
          i = Uint8Array,
          o = 0,
          a = 0,
          s = 0,
          l = 0,
          h = 0,
          u = 0,
          c = 0,
          d = 0,
          f = 0;
        if (3 == t[0] && 0 == t[1]) return e || new i(0);
        var p = el.H,
          g = p.b,
          v = p.e,
          y = p.R,
          m = p.n,
          b = p.A,
          w = p.Z,
          x = p.m,
          k = null == e;
        for (k && (e = new i((t.length >>> 2) << 3)); 0 == o; )
          if (((o = g(t, f, 1)), (a = g(t, f + 1, 2)), (f += 3), 0 != a)) {
            if (
              (k && (e = el.H.W(e, d + (1 << 17))),
              1 == a && ((n = x.J), (r = x.h), (u = 511), (c = 31)),
              2 == a)
            ) {
              (s = v(t, f, 5) + 257),
                (l = v(t, f + 5, 5) + 1),
                (h = v(t, f + 10, 4) + 4),
                (f += 14);
              for (var F = 1, S = 0; S < 38; S += 2)
                (x.Q[S] = 0), (x.Q[S + 1] = 0);
              for (S = 0; S < h; S++) {
                var C = v(t, f + 3 * S, 3);
                (x.Q[1 + (x.X[S] << 1)] = C), C > F && (F = C);
              }
              (f += 3 * h),
                m(x.Q, F),
                b(x.Q, F, x.u),
                (n = x.w),
                (r = x.d),
                (f = y(x.u, (1 << F) - 1, s + l, t, f, x.v));
              var A = p.V(x.v, 0, s, x.C);
              u = (1 << A) - 1;
              var T = p.V(x.v, s, l, x.D);
              (c = (1 << T) - 1),
                m(x.C, A),
                b(x.C, A, n),
                m(x.D, T),
                b(x.D, T, r);
            }
            for (;;) {
              var P = n[w(t, f) & u];
              f += 15 & P;
              var z = P >>> 4;
              if (z >>> 8 == 0) e[d++] = z;
              else {
                if (256 == z) break;
                var R = d + z - 254;
                if (z > 264) {
                  var O = x.q[z - 257];
                  (R = d + (O >>> 3) + v(t, f, 7 & O)), (f += 7 & O);
                }
                var D = r[w(t, f) & c];
                f += 15 & D;
                var B = D >>> 4,
                  N = x.c[B],
                  E = (N >>> 4) + g(t, f, 15 & N);
                for (f += 15 & N; d < R; )
                  (e[d] = e[d++ - E]),
                    (e[d] = e[d++ - E]),
                    (e[d] = e[d++ - E]),
                    (e[d] = e[d++ - E]);
                d = R;
              }
            }
          } else {
            0 != (7 & f) && (f += 8 - (7 & f));
            var j = 4 + (f >>> 3),
              M = t[j - 4] | (t[j - 3] << 8);
            k && (e = el.H.W(e, d + M)),
              e.set(new i(t.buffer, t.byteOffset + j, M), d),
              (f = (j + M) << 3),
              (d += M);
          }
        return e.length == d ? e : e.slice(0, d);
      }),
      (el.H.W = function (t, e) {
        var n = t.length;
        if (e <= n) return t;
        var r = new Uint8Array(n << 1);
        return r.set(t, 0), r;
      }),
      (el.H.R = function (t, e, n, r, i, o) {
        for (var a = el.H.e, s = el.H.Z, l = 0; l < n; ) {
          var h = t[s(r, i) & e];
          i += 15 & h;
          var u = h >>> 4;
          if (u <= 15) (o[l] = u), l++;
          else {
            var c = 0,
              d = 0;
            16 == u
              ? ((d = 3 + a(r, i, 2)), (i += 2), (c = o[l - 1]))
              : 17 == u
              ? ((d = 3 + a(r, i, 3)), (i += 3))
              : 18 == u && ((d = 11 + a(r, i, 7)), (i += 7));
            for (var f = l + d; l < f; ) (o[l] = c), l++;
          }
        }
        return i;
      }),
      (el.H.V = function (t, e, n, r) {
        for (var i = 0, o = 0, a = r.length >>> 1; o < n; ) {
          var s = t[o + e];
          (r[o << 1] = 0), (r[1 + (o << 1)] = s), s > i && (i = s), o++;
        }
        for (; o < a; ) (r[o << 1] = 0), (r[1 + (o << 1)] = 0), o++;
        return i;
      }),
      (el.H.n = function (t, e) {
        for (
          var n, r, i, o, a = el.H.m, s = t.length, l = a.j, h = 0;
          h <= e;
          h++
        )
          l[h] = 0;
        for (h = 1; h < s; h += 2) l[t[h]]++;
        var u = a.K;
        for (n = 0, l[0] = 0, r = 1; r <= e; r++)
          (n = (n + l[r - 1]) << 1), (u[r] = n);
        for (i = 0; i < s; i += 2)
          0 != (o = t[i + 1]) && ((t[i] = u[o]), u[o]++);
      }),
      (el.H.A = function (t, e, n) {
        for (var r = t.length, i = el.H.m.r, o = 0; o < r; o += 2)
          if (0 != t[o + 1])
            for (
              var a = o >> 1,
                s = t[o + 1],
                l = (a << 4) | s,
                h = e - s,
                u = t[o] << h,
                c = u + (1 << h);
              u != c;

            )
              (n[i[u] >>> (15 - e)] = l), u++;
      }),
      (el.H.l = function (t, e) {
        for (var n = el.H.m.r, r = 15 - e, i = 0; i < t.length; i += 2) {
          var o = t[i] << (e - t[i + 1]);
          t[i] = n[o] >>> r;
        }
      }),
      (el.H.M = function (t, e, n) {
        n <<= 7 & e;
        var r = e >>> 3;
        (t[r] |= n), (t[r + 1] |= n >>> 8);
      }),
      (el.H.I = function (t, e, n) {
        n <<= 7 & e;
        var r = e >>> 3;
        (t[r] |= n), (t[r + 1] |= n >>> 8), (t[r + 2] |= n >>> 16);
      }),
      (el.H.e = function (t, e, n) {
        return (
          ((t[e >>> 3] | (t[1 + (e >>> 3)] << 8)) >>> (7 & e)) & ((1 << n) - 1)
        );
      }),
      (el.H.b = function (t, e, n) {
        return (
          ((t[e >>> 3] | (t[1 + (e >>> 3)] << 8) | (t[2 + (e >>> 3)] << 16)) >>>
            (7 & e)) &
          ((1 << n) - 1)
        );
      }),
      (el.H.Z = function (t, e) {
        return (
          (t[e >>> 3] | (t[1 + (e >>> 3)] << 8) | (t[2 + (e >>> 3)] << 16)) >>>
          (7 & e)
        );
      }),
      (el.H.i = function (t, e) {
        return (
          (t[e >>> 3] |
            (t[1 + (e >>> 3)] << 8) |
            (t[2 + (e >>> 3)] << 16) |
            (t[3 + (e >>> 3)] << 24)) >>>
          (7 & e)
        );
      }),
      (el.H.m =
        (($s = Uint16Array),
        (tl = Uint32Array),
        {
          K: new $s(16),
          j: new $s(16),
          X: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
          S: [
            3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51,
            59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999,
          ],
          T: [
            0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
            4, 5, 5, 5, 5, 0, 0, 0, 0,
          ],
          q: new $s(32),
          p: [
            1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
            513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385,
            24577, 65535, 65535,
          ],
          z: [
            0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9,
            10, 10, 11, 11, 12, 12, 13, 13, 0, 0,
          ],
          c: new tl(32),
          J: new $s(512),
          _: [],
          h: new $s(32),
          $: [],
          w: new $s(32768),
          C: [],
          v: [],
          d: new $s(32768),
          D: [],
          u: new $s(512),
          Q: [],
          r: new $s(32768),
          s: new tl(286),
          Y: new tl(30),
          a: new tl(19),
          t: new tl(15e3),
          k: new $s(65536),
          g: new $s(32768),
        })),
      (function () {
        for (var t = el.H.m, e = 0; e < 32768; e++) {
          var n = e;
          (n =
            ((4278255360 &
              (n =
                ((4042322160 &
                  (n =
                    ((3435973836 &
                      (n =
                        ((2863311530 & n) >>> 1) | ((1431655765 & n) << 1))) >>>
                      2) |
                    ((858993459 & n) << 2))) >>>
                  4) |
                ((252645135 & n) << 4))) >>>
              8) |
            ((16711935 & n) << 8)),
            (t.r[e] = ((n >>> 16) | (n << 16)) >>> 17);
        }
        function r(t, e, n) {
          for (; 0 != e--; ) t.push(0, n);
        }
        for (e = 0; e < 32; e++)
          (t.q[e] = (t.S[e] << 3) | t.T[e]), (t.c[e] = (t.p[e] << 4) | t.z[e]);
        r(t._, 144, 8),
          r(t._, 112, 9),
          r(t._, 24, 7),
          r(t._, 8, 8),
          el.H.n(t._, 9),
          el.H.A(t._, 9, t.J),
          el.H.l(t._, 9),
          r(t.$, 32, 5),
          el.H.n(t.$, 5),
          el.H.A(t.$, 5, t.h),
          el.H.l(t.$, 5),
          r(t.Q, 19, 0),
          r(t.C, 286, 0),
          r(t.D, 30, 0),
          r(t.v, 320, 0);
      })(),
      el.H.N)),
    (rl.decode._readInterlace = function (t, e) {
      for (
        var n = e.width,
          r = e.height,
          i = rl.decode._getBPP(e),
          o = i >> 3,
          a = Math.ceil((n * i) / 8),
          s = new Uint8Array(r * a),
          l = 0,
          h = [0, 0, 4, 0, 2, 0, 1],
          u = [0, 4, 0, 2, 0, 1, 0],
          c = [8, 8, 8, 4, 4, 2, 2],
          d = [8, 8, 4, 4, 2, 2, 1],
          f = 0;
        f < 7;

      ) {
        for (var p = c[f], g = d[f], v = 0, y = 0, m = h[f]; m < r; )
          (m += p), y++;
        for (var b = u[f]; b < n; ) (b += g), v++;
        var w = Math.ceil((v * i) / 8);
        rl.decode._filterZero(t, e, l, v, y);
        for (var x = 0, k = h[f]; k < r; ) {
          for (var F = u[f], S = (l + x * w) << 3; F < n; ) {
            var C;
            if (1 == i)
              (C = ((C = t[S >> 3]) >> (7 - (7 & S))) & 1),
                (s[k * a + (F >> 3)] |= C << (7 - ((7 & F) << 0)));
            if (2 == i)
              (C = ((C = t[S >> 3]) >> (6 - (7 & S))) & 3),
                (s[k * a + (F >> 2)] |= C << (6 - ((3 & F) << 1)));
            if (4 == i)
              (C = ((C = t[S >> 3]) >> (4 - (7 & S))) & 15),
                (s[k * a + (F >> 1)] |= C << (4 - ((1 & F) << 2)));
            if (i >= 8)
              for (var A = k * a + F * o, T = 0; T < o; T++)
                s[A + T] = t[(S >> 3) + T];
            (S += i), (F += g);
          }
          x++, (k += p);
        }
        v * y != 0 && (l += y * (1 + w)), (f += 1);
      }
      return s;
    }),
    (rl.decode._getBPP = function (t) {
      return [1, null, 3, 1, 2, null, 4][t.ctype] * t.depth;
    }),
    (rl.decode._filterZero = function (t, e, n, r, i) {
      var o = rl.decode._getBPP(e),
        a = Math.ceil((r * o) / 8),
        s = rl.decode._paeth;
      o = Math.ceil(o / 8);
      var l = 0,
        h = 1,
        u = t[n],
        c = 0;
      if ((u > 1 && (t[n] = [0, 0, 1][u - 2]), 3 == u))
        for (c = o; c < a; c++)
          t[c + 1] = (t[c + 1] + (t[c + 1 - o] >>> 1)) & 255;
      for (var d = 0; d < i; d++)
        if (((c = 0), 0 == (u = t[(h = (l = n + d * a) + d + 1) - 1])))
          for (; c < a; c++) t[l + c] = t[h + c];
        else if (1 == u) {
          for (; c < o; c++) t[l + c] = t[h + c];
          for (; c < a; c++) t[l + c] = t[h + c] + t[l + c - o];
        } else if (2 == u)
          for (; c < a; c++) t[l + c] = t[h + c] + t[l + c - a];
        else if (3 == u) {
          for (; c < o; c++) t[l + c] = t[h + c] + (t[l + c - a] >>> 1);
          for (; c < a; c++)
            t[l + c] = t[h + c] + ((t[l + c - a] + t[l + c - o]) >>> 1);
        } else {
          for (; c < o; c++) t[l + c] = t[h + c] + s(0, t[l + c - a], 0);
          for (; c < a; c++)
            t[l + c] =
              t[h + c] + s(t[l + c - o], t[l + c - a], t[l + c - o - a]);
        }
      return t;
    }),
    (rl.decode._paeth = function (t, e, n) {
      var r = t + e - n,
        i = r - t,
        o = r - e,
        a = r - n;
      return i * i <= o * o && i * i <= a * a ? t : o * o <= a * a ? e : n;
    }),
    (rl.decode._IHDR = function (t, e, n) {
      var r = rl._bin;
      (n.width = r.readUint(t, e)),
        (e += 4),
        (n.height = r.readUint(t, e)),
        (e += 4),
        (n.depth = t[e]),
        e++,
        (n.ctype = t[e]),
        e++,
        (n.compress = t[e]),
        e++,
        (n.filter = t[e]),
        e++,
        (n.interlace = t[e]),
        e++;
    }),
    (rl._bin = {
      nextZero: function (t, e) {
        for (; 0 != t[e]; ) e++;
        return e;
      },
      readUshort: function (t, e) {
        return (t[e] << 8) | t[e + 1];
      },
      writeUshort: function (t, e, n) {
        (t[e] = (n >> 8) & 255), (t[e + 1] = 255 & n);
      },
      readUint: function (t, e) {
        return (
          16777216 * t[e] + ((t[e + 1] << 16) | (t[e + 2] << 8) | t[e + 3])
        );
      },
      writeUint: function (t, e, n) {
        (t[e] = (n >> 24) & 255),
          (t[e + 1] = (n >> 16) & 255),
          (t[e + 2] = (n >> 8) & 255),
          (t[e + 3] = 255 & n);
      },
      readASCII: function (t, e, n) {
        for (var r = "", i = 0; i < n; i++) r += String.fromCharCode(t[e + i]);
        return r;
      },
      writeASCII: function (t, e, n) {
        for (var r = 0; r < n.length; r++) t[e + r] = n.charCodeAt(r);
      },
      readBytes: function (t, e, n) {
        for (var r = [], i = 0; i < n; i++) r.push(t[e + i]);
        return r;
      },
      pad: function (t) {
        return t.length < 2 ? "0" + t : t;
      },
      readUTF8: function (t, e, n) {
        for (var r, i = "", o = 0; o < n; o++)
          i += "%" + rl._bin.pad(t[e + o].toString(16));
        try {
          r = decodeURIComponent(i);
        } catch (r) {
          return rl._bin.readASCII(t, e, n);
        }
        return r;
      },
    }),
    (rl._copyTile = function (t, e, n, r, i, o, a, s, l) {
      for (
        var h = Math.min(e, i), u = Math.min(n, o), c = 0, d = 0, f = 0;
        f < u;
        f++
      )
        for (var p = 0; p < h; p++)
          if (
            (a >= 0 && s >= 0
              ? ((c = (f * e + p) << 2), (d = ((s + f) * i + a + p) << 2))
              : ((c = ((-s + f) * e - a + p) << 2), (d = (f * i + p) << 2)),
            0 == l)
          )
            (r[d] = t[c]),
              (r[d + 1] = t[c + 1]),
              (r[d + 2] = t[c + 2]),
              (r[d + 3] = t[c + 3]);
          else if (1 == l) {
            var g = t[c + 3] * (1 / 255),
              v = t[c] * g,
              y = t[c + 1] * g,
              m = t[c + 2] * g,
              b = r[d + 3] * (1 / 255),
              w = r[d] * b,
              x = r[d + 1] * b,
              k = r[d + 2] * b,
              F = 1 - g,
              S = g + b * F,
              C = 0 == S ? 0 : 1 / S;
            (r[d + 3] = 255 * S),
              (r[d + 0] = (v + w * F) * C),
              (r[d + 1] = (y + x * F) * C),
              (r[d + 2] = (m + k * F) * C);
          } else if (2 == l) {
            (g = t[c + 3]),
              (v = t[c]),
              (y = t[c + 1]),
              (m = t[c + 2]),
              (b = r[d + 3]),
              (w = r[d]),
              (x = r[d + 1]),
              (k = r[d + 2]);
            g == b && v == w && y == x && m == k
              ? ((r[d] = 0), (r[d + 1] = 0), (r[d + 2] = 0), (r[d + 3] = 0))
              : ((r[d] = v), (r[d + 1] = y), (r[d + 2] = m), (r[d + 3] = g));
          } else if (3 == l) {
            (g = t[c + 3]),
              (v = t[c]),
              (y = t[c + 1]),
              (m = t[c + 2]),
              (b = r[d + 3]),
              (w = r[d]),
              (x = r[d + 1]),
              (k = r[d + 2]);
            if (g == b && v == w && y == x && m == k) continue;
            if (g < 220 && b > 20) return !1;
          }
      return !0;
    }),
    (rl.encode = function (t, e, n, r, i, o, a) {
      null == r && (r = 0), null == a && (a = !1);
      var s = rl.encode.compress(t, e, n, r, [!1, !1, !1, 0, a]);
      return rl.encode.compressPNG(s, -1), rl.encode._main(s, e, n, i, o);
    }),
    (rl.encodeLL = function (t, e, n, r, i, o, a, s) {
      for (
        var l = {
            ctype: 0 + (1 == r ? 0 : 2) + (0 == i ? 0 : 4),
            depth: o,
            frames: [],
          },
          h = (r + i) * o,
          u = h * e,
          c = 0;
        c < t.length;
        c++
      )
        l.frames.push({
          rect: { x: 0, y: 0, width: e, height: n },
          img: new Uint8Array(t[c]),
          blend: 0,
          dispose: 1,
          bpp: Math.ceil(h / 8),
          bpl: Math.ceil(u / 8),
        });
      return rl.encode.compressPNG(l, 0, !0), rl.encode._main(l, e, n, a, s);
    }),
    (rl.encode._main = function (t, e, n, r, i) {
      null == i && (i = {});
      var o = rl.crc.crc,
        a = rl._bin.writeUint,
        s = rl._bin.writeUshort,
        l = rl._bin.writeASCII,
        h = 8,
        u = t.frames.length > 1,
        c = !1,
        d = 33 + (u ? 20 : 0);
      if (
        (null != i.sRGB && (d += 13), null != i.pHYs && (d += 21), 3 == t.ctype)
      ) {
        for (var f = t.plte.length, p = 0; p < f; p++)
          t.plte[p] >>> 24 != 255 && (c = !0);
        d += 8 + 3 * f + 4 + (c ? 8 + 1 * f + 4 : 0);
      }
      for (var g = 0; g < t.frames.length; g++) {
        u && (d += 38),
          (d += (S = t.frames[g]).cimg.length + 12),
          0 != g && (d += 4);
      }
      d += 12;
      var v = new Uint8Array(d),
        y = [137, 80, 78, 71, 13, 10, 26, 10];
      for (p = 0; p < 8; p++) v[p] = y[p];
      if (
        (a(v, h, 13),
        l(v, (h += 4), "IHDR"),
        a(v, (h += 4), e),
        a(v, (h += 4), n),
        (v[(h += 4)] = t.depth),
        (v[++h] = t.ctype),
        (v[++h] = 0),
        (v[++h] = 0),
        (v[++h] = 0),
        a(v, ++h, o(v, h - 17, 17)),
        (h += 4),
        null != i.sRGB &&
          (a(v, h, 1),
          l(v, (h += 4), "sRGB"),
          (v[(h += 4)] = i.sRGB),
          a(v, ++h, o(v, h - 5, 5)),
          (h += 4)),
        null != i.pHYs &&
          (a(v, h, 9),
          l(v, (h += 4), "pHYs"),
          a(v, (h += 4), i.pHYs[0]),
          a(v, (h += 4), i.pHYs[1]),
          (v[(h += 4)] = i.pHYs[2]),
          a(v, ++h, o(v, h - 13, 13)),
          (h += 4)),
        u &&
          (a(v, h, 8),
          l(v, (h += 4), "acTL"),
          a(v, (h += 4), t.frames.length),
          a(v, (h += 4), null != i.loop ? i.loop : 0),
          a(v, (h += 4), o(v, h - 12, 12)),
          (h += 4)),
        3 == t.ctype)
      ) {
        a(v, h, 3 * (f = t.plte.length)), l(v, (h += 4), "PLTE"), (h += 4);
        for (p = 0; p < f; p++) {
          var m = 3 * p,
            b = t.plte[p],
            w = 255 & b,
            x = (b >>> 8) & 255,
            k = (b >>> 16) & 255;
          (v[h + m + 0] = w), (v[h + m + 1] = x), (v[h + m + 2] = k);
        }
        if ((a(v, (h += 3 * f), o(v, h - 3 * f - 4, 3 * f + 4)), (h += 4), c)) {
          a(v, h, f), l(v, (h += 4), "tRNS"), (h += 4);
          for (p = 0; p < f; p++) v[h + p] = (t.plte[p] >>> 24) & 255;
          a(v, (h += f), o(v, h - f - 4, f + 4)), (h += 4);
        }
      }
      var F = 0;
      for (g = 0; g < t.frames.length; g++) {
        var S = t.frames[g];
        u &&
          (a(v, h, 26),
          l(v, (h += 4), "fcTL"),
          a(v, (h += 4), F++),
          a(v, (h += 4), S.rect.width),
          a(v, (h += 4), S.rect.height),
          a(v, (h += 4), S.rect.x),
          a(v, (h += 4), S.rect.y),
          s(v, (h += 4), r[g]),
          s(v, (h += 2), 1e3),
          (v[(h += 2)] = S.dispose),
          (v[++h] = S.blend),
          a(v, ++h, o(v, h - 30, 30)),
          (h += 4));
        var C = S.cimg;
        a(v, h, (f = C.length) + (0 == g ? 0 : 4));
        var A = (h += 4);
        l(v, h, 0 == g ? "IDAT" : "fdAT"),
          (h += 4),
          0 != g && (a(v, h, F++), (h += 4)),
          v.set(C, h),
          a(v, (h += f), o(v, A, h - A)),
          (h += 4);
      }
      return (
        a(v, h, 0),
        l(v, (h += 4), "IEND"),
        a(v, (h += 4), o(v, h - 4, 4)),
        (h += 4),
        v.buffer
      );
    }),
    (rl.encode.compressPNG = function (t, e, n) {
      for (var r = 0; r < t.frames.length; r++) {
        var i = t.frames[r],
          o = (i.rect.width, i.rect.height),
          a = new Uint8Array(o * i.bpl + o);
        i.cimg = rl.encode._filterZero(i.img, o, i.bpp, i.bpl, a, e, n);
      }
    }),
    (rl.encode.compress = function (t, e, n, r, i) {
      for (
        var o = i[0],
          a = i[1],
          s = i[2],
          l = i[3],
          h = i[4],
          u = 6,
          c = 8,
          d = 255,
          f = 0;
        f < t.length;
        f++
      )
        for (var p = new Uint8Array(t[f]), g = p.length, v = 0; v < g; v += 4)
          d &= p[v + 3];
      var y = 255 != d,
        m = rl.encode.framize(t, e, n, o, a, s),
        b = {},
        w = [],
        x = [];
      if (0 != r) {
        var k = [];
        for (v = 0; v < m.length; v++) k.push(m[v].img.buffer);
        var F = rl.encode.concatRGBA(k),
          S = rl.quantize(F, r),
          C = 0,
          A = new Uint8Array(S.abuf);
        for (v = 0; v < m.length; v++) {
          var T = (G = m[v].img).length;
          x.push(new Uint8Array(S.inds.buffer, C >> 2, T >> 2));
          for (f = 0; f < T; f += 4)
            (G[f] = A[C + f]),
              (G[f + 1] = A[C + f + 1]),
              (G[f + 2] = A[C + f + 2]),
              (G[f + 3] = A[C + f + 3]);
          C += T;
        }
        for (v = 0; v < S.plte.length; v++) w.push(S.plte[v].est.rgba);
      } else
        for (f = 0; f < m.length; f++) {
          var P = m[f],
            z = new Uint32Array(P.img.buffer),
            R = P.rect.width,
            O = ((g = z.length), new Uint8Array(g));
          x.push(O);
          for (v = 0; v < g; v++) {
            var D = z[v];
            if (0 != v && D == z[v - 1]) O[v] = O[v - 1];
            else if (v > R && D == z[v - R]) O[v] = O[v - R];
            else {
              var B = b[D];
              if (
                null == B &&
                ((b[D] = B = w.length), w.push(D), w.length >= 300)
              )
                break;
              O[v] = B;
            }
          }
        }
      var N = w.length;
      N <= 256 &&
        0 == h &&
        ((c = N <= 2 ? 1 : N <= 4 ? 2 : N <= 16 ? 4 : 8), (c = Math.max(c, l)));
      for (f = 0; f < m.length; f++) {
        (P = m[f]).rect.x, P.rect.y, (R = P.rect.width);
        var E = P.rect.height,
          j = P.img,
          M = (new Uint32Array(j.buffer), 4 * R),
          I = 4;
        if (N <= 256 && 0 == h) {
          M = Math.ceil((c * R) / 8);
          for (var U = new Uint8Array(M * E), V = x[f], W = 0; W < E; W++) {
            v = W * M;
            var q = W * R;
            if (8 == c) for (var L = 0; L < R; L++) U[v + L] = V[q + L];
            else if (4 == c)
              for (L = 0; L < R; L++)
                U[v + (L >> 1)] |= V[q + L] << (4 - 4 * (1 & L));
            else if (2 == c)
              for (L = 0; L < R; L++)
                U[v + (L >> 2)] |= V[q + L] << (6 - 2 * (3 & L));
            else if (1 == c)
              for (L = 0; L < R; L++)
                U[v + (L >> 3)] |= V[q + L] << (7 - 1 * (7 & L));
          }
          (j = U), (u = 3), (I = 1);
        } else if (0 == y && 1 == m.length) {
          U = new Uint8Array(R * E * 3);
          var K = R * E;
          for (v = 0; v < K; v++) {
            var G,
              H = 4 * v;
            (U[(G = 3 * v)] = j[H]),
              (U[G + 1] = j[H + 1]),
              (U[G + 2] = j[H + 2]);
          }
          (j = U), (u = 2), (I = 3), (M = 3 * R);
        }
        (P.img = j), (P.bpl = M), (P.bpp = I);
      }
      return { ctype: u, depth: c, plte: w, frames: m };
    }),
    (rl.encode.framize = function (t, e, n, r, i, o) {
      for (var a = [], s = 0; s < t.length; s++) {
        var l,
          h = new Uint8Array(t[s]),
          u = new Uint32Array(h.buffer),
          c = 0,
          d = 0,
          f = e,
          p = n,
          g = r ? 1 : 0;
        if (0 != s) {
          for (
            var v = o || r || 1 == s || 0 != a[s - 2].dispose ? 1 : 2,
              y = 0,
              m = 1e9,
              b = 0;
            b < v;
            b++
          ) {
            for (
              var w = new Uint8Array(t[s - 1 - b]),
                x = new Uint32Array(t[s - 1 - b]),
                k = e,
                F = n,
                S = -1,
                C = -1,
                A = 0;
              A < n;
              A++
            )
              for (var T = 0; T < e; T++) {
                u[(N = A * e + T)] != x[N] &&
                  (T < k && (k = T),
                  T > S && (S = T),
                  A < F && (F = A),
                  A > C && (C = A));
              }
            -1 == S && (k = F = S = C = 0),
              i && (1 == (1 & k) && k--, 1 == (1 & F) && F--);
            var P = (S - k + 1) * (C - F + 1);
            P < m &&
              ((m = P),
              (y = b),
              (c = k),
              (d = F),
              (f = S - k + 1),
              (p = C - F + 1));
          }
          w = new Uint8Array(t[s - 1 - y]);
          1 == y && (a[s - 1].dispose = 2),
            (l = new Uint8Array(f * p * 4)),
            rl._copyTile(w, e, n, l, f, p, -c, -d, 0),
            1 == (g = rl._copyTile(h, e, n, l, f, p, -c, -d, 3) ? 1 : 0)
              ? rl.encode._prepareDiff(h, e, n, l, {
                  x: c,
                  y: d,
                  width: f,
                  height: p,
                })
              : rl._copyTile(h, e, n, l, f, p, -c, -d, 0);
        } else l = h.slice(0);
        a.push({
          rect: { x: c, y: d, width: f, height: p },
          img: l,
          blend: g,
          dispose: 0,
        });
      }
      if (r)
        for (s = 0; s < a.length; s++) {
          if (1 != (E = a[s]).blend) {
            var z = E.rect,
              R = a[s - 1].rect,
              O = Math.min(z.x, R.x),
              D = Math.min(z.y, R.y),
              B = {
                x: O,
                y: D,
                width: Math.max(z.x + z.width, R.x + R.width) - O,
                height: Math.max(z.y + z.height, R.y + R.height) - D,
              };
            (a[s - 1].dispose = 1),
              s - 1 != 0 && rl.encode._updateFrame(t, e, n, a, s - 1, B, i),
              rl.encode._updateFrame(t, e, n, a, s, B, i);
          }
        }
      if (1 != t.length)
        for (var N = 0; N < a.length; N++) {
          var E;
          (E = a[N]).rect.width * E.rect.height;
        }
      return a;
    }),
    (rl.encode._updateFrame = function (t, e, n, r, i, o, a) {
      for (
        var s = Uint8Array,
          l = Uint32Array,
          h = new s(t[i - 1]),
          u = new l(t[i - 1]),
          c = i + 1 < t.length ? new s(t[i + 1]) : null,
          d = new s(t[i]),
          f = new l(d.buffer),
          p = e,
          g = n,
          v = -1,
          y = -1,
          m = 0;
        m < o.height;
        m++
      )
        for (var b = 0; b < o.width; b++) {
          var w = o.x + b,
            x = o.y + m,
            k = x * e + w,
            F = f[k];
          0 == F ||
            (0 == r[i - 1].dispose &&
              u[k] == F &&
              (null == c || 0 != c[4 * k + 3])) ||
            (w < p && (p = w),
            w > v && (v = w),
            x < g && (g = x),
            x > y && (y = x));
        }
      -1 == v && (p = g = v = y = 0),
        a && (1 == (1 & p) && p--, 1 == (1 & g) && g--),
        (o = { x: p, y: g, width: v - p + 1, height: y - g + 1 });
      var S = r[i];
      (S.rect = o),
        (S.blend = 1),
        (S.img = new Uint8Array(o.width * o.height * 4)),
        0 == r[i - 1].dispose
          ? (rl._copyTile(h, e, n, S.img, o.width, o.height, -o.x, -o.y, 0),
            rl.encode._prepareDiff(d, e, n, S.img, o))
          : rl._copyTile(d, e, n, S.img, o.width, o.height, -o.x, -o.y, 0);
    }),
    (rl.encode._prepareDiff = function (t, e, n, r, i) {
      rl._copyTile(t, e, n, r, i.width, i.height, -i.x, -i.y, 2);
    }),
    (rl.encode._filterZero = function (t, e, n, r, i, o, a) {
      var s,
        l = [],
        h = [0, 1, 2, 3, 4];
      -1 != o ? (h = [o]) : (e * r > 5e5 || 1 == n) && (h = [0]),
        a && (s = { level: 0 });
      for (var u = a && null != UZIP ? UZIP : nl, c = 0; c < h.length; c++) {
        for (var d = 0; d < e; d++) rl.encode._filterLine(i, t, d, r, n, h[c]);
        l.push(u.deflate(i, s));
      }
      var f,
        p = 1e9;
      for (c = 0; c < l.length; c++)
        l[c].length < p && ((f = c), (p = l[c].length));
      return l[f];
    }),
    (rl.encode._filterLine = function (t, e, n, r, i, o) {
      var a = n * r,
        s = a + n,
        l = rl.decode._paeth;
      if (((t[s] = o), s++, 0 == o))
        if (r < 500) for (var h = 0; h < r; h++) t[s + h] = e[a + h];
        else t.set(new Uint8Array(e.buffer, a, r), s);
      else if (1 == o) {
        for (h = 0; h < i; h++) t[s + h] = e[a + h];
        for (h = i; h < r; h++)
          t[s + h] = (e[a + h] - e[a + h - i] + 256) & 255;
      } else if (0 == n) {
        for (h = 0; h < i; h++) t[s + h] = e[a + h];
        if (2 == o) for (h = i; h < r; h++) t[s + h] = e[a + h];
        if (3 == o)
          for (h = i; h < r; h++)
            t[s + h] = (e[a + h] - (e[a + h - i] >> 1) + 256) & 255;
        if (4 == o)
          for (h = i; h < r; h++)
            t[s + h] = (e[a + h] - l(e[a + h - i], 0, 0) + 256) & 255;
      } else {
        if (2 == o)
          for (h = 0; h < r; h++)
            t[s + h] = (e[a + h] + 256 - e[a + h - r]) & 255;
        if (3 == o) {
          for (h = 0; h < i; h++)
            t[s + h] = (e[a + h] + 256 - (e[a + h - r] >> 1)) & 255;
          for (h = i; h < r; h++)
            t[s + h] =
              (e[a + h] + 256 - ((e[a + h - r] + e[a + h - i]) >> 1)) & 255;
        }
        if (4 == o) {
          for (h = 0; h < i; h++)
            t[s + h] = (e[a + h] + 256 - l(0, e[a + h - r], 0)) & 255;
          for (h = i; h < r; h++)
            t[s + h] =
              (e[a + h] +
                256 -
                l(e[a + h - i], e[a + h - r], e[a + h - i - r])) &
              255;
        }
      }
    }),
    (rl.crc = {
      table: (function () {
        for (var t = new Uint32Array(256), e = 0; e < 256; e++) {
          for (var n = e, r = 0; r < 8; r++)
            1 & n ? (n = 3988292384 ^ (n >>> 1)) : (n >>>= 1);
          t[e] = n;
        }
        return t;
      })(),
      update: function (t, e, n, r) {
        for (var i = 0; i < r; i++)
          t = rl.crc.table[255 & (t ^ e[n + i])] ^ (t >>> 8);
        return t;
      },
      crc: function (t, e, n) {
        return 4294967295 ^ rl.crc.update(4294967295, t, e, n);
      },
    }),
    (rl.quantize = function (t, e) {
      for (
        var n = new Uint8Array(t),
          r = n.slice(0),
          i = new Uint32Array(r.buffer),
          o = rl.quantize.getKDtree(r, e),
          a = o[0],
          s = o[1],
          l = (rl.quantize.planeDst, n),
          h = i,
          u = l.length,
          c = new Uint8Array(n.length >> 2),
          d = 0;
        d < u;
        d += 4
      ) {
        var f = l[d] * (1 / 255),
          p = l[d + 1] * (1 / 255),
          g = l[d + 2] * (1 / 255),
          v = l[d + 3] * (1 / 255),
          y = rl.quantize.getNearest(a, f, p, g, v);
        (c[d >> 2] = y.ind), (h[d >> 2] = y.est.rgba);
      }
      return { abuf: r.buffer, inds: c, plte: s };
    }),
    (rl.quantize.getKDtree = function (t, e, n) {
      null == n && (n = 1e-4);
      var r = new Uint32Array(t.buffer),
        i = {
          i0: 0,
          i1: t.length,
          bst: null,
          est: null,
          tdst: 0,
          left: null,
          right: null,
        };
      (i.bst = rl.quantize.stats(t, i.i0, i.i1)),
        (i.est = rl.quantize.estats(i.bst));
      for (var o = [i]; o.length < e; ) {
        for (var a = 0, s = 0, l = 0; l < o.length; l++)
          o[l].est.L > a && ((a = o[l].est.L), (s = l));
        if (a < n) break;
        var h = o[s],
          u = rl.quantize.splitPixels(t, r, h.i0, h.i1, h.est.e, h.est.eMq255);
        if (h.i0 >= u || h.i1 <= u) h.est.L = 0;
        else {
          var c = {
            i0: h.i0,
            i1: u,
            bst: null,
            est: null,
            tdst: 0,
            left: null,
            right: null,
          };
          (c.bst = rl.quantize.stats(t, c.i0, c.i1)),
            (c.est = rl.quantize.estats(c.bst));
          var d = {
            i0: u,
            i1: h.i1,
            bst: null,
            est: null,
            tdst: 0,
            left: null,
            right: null,
          };
          d.bst = { R: [], m: [], N: h.bst.N - c.bst.N };
          for (l = 0; l < 16; l++) d.bst.R[l] = h.bst.R[l] - c.bst.R[l];
          for (l = 0; l < 4; l++) d.bst.m[l] = h.bst.m[l] - c.bst.m[l];
          (d.est = rl.quantize.estats(d.bst)),
            (h.left = c),
            (h.right = d),
            (o[s] = c),
            o.push(d);
        }
      }
      o.sort(function (t, e) {
        return e.bst.N - t.bst.N;
      });
      for (l = 0; l < o.length; l++) o[l].ind = l;
      return [i, o];
    }),
    (rl.quantize.getNearest = function (t, e, n, r, i) {
      if (null == t.left)
        return (t.tdst = rl.quantize.dist(t.est.q, e, n, r, i)), t;
      var o = rl.quantize.planeDst(t.est, e, n, r, i),
        a = t.left,
        s = t.right;
      o > 0 && ((a = t.right), (s = t.left));
      var l = rl.quantize.getNearest(a, e, n, r, i);
      if (l.tdst <= o * o) return l;
      var h = rl.quantize.getNearest(s, e, n, r, i);
      return h.tdst < l.tdst ? h : l;
    }),
    (rl.quantize.planeDst = function (t, e, n, r, i) {
      var o = t.e;
      return o[0] * e + o[1] * n + o[2] * r + o[3] * i - t.eMq;
    }),
    (rl.quantize.dist = function (t, e, n, r, i) {
      var o = e - t[0],
        a = n - t[1],
        s = r - t[2],
        l = i - t[3];
      return o * o + a * a + s * s + l * l;
    }),
    (rl.quantize.splitPixels = function (t, e, n, r, i, o) {
      var a = rl.quantize.vecDot;
      for (r -= 4; n < r; ) {
        for (; a(t, n, i) <= o; ) n += 4;
        for (; a(t, r, i) > o; ) r -= 4;
        if (n >= r) break;
        var s = e[n >> 2];
        (e[n >> 2] = e[r >> 2]), (e[r >> 2] = s), (n += 4), (r -= 4);
      }
      for (; a(t, n, i) > o; ) n -= 4;
      return n + 4;
    }),
    (rl.quantize.vecDot = function (t, e, n) {
      return t[e] * n[0] + t[e + 1] * n[1] + t[e + 2] * n[2] + t[e + 3] * n[3];
    }),
    (rl.quantize.stats = function (t, e, n) {
      for (
        var r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          i = [0, 0, 0, 0],
          o = (n - e) >> 2,
          a = e;
        a < n;
        a += 4
      ) {
        var s = t[a] * (1 / 255),
          l = t[a + 1] * (1 / 255),
          h = t[a + 2] * (1 / 255),
          u = t[a + 3] * (1 / 255);
        (i[0] += s),
          (i[1] += l),
          (i[2] += h),
          (i[3] += u),
          (r[0] += s * s),
          (r[1] += s * l),
          (r[2] += s * h),
          (r[3] += s * u),
          (r[5] += l * l),
          (r[6] += l * h),
          (r[7] += l * u),
          (r[10] += h * h),
          (r[11] += h * u),
          (r[15] += u * u);
      }
      return (
        (r[4] = r[1]),
        (r[8] = r[2]),
        (r[9] = r[6]),
        (r[12] = r[3]),
        (r[13] = r[7]),
        (r[14] = r[11]),
        { R: r, m: i, N: o }
      );
    }),
    (rl.quantize.estats = function (t) {
      var e = t.R,
        n = t.m,
        r = t.N,
        i = n[0],
        o = n[1],
        a = n[2],
        s = n[3],
        l = 0 == r ? 0 : 1 / r,
        h = [
          e[0] - i * i * l,
          e[1] - i * o * l,
          e[2] - i * a * l,
          e[3] - i * s * l,
          e[4] - o * i * l,
          e[5] - o * o * l,
          e[6] - o * a * l,
          e[7] - o * s * l,
          e[8] - a * i * l,
          e[9] - a * o * l,
          e[10] - a * a * l,
          e[11] - a * s * l,
          e[12] - s * i * l,
          e[13] - s * o * l,
          e[14] - s * a * l,
          e[15] - s * s * l,
        ],
        u = h,
        c = rl.M4,
        d = [0.5, 0.5, 0.5, 0.5],
        f = 0,
        p = 0;
      if (0 != r)
        for (
          var g = 0;
          g < 10 &&
          ((d = c.multVec(u, d)),
          (p = Math.sqrt(c.dot(d, d))),
          (d = c.sml(1 / p, d)),
          !(Math.abs(p - f) < 1e-9));
          g++
        )
          f = p;
      var v = [i * l, o * l, a * l, s * l];
      return {
        Cov: h,
        q: v,
        e: d,
        L: f,
        eMq255: c.dot(c.sml(255, v), d),
        eMq: c.dot(d, v),
        rgba:
          ((Math.round(255 * v[3]) << 24) |
            (Math.round(255 * v[2]) << 16) |
            (Math.round(255 * v[1]) << 8) |
            (Math.round(255 * v[0]) << 0)) >>>
          0,
      };
    }),
    (rl.M4 = {
      multVec: function (t, e) {
        return [
          t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3],
          t[4] * e[0] + t[5] * e[1] + t[6] * e[2] + t[7] * e[3],
          t[8] * e[0] + t[9] * e[1] + t[10] * e[2] + t[11] * e[3],
          t[12] * e[0] + t[13] * e[1] + t[14] * e[2] + t[15] * e[3],
        ];
      },
      dot: function (t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
      },
      sml: function (t, e) {
        return [t * e[0], t * e[1], t * e[2], t * e[3]];
      },
    }),
    (rl.encode.concatRGBA = function (t) {
      for (var e = 0, n = 0; n < t.length; n++) e += t[n].byteLength;
      var r = new Uint8Array(e),
        i = 0;
      for (n = 0; n < t.length; n++) {
        for (var o = new Uint8Array(t[n]), a = o.length, s = 0; s < a; s += 4) {
          var l = o[s],
            h = o[s + 1],
            u = o[s + 2],
            c = o[s + 3];
          0 == c && (l = h = u = 0),
            (r[i + s] = l),
            (r[i + s + 1] = h),
            (r[i + s + 2] = u),
            (r[i + s + 3] = c);
        }
        i += a;
      }
      return r.buffer;
    });
  var il;
  !(function (t) {
    (t.Greyscale = "Greyscale"),
      (t.Truecolour = "Truecolour"),
      (t.IndexedColour = "IndexedColour"),
      (t.GreyscaleWithAlpha = "GreyscaleWithAlpha"),
      (t.TruecolourWithAlpha = "TruecolourWithAlpha");
  })(il || (il = {}));
  var ol,
    al,
    sl,
    ll,
    hl = (function () {
      function t(t) {
        var e = rl.decode(t),
          n = rl.toRGBA8(e);
        if (n.length > 1) throw new Error("Animated PNGs are not supported");
        var r = (function (t) {
            for (
              var e = Math.floor(t.length / 4),
                n = new Uint8Array(3 * e),
                r = new Uint8Array(1 * e),
                i = 0,
                o = 0,
                a = 0;
              i < t.length;

            )
              (n[o++] = t[i++]),
                (n[o++] = t[i++]),
                (n[o++] = t[i++]),
                (r[a++] = t[i++]);
            return { rgbChannel: n, alphaChannel: r };
          })(new Uint8Array(n[0])),
          i = r.rgbChannel,
          o = r.alphaChannel;
        (this.rgbChannel = i),
          o.some(function (t) {
            return t < 255;
          }) && (this.alphaChannel = o),
          (this.type = (function (t) {
            if (0 === t) return il.Greyscale;
            if (2 === t) return il.Truecolour;
            if (3 === t) return il.IndexedColour;
            if (4 === t) return il.GreyscaleWithAlpha;
            if (6 === t) return il.TruecolourWithAlpha;
            throw new Error("Unknown color type: " + t);
          })(e.ctype)),
          (this.width = e.width),
          (this.height = e.height),
          (this.bitsPerComponent = 8);
      }
      return (
        (t.load = function (e) {
          return new t(e);
        }),
        t
      );
    })(),
    ul = (function () {
      function t(t) {
        (this.image = t),
          (this.bitsPerComponent = t.bitsPerComponent),
          (this.width = t.width),
          (this.height = t.height),
          (this.colorSpace = "DeviceRGB");
      }
      return (
        (t.for = function (e) {
          return i(this, void 0, void 0, function () {
            return o(this, function (n) {
              return [2, new t(hl.load(e))];
            });
          });
        }),
        (t.prototype.embedIntoContext = function (t, e) {
          return i(this, void 0, void 0, function () {
            var n, r;
            return o(this, function (i) {
              return (
                (n = this.embedAlphaChannel(t)),
                (r = t.flateStream(this.image.rgbChannel, {
                  Type: "XObject",
                  Subtype: "Image",
                  BitsPerComponent: this.image.bitsPerComponent,
                  Width: this.image.width,
                  Height: this.image.height,
                  ColorSpace: this.colorSpace,
                  SMask: n,
                })),
                e ? (t.assign(e, r), [2, e]) : [2, t.register(r)]
              );
            });
          });
        }),
        (t.prototype.embedAlphaChannel = function (t) {
          if (this.image.alphaChannel) {
            var e = t.flateStream(this.image.alphaChannel, {
              Type: "XObject",
              Subtype: "Image",
              Height: this.image.height,
              Width: this.image.width,
              BitsPerComponent: this.image.bitsPerComponent,
              ColorSpace: "DeviceGray",
              Decode: [0, 1],
            });
            return t.register(e);
          }
        }),
        t
      );
    })(),
    cl = (function () {
      function t(t, e, n) {
        (this.bytes = t),
          (this.start = e || 0),
          (this.pos = this.start),
          (this.end = e && n ? e + n : this.bytes.length);
      }
      return (
        Object.defineProperty(t.prototype, "length", {
          get: function () {
            return this.end - this.start;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "isEmpty", {
          get: function () {
            return 0 === this.length;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.getByte = function () {
          return this.pos >= this.end ? -1 : this.bytes[this.pos++];
        }),
        (t.prototype.getUint16 = function () {
          var t = this.getByte(),
            e = this.getByte();
          return -1 === t || -1 === e ? -1 : (t << 8) + e;
        }),
        (t.prototype.getInt32 = function () {
          return (
            (this.getByte() << 24) +
            (this.getByte() << 16) +
            (this.getByte() << 8) +
            this.getByte()
          );
        }),
        (t.prototype.getBytes = function (t, e) {
          void 0 === e && (e = !1);
          var n = this.bytes,
            r = this.pos,
            i = this.end;
          if (t) {
            var o = r + t;
            o > i && (o = i), (this.pos = o);
            a = n.subarray(r, o);
            return e ? new Uint8ClampedArray(a) : a;
          }
          var a = n.subarray(r, i);
          return e ? new Uint8ClampedArray(a) : a;
        }),
        (t.prototype.peekByte = function () {
          var t = this.getByte();
          return this.pos--, t;
        }),
        (t.prototype.peekBytes = function (t, e) {
          void 0 === e && (e = !1);
          var n = this.getBytes(t, e);
          return (this.pos -= n.length), n;
        }),
        (t.prototype.skip = function (t) {
          t || (t = 1), (this.pos += t);
        }),
        (t.prototype.reset = function () {
          this.pos = this.start;
        }),
        (t.prototype.moveStart = function () {
          this.start = this.pos;
        }),
        (t.prototype.makeSubStream = function (e, n) {
          return new t(this.bytes, e, n);
        }),
        (t.prototype.decode = function () {
          return this.bytes;
        }),
        t
      );
    })(),
    dl = new Uint8Array(0),
    fl = (function () {
      function t(t) {
        if (
          ((this.pos = 0),
          (this.bufferLength = 0),
          (this.eof = !1),
          (this.buffer = dl),
          (this.minBufferLength = 512),
          t)
        )
          for (; this.minBufferLength < t; ) this.minBufferLength *= 2;
      }
      return (
        Object.defineProperty(t.prototype, "isEmpty", {
          get: function () {
            for (; !this.eof && 0 === this.bufferLength; ) this.readBlock();
            return 0 === this.bufferLength;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.getByte = function () {
          for (var t = this.pos; this.bufferLength <= t; ) {
            if (this.eof) return -1;
            this.readBlock();
          }
          return this.buffer[this.pos++];
        }),
        (t.prototype.getUint16 = function () {
          var t = this.getByte(),
            e = this.getByte();
          return -1 === t || -1 === e ? -1 : (t << 8) + e;
        }),
        (t.prototype.getInt32 = function () {
          return (
            (this.getByte() << 24) +
            (this.getByte() << 16) +
            (this.getByte() << 8) +
            this.getByte()
          );
        }),
        (t.prototype.getBytes = function (t, e) {
          var n;
          void 0 === e && (e = !1);
          var r = this.pos;
          if (t) {
            for (
              this.ensureBuffer(r + t), n = r + t;
              !this.eof && this.bufferLength < n;

            )
              this.readBlock();
            var i = this.bufferLength;
            n > i && (n = i);
          } else {
            for (; !this.eof; ) this.readBlock();
            n = this.bufferLength;
          }
          this.pos = n;
          var o = this.buffer.subarray(r, n);
          return !e || o instanceof Uint8ClampedArray
            ? o
            : new Uint8ClampedArray(o);
        }),
        (t.prototype.peekByte = function () {
          var t = this.getByte();
          return this.pos--, t;
        }),
        (t.prototype.peekBytes = function (t, e) {
          void 0 === e && (e = !1);
          var n = this.getBytes(t, e);
          return (this.pos -= n.length), n;
        }),
        (t.prototype.skip = function (t) {
          t || (t = 1), (this.pos += t);
        }),
        (t.prototype.reset = function () {
          this.pos = 0;
        }),
        (t.prototype.makeSubStream = function (t, e) {
          for (var n = t + e; this.bufferLength <= n && !this.eof; )
            this.readBlock();
          return new cl(this.buffer, t, e);
        }),
        (t.prototype.decode = function () {
          for (; !this.eof; ) this.readBlock();
          return this.buffer.subarray(0, this.bufferLength);
        }),
        (t.prototype.readBlock = function () {
          throw new Gn(this.constructor.name, "readBlock");
        }),
        (t.prototype.ensureBuffer = function (t) {
          var e = this.buffer;
          if (t <= e.byteLength) return e;
          for (var n = this.minBufferLength; n < t; ) n *= 2;
          var r = new Uint8Array(n);
          return r.set(e), (this.buffer = r);
        }),
        t
      );
    })(),
    pl = function (t) {
      return 32 === t || 9 === t || 13 === t || 10 === t;
    },
    gl = (function (t) {
      function e(e, n) {
        var r = t.call(this, n) || this;
        return (
          (r.stream = e), (r.input = new Uint8Array(5)), n && (n *= 0.8), r
        );
      }
      return (
        n(e, t),
        (e.prototype.readBlock = function () {
          for (var t = this.stream, e = t.getByte(); pl(e); ) e = t.getByte();
          if (-1 !== e && 126 !== e) {
            var n,
              r,
              i = this.bufferLength;
            if (122 === e) {
              for (n = this.ensureBuffer(i + 4), r = 0; r < 4; ++r)
                n[i + r] = 0;
              this.bufferLength += 4;
            } else {
              var o = this.input;
              for (o[0] = e, r = 1; r < 5; ++r) {
                for (e = t.getByte(); pl(e); ) e = t.getByte();
                if (((o[r] = e), -1 === e || 126 === e)) break;
              }
              if (
                ((n = this.ensureBuffer(i + r - 1)),
                (this.bufferLength += r - 1),
                r < 5)
              ) {
                for (; r < 5; ++r) o[r] = 117;
                this.eof = !0;
              }
              var a = 0;
              for (r = 0; r < 5; ++r) a = 85 * a + (o[r] - 33);
              for (r = 3; r >= 0; --r) (n[i + r] = 255 & a), (a >>= 8);
            }
          } else this.eof = !0;
        }),
        e
      );
    })(fl),
    vl = (function (t) {
      function e(e, n) {
        var r = t.call(this, n) || this;
        return (r.stream = e), (r.firstDigit = -1), n && (n *= 0.5), r;
      }
      return (
        n(e, t),
        (e.prototype.readBlock = function () {
          var t = this.stream.getBytes(8e3);
          if (t.length) {
            for (
              var e = (t.length + 1) >> 1,
                n = this.ensureBuffer(this.bufferLength + e),
                r = this.bufferLength,
                i = this.firstDigit,
                o = 0,
                a = t.length;
              o < a;
              o++
            ) {
              var s = t[o],
                l = void 0;
              if (s >= 48 && s <= 57) l = 15 & s;
              else {
                if (!((s >= 65 && s <= 70) || (s >= 97 && s <= 102))) {
                  if (62 === s) {
                    this.eof = !0;
                    break;
                  }
                  continue;
                }
                l = 9 + (15 & s);
              }
              i < 0 ? (i = l) : ((n[r++] = (i << 4) | l), (i = -1));
            }
            i >= 0 && this.eof && ((n[r++] = i << 4), (i = -1)),
              (this.firstDigit = i),
              (this.bufferLength = r);
          } else this.eof = !0;
        }),
        e
      );
    })(fl),
    yl = new Int32Array([
      16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
    ]),
    ml = new Int32Array([
      3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095,
      131099, 131103, 196643, 196651, 196659, 196667, 262211, 262227, 262243,
      262259, 327811, 327843, 327875, 327907, 258, 258, 258,
    ]),
    bl = new Int32Array([
      1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177, 262193,
      327745, 327777, 393345, 393409, 459009, 459137, 524801, 525057, 590849,
      591361, 657409, 658433, 724993, 727041, 794625, 798721, 868353, 876545,
    ]),
    wl = [
      new Int32Array([
        459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016, 459016,
        524384, 524320, 589984, 524288, 524416, 524352, 590048, 459012, 524376,
        524312, 589968, 459028, 524408, 524344, 590032, 459020, 524392, 524328,
        59e4, 524296, 524424, 524360, 590064, 459010, 524372, 524308, 524572,
        459026, 524404, 524340, 590024, 459018, 524388, 524324, 589992, 524292,
        524420, 524356, 590056, 459014, 524380, 524316, 589976, 459030, 524412,
        524348, 590040, 459022, 524396, 524332, 590008, 524300, 524428, 524364,
        590072, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590020,
        459017, 524386, 524322, 589988, 524290, 524418, 524354, 590052, 459013,
        524378, 524314, 589972, 459029, 524410, 524346, 590036, 459021, 524394,
        524330, 590004, 524298, 524426, 524362, 590068, 459011, 524374, 524310,
        524574, 459027, 524406, 524342, 590028, 459019, 524390, 524326, 589996,
        524294, 524422, 524358, 590060, 459015, 524382, 524318, 589980, 459031,
        524414, 524350, 590044, 459023, 524398, 524334, 590012, 524302, 524430,
        524366, 590076, 459008, 524369, 524305, 524569, 459024, 524401, 524337,
        590018, 459016, 524385, 524321, 589986, 524289, 524417, 524353, 590050,
        459012, 524377, 524313, 589970, 459028, 524409, 524345, 590034, 459020,
        524393, 524329, 590002, 524297, 524425, 524361, 590066, 459010, 524373,
        524309, 524573, 459026, 524405, 524341, 590026, 459018, 524389, 524325,
        589994, 524293, 524421, 524357, 590058, 459014, 524381, 524317, 589978,
        459030, 524413, 524349, 590042, 459022, 524397, 524333, 590010, 524301,
        524429, 524365, 590074, 459009, 524371, 524307, 524571, 459025, 524403,
        524339, 590022, 459017, 524387, 524323, 589990, 524291, 524419, 524355,
        590054, 459013, 524379, 524315, 589974, 459029, 524411, 524347, 590038,
        459021, 524395, 524331, 590006, 524299, 524427, 524363, 590070, 459011,
        524375, 524311, 524575, 459027, 524407, 524343, 590030, 459019, 524391,
        524327, 589998, 524295, 524423, 524359, 590062, 459015, 524383, 524319,
        589982, 459031, 524415, 524351, 590046, 459023, 524399, 524335, 590014,
        524303, 524431, 524367, 590078, 459008, 524368, 524304, 524568, 459024,
        524400, 524336, 590017, 459016, 524384, 524320, 589985, 524288, 524416,
        524352, 590049, 459012, 524376, 524312, 589969, 459028, 524408, 524344,
        590033, 459020, 524392, 524328, 590001, 524296, 524424, 524360, 590065,
        459010, 524372, 524308, 524572, 459026, 524404, 524340, 590025, 459018,
        524388, 524324, 589993, 524292, 524420, 524356, 590057, 459014, 524380,
        524316, 589977, 459030, 524412, 524348, 590041, 459022, 524396, 524332,
        590009, 524300, 524428, 524364, 590073, 459009, 524370, 524306, 524570,
        459025, 524402, 524338, 590021, 459017, 524386, 524322, 589989, 524290,
        524418, 524354, 590053, 459013, 524378, 524314, 589973, 459029, 524410,
        524346, 590037, 459021, 524394, 524330, 590005, 524298, 524426, 524362,
        590069, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590029,
        459019, 524390, 524326, 589997, 524294, 524422, 524358, 590061, 459015,
        524382, 524318, 589981, 459031, 524414, 524350, 590045, 459023, 524398,
        524334, 590013, 524302, 524430, 524366, 590077, 459008, 524369, 524305,
        524569, 459024, 524401, 524337, 590019, 459016, 524385, 524321, 589987,
        524289, 524417, 524353, 590051, 459012, 524377, 524313, 589971, 459028,
        524409, 524345, 590035, 459020, 524393, 524329, 590003, 524297, 524425,
        524361, 590067, 459010, 524373, 524309, 524573, 459026, 524405, 524341,
        590027, 459018, 524389, 524325, 589995, 524293, 524421, 524357, 590059,
        459014, 524381, 524317, 589979, 459030, 524413, 524349, 590043, 459022,
        524397, 524333, 590011, 524301, 524429, 524365, 590075, 459009, 524371,
        524307, 524571, 459025, 524403, 524339, 590023, 459017, 524387, 524323,
        589991, 524291, 524419, 524355, 590055, 459013, 524379, 524315, 589975,
        459029, 524411, 524347, 590039, 459021, 524395, 524331, 590007, 524299,
        524427, 524363, 590071, 459011, 524375, 524311, 524575, 459027, 524407,
        524343, 590031, 459019, 524391, 524327, 589999, 524295, 524423, 524359,
        590063, 459015, 524383, 524319, 589983, 459031, 524415, 524351, 590047,
        459023, 524399, 524335, 590015, 524303, 524431, 524367, 590079,
      ]),
      9,
    ],
    xl = [
      new Int32Array([
        327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708, 327682,
        327698, 327690, 327706, 327686, 327702, 327694, 0, 327681, 327697,
        327689, 327705, 327685, 327701, 327693, 327709, 327683, 327699, 327691,
        327707, 327687, 327703, 327695, 0,
      ]),
      5,
    ],
    kl = (function (t) {
      function e(e, n) {
        var r = t.call(this, n) || this;
        r.stream = e;
        var i = e.getByte(),
          o = e.getByte();
        if (-1 === i || -1 === o)
          throw new Error("Invalid header in flate stream: " + i + ", " + o);
        if (8 != (15 & i))
          throw new Error(
            "Unknown compression method in flate stream: " + i + ", " + o
          );
        if (((i << 8) + o) % 31 != 0)
          throw new Error("Bad FCHECK in flate stream: " + i + ", " + o);
        if (32 & o)
          throw new Error("FDICT bit set in flate stream: " + i + ", " + o);
        return (r.codeSize = 0), (r.codeBuf = 0), r;
      }
      return (
        n(e, t),
        (e.prototype.readBlock = function () {
          var t,
            e,
            n = this.stream,
            r = this.getBits(3);
          if ((1 & r && (this.eof = !0), 0 !== (r >>= 1))) {
            var i, o;
            if (1 === r) (i = wl), (o = xl);
            else {
              if (2 !== r)
                throw new Error("Unknown block type in flate stream");
              var a = this.getBits(5) + 257,
                s = this.getBits(5) + 1,
                l = this.getBits(4) + 4,
                h = new Uint8Array(yl.length),
                u = void 0;
              for (u = 0; u < l; ++u) h[yl[u]] = this.getBits(3);
              var c = this.generateHuffmanTable(h);
              (e = 0), (u = 0);
              for (
                var d = a + s,
                  f = new Uint8Array(d),
                  p = void 0,
                  g = void 0,
                  v = void 0;
                u < d;

              ) {
                var y = this.getCode(c);
                if (16 === y) (p = 2), (g = 3), (v = e);
                else if (17 === y) (p = 3), (g = 3), (v = e = 0);
                else {
                  if (18 !== y) {
                    f[u++] = e = y;
                    continue;
                  }
                  (p = 7), (g = 11), (v = e = 0);
                }
                for (var m = this.getBits(p) + g; m-- > 0; ) f[u++] = v;
              }
              (i = this.generateHuffmanTable(f.subarray(0, a))),
                (o = this.generateHuffmanTable(f.subarray(a, d)));
            }
            for (
              var b = (t = this.buffer) ? t.length : 0, w = this.bufferLength;
              ;

            ) {
              var x = this.getCode(i);
              if (x < 256)
                w + 1 >= b && (b = (t = this.ensureBuffer(w + 1)).length),
                  (t[w++] = x);
              else {
                if (256 === x) return void (this.bufferLength = w);
                var k = (x = ml[(x -= 257)]) >> 16;
                k > 0 && (k = this.getBits(k)),
                  (e = (65535 & x) + k),
                  (x = this.getCode(o)),
                  (k = (x = bl[x]) >> 16) > 0 && (k = this.getBits(k));
                var F = (65535 & x) + k;
                w + e >= b && (b = (t = this.ensureBuffer(w + e)).length);
                for (var S = 0; S < e; ++S, ++w) t[w] = t[w - F];
              }
            }
          } else {
            var C = void 0;
            if (-1 === (C = n.getByte()))
              throw new Error("Bad block header in flate stream");
            var A = C;
            if (-1 === (C = n.getByte()))
              throw new Error("Bad block header in flate stream");
            if (((A |= C << 8), -1 === (C = n.getByte())))
              throw new Error("Bad block header in flate stream");
            var T = C;
            if (-1 === (C = n.getByte()))
              throw new Error("Bad block header in flate stream");
            if ((T |= C << 8) !== (65535 & ~A) && (0 !== A || 0 !== T))
              throw new Error("Bad uncompressed block length in flate stream");
            (this.codeBuf = 0), (this.codeSize = 0);
            var P = this.bufferLength;
            t = this.ensureBuffer(P + A);
            var z = P + A;
            if (((this.bufferLength = z), 0 === A))
              -1 === n.peekByte() && (this.eof = !0);
            else
              for (var R = P; R < z; ++R) {
                if (-1 === (C = n.getByte())) {
                  this.eof = !0;
                  break;
                }
                t[R] = C;
              }
          }
        }),
        (e.prototype.getBits = function (t) {
          for (
            var e, n = this.stream, r = this.codeSize, i = this.codeBuf;
            r < t;

          ) {
            if (-1 === (e = n.getByte()))
              throw new Error("Bad encoding in flate stream");
            (i |= e << r), (r += 8);
          }
          return (
            (e = i & ((1 << t) - 1)),
            (this.codeBuf = i >> t),
            (this.codeSize = r -= t),
            e
          );
        }),
        (e.prototype.getCode = function (t) {
          for (
            var e,
              n = this.stream,
              r = t[0],
              i = t[1],
              o = this.codeSize,
              a = this.codeBuf;
            o < i && -1 !== (e = n.getByte());

          )
            (a |= e << o), (o += 8);
          var s = r[a & ((1 << i) - 1)];
          "number" == typeof r && console.log("FLATE:", s);
          var l = s >> 16,
            h = 65535 & s;
          if (l < 1 || o < l) throw new Error("Bad encoding in flate stream");
          return (this.codeBuf = a >> l), (this.codeSize = o - l), h;
        }),
        (e.prototype.generateHuffmanTable = function (t) {
          var e,
            n = t.length,
            r = 0;
          for (e = 0; e < n; ++e) t[e] > r && (r = t[e]);
          for (
            var i = 1 << r, o = new Int32Array(i), a = 1, s = 0, l = 2;
            a <= r;
            ++a, s <<= 1, l <<= 1
          )
            for (var h = 0; h < n; ++h)
              if (t[h] === a) {
                var u = 0,
                  c = s;
                for (e = 0; e < a; ++e) (u = (u << 1) | (1 & c)), (c >>= 1);
                for (e = u; e < i; e += l) o[e] = (a << 16) | h;
                ++s;
              }
          return [o, r];
        }),
        e
      );
    })(fl),
    Fl = (function (t) {
      function e(e, n, r) {
        var i = t.call(this, n) || this;
        (i.stream = e), (i.cachedData = 0), (i.bitsCached = 0);
        for (
          var o = {
              earlyChange: r,
              codeLength: 9,
              nextCode: 258,
              dictionaryValues: new Uint8Array(4096),
              dictionaryLengths: new Uint16Array(4096),
              dictionaryPrevCodes: new Uint16Array(4096),
              currentSequence: new Uint8Array(4096),
              currentSequenceLength: 0,
            },
            a = 0;
          a < 256;
          ++a
        )
          (o.dictionaryValues[a] = a), (o.dictionaryLengths[a] = 1);
        return (i.lzwState = o), i;
      }
      return (
        n(e, t),
        (e.prototype.readBlock = function () {
          var t,
            e,
            n,
            r = 1024,
            i = this.lzwState;
          if (i) {
            var o = i.earlyChange,
              a = i.nextCode,
              s = i.dictionaryValues,
              l = i.dictionaryLengths,
              h = i.dictionaryPrevCodes,
              u = i.codeLength,
              c = i.prevCode,
              d = i.currentSequence,
              f = i.currentSequenceLength,
              p = 0,
              g = this.bufferLength,
              v = this.ensureBuffer(this.bufferLength + r);
            for (t = 0; t < 512; t++) {
              var y = this.readBits(u),
                m = f > 0;
              if (!y || y < 256) (d[0] = y), (f = 1);
              else {
                if (!(y >= 258)) {
                  if (256 === y) {
                    (u = 9), (a = 258), (f = 0);
                    continue;
                  }
                  (this.eof = !0), delete this.lzwState;
                  break;
                }
                if (y < a)
                  for (e = (f = l[y]) - 1, n = y; e >= 0; e--)
                    (d[e] = s[n]), (n = h[n]);
                else d[f++] = d[0];
              }
              if (
                (m &&
                  ((h[a] = c),
                  (l[a] = l[c] + 1),
                  (s[a] = d[0]),
                  (u =
                    (++a + o) & (a + o - 1)
                      ? u
                      : 0 |
                        Math.min(
                          Math.log(a + o) / 0.6931471805599453 + 1,
                          12
                        ))),
                (c = y),
                r < (p += f))
              ) {
                do {
                  r += 512;
                } while (r < p);
                v = this.ensureBuffer(this.bufferLength + r);
              }
              for (e = 0; e < f; e++) v[g++] = d[e];
            }
            (i.nextCode = a),
              (i.codeLength = u),
              (i.prevCode = c),
              (i.currentSequenceLength = f),
              (this.bufferLength = g);
          }
        }),
        (e.prototype.readBits = function (t) {
          for (var e = this.bitsCached, n = this.cachedData; e < t; ) {
            var r = this.stream.getByte();
            if (-1 === r) return (this.eof = !0), null;
            (n = (n << 8) | r), (e += 8);
          }
          return (
            (this.bitsCached = e -= t),
            (this.cachedData = n),
            (n >>> e) & ((1 << t) - 1)
          );
        }),
        e
      );
    })(fl),
    Sl = (function (t) {
      function e(e, n) {
        var r = t.call(this, n) || this;
        return (r.stream = e), r;
      }
      return (
        n(e, t),
        (e.prototype.readBlock = function () {
          var t = this.stream.getBytes(2);
          if (!t || t.length < 2 || 128 === t[0]) this.eof = !0;
          else {
            var e,
              n = this.bufferLength,
              r = t[0];
            if (r < 128) {
              if ((((e = this.ensureBuffer(n + r + 1))[n++] = t[1]), r > 0)) {
                var i = this.stream.getBytes(r);
                e.set(i, n), (n += r);
              }
            } else {
              r = 257 - r;
              var o = t[1];
              e = this.ensureBuffer(n + r + 1);
              for (var a = 0; a < r; a++) e[n++] = o;
            }
            this.bufferLength = n;
          }
        }),
        e
      );
    })(fl),
    Cl = function (t, e, n) {
      if (e === Ao.of("FlateDecode")) return new kl(t);
      if (e === Ao.of("LZWDecode")) {
        var r = 1;
        if (n instanceof mo) {
          var i = n.lookup(Ao.of("EarlyChange"));
          i instanceof fo && (r = i.asNumber());
        }
        return new Fl(t, void 0, r);
      }
      if (e === Ao.of("ASCII85Decode")) return new gl(t);
      if (e === Ao.of("ASCIIHexDecode")) return new vl(t);
      if (e === Ao.of("RunLengthDecode")) return new Sl(t);
      throw new Xn(e.asString());
    },
    Al = function (t) {
      var e = t.dict,
        n = t.contents,
        r = new cl(n),
        i = e.lookup(Ao.of("Filter")),
        o = e.lookup(Ao.of("DecodeParms"));
      if (i instanceof Ao) r = Cl(r, i, o);
      else if (i instanceof po)
        for (var a = 0, s = i.size(); a < s; a++)
          r = Cl(r, i.lookup(a, Ao), o && o.lookupMaybe(a, mo));
      else if (i) throw new _n([Ao, po], i);
      return r;
    },
    Tl = (function () {
      function t(t, e, n) {
        this.page = t;
        var r =
          null != e
            ? e
            : (function (t) {
                var e = t.MediaBox();
                return {
                  left: 0,
                  bottom: 0,
                  right:
                    e.lookup(2, fo).asNumber() - e.lookup(0, fo).asNumber(),
                  top: e.lookup(3, fo).asNumber() - e.lookup(1, fo).asNumber(),
                };
              })(t);
        (this.width = r.right - r.left),
          (this.height = r.top - r.bottom),
          (this.boundingBox = r),
          (this.transformationMatrix =
            null != n
              ? n
              : (function (t) {
                  return [1, 0, 0, 1, -t.left, -t.bottom];
                })(r));
      }
      return (
        (t.for = function (e, n, r) {
          return i(this, void 0, void 0, function () {
            return o(this, function (i) {
              return [2, new t(e, n, r)];
            });
          });
        }),
        (t.prototype.embedIntoContext = function (t, e) {
          return i(this, void 0, void 0, function () {
            var n, r, i, a, s, l, h, u, c, d;
            return o(this, function (o) {
              if (
                ((n = this.page.normalizedEntries()),
                (r = n.Contents),
                (i = n.Resources),
                !r)
              )
                throw new Jn();
              return (
                (a = this.decodeContents(r)),
                (s = this.boundingBox),
                (l = s.left),
                (h = s.bottom),
                (u = s.right),
                (c = s.top),
                (d = t.stream(a, {
                  Type: "XObject",
                  Subtype: "Form",
                  FormType: 1,
                  BBox: [l, h, u, c],
                  Matrix: this.transformationMatrix,
                  Resources: i,
                })),
                e ? (t.assign(e, d), [2, e]) : [2, t.register(d)]
              );
            });
          });
        }),
        (t.prototype.decodeContents = function (t) {
          for (
            var e = Uint8Array.of(br.Newline), n = [], r = 0, i = t.size();
            r < i;
            r++
          ) {
            var o = t.lookup(r, To),
              a = void 0;
            if (o instanceof Po) a = Al(o).decode();
            else {
              if (!(o instanceof jo)) throw new Qn(o);
              a = o.getUnencodedContents();
            }
            n.push(a, e);
          }
          return I.apply(void 0, n);
        }),
        t
      );
    })(),
    Pl = function (t, e) {
      if (void 0 !== t) return e[t];
    };
  ((ol = t.NonFullScreenPageMode || (t.NonFullScreenPageMode = {})).UseNone =
    "UseNone"),
    (ol.UseOutlines = "UseOutlines"),
    (ol.UseThumbs = "UseThumbs"),
    (ol.UseOC = "UseOC"),
    ((al = t.ReadingDirection || (t.ReadingDirection = {})).L2R = "L2R"),
    (al.R2L = "R2L"),
    ((sl = t.PrintScaling || (t.PrintScaling = {})).None = "None"),
    (sl.AppDefault = "AppDefault"),
    ((ll = t.Duplex || (t.Duplex = {})).Simplex = "Simplex"),
    (ll.DuplexFlipShortEdge = "DuplexFlipShortEdge"),
    (ll.DuplexFlipLongEdge = "DuplexFlipLongEdge");
  var zl,
    Rl,
    Ol,
    Dl,
    Bl = (function () {
      function e(t) {
        this.dict = t;
      }
      return (
        (e.prototype.lookupBool = function (t) {
          var e = this.dict.lookup(Ao.of(t));
          if (e instanceof vo) return e;
        }),
        (e.prototype.lookupName = function (t) {
          var e = this.dict.lookup(Ao.of(t));
          if (e instanceof Ao) return e;
        }),
        (e.prototype.HideToolbar = function () {
          return this.lookupBool("HideToolbar");
        }),
        (e.prototype.HideMenubar = function () {
          return this.lookupBool("HideMenubar");
        }),
        (e.prototype.HideWindowUI = function () {
          return this.lookupBool("HideWindowUI");
        }),
        (e.prototype.FitWindow = function () {
          return this.lookupBool("FitWindow");
        }),
        (e.prototype.CenterWindow = function () {
          return this.lookupBool("CenterWindow");
        }),
        (e.prototype.DisplayDocTitle = function () {
          return this.lookupBool("DisplayDocTitle");
        }),
        (e.prototype.NonFullScreenPageMode = function () {
          return this.lookupName("NonFullScreenPageMode");
        }),
        (e.prototype.Direction = function () {
          return this.lookupName("Direction");
        }),
        (e.prototype.PrintScaling = function () {
          return this.lookupName("PrintScaling");
        }),
        (e.prototype.Duplex = function () {
          return this.lookupName("Duplex");
        }),
        (e.prototype.PickTrayByPDFSize = function () {
          return this.lookupBool("PickTrayByPDFSize");
        }),
        (e.prototype.PrintPageRange = function () {
          var t = this.dict.lookup(Ao.of("PrintPageRange"));
          if (t instanceof po) return t;
        }),
        (e.prototype.NumCopies = function () {
          var t = this.dict.lookup(Ao.of("NumCopies"));
          if (t instanceof fo) return t;
        }),
        (e.prototype.getHideToolbar = function () {
          var t, e;
          return (
            null !==
              (e =
                null === (t = this.HideToolbar()) || void 0 === t
                  ? void 0
                  : t.asBoolean()) &&
            void 0 !== e &&
            e
          );
        }),
        (e.prototype.getHideMenubar = function () {
          var t, e;
          return (
            null !==
              (e =
                null === (t = this.HideMenubar()) || void 0 === t
                  ? void 0
                  : t.asBoolean()) &&
            void 0 !== e &&
            e
          );
        }),
        (e.prototype.getHideWindowUI = function () {
          var t, e;
          return (
            null !==
              (e =
                null === (t = this.HideWindowUI()) || void 0 === t
                  ? void 0
                  : t.asBoolean()) &&
            void 0 !== e &&
            e
          );
        }),
        (e.prototype.getFitWindow = function () {
          var t, e;
          return (
            null !==
              (e =
                null === (t = this.FitWindow()) || void 0 === t
                  ? void 0
                  : t.asBoolean()) &&
            void 0 !== e &&
            e
          );
        }),
        (e.prototype.getCenterWindow = function () {
          var t, e;
          return (
            null !==
              (e =
                null === (t = this.CenterWindow()) || void 0 === t
                  ? void 0
                  : t.asBoolean()) &&
            void 0 !== e &&
            e
          );
        }),
        (e.prototype.getDisplayDocTitle = function () {
          var t, e;
          return (
            null !==
              (e =
                null === (t = this.DisplayDocTitle()) || void 0 === t
                  ? void 0
                  : t.asBoolean()) &&
            void 0 !== e &&
            e
          );
        }),
        (e.prototype.getNonFullScreenPageMode = function () {
          var e,
            n,
            r =
              null === (e = this.NonFullScreenPageMode()) || void 0 === e
                ? void 0
                : e.decodeText();
          return null !== (n = Pl(r, t.NonFullScreenPageMode)) && void 0 !== n
            ? n
            : t.NonFullScreenPageMode.UseNone;
        }),
        (e.prototype.getReadingDirection = function () {
          var e,
            n,
            r =
              null === (e = this.Direction()) || void 0 === e
                ? void 0
                : e.decodeText();
          return null !== (n = Pl(r, t.ReadingDirection)) && void 0 !== n
            ? n
            : t.ReadingDirection.L2R;
        }),
        (e.prototype.getPrintScaling = function () {
          var e,
            n,
            r =
              null === (e = this.PrintScaling()) || void 0 === e
                ? void 0
                : e.decodeText();
          return null !== (n = Pl(r, t.PrintScaling)) && void 0 !== n
            ? n
            : t.PrintScaling.AppDefault;
        }),
        (e.prototype.getDuplex = function () {
          var e,
            n =
              null === (e = this.Duplex()) || void 0 === e
                ? void 0
                : e.decodeText();
          return Pl(n, t.Duplex);
        }),
        (e.prototype.getPickTrayByPDFSize = function () {
          var t;
          return null === (t = this.PickTrayByPDFSize()) || void 0 === t
            ? void 0
            : t.asBoolean();
        }),
        (e.prototype.getPrintPageRange = function () {
          var t = this.PrintPageRange();
          if (!t) return [];
          for (var e = [], n = 0; n < t.size(); n += 2) {
            var r = t.lookup(n, fo).asNumber(),
              i = t.lookup(n + 1, fo).asNumber();
            e.push({ start: r, end: i });
          }
          return e;
        }),
        (e.prototype.getNumCopies = function () {
          var t, e;
          return null !==
            (e =
              null === (t = this.NumCopies()) || void 0 === t
                ? void 0
                : t.asNumber()) && void 0 !== e
            ? e
            : 1;
        }),
        (e.prototype.setHideToolbar = function (t) {
          var e = this.dict.context.obj(t);
          this.dict.set(Ao.of("HideToolbar"), e);
        }),
        (e.prototype.setHideMenubar = function (t) {
          var e = this.dict.context.obj(t);
          this.dict.set(Ao.of("HideMenubar"), e);
        }),
        (e.prototype.setHideWindowUI = function (t) {
          var e = this.dict.context.obj(t);
          this.dict.set(Ao.of("HideWindowUI"), e);
        }),
        (e.prototype.setFitWindow = function (t) {
          var e = this.dict.context.obj(t);
          this.dict.set(Ao.of("FitWindow"), e);
        }),
        (e.prototype.setCenterWindow = function (t) {
          var e = this.dict.context.obj(t);
          this.dict.set(Ao.of("CenterWindow"), e);
        }),
        (e.prototype.setDisplayDocTitle = function (t) {
          var e = this.dict.context.obj(t);
          this.dict.set(Ao.of("DisplayDocTitle"), e);
        }),
        (e.prototype.setNonFullScreenPageMode = function (e) {
          An(e, "nonFullScreenPageMode", t.NonFullScreenPageMode);
          var n = Ao.of(e);
          this.dict.set(Ao.of("NonFullScreenPageMode"), n);
        }),
        (e.prototype.setReadingDirection = function (e) {
          An(e, "readingDirection", t.ReadingDirection);
          var n = Ao.of(e);
          this.dict.set(Ao.of("Direction"), n);
        }),
        (e.prototype.setPrintScaling = function (e) {
          An(e, "printScaling", t.PrintScaling);
          var n = Ao.of(e);
          this.dict.set(Ao.of("PrintScaling"), n);
        }),
        (e.prototype.setDuplex = function (e) {
          An(e, "duplex", t.Duplex);
          var n = Ao.of(e);
          this.dict.set(Ao.of("Duplex"), n);
        }),
        (e.prototype.setPickTrayByPDFSize = function (t) {
          var e = this.dict.context.obj(t);
          this.dict.set(Ao.of("PickTrayByPDFSize"), e);
        }),
        (e.prototype.setPrintPageRange = function (t) {
          Array.isArray(t) || (t = [t]);
          for (var e = [], n = 0, r = t.length; n < r; n++)
            e.push(t[n].start), e.push(t[n].end);
          Nn(e, "printPageRange", ["number"]);
          var i = this.dict.context.obj(e);
          this.dict.set(Ao.of("PrintPageRange"), i);
        }),
        (e.prototype.setNumCopies = function (t) {
          En(t, "numCopies", 1, Number.MAX_VALUE), In(t, "numCopies");
          var e = this.dict.context.obj(t);
          this.dict.set(Ao.of("NumCopies"), e);
        }),
        (e.fromDict = function (t) {
          return new e(t);
        }),
        (e.create = function (t) {
          return new e(t.obj({}));
        }),
        e
      );
    })(),
    Nl = /\/([^\0\t\n\f\r\ ]+)[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]+Tf/,
    El = (function () {
      function t(t, e) {
        (this.dict = t), (this.ref = e);
      }
      return (
        (t.prototype.T = function () {
          return this.dict.lookupMaybe(Ao.of("T"), na, Yo);
        }),
        (t.prototype.Ff = function () {
          var t = this.getInheritableAttribute(Ao.of("Ff"));
          return this.dict.context.lookupMaybe(t, fo);
        }),
        (t.prototype.V = function () {
          var t = this.getInheritableAttribute(Ao.of("V"));
          return this.dict.context.lookup(t);
        }),
        (t.prototype.Kids = function () {
          return this.dict.lookupMaybe(Ao.of("Kids"), po);
        }),
        (t.prototype.DA = function () {
          var t = this.dict.lookup(Ao.of("DA"));
          if (t instanceof na || t instanceof Yo) return t;
        }),
        (t.prototype.setKids = function (t) {
          this.dict.set(Ao.of("Kids"), this.dict.context.obj(t));
        }),
        (t.prototype.getParent = function () {
          var e = this.dict.get(Ao.of("Parent"));
          if (e instanceof Oo)
            return new t(this.dict.lookup(Ao.of("Parent"), mo), e);
        }),
        (t.prototype.setParent = function (t) {
          t
            ? this.dict.set(Ao.of("Parent"), t)
            : this.dict.delete(Ao.of("Parent"));
        }),
        (t.prototype.getFullyQualifiedName = function () {
          var t = this.getParent();
          return t
            ? t.getFullyQualifiedName() + "." + this.getPartialName()
            : this.getPartialName();
        }),
        (t.prototype.getPartialName = function () {
          var t;
          return null === (t = this.T()) || void 0 === t
            ? void 0
            : t.decodeText();
        }),
        (t.prototype.setPartialName = function (t) {
          t
            ? this.dict.set(Ao.of("T"), Yo.fromText(t))
            : this.dict.delete(Ao.of("T"));
        }),
        (t.prototype.setDefaultAppearance = function (t) {
          this.dict.set(Ao.of("DA"), na.of(t));
        }),
        (t.prototype.getDefaultAppearance = function () {
          var t = this.DA();
          return t instanceof Yo
            ? t.decodeText()
            : null == t
            ? void 0
            : t.asString();
        }),
        (t.prototype.setFontSize = function (t) {
          var e,
            n =
              null !== (e = this.getFullyQualifiedName()) && void 0 !== e
                ? e
                : "",
            r = this.getDefaultAppearance();
          if (!r) throw new sr(n);
          var i = E(r, Nl);
          if (!i.match) throw new lr(n);
          var o = r.slice(0, i.pos - i.match[0].length),
            a = i.pos <= r.length ? r.slice(i.pos) : "",
            s = o + " /" + i.match[1] + " " + t + " Tf " + a;
          this.setDefaultAppearance(s);
        }),
        (t.prototype.getFlags = function () {
          var t, e;
          return null !==
            (e =
              null === (t = this.Ff()) || void 0 === t
                ? void 0
                : t.asNumber()) && void 0 !== e
            ? e
            : 0;
        }),
        (t.prototype.setFlags = function (t) {
          this.dict.set(Ao.of("Ff"), fo.of(t));
        }),
        (t.prototype.hasFlag = function (t) {
          return 0 != (this.getFlags() & t);
        }),
        (t.prototype.setFlag = function (t) {
          var e = this.getFlags();
          this.setFlags(e | t);
        }),
        (t.prototype.clearFlag = function (t) {
          var e = this.getFlags();
          this.setFlags(e & ~t);
        }),
        (t.prototype.setFlagTo = function (t, e) {
          e ? this.setFlag(t) : this.clearFlag(t);
        }),
        (t.prototype.getInheritableAttribute = function (t) {
          var e;
          return (
            this.ascend(function (n) {
              e || (e = n.dict.get(t));
            }),
            e
          );
        }),
        (t.prototype.ascend = function (t) {
          t(this);
          var e = this.getParent();
          e && e.ascend(t);
        }),
        t
      );
    })(),
    jl = (function () {
      function t(t) {
        this.dict = t;
      }
      return (
        (t.prototype.W = function () {
          var t = this.dict.lookup(Ao.of("W"));
          if (t instanceof fo) return t;
        }),
        (t.prototype.getWidth = function () {
          var t, e;
          return null !==
            (e =
              null === (t = this.W()) || void 0 === t
                ? void 0
                : t.asNumber()) && void 0 !== e
            ? e
            : 1;
        }),
        (t.prototype.setWidth = function (t) {
          var e = this.dict.context.obj(t);
          this.dict.set(Ao.of("W"), e);
        }),
        (t.fromDict = function (e) {
          return new t(e);
        }),
        t
      );
    })(),
    Ml = (function () {
      function t(t) {
        this.dict = t;
      }
      return (
        (t.prototype.Rect = function () {
          return this.dict.lookup(Ao.of("Rect"), po);
        }),
        (t.prototype.AP = function () {
          return this.dict.lookupMaybe(Ao.of("AP"), mo);
        }),
        (t.prototype.F = function () {
          var t = this.dict.lookup(Ao.of("F"));
          return this.dict.context.lookupMaybe(t, fo);
        }),
        (t.prototype.getRectangle = function () {
          var t,
            e = this.Rect();
          return null !== (t = null == e ? void 0 : e.asRectangle()) &&
            void 0 !== t
            ? t
            : { x: 0, y: 0, width: 0, height: 0 };
        }),
        (t.prototype.setRectangle = function (t) {
          var e = t.x,
            n = t.y,
            r = t.width,
            i = t.height,
            o = this.dict.context.obj([e, n, e + r, n + i]);
          this.dict.set(Ao.of("Rect"), o);
        }),
        (t.prototype.getAppearanceState = function () {
          var t = this.dict.lookup(Ao.of("AS"));
          if (t instanceof Ao) return t;
        }),
        (t.prototype.setAppearanceState = function (t) {
          this.dict.set(Ao.of("AS"), t);
        }),
        (t.prototype.setAppearances = function (t) {
          this.dict.set(Ao.of("AP"), t);
        }),
        (t.prototype.ensureAP = function () {
          var t = this.AP();
          return (
            t ||
              ((t = this.dict.context.obj({})), this.dict.set(Ao.of("AP"), t)),
            t
          );
        }),
        (t.prototype.getNormalAppearance = function () {
          var t = this.ensureAP().get(Ao.of("N"));
          if (t instanceof Oo || t instanceof mo) return t;
          throw new Error(
            "Unexpected N type: " + (null == t ? void 0 : t.constructor.name)
          );
        }),
        (t.prototype.setNormalAppearance = function (t) {
          this.ensureAP().set(Ao.of("N"), t);
        }),
        (t.prototype.setRolloverAppearance = function (t) {
          this.ensureAP().set(Ao.of("R"), t);
        }),
        (t.prototype.setDownAppearance = function (t) {
          this.ensureAP().set(Ao.of("D"), t);
        }),
        (t.prototype.removeRolloverAppearance = function () {
          var t = this.AP();
          null == t || t.delete(Ao.of("R"));
        }),
        (t.prototype.removeDownAppearance = function () {
          var t = this.AP();
          null == t || t.delete(Ao.of("D"));
        }),
        (t.prototype.getAppearances = function () {
          var t = this.AP();
          if (t)
            return {
              normal: t.lookup(Ao.of("N"), mo, To),
              rollover: t.lookupMaybe(Ao.of("R"), mo, To),
              down: t.lookupMaybe(Ao.of("D"), mo, To),
            };
        }),
        (t.prototype.getFlags = function () {
          var t, e;
          return null !==
            (e =
              null === (t = this.F()) || void 0 === t
                ? void 0
                : t.asNumber()) && void 0 !== e
            ? e
            : 0;
        }),
        (t.prototype.setFlags = function (t) {
          this.dict.set(Ao.of("F"), fo.of(t));
        }),
        (t.prototype.hasFlag = function (t) {
          return 0 != (this.getFlags() & t);
        }),
        (t.prototype.setFlag = function (t) {
          var e = this.getFlags();
          this.setFlags(e | t);
        }),
        (t.prototype.clearFlag = function (t) {
          var e = this.getFlags();
          this.setFlags(e & ~t);
        }),
        (t.prototype.setFlagTo = function (t, e) {
          e ? this.setFlag(t) : this.clearFlag(t);
        }),
        (t.fromDict = function (e) {
          return new t(e);
        }),
        t
      );
    })(),
    Il = (function () {
      function t(t) {
        this.dict = t;
      }
      return (
        (t.prototype.R = function () {
          var t = this.dict.lookup(Ao.of("R"));
          if (t instanceof fo) return t;
        }),
        (t.prototype.BC = function () {
          var t = this.dict.lookup(Ao.of("BC"));
          if (t instanceof po) return t;
        }),
        (t.prototype.BG = function () {
          var t = this.dict.lookup(Ao.of("BG"));
          if (t instanceof po) return t;
        }),
        (t.prototype.CA = function () {
          var t = this.dict.lookup(Ao.of("CA"));
          if (t instanceof Yo || t instanceof na) return t;
        }),
        (t.prototype.RC = function () {
          var t = this.dict.lookup(Ao.of("RC"));
          if (t instanceof Yo || t instanceof na) return t;
        }),
        (t.prototype.AC = function () {
          var t = this.dict.lookup(Ao.of("AC"));
          if (t instanceof Yo || t instanceof na) return t;
        }),
        (t.prototype.getRotation = function () {
          var t;
          return null === (t = this.R()) || void 0 === t
            ? void 0
            : t.asNumber();
        }),
        (t.prototype.getBorderColor = function () {
          var t = this.BC();
          if (t) {
            for (
              var e = [], n = 0, r = null == t ? void 0 : t.size();
              n < r;
              n++
            ) {
              var i = t.get(n);
              i instanceof fo && e.push(i.asNumber());
            }
            return e;
          }
        }),
        (t.prototype.getBackgroundColor = function () {
          var t = this.BG();
          if (t) {
            for (
              var e = [], n = 0, r = null == t ? void 0 : t.size();
              n < r;
              n++
            ) {
              var i = t.get(n);
              i instanceof fo && e.push(i.asNumber());
            }
            return e;
          }
        }),
        (t.prototype.getCaptions = function () {
          var t = this.CA(),
            e = this.RC(),
            n = this.AC();
          return {
            normal: null == t ? void 0 : t.decodeText(),
            rollover: null == e ? void 0 : e.decodeText(),
            down: null == n ? void 0 : n.decodeText(),
          };
        }),
        (t.prototype.setRotation = function (t) {
          var e = this.dict.context.obj(t);
          this.dict.set(Ao.of("R"), e);
        }),
        (t.prototype.setBorderColor = function (t) {
          var e = this.dict.context.obj(t);
          this.dict.set(Ao.of("BC"), e);
        }),
        (t.prototype.setBackgroundColor = function (t) {
          var e = this.dict.context.obj(t);
          this.dict.set(Ao.of("BG"), e);
        }),
        (t.prototype.setCaptions = function (t) {
          var e = Yo.fromText(t.normal);
          if ((this.dict.set(Ao.of("CA"), e), t.rollover)) {
            var n = Yo.fromText(t.rollover);
            this.dict.set(Ao.of("RC"), n);
          } else this.dict.delete(Ao.of("RC"));
          if (t.down) {
            var r = Yo.fromText(t.down);
            this.dict.set(Ao.of("AC"), r);
          } else this.dict.delete(Ao.of("AC"));
        }),
        (t.fromDict = function (e) {
          return new t(e);
        }),
        t
      );
    })(),
    Ul = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        n(e, t),
        (e.prototype.MK = function () {
          var t = this.dict.lookup(Ao.of("MK"));
          if (t instanceof mo) return t;
        }),
        (e.prototype.BS = function () {
          var t = this.dict.lookup(Ao.of("BS"));
          if (t instanceof mo) return t;
        }),
        (e.prototype.DA = function () {
          var t = this.dict.lookup(Ao.of("DA"));
          if (t instanceof na || t instanceof Yo) return t;
        }),
        (e.prototype.P = function () {
          var t = this.dict.get(Ao.of("P"));
          if (t instanceof Oo) return t;
        }),
        (e.prototype.setDefaultAppearance = function (t) {
          this.dict.set(Ao.of("DA"), na.of(t));
        }),
        (e.prototype.getDefaultAppearance = function () {
          var t = this.DA();
          return t instanceof Yo
            ? t.decodeText()
            : null == t
            ? void 0
            : t.asString();
        }),
        (e.prototype.getAppearanceCharacteristics = function () {
          var t = this.MK();
          if (t) return Il.fromDict(t);
        }),
        (e.prototype.getOrCreateAppearanceCharacteristics = function () {
          var t = this.MK();
          if (t) return Il.fromDict(t);
          var e = Il.fromDict(this.dict.context.obj({}));
          return this.dict.set(Ao.of("MK"), e.dict), e;
        }),
        (e.prototype.getBorderStyle = function () {
          var t = this.BS();
          if (t) return jl.fromDict(t);
        }),
        (e.prototype.getOrCreateBorderStyle = function () {
          var t = this.BS();
          if (t) return jl.fromDict(t);
          var e = jl.fromDict(this.dict.context.obj({}));
          return this.dict.set(Ao.of("BS"), e.dict), e;
        }),
        (e.prototype.getOnValue = function () {
          var t,
            e =
              null === (t = this.getAppearances()) || void 0 === t
                ? void 0
                : t.normal;
          if (e instanceof mo)
            for (var n = e.keys(), r = 0, i = n.length; r < i; r++) {
              var o = n[r];
              if (o !== Ao.of("Off")) return o;
            }
        }),
        (e.fromDict = function (t) {
          return new e(t);
        }),
        (e.create = function (t, n) {
          return new e(
            t.obj({
              Type: "Annot",
              Subtype: "Widget",
              Rect: [0, 0, 0, 0],
              Parent: n,
            })
          );
        }),
        e
      );
    })(Ml),
    Vl = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        n(e, t),
        (e.prototype.FT = function () {
          var t = this.getInheritableAttribute(Ao.of("FT"));
          return this.dict.context.lookup(t, Ao);
        }),
        (e.prototype.getWidgets = function () {
          var t = this.Kids();
          if (!t) return [Ul.fromDict(this.dict)];
          for (var e = new Array(t.size()), n = 0, r = t.size(); n < r; n++) {
            var i = t.lookup(n, mo);
            e[n] = Ul.fromDict(i);
          }
          return e;
        }),
        (e.prototype.addWidget = function (t) {
          this.normalizedEntries().Kids.push(t);
        }),
        (e.prototype.removeWidget = function (t) {
          var e = this.Kids();
          if (e) {
            if (t < 0 || t > e.size()) throw new ir(t, 0, e.size());
            e.remove(t);
          } else {
            if (0 !== t) throw new ir(t, 0, 0);
            this.setKids([]);
          }
        }),
        (e.prototype.normalizedEntries = function () {
          var t = this.Kids();
          return (
            t ||
              ((t = this.dict.context.obj([this.ref])),
              this.dict.set(Ao.of("Kids"), t)),
            { Kids: t }
          );
        }),
        (e.fromDict = function (t, n) {
          return new e(t, n);
        }),
        e
      );
    })(El),
    Wl = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        n(e, t),
        (e.prototype.Opt = function () {
          return this.dict.lookupMaybe(Ao.of("Opt"), na, Yo, po);
        }),
        (e.prototype.setOpt = function (t) {
          this.dict.set(Ao.of("Opt"), this.dict.context.obj(t));
        }),
        (e.prototype.getExportValues = function () {
          var t = this.Opt();
          if (t) {
            if (t instanceof na || t instanceof Yo) return [t];
            for (var e = [], n = 0, r = t.size(); n < r; n++) {
              var i = t.lookup(n);
              (i instanceof na || i instanceof Yo) && e.push(i);
            }
            return e;
          }
        }),
        (e.prototype.removeExportValue = function (t) {
          var e = this.Opt();
          if (e)
            if (e instanceof na || e instanceof Yo) {
              if (0 !== t) throw new ir(t, 0, 0);
              this.setOpt([]);
            } else {
              if (t < 0 || t > e.size()) throw new ir(t, 0, e.size());
              e.remove(t);
            }
        }),
        (e.prototype.normalizeExportValues = function () {
          for (
            var t,
              e,
              n,
              r,
              i =
                null !== (t = this.getExportValues()) && void 0 !== t ? t : [],
              o = [],
              a = this.getWidgets(),
              s = 0,
              l = a.length;
            s < l;
            s++
          ) {
            var h = a[s],
              u =
                null !== (e = i[s]) && void 0 !== e
                  ? e
                  : Yo.fromText(
                      null !==
                        (r =
                          null === (n = h.getOnValue()) || void 0 === n
                            ? void 0
                            : n.decodeText()) && void 0 !== r
                        ? r
                        : ""
                    );
            o.push(u);
          }
          this.setOpt(o);
        }),
        (e.prototype.addOpt = function (t, e) {
          var n;
          this.normalizeExportValues();
          var r,
            i = t.decodeText();
          if (e)
            for (
              var o =
                  null !== (n = this.getExportValues()) && void 0 !== n
                    ? n
                    : [],
                a = 0,
                s = o.length;
              a < s;
              a++
            ) {
              o[a].decodeText() === i && (r = a);
            }
          var l = this.Opt();
          return l.push(t), null != r ? r : l.size() - 1;
        }),
        (e.prototype.addWidgetWithOpt = function (t, e, n) {
          var r = this.addOpt(e, n),
            i = Ao.of(String(r));
          return this.addWidget(t), i;
        }),
        e
      );
    })(Vl),
    ql = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        n(e, t),
        (e.prototype.setValue = function (t) {
          var e;
          if (
            t !==
              (null !== (e = this.getOnValue()) && void 0 !== e
                ? e
                : Ao.of("Yes")) &&
            t !== Ao.of("Off")
          )
            throw new or();
          this.dict.set(Ao.of("V"), t);
          for (var n = this.getWidgets(), r = 0, i = n.length; r < i; r++) {
            var o = n[r],
              a = o.getOnValue() === t ? t : Ao.of("Off");
            o.setAppearanceState(a);
          }
        }),
        (e.prototype.getValue = function () {
          var t = this.V();
          return t instanceof Ao ? t : Ao.of("Off");
        }),
        (e.prototype.getOnValue = function () {
          var t = this.getWidgets()[0];
          return null == t ? void 0 : t.getOnValue();
        }),
        (e.fromDict = function (t, n) {
          return new e(t, n);
        }),
        (e.create = function (t) {
          var n = t.obj({ FT: "Btn", Kids: [] });
          return new e(n, t.register(n));
        }),
        e
      );
    })(Wl),
    Ll = function (t) {
      return 1 << t;
    };
  ((zl = t.AcroFieldFlags || (t.AcroFieldFlags = {}))[(zl.ReadOnly = Ll(0))] =
    "ReadOnly"),
    (zl[(zl.Required = Ll(1))] = "Required"),
    (zl[(zl.NoExport = Ll(2))] = "NoExport"),
    ((Rl = t.AcroButtonFlags || (t.AcroButtonFlags = {}))[
      (Rl.NoToggleToOff = Ll(14))
    ] = "NoToggleToOff"),
    (Rl[(Rl.Radio = Ll(15))] = "Radio"),
    (Rl[(Rl.PushButton = Ll(16))] = "PushButton"),
    (Rl[(Rl.RadiosInUnison = Ll(25))] = "RadiosInUnison"),
    ((Ol = t.AcroTextFlags || (t.AcroTextFlags = {}))[(Ol.Multiline = Ll(12))] =
      "Multiline"),
    (Ol[(Ol.Password = Ll(13))] = "Password"),
    (Ol[(Ol.FileSelect = Ll(20))] = "FileSelect"),
    (Ol[(Ol.DoNotSpellCheck = Ll(22))] = "DoNotSpellCheck"),
    (Ol[(Ol.DoNotScroll = Ll(23))] = "DoNotScroll"),
    (Ol[(Ol.Comb = Ll(24))] = "Comb"),
    (Ol[(Ol.RichText = Ll(25))] = "RichText"),
    ((Dl = t.AcroChoiceFlags || (t.AcroChoiceFlags = {}))[(Dl.Combo = Ll(17))] =
      "Combo"),
    (Dl[(Dl.Edit = Ll(18))] = "Edit"),
    (Dl[(Dl.Sort = Ll(19))] = "Sort"),
    (Dl[(Dl.MultiSelect = Ll(21))] = "MultiSelect"),
    (Dl[(Dl.DoNotSpellCheck = Ll(22))] = "DoNotSpellCheck"),
    (Dl[(Dl.CommitOnSelChange = Ll(26))] = "CommitOnSelChange");
  var Kl = (function (e) {
      function r() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        n(r, e),
        (r.prototype.setValues = function (e) {
          if (
            this.hasFlag(t.AcroChoiceFlags.Combo) &&
            !this.hasFlag(t.AcroChoiceFlags.Edit) &&
            !this.valuesAreValid(e)
          )
            throw new or();
          if (
            (0 === e.length && this.dict.delete(Ao.of("V")),
            1 === e.length && this.dict.set(Ao.of("V"), e[0]),
            e.length > 1)
          ) {
            if (!this.hasFlag(t.AcroChoiceFlags.MultiSelect)) throw new ar();
            this.dict.set(Ao.of("V"), this.dict.context.obj(e));
          }
          this.updateSelectedIndices(e);
        }),
        (r.prototype.valuesAreValid = function (t) {
          for (
            var e = this.getOptions(),
              n = function (n, r) {
                var i = t[n].decodeText();
                if (
                  !e.find(function (t) {
                    return i === (t.display || t.value).decodeText();
                  })
                )
                  return { value: !1 };
              },
              r = 0,
              i = t.length;
            r < i;
            r++
          ) {
            var o = n(r);
            if ("object" == typeof o) return o.value;
          }
          return !0;
        }),
        (r.prototype.updateSelectedIndices = function (t) {
          if (t.length > 1) {
            for (
              var e = new Array(t.length),
                n = this.getOptions(),
                r = function (r, i) {
                  var o = t[r].decodeText();
                  e[r] = n.findIndex(function (t) {
                    return o === (t.display || t.value).decodeText();
                  });
                },
                i = 0,
                o = t.length;
              i < o;
              i++
            )
              r(i);
            this.dict.set(Ao.of("I"), this.dict.context.obj(e.sort()));
          } else this.dict.delete(Ao.of("I"));
        }),
        (r.prototype.getValues = function () {
          var t = this.V();
          if (t instanceof na || t instanceof Yo) return [t];
          if (t instanceof po) {
            for (var e = [], n = 0, r = t.size(); n < r; n++) {
              var i = t.lookup(n);
              (i instanceof na || i instanceof Yo) && e.push(i);
            }
            return e;
          }
          return [];
        }),
        (r.prototype.Opt = function () {
          return this.dict.lookupMaybe(Ao.of("Opt"), na, Yo, po);
        }),
        (r.prototype.setOptions = function (t) {
          for (var e = new Array(t.length), n = 0, r = t.length; n < r; n++) {
            var i = t[n],
              o = i.value,
              a = i.display;
            e[n] = this.dict.context.obj([o, a || o]);
          }
          this.dict.set(Ao.of("Opt"), this.dict.context.obj(e));
        }),
        (r.prototype.getOptions = function () {
          var t = this.Opt();
          if (t instanceof na || t instanceof Yo)
            return [{ value: t, display: t }];
          if (t instanceof po) {
            for (var e = [], n = 0, r = t.size(); n < r; n++) {
              var i = t.lookup(n);
              if (
                ((i instanceof na || i instanceof Yo) &&
                  e.push({ value: i, display: i }),
                i instanceof po && i.size() > 0)
              ) {
                var o = i.lookup(0, na, Yo),
                  a = i.lookupMaybe(1, na, Yo);
                e.push({ value: o, display: a || o });
              }
            }
            return e;
          }
          return [];
        }),
        r
      );
    })(Vl),
    Gl = (function (e) {
      function r() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        n(r, e),
        (r.fromDict = function (t, e) {
          return new r(t, e);
        }),
        (r.create = function (e) {
          var n = e.obj({ FT: "Ch", Ff: t.AcroChoiceFlags.Combo, Kids: [] });
          return new r(n, e.register(n));
        }),
        r
      );
    })(Kl),
    Hl = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        n(e, t),
        (e.prototype.addField = function (t) {
          var e = this.normalizedEntries().Kids;
          null == e || e.push(t);
        }),
        (e.prototype.normalizedEntries = function () {
          var t = this.Kids();
          return (
            t ||
              ((t = this.dict.context.obj([])),
              this.dict.set(Ao.of("Kids"), t)),
            { Kids: t }
          );
        }),
        (e.fromDict = function (t, n) {
          return new e(t, n);
        }),
        (e.create = function (t) {
          var n = t.obj({});
          return new e(n, t.register(n));
        }),
        e
      );
    })(El),
    _l = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        n(e, t),
        (e.fromDict = function (t, n) {
          return new e(t, n);
        }),
        e
      );
    })(Vl),
    Xl = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        n(e, t),
        (e.prototype.MaxLen = function () {
          var t = this.dict.lookup(Ao.of("MaxLen"));
          if (t instanceof fo) return t;
        }),
        (e.prototype.Q = function () {
          var t = this.dict.lookup(Ao.of("Q"));
          if (t instanceof fo) return t;
        }),
        (e.prototype.setMaxLength = function (t) {
          this.dict.set(Ao.of("MaxLen"), fo.of(t));
        }),
        (e.prototype.removeMaxLength = function () {
          this.dict.delete(Ao.of("MaxLen"));
        }),
        (e.prototype.getMaxLength = function () {
          var t;
          return null === (t = this.MaxLen()) || void 0 === t
            ? void 0
            : t.asNumber();
        }),
        (e.prototype.setQuadding = function (t) {
          this.dict.set(Ao.of("Q"), fo.of(t));
        }),
        (e.prototype.getQuadding = function () {
          var t;
          return null === (t = this.Q()) || void 0 === t
            ? void 0
            : t.asNumber();
        }),
        (e.prototype.setValue = function (t) {
          this.dict.set(Ao.of("V"), t);
        }),
        (e.prototype.removeValue = function () {
          this.dict.delete(Ao.of("V"));
        }),
        (e.prototype.getValue = function () {
          var t = this.V();
          if (t instanceof na || t instanceof Yo) return t;
        }),
        (e.fromDict = function (t, n) {
          return new e(t, n);
        }),
        (e.create = function (t) {
          var n = t.obj({ FT: "Tx", Kids: [] });
          return new e(n, t.register(n));
        }),
        e
      );
    })(Vl),
    Zl = (function (e) {
      function r() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        n(r, e),
        (r.fromDict = function (t, e) {
          return new r(t, e);
        }),
        (r.create = function (e) {
          var n = e.obj({
            FT: "Btn",
            Ff: t.AcroButtonFlags.PushButton,
            Kids: [],
          });
          return new r(n, e.register(n));
        }),
        r
      );
    })(Wl),
    Yl = (function (e) {
      function r() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        n(r, e),
        (r.prototype.setValue = function (t) {
          if (!this.getOnValues().includes(t) && t !== Ao.of("Off"))
            throw new or();
          this.dict.set(Ao.of("V"), t);
          for (var e = this.getWidgets(), n = 0, r = e.length; n < r; n++) {
            var i = e[n],
              o = i.getOnValue() === t ? t : Ao.of("Off");
            i.setAppearanceState(o);
          }
        }),
        (r.prototype.getValue = function () {
          var t = this.V();
          return t instanceof Ao ? t : Ao.of("Off");
        }),
        (r.prototype.getOnValues = function () {
          for (
            var t = this.getWidgets(), e = [], n = 0, r = t.length;
            n < r;
            n++
          ) {
            var i = t[n].getOnValue();
            i && e.push(i);
          }
          return e;
        }),
        (r.fromDict = function (t, e) {
          return new r(t, e);
        }),
        (r.create = function (e) {
          var n = e.obj({ FT: "Btn", Ff: t.AcroButtonFlags.Radio, Kids: [] });
          return new r(n, e.register(n));
        }),
        r
      );
    })(Wl),
    Jl = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        n(e, t),
        (e.fromDict = function (t, n) {
          return new e(t, n);
        }),
        (e.create = function (t) {
          var n = t.obj({ FT: "Ch", Kids: [] });
          return new e(n, t.register(n));
        }),
        e
      );
    })(Kl),
    Ql = function (t) {
      if (!t) return [];
      for (var e = [], n = 0, r = t.size(); n < r; n++) {
        var i = t.get(n),
          o = t.lookup(n);
        i instanceof Oo && o instanceof mo && e.push([$l(o, i), i]);
      }
      return e;
    },
    $l = function (t, e) {
      return th(t) ? Hl.fromDict(t, e) : eh(t, e);
    },
    th = function (t) {
      var e = t.lookup(Ao.of("Kids"));
      if (e instanceof po)
        for (var n = 0, r = e.size(); n < r; n++) {
          var i = e.lookup(n);
          if (i instanceof mo && i.has(Ao.of("T"))) return !0;
        }
      return !1;
    },
    eh = function (t, e) {
      var n = oh(t, Ao.of("FT")),
        r = t.context.lookup(n, Ao);
      return r === Ao.of("Btn")
        ? nh(t, e)
        : r === Ao.of("Ch")
        ? rh(t, e)
        : r === Ao.of("Tx")
        ? Xl.fromDict(t, e)
        : r === Ao.of("Sig")
        ? _l.fromDict(t, e)
        : Vl.fromDict(t, e);
    },
    nh = function (e, n) {
      var r,
        i = oh(e, Ao.of("Ff")),
        o = e.context.lookupMaybe(i, fo),
        a =
          null !== (r = null == o ? void 0 : o.asNumber()) && void 0 !== r
            ? r
            : 0;
      return ih(a, t.AcroButtonFlags.PushButton)
        ? Zl.fromDict(e, n)
        : ih(a, t.AcroButtonFlags.Radio)
        ? Yl.fromDict(e, n)
        : ql.fromDict(e, n);
    },
    rh = function (e, n) {
      var r,
        i = oh(e, Ao.of("Ff")),
        o = e.context.lookupMaybe(i, fo),
        a =
          null !== (r = null == o ? void 0 : o.asNumber()) && void 0 !== r
            ? r
            : 0;
      return ih(a, t.AcroChoiceFlags.Combo)
        ? Gl.fromDict(e, n)
        : Jl.fromDict(e, n);
    },
    ih = function (t, e) {
      return 0 != (t & e);
    },
    oh = function (t, e) {
      var n;
      return (
        ah(t, function (t) {
          n || (n = t.get(e));
        }),
        n
      );
    },
    ah = function (t, e) {
      e(t);
      var n = t.lookupMaybe(Ao.of("Parent"), mo);
      n && ah(n, e);
    },
    sh = (function () {
      function t(t) {
        this.dict = t;
      }
      return (
        (t.prototype.Fields = function () {
          var t = this.dict.lookup(Ao.of("Fields"));
          if (t instanceof po) return t;
        }),
        (t.prototype.getFields = function () {
          for (
            var t = this.normalizedEntries().Fields,
              e = new Array(t.size()),
              n = 0,
              r = t.size();
            n < r;
            n++
          ) {
            var i = t.get(n),
              o = t.lookup(n, mo);
            e[n] = [$l(o, i), i];
          }
          return e;
        }),
        (t.prototype.getAllFields = function () {
          var t = [],
            e = function (n) {
              if (n)
                for (var r = 0, i = n.length; r < i; r++) {
                  var o = n[r];
                  t.push(o);
                  var a = o[0];
                  a instanceof Hl && e(Ql(a.Kids()));
                }
            };
          return e(this.getFields()), t;
        }),
        (t.prototype.addField = function (t) {
          var e = this.normalizedEntries().Fields;
          null == e || e.push(t);
        }),
        (t.prototype.removeField = function (t) {
          var e = t.getParent(),
            n = void 0 === e ? this.normalizedEntries().Fields : e.Kids(),
            r = null == n ? void 0 : n.indexOf(t.ref);
          if (void 0 === n || void 0 === r)
            throw new Error(
              "Tried to remove inexistent field " + t.getFullyQualifiedName()
            );
          n.remove(r), void 0 !== e && 0 === n.size() && this.removeField(e);
        }),
        (t.prototype.normalizedEntries = function () {
          var t = this.Fields();
          return (
            t ||
              ((t = this.dict.context.obj([])),
              this.dict.set(Ao.of("Fields"), t)),
            { Fields: t }
          );
        }),
        (t.fromDict = function (e) {
          return new t(e);
        }),
        (t.create = function (e) {
          return new t(e.obj({ Fields: [] }));
        }),
        t
      );
    })(),
    lh = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        n(e, t),
        (e.prototype.Pages = function () {
          return this.lookup(Ao.of("Pages"), mo);
        }),
        (e.prototype.AcroForm = function () {
          return this.lookupMaybe(Ao.of("AcroForm"), mo);
        }),
        (e.prototype.getAcroForm = function () {
          var t = this.AcroForm();
          if (t) return sh.fromDict(t);
        }),
        (e.prototype.getOrCreateAcroForm = function () {
          var t = this.getAcroForm();
          if (!t) {
            t = sh.create(this.context);
            var e = this.context.register(t.dict);
            this.set(Ao.of("AcroForm"), e);
          }
          return t;
        }),
        (e.prototype.ViewerPreferences = function () {
          return this.lookupMaybe(Ao.of("ViewerPreferences"), mo);
        }),
        (e.prototype.getViewerPreferences = function () {
          var t = this.ViewerPreferences();
          if (t) return Bl.fromDict(t);
        }),
        (e.prototype.getOrCreateViewerPreferences = function () {
          var t = this.getViewerPreferences();
          if (!t) {
            t = Bl.create(this.context);
            var e = this.context.register(t.dict);
            this.set(Ao.of("ViewerPreferences"), e);
          }
          return t;
        }),
        (e.prototype.insertLeafNode = function (t, e) {
          var n = this.get(Ao.of("Pages"));
          return this.Pages().insertLeafNode(t, e) || n;
        }),
        (e.prototype.removeLeafNode = function (t) {
          this.Pages().removeLeafNode(t);
        }),
        (e.withContextAndPages = function (t, n) {
          var r = new Map();
          return (
            r.set(Ao.of("Type"), Ao.of("Catalog")),
            r.set(Ao.of("Pages"), n),
            new e(r, t)
          );
        }),
        (e.fromMapWithContext = function (t, n) {
          return new e(t, n);
        }),
        e
      );
    })(mo),
    hh = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        n(e, t),
        (e.prototype.Parent = function () {
          return this.lookup(Ao.of("Parent"));
        }),
        (e.prototype.Kids = function () {
          return this.lookup(Ao.of("Kids"), po);
        }),
        (e.prototype.Count = function () {
          return this.lookup(Ao.of("Count"), fo);
        }),
        (e.prototype.pushTreeNode = function (t) {
          this.Kids().push(t);
        }),
        (e.prototype.pushLeafNode = function (t) {
          var e = this.Kids();
          this.insertLeafKid(e.size(), t);
        }),
        (e.prototype.insertLeafNode = function (t, n) {
          var r = this.Kids(),
            i = this.Count().asNumber();
          if (n > i) throw new nr(n, i);
          for (var o = n, a = 0, s = r.size(); a < s; a++) {
            if (0 === o) return void this.insertLeafKid(a, t);
            var l = r.get(a),
              h = this.context.lookup(l);
            if (h instanceof e) {
              if (h.Count().asNumber() > o) return h.insertLeafNode(t, o) || l;
              o -= h.Count().asNumber();
            }
            h instanceof Uo && (o -= 1);
          }
          if (0 !== o) throw new rr(n, "insertLeafNode");
          this.insertLeafKid(r.size(), t);
        }),
        (e.prototype.removeLeafNode = function (t, n) {
          void 0 === n && (n = !0);
          var r = this.Kids(),
            i = this.Count().asNumber();
          if (t >= i) throw new nr(t, i);
          for (var o = t, a = 0, s = r.size(); a < s; a++) {
            var l = r.get(a),
              h = this.context.lookup(l);
            if (h instanceof e) {
              if (h.Count().asNumber() > o)
                return (
                  h.removeLeafNode(o, n),
                  void (n && 0 === h.Kids().size() && r.remove(a))
                );
              o -= h.Count().asNumber();
            }
            if (h instanceof Uo) {
              if (0 === o) return void this.removeKid(a);
              o -= 1;
            }
          }
          throw new rr(t, "removeLeafNode");
        }),
        (e.prototype.ascend = function (t) {
          t(this);
          var e = this.Parent();
          e && e.ascend(t);
        }),
        (e.prototype.traverse = function (t) {
          for (var n = this.Kids(), r = 0, i = n.size(); r < i; r++) {
            var o = n.get(r),
              a = this.context.lookup(o);
            a instanceof e && a.traverse(t), t(a, o);
          }
        }),
        (e.prototype.insertLeafKid = function (t, e) {
          var n = this.Kids();
          this.ascend(function (t) {
            var e = t.Count().asNumber() + 1;
            t.set(Ao.of("Count"), fo.of(e));
          }),
            n.insert(t, e);
        }),
        (e.prototype.removeKid = function (t) {
          var e = this.Kids();
          e.lookup(t) instanceof Uo &&
            this.ascend(function (t) {
              var e = t.Count().asNumber() - 1;
              t.set(Ao.of("Count"), fo.of(e));
            }),
            e.remove(t);
        }),
        (e.withContext = function (t, n) {
          var r = new Map();
          return (
            r.set(Ao.of("Type"), Ao.of("Pages")),
            r.set(Ao.of("Kids"), t.obj([])),
            r.set(Ao.of("Count"), t.obj(0)),
            n && r.set(Ao.of("Parent"), n),
            new e(r, t)
          );
        }),
        (e.fromMapWithContext = function (t, n) {
          return new e(t, n);
        }),
        e
      );
    })(mo),
    uh = new Uint8Array(256);
  (uh[br.Zero] = 1),
    (uh[br.One] = 1),
    (uh[br.Two] = 1),
    (uh[br.Three] = 1),
    (uh[br.Four] = 1),
    (uh[br.Five] = 1),
    (uh[br.Six] = 1),
    (uh[br.Seven] = 1),
    (uh[br.Eight] = 1),
    (uh[br.Nine] = 1);
  var ch = new Uint8Array(256);
  (ch[br.Period] = 1), (ch[br.Plus] = 1), (ch[br.Minus] = 1);
  for (var dh = new Uint8Array(256), fh = 0; fh < 256; fh++)
    dh[fh] = uh[fh] || ch[fh] ? 1 : 0;
  var ph,
    gh = br.Newline,
    vh = br.CarriageReturn,
    yh = (function () {
      function t(t, e) {
        void 0 === e && (e = !1), (this.bytes = t), (this.capNumbers = e);
      }
      return (
        (t.prototype.parseRawInt = function () {
          for (var t = ""; !this.bytes.done(); ) {
            var e = this.bytes.peek();
            if (!uh[e]) break;
            t += b(this.bytes.next());
          }
          var n = Number(t);
          if (!t || !isFinite(n)) throw new hr(this.bytes.position(), t);
          return n;
        }),
        (t.prototype.parseRawNumber = function () {
          for (var t = ""; !this.bytes.done(); ) {
            var e = this.bytes.peek();
            if (!dh[e]) break;
            if (((t += b(this.bytes.next())), e === br.Period)) break;
          }
          for (; !this.bytes.done(); ) {
            e = this.bytes.peek();
            if (!uh[e]) break;
            t += b(this.bytes.next());
          }
          var n = Number(t);
          if (!t || !isFinite(n)) throw new hr(this.bytes.position(), t);
          if (n > Number.MAX_SAFE_INTEGER) {
            if (this.capNumbers) {
              var r =
                "Parsed number that is too large for some PDF readers: " +
                t +
                ", using Number.MAX_SAFE_INTEGER instead.";
              return console.warn(r), Number.MAX_SAFE_INTEGER;
            }
            r =
              "Parsed number that is too large for some PDF readers: " +
              t +
              ", not capping.";
            console.warn(r);
          }
          return n;
        }),
        (t.prototype.skipWhitespace = function () {
          for (; !this.bytes.done() && wo[this.bytes.peek()]; )
            this.bytes.next();
        }),
        (t.prototype.skipLine = function () {
          for (; !this.bytes.done(); ) {
            var t = this.bytes.peek();
            if (t === gh || t === vh) return;
            this.bytes.next();
          }
        }),
        (t.prototype.skipComment = function () {
          if (this.bytes.peek() !== br.Percent) return !1;
          for (; !this.bytes.done(); ) {
            var t = this.bytes.peek();
            if (t === gh || t === vh) return !0;
            this.bytes.next();
          }
          return !0;
        }),
        (t.prototype.skipWhitespaceAndComments = function () {
          for (this.skipWhitespace(); this.skipComment(); )
            this.skipWhitespace();
        }),
        (t.prototype.matchKeyword = function (t) {
          for (var e = this.bytes.offset(), n = 0, r = t.length; n < r; n++)
            if (this.bytes.done() || this.bytes.next() !== t[n])
              return this.bytes.moveTo(e), !1;
          return !0;
        }),
        t
      );
    })(),
    mh = (function () {
      function t(t) {
        (this.idx = 0),
          (this.line = 0),
          (this.column = 0),
          (this.bytes = t),
          (this.length = this.bytes.length);
      }
      return (
        (t.prototype.moveTo = function (t) {
          this.idx = t;
        }),
        (t.prototype.next = function () {
          var t = this.bytes[this.idx++];
          return (
            t === br.Newline
              ? ((this.line += 1), (this.column = 0))
              : (this.column += 1),
            t
          );
        }),
        (t.prototype.assertNext = function (t) {
          if (this.peek() !== t) throw new cr(this.position(), t, this.peek());
          return this.next();
        }),
        (t.prototype.peek = function () {
          return this.bytes[this.idx];
        }),
        (t.prototype.peekAhead = function (t) {
          return this.bytes[this.idx + t];
        }),
        (t.prototype.peekAt = function (t) {
          return this.bytes[t];
        }),
        (t.prototype.done = function () {
          return this.idx >= this.length;
        }),
        (t.prototype.offset = function () {
          return this.idx;
        }),
        (t.prototype.slice = function (t, e) {
          return this.bytes.slice(t, e);
        }),
        (t.prototype.position = function () {
          return { line: this.line, column: this.column, offset: this.idx };
        }),
        (t.of = function (e) {
          return new t(e);
        }),
        (t.fromPDFRawStream = function (e) {
          return t.of(Al(e).decode());
        }),
        t
      );
    })(),
    bh = br.Space,
    wh = br.CarriageReturn,
    xh = br.Newline,
    kh = [br.s, br.t, br.r, br.e, br.a, br.m],
    Fh = [br.e, br.n, br.d, br.s, br.t, br.r, br.e, br.a, br.m],
    Sh = {
      header: [br.Percent, br.P, br.D, br.F, br.Dash],
      eof: [br.Percent, br.Percent, br.E, br.O, br.F],
      obj: [br.o, br.b, br.j],
      endobj: [br.e, br.n, br.d, br.o, br.b, br.j],
      xref: [br.x, br.r, br.e, br.f],
      trailer: [br.t, br.r, br.a, br.i, br.l, br.e, br.r],
      startxref: [br.s, br.t, br.a, br.r, br.t, br.x, br.r, br.e, br.f],
      true: [br.t, br.r, br.u, br.e],
      false: [br.f, br.a, br.l, br.s, br.e],
      null: [br.n, br.u, br.l, br.l],
      stream: kh,
      streamEOF1: a(kh, [bh, wh, xh]),
      streamEOF2: a(kh, [wh, xh]),
      streamEOF3: a(kh, [wh]),
      streamEOF4: a(kh, [xh]),
      endstream: Fh,
      EOF1endstream: a([wh, xh], Fh),
      EOF2endstream: a([wh], Fh),
      EOF3endstream: a([xh], Fh),
    },
    Ch = (function (t) {
      function e(e, n, r) {
        void 0 === r && (r = !1);
        var i = t.call(this, e, r) || this;
        return (i.context = n), i;
      }
      return (
        n(e, t),
        (e.prototype.parseObject = function () {
          if ((this.skipWhitespaceAndComments(), this.matchKeyword(Sh.true)))
            return vo.True;
          if (this.matchKeyword(Sh.false)) return vo.False;
          if (this.matchKeyword(Sh.null)) return yo;
          var t = this.bytes.peek();
          if (t === br.LessThan && this.bytes.peekAhead(1) === br.LessThan)
            return this.parseDictOrStream();
          if (t === br.LessThan) return this.parseHexString();
          if (t === br.LeftParen) return this.parseString();
          if (t === br.ForwardSlash) return this.parseName();
          if (t === br.LeftSquareBracket) return this.parseArray();
          if (dh[t]) return this.parseNumberOrRef();
          throw new dr(this.bytes.position(), t);
        }),
        (e.prototype.parseNumberOrRef = function () {
          var t = this.parseRawNumber();
          this.skipWhitespaceAndComments();
          var e = this.bytes.offset();
          if (uh[this.bytes.peek()]) {
            var n = this.parseRawNumber();
            if ((this.skipWhitespaceAndComments(), this.bytes.peek() === br.R))
              return this.bytes.assertNext(br.R), Oo.of(t, n);
          }
          return this.bytes.moveTo(e), fo.of(t);
        }),
        (e.prototype.parseHexString = function () {
          var t = "";
          for (
            this.bytes.assertNext(br.LessThan);
            !this.bytes.done() && this.bytes.peek() !== br.GreaterThan;

          )
            t += b(this.bytes.next());
          return this.bytes.assertNext(br.GreaterThan), Yo.of(t);
        }),
        (e.prototype.parseString = function () {
          for (var t = 0, e = !1, n = ""; !this.bytes.done(); ) {
            var r = this.bytes.next();
            if (
              ((n += b(r)),
              e ||
                (r === br.LeftParen && (t += 1),
                r === br.RightParen && (t -= 1)),
              r === br.BackSlash ? (e = !e) : e && (e = !1),
              0 === t)
            )
              return na.of(n.substring(1, n.length - 1));
          }
          throw new gr(this.bytes.position());
        }),
        (e.prototype.parseName = function () {
          this.bytes.assertNext(br.ForwardSlash);
          for (var t = ""; !this.bytes.done(); ) {
            var e = this.bytes.peek();
            if (wo[e] || bo[e]) break;
            (t += b(e)), this.bytes.next();
          }
          return Ao.of(t);
        }),
        (e.prototype.parseArray = function () {
          this.bytes.assertNext(br.LeftSquareBracket),
            this.skipWhitespaceAndComments();
          for (
            var t = po.withContext(this.context);
            this.bytes.peek() !== br.RightSquareBracket;

          ) {
            var e = this.parseObject();
            t.push(e), this.skipWhitespaceAndComments();
          }
          return this.bytes.assertNext(br.RightSquareBracket), t;
        }),
        (e.prototype.parseDict = function () {
          this.bytes.assertNext(br.LessThan),
            this.bytes.assertNext(br.LessThan),
            this.skipWhitespaceAndComments();
          for (
            var t = new Map();
            !this.bytes.done() &&
            this.bytes.peek() !== br.GreaterThan &&
            this.bytes.peekAhead(1) !== br.GreaterThan;

          ) {
            var e = this.parseName(),
              n = this.parseObject();
            t.set(e, n), this.skipWhitespaceAndComments();
          }
          this.skipWhitespaceAndComments(),
            this.bytes.assertNext(br.GreaterThan),
            this.bytes.assertNext(br.GreaterThan);
          var r = t.get(Ao.of("Type"));
          return r === Ao.of("Catalog")
            ? lh.fromMapWithContext(t, this.context)
            : r === Ao.of("Pages")
            ? hh.fromMapWithContext(t, this.context)
            : r === Ao.of("Page")
            ? Uo.fromMapWithContext(t, this.context)
            : mo.fromMapWithContext(t, this.context);
        }),
        (e.prototype.parseDictOrStream = function () {
          var t = this.bytes.position(),
            e = this.parseDict();
          if (
            (this.skipWhitespaceAndComments(),
            !(
              this.matchKeyword(Sh.streamEOF1) ||
              this.matchKeyword(Sh.streamEOF2) ||
              this.matchKeyword(Sh.streamEOF3) ||
              this.matchKeyword(Sh.streamEOF4) ||
              this.matchKeyword(Sh.stream)
            ))
          )
            return e;
          var n,
            r = this.bytes.offset(),
            i = e.get(Ao.of("Length"));
          i instanceof fo
            ? ((n = r + i.asNumber()),
              this.bytes.moveTo(n),
              this.skipWhitespaceAndComments(),
              this.matchKeyword(Sh.endstream) ||
                (this.bytes.moveTo(r), (n = this.findEndOfStreamFallback(t))))
            : (n = this.findEndOfStreamFallback(t));
          var o = this.bytes.slice(r, n);
          return Po.of(e, o);
        }),
        (e.prototype.findEndOfStreamFallback = function (t) {
          for (
            var e = 1, n = this.bytes.offset();
            !this.bytes.done() &&
            ((n = this.bytes.offset()),
            this.matchKeyword(Sh.stream)
              ? (e += 1)
              : this.matchKeyword(Sh.EOF1endstream) ||
                this.matchKeyword(Sh.EOF2endstream) ||
                this.matchKeyword(Sh.EOF3endstream) ||
                this.matchKeyword(Sh.endstream)
              ? (e -= 1)
              : this.bytes.next(),
            0 !== e);

          );
          if (0 !== e) throw new pr(t);
          return n;
        }),
        (e.forBytes = function (t, n, r) {
          return new e(mh.of(t), n, r);
        }),
        (e.forByteStream = function (t, n, r) {
          return void 0 === r && (r = !1), new e(t, n, r);
        }),
        e
      );
    })(yh),
    Ah = (function (t) {
      function e(e, n) {
        var r = t.call(this, mh.fromPDFRawStream(e), e.dict.context) || this,
          i = e.dict;
        return (
          (r.alreadyParsed = !1),
          (r.shouldWaitForTick =
            n ||
            function () {
              return !1;
            }),
          (r.firstOffset = i.lookup(Ao.of("First"), fo).asNumber()),
          (r.objectCount = i.lookup(Ao.of("N"), fo).asNumber()),
          r
        );
      }
      return (
        n(e, t),
        (e.prototype.parseIntoContext = function () {
          return i(this, void 0, void 0, function () {
            var t, e, n, r, i, a, s, l;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  if (this.alreadyParsed)
                    throw new Zn("PDFObjectStreamParser", "parseIntoContext");
                  (this.alreadyParsed = !0),
                    (t = this.parseOffsetsAndObjectNumbers()),
                    (e = 0),
                    (n = t.length),
                    (o.label = 1);
                case 1:
                  return e < n
                    ? ((r = t[e]),
                      (i = r.objectNumber),
                      (a = r.offset),
                      this.bytes.moveTo(this.firstOffset + a),
                      (s = this.parseObject()),
                      (l = Oo.of(i, 0)),
                      this.context.assign(l, s),
                      this.shouldWaitForTick() ? [4, Z()] : [3, 3])
                    : [3, 4];
                case 2:
                  o.sent(), (o.label = 3);
                case 3:
                  return e++, [3, 1];
                case 4:
                  return [2];
              }
            });
          });
        }),
        (e.prototype.parseOffsetsAndObjectNumbers = function () {
          for (var t = [], e = 0, n = this.objectCount; e < n; e++) {
            this.skipWhitespaceAndComments();
            var r = this.parseRawInt();
            this.skipWhitespaceAndComments();
            var i = this.parseRawInt();
            t.push({ objectNumber: r, offset: i });
          }
          return t;
        }),
        (e.forStream = function (t, n) {
          return new e(t, n);
        }),
        e
      );
    })(Ch),
    Th = (function () {
      function t(t) {
        (this.alreadyParsed = !1),
          (this.dict = t.dict),
          (this.bytes = mh.fromPDFRawStream(t)),
          (this.context = this.dict.context);
        var e = this.dict.lookup(Ao.of("Size"), fo),
          n = this.dict.lookup(Ao.of("Index"));
        if (n instanceof po) {
          this.subsections = [];
          for (var r = 0, i = n.size(); r < i; r += 2) {
            var o = n.lookup(r + 0, fo).asNumber(),
              a = n.lookup(r + 1, fo).asNumber();
            this.subsections.push({ firstObjectNumber: o, length: a });
          }
        } else
          this.subsections = [{ firstObjectNumber: 0, length: e.asNumber() }];
        var s = this.dict.lookup(Ao.of("W"), po);
        this.byteWidths = [-1, -1, -1];
        for (r = 0, i = s.size(); r < i; r++)
          this.byteWidths[r] = s.lookup(r, fo).asNumber();
      }
      return (
        (t.prototype.parseIntoContext = function () {
          if (this.alreadyParsed)
            throw new Zn("PDFXRefStreamParser", "parseIntoContext");
          return (
            (this.alreadyParsed = !0),
            (this.context.trailerInfo = {
              Root: this.dict.get(Ao.of("Root")),
              Encrypt: this.dict.get(Ao.of("Encrypt")),
              Info: this.dict.get(Ao.of("Info")),
              ID: this.dict.get(Ao.of("ID")),
            }),
            this.parseEntries()
          );
        }),
        (t.prototype.parseEntries = function () {
          for (
            var t = [],
              e = this.byteWidths,
              n = e[0],
              r = e[1],
              i = e[2],
              o = 0,
              a = this.subsections.length;
            o < a;
            o++
          )
            for (
              var s = this.subsections[o],
                l = s.firstObjectNumber,
                h = s.length,
                u = 0;
              u < h;
              u++
            ) {
              for (var c = 0, d = 0, f = n; d < f; d++)
                c = (c << 8) | this.bytes.next();
              var p = 0;
              for (d = 0, f = r; d < f; d++) p = (p << 8) | this.bytes.next();
              var g = 0;
              for (d = 0, f = i; d < f; d++) g = (g << 8) | this.bytes.next();
              0 === n && (c = 1);
              var v = l + u,
                y = {
                  ref: Oo.of(v, g),
                  offset: p,
                  deleted: 0 === c,
                  inObjectStream: 2 === c,
                };
              t.push(y);
            }
          return t;
        }),
        (t.forStream = function (e) {
          return new t(e);
        }),
        t
      );
    })(),
    Ph = (function (t) {
      function e(e, n, r, i) {
        void 0 === n && (n = 1 / 0),
          void 0 === r && (r = !1),
          void 0 === i && (i = !1);
        var o = t.call(this, mh.of(e), Io.create(), i) || this;
        return (
          (o.alreadyParsed = !1),
          (o.parsedObjects = 0),
          (o.shouldWaitForTick = function () {
            return (
              (o.parsedObjects += 1), o.parsedObjects % o.objectsPerTick == 0
            );
          }),
          (o.objectsPerTick = n),
          (o.throwOnInvalidObject = r),
          o
        );
      }
      return (
        n(e, t),
        (e.prototype.parseDocument = function () {
          return i(this, void 0, void 0, function () {
            var t, e;
            return o(this, function (n) {
              switch (n.label) {
                case 0:
                  if (this.alreadyParsed)
                    throw new Zn("PDFParser", "parseDocument");
                  (this.alreadyParsed = !0),
                    (this.context.header = this.parseHeader()),
                    (n.label = 1);
                case 1:
                  return this.bytes.done()
                    ? [3, 3]
                    : [4, this.parseDocumentSection()];
                case 2:
                  if ((n.sent(), (e = this.bytes.offset()) === t))
                    throw new vr(this.bytes.position());
                  return (t = e), [3, 1];
                case 3:
                  return (
                    this.maybeRecoverRoot(),
                    this.context.lookup(Oo.of(0)) &&
                      (console.warn("Removing parsed object: 0 0 R"),
                      this.context.delete(Oo.of(0))),
                    [2, this.context]
                  );
              }
            });
          });
        }),
        (e.prototype.maybeRecoverRoot = function () {
          var t = function (t) {
            return (
              t instanceof mo && t.lookup(Ao.of("Type")) === Ao.of("Catalog")
            );
          };
          if (!t(this.context.lookup(this.context.trailerInfo.Root)))
            for (
              var e = this.context.enumerateIndirectObjects(),
                n = 0,
                r = e.length;
              n < r;
              n++
            ) {
              var i = e[n],
                o = i[0];
              t(i[1]) && (this.context.trailerInfo.Root = o);
            }
        }),
        (e.prototype.parseHeader = function () {
          for (; !this.bytes.done(); ) {
            if (this.matchKeyword(Sh.header)) {
              var t = this.parseRawInt();
              this.bytes.assertNext(br.Period);
              var e = this.parseRawInt(),
                n = uo.forVersion(t, e);
              return this.skipBinaryHeaderComment(), n;
            }
            this.bytes.next();
          }
          throw new yr(this.bytes.position());
        }),
        (e.prototype.parseIndirectObjectHeader = function () {
          this.skipWhitespaceAndComments();
          var t = this.parseRawInt();
          this.skipWhitespaceAndComments();
          var e = this.parseRawInt();
          if ((this.skipWhitespaceAndComments(), !this.matchKeyword(Sh.obj)))
            throw new mr(this.bytes.position(), Sh.obj);
          return Oo.of(t, e);
        }),
        (e.prototype.matchIndirectObjectHeader = function () {
          var t = this.bytes.offset();
          try {
            return this.parseIndirectObjectHeader(), !0;
          } catch (e) {
            return this.bytes.moveTo(t), !1;
          }
        }),
        (e.prototype.parseIndirectObject = function () {
          return i(this, void 0, void 0, function () {
            var t, e;
            return o(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    (t = this.parseIndirectObjectHeader()),
                    this.skipWhitespaceAndComments(),
                    (e = this.parseObject()),
                    this.skipWhitespaceAndComments(),
                    this.matchKeyword(Sh.endobj),
                    e instanceof Po &&
                    e.dict.lookup(Ao.of("Type")) === Ao.of("ObjStm")
                      ? [
                          4,
                          Ah.forStream(
                            e,
                            this.shouldWaitForTick
                          ).parseIntoContext(),
                        ]
                      : [3, 2]
                  );
                case 1:
                  return n.sent(), [3, 3];
                case 2:
                  e instanceof Po &&
                  e.dict.lookup(Ao.of("Type")) === Ao.of("XRef")
                    ? Th.forStream(e).parseIntoContext()
                    : this.context.assign(t, e),
                    (n.label = 3);
                case 3:
                  return [2, t];
              }
            });
          });
        }),
        (e.prototype.tryToParseInvalidIndirectObject = function () {
          var t = this.bytes.position(),
            e = "Trying to parse invalid object: " + JSON.stringify(t) + ")";
          if (this.throwOnInvalidObject) throw new Error(e);
          console.warn(e);
          var n = this.parseIndirectObjectHeader();
          console.warn("Invalid object ref: " + n),
            this.skipWhitespaceAndComments();
          for (
            var r = this.bytes.offset(), i = !0;
            !this.bytes.done() && (this.matchKeyword(Sh.endobj) && (i = !1), i);

          )
            this.bytes.next();
          if (i) throw new fr(t);
          var o = this.bytes.offset() - Sh.endobj.length,
            a = Ho.of(this.bytes.slice(r, o));
          return this.context.assign(n, a), n;
        }),
        (e.prototype.parseIndirectObjects = function () {
          return i(this, void 0, void 0, function () {
            var t;
            return o(this, function (e) {
              switch (e.label) {
                case 0:
                  this.skipWhitespaceAndComments(), (e.label = 1);
                case 1:
                  if (this.bytes.done() || !uh[this.bytes.peek()])
                    return [3, 8];
                  (t = this.bytes.offset()), (e.label = 2);
                case 2:
                  return (
                    e.trys.push([2, 4, , 5]), [4, this.parseIndirectObject()]
                  );
                case 3:
                  return e.sent(), [3, 5];
                case 4:
                  return (
                    e.sent(),
                    this.bytes.moveTo(t),
                    this.tryToParseInvalidIndirectObject(),
                    [3, 5]
                  );
                case 5:
                  return (
                    this.skipWhitespaceAndComments(),
                    this.skipJibberish(),
                    this.shouldWaitForTick() ? [4, Z()] : [3, 7]
                  );
                case 6:
                  e.sent(), (e.label = 7);
                case 7:
                  return [3, 1];
                case 8:
                  return [2];
              }
            });
          });
        }),
        (e.prototype.maybeParseCrossRefSection = function () {
          if ((this.skipWhitespaceAndComments(), this.matchKeyword(Sh.xref))) {
            this.skipWhitespaceAndComments();
            for (
              var t = -1, e = Wo.createEmpty();
              !this.bytes.done() && uh[this.bytes.peek()];

            ) {
              var n = this.parseRawInt();
              this.skipWhitespaceAndComments();
              var r = this.parseRawInt();
              this.skipWhitespaceAndComments();
              var i = this.bytes.peek();
              if (i === br.n || i === br.f) {
                var o = Oo.of(t, r);
                this.bytes.next() === br.n
                  ? e.addEntry(o, n)
                  : e.addDeletedEntry(o, n),
                  (t += 1);
              } else t = n;
              this.skipWhitespaceAndComments();
            }
            return e;
          }
        }),
        (e.prototype.maybeParseTrailerDict = function () {
          if (
            (this.skipWhitespaceAndComments(), this.matchKeyword(Sh.trailer))
          ) {
            this.skipWhitespaceAndComments();
            var t = this.parseDict(),
              e = this.context;
            e.trailerInfo = {
              Root: t.get(Ao.of("Root")) || e.trailerInfo.Root,
              Encrypt: t.get(Ao.of("Encrypt")) || e.trailerInfo.Encrypt,
              Info: t.get(Ao.of("Info")) || e.trailerInfo.Info,
              ID: t.get(Ao.of("ID")) || e.trailerInfo.ID,
            };
          }
        }),
        (e.prototype.maybeParseTrailer = function () {
          if (
            (this.skipWhitespaceAndComments(), this.matchKeyword(Sh.startxref))
          ) {
            this.skipWhitespaceAndComments();
            var t = this.parseRawInt();
            return (
              this.skipWhitespace(),
              this.matchKeyword(Sh.eof),
              this.skipWhitespaceAndComments(),
              this.matchKeyword(Sh.eof),
              this.skipWhitespaceAndComments(),
              qo.forLastCrossRefSectionOffset(t)
            );
          }
        }),
        (e.prototype.parseDocumentSection = function () {
          return i(this, void 0, void 0, function () {
            return o(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, this.parseIndirectObjects()];
                case 1:
                  return (
                    t.sent(),
                    this.maybeParseCrossRefSection(),
                    this.maybeParseTrailerDict(),
                    this.maybeParseTrailer(),
                    this.skipJibberish(),
                    [2]
                  );
              }
            });
          });
        }),
        (e.prototype.skipJibberish = function () {
          for (this.skipWhitespaceAndComments(); !this.bytes.done(); ) {
            var t = this.bytes.offset(),
              e = this.bytes.peek();
            if (
              e >= br.Space &&
              e <= br.Tilde &&
              (this.matchKeyword(Sh.xref) ||
                this.matchKeyword(Sh.trailer) ||
                this.matchKeyword(Sh.startxref) ||
                this.matchIndirectObjectHeader())
            ) {
              this.bytes.moveTo(t);
              break;
            }
            this.bytes.next();
          }
        }),
        (e.prototype.skipBinaryHeaderComment = function () {
          this.skipWhitespaceAndComments();
          try {
            var t = this.bytes.offset();
            this.parseIndirectObjectHeader(), this.bytes.moveTo(t);
          } catch (t) {
            this.bytes.next(), this.skipWhitespaceAndComments();
          }
        }),
        (e.forBytesWithOptions = function (t, n, r, i) {
          return new e(t, n, r, i);
        }),
        e
      );
    })(Ch),
    zh = function (t) {
      return 1 << t;
    };
  ((ph = t.AnnotationFlags || (t.AnnotationFlags = {}))[
    (ph.Invisible = zh(0))
  ] = "Invisible"),
    (ph[(ph.Hidden = zh(1))] = "Hidden"),
    (ph[(ph.Print = zh(2))] = "Print"),
    (ph[(ph.NoZoom = zh(3))] = "NoZoom"),
    (ph[(ph.NoRotate = zh(4))] = "NoRotate"),
    (ph[(ph.NoView = zh(5))] = "NoView"),
    (ph[(ph.ReadOnly = zh(6))] = "ReadOnly"),
    (ph[(ph.Locked = zh(7))] = "Locked"),
    (ph[(ph.ToggleNoView = zh(8))] = "ToggleNoView"),
    (ph[(ph.LockedContents = zh(9))] = "LockedContents");
  var Rh,
    Oh = function (t) {
      return t instanceof Ao ? t : Ao.of(t);
    },
    Dh = function (t) {
      return t instanceof fo ? t : fo.of(t);
    },
    Bh = function (t) {
      return t instanceof fo ? t.asNumber() : t;
    };
  ((Rh = t.RotationTypes || (t.RotationTypes = {})).Degrees = "degrees"),
    (Rh.Radians = "radians");
  var Nh,
    Eh = function (e) {
      return (
        Dn(e, "degreeAngle", ["number"]),
        { type: t.RotationTypes.Degrees, angle: e }
      );
    },
    jh = t.RotationTypes.Radians,
    Mh = t.RotationTypes.Degrees,
    Ih = function (t) {
      return (t * Math.PI) / 180;
    },
    Uh = function (t) {
      return (180 * t) / Math.PI;
    },
    Vh = function (t) {
      return t.type === jh
        ? t.angle
        : t.type === Mh
        ? Ih(t.angle)
        : ft("Invalid rotation: " + JSON.stringify(t));
    },
    Wh = function (t) {
      return t.type === jh
        ? Uh(t.angle)
        : t.type === Mh
        ? t.angle
        : ft("Invalid rotation: " + JSON.stringify(t));
    },
    qh = function (t) {
      void 0 === t && (t = 0);
      var e = (t / 90) % 4;
      return 0 === e ? 0 : 1 === e ? 90 : 2 === e ? 180 : 3 === e ? 270 : 0;
    },
    Lh = function (t, e) {
      void 0 === e && (e = 0);
      var n = qh(e);
      return 90 === n || 270 === n
        ? { width: t.height, height: t.width }
        : { width: t.width, height: t.height };
    },
    Kh = function (t, e, n) {
      void 0 === e && (e = 0), void 0 === n && (n = 0);
      var r = t.x,
        i = t.y,
        o = t.width,
        a = t.height,
        s = qh(n),
        l = e / 2;
      return 0 === s
        ? { x: r - l, y: i - l, width: o, height: a }
        : 90 === s
        ? { x: r - a + l, y: i - l, width: a, height: o }
        : 180 === s
        ? { x: r - o + l, y: i - a + l, width: o, height: a }
        : 270 === s
        ? { x: r - l, y: i - o + l, width: a, height: o }
        : { x: r - l, y: i - l, width: o, height: a };
    },
    Gh = function () {
      return Do.of(No.ClipNonZero);
    },
    Hh = Math.cos,
    _h = Math.sin,
    Xh = Math.tan,
    Zh = function (t, e, n, r, i, o) {
      return Do.of(No.ConcatTransformationMatrix, [
        Dh(t),
        Dh(e),
        Dh(n),
        Dh(r),
        Dh(i),
        Dh(o),
      ]);
    },
    Yh = function (t, e) {
      return Zh(1, 0, 0, 1, t, e);
    },
    Jh = function (t, e) {
      return Zh(t, 0, 0, e, 0, 0);
    },
    Qh = function (t) {
      return Zh(Hh(Bh(t)), _h(Bh(t)), -_h(Bh(t)), Hh(Bh(t)), 0, 0);
    },
    $h = function (t) {
      return Qh(Ih(Bh(t)));
    },
    tu = function (t, e) {
      return Zh(1, Xh(Bh(t)), Xh(Bh(e)), 1, 0, 0);
    },
    eu = function (t, e) {
      return Do.of(No.SetLineDashPattern, [
        "[" + t.map(Dh).join(" ") + "]",
        Dh(e),
      ]);
    };
  ((Nh = t.LineCapStyle || (t.LineCapStyle = {}))[(Nh.Butt = 0)] = "Butt"),
    (Nh[(Nh.Round = 1)] = "Round"),
    (Nh[(Nh.Projecting = 2)] = "Projecting");
  var nu,
    ru = function (t) {
      return Do.of(No.SetLineCapStyle, [Dh(t)]);
    };
  ((nu = t.LineJoinStyle || (t.LineJoinStyle = {}))[(nu.Miter = 0)] = "Miter"),
    (nu[(nu.Round = 1)] = "Round"),
    (nu[(nu.Bevel = 2)] = "Bevel");
  var iu,
    ou = function (t) {
      return Do.of(No.SetGraphicsStateParams, [Oh(t)]);
    },
    au = function () {
      return Do.of(No.PushGraphicsState);
    },
    su = function () {
      return Do.of(No.PopGraphicsState);
    },
    lu = function (t) {
      return Do.of(No.SetLineWidth, [Dh(t)]);
    },
    hu = function (t, e, n, r, i, o) {
      return Do.of(No.AppendBezierCurve, [
        Dh(t),
        Dh(e),
        Dh(n),
        Dh(r),
        Dh(i),
        Dh(o),
      ]);
    },
    uu = function (t, e, n, r) {
      return Do.of(No.CurveToReplicateInitialPoint, [
        Dh(t),
        Dh(e),
        Dh(n),
        Dh(r),
      ]);
    },
    cu = function () {
      return Do.of(No.ClosePath);
    },
    du = function (t, e) {
      return Do.of(No.MoveTo, [Dh(t), Dh(e)]);
    },
    fu = function (t, e) {
      return Do.of(No.LineTo, [Dh(t), Dh(e)]);
    },
    pu = function (t, e, n, r) {
      return Do.of(No.AppendRectangle, [Dh(t), Dh(e), Dh(n), Dh(r)]);
    },
    gu = function () {
      return Do.of(No.StrokePath);
    },
    vu = function () {
      return Do.of(No.FillNonZero);
    },
    yu = function () {
      return Do.of(No.FillNonZeroAndStroke);
    },
    mu = function () {
      return Do.of(No.EndPath);
    },
    bu = function () {
      return Do.of(No.NextLine);
    },
    wu = function (t) {
      return Do.of(No.ShowText, [t]);
    },
    xu = function () {
      return Do.of(No.BeginText);
    },
    ku = function () {
      return Do.of(No.EndText);
    },
    Fu = function (t, e) {
      return Do.of(No.SetFontAndSize, [Oh(t), Dh(e)]);
    },
    Su = function (t) {
      return Do.of(No.SetTextLineHeight, [Dh(t)]);
    };
  ((iu = t.TextRenderingMode || (t.TextRenderingMode = {}))[(iu.Fill = 0)] =
    "Fill"),
    (iu[(iu.Outline = 1)] = "Outline"),
    (iu[(iu.FillAndOutline = 2)] = "FillAndOutline"),
    (iu[(iu.Invisible = 3)] = "Invisible"),
    (iu[(iu.FillAndClip = 4)] = "FillAndClip"),
    (iu[(iu.OutlineAndClip = 5)] = "OutlineAndClip"),
    (iu[(iu.FillAndOutlineAndClip = 6)] = "FillAndOutlineAndClip"),
    (iu[(iu.Clip = 7)] = "Clip");
  var Cu,
    Au = function (t, e, n, r, i, o) {
      return Do.of(No.SetTextMatrix, [
        Dh(t),
        Dh(e),
        Dh(n),
        Dh(r),
        Dh(i),
        Dh(o),
      ]);
    },
    Tu = function (t, e, n, r, i) {
      return Au(
        Hh(Bh(t)),
        _h(Bh(t)) + Xh(Bh(e)),
        -_h(Bh(t)) + Xh(Bh(n)),
        Hh(Bh(t)),
        r,
        i
      );
    },
    Pu = function (t) {
      return Do.of(No.DrawObject, [Oh(t)]);
    },
    zu = function (t) {
      return Do.of(No.NonStrokingColorGray, [Dh(t)]);
    },
    Ru = function (t) {
      return Do.of(No.StrokingColorGray, [Dh(t)]);
    },
    Ou = function (t, e, n) {
      return Do.of(No.NonStrokingColorRgb, [Dh(t), Dh(e), Dh(n)]);
    },
    Du = function (t, e, n) {
      return Do.of(No.StrokingColorRgb, [Dh(t), Dh(e), Dh(n)]);
    },
    Bu = function (t, e, n, r) {
      return Do.of(No.NonStrokingColorCmyk, [Dh(t), Dh(e), Dh(n), Dh(r)]);
    },
    Nu = function (t, e, n, r) {
      return Do.of(No.StrokingColorCmyk, [Dh(t), Dh(e), Dh(n), Dh(r)]);
    },
    Eu = function (t) {
      return Do.of(No.BeginMarkedContent, [Oh(t)]);
    },
    ju = function () {
      return Do.of(No.EndMarkedContent);
    };
  ((Cu = t.ColorTypes || (t.ColorTypes = {})).Grayscale = "Grayscale"),
    (Cu.RGB = "RGB"),
    (Cu.CMYK = "CMYK");
  var Mu,
    Iu = function (e) {
      return En(e, "gray", 0, 1), { type: t.ColorTypes.Grayscale, gray: e };
    },
    Uu = function (e, n, r) {
      return (
        En(e, "red", 0, 1),
        En(n, "green", 0, 1),
        En(r, "blue", 0, 1),
        { type: t.ColorTypes.RGB, red: e, green: n, blue: r }
      );
    },
    Vu = function (e, n, r, i) {
      return (
        En(e, "cyan", 0, 1),
        En(n, "magenta", 0, 1),
        En(r, "yellow", 0, 1),
        En(i, "key", 0, 1),
        { type: t.ColorTypes.CMYK, cyan: e, magenta: n, yellow: r, key: i }
      );
    },
    Wu = t.ColorTypes.Grayscale,
    qu = t.ColorTypes.RGB,
    Lu = t.ColorTypes.CMYK,
    Ku = function (t) {
      return t.type === Wu
        ? zu(t.gray)
        : t.type === qu
        ? Ou(t.red, t.green, t.blue)
        : t.type === Lu
        ? Bu(t.cyan, t.magenta, t.yellow, t.key)
        : ft("Invalid color: " + JSON.stringify(t));
    },
    Gu = function (t) {
      return t.type === Wu
        ? Ru(t.gray)
        : t.type === qu
        ? Du(t.red, t.green, t.blue)
        : t.type === Lu
        ? Nu(t.cyan, t.magenta, t.yellow, t.key)
        : ft("Invalid color: " + JSON.stringify(t));
    },
    Hu = function (t, e) {
      return (
        void 0 === e && (e = 1),
        1 === (null == t ? void 0 : t.length)
          ? Iu(t[0] * e)
          : 3 === (null == t ? void 0 : t.length)
          ? Uu(t[0] * e, t[1] * e, t[2] * e)
          : 4 === (null == t ? void 0 : t.length)
          ? Vu(t[0] * e, t[1] * e, t[2] * e, t[3] * e)
          : void 0
      );
    },
    _u = function (t) {
      return t.type === Wu
        ? [t.gray]
        : t.type === qu
        ? [t.red, t.green, t.blue]
        : t.type === Lu
        ? [t.cyan, t.magenta, t.yellow, t.key]
        : ft("Invalid color: " + JSON.stringify(t));
    },
    Xu = 0,
    Zu = 0,
    Yu = 0,
    Ju = 0,
    Qu = 0,
    $u = 0,
    tc = new Map([
      ["A", 7],
      ["a", 7],
      ["C", 6],
      ["c", 6],
      ["H", 1],
      ["h", 1],
      ["L", 2],
      ["l", 2],
      ["M", 2],
      ["m", 2],
      ["Q", 4],
      ["q", 4],
      ["S", 4],
      ["s", 4],
      ["T", 2],
      ["t", 2],
      ["V", 1],
      ["v", 1],
      ["Z", 0],
      ["z", 0],
    ]),
    ec = {
      M: function (t) {
        return (
          (Xu = t[0]),
          (Zu = t[1]),
          (Yu = Ju = null),
          (Qu = Xu),
          ($u = Zu),
          du(Xu, Zu)
        );
      },
      m: function (t) {
        return (
          (Xu += t[0]),
          (Zu += t[1]),
          (Yu = Ju = null),
          (Qu = Xu),
          ($u = Zu),
          du(Xu, Zu)
        );
      },
      C: function (t) {
        return (
          (Xu = t[4]),
          (Zu = t[5]),
          (Yu = t[2]),
          (Ju = t[3]),
          hu(t[0], t[1], t[2], t[3], t[4], t[5])
        );
      },
      c: function (t) {
        var e = hu(
          t[0] + Xu,
          t[1] + Zu,
          t[2] + Xu,
          t[3] + Zu,
          t[4] + Xu,
          t[5] + Zu
        );
        return (
          (Yu = Xu + t[2]), (Ju = Zu + t[3]), (Xu += t[4]), (Zu += t[5]), e
        );
      },
      S: function (t) {
        (null !== Yu && null !== Ju) || ((Yu = Xu), (Ju = Zu));
        var e = hu(Xu - (Yu - Xu), Zu - (Ju - Zu), t[0], t[1], t[2], t[3]);
        return (Yu = t[0]), (Ju = t[1]), (Xu = t[2]), (Zu = t[3]), e;
      },
      s: function (t) {
        (null !== Yu && null !== Ju) || ((Yu = Xu), (Ju = Zu));
        var e = hu(
          Xu - (Yu - Xu),
          Zu - (Ju - Zu),
          Xu + t[0],
          Zu + t[1],
          Xu + t[2],
          Zu + t[3]
        );
        return (
          (Yu = Xu + t[0]), (Ju = Zu + t[1]), (Xu += t[2]), (Zu += t[3]), e
        );
      },
      Q: function (t) {
        return (
          (Yu = t[0]),
          (Ju = t[1]),
          (Xu = t[2]),
          (Zu = t[3]),
          uu(t[0], t[1], Xu, Zu)
        );
      },
      q: function (t) {
        var e = uu(t[0] + Xu, t[1] + Zu, t[2] + Xu, t[3] + Zu);
        return (
          (Yu = Xu + t[0]), (Ju = Zu + t[1]), (Xu += t[2]), (Zu += t[3]), e
        );
      },
      T: function (t) {
        null === Yu || null === Ju
          ? ((Yu = Xu), (Ju = Zu))
          : ((Yu = Xu - (Yu - Xu)), (Ju = Zu - (Ju - Zu)));
        var e = uu(Yu, Ju, t[0], t[1]);
        return (
          (Yu = Xu - (Yu - Xu)),
          (Ju = Zu - (Ju - Zu)),
          (Xu = t[0]),
          (Zu = t[1]),
          e
        );
      },
      t: function (t) {
        null === Yu || null === Ju
          ? ((Yu = Xu), (Ju = Zu))
          : ((Yu = Xu - (Yu - Xu)), (Ju = Zu - (Ju - Zu)));
        var e = uu(Yu, Ju, Xu + t[0], Zu + t[1]);
        return (Xu += t[0]), (Zu += t[1]), e;
      },
      A: function (t) {
        var e = nc(Xu, Zu, t);
        return (Xu = t[5]), (Zu = t[6]), e;
      },
      a: function (t) {
        (t[5] += Xu), (t[6] += Zu);
        var e = nc(Xu, Zu, t);
        return (Xu = t[5]), (Zu = t[6]), e;
      },
      L: function (t) {
        return (Xu = t[0]), (Zu = t[1]), (Yu = Ju = null), fu(Xu, Zu);
      },
      l: function (t) {
        return (Xu += t[0]), (Zu += t[1]), (Yu = Ju = null), fu(Xu, Zu);
      },
      H: function (t) {
        return (Xu = t[0]), (Yu = Ju = null), fu(Xu, Zu);
      },
      h: function (t) {
        return (Xu += t[0]), (Yu = Ju = null), fu(Xu, Zu);
      },
      V: function (t) {
        return (Zu = t[0]), (Yu = Ju = null), fu(Xu, Zu);
      },
      v: function (t) {
        return (Zu += t[0]), (Yu = Ju = null), fu(Xu, Zu);
      },
      Z: function () {
        var t = cu();
        return (Xu = Qu), (Zu = $u), t;
      },
      z: function () {
        var t = cu();
        return (Xu = Qu), (Zu = $u), t;
      },
    },
    nc = function (t, e, n) {
      for (
        var r = n[0],
          i = n[1],
          o = n[2],
          a = n[3],
          s = n[4],
          l = n[5],
          h = n[6],
          u = [],
          c = 0,
          d = rc(l, h, r, i, a, s, o, t, e);
        c < d.length;
        c++
      ) {
        var f = d[c],
          p = ic.apply(void 0, f);
        u.push(hu.apply(void 0, p));
      }
      return u;
    },
    rc = function (t, e, n, r, i, o, a, s, l) {
      var h = a * (Math.PI / 180),
        u = Math.sin(h),
        c = Math.cos(h);
      (n = Math.abs(n)), (r = Math.abs(r));
      var d =
        ((Yu = c * (s - t) * 0.5 + u * (l - e) * 0.5) * Yu) / (n * n) +
        ((Ju = c * (l - e) * 0.5 - u * (s - t) * 0.5) * Ju) / (r * r);
      d > 1 && ((n *= d = Math.sqrt(d)), (r *= d));
      var f = c / n,
        p = u / n,
        g = -u / r,
        v = c / r,
        y = f * s + p * l,
        m = g * s + v * l,
        b = f * t + p * e,
        w = g * t + v * e,
        x = 1 / ((b - y) * (b - y) + (w - m) * (w - m)) - 0.25;
      x < 0 && (x = 0);
      var k = Math.sqrt(x);
      o === i && (k = -k);
      var F = 0.5 * (y + b) - k * (w - m),
        S = 0.5 * (m + w) + k * (b - y),
        C = Math.atan2(m - S, y - F),
        A = Math.atan2(w - S, b - F) - C;
      A < 0 && 1 === o
        ? (A += 2 * Math.PI)
        : A > 0 && 0 === o && (A -= 2 * Math.PI);
      for (
        var T = Math.ceil(Math.abs(A / (0.5 * Math.PI + 0.001))), P = [], z = 0;
        z < T;
        z++
      ) {
        var R = C + (z * A) / T,
          O = C + ((z + 1) * A) / T;
        P[z] = [F, S, R, O, n, r, u, c];
      }
      return P;
    },
    ic = function (t, e, n, r, i, o, a, s) {
      var l = s * i,
        h = -a * o,
        u = a * i,
        c = s * o,
        d = 0.5 * (r - n),
        f = ((8 / 3) * Math.sin(0.5 * d) * Math.sin(0.5 * d)) / Math.sin(d),
        p = t + Math.cos(n) - f * Math.sin(n),
        g = e + Math.sin(n) + f * Math.cos(n),
        v = t + Math.cos(r),
        y = e + Math.sin(r),
        m = v + f * Math.sin(r),
        b = y - f * Math.cos(r);
      return [
        l * p + h * g,
        u * p + c * g,
        l * m + h * b,
        u * m + c * b,
        l * v + h * y,
        u * v + c * y,
      ];
    },
    oc = function (t) {
      return (function (t) {
        Xu = Zu = Yu = Ju = Qu = $u = 0;
        for (var e = [], n = 0; n < t.length; n++) {
          var r = t[n];
          if (r.cmd && "function" == typeof ec[r.cmd]) {
            var i = ec[r.cmd](r.args);
            Array.isArray(i) ? (e = e.concat(i)) : e.push(i);
          }
        }
        return e;
      })(
        (function (t) {
          for (
            var e, n = [], r = [], i = "", o = !1, a = 0, s = 0, l = t;
            s < l.length;
            s++
          ) {
            var h = l[s];
            if (tc.has(h))
              (a = tc.get(h)),
                e &&
                  (i.length > 0 && (r[r.length] = +i),
                  (n[n.length] = { cmd: e, args: r }),
                  (r = []),
                  (i = ""),
                  (o = !1)),
                (e = h);
            else if (
              [" ", ","].includes(h) ||
              ("-" === h && i.length > 0 && "e" !== i[i.length - 1]) ||
              ("." === h && o)
            ) {
              if (0 === i.length) continue;
              r.length === a
                ? ((n[n.length] = { cmd: e, args: r }),
                  (r = [+i]),
                  "M" === e && (e = "L"),
                  "m" === e && (e = "l"))
                : (r[r.length] = +i),
                (o = "." === h),
                (i = ["-", "."].includes(h) ? h : "");
            } else (i += h), "." === h && (o = !0);
          }
          return (
            i.length > 0 &&
              (r.length === a
                ? ((n[n.length] = { cmd: e, args: r }),
                  (r = [+i]),
                  "M" === e && (e = "L"),
                  "m" === e && (e = "l"))
                : (r[r.length] = +i)),
            (n[n.length] = { cmd: e, args: r }),
            n
          );
        })(t)
      );
    },
    ac = function (t, e) {
      for (
        var n = [
            au(),
            e.graphicsState && ou(e.graphicsState),
            xu(),
            Ku(e.color),
            Fu(e.font, e.size),
            Su(e.lineHeight),
            Tu(Vh(e.rotate), Vh(e.xSkew), Vh(e.ySkew), e.x, e.y),
          ].filter(Boolean),
          r = 0,
          i = t.length;
        r < i;
        r++
      )
        n.push(wu(t[r]), bu());
      return n.push(ku(), su()), n;
    },
    sc = function (t, e) {
      return [
        au(),
        e.graphicsState && ou(e.graphicsState),
        Yh(e.x, e.y),
        Qh(Vh(e.rotate)),
        Jh(e.width, e.height),
        tu(Vh(e.xSkew), Vh(e.ySkew)),
        Pu(t),
        su(),
      ].filter(Boolean);
    },
    lc = function (t, e) {
      return [
        au(),
        e.graphicsState && ou(e.graphicsState),
        Yh(e.x, e.y),
        Qh(Vh(e.rotate)),
        Jh(e.xScale, e.yScale),
        tu(Vh(e.xSkew), Vh(e.ySkew)),
        Pu(t),
        su(),
      ].filter(Boolean);
    },
    hc = function (t) {
      var e, n;
      return [
        au(),
        t.graphicsState && ou(t.graphicsState),
        t.color && Gu(t.color),
        lu(t.thickness),
        eu(
          null !== (e = t.dashArray) && void 0 !== e ? e : [],
          null !== (n = t.dashPhase) && void 0 !== n ? n : 0
        ),
        du(t.start.x, t.start.y),
        t.lineCap && ru(t.lineCap),
        du(t.start.x, t.start.y),
        fu(t.end.x, t.end.y),
        gu(),
        su(),
      ].filter(Boolean);
    },
    uc = function (t) {
      var e, n;
      return [
        au(),
        t.graphicsState && ou(t.graphicsState),
        t.color && Ku(t.color),
        t.borderColor && Gu(t.borderColor),
        lu(t.borderWidth),
        t.borderLineCap && ru(t.borderLineCap),
        eu(
          null !== (e = t.borderDashArray) && void 0 !== e ? e : [],
          null !== (n = t.borderDashPhase) && void 0 !== n ? n : 0
        ),
        Yh(t.x, t.y),
        Qh(Vh(t.rotate)),
        tu(Vh(t.xSkew), Vh(t.ySkew)),
        du(0, 0),
        fu(0, t.height),
        fu(t.width, t.height),
        fu(t.width, 0),
        cu(),
        t.color && t.borderWidth
          ? yu()
          : t.color
          ? vu()
          : t.borderColor
          ? gu()
          : cu(),
        su(),
      ].filter(Boolean);
    },
    cc = ((Math.sqrt(2) - 1) / 3) * 4,
    dc = function (t) {
      var e = Bh(t.x),
        n = Bh(t.y),
        r = Bh(t.xScale),
        i = Bh(t.yScale),
        o = r * cc,
        a = i * cc,
        s = (e -= r) + 2 * r,
        l = (n -= i) + 2 * i,
        h = e + r,
        u = n + i;
      return [
        au(),
        du(e, u),
        hu(e, u - a, h - o, n, h, n),
        hu(h + o, n, s, u - a, s, u),
        hu(s, u + a, h + o, l, h, l),
        hu(h - o, l, e, u + a, e, u),
        su(),
      ];
    },
    fc = function (t) {
      var e, n, r, i, o, s, l, h, u, c, d, f, p, g, v, y;
      return a(
        [
          au(),
          t.graphicsState && ou(t.graphicsState),
          t.color && Ku(t.color),
          t.borderColor && Gu(t.borderColor),
          lu(t.borderWidth),
          t.borderLineCap && ru(t.borderLineCap),
          eu(
            null !== (e = t.borderDashArray) && void 0 !== e ? e : [],
            null !== (n = t.borderDashPhase) && void 0 !== n ? n : 0
          ),
        ],
        void 0 === t.rotate
          ? dc({ x: t.x, y: t.y, xScale: t.xScale, yScale: t.yScale })
          : ((i = {
              x: t.x,
              y: t.y,
              xScale: t.xScale,
              yScale: t.yScale,
              rotate: null !== (r = t.rotate) && void 0 !== r ? r : Eh(0),
            }),
            (o = Bh(i.x)),
            (s = Bh(i.y)),
            (l = Bh(i.xScale)),
            (h = Bh(i.yScale)),
            (u = -l),
            (c = -h),
            (d = l * cc),
            (f = h * cc),
            (p = u + 2 * l),
            (g = c + 2 * h),
            (v = u + l),
            (y = c + h),
            [
              Yh(o, s),
              Qh(Vh(i.rotate)),
              du(u, y),
              hu(u, y - f, v - d, c, v, c),
              hu(v + d, c, p, y - f, p, y),
              hu(p, y + f, v + d, g, v, g),
              hu(v - d, g, u, y + f, u, y),
            ]),
        [
          t.color && t.borderWidth
            ? yu()
            : t.color
            ? vu()
            : t.borderColor
            ? gu()
            : cu(),
          su(),
        ]
      ).filter(Boolean);
    },
    pc = function (t, e) {
      var n, r, i;
      return a(
        [
          au(),
          e.graphicsState && ou(e.graphicsState),
          Yh(e.x, e.y),
          Qh(Vh(null !== (n = e.rotate) && void 0 !== n ? n : Eh(0))),
          e.scale ? Jh(e.scale, -e.scale) : Jh(1, -1),
          e.color && Ku(e.color),
          e.borderColor && Gu(e.borderColor),
          e.borderWidth && lu(e.borderWidth),
          e.borderLineCap && ru(e.borderLineCap),
          eu(
            null !== (r = e.borderDashArray) && void 0 !== r ? r : [],
            null !== (i = e.borderDashPhase) && void 0 !== i ? i : 0
          ),
        ],
        oc(t),
        [
          e.color && e.borderWidth
            ? yu()
            : e.color
            ? vu()
            : e.borderColor
            ? gu()
            : cu(),
          su(),
        ]
      ).filter(Boolean);
    },
    gc = function (t) {
      var e = Bh(t.size);
      return [
        au(),
        t.color && Gu(t.color),
        lu(t.thickness),
        Yh(t.x, t.y),
        du(-0.675 * e, (0.3995 / 0.965 - 0.49) * e),
        fu(-0.25 * e, -0.49 * e),
        fu(0.69 * e, 0.475 * e),
        gu(),
        su(),
      ].filter(Boolean);
    },
    vc = function (t) {
      return 0 === t.rotation
        ? [Yh(0, 0), $h(0)]
        : 90 === t.rotation
        ? [Yh(t.width, 0), $h(90)]
        : 180 === t.rotation
        ? [Yh(t.width, t.height), $h(180)]
        : 270 === t.rotation
        ? [Yh(0, t.height), $h(270)]
        : [];
    },
    yc = function (t) {
      var e = uc({
        x: t.x,
        y: t.y,
        width: t.width,
        height: t.height,
        borderWidth: t.borderWidth,
        color: t.color,
        borderColor: t.borderColor,
        rotate: Eh(0),
        xSkew: Eh(0),
        ySkew: Eh(0),
      });
      if (!t.filled) return e;
      var n = Bh(t.width),
        r = Bh(t.height),
        i = Math.min(n, r) / 2,
        o = gc({
          x: n / 2,
          y: r / 2,
          size: i,
          thickness: t.thickness,
          color: t.markColor,
        });
      return a([au()], e, o, [su()]);
    },
    mc = function (t) {
      var e = Bh(t.width),
        n = Bh(t.height),
        r = Math.min(e, n) / 2,
        i = fc({
          x: t.x,
          y: t.y,
          xScale: r,
          yScale: r,
          color: t.color,
          borderColor: t.borderColor,
          borderWidth: t.borderWidth,
        });
      if (!t.filled) return i;
      var o = fc({
        x: t.x,
        y: t.y,
        xScale: 0.45 * r,
        yScale: 0.45 * r,
        color: t.dotColor,
        borderColor: void 0,
        borderWidth: 0,
      });
      return a([au()], i, o, [su()]);
    },
    bc = function (t) {
      var e = Bh(t.x),
        n = Bh(t.y),
        r = Bh(t.width),
        i = Bh(t.height),
        o = uc({
          x: e,
          y: n,
          width: r,
          height: i,
          borderWidth: t.borderWidth,
          color: t.color,
          borderColor: t.borderColor,
          rotate: Eh(0),
          xSkew: Eh(0),
          ySkew: Eh(0),
        }),
        s = wc(t.textLines, {
          color: t.textColor,
          font: t.font,
          size: t.fontSize,
          rotate: Eh(0),
          xSkew: Eh(0),
          ySkew: Eh(0),
        });
      return a([au()], o, s, [su()]);
    },
    wc = function (t, e) {
      for (
        var n = [xu(), Ku(e.color), Fu(e.font, e.size)], r = 0, i = t.length;
        r < i;
        r++
      ) {
        var o = t[r],
          a = o.encoded,
          s = o.x,
          l = o.y;
        n.push(Tu(Vh(e.rotate), Vh(e.xSkew), Vh(e.ySkew), s, l), wu(a));
      }
      return n.push(ku()), n;
    },
    xc = function (t) {
      var e = Bh(t.x),
        n = Bh(t.y),
        r = Bh(t.width),
        i = Bh(t.height),
        o = Bh(t.borderWidth),
        s = Bh(t.padding),
        l = e + o / 2 + s,
        h = n + o / 2 + s,
        u = r - 2 * (o / 2 + s),
        c = i - 2 * (o / 2 + s),
        d = [
          du(l, h),
          fu(l, h + c),
          fu(l + u, h + c),
          fu(l + u, h),
          cu(),
          Gh(),
          mu(),
        ],
        f = uc({
          x: e,
          y: n,
          width: r,
          height: i,
          borderWidth: t.borderWidth,
          color: t.color,
          borderColor: t.borderColor,
          rotate: Eh(0),
          xSkew: Eh(0),
          ySkew: Eh(0),
        }),
        p = wc(t.textLines, {
          color: t.textColor,
          font: t.font,
          size: t.fontSize,
          rotate: Eh(0),
          xSkew: Eh(0),
          ySkew: Eh(0),
        }),
        g = a([Eu("Tx"), au()], p, [su(), ju()]);
      return a([au()], f, d, g, [su()]);
    },
    kc = function (t) {
      for (
        var e = Bh(t.x),
          n = Bh(t.y),
          r = Bh(t.width),
          i = Bh(t.height),
          o = Bh(t.lineHeight),
          s = Bh(t.borderWidth),
          l = Bh(t.padding),
          h = e + s / 2 + l,
          u = n + s / 2 + l,
          c = r - 2 * (s / 2 + l),
          d = i - 2 * (s / 2 + l),
          f = [
            du(h, u),
            fu(h, u + d),
            fu(h + c, u + d),
            fu(h + c, u),
            cu(),
            Gh(),
            mu(),
          ],
          p = uc({
            x: e,
            y: n,
            width: r,
            height: i,
            borderWidth: t.borderWidth,
            color: t.color,
            borderColor: t.borderColor,
            rotate: Eh(0),
            xSkew: Eh(0),
            ySkew: Eh(0),
          }),
          g = [],
          v = 0,
          y = t.selectedLines.length;
        v < y;
        v++
      ) {
        var m = t.textLines[t.selectedLines[v]];
        g.push.apply(
          g,
          uc({
            x: m.x - l,
            y: m.y - (o - m.height) / 2,
            width: r - s,
            height: m.height + (o - m.height) / 2,
            borderWidth: 0,
            color: t.selectedColor,
            borderColor: void 0,
            rotate: Eh(0),
            xSkew: Eh(0),
            ySkew: Eh(0),
          })
        );
      }
      var b = wc(t.textLines, {
          color: t.textColor,
          font: t.font,
          size: t.fontSize,
          rotate: Eh(0),
          xSkew: Eh(0),
          ySkew: Eh(0),
        }),
        w = a([Eu("Tx"), au()], b, [su(), ju()]);
      return a([au()], p, g, f, w, [su()]);
    },
    Fc = (function (t) {
      function e() {
        return (
          t.call(
            this,
            "Input document to `PDFDocument.load` is encrypted. You can use `PDFDocument.load(..., { ignoreEncryption: true })` if you wish to load the document anyways."
          ) || this
        );
      }
      return n(e, t), e;
    })(Error),
    Sc = (function (t) {
      function e() {
        return (
          t.call(
            this,
            "Input to `PDFDocument.embedFont` was a custom font, but no `fontkit` instance was found. You must register a `fontkit` instance with `PDFDocument.registerFontkit(...)` before embedding custom fonts."
          ) || this
        );
      }
      return n(e, t), e;
    })(Error),
    Cc = (function (t) {
      function e() {
        return (
          t.call(
            this,
            "A `page` passed to `PDFDocument.addPage` or `PDFDocument.insertPage` was from a different (foreign) PDF document. If you want to copy pages from one PDFDocument to another, you must use `PDFDocument.copyPages(...)` to copy the pages before adding or inserting them."
          ) || this
        );
      }
      return n(e, t), e;
    })(Error),
    Ac = (function (t) {
      function e() {
        return (
          t.call(
            this,
            "PDFDocument has no pages so `PDFDocument.removePage` cannot be called"
          ) || this
        );
      }
      return n(e, t), e;
    })(Error),
    Tc = (function (t) {
      function e(e) {
        var n = 'PDFDocument has no form field with the name "' + e + '"';
        return t.call(this, n) || this;
      }
      return n(e, t), e;
    })(Error),
    Pc = (function (t) {
      function e(e, n, r) {
        var i,
          o,
          a =
            'Expected field "' +
            e +
            '" to be of type ' +
            (null == n ? void 0 : n.name) +
            ", but it is actually of type " +
            (null !==
              (o =
                null === (i = null == r ? void 0 : r.constructor) ||
                void 0 === i
                  ? void 0
                  : i.name) && void 0 !== o
              ? o
              : r);
        return t.call(this, a) || this;
      }
      return n(e, t), e;
    })(Error),
    zc = (function (t) {
      function e(e) {
        var n =
          'Failed to select check box due to missing onValue: "' + e + '"';
        return t.call(this, n) || this;
      }
      return n(e, t), e;
    })(Error),
    Rc = (function (t) {
      function e(e) {
        var n = 'A field already exists with the specified name: "' + e + '"';
        return t.call(this, n) || this;
      }
      return n(e, t), e;
    })(Error),
    Oc = (function (t) {
      function e(e) {
        var n = 'Field name contains invalid component: "' + e + '"';
        return t.call(this, n) || this;
      }
      return n(e, t), e;
    })(Error),
    Dc = (function (t) {
      function e(e) {
        var n =
          'A non-terminal field already exists with the specified name: "' +
          e +
          '"';
        return t.call(this, n) || this;
      }
      return n(e, t), e;
    })(Error),
    Bc = (function (t) {
      function e(e) {
        var n =
          "Reading rich text fields is not supported: Attempted to read rich text field: " +
          e;
        return t.call(this, n) || this;
      }
      return n(e, t), e;
    })(Error),
    Nc = (function (t) {
      function e(e, n) {
        var r =
          "Failed to layout combed text as lineLength=" +
          e +
          " is greater than cellCount=" +
          n;
        return t.call(this, r) || this;
      }
      return n(e, t), e;
    })(Error),
    Ec = (function (t) {
      function e(e, n, r) {
        var i =
          "Attempted to set text with length=" +
          e +
          " for TextField with maxLength=" +
          n +
          " and name=" +
          r;
        return t.call(this, i) || this;
      }
      return n(e, t), e;
    })(Error),
    jc = (function (t) {
      function e(e, n, r) {
        var i =
          "Attempted to set maxLength=" +
          n +
          ", which is less than " +
          e +
          ", the length of this field's current value (name=" +
          r +
          ")";
        return t.call(this, i) || this;
      }
      return n(e, t), e;
    })(Error);
  ((Mu = t.TextAlignment || (t.TextAlignment = {}))[(Mu.Left = 0)] = "Left"),
    (Mu[(Mu.Center = 1)] = "Center"),
    (Mu[(Mu.Right = 2)] = "Right");
  var Mc,
    Ic = function (t) {
      for (var e = t.length; e > 0; e--) if (/\s/.test(t[e])) return e;
    },
    Uc = function (t, e, n, r) {
      for (var i, o = t.length; o > 0; ) {
        var a = t.substring(0, o),
          s = n.encodeText(a),
          l = n.widthOfTextAtSize(a, r);
        if (l < e)
          return {
            line: a,
            encoded: s,
            width: l,
            remainder: t.substring(o) || void 0,
          };
        o = null !== (i = Ic(a)) && void 0 !== i ? i : 0;
      }
      return {
        line: t,
        encoded: n.encodeText(t),
        width: n.widthOfTextAtSize(t, r),
        remainder: void 0,
      };
    },
    Vc = function (e, n) {
      var r = n.alignment,
        i = n.fontSize,
        o = n.font,
        a = n.bounds,
        s = P(C(e));
      (void 0 !== i && 0 !== i) || (i = 12);
      for (
        var l = o.heightAtSize(i),
          h = l + 0.2 * l,
          u = [],
          c = a.x,
          d = a.y,
          f = a.x + a.width,
          p = a.y + a.height,
          g = a.y + a.height,
          v = 0,
          y = s.length;
        v < y;
        v++
      )
        for (var m = s[v]; void 0 !== m; ) {
          var b = Uc(m, a.width, o, i),
            w = b.line,
            x = b.encoded,
            k = b.width,
            F = b.remainder,
            S =
              r === t.TextAlignment.Left
                ? a.x
                : r === t.TextAlignment.Center
                ? a.x + a.width / 2 - k / 2
                : r === t.TextAlignment.Right
                ? a.x + a.width - k
                : a.x;
          S < c && (c = S),
            (g -= h) < d && (d = g),
            S + k > f && (f = S + k),
            g + l > p && (p = g + l),
            u.push({ text: w, encoded: x, width: k, height: l, x: S, y: g }),
            (m = null == F ? void 0 : F.trim());
        }
      return {
        fontSize: i,
        lineHeight: h,
        lines: u,
        bounds: { x: c, y: d, width: f - c, height: p - d },
      };
    },
    Wc = function (t, e) {
      var n = e.fontSize,
        r = e.font,
        i = e.bounds,
        o = e.cellCount,
        a = z(C(t));
      if (a.length > o) throw new Nc(a.length, o);
      (void 0 !== n && 0 !== n) ||
        (n = (function (t, e, n, r) {
          for (var i = n.width / r, o = n.height, a = 4, s = O(t); a < 500; ) {
            for (var l = 0, h = s.length; l < h; l++) {
              var u = s[l];
              if (e.widthOfTextAtSize(u, a) > 0.75 * i) return a - 1;
            }
            if (e.heightAtSize(a, { descender: !1 }) > o) return a - 1;
            a += 1;
          }
          return a;
        })(a, r, i, o));
      for (
        var s = i.width / o,
          l = r.heightAtSize(n, { descender: !1 }),
          h = i.y + (i.height / 2 - l / 2),
          u = [],
          c = i.x,
          d = i.y,
          f = i.x + i.width,
          p = i.y + i.height,
          g = 0,
          v = 0;
        g < o;

      ) {
        var y = R(a, v),
          m = y[0],
          b = y[1],
          w = r.encodeText(m),
          x = r.widthOfTextAtSize(m, n),
          k = i.x + (s * g + s / 2) - x / 2;
        k < c && (c = k),
          h < d && (d = h),
          k + x > f && (f = k + x),
          h + l > p && (p = h + l),
          u.push({ text: a, encoded: w, width: x, height: l, x: k, y: h }),
          (g += 1),
          (v += b);
      }
      return {
        fontSize: n,
        cells: u,
        bounds: { x: c, y: d, width: f - c, height: p - d },
      };
    },
    qc = function (e, n) {
      var r = n.alignment,
        i = n.fontSize,
        o = n.font,
        a = n.bounds,
        s = z(C(e));
      (void 0 !== i && 0 !== i) ||
        (i = (function (t, e, n) {
          for (var r = 4; r < 500; ) {
            for (var i = 0, o = t.length; i < o; i++) {
              var a = t[i];
              if (e.widthOfTextAtSize(a, r) > n.width) return r - 1;
            }
            var s = e.heightAtSize(r),
              l = s + 0.2 * s;
            if (t.length * l > Math.abs(n.height)) return r - 1;
            r += 1;
          }
          return r;
        })([s], o, a));
      var l = o.encodeText(s),
        h = o.widthOfTextAtSize(s, i),
        u = o.heightAtSize(i, { descender: !1 }),
        c =
          r === t.TextAlignment.Left
            ? a.x
            : r === t.TextAlignment.Center
            ? a.x + a.width / 2 - h / 2
            : r === t.TextAlignment.Right
            ? a.x + a.width - h
            : a.x,
        d = a.y + (a.height / 2 - u / 2);
      return {
        fontSize: i,
        line: { text: s, encoded: l, width: h, height: u, x: c, y: d },
        bounds: { x: c, y: d, width: h, height: u },
      };
    },
    Lc = function (t) {
      return "normal" in t ? t : { normal: t };
    },
    Kc = /\/([^\0\t\n\f\r\ ]+)[\0\t\n\f\r\ ]+(\d*\.\d+|\d+)[\0\t\n\f\r\ ]+Tf/,
    Gc = function (t) {
      var e,
        n,
        r = null !== (e = t.getDefaultAppearance()) && void 0 !== e ? e : "",
        i = null !== (n = E(r, Kc).match) && void 0 !== n ? n : [],
        o = Number(i[2]);
      return isFinite(o) ? o : void 0;
    },
    Hc =
      /(\d*\.\d+|\d+)[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]+(g|rg|k)/,
    _c = function (t) {
      var e,
        n = null !== (e = t.getDefaultAppearance()) && void 0 !== e ? e : "",
        r = E(n, Hc).match,
        i = null != r ? r : [],
        o = i[1],
        a = i[2],
        s = i[3],
        l = i[4],
        h = i[5];
      return "g" === h && o
        ? Iu(Number(o))
        : "rg" === h && o && a && s
        ? Uu(Number(o), Number(a), Number(s))
        : "k" === h && o && a && s && l
        ? Vu(Number(o), Number(a), Number(s), Number(l))
        : void 0;
    },
    Xc = function (t, e, n, r) {
      var i;
      void 0 === r && (r = 0);
      var o = [
        Ku(e).toString(),
        Fu(
          null !== (i = null == n ? void 0 : n.name) && void 0 !== i
            ? i
            : "dummy__noop",
          r
        ).toString(),
      ].join("\n");
      t.setDefaultAppearance(o);
    },
    Zc = function (t, e) {
      var n,
        i,
        o,
        s = _c(e),
        l = _c(t.acroField),
        h = e.getRectangle(),
        u = e.getAppearanceCharacteristics(),
        c = e.getBorderStyle(),
        d =
          null !== (n = null == c ? void 0 : c.getWidth()) && void 0 !== n
            ? n
            : 0,
        f = qh(null == u ? void 0 : u.getRotation()),
        p = Lh(h, f),
        g = p.width,
        v = p.height,
        y = vc(r(r({}, h), { rotation: f })),
        m = Uu(0, 0, 0),
        b =
          null !== (i = Hu(null == u ? void 0 : u.getBorderColor())) &&
          void 0 !== i
            ? i
            : m,
        w = Hu(null == u ? void 0 : u.getBackgroundColor()),
        x = Hu(null == u ? void 0 : u.getBackgroundColor(), 0.8),
        k = null !== (o = null != s ? s : l) && void 0 !== o ? o : m;
      Xc(s ? e : t.acroField, k);
      var F = {
        x: 0 + d / 2,
        y: 0 + d / 2,
        width: g - d,
        height: v - d,
        thickness: 1.5,
        borderWidth: d,
        borderColor: b,
        markColor: k,
      };
      return {
        normal: {
          on: a(y, yc(r(r({}, F), { color: w, filled: !0 }))),
          off: a(y, yc(r(r({}, F), { color: w, filled: !1 }))),
        },
        down: {
          on: a(y, yc(r(r({}, F), { color: x, filled: !0 }))),
          off: a(y, yc(r(r({}, F), { color: x, filled: !1 }))),
        },
      };
    },
    Yc = function (t, e) {
      var n,
        i,
        o,
        s = _c(e),
        l = _c(t.acroField),
        h = e.getRectangle(),
        u = e.getAppearanceCharacteristics(),
        c = e.getBorderStyle(),
        d =
          null !== (n = null == c ? void 0 : c.getWidth()) && void 0 !== n
            ? n
            : 0,
        f = qh(null == u ? void 0 : u.getRotation()),
        p = Lh(h, f),
        g = p.width,
        v = p.height,
        y = vc(r(r({}, h), { rotation: f })),
        m = Uu(0, 0, 0),
        b =
          null !== (i = Hu(null == u ? void 0 : u.getBorderColor())) &&
          void 0 !== i
            ? i
            : m,
        w = Hu(null == u ? void 0 : u.getBackgroundColor()),
        x = Hu(null == u ? void 0 : u.getBackgroundColor(), 0.8),
        k = null !== (o = null != s ? s : l) && void 0 !== o ? o : m;
      Xc(s ? e : t.acroField, k);
      var F = {
        x: g / 2,
        y: v / 2,
        width: g - d,
        height: v - d,
        borderWidth: d,
        borderColor: b,
        dotColor: k,
      };
      return {
        normal: {
          on: a(y, mc(r(r({}, F), { color: w, filled: !0 }))),
          off: a(y, mc(r(r({}, F), { color: w, filled: !1 }))),
        },
        down: {
          on: a(y, mc(r(r({}, F), { color: x, filled: !0 }))),
          off: a(y, mc(r(r({}, F), { color: x, filled: !1 }))),
        },
      };
    },
    Jc = function (e, n, i) {
      var o,
        s,
        l,
        h,
        u,
        c = _c(n),
        d = _c(e.acroField),
        f = Gc(n),
        p = Gc(e.acroField),
        g = n.getRectangle(),
        v = n.getAppearanceCharacteristics(),
        y = n.getBorderStyle(),
        m = null == v ? void 0 : v.getCaptions(),
        b =
          null !== (o = null == m ? void 0 : m.normal) && void 0 !== o ? o : "",
        w =
          null !==
            (l =
              null !== (s = null == m ? void 0 : m.down) && void 0 !== s
                ? s
                : b) && void 0 !== l
            ? l
            : "",
        x =
          null !== (h = null == y ? void 0 : y.getWidth()) && void 0 !== h
            ? h
            : 0,
        k = qh(null == v ? void 0 : v.getRotation()),
        F = Lh(g, k),
        S = F.width,
        C = F.height,
        A = vc(r(r({}, g), { rotation: k })),
        T = Uu(0, 0, 0),
        P = Hu(null == v ? void 0 : v.getBorderColor()),
        z = Hu(null == v ? void 0 : v.getBackgroundColor()),
        R = Hu(null == v ? void 0 : v.getBackgroundColor(), 0.8),
        O = { x: x, y: x, width: S - 2 * x, height: C - 2 * x },
        D = qc(b, {
          alignment: t.TextAlignment.Center,
          fontSize: null != f ? f : p,
          font: i,
          bounds: O,
        }),
        B = qc(w, {
          alignment: t.TextAlignment.Center,
          fontSize: null != f ? f : p,
          font: i,
          bounds: O,
        }),
        N = Math.min(D.fontSize, B.fontSize),
        E = null !== (u = null != c ? c : d) && void 0 !== u ? u : T;
      Xc(c || void 0 !== f ? n : e.acroField, E, i, N);
      var j = {
        x: 0 + x / 2,
        y: 0 + x / 2,
        width: S - x,
        height: C - x,
        borderWidth: x,
        borderColor: P,
        textColor: E,
        font: i.name,
        fontSize: N,
      };
      return {
        normal: a(A, bc(r(r({}, j), { color: z, textLines: [D.line] }))),
        down: a(A, bc(r(r({}, j), { color: R, textLines: [B.line] }))),
      };
    },
    Qc = function (t, e, n) {
      var i,
        o,
        s,
        l,
        h,
        u,
        c = _c(e),
        d = _c(t.acroField),
        f = Gc(e),
        p = Gc(t.acroField),
        g = e.getRectangle(),
        v = e.getAppearanceCharacteristics(),
        y = e.getBorderStyle(),
        m = null !== (i = t.getText()) && void 0 !== i ? i : "",
        b =
          null !== (o = null == y ? void 0 : y.getWidth()) && void 0 !== o
            ? o
            : 0,
        w = qh(null == v ? void 0 : v.getRotation()),
        x = Lh(g, w),
        k = x.width,
        F = x.height,
        S = vc(r(r({}, g), { rotation: w })),
        C = Uu(0, 0, 0),
        A = Hu(null == v ? void 0 : v.getBorderColor()),
        T = Hu(null == v ? void 0 : v.getBackgroundColor()),
        P = t.isCombed() ? 0 : 1,
        z = {
          x: b + P,
          y: b + P,
          width: k - 2 * (b + P),
          height: F - 2 * (b + P),
        };
      if (t.isMultiline())
        (h = (R = Vc(m, {
          alignment: t.getAlignment(),
          fontSize: null != f ? f : p,
          font: n,
          bounds: z,
        })).lines),
          (u = R.fontSize);
      else if (t.isCombed()) {
        (h = (R = Wc(m, {
          fontSize: null != f ? f : p,
          font: n,
          bounds: z,
          cellCount: null !== (s = t.getMaxLength()) && void 0 !== s ? s : 0,
        })).cells),
          (u = R.fontSize);
      } else {
        var R;
        (h = [
          (R = qc(m, {
            alignment: t.getAlignment(),
            fontSize: null != f ? f : p,
            font: n,
            bounds: z,
          })).line,
        ]),
          (u = R.fontSize);
      }
      var O = null !== (l = null != c ? c : d) && void 0 !== l ? l : C;
      Xc(c || void 0 !== f ? e : t.acroField, O, n, u);
      var D = {
        x: 0 + b / 2,
        y: 0 + b / 2,
        width: k - b,
        height: F - b,
        borderWidth: null != b ? b : 0,
        borderColor: A,
        textColor: O,
        font: n.name,
        fontSize: u,
        color: T,
        textLines: h,
        padding: P,
      };
      return a(S, xc(D));
    },
    $c = function (e, n, i) {
      var o,
        s,
        l,
        h = _c(n),
        u = _c(e.acroField),
        c = Gc(n),
        d = Gc(e.acroField),
        f = n.getRectangle(),
        p = n.getAppearanceCharacteristics(),
        g = n.getBorderStyle(),
        v = null !== (o = e.getSelected()[0]) && void 0 !== o ? o : "",
        y =
          null !== (s = null == g ? void 0 : g.getWidth()) && void 0 !== s
            ? s
            : 0,
        m = qh(null == p ? void 0 : p.getRotation()),
        b = Lh(f, m),
        w = b.width,
        x = b.height,
        k = vc(r(r({}, f), { rotation: m })),
        F = Uu(0, 0, 0),
        S = Hu(null == p ? void 0 : p.getBorderColor()),
        C = Hu(null == p ? void 0 : p.getBackgroundColor()),
        A = {
          x: y + 1,
          y: y + 1,
          width: w - 2 * (y + 1),
          height: x - 2 * (y + 1),
        },
        T = qc(v, {
          alignment: t.TextAlignment.Left,
          fontSize: null != c ? c : d,
          font: i,
          bounds: A,
        }),
        P = T.line,
        z = T.fontSize,
        R = null !== (l = null != h ? h : u) && void 0 !== l ? l : F;
      Xc(h || void 0 !== c ? n : e.acroField, R, i, z);
      var O = {
        x: 0 + y / 2,
        y: 0 + y / 2,
        width: w - y,
        height: x - y,
        borderWidth: null != y ? y : 0,
        borderColor: S,
        textColor: R,
        font: i.name,
        fontSize: z,
        color: C,
        textLines: [P],
        padding: 1,
      };
      return a(k, xc(O));
    },
    td = function (e, n, i) {
      var o,
        s,
        l = _c(n),
        h = _c(e.acroField),
        u = Gc(n),
        c = Gc(e.acroField),
        d = n.getRectangle(),
        f = n.getAppearanceCharacteristics(),
        p = n.getBorderStyle(),
        g =
          null !== (o = null == p ? void 0 : p.getWidth()) && void 0 !== o
            ? o
            : 0,
        v = qh(null == f ? void 0 : f.getRotation()),
        y = Lh(d, v),
        m = y.width,
        b = y.height,
        w = vc(r(r({}, d), { rotation: v })),
        x = Uu(0, 0, 0),
        k = Hu(null == f ? void 0 : f.getBorderColor()),
        F = Hu(null == f ? void 0 : f.getBackgroundColor()),
        S = e.getOptions(),
        C = e.getSelected();
      e.isSorted() && S.sort();
      for (var A = "", T = 0, P = S.length; T < P; T++)
        (A += S[T]), T < P - 1 && (A += "\n");
      var z = {
          x: g + 1,
          y: g + 1,
          width: m - 2 * (g + 1),
          height: b - 2 * (g + 1),
        },
        R = Vc(A, {
          alignment: t.TextAlignment.Left,
          fontSize: null != u ? u : c,
          font: i,
          bounds: z,
        }),
        O = R.lines,
        D = R.fontSize,
        B = R.lineHeight,
        N = [];
      for (T = 0, P = O.length; T < P; T++) {
        var E = O[T];
        C.includes(E.text) && N.push(T);
      }
      var j = Uu(0.6, 193 / 255, 218 / 255),
        M = null !== (s = null != l ? l : h) && void 0 !== s ? s : x;
      return (
        Xc(l || void 0 !== u ? n : e.acroField, M, i, D),
        a(
          w,
          kc({
            x: 0 + g / 2,
            y: 0 + g / 2,
            width: m - g,
            height: b - g,
            borderWidth: null != g ? g : 0,
            borderColor: k,
            textColor: M,
            font: i.name,
            fontSize: D,
            color: F,
            textLines: O,
            lineHeight: B,
            selectedColor: j,
            selectedLines: N,
            padding: 1,
          })
        )
      );
    },
    ed = (function () {
      function t(t, e, n) {
        (this.alreadyEmbedded = !1),
          Dn(t, "ref", [[Oo, "PDFRef"]]),
          Dn(e, "doc", [[Fd, "PDFDocument"]]),
          Dn(n, "embedder", [[Tl, "PDFPageEmbedder"]]),
          (this.ref = t),
          (this.doc = e),
          (this.width = n.width),
          (this.height = n.height),
          (this.embedder = n);
      }
      return (
        (t.prototype.scale = function (t) {
          return (
            Dn(t, "factor", ["number"]),
            { width: this.width * t, height: this.height * t }
          );
        }),
        (t.prototype.size = function () {
          return this.scale(1);
        }),
        (t.prototype.embed = function () {
          return i(this, void 0, void 0, function () {
            return o(this, function (t) {
              switch (t.label) {
                case 0:
                  return this.alreadyEmbedded
                    ? [3, 2]
                    : [
                        4,
                        this.embedder.embedIntoContext(
                          this.doc.context,
                          this.ref
                        ),
                      ];
                case 1:
                  t.sent(), (this.alreadyEmbedded = !0), (t.label = 2);
                case 2:
                  return [2];
              }
            });
          });
        }),
        (t.of = function (e, n, r) {
          return new t(e, n, r);
        }),
        t
      );
    })(),
    nd = (function () {
      function t(t, e, n) {
        (this.modified = !0),
          Dn(t, "ref", [[Oo, "PDFRef"]]),
          Dn(e, "doc", [[Fd, "PDFDocument"]]),
          Dn(n, "embedder", [
            [ra, "CustomFontEmbedder"],
            [Jo, "StandardFontEmbedder"],
          ]),
          (this.ref = t),
          (this.doc = e),
          (this.name = n.fontName),
          (this.embedder = n);
      }
      return (
        (t.prototype.encodeText = function (t) {
          return (
            Dn(t, "text", ["string"]),
            (this.modified = !0),
            this.embedder.encodeText(t)
          );
        }),
        (t.prototype.widthOfTextAtSize = function (t, e) {
          return (
            Dn(t, "text", ["string"]),
            Dn(e, "size", ["number"]),
            this.embedder.widthOfTextAtSize(t, e)
          );
        }),
        (t.prototype.heightAtSize = function (t, e) {
          var n;
          return (
            Dn(t, "size", ["number"]),
            Bn(null == e ? void 0 : e.descender, "options.descender", [
              "boolean",
            ]),
            this.embedder.heightOfFontAtSize(t, {
              descender:
                null === (n = null == e ? void 0 : e.descender) ||
                void 0 === n ||
                n,
            })
          );
        }),
        (t.prototype.sizeAtHeight = function (t) {
          return (
            Dn(t, "height", ["number"]), this.embedder.sizeOfFontAtHeight(t)
          );
        }),
        (t.prototype.getCharacterSet = function () {
          return this.embedder instanceof Jo
            ? this.embedder.encoding.supportedCodePoints
            : this.embedder.font.characterSet;
        }),
        (t.prototype.embed = function () {
          return i(this, void 0, void 0, function () {
            return o(this, function (t) {
              switch (t.label) {
                case 0:
                  return this.modified
                    ? [
                        4,
                        this.embedder.embedIntoContext(
                          this.doc.context,
                          this.ref
                        ),
                      ]
                    : [3, 2];
                case 1:
                  t.sent(), (this.modified = !1), (t.label = 2);
                case 2:
                  return [2];
              }
            });
          });
        }),
        (t.of = function (e, n, r) {
          return new t(e, n, r);
        }),
        t
      );
    })(),
    rd = (function () {
      function t(t, e, n) {
        (this.alreadyEmbedded = !1),
          Dn(t, "ref", [[Oo, "PDFRef"]]),
          Dn(e, "doc", [[Fd, "PDFDocument"]]),
          Dn(n, "embedder", [
            [ha, "JpegEmbedder"],
            [ul, "PngEmbedder"],
          ]),
          (this.ref = t),
          (this.doc = e),
          (this.width = n.width),
          (this.height = n.height),
          (this.embedder = n);
      }
      return (
        (t.prototype.scale = function (t) {
          return (
            Dn(t, "factor", ["number"]),
            { width: this.width * t, height: this.height * t }
          );
        }),
        (t.prototype.scaleToFit = function (t, e) {
          Dn(t, "width", ["number"]), Dn(e, "height", ["number"]);
          var n = t / this.width,
            r = e / this.height,
            i = Math.min(n, r);
          return this.scale(i);
        }),
        (t.prototype.size = function () {
          return this.scale(1);
        }),
        (t.prototype.embed = function () {
          return i(this, void 0, void 0, function () {
            return o(this, function (t) {
              switch (t.label) {
                case 0:
                  return this.alreadyEmbedded
                    ? [3, 2]
                    : [
                        4,
                        this.embedder.embedIntoContext(
                          this.doc.context,
                          this.ref
                        ),
                      ];
                case 1:
                  t.sent(), (this.alreadyEmbedded = !0), (t.label = 2);
                case 2:
                  return [2];
              }
            });
          });
        }),
        (t.of = function (e, n, r) {
          return new t(e, n, r);
        }),
        t
      );
    })();
  !(function (t) {
    (t[(t.Left = 0)] = "Left"),
      (t[(t.Center = 1)] = "Center"),
      (t[(t.Right = 2)] = "Right");
  })(Mc || (Mc = {}));
  var id,
    od = function (t) {
      Bn(null == t ? void 0 : t.x, "options.x", ["number"]),
        Bn(null == t ? void 0 : t.y, "options.y", ["number"]),
        Bn(null == t ? void 0 : t.width, "options.width", ["number"]),
        Bn(null == t ? void 0 : t.height, "options.height", ["number"]),
        Bn(null == t ? void 0 : t.textColor, "options.textColor", [
          [Object, "Color"],
        ]),
        Bn(null == t ? void 0 : t.backgroundColor, "options.backgroundColor", [
          [Object, "Color"],
        ]),
        Bn(null == t ? void 0 : t.borderColor, "options.borderColor", [
          [Object, "Color"],
        ]),
        Bn(null == t ? void 0 : t.borderWidth, "options.borderWidth", [
          "number",
        ]),
        Bn(null == t ? void 0 : t.rotate, "options.rotate", [
          [Object, "Rotation"],
        ]);
    },
    ad = (function () {
      function e(t, e, n) {
        Dn(t, "acroField", [[Vl, "PDFAcroTerminal"]]),
          Dn(e, "ref", [[Oo, "PDFRef"]]),
          Dn(n, "doc", [[Fd, "PDFDocument"]]),
          (this.acroField = t),
          (this.ref = e),
          (this.doc = n);
      }
      return (
        (e.prototype.getName = function () {
          var t;
          return null !== (t = this.acroField.getFullyQualifiedName()) &&
            void 0 !== t
            ? t
            : "";
        }),
        (e.prototype.isReadOnly = function () {
          return this.acroField.hasFlag(t.AcroFieldFlags.ReadOnly);
        }),
        (e.prototype.enableReadOnly = function () {
          this.acroField.setFlagTo(t.AcroFieldFlags.ReadOnly, !0);
        }),
        (e.prototype.disableReadOnly = function () {
          this.acroField.setFlagTo(t.AcroFieldFlags.ReadOnly, !1);
        }),
        (e.prototype.isRequired = function () {
          return this.acroField.hasFlag(t.AcroFieldFlags.Required);
        }),
        (e.prototype.enableRequired = function () {
          this.acroField.setFlagTo(t.AcroFieldFlags.Required, !0);
        }),
        (e.prototype.disableRequired = function () {
          this.acroField.setFlagTo(t.AcroFieldFlags.Required, !1);
        }),
        (e.prototype.isExported = function () {
          return !this.acroField.hasFlag(t.AcroFieldFlags.NoExport);
        }),
        (e.prototype.enableExporting = function () {
          this.acroField.setFlagTo(t.AcroFieldFlags.NoExport, !1);
        }),
        (e.prototype.disableExporting = function () {
          this.acroField.setFlagTo(t.AcroFieldFlags.NoExport, !0);
        }),
        (e.prototype.needsAppearancesUpdate = function () {
          throw new Gn(this.constructor.name, "needsAppearancesUpdate");
        }),
        (e.prototype.defaultUpdateAppearances = function (t) {
          throw new Gn(this.constructor.name, "defaultUpdateAppearances");
        }),
        (e.prototype.markAsDirty = function () {
          this.doc.getForm().markFieldAsDirty(this.ref);
        }),
        (e.prototype.markAsClean = function () {
          this.doc.getForm().markFieldAsClean(this.ref);
        }),
        (e.prototype.isDirty = function () {
          return this.doc.getForm().fieldIsDirty(this.ref);
        }),
        (e.prototype.createWidget = function (e) {
          var n,
            r = e.textColor,
            i = e.backgroundColor,
            o = e.borderColor,
            a = e.borderWidth,
            s = Wh(e.rotate),
            l = e.caption,
            h = e.x,
            u = e.y,
            c = e.width + a,
            d = e.height + a,
            f = Boolean(e.hidden);
          Mn(s, "degreesAngle", 90);
          var p = Ul.create(this.doc.context, this.ref),
            g = Kh({ x: h, y: u, width: c, height: d }, a, s);
          p.setRectangle(g);
          var v = p.getOrCreateAppearanceCharacteristics();
          i && v.setBackgroundColor(_u(i)),
            v.setRotation(s),
            l && v.setCaptions({ normal: l }),
            o && v.setBorderColor(_u(o));
          var y = p.getOrCreateBorderStyle();
          if (
            (void 0 !== a && y.setWidth(a),
            p.setFlagTo(t.AnnotationFlags.Print, !0),
            p.setFlagTo(t.AnnotationFlags.Hidden, f),
            p.setFlagTo(t.AnnotationFlags.Invisible, !1),
            r)
          ) {
            var m =
              (null !== (n = this.acroField.getDefaultAppearance()) &&
              void 0 !== n
                ? n
                : "") +
              "\n" +
              Ku(r).toString();
            this.acroField.setDefaultAppearance(m);
          }
          return p;
        }),
        (e.prototype.updateWidgetAppearanceWithFont = function (t, e, n) {
          var r = n.normal,
            i = n.rollover,
            o = n.down;
          this.updateWidgetAppearances(t, {
            normal: this.createAppearanceStream(t, r, e),
            rollover: i && this.createAppearanceStream(t, i, e),
            down: o && this.createAppearanceStream(t, o, e),
          });
        }),
        (e.prototype.updateOnOffWidgetAppearance = function (t, e, n) {
          var r = n.normal,
            i = n.rollover,
            o = n.down;
          this.updateWidgetAppearances(t, {
            normal: this.createAppearanceDict(t, r, e),
            rollover: i && this.createAppearanceDict(t, i, e),
            down: o && this.createAppearanceDict(t, o, e),
          });
        }),
        (e.prototype.updateWidgetAppearances = function (t, e) {
          var n = e.normal,
            r = e.rollover,
            i = e.down;
          t.setNormalAppearance(n),
            r ? t.setRolloverAppearance(r) : t.removeRolloverAppearance(),
            i ? t.setDownAppearance(i) : t.removeDownAppearance();
        }),
        (e.prototype.createAppearanceStream = function (t, e, n) {
          var r,
            i = this.acroField.dict.context,
            o = t.getRectangle(),
            a = o.width,
            s = o.height,
            l = n && { Font: ((r = {}), (r[n.name] = n.ref), r) },
            h = i.formXObject(e, {
              Resources: l,
              BBox: i.obj([0, 0, a, s]),
              Matrix: i.obj([1, 0, 0, 1, 0, 0]),
            });
          return i.register(h);
        }),
        (e.prototype.createImageAppearanceStream = function (t, e, n) {
          var i,
            o,
            s = this.acroField.dict.context,
            l = t.getRectangle(),
            h = t.getAppearanceCharacteristics(),
            u = t.getBorderStyle(),
            c =
              null !== (o = null == u ? void 0 : u.getWidth()) && void 0 !== o
                ? o
                : 0,
            d = qh(null == h ? void 0 : h.getRotation()),
            f = vc(r(r({}, l), { rotation: d })),
            p = Lh(l, d),
            g = e.scaleToFit(p.width - 2 * c, p.height - 2 * c),
            v = {
              x: c,
              y: c,
              width: g.width,
              height: g.height,
              rotate: Eh(0),
              xSkew: Eh(0),
              ySkew: Eh(0),
            };
          n === Mc.Center
            ? ((v.x += (p.width - 2 * c) / 2 - g.width / 2),
              (v.y += (p.height - 2 * c) / 2 - g.height / 2))
            : n === Mc.Right &&
              ((v.x = p.width - c - g.width), (v.y = p.height - c - g.height));
          var y = F("Image", 10),
            m = a(f, sc(y, v)),
            b = { XObject: ((i = {}), (i[y] = e.ref), i) },
            w = s.formXObject(m, {
              Resources: b,
              BBox: s.obj([0, 0, l.width, l.height]),
              Matrix: s.obj([1, 0, 0, 1, 0, 0]),
            });
          return s.register(w);
        }),
        (e.prototype.createAppearanceDict = function (t, e, n) {
          var r = this.acroField.dict.context,
            i = this.createAppearanceStream(t, e.on),
            o = this.createAppearanceStream(t, e.off),
            a = r.obj({});
          return a.set(n, i), a.set(Ao.of("Off"), o), a;
        }),
        e
      );
    })(),
    sd = (function (t) {
      function e(e, n, r) {
        var i = t.call(this, e, n, r) || this;
        return (
          Dn(e, "acroCheckBox", [[ql, "PDFAcroCheckBox"]]), (i.acroField = e), i
        );
      }
      return (
        n(e, t),
        (e.prototype.check = function () {
          var t,
            e =
              null !== (t = this.acroField.getOnValue()) && void 0 !== t
                ? t
                : Ao.of("Yes");
          this.markAsDirty(), this.acroField.setValue(e);
        }),
        (e.prototype.uncheck = function () {
          this.markAsDirty(), this.acroField.setValue(Ao.of("Off"));
        }),
        (e.prototype.isChecked = function () {
          var t = this.acroField.getOnValue();
          return !!t && t === this.acroField.getValue();
        }),
        (e.prototype.addToPage = function (t, e) {
          var n, r, i, o, a, s;
          Dn(t, "page", [[Cd, "PDFPage"]]),
            od(e),
            e || (e = {}),
            "textColor" in e || (e.textColor = Uu(0, 0, 0)),
            "backgroundColor" in e || (e.backgroundColor = Uu(1, 1, 1)),
            "borderColor" in e || (e.borderColor = Uu(0, 0, 0)),
            "borderWidth" in e || (e.borderWidth = 1);
          var l = this.createWidget({
              x: null !== (n = e.x) && void 0 !== n ? n : 0,
              y: null !== (r = e.y) && void 0 !== r ? r : 0,
              width: null !== (i = e.width) && void 0 !== i ? i : 50,
              height: null !== (o = e.height) && void 0 !== o ? o : 50,
              textColor: e.textColor,
              backgroundColor: e.backgroundColor,
              borderColor: e.borderColor,
              borderWidth: null !== (a = e.borderWidth) && void 0 !== a ? a : 0,
              rotate: null !== (s = e.rotate) && void 0 !== s ? s : Eh(0),
              hidden: e.hidden,
            }),
            h = this.doc.context.register(l.dict);
          this.acroField.addWidget(h),
            l.setAppearanceState(Ao.of("Off")),
            this.updateWidgetAppearance(l, Ao.of("Yes")),
            t.node.addAnnot(h);
        }),
        (e.prototype.needsAppearancesUpdate = function () {
          for (
            var t, e = this.acroField.getWidgets(), n = 0, r = e.length;
            n < r;
            n++
          ) {
            var i = e[n],
              o = i.getAppearanceState(),
              a =
                null === (t = i.getAppearances()) || void 0 === t
                  ? void 0
                  : t.normal;
            if (!(a instanceof mo)) return !0;
            if (o && !a.has(o)) return !0;
          }
          return !1;
        }),
        (e.prototype.defaultUpdateAppearances = function () {
          this.updateAppearances();
        }),
        (e.prototype.updateAppearances = function (t) {
          var e;
          Bn(t, "provider", [Function]);
          for (
            var n = this.acroField.getWidgets(), r = 0, i = n.length;
            r < i;
            r++
          ) {
            var o = n[r],
              a =
                null !== (e = o.getOnValue()) && void 0 !== e
                  ? e
                  : Ao.of("Yes");
            a && this.updateWidgetAppearance(o, a, t);
          }
          this.markAsClean();
        }),
        (e.prototype.updateWidgetAppearance = function (t, e, n) {
          var r = Lc((null != n ? n : Zc)(this, t));
          this.updateOnOffWidgetAppearance(t, e, r);
        }),
        (e.of = function (t, n, r) {
          return new e(t, n, r);
        }),
        e
      );
    })(ad),
    ld = (function (e) {
      function r(t, n, r) {
        var i = e.call(this, t, n, r) || this;
        return (
          Dn(t, "acroComboBox", [[Gl, "PDFAcroComboBox"]]), (i.acroField = t), i
        );
      }
      return (
        n(r, e),
        (r.prototype.getOptions = function () {
          for (
            var t = this.acroField.getOptions(),
              e = new Array(t.length),
              n = 0,
              r = e.length;
            n < r;
            n++
          ) {
            var i = t[n],
              o = i.display,
              a = i.value;
            e[n] = (null != o ? o : a).decodeText();
          }
          return e;
        }),
        (r.prototype.getSelected = function () {
          for (
            var t = this.acroField.getValues(),
              e = new Array(t.length),
              n = 0,
              r = t.length;
            n < r;
            n++
          )
            e[n] = t[n].decodeText();
          return e;
        }),
        (r.prototype.setOptions = function (t) {
          Dn(t, "options", [Array]);
          for (var e = new Array(t.length), n = 0, r = t.length; n < r; n++)
            e[n] = { value: Yo.fromText(t[n]) };
          this.acroField.setOptions(e);
        }),
        (r.prototype.addOptions = function (t) {
          Dn(t, "options", ["string", Array]);
          for (
            var e = Array.isArray(t) ? t : [t],
              n = this.acroField.getOptions(),
              r = new Array(e.length),
              i = 0,
              o = e.length;
            i < o;
            i++
          )
            r[i] = { value: Yo.fromText(e[i]) };
          this.acroField.setOptions(n.concat(r));
        }),
        (r.prototype.select = function (t, e) {
          void 0 === e && (e = !1),
            Dn(t, "options", ["string", Array]),
            Dn(e, "merge", ["boolean"]);
          var n = Array.isArray(t) ? t : [t],
            r = this.getOptions();
          n.find(function (t) {
            return !r.includes(t);
          }) && this.enableEditing(),
            this.markAsDirty(),
            (n.length > 1 || (1 === n.length && e)) && this.enableMultiselect();
          for (var i = new Array(n.length), o = 0, a = n.length; o < a; o++)
            i[o] = Yo.fromText(n[o]);
          if (e) {
            var s = this.acroField.getValues();
            this.acroField.setValues(s.concat(i));
          } else this.acroField.setValues(i);
        }),
        (r.prototype.clear = function () {
          this.markAsDirty(), this.acroField.setValues([]);
        }),
        (r.prototype.setFontSize = function (t) {
          Un(t, "fontSize"), this.acroField.setFontSize(t), this.markAsDirty();
        }),
        (r.prototype.isEditable = function () {
          return this.acroField.hasFlag(t.AcroChoiceFlags.Edit);
        }),
        (r.prototype.enableEditing = function () {
          this.acroField.setFlagTo(t.AcroChoiceFlags.Edit, !0);
        }),
        (r.prototype.disableEditing = function () {
          this.acroField.setFlagTo(t.AcroChoiceFlags.Edit, !1);
        }),
        (r.prototype.isSorted = function () {
          return this.acroField.hasFlag(t.AcroChoiceFlags.Sort);
        }),
        (r.prototype.enableSorting = function () {
          this.acroField.setFlagTo(t.AcroChoiceFlags.Sort, !0);
        }),
        (r.prototype.disableSorting = function () {
          this.acroField.setFlagTo(t.AcroChoiceFlags.Sort, !1);
        }),
        (r.prototype.isMultiselect = function () {
          return this.acroField.hasFlag(t.AcroChoiceFlags.MultiSelect);
        }),
        (r.prototype.enableMultiselect = function () {
          this.acroField.setFlagTo(t.AcroChoiceFlags.MultiSelect, !0);
        }),
        (r.prototype.disableMultiselect = function () {
          this.acroField.setFlagTo(t.AcroChoiceFlags.MultiSelect, !1);
        }),
        (r.prototype.isSpellChecked = function () {
          return !this.acroField.hasFlag(t.AcroChoiceFlags.DoNotSpellCheck);
        }),
        (r.prototype.enableSpellChecking = function () {
          this.acroField.setFlagTo(t.AcroChoiceFlags.DoNotSpellCheck, !1);
        }),
        (r.prototype.disableSpellChecking = function () {
          this.acroField.setFlagTo(t.AcroChoiceFlags.DoNotSpellCheck, !0);
        }),
        (r.prototype.isSelectOnClick = function () {
          return this.acroField.hasFlag(t.AcroChoiceFlags.CommitOnSelChange);
        }),
        (r.prototype.enableSelectOnClick = function () {
          this.acroField.setFlagTo(t.AcroChoiceFlags.CommitOnSelChange, !0);
        }),
        (r.prototype.disableSelectOnClick = function () {
          this.acroField.setFlagTo(t.AcroChoiceFlags.CommitOnSelChange, !1);
        }),
        (r.prototype.addToPage = function (t, e) {
          var n, r, i, o, a, s, l;
          Dn(t, "page", [[Cd, "PDFPage"]]),
            od(e),
            e || (e = {}),
            "textColor" in e || (e.textColor = Uu(0, 0, 0)),
            "backgroundColor" in e || (e.backgroundColor = Uu(1, 1, 1)),
            "borderColor" in e || (e.borderColor = Uu(0, 0, 0)),
            "borderWidth" in e || (e.borderWidth = 1);
          var h = this.createWidget({
              x: null !== (n = e.x) && void 0 !== n ? n : 0,
              y: null !== (r = e.y) && void 0 !== r ? r : 0,
              width: null !== (i = e.width) && void 0 !== i ? i : 200,
              height: null !== (o = e.height) && void 0 !== o ? o : 50,
              textColor: e.textColor,
              backgroundColor: e.backgroundColor,
              borderColor: e.borderColor,
              borderWidth: null !== (a = e.borderWidth) && void 0 !== a ? a : 0,
              rotate: null !== (s = e.rotate) && void 0 !== s ? s : Eh(0),
              hidden: e.hidden,
            }),
            u = this.doc.context.register(h.dict);
          this.acroField.addWidget(u);
          var c =
            null !== (l = e.font) && void 0 !== l
              ? l
              : this.doc.getForm().getDefaultFont();
          this.updateWidgetAppearance(h, c), t.node.addAnnot(u);
        }),
        (r.prototype.needsAppearancesUpdate = function () {
          var t;
          if (this.isDirty()) return !0;
          for (
            var e = this.acroField.getWidgets(), n = 0, r = e.length;
            n < r;
            n++
          ) {
            if (
              !(
                (null === (t = e[n].getAppearances()) || void 0 === t
                  ? void 0
                  : t.normal) instanceof To
              )
            )
              return !0;
          }
          return !1;
        }),
        (r.prototype.defaultUpdateAppearances = function (t) {
          Dn(t, "font", [[nd, "PDFFont"]]), this.updateAppearances(t);
        }),
        (r.prototype.updateAppearances = function (t, e) {
          Dn(t, "font", [[nd, "PDFFont"]]), Bn(e, "provider", [Function]);
          for (
            var n = this.acroField.getWidgets(), r = 0, i = n.length;
            r < i;
            r++
          ) {
            var o = n[r];
            this.updateWidgetAppearance(o, t, e);
          }
          this.markAsClean();
        }),
        (r.prototype.updateWidgetAppearance = function (t, e, n) {
          var r = Lc((null != n ? n : $c)(this, t, e));
          this.updateWidgetAppearanceWithFont(t, e, r);
        }),
        (r.of = function (t, e, n) {
          return new r(t, e, n);
        }),
        r
      );
    })(ad),
    hd = (function (e) {
      function r(t, n, r) {
        var i = e.call(this, t, n, r) || this;
        return (
          Dn(t, "acroListBox", [[Jl, "PDFAcroListBox"]]), (i.acroField = t), i
        );
      }
      return (
        n(r, e),
        (r.prototype.getOptions = function () {
          for (
            var t = this.acroField.getOptions(),
              e = new Array(t.length),
              n = 0,
              r = e.length;
            n < r;
            n++
          ) {
            var i = t[n],
              o = i.display,
              a = i.value;
            e[n] = (null != o ? o : a).decodeText();
          }
          return e;
        }),
        (r.prototype.getSelected = function () {
          for (
            var t = this.acroField.getValues(),
              e = new Array(t.length),
              n = 0,
              r = t.length;
            n < r;
            n++
          )
            e[n] = t[n].decodeText();
          return e;
        }),
        (r.prototype.setOptions = function (t) {
          Dn(t, "options", [Array]), this.markAsDirty();
          for (var e = new Array(t.length), n = 0, r = t.length; n < r; n++)
            e[n] = { value: Yo.fromText(t[n]) };
          this.acroField.setOptions(e);
        }),
        (r.prototype.addOptions = function (t) {
          Dn(t, "options", ["string", Array]), this.markAsDirty();
          for (
            var e = Array.isArray(t) ? t : [t],
              n = this.acroField.getOptions(),
              r = new Array(e.length),
              i = 0,
              o = e.length;
            i < o;
            i++
          )
            r[i] = { value: Yo.fromText(e[i]) };
          this.acroField.setOptions(n.concat(r));
        }),
        (r.prototype.select = function (t, e) {
          void 0 === e && (e = !1),
            Dn(t, "options", ["string", Array]),
            Dn(e, "merge", ["boolean"]);
          var n = Array.isArray(t) ? t : [t],
            r = this.getOptions();
          Pn(n, "option", r),
            this.markAsDirty(),
            (n.length > 1 || (1 === n.length && e)) && this.enableMultiselect();
          for (var i = new Array(n.length), o = 0, a = n.length; o < a; o++)
            i[o] = Yo.fromText(n[o]);
          if (e) {
            var s = this.acroField.getValues();
            this.acroField.setValues(s.concat(i));
          } else this.acroField.setValues(i);
        }),
        (r.prototype.clear = function () {
          this.markAsDirty(), this.acroField.setValues([]);
        }),
        (r.prototype.setFontSize = function (t) {
          Un(t, "fontSize"), this.acroField.setFontSize(t), this.markAsDirty();
        }),
        (r.prototype.isSorted = function () {
          return this.acroField.hasFlag(t.AcroChoiceFlags.Sort);
        }),
        (r.prototype.enableSorting = function () {
          this.acroField.setFlagTo(t.AcroChoiceFlags.Sort, !0);
        }),
        (r.prototype.disableSorting = function () {
          this.acroField.setFlagTo(t.AcroChoiceFlags.Sort, !1);
        }),
        (r.prototype.isMultiselect = function () {
          return this.acroField.hasFlag(t.AcroChoiceFlags.MultiSelect);
        }),
        (r.prototype.enableMultiselect = function () {
          this.acroField.setFlagTo(t.AcroChoiceFlags.MultiSelect, !0);
        }),
        (r.prototype.disableMultiselect = function () {
          this.acroField.setFlagTo(t.AcroChoiceFlags.MultiSelect, !1);
        }),
        (r.prototype.isSelectOnClick = function () {
          return this.acroField.hasFlag(t.AcroChoiceFlags.CommitOnSelChange);
        }),
        (r.prototype.enableSelectOnClick = function () {
          this.acroField.setFlagTo(t.AcroChoiceFlags.CommitOnSelChange, !0);
        }),
        (r.prototype.disableSelectOnClick = function () {
          this.acroField.setFlagTo(t.AcroChoiceFlags.CommitOnSelChange, !1);
        }),
        (r.prototype.addToPage = function (t, e) {
          var n, r, i, o, a, s, l;
          Dn(t, "page", [[Cd, "PDFPage"]]),
            od(e),
            e || (e = {}),
            "textColor" in e || (e.textColor = Uu(0, 0, 0)),
            "backgroundColor" in e || (e.backgroundColor = Uu(1, 1, 1)),
            "borderColor" in e || (e.borderColor = Uu(0, 0, 0)),
            "borderWidth" in e || (e.borderWidth = 1);
          var h = this.createWidget({
              x: null !== (n = e.x) && void 0 !== n ? n : 0,
              y: null !== (r = e.y) && void 0 !== r ? r : 0,
              width: null !== (i = e.width) && void 0 !== i ? i : 200,
              height: null !== (o = e.height) && void 0 !== o ? o : 100,
              textColor: e.textColor,
              backgroundColor: e.backgroundColor,
              borderColor: e.borderColor,
              borderWidth: null !== (a = e.borderWidth) && void 0 !== a ? a : 0,
              rotate: null !== (s = e.rotate) && void 0 !== s ? s : Eh(0),
              hidden: e.hidden,
            }),
            u = this.doc.context.register(h.dict);
          this.acroField.addWidget(u);
          var c =
            null !== (l = e.font) && void 0 !== l
              ? l
              : this.doc.getForm().getDefaultFont();
          this.updateWidgetAppearance(h, c), t.node.addAnnot(u);
        }),
        (r.prototype.needsAppearancesUpdate = function () {
          var t;
          if (this.isDirty()) return !0;
          for (
            var e = this.acroField.getWidgets(), n = 0, r = e.length;
            n < r;
            n++
          ) {
            if (
              !(
                (null === (t = e[n].getAppearances()) || void 0 === t
                  ? void 0
                  : t.normal) instanceof To
              )
            )
              return !0;
          }
          return !1;
        }),
        (r.prototype.defaultUpdateAppearances = function (t) {
          Dn(t, "font", [[nd, "PDFFont"]]), this.updateAppearances(t);
        }),
        (r.prototype.updateAppearances = function (t, e) {
          Dn(t, "font", [[nd, "PDFFont"]]), Bn(e, "provider", [Function]);
          for (
            var n = this.acroField.getWidgets(), r = 0, i = n.length;
            r < i;
            r++
          ) {
            var o = n[r];
            this.updateWidgetAppearance(o, t, e);
          }
          this.markAsClean();
        }),
        (r.prototype.updateWidgetAppearance = function (t, e, n) {
          var r = Lc((null != n ? n : td)(this, t, e));
          this.updateWidgetAppearanceWithFont(t, e, r);
        }),
        (r.of = function (t, e, n) {
          return new r(t, e, n);
        }),
        r
      );
    })(ad),
    ud = (function (e) {
      function r(t, n, r) {
        var i = e.call(this, t, n, r) || this;
        return (
          Dn(t, "acroRadioButton", [[Yl, "PDFAcroRadioButton"]]),
          (i.acroField = t),
          i
        );
      }
      return (
        n(r, e),
        (r.prototype.getOptions = function () {
          var t = this.acroField.getExportValues();
          if (t) {
            for (var e = new Array(t.length), n = 0, r = t.length; n < r; n++)
              e[n] = t[n].decodeText();
            return e;
          }
          var i = this.acroField.getOnValues(),
            o = new Array(i.length);
          for (n = 0, r = o.length; n < r; n++) o[n] = i[n].decodeText();
          return o;
        }),
        (r.prototype.getSelected = function () {
          var t = this.acroField.getValue();
          if (t !== Ao.of("Off")) {
            var e = this.acroField.getExportValues();
            if (e)
              for (
                var n = this.acroField.getOnValues(), r = 0, i = n.length;
                r < i;
                r++
              )
                if (n[r] === t) return e[r].decodeText();
            return t.decodeText();
          }
        }),
        (r.prototype.select = function (t) {
          Dn(t, "option", ["string"]);
          var e = this.getOptions();
          An(t, "option", e), this.markAsDirty();
          var n = this.acroField.getOnValues(),
            r = this.acroField.getExportValues();
          if (r)
            for (var i = 0, o = r.length; i < o; i++)
              r[i].decodeText() === t && this.acroField.setValue(n[i]);
          else
            for (i = 0, o = n.length; i < o; i++) {
              var a = n[i];
              a.decodeText() === t && this.acroField.setValue(a);
            }
        }),
        (r.prototype.clear = function () {
          this.markAsDirty(), this.acroField.setValue(Ao.of("Off"));
        }),
        (r.prototype.isOffToggleable = function () {
          return !this.acroField.hasFlag(t.AcroButtonFlags.NoToggleToOff);
        }),
        (r.prototype.enableOffToggling = function () {
          this.acroField.setFlagTo(t.AcroButtonFlags.NoToggleToOff, !1);
        }),
        (r.prototype.disableOffToggling = function () {
          this.acroField.setFlagTo(t.AcroButtonFlags.NoToggleToOff, !0);
        }),
        (r.prototype.isMutuallyExclusive = function () {
          return !this.acroField.hasFlag(t.AcroButtonFlags.RadiosInUnison);
        }),
        (r.prototype.enableMutualExclusion = function () {
          this.acroField.setFlagTo(t.AcroButtonFlags.RadiosInUnison, !1);
        }),
        (r.prototype.disableMutualExclusion = function () {
          this.acroField.setFlagTo(t.AcroButtonFlags.RadiosInUnison, !0);
        }),
        (r.prototype.addOptionToPage = function (t, e, n) {
          var r, i, o, a, s, l, h, u, c;
          Dn(t, "option", ["string"]), Dn(e, "page", [[Cd, "PDFPage"]]), od(n);
          var d = this.createWidget({
              x:
                null !== (r = null == n ? void 0 : n.x) && void 0 !== r ? r : 0,
              y:
                null !== (i = null == n ? void 0 : n.y) && void 0 !== i ? i : 0,
              width:
                null !== (o = null == n ? void 0 : n.width) && void 0 !== o
                  ? o
                  : 50,
              height:
                null !== (a = null == n ? void 0 : n.height) && void 0 !== a
                  ? a
                  : 50,
              textColor:
                null !== (s = null == n ? void 0 : n.textColor) && void 0 !== s
                  ? s
                  : Uu(0, 0, 0),
              backgroundColor:
                null !== (l = null == n ? void 0 : n.backgroundColor) &&
                void 0 !== l
                  ? l
                  : Uu(1, 1, 1),
              borderColor:
                null !== (h = null == n ? void 0 : n.borderColor) &&
                void 0 !== h
                  ? h
                  : Uu(0, 0, 0),
              borderWidth:
                null !== (u = null == n ? void 0 : n.borderWidth) &&
                void 0 !== u
                  ? u
                  : 1,
              rotate:
                null !== (c = null == n ? void 0 : n.rotate) && void 0 !== c
                  ? c
                  : Eh(0),
              hidden: null == n ? void 0 : n.hidden,
            }),
            f = this.doc.context.register(d.dict),
            p = this.acroField.addWidgetWithOpt(
              f,
              Yo.fromText(t),
              !this.isMutuallyExclusive()
            );
          d.setAppearanceState(Ao.of("Off")),
            this.updateWidgetAppearance(d, p),
            e.node.addAnnot(f);
        }),
        (r.prototype.needsAppearancesUpdate = function () {
          for (
            var t, e = this.acroField.getWidgets(), n = 0, r = e.length;
            n < r;
            n++
          ) {
            var i = e[n],
              o = i.getAppearanceState(),
              a =
                null === (t = i.getAppearances()) || void 0 === t
                  ? void 0
                  : t.normal;
            if (!(a instanceof mo)) return !0;
            if (o && !a.has(o)) return !0;
          }
          return !1;
        }),
        (r.prototype.defaultUpdateAppearances = function () {
          this.updateAppearances();
        }),
        (r.prototype.updateAppearances = function (t) {
          Bn(t, "provider", [Function]);
          for (
            var e = this.acroField.getWidgets(), n = 0, r = e.length;
            n < r;
            n++
          ) {
            var i = e[n],
              o = i.getOnValue();
            o && this.updateWidgetAppearance(i, o, t);
          }
        }),
        (r.prototype.updateWidgetAppearance = function (t, e, n) {
          var r = Lc((null != n ? n : Yc)(this, t));
          this.updateOnOffWidgetAppearance(t, e, r);
        }),
        (r.of = function (t, e, n) {
          return new r(t, e, n);
        }),
        r
      );
    })(ad),
    cd = (function (t) {
      function e(e, n, r) {
        var i = t.call(this, e, n, r) || this;
        return (
          Dn(e, "acroSignature", [[_l, "PDFAcroSignature"]]),
          (i.acroField = e),
          i
        );
      }
      return (
        n(e, t),
        (e.prototype.needsAppearancesUpdate = function () {
          return !1;
        }),
        (e.of = function (t, n, r) {
          return new e(t, n, r);
        }),
        e
      );
    })(ad),
    dd = (function (e) {
      function r(t, n, r) {
        var i = e.call(this, t, n, r) || this;
        return Dn(t, "acroText", [[Xl, "PDFAcroText"]]), (i.acroField = t), i;
      }
      return (
        n(r, e),
        (r.prototype.getText = function () {
          var t = this.acroField.getValue();
          if (!t && this.isRichFormatted()) throw new Bc(this.getName());
          return null == t ? void 0 : t.decodeText();
        }),
        (r.prototype.setText = function (t) {
          Bn(t, "text", ["string"]);
          var e = this.getMaxLength();
          if (void 0 !== e && t && t.length > e)
            throw new Ec(t.length, e, this.getName());
          this.markAsDirty(),
            this.disableRichFormatting(),
            t
              ? this.acroField.setValue(Yo.fromText(t))
              : this.acroField.removeValue();
        }),
        (r.prototype.getAlignment = function () {
          var e = this.acroField.getQuadding();
          return 0 === e
            ? t.TextAlignment.Left
            : 1 === e
            ? t.TextAlignment.Center
            : 2 === e
            ? t.TextAlignment.Right
            : t.TextAlignment.Left;
        }),
        (r.prototype.setAlignment = function (e) {
          An(e, "alignment", t.TextAlignment),
            this.markAsDirty(),
            this.acroField.setQuadding(e);
        }),
        (r.prototype.getMaxLength = function () {
          return this.acroField.getMaxLength();
        }),
        (r.prototype.setMaxLength = function (t) {
          if (
            (jn(t, "maxLength", 0, Number.MAX_SAFE_INTEGER),
            this.markAsDirty(),
            void 0 === t)
          )
            this.acroField.removeMaxLength();
          else {
            var e = this.getText();
            if (e && e.length > t) throw new jc(e.length, t, this.getName());
            this.acroField.setMaxLength(t);
          }
        }),
        (r.prototype.removeMaxLength = function () {
          this.markAsDirty(), this.acroField.removeMaxLength();
        }),
        (r.prototype.setImage = function (e) {
          for (
            var n = this.getAlignment(),
              r =
                n === t.TextAlignment.Center
                  ? Mc.Center
                  : n === t.TextAlignment.Right
                  ? Mc.Right
                  : Mc.Left,
              i = this.acroField.getWidgets(),
              o = 0,
              a = i.length;
            o < a;
            o++
          ) {
            var s = i[o],
              l = this.createImageAppearanceStream(s, e, r);
            this.updateWidgetAppearances(s, { normal: l });
          }
          this.markAsClean();
        }),
        (r.prototype.setFontSize = function (t) {
          Un(t, "fontSize"), this.acroField.setFontSize(t), this.markAsDirty();
        }),
        (r.prototype.isMultiline = function () {
          return this.acroField.hasFlag(t.AcroTextFlags.Multiline);
        }),
        (r.prototype.enableMultiline = function () {
          this.markAsDirty(),
            this.acroField.setFlagTo(t.AcroTextFlags.Multiline, !0);
        }),
        (r.prototype.disableMultiline = function () {
          this.markAsDirty(),
            this.acroField.setFlagTo(t.AcroTextFlags.Multiline, !1);
        }),
        (r.prototype.isPassword = function () {
          return this.acroField.hasFlag(t.AcroTextFlags.Password);
        }),
        (r.prototype.enablePassword = function () {
          this.acroField.setFlagTo(t.AcroTextFlags.Password, !0);
        }),
        (r.prototype.disablePassword = function () {
          this.acroField.setFlagTo(t.AcroTextFlags.Password, !1);
        }),
        (r.prototype.isFileSelector = function () {
          return this.acroField.hasFlag(t.AcroTextFlags.FileSelect);
        }),
        (r.prototype.enableFileSelection = function () {
          this.acroField.setFlagTo(t.AcroTextFlags.FileSelect, !0);
        }),
        (r.prototype.disableFileSelection = function () {
          this.acroField.setFlagTo(t.AcroTextFlags.FileSelect, !1);
        }),
        (r.prototype.isSpellChecked = function () {
          return !this.acroField.hasFlag(t.AcroTextFlags.DoNotSpellCheck);
        }),
        (r.prototype.enableSpellChecking = function () {
          this.acroField.setFlagTo(t.AcroTextFlags.DoNotSpellCheck, !1);
        }),
        (r.prototype.disableSpellChecking = function () {
          this.acroField.setFlagTo(t.AcroTextFlags.DoNotSpellCheck, !0);
        }),
        (r.prototype.isScrollable = function () {
          return !this.acroField.hasFlag(t.AcroTextFlags.DoNotScroll);
        }),
        (r.prototype.enableScrolling = function () {
          this.acroField.setFlagTo(t.AcroTextFlags.DoNotScroll, !1);
        }),
        (r.prototype.disableScrolling = function () {
          this.acroField.setFlagTo(t.AcroTextFlags.DoNotScroll, !0);
        }),
        (r.prototype.isCombed = function () {
          return (
            this.acroField.hasFlag(t.AcroTextFlags.Comb) &&
            !this.isMultiline() &&
            !this.isPassword() &&
            !this.isFileSelector() &&
            void 0 !== this.getMaxLength()
          );
        }),
        (r.prototype.enableCombing = function () {
          if (void 0 === this.getMaxLength()) {
            console.warn(
              "PDFTextFields must have a max length in order to be combed"
            );
          }
          this.markAsDirty(),
            this.disableMultiline(),
            this.disablePassword(),
            this.disableFileSelection(),
            this.acroField.setFlagTo(t.AcroTextFlags.Comb, !0);
        }),
        (r.prototype.disableCombing = function () {
          this.markAsDirty(),
            this.acroField.setFlagTo(t.AcroTextFlags.Comb, !1);
        }),
        (r.prototype.isRichFormatted = function () {
          return this.acroField.hasFlag(t.AcroTextFlags.RichText);
        }),
        (r.prototype.enableRichFormatting = function () {
          this.acroField.setFlagTo(t.AcroTextFlags.RichText, !0);
        }),
        (r.prototype.disableRichFormatting = function () {
          this.acroField.setFlagTo(t.AcroTextFlags.RichText, !1);
        }),
        (r.prototype.addToPage = function (t, e) {
          var n, r, i, o, a, s, l;
          Dn(t, "page", [[Cd, "PDFPage"]]),
            od(e),
            e || (e = {}),
            "textColor" in e || (e.textColor = Uu(0, 0, 0)),
            "backgroundColor" in e || (e.backgroundColor = Uu(1, 1, 1)),
            "borderColor" in e || (e.borderColor = Uu(0, 0, 0)),
            "borderWidth" in e || (e.borderWidth = 1);
          var h = this.createWidget({
              x: null !== (n = e.x) && void 0 !== n ? n : 0,
              y: null !== (r = e.y) && void 0 !== r ? r : 0,
              width: null !== (i = e.width) && void 0 !== i ? i : 200,
              height: null !== (o = e.height) && void 0 !== o ? o : 50,
              textColor: e.textColor,
              backgroundColor: e.backgroundColor,
              borderColor: e.borderColor,
              borderWidth: null !== (a = e.borderWidth) && void 0 !== a ? a : 0,
              rotate: null !== (s = e.rotate) && void 0 !== s ? s : Eh(0),
              hidden: e.hidden,
            }),
            u = this.doc.context.register(h.dict);
          this.acroField.addWidget(u);
          var c =
            null !== (l = e.font) && void 0 !== l
              ? l
              : this.doc.getForm().getDefaultFont();
          this.updateWidgetAppearance(h, c), t.node.addAnnot(u);
        }),
        (r.prototype.needsAppearancesUpdate = function () {
          var t;
          if (this.isDirty()) return !0;
          for (
            var e = this.acroField.getWidgets(), n = 0, r = e.length;
            n < r;
            n++
          ) {
            if (
              !(
                (null === (t = e[n].getAppearances()) || void 0 === t
                  ? void 0
                  : t.normal) instanceof To
              )
            )
              return !0;
          }
          return !1;
        }),
        (r.prototype.defaultUpdateAppearances = function (t) {
          Dn(t, "font", [[nd, "PDFFont"]]), this.updateAppearances(t);
        }),
        (r.prototype.updateAppearances = function (t, e) {
          Dn(t, "font", [[nd, "PDFFont"]]), Bn(e, "provider", [Function]);
          for (
            var n = this.acroField.getWidgets(), r = 0, i = n.length;
            r < i;
            r++
          ) {
            var o = n[r];
            this.updateWidgetAppearance(o, t, e);
          }
          this.markAsClean();
        }),
        (r.prototype.updateWidgetAppearance = function (t, e, n) {
          var r = Lc((null != n ? n : Qc)(this, t, e));
          this.updateWidgetAppearanceWithFont(t, e, r);
        }),
        (r.of = function (t, e, n) {
          return new r(t, e, n);
        }),
        r
      );
    })(ad);
  ((id = t.StandardFonts || (t.StandardFonts = {})).Courier = "Courier"),
    (id.CourierBold = "Courier-Bold"),
    (id.CourierOblique = "Courier-Oblique"),
    (id.CourierBoldOblique = "Courier-BoldOblique"),
    (id.Helvetica = "Helvetica"),
    (id.HelveticaBold = "Helvetica-Bold"),
    (id.HelveticaOblique = "Helvetica-Oblique"),
    (id.HelveticaBoldOblique = "Helvetica-BoldOblique"),
    (id.TimesRoman = "Times-Roman"),
    (id.TimesRomanBold = "Times-Bold"),
    (id.TimesRomanItalic = "Times-Italic"),
    (id.TimesRomanBoldItalic = "Times-BoldItalic"),
    (id.Symbol = "Symbol"),
    (id.ZapfDingbats = "ZapfDingbats");
  var fd,
    pd = (function () {
      function e(e, n) {
        var r = this;
        (this.embedDefaultFont = function () {
          return r.doc.embedStandardFont(t.StandardFonts.Helvetica);
        }),
          Dn(e, "acroForm", [[sh, "PDFAcroForm"]]),
          Dn(n, "doc", [[Fd, "PDFDocument"]]),
          (this.acroForm = e),
          (this.doc = n),
          (this.dirtyFields = new Set()),
          (this.defaultFontCache = Kn.populatedBy(this.embedDefaultFont));
      }
      return (
        (e.prototype.hasXFA = function () {
          return this.acroForm.dict.has(Ao.of("XFA"));
        }),
        (e.prototype.deleteXFA = function () {
          this.acroForm.dict.delete(Ao.of("XFA"));
        }),
        (e.prototype.getFields = function () {
          for (
            var t = this.acroForm.getAllFields(), e = [], n = 0, r = t.length;
            n < r;
            n++
          ) {
            var i = t[n],
              o = i[0],
              a = i[1],
              s = gd(o, a, this.doc);
            s && e.push(s);
          }
          return e;
        }),
        (e.prototype.getFieldMaybe = function (t) {
          Dn(t, "name", ["string"]);
          for (var e = this.getFields(), n = 0, r = e.length; n < r; n++) {
            var i = e[n];
            if (i.getName() === t) return i;
          }
        }),
        (e.prototype.getField = function (t) {
          Dn(t, "name", ["string"]);
          var e = this.getFieldMaybe(t);
          if (e) return e;
          throw new Tc(t);
        }),
        (e.prototype.getButton = function (t) {
          Dn(t, "name", ["string"]);
          var e = this.getField(t);
          if (e instanceof Ad) return e;
          throw new Pc(t, Ad, e);
        }),
        (e.prototype.getCheckBox = function (t) {
          Dn(t, "name", ["string"]);
          var e = this.getField(t);
          if (e instanceof sd) return e;
          throw new Pc(t, sd, e);
        }),
        (e.prototype.getDropdown = function (t) {
          Dn(t, "name", ["string"]);
          var e = this.getField(t);
          if (e instanceof ld) return e;
          throw new Pc(t, ld, e);
        }),
        (e.prototype.getOptionList = function (t) {
          Dn(t, "name", ["string"]);
          var e = this.getField(t);
          if (e instanceof hd) return e;
          throw new Pc(t, hd, e);
        }),
        (e.prototype.getRadioGroup = function (t) {
          Dn(t, "name", ["string"]);
          var e = this.getField(t);
          if (e instanceof ud) return e;
          throw new Pc(t, ud, e);
        }),
        (e.prototype.getSignature = function (t) {
          Dn(t, "name", ["string"]);
          var e = this.getField(t);
          if (e instanceof cd) return e;
          throw new Pc(t, cd, e);
        }),
        (e.prototype.getTextField = function (t) {
          Dn(t, "name", ["string"]);
          var e = this.getField(t);
          if (e instanceof dd) return e;
          throw new Pc(t, dd, e);
        }),
        (e.prototype.createButton = function (t) {
          Dn(t, "name", ["string"]);
          var e = vd(t),
            n = this.findOrCreateNonTerminals(e.nonTerminal),
            r = Zl.create(this.doc.context);
          return (
            r.setPartialName(e.terminal),
            yd(n, [r, r.ref], e.terminal),
            Ad.of(r, r.ref, this.doc)
          );
        }),
        (e.prototype.createCheckBox = function (t) {
          Dn(t, "name", ["string"]);
          var e = vd(t),
            n = this.findOrCreateNonTerminals(e.nonTerminal),
            r = ql.create(this.doc.context);
          return (
            r.setPartialName(e.terminal),
            yd(n, [r, r.ref], e.terminal),
            sd.of(r, r.ref, this.doc)
          );
        }),
        (e.prototype.createDropdown = function (t) {
          Dn(t, "name", ["string"]);
          var e = vd(t),
            n = this.findOrCreateNonTerminals(e.nonTerminal),
            r = Gl.create(this.doc.context);
          return (
            r.setPartialName(e.terminal),
            yd(n, [r, r.ref], e.terminal),
            ld.of(r, r.ref, this.doc)
          );
        }),
        (e.prototype.createOptionList = function (t) {
          Dn(t, "name", ["string"]);
          var e = vd(t),
            n = this.findOrCreateNonTerminals(e.nonTerminal),
            r = Jl.create(this.doc.context);
          return (
            r.setPartialName(e.terminal),
            yd(n, [r, r.ref], e.terminal),
            hd.of(r, r.ref, this.doc)
          );
        }),
        (e.prototype.createRadioGroup = function (t) {
          Dn(t, "name", ["string"]);
          var e = vd(t),
            n = this.findOrCreateNonTerminals(e.nonTerminal),
            r = Yl.create(this.doc.context);
          return (
            r.setPartialName(e.terminal),
            yd(n, [r, r.ref], e.terminal),
            ud.of(r, r.ref, this.doc)
          );
        }),
        (e.prototype.createTextField = function (t) {
          Dn(t, "name", ["string"]);
          var e = vd(t),
            n = this.findOrCreateNonTerminals(e.nonTerminal),
            r = Xl.create(this.doc.context);
          return (
            r.setPartialName(e.terminal),
            yd(n, [r, r.ref], e.terminal),
            dd.of(r, r.ref, this.doc)
          );
        }),
        (e.prototype.flatten = function (t) {
          void 0 === t && (t = { updateFieldAppearances: !0 }),
            t.updateFieldAppearances && this.updateFieldAppearances();
          for (var e = this.getFields(), n = 0, i = e.length; n < i; n++) {
            for (
              var o = e[n], s = o.acroField.getWidgets(), l = 0, h = s.length;
              l < h;
              l++
            ) {
              var u = s[l],
                c = this.findWidgetPage(u),
                d = this.findWidgetAppearanceRef(o, u),
                f = F("FlatWidget", 10);
              c.node.setXObject(Ao.of(f), d);
              var p = u.getRectangle(),
                g = a([au(), Yh(p.x, p.y)], vc(r(r({}, p), { rotation: 0 })), [
                  Pu(f),
                  su(),
                ]).filter(Boolean);
              c.pushOperators.apply(c, g);
            }
            this.removeField(o);
          }
        }),
        (e.prototype.removeField = function (t) {
          for (
            var e = t.acroField.getWidgets(),
              n = new Set(),
              r = 0,
              i = e.length;
            r < i;
            r++
          ) {
            var o = e[r],
              a = this.findWidgetAppearanceRef(t, o),
              s = this.findWidgetPage(o);
            n.add(s), s.node.removeAnnot(a);
          }
          n.forEach(function (e) {
            return e.node.removeAnnot(t.ref);
          }),
            this.acroForm.removeField(t.acroField),
            this.doc.context.delete(t.ref);
        }),
        (e.prototype.updateFieldAppearances = function (t) {
          Bn(t, "font", [[nd, "PDFFont"]]),
            (t = null != t ? t : this.getDefaultFont());
          for (var e = this.getFields(), n = 0, r = e.length; n < r; n++) {
            var i = e[n];
            i.needsAppearancesUpdate() && i.defaultUpdateAppearances(t);
          }
        }),
        (e.prototype.markFieldAsDirty = function (t) {
          Bn(t, "fieldRef", [[Oo, "PDFRef"]]), this.dirtyFields.add(t);
        }),
        (e.prototype.markFieldAsClean = function (t) {
          Bn(t, "fieldRef", [[Oo, "PDFRef"]]), this.dirtyFields.delete(t);
        }),
        (e.prototype.fieldIsDirty = function (t) {
          return Bn(t, "fieldRef", [[Oo, "PDFRef"]]), this.dirtyFields.has(t);
        }),
        (e.prototype.getDefaultFont = function () {
          return this.defaultFontCache.access();
        }),
        (e.prototype.findWidgetPage = function (t) {
          var e = t.P(),
            n = this.doc.getPages().find(function (t) {
              return t.ref === e;
            });
          if (void 0 === n) {
            var r = this.doc.context.getObjectRef(t.dict);
            if (void 0 === r)
              throw new Error("Could not find PDFRef for PDFObject");
            if (void 0 === (n = this.doc.findPageForAnnotationRef(r)))
              throw new Error("Could not find page for PDFRef " + r);
          }
          return n;
        }),
        (e.prototype.findWidgetAppearanceRef = function (t, e) {
          var n,
            r = e.getNormalAppearance();
          if (r instanceof mo && (t instanceof sd || t instanceof ud)) {
            var i = t.acroField.getValue(),
              o =
                null !== (n = r.get(i)) && void 0 !== n
                  ? n
                  : r.get(Ao.of("Off"));
            o instanceof Oo && (r = o);
          }
          if (!(r instanceof Oo)) {
            var a = t.getName();
            throw new Error("Failed to extract appearance ref for: " + a);
          }
          return r;
        }),
        (e.prototype.findOrCreateNonTerminals = function (t) {
          for (var e = [this.acroForm], n = 0, r = t.length; n < r; n++) {
            var i = t[n];
            if (!i) throw new Oc(i);
            var o = e[0],
              a = e[1],
              s = this.findNonTerminal(i, o);
            if (s) e = s;
            else {
              var l = Hl.create(this.doc.context);
              l.setPartialName(i), l.setParent(a);
              var h = this.doc.context.register(l.dict);
              o.addField(h), (e = [l, h]);
            }
          }
          return e;
        }),
        (e.prototype.findNonTerminal = function (t, e) {
          for (
            var n = e instanceof sh ? this.acroForm.getFields() : Ql(e.Kids()),
              r = 0,
              i = n.length;
            r < i;
            r++
          ) {
            var o = n[r],
              a = o[0],
              s = o[1];
            if (a.getPartialName() === t) {
              if (a instanceof Hl) return [a, s];
              throw new Rc(t);
            }
          }
        }),
        (e.of = function (t, n) {
          return new e(t, n);
        }),
        e
      );
    })(),
    gd = function (t, e, n) {
      return t instanceof Zl
        ? Ad.of(t, e, n)
        : t instanceof ql
        ? sd.of(t, e, n)
        : t instanceof Gl
        ? ld.of(t, e, n)
        : t instanceof Jl
        ? hd.of(t, e, n)
        : t instanceof Xl
        ? dd.of(t, e, n)
        : t instanceof Yl
        ? ud.of(t, e, n)
        : t instanceof _l
        ? cd.of(t, e, n)
        : void 0;
    },
    vd = function (t) {
      if (0 === t.length)
        throw new Error("PDF field names must not be empty strings");
      for (var e = t.split("."), n = 0, r = e.length; n < r; n++)
        if ("" === e[n])
          throw new Error(
            'Periods in PDF field names must be separated by at least one character: "' +
              t +
              '"'
          );
      return 1 === e.length
        ? { nonTerminal: [], terminal: e[0] }
        : { nonTerminal: e.slice(0, e.length - 1), terminal: e[e.length - 1] };
    },
    yd = function (t, e, n) {
      for (
        var r = t[0],
          i = t[1],
          o = e[0],
          a = e[1],
          s = r.normalizedEntries(),
          l = Ql(("Kids" in s) ? s.Kids : s.Fields),
          h = 0,
          u = l.length;
        h < u;
        h++
      )
        if (l[h][0].getPartialName() === n) throw new Rc(n);
      r.addField(a), o.setParent(i);
    },
    md = {
      "4A0": [4767.87, 6740.79],
      "2A0": [3370.39, 4767.87],
      A0: [2383.94, 3370.39],
      A1: [1683.78, 2383.94],
      A2: [1190.55, 1683.78],
      A3: [841.89, 1190.55],
      A4: [595.28, 841.89],
      A5: [419.53, 595.28],
      A6: [297.64, 419.53],
      A7: [209.76, 297.64],
      A8: [147.4, 209.76],
      A9: [104.88, 147.4],
      A10: [73.7, 104.88],
      B0: [2834.65, 4008.19],
      B1: [2004.09, 2834.65],
      B2: [1417.32, 2004.09],
      B3: [1000.63, 1417.32],
      B4: [708.66, 1000.63],
      B5: [498.9, 708.66],
      B6: [354.33, 498.9],
      B7: [249.45, 354.33],
      B8: [175.75, 249.45],
      B9: [124.72, 175.75],
      B10: [87.87, 124.72],
      C0: [2599.37, 3676.54],
      C1: [1836.85, 2599.37],
      C2: [1298.27, 1836.85],
      C3: [918.43, 1298.27],
      C4: [649.13, 918.43],
      C5: [459.21, 649.13],
      C6: [323.15, 459.21],
      C7: [229.61, 323.15],
      C8: [161.57, 229.61],
      C9: [113.39, 161.57],
      C10: [79.37, 113.39],
      RA0: [2437.8, 3458.27],
      RA1: [1729.13, 2437.8],
      RA2: [1218.9, 1729.13],
      RA3: [864.57, 1218.9],
      RA4: [609.45, 864.57],
      SRA0: [2551.18, 3628.35],
      SRA1: [1814.17, 2551.18],
      SRA2: [1275.59, 1814.17],
      SRA3: [907.09, 1275.59],
      SRA4: [637.8, 907.09],
      Executive: [521.86, 756],
      Folio: [612, 936],
      Legal: [612, 1008],
      Letter: [612, 792],
      Tabloid: [792, 1224],
    };
  ((fd = t.ParseSpeeds || (t.ParseSpeeds = {}))[(fd.Fastest = 1 / 0)] =
    "Fastest"),
    (fd[(fd.Fast = 1500)] = "Fast"),
    (fd[(fd.Medium = 500)] = "Medium"),
    (fd[(fd.Slow = 100)] = "Slow");
  var bd,
    wd = (function () {
      function t(t, e, n) {
        (this.alreadyEmbedded = !1),
          (this.ref = t),
          (this.doc = e),
          (this.embedder = n);
      }
      return (
        (t.prototype.embed = function () {
          return i(this, void 0, void 0, function () {
            var t, e, n, r;
            return o(this, function (i) {
              switch (i.label) {
                case 0:
                  return this.alreadyEmbedded
                    ? [3, 2]
                    : [
                        4,
                        this.embedder.embedIntoContext(
                          this.doc.context,
                          this.ref
                        ),
                      ];
                case 1:
                  (t = i.sent()),
                    this.doc.catalog.has(Ao.of("Names")) ||
                      this.doc.catalog.set(
                        Ao.of("Names"),
                        this.doc.context.obj({})
                      ),
                    (e = this.doc.catalog.lookup(Ao.of("Names"), mo)).has(
                      Ao.of("EmbeddedFiles")
                    ) ||
                      e.set(Ao.of("EmbeddedFiles"), this.doc.context.obj({})),
                    (n = e.lookup(Ao.of("EmbeddedFiles"), mo)).has(
                      Ao.of("Names")
                    ) || n.set(Ao.of("Names"), this.doc.context.obj([])),
                    (r = n.lookup(Ao.of("Names"), po)).push(
                      Yo.fromText(this.embedder.fileName)
                    ),
                    r.push(t),
                    this.doc.catalog.has(Ao.of("AF")) ||
                      this.doc.catalog.set(
                        Ao.of("AF"),
                        this.doc.context.obj([])
                      ),
                    this.doc.catalog.lookup(Ao.of("AF"), po).push(t),
                    (this.alreadyEmbedded = !0),
                    (i.label = 2);
                case 2:
                  return [2];
              }
            });
          });
        }),
        (t.of = function (e, n, r) {
          return new t(e, n, r);
        }),
        t
      );
    })(),
    xd = (function () {
      function t(t, e, n) {
        (this.alreadyEmbedded = !1),
          (this.ref = t),
          (this.doc = e),
          (this.embedder = n);
      }
      return (
        (t.prototype.embed = function () {
          return i(this, void 0, void 0, function () {
            var t, e, n, r, i, a, s;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  return this.alreadyEmbedded
                    ? [3, 2]
                    : ((t = this.doc),
                      (e = t.catalog),
                      (n = t.context),
                      [
                        4,
                        this.embedder.embedIntoContext(
                          this.doc.context,
                          this.ref
                        ),
                      ]);
                case 1:
                  (r = o.sent()),
                    e.has(Ao.of("Names")) || e.set(Ao.of("Names"), n.obj({})),
                    (i = e.lookup(Ao.of("Names"), mo)).has(
                      Ao.of("JavaScript")
                    ) || i.set(Ao.of("JavaScript"), n.obj({})),
                    (a = i.lookup(Ao.of("JavaScript"), mo)).has(
                      Ao.of("Names")
                    ) || a.set(Ao.of("Names"), n.obj([])),
                    (s = a.lookup(Ao.of("Names"), po)).push(
                      Yo.fromText(this.embedder.scriptName)
                    ),
                    s.push(r),
                    (this.alreadyEmbedded = !0),
                    (o.label = 2);
                case 2:
                  return [2];
              }
            });
          });
        }),
        (t.of = function (e, n, r) {
          return new t(e, n, r);
        }),
        t
      );
    })(),
    kd = (function () {
      function t(t, e) {
        (this.script = t), (this.scriptName = e);
      }
      return (
        (t.for = function (e, n) {
          return new t(e, n);
        }),
        (t.prototype.embedIntoContext = function (t, e) {
          return i(this, void 0, void 0, function () {
            var n;
            return o(this, function (r) {
              return (
                (n = t.obj({
                  Type: "Action",
                  S: "JavaScript",
                  JS: Yo.fromText(this.script),
                })),
                e ? (t.assign(e, n), [2, e]) : [2, t.register(n)]
              );
            });
          });
        }),
        t
      );
    })(),
    Fd = (function () {
      function e(t, e, n) {
        var r = this;
        if (
          ((this.defaultWordBreaks = [" "]),
          (this.computePages = function () {
            var t = [];
            return (
              r.catalog.Pages().traverse(function (e, n) {
                if (e instanceof Uo) {
                  var i = r.pageMap.get(e);
                  i || ((i = Cd.of(e, n, r)), r.pageMap.set(e, i)), t.push(i);
                }
              }),
              t
            );
          }),
          (this.getOrCreateForm = function () {
            var t = r.catalog.getOrCreateAcroForm();
            return pd.of(t, r);
          }),
          Dn(t, "context", [[Io, "PDFContext"]]),
          Dn(e, "ignoreEncryption", ["boolean"]),
          (this.context = t),
          (this.catalog = t.lookup(t.trailerInfo.Root)),
          (this.isEncrypted = !!t.lookup(t.trailerInfo.Encrypt)),
          (this.pageCache = Kn.populatedBy(this.computePages)),
          (this.pageMap = new Map()),
          (this.formCache = Kn.populatedBy(this.getOrCreateForm)),
          (this.fonts = []),
          (this.images = []),
          (this.embeddedPages = []),
          (this.embeddedFiles = []),
          (this.javaScripts = []),
          !e && this.isEncrypted)
        )
          throw new Fc();
        n && this.updateInfoDict();
      }
      return (
        (e.load = function (n, r) {
          return (
            void 0 === r && (r = {}),
            i(this, void 0, void 0, function () {
              var i, a, s, l, h, u, c, d, f, p, g;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      (i = r.ignoreEncryption),
                      (a = void 0 !== i && i),
                      (s = r.parseSpeed),
                      (l = void 0 === s ? t.ParseSpeeds.Slow : s),
                      (h = r.throwOnInvalidObject),
                      (u = void 0 !== h && h),
                      (c = r.updateMetadata),
                      (d = void 0 === c || c),
                      (f = r.capNumbers),
                      (p = void 0 !== f && f),
                      Dn(n, "pdf", ["string", Uint8Array, ArrayBuffer]),
                      Dn(a, "ignoreEncryption", ["boolean"]),
                      Dn(l, "parseSpeed", ["number"]),
                      Dn(u, "throwOnInvalidObject", ["boolean"]),
                      (g = X(n)),
                      [4, Ph.forBytesWithOptions(g, l, u, p).parseDocument()]
                    );
                  case 1:
                    return [2, new e(o.sent(), a, d)];
                }
              });
            })
          );
        }),
        (e.create = function (t) {
          return (
            void 0 === t && (t = {}),
            i(this, void 0, void 0, function () {
              var n, r, i, a, s, l;
              return o(this, function (o) {
                return (
                  (n = t.updateMetadata),
                  (r = void 0 === n || n),
                  (i = Io.create()),
                  (a = hh.withContext(i)),
                  (s = i.register(a)),
                  (l = lh.withContextAndPages(i, s)),
                  (i.trailerInfo.Root = i.register(l)),
                  [2, new e(i, !1, r)]
                );
              });
            })
          );
        }),
        (e.prototype.registerFontkit = function (t) {
          this.fontkit = t;
        }),
        (e.prototype.getForm = function () {
          var t = this.formCache.access();
          return (
            t.hasXFA() &&
              (console.warn(
                "Removing XFA form data as pdf-lib does not support reading or writing XFA"
              ),
              t.deleteXFA()),
            t
          );
        }),
        (e.prototype.getTitle = function () {
          var t = this.getInfoDict().lookup(Ao.Title);
          if (t) return Sd(t), t.decodeText();
        }),
        (e.prototype.getAuthor = function () {
          var t = this.getInfoDict().lookup(Ao.Author);
          if (t) return Sd(t), t.decodeText();
        }),
        (e.prototype.getSubject = function () {
          var t = this.getInfoDict().lookup(Ao.Subject);
          if (t) return Sd(t), t.decodeText();
        }),
        (e.prototype.getKeywords = function () {
          var t = this.getInfoDict().lookup(Ao.Keywords);
          if (t) return Sd(t), t.decodeText();
        }),
        (e.prototype.getCreator = function () {
          var t = this.getInfoDict().lookup(Ao.Creator);
          if (t) return Sd(t), t.decodeText();
        }),
        (e.prototype.getProducer = function () {
          var t = this.getInfoDict().lookup(Ao.Producer);
          if (t) return Sd(t), t.decodeText();
        }),
        (e.prototype.getCreationDate = function () {
          var t = this.getInfoDict().lookup(Ao.CreationDate);
          if (t) return Sd(t), t.decodeDate();
        }),
        (e.prototype.getModificationDate = function () {
          var t = this.getInfoDict().lookup(Ao.ModDate);
          if (t) return Sd(t), t.decodeDate();
        }),
        (e.prototype.setTitle = function (t, e) {
          Dn(t, "title", ["string"]);
          var n = Ao.of("Title");
          (this.getInfoDict().set(n, Yo.fromText(t)),
          null == e ? void 0 : e.showInWindowTitleBar) &&
            this.catalog.getOrCreateViewerPreferences().setDisplayDocTitle(!0);
        }),
        (e.prototype.setAuthor = function (t) {
          Dn(t, "author", ["string"]);
          var e = Ao.of("Author");
          this.getInfoDict().set(e, Yo.fromText(t));
        }),
        (e.prototype.setSubject = function (t) {
          Dn(t, "author", ["string"]);
          var e = Ao.of("Subject");
          this.getInfoDict().set(e, Yo.fromText(t));
        }),
        (e.prototype.setKeywords = function (t) {
          Dn(t, "keywords", [Array]);
          var e = Ao.of("Keywords");
          this.getInfoDict().set(e, Yo.fromText(t.join(" ")));
        }),
        (e.prototype.setCreator = function (t) {
          Dn(t, "creator", ["string"]);
          var e = Ao.of("Creator");
          this.getInfoDict().set(e, Yo.fromText(t));
        }),
        (e.prototype.setProducer = function (t) {
          Dn(t, "creator", ["string"]);
          var e = Ao.of("Producer");
          this.getInfoDict().set(e, Yo.fromText(t));
        }),
        (e.prototype.setLanguage = function (t) {
          Dn(t, "language", ["string"]);
          var e = Ao.of("Lang");
          this.catalog.set(e, na.of(t));
        }),
        (e.prototype.setCreationDate = function (t) {
          Dn(t, "creationDate", [[Date, "Date"]]);
          var e = Ao.of("CreationDate");
          this.getInfoDict().set(e, na.fromDate(t));
        }),
        (e.prototype.setModificationDate = function (t) {
          Dn(t, "modificationDate", [[Date, "Date"]]);
          var e = Ao.of("ModDate");
          this.getInfoDict().set(e, na.fromDate(t));
        }),
        (e.prototype.getPageCount = function () {
          return (
            void 0 === this.pageCount &&
              (this.pageCount = this.getPages().length),
            this.pageCount
          );
        }),
        (e.prototype.getPages = function () {
          return this.pageCache.access();
        }),
        (e.prototype.getPage = function (t) {
          var e = this.getPages();
          return En(t, "index", 0, e.length - 1), e[t];
        }),
        (e.prototype.getPageIndices = function () {
          return G(0, this.getPageCount());
        }),
        (e.prototype.removePage = function (t) {
          var e = this.getPageCount();
          if (0 === this.pageCount) throw new Ac();
          En(t, "index", 0, e - 1),
            this.catalog.removeLeafNode(t),
            (this.pageCount = e - 1);
        }),
        (e.prototype.addPage = function (t) {
          return (
            Dn(t, "page", ["undefined", [Cd, "PDFPage"], Array]),
            this.insertPage(this.getPageCount(), t)
          );
        }),
        (e.prototype.insertPage = function (t, e) {
          var n = this.getPageCount();
          if (
            (En(t, "index", 0, n),
            Dn(e, "page", ["undefined", [Cd, "PDFPage"], Array]),
            !e || Array.isArray(e))
          ) {
            var r = Array.isArray(e) ? e : md.A4;
            (e = Cd.create(this)).setSize.apply(e, r);
          } else if (e.doc !== this) throw new Cc();
          var i = this.catalog.insertLeafNode(e.ref, t);
          return (
            e.node.setParent(i),
            this.pageMap.set(e.node, e),
            this.pageCache.invalidate(),
            (this.pageCount = n + 1),
            e
          );
        }),
        (e.prototype.copyPages = function (t, n) {
          return i(this, void 0, void 0, function () {
            var r, i, a, s, l, h, u, c;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    Dn(t, "srcDoc", [[e, "PDFDocument"]]),
                    Dn(n, "indices", [Array]),
                    [4, t.flush()]
                  );
                case 1:
                  for (
                    o.sent(),
                      r = Vo.for(t.context, this.context),
                      i = t.getPages(),
                      a = new Array(n.length),
                      s = 0,
                      l = n.length;
                    s < l;
                    s++
                  )
                    (h = i[n[s]]),
                      (u = r.copy(h.node)),
                      (c = this.context.register(u)),
                      (a[s] = Cd.of(u, c, this));
                  return [2, a];
              }
            });
          });
        }),
        (e.prototype.addJavaScript = function (t, e) {
          Dn(t, "name", ["string"]), Dn(e, "script", ["string"]);
          var n = kd.for(e, t),
            r = this.context.nextRef(),
            i = xd.of(r, this, n);
          this.javaScripts.push(i);
        }),
        (e.prototype.attach = function (e, n, r) {
          return (
            void 0 === r && (r = {}),
            i(this, void 0, void 0, function () {
              var i, a, s, l;
              return o(this, function (o) {
                return (
                  Dn(e, "attachment", ["string", Uint8Array, ArrayBuffer]),
                  Dn(n, "name", ["string"]),
                  Bn(r.mimeType, "mimeType", ["string"]),
                  Bn(r.description, "description", ["string"]),
                  Bn(r.creationDate, "options.creationDate", [Date]),
                  Bn(r.modificationDate, "options.modificationDate", [Date]),
                  Tn(
                    r.afRelationship,
                    "options.afRelationship",
                    t.AFRelationship
                  ),
                  (i = X(e)),
                  (a = aa.for(i, n, r)),
                  (s = this.context.nextRef()),
                  (l = wd.of(s, this, a)),
                  this.embeddedFiles.push(l),
                  [2]
                );
              });
            })
          );
        }),
        (e.prototype.embedFont = function (t, e) {
          return (
            void 0 === e && (e = {}),
            i(this, void 0, void 0, function () {
              var n, r, i, a, s, l, h, u, c, d;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      (n = e.subset),
                      (r = void 0 !== n && n),
                      (i = e.customName),
                      (a = e.features),
                      Dn(t, "font", ["string", Uint8Array, ArrayBuffer]),
                      Dn(r, "subset", ["boolean"]),
                      wn(t) ? ((s = Jo.for(t, i)), [3, 7]) : [3, 1]
                    );
                  case 1:
                    return _(t)
                      ? ((l = X(t)),
                        (h = this.assertFontkit()),
                        r ? [4, ia.for(h, l, i, a)] : [3, 3])
                      : [3, 6];
                  case 2:
                    return (u = o.sent()), [3, 5];
                  case 3:
                    return [4, ra.for(h, l, i, a)];
                  case 4:
                    (u = o.sent()), (o.label = 5);
                  case 5:
                    return (s = u), [3, 7];
                  case 6:
                    throw new TypeError(
                      "`font` must be one of `StandardFonts | string | Uint8Array | ArrayBuffer`"
                    );
                  case 7:
                    return (
                      (c = this.context.nextRef()),
                      (d = nd.of(c, this, s)),
                      this.fonts.push(d),
                      [2, d]
                    );
                }
              });
            })
          );
        }),
        (e.prototype.embedStandardFont = function (t, e) {
          if ((Dn(t, "font", ["string"]), !wn(t)))
            throw new TypeError("`font` must be one of type `StandardFonts`");
          var n = Jo.for(t, e),
            r = this.context.nextRef(),
            i = nd.of(r, this, n);
          return this.fonts.push(i), i;
        }),
        (e.prototype.embedJpg = function (t) {
          return i(this, void 0, void 0, function () {
            var e, n, r, i;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    Dn(t, "jpg", ["string", Uint8Array, ArrayBuffer]),
                    (e = X(t)),
                    [4, ha.for(e)]
                  );
                case 1:
                  return (
                    (n = o.sent()),
                    (r = this.context.nextRef()),
                    (i = rd.of(r, this, n)),
                    this.images.push(i),
                    [2, i]
                  );
              }
            });
          });
        }),
        (e.prototype.embedPng = function (t) {
          return i(this, void 0, void 0, function () {
            var e, n, r, i;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    Dn(t, "png", ["string", Uint8Array, ArrayBuffer]),
                    (e = X(t)),
                    [4, ul.for(e)]
                  );
                case 1:
                  return (
                    (n = o.sent()),
                    (r = this.context.nextRef()),
                    (i = rd.of(r, this, n)),
                    this.images.push(i),
                    [2, i]
                  );
              }
            });
          });
        }),
        (e.prototype.embedPdf = function (t, n) {
          return (
            void 0 === n && (n = [0]),
            i(this, void 0, void 0, function () {
              var r, i;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      Dn(t, "pdf", [
                        "string",
                        Uint8Array,
                        ArrayBuffer,
                        [e, "PDFDocument"],
                      ]),
                      Dn(n, "indices", [Array]),
                      t instanceof e ? ((r = t), [3, 3]) : [3, 1]
                    );
                  case 1:
                    return [4, e.load(t)];
                  case 2:
                    (r = o.sent()), (o.label = 3);
                  case 3:
                    return (i = H(r.getPages(), n)), [2, this.embedPages(i)];
                }
              });
            })
          );
        }),
        (e.prototype.embedPage = function (t, e, n) {
          return i(this, void 0, void 0, function () {
            return o(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    Dn(t, "page", [[Cd, "PDFPage"]]),
                    [4, this.embedPages([t], [e], [n])]
                  );
                case 1:
                  return [2, r.sent()[0]];
              }
            });
          });
        }),
        (e.prototype.embedPages = function (t, e, n) {
          return (
            void 0 === e && (e = []),
            void 0 === n && (n = []),
            i(this, void 0, void 0, function () {
              var r, i, a, s, l, h, u, c, d, f, p, g, v;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (0 === t.length) return [2, []];
                    for (h = 0, u = t.length - 1; h < u; h++)
                      if (
                        ((r = t[h]),
                        (i = t[h + 1]),
                        r.node.context !== i.node.context)
                      )
                        throw new $n();
                    (a = t[0].node.context),
                      (s =
                        a === this.context
                          ? function (t) {
                              return t;
                            }
                          : Vo.for(a, this.context).copy),
                      (l = new Array(t.length)),
                      (h = 0),
                      (u = t.length),
                      (o.label = 1);
                  case 1:
                    return h < u
                      ? ((c = s(t[h].node)),
                        (d = e[h]),
                        (f = n[h]),
                        [4, Tl.for(c, d, f)])
                      : [3, 4];
                  case 2:
                    (p = o.sent()),
                      (g = this.context.nextRef()),
                      (l[h] = ed.of(g, this, p)),
                      (o.label = 3);
                  case 3:
                    return h++, [3, 1];
                  case 4:
                    return (v = this.embeddedPages).push.apply(v, l), [2, l];
                }
              });
            })
          );
        }),
        (e.prototype.flush = function () {
          return i(this, void 0, void 0, function () {
            return o(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, this.embedAll(this.fonts)];
                case 1:
                  return t.sent(), [4, this.embedAll(this.images)];
                case 2:
                  return t.sent(), [4, this.embedAll(this.embeddedPages)];
                case 3:
                  return t.sent(), [4, this.embedAll(this.embeddedFiles)];
                case 4:
                  return t.sent(), [4, this.embedAll(this.javaScripts)];
                case 5:
                  return t.sent(), [2];
              }
            });
          });
        }),
        (e.prototype.save = function (t) {
          return (
            void 0 === t && (t = {}),
            i(this, void 0, void 0, function () {
              var e, n, r, i, a, s, l, h, u;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      (e = t.useObjectStreams),
                      (n = void 0 === e || e),
                      (r = t.addDefaultPage),
                      (i = void 0 === r || r),
                      (a = t.objectsPerTick),
                      (s = void 0 === a ? 50 : a),
                      (l = t.updateFieldAppearances),
                      (h = void 0 === l || l),
                      Dn(n, "useObjectStreams", ["boolean"]),
                      Dn(i, "addDefaultPage", ["boolean"]),
                      Dn(s, "objectsPerTick", ["number"]),
                      Dn(h, "updateFieldAppearances", ["boolean"]),
                      i && 0 === this.getPageCount() && this.addPage(),
                      h &&
                        (u = this.formCache.getValue()) &&
                        u.updateFieldAppearances(),
                      [4, this.flush()]
                    );
                  case 1:
                    return (
                      o.sent(),
                      [
                        2,
                        (n ? Zo : Go)
                          .forContext(this.context, s)
                          .serializeToBuffer(),
                      ]
                    );
                }
              });
            })
          );
        }),
        (e.prototype.saveAsBase64 = function (t) {
          return (
            void 0 === t && (t = {}),
            i(this, void 0, void 0, function () {
              var e, n, r, i, a;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      (e = t.dataUri),
                      (n = void 0 !== e && e),
                      (r = (function (t, e) {
                        var n = {};
                        for (var r in t)
                          Object.prototype.hasOwnProperty.call(t, r) &&
                            e.indexOf(r) < 0 &&
                            (n[r] = t[r]);
                        if (
                          null != t &&
                          "function" == typeof Object.getOwnPropertySymbols
                        ) {
                          var i = 0;
                          for (
                            r = Object.getOwnPropertySymbols(t);
                            i < r.length;
                            i++
                          )
                            e.indexOf(r[i]) < 0 &&
                              Object.prototype.propertyIsEnumerable.call(
                                t,
                                r[i]
                              ) &&
                              (n[r[i]] = t[r[i]]);
                        }
                        return n;
                      })(t, ["dataUri"])),
                      Dn(n, "dataUri", ["boolean"]),
                      [4, this.save(r)]
                    );
                  case 1:
                    return (
                      (i = o.sent()),
                      (a = c(i)),
                      [2, n ? "data:application/pdf;base64," + a : a]
                    );
                }
              });
            })
          );
        }),
        (e.prototype.findPageForAnnotationRef = function (t) {
          for (var e = this.getPages(), n = 0, r = e.length; n < r; n++) {
            var i = e[n],
              o = i.node.Annots();
            if (void 0 !== (null == o ? void 0 : o.indexOf(t))) return i;
          }
        }),
        (e.prototype.embedAll = function (t) {
          return i(this, void 0, void 0, function () {
            var e, n;
            return o(this, function (r) {
              switch (r.label) {
                case 0:
                  (e = 0), (n = t.length), (r.label = 1);
                case 1:
                  return e < n ? [4, t[e].embed()] : [3, 4];
                case 2:
                  r.sent(), (r.label = 3);
                case 3:
                  return e++, [3, 1];
                case 4:
                  return [2];
              }
            });
          });
        }),
        (e.prototype.updateInfoDict = function () {
          var t = "pdf-lib (https://github.com/Hopding/pdf-lib)",
            e = new Date(),
            n = this.getInfoDict();
          this.setProducer(t),
            this.setModificationDate(e),
            n.get(Ao.of("Creator")) || this.setCreator(t),
            n.get(Ao.of("CreationDate")) || this.setCreationDate(e);
        }),
        (e.prototype.getInfoDict = function () {
          var t = this.context.lookup(this.context.trailerInfo.Info);
          if (t instanceof mo) return t;
          var e = this.context.obj({});
          return (this.context.trailerInfo.Info = this.context.register(e)), e;
        }),
        (e.prototype.assertFontkit = function () {
          if (!this.fontkit) throw new Sc();
          return this.fontkit;
        }),
        e
      );
    })();
  function Sd(t) {
    if (!(t instanceof Yo || t instanceof na)) throw new _n([Yo, na], t);
  }
  ((bd = t.BlendMode || (t.BlendMode = {})).Normal = "Normal"),
    (bd.Multiply = "Multiply"),
    (bd.Screen = "Screen"),
    (bd.Overlay = "Overlay"),
    (bd.Darken = "Darken"),
    (bd.Lighten = "Lighten"),
    (bd.ColorDodge = "ColorDodge"),
    (bd.ColorBurn = "ColorBurn"),
    (bd.HardLight = "HardLight"),
    (bd.SoftLight = "SoftLight"),
    (bd.Difference = "Difference"),
    (bd.Exclusion = "Exclusion");
  var Cd = (function () {
      function e(t, e, n) {
        (this.fontSize = 24),
          (this.fontColor = Uu(0, 0, 0)),
          (this.lineHeight = 24),
          (this.x = 0),
          (this.y = 0),
          Dn(t, "leafNode", [[Uo, "PDFPageLeaf"]]),
          Dn(e, "ref", [[Oo, "PDFRef"]]),
          Dn(n, "doc", [[Fd, "PDFDocument"]]),
          (this.node = t),
          (this.ref = e),
          (this.doc = n);
      }
      return (
        (e.prototype.setRotation = function (t) {
          var e = Wh(t);
          Mn(e, "degreesAngle", 90),
            this.node.set(Ao.of("Rotate"), this.doc.context.obj(e));
        }),
        (e.prototype.getRotation = function () {
          var t = this.node.Rotate();
          return Eh(t ? t.asNumber() : 0);
        }),
        (e.prototype.setSize = function (t, e) {
          Dn(t, "width", ["number"]), Dn(e, "height", ["number"]);
          var n = this.getMediaBox();
          this.setMediaBox(n.x, n.y, t, e);
          var r = this.getCropBox(),
            i = this.getBleedBox(),
            o = this.getTrimBox(),
            a = this.getArtBox(),
            s = this.node.CropBox(),
            l = this.node.BleedBox(),
            h = this.node.TrimBox(),
            u = this.node.ArtBox();
          s && xn(r, n) && this.setCropBox(n.x, n.y, t, e),
            l && xn(i, n) && this.setBleedBox(n.x, n.y, t, e),
            h && xn(o, n) && this.setTrimBox(n.x, n.y, t, e),
            u && xn(a, n) && this.setArtBox(n.x, n.y, t, e);
        }),
        (e.prototype.setWidth = function (t) {
          Dn(t, "width", ["number"]), this.setSize(t, this.getSize().height);
        }),
        (e.prototype.setHeight = function (t) {
          Dn(t, "height", ["number"]), this.setSize(this.getSize().width, t);
        }),
        (e.prototype.setMediaBox = function (t, e, n, r) {
          Dn(t, "x", ["number"]),
            Dn(e, "y", ["number"]),
            Dn(n, "width", ["number"]),
            Dn(r, "height", ["number"]);
          var i = this.doc.context.obj([t, e, t + n, e + r]);
          this.node.set(Ao.MediaBox, i);
        }),
        (e.prototype.setCropBox = function (t, e, n, r) {
          Dn(t, "x", ["number"]),
            Dn(e, "y", ["number"]),
            Dn(n, "width", ["number"]),
            Dn(r, "height", ["number"]);
          var i = this.doc.context.obj([t, e, t + n, e + r]);
          this.node.set(Ao.CropBox, i);
        }),
        (e.prototype.setBleedBox = function (t, e, n, r) {
          Dn(t, "x", ["number"]),
            Dn(e, "y", ["number"]),
            Dn(n, "width", ["number"]),
            Dn(r, "height", ["number"]);
          var i = this.doc.context.obj([t, e, t + n, e + r]);
          this.node.set(Ao.BleedBox, i);
        }),
        (e.prototype.setTrimBox = function (t, e, n, r) {
          Dn(t, "x", ["number"]),
            Dn(e, "y", ["number"]),
            Dn(n, "width", ["number"]),
            Dn(r, "height", ["number"]);
          var i = this.doc.context.obj([t, e, t + n, e + r]);
          this.node.set(Ao.TrimBox, i);
        }),
        (e.prototype.setArtBox = function (t, e, n, r) {
          Dn(t, "x", ["number"]),
            Dn(e, "y", ["number"]),
            Dn(n, "width", ["number"]),
            Dn(r, "height", ["number"]);
          var i = this.doc.context.obj([t, e, t + n, e + r]);
          this.node.set(Ao.ArtBox, i);
        }),
        (e.prototype.getSize = function () {
          var t = this.getMediaBox();
          return { width: t.width, height: t.height };
        }),
        (e.prototype.getWidth = function () {
          return this.getSize().width;
        }),
        (e.prototype.getHeight = function () {
          return this.getSize().height;
        }),
        (e.prototype.getMediaBox = function () {
          return this.node.MediaBox().asRectangle();
        }),
        (e.prototype.getCropBox = function () {
          var t,
            e = this.node.CropBox();
          return null !== (t = null == e ? void 0 : e.asRectangle()) &&
            void 0 !== t
            ? t
            : this.getMediaBox();
        }),
        (e.prototype.getBleedBox = function () {
          var t,
            e = this.node.BleedBox();
          return null !== (t = null == e ? void 0 : e.asRectangle()) &&
            void 0 !== t
            ? t
            : this.getCropBox();
        }),
        (e.prototype.getTrimBox = function () {
          var t,
            e = this.node.TrimBox();
          return null !== (t = null == e ? void 0 : e.asRectangle()) &&
            void 0 !== t
            ? t
            : this.getCropBox();
        }),
        (e.prototype.getArtBox = function () {
          var t,
            e = this.node.ArtBox();
          return null !== (t = null == e ? void 0 : e.asRectangle()) &&
            void 0 !== t
            ? t
            : this.getCropBox();
        }),
        (e.prototype.translateContent = function (t, e) {
          Dn(t, "x", ["number"]),
            Dn(e, "y", ["number"]),
            this.node.normalize(),
            this.getContentStream();
          var n = this.createContentStream(au(), Yh(t, e)),
            r = this.doc.context.register(n),
            i = this.createContentStream(su()),
            o = this.doc.context.register(i);
          this.node.wrapContentStreams(r, o);
        }),
        (e.prototype.resetPosition = function () {
          this.getContentStream(!1), (this.x = 0), (this.y = 0);
        }),
        (e.prototype.setFont = function (t) {
          Dn(t, "font", [[nd, "PDFFont"]]),
            (this.font = t),
            (this.fontKey = F(this.font.name)),
            this.node.setFontDictionary(Ao.of(this.fontKey), this.font.ref);
        }),
        (e.prototype.setFontSize = function (t) {
          Dn(t, "fontSize", ["number"]), (this.fontSize = t);
        }),
        (e.prototype.setFontColor = function (t) {
          Dn(t, "fontColor", [[Object, "Color"]]), (this.fontColor = t);
        }),
        (e.prototype.setLineHeight = function (t) {
          Dn(t, "lineHeight", ["number"]), (this.lineHeight = t);
        }),
        (e.prototype.getPosition = function () {
          return { x: this.x, y: this.y };
        }),
        (e.prototype.getX = function () {
          return this.x;
        }),
        (e.prototype.getY = function () {
          return this.y;
        }),
        (e.prototype.moveTo = function (t, e) {
          Dn(t, "x", ["number"]),
            Dn(e, "y", ["number"]),
            (this.x = t),
            (this.y = e);
        }),
        (e.prototype.moveDown = function (t) {
          Dn(t, "yDecrease", ["number"]), (this.y -= t);
        }),
        (e.prototype.moveUp = function (t) {
          Dn(t, "yIncrease", ["number"]), (this.y += t);
        }),
        (e.prototype.moveLeft = function (t) {
          Dn(t, "xDecrease", ["number"]), (this.x -= t);
        }),
        (e.prototype.moveRight = function (t) {
          Dn(t, "xIncrease", ["number"]), (this.x += t);
        }),
        (e.prototype.pushOperators = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          Nn(t, "operator", [[Do, "PDFOperator"]]);
          var n = this.getContentStream();
          n.push.apply(n, t);
        }),
        (e.prototype.drawText = function (e, n) {
          var r, i, o, a, s, l, h;
          void 0 === n && (n = {}),
            Dn(e, "text", ["string"]),
            Bn(n.color, "options.color", [[Object, "Color"]]),
            jn(n.opacity, "opacity.opacity", 0, 1),
            Bn(n.font, "options.font", [[nd, "PDFFont"]]),
            Bn(n.size, "options.size", ["number"]),
            Bn(n.rotate, "options.rotate", [[Object, "Rotation"]]),
            Bn(n.xSkew, "options.xSkew", [[Object, "Rotation"]]),
            Bn(n.ySkew, "options.ySkew", [[Object, "Rotation"]]),
            Bn(n.x, "options.x", ["number"]),
            Bn(n.y, "options.y", ["number"]),
            Bn(n.lineHeight, "options.lineHeight", ["number"]),
            Bn(n.maxWidth, "options.maxWidth", ["number"]),
            Bn(n.wordBreaks, "options.wordBreaks", [Array]),
            Tn(n.blendMode, "options.blendMode", t.BlendMode);
          var u = this.getFont()[0];
          n.font && this.setFont(n.font);
          for (
            var c = this.getFont(),
              d = c[0],
              f = c[1],
              p = n.size || this.fontSize,
              g = n.wordBreaks || this.doc.defaultWordBreaks,
              v =
                void 0 === n.maxWidth
                  ? P(C(e))
                  : D(e, g, n.maxWidth, function (t) {
                      return d.widthOfTextAtSize(t, p);
                    }),
              y = new Array(v.length),
              m = 0,
              b = v.length;
            m < b;
            m++
          )
            y[m] = d.encodeText(v[m]);
          var w = this.maybeEmbedGraphicsState({
              opacity: n.opacity,
              blendMode: n.blendMode,
            }),
            x = this.getContentStream();
          x.push.apply(
            x,
            ac(y, {
              color:
                null !== (r = n.color) && void 0 !== r ? r : this.fontColor,
              font: f,
              size: p,
              rotate: null !== (i = n.rotate) && void 0 !== i ? i : Eh(0),
              xSkew: null !== (o = n.xSkew) && void 0 !== o ? o : Eh(0),
              ySkew: null !== (a = n.ySkew) && void 0 !== a ? a : Eh(0),
              x: null !== (s = n.x) && void 0 !== s ? s : this.x,
              y: null !== (l = n.y) && void 0 !== l ? l : this.y,
              lineHeight:
                null !== (h = n.lineHeight) && void 0 !== h
                  ? h
                  : this.lineHeight,
              graphicsState: w,
            })
          ),
            n.font && this.setFont(u);
        }),
        (e.prototype.drawImage = function (e, n) {
          var r, i, o, a, s, l, h;
          void 0 === n && (n = {}),
            Dn(e, "image", [[rd, "PDFImage"]]),
            Bn(n.x, "options.x", ["number"]),
            Bn(n.y, "options.y", ["number"]),
            Bn(n.width, "options.width", ["number"]),
            Bn(n.height, "options.height", ["number"]),
            Bn(n.rotate, "options.rotate", [[Object, "Rotation"]]),
            Bn(n.xSkew, "options.xSkew", [[Object, "Rotation"]]),
            Bn(n.ySkew, "options.ySkew", [[Object, "Rotation"]]),
            jn(n.opacity, "opacity.opacity", 0, 1),
            Tn(n.blendMode, "options.blendMode", t.BlendMode);
          var u = F("Image", 10);
          this.node.setXObject(Ao.of(u), e.ref);
          var c = this.maybeEmbedGraphicsState({
              opacity: n.opacity,
              blendMode: n.blendMode,
            }),
            d = this.getContentStream();
          d.push.apply(
            d,
            sc(u, {
              x: null !== (r = n.x) && void 0 !== r ? r : this.x,
              y: null !== (i = n.y) && void 0 !== i ? i : this.y,
              width:
                null !== (o = n.width) && void 0 !== o ? o : e.size().width,
              height:
                null !== (a = n.height) && void 0 !== a ? a : e.size().height,
              rotate: null !== (s = n.rotate) && void 0 !== s ? s : Eh(0),
              xSkew: null !== (l = n.xSkew) && void 0 !== l ? l : Eh(0),
              ySkew: null !== (h = n.ySkew) && void 0 !== h ? h : Eh(0),
              graphicsState: c,
            })
          );
        }),
        (e.prototype.drawPage = function (e, n) {
          var r, i, o, a, s;
          void 0 === n && (n = {}),
            Dn(e, "embeddedPage", [[ed, "PDFEmbeddedPage"]]),
            Bn(n.x, "options.x", ["number"]),
            Bn(n.y, "options.y", ["number"]),
            Bn(n.xScale, "options.xScale", ["number"]),
            Bn(n.yScale, "options.yScale", ["number"]),
            Bn(n.width, "options.width", ["number"]),
            Bn(n.height, "options.height", ["number"]),
            Bn(n.rotate, "options.rotate", [[Object, "Rotation"]]),
            Bn(n.xSkew, "options.xSkew", [[Object, "Rotation"]]),
            Bn(n.ySkew, "options.ySkew", [[Object, "Rotation"]]),
            jn(n.opacity, "opacity.opacity", 0, 1),
            Tn(n.blendMode, "options.blendMode", t.BlendMode);
          var l = F("EmbeddedPdfPage", 10);
          this.node.setXObject(Ao.of(l), e.ref);
          var h = this.maybeEmbedGraphicsState({
              opacity: n.opacity,
              blendMode: n.blendMode,
            }),
            u =
              void 0 !== n.width
                ? n.width / e.width
                : void 0 !== n.xScale
                ? n.xScale
                : 1,
            c =
              void 0 !== n.height
                ? n.height / e.height
                : void 0 !== n.yScale
                ? n.yScale
                : 1,
            d = this.getContentStream();
          d.push.apply(
            d,
            lc(l, {
              x: null !== (r = n.x) && void 0 !== r ? r : this.x,
              y: null !== (i = n.y) && void 0 !== i ? i : this.y,
              xScale: u,
              yScale: c,
              rotate: null !== (o = n.rotate) && void 0 !== o ? o : Eh(0),
              xSkew: null !== (a = n.xSkew) && void 0 !== a ? a : Eh(0),
              ySkew: null !== (s = n.ySkew) && void 0 !== s ? s : Eh(0),
              graphicsState: h,
            })
          );
        }),
        (e.prototype.drawSvgPath = function (e, n) {
          var r, i, o, a, s, l, h, u, c;
          void 0 === n && (n = {}),
            Dn(e, "path", ["string"]),
            Bn(n.x, "options.x", ["number"]),
            Bn(n.y, "options.y", ["number"]),
            Bn(n.scale, "options.scale", ["number"]),
            Bn(n.rotate, "options.rotate", [[Object, "Rotation"]]),
            Bn(n.borderWidth, "options.borderWidth", ["number"]),
            Bn(n.color, "options.color", [[Object, "Color"]]),
            jn(n.opacity, "opacity.opacity", 0, 1),
            Bn(n.borderColor, "options.borderColor", [[Object, "Color"]]),
            Bn(n.borderDashArray, "options.borderDashArray", [Array]),
            Bn(n.borderDashPhase, "options.borderDashPhase", ["number"]),
            Tn(n.borderLineCap, "options.borderLineCap", t.LineCapStyle),
            jn(n.borderOpacity, "options.borderOpacity", 0, 1),
            Tn(n.blendMode, "options.blendMode", t.BlendMode);
          var d = this.maybeEmbedGraphicsState({
            opacity: n.opacity,
            borderOpacity: n.borderOpacity,
            blendMode: n.blendMode,
          });
          "color" in n || "borderColor" in n || (n.borderColor = Uu(0, 0, 0));
          var f = this.getContentStream();
          f.push.apply(
            f,
            pc(e, {
              x: null !== (r = n.x) && void 0 !== r ? r : this.x,
              y: null !== (i = n.y) && void 0 !== i ? i : this.y,
              scale: n.scale,
              rotate: null !== (o = n.rotate) && void 0 !== o ? o : Eh(0),
              color: null !== (a = n.color) && void 0 !== a ? a : void 0,
              borderColor:
                null !== (s = n.borderColor) && void 0 !== s ? s : void 0,
              borderWidth: null !== (l = n.borderWidth) && void 0 !== l ? l : 0,
              borderDashArray:
                null !== (h = n.borderDashArray) && void 0 !== h ? h : void 0,
              borderDashPhase:
                null !== (u = n.borderDashPhase) && void 0 !== u ? u : void 0,
              borderLineCap:
                null !== (c = n.borderLineCap) && void 0 !== c ? c : void 0,
              graphicsState: d,
            })
          );
        }),
        (e.prototype.drawLine = function (e) {
          var n, r, i, o, a;
          Dn(e.start, "options.start", [[Object, "{ x: number, y: number }"]]),
            Dn(e.end, "options.end", [[Object, "{ x: number, y: number }"]]),
            Dn(e.start.x, "options.start.x", ["number"]),
            Dn(e.start.y, "options.start.y", ["number"]),
            Dn(e.end.x, "options.end.x", ["number"]),
            Dn(e.end.y, "options.end.y", ["number"]),
            Bn(e.thickness, "options.thickness", ["number"]),
            Bn(e.color, "options.color", [[Object, "Color"]]),
            Bn(e.dashArray, "options.dashArray", [Array]),
            Bn(e.dashPhase, "options.dashPhase", ["number"]),
            Tn(e.lineCap, "options.lineCap", t.LineCapStyle),
            jn(e.opacity, "opacity.opacity", 0, 1),
            Tn(e.blendMode, "options.blendMode", t.BlendMode);
          var s = this.maybeEmbedGraphicsState({
            borderOpacity: e.opacity,
            blendMode: e.blendMode,
          });
          "color" in e || (e.color = Uu(0, 0, 0));
          var l = this.getContentStream();
          l.push.apply(
            l,
            hc({
              start: e.start,
              end: e.end,
              thickness: null !== (n = e.thickness) && void 0 !== n ? n : 1,
              color: null !== (r = e.color) && void 0 !== r ? r : void 0,
              dashArray:
                null !== (i = e.dashArray) && void 0 !== i ? i : void 0,
              dashPhase:
                null !== (o = e.dashPhase) && void 0 !== o ? o : void 0,
              lineCap: null !== (a = e.lineCap) && void 0 !== a ? a : void 0,
              graphicsState: s,
            })
          );
        }),
        (e.prototype.drawRectangle = function (e) {
          var n, r, i, o, a, s, l, h, u, c, d, f, p;
          void 0 === e && (e = {}),
            Bn(e.x, "options.x", ["number"]),
            Bn(e.y, "options.y", ["number"]),
            Bn(e.width, "options.width", ["number"]),
            Bn(e.height, "options.height", ["number"]),
            Bn(e.rotate, "options.rotate", [[Object, "Rotation"]]),
            Bn(e.xSkew, "options.xSkew", [[Object, "Rotation"]]),
            Bn(e.ySkew, "options.ySkew", [[Object, "Rotation"]]),
            Bn(e.borderWidth, "options.borderWidth", ["number"]),
            Bn(e.color, "options.color", [[Object, "Color"]]),
            jn(e.opacity, "opacity.opacity", 0, 1),
            Bn(e.borderColor, "options.borderColor", [[Object, "Color"]]),
            Bn(e.borderDashArray, "options.borderDashArray", [Array]),
            Bn(e.borderDashPhase, "options.borderDashPhase", ["number"]),
            Tn(e.borderLineCap, "options.borderLineCap", t.LineCapStyle),
            jn(e.borderOpacity, "options.borderOpacity", 0, 1),
            Tn(e.blendMode, "options.blendMode", t.BlendMode);
          var g = this.maybeEmbedGraphicsState({
            opacity: e.opacity,
            borderOpacity: e.borderOpacity,
            blendMode: e.blendMode,
          });
          "color" in e || "borderColor" in e || (e.color = Uu(0, 0, 0));
          var v = this.getContentStream();
          v.push.apply(
            v,
            uc({
              x: null !== (n = e.x) && void 0 !== n ? n : this.x,
              y: null !== (r = e.y) && void 0 !== r ? r : this.y,
              width: null !== (i = e.width) && void 0 !== i ? i : 150,
              height: null !== (o = e.height) && void 0 !== o ? o : 100,
              rotate: null !== (a = e.rotate) && void 0 !== a ? a : Eh(0),
              xSkew: null !== (s = e.xSkew) && void 0 !== s ? s : Eh(0),
              ySkew: null !== (l = e.ySkew) && void 0 !== l ? l : Eh(0),
              borderWidth: null !== (h = e.borderWidth) && void 0 !== h ? h : 0,
              color: null !== (u = e.color) && void 0 !== u ? u : void 0,
              borderColor:
                null !== (c = e.borderColor) && void 0 !== c ? c : void 0,
              borderDashArray:
                null !== (d = e.borderDashArray) && void 0 !== d ? d : void 0,
              borderDashPhase:
                null !== (f = e.borderDashPhase) && void 0 !== f ? f : void 0,
              graphicsState: g,
              borderLineCap:
                null !== (p = e.borderLineCap) && void 0 !== p ? p : void 0,
            })
          );
        }),
        (e.prototype.drawSquare = function (t) {
          void 0 === t && (t = {});
          var e = t.size;
          Bn(e, "size", ["number"]),
            this.drawRectangle(r(r({}, t), { width: e, height: e }));
        }),
        (e.prototype.drawEllipse = function (e) {
          var n, r, i, o, a, s, l, h, u, c, d;
          void 0 === e && (e = {}),
            Bn(e.x, "options.x", ["number"]),
            Bn(e.y, "options.y", ["number"]),
            Bn(e.xScale, "options.xScale", ["number"]),
            Bn(e.yScale, "options.yScale", ["number"]),
            Bn(e.rotate, "options.rotate", [[Object, "Rotation"]]),
            Bn(e.color, "options.color", [[Object, "Color"]]),
            jn(e.opacity, "opacity.opacity", 0, 1),
            Bn(e.borderColor, "options.borderColor", [[Object, "Color"]]),
            jn(e.borderOpacity, "options.borderOpacity", 0, 1),
            Bn(e.borderWidth, "options.borderWidth", ["number"]),
            Bn(e.borderDashArray, "options.borderDashArray", [Array]),
            Bn(e.borderDashPhase, "options.borderDashPhase", ["number"]),
            Tn(e.borderLineCap, "options.borderLineCap", t.LineCapStyle),
            Tn(e.blendMode, "options.blendMode", t.BlendMode);
          var f = this.maybeEmbedGraphicsState({
            opacity: e.opacity,
            borderOpacity: e.borderOpacity,
            blendMode: e.blendMode,
          });
          "color" in e || "borderColor" in e || (e.color = Uu(0, 0, 0));
          var p = this.getContentStream();
          p.push.apply(
            p,
            fc({
              x: null !== (n = e.x) && void 0 !== n ? n : this.x,
              y: null !== (r = e.y) && void 0 !== r ? r : this.y,
              xScale: null !== (i = e.xScale) && void 0 !== i ? i : 100,
              yScale: null !== (o = e.yScale) && void 0 !== o ? o : 100,
              rotate: null !== (a = e.rotate) && void 0 !== a ? a : void 0,
              color: null !== (s = e.color) && void 0 !== s ? s : void 0,
              borderColor:
                null !== (l = e.borderColor) && void 0 !== l ? l : void 0,
              borderWidth: null !== (h = e.borderWidth) && void 0 !== h ? h : 0,
              borderDashArray:
                null !== (u = e.borderDashArray) && void 0 !== u ? u : void 0,
              borderDashPhase:
                null !== (c = e.borderDashPhase) && void 0 !== c ? c : void 0,
              borderLineCap:
                null !== (d = e.borderLineCap) && void 0 !== d ? d : void 0,
              graphicsState: f,
            })
          );
        }),
        (e.prototype.drawCircle = function (t) {
          void 0 === t && (t = {});
          var e = t.size,
            n = void 0 === e ? 100 : e;
          Bn(n, "size", ["number"]),
            this.drawEllipse(r(r({}, t), { xScale: n, yScale: n }));
        }),
        (e.prototype.getFont = function () {
          if (!this.font || !this.fontKey) {
            var e = this.doc.embedStandardFont(t.StandardFonts.Helvetica);
            this.setFont(e);
          }
          return [this.font, this.fontKey];
        }),
        (e.prototype.getContentStream = function (t) {
          return (
            void 0 === t && (t = !0),
            (t && this.contentStream) ||
              ((this.contentStream = this.createContentStream()),
              (this.contentStreamRef = this.doc.context.register(
                this.contentStream
              )),
              this.node.addContentStream(this.contentStreamRef)),
            this.contentStream
          );
        }),
        (e.prototype.createContentStream = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          var n = this.doc.context.obj({}),
            r = jo.of(n, t);
          return r;
        }),
        (e.prototype.maybeEmbedGraphicsState = function (t) {
          var e = t.opacity,
            n = t.borderOpacity,
            r = t.blendMode;
          if (void 0 !== e || void 0 !== n || void 0 !== r) {
            var i = F("GS", 10),
              o = this.doc.context.obj({
                Type: "ExtGState",
                ca: e,
                CA: n,
                BM: r,
              });
            return this.node.setExtGState(Ao.of(i), o), i;
          }
        }),
        (e.of = function (t, n, r) {
          return new e(t, n, r);
        }),
        (e.create = function (t) {
          Dn(t, "doc", [[Fd, "PDFDocument"]]);
          var n = Oo.of(-1),
            r = Uo.withContextAndParent(t.context, n);
          return new e(r, t.context.register(r), t);
        }),
        e
      );
    })(),
    Ad = (function (t) {
      function e(e, n, r) {
        var i = t.call(this, e, n, r) || this;
        return (
          Dn(e, "acroButton", [[Zl, "PDFAcroPushButton"]]), (i.acroField = e), i
        );
      }
      return (
        n(e, t),
        (e.prototype.setImage = function (t, e) {
          void 0 === e && (e = Mc.Center);
          for (
            var n = this.acroField.getWidgets(), r = 0, i = n.length;
            r < i;
            r++
          ) {
            var o = n[r],
              a = this.createImageAppearanceStream(o, t, e);
            this.updateWidgetAppearances(o, { normal: a });
          }
          this.markAsClean();
        }),
        (e.prototype.setFontSize = function (t) {
          Un(t, "fontSize"), this.acroField.setFontSize(t), this.markAsDirty();
        }),
        (e.prototype.addToPage = function (t, e, n) {
          var r, i, o, a, s, l, h, u, c, d, f;
          Bn(t, "text", ["string"]), Bn(e, "page", [[Cd, "PDFPage"]]), od(n);
          var p = this.createWidget({
              x:
                (null !== (r = null == n ? void 0 : n.x) && void 0 !== r
                  ? r
                  : 0) -
                (null !== (i = null == n ? void 0 : n.borderWidth) &&
                void 0 !== i
                  ? i
                  : 0) /
                  2,
              y:
                (null !== (o = null == n ? void 0 : n.y) && void 0 !== o
                  ? o
                  : 0) -
                (null !== (a = null == n ? void 0 : n.borderWidth) &&
                void 0 !== a
                  ? a
                  : 0) /
                  2,
              width:
                null !== (s = null == n ? void 0 : n.width) && void 0 !== s
                  ? s
                  : 100,
              height:
                null !== (l = null == n ? void 0 : n.height) && void 0 !== l
                  ? l
                  : 50,
              textColor:
                null !== (h = null == n ? void 0 : n.textColor) && void 0 !== h
                  ? h
                  : Uu(0, 0, 0),
              backgroundColor:
                null !== (u = null == n ? void 0 : n.backgroundColor) &&
                void 0 !== u
                  ? u
                  : Uu(0.75, 0.75, 0.75),
              borderColor: null == n ? void 0 : n.borderColor,
              borderWidth:
                null !== (c = null == n ? void 0 : n.borderWidth) &&
                void 0 !== c
                  ? c
                  : 0,
              rotate:
                null !== (d = null == n ? void 0 : n.rotate) && void 0 !== d
                  ? d
                  : Eh(0),
              caption: t,
              hidden: null == n ? void 0 : n.hidden,
            }),
            g = this.doc.context.register(p.dict);
          this.acroField.addWidget(g);
          var v =
            null !== (f = null == n ? void 0 : n.font) && void 0 !== f
              ? f
              : this.doc.getForm().getDefaultFont();
          this.updateWidgetAppearance(p, v), e.node.addAnnot(g);
        }),
        (e.prototype.needsAppearancesUpdate = function () {
          var t;
          if (this.isDirty()) return !0;
          for (
            var e = this.acroField.getWidgets(), n = 0, r = e.length;
            n < r;
            n++
          ) {
            if (
              !(
                (null === (t = e[n].getAppearances()) || void 0 === t
                  ? void 0
                  : t.normal) instanceof To
              )
            )
              return !0;
          }
          return !1;
        }),
        (e.prototype.defaultUpdateAppearances = function (t) {
          Dn(t, "font", [[nd, "PDFFont"]]), this.updateAppearances(t);
        }),
        (e.prototype.updateAppearances = function (t, e) {
          Dn(t, "font", [[nd, "PDFFont"]]), Bn(e, "provider", [Function]);
          for (
            var n = this.acroField.getWidgets(), r = 0, i = n.length;
            r < i;
            r++
          ) {
            var o = n[r];
            this.updateWidgetAppearance(o, t, e);
          }
        }),
        (e.prototype.updateWidgetAppearance = function (t, e, n) {
          var r = Lc((null != n ? n : Jc)(this, t, e));
          this.updateWidgetAppearanceWithFont(t, e, r);
        }),
        (e.of = function (t, n, r) {
          return new e(t, n, r);
        }),
        e
      );
    })(ad);
  (t.AppearanceCharacteristics = Il),
    (t.Cache = Kn),
    (t.CharCodes = br),
    (t.CombedTextLayoutError = Nc),
    (t.CorruptPageTreeError = rr),
    (t.CustomFontEmbedder = ra),
    (t.CustomFontSubsetEmbedder = ia),
    (t.EncryptedPDFError = Fc),
    (t.ExceededMaxLengthError = Ec),
    (t.FieldAlreadyExistsError = Rc),
    (t.FieldExistsAsNonTerminalError = Dc),
    (t.FileEmbedder = aa),
    (t.FontkitNotRegisteredError = Sc),
    (t.ForeignPageError = Cc),
    (t.IndexOutOfBoundsError = ir),
    (t.InvalidAcroFieldValueError = or),
    (t.InvalidFieldNamePartError = Oc),
    (t.InvalidMaxLengthError = jc),
    (t.InvalidPDFDateStringError = er),
    (t.InvalidTargetIndexError = nr),
    (t.JpegEmbedder = ha),
    (t.MethodNotImplementedError = Gn),
    (t.MissingCatalogError = Yn),
    (t.MissingDAEntryError = sr),
    (t.MissingKeywordError = mr),
    (t.MissingOnValueCheckError = zc),
    (t.MissingPDFHeaderError = yr),
    (t.MissingPageContentsEmbeddingError = Jn),
    (t.MissingTfOperatorError = lr),
    (t.MultiSelectValueError = ar),
    (t.NextByteAssertionError = cr),
    (t.NoSuchFieldError = Tc),
    (t.NumberParsingError = hr),
    (t.PDFAcroButton = Wl),
    (t.PDFAcroCheckBox = ql),
    (t.PDFAcroChoice = Kl),
    (t.PDFAcroComboBox = Gl),
    (t.PDFAcroField = El),
    (t.PDFAcroForm = sh),
    (t.PDFAcroListBox = Jl),
    (t.PDFAcroNonTerminal = Hl),
    (t.PDFAcroPushButton = Zl),
    (t.PDFAcroRadioButton = Yl),
    (t.PDFAcroSignature = _l),
    (t.PDFAcroTerminal = Vl),
    (t.PDFAcroText = Xl),
    (t.PDFAnnotation = Ml),
    (t.PDFArray = po),
    (t.PDFArrayIsNotRectangleError = tr),
    (t.PDFBool = vo),
    (t.PDFButton = Ad),
    (t.PDFCatalog = lh),
    (t.PDFCheckBox = sd),
    (t.PDFContentStream = jo),
    (t.PDFContext = Io),
    (t.PDFCrossRefSection = Wo),
    (t.PDFCrossRefStream = Xo),
    (t.PDFDict = mo),
    (t.PDFDocument = Fd),
    (t.PDFDropdown = ld),
    (t.PDFEmbeddedPage = ed),
    (t.PDFField = ad),
    (t.PDFFlateStream = Eo),
    (t.PDFFont = nd),
    (t.PDFForm = pd),
    (t.PDFHeader = uo),
    (t.PDFHexString = Yo),
    (t.PDFImage = rd),
    (t.PDFInvalidObject = Ho),
    (t.PDFInvalidObjectParsingError = fr),
    (t.PDFJavaScript = xd),
    (t.PDFName = Ao),
    (t.PDFNull = yo),
    (t.PDFNumber = fo),
    (t.PDFObject = co),
    (t.PDFObjectCopier = Vo),
    (t.PDFObjectParser = Ch),
    (t.PDFObjectParsingError = dr),
    (t.PDFObjectStream = Ko),
    (t.PDFObjectStreamParser = Ah),
    (t.PDFOperator = Do),
    (t.PDFOperatorNames = No),
    (t.PDFOptionList = hd),
    (t.PDFPage = Cd),
    (t.PDFPageEmbedder = Tl),
    (t.PDFPageLeaf = Uo),
    (t.PDFPageTree = hh),
    (t.PDFParser = Ph),
    (t.PDFParsingError = ur),
    (t.PDFRadioGroup = ud),
    (t.PDFRawStream = Po),
    (t.PDFRef = Oo),
    (t.PDFSignature = cd),
    (t.PDFStream = To),
    (t.PDFStreamParsingError = pr),
    (t.PDFStreamWriter = Zo),
    (t.PDFString = na),
    (t.PDFTextField = dd),
    (t.PDFTrailer = qo),
    (t.PDFTrailerDict = Lo),
    (t.PDFWidgetAnnotation = Ul),
    (t.PDFWriter = Go),
    (t.PDFXRefStreamParser = Th),
    (t.PageEmbeddingMismatchedContextError = $n),
    (t.PageSizes = md),
    (t.PngEmbedder = ul),
    (t.PrivateConstructorError = Hn),
    (t.RemovePageFromEmptyDocumentError = Ac),
    (t.ReparseError = Zn),
    (t.RichTextFieldReadError = Bc),
    (t.StalledParserError = vr),
    (t.StandardFontEmbedder = Jo),
    (t.StandardFontValues = bn),
    (t.UnbalancedParenthesisError = gr),
    (t.UnexpectedFieldTypeError = Pc),
    (t.UnexpectedObjectTypeError = _n),
    (t.UnrecognizedStreamTypeError = Qn),
    (t.UnsupportedEncodingError = Xn),
    (t.ViewerPreferences = Bl),
    (t.addRandomSuffix = F),
    (t.adjustDimsForRotation = Lh),
    (t.appendBezierCurve = hu),
    (t.appendQuadraticCurve = uu),
    (t.arrayAsString = V),
    (t.asNumber = Bh),
    (t.asPDFName = Oh),
    (t.asPDFNumber = Dh),
    (t.assertEachIs = Nn),
    (t.assertInteger = In),
    (t.assertIs = Dn),
    (t.assertIsOneOf = An),
    (t.assertIsOneOfOrUndefined = Tn),
    (t.assertIsSubset = Pn),
    (t.assertMultiple = Mn),
    (t.assertOrUndefined = Bn),
    (t.assertPositive = Un),
    (t.assertRange = En),
    (t.assertRangeOrUndefined = jn),
    (t.backtick = kn),
    (t.beginMarkedContent = Eu),
    (t.beginText = xu),
    (t.breakTextIntoLines = D),
    (t.byAscendingId = W),
    (t.bytesFor = dt),
    (t.canBeConvertedToUint8Array = _),
    (t.charAtIndex = R),
    (t.charFromCode = b),
    (t.charFromHexCode = w),
    (t.charSplit = O),
    (t.cleanText = C),
    (t.clip = Gh),
    (t.clipEvenOdd = function () {
      return Do.of(No.ClipEvenOdd);
    }),
    (t.closePath = cu),
    (t.cmyk = Vu),
    (t.colorToComponents = _u),
    (t.componentsToColor = Hu),
    (t.concatTransformationMatrix = Zh),
    (t.copyStringIntoBuffer = k),
    (t.createPDFAcroField = $l),
    (t.createPDFAcroFields = Ql),
    (t.createTypeErrorMsg = On),
    (t.createValueErrorMsg = Cn),
    (t.decodeFromBase64 = d),
    (t.decodeFromBase64DataUri = p),
    (t.decodePDFRawStream = Al),
    (t.defaultButtonAppearanceProvider = Jc),
    (t.defaultCheckBoxAppearanceProvider = Zc),
    (t.defaultDropdownAppearanceProvider = $c),
    (t.defaultOptionListAppearanceProvider = td),
    (t.defaultRadioGroupAppearanceProvider = Yc),
    (t.defaultTextFieldAppearanceProvider = Qc),
    (t.degrees = Eh),
    (t.degreesToRadians = Ih),
    (t.drawButton = bc),
    (t.drawCheckBox = yc),
    (t.drawCheckMark = gc),
    (t.drawEllipse = fc),
    (t.drawEllipsePath = dc),
    (t.drawImage = sc),
    (t.drawLine = hc),
    (t.drawLinesOfText = ac),
    (t.drawObject = Pu),
    (t.drawOptionList = kc),
    (t.drawPage = lc),
    (t.drawRadioButton = mc),
    (t.drawRectangle = uc),
    (t.drawSvgPath = pc),
    (t.drawText = function (t, e) {
      return [
        au(),
        e.graphicsState && ou(e.graphicsState),
        xu(),
        Ku(e.color),
        Fu(e.font, e.size),
        Tu(Vh(e.rotate), Vh(e.xSkew), Vh(e.ySkew), e.x, e.y),
        wu(t),
        ku(),
        su(),
      ].filter(Boolean);
    }),
    (t.drawTextField = xc),
    (t.drawTextLines = wc),
    (t.encodeToBase64 = c),
    (t.endMarkedContent = ju),
    (t.endPath = mu),
    (t.endText = ku),
    (t.error = ft),
    (t.escapeRegExp = S),
    (t.escapedNewlineChars = A),
    (t.fill = vu),
    (t.fillAndStroke = yu),
    (t.findLastMatch = E),
    (t.getType = zn),
    (t.grayscale = Iu),
    (t.hasSurrogates = Q),
    (t.hasUtf16BOM = ht),
    (t.highSurrogate = $),
    (t.isNewlineChar = T),
    (t.isStandardFont = wn),
    (t.isType = Rn),
    (t.isWithinBMP = J),
    (t.last = j),
    (t.layoutCombedText = Wc),
    (t.layoutMultilineText = Vc),
    (t.layoutSinglelineText = qc),
    (t.lineSplit = P),
    (t.lineTo = fu),
    (t.lowSurrogate = tt),
    (t.mergeIntoTypedArray = I),
    (t.mergeLines = z),
    (t.mergeUint8Arrays = U),
    (t.moveText = function (t, e) {
      return Do.of(No.MoveText, [Dh(t), Dh(e)]);
    }),
    (t.moveTo = du),
    (t.newlineChars = ["\n", "\f", "\r", "\v"]),
    (t.nextLine = bu),
    (t.normalizeAppearance = Lc),
    (t.numberToString = ut),
    (t.padStart = x),
    (t.parseDate = N),
    (t.pdfDocEncodingDecode = Ln),
    (t.pluckIndices = H),
    (t.popGraphicsState = su),
    (t.pushGraphicsState = au),
    (t.radians = function (e) {
      return (
        Dn(e, "radianAngle", ["number"]),
        { type: t.RotationTypes.Radians, angle: e }
      );
    }),
    (t.radiansToDegrees = Uh),
    (t.range = G),
    (t.rectangle = pu),
    (t.rectanglesAreEqual = xn),
    (t.reduceRotation = qh),
    (t.restoreDashPattern = function () {
      return eu([], 0);
    }),
    (t.reverseArray = L),
    (t.rgb = Uu),
    (t.rotateAndSkewTextDegreesAndTranslate = function (t, e, n, r, i) {
      return Tu(Ih(Bh(t)), Ih(Bh(e)), Ih(Bh(n)), r, i);
    }),
    (t.rotateAndSkewTextRadiansAndTranslate = Tu),
    (t.rotateDegrees = $h),
    (t.rotateInPlace = vc),
    (t.rotateRadians = Qh),
    (t.rotateRectangle = Kh),
    (t.scale = Jh),
    (t.setCharacterSpacing = function (t) {
      return Do.of(No.SetCharacterSpacing, [Dh(t)]);
    }),
    (t.setCharacterSqueeze = function (t) {
      return Do.of(No.SetTextHorizontalScaling, [Dh(t)]);
    }),
    (t.setDashPattern = eu),
    (t.setFillingCmykColor = Bu),
    (t.setFillingColor = Ku),
    (t.setFillingGrayscaleColor = zu),
    (t.setFillingRgbColor = Ou),
    (t.setFontAndSize = Fu),
    (t.setGraphicsState = ou),
    (t.setLineCap = ru),
    (t.setLineHeight = Su),
    (t.setLineJoin = function (t) {
      return Do.of(No.SetLineJoinStyle, [Dh(t)]);
    }),
    (t.setLineWidth = lu),
    (t.setStrokingCmykColor = Nu),
    (t.setStrokingColor = Gu),
    (t.setStrokingGrayscaleColor = Ru),
    (t.setStrokingRgbColor = Du),
    (t.setTextMatrix = Au),
    (t.setTextRenderingMode = function (t) {
      return Do.of(No.SetTextRenderingMode, [Dh(t)]);
    }),
    (t.setTextRise = function (t) {
      return Do.of(No.SetTextRise, [Dh(t)]);
    }),
    (t.setWordSpacing = function (t) {
      return Do.of(No.SetWordSpacing, [Dh(t)]);
    }),
    (t.showText = wu),
    (t.singleQuote = Fn),
    (t.sizeInBytes = ct),
    (t.skewDegrees = function (t, e) {
      return tu(Ih(Bh(t)), Ih(Bh(e)));
    }),
    (t.skewRadians = tu),
    (t.sortedUniq = q),
    (t.square = function (t, e, n) {
      return pu(t, e, n, n);
    }),
    (t.stroke = gu),
    (t.sum = K),
    (t.toCharCode = g),
    (t.toCodePoint = v),
    (t.toDegrees = Wh),
    (t.toHexString = m),
    (t.toHexStringOfMinLength = y),
    (t.toRadians = Vh),
    (t.toUint8Array = X),
    (t.translate = Yh),
    (t.typedArrayFor = M),
    (t.utf16Decode = nt),
    (t.utf16Encode = Y),
    (t.utf8Encode = function (t, e) {
      void 0 === e && (e = !0);
      var n = [];
      e && n.push(239, 187, 191);
      for (var r = 0, i = t.length; r < i; ) {
        var o = t.codePointAt(r);
        if (o < 128) {
          var a = 127 & o;
          n.push(a), (r += 1);
        } else if (o < 2048) {
          a = ((o >> 6) & 31) | 192;
          var s = (63 & o) | 128;
          n.push(a, s), (r += 1);
        } else if (o < 65536) {
          (a = ((o >> 12) & 15) | 224), (s = ((o >> 6) & 63) | 128);
          var l = (63 & o) | 128;
          n.push(a, s, l), (r += 1);
        } else {
          if (!(o < 1114112)) throw new Error("Invalid code point: 0x" + m(o));
          (a = ((o >> 18) & 7) | 240),
            (s = ((o >> 12) & 63) | 128),
            (l = ((o >> 6) & 63) | 128);
          var h = ((o >> 0) & 63) | 128;
          n.push(a, s, l, h), (r += 2);
        }
      }
      return new Uint8Array(n);
    }),
    (t.values = mn),
    (t.waitForTick = Z),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=pdf-lib.min.js.map
