!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : (e.fontkit = t());
})("undefined" != typeof self ? self : this, function () {
  var e =
      "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : {},
    t = [],
    r = [],
    n = "undefined" != typeof Uint8Array ? Uint8Array : Array,
    i = !1;
  function a() {
    i = !0;
    for (
      var e =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        n = 0,
        a = e.length;
      n < a;
      ++n
    )
      (t[n] = e[n]), (r[e.charCodeAt(n)] = n);
    (r["-".charCodeAt(0)] = 62), (r["_".charCodeAt(0)] = 63);
  }
  function o(e, r, n) {
    for (var i, a, o = [], s = r; s < n; s += 3)
      (i = (e[s] << 16) + (e[s + 1] << 8) + e[s + 2]),
        o.push(
          t[((a = i) >> 18) & 63] +
            t[(a >> 12) & 63] +
            t[(a >> 6) & 63] +
            t[63 & a]
        );
    return o.join("");
  }
  function s(e) {
    var r;
    i || a();
    for (
      var n = e.length, s = n % 3, u = "", l = [], c = 0, f = n - s;
      c < f;
      c += 16383
    )
      l.push(o(e, c, c + 16383 > f ? f : c + 16383));
    return (
      1 === s
        ? ((r = e[n - 1]),
          (u += t[r >> 2]),
          (u += t[(r << 4) & 63]),
          (u += "=="))
        : 2 === s &&
          ((r = (e[n - 2] << 8) + e[n - 1]),
          (u += t[r >> 10]),
          (u += t[(r >> 4) & 63]),
          (u += t[(r << 2) & 63]),
          (u += "=")),
      l.push(u),
      l.join("")
    );
  }
  function u(e, t, r, n, i) {
    var a,
      o,
      s = 8 * i - n - 1,
      u = (1 << s) - 1,
      l = u >> 1,
      c = -7,
      f = r ? i - 1 : 0,
      h = r ? -1 : 1,
      d = e[t + f];
    for (
      f += h, a = d & ((1 << -c) - 1), d >>= -c, c += s;
      c > 0;
      a = 256 * a + e[t + f], f += h, c -= 8
    );
    for (
      o = a & ((1 << -c) - 1), a >>= -c, c += n;
      c > 0;
      o = 256 * o + e[t + f], f += h, c -= 8
    );
    if (0 === a) a = 1 - l;
    else {
      if (a === u) return o ? NaN : (1 / 0) * (d ? -1 : 1);
      (o += Math.pow(2, n)), (a -= l);
    }
    return (d ? -1 : 1) * o * Math.pow(2, a - n);
  }
  function l(e, t, r, n, i, a) {
    var o,
      s,
      u,
      l = 8 * a - i - 1,
      c = (1 << l) - 1,
      f = c >> 1,
      h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
      d = n ? 0 : a - 1,
      p = n ? 1 : -1,
      g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
    for (
      t = Math.abs(t),
        isNaN(t) || t === 1 / 0
          ? ((s = isNaN(t) ? 1 : 0), (o = c))
          : ((o = Math.floor(Math.log(t) / Math.LN2)),
            t * (u = Math.pow(2, -o)) < 1 && (o--, (u *= 2)),
            (t += o + f >= 1 ? h / u : h * Math.pow(2, 1 - f)) * u >= 2 &&
              (o++, (u /= 2)),
            o + f >= c
              ? ((s = 0), (o = c))
              : o + f >= 1
              ? ((s = (t * u - 1) * Math.pow(2, i)), (o += f))
              : ((s = t * Math.pow(2, f - 1) * Math.pow(2, i)), (o = 0)));
      i >= 8;
      e[r + d] = 255 & s, d += p, s /= 256, i -= 8
    );
    for (
      o = (o << i) | s, l += i;
      l > 0;
      e[r + d] = 255 & o, d += p, o /= 256, l -= 8
    );
    e[r + d - p] |= 128 * g;
  }
  var c = {}.toString,
    f =
      Array.isArray ||
      function (e) {
        return "[object Array]" == c.call(e);
      };
  g.TYPED_ARRAY_SUPPORT =
    void 0 === e.TYPED_ARRAY_SUPPORT || e.TYPED_ARRAY_SUPPORT;
  var h = d();
  function d() {
    return g.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
  }
  function p(e, t) {
    if (d() < t) throw new RangeError("Invalid typed array length");
    return (
      g.TYPED_ARRAY_SUPPORT
        ? ((e = new Uint8Array(t)).__proto__ = g.prototype)
        : (null === e && (e = new g(t)), (e.length = t)),
      e
    );
  }
  function g(e, t, r) {
    if (!(g.TYPED_ARRAY_SUPPORT || this instanceof g)) return new g(e, t, r);
    if ("number" == typeof e) {
      if ("string" == typeof t)
        throw new Error(
          "If encoding is specified then the first argument must be a string"
        );
      return b(this, e);
    }
    return v(this, e, t, r);
  }
  function v(e, t, r, n) {
    if ("number" == typeof t)
      throw new TypeError('"value" argument must not be a number');
    return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
      ? (function (e, t, r, n) {
          if ((t.byteLength, r < 0 || t.byteLength < r))
            throw new RangeError("'offset' is out of bounds");
          if (t.byteLength < r + (n || 0))
            throw new RangeError("'length' is out of bounds");
          t =
            void 0 === r && void 0 === n
              ? new Uint8Array(t)
              : void 0 === n
              ? new Uint8Array(t, r)
              : new Uint8Array(t, r, n);
          g.TYPED_ARRAY_SUPPORT
            ? ((e = t).__proto__ = g.prototype)
            : (e = m(e, t));
          return e;
        })(e, t, r, n)
      : "string" == typeof t
      ? (function (e, t, r) {
          ("string" == typeof r && "" !== r) || (r = "utf8");
          if (!g.isEncoding(r))
            throw new TypeError('"encoding" must be a valid string encoding');
          var n = 0 | S(t, r),
            i = (e = p(e, n)).write(t, r);
          i !== n && (e = e.slice(0, i));
          return e;
        })(e, t, r)
      : (function (e, t) {
          if (x(t)) {
            var r = 0 | w(t.length);
            return 0 === (e = p(e, r)).length ? e : (t.copy(e, 0, 0, r), e);
          }
          if (t) {
            if (
              ("undefined" != typeof ArrayBuffer &&
                t.buffer instanceof ArrayBuffer) ||
              "length" in t
            )
              return "number" != typeof t.length || (n = t.length) != n
                ? p(e, 0)
                : m(e, t);
            if ("Buffer" === t.type && f(t.data)) return m(e, t.data);
          }
          var n;
          throw new TypeError(
            "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
          );
        })(e, t);
  }
  function y(e) {
    if ("number" != typeof e)
      throw new TypeError('"size" argument must be a number');
    if (e < 0) throw new RangeError('"size" argument must not be negative');
  }
  function b(e, t) {
    if ((y(t), (e = p(e, t < 0 ? 0 : 0 | w(t))), !g.TYPED_ARRAY_SUPPORT))
      for (var r = 0; r < t; ++r) e[r] = 0;
    return e;
  }
  function m(e, t) {
    var r = t.length < 0 ? 0 : 0 | w(t.length);
    e = p(e, r);
    for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
    return e;
  }
  function w(e) {
    if (e >= d())
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          d().toString(16) +
          " bytes"
      );
    return 0 | e;
  }
  function x(e) {
    return !(null == e || !e._isBuffer);
  }
  function S(e, t) {
    if (x(e)) return e.length;
    if (
      "undefined" != typeof ArrayBuffer &&
      "function" == typeof ArrayBuffer.isView &&
      (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
    )
      return e.byteLength;
    "string" != typeof e && (e = "" + e);
    var r = e.length;
    if (0 === r) return 0;
    for (var n = !1; ; )
      switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
          return r;
        case "utf8":
        case "utf-8":
        case void 0:
          return Z(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return 2 * r;
        case "hex":
          return r >>> 1;
        case "base64":
          return X(e).length;
        default:
          if (n) return Z(e).length;
          (t = ("" + t).toLowerCase()), (n = !0);
      }
  }
  function k(e, t, r) {
    var n = e[t];
    (e[t] = e[r]), (e[r] = n);
  }
  function A(e, t, r, n, i) {
    if (0 === e.length) return -1;
    if (
      ("string" == typeof r
        ? ((n = r), (r = 0))
        : r > 2147483647
        ? (r = 2147483647)
        : r < -2147483648 && (r = -2147483648),
      (r = +r),
      isNaN(r) && (r = i ? 0 : e.length - 1),
      r < 0 && (r = e.length + r),
      r >= e.length)
    ) {
      if (i) return -1;
      r = e.length - 1;
    } else if (r < 0) {
      if (!i) return -1;
      r = 0;
    }
    if (("string" == typeof t && (t = g.from(t, n)), x(t)))
      return 0 === t.length ? -1 : C(e, t, r, n, i);
    if ("number" == typeof t)
      return (
        (t &= 255),
        g.TYPED_ARRAY_SUPPORT &&
        "function" == typeof Uint8Array.prototype.indexOf
          ? i
            ? Uint8Array.prototype.indexOf.call(e, t, r)
            : Uint8Array.prototype.lastIndexOf.call(e, t, r)
          : C(e, [t], r, n, i)
      );
    throw new TypeError("val must be string, number or Buffer");
  }
  function C(e, t, r, n, i) {
    var a,
      o = 1,
      s = e.length,
      u = t.length;
    if (
      void 0 !== n &&
      ("ucs2" === (n = String(n).toLowerCase()) ||
        "ucs-2" === n ||
        "utf16le" === n ||
        "utf-16le" === n)
    ) {
      if (e.length < 2 || t.length < 2) return -1;
      (o = 2), (s /= 2), (u /= 2), (r /= 2);
    }
    function l(e, t) {
      return 1 === o ? e[t] : e.readUInt16BE(t * o);
    }
    if (i) {
      var c = -1;
      for (a = r; a < s; a++)
        if (l(e, a) === l(t, -1 === c ? 0 : a - c)) {
          if ((-1 === c && (c = a), a - c + 1 === u)) return c * o;
        } else -1 !== c && (a -= a - c), (c = -1);
    } else
      for (r + u > s && (r = s - u), a = r; a >= 0; a--) {
        for (var f = !0, h = 0; h < u; h++)
          if (l(e, a + h) !== l(t, h)) {
            f = !1;
            break;
          }
        if (f) return a;
      }
    return -1;
  }
  function P(e, t, r, n) {
    r = Number(r) || 0;
    var i = e.length - r;
    n ? (n = Number(n)) > i && (n = i) : (n = i);
    var a = t.length;
    if (a % 2 != 0) throw new TypeError("Invalid hex string");
    n > a / 2 && (n = a / 2);
    for (var o = 0; o < n; ++o) {
      var s = parseInt(t.substr(2 * o, 2), 16);
      if (isNaN(s)) return o;
      e[r + o] = s;
    }
    return o;
  }
  function I(e, t, r, n) {
    return K(Z(t, e.length - r), e, r, n);
  }
  function O(e, t, r, n) {
    return K(
      (function (e) {
        for (var t = [], r = 0; r < e.length; ++r)
          t.push(255 & e.charCodeAt(r));
        return t;
      })(t),
      e,
      r,
      n
    );
  }
  function E(e, t, r, n) {
    return O(e, t, r, n);
  }
  function B(e, t, r, n) {
    return K(X(t), e, r, n);
  }
  function T(e, t, r, n) {
    return K(
      (function (e, t) {
        for (var r, n, i, a = [], o = 0; o < e.length && !((t -= 2) < 0); ++o)
          (r = e.charCodeAt(o)),
            (n = r >> 8),
            (i = r % 256),
            a.push(i),
            a.push(n);
        return a;
      })(t, e.length - r),
      e,
      r,
      n
    );
  }
  function L(e, t, r) {
    return 0 === t && r === e.length ? s(e) : s(e.slice(t, r));
  }
  function z(e, t, r) {
    r = Math.min(e.length, r);
    for (var n = [], i = t; i < r; ) {
      var a,
        o,
        s,
        u,
        l = e[i],
        c = null,
        f = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
      if (i + f <= r)
        switch (f) {
          case 1:
            l < 128 && (c = l);
            break;
          case 2:
            128 == (192 & (a = e[i + 1])) &&
              (u = ((31 & l) << 6) | (63 & a)) > 127 &&
              (c = u);
            break;
          case 3:
            (a = e[i + 1]),
              (o = e[i + 2]),
              128 == (192 & a) &&
                128 == (192 & o) &&
                (u = ((15 & l) << 12) | ((63 & a) << 6) | (63 & o)) > 2047 &&
                (u < 55296 || u > 57343) &&
                (c = u);
            break;
          case 4:
            (a = e[i + 1]),
              (o = e[i + 2]),
              (s = e[i + 3]),
              128 == (192 & a) &&
                128 == (192 & o) &&
                128 == (192 & s) &&
                (u =
                  ((15 & l) << 18) |
                  ((63 & a) << 12) |
                  ((63 & o) << 6) |
                  (63 & s)) > 65535 &&
                u < 1114112 &&
                (c = u);
        }
      null === c
        ? ((c = 65533), (f = 1))
        : c > 65535 &&
          ((c -= 65536),
          n.push(((c >>> 10) & 1023) | 55296),
          (c = 56320 | (1023 & c))),
        n.push(c),
        (i += f);
    }
    return (function (e) {
      var t = e.length;
      if (t <= D) return String.fromCharCode.apply(String, e);
      var r = "",
        n = 0;
      for (; n < t; )
        r += String.fromCharCode.apply(String, e.slice(n, (n += D)));
      return r;
    })(n);
  }
  (g.poolSize = 8192),
    (g._augment = function (e) {
      return (e.__proto__ = g.prototype), e;
    }),
    (g.from = function (e, t, r) {
      return v(null, e, t, r);
    }),
    g.TYPED_ARRAY_SUPPORT &&
      ((g.prototype.__proto__ = Uint8Array.prototype),
      (g.__proto__ = Uint8Array)),
    (g.alloc = function (e, t, r) {
      return (function (e, t, r, n) {
        return (
          y(t),
          t <= 0
            ? p(e, t)
            : void 0 !== r
            ? "string" == typeof n
              ? p(e, t).fill(r, n)
              : p(e, t).fill(r)
            : p(e, t)
        );
      })(null, e, t, r);
    }),
    (g.allocUnsafe = function (e) {
      return b(null, e);
    }),
    (g.allocUnsafeSlow = function (e) {
      return b(null, e);
    }),
    (g.isBuffer = J),
    (g.compare = function (e, t) {
      if (!x(e) || !x(t)) throw new TypeError("Arguments must be Buffers");
      if (e === t) return 0;
      for (
        var r = e.length, n = t.length, i = 0, a = Math.min(r, n);
        i < a;
        ++i
      )
        if (e[i] !== t[i]) {
          (r = e[i]), (n = t[i]);
          break;
        }
      return r < n ? -1 : n < r ? 1 : 0;
    }),
    (g.isEncoding = function (e) {
      switch (String(e).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    }),
    (g.concat = function (e, t) {
      if (!f(e))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === e.length) return g.alloc(0);
      var r;
      if (void 0 === t) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
      var n = g.allocUnsafe(t),
        i = 0;
      for (r = 0; r < e.length; ++r) {
        var a = e[r];
        if (!x(a))
          throw new TypeError('"list" argument must be an Array of Buffers');
        a.copy(n, i), (i += a.length);
      }
      return n;
    }),
    (g.byteLength = S),
    (g.prototype._isBuffer = !0),
    (g.prototype.swap16 = function () {
      var e = this.length;
      if (e % 2 != 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var t = 0; t < e; t += 2) k(this, t, t + 1);
      return this;
    }),
    (g.prototype.swap32 = function () {
      var e = this.length;
      if (e % 4 != 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var t = 0; t < e; t += 4) k(this, t, t + 3), k(this, t + 1, t + 2);
      return this;
    }),
    (g.prototype.swap64 = function () {
      var e = this.length;
      if (e % 8 != 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var t = 0; t < e; t += 8)
        k(this, t, t + 7),
          k(this, t + 1, t + 6),
          k(this, t + 2, t + 5),
          k(this, t + 3, t + 4);
      return this;
    }),
    (g.prototype.toString = function () {
      var e = 0 | this.length;
      return 0 === e
        ? ""
        : 0 === arguments.length
        ? z(this, 0, e)
        : function (e, t, r) {
            var n = !1;
            if (((void 0 === t || t < 0) && (t = 0), t > this.length))
              return "";
            if (
              ((void 0 === r || r > this.length) && (r = this.length), r <= 0)
            )
              return "";
            if ((r >>>= 0) <= (t >>>= 0)) return "";
            for (e || (e = "utf8"); ; )
              switch (e) {
                case "hex":
                  return F(this, t, r);
                case "utf8":
                case "utf-8":
                  return z(this, t, r);
                case "ascii":
                  return R(this, t, r);
                case "latin1":
                case "binary":
                  return M(this, t, r);
                case "base64":
                  return L(this, t, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return U(this, t, r);
                default:
                  if (n) throw new TypeError("Unknown encoding: " + e);
                  (e = (e + "").toLowerCase()), (n = !0);
              }
          }.apply(this, arguments);
    }),
    (g.prototype.equals = function (e) {
      if (!x(e)) throw new TypeError("Argument must be a Buffer");
      return this === e || 0 === g.compare(this, e);
    }),
    (g.prototype.inspect = function () {
      var e = "";
      return (
        this.length > 0 &&
          ((e = this.toString("hex", 0, 50).match(/.{2}/g).join(" ")),
          this.length > 50 && (e += " ... ")),
        "<Buffer " + e + ">"
      );
    }),
    (g.prototype.compare = function (e, t, r, n, i) {
      if (!x(e)) throw new TypeError("Argument must be a Buffer");
      if (
        (void 0 === t && (t = 0),
        void 0 === r && (r = e ? e.length : 0),
        void 0 === n && (n = 0),
        void 0 === i && (i = this.length),
        t < 0 || r > e.length || n < 0 || i > this.length)
      )
        throw new RangeError("out of range index");
      if (n >= i && t >= r) return 0;
      if (n >= i) return -1;
      if (t >= r) return 1;
      if (this === e) return 0;
      for (
        var a = (i >>>= 0) - (n >>>= 0),
          o = (r >>>= 0) - (t >>>= 0),
          s = Math.min(a, o),
          u = this.slice(n, i),
          l = e.slice(t, r),
          c = 0;
        c < s;
        ++c
      )
        if (u[c] !== l[c]) {
          (a = u[c]), (o = l[c]);
          break;
        }
      return a < o ? -1 : o < a ? 1 : 0;
    }),
    (g.prototype.includes = function (e, t, r) {
      return -1 !== this.indexOf(e, t, r);
    }),
    (g.prototype.indexOf = function (e, t, r) {
      return A(this, e, t, r, !0);
    }),
    (g.prototype.lastIndexOf = function (e, t, r) {
      return A(this, e, t, r, !1);
    }),
    (g.prototype.write = function (e, t, r, n) {
      if (void 0 === t) (n = "utf8"), (r = this.length), (t = 0);
      else if (void 0 === r && "string" == typeof t)
        (n = t), (r = this.length), (t = 0);
      else {
        if (!isFinite(t))
          throw new Error(
            "Buffer.write(string, encoding, offset[, length]) is no longer supported"
          );
        (t |= 0),
          isFinite(r)
            ? ((r |= 0), void 0 === n && (n = "utf8"))
            : ((n = r), (r = void 0));
      }
      var i = this.length - t;
      if (
        ((void 0 === r || r > i) && (r = i),
        (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
      )
        throw new RangeError("Attempt to write outside buffer bounds");
      n || (n = "utf8");
      for (var a = !1; ; )
        switch (n) {
          case "hex":
            return P(this, e, t, r);
          case "utf8":
          case "utf-8":
            return I(this, e, t, r);
          case "ascii":
            return O(this, e, t, r);
          case "latin1":
          case "binary":
            return E(this, e, t, r);
          case "base64":
            return B(this, e, t, r);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return T(this, e, t, r);
          default:
            if (a) throw new TypeError("Unknown encoding: " + n);
            (n = ("" + n).toLowerCase()), (a = !0);
        }
    }),
    (g.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0),
      };
    });
  var D = 4096;
  function R(e, t, r) {
    var n = "";
    r = Math.min(e.length, r);
    for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
    return n;
  }
  function M(e, t, r) {
    var n = "";
    r = Math.min(e.length, r);
    for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
    return n;
  }
  function F(e, t, r) {
    var n = e.length;
    (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
    for (var i = "", a = t; a < r; ++a) i += Y(e[a]);
    return i;
  }
  function U(e, t, r) {
    for (var n = e.slice(t, r), i = "", a = 0; a < n.length; a += 2)
      i += String.fromCharCode(n[a] + 256 * n[a + 1]);
    return i;
  }
  function N(e, t, r) {
    if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
    if (e + t > r)
      throw new RangeError("Trying to access beyond buffer length");
  }
  function j(e, t, r, n, i, a) {
    if (!x(e))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (t > i || t < a)
      throw new RangeError('"value" argument is out of bounds');
    if (r + n > e.length) throw new RangeError("Index out of range");
  }
  function G(e, t, r, n) {
    t < 0 && (t = 65535 + t + 1);
    for (var i = 0, a = Math.min(e.length - r, 2); i < a; ++i)
      e[r + i] = (t & (255 << (8 * (n ? i : 1 - i)))) >>> (8 * (n ? i : 1 - i));
  }
  function V(e, t, r, n) {
    t < 0 && (t = 4294967295 + t + 1);
    for (var i = 0, a = Math.min(e.length - r, 4); i < a; ++i)
      e[r + i] = (t >>> (8 * (n ? i : 3 - i))) & 255;
  }
  function _(e, t, r, n, i, a) {
    if (r + n > e.length) throw new RangeError("Index out of range");
    if (r < 0) throw new RangeError("Index out of range");
  }
  function q(e, t, r, n, i) {
    return i || _(e, 0, r, 4), l(e, t, r, n, 23, 4), r + 4;
  }
  function W(e, t, r, n, i) {
    return i || _(e, 0, r, 8), l(e, t, r, n, 52, 8), r + 8;
  }
  (g.prototype.slice = function (e, t) {
    var r,
      n = this.length;
    if (
      ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
      (t = void 0 === t ? n : ~~t) < 0
        ? (t += n) < 0 && (t = 0)
        : t > n && (t = n),
      t < e && (t = e),
      g.TYPED_ARRAY_SUPPORT)
    )
      (r = this.subarray(e, t)).__proto__ = g.prototype;
    else {
      var i = t - e;
      r = new g(i, void 0);
      for (var a = 0; a < i; ++a) r[a] = this[a + e];
    }
    return r;
  }),
    (g.prototype.readUIntLE = function (e, t, r) {
      (e |= 0), (t |= 0), r || N(e, t, this.length);
      for (var n = this[e], i = 1, a = 0; ++a < t && (i *= 256); )
        n += this[e + a] * i;
      return n;
    }),
    (g.prototype.readUIntBE = function (e, t, r) {
      (e |= 0), (t |= 0), r || N(e, t, this.length);
      for (var n = this[e + --t], i = 1; t > 0 && (i *= 256); )
        n += this[e + --t] * i;
      return n;
    }),
    (g.prototype.readUInt8 = function (e, t) {
      return t || N(e, 1, this.length), this[e];
    }),
    (g.prototype.readUInt16LE = function (e, t) {
      return t || N(e, 2, this.length), this[e] | (this[e + 1] << 8);
    }),
    (g.prototype.readUInt16BE = function (e, t) {
      return t || N(e, 2, this.length), (this[e] << 8) | this[e + 1];
    }),
    (g.prototype.readUInt32LE = function (e, t) {
      return (
        t || N(e, 4, this.length),
        (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
          16777216 * this[e + 3]
      );
    }),
    (g.prototype.readUInt32BE = function (e, t) {
      return (
        t || N(e, 4, this.length),
        16777216 * this[e] +
          ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
      );
    }),
    (g.prototype.readIntLE = function (e, t, r) {
      (e |= 0), (t |= 0), r || N(e, t, this.length);
      for (var n = this[e], i = 1, a = 0; ++a < t && (i *= 256); )
        n += this[e + a] * i;
      return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n;
    }),
    (g.prototype.readIntBE = function (e, t, r) {
      (e |= 0), (t |= 0), r || N(e, t, this.length);
      for (var n = t, i = 1, a = this[e + --n]; n > 0 && (i *= 256); )
        a += this[e + --n] * i;
      return a >= (i *= 128) && (a -= Math.pow(2, 8 * t)), a;
    }),
    (g.prototype.readInt8 = function (e, t) {
      return (
        t || N(e, 1, this.length),
        128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
      );
    }),
    (g.prototype.readInt16LE = function (e, t) {
      t || N(e, 2, this.length);
      var r = this[e] | (this[e + 1] << 8);
      return 32768 & r ? 4294901760 | r : r;
    }),
    (g.prototype.readInt16BE = function (e, t) {
      t || N(e, 2, this.length);
      var r = this[e + 1] | (this[e] << 8);
      return 32768 & r ? 4294901760 | r : r;
    }),
    (g.prototype.readInt32LE = function (e, t) {
      return (
        t || N(e, 4, this.length),
        this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
      );
    }),
    (g.prototype.readInt32BE = function (e, t) {
      return (
        t || N(e, 4, this.length),
        (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
      );
    }),
    (g.prototype.readFloatLE = function (e, t) {
      return t || N(e, 4, this.length), u(this, e, !0, 23, 4);
    }),
    (g.prototype.readFloatBE = function (e, t) {
      return t || N(e, 4, this.length), u(this, e, !1, 23, 4);
    }),
    (g.prototype.readDoubleLE = function (e, t) {
      return t || N(e, 8, this.length), u(this, e, !0, 52, 8);
    }),
    (g.prototype.readDoubleBE = function (e, t) {
      return t || N(e, 8, this.length), u(this, e, !1, 52, 8);
    }),
    (g.prototype.writeUIntLE = function (e, t, r, n) {
      ((e = +e), (t |= 0), (r |= 0), n) ||
        j(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
      var i = 1,
        a = 0;
      for (this[t] = 255 & e; ++a < r && (i *= 256); )
        this[t + a] = (e / i) & 255;
      return t + r;
    }),
    (g.prototype.writeUIntBE = function (e, t, r, n) {
      ((e = +e), (t |= 0), (r |= 0), n) ||
        j(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
      var i = r - 1,
        a = 1;
      for (this[t + i] = 255 & e; --i >= 0 && (a *= 256); )
        this[t + i] = (e / a) & 255;
      return t + r;
    }),
    (g.prototype.writeUInt8 = function (e, t, r) {
      return (
        (e = +e),
        (t |= 0),
        r || j(this, e, t, 1, 255, 0),
        g.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
        (this[t] = 255 & e),
        t + 1
      );
    }),
    (g.prototype.writeUInt16LE = function (e, t, r) {
      return (
        (e = +e),
        (t |= 0),
        r || j(this, e, t, 2, 65535, 0),
        g.TYPED_ARRAY_SUPPORT
          ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
          : G(this, e, t, !0),
        t + 2
      );
    }),
    (g.prototype.writeUInt16BE = function (e, t, r) {
      return (
        (e = +e),
        (t |= 0),
        r || j(this, e, t, 2, 65535, 0),
        g.TYPED_ARRAY_SUPPORT
          ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
          : G(this, e, t, !1),
        t + 2
      );
    }),
    (g.prototype.writeUInt32LE = function (e, t, r) {
      return (
        (e = +e),
        (t |= 0),
        r || j(this, e, t, 4, 4294967295, 0),
        g.TYPED_ARRAY_SUPPORT
          ? ((this[t + 3] = e >>> 24),
            (this[t + 2] = e >>> 16),
            (this[t + 1] = e >>> 8),
            (this[t] = 255 & e))
          : V(this, e, t, !0),
        t + 4
      );
    }),
    (g.prototype.writeUInt32BE = function (e, t, r) {
      return (
        (e = +e),
        (t |= 0),
        r || j(this, e, t, 4, 4294967295, 0),
        g.TYPED_ARRAY_SUPPORT
          ? ((this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e))
          : V(this, e, t, !1),
        t + 4
      );
    }),
    (g.prototype.writeIntLE = function (e, t, r, n) {
      if (((e = +e), (t |= 0), !n)) {
        var i = Math.pow(2, 8 * r - 1);
        j(this, e, t, r, i - 1, -i);
      }
      var a = 0,
        o = 1,
        s = 0;
      for (this[t] = 255 & e; ++a < r && (o *= 256); )
        e < 0 && 0 === s && 0 !== this[t + a - 1] && (s = 1),
          (this[t + a] = (((e / o) >> 0) - s) & 255);
      return t + r;
    }),
    (g.prototype.writeIntBE = function (e, t, r, n) {
      if (((e = +e), (t |= 0), !n)) {
        var i = Math.pow(2, 8 * r - 1);
        j(this, e, t, r, i - 1, -i);
      }
      var a = r - 1,
        o = 1,
        s = 0;
      for (this[t + a] = 255 & e; --a >= 0 && (o *= 256); )
        e < 0 && 0 === s && 0 !== this[t + a + 1] && (s = 1),
          (this[t + a] = (((e / o) >> 0) - s) & 255);
      return t + r;
    }),
    (g.prototype.writeInt8 = function (e, t, r) {
      return (
        (e = +e),
        (t |= 0),
        r || j(this, e, t, 1, 127, -128),
        g.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
        e < 0 && (e = 255 + e + 1),
        (this[t] = 255 & e),
        t + 1
      );
    }),
    (g.prototype.writeInt16LE = function (e, t, r) {
      return (
        (e = +e),
        (t |= 0),
        r || j(this, e, t, 2, 32767, -32768),
        g.TYPED_ARRAY_SUPPORT
          ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
          : G(this, e, t, !0),
        t + 2
      );
    }),
    (g.prototype.writeInt16BE = function (e, t, r) {
      return (
        (e = +e),
        (t |= 0),
        r || j(this, e, t, 2, 32767, -32768),
        g.TYPED_ARRAY_SUPPORT
          ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
          : G(this, e, t, !1),
        t + 2
      );
    }),
    (g.prototype.writeInt32LE = function (e, t, r) {
      return (
        (e = +e),
        (t |= 0),
        r || j(this, e, t, 4, 2147483647, -2147483648),
        g.TYPED_ARRAY_SUPPORT
          ? ((this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            (this[t + 2] = e >>> 16),
            (this[t + 3] = e >>> 24))
          : V(this, e, t, !0),
        t + 4
      );
    }),
    (g.prototype.writeInt32BE = function (e, t, r) {
      return (
        (e = +e),
        (t |= 0),
        r || j(this, e, t, 4, 2147483647, -2147483648),
        e < 0 && (e = 4294967295 + e + 1),
        g.TYPED_ARRAY_SUPPORT
          ? ((this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e))
          : V(this, e, t, !1),
        t + 4
      );
    }),
    (g.prototype.writeFloatLE = function (e, t, r) {
      return q(this, e, t, !0, r);
    }),
    (g.prototype.writeFloatBE = function (e, t, r) {
      return q(this, e, t, !1, r);
    }),
    (g.prototype.writeDoubleLE = function (e, t, r) {
      return W(this, e, t, !0, r);
    }),
    (g.prototype.writeDoubleBE = function (e, t, r) {
      return W(this, e, t, !1, r);
    }),
    (g.prototype.copy = function (e, t, r, n) {
      if (
        (r || (r = 0),
        n || 0 === n || (n = this.length),
        t >= e.length && (t = e.length),
        t || (t = 0),
        n > 0 && n < r && (n = r),
        n === r)
      )
        return 0;
      if (0 === e.length || 0 === this.length) return 0;
      if (t < 0) throw new RangeError("targetStart out of bounds");
      if (r < 0 || r >= this.length)
        throw new RangeError("sourceStart out of bounds");
      if (n < 0) throw new RangeError("sourceEnd out of bounds");
      n > this.length && (n = this.length),
        e.length - t < n - r && (n = e.length - t + r);
      var i,
        a = n - r;
      if (this === e && r < t && t < n)
        for (i = a - 1; i >= 0; --i) e[i + t] = this[i + r];
      else if (a < 1e3 || !g.TYPED_ARRAY_SUPPORT)
        for (i = 0; i < a; ++i) e[i + t] = this[i + r];
      else Uint8Array.prototype.set.call(e, this.subarray(r, r + a), t);
      return a;
    }),
    (g.prototype.fill = function (e, t, r, n) {
      if ("string" == typeof e) {
        if (
          ("string" == typeof t
            ? ((n = t), (t = 0), (r = this.length))
            : "string" == typeof r && ((n = r), (r = this.length)),
          1 === e.length)
        ) {
          var i = e.charCodeAt(0);
          i < 256 && (e = i);
        }
        if (void 0 !== n && "string" != typeof n)
          throw new TypeError("encoding must be a string");
        if ("string" == typeof n && !g.isEncoding(n))
          throw new TypeError("Unknown encoding: " + n);
      } else "number" == typeof e && (e &= 255);
      if (t < 0 || this.length < t || this.length < r)
        throw new RangeError("Out of range index");
      if (r <= t) return this;
      var a;
      if (
        ((t >>>= 0),
        (r = void 0 === r ? this.length : r >>> 0),
        e || (e = 0),
        "number" == typeof e)
      )
        for (a = t; a < r; ++a) this[a] = e;
      else {
        var o = x(e) ? e : Z(new g(e, n).toString()),
          s = o.length;
        for (a = 0; a < r - t; ++a) this[a + t] = o[a % s];
      }
      return this;
    });
  var H = /[^+\/0-9A-Za-z-_]/g;
  function Y(e) {
    return e < 16 ? "0" + e.toString(16) : e.toString(16);
  }
  function Z(e, t) {
    var r;
    t = t || 1 / 0;
    for (var n = e.length, i = null, a = [], o = 0; o < n; ++o) {
      if ((r = e.charCodeAt(o)) > 55295 && r < 57344) {
        if (!i) {
          if (r > 56319) {
            (t -= 3) > -1 && a.push(239, 191, 189);
            continue;
          }
          if (o + 1 === n) {
            (t -= 3) > -1 && a.push(239, 191, 189);
            continue;
          }
          i = r;
          continue;
        }
        if (r < 56320) {
          (t -= 3) > -1 && a.push(239, 191, 189), (i = r);
          continue;
        }
        r = 65536 + (((i - 55296) << 10) | (r - 56320));
      } else i && (t -= 3) > -1 && a.push(239, 191, 189);
      if (((i = null), r < 128)) {
        if ((t -= 1) < 0) break;
        a.push(r);
      } else if (r < 2048) {
        if ((t -= 2) < 0) break;
        a.push((r >> 6) | 192, (63 & r) | 128);
      } else if (r < 65536) {
        if ((t -= 3) < 0) break;
        a.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
      } else {
        if (!(r < 1114112)) throw new Error("Invalid code point");
        if ((t -= 4) < 0) break;
        a.push(
          (r >> 18) | 240,
          ((r >> 12) & 63) | 128,
          ((r >> 6) & 63) | 128,
          (63 & r) | 128
        );
      }
    }
    return a;
  }
  function X(e) {
    return (function (e) {
      var t, o, s, u, l, c;
      i || a();
      var f = e.length;
      if (f % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      (l = "=" === e[f - 2] ? 2 : "=" === e[f - 1] ? 1 : 0),
        (c = new n((3 * f) / 4 - l)),
        (s = l > 0 ? f - 4 : f);
      var h = 0;
      for (t = 0, o = 0; t < s; t += 4, o += 3)
        (u =
          (r[e.charCodeAt(t)] << 18) |
          (r[e.charCodeAt(t + 1)] << 12) |
          (r[e.charCodeAt(t + 2)] << 6) |
          r[e.charCodeAt(t + 3)]),
          (c[h++] = (u >> 16) & 255),
          (c[h++] = (u >> 8) & 255),
          (c[h++] = 255 & u);
      return (
        2 === l
          ? ((u = (r[e.charCodeAt(t)] << 2) | (r[e.charCodeAt(t + 1)] >> 4)),
            (c[h++] = 255 & u))
          : 1 === l &&
            ((u =
              (r[e.charCodeAt(t)] << 10) |
              (r[e.charCodeAt(t + 1)] << 4) |
              (r[e.charCodeAt(t + 2)] >> 2)),
            (c[h++] = (u >> 8) & 255),
            (c[h++] = 255 & u)),
        c
      );
    })(
      (function (e) {
        if (
          (e = (function (e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
          })(e).replace(H, "")).length < 2
        )
          return "";
        for (; e.length % 4 != 0; ) e += "=";
        return e;
      })(e)
    );
  }
  function K(e, t, r, n) {
    for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
      t[i + r] = e[i];
    return i;
  }
  function J(e) {
    return (
      null != e &&
      (!!e._isBuffer ||
        Q(e) ||
        (function (e) {
          return (
            "function" == typeof e.readFloatLE &&
            "function" == typeof e.slice &&
            Q(e.slice(0, 0))
          );
        })(e))
    );
  }
  function Q(e) {
    return (
      !!e.constructor &&
      "function" == typeof e.constructor.isBuffer &&
      e.constructor.isBuffer(e)
    );
  }
  var $ = Object.freeze({
      INSPECT_MAX_BYTES: 50,
      kMaxLength: h,
      Buffer: g,
      SlowBuffer: function (e) {
        return +e != e && (e = 0), g.alloc(+e);
      },
      isBuffer: J,
    }),
    ee =
      "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {};
  function te(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  function re(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports;
  }
  function ne(e) {
    return (e && e.default) || e;
  }
  function ie() {}
  function ae() {
    ae.init.call(this);
  }
  function oe(e) {
    return void 0 === e._maxListeners
      ? ae.defaultMaxListeners
      : e._maxListeners;
  }
  function se(e, t, r, n) {
    var i, a, o, s;
    if ("function" != typeof r)
      throw new TypeError('"listener" argument must be a function');
    if (
      ((a = e._events)
        ? (a.newListener &&
            (e.emit("newListener", t, r.listener ? r.listener : r),
            (a = e._events)),
          (o = a[t]))
        : ((a = e._events = new ie()), (e._eventsCount = 0)),
      o)
    ) {
      if (
        ("function" == typeof o
          ? (o = a[t] = n ? [r, o] : [o, r])
          : n
          ? o.unshift(r)
          : o.push(r),
        !o.warned && (i = oe(e)) && i > 0 && o.length > i)
      ) {
        o.warned = !0;
        var u = new Error(
          "Possible EventEmitter memory leak detected. " +
            o.length +
            " " +
            t +
            " listeners added. Use emitter.setMaxListeners() to increase limit"
        );
        (u.name = "MaxListenersExceededWarning"),
          (u.emitter = e),
          (u.type = t),
          (u.count = o.length),
          (s = u),
          "function" == typeof console.warn ? console.warn(s) : console.log(s);
      }
    } else (o = a[t] = r), ++e._eventsCount;
    return e;
  }
  function ue(e, t, r) {
    var n = !1;
    function i() {
      e.removeListener(t, i), n || ((n = !0), r.apply(e, arguments));
    }
    return (i.listener = r), i;
  }
  function le(e) {
    var t = this._events;
    if (t) {
      var r = t[e];
      if ("function" == typeof r) return 1;
      if (r) return r.length;
    }
    return 0;
  }
  function ce(e, t) {
    for (var r = new Array(t); t--; ) r[t] = e[t];
    return r;
  }
  function fe() {
    throw new Error("setTimeout has not been defined");
  }
  function he() {
    throw new Error("clearTimeout has not been defined");
  }
  (ie.prototype = Object.create(null)),
    (ae.EventEmitter = ae),
    (ae.usingDomains = !1),
    (ae.prototype.domain = void 0),
    (ae.prototype._events = void 0),
    (ae.prototype._maxListeners = void 0),
    (ae.defaultMaxListeners = 10),
    (ae.init = function () {
      (this.domain = null),
        ae.usingDomains && (void 0).active && (void 0).Domain,
        (this._events &&
          this._events !== Object.getPrototypeOf(this)._events) ||
          ((this._events = new ie()), (this._eventsCount = 0)),
        (this._maxListeners = this._maxListeners || void 0);
    }),
    (ae.prototype.setMaxListeners = function (e) {
      if ("number" != typeof e || e < 0 || isNaN(e))
        throw new TypeError('"n" argument must be a positive number');
      return (this._maxListeners = e), this;
    }),
    (ae.prototype.getMaxListeners = function () {
      return oe(this);
    }),
    (ae.prototype.emit = function (e) {
      var t,
        r,
        n,
        i,
        a,
        o,
        s,
        u = "error" === e;
      if ((o = this._events)) u = u && null == o.error;
      else if (!u) return !1;
      if (((s = this.domain), u)) {
        if (((t = arguments[1]), !s)) {
          if (t instanceof Error) throw t;
          var l = new Error('Uncaught, unspecified "error" event. (' + t + ")");
          throw ((l.context = t), l);
        }
        return (
          t || (t = new Error('Uncaught, unspecified "error" event')),
          (t.domainEmitter = this),
          (t.domain = s),
          (t.domainThrown = !1),
          s.emit("error", t),
          !1
        );
      }
      if (!(r = o[e])) return !1;
      var c = "function" == typeof r;
      switch ((n = arguments.length)) {
        case 1:
          !(function (e, t, r) {
            if (t) e.call(r);
            else
              for (var n = e.length, i = ce(e, n), a = 0; a < n; ++a)
                i[a].call(r);
          })(r, c, this);
          break;
        case 2:
          !(function (e, t, r, n) {
            if (t) e.call(r, n);
            else
              for (var i = e.length, a = ce(e, i), o = 0; o < i; ++o)
                a[o].call(r, n);
          })(r, c, this, arguments[1]);
          break;
        case 3:
          !(function (e, t, r, n, i) {
            if (t) e.call(r, n, i);
            else
              for (var a = e.length, o = ce(e, a), s = 0; s < a; ++s)
                o[s].call(r, n, i);
          })(r, c, this, arguments[1], arguments[2]);
          break;
        case 4:
          !(function (e, t, r, n, i, a) {
            if (t) e.call(r, n, i, a);
            else
              for (var o = e.length, s = ce(e, o), u = 0; u < o; ++u)
                s[u].call(r, n, i, a);
          })(r, c, this, arguments[1], arguments[2], arguments[3]);
          break;
        default:
          for (i = new Array(n - 1), a = 1; a < n; a++) i[a - 1] = arguments[a];
          !(function (e, t, r, n) {
            if (t) e.apply(r, n);
            else
              for (var i = e.length, a = ce(e, i), o = 0; o < i; ++o)
                a[o].apply(r, n);
          })(r, c, this, i);
      }
      return !0;
    }),
    (ae.prototype.addListener = function (e, t) {
      return se(this, e, t, !1);
    }),
    (ae.prototype.on = ae.prototype.addListener),
    (ae.prototype.prependListener = function (e, t) {
      return se(this, e, t, !0);
    }),
    (ae.prototype.once = function (e, t) {
      if ("function" != typeof t)
        throw new TypeError('"listener" argument must be a function');
      return this.on(e, ue(this, e, t)), this;
    }),
    (ae.prototype.prependOnceListener = function (e, t) {
      if ("function" != typeof t)
        throw new TypeError('"listener" argument must be a function');
      return this.prependListener(e, ue(this, e, t)), this;
    }),
    (ae.prototype.removeListener = function (e, t) {
      var r, n, i, a, o;
      if ("function" != typeof t)
        throw new TypeError('"listener" argument must be a function');
      if (!(n = this._events)) return this;
      if (!(r = n[e])) return this;
      if (r === t || (r.listener && r.listener === t))
        0 == --this._eventsCount
          ? (this._events = new ie())
          : (delete n[e],
            n.removeListener &&
              this.emit("removeListener", e, r.listener || t));
      else if ("function" != typeof r) {
        for (i = -1, a = r.length; a-- > 0; )
          if (r[a] === t || (r[a].listener && r[a].listener === t)) {
            (o = r[a].listener), (i = a);
            break;
          }
        if (i < 0) return this;
        if (1 === r.length) {
          if (((r[0] = void 0), 0 == --this._eventsCount))
            return (this._events = new ie()), this;
          delete n[e];
        } else
          !(function (e, t) {
            for (var r = t, n = r + 1, i = e.length; n < i; r += 1, n += 1)
              e[r] = e[n];
            e.pop();
          })(r, i);
        n.removeListener && this.emit("removeListener", e, o || t);
      }
      return this;
    }),
    (ae.prototype.removeAllListeners = function (e) {
      var t, r;
      if (!(r = this._events)) return this;
      if (!r.removeListener)
        return (
          0 === arguments.length
            ? ((this._events = new ie()), (this._eventsCount = 0))
            : r[e] &&
              (0 == --this._eventsCount
                ? (this._events = new ie())
                : delete r[e]),
          this
        );
      if (0 === arguments.length) {
        for (var n, i = Object.keys(r), a = 0; a < i.length; ++a)
          "removeListener" !== (n = i[a]) && this.removeAllListeners(n);
        return (
          this.removeAllListeners("removeListener"),
          (this._events = new ie()),
          (this._eventsCount = 0),
          this
        );
      }
      if ("function" == typeof (t = r[e])) this.removeListener(e, t);
      else if (t)
        do {
          this.removeListener(e, t[t.length - 1]);
        } while (t[0]);
      return this;
    }),
    (ae.prototype.listeners = function (e) {
      var t,
        r = this._events;
      return r && (t = r[e])
        ? "function" == typeof t
          ? [t.listener || t]
          : (function (e) {
              for (var t = new Array(e.length), r = 0; r < t.length; ++r)
                t[r] = e[r].listener || e[r];
              return t;
            })(t)
        : [];
    }),
    (ae.listenerCount = function (e, t) {
      return "function" == typeof e.listenerCount
        ? e.listenerCount(t)
        : le.call(e, t);
    }),
    (ae.prototype.listenerCount = le),
    (ae.prototype.eventNames = function () {
      return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
    });
  var de = fe,
    pe = he;
  function ge(e) {
    if (de === setTimeout) return setTimeout(e, 0);
    if ((de === fe || !de) && setTimeout)
      return (de = setTimeout), setTimeout(e, 0);
    try {
      return de(e, 0);
    } catch (t) {
      try {
        return de.call(null, e, 0);
      } catch (t) {
        return de.call(this, e, 0);
      }
    }
  }
  "function" == typeof e.setTimeout && (de = setTimeout),
    "function" == typeof e.clearTimeout && (pe = clearTimeout);
  var ve,
    ye = [],
    be = !1,
    me = -1;
  function we() {
    be &&
      ve &&
      ((be = !1),
      ve.length ? (ye = ve.concat(ye)) : (me = -1),
      ye.length && xe());
  }
  function xe() {
    if (!be) {
      var e = ge(we);
      be = !0;
      for (var t = ye.length; t; ) {
        for (ve = ye, ye = []; ++me < t; ) ve && ve[me].run();
        (me = -1), (t = ye.length);
      }
      (ve = null),
        (be = !1),
        (function (e) {
          if (pe === clearTimeout) return clearTimeout(e);
          if ((pe === he || !pe) && clearTimeout)
            return (pe = clearTimeout), clearTimeout(e);
          try {
            pe(e);
          } catch (t) {
            try {
              return pe.call(null, e);
            } catch (t) {
              return pe.call(this, e);
            }
          }
        })(e);
    }
  }
  function Se(e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    ye.push(new ke(e, t)), 1 !== ye.length || be || ge(xe);
  }
  function ke(e, t) {
    (this.fun = e), (this.array = t);
  }
  ke.prototype.run = function () {
    this.fun.apply(null, this.array);
  };
  function Ae() {}
  var Ce = Ae,
    Pe = Ae,
    Ie = Ae,
    Oe = Ae,
    Ee = Ae,
    Be = Ae,
    Te = Ae;
  var Le = e.performance || {},
    ze =
      Le.now ||
      Le.mozNow ||
      Le.msNow ||
      Le.oNow ||
      Le.webkitNow ||
      function () {
        return new Date().getTime();
      };
  var De = new Date();
  var Re = {
      nextTick: Se,
      title: "browser",
      browser: !0,
      env: {},
      argv: [],
      version: "",
      versions: {},
      on: Ce,
      addListener: Pe,
      once: Ie,
      off: Oe,
      removeListener: Ee,
      removeAllListeners: Be,
      emit: Te,
      binding: function (e) {
        throw new Error("process.binding is not supported");
      },
      cwd: function () {
        return "/";
      },
      chdir: function (e) {
        throw new Error("process.chdir is not supported");
      },
      umask: function () {
        return 0;
      },
      hrtime: function (e) {
        var t = 0.001 * ze.call(Le),
          r = Math.floor(t),
          n = Math.floor((t % 1) * 1e9);
        return e && ((r -= e[0]), (n -= e[1]) < 0 && (r--, (n += 1e9))), [r, n];
      },
      platform: "browser",
      release: {},
      config: {},
      uptime: function () {
        return (new Date() - De) / 1e3;
      },
    },
    Me =
      "function" == typeof Object.create
        ? function (e, t) {
            (e.super_ = t),
              (e.prototype = Object.create(t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              }));
          }
        : function (e, t) {
            e.super_ = t;
            var r = function () {};
            (r.prototype = t.prototype),
              (e.prototype = new r()),
              (e.prototype.constructor = e);
          },
    Fe = /%[sdj%]/g;
  function Ue(e) {
    if (!$e(e)) {
      for (var t = [], r = 0; r < arguments.length; r++)
        t.push(_e(arguments[r]));
      return t.join(" ");
    }
    r = 1;
    for (
      var n = arguments,
        i = n.length,
        a = String(e).replace(Fe, function (e) {
          if ("%%" === e) return "%";
          if (r >= i) return e;
          switch (e) {
            case "%s":
              return String(n[r++]);
            case "%d":
              return Number(n[r++]);
            case "%j":
              try {
                return JSON.stringify(n[r++]);
              } catch (e) {
                return "[Circular]";
              }
            default:
              return e;
          }
        }),
        o = n[r];
      r < i;
      o = n[++r]
    )
      Je(o) || !rt(o) ? (a += " " + o) : (a += " " + _e(o));
    return a;
  }
  function Ne(t, r) {
    if (et(e.process))
      return function () {
        return Ne(t, r).apply(this, arguments);
      };
    var n = !1;
    return function () {
      return n || (console.error(r), (n = !0)), t.apply(this, arguments);
    };
  }
  var je,
    Ge = {};
  function Ve(e) {
    if ((et(je) && (je = ""), (e = e.toUpperCase()), !Ge[e]))
      if (new RegExp("\\b" + e + "\\b", "i").test(je)) {
        Ge[e] = function () {
          var t = Ue.apply(null, arguments);
          console.error("%s %d: %s", e, 0, t);
        };
      } else Ge[e] = function () {};
    return Ge[e];
  }
  function _e(e, t) {
    var r = { seen: [], stylize: We };
    return (
      arguments.length >= 3 && (r.depth = arguments[2]),
      arguments.length >= 4 && (r.colors = arguments[3]),
      Ke(t) ? (r.showHidden = t) : t && st(r, t),
      et(r.showHidden) && (r.showHidden = !1),
      et(r.depth) && (r.depth = 2),
      et(r.colors) && (r.colors = !1),
      et(r.customInspect) && (r.customInspect = !0),
      r.colors && (r.stylize = qe),
      He(r, e, r.depth)
    );
  }
  function qe(e, t) {
    var r = _e.styles[t];
    return r
      ? "[" + _e.colors[r][0] + "m" + e + "[" + _e.colors[r][1] + "m"
      : e;
  }
  function We(e, t) {
    return e;
  }
  function He(e, t, r) {
    if (
      e.customInspect &&
      t &&
      at(t.inspect) &&
      t.inspect !== _e &&
      (!t.constructor || t.constructor.prototype !== t)
    ) {
      var n = t.inspect(r, e);
      return $e(n) || (n = He(e, n, r)), n;
    }
    var i = (function (e, t) {
      if (et(t)) return e.stylize("undefined", "undefined");
      if ($e(t)) {
        var r =
          "'" +
          JSON.stringify(t)
            .replace(/^"|"$/g, "")
            .replace(/'/g, "\\'")
            .replace(/\\"/g, '"') +
          "'";
        return e.stylize(r, "string");
      }
      if (Qe(t)) return e.stylize("" + t, "number");
      if (Ke(t)) return e.stylize("" + t, "boolean");
      if (Je(t)) return e.stylize("null", "null");
    })(e, t);
    if (i) return i;
    var a = Object.keys(t),
      o = (function (e) {
        var t = {};
        return (
          e.forEach(function (e, r) {
            t[e] = !0;
          }),
          t
        );
      })(a);
    if (
      (e.showHidden && (a = Object.getOwnPropertyNames(t)),
      it(t) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0))
    )
      return Ye(t);
    if (0 === a.length) {
      if (at(t)) {
        var s = t.name ? ": " + t.name : "";
        return e.stylize("[Function" + s + "]", "special");
      }
      if (tt(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");
      if (nt(t)) return e.stylize(Date.prototype.toString.call(t), "date");
      if (it(t)) return Ye(t);
    }
    var u,
      l = "",
      c = !1,
      f = ["{", "}"];
    (Xe(t) && ((c = !0), (f = ["[", "]"])), at(t)) &&
      (l = " [Function" + (t.name ? ": " + t.name : "") + "]");
    return (
      tt(t) && (l = " " + RegExp.prototype.toString.call(t)),
      nt(t) && (l = " " + Date.prototype.toUTCString.call(t)),
      it(t) && (l = " " + Ye(t)),
      0 !== a.length || (c && 0 != t.length)
        ? r < 0
          ? tt(t)
            ? e.stylize(RegExp.prototype.toString.call(t), "regexp")
            : e.stylize("[Object]", "special")
          : (e.seen.push(t),
            (u = c
              ? (function (e, t, r, n, i) {
                  for (var a = [], o = 0, s = t.length; o < s; ++o)
                    ut(t, String(o))
                      ? a.push(Ze(e, t, r, n, String(o), !0))
                      : a.push("");
                  return (
                    i.forEach(function (i) {
                      i.match(/^\d+$/) || a.push(Ze(e, t, r, n, i, !0));
                    }),
                    a
                  );
                })(e, t, r, o, a)
              : a.map(function (n) {
                  return Ze(e, t, r, o, n, c);
                })),
            e.seen.pop(),
            (function (e, t, r) {
              if (
                e.reduce(function (e, t) {
                  return (
                    t.indexOf("\n"),
                    e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                  );
                }, 0) > 60
              )
                return (
                  r[0] +
                  ("" === t ? "" : t + "\n ") +
                  " " +
                  e.join(",\n  ") +
                  " " +
                  r[1]
                );
              return r[0] + t + " " + e.join(", ") + " " + r[1];
            })(u, l, f))
        : f[0] + l + f[1]
    );
  }
  function Ye(e) {
    return "[" + Error.prototype.toString.call(e) + "]";
  }
  function Ze(e, t, r, n, i, a) {
    var o, s, u;
    if (
      ((u = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] }).get
        ? (s = u.set
            ? e.stylize("[Getter/Setter]", "special")
            : e.stylize("[Getter]", "special"))
        : u.set && (s = e.stylize("[Setter]", "special")),
      ut(n, i) || (o = "[" + i + "]"),
      s ||
        (e.seen.indexOf(u.value) < 0
          ? (s = Je(r) ? He(e, u.value, null) : He(e, u.value, r - 1)).indexOf(
              "\n"
            ) > -1 &&
            (s = a
              ? s
                  .split("\n")
                  .map(function (e) {
                    return "  " + e;
                  })
                  .join("\n")
                  .substr(2)
              : "\n" +
                s
                  .split("\n")
                  .map(function (e) {
                    return "   " + e;
                  })
                  .join("\n"))
          : (s = e.stylize("[Circular]", "special"))),
      et(o))
    ) {
      if (a && i.match(/^\d+$/)) return s;
      (o = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
        ? ((o = o.substr(1, o.length - 2)), (o = e.stylize(o, "name")))
        : ((o = o
            .replace(/'/g, "\\'")
            .replace(/\\"/g, '"')
            .replace(/(^"|"$)/g, "'")),
          (o = e.stylize(o, "string")));
    }
    return o + ": " + s;
  }
  function Xe(e) {
    return Array.isArray(e);
  }
  function Ke(e) {
    return "boolean" == typeof e;
  }
  function Je(e) {
    return null === e;
  }
  function Qe(e) {
    return "number" == typeof e;
  }
  function $e(e) {
    return "string" == typeof e;
  }
  function et(e) {
    return void 0 === e;
  }
  function tt(e) {
    return rt(e) && "[object RegExp]" === ot(e);
  }
  function rt(e) {
    return "object" == typeof e && null !== e;
  }
  function nt(e) {
    return rt(e) && "[object Date]" === ot(e);
  }
  function it(e) {
    return rt(e) && ("[object Error]" === ot(e) || e instanceof Error);
  }
  function at(e) {
    return "function" == typeof e;
  }
  function ot(e) {
    return Object.prototype.toString.call(e);
  }
  (_e.colors = {
    bold: [1, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    white: [37, 39],
    grey: [90, 39],
    black: [30, 39],
    blue: [34, 39],
    cyan: [36, 39],
    green: [32, 39],
    magenta: [35, 39],
    red: [31, 39],
    yellow: [33, 39],
  }),
    (_e.styles = {
      special: "cyan",
      number: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      date: "magenta",
      regexp: "red",
    });
  function st(e, t) {
    if (!t || !rt(t)) return e;
    for (var r = Object.keys(t), n = r.length; n--; ) e[r[n]] = t[r[n]];
    return e;
  }
  function ut(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  var lt = _e;
  function ct() {
    (this.head = null), (this.tail = null), (this.length = 0);
  }
  (ct.prototype.push = function (e) {
    var t = { data: e, next: null };
    this.length > 0 ? (this.tail.next = t) : (this.head = t),
      (this.tail = t),
      ++this.length;
  }),
    (ct.prototype.unshift = function (e) {
      var t = { data: e, next: this.head };
      0 === this.length && (this.tail = t), (this.head = t), ++this.length;
    }),
    (ct.prototype.shift = function () {
      if (0 !== this.length) {
        var e = this.head.data;
        return (
          1 === this.length
            ? (this.head = this.tail = null)
            : (this.head = this.head.next),
          --this.length,
          e
        );
      }
    }),
    (ct.prototype.clear = function () {
      (this.head = this.tail = null), (this.length = 0);
    }),
    (ct.prototype.join = function (e) {
      if (0 === this.length) return "";
      for (var t = this.head, r = "" + t.data; (t = t.next); ) r += e + t.data;
      return r;
    }),
    (ct.prototype.concat = function (e) {
      if (0 === this.length) return g.alloc(0);
      if (1 === this.length) return this.head.data;
      for (var t = g.allocUnsafe(e >>> 0), r = this.head, n = 0; r; )
        r.data.copy(t, n), (n += r.data.length), (r = r.next);
      return t;
    });
  var ft = re(function (e, t) {
      var r = $.Buffer,
        n =
          r.isEncoding ||
          function (e) {
            switch (e && e.toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
              case "raw":
                return !0;
              default:
                return !1;
            }
          };
      var i = (t.StringDecoder = function (e) {
        switch (
          ((this.encoding = (e || "utf8").toLowerCase().replace(/[-_]/, "")),
          (function (e) {
            if (e && !n(e)) throw new Error("Unknown encoding: " + e);
          })(e),
          this.encoding)
        ) {
          case "utf8":
            this.surrogateSize = 3;
            break;
          case "ucs2":
          case "utf16le":
            (this.surrogateSize = 2), (this.detectIncompleteChar = o);
            break;
          case "base64":
            (this.surrogateSize = 3), (this.detectIncompleteChar = s);
            break;
          default:
            return void (this.write = a);
        }
        (this.charBuffer = new r(6)),
          (this.charReceived = 0),
          (this.charLength = 0);
      });
      function a(e) {
        return e.toString(this.encoding);
      }
      function o(e) {
        (this.charReceived = e.length % 2),
          (this.charLength = this.charReceived ? 2 : 0);
      }
      function s(e) {
        (this.charReceived = e.length % 3),
          (this.charLength = this.charReceived ? 3 : 0);
      }
      (i.prototype.write = function (e) {
        for (var t = ""; this.charLength; ) {
          var r =
            e.length >= this.charLength - this.charReceived
              ? this.charLength - this.charReceived
              : e.length;
          if (
            (e.copy(this.charBuffer, this.charReceived, 0, r),
            (this.charReceived += r),
            this.charReceived < this.charLength)
          )
            return "";
          if (
            ((e = e.slice(r, e.length)),
            !(
              (i = (t = this.charBuffer
                .slice(0, this.charLength)
                .toString(this.encoding)).charCodeAt(t.length - 1)) >= 55296 &&
              i <= 56319
            ))
          ) {
            if (((this.charReceived = this.charLength = 0), 0 === e.length))
              return t;
            break;
          }
          (this.charLength += this.surrogateSize), (t = "");
        }
        this.detectIncompleteChar(e);
        var n = e.length;
        this.charLength &&
          (e.copy(this.charBuffer, 0, e.length - this.charReceived, n),
          (n -= this.charReceived));
        var i;
        n = (t += e.toString(this.encoding, 0, n)).length - 1;
        if ((i = t.charCodeAt(n)) >= 55296 && i <= 56319) {
          var a = this.surrogateSize;
          return (
            (this.charLength += a),
            (this.charReceived += a),
            this.charBuffer.copy(this.charBuffer, a, 0, a),
            e.copy(this.charBuffer, 0, 0, a),
            t.substring(0, n)
          );
        }
        return t;
      }),
        (i.prototype.detectIncompleteChar = function (e) {
          for (var t = e.length >= 3 ? 3 : e.length; t > 0; t--) {
            var r = e[e.length - t];
            if (1 == t && r >> 5 == 6) {
              this.charLength = 2;
              break;
            }
            if (t <= 2 && r >> 4 == 14) {
              this.charLength = 3;
              break;
            }
            if (t <= 3 && r >> 3 == 30) {
              this.charLength = 4;
              break;
            }
          }
          this.charReceived = t;
        }),
        (i.prototype.end = function (e) {
          var t = "";
          if ((e && e.length && (t = this.write(e)), this.charReceived)) {
            var r = this.charReceived,
              n = this.charBuffer,
              i = this.encoding;
            t += n.slice(0, r).toString(i);
          }
          return t;
        });
    }),
    ht = ft.StringDecoder;
  gt.ReadableState = pt;
  var dt = Ve("stream");
  function pt(e, t) {
    (e = e || {}),
      (this.objectMode = !!e.objectMode),
      t instanceof _t &&
        (this.objectMode = this.objectMode || !!e.readableObjectMode);
    var r = e.highWaterMark,
      n = this.objectMode ? 16 : 16384;
    (this.highWaterMark = r || 0 === r ? r : n),
      (this.highWaterMark = ~~this.highWaterMark),
      (this.buffer = new ct()),
      (this.length = 0),
      (this.pipes = null),
      (this.pipesCount = 0),
      (this.flowing = null),
      (this.ended = !1),
      (this.endEmitted = !1),
      (this.reading = !1),
      (this.sync = !0),
      (this.needReadable = !1),
      (this.emittedReadable = !1),
      (this.readableListening = !1),
      (this.resumeScheduled = !1),
      (this.defaultEncoding = e.defaultEncoding || "utf8"),
      (this.ranOut = !1),
      (this.awaitDrain = 0),
      (this.readingMore = !1),
      (this.decoder = null),
      (this.encoding = null),
      e.encoding &&
        ((this.decoder = new ht(e.encoding)), (this.encoding = e.encoding));
  }
  function gt(e) {
    if (!(this instanceof gt)) return new gt(e);
    (this._readableState = new pt(e, this)),
      (this.readable = !0),
      e && "function" == typeof e.read && (this._read = e.read),
      ae.call(this);
  }
  function vt(e, t, r, n, i) {
    var a = (function (e, t) {
      var r = null;
      J(t) ||
        "string" == typeof t ||
        null == t ||
        e.objectMode ||
        (r = new TypeError("Invalid non-string/buffer chunk"));
      return r;
    })(t, r);
    if (a) e.emit("error", a);
    else if (null === r)
      (t.reading = !1),
        (function (e, t) {
          if (t.ended) return;
          if (t.decoder) {
            var r = t.decoder.end();
            r &&
              r.length &&
              (t.buffer.push(r), (t.length += t.objectMode ? 1 : r.length));
          }
          (t.ended = !0), mt(e);
        })(e, t);
    else if (t.objectMode || (r && r.length > 0))
      if (t.ended && !i) {
        var o = new Error("stream.push() after EOF");
        e.emit("error", o);
      } else if (t.endEmitted && i) {
        var s = new Error("stream.unshift() after end event");
        e.emit("error", s);
      } else {
        var u;
        !t.decoder ||
          i ||
          n ||
          ((r = t.decoder.write(r)), (u = !t.objectMode && 0 === r.length)),
          i || (t.reading = !1),
          u ||
            (t.flowing && 0 === t.length && !t.sync
              ? (e.emit("data", r), e.read(0))
              : ((t.length += t.objectMode ? 1 : r.length),
                i ? t.buffer.unshift(r) : t.buffer.push(r),
                t.needReadable && mt(e))),
          (function (e, t) {
            t.readingMore || ((t.readingMore = !0), Se(xt, e, t));
          })(e, t);
      }
    else i || (t.reading = !1);
    return (function (e) {
      return (
        !e.ended &&
        (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
      );
    })(t);
  }
  Me(gt, ae),
    (gt.prototype.push = function (e, t) {
      var r = this._readableState;
      return (
        r.objectMode ||
          "string" != typeof e ||
          ((t = t || r.defaultEncoding) !== r.encoding &&
            ((e = g.from(e, t)), (t = ""))),
        vt(this, r, e, t, !1)
      );
    }),
    (gt.prototype.unshift = function (e) {
      return vt(this, this._readableState, e, "", !0);
    }),
    (gt.prototype.isPaused = function () {
      return !1 === this._readableState.flowing;
    }),
    (gt.prototype.setEncoding = function (e) {
      return (
        (this._readableState.decoder = new ht(e)),
        (this._readableState.encoding = e),
        this
      );
    });
  var yt = 8388608;
  function bt(e, t) {
    return e <= 0 || (0 === t.length && t.ended)
      ? 0
      : t.objectMode
      ? 1
      : e != e
      ? t.flowing && t.length
        ? t.buffer.head.data.length
        : t.length
      : (e > t.highWaterMark &&
          (t.highWaterMark = (function (e) {
            return (
              e >= yt
                ? (e = yt)
                : (e--,
                  (e |= e >>> 1),
                  (e |= e >>> 2),
                  (e |= e >>> 4),
                  (e |= e >>> 8),
                  (e |= e >>> 16),
                  e++),
              e
            );
          })(e)),
        e <= t.length ? e : t.ended ? t.length : ((t.needReadable = !0), 0));
  }
  function mt(e) {
    var t = e._readableState;
    (t.needReadable = !1),
      t.emittedReadable ||
        (dt("emitReadable", t.flowing),
        (t.emittedReadable = !0),
        t.sync ? Se(wt, e) : wt(e));
  }
  function wt(e) {
    dt("emit readable"), e.emit("readable"), At(e);
  }
  function xt(e, t) {
    for (
      var r = t.length;
      !t.reading &&
      !t.flowing &&
      !t.ended &&
      t.length < t.highWaterMark &&
      (dt("maybeReadMore read 0"), e.read(0), r !== t.length);

    )
      r = t.length;
    t.readingMore = !1;
  }
  function St(e) {
    dt("readable nexttick read 0"), e.read(0);
  }
  function kt(e, t) {
    t.reading || (dt("resume read 0"), e.read(0)),
      (t.resumeScheduled = !1),
      (t.awaitDrain = 0),
      e.emit("resume"),
      At(e),
      t.flowing && !t.reading && e.read(0);
  }
  function At(e) {
    var t = e._readableState;
    for (dt("flow", t.flowing); t.flowing && null !== e.read(); );
  }
  function Ct(e, t) {
    return 0 === t.length
      ? null
      : (t.objectMode
          ? (r = t.buffer.shift())
          : !e || e >= t.length
          ? ((r = t.decoder
              ? t.buffer.join("")
              : 1 === t.buffer.length
              ? t.buffer.head.data
              : t.buffer.concat(t.length)),
            t.buffer.clear())
          : (r = (function (e, t, r) {
              var n;
              e < t.head.data.length
                ? ((n = t.head.data.slice(0, e)),
                  (t.head.data = t.head.data.slice(e)))
                : (n =
                    e === t.head.data.length
                      ? t.shift()
                      : r
                      ? (function (e, t) {
                          var r = t.head,
                            n = 1,
                            i = r.data;
                          e -= i.length;
                          for (; (r = r.next); ) {
                            var a = r.data,
                              o = e > a.length ? a.length : e;
                            if (
                              (o === a.length ? (i += a) : (i += a.slice(0, e)),
                              0 === (e -= o))
                            ) {
                              o === a.length
                                ? (++n,
                                  r.next
                                    ? (t.head = r.next)
                                    : (t.head = t.tail = null))
                                : ((t.head = r), (r.data = a.slice(o)));
                              break;
                            }
                            ++n;
                          }
                          return (t.length -= n), i;
                        })(e, t)
                      : (function (e, t) {
                          var r = g.allocUnsafe(e),
                            n = t.head,
                            i = 1;
                          n.data.copy(r), (e -= n.data.length);
                          for (; (n = n.next); ) {
                            var a = n.data,
                              o = e > a.length ? a.length : e;
                            if (
                              (a.copy(r, r.length - e, 0, o), 0 === (e -= o))
                            ) {
                              o === a.length
                                ? (++i,
                                  n.next
                                    ? (t.head = n.next)
                                    : (t.head = t.tail = null))
                                : ((t.head = n), (n.data = a.slice(o)));
                              break;
                            }
                            ++i;
                          }
                          return (t.length -= i), r;
                        })(e, t));
              return n;
            })(e, t.buffer, t.decoder)),
        r);
    var r;
  }
  function Pt(e) {
    var t = e._readableState;
    if (t.length > 0)
      throw new Error('"endReadable()" called on non-empty stream');
    t.endEmitted || ((t.ended = !0), Se(It, t, e));
  }
  function It(e, t) {
    e.endEmitted ||
      0 !== e.length ||
      ((e.endEmitted = !0), (t.readable = !1), t.emit("end"));
  }
  function Ot(e, t) {
    for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
    return -1;
  }
  function Et() {}
  function Bt(e, t, r) {
    (this.chunk = e),
      (this.encoding = t),
      (this.callback = r),
      (this.next = null);
  }
  function Tt(e, t) {
    Object.defineProperty(this, "buffer", {
      get: Ne(function () {
        return this.getBuffer();
      }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead."),
    }),
      (e = e || {}),
      (this.objectMode = !!e.objectMode),
      t instanceof _t &&
        (this.objectMode = this.objectMode || !!e.writableObjectMode);
    var r = e.highWaterMark,
      n = this.objectMode ? 16 : 16384;
    (this.highWaterMark = r || 0 === r ? r : n),
      (this.highWaterMark = ~~this.highWaterMark),
      (this.needDrain = !1),
      (this.ending = !1),
      (this.ended = !1),
      (this.finished = !1);
    var i = !1 === e.decodeStrings;
    (this.decodeStrings = !i),
      (this.defaultEncoding = e.defaultEncoding || "utf8"),
      (this.length = 0),
      (this.writing = !1),
      (this.corked = 0),
      (this.sync = !0),
      (this.bufferProcessing = !1),
      (this.onwrite = function (e) {
        !(function (e, t) {
          var r = e._writableState,
            n = r.sync,
            i = r.writecb;
          if (
            ((function (e) {
              (e.writing = !1),
                (e.writecb = null),
                (e.length -= e.writelen),
                (e.writelen = 0);
            })(r),
            t)
          )
            !(function (e, t, r, n, i) {
              --t.pendingcb, r ? Se(i, n) : i(n);
              (e._writableState.errorEmitted = !0), e.emit("error", n);
            })(e, r, n, t, i);
          else {
            var a = Mt(r);
            a ||
              r.corked ||
              r.bufferProcessing ||
              !r.bufferedRequest ||
              Rt(e, r),
              n ? Se(Dt, e, r, a, i) : Dt(e, r, a, i);
          }
        })(t, e);
      }),
      (this.writecb = null),
      (this.writelen = 0),
      (this.bufferedRequest = null),
      (this.lastBufferedRequest = null),
      (this.pendingcb = 0),
      (this.prefinished = !1),
      (this.errorEmitted = !1),
      (this.bufferedRequestCount = 0),
      (this.corkedRequestsFree = new Nt(this));
  }
  function Lt(e) {
    if (!(this instanceof Lt || this instanceof _t)) return new Lt(e);
    (this._writableState = new Tt(e, this)),
      (this.writable = !0),
      e &&
        ("function" == typeof e.write && (this._write = e.write),
        "function" == typeof e.writev && (this._writev = e.writev)),
      ae.call(this);
  }
  function zt(e, t, r, n, i, a, o) {
    (t.writelen = n),
      (t.writecb = o),
      (t.writing = !0),
      (t.sync = !0),
      r ? e._writev(i, t.onwrite) : e._write(i, a, t.onwrite),
      (t.sync = !1);
  }
  function Dt(e, t, r, n) {
    r ||
      (function (e, t) {
        0 === t.length && t.needDrain && ((t.needDrain = !1), e.emit("drain"));
      })(e, t),
      t.pendingcb--,
      n(),
      Ut(e, t);
  }
  function Rt(e, t) {
    t.bufferProcessing = !0;
    var r = t.bufferedRequest;
    if (e._writev && r && r.next) {
      var n = t.bufferedRequestCount,
        i = new Array(n),
        a = t.corkedRequestsFree;
      a.entry = r;
      for (var o = 0; r; ) (i[o] = r), (r = r.next), (o += 1);
      zt(e, t, !0, t.length, i, "", a.finish),
        t.pendingcb++,
        (t.lastBufferedRequest = null),
        a.next
          ? ((t.corkedRequestsFree = a.next), (a.next = null))
          : (t.corkedRequestsFree = new Nt(t));
    } else {
      for (; r; ) {
        var s = r.chunk,
          u = r.encoding,
          l = r.callback;
        if (
          (zt(e, t, !1, t.objectMode ? 1 : s.length, s, u, l),
          (r = r.next),
          t.writing)
        )
          break;
      }
      null === r && (t.lastBufferedRequest = null);
    }
    (t.bufferedRequestCount = 0),
      (t.bufferedRequest = r),
      (t.bufferProcessing = !1);
  }
  function Mt(e) {
    return (
      e.ending &&
      0 === e.length &&
      null === e.bufferedRequest &&
      !e.finished &&
      !e.writing
    );
  }
  function Ft(e, t) {
    t.prefinished || ((t.prefinished = !0), e.emit("prefinish"));
  }
  function Ut(e, t) {
    var r = Mt(t);
    return (
      r &&
        (0 === t.pendingcb
          ? (Ft(e, t), (t.finished = !0), e.emit("finish"))
          : Ft(e, t)),
      r
    );
  }
  function Nt(e) {
    var t = this;
    (this.next = null),
      (this.entry = null),
      (this.finish = function (r) {
        var n = t.entry;
        for (t.entry = null; n; ) {
          var i = n.callback;
          e.pendingcb--, i(r), (n = n.next);
        }
        e.corkedRequestsFree
          ? (e.corkedRequestsFree.next = t)
          : (e.corkedRequestsFree = t);
      });
  }
  (gt.prototype.read = function (e) {
    dt("read", e), (e = parseInt(e, 10));
    var t = this._readableState,
      r = e;
    if (
      (0 !== e && (t.emittedReadable = !1),
      0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended))
    )
      return (
        dt("read: emitReadable", t.length, t.ended),
        0 === t.length && t.ended ? Pt(this) : mt(this),
        null
      );
    if (0 === (e = bt(e, t)) && t.ended)
      return 0 === t.length && Pt(this), null;
    var n,
      i = t.needReadable;
    return (
      dt("need readable", i),
      (0 === t.length || t.length - e < t.highWaterMark) &&
        dt("length less than watermark", (i = !0)),
      t.ended || t.reading
        ? dt("reading or ended", (i = !1))
        : i &&
          (dt("do read"),
          (t.reading = !0),
          (t.sync = !0),
          0 === t.length && (t.needReadable = !0),
          this._read(t.highWaterMark),
          (t.sync = !1),
          t.reading || (e = bt(r, t))),
      null === (n = e > 0 ? Ct(e, t) : null)
        ? ((t.needReadable = !0), (e = 0))
        : (t.length -= e),
      0 === t.length &&
        (t.ended || (t.needReadable = !0), r !== e && t.ended && Pt(this)),
      null !== n && this.emit("data", n),
      n
    );
  }),
    (gt.prototype._read = function (e) {
      this.emit("error", new Error("not implemented"));
    }),
    (gt.prototype.pipe = function (e, t) {
      var r = this,
        n = this._readableState;
      switch (n.pipesCount) {
        case 0:
          n.pipes = e;
          break;
        case 1:
          n.pipes = [n.pipes, e];
          break;
        default:
          n.pipes.push(e);
      }
      (n.pipesCount += 1), dt("pipe count=%d opts=%j", n.pipesCount, t);
      var i = !t || !1 !== t.end ? o : l;
      function a(e) {
        dt("onunpipe"), e === r && l();
      }
      function o() {
        dt("onend"), e.end();
      }
      n.endEmitted ? Se(i) : r.once("end", i), e.on("unpipe", a);
      var s = (function (e) {
        return function () {
          var t = e._readableState;
          dt("pipeOnDrain", t.awaitDrain),
            t.awaitDrain && t.awaitDrain--,
            0 === t.awaitDrain &&
              e.listeners("data").length &&
              ((t.flowing = !0), At(e));
        };
      })(r);
      e.on("drain", s);
      var u = !1;
      function l() {
        dt("cleanup"),
          e.removeListener("close", d),
          e.removeListener("finish", p),
          e.removeListener("drain", s),
          e.removeListener("error", h),
          e.removeListener("unpipe", a),
          r.removeListener("end", o),
          r.removeListener("end", l),
          r.removeListener("data", f),
          (u = !0),
          !n.awaitDrain ||
            (e._writableState && !e._writableState.needDrain) ||
            s();
      }
      var c = !1;
      function f(t) {
        dt("ondata"),
          (c = !1),
          !1 !== e.write(t) ||
            c ||
            (((1 === n.pipesCount && n.pipes === e) ||
              (n.pipesCount > 1 && -1 !== Ot(n.pipes, e))) &&
              !u &&
              (dt("false write response, pause", r._readableState.awaitDrain),
              r._readableState.awaitDrain++,
              (c = !0)),
            r.pause());
      }
      function h(t) {
        var r;
        dt("onerror", t),
          g(),
          e.removeListener("error", h),
          0 === ((r = "error"), e.listeners(r).length) && e.emit("error", t);
      }
      function d() {
        e.removeListener("finish", p), g();
      }
      function p() {
        dt("onfinish"), e.removeListener("close", d), g();
      }
      function g() {
        dt("unpipe"), r.unpipe(e);
      }
      return (
        r.on("data", f),
        (function (e, t, r) {
          if ("function" == typeof e.prependListener)
            return e.prependListener(t, r);
          e._events && e._events[t]
            ? Array.isArray(e._events[t])
              ? e._events[t].unshift(r)
              : (e._events[t] = [r, e._events[t]])
            : e.on(t, r);
        })(e, "error", h),
        e.once("close", d),
        e.once("finish", p),
        e.emit("pipe", r),
        n.flowing || (dt("pipe resume"), r.resume()),
        e
      );
    }),
    (gt.prototype.unpipe = function (e) {
      var t = this._readableState;
      if (0 === t.pipesCount) return this;
      if (1 === t.pipesCount)
        return e && e !== t.pipes
          ? this
          : (e || (e = t.pipes),
            (t.pipes = null),
            (t.pipesCount = 0),
            (t.flowing = !1),
            e && e.emit("unpipe", this),
            this);
      if (!e) {
        var r = t.pipes,
          n = t.pipesCount;
        (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
        for (var i = 0; i < n; i++) r[i].emit("unpipe", this);
        return this;
      }
      var a = Ot(t.pipes, e);
      return -1 === a
        ? this
        : (t.pipes.splice(a, 1),
          (t.pipesCount -= 1),
          1 === t.pipesCount && (t.pipes = t.pipes[0]),
          e.emit("unpipe", this),
          this);
    }),
    (gt.prototype.on = function (e, t) {
      var r = ae.prototype.on.call(this, e, t);
      if ("data" === e) !1 !== this._readableState.flowing && this.resume();
      else if ("readable" === e) {
        var n = this._readableState;
        n.endEmitted ||
          n.readableListening ||
          ((n.readableListening = n.needReadable = !0),
          (n.emittedReadable = !1),
          n.reading ? n.length && mt(this) : Se(St, this));
      }
      return r;
    }),
    (gt.prototype.addListener = gt.prototype.on),
    (gt.prototype.resume = function () {
      var e = this._readableState;
      return (
        e.flowing ||
          (dt("resume"),
          (e.flowing = !0),
          (function (e, t) {
            t.resumeScheduled || ((t.resumeScheduled = !0), Se(kt, e, t));
          })(this, e)),
        this
      );
    }),
    (gt.prototype.pause = function () {
      return (
        dt("call pause flowing=%j", this._readableState.flowing),
        !1 !== this._readableState.flowing &&
          (dt("pause"), (this._readableState.flowing = !1), this.emit("pause")),
        this
      );
    }),
    (gt.prototype.wrap = function (e) {
      var t = this._readableState,
        r = !1,
        n = this;
      for (var i in (e.on("end", function () {
        if ((dt("wrapped end"), t.decoder && !t.ended)) {
          var e = t.decoder.end();
          e && e.length && n.push(e);
        }
        n.push(null);
      }),
      e.on("data", function (i) {
        (dt("wrapped data"),
        t.decoder && (i = t.decoder.write(i)),
        t.objectMode && null == i) ||
          ((t.objectMode || (i && i.length)) &&
            (n.push(i) || ((r = !0), e.pause())));
      }),
      e))
        void 0 === this[i] &&
          "function" == typeof e[i] &&
          (this[i] = (function (t) {
            return function () {
              return e[t].apply(e, arguments);
            };
          })(i));
      return (
        (function (e, t) {
          for (var r = 0, n = e.length; r < n; r++) t(e[r], r);
        })(["error", "close", "destroy", "pause", "resume"], function (t) {
          e.on(t, n.emit.bind(n, t));
        }),
        (n._read = function (t) {
          dt("wrapped _read", t), r && ((r = !1), e.resume());
        }),
        n
      );
    }),
    (gt._fromList = Ct),
    (Lt.WritableState = Tt),
    Me(Lt, ae),
    (Tt.prototype.getBuffer = function () {
      for (var e = this.bufferedRequest, t = []; e; ) t.push(e), (e = e.next);
      return t;
    }),
    (Lt.prototype.pipe = function () {
      this.emit("error", new Error("Cannot pipe, not readable"));
    }),
    (Lt.prototype.write = function (e, t, r) {
      var n = this._writableState,
        i = !1;
      return (
        "function" == typeof t && ((r = t), (t = null)),
        g.isBuffer(e) ? (t = "buffer") : t || (t = n.defaultEncoding),
        "function" != typeof r && (r = Et),
        n.ended
          ? (function (e, t) {
              var r = new Error("write after end");
              e.emit("error", r), Se(t, r);
            })(this, r)
          : (function (e, t, r, n) {
              var i = !0,
                a = !1;
              return (
                null === r
                  ? (a = new TypeError("May not write null values to stream"))
                  : g.isBuffer(r) ||
                    "string" == typeof r ||
                    void 0 === r ||
                    t.objectMode ||
                    (a = new TypeError("Invalid non-string/buffer chunk")),
                a && (e.emit("error", a), Se(n, a), (i = !1)),
                i
              );
            })(this, n, e, r) &&
            (n.pendingcb++,
            (i = (function (e, t, r, n, i) {
              (r = (function (e, t, r) {
                return (
                  e.objectMode ||
                    !1 === e.decodeStrings ||
                    "string" != typeof t ||
                    (t = g.from(t, r)),
                  t
                );
              })(t, r, n)),
                g.isBuffer(r) && (n = "buffer");
              var a = t.objectMode ? 1 : r.length;
              t.length += a;
              var o = t.length < t.highWaterMark;
              o || (t.needDrain = !0);
              if (t.writing || t.corked) {
                var s = t.lastBufferedRequest;
                (t.lastBufferedRequest = new Bt(r, n, i)),
                  s
                    ? (s.next = t.lastBufferedRequest)
                    : (t.bufferedRequest = t.lastBufferedRequest),
                  (t.bufferedRequestCount += 1);
              } else zt(e, t, !1, a, r, n, i);
              return o;
            })(this, n, e, t, r))),
        i
      );
    }),
    (Lt.prototype.cork = function () {
      this._writableState.corked++;
    }),
    (Lt.prototype.uncork = function () {
      var e = this._writableState;
      e.corked &&
        (e.corked--,
        e.writing ||
          e.corked ||
          e.finished ||
          e.bufferProcessing ||
          !e.bufferedRequest ||
          Rt(this, e));
    }),
    (Lt.prototype.setDefaultEncoding = function (e) {
      if (
        ("string" == typeof e && (e = e.toLowerCase()),
        !(
          [
            "hex",
            "utf8",
            "utf-8",
            "ascii",
            "binary",
            "base64",
            "ucs2",
            "ucs-2",
            "utf16le",
            "utf-16le",
            "raw",
          ].indexOf((e + "").toLowerCase()) > -1
        ))
      )
        throw new TypeError("Unknown encoding: " + e);
      return (this._writableState.defaultEncoding = e), this;
    }),
    (Lt.prototype._write = function (e, t, r) {
      r(new Error("not implemented"));
    }),
    (Lt.prototype._writev = null),
    (Lt.prototype.end = function (e, t, r) {
      var n = this._writableState;
      "function" == typeof e
        ? ((r = e), (e = null), (t = null))
        : "function" == typeof t && ((r = t), (t = null)),
        null != e && this.write(e, t),
        n.corked && ((n.corked = 1), this.uncork()),
        n.ending ||
          n.finished ||
          (function (e, t, r) {
            (t.ending = !0),
              Ut(e, t),
              r && (t.finished ? Se(r) : e.once("finish", r));
            (t.ended = !0), (e.writable = !1);
          })(this, n, r);
    }),
    Me(_t, gt);
  for (var jt = Object.keys(Lt.prototype), Gt = 0; Gt < jt.length; Gt++) {
    var Vt = jt[Gt];
    _t.prototype[Vt] || (_t.prototype[Vt] = Lt.prototype[Vt]);
  }
  function _t(e) {
    if (!(this instanceof _t)) return new _t(e);
    gt.call(this, e),
      Lt.call(this, e),
      e && !1 === e.readable && (this.readable = !1),
      e && !1 === e.writable && (this.writable = !1),
      (this.allowHalfOpen = !0),
      e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
      this.once("end", qt);
  }
  function qt() {
    this.allowHalfOpen || this._writableState.ended || Se(Wt, this);
  }
  function Wt(e) {
    e.end();
  }
  function Ht(e) {
    (this.afterTransform = function (t, r) {
      return (function (e, t, r) {
        var n = e._transformState;
        n.transforming = !1;
        var i = n.writecb;
        if (!i)
          return e.emit("error", new Error("no writecb in Transform class"));
        (n.writechunk = null), (n.writecb = null), null != r && e.push(r);
        i(t);
        var a = e._readableState;
        (a.reading = !1),
          (a.needReadable || a.length < a.highWaterMark) &&
            e._read(a.highWaterMark);
      })(e, t, r);
    }),
      (this.needTransform = !1),
      (this.transforming = !1),
      (this.writecb = null),
      (this.writechunk = null),
      (this.writeencoding = null);
  }
  function Yt(e) {
    if (!(this instanceof Yt)) return new Yt(e);
    _t.call(this, e), (this._transformState = new Ht(this));
    var t = this;
    (this._readableState.needReadable = !0),
      (this._readableState.sync = !1),
      e &&
        ("function" == typeof e.transform && (this._transform = e.transform),
        "function" == typeof e.flush && (this._flush = e.flush)),
      this.once("prefinish", function () {
        "function" == typeof this._flush
          ? this._flush(function (e) {
              Zt(t, e);
            })
          : Zt(t);
      });
  }
  function Zt(e, t) {
    if (t) return e.emit("error", t);
    var r = e._writableState,
      n = e._transformState;
    if (r.length) throw new Error("Calling transform done when ws.length != 0");
    if (n.transforming)
      throw new Error("Calling transform done when still transforming");
    return e.push(null);
  }
  function Xt(e) {
    if (!(this instanceof Xt)) return new Xt(e);
    Yt.call(this, e);
  }
  function Kt() {
    ae.call(this);
  }
  Me(Yt, _t),
    (Yt.prototype.push = function (e, t) {
      return (
        (this._transformState.needTransform = !1),
        _t.prototype.push.call(this, e, t)
      );
    }),
    (Yt.prototype._transform = function (e, t, r) {
      throw new Error("Not implemented");
    }),
    (Yt.prototype._write = function (e, t, r) {
      var n = this._transformState;
      if (
        ((n.writecb = r),
        (n.writechunk = e),
        (n.writeencoding = t),
        !n.transforming)
      ) {
        var i = this._readableState;
        (n.needTransform || i.needReadable || i.length < i.highWaterMark) &&
          this._read(i.highWaterMark);
      }
    }),
    (Yt.prototype._read = function (e) {
      var t = this._transformState;
      null !== t.writechunk && t.writecb && !t.transforming
        ? ((t.transforming = !0),
          this._transform(t.writechunk, t.writeencoding, t.afterTransform))
        : (t.needTransform = !0);
    }),
    Me(Xt, Yt),
    (Xt.prototype._transform = function (e, t, r) {
      r(null, e);
    }),
    Me(Kt, ae),
    (Kt.Readable = gt),
    (Kt.Writable = Lt),
    (Kt.Duplex = _t),
    (Kt.Transform = Yt),
    (Kt.PassThrough = Xt),
    (Kt.Stream = Kt),
    (Kt.prototype.pipe = function (e, t) {
      var r = this;
      function n(t) {
        e.writable && !1 === e.write(t) && r.pause && r.pause();
      }
      function i() {
        r.readable && r.resume && r.resume();
      }
      r.on("data", n),
        e.on("drain", i),
        e._isStdio || (t && !1 === t.end) || (r.on("end", o), r.on("close", s));
      var a = !1;
      function o() {
        a || ((a = !0), e.end());
      }
      function s() {
        a || ((a = !0), "function" == typeof e.destroy && e.destroy());
      }
      function u(e) {
        if ((l(), 0 === ae.listenerCount(this, "error"))) throw e;
      }
      function l() {
        r.removeListener("data", n),
          e.removeListener("drain", i),
          r.removeListener("end", o),
          r.removeListener("close", s),
          r.removeListener("error", u),
          e.removeListener("error", u),
          r.removeListener("end", l),
          r.removeListener("close", l),
          e.removeListener("close", l);
      }
      return (
        r.on("error", u),
        e.on("error", u),
        r.on("end", l),
        r.on("close", l),
        e.on("close", l),
        e.emit("pipe", r),
        e
      );
    });
  var Jt,
    Qt = $.Buffer,
    $t = {};
  for (Jt in $)
    $.hasOwnProperty(Jt) &&
      "SlowBuffer" !== Jt &&
      "Buffer" !== Jt &&
      ($t[Jt] = $[Jt]);
  var er = ($t.Buffer = {});
  for (Jt in Qt)
    Qt.hasOwnProperty(Jt) &&
      "allocUnsafe" !== Jt &&
      "allocUnsafeSlow" !== Jt &&
      (er[Jt] = Qt[Jt]);
  if (
    (($t.Buffer.prototype = Qt.prototype),
    (er.from && er.from !== Uint8Array.from) ||
      (er.from = function (e, t, r) {
        if ("number" == typeof e)
          throw new TypeError(
            'The "value" argument must not be of type number. Received type ' +
              typeof e
          );
        if (e && void 0 === e.length)
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof e
          );
        return Qt(e, t, r);
      }),
    er.alloc ||
      (er.alloc = function (e, t, r) {
        if ("number" != typeof e)
          throw new TypeError(
            'The "size" argument must be of type number. Received type ' +
              typeof e
          );
        if (e < 0 || e >= 2 * (1 << 30))
          throw new RangeError(
            'The value "' + e + '" is invalid for option "size"'
          );
        var n = Qt(e);
        return (
          t && 0 !== t.length
            ? "string" == typeof r
              ? n.fill(t, r)
              : n.fill(t)
            : n.fill(0),
          n
        );
      }),
    !$t.kStringMaxLength)
  )
    try {
      $t.kStringMaxLength = Re.binding("buffer").kStringMaxLength;
    } catch (e) {}
  $t.constants ||
    (($t.constants = { MAX_LENGTH: $t.kMaxLength }),
    $t.kStringMaxLength &&
      ($t.constants.MAX_STRING_LENGTH = $t.kStringMaxLength));
  var tr = $t,
    rr = nr;
  function nr(e, t) {
    (this.encoder = e), (this.addBOM = !0);
  }
  (nr.prototype.write = function (e) {
    return (
      this.addBOM && ((e = "\ufeff" + e), (this.addBOM = !1)),
      this.encoder.write(e)
    );
  }),
    (nr.prototype.end = function () {
      return this.encoder.end();
    });
  var ir = ar;
  function ar(e, t) {
    (this.decoder = e), (this.pass = !1), (this.options = t || {});
  }
  (ar.prototype.write = function (e) {
    var t = this.decoder.write(e);
    return this.pass || !t
      ? t
      : ("\ufeff" === t[0] &&
          ((t = t.slice(1)),
          "function" == typeof this.options.stripBOM &&
            this.options.stripBOM()),
        (this.pass = !0),
        t);
  }),
    (ar.prototype.end = function () {
      return this.decoder.end();
    });
  var or = { PrependBOM: rr, StripBOM: ir },
    sr = tr.Buffer,
    ur = {
      utf8: { type: "_internal", bomAware: !0 },
      cesu8: { type: "_internal", bomAware: !0 },
      unicode11utf8: "utf8",
      ucs2: { type: "_internal", bomAware: !0 },
      utf16le: "ucs2",
      binary: { type: "_internal" },
      base64: { type: "_internal" },
      hex: { type: "_internal" },
      _internal: lr,
    };
  function lr(e, t) {
    (this.enc = e.encodingName),
      (this.bomAware = e.bomAware),
      "base64" === this.enc
        ? (this.encoder = dr)
        : "cesu8" === this.enc &&
          ((this.enc = "utf8"),
          (this.encoder = pr),
          "💩" !== sr.from("eda0bdedb2a9", "hex").toString() &&
            ((this.decoder = gr),
            (this.defaultCharUnicode = t.defaultCharUnicode)));
  }
  (lr.prototype.encoder = hr), (lr.prototype.decoder = fr);
  var cr = ft.StringDecoder;
  function fr(e, t) {
    cr.call(this, t.enc);
  }
  function hr(e, t) {
    this.enc = t.enc;
  }
  function dr(e, t) {
    this.prevStr = "";
  }
  function pr(e, t) {}
  function gr(e, t) {
    (this.acc = 0),
      (this.contBytes = 0),
      (this.accBytes = 0),
      (this.defaultCharUnicode = t.defaultCharUnicode);
  }
  cr.prototype.end || (cr.prototype.end = function () {}),
    (fr.prototype = cr.prototype),
    (hr.prototype.write = function (e) {
      return sr.from(e, this.enc);
    }),
    (hr.prototype.end = function () {}),
    (dr.prototype.write = function (e) {
      var t = (e = this.prevStr + e).length - (e.length % 4);
      return (
        (this.prevStr = e.slice(t)), (e = e.slice(0, t)), sr.from(e, "base64")
      );
    }),
    (dr.prototype.end = function () {
      return sr.from(this.prevStr, "base64");
    }),
    (pr.prototype.write = function (e) {
      for (var t = sr.alloc(3 * e.length), r = 0, n = 0; n < e.length; n++) {
        var i = e.charCodeAt(n);
        i < 128
          ? (t[r++] = i)
          : i < 2048
          ? ((t[r++] = 192 + (i >>> 6)), (t[r++] = 128 + (63 & i)))
          : ((t[r++] = 224 + (i >>> 12)),
            (t[r++] = 128 + ((i >>> 6) & 63)),
            (t[r++] = 128 + (63 & i)));
      }
      return t.slice(0, r);
    }),
    (pr.prototype.end = function () {}),
    (gr.prototype.write = function (e) {
      for (
        var t = this.acc, r = this.contBytes, n = this.accBytes, i = "", a = 0;
        a < e.length;
        a++
      ) {
        var o = e[a];
        128 != (192 & o)
          ? (r > 0 && ((i += this.defaultCharUnicode), (r = 0)),
            o < 128
              ? (i += String.fromCharCode(o))
              : o < 224
              ? ((t = 31 & o), (r = 1), (n = 1))
              : o < 240
              ? ((t = 15 & o), (r = 2), (n = 1))
              : (i += this.defaultCharUnicode))
          : r > 0
          ? ((t = (t << 6) | (63 & o)),
            n++,
            0 === --r &&
              (i +=
                2 === n && t < 128 && t > 0
                  ? this.defaultCharUnicode
                  : 3 === n && t < 2048
                  ? this.defaultCharUnicode
                  : String.fromCharCode(t)))
          : (i += this.defaultCharUnicode);
      }
      return (this.acc = t), (this.contBytes = r), (this.accBytes = n), i;
    }),
    (gr.prototype.end = function () {
      var e = 0;
      return this.contBytes > 0 && (e += this.defaultCharUnicode), e;
    });
  var vr = tr.Buffer,
    yr = br;
  function br() {}
  function mr() {}
  function wr() {
    this.overflowByte = -1;
  }
  (br.prototype.encoder = mr),
    (br.prototype.decoder = wr),
    (br.prototype.bomAware = !0),
    (mr.prototype.write = function (e) {
      for (var t = vr.from(e, "ucs2"), r = 0; r < t.length; r += 2) {
        var n = t[r];
        (t[r] = t[r + 1]), (t[r + 1] = n);
      }
      return t;
    }),
    (mr.prototype.end = function () {}),
    (wr.prototype.write = function (e) {
      if (0 == e.length) return "";
      var t = vr.alloc(e.length + 1),
        r = 0,
        n = 0;
      for (
        -1 !== this.overflowByte &&
        ((t[0] = e[0]), (t[1] = this.overflowByte), (r = 1), (n = 2));
        r < e.length - 1;
        r += 2, n += 2
      )
        (t[n] = e[r + 1]), (t[n + 1] = e[r]);
      return (
        (this.overflowByte = r == e.length - 1 ? e[e.length - 1] : -1),
        t.slice(0, n).toString("ucs2")
      );
    }),
    (wr.prototype.end = function () {});
  var xr = Sr;
  function Sr(e, t) {
    this.iconv = t;
  }
  function kr(e, t) {
    void 0 === (e = e || {}).addBOM && (e.addBOM = !0),
      (this.encoder = t.iconv.getEncoder("utf-16le", e));
  }
  function Ar(e, t) {
    (this.decoder = null),
      (this.initialBytes = []),
      (this.initialBytesLen = 0),
      (this.options = e || {}),
      (this.iconv = t.iconv);
  }
  function Cr(e, t) {
    var r = t || "utf-16le";
    if (e.length >= 2)
      if (254 == e[0] && 255 == e[1]) r = "utf-16be";
      else if (255 == e[0] && 254 == e[1]) r = "utf-16le";
      else {
        for (
          var n = 0, i = 0, a = Math.min(e.length - (e.length % 2), 64), o = 0;
          o < a;
          o += 2
        )
          0 === e[o] && 0 !== e[o + 1] && i++,
            0 !== e[o] && 0 === e[o + 1] && n++;
        i > n ? (r = "utf-16be") : i < n && (r = "utf-16le");
      }
    return r;
  }
  (Sr.prototype.encoder = kr),
    (Sr.prototype.decoder = Ar),
    (kr.prototype.write = function (e) {
      return this.encoder.write(e);
    }),
    (kr.prototype.end = function () {
      return this.encoder.end();
    }),
    (Ar.prototype.write = function (e) {
      if (!this.decoder) {
        if (
          (this.initialBytes.push(e),
          (this.initialBytesLen += e.length),
          this.initialBytesLen < 16)
        )
          return "";
        var t = Cr(
          (e = vr.concat(this.initialBytes)),
          this.options.defaultEncoding
        );
        (this.decoder = this.iconv.getDecoder(t, this.options)),
          (this.initialBytes.length = this.initialBytesLen = 0);
      }
      return this.decoder.write(e);
    }),
    (Ar.prototype.end = function () {
      if (!this.decoder) {
        var e = vr.concat(this.initialBytes),
          t = Cr(e, this.options.defaultEncoding);
        this.decoder = this.iconv.getDecoder(t, this.options);
        var r = this.decoder.write(e),
          n = this.decoder.end();
        return n ? r + n : r;
      }
      return this.decoder.end();
    });
  var Pr = { utf16be: yr, utf16: xr },
    Ir = tr.Buffer,
    Or = Er;
  function Er(e, t) {
    this.iconv = t;
  }
  (Er.prototype.encoder = Tr),
    (Er.prototype.decoder = Lr),
    (Er.prototype.bomAware = !0);
  var Br = /[^A-Za-z0-9'\(\),-\.\/:\? \n\r\t]+/g;
  function Tr(e, t) {
    this.iconv = t.iconv;
  }
  function Lr(e, t) {
    (this.iconv = t.iconv), (this.inBase64 = !1), (this.base64Accum = "");
  }
  (Tr.prototype.write = function (e) {
    return Ir.from(
      e.replace(
        Br,
        function (e) {
          return (
            "+" +
            ("+" === e
              ? ""
              : this.iconv
                  .encode(e, "utf16-be")
                  .toString("base64")
                  .replace(/=+$/, "")) +
            "-"
          );
        }.bind(this)
      )
    );
  }),
    (Tr.prototype.end = function () {});
  for (var zr = /[A-Za-z0-9\/+]/, Dr = [], Rr = 0; Rr < 256; Rr++)
    Dr[Rr] = zr.test(String.fromCharCode(Rr));
  var Mr = "+".charCodeAt(0),
    Fr = "-".charCodeAt(0),
    Ur = "&".charCodeAt(0);
  (Lr.prototype.write = function (e) {
    for (
      var t = "", r = 0, n = this.inBase64, i = this.base64Accum, a = 0;
      a < e.length;
      a++
    )
      if (n) {
        if (!Dr[e[a]]) {
          if (a == r && e[a] == Fr) t += "+";
          else {
            var o = i + e.slice(r, a).toString();
            t += this.iconv.decode(Ir.from(o, "base64"), "utf16-be");
          }
          e[a] != Fr && a--, (r = a + 1), (n = !1), (i = "");
        }
      } else
        e[a] == Mr &&
          ((t += this.iconv.decode(e.slice(r, a), "ascii")),
          (r = a + 1),
          (n = !0));
    if (n) {
      var s = (o = i + e.slice(r).toString()).length - (o.length % 8);
      (i = o.slice(s)),
        (o = o.slice(0, s)),
        (t += this.iconv.decode(Ir.from(o, "base64"), "utf16-be"));
    } else t += this.iconv.decode(e.slice(r), "ascii");
    return (this.inBase64 = n), (this.base64Accum = i), t;
  }),
    (Lr.prototype.end = function () {
      var e = "";
      return (
        this.inBase64 &&
          this.base64Accum.length > 0 &&
          (e = this.iconv.decode(
            Ir.from(this.base64Accum, "base64"),
            "utf16-be"
          )),
        (this.inBase64 = !1),
        (this.base64Accum = ""),
        e
      );
    });
  var Nr = jr;
  function jr(e, t) {
    this.iconv = t;
  }
  function Gr(e, t) {
    (this.iconv = t.iconv),
      (this.inBase64 = !1),
      (this.base64Accum = Ir.alloc(6)),
      (this.base64AccumIdx = 0);
  }
  function Vr(e, t) {
    (this.iconv = t.iconv), (this.inBase64 = !1), (this.base64Accum = "");
  }
  (jr.prototype.encoder = Gr),
    (jr.prototype.decoder = Vr),
    (jr.prototype.bomAware = !0),
    (Gr.prototype.write = function (e) {
      for (
        var t = this.inBase64,
          r = this.base64Accum,
          n = this.base64AccumIdx,
          i = Ir.alloc(5 * e.length + 10),
          a = 0,
          o = 0;
        o < e.length;
        o++
      ) {
        var s = e.charCodeAt(o);
        32 <= s && s <= 126
          ? (t &&
              (n > 0 &&
                ((a += i.write(
                  r
                    .slice(0, n)
                    .toString("base64")
                    .replace(/\//g, ",")
                    .replace(/=+$/, ""),
                  a
                )),
                (n = 0)),
              (i[a++] = Fr),
              (t = !1)),
            t || ((i[a++] = s), s === Ur && (i[a++] = Fr)))
          : (t || ((i[a++] = Ur), (t = !0)),
            t &&
              ((r[n++] = s >> 8),
              (r[n++] = 255 & s),
              n == r.length &&
                ((a += i.write(r.toString("base64").replace(/\//g, ","), a)),
                (n = 0))));
      }
      return (this.inBase64 = t), (this.base64AccumIdx = n), i.slice(0, a);
    }),
    (Gr.prototype.end = function () {
      var e = Ir.alloc(10),
        t = 0;
      return (
        this.inBase64 &&
          (this.base64AccumIdx > 0 &&
            ((t += e.write(
              this.base64Accum
                .slice(0, this.base64AccumIdx)
                .toString("base64")
                .replace(/\//g, ",")
                .replace(/=+$/, ""),
              t
            )),
            (this.base64AccumIdx = 0)),
          (e[t++] = Fr),
          (this.inBase64 = !1)),
        e.slice(0, t)
      );
    });
  var _r = Dr.slice();
  (_r[",".charCodeAt(0)] = !0),
    (Vr.prototype.write = function (e) {
      for (
        var t = "", r = 0, n = this.inBase64, i = this.base64Accum, a = 0;
        a < e.length;
        a++
      )
        if (n) {
          if (!_r[e[a]]) {
            if (a == r && e[a] == Fr) t += "&";
            else {
              var o = i + e.slice(r, a).toString().replace(/,/g, "/");
              t += this.iconv.decode(Ir.from(o, "base64"), "utf16-be");
            }
            e[a] != Fr && a--, (r = a + 1), (n = !1), (i = "");
          }
        } else
          e[a] == Ur &&
            ((t += this.iconv.decode(e.slice(r, a), "ascii")),
            (r = a + 1),
            (n = !0));
      if (n) {
        var s =
          (o = i + e.slice(r).toString().replace(/,/g, "/")).length -
          (o.length % 8);
        (i = o.slice(s)),
          (o = o.slice(0, s)),
          (t += this.iconv.decode(Ir.from(o, "base64"), "utf16-be"));
      } else t += this.iconv.decode(e.slice(r), "ascii");
      return (this.inBase64 = n), (this.base64Accum = i), t;
    }),
    (Vr.prototype.end = function () {
      var e = "";
      return (
        this.inBase64 &&
          this.base64Accum.length > 0 &&
          (e = this.iconv.decode(
            Ir.from(this.base64Accum, "base64"),
            "utf16-be"
          )),
        (this.inBase64 = !1),
        (this.base64Accum = ""),
        e
      );
    });
  var qr = { utf7: Or, unicode11utf7: "utf7", utf7imap: Nr },
    Wr = tr.Buffer,
    Hr = Yr;
  function Yr(e, t) {
    if (!e) throw new Error("SBCS codec is called without the data.");
    if (!e.chars || (128 !== e.chars.length && 256 !== e.chars.length))
      throw new Error(
        "Encoding '" +
          e.type +
          "' has incorrect 'chars' (must be of len 128 or 256)"
      );
    if (128 === e.chars.length) {
      for (var r = "", n = 0; n < 128; n++) r += String.fromCharCode(n);
      e.chars = r + e.chars;
    }
    this.decodeBuf = new Wr.from(e.chars, "ucs2");
    var i = new Wr.alloc(65536, t.defaultCharSingleByte.charCodeAt(0));
    for (n = 0; n < e.chars.length; n++) i[e.chars.charCodeAt(n)] = n;
    this.encodeBuf = i;
  }
  function Zr(e, t) {
    this.encodeBuf = t.encodeBuf;
  }
  function Xr(e, t) {
    this.decodeBuf = t.decodeBuf;
  }
  (Yr.prototype.encoder = Zr),
    (Yr.prototype.decoder = Xr),
    (Zr.prototype.write = function (e) {
      for (var t = Wr.alloc(e.length), r = 0; r < e.length; r++)
        t[r] = this.encodeBuf[e.charCodeAt(r)];
      return t;
    }),
    (Zr.prototype.end = function () {}),
    (Xr.prototype.write = function (e) {
      for (
        var t = this.decodeBuf, r = Wr.alloc(2 * e.length), n = 0, i = 0, a = 0;
        a < e.length;
        a++
      )
        (n = 2 * e[a]), (r[(i = 2 * a)] = t[n]), (r[i + 1] = t[n + 1]);
      return r.toString("ucs2");
    }),
    (Xr.prototype.end = function () {});
  for (
    var Kr = { _sbcs: Hr },
      Jr = {
        10029: "maccenteuro",
        maccenteuro: {
          type: "_sbcs",
          chars:
            "ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ",
        },
        808: "cp808",
        ibm808: "cp808",
        cp808: {
          type: "_sbcs",
          chars:
            "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№€■ ",
        },
        ascii8bit: "ascii",
        usascii: "ascii",
        ansix34: "ascii",
        ansix341968: "ascii",
        ansix341986: "ascii",
        csascii: "ascii",
        cp367: "ascii",
        ibm367: "ascii",
        isoir6: "ascii",
        iso646us: "ascii",
        iso646irv: "ascii",
        us: "ascii",
        latin1: "iso88591",
        latin2: "iso88592",
        latin3: "iso88593",
        latin4: "iso88594",
        latin5: "iso88599",
        latin6: "iso885910",
        latin7: "iso885913",
        latin8: "iso885914",
        latin9: "iso885915",
        latin10: "iso885916",
        csisolatin1: "iso88591",
        csisolatin2: "iso88592",
        csisolatin3: "iso88593",
        csisolatin4: "iso88594",
        csisolatincyrillic: "iso88595",
        csisolatinarabic: "iso88596",
        csisolatingreek: "iso88597",
        csisolatinhebrew: "iso88598",
        csisolatin5: "iso88599",
        csisolatin6: "iso885910",
        l1: "iso88591",
        l2: "iso88592",
        l3: "iso88593",
        l4: "iso88594",
        l5: "iso88599",
        l6: "iso885910",
        l7: "iso885913",
        l8: "iso885914",
        l9: "iso885915",
        l10: "iso885916",
        isoir14: "iso646jp",
        isoir57: "iso646cn",
        isoir100: "iso88591",
        isoir101: "iso88592",
        isoir109: "iso88593",
        isoir110: "iso88594",
        isoir144: "iso88595",
        isoir127: "iso88596",
        isoir126: "iso88597",
        isoir138: "iso88598",
        isoir148: "iso88599",
        isoir157: "iso885910",
        isoir166: "tis620",
        isoir179: "iso885913",
        isoir199: "iso885914",
        isoir203: "iso885915",
        isoir226: "iso885916",
        cp819: "iso88591",
        ibm819: "iso88591",
        cyrillic: "iso88595",
        arabic: "iso88596",
        arabic8: "iso88596",
        ecma114: "iso88596",
        asmo708: "iso88596",
        greek: "iso88597",
        greek8: "iso88597",
        ecma118: "iso88597",
        elot928: "iso88597",
        hebrew: "iso88598",
        hebrew8: "iso88598",
        turkish: "iso88599",
        turkish8: "iso88599",
        thai: "iso885911",
        thai8: "iso885911",
        celtic: "iso885914",
        celtic8: "iso885914",
        isoceltic: "iso885914",
        tis6200: "tis620",
        tis62025291: "tis620",
        tis62025330: "tis620",
        10000: "macroman",
        10006: "macgreek",
        10007: "maccyrillic",
        10079: "maciceland",
        10081: "macturkish",
        cspc8codepage437: "cp437",
        cspc775baltic: "cp775",
        cspc850multilingual: "cp850",
        cspcp852: "cp852",
        cspc862latinhebrew: "cp862",
        cpgr: "cp869",
        msee: "cp1250",
        mscyrl: "cp1251",
        msansi: "cp1252",
        msgreek: "cp1253",
        msturk: "cp1254",
        mshebr: "cp1255",
        msarab: "cp1256",
        winbaltrim: "cp1257",
        cp20866: "koi8r",
        20866: "koi8r",
        ibm878: "koi8r",
        cskoi8r: "koi8r",
        cp21866: "koi8u",
        21866: "koi8u",
        ibm1168: "koi8u",
        strk10482002: "rk1048",
        tcvn5712: "tcvn",
        tcvn57121: "tcvn",
        gb198880: "iso646cn",
        cn: "iso646cn",
        csiso14jisc6220ro: "iso646jp",
        jisc62201969ro: "iso646jp",
        jp: "iso646jp",
        cshproman8: "hproman8",
        r8: "hproman8",
        roman8: "hproman8",
        xroman8: "hproman8",
        ibm1051: "hproman8",
        mac: "macintosh",
        csmacintosh: "macintosh",
      },
      Qr = {
        437: "cp437",
        737: "cp737",
        775: "cp775",
        850: "cp850",
        852: "cp852",
        855: "cp855",
        856: "cp856",
        857: "cp857",
        858: "cp858",
        860: "cp860",
        861: "cp861",
        862: "cp862",
        863: "cp863",
        864: "cp864",
        865: "cp865",
        866: "cp866",
        869: "cp869",
        874: "windows874",
        922: "cp922",
        1046: "cp1046",
        1124: "cp1124",
        1125: "cp1125",
        1129: "cp1129",
        1133: "cp1133",
        1161: "cp1161",
        1162: "cp1162",
        1163: "cp1163",
        1250: "windows1250",
        1251: "windows1251",
        1252: "windows1252",
        1253: "windows1253",
        1254: "windows1254",
        1255: "windows1255",
        1256: "windows1256",
        1257: "windows1257",
        1258: "windows1258",
        28591: "iso88591",
        28592: "iso88592",
        28593: "iso88593",
        28594: "iso88594",
        28595: "iso88595",
        28596: "iso88596",
        28597: "iso88597",
        28598: "iso88598",
        28599: "iso88599",
        28600: "iso885910",
        28601: "iso885911",
        28603: "iso885913",
        28604: "iso885914",
        28605: "iso885915",
        28606: "iso885916",
        windows874: {
          type: "_sbcs",
          chars:
            "€����…�����������‘’“”•–—�������� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����",
        },
        win874: "windows874",
        cp874: "windows874",
        windows1250: {
          type: "_sbcs",
          chars:
            "€�‚�„…†‡�‰Š‹ŚŤŽŹ�‘’“”•–—�™š›śťžź ˇ˘Ł¤Ą¦§¨©Ş«¬­®Ż°±˛ł´µ¶·¸ąş»Ľ˝ľżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙",
        },
        win1250: "windows1250",
        cp1250: "windows1250",
        windows1251: {
          type: "_sbcs",
          chars:
            "ЂЃ‚ѓ„…†‡€‰Љ‹ЊЌЋЏђ‘’“”•–—�™љ›њќћџ ЎўЈ¤Ґ¦§Ё©Є«¬­®Ї°±Ііґµ¶·ё№є»јЅѕїАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя",
        },
        win1251: "windows1251",
        cp1251: "windows1251",
        windows1252: {
          type: "_sbcs",
          chars:
            "€�‚ƒ„…†‡ˆ‰Š‹Œ�Ž��‘’“”•–—˜™š›œ�žŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ",
        },
        win1252: "windows1252",
        cp1252: "windows1252",
        windows1253: {
          type: "_sbcs",
          chars:
            "€�‚ƒ„…†‡�‰�‹�����‘’“”•–—�™�›���� ΅Ά£¤¥¦§¨©�«¬­®―°±²³΄µ¶·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�",
        },
        win1253: "windows1253",
        cp1253: "windows1253",
        windows1254: {
          type: "_sbcs",
          chars:
            "€�‚ƒ„…†‡ˆ‰Š‹Œ����‘’“”•–—˜™š›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ",
        },
        win1254: "windows1254",
        cp1254: "windows1254",
        windows1255: {
          type: "_sbcs",
          chars:
            "€�‚ƒ„…†‡ˆ‰�‹�����‘’“”•–—˜™�›���� ¡¢£₪¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾¿ְֱֲֳִֵֶַָֹֺֻּֽ־ֿ׀ׁׂ׃װױײ׳״�������אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�",
        },
        win1255: "windows1255",
        cp1255: "windows1255",
        windows1256: {
          type: "_sbcs",
          chars:
            "€پ‚ƒ„…†‡ˆ‰ٹ‹Œچژڈگ‘’“”•–—ک™ڑ›œ‌‍ں ،¢£¤¥¦§¨©ھ«¬­®¯°±²³´µ¶·¸¹؛»¼½¾؟ہءآأؤإئابةتثجحخدذرزسشصض×طظعغـفقكàلâمنهوçèéêëىيîïًٌٍَôُِ÷ّùْûü‎‏ے",
        },
        win1256: "windows1256",
        cp1256: "windows1256",
        windows1257: {
          type: "_sbcs",
          chars:
            "€�‚�„…†‡�‰�‹�¨ˇ¸�‘’“”•–—�™�›�¯˛� �¢£¤�¦§Ø©Ŗ«¬­®Æ°±²³´µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž˙",
        },
        win1257: "windows1257",
        cp1257: "windows1257",
        windows1258: {
          type: "_sbcs",
          chars:
            "€�‚ƒ„…†‡ˆ‰�‹Œ����‘’“”•–—˜™�›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ",
        },
        win1258: "windows1258",
        cp1258: "windows1258",
        iso88591: {
          type: "_sbcs",
          chars:
            " ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ",
        },
        cp28591: "iso88591",
        iso88592: {
          type: "_sbcs",
          chars:
            " Ą˘Ł¤ĽŚ§¨ŠŞŤŹ­ŽŻ°ą˛ł´ľśˇ¸šşťź˝žżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙",
        },
        cp28592: "iso88592",
        iso88593: {
          type: "_sbcs",
          chars:
            " Ħ˘£¤�Ĥ§¨İŞĞĴ­�Ż°ħ²³´µĥ·¸ışğĵ½�żÀÁÂ�ÄĊĈÇÈÉÊËÌÍÎÏ�ÑÒÓÔĠÖ×ĜÙÚÛÜŬŜßàáâ�äċĉçèéêëìíîï�ñòóôġö÷ĝùúûüŭŝ˙",
        },
        cp28593: "iso88593",
        iso88594: {
          type: "_sbcs",
          chars:
            " ĄĸŖ¤ĨĻ§¨ŠĒĢŦ­Ž¯°ą˛ŗ´ĩļˇ¸šēģŧŊžŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎĪĐŅŌĶÔÕÖ×ØŲÚÛÜŨŪßāáâãäåæįčéęëėíîīđņōķôõö÷øųúûüũū˙",
        },
        cp28594: "iso88594",
        iso88595: {
          type: "_sbcs",
          chars:
            " ЁЂЃЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђѓєѕіїјљњћќ§ўџ",
        },
        cp28595: "iso88595",
        iso88596: {
          type: "_sbcs",
          chars:
            " ���¤�������،­�������������؛���؟�ءآأؤإئابةتثجحخدذرزسشصضطظعغ�����ـفقكلمنهوىيًٌٍَُِّْ�������������",
        },
        cp28596: "iso88596",
        iso88597: {
          type: "_sbcs",
          chars:
            " ‘’£€₯¦§¨©ͺ«¬­�―°±²³΄΅Ά·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�",
        },
        cp28597: "iso88597",
        iso88598: {
          type: "_sbcs",
          chars:
            " �¢£¤¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾��������������������������������‗אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�",
        },
        cp28598: "iso88598",
        iso88599: {
          type: "_sbcs",
          chars:
            " ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ",
        },
        cp28599: "iso88599",
        iso885910: {
          type: "_sbcs",
          chars:
            " ĄĒĢĪĨĶ§ĻĐŠŦŽ­ŪŊ°ąēģīĩķ·ļđšŧž―ūŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎÏÐŅŌÓÔÕÖŨØŲÚÛÜÝÞßāáâãäåæįčéęëėíîïðņōóôõöũøųúûüýþĸ",
        },
        cp28600: "iso885910",
        iso885911: {
          type: "_sbcs",
          chars:
            " กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����",
        },
        cp28601: "iso885911",
        iso885913: {
          type: "_sbcs",
          chars:
            " ”¢£¤„¦§Ø©Ŗ«¬­®Æ°±²³“µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž’",
        },
        cp28603: "iso885913",
        iso885914: {
          type: "_sbcs",
          chars:
            " Ḃḃ£ĊċḊ§Ẁ©ẂḋỲ­®ŸḞḟĠġṀṁ¶ṖẁṗẃṠỳẄẅṡÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŴÑÒÓÔÕÖṪØÙÚÛÜÝŶßàáâãäåæçèéêëìíîïŵñòóôõöṫøùúûüýŷÿ",
        },
        cp28604: "iso885914",
        iso885915: {
          type: "_sbcs",
          chars:
            " ¡¢£€¥Š§š©ª«¬­®¯°±²³Žµ¶·ž¹º»ŒœŸ¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ",
        },
        cp28605: "iso885915",
        iso885916: {
          type: "_sbcs",
          chars:
            " ĄąŁ€„Š§š©Ș«Ź­źŻ°±ČłŽ”¶·žčș»ŒœŸżÀÁÂĂÄĆÆÇÈÉÊËÌÍÎÏĐŃÒÓÔŐÖŚŰÙÚÛÜĘȚßàáâăäćæçèéêëìíîïđńòóôőöśűùúûüęțÿ",
        },
        cp28606: "iso885916",
        cp437: {
          type: "_sbcs",
          chars:
            "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ",
        },
        ibm437: "cp437",
        csibm437: "cp437",
        cp737: {
          type: "_sbcs",
          chars:
            "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρσςτυφχψ░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ωάέήϊίόύϋώΆΈΉΊΌΎΏ±≥≤ΪΫ÷≈°∙·√ⁿ²■ ",
        },
        ibm737: "cp737",
        csibm737: "cp737",
        cp775: {
          type: "_sbcs",
          chars:
            "ĆüéāäģåćłēŖŗīŹÄÅÉæÆōöĢ¢ŚśÖÜø£Ø×¤ĀĪóŻżź”¦©®¬½¼Ł«»░▒▓│┤ĄČĘĖ╣║╗╝ĮŠ┐└┴┬├─┼ŲŪ╚╔╩╦╠═╬Žąčęėįšųūž┘┌█▄▌▐▀ÓßŌŃõÕµńĶķĻļņĒŅ’­±“¾¶§÷„°∙·¹³²■ ",
        },
        ibm775: "cp775",
        csibm775: "cp775",
        cp850: {
          type: "_sbcs",
          chars:
            "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ ",
        },
        ibm850: "cp850",
        csibm850: "cp850",
        cp852: {
          type: "_sbcs",
          chars:
            "ÇüéâäůćçłëŐőîŹÄĆÉĹĺôöĽľŚśÖÜŤťŁ×čáíóúĄąŽžĘę¬źČş«»░▒▓│┤ÁÂĚŞ╣║╗╝Żż┐└┴┬├─┼Ăă╚╔╩╦╠═╬¤đĐĎËďŇÍÎě┘┌█▄ŢŮ▀ÓßÔŃńňŠšŔÚŕŰýÝţ´­˝˛ˇ˘§÷¸°¨˙űŘř■ ",
        },
        ibm852: "cp852",
        csibm852: "cp852",
        cp855: {
          type: "_sbcs",
          chars:
            "ђЂѓЃёЁєЄѕЅіІїЇјЈљЉњЊћЋќЌўЎџЏюЮъЪаАбБцЦдДеЕфФгГ«»░▒▓│┤хХиИ╣║╗╝йЙ┐└┴┬├─┼кК╚╔╩╦╠═╬¤лЛмМнНоОп┘┌█▄Пя▀ЯрРсСтТуУжЖвВьЬ№­ыЫзЗшШэЭщЩчЧ§■ ",
        },
        ibm855: "cp855",
        csibm855: "cp855",
        cp856: {
          type: "_sbcs",
          chars:
            "אבגדהוזחטיךכלםמןנסעףפץצקרשת�£�×����������®¬½¼�«»░▒▓│┤���©╣║╗╝¢¥┐└┴┬├─┼��╚╔╩╦╠═╬¤���������┘┌█▄¦�▀������µ�������¯´­±‗¾¶§÷¸°¨·¹³²■ ",
        },
        ibm856: "cp856",
        csibm856: "cp856",
        cp857: {
          type: "_sbcs",
          chars:
            "ÇüéâäàåçêëèïîıÄÅÉæÆôöòûùİÖÜø£ØŞşáíóúñÑĞğ¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ºªÊËÈ�ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµ�×ÚÛÙìÿ¯´­±�¾¶§÷¸°¨·¹³²■ ",
        },
        ibm857: "cp857",
        csibm857: "cp857",
        cp858: {
          type: "_sbcs",
          chars:
            "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈ€ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ ",
        },
        ibm858: "cp858",
        csibm858: "cp858",
        cp860: {
          type: "_sbcs",
          chars:
            "ÇüéâãàÁçêÊèÍÔìÃÂÉÀÈôõòÚùÌÕÜ¢£Ù₧ÓáíóúñÑªº¿Ò¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ",
        },
        ibm860: "cp860",
        csibm860: "cp860",
        cp861: {
          type: "_sbcs",
          chars:
            "ÇüéâäàåçêëèÐðÞÄÅÉæÆôöþûÝýÖÜø£Ø₧ƒáíóúÁÍÓÚ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ",
        },
        ibm861: "cp861",
        csibm861: "cp861",
        cp862: {
          type: "_sbcs",
          chars:
            "אבגדהוזחטיךכלםמןנסעףפץצקרשת¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ",
        },
        ibm862: "cp862",
        csibm862: "cp862",
        cp863: {
          type: "_sbcs",
          chars:
            "ÇüéâÂà¶çêëèïî‗À§ÉÈÊôËÏûù¤ÔÜ¢£ÙÛƒ¦´óú¨¸³¯Î⌐¬½¼¾«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ",
        },
        ibm863: "cp863",
        csibm863: "cp863",
        cp864: {
          type: "_sbcs",
          chars:
            "\0\b\t\n\v\f\r !\"#$٪&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~°·∙√▒─│┼┤┬├┴┐┌└┘β∞φ±½¼≈«»ﻷﻸ��ﻻﻼ� ­ﺂ£¤ﺄ��ﺎﺏﺕﺙ،ﺝﺡﺥ٠١٢٣٤٥٦٧٨٩ﻑ؛ﺱﺵﺹ؟¢ﺀﺁﺃﺅﻊﺋﺍﺑﺓﺗﺛﺟﺣﺧﺩﺫﺭﺯﺳﺷﺻﺿﻁﻅﻋﻏ¦¬÷×ﻉـﻓﻗﻛﻟﻣﻧﻫﻭﻯﻳﺽﻌﻎﻍﻡﹽّﻥﻩﻬﻰﻲﻐﻕﻵﻶﻝﻙﻱ■�",
        },
        ibm864: "cp864",
        csibm864: "cp864",
        cp865: {
          type: "_sbcs",
          chars:
            "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø₧ƒáíóúñÑªº¿⌐¬½¼¡«¤░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ",
        },
        ibm865: "cp865",
        csibm865: "cp865",
        cp866: {
          type: "_sbcs",
          chars:
            "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№¤■ ",
        },
        ibm866: "cp866",
        csibm866: "cp866",
        cp869: {
          type: "_sbcs",
          chars:
            "������Ά�·¬¦‘’Έ―ΉΊΪΌ��ΎΫ©Ώ²³ά£έήίϊΐόύΑΒΓΔΕΖΗ½ΘΙ«»░▒▓│┤ΚΛΜΝ╣║╗╝ΞΟ┐└┴┬├─┼ΠΡ╚╔╩╦╠═╬ΣΤΥΦΧΨΩαβγ┘┌█▄δε▀ζηθικλμνξοπρσςτ΄­±υφχ§ψ΅°¨ωϋΰώ■ ",
        },
        ibm869: "cp869",
        csibm869: "cp869",
        cp922: {
          type: "_sbcs",
          chars:
            " ¡¢£¤¥¦§¨©ª«¬­®‾°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŠÑÒÓÔÕÖ×ØÙÚÛÜÝŽßàáâãäåæçèéêëìíîïšñòóôõö÷øùúûüýžÿ",
        },
        ibm922: "cp922",
        csibm922: "cp922",
        cp1046: {
          type: "_sbcs",
          chars:
            "ﺈ×÷ﹱ■│─┐┌└┘ﹹﹻﹽﹿﹷﺊﻰﻳﻲﻎﻏﻐﻶﻸﻺﻼ ¤ﺋﺑﺗﺛﺟﺣ،­ﺧﺳ٠١٢٣٤٥٦٧٨٩ﺷ؛ﺻﺿﻊ؟ﻋءآأؤإئابةتثجحخدذرزسشصضطﻇعغﻌﺂﺄﺎﻓـفقكلمنهوىيًٌٍَُِّْﻗﻛﻟﻵﻷﻹﻻﻣﻧﻬﻩ�",
        },
        ibm1046: "cp1046",
        csibm1046: "cp1046",
        cp1124: {
          type: "_sbcs",
          chars:
            " ЁЂҐЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђґєѕіїјљњћќ§ўџ",
        },
        ibm1124: "cp1124",
        csibm1124: "cp1124",
        cp1125: {
          type: "_sbcs",
          chars:
            "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёҐґЄєІіЇї·√№¤■ ",
        },
        ibm1125: "cp1125",
        csibm1125: "cp1125",
        cp1129: {
          type: "_sbcs",
          chars:
            " ¡¢£¤¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ",
        },
        ibm1129: "cp1129",
        csibm1129: "cp1129",
        cp1133: {
          type: "_sbcs",
          chars:
            " ກຂຄງຈສຊຍດຕຖທນບປຜຝພຟມຢຣລວຫອຮ���ຯະາຳິີຶືຸູຼັົຽ���ເແໂໃໄ່້໊໋໌ໍໆ�ໜໝ₭����������������໐໑໒໓໔໕໖໗໘໙��¢¬¦�",
        },
        ibm1133: "cp1133",
        csibm1133: "cp1133",
        cp1161: {
          type: "_sbcs",
          chars:
            "��������������������������������่กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู้๊๋€฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛¢¬¦ ",
        },
        ibm1161: "cp1161",
        csibm1161: "cp1161",
        cp1162: {
          type: "_sbcs",
          chars:
            "€…‘’“”•–— กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����",
        },
        ibm1162: "cp1162",
        csibm1162: "cp1162",
        cp1163: {
          type: "_sbcs",
          chars:
            " ¡¢£€¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ",
        },
        ibm1163: "cp1163",
        csibm1163: "cp1163",
        maccroatian: {
          type: "_sbcs",
          chars:
            "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊�©⁄¤‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ",
        },
        maccyrillic: {
          type: "_sbcs",
          chars:
            "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°¢£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµ∂ЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤",
        },
        macgreek: {
          type: "_sbcs",
          chars:
            "Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦­ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ�",
        },
        maciceland: {
          type: "_sbcs",
          chars:
            "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",
        },
        macroman: {
          type: "_sbcs",
          chars:
            "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",
        },
        macromania: {
          type: "_sbcs",
          chars:
            "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂŞ∞±≤≥¥µ∂∑∏π∫ªºΩăş¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›Ţţ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",
        },
        macthai: {
          type: "_sbcs",
          chars:
            "«»…“”�•‘’� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู\ufeff​–—฿เแโใไๅๆ็่้๊๋์ํ™๏๐๑๒๓๔๕๖๗๘๙®©����",
        },
        macturkish: {
          type: "_sbcs",
          chars:
            "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙ�ˆ˜¯˘˙˚¸˝˛ˇ",
        },
        macukraine: {
          type: "_sbcs",
          chars:
            "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤",
        },
        koi8r: {
          type: "_sbcs",
          chars:
            "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ё╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡Ё╢╣╤╥╦╧╨╩╪╫╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ",
        },
        koi8u: {
          type: "_sbcs",
          chars:
            "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґ╝╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪Ґ╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ",
        },
        koi8ru: {
          type: "_sbcs",
          chars:
            "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґў╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪ҐЎ©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ",
        },
        koi8t: {
          type: "_sbcs",
          chars:
            "қғ‚Ғ„…†‡�‰ҳ‹ҲҷҶ�Қ‘’“”•–—�™�›�����ӯӮё¤ӣ¦§���«¬­®�°±²Ё�Ӣ¶·�№�»���©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ",
        },
        armscii8: {
          type: "_sbcs",
          chars:
            " �և։)(»«—.՝,-֊…՜՛՞ԱաԲբԳգԴդԵեԶզԷէԸըԹթԺժԻիԼլԽխԾծԿկՀհՁձՂղՃճՄմՅյՆնՇշՈոՉչՊպՋջՌռՍսՎվՏտՐրՑցՒւՓփՔքՕօՖֆ՚�",
        },
        rk1048: {
          type: "_sbcs",
          chars:
            "ЂЃ‚ѓ„…†‡€‰Љ‹ЊҚҺЏђ‘’“”•–—�™љ›њқһџ ҰұӘ¤Ө¦§Ё©Ғ«¬­®Ү°±Ііөµ¶·ё№ғ»әҢңүАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя",
        },
        tcvn: {
          type: "_sbcs",
          chars:
            "\0ÚỤỪỬỮ\b\t\n\v\f\rỨỰỲỶỸÝỴ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÀẢÃÁẠẶẬÈẺẼÉẸỆÌỈĨÍỊÒỎÕÓỌỘỜỞỠỚỢÙỦŨ ĂÂÊÔƠƯĐăâêôơưđẶ̀̀̉̃́àảãáạẲằẳẵắẴẮẦẨẪẤỀặầẩẫấậèỂẻẽéẹềểễếệìỉỄẾỒĩíịòỔỏõóọồổỗốộờởỡớợùỖủũúụừửữứựỳỷỹýỵỐ",
        },
        georgianacademy: {
          type: "_sbcs",
          chars:
            "‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰჱჲჳჴჵჶçèéêëìíîïðñòóôõö÷øùúûüýþÿ",
        },
        georgianps: {
          type: "_sbcs",
          chars:
            "‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზჱთიკლმნჲოპჟრსტჳუფქღყშჩცძწჭხჴჯჰჵæçèéêëìíîïðñòóôõö÷øùúûüýþÿ",
        },
        pt154: {
          type: "_sbcs",
          chars:
            "ҖҒӮғ„…ҶҮҲүҠӢҢҚҺҸҗ‘’“”•–—ҳҷҡӣңқһҹ ЎўЈӨҘҰ§Ё©Ә«¬ӯ®Ҝ°ұІіҙө¶·ё№ә»јҪҫҝАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя",
        },
        viscii: {
          type: "_sbcs",
          chars:
            "\0ẲẴẪ\b\t\n\v\f\rỶỸỴ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ẠẮẰẶẤẦẨẬẼẸẾỀỂỄỆỐỒỔỖỘỢỚỜỞỊỎỌỈỦŨỤỲÕắằặấầẩậẽẹếềểễệốồổỗỠƠộờởịỰỨỪỬơớƯÀÁÂÃẢĂẳẵÈÉÊẺÌÍĨỳĐứÒÓÔạỷừửÙÚỹỵÝỡưàáâãảăữẫèéêẻìíĩỉđựòóôõỏọụùúũủýợỮ",
        },
        iso646cn: {
          type: "_sbcs",
          chars:
            "\0\b\t\n\v\f\r !\"#¥%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������",
        },
        iso646jp: {
          type: "_sbcs",
          chars:
            "\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[¥]^_`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������",
        },
        hproman8: {
          type: "_sbcs",
          chars:
            " ÀÂÈÊËÎÏ´ˋˆ¨˜ÙÛ₤¯Ýý°ÇçÑñ¡¿¤£¥§ƒ¢âêôûáéóúàèòùäëöüÅîØÆåíøæÄìÖÜÉïßÔÁÃãÐðÍÌÓÒÕõŠšÚŸÿÞþ·µ¶¾—¼½ªº«■»±�",
        },
        macintosh: {
          type: "_sbcs",
          chars:
            "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",
        },
        ascii: {
          type: "_sbcs",
          chars:
            "��������������������������������������������������������������������������������������������������������������������������������",
        },
        tis620: {
          type: "_sbcs",
          chars:
            "���������������������������������กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����",
        },
      },
      $r = tr.Buffer,
      en = sn,
      tn = -1,
      rn = -2,
      nn = -1e3,
      an = new Array(256),
      on = 0;
    on < 256;
    on++
  )
    an[on] = tn;
  function sn(e, t) {
    if (((this.encodingName = e.encodingName), !e))
      throw new Error("DBCS codec is called without the data.");
    if (!e.table)
      throw new Error("Encoding '" + this.encodingName + "' has no data.");
    var r = e.table();
    (this.decodeTables = []),
      (this.decodeTables[0] = an.slice(0)),
      (this.decodeTableSeq = []);
    for (var n = 0; n < r.length; n++) this._addDecodeChunk(r[n]);
    (this.defaultCharUnicode = t.defaultCharUnicode),
      (this.encodeTable = []),
      (this.encodeTableSeq = []);
    var i = {};
    if (e.encodeSkipVals)
      for (n = 0; n < e.encodeSkipVals.length; n++) {
        var a = e.encodeSkipVals[n];
        if ("number" == typeof a) i[a] = !0;
        else for (var o = a.from; o <= a.to; o++) i[o] = !0;
      }
    if ((this._fillEncodeTable(0, 0, i), e.encodeAdd))
      for (var s in e.encodeAdd)
        Object.prototype.hasOwnProperty.call(e.encodeAdd, s) &&
          this._setEncodeChar(s.charCodeAt(0), e.encodeAdd[s]);
    if (
      ((this.defCharSB =
        this.encodeTable[0][t.defaultCharSingleByte.charCodeAt(0)]),
      this.defCharSB === tn && (this.defCharSB = this.encodeTable[0]["?"]),
      this.defCharSB === tn && (this.defCharSB = "?".charCodeAt(0)),
      "function" == typeof e.gb18030)
    ) {
      this.gb18030 = e.gb18030();
      var u = this.decodeTables.length,
        l = (this.decodeTables[u] = an.slice(0)),
        c = this.decodeTables.length,
        f = (this.decodeTables[c] = an.slice(0));
      for (n = 129; n <= 254; n++) {
        var h = nn - this.decodeTables[0][n],
          d = this.decodeTables[h];
        for (o = 48; o <= 57; o++) d[o] = nn - u;
      }
      for (n = 129; n <= 254; n++) l[n] = nn - c;
      for (n = 48; n <= 57; n++) f[n] = rn;
    }
  }
  function un(e, t) {
    (this.leadSurrogate = -1),
      (this.seqObj = void 0),
      (this.encodeTable = t.encodeTable),
      (this.encodeTableSeq = t.encodeTableSeq),
      (this.defaultCharSingleByte = t.defCharSB),
      (this.gb18030 = t.gb18030);
  }
  function ln(e, t) {
    (this.nodeIdx = 0),
      (this.prevBuf = $r.alloc(0)),
      (this.decodeTables = t.decodeTables),
      (this.decodeTableSeq = t.decodeTableSeq),
      (this.defaultCharUnicode = t.defaultCharUnicode),
      (this.gb18030 = t.gb18030);
  }
  function cn(e, t) {
    if (e[0] > t) return -1;
    for (var r = 0, n = e.length; r < n - 1; ) {
      var i = r + Math.floor((n - r + 1) / 2);
      e[i] <= t ? (r = i) : (n = i);
    }
    return r;
  }
  (sn.prototype.encoder = un),
    (sn.prototype.decoder = ln),
    (sn.prototype._getDecodeTrieNode = function (e) {
      for (var t = []; e > 0; e >>= 8) t.push(255 & e);
      0 == t.length && t.push(0);
      for (var r = this.decodeTables[0], n = t.length - 1; n > 0; n--) {
        var i = r[t[n]];
        if (i == tn)
          (r[t[n]] = nn - this.decodeTables.length),
            this.decodeTables.push((r = an.slice(0)));
        else {
          if (!(i <= nn))
            throw new Error(
              "Overwrite byte in " +
                this.encodingName +
                ", addr: " +
                e.toString(16)
            );
          r = this.decodeTables[nn - i];
        }
      }
      return r;
    }),
    (sn.prototype._addDecodeChunk = function (e) {
      var t = parseInt(e[0], 16),
        r = this._getDecodeTrieNode(t);
      t &= 255;
      for (var n = 1; n < e.length; n++) {
        var i = e[n];
        if ("string" == typeof i)
          for (var a = 0; a < i.length; ) {
            var o = i.charCodeAt(a++);
            if (55296 <= o && o < 56320) {
              var s = i.charCodeAt(a++);
              if (!(56320 <= s && s < 57344))
                throw new Error(
                  "Incorrect surrogate pair in " +
                    this.encodingName +
                    " at chunk " +
                    e[0]
                );
              r[t++] = 65536 + 1024 * (o - 55296) + (s - 56320);
            } else if (4080 < o && o <= 4095) {
              for (var u = 4095 - o + 2, l = [], c = 0; c < u; c++)
                l.push(i.charCodeAt(a++));
              (r[t++] = -10 - this.decodeTableSeq.length),
                this.decodeTableSeq.push(l);
            } else r[t++] = o;
          }
        else {
          if ("number" != typeof i)
            throw new Error(
              "Incorrect type '" +
                typeof i +
                "' given in " +
                this.encodingName +
                " at chunk " +
                e[0]
            );
          var f = r[t - 1] + 1;
          for (a = 0; a < i; a++) r[t++] = f++;
        }
      }
      if (t > 255)
        throw new Error(
          "Incorrect chunk in " +
            this.encodingName +
            " at addr " +
            e[0] +
            ": too long" +
            t
        );
    }),
    (sn.prototype._getEncodeBucket = function (e) {
      var t = e >> 8;
      return (
        void 0 === this.encodeTable[t] && (this.encodeTable[t] = an.slice(0)),
        this.encodeTable[t]
      );
    }),
    (sn.prototype._setEncodeChar = function (e, t) {
      var r = this._getEncodeBucket(e),
        n = 255 & e;
      r[n] <= -10
        ? (this.encodeTableSeq[-10 - r[n]][-1] = t)
        : r[n] == tn && (r[n] = t);
    }),
    (sn.prototype._setEncodeSequence = function (e, t) {
      var r,
        n = e[0],
        i = this._getEncodeBucket(n),
        a = 255 & n;
      i[a] <= -10
        ? (r = this.encodeTableSeq[-10 - i[a]])
        : ((r = {}),
          i[a] !== tn && (r[-1] = i[a]),
          (i[a] = -10 - this.encodeTableSeq.length),
          this.encodeTableSeq.push(r));
      for (var o = 1; o < e.length - 1; o++) {
        var s = r[n];
        "object" == typeof s
          ? (r = s)
          : ((r = r[n] = {}), void 0 !== s && (r[-1] = s));
      }
      r[(n = e[e.length - 1])] = t;
    }),
    (sn.prototype._fillEncodeTable = function (e, t, r) {
      for (var n = this.decodeTables[e], i = 0; i < 256; i++) {
        var a = n[i],
          o = t + i;
        r[o] ||
          (a >= 0
            ? this._setEncodeChar(a, o)
            : a <= nn
            ? this._fillEncodeTable(nn - a, o << 8, r)
            : a <= -10 &&
              this._setEncodeSequence(this.decodeTableSeq[-10 - a], o));
      }
    }),
    (un.prototype.write = function (e) {
      for (
        var t = $r.alloc(e.length * (this.gb18030 ? 4 : 3)),
          r = this.leadSurrogate,
          n = this.seqObj,
          i = -1,
          a = 0,
          o = 0;
        ;

      ) {
        if (-1 === i) {
          if (a == e.length) break;
          var s = e.charCodeAt(a++);
        } else {
          s = i;
          i = -1;
        }
        if (55296 <= s && s < 57344)
          if (s < 56320) {
            if (-1 === r) {
              r = s;
              continue;
            }
            (r = s), (s = tn);
          } else
            -1 !== r
              ? ((s = 65536 + 1024 * (r - 55296) + (s - 56320)), (r = -1))
              : (s = tn);
        else -1 !== r && ((i = s), (s = tn), (r = -1));
        var u = tn;
        if (void 0 !== n && s != tn) {
          var l = n[s];
          if ("object" == typeof l) {
            n = l;
            continue;
          }
          "number" == typeof l
            ? (u = l)
            : null == l && void 0 !== (l = n[-1]) && ((u = l), (i = s)),
            (n = void 0);
        } else if (s >= 0) {
          var c = this.encodeTable[s >> 8];
          if ((void 0 !== c && (u = c[255 & s]), u <= -10)) {
            n = this.encodeTableSeq[-10 - u];
            continue;
          }
          if (u == tn && this.gb18030) {
            var f = cn(this.gb18030.uChars, s);
            if (-1 != f) {
              u = this.gb18030.gbChars[f] + (s - this.gb18030.uChars[f]);
              (t[o++] = 129 + Math.floor(u / 12600)),
                (u %= 12600),
                (t[o++] = 48 + Math.floor(u / 1260)),
                (u %= 1260),
                (t[o++] = 129 + Math.floor(u / 10)),
                (u %= 10),
                (t[o++] = 48 + u);
              continue;
            }
          }
        }
        u === tn && (u = this.defaultCharSingleByte),
          u < 256
            ? (t[o++] = u)
            : u < 65536
            ? ((t[o++] = u >> 8), (t[o++] = 255 & u))
            : ((t[o++] = u >> 16),
              (t[o++] = (u >> 8) & 255),
              (t[o++] = 255 & u));
      }
      return (this.seqObj = n), (this.leadSurrogate = r), t.slice(0, o);
    }),
    (un.prototype.end = function () {
      if (-1 !== this.leadSurrogate || void 0 !== this.seqObj) {
        var e = $r.alloc(10),
          t = 0;
        if (this.seqObj) {
          var r = this.seqObj[-1];
          void 0 !== r &&
            (r < 256 ? (e[t++] = r) : ((e[t++] = r >> 8), (e[t++] = 255 & r))),
            (this.seqObj = void 0);
        }
        return (
          -1 !== this.leadSurrogate &&
            ((e[t++] = this.defaultCharSingleByte), (this.leadSurrogate = -1)),
          e.slice(0, t)
        );
      }
    }),
    (un.prototype.findIdx = cn),
    (ln.prototype.write = function (e) {
      var t = $r.alloc(2 * e.length),
        r = this.nodeIdx,
        n = this.prevBuf,
        i = this.prevBuf.length,
        a = -this.prevBuf.length;
      i > 0 && (n = $r.concat([n, e.slice(0, 10)]));
      for (var o = 0, s = 0; o < e.length; o++) {
        var u,
          l = o >= 0 ? e[o] : n[o + i];
        if ((u = this.decodeTables[r][l]) >= 0);
        else if (u === tn) (o = a), (u = this.defaultCharUnicode.charCodeAt(0));
        else if (u === rn) {
          var c = a >= 0 ? e.slice(a, o + 1) : n.slice(a + i, o + 1 + i),
            f =
              12600 * (c[0] - 129) +
              1260 * (c[1] - 48) +
              10 * (c[2] - 129) +
              (c[3] - 48),
            h = cn(this.gb18030.gbChars, f);
          u = this.gb18030.uChars[h] + f - this.gb18030.gbChars[h];
        } else {
          if (u <= nn) {
            r = nn - u;
            continue;
          }
          if (!(u <= -10))
            throw new Error(
              "iconv-lite internal error: invalid decoding table value " +
                u +
                " at " +
                r +
                "/" +
                l
            );
          for (
            var d = this.decodeTableSeq[-10 - u], p = 0;
            p < d.length - 1;
            p++
          )
            (u = d[p]), (t[s++] = 255 & u), (t[s++] = u >> 8);
          u = d[d.length - 1];
        }
        if (u > 65535) {
          u -= 65536;
          var g = 55296 + Math.floor(u / 1024);
          (t[s++] = 255 & g), (t[s++] = g >> 8), (u = 56320 + (u % 1024));
        }
        (t[s++] = 255 & u), (t[s++] = u >> 8), (r = 0), (a = o + 1);
      }
      return (
        (this.nodeIdx = r),
        (this.prevBuf = a >= 0 ? e.slice(a) : n.slice(a + i)),
        t.slice(0, s).toString("ucs2")
      );
    }),
    (ln.prototype.end = function () {
      for (var e = ""; this.prevBuf.length > 0; ) {
        e += this.defaultCharUnicode;
        var t = this.prevBuf.slice(1);
        (this.prevBuf = $r.alloc(0)),
          (this.nodeIdx = 0),
          t.length > 0 && (e += this.write(t));
      }
      return (this.nodeIdx = 0), e;
    });
  var fn = { _dbcs: en },
    hn = Object.freeze({
      default: [
        ["0", "\0", 128],
        ["a1", "｡", 62],
        [
          "8140",
          "　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈",
          9,
          "＋－±×",
        ],
        ["8180", "÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇◆□■△▲▽▼※〒→←↑↓〓"],
        ["81b8", "∈∋⊆⊇⊂⊃∪∩"],
        ["81c8", "∧∨￢⇒⇔∀∃"],
        ["81da", "∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬"],
        ["81f0", "Å‰♯♭♪†‡¶"],
        ["81fc", "◯"],
        ["824f", "０", 9],
        ["8260", "Ａ", 25],
        ["8281", "ａ", 25],
        ["829f", "ぁ", 82],
        ["8340", "ァ", 62],
        ["8380", "ム", 22],
        ["839f", "Α", 16, "Σ", 6],
        ["83bf", "α", 16, "σ", 6],
        ["8440", "А", 5, "ЁЖ", 25],
        ["8470", "а", 5, "ёж", 7],
        ["8480", "о", 17],
        ["849f", "─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂"],
        ["8740", "①", 19, "Ⅰ", 9],
        ["875f", "㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡"],
        ["877e", "㍻"],
        ["8780", "〝〟№㏍℡㊤", 4, "㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪"],
        [
          "889f",
          "亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭",
        ],
        [
          "8940",
          "院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円",
        ],
        [
          "8980",
          "園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改",
        ],
        [
          "8a40",
          "魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫",
        ],
        [
          "8a80",
          "橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄",
        ],
        [
          "8b40",
          "機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救",
        ],
        [
          "8b80",
          "朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈",
        ],
        [
          "8c40",
          "掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨",
        ],
        [
          "8c80",
          "劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向",
        ],
        [
          "8d40",
          "后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降",
        ],
        [
          "8d80",
          "項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷",
        ],
        [
          "8e40",
          "察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止",
        ],
        [
          "8e80",
          "死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周",
        ],
        [
          "8f40",
          "宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳",
        ],
        [
          "8f80",
          "準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾",
        ],
        [
          "9040",
          "拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨",
        ],
        [
          "9080",
          "逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線",
        ],
        [
          "9140",
          "繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻",
        ],
        [
          "9180",
          "操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只",
        ],
        [
          "9240",
          "叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄",
        ],
        [
          "9280",
          "逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓",
        ],
        [
          "9340",
          "邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬",
        ],
        [
          "9380",
          "凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入",
        ],
        [
          "9440",
          "如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅",
        ],
        [
          "9480",
          "楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美",
        ],
        [
          "9540",
          "鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷",
        ],
        [
          "9580",
          "斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋",
        ],
        [
          "9640",
          "法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆",
        ],
        [
          "9680",
          "摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒",
        ],
        [
          "9740",
          "諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲",
        ],
        [
          "9780",
          "沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯",
        ],
        [
          "9840",
          "蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕",
        ],
        [
          "989f",
          "弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲",
        ],
        [
          "9940",
          "僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭",
        ],
        [
          "9980",
          "凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨",
        ],
        [
          "9a40",
          "咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸",
        ],
        [
          "9a80",
          "噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩",
        ],
        [
          "9b40",
          "奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀",
        ],
        [
          "9b80",
          "它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏",
        ],
        [
          "9c40",
          "廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠",
        ],
        [
          "9c80",
          "怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛",
        ],
        [
          "9d40",
          "戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫",
        ],
        [
          "9d80",
          "捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼",
        ],
        [
          "9e40",
          "曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎",
        ],
        [
          "9e80",
          "梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣",
        ],
        [
          "9f40",
          "檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯",
        ],
        [
          "9f80",
          "麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌",
        ],
        [
          "e040",
          "漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝",
        ],
        [
          "e080",
          "烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱",
        ],
        [
          "e140",
          "瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿",
        ],
        [
          "e180",
          "痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬",
        ],
        [
          "e240",
          "磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰",
        ],
        [
          "e280",
          "窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆",
        ],
        [
          "e340",
          "紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷",
        ],
        [
          "e380",
          "縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋",
        ],
        [
          "e440",
          "隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤",
        ],
        [
          "e480",
          "艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈",
        ],
        [
          "e540",
          "蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬",
        ],
        [
          "e580",
          "蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞",
        ],
        [
          "e640",
          "襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧",
        ],
        [
          "e680",
          "諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊",
        ],
        [
          "e740",
          "蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜",
        ],
        [
          "e780",
          "轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮",
        ],
        [
          "e840",
          "錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙",
        ],
        [
          "e880",
          "閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰",
        ],
        [
          "e940",
          "顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃",
        ],
        [
          "e980",
          "騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈",
        ],
        [
          "ea40",
          "鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯",
        ],
        [
          "ea80",
          "黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠堯槇遙瑤凜熙",
        ],
        [
          "ed40",
          "纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏",
        ],
        [
          "ed80",
          "塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱",
        ],
        [
          "ee40",
          "犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙",
        ],
        [
          "ee80",
          "蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑",
        ],
        ["eeef", "ⅰ", 9, "￢￤＇＂"],
        ["f040", "", 62],
        ["f080", "", 124],
        ["f140", "", 62],
        ["f180", "", 124],
        ["f240", "", 62],
        ["f280", "", 124],
        ["f340", "", 62],
        ["f380", "", 124],
        ["f440", "", 62],
        ["f480", "", 124],
        ["f540", "", 62],
        ["f580", "", 124],
        ["f640", "", 62],
        ["f680", "", 124],
        ["f740", "", 62],
        ["f780", "", 124],
        ["f840", "", 62],
        ["f880", "", 124],
        ["f940", ""],
        [
          "fa40",
          "ⅰ",
          9,
          "Ⅰ",
          9,
          "￢￤＇＂㈱№℡∵纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊",
        ],
        [
          "fa80",
          "兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯",
        ],
        [
          "fb40",
          "涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神",
        ],
        [
          "fb80",
          "祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙",
        ],
        ["fc40", "髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"],
      ],
    }),
    dn = Object.freeze({
      default: [
        ["0", "\0", 127],
        ["8ea1", "｡", 62],
        [
          "a1a1",
          "　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈",
          9,
          "＋－±×÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇",
        ],
        ["a2a1", "◆□■△▲▽▼※〒→←↑↓〓"],
        ["a2ba", "∈∋⊆⊇⊂⊃∪∩"],
        ["a2ca", "∧∨￢⇒⇔∀∃"],
        ["a2dc", "∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬"],
        ["a2f2", "Å‰♯♭♪†‡¶"],
        ["a2fe", "◯"],
        ["a3b0", "０", 9],
        ["a3c1", "Ａ", 25],
        ["a3e1", "ａ", 25],
        ["a4a1", "ぁ", 82],
        ["a5a1", "ァ", 85],
        ["a6a1", "Α", 16, "Σ", 6],
        ["a6c1", "α", 16, "σ", 6],
        ["a7a1", "А", 5, "ЁЖ", 25],
        ["a7d1", "а", 5, "ёж", 25],
        ["a8a1", "─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂"],
        ["ada1", "①", 19, "Ⅰ", 9],
        ["adc0", "㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡"],
        ["addf", "㍻〝〟№㏍℡㊤", 4, "㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪"],
        [
          "b0a1",
          "亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭",
        ],
        [
          "b1a1",
          "院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応",
        ],
        [
          "b2a1",
          "押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改",
        ],
        [
          "b3a1",
          "魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱",
        ],
        [
          "b4a1",
          "粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄",
        ],
        [
          "b5a1",
          "機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京",
        ],
        [
          "b6a1",
          "供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈",
        ],
        [
          "b7a1",
          "掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲",
        ],
        [
          "b8a1",
          "検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向",
        ],
        [
          "b9a1",
          "后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込",
        ],
        [
          "baa1",
          "此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷",
        ],
        [
          "bba1",
          "察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時",
        ],
        [
          "bca1",
          "次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周",
        ],
        [
          "bda1",
          "宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償",
        ],
        [
          "bea1",
          "勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾",
        ],
        [
          "bfa1",
          "拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾",
        ],
        [
          "c0a1",
          "澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線",
        ],
        [
          "c1a1",
          "繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎",
        ],
        [
          "c2a1",
          "臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只",
        ],
        [
          "c3a1",
          "叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵",
        ],
        [
          "c4a1",
          "帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓",
        ],
        [
          "c5a1",
          "邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到",
        ],
        [
          "c6a1",
          "董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入",
        ],
        [
          "c7a1",
          "如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦",
        ],
        [
          "c8a1",
          "函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美",
        ],
        [
          "c9a1",
          "鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服",
        ],
        [
          "caa1",
          "福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋",
        ],
        [
          "cba1",
          "法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満",
        ],
        [
          "cca1",
          "漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒",
        ],
        [
          "cda1",
          "諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃",
        ],
        [
          "cea1",
          "痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯",
        ],
        [
          "cfa1",
          "蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕",
        ],
        [
          "d0a1",
          "弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲",
        ],
        [
          "d1a1",
          "僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨",
        ],
        [
          "d2a1",
          "辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨",
        ],
        [
          "d3a1",
          "咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉",
        ],
        [
          "d4a1",
          "圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩",
        ],
        [
          "d5a1",
          "奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓",
        ],
        [
          "d6a1",
          "屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏",
        ],
        [
          "d7a1",
          "廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚",
        ],
        [
          "d8a1",
          "悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛",
        ],
        [
          "d9a1",
          "戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼",
        ],
        [
          "daa1",
          "據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼",
        ],
        [
          "dba1",
          "曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍",
        ],
        [
          "dca1",
          "棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣",
        ],
        [
          "dda1",
          "檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾",
        ],
        [
          "dea1",
          "沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌",
        ],
        [
          "dfa1",
          "漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼",
        ],
        [
          "e0a1",
          "燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱",
        ],
        [
          "e1a1",
          "瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰",
        ],
        [
          "e2a1",
          "癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬",
        ],
        [
          "e3a1",
          "磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐",
        ],
        [
          "e4a1",
          "筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆",
        ],
        [
          "e5a1",
          "紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺",
        ],
        [
          "e6a1",
          "罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋",
        ],
        [
          "e7a1",
          "隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙",
        ],
        [
          "e8a1",
          "茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈",
        ],
        [
          "e9a1",
          "蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙",
        ],
        [
          "eaa1",
          "蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞",
        ],
        [
          "eba1",
          "襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫",
        ],
        [
          "eca1",
          "譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊",
        ],
        [
          "eda1",
          "蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸",
        ],
        [
          "eea1",
          "遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮",
        ],
        [
          "efa1",
          "錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞",
        ],
        [
          "f0a1",
          "陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰",
        ],
        [
          "f1a1",
          "顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷",
        ],
        [
          "f2a1",
          "髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈",
        ],
        [
          "f3a1",
          "鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠",
        ],
        ["f4a1", "堯槇遙瑤凜熙"],
        [
          "f9a1",
          "纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德",
        ],
        [
          "faa1",
          "忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱",
        ],
        [
          "fba1",
          "犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚",
        ],
        [
          "fca1",
          "釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑",
        ],
        ["fcf1", "ⅰ", 9, "￢￤＇＂"],
        ["8fa2af", "˘ˇ¸˙˝¯˛˚～΄΅"],
        ["8fa2c2", "¡¦¿"],
        ["8fa2eb", "ºª©®™¤№"],
        ["8fa6e1", "ΆΈΉΊΪ"],
        ["8fa6e7", "Ό"],
        ["8fa6e9", "ΎΫ"],
        ["8fa6ec", "Ώ"],
        ["8fa6f1", "άέήίϊΐόςύϋΰώ"],
        ["8fa7c2", "Ђ", 10, "ЎЏ"],
        ["8fa7f2", "ђ", 10, "ўџ"],
        ["8fa9a1", "ÆĐ"],
        ["8fa9a4", "Ħ"],
        ["8fa9a6", "Ĳ"],
        ["8fa9a8", "ŁĿ"],
        ["8fa9ab", "ŊØŒ"],
        ["8fa9af", "ŦÞ"],
        ["8fa9c1", "æđðħıĳĸłŀŉŋøœßŧþ"],
        ["8faaa1", "ÁÀÄÂĂǍĀĄÅÃĆĈČÇĊĎÉÈËÊĚĖĒĘ"],
        [
          "8faaba",
          "ĜĞĢĠĤÍÌÏÎǏİĪĮĨĴĶĹĽĻŃŇŅÑÓÒÖÔǑŐŌÕŔŘŖŚŜŠŞŤŢÚÙÜÛŬǓŰŪŲŮŨǗǛǙǕŴÝŸŶŹŽŻ",
        ],
        ["8faba1", "áàäâăǎāąåãćĉčçċďéèëêěėēęǵĝğ"],
        ["8fabbd", "ġĥíìïîǐ"],
        ["8fabc5", "īįĩĵķĺľļńňņñóòöôǒőōõŕřŗśŝšşťţúùüûŭǔűūųůũǘǜǚǖŵýÿŷźžż"],
        [
          "8fb0a1",
          "丂丄丅丌丒丟丣两丨丫丮丯丰丵乀乁乄乇乑乚乜乣乨乩乴乵乹乿亍亖亗亝亯亹仃仐仚仛仠仡仢仨仯仱仳仵份仾仿伀伂伃伈伋伌伒伕伖众伙伮伱你伳伵伷伹伻伾佀佂佈佉佋佌佒佔佖佘佟佣佪佬佮佱佷佸佹佺佽佾侁侂侄",
        ],
        [
          "8fb1a1",
          "侅侉侊侌侎侐侒侓侔侗侙侚侞侟侲侷侹侻侼侽侾俀俁俅俆俈俉俋俌俍俏俒俜俠俢俰俲俼俽俿倀倁倄倇倊倌倎倐倓倗倘倛倜倝倞倢倧倮倰倲倳倵偀偁偂偅偆偊偌偎偑偒偓偗偙偟偠偢偣偦偧偪偭偰偱倻傁傃傄傆傊傎傏傐",
        ],
        [
          "8fb2a1",
          "傒傓傔傖傛傜傞",
          4,
          "傪傯傰傹傺傽僀僃僄僇僌僎僐僓僔僘僜僝僟僢僤僦僨僩僯僱僶僺僾儃儆儇儈儋儌儍儎僲儐儗儙儛儜儝儞儣儧儨儬儭儯儱儳儴儵儸儹兂兊兏兓兕兗兘兟兤兦兾冃冄冋冎冘冝冡冣冭冸冺冼冾冿凂",
        ],
        [
          "8fb3a1",
          "凈减凑凒凓凕凘凞凢凥凮凲凳凴凷刁刂刅划刓刕刖刘刢刨刱刲刵刼剅剉剕剗剘剚剜剟剠剡剦剮剷剸剹劀劂劅劊劌劓劕劖劗劘劚劜劤劥劦劧劯劰劶劷劸劺劻劽勀勄勆勈勌勏勑勔勖勛勜勡勥勨勩勪勬勰勱勴勶勷匀匃匊匋",
        ],
        [
          "8fb4a1",
          "匌匑匓匘匛匜匞匟匥匧匨匩匫匬匭匰匲匵匼匽匾卂卌卋卙卛卡卣卥卬卭卲卹卾厃厇厈厎厓厔厙厝厡厤厪厫厯厲厴厵厷厸厺厽叀叅叏叒叓叕叚叝叞叠另叧叵吂吓吚吡吧吨吪启吱吴吵呃呄呇呍呏呞呢呤呦呧呩呫呭呮呴呿",
        ],
        [
          "8fb5a1",
          "咁咃咅咈咉咍咑咕咖咜咟咡咦咧咩咪咭咮咱咷咹咺咻咿哆哊响哎哠哪哬哯哶哼哾哿唀唁唅唈唉唌唍唎唕唪唫唲唵唶唻唼唽啁啇啉啊啍啐啑啘啚啛啞啠啡啤啦啿喁喂喆喈喎喏喑喒喓喔喗喣喤喭喲喿嗁嗃嗆嗉嗋嗌嗎嗑嗒",
        ],
        [
          "8fb6a1",
          "嗓嗗嗘嗛嗞嗢嗩嗶嗿嘅嘈嘊嘍",
          5,
          "嘙嘬嘰嘳嘵嘷嘹嘻嘼嘽嘿噀噁噃噄噆噉噋噍噏噔噞噠噡噢噣噦噩噭噯噱噲噵嚄嚅嚈嚋嚌嚕嚙嚚嚝嚞嚟嚦嚧嚨嚩嚫嚬嚭嚱嚳嚷嚾囅囉囊囋囏囐囌囍囙囜囝囟囡囤",
          4,
          "囱囫园",
        ],
        [
          "8fb7a1",
          "囶囷圁圂圇圊圌圑圕圚圛圝圠圢圣圤圥圩圪圬圮圯圳圴圽圾圿坅坆坌坍坒坢坥坧坨坫坭",
          4,
          "坳坴坵坷坹坺坻坼坾垁垃垌垔垗垙垚垜垝垞垟垡垕垧垨垩垬垸垽埇埈埌埏埕埝埞埤埦埧埩埭埰埵埶埸埽埾埿堃堄堈堉埡",
        ],
        [
          "8fb8a1",
          "堌堍堛堞堟堠堦堧堭堲堹堿塉塌塍塏塐塕塟塡塤塧塨塸塼塿墀墁墇墈墉墊墌墍墏墐墔墖墝墠墡墢墦墩墱墲壄墼壂壈壍壎壐壒壔壖壚壝壡壢壩壳夅夆夋夌夒夓夔虁夝夡夣夤夨夯夰夳夵夶夿奃奆奒奓奙奛奝奞奟奡奣奫奭",
        ],
        [
          "8fb9a1",
          "奯奲奵奶她奻奼妋妌妎妒妕妗妟妤妧妭妮妯妰妳妷妺妼姁姃姄姈姊姍姒姝姞姟姣姤姧姮姯姱姲姴姷娀娄娌娍娎娒娓娞娣娤娧娨娪娭娰婄婅婇婈婌婐婕婞婣婥婧婭婷婺婻婾媋媐媓媖媙媜媞媟媠媢媧媬媱媲媳媵媸媺媻媿",
        ],
        [
          "8fbaa1",
          "嫄嫆嫈嫏嫚嫜嫠嫥嫪嫮嫵嫶嫽嬀嬁嬈嬗嬴嬙嬛嬝嬡嬥嬭嬸孁孋孌孒孖孞孨孮孯孼孽孾孿宁宄宆宊宎宐宑宓宔宖宨宩宬宭宯宱宲宷宺宼寀寁寍寏寖",
          4,
          "寠寯寱寴寽尌尗尞尟尣尦尩尫尬尮尰尲尵尶屙屚屜屢屣屧屨屩",
        ],
        [
          "8fbba1",
          "屭屰屴屵屺屻屼屽岇岈岊岏岒岝岟岠岢岣岦岪岲岴岵岺峉峋峒峝峗峮峱峲峴崁崆崍崒崫崣崤崦崧崱崴崹崽崿嵂嵃嵆嵈嵕嵑嵙嵊嵟嵠嵡嵢嵤嵪嵭嵰嵹嵺嵾嵿嶁嶃嶈嶊嶒嶓嶔嶕嶙嶛嶟嶠嶧嶫嶰嶴嶸嶹巃巇巋巐巎巘巙巠巤",
        ],
        [
          "8fbca1",
          "巩巸巹帀帇帍帒帔帕帘帟帠帮帨帲帵帾幋幐幉幑幖幘幛幜幞幨幪",
          4,
          "幰庀庋庎庢庤庥庨庪庬庱庳庽庾庿廆廌廋廎廑廒廔廕廜廞廥廫异弆弇弈弎弙弜弝弡弢弣弤弨弫弬弮弰弴弶弻弽弿彀彄彅彇彍彐彔彘彛彠彣彤彧",
        ],
        [
          "8fbda1",
          "彯彲彴彵彸彺彽彾徉徍徏徖徜徝徢徧徫徤徬徯徰徱徸忄忇忈忉忋忐",
          4,
          "忞忡忢忨忩忪忬忭忮忯忲忳忶忺忼怇怊怍怓怔怗怘怚怟怤怭怳怵恀恇恈恉恌恑恔恖恗恝恡恧恱恾恿悂悆悈悊悎悑悓悕悘悝悞悢悤悥您悰悱悷",
        ],
        [
          "8fbea1",
          "悻悾惂惄惈惉惊惋惎惏惔惕惙惛惝惞惢惥惲惵惸惼惽愂愇愊愌愐",
          4,
          "愖愗愙愜愞愢愪愫愰愱愵愶愷愹慁慅慆慉慞慠慬慲慸慻慼慿憀憁憃憄憋憍憒憓憗憘憜憝憟憠憥憨憪憭憸憹憼懀懁懂懎懏懕懜懝懞懟懡懢懧懩懥",
        ],
        [
          "8fbfa1",
          "懬懭懯戁戃戄戇戓戕戜戠戢戣戧戩戫戹戽扂扃扄扆扌扐扑扒扔扖扚扜扤扭扯扳扺扽抍抎抏抐抦抨抳抶抷抺抾抿拄拎拕拖拚拪拲拴拼拽挃挄挊挋挍挐挓挖挘挩挪挭挵挶挹挼捁捂捃捄捆捊捋捎捒捓捔捘捛捥捦捬捭捱捴捵",
        ],
        [
          "8fc0a1",
          "捸捼捽捿掂掄掇掊掐掔掕掙掚掞掤掦掭掮掯掽揁揅揈揎揑揓揔揕揜揠揥揪揬揲揳揵揸揹搉搊搐搒搔搘搞搠搢搤搥搩搪搯搰搵搽搿摋摏摑摒摓摔摚摛摜摝摟摠摡摣摭摳摴摻摽撅撇撏撐撑撘撙撛撝撟撡撣撦撨撬撳撽撾撿",
        ],
        [
          "8fc1a1",
          "擄擉擊擋擌擎擐擑擕擗擤擥擩擪擭擰擵擷擻擿攁攄攈攉攊攏攓攔攖攙攛攞攟攢攦攩攮攱攺攼攽敃敇敉敐敒敔敟敠敧敫敺敽斁斅斊斒斕斘斝斠斣斦斮斲斳斴斿旂旈旉旎旐旔旖旘旟旰旲旴旵旹旾旿昀昄昈昉昍昑昒昕昖昝",
        ],
        [
          "8fc2a1",
          "昞昡昢昣昤昦昩昪昫昬昮昰昱昳昹昷晀晅晆晊晌晑晎晗晘晙晛晜晠晡曻晪晫晬晾晳晵晿晷晸晹晻暀晼暋暌暍暐暒暙暚暛暜暟暠暤暭暱暲暵暻暿曀曂曃曈曌曎曏曔曛曟曨曫曬曮曺朅朇朎朓朙朜朠朢朳朾杅杇杈杌杔杕杝",
        ],
        [
          "8fc3a1",
          "杦杬杮杴杶杻极构枎枏枑枓枖枘枙枛枰枱枲枵枻枼枽柹柀柂柃柅柈柉柒柗柙柜柡柦柰柲柶柷桒栔栙栝栟栨栧栬栭栯栰栱栳栻栿桄桅桊桌桕桗桘桛桫桮",
          4,
          "桵桹桺桻桼梂梄梆梈梖梘梚梜梡梣梥梩梪梮梲梻棅棈棌棏",
        ],
        [
          "8fc4a1",
          "棐棑棓棖棙棜棝棥棨棪棫棬棭棰棱棵棶棻棼棽椆椉椊椐椑椓椖椗椱椳椵椸椻楂楅楉楎楗楛楣楤楥楦楨楩楬楰楱楲楺楻楿榀榍榒榖榘榡榥榦榨榫榭榯榷榸榺榼槅槈槑槖槗槢槥槮槯槱槳槵槾樀樁樃樏樑樕樚樝樠樤樨樰樲",
        ],
        [
          "8fc5a1",
          "樴樷樻樾樿橅橆橉橊橎橐橑橒橕橖橛橤橧橪橱橳橾檁檃檆檇檉檋檑檛檝檞檟檥檫檯檰檱檴檽檾檿櫆櫉櫈櫌櫐櫔櫕櫖櫜櫝櫤櫧櫬櫰櫱櫲櫼櫽欂欃欆欇欉欏欐欑欗欛欞欤欨欫欬欯欵欶欻欿歆歊歍歒歖歘歝歠歧歫歮歰歵歽",
        ],
        [
          "8fc6a1",
          "歾殂殅殗殛殟殠殢殣殨殩殬殭殮殰殸殹殽殾毃毄毉毌毖毚毡毣毦毧毮毱毷毹毿氂氄氅氉氍氎氐氒氙氟氦氧氨氬氮氳氵氶氺氻氿汊汋汍汏汒汔汙汛汜汫汭汯汴汶汸汹汻沅沆沇沉沔沕沗沘沜沟沰沲沴泂泆泍泏泐泑泒泔泖",
        ],
        [
          "8fc7a1",
          "泚泜泠泧泩泫泬泮泲泴洄洇洊洎洏洑洓洚洦洧洨汧洮洯洱洹洼洿浗浞浟浡浥浧浯浰浼涂涇涑涒涔涖涗涘涪涬涴涷涹涽涿淄淈淊淎淏淖淛淝淟淠淢淥淩淯淰淴淶淼渀渄渞渢渧渲渶渹渻渼湄湅湈湉湋湏湑湒湓湔湗湜湝湞",
        ],
        [
          "8fc8a1",
          "湢湣湨湳湻湽溍溓溙溠溧溭溮溱溳溻溿滀滁滃滇滈滊滍滎滏滫滭滮滹滻滽漄漈漊漌漍漖漘漚漛漦漩漪漯漰漳漶漻漼漭潏潑潒潓潗潙潚潝潞潡潢潨潬潽潾澃澇澈澋澌澍澐澒澓澔澖澚澟澠澥澦澧澨澮澯澰澵澶澼濅濇濈濊",
        ],
        [
          "8fc9a1",
          "濚濞濨濩濰濵濹濼濽瀀瀅瀆瀇瀍瀗瀠瀣瀯瀴瀷瀹瀼灃灄灈灉灊灋灔灕灝灞灎灤灥灬灮灵灶灾炁炅炆炔",
          4,
          "炛炤炫炰炱炴炷烊烑烓烔烕烖烘烜烤烺焃",
          4,
          "焋焌焏焞焠焫焭焯焰焱焸煁煅煆煇煊煋煐煒煗煚煜煞煠",
        ],
        [
          "8fcaa1",
          "煨煹熀熅熇熌熒熚熛熠熢熯熰熲熳熺熿燀燁燄燋燌燓燖燙燚燜燸燾爀爇爈爉爓爗爚爝爟爤爫爯爴爸爹牁牂牃牅牎牏牐牓牕牖牚牜牞牠牣牨牫牮牯牱牷牸牻牼牿犄犉犍犎犓犛犨犭犮犱犴犾狁狇狉狌狕狖狘狟狥狳狴狺狻",
        ],
        [
          "8fcba1",
          "狾猂猄猅猇猋猍猒猓猘猙猞猢猤猧猨猬猱猲猵猺猻猽獃獍獐獒獖獘獝獞獟獠獦獧獩獫獬獮獯獱獷獹獼玀玁玃玅玆玎玐玓玕玗玘玜玞玟玠玢玥玦玪玫玭玵玷玹玼玽玿珅珆珉珋珌珏珒珓珖珙珝珡珣珦珧珩珴珵珷珹珺珻珽",
        ],
        [
          "8fcca1",
          "珿琀琁琄琇琊琑琚琛琤琦琨",
          9,
          "琹瑀瑃瑄瑆瑇瑋瑍瑑瑒瑗瑝瑢瑦瑧瑨瑫瑭瑮瑱瑲璀璁璅璆璇璉璏璐璑璒璘璙璚璜璟璠璡璣璦璨璩璪璫璮璯璱璲璵璹璻璿瓈瓉瓌瓐瓓瓘瓚瓛瓞瓟瓤瓨瓪瓫瓯瓴瓺瓻瓼瓿甆",
        ],
        [
          "8fcda1",
          "甒甖甗甠甡甤甧甩甪甯甶甹甽甾甿畀畃畇畈畎畐畒畗畞畟畡畯畱畹",
          5,
          "疁疅疐疒疓疕疙疜疢疤疴疺疿痀痁痄痆痌痎痏痗痜痟痠痡痤痧痬痮痯痱痹瘀瘂瘃瘄瘇瘈瘊瘌瘏瘒瘓瘕瘖瘙瘛瘜瘝瘞瘣瘥瘦瘩瘭瘲瘳瘵瘸瘹",
        ],
        [
          "8fcea1",
          "瘺瘼癊癀癁癃癄癅癉癋癕癙癟癤癥癭癮癯癱癴皁皅皌皍皕皛皜皝皟皠皢",
          6,
          "皪皭皽盁盅盉盋盌盎盔盙盠盦盨盬盰盱盶盹盼眀眆眊眎眒眔眕眗眙眚眜眢眨眭眮眯眴眵眶眹眽眾睂睅睆睊睍睎睏睒睖睗睜睞睟睠睢",
        ],
        [
          "8fcfa1",
          "睤睧睪睬睰睲睳睴睺睽瞀瞄瞌瞍瞔瞕瞖瞚瞟瞢瞧瞪瞮瞯瞱瞵瞾矃矉矑矒矕矙矞矟矠矤矦矪矬矰矱矴矸矻砅砆砉砍砎砑砝砡砢砣砭砮砰砵砷硃硄硇硈硌硎硒硜硞硠硡硣硤硨硪确硺硾碊碏碔碘碡碝碞碟碤碨碬碭碰碱碲碳",
        ],
        [
          "8fd0a1",
          "碻碽碿磇磈磉磌磎磒磓磕磖磤磛磟磠磡磦磪磲磳礀磶磷磺磻磿礆礌礐礚礜礞礟礠礥礧礩礭礱礴礵礻礽礿祄祅祆祊祋祏祑祔祘祛祜祧祩祫祲祹祻祼祾禋禌禑禓禔禕禖禘禛禜禡禨禩禫禯禱禴禸离秂秄秇秈秊秏秔秖秚秝秞",
        ],
        [
          "8fd1a1",
          "秠秢秥秪秫秭秱秸秼稂稃稇稉稊稌稑稕稛稞稡稧稫稭稯稰稴稵稸稹稺穄穅穇穈穌穕穖穙穜穝穟穠穥穧穪穭穵穸穾窀窂窅窆窊窋窐窑窔窞窠窣窬窳窵窹窻窼竆竉竌竎竑竛竨竩竫竬竱竴竻竽竾笇笔笟笣笧笩笪笫笭笮笯笰",
        ],
        [
          "8fd2a1",
          "笱笴笽笿筀筁筇筎筕筠筤筦筩筪筭筯筲筳筷箄箉箎箐箑箖箛箞箠箥箬箯箰箲箵箶箺箻箼箽篂篅篈篊篔篖篗篙篚篛篨篪篲篴篵篸篹篺篼篾簁簂簃簄簆簉簋簌簎簏簙簛簠簥簦簨簬簱簳簴簶簹簺籆籊籕籑籒籓籙",
          5,
        ],
        [
          "8fd3a1",
          "籡籣籧籩籭籮籰籲籹籼籽粆粇粏粔粞粠粦粰粶粷粺粻粼粿糄糇糈糉糍糏糓糔糕糗糙糚糝糦糩糫糵紃紇紈紉紏紑紒紓紖紝紞紣紦紪紭紱紼紽紾絀絁絇絈絍絑絓絗絙絚絜絝絥絧絪絰絸絺絻絿綁綂綃綅綆綈綋綌綍綑綖綗綝",
        ],
        [
          "8fd4a1",
          "綞綦綧綪綳綶綷綹緂",
          4,
          "緌緍緎緗緙縀緢緥緦緪緫緭緱緵緶緹緺縈縐縑縕縗縜縝縠縧縨縬縭縯縳縶縿繄繅繇繎繐繒繘繟繡繢繥繫繮繯繳繸繾纁纆纇纊纍纑纕纘纚纝纞缼缻缽缾缿罃罄罇罏罒罓罛罜罝罡罣罤罥罦罭",
        ],
        [
          "8fd5a1",
          "罱罽罾罿羀羋羍羏羐羑羖羗羜羡羢羦羪羭羴羼羿翀翃翈翎翏翛翟翣翥翨翬翮翯翲翺翽翾翿耇耈耊耍耎耏耑耓耔耖耝耞耟耠耤耦耬耮耰耴耵耷耹耺耼耾聀聄聠聤聦聭聱聵肁肈肎肜肞肦肧肫肸肹胈胍胏胒胔胕胗胘胠胭胮",
        ],
        [
          "8fd6a1",
          "胰胲胳胶胹胺胾脃脋脖脗脘脜脞脠脤脧脬脰脵脺脼腅腇腊腌腒腗腠腡腧腨腩腭腯腷膁膐膄膅膆膋膎膖膘膛膞膢膮膲膴膻臋臃臅臊臎臏臕臗臛臝臞臡臤臫臬臰臱臲臵臶臸臹臽臿舀舃舏舓舔舙舚舝舡舢舨舲舴舺艃艄艅艆",
        ],
        [
          "8fd7a1",
          "艋艎艏艑艖艜艠艣艧艭艴艻艽艿芀芁芃芄芇芉芊芎芑芔芖芘芚芛芠芡芣芤芧芨芩芪芮芰芲芴芷芺芼芾芿苆苐苕苚苠苢苤苨苪苭苯苶苷苽苾茀茁茇茈茊茋荔茛茝茞茟茡茢茬茭茮茰茳茷茺茼茽荂荃荄荇荍荎荑荕荖荗荰荸",
        ],
        [
          "8fd8a1",
          "荽荿莀莂莄莆莍莒莔莕莘莙莛莜莝莦莧莩莬莾莿菀菇菉菏菐菑菔菝荓菨菪菶菸菹菼萁萆萊萏萑萕萙莭萯萹葅葇葈葊葍葏葑葒葖葘葙葚葜葠葤葥葧葪葰葳葴葶葸葼葽蒁蒅蒒蒓蒕蒞蒦蒨蒩蒪蒯蒱蒴蒺蒽蒾蓀蓂蓇蓈蓌蓏蓓",
        ],
        [
          "8fd9a1",
          "蓜蓧蓪蓯蓰蓱蓲蓷蔲蓺蓻蓽蔂蔃蔇蔌蔎蔐蔜蔞蔢蔣蔤蔥蔧蔪蔫蔯蔳蔴蔶蔿蕆蕏",
          4,
          "蕖蕙蕜",
          6,
          "蕤蕫蕯蕹蕺蕻蕽蕿薁薅薆薉薋薌薏薓薘薝薟薠薢薥薧薴薶薷薸薼薽薾薿藂藇藊藋藎薭藘藚藟藠藦藨藭藳藶藼",
        ],
        [
          "8fdaa1",
          "藿蘀蘄蘅蘍蘎蘐蘑蘒蘘蘙蘛蘞蘡蘧蘩蘶蘸蘺蘼蘽虀虂虆虒虓虖虗虘虙虝虠",
          4,
          "虩虬虯虵虶虷虺蚍蚑蚖蚘蚚蚜蚡蚦蚧蚨蚭蚱蚳蚴蚵蚷蚸蚹蚿蛀蛁蛃蛅蛑蛒蛕蛗蛚蛜蛠蛣蛥蛧蚈蛺蛼蛽蜄蜅蜇蜋蜎蜏蜐蜓蜔蜙蜞蜟蜡蜣",
        ],
        [
          "8fdba1",
          "蜨蜮蜯蜱蜲蜹蜺蜼蜽蜾蝀蝃蝅蝍蝘蝝蝡蝤蝥蝯蝱蝲蝻螃",
          6,
          "螋螌螐螓螕螗螘螙螞螠螣螧螬螭螮螱螵螾螿蟁蟈蟉蟊蟎蟕蟖蟙蟚蟜蟟蟢蟣蟤蟪蟫蟭蟱蟳蟸蟺蟿蠁蠃蠆蠉蠊蠋蠐蠙蠒蠓蠔蠘蠚蠛蠜蠞蠟蠨蠭蠮蠰蠲蠵",
        ],
        [
          "8fdca1",
          "蠺蠼衁衃衅衈衉衊衋衎衑衕衖衘衚衜衟衠衤衩衱衹衻袀袘袚袛袜袟袠袨袪袺袽袾裀裊",
          4,
          "裑裒裓裛裞裧裯裰裱裵裷褁褆褍褎褏褕褖褘褙褚褜褠褦褧褨褰褱褲褵褹褺褾襀襂襅襆襉襏襒襗襚襛襜襡襢襣襫襮襰襳襵襺",
        ],
        [
          "8fdda1",
          "襻襼襽覉覍覐覔覕覛覜覟覠覥覰覴覵覶覷覼觔",
          4,
          "觥觩觫觭觱觳觶觹觽觿訄訅訇訏訑訒訔訕訞訠訢訤訦訫訬訯訵訷訽訾詀詃詅詇詉詍詎詓詖詗詘詜詝詡詥詧詵詶詷詹詺詻詾詿誀誃誆誋誏誐誒誖誗誙誟誧誩誮誯誳",
        ],
        [
          "8fdea1",
          "誶誷誻誾諃諆諈諉諊諑諓諔諕諗諝諟諬諰諴諵諶諼諿謅謆謋謑謜謞謟謊謭謰謷謼譂",
          4,
          "譈譒譓譔譙譍譞譣譭譶譸譹譼譾讁讄讅讋讍讏讔讕讜讞讟谸谹谽谾豅豇豉豋豏豑豓豔豗豘豛豝豙豣豤豦豨豩豭豳豵豶豻豾貆",
        ],
        [
          "8fdfa1",
          "貇貋貐貒貓貙貛貜貤貹貺賅賆賉賋賏賖賕賙賝賡賨賬賯賰賲賵賷賸賾賿贁贃贉贒贗贛赥赩赬赮赿趂趄趈趍趐趑趕趞趟趠趦趫趬趯趲趵趷趹趻跀跅跆跇跈跊跎跑跔跕跗跙跤跥跧跬跰趼跱跲跴跽踁踄踅踆踋踑踔踖踠踡踢",
        ],
        [
          "8fe0a1",
          "踣踦踧踱踳踶踷踸踹踽蹀蹁蹋蹍蹎蹏蹔蹛蹜蹝蹞蹡蹢蹩蹬蹭蹯蹰蹱蹹蹺蹻躂躃躉躐躒躕躚躛躝躞躢躧躩躭躮躳躵躺躻軀軁軃軄軇軏軑軔軜軨軮軰軱軷軹軺軭輀輂輇輈輏輐輖輗輘輞輠輡輣輥輧輨輬輭輮輴輵輶輷輺轀轁",
        ],
        [
          "8fe1a1",
          "轃轇轏轑",
          4,
          "轘轝轞轥辝辠辡辤辥辦辵辶辸达迀迁迆迊迋迍运迒迓迕迠迣迤迨迮迱迵迶迻迾适逄逈逌逘逛逨逩逯逪逬逭逳逴逷逿遃遄遌遛遝遢遦遧遬遰遴遹邅邈邋邌邎邐邕邗邘邙邛邠邡邢邥邰邲邳邴邶邽郌邾郃",
        ],
        [
          "8fe2a1",
          "郄郅郇郈郕郗郘郙郜郝郟郥郒郶郫郯郰郴郾郿鄀鄄鄅鄆鄈鄍鄐鄔鄖鄗鄘鄚鄜鄞鄠鄥鄢鄣鄧鄩鄮鄯鄱鄴鄶鄷鄹鄺鄼鄽酃酇酈酏酓酗酙酚酛酡酤酧酭酴酹酺酻醁醃醅醆醊醎醑醓醔醕醘醞醡醦醨醬醭醮醰醱醲醳醶醻醼醽醿",
        ],
        [
          "8fe3a1",
          "釂釃釅釓釔釗釙釚釞釤釥釩釪釬",
          5,
          "釷釹釻釽鈀鈁鈄鈅鈆鈇鈉鈊鈌鈐鈒鈓鈖鈘鈜鈝鈣鈤鈥鈦鈨鈮鈯鈰鈳鈵鈶鈸鈹鈺鈼鈾鉀鉂鉃鉆鉇鉊鉍鉎鉏鉑鉘鉙鉜鉝鉠鉡鉥鉧鉨鉩鉮鉯鉰鉵",
          4,
          "鉻鉼鉽鉿銈銉銊銍銎銒銗",
        ],
        [
          "8fe4a1",
          "銙銟銠銤銥銧銨銫銯銲銶銸銺銻銼銽銿",
          4,
          "鋅鋆鋇鋈鋋鋌鋍鋎鋐鋓鋕鋗鋘鋙鋜鋝鋟鋠鋡鋣鋥鋧鋨鋬鋮鋰鋹鋻鋿錀錂錈錍錑錔錕錜錝錞錟錡錤錥錧錩錪錳錴錶錷鍇鍈鍉鍐鍑鍒鍕鍗鍘鍚鍞鍤鍥鍧鍩鍪鍭鍯鍰鍱鍳鍴鍶",
        ],
        [
          "8fe5a1",
          "鍺鍽鍿鎀鎁鎂鎈鎊鎋鎍鎏鎒鎕鎘鎛鎞鎡鎣鎤鎦鎨鎫鎴鎵鎶鎺鎩鏁鏄鏅鏆鏇鏉",
          4,
          "鏓鏙鏜鏞鏟鏢鏦鏧鏹鏷鏸鏺鏻鏽鐁鐂鐄鐈鐉鐍鐎鐏鐕鐖鐗鐟鐮鐯鐱鐲鐳鐴鐻鐿鐽鑃鑅鑈鑊鑌鑕鑙鑜鑟鑡鑣鑨鑫鑭鑮鑯鑱鑲钄钃镸镹",
        ],
        [
          "8fe6a1",
          "镾閄閈閌閍閎閝閞閟閡閦閩閫閬閴閶閺閽閿闆闈闉闋闐闑闒闓闙闚闝闞闟闠闤闦阝阞阢阤阥阦阬阱阳阷阸阹阺阼阽陁陒陔陖陗陘陡陮陴陻陼陾陿隁隂隃隄隉隑隖隚隝隟隤隥隦隩隮隯隳隺雊雒嶲雘雚雝雞雟雩雯雱雺霂",
        ],
        [
          "8fe7a1",
          "霃霅霉霚霛霝霡霢霣霨霱霳靁靃靊靎靏靕靗靘靚靛靣靧靪靮靳靶靷靸靻靽靿鞀鞉鞕鞖鞗鞙鞚鞞鞟鞢鞬鞮鞱鞲鞵鞶鞸鞹鞺鞼鞾鞿韁韄韅韇韉韊韌韍韎韐韑韔韗韘韙韝韞韠韛韡韤韯韱韴韷韸韺頇頊頙頍頎頔頖頜頞頠頣頦",
        ],
        [
          "8fe8a1",
          "頫頮頯頰頲頳頵頥頾顄顇顊顑顒顓顖顗顙顚顢顣顥顦顪顬颫颭颮颰颴颷颸颺颻颿飂飅飈飌飡飣飥飦飧飪飳飶餂餇餈餑餕餖餗餚餛餜餟餢餦餧餫餱",
          4,
          "餹餺餻餼饀饁饆饇饈饍饎饔饘饙饛饜饞饟饠馛馝馟馦馰馱馲馵",
        ],
        [
          "8fe9a1",
          "馹馺馽馿駃駉駓駔駙駚駜駞駧駪駫駬駰駴駵駹駽駾騂騃騄騋騌騐騑騖騞騠騢騣騤騧騭騮騳騵騶騸驇驁驄驊驋驌驎驑驔驖驝骪骬骮骯骲骴骵骶骹骻骾骿髁髃髆髈髎髐髒髕髖髗髛髜髠髤髥髧髩髬髲髳髵髹髺髽髿",
          4,
        ],
        [
          "8feaa1",
          "鬄鬅鬈鬉鬋鬌鬍鬎鬐鬒鬖鬙鬛鬜鬠鬦鬫鬭鬳鬴鬵鬷鬹鬺鬽魈魋魌魕魖魗魛魞魡魣魥魦魨魪",
          4,
          "魳魵魷魸魹魿鮀鮄鮅鮆鮇鮉鮊鮋鮍鮏鮐鮔鮚鮝鮞鮦鮧鮩鮬鮰鮱鮲鮷鮸鮻鮼鮾鮿鯁鯇鯈鯎鯐鯗鯘鯝鯟鯥鯧鯪鯫鯯鯳鯷鯸",
        ],
        [
          "8feba1",
          "鯹鯺鯽鯿鰀鰂鰋鰏鰑鰖鰘鰙鰚鰜鰞鰢鰣鰦",
          4,
          "鰱鰵鰶鰷鰽鱁鱃鱄鱅鱉鱊鱎鱏鱐鱓鱔鱖鱘鱛鱝鱞鱟鱣鱩鱪鱜鱫鱨鱮鱰鱲鱵鱷鱻鳦鳲鳷鳹鴋鴂鴑鴗鴘鴜鴝鴞鴯鴰鴲鴳鴴鴺鴼鵅鴽鵂鵃鵇鵊鵓鵔鵟鵣鵢鵥鵩鵪鵫鵰鵶鵷鵻",
        ],
        [
          "8feca1",
          "鵼鵾鶃鶄鶆鶊鶍鶎鶒鶓鶕鶖鶗鶘鶡鶪鶬鶮鶱鶵鶹鶼鶿鷃鷇鷉鷊鷔鷕鷖鷗鷚鷞鷟鷠鷥鷧鷩鷫鷮鷰鷳鷴鷾鸊鸂鸇鸎鸐鸑鸒鸕鸖鸙鸜鸝鹺鹻鹼麀麂麃麄麅麇麎麏麖麘麛麞麤麨麬麮麯麰麳麴麵黆黈黋黕黟黤黧黬黭黮黰黱黲黵",
        ],
        [
          "8feda1",
          "黸黿鼂鼃鼉鼏鼐鼑鼒鼔鼖鼗鼙鼚鼛鼟鼢鼦鼪鼫鼯鼱鼲鼴鼷鼹鼺鼼鼽鼿齁齃",
          4,
          "齓齕齖齗齘齚齝齞齨齩齭",
          4,
          "齳齵齺齽龏龐龑龒龔龖龗龞龡龢龣龥",
        ],
      ],
    }),
    pn = Object.freeze({
      default: [
        ["0", "\0", 127, "€"],
        [
          "8140",
          "丂丄丅丆丏丒丗丟丠両丣並丩丮丯丱丳丵丷丼乀乁乂乄乆乊乑乕乗乚乛乢乣乤乥乧乨乪",
          5,
          "乲乴",
          9,
          "乿",
          6,
          "亇亊",
        ],
        [
          "8180",
          "亐亖亗亙亜亝亞亣亪亯亰亱亴亶亷亸亹亼亽亾仈仌仏仐仒仚仛仜仠仢仦仧仩仭仮仯仱仴仸仹仺仼仾伀伂",
          6,
          "伋伌伒",
          4,
          "伜伝伡伣伨伩伬伭伮伱伳伵伷伹伻伾",
          4,
          "佄佅佇",
          5,
          "佒佔佖佡佢佦佨佪佫佭佮佱佲併佷佸佹佺佽侀侁侂侅來侇侊侌侎侐侒侓侕侖侘侙侚侜侞侟価侢",
        ],
        [
          "8240",
          "侤侫侭侰",
          4,
          "侶",
          8,
          "俀俁係俆俇俈俉俋俌俍俒",
          4,
          "俙俛俠俢俤俥俧俫俬俰俲俴俵俶俷俹俻俼俽俿",
          11,
        ],
        [
          "8280",
          "個倎倐們倓倕倖倗倛倝倞倠倢倣値倧倫倯",
          10,
          "倻倽倿偀偁偂偄偅偆偉偊偋偍偐",
          4,
          "偖偗偘偙偛偝",
          7,
          "偦",
          5,
          "偭",
          8,
          "偸偹偺偼偽傁傂傃傄傆傇傉傊傋傌傎",
          20,
          "傤傦傪傫傭",
          4,
          "傳",
          6,
          "傼",
        ],
        [
          "8340",
          "傽",
          17,
          "僐",
          5,
          "僗僘僙僛",
          10,
          "僨僩僪僫僯僰僱僲僴僶",
          4,
          "僼",
          9,
          "儈",
        ],
        [
          "8380",
          "儉儊儌",
          5,
          "儓",
          13,
          "儢",
          28,
          "兂兇兊兌兎兏児兒兓兗兘兙兛兝",
          4,
          "兣兤兦內兩兪兯兲兺兾兿冃冄円冇冊冋冎冏冐冑冓冔冘冚冝冞冟冡冣冦",
          4,
          "冭冮冴冸冹冺冾冿凁凂凃凅凈凊凍凎凐凒",
          5,
        ],
        [
          "8440",
          "凘凙凚凜凞凟凢凣凥",
          5,
          "凬凮凱凲凴凷凾刄刅刉刋刌刏刐刓刔刕刜刞刟刡刢刣別刦刧刪刬刯刱刲刴刵刼刾剄",
          5,
          "剋剎剏剒剓剕剗剘",
        ],
        [
          "8480",
          "剙剚剛剝剟剠剢剣剤剦剨剫剬剭剮剰剱剳",
          9,
          "剾劀劃",
          4,
          "劉",
          6,
          "劑劒劔",
          6,
          "劜劤劥劦劧劮劯劰労",
          9,
          "勀勁勂勄勅勆勈勊勌勍勎勏勑勓勔動勗務",
          5,
          "勠勡勢勣勥",
          10,
          "勱",
          7,
          "勻勼勽匁匂匃匄匇匉匊匋匌匎",
        ],
        [
          "8540",
          "匑匒匓匔匘匛匜匞匟匢匤匥匧匨匩匫匬匭匯",
          9,
          "匼匽區卂卄卆卋卌卍卐協単卙卛卝卥卨卪卬卭卲卶卹卻卼卽卾厀厁厃厇厈厊厎厏",
        ],
        [
          "8580",
          "厐",
          4,
          "厖厗厙厛厜厞厠厡厤厧厪厫厬厭厯",
          6,
          "厷厸厹厺厼厽厾叀參",
          4,
          "収叏叐叒叓叕叚叜叝叞叡叢叧叴叺叾叿吀吂吅吇吋吔吘吙吚吜吢吤吥吪吰吳吶吷吺吽吿呁呂呄呅呇呉呌呍呎呏呑呚呝",
          4,
          "呣呥呧呩",
          7,
          "呴呹呺呾呿咁咃咅咇咈咉咊咍咑咓咗咘咜咞咟咠咡",
        ],
        [
          "8640",
          "咢咥咮咰咲咵咶咷咹咺咼咾哃哅哊哋哖哘哛哠",
          4,
          "哫哬哯哰哱哴",
          5,
          "哻哾唀唂唃唄唅唈唊",
          4,
          "唒唓唕",
          5,
          "唜唝唞唟唡唥唦",
        ],
        [
          "8680",
          "唨唩唫唭唲唴唵唶唸唹唺唻唽啀啂啅啇啈啋",
          4,
          "啑啒啓啔啗",
          4,
          "啝啞啟啠啢啣啨啩啫啯",
          5,
          "啹啺啽啿喅喆喌喍喎喐喒喓喕喖喗喚喛喞喠",
          6,
          "喨",
          8,
          "喲喴営喸喺喼喿",
          4,
          "嗆嗇嗈嗊嗋嗎嗏嗐嗕嗗",
          4,
          "嗞嗠嗢嗧嗩嗭嗮嗰嗱嗴嗶嗸",
          4,
          "嗿嘂嘃嘄嘅",
        ],
        [
          "8740",
          "嘆嘇嘊嘋嘍嘐",
          7,
          "嘙嘚嘜嘝嘠嘡嘢嘥嘦嘨嘩嘪嘫嘮嘯嘰嘳嘵嘷嘸嘺嘼嘽嘾噀",
          11,
          "噏",
          4,
          "噕噖噚噛噝",
          4,
        ],
        [
          "8780",
          "噣噥噦噧噭噮噯噰噲噳噴噵噷噸噹噺噽",
          7,
          "嚇",
          6,
          "嚐嚑嚒嚔",
          14,
          "嚤",
          10,
          "嚰",
          6,
          "嚸嚹嚺嚻嚽",
          12,
          "囋",
          8,
          "囕囖囘囙囜団囥",
          5,
          "囬囮囯囲図囶囷囸囻囼圀圁圂圅圇國",
          6,
        ],
        [
          "8840",
          "園",
          9,
          "圝圞圠圡圢圤圥圦圧圫圱圲圴",
          4,
          "圼圽圿坁坃坄坅坆坈坉坋坒",
          4,
          "坘坙坢坣坥坧坬坮坰坱坲坴坵坸坹坺坽坾坿垀",
        ],
        [
          "8880",
          "垁垇垈垉垊垍",
          4,
          "垔",
          6,
          "垜垝垞垟垥垨垪垬垯垰垱垳垵垶垷垹",
          8,
          "埄",
          6,
          "埌埍埐埑埓埖埗埛埜埞埡埢埣埥",
          7,
          "埮埰埱埲埳埵埶執埻埼埾埿堁堃堄堅堈堉堊堌堎堏堐堒堓堔堖堗堘堚堛堜堝堟堢堣堥",
          4,
          "堫",
          4,
          "報堲堳場堶",
          7,
        ],
        [
          "8940",
          "堾",
          5,
          "塅",
          6,
          "塎塏塐塒塓塕塖塗塙",
          4,
          "塟",
          5,
          "塦",
          4,
          "塭",
          16,
          "塿墂墄墆墇墈墊墋墌",
        ],
        [
          "8980",
          "墍",
          4,
          "墔",
          4,
          "墛墜墝墠",
          7,
          "墪",
          17,
          "墽墾墿壀壂壃壄壆",
          10,
          "壒壓壔壖",
          13,
          "壥",
          5,
          "壭壯壱売壴壵壷壸壺",
          7,
          "夃夅夆夈",
          4,
          "夎夐夑夒夓夗夘夛夝夞夠夡夢夣夦夨夬夰夲夳夵夶夻",
        ],
        [
          "8a40",
          "夽夾夿奀奃奅奆奊奌奍奐奒奓奙奛",
          4,
          "奡奣奤奦",
          12,
          "奵奷奺奻奼奾奿妀妅妉妋妌妎妏妐妑妔妕妘妚妛妜妝妟妠妡妢妦",
        ],
        [
          "8a80",
          "妧妬妭妰妱妳",
          5,
          "妺妼妽妿",
          6,
          "姇姈姉姌姍姎姏姕姖姙姛姞",
          4,
          "姤姦姧姩姪姫姭",
          11,
          "姺姼姽姾娀娂娊娋娍娎娏娐娒娔娕娖娗娙娚娛娝娞娡娢娤娦娧娨娪",
          6,
          "娳娵娷",
          4,
          "娽娾娿婁",
          4,
          "婇婈婋",
          9,
          "婖婗婘婙婛",
          5,
        ],
        [
          "8b40",
          "婡婣婤婥婦婨婩婫",
          8,
          "婸婹婻婼婽婾媀",
          17,
          "媓",
          6,
          "媜",
          13,
          "媫媬",
        ],
        [
          "8b80",
          "媭",
          4,
          "媴媶媷媹",
          4,
          "媿嫀嫃",
          5,
          "嫊嫋嫍",
          4,
          "嫓嫕嫗嫙嫚嫛嫝嫞嫟嫢嫤嫥嫧嫨嫪嫬",
          4,
          "嫲",
          22,
          "嬊",
          11,
          "嬘",
          25,
          "嬳嬵嬶嬸",
          7,
          "孁",
          6,
        ],
        [
          "8c40",
          "孈",
          7,
          "孒孖孞孠孡孧孨孫孭孮孯孲孴孶孷學孹孻孼孾孿宂宆宊宍宎宐宑宒宔宖実宧宨宩宬宭宮宯宱宲宷宺宻宼寀寁寃寈寉寊寋寍寎寏",
        ],
        [
          "8c80",
          "寑寔",
          8,
          "寠寢寣實寧審",
          4,
          "寯寱",
          6,
          "寽対尀専尃尅將專尋尌對導尐尒尓尗尙尛尞尟尠尡尣尦尨尩尪尫尭尮尯尰尲尳尵尶尷屃屄屆屇屌屍屒屓屔屖屗屘屚屛屜屝屟屢層屧",
          6,
          "屰屲",
          6,
          "屻屼屽屾岀岃",
          4,
          "岉岊岋岎岏岒岓岕岝",
          4,
          "岤",
          4,
        ],
        [
          "8d40",
          "岪岮岯岰岲岴岶岹岺岻岼岾峀峂峃峅",
          5,
          "峌",
          5,
          "峓",
          5,
          "峚",
          6,
          "峢峣峧峩峫峬峮峯峱",
          9,
          "峼",
          4,
        ],
        [
          "8d80",
          "崁崄崅崈",
          5,
          "崏",
          4,
          "崕崗崘崙崚崜崝崟",
          4,
          "崥崨崪崫崬崯",
          4,
          "崵",
          7,
          "崿",
          7,
          "嵈嵉嵍",
          10,
          "嵙嵚嵜嵞",
          10,
          "嵪嵭嵮嵰嵱嵲嵳嵵",
          12,
          "嶃",
          21,
          "嶚嶛嶜嶞嶟嶠",
        ],
        ["8e40", "嶡", 21, "嶸", 12, "巆", 6, "巎", 12, "巜巟巠巣巤巪巬巭"],
        [
          "8e80",
          "巰巵巶巸",
          4,
          "巿帀帄帇帉帊帋帍帎帒帓帗帞",
          7,
          "帨",
          4,
          "帯帰帲",
          4,
          "帹帺帾帿幀幁幃幆",
          5,
          "幍",
          6,
          "幖",
          4,
          "幜幝幟幠幣",
          14,
          "幵幷幹幾庁庂広庅庈庉庌庍庎庒庘庛庝庡庢庣庤庨",
          4,
          "庮",
          4,
          "庴庺庻庼庽庿",
          6,
        ],
        [
          "8f40",
          "廆廇廈廋",
          5,
          "廔廕廗廘廙廚廜",
          11,
          "廩廫",
          8,
          "廵廸廹廻廼廽弅弆弇弉弌弍弎弐弒弔弖弙弚弜弝弞弡弢弣弤",
        ],
        [
          "8f80",
          "弨弫弬弮弰弲",
          6,
          "弻弽弾弿彁",
          14,
          "彑彔彙彚彛彜彞彟彠彣彥彧彨彫彮彯彲彴彵彶彸彺彽彾彿徃徆徍徎徏徑従徔徖徚徛徝從徟徠徢",
          5,
          "復徫徬徯",
          5,
          "徶徸徹徺徻徾",
          4,
          "忇忈忊忋忎忓忔忕忚忛応忞忟忢忣忥忦忨忩忬忯忰忲忳忴忶忷忹忺忼怇",
        ],
        [
          "9040",
          "怈怉怋怌怐怑怓怗怘怚怞怟怢怣怤怬怭怮怰",
          4,
          "怶",
          4,
          "怽怾恀恄",
          6,
          "恌恎恏恑恓恔恖恗恘恛恜恞恟恠恡恥恦恮恱恲恴恵恷恾悀",
        ],
        [
          "9080",
          "悁悂悅悆悇悈悊悋悎悏悐悑悓悕悗悘悙悜悞悡悢悤悥悧悩悪悮悰悳悵悶悷悹悺悽",
          7,
          "惇惈惉惌",
          4,
          "惒惓惔惖惗惙惛惞惡",
          4,
          "惪惱惲惵惷惸惻",
          4,
          "愂愃愄愅愇愊愋愌愐",
          4,
          "愖愗愘愙愛愜愝愞愡愢愥愨愩愪愬",
          18,
          "慀",
          6,
        ],
        [
          "9140",
          "慇慉態慍慏慐慒慓慔慖",
          6,
          "慞慟慠慡慣慤慥慦慩",
          6,
          "慱慲慳慴慶慸",
          18,
          "憌憍憏",
          4,
          "憕",
        ],
        [
          "9180",
          "憖",
          6,
          "憞",
          8,
          "憪憫憭",
          9,
          "憸",
          5,
          "憿懀懁懃",
          4,
          "應懌",
          4,
          "懓懕",
          16,
          "懧",
          13,
          "懶",
          8,
          "戀",
          5,
          "戇戉戓戔戙戜戝戞戠戣戦戧戨戩戫戭戯戰戱戲戵戶戸",
          4,
          "扂扄扅扆扊",
        ],
        [
          "9240",
          "扏扐払扖扗扙扚扜",
          6,
          "扤扥扨扱扲扴扵扷扸扺扻扽抁抂抃抅抆抇抈抋",
          5,
          "抔抙抜抝択抣抦抧抩抪抭抮抯抰抲抳抴抶抷抸抺抾拀拁",
        ],
        [
          "9280",
          "拃拋拏拑拕拝拞拠拡拤拪拫拰拲拵拸拹拺拻挀挃挄挅挆挊挋挌挍挏挐挒挓挔挕挗挘挙挜挦挧挩挬挭挮挰挱挳",
          5,
          "挻挼挾挿捀捁捄捇捈捊捑捒捓捔捖",
          7,
          "捠捤捥捦捨捪捫捬捯捰捲捳捴捵捸捹捼捽捾捿掁掃掄掅掆掋掍掑掓掔掕掗掙",
          6,
          "採掤掦掫掯掱掲掵掶掹掻掽掿揀",
        ],
        [
          "9340",
          "揁揂揃揅揇揈揊揋揌揑揓揔揕揗",
          6,
          "揟揢揤",
          4,
          "揫揬揮揯揰揱揳揵揷揹揺揻揼揾搃搄搆",
          4,
          "損搎搑搒搕",
          5,
          "搝搟搢搣搤",
        ],
        [
          "9380",
          "搥搧搨搩搫搮",
          5,
          "搵",
          4,
          "搻搼搾摀摂摃摉摋",
          6,
          "摓摕摖摗摙",
          4,
          "摟",
          7,
          "摨摪摫摬摮",
          9,
          "摻",
          6,
          "撃撆撈",
          8,
          "撓撔撗撘撚撛撜撝撟",
          4,
          "撥撦撧撨撪撫撯撱撲撳撴撶撹撻撽撾撿擁擃擄擆",
          6,
          "擏擑擓擔擕擖擙據",
        ],
        ["9440", "擛擜擝擟擠擡擣擥擧", 24, "攁", 7, "攊", 7, "攓", 4, "攙", 8],
        [
          "9480",
          "攢攣攤攦",
          4,
          "攬攭攰攱攲攳攷攺攼攽敀",
          4,
          "敆敇敊敋敍敎敐敒敓敔敗敘敚敜敟敠敡敤敥敧敨敩敪敭敮敯敱敳敵敶數",
          14,
          "斈斉斊斍斎斏斒斔斕斖斘斚斝斞斠斢斣斦斨斪斬斮斱",
          7,
          "斺斻斾斿旀旂旇旈旉旊旍旐旑旓旔旕旘",
          7,
          "旡旣旤旪旫",
        ],
        [
          "9540",
          "旲旳旴旵旸旹旻",
          4,
          "昁昄昅昇昈昉昋昍昐昑昒昖昗昘昚昛昜昞昡昢昣昤昦昩昪昫昬昮昰昲昳昷",
          4,
          "昽昿晀時晄",
          6,
          "晍晎晐晑晘",
        ],
        [
          "9580",
          "晙晛晜晝晞晠晢晣晥晧晩",
          4,
          "晱晲晳晵晸晹晻晼晽晿暀暁暃暅暆暈暉暊暋暍暎暏暐暒暓暔暕暘",
          4,
          "暞",
          8,
          "暩",
          4,
          "暯",
          4,
          "暵暶暷暸暺暻暼暽暿",
          25,
          "曚曞",
          7,
          "曧曨曪",
          5,
          "曱曵曶書曺曻曽朁朂會",
        ],
        [
          "9640",
          "朄朅朆朇朌朎朏朑朒朓朖朘朙朚朜朞朠",
          5,
          "朧朩朮朰朲朳朶朷朸朹朻朼朾朿杁杄杅杇杊杋杍杒杔杕杗",
          4,
          "杝杢杣杤杦杧杫杬杮東杴杶",
        ],
        [
          "9680",
          "杸杹杺杻杽枀枂枃枅枆枈枊枌枍枎枏枑枒枓枔枖枙枛枟枠枡枤枦枩枬枮枱枲枴枹",
          7,
          "柂柅",
          9,
          "柕柖柗柛柟柡柣柤柦柧柨柪柫柭柮柲柵",
          7,
          "柾栁栂栃栄栆栍栐栒栔栕栘",
          4,
          "栞栟栠栢",
          6,
          "栫",
          6,
          "栴栵栶栺栻栿桇桋桍桏桒桖",
          5,
        ],
        [
          "9740",
          "桜桝桞桟桪桬",
          7,
          "桵桸",
          8,
          "梂梄梇",
          7,
          "梐梑梒梔梕梖梘",
          9,
          "梣梤梥梩梪梫梬梮梱梲梴梶梷梸",
        ],
        [
          "9780",
          "梹",
          6,
          "棁棃",
          5,
          "棊棌棎棏棐棑棓棔棖棗棙棛",
          4,
          "棡棢棤",
          9,
          "棯棲棳棴棶棷棸棻棽棾棿椀椂椃椄椆",
          4,
          "椌椏椑椓",
          11,
          "椡椢椣椥",
          7,
          "椮椯椱椲椳椵椶椷椸椺椻椼椾楀楁楃",
          16,
          "楕楖楘楙楛楜楟",
        ],
        [
          "9840",
          "楡楢楤楥楧楨楩楪楬業楯楰楲",
          4,
          "楺楻楽楾楿榁榃榅榊榋榌榎",
          5,
          "榖榗榙榚榝",
          9,
          "榩榪榬榮榯榰榲榳榵榶榸榹榺榼榽",
        ],
        [
          "9880",
          "榾榿槀槂",
          7,
          "構槍槏槑槒槓槕",
          5,
          "槜槝槞槡",
          11,
          "槮槯槰槱槳",
          9,
          "槾樀",
          9,
          "樋",
          11,
          "標",
          5,
          "樠樢",
          5,
          "権樫樬樭樮樰樲樳樴樶",
          6,
          "樿",
          4,
          "橅橆橈",
          7,
          "橑",
          6,
          "橚",
        ],
        [
          "9940",
          "橜",
          4,
          "橢橣橤橦",
          10,
          "橲",
          6,
          "橺橻橽橾橿檁檂檃檅",
          8,
          "檏檒",
          4,
          "檘",
          7,
          "檡",
          5,
        ],
        ["9980", "檧檨檪檭", 114, "欥欦欨", 6],
        [
          "9a40",
          "欯欰欱欳欴欵欶欸欻欼欽欿歀歁歂歄歅歈歊歋歍",
          11,
          "歚",
          7,
          "歨歩歫",
          13,
          "歺歽歾歿殀殅殈",
        ],
        [
          "9a80",
          "殌殎殏殐殑殔殕殗殘殙殜",
          4,
          "殢",
          7,
          "殫",
          7,
          "殶殸",
          6,
          "毀毃毄毆",
          4,
          "毌毎毐毑毘毚毜",
          4,
          "毢",
          7,
          "毬毭毮毰毱毲毴毶毷毸毺毻毼毾",
          6,
          "氈",
          4,
          "氎氒気氜氝氞氠氣氥氫氬氭氱氳氶氷氹氺氻氼氾氿汃汄汅汈汋",
          4,
          "汑汒汓汖汘",
        ],
        [
          "9b40",
          "汙汚汢汣汥汦汧汫",
          4,
          "汱汳汵汷汸決汻汼汿沀沄沇沊沋沍沎沑沒沕沖沗沘沚沜沝沞沠沢沨沬沯沰沴沵沶沷沺泀況泂泃泆泇泈泋泍泎泏泑泒泘",
        ],
        [
          "9b80",
          "泙泚泜泝泟泤泦泧泩泬泭泲泴泹泿洀洂洃洅洆洈洉洊洍洏洐洑洓洔洕洖洘洜洝洟",
          5,
          "洦洨洩洬洭洯洰洴洶洷洸洺洿浀浂浄浉浌浐浕浖浗浘浛浝浟浡浢浤浥浧浨浫浬浭浰浱浲浳浵浶浹浺浻浽",
          4,
          "涃涄涆涇涊涋涍涏涐涒涖",
          4,
          "涜涢涥涬涭涰涱涳涴涶涷涹",
          5,
          "淁淂淃淈淉淊",
        ],
        [
          "9c40",
          "淍淎淏淐淒淓淔淕淗淚淛淜淟淢淣淥淧淨淩淪淭淯淰淲淴淵淶淸淺淽",
          7,
          "渆渇済渉渋渏渒渓渕渘渙減渜渞渟渢渦渧渨渪測渮渰渱渳渵",
        ],
        [
          "9c80",
          "渶渷渹渻",
          7,
          "湅",
          7,
          "湏湐湑湒湕湗湙湚湜湝湞湠",
          10,
          "湬湭湯",
          14,
          "満溁溂溄溇溈溊",
          4,
          "溑",
          6,
          "溙溚溛溝溞溠溡溣溤溦溨溩溫溬溭溮溰溳溵溸溹溼溾溿滀滃滄滅滆滈滉滊滌滍滎滐滒滖滘滙滛滜滝滣滧滪",
          5,
        ],
        [
          "9d40",
          "滰滱滲滳滵滶滷滸滺",
          7,
          "漃漄漅漇漈漊",
          4,
          "漐漑漒漖",
          9,
          "漡漢漣漥漦漧漨漬漮漰漲漴漵漷",
          6,
          "漿潀潁潂",
        ],
        [
          "9d80",
          "潃潄潅潈潉潊潌潎",
          9,
          "潙潚潛潝潟潠潡潣潤潥潧",
          5,
          "潯潰潱潳潵潶潷潹潻潽",
          6,
          "澅澆澇澊澋澏",
          12,
          "澝澞澟澠澢",
          4,
          "澨",
          10,
          "澴澵澷澸澺",
          5,
          "濁濃",
          5,
          "濊",
          6,
          "濓",
          10,
          "濟濢濣濤濥",
        ],
        ["9e40", "濦", 7, "濰", 32, "瀒", 7, "瀜", 6, "瀤", 6],
        [
          "9e80",
          "瀫",
          9,
          "瀶瀷瀸瀺",
          17,
          "灍灎灐",
          13,
          "灟",
          11,
          "灮灱灲灳灴灷灹灺灻災炁炂炃炄炆炇炈炋炌炍炏炐炑炓炗炘炚炛炞",
          12,
          "炰炲炴炵炶為炾炿烄烅烆烇烉烋",
          12,
          "烚",
        ],
        [
          "9f40",
          "烜烝烞烠烡烢烣烥烪烮烰",
          6,
          "烸烺烻烼烾",
          10,
          "焋",
          4,
          "焑焒焔焗焛",
          10,
          "焧",
          7,
          "焲焳焴",
        ],
        [
          "9f80",
          "焵焷",
          13,
          "煆煇煈煉煋煍煏",
          12,
          "煝煟",
          4,
          "煥煩",
          4,
          "煯煰煱煴煵煶煷煹煻煼煾",
          5,
          "熅",
          4,
          "熋熌熍熎熐熑熒熓熕熖熗熚",
          4,
          "熡",
          6,
          "熩熪熫熭",
          5,
          "熴熶熷熸熺",
          8,
          "燄",
          9,
          "燏",
          4,
        ],
        ["a040", "燖", 9, "燡燢燣燤燦燨", 5, "燯", 9, "燺", 11, "爇", 19],
        [
          "a080",
          "爛爜爞",
          9,
          "爩爫爭爮爯爲爳爴爺爼爾牀",
          6,
          "牉牊牋牎牏牐牑牓牔牕牗牘牚牜牞牠牣牤牥牨牪牫牬牭牰牱牳牴牶牷牸牻牼牽犂犃犅",
          4,
          "犌犎犐犑犓",
          11,
          "犠",
          11,
          "犮犱犲犳犵犺",
          6,
          "狅狆狇狉狊狋狌狏狑狓狔狕狖狘狚狛",
        ],
        [
          "a1a1",
          "　、。·ˉˇ¨〃々—～‖…‘’“”〔〕〈",
          7,
          "〖〗【】±×÷∶∧∨∑∏∪∩∈∷√⊥∥∠⌒⊙∫∮≡≌≈∽∝≠≮≯≤≥∞∵∴♂♀°′″℃＄¤￠￡‰§№☆★○●◎◇◆□■△▲※→←↑↓〓",
        ],
        ["a2a1", "ⅰ", 9],
        ["a2b1", "⒈", 19, "⑴", 19, "①", 9],
        ["a2e5", "㈠", 9],
        ["a2f1", "Ⅰ", 11],
        ["a3a1", "！＂＃￥％", 88, "￣"],
        ["a4a1", "ぁ", 82],
        ["a5a1", "ァ", 85],
        ["a6a1", "Α", 16, "Σ", 6],
        ["a6c1", "α", 16, "σ", 6],
        ["a6e0", "︵︶︹︺︿﹀︽︾﹁﹂﹃﹄"],
        ["a6ee", "︻︼︷︸︱"],
        ["a6f4", "︳︴"],
        ["a7a1", "А", 5, "ЁЖ", 25],
        ["a7d1", "а", 5, "ёж", 25],
        ["a840", "ˊˋ˙–―‥‵℅℉↖↗↘↙∕∟∣≒≦≧⊿═", 35, "▁", 6],
        ["a880", "█", 7, "▓▔▕▼▽◢◣◤◥☉⊕〒〝〞"],
        ["a8a1", "āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜüêɑ"],
        ["a8bd", "ńň"],
        ["a8c0", "ɡ"],
        ["a8c5", "ㄅ", 36],
        ["a940", "〡", 8, "㊣㎎㎏㎜㎝㎞㎡㏄㏎㏑㏒㏕︰￢￤"],
        ["a959", "℡㈱"],
        ["a95c", "‐"],
        ["a960", "ー゛゜ヽヾ〆ゝゞ﹉", 9, "﹔﹕﹖﹗﹙", 8],
        ["a980", "﹢", 4, "﹨﹩﹪﹫"],
        ["a996", "〇"],
        ["a9a4", "─", 75],
        [
          "aa40",
          "狜狝狟狢",
          5,
          "狪狫狵狶狹狽狾狿猀猂猄",
          5,
          "猋猌猍猏猐猑猒猔猘猙猚猟猠猣猤猦猧猨猭猯猰猲猳猵猶猺猻猼猽獀",
          8,
        ],
        ["aa80", "獉獊獋獌獎獏獑獓獔獕獖獘", 7, "獡", 10, "獮獰獱"],
        [
          "ab40",
          "獲",
          11,
          "獿",
          4,
          "玅玆玈玊玌玍玏玐玒玓玔玕玗玘玙玚玜玝玞玠玡玣",
          5,
          "玪玬玭玱玴玵玶玸玹玼玽玾玿珁珃",
          4,
        ],
        ["ab80", "珋珌珎珒", 6, "珚珛珜珝珟珡珢珣珤珦珨珪珫珬珮珯珰珱珳", 4],
        [
          "ac40",
          "珸",
          10,
          "琄琇琈琋琌琍琎琑",
          8,
          "琜",
          5,
          "琣琤琧琩琫琭琯琱琲琷",
          4,
          "琽琾琿瑀瑂",
          11,
        ],
        ["ac80", "瑎", 6, "瑖瑘瑝瑠", 12, "瑮瑯瑱", 4, "瑸瑹瑺"],
        [
          "ad40",
          "瑻瑼瑽瑿璂璄璅璆璈璉璊璌璍璏璑",
          10,
          "璝璟",
          7,
          "璪",
          15,
          "璻",
          12,
        ],
        ["ad80", "瓈", 9, "瓓", 8, "瓝瓟瓡瓥瓧", 6, "瓰瓱瓲"],
        [
          "ae40",
          "瓳瓵瓸",
          6,
          "甀甁甂甃甅",
          7,
          "甎甐甒甔甕甖甗甛甝甞甠",
          4,
          "甦甧甪甮甴甶甹甼甽甿畁畂畃畄畆畇畉畊畍畐畑畒畓畕畖畗畘",
        ],
        ["ae80", "畝", 7, "畧畨畩畫", 6, "畳畵當畷畺", 4, "疀疁疂疄疅疇"],
        [
          "af40",
          "疈疉疊疌疍疎疐疓疕疘疛疜疞疢疦",
          4,
          "疭疶疷疺疻疿痀痁痆痋痌痎痏痐痑痓痗痙痚痜痝痟痠痡痥痩痬痭痮痯痲痳痵痶痷痸痺痻痽痾瘂瘄瘆瘇",
        ],
        [
          "af80",
          "瘈瘉瘋瘍瘎瘏瘑瘒瘓瘔瘖瘚瘜瘝瘞瘡瘣瘧瘨瘬瘮瘯瘱瘲瘶瘷瘹瘺瘻瘽癁療癄",
        ],
        [
          "b040",
          "癅",
          6,
          "癎",
          5,
          "癕癗",
          4,
          "癝癟癠癡癢癤",
          6,
          "癬癭癮癰",
          7,
          "癹発發癿皀皁皃皅皉皊皌皍皏皐皒皔皕皗皘皚皛",
        ],
        [
          "b080",
          "皜",
          7,
          "皥",
          8,
          "皯皰皳皵",
          9,
          "盀盁盃啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥",
        ],
        [
          "b140",
          "盄盇盉盋盌盓盕盙盚盜盝盞盠",
          4,
          "盦",
          7,
          "盰盳盵盶盷盺盻盽盿眀眂眃眅眆眊県眎",
          10,
          "眛眜眝眞眡眣眤眥眧眪眫",
        ],
        [
          "b180",
          "眬眮眰",
          4,
          "眹眻眽眾眿睂睄睅睆睈",
          7,
          "睒",
          7,
          "睜薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳",
        ],
        [
          "b240",
          "睝睞睟睠睤睧睩睪睭",
          11,
          "睺睻睼瞁瞂瞃瞆",
          5,
          "瞏瞐瞓",
          11,
          "瞡瞣瞤瞦瞨瞫瞭瞮瞯瞱瞲瞴瞶",
          4,
        ],
        [
          "b280",
          "瞼瞾矀",
          12,
          "矎",
          8,
          "矘矙矚矝",
          4,
          "矤病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖",
        ],
        [
          "b340",
          "矦矨矪矯矰矱矲矴矵矷矹矺矻矼砃",
          5,
          "砊砋砎砏砐砓砕砙砛砞砠砡砢砤砨砪砫砮砯砱砲砳砵砶砽砿硁硂硃硄硆硈硉硊硋硍硏硑硓硔硘硙硚",
        ],
        [
          "b380",
          "硛硜硞",
          11,
          "硯",
          7,
          "硸硹硺硻硽",
          6,
          "场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚",
        ],
        [
          "b440",
          "碄碅碆碈碊碋碏碐碒碔碕碖碙碝碞碠碢碤碦碨",
          7,
          "碵碶碷碸確碻碼碽碿磀磂磃磄磆磇磈磌磍磎磏磑磒磓磖磗磘磚",
          9,
        ],
        [
          "b480",
          "磤磥磦磧磩磪磫磭",
          4,
          "磳磵磶磸磹磻",
          5,
          "礂礃礄礆",
          6,
          "础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮",
        ],
        [
          "b540",
          "礍",
          5,
          "礔",
          9,
          "礟",
          4,
          "礥",
          14,
          "礵",
          4,
          "礽礿祂祃祄祅祇祊",
          8,
          "祔祕祘祙祡祣",
        ],
        [
          "b580",
          "祤祦祩祪祫祬祮祰",
          6,
          "祹祻",
          4,
          "禂禃禆禇禈禉禋禌禍禎禐禑禒怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠",
        ],
        [
          "b640",
          "禓",
          6,
          "禛",
          11,
          "禨",
          10,
          "禴",
          4,
          "禼禿秂秄秅秇秈秊秌秎秏秐秓秔秖秗秙",
          5,
          "秠秡秢秥秨秪",
        ],
        [
          "b680",
          "秬秮秱",
          6,
          "秹秺秼秾秿稁稄稅稇稈稉稊稌稏",
          4,
          "稕稖稘稙稛稜丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二",
        ],
        [
          "b740",
          "稝稟稡稢稤",
          14,
          "稴稵稶稸稺稾穀",
          5,
          "穇",
          9,
          "穒",
          4,
          "穘",
          16,
        ],
        [
          "b780",
          "穩",
          6,
          "穱穲穳穵穻穼穽穾窂窅窇窉窊窋窌窎窏窐窓窔窙窚窛窞窡窢贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服",
        ],
        [
          "b840",
          "窣窤窧窩窪窫窮",
          4,
          "窴",
          10,
          "竀",
          10,
          "竌",
          9,
          "竗竘竚竛竜竝竡竢竤竧",
          5,
          "竮竰竱竲竳",
        ],
        [
          "b880",
          "竴",
          4,
          "竻竼竾笀笁笂笅笇笉笌笍笎笐笒笓笖笗笘笚笜笝笟笡笢笣笧笩笭浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹",
        ],
        [
          "b940",
          "笯笰笲笴笵笶笷笹笻笽笿",
          5,
          "筆筈筊筍筎筓筕筗筙筜筞筟筡筣",
          10,
          "筯筰筳筴筶筸筺筼筽筿箁箂箃箄箆",
          6,
          "箎箏",
        ],
        [
          "b980",
          "箑箒箓箖箘箙箚箛箞箟箠箣箤箥箮箯箰箲箳箵箶箷箹",
          7,
          "篂篃範埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈",
        ],
        [
          "ba40",
          "篅篈築篊篋篍篎篏篐篒篔",
          4,
          "篛篜篞篟篠篢篣篤篧篨篩篫篬篭篯篰篲",
          4,
          "篸篹篺篻篽篿",
          7,
          "簈簉簊簍簎簐",
          5,
          "簗簘簙",
        ],
        [
          "ba80",
          "簚",
          4,
          "簠",
          5,
          "簨簩簫",
          12,
          "簹",
          5,
          "籂骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖",
        ],
        ["bb40", "籃", 9, "籎", 36, "籵", 5, "籾", 9],
        [
          "bb80",
          "粈粊",
          6,
          "粓粔粖粙粚粛粠粡粣粦粧粨粩粫粬粭粯粰粴",
          4,
          "粺粻弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕",
        ],
        [
          "bc40",
          "粿糀糂糃糄糆糉糋糎",
          6,
          "糘糚糛糝糞糡",
          6,
          "糩",
          5,
          "糰",
          7,
          "糹糺糼",
          13,
          "紋",
          5,
        ],
        [
          "bc80",
          "紑",
          14,
          "紡紣紤紥紦紨紩紪紬紭紮細",
          6,
          "肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件",
        ],
        ["bd40", "紷", 54, "絯", 7],
        [
          "bd80",
          "絸",
          32,
          "健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸",
        ],
        ["be40", "継", 12, "綧", 6, "綯", 42],
        [
          "be80",
          "線",
          32,
          "尽劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵觉决诀绝均菌钧军君峻",
        ],
        ["bf40", "緻", 62],
        [
          "bf80",
          "縺縼",
          4,
          "繂",
          4,
          "繈",
          21,
          "俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀",
        ],
        ["c040", "繞", 35, "纃", 23, "纜纝纞"],
        [
          "c080",
          "纮纴纻纼绖绤绬绹缊缐缞缷缹缻",
          6,
          "罃罆",
          9,
          "罒罓馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐",
        ],
        [
          "c140",
          "罖罙罛罜罝罞罠罣",
          4,
          "罫罬罭罯罰罳罵罶罷罸罺罻罼罽罿羀羂",
          7,
          "羋羍羏",
          4,
          "羕",
          4,
          "羛羜羠羢羣羥羦羨",
          6,
          "羱",
        ],
        [
          "c180",
          "羳",
          4,
          "羺羻羾翀翂翃翄翆翇翈翉翋翍翏",
          4,
          "翖翗翙",
          5,
          "翢翣痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿",
        ],
        [
          "c240",
          "翤翧翨翪翫翬翭翯翲翴",
          6,
          "翽翾翿耂耇耈耉耊耎耏耑耓耚耛耝耞耟耡耣耤耫",
          5,
          "耲耴耹耺耼耾聀聁聄聅聇聈聉聎聏聐聑聓聕聖聗",
        ],
        [
          "c280",
          "聙聛",
          13,
          "聫",
          5,
          "聲",
          11,
          "隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫",
        ],
        [
          "c340",
          "聾肁肂肅肈肊肍",
          5,
          "肔肕肗肙肞肣肦肧肨肬肰肳肵肶肸肹肻胅胇",
          4,
          "胏",
          6,
          "胘胟胠胢胣胦胮胵胷胹胻胾胿脀脁脃脄脅脇脈脋",
        ],
        [
          "c380",
          "脌脕脗脙脛脜脝脟",
          12,
          "脭脮脰脳脴脵脷脹",
          4,
          "脿谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸",
        ],
        [
          "c440",
          "腀",
          5,
          "腇腉腍腎腏腒腖腗腘腛",
          4,
          "腡腢腣腤腦腨腪腫腬腯腲腳腵腶腷腸膁膃",
          4,
          "膉膋膌膍膎膐膒",
          5,
          "膙膚膞",
          4,
          "膤膥",
        ],
        [
          "c480",
          "膧膩膫",
          7,
          "膴",
          5,
          "膼膽膾膿臄臅臇臈臉臋臍",
          6,
          "摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁",
        ],
        [
          "c540",
          "臔",
          14,
          "臤臥臦臨臩臫臮",
          4,
          "臵",
          5,
          "臽臿舃與",
          4,
          "舎舏舑舓舕",
          5,
          "舝舠舤舥舦舧舩舮舲舺舼舽舿",
        ],
        [
          "c580",
          "艀艁艂艃艅艆艈艊艌艍艎艐",
          7,
          "艙艛艜艝艞艠",
          7,
          "艩拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗",
        ],
        [
          "c640",
          "艪艫艬艭艱艵艶艷艸艻艼芀芁芃芅芆芇芉芌芐芓芔芕芖芚芛芞芠芢芣芧芲芵芶芺芻芼芿苀苂苃苅苆苉苐苖苙苚苝苢苧苨苩苪苬苭苮苰苲苳苵苶苸",
        ],
        [
          "c680",
          "苺苼",
          4,
          "茊茋茍茐茒茓茖茘茙茝",
          9,
          "茩茪茮茰茲茷茻茽啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐",
        ],
        [
          "c740",
          "茾茿荁荂荄荅荈荊",
          4,
          "荓荕",
          4,
          "荝荢荰",
          6,
          "荹荺荾",
          6,
          "莇莈莊莋莌莍莏莐莑莔莕莖莗莙莚莝莟莡",
          6,
          "莬莭莮",
        ],
        [
          "c780",
          "莯莵莻莾莿菂菃菄菆菈菉菋菍菎菐菑菒菓菕菗菙菚菛菞菢菣菤菦菧菨菫菬菭恰洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠",
        ],
        [
          "c840",
          "菮華菳",
          4,
          "菺菻菼菾菿萀萂萅萇萈萉萊萐萒",
          5,
          "萙萚萛萞",
          5,
          "萩",
          7,
          "萲",
          5,
          "萹萺萻萾",
          7,
          "葇葈葉",
        ],
        [
          "c880",
          "葊",
          6,
          "葒",
          4,
          "葘葝葞葟葠葢葤",
          4,
          "葪葮葯葰葲葴葷葹葻葼取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁",
        ],
        [
          "c940",
          "葽",
          4,
          "蒃蒄蒅蒆蒊蒍蒏",
          7,
          "蒘蒚蒛蒝蒞蒟蒠蒢",
          12,
          "蒰蒱蒳蒵蒶蒷蒻蒼蒾蓀蓂蓃蓅蓆蓇蓈蓋蓌蓎蓏蓒蓔蓕蓗",
        ],
        [
          "c980",
          "蓘",
          4,
          "蓞蓡蓢蓤蓧",
          4,
          "蓭蓮蓯蓱",
          10,
          "蓽蓾蔀蔁蔂伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳",
        ],
        [
          "ca40",
          "蔃",
          8,
          "蔍蔎蔏蔐蔒蔔蔕蔖蔘蔙蔛蔜蔝蔞蔠蔢",
          8,
          "蔭",
          9,
          "蔾",
          4,
          "蕄蕅蕆蕇蕋",
          10,
        ],
        [
          "ca80",
          "蕗蕘蕚蕛蕜蕝蕟",
          4,
          "蕥蕦蕧蕩",
          8,
          "蕳蕵蕶蕷蕸蕼蕽蕿薀薁省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱",
        ],
        [
          "cb40",
          "薂薃薆薈",
          6,
          "薐",
          10,
          "薝",
          6,
          "薥薦薧薩薫薬薭薱",
          5,
          "薸薺",
          6,
          "藂",
          6,
          "藊",
          4,
          "藑藒",
        ],
        [
          "cb80",
          "藔藖",
          5,
          "藝",
          6,
          "藥藦藧藨藪",
          14,
          "恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔",
        ],
        [
          "cc40",
          "藹藺藼藽藾蘀",
          4,
          "蘆",
          10,
          "蘒蘓蘔蘕蘗",
          15,
          "蘨蘪",
          13,
          "蘹蘺蘻蘽蘾蘿虀",
        ],
        [
          "cc80",
          "虁",
          11,
          "虒虓處",
          4,
          "虛虜虝號虠虡虣",
          7,
          "獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃",
        ],
        [
          "cd40",
          "虭虯虰虲",
          6,
          "蚃",
          6,
          "蚎",
          4,
          "蚔蚖",
          5,
          "蚞",
          4,
          "蚥蚦蚫蚭蚮蚲蚳蚷蚸蚹蚻",
          4,
          "蛁蛂蛃蛅蛈蛌蛍蛒蛓蛕蛖蛗蛚蛜",
        ],
        [
          "cd80",
          "蛝蛠蛡蛢蛣蛥蛦蛧蛨蛪蛫蛬蛯蛵蛶蛷蛺蛻蛼蛽蛿蜁蜄蜅蜆蜋蜌蜎蜏蜐蜑蜔蜖汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威",
        ],
        [
          "ce40",
          "蜙蜛蜝蜟蜠蜤蜦蜧蜨蜪蜫蜬蜭蜯蜰蜲蜳蜵蜶蜸蜹蜺蜼蜽蝀",
          6,
          "蝊蝋蝍蝏蝐蝑蝒蝔蝕蝖蝘蝚",
          5,
          "蝡蝢蝦",
          7,
          "蝯蝱蝲蝳蝵",
        ],
        [
          "ce80",
          "蝷蝸蝹蝺蝿螀螁螄螆螇螉螊螌螎",
          4,
          "螔螕螖螘",
          6,
          "螠",
          4,
          "巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺",
        ],
        [
          "cf40",
          "螥螦螧螩螪螮螰螱螲螴螶螷螸螹螻螼螾螿蟁",
          4,
          "蟇蟈蟉蟌",
          4,
          "蟔",
          6,
          "蟜蟝蟞蟟蟡蟢蟣蟤蟦蟧蟨蟩蟫蟬蟭蟯",
          9,
        ],
        [
          "cf80",
          "蟺蟻蟼蟽蟿蠀蠁蠂蠄",
          5,
          "蠋",
          7,
          "蠔蠗蠘蠙蠚蠜",
          4,
          "蠣稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓",
        ],
        [
          "d040",
          "蠤",
          13,
          "蠳",
          5,
          "蠺蠻蠽蠾蠿衁衂衃衆",
          5,
          "衎",
          5,
          "衕衖衘衚",
          6,
          "衦衧衪衭衯衱衳衴衵衶衸衹衺",
        ],
        [
          "d080",
          "衻衼袀袃袆袇袉袊袌袎袏袐袑袓袔袕袗",
          4,
          "袝",
          4,
          "袣袥",
          5,
          "小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄",
        ],
        [
          "d140",
          "袬袮袯袰袲",
          4,
          "袸袹袺袻袽袾袿裀裃裄裇裈裊裋裌裍裏裐裑裓裖裗裚",
          4,
          "裠裡裦裧裩",
          6,
          "裲裵裶裷裺裻製裿褀褁褃",
          5,
        ],
        [
          "d180",
          "褉褋",
          4,
          "褑褔",
          4,
          "褜",
          4,
          "褢褣褤褦褧褨褩褬褭褮褯褱褲褳褵褷选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶",
        ],
        ["d240", "褸", 8, "襂襃襅", 24, "襠", 5, "襧", 19, "襼"],
        [
          "d280",
          "襽襾覀覂覄覅覇",
          26,
          "摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐",
        ],
        [
          "d340",
          "覢",
          30,
          "觃觍觓觔觕觗觘觙觛觝觟觠觡觢觤觧觨觩觪觬觭觮觰觱觲觴",
          6,
        ],
        [
          "d380",
          "觻",
          4,
          "訁",
          5,
          "計",
          21,
          "印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉",
        ],
        ["d440", "訞", 31, "訿", 8, "詉", 21],
        [
          "d480",
          "詟",
          25,
          "詺",
          6,
          "浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧",
        ],
        ["d540", "誁", 7, "誋", 7, "誔", 46],
        [
          "d580",
          "諃",
          32,
          "铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政",
        ],
        ["d640", "諤", 34, "謈", 27],
        [
          "d680",
          "謤謥謧",
          30,
          "帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑",
        ],
        ["d740", "譆", 31, "譧", 4, "譭", 25],
        [
          "d780",
          "讇",
          24,
          "讬讱讻诇诐诪谉谞住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座",
        ],
        [
          "d840",
          "谸",
          8,
          "豂豃豄豅豈豊豋豍",
          7,
          "豖豗豘豙豛",
          5,
          "豣",
          6,
          "豬",
          6,
          "豴豵豶豷豻",
          6,
          "貃貄貆貇",
        ],
        [
          "d880",
          "貈貋貍",
          6,
          "貕貖貗貙",
          20,
          "亍丌兀丐廿卅丕亘丞鬲孬噩丨禺丿匕乇夭爻卮氐囟胤馗毓睾鼗丶亟鼐乜乩亓芈孛啬嘏仄厍厝厣厥厮靥赝匚叵匦匮匾赜卦卣刂刈刎刭刳刿剀剌剞剡剜蒯剽劂劁劐劓冂罔亻仃仉仂仨仡仫仞伛仳伢佤仵伥伧伉伫佞佧攸佚佝",
        ],
        ["d940", "貮", 62],
        [
          "d980",
          "賭",
          32,
          "佟佗伲伽佶佴侑侉侃侏佾佻侪佼侬侔俦俨俪俅俚俣俜俑俟俸倩偌俳倬倏倮倭俾倜倌倥倨偾偃偕偈偎偬偻傥傧傩傺僖儆僭僬僦僮儇儋仝氽佘佥俎龠汆籴兮巽黉馘冁夔勹匍訇匐凫夙兕亠兖亳衮袤亵脔裒禀嬴蠃羸冫冱冽冼",
        ],
        [
          "da40",
          "贎",
          14,
          "贠赑赒赗赟赥赨赩赪赬赮赯赱赲赸",
          8,
          "趂趃趆趇趈趉趌",
          4,
          "趒趓趕",
          9,
          "趠趡",
        ],
        [
          "da80",
          "趢趤",
          12,
          "趲趶趷趹趻趽跀跁跂跅跇跈跉跊跍跐跒跓跔凇冖冢冥讠讦讧讪讴讵讷诂诃诋诏诎诒诓诔诖诘诙诜诟诠诤诨诩诮诰诳诶诹诼诿谀谂谄谇谌谏谑谒谔谕谖谙谛谘谝谟谠谡谥谧谪谫谮谯谲谳谵谶卩卺阝阢阡阱阪阽阼陂陉陔陟陧陬陲陴隈隍隗隰邗邛邝邙邬邡邴邳邶邺",
        ],
        [
          "db40",
          "跕跘跙跜跠跡跢跥跦跧跩跭跮跰跱跲跴跶跼跾",
          6,
          "踆踇踈踋踍踎踐踑踒踓踕",
          7,
          "踠踡踤",
          4,
          "踫踭踰踲踳踴踶踷踸踻踼踾",
        ],
        [
          "db80",
          "踿蹃蹅蹆蹌",
          4,
          "蹓",
          5,
          "蹚",
          11,
          "蹧蹨蹪蹫蹮蹱邸邰郏郅邾郐郄郇郓郦郢郜郗郛郫郯郾鄄鄢鄞鄣鄱鄯鄹酃酆刍奂劢劬劭劾哿勐勖勰叟燮矍廴凵凼鬯厶弁畚巯坌垩垡塾墼壅壑圩圬圪圳圹圮圯坜圻坂坩垅坫垆坼坻坨坭坶坳垭垤垌垲埏垧垴垓垠埕埘埚埙埒垸埴埯埸埤埝",
        ],
        [
          "dc40",
          "蹳蹵蹷",
          4,
          "蹽蹾躀躂躃躄躆躈",
          6,
          "躑躒躓躕",
          6,
          "躝躟",
          11,
          "躭躮躰躱躳",
          6,
          "躻",
          7,
        ],
        [
          "dc80",
          "軃",
          10,
          "軏",
          21,
          "堋堍埽埭堀堞堙塄堠塥塬墁墉墚墀馨鼙懿艹艽艿芏芊芨芄芎芑芗芙芫芸芾芰苈苊苣芘芷芮苋苌苁芩芴芡芪芟苄苎芤苡茉苷苤茏茇苜苴苒苘茌苻苓茑茚茆茔茕苠苕茜荑荛荜茈莒茼茴茱莛荞茯荏荇荃荟荀茗荠茭茺茳荦荥",
        ],
        ["dd40", "軥", 62],
        [
          "dd80",
          "輤",
          32,
          "荨茛荩荬荪荭荮莰荸莳莴莠莪莓莜莅荼莶莩荽莸荻莘莞莨莺莼菁萁菥菘堇萘萋菝菽菖萜萸萑萆菔菟萏萃菸菹菪菅菀萦菰菡葜葑葚葙葳蒇蒈葺蒉葸萼葆葩葶蒌蒎萱葭蓁蓍蓐蓦蒽蓓蓊蒿蒺蓠蒡蒹蒴蒗蓥蓣蔌甍蔸蓰蔹蔟蔺",
        ],
        [
          "de40",
          "轅",
          32,
          "轪辀辌辒辝辠辡辢辤辥辦辧辪辬辭辮辯農辳辴辵辷辸辺辻込辿迀迃迆",
        ],
        [
          "de80",
          "迉",
          4,
          "迏迒迖迗迚迠迡迣迧迬迯迱迲迴迵迶迺迻迼迾迿逇逈逌逎逓逕逘蕖蔻蓿蓼蕙蕈蕨蕤蕞蕺瞢蕃蕲蕻薤薨薇薏蕹薮薜薅薹薷薰藓藁藜藿蘧蘅蘩蘖蘼廾弈夼奁耷奕奚奘匏尢尥尬尴扌扪抟抻拊拚拗拮挢拶挹捋捃掭揶捱捺掎掴捭掬掊捩掮掼揲揸揠揿揄揞揎摒揆掾摅摁搋搛搠搌搦搡摞撄摭撖",
        ],
        [
          "df40",
          "這逜連逤逥逧",
          5,
          "逰",
          4,
          "逷逹逺逽逿遀遃遅遆遈",
          4,
          "過達違遖遙遚遜",
          5,
          "遤遦遧適遪遫遬遯",
          4,
          "遶",
          6,
          "遾邁",
        ],
        [
          "df80",
          "還邅邆邇邉邊邌",
          4,
          "邒邔邖邘邚邜邞邟邠邤邥邧邨邩邫邭邲邷邼邽邿郀摺撷撸撙撺擀擐擗擤擢攉攥攮弋忒甙弑卟叱叽叩叨叻吒吖吆呋呒呓呔呖呃吡呗呙吣吲咂咔呷呱呤咚咛咄呶呦咝哐咭哂咴哒咧咦哓哔呲咣哕咻咿哌哙哚哜咩咪咤哝哏哞唛哧唠哽唔哳唢唣唏唑唧唪啧喏喵啉啭啁啕唿啐唼",
        ],
        [
          "e040",
          "郂郃郆郈郉郋郌郍郒郔郕郖郘郙郚郞郟郠郣郤郥郩郪郬郮郰郱郲郳郵郶郷郹郺郻郼郿鄀鄁鄃鄅",
          19,
          "鄚鄛鄜",
        ],
        [
          "e080",
          "鄝鄟鄠鄡鄤",
          10,
          "鄰鄲",
          6,
          "鄺",
          8,
          "酄唷啖啵啶啷唳唰啜喋嗒喃喱喹喈喁喟啾嗖喑啻嗟喽喾喔喙嗪嗷嗉嘟嗑嗫嗬嗔嗦嗝嗄嗯嗥嗲嗳嗌嗍嗨嗵嗤辔嘞嘈嘌嘁嘤嘣嗾嘀嘧嘭噘嘹噗嘬噍噢噙噜噌噔嚆噤噱噫噻噼嚅嚓嚯囔囗囝囡囵囫囹囿圄圊圉圜帏帙帔帑帱帻帼",
        ],
        [
          "e140",
          "酅酇酈酑酓酔酕酖酘酙酛酜酟酠酦酧酨酫酭酳酺酻酼醀",
          4,
          "醆醈醊醎醏醓",
          6,
          "醜",
          5,
          "醤",
          5,
          "醫醬醰醱醲醳醶醷醸醹醻",
        ],
        [
          "e180",
          "醼",
          10,
          "釈釋釐釒",
          9,
          "針",
          8,
          "帷幄幔幛幞幡岌屺岍岐岖岈岘岙岑岚岜岵岢岽岬岫岱岣峁岷峄峒峤峋峥崂崃崧崦崮崤崞崆崛嵘崾崴崽嵬嵛嵯嵝嵫嵋嵊嵩嵴嶂嶙嶝豳嶷巅彳彷徂徇徉後徕徙徜徨徭徵徼衢彡犭犰犴犷犸狃狁狎狍狒狨狯狩狲狴狷猁狳猃狺",
        ],
        ["e240", "釦", 62],
        [
          "e280",
          "鈥",
          32,
          "狻猗猓猡猊猞猝猕猢猹猥猬猸猱獐獍獗獠獬獯獾舛夥飧夤夂饣饧",
          5,
          "饴饷饽馀馄馇馊馍馐馑馓馔馕庀庑庋庖庥庠庹庵庾庳赓廒廑廛廨廪膺忄忉忖忏怃忮怄忡忤忾怅怆忪忭忸怙怵怦怛怏怍怩怫怊怿怡恸恹恻恺恂",
        ],
        ["e340", "鉆", 45, "鉵", 16],
        [
          "e380",
          "銆",
          7,
          "銏",
          24,
          "恪恽悖悚悭悝悃悒悌悛惬悻悱惝惘惆惚悴愠愦愕愣惴愀愎愫慊慵憬憔憧憷懔懵忝隳闩闫闱闳闵闶闼闾阃阄阆阈阊阋阌阍阏阒阕阖阗阙阚丬爿戕氵汔汜汊沣沅沐沔沌汨汩汴汶沆沩泐泔沭泷泸泱泗沲泠泖泺泫泮沱泓泯泾",
        ],
        ["e440", "銨", 5, "銯", 24, "鋉", 31],
        [
          "e480",
          "鋩",
          32,
          "洹洧洌浃浈洇洄洙洎洫浍洮洵洚浏浒浔洳涑浯涞涠浞涓涔浜浠浼浣渚淇淅淞渎涿淠渑淦淝淙渖涫渌涮渫湮湎湫溲湟溆湓湔渲渥湄滟溱溘滠漭滢溥溧溽溻溷滗溴滏溏滂溟潢潆潇漤漕滹漯漶潋潴漪漉漩澉澍澌潸潲潼潺濑",
        ],
        ["e540", "錊", 51, "錿", 10],
        [
          "e580",
          "鍊",
          31,
          "鍫濉澧澹澶濂濡濮濞濠濯瀚瀣瀛瀹瀵灏灞宀宄宕宓宥宸甯骞搴寤寮褰寰蹇謇辶迓迕迥迮迤迩迦迳迨逅逄逋逦逑逍逖逡逵逶逭逯遄遑遒遐遨遘遢遛暹遴遽邂邈邃邋彐彗彖彘尻咫屐屙孱屣屦羼弪弩弭艴弼鬻屮妁妃妍妩妪妣",
        ],
        ["e640", "鍬", 34, "鎐", 27],
        [
          "e680",
          "鎬",
          29,
          "鏋鏌鏍妗姊妫妞妤姒妲妯姗妾娅娆姝娈姣姘姹娌娉娲娴娑娣娓婀婧婊婕娼婢婵胬媪媛婷婺媾嫫媲嫒嫔媸嫠嫣嫱嫖嫦嫘嫜嬉嬗嬖嬲嬷孀尕尜孚孥孳孑孓孢驵驷驸驺驿驽骀骁骅骈骊骐骒骓骖骘骛骜骝骟骠骢骣骥骧纟纡纣纥纨纩",
        ],
        ["e740", "鏎", 7, "鏗", 54],
        [
          "e780",
          "鐎",
          32,
          "纭纰纾绀绁绂绉绋绌绐绔绗绛绠绡绨绫绮绯绱绲缍绶绺绻绾缁缂缃缇缈缋缌缏缑缒缗缙缜缛缟缡",
          6,
          "缪缫缬缭缯",
          4,
          "缵幺畿巛甾邕玎玑玮玢玟珏珂珑玷玳珀珉珈珥珙顼琊珩珧珞玺珲琏琪瑛琦琥琨琰琮琬",
        ],
        ["e840", "鐯", 14, "鐿", 43, "鑬鑭鑮鑯"],
        [
          "e880",
          "鑰",
          20,
          "钑钖钘铇铏铓铔铚铦铻锜锠琛琚瑁瑜瑗瑕瑙瑷瑭瑾璜璎璀璁璇璋璞璨璩璐璧瓒璺韪韫韬杌杓杞杈杩枥枇杪杳枘枧杵枨枞枭枋杷杼柰栉柘栊柩枰栌柙枵柚枳柝栀柃枸柢栎柁柽栲栳桠桡桎桢桄桤梃栝桕桦桁桧桀栾桊桉栩梵梏桴桷梓桫棂楮棼椟椠棹",
        ],
        ["e940", "锧锳锽镃镈镋镕镚镠镮镴镵長", 7, "門", 42],
        [
          "e980",
          "閫",
          32,
          "椤棰椋椁楗棣椐楱椹楠楂楝榄楫榀榘楸椴槌榇榈槎榉楦楣楹榛榧榻榫榭槔榱槁槊槟榕槠榍槿樯槭樗樘橥槲橄樾檠橐橛樵檎橹樽樨橘橼檑檐檩檗檫猷獒殁殂殇殄殒殓殍殚殛殡殪轫轭轱轲轳轵轶轸轷轹轺轼轾辁辂辄辇辋",
        ],
        [
          "ea40",
          "闌",
          27,
          "闬闿阇阓阘阛阞阠阣",
          6,
          "阫阬阭阯阰阷阸阹阺阾陁陃陊陎陏陑陒陓陖陗",
        ],
        [
          "ea80",
          "陘陙陚陜陝陞陠陣陥陦陫陭",
          4,
          "陳陸",
          12,
          "隇隉隊辍辎辏辘辚軎戋戗戛戟戢戡戥戤戬臧瓯瓴瓿甏甑甓攴旮旯旰昊昙杲昃昕昀炅曷昝昴昱昶昵耆晟晔晁晏晖晡晗晷暄暌暧暝暾曛曜曦曩贲贳贶贻贽赀赅赆赈赉赇赍赕赙觇觊觋觌觎觏觐觑牮犟牝牦牯牾牿犄犋犍犏犒挈挲掰",
        ],
        [
          "eb40",
          "隌階隑隒隓隕隖隚際隝",
          9,
          "隨",
          7,
          "隱隲隴隵隷隸隺隻隿雂雃雈雊雋雐雑雓雔雖",
          9,
          "雡",
          6,
          "雫",
        ],
        [
          "eb80",
          "雬雭雮雰雱雲雴雵雸雺電雼雽雿霂霃霅霊霋霌霐霑霒霔霕霗",
          4,
          "霝霟霠搿擘耄毪毳毽毵毹氅氇氆氍氕氘氙氚氡氩氤氪氲攵敕敫牍牒牖爰虢刖肟肜肓肼朊肽肱肫肭肴肷胧胨胩胪胛胂胄胙胍胗朐胝胫胱胴胭脍脎胲胼朕脒豚脶脞脬脘脲腈腌腓腴腙腚腱腠腩腼腽腭腧塍媵膈膂膑滕膣膪臌朦臊膻",
        ],
        [
          "ec40",
          "霡",
          8,
          "霫霬霮霯霱霳",
          4,
          "霺霻霼霽霿",
          18,
          "靔靕靗靘靚靜靝靟靣靤靦靧靨靪",
          7,
        ],
        [
          "ec80",
          "靲靵靷",
          4,
          "靽",
          7,
          "鞆",
          4,
          "鞌鞎鞏鞐鞓鞕鞖鞗鞙",
          4,
          "臁膦欤欷欹歃歆歙飑飒飓飕飙飚殳彀毂觳斐齑斓於旆旄旃旌旎旒旖炀炜炖炝炻烀炷炫炱烨烊焐焓焖焯焱煳煜煨煅煲煊煸煺熘熳熵熨熠燠燔燧燹爝爨灬焘煦熹戾戽扃扈扉礻祀祆祉祛祜祓祚祢祗祠祯祧祺禅禊禚禧禳忑忐",
        ],
        ["ed40", "鞞鞟鞡鞢鞤", 6, "鞬鞮鞰鞱鞳鞵", 46],
        [
          "ed80",
          "韤韥韨韮",
          4,
          "韴韷",
          23,
          "怼恝恚恧恁恙恣悫愆愍慝憩憝懋懑戆肀聿沓泶淼矶矸砀砉砗砘砑斫砭砜砝砹砺砻砟砼砥砬砣砩硎硭硖硗砦硐硇硌硪碛碓碚碇碜碡碣碲碹碥磔磙磉磬磲礅磴礓礤礞礴龛黹黻黼盱眄眍盹眇眈眚眢眙眭眦眵眸睐睑睇睃睚睨",
        ],
        ["ee40", "頏", 62],
        [
          "ee80",
          "顎",
          32,
          "睢睥睿瞍睽瞀瞌瞑瞟瞠瞰瞵瞽町畀畎畋畈畛畲畹疃罘罡罟詈罨罴罱罹羁罾盍盥蠲钅钆钇钋钊钌钍钏钐钔钗钕钚钛钜钣钤钫钪钭钬钯钰钲钴钶",
          4,
          "钼钽钿铄铈",
          6,
          "铐铑铒铕铖铗铙铘铛铞铟铠铢铤铥铧铨铪",
        ],
        ["ef40", "顯", 5, "颋颎颒颕颙颣風", 37, "飏飐飔飖飗飛飜飝飠", 4],
        [
          "ef80",
          "飥飦飩",
          30,
          "铩铫铮铯铳铴铵铷铹铼铽铿锃锂锆锇锉锊锍锎锏锒",
          4,
          "锘锛锝锞锟锢锪锫锩锬锱锲锴锶锷锸锼锾锿镂锵镄镅镆镉镌镎镏镒镓镔镖镗镘镙镛镞镟镝镡镢镤",
          8,
          "镯镱镲镳锺矧矬雉秕秭秣秫稆嵇稃稂稞稔",
        ],
        ["f040", "餈", 4, "餎餏餑", 28, "餯", 26],
        [
          "f080",
          "饊",
          9,
          "饖",
          12,
          "饤饦饳饸饹饻饾馂馃馉稹稷穑黏馥穰皈皎皓皙皤瓞瓠甬鸠鸢鸨",
          4,
          "鸲鸱鸶鸸鸷鸹鸺鸾鹁鹂鹄鹆鹇鹈鹉鹋鹌鹎鹑鹕鹗鹚鹛鹜鹞鹣鹦",
          6,
          "鹱鹭鹳疒疔疖疠疝疬疣疳疴疸痄疱疰痃痂痖痍痣痨痦痤痫痧瘃痱痼痿瘐瘀瘅瘌瘗瘊瘥瘘瘕瘙",
        ],
        ["f140", "馌馎馚", 10, "馦馧馩", 47],
        [
          "f180",
          "駙",
          32,
          "瘛瘼瘢瘠癀瘭瘰瘿瘵癃瘾瘳癍癞癔癜癖癫癯翊竦穸穹窀窆窈窕窦窠窬窨窭窳衤衩衲衽衿袂袢裆袷袼裉裢裎裣裥裱褚裼裨裾裰褡褙褓褛褊褴褫褶襁襦襻疋胥皲皴矜耒耔耖耜耠耢耥耦耧耩耨耱耋耵聃聆聍聒聩聱覃顸颀颃",
        ],
        ["f240", "駺", 62],
        [
          "f280",
          "騹",
          32,
          "颉颌颍颏颔颚颛颞颟颡颢颥颦虍虔虬虮虿虺虼虻蚨蚍蚋蚬蚝蚧蚣蚪蚓蚩蚶蛄蚵蛎蚰蚺蚱蚯蛉蛏蚴蛩蛱蛲蛭蛳蛐蜓蛞蛴蛟蛘蛑蜃蜇蛸蜈蜊蜍蜉蜣蜻蜞蜥蜮蜚蜾蝈蜴蜱蜩蜷蜿螂蜢蝽蝾蝻蝠蝰蝌蝮螋蝓蝣蝼蝤蝙蝥螓螯螨蟒",
        ],
        [
          "f340",
          "驚",
          17,
          "驲骃骉骍骎骔骕骙骦骩",
          6,
          "骲骳骴骵骹骻骽骾骿髃髄髆",
          4,
          "髍髎髏髐髒體髕髖髗髙髚髛髜",
        ],
        [
          "f380",
          "髝髞髠髢髣髤髥髧髨髩髪髬髮髰",
          8,
          "髺髼",
          6,
          "鬄鬅鬆蟆螈螅螭螗螃螫蟥螬螵螳蟋蟓螽蟑蟀蟊蟛蟪蟠蟮蠖蠓蟾蠊蠛蠡蠹蠼缶罂罄罅舐竺竽笈笃笄笕笊笫笏筇笸笪笙笮笱笠笥笤笳笾笞筘筚筅筵筌筝筠筮筻筢筲筱箐箦箧箸箬箝箨箅箪箜箢箫箴篑篁篌篝篚篥篦篪簌篾篼簏簖簋",
        ],
        [
          "f440",
          "鬇鬉",
          5,
          "鬐鬑鬒鬔",
          10,
          "鬠鬡鬢鬤",
          10,
          "鬰鬱鬳",
          7,
          "鬽鬾鬿魀魆魊魋魌魎魐魒魓魕",
          5,
        ],
        [
          "f480",
          "魛",
          32,
          "簟簪簦簸籁籀臾舁舂舄臬衄舡舢舣舭舯舨舫舸舻舳舴舾艄艉艋艏艚艟艨衾袅袈裘裟襞羝羟羧羯羰羲籼敉粑粝粜粞粢粲粼粽糁糇糌糍糈糅糗糨艮暨羿翎翕翥翡翦翩翮翳糸絷綦綮繇纛麸麴赳趄趔趑趱赧赭豇豉酊酐酎酏酤",
        ],
        ["f540", "魼", 62],
        [
          "f580",
          "鮻",
          32,
          "酢酡酰酩酯酽酾酲酴酹醌醅醐醍醑醢醣醪醭醮醯醵醴醺豕鹾趸跫踅蹙蹩趵趿趼趺跄跖跗跚跞跎跏跛跆跬跷跸跣跹跻跤踉跽踔踝踟踬踮踣踯踺蹀踹踵踽踱蹉蹁蹂蹑蹒蹊蹰蹶蹼蹯蹴躅躏躔躐躜躞豸貂貊貅貘貔斛觖觞觚觜",
        ],
        ["f640", "鯜", 62],
        [
          "f680",
          "鰛",
          32,
          "觥觫觯訾謦靓雩雳雯霆霁霈霏霎霪霭霰霾龀龃龅",
          5,
          "龌黾鼋鼍隹隼隽雎雒瞿雠銎銮鋈錾鍪鏊鎏鐾鑫鱿鲂鲅鲆鲇鲈稣鲋鲎鲐鲑鲒鲔鲕鲚鲛鲞",
          5,
          "鲥",
          4,
          "鲫鲭鲮鲰",
          7,
          "鲺鲻鲼鲽鳄鳅鳆鳇鳊鳋",
        ],
        ["f740", "鰼", 62],
        [
          "f780",
          "鱻鱽鱾鲀鲃鲄鲉鲊鲌鲏鲓鲖鲗鲘鲙鲝鲪鲬鲯鲹鲾",
          4,
          "鳈鳉鳑鳒鳚鳛鳠鳡鳌",
          4,
          "鳓鳔鳕鳗鳘鳙鳜鳝鳟鳢靼鞅鞑鞒鞔鞯鞫鞣鞲鞴骱骰骷鹘骶骺骼髁髀髅髂髋髌髑魅魃魇魉魈魍魑飨餍餮饕饔髟髡髦髯髫髻髭髹鬈鬏鬓鬟鬣麽麾縻麂麇麈麋麒鏖麝麟黛黜黝黠黟黢黩黧黥黪黯鼢鼬鼯鼹鼷鼽鼾齄",
        ],
        ["f840", "鳣", 62],
        ["f880", "鴢", 32],
        ["f940", "鵃", 62],
        ["f980", "鶂", 32],
        ["fa40", "鶣", 62],
        ["fa80", "鷢", 32],
        [
          "fb40",
          "鸃",
          27,
          "鸤鸧鸮鸰鸴鸻鸼鹀鹍鹐鹒鹓鹔鹖鹙鹝鹟鹠鹡鹢鹥鹮鹯鹲鹴",
          9,
          "麀",
        ],
        ["fb80", "麁麃麄麅麆麉麊麌", 5, "麔", 8, "麞麠", 5, "麧麨麩麪"],
        [
          "fc40",
          "麫",
          8,
          "麵麶麷麹麺麼麿",
          4,
          "黅黆黇黈黊黋黌黐黒黓黕黖黗黙黚點黡黣黤黦黨黫黬黭黮黰",
          8,
          "黺黽黿",
          6,
        ],
        ["fc80", "鼆", 4, "鼌鼏鼑鼒鼔鼕鼖鼘鼚", 5, "鼡鼣", 8, "鼭鼮鼰鼱"],
        ["fd40", "鼲", 4, "鼸鼺鼼鼿", 4, "齅", 10, "齒", 38],
        ["fd80", "齹", 5, "龁龂龍", 11, "龜龝龞龡", 4, "郎凉秊裏隣"],
        ["fe40", "兀嗀﨎﨏﨑﨓﨔礼﨟蘒﨡﨣﨤﨧﨨﨩"],
      ],
    }),
    gn = Object.freeze({
      default: [
        ["a140", "", 62],
        ["a180", "", 32],
        ["a240", "", 62],
        ["a280", "", 32],
        ["a2ab", "", 5],
        ["a2e3", "€"],
        ["a2ef", ""],
        ["a2fd", ""],
        ["a340", "", 62],
        ["a380", "", 31, "　"],
        ["a440", "", 62],
        ["a480", "", 32],
        ["a4f4", "", 10],
        ["a540", "", 62],
        ["a580", "", 32],
        ["a5f7", "", 7],
        ["a640", "", 62],
        ["a680", "", 32],
        ["a6b9", "", 7],
        ["a6d9", "", 6],
        ["a6ec", ""],
        ["a6f3", ""],
        ["a6f6", "", 8],
        ["a740", "", 62],
        ["a780", "", 32],
        ["a7c2", "", 14],
        ["a7f2", "", 12],
        ["a896", "", 10],
        ["a8bc", ""],
        ["a8bf", "ǹ"],
        ["a8c1", ""],
        ["a8ea", "", 20],
        ["a958", ""],
        ["a95b", ""],
        ["a95d", ""],
        ["a989", "〾⿰", 11],
        ["a997", "", 12],
        ["a9f0", "", 14],
        ["aaa1", "", 93],
        ["aba1", "", 93],
        ["aca1", "", 93],
        ["ada1", "", 93],
        ["aea1", "", 93],
        ["afa1", "", 93],
        ["d7fa", "", 4],
        ["f8a1", "", 93],
        ["f9a1", "", 93],
        ["faa1", "", 93],
        ["fba1", "", 93],
        ["fca1", "", 93],
        ["fda1", "", 93],
        [
          "fe50",
          "⺁⺄㑳㑇⺈⺋㖞㘚㘎⺌⺗㥮㤘㧏㧟㩳㧐㭎㱮㳠⺧⺪䁖䅟⺮䌷⺳⺶⺷䎱䎬⺻䏝䓖䙡䙌",
        ],
        [
          "fe80",
          "䜣䜩䝼䞍⻊䥇䥺䥽䦂䦃䦅䦆䦟䦛䦷䦶䲣䲟䲠䲡䱷䲢䴓",
          6,
          "䶮",
          93,
        ],
      ],
    }),
    vn = [
      128, 165, 169, 178, 184, 216, 226, 235, 238, 244, 248, 251, 253, 258, 276,
      284, 300, 325, 329, 334, 364, 463, 465, 467, 469, 471, 473, 475, 477, 506,
      594, 610, 712, 716, 730, 930, 938, 962, 970, 1026, 1104, 1106, 8209, 8215,
      8218, 8222, 8231, 8241, 8244, 8246, 8252, 8365, 8452, 8454, 8458, 8471,
      8482, 8556, 8570, 8596, 8602, 8713, 8720, 8722, 8726, 8731, 8737, 8740,
      8742, 8748, 8751, 8760, 8766, 8777, 8781, 8787, 8802, 8808, 8816, 8854,
      8858, 8870, 8896, 8979, 9322, 9372, 9548, 9588, 9616, 9622, 9634, 9652,
      9662, 9672, 9676, 9680, 9702, 9735, 9738, 9793, 9795, 11906, 11909, 11913,
      11917, 11928, 11944, 11947, 11951, 11956, 11960, 11964, 11979, 12284,
      12292, 12312, 12319, 12330, 12351, 12436, 12447, 12535, 12543, 12586,
      12842, 12850, 12964, 13200, 13215, 13218, 13253, 13263, 13267, 13270,
      13384, 13428, 13727, 13839, 13851, 14617, 14703, 14801, 14816, 14964,
      15183, 15471, 15585, 16471, 16736, 17208, 17325, 17330, 17374, 17623,
      17997, 18018, 18212, 18218, 18301, 18318, 18760, 18811, 18814, 18820,
      18823, 18844, 18848, 18872, 19576, 19620, 19738, 19887, 40870, 59244,
      59336, 59367, 59413, 59417, 59423, 59431, 59437, 59443, 59452, 59460,
      59478, 59493, 63789, 63866, 63894, 63976, 63986, 64016, 64018, 64021,
      64025, 64034, 64037, 64042, 65074, 65093, 65107, 65112, 65127, 65132,
      65375, 65510, 65536,
    ],
    yn = [
      0, 36, 38, 45, 50, 81, 89, 95, 96, 100, 103, 104, 105, 109, 126, 133, 148,
      172, 175, 179, 208, 306, 307, 308, 309, 310, 311, 312, 313, 341, 428, 443,
      544, 545, 558, 741, 742, 749, 750, 805, 819, 820, 7922, 7924, 7925, 7927,
      7934, 7943, 7944, 7945, 7950, 8062, 8148, 8149, 8152, 8164, 8174, 8236,
      8240, 8262, 8264, 8374, 8380, 8381, 8384, 8388, 8390, 8392, 8393, 8394,
      8396, 8401, 8406, 8416, 8419, 8424, 8437, 8439, 8445, 8482, 8485, 8496,
      8521, 8603, 8936, 8946, 9046, 9050, 9063, 9066, 9076, 9092, 9100, 9108,
      9111, 9113, 9131, 9162, 9164, 9218, 9219, 11329, 11331, 11334, 11336,
      11346, 11361, 11363, 11366, 11370, 11372, 11375, 11389, 11682, 11686,
      11687, 11692, 11694, 11714, 11716, 11723, 11725, 11730, 11736, 11982,
      11989, 12102, 12336, 12348, 12350, 12384, 12393, 12395, 12397, 12510,
      12553, 12851, 12962, 12973, 13738, 13823, 13919, 13933, 14080, 14298,
      14585, 14698, 15583, 15847, 16318, 16434, 16438, 16481, 16729, 17102,
      17122, 17315, 17320, 17402, 17418, 17859, 17909, 17911, 17915, 17916,
      17936, 17939, 17961, 18664, 18703, 18814, 18962, 19043, 33469, 33470,
      33471, 33484, 33485, 33490, 33497, 33501, 33505, 33513, 33520, 33536,
      33550, 37845, 37921, 37948, 38029, 38038, 38064, 38065, 38066, 38069,
      38075, 38076, 38078, 39108, 39109, 39113, 39114, 39115, 39116, 39265,
      39394, 189e3,
    ],
    bn = { uChars: vn, gbChars: yn },
    mn = Object.freeze({ uChars: vn, gbChars: yn, default: bn }),
    wn = Object.freeze({
      default: [
        ["0", "\0", 127],
        ["8141", "갂갃갅갆갋", 4, "갘갞갟갡갢갣갥", 6, "갮갲갳갴"],
        ["8161", "갵갶갷갺갻갽갾갿걁", 9, "걌걎", 5, "걕"],
        [
          "8181",
          "걖걗걙걚걛걝",
          18,
          "걲걳걵걶걹걻",
          4,
          "겂겇겈겍겎겏겑겒겓겕",
          6,
          "겞겢",
          5,
          "겫겭겮겱",
          6,
          "겺겾겿곀곂곃곅곆곇곉곊곋곍",
          7,
          "곖곘",
          7,
          "곢곣곥곦곩곫곭곮곲곴곷",
          4,
          "곾곿괁괂괃괅괇",
          4,
          "괎괐괒괓",
        ],
        ["8241", "괔괕괖괗괙괚괛괝괞괟괡", 7, "괪괫괮", 5],
        ["8261", "괶괷괹괺괻괽", 6, "굆굈굊", 5, "굑굒굓굕굖굗"],
        [
          "8281",
          "굙",
          7,
          "굢굤",
          7,
          "굮굯굱굲굷굸굹굺굾궀궃",
          4,
          "궊궋궍궎궏궑",
          10,
          "궞",
          5,
          "궥",
          17,
          "궸",
          7,
          "귂귃귅귆귇귉",
          6,
          "귒귔",
          7,
          "귝귞귟귡귢귣귥",
          18,
        ],
        ["8341", "귺귻귽귾긂", 5, "긊긌긎", 5, "긕", 7],
        ["8361", "긝", 18, "긲긳긵긶긹긻긼"],
        [
          "8381",
          "긽긾긿깂깄깇깈깉깋깏깑깒깓깕깗",
          4,
          "깞깢깣깤깦깧깪깫깭깮깯깱",
          6,
          "깺깾",
          5,
          "꺆",
          5,
          "꺍",
          46,
          "꺿껁껂껃껅",
          6,
          "껎껒",
          5,
          "껚껛껝",
          8,
        ],
        ["8441", "껦껧껩껪껬껮", 5, "껵껶껷껹껺껻껽", 8],
        ["8461", "꼆꼉꼊꼋꼌꼎꼏꼑", 18],
        [
          "8481",
          "꼤",
          7,
          "꼮꼯꼱꼳꼵",
          6,
          "꼾꽀꽄꽅꽆꽇꽊",
          5,
          "꽑",
          10,
          "꽞",
          5,
          "꽦",
          18,
          "꽺",
          5,
          "꾁꾂꾃꾅꾆꾇꾉",
          6,
          "꾒꾓꾔꾖",
          5,
          "꾝",
          26,
          "꾺꾻꾽꾾",
        ],
        ["8541", "꾿꿁", 5, "꿊꿌꿏", 4, "꿕", 6, "꿝", 4],
        ["8561", "꿢", 5, "꿪", 5, "꿲꿳꿵꿶꿷꿹", 6, "뀂뀃"],
        [
          "8581",
          "뀅",
          6,
          "뀍뀎뀏뀑뀒뀓뀕",
          6,
          "뀞",
          9,
          "뀩",
          26,
          "끆끇끉끋끍끏끐끑끒끖끘끚끛끜끞",
          29,
          "끾끿낁낂낃낅",
          6,
          "낎낐낒",
          5,
          "낛낝낞낣낤",
        ],
        ["8641", "낥낦낧낪낰낲낶낷낹낺낻낽", 6, "냆냊", 5, "냒"],
        ["8661", "냓냕냖냗냙", 6, "냡냢냣냤냦", 10],
        [
          "8681",
          "냱",
          22,
          "넊넍넎넏넑넔넕넖넗넚넞",
          4,
          "넦넧넩넪넫넭",
          6,
          "넶넺",
          5,
          "녂녃녅녆녇녉",
          6,
          "녒녓녖녗녙녚녛녝녞녟녡",
          22,
          "녺녻녽녾녿놁놃",
          4,
          "놊놌놎놏놐놑놕놖놗놙놚놛놝",
        ],
        ["8741", "놞", 9, "놩", 15],
        ["8761", "놹", 18, "뇍뇎뇏뇑뇒뇓뇕"],
        [
          "8781",
          "뇖",
          5,
          "뇞뇠",
          7,
          "뇪뇫뇭뇮뇯뇱",
          7,
          "뇺뇼뇾",
          5,
          "눆눇눉눊눍",
          6,
          "눖눘눚",
          5,
          "눡",
          18,
          "눵",
          6,
          "눽",
          26,
          "뉙뉚뉛뉝뉞뉟뉡",
          6,
          "뉪",
          4,
        ],
        ["8841", "뉯", 4, "뉶", 5, "뉽", 6, "늆늇늈늊", 4],
        ["8861", "늏늒늓늕늖늗늛", 4, "늢늤늧늨늩늫늭늮늯늱늲늳늵늶늷"],
        [
          "8881",
          "늸",
          15,
          "닊닋닍닎닏닑닓",
          4,
          "닚닜닞닟닠닡닣닧닩닪닰닱닲닶닼닽닾댂댃댅댆댇댉",
          6,
          "댒댖",
          5,
          "댝",
          54,
          "덗덙덚덝덠덡덢덣",
        ],
        ["8941", "덦덨덪덬덭덯덲덳덵덶덷덹", 6, "뎂뎆", 5, "뎍"],
        ["8961", "뎎뎏뎑뎒뎓뎕", 10, "뎢", 5, "뎩뎪뎫뎭"],
        [
          "8981",
          "뎮",
          21,
          "돆돇돉돊돍돏돑돒돓돖돘돚돜돞돟돡돢돣돥돦돧돩",
          18,
          "돽",
          18,
          "됑",
          6,
          "됙됚됛됝됞됟됡",
          6,
          "됪됬",
          7,
          "됵",
          15,
        ],
        ["8a41", "둅", 10, "둒둓둕둖둗둙", 6, "둢둤둦"],
        ["8a61", "둧", 4, "둭", 18, "뒁뒂"],
        [
          "8a81",
          "뒃",
          4,
          "뒉",
          19,
          "뒞",
          5,
          "뒥뒦뒧뒩뒪뒫뒭",
          7,
          "뒶뒸뒺",
          5,
          "듁듂듃듅듆듇듉",
          6,
          "듑듒듓듔듖",
          5,
          "듞듟듡듢듥듧",
          4,
          "듮듰듲",
          5,
          "듹",
          26,
          "딖딗딙딚딝",
        ],
        ["8b41", "딞", 5, "딦딫", 4, "딲딳딵딶딷딹", 6, "땂땆"],
        ["8b61", "땇땈땉땊땎땏땑땒땓땕", 6, "땞땢", 8],
        [
          "8b81",
          "땫",
          52,
          "떢떣떥떦떧떩떬떭떮떯떲떶",
          4,
          "떾떿뗁뗂뗃뗅",
          6,
          "뗎뗒",
          5,
          "뗙",
          18,
          "뗭",
          18,
        ],
        ["8c41", "똀", 15, "똒똓똕똖똗똙", 4],
        ["8c61", "똞", 6, "똦", 5, "똭", 6, "똵", 5],
        [
          "8c81",
          "똻",
          12,
          "뙉",
          26,
          "뙥뙦뙧뙩",
          50,
          "뚞뚟뚡뚢뚣뚥",
          5,
          "뚭뚮뚯뚰뚲",
          16,
        ],
        ["8d41", "뛃", 16, "뛕", 8],
        ["8d61", "뛞", 17, "뛱뛲뛳뛵뛶뛷뛹뛺"],
        [
          "8d81",
          "뛻",
          4,
          "뜂뜃뜄뜆",
          33,
          "뜪뜫뜭뜮뜱",
          6,
          "뜺뜼",
          7,
          "띅띆띇띉띊띋띍",
          6,
          "띖",
          9,
          "띡띢띣띥띦띧띩",
          6,
          "띲띴띶",
          5,
          "띾띿랁랂랃랅",
          6,
          "랎랓랔랕랚랛랝랞",
        ],
        ["8e41", "랟랡", 6, "랪랮", 5, "랶랷랹", 8],
        ["8e61", "럂", 4, "럈럊", 19],
        [
          "8e81",
          "럞",
          13,
          "럮럯럱럲럳럵",
          6,
          "럾렂",
          4,
          "렊렋렍렎렏렑",
          6,
          "렚렜렞",
          5,
          "렦렧렩렪렫렭",
          6,
          "렶렺",
          5,
          "롁롂롃롅",
          11,
          "롒롔",
          7,
          "롞롟롡롢롣롥",
          6,
          "롮롰롲",
          5,
          "롹롺롻롽",
          7,
        ],
        ["8f41", "뢅", 7, "뢎", 17],
        ["8f61", "뢠", 7, "뢩", 6, "뢱뢲뢳뢵뢶뢷뢹", 4],
        [
          "8f81",
          "뢾뢿룂룄룆",
          5,
          "룍룎룏룑룒룓룕",
          7,
          "룞룠룢",
          5,
          "룪룫룭룮룯룱",
          6,
          "룺룼룾",
          5,
          "뤅",
          18,
          "뤙",
          6,
          "뤡",
          26,
          "뤾뤿륁륂륃륅",
          6,
          "륍륎륐륒",
          5,
        ],
        ["9041", "륚륛륝륞륟륡", 6, "륪륬륮", 5, "륶륷륹륺륻륽"],
        ["9061", "륾", 5, "릆릈릋릌릏", 15],
        [
          "9081",
          "릟",
          12,
          "릮릯릱릲릳릵",
          6,
          "릾맀맂",
          5,
          "맊맋맍맓",
          4,
          "맚맜맟맠맢맦맧맩맪맫맭",
          6,
          "맶맻",
          4,
          "먂",
          5,
          "먉",
          11,
          "먖",
          33,
          "먺먻먽먾먿멁멃멄멅멆",
        ],
        ["9141", "멇멊멌멏멐멑멒멖멗멙멚멛멝", 6, "멦멪", 5],
        ["9161", "멲멳멵멶멷멹", 9, "몆몈몉몊몋몍", 5],
        [
          "9181",
          "몓",
          20,
          "몪몭몮몯몱몳",
          4,
          "몺몼몾",
          5,
          "뫅뫆뫇뫉",
          14,
          "뫚",
          33,
          "뫽뫾뫿묁묂묃묅",
          7,
          "묎묐묒",
          5,
          "묙묚묛묝묞묟묡",
          6,
        ],
        ["9241", "묨묪묬", 7, "묷묹묺묿", 4, "뭆뭈뭊뭋뭌뭎뭑뭒"],
        ["9261", "뭓뭕뭖뭗뭙", 7, "뭢뭤", 7, "뭭", 4],
        [
          "9281",
          "뭲",
          21,
          "뮉뮊뮋뮍뮎뮏뮑",
          18,
          "뮥뮦뮧뮩뮪뮫뮭",
          6,
          "뮵뮶뮸",
          7,
          "믁믂믃믅믆믇믉",
          6,
          "믑믒믔",
          35,
          "믺믻믽믾밁",
        ],
        ["9341", "밃", 4, "밊밎밐밒밓밙밚밠밡밢밣밦밨밪밫밬밮밯밲밳밵"],
        ["9361", "밶밷밹", 6, "뱂뱆뱇뱈뱊뱋뱎뱏뱑", 8],
        [
          "9381",
          "뱚뱛뱜뱞",
          37,
          "벆벇벉벊벍벏",
          4,
          "벖벘벛",
          4,
          "벢벣벥벦벩",
          6,
          "벲벶",
          5,
          "벾벿볁볂볃볅",
          7,
          "볎볒볓볔볖볗볙볚볛볝",
          22,
          "볷볹볺볻볽",
        ],
        ["9441", "볾", 5, "봆봈봊", 5, "봑봒봓봕", 8],
        ["9461", "봞", 5, "봥", 6, "봭", 12],
        [
          "9481",
          "봺",
          5,
          "뵁",
          6,
          "뵊뵋뵍뵎뵏뵑",
          6,
          "뵚",
          9,
          "뵥뵦뵧뵩",
          22,
          "붂붃붅붆붋",
          4,
          "붒붔붖붗붘붛붝",
          6,
          "붥",
          10,
          "붱",
          6,
          "붹",
          24,
        ],
        ["9541", "뷒뷓뷖뷗뷙뷚뷛뷝", 11, "뷪", 5, "뷱"],
        ["9561", "뷲뷳뷵뷶뷷뷹", 6, "븁븂븄븆", 5, "븎븏븑븒븓"],
        [
          "9581",
          "븕",
          6,
          "븞븠",
          35,
          "빆빇빉빊빋빍빏",
          4,
          "빖빘빜빝빞빟빢빣빥빦빧빩빫",
          4,
          "빲빶",
          4,
          "빾빿뺁뺂뺃뺅",
          6,
          "뺎뺒",
          5,
          "뺚",
          13,
          "뺩",
          14,
        ],
        ["9641", "뺸", 23, "뻒뻓"],
        ["9661", "뻕뻖뻙", 6, "뻡뻢뻦", 5, "뻭", 8],
        [
          "9681",
          "뻶",
          10,
          "뼂",
          5,
          "뼊",
          13,
          "뼚뼞",
          33,
          "뽂뽃뽅뽆뽇뽉",
          6,
          "뽒뽓뽔뽖",
          44,
        ],
        ["9741", "뾃", 16, "뾕", 8],
        ["9761", "뾞", 17, "뾱", 7],
        [
          "9781",
          "뾹",
          11,
          "뿆",
          5,
          "뿎뿏뿑뿒뿓뿕",
          6,
          "뿝뿞뿠뿢",
          89,
          "쀽쀾쀿",
        ],
        ["9841", "쁀", 16, "쁒", 5, "쁙쁚쁛"],
        ["9861", "쁝쁞쁟쁡", 6, "쁪", 15],
        [
          "9881",
          "쁺",
          21,
          "삒삓삕삖삗삙",
          6,
          "삢삤삦",
          5,
          "삮삱삲삷",
          4,
          "삾샂샃샄샆샇샊샋샍샎샏샑",
          6,
          "샚샞",
          5,
          "샦샧샩샪샫샭",
          6,
          "샶샸샺",
          5,
          "섁섂섃섅섆섇섉",
          6,
          "섑섒섓섔섖",
          5,
          "섡섢섥섨섩섪섫섮",
        ],
        ["9941", "섲섳섴섵섷섺섻섽섾섿셁", 6, "셊셎", 5, "셖셗"],
        ["9961", "셙셚셛셝", 6, "셦셪", 5, "셱셲셳셵셶셷셹셺셻"],
        [
          "9981",
          "셼",
          8,
          "솆",
          5,
          "솏솑솒솓솕솗",
          4,
          "솞솠솢솣솤솦솧솪솫솭솮솯솱",
          11,
          "솾",
          5,
          "쇅쇆쇇쇉쇊쇋쇍",
          6,
          "쇕쇖쇙",
          6,
          "쇡쇢쇣쇥쇦쇧쇩",
          6,
          "쇲쇴",
          7,
          "쇾쇿숁숂숃숅",
          6,
          "숎숐숒",
          5,
          "숚숛숝숞숡숢숣",
        ],
        ["9a41", "숤숥숦숧숪숬숮숰숳숵", 16],
        ["9a61", "쉆쉇쉉", 6, "쉒쉓쉕쉖쉗쉙", 6, "쉡쉢쉣쉤쉦"],
        [
          "9a81",
          "쉧",
          4,
          "쉮쉯쉱쉲쉳쉵",
          6,
          "쉾슀슂",
          5,
          "슊",
          5,
          "슑",
          6,
          "슙슚슜슞",
          5,
          "슦슧슩슪슫슮",
          5,
          "슶슸슺",
          33,
          "싞싟싡싢싥",
          5,
          "싮싰싲싳싴싵싷싺싽싾싿쌁",
          6,
          "쌊쌋쌎쌏",
        ],
        ["9b41", "쌐쌑쌒쌖쌗쌙쌚쌛쌝", 6, "쌦쌧쌪", 8],
        ["9b61", "쌳", 17, "썆", 7],
        [
          "9b81",
          "썎",
          25,
          "썪썫썭썮썯썱썳",
          4,
          "썺썻썾",
          5,
          "쎅쎆쎇쎉쎊쎋쎍",
          50,
          "쏁",
          22,
          "쏚",
        ],
        ["9c41", "쏛쏝쏞쏡쏣", 4, "쏪쏫쏬쏮", 5, "쏶쏷쏹", 5],
        ["9c61", "쏿", 8, "쐉", 6, "쐑", 9],
        [
          "9c81",
          "쐛",
          8,
          "쐥",
          6,
          "쐭쐮쐯쐱쐲쐳쐵",
          6,
          "쐾",
          9,
          "쑉",
          26,
          "쑦쑧쑩쑪쑫쑭",
          6,
          "쑶쑷쑸쑺",
          5,
          "쒁",
          18,
          "쒕",
          6,
          "쒝",
          12,
        ],
        ["9d41", "쒪", 13, "쒹쒺쒻쒽", 8],
        ["9d61", "쓆", 25],
        [
          "9d81",
          "쓠",
          8,
          "쓪",
          5,
          "쓲쓳쓵쓶쓷쓹쓻쓼쓽쓾씂",
          9,
          "씍씎씏씑씒씓씕",
          6,
          "씝",
          10,
          "씪씫씭씮씯씱",
          6,
          "씺씼씾",
          5,
          "앆앇앋앏앐앑앒앖앚앛앜앟앢앣앥앦앧앩",
          6,
          "앲앶",
          5,
          "앾앿얁얂얃얅얆얈얉얊얋얎얐얒얓얔",
        ],
        ["9e41", "얖얙얚얛얝얞얟얡", 7, "얪", 9, "얶"],
        ["9e61", "얷얺얿", 4, "엋엍엏엒엓엕엖엗엙", 6, "엢엤엦엧"],
        [
          "9e81",
          "엨엩엪엫엯엱엲엳엵엸엹엺엻옂옃옄옉옊옋옍옎옏옑",
          6,
          "옚옝",
          6,
          "옦옧옩옪옫옯옱옲옶옸옺옼옽옾옿왂왃왅왆왇왉",
          6,
          "왒왖",
          5,
          "왞왟왡",
          10,
          "왭왮왰왲",
          5,
          "왺왻왽왾왿욁",
          6,
          "욊욌욎",
          5,
          "욖욗욙욚욛욝",
          6,
          "욦",
        ],
        ["9f41", "욨욪", 5, "욲욳욵욶욷욻", 4, "웂웄웆", 5, "웎"],
        ["9f61", "웏웑웒웓웕", 6, "웞웟웢", 5, "웪웫웭웮웯웱웲"],
        [
          "9f81",
          "웳",
          4,
          "웺웻웼웾",
          5,
          "윆윇윉윊윋윍",
          6,
          "윖윘윚",
          5,
          "윢윣윥윦윧윩",
          6,
          "윲윴윶윸윹윺윻윾윿읁읂읃읅",
          4,
          "읋읎읐읙읚읛읝읞읟읡",
          6,
          "읩읪읬",
          7,
          "읶읷읹읺읻읿잀잁잂잆잋잌잍잏잒잓잕잙잛",
          4,
          "잢잧",
          4,
          "잮잯잱잲잳잵잶잷",
        ],
        ["a041", "잸잹잺잻잾쟂", 5, "쟊쟋쟍쟏쟑", 6, "쟙쟚쟛쟜"],
        ["a061", "쟞", 5, "쟥쟦쟧쟩쟪쟫쟭", 13],
        [
          "a081",
          "쟻",
          4,
          "젂젃젅젆젇젉젋",
          4,
          "젒젔젗",
          4,
          "젞젟젡젢젣젥",
          6,
          "젮젰젲",
          5,
          "젹젺젻젽젾젿졁",
          6,
          "졊졋졎",
          5,
          "졕",
          26,
          "졲졳졵졶졷졹졻",
          4,
          "좂좄좈좉좊좎",
          5,
          "좕",
          7,
          "좞좠좢좣좤",
        ],
        ["a141", "좥좦좧좩", 18, "좾좿죀죁"],
        ["a161", "죂죃죅죆죇죉죊죋죍", 6, "죖죘죚", 5, "죢죣죥"],
        [
          "a181",
          "죦",
          14,
          "죶",
          5,
          "죾죿줁줂줃줇",
          4,
          "줎　、。·‥…¨〃­―∥＼∼‘’“”〔〕〈",
          9,
          "±×÷≠≤≥∞∴°′″℃Å￠￡￥♂♀∠⊥⌒∂∇≡≒§※☆★○●◎◇◆□■△▲▽▼→←↑↓↔〓≪≫√∽∝∵∫∬∈∋⊆⊇⊂⊃∪∩∧∨￢",
        ],
        ["a241", "줐줒", 5, "줙", 18],
        ["a261", "줭", 6, "줵", 18],
        [
          "a281",
          "쥈",
          7,
          "쥒쥓쥕쥖쥗쥙",
          6,
          "쥢쥤",
          7,
          "쥭쥮쥯⇒⇔∀∃´～ˇ˘˝˚˙¸˛¡¿ː∮∑∏¤℉‰◁◀▷▶♤♠♡♥♧♣⊙◈▣◐◑▒▤▥▨▧▦▩♨☏☎☜☞¶†‡↕↗↙↖↘♭♩♪♬㉿㈜№㏇™㏂㏘℡€®",
        ],
        ["a341", "쥱쥲쥳쥵", 6, "쥽", 10, "즊즋즍즎즏"],
        ["a361", "즑", 6, "즚즜즞", 16],
        [
          "a381",
          "즯",
          16,
          "짂짃짅짆짉짋",
          4,
          "짒짔짗짘짛！",
          58,
          "￦］",
          32,
          "￣",
        ],
        ["a441", "짞짟짡짣짥짦짨짩짪짫짮짲", 5, "짺짻짽짾짿쨁쨂쨃쨄"],
        ["a461", "쨅쨆쨇쨊쨎", 5, "쨕쨖쨗쨙", 12],
        ["a481", "쨦쨧쨨쨪", 28, "ㄱ", 93],
        ["a541", "쩇", 4, "쩎쩏쩑쩒쩓쩕", 6, "쩞쩢", 5, "쩩쩪"],
        ["a561", "쩫", 17, "쩾", 5, "쪅쪆"],
        ["a581", "쪇", 16, "쪙", 14, "ⅰ", 9],
        ["a5b0", "Ⅰ", 9],
        ["a5c1", "Α", 16, "Σ", 6],
        ["a5e1", "α", 16, "σ", 6],
        ["a641", "쪨", 19, "쪾쪿쫁쫂쫃쫅"],
        ["a661", "쫆", 5, "쫎쫐쫒쫔쫕쫖쫗쫚", 5, "쫡", 6],
        [
          "a681",
          "쫨쫩쫪쫫쫭",
          6,
          "쫵",
          18,
          "쬉쬊─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂┒┑┚┙┖┕┎┍┞┟┡┢┦┧┩┪┭┮┱┲┵┶┹┺┽┾╀╁╃",
          7,
        ],
        ["a741", "쬋", 4, "쬑쬒쬓쬕쬖쬗쬙", 6, "쬢", 7],
        ["a761", "쬪", 22, "쭂쭃쭄"],
        [
          "a781",
          "쭅쭆쭇쭊쭋쭍쭎쭏쭑",
          6,
          "쭚쭛쭜쭞",
          5,
          "쭥",
          7,
          "㎕㎖㎗ℓ㎘㏄㎣㎤㎥㎦㎙",
          9,
          "㏊㎍㎎㎏㏏㎈㎉㏈㎧㎨㎰",
          9,
          "㎀",
          4,
          "㎺",
          5,
          "㎐",
          4,
          "Ω㏀㏁㎊㎋㎌㏖㏅㎭㎮㎯㏛㎩㎪㎫㎬㏝㏐㏓㏃㏉㏜㏆",
        ],
        ["a841", "쭭", 10, "쭺", 14],
        ["a861", "쮉", 18, "쮝", 6],
        ["a881", "쮤", 19, "쮹", 11, "ÆÐªĦ"],
        ["a8a6", "Ĳ"],
        ["a8a8", "ĿŁØŒºÞŦŊ"],
        ["a8b1", "㉠", 27, "ⓐ", 25, "①", 14, "½⅓⅔¼¾⅛⅜⅝⅞"],
        ["a941", "쯅", 14, "쯕", 10],
        ["a961", "쯠쯡쯢쯣쯥쯦쯨쯪", 18],
        [
          "a981",
          "쯽",
          14,
          "찎찏찑찒찓찕",
          6,
          "찞찟찠찣찤æđðħıĳĸŀłøœßþŧŋŉ㈀",
          27,
          "⒜",
          25,
          "⑴",
          14,
          "¹²³⁴ⁿ₁₂₃₄",
        ],
        ["aa41", "찥찦찪찫찭찯찱", 6, "찺찿", 4, "챆챇챉챊챋챍챎"],
        ["aa61", "챏", 4, "챖챚", 5, "챡챢챣챥챧챩", 6, "챱챲"],
        ["aa81", "챳챴챶", 29, "ぁ", 82],
        ["ab41", "첔첕첖첗첚첛첝첞첟첡", 6, "첪첮", 5, "첶첷첹"],
        ["ab61", "첺첻첽", 6, "쳆쳈쳊", 5, "쳑쳒쳓쳕", 5],
        ["ab81", "쳛", 8, "쳥", 6, "쳭쳮쳯쳱", 12, "ァ", 85],
        ["ac41", "쳾쳿촀촂", 5, "촊촋촍촎촏촑", 6, "촚촜촞촟촠"],
        ["ac61", "촡촢촣촥촦촧촩촪촫촭", 11, "촺", 4],
        ["ac81", "촿", 28, "쵝쵞쵟А", 5, "ЁЖ", 25],
        ["acd1", "а", 5, "ёж", 25],
        ["ad41", "쵡쵢쵣쵥", 6, "쵮쵰쵲", 5, "쵹", 7],
        ["ad61", "춁", 6, "춉", 10, "춖춗춙춚춛춝춞춟"],
        ["ad81", "춠춡춢춣춦춨춪", 5, "춱", 18, "췅"],
        ["ae41", "췆", 5, "췍췎췏췑", 16],
        ["ae61", "췢", 5, "췩췪췫췭췮췯췱", 6, "췺췼췾", 4],
        ["ae81", "츃츅츆츇츉츊츋츍", 6, "츕츖츗츘츚", 5, "츢츣츥츦츧츩츪츫"],
        ["af41", "츬츭츮츯츲츴츶", 19],
        ["af61", "칊", 13, "칚칛칝칞칢", 5, "칪칬"],
        ["af81", "칮", 5, "칶칷칹칺칻칽", 6, "캆캈캊", 5, "캒캓캕캖캗캙"],
        ["b041", "캚", 5, "캢캦", 5, "캮", 12],
        ["b061", "캻", 5, "컂", 19],
        [
          "b081",
          "컖",
          13,
          "컦컧컩컪컭",
          6,
          "컶컺",
          5,
          "가각간갇갈갉갊감",
          7,
          "같",
          4,
          "갠갤갬갭갯갰갱갸갹갼걀걋걍걔걘걜거걱건걷걸걺검겁것겄겅겆겉겊겋게겐겔겜겝겟겠겡겨격겪견겯결겸겹겻겼경곁계곈곌곕곗고곡곤곧골곪곬곯곰곱곳공곶과곽관괄괆",
        ],
        ["b141", "켂켃켅켆켇켉", 6, "켒켔켖", 5, "켝켞켟켡켢켣"],
        ["b161", "켥", 6, "켮켲", 5, "켹", 11],
        [
          "b181",
          "콅",
          14,
          "콖콗콙콚콛콝",
          6,
          "콦콨콪콫콬괌괍괏광괘괜괠괩괬괭괴괵괸괼굄굅굇굉교굔굘굡굣구국군굳굴굵굶굻굼굽굿궁궂궈궉권궐궜궝궤궷귀귁귄귈귐귑귓규균귤그극근귿글긁금급긋긍긔기긱긴긷길긺김깁깃깅깆깊까깍깎깐깔깖깜깝깟깠깡깥깨깩깬깰깸",
        ],
        ["b241", "콭콮콯콲콳콵콶콷콹", 6, "쾁쾂쾃쾄쾆", 5, "쾍"],
        ["b261", "쾎", 18, "쾢", 5, "쾩"],
        [
          "b281",
          "쾪",
          5,
          "쾱",
          18,
          "쿅",
          6,
          "깹깻깼깽꺄꺅꺌꺼꺽꺾껀껄껌껍껏껐껑께껙껜껨껫껭껴껸껼꼇꼈꼍꼐꼬꼭꼰꼲꼴꼼꼽꼿꽁꽂꽃꽈꽉꽐꽜꽝꽤꽥꽹꾀꾄꾈꾐꾑꾕꾜꾸꾹꾼꿀꿇꿈꿉꿋꿍꿎꿔꿜꿨꿩꿰꿱꿴꿸뀀뀁뀄뀌뀐뀔뀜뀝뀨끄끅끈끊끌끎끓끔끕끗끙",
        ],
        ["b341", "쿌", 19, "쿢쿣쿥쿦쿧쿩"],
        ["b361", "쿪", 5, "쿲쿴쿶", 5, "쿽쿾쿿퀁퀂퀃퀅", 5],
        [
          "b381",
          "퀋",
          5,
          "퀒",
          5,
          "퀙",
          19,
          "끝끼끽낀낄낌낍낏낑나낙낚난낟날낡낢남납낫",
          4,
          "낱낳내낵낸낼냄냅냇냈냉냐냑냔냘냠냥너넉넋넌널넒넓넘넙넛넜넝넣네넥넨넬넴넵넷넸넹녀녁년녈념녑녔녕녘녜녠노녹논놀놂놈놉놋농높놓놔놘놜놨뇌뇐뇔뇜뇝",
        ],
        ["b441", "퀮", 5, "퀶퀷퀹퀺퀻퀽", 6, "큆큈큊", 5],
        ["b461", "큑큒큓큕큖큗큙", 6, "큡", 10, "큮큯"],
        [
          "b481",
          "큱큲큳큵",
          6,
          "큾큿킀킂",
          18,
          "뇟뇨뇩뇬뇰뇹뇻뇽누눅눈눋눌눔눕눗눙눠눴눼뉘뉜뉠뉨뉩뉴뉵뉼늄늅늉느늑는늘늙늚늠늡늣능늦늪늬늰늴니닉닌닐닒님닙닛닝닢다닥닦단닫",
          4,
          "닳담답닷",
          4,
          "닿대댁댄댈댐댑댓댔댕댜더덕덖던덛덜덞덟덤덥",
        ],
        ["b541", "킕", 14, "킦킧킩킪킫킭", 5],
        ["b561", "킳킶킸킺", 5, "탂탃탅탆탇탊", 5, "탒탖", 4],
        [
          "b581",
          "탛탞탟탡탢탣탥",
          6,
          "탮탲",
          5,
          "탹",
          11,
          "덧덩덫덮데덱덴델뎀뎁뎃뎄뎅뎌뎐뎔뎠뎡뎨뎬도독돈돋돌돎돐돔돕돗동돛돝돠돤돨돼됐되된될됨됩됫됴두둑둔둘둠둡둣둥둬뒀뒈뒝뒤뒨뒬뒵뒷뒹듀듄듈듐듕드득든듣들듦듬듭듯등듸디딕딘딛딜딤딥딧딨딩딪따딱딴딸",
        ],
        ["b641", "턅", 7, "턎", 17],
        ["b661", "턠", 15, "턲턳턵턶턷턹턻턼턽턾"],
        [
          "b681",
          "턿텂텆",
          5,
          "텎텏텑텒텓텕",
          6,
          "텞텠텢",
          5,
          "텩텪텫텭땀땁땃땄땅땋때땍땐땔땜땝땟땠땡떠떡떤떨떪떫떰떱떳떴떵떻떼떽뗀뗄뗌뗍뗏뗐뗑뗘뗬또똑똔똘똥똬똴뙈뙤뙨뚜뚝뚠뚤뚫뚬뚱뛔뛰뛴뛸뜀뜁뜅뜨뜩뜬뜯뜰뜸뜹뜻띄띈띌띔띕띠띤띨띰띱띳띵라락란랄람랍랏랐랑랒랖랗",
        ],
        ["b741", "텮", 13, "텽", 6, "톅톆톇톉톊"],
        ["b761", "톋", 20, "톢톣톥톦톧"],
        [
          "b781",
          "톩",
          6,
          "톲톴톶톷톸톹톻톽톾톿퇁",
          14,
          "래랙랜랠램랩랫랬랭랴략랸럇량러럭런럴럼럽럿렀렁렇레렉렌렐렘렙렛렝려력련렬렴렵렷렸령례롄롑롓로록론롤롬롭롯롱롸롼뢍뢨뢰뢴뢸룀룁룃룅료룐룔룝룟룡루룩룬룰룸룹룻룽뤄뤘뤠뤼뤽륀륄륌륏륑류륙륜률륨륩",
        ],
        ["b841", "퇐", 7, "퇙", 17],
        ["b861", "퇫", 8, "퇵퇶퇷퇹", 13],
        [
          "b881",
          "툈툊",
          5,
          "툑",
          24,
          "륫륭르륵른를름릅릇릉릊릍릎리릭린릴림립릿링마막만많",
          4,
          "맘맙맛망맞맡맣매맥맨맬맴맵맷맸맹맺먀먁먈먕머먹먼멀멂멈멉멋멍멎멓메멕멘멜멤멥멧멨멩며멱면멸몃몄명몇몌모목몫몬몰몲몸몹못몽뫄뫈뫘뫙뫼",
        ],
        ["b941", "툪툫툮툯툱툲툳툵", 6, "툾퉀퉂", 5, "퉉퉊퉋퉌"],
        ["b961", "퉍", 14, "퉝", 6, "퉥퉦퉧퉨"],
        [
          "b981",
          "퉩",
          22,
          "튂튃튅튆튇튉튊튋튌묀묄묍묏묑묘묜묠묩묫무묵묶문묻물묽묾뭄뭅뭇뭉뭍뭏뭐뭔뭘뭡뭣뭬뮈뮌뮐뮤뮨뮬뮴뮷므믄믈믐믓미믹민믿밀밂밈밉밋밌밍및밑바",
          4,
          "받",
          4,
          "밤밥밧방밭배백밴밸뱀뱁뱃뱄뱅뱉뱌뱍뱐뱝버벅번벋벌벎범법벗",
        ],
        ["ba41", "튍튎튏튒튓튔튖", 5, "튝튞튟튡튢튣튥", 6, "튭"],
        ["ba61", "튮튯튰튲", 5, "튺튻튽튾틁틃", 4, "틊틌", 5],
        [
          "ba81",
          "틒틓틕틖틗틙틚틛틝",
          6,
          "틦",
          9,
          "틲틳틵틶틷틹틺벙벚베벡벤벧벨벰벱벳벴벵벼벽변별볍볏볐병볕볘볜보복볶본볼봄봅봇봉봐봔봤봬뵀뵈뵉뵌뵐뵘뵙뵤뵨부북분붇불붉붊붐붑붓붕붙붚붜붤붰붸뷔뷕뷘뷜뷩뷰뷴뷸븀븃븅브븍븐블븜븝븟비빅빈빌빎빔빕빗빙빚빛빠빡빤",
        ],
        ["bb41", "틻", 4, "팂팄팆", 5, "팏팑팒팓팕팗", 4, "팞팢팣"],
        ["bb61", "팤팦팧팪팫팭팮팯팱", 6, "팺팾", 5, "퍆퍇퍈퍉"],
        [
          "bb81",
          "퍊",
          31,
          "빨빪빰빱빳빴빵빻빼빽뺀뺄뺌뺍뺏뺐뺑뺘뺙뺨뻐뻑뻔뻗뻘뻠뻣뻤뻥뻬뼁뼈뼉뼘뼙뼛뼜뼝뽀뽁뽄뽈뽐뽑뽕뾔뾰뿅뿌뿍뿐뿔뿜뿟뿡쀼쁑쁘쁜쁠쁨쁩삐삑삔삘삠삡삣삥사삭삯산삳살삵삶삼삽삿샀상샅새색샌샐샘샙샛샜생샤",
        ],
        ["bc41", "퍪", 17, "퍾퍿펁펂펃펅펆펇"],
        ["bc61", "펈펉펊펋펎펒", 5, "펚펛펝펞펟펡", 6, "펪펬펮"],
        [
          "bc81",
          "펯",
          4,
          "펵펶펷펹펺펻펽",
          6,
          "폆폇폊",
          5,
          "폑",
          5,
          "샥샨샬샴샵샷샹섀섄섈섐섕서",
          4,
          "섣설섦섧섬섭섯섰성섶세섹센셀셈셉셋셌셍셔셕션셜셤셥셧셨셩셰셴셸솅소속솎손솔솖솜솝솟송솥솨솩솬솰솽쇄쇈쇌쇔쇗쇘쇠쇤쇨쇰쇱쇳쇼쇽숀숄숌숍숏숑수숙순숟술숨숩숫숭",
        ],
        ["bd41", "폗폙", 7, "폢폤", 7, "폮폯폱폲폳폵폶폷"],
        ["bd61", "폸폹폺폻폾퐀퐂", 5, "퐉", 13],
        [
          "bd81",
          "퐗",
          5,
          "퐞",
          25,
          "숯숱숲숴쉈쉐쉑쉔쉘쉠쉥쉬쉭쉰쉴쉼쉽쉿슁슈슉슐슘슛슝스슥슨슬슭슴습슷승시식신싣실싫심십싯싱싶싸싹싻싼쌀쌈쌉쌌쌍쌓쌔쌕쌘쌜쌤쌥쌨쌩썅써썩썬썰썲썸썹썼썽쎄쎈쎌쏀쏘쏙쏜쏟쏠쏢쏨쏩쏭쏴쏵쏸쐈쐐쐤쐬쐰",
        ],
        ["be41", "퐸", 7, "푁푂푃푅", 14],
        ["be61", "푔", 7, "푝푞푟푡푢푣푥", 7, "푮푰푱푲"],
        [
          "be81",
          "푳",
          4,
          "푺푻푽푾풁풃",
          4,
          "풊풌풎",
          5,
          "풕",
          8,
          "쐴쐼쐽쑈쑤쑥쑨쑬쑴쑵쑹쒀쒔쒜쒸쒼쓩쓰쓱쓴쓸쓺쓿씀씁씌씐씔씜씨씩씬씰씸씹씻씽아악안앉않알앍앎앓암압앗았앙앝앞애액앤앨앰앱앳앴앵야약얀얄얇얌얍얏양얕얗얘얜얠얩어억언얹얻얼얽얾엄",
          6,
          "엌엎",
        ],
        ["bf41", "풞", 10, "풪", 14],
        ["bf61", "풹", 18, "퓍퓎퓏퓑퓒퓓퓕"],
        [
          "bf81",
          "퓖",
          5,
          "퓝퓞퓠",
          7,
          "퓩퓪퓫퓭퓮퓯퓱",
          6,
          "퓹퓺퓼에엑엔엘엠엡엣엥여역엮연열엶엷염",
          5,
          "옅옆옇예옌옐옘옙옛옜오옥온올옭옮옰옳옴옵옷옹옻와왁완왈왐왑왓왔왕왜왝왠왬왯왱외왹왼욀욈욉욋욍요욕욘욜욤욥욧용우욱운울욹욺움웁웃웅워웍원월웜웝웠웡웨",
        ],
        ["c041", "퓾", 5, "픅픆픇픉픊픋픍", 6, "픖픘", 5],
        ["c061", "픞", 25],
        [
          "c081",
          "픸픹픺픻픾픿핁핂핃핅",
          6,
          "핎핐핒",
          5,
          "핚핛핝핞핟핡핢핣웩웬웰웸웹웽위윅윈윌윔윕윗윙유육윤율윰윱윳융윷으윽은을읊음읍읏응",
          7,
          "읜읠읨읫이익인일읽읾잃임입잇있잉잊잎자작잔잖잗잘잚잠잡잣잤장잦재잭잰잴잼잽잿쟀쟁쟈쟉쟌쟎쟐쟘쟝쟤쟨쟬저적전절젊",
        ],
        ["c141", "핤핦핧핪핬핮", 5, "핶핷핹핺핻핽", 6, "햆햊햋"],
        ["c161", "햌햍햎햏햑", 19, "햦햧"],
        [
          "c181",
          "햨",
          31,
          "점접젓정젖제젝젠젤젬젭젯젱져젼졀졈졉졌졍졔조족존졸졺좀좁좃종좆좇좋좌좍좔좝좟좡좨좼좽죄죈죌죔죕죗죙죠죡죤죵주죽준줄줅줆줌줍줏중줘줬줴쥐쥑쥔쥘쥠쥡쥣쥬쥰쥴쥼즈즉즌즐즘즙즛증지직진짇질짊짐집짓",
        ],
        ["c241", "헊헋헍헎헏헑헓", 4, "헚헜헞", 5, "헦헧헩헪헫헭헮"],
        ["c261", "헯", 4, "헶헸헺", 5, "혂혃혅혆혇혉", 6, "혒"],
        [
          "c281",
          "혖",
          5,
          "혝혞혟혡혢혣혥",
          7,
          "혮",
          9,
          "혺혻징짖짙짚짜짝짠짢짤짧짬짭짯짰짱째짹짼쨀쨈쨉쨋쨌쨍쨔쨘쨩쩌쩍쩐쩔쩜쩝쩟쩠쩡쩨쩽쪄쪘쪼쪽쫀쫄쫌쫍쫏쫑쫓쫘쫙쫠쫬쫴쬈쬐쬔쬘쬠쬡쭁쭈쭉쭌쭐쭘쭙쭝쭤쭸쭹쮜쮸쯔쯤쯧쯩찌찍찐찔찜찝찡찢찧차착찬찮찰참찹찻",
        ],
        ["c341", "혽혾혿홁홂홃홄홆홇홊홌홎홏홐홒홓홖홗홙홚홛홝", 4],
        ["c361", "홢", 4, "홨홪", 5, "홲홳홵", 11],
        [
          "c381",
          "횁횂횄횆",
          5,
          "횎횏횑횒횓횕",
          7,
          "횞횠횢",
          5,
          "횩횪찼창찾채책챈챌챔챕챗챘챙챠챤챦챨챰챵처척천철첨첩첫첬청체첵첸첼쳄쳅쳇쳉쳐쳔쳤쳬쳰촁초촉촌촐촘촙촛총촤촨촬촹최쵠쵤쵬쵭쵯쵱쵸춈추축춘출춤춥춧충춰췄췌췐취췬췰췸췹췻췽츄츈츌츔츙츠측츤츨츰츱츳층",
        ],
        ["c441", "횫횭횮횯횱", 7, "횺횼", 7, "훆훇훉훊훋"],
        ["c461", "훍훎훏훐훒훓훕훖훘훚", 5, "훡훢훣훥훦훧훩", 4],
        [
          "c481",
          "훮훯훱훲훳훴훶",
          5,
          "훾훿휁휂휃휅",
          11,
          "휒휓휔치칙친칟칠칡침칩칫칭카칵칸칼캄캅캇캉캐캑캔캘캠캡캣캤캥캬캭컁커컥컨컫컬컴컵컷컸컹케켁켄켈켐켑켓켕켜켠켤켬켭켯켰켱켸코콕콘콜콤콥콧콩콰콱콴콸쾀쾅쾌쾡쾨쾰쿄쿠쿡쿤쿨쿰쿱쿳쿵쿼퀀퀄퀑퀘퀭퀴퀵퀸퀼",
        ],
        ["c541", "휕휖휗휚휛휝휞휟휡", 6, "휪휬휮", 5, "휶휷휹"],
        ["c561", "휺휻휽", 6, "흅흆흈흊", 5, "흒흓흕흚", 4],
        [
          "c581",
          "흟흢흤흦흧흨흪흫흭흮흯흱흲흳흵",
          6,
          "흾흿힀힂",
          5,
          "힊힋큄큅큇큉큐큔큘큠크큭큰클큼큽킁키킥킨킬킴킵킷킹타탁탄탈탉탐탑탓탔탕태택탠탤탬탭탯탰탱탸턍터턱턴털턺텀텁텃텄텅테텍텐텔템텝텟텡텨텬텼톄톈토톡톤톨톰톱톳통톺톼퇀퇘퇴퇸툇툉툐투툭툰툴툼툽툿퉁퉈퉜",
        ],
        ["c641", "힍힎힏힑", 6, "힚힜힞", 5],
        [
          "c6a1",
          "퉤튀튁튄튈튐튑튕튜튠튤튬튱트특튼튿틀틂틈틉틋틔틘틜틤틥티틱틴틸팀팁팃팅파팍팎판팔팖팜팝팟팠팡팥패팩팬팰팸팹팻팼팽퍄퍅퍼퍽펀펄펌펍펏펐펑페펙펜펠펨펩펫펭펴편펼폄폅폈평폐폘폡폣포폭폰폴폼폽폿퐁",
        ],
        [
          "c7a1",
          "퐈퐝푀푄표푠푤푭푯푸푹푼푿풀풂품풉풋풍풔풩퓌퓐퓔퓜퓟퓨퓬퓰퓸퓻퓽프픈플픔픕픗피픽핀필핌핍핏핑하학한할핥함합핫항해핵핸핼햄햅햇했행햐향허헉헌헐헒험헙헛헝헤헥헨헬헴헵헷헹혀혁현혈혐협혓혔형혜혠",
        ],
        [
          "c8a1",
          "혤혭호혹혼홀홅홈홉홋홍홑화확환활홧황홰홱홴횃횅회획횐횔횝횟횡효횬횰횹횻후훅훈훌훑훔훗훙훠훤훨훰훵훼훽휀휄휑휘휙휜휠휨휩휫휭휴휵휸휼흄흇흉흐흑흔흖흗흘흙흠흡흣흥흩희흰흴흼흽힁히힉힌힐힘힙힛힝",
        ],
        [
          "caa1",
          "伽佳假價加可呵哥嘉嫁家暇架枷柯歌珂痂稼苛茄街袈訶賈跏軻迦駕刻却各恪慤殼珏脚覺角閣侃刊墾奸姦干幹懇揀杆柬桿澗癎看磵稈竿簡肝艮艱諫間乫喝曷渴碣竭葛褐蝎鞨勘坎堪嵌感憾戡敢柑橄減甘疳監瞰紺邯鑑鑒龕",
        ],
        [
          "cba1",
          "匣岬甲胛鉀閘剛堈姜岡崗康强彊慷江畺疆糠絳綱羌腔舡薑襁講鋼降鱇介价個凱塏愷愾慨改槪漑疥皆盖箇芥蓋豈鎧開喀客坑更粳羹醵倨去居巨拒据據擧渠炬祛距踞車遽鉅鋸乾件健巾建愆楗腱虔蹇鍵騫乞傑杰桀儉劍劒檢",
        ],
        [
          "cca1",
          "瞼鈐黔劫怯迲偈憩揭擊格檄激膈覡隔堅牽犬甄絹繭肩見譴遣鵑抉決潔結缺訣兼慊箝謙鉗鎌京俓倞傾儆勁勍卿坰境庚徑慶憬擎敬景暻更梗涇炅烱璟璥瓊痙硬磬竟競絅經耕耿脛莖警輕逕鏡頃頸驚鯨係啓堺契季屆悸戒桂械",
        ],
        [
          "cda1",
          "棨溪界癸磎稽系繫繼計誡谿階鷄古叩告呱固姑孤尻庫拷攷故敲暠枯槁沽痼皐睾稿羔考股膏苦苽菰藁蠱袴誥賈辜錮雇顧高鼓哭斛曲梏穀谷鵠困坤崑昆梱棍滾琨袞鯤汨滑骨供公共功孔工恐恭拱控攻珙空蚣貢鞏串寡戈果瓜",
        ],
        [
          "cea1",
          "科菓誇課跨過鍋顆廓槨藿郭串冠官寬慣棺款灌琯瓘管罐菅觀貫關館刮恝括适侊光匡壙廣曠洸炚狂珖筐胱鑛卦掛罫乖傀塊壞怪愧拐槐魁宏紘肱轟交僑咬喬嬌嶠巧攪敎校橋狡皎矯絞翹膠蕎蛟較轎郊餃驕鮫丘久九仇俱具勾",
        ],
        [
          "cfa1",
          "區口句咎嘔坵垢寇嶇廐懼拘救枸柩構歐毆毬求溝灸狗玖球瞿矩究絿耉臼舅舊苟衢謳購軀逑邱鉤銶駒驅鳩鷗龜國局菊鞠鞫麴君窘群裙軍郡堀屈掘窟宮弓穹窮芎躬倦券勸卷圈拳捲權淃眷厥獗蕨蹶闕机櫃潰詭軌饋句晷歸貴",
        ],
        [
          "d0a1",
          "鬼龜叫圭奎揆槻珪硅窺竅糾葵規赳逵閨勻均畇筠菌鈞龜橘克剋劇戟棘極隙僅劤勤懃斤根槿瑾筋芹菫覲謹近饉契今妗擒昑檎琴禁禽芩衾衿襟金錦伋及急扱汲級給亘兢矜肯企伎其冀嗜器圻基埼夔奇妓寄岐崎己幾忌技旗旣",
        ],
        [
          "d1a1",
          "朞期杞棋棄機欺氣汽沂淇玘琦琪璂璣畸畿碁磯祁祇祈祺箕紀綺羈耆耭肌記譏豈起錡錤飢饑騎騏驥麒緊佶吉拮桔金喫儺喇奈娜懦懶拏拿癩",
          5,
          "那樂",
          4,
          "諾酪駱亂卵暖欄煖爛蘭難鸞捏捺南嵐枏楠湳濫男藍襤拉",
        ],
        [
          "d2a1",
          "納臘蠟衲囊娘廊",
          4,
          "乃來內奈柰耐冷女年撚秊念恬拈捻寧寗努勞奴弩怒擄櫓爐瑙盧",
          5,
          "駑魯",
          10,
          "濃籠聾膿農惱牢磊腦賂雷尿壘",
          7,
          "嫩訥杻紐勒",
          5,
          "能菱陵尼泥匿溺多茶",
        ],
        [
          "d3a1",
          "丹亶但單團壇彖斷旦檀段湍短端簞緞蛋袒鄲鍛撻澾獺疸達啖坍憺擔曇淡湛潭澹痰聃膽蕁覃談譚錟沓畓答踏遝唐堂塘幢戇撞棠當糖螳黨代垈坮大對岱帶待戴擡玳臺袋貸隊黛宅德悳倒刀到圖堵塗導屠島嶋度徒悼挑掉搗桃",
        ],
        [
          "d4a1",
          "棹櫂淘渡滔濤燾盜睹禱稻萄覩賭跳蹈逃途道都鍍陶韜毒瀆牘犢獨督禿篤纛讀墩惇敦旽暾沌焞燉豚頓乭突仝冬凍動同憧東桐棟洞潼疼瞳童胴董銅兜斗杜枓痘竇荳讀豆逗頭屯臀芚遁遯鈍得嶝橙燈登等藤謄鄧騰喇懶拏癩羅",
        ],
        [
          "d5a1",
          "蘿螺裸邏樂洛烙珞絡落諾酪駱丹亂卵欄欒瀾爛蘭鸞剌辣嵐擥攬欖濫籃纜藍襤覽拉臘蠟廊朗浪狼琅瑯螂郞來崍徠萊冷掠略亮倆兩凉梁樑粮粱糧良諒輛量侶儷勵呂廬慮戾旅櫚濾礪藜蠣閭驢驪麗黎力曆歷瀝礫轢靂憐戀攣漣",
        ],
        [
          "d6a1",
          "煉璉練聯蓮輦連鍊冽列劣洌烈裂廉斂殮濂簾獵令伶囹寧岺嶺怜玲笭羚翎聆逞鈴零靈領齡例澧禮醴隷勞怒撈擄櫓潞瀘爐盧老蘆虜路輅露魯鷺鹵碌祿綠菉錄鹿麓論壟弄朧瀧瓏籠聾儡瀨牢磊賂賚賴雷了僚寮廖料燎療瞭聊蓼",
        ],
        [
          "d7a1",
          "遼鬧龍壘婁屢樓淚漏瘻累縷蔞褸鏤陋劉旒柳榴流溜瀏琉瑠留瘤硫謬類六戮陸侖倫崙淪綸輪律慄栗率隆勒肋凜凌楞稜綾菱陵俚利厘吏唎履悧李梨浬犁狸理璃異痢籬罹羸莉裏裡里釐離鯉吝潾燐璘藺躪隣鱗麟林淋琳臨霖砬",
        ],
        [
          "d8a1",
          "立笠粒摩瑪痲碼磨馬魔麻寞幕漠膜莫邈万卍娩巒彎慢挽晩曼滿漫灣瞞萬蔓蠻輓饅鰻唜抹末沫茉襪靺亡妄忘忙望網罔芒茫莽輞邙埋妹媒寐昧枚梅每煤罵買賣邁魅脈貊陌驀麥孟氓猛盲盟萌冪覓免冕勉棉沔眄眠綿緬面麵滅",
        ],
        [
          "d9a1",
          "蔑冥名命明暝椧溟皿瞑茗蓂螟酩銘鳴袂侮冒募姆帽慕摸摹暮某模母毛牟牡瑁眸矛耗芼茅謀謨貌木沐牧目睦穆鶩歿沒夢朦蒙卯墓妙廟描昴杳渺猫竗苗錨務巫憮懋戊拇撫无楙武毋無珷畝繆舞茂蕪誣貿霧鵡墨默們刎吻問文",
        ],
        [
          "daa1",
          "汶紊紋聞蚊門雯勿沕物味媚尾嵋彌微未梶楣渼湄眉米美薇謎迷靡黴岷悶愍憫敏旻旼民泯玟珉緡閔密蜜謐剝博拍搏撲朴樸泊珀璞箔粕縛膊舶薄迫雹駁伴半反叛拌搬攀斑槃泮潘班畔瘢盤盼磐磻礬絆般蟠返頒飯勃拔撥渤潑",
        ],
        [
          "dba1",
          "發跋醱鉢髮魃倣傍坊妨尨幇彷房放方旁昉枋榜滂磅紡肪膀舫芳蒡蚌訪謗邦防龐倍俳北培徘拜排杯湃焙盃背胚裴裵褙賠輩配陪伯佰帛柏栢白百魄幡樊煩燔番磻繁蕃藩飜伐筏罰閥凡帆梵氾汎泛犯範范法琺僻劈壁擘檗璧癖",
        ],
        [
          "dca1",
          "碧蘗闢霹便卞弁變辨辯邊別瞥鱉鼈丙倂兵屛幷昞昺柄棅炳甁病秉竝輧餠騈保堡報寶普步洑湺潽珤甫菩補褓譜輔伏僕匐卜宓復服福腹茯蔔複覆輹輻馥鰒本乶俸奉封峯峰捧棒烽熢琫縫蓬蜂逢鋒鳳不付俯傅剖副否咐埠夫婦",
        ],
        [
          "dda1",
          "孚孵富府復扶敷斧浮溥父符簿缶腐腑膚艀芙莩訃負賦賻赴趺部釜阜附駙鳧北分吩噴墳奔奮忿憤扮昐汾焚盆粉糞紛芬賁雰不佛弗彿拂崩朋棚硼繃鵬丕備匕匪卑妃婢庇悲憊扉批斐枇榧比毖毗毘沸泌琵痺砒碑秕秘粃緋翡肥",
        ],
        [
          "dea1",
          "脾臂菲蜚裨誹譬費鄙非飛鼻嚬嬪彬斌檳殯浜濱瀕牝玭貧賓頻憑氷聘騁乍事些仕伺似使俟僿史司唆嗣四士奢娑寫寺射巳師徙思捨斜斯柶査梭死沙泗渣瀉獅砂社祀祠私篩紗絲肆舍莎蓑蛇裟詐詞謝賜赦辭邪飼駟麝削數朔索",
        ],
        [
          "dfa1",
          "傘刪山散汕珊産疝算蒜酸霰乷撒殺煞薩三參杉森渗芟蔘衫揷澁鈒颯上傷像償商喪嘗孀尙峠常床庠廂想桑橡湘爽牀狀相祥箱翔裳觴詳象賞霜塞璽賽嗇塞穡索色牲生甥省笙墅壻嶼序庶徐恕抒捿敍暑曙書栖棲犀瑞筮絮緖署",
        ],
        [
          "e0a1",
          "胥舒薯西誓逝鋤黍鼠夕奭席惜昔晳析汐淅潟石碩蓆釋錫仙僊先善嬋宣扇敾旋渲煽琁瑄璇璿癬禪線繕羨腺膳船蘚蟬詵跣選銑鐥饍鮮卨屑楔泄洩渫舌薛褻設說雪齧剡暹殲纖蟾贍閃陝攝涉燮葉城姓宬性惺成星晟猩珹盛省筬",
        ],
        [
          "e1a1",
          "聖聲腥誠醒世勢歲洗稅笹細說貰召嘯塑宵小少巢所掃搔昭梳沼消溯瀟炤燒甦疏疎瘙笑篠簫素紹蔬蕭蘇訴逍遡邵銷韶騷俗屬束涑粟續謖贖速孫巽損蓀遜飡率宋悚松淞訟誦送頌刷殺灑碎鎖衰釗修受嗽囚垂壽嫂守岫峀帥愁",
        ],
        [
          "e2a1",
          "戍手授搜收數樹殊水洙漱燧狩獸琇璲瘦睡秀穗竪粹綏綬繡羞脩茱蒐蓚藪袖誰讐輸遂邃酬銖銹隋隧隨雖需須首髓鬚叔塾夙孰宿淑潚熟琡璹肅菽巡徇循恂旬栒楯橓殉洵淳珣盾瞬筍純脣舜荀蓴蕣詢諄醇錞順馴戌術述鉥崇崧",
        ],
        [
          "e3a1",
          "嵩瑟膝蝨濕拾習褶襲丞乘僧勝升承昇繩蠅陞侍匙嘶始媤尸屎屍市弑恃施是時枾柴猜矢示翅蒔蓍視試詩諡豕豺埴寔式息拭植殖湜熄篒蝕識軾食飾伸侁信呻娠宸愼新晨燼申神紳腎臣莘薪藎蜃訊身辛辰迅失室實悉審尋心沁",
        ],
        [
          "e4a1",
          "沈深瀋甚芯諶什十拾雙氏亞俄兒啞娥峨我牙芽莪蛾衙訝阿雅餓鴉鵝堊岳嶽幄惡愕握樂渥鄂鍔顎鰐齷安岸按晏案眼雁鞍顔鮟斡謁軋閼唵岩巖庵暗癌菴闇壓押狎鴨仰央怏昻殃秧鴦厓哀埃崖愛曖涯碍艾隘靄厄扼掖液縊腋額",
        ],
        [
          "e5a1",
          "櫻罌鶯鸚也倻冶夜惹揶椰爺耶若野弱掠略約若葯蒻藥躍亮佯兩凉壤孃恙揚攘敭暘梁楊樣洋瀁煬痒瘍禳穰糧羊良襄諒讓釀陽量養圄御於漁瘀禦語馭魚齬億憶抑檍臆偃堰彦焉言諺孼蘖俺儼嚴奄掩淹嶪業円予余勵呂女如廬",
        ],
        [
          "e6a1",
          "旅歟汝濾璵礖礪與艅茹輿轝閭餘驪麗黎亦力域役易曆歷疫繹譯轢逆驛嚥堧姸娟宴年延憐戀捐挻撚椽沇沿涎涓淵演漣烟然煙煉燃燕璉硏硯秊筵緣練縯聯衍軟輦蓮連鉛鍊鳶列劣咽悅涅烈熱裂說閱厭廉念捻染殮炎焰琰艶苒",
        ],
        [
          "e7a1",
          "簾閻髥鹽曄獵燁葉令囹塋寧嶺嶸影怜映暎楹榮永泳渶潁濚瀛瀯煐營獰玲瑛瑩瓔盈穎纓羚聆英詠迎鈴鍈零霙靈領乂倪例刈叡曳汭濊猊睿穢芮藝蘂禮裔詣譽豫醴銳隸霓預五伍俉傲午吾吳嗚塢墺奧娛寤悟惡懊敖旿晤梧汚澳",
        ],
        [
          "e8a1",
          "烏熬獒筽蜈誤鰲鼇屋沃獄玉鈺溫瑥瘟穩縕蘊兀壅擁瓮甕癰翁邕雍饔渦瓦窩窪臥蛙蝸訛婉完宛梡椀浣玩琓琬碗緩翫脘腕莞豌阮頑曰往旺枉汪王倭娃歪矮外嵬巍猥畏了僚僥凹堯夭妖姚寥寮尿嶢拗搖撓擾料曜樂橈燎燿瑤療",
        ],
        [
          "e9a1",
          "窈窯繇繞耀腰蓼蟯要謠遙遼邀饒慾欲浴縟褥辱俑傭冗勇埇墉容庸慂榕涌湧溶熔瑢用甬聳茸蓉踊鎔鏞龍于佑偶優又友右宇寓尤愚憂旴牛玗瑀盂祐禑禹紆羽芋藕虞迂遇郵釪隅雨雩勖彧旭昱栯煜稶郁頊云暈橒殞澐熉耘芸蕓",
        ],
        [
          "eaa1",
          "運隕雲韻蔚鬱亐熊雄元原員圓園垣媛嫄寃怨愿援沅洹湲源爰猿瑗苑袁轅遠阮院願鴛月越鉞位偉僞危圍委威尉慰暐渭爲瑋緯胃萎葦蔿蝟衛褘謂違韋魏乳侑儒兪劉唯喩孺宥幼幽庾悠惟愈愉揄攸有杻柔柚柳楡楢油洧流游溜",
        ],
        [
          "eba1",
          "濡猶猷琉瑜由留癒硫紐維臾萸裕誘諛諭踰蹂遊逾遺酉釉鍮類六堉戮毓肉育陸倫允奫尹崙淪潤玧胤贇輪鈗閏律慄栗率聿戎瀜絨融隆垠恩慇殷誾銀隱乙吟淫蔭陰音飮揖泣邑凝應膺鷹依倚儀宜意懿擬椅毅疑矣義艤薏蟻衣誼",
        ],
        [
          "eca1",
          "議醫二以伊利吏夷姨履已弛彛怡易李梨泥爾珥理異痍痢移罹而耳肄苡荑裏裡貽貳邇里離飴餌匿溺瀷益翊翌翼謚人仁刃印吝咽因姻寅引忍湮燐璘絪茵藺蚓認隣靭靷鱗麟一佚佾壹日溢逸鎰馹任壬妊姙恁林淋稔臨荏賃入卄",
        ],
        [
          "eda1",
          "立笠粒仍剩孕芿仔刺咨姉姿子字孜恣慈滋炙煮玆瓷疵磁紫者自茨蔗藉諮資雌作勺嚼斫昨灼炸爵綽芍酌雀鵲孱棧殘潺盞岑暫潛箴簪蠶雜丈仗匠場墻壯奬將帳庄張掌暲杖樟檣欌漿牆狀獐璋章粧腸臟臧莊葬蔣薔藏裝贓醬長",
        ],
        [
          "eea1",
          "障再哉在宰才材栽梓渽滓災縡裁財載齋齎爭箏諍錚佇低儲咀姐底抵杵楮樗沮渚狙猪疽箸紵苧菹著藷詛貯躇這邸雎齟勣吊嫡寂摘敵滴狄炙的積笛籍績翟荻謫賊赤跡蹟迪迹適鏑佃佺傳全典前剪塡塼奠專展廛悛戰栓殿氈澱",
        ],
        [
          "efa1",
          "煎琠田甸畑癲筌箋箭篆纏詮輾轉鈿銓錢鐫電顚顫餞切截折浙癤竊節絶占岾店漸点粘霑鮎點接摺蝶丁井亭停偵呈姃定幀庭廷征情挺政整旌晶晸柾楨檉正汀淀淨渟湞瀞炡玎珽町睛碇禎程穽精綎艇訂諪貞鄭酊釘鉦鋌錠霆靖",
        ],
        [
          "f0a1",
          "靜頂鼎制劑啼堤帝弟悌提梯濟祭第臍薺製諸蹄醍除際霽題齊俎兆凋助嘲弔彫措操早晁曺曹朝條棗槽漕潮照燥爪璪眺祖祚租稠窕粗糟組繰肇藻蚤詔調趙躁造遭釣阻雕鳥族簇足鏃存尊卒拙猝倧宗從悰慫棕淙琮種終綜縱腫",
        ],
        [
          "f1a1",
          "踪踵鍾鐘佐坐左座挫罪主住侏做姝胄呪周嗾奏宙州廚晝朱柱株注洲湊澍炷珠疇籌紂紬綢舟蛛註誅走躊輳週酎酒鑄駐竹粥俊儁准埈寯峻晙樽浚準濬焌畯竣蠢逡遵雋駿茁中仲衆重卽櫛楫汁葺增憎曾拯烝甑症繒蒸證贈之只",
        ],
        [
          "f2a1",
          "咫地址志持指摯支旨智枝枳止池沚漬知砥祉祗紙肢脂至芝芷蜘誌識贄趾遲直稙稷織職唇嗔塵振搢晉晋桭榛殄津溱珍瑨璡畛疹盡眞瞋秦縉縝臻蔯袗診賑軫辰進鎭陣陳震侄叱姪嫉帙桎瓆疾秩窒膣蛭質跌迭斟朕什執潗緝輯",
        ],
        [
          "f3a1",
          "鏶集徵懲澄且侘借叉嗟嵯差次此磋箚茶蹉車遮捉搾着窄錯鑿齪撰澯燦璨瓚竄簒纂粲纘讚贊鑽餐饌刹察擦札紮僭參塹慘慙懺斬站讒讖倉倡創唱娼廠彰愴敞昌昶暢槍滄漲猖瘡窓脹艙菖蒼債埰寀寨彩採砦綵菜蔡采釵冊柵策",
        ],
        [
          "f4a1",
          "責凄妻悽處倜刺剔尺慽戚拓擲斥滌瘠脊蹠陟隻仟千喘天川擅泉淺玔穿舛薦賤踐遷釧闡阡韆凸哲喆徹撤澈綴輟轍鐵僉尖沾添甛瞻簽籤詹諂堞妾帖捷牒疊睫諜貼輒廳晴淸聽菁請靑鯖切剃替涕滯締諦逮遞體初剿哨憔抄招梢",
        ],
        [
          "f5a1",
          "椒楚樵炒焦硝礁礎秒稍肖艸苕草蕉貂超酢醋醮促囑燭矗蜀觸寸忖村邨叢塚寵悤憁摠總聰蔥銃撮催崔最墜抽推椎楸樞湫皺秋芻萩諏趨追鄒酋醜錐錘鎚雛騶鰍丑畜祝竺筑築縮蓄蹙蹴軸逐春椿瑃出朮黜充忠沖蟲衝衷悴膵萃",
        ],
        [
          "f6a1",
          "贅取吹嘴娶就炊翠聚脆臭趣醉驟鷲側仄厠惻測層侈値嗤峙幟恥梔治淄熾痔痴癡稚穉緇緻置致蚩輜雉馳齒則勅飭親七柒漆侵寢枕沈浸琛砧針鍼蟄秤稱快他咤唾墮妥惰打拖朶楕舵陀馱駝倬卓啄坼度托拓擢晫柝濁濯琢琸託",
        ],
        [
          "f7a1",
          "鐸呑嘆坦彈憚歎灘炭綻誕奪脫探眈耽貪塔搭榻宕帑湯糖蕩兌台太怠態殆汰泰笞胎苔跆邰颱宅擇澤撑攄兎吐土討慟桶洞痛筒統通堆槌腿褪退頹偸套妬投透鬪慝特闖坡婆巴把播擺杷波派爬琶破罷芭跛頗判坂板版瓣販辦鈑",
        ],
        [
          "f8a1",
          "阪八叭捌佩唄悖敗沛浿牌狽稗覇貝彭澎烹膨愎便偏扁片篇編翩遍鞭騙貶坪平枰萍評吠嬖幣廢弊斃肺蔽閉陛佈包匍匏咆哺圃布怖抛抱捕暴泡浦疱砲胞脯苞葡蒲袍褒逋鋪飽鮑幅暴曝瀑爆輻俵剽彪慓杓標漂瓢票表豹飇飄驃",
        ],
        [
          "f9a1",
          "品稟楓諷豊風馮彼披疲皮被避陂匹弼必泌珌畢疋筆苾馝乏逼下何厦夏廈昰河瑕荷蝦賀遐霞鰕壑學虐謔鶴寒恨悍旱汗漢澣瀚罕翰閑閒限韓割轄函含咸啣喊檻涵緘艦銜陷鹹合哈盒蛤閤闔陜亢伉姮嫦巷恒抗杭桁沆港缸肛航",
        ],
        [
          "faa1",
          "行降項亥偕咳垓奚孩害懈楷海瀣蟹解該諧邂駭骸劾核倖幸杏荇行享向嚮珦鄕響餉饗香噓墟虛許憲櫶獻軒歇險驗奕爀赫革俔峴弦懸晛泫炫玄玹現眩睍絃絢縣舷衒見賢鉉顯孑穴血頁嫌俠協夾峽挾浹狹脅脇莢鋏頰亨兄刑型",
        ],
        [
          "fba1",
          "形泂滎瀅灐炯熒珩瑩荊螢衡逈邢鎣馨兮彗惠慧暳蕙蹊醯鞋乎互呼壕壺好岵弧戶扈昊晧毫浩淏湖滸澔濠濩灝狐琥瑚瓠皓祜糊縞胡芦葫蒿虎號蝴護豪鎬頀顥惑或酷婚昏混渾琿魂忽惚笏哄弘汞泓洪烘紅虹訌鴻化和嬅樺火畵",
        ],
        [
          "fca1",
          "禍禾花華話譁貨靴廓擴攫確碻穫丸喚奐宦幻患換歡晥桓渙煥環紈還驩鰥活滑猾豁闊凰幌徨恍惶愰慌晃晄榥況湟滉潢煌璜皇篁簧荒蝗遑隍黃匯回廻徊恢悔懷晦會檜淮澮灰獪繪膾茴蛔誨賄劃獲宖橫鐄哮嚆孝效斅曉梟涍淆",
        ],
        [
          "fda1",
          "爻肴酵驍侯候厚后吼喉嗅帿後朽煦珝逅勛勳塤壎焄熏燻薰訓暈薨喧暄煊萱卉喙毁彙徽揮暉煇諱輝麾休携烋畦虧恤譎鷸兇凶匈洶胸黑昕欣炘痕吃屹紇訖欠欽歆吸恰洽翕興僖凞喜噫囍姬嬉希憙憘戱晞曦熙熹熺犧禧稀羲詰",
        ],
      ],
    }),
    xn = Object.freeze({
      default: [
        ["0", "\0", 127],
        [
          "a140",
          "　，、。．‧；：？！︰…‥﹐﹑﹒·﹔﹕﹖﹗｜–︱—︳╴︴﹏（）︵︶｛｝︷︸〔〕︹︺【】︻︼《》︽︾〈〉︿﹀「」﹁﹂『』﹃﹄﹙﹚",
        ],
        [
          "a1a1",
          "﹛﹜﹝﹞‘’“”〝〞‵′＃＆＊※§〃○●△▲◎☆★◇◆□■▽▼㊣℅¯￣＿ˍ﹉﹊﹍﹎﹋﹌﹟﹠﹡＋－×÷±√＜＞＝≦≧≠∞≒≡﹢",
          4,
          "～∩∪⊥∠∟⊿㏒㏑∫∮∵∴♀♂⊕⊙↑↓←→↖↗↙↘∥∣／",
        ],
        [
          "a240",
          "＼∕﹨＄￥〒￠￡％＠℃℉﹩﹪﹫㏕㎜㎝㎞㏎㎡㎎㎏㏄°兙兛兞兝兡兣嗧瓩糎▁",
          7,
          "▏▎▍▌▋▊▉┼┴┬┤├▔─│▕┌┐└┘╭",
        ],
        [
          "a2a1",
          "╮╰╯═╞╪╡◢◣◥◤╱╲╳０",
          9,
          "Ⅰ",
          9,
          "〡",
          8,
          "十卄卅Ａ",
          25,
          "ａ",
          21,
        ],
        ["a340", "ｗｘｙｚΑ", 16, "Σ", 6, "α", 16, "σ", 6, "ㄅ", 10],
        ["a3a1", "ㄐ", 25, "˙ˉˊˇˋ"],
        ["a3e1", "€"],
        [
          "a440",
          "一乙丁七乃九了二人儿入八几刀刁力匕十卜又三下丈上丫丸凡久么也乞于亡兀刃勺千叉口土士夕大女子孑孓寸小尢尸山川工己已巳巾干廾弋弓才",
        ],
        [
          "a4a1",
          "丑丐不中丰丹之尹予云井互五亢仁什仃仆仇仍今介仄元允內六兮公冗凶分切刈勻勾勿化匹午升卅卞厄友及反壬天夫太夭孔少尤尺屯巴幻廿弔引心戈戶手扎支文斗斤方日曰月木欠止歹毋比毛氏水火爪父爻片牙牛犬王丙",
        ],
        [
          "a540",
          "世丕且丘主乍乏乎以付仔仕他仗代令仙仞充兄冉冊冬凹出凸刊加功包匆北匝仟半卉卡占卯卮去可古右召叮叩叨叼司叵叫另只史叱台句叭叻四囚外",
        ],
        [
          "a5a1",
          "央失奴奶孕它尼巨巧左市布平幼弁弘弗必戊打扔扒扑斥旦朮本未末札正母民氐永汁汀氾犯玄玉瓜瓦甘生用甩田由甲申疋白皮皿目矛矢石示禾穴立丞丟乒乓乩亙交亦亥仿伉伙伊伕伍伐休伏仲件任仰仳份企伋光兇兆先全",
        ],
        [
          "a640",
          "共再冰列刑划刎刖劣匈匡匠印危吉吏同吊吐吁吋各向名合吃后吆吒因回囝圳地在圭圬圯圩夙多夷夸妄奸妃好她如妁字存宇守宅安寺尖屹州帆并年",
        ],
        [
          "a6a1",
          "式弛忙忖戎戌戍成扣扛托收早旨旬旭曲曳有朽朴朱朵次此死氖汝汗汙江池汐汕污汛汍汎灰牟牝百竹米糸缶羊羽老考而耒耳聿肉肋肌臣自至臼舌舛舟艮色艾虫血行衣西阡串亨位住佇佗佞伴佛何估佐佑伽伺伸佃佔似但佣",
        ],
        [
          "a740",
          "作你伯低伶余佝佈佚兌克免兵冶冷別判利刪刨劫助努劬匣即卵吝吭吞吾否呎吧呆呃吳呈呂君吩告吹吻吸吮吵吶吠吼呀吱含吟听囪困囤囫坊坑址坍",
        ],
        [
          "a7a1",
          "均坎圾坐坏圻壯夾妝妒妨妞妣妙妖妍妤妓妊妥孝孜孚孛完宋宏尬局屁尿尾岐岑岔岌巫希序庇床廷弄弟彤形彷役忘忌志忍忱快忸忪戒我抄抗抖技扶抉扭把扼找批扳抒扯折扮投抓抑抆改攻攸旱更束李杏材村杜杖杞杉杆杠",
        ],
        [
          "a840",
          "杓杗步每求汞沙沁沈沉沅沛汪決沐汰沌汨沖沒汽沃汲汾汴沆汶沍沔沘沂灶灼災灸牢牡牠狄狂玖甬甫男甸皂盯矣私秀禿究系罕肖肓肝肘肛肚育良芒",
        ],
        [
          "a8a1",
          "芋芍見角言谷豆豕貝赤走足身車辛辰迂迆迅迄巡邑邢邪邦那酉釆里防阮阱阪阬並乖乳事些亞享京佯依侍佳使佬供例來侃佰併侈佩佻侖佾侏侑佺兔兒兕兩具其典冽函刻券刷刺到刮制剁劾劻卒協卓卑卦卷卸卹取叔受味呵",
        ],
        [
          "a940",
          "咖呸咕咀呻呷咄咒咆呼咐呱呶和咚呢周咋命咎固垃坷坪坩坡坦坤坼夜奉奇奈奄奔妾妻委妹妮姑姆姐姍始姓姊妯妳姒姅孟孤季宗定官宜宙宛尚屈居",
        ],
        [
          "a9a1",
          "屆岷岡岸岩岫岱岳帘帚帖帕帛帑幸庚店府底庖延弦弧弩往征彿彼忝忠忽念忿怏怔怯怵怖怪怕怡性怩怫怛或戕房戾所承拉拌拄抿拂抹拒招披拓拔拋拈抨抽押拐拙拇拍抵拚抱拘拖拗拆抬拎放斧於旺昔易昌昆昂明昀昏昕昊",
        ],
        [
          "aa40",
          "昇服朋杭枋枕東果杳杷枇枝林杯杰板枉松析杵枚枓杼杪杲欣武歧歿氓氛泣注泳沱泌泥河沽沾沼波沫法泓沸泄油況沮泗泅泱沿治泡泛泊沬泯泜泖泠",
        ],
        [
          "aaa1",
          "炕炎炒炊炙爬爭爸版牧物狀狎狙狗狐玩玨玟玫玥甽疝疙疚的盂盲直知矽社祀祁秉秈空穹竺糾罔羌羋者肺肥肢肱股肫肩肴肪肯臥臾舍芳芝芙芭芽芟芹花芬芥芯芸芣芰芾芷虎虱初表軋迎返近邵邸邱邶采金長門阜陀阿阻附",
        ],
        [
          "ab40",
          "陂隹雨青非亟亭亮信侵侯便俠俑俏保促侶俘俟俊俗侮俐俄係俚俎俞侷兗冒冑冠剎剃削前剌剋則勇勉勃勁匍南卻厚叛咬哀咨哎哉咸咦咳哇哂咽咪品",
        ],
        [
          "aba1",
          "哄哈咯咫咱咻咩咧咿囿垂型垠垣垢城垮垓奕契奏奎奐姜姘姿姣姨娃姥姪姚姦威姻孩宣宦室客宥封屎屏屍屋峙峒巷帝帥帟幽庠度建弈弭彥很待徊律徇後徉怒思怠急怎怨恍恰恨恢恆恃恬恫恪恤扁拜挖按拼拭持拮拽指拱拷",
        ],
        [
          "ac40",
          "拯括拾拴挑挂政故斫施既春昭映昧是星昨昱昤曷柿染柱柔某柬架枯柵柩柯柄柑枴柚查枸柏柞柳枰柙柢柝柒歪殃殆段毒毗氟泉洋洲洪流津洌洱洞洗",
        ],
        [
          "aca1",
          "活洽派洶洛泵洹洧洸洩洮洵洎洫炫為炳炬炯炭炸炮炤爰牲牯牴狩狠狡玷珊玻玲珍珀玳甚甭畏界畎畋疫疤疥疢疣癸皆皇皈盈盆盃盅省盹相眉看盾盼眇矜砂研砌砍祆祉祈祇禹禺科秒秋穿突竿竽籽紂紅紀紉紇約紆缸美羿耄",
        ],
        [
          "ad40",
          "耐耍耑耶胖胥胚胃胄背胡胛胎胞胤胝致舢苧范茅苣苛苦茄若茂茉苒苗英茁苜苔苑苞苓苟苯茆虐虹虻虺衍衫要觔計訂訃貞負赴赳趴軍軌述迦迢迪迥",
        ],
        [
          "ada1",
          "迭迫迤迨郊郎郁郃酋酊重閂限陋陌降面革韋韭音頁風飛食首香乘亳倌倍倣俯倦倥俸倩倖倆值借倚倒們俺倀倔倨俱倡個候倘俳修倭倪俾倫倉兼冤冥冢凍凌准凋剖剜剔剛剝匪卿原厝叟哨唐唁唷哼哥哲唆哺唔哩哭員唉哮哪",
        ],
        [
          "ae40",
          "哦唧唇哽唏圃圄埂埔埋埃堉夏套奘奚娑娘娜娟娛娓姬娠娣娩娥娌娉孫屘宰害家宴宮宵容宸射屑展屐峭峽峻峪峨峰島崁峴差席師庫庭座弱徒徑徐恙",
        ],
        [
          "aea1",
          "恣恥恐恕恭恩息悄悟悚悍悔悌悅悖扇拳挈拿捎挾振捕捂捆捏捉挺捐挽挪挫挨捍捌效敉料旁旅時晉晏晃晒晌晅晁書朔朕朗校核案框桓根桂桔栩梳栗桌桑栽柴桐桀格桃株桅栓栘桁殊殉殷氣氧氨氦氤泰浪涕消涇浦浸海浙涓",
        ],
        [
          "af40",
          "浬涉浮浚浴浩涌涊浹涅浥涔烊烘烤烙烈烏爹特狼狹狽狸狷玆班琉珮珠珪珞畔畝畜畚留疾病症疲疳疽疼疹痂疸皋皰益盍盎眩真眠眨矩砰砧砸砝破砷",
        ],
        [
          "afa1",
          "砥砭砠砟砲祕祐祠祟祖神祝祗祚秤秣秧租秦秩秘窄窈站笆笑粉紡紗紋紊素索純紐紕級紜納紙紛缺罟羔翅翁耆耘耕耙耗耽耿胱脂胰脅胭胴脆胸胳脈能脊胼胯臭臬舀舐航舫舨般芻茫荒荔荊茸荐草茵茴荏茲茹茶茗荀茱茨荃",
        ],
        [
          "b040",
          "虔蚊蚪蚓蚤蚩蚌蚣蚜衰衷袁袂衽衹記訐討訌訕訊託訓訖訏訑豈豺豹財貢起躬軒軔軏辱送逆迷退迺迴逃追逅迸邕郡郝郢酒配酌釘針釗釜釙閃院陣陡",
        ],
        [
          "b0a1",
          "陛陝除陘陞隻飢馬骨高鬥鬲鬼乾偺偽停假偃偌做偉健偶偎偕偵側偷偏倏偯偭兜冕凰剪副勒務勘動匐匏匙匿區匾參曼商啪啦啄啞啡啃啊唱啖問啕唯啤唸售啜唬啣唳啁啗圈國圉域堅堊堆埠埤基堂堵執培夠奢娶婁婉婦婪婀",
        ],
        [
          "b140",
          "娼婢婚婆婊孰寇寅寄寂宿密尉專將屠屜屝崇崆崎崛崖崢崑崩崔崙崤崧崗巢常帶帳帷康庸庶庵庾張強彗彬彩彫得徙從徘御徠徜恿患悉悠您惋悴惦悽",
        ],
        [
          "b1a1",
          "情悻悵惜悼惘惕惆惟悸惚惇戚戛扈掠控捲掖探接捷捧掘措捱掩掉掃掛捫推掄授掙採掬排掏掀捻捩捨捺敝敖救教敗啟敏敘敕敔斜斛斬族旋旌旎晝晚晤晨晦晞曹勗望梁梯梢梓梵桿桶梱梧梗械梃棄梭梆梅梔條梨梟梡梂欲殺",
        ],
        [
          "b240",
          "毫毬氫涎涼淳淙液淡淌淤添淺清淇淋涯淑涮淞淹涸混淵淅淒渚涵淚淫淘淪深淮淨淆淄涪淬涿淦烹焉焊烽烯爽牽犁猜猛猖猓猙率琅琊球理現琍瓠瓶",
        ],
        [
          "b2a1",
          "瓷甜產略畦畢異疏痔痕疵痊痍皎盔盒盛眷眾眼眶眸眺硫硃硎祥票祭移窒窕笠笨笛第符笙笞笮粒粗粕絆絃統紮紹紼絀細紳組累終紲紱缽羞羚翌翎習耜聊聆脯脖脣脫脩脰脤舂舵舷舶船莎莞莘荸莢莖莽莫莒莊莓莉莠荷荻荼",
        ],
        [
          "b340",
          "莆莧處彪蛇蛀蚶蛄蚵蛆蛋蚱蚯蛉術袞袈被袒袖袍袋覓規訪訝訣訥許設訟訛訢豉豚販責貫貨貪貧赧赦趾趺軛軟這逍通逗連速逝逐逕逞造透逢逖逛途",
        ],
        [
          "b3a1",
          "部郭都酗野釵釦釣釧釭釩閉陪陵陳陸陰陴陶陷陬雀雪雩章竟頂頃魚鳥鹵鹿麥麻傢傍傅備傑傀傖傘傚最凱割剴創剩勞勝勛博厥啻喀喧啼喊喝喘喂喜喪喔喇喋喃喳單喟唾喲喚喻喬喱啾喉喫喙圍堯堪場堤堰報堡堝堠壹壺奠",
        ],
        [
          "b440",
          "婷媚婿媒媛媧孳孱寒富寓寐尊尋就嵌嵐崴嵇巽幅帽幀幃幾廊廁廂廄弼彭復循徨惑惡悲悶惠愜愣惺愕惰惻惴慨惱愎惶愉愀愒戟扉掣掌描揀揩揉揆揍",
        ],
        [
          "b4a1",
          "插揣提握揖揭揮捶援揪換摒揚揹敞敦敢散斑斐斯普晰晴晶景暑智晾晷曾替期朝棺棕棠棘棗椅棟棵森棧棹棒棲棣棋棍植椒椎棉棚楮棻款欺欽殘殖殼毯氮氯氬港游湔渡渲湧湊渠渥渣減湛湘渤湖湮渭渦湯渴湍渺測湃渝渾滋",
        ],
        [
          "b540",
          "溉渙湎湣湄湲湩湟焙焚焦焰無然煮焜牌犄犀猶猥猴猩琺琪琳琢琥琵琶琴琯琛琦琨甥甦畫番痢痛痣痙痘痞痠登發皖皓皴盜睏短硝硬硯稍稈程稅稀窘",
        ],
        [
          "b5a1",
          "窗窖童竣等策筆筐筒答筍筋筏筑粟粥絞結絨絕紫絮絲絡給絢絰絳善翔翕耋聒肅腕腔腋腑腎脹腆脾腌腓腴舒舜菩萃菸萍菠菅萋菁華菱菴著萊菰萌菌菽菲菊萸萎萄菜萇菔菟虛蛟蛙蛭蛔蛛蛤蛐蛞街裁裂袱覃視註詠評詞証詁",
        ],
        [
          "b640",
          "詔詛詐詆訴診訶詖象貂貯貼貳貽賁費賀貴買貶貿貸越超趁跎距跋跚跑跌跛跆軻軸軼辜逮逵週逸進逶鄂郵鄉郾酣酥量鈔鈕鈣鈉鈞鈍鈐鈇鈑閔閏開閑",
        ],
        [
          "b6a1",
          "間閒閎隊階隋陽隅隆隍陲隄雁雅雄集雇雯雲韌項順須飧飪飯飩飲飭馮馭黃黍黑亂傭債傲傳僅傾催傷傻傯僇剿剷剽募勦勤勢勣匯嗟嗨嗓嗦嗎嗜嗇嗑嗣嗤嗯嗚嗡嗅嗆嗥嗉園圓塞塑塘塗塚塔填塌塭塊塢塒塋奧嫁嫉嫌媾媽媼",
        ],
        [
          "b740",
          "媳嫂媲嵩嵯幌幹廉廈弒彙徬微愚意慈感想愛惹愁愈慎慌慄慍愾愴愧愍愆愷戡戢搓搾搞搪搭搽搬搏搜搔損搶搖搗搆敬斟新暗暉暇暈暖暄暘暍會榔業",
        ],
        [
          "b7a1",
          "楚楷楠楔極椰概楊楨楫楞楓楹榆楝楣楛歇歲毀殿毓毽溢溯滓溶滂源溝滇滅溥溘溼溺溫滑準溜滄滔溪溧溴煎煙煩煤煉照煜煬煦煌煥煞煆煨煖爺牒猷獅猿猾瑯瑚瑕瑟瑞瑁琿瑙瑛瑜當畸瘀痰瘁痲痱痺痿痴痳盞盟睛睫睦睞督",
        ],
        [
          "b840",
          "睹睪睬睜睥睨睢矮碎碰碗碘碌碉硼碑碓硿祺祿禁萬禽稜稚稠稔稟稞窟窠筷節筠筮筧粱粳粵經絹綑綁綏絛置罩罪署義羨群聖聘肆肄腱腰腸腥腮腳腫",
        ],
        [
          "b8a1",
          "腹腺腦舅艇蒂葷落萱葵葦葫葉葬葛萼萵葡董葩葭葆虞虜號蛹蜓蜈蜇蜀蛾蛻蜂蜃蜆蜊衙裟裔裙補裘裝裡裊裕裒覜解詫該詳試詩詰誇詼詣誠話誅詭詢詮詬詹詻訾詨豢貊貉賊資賈賄貲賃賂賅跡跟跨路跳跺跪跤跦躲較載軾輊",
        ],
        [
          "b940",
          "辟農運遊道遂達逼違遐遇遏過遍遑逾遁鄒鄗酬酪酩釉鈷鉗鈸鈽鉀鈾鉛鉋鉤鉑鈴鉉鉍鉅鈹鈿鉚閘隘隔隕雍雋雉雊雷電雹零靖靴靶預頑頓頊頒頌飼飴",
        ],
        [
          "b9a1",
          "飽飾馳馱馴髡鳩麂鼎鼓鼠僧僮僥僖僭僚僕像僑僱僎僩兢凳劃劂匱厭嗾嘀嘛嘗嗽嘔嘆嘉嘍嘎嗷嘖嘟嘈嘐嗶團圖塵塾境墓墊塹墅塽壽夥夢夤奪奩嫡嫦嫩嫗嫖嫘嫣孵寞寧寡寥實寨寢寤察對屢嶄嶇幛幣幕幗幔廓廖弊彆彰徹慇",
        ],
        [
          "ba40",
          "愿態慷慢慣慟慚慘慵截撇摘摔撤摸摟摺摑摧搴摭摻敲斡旗旖暢暨暝榜榨榕槁榮槓構榛榷榻榫榴槐槍榭槌榦槃榣歉歌氳漳演滾漓滴漩漾漠漬漏漂漢",
        ],
        [
          "baa1",
          "滿滯漆漱漸漲漣漕漫漯澈漪滬漁滲滌滷熔熙煽熊熄熒爾犒犖獄獐瑤瑣瑪瑰瑭甄疑瘧瘍瘋瘉瘓盡監瞄睽睿睡磁碟碧碳碩碣禎福禍種稱窪窩竭端管箕箋筵算箝箔箏箸箇箄粹粽精綻綰綜綽綾綠緊綴網綱綺綢綿綵綸維緒緇綬",
        ],
        [
          "bb40",
          "罰翠翡翟聞聚肇腐膀膏膈膊腿膂臧臺與舔舞艋蓉蒿蓆蓄蒙蒞蒲蒜蓋蒸蓀蓓蒐蒼蓑蓊蜿蜜蜻蜢蜥蜴蜘蝕蜷蜩裳褂裴裹裸製裨褚裯誦誌語誣認誡誓誤",
        ],
        [
          "bba1",
          "說誥誨誘誑誚誧豪貍貌賓賑賒赫趙趕跼輔輒輕輓辣遠遘遜遣遙遞遢遝遛鄙鄘鄞酵酸酷酴鉸銀銅銘銖鉻銓銜銨鉼銑閡閨閩閣閥閤隙障際雌雒需靼鞅韶頗領颯颱餃餅餌餉駁骯骰髦魁魂鳴鳶鳳麼鼻齊億儀僻僵價儂儈儉儅凜",
        ],
        [
          "bc40",
          "劇劈劉劍劊勰厲嘮嘻嘹嘲嘿嘴嘩噓噎噗噴嘶嘯嘰墀墟增墳墜墮墩墦奭嬉嫻嬋嫵嬌嬈寮寬審寫層履嶝嶔幢幟幡廢廚廟廝廣廠彈影德徵慶慧慮慝慕憂",
        ],
        [
          "bca1",
          "慼慰慫慾憧憐憫憎憬憚憤憔憮戮摩摯摹撞撲撈撐撰撥撓撕撩撒撮播撫撚撬撙撢撳敵敷數暮暫暴暱樣樟槨樁樞標槽模樓樊槳樂樅槭樑歐歎殤毅毆漿潼澄潑潦潔澆潭潛潸潮澎潺潰潤澗潘滕潯潠潟熟熬熱熨牖犛獎獗瑩璋璃",
        ],
        [
          "bd40",
          "瑾璀畿瘠瘩瘟瘤瘦瘡瘢皚皺盤瞎瞇瞌瞑瞋磋磅確磊碾磕碼磐稿稼穀稽稷稻窯窮箭箱範箴篆篇篁箠篌糊締練緯緻緘緬緝編緣線緞緩綞緙緲緹罵罷羯",
        ],
        [
          "bda1",
          "翩耦膛膜膝膠膚膘蔗蔽蔚蓮蔬蔭蔓蔑蔣蔡蔔蓬蔥蓿蔆螂蝴蝶蝠蝦蝸蝨蝙蝗蝌蝓衛衝褐複褒褓褕褊誼諒談諄誕請諸課諉諂調誰論諍誶誹諛豌豎豬賠賞賦賤賬賭賢賣賜質賡赭趟趣踫踐踝踢踏踩踟踡踞躺輝輛輟輩輦輪輜輞",
        ],
        [
          "be40",
          "輥適遮遨遭遷鄰鄭鄧鄱醇醉醋醃鋅銻銷鋪銬鋤鋁銳銼鋒鋇鋰銲閭閱霄霆震霉靠鞍鞋鞏頡頫頜颳養餓餒餘駝駐駟駛駑駕駒駙骷髮髯鬧魅魄魷魯鴆鴉",
        ],
        [
          "bea1",
          "鴃麩麾黎墨齒儒儘儔儐儕冀冪凝劑劓勳噙噫噹噩噤噸噪器噥噱噯噬噢噶壁墾壇壅奮嬝嬴學寰導彊憲憑憩憊懍憶憾懊懈戰擅擁擋撻撼據擄擇擂操撿擒擔撾整曆曉暹曄曇暸樽樸樺橙橫橘樹橄橢橡橋橇樵機橈歙歷氅濂澱澡",
        ],
        [
          "bf40",
          "濃澤濁澧澳激澹澶澦澠澴熾燉燐燒燈燕熹燎燙燜燃燄獨璜璣璘璟璞瓢甌甍瘴瘸瘺盧盥瞠瞞瞟瞥磨磚磬磧禦積穎穆穌穋窺篙簑築篤篛篡篩篦糕糖縊",
        ],
        [
          "bfa1",
          "縑縈縛縣縞縝縉縐罹羲翰翱翮耨膳膩膨臻興艘艙蕊蕙蕈蕨蕩蕃蕉蕭蕪蕞螃螟螞螢融衡褪褲褥褫褡親覦諦諺諫諱謀諜諧諮諾謁謂諷諭諳諶諼豫豭貓賴蹄踱踴蹂踹踵輻輯輸輳辨辦遵遴選遲遼遺鄴醒錠錶鋸錳錯錢鋼錫錄錚",
        ],
        [
          "c040",
          "錐錦錡錕錮錙閻隧隨險雕霎霑霖霍霓霏靛靜靦鞘頰頸頻頷頭頹頤餐館餞餛餡餚駭駢駱骸骼髻髭鬨鮑鴕鴣鴦鴨鴒鴛默黔龍龜優償儡儲勵嚎嚀嚐嚅嚇",
        ],
        [
          "c0a1",
          "嚏壕壓壑壎嬰嬪嬤孺尷屨嶼嶺嶽嶸幫彌徽應懂懇懦懋戲戴擎擊擘擠擰擦擬擱擢擭斂斃曙曖檀檔檄檢檜櫛檣橾檗檐檠歜殮毚氈濘濱濟濠濛濤濫濯澀濬濡濩濕濮濰燧營燮燦燥燭燬燴燠爵牆獰獲璩環璦璨癆療癌盪瞳瞪瞰瞬",
        ],
        [
          "c140",
          "瞧瞭矯磷磺磴磯礁禧禪穗窿簇簍篾篷簌篠糠糜糞糢糟糙糝縮績繆縷縲繃縫總縱繅繁縴縹繈縵縿縯罄翳翼聱聲聰聯聳臆臃膺臂臀膿膽臉膾臨舉艱薪",
        ],
        [
          "c1a1",
          "薄蕾薜薑薔薯薛薇薨薊虧蟀蟑螳蟒蟆螫螻螺蟈蟋褻褶襄褸褽覬謎謗謙講謊謠謝謄謐豁谿豳賺賽購賸賻趨蹉蹋蹈蹊轄輾轂轅輿避遽還邁邂邀鄹醣醞醜鍍鎂錨鍵鍊鍥鍋錘鍾鍬鍛鍰鍚鍔闊闋闌闈闆隱隸雖霜霞鞠韓顆颶餵騁",
        ],
        [
          "c240",
          "駿鮮鮫鮪鮭鴻鴿麋黏點黜黝黛鼾齋叢嚕嚮壙壘嬸彝懣戳擴擲擾攆擺擻擷斷曜朦檳檬櫃檻檸櫂檮檯歟歸殯瀉瀋濾瀆濺瀑瀏燻燼燾燸獷獵璧璿甕癖癘",
        ],
        [
          "c2a1",
          "癒瞽瞿瞻瞼礎禮穡穢穠竄竅簫簧簪簞簣簡糧織繕繞繚繡繒繙罈翹翻職聶臍臏舊藏薩藍藐藉薰薺薹薦蟯蟬蟲蟠覆覲觴謨謹謬謫豐贅蹙蹣蹦蹤蹟蹕軀轉轍邇邃邈醫醬釐鎔鎊鎖鎢鎳鎮鎬鎰鎘鎚鎗闔闖闐闕離雜雙雛雞霤鞣鞦",
        ],
        [
          "c340",
          "鞭韹額顏題顎顓颺餾餿餽餮馥騎髁鬃鬆魏魎魍鯊鯉鯽鯈鯀鵑鵝鵠黠鼕鼬儳嚥壞壟壢寵龐廬懲懷懶懵攀攏曠曝櫥櫝櫚櫓瀛瀟瀨瀚瀝瀕瀘爆爍牘犢獸",
        ],
        [
          "c3a1",
          "獺璽瓊瓣疇疆癟癡矇礙禱穫穩簾簿簸簽簷籀繫繭繹繩繪羅繳羶羹羸臘藩藝藪藕藤藥藷蟻蠅蠍蟹蟾襠襟襖襞譁譜識證譚譎譏譆譙贈贊蹼蹲躇蹶蹬蹺蹴轔轎辭邊邋醱醮鏡鏑鏟鏃鏈鏜鏝鏖鏢鏍鏘鏤鏗鏨關隴難霪霧靡韜韻類",
        ],
        [
          "c440",
          "願顛颼饅饉騖騙鬍鯨鯧鯖鯛鶉鵡鵲鵪鵬麒麗麓麴勸嚨嚷嚶嚴嚼壤孀孃孽寶巉懸懺攘攔攙曦朧櫬瀾瀰瀲爐獻瓏癢癥礦礪礬礫竇競籌籃籍糯糰辮繽繼",
        ],
        [
          "c4a1",
          "纂罌耀臚艦藻藹蘑藺蘆蘋蘇蘊蠔蠕襤覺觸議譬警譯譟譫贏贍躉躁躅躂醴釋鐘鐃鏽闡霰飄饒饑馨騫騰騷騵鰓鰍鹹麵黨鼯齟齣齡儷儸囁囀囂夔屬巍懼懾攝攜斕曩櫻欄櫺殲灌爛犧瓖瓔癩矓籐纏續羼蘗蘭蘚蠣蠢蠡蠟襪襬覽譴",
        ],
        [
          "c540",
          "護譽贓躊躍躋轟辯醺鐮鐳鐵鐺鐸鐲鐫闢霸霹露響顧顥饗驅驃驀騾髏魔魑鰭鰥鶯鶴鷂鶸麝黯鼙齜齦齧儼儻囈囊囉孿巔巒彎懿攤權歡灑灘玀瓤疊癮癬",
        ],
        [
          "c5a1",
          "禳籠籟聾聽臟襲襯觼讀贖贗躑躓轡酈鑄鑑鑒霽霾韃韁顫饕驕驍髒鬚鱉鰱鰾鰻鷓鷗鼴齬齪龔囌巖戀攣攫攪曬欐瓚竊籤籣籥纓纖纔臢蘸蘿蠱變邐邏鑣鑠鑤靨顯饜驚驛驗髓體髑鱔鱗鱖鷥麟黴囑壩攬灞癱癲矗罐羈蠶蠹衢讓讒",
        ],
        [
          "c640",
          "讖艷贛釀鑪靂靈靄韆顰驟鬢魘鱟鷹鷺鹼鹽鼇齷齲廳欖灣籬籮蠻觀躡釁鑲鑰顱饞髖鬣黌灤矚讚鑷韉驢驥纜讜躪釅鑽鑾鑼鱷鱸黷豔鑿鸚爨驪鬱鸛鸞籲",
        ],
        [
          "c940",
          "乂乜凵匚厂万丌乇亍囗兀屮彳丏冇与丮亓仂仉仈冘勼卬厹圠夃夬尐巿旡殳毌气爿丱丼仨仜仩仡仝仚刌匜卌圢圣夗夯宁宄尒尻屴屳帄庀庂忉戉扐氕",
        ],
        [
          "c9a1",
          "氶汃氿氻犮犰玊禸肊阞伎优伬仵伔仱伀价伈伝伂伅伢伓伄仴伒冱刓刉刐劦匢匟卍厊吇囡囟圮圪圴夼妀奼妅奻奾奷奿孖尕尥屼屺屻屾巟幵庄异弚彴忕忔忏扜扞扤扡扦扢扙扠扚扥旯旮朾朹朸朻机朿朼朳氘汆汒汜汏汊汔汋",
        ],
        [
          "ca40",
          "汌灱牞犴犵玎甪癿穵网艸艼芀艽艿虍襾邙邗邘邛邔阢阤阠阣佖伻佢佉体佤伾佧佒佟佁佘伭伳伿佡冏冹刜刞刡劭劮匉卣卲厎厏吰吷吪呔呅吙吜吥吘",
        ],
        [
          "caa1",
          "吽呏呁吨吤呇囮囧囥坁坅坌坉坋坒夆奀妦妘妠妗妎妢妐妏妧妡宎宒尨尪岍岏岈岋岉岒岊岆岓岕巠帊帎庋庉庌庈庍弅弝彸彶忒忑忐忭忨忮忳忡忤忣忺忯忷忻怀忴戺抃抌抎抏抔抇扱扻扺扰抁抈扷扽扲扴攷旰旴旳旲旵杅杇",
        ],
        [
          "cb40",
          "杙杕杌杈杝杍杚杋毐氙氚汸汧汫沄沋沏汱汯汩沚汭沇沕沜汦汳汥汻沎灴灺牣犿犽狃狆狁犺狅玕玗玓玔玒町甹疔疕皁礽耴肕肙肐肒肜芐芏芅芎芑芓",
        ],
        [
          "cba1",
          "芊芃芄豸迉辿邟邡邥邞邧邠阰阨阯阭丳侘佼侅佽侀侇佶佴侉侄佷佌侗佪侚佹侁佸侐侜侔侞侒侂侕佫佮冞冼冾刵刲刳剆刱劼匊匋匼厒厔咇呿咁咑咂咈呫呺呾呥呬呴呦咍呯呡呠咘呣呧呤囷囹坯坲坭坫坱坰坶垀坵坻坳坴坢",
        ],
        [
          "cc40",
          "坨坽夌奅妵妺姏姎妲姌姁妶妼姃姖妱妽姀姈妴姇孢孥宓宕屄屇岮岤岠岵岯岨岬岟岣岭岢岪岧岝岥岶岰岦帗帔帙弨弢弣弤彔徂彾彽忞忥怭怦怙怲怋",
        ],
        [
          "cca1",
          "怴怊怗怳怚怞怬怢怍怐怮怓怑怌怉怜戔戽抭抴拑抾抪抶拊抮抳抯抻抩抰抸攽斨斻昉旼昄昒昈旻昃昋昍昅旽昑昐曶朊枅杬枎枒杶杻枘枆构杴枍枌杺枟枑枙枃杽极杸杹枔欥殀歾毞氝沓泬泫泮泙沶泔沭泧沷泐泂沺泃泆泭泲",
        ],
        [
          "cd40",
          "泒泝沴沊沝沀泞泀洰泍泇沰泹泏泩泑炔炘炅炓炆炄炑炖炂炚炃牪狖狋狘狉狜狒狔狚狌狑玤玡玭玦玢玠玬玝瓝瓨甿畀甾疌疘皯盳盱盰盵矸矼矹矻矺",
        ],
        [
          "cda1",
          "矷祂礿秅穸穻竻籵糽耵肏肮肣肸肵肭舠芠苀芫芚芘芛芵芧芮芼芞芺芴芨芡芩苂芤苃芶芢虰虯虭虮豖迒迋迓迍迖迕迗邲邴邯邳邰阹阽阼阺陃俍俅俓侲俉俋俁俔俜俙侻侳俛俇俖侺俀侹俬剄剉勀勂匽卼厗厖厙厘咺咡咭咥哏",
        ],
        [
          "ce40",
          "哃茍咷咮哖咶哅哆咠呰咼咢咾呲哞咰垵垞垟垤垌垗垝垛垔垘垏垙垥垚垕壴复奓姡姞姮娀姱姝姺姽姼姶姤姲姷姛姩姳姵姠姾姴姭宨屌峐峘峌峗峋峛",
        ],
        [
          "cea1",
          "峞峚峉峇峊峖峓峔峏峈峆峎峟峸巹帡帢帣帠帤庰庤庢庛庣庥弇弮彖徆怷怹恔恲恞恅恓恇恉恛恌恀恂恟怤恄恘恦恮扂扃拏挍挋拵挎挃拫拹挏挌拸拶挀挓挔拺挕拻拰敁敃斪斿昶昡昲昵昜昦昢昳昫昺昝昴昹昮朏朐柁柲柈枺",
        ],
        [
          "cf40",
          "柜枻柸柘柀枷柅柫柤柟枵柍枳柷柶柮柣柂枹柎柧柰枲柼柆柭柌枮柦柛柺柉柊柃柪柋欨殂殄殶毖毘毠氠氡洨洴洭洟洼洿洒洊泚洳洄洙洺洚洑洀洝浂",
        ],
        [
          "cfa1",
          "洁洘洷洃洏浀洇洠洬洈洢洉洐炷炟炾炱炰炡炴炵炩牁牉牊牬牰牳牮狊狤狨狫狟狪狦狣玅珌珂珈珅玹玶玵玴珫玿珇玾珃珆玸珋瓬瓮甮畇畈疧疪癹盄眈眃眄眅眊盷盻盺矧矨砆砑砒砅砐砏砎砉砃砓祊祌祋祅祄秕种秏秖秎窀",
        ],
        [
          "d040",
          "穾竑笀笁籺籸籹籿粀粁紃紈紁罘羑羍羾耇耎耏耔耷胘胇胠胑胈胂胐胅胣胙胜胊胕胉胏胗胦胍臿舡芔苙苾苹茇苨茀苕茺苫苖苴苬苡苲苵茌苻苶苰苪",
        ],
        [
          "d0a1",
          "苤苠苺苳苭虷虴虼虳衁衎衧衪衩觓訄訇赲迣迡迮迠郱邽邿郕郅邾郇郋郈釔釓陔陏陑陓陊陎倞倅倇倓倢倰倛俵俴倳倷倬俶俷倗倜倠倧倵倯倱倎党冔冓凊凄凅凈凎剡剚剒剞剟剕剢勍匎厞唦哢唗唒哧哳哤唚哿唄唈哫唑唅哱",
        ],
        [
          "d140",
          "唊哻哷哸哠唎唃唋圁圂埌堲埕埒垺埆垽垼垸垶垿埇埐垹埁夎奊娙娖娭娮娕娏娗娊娞娳孬宧宭宬尃屖屔峬峿峮峱峷崀峹帩帨庨庮庪庬弳弰彧恝恚恧",
        ],
        [
          "d1a1",
          "恁悢悈悀悒悁悝悃悕悛悗悇悜悎戙扆拲挐捖挬捄捅挶捃揤挹捋捊挼挩捁挴捘捔捙挭捇挳捚捑挸捗捀捈敊敆旆旃旄旂晊晟晇晑朒朓栟栚桉栲栳栻桋桏栖栱栜栵栫栭栯桎桄栴栝栒栔栦栨栮桍栺栥栠欬欯欭欱欴歭肂殈毦毤",
        ],
        [
          "d240",
          "毨毣毢毧氥浺浣浤浶洍浡涒浘浢浭浯涑涍淯浿涆浞浧浠涗浰浼浟涂涘洯浨涋浾涀涄洖涃浻浽浵涐烜烓烑烝烋缹烢烗烒烞烠烔烍烅烆烇烚烎烡牂牸",
        ],
        [
          "d2a1",
          "牷牶猀狺狴狾狶狳狻猁珓珙珥珖玼珧珣珩珜珒珛珔珝珚珗珘珨瓞瓟瓴瓵甡畛畟疰痁疻痄痀疿疶疺皊盉眝眛眐眓眒眣眑眕眙眚眢眧砣砬砢砵砯砨砮砫砡砩砳砪砱祔祛祏祜祓祒祑秫秬秠秮秭秪秜秞秝窆窉窅窋窌窊窇竘笐",
        ],
        [
          "d340",
          "笄笓笅笏笈笊笎笉笒粄粑粊粌粈粍粅紞紝紑紎紘紖紓紟紒紏紌罜罡罞罠罝罛羖羒翃翂翀耖耾耹胺胲胹胵脁胻脀舁舯舥茳茭荄茙荑茥荖茿荁茦茜茢",
        ],
        [
          "d3a1",
          "荂荎茛茪茈茼荍茖茤茠茷茯茩荇荅荌荓茞茬荋茧荈虓虒蚢蚨蚖蚍蚑蚞蚇蚗蚆蚋蚚蚅蚥蚙蚡蚧蚕蚘蚎蚝蚐蚔衃衄衭衵衶衲袀衱衿衯袃衾衴衼訒豇豗豻貤貣赶赸趵趷趶軑軓迾迵适迿迻逄迼迶郖郠郙郚郣郟郥郘郛郗郜郤酐",
        ],
        [
          "d440",
          "酎酏釕釢釚陜陟隼飣髟鬯乿偰偪偡偞偠偓偋偝偲偈偍偁偛偊偢倕偅偟偩偫偣偤偆偀偮偳偗偑凐剫剭剬剮勖勓匭厜啵啶唼啍啐唴唪啑啢唶唵唰啒啅",
        ],
        [
          "d4a1",
          "唌唲啥啎唹啈唭唻啀啋圊圇埻堔埢埶埜埴堀埭埽堈埸堋埳埏堇埮埣埲埥埬埡堎埼堐埧堁堌埱埩埰堍堄奜婠婘婕婧婞娸娵婭婐婟婥婬婓婤婗婃婝婒婄婛婈媎娾婍娹婌婰婩婇婑婖婂婜孲孮寁寀屙崞崋崝崚崠崌崨崍崦崥崏",
        ],
        [
          "d540",
          "崰崒崣崟崮帾帴庱庴庹庲庳弶弸徛徖徟悊悐悆悾悰悺惓惔惏惤惙惝惈悱惛悷惊悿惃惍惀挲捥掊掂捽掽掞掭掝掗掫掎捯掇掐据掯捵掜捭掮捼掤挻掟",
        ],
        [
          "d5a1",
          "捸掅掁掑掍捰敓旍晥晡晛晙晜晢朘桹梇梐梜桭桮梮梫楖桯梣梬梩桵桴梲梏桷梒桼桫桲梪梀桱桾梛梖梋梠梉梤桸桻梑梌梊桽欶欳欷欸殑殏殍殎殌氪淀涫涴涳湴涬淩淢涷淶淔渀淈淠淟淖涾淥淜淝淛淴淊涽淭淰涺淕淂淏淉",
        ],
        [
          "d640",
          "淐淲淓淽淗淍淣涻烺焍烷焗烴焌烰焄烳焐烼烿焆焓焀烸烶焋焂焎牾牻牼牿猝猗猇猑猘猊猈狿猏猞玈珶珸珵琄琁珽琇琀珺珼珿琌琋珴琈畤畣痎痒痏",
        ],
        [
          "d6a1",
          "痋痌痑痐皏皉盓眹眯眭眱眲眴眳眽眥眻眵硈硒硉硍硊硌砦硅硐祤祧祩祪祣祫祡离秺秸秶秷窏窔窐笵筇笴笥笰笢笤笳笘笪笝笱笫笭笯笲笸笚笣粔粘粖粣紵紽紸紶紺絅紬紩絁絇紾紿絊紻紨罣羕羜羝羛翊翋翍翐翑翇翏翉耟",
        ],
        [
          "d740",
          "耞耛聇聃聈脘脥脙脛脭脟脬脞脡脕脧脝脢舑舸舳舺舴舲艴莐莣莨莍荺荳莤荴莏莁莕莙荵莔莩荽莃莌莝莛莪莋荾莥莯莈莗莰荿莦莇莮荶莚虙虖蚿蚷",
        ],
        [
          "d7a1",
          "蛂蛁蛅蚺蚰蛈蚹蚳蚸蛌蚴蚻蚼蛃蚽蚾衒袉袕袨袢袪袚袑袡袟袘袧袙袛袗袤袬袌袓袎覂觖觙觕訰訧訬訞谹谻豜豝豽貥赽赻赹趼跂趹趿跁軘軞軝軜軗軠軡逤逋逑逜逌逡郯郪郰郴郲郳郔郫郬郩酖酘酚酓酕釬釴釱釳釸釤釹釪",
        ],
        [
          "d840",
          "釫釷釨釮镺閆閈陼陭陫陱陯隿靪頄飥馗傛傕傔傞傋傣傃傌傎傝偨傜傒傂傇兟凔匒匑厤厧喑喨喥喭啷噅喢喓喈喏喵喁喣喒喤啽喌喦啿喕喡喎圌堩堷",
        ],
        [
          "d8a1",
          "堙堞堧堣堨埵塈堥堜堛堳堿堶堮堹堸堭堬堻奡媯媔媟婺媢媞婸媦婼媥媬媕媮娷媄媊媗媃媋媩婻婽媌媜媏媓媝寪寍寋寔寑寊寎尌尰崷嵃嵫嵁嵋崿崵嵑嵎嵕崳崺嵒崽崱嵙嵂崹嵉崸崼崲崶嵀嵅幄幁彘徦徥徫惉悹惌惢惎惄愔",
        ],
        [
          "d940",
          "惲愊愖愅惵愓惸惼惾惁愃愘愝愐惿愄愋扊掔掱掰揎揥揨揯揃撝揳揊揠揶揕揲揵摡揟掾揝揜揄揘揓揂揇揌揋揈揰揗揙攲敧敪敤敜敨敥斌斝斞斮旐旒",
        ],
        [
          "d9a1",
          "晼晬晻暀晱晹晪晲朁椌棓椄棜椪棬棪棱椏棖棷棫棤棶椓椐棳棡椇棌椈楰梴椑棯棆椔棸棐棽棼棨椋椊椗棎棈棝棞棦棴棑椆棔棩椕椥棇欹欻欿欼殔殗殙殕殽毰毲毳氰淼湆湇渟湉溈渼渽湅湢渫渿湁湝湳渜渳湋湀湑渻渃渮湞",
        ],
        [
          "da40",
          "湨湜湡渱渨湠湱湫渹渢渰湓湥渧湸湤湷湕湹湒湦渵渶湚焠焞焯烻焮焱焣焥焢焲焟焨焺焛牋牚犈犉犆犅犋猒猋猰猢猱猳猧猲猭猦猣猵猌琮琬琰琫琖",
        ],
        [
          "daa1",
          "琚琡琭琱琤琣琝琩琠琲瓻甯畯畬痧痚痡痦痝痟痤痗皕皒盚睆睇睄睍睅睊睎睋睌矞矬硠硤硥硜硭硱硪确硰硩硨硞硢祴祳祲祰稂稊稃稌稄窙竦竤筊笻筄筈筌筎筀筘筅粢粞粨粡絘絯絣絓絖絧絪絏絭絜絫絒絔絩絑絟絎缾缿罥",
        ],
        [
          "db40",
          "罦羢羠羡翗聑聏聐胾胔腃腊腒腏腇脽腍脺臦臮臷臸臹舄舼舽舿艵茻菏菹萣菀菨萒菧菤菼菶萐菆菈菫菣莿萁菝菥菘菿菡菋菎菖菵菉萉萏菞萑萆菂菳",
        ],
        [
          "dba1",
          "菕菺菇菑菪萓菃菬菮菄菻菗菢萛菛菾蛘蛢蛦蛓蛣蛚蛪蛝蛫蛜蛬蛩蛗蛨蛑衈衖衕袺裗袹袸裀袾袶袼袷袽袲褁裉覕覘覗觝觚觛詎詍訹詙詀詗詘詄詅詒詈詑詊詌詏豟貁貀貺貾貰貹貵趄趀趉跘跓跍跇跖跜跏跕跙跈跗跅軯軷軺",
        ],
        [
          "dc40",
          "軹軦軮軥軵軧軨軶軫軱軬軴軩逭逴逯鄆鄬鄄郿郼鄈郹郻鄁鄀鄇鄅鄃酡酤酟酢酠鈁鈊鈥鈃鈚鈦鈏鈌鈀鈒釿釽鈆鈄鈧鈂鈜鈤鈙鈗鈅鈖镻閍閌閐隇陾隈",
        ],
        [
          "dca1",
          "隉隃隀雂雈雃雱雰靬靰靮頇颩飫鳦黹亃亄亶傽傿僆傮僄僊傴僈僂傰僁傺傱僋僉傶傸凗剺剸剻剼嗃嗛嗌嗐嗋嗊嗝嗀嗔嗄嗩喿嗒喍嗏嗕嗢嗖嗈嗲嗍嗙嗂圔塓塨塤塏塍塉塯塕塎塝塙塥塛堽塣塱壼嫇嫄嫋媺媸媱媵媰媿嫈媻嫆",
        ],
        [
          "dd40",
          "媷嫀嫊媴媶嫍媹媐寖寘寙尟尳嵱嵣嵊嵥嵲嵬嵞嵨嵧嵢巰幏幎幊幍幋廅廌廆廋廇彀徯徭惷慉慊愫慅愶愲愮慆愯慏愩慀戠酨戣戥戤揅揱揫搐搒搉搠搤",
        ],
        [
          "dda1",
          "搳摃搟搕搘搹搷搢搣搌搦搰搨摁搵搯搊搚摀搥搧搋揧搛搮搡搎敯斒旓暆暌暕暐暋暊暙暔晸朠楦楟椸楎楢楱椿楅楪椹楂楗楙楺楈楉椵楬椳椽楥棰楸椴楩楀楯楄楶楘楁楴楌椻楋椷楜楏楑椲楒椯楻椼歆歅歃歂歈歁殛嗀毻毼",
        ],
        [
          "de40",
          "毹毷毸溛滖滈溏滀溟溓溔溠溱溹滆滒溽滁溞滉溷溰滍溦滏溲溾滃滜滘溙溒溎溍溤溡溿溳滐滊溗溮溣煇煔煒煣煠煁煝煢煲煸煪煡煂煘煃煋煰煟煐煓",
        ],
        [
          "dea1",
          "煄煍煚牏犍犌犑犐犎猼獂猻猺獀獊獉瑄瑊瑋瑒瑑瑗瑀瑏瑐瑎瑂瑆瑍瑔瓡瓿瓾瓽甝畹畷榃痯瘏瘃痷痾痼痹痸瘐痻痶痭痵痽皙皵盝睕睟睠睒睖睚睩睧睔睙睭矠碇碚碔碏碄碕碅碆碡碃硹碙碀碖硻祼禂祽祹稑稘稙稒稗稕稢稓",
        ],
        [
          "df40",
          "稛稐窣窢窞竫筦筤筭筴筩筲筥筳筱筰筡筸筶筣粲粴粯綈綆綀綍絿綅絺綎絻綃絼綌綔綄絽綒罭罫罧罨罬羦羥羧翛翜耡腤腠腷腜腩腛腢腲朡腞腶腧腯",
        ],
        [
          "dfa1",
          "腄腡舝艉艄艀艂艅蓱萿葖葶葹蒏蒍葥葑葀蒆葧萰葍葽葚葙葴葳葝蔇葞萷萺萴葺葃葸萲葅萩菙葋萯葂萭葟葰萹葎葌葒葯蓅蒎萻葇萶萳葨葾葄萫葠葔葮葐蜋蜄蛷蜌蛺蛖蛵蝍蛸蜎蜉蜁蛶蜍蜅裖裋裍裎裞裛裚裌裐覅覛觟觥觤",
        ],
        [
          "e040",
          "觡觠觢觜触詶誆詿詡訿詷誂誄詵誃誁詴詺谼豋豊豥豤豦貆貄貅賌赨赩趑趌趎趏趍趓趔趐趒跰跠跬跱跮跐跩跣跢跧跲跫跴輆軿輁輀輅輇輈輂輋遒逿",
        ],
        [
          "e0a1",
          "遄遉逽鄐鄍鄏鄑鄖鄔鄋鄎酮酯鉈鉒鈰鈺鉦鈳鉥鉞銃鈮鉊鉆鉭鉬鉏鉠鉧鉯鈶鉡鉰鈱鉔鉣鉐鉲鉎鉓鉌鉖鈲閟閜閞閛隒隓隑隗雎雺雽雸雵靳靷靸靲頏頍頎颬飶飹馯馲馰馵骭骫魛鳪鳭鳧麀黽僦僔僗僨僳僛僪僝僤僓僬僰僯僣僠",
        ],
        [
          "e140",
          "凘劀劁勩勫匰厬嘧嘕嘌嘒嗼嘏嘜嘁嘓嘂嗺嘝嘄嗿嗹墉塼墐墘墆墁塿塴墋塺墇墑墎塶墂墈塻墔墏壾奫嫜嫮嫥嫕嫪嫚嫭嫫嫳嫢嫠嫛嫬嫞嫝嫙嫨嫟孷寠",
        ],
        [
          "e1a1",
          "寣屣嶂嶀嵽嶆嵺嶁嵷嶊嶉嶈嵾嵼嶍嵹嵿幘幙幓廘廑廗廎廜廕廙廒廔彄彃彯徶愬愨慁慞慱慳慒慓慲慬憀慴慔慺慛慥愻慪慡慖戩戧戫搫摍摛摝摴摶摲摳摽摵摦撦摎撂摞摜摋摓摠摐摿搿摬摫摙摥摷敳斠暡暠暟朅朄朢榱榶槉",
        ],
        [
          "e240",
          "榠槎榖榰榬榼榑榙榎榧榍榩榾榯榿槄榽榤槔榹槊榚槏榳榓榪榡榞槙榗榐槂榵榥槆歊歍歋殞殟殠毃毄毾滎滵滱漃漥滸漷滻漮漉潎漙漚漧漘漻漒滭漊",
        ],
        [
          "e2a1",
          "漶潳滹滮漭潀漰漼漵滫漇漎潃漅滽滶漹漜滼漺漟漍漞漈漡熇熐熉熀熅熂熏煻熆熁熗牄牓犗犕犓獃獍獑獌瑢瑳瑱瑵瑲瑧瑮甀甂甃畽疐瘖瘈瘌瘕瘑瘊瘔皸瞁睼瞅瞂睮瞀睯睾瞃碲碪碴碭碨硾碫碞碥碠碬碢碤禘禊禋禖禕禔禓",
        ],
        [
          "e340",
          "禗禈禒禐稫穊稰稯稨稦窨窫窬竮箈箜箊箑箐箖箍箌箛箎箅箘劄箙箤箂粻粿粼粺綧綷緂綣綪緁緀緅綝緎緄緆緋緌綯綹綖綼綟綦綮綩綡緉罳翢翣翥翞",
        ],
        [
          "e3a1",
          "耤聝聜膉膆膃膇膍膌膋舕蒗蒤蒡蒟蒺蓎蓂蒬蒮蒫蒹蒴蓁蓍蒪蒚蒱蓐蒝蒧蒻蒢蒔蓇蓌蒛蒩蒯蒨蓖蒘蒶蓏蒠蓗蓔蓒蓛蒰蒑虡蜳蜣蜨蝫蝀蜮蜞蜡蜙蜛蝃蜬蝁蜾蝆蜠蜲蜪蜭蜼蜒蜺蜱蜵蝂蜦蜧蜸蜤蜚蜰蜑裷裧裱裲裺裾裮裼裶裻",
        ],
        [
          "e440",
          "裰裬裫覝覡覟覞觩觫觨誫誙誋誒誏誖谽豨豩賕賏賗趖踉踂跿踍跽踊踃踇踆踅跾踀踄輐輑輎輍鄣鄜鄠鄢鄟鄝鄚鄤鄡鄛酺酲酹酳銥銤鉶銛鉺銠銔銪銍",
        ],
        [
          "e4a1",
          "銦銚銫鉹銗鉿銣鋮銎銂銕銢鉽銈銡銊銆銌銙銧鉾銇銩銝銋鈭隞隡雿靘靽靺靾鞃鞀鞂靻鞄鞁靿韎韍頖颭颮餂餀餇馝馜駃馹馻馺駂馽駇骱髣髧鬾鬿魠魡魟鳱鳲鳵麧僿儃儰僸儆儇僶僾儋儌僽儊劋劌勱勯噈噂噌嘵噁噊噉噆噘",
        ],
        [
          "e540",
          "噚噀嘳嘽嘬嘾嘸嘪嘺圚墫墝墱墠墣墯墬墥墡壿嫿嫴嫽嫷嫶嬃嫸嬂嫹嬁嬇嬅嬏屧嶙嶗嶟嶒嶢嶓嶕嶠嶜嶡嶚嶞幩幝幠幜緳廛廞廡彉徲憋憃慹憱憰憢憉",
        ],
        [
          "e5a1",
          "憛憓憯憭憟憒憪憡憍慦憳戭摮摰撖撠撅撗撜撏撋撊撌撣撟摨撱撘敶敺敹敻斲斳暵暰暩暲暷暪暯樀樆樗槥槸樕槱槤樠槿槬槢樛樝槾樧槲槮樔槷槧橀樈槦槻樍槼槫樉樄樘樥樏槶樦樇槴樖歑殥殣殢殦氁氀毿氂潁漦潾澇濆澒",
        ],
        [
          "e640",
          "澍澉澌潢潏澅潚澖潶潬澂潕潲潒潐潗澔澓潝漀潡潫潽潧澐潓澋潩潿澕潣潷潪潻熲熯熛熰熠熚熩熵熝熥熞熤熡熪熜熧熳犘犚獘獒獞獟獠獝獛獡獚獙",
        ],
        [
          "e6a1",
          "獢璇璉璊璆璁瑽璅璈瑼瑹甈甇畾瘥瘞瘙瘝瘜瘣瘚瘨瘛皜皝皞皛瞍瞏瞉瞈磍碻磏磌磑磎磔磈磃磄磉禚禡禠禜禢禛歶稹窲窴窳箷篋箾箬篎箯箹篊箵糅糈糌糋緷緛緪緧緗緡縃緺緦緶緱緰緮緟罶羬羰羭翭翫翪翬翦翨聤聧膣膟",
        ],
        [
          "e740",
          "膞膕膢膙膗舖艏艓艒艐艎艑蔤蔻蔏蔀蔩蔎蔉蔍蔟蔊蔧蔜蓻蔫蓺蔈蔌蓴蔪蓲蔕蓷蓫蓳蓼蔒蓪蓩蔖蓾蔨蔝蔮蔂蓽蔞蓶蔱蔦蓧蓨蓰蓯蓹蔘蔠蔰蔋蔙蔯虢",
        ],
        [
          "e7a1",
          "蝖蝣蝤蝷蟡蝳蝘蝔蝛蝒蝡蝚蝑蝞蝭蝪蝐蝎蝟蝝蝯蝬蝺蝮蝜蝥蝏蝻蝵蝢蝧蝩衚褅褌褔褋褗褘褙褆褖褑褎褉覢覤覣觭觰觬諏諆誸諓諑諔諕誻諗誾諀諅諘諃誺誽諙谾豍貏賥賟賙賨賚賝賧趠趜趡趛踠踣踥踤踮踕踛踖踑踙踦踧",
        ],
        [
          "e840",
          "踔踒踘踓踜踗踚輬輤輘輚輠輣輖輗遳遰遯遧遫鄯鄫鄩鄪鄲鄦鄮醅醆醊醁醂醄醀鋐鋃鋄鋀鋙銶鋏鋱鋟鋘鋩鋗鋝鋌鋯鋂鋨鋊鋈鋎鋦鋍鋕鋉鋠鋞鋧鋑鋓",
        ],
        [
          "e8a1",
          "銵鋡鋆銴镼閬閫閮閰隤隢雓霅霈霂靚鞊鞎鞈韐韏頞頝頦頩頨頠頛頧颲餈飺餑餔餖餗餕駜駍駏駓駔駎駉駖駘駋駗駌骳髬髫髳髲髱魆魃魧魴魱魦魶魵魰魨魤魬鳼鳺鳽鳿鳷鴇鴀鳹鳻鴈鴅鴄麃黓鼏鼐儜儓儗儚儑凞匴叡噰噠噮",
        ],
        [
          "e940",
          "噳噦噣噭噲噞噷圜圛壈墽壉墿墺壂墼壆嬗嬙嬛嬡嬔嬓嬐嬖嬨嬚嬠嬞寯嶬嶱嶩嶧嶵嶰嶮嶪嶨嶲嶭嶯嶴幧幨幦幯廩廧廦廨廥彋徼憝憨憖懅憴懆懁懌憺",
        ],
        [
          "e9a1",
          "憿憸憌擗擖擐擏擉撽撉擃擛擳擙攳敿敼斢曈暾曀曊曋曏暽暻暺曌朣樴橦橉橧樲橨樾橝橭橶橛橑樨橚樻樿橁橪橤橐橏橔橯橩橠樼橞橖橕橍橎橆歕歔歖殧殪殫毈毇氄氃氆澭濋澣濇澼濎濈潞濄澽澞濊澨瀄澥澮澺澬澪濏澿澸",
        ],
        [
          "ea40",
          "澢濉澫濍澯澲澰燅燂熿熸燖燀燁燋燔燊燇燏熽燘熼燆燚燛犝犞獩獦獧獬獥獫獪瑿璚璠璔璒璕璡甋疀瘯瘭瘱瘽瘳瘼瘵瘲瘰皻盦瞚瞝瞡瞜瞛瞢瞣瞕瞙",
        ],
        [
          "eaa1",
          "瞗磝磩磥磪磞磣磛磡磢磭磟磠禤穄穈穇窶窸窵窱窷篞篣篧篝篕篥篚篨篹篔篪篢篜篫篘篟糒糔糗糐糑縒縡縗縌縟縠縓縎縜縕縚縢縋縏縖縍縔縥縤罃罻罼罺羱翯耪耩聬膱膦膮膹膵膫膰膬膴膲膷膧臲艕艖艗蕖蕅蕫蕍蕓蕡蕘",
        ],
        [
          "eb40",
          "蕀蕆蕤蕁蕢蕄蕑蕇蕣蔾蕛蕱蕎蕮蕵蕕蕧蕠薌蕦蕝蕔蕥蕬虣虥虤螛螏螗螓螒螈螁螖螘蝹螇螣螅螐螑螝螄螔螜螚螉褞褦褰褭褮褧褱褢褩褣褯褬褟觱諠",
        ],
        [
          "eba1",
          "諢諲諴諵諝謔諤諟諰諈諞諡諨諿諯諻貑貒貐賵賮賱賰賳赬赮趥趧踳踾踸蹀蹅踶踼踽蹁踰踿躽輶輮輵輲輹輷輴遶遹遻邆郺鄳鄵鄶醓醐醑醍醏錧錞錈錟錆錏鍺錸錼錛錣錒錁鍆錭錎錍鋋錝鋺錥錓鋹鋷錴錂錤鋿錩錹錵錪錔錌",
        ],
        [
          "ec40",
          "錋鋾錉錀鋻錖閼闍閾閹閺閶閿閵閽隩雔霋霒霐鞙鞗鞔韰韸頵頯頲餤餟餧餩馞駮駬駥駤駰駣駪駩駧骹骿骴骻髶髺髹髷鬳鮀鮅鮇魼魾魻鮂鮓鮒鮐魺鮕",
        ],
        [
          "eca1",
          "魽鮈鴥鴗鴠鴞鴔鴩鴝鴘鴢鴐鴙鴟麈麆麇麮麭黕黖黺鼒鼽儦儥儢儤儠儩勴嚓嚌嚍嚆嚄嚃噾嚂噿嚁壖壔壏壒嬭嬥嬲嬣嬬嬧嬦嬯嬮孻寱寲嶷幬幪徾徻懃憵憼懧懠懥懤懨懞擯擩擣擫擤擨斁斀斶旚曒檍檖檁檥檉檟檛檡檞檇檓檎",
        ],
        [
          "ed40",
          "檕檃檨檤檑橿檦檚檅檌檒歛殭氉濌澩濴濔濣濜濭濧濦濞濲濝濢濨燡燱燨燲燤燰燢獳獮獯璗璲璫璐璪璭璱璥璯甐甑甒甏疄癃癈癉癇皤盩瞵瞫瞲瞷瞶",
        ],
        [
          "eda1",
          "瞴瞱瞨矰磳磽礂磻磼磲礅磹磾礄禫禨穜穛穖穘穔穚窾竀竁簅簏篲簀篿篻簎篴簋篳簂簉簃簁篸篽簆篰篱簐簊糨縭縼繂縳顈縸縪繉繀繇縩繌縰縻縶繄縺罅罿罾罽翴翲耬膻臄臌臊臅臇膼臩艛艚艜薃薀薏薧薕薠薋薣蕻薤薚薞",
        ],
        [
          "ee40",
          "蕷蕼薉薡蕺蕸蕗薎薖薆薍薙薝薁薢薂薈薅蕹蕶薘薐薟虨螾螪螭蟅螰螬螹螵螼螮蟉蟃蟂蟌螷螯蟄蟊螴螶螿螸螽蟞螲褵褳褼褾襁襒褷襂覭覯覮觲觳謞",
        ],
        [
          "eea1",
          "謘謖謑謅謋謢謏謒謕謇謍謈謆謜謓謚豏豰豲豱豯貕貔賹赯蹎蹍蹓蹐蹌蹇轃轀邅遾鄸醚醢醛醙醟醡醝醠鎡鎃鎯鍤鍖鍇鍼鍘鍜鍶鍉鍐鍑鍠鍭鎏鍌鍪鍹鍗鍕鍒鍏鍱鍷鍻鍡鍞鍣鍧鎀鍎鍙闇闀闉闃闅閷隮隰隬霠霟霘霝霙鞚鞡鞜",
        ],
        [
          "ef40",
          "鞞鞝韕韔韱顁顄顊顉顅顃餥餫餬餪餳餲餯餭餱餰馘馣馡騂駺駴駷駹駸駶駻駽駾駼騃骾髾髽鬁髼魈鮚鮨鮞鮛鮦鮡鮥鮤鮆鮢鮠鮯鴳鵁鵧鴶鴮鴯鴱鴸鴰",
        ],
        [
          "efa1",
          "鵅鵂鵃鴾鴷鵀鴽翵鴭麊麉麍麰黈黚黻黿鼤鼣鼢齔龠儱儭儮嚘嚜嚗嚚嚝嚙奰嬼屩屪巀幭幮懘懟懭懮懱懪懰懫懖懩擿攄擽擸攁攃擼斔旛曚曛曘櫅檹檽櫡櫆檺檶檷櫇檴檭歞毉氋瀇瀌瀍瀁瀅瀔瀎濿瀀濻瀦濼濷瀊爁燿燹爃燽獶",
        ],
        [
          "f040",
          "璸瓀璵瓁璾璶璻瓂甔甓癜癤癙癐癓癗癚皦皽盬矂瞺磿礌礓礔礉礐礒礑禭禬穟簜簩簙簠簟簭簝簦簨簢簥簰繜繐繖繣繘繢繟繑繠繗繓羵羳翷翸聵臑臒",
        ],
        [
          "f0a1",
          "臐艟艞薴藆藀藃藂薳薵薽藇藄薿藋藎藈藅薱薶藒蘤薸薷薾虩蟧蟦蟢蟛蟫蟪蟥蟟蟳蟤蟔蟜蟓蟭蟘蟣螤蟗蟙蠁蟴蟨蟝襓襋襏襌襆襐襑襉謪謧謣謳謰謵譇謯謼謾謱謥謷謦謶謮謤謻謽謺豂豵貙貘貗賾贄贂贀蹜蹢蹠蹗蹖蹞蹥蹧",
        ],
        [
          "f140",
          "蹛蹚蹡蹝蹩蹔轆轇轈轋鄨鄺鄻鄾醨醥醧醯醪鎵鎌鎒鎷鎛鎝鎉鎧鎎鎪鎞鎦鎕鎈鎙鎟鎍鎱鎑鎲鎤鎨鎴鎣鎥闒闓闑隳雗雚巂雟雘雝霣霢霥鞬鞮鞨鞫鞤鞪",
        ],
        [
          "f1a1",
          "鞢鞥韗韙韖韘韺顐顑顒颸饁餼餺騏騋騉騍騄騑騊騅騇騆髀髜鬈鬄鬅鬩鬵魊魌魋鯇鯆鯃鮿鯁鮵鮸鯓鮶鯄鮹鮽鵜鵓鵏鵊鵛鵋鵙鵖鵌鵗鵒鵔鵟鵘鵚麎麌黟鼁鼀鼖鼥鼫鼪鼩鼨齌齕儴儵劖勷厴嚫嚭嚦嚧嚪嚬壚壝壛夒嬽嬾嬿巃幰",
        ],
        [
          "f240",
          "徿懻攇攐攍攉攌攎斄旞旝曞櫧櫠櫌櫑櫙櫋櫟櫜櫐櫫櫏櫍櫞歠殰氌瀙瀧瀠瀖瀫瀡瀢瀣瀩瀗瀤瀜瀪爌爊爇爂爅犥犦犤犣犡瓋瓅璷瓃甖癠矉矊矄矱礝礛",
        ],
        [
          "f2a1",
          "礡礜礗礞禰穧穨簳簼簹簬簻糬糪繶繵繸繰繷繯繺繲繴繨罋罊羃羆羷翽翾聸臗臕艤艡艣藫藱藭藙藡藨藚藗藬藲藸藘藟藣藜藑藰藦藯藞藢蠀蟺蠃蟶蟷蠉蠌蠋蠆蟼蠈蟿蠊蠂襢襚襛襗襡襜襘襝襙覈覷覶觶譐譈譊譀譓譖譔譋譕",
        ],
        [
          "f340",
          "譑譂譒譗豃豷豶貚贆贇贉趬趪趭趫蹭蹸蹳蹪蹯蹻軂轒轑轏轐轓辴酀鄿醰醭鏞鏇鏏鏂鏚鏐鏹鏬鏌鏙鎩鏦鏊鏔鏮鏣鏕鏄鏎鏀鏒鏧镽闚闛雡霩霫霬霨霦",
        ],
        [
          "f3a1",
          "鞳鞷鞶韝韞韟顜顙顝顗颿颽颻颾饈饇饃馦馧騚騕騥騝騤騛騢騠騧騣騞騜騔髂鬋鬊鬎鬌鬷鯪鯫鯠鯞鯤鯦鯢鯰鯔鯗鯬鯜鯙鯥鯕鯡鯚鵷鶁鶊鶄鶈鵱鶀鵸鶆鶋鶌鵽鵫鵴鵵鵰鵩鶅鵳鵻鶂鵯鵹鵿鶇鵨麔麑黀黼鼭齀齁齍齖齗齘匷嚲",
        ],
        [
          "f440",
          "嚵嚳壣孅巆巇廮廯忀忁懹攗攖攕攓旟曨曣曤櫳櫰櫪櫨櫹櫱櫮櫯瀼瀵瀯瀷瀴瀱灂瀸瀿瀺瀹灀瀻瀳灁爓爔犨獽獼璺皫皪皾盭矌矎矏矍矲礥礣礧礨礤礩",
        ],
        [
          "f4a1",
          "禲穮穬穭竷籉籈籊籇籅糮繻繾纁纀羺翿聹臛臙舋艨艩蘢藿蘁藾蘛蘀藶蘄蘉蘅蘌藽蠙蠐蠑蠗蠓蠖襣襦覹觷譠譪譝譨譣譥譧譭趮躆躈躄轙轖轗轕轘轚邍酃酁醷醵醲醳鐋鐓鏻鐠鐏鐔鏾鐕鐐鐨鐙鐍鏵鐀鏷鐇鐎鐖鐒鏺鐉鏸鐊鏿",
        ],
        [
          "f540",
          "鏼鐌鏶鐑鐆闞闠闟霮霯鞹鞻韽韾顠顢顣顟飁飂饐饎饙饌饋饓騲騴騱騬騪騶騩騮騸騭髇髊髆鬐鬒鬑鰋鰈鯷鰅鰒鯸鱀鰇鰎鰆鰗鰔鰉鶟鶙鶤鶝鶒鶘鶐鶛",
        ],
        [
          "f5a1",
          "鶠鶔鶜鶪鶗鶡鶚鶢鶨鶞鶣鶿鶩鶖鶦鶧麙麛麚黥黤黧黦鼰鼮齛齠齞齝齙龑儺儹劘劗囃嚽嚾孈孇巋巏廱懽攛欂櫼欃櫸欀灃灄灊灈灉灅灆爝爚爙獾甗癪矐礭礱礯籔籓糲纊纇纈纋纆纍罍羻耰臝蘘蘪蘦蘟蘣蘜蘙蘧蘮蘡蘠蘩蘞蘥",
        ],
        [
          "f640",
          "蠩蠝蠛蠠蠤蠜蠫衊襭襩襮襫觺譹譸譅譺譻贐贔趯躎躌轞轛轝酆酄酅醹鐿鐻鐶鐩鐽鐼鐰鐹鐪鐷鐬鑀鐱闥闤闣霵霺鞿韡顤飉飆飀饘饖騹騽驆驄驂驁騺",
        ],
        [
          "f6a1",
          "騿髍鬕鬗鬘鬖鬺魒鰫鰝鰜鰬鰣鰨鰩鰤鰡鶷鶶鶼鷁鷇鷊鷏鶾鷅鷃鶻鶵鷎鶹鶺鶬鷈鶱鶭鷌鶳鷍鶲鹺麜黫黮黭鼛鼘鼚鼱齎齥齤龒亹囆囅囋奱孋孌巕巑廲攡攠攦攢欋欈欉氍灕灖灗灒爞爟犩獿瓘瓕瓙瓗癭皭礵禴穰穱籗籜籙籛籚",
        ],
        [
          "f740",
          "糴糱纑罏羇臞艫蘴蘵蘳蘬蘲蘶蠬蠨蠦蠪蠥襱覿覾觻譾讄讂讆讅譿贕躕躔躚躒躐躖躗轠轢酇鑌鑐鑊鑋鑏鑇鑅鑈鑉鑆霿韣顪顩飋饔饛驎驓驔驌驏驈驊",
        ],
        [
          "f7a1",
          "驉驒驐髐鬙鬫鬻魖魕鱆鱈鰿鱄鰹鰳鱁鰼鰷鰴鰲鰽鰶鷛鷒鷞鷚鷋鷐鷜鷑鷟鷩鷙鷘鷖鷵鷕鷝麶黰鼵鼳鼲齂齫龕龢儽劙壨壧奲孍巘蠯彏戁戃戄攩攥斖曫欑欒欏毊灛灚爢玂玁玃癰矔籧籦纕艬蘺虀蘹蘼蘱蘻蘾蠰蠲蠮蠳襶襴襳觾",
        ],
        [
          "f840",
          "讌讎讋讈豅贙躘轤轣醼鑢鑕鑝鑗鑞韄韅頀驖驙鬞鬟鬠鱒鱘鱐鱊鱍鱋鱕鱙鱌鱎鷻鷷鷯鷣鷫鷸鷤鷶鷡鷮鷦鷲鷰鷢鷬鷴鷳鷨鷭黂黐黲黳鼆鼜鼸鼷鼶齃齏",
        ],
        [
          "f8a1",
          "齱齰齮齯囓囍孎屭攭曭曮欓灟灡灝灠爣瓛瓥矕礸禷禶籪纗羉艭虃蠸蠷蠵衋讔讕躞躟躠躝醾醽釂鑫鑨鑩雥靆靃靇韇韥驞髕魙鱣鱧鱦鱢鱞鱠鸂鷾鸇鸃鸆鸅鸀鸁鸉鷿鷽鸄麠鼞齆齴齵齶囔攮斸欘欙欗欚灢爦犪矘矙礹籩籫糶纚",
        ],
        [
          "f940",
          "纘纛纙臠臡虆虇虈襹襺襼襻觿讘讙躥躤躣鑮鑭鑯鑱鑳靉顲饟鱨鱮鱭鸋鸍鸐鸏鸒鸑麡黵鼉齇齸齻齺齹圞灦籯蠼趲躦釃鑴鑸鑶鑵驠鱴鱳鱱鱵鸔鸓黶鼊",
        ],
        [
          "f9a1",
          "龤灨灥糷虪蠾蠽蠿讞貜躩軉靋顳顴飌饡馫驤驦驧鬤鸕鸗齈戇欞爧虌躨钂钀钁驩驨鬮鸙爩虋讟钃鱹麷癵驫鱺鸝灩灪麤齾齉龘碁銹裏墻恒粧嫺╔╦╗╠╬╣╚╩╝╒╤╕╞╪╡╘╧╛╓╥╖╟╫╢╙╨╜║═╭╮╰╯▓",
        ],
      ],
    }),
    Sn = Object.freeze({
      default: [
        [
          "8740",
          "䏰䰲䘃䖦䕸𧉧䵷䖳𧲱䳢𧳅㮕䜶䝄䱇䱀𤊿𣘗𧍒𦺋𧃒䱗𪍑䝏䗚䲅𧱬䴇䪤䚡𦬣爥𥩔𡩣𣸆𣽡晍囻",
        ],
        ["8767", "綕夝𨮹㷴霴𧯯寛𡵞媤㘥𩺰嫑宷峼杮薓𩥅瑡璝㡵𡵓𣚞𦀡㻬"],
        [
          "87a1",
          "𥣞㫵竼龗𤅡𨤍𣇪𠪊𣉞䌊蒄龖鐯䤰蘓墖靊鈘秐稲晠権袝瑌篅枂稬剏遆㓦珄𥶹瓆鿇垳䤯呌䄱𣚎堘穲𧭥讏䚮𦺈䆁𥶙箮𢒼鿈𢓁𢓉𢓌鿉蔄𣖻䂴鿊䓡𪷿拁灮鿋",
        ],
        [
          "8840",
          "㇀",
          4,
          "𠄌㇅𠃑𠃍㇆㇇𠃋𡿨㇈𠃊㇉㇊㇋㇌𠄎㇍㇎ĀÁǍÀĒÉĚÈŌÓǑÒ࿿Ê̄Ế࿿Ê̌ỀÊāáǎàɑēéěèīíǐìōóǒòūúǔùǖǘǚ",
        ],
        ["88a1", "ǜü࿿ê̄ế࿿ê̌ềêɡ⏚⏛"],
        ["8940", "𪎩𡅅"],
        ["8943", "攊"],
        ["8946", "丽滝鵎釟"],
        [
          "894c",
          "𧜵撑会伨侨兖兴农凤务动医华发变团声处备夲头学实実岚庆总斉柾栄桥济炼电纤纬纺织经统缆缷艺苏药视设询车轧轮",
        ],
        ["89a1", "琑糼緍楆竉刧"],
        ["89ab", "醌碸酞肼"],
        ["89b0", "贋胶𠧧"],
        ["89b5", "肟黇䳍鷉鸌䰾𩷶𧀎鸊𪄳㗁"],
        ["89c1", "溚舾甙"],
        [
          "89c5",
          "䤑马骏龙禇𨑬𡷊𠗐𢫦两亁亀亇亿仫伷㑌侽㹈倃傈㑽㒓㒥円夅凛凼刅争剹劐匧㗇厩㕑厰㕓参吣㕭㕲㚁咓咣咴咹哐哯唘唣唨㖘唿㖥㖿嗗㗅",
        ],
        ["8a40", "𧶄唥"],
        [
          "8a43",
          "𠱂𠴕𥄫喐𢳆㧬𠍁蹆𤶸𩓥䁓𨂾睺𢰸㨴䟕𨅝𦧲𤷪擝𠵼𠾴𠳕𡃴撍蹾𠺖𠰋𠽤𢲩𨉖𤓓",
        ],
        ["8a64", "𠵆𩩍𨃩䟴𤺧𢳂骲㩧𩗴㿭㔆𥋇𩟔𧣈𢵄鵮頕"],
        ["8a76", "䏙𦂥撴哣𢵌𢯊𡁷㧻𡁯"],
        ["8aa1", "𦛚𦜖𧦠擪𥁒𠱃蹨𢆡𨭌𠜱"],
        ["8aac", "䠋𠆩㿺塳𢶍"],
        ["8ab2", "𤗈𠓼𦂗𠽌𠶖啹䂻䎺"],
        ["8abb", "䪴𢩦𡂝膪飵𠶜捹㧾𢝵跀嚡摼㹃"],
        ["8ac9", "𪘁𠸉𢫏𢳉"],
        ["8ace", "𡃈𣧂㦒㨆𨊛㕸𥹉𢃇噒𠼱𢲲𩜠㒼氽𤸻"],
        ["8adf", "𧕴𢺋𢈈𪙛𨳍𠹺𠰴𦠜羓𡃏𢠃𢤹㗻𥇣𠺌𠾍𠺪㾓𠼰𠵇𡅏𠹌"],
        ["8af6", "𠺫𠮩𠵈𡃀𡄽㿹𢚖搲𠾭"],
        ["8b40", "𣏴𧘹𢯎𠵾𠵿𢱑𢱕㨘𠺘𡃇𠼮𪘲𦭐𨳒𨶙𨳊閪哌苄喹"],
        [
          "8b55",
          "𩻃鰦骶𧝞𢷮煀腭胬尜𦕲脴㞗卟𨂽醶𠻺𠸏𠹷𠻻㗝𤷫㘉𠳖嚯𢞵𡃉𠸐𠹸𡁸𡅈𨈇𡑕𠹹𤹐𢶤婔𡀝𡀞𡃵𡃶垜𠸑",
        ],
        [
          "8ba1",
          "𧚔𨋍𠾵𠹻𥅾㜃𠾶𡆀𥋘𪊽𤧚𡠺𤅷𨉼墙剨㘚𥜽箲孨䠀䬬鼧䧧鰟鮍𥭴𣄽嗻㗲嚉丨夂𡯁屮靑𠂆乛亻㔾尣彑忄㣺扌攵歺氵氺灬爫丬犭𤣩罒礻糹罓𦉪㓁",
        ],
        [
          "8bde",
          "𦍋耂肀𦘒𦥑卝衤见𧢲讠贝钅镸长门𨸏韦页风飞饣𩠐鱼鸟黄歯龜丷𠂇阝户钢",
        ],
        [
          "8c40",
          "倻淾𩱳龦㷉袏𤅎灷峵䬠𥇍㕙𥴰愢𨨲辧釶熑朙玺𣊁𪄇㲋𡦀䬐磤琂冮𨜏䀉橣𪊺䈣蘏𠩯稪𩥇𨫪靕灍匤𢁾鏴盙𨧣龧矝亣俰傼丯众龨吴綋墒壐𡶶庒庙忂𢜒斋",
        ],
        ["8ca1", "𣏹椙橃𣱣泿"],
        [
          "8ca7",
          "爀𤔅玌㻛𤨓嬕璹讃𥲤𥚕窓篬糃繬苸薗龩袐龪躹龫迏蕟駠鈡龬𨶹𡐿䁱䊢娚",
        ],
        ["8cc9", "顨杫䉶圽"],
        ["8cce", "藖𤥻芿𧄍䲁𦵴嵻𦬕𦾾龭龮宖龯曧繛湗秊㶈䓃𣉖𢞖䎚䔶"],
        ["8ce6", "峕𣬚諹屸㴒𣕑嵸龲煗䕘𤃬𡸣䱷㥸㑊𠆤𦱁諌侴𠈹妿腬顖𩣺弻"],
        ["8d40", "𠮟"],
        [
          "8d42",
          "𢇁𨥭䄂䚻𩁹㼇龳𪆵䃸㟖䛷𦱆䅼𨚲𧏿䕭㣔𥒚䕡䔛䶉䱻䵶䗪㿈𤬏㙡䓞䒽䇭崾嵈嵖㷼㠏嶤嶹㠠㠸幂庽弥徃㤈㤔㤿㥍惗愽峥㦉憷憹懏㦸戬抐拥挘㧸嚱",
        ],
        [
          "8da1",
          "㨃揢揻搇摚㩋擀崕嘡龟㪗斆㪽旿晓㫲暒㬢朖㭂枤栀㭘桊梄㭲㭱㭻椉楃牜楤榟榅㮼槖㯝橥橴橱檂㯬檙㯲檫檵櫔櫶殁毁毪汵沪㳋洂洆洦涁㳯涤涱渕渘温溆𨧀溻滢滚齿滨滩漤漴㵆𣽁澁澾㵪㵵熷岙㶊瀬㶑灐灔灯灿炉𠌥䏁㗱𠻘",
        ],
        [
          "8e40",
          "𣻗垾𦻓焾𥟠㙎榢𨯩孴穉𥣡𩓙穥穽𥦬窻窰竂竃燑𦒍䇊竚竝竪䇯咲𥰁笋筕笩𥌎𥳾箢筯莜𥮴𦱿篐萡箒箸𥴠㶭𥱥蒒篺簆簵𥳁籄粃𤢂粦晽𤕸糉糇糦籴糳糵糎",
        ],
        [
          "8ea1",
          "繧䔝𦹄絝𦻖璍綉綫焵綳緒𤁗𦀩緤㴓緵𡟹緥𨍭縝𦄡𦅚繮纒䌫鑬縧罀罁罇礶𦋐駡羗𦍑羣𡙡𠁨䕜𣝦䔃𨌺翺𦒉者耈耝耨耯𪂇𦳃耻耼聡𢜔䦉𦘦𣷣𦛨朥肧𨩈脇脚墰𢛶汿𦒘𤾸擧𡒊舘𡡞橓𤩥𤪕䑺舩𠬍𦩒𣵾俹𡓽蓢荢𦬊𤦧𣔰𡝳𣷸芪椛芳䇛",
        ],
        [
          "8f40",
          "蕋苐茚𠸖𡞴㛁𣅽𣕚艻苢茘𣺋𦶣𦬅𦮗𣗎㶿茝嗬莅䔋𦶥莬菁菓㑾𦻔橗蕚㒖𦹂𢻯葘𥯤葱㷓䓤檧葊𣲵祘蒨𦮖𦹷𦹃蓞萏莑䒠蒓蓤𥲑䉀𥳀䕃蔴嫲𦺙䔧蕳䔖枿蘖",
        ],
        [
          "8fa1",
          "𨘥𨘻藁𧂈蘂𡖂𧃍䕫䕪蘨㙈𡢢号𧎚虾蝱𪃸蟮𢰧螱蟚蠏噡虬桖䘏衅衆𧗠𣶹𧗤衞袜䙛袴袵揁装睷𧜏覇覊覦覩覧覼𨨥觧𧤤𧪽誜瞓釾誐𧩙竩𧬺𣾏䜓𧬸煼謌謟𥐰𥕥謿譌譍誩𤩺讐讛誯𡛟䘕衏貛𧵔𧶏貫㜥𧵓賖𧶘𧶽贒贃𡤐賛灜贑𤳉㻐起",
        ],
        [
          "9040",
          "趩𨀂𡀔𤦊㭼𨆼𧄌竧躭躶軃鋔輙輭𨍥𨐒辥錃𪊟𠩐辳䤪𨧞𨔽𣶻廸𣉢迹𪀔𨚼𨔁𢌥㦀𦻗逷𨔼𧪾遡𨕬𨘋邨𨜓郄𨛦邮都酧㫰醩釄粬𨤳𡺉鈎沟鉁鉢𥖹銹𨫆𣲛𨬌𥗛",
        ],
        [
          "90a1",
          "𠴱錬鍫𨫡𨯫炏嫃𨫢𨫥䥥鉄𨯬𨰹𨯿鍳鑛躼閅閦鐦閠濶䊹𢙺𨛘𡉼𣸮䧟氜陻隖䅬隣𦻕懚隶磵𨫠隽双䦡𦲸𠉴𦐐𩂯𩃥𤫑𡤕𣌊霱虂霶䨏䔽䖅𤫩灵孁霛靜𩇕靗孊𩇫靟鐥僐𣂷𣂼鞉鞟鞱鞾韀韒韠𥑬韮琜𩐳響韵𩐝𧥺䫑頴頳顋顦㬎𧅵㵑𠘰𤅜",
        ],
        [
          "9140",
          "𥜆飊颷飈飇䫿𦴧𡛓喰飡飦飬鍸餹𤨩䭲𩡗𩤅駵騌騻騐驘𥜥㛄𩂱𩯕髠髢𩬅髴䰎鬔鬭𨘀倴鬴𦦨㣃𣁽魐魀𩴾婅𡡣鮎𤉋鰂鯿鰌𩹨鷔𩾷𪆒𪆫𪃡𪄣𪇟鵾鶃𪄴鸎梈",
        ],
        [
          "91a1",
          "鷄𢅛𪆓𪈠𡤻𪈳鴹𪂹𪊴麐麕麞麢䴴麪麯𤍤黁㭠㧥㴝伲㞾𨰫鼂鼈䮖鐤𦶢鼗鼖鼹嚟嚊齅馸𩂋韲葿齢齩竜龎爖䮾𤥵𤦻煷𤧸𤍈𤩑玞𨯚𡣺禟𨥾𨸶鍩鏳𨩄鋬鎁鏋𨥬𤒹爗㻫睲穃烐𤑳𤏸煾𡟯炣𡢾𣖙㻇𡢅𥐯𡟸㜢𡛻𡠹㛡𡝴𡣑𥽋㜣𡛀坛𤨥𡏾𡊨",
        ],
        [
          "9240",
          "𡏆𡒶蔃𣚦蔃葕𤦔𧅥𣸱𥕜𣻻𧁒䓴𣛮𩦝𦼦柹㜳㰕㷧塬𡤢栐䁗𣜿𤃡𤂋𤄏𦰡哋嚞𦚱嚒𠿟𠮨𠸍鏆𨬓鎜仸儫㠙𤐶亼𠑥𠍿佋侊𥙑婨𠆫𠏋㦙𠌊𠐔㐵伩𠋀𨺳𠉵諚𠈌亘",
        ],
        [
          "92a1",
          "働儍侢伃𤨎𣺊佂倮偬傁俌俥偘僼兙兛兝兞湶𣖕𣸹𣺿浲𡢄𣺉冨凃𠗠䓝𠒣𠒒𠒑赺𨪜𠜎剙劤𠡳勡鍮䙺熌𤎌𠰠𤦬𡃤槑𠸝瑹㻞璙琔瑖玘䮎𤪼𤂍叐㖄爏𤃉喴𠍅响𠯆圝鉝雴鍦埝垍坿㘾壋媙𨩆𡛺𡝯𡜐娬妸銏婾嫏娒𥥆𡧳𡡡𤊕㛵洅瑃娡𥺃",
        ],
        [
          "9340",
          "媁𨯗𠐓鏠璌𡌃焅䥲鐈𨧻鎽㞠尞岞幞幈𡦖𡥼𣫮廍孏𡤃𡤄㜁𡢠㛝𡛾㛓脪𨩇𡶺𣑲𨦨弌弎𡤧𡞫婫𡜻孄蘔𧗽衠恾𢡠𢘫忛㺸𢖯𢖾𩂈𦽳懀𠀾𠁆𢘛憙憘恵𢲛𢴇𤛔𩅍",
        ],
        [
          "93a1",
          "摱𤙥𢭪㨩𢬢𣑐𩣪𢹸挷𪑛撶挱揑𤧣𢵧护𢲡搻敫楲㯴𣂎𣊭𤦉𣊫唍𣋠𡣙𩐿曎𣊉𣆳㫠䆐𥖄𨬢𥖏𡛼𥕛𥐥磮𣄃𡠪𣈴㑤𣈏𣆂𤋉暎𦴤晫䮓昰𧡰𡷫晣𣋒𣋡昞𥡲㣑𣠺𣞼㮙𣞢𣏾瓐㮖枏𤘪梶栞㯄檾㡣𣟕𤒇樳橒櫉欅𡤒攑梘橌㯗橺歗𣿀𣲚鎠鋲𨯪𨫋",
        ],
        [
          "9440",
          "銉𨀞𨧜鑧涥漋𤧬浧𣽿㶏渄𤀼娽渊塇洤硂焻𤌚𤉶烱牐犇犔𤞏𤜥兹𤪤𠗫瑺𣻸𣙟𤩊𤤗𥿡㼆㺱𤫟𨰣𣼵悧㻳瓌琼鎇琷䒟𦷪䕑疃㽣𤳙𤴆㽘畕癳𪗆㬙瑨𨫌𤦫𤦎㫻",
        ],
        [
          "94a1",
          "㷍𤩎㻿𤧅𤣳釺圲鍂𨫣𡡤僟𥈡𥇧睸𣈲眎眏睻𤚗𣞁㩞𤣰琸璛㺿𤪺𤫇䃈𤪖𦆮錇𥖁砞碍碈磒珐祙𧝁𥛣䄎禛蒖禥樭𣻺稺秴䅮𡛦䄲鈵秱𠵌𤦌𠊙𣶺𡝮㖗啫㕰㚪𠇔𠰍竢婙𢛵𥪯𥪜娍𠉛磰娪𥯆竾䇹籝籭䈑𥮳𥺼𥺦糍𤧹𡞰粎籼粮檲緜縇緓罎𦉡",
        ],
        [
          "9540",
          "𦅜𧭈綗𥺂䉪𦭵𠤖柖𠁎𣗏埄𦐒𦏸𤥢翝笧𠠬𥫩𥵃笌𥸎駦虅驣樜𣐿㧢𤧷𦖭騟𦖠蒀𧄧𦳑䓪脷䐂胆脉腂𦞴飃𦩂艢艥𦩑葓𦶧蘐𧈛媆䅿𡡀嬫𡢡嫤𡣘蚠蜨𣶏蠭𧐢娂",
        ],
        [
          "95a1",
          "衮佅袇袿裦襥襍𥚃襔𧞅𧞄𨯵𨯙𨮜𨧹㺭蒣䛵䛏㟲訽訜𩑈彍鈫𤊄旔焩烄𡡅鵭貟賩𧷜妚矃姰䍮㛔踪躧𤰉輰轊䋴汘澻𢌡䢛潹溋𡟚鯩㚵𤤯邻邗啱䤆醻鐄𨩋䁢𨫼鐧𨰝𨰻蓥訫閙閧閗閖𨴴瑅㻂𤣿𤩂𤏪㻧𣈥随𨻧𨹦𨹥㻌𤧭𤩸𣿮琒瑫㻼靁𩂰",
        ],
        [
          "9640",
          "桇䨝𩂓𥟟靝鍨𨦉𨰦𨬯𦎾銺嬑譩䤼珹𤈛鞛靱餸𠼦巁𨯅𤪲頟𩓚鋶𩗗釥䓀𨭐𤩧𨭤飜𨩅㼀鈪䤥萔餻饍𧬆㷽馛䭯馪驜𨭥𥣈檏騡嫾騯𩣱䮐𩥈馼䮽䮗鍽塲𡌂堢𤦸",
        ],
        [
          "96a1",
          "𡓨硄𢜟𣶸棅㵽鑘㤧慐𢞁𢥫愇鱏鱓鱻鰵鰐魿鯏𩸭鮟𪇵𪃾鴡䲮𤄄鸘䲰鴌𪆴𪃭𪃳𩤯鶥蒽𦸒𦿟𦮂藼䔳𦶤𦺄𦷰萠藮𦸀𣟗𦁤秢𣖜𣙀䤭𤧞㵢鏛銾鍈𠊿碹鉷鑍俤㑀遤𥕝砽硔碶硋𡝗𣇉𤥁㚚佲濚濙瀞瀞吔𤆵垻壳垊鴖埗焴㒯𤆬燫𦱀𤾗嬨𡞵𨩉",
        ],
        [
          "9740",
          "愌嫎娋䊼𤒈㜬䭻𨧼鎻鎸𡣖𠼝葲𦳀𡐓𤋺𢰦𤏁妔𣶷𦝁綨𦅛𦂤𤦹𤦋𨧺鋥珢㻩璴𨭣𡢟㻡𤪳櫘珳珻㻖𤨾𤪔𡟙𤩦𠎧𡐤𤧥瑈𤤖炥𤥶銄珦鍟𠓾錱𨫎𨨖鎆𨯧𥗕䤵𨪂煫",
        ],
        [
          "97a1",
          "𤥃𠳿嚤𠘚𠯫𠲸唂秄𡟺緾𡛂𤩐𡡒䔮鐁㜊𨫀𤦭妰𡢿𡢃𧒄媡㛢𣵛㚰鉟婹𨪁𡡢鍴㳍𠪴䪖㦊僴㵩㵌𡎜煵䋻𨈘渏𩃤䓫浗𧹏灧沯㳖𣿭𣸭渂漌㵯𠏵畑㚼㓈䚀㻚䡱姄鉮䤾轁𨰜𦯀堒埈㛖𡑒烾𤍢𤩱𢿣𡊰𢎽梹楧𡎘𣓥𧯴𣛟𨪃𣟖𣏺𤲟樚𣚭𦲷萾䓟䓎",
        ],
        [
          "9840",
          "𦴦𦵑𦲂𦿞漗𧄉茽𡜺菭𦲀𧁓𡟛妉媂𡞳婡婱𡤅𤇼㜭姯𡜼㛇熎鎐暚𤊥婮娫𤊓樫𣻹𧜶𤑛𤋊焝𤉙𨧡侰𦴨峂𤓎𧹍𤎽樌𤉖𡌄炦焳𤏩㶥泟勇𤩏繥姫崯㷳彜𤩝𡟟綤萦",
        ],
        [
          "98a1",
          "咅𣫺𣌀𠈔坾𠣕𠘙㿥𡾞𪊶瀃𩅛嵰玏糓𨩙𩐠俈翧狍猐𧫴猸猹𥛶獁獈㺩𧬘遬燵𤣲珡臶㻊県㻑沢国琙琞琟㻢㻰㻴㻺瓓㼎㽓畂畭畲疍㽼痈痜㿀癍㿗癴㿜発𤽜熈嘣覀塩䀝睃䀹条䁅㗛瞘䁪䁯属瞾矋売砘点砜䂨砹硇硑硦葈𥔵礳栃礲䄃",
        ],
        [
          "9940",
          "䄉禑禙辻稆込䅧窑䆲窼艹䇄竏竛䇏両筢筬筻簒簛䉠䉺类粜䊌粸䊔糭输烀𠳏総緔緐緽羮羴犟䎗耠耥笹耮耱联㷌垴炠肷胩䏭脌猪脎脒畠脔䐁㬹腖腙腚",
        ],
        [
          "99a1",
          "䐓堺腼膄䐥膓䐭膥埯臁臤艔䒏芦艶苊苘苿䒰荗险榊萅烵葤惣蒈䔄蒾蓡蓸蔐蔸蕒䔻蕯蕰藠䕷虲蚒蚲蛯际螋䘆䘗袮裿褤襇覑𧥧訩訸誔誴豑賔賲贜䞘塟跃䟭仮踺嗘坔蹱嗵躰䠷軎転軤軭軲辷迁迊迌逳駄䢭飠鈓䤞鈨鉘鉫銱銮銿",
        ],
        [
          "9a40",
          "鋣鋫鋳鋴鋽鍃鎄鎭䥅䥑麿鐗匁鐝鐭鐾䥪鑔鑹锭関䦧间阳䧥枠䨤靀䨵鞲韂噔䫤惨颹䬙飱塄餎餙冴餜餷饂饝饢䭰駅䮝騼鬏窃魩鮁鯝鯱鯴䱭鰠㝯𡯂鵉鰺",
        ],
        [
          "9aa1",
          "黾噐鶓鶽鷀鷼银辶鹻麬麱麽黆铜黢黱黸竈齄𠂔𠊷𠎠椚铃妬𠓗塀铁㞹𠗕𠘕𠙶𡚺块煳𠫂𠫍𠮿呪吆𠯋咞𠯻𠰻𠱓𠱥𠱼惧𠲍噺𠲵𠳝𠳭𠵯𠶲𠷈楕鰯螥𠸄𠸎𠻗𠾐𠼭𠹳尠𠾼帋𡁜𡁏𡁶朞𡁻𡂈𡂖㙇𡂿𡃓𡄯𡄻卤蒭𡋣𡍵𡌶讁𡕷𡘙𡟃𡟇乸炻𡠭𡥪",
        ],
        [
          "9b40",
          "𡨭𡩅𡰪𡱰𡲬𡻈拃𡻕𡼕熘桕𢁅槩㛈𢉼𢏗𢏺𢜪𢡱𢥏苽𢥧𢦓𢫕覥𢫨辠𢬎鞸𢬿顇骽𢱌",
        ],
        ["9b62", "𢲈𢲷𥯨𢴈𢴒𢶷𢶕𢹂𢽴𢿌𣀳𣁦𣌟𣏞徱晈暿𧩹𣕧𣗳爁𤦺矗𣘚𣜖纇𠍆墵朎"],
        [
          "9ba1",
          "椘𣪧𧙗𥿢𣸑𣺹𧗾𢂚䣐䪸𤄙𨪚𤋮𤌍𤀻𤌴𤎖𤩅𠗊凒𠘑妟𡺨㮾𣳿𤐄𤓖垈𤙴㦛𤜯𨗨𩧉㝢𢇃譞𨭎駖𤠒𤣻𤨕爉𤫀𠱸奥𤺥𤾆𠝹軚𥀬劏圿煱𥊙𥐙𣽊𤪧喼𥑆𥑮𦭒釔㑳𥔿𧘲𥕞䜘𥕢𥕦𥟇𤤿𥡝偦㓻𣏌惞𥤃䝼𨥈𥪮𥮉𥰆𡶐垡煑澶𦄂𧰒遖𦆲𤾚譢𦐂𦑊",
        ],
        [
          "9c40",
          "嵛𦯷輶𦒄𡤜諪𤧶𦒈𣿯𦔒䯀𦖿𦚵𢜛鑥𥟡憕娧晉侻嚹𤔡𦛼乪𤤴陖涏𦲽㘘襷𦞙𦡮𦐑𦡞營𦣇筂𩃀𠨑𦤦鄄𦤹穅鷰𦧺騦𦨭㙟𦑩𠀡禃𦨴𦭛崬𣔙菏𦮝䛐𦲤画补𦶮墶",
        ],
        [
          "9ca1",
          "㜜𢖍𧁋𧇍㱔𧊀𧊅銁𢅺𧊋錰𧋦𤧐氹钟𧑐𠻸蠧裵𢤦𨑳𡞱溸𤨪𡠠㦤㚹尐秣䔿暶𩲭𩢤襃𧟌𧡘囖䃟𡘊㦡𣜯𨃨𡏅熭荦𧧝𩆨婧䲷𧂯𨦫𧧽𧨊𧬋𧵦𤅺筃祾𨀉澵𪋟樃𨌘厢𦸇鎿栶靝𨅯𨀣𦦵𡏭𣈯𨁈嶅𨰰𨂃圕頣𨥉嶫𤦈斾槕叒𤪥𣾁㰑朶𨂐𨃴𨄮𡾡𨅏",
        ],
        [
          "9d40",
          "𨆉𨆯𨈚𨌆𨌯𨎊㗊𨑨𨚪䣺揦𨥖砈鉕𨦸䏲𨧧䏟𨧨𨭆𨯔姸𨰉輋𨿅𩃬筑𩄐𩄼㷷𩅞𤫊运犏嚋𩓧𩗩𩖰𩖸𩜲𩣑𩥉𩥪𩧃𩨨𩬎𩵚𩶛纟𩻸𩼣䲤镇𪊓熢𪋿䶑递𪗋䶜𠲜达嗁",
        ],
        [
          "9da1",
          "辺𢒰边𤪓䔉繿潖檱仪㓤𨬬𧢝㜺躀𡟵𨀤𨭬𨮙𧨾𦚯㷫𧙕𣲷𥘵𥥖亚𥺁𦉘嚿𠹭踎孭𣺈𤲞揞拐𡟶𡡻攰嘭𥱊吚𥌑㷆𩶘䱽嘢嘞罉𥻘奵𣵀蝰东𠿪𠵉𣚺脗鵞贘瘻鱅癎瞹鍅吲腈苷嘥脲萘肽嗪祢噃吖𠺝㗎嘅嗱曱𨋢㘭甴嗰喺咗啲𠱁𠲖廐𥅈𠹶𢱢",
        ],
        [
          "9e40",
          "𠺢麫絚嗞𡁵抝靭咔賍燶酶揼掹揾啩𢭃鱲𢺳冚㓟𠶧冧呍唞唓癦踭𦢊疱肶蠄螆裇膶萜𡃁䓬猄𤜆宐茋𦢓噻𢛴𧴯𤆣𧵳𦻐𧊶酰𡇙鈈𣳼𪚩𠺬𠻹牦𡲢䝎𤿂𧿹𠿫䃺",
        ],
        ["9ea1", "鱝攟𢶠䣳𤟠𩵼𠿬𠸊恢𧖣𠿭"],
        ["9ead", "𦁈𡆇熣纎鵐业丄㕷嬍沲卧㚬㧜卽㚥𤘘墚𤭮舭呋垪𥪕𠥹"],
        [
          "9ec5",
          "㩒𢑥獴𩺬䴉鯭𣳾𩼰䱛𤾩𩖞𩿞葜𣶶𧊲𦞳𣜠挮紥𣻷𣸬㨪逈勌㹴㙺䗩𠒎癀嫰𠺶硺𧼮墧䂿噼鮋嵴癔𪐴麅䳡痹㟻愙𣃚𤏲",
        ],
        ["9ef5", "噝𡊩垧𤥣𩸆刴𧂮㖭汊鵼"],
        ["9f40", "籖鬹埞𡝬屓擓𩓐𦌵𧅤蚭𠴨𦴢𤫢𠵱"],
        [
          "9f4f",
          "凾𡼏嶎霃𡷑麁遌笟鬂峑箣扨挵髿篏鬪籾鬮籂粆鰕篼鬉鼗鰛𤤾齚啳寃俽麘俲剠㸆勑坧偖妷帒韈鶫轜呩鞴饀鞺匬愰",
        ],
        ["9fa1", "椬叚鰊鴂䰻陁榀傦畆𡝭駚剳"],
        ["9fae", "酙隁酜"],
        ["9fb2", "酑𨺗捿𦴣櫊嘑醎畺抅𠏼獏籰𥰡𣳽"],
        ["9fc1", "𤤙盖鮝个𠳔莾衂"],
        ["9fc9", "届槀僭坺刟巵从氱𠇲伹咜哚劚趂㗾弌㗳"],
        ["9fdb", "歒酼龥鮗頮颴骺麨麄煺笔"],
        ["9fe7", "毺蠘罸"],
        ["9feb", "嘠𪙊蹷齓"],
        ["9ff0", "跔蹏鸜踁抂𨍽踨蹵竓𤩷稾磘泪詧瘇"],
        ["a040", "𨩚鼦泎蟖痃𪊲硓咢贌狢獱謭猂瓱賫𤪻蘯徺袠䒷"],
        ["a055", "𡠻𦸅"],
        ["a058", "詾𢔛"],
        ["a05b", "惽癧髗鵄鍮鮏蟵"],
        ["a063", "蠏賷猬霡鮰㗖犲䰇籑饊𦅙慙䰄麖慽"],
        ["a073", "坟慯抦戹拎㩜懢厪𣏵捤栂㗒"],
        ["a0a1", "嵗𨯂迚𨸹"],
        ["a0a6", "僙𡵆礆匲阸𠼻䁥"],
        ["a0ae", "矾"],
        [
          "a0b0",
          "糂𥼚糚稭聦聣絍甅瓲覔舚朌聢𧒆聛瓰脃眤覉𦟌畓𦻑螩蟎臈螌詉貭譃眫瓸蓚㘵榲趦",
        ],
        ["a0d4", "覩瑨涹蟁𤀑瓧㷛煶悤憜㳑煢恷"],
        ["a0e2", "罱𨬭牐惩䭾删㰘𣳇𥻗𧙖𥔱𡥄𡋾𩤃𦷜𧂭峁𦆭𨨏𣙷𠃮𦡆𤼎䕢嬟𦍌齐麦𦉫"],
        ["a3c0", "␀", 31, "␡"],
        [
          "c6a1",
          "①",
          9,
          "⑴",
          9,
          "ⅰ",
          9,
          "丶丿亅亠冂冖冫勹匸卩厶夊宀巛⼳广廴彐彡攴无疒癶辵隶¨ˆヽヾゝゞ〃仝々〆〇ー［］✽ぁ",
          23,
        ],
        ["c740", "す", 58, "ァアィイ"],
        ["c7a1", "ゥ", 81, "А", 5, "ЁЖ", 4],
        ["c840", "Л", 26, "ёж", 25, "⇧↸↹㇏𠃌乚𠂊刂䒑"],
        ["c8a1", "龰冈龱𧘇"],
        [
          "c8cd",
          "￢￤＇＂㈱№℡゛゜⺀⺄⺆⺇⺈⺊⺌⺍⺕⺜⺝⺥⺧⺪⺬⺮⺶⺼⺾⻆⻊⻌⻍⻏⻖⻗⻞⻣",
        ],
        ["c8f5", "ʃɐɛɔɵœøŋʊɪ"],
        ["f9fe", "￭"],
        [
          "fa40",
          "𠕇鋛𠗟𣿅蕌䊵珯况㙉𤥂𨧤鍄𡧛苮𣳈砼杄拟𤤳𨦪𠊠𦮳𡌅侫𢓭倈𦴩𧪄𣘀𤪱𢔓倩𠍾徤𠎀𠍇滛𠐟偽儁㑺儎顬㝃萖𤦤𠒇兠𣎴兪𠯿𢃼𠋥𢔰𠖎𣈳𡦃宂蝽𠖳𣲙冲冸",
        ],
        [
          "faa1",
          "鴴凉减凑㳜凓𤪦决凢卂凭菍椾𣜭彻刋刦刼劵剗劔効勅簕蕂勠蘍𦬓包𨫞啉滙𣾀𠥔𣿬匳卄𠯢泋𡜦栛珕恊㺪㣌𡛨燝䒢卭却𨚫卾卿𡖖𡘓矦厓𨪛厠厫厮玧𥝲㽙玜叁叅汉义埾叙㪫𠮏叠𣿫𢶣叶𠱷吓灹唫晗浛呭𦭓𠵴啝咏咤䞦𡜍𠻝㶴𠵍",
        ],
        [
          "fb40",
          "𨦼𢚘啇䳭启琗喆喩嘅𡣗𤀺䕒𤐵暳𡂴嘷曍𣊊暤暭噍噏磱囱鞇叾圀囯园𨭦㘣𡉏坆𤆥汮炋坂㚱𦱾埦𡐖堃𡑔𤍣堦𤯵塜墪㕡壠壜𡈼壻寿坃𪅐𤉸鏓㖡够梦㛃湙",
        ],
        [
          "fba1",
          "𡘾娤啓𡚒蔅姉𠵎𦲁𦴪𡟜姙𡟻𡞲𦶦浱𡠨𡛕姹𦹅媫婣㛦𤦩婷㜈媖瑥嫓𦾡𢕔㶅𡤑㜲𡚸広勐孶斈孼𧨎䀄䡝𠈄寕慠𡨴𥧌𠖥寳宝䴐尅𡭄尓珎尔𡲥𦬨屉䣝岅峩峯嶋𡷹𡸷崐崘嵆𡺤岺巗苼㠭𤤁𢁉𢅳芇㠶㯂帮檊幵幺𤒼𠳓厦亷廐厨𡝱帉廴𨒂",
        ],
        [
          "fc40",
          "廹廻㢠廼栾鐛弍𠇁弢㫞䢮𡌺强𦢈𢏐彘𢑱彣鞽𦹮彲鍀𨨶徧嶶㵟𥉐𡽪𧃸𢙨釖𠊞𨨩怱暅𡡷㥣㷇㘹垐𢞴祱㹀悞悤悳𤦂𤦏𧩓璤僡媠慤萤慂慈𦻒憁凴𠙖憇宪𣾷",
        ],
        [
          "fca1",
          "𢡟懓𨮝𩥝懐㤲𢦀𢣁怣慜攞掋𠄘担𡝰拕𢸍捬𤧟㨗搸揸𡎎𡟼撐澊𢸶頔𤂌𥜝擡擥鑻㩦携㩗敍漖𤨨𤨣斅敭敟𣁾斵𤥀䬷旑䃘𡠩无旣忟𣐀昘𣇷𣇸晄𣆤𣆥晋𠹵晧𥇦晳晴𡸽𣈱𨗴𣇈𥌓矅𢣷馤朂𤎜𤨡㬫槺𣟂杞杧杢𤇍𩃭柗䓩栢湐鈼栁𣏦𦶠桝",
        ],
        [
          "fd40",
          "𣑯槡樋𨫟楳棃𣗍椁椀㴲㨁𣘼㮀枬楡𨩊䋼椶榘㮡𠏉荣傐槹𣙙𢄪橅𣜃檝㯳枱櫈𩆜㰍欝𠤣惞欵歴𢟍溵𣫛𠎵𡥘㝀吡𣭚毡𣻼毜氷𢒋𤣱𦭑汚舦汹𣶼䓅𣶽𤆤𤤌𤤀",
        ],
        [
          "fda1",
          "𣳉㛥㳫𠴲鮃𣇹𢒑羏样𦴥𦶡𦷫涖浜湼漄𤥿𤂅𦹲蔳𦽴凇沜渝萮𨬡港𣸯瑓𣾂秌湏媑𣁋濸㜍澝𣸰滺𡒗𤀽䕕鏰潄潜㵎潴𩅰㴻澟𤅄濓𤂑𤅕𤀹𣿰𣾴𤄿凟𤅖𤅗𤅀𦇝灋灾炧炁烌烕烖烟䄄㷨熴熖𤉷焫煅媈煊煮岜𤍥煏鍢𤋁焬𤑚𤨧𤨢熺𨯨炽爎",
        ],
        [
          "fe40",
          "鑂爕夑鑃爤鍁𥘅爮牀𤥴梽牕牗㹕𣁄栍漽犂猪猫𤠣𨠫䣭𨠄猨献珏玪𠰺𦨮珉瑉𤇢𡛧𤨤昣㛅𤦷𤦍𤧻珷琕椃𤨦琹𠗃㻗瑜𢢭瑠𨺲瑇珤瑶莹瑬㜰瑴鏱樬璂䥓𤪌",
        ],
        [
          "fea1",
          "𤅟𤩹𨮏孆𨰃𡢞瓈𡦈甎瓩甞𨻙𡩋寗𨺬鎅畍畊畧畮𤾂㼄𤴓疎瑝疞疴瘂瘬癑癏癯癶𦏵皐臯㟸𦤑𦤎皡皥皷盌𦾟葢𥂝𥅽𡸜眞眦着撯𥈠睘𣊬瞯𨥤𨥨𡛁矴砉𡍶𤨒棊碯磇磓隥礮𥗠磗礴碱𧘌辸袄𨬫𦂃𢘜禆褀椂禀𥡗禝𧬹礼禩渪𧄦㺨秆𩄍秔",
        ],
      ],
    }),
    kn = ne(hn),
    An = ne(dn),
    Cn = ne(pn),
    Pn = ne(gn),
    In = ne(mn),
    On = ne(wn),
    En = ne(xn),
    Bn = ne(Sn),
    Tn = {
      shiftjis: {
        type: "_dbcs",
        table: function () {
          return kn;
        },
        encodeAdd: { "¥": 92, "‾": 126 },
        encodeSkipVals: [{ from: 60736, to: 63808 }],
      },
      csshiftjis: "shiftjis",
      mskanji: "shiftjis",
      sjis: "shiftjis",
      windows31j: "shiftjis",
      ms31j: "shiftjis",
      xsjis: "shiftjis",
      windows932: "shiftjis",
      ms932: "shiftjis",
      932: "shiftjis",
      cp932: "shiftjis",
      eucjp: {
        type: "_dbcs",
        table: function () {
          return An;
        },
        encodeAdd: { "¥": 92, "‾": 126 },
      },
      gb2312: "cp936",
      gb231280: "cp936",
      gb23121980: "cp936",
      csgb2312: "cp936",
      csiso58gb231280: "cp936",
      euccn: "cp936",
      windows936: "cp936",
      ms936: "cp936",
      936: "cp936",
      cp936: {
        type: "_dbcs",
        table: function () {
          return Cn;
        },
      },
      gbk: {
        type: "_dbcs",
        table: function () {
          return Cn.concat(Pn);
        },
      },
      xgbk: "gbk",
      isoir58: "gbk",
      gb18030: {
        type: "_dbcs",
        table: function () {
          return Cn.concat(Pn);
        },
        gb18030: function () {
          return In;
        },
        encodeSkipVals: [128],
        encodeAdd: { "€": 41699 },
      },
      chinese: "gb18030",
      windows949: "cp949",
      ms949: "cp949",
      949: "cp949",
      cp949: {
        type: "_dbcs",
        table: function () {
          return On;
        },
      },
      cseuckr: "cp949",
      csksc56011987: "cp949",
      euckr: "cp949",
      isoir149: "cp949",
      korean: "cp949",
      ksc56011987: "cp949",
      ksc56011989: "cp949",
      ksc5601: "cp949",
      windows950: "cp950",
      ms950: "cp950",
      950: "cp950",
      cp950: {
        type: "_dbcs",
        table: function () {
          return En;
        },
      },
      big5: "big5hkscs",
      big5hkscs: {
        type: "_dbcs",
        table: function () {
          return En.concat(Bn);
        },
        encodeSkipVals: [41676],
      },
      cnbig5: "big5hkscs",
      csbig5: "big5hkscs",
      xxbig5: "big5hkscs",
    },
    Ln = re(function (e, t) {
      for (var r = [ur, Pr, qr, Kr, Jr, Qr, fn, Tn], n = 0; n < r.length; n++) {
        e = r[n];
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
      }
    }),
    zn = $.Buffer,
    Dn = Kt.Transform;
  function Rn(e, t) {
    (this.conv = e), ((t = t || {}).decodeStrings = !1), Dn.call(this, t);
  }
  function Mn(e, t) {
    (this.conv = e),
      ((t = t || {}).encoding = this.encoding = "utf8"),
      Dn.call(this, t);
  }
  (Rn.prototype = Object.create(Dn.prototype, { constructor: { value: Rn } })),
    (Rn.prototype._transform = function (e, t, r) {
      if ("string" != typeof e)
        return r(
          new Error("Iconv encoding stream needs strings as its input.")
        );
      try {
        var n = this.conv.write(e);
        n && n.length && this.push(n), r();
      } catch (e) {
        r(e);
      }
    }),
    (Rn.prototype._flush = function (e) {
      try {
        var t = this.conv.end();
        t && t.length && this.push(t), e();
      } catch (t) {
        e(t);
      }
    }),
    (Rn.prototype.collect = function (e) {
      var t = [];
      return (
        this.on("error", e),
        this.on("data", function (e) {
          t.push(e);
        }),
        this.on("end", function () {
          e(null, zn.concat(t));
        }),
        this
      );
    }),
    (Mn.prototype = Object.create(Dn.prototype, {
      constructor: { value: Mn },
    })),
    (Mn.prototype._transform = function (e, t, r) {
      if (!zn.isBuffer(e))
        return r(
          new Error("Iconv decoding stream needs buffers as its input.")
        );
      try {
        var n = this.conv.write(e);
        n && n.length && this.push(n, this.encoding), r();
      } catch (e) {
        r(e);
      }
    }),
    (Mn.prototype._flush = function (e) {
      try {
        var t = this.conv.end();
        t && t.length && this.push(t, this.encoding), e();
      } catch (t) {
        e(t);
      }
    }),
    (Mn.prototype.collect = function (e) {
      var t = "";
      return (
        this.on("error", e),
        this.on("data", function (e) {
          t += e;
        }),
        this.on("end", function () {
          e(null, t);
        }),
        this
      );
    });
  var Fn = $.Buffer,
    Un = re(function (e) {
      var t = tr.Buffer,
        r = e.exports;
      (r.encodings = null),
        (r.defaultCharUnicode = "�"),
        (r.defaultCharSingleByte = "?"),
        (r.encode = function (e, n, i) {
          e = "" + (e || "");
          var a = r.getEncoder(n, i),
            o = a.write(e),
            s = a.end();
          return s && s.length > 0 ? t.concat([o, s]) : o;
        }),
        (r.decode = function (e, n, i) {
          "string" == typeof e &&
            (r.skipDecodeWarning ||
              (console.error(
                "Iconv-lite warning: decode()-ing strings is deprecated. Refer to https://github.com/ashtuchkin/iconv-lite/wiki/Use-Buffers-when-decoding"
              ),
              (r.skipDecodeWarning = !0)),
            (e = t.from("" + (e || ""), "binary")));
          var a = r.getDecoder(n, i),
            o = a.write(e),
            s = a.end();
          return s ? o + s : o;
        }),
        (r.encodingExists = function (e) {
          try {
            return r.getCodec(e), !0;
          } catch (e) {
            return !1;
          }
        }),
        (r.toEncoding = r.encode),
        (r.fromEncoding = r.decode),
        (r._codecDataCache = {}),
        (r.getCodec = function (e) {
          r.encodings || (r.encodings = Ln);
          for (var t = r._canonicalizeEncoding(e), n = {}; ; ) {
            var i = r._codecDataCache[t];
            if (i) return i;
            var a = r.encodings[t];
            switch (typeof a) {
              case "string":
                t = a;
                break;
              case "object":
                for (var o in a) n[o] = a[o];
                n.encodingName || (n.encodingName = t), (t = a.type);
                break;
              case "function":
                return (
                  n.encodingName || (n.encodingName = t),
                  (i = new a(n, r)),
                  (r._codecDataCache[n.encodingName] = i),
                  i
                );
              default:
                throw new Error(
                  "Encoding not recognized: '" +
                    e +
                    "' (searched as: '" +
                    t +
                    "')"
                );
            }
          }
        }),
        (r._canonicalizeEncoding = function (e) {
          return ("" + e).toLowerCase().replace(/:\d{4}$|[^0-9a-z]/g, "");
        }),
        (r.getEncoder = function (e, t) {
          var n = r.getCodec(e),
            i = new n.encoder(t, n);
          return (
            n.bomAware && t && t.addBOM && (i = new or.PrependBOM(i, t)), i
          );
        }),
        (r.getDecoder = function (e, t) {
          var n = r.getCodec(e),
            i = new n.decoder(t, n);
          return (
            !n.bomAware ||
              (t && !1 === t.stripBOM) ||
              (i = new or.StripBOM(i, t)),
            i
          );
        });
      var n = void 0 !== Re && Re.versions && Re.versions.node;
      if (n) {
        var i = n.split(".").map(Number);
        (i[0] > 0 || i[1] >= 10) &&
          (function (e) {
            (e.encodeStream = function (t, r) {
              return new Rn(e.getEncoder(t, r), r);
            }),
              (e.decodeStream = function (t, r) {
                return new Mn(e.getDecoder(t, r), r);
              }),
              (e.supportsStreams = !0),
              (e.IconvLiteEncoderStream = Rn),
              (e.IconvLiteDecoderStream = Mn),
              (e._collect = Mn.prototype.collect);
          })(r),
          (function (e) {
            var t = void 0;
            (e.supportsNodeEncodingsExtension = !(
              Fn.from || new Fn(0) instanceof Uint8Array
            )),
              (e.extendNodeEncodings = function () {
                if (!t) {
                  if (((t = {}), !e.supportsNodeEncodingsExtension))
                    return (
                      console.error(
                        "ACTION NEEDED: require('iconv-lite').extendNodeEncodings() is not supported in your version of Node"
                      ),
                      void console.error(
                        "See more info at https://github.com/ashtuchkin/iconv-lite/wiki/Node-v4-compatibility"
                      )
                    );
                  var r = {
                    hex: !0,
                    utf8: !0,
                    "utf-8": !0,
                    ascii: !0,
                    binary: !0,
                    base64: !0,
                    ucs2: !0,
                    "ucs-2": !0,
                    utf16le: !0,
                    "utf-16le": !0,
                  };
                  Fn.isNativeEncoding = function (e) {
                    return e && r[e.toLowerCase()];
                  };
                  var n = $.SlowBuffer;
                  if (
                    ((t.SlowBufferToString = n.prototype.toString),
                    (n.prototype.toString = function (r, n, i) {
                      return (
                        (r = String(r || "utf8").toLowerCase()),
                        Fn.isNativeEncoding(r)
                          ? t.SlowBufferToString.call(this, r, n, i)
                          : (void 0 === n && (n = 0),
                            void 0 === i && (i = this.length),
                            e.decode(this.slice(n, i), r))
                      );
                    }),
                    (t.SlowBufferWrite = n.prototype.write),
                    (n.prototype.write = function (r, n, i, a) {
                      if (isFinite(n)) isFinite(i) || ((a = i), (i = void 0));
                      else {
                        var o = a;
                        (a = n), (n = i), (i = o);
                      }
                      n = +n || 0;
                      var s = this.length - n;
                      if (
                        (i ? (i = +i) > s && (i = s) : (i = s),
                        (a = String(a || "utf8").toLowerCase()),
                        Fn.isNativeEncoding(a))
                      )
                        return t.SlowBufferWrite.call(this, r, n, i, a);
                      if (r.length > 0 && (i < 0 || n < 0))
                        throw new RangeError(
                          "attempt to write beyond buffer bounds"
                        );
                      var u = e.encode(r, a);
                      return (
                        u.length < i && (i = u.length), u.copy(this, n, 0, i), i
                      );
                    }),
                    (t.BufferIsEncoding = Fn.isEncoding),
                    (Fn.isEncoding = function (t) {
                      return Fn.isNativeEncoding(t) || e.encodingExists(t);
                    }),
                    (t.BufferByteLength = Fn.byteLength),
                    (Fn.byteLength = n.byteLength =
                      function (r, n) {
                        return (
                          (n = String(n || "utf8").toLowerCase()),
                          Fn.isNativeEncoding(n)
                            ? t.BufferByteLength.call(this, r, n)
                            : e.encode(r, n).length
                        );
                      }),
                    (t.BufferToString = Fn.prototype.toString),
                    (Fn.prototype.toString = function (r, n, i) {
                      return (
                        (r = String(r || "utf8").toLowerCase()),
                        Fn.isNativeEncoding(r)
                          ? t.BufferToString.call(this, r, n, i)
                          : (void 0 === n && (n = 0),
                            void 0 === i && (i = this.length),
                            e.decode(this.slice(n, i), r))
                      );
                    }),
                    (t.BufferWrite = Fn.prototype.write),
                    (Fn.prototype.write = function (r, n, i, a) {
                      var o = n,
                        s = i,
                        u = a;
                      if (isFinite(n)) isFinite(i) || ((a = i), (i = void 0));
                      else {
                        var l = a;
                        (a = n), (n = i), (i = l);
                      }
                      if (
                        ((a = String(a || "utf8").toLowerCase()),
                        Fn.isNativeEncoding(a))
                      )
                        return t.BufferWrite.call(this, r, o, s, u);
                      n = +n || 0;
                      var c = this.length - n;
                      if (
                        (i ? (i = +i) > c && (i = c) : (i = c),
                        r.length > 0 && (i < 0 || n < 0))
                      )
                        throw new RangeError(
                          "attempt to write beyond buffer bounds"
                        );
                      var f = e.encode(r, a);
                      return (
                        f.length < i && (i = f.length), f.copy(this, n, 0, i), i
                      );
                    }),
                    e.supportsStreams)
                  ) {
                    var i = Kt.Readable;
                    (t.ReadableSetEncoding = i.prototype.setEncoding),
                      (i.prototype.setEncoding = function (t, r) {
                        (this._readableState.decoder = e.getDecoder(t, r)),
                          (this._readableState.encoding = t);
                      }),
                      (i.prototype.collect = e._collect);
                  }
                }
              }),
              (e.undoExtendNodeEncodings = function () {
                if (e.supportsNodeEncodingsExtension) {
                  if (!t)
                    throw new Error(
                      "require('iconv-lite').undoExtendNodeEncodings(): Nothing to undo; extendNodeEncodings() is not called."
                    );
                  delete Fn.isNativeEncoding;
                  var r = $.SlowBuffer;
                  if (
                    ((r.prototype.toString = t.SlowBufferToString),
                    (r.prototype.write = t.SlowBufferWrite),
                    (Fn.isEncoding = t.BufferIsEncoding),
                    (Fn.byteLength = t.BufferByteLength),
                    (Fn.prototype.toString = t.BufferToString),
                    (Fn.prototype.write = t.BufferWrite),
                    e.supportsStreams)
                  ) {
                    var n = Kt.Readable;
                    (n.prototype.setEncoding = t.ReadableSetEncoding),
                      delete n.prototype.collect;
                  }
                  t = void 0;
                }
              });
          })(r);
      }
    }),
    Nn = re(function (e) {
      (function () {
        var t, r;
        try {
          r = Un;
        } catch (e) {}
        (t = (function () {
          var e;
          function t(e) {
            (this.buffer = e),
              (this.pos = 0),
              (this.length = this.buffer.length);
          }
          for (e in ((t.TYPES = {
            UInt8: 1,
            UInt16: 2,
            UInt24: 3,
            UInt32: 4,
            Int8: 1,
            Int16: 2,
            Int24: 3,
            Int32: 4,
            Float: 4,
            Double: 8,
          }),
          g.prototype))
            "read" === e.slice(0, 4) &&
              (function (e) {
                var r;
                (r = t.TYPES[e.replace(/read|[BL]E/g, "")]),
                  (t.prototype[e] = function () {
                    var t;
                    return (t = this.buffer[e](this.pos)), (this.pos += r), t;
                  });
              })(e);
          return (
            (t.prototype.readString = function (e, t) {
              var n, i, a, o, s;
              switch ((null == t && (t = "ascii"), t)) {
                case "utf16le":
                case "ucs2":
                case "utf8":
                case "ascii":
                  return this.buffer.toString(t, this.pos, (this.pos += e));
                case "utf16be":
                  for (
                    a = o = 0, s = (n = new g(this.readBuffer(e))).length - 1;
                    o < s;
                    a = o += 2
                  )
                    (i = n[a]), (n[a] = n[a + 1]), (n[a + 1] = i);
                  return n.toString("utf16le");
                default:
                  if (((n = this.readBuffer(e)), r))
                    try {
                      return r.decode(n, t);
                    } catch (e) {}
                  return n;
              }
            }),
            (t.prototype.readBuffer = function (e) {
              return this.buffer.slice(this.pos, (this.pos += e));
            }),
            (t.prototype.readUInt24BE = function () {
              return (this.readUInt16BE() << 8) + this.readUInt8();
            }),
            (t.prototype.readUInt24LE = function () {
              return this.readUInt16LE() + (this.readUInt8() << 16);
            }),
            (t.prototype.readInt24BE = function () {
              return (this.readInt16BE() << 8) + this.readUInt8();
            }),
            (t.prototype.readInt24LE = function () {
              return this.readUInt16LE() + (this.readInt8() << 16);
            }),
            t
          );
        })()),
          (e.exports = t);
      }.call(ee));
    }),
    jn = re(function (e) {
      (function () {
        var t,
          r,
          n,
          i,
          a = {}.hasOwnProperty;
        (i = Kt), (t = Nn);
        try {
          n = Un;
        } catch (e) {}
        (r = (function (e) {
          var r;
          function i(e) {
            null == e && (e = 65536),
              i.__super__.constructor.apply(this, arguments),
              (this.buffer = new g(e)),
              (this.bufferOffset = 0),
              (this.pos = 0);
          }
          for (r in ((function (e, t) {
            for (var r in t) a.call(t, r) && (e[r] = t[r]);
            function n() {
              this.constructor = e;
            }
            (n.prototype = t.prototype),
              (e.prototype = new n()),
              (e.__super__ = t.prototype);
          })(i, e),
          g.prototype))
            "write" === r.slice(0, 5) &&
              (function (e) {
                var r;
                (r = +t.TYPES[e.replace(/write|[BL]E/g, "")]),
                  (i.prototype[e] = function (t) {
                    return (
                      this.ensure(r),
                      this.buffer[e](t, this.bufferOffset),
                      (this.bufferOffset += r),
                      (this.pos += r)
                    );
                  });
              })(r);
          return (
            (i.prototype._read = function () {}),
            (i.prototype.ensure = function (e) {
              if (this.bufferOffset + e > this.buffer.length)
                return this.flush();
            }),
            (i.prototype.flush = function () {
              if (this.bufferOffset > 0)
                return (
                  this.push(new g(this.buffer.slice(0, this.bufferOffset))),
                  (this.bufferOffset = 0)
                );
            }),
            (i.prototype.writeBuffer = function (e) {
              return this.flush(), this.push(e), (this.pos += e.length);
            }),
            (i.prototype.writeString = function (e, t) {
              var r, i, a, o, s;
              switch ((null == t && (t = "ascii"), t)) {
                case "utf16le":
                case "ucs2":
                case "utf8":
                case "ascii":
                  return this.writeBuffer(new g(e, t));
                case "utf16be":
                  for (
                    a = o = 0, s = (r = new g(e, "utf16le")).length - 1;
                    o < s;
                    a = o += 2
                  )
                    (i = r[a]), (r[a] = r[a + 1]), (r[a + 1] = i);
                  return this.writeBuffer(r);
                default:
                  if (n) return this.writeBuffer(n.encode(e, t));
                  throw new Error(
                    "Install iconv-lite to enable additional string encodings."
                  );
              }
            }),
            (i.prototype.writeUInt24BE = function (e) {
              return (
                this.ensure(3),
                (this.buffer[this.bufferOffset++] = (e >>> 16) & 255),
                (this.buffer[this.bufferOffset++] = (e >>> 8) & 255),
                (this.buffer[this.bufferOffset++] = 255 & e),
                (this.pos += 3)
              );
            }),
            (i.prototype.writeUInt24LE = function (e) {
              return (
                this.ensure(3),
                (this.buffer[this.bufferOffset++] = 255 & e),
                (this.buffer[this.bufferOffset++] = (e >>> 8) & 255),
                (this.buffer[this.bufferOffset++] = (e >>> 16) & 255),
                (this.pos += 3)
              );
            }),
            (i.prototype.writeInt24BE = function (e) {
              return e >= 0
                ? this.writeUInt24BE(e)
                : this.writeUInt24BE(e + 16777215 + 1);
            }),
            (i.prototype.writeInt24LE = function (e) {
              return e >= 0
                ? this.writeUInt24LE(e)
                : this.writeUInt24LE(e + 16777215 + 1);
            }),
            (i.prototype.fill = function (e, t) {
              var r;
              return t < this.buffer.length
                ? (this.ensure(t),
                  this.buffer.fill(e, this.bufferOffset, this.bufferOffset + t),
                  (this.bufferOffset += t),
                  (this.pos += t))
                : ((r = new g(t)).fill(e), this.writeBuffer(r));
            }),
            (i.prototype.end = function () {
              return this.flush(), this.push(null);
            }),
            i
          );
        })(i.Readable)),
          (e.exports = r);
      }.call(ee));
    }),
    Gn = re(function (e, t) {
      (function () {
        var e,
          r,
          n,
          i = {}.hasOwnProperty;
        (e = Nn),
          (n = (function () {
            function t(e, t) {
              (this.type = e),
                (this.endian = null != t ? t : "BE"),
                (this.fn = this.type),
                "8" !== this.type[this.type.length - 1] &&
                  (this.fn += this.endian);
            }
            return (
              (t.prototype.size = function () {
                return e.TYPES[this.type];
              }),
              (t.prototype.decode = function (e) {
                return e["read" + this.fn]();
              }),
              (t.prototype.encode = function (e, t) {
                return e["write" + this.fn](t);
              }),
              t
            );
          })()),
          (t.Number = n),
          (t.uint8 = new n("UInt8")),
          (t.uint16be = t.uint16 = new n("UInt16", "BE")),
          (t.uint16le = new n("UInt16", "LE")),
          (t.uint24be = t.uint24 = new n("UInt24", "BE")),
          (t.uint24le = new n("UInt24", "LE")),
          (t.uint32be = t.uint32 = new n("UInt32", "BE")),
          (t.uint32le = new n("UInt32", "LE")),
          (t.int8 = new n("Int8")),
          (t.int16be = t.int16 = new n("Int16", "BE")),
          (t.int16le = new n("Int16", "LE")),
          (t.int24be = t.int24 = new n("Int24", "BE")),
          (t.int24le = new n("Int24", "LE")),
          (t.int32be = t.int32 = new n("Int32", "BE")),
          (t.int32le = new n("Int32", "LE")),
          (t.floatbe = t.float = new n("Float", "BE")),
          (t.floatle = new n("Float", "LE")),
          (t.doublebe = t.double = new n("Double", "BE")),
          (t.doublele = new n("Double", "LE")),
          (r = (function (e) {
            function t(e, r, n) {
              null == n && (n = e >> 1),
                t.__super__.constructor.call(this, "Int" + e, r),
                (this._point = 1 << n);
            }
            return (
              (function (e, t) {
                for (var r in t) i.call(t, r) && (e[r] = t[r]);
                function n() {
                  this.constructor = e;
                }
                (n.prototype = t.prototype),
                  (e.prototype = new n()),
                  (e.__super__ = t.prototype);
              })(t, n),
              (t.prototype.decode = function (e) {
                return t.__super__.decode.call(this, e) / this._point;
              }),
              (t.prototype.encode = function (e, r) {
                return t.__super__.encode.call(this, e, (r * this._point) | 0);
              }),
              t
            );
          })()),
          (t.Fixed = r),
          (t.fixed16be = t.fixed16 = new r(16, "BE")),
          (t.fixed16le = new r(16, "LE")),
          (t.fixed32be = t.fixed32 = new r(32, "BE")),
          (t.fixed32le = new r(32, "LE"));
      }.call(ee));
    }),
    Vn =
      (Gn.Number,
      Gn.uint8,
      Gn.uint16be,
      Gn.uint16,
      Gn.uint16le,
      Gn.uint24be,
      Gn.uint24,
      Gn.uint24le,
      Gn.uint32be,
      Gn.uint32,
      Gn.uint32le,
      Gn.int8,
      Gn.int16be,
      Gn.int16,
      Gn.int16le,
      Gn.int24be,
      Gn.int24,
      Gn.int24le,
      Gn.int32be,
      Gn.int32,
      Gn.int32le,
      Gn.floatbe,
      Gn.floatle,
      Gn.doublebe,
      Gn.doublele,
      Gn.Fixed,
      Gn.fixed16be,
      Gn.fixed16,
      Gn.fixed16le,
      Gn.fixed32be,
      Gn.fixed32,
      Gn.fixed32le,
      re(function (e, t) {
        (function () {
          var e, r;
          (e = Gn.Number),
            (t.resolveLength = function (t, r, n) {
              var i;
              if (
                ("number" == typeof t
                  ? (i = t)
                  : "function" == typeof t
                  ? (i = t.call(n, n))
                  : n && "string" == typeof t
                  ? (i = n[t])
                  : r && t instanceof e && (i = t.decode(r)),
                isNaN(i))
              )
                throw new Error("Not a fixed size");
              return i;
            }),
            (r = (function () {
              return function (e) {
                var t, r;
                for (t in (null == e && (e = {}),
                (this.enumerable = !0),
                (this.configurable = !0),
                e))
                  (r = e[t]), (this[t] = r);
              };
            })()),
            (t.PropertyDescriptor = r);
        }.call(ee));
      })),
    _n = Vn.resolveLength,
    qn = Vn.PropertyDescriptor,
    Wn = re(function (e) {
      (function () {
        var t, r, n;
        (r = Gn.Number),
          (n = Vn),
          (t = (function () {
            function e(e, t, r) {
              (this.type = e),
                (this.length = t),
                (this.lengthType = null != r ? r : "count");
            }
            return (
              (e.prototype.decode = function (e, t) {
                var i, a, o, s, u, l;
                if (
                  ((o = e.pos),
                  (s = []),
                  (i = t),
                  null != this.length &&
                    (a = n.resolveLength(this.length, e, t)),
                  this.length instanceof r &&
                    (Object.defineProperties(s, {
                      parent: { value: t },
                      _startOffset: { value: o },
                      _currentOffset: { value: 0, writable: !0 },
                      _length: { value: a },
                    }),
                    (i = s)),
                  null == a || "bytes" === this.lengthType)
                )
                  for (
                    u =
                      null != a
                        ? e.pos + a
                        : (null != t ? t._length : void 0)
                        ? t._startOffset + t._length
                        : e.length;
                    e.pos < u;

                  )
                    s.push(this.type.decode(e, i));
                else for (l = 0; l < a; l += 1) s.push(this.type.decode(e, i));
                return s;
              }),
              (e.prototype.size = function (e, t) {
                var i, a, o, s;
                if (!e)
                  return (
                    this.type.size(null, t) *
                    n.resolveLength(this.length, null, t)
                  );
                for (
                  a = 0,
                    this.length instanceof r &&
                      ((a += this.length.size()), (t = { parent: t })),
                    o = 0,
                    s = e.length;
                  o < s;
                  o++
                )
                  (i = e[o]), (a += this.type.size(i, t));
                return a;
              }),
              (e.prototype.encode = function (e, t, n) {
                var i, a, o, s, u, l;
                for (
                  i = n,
                    this.length instanceof r &&
                      (((i = {
                        pointers: [],
                        startOffset: e.pos,
                        parent: n,
                      }).pointerOffset = e.pos + this.size(t, i)),
                      this.length.encode(e, t.length)),
                    u = 0,
                    l = t.length;
                  u < l;
                  u++
                )
                  (o = t[u]), this.type.encode(e, o, i);
                if (this.length instanceof r)
                  for (a = 0; a < i.pointers.length; )
                    (s = i.pointers[a++]).type.encode(e, s.val);
              }),
              e
            );
          })()),
          (e.exports = t);
      }.call(ee));
    }),
    Hn = re(function (e) {
      (function () {
        var t,
          r,
          n,
          i,
          a,
          o,
          s = {}.hasOwnProperty;
        (t = Wn),
          (i = Gn.Number),
          (o = Vn),
          (a = lt),
          (n = (function (e) {
            function n() {
              return n.__super__.constructor.apply(this, arguments);
            }
            return (
              (function (e, t) {
                for (var r in t) s.call(t, r) && (e[r] = t[r]);
                function n() {
                  this.constructor = e;
                }
                (n.prototype = t.prototype),
                  (e.prototype = new n()),
                  (e.__super__ = t.prototype);
              })(n, t),
              (n.prototype.decode = function (e, t) {
                var n, a, s;
                return (
                  (a = e.pos),
                  (n = o.resolveLength(this.length, e, t)),
                  this.length instanceof i &&
                    (t = {
                      parent: t,
                      _startOffset: a,
                      _currentOffset: 0,
                      _length: n,
                    }),
                  (s = new r(this.type, n, e, t)),
                  (e.pos += n * this.type.size(null, t)),
                  s
                );
              }),
              (n.prototype.size = function (e, t) {
                return (
                  e instanceof r && (e = e.toArray()),
                  n.__super__.size.call(this, e, t)
                );
              }),
              (n.prototype.encode = function (e, t, i) {
                return (
                  t instanceof r && (t = t.toArray()),
                  n.__super__.encode.call(this, e, t, i)
                );
              }),
              n
            );
          })()),
          (r = (function () {
            function e(e, t, r, n) {
              (this.type = e),
                (this.length = t),
                (this.stream = r),
                (this.ctx = n),
                (this.base = this.stream.pos),
                (this.items = []);
            }
            return (
              (e.prototype.get = function (e) {
                var t;
                if (!(e < 0 || e >= this.length))
                  return (
                    null == this.items[e] &&
                      ((t = this.stream.pos),
                      (this.stream.pos =
                        this.base + this.type.size(null, this.ctx) * e),
                      (this.items[e] = this.type.decode(this.stream, this.ctx)),
                      (this.stream.pos = t)),
                    this.items[e]
                  );
              }),
              (e.prototype.toArray = function () {
                var e, t, r, n;
                for (n = [], e = t = 0, r = this.length; t < r; e = t += 1)
                  n.push(this.get(e));
                return n;
              }),
              (e.prototype.inspect = function () {
                return a(this.toArray());
              }),
              e
            );
          })()),
          (e.exports = n);
      }.call(ee));
    }),
    Yn = re(function (e) {
      (function () {
        var t;
        (t = (function () {
          function e(e, t) {
            (this.type = e), (this.flags = null != t ? t : []);
          }
          return (
            (e.prototype.decode = function (e) {
              var t, r, n, i, a, o, s;
              for (
                i = this.type.decode(e),
                  n = {},
                  r = a = 0,
                  o = (s = this.flags).length;
                a < o;
                r = ++a
              )
                null != (t = s[r]) && (n[t] = !!(i & (1 << r)));
              return n;
            }),
            (e.prototype.size = function () {
              return this.type.size();
            }),
            (e.prototype.encode = function (e, t) {
              var r, n, i, a, o, s;
              for (
                i = 0, n = a = 0, o = (s = this.flags).length;
                a < o;
                n = ++a
              )
                null != (r = s[n]) && t[r] && (i |= 1 << n);
              return this.type.encode(e, i);
            }),
            e
          );
        })()),
          (e.exports = t);
      }.call(ee));
    }),
    Zn = re(function (e) {
      (function () {
        var t;
        (t = (function () {
          function e(e) {
            this.type = e;
          }
          return (
            (e.prototype.decode = function (e, t) {
              return !!this.type.decode(e, t);
            }),
            (e.prototype.size = function (e, t) {
              return this.type.size(e, t);
            }),
            (e.prototype.encode = function (e, t, r) {
              return this.type.encode(e, +t, r);
            }),
            e
          );
        })()),
          (e.exports = t);
      }.call(ee));
    }),
    Xn = re(function (e) {
      (function () {
        var t, r, n;
        (n = Vn),
          (r = Gn.Number),
          (t = (function () {
            function e(e) {
              this.length = e;
            }
            return (
              (e.prototype.decode = function (e, t) {
                var r;
                return (
                  (r = n.resolveLength(this.length, e, t)), e.readBuffer(r)
                );
              }),
              (e.prototype.size = function (e, t) {
                return e ? e.length : n.resolveLength(this.length, null, t);
              }),
              (e.prototype.encode = function (e, t, n) {
                return (
                  this.length instanceof r && this.length.encode(e, t.length),
                  e.writeBuffer(t)
                );
              }),
              e
            );
          })()),
          (e.exports = t);
      }.call(ee));
    }),
    Kn = re(function (e) {
      (function () {
        var t;
        (t = (function () {
          function e(e, t) {
            (this.type = e), (this.options = null != t ? t : []);
          }
          return (
            (e.prototype.decode = function (e) {
              var t;
              return (t = this.type.decode(e)), this.options[t] || t;
            }),
            (e.prototype.size = function () {
              return this.type.size();
            }),
            (e.prototype.encode = function (e, t) {
              var r;
              if (-1 === (r = this.options.indexOf(t)))
                throw new Error("Unknown option in enum: " + t);
              return this.type.encode(e, r);
            }),
            e
          );
        })()),
          (e.exports = t);
      }.call(ee));
    }),
    Jn = re(function (e) {
      (function () {
        var t;
        (t = (function () {
          function e(e, t) {
            (this.type = e), (this.condition = null == t || t);
          }
          return (
            (e.prototype.decode = function (e, t) {
              var r;
              if (
                ("function" == typeof (r = this.condition) &&
                  (r = r.call(t, t)),
                r)
              )
                return this.type.decode(e, t);
            }),
            (e.prototype.size = function (e, t) {
              var r;
              return (
                "function" == typeof (r = this.condition) && (r = r.call(t, t)),
                r ? this.type.size(e, t) : 0
              );
            }),
            (e.prototype.encode = function (e, t, r) {
              var n;
              if (
                ("function" == typeof (n = this.condition) &&
                  (n = n.call(r, r)),
                n)
              )
                return this.type.encode(e, t, r);
            }),
            e
          );
        })()),
          (e.exports = t);
      }.call(ee));
    }),
    Qn = re(function (e) {
      (function () {
        var t, r;
        (r = Vn),
          (t = (function () {
            function e(e, t) {
              (this.type = e), (this.count = null != t ? t : 1);
            }
            return (
              (e.prototype.decode = function (e, t) {
                e.pos += this.size(null, t);
              }),
              (e.prototype.size = function (e, t) {
                var n;
                return (
                  (n = r.resolveLength(this.count, null, t)),
                  this.type.size() * n
                );
              }),
              (e.prototype.encode = function (e, t, r) {
                return e.fill(0, this.size(t, r));
              }),
              e
            );
          })()),
          (e.exports = t);
      }.call(ee));
    }),
    $n = re(function (e) {
      (function () {
        var t, r, n;
        (t = Gn.Number),
          (n = Vn),
          (r = (function () {
            function e(e, t) {
              (this.length = e), (this.encoding = null != t ? t : "ascii");
            }
            return (
              (e.prototype.decode = function (e, t) {
                var r, i, a, o, s;
                return (
                  (a = function () {
                    if (null != this.length)
                      return n.resolveLength(this.length, e, t);
                    for (
                      r = e.buffer, a = e.length, o = e.pos;
                      o < a && 0 !== r[o];

                    )
                      ++o;
                    return o - e.pos;
                  }.call(this)),
                  "function" == typeof (i = this.encoding) &&
                    (i = i.call(t, t) || "ascii"),
                  (s = e.readString(a, i)),
                  null == this.length && e.pos < e.length && e.pos++,
                  s
                );
              }),
              (e.prototype.size = function (e, r) {
                var i, a;
                return e
                  ? ("function" == typeof (i = this.encoding) &&
                      (i =
                        i.call(
                          null != r ? r.val : void 0,
                          null != r ? r.val : void 0
                        ) || "ascii"),
                    "utf16be" === i && (i = "utf16le"),
                    (a = g.byteLength(e, i)),
                    this.length instanceof t && (a += this.length.size()),
                    null == this.length && a++,
                    a)
                  : n.resolveLength(this.length, null, r);
              }),
              (e.prototype.encode = function (e, r, n) {
                var i;
                if (
                  ("function" == typeof (i = this.encoding) &&
                    (i =
                      i.call(
                        null != n ? n.val : void 0,
                        null != n ? n.val : void 0
                      ) || "ascii"),
                  this.length instanceof t &&
                    this.length.encode(e, g.byteLength(r, i)),
                  e.writeString(r, i),
                  null == this.length)
                )
                  return e.writeUInt8(0);
              }),
              e
            );
          })()),
          (e.exports = r);
      }.call(ee));
    }),
    ei = re(function (e) {
      (function () {
        var t, r;
        (r = Vn),
          (t = (function () {
            function e(e) {
              this.fields = null != e ? e : {};
            }
            return (
              (e.prototype.decode = function (e, t, r) {
                var n, i;
                return (
                  null == r && (r = 0),
                  (n = this._setup(e, t, r)),
                  this._parseFields(e, n, this.fields),
                  null != (i = this.process) && i.call(n, e),
                  n
                );
              }),
              (e.prototype._setup = function (e, t, r) {
                var n;
                return (
                  (n = {}),
                  Object.defineProperties(n, {
                    parent: { value: t },
                    _startOffset: { value: e.pos },
                    _currentOffset: { value: 0, writable: !0 },
                    _length: { value: r },
                  }),
                  n
                );
              }),
              (e.prototype._parseFields = function (e, t, n) {
                var i, a, o;
                for (i in n)
                  void 0 !==
                    (o =
                      "function" == typeof (a = n[i])
                        ? a.call(t, t)
                        : a.decode(e, t)) &&
                    (o instanceof r.PropertyDescriptor
                      ? Object.defineProperty(t, i, o)
                      : (t[i] = o)),
                    (t._currentOffset = e.pos - t._startOffset);
              }),
              (e.prototype.size = function (e, t, r) {
                var n, i, a, o, s;
                for (i in (null == e && (e = {}),
                null == r && (r = !0),
                (n = { parent: t, val: e, pointerSize: 0 }),
                (a = 0),
                (s = this.fields)))
                  null != (o = s[i]).size && (a += o.size(e[i], n));
                return r && (a += n.pointerSize), a;
              }),
              (e.prototype.encode = function (e, t, r) {
                var n, i, a, o, s, u, l;
                for (a in (null != (u = this.preEncode) && u.call(t, e),
                ((n = {
                  pointers: [],
                  startOffset: e.pos,
                  parent: r,
                  val: t,
                  pointerSize: 0,
                }).pointerOffset = e.pos + this.size(t, n, !1)),
                (l = this.fields)))
                  null != (s = l[a]).encode && s.encode(e, t[a], n);
                for (i = 0; i < n.pointers.length; )
                  (o = n.pointers[i++]).type.encode(e, o.val, o.parent);
              }),
              e
            );
          })()),
          (e.exports = t);
      }.call(ee));
    }),
    ti = re(function (e) {
      (function () {
        var t,
          r,
          n = {}.hasOwnProperty;
        (t = ei),
          (r = (function (e) {
            function r(e, t) {
              (this.type = e), (this.versions = null != t ? t : {});
            }
            return (
              (function (e, t) {
                for (var r in t) n.call(t, r) && (e[r] = t[r]);
                function i() {
                  this.constructor = e;
                }
                (i.prototype = t.prototype),
                  (e.prototype = new i()),
                  (e.__super__ = t.prototype);
              })(r, t),
              (r.prototype.versionGetter = function (e) {
                if ("string" == typeof this.type)
                  return this.type.split(".").reduce(function (e, t) {
                    return void 0 !== e ? e[t] : void 0;
                  }, e);
              }),
              (r.prototype.versionSetter = function (e, t) {
                if ("string" == typeof this.type)
                  return this.type.split(".").reduce(function (e, r) {
                    return (e[r] = t);
                  }, e);
              }),
              (r.prototype.decode = function (e, t, n) {
                var i, a, o;
                if (
                  (null == n && (n = 0),
                  (a = this._setup(e, t, n)),
                  "string" == typeof this.type
                    ? (a.version = this.versionGetter(t))
                    : (a.version = this.type.decode(e)),
                  this.versions.header &&
                    this._parseFields(e, a, this.versions.header),
                  null == (i = this.versions[a.version]))
                )
                  throw new Error("Unknown version " + a.version);
                return i instanceof r
                  ? i.decode(e, t)
                  : (this._parseFields(e, a, i),
                    null != (o = this.process) && o.call(a, e),
                    a);
              }),
              (r.prototype.size = function (e, t, r) {
                var n, i, a, o, s, u;
                if ((null == r && (r = !0), !e))
                  throw new Error("Not a fixed size");
                if (
                  ((n = { parent: t, val: e, pointerSize: 0 }),
                  (o = 0),
                  "string" != typeof this.type &&
                    (o += this.type.size(e.version, n)),
                  this.versions.header)
                )
                  for (a in (u = this.versions.header))
                    null != (s = u[a]).size && (o += s.size(e[a], n));
                if (null == (i = this.versions[e.version]))
                  throw new Error("Unknown version " + e.version);
                for (a in i) null != (s = i[a]).size && (o += s.size(e[a], n));
                return r && (o += n.pointerSize), o;
              }),
              (r.prototype.encode = function (e, t, r) {
                var n, i, a, o, s, u, l, c;
                if (
                  (null != (l = this.preEncode) && l.call(t, e),
                  ((n = {
                    pointers: [],
                    startOffset: e.pos,
                    parent: r,
                    val: t,
                    pointerSize: 0,
                  }).pointerOffset = e.pos + this.size(t, n, !1)),
                  "string" != typeof this.type &&
                    this.type.encode(e, t.version),
                  this.versions.header)
                )
                  for (o in (c = this.versions.header))
                    null != (u = c[o]).encode && u.encode(e, t[o], n);
                for (o in (i = this.versions[t.version]))
                  null != (u = i[o]).encode && u.encode(e, t[o], n);
                for (a = 0; a < n.pointers.length; )
                  (s = n.pointers[a++]).type.encode(e, s.val, s.parent);
              }),
              r
            );
          })()),
          (e.exports = r);
      }.call(ee));
    }),
    ri = re(function (e, t) {
      (function () {
        var e, r, n;
        (n = Vn),
          (e = (function () {
            function e(e, t, r) {
              var n, i, a, o;
              (this.offsetType = e),
                (this.type = t),
                (this.options = null != r ? r : {}),
                "void" === this.type && (this.type = null),
                null == (n = this.options).type && (n.type = "local"),
                null == (i = this.options).allowNull && (i.allowNull = !0),
                null == (a = this.options).nullValue && (a.nullValue = 0),
                null == (o = this.options).lazy && (o.lazy = !1);
            }
            return (
              (e.prototype.relativeToGetter = function (e) {
                return this.options.relativeTo
                  .split(".")
                  .reduce(function (e, t) {
                    return e[t];
                  }, e);
              }),
              (e.prototype.decode = function (e, t) {
                var r, i, a, o, s, u, l;
                return (a = this.offsetType.decode(e, t)) ===
                  this.options.nullValue && this.options.allowNull
                  ? null
                  : ((s = function () {
                      switch (this.options.type) {
                        case "local":
                          return t._startOffset;
                        case "immediate":
                          return e.pos - this.offsetType.size();
                        case "parent":
                          return t.parent._startOffset;
                        default:
                          for (r = t; r.parent; ) r = r.parent;
                          return r._startOffset || 0;
                      }
                    }.call(this)),
                    this.options.relativeTo && (s += this.relativeToGetter(t)),
                    (o = a + s),
                    null != this.type
                      ? ((u = null),
                        (l = this),
                        (i = function () {
                          var r;
                          return null != u
                            ? u
                            : ((r = e.pos),
                              (e.pos = o),
                              (u = l.type.decode(e, t)),
                              (e.pos = r),
                              u);
                        }),
                        this.options.lazy
                          ? new n.PropertyDescriptor({ get: i })
                          : i())
                      : o);
              }),
              (e.prototype.size = function (e, t) {
                var n, i;
                switch (((n = t), this.options.type)) {
                  case "local":
                  case "immediate":
                    break;
                  case "parent":
                    t = t.parent;
                    break;
                  default:
                    for (; t.parent; ) t = t.parent;
                }
                if (null == (i = this.type)) {
                  if (!(e instanceof r))
                    throw new Error("Must be a VoidPointer");
                  (i = e.type), (e = e.value);
                }
                return (
                  e && t && (t.pointerSize += i.size(e, n)),
                  this.offsetType.size()
                );
              }),
              (e.prototype.encode = function (e, t, n) {
                var i, a, o;
                if (((i = n), null != t)) {
                  switch (this.options.type) {
                    case "local":
                      a = n.startOffset;
                      break;
                    case "immediate":
                      a = e.pos + this.offsetType.size(t, i);
                      break;
                    case "parent":
                      a = (n = n.parent).startOffset;
                      break;
                    default:
                      for (a = 0; n.parent; ) n = n.parent;
                  }
                  if (
                    (this.options.relativeTo &&
                      (a += this.relativeToGetter(i.val)),
                    this.offsetType.encode(e, n.pointerOffset - a),
                    null == (o = this.type))
                  ) {
                    if (!(t instanceof r))
                      throw new Error("Must be a VoidPointer");
                    (o = t.type), (t = t.value);
                  }
                  return (
                    n.pointers.push({ type: o, val: t, parent: i }),
                    (n.pointerOffset += o.size(t, i))
                  );
                }
                this.offsetType.encode(e, this.options.nullValue);
              }),
              e
            );
          })()),
          (r = (function () {
            return function (e, t) {
              (this.type = e), (this.value = t);
            };
          })()),
          (t.Pointer = e),
          (t.VoidPointer = r);
      }.call(ee));
    }),
    ni =
      (ri.Pointer,
      ri.VoidPointer,
      re(function (e, t) {
        (function () {
          var e, r, n, i;
          for (e in ((t.EncodeStream = jn),
          (t.DecodeStream = Nn),
          (t.Array = Wn),
          (t.LazyArray = Hn),
          (t.Bitfield = Yn),
          (t.Boolean = Zn),
          (t.Buffer = Xn),
          (t.Enum = Kn),
          (t.Optional = Jn),
          (t.Reserved = Qn),
          (t.String = $n),
          (t.Struct = ei),
          (t.VersionedStruct = ti),
          (n = Gn)))
            (r = n[e]), (t[e] = r);
          for (e in (i = ri)) (r = i[e]), (t[e] = r);
        }.call(ee));
      })),
    ii =
      (ni.EncodeStream,
      ni.DecodeStream,
      ni.Array,
      ni.LazyArray,
      ni.Bitfield,
      ni.Boolean,
      ni.Buffer,
      ni.Enum,
      ni.Optional,
      ni.Reserved,
      ni.String,
      ni.Struct,
      ni.VersionedStruct,
      []),
    ai = {
      logErrors: !1,
      registerFormat: function (e) {
        ii.push(e);
      },
      create: function (e, t) {
        for (var r = new g.from(e), n = 0; n < ii.length; n++) {
          var i = ii[n];
          if (i.probe(r)) {
            var a = new i(new ni.DecodeStream(r));
            return t ? a.getFont(t) : a;
          }
        }
        throw new Error("Unknown font format");
      },
    };
  function oi(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function si(e, t, r) {
    return t && oi(e.prototype, t), r && oi(e, r), e;
  }
  function ui(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  function li(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      (e.__proto__ = t);
  }
  function ci(e, t, r, n, i) {
    var a = {};
    return (
      Object.keys(n).forEach(function (e) {
        a[e] = n[e];
      }),
      (a.enumerable = !!a.enumerable),
      (a.configurable = !!a.configurable),
      ("value" in a || a.initializer) && (a.writable = !0),
      (a = r
        .slice()
        .reverse()
        .reduce(function (r, n) {
          return n(e, t, r) || r;
        }, a)),
      i &&
        void 0 !== a.initializer &&
        ((a.value = a.initializer ? a.initializer.call(i) : void 0),
        (a.initializer = void 0)),
      void 0 === a.initializer && (Object.defineProperty(e, t, a), (a = null)),
      a
    );
  }
  function fi(e, t, r) {
    if (r.get) {
      var n = r.get;
      r.get = function () {
        var e = n.call(this);
        return Object.defineProperty(this, t, { value: e }), e;
      };
    } else if ("function" == typeof r.value) {
      var i = r.value;
      return {
        get: function () {
          var e = new Map();
          function r() {
            for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
              r[n] = arguments[n];
            var a = r.length > 0 ? r[0] : "value";
            if (e.has(a)) return e.get(a);
            var o = i.apply(this, r);
            return e.set(a, o), o;
          }
          return Object.defineProperty(this, t, { value: r }), r;
        },
      };
    }
  }
  var hi = new ni.Struct({
      firstCode: ni.uint16,
      entryCount: ni.uint16,
      idDelta: ni.int16,
      idRangeOffset: ni.uint16,
    }),
    di = new ni.Struct({
      startCharCode: ni.uint32,
      endCharCode: ni.uint32,
      glyphID: ni.uint32,
    }),
    pi = new ni.Struct({
      startUnicodeValue: ni.uint24,
      additionalCount: ni.uint8,
    }),
    gi = new ni.Struct({ unicodeValue: ni.uint24, glyphID: ni.uint16 }),
    vi = new ni.Array(pi, ni.uint32),
    yi = new ni.Array(gi, ni.uint32),
    bi = new ni.Struct({
      varSelector: ni.uint24,
      defaultUVS: new ni.Pointer(ni.uint32, vi, { type: "parent" }),
      nonDefaultUVS: new ni.Pointer(ni.uint32, yi, { type: "parent" }),
    }),
    mi = new ni.VersionedStruct(ni.uint16, {
      0: {
        length: ni.uint16,
        language: ni.uint16,
        codeMap: new ni.LazyArray(ni.uint8, 256),
      },
      2: {
        length: ni.uint16,
        language: ni.uint16,
        subHeaderKeys: new ni.Array(ni.uint16, 256),
        subHeaderCount: function (e) {
          return Math.max.apply(Math, e.subHeaderKeys);
        },
        subHeaders: new ni.LazyArray(hi, "subHeaderCount"),
        glyphIndexArray: new ni.LazyArray(ni.uint16, "subHeaderCount"),
      },
      4: {
        length: ni.uint16,
        language: ni.uint16,
        segCountX2: ni.uint16,
        segCount: function (e) {
          return e.segCountX2 >> 1;
        },
        searchRange: ni.uint16,
        entrySelector: ni.uint16,
        rangeShift: ni.uint16,
        endCode: new ni.LazyArray(ni.uint16, "segCount"),
        reservedPad: new ni.Reserved(ni.uint16),
        startCode: new ni.LazyArray(ni.uint16, "segCount"),
        idDelta: new ni.LazyArray(ni.int16, "segCount"),
        idRangeOffset: new ni.LazyArray(ni.uint16, "segCount"),
        glyphIndexArray: new ni.LazyArray(ni.uint16, function (e) {
          return (e.length - e._currentOffset) / 2;
        }),
      },
      6: {
        length: ni.uint16,
        language: ni.uint16,
        firstCode: ni.uint16,
        entryCount: ni.uint16,
        glyphIndices: new ni.LazyArray(ni.uint16, "entryCount"),
      },
      8: {
        reserved: new ni.Reserved(ni.uint16),
        length: ni.uint32,
        language: ni.uint16,
        is32: new ni.LazyArray(ni.uint8, 8192),
        nGroups: ni.uint32,
        groups: new ni.LazyArray(di, "nGroups"),
      },
      10: {
        reserved: new ni.Reserved(ni.uint16),
        length: ni.uint32,
        language: ni.uint32,
        firstCode: ni.uint32,
        entryCount: ni.uint32,
        glyphIndices: new ni.LazyArray(ni.uint16, "numChars"),
      },
      12: {
        reserved: new ni.Reserved(ni.uint16),
        length: ni.uint32,
        language: ni.uint32,
        nGroups: ni.uint32,
        groups: new ni.LazyArray(di, "nGroups"),
      },
      13: {
        reserved: new ni.Reserved(ni.uint16),
        length: ni.uint32,
        language: ni.uint32,
        nGroups: ni.uint32,
        groups: new ni.LazyArray(di, "nGroups"),
      },
      14: {
        length: ni.uint32,
        numRecords: ni.uint32,
        varSelectors: new ni.LazyArray(bi, "numRecords"),
      },
    }),
    wi = new ni.Struct({
      platformID: ni.uint16,
      encodingID: ni.uint16,
      table: new ni.Pointer(ni.uint32, mi, { type: "parent", lazy: !0 }),
    }),
    xi = new ni.Struct({
      version: ni.uint16,
      numSubtables: ni.uint16,
      tables: new ni.Array(wi, "numSubtables"),
    }),
    Si = new ni.Struct({
      version: ni.int32,
      revision: ni.int32,
      checkSumAdjustment: ni.uint32,
      magicNumber: ni.uint32,
      flags: ni.uint16,
      unitsPerEm: ni.uint16,
      created: new ni.Array(ni.int32, 2),
      modified: new ni.Array(ni.int32, 2),
      xMin: ni.int16,
      yMin: ni.int16,
      xMax: ni.int16,
      yMax: ni.int16,
      macStyle: new ni.Bitfield(ni.uint16, [
        "bold",
        "italic",
        "underline",
        "outline",
        "shadow",
        "condensed",
        "extended",
      ]),
      lowestRecPPEM: ni.uint16,
      fontDirectionHint: ni.int16,
      indexToLocFormat: ni.int16,
      glyphDataFormat: ni.int16,
    }),
    ki = new ni.Struct({
      version: ni.int32,
      ascent: ni.int16,
      descent: ni.int16,
      lineGap: ni.int16,
      advanceWidthMax: ni.uint16,
      minLeftSideBearing: ni.int16,
      minRightSideBearing: ni.int16,
      xMaxExtent: ni.int16,
      caretSlopeRise: ni.int16,
      caretSlopeRun: ni.int16,
      caretOffset: ni.int16,
      reserved: new ni.Reserved(ni.int16, 4),
      metricDataFormat: ni.int16,
      numberOfMetrics: ni.uint16,
    }),
    Ai = new ni.Struct({ advance: ni.uint16, bearing: ni.int16 }),
    Ci = new ni.Struct({
      metrics: new ni.LazyArray(Ai, function (e) {
        return e.parent.hhea.numberOfMetrics;
      }),
      bearings: new ni.LazyArray(ni.int16, function (e) {
        return e.parent.maxp.numGlyphs - e.parent.hhea.numberOfMetrics;
      }),
    }),
    Pi = new ni.Struct({
      version: ni.int32,
      numGlyphs: ni.uint16,
      maxPoints: ni.uint16,
      maxContours: ni.uint16,
      maxComponentPoints: ni.uint16,
      maxComponentContours: ni.uint16,
      maxZones: ni.uint16,
      maxTwilightPoints: ni.uint16,
      maxStorage: ni.uint16,
      maxFunctionDefs: ni.uint16,
      maxInstructionDefs: ni.uint16,
      maxStackElements: ni.uint16,
      maxSizeOfInstructions: ni.uint16,
      maxComponentElements: ni.uint16,
      maxComponentDepth: ni.uint16,
    });
  function Ii(e, t, r) {
    return void 0 === r && (r = 0), 1 === e && Ei[r] ? Ei[r] : Oi[e][t];
  }
  var Oi = [
      ["utf16be", "utf16be", "utf16be", "utf16be", "utf16be", "utf16be"],
      [
        "macroman",
        "shift-jis",
        "big5",
        "euc-kr",
        "iso-8859-6",
        "iso-8859-8",
        "macgreek",
        "maccyrillic",
        "symbol",
        "Devanagari",
        "Gurmukhi",
        "Gujarati",
        "Oriya",
        "Bengali",
        "Tamil",
        "Telugu",
        "Kannada",
        "Malayalam",
        "Sinhalese",
        "Burmese",
        "Khmer",
        "macthai",
        "Laotian",
        "Georgian",
        "Armenian",
        "gb-2312-80",
        "Tibetan",
        "Mongolian",
        "Geez",
        "maccenteuro",
        "Vietnamese",
        "Sindhi",
      ],
      ["ascii"],
      [
        "symbol",
        "utf16be",
        "shift-jis",
        "gb18030",
        "big5",
        "wansung",
        "johab",
        null,
        null,
        null,
        "utf16be",
      ],
    ],
    Ei = {
      15: "maciceland",
      17: "macturkish",
      18: "maccroatian",
      24: "maccenteuro",
      25: "maccenteuro",
      26: "maccenteuro",
      27: "maccenteuro",
      28: "maccenteuro",
      30: "maciceland",
      37: "macromania",
      38: "maccenteuro",
      39: "maccenteuro",
      40: "maccenteuro",
      143: "macinuit",
      146: "macgaelic",
    },
    Bi = [
      [],
      {
        0: "en",
        30: "fo",
        60: "ks",
        90: "rw",
        1: "fr",
        31: "fa",
        61: "ku",
        91: "rn",
        2: "de",
        32: "ru",
        62: "sd",
        92: "ny",
        3: "it",
        33: "zh",
        63: "bo",
        93: "mg",
        4: "nl",
        34: "nl-BE",
        64: "ne",
        94: "eo",
        5: "sv",
        35: "ga",
        65: "sa",
        128: "cy",
        6: "es",
        36: "sq",
        66: "mr",
        129: "eu",
        7: "da",
        37: "ro",
        67: "bn",
        130: "ca",
        8: "pt",
        38: "cz",
        68: "as",
        131: "la",
        9: "no",
        39: "sk",
        69: "gu",
        132: "qu",
        10: "he",
        40: "si",
        70: "pa",
        133: "gn",
        11: "ja",
        41: "yi",
        71: "or",
        134: "ay",
        12: "ar",
        42: "sr",
        72: "ml",
        135: "tt",
        13: "fi",
        43: "mk",
        73: "kn",
        136: "ug",
        14: "el",
        44: "bg",
        74: "ta",
        137: "dz",
        15: "is",
        45: "uk",
        75: "te",
        138: "jv",
        16: "mt",
        46: "be",
        76: "si",
        139: "su",
        17: "tr",
        47: "uz",
        77: "my",
        140: "gl",
        18: "hr",
        48: "kk",
        78: "km",
        141: "af",
        19: "zh-Hant",
        49: "az-Cyrl",
        79: "lo",
        142: "br",
        20: "ur",
        50: "az-Arab",
        80: "vi",
        143: "iu",
        21: "hi",
        51: "hy",
        81: "id",
        144: "gd",
        22: "th",
        52: "ka",
        82: "tl",
        145: "gv",
        23: "ko",
        53: "mo",
        83: "ms",
        146: "ga",
        24: "lt",
        54: "ky",
        84: "ms-Arab",
        147: "to",
        25: "pl",
        55: "tg",
        85: "am",
        148: "el-polyton",
        26: "hu",
        56: "tk",
        86: "ti",
        149: "kl",
        27: "es",
        57: "mn-CN",
        87: "om",
        150: "az",
        28: "lv",
        58: "mn",
        88: "so",
        151: "nn",
        29: "se",
        59: "ps",
        89: "sw",
      },
      [],
      {
        1078: "af",
        16393: "en-IN",
        1159: "rw",
        1074: "tn",
        1052: "sq",
        6153: "en-IE",
        1089: "sw",
        1115: "si",
        1156: "gsw",
        8201: "en-JM",
        1111: "kok",
        1051: "sk",
        1118: "am",
        17417: "en-MY",
        1042: "ko",
        1060: "sl",
        5121: "ar-DZ",
        5129: "en-NZ",
        1088: "ky",
        11274: "es-AR",
        15361: "ar-BH",
        13321: "en-PH",
        1108: "lo",
        16394: "es-BO",
        3073: "ar",
        18441: "en-SG",
        1062: "lv",
        13322: "es-CL",
        2049: "ar-IQ",
        7177: "en-ZA",
        1063: "lt",
        9226: "es-CO",
        11265: "ar-JO",
        11273: "en-TT",
        2094: "dsb",
        5130: "es-CR",
        13313: "ar-KW",
        2057: "en-GB",
        1134: "lb",
        7178: "es-DO",
        12289: "ar-LB",
        1033: "en",
        1071: "mk",
        12298: "es-EC",
        4097: "ar-LY",
        12297: "en-ZW",
        2110: "ms-BN",
        17418: "es-SV",
        6145: "ary",
        1061: "et",
        1086: "ms",
        4106: "es-GT",
        8193: "ar-OM",
        1080: "fo",
        1100: "ml",
        18442: "es-HN",
        16385: "ar-QA",
        1124: "fil",
        1082: "mt",
        2058: "es-MX",
        1025: "ar-SA",
        1035: "fi",
        1153: "mi",
        19466: "es-NI",
        10241: "ar-SY",
        2060: "fr-BE",
        1146: "arn",
        6154: "es-PA",
        7169: "aeb",
        3084: "fr-CA",
        1102: "mr",
        15370: "es-PY",
        14337: "ar-AE",
        1036: "fr",
        1148: "moh",
        10250: "es-PE",
        9217: "ar-YE",
        5132: "fr-LU",
        1104: "mn",
        20490: "es-PR",
        1067: "hy",
        6156: "fr-MC",
        2128: "mn-CN",
        3082: "es",
        1101: "as",
        4108: "fr-CH",
        1121: "ne",
        1034: "es",
        2092: "az-Cyrl",
        1122: "fy",
        1044: "nb",
        21514: "es-US",
        1068: "az",
        1110: "gl",
        2068: "nn",
        14346: "es-UY",
        1133: "ba",
        1079: "ka",
        1154: "oc",
        8202: "es-VE",
        1069: "eu",
        3079: "de-AT",
        1096: "or",
        2077: "sv-FI",
        1059: "be",
        1031: "de",
        1123: "ps",
        1053: "sv",
        2117: "bn",
        5127: "de-LI",
        1045: "pl",
        1114: "syr",
        1093: "bn-IN",
        4103: "de-LU",
        1046: "pt",
        1064: "tg",
        8218: "bs-Cyrl",
        2055: "de-CH",
        2070: "pt-PT",
        2143: "tzm",
        5146: "bs",
        1032: "el",
        1094: "pa",
        1097: "ta",
        1150: "br",
        1135: "kl",
        1131: "qu-BO",
        1092: "tt",
        1026: "bg",
        1095: "gu",
        2155: "qu-EC",
        1098: "te",
        1027: "ca",
        1128: "ha",
        3179: "qu",
        1054: "th",
        3076: "zh-HK",
        1037: "he",
        1048: "ro",
        1105: "bo",
        5124: "zh-MO",
        1081: "hi",
        1047: "rm",
        1055: "tr",
        2052: "zh",
        1038: "hu",
        1049: "ru",
        1090: "tk",
        4100: "zh-SG",
        1039: "is",
        9275: "smn",
        1152: "ug",
        1028: "zh-TW",
        1136: "ig",
        4155: "smj-NO",
        1058: "uk",
        1155: "co",
        1057: "id",
        5179: "smj",
        1070: "hsb",
        1050: "hr",
        1117: "iu",
        3131: "se-FI",
        1056: "ur",
        4122: "hr-BA",
        2141: "iu-Latn",
        1083: "se",
        2115: "uz-Cyrl",
        1029: "cs",
        2108: "ga",
        2107: "se-SE",
        1091: "uz",
        1030: "da",
        1076: "xh",
        8251: "sms",
        1066: "vi",
        1164: "prs",
        1077: "zu",
        6203: "sma-NO",
        1106: "cy",
        1125: "dv",
        1040: "it",
        7227: "sms",
        1160: "wo",
        2067: "nl-BE",
        2064: "it-CH",
        1103: "sa",
        1157: "sah",
        1043: "nl",
        1041: "ja",
        7194: "sr-Cyrl-BA",
        1144: "ii",
        3081: "en-AU",
        1099: "kn",
        3098: "sr",
        1130: "yo",
        10249: "en-BZ",
        1087: "kk",
        6170: "sr-Latn-BA",
        4105: "en-CA",
        1107: "km",
        2074: "sr-Latn",
        9225: "en-029",
        1158: "quc",
        1132: "nso",
      },
    ],
    Ti = new ni.Struct({
      platformID: ni.uint16,
      encodingID: ni.uint16,
      languageID: ni.uint16,
      nameID: ni.uint16,
      length: ni.uint16,
      string: new ni.Pointer(
        ni.uint16,
        new ni.String("length", function (e) {
          return Ii(e.platformID, e.encodingID, e.languageID);
        }),
        { type: "parent", relativeTo: "parent.stringOffset", allowNull: !1 }
      ),
    }),
    Li = new ni.Struct({
      length: ni.uint16,
      tag: new ni.Pointer(ni.uint16, new ni.String("length", "utf16be"), {
        type: "parent",
        relativeTo: "stringOffset",
      }),
    }),
    zi = new ni.VersionedStruct(ni.uint16, {
      0: {
        count: ni.uint16,
        stringOffset: ni.uint16,
        records: new ni.Array(Ti, "count"),
      },
      1: {
        count: ni.uint16,
        stringOffset: ni.uint16,
        records: new ni.Array(Ti, "count"),
        langTagCount: ni.uint16,
        langTags: new ni.Array(Li, "langTagCount"),
      },
    }),
    Di = [
      "copyright",
      "fontFamily",
      "fontSubfamily",
      "uniqueSubfamily",
      "fullName",
      "version",
      "postscriptName",
      "trademark",
      "manufacturer",
      "designer",
      "description",
      "vendorURL",
      "designerURL",
      "license",
      "licenseURL",
      null,
      "preferredFamily",
      "preferredSubfamily",
      "compatibleFull",
      "sampleText",
      "postscriptCIDFontName",
      "wwsFamilyName",
      "wwsSubfamilyName",
    ];
  (zi.process = function (e) {
    var t = {},
      r = this.records,
      n = Array.isArray(r),
      i = 0;
    for (r = n ? r : r[Symbol.iterator](); ; ) {
      var a;
      if (n) {
        if (i >= r.length) break;
        a = r[i++];
      } else {
        if ((i = r.next()).done) break;
        a = i.value;
      }
      var o = a,
        s = Bi[o.platformID][o.languageID];
      null == s &&
        null != this.langTags &&
        o.languageID >= 32768 &&
        (s = this.langTags[o.languageID - 32768].tag),
        null == s && (s = o.platformID + "-" + o.languageID);
      var u = o.nameID >= 256 ? "fontFeatures" : Di[o.nameID] || o.nameID;
      null == t[u] && (t[u] = {});
      var l = t[u];
      o.nameID >= 256 && (l = l[o.nameID] || (l[o.nameID] = {})),
        ("string" != typeof o.string && "string" == typeof l[s]) ||
          (l[s] = o.string);
    }
    this.records = t;
  }),
    (zi.preEncode = function () {
      if (!Array.isArray(this.records)) {
        this.version = 0;
        var e = [];
        for (var t in this.records) {
          var r = this.records[t];
          "fontFeatures" !== t &&
            (e.push({
              platformID: 3,
              encodingID: 1,
              languageID: 1033,
              nameID: Di.indexOf(t),
              length: g.byteLength(r.en, "utf16le"),
              string: r.en,
            }),
            "postscriptName" === t &&
              e.push({
                platformID: 1,
                encodingID: 0,
                languageID: 0,
                nameID: Di.indexOf(t),
                length: r.en.length,
                string: r.en,
              }));
        }
        (this.records = e),
          (this.count = e.length),
          (this.stringOffset = zi.size(this, null, !1));
      }
    });
  var Ri = new ni.VersionedStruct(ni.uint16, {
      header: {
        xAvgCharWidth: ni.int16,
        usWeightClass: ni.uint16,
        usWidthClass: ni.uint16,
        fsType: new ni.Bitfield(ni.uint16, [
          null,
          "noEmbedding",
          "viewOnly",
          "editable",
          null,
          null,
          null,
          null,
          "noSubsetting",
          "bitmapOnly",
        ]),
        ySubscriptXSize: ni.int16,
        ySubscriptYSize: ni.int16,
        ySubscriptXOffset: ni.int16,
        ySubscriptYOffset: ni.int16,
        ySuperscriptXSize: ni.int16,
        ySuperscriptYSize: ni.int16,
        ySuperscriptXOffset: ni.int16,
        ySuperscriptYOffset: ni.int16,
        yStrikeoutSize: ni.int16,
        yStrikeoutPosition: ni.int16,
        sFamilyClass: ni.int16,
        panose: new ni.Array(ni.uint8, 10),
        ulCharRange: new ni.Array(ni.uint32, 4),
        vendorID: new ni.String(4),
        fsSelection: new ni.Bitfield(ni.uint16, [
          "italic",
          "underscore",
          "negative",
          "outlined",
          "strikeout",
          "bold",
          "regular",
          "useTypoMetrics",
          "wws",
          "oblique",
        ]),
        usFirstCharIndex: ni.uint16,
        usLastCharIndex: ni.uint16,
      },
      0: {},
      1: {
        typoAscender: ni.int16,
        typoDescender: ni.int16,
        typoLineGap: ni.int16,
        winAscent: ni.uint16,
        winDescent: ni.uint16,
        codePageRange: new ni.Array(ni.uint32, 2),
      },
      2: {
        typoAscender: ni.int16,
        typoDescender: ni.int16,
        typoLineGap: ni.int16,
        winAscent: ni.uint16,
        winDescent: ni.uint16,
        codePageRange: new ni.Array(ni.uint32, 2),
        xHeight: ni.int16,
        capHeight: ni.int16,
        defaultChar: ni.uint16,
        breakChar: ni.uint16,
        maxContent: ni.uint16,
      },
      5: {
        typoAscender: ni.int16,
        typoDescender: ni.int16,
        typoLineGap: ni.int16,
        winAscent: ni.uint16,
        winDescent: ni.uint16,
        codePageRange: new ni.Array(ni.uint32, 2),
        xHeight: ni.int16,
        capHeight: ni.int16,
        defaultChar: ni.uint16,
        breakChar: ni.uint16,
        maxContent: ni.uint16,
        usLowerOpticalPointSize: ni.uint16,
        usUpperOpticalPointSize: ni.uint16,
      },
    }),
    Mi = Ri.versions;
  Mi[3] = Mi[4] = Mi[2];
  var Fi = new ni.VersionedStruct(ni.fixed32, {
      header: {
        italicAngle: ni.fixed32,
        underlinePosition: ni.int16,
        underlineThickness: ni.int16,
        isFixedPitch: ni.uint32,
        minMemType42: ni.uint32,
        maxMemType42: ni.uint32,
        minMemType1: ni.uint32,
        maxMemType1: ni.uint32,
      },
      1: {},
      2: {
        numberOfGlyphs: ni.uint16,
        glyphNameIndex: new ni.Array(ni.uint16, "numberOfGlyphs"),
        names: new ni.Array(new ni.String(ni.uint8)),
      },
      2.5: {
        numberOfGlyphs: ni.uint16,
        offsets: new ni.Array(ni.uint8, "numberOfGlyphs"),
      },
      3: {},
      4: {
        map: new ni.Array(ni.uint32, function (e) {
          return e.parent.maxp.numGlyphs;
        }),
      },
    }),
    Ui = new ni.Struct({ controlValues: new ni.Array(ni.int16) }),
    Ni = new ni.Struct({ instructions: new ni.Array(ni.uint8) }),
    ji = new ni.VersionedStruct("head.indexToLocFormat", {
      0: { offsets: new ni.Array(ni.uint16) },
      1: { offsets: new ni.Array(ni.uint32) },
    });
  (ji.process = function () {
    if (0 === this.version)
      for (var e = 0; e < this.offsets.length; e++) this.offsets[e] <<= 1;
  }),
    (ji.preEncode = function () {
      if (
        null == this.version &&
        ((this.version = this.offsets[this.offsets.length - 1] > 65535 ? 1 : 0),
        0 === this.version)
      )
        for (var e = 0; e < this.offsets.length; e++) this.offsets[e] >>>= 1;
    });
  var Gi = new ni.Struct({ controlValueProgram: new ni.Array(ni.uint8) }),
    Vi = new ni.Array(new ni.Buffer()),
    _i = (function () {
      function e(e) {
        this.type = e;
      }
      var t = e.prototype;
      return (
        (t.getCFFVersion = function (e) {
          for (; e && !e.hdrSize; ) e = e.parent;
          return e ? e.version : -1;
        }),
        (t.decode = function (e, t) {
          var r =
            this.getCFFVersion(t) >= 2 ? e.readUInt32BE() : e.readUInt16BE();
          if (0 === r) return [];
          var n,
            i = e.readUInt8();
          if (1 === i) n = ni.uint8;
          else if (2 === i) n = ni.uint16;
          else if (3 === i) n = ni.uint24;
          else {
            if (4 !== i)
              throw new Error(
                "Bad offset size in CFFIndex: " + i + " " + e.pos
              );
            n = ni.uint32;
          }
          for (
            var a = [], o = e.pos + (r + 1) * i - 1, s = n.decode(e), u = 0;
            u < r;
            u++
          ) {
            var l = n.decode(e);
            if (null != this.type) {
              var c = e.pos;
              (e.pos = o + s),
                (t.length = l - s),
                a.push(this.type.decode(e, t)),
                (e.pos = c);
            } else a.push({ offset: o + s, length: l - s });
            s = l;
          }
          return (e.pos = o + s), a;
        }),
        (t.size = function (e, t) {
          var r = 2;
          if (0 === e.length) return r;
          for (
            var n, i = this.type || new ni.Buffer(), a = 1, o = 0;
            o < e.length;
            o++
          ) {
            var s = e[o];
            a += i.size(s, t);
          }
          if (a <= 255) n = ni.uint8;
          else if (a <= 65535) n = ni.uint16;
          else if (a <= 16777215) n = ni.uint24;
          else {
            if (!(a <= 4294967295)) throw new Error("Bad offset in CFFIndex");
            n = ni.uint32;
          }
          return (r += 1 + n.size() * (e.length + 1)), (r += a - 1), r;
        }),
        (t.encode = function (e, t, r) {
          if ((e.writeUInt16BE(t.length), 0 !== t.length)) {
            var n,
              i = this.type || new ni.Buffer(),
              a = [],
              o = 1,
              s = t,
              u = Array.isArray(s),
              l = 0;
            for (s = u ? s : s[Symbol.iterator](); ; ) {
              var c;
              if (u) {
                if (l >= s.length) break;
                c = s[l++];
              } else {
                if ((l = s.next()).done) break;
                c = l.value;
              }
              var f = c,
                h = i.size(f, r);
              a.push(h), (o += h);
            }
            if (o <= 255) n = ni.uint8;
            else if (o <= 65535) n = ni.uint16;
            else if (o <= 16777215) n = ni.uint24;
            else {
              if (!(o <= 4294967295)) throw new Error("Bad offset in CFFIndex");
              n = ni.uint32;
            }
            e.writeUInt8(n.size()), (o = 1), n.encode(e, o);
            for (var d = 0; d < a.length; d++) {
              (o += a[d]), n.encode(e, o);
            }
            var p = t,
              g = Array.isArray(p),
              v = 0;
            for (p = g ? p : p[Symbol.iterator](); ; ) {
              var y;
              if (g) {
                if (v >= p.length) break;
                y = p[v++];
              } else {
                if ((v = p.next()).done) break;
                y = v.value;
              }
              var b = y;
              i.encode(e, b, r);
            }
          }
        }),
        e
      );
    })(),
    qi = re(function (e, t) {
      function r(e) {
        var t = [];
        for (var r in e) t.push(r);
        return t;
      }
      (e.exports = "function" == typeof Object.keys ? Object.keys : r).shim = r;
    }),
    Wi =
      (qi.shim,
      re(function (e, t) {
        var r =
          "[object Arguments]" ==
          (function () {
            return Object.prototype.toString.call(arguments);
          })();
        function n(e) {
          return "[object Arguments]" == Object.prototype.toString.call(e);
        }
        function i(e) {
          return (
            (e &&
              "object" == typeof e &&
              "number" == typeof e.length &&
              Object.prototype.hasOwnProperty.call(e, "callee") &&
              !Object.prototype.propertyIsEnumerable.call(e, "callee")) ||
            !1
          );
        }
        ((t = e.exports = r ? n : i).supported = n), (t.unsupported = i);
      })),
    Hi =
      (Wi.supported,
      Wi.unsupported,
      re(function (e) {
        var t = Array.prototype.slice,
          r = (e.exports = function (e, a, o) {
            return (
              o || (o = {}),
              e === a ||
                (e instanceof Date && a instanceof Date
                  ? e.getTime() === a.getTime()
                  : !e || !a || ("object" != typeof e && "object" != typeof a)
                  ? o.strict
                    ? e === a
                    : e == a
                  : (function (e, a, o) {
                      var s, u;
                      if (n(e) || n(a)) return !1;
                      if (e.prototype !== a.prototype) return !1;
                      if (Wi(e))
                        return (
                          !!Wi(a) &&
                          ((e = t.call(e)), (a = t.call(a)), r(e, a, o))
                        );
                      if (i(e)) {
                        if (!i(a)) return !1;
                        if (e.length !== a.length) return !1;
                        for (s = 0; s < e.length; s++)
                          if (e[s] !== a[s]) return !1;
                        return !0;
                      }
                      try {
                        var l = qi(e),
                          c = qi(a);
                      } catch (e) {
                        return !1;
                      }
                      if (l.length != c.length) return !1;
                      for (l.sort(), c.sort(), s = l.length - 1; s >= 0; s--)
                        if (l[s] != c[s]) return !1;
                      for (s = l.length - 1; s >= 0; s--)
                        if (((u = l[s]), !r(e[u], a[u], o))) return !1;
                      return typeof e == typeof a;
                    })(e, a, o))
            );
          });
        function n(e) {
          return null == e;
        }
        function i(e) {
          return (
            !(!e || "object" != typeof e || "number" != typeof e.length) &&
            "function" == typeof e.copy &&
            "function" == typeof e.slice &&
            !(e.length > 0 && "number" != typeof e[0])
          );
        }
      })),
    Yi = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      ".",
      "E",
      "E-",
      null,
      "-",
    ],
    Zi = { ".": 10, E: 11, "E-": 12, "-": 14 },
    Xi = (function () {
      function e() {}
      return (
        (e.decode = function (e, t) {
          if (32 <= t && t <= 246) return t - 139;
          if (247 <= t && t <= 250)
            return 256 * (t - 247) + e.readUInt8() + 108;
          if (251 <= t && t <= 254)
            return 256 * -(t - 251) - e.readUInt8() - 108;
          if (28 === t) return e.readInt16BE();
          if (29 === t) return e.readInt32BE();
          if (30 === t) {
            for (var r = ""; ; ) {
              var n = e.readUInt8(),
                i = n >> 4;
              if (15 === i) break;
              r += Yi[i];
              var a = 15 & n;
              if (15 === a) break;
              r += Yi[a];
            }
            return parseFloat(r);
          }
          return null;
        }),
        (e.size = function (e) {
          if ((e.forceLarge && (e = 32768), (0 | e) !== e)) {
            var t = "" + e;
            return 1 + Math.ceil((t.length + 1) / 2);
          }
          return -107 <= e && e <= 107
            ? 1
            : (108 <= e && e <= 1131) || (-1131 <= e && e <= -108)
            ? 2
            : -32768 <= e && e <= 32767
            ? 3
            : 5;
        }),
        (e.encode = function (e, t) {
          var r = Number(t);
          if (t.forceLarge) return e.writeUInt8(29), e.writeInt32BE(r);
          if ((0 | r) === r)
            return -107 <= r && r <= 107
              ? e.writeUInt8(r + 139)
              : 108 <= r && r <= 1131
              ? ((r -= 108),
                e.writeUInt8(247 + (r >> 8)),
                e.writeUInt8(255 & r))
              : -1131 <= r && r <= -108
              ? ((r = -r - 108),
                e.writeUInt8(251 + (r >> 8)),
                e.writeUInt8(255 & r))
              : -32768 <= r && r <= 32767
              ? (e.writeUInt8(28), e.writeInt16BE(r))
              : (e.writeUInt8(29), e.writeInt32BE(r));
          e.writeUInt8(30);
          for (var n = "" + r, i = 0; i < n.length; i += 2) {
            var a = n[i],
              o = Zi[a] || +a;
            if (i === n.length - 1) var s = 15;
            else {
              var u = n[i + 1];
              s = Zi[u] || +u;
            }
            e.writeUInt8((o << 4) | (15 & s));
          }
          return 15 !== s ? e.writeUInt8(240) : void 0;
        }),
        e
      );
    })(),
    Ki = (function () {
      function e(e) {
        void 0 === e && (e = []), (this.ops = e), (this.fields = {});
        var t = e,
          r = Array.isArray(t),
          n = 0;
        for (t = r ? t : t[Symbol.iterator](); ; ) {
          var i;
          if (r) {
            if (n >= t.length) break;
            i = t[n++];
          } else {
            if ((n = t.next()).done) break;
            i = n.value;
          }
          var a = i,
            o = Array.isArray(a[0]) ? (a[0][0] << 8) | a[0][1] : a[0];
          this.fields[o] = a;
        }
      }
      var t = e.prototype;
      return (
        (t.decodeOperands = function (e, t, r, n) {
          var i = this;
          if (Array.isArray(e))
            return n.map(function (n, a) {
              return i.decodeOperands(e[a], t, r, [n]);
            });
          if (null != e.decode) return e.decode(t, r, n);
          switch (e) {
            case "number":
            case "offset":
            case "sid":
              return n[0];
            case "boolean":
              return !!n[0];
            default:
              return n;
          }
        }),
        (t.encodeOperands = function (e, t, r, n) {
          var i = this;
          return Array.isArray(e)
            ? n.map(function (n, a) {
                return i.encodeOperands(e[a], t, r, n)[0];
              })
            : null != e.encode
            ? e.encode(t, n, r)
            : "number" == typeof n
            ? [n]
            : "boolean" == typeof n
            ? [+n]
            : Array.isArray(n)
            ? n
            : [n];
        }),
        (t.decode = function (e, t) {
          var r = e.pos + t.length,
            n = {},
            i = [];
          for (var a in (Object.defineProperties(n, {
            parent: { value: t },
            _startOffset: { value: e.pos },
          }),
          this.fields)) {
            var o = this.fields[a];
            n[o[1]] = o[3];
          }
          for (; e.pos < r; ) {
            var s = e.readUInt8();
            if (s < 28) {
              12 === s && (s = (s << 8) | e.readUInt8());
              var u = this.fields[s];
              if (!u) throw new Error("Unknown operator " + s);
              var l = this.decodeOperands(u[2], e, n, i);
              null != l &&
                (l instanceof qn
                  ? Object.defineProperty(n, u[1], l)
                  : (n[u[1]] = l)),
                (i = []);
            } else i.push(Xi.decode(e, s));
          }
          return n;
        }),
        (t.size = function (e, t, r) {
          void 0 === r && (r = !0);
          var n = {
              parent: t,
              val: e,
              pointerSize: 0,
              startOffset: t.startOffset || 0,
            },
            i = 0;
          for (var a in this.fields) {
            var o = this.fields[a],
              s = e[o[1]];
            if (null != s && !Hi(s, o[3])) {
              var u = this.encodeOperands(o[2], null, n, s),
                l = Array.isArray(u),
                c = 0;
              for (u = l ? u : u[Symbol.iterator](); ; ) {
                var f;
                if (l) {
                  if (c >= u.length) break;
                  f = u[c++];
                } else {
                  if ((c = u.next()).done) break;
                  f = c.value;
                }
                var h = f;
                i += Xi.size(h);
              }
              i += (Array.isArray(o[0]) ? o[0] : [o[0]]).length;
            }
          }
          return r && (i += n.pointerSize), i;
        }),
        (t.encode = function (e, t, r) {
          var n = {
            pointers: [],
            startOffset: e.pos,
            parent: r,
            val: t,
            pointerSize: 0,
          };
          n.pointerOffset = e.pos + this.size(t, n, !1);
          var i = this.ops,
            a = Array.isArray(i),
            o = 0;
          for (i = a ? i : i[Symbol.iterator](); ; ) {
            var s;
            if (a) {
              if (o >= i.length) break;
              s = i[o++];
            } else {
              if ((o = i.next()).done) break;
              s = o.value;
            }
            var u = s,
              l = t[u[1]];
            if (null != l && !Hi(l, u[3])) {
              var c = this.encodeOperands(u[2], e, n, l),
                f = Array.isArray(c),
                h = 0;
              for (c = f ? c : c[Symbol.iterator](); ; ) {
                var d;
                if (f) {
                  if (h >= c.length) break;
                  d = c[h++];
                } else {
                  if ((h = c.next()).done) break;
                  d = h.value;
                }
                var p = d;
                Xi.encode(e, p);
              }
              var g = Array.isArray(u[0]) ? u[0] : [u[0]],
                v = Array.isArray(g),
                y = 0;
              for (g = v ? g : g[Symbol.iterator](); ; ) {
                var b;
                if (v) {
                  if (y >= g.length) break;
                  b = g[y++];
                } else {
                  if ((y = g.next()).done) break;
                  b = y.value;
                }
                var m = b;
                e.writeUInt8(m);
              }
            }
          }
          for (var w = 0; w < n.pointers.length; ) {
            var x = n.pointers[w++];
            x.type.encode(e, x.val, x.parent);
          }
        }),
        e
      );
    })(),
    Ji = (function (e) {
      function t(t, r) {
        return (
          void 0 === r && (r = {}),
          null == r.type && (r.type = "global"),
          e.call(this, null, t, r) || this
        );
      }
      li(t, e);
      var r = t.prototype;
      return (
        (r.decode = function (t, r, n) {
          return (
            (this.offsetType = {
              decode: function () {
                return n[0];
              },
            }),
            e.prototype.decode.call(this, t, r, n)
          );
        }),
        (r.encode = function (t, r, n) {
          if (!t)
            return (
              (this.offsetType = {
                size: function () {
                  return 0;
                },
              }),
              this.size(r, n),
              [new Qi(0)]
            );
          var i = null;
          return (
            (this.offsetType = {
              encode: function (e, t) {
                return (i = t);
              },
            }),
            e.prototype.encode.call(this, t, r, n),
            [new Qi(i)]
          );
        }),
        t
      );
    })(ni.Pointer),
    Qi = (function () {
      function e(e) {
        (this.val = e), (this.forceLarge = !0);
      }
      return (
        (e.prototype.valueOf = function () {
          return this.val;
        }),
        e
      );
    })(),
    $i = new Ki([
      [6, "BlueValues", "delta", null],
      [7, "OtherBlues", "delta", null],
      [8, "FamilyBlues", "delta", null],
      [9, "FamilyOtherBlues", "delta", null],
      [[12, 9], "BlueScale", "number", 0.039625],
      [[12, 10], "BlueShift", "number", 7],
      [[12, 11], "BlueFuzz", "number", 1],
      [10, "StdHW", "number", null],
      [11, "StdVW", "number", null],
      [[12, 12], "StemSnapH", "delta", null],
      [[12, 13], "StemSnapV", "delta", null],
      [[12, 14], "ForceBold", "boolean", !1],
      [[12, 17], "LanguageGroup", "number", 0],
      [[12, 18], "ExpansionFactor", "number", 0.06],
      [[12, 19], "initialRandomSeed", "number", 0],
      [20, "defaultWidthX", "number", 0],
      [21, "nominalWidthX", "number", 0],
      [22, "vsindex", "number", 0],
      [
        23,
        "blend",
        (function () {
          function e() {}
          return (
            (e.decode = function (e, t, r) {
              for (var n = r.pop(); r.length > n; ) r.pop();
            }),
            e
          );
        })(),
        null,
      ],
      [19, "Subrs", new Ji(new _i(), { type: "local" }), null],
    ]),
    ea = [
      ".notdef",
      "space",
      "exclam",
      "quotedbl",
      "numbersign",
      "dollar",
      "percent",
      "ampersand",
      "quoteright",
      "parenleft",
      "parenright",
      "asterisk",
      "plus",
      "comma",
      "hyphen",
      "period",
      "slash",
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "colon",
      "semicolon",
      "less",
      "equal",
      "greater",
      "question",
      "at",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "bracketleft",
      "backslash",
      "bracketright",
      "asciicircum",
      "underscore",
      "quoteleft",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "braceleft",
      "bar",
      "braceright",
      "asciitilde",
      "exclamdown",
      "cent",
      "sterling",
      "fraction",
      "yen",
      "florin",
      "section",
      "currency",
      "quotesingle",
      "quotedblleft",
      "guillemotleft",
      "guilsinglleft",
      "guilsinglright",
      "fi",
      "fl",
      "endash",
      "dagger",
      "daggerdbl",
      "periodcentered",
      "paragraph",
      "bullet",
      "quotesinglbase",
      "quotedblbase",
      "quotedblright",
      "guillemotright",
      "ellipsis",
      "perthousand",
      "questiondown",
      "grave",
      "acute",
      "circumflex",
      "tilde",
      "macron",
      "breve",
      "dotaccent",
      "dieresis",
      "ring",
      "cedilla",
      "hungarumlaut",
      "ogonek",
      "caron",
      "emdash",
      "AE",
      "ordfeminine",
      "Lslash",
      "Oslash",
      "OE",
      "ordmasculine",
      "ae",
      "dotlessi",
      "lslash",
      "oslash",
      "oe",
      "germandbls",
      "onesuperior",
      "logicalnot",
      "mu",
      "trademark",
      "Eth",
      "onehalf",
      "plusminus",
      "Thorn",
      "onequarter",
      "divide",
      "brokenbar",
      "degree",
      "thorn",
      "threequarters",
      "twosuperior",
      "registered",
      "minus",
      "eth",
      "multiply",
      "threesuperior",
      "copyright",
      "Aacute",
      "Acircumflex",
      "Adieresis",
      "Agrave",
      "Aring",
      "Atilde",
      "Ccedilla",
      "Eacute",
      "Ecircumflex",
      "Edieresis",
      "Egrave",
      "Iacute",
      "Icircumflex",
      "Idieresis",
      "Igrave",
      "Ntilde",
      "Oacute",
      "Ocircumflex",
      "Odieresis",
      "Ograve",
      "Otilde",
      "Scaron",
      "Uacute",
      "Ucircumflex",
      "Udieresis",
      "Ugrave",
      "Yacute",
      "Ydieresis",
      "Zcaron",
      "aacute",
      "acircumflex",
      "adieresis",
      "agrave",
      "aring",
      "atilde",
      "ccedilla",
      "eacute",
      "ecircumflex",
      "edieresis",
      "egrave",
      "iacute",
      "icircumflex",
      "idieresis",
      "igrave",
      "ntilde",
      "oacute",
      "ocircumflex",
      "odieresis",
      "ograve",
      "otilde",
      "scaron",
      "uacute",
      "ucircumflex",
      "udieresis",
      "ugrave",
      "yacute",
      "ydieresis",
      "zcaron",
      "exclamsmall",
      "Hungarumlautsmall",
      "dollaroldstyle",
      "dollarsuperior",
      "ampersandsmall",
      "Acutesmall",
      "parenleftsuperior",
      "parenrightsuperior",
      "twodotenleader",
      "onedotenleader",
      "zerooldstyle",
      "oneoldstyle",
      "twooldstyle",
      "threeoldstyle",
      "fouroldstyle",
      "fiveoldstyle",
      "sixoldstyle",
      "sevenoldstyle",
      "eightoldstyle",
      "nineoldstyle",
      "commasuperior",
      "threequartersemdash",
      "periodsuperior",
      "questionsmall",
      "asuperior",
      "bsuperior",
      "centsuperior",
      "dsuperior",
      "esuperior",
      "isuperior",
      "lsuperior",
      "msuperior",
      "nsuperior",
      "osuperior",
      "rsuperior",
      "ssuperior",
      "tsuperior",
      "ff",
      "ffi",
      "ffl",
      "parenleftinferior",
      "parenrightinferior",
      "Circumflexsmall",
      "hyphensuperior",
      "Gravesmall",
      "Asmall",
      "Bsmall",
      "Csmall",
      "Dsmall",
      "Esmall",
      "Fsmall",
      "Gsmall",
      "Hsmall",
      "Ismall",
      "Jsmall",
      "Ksmall",
      "Lsmall",
      "Msmall",
      "Nsmall",
      "Osmall",
      "Psmall",
      "Qsmall",
      "Rsmall",
      "Ssmall",
      "Tsmall",
      "Usmall",
      "Vsmall",
      "Wsmall",
      "Xsmall",
      "Ysmall",
      "Zsmall",
      "colonmonetary",
      "onefitted",
      "rupiah",
      "Tildesmall",
      "exclamdownsmall",
      "centoldstyle",
      "Lslashsmall",
      "Scaronsmall",
      "Zcaronsmall",
      "Dieresissmall",
      "Brevesmall",
      "Caronsmall",
      "Dotaccentsmall",
      "Macronsmall",
      "figuredash",
      "hypheninferior",
      "Ogoneksmall",
      "Ringsmall",
      "Cedillasmall",
      "questiondownsmall",
      "oneeighth",
      "threeeighths",
      "fiveeighths",
      "seveneighths",
      "onethird",
      "twothirds",
      "zerosuperior",
      "foursuperior",
      "fivesuperior",
      "sixsuperior",
      "sevensuperior",
      "eightsuperior",
      "ninesuperior",
      "zeroinferior",
      "oneinferior",
      "twoinferior",
      "threeinferior",
      "fourinferior",
      "fiveinferior",
      "sixinferior",
      "seveninferior",
      "eightinferior",
      "nineinferior",
      "centinferior",
      "dollarinferior",
      "periodinferior",
      "commainferior",
      "Agravesmall",
      "Aacutesmall",
      "Acircumflexsmall",
      "Atildesmall",
      "Adieresissmall",
      "Aringsmall",
      "AEsmall",
      "Ccedillasmall",
      "Egravesmall",
      "Eacutesmall",
      "Ecircumflexsmall",
      "Edieresissmall",
      "Igravesmall",
      "Iacutesmall",
      "Icircumflexsmall",
      "Idieresissmall",
      "Ethsmall",
      "Ntildesmall",
      "Ogravesmall",
      "Oacutesmall",
      "Ocircumflexsmall",
      "Otildesmall",
      "Odieresissmall",
      "OEsmall",
      "Oslashsmall",
      "Ugravesmall",
      "Uacutesmall",
      "Ucircumflexsmall",
      "Udieresissmall",
      "Yacutesmall",
      "Thornsmall",
      "Ydieresissmall",
      "001.000",
      "001.001",
      "001.002",
      "001.003",
      "Black",
      "Bold",
      "Book",
      "Light",
      "Medium",
      "Regular",
      "Roman",
      "Semibold",
    ],
    ta = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "space",
      "exclam",
      "quotedbl",
      "numbersign",
      "dollar",
      "percent",
      "ampersand",
      "quoteright",
      "parenleft",
      "parenright",
      "asterisk",
      "plus",
      "comma",
      "hyphen",
      "period",
      "slash",
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "colon",
      "semicolon",
      "less",
      "equal",
      "greater",
      "question",
      "at",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "bracketleft",
      "backslash",
      "bracketright",
      "asciicircum",
      "underscore",
      "quoteleft",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "braceleft",
      "bar",
      "braceright",
      "asciitilde",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "exclamdown",
      "cent",
      "sterling",
      "fraction",
      "yen",
      "florin",
      "section",
      "currency",
      "quotesingle",
      "quotedblleft",
      "guillemotleft",
      "guilsinglleft",
      "guilsinglright",
      "fi",
      "fl",
      "",
      "endash",
      "dagger",
      "daggerdbl",
      "periodcentered",
      "",
      "paragraph",
      "bullet",
      "quotesinglbase",
      "quotedblbase",
      "quotedblright",
      "guillemotright",
      "ellipsis",
      "perthousand",
      "",
      "questiondown",
      "",
      "grave",
      "acute",
      "circumflex",
      "tilde",
      "macron",
      "breve",
      "dotaccent",
      "dieresis",
      "",
      "ring",
      "cedilla",
      "",
      "hungarumlaut",
      "ogonek",
      "caron",
      "emdash",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "AE",
      "",
      "ordfeminine",
      "",
      "",
      "",
      "",
      "Lslash",
      "Oslash",
      "OE",
      "ordmasculine",
      "",
      "",
      "",
      "",
      "",
      "ae",
      "",
      "",
      "",
      "dotlessi",
      "",
      "",
      "lslash",
      "oslash",
      "oe",
      "germandbls",
    ],
    ra = [
      ".notdef",
      "space",
      "exclam",
      "quotedbl",
      "numbersign",
      "dollar",
      "percent",
      "ampersand",
      "quoteright",
      "parenleft",
      "parenright",
      "asterisk",
      "plus",
      "comma",
      "hyphen",
      "period",
      "slash",
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "colon",
      "semicolon",
      "less",
      "equal",
      "greater",
      "question",
      "at",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "bracketleft",
      "backslash",
      "bracketright",
      "asciicircum",
      "underscore",
      "quoteleft",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "braceleft",
      "bar",
      "braceright",
      "asciitilde",
      "exclamdown",
      "cent",
      "sterling",
      "fraction",
      "yen",
      "florin",
      "section",
      "currency",
      "quotesingle",
      "quotedblleft",
      "guillemotleft",
      "guilsinglleft",
      "guilsinglright",
      "fi",
      "fl",
      "endash",
      "dagger",
      "daggerdbl",
      "periodcentered",
      "paragraph",
      "bullet",
      "quotesinglbase",
      "quotedblbase",
      "quotedblright",
      "guillemotright",
      "ellipsis",
      "perthousand",
      "questiondown",
      "grave",
      "acute",
      "circumflex",
      "tilde",
      "macron",
      "breve",
      "dotaccent",
      "dieresis",
      "ring",
      "cedilla",
      "hungarumlaut",
      "ogonek",
      "caron",
      "emdash",
      "AE",
      "ordfeminine",
      "Lslash",
      "Oslash",
      "OE",
      "ordmasculine",
      "ae",
      "dotlessi",
      "lslash",
      "oslash",
      "oe",
      "germandbls",
      "onesuperior",
      "logicalnot",
      "mu",
      "trademark",
      "Eth",
      "onehalf",
      "plusminus",
      "Thorn",
      "onequarter",
      "divide",
      "brokenbar",
      "degree",
      "thorn",
      "threequarters",
      "twosuperior",
      "registered",
      "minus",
      "eth",
      "multiply",
      "threesuperior",
      "copyright",
      "Aacute",
      "Acircumflex",
      "Adieresis",
      "Agrave",
      "Aring",
      "Atilde",
      "Ccedilla",
      "Eacute",
      "Ecircumflex",
      "Edieresis",
      "Egrave",
      "Iacute",
      "Icircumflex",
      "Idieresis",
      "Igrave",
      "Ntilde",
      "Oacute",
      "Ocircumflex",
      "Odieresis",
      "Ograve",
      "Otilde",
      "Scaron",
      "Uacute",
      "Ucircumflex",
      "Udieresis",
      "Ugrave",
      "Yacute",
      "Ydieresis",
      "Zcaron",
      "aacute",
      "acircumflex",
      "adieresis",
      "agrave",
      "aring",
      "atilde",
      "ccedilla",
      "eacute",
      "ecircumflex",
      "edieresis",
      "egrave",
      "iacute",
      "icircumflex",
      "idieresis",
      "igrave",
      "ntilde",
      "oacute",
      "ocircumflex",
      "odieresis",
      "ograve",
      "otilde",
      "scaron",
      "uacute",
      "ucircumflex",
      "udieresis",
      "ugrave",
      "yacute",
      "ydieresis",
      "zcaron",
    ],
    na = new ni.Struct({
      reserved: new ni.Reserved(ni.uint16),
      reqFeatureIndex: ni.uint16,
      featureCount: ni.uint16,
      featureIndexes: new ni.Array(ni.uint16, "featureCount"),
    }),
    ia = new ni.Struct({
      tag: new ni.String(4),
      langSys: new ni.Pointer(ni.uint16, na, { type: "parent" }),
    }),
    aa = new ni.Struct({
      defaultLangSys: new ni.Pointer(ni.uint16, na),
      count: ni.uint16,
      langSysRecords: new ni.Array(ia, "count"),
    }),
    oa = new ni.Struct({
      tag: new ni.String(4),
      script: new ni.Pointer(ni.uint16, aa, { type: "parent" }),
    }),
    sa = new ni.Array(oa, ni.uint16),
    ua = new ni.Struct({
      featureParams: ni.uint16,
      lookupCount: ni.uint16,
      lookupListIndexes: new ni.Array(ni.uint16, "lookupCount"),
    }),
    la = new ni.Struct({
      tag: new ni.String(4),
      feature: new ni.Pointer(ni.uint16, ua, { type: "parent" }),
    }),
    ca = new ni.Array(la, ni.uint16),
    fa = new ni.Struct({
      markAttachmentType: ni.uint8,
      flags: new ni.Bitfield(ni.uint8, [
        "rightToLeft",
        "ignoreBaseGlyphs",
        "ignoreLigatures",
        "ignoreMarks",
        "useMarkFilteringSet",
      ]),
    });
  function ha(e) {
    var t = new ni.Struct({
      lookupType: ni.uint16,
      flags: fa,
      subTableCount: ni.uint16,
      subTables: new ni.Array(new ni.Pointer(ni.uint16, e), "subTableCount"),
      markFilteringSet: new ni.Optional(ni.uint16, function (e) {
        return e.flags.flags.useMarkFilteringSet;
      }),
    });
    return new ni.LazyArray(new ni.Pointer(ni.uint16, t), ni.uint16);
  }
  var da,
    pa = new ni.Struct({
      start: ni.uint16,
      end: ni.uint16,
      startCoverageIndex: ni.uint16,
    }),
    ga = new ni.VersionedStruct(ni.uint16, {
      1: {
        glyphCount: ni.uint16,
        glyphs: new ni.Array(ni.uint16, "glyphCount"),
      },
      2: {
        rangeCount: ni.uint16,
        rangeRecords: new ni.Array(pa, "rangeCount"),
      },
    }),
    va = new ni.Struct({ start: ni.uint16, end: ni.uint16, class: ni.uint16 }),
    ya = new ni.VersionedStruct(ni.uint16, {
      1: {
        startGlyph: ni.uint16,
        glyphCount: ni.uint16,
        classValueArray: new ni.Array(ni.uint16, "glyphCount"),
      },
      2: {
        classRangeCount: ni.uint16,
        classRangeRecord: new ni.Array(va, "classRangeCount"),
      },
    }),
    ba = new ni.Struct({ a: ni.uint16, b: ni.uint16, deltaFormat: ni.uint16 }),
    ma = new ni.Struct({
      sequenceIndex: ni.uint16,
      lookupListIndex: ni.uint16,
    }),
    wa = new ni.Struct({
      glyphCount: ni.uint16,
      lookupCount: ni.uint16,
      input: new ni.Array(ni.uint16, function (e) {
        return e.glyphCount - 1;
      }),
      lookupRecords: new ni.Array(ma, "lookupCount"),
    }),
    xa = new ni.Array(new ni.Pointer(ni.uint16, wa), ni.uint16),
    Sa = new ni.Struct({
      glyphCount: ni.uint16,
      lookupCount: ni.uint16,
      classes: new ni.Array(ni.uint16, function (e) {
        return e.glyphCount - 1;
      }),
      lookupRecords: new ni.Array(ma, "lookupCount"),
    }),
    ka = new ni.Array(new ni.Pointer(ni.uint16, Sa), ni.uint16),
    Aa = new ni.VersionedStruct(ni.uint16, {
      1: {
        coverage: new ni.Pointer(ni.uint16, ga),
        ruleSetCount: ni.uint16,
        ruleSets: new ni.Array(new ni.Pointer(ni.uint16, xa), "ruleSetCount"),
      },
      2: {
        coverage: new ni.Pointer(ni.uint16, ga),
        classDef: new ni.Pointer(ni.uint16, ya),
        classSetCnt: ni.uint16,
        classSet: new ni.Array(new ni.Pointer(ni.uint16, ka), "classSetCnt"),
      },
      3: {
        glyphCount: ni.uint16,
        lookupCount: ni.uint16,
        coverages: new ni.Array(new ni.Pointer(ni.uint16, ga), "glyphCount"),
        lookupRecords: new ni.Array(ma, "lookupCount"),
      },
    }),
    Ca = new ni.Struct({
      backtrackGlyphCount: ni.uint16,
      backtrack: new ni.Array(ni.uint16, "backtrackGlyphCount"),
      inputGlyphCount: ni.uint16,
      input: new ni.Array(ni.uint16, function (e) {
        return e.inputGlyphCount - 1;
      }),
      lookaheadGlyphCount: ni.uint16,
      lookahead: new ni.Array(ni.uint16, "lookaheadGlyphCount"),
      lookupCount: ni.uint16,
      lookupRecords: new ni.Array(ma, "lookupCount"),
    }),
    Pa = new ni.Array(new ni.Pointer(ni.uint16, Ca), ni.uint16),
    Ia = new ni.VersionedStruct(ni.uint16, {
      1: {
        coverage: new ni.Pointer(ni.uint16, ga),
        chainCount: ni.uint16,
        chainRuleSets: new ni.Array(
          new ni.Pointer(ni.uint16, Pa),
          "chainCount"
        ),
      },
      2: {
        coverage: new ni.Pointer(ni.uint16, ga),
        backtrackClassDef: new ni.Pointer(ni.uint16, ya),
        inputClassDef: new ni.Pointer(ni.uint16, ya),
        lookaheadClassDef: new ni.Pointer(ni.uint16, ya),
        chainCount: ni.uint16,
        chainClassSet: new ni.Array(
          new ni.Pointer(ni.uint16, Pa),
          "chainCount"
        ),
      },
      3: {
        backtrackGlyphCount: ni.uint16,
        backtrackCoverage: new ni.Array(
          new ni.Pointer(ni.uint16, ga),
          "backtrackGlyphCount"
        ),
        inputGlyphCount: ni.uint16,
        inputCoverage: new ni.Array(
          new ni.Pointer(ni.uint16, ga),
          "inputGlyphCount"
        ),
        lookaheadGlyphCount: ni.uint16,
        lookaheadCoverage: new ni.Array(
          new ni.Pointer(ni.uint16, ga),
          "lookaheadGlyphCount"
        ),
        lookupCount: ni.uint16,
        lookupRecords: new ni.Array(ma, "lookupCount"),
      },
    }),
    Oa = new ni.Fixed(16, "BE", 14),
    Ea = new ni.Struct({ startCoord: Oa, peakCoord: Oa, endCoord: Oa }),
    Ba = new ni.Struct({
      axisCount: ni.uint16,
      regionCount: ni.uint16,
      variationRegions: new ni.Array(
        new ni.Array(Ea, "axisCount"),
        "regionCount"
      ),
    }),
    Ta = new ni.Struct({
      shortDeltas: new ni.Array(ni.int16, function (e) {
        return e.parent.shortDeltaCount;
      }),
      regionDeltas: new ni.Array(ni.int8, function (e) {
        return e.parent.regionIndexCount - e.parent.shortDeltaCount;
      }),
      deltas: function (e) {
        return e.shortDeltas.concat(e.regionDeltas);
      },
    }),
    La = new ni.Struct({
      itemCount: ni.uint16,
      shortDeltaCount: ni.uint16,
      regionIndexCount: ni.uint16,
      regionIndexes: new ni.Array(ni.uint16, "regionIndexCount"),
      deltaSets: new ni.Array(Ta, "itemCount"),
    }),
    za = new ni.Struct({
      format: ni.uint16,
      variationRegionList: new ni.Pointer(ni.uint32, Ba),
      variationDataCount: ni.uint16,
      itemVariationData: new ni.Array(
        new ni.Pointer(ni.uint32, La),
        "variationDataCount"
      ),
    }),
    Da = new ni.VersionedStruct(ni.uint16, {
      1:
        ((da = { axisIndex: ni.uint16 }),
        (da.axisIndex = ni.uint16),
        (da.filterRangeMinValue = Oa),
        (da.filterRangeMaxValue = Oa),
        da),
    }),
    Ra = new ni.Struct({
      conditionCount: ni.uint16,
      conditionTable: new ni.Array(
        new ni.Pointer(ni.uint32, Da),
        "conditionCount"
      ),
    }),
    Ma = new ni.Struct({
      featureIndex: ni.uint16,
      alternateFeatureTable: new ni.Pointer(ni.uint32, ua, { type: "parent" }),
    }),
    Fa = new ni.Struct({
      version: ni.fixed32,
      substitutionCount: ni.uint16,
      substitutions: new ni.Array(Ma, "substitutionCount"),
    }),
    Ua = new ni.Struct({
      conditionSet: new ni.Pointer(ni.uint32, Ra, { type: "parent" }),
      featureTableSubstitution: new ni.Pointer(ni.uint32, Fa, {
        type: "parent",
      }),
    }),
    Na = new ni.Struct({
      majorVersion: ni.uint16,
      minorVersion: ni.uint16,
      featureVariationRecordCount: ni.uint32,
      featureVariationRecords: new ni.Array(Ua, "featureVariationRecordCount"),
    }),
    ja = (function () {
      function e(e, t) {
        (this.predefinedOps = e), (this.type = t);
      }
      var t = e.prototype;
      return (
        (t.decode = function (e, t, r) {
          return this.predefinedOps[r[0]]
            ? this.predefinedOps[r[0]]
            : this.type.decode(e, t, r);
        }),
        (t.size = function (e, t) {
          return this.type.size(e, t);
        }),
        (t.encode = function (e, t, r) {
          var n = this.predefinedOps.indexOf(t);
          return -1 !== n ? n : this.type.encode(e, t, r);
        }),
        e
      );
    })(),
    Ga = (function (e) {
      function t() {
        return e.call(this, "UInt8") || this;
      }
      return (
        li(t, e),
        (t.prototype.decode = function (e) {
          return 127 & ni.uint8.decode(e);
        }),
        t
      );
    })(ni.Number),
    Va = new ni.Struct({ first: ni.uint16, nLeft: ni.uint8 }),
    _a = new ni.Struct({ first: ni.uint16, nLeft: ni.uint16 }),
    qa = new ja(
      [
        ta,
        [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "space",
          "exclamsmall",
          "Hungarumlautsmall",
          "",
          "dollaroldstyle",
          "dollarsuperior",
          "ampersandsmall",
          "Acutesmall",
          "parenleftsuperior",
          "parenrightsuperior",
          "twodotenleader",
          "onedotenleader",
          "comma",
          "hyphen",
          "period",
          "fraction",
          "zerooldstyle",
          "oneoldstyle",
          "twooldstyle",
          "threeoldstyle",
          "fouroldstyle",
          "fiveoldstyle",
          "sixoldstyle",
          "sevenoldstyle",
          "eightoldstyle",
          "nineoldstyle",
          "colon",
          "semicolon",
          "commasuperior",
          "threequartersemdash",
          "periodsuperior",
          "questionsmall",
          "",
          "asuperior",
          "bsuperior",
          "centsuperior",
          "dsuperior",
          "esuperior",
          "",
          "",
          "isuperior",
          "",
          "",
          "lsuperior",
          "msuperior",
          "nsuperior",
          "osuperior",
          "",
          "",
          "rsuperior",
          "ssuperior",
          "tsuperior",
          "",
          "ff",
          "fi",
          "fl",
          "ffi",
          "ffl",
          "parenleftinferior",
          "",
          "parenrightinferior",
          "Circumflexsmall",
          "hyphensuperior",
          "Gravesmall",
          "Asmall",
          "Bsmall",
          "Csmall",
          "Dsmall",
          "Esmall",
          "Fsmall",
          "Gsmall",
          "Hsmall",
          "Ismall",
          "Jsmall",
          "Ksmall",
          "Lsmall",
          "Msmall",
          "Nsmall",
          "Osmall",
          "Psmall",
          "Qsmall",
          "Rsmall",
          "Ssmall",
          "Tsmall",
          "Usmall",
          "Vsmall",
          "Wsmall",
          "Xsmall",
          "Ysmall",
          "Zsmall",
          "colonmonetary",
          "onefitted",
          "rupiah",
          "Tildesmall",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "exclamdownsmall",
          "centoldstyle",
          "Lslashsmall",
          "",
          "",
          "Scaronsmall",
          "Zcaronsmall",
          "Dieresissmall",
          "Brevesmall",
          "Caronsmall",
          "",
          "Dotaccentsmall",
          "",
          "",
          "Macronsmall",
          "",
          "",
          "figuredash",
          "hypheninferior",
          "",
          "",
          "Ogoneksmall",
          "Ringsmall",
          "Cedillasmall",
          "",
          "",
          "",
          "onequarter",
          "onehalf",
          "threequarters",
          "questiondownsmall",
          "oneeighth",
          "threeeighths",
          "fiveeighths",
          "seveneighths",
          "onethird",
          "twothirds",
          "",
          "",
          "zerosuperior",
          "onesuperior",
          "twosuperior",
          "threesuperior",
          "foursuperior",
          "fivesuperior",
          "sixsuperior",
          "sevensuperior",
          "eightsuperior",
          "ninesuperior",
          "zeroinferior",
          "oneinferior",
          "twoinferior",
          "threeinferior",
          "fourinferior",
          "fiveinferior",
          "sixinferior",
          "seveninferior",
          "eightinferior",
          "nineinferior",
          "centinferior",
          "dollarinferior",
          "periodinferior",
          "commainferior",
          "Agravesmall",
          "Aacutesmall",
          "Acircumflexsmall",
          "Atildesmall",
          "Adieresissmall",
          "Aringsmall",
          "AEsmall",
          "Ccedillasmall",
          "Egravesmall",
          "Eacutesmall",
          "Ecircumflexsmall",
          "Edieresissmall",
          "Igravesmall",
          "Iacutesmall",
          "Icircumflexsmall",
          "Idieresissmall",
          "Ethsmall",
          "Ntildesmall",
          "Ogravesmall",
          "Oacutesmall",
          "Ocircumflexsmall",
          "Otildesmall",
          "Odieresissmall",
          "OEsmall",
          "Oslashsmall",
          "Ugravesmall",
          "Uacutesmall",
          "Ucircumflexsmall",
          "Udieresissmall",
          "Yacutesmall",
          "Thornsmall",
          "Ydieresissmall",
        ],
      ],
      new Ji(
        new ni.VersionedStruct(new Ga(), {
          0: { nCodes: ni.uint8, codes: new ni.Array(ni.uint8, "nCodes") },
          1: { nRanges: ni.uint8, ranges: new ni.Array(Va, "nRanges") },
        }),
        { lazy: !0 }
      )
    ),
    Wa = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (
        li(t, e),
        (t.prototype.decode = function (e, t) {
          for (var r = _n(this.length, e, t), n = 0, i = []; n < r; ) {
            var a = this.type.decode(e, t);
            (a.offset = n), (n += a.nLeft + 1), i.push(a);
          }
          return i;
        }),
        t
      );
    })(ni.Array),
    Ha = new ja(
      [
        ra,
        [
          ".notdef",
          "space",
          "exclamsmall",
          "Hungarumlautsmall",
          "dollaroldstyle",
          "dollarsuperior",
          "ampersandsmall",
          "Acutesmall",
          "parenleftsuperior",
          "parenrightsuperior",
          "twodotenleader",
          "onedotenleader",
          "comma",
          "hyphen",
          "period",
          "fraction",
          "zerooldstyle",
          "oneoldstyle",
          "twooldstyle",
          "threeoldstyle",
          "fouroldstyle",
          "fiveoldstyle",
          "sixoldstyle",
          "sevenoldstyle",
          "eightoldstyle",
          "nineoldstyle",
          "colon",
          "semicolon",
          "commasuperior",
          "threequartersemdash",
          "periodsuperior",
          "questionsmall",
          "asuperior",
          "bsuperior",
          "centsuperior",
          "dsuperior",
          "esuperior",
          "isuperior",
          "lsuperior",
          "msuperior",
          "nsuperior",
          "osuperior",
          "rsuperior",
          "ssuperior",
          "tsuperior",
          "ff",
          "fi",
          "fl",
          "ffi",
          "ffl",
          "parenleftinferior",
          "parenrightinferior",
          "Circumflexsmall",
          "hyphensuperior",
          "Gravesmall",
          "Asmall",
          "Bsmall",
          "Csmall",
          "Dsmall",
          "Esmall",
          "Fsmall",
          "Gsmall",
          "Hsmall",
          "Ismall",
          "Jsmall",
          "Ksmall",
          "Lsmall",
          "Msmall",
          "Nsmall",
          "Osmall",
          "Psmall",
          "Qsmall",
          "Rsmall",
          "Ssmall",
          "Tsmall",
          "Usmall",
          "Vsmall",
          "Wsmall",
          "Xsmall",
          "Ysmall",
          "Zsmall",
          "colonmonetary",
          "onefitted",
          "rupiah",
          "Tildesmall",
          "exclamdownsmall",
          "centoldstyle",
          "Lslashsmall",
          "Scaronsmall",
          "Zcaronsmall",
          "Dieresissmall",
          "Brevesmall",
          "Caronsmall",
          "Dotaccentsmall",
          "Macronsmall",
          "figuredash",
          "hypheninferior",
          "Ogoneksmall",
          "Ringsmall",
          "Cedillasmall",
          "onequarter",
          "onehalf",
          "threequarters",
          "questiondownsmall",
          "oneeighth",
          "threeeighths",
          "fiveeighths",
          "seveneighths",
          "onethird",
          "twothirds",
          "zerosuperior",
          "onesuperior",
          "twosuperior",
          "threesuperior",
          "foursuperior",
          "fivesuperior",
          "sixsuperior",
          "sevensuperior",
          "eightsuperior",
          "ninesuperior",
          "zeroinferior",
          "oneinferior",
          "twoinferior",
          "threeinferior",
          "fourinferior",
          "fiveinferior",
          "sixinferior",
          "seveninferior",
          "eightinferior",
          "nineinferior",
          "centinferior",
          "dollarinferior",
          "periodinferior",
          "commainferior",
          "Agravesmall",
          "Aacutesmall",
          "Acircumflexsmall",
          "Atildesmall",
          "Adieresissmall",
          "Aringsmall",
          "AEsmall",
          "Ccedillasmall",
          "Egravesmall",
          "Eacutesmall",
          "Ecircumflexsmall",
          "Edieresissmall",
          "Igravesmall",
          "Iacutesmall",
          "Icircumflexsmall",
          "Idieresissmall",
          "Ethsmall",
          "Ntildesmall",
          "Ogravesmall",
          "Oacutesmall",
          "Ocircumflexsmall",
          "Otildesmall",
          "Odieresissmall",
          "OEsmall",
          "Oslashsmall",
          "Ugravesmall",
          "Uacutesmall",
          "Ucircumflexsmall",
          "Udieresissmall",
          "Yacutesmall",
          "Thornsmall",
          "Ydieresissmall",
        ],
        [
          ".notdef",
          "space",
          "dollaroldstyle",
          "dollarsuperior",
          "parenleftsuperior",
          "parenrightsuperior",
          "twodotenleader",
          "onedotenleader",
          "comma",
          "hyphen",
          "period",
          "fraction",
          "zerooldstyle",
          "oneoldstyle",
          "twooldstyle",
          "threeoldstyle",
          "fouroldstyle",
          "fiveoldstyle",
          "sixoldstyle",
          "sevenoldstyle",
          "eightoldstyle",
          "nineoldstyle",
          "colon",
          "semicolon",
          "commasuperior",
          "threequartersemdash",
          "periodsuperior",
          "asuperior",
          "bsuperior",
          "centsuperior",
          "dsuperior",
          "esuperior",
          "isuperior",
          "lsuperior",
          "msuperior",
          "nsuperior",
          "osuperior",
          "rsuperior",
          "ssuperior",
          "tsuperior",
          "ff",
          "fi",
          "fl",
          "ffi",
          "ffl",
          "parenleftinferior",
          "parenrightinferior",
          "hyphensuperior",
          "colonmonetary",
          "onefitted",
          "rupiah",
          "centoldstyle",
          "figuredash",
          "hypheninferior",
          "onequarter",
          "onehalf",
          "threequarters",
          "oneeighth",
          "threeeighths",
          "fiveeighths",
          "seveneighths",
          "onethird",
          "twothirds",
          "zerosuperior",
          "onesuperior",
          "twosuperior",
          "threesuperior",
          "foursuperior",
          "fivesuperior",
          "sixsuperior",
          "sevensuperior",
          "eightsuperior",
          "ninesuperior",
          "zeroinferior",
          "oneinferior",
          "twoinferior",
          "threeinferior",
          "fourinferior",
          "fiveinferior",
          "sixinferior",
          "seveninferior",
          "eightinferior",
          "nineinferior",
          "centinferior",
          "dollarinferior",
          "periodinferior",
          "commainferior",
        ],
      ],
      new Ji(
        new ni.VersionedStruct(ni.uint8, {
          0: {
            glyphs: new ni.Array(ni.uint16, function (e) {
              return e.parent.CharStrings.length - 1;
            }),
          },
          1: {
            ranges: new Wa(Va, function (e) {
              return e.parent.CharStrings.length - 1;
            }),
          },
          2: {
            ranges: new Wa(_a, function (e) {
              return e.parent.CharStrings.length - 1;
            }),
          },
        }),
        { lazy: !0 }
      )
    ),
    Ya = new ni.Struct({ first: ni.uint16, fd: ni.uint8 }),
    Za = new ni.Struct({ first: ni.uint32, fd: ni.uint16 }),
    Xa = new ni.VersionedStruct(ni.uint8, {
      0: {
        fds: new ni.Array(ni.uint8, function (e) {
          return e.parent.CharStrings.length;
        }),
      },
      3: {
        nRanges: ni.uint16,
        ranges: new ni.Array(Ya, "nRanges"),
        sentinel: ni.uint16,
      },
      4: {
        nRanges: ni.uint32,
        ranges: new ni.Array(Za, "nRanges"),
        sentinel: ni.uint32,
      },
    }),
    Ka = new Ji($i),
    Ja = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.decode = function (e, t, r) {
          return (t.length = r[0]), Ka.decode(e, t, [r[1]]);
        }),
        (t.size = function (e, t) {
          return [$i.size(e, t, !1), Ka.size(e, t)[0]];
        }),
        (t.encode = function (e, t, r) {
          return [$i.size(t, r, !1), Ka.encode(e, t, r)[0]];
        }),
        e
      );
    })(),
    Qa = new Ki([
      [18, "Private", new Ja(), null],
      [[12, 38], "FontName", "sid", null],
    ]),
    $a = new Ki([
      [[12, 30], "ROS", ["sid", "sid", "number"], null],
      [0, "version", "sid", null],
      [1, "Notice", "sid", null],
      [[12, 0], "Copyright", "sid", null],
      [2, "FullName", "sid", null],
      [3, "FamilyName", "sid", null],
      [4, "Weight", "sid", null],
      [[12, 1], "isFixedPitch", "boolean", !1],
      [[12, 2], "ItalicAngle", "number", 0],
      [[12, 3], "UnderlinePosition", "number", -100],
      [[12, 4], "UnderlineThickness", "number", 50],
      [[12, 5], "PaintType", "number", 0],
      [[12, 6], "CharstringType", "number", 2],
      [[12, 7], "FontMatrix", "array", [0.001, 0, 0, 0.001, 0, 0]],
      [13, "UniqueID", "number", null],
      [5, "FontBBox", "array", [0, 0, 0, 0]],
      [[12, 8], "StrokeWidth", "number", 0],
      [14, "XUID", "array", null],
      [15, "charset", Ha, ra],
      [16, "Encoding", qa, ta],
      [17, "CharStrings", new Ji(new _i()), null],
      [18, "Private", new Ja(), null],
      [[12, 20], "SyntheticBase", "number", null],
      [[12, 21], "PostScript", "sid", null],
      [[12, 22], "BaseFontName", "sid", null],
      [[12, 23], "BaseFontBlend", "delta", null],
      [[12, 31], "CIDFontVersion", "number", 0],
      [[12, 32], "CIDFontRevision", "number", 0],
      [[12, 33], "CIDFontType", "number", 0],
      [[12, 34], "CIDCount", "number", 8720],
      [[12, 35], "UIDBase", "number", null],
      [[12, 37], "FDSelect", new Ji(Xa), null],
      [[12, 36], "FDArray", new Ji(new _i(Qa)), null],
      [[12, 38], "FontName", "sid", null],
    ]),
    eo = new ni.Struct({ length: ni.uint16, itemVariationStore: za }),
    to = new Ki([
      [[12, 7], "FontMatrix", "array", [0.001, 0, 0, 0.001, 0, 0]],
      [17, "CharStrings", new Ji(new _i()), null],
      [[12, 37], "FDSelect", new Ji(Xa), null],
      [[12, 36], "FDArray", new Ji(new _i(Qa)), null],
      [24, "vstore", new Ji(eo), null],
      [25, "maxstack", "number", 193],
    ]),
    ro = new ni.VersionedStruct(ni.fixed16, {
      1: {
        hdrSize: ni.uint8,
        offSize: ni.uint8,
        nameIndex: new _i(new ni.String("length")),
        topDictIndex: new _i($a),
        stringIndex: new _i(new ni.String("length")),
        globalSubrIndex: new _i(),
      },
      2: {
        hdrSize: ni.uint8,
        length: ni.uint16,
        topDict: to,
        globalSubrIndex: new _i(),
      },
    }),
    no = (function () {
      function e(e) {
        (this.stream = e), this.decode();
      }
      e.decode = function (t) {
        return new e(t);
      };
      var t = e.prototype;
      return (
        (t.decode = function () {
          this.stream.pos;
          var e = ro.decode(this.stream);
          for (var t in e) {
            var r = e[t];
            this[t] = r;
          }
          if (this.version < 2) {
            if (1 !== this.topDictIndex.length)
              throw new Error("Only a single font is allowed in CFF");
            this.topDict = this.topDictIndex[0];
          }
          return (this.isCIDFont = null != this.topDict.ROS), this;
        }),
        (t.string = function (e) {
          return this.version >= 2
            ? null
            : e < ea.length
            ? ea[e]
            : this.stringIndex[e - ea.length];
        }),
        (t.getCharString = function (e) {
          return (
            (this.stream.pos = this.topDict.CharStrings[e].offset),
            this.stream.readBuffer(this.topDict.CharStrings[e].length)
          );
        }),
        (t.getGlyphName = function (e) {
          if (this.version >= 2) return null;
          if (this.isCIDFont) return null;
          var t = this.topDict.charset;
          if (Array.isArray(t)) return t[e];
          if (0 === e) return ".notdef";
          switch (((e -= 1), t.version)) {
            case 0:
              return this.string(t.glyphs[e]);
            case 1:
            case 2:
              for (var r = 0; r < t.ranges.length; r++) {
                var n = t.ranges[r];
                if (n.offset <= e && e <= n.offset + n.nLeft)
                  return this.string(n.first + (e - n.offset));
              }
          }
          return null;
        }),
        (t.fdForGlyph = function (e) {
          if (!this.topDict.FDSelect) return null;
          switch (this.topDict.FDSelect.version) {
            case 0:
              return this.topDict.FDSelect.fds[e];
            case 3:
            case 4:
              for (
                var t = this.topDict.FDSelect.ranges, r = 0, n = t.length - 1;
                r <= n;

              ) {
                var i = (r + n) >> 1;
                if (e < t[i].first) n = i - 1;
                else {
                  if (!(i < n && e > t[i + 1].first)) return t[i].fd;
                  r = i + 1;
                }
              }
            default:
              throw new Error(
                "Unknown FDSelect version: " + this.topDict.FDSelect.version
              );
          }
        }),
        (t.privateDictForGlyph = function (e) {
          if (this.topDict.FDSelect) {
            var t = this.fdForGlyph(e);
            return this.topDict.FDArray[t]
              ? this.topDict.FDArray[t].Private
              : null;
          }
          return this.version < 2
            ? this.topDict.Private
            : this.topDict.FDArray[0].Private;
        }),
        si(e, [
          {
            key: "postscriptName",
            get: function () {
              return this.version < 2 ? this.nameIndex[0] : null;
            },
          },
          {
            key: "fullName",
            get: function () {
              return this.string(this.topDict.FullName);
            },
          },
          {
            key: "familyName",
            get: function () {
              return this.string(this.topDict.FamilyName);
            },
          },
        ]),
        e
      );
    })(),
    io = new ni.Struct({ glyphIndex: ni.uint16, vertOriginY: ni.int16 }),
    ao = new ni.Struct({
      majorVersion: ni.uint16,
      minorVersion: ni.uint16,
      defaultVertOriginY: ni.int16,
      numVertOriginYMetrics: ni.uint16,
      metrics: new ni.Array(io, "numVertOriginYMetrics"),
    }),
    oo = new ni.Struct({
      height: ni.uint8,
      width: ni.uint8,
      horiBearingX: ni.int8,
      horiBearingY: ni.int8,
      horiAdvance: ni.uint8,
      vertBearingX: ni.int8,
      vertBearingY: ni.int8,
      vertAdvance: ni.uint8,
    }),
    so = new ni.Struct({
      height: ni.uint8,
      width: ni.uint8,
      bearingX: ni.int8,
      bearingY: ni.int8,
      advance: ni.uint8,
    }),
    uo = new ni.Struct({
      glyph: ni.uint16,
      xOffset: ni.int8,
      yOffset: ni.int8,
    }),
    lo = function () {},
    co = function () {},
    fo =
      (new ni.VersionedStruct("version", {
        1: { metrics: so, data: lo },
        2: { metrics: so, data: co },
        5: { data: co },
        6: { metrics: oo, data: lo },
        7: { metrics: oo, data: co },
        8: {
          metrics: so,
          pad: new ni.Reserved(ni.uint8),
          numComponents: ni.uint16,
          components: new ni.Array(uo, "numComponents"),
        },
        9: {
          metrics: oo,
          pad: new ni.Reserved(ni.uint8),
          numComponents: ni.uint16,
          components: new ni.Array(uo, "numComponents"),
        },
        17: { metrics: so, dataLen: ni.uint32, data: new ni.Buffer("dataLen") },
        18: { metrics: oo, dataLen: ni.uint32, data: new ni.Buffer("dataLen") },
        19: { dataLen: ni.uint32, data: new ni.Buffer("dataLen") },
      }),
      new ni.Struct({
        ascender: ni.int8,
        descender: ni.int8,
        widthMax: ni.uint8,
        caretSlopeNumerator: ni.int8,
        caretSlopeDenominator: ni.int8,
        caretOffset: ni.int8,
        minOriginSB: ni.int8,
        minAdvanceSB: ni.int8,
        maxBeforeBL: ni.int8,
        minAfterBL: ni.int8,
        pad: new ni.Reserved(ni.int8, 2),
      })),
    ho = new ni.Struct({ glyphCode: ni.uint16, offset: ni.uint16 }),
    po = new ni.VersionedStruct(ni.uint16, {
      header: { imageFormat: ni.uint16, imageDataOffset: ni.uint32 },
      1: {
        offsetArray: new ni.Array(ni.uint32, function (e) {
          return e.parent.lastGlyphIndex - e.parent.firstGlyphIndex + 1;
        }),
      },
      2: { imageSize: ni.uint32, bigMetrics: oo },
      3: {
        offsetArray: new ni.Array(ni.uint16, function (e) {
          return e.parent.lastGlyphIndex - e.parent.firstGlyphIndex + 1;
        }),
      },
      4: {
        numGlyphs: ni.uint32,
        glyphArray: new ni.Array(ho, function (e) {
          return e.numGlyphs + 1;
        }),
      },
      5: {
        imageSize: ni.uint32,
        bigMetrics: oo,
        numGlyphs: ni.uint32,
        glyphCodeArray: new ni.Array(ni.uint16, "numGlyphs"),
      },
    }),
    go = new ni.Struct({
      firstGlyphIndex: ni.uint16,
      lastGlyphIndex: ni.uint16,
      subtable: new ni.Pointer(ni.uint32, po),
    }),
    vo = new ni.Struct({
      indexSubTableArray: new ni.Pointer(ni.uint32, new ni.Array(go, 1), {
        type: "parent",
      }),
      indexTablesSize: ni.uint32,
      numberOfIndexSubTables: ni.uint32,
      colorRef: ni.uint32,
      hori: fo,
      vert: fo,
      startGlyphIndex: ni.uint16,
      endGlyphIndex: ni.uint16,
      ppemX: ni.uint8,
      ppemY: ni.uint8,
      bitDepth: ni.uint8,
      flags: new ni.Bitfield(ni.uint8, ["horizontal", "vertical"]),
    }),
    yo = new ni.Struct({
      version: ni.uint32,
      numSizes: ni.uint32,
      sizes: new ni.Array(vo, "numSizes"),
    }),
    bo = new ni.Struct({
      ppem: ni.uint16,
      resolution: ni.uint16,
      imageOffsets: new ni.Array(new ni.Pointer(ni.uint32, "void"), function (
        e
      ) {
        return e.parent.parent.maxp.numGlyphs + 1;
      }),
    }),
    mo = new ni.Struct({
      version: ni.uint16,
      flags: new ni.Bitfield(ni.uint16, ["renderOutlines"]),
      numImgTables: ni.uint32,
      imageTables: new ni.Array(new ni.Pointer(ni.uint32, bo), "numImgTables"),
    }),
    wo = new ni.Struct({ gid: ni.uint16, paletteIndex: ni.uint16 }),
    xo = new ni.Struct({
      gid: ni.uint16,
      firstLayerIndex: ni.uint16,
      numLayers: ni.uint16,
    }),
    So = new ni.Struct({
      version: ni.uint16,
      numBaseGlyphRecords: ni.uint16,
      baseGlyphRecord: new ni.Pointer(
        ni.uint32,
        new ni.Array(xo, "numBaseGlyphRecords")
      ),
      layerRecords: new ni.Pointer(
        ni.uint32,
        new ni.Array(wo, "numLayerRecords"),
        { lazy: !0 }
      ),
      numLayerRecords: ni.uint16,
    }),
    ko = new ni.Struct({
      blue: ni.uint8,
      green: ni.uint8,
      red: ni.uint8,
      alpha: ni.uint8,
    }),
    Ao = new ni.VersionedStruct(ni.uint16, {
      header: {
        numPaletteEntries: ni.uint16,
        numPalettes: ni.uint16,
        numColorRecords: ni.uint16,
        colorRecords: new ni.Pointer(
          ni.uint32,
          new ni.Array(ko, "numColorRecords")
        ),
        colorRecordIndices: new ni.Array(ni.uint16, "numPalettes"),
      },
      0: {},
      1: {
        offsetPaletteTypeArray: new ni.Pointer(
          ni.uint32,
          new ni.Array(ni.uint32, "numPalettes")
        ),
        offsetPaletteLabelArray: new ni.Pointer(
          ni.uint32,
          new ni.Array(ni.uint16, "numPalettes")
        ),
        offsetPaletteEntryLabelArray: new ni.Pointer(
          ni.uint32,
          new ni.Array(ni.uint16, "numPaletteEntries")
        ),
      },
    }),
    Co = new ni.VersionedStruct(ni.uint16, {
      1: { coordinate: ni.int16 },
      2: {
        coordinate: ni.int16,
        referenceGlyph: ni.uint16,
        baseCoordPoint: ni.uint16,
      },
      3: { coordinate: ni.int16, deviceTable: new ni.Pointer(ni.uint16, ba) },
    }),
    Po = new ni.Struct({
      defaultIndex: ni.uint16,
      baseCoordCount: ni.uint16,
      baseCoords: new ni.Array(new ni.Pointer(ni.uint16, Co), "baseCoordCount"),
    }),
    Io = new ni.Struct({
      tag: new ni.String(4),
      minCoord: new ni.Pointer(ni.uint16, Co, { type: "parent" }),
      maxCoord: new ni.Pointer(ni.uint16, Co, { type: "parent" }),
    }),
    Oo = new ni.Struct({
      minCoord: new ni.Pointer(ni.uint16, Co),
      maxCoord: new ni.Pointer(ni.uint16, Co),
      featMinMaxCount: ni.uint16,
      featMinMaxRecords: new ni.Array(Io, "featMinMaxCount"),
    }),
    Eo = new ni.Struct({
      tag: new ni.String(4),
      minMax: new ni.Pointer(ni.uint16, Oo, { type: "parent" }),
    }),
    Bo = new ni.Struct({
      baseValues: new ni.Pointer(ni.uint16, Po),
      defaultMinMax: new ni.Pointer(ni.uint16, Oo),
      baseLangSysCount: ni.uint16,
      baseLangSysRecords: new ni.Array(Eo, "baseLangSysCount"),
    }),
    To = new ni.Struct({
      tag: new ni.String(4),
      script: new ni.Pointer(ni.uint16, Bo, { type: "parent" }),
    }),
    Lo = new ni.Array(To, ni.uint16),
    zo = new ni.Array(new ni.String(4), ni.uint16),
    Do = new ni.Struct({
      baseTagList: new ni.Pointer(ni.uint16, zo),
      baseScriptList: new ni.Pointer(ni.uint16, Lo),
    }),
    Ro = new ni.VersionedStruct(ni.uint32, {
      header: {
        horizAxis: new ni.Pointer(ni.uint16, Do),
        vertAxis: new ni.Pointer(ni.uint16, Do),
      },
      65536: {},
      65537: { itemVariationStore: new ni.Pointer(ni.uint32, za) },
    }),
    Mo = new ni.Array(ni.uint16, ni.uint16),
    Fo = new ni.Struct({
      coverage: new ni.Pointer(ni.uint16, ga),
      glyphCount: ni.uint16,
      attachPoints: new ni.Array(new ni.Pointer(ni.uint16, Mo), "glyphCount"),
    }),
    Uo = new ni.VersionedStruct(ni.uint16, {
      1: { coordinate: ni.int16 },
      2: { caretValuePoint: ni.uint16 },
      3: { coordinate: ni.int16, deviceTable: new ni.Pointer(ni.uint16, ba) },
    }),
    No = new ni.Array(new ni.Pointer(ni.uint16, Uo), ni.uint16),
    jo = new ni.Struct({
      coverage: new ni.Pointer(ni.uint16, ga),
      ligGlyphCount: ni.uint16,
      ligGlyphs: new ni.Array(new ni.Pointer(ni.uint16, No), "ligGlyphCount"),
    }),
    Go = new ni.Struct({
      markSetTableFormat: ni.uint16,
      markSetCount: ni.uint16,
      coverage: new ni.Array(new ni.Pointer(ni.uint32, ga), "markSetCount"),
    }),
    Vo = new ni.VersionedStruct(ni.uint32, {
      header: {
        glyphClassDef: new ni.Pointer(ni.uint16, ya),
        attachList: new ni.Pointer(ni.uint16, Fo),
        ligCaretList: new ni.Pointer(ni.uint16, jo),
        markAttachClassDef: new ni.Pointer(ni.uint16, ya),
      },
      65536: {},
      65538: { markGlyphSetsDef: new ni.Pointer(ni.uint16, Go) },
      65539: {
        markGlyphSetsDef: new ni.Pointer(ni.uint16, Go),
        itemVariationStore: new ni.Pointer(ni.uint32, za),
      },
    }),
    _o = new ni.Bitfield(ni.uint16, [
      "xPlacement",
      "yPlacement",
      "xAdvance",
      "yAdvance",
      "xPlaDevice",
      "yPlaDevice",
      "xAdvDevice",
      "yAdvDevice",
    ]),
    qo = {
      xPlacement: ni.int16,
      yPlacement: ni.int16,
      xAdvance: ni.int16,
      yAdvance: ni.int16,
      xPlaDevice: new ni.Pointer(ni.uint16, ba, {
        type: "global",
        relativeTo: "rel",
      }),
      yPlaDevice: new ni.Pointer(ni.uint16, ba, {
        type: "global",
        relativeTo: "rel",
      }),
      xAdvDevice: new ni.Pointer(ni.uint16, ba, {
        type: "global",
        relativeTo: "rel",
      }),
      yAdvDevice: new ni.Pointer(ni.uint16, ba, {
        type: "global",
        relativeTo: "rel",
      }),
    },
    Wo = (function () {
      function e(e) {
        void 0 === e && (e = "valueFormat"), (this.key = e);
      }
      var t = e.prototype;
      return (
        (t.buildStruct = function (e) {
          for (var t = e; !t[this.key] && t.parent; ) t = t.parent;
          if (t[this.key]) {
            var r = {
                rel: function () {
                  return t._startOffset;
                },
              },
              n = t[this.key];
            for (var i in n) n[i] && (r[i] = qo[i]);
            return new ni.Struct(r);
          }
        }),
        (t.size = function (e, t) {
          return this.buildStruct(t).size(e, t);
        }),
        (t.decode = function (e, t) {
          var r = this.buildStruct(t).decode(e, t);
          return delete r.rel, r;
        }),
        e
      );
    })(),
    Ho = new ni.Struct({
      secondGlyph: ni.uint16,
      value1: new Wo("valueFormat1"),
      value2: new Wo("valueFormat2"),
    }),
    Yo = new ni.Array(Ho, ni.uint16),
    Zo = new ni.Struct({
      value1: new Wo("valueFormat1"),
      value2: new Wo("valueFormat2"),
    }),
    Xo = new ni.VersionedStruct(ni.uint16, {
      1: { xCoordinate: ni.int16, yCoordinate: ni.int16 },
      2: {
        xCoordinate: ni.int16,
        yCoordinate: ni.int16,
        anchorPoint: ni.uint16,
      },
      3: {
        xCoordinate: ni.int16,
        yCoordinate: ni.int16,
        xDeviceTable: new ni.Pointer(ni.uint16, ba),
        yDeviceTable: new ni.Pointer(ni.uint16, ba),
      },
    }),
    Ko = new ni.Struct({
      entryAnchor: new ni.Pointer(ni.uint16, Xo, { type: "parent" }),
      exitAnchor: new ni.Pointer(ni.uint16, Xo, { type: "parent" }),
    }),
    Jo = new ni.Struct({
      class: ni.uint16,
      markAnchor: new ni.Pointer(ni.uint16, Xo, { type: "parent" }),
    }),
    Qo = new ni.Array(Jo, ni.uint16),
    $o = new ni.Array(new ni.Pointer(ni.uint16, Xo), function (e) {
      return e.parent.classCount;
    }),
    es = new ni.Array($o, ni.uint16),
    ts = new ni.Array(new ni.Pointer(ni.uint16, Xo), function (e) {
      return e.parent.parent.classCount;
    }),
    rs = new ni.Array(ts, ni.uint16),
    ns = new ni.Array(new ni.Pointer(ni.uint16, rs), ni.uint16),
    is = new ni.VersionedStruct("lookupType", {
      1: new ni.VersionedStruct(ni.uint16, {
        1: {
          coverage: new ni.Pointer(ni.uint16, ga),
          valueFormat: _o,
          value: new Wo(),
        },
        2: {
          coverage: new ni.Pointer(ni.uint16, ga),
          valueFormat: _o,
          valueCount: ni.uint16,
          values: new ni.LazyArray(new Wo(), "valueCount"),
        },
      }),
      2: new ni.VersionedStruct(ni.uint16, {
        1: {
          coverage: new ni.Pointer(ni.uint16, ga),
          valueFormat1: _o,
          valueFormat2: _o,
          pairSetCount: ni.uint16,
          pairSets: new ni.LazyArray(
            new ni.Pointer(ni.uint16, Yo),
            "pairSetCount"
          ),
        },
        2: {
          coverage: new ni.Pointer(ni.uint16, ga),
          valueFormat1: _o,
          valueFormat2: _o,
          classDef1: new ni.Pointer(ni.uint16, ya),
          classDef2: new ni.Pointer(ni.uint16, ya),
          class1Count: ni.uint16,
          class2Count: ni.uint16,
          classRecords: new ni.LazyArray(
            new ni.LazyArray(Zo, "class2Count"),
            "class1Count"
          ),
        },
      }),
      3: {
        format: ni.uint16,
        coverage: new ni.Pointer(ni.uint16, ga),
        entryExitCount: ni.uint16,
        entryExitRecords: new ni.Array(Ko, "entryExitCount"),
      },
      4: {
        format: ni.uint16,
        markCoverage: new ni.Pointer(ni.uint16, ga),
        baseCoverage: new ni.Pointer(ni.uint16, ga),
        classCount: ni.uint16,
        markArray: new ni.Pointer(ni.uint16, Qo),
        baseArray: new ni.Pointer(ni.uint16, es),
      },
      5: {
        format: ni.uint16,
        markCoverage: new ni.Pointer(ni.uint16, ga),
        ligatureCoverage: new ni.Pointer(ni.uint16, ga),
        classCount: ni.uint16,
        markArray: new ni.Pointer(ni.uint16, Qo),
        ligatureArray: new ni.Pointer(ni.uint16, ns),
      },
      6: {
        format: ni.uint16,
        mark1Coverage: new ni.Pointer(ni.uint16, ga),
        mark2Coverage: new ni.Pointer(ni.uint16, ga),
        classCount: ni.uint16,
        mark1Array: new ni.Pointer(ni.uint16, Qo),
        mark2Array: new ni.Pointer(ni.uint16, es),
      },
      7: Aa,
      8: Ia,
      9: {
        posFormat: ni.uint16,
        lookupType: ni.uint16,
        extension: new ni.Pointer(ni.uint32, is),
      },
    });
  is.versions[9].extension.type = is;
  var as = new ni.VersionedStruct(ni.uint32, {
      header: {
        scriptList: new ni.Pointer(ni.uint16, sa),
        featureList: new ni.Pointer(ni.uint16, ca),
        lookupList: new ni.Pointer(ni.uint16, new ha(is)),
      },
      65536: {},
      65537: { featureVariations: new ni.Pointer(ni.uint32, Na) },
    }),
    os = new ni.Array(ni.uint16, ni.uint16),
    ss = os,
    us = new ni.Struct({
      glyph: ni.uint16,
      compCount: ni.uint16,
      components: new ni.Array(ni.uint16, function (e) {
        return e.compCount - 1;
      }),
    }),
    ls = new ni.Array(new ni.Pointer(ni.uint16, us), ni.uint16),
    cs = new ni.VersionedStruct("lookupType", {
      1: new ni.VersionedStruct(ni.uint16, {
        1: { coverage: new ni.Pointer(ni.uint16, ga), deltaGlyphID: ni.int16 },
        2: {
          coverage: new ni.Pointer(ni.uint16, ga),
          glyphCount: ni.uint16,
          substitute: new ni.LazyArray(ni.uint16, "glyphCount"),
        },
      }),
      2: {
        substFormat: ni.uint16,
        coverage: new ni.Pointer(ni.uint16, ga),
        count: ni.uint16,
        sequences: new ni.LazyArray(new ni.Pointer(ni.uint16, os), "count"),
      },
      3: {
        substFormat: ni.uint16,
        coverage: new ni.Pointer(ni.uint16, ga),
        count: ni.uint16,
        alternateSet: new ni.LazyArray(new ni.Pointer(ni.uint16, ss), "count"),
      },
      4: {
        substFormat: ni.uint16,
        coverage: new ni.Pointer(ni.uint16, ga),
        count: ni.uint16,
        ligatureSets: new ni.LazyArray(new ni.Pointer(ni.uint16, ls), "count"),
      },
      5: Aa,
      6: Ia,
      7: {
        substFormat: ni.uint16,
        lookupType: ni.uint16,
        extension: new ni.Pointer(ni.uint32, cs),
      },
      8: {
        substFormat: ni.uint16,
        coverage: new ni.Pointer(ni.uint16, ga),
        backtrackCoverage: new ni.Array(
          new ni.Pointer(ni.uint16, ga),
          "backtrackGlyphCount"
        ),
        lookaheadGlyphCount: ni.uint16,
        lookaheadCoverage: new ni.Array(
          new ni.Pointer(ni.uint16, ga),
          "lookaheadGlyphCount"
        ),
        glyphCount: ni.uint16,
        substitutes: new ni.Array(ni.uint16, "glyphCount"),
      },
    });
  cs.versions[7].extension.type = cs;
  var fs = new ni.VersionedStruct(ni.uint32, {
      header: {
        scriptList: new ni.Pointer(ni.uint16, sa),
        featureList: new ni.Pointer(ni.uint16, ca),
        lookupList: new ni.Pointer(ni.uint16, new ha(cs)),
      },
      65536: {},
      65537: { featureVariations: new ni.Pointer(ni.uint32, Na) },
    }),
    hs = new ni.Array(ni.uint16, ni.uint16),
    ds = new ni.Struct({
      shrinkageEnableGSUB: new ni.Pointer(ni.uint16, hs),
      shrinkageDisableGSUB: new ni.Pointer(ni.uint16, hs),
      shrinkageEnableGPOS: new ni.Pointer(ni.uint16, hs),
      shrinkageDisableGPOS: new ni.Pointer(ni.uint16, hs),
      shrinkageJstfMax: new ni.Pointer(ni.uint16, new ha(is)),
      extensionEnableGSUB: new ni.Pointer(ni.uint16, hs),
      extensionDisableGSUB: new ni.Pointer(ni.uint16, hs),
      extensionEnableGPOS: new ni.Pointer(ni.uint16, hs),
      extensionDisableGPOS: new ni.Pointer(ni.uint16, hs),
      extensionJstfMax: new ni.Pointer(ni.uint16, new ha(is)),
    }),
    ps = new ni.Array(new ni.Pointer(ni.uint16, ds), ni.uint16),
    gs = new ni.Struct({
      tag: new ni.String(4),
      jstfLangSys: new ni.Pointer(ni.uint16, ps),
    }),
    vs = new ni.Struct({
      extenderGlyphs: new ni.Pointer(
        ni.uint16,
        new ni.Array(ni.uint16, ni.uint16)
      ),
      defaultLangSys: new ni.Pointer(ni.uint16, ps),
      langSysCount: ni.uint16,
      langSysRecords: new ni.Array(gs, "langSysCount"),
    }),
    ys = new ni.Struct({
      tag: new ni.String(4),
      script: new ni.Pointer(ni.uint16, vs, { type: "parent" }),
    }),
    bs = new ni.Struct({
      version: ni.uint32,
      scriptCount: ni.uint16,
      scriptList: new ni.Array(ys, "scriptCount"),
    }),
    ms = (function () {
      function e(e) {
        this._size = e;
      }
      var t = e.prototype;
      return (
        (t.decode = function (e, t) {
          switch (this.size(0, t)) {
            case 1:
              return e.readUInt8();
            case 2:
              return e.readUInt16BE();
            case 3:
              return e.readUInt24BE();
            case 4:
              return e.readUInt32BE();
          }
        }),
        (t.size = function (e, t) {
          return _n(this._size, null, t);
        }),
        e
      );
    })(),
    ws = new ni.Struct({
      entry: new ms(function (e) {
        return 1 + ((48 & e.parent.entryFormat) >> 4);
      }),
      outerIndex: function (e) {
        return e.entry >> (1 + (15 & e.parent.entryFormat));
      },
      innerIndex: function (e) {
        return e.entry & ((1 << (1 + (15 & e.parent.entryFormat))) - 1);
      },
    }),
    xs = new ni.Struct({
      entryFormat: ni.uint16,
      mapCount: ni.uint16,
      mapData: new ni.Array(ws, "mapCount"),
    }),
    Ss = new ni.Struct({
      majorVersion: ni.uint16,
      minorVersion: ni.uint16,
      itemVariationStore: new ni.Pointer(ni.uint32, za),
      advanceWidthMapping: new ni.Pointer(ni.uint32, xs),
      LSBMapping: new ni.Pointer(ni.uint32, xs),
      RSBMapping: new ni.Pointer(ni.uint32, xs),
    }),
    ks = new ni.Struct({
      format: ni.uint32,
      length: ni.uint32,
      offset: ni.uint32,
    }),
    As = new ni.Struct({
      reserved: new ni.Reserved(ni.uint16, 2),
      cbSignature: ni.uint32,
      signature: new ni.Buffer("cbSignature"),
    }),
    Cs = new ni.Struct({
      ulVersion: ni.uint32,
      usNumSigs: ni.uint16,
      usFlag: ni.uint16,
      signatures: new ni.Array(ks, "usNumSigs"),
      signatureBlocks: new ni.Array(As, "usNumSigs"),
    }),
    Ps = new ni.Struct({
      rangeMaxPPEM: ni.uint16,
      rangeGaspBehavior: new ni.Bitfield(ni.uint16, [
        "grayscale",
        "gridfit",
        "symmetricSmoothing",
        "symmetricGridfit",
      ]),
    }),
    Is = new ni.Struct({
      version: ni.uint16,
      numRanges: ni.uint16,
      gaspRanges: new ni.Array(Ps, "numRanges"),
    }),
    Os = new ni.Struct({
      pixelSize: ni.uint8,
      maximumWidth: ni.uint8,
      widths: new ni.Array(ni.uint8, function (e) {
        return e.parent.parent.maxp.numGlyphs;
      }),
    }),
    Es = new ni.Struct({
      version: ni.uint16,
      numRecords: ni.int16,
      sizeDeviceRecord: ni.int32,
      records: new ni.Array(Os, "numRecords"),
    }),
    Bs = new ni.Struct({ left: ni.uint16, right: ni.uint16, value: ni.int16 }),
    Ts = new ni.Struct({
      firstGlyph: ni.uint16,
      nGlyphs: ni.uint16,
      offsets: new ni.Array(ni.uint16, "nGlyphs"),
      max: function (e) {
        return e.offsets.length && Math.max.apply(Math, e.offsets);
      },
    }),
    Ls = new ni.Struct({
      off: function (e) {
        return e._startOffset - e.parent.parent._startOffset;
      },
      len: function (e) {
        return (
          ((e.parent.leftTable.max - e.off) / e.parent.rowWidth + 1) *
          (e.parent.rowWidth / 2)
        );
      },
      values: new ni.LazyArray(ni.int16, "len"),
    }),
    zs = new ni.VersionedStruct("format", {
      0: {
        nPairs: ni.uint16,
        searchRange: ni.uint16,
        entrySelector: ni.uint16,
        rangeShift: ni.uint16,
        pairs: new ni.Array(Bs, "nPairs"),
      },
      2: {
        rowWidth: ni.uint16,
        leftTable: new ni.Pointer(ni.uint16, Ts, { type: "parent" }),
        rightTable: new ni.Pointer(ni.uint16, Ts, { type: "parent" }),
        array: new ni.Pointer(ni.uint16, Ls, { type: "parent" }),
      },
      3: {
        glyphCount: ni.uint16,
        kernValueCount: ni.uint8,
        leftClassCount: ni.uint8,
        rightClassCount: ni.uint8,
        flags: ni.uint8,
        kernValue: new ni.Array(ni.int16, "kernValueCount"),
        leftClass: new ni.Array(ni.uint8, "glyphCount"),
        rightClass: new ni.Array(ni.uint8, "glyphCount"),
        kernIndex: new ni.Array(ni.uint8, function (e) {
          return e.leftClassCount * e.rightClassCount;
        }),
      },
    }),
    Ds = new ni.VersionedStruct("version", {
      0: {
        subVersion: ni.uint16,
        length: ni.uint16,
        format: ni.uint8,
        coverage: new ni.Bitfield(ni.uint8, [
          "horizontal",
          "minimum",
          "crossStream",
          "override",
        ]),
        subtable: zs,
        padding: new ni.Reserved(ni.uint8, function (e) {
          return e.length - e._currentOffset;
        }),
      },
      1: {
        length: ni.uint32,
        coverage: new ni.Bitfield(ni.uint8, [
          null,
          null,
          null,
          null,
          null,
          "variation",
          "crossStream",
          "vertical",
        ]),
        format: ni.uint8,
        tupleIndex: ni.uint16,
        subtable: zs,
        padding: new ni.Reserved(ni.uint8, function (e) {
          return e.length - e._currentOffset;
        }),
      },
    }),
    Rs = new ni.VersionedStruct(ni.uint16, {
      0: { nTables: ni.uint16, tables: new ni.Array(Ds, "nTables") },
      1: {
        reserved: new ni.Reserved(ni.uint16),
        nTables: ni.uint32,
        tables: new ni.Array(Ds, "nTables"),
      },
    }),
    Ms = new ni.Struct({
      version: ni.uint16,
      numGlyphs: ni.uint16,
      yPels: new ni.Array(ni.uint8, "numGlyphs"),
    }),
    Fs = new ni.Struct({
      version: ni.uint16,
      fontNumber: ni.uint32,
      pitch: ni.uint16,
      xHeight: ni.uint16,
      style: ni.uint16,
      typeFamily: ni.uint16,
      capHeight: ni.uint16,
      symbolSet: ni.uint16,
      typeface: new ni.String(16),
      characterComplement: new ni.String(8),
      fileName: new ni.String(6),
      strokeWeight: new ni.String(1),
      widthType: new ni.String(1),
      serifStyle: ni.uint8,
      reserved: new ni.Reserved(ni.uint8),
    }),
    Us = new ni.Struct({
      bCharSet: ni.uint8,
      xRatio: ni.uint8,
      yStartRatio: ni.uint8,
      yEndRatio: ni.uint8,
    }),
    Ns = new ni.Struct({
      yPelHeight: ni.uint16,
      yMax: ni.int16,
      yMin: ni.int16,
    }),
    js = new ni.Struct({
      recs: ni.uint16,
      startsz: ni.uint8,
      endsz: ni.uint8,
      entries: new ni.Array(Ns, "recs"),
    }),
    Gs = new ni.Struct({
      version: ni.uint16,
      numRecs: ni.uint16,
      numRatios: ni.uint16,
      ratioRanges: new ni.Array(Us, "numRatios"),
      offsets: new ni.Array(ni.uint16, "numRatios"),
      groups: new ni.Array(js, "numRecs"),
    }),
    Vs = new ni.Struct({
      version: ni.uint16,
      ascent: ni.int16,
      descent: ni.int16,
      lineGap: ni.int16,
      advanceHeightMax: ni.int16,
      minTopSideBearing: ni.int16,
      minBottomSideBearing: ni.int16,
      yMaxExtent: ni.int16,
      caretSlopeRise: ni.int16,
      caretSlopeRun: ni.int16,
      caretOffset: ni.int16,
      reserved: new ni.Reserved(ni.int16, 4),
      metricDataFormat: ni.int16,
      numberOfMetrics: ni.uint16,
    }),
    _s = new ni.Struct({ advance: ni.uint16, bearing: ni.int16 }),
    qs = new ni.Struct({
      metrics: new ni.LazyArray(_s, function (e) {
        return e.parent.vhea.numberOfMetrics;
      }),
      bearings: new ni.LazyArray(ni.int16, function (e) {
        return e.parent.maxp.numGlyphs - e.parent.vhea.numberOfMetrics;
      }),
    }),
    Ws = new ni.Fixed(16, "BE", 14),
    Hs = new ni.Struct({ fromCoord: Ws, toCoord: Ws }),
    Ys = new ni.Struct({
      pairCount: ni.uint16,
      correspondence: new ni.Array(Hs, "pairCount"),
    }),
    Zs = new ni.Struct({
      version: ni.fixed32,
      axisCount: ni.uint32,
      segment: new ni.Array(Ys, "axisCount"),
    }),
    Xs = (function () {
      function e(e, t, r) {
        (this.type = e),
          (this.stream = t),
          (this.parent = r),
          (this.base = this.stream.pos),
          (this._items = []);
      }
      var t = e.prototype;
      return (
        (t.getItem = function (e) {
          if (null == this._items[e]) {
            var t = this.stream.pos;
            (this.stream.pos =
              this.base + this.type.size(null, this.parent) * e),
              (this._items[e] = this.type.decode(this.stream, this.parent)),
              (this.stream.pos = t);
          }
          return this._items[e];
        }),
        (t.inspect = function () {
          return "[UnboundedArray " + this.type.constructor.name + "]";
        }),
        e
      );
    })(),
    Ks = (function (e) {
      function t(t) {
        return e.call(this, t, 0) || this;
      }
      return (
        li(t, e),
        (t.prototype.decode = function (e, t) {
          return new Xs(this.type, e, t);
        }),
        t
      );
    })(ni.Array),
    Js = function (e) {
      void 0 === e && (e = ni.uint16),
        (e = new ((function () {
          function e(e) {
            this.type = e;
          }
          var t = e.prototype;
          return (
            (t.decode = function (e, t) {
              return (t = t.parent.parent), this.type.decode(e, t);
            }),
            (t.size = function (e, t) {
              return (t = t.parent.parent), this.type.size(e, t);
            }),
            (t.encode = function (e, t, r) {
              return (r = r.parent.parent), this.type.encode(e, t, r);
            }),
            e
          );
        })())(e));
      var t = new ni.Struct({
          unitSize: ni.uint16,
          nUnits: ni.uint16,
          searchRange: ni.uint16,
          entrySelector: ni.uint16,
          rangeShift: ni.uint16,
        }),
        r = new ni.Struct({
          lastGlyph: ni.uint16,
          firstGlyph: ni.uint16,
          value: e,
        }),
        n = new ni.Struct({
          lastGlyph: ni.uint16,
          firstGlyph: ni.uint16,
          values: new ni.Pointer(
            ni.uint16,
            new ni.Array(e, function (e) {
              return e.lastGlyph - e.firstGlyph + 1;
            }),
            { type: "parent" }
          ),
        }),
        i = new ni.Struct({ glyph: ni.uint16, value: e });
      return new ni.VersionedStruct(ni.uint16, {
        0: { values: new Ks(e) },
        2: {
          binarySearchHeader: t,
          segments: new ni.Array(r, function (e) {
            return e.binarySearchHeader.nUnits;
          }),
        },
        4: {
          binarySearchHeader: t,
          segments: new ni.Array(n, function (e) {
            return e.binarySearchHeader.nUnits;
          }),
        },
        6: {
          binarySearchHeader: t,
          segments: new ni.Array(i, function (e) {
            return e.binarySearchHeader.nUnits;
          }),
        },
        8: {
          firstGlyph: ni.uint16,
          count: ni.uint16,
          values: new ni.Array(e, "count"),
        },
      });
    };
  function Qs(e, t) {
    void 0 === e && (e = {}), void 0 === t && (t = ni.uint16);
    var r = Object.assign({ newState: ni.uint16, flags: ni.uint16 }, e),
      n = new ni.Struct(r),
      i = new Ks(
        new ni.Array(ni.uint16, function (e) {
          return e.nClasses;
        })
      );
    return new ni.Struct({
      nClasses: ni.uint32,
      classTable: new ni.Pointer(ni.uint32, new Js(t)),
      stateArray: new ni.Pointer(ni.uint32, i),
      entryTable: new ni.Pointer(ni.uint32, new Ks(n)),
    });
  }
  var $s = new ni.VersionedStruct("format", {
      0: { deltas: new ni.Array(ni.int16, 32) },
      1: { deltas: new ni.Array(ni.int16, 32), mappingData: new Js(ni.uint16) },
      2: {
        standardGlyph: ni.uint16,
        controlPoints: new ni.Array(ni.uint16, 32),
      },
      3: {
        standardGlyph: ni.uint16,
        controlPoints: new ni.Array(ni.uint16, 32),
        mappingData: new Js(ni.uint16),
      },
    }),
    eu = new ni.Struct({
      version: ni.fixed32,
      format: ni.uint16,
      defaultBaseline: ni.uint16,
      subtable: $s,
    }),
    tu = new ni.Struct({
      setting: ni.uint16,
      nameIndex: ni.int16,
      name: function (e) {
        return e.parent.parent.parent.name.records.fontFeatures[e.nameIndex];
      },
    }),
    ru = new ni.Struct({
      feature: ni.uint16,
      nSettings: ni.uint16,
      settingTable: new ni.Pointer(ni.uint32, new ni.Array(tu, "nSettings"), {
        type: "parent",
      }),
      featureFlags: new ni.Bitfield(ni.uint8, [
        null,
        null,
        null,
        null,
        null,
        null,
        "hasDefault",
        "exclusive",
      ]),
      defaultSetting: ni.uint8,
      nameIndex: ni.int16,
      name: function (e) {
        return e.parent.parent.name.records.fontFeatures[e.nameIndex];
      },
    }),
    nu = new ni.Struct({
      version: ni.fixed32,
      featureNameCount: ni.uint16,
      reserved1: new ni.Reserved(ni.uint16),
      reserved2: new ni.Reserved(ni.uint32),
      featureNames: new ni.Array(ru, "featureNameCount"),
    }),
    iu = new ni.Struct({
      axisTag: new ni.String(4),
      minValue: ni.fixed32,
      defaultValue: ni.fixed32,
      maxValue: ni.fixed32,
      flags: ni.uint16,
      nameID: ni.uint16,
      name: function (e) {
        return e.parent.parent.name.records.fontFeatures[e.nameID];
      },
    }),
    au = new ni.Struct({
      nameID: ni.uint16,
      name: function (e) {
        return e.parent.parent.name.records.fontFeatures[e.nameID];
      },
      flags: ni.uint16,
      coord: new ni.Array(ni.fixed32, function (e) {
        return e.parent.axisCount;
      }),
      postscriptNameID: new ni.Optional(ni.uint16, function (e) {
        return e.parent.instanceSize - e._currentOffset > 0;
      }),
    }),
    ou = new ni.Struct({
      version: ni.fixed32,
      offsetToData: ni.uint16,
      countSizePairs: ni.uint16,
      axisCount: ni.uint16,
      axisSize: ni.uint16,
      instanceCount: ni.uint16,
      instanceSize: ni.uint16,
      axis: new ni.Array(iu, "axisCount"),
      instance: new ni.Array(au, "instanceCount"),
    }),
    su = new ni.Fixed(16, "BE", 14),
    uu = (function () {
      function e() {}
      return (
        (e.decode = function (e, t) {
          return t.flags ? e.readUInt32BE() : 2 * e.readUInt16BE();
        }),
        e
      );
    })(),
    lu = new ni.Struct({
      version: ni.uint16,
      reserved: new ni.Reserved(ni.uint16),
      axisCount: ni.uint16,
      globalCoordCount: ni.uint16,
      globalCoords: new ni.Pointer(
        ni.uint32,
        new ni.Array(new ni.Array(su, "axisCount"), "globalCoordCount")
      ),
      glyphCount: ni.uint16,
      flags: ni.uint16,
      offsetToData: ni.uint32,
      offsets: new ni.Array(
        new ni.Pointer(uu, "void", {
          relativeTo: "offsetToData",
          allowNull: !1,
        }),
        function (e) {
          return e.glyphCount + 1;
        }
      ),
    }),
    cu = new ni.Struct({
      length: ni.uint16,
      coverage: ni.uint16,
      subFeatureFlags: ni.uint32,
      stateTable: new (function (e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = ni.uint16);
        var r = new ni.Struct({
            version: function () {
              return 8;
            },
            firstGlyph: ni.uint16,
            values: new ni.Array(ni.uint8, ni.uint16),
          }),
          n = Object.assign(
            {
              newStateOffset: ni.uint16,
              newState: function (e) {
                return (
                  (e.newStateOffset -
                    (e.parent.stateArray.base - e.parent._startOffset)) /
                  e.parent.nClasses
                );
              },
              flags: ni.uint16,
            },
            e
          ),
          i = new ni.Struct(n),
          a = new Ks(
            new ni.Array(ni.uint8, function (e) {
              return e.nClasses;
            })
          );
        return new ni.Struct({
          nClasses: ni.uint16,
          classTable: new ni.Pointer(ni.uint16, r),
          stateArray: new ni.Pointer(ni.uint16, a),
          entryTable: new ni.Pointer(ni.uint16, new Ks(i)),
        });
      })(),
    }),
    fu = new ni.Struct({
      justClass: ni.uint32,
      beforeGrowLimit: ni.fixed32,
      beforeShrinkLimit: ni.fixed32,
      afterGrowLimit: ni.fixed32,
      afterShrinkLimit: ni.fixed32,
      growFlags: ni.uint16,
      shrinkFlags: ni.uint16,
    }),
    hu = new ni.Array(fu, ni.uint32),
    du = new ni.VersionedStruct("actionType", {
      0: {
        lowerLimit: ni.fixed32,
        upperLimit: ni.fixed32,
        order: ni.uint16,
        glyphs: new ni.Array(ni.uint16, ni.uint16),
      },
      1: { addGlyph: ni.uint16 },
      2: {
        substThreshold: ni.fixed32,
        addGlyph: ni.uint16,
        substGlyph: ni.uint16,
      },
      3: {},
      4: {
        variationAxis: ni.uint32,
        minimumLimit: ni.fixed32,
        noStretchValue: ni.fixed32,
        maximumLimit: ni.fixed32,
      },
      5: { flags: ni.uint16, glyph: ni.uint16 },
    }),
    pu = new ni.Struct({
      actionClass: ni.uint16,
      actionType: ni.uint16,
      actionLength: ni.uint32,
      actionData: du,
      padding: new ni.Reserved(ni.uint8, function (e) {
        return e.actionLength - e._currentOffset;
      }),
    }),
    gu = new ni.Array(pu, ni.uint32),
    vu = new ni.Struct({ lookupTable: new Js(new ni.Pointer(ni.uint16, gu)) }),
    yu = new ni.Struct({
      classTable: new ni.Pointer(ni.uint16, cu, { type: "parent" }),
      wdcOffset: ni.uint16,
      postCompensationTable: new ni.Pointer(ni.uint16, vu, { type: "parent" }),
      widthDeltaClusters: new Js(
        new ni.Pointer(ni.uint16, hu, {
          type: "parent",
          relativeTo: "wdcOffset",
        })
      ),
    }),
    bu = new ni.Struct({
      version: ni.uint32,
      format: ni.uint16,
      horizontal: new ni.Pointer(ni.uint16, yu),
      vertical: new ni.Pointer(ni.uint16, yu),
    }),
    mu = { action: ni.uint16 },
    wu = { markIndex: ni.uint16, currentIndex: ni.uint16 },
    xu = { currentInsertIndex: ni.uint16, markedInsertIndex: ni.uint16 },
    Su = new ni.Struct({ items: new Ks(new ni.Pointer(ni.uint32, new Js())) }),
    ku = new ni.VersionedStruct("type", {
      0: { stateTable: new Qs() },
      1: {
        stateTable: new Qs(wu),
        substitutionTable: new ni.Pointer(ni.uint32, Su),
      },
      2: {
        stateTable: new Qs(mu),
        ligatureActions: new ni.Pointer(ni.uint32, new Ks(ni.uint32)),
        components: new ni.Pointer(ni.uint32, new Ks(ni.uint16)),
        ligatureList: new ni.Pointer(ni.uint32, new Ks(ni.uint16)),
      },
      4: { lookupTable: new Js() },
      5: {
        stateTable: new Qs(xu),
        insertionActions: new ni.Pointer(ni.uint32, new Ks(ni.uint16)),
      },
    }),
    Au = new ni.Struct({
      length: ni.uint32,
      coverage: ni.uint24,
      type: ni.uint8,
      subFeatureFlags: ni.uint32,
      table: ku,
      padding: new ni.Reserved(ni.uint8, function (e) {
        return e.length - e._currentOffset;
      }),
    }),
    Cu = new ni.Struct({
      featureType: ni.uint16,
      featureSetting: ni.uint16,
      enableFlags: ni.uint32,
      disableFlags: ni.uint32,
    }),
    Pu = new ni.Struct({
      defaultFlags: ni.uint32,
      chainLength: ni.uint32,
      nFeatureEntries: ni.uint32,
      nSubtables: ni.uint32,
      features: new ni.Array(Cu, "nFeatureEntries"),
      subtables: new ni.Array(Au, "nSubtables"),
    }),
    Iu = new ni.Struct({
      version: ni.uint16,
      unused: new ni.Reserved(ni.uint16),
      nChains: ni.uint32,
      chains: new ni.Array(Pu, "nChains"),
    }),
    Ou = new ni.Struct({
      left: ni.int16,
      top: ni.int16,
      right: ni.int16,
      bottom: ni.int16,
    }),
    Eu = new ni.Struct({
      version: ni.fixed32,
      format: ni.uint16,
      lookupTable: new Js(Ou),
    }),
    Bu = {};
  (Bu.cmap = xi),
    (Bu.head = Si),
    (Bu.hhea = ki),
    (Bu.hmtx = Ci),
    (Bu.maxp = Pi),
    (Bu.name = zi),
    (Bu["OS/2"] = Ri),
    (Bu.post = Fi),
    (Bu.fpgm = Ni),
    (Bu.loca = ji),
    (Bu.prep = Gi),
    (Bu["cvt "] = Ui),
    (Bu.glyf = Vi),
    (Bu["CFF "] = no),
    (Bu.CFF2 = no),
    (Bu.VORG = ao),
    (Bu.EBLC = yo),
    (Bu.CBLC = Bu.EBLC),
    (Bu.sbix = mo),
    (Bu.COLR = So),
    (Bu.CPAL = Ao),
    (Bu.BASE = Ro),
    (Bu.GDEF = Vo),
    (Bu.GPOS = as),
    (Bu.GSUB = fs),
    (Bu.JSTF = bs),
    (Bu.HVAR = Ss),
    (Bu.DSIG = Cs),
    (Bu.gasp = Is),
    (Bu.hdmx = Es),
    (Bu.kern = Rs),
    (Bu.LTSH = Ms),
    (Bu.PCLT = Fs),
    (Bu.VDMX = Gs),
    (Bu.vhea = Vs),
    (Bu.vmtx = qs),
    (Bu.avar = Zs),
    (Bu.bsln = eu),
    (Bu.feat = nu),
    (Bu.fvar = ou),
    (Bu.gvar = lu),
    (Bu.just = bu),
    (Bu.morx = Iu),
    (Bu.opbd = Eu);
  var Tu,
    Lu = new ni.Struct({
      tag: new ni.String(4),
      checkSum: ni.uint32,
      offset: new ni.Pointer(ni.uint32, "void", { type: "global" }),
      length: ni.uint32,
    }),
    zu = new ni.Struct({
      tag: new ni.String(4),
      numTables: ni.uint16,
      searchRange: ni.uint16,
      entrySelector: ni.uint16,
      rangeShift: ni.uint16,
      tables: new ni.Array(Lu, "numTables"),
    });
  function Du(e, t) {
    for (var r = 0, n = e.length - 1; r <= n; ) {
      var i = (r + n) >> 1,
        a = t(e[i]);
      if (a < 0) n = i - 1;
      else {
        if (!(a > 0)) return i;
        r = i + 1;
      }
    }
    return -1;
  }
  function Ru(e, t) {
    for (var r = []; e < t; ) r.push(e++);
    return r;
  }
  (zu.process = function () {
    var e = {},
      t = this.tables,
      r = Array.isArray(t),
      n = 0;
    for (t = r ? t : t[Symbol.iterator](); ; ) {
      var i;
      if (r) {
        if (n >= t.length) break;
        i = t[n++];
      } else {
        if ((n = t.next()).done) break;
        i = n.value;
      }
      var a = i;
      e[a.tag] = a;
    }
    this.tables = e;
  }),
    (zu.preEncode = function (e) {
      var t = [];
      for (var r in this.tables) {
        var n = this.tables[r];
        n &&
          t.push({
            tag: r,
            checkSum: 0,
            offset: new ni.VoidPointer(Bu[r], n),
            length: Bu[r].size(n),
          });
      }
      (this.tag = "true"), (this.numTables = t.length), (this.tables = t);
      var i = Math.floor(Math.log(this.numTables) / Math.LN2),
        a = Math.pow(2, i);
      (this.searchRange = 16 * a),
        (this.entrySelector = Math.log(a) / Math.LN2),
        (this.rangeShift = 16 * this.numTables - this.searchRange);
    });
  var Mu =
      (ci(
        (Tu = (function () {
          function e(e) {
            if (
              ((this.encoding = null),
              (this.cmap = this.findSubtable(e, [
                [3, 10],
                [0, 6],
                [0, 4],
                [3, 1],
                [0, 3],
                [0, 2],
                [0, 1],
                [0, 0],
              ])),
              !this.cmap && Un)
            ) {
              var t = e.tables,
                r = Array.isArray(t),
                n = 0;
              for (t = r ? t : t[Symbol.iterator](); ; ) {
                var i;
                if (r) {
                  if (n >= t.length) break;
                  i = t[n++];
                } else {
                  if ((n = t.next()).done) break;
                  i = n.value;
                }
                var a = i,
                  o = Ii(a.platformID, a.encodingID, a.table.language - 1);
                Un.encodingExists(o) &&
                  ((this.cmap = a.table), (this.encoding = o));
              }
            }
            if (!this.cmap)
              throw new Error("Could not find a supported cmap table");
            (this.uvs = this.findSubtable(e, [[0, 5]])),
              this.uvs && 14 !== this.uvs.version && (this.uvs = null);
          }
          var t = e.prototype;
          return (
            (t.findSubtable = function (e, t) {
              var r = t,
                n = Array.isArray(r),
                i = 0;
              for (r = n ? r : r[Symbol.iterator](); ; ) {
                var a;
                if (n) {
                  if (i >= r.length) break;
                  a = r[i++];
                } else {
                  if ((i = r.next()).done) break;
                  a = i.value;
                }
                var o = a,
                  s = o[0],
                  u = o[1],
                  l = e.tables,
                  c = Array.isArray(l),
                  f = 0;
                for (l = c ? l : l[Symbol.iterator](); ; ) {
                  var h;
                  if (c) {
                    if (f >= l.length) break;
                    h = l[f++];
                  } else {
                    if ((f = l.next()).done) break;
                    h = f.value;
                  }
                  var d = h;
                  if (d.platformID === s && d.encodingID === u) return d.table;
                }
              }
              return null;
            }),
            (t.lookup = function (e, t) {
              if (this.encoding) {
                var r = Un.encode(String.fromCodePoint(e), this.encoding);
                e = 0;
                for (var n = 0; n < r.length; n++) e = (e << 8) | r[n];
              } else if (t) {
                var i = this.getVariationSelector(e, t);
                if (i) return i;
              }
              var a = this.cmap;
              switch (a.version) {
                case 0:
                  return a.codeMap.get(e) || 0;
                case 4:
                  for (var o = 0, s = a.segCount - 1; o <= s; ) {
                    var u = (o + s) >> 1;
                    if (e < a.startCode.get(u)) s = u - 1;
                    else {
                      if (!(e > a.endCode.get(u))) {
                        var l = a.idRangeOffset.get(u),
                          c = void 0;
                        if (0 === l) c = e + a.idDelta.get(u);
                        else {
                          var f =
                            l / 2 + (e - a.startCode.get(u)) - (a.segCount - u);
                          0 !== (c = a.glyphIndexArray.get(f) || 0) &&
                            (c += a.idDelta.get(u));
                        }
                        return 65535 & c;
                      }
                      o = u + 1;
                    }
                  }
                  return 0;
                case 8:
                  throw new Error("TODO: cmap format 8");
                case 6:
                case 10:
                  return a.glyphIndices.get(e - a.firstCode) || 0;
                case 12:
                case 13:
                  for (var h = 0, d = a.nGroups - 1; h <= d; ) {
                    var p = (h + d) >> 1,
                      g = a.groups.get(p);
                    if (e < g.startCharCode) d = p - 1;
                    else {
                      if (!(e > g.endCharCode))
                        return 12 === a.version
                          ? g.glyphID + (e - g.startCharCode)
                          : g.glyphID;
                      h = p + 1;
                    }
                  }
                  return 0;
                case 14:
                  throw new Error("TODO: cmap format 14");
                default:
                  throw new Error("Unknown cmap format " + a.version);
              }
            }),
            (t.getVariationSelector = function (e, t) {
              if (!this.uvs) return 0;
              var r = this.uvs.varSelectors.toArray(),
                n = Du(r, function (e) {
                  return t - e.varSelector;
                }),
                i = r[n];
              return (
                -1 !== n &&
                  i.defaultUVS &&
                  (n = Du(i.defaultUVS, function (t) {
                    return e < t.startUnicodeValue
                      ? -1
                      : e > t.startUnicodeValue + t.additionalCount
                      ? 1
                      : 0;
                  })),
                -1 !== n &&
                i.nonDefaultUVS &&
                -1 !==
                  (n = Du(i.nonDefaultUVS, function (t) {
                    return e - t.unicodeValue;
                  }))
                  ? i.nonDefaultUVS[n].glyphID
                  : 0
              );
            }),
            (t.getCharacterSet = function () {
              var e = this.cmap;
              switch (e.version) {
                case 0:
                  return Ru(0, e.codeMap.length);
                case 4:
                  for (
                    var t = [], r = e.endCode.toArray(), n = 0;
                    n < r.length;
                    n++
                  ) {
                    var i = r[n] + 1,
                      a = e.startCode.get(n);
                    t.push.apply(t, Ru(a, i));
                  }
                  return t;
                case 8:
                  throw new Error("TODO: cmap format 8");
                case 6:
                case 10:
                  return Ru(e.firstCode, e.firstCode + e.glyphIndices.length);
                case 12:
                case 13:
                  var o = [],
                    s = e.groups.toArray(),
                    u = Array.isArray(s),
                    l = 0;
                  for (s = u ? s : s[Symbol.iterator](); ; ) {
                    var c;
                    if (u) {
                      if (l >= s.length) break;
                      c = s[l++];
                    } else {
                      if ((l = s.next()).done) break;
                      c = l.value;
                    }
                    var f = c;
                    o.push.apply(o, Ru(f.startCharCode, f.endCharCode + 1));
                  }
                  return o;
                case 14:
                  throw new Error("TODO: cmap format 14");
                default:
                  throw new Error("Unknown cmap format " + e.version);
              }
            }),
            (t.codePointsForGlyph = function (e) {
              var t = this.cmap;
              switch (t.version) {
                case 0:
                  for (var r = [], n = 0; n < 256; n++)
                    t.codeMap.get(n) === e && r.push(n);
                  return r;
                case 4:
                  for (var i = [], a = 0; a < t.segCount; a++)
                    for (
                      var o = t.endCode.get(a),
                        s = t.startCode.get(a),
                        u = t.idRangeOffset.get(a),
                        l = t.idDelta.get(a),
                        c = s;
                      c <= o;
                      c++
                    ) {
                      var f = 0;
                      if (0 === u) f = c + l;
                      else {
                        var h = u / 2 + (c - s) - (t.segCount - a);
                        0 !== (f = t.glyphIndexArray.get(h) || 0) && (f += l);
                      }
                      f === e && i.push(c);
                    }
                  return i;
                case 12:
                  var d = [],
                    p = t.groups.toArray(),
                    g = Array.isArray(p),
                    v = 0;
                  for (p = g ? p : p[Symbol.iterator](); ; ) {
                    var y;
                    if (g) {
                      if (v >= p.length) break;
                      y = p[v++];
                    } else {
                      if ((v = p.next()).done) break;
                      y = v.value;
                    }
                    var b = y;
                    e >= b.glyphID &&
                      e <= b.glyphID + (b.endCharCode - b.startCharCode) &&
                      d.push(b.startCharCode + (e - b.glyphID));
                  }
                  return d;
                case 13:
                  var m = [],
                    w = t.groups.toArray(),
                    x = Array.isArray(w),
                    S = 0;
                  for (w = x ? w : w[Symbol.iterator](); ; ) {
                    var k;
                    if (x) {
                      if (S >= w.length) break;
                      k = w[S++];
                    } else {
                      if ((S = w.next()).done) break;
                      k = S.value;
                    }
                    var A = k;
                    e === A.glyphID &&
                      m.push.apply(m, Ru(A.startCharCode, A.endCharCode + 1));
                  }
                  return m;
                default:
                  throw new Error("Unknown cmap format " + t.version);
              }
            }),
            e
          );
        })()).prototype,
        "getCharacterSet",
        [fi],
        Object.getOwnPropertyDescriptor(Tu.prototype, "getCharacterSet"),
        Tu.prototype
      ),
      ci(
        Tu.prototype,
        "codePointsForGlyph",
        [fi],
        Object.getOwnPropertyDescriptor(Tu.prototype, "codePointsForGlyph"),
        Tu.prototype
      ),
      Tu),
    Fu = (function () {
      function e(e) {
        this.kern = e.kern;
      }
      var t = e.prototype;
      return (
        (t.process = function (e, t) {
          for (var r = 0; r < e.length - 1; r++) {
            var n = e[r].id,
              i = e[r + 1].id;
            t[r].xAdvance += this.getKerning(n, i);
          }
        }),
        (t.getKerning = function (e, t) {
          var r = 0,
            n = this.kern.tables,
            i = Array.isArray(n),
            a = 0;
          for (n = i ? n : n[Symbol.iterator](); ; ) {
            var o;
            if (i) {
              if (a >= n.length) break;
              o = n[a++];
            } else {
              if ((a = n.next()).done) break;
              o = a.value;
            }
            var s = o;
            if (!s.coverage.crossStream) {
              switch (s.version) {
                case 0:
                  if (!s.coverage.horizontal) continue;
                  break;
                case 1:
                  if (s.coverage.vertical || s.coverage.variation) continue;
                  break;
                default:
                  throw new Error(
                    "Unsupported kerning table version " + s.version
                  );
              }
              var u = 0,
                l = s.subtable;
              switch (s.format) {
                case 0:
                  var c = Du(l.pairs, function (r) {
                    return e - r.left || t - r.right;
                  });
                  c >= 0 && (u = l.pairs[c].value);
                  break;
                case 2:
                  var f = 0,
                    h = 0;
                  (f =
                    e >= l.leftTable.firstGlyph &&
                    e < l.leftTable.firstGlyph + l.leftTable.nGlyphs
                      ? l.leftTable.offsets[e - l.leftTable.firstGlyph]
                      : l.array.off),
                    t >= l.rightTable.firstGlyph &&
                      t < l.rightTable.firstGlyph + l.rightTable.nGlyphs &&
                      (h = l.rightTable.offsets[t - l.rightTable.firstGlyph]);
                  var d = (f + h - l.array.off) / 2;
                  u = l.array.values.get(d);
                  break;
                case 3:
                  if (e >= l.glyphCount || t >= l.glyphCount) return 0;
                  u =
                    l.kernValue[
                      l.kernIndex[
                        l.leftClass[e] * l.rightClassCount + l.rightClass[t]
                      ]
                    ];
                  break;
                default:
                  throw new Error(
                    "Unsupported kerning sub-table format " + s.format
                  );
              }
              s.coverage.override ? (r = u) : (r += u);
            }
          }
          return r;
        }),
        e
      );
    })(),
    Uu = 0,
    Nu = -3;
  function ju() {
    (this.table = new Uint16Array(16)), (this.trans = new Uint16Array(288));
  }
  function Gu(e, t) {
    (this.source = e),
      (this.sourceIndex = 0),
      (this.tag = 0),
      (this.bitcount = 0),
      (this.dest = t),
      (this.destLen = 0),
      (this.ltree = new ju()),
      (this.dtree = new ju());
  }
  var Vu = new ju(),
    _u = new ju(),
    qu = new Uint8Array(30),
    Wu = new Uint16Array(30),
    Hu = new Uint8Array(30),
    Yu = new Uint16Array(30),
    Zu = new Uint8Array([
      16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
    ]),
    Xu = new ju(),
    Ku = new Uint8Array(320);
  function Ju(e, t, r, n) {
    var i, a;
    for (i = 0; i < r; ++i) e[i] = 0;
    for (i = 0; i < 30 - r; ++i) e[i + r] = (i / r) | 0;
    for (a = n, i = 0; i < 30; ++i) (t[i] = a), (a += 1 << e[i]);
  }
  var Qu = new Uint16Array(16);
  function $u(e, t, r, n) {
    var i, a;
    for (i = 0; i < 16; ++i) e.table[i] = 0;
    for (i = 0; i < n; ++i) e.table[t[r + i]]++;
    for (e.table[0] = 0, a = 0, i = 0; i < 16; ++i)
      (Qu[i] = a), (a += e.table[i]);
    for (i = 0; i < n; ++i) t[r + i] && (e.trans[Qu[t[r + i]]++] = i);
  }
  function el(e) {
    e.bitcount-- || ((e.tag = e.source[e.sourceIndex++]), (e.bitcount = 7));
    var t = 1 & e.tag;
    return (e.tag >>>= 1), t;
  }
  function tl(e, t, r) {
    if (!t) return r;
    for (; e.bitcount < 24; )
      (e.tag |= e.source[e.sourceIndex++] << e.bitcount), (e.bitcount += 8);
    var n = e.tag & (65535 >>> (16 - t));
    return (e.tag >>>= t), (e.bitcount -= t), n + r;
  }
  function rl(e, t) {
    for (; e.bitcount < 24; )
      (e.tag |= e.source[e.sourceIndex++] << e.bitcount), (e.bitcount += 8);
    var r = 0,
      n = 0,
      i = 0,
      a = e.tag;
    do {
      (n = 2 * n + (1 & a)),
        (a >>>= 1),
        ++i,
        (r += t.table[i]),
        (n -= t.table[i]);
    } while (n >= 0);
    return (e.tag = a), (e.bitcount -= i), t.trans[r + n];
  }
  function nl(e, t, r) {
    var n, i, a, o, s, u;
    for (
      n = tl(e, 5, 257), i = tl(e, 5, 1), a = tl(e, 4, 4), o = 0;
      o < 19;
      ++o
    )
      Ku[o] = 0;
    for (o = 0; o < a; ++o) {
      var l = tl(e, 3, 0);
      Ku[Zu[o]] = l;
    }
    for ($u(Xu, Ku, 0, 19), s = 0; s < n + i; ) {
      var c = rl(e, Xu);
      switch (c) {
        case 16:
          var f = Ku[s - 1];
          for (u = tl(e, 2, 3); u; --u) Ku[s++] = f;
          break;
        case 17:
          for (u = tl(e, 3, 3); u; --u) Ku[s++] = 0;
          break;
        case 18:
          for (u = tl(e, 7, 11); u; --u) Ku[s++] = 0;
          break;
        default:
          Ku[s++] = c;
      }
    }
    $u(t, Ku, 0, n), $u(r, Ku, n, i);
  }
  function il(e, t, r) {
    for (;;) {
      var n,
        i,
        a,
        o,
        s = rl(e, t);
      if (256 === s) return Uu;
      if (s < 256) e.dest[e.destLen++] = s;
      else
        for (
          n = tl(e, qu[(s -= 257)], Wu[s]),
            i = rl(e, r),
            o = a = e.destLen - tl(e, Hu[i], Yu[i]);
          o < a + n;
          ++o
        )
          e.dest[e.destLen++] = e.dest[o];
    }
  }
  function al(e) {
    for (var t, r; e.bitcount > 8; ) e.sourceIndex--, (e.bitcount -= 8);
    if (
      (t =
        256 * (t = e.source[e.sourceIndex + 1]) + e.source[e.sourceIndex]) !==
      (65535 &
        ~(256 * e.source[e.sourceIndex + 3] + e.source[e.sourceIndex + 2]))
    )
      return Nu;
    for (e.sourceIndex += 4, r = t; r; --r)
      e.dest[e.destLen++] = e.source[e.sourceIndex++];
    return (e.bitcount = 0), Uu;
  }
  !(function (e, t) {
    var r;
    for (r = 0; r < 7; ++r) e.table[r] = 0;
    for (
      e.table[7] = 24, e.table[8] = 152, e.table[9] = 112, r = 0;
      r < 24;
      ++r
    )
      e.trans[r] = 256 + r;
    for (r = 0; r < 144; ++r) e.trans[24 + r] = r;
    for (r = 0; r < 8; ++r) e.trans[168 + r] = 280 + r;
    for (r = 0; r < 112; ++r) e.trans[176 + r] = 144 + r;
    for (r = 0; r < 5; ++r) t.table[r] = 0;
    for (t.table[5] = 32, r = 0; r < 32; ++r) t.trans[r] = r;
  })(Vu, _u),
    Ju(qu, Wu, 4, 3),
    Ju(Hu, Yu, 2, 1),
    (qu[28] = 0),
    (Wu[28] = 258);
  var ol,
    sl = function (e, t) {
      var r,
        n,
        i = new Gu(e, t);
      do {
        switch (((r = el(i)), tl(i, 2, 0))) {
          case 0:
            n = al(i);
            break;
          case 1:
            n = il(i, Vu, _u);
            break;
          case 2:
            nl(i, i.ltree, i.dtree), (n = il(i, i.ltree, i.dtree));
            break;
          default:
            n = Nu;
        }
        if (n !== Uu) throw new Error("Data error");
      } while (!r);
      return i.destLen < i.dest.length
        ? "function" == typeof i.dest.slice
          ? i.dest.slice(0, i.destLen)
          : i.dest.subarray(0, i.destLen)
        : i.dest;
    };
  ol = sl;
  var ul = (function () {
      function e(e) {
        var t, r, n;
        (t =
          "function" == typeof e.readUInt32BE &&
          "function" == typeof e.slice) || e instanceof Uint8Array
          ? (t
              ? ((this.highStart = e.readUInt32BE(0)),
                (this.errorValue = e.readUInt32BE(4)),
                (r = e.readUInt32BE(8)),
                (e = e.slice(12)))
              : ((n = new DataView(e.buffer)),
                (this.highStart = n.getUint32(0)),
                (this.errorValue = n.getUint32(4)),
                (r = n.getUint32(8)),
                (e = e.subarray(12))),
            (e = ol(e, new Uint8Array(r))),
            (e = ol(e, new Uint8Array(r))),
            (this.data = new Uint32Array(e.buffer)))
          : ((this.data = e.data),
            (this.highStart = e.highStart),
            (this.errorValue = e.errorValue));
      }
      return (
        11,
        5,
        6,
        32,
        64,
        63,
        2,
        32,
        31,
        2048,
        32,
        2080,
        2080,
        32,
        2112,
        4,
        (e.prototype.get = function (e) {
          var t;
          return e < 0 || e > 1114111
            ? this.errorValue
            : e < 55296 || (e > 56319 && e <= 65535)
            ? ((t = (this.data[e >> 5] << 2) + (31 & e)), this.data[t])
            : e <= 65535
            ? ((t = (this.data[2048 + ((e - 55296) >> 5)] << 2) + (31 & e)),
              this.data[t])
            : e < this.highStart
            ? ((t = this.data[2080 + (e >> 11)]),
              (t = ((t = this.data[t + ((e >> 5) & 63)]) << 2) + (31 & e)),
              this.data[t])
            : this.data[this.data.length - 4];
        }),
        e
      );
    })(),
    ll = re(function (e, t) {
      var r =
        "undefined" != typeof Uint8Array &&
        "undefined" != typeof Uint16Array &&
        "undefined" != typeof Int32Array;
      function n(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      (t.assign = function (e) {
        for (var t = Array.prototype.slice.call(arguments, 1); t.length; ) {
          var r = t.shift();
          if (r) {
            if ("object" != typeof r)
              throw new TypeError(r + "must be non-object");
            for (var i in r) n(r, i) && (e[i] = r[i]);
          }
        }
        return e;
      }),
        (t.shrinkBuf = function (e, t) {
          return e.length === t
            ? e
            : e.subarray
            ? e.subarray(0, t)
            : ((e.length = t), e);
        });
      var i = {
          arraySet: function (e, t, r, n, i) {
            if (t.subarray && e.subarray) e.set(t.subarray(r, r + n), i);
            else for (var a = 0; a < n; a++) e[i + a] = t[r + a];
          },
          flattenChunks: function (e) {
            var t, r, n, i, a, o;
            for (n = 0, t = 0, r = e.length; t < r; t++) n += e[t].length;
            for (o = new Uint8Array(n), i = 0, t = 0, r = e.length; t < r; t++)
              (a = e[t]), o.set(a, i), (i += a.length);
            return o;
          },
        },
        a = {
          arraySet: function (e, t, r, n, i) {
            for (var a = 0; a < n; a++) e[i + a] = t[r + a];
          },
          flattenChunks: function (e) {
            return [].concat.apply([], e);
          },
        };
      (t.setTyped = function (e) {
        e
          ? ((t.Buf8 = Uint8Array),
            (t.Buf16 = Uint16Array),
            (t.Buf32 = Int32Array),
            t.assign(t, i))
          : ((t.Buf8 = Array),
            (t.Buf16 = Array),
            (t.Buf32 = Array),
            t.assign(t, a));
      }),
        t.setTyped(r);
    }),
    cl = (ll.assign, ll.shrinkBuf, ll.setTyped, ll.Buf8, ll.Buf16, ll.Buf32, 4),
    fl = 0,
    hl = 1,
    dl = 2;
  function pl(e) {
    for (var t = e.length; --t >= 0; ) e[t] = 0;
  }
  var gl = 0,
    vl = 1,
    yl = 2,
    bl = 29,
    ml = 256,
    wl = ml + 1 + bl,
    xl = 30,
    Sl = 19,
    kl = 2 * wl + 1,
    Al = 15,
    Cl = 16,
    Pl = 7,
    Il = 256,
    Ol = 16,
    El = 17,
    Bl = 18,
    Tl = [
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
      5, 5, 5, 0,
    ],
    Ll = [
      0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
      11, 11, 12, 12, 13, 13,
    ],
    zl = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
    Dl = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
    Rl = new Array(2 * (wl + 2));
  pl(Rl);
  var Ml = new Array(2 * xl);
  pl(Ml);
  var Fl = new Array(512);
  pl(Fl);
  var Ul = new Array(256);
  pl(Ul);
  var Nl = new Array(bl);
  pl(Nl);
  var jl,
    Gl,
    Vl,
    _l = new Array(xl);
  function ql(e, t, r, n, i) {
    (this.static_tree = e),
      (this.extra_bits = t),
      (this.extra_base = r),
      (this.elems = n),
      (this.max_length = i),
      (this.has_stree = e && e.length);
  }
  function Wl(e, t) {
    (this.dyn_tree = e), (this.max_code = 0), (this.stat_desc = t);
  }
  function Hl(e) {
    return e < 256 ? Fl[e] : Fl[256 + (e >>> 7)];
  }
  function Yl(e, t) {
    (e.pending_buf[e.pending++] = 255 & t),
      (e.pending_buf[e.pending++] = (t >>> 8) & 255);
  }
  function Zl(e, t, r) {
    e.bi_valid > Cl - r
      ? ((e.bi_buf |= (t << e.bi_valid) & 65535),
        Yl(e, e.bi_buf),
        (e.bi_buf = t >> (Cl - e.bi_valid)),
        (e.bi_valid += r - Cl))
      : ((e.bi_buf |= (t << e.bi_valid) & 65535), (e.bi_valid += r));
  }
  function Xl(e, t, r) {
    Zl(e, r[2 * t], r[2 * t + 1]);
  }
  function Kl(e, t) {
    var r = 0;
    do {
      (r |= 1 & e), (e >>>= 1), (r <<= 1);
    } while (--t > 0);
    return r >>> 1;
  }
  function Jl(e, t, r) {
    var n,
      i,
      a = new Array(Al + 1),
      o = 0;
    for (n = 1; n <= Al; n++) a[n] = o = (o + r[n - 1]) << 1;
    for (i = 0; i <= t; i++) {
      var s = e[2 * i + 1];
      0 !== s && (e[2 * i] = Kl(a[s]++, s));
    }
  }
  function Ql(e) {
    var t;
    for (t = 0; t < wl; t++) e.dyn_ltree[2 * t] = 0;
    for (t = 0; t < xl; t++) e.dyn_dtree[2 * t] = 0;
    for (t = 0; t < Sl; t++) e.bl_tree[2 * t] = 0;
    (e.dyn_ltree[2 * Il] = 1),
      (e.opt_len = e.static_len = 0),
      (e.last_lit = e.matches = 0);
  }
  function $l(e) {
    e.bi_valid > 8
      ? Yl(e, e.bi_buf)
      : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf),
      (e.bi_buf = 0),
      (e.bi_valid = 0);
  }
  function ec(e, t, r, n) {
    var i = 2 * t,
      a = 2 * r;
    return e[i] < e[a] || (e[i] === e[a] && n[t] <= n[r]);
  }
  function tc(e, t, r) {
    for (
      var n = e.heap[r], i = r << 1;
      i <= e.heap_len &&
      (i < e.heap_len && ec(t, e.heap[i + 1], e.heap[i], e.depth) && i++,
      !ec(t, n, e.heap[i], e.depth));

    )
      (e.heap[r] = e.heap[i]), (r = i), (i <<= 1);
    e.heap[r] = n;
  }
  function rc(e, t, r) {
    var n,
      i,
      a,
      o,
      s = 0;
    if (0 !== e.last_lit)
      do {
        (n =
          (e.pending_buf[e.d_buf + 2 * s] << 8) |
          e.pending_buf[e.d_buf + 2 * s + 1]),
          (i = e.pending_buf[e.l_buf + s]),
          s++,
          0 === n
            ? Xl(e, i, t)
            : (Xl(e, (a = Ul[i]) + ml + 1, t),
              0 !== (o = Tl[a]) && Zl(e, (i -= Nl[a]), o),
              Xl(e, (a = Hl(--n)), r),
              0 !== (o = Ll[a]) && Zl(e, (n -= _l[a]), o));
      } while (s < e.last_lit);
    Xl(e, Il, t);
  }
  function nc(e, t) {
    var r,
      n,
      i,
      a = t.dyn_tree,
      o = t.stat_desc.static_tree,
      s = t.stat_desc.has_stree,
      u = t.stat_desc.elems,
      l = -1;
    for (e.heap_len = 0, e.heap_max = kl, r = 0; r < u; r++)
      0 !== a[2 * r]
        ? ((e.heap[++e.heap_len] = l = r), (e.depth[r] = 0))
        : (a[2 * r + 1] = 0);
    for (; e.heap_len < 2; )
      (a[2 * (i = e.heap[++e.heap_len] = l < 2 ? ++l : 0)] = 1),
        (e.depth[i] = 0),
        e.opt_len--,
        s && (e.static_len -= o[2 * i + 1]);
    for (t.max_code = l, r = e.heap_len >> 1; r >= 1; r--) tc(e, a, r);
    i = u;
    do {
      (r = e.heap[1]),
        (e.heap[1] = e.heap[e.heap_len--]),
        tc(e, a, 1),
        (n = e.heap[1]),
        (e.heap[--e.heap_max] = r),
        (e.heap[--e.heap_max] = n),
        (a[2 * i] = a[2 * r] + a[2 * n]),
        (e.depth[i] = (e.depth[r] >= e.depth[n] ? e.depth[r] : e.depth[n]) + 1),
        (a[2 * r + 1] = a[2 * n + 1] = i),
        (e.heap[1] = i++),
        tc(e, a, 1);
    } while (e.heap_len >= 2);
    (e.heap[--e.heap_max] = e.heap[1]),
      (function (e, t) {
        var r,
          n,
          i,
          a,
          o,
          s,
          u = t.dyn_tree,
          l = t.max_code,
          c = t.stat_desc.static_tree,
          f = t.stat_desc.has_stree,
          h = t.stat_desc.extra_bits,
          d = t.stat_desc.extra_base,
          p = t.stat_desc.max_length,
          g = 0;
        for (a = 0; a <= Al; a++) e.bl_count[a] = 0;
        for (u[2 * e.heap[e.heap_max] + 1] = 0, r = e.heap_max + 1; r < kl; r++)
          (a = u[2 * u[2 * (n = e.heap[r]) + 1] + 1] + 1) > p && ((a = p), g++),
            (u[2 * n + 1] = a),
            n > l ||
              (e.bl_count[a]++,
              (o = 0),
              n >= d && (o = h[n - d]),
              (s = u[2 * n]),
              (e.opt_len += s * (a + o)),
              f && (e.static_len += s * (c[2 * n + 1] + o)));
        if (0 !== g) {
          do {
            for (a = p - 1; 0 === e.bl_count[a]; ) a--;
            e.bl_count[a]--,
              (e.bl_count[a + 1] += 2),
              e.bl_count[p]--,
              (g -= 2);
          } while (g > 0);
          for (a = p; 0 !== a; a--)
            for (n = e.bl_count[a]; 0 !== n; )
              (i = e.heap[--r]) > l ||
                (u[2 * i + 1] !== a &&
                  ((e.opt_len += (a - u[2 * i + 1]) * u[2 * i]),
                  (u[2 * i + 1] = a)),
                n--);
        }
      })(e, t),
      Jl(a, l, e.bl_count);
  }
  function ic(e, t, r) {
    var n,
      i,
      a = -1,
      o = t[1],
      s = 0,
      u = 7,
      l = 4;
    for (
      0 === o && ((u = 138), (l = 3)), t[2 * (r + 1) + 1] = 65535, n = 0;
      n <= r;
      n++
    )
      (i = o),
        (o = t[2 * (n + 1) + 1]),
        (++s < u && i === o) ||
          (s < l
            ? (e.bl_tree[2 * i] += s)
            : 0 !== i
            ? (i !== a && e.bl_tree[2 * i]++, e.bl_tree[2 * Ol]++)
            : s <= 10
            ? e.bl_tree[2 * El]++
            : e.bl_tree[2 * Bl]++,
          (s = 0),
          (a = i),
          0 === o
            ? ((u = 138), (l = 3))
            : i === o
            ? ((u = 6), (l = 3))
            : ((u = 7), (l = 4)));
  }
  function ac(e, t, r) {
    var n,
      i,
      a = -1,
      o = t[1],
      s = 0,
      u = 7,
      l = 4;
    for (0 === o && ((u = 138), (l = 3)), n = 0; n <= r; n++)
      if (((i = o), (o = t[2 * (n + 1) + 1]), !(++s < u && i === o))) {
        if (s < l)
          do {
            Xl(e, i, e.bl_tree);
          } while (0 != --s);
        else
          0 !== i
            ? (i !== a && (Xl(e, i, e.bl_tree), s--),
              Xl(e, Ol, e.bl_tree),
              Zl(e, s - 3, 2))
            : s <= 10
            ? (Xl(e, El, e.bl_tree), Zl(e, s - 3, 3))
            : (Xl(e, Bl, e.bl_tree), Zl(e, s - 11, 7));
        (s = 0),
          (a = i),
          0 === o
            ? ((u = 138), (l = 3))
            : i === o
            ? ((u = 6), (l = 3))
            : ((u = 7), (l = 4));
      }
  }
  pl(_l);
  var oc = !1;
  function sc(e, t, r, n) {
    Zl(e, (gl << 1) + (n ? 1 : 0), 3),
      (function (e, t, r, n) {
        $l(e),
          n && (Yl(e, r), Yl(e, ~r)),
          ll.arraySet(e.pending_buf, e.window, t, r, e.pending),
          (e.pending += r);
      })(e, t, r, !0);
  }
  var uc = {
    _tr_init: function (e) {
      oc ||
        ((function () {
          var e,
            t,
            r,
            n,
            i,
            a = new Array(Al + 1);
          for (r = 0, n = 0; n < bl - 1; n++)
            for (Nl[n] = r, e = 0; e < 1 << Tl[n]; e++) Ul[r++] = n;
          for (Ul[r - 1] = n, i = 0, n = 0; n < 16; n++)
            for (_l[n] = i, e = 0; e < 1 << Ll[n]; e++) Fl[i++] = n;
          for (i >>= 7; n < xl; n++)
            for (_l[n] = i << 7, e = 0; e < 1 << (Ll[n] - 7); e++)
              Fl[256 + i++] = n;
          for (t = 0; t <= Al; t++) a[t] = 0;
          for (e = 0; e <= 143; ) (Rl[2 * e + 1] = 8), e++, a[8]++;
          for (; e <= 255; ) (Rl[2 * e + 1] = 9), e++, a[9]++;
          for (; e <= 279; ) (Rl[2 * e + 1] = 7), e++, a[7]++;
          for (; e <= 287; ) (Rl[2 * e + 1] = 8), e++, a[8]++;
          for (Jl(Rl, wl + 1, a), e = 0; e < xl; e++)
            (Ml[2 * e + 1] = 5), (Ml[2 * e] = Kl(e, 5));
          (jl = new ql(Rl, Tl, ml + 1, wl, Al)),
            (Gl = new ql(Ml, Ll, 0, xl, Al)),
            (Vl = new ql(new Array(0), zl, 0, Sl, Pl));
        })(),
        (oc = !0)),
        (e.l_desc = new Wl(e.dyn_ltree, jl)),
        (e.d_desc = new Wl(e.dyn_dtree, Gl)),
        (e.bl_desc = new Wl(e.bl_tree, Vl)),
        (e.bi_buf = 0),
        (e.bi_valid = 0),
        Ql(e);
    },
    _tr_stored_block: sc,
    _tr_flush_block: function (e, t, r, n) {
      var i,
        a,
        o = 0;
      e.level > 0
        ? (e.strm.data_type === dl &&
            (e.strm.data_type = (function (e) {
              var t,
                r = 4093624447;
              for (t = 0; t <= 31; t++, r >>>= 1)
                if (1 & r && 0 !== e.dyn_ltree[2 * t]) return fl;
              if (
                0 !== e.dyn_ltree[18] ||
                0 !== e.dyn_ltree[20] ||
                0 !== e.dyn_ltree[26]
              )
                return hl;
              for (t = 32; t < ml; t++) if (0 !== e.dyn_ltree[2 * t]) return hl;
              return fl;
            })(e)),
          nc(e, e.l_desc),
          nc(e, e.d_desc),
          (o = (function (e) {
            var t;
            for (
              ic(e, e.dyn_ltree, e.l_desc.max_code),
                ic(e, e.dyn_dtree, e.d_desc.max_code),
                nc(e, e.bl_desc),
                t = Sl - 1;
              t >= 3 && 0 === e.bl_tree[2 * Dl[t] + 1];
              t--
            );
            return (e.opt_len += 3 * (t + 1) + 5 + 5 + 4), t;
          })(e)),
          (i = (e.opt_len + 3 + 7) >>> 3),
          (a = (e.static_len + 3 + 7) >>> 3) <= i && (i = a))
        : (i = a = r + 5),
        r + 4 <= i && -1 !== t
          ? sc(e, t, r, n)
          : e.strategy === cl || a === i
          ? (Zl(e, (vl << 1) + (n ? 1 : 0), 3), rc(e, Rl, Ml))
          : (Zl(e, (yl << 1) + (n ? 1 : 0), 3),
            (function (e, t, r, n) {
              var i;
              for (
                Zl(e, t - 257, 5), Zl(e, r - 1, 5), Zl(e, n - 4, 4), i = 0;
                i < n;
                i++
              )
                Zl(e, e.bl_tree[2 * Dl[i] + 1], 3);
              ac(e, e.dyn_ltree, t - 1), ac(e, e.dyn_dtree, r - 1);
            })(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, o + 1),
            rc(e, e.dyn_ltree, e.dyn_dtree)),
        Ql(e),
        n && $l(e);
    },
    _tr_tally: function (e, t, r) {
      return (
        (e.pending_buf[e.d_buf + 2 * e.last_lit] = (t >>> 8) & 255),
        (e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t),
        (e.pending_buf[e.l_buf + e.last_lit] = 255 & r),
        e.last_lit++,
        0 === t
          ? e.dyn_ltree[2 * r]++
          : (e.matches++,
            t--,
            e.dyn_ltree[2 * (Ul[r] + ml + 1)]++,
            e.dyn_dtree[2 * Hl(t)]++),
        e.last_lit === e.lit_bufsize - 1
      );
    },
    _tr_align: function (e) {
      Zl(e, vl << 1, 3),
        Xl(e, Il, Rl),
        (function (e) {
          16 === e.bi_valid
            ? (Yl(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0))
            : e.bi_valid >= 8 &&
              ((e.pending_buf[e.pending++] = 255 & e.bi_buf),
              (e.bi_buf >>= 8),
              (e.bi_valid -= 8));
        })(e);
    },
  };
  var lc = function (e, t, r, n) {
    for (
      var i = (65535 & e) | 0, a = ((e >>> 16) & 65535) | 0, o = 0;
      0 !== r;

    ) {
      r -= o = r > 2e3 ? 2e3 : r;
      do {
        a = (a + (i = (i + t[n++]) | 0)) | 0;
      } while (--o);
      (i %= 65521), (a %= 65521);
    }
    return i | (a << 16) | 0;
  };
  var cc = (function () {
    for (var e, t = [], r = 0; r < 256; r++) {
      e = r;
      for (var n = 0; n < 8; n++) e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1;
      t[r] = e;
    }
    return t;
  })();
  var fc,
    hc = function (e, t, r, n) {
      var i = cc,
        a = n + r;
      e ^= -1;
      for (var o = n; o < a; o++) e = (e >>> 8) ^ i[255 & (e ^ t[o])];
      return -1 ^ e;
    },
    dc = {
      2: "need dictionary",
      1: "stream end",
      0: "",
      "-1": "file error",
      "-2": "stream error",
      "-3": "data error",
      "-4": "insufficient memory",
      "-5": "buffer error",
      "-6": "incompatible version",
    },
    pc = 0,
    gc = 1,
    vc = 3,
    yc = 4,
    bc = 5,
    mc = 0,
    wc = 1,
    xc = -2,
    Sc = -3,
    kc = -5,
    Ac = -1,
    Cc = 1,
    Pc = 2,
    Ic = 3,
    Oc = 4,
    Ec = 0,
    Bc = 2,
    Tc = 8,
    Lc = 9,
    zc = 15,
    Dc = 8,
    Rc = 286,
    Mc = 30,
    Fc = 19,
    Uc = 2 * Rc + 1,
    Nc = 15,
    jc = 3,
    Gc = 258,
    Vc = Gc + jc + 1,
    _c = 32,
    qc = 42,
    Wc = 69,
    Hc = 73,
    Yc = 91,
    Zc = 103,
    Xc = 113,
    Kc = 666,
    Jc = 1,
    Qc = 2,
    $c = 3,
    ef = 4,
    tf = 3;
  function rf(e, t) {
    return (e.msg = dc[t]), t;
  }
  function nf(e) {
    return (e << 1) - (e > 4 ? 9 : 0);
  }
  function af(e) {
    for (var t = e.length; --t >= 0; ) e[t] = 0;
  }
  function of(e) {
    var t = e.state,
      r = t.pending;
    r > e.avail_out && (r = e.avail_out),
      0 !== r &&
        (ll.arraySet(e.output, t.pending_buf, t.pending_out, r, e.next_out),
        (e.next_out += r),
        (t.pending_out += r),
        (e.total_out += r),
        (e.avail_out -= r),
        (t.pending -= r),
        0 === t.pending && (t.pending_out = 0));
  }
  function sf(e, t) {
    uc._tr_flush_block(
      e,
      e.block_start >= 0 ? e.block_start : -1,
      e.strstart - e.block_start,
      t
    ),
      (e.block_start = e.strstart),
      of(e.strm);
  }
  function uf(e, t) {
    e.pending_buf[e.pending++] = t;
  }
  function lf(e, t) {
    (e.pending_buf[e.pending++] = (t >>> 8) & 255),
      (e.pending_buf[e.pending++] = 255 & t);
  }
  function cf(e, t) {
    var r,
      n,
      i = e.max_chain_length,
      a = e.strstart,
      o = e.prev_length,
      s = e.nice_match,
      u = e.strstart > e.w_size - Vc ? e.strstart - (e.w_size - Vc) : 0,
      l = e.window,
      c = e.w_mask,
      f = e.prev,
      h = e.strstart + Gc,
      d = l[a + o - 1],
      p = l[a + o];
    e.prev_length >= e.good_match && (i >>= 2),
      s > e.lookahead && (s = e.lookahead);
    do {
      if (
        l[(r = t) + o] === p &&
        l[r + o - 1] === d &&
        l[r] === l[a] &&
        l[++r] === l[a + 1]
      ) {
        (a += 2), r++;
        do {} while (
          l[++a] === l[++r] &&
          l[++a] === l[++r] &&
          l[++a] === l[++r] &&
          l[++a] === l[++r] &&
          l[++a] === l[++r] &&
          l[++a] === l[++r] &&
          l[++a] === l[++r] &&
          l[++a] === l[++r] &&
          a < h
        );
        if (((n = Gc - (h - a)), (a = h - Gc), n > o)) {
          if (((e.match_start = t), (o = n), n >= s)) break;
          (d = l[a + o - 1]), (p = l[a + o]);
        }
      }
    } while ((t = f[t & c]) > u && 0 != --i);
    return o <= e.lookahead ? o : e.lookahead;
  }
  function ff(e) {
    var t,
      r,
      n,
      i,
      a,
      o,
      s,
      u,
      l,
      c,
      f = e.w_size;
    do {
      if (
        ((i = e.window_size - e.lookahead - e.strstart),
        e.strstart >= f + (f - Vc))
      ) {
        ll.arraySet(e.window, e.window, f, f, 0),
          (e.match_start -= f),
          (e.strstart -= f),
          (e.block_start -= f),
          (t = r = e.hash_size);
        do {
          (n = e.head[--t]), (e.head[t] = n >= f ? n - f : 0);
        } while (--r);
        t = r = f;
        do {
          (n = e.prev[--t]), (e.prev[t] = n >= f ? n - f : 0);
        } while (--r);
        i += f;
      }
      if (0 === e.strm.avail_in) break;
      if (
        ((o = e.strm),
        (s = e.window),
        (u = e.strstart + e.lookahead),
        (l = i),
        (c = void 0),
        (c = o.avail_in) > l && (c = l),
        (r =
          0 === c
            ? 0
            : ((o.avail_in -= c),
              ll.arraySet(s, o.input, o.next_in, c, u),
              1 === o.state.wrap
                ? (o.adler = lc(o.adler, s, c, u))
                : 2 === o.state.wrap && (o.adler = hc(o.adler, s, c, u)),
              (o.next_in += c),
              (o.total_in += c),
              c)),
        (e.lookahead += r),
        e.lookahead + e.insert >= jc)
      )
        for (
          a = e.strstart - e.insert,
            e.ins_h = e.window[a],
            e.ins_h =
              ((e.ins_h << e.hash_shift) ^ e.window[a + 1]) & e.hash_mask;
          e.insert &&
          ((e.ins_h =
            ((e.ins_h << e.hash_shift) ^ e.window[a + jc - 1]) & e.hash_mask),
          (e.prev[a & e.w_mask] = e.head[e.ins_h]),
          (e.head[e.ins_h] = a),
          a++,
          e.insert--,
          !(e.lookahead + e.insert < jc));

        );
    } while (e.lookahead < Vc && 0 !== e.strm.avail_in);
  }
  function hf(e, t) {
    for (var r, n; ; ) {
      if (e.lookahead < Vc) {
        if ((ff(e), e.lookahead < Vc && t === pc)) return Jc;
        if (0 === e.lookahead) break;
      }
      if (
        ((r = 0),
        e.lookahead >= jc &&
          ((e.ins_h =
            ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + jc - 1]) &
            e.hash_mask),
          (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
          (e.head[e.ins_h] = e.strstart)),
        0 !== r &&
          e.strstart - r <= e.w_size - Vc &&
          (e.match_length = cf(e, r)),
        e.match_length >= jc)
      )
        if (
          ((n = uc._tr_tally(
            e,
            e.strstart - e.match_start,
            e.match_length - jc
          )),
          (e.lookahead -= e.match_length),
          e.match_length <= e.max_lazy_match && e.lookahead >= jc)
        ) {
          e.match_length--;
          do {
            e.strstart++,
              (e.ins_h =
                ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + jc - 1]) &
                e.hash_mask),
              (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
              (e.head[e.ins_h] = e.strstart);
          } while (0 != --e.match_length);
          e.strstart++;
        } else
          (e.strstart += e.match_length),
            (e.match_length = 0),
            (e.ins_h = e.window[e.strstart]),
            (e.ins_h =
              ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 1]) &
              e.hash_mask);
      else
        (n = uc._tr_tally(e, 0, e.window[e.strstart])),
          e.lookahead--,
          e.strstart++;
      if (n && (sf(e, !1), 0 === e.strm.avail_out)) return Jc;
    }
    return (
      (e.insert = e.strstart < jc - 1 ? e.strstart : jc - 1),
      t === yc
        ? (sf(e, !0), 0 === e.strm.avail_out ? $c : ef)
        : e.last_lit && (sf(e, !1), 0 === e.strm.avail_out)
        ? Jc
        : Qc
    );
  }
  function df(e, t) {
    for (var r, n, i; ; ) {
      if (e.lookahead < Vc) {
        if ((ff(e), e.lookahead < Vc && t === pc)) return Jc;
        if (0 === e.lookahead) break;
      }
      if (
        ((r = 0),
        e.lookahead >= jc &&
          ((e.ins_h =
            ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + jc - 1]) &
            e.hash_mask),
          (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
          (e.head[e.ins_h] = e.strstart)),
        (e.prev_length = e.match_length),
        (e.prev_match = e.match_start),
        (e.match_length = jc - 1),
        0 !== r &&
          e.prev_length < e.max_lazy_match &&
          e.strstart - r <= e.w_size - Vc &&
          ((e.match_length = cf(e, r)),
          e.match_length <= 5 &&
            (e.strategy === Cc ||
              (e.match_length === jc && e.strstart - e.match_start > 4096)) &&
            (e.match_length = jc - 1)),
        e.prev_length >= jc && e.match_length <= e.prev_length)
      ) {
        (i = e.strstart + e.lookahead - jc),
          (n = uc._tr_tally(
            e,
            e.strstart - 1 - e.prev_match,
            e.prev_length - jc
          )),
          (e.lookahead -= e.prev_length - 1),
          (e.prev_length -= 2);
        do {
          ++e.strstart <= i &&
            ((e.ins_h =
              ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + jc - 1]) &
              e.hash_mask),
            (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
            (e.head[e.ins_h] = e.strstart));
        } while (0 != --e.prev_length);
        if (
          ((e.match_available = 0),
          (e.match_length = jc - 1),
          e.strstart++,
          n && (sf(e, !1), 0 === e.strm.avail_out))
        )
          return Jc;
      } else if (e.match_available) {
        if (
          ((n = uc._tr_tally(e, 0, e.window[e.strstart - 1])) && sf(e, !1),
          e.strstart++,
          e.lookahead--,
          0 === e.strm.avail_out)
        )
          return Jc;
      } else (e.match_available = 1), e.strstart++, e.lookahead--;
    }
    return (
      e.match_available &&
        ((n = uc._tr_tally(e, 0, e.window[e.strstart - 1])),
        (e.match_available = 0)),
      (e.insert = e.strstart < jc - 1 ? e.strstart : jc - 1),
      t === yc
        ? (sf(e, !0), 0 === e.strm.avail_out ? $c : ef)
        : e.last_lit && (sf(e, !1), 0 === e.strm.avail_out)
        ? Jc
        : Qc
    );
  }
  function pf(e, t, r, n, i) {
    (this.good_length = e),
      (this.max_lazy = t),
      (this.nice_length = r),
      (this.max_chain = n),
      (this.func = i);
  }
  function gf() {
    (this.strm = null),
      (this.status = 0),
      (this.pending_buf = null),
      (this.pending_buf_size = 0),
      (this.pending_out = 0),
      (this.pending = 0),
      (this.wrap = 0),
      (this.gzhead = null),
      (this.gzindex = 0),
      (this.method = Tc),
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
      (this.dyn_ltree = new ll.Buf16(2 * Uc)),
      (this.dyn_dtree = new ll.Buf16(2 * (2 * Mc + 1))),
      (this.bl_tree = new ll.Buf16(2 * (2 * Fc + 1))),
      af(this.dyn_ltree),
      af(this.dyn_dtree),
      af(this.bl_tree),
      (this.l_desc = null),
      (this.d_desc = null),
      (this.bl_desc = null),
      (this.bl_count = new ll.Buf16(Nc + 1)),
      (this.heap = new ll.Buf16(2 * Rc + 1)),
      af(this.heap),
      (this.heap_len = 0),
      (this.heap_max = 0),
      (this.depth = new ll.Buf16(2 * Rc + 1)),
      af(this.depth),
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
  function vf(e) {
    var t;
    return e && e.state
      ? ((e.total_in = e.total_out = 0),
        (e.data_type = Bc),
        ((t = e.state).pending = 0),
        (t.pending_out = 0),
        t.wrap < 0 && (t.wrap = -t.wrap),
        (t.status = t.wrap ? qc : Xc),
        (e.adler = 2 === t.wrap ? 0 : 1),
        (t.last_flush = pc),
        uc._tr_init(t),
        mc)
      : rf(e, xc);
  }
  function yf(e) {
    var t,
      r = vf(e);
    return (
      r === mc &&
        (((t = e.state).window_size = 2 * t.w_size),
        af(t.head),
        (t.max_lazy_match = fc[t.level].max_lazy),
        (t.good_match = fc[t.level].good_length),
        (t.nice_match = fc[t.level].nice_length),
        (t.max_chain_length = fc[t.level].max_chain),
        (t.strstart = 0),
        (t.block_start = 0),
        (t.lookahead = 0),
        (t.insert = 0),
        (t.match_length = t.prev_length = jc - 1),
        (t.match_available = 0),
        (t.ins_h = 0)),
      r
    );
  }
  function bf(e, t, r, n, i, a) {
    if (!e) return xc;
    var o = 1;
    if (
      (t === Ac && (t = 6),
      n < 0 ? ((o = 0), (n = -n)) : n > 15 && ((o = 2), (n -= 16)),
      i < 1 ||
        i > Lc ||
        r !== Tc ||
        n < 8 ||
        n > 15 ||
        t < 0 ||
        t > 9 ||
        a < 0 ||
        a > Oc)
    )
      return rf(e, xc);
    8 === n && (n = 9);
    var s = new gf();
    return (
      (e.state = s),
      (s.strm = e),
      (s.wrap = o),
      (s.gzhead = null),
      (s.w_bits = n),
      (s.w_size = 1 << s.w_bits),
      (s.w_mask = s.w_size - 1),
      (s.hash_bits = i + 7),
      (s.hash_size = 1 << s.hash_bits),
      (s.hash_mask = s.hash_size - 1),
      (s.hash_shift = ~~((s.hash_bits + jc - 1) / jc)),
      (s.window = new ll.Buf8(2 * s.w_size)),
      (s.head = new ll.Buf16(s.hash_size)),
      (s.prev = new ll.Buf16(s.w_size)),
      (s.lit_bufsize = 1 << (i + 6)),
      (s.pending_buf_size = 4 * s.lit_bufsize),
      (s.pending_buf = new ll.Buf8(s.pending_buf_size)),
      (s.d_buf = 1 * s.lit_bufsize),
      (s.l_buf = 3 * s.lit_bufsize),
      (s.level = t),
      (s.strategy = a),
      (s.method = r),
      yf(e)
    );
  }
  fc = [
    new pf(0, 0, 0, 0, function (e, t) {
      var r = 65535;
      for (r > e.pending_buf_size - 5 && (r = e.pending_buf_size - 5); ; ) {
        if (e.lookahead <= 1) {
          if ((ff(e), 0 === e.lookahead && t === pc)) return Jc;
          if (0 === e.lookahead) break;
        }
        (e.strstart += e.lookahead), (e.lookahead = 0);
        var n = e.block_start + r;
        if (
          (0 === e.strstart || e.strstart >= n) &&
          ((e.lookahead = e.strstart - n),
          (e.strstart = n),
          sf(e, !1),
          0 === e.strm.avail_out)
        )
          return Jc;
        if (
          e.strstart - e.block_start >= e.w_size - Vc &&
          (sf(e, !1), 0 === e.strm.avail_out)
        )
          return Jc;
      }
      return (
        (e.insert = 0),
        t === yc
          ? (sf(e, !0), 0 === e.strm.avail_out ? $c : ef)
          : (e.strstart > e.block_start && (sf(e, !1), e.strm.avail_out), Jc)
      );
    }),
    new pf(4, 4, 8, 4, hf),
    new pf(4, 5, 16, 8, hf),
    new pf(4, 6, 32, 32, hf),
    new pf(4, 4, 16, 16, df),
    new pf(8, 16, 32, 32, df),
    new pf(8, 16, 128, 128, df),
    new pf(8, 32, 128, 256, df),
    new pf(32, 128, 258, 1024, df),
    new pf(32, 258, 258, 4096, df),
  ];
  var mf = {
      deflateInit: function (e, t) {
        return bf(e, t, Tc, zc, Dc, Ec);
      },
      deflateInit2: bf,
      deflateReset: yf,
      deflateResetKeep: vf,
      deflateSetHeader: function (e, t) {
        return e && e.state
          ? 2 !== e.state.wrap
            ? xc
            : ((e.state.gzhead = t), mc)
          : xc;
      },
      deflate: function (e, t) {
        var r, n, i, a;
        if (!e || !e.state || t > bc || t < 0) return e ? rf(e, xc) : xc;
        if (
          ((n = e.state),
          !e.output ||
            (!e.input && 0 !== e.avail_in) ||
            (n.status === Kc && t !== yc))
        )
          return rf(e, 0 === e.avail_out ? kc : xc);
        if (
          ((n.strm = e),
          (r = n.last_flush),
          (n.last_flush = t),
          n.status === qc)
        )
          if (2 === n.wrap)
            (e.adler = 0),
              uf(n, 31),
              uf(n, 139),
              uf(n, 8),
              n.gzhead
                ? (uf(
                    n,
                    (n.gzhead.text ? 1 : 0) +
                      (n.gzhead.hcrc ? 2 : 0) +
                      (n.gzhead.extra ? 4 : 0) +
                      (n.gzhead.name ? 8 : 0) +
                      (n.gzhead.comment ? 16 : 0)
                  ),
                  uf(n, 255 & n.gzhead.time),
                  uf(n, (n.gzhead.time >> 8) & 255),
                  uf(n, (n.gzhead.time >> 16) & 255),
                  uf(n, (n.gzhead.time >> 24) & 255),
                  uf(
                    n,
                    9 === n.level ? 2 : n.strategy >= Pc || n.level < 2 ? 4 : 0
                  ),
                  uf(n, 255 & n.gzhead.os),
                  n.gzhead.extra &&
                    n.gzhead.extra.length &&
                    (uf(n, 255 & n.gzhead.extra.length),
                    uf(n, (n.gzhead.extra.length >> 8) & 255)),
                  n.gzhead.hcrc &&
                    (e.adler = hc(e.adler, n.pending_buf, n.pending, 0)),
                  (n.gzindex = 0),
                  (n.status = Wc))
                : (uf(n, 0),
                  uf(n, 0),
                  uf(n, 0),
                  uf(n, 0),
                  uf(n, 0),
                  uf(
                    n,
                    9 === n.level ? 2 : n.strategy >= Pc || n.level < 2 ? 4 : 0
                  ),
                  uf(n, tf),
                  (n.status = Xc));
          else {
            var o = (Tc + ((n.w_bits - 8) << 4)) << 8;
            (o |=
              (n.strategy >= Pc || n.level < 2
                ? 0
                : n.level < 6
                ? 1
                : 6 === n.level
                ? 2
                : 3) << 6),
              0 !== n.strstart && (o |= _c),
              (o += 31 - (o % 31)),
              (n.status = Xc),
              lf(n, o),
              0 !== n.strstart &&
                (lf(n, e.adler >>> 16), lf(n, 65535 & e.adler)),
              (e.adler = 1);
          }
        if (n.status === Wc)
          if (n.gzhead.extra) {
            for (
              i = n.pending;
              n.gzindex < (65535 & n.gzhead.extra.length) &&
              (n.pending !== n.pending_buf_size ||
                (n.gzhead.hcrc &&
                  n.pending > i &&
                  (e.adler = hc(e.adler, n.pending_buf, n.pending - i, i)),
                of(e),
                (i = n.pending),
                n.pending !== n.pending_buf_size));

            )
              uf(n, 255 & n.gzhead.extra[n.gzindex]), n.gzindex++;
            n.gzhead.hcrc &&
              n.pending > i &&
              (e.adler = hc(e.adler, n.pending_buf, n.pending - i, i)),
              n.gzindex === n.gzhead.extra.length &&
                ((n.gzindex = 0), (n.status = Hc));
          } else n.status = Hc;
        if (n.status === Hc)
          if (n.gzhead.name) {
            i = n.pending;
            do {
              if (
                n.pending === n.pending_buf_size &&
                (n.gzhead.hcrc &&
                  n.pending > i &&
                  (e.adler = hc(e.adler, n.pending_buf, n.pending - i, i)),
                of(e),
                (i = n.pending),
                n.pending === n.pending_buf_size)
              ) {
                a = 1;
                break;
              }
              (a =
                n.gzindex < n.gzhead.name.length
                  ? 255 & n.gzhead.name.charCodeAt(n.gzindex++)
                  : 0),
                uf(n, a);
            } while (0 !== a);
            n.gzhead.hcrc &&
              n.pending > i &&
              (e.adler = hc(e.adler, n.pending_buf, n.pending - i, i)),
              0 === a && ((n.gzindex = 0), (n.status = Yc));
          } else n.status = Yc;
        if (n.status === Yc)
          if (n.gzhead.comment) {
            i = n.pending;
            do {
              if (
                n.pending === n.pending_buf_size &&
                (n.gzhead.hcrc &&
                  n.pending > i &&
                  (e.adler = hc(e.adler, n.pending_buf, n.pending - i, i)),
                of(e),
                (i = n.pending),
                n.pending === n.pending_buf_size)
              ) {
                a = 1;
                break;
              }
              (a =
                n.gzindex < n.gzhead.comment.length
                  ? 255 & n.gzhead.comment.charCodeAt(n.gzindex++)
                  : 0),
                uf(n, a);
            } while (0 !== a);
            n.gzhead.hcrc &&
              n.pending > i &&
              (e.adler = hc(e.adler, n.pending_buf, n.pending - i, i)),
              0 === a && (n.status = Zc);
          } else n.status = Zc;
        if (
          (n.status === Zc &&
            (n.gzhead.hcrc
              ? (n.pending + 2 > n.pending_buf_size && of(e),
                n.pending + 2 <= n.pending_buf_size &&
                  (uf(n, 255 & e.adler),
                  uf(n, (e.adler >> 8) & 255),
                  (e.adler = 0),
                  (n.status = Xc)))
              : (n.status = Xc)),
          0 !== n.pending)
        ) {
          if ((of(e), 0 === e.avail_out)) return (n.last_flush = -1), mc;
        } else if (0 === e.avail_in && nf(t) <= nf(r) && t !== yc)
          return rf(e, kc);
        if (n.status === Kc && 0 !== e.avail_in) return rf(e, kc);
        if (
          0 !== e.avail_in ||
          0 !== n.lookahead ||
          (t !== pc && n.status !== Kc)
        ) {
          var s =
            n.strategy === Pc
              ? (function (e, t) {
                  for (var r; ; ) {
                    if (0 === e.lookahead && (ff(e), 0 === e.lookahead)) {
                      if (t === pc) return Jc;
                      break;
                    }
                    if (
                      ((e.match_length = 0),
                      (r = uc._tr_tally(e, 0, e.window[e.strstart])),
                      e.lookahead--,
                      e.strstart++,
                      r && (sf(e, !1), 0 === e.strm.avail_out))
                    )
                      return Jc;
                  }
                  return (
                    (e.insert = 0),
                    t === yc
                      ? (sf(e, !0), 0 === e.strm.avail_out ? $c : ef)
                      : e.last_lit && (sf(e, !1), 0 === e.strm.avail_out)
                      ? Jc
                      : Qc
                  );
                })(n, t)
              : n.strategy === Ic
              ? (function (e, t) {
                  for (var r, n, i, a, o = e.window; ; ) {
                    if (e.lookahead <= Gc) {
                      if ((ff(e), e.lookahead <= Gc && t === pc)) return Jc;
                      if (0 === e.lookahead) break;
                    }
                    if (
                      ((e.match_length = 0),
                      e.lookahead >= jc &&
                        e.strstart > 0 &&
                        (n = o[(i = e.strstart - 1)]) === o[++i] &&
                        n === o[++i] &&
                        n === o[++i])
                    ) {
                      a = e.strstart + Gc;
                      do {} while (
                        n === o[++i] &&
                        n === o[++i] &&
                        n === o[++i] &&
                        n === o[++i] &&
                        n === o[++i] &&
                        n === o[++i] &&
                        n === o[++i] &&
                        n === o[++i] &&
                        i < a
                      );
                      (e.match_length = Gc - (a - i)),
                        e.match_length > e.lookahead &&
                          (e.match_length = e.lookahead);
                    }
                    if (
                      (e.match_length >= jc
                        ? ((r = uc._tr_tally(e, 1, e.match_length - jc)),
                          (e.lookahead -= e.match_length),
                          (e.strstart += e.match_length),
                          (e.match_length = 0))
                        : ((r = uc._tr_tally(e, 0, e.window[e.strstart])),
                          e.lookahead--,
                          e.strstart++),
                      r && (sf(e, !1), 0 === e.strm.avail_out))
                    )
                      return Jc;
                  }
                  return (
                    (e.insert = 0),
                    t === yc
                      ? (sf(e, !0), 0 === e.strm.avail_out ? $c : ef)
                      : e.last_lit && (sf(e, !1), 0 === e.strm.avail_out)
                      ? Jc
                      : Qc
                  );
                })(n, t)
              : fc[n.level].func(n, t);
          if (((s !== $c && s !== ef) || (n.status = Kc), s === Jc || s === $c))
            return 0 === e.avail_out && (n.last_flush = -1), mc;
          if (
            s === Qc &&
            (t === gc
              ? uc._tr_align(n)
              : t !== bc &&
                (uc._tr_stored_block(n, 0, 0, !1),
                t === vc &&
                  (af(n.head),
                  0 === n.lookahead &&
                    ((n.strstart = 0), (n.block_start = 0), (n.insert = 0)))),
            of(e),
            0 === e.avail_out)
          )
            return (n.last_flush = -1), mc;
        }
        return t !== yc
          ? mc
          : n.wrap <= 0
          ? wc
          : (2 === n.wrap
              ? (uf(n, 255 & e.adler),
                uf(n, (e.adler >> 8) & 255),
                uf(n, (e.adler >> 16) & 255),
                uf(n, (e.adler >> 24) & 255),
                uf(n, 255 & e.total_in),
                uf(n, (e.total_in >> 8) & 255),
                uf(n, (e.total_in >> 16) & 255),
                uf(n, (e.total_in >> 24) & 255))
              : (lf(n, e.adler >>> 16), lf(n, 65535 & e.adler)),
            of(e),
            n.wrap > 0 && (n.wrap = -n.wrap),
            0 !== n.pending ? mc : wc);
      },
      deflateEnd: function (e) {
        var t;
        return e && e.state
          ? (t = e.state.status) !== qc &&
            t !== Wc &&
            t !== Hc &&
            t !== Yc &&
            t !== Zc &&
            t !== Xc &&
            t !== Kc
            ? rf(e, xc)
            : ((e.state = null), t === Xc ? rf(e, Sc) : mc)
          : xc;
      },
      deflateSetDictionary: function (e, t) {
        var r,
          n,
          i,
          a,
          o,
          s,
          u,
          l,
          c = t.length;
        if (!e || !e.state) return xc;
        if (
          2 === (a = (r = e.state).wrap) ||
          (1 === a && r.status !== qc) ||
          r.lookahead
        )
          return xc;
        for (
          1 === a && (e.adler = lc(e.adler, t, c, 0)),
            r.wrap = 0,
            c >= r.w_size &&
              (0 === a &&
                (af(r.head),
                (r.strstart = 0),
                (r.block_start = 0),
                (r.insert = 0)),
              (l = new ll.Buf8(r.w_size)),
              ll.arraySet(l, t, c - r.w_size, r.w_size, 0),
              (t = l),
              (c = r.w_size)),
            o = e.avail_in,
            s = e.next_in,
            u = e.input,
            e.avail_in = c,
            e.next_in = 0,
            e.input = t,
            ff(r);
          r.lookahead >= jc;

        ) {
          (n = r.strstart), (i = r.lookahead - (jc - 1));
          do {
            (r.ins_h =
              ((r.ins_h << r.hash_shift) ^ r.window[n + jc - 1]) & r.hash_mask),
              (r.prev[n & r.w_mask] = r.head[r.ins_h]),
              (r.head[r.ins_h] = n),
              n++;
          } while (--i);
          (r.strstart = n), (r.lookahead = jc - 1), ff(r);
        }
        return (
          (r.strstart += r.lookahead),
          (r.block_start = r.strstart),
          (r.insert = r.lookahead),
          (r.lookahead = 0),
          (r.match_length = r.prev_length = jc - 1),
          (r.match_available = 0),
          (e.next_in = s),
          (e.input = u),
          (e.avail_in = o),
          (r.wrap = a),
          mc
        );
      },
      deflateInfo: "pako deflate (from Nodeca project)",
    },
    wf = !0,
    xf = !0;
  try {
    String.fromCharCode.apply(null, [0]);
  } catch (e) {
    wf = !1;
  }
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch (e) {
    xf = !1;
  }
  for (var Sf = new ll.Buf8(256), kf = 0; kf < 256; kf++)
    Sf[kf] =
      kf >= 252
        ? 6
        : kf >= 248
        ? 5
        : kf >= 240
        ? 4
        : kf >= 224
        ? 3
        : kf >= 192
        ? 2
        : 1;
  Sf[254] = Sf[254] = 1;
  function Af(e, t) {
    if (t < 65534 && ((e.subarray && xf) || (!e.subarray && wf)))
      return String.fromCharCode.apply(null, ll.shrinkBuf(e, t));
    for (var r = "", n = 0; n < t; n++) r += String.fromCharCode(e[n]);
    return r;
  }
  var Cf = {
    string2buf: function (e) {
      var t,
        r,
        n,
        i,
        a,
        o = e.length,
        s = 0;
      for (i = 0; i < o; i++)
        55296 == (64512 & (r = e.charCodeAt(i))) &&
          i + 1 < o &&
          56320 == (64512 & (n = e.charCodeAt(i + 1))) &&
          ((r = 65536 + ((r - 55296) << 10) + (n - 56320)), i++),
          (s += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4);
      for (t = new ll.Buf8(s), a = 0, i = 0; a < s; i++)
        55296 == (64512 & (r = e.charCodeAt(i))) &&
          i + 1 < o &&
          56320 == (64512 & (n = e.charCodeAt(i + 1))) &&
          ((r = 65536 + ((r - 55296) << 10) + (n - 56320)), i++),
          r < 128
            ? (t[a++] = r)
            : r < 2048
            ? ((t[a++] = 192 | (r >>> 6)), (t[a++] = 128 | (63 & r)))
            : r < 65536
            ? ((t[a++] = 224 | (r >>> 12)),
              (t[a++] = 128 | ((r >>> 6) & 63)),
              (t[a++] = 128 | (63 & r)))
            : ((t[a++] = 240 | (r >>> 18)),
              (t[a++] = 128 | ((r >>> 12) & 63)),
              (t[a++] = 128 | ((r >>> 6) & 63)),
              (t[a++] = 128 | (63 & r)));
      return t;
    },
    buf2binstring: function (e) {
      return Af(e, e.length);
    },
    binstring2buf: function (e) {
      for (var t = new ll.Buf8(e.length), r = 0, n = t.length; r < n; r++)
        t[r] = e.charCodeAt(r);
      return t;
    },
    buf2string: function (e, t) {
      var r,
        n,
        i,
        a,
        o = t || e.length,
        s = new Array(2 * o);
      for (n = 0, r = 0; r < o; )
        if ((i = e[r++]) < 128) s[n++] = i;
        else if ((a = Sf[i]) > 4) (s[n++] = 65533), (r += a - 1);
        else {
          for (i &= 2 === a ? 31 : 3 === a ? 15 : 7; a > 1 && r < o; )
            (i = (i << 6) | (63 & e[r++])), a--;
          a > 1
            ? (s[n++] = 65533)
            : i < 65536
            ? (s[n++] = i)
            : ((i -= 65536),
              (s[n++] = 55296 | ((i >> 10) & 1023)),
              (s[n++] = 56320 | (1023 & i)));
        }
      return Af(s, n);
    },
    utf8border: function (e, t) {
      var r;
      for (
        (t = t || e.length) > e.length && (t = e.length), r = t - 1;
        r >= 0 && 128 == (192 & e[r]);

      )
        r--;
      return r < 0 ? t : 0 === r ? t : r + Sf[e[r]] > t ? r : t;
    },
  };
  var Pf = function () {
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
    If = Object.prototype.toString,
    Of = 0,
    Ef = -1,
    Bf = 0,
    Tf = 8;
  function Lf(e) {
    if (!(this instanceof Lf)) return new Lf(e);
    this.options = ll.assign(
      {
        level: Ef,
        method: Tf,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: Bf,
        to: "",
      },
      e || {}
    );
    var t = this.options;
    t.raw && t.windowBits > 0
      ? (t.windowBits = -t.windowBits)
      : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16),
      (this.err = 0),
      (this.msg = ""),
      (this.ended = !1),
      (this.chunks = []),
      (this.strm = new Pf()),
      (this.strm.avail_out = 0);
    var r = mf.deflateInit2(
      this.strm,
      t.level,
      t.method,
      t.windowBits,
      t.memLevel,
      t.strategy
    );
    if (r !== Of) throw new Error(dc[r]);
    if ((t.header && mf.deflateSetHeader(this.strm, t.header), t.dictionary)) {
      var n;
      if (
        ((n =
          "string" == typeof t.dictionary
            ? Cf.string2buf(t.dictionary)
            : "[object ArrayBuffer]" === If.call(t.dictionary)
            ? new Uint8Array(t.dictionary)
            : t.dictionary),
        (r = mf.deflateSetDictionary(this.strm, n)) !== Of)
      )
        throw new Error(dc[r]);
      this._dict_set = !0;
    }
  }
  function zf(e, t) {
    var r = new Lf(t);
    if ((r.push(e, !0), r.err)) throw r.msg || dc[r.err];
    return r.result;
  }
  (Lf.prototype.push = function (e, t) {
    var r,
      n,
      i = this.strm,
      a = this.options.chunkSize;
    if (this.ended) return !1;
    (n = t === ~~t ? t : !0 === t ? 4 : 0),
      "string" == typeof e
        ? (i.input = Cf.string2buf(e))
        : "[object ArrayBuffer]" === If.call(e)
        ? (i.input = new Uint8Array(e))
        : (i.input = e),
      (i.next_in = 0),
      (i.avail_in = i.input.length);
    do {
      if (
        (0 === i.avail_out &&
          ((i.output = new ll.Buf8(a)), (i.next_out = 0), (i.avail_out = a)),
        1 !== (r = mf.deflate(i, n)) && r !== Of)
      )
        return this.onEnd(r), (this.ended = !0), !1;
      (0 !== i.avail_out && (0 !== i.avail_in || (4 !== n && 2 !== n))) ||
        ("string" === this.options.to
          ? this.onData(Cf.buf2binstring(ll.shrinkBuf(i.output, i.next_out)))
          : this.onData(ll.shrinkBuf(i.output, i.next_out)));
    } while ((i.avail_in > 0 || 0 === i.avail_out) && 1 !== r);
    return 4 === n
      ? ((r = mf.deflateEnd(this.strm)),
        this.onEnd(r),
        (this.ended = !0),
        r === Of)
      : 2 !== n || (this.onEnd(Of), (i.avail_out = 0), !0);
  }),
    (Lf.prototype.onData = function (e) {
      this.chunks.push(e);
    }),
    (Lf.prototype.onEnd = function (e) {
      e === Of &&
        ("string" === this.options.to
          ? (this.result = this.chunks.join(""))
          : (this.result = ll.flattenChunks(this.chunks))),
        (this.chunks = []),
        (this.err = e),
        (this.msg = this.strm.msg);
    });
  var Df = {
      Deflate: Lf,
      deflate: zf,
      deflateRaw: function (e, t) {
        return ((t = t || {}).raw = !0), zf(e, t);
      },
      gzip: function (e, t) {
        return ((t = t || {}).gzip = !0), zf(e, t);
      },
    },
    Rf = function (e, t) {
      var r,
        n,
        i,
        a,
        o,
        s,
        u,
        l,
        c,
        f,
        h,
        d,
        p,
        g,
        v,
        y,
        b,
        m,
        w,
        x,
        S,
        k,
        A,
        C,
        P;
      (r = e.state),
        (n = e.next_in),
        (C = e.input),
        (i = n + (e.avail_in - 5)),
        (a = e.next_out),
        (P = e.output),
        (o = a - (t - e.avail_out)),
        (s = a + (e.avail_out - 257)),
        (u = r.dmax),
        (l = r.wsize),
        (c = r.whave),
        (f = r.wnext),
        (h = r.window),
        (d = r.hold),
        (p = r.bits),
        (g = r.lencode),
        (v = r.distcode),
        (y = (1 << r.lenbits) - 1),
        (b = (1 << r.distbits) - 1);
      e: do {
        p < 15 && ((d += C[n++] << p), (p += 8), (d += C[n++] << p), (p += 8)),
          (m = g[d & y]);
        t: for (;;) {
          if (((d >>>= w = m >>> 24), (p -= w), 0 === (w = (m >>> 16) & 255)))
            P[a++] = 65535 & m;
          else {
            if (!(16 & w)) {
              if (0 == (64 & w)) {
                m = g[(65535 & m) + (d & ((1 << w) - 1))];
                continue t;
              }
              if (32 & w) {
                r.mode = 12;
                break e;
              }
              (e.msg = "invalid literal/length code"), (r.mode = 30);
              break e;
            }
            (x = 65535 & m),
              (w &= 15) &&
                (p < w && ((d += C[n++] << p), (p += 8)),
                (x += d & ((1 << w) - 1)),
                (d >>>= w),
                (p -= w)),
              p < 15 &&
                ((d += C[n++] << p), (p += 8), (d += C[n++] << p), (p += 8)),
              (m = v[d & b]);
            r: for (;;) {
              if (
                ((d >>>= w = m >>> 24),
                (p -= w),
                !(16 & (w = (m >>> 16) & 255)))
              ) {
                if (0 == (64 & w)) {
                  m = v[(65535 & m) + (d & ((1 << w) - 1))];
                  continue r;
                }
                (e.msg = "invalid distance code"), (r.mode = 30);
                break e;
              }
              if (
                ((S = 65535 & m),
                p < (w &= 15) &&
                  ((d += C[n++] << p),
                  (p += 8) < w && ((d += C[n++] << p), (p += 8))),
                (S += d & ((1 << w) - 1)) > u)
              ) {
                (e.msg = "invalid distance too far back"), (r.mode = 30);
                break e;
              }
              if (((d >>>= w), (p -= w), S > (w = a - o))) {
                if ((w = S - w) > c && r.sane) {
                  (e.msg = "invalid distance too far back"), (r.mode = 30);
                  break e;
                }
                if (((k = 0), (A = h), 0 === f)) {
                  if (((k += l - w), w < x)) {
                    x -= w;
                    do {
                      P[a++] = h[k++];
                    } while (--w);
                    (k = a - S), (A = P);
                  }
                } else if (f < w) {
                  if (((k += l + f - w), (w -= f) < x)) {
                    x -= w;
                    do {
                      P[a++] = h[k++];
                    } while (--w);
                    if (((k = 0), f < x)) {
                      x -= w = f;
                      do {
                        P[a++] = h[k++];
                      } while (--w);
                      (k = a - S), (A = P);
                    }
                  }
                } else if (((k += f - w), w < x)) {
                  x -= w;
                  do {
                    P[a++] = h[k++];
                  } while (--w);
                  (k = a - S), (A = P);
                }
                for (; x > 2; )
                  (P[a++] = A[k++]),
                    (P[a++] = A[k++]),
                    (P[a++] = A[k++]),
                    (x -= 3);
                x && ((P[a++] = A[k++]), x > 1 && (P[a++] = A[k++]));
              } else {
                k = a - S;
                do {
                  (P[a++] = P[k++]),
                    (P[a++] = P[k++]),
                    (P[a++] = P[k++]),
                    (x -= 3);
                } while (x > 2);
                x && ((P[a++] = P[k++]), x > 1 && (P[a++] = P[k++]));
              }
              break;
            }
          }
          break;
        }
      } while (n < i && a < s);
      (n -= x = p >> 3),
        (d &= (1 << (p -= x << 3)) - 1),
        (e.next_in = n),
        (e.next_out = a),
        (e.avail_in = n < i ? i - n + 5 : 5 - (n - i)),
        (e.avail_out = a < s ? s - a + 257 : 257 - (a - s)),
        (r.hold = d),
        (r.bits = p);
    },
    Mf = [
      3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
      67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
    ],
    Ff = [
      16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19,
      19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
    ],
    Uf = [
      1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513,
      769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0,
    ],
    Nf = [
      16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23,
      24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
    ],
    jf = function (e, t, r, n, i, a, o, s) {
      var u,
        l,
        c,
        f,
        h,
        d,
        p,
        g,
        v,
        y = s.bits,
        b = 0,
        m = 0,
        w = 0,
        x = 0,
        S = 0,
        k = 0,
        A = 0,
        C = 0,
        P = 0,
        I = 0,
        O = null,
        E = 0,
        B = new ll.Buf16(16),
        T = new ll.Buf16(16),
        L = null,
        z = 0;
      for (b = 0; b <= 15; b++) B[b] = 0;
      for (m = 0; m < n; m++) B[t[r + m]]++;
      for (S = y, x = 15; x >= 1 && 0 === B[x]; x--);
      if ((S > x && (S = x), 0 === x))
        return (i[a++] = 20971520), (i[a++] = 20971520), (s.bits = 1), 0;
      for (w = 1; w < x && 0 === B[w]; w++);
      for (S < w && (S = w), C = 1, b = 1; b <= 15; b++)
        if (((C <<= 1), (C -= B[b]) < 0)) return -1;
      if (C > 0 && (0 === e || 1 !== x)) return -1;
      for (T[1] = 0, b = 1; b < 15; b++) T[b + 1] = T[b] + B[b];
      for (m = 0; m < n; m++) 0 !== t[r + m] && (o[T[t[r + m]]++] = m);
      if (
        (0 === e
          ? ((O = L = o), (d = 19))
          : 1 === e
          ? ((O = Mf), (E -= 257), (L = Ff), (z -= 257), (d = 256))
          : ((O = Uf), (L = Nf), (d = -1)),
        (I = 0),
        (m = 0),
        (b = w),
        (h = a),
        (k = S),
        (A = 0),
        (c = -1),
        (f = (P = 1 << S) - 1),
        (1 === e && P > 852) || (2 === e && P > 592))
      )
        return 1;
      for (;;) {
        (p = b - A),
          o[m] < d
            ? ((g = 0), (v = o[m]))
            : o[m] > d
            ? ((g = L[z + o[m]]), (v = O[E + o[m]]))
            : ((g = 96), (v = 0)),
          (u = 1 << (b - A)),
          (w = l = 1 << k);
        do {
          i[h + (I >> A) + (l -= u)] = (p << 24) | (g << 16) | v | 0;
        } while (0 !== l);
        for (u = 1 << (b - 1); I & u; ) u >>= 1;
        if ((0 !== u ? ((I &= u - 1), (I += u)) : (I = 0), m++, 0 == --B[b])) {
          if (b === x) break;
          b = t[r + o[m]];
        }
        if (b > S && (I & f) !== c) {
          for (
            0 === A && (A = S), h += w, C = 1 << (k = b - A);
            k + A < x && !((C -= B[k + A]) <= 0);

          )
            k++, (C <<= 1);
          if (((P += 1 << k), (1 === e && P > 852) || (2 === e && P > 592)))
            return 1;
          i[(c = I & f)] = (S << 24) | (k << 16) | (h - a) | 0;
        }
      }
      return (
        0 !== I && (i[h + I] = ((b - A) << 24) | (64 << 16) | 0),
        (s.bits = S),
        0
      );
    },
    Gf = 0,
    Vf = 1,
    _f = 2,
    qf = 4,
    Wf = 5,
    Hf = 6,
    Yf = 0,
    Zf = 1,
    Xf = 2,
    Kf = -2,
    Jf = -3,
    Qf = -4,
    $f = -5,
    eh = 8,
    th = 1,
    rh = 2,
    nh = 3,
    ih = 4,
    ah = 5,
    oh = 6,
    sh = 7,
    uh = 8,
    lh = 9,
    ch = 10,
    fh = 11,
    hh = 12,
    dh = 13,
    ph = 14,
    gh = 15,
    vh = 16,
    yh = 17,
    bh = 18,
    mh = 19,
    wh = 20,
    xh = 21,
    Sh = 22,
    kh = 23,
    Ah = 24,
    Ch = 25,
    Ph = 26,
    Ih = 27,
    Oh = 28,
    Eh = 29,
    Bh = 30,
    Th = 31,
    Lh = 32,
    zh = 852,
    Dh = 592,
    Rh = 15;
  function Mh(e) {
    return (
      ((e >>> 24) & 255) +
      ((e >>> 8) & 65280) +
      ((65280 & e) << 8) +
      ((255 & e) << 24)
    );
  }
  function Fh() {
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
      (this.lens = new ll.Buf16(320)),
      (this.work = new ll.Buf16(288)),
      (this.lendyn = null),
      (this.distdyn = null),
      (this.sane = 0),
      (this.back = 0),
      (this.was = 0);
  }
  function Uh(e) {
    var t;
    return e && e.state
      ? ((t = e.state),
        (e.total_in = e.total_out = t.total = 0),
        (e.msg = ""),
        t.wrap && (e.adler = 1 & t.wrap),
        (t.mode = th),
        (t.last = 0),
        (t.havedict = 0),
        (t.dmax = 32768),
        (t.head = null),
        (t.hold = 0),
        (t.bits = 0),
        (t.lencode = t.lendyn = new ll.Buf32(zh)),
        (t.distcode = t.distdyn = new ll.Buf32(Dh)),
        (t.sane = 1),
        (t.back = -1),
        Yf)
      : Kf;
  }
  function Nh(e) {
    var t;
    return e && e.state
      ? (((t = e.state).wsize = 0), (t.whave = 0), (t.wnext = 0), Uh(e))
      : Kf;
  }
  function jh(e, t) {
    var r, n;
    return e && e.state
      ? ((n = e.state),
        t < 0 ? ((r = 0), (t = -t)) : ((r = 1 + (t >> 4)), t < 48 && (t &= 15)),
        t && (t < 8 || t > 15)
          ? Kf
          : (null !== n.window && n.wbits !== t && (n.window = null),
            (n.wrap = r),
            (n.wbits = t),
            Nh(e)))
      : Kf;
  }
  function Gh(e, t) {
    var r, n;
    return e
      ? ((n = new Fh()),
        (e.state = n),
        (n.window = null),
        (r = jh(e, t)) !== Yf && (e.state = null),
        r)
      : Kf;
  }
  var Vh,
    _h,
    qh = !0;
  function Wh(e) {
    if (qh) {
      var t;
      for (Vh = new ll.Buf32(512), _h = new ll.Buf32(32), t = 0; t < 144; )
        e.lens[t++] = 8;
      for (; t < 256; ) e.lens[t++] = 9;
      for (; t < 280; ) e.lens[t++] = 7;
      for (; t < 288; ) e.lens[t++] = 8;
      for (jf(Vf, e.lens, 0, 288, Vh, 0, e.work, { bits: 9 }), t = 0; t < 32; )
        e.lens[t++] = 5;
      jf(_f, e.lens, 0, 32, _h, 0, e.work, { bits: 5 }), (qh = !1);
    }
    (e.lencode = Vh), (e.lenbits = 9), (e.distcode = _h), (e.distbits = 5);
  }
  function Hh(e, t, r, n) {
    var i,
      a = e.state;
    return (
      null === a.window &&
        ((a.wsize = 1 << a.wbits),
        (a.wnext = 0),
        (a.whave = 0),
        (a.window = new ll.Buf8(a.wsize))),
      n >= a.wsize
        ? (ll.arraySet(a.window, t, r - a.wsize, a.wsize, 0),
          (a.wnext = 0),
          (a.whave = a.wsize))
        : ((i = a.wsize - a.wnext) > n && (i = n),
          ll.arraySet(a.window, t, r - n, i, a.wnext),
          (n -= i)
            ? (ll.arraySet(a.window, t, r - n, n, 0),
              (a.wnext = n),
              (a.whave = a.wsize))
            : ((a.wnext += i),
              a.wnext === a.wsize && (a.wnext = 0),
              a.whave < a.wsize && (a.whave += i))),
      0
    );
  }
  var Yh = {
      inflateReset: Nh,
      inflateReset2: jh,
      inflateResetKeep: Uh,
      inflateInit: function (e) {
        return Gh(e, Rh);
      },
      inflateInit2: Gh,
      inflate: function (e, t) {
        var r,
          n,
          i,
          a,
          o,
          s,
          u,
          l,
          c,
          f,
          h,
          d,
          p,
          g,
          v,
          y,
          b,
          m,
          w,
          x,
          S,
          k,
          A,
          C,
          P = 0,
          I = new ll.Buf8(4),
          O = [
            16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
          ];
        if (!e || !e.state || !e.output || (!e.input && 0 !== e.avail_in))
          return Kf;
        (r = e.state).mode === hh && (r.mode = dh),
          (o = e.next_out),
          (i = e.output),
          (u = e.avail_out),
          (a = e.next_in),
          (n = e.input),
          (s = e.avail_in),
          (l = r.hold),
          (c = r.bits),
          (f = s),
          (h = u),
          (k = Yf);
        e: for (;;)
          switch (r.mode) {
            case th:
              if (0 === r.wrap) {
                r.mode = dh;
                break;
              }
              for (; c < 16; ) {
                if (0 === s) break e;
                s--, (l += n[a++] << c), (c += 8);
              }
              if (2 & r.wrap && 35615 === l) {
                (r.check = 0),
                  (I[0] = 255 & l),
                  (I[1] = (l >>> 8) & 255),
                  (r.check = hc(r.check, I, 2, 0)),
                  (l = 0),
                  (c = 0),
                  (r.mode = rh);
                break;
              }
              if (
                ((r.flags = 0),
                r.head && (r.head.done = !1),
                !(1 & r.wrap) || (((255 & l) << 8) + (l >> 8)) % 31)
              ) {
                (e.msg = "incorrect header check"), (r.mode = Bh);
                break;
              }
              if ((15 & l) !== eh) {
                (e.msg = "unknown compression method"), (r.mode = Bh);
                break;
              }
              if (((c -= 4), (S = 8 + (15 & (l >>>= 4))), 0 === r.wbits))
                r.wbits = S;
              else if (S > r.wbits) {
                (e.msg = "invalid window size"), (r.mode = Bh);
                break;
              }
              (r.dmax = 1 << S),
                (e.adler = r.check = 1),
                (r.mode = 512 & l ? ch : hh),
                (l = 0),
                (c = 0);
              break;
            case rh:
              for (; c < 16; ) {
                if (0 === s) break e;
                s--, (l += n[a++] << c), (c += 8);
              }
              if (((r.flags = l), (255 & r.flags) !== eh)) {
                (e.msg = "unknown compression method"), (r.mode = Bh);
                break;
              }
              if (57344 & r.flags) {
                (e.msg = "unknown header flags set"), (r.mode = Bh);
                break;
              }
              r.head && (r.head.text = (l >> 8) & 1),
                512 & r.flags &&
                  ((I[0] = 255 & l),
                  (I[1] = (l >>> 8) & 255),
                  (r.check = hc(r.check, I, 2, 0))),
                (l = 0),
                (c = 0),
                (r.mode = nh);
            case nh:
              for (; c < 32; ) {
                if (0 === s) break e;
                s--, (l += n[a++] << c), (c += 8);
              }
              r.head && (r.head.time = l),
                512 & r.flags &&
                  ((I[0] = 255 & l),
                  (I[1] = (l >>> 8) & 255),
                  (I[2] = (l >>> 16) & 255),
                  (I[3] = (l >>> 24) & 255),
                  (r.check = hc(r.check, I, 4, 0))),
                (l = 0),
                (c = 0),
                (r.mode = ih);
            case ih:
              for (; c < 16; ) {
                if (0 === s) break e;
                s--, (l += n[a++] << c), (c += 8);
              }
              r.head && ((r.head.xflags = 255 & l), (r.head.os = l >> 8)),
                512 & r.flags &&
                  ((I[0] = 255 & l),
                  (I[1] = (l >>> 8) & 255),
                  (r.check = hc(r.check, I, 2, 0))),
                (l = 0),
                (c = 0),
                (r.mode = ah);
            case ah:
              if (1024 & r.flags) {
                for (; c < 16; ) {
                  if (0 === s) break e;
                  s--, (l += n[a++] << c), (c += 8);
                }
                (r.length = l),
                  r.head && (r.head.extra_len = l),
                  512 & r.flags &&
                    ((I[0] = 255 & l),
                    (I[1] = (l >>> 8) & 255),
                    (r.check = hc(r.check, I, 2, 0))),
                  (l = 0),
                  (c = 0);
              } else r.head && (r.head.extra = null);
              r.mode = oh;
            case oh:
              if (
                1024 & r.flags &&
                ((d = r.length) > s && (d = s),
                d &&
                  (r.head &&
                    ((S = r.head.extra_len - r.length),
                    r.head.extra ||
                      (r.head.extra = new Array(r.head.extra_len)),
                    ll.arraySet(r.head.extra, n, a, d, S)),
                  512 & r.flags && (r.check = hc(r.check, n, d, a)),
                  (s -= d),
                  (a += d),
                  (r.length -= d)),
                r.length)
              )
                break e;
              (r.length = 0), (r.mode = sh);
            case sh:
              if (2048 & r.flags) {
                if (0 === s) break e;
                d = 0;
                do {
                  (S = n[a + d++]),
                    r.head &&
                      S &&
                      r.length < 65536 &&
                      (r.head.name += String.fromCharCode(S));
                } while (S && d < s);
                if (
                  (512 & r.flags && (r.check = hc(r.check, n, d, a)),
                  (s -= d),
                  (a += d),
                  S)
                )
                  break e;
              } else r.head && (r.head.name = null);
              (r.length = 0), (r.mode = uh);
            case uh:
              if (4096 & r.flags) {
                if (0 === s) break e;
                d = 0;
                do {
                  (S = n[a + d++]),
                    r.head &&
                      S &&
                      r.length < 65536 &&
                      (r.head.comment += String.fromCharCode(S));
                } while (S && d < s);
                if (
                  (512 & r.flags && (r.check = hc(r.check, n, d, a)),
                  (s -= d),
                  (a += d),
                  S)
                )
                  break e;
              } else r.head && (r.head.comment = null);
              r.mode = lh;
            case lh:
              if (512 & r.flags) {
                for (; c < 16; ) {
                  if (0 === s) break e;
                  s--, (l += n[a++] << c), (c += 8);
                }
                if (l !== (65535 & r.check)) {
                  (e.msg = "header crc mismatch"), (r.mode = Bh);
                  break;
                }
                (l = 0), (c = 0);
              }
              r.head &&
                ((r.head.hcrc = (r.flags >> 9) & 1), (r.head.done = !0)),
                (e.adler = r.check = 0),
                (r.mode = hh);
              break;
            case ch:
              for (; c < 32; ) {
                if (0 === s) break e;
                s--, (l += n[a++] << c), (c += 8);
              }
              (e.adler = r.check = Mh(l)), (l = 0), (c = 0), (r.mode = fh);
            case fh:
              if (0 === r.havedict)
                return (
                  (e.next_out = o),
                  (e.avail_out = u),
                  (e.next_in = a),
                  (e.avail_in = s),
                  (r.hold = l),
                  (r.bits = c),
                  Xf
                );
              (e.adler = r.check = 1), (r.mode = hh);
            case hh:
              if (t === Wf || t === Hf) break e;
            case dh:
              if (r.last) {
                (l >>>= 7 & c), (c -= 7 & c), (r.mode = Ih);
                break;
              }
              for (; c < 3; ) {
                if (0 === s) break e;
                s--, (l += n[a++] << c), (c += 8);
              }
              switch (((r.last = 1 & l), (c -= 1), 3 & (l >>>= 1))) {
                case 0:
                  r.mode = ph;
                  break;
                case 1:
                  if ((Wh(r), (r.mode = wh), t === Hf)) {
                    (l >>>= 2), (c -= 2);
                    break e;
                  }
                  break;
                case 2:
                  r.mode = yh;
                  break;
                case 3:
                  (e.msg = "invalid block type"), (r.mode = Bh);
              }
              (l >>>= 2), (c -= 2);
              break;
            case ph:
              for (l >>>= 7 & c, c -= 7 & c; c < 32; ) {
                if (0 === s) break e;
                s--, (l += n[a++] << c), (c += 8);
              }
              if ((65535 & l) != ((l >>> 16) ^ 65535)) {
                (e.msg = "invalid stored block lengths"), (r.mode = Bh);
                break;
              }
              if (
                ((r.length = 65535 & l),
                (l = 0),
                (c = 0),
                (r.mode = gh),
                t === Hf)
              )
                break e;
            case gh:
              r.mode = vh;
            case vh:
              if ((d = r.length)) {
                if ((d > s && (d = s), d > u && (d = u), 0 === d)) break e;
                ll.arraySet(i, n, a, d, o),
                  (s -= d),
                  (a += d),
                  (u -= d),
                  (o += d),
                  (r.length -= d);
                break;
              }
              r.mode = hh;
              break;
            case yh:
              for (; c < 14; ) {
                if (0 === s) break e;
                s--, (l += n[a++] << c), (c += 8);
              }
              if (
                ((r.nlen = 257 + (31 & l)),
                (l >>>= 5),
                (c -= 5),
                (r.ndist = 1 + (31 & l)),
                (l >>>= 5),
                (c -= 5),
                (r.ncode = 4 + (15 & l)),
                (l >>>= 4),
                (c -= 4),
                r.nlen > 286 || r.ndist > 30)
              ) {
                (e.msg = "too many length or distance symbols"), (r.mode = Bh);
                break;
              }
              (r.have = 0), (r.mode = bh);
            case bh:
              for (; r.have < r.ncode; ) {
                for (; c < 3; ) {
                  if (0 === s) break e;
                  s--, (l += n[a++] << c), (c += 8);
                }
                (r.lens[O[r.have++]] = 7 & l), (l >>>= 3), (c -= 3);
              }
              for (; r.have < 19; ) r.lens[O[r.have++]] = 0;
              if (
                ((r.lencode = r.lendyn),
                (r.lenbits = 7),
                (A = { bits: r.lenbits }),
                (k = jf(Gf, r.lens, 0, 19, r.lencode, 0, r.work, A)),
                (r.lenbits = A.bits),
                k)
              ) {
                (e.msg = "invalid code lengths set"), (r.mode = Bh);
                break;
              }
              (r.have = 0), (r.mode = mh);
            case mh:
              for (; r.have < r.nlen + r.ndist; ) {
                for (
                  ;
                  (y =
                    ((P = r.lencode[l & ((1 << r.lenbits) - 1)]) >>> 16) & 255),
                    (b = 65535 & P),
                    !((v = P >>> 24) <= c);

                ) {
                  if (0 === s) break e;
                  s--, (l += n[a++] << c), (c += 8);
                }
                if (b < 16) (l >>>= v), (c -= v), (r.lens[r.have++] = b);
                else {
                  if (16 === b) {
                    for (C = v + 2; c < C; ) {
                      if (0 === s) break e;
                      s--, (l += n[a++] << c), (c += 8);
                    }
                    if (((l >>>= v), (c -= v), 0 === r.have)) {
                      (e.msg = "invalid bit length repeat"), (r.mode = Bh);
                      break;
                    }
                    (S = r.lens[r.have - 1]),
                      (d = 3 + (3 & l)),
                      (l >>>= 2),
                      (c -= 2);
                  } else if (17 === b) {
                    for (C = v + 3; c < C; ) {
                      if (0 === s) break e;
                      s--, (l += n[a++] << c), (c += 8);
                    }
                    (c -= v),
                      (S = 0),
                      (d = 3 + (7 & (l >>>= v))),
                      (l >>>= 3),
                      (c -= 3);
                  } else {
                    for (C = v + 7; c < C; ) {
                      if (0 === s) break e;
                      s--, (l += n[a++] << c), (c += 8);
                    }
                    (c -= v),
                      (S = 0),
                      (d = 11 + (127 & (l >>>= v))),
                      (l >>>= 7),
                      (c -= 7);
                  }
                  if (r.have + d > r.nlen + r.ndist) {
                    (e.msg = "invalid bit length repeat"), (r.mode = Bh);
                    break;
                  }
                  for (; d--; ) r.lens[r.have++] = S;
                }
              }
              if (r.mode === Bh) break;
              if (0 === r.lens[256]) {
                (e.msg = "invalid code -- missing end-of-block"), (r.mode = Bh);
                break;
              }
              if (
                ((r.lenbits = 9),
                (A = { bits: r.lenbits }),
                (k = jf(Vf, r.lens, 0, r.nlen, r.lencode, 0, r.work, A)),
                (r.lenbits = A.bits),
                k)
              ) {
                (e.msg = "invalid literal/lengths set"), (r.mode = Bh);
                break;
              }
              if (
                ((r.distbits = 6),
                (r.distcode = r.distdyn),
                (A = { bits: r.distbits }),
                (k = jf(_f, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, A)),
                (r.distbits = A.bits),
                k)
              ) {
                (e.msg = "invalid distances set"), (r.mode = Bh);
                break;
              }
              if (((r.mode = wh), t === Hf)) break e;
            case wh:
              r.mode = xh;
            case xh:
              if (s >= 6 && u >= 258) {
                (e.next_out = o),
                  (e.avail_out = u),
                  (e.next_in = a),
                  (e.avail_in = s),
                  (r.hold = l),
                  (r.bits = c),
                  Rf(e, h),
                  (o = e.next_out),
                  (i = e.output),
                  (u = e.avail_out),
                  (a = e.next_in),
                  (n = e.input),
                  (s = e.avail_in),
                  (l = r.hold),
                  (c = r.bits),
                  r.mode === hh && (r.back = -1);
                break;
              }
              for (
                r.back = 0;
                (y =
                  ((P = r.lencode[l & ((1 << r.lenbits) - 1)]) >>> 16) & 255),
                  (b = 65535 & P),
                  !((v = P >>> 24) <= c);

              ) {
                if (0 === s) break e;
                s--, (l += n[a++] << c), (c += 8);
              }
              if (y && 0 == (240 & y)) {
                for (
                  m = v, w = y, x = b;
                  (y =
                    ((P = r.lencode[x + ((l & ((1 << (m + w)) - 1)) >> m)]) >>>
                      16) &
                    255),
                    (b = 65535 & P),
                    !(m + (v = P >>> 24) <= c);

                ) {
                  if (0 === s) break e;
                  s--, (l += n[a++] << c), (c += 8);
                }
                (l >>>= m), (c -= m), (r.back += m);
              }
              if (
                ((l >>>= v), (c -= v), (r.back += v), (r.length = b), 0 === y)
              ) {
                r.mode = Ph;
                break;
              }
              if (32 & y) {
                (r.back = -1), (r.mode = hh);
                break;
              }
              if (64 & y) {
                (e.msg = "invalid literal/length code"), (r.mode = Bh);
                break;
              }
              (r.extra = 15 & y), (r.mode = Sh);
            case Sh:
              if (r.extra) {
                for (C = r.extra; c < C; ) {
                  if (0 === s) break e;
                  s--, (l += n[a++] << c), (c += 8);
                }
                (r.length += l & ((1 << r.extra) - 1)),
                  (l >>>= r.extra),
                  (c -= r.extra),
                  (r.back += r.extra);
              }
              (r.was = r.length), (r.mode = kh);
            case kh:
              for (
                ;
                (y =
                  ((P = r.distcode[l & ((1 << r.distbits) - 1)]) >>> 16) & 255),
                  (b = 65535 & P),
                  !((v = P >>> 24) <= c);

              ) {
                if (0 === s) break e;
                s--, (l += n[a++] << c), (c += 8);
              }
              if (0 == (240 & y)) {
                for (
                  m = v, w = y, x = b;
                  (y =
                    ((P = r.distcode[x + ((l & ((1 << (m + w)) - 1)) >> m)]) >>>
                      16) &
                    255),
                    (b = 65535 & P),
                    !(m + (v = P >>> 24) <= c);

                ) {
                  if (0 === s) break e;
                  s--, (l += n[a++] << c), (c += 8);
                }
                (l >>>= m), (c -= m), (r.back += m);
              }
              if (((l >>>= v), (c -= v), (r.back += v), 64 & y)) {
                (e.msg = "invalid distance code"), (r.mode = Bh);
                break;
              }
              (r.offset = b), (r.extra = 15 & y), (r.mode = Ah);
            case Ah:
              if (r.extra) {
                for (C = r.extra; c < C; ) {
                  if (0 === s) break e;
                  s--, (l += n[a++] << c), (c += 8);
                }
                (r.offset += l & ((1 << r.extra) - 1)),
                  (l >>>= r.extra),
                  (c -= r.extra),
                  (r.back += r.extra);
              }
              if (r.offset > r.dmax) {
                (e.msg = "invalid distance too far back"), (r.mode = Bh);
                break;
              }
              r.mode = Ch;
            case Ch:
              if (0 === u) break e;
              if (((d = h - u), r.offset > d)) {
                if ((d = r.offset - d) > r.whave && r.sane) {
                  (e.msg = "invalid distance too far back"), (r.mode = Bh);
                  break;
                }
                d > r.wnext
                  ? ((d -= r.wnext), (p = r.wsize - d))
                  : (p = r.wnext - d),
                  d > r.length && (d = r.length),
                  (g = r.window);
              } else (g = i), (p = o - r.offset), (d = r.length);
              d > u && (d = u), (u -= d), (r.length -= d);
              do {
                i[o++] = g[p++];
              } while (--d);
              0 === r.length && (r.mode = xh);
              break;
            case Ph:
              if (0 === u) break e;
              (i[o++] = r.length), u--, (r.mode = xh);
              break;
            case Ih:
              if (r.wrap) {
                for (; c < 32; ) {
                  if (0 === s) break e;
                  s--, (l |= n[a++] << c), (c += 8);
                }
                if (
                  ((h -= u),
                  (e.total_out += h),
                  (r.total += h),
                  h &&
                    (e.adler = r.check =
                      r.flags
                        ? hc(r.check, i, h, o - h)
                        : lc(r.check, i, h, o - h)),
                  (h = u),
                  (r.flags ? l : Mh(l)) !== r.check)
                ) {
                  (e.msg = "incorrect data check"), (r.mode = Bh);
                  break;
                }
                (l = 0), (c = 0);
              }
              r.mode = Oh;
            case Oh:
              if (r.wrap && r.flags) {
                for (; c < 32; ) {
                  if (0 === s) break e;
                  s--, (l += n[a++] << c), (c += 8);
                }
                if (l !== (4294967295 & r.total)) {
                  (e.msg = "incorrect length check"), (r.mode = Bh);
                  break;
                }
                (l = 0), (c = 0);
              }
              r.mode = Eh;
            case Eh:
              k = Zf;
              break e;
            case Bh:
              k = Jf;
              break e;
            case Th:
              return Qf;
            case Lh:
            default:
              return Kf;
          }
        return (
          (e.next_out = o),
          (e.avail_out = u),
          (e.next_in = a),
          (e.avail_in = s),
          (r.hold = l),
          (r.bits = c),
          (r.wsize ||
            (h !== e.avail_out && r.mode < Bh && (r.mode < Ih || t !== qf))) &&
            Hh(e, e.output, e.next_out, h - e.avail_out),
          (f -= e.avail_in),
          (h -= e.avail_out),
          (e.total_in += f),
          (e.total_out += h),
          (r.total += h),
          r.wrap &&
            h &&
            (e.adler = r.check =
              r.flags
                ? hc(r.check, i, h, e.next_out - h)
                : lc(r.check, i, h, e.next_out - h)),
          (e.data_type =
            r.bits +
            (r.last ? 64 : 0) +
            (r.mode === hh ? 128 : 0) +
            (r.mode === wh || r.mode === gh ? 256 : 0)),
          ((0 === f && 0 === h) || t === qf) && k === Yf && (k = $f),
          k
        );
      },
      inflateEnd: function (e) {
        if (!e || !e.state) return Kf;
        var t = e.state;
        return t.window && (t.window = null), (e.state = null), Yf;
      },
      inflateGetHeader: function (e, t) {
        var r;
        return e && e.state
          ? 0 == (2 & (r = e.state).wrap)
            ? Kf
            : ((r.head = t), (t.done = !1), Yf)
          : Kf;
      },
      inflateSetDictionary: function (e, t) {
        var r,
          n = t.length;
        return e && e.state
          ? 0 !== (r = e.state).wrap && r.mode !== fh
            ? Kf
            : r.mode === fh && lc(1, t, n, 0) !== r.check
            ? Jf
            : Hh(e, t, n, n)
            ? ((r.mode = Th), Qf)
            : ((r.havedict = 1), Yf)
          : Kf;
      },
      inflateInfo: "pako inflate (from Nodeca project)",
    },
    Zh = {
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
  var Xh = function () {
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
    Kh = Object.prototype.toString;
  function Jh(e) {
    if (!(this instanceof Jh)) return new Jh(e);
    this.options = ll.assign(
      { chunkSize: 16384, windowBits: 0, to: "" },
      e || {}
    );
    var t = this.options;
    t.raw &&
      t.windowBits >= 0 &&
      t.windowBits < 16 &&
      ((t.windowBits = -t.windowBits),
      0 === t.windowBits && (t.windowBits = -15)),
      !(t.windowBits >= 0 && t.windowBits < 16) ||
        (e && e.windowBits) ||
        (t.windowBits += 32),
      t.windowBits > 15 &&
        t.windowBits < 48 &&
        0 == (15 & t.windowBits) &&
        (t.windowBits |= 15),
      (this.err = 0),
      (this.msg = ""),
      (this.ended = !1),
      (this.chunks = []),
      (this.strm = new Pf()),
      (this.strm.avail_out = 0);
    var r = Yh.inflateInit2(this.strm, t.windowBits);
    if (r !== Zh.Z_OK) throw new Error(dc[r]);
    (this.header = new Xh()), Yh.inflateGetHeader(this.strm, this.header);
  }
  function Qh(e, t) {
    var r = new Jh(t);
    if ((r.push(e, !0), r.err)) throw r.msg || dc[r.err];
    return r.result;
  }
  (Jh.prototype.push = function (e, t) {
    var r,
      n,
      i,
      a,
      o,
      s,
      u = this.strm,
      l = this.options.chunkSize,
      c = this.options.dictionary,
      f = !1;
    if (this.ended) return !1;
    (n = t === ~~t ? t : !0 === t ? Zh.Z_FINISH : Zh.Z_NO_FLUSH),
      "string" == typeof e
        ? (u.input = Cf.binstring2buf(e))
        : "[object ArrayBuffer]" === Kh.call(e)
        ? (u.input = new Uint8Array(e))
        : (u.input = e),
      (u.next_in = 0),
      (u.avail_in = u.input.length);
    do {
      if (
        (0 === u.avail_out &&
          ((u.output = new ll.Buf8(l)), (u.next_out = 0), (u.avail_out = l)),
        (r = Yh.inflate(u, Zh.Z_NO_FLUSH)) === Zh.Z_NEED_DICT &&
          c &&
          ((s =
            "string" == typeof c
              ? Cf.string2buf(c)
              : "[object ArrayBuffer]" === Kh.call(c)
              ? new Uint8Array(c)
              : c),
          (r = Yh.inflateSetDictionary(this.strm, s))),
        r === Zh.Z_BUF_ERROR && !0 === f && ((r = Zh.Z_OK), (f = !1)),
        r !== Zh.Z_STREAM_END && r !== Zh.Z_OK)
      )
        return this.onEnd(r), (this.ended = !0), !1;
      u.next_out &&
        ((0 !== u.avail_out &&
          r !== Zh.Z_STREAM_END &&
          (0 !== u.avail_in || (n !== Zh.Z_FINISH && n !== Zh.Z_SYNC_FLUSH))) ||
          ("string" === this.options.to
            ? ((i = Cf.utf8border(u.output, u.next_out)),
              (a = u.next_out - i),
              (o = Cf.buf2string(u.output, i)),
              (u.next_out = a),
              (u.avail_out = l - a),
              a && ll.arraySet(u.output, u.output, i, a, 0),
              this.onData(o))
            : this.onData(ll.shrinkBuf(u.output, u.next_out)))),
        0 === u.avail_in && 0 === u.avail_out && (f = !0);
    } while ((u.avail_in > 0 || 0 === u.avail_out) && r !== Zh.Z_STREAM_END);
    return (
      r === Zh.Z_STREAM_END && (n = Zh.Z_FINISH),
      n === Zh.Z_FINISH
        ? ((r = Yh.inflateEnd(this.strm)),
          this.onEnd(r),
          (this.ended = !0),
          r === Zh.Z_OK)
        : n !== Zh.Z_SYNC_FLUSH || (this.onEnd(Zh.Z_OK), (u.avail_out = 0), !0)
    );
  }),
    (Jh.prototype.onData = function (e) {
      this.chunks.push(e);
    }),
    (Jh.prototype.onEnd = function (e) {
      e === Zh.Z_OK &&
        ("string" === this.options.to
          ? (this.result = this.chunks.join(""))
          : (this.result = ll.flattenChunks(this.chunks))),
        (this.chunks = []),
        (this.err = e),
        (this.msg = this.strm.msg);
    });
  var $h = {
      Inflate: Jh,
      inflate: Qh,
      inflateRaw: function (e, t) {
        return ((t = t || {}).raw = !0), Qh(e, t);
      },
      ungzip: Qh,
    },
    ed = {};
  (0, ll.assign)(ed, Df, $h, Zh);
  var td = ed,
    rd = re(function (e, t) {
      !(function () {
        for (
          var e =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            r = new Uint8Array(256),
            n = 0;
          n < e.length;
          n++
        )
          r[e.charCodeAt(n)] = n;
        (t.encode = function (t) {
          var r,
            n = new Uint8Array(t),
            i = n.length,
            a = "";
          for (r = 0; r < i; r += 3)
            (a += e[n[r] >> 2]),
              (a += e[((3 & n[r]) << 4) | (n[r + 1] >> 4)]),
              (a += e[((15 & n[r + 1]) << 2) | (n[r + 2] >> 6)]),
              (a += e[63 & n[r + 2]]);
          return (
            i % 3 == 2
              ? (a = a.substring(0, a.length - 1) + "=")
              : i % 3 == 1 && (a = a.substring(0, a.length - 2) + "=="),
            a
          );
        }),
          (t.decode = function (e) {
            var t,
              n,
              i,
              a,
              o,
              s = 0.75 * e.length,
              u = e.length,
              l = 0;
            "=" === e[e.length - 1] && (s--, "=" === e[e.length - 2] && s--);
            var c = new ArrayBuffer(s),
              f = new Uint8Array(c);
            for (t = 0; t < u; t += 4)
              (n = r[e.charCodeAt(t)]),
                (i = r[e.charCodeAt(t + 1)]),
                (a = r[e.charCodeAt(t + 2)]),
                (o = r[e.charCodeAt(t + 3)]),
                (f[l++] = (n << 2) | (i >> 4)),
                (f[l++] = ((15 & i) << 4) | (a >> 2)),
                (f[l++] = ((3 & a) << 6) | (63 & o));
            return c;
          });
      })();
    }),
    nd = (rd.encode, rd.decode),
    id = JSON.parse(
      String.fromCharCode.apply(
        String,
        td.inflate(
          nd(
            "eJxtVtty4zYM/Rc/70Ni97LbN1tJ49SXeGI3O93OjgayGBERRXoo0h5Np/9eAKTcpNOHECAFAgfAAZ2/JkcIqnEeVT/55c9JcZx8mnzradk5Wva83clW8bZjraZly8s68lnLZ2y3Nrzla2tedkhL8crGsmVtHXhhLxvLCzvd8N0t3/0my4mvccjCTb5/mhxdV6FF2xQG+j6h3LpQPivna+UVA5lX7qxGWT5joznOQhl34dMQ4KhVXX78fD0e7Z7OyhsYSHt0Acp9rPqjxxPb3rlYGXW1zNsxrBz/61eirNUrb4qiuL3J8jbLaZazLH/I8scsf8ry5yw/Z/klyWn2N83+ptnfNPubZn/T7G+W7WfZfjbaZ//T7H+a/c+yn1n2Mxv9MK5tbAOQfEEPHaQPn7PhlzHBmzGzmzGFaw4j2Nsx2u0I71ZwfezVtba5mlmswEL54vBIrMjYGVtqAFEmtS3x2XWdY6qtISDLhTu5zr0yIx+tVh6DMOjBK9UK504BmZDF4NEYUee+UxaBby9V5ZVwykMlH/dkB6wcNBAsLlErk0PlIedyawO2BrG+U2cyauiLpGYbMKw9RN/FVif1DTxhZT56HNjhATrkyTgoE5uY8rdQg3gmwtIfT9QerSY1QUFJmYEcsFIZxgCWQHEQmp0mZwS2iez9Pmh0p5Q71cW1istfENyaLLkfHhu0wLZPjZaQz9HKhQOlZFyT3EXrOO4iaqzTtwrshXGtdKc4/MbZxpkUf41dFcUMqctcPnUpZROl/ZFiql5li0OKu6Cy5dN9pNpmfQEBWqHJ6ag54JMpC42tFNsD9ZOtHgxw9NTmA75STo1O0HklYjepkSt2l9Q/pJ7YM9IXKe4CuihVH4wLWG6hkZ7uNDR9uQNhQPTQ6+CTrwF0uWaTZ/UGwtvf4DwiL1JenOILKub4RqmgsNzAILy00RiBYBX4csHqcEwVLIhNojyZunwMkEj74Kifx3y6U76Tze9MvfD+vE937wiHl8B7Defsr+/ACgPvTQV9DhaP0Ash6MyOPRRUcxmbk0fHfh67E00XmHLOL4WE3IHpBq+stBkqKq/KHKQiWameo0nLea2HOikbYiODLpdIWmOGk+7fHxeRspDHYqXBOyq5TBInuHcx6FKG9VqirfMfzmg6keiSoMzPqk/T8mjTM4KOOE8dpUv4vx+0oYIx+B5MUP7dCUc7RN9e672Mthm7RYTUHQo1MAHeO0+/Oo7qlp41DW2XhlwDUQZTc3ya/JV2b0LsTTQhfVzpWMOFxlXeM7BBZuCAXkd5s/dY14lnGydGB2iFtHPt+PQr+bZNWaC8PjuIpNpyCUz6IlqFr86z3X0zUPZEgY/9mFsIMtX/7ZOX54B+vOnRBi2uNVx0uaSXmRPdoDxUd/Fk3CC12WNjvzJR03dla1WusIU2Ir/vCi7yX4DQiCMzeOYR/f06+f73P0+ms+k="
          )
        )
      )
    ),
    ad = new ul(
      td.inflate(
        nd(
          "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"
        )
      )
    ),
    od =
      Math.log2 ||
      function (e) {
        return Math.log(e) / Math.LN2;
      },
    sd = function (e) {
      return (od(e) + 1) | 0;
    },
    ud = sd(id.categories.length - 1),
    ld = sd(id.combiningClasses.length - 1),
    cd = sd(id.scripts.length - 1),
    fd = sd(id.eaw.length - 1),
    hd = ld + cd + fd + 10,
    dd = cd + fd + 10,
    pd = fd + 10,
    gd = (1 << ud) - 1,
    vd = (1 << ld) - 1,
    yd = (1 << cd) - 1,
    bd = (1 << fd) - 1,
    md = function (e) {
      var t = ad.get(e);
      return id.categories[(t >> hd) & gd];
    },
    wd = {
      getCategory: md,
      getCombiningClass: function (e) {
        var t = ad.get(e);
        return id.combiningClasses[(t >> dd) & vd];
      },
      getScript: function (e) {
        var t = ad.get(e);
        return id.scripts[(t >> pd) & yd];
      },
      getEastAsianWidth: function (e) {
        var t = ad.get(e);
        return id.eaw[(t >> 10) & bd];
      },
      getNumericValue: function (e) {
        var t = ad.get(e),
          r = 1023 & t;
        if (0 === r) return null;
        if (r <= 50) return r - 1;
        if (r < 480) return ((r >> 4) - 12) / (1 + (15 & r));
        if (r < 768) {
          t = (r >> 5) - 14;
          for (var n = 2 + (31 & r); n > 0; ) (t *= 10), n--;
          return t;
        }
        t = (r >> 2) - 191;
        for (var i = 1 + (3 & r); i > 0; ) (t *= 60), i--;
        return t;
      },
      isAlphabetic: function (e) {
        var t = md(e);
        return (
          "Lu" === t ||
          "Ll" === t ||
          "Lt" === t ||
          "Lm" === t ||
          "Lo" === t ||
          "Nl" === t
        );
      },
      isDigit: function (e) {
        return "Nd" === md(e);
      },
      isPunctuation: function (e) {
        var t = md(e);
        return (
          "Pc" === t ||
          "Pd" === t ||
          "Pe" === t ||
          "Pf" === t ||
          "Pi" === t ||
          "Po" === t ||
          "Ps" === t
        );
      },
      isLowerCase: function (e) {
        return "Ll" === md(e);
      },
      isUpperCase: function (e) {
        return "Lu" === md(e);
      },
      isTitleCase: function (e) {
        return "Lt" === md(e);
      },
      isWhiteSpace: function (e) {
        var t = md(e);
        return "Zs" === t || "Zl" === t || "Zp" === t;
      },
      isBaseForm: function (e) {
        var t = md(e);
        return (
          "Nd" === t ||
          "No" === t ||
          "Nl" === t ||
          "Lu" === t ||
          "Ll" === t ||
          "Lt" === t ||
          "Lm" === t ||
          "Lo" === t ||
          "Me" === t ||
          "Mc" === t
        );
      },
      isMark: function (e) {
        var t = md(e);
        return "Mn" === t || "Me" === t || "Mc" === t;
      },
    },
    xd = (function () {
      function e(e) {
        this.font = e;
      }
      var t = e.prototype;
      return (
        (t.positionGlyphs = function (e, t) {
          for (var r = 0, n = 0, i = 0; i < e.length; i++) {
            e[i].isMark
              ? (n = i)
              : (r !== n && this.positionCluster(e, t, r, n), (r = n = i));
          }
          return r !== n && this.positionCluster(e, t, r, n), t;
        }),
        (t.positionCluster = function (e, t, r, n) {
          var i = e[r],
            a = i.cbox.copy();
          i.codePoints.length > 1 &&
            (a.minX +=
              ((i.codePoints.length - 1) * a.width) / i.codePoints.length);
          for (
            var o = -t[r].xAdvance,
              s = 0,
              u = this.font.unitsPerEm / 16,
              l = r + 1;
            l <= n;
            l++
          ) {
            var c = e[l],
              f = c.cbox,
              h = t[l],
              d = this.getCombiningClass(c.codePoints[0]);
            if ("Not_Reordered" !== d) {
              switch (((h.xOffset = h.yOffset = 0), d)) {
                case "Double_Above":
                case "Double_Below":
                  h.xOffset += a.minX - f.width / 2 - f.minX;
                  break;
                case "Attached_Below_Left":
                case "Below_Left":
                case "Above_Left":
                  h.xOffset += a.minX - f.minX;
                  break;
                case "Attached_Above_Right":
                case "Below_Right":
                case "Above_Right":
                  h.xOffset += a.maxX - f.width - f.minX;
                  break;
                default:
                  h.xOffset += a.minX + (a.width - f.width) / 2 - f.minX;
              }
              switch (d) {
                case "Double_Below":
                case "Below_Left":
                case "Below":
                case "Below_Right":
                case "Attached_Below_Left":
                case "Attached_Below":
                  ("Attached_Below_Left" !== d && "Attached_Below" !== d) ||
                    (a.minY += u),
                    (h.yOffset = -a.minY - f.maxY),
                    (a.minY += f.height);
                  break;
                case "Double_Above":
                case "Above_Left":
                case "Above":
                case "Above_Right":
                case "Attached_Above":
                case "Attached_Above_Right":
                  ("Attached_Above" !== d && "Attached_Above_Right" !== d) ||
                    (a.maxY += u),
                    (h.yOffset = a.maxY - f.minY),
                    (a.maxY += f.height);
              }
              (h.xAdvance = h.yAdvance = 0), (h.xOffset += o), (h.yOffset += s);
            } else (o -= h.xAdvance), (s -= h.yAdvance);
          }
        }),
        (t.getCombiningClass = function (e) {
          var t = wd.getCombiningClass(e);
          if (3584 == (-256 & e))
            if ("Not_Reordered" === t)
              switch (e) {
                case 3633:
                case 3636:
                case 3637:
                case 3638:
                case 3639:
                case 3655:
                case 3660:
                case 3645:
                case 3662:
                  return "Above_Right";
                case 3761:
                case 3764:
                case 3765:
                case 3766:
                case 3767:
                case 3771:
                case 3788:
                case 3789:
                  return "Above";
                case 3772:
                  return "Below";
              }
            else if (3642 === e) return "Below_Right";
          switch (t) {
            case "CCC10":
            case "CCC11":
            case "CCC12":
            case "CCC13":
            case "CCC14":
            case "CCC15":
            case "CCC16":
            case "CCC17":
            case "CCC18":
            case "CCC20":
            case "CCC22":
              return "Below";
            case "CCC23":
              return "Attached_Above";
            case "CCC24":
              return "Above_Right";
            case "CCC25":
            case "CCC19":
              return "Above_Left";
            case "CCC26":
              return "Above";
            case "CCC21":
              break;
            case "CCC27":
            case "CCC28":
            case "CCC30":
            case "CCC31":
            case "CCC33":
            case "CCC34":
            case "CCC35":
            case "CCC36":
              return "Above";
            case "CCC29":
            case "CCC32":
              return "Below";
            case "CCC103":
              return "Below_Right";
            case "CCC107":
              return "Above_Right";
            case "CCC118":
              return "Below";
            case "CCC122":
              return "Above";
            case "CCC129":
            case "CCC132":
              return "Below";
            case "CCC130":
              return "Above";
          }
          return t;
        }),
        e
      );
    })(),
    Sd = (function () {
      function e(e, t, r, n) {
        void 0 === e && (e = 1 / 0),
          void 0 === t && (t = 1 / 0),
          void 0 === r && (r = -1 / 0),
          void 0 === n && (n = -1 / 0),
          (this.minX = e),
          (this.minY = t),
          (this.maxX = r),
          (this.maxY = n);
      }
      var t = e.prototype;
      return (
        (t.addPoint = function (e, t) {
          Math.abs(e) !== 1 / 0 &&
            (e < this.minX && (this.minX = e),
            e > this.maxX && (this.maxX = e)),
            Math.abs(t) !== 1 / 0 &&
              (t < this.minY && (this.minY = t),
              t > this.maxY && (this.maxY = t));
        }),
        (t.copy = function () {
          return new e(this.minX, this.minY, this.maxX, this.maxY);
        }),
        si(e, [
          {
            key: "width",
            get: function () {
              return this.maxX - this.minX;
            },
          },
          {
            key: "height",
            get: function () {
              return this.maxY - this.minY;
            },
          },
        ]),
        e
      );
    })(),
    kd = {
      Caucasian_Albanian: "aghb",
      Arabic: "arab",
      Imperial_Aramaic: "armi",
      Armenian: "armn",
      Avestan: "avst",
      Balinese: "bali",
      Bamum: "bamu",
      Bassa_Vah: "bass",
      Batak: "batk",
      Bengali: ["bng2", "beng"],
      Bopomofo: "bopo",
      Brahmi: "brah",
      Braille: "brai",
      Buginese: "bugi",
      Buhid: "buhd",
      Chakma: "cakm",
      Canadian_Aboriginal: "cans",
      Carian: "cari",
      Cham: "cham",
      Cherokee: "cher",
      Coptic: "copt",
      Cypriot: "cprt",
      Cyrillic: "cyrl",
      Devanagari: ["dev2", "deva"],
      Deseret: "dsrt",
      Duployan: "dupl",
      Egyptian_Hieroglyphs: "egyp",
      Elbasan: "elba",
      Ethiopic: "ethi",
      Georgian: "geor",
      Glagolitic: "glag",
      Gothic: "goth",
      Grantha: "gran",
      Greek: "grek",
      Gujarati: ["gjr2", "gujr"],
      Gurmukhi: ["gur2", "guru"],
      Hangul: "hang",
      Han: "hani",
      Hanunoo: "hano",
      Hebrew: "hebr",
      Hiragana: "hira",
      Pahawh_Hmong: "hmng",
      Katakana_Or_Hiragana: "hrkt",
      Old_Italic: "ital",
      Javanese: "java",
      Kayah_Li: "kali",
      Katakana: "kana",
      Kharoshthi: "khar",
      Khmer: "khmr",
      Khojki: "khoj",
      Kannada: ["knd2", "knda"],
      Kaithi: "kthi",
      Tai_Tham: "lana",
      Lao: "lao ",
      Latin: "latn",
      Lepcha: "lepc",
      Limbu: "limb",
      Linear_A: "lina",
      Linear_B: "linb",
      Lisu: "lisu",
      Lycian: "lyci",
      Lydian: "lydi",
      Mahajani: "mahj",
      Mandaic: "mand",
      Manichaean: "mani",
      Mende_Kikakui: "mend",
      Meroitic_Cursive: "merc",
      Meroitic_Hieroglyphs: "mero",
      Malayalam: ["mlm2", "mlym"],
      Modi: "modi",
      Mongolian: "mong",
      Mro: "mroo",
      Meetei_Mayek: "mtei",
      Myanmar: ["mym2", "mymr"],
      Old_North_Arabian: "narb",
      Nabataean: "nbat",
      Nko: "nko ",
      Ogham: "ogam",
      Ol_Chiki: "olck",
      Old_Turkic: "orkh",
      Oriya: ["ory2", "orya"],
      Osmanya: "osma",
      Palmyrene: "palm",
      Pau_Cin_Hau: "pauc",
      Old_Permic: "perm",
      Phags_Pa: "phag",
      Inscriptional_Pahlavi: "phli",
      Psalter_Pahlavi: "phlp",
      Phoenician: "phnx",
      Miao: "plrd",
      Inscriptional_Parthian: "prti",
      Rejang: "rjng",
      Runic: "runr",
      Samaritan: "samr",
      Old_South_Arabian: "sarb",
      Saurashtra: "saur",
      Shavian: "shaw",
      Sharada: "shrd",
      Siddham: "sidd",
      Khudawadi: "sind",
      Sinhala: "sinh",
      Sora_Sompeng: "sora",
      Sundanese: "sund",
      Syloti_Nagri: "sylo",
      Syriac: "syrc",
      Tagbanwa: "tagb",
      Takri: "takr",
      Tai_Le: "tale",
      New_Tai_Lue: "talu",
      Tamil: ["tml2", "taml"],
      Tai_Viet: "tavt",
      Telugu: ["tel2", "telu"],
      Tifinagh: "tfng",
      Tagalog: "tglg",
      Thaana: "thaa",
      Thai: "thai",
      Tibetan: "tibt",
      Tirhuta: "tirh",
      Ugaritic: "ugar",
      Vai: "vai ",
      Warang_Citi: "wara",
      Old_Persian: "xpeo",
      Cuneiform: "xsux",
      Yi: "yi  ",
      Inherited: "zinh",
      Common: "zyyy",
      Unknown: "zzzz",
    },
    Ad = {};
  for (var Cd in kd) {
    var Pd = kd[Cd];
    if (Array.isArray(Pd)) {
      var Id = Pd,
        Od = Array.isArray(Id),
        Ed = 0;
      for (Id = Od ? Id : Id[Symbol.iterator](); ; ) {
        var Bd;
        if (Od) {
          if (Ed >= Id.length) break;
          Bd = Id[Ed++];
        } else {
          if ((Ed = Id.next()).done) break;
          Bd = Ed.value;
        }
        Ad[Bd] = Cd;
      }
    } else Ad[Pd] = Cd;
  }
  var Td = {
    arab: !0,
    hebr: !0,
    syrc: !0,
    thaa: !0,
    cprt: !0,
    khar: !0,
    phnx: !0,
    "nko ": !0,
    lydi: !0,
    avst: !0,
    armi: !0,
    phli: !0,
    prti: !0,
    sarb: !0,
    orkh: !0,
    samr: !0,
    mand: !0,
    merc: !0,
    mero: !0,
    mani: !0,
    mend: !0,
    nbat: !0,
    narb: !0,
    palm: !0,
    phlp: !0,
  };
  function Ld(e) {
    return Td[e] ? "rtl" : "ltr";
  }
  for (
    var zd = (function () {
        function e(e, t, r, n, i) {
          if (
            ((this.glyphs = e),
            (this.positions = null),
            (this.script = r),
            (this.language = n || null),
            (this.direction = i || Ld(r)),
            (this.features = {}),
            Array.isArray(t))
          ) {
            var a = t,
              o = Array.isArray(a),
              s = 0;
            for (a = o ? a : a[Symbol.iterator](); ; ) {
              var u;
              if (o) {
                if (s >= a.length) break;
                u = a[s++];
              } else {
                if ((s = a.next()).done) break;
                u = s.value;
              }
              var l = u;
              this.features[l] = !0;
            }
          } else "object" == typeof t && (this.features = t);
        }
        return (
          si(e, [
            {
              key: "advanceWidth",
              get: function () {
                var e = 0,
                  t = this.positions,
                  r = Array.isArray(t),
                  n = 0;
                for (t = r ? t : t[Symbol.iterator](); ; ) {
                  var i;
                  if (r) {
                    if (n >= t.length) break;
                    i = t[n++];
                  } else {
                    if ((n = t.next()).done) break;
                    i = n.value;
                  }
                  e += i.xAdvance;
                }
                return e;
              },
            },
            {
              key: "advanceHeight",
              get: function () {
                var e = 0,
                  t = this.positions,
                  r = Array.isArray(t),
                  n = 0;
                for (t = r ? t : t[Symbol.iterator](); ; ) {
                  var i;
                  if (r) {
                    if (n >= t.length) break;
                    i = t[n++];
                  } else {
                    if ((n = t.next()).done) break;
                    i = n.value;
                  }
                  e += i.yAdvance;
                }
                return e;
              },
            },
            {
              key: "bbox",
              get: function () {
                for (
                  var e = new Sd(), t = 0, r = 0, n = 0;
                  n < this.glyphs.length;
                  n++
                ) {
                  var i = this.glyphs[n],
                    a = this.positions[n],
                    o = i.bbox;
                  e.addPoint(o.minX + t + a.xOffset, o.minY + r + a.yOffset),
                    e.addPoint(o.maxX + t + a.xOffset, o.maxY + r + a.yOffset),
                    (t += a.xAdvance),
                    (r += a.yAdvance);
                }
                return e;
              },
            },
          ]),
          e
        );
      })(),
      Dd = function (e, t, r, n) {
        void 0 === e && (e = 0),
          void 0 === t && (t = 0),
          void 0 === r && (r = 0),
          void 0 === n && (n = 0),
          (this.xAdvance = e),
          (this.yAdvance = t),
          (this.xOffset = r),
          (this.yOffset = n);
      },
      Rd = {
        allTypographicFeatures: { code: 0, exclusive: !1, allTypeFeatures: 0 },
        ligatures: {
          code: 1,
          exclusive: !1,
          requiredLigatures: 0,
          commonLigatures: 2,
          rareLigatures: 4,
          rebusPictures: 8,
          diphthongLigatures: 10,
          squaredLigatures: 12,
          abbrevSquaredLigatures: 14,
          symbolLigatures: 16,
          contextualLigatures: 18,
          historicalLigatures: 20,
        },
        cursiveConnection: {
          code: 2,
          exclusive: !0,
          unconnected: 0,
          partiallyConnected: 1,
          cursive: 2,
        },
        letterCase: { code: 3, exclusive: !0 },
        verticalSubstitution: {
          code: 4,
          exclusive: !1,
          substituteVerticalForms: 0,
        },
        linguisticRearrangement: {
          code: 5,
          exclusive: !1,
          linguisticRearrangement: 0,
        },
        numberSpacing: {
          code: 6,
          exclusive: !0,
          monospacedNumbers: 0,
          proportionalNumbers: 1,
          thirdWidthNumbers: 2,
          quarterWidthNumbers: 3,
        },
        smartSwash: {
          code: 8,
          exclusive: !1,
          wordInitialSwashes: 0,
          wordFinalSwashes: 2,
          nonFinalSwashes: 8,
        },
        diacritics: {
          code: 9,
          exclusive: !0,
          showDiacritics: 0,
          hideDiacritics: 1,
          decomposeDiacritics: 2,
        },
        verticalPosition: {
          code: 10,
          exclusive: !0,
          normalPosition: 0,
          superiors: 1,
          inferiors: 2,
          ordinals: 3,
          scientificInferiors: 4,
        },
        fractions: {
          code: 11,
          exclusive: !0,
          noFractions: 0,
          verticalFractions: 1,
          diagonalFractions: 2,
        },
        overlappingCharacters: { code: 13, exclusive: !1, preventOverlap: 0 },
        typographicExtras: { code: 14, exclusive: !1, slashedZero: 4 },
        mathematicalExtras: { code: 15, exclusive: !1, mathematicalGreek: 10 },
        ornamentSets: {
          code: 16,
          exclusive: !0,
          noOrnaments: 0,
          dingbats: 1,
          piCharacters: 2,
          fleurons: 3,
          decorativeBorders: 4,
          internationalSymbols: 5,
          mathSymbols: 6,
        },
        characterAlternatives: { code: 17, exclusive: !0, noAlternates: 0 },
        designComplexity: {
          code: 18,
          exclusive: !0,
          designLevel1: 0,
          designLevel2: 1,
          designLevel3: 2,
          designLevel4: 3,
          designLevel5: 4,
        },
        styleOptions: {
          code: 19,
          exclusive: !0,
          noStyleOptions: 0,
          displayText: 1,
          engravedText: 2,
          illuminatedCaps: 3,
          titlingCaps: 4,
          tallCaps: 5,
        },
        characterShape: {
          code: 20,
          exclusive: !0,
          traditionalCharacters: 0,
          simplifiedCharacters: 1,
          JIS1978Characters: 2,
          JIS1983Characters: 3,
          JIS1990Characters: 4,
          traditionalAltOne: 5,
          traditionalAltTwo: 6,
          traditionalAltThree: 7,
          traditionalAltFour: 8,
          traditionalAltFive: 9,
          expertCharacters: 10,
          JIS2004Characters: 11,
          hojoCharacters: 12,
          NLCCharacters: 13,
          traditionalNamesCharacters: 14,
        },
        numberCase: {
          code: 21,
          exclusive: !0,
          lowerCaseNumbers: 0,
          upperCaseNumbers: 1,
        },
        textSpacing: {
          code: 22,
          exclusive: !0,
          proportionalText: 0,
          monospacedText: 1,
          halfWidthText: 2,
          thirdWidthText: 3,
          quarterWidthText: 4,
          altProportionalText: 5,
          altHalfWidthText: 6,
        },
        transliteration: { code: 23, exclusive: !0, noTransliteration: 0 },
        annotation: {
          code: 24,
          exclusive: !0,
          noAnnotation: 0,
          boxAnnotation: 1,
          roundedBoxAnnotation: 2,
          circleAnnotation: 3,
          invertedCircleAnnotation: 4,
          parenthesisAnnotation: 5,
          periodAnnotation: 6,
          romanNumeralAnnotation: 7,
          diamondAnnotation: 8,
          invertedBoxAnnotation: 9,
          invertedRoundedBoxAnnotation: 10,
        },
        kanaSpacing: {
          code: 25,
          exclusive: !0,
          fullWidthKana: 0,
          proportionalKana: 1,
        },
        ideographicSpacing: {
          code: 26,
          exclusive: !0,
          fullWidthIdeographs: 0,
          proportionalIdeographs: 1,
          halfWidthIdeographs: 2,
        },
        unicodeDecomposition: {
          code: 27,
          exclusive: !1,
          canonicalComposition: 0,
          compatibilityComposition: 2,
          transcodingComposition: 4,
        },
        rubyKana: { code: 28, exclusive: !1, rubyKana: 2 },
        CJKSymbolAlternatives: {
          code: 29,
          exclusive: !0,
          noCJKSymbolAlternatives: 0,
          CJKSymbolAltOne: 1,
          CJKSymbolAltTwo: 2,
          CJKSymbolAltThree: 3,
          CJKSymbolAltFour: 4,
          CJKSymbolAltFive: 5,
        },
        ideographicAlternatives: {
          code: 30,
          exclusive: !0,
          noIdeographicAlternatives: 0,
          ideographicAltOne: 1,
          ideographicAltTwo: 2,
          ideographicAltThree: 3,
          ideographicAltFour: 4,
          ideographicAltFive: 5,
        },
        CJKVerticalRomanPlacement: {
          code: 31,
          exclusive: !0,
          CJKVerticalRomanCentered: 0,
          CJKVerticalRomanHBaseline: 1,
        },
        italicCJKRoman: { code: 32, exclusive: !1, CJKItalicRoman: 2 },
        caseSensitiveLayout: {
          code: 33,
          exclusive: !1,
          caseSensitiveLayout: 0,
          caseSensitiveSpacing: 2,
        },
        alternateKana: {
          code: 34,
          exclusive: !1,
          alternateHorizKana: 0,
          alternateVertKana: 2,
        },
        stylisticAlternatives: {
          code: 35,
          exclusive: !1,
          noStylisticAlternates: 0,
          stylisticAltOne: 2,
          stylisticAltTwo: 4,
          stylisticAltThree: 6,
          stylisticAltFour: 8,
          stylisticAltFive: 10,
          stylisticAltSix: 12,
          stylisticAltSeven: 14,
          stylisticAltEight: 16,
          stylisticAltNine: 18,
          stylisticAltTen: 20,
          stylisticAltEleven: 22,
          stylisticAltTwelve: 24,
          stylisticAltThirteen: 26,
          stylisticAltFourteen: 28,
          stylisticAltFifteen: 30,
          stylisticAltSixteen: 32,
          stylisticAltSeventeen: 34,
          stylisticAltEighteen: 36,
          stylisticAltNineteen: 38,
          stylisticAltTwenty: 40,
        },
        contextualAlternates: {
          code: 36,
          exclusive: !1,
          contextualAlternates: 0,
          swashAlternates: 2,
          contextualSwashAlternates: 4,
        },
        lowerCase: {
          code: 37,
          exclusive: !0,
          defaultLowerCase: 0,
          lowerCaseSmallCaps: 1,
          lowerCasePetiteCaps: 2,
        },
        upperCase: {
          code: 38,
          exclusive: !0,
          defaultUpperCase: 0,
          upperCaseSmallCaps: 1,
          upperCasePetiteCaps: 2,
        },
        languageTag: { code: 39, exclusive: !0 },
        CJKRomanSpacing: {
          code: 103,
          exclusive: !0,
          halfWidthCJKRoman: 0,
          proportionalCJKRoman: 1,
          defaultCJKRoman: 2,
          fullWidthCJKRoman: 3,
        },
      },
      Md = function (e, t) {
        return [Rd[e].code, Rd[e][t]];
      },
      Fd = {
        rlig: Md("ligatures", "requiredLigatures"),
        clig: Md("ligatures", "contextualLigatures"),
        dlig: Md("ligatures", "rareLigatures"),
        hlig: Md("ligatures", "historicalLigatures"),
        liga: Md("ligatures", "commonLigatures"),
        hist: Md("ligatures", "historicalLigatures"),
        smcp: Md("lowerCase", "lowerCaseSmallCaps"),
        pcap: Md("lowerCase", "lowerCasePetiteCaps"),
        frac: Md("fractions", "diagonalFractions"),
        dnom: Md("fractions", "diagonalFractions"),
        numr: Md("fractions", "diagonalFractions"),
        afrc: Md("fractions", "verticalFractions"),
        case: Md("caseSensitiveLayout", "caseSensitiveLayout"),
        ccmp: Md("unicodeDecomposition", "canonicalComposition"),
        cpct: Md("CJKVerticalRomanPlacement", "CJKVerticalRomanCentered"),
        valt: Md("CJKVerticalRomanPlacement", "CJKVerticalRomanCentered"),
        swsh: Md("contextualAlternates", "swashAlternates"),
        cswh: Md("contextualAlternates", "contextualSwashAlternates"),
        curs: Md("cursiveConnection", "cursive"),
        c2pc: Md("upperCase", "upperCasePetiteCaps"),
        c2sc: Md("upperCase", "upperCaseSmallCaps"),
        init: Md("smartSwash", "wordInitialSwashes"),
        fin2: Md("smartSwash", "wordFinalSwashes"),
        medi: Md("smartSwash", "nonFinalSwashes"),
        med2: Md("smartSwash", "nonFinalSwashes"),
        fin3: Md("smartSwash", "wordFinalSwashes"),
        fina: Md("smartSwash", "wordFinalSwashes"),
        pkna: Md("kanaSpacing", "proportionalKana"),
        half: Md("textSpacing", "halfWidthText"),
        halt: Md("textSpacing", "altHalfWidthText"),
        hkna: Md("alternateKana", "alternateHorizKana"),
        vkna: Md("alternateKana", "alternateVertKana"),
        ital: Md("italicCJKRoman", "CJKItalicRoman"),
        lnum: Md("numberCase", "upperCaseNumbers"),
        onum: Md("numberCase", "lowerCaseNumbers"),
        mgrk: Md("mathematicalExtras", "mathematicalGreek"),
        calt: Md("contextualAlternates", "contextualAlternates"),
        vrt2: Md("verticalSubstitution", "substituteVerticalForms"),
        vert: Md("verticalSubstitution", "substituteVerticalForms"),
        tnum: Md("numberSpacing", "monospacedNumbers"),
        pnum: Md("numberSpacing", "proportionalNumbers"),
        sups: Md("verticalPosition", "superiors"),
        subs: Md("verticalPosition", "inferiors"),
        ordn: Md("verticalPosition", "ordinals"),
        pwid: Md("textSpacing", "proportionalText"),
        hwid: Md("textSpacing", "halfWidthText"),
        qwid: Md("textSpacing", "quarterWidthText"),
        twid: Md("textSpacing", "thirdWidthText"),
        fwid: Md("textSpacing", "proportionalText"),
        palt: Md("textSpacing", "altProportionalText"),
        trad: Md("characterShape", "traditionalCharacters"),
        smpl: Md("characterShape", "simplifiedCharacters"),
        jp78: Md("characterShape", "JIS1978Characters"),
        jp83: Md("characterShape", "JIS1983Characters"),
        jp90: Md("characterShape", "JIS1990Characters"),
        jp04: Md("characterShape", "JIS2004Characters"),
        expt: Md("characterShape", "expertCharacters"),
        hojo: Md("characterShape", "hojoCharacters"),
        nlck: Md("characterShape", "NLCCharacters"),
        tnam: Md("characterShape", "traditionalNamesCharacters"),
        ruby: Md("rubyKana", "rubyKana"),
        titl: Md("styleOptions", "titlingCaps"),
        zero: Md("typographicExtras", "slashedZero"),
        ss01: Md("stylisticAlternatives", "stylisticAltOne"),
        ss02: Md("stylisticAlternatives", "stylisticAltTwo"),
        ss03: Md("stylisticAlternatives", "stylisticAltThree"),
        ss04: Md("stylisticAlternatives", "stylisticAltFour"),
        ss05: Md("stylisticAlternatives", "stylisticAltFive"),
        ss06: Md("stylisticAlternatives", "stylisticAltSix"),
        ss07: Md("stylisticAlternatives", "stylisticAltSeven"),
        ss08: Md("stylisticAlternatives", "stylisticAltEight"),
        ss09: Md("stylisticAlternatives", "stylisticAltNine"),
        ss10: Md("stylisticAlternatives", "stylisticAltTen"),
        ss11: Md("stylisticAlternatives", "stylisticAltEleven"),
        ss12: Md("stylisticAlternatives", "stylisticAltTwelve"),
        ss13: Md("stylisticAlternatives", "stylisticAltThirteen"),
        ss14: Md("stylisticAlternatives", "stylisticAltFourteen"),
        ss15: Md("stylisticAlternatives", "stylisticAltFifteen"),
        ss16: Md("stylisticAlternatives", "stylisticAltSixteen"),
        ss17: Md("stylisticAlternatives", "stylisticAltSeventeen"),
        ss18: Md("stylisticAlternatives", "stylisticAltEighteen"),
        ss19: Md("stylisticAlternatives", "stylisticAltNineteen"),
        ss20: Md("stylisticAlternatives", "stylisticAltTwenty"),
      },
      Ud = 1;
    Ud <= 99;
    Ud++
  )
    Fd["cv" + ("00" + Ud).slice(-2)] = [Rd.characterAlternatives.code, Ud];
  var Nd,
    jd = {};
  for (var Gd in Fd) {
    var Vd = Fd[Gd];
    null == jd[Vd[0]] && (jd[Vd[0]] = {}), (jd[Vd[0]][Vd[1]] = Gd);
  }
  function _d(e) {
    var t = e[0],
      r = e[1];
    if (isNaN(t)) var n = Rd[t] && Rd[t].code;
    else n = t;
    if (isNaN(r)) var i = Rd[t] && Rd[t][r];
    else i = r;
    return [n, i];
  }
  var qd,
    Wd =
      (ci(
        (Nd = (function () {
          function e(e) {
            this.table = e;
          }
          var t = e.prototype;
          return (
            (t.lookup = function (e) {
              switch (this.table.version) {
                case 0:
                  return this.table.values.getItem(e);
                case 2:
                case 4:
                  for (
                    var t = 0, r = this.table.binarySearchHeader.nUnits - 1;
                    t <= r;

                  ) {
                    var n = (t + r) >> 1;
                    if (65535 === (o = this.table.segments[n]).firstGlyph)
                      return null;
                    if (e < o.firstGlyph) r = n - 1;
                    else {
                      if (!(e > o.lastGlyph))
                        return 2 === this.table.version
                          ? o.value
                          : o.values[e - o.firstGlyph];
                      t = n + 1;
                    }
                  }
                  return null;
                case 6:
                  for (
                    var i = 0, a = this.table.binarySearchHeader.nUnits - 1;
                    i <= a;

                  ) {
                    var o;
                    n = (i + a) >> 1;
                    if (65535 === (o = this.table.segments[n]).glyph)
                      return null;
                    if (e < o.glyph) a = n - 1;
                    else {
                      if (!(e > o.glyph)) return o.value;
                      i = n + 1;
                    }
                  }
                  return null;
                case 8:
                  return this.table.values[e - this.table.firstGlyph];
                default:
                  throw new Error(
                    "Unknown lookup table format: " + this.table.version
                  );
              }
            }),
            (t.glyphsForValue = function (e) {
              var t = [];
              switch (this.table.version) {
                case 2:
                case 4:
                  var r = this.table.segments,
                    n = Array.isArray(r),
                    i = 0;
                  for (r = n ? r : r[Symbol.iterator](); ; ) {
                    var a;
                    if (n) {
                      if (i >= r.length) break;
                      a = r[i++];
                    } else {
                      if ((i = r.next()).done) break;
                      a = i.value;
                    }
                    var o = a;
                    if (2 === this.table.version && o.value === e)
                      t.push.apply(t, Ru(o.firstGlyph, o.lastGlyph + 1));
                    else
                      for (var s = 0; s < o.values.length; s++)
                        o.values[s] === e && t.push(o.firstGlyph + s);
                  }
                  break;
                case 6:
                  var u = this.table.segments,
                    l = Array.isArray(u),
                    c = 0;
                  for (u = l ? u : u[Symbol.iterator](); ; ) {
                    var f;
                    if (l) {
                      if (c >= u.length) break;
                      f = u[c++];
                    } else {
                      if ((c = u.next()).done) break;
                      f = c.value;
                    }
                    var h = f;
                    h.value === e && t.push(h.glyph);
                  }
                  break;
                case 8:
                  for (var d = 0; d < this.table.values.length; d++)
                    this.table.values[d] === e &&
                      t.push(this.table.firstGlyph + d);
                  break;
                default:
                  throw new Error(
                    "Unknown lookup table format: " + this.table.version
                  );
              }
              return t;
            }),
            e
          );
        })()).prototype,
        "glyphsForValue",
        [fi],
        Object.getOwnPropertyDescriptor(Nd.prototype, "glyphsForValue"),
        Nd.prototype
      ),
      Nd),
    Hd = (function () {
      function e(e) {
        (this.stateTable = e), (this.lookupTable = new Wd(e.classTable));
      }
      var t = e.prototype;
      return (
        (t.process = function (e, t, r) {
          for (
            var n = 0, i = t ? e.length - 1 : 0, a = t ? -1 : 1;
            (1 === a && i <= e.length) || (-1 === a && i >= -1);

          ) {
            var o = null,
              s = 1,
              u = !0;
            i === e.length || -1 === i
              ? (s = 0)
              : 65535 === (o = e[i]).id
              ? (s = 2)
              : null == (s = this.lookupTable.lookup(o.id)) && (s = 1);
            var l = this.stateTable.stateArray.getItem(n)[s],
              c = this.stateTable.entryTable.getItem(l);
            0 !== s && 2 !== s && (r(o, c, i), (u = !(16384 & c.flags))),
              (n = c.newState),
              u && (i += a);
          }
          return e;
        }),
        (t.traverse = function (e, t, r) {
          if (
            (void 0 === t && (t = 0),
            void 0 === r && (r = new Set()),
            !r.has(t))
          ) {
            r.add(t);
            for (
              var n = this.stateTable,
                i = n.nClasses,
                a = n.stateArray,
                o = n.entryTable,
                s = a.getItem(t),
                u = 4;
              u < i;
              u++
            ) {
              var l = s[u],
                c = o.getItem(l),
                f = this.lookupTable.glyphsForValue(u),
                h = Array.isArray(f),
                d = 0;
              for (f = h ? f : f[Symbol.iterator](); ; ) {
                var p;
                if (h) {
                  if (d >= f.length) break;
                  p = f[d++];
                } else {
                  if ((d = f.next()).done) break;
                  p = d.value;
                }
                var g = p;
                e.enter && e.enter(g, c),
                  0 !== c.newState && this.traverse(e, c.newState, r),
                  e.exit && e.exit(g, c);
              }
            }
          }
        }),
        e
      );
    })(),
    Yd =
      (ci(
        (qd = (function () {
          function e(e) {
            (this.processIndicRearragement =
              this.processIndicRearragement.bind(this)),
              (this.processContextualSubstitution =
                this.processContextualSubstitution.bind(this)),
              (this.processLigature = this.processLigature.bind(this)),
              (this.processNoncontextualSubstitutions =
                this.processNoncontextualSubstitutions.bind(this)),
              (this.processGlyphInsertion =
                this.processGlyphInsertion.bind(this)),
              (this.font = e),
              (this.morx = e.morx),
              (this.inputCache = null);
          }
          var t = e.prototype;
          return (
            (t.process = function (e, t) {
              void 0 === t && (t = {});
              var r = this.morx.chains,
                n = Array.isArray(r),
                i = 0;
              for (r = n ? r : r[Symbol.iterator](); ; ) {
                var a;
                if (n) {
                  if (i >= r.length) break;
                  a = r[i++];
                } else {
                  if ((i = r.next()).done) break;
                  a = i.value;
                }
                var o = a,
                  s = o.defaultFlags,
                  u = o.features,
                  l = Array.isArray(u),
                  c = 0;
                for (u = l ? u : u[Symbol.iterator](); ; ) {
                  var f;
                  if (l) {
                    if (c >= u.length) break;
                    f = u[c++];
                  } else {
                    if ((c = u.next()).done) break;
                    f = c.value;
                  }
                  var h,
                    d = f;
                  (h = t[d.featureType]) &&
                    h[d.featureSetting] &&
                    ((s &= d.disableFlags), (s |= d.enableFlags));
                }
                var p = o.subtables,
                  g = Array.isArray(p),
                  v = 0;
                for (p = g ? p : p[Symbol.iterator](); ; ) {
                  var y;
                  if (g) {
                    if (v >= p.length) break;
                    y = p[v++];
                  } else {
                    if ((v = p.next()).done) break;
                    y = v.value;
                  }
                  var b = y;
                  b.subFeatureFlags & s && this.processSubtable(b, e);
                }
              }
              for (var m = e.length - 1; m >= 0; )
                65535 === e[m].id && e.splice(m, 1), m--;
              return e;
            }),
            (t.processSubtable = function (e, t) {
              if (
                ((this.subtable = e),
                (this.glyphs = t),
                4 !== this.subtable.type)
              ) {
                (this.ligatureStack = []),
                  (this.markedGlyph = null),
                  (this.firstGlyph = null),
                  (this.lastGlyph = null),
                  (this.markedIndex = null);
                var r = this.getStateMachine(e),
                  n = this.getProcessor(),
                  i = !!(4194304 & this.subtable.coverage);
                return r.process(this.glyphs, i, n);
              }
              this.processNoncontextualSubstitutions(
                this.subtable,
                this.glyphs
              );
            }),
            (t.getStateMachine = function (e) {
              return new Hd(e.table.stateTable);
            }),
            (t.getProcessor = function () {
              switch (this.subtable.type) {
                case 0:
                  return this.processIndicRearragement;
                case 1:
                  return this.processContextualSubstitution;
                case 2:
                  return this.processLigature;
                case 4:
                  return this.processNoncontextualSubstitutions;
                case 5:
                  return this.processGlyphInsertion;
                default:
                  throw new Error(
                    "Invalid morx subtable type: " + this.subtable.type
                  );
              }
            }),
            (t.processIndicRearragement = function (e, t, r) {
              32768 & t.flags && (this.firstGlyph = r),
                8192 & t.flags && (this.lastGlyph = r),
                (function (e, t, r, n) {
                  switch (t) {
                    case 0:
                      return e;
                    case 1:
                      return Zd(e, [r, 1], [n, 0]);
                    case 2:
                      return Zd(e, [r, 0], [n, 1]);
                    case 3:
                      return Zd(e, [r, 1], [n, 1]);
                    case 4:
                      return Zd(e, [r, 2], [n, 0]);
                    case 5:
                      return Zd(e, [r, 2], [n, 0], !0, !1);
                    case 6:
                      return Zd(e, [r, 0], [n, 2]);
                    case 7:
                      return Zd(e, [r, 0], [n, 2], !1, !0);
                    case 8:
                      return Zd(e, [r, 1], [n, 2]);
                    case 9:
                      return Zd(e, [r, 1], [n, 2], !1, !0);
                    case 10:
                      return Zd(e, [r, 2], [n, 1]);
                    case 11:
                      return Zd(e, [r, 2], [n, 1], !0, !1);
                    case 12:
                      return Zd(e, [r, 2], [n, 2]);
                    case 13:
                      return Zd(e, [r, 2], [n, 2], !0, !1);
                    case 14:
                      return Zd(e, [r, 2], [n, 2], !1, !0);
                    case 15:
                      return Zd(e, [r, 2], [n, 2], !0, !0);
                    default:
                      throw new Error("Unknown verb: " + t);
                  }
                })(this.glyphs, 15 & t.flags, this.firstGlyph, this.lastGlyph);
            }),
            (t.processContextualSubstitution = function (e, t, r) {
              var n = this.subtable.table.substitutionTable.items;
              if (65535 !== t.markIndex) {
                var i = n.getItem(t.markIndex),
                  a = new Wd(i);
                (e = this.glyphs[this.markedGlyph]),
                  (o = a.lookup(e.id)) &&
                    (this.glyphs[this.markedGlyph] = this.font.getGlyph(
                      o,
                      e.codePoints
                    ));
              }
              if (65535 !== t.currentIndex) {
                var o,
                  s = n.getItem(t.currentIndex),
                  u = new Wd(s);
                (e = this.glyphs[r]),
                  (o = u.lookup(e.id)) &&
                    (this.glyphs[r] = this.font.getGlyph(o, e.codePoints));
              }
              32768 & t.flags && (this.markedGlyph = r);
            }),
            (t.processLigature = function (e, t, r) {
              if (
                (32768 & t.flags && this.ligatureStack.push(r), 8192 & t.flags)
              ) {
                for (
                  var n,
                    i = this.subtable.table.ligatureActions,
                    a = this.subtable.table.components,
                    o = this.subtable.table.ligatureList,
                    s = t.action,
                    u = !1,
                    l = 0,
                    c = [],
                    f = [];
                  !u;

                ) {
                  var h,
                    d = this.ligatureStack.pop();
                  (h = c).unshift.apply(h, this.glyphs[d].codePoints);
                  var p = i.getItem(s++);
                  u = !!(2147483648 & p);
                  var g = !!(1073741824 & p),
                    v = ((1073741823 & p) << 2) >> 2;
                  if (((v += this.glyphs[d].id), (l += a.getItem(v)), u || g)) {
                    var y = o.getItem(l);
                    (this.glyphs[d] = this.font.getGlyph(y, c)),
                      f.push(d),
                      (l = 0),
                      (c = []);
                  } else this.glyphs[d] = this.font.getGlyph(65535);
                }
                (n = this.ligatureStack).push.apply(n, f);
              }
            }),
            (t.processNoncontextualSubstitutions = function (e, t, r) {
              var n = new Wd(e.table.lookupTable);
              for (r = 0; r < t.length; r++) {
                var i = t[r];
                if (65535 !== i.id) {
                  var a = n.lookup(i.id);
                  a && (t[r] = this.font.getGlyph(a, i.codePoints));
                }
              }
            }),
            (t._insertGlyphs = function (e, t, r, n) {
              for (var i, a = []; r--; ) {
                var o = this.subtable.table.insertionActions.getItem(t++);
                a.push(this.font.getGlyph(o));
              }
              n || e++, (i = this.glyphs).splice.apply(i, [e, 0].concat(a));
            }),
            (t.processGlyphInsertion = function (e, t, r) {
              if (
                (32768 & t.flags && (this.markedIndex = r),
                65535 !== t.markedInsertIndex)
              ) {
                var n = (31 & t.flags) >>> 5,
                  i = !!(1024 & t.flags);
                this._insertGlyphs(this.markedIndex, t.markedInsertIndex, n, i);
              }
              if (65535 !== t.currentInsertIndex) {
                var a = (992 & t.flags) >>> 5,
                  o = !!(2048 & t.flags);
                this._insertGlyphs(r, t.currentInsertIndex, a, o);
              }
            }),
            (t.getSupportedFeatures = function () {
              var e = [],
                t = this.morx.chains,
                r = Array.isArray(t),
                n = 0;
              for (t = r ? t : t[Symbol.iterator](); ; ) {
                var i;
                if (r) {
                  if (n >= t.length) break;
                  i = t[n++];
                } else {
                  if ((n = t.next()).done) break;
                  i = n.value;
                }
                var a = i.features,
                  o = Array.isArray(a),
                  s = 0;
                for (a = o ? a : a[Symbol.iterator](); ; ) {
                  var u;
                  if (o) {
                    if (s >= a.length) break;
                    u = a[s++];
                  } else {
                    if ((s = a.next()).done) break;
                    u = s.value;
                  }
                  var l = u;
                  e.push([l.featureType, l.featureSetting]);
                }
              }
              return e;
            }),
            (t.generateInputs = function (e) {
              return (
                this.inputCache || this.generateInputCache(),
                this.inputCache[e] || []
              );
            }),
            (t.generateInputCache = function () {
              this.inputCache = {};
              var e = this.morx.chains,
                t = Array.isArray(e),
                r = 0;
              for (e = t ? e : e[Symbol.iterator](); ; ) {
                var n;
                if (t) {
                  if (r >= e.length) break;
                  n = e[r++];
                } else {
                  if ((r = e.next()).done) break;
                  n = r.value;
                }
                var i = n,
                  a = i.defaultFlags,
                  o = i.subtables,
                  s = Array.isArray(o),
                  u = 0;
                for (o = s ? o : o[Symbol.iterator](); ; ) {
                  var l;
                  if (s) {
                    if (u >= o.length) break;
                    l = o[u++];
                  } else {
                    if ((u = o.next()).done) break;
                    l = u.value;
                  }
                  var c = l;
                  c.subFeatureFlags & a && this.generateInputsForSubtable(c);
                }
              }
            }),
            (t.generateInputsForSubtable = function (e) {
              var t = this;
              if (2 === e.type) {
                if (!!(4194304 & e.coverage))
                  throw new Error("Reverse subtable, not supported.");
                (this.subtable = e), (this.ligatureStack = []);
                var r = this.getStateMachine(e),
                  n = this.getProcessor(),
                  i = [],
                  a = [];
                (this.glyphs = []),
                  r.traverse({
                    enter: function (e, r) {
                      var o = t.glyphs;
                      a.push({
                        glyphs: o.slice(),
                        ligatureStack: t.ligatureStack.slice(),
                      });
                      var s = t.font.getGlyph(e);
                      i.push(s),
                        o.push(i[i.length - 1]),
                        n(o[o.length - 1], r, o.length - 1);
                      for (var u = 0, l = 0, c = 0; c < o.length && u <= 1; c++)
                        65535 !== o[c].id && (u++, (l = o[c].id));
                      if (1 === u) {
                        var f = i.map(function (e) {
                            return e.id;
                          }),
                          h = t.inputCache[l];
                        h ? h.push(f) : (t.inputCache[l] = [f]);
                      }
                    },
                    exit: function () {
                      var e = a.pop();
                      (t.glyphs = e.glyphs),
                        (t.ligatureStack = e.ligatureStack),
                        i.pop();
                    },
                  });
              }
            }),
            e
          );
        })()).prototype,
        "getStateMachine",
        [fi],
        Object.getOwnPropertyDescriptor(qd.prototype, "getStateMachine"),
        qd.prototype
      ),
      qd);
  function Zd(e, t, r, n, i) {
    void 0 === n && (n = !1), void 0 === i && (i = !1);
    var a = e.splice(r[0] - (r[1] - 1), r[1]);
    i && a.reverse();
    var o = e.splice.apply(e, [t[0], t[1]].concat(a));
    return (
      n && o.reverse(), e.splice.apply(e, [r[0] - (t[1] - 1), 0].concat(o)), e
    );
  }
  var Xd = (function () {
      function e(e) {
        (this.font = e),
          (this.morxProcessor = new Yd(e)),
          (this.fallbackPosition = !1);
      }
      var t = e.prototype;
      return (
        (t.substitute = function (e) {
          "rtl" === e.direction && e.glyphs.reverse(),
            this.morxProcessor.process(
              e.glyphs,
              (function (e) {
                var t = {};
                for (var r in e) {
                  var n;
                  (n = Fd[r]) &&
                    (null == t[n[0]] && (t[n[0]] = {}), (t[n[0]][n[1]] = e[r]));
                }
                return t;
              })(e.features)
            );
        }),
        (t.getAvailableFeatures = function (e, t) {
          return (function (e) {
            var t = {};
            if (Array.isArray(e))
              for (var r = 0; r < e.length; r++) {
                var n,
                  i = _d(e[r]);
                (n = jd[i[0]] && jd[i[0]][i[1]]) && (t[n] = !0);
              }
            else if ("object" == typeof e)
              for (var a in e) {
                var o = e[a];
                for (var s in o) {
                  var u = void 0,
                    l = _d([a, s]);
                  o[s] && (u = jd[l[0]] && jd[l[0]][l[1]]) && (t[u] = !0);
                }
              }
            return Object.keys(t);
          })(this.morxProcessor.getSupportedFeatures());
        }),
        (t.stringsForGlyph = function (e) {
          var t = this.morxProcessor.generateInputs(e),
            r = new Set(),
            n = t,
            i = Array.isArray(n),
            a = 0;
          for (n = i ? n : n[Symbol.iterator](); ; ) {
            var o;
            if (i) {
              if (a >= n.length) break;
              o = n[a++];
            } else {
              if ((a = n.next()).done) break;
              o = a.value;
            }
            var s = o;
            this._addStrings(s, 0, r, "");
          }
          return r;
        }),
        (t._addStrings = function (e, t, r, n) {
          var i = this.font._cmapProcessor.codePointsForGlyph(e[t]),
            a = Array.isArray(i),
            o = 0;
          for (i = a ? i : i[Symbol.iterator](); ; ) {
            var s;
            if (a) {
              if (o >= i.length) break;
              s = i[o++];
            } else {
              if ((o = i.next()).done) break;
              s = o.value;
            }
            var u = s,
              l = n + String.fromCodePoint(u);
            t < e.length - 1 ? this._addStrings(e, t + 1, r, l) : r.add(l);
          }
        }),
        e
      );
    })(),
    Kd = (function () {
      function e(e, t, r) {
        (this.font = e),
          (this.script = t),
          (this.direction = r),
          (this.stages = []),
          (this.globalFeatures = {}),
          (this.allFeatures = {});
      }
      var t = e.prototype;
      return (
        (t._addFeatures = function (e, t) {
          var r = this.stages.length - 1,
            n = this.stages[r],
            i = e,
            a = Array.isArray(i),
            o = 0;
          for (i = a ? i : i[Symbol.iterator](); ; ) {
            var s;
            if (a) {
              if (o >= i.length) break;
              s = i[o++];
            } else {
              if ((o = i.next()).done) break;
              s = o.value;
            }
            var u = s;
            null == this.allFeatures[u] &&
              (n.push(u),
              (this.allFeatures[u] = r),
              t && (this.globalFeatures[u] = !0));
          }
        }),
        (t.add = function (e, t) {
          if (
            (void 0 === t && (t = !0),
            0 === this.stages.length && this.stages.push([]),
            "string" == typeof e && (e = [e]),
            Array.isArray(e))
          )
            this._addFeatures(e, t);
          else {
            if ("object" != typeof e)
              throw new Error("Unsupported argument to ShapingPlan#add");
            this._addFeatures(e.global || [], !0),
              this._addFeatures(e.local || [], !1);
          }
        }),
        (t.addStage = function (e, t) {
          "function" == typeof e
            ? this.stages.push(e, [])
            : (this.stages.push([]), this.add(e, t));
        }),
        (t.setFeatureOverrides = function (e) {
          if (Array.isArray(e)) this.add(e);
          else if ("object" == typeof e)
            for (var t in e)
              if (e[t]) this.add(t);
              else if (null != this.allFeatures[t]) {
                var r = this.stages[this.allFeatures[t]];
                r.splice(r.indexOf(t), 1),
                  delete this.allFeatures[t],
                  delete this.globalFeatures[t];
              }
        }),
        (t.assignGlobalFeatures = function (e) {
          var t = e,
            r = Array.isArray(t),
            n = 0;
          for (t = r ? t : t[Symbol.iterator](); ; ) {
            var i;
            if (r) {
              if (n >= t.length) break;
              i = t[n++];
            } else {
              if ((n = t.next()).done) break;
              i = n.value;
            }
            var a = i;
            for (var o in this.globalFeatures) a.features[o] = !0;
          }
        }),
        (t.process = function (e, t, r) {
          var n = this.stages,
            i = Array.isArray(n),
            a = 0;
          for (n = i ? n : n[Symbol.iterator](); ; ) {
            var o;
            if (i) {
              if (a >= n.length) break;
              o = n[a++];
            } else {
              if ((a = n.next()).done) break;
              o = a.value;
            }
            var s = o;
            "function" == typeof s
              ? r || s(this.font, t, this)
              : s.length > 0 && e.applyFeatures(s, t, r);
          }
        }),
        e
      );
    })(),
    Jd = ["rvrn"],
    Qd = ["ccmp", "locl", "rlig", "mark", "mkmk"],
    $d = ["frac", "numr", "dnom"],
    ep = ["calt", "clig", "liga", "rclt", "curs", "kern"],
    tp = { ltr: ["ltra", "ltrm"], rtl: ["rtla", "rtlm"] },
    rp = (function () {
      function e() {}
      return (
        (e.plan = function (e, t, r) {
          this.planPreprocessing(e),
            this.planFeatures(e),
            this.planPostprocessing(e, r),
            e.assignGlobalFeatures(t),
            this.assignFeatures(e, t);
        }),
        (e.planPreprocessing = function (e) {
          e.add({ global: [].concat(Jd, tp[e.direction]), local: $d });
        }),
        (e.planFeatures = function (e) {}),
        (e.planPostprocessing = function (e, t) {
          e.add([].concat(Qd, ep)), e.setFeatureOverrides(t);
        }),
        (e.assignFeatures = function (e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            if (8260 === n.codePoints[0]) {
              for (
                var i = r, a = r + 1;
                i > 0 && wd.isDigit(t[i - 1].codePoints[0]);

              )
                (t[i - 1].features.numr = !0),
                  (t[i - 1].features.frac = !0),
                  i--;
              for (; a < t.length && wd.isDigit(t[a].codePoints[0]); )
                (t[a].features.dnom = !0), (t[a].features.frac = !0), a++;
              (n.features.frac = !0), (r = a - 1);
            }
          }
        }),
        e
      );
    })();
  ui(rp, "zeroMarkWidths", "AFTER_GPOS");
  var np = new ul(
      td.inflate(
        nd(
          "eJwBpgFZ/gABEAAAAAAAAAAxoAGVAWr+7dgrTwNBFAXg2QdNKYp/QCWSBIMlBI9EIcHgwIEDicQgUQRJUEgcEonC4JDgMJzSmeRmmNnO7s4+KOcmX2a623n27iMdp0qtwhpswFh//ivlDuzCHuzDIRzDKZzDBVzCFVyLdrdwpz9PPIj6o6jTfHuCI+0ZXuC1B/Nqy5uov/dgPkRERERERERETZn8//PRg3kQEREREc2zfHHqbNiMLfR9AvfwCesjpQ5G03M3KLeVUpvD5tb3BVn2+/gSji07jndlJU1+MBj/ORIPed5VjxW57jez5I7S5mpTlmzXp5Bzkmu09ypkfTFU2ds2ZFY9ZB2uvDLnlSh9EeM6kOOFhFyzPFY3Fhz9D7Si3z80JzLRp91uEGH+qsRcXHlSN/eK9sZ1fta4odH1dVc393ztZ93ry+Se/K7r2eabV9kcMvdk329cJRKrrd1PrGdx1znie/8w628rj+vmc9H6mujb974WO2LtcVpxnr5rL7FKU0/0WCHvMGlB/67xzFihcy3zfC/q036euOZn1+37ZZ3w7WMTefcNZvnVvA=="
        )
      )
    ),
    ip = ["isol", "fina", "fin2", "fin3", "medi", "med2", "init"],
    ap = {
      Non_Joining: 0,
      Left_Joining: 1,
      Right_Joining: 2,
      Dual_Joining: 3,
      Join_Causing: 3,
      ALAPH: 4,
      "DALATH RISH": 5,
      Transparent: 6,
    },
    op = "isol",
    sp = "fina",
    up = [
      [
        [null, null, 0],
        [null, op, 2],
        [null, op, 1],
        [null, op, 2],
        [null, op, 1],
        [null, op, 6],
      ],
      [
        [null, null, 0],
        [null, op, 2],
        [null, op, 1],
        [null, op, 2],
        [null, "fin2", 5],
        [null, op, 6],
      ],
      [
        [null, null, 0],
        [null, op, 2],
        ["init", sp, 1],
        ["init", sp, 3],
        ["init", sp, 4],
        ["init", sp, 6],
      ],
      [
        [null, null, 0],
        [null, op, 2],
        ["medi", sp, 1],
        ["medi", sp, 3],
        ["medi", sp, 4],
        ["medi", sp, 6],
      ],
      [
        [null, null, 0],
        [null, op, 2],
        ["med2", op, 1],
        ["med2", op, 2],
        ["med2", "fin2", 5],
        ["med2", op, 6],
      ],
      [
        [null, null, 0],
        [null, op, 2],
        [op, op, 1],
        [op, op, 2],
        [op, "fin2", 5],
        [op, op, 6],
      ],
      [
        [null, null, 0],
        [null, op, 2],
        [null, op, 1],
        [null, op, 2],
        [null, "fin3", 5],
        [null, op, 6],
      ],
    ],
    lp = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (
        li(t, e),
        (t.planFeatures = function (e) {
          e.add(["ccmp", "locl"]);
          for (var t = 0; t < ip.length; t++) {
            var r = ip[t];
            e.addStage(r, !1);
          }
          e.addStage("mset");
        }),
        (t.assignFeatures = function (t, r) {
          e.assignFeatures.call(this, t, r);
          for (var n = -1, i = 0, a = [], o = 0; o < r.length; o++) {
            var s,
              u,
              l = cp((d = r[o]).codePoints[0]);
            if (l !== ap.Transparent) {
              var c = up[i][l];
              (u = c[0]),
                (s = c[1]),
                (i = c[2]),
                null !== u && -1 !== n && (a[n] = u),
                (a[o] = s),
                (n = o);
            } else a[o] = null;
          }
          for (var f = 0; f < r.length; f++) {
            var h,
              d = r[f];
            (h = a[f]) && (d.features[h] = !0);
          }
        }),
        t
      );
    })(rp);
  function cp(e) {
    var t = np.get(e);
    if (t) return t - 1;
    var r = wd.getCategory(e);
    return "Mn" === r || "Me" === r || "Cf" === r
      ? ap.Transparent
      : ap.Non_Joining;
  }
  var fp = (function () {
      function e(e, t) {
        (this.glyphs = e), this.reset(t);
      }
      var t = e.prototype;
      return (
        (t.reset = function (e, t) {
          void 0 === e && (e = {}),
            void 0 === t && (t = 0),
            (this.options = e),
            (this.flags = e.flags || {}),
            (this.markAttachmentType = e.markAttachmentType || 0),
            (this.index = t);
        }),
        (t.shouldIgnore = function (e) {
          return (
            (this.flags.ignoreMarks && e.isMark) ||
            (this.flags.ignoreBaseGlyphs && e.isBase) ||
            (this.flags.ignoreLigatures && e.isLigature) ||
            (this.markAttachmentType &&
              e.isMark &&
              e.markAttachmentType !== this.markAttachmentType)
          );
        }),
        (t.move = function (e) {
          for (
            this.index += e;
            0 <= this.index &&
            this.index < this.glyphs.length &&
            this.shouldIgnore(this.glyphs[this.index]);

          )
            this.index += e;
          return 0 > this.index || this.index >= this.glyphs.length
            ? null
            : this.glyphs[this.index];
        }),
        (t.next = function () {
          return this.move(1);
        }),
        (t.prev = function () {
          return this.move(-1);
        }),
        (t.peek = function (e) {
          void 0 === e && (e = 1);
          var t = this.index,
            r = this.increment(e);
          return (this.index = t), r;
        }),
        (t.peekIndex = function (e) {
          void 0 === e && (e = 1);
          var t = this.index;
          this.increment(e);
          var r = this.index;
          return (this.index = t), r;
        }),
        (t.increment = function (e) {
          void 0 === e && (e = 1);
          var t = e < 0 ? -1 : 1;
          for (e = Math.abs(e); e--; ) this.move(t);
          return this.glyphs[this.index];
        }),
        si(e, [
          {
            key: "cur",
            get: function () {
              return this.glyphs[this.index] || null;
            },
          },
        ]),
        e
      );
    })(),
    hp = ["DFLT", "dflt", "latn"],
    dp = (function () {
      function e(e, t) {
        (this.font = e),
          (this.table = t),
          (this.script = null),
          (this.scriptTag = null),
          (this.language = null),
          (this.languageTag = null),
          (this.features = {}),
          (this.lookups = {}),
          (this.variationsIndex = e._variationProcessor
            ? this.findVariationsIndex(e._variationProcessor.normalizedCoords)
            : -1),
          this.selectScript(),
          (this.glyphs = []),
          (this.positions = []),
          (this.ligatureID = 1),
          (this.currentFeature = null);
      }
      var t = e.prototype;
      return (
        (t.findScript = function (e) {
          if (null == this.table.scriptList) return null;
          Array.isArray(e) || (e = [e]);
          var t = e,
            r = Array.isArray(t),
            n = 0;
          for (t = r ? t : t[Symbol.iterator](); ; ) {
            var i;
            if (r) {
              if (n >= t.length) break;
              i = t[n++];
            } else {
              if ((n = t.next()).done) break;
              i = n.value;
            }
            var a = i,
              o = this.table.scriptList,
              s = Array.isArray(o),
              u = 0;
            for (o = s ? o : o[Symbol.iterator](); ; ) {
              var l;
              if (s) {
                if (u >= o.length) break;
                l = o[u++];
              } else {
                if ((u = o.next()).done) break;
                l = u.value;
              }
              var c = l;
              if (c.tag === a) return c;
            }
          }
          return null;
        }),
        (t.selectScript = function (e, t, r) {
          var n,
            i = !1;
          if (!this.script || e !== this.scriptTag) {
            if (((n = this.findScript(e)) || (n = this.findScript(hp)), !n))
              return this.scriptTag;
            (this.scriptTag = n.tag),
              (this.script = n.script),
              (this.language = null),
              (this.languageTag = null),
              (i = !0);
          }
          if (
            ((r && r === this.direction) || (this.direction = r || Ld(e)),
            t && t.length < 4 && (t += " ".repeat(4 - t.length)),
            !t || t !== this.languageTag)
          ) {
            this.language = null;
            var a = this.script.langSysRecords,
              o = Array.isArray(a),
              s = 0;
            for (a = o ? a : a[Symbol.iterator](); ; ) {
              var u;
              if (o) {
                if (s >= a.length) break;
                u = a[s++];
              } else {
                if ((s = a.next()).done) break;
                u = s.value;
              }
              var l = u;
              if (l.tag === t) {
                (this.language = l.langSys), (this.languageTag = l.tag);
                break;
              }
            }
            this.language ||
              ((this.language = this.script.defaultLangSys),
              (this.languageTag = null)),
              (i = !0);
          }
          if (i && ((this.features = {}), this.language)) {
            var c = this.language.featureIndexes,
              f = Array.isArray(c),
              h = 0;
            for (c = f ? c : c[Symbol.iterator](); ; ) {
              var d;
              if (f) {
                if (h >= c.length) break;
                d = c[h++];
              } else {
                if ((h = c.next()).done) break;
                d = h.value;
              }
              var p = d,
                g = this.table.featureList[p],
                v = this.substituteFeatureForVariations(p);
              this.features[g.tag] = v || g.feature;
            }
          }
          return this.scriptTag;
        }),
        (t.lookupsForFeatures = function (e, t) {
          void 0 === e && (e = []);
          var r = [],
            n = e,
            i = Array.isArray(n),
            a = 0;
          for (n = i ? n : n[Symbol.iterator](); ; ) {
            var o;
            if (i) {
              if (a >= n.length) break;
              o = n[a++];
            } else {
              if ((a = n.next()).done) break;
              o = a.value;
            }
            var s = o,
              u = this.features[s];
            if (u) {
              var l = u.lookupListIndexes,
                c = Array.isArray(l),
                f = 0;
              for (l = c ? l : l[Symbol.iterator](); ; ) {
                var h;
                if (c) {
                  if (f >= l.length) break;
                  h = l[f++];
                } else {
                  if ((f = l.next()).done) break;
                  h = f.value;
                }
                var d = h;
                (t && -1 !== t.indexOf(d)) ||
                  r.push({
                    feature: s,
                    index: d,
                    lookup: this.table.lookupList.get(d),
                  });
              }
            }
          }
          return (
            r.sort(function (e, t) {
              return e.index - t.index;
            }),
            r
          );
        }),
        (t.substituteFeatureForVariations = function (e) {
          if (-1 === this.variationsIndex) return null;
          var t =
              this.table.featureVariations.featureVariationRecords[
                this.variationsIndex
              ].featureTableSubstitution.substitutions,
            r = Array.isArray(t),
            n = 0;
          for (t = r ? t : t[Symbol.iterator](); ; ) {
            var i;
            if (r) {
              if (n >= t.length) break;
              i = t[n++];
            } else {
              if ((n = t.next()).done) break;
              i = n.value;
            }
            var a = i;
            if (a.featureIndex === e) return a.alternateFeatureTable;
          }
          return null;
        }),
        (t.findVariationsIndex = function (e) {
          var t = this.table.featureVariations;
          if (!t) return -1;
          for (var r = t.featureVariationRecords, n = 0; n < r.length; n++) {
            var i = r[n].conditionSet.conditionTable;
            if (this.variationConditionsMatch(i, e)) return n;
          }
          return -1;
        }),
        (t.variationConditionsMatch = function (e, t) {
          return e.every(function (e) {
            var r = e.axisIndex < t.length ? t[e.axisIndex] : 0;
            return e.filterRangeMinValue <= r && r <= e.filterRangeMaxValue;
          });
        }),
        (t.applyFeatures = function (e, t, r) {
          var n = this.lookupsForFeatures(e);
          this.applyLookups(n, t, r);
        }),
        (t.applyLookups = function (e, t, r) {
          (this.glyphs = t),
            (this.positions = r),
            (this.glyphIterator = new fp(t));
          var n = e,
            i = Array.isArray(n),
            a = 0;
          for (n = i ? n : n[Symbol.iterator](); ; ) {
            var o;
            if (i) {
              if (a >= n.length) break;
              o = n[a++];
            } else {
              if ((a = n.next()).done) break;
              o = a.value;
            }
            var s = o,
              u = s.feature,
              l = s.lookup;
            for (
              this.currentFeature = u, this.glyphIterator.reset(l.flags);
              this.glyphIterator.index < t.length;

            )
              if (u in this.glyphIterator.cur.features) {
                var c = l.subTables,
                  f = Array.isArray(c),
                  h = 0;
                for (c = f ? c : c[Symbol.iterator](); ; ) {
                  var d;
                  if (f) {
                    if (h >= c.length) break;
                    d = c[h++];
                  } else {
                    if ((h = c.next()).done) break;
                    d = h.value;
                  }
                  var p = d;
                  if (this.applyLookup(l.lookupType, p)) break;
                }
                this.glyphIterator.next();
              } else this.glyphIterator.next();
          }
        }),
        (t.applyLookup = function (e, t) {
          throw new Error("applyLookup must be implemented by subclasses");
        }),
        (t.applyLookupList = function (e) {
          var t = this.glyphIterator.options,
            r = this.glyphIterator.index,
            n = e,
            i = Array.isArray(n),
            a = 0;
          for (n = i ? n : n[Symbol.iterator](); ; ) {
            var o;
            if (i) {
              if (a >= n.length) break;
              o = n[a++];
            } else {
              if ((a = n.next()).done) break;
              o = a.value;
            }
            var s = o;
            this.glyphIterator.reset(t, r),
              this.glyphIterator.increment(s.sequenceIndex);
            var u = this.table.lookupList.get(s.lookupListIndex);
            this.glyphIterator.reset(u.flags, this.glyphIterator.index);
            var l = u.subTables,
              c = Array.isArray(l),
              f = 0;
            for (l = c ? l : l[Symbol.iterator](); ; ) {
              var h;
              if (c) {
                if (f >= l.length) break;
                h = l[f++];
              } else {
                if ((f = l.next()).done) break;
                h = f.value;
              }
              var d = h;
              if (this.applyLookup(u.lookupType, d)) break;
            }
          }
          return this.glyphIterator.reset(t, r), !0;
        }),
        (t.coverageIndex = function (e, t) {
          switch ((null == t && (t = this.glyphIterator.cur.id), e.version)) {
            case 1:
              return e.glyphs.indexOf(t);
            case 2:
              var r = e.rangeRecords,
                n = Array.isArray(r),
                i = 0;
              for (r = n ? r : r[Symbol.iterator](); ; ) {
                var a;
                if (n) {
                  if (i >= r.length) break;
                  a = r[i++];
                } else {
                  if ((i = r.next()).done) break;
                  a = i.value;
                }
                var o = a;
                if (o.start <= t && t <= o.end)
                  return o.startCoverageIndex + t - o.start;
              }
          }
          return -1;
        }),
        (t.match = function (e, t, r, n) {
          for (
            var i = this.glyphIterator.index,
              a = this.glyphIterator.increment(e),
              o = 0;
            o < t.length && a && r(t[o], a);

          )
            n && n.push(this.glyphIterator.index),
              o++,
              (a = this.glyphIterator.next());
          return (this.glyphIterator.index = i), !(o < t.length) && (n || !0);
        }),
        (t.sequenceMatches = function (e, t) {
          return this.match(e, t, function (e, t) {
            return e === t.id;
          });
        }),
        (t.sequenceMatchIndices = function (e, t) {
          var r = this;
          return this.match(
            e,
            t,
            function (e, t) {
              return r.currentFeature in t.features && e === t.id;
            },
            []
          );
        }),
        (t.coverageSequenceMatches = function (e, t) {
          var r = this;
          return this.match(e, t, function (e, t) {
            return r.coverageIndex(e, t.id) >= 0;
          });
        }),
        (t.getClassID = function (e, t) {
          switch (t.version) {
            case 1:
              var r = e - t.startGlyph;
              if (r >= 0 && r < t.classValueArray.length)
                return t.classValueArray[r];
              break;
            case 2:
              var n = t.classRangeRecord,
                i = Array.isArray(n),
                a = 0;
              for (n = i ? n : n[Symbol.iterator](); ; ) {
                var o;
                if (i) {
                  if (a >= n.length) break;
                  o = n[a++];
                } else {
                  if ((a = n.next()).done) break;
                  o = a.value;
                }
                var s = o;
                if (s.start <= e && e <= s.end) return s.class;
              }
          }
          return 0;
        }),
        (t.classSequenceMatches = function (e, t, r) {
          var n = this;
          return this.match(e, t, function (e, t) {
            return e === n.getClassID(t.id, r);
          });
        }),
        (t.applyContext = function (e) {
          switch (e.version) {
            case 1:
              var t = this.coverageIndex(e.coverage);
              if (-1 === t) return !1;
              var r = e.ruleSets[t],
                n = r,
                i = Array.isArray(n),
                a = 0;
              for (n = i ? n : n[Symbol.iterator](); ; ) {
                var o;
                if (i) {
                  if (a >= n.length) break;
                  o = n[a++];
                } else {
                  if ((a = n.next()).done) break;
                  o = a.value;
                }
                var s = o;
                if (this.sequenceMatches(1, s.input))
                  return this.applyLookupList(s.lookupRecords);
              }
              break;
            case 2:
              if (-1 === this.coverageIndex(e.coverage)) return !1;
              if (
                -1 ===
                (t = this.getClassID(this.glyphIterator.cur.id, e.classDef))
              )
                return !1;
              var u = (r = e.classSet[t]),
                l = Array.isArray(u),
                c = 0;
              for (u = l ? u : u[Symbol.iterator](); ; ) {
                var f;
                if (l) {
                  if (c >= u.length) break;
                  f = u[c++];
                } else {
                  if ((c = u.next()).done) break;
                  f = c.value;
                }
                var h = f;
                if (this.classSequenceMatches(1, h.classes, e.classDef))
                  return this.applyLookupList(h.lookupRecords);
              }
              break;
            case 3:
              if (this.coverageSequenceMatches(0, e.coverages))
                return this.applyLookupList(e.lookupRecords);
          }
          return !1;
        }),
        (t.applyChainingContext = function (e) {
          switch (e.version) {
            case 1:
              var t = this.coverageIndex(e.coverage);
              if (-1 === t) return !1;
              var r = e.chainRuleSets[t],
                n = Array.isArray(r),
                i = 0;
              for (r = n ? r : r[Symbol.iterator](); ; ) {
                var a;
                if (n) {
                  if (i >= r.length) break;
                  a = r[i++];
                } else {
                  if ((i = r.next()).done) break;
                  a = i.value;
                }
                var o = a;
                if (
                  this.sequenceMatches(-o.backtrack.length, o.backtrack) &&
                  this.sequenceMatches(1, o.input) &&
                  this.sequenceMatches(1 + o.input.length, o.lookahead)
                )
                  return this.applyLookupList(o.lookupRecords);
              }
              break;
            case 2:
              if (-1 === this.coverageIndex(e.coverage)) return !1;
              t = this.getClassID(this.glyphIterator.cur.id, e.inputClassDef);
              var s = e.chainClassSet[t];
              if (!s) return !1;
              var u = s,
                l = Array.isArray(u),
                c = 0;
              for (u = l ? u : u[Symbol.iterator](); ; ) {
                var f;
                if (l) {
                  if (c >= u.length) break;
                  f = u[c++];
                } else {
                  if ((c = u.next()).done) break;
                  f = c.value;
                }
                var h = f;
                if (
                  this.classSequenceMatches(
                    -h.backtrack.length,
                    h.backtrack,
                    e.backtrackClassDef
                  ) &&
                  this.classSequenceMatches(1, h.input, e.inputClassDef) &&
                  this.classSequenceMatches(
                    1 + h.input.length,
                    h.lookahead,
                    e.lookaheadClassDef
                  )
                )
                  return this.applyLookupList(h.lookupRecords);
              }
              break;
            case 3:
              if (
                this.coverageSequenceMatches(
                  -e.backtrackGlyphCount,
                  e.backtrackCoverage
                ) &&
                this.coverageSequenceMatches(0, e.inputCoverage) &&
                this.coverageSequenceMatches(
                  e.inputGlyphCount,
                  e.lookaheadCoverage
                )
              )
                return this.applyLookupList(e.lookupRecords);
          }
          return !1;
        }),
        e
      );
    })(),
    pp = (function () {
      function e(e, t, r, n) {
        if (
          (void 0 === r && (r = []),
          (this._font = e),
          (this.codePoints = r),
          (this.id = t),
          (this.features = {}),
          Array.isArray(n))
        )
          for (var i = 0; i < n.length; i++) {
            var a = n[i];
            this.features[a] = !0;
          }
        else "object" == typeof n && Object.assign(this.features, n);
        (this.ligatureID = null),
          (this.ligatureComponent = null),
          (this.isLigated = !1),
          (this.cursiveAttachment = null),
          (this.markAttachment = null),
          (this.shaperInfo = null),
          (this.substituted = !1),
          (this.isMultiplied = !1);
      }
      return (
        (e.prototype.copy = function () {
          return new e(this._font, this.id, this.codePoints, this.features);
        }),
        si(e, [
          {
            key: "id",
            get: function () {
              return this._id;
            },
            set: function (e) {
              (this._id = e), (this.substituted = !0);
              var t = this._font.GDEF;
              if (t && t.glyphClassDef) {
                var r = dp.prototype.getClassID(e, t.glyphClassDef);
                (this.isBase = 1 === r),
                  (this.isLigature = 2 === r),
                  (this.isMark = 3 === r),
                  (this.markAttachmentType = t.markAttachClassDef
                    ? dp.prototype.getClassID(e, t.markAttachClassDef)
                    : 0);
              } else
                (this.isMark =
                  this.codePoints.length > 0 &&
                  this.codePoints.every(wd.isMark)),
                  (this.isBase = !this.isMark),
                  (this.isLigature = this.codePoints.length > 1),
                  (this.markAttachmentType = 0);
            },
          },
        ]),
        e
      );
    })(),
    gp = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (
        li(t, e),
        (t.planFeatures = function (e) {
          e.add(["ljmo", "vjmo", "tjmo"], !1);
        }),
        (t.assignFeatures = function (e, t) {
          for (var r = 0, n = 0; n < t.length; ) {
            var i,
              a = t[n].codePoints[0],
              o = _p(a),
              s = Zp[r][o];
            switch (((i = s[0]), (r = s[1]), i)) {
              case qp:
                e.font.hasGlyphForCodePoint(a) || (n = Kp(t, n, e.font));
                break;
              case Wp:
                n = Jp(t, n, e.font);
                break;
              case Hp:
                Qp(t, n, e.font);
                break;
              case Yp:
                n = $p(t, n, e.font);
            }
            n++;
          }
        }),
        t
      );
    })(rp);
  ui(gp, "zeroMarkWidths", "NONE");
  var vp = 44032,
    yp = 55204 - vp + 1,
    bp = 4352,
    mp = 4449,
    wp = 4519,
    xp = 21,
    Sp = 28,
    kp = bp + 19 - 1,
    Ap = mp + xp - 1,
    Cp = wp + Sp - 1,
    Pp = 9676,
    Ip = function (e) {
      return (4352 <= e && e <= 4447) || (43360 <= e && e <= 43388);
    },
    Op = function (e) {
      return (4448 <= e && e <= 4519) || (55216 <= e && e <= 55238);
    },
    Ep = function (e) {
      return (4520 <= e && e <= 4607) || (55243 <= e && e <= 55291);
    },
    Bp = function (e) {
      return 12334 <= e && e <= 12335;
    },
    Tp = function (e) {
      return vp <= e && e <= 55204;
    },
    Lp = function (e) {
      return e - vp < yp && (e - vp) % Sp == 0;
    },
    zp = function (e) {
      return bp <= e && e <= kp;
    },
    Dp = function (e) {
      return mp <= e && e <= Ap;
    },
    Rp = function (e) {
      return 1 <= e && e <= Cp;
    },
    Mp = 0,
    Fp = 1,
    Up = 2,
    Np = 3,
    jp = 4,
    Gp = 5,
    Vp = 6;
  function _p(e) {
    return Ip(e)
      ? Fp
      : Op(e)
      ? Up
      : Ep(e)
      ? Np
      : Lp(e)
      ? jp
      : Tp(e)
      ? Gp
      : Bp(e)
      ? Vp
      : Mp;
  }
  var qp = 1,
    Wp = 2,
    Hp = 4,
    Yp = 5,
    Zp = [
      [
        [0, 0],
        [0, 1],
        [0, 0],
        [0, 0],
        [qp, 2],
        [qp, 3],
        [Yp, 0],
      ],
      [
        [0, 0],
        [0, 1],
        [Wp, 2],
        [0, 0],
        [qp, 2],
        [qp, 3],
        [Yp, 0],
      ],
      [
        [0, 0],
        [0, 1],
        [0, 0],
        [Wp, 3],
        [qp, 2],
        [qp, 3],
        [Hp, 0],
      ],
      [
        [0, 0],
        [0, 1],
        [0, 0],
        [0, 0],
        [qp, 2],
        [qp, 3],
        [Hp, 0],
      ],
    ];
  function Xp(e, t, r) {
    return new pp(e, e.glyphForCodePoint(t).id, [t], r);
  }
  function Kp(e, t, r) {
    var n = e[t],
      i = n.codePoints[0] - vp,
      a = wp + (i % Sp),
      o = (bp + (i = (i / Sp) | 0) / xp) | 0,
      s = mp + (i % xp);
    if (
      !r.hasGlyphForCodePoint(o) ||
      !r.hasGlyphForCodePoint(s) ||
      (a !== wp && !r.hasGlyphForCodePoint(a))
    )
      return t;
    var u = Xp(r, o, n.features);
    u.features.ljmo = !0;
    var l = Xp(r, s, n.features);
    l.features.vjmo = !0;
    var c = [u, l];
    if (a > wp) {
      var f = Xp(r, a, n.features);
      (f.features.tjmo = !0), c.push(f);
    }
    return e.splice.apply(e, [t, 1].concat(c)), t + c.length - 1;
  }
  function Jp(e, t, r) {
    var n,
      i,
      a,
      o,
      s = e[t],
      u = _p(e[t].codePoints[0]),
      l = e[t - 1].codePoints[0],
      c = _p(l);
    if (c === jp && u === Np) (n = l), (o = s);
    else {
      u === Up
        ? ((i = e[t - 1]), (a = s))
        : ((i = e[t - 2]), (a = e[t - 1]), (o = s));
      var f = i.codePoints[0],
        h = a.codePoints[0];
      zp(f) && Dp(h) && (n = vp + ((f - bp) * xp + (h - mp)) * Sp);
    }
    var d = (o && o.codePoints[0]) || wp;
    if (null != n && (d === wp || Rp(d))) {
      var p = n + (d - wp);
      if (r.hasGlyphForCodePoint(p)) {
        var g = c === Up ? 3 : 2;
        return e.splice(t - g + 1, g, Xp(r, p, s.features)), t - g + 1;
      }
    }
    return (
      i && (i.features.ljmo = !0),
      a && (a.features.vjmo = !0),
      o && (o.features.tjmo = !0),
      c === jp ? (Kp(e, t - 1, r), t + 1) : t
    );
  }
  function Qp(e, t, r) {
    var n = e[t],
      i = e[t].codePoints[0];
    if (0 !== r.glyphForCodePoint(i).advanceWidth) {
      var a = (function (e) {
        switch (_p(e)) {
          case jp:
          case Gp:
            return 1;
          case Up:
            return 2;
          case Np:
            return 3;
        }
      })(e[t - 1].codePoints[0]);
      return e.splice(t, 1), e.splice(t - a, 0, n);
    }
  }
  function $p(e, t, r) {
    var n = e[t],
      i = e[t].codePoints[0];
    if (r.hasGlyphForCodePoint(Pp)) {
      var a = Xp(r, Pp, n.features),
        o = 0 === r.glyphForCodePoint(i).advanceWidth ? t : t + 1;
      e.splice(o, 0, a), t++;
    }
    return t;
  }
  var eg = function (e, t) {
      return { value: t, done: !!e };
    },
    tg = {},
    rg = {}.toString,
    ng = function (e) {
      return rg.call(e).slice(8, -1);
    },
    ig = Object("z").propertyIsEnumerable(0)
      ? Object
      : function (e) {
          return "String" == ng(e) ? e.split("") : Object(e);
        },
    ag = function (e) {
      if (null == e) throw TypeError("Can't call method on  " + e);
      return e;
    },
    og = function (e) {
      return ig(ag(e));
    },
    sg = re(function (e) {
      var t = (e.exports =
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math
          ? self
          : Function("return this")());
      "number" == typeof __g && (__g = t);
    }),
    ug = re(function (e) {
      var t = (e.exports = { version: "2.5.7" });
      "number" == typeof __e && (__e = t);
    }),
    lg =
      (ug.version,
      function (e, t, r) {
        if (
          ((function (e) {
            if ("function" != typeof e)
              throw TypeError(e + " is not a function!");
          })(e),
          void 0 === t)
        )
          return e;
        switch (r) {
          case 1:
            return function (r) {
              return e.call(t, r);
            };
          case 2:
            return function (r, n) {
              return e.call(t, r, n);
            };
          case 3:
            return function (r, n, i) {
              return e.call(t, r, n, i);
            };
        }
        return function () {
          return e.apply(t, arguments);
        };
      }),
    cg = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    },
    fg = function (e) {
      if (!cg(e)) throw TypeError(e + " is not an object!");
      return e;
    },
    hg = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    },
    dg = !hg(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    }),
    pg = sg.document,
    gg = cg(pg) && cg(pg.createElement),
    vg = function (e) {
      return gg ? pg.createElement(e) : {};
    },
    yg =
      !dg &&
      !hg(function () {
        return (
          7 !=
          Object.defineProperty(vg("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      }),
    bg = Object.defineProperty,
    mg = {
      f: dg
        ? Object.defineProperty
        : function (e, t, r) {
            if (
              (fg(e),
              (t = (function (e, t) {
                if (!cg(e)) return e;
                var r, n;
                if (
                  t &&
                  "function" == typeof (r = e.toString) &&
                  !cg((n = r.call(e)))
                )
                  return n;
                if (
                  "function" == typeof (r = e.valueOf) &&
                  !cg((n = r.call(e)))
                )
                  return n;
                if (
                  !t &&
                  "function" == typeof (r = e.toString) &&
                  !cg((n = r.call(e)))
                )
                  return n;
                throw TypeError("Can't convert object to primitive value");
              })(t, !0)),
              fg(r),
              yg)
            )
              try {
                return bg(e, t, r);
              } catch (e) {}
            if ("get" in r || "set" in r)
              throw TypeError("Accessors not supported!");
            return "value" in r && (e[t] = r.value), e;
          },
    },
    wg = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    },
    xg = dg
      ? function (e, t, r) {
          return mg.f(e, t, wg(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        },
    Sg = {}.hasOwnProperty,
    kg = function (e, t) {
      return Sg.call(e, t);
    },
    Ag = function e(t, r, n) {
      var i,
        a,
        o,
        s = t & e.F,
        u = t & e.G,
        l = t & e.S,
        c = t & e.P,
        f = t & e.B,
        h = t & e.W,
        d = u ? ug : ug[r] || (ug[r] = {}),
        p = d.prototype,
        g = u ? sg : l ? sg[r] : (sg[r] || {}).prototype;
      for (i in (u && (n = r), n))
        ((a = !s && g && void 0 !== g[i]) && kg(d, i)) ||
          ((o = a ? g[i] : n[i]),
          (d[i] =
            u && "function" != typeof g[i]
              ? n[i]
              : f && a
              ? lg(o, sg)
              : h && g[i] == o
              ? (function (e) {
                  var t = function (t, r, n) {
                    if (this instanceof e) {
                      switch (arguments.length) {
                        case 0:
                          return new e();
                        case 1:
                          return new e(t);
                        case 2:
                          return new e(t, r);
                      }
                      return new e(t, r, n);
                    }
                    return e.apply(this, arguments);
                  };
                  return (t.prototype = e.prototype), t;
                })(o)
              : c && "function" == typeof o
              ? lg(Function.call, o)
              : o),
          c &&
            (((d.virtual || (d.virtual = {}))[i] = o),
            t & e.R && p && !p[i] && xg(p, i, o)));
    };
  (Ag.F = 1),
    (Ag.G = 2),
    (Ag.S = 4),
    (Ag.P = 8),
    (Ag.B = 16),
    (Ag.W = 32),
    (Ag.U = 64),
    (Ag.R = 128);
  var Cg,
    Pg = Ag,
    Ig = xg,
    Og = Math.ceil,
    Eg = Math.floor,
    Bg = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? Eg : Og)(e);
    },
    Tg = Math.min,
    Lg = Math.max,
    zg = Math.min,
    Dg = re(function (e) {
      var t = sg["__core-js_shared__"] || (sg["__core-js_shared__"] = {});
      (e.exports = function (e, r) {
        return t[e] || (t[e] = void 0 !== r ? r : {});
      })("versions", []).push({
        version: ug.version,
        mode: "pure",
        copyright: "© 2018 Denis Pushkarev (zloirock.ru)",
      });
    }),
    Rg = 0,
    Mg = Math.random(),
    Fg = function (e) {
      return "Symbol(".concat(
        void 0 === e ? "" : e,
        ")_",
        (++Rg + Mg).toString(36)
      );
    },
    Ug = Dg("keys"),
    Ng = function (e) {
      return Ug[e] || (Ug[e] = Fg(e));
    },
    jg =
      ((Cg = !1),
      function (e, t, r) {
        var n,
          i,
          a = og(e),
          o = (n = a.length) > 0 ? Tg(Bg(n), 9007199254740991) : 0,
          s = (function (e, t) {
            return (e = Bg(e)) < 0 ? Lg(e + t, 0) : zg(e, t);
          })(r, o);
        if (Cg && t != t) {
          for (; o > s; ) if ((i = a[s++]) != i) return !0;
        } else
          for (; o > s; s++)
            if ((Cg || s in a) && a[s] === t) return Cg || s || 0;
        return !Cg && -1;
      }),
    Gg = Ng("IE_PROTO"),
    Vg =
      "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
        ","
      ),
    _g =
      Object.keys ||
      function (e) {
        return (function (e, t) {
          var r,
            n = og(e),
            i = 0,
            a = [];
          for (r in n) r != Gg && kg(n, r) && a.push(r);
          for (; t.length > i; )
            kg(n, (r = t[i++])) && (~jg(a, r) || a.push(r));
          return a;
        })(e, Vg);
      },
    qg = dg
      ? Object.defineProperties
      : function (e, t) {
          fg(e);
          for (var r, n = _g(t), i = n.length, a = 0; i > a; )
            mg.f(e, (r = n[a++]), t[r]);
          return e;
        },
    Wg = sg.document,
    Hg = Wg && Wg.documentElement,
    Yg = Ng("IE_PROTO"),
    Zg = function () {},
    Xg = function () {
      var e,
        t = vg("iframe"),
        r = Vg.length;
      for (
        t.style.display = "none",
          Hg.appendChild(t),
          t.src = "javascript:",
          (e = t.contentWindow.document).open(),
          e.write("<script>document.F=Object</script>"),
          e.close(),
          Xg = e.F;
        r--;

      )
        delete Xg.prototype[Vg[r]];
      return Xg();
    },
    Kg =
      Object.create ||
      function (e, t) {
        var r;
        return (
          null !== e
            ? ((Zg.prototype = fg(e)),
              (r = new Zg()),
              (Zg.prototype = null),
              (r[Yg] = e))
            : (r = Xg()),
          void 0 === t ? r : qg(r, t)
        );
      },
    Jg = re(function (e) {
      var t = Dg("wks"),
        r = sg.Symbol,
        n = "function" == typeof r;
      (e.exports = function (e) {
        return t[e] || (t[e] = (n && r[e]) || (n ? r : Fg)("Symbol." + e));
      }).store = t;
    }),
    Qg = mg.f,
    $g = Jg("toStringTag"),
    ev = function (e, t, r) {
      e &&
        !kg((e = r ? e : e.prototype), $g) &&
        Qg(e, $g, { configurable: !0, value: t });
    },
    tv = {};
  xg(tv, Jg("iterator"), function () {
    return this;
  });
  var rv = function (e, t, r) {
      (e.prototype = Kg(tv, { next: wg(1, r) })), ev(e, t + " Iterator");
    },
    nv = Ng("IE_PROTO"),
    iv = Object.prototype,
    av =
      Object.getPrototypeOf ||
      function (e) {
        return (
          (e = Object(ag(e))),
          kg(e, nv)
            ? e[nv]
            : "function" == typeof e.constructor && e instanceof e.constructor
            ? e.constructor.prototype
            : e instanceof Object
            ? iv
            : null
        );
      },
    ov = Jg("iterator"),
    sv = !([].keys && "next" in [].keys()),
    uv = function () {
      return this;
    },
    lv = function (e, t, r, n, i, a, o) {
      rv(r, t, n);
      var s,
        u,
        l,
        c = function (e) {
          if (!sv && e in p) return p[e];
          switch (e) {
            case "keys":
            case "values":
              return function () {
                return new r(this, e);
              };
          }
          return function () {
            return new r(this, e);
          };
        },
        f = t + " Iterator",
        h = "values" == i,
        d = !1,
        p = e.prototype,
        g = p[ov] || p["@@iterator"] || (i && p[i]),
        v = g || c(i),
        y = i ? (h ? c("entries") : v) : void 0,
        b = ("Array" == t && p.entries) || g;
      if (
        (b &&
          (l = av(b.call(new e()))) !== Object.prototype &&
          l.next &&
          ev(l, f, !0),
        h &&
          g &&
          "values" !== g.name &&
          ((d = !0),
          (v = function () {
            return g.call(this);
          })),
        o && (sv || d || !p[ov]) && xg(p, ov, v),
        (tg[t] = v),
        (tg[f] = uv),
        i)
      )
        if (
          ((s = {
            values: h ? v : c("values"),
            keys: a ? v : c("keys"),
            entries: y,
          }),
          o)
        )
          for (u in s) u in p || Ig(p, u, s[u]);
        else Pg(Pg.P + Pg.F * (sv || d), t, s);
      return s;
    };
  lv(
    Array,
    "Array",
    function (e, t) {
      (this._t = og(e)), (this._i = 0), (this._k = t);
    },
    function () {
      var e = this._t,
        t = this._k,
        r = this._i++;
      return !e || r >= e.length
        ? ((this._t = void 0), eg(1))
        : eg(0, "keys" == t ? r : "values" == t ? e[r] : [r, e[r]]);
    },
    "values"
  );
  tg.Arguments = tg.Array;
  for (
    var cv = Jg("toStringTag"),
      fv =
        "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
          ","
        ),
      hv = 0;
    hv < fv.length;
    hv++
  ) {
    var dv = fv[hv],
      pv = sg[dv],
      gv = pv && pv.prototype;
    gv && !gv[cv] && xg(gv, cv, dv), (tg[dv] = tg.Array);
  }
  var vv,
    yv =
      ((vv = !0),
      function (e, t) {
        var r,
          n,
          i = String(ag(e)),
          a = Bg(t),
          o = i.length;
        return a < 0 || a >= o
          ? vv
            ? ""
            : void 0
          : (r = i.charCodeAt(a)) < 55296 ||
            r > 56319 ||
            a + 1 === o ||
            (n = i.charCodeAt(a + 1)) < 56320 ||
            n > 57343
          ? vv
            ? i.charAt(a)
            : r
          : vv
          ? i.slice(a, a + 2)
          : n - 56320 + ((r - 55296) << 10) + 65536;
      });
  lv(
    String,
    "String",
    function (e) {
      (this._t = String(e)), (this._i = 0);
    },
    function () {
      var e,
        t = this._t,
        r = this._i;
      return r >= t.length
        ? { value: void 0, done: !0 }
        : ((e = yv(t, r)), (this._i += e.length), { value: e, done: !1 });
    }
  );
  var bv = Jg("toStringTag"),
    mv =
      "Arguments" ==
      ng(
        (function () {
          return arguments;
        })()
      ),
    wv = function (e) {
      var t, r, n;
      return void 0 === e
        ? "Undefined"
        : null === e
        ? "Null"
        : "string" ==
          typeof (r = (function (e, t) {
            try {
              return e[t];
            } catch (e) {}
          })((t = Object(e)), bv))
        ? r
        : mv
        ? ng(t)
        : "Object" == (n = ng(t)) && "function" == typeof t.callee
        ? "Arguments"
        : n;
    },
    xv = Jg("iterator"),
    Sv = (ug.isIterable = function (e) {
      var t = Object(e);
      return void 0 !== t[xv] || "@@iterator" in t || tg.hasOwnProperty(wv(t));
    }),
    kv = re(function (e) {
      e.exports = { default: Sv, __esModule: !0 };
    });
  te(kv);
  var Av = Jg("iterator"),
    Cv = (ug.getIteratorMethod = function (e) {
      if (null != e) return e[Av] || e["@@iterator"] || tg[wv(e)];
    }),
    Pv = (ug.getIterator = function (e) {
      var t = Cv(e);
      if ("function" != typeof t) throw TypeError(e + " is not iterable!");
      return fg(t.call(e));
    }),
    Iv = re(function (e) {
      e.exports = { default: Pv, __esModule: !0 };
    });
  te(Iv);
  var Ov = re(function (e, t) {
    t.__esModule = !0;
    var r = i(kv),
      n = i(Iv);
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = (function () {
      return function (e, t) {
        if (Array.isArray(e)) return e;
        if ((0, r.default)(Object(e)))
          return (function (e, t) {
            var r = [],
              i = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var s, u = (0, n.default)(e);
                !(i = (s = u.next()).done) &&
                (r.push(s.value), !t || r.length !== t);
                i = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                !i && u.return && u.return();
              } finally {
                if (a) throw o;
              }
            }
            return r;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      };
    })();
  });
  te(Ov), Pg(Pg.S + Pg.F * !dg, "Object", { defineProperty: mg.f });
  var Ev = ug.Object,
    Bv = function (e, t, r) {
      return Ev.defineProperty(e, t, r);
    },
    Tv = re(function (e) {
      e.exports = { default: Bv, __esModule: !0 };
    });
  te(Tv);
  var Lv = re(function (e, t) {
    t.__esModule = !0;
    var r,
      n = (r = Tv) && r.__esModule ? r : { default: r };
    t.default = function (e, t, r) {
      return (
        t in e
          ? (0, n.default)(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    };
  });
  te(Lv);
  var zv = re(function (e) {
      !(function (t) {
        var r,
          n = Object.prototype,
          i = n.hasOwnProperty,
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          s = a.asyncIterator || "@@asyncIterator",
          u = a.toStringTag || "@@toStringTag",
          l = t.regeneratorRuntime;
        if (l) e.exports = l;
        else {
          (l = t.regeneratorRuntime = e.exports).wrap = m;
          var c = "suspendedStart",
            f = "suspendedYield",
            h = "executing",
            d = "completed",
            p = {},
            g = {};
          g[o] = function () {
            return this;
          };
          var v = Object.getPrototypeOf,
            y = v && v(v(B([])));
          y && y !== n && i.call(y, o) && (g = y);
          var b = (k.prototype = x.prototype = Object.create(g));
          (S.prototype = b.constructor = k),
            (k.constructor = S),
            (k[u] = S.displayName = "GeneratorFunction"),
            (l.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === S || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (l.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, k)
                  : ((e.__proto__ = k), u in e || (e[u] = "GeneratorFunction")),
                (e.prototype = Object.create(b)),
                e
              );
            }),
            (l.awrap = function (e) {
              return { __await: e };
            }),
            A(C.prototype),
            (C.prototype[s] = function () {
              return this;
            }),
            (l.AsyncIterator = C),
            (l.async = function (e, t, r, n) {
              var i = new C(m(e, t, r, n));
              return l.isGeneratorFunction(t)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            A(b),
            (b[u] = "Generator"),
            (b[o] = function () {
              return this;
            }),
            (b.toString = function () {
              return "[object Generator]";
            }),
            (l.keys = function (e) {
              var t = [];
              for (var r in e) t.push(r);
              return (
                t.reverse(),
                function r() {
                  for (; t.length; ) {
                    var n = t.pop();
                    if (n in e) return (r.value = n), (r.done = !1), r;
                  }
                  return (r.done = !0), r;
                }
              );
            }),
            (l.values = B),
            (E.prototype = {
              constructor: E,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = r),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = r),
                  this.tryEntries.forEach(O),
                  !e)
                )
                  for (var t in this)
                    "t" === t.charAt(0) &&
                      i.call(this, t) &&
                      !isNaN(+t.slice(1)) &&
                      (this[t] = r);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var t = this;
                function n(n, i) {
                  return (
                    (s.type = "throw"),
                    (s.arg = e),
                    (t.next = n),
                    i && ((t.method = "next"), (t.arg = r)),
                    !!i
                  );
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                  var o = this.tryEntries[a],
                    s = o.completion;
                  if ("root" === o.tryLoc) return n("end");
                  if (o.tryLoc <= this.prev) {
                    var u = i.call(o, "catchLoc"),
                      l = i.call(o, "finallyLoc");
                    if (u && l) {
                      if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                      if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                    } else if (u) {
                      if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var n = this.tryEntries[r];
                  if (
                    n.tryLoc <= this.prev &&
                    i.call(n, "finallyLoc") &&
                    this.prev < n.finallyLoc
                  ) {
                    var a = n;
                    break;
                  }
                }
                a &&
                  ("break" === e || "continue" === e) &&
                  a.tryLoc <= t &&
                  t <= a.finallyLoc &&
                  (a = null);
                var o = a ? a.completion : {};
                return (
                  (o.type = e),
                  (o.arg = t),
                  a
                    ? ((this.method = "next"), (this.next = a.finallyLoc), p)
                    : this.complete(o)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  p
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (r.finallyLoc === e)
                    return this.complete(r.completion, r.afterLoc), O(r), p;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (r.tryLoc === e) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var i = n.arg;
                      O(r);
                    }
                    return i;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, t, n) {
                return (
                  (this.delegate = {
                    iterator: B(e),
                    resultName: t,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = r),
                  p
                );
              },
            });
        }
        function m(e, t, r, n) {
          var i = t && t.prototype instanceof x ? t : x,
            a = Object.create(i.prototype),
            o = new E(n || []);
          return (
            (a._invoke = (function (e, t, r) {
              var n = c;
              return function (i, a) {
                if (n === h) throw new Error("Generator is already running");
                if (n === d) {
                  if ("throw" === i) throw a;
                  return T();
                }
                for (r.method = i, r.arg = a; ; ) {
                  var o = r.delegate;
                  if (o) {
                    var s = P(o, r);
                    if (s) {
                      if (s === p) continue;
                      return s;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if (n === c) throw ((n = d), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = h;
                  var u = w(e, t, r);
                  if ("normal" === u.type) {
                    if (((n = r.done ? d : f), u.arg === p)) continue;
                    return { value: u.arg, done: r.done };
                  }
                  "throw" === u.type &&
                    ((n = d), (r.method = "throw"), (r.arg = u.arg));
                }
              };
            })(e, r, o)),
            a
          );
        }
        function w(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        function x() {}
        function S() {}
        function k() {}
        function A(e) {
          ["next", "throw", "return"].forEach(function (t) {
            e[t] = function (e) {
              return this._invoke(t, e);
            };
          });
        }
        function C(e) {
          var t;
          this._invoke = function (r, n) {
            function a() {
              return new Promise(function (t, a) {
                !(function t(r, n, a, o) {
                  var s = w(e[r], e, n);
                  if ("throw" !== s.type) {
                    var u = s.arg,
                      l = u.value;
                    return l && "object" == typeof l && i.call(l, "__await")
                      ? Promise.resolve(l.__await).then(
                          function (e) {
                            t("next", e, a, o);
                          },
                          function (e) {
                            t("throw", e, a, o);
                          }
                        )
                      : Promise.resolve(l).then(function (e) {
                          (u.value = e), a(u);
                        }, o);
                  }
                  o(s.arg);
                })(r, n, t, a);
              });
            }
            return (t = t ? t.then(a, a) : a());
          };
        }
        function P(e, t) {
          var n = e.iterator[t.method];
          if (n === r) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = r),
                P(e, t),
                "throw" === t.method)
              )
                return p;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return p;
          }
          var i = w(n, e.iterator, t.arg);
          if ("throw" === i.type)
            return (
              (t.method = "throw"), (t.arg = i.arg), (t.delegate = null), p
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((t[e.resultName] = a.value),
                (t.next = e.nextLoc),
                "return" !== t.method && ((t.method = "next"), (t.arg = r)),
                (t.delegate = null),
                p)
              : a
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              p);
        }
        function I(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function E(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(I, this),
            this.reset(!0);
        }
        function B(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (i.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = r), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: T };
        }
        function T() {
          return { value: r, done: !0 };
        }
      })(
        (function () {
          return this;
        })() || Function("return this")()
      );
    }),
    Dv =
      (function () {
        return this;
      })() || Function("return this")(),
    Rv =
      Dv.regeneratorRuntime &&
      Object.getOwnPropertyNames(Dv).indexOf("regeneratorRuntime") >= 0,
    Mv = Rv && Dv.regeneratorRuntime;
  Dv.regeneratorRuntime = void 0;
  var Fv = zv;
  if (Rv) Dv.regeneratorRuntime = Mv;
  else
    try {
      delete Dv.regeneratorRuntime;
    } catch (e) {
      Dv.regeneratorRuntime = void 0;
    }
  var Uv = Fv,
    Nv = { f: Jg }.f("iterator"),
    jv = re(function (e) {
      e.exports = { default: Nv, __esModule: !0 };
    });
  te(jv);
  var Gv = re(function (e, t) {
    (t.__esModule = !0),
      (t.default = function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      });
  });
  te(Gv);
  var Vv = re(function (e, t) {
    t.__esModule = !0;
    var r,
      n = (r = Tv) && r.__esModule ? r : { default: r };
    t.default = (function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            (0, n.default)(e, i.key, i);
        }
      }
      return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    })();
  });
  function _v(e) {
    return e && "object" == typeof e && "default" in e ? e.default : e;
  }
  te(Vv);
  var qv = _v(Ov),
    Wv = _v(Iv),
    Hv = _v(Lv),
    Yv = _v(Uv),
    Zv = _v(jv),
    Xv = _v(Gv),
    Kv = _v(Vv),
    Jv = (function () {
      function e(t) {
        Xv(this, e),
          (this.stateTable = t.stateTable),
          (this.accepting = t.accepting),
          (this.tags = t.tags);
      }
      return (
        Kv(e, [
          {
            key: "match",
            value: function (e) {
              var t = this;
              return Hv(
                {},
                Zv,
                Yv.mark(function r() {
                  var n, i, a, o, s, u;
                  return Yv.wrap(
                    function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            (n = 1),
                              (i = null),
                              (a = null),
                              (o = null),
                              (s = 0);
                          case 5:
                            if (!(s < e.length)) {
                              r.next = 21;
                              break;
                            }
                            if (
                              ((u = e[s]),
                              (o = n),
                              0 !== (n = t.stateTable[n][u]))
                            ) {
                              r.next = 15;
                              break;
                            }
                            if (!(null != i && null != a && a >= i)) {
                              r.next = 13;
                              break;
                            }
                            return (r.next = 13), [i, a, t.tags[o]];
                          case 13:
                            (n = t.stateTable[1][u]), (i = null);
                          case 15:
                            0 !== n && null == i && (i = s),
                              t.accepting[n] && (a = s),
                              0 === n && (n = 1);
                          case 18:
                            s++, (r.next = 5);
                            break;
                          case 21:
                            if (!(null != i && null != a && a >= i)) {
                              r.next = 24;
                              break;
                            }
                            return (r.next = 24), [i, a, t.tags[n]];
                          case 24:
                          case "end":
                            return r.stop();
                        }
                    },
                    r,
                    this
                  );
                })
              );
            },
          },
          {
            key: "apply",
            value: function (e, t) {
              var r = !0,
                n = !1,
                i = void 0;
              try {
                for (
                  var a, o = Wv(this.match(e));
                  !(r = (a = o.next()).done);
                  r = !0
                ) {
                  var s = qv(a.value, 3),
                    u = s[0],
                    l = s[1],
                    c = s[2],
                    f = !0,
                    h = !1,
                    d = void 0;
                  try {
                    for (var p, g = Wv(c); !(f = (p = g.next()).done); f = !0) {
                      var v = p.value;
                      "function" == typeof t[v] &&
                        t[v](u, l, e.slice(u, l + 1));
                    }
                  } catch (e) {
                    (h = !0), (d = e);
                  } finally {
                    try {
                      !f && g.return && g.return();
                    } finally {
                      if (h) throw d;
                    }
                  }
                }
              } catch (e) {
                (n = !0), (i = e);
              } finally {
                try {
                  !r && o.return && o.return();
                } finally {
                  if (n) throw i;
                }
              }
            },
          },
        ]),
        e
      );
    })(),
    Qv = {
      X: 1,
      C: 2,
      V: 4,
      N: 8,
      H: 16,
      ZWNJ: 32,
      ZWJ: 64,
      M: 128,
      SM: 256,
      VD: 512,
      A: 1024,
      Placeholder: 2048,
      Dotted_Circle: 4096,
      RS: 8192,
      Coeng: 16384,
      Repha: 32768,
      Ra: 65536,
      CM: 1 << 17,
      Symbol: 1 << 18,
    },
    $v = {
      Start: 1,
      Ra_To_Become_Reph: 2,
      Pre_M: 4,
      Pre_C: 8,
      Base_C: 16,
      After_Main: 32,
      Above_C: 64,
      Before_Sub: 128,
      Below_C: 256,
      After_Sub: 512,
      Before_Post: 1024,
      Post_C: 2048,
      After_Post: 4096,
      Final_C: 8192,
      SMVD: 16384,
      End: 32768,
    },
    ey = Qv.C | Qv.Ra | Qv.CM | Qv.V | Qv.Placeholder | Qv.Dotted_Circle,
    ty = Qv.ZWJ | Qv.ZWNJ,
    ry = Qv.H | Qv.Coeng,
    ny = {
      Default: {
        hasOldSpec: !1,
        virama: 0,
        basePos: "Last",
        rephPos: $v.Before_Post,
        rephMode: "Implicit",
        blwfMode: "Pre_And_Post",
      },
      Devanagari: {
        hasOldSpec: !0,
        virama: 2381,
        basePos: "Last",
        rephPos: $v.Before_Post,
        rephMode: "Implicit",
        blwfMode: "Pre_And_Post",
      },
      Bengali: {
        hasOldSpec: !0,
        virama: 2509,
        basePos: "Last",
        rephPos: $v.After_Sub,
        rephMode: "Implicit",
        blwfMode: "Pre_And_Post",
      },
      Gurmukhi: {
        hasOldSpec: !0,
        virama: 2637,
        basePos: "Last",
        rephPos: $v.Before_Sub,
        rephMode: "Implicit",
        blwfMode: "Pre_And_Post",
      },
      Gujarati: {
        hasOldSpec: !0,
        virama: 2765,
        basePos: "Last",
        rephPos: $v.Before_Post,
        rephMode: "Implicit",
        blwfMode: "Pre_And_Post",
      },
      Oriya: {
        hasOldSpec: !0,
        virama: 2893,
        basePos: "Last",
        rephPos: $v.After_Main,
        rephMode: "Implicit",
        blwfMode: "Pre_And_Post",
      },
      Tamil: {
        hasOldSpec: !0,
        virama: 3021,
        basePos: "Last",
        rephPos: $v.After_Post,
        rephMode: "Implicit",
        blwfMode: "Pre_And_Post",
      },
      Telugu: {
        hasOldSpec: !0,
        virama: 3149,
        basePos: "Last",
        rephPos: $v.After_Post,
        rephMode: "Explicit",
        blwfMode: "Post_Only",
      },
      Kannada: {
        hasOldSpec: !0,
        virama: 3277,
        basePos: "Last",
        rephPos: $v.After_Post,
        rephMode: "Implicit",
        blwfMode: "Post_Only",
      },
      Malayalam: {
        hasOldSpec: !0,
        virama: 3405,
        basePos: "Last",
        rephPos: $v.After_Main,
        rephMode: "Log_Repha",
        blwfMode: "Pre_And_Post",
      },
      Khmer: {
        hasOldSpec: !1,
        virama: 6098,
        basePos: "First",
        rephPos: $v.Ra_To_Become_Reph,
        rephMode: "Vis_Repha",
        blwfMode: "Pre_And_Post",
      },
    },
    iy = {
      6078: [6081, 6078],
      6079: [6081, 6079],
      6080: [6081, 6080],
      6084: [6081, 6084],
      6085: [6081, 6085],
    },
    ay =
      "eJzNmFtv2zYUx7+LnvnA+6Vva4Z0K5BsWLYOmBEEsqMF3mw5kJUOQ9HvvnNIWaJsz7oWMFiT5k+Hfx2eQ9JMvySrtMxedsU62yfvFslPCUl+vP8e6gf4fHgPFX5u76C6+fAR6k933y0/+/bnfYlt1Q29m7v3m398t8iwCb0fvH34flONP3TxPb/g+37DF1Wid2H4bTC9DfA2jHioBB4Or6qM//j9/qNvsPbVJ9S+x/dj5Yc9kuQ5W+22r7v9ulzvcpj0l4QramDy0AjCpZNgBN9tjRRziKz1yFpDuKPcI8dqZI0NiEdWApCgDAdCI4mgVAfkAlIN4rSxEgwRkxIRk5wIplBecO0R14IIbpVHhnlkaIR4hHRAskG6QipG9WhJ/WjhLIGKBiQCchGStZVkfqCSGpGSMCslaEA2QpWVi1FjqmjDlQ+AFt5DrRmB75gYYbT3xFjwxGjMgnDKWzkFMXFKBmQipANCTyQkA5C2AbkGedOKaxq4ixBrUMvUNS/ySDufD2go0U6rgERAPEI6IBkhE5CKkAvINsgJ6ZkTBqDjpqKqoramhkqfYmwZgdrHC3s6pjbYWik8tRKplbyiMqbiQHXLFj0zjDoMMbaaQB10oecqair6lST7Es6dX9PlJoNnC0pmKY9kwQnsFSKhKCDgBrHEEUYJY4RxwgSB/QW7jml4zAyB1OMTRzglnBHOvRIXocGPxArmN9lJrmsvRw3HMybunYpxB5WAf7BdIAywJOEsgd0EW9sQgYucyGAJaYMHcK5ICBZESwVaeYiGvm9mmHaTm6Z3yE1sweTxhOOMdKnRI7WT6A0ROywb7xbv9K1aLV1TdT2n2kvuzKqmYVHTy2u6fqW6MO0gO+u8p+kxezRwYOlcL9NWX8c5881SArBvDHseidNdlbYljN1ewtINDAI7nFadUTij2VUGHj6dcuz8g3FSA1ZlbDFhN48rylfs4gk7MqVzuDdNqf17PNWrGaUuTzC6I8RG4vj9rYtBp+CJ3nEZJhffYby47nSxvrt0Tlo0K2keybN3LdrzqlUZma4gBO3ZozBNU15OemfpsZAmLsw5bsOTUiTU2BwFWcVbTkO3n9NKjPFa9nb7nHBXGXqmdOod/6BN0xq2pmKjOc+R0Rn5/1/ZoyvZbH8ojL3qnRUeX05uGKOFZHd6jvbjvMf82M1+Vn1kDOqIPpIkXa2y13KdvyTvFn+mm31GyuJtdDVd4doqCFGZvuD/nC8g9Mmy2P2d5U+rzdu+zIoE0Tp/zl4zqPKyxff/bpe7TRuVaf6cFs8teEbyGtC1+DEe5W/brEg3XWZD8tczpVcIP6+LdJs+QXe7ztMyuybfvgUcv0SALbPi6a/dOodmcsBOXvH49T/dPl6+",
    oy = JSON.parse(
      String.fromCharCode.apply(
        String,
        td.inflate(
          nd(
            "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"
          )
        )
      )
    ),
    sy = JSON.parse(String.fromCharCode.apply(String, td.inflate(nd(ay)))),
    uy = td.inflate(
      nd(
        "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"
      )
    ),
    ly = sy.decompositions,
    cy = new ul(uy),
    fy = new Jv(oy),
    hy = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (
        li(t, e),
        (t.planFeatures = function (e) {
          var t;
          e.addStage(vy),
            e.addStage(["locl", "ccmp"]),
            e.addStage(Sy),
            e.addStage("nukt"),
            e.addStage("akhn"),
            e.addStage("rphf", !1),
            e.addStage("rkrf"),
            e.addStage("pref", !1),
            e.addStage("blwf", !1),
            e.addStage("abvf", !1),
            e.addStage("half", !1),
            e.addStage("pstf", !1),
            e.addStage("vatu"),
            e.addStage("cjct"),
            e.addStage("cfar", !1),
            e.addStage(ky),
            e.addStage({
              local: ["init"],
              global: [
                "pres",
                "abvs",
                "blws",
                "psts",
                "haln",
                "dist",
                "abvm",
                "blwm",
                "calt",
                "clig",
              ],
            }),
            (e.unicodeScript = ((t = e.script), Ad[t])),
            (e.indicConfig = ny[e.unicodeScript] || ny.Default),
            (e.isOldSpec =
              e.indicConfig.hasOldSpec &&
              "2" !== e.script[e.script.length - 1]);
        }),
        (t.assignFeatures = function (e, t) {
          for (
            var r = function (r) {
                var n = t[r].codePoints[0],
                  i = iy[n] || ly[n];
                if (i) {
                  var a = i.map(function (n) {
                    var i = e.font.glyphForCodePoint(n);
                    return new pp(e.font, i.id, [n], t[r].features);
                  });
                  t.splice.apply(t, [r, 1].concat(a));
                }
              },
              n = t.length - 1;
            n >= 0;
            n--
          )
            r(n);
        }),
        t
      );
    })(rp);
  function dy(e) {
    return cy.get(e.codePoints[0]) >> 8;
  }
  function py(e) {
    return 1 << (255 & cy.get(e.codePoints[0]));
  }
  ui(hy, "zeroMarkWidths", "NONE");
  var gy = function (e, t, r, n) {
    (this.category = e),
      (this.position = t),
      (this.syllableType = r),
      (this.syllable = n);
  };
  function vy(e, t) {
    var r = 0,
      n = 0,
      i = fy.match(t.map(dy)),
      a = Array.isArray(i),
      o = 0;
    for (i = a ? i : i[Symbol.iterator](); ; ) {
      var s;
      if (a) {
        if (o >= i.length) break;
        s = i[o++];
      } else {
        if ((o = i.next()).done) break;
        s = o.value;
      }
      var u = s,
        l = u[0],
        c = u[1],
        f = u[2];
      if (l > n) {
        ++r;
        for (var h = n; h < l; h++)
          t[h].shaperInfo = new gy(Qv.X, $v.End, "non_indic_cluster", r);
      }
      ++r;
      for (var d = l; d <= c; d++)
        t[d].shaperInfo = new gy(1 << dy(t[d]), py(t[d]), f[0], r);
      n = c + 1;
    }
    if (n < t.length) {
      ++r;
      for (var p = n; p < t.length; p++)
        t[p].shaperInfo = new gy(Qv.X, $v.End, "non_indic_cluster", r);
    }
  }
  function yy(e) {
    return e.shaperInfo.category & ey;
  }
  function by(e) {
    return e.shaperInfo.category & ty;
  }
  function my(e) {
    return e.shaperInfo.category & ry;
  }
  function wy(e, t) {
    var r = e,
      n = Array.isArray(r),
      i = 0;
    for (r = n ? r : r[Symbol.iterator](); ; ) {
      var a, o;
      if (n) {
        if (i >= r.length) break;
        o = r[i++];
      } else {
        if ((i = r.next()).done) break;
        o = i.value;
      }
      o.features = (((a = {})[t] = !0), a);
    }
    return (
      e[0]._font._layoutEngine.engine.GSUBProcessor.applyFeatures([t], e),
      1 === e.length
    );
  }
  function xy(e, t, r) {
    var n = [r, t, r];
    return wy(n.slice(0, 2), "blwf") || wy(n.slice(1, 3), "blwf")
      ? $v.Below_C
      : wy(n.slice(0, 2), "pstf") || wy(n.slice(1, 3), "pstf")
      ? $v.Post_C
      : wy(n.slice(0, 2), "pref") || wy(n.slice(1, 3), "pref")
      ? $v.Post_C
      : $v.Base_C;
  }
  function Sy(e, t, r) {
    var n = r.indicConfig,
      i = e._layoutEngine.engine.GSUBProcessor.features,
      a = e.glyphForCodePoint(9676).id,
      o = e.glyphForCodePoint(n.virama).id;
    if (o)
      for (var s = new pp(e, o, [n.virama]), u = 0; u < t.length; u++)
        t[u].shaperInfo.position === $v.Base_C &&
          (t[u].shaperInfo.position = xy(0, t[u].copy(), s));
    for (var l = 0, c = Ay(t, 0); l < t.length; c = Ay(t, (l = c))) {
      var f = t[l].shaperInfo,
        h = (f.category, f.syllableType);
      if ("symbol_cluster" !== h && "non_indic_cluster" !== h) {
        if ("broken_cluster" === h && a) {
          var d = new pp(e, a, [9676]);
          d.shaperInfo = new gy(
            1 << dy(d),
            py(d),
            t[l].shaperInfo.syllableType,
            t[l].shaperInfo.syllable
          );
          for (var p = l; p < c && t[p].shaperInfo.category === Qv.Repha; ) p++;
          t.splice(p++, 0, d), c++;
        }
        var g = c,
          v = l,
          y = !1;
        if (
          n.rephPos !== $v.Ra_To_Become_Reph &&
          i.rphf &&
          l + 3 <= c &&
          (("Implicit" === n.rephMode && !by(t[l + 2])) ||
            ("Explicit" === n.rephMode &&
              t[l + 2].shaperInfo.category === Qv.ZWJ))
        ) {
          var b = [t[l].copy(), t[l + 1].copy(), t[l + 2].copy()];
          if (
            wy(b.slice(0, 2), "rphf") ||
            ("Explicit" === n.rephMode && wy(b, "rphf"))
          ) {
            for (v += 2; v < c && by(t[v]); ) v++;
            (g = l), (y = !0);
          }
        } else if (
          "Log_Repha" === n.rephMode &&
          t[l].shaperInfo.category === Qv.Repha
        ) {
          for (v++; v < c && by(t[v]); ) v++;
          (g = l), (y = !0);
        }
        switch (n.basePos) {
          case "Last":
            var m = c,
              w = !1;
            do {
              var x = t[--m].shaperInfo;
              if (yy(t[m])) {
                if (
                  x.position !== $v.Below_C &&
                  (x.position !== $v.Post_C || w)
                ) {
                  g = m;
                  break;
                }
                x.position === $v.Below_C && (w = !0), (g = m);
              } else if (
                l < m &&
                x.category === Qv.ZWJ &&
                t[m - 1].shaperInfo.category === Qv.H
              )
                break;
            } while (m > v);
            break;
          case "First":
            for (var S = (g = l) + 1; S < c; S++)
              yy(t[S]) && (t[S].shaperInfo.position = $v.Below_C);
        }
        y && g === l && v - g <= 2 && (y = !1);
        for (var k = l; k < g; k++) {
          var A = t[k].shaperInfo;
          A.position = Math.min($v.Pre_C, A.position);
        }
        g < c && (t[g].shaperInfo.position = $v.Base_C);
        for (var C = g + 1; C < c; C++)
          if (t[C].shaperInfo.category === Qv.M) {
            for (var P = C + 1; P < c; P++)
              if (yy(t[P])) {
                t[P].shaperInfo.position = $v.Final_C;
                break;
              }
            break;
          }
        if (
          (y && (t[l].shaperInfo.position = $v.Ra_To_Become_Reph), r.isOldSpec)
        )
          for (var I = "Malayalam" !== r.unicodeScript, O = g + 1; O < c; O++)
            if (t[O].shaperInfo.category === Qv.H) {
              var E = void 0;
              for (
                E = c - 1;
                E > O &&
                !(yy(t[E]) || (I && t[E].shaperInfo.category === Qv.H));
                E--
              );
              if (t[E].shaperInfo.category !== Qv.H && E > O) {
                var B = t[O];
                t.splice.apply(t, [O, 0].concat(t.splice(O + 1, E - O))),
                  (t[E] = B);
              }
              break;
            }
        for (var T = $v.Start, L = l; L < c; L++) {
          var z = t[L].shaperInfo;
          if (z.category & (ty | Qv.N | Qv.RS | Qv.CM | (ry & z.category))) {
            if (
              ((z.position = T), z.category === Qv.H && z.position === $v.Pre_M)
            )
              for (var D = L; D > l; D--)
                if (t[D - 1].shaperInfo.position !== $v.Pre_M) {
                  z.position = t[D - 1].shaperInfo.position;
                  break;
                }
          } else z.position !== $v.SMVD && (T = z.position);
        }
        for (var R = g, M = g + 1; M < c; M++)
          if (yy(t[M])) {
            for (var F = R + 1; F < M; F++)
              t[F].shaperInfo.position < $v.SMVD &&
                (t[F].shaperInfo.position = t[M].shaperInfo.position);
            R = M;
          } else t[M].shaperInfo.category === Qv.M && (R = M);
        var U = t.slice(l, c);
        U.sort(function (e, t) {
          return e.shaperInfo.position - t.shaperInfo.position;
        }),
          t.splice.apply(t, [l, U.length].concat(U));
        for (var N = l; N < c; N++)
          if (t[N].shaperInfo.position === $v.Base_C) {
            g = N;
            break;
          }
        for (
          var j = l;
          j < c && t[j].shaperInfo.position === $v.Ra_To_Become_Reph;
          j++
        )
          t[j].features.rphf = !0;
        for (
          var G = !r.isOldSpec && "Pre_And_Post" === n.blwfMode, V = l;
          V < g;
          V++
        )
          (t[V].features.half = !0), G && (t[V].features.blwf = !0);
        for (var _ = g + 1; _ < c; _++)
          (t[_].features.abvf = !0),
            (t[_].features.pstf = !0),
            (t[_].features.blwf = !0);
        if (r.isOldSpec && "Devanagari" === r.unicodeScript)
          for (var q = l; q + 1 < g; q++)
            t[q].shaperInfo.category !== Qv.Ra ||
              t[q + 1].shaperInfo.category !== Qv.H ||
              (q + 1 !== g && t[q + 2].shaperInfo.category !== Qv.ZWJ) ||
              ((t[q].features.blwf = !0), (t[q + 1].features.blwf = !0));
        if (i.pref && g + 2 < c)
          for (var W = g + 1; W + 2 - 1 < c; W++) {
            if (wy([t[W].copy(), t[W + 1].copy()], "pref")) {
              for (var H = 0; H < 2; H++) t[W++].features.pref = !0;
              if (i.cfar) for (; W < c; W++) t[W].features.cfar = !0;
              break;
            }
          }
        for (var Y = l + 1; Y < c; Y++)
          if (by(t[Y])) {
            var Z = t[Y].shaperInfo.category === Qv.ZWNJ,
              X = Y;
            do {
              X--, Z && delete t[X].features.half;
            } while (X > l && !yy(t[X]));
          }
      }
    }
  }
  function ky(e, t, r) {
    for (
      var n = r.indicConfig,
        i = e._layoutEngine.engine.GSUBProcessor.features,
        a = 0,
        o = Ay(t, 0);
      a < t.length;
      o = Ay(t, (a = o))
    ) {
      for (var s = !!i.pref, u = a; u < o; u++)
        if (t[u].shaperInfo.position >= $v.Base_C) {
          if (s && u + 1 < o)
            for (var l = u + 1; l < o; l++)
              if (t[l].features.pref) {
                if (!t[l].substituted || !t[l].isLigated || t[l].isMultiplied) {
                  for (u = l; u < o && my(t[u]); ) u++;
                  (t[u].shaperInfo.position = $v.BASE_C), (s = !1);
                }
                break;
              }
          if ("Malayalam" === r.unicodeScript)
            for (var c = u + 1; c < o; c++) {
              for (; c < o && by(t[c]); ) c++;
              if (c === o || !my(t[c])) break;
              for (c++; c < o && by(t[c]); ) c++;
              c < o &&
                yy(t[c]) &&
                t[c].shaperInfo.position === $v.Below_C &&
                (t[(u = c)].shaperInfo.position = $v.Base_C);
            }
          a < u && t[u].shaperInfo.position > $v.Base_C && u--;
          break;
        }
      if (
        (u === o && a < u && t[u - 1].shaperInfo.category === Qv.ZWJ && u--,
        u < o)
      )
        for (; a < u && t[u].shaperInfo.category & (Qv.N | ry); ) u--;
      if (a + 1 < o && a < u) {
        var f = u === o ? u - 2 : u - 1;
        if ("Malayalam" !== r.unicodeScript && "Tamil" !== r.unicodeScript) {
          for (; f > a && !(t[f].shaperInfo.category & (Qv.M | ry)); ) f--;
          my(t[f]) && t[f].shaperInfo.position !== $v.Pre_M
            ? f + 1 < o && by(t[f + 1]) && f++
            : (f = a);
        }
        if (a < f && t[f].shaperInfo.position !== $v.Pre_M)
          for (var h = f; h > a; h--)
            if (t[h - 1].shaperInfo.position === $v.Pre_M) {
              var d = h - 1;
              d < u && u <= f && u--;
              var p = t[d];
              t.splice.apply(t, [d, 0].concat(t.splice(d + 1, f - d))),
                (t[f] = p),
                f--;
            }
      }
      if (
        a + 1 < o &&
        t[a].shaperInfo.position === $v.Ra_To_Become_Reph &&
        (t[a].shaperInfo.category === Qv.Repha) !==
          (t[a].isLigated && !t[a].isMultiplied)
      ) {
        var g = void 0,
          v = n.rephPos,
          y = !1;
        if (v !== $v.After_Post) {
          for (g = a + 1; g < u && !my(t[g]); ) g++;
          if (
            (g < u && my(t[g]) && (g + 1 < u && by(t[g + 1]) && g++, (y = !0)),
            !y && v === $v.After_Main)
          ) {
            for (
              g = u;
              g + 1 < o && t[g + 1].shaperInfo.position <= $v.After_Main;

            )
              g++;
            y = g < o;
          }
          if (!y && v === $v.After_Sub) {
            for (
              g = u;
              g + 1 < o &&
              !(
                t[g + 1].shaperInfo.position &
                ($v.Post_C | $v.After_Post | $v.SMVD)
              );

            )
              g++;
            y = g < o;
          }
        }
        if (!y) {
          for (g = a + 1; g < u && !my(t[g]); ) g++;
          g < u && my(t[g]) && (g + 1 < u && by(t[g + 1]) && g++, (y = !0));
        }
        if (!y) {
          for (g = o - 1; g > a && t[g].shaperInfo.position === $v.SMVD; ) g--;
          if (my(t[g]))
            for (var b = u + 1; b < g; b++)
              t[b].shaperInfo.category === Qv.M && g--;
        }
        var m = t[a];
        t.splice.apply(t, [a, 0].concat(t.splice(a + 1, g - a))),
          (t[g] = m),
          a < u && u <= g && u--;
      }
      if (s && u + 1 < o)
        for (var w = u + 1; w < o; w++)
          if (t[w].features.pref) {
            if (t[w].isLigated && !t[w].isMultiplied) {
              var x = u;
              if (
                "Malayalam" !== r.unicodeScript &&
                "Tamil" !== r.unicodeScript
              ) {
                for (; x > a && !(t[x - 1].shaperInfo.category & (Qv.M | ry)); )
                  x--;
                if (x > a && t[x - 1].shaperInfo.category === Qv.M)
                  for (var S = w, k = u + 1; k < S; k++)
                    if (t[k].shaperInfo.category === Qv.M) {
                      x--;
                      break;
                    }
              }
              x > a && my(t[x - 1]) && x < o && by(t[x]) && x++;
              var A = w,
                C = t[A];
              t.splice.apply(t, [x + 1, 0].concat(t.splice(x, A - x))),
                (t[x] = C),
                x <= u && u < A && u++;
            }
            break;
          }
      t[a].shaperInfo.position !== $v.Pre_M ||
        (a && /Cf|Mn/.test(wd.getCategory(t[a - 1].codePoints[0]))) ||
        (t[a].features.init = !0);
    }
  }
  function Ay(e, t) {
    if (t >= e.length) return t;
    for (
      var r = e[t].shaperInfo.syllable;
      ++t < e.length && e[t].shaperInfo.syllable === r;

    );
    return t;
  }
  var Cy = JSON.parse(String.fromCharCode.apply(String, td.inflate(nd(ay)))),
    Py = td.inflate(
      nd(
        "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"
      )
    ),
    Iy = Cy.categories,
    Oy = Cy.decompositions,
    Ey = new ul(Py),
    By = new Jv(Cy),
    Ty = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (
        li(t, e),
        (t.planFeatures = function (e) {
          e.addStage(Dy),
            e.addStage(["locl", "ccmp", "nukt", "akhn"]),
            e.addStage(Ry),
            e.addStage(["rphf"], !1),
            e.addStage(My),
            e.addStage(Ry),
            e.addStage(["pref"]),
            e.addStage(Fy),
            e.addStage([
              "rkrf",
              "abvf",
              "blwf",
              "half",
              "pstf",
              "vatu",
              "cjct",
            ]),
            e.addStage(Uy),
            e.addStage([
              "abvs",
              "blws",
              "pres",
              "psts",
              "dist",
              "abvm",
              "blwm",
            ]);
        }),
        (t.assignFeatures = function (e, t) {
          for (
            var r = function (r) {
                var n = t[r].codePoints[0];
                if (Oy[n]) {
                  var i = Oy[n].map(function (n) {
                    var i = e.font.glyphForCodePoint(n);
                    return new pp(e.font, i.id, [n], t[r].features);
                  });
                  t.splice.apply(t, [r, 1].concat(i));
                }
              },
              n = t.length - 1;
            n >= 0;
            n--
          )
            r(n);
        }),
        t
      );
    })(rp);
  function Ly(e) {
    return Ey.get(e.codePoints[0]);
  }
  ui(Ty, "zeroMarkWidths", "BEFORE_GPOS");
  var zy = function (e, t, r) {
    (this.category = e), (this.syllableType = t), (this.syllable = r);
  };
  function Dy(e, t) {
    var r = 0,
      n = By.match(t.map(Ly)),
      i = Array.isArray(n),
      a = 0;
    for (n = i ? n : n[Symbol.iterator](); ; ) {
      var o;
      if (i) {
        if (a >= n.length) break;
        o = n[a++];
      } else {
        if ((a = n.next()).done) break;
        o = a.value;
      }
      var s = o,
        u = s[0],
        l = s[1],
        c = s[2];
      ++r;
      for (var f = u; f <= l; f++)
        t[f].shaperInfo = new zy(Iy[Ly(t[f])], c[0], r);
      for (
        var h = "R" === t[u].shaperInfo.category ? 1 : Math.min(3, l - u),
          d = u;
        d < u + h;
        d++
      )
        t[d].features.rphf = !0;
    }
  }
  function Ry(e, t) {
    var r = t,
      n = Array.isArray(r),
      i = 0;
    for (r = n ? r : r[Symbol.iterator](); ; ) {
      var a;
      if (n) {
        if (i >= r.length) break;
        a = r[i++];
      } else {
        if ((i = r.next()).done) break;
        a = i.value;
      }
      a.substituted = !1;
    }
  }
  function My(e, t) {
    var r = t,
      n = Array.isArray(r),
      i = 0;
    for (r = n ? r : r[Symbol.iterator](); ; ) {
      var a;
      if (n) {
        if (i >= r.length) break;
        a = r[i++];
      } else {
        if ((i = r.next()).done) break;
        a = i.value;
      }
      var o = a;
      o.substituted && o.features.rphf && (o.shaperInfo.category = "R");
    }
  }
  function Fy(e, t) {
    var r = t,
      n = Array.isArray(r),
      i = 0;
    for (r = n ? r : r[Symbol.iterator](); ; ) {
      var a;
      if (n) {
        if (i >= r.length) break;
        a = r[i++];
      } else {
        if ((i = r.next()).done) break;
        a = i.value;
      }
      var o = a;
      o.substituted && (o.shaperInfo.category = "VPre");
    }
  }
  function Uy(e, t) {
    for (
      var r = e.glyphForCodePoint(9676).id, n = 0, i = Ny(t, 0);
      n < t.length;
      i = Ny(t, (n = i))
    ) {
      var a = void 0,
        o = void 0,
        s = t[n].shaperInfo,
        u = s.syllableType;
      if (
        "virama_terminated_cluster" === u ||
        "standard_cluster" === u ||
        "broken_cluster" === u
      ) {
        if ("broken_cluster" === u && r) {
          var l = new pp(e, r, [9676]);
          for (
            l.shaperInfo = s, a = n;
            a < i && "R" === t[a].shaperInfo.category;
            a++
          );
          t.splice(++a, 0, l), i++;
        }
        if ("R" === s.category && i - n > 1)
          for (a = n + 1; a < i; a++)
            if (Gy((s = t[a].shaperInfo)) || jy(t[a])) {
              jy(t[a]) && a--,
                t.splice.apply(
                  t,
                  [n, 0].concat(t.splice(n + 1, a - n), [t[a]])
                );
              break;
            }
        for (a = n, o = i; a < i; a++)
          Gy((s = t[a].shaperInfo)) || jy(t[a])
            ? (o = jy(t[a]) ? a + 1 : a)
            : ("VPre" === s.category || "VMPre" === s.category) &&
              o < a &&
              t.splice.apply(t, [o, 1, t[a]].concat(t.splice(o, a - o)));
      }
    }
  }
  function Ny(e, t) {
    if (t >= e.length) return t;
    for (
      var r = e[t].shaperInfo.syllable;
      ++t < e.length && e[t].shaperInfo.syllable === r;

    );
    return t;
  }
  function jy(e) {
    return "H" === e.shaperInfo.category && !e.isLigated;
  }
  function Gy(e) {
    return "B" === e.category || "GB" === e.category;
  }
  var Vy = {
    arab: lp,
    mong: lp,
    syrc: lp,
    "nko ": lp,
    phag: lp,
    mand: lp,
    mani: lp,
    phlp: lp,
    hang: gp,
    bng2: hy,
    beng: hy,
    dev2: hy,
    deva: hy,
    gjr2: hy,
    gujr: hy,
    guru: hy,
    gur2: hy,
    knda: hy,
    knd2: hy,
    mlm2: hy,
    mlym: hy,
    ory2: hy,
    orya: hy,
    taml: hy,
    tml2: hy,
    telu: hy,
    tel2: hy,
    khmr: hy,
    bali: Ty,
    batk: Ty,
    brah: Ty,
    bugi: Ty,
    buhd: Ty,
    cakm: Ty,
    cham: Ty,
    dupl: Ty,
    egyp: Ty,
    gran: Ty,
    hano: Ty,
    java: Ty,
    kthi: Ty,
    kali: Ty,
    khar: Ty,
    khoj: Ty,
    sind: Ty,
    lepc: Ty,
    limb: Ty,
    mahj: Ty,
    mtei: Ty,
    modi: Ty,
    hmng: Ty,
    rjng: Ty,
    saur: Ty,
    shrd: Ty,
    sidd: Ty,
    sinh: Ty,
    sund: Ty,
    sylo: Ty,
    tglg: Ty,
    tagb: Ty,
    tale: Ty,
    lana: Ty,
    tavt: Ty,
    takr: Ty,
    tibt: Ty,
    tfng: Ty,
    tirh: Ty,
    latn: rp,
    DFLT: rp,
  };
  for (
    var _y = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          li(t, e),
          (t.prototype.applyLookup = function (e, t) {
            var r = this;
            switch (e) {
              case 1:
                var n = this.coverageIndex(t.coverage);
                if (-1 === n) return !1;
                var i = this.glyphIterator.cur;
                switch (t.version) {
                  case 1:
                    i.id = (i.id + t.deltaGlyphID) & 65535;
                    break;
                  case 2:
                    i.id = t.substitute.get(n);
                }
                return !0;
              case 2:
                var a = this.coverageIndex(t.coverage);
                if (-1 !== a) {
                  var o,
                    s = t.sequences.get(a);
                  (this.glyphIterator.cur.id = s[0]),
                    (this.glyphIterator.cur.ligatureComponent = 0);
                  var u = this.glyphIterator.cur.features,
                    l = this.glyphIterator.cur,
                    c = s.slice(1).map(function (e, t) {
                      var n = new pp(r.font, e, void 0, u);
                      return (
                        (n.shaperInfo = l.shaperInfo),
                        (n.isLigated = l.isLigated),
                        (n.ligatureComponent = t + 1),
                        (n.substituted = !0),
                        (n.isMultiplied = !0),
                        n
                      );
                    });
                  return (
                    (o = this.glyphs).splice.apply(
                      o,
                      [this.glyphIterator.index + 1, 0].concat(c)
                    ),
                    !0
                  );
                }
                return !1;
              case 3:
                var f = this.coverageIndex(t.coverage);
                if (-1 !== f) {
                  return (
                    (this.glyphIterator.cur.id = t.alternateSet.get(f)[0]), !0
                  );
                }
                return !1;
              case 4:
                var h = this.coverageIndex(t.coverage);
                if (-1 === h) return !1;
                var d = t.ligatureSets.get(h),
                  p = Array.isArray(d),
                  g = 0;
                for (d = p ? d : d[Symbol.iterator](); ; ) {
                  var v;
                  if (p) {
                    if (g >= d.length) break;
                    v = d[g++];
                  } else {
                    if ((g = d.next()).done) break;
                    v = g.value;
                  }
                  var y = v,
                    b = this.sequenceMatchIndices(1, y.components);
                  if (b) {
                    var m = this.glyphIterator.cur,
                      w = m.codePoints.slice(),
                      x = b,
                      S = Array.isArray(x),
                      k = 0;
                    for (x = S ? x : x[Symbol.iterator](); ; ) {
                      var A;
                      if (S) {
                        if (k >= x.length) break;
                        A = x[k++];
                      } else {
                        if ((k = x.next()).done) break;
                        A = k.value;
                      }
                      var C = A;
                      w.push.apply(w, this.glyphs[C].codePoints);
                    }
                    var P = new pp(this.font, y.glyph, w, m.features);
                    (P.shaperInfo = m.shaperInfo),
                      (P.isLigated = !0),
                      (P.substituted = !0);
                    for (var I = m.isMark, O = 0; O < b.length && I; O++)
                      I = this.glyphs[b[O]].isMark;
                    P.ligatureID = I ? null : this.ligatureID++;
                    var E = m.ligatureID,
                      B = m.codePoints.length,
                      T = B,
                      L = this.glyphIterator.index + 1,
                      z = b,
                      D = Array.isArray(z),
                      R = 0;
                    for (z = D ? z : z[Symbol.iterator](); ; ) {
                      var M;
                      if (D) {
                        if (R >= z.length) break;
                        M = z[R++];
                      } else {
                        if ((R = z.next()).done) break;
                        M = R.value;
                      }
                      var F = M;
                      if (I) L = F;
                      else
                        for (; L < F; ) {
                          var U =
                            T -
                            B +
                            Math.min(this.glyphs[L].ligatureComponent || 1, B);
                          (this.glyphs[L].ligatureID = P.ligatureID),
                            (this.glyphs[L].ligatureComponent = U),
                            L++;
                        }
                      (E = this.glyphs[L].ligatureID),
                        (T += B = this.glyphs[L].codePoints.length),
                        L++;
                    }
                    if (E && !I)
                      for (
                        var N = L;
                        N < this.glyphs.length &&
                        this.glyphs[N].ligatureID === E;
                        N++
                      ) {
                        U =
                          T -
                          B +
                          Math.min(this.glyphs[N].ligatureComponent || 1, B);
                        this.glyphs[N].ligatureComponent = U;
                      }
                    for (var j = b.length - 1; j >= 0; j--)
                      this.glyphs.splice(b[j], 1);
                    return (this.glyphs[this.glyphIterator.index] = P), !0;
                  }
                }
                return !1;
              case 5:
                return this.applyContext(t);
              case 6:
                return this.applyChainingContext(t);
              case 7:
                return this.applyLookup(t.lookupType, t.extension);
              default:
                throw new Error("GSUB lookupType " + e + " is not supported");
            }
          }),
          t
        );
      })(dp),
      qy = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        li(t, e);
        var r = t.prototype;
        return (
          (r.applyPositionValue = function (e, t) {
            var r = this.positions[this.glyphIterator.peekIndex(e)];
            null != t.xAdvance && (r.xAdvance += t.xAdvance),
              null != t.yAdvance && (r.yAdvance += t.yAdvance),
              null != t.xPlacement && (r.xOffset += t.xPlacement),
              null != t.yPlacement && (r.yOffset += t.yPlacement);
            var n = this.font._variationProcessor,
              i = this.font.GDEF && this.font.GDEF.itemVariationStore;
            n &&
              i &&
              (t.xPlaDevice &&
                (r.xOffset += n.getDelta(i, t.xPlaDevice.a, t.xPlaDevice.b)),
              t.yPlaDevice &&
                (r.yOffset += n.getDelta(i, t.yPlaDevice.a, t.yPlaDevice.b)),
              t.xAdvDevice &&
                (r.xAdvance += n.getDelta(i, t.xAdvDevice.a, t.xAdvDevice.b)),
              t.yAdvDevice &&
                (r.yAdvance += n.getDelta(i, t.yAdvDevice.a, t.yAdvDevice.b)));
          }),
          (r.applyLookup = function (e, t) {
            switch (e) {
              case 1:
                var r = this.coverageIndex(t.coverage);
                if (-1 === r) return !1;
                switch (t.version) {
                  case 1:
                    this.applyPositionValue(0, t.value);
                    break;
                  case 2:
                    this.applyPositionValue(0, t.values.get(r));
                }
                return !0;
              case 2:
                var n = this.glyphIterator.peek();
                if (!n) return !1;
                var i = this.coverageIndex(t.coverage);
                if (-1 === i) return !1;
                switch (t.version) {
                  case 1:
                    var a = t.pairSets.get(i),
                      o = Array.isArray(a),
                      s = 0;
                    for (a = o ? a : a[Symbol.iterator](); ; ) {
                      var u;
                      if (o) {
                        if (s >= a.length) break;
                        u = a[s++];
                      } else {
                        if ((s = a.next()).done) break;
                        u = s.value;
                      }
                      var l = u;
                      if (l.secondGlyph === n.id)
                        return (
                          this.applyPositionValue(0, l.value1),
                          this.applyPositionValue(1, l.value2),
                          !0
                        );
                    }
                    return !1;
                  case 2:
                    var c = this.getClassID(
                        this.glyphIterator.cur.id,
                        t.classDef1
                      ),
                      f = this.getClassID(n.id, t.classDef2);
                    if (-1 === c || -1 === f) return !1;
                    var h = t.classRecords.get(c).get(f);
                    return (
                      this.applyPositionValue(0, h.value1),
                      this.applyPositionValue(1, h.value2),
                      !0
                    );
                }
              case 3:
                var d = this.glyphIterator.peekIndex(),
                  p = this.glyphs[d];
                if (!p) return !1;
                var g = t.entryExitRecords[this.coverageIndex(t.coverage)];
                if (!g || !g.exitAnchor) return !1;
                var v =
                  t.entryExitRecords[this.coverageIndex(t.coverage, p.id)];
                if (!v || !v.entryAnchor) return !1;
                var y = this.getAnchor(v.entryAnchor),
                  b = this.getAnchor(g.exitAnchor),
                  m = this.positions[this.glyphIterator.index],
                  w = this.positions[d];
                switch (this.direction) {
                  case "ltr":
                    m.xAdvance = b.x + m.xOffset;
                    var x = y.x + w.xOffset;
                    (w.xAdvance -= x), (w.xOffset -= x);
                    break;
                  case "rtl":
                    (x = b.x + m.xOffset),
                      (m.xAdvance -= x),
                      (m.xOffset -= x),
                      (w.xAdvance = y.x + w.xOffset);
                }
                return (
                  this.glyphIterator.flags.rightToLeft
                    ? ((this.glyphIterator.cur.cursiveAttachment = d),
                      (m.yOffset = y.y - b.y))
                    : ((p.cursiveAttachment = this.glyphIterator.index),
                      (m.yOffset = b.y - y.y)),
                  !0
                );
              case 4:
                var S = this.coverageIndex(t.markCoverage);
                if (-1 === S) return !1;
                for (
                  var k = this.glyphIterator.index;
                  --k >= 0 &&
                  (this.glyphs[k].isMark ||
                    this.glyphs[k].ligatureComponent > 0);

                );
                if (k < 0) return !1;
                var A = this.coverageIndex(t.baseCoverage, this.glyphs[k].id);
                if (-1 === A) return !1;
                var C = t.markArray[S],
                  P = t.baseArray[A][C.class];
                return this.applyAnchor(C, P, k), !0;
              case 5:
                var I = this.coverageIndex(t.markCoverage);
                if (-1 === I) return !1;
                for (
                  var O = this.glyphIterator.index;
                  --O >= 0 && this.glyphs[O].isMark;

                );
                if (O < 0) return !1;
                var E = this.coverageIndex(
                  t.ligatureCoverage,
                  this.glyphs[O].id
                );
                if (-1 === E) return !1;
                var B = t.ligatureArray[E],
                  T = this.glyphIterator.cur,
                  L = this.glyphs[O],
                  z =
                    L.ligatureID &&
                    L.ligatureID === T.ligatureID &&
                    T.ligatureComponent > 0
                      ? Math.min(T.ligatureComponent, L.codePoints.length) - 1
                      : L.codePoints.length - 1,
                  D = t.markArray[I],
                  R = B[z][D.class];
                return this.applyAnchor(D, R, O), !0;
              case 6:
                var M = this.coverageIndex(t.mark1Coverage);
                if (-1 === M) return !1;
                var F = this.glyphIterator.peekIndex(-1),
                  U = this.glyphs[F];
                if (!U || !U.isMark) return !1;
                var N = this.glyphIterator.cur,
                  j = !1;
                if (
                  (N.ligatureID === U.ligatureID
                    ? N.ligatureID
                      ? N.ligatureComponent === U.ligatureComponent && (j = !0)
                      : (j = !0)
                    : ((N.ligatureID && !N.ligatureComponent) ||
                        (U.ligatureID && !U.ligatureComponent)) &&
                      (j = !0),
                  !j)
                )
                  return !1;
                var G = this.coverageIndex(t.mark2Coverage, U.id);
                if (-1 === G) return !1;
                var V = t.mark1Array[M],
                  _ = t.mark2Array[G][V.class];
                return this.applyAnchor(V, _, F), !0;
              case 7:
                return this.applyContext(t);
              case 8:
                return this.applyChainingContext(t);
              case 9:
                return this.applyLookup(t.lookupType, t.extension);
              default:
                throw new Error("Unsupported GPOS table: " + e);
            }
          }),
          (r.applyAnchor = function (e, t, r) {
            var n = this.getAnchor(t),
              i = this.getAnchor(e.markAnchor),
              a = (this.positions[r], this.positions[this.glyphIterator.index]);
            (a.xOffset = n.x - i.x),
              (a.yOffset = n.y - i.y),
              (this.glyphIterator.cur.markAttachment = r);
          }),
          (r.getAnchor = function (e) {
            var t = e.xCoordinate,
              r = e.yCoordinate,
              n = this.font._variationProcessor,
              i = this.font.GDEF && this.font.GDEF.itemVariationStore;
            return (
              n &&
                i &&
                (e.xDeviceTable &&
                  (t += n.getDelta(i, e.xDeviceTable.a, e.xDeviceTable.b)),
                e.yDeviceTable &&
                  (r += n.getDelta(i, e.yDeviceTable.a, e.yDeviceTable.b))),
              { x: t, y: r }
            );
          }),
          (r.applyFeatures = function (t, r, n) {
            e.prototype.applyFeatures.call(this, t, r, n);
            for (var i = 0; i < this.glyphs.length; i++)
              this.fixCursiveAttachment(i);
            this.fixMarkAttachment();
          }),
          (r.fixCursiveAttachment = function (e) {
            var t = this.glyphs[e];
            if (null != t.cursiveAttachment) {
              var r = t.cursiveAttachment;
              (t.cursiveAttachment = null),
                this.fixCursiveAttachment(r),
                (this.positions[e].yOffset += this.positions[r].yOffset);
            }
          }),
          (r.fixMarkAttachment = function () {
            for (var e = 0; e < this.glyphs.length; e++) {
              var t = this.glyphs[e];
              if (null != t.markAttachment) {
                var r = t.markAttachment;
                if (
                  ((this.positions[e].xOffset += this.positions[r].xOffset),
                  (this.positions[e].yOffset += this.positions[r].yOffset),
                  "ltr" === this.direction)
                )
                  for (var n = r; n < e; n++)
                    (this.positions[e].xOffset -= this.positions[n].xAdvance),
                      (this.positions[e].yOffset -= this.positions[n].yAdvance);
                else
                  for (var i = r + 1; i < e + 1; i++)
                    (this.positions[e].xOffset += this.positions[i].xAdvance),
                      (this.positions[e].yOffset += this.positions[i].yAdvance);
              }
            }
          }),
          t
        );
      })(dp),
      Wy = (function () {
        function e(e) {
          (this.font = e),
            (this.glyphInfos = null),
            (this.plan = null),
            (this.GSUBProcessor = null),
            (this.GPOSProcessor = null),
            (this.fallbackPosition = !0),
            e.GSUB && (this.GSUBProcessor = new _y(e, e.GSUB)),
            e.GPOS && (this.GPOSProcessor = new qy(e, e.GPOS));
        }
        var t = e.prototype;
        return (
          (t.setup = function (e) {
            var t = this;
            this.glyphInfos = e.glyphs.map(function (e) {
              return new pp(t.font, e.id, [].concat(e.codePoints));
            });
            var r = null;
            for (var n in (this.GPOSProcessor &&
              (r = this.GPOSProcessor.selectScript(
                e.script,
                e.language,
                e.direction
              )),
            this.GSUBProcessor &&
              (r = this.GSUBProcessor.selectScript(
                e.script,
                e.language,
                e.direction
              )),
            (this.shaper = (function (e) {
              Array.isArray(e) || (e = [e]);
              var t = e,
                r = Array.isArray(t),
                n = 0;
              for (t = r ? t : t[Symbol.iterator](); ; ) {
                var i;
                if (r) {
                  if (n >= t.length) break;
                  i = t[n++];
                } else {
                  if ((n = t.next()).done) break;
                  i = n.value;
                }
                var a = Vy[i];
                if (a) return a;
              }
              return rp;
            })(r)),
            (this.plan = new Kd(this.font, r, e.direction)),
            this.shaper.plan(this.plan, this.glyphInfos, e.features),
            this.plan.allFeatures))
              e.features[n] = !0;
          }),
          (t.substitute = function (e) {
            var t = this;
            this.GSUBProcessor &&
              (this.plan.process(this.GSUBProcessor, this.glyphInfos),
              (e.glyphs = this.glyphInfos.map(function (e) {
                return t.font.getGlyph(e.id, e.codePoints);
              })));
          }),
          (t.position = function (e) {
            return (
              "BEFORE_GPOS" === this.shaper.zeroMarkWidths &&
                this.zeroMarkAdvances(e.positions),
              this.GPOSProcessor &&
                this.plan.process(
                  this.GPOSProcessor,
                  this.glyphInfos,
                  e.positions
                ),
              "AFTER_GPOS" === this.shaper.zeroMarkWidths &&
                this.zeroMarkAdvances(e.positions),
              "rtl" === e.direction &&
                (e.glyphs.reverse(), e.positions.reverse()),
              this.GPOSProcessor && this.GPOSProcessor.features
            );
          }),
          (t.zeroMarkAdvances = function (e) {
            for (var t = 0; t < this.glyphInfos.length; t++)
              this.glyphInfos[t].isMark &&
                ((e[t].xAdvance = 0), (e[t].yAdvance = 0));
          }),
          (t.cleanup = function () {
            (this.glyphInfos = null), (this.plan = null), (this.shaper = null);
          }),
          (t.getAvailableFeatures = function (e, t) {
            var r = [];
            return (
              this.GSUBProcessor &&
                (this.GSUBProcessor.selectScript(e, t),
                r.push.apply(r, Object.keys(this.GSUBProcessor.features))),
              this.GPOSProcessor &&
                (this.GPOSProcessor.selectScript(e, t),
                r.push.apply(r, Object.keys(this.GPOSProcessor.features))),
              r
            );
          }),
          e
        );
      })(),
      Hy = (function () {
        function e(e) {
          (this.font = e),
            (this.unicodeLayoutEngine = null),
            (this.kernProcessor = null),
            this.font.morx
              ? (this.engine = new Xd(this.font))
              : (this.font.GSUB || this.font.GPOS) &&
                (this.engine = new Wy(this.font));
        }
        var t = e.prototype;
        return (
          (t.layout = function (e, t, r, n, i) {
            if (
              ("string" == typeof t && ((i = n), (n = r), (r = t), (t = [])),
              "string" == typeof e)
            ) {
              null == r &&
                (r = (function (e) {
                  for (var t = e.length, r = 0; r < t; ) {
                    var n = e.charCodeAt(r++);
                    if (55296 <= n && n <= 56319 && r < t) {
                      var i = e.charCodeAt(r);
                      56320 <= i &&
                        i <= 57343 &&
                        (r++, (n = ((1023 & n) << 10) + (1023 & i) + 65536));
                    }
                    var a = wd.getScript(n);
                    if ("Common" !== a && "Inherited" !== a && "Unknown" !== a)
                      return kd[a];
                  }
                  return kd.Unknown;
                })(e));
              var a = this.font.glyphsForString(e);
            } else {
              if (null == r) {
                var o = [],
                  s = e,
                  u = Array.isArray(s),
                  l = 0;
                for (s = u ? s : s[Symbol.iterator](); ; ) {
                  var c;
                  if (u) {
                    if (l >= s.length) break;
                    c = s[l++];
                  } else {
                    if ((l = s.next()).done) break;
                    c = l.value;
                  }
                  var f = c;
                  o.push.apply(o, f.codePoints);
                }
                r = (function (e) {
                  for (var t = 0; t < e.length; t++) {
                    var r = e[t],
                      n = wd.getScript(r);
                    if ("Common" !== n && "Inherited" !== n && "Unknown" !== n)
                      return kd[n];
                  }
                  return kd.Unknown;
                })(o);
              }
              a = e;
            }
            var h = new zd(a, t, r, n, i);
            return 0 === a.length
              ? ((h.positions = []), h)
              : (this.engine && this.engine.setup && this.engine.setup(h),
                this.substitute(h),
                this.position(h),
                this.hideDefaultIgnorables(h.glyphs, h.positions),
                this.engine && this.engine.cleanup && this.engine.cleanup(),
                h);
          }),
          (t.substitute = function (e) {
            this.engine && this.engine.substitute && this.engine.substitute(e);
          }),
          (t.position = function (e) {
            e.positions = e.glyphs.map(function (e) {
              return new Dd(e.advanceWidth);
            });
            var t = null;
            this.engine &&
              this.engine.position &&
              (t = this.engine.position(e)),
              t ||
                (this.engine && !this.engine.fallbackPosition) ||
                (this.unicodeLayoutEngine ||
                  (this.unicodeLayoutEngine = new xd(this.font)),
                this.unicodeLayoutEngine.positionGlyphs(e.glyphs, e.positions)),
              (t && t.kern) ||
                !1 === e.features.kern ||
                !this.font.kern ||
                (this.kernProcessor || (this.kernProcessor = new Fu(this.font)),
                this.kernProcessor.process(e.glyphs, e.positions),
                (e.features.kern = !0));
          }),
          (t.hideDefaultIgnorables = function (e, t) {
            for (
              var r = this.font.glyphForCodePoint(32), n = 0;
              n < e.length;
              n++
            )
              this.isDefaultIgnorable(e[n].codePoints[0]) &&
                ((e[n] = r), (t[n].xAdvance = 0), (t[n].yAdvance = 0));
          }),
          (t.isDefaultIgnorable = function (e) {
            var t = e >> 16;
            if (0 === t)
              switch (e >> 8) {
                case 0:
                  return 173 === e;
                case 3:
                  return 847 === e;
                case 6:
                  return 1564 === e;
                case 23:
                  return 6068 <= e && e <= 6069;
                case 24:
                  return 6155 <= e && e <= 6158;
                case 32:
                  return (
                    (8203 <= e && e <= 8207) ||
                    (8234 <= e && e <= 8238) ||
                    (8288 <= e && e <= 8303)
                  );
                case 254:
                  return (65024 <= e && e <= 65039) || 65279 === e;
                case 255:
                  return 65520 <= e && e <= 65528;
                default:
                  return !1;
              }
            else
              switch (t) {
                case 1:
                  return (
                    (113824 <= e && e <= 113827) || (119155 <= e && e <= 119162)
                  );
                case 14:
                  return 917504 <= e && e <= 921599;
                default:
                  return !1;
              }
          }),
          (t.getAvailableFeatures = function (e, t) {
            var r = [];
            return (
              this.engine &&
                r.push.apply(r, this.engine.getAvailableFeatures(e, t)),
              this.font.kern && -1 === r.indexOf("kern") && r.push("kern"),
              r
            );
          }),
          (t.stringsForGlyph = function (e) {
            var t = new Set(),
              r = this.font._cmapProcessor.codePointsForGlyph(e),
              n = Array.isArray(r),
              i = 0;
            for (r = n ? r : r[Symbol.iterator](); ; ) {
              var a;
              if (n) {
                if (i >= r.length) break;
                a = r[i++];
              } else {
                if ((i = r.next()).done) break;
                a = i.value;
              }
              var o = a;
              t.add(String.fromCodePoint(o));
            }
            if (this.engine && this.engine.stringsForGlyph) {
              var s = this.engine.stringsForGlyph(e),
                u = Array.isArray(s),
                l = 0;
              for (s = u ? s : s[Symbol.iterator](); ; ) {
                var c;
                if (u) {
                  if (l >= s.length) break;
                  c = s[l++];
                } else {
                  if ((l = s.next()).done) break;
                  c = l.value;
                }
                var f = c;
                t.add(f);
              }
            }
            return Array.from(t);
          }),
          e
        );
      })(),
      Yy = {
        moveTo: "M",
        lineTo: "L",
        quadraticCurveTo: "Q",
        bezierCurveTo: "C",
        closePath: "Z",
      },
      Zy = (function () {
        function e() {
          (this.commands = []), (this._bbox = null), (this._cbox = null);
        }
        var t = e.prototype;
        return (
          (t.toFunction = function () {
            var e = this;
            return function (t) {
              return e.commands.forEach(function (e) {
                return t[e.command].apply(t, e.args);
              });
            };
          }),
          (t.toSVG = function () {
            return this.commands
              .map(function (e) {
                var t = e.args.map(function (e) {
                  return Math.round(100 * e) / 100;
                });
                return "" + Yy[e.command] + t.join(" ");
              })
              .join("");
          }),
          (t.mapPoints = function (t) {
            var r = new e(),
              n = this.commands,
              i = Array.isArray(n),
              a = 0;
            for (n = i ? n : n[Symbol.iterator](); ; ) {
              var o;
              if (i) {
                if (a >= n.length) break;
                o = n[a++];
              } else {
                if ((a = n.next()).done) break;
                o = a.value;
              }
              for (var s = o, u = [], l = 0; l < s.args.length; l += 2) {
                var c = t(s.args[l], s.args[l + 1]),
                  f = c[0],
                  h = c[1];
                u.push(f, h);
              }
              r[s.command].apply(r, u);
            }
            return r;
          }),
          (t.transform = function (e, t, r, n, i, a) {
            return this.mapPoints(function (o, s) {
              return [(o = e * o + r * s + i), (s = t * o + n * s + a)];
            });
          }),
          (t.translate = function (e, t) {
            return this.transform(1, 0, 0, 1, e, t);
          }),
          (t.rotate = function (e) {
            var t = Math.cos(e),
              r = Math.sin(e);
            return this.transform(t, r, -r, t, 0, 0);
          }),
          (t.scale = function (e, t) {
            return void 0 === t && (t = e), this.transform(e, 0, 0, t, 0, 0);
          }),
          si(e, [
            {
              key: "cbox",
              get: function () {
                if (!this._cbox) {
                  var e = new Sd(),
                    t = this.commands,
                    r = Array.isArray(t),
                    n = 0;
                  for (t = r ? t : t[Symbol.iterator](); ; ) {
                    var i;
                    if (r) {
                      if (n >= t.length) break;
                      i = t[n++];
                    } else {
                      if ((n = t.next()).done) break;
                      i = n.value;
                    }
                    for (var a = i, o = 0; o < a.args.length; o += 2)
                      e.addPoint(a.args[o], a.args[o + 1]);
                  }
                  this._cbox = Object.freeze(e);
                }
                return this._cbox;
              },
            },
            {
              key: "bbox",
              get: function () {
                if (this._bbox) return this._bbox;
                var e = new Sd(),
                  t = 0,
                  r = 0,
                  n = function (e) {
                    return (
                      Math.pow(1 - e, 3) * S[P] +
                      3 * Math.pow(1 - e, 2) * e * k[P] +
                      3 * (1 - e) * Math.pow(e, 2) * A[P] +
                      Math.pow(e, 3) * C[P]
                    );
                  },
                  i = this.commands,
                  a = Array.isArray(i),
                  o = 0;
                for (i = a ? i : i[Symbol.iterator](); ; ) {
                  var s;
                  if (a) {
                    if (o >= i.length) break;
                    s = i[o++];
                  } else {
                    if ((o = i.next()).done) break;
                    s = o.value;
                  }
                  var u = s;
                  switch (u.command) {
                    case "moveTo":
                    case "lineTo":
                      var l = u.args,
                        c = l[0],
                        f = l[1];
                      e.addPoint(c, f), (t = c), (r = f);
                      break;
                    case "quadraticCurveTo":
                    case "bezierCurveTo":
                      if ("quadraticCurveTo" === u.command)
                        var h = u.args,
                          d = h[0],
                          p = h[1],
                          g = t + (2 / 3) * (d - t),
                          v = r + (2 / 3) * (p - r),
                          y = (w = h[2]) + (2 / 3) * (d - w),
                          b = (x = h[3]) + (2 / 3) * (p - x);
                      else
                        var m = u.args,
                          w =
                            ((g = m[0]),
                            (v = m[1]),
                            (y = m[2]),
                            (b = m[3]),
                            m[4]),
                          x = m[5];
                      e.addPoint(w, x);
                      for (
                        var S = [t, r],
                          k = [g, v],
                          A = [y, b],
                          C = [w, x],
                          P = 0;
                        P <= 1;
                        P++
                      ) {
                        var I = 6 * S[P] - 12 * k[P] + 6 * A[P],
                          O = -3 * S[P] + 9 * k[P] - 9 * A[P] + 3 * C[P];
                        if (((u = 3 * k[P] - 3 * S[P]), 0 !== O)) {
                          var E = Math.pow(I, 2) - 4 * u * O;
                          if (!(E < 0)) {
                            var B = (-I + Math.sqrt(E)) / (2 * O);
                            0 < B &&
                              B < 1 &&
                              (0 === P
                                ? e.addPoint(n(B), e.maxY)
                                : 1 === P && e.addPoint(e.maxX, n(B)));
                            var T = (-I - Math.sqrt(E)) / (2 * O);
                            0 < T &&
                              T < 1 &&
                              (0 === P
                                ? e.addPoint(n(T), e.maxY)
                                : 1 === P && e.addPoint(e.maxX, n(T)));
                          }
                        } else {
                          if (0 === I) continue;
                          var L = -u / I;
                          0 < L &&
                            L < 1 &&
                            (0 === P
                              ? e.addPoint(n(L), e.maxY)
                              : 1 === P && e.addPoint(e.maxX, n(L)));
                        }
                      }
                      (t = w), (r = x);
                  }
                }
                return (this._bbox = Object.freeze(e));
              },
            },
          ]),
          e
        );
      })(),
      Xy = [
        "moveTo",
        "lineTo",
        "quadraticCurveTo",
        "bezierCurveTo",
        "closePath",
      ],
      Ky = function () {
        var e = Xy[Jy];
        Zy.prototype[e] = function () {
          for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          return (
            (this._bbox = this._cbox = null),
            this.commands.push({ command: e, args: r }),
            this
          );
        };
      },
      Jy = 0;
    Jy < Xy.length;
    Jy++
  )
    Ky();
  var Qy,
    $y,
    eb = [
      ".notdef",
      ".null",
      "nonmarkingreturn",
      "space",
      "exclam",
      "quotedbl",
      "numbersign",
      "dollar",
      "percent",
      "ampersand",
      "quotesingle",
      "parenleft",
      "parenright",
      "asterisk",
      "plus",
      "comma",
      "hyphen",
      "period",
      "slash",
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "colon",
      "semicolon",
      "less",
      "equal",
      "greater",
      "question",
      "at",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "bracketleft",
      "backslash",
      "bracketright",
      "asciicircum",
      "underscore",
      "grave",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "braceleft",
      "bar",
      "braceright",
      "asciitilde",
      "Adieresis",
      "Aring",
      "Ccedilla",
      "Eacute",
      "Ntilde",
      "Odieresis",
      "Udieresis",
      "aacute",
      "agrave",
      "acircumflex",
      "adieresis",
      "atilde",
      "aring",
      "ccedilla",
      "eacute",
      "egrave",
      "ecircumflex",
      "edieresis",
      "iacute",
      "igrave",
      "icircumflex",
      "idieresis",
      "ntilde",
      "oacute",
      "ograve",
      "ocircumflex",
      "odieresis",
      "otilde",
      "uacute",
      "ugrave",
      "ucircumflex",
      "udieresis",
      "dagger",
      "degree",
      "cent",
      "sterling",
      "section",
      "bullet",
      "paragraph",
      "germandbls",
      "registered",
      "copyright",
      "trademark",
      "acute",
      "dieresis",
      "notequal",
      "AE",
      "Oslash",
      "infinity",
      "plusminus",
      "lessequal",
      "greaterequal",
      "yen",
      "mu",
      "partialdiff",
      "summation",
      "product",
      "pi",
      "integral",
      "ordfeminine",
      "ordmasculine",
      "Omega",
      "ae",
      "oslash",
      "questiondown",
      "exclamdown",
      "logicalnot",
      "radical",
      "florin",
      "approxequal",
      "Delta",
      "guillemotleft",
      "guillemotright",
      "ellipsis",
      "nonbreakingspace",
      "Agrave",
      "Atilde",
      "Otilde",
      "OE",
      "oe",
      "endash",
      "emdash",
      "quotedblleft",
      "quotedblright",
      "quoteleft",
      "quoteright",
      "divide",
      "lozenge",
      "ydieresis",
      "Ydieresis",
      "fraction",
      "currency",
      "guilsinglleft",
      "guilsinglright",
      "fi",
      "fl",
      "daggerdbl",
      "periodcentered",
      "quotesinglbase",
      "quotedblbase",
      "perthousand",
      "Acircumflex",
      "Ecircumflex",
      "Aacute",
      "Edieresis",
      "Egrave",
      "Iacute",
      "Icircumflex",
      "Idieresis",
      "Igrave",
      "Oacute",
      "Ocircumflex",
      "apple",
      "Ograve",
      "Uacute",
      "Ucircumflex",
      "Ugrave",
      "dotlessi",
      "circumflex",
      "tilde",
      "macron",
      "breve",
      "dotaccent",
      "ring",
      "cedilla",
      "hungarumlaut",
      "ogonek",
      "caron",
      "Lslash",
      "lslash",
      "Scaron",
      "scaron",
      "Zcaron",
      "zcaron",
      "brokenbar",
      "Eth",
      "eth",
      "Yacute",
      "yacute",
      "Thorn",
      "thorn",
      "minus",
      "multiply",
      "onesuperior",
      "twosuperior",
      "threesuperior",
      "onehalf",
      "onequarter",
      "threequarters",
      "franc",
      "Gbreve",
      "gbreve",
      "Idotaccent",
      "Scedilla",
      "scedilla",
      "Cacute",
      "cacute",
      "Ccaron",
      "ccaron",
      "dcroat",
    ],
    tb =
      (ci(
        (Qy = (function () {
          function e(e, t, r) {
            (this.id = e),
              (this.codePoints = t),
              (this._font = r),
              (this.isMark =
                this.codePoints.length > 0 && this.codePoints.every(wd.isMark)),
              (this.isLigature = this.codePoints.length > 1);
          }
          var t = e.prototype;
          return (
            (t._getPath = function () {
              return new Zy();
            }),
            (t._getCBox = function () {
              return this.path.cbox;
            }),
            (t._getBBox = function () {
              return this.path.bbox;
            }),
            (t._getTableMetrics = function (e) {
              if (this.id < e.metrics.length) return e.metrics.get(this.id);
              var t = e.metrics.get(e.metrics.length - 1);
              return {
                advance: t ? t.advance : 0,
                bearing: e.bearings.get(this.id - e.metrics.length) || 0,
              };
            }),
            (t._getMetrics = function (e) {
              if (this._metrics) return this._metrics;
              var t,
                r = this._getTableMetrics(this._font.hmtx),
                n = r.advance,
                i = r.bearing;
              if (this._font.vmtx)
                var a = this._getTableMetrics(this._font.vmtx),
                  o = a.advance,
                  s = a.bearing;
              else if (
                (null == e && (e = this.cbox),
                (t = this._font["OS/2"]) && t.version > 0)
              )
                (o = Math.abs(t.typoAscender - t.typoDescender)),
                  (s = t.typoAscender - e.maxY);
              else {
                var u = this._font.hhea;
                (o = Math.abs(u.ascent - u.descent)), (s = u.ascent - e.maxY);
              }
              return (
                this._font._variationProcessor &&
                  this._font.HVAR &&
                  (n += this._font._variationProcessor.getAdvanceAdjustment(
                    this.id,
                    this._font.HVAR
                  )),
                (this._metrics = {
                  advanceWidth: n,
                  advanceHeight: o,
                  leftBearing: i,
                  topBearing: s,
                })
              );
            }),
            (t.getScaledPath = function (e) {
              var t = (1 / this._font.unitsPerEm) * e;
              return this.path.scale(t);
            }),
            (t._getName = function () {
              var e = this._font.post;
              if (!e) return null;
              switch (e.version) {
                case 1:
                  return eb[this.id];
                case 2:
                  var t = e.glyphNameIndex[this.id];
                  return t < eb.length ? eb[t] : e.names[t - eb.length];
                case 2.5:
                  return eb[this.id + e.offsets[this.id]];
                case 4:
                  return String.fromCharCode(e.map[this.id]);
              }
            }),
            (t.render = function (e, t) {
              e.save();
              var r = (1 / this._font.head.unitsPerEm) * t;
              e.scale(r, r), this.path.toFunction()(e), e.fill(), e.restore();
            }),
            si(e, [
              {
                key: "cbox",
                get: function () {
                  return this._getCBox();
                },
              },
              {
                key: "bbox",
                get: function () {
                  return this._getBBox();
                },
              },
              {
                key: "path",
                get: function () {
                  return this._getPath();
                },
              },
              {
                key: "advanceWidth",
                get: function () {
                  return this._getMetrics().advanceWidth;
                },
              },
              {
                key: "advanceHeight",
                get: function () {
                  return this._getMetrics().advanceHeight;
                },
              },
              { key: "ligatureCaretPositions", get: function () {} },
              {
                key: "name",
                get: function () {
                  return this._getName();
                },
              },
            ]),
            e
          );
        })()).prototype,
        "cbox",
        [fi],
        Object.getOwnPropertyDescriptor(Qy.prototype, "cbox"),
        Qy.prototype
      ),
      ci(
        Qy.prototype,
        "bbox",
        [fi],
        Object.getOwnPropertyDescriptor(Qy.prototype, "bbox"),
        Qy.prototype
      ),
      ci(
        Qy.prototype,
        "path",
        [fi],
        Object.getOwnPropertyDescriptor(Qy.prototype, "path"),
        Qy.prototype
      ),
      ci(
        Qy.prototype,
        "advanceWidth",
        [fi],
        Object.getOwnPropertyDescriptor(Qy.prototype, "advanceWidth"),
        Qy.prototype
      ),
      ci(
        Qy.prototype,
        "advanceHeight",
        [fi],
        Object.getOwnPropertyDescriptor(Qy.prototype, "advanceHeight"),
        Qy.prototype
      ),
      ci(
        Qy.prototype,
        "name",
        [fi],
        Object.getOwnPropertyDescriptor(Qy.prototype, "name"),
        Qy.prototype
      ),
      Qy),
    rb = new ni.Struct({
      numberOfContours: ni.int16,
      xMin: ni.int16,
      yMin: ni.int16,
      xMax: ni.int16,
      yMax: ni.int16,
    }),
    nb = (function () {
      function e(e, t, r, n) {
        void 0 === r && (r = 0),
          void 0 === n && (n = 0),
          (this.onCurve = e),
          (this.endContour = t),
          (this.x = r),
          (this.y = n);
      }
      return (
        (e.prototype.copy = function () {
          return new e(this.onCurve, this.endContour, this.x, this.y);
        }),
        e
      );
    })(),
    ib = function (e, t, r) {
      (this.glyphID = e),
        (this.dx = t),
        (this.dy = r),
        (this.pos = 0),
        (this.scaleX = this.scaleY = 1),
        (this.scale01 = this.scale10 = 0);
    },
    ab = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      li(t, e);
      var r = t.prototype;
      return (
        (r._getCBox = function (e) {
          if (this._font._variationProcessor && !e) return this.path.cbox;
          var t = this._font._getTableStream("glyf");
          t.pos += this._font.loca.offsets[this.id];
          var r = rb.decode(t),
            n = new Sd(r.xMin, r.yMin, r.xMax, r.yMax);
          return Object.freeze(n);
        }),
        (r._parseGlyphCoord = function (e, t, r, n) {
          if (r) {
            var i = e.readUInt8();
            n || (i = -i), (i += t);
          } else if (n) i = t;
          else i = t + e.readInt16BE();
          return i;
        }),
        (r._decode = function () {
          var e = this._font.loca.offsets[this.id];
          if (e === this._font.loca.offsets[this.id + 1]) return null;
          var t = this._font._getTableStream("glyf");
          t.pos += e;
          var r = t.pos,
            n = rb.decode(t);
          return (
            n.numberOfContours > 0
              ? this._decodeSimple(n, t)
              : n.numberOfContours < 0 && this._decodeComposite(n, t, r),
            n
          );
        }),
        (r._decodeSimple = function (e, t) {
          e.points = [];
          var r = new ni.Array(ni.uint16, e.numberOfContours).decode(t);
          e.instructions = new ni.Array(ni.uint8, ni.uint16).decode(t);
          for (var n = [], i = r[r.length - 1] + 1; n.length < i; ) {
            var a = t.readUInt8();
            if ((n.push(a), 8 & a))
              for (var o = t.readUInt8(), s = 0; s < o; s++) n.push(a);
          }
          for (var u = 0; u < n.length; u++) {
            a = n[u];
            var l = new nb(!!(1 & a), r.indexOf(u) >= 0, 0, 0);
            e.points.push(l);
          }
          var c = 0;
          for (u = 0; u < n.length; u++) {
            a = n[u];
            e.points[u].x = c = this._parseGlyphCoord(t, c, 2 & a, 16 & a);
          }
          var f = 0;
          for (u = 0; u < n.length; u++) {
            a = n[u];
            e.points[u].y = f = this._parseGlyphCoord(t, f, 4 & a, 32 & a);
          }
          if (this._font._variationProcessor) {
            var h = e.points.slice();
            h.push.apply(h, this._getPhantomPoints(e)),
              this._font._variationProcessor.transformPoints(this.id, h),
              (e.phantomPoints = h.slice(-4));
          }
        }),
        (r._decodeComposite = function (e, t, r) {
          void 0 === r && (r = 0), (e.components = []);
          for (var n = !1, i = 32; 32 & i; ) {
            i = t.readUInt16BE();
            var a = t.pos - r,
              o = t.readUInt16BE();
            if ((n || (n = 0 != (256 & i)), 1 & i))
              var s = t.readInt16BE(),
                u = t.readInt16BE();
            else (s = t.readInt8()), (u = t.readInt8());
            ((f = new ib(o, s, u)).pos = a),
              8 & i
                ? (f.scaleX = f.scaleY =
                    ((t.readUInt8() << 24) | (t.readUInt8() << 16)) /
                    1073741824)
                : 64 & i
                ? ((f.scaleX =
                    ((t.readUInt8() << 24) | (t.readUInt8() << 16)) /
                    1073741824),
                  (f.scaleY =
                    ((t.readUInt8() << 24) | (t.readUInt8() << 16)) /
                    1073741824))
                : 128 & i &&
                  ((f.scaleX =
                    ((t.readUInt8() << 24) | (t.readUInt8() << 16)) /
                    1073741824),
                  (f.scale01 =
                    ((t.readUInt8() << 24) | (t.readUInt8() << 16)) /
                    1073741824),
                  (f.scale10 =
                    ((t.readUInt8() << 24) | (t.readUInt8() << 16)) /
                    1073741824),
                  (f.scaleY =
                    ((t.readUInt8() << 24) | (t.readUInt8() << 16)) /
                    1073741824)),
              e.components.push(f);
          }
          if (this._font._variationProcessor) {
            for (var l = [], c = 0; c < e.components.length; c++) {
              var f = e.components[c];
              l.push(new nb(!0, !0, f.dx, f.dy));
            }
            l.push.apply(l, this._getPhantomPoints(e)),
              this._font._variationProcessor.transformPoints(this.id, l),
              (e.phantomPoints = l.splice(-4, 4));
            for (var h = 0; h < l.length; h++) {
              var d = l[h];
              (e.components[h].dx = d.x), (e.components[h].dy = d.y);
            }
          }
          return n;
        }),
        (r._getPhantomPoints = function (e) {
          var t = this._getCBox(!0);
          null == this._metrics &&
            (this._metrics = tb.prototype._getMetrics.call(this, t));
          var r = this._metrics,
            n = r.advanceWidth,
            i = r.advanceHeight,
            a = r.leftBearing,
            o = r.topBearing;
          return [
            new nb(!1, !0, e.xMin - a, 0),
            new nb(!1, !0, e.xMin - a + n, 0),
            new nb(!1, !0, 0, e.yMax + o),
            new nb(!1, !0, 0, e.yMax + o + i),
          ];
        }),
        (r._getContours = function () {
          var e = this._decode();
          if (!e) return [];
          var t = [];
          if (e.numberOfContours < 0) {
            var r = e.components,
              n = Array.isArray(r),
              i = 0;
            for (r = n ? r : r[Symbol.iterator](); ; ) {
              var a;
              if (n) {
                if (i >= r.length) break;
                a = r[i++];
              } else {
                if ((i = r.next()).done) break;
                a = i.value;
              }
              for (
                var o = a,
                  s = this._font.getGlyph(o.glyphID)._getContours(),
                  u = 0;
                u < s.length;
                u++
              )
                for (var l = s[u], c = 0; c < l.length; c++) {
                  var f = l[c],
                    h = f.x * o.scaleX + f.y * o.scale01 + o.dx,
                    d = f.y * o.scaleY + f.x * o.scale10 + o.dy;
                  t.push(new nb(f.onCurve, f.endContour, h, d));
                }
            }
          } else t = e.points || [];
          e.phantomPoints &&
            !this._font.directory.tables.HVAR &&
            ((this._metrics.advanceWidth =
              e.phantomPoints[1].x - e.phantomPoints[0].x),
            (this._metrics.advanceHeight =
              e.phantomPoints[3].y - e.phantomPoints[2].y),
            (this._metrics.leftBearing = e.xMin - e.phantomPoints[0].x),
            (this._metrics.topBearing = e.phantomPoints[2].y - e.yMax));
          for (var p = [], g = [], v = 0; v < t.length; v++) {
            var y = t[v];
            g.push(y), y.endContour && (p.push(g), (g = []));
          }
          return p;
        }),
        (r._getMetrics = function () {
          if (this._metrics) return this._metrics;
          var t = this._getCBox(!0);
          return (
            e.prototype._getMetrics.call(this, t),
            this._font._variationProcessor && !this._font.HVAR && this.path,
            this._metrics
          );
        }),
        (r._getPath = function () {
          for (
            var e = this._getContours(), t = new Zy(), r = 0;
            r < e.length;
            r++
          ) {
            var n = e[r],
              i = n[0],
              a = n[n.length - 1],
              o = 0;
            if (i.onCurve) {
              var s = null;
              o = 1;
            } else
              s = i = a.onCurve
                ? a
                : new nb(!1, !1, (i.x + a.x) / 2, (i.y + a.y) / 2);
            t.moveTo(i.x, i.y);
            for (var u = o; u < n.length; u++) {
              var l = n[u],
                c = 0 === u ? i : n[u - 1];
              if (c.onCurve && l.onCurve) t.lineTo(l.x, l.y);
              else if (c.onCurve && !l.onCurve) s = l;
              else if (c.onCurve || l.onCurve) {
                if (c.onCurve || !l.onCurve)
                  throw new Error("Unknown TTF path state");
                t.quadraticCurveTo(s.x, s.y, l.x, l.y);
                s = null;
              } else {
                var f = (c.x + l.x) / 2,
                  h = (c.y + l.y) / 2;
                t.quadraticCurveTo(c.x, c.y, f, h);
                var s = l;
              }
            }
            s && t.quadraticCurveTo(s.x, s.y, i.x, i.y), t.closePath();
          }
          return t;
        }),
        t
      );
    })(tb),
    ob = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      li(t, e);
      var r = t.prototype;
      return (
        (r._getName = function () {
          return this._font.CFF2
            ? e.prototype._getName.call(this)
            : this._font["CFF "].getGlyphName(this.id);
        }),
        (r.bias = function (e) {
          return e.length < 1240 ? 107 : e.length < 33900 ? 1131 : 32768;
        }),
        (r._getPath = function () {
          var e = this._font.stream,
            t = (e.pos, this._font.CFF2 || this._font["CFF "]),
            r = t.topDict.CharStrings[this.id],
            n = r.offset + r.length;
          e.pos = r.offset;
          var i,
            a,
            o = new Zy(),
            s = [],
            u = [],
            l = null,
            c = 0,
            f = 0,
            h = 0,
            d = !1;
          (this._usedGsubrs = i = {}), (this._usedSubrs = a = {});
          var p = t.globalSubrIndex || [],
            g = this.bias(p),
            v = t.privateDictForGlyph(this.id),
            y = v.Subrs || [],
            b = this.bias(y),
            m = t.topDict.vstore && t.topDict.vstore.itemVariationStore,
            w = v.vsindex,
            x = this._font._variationProcessor;
          function S() {
            null == l && (l = s.shift() + v.nominalWidthX);
          }
          function k() {
            return (
              s.length % 2 != 0 && S(), (c += s.length >> 1), (s.length = 0)
            );
          }
          function A(e, t) {
            d && o.closePath(), o.moveTo(e, t), (d = !0);
          }
          return (
            (function r() {
              for (; e.pos < n; ) {
                var l = e.readUInt8();
                if (l < 32)
                  switch (l) {
                    case 1:
                    case 3:
                    case 18:
                    case 23:
                      k();
                      break;
                    case 4:
                      s.length > 1 && S(), (h += s.shift()), A(f, h);
                      break;
                    case 5:
                      for (; s.length >= 2; )
                        (f += s.shift()), (h += s.shift()), o.lineTo(f, h);
                      break;
                    case 6:
                    case 7:
                      for (var v = 6 === l; s.length >= 1; )
                        v ? (f += s.shift()) : (h += s.shift()),
                          o.lineTo(f, h),
                          (v = !v);
                      break;
                    case 8:
                      for (; s.length > 0; ) {
                        var C = f + s.shift(),
                          P = h + s.shift(),
                          I = C + s.shift(),
                          O = P + s.shift();
                        (f = I + s.shift()),
                          (h = O + s.shift()),
                          o.bezierCurveTo(C, P, I, O, f, h);
                      }
                      break;
                    case 10:
                      var E = s.pop() + b,
                        B = y[E];
                      if (B) {
                        a[E] = !0;
                        var T = e.pos,
                          L = n;
                        (e.pos = B.offset),
                          (n = B.offset + B.length),
                          r(),
                          (e.pos = T),
                          (n = L);
                      }
                      break;
                    case 11:
                      if (t.version >= 2) break;
                      return;
                    case 14:
                      if (t.version >= 2) break;
                      s.length > 0 && S(), d && (o.closePath(), (d = !1));
                      break;
                    case 15:
                      if (t.version < 2)
                        throw new Error(
                          "vsindex operator not supported in CFF v1"
                        );
                      w = s.pop();
                      break;
                    case 16:
                      if (t.version < 2)
                        throw new Error(
                          "blend operator not supported in CFF v1"
                        );
                      if (!x)
                        throw new Error("blend operator in non-variation font");
                      for (
                        var z = x.getBlendVector(m, w),
                          D = s.pop(),
                          R = D * z.length,
                          M = s.length - R,
                          F = M - D,
                          U = 0;
                        U < D;
                        U++
                      ) {
                        for (var N = s[F + U], j = 0; j < z.length; j++)
                          N += z[j] * s[M++];
                        s[F + U] = N;
                      }
                      for (; R--; ) s.pop();
                      break;
                    case 19:
                    case 20:
                      k(), (e.pos += (c + 7) >> 3);
                      break;
                    case 21:
                      s.length > 2 && S(),
                        (f += s.shift()),
                        (h += s.shift()),
                        A(f, h);
                      break;
                    case 22:
                      s.length > 1 && S(), A((f += s.shift()), h);
                      break;
                    case 24:
                      for (; s.length >= 8; )
                        (C = f + s.shift()),
                          (P = h + s.shift()),
                          (I = C + s.shift()),
                          (O = P + s.shift()),
                          (f = I + s.shift()),
                          (h = O + s.shift()),
                          o.bezierCurveTo(C, P, I, O, f, h);
                      (f += s.shift()), (h += s.shift()), o.lineTo(f, h);
                      break;
                    case 25:
                      for (; s.length >= 8; )
                        (f += s.shift()), (h += s.shift()), o.lineTo(f, h);
                      (C = f + s.shift()),
                        (P = h + s.shift()),
                        (I = C + s.shift()),
                        (O = P + s.shift()),
                        (f = I + s.shift()),
                        (h = O + s.shift()),
                        o.bezierCurveTo(C, P, I, O, f, h);
                      break;
                    case 26:
                      for (s.length % 2 && (f += s.shift()); s.length >= 4; )
                        (C = f),
                          (P = h + s.shift()),
                          (I = C + s.shift()),
                          (O = P + s.shift()),
                          (f = I),
                          (h = O + s.shift()),
                          o.bezierCurveTo(C, P, I, O, f, h);
                      break;
                    case 27:
                      for (s.length % 2 && (h += s.shift()); s.length >= 4; )
                        (C = f + s.shift()),
                          (P = h),
                          (I = C + s.shift()),
                          (O = P + s.shift()),
                          (f = I + s.shift()),
                          (h = O),
                          o.bezierCurveTo(C, P, I, O, f, h);
                      break;
                    case 28:
                      s.push(e.readInt16BE());
                      break;
                    case 29:
                      (E = s.pop() + g),
                        (B = p[E]) &&
                          ((i[E] = !0),
                          (T = e.pos),
                          (L = n),
                          (e.pos = B.offset),
                          (n = B.offset + B.length),
                          r(),
                          (e.pos = T),
                          (n = L));
                      break;
                    case 30:
                    case 31:
                      for (v = 31 === l; s.length >= 4; )
                        v
                          ? ((C = f + s.shift()),
                            (P = h),
                            (I = C + s.shift()),
                            (O = P + s.shift()),
                            (h = O + s.shift()),
                            (f = I + (1 === s.length ? s.shift() : 0)))
                          : ((C = f),
                            (P = h + s.shift()),
                            (I = C + s.shift()),
                            (O = P + s.shift()),
                            (f = I + s.shift()),
                            (h = O + (1 === s.length ? s.shift() : 0))),
                          o.bezierCurveTo(C, P, I, O, f, h),
                          (v = !v);
                      break;
                    case 12:
                      switch ((l = e.readUInt8())) {
                        case 3:
                          var G = s.pop(),
                            V = s.pop();
                          s.push(G && V ? 1 : 0);
                          break;
                        case 4:
                          (G = s.pop()), (V = s.pop()), s.push(G || V ? 1 : 0);
                          break;
                        case 5:
                          (G = s.pop()), s.push(G ? 0 : 1);
                          break;
                        case 9:
                          (G = s.pop()), s.push(Math.abs(G));
                          break;
                        case 10:
                          (G = s.pop()), (V = s.pop()), s.push(G + V);
                          break;
                        case 11:
                          (G = s.pop()), (V = s.pop()), s.push(G - V);
                          break;
                        case 12:
                          (G = s.pop()), (V = s.pop()), s.push(G / V);
                          break;
                        case 14:
                          (G = s.pop()), s.push(-G);
                          break;
                        case 15:
                          (G = s.pop()), (V = s.pop()), s.push(G === V ? 1 : 0);
                          break;
                        case 18:
                          s.pop();
                          break;
                        case 20:
                          var _ = s.pop(),
                            q = s.pop();
                          u[q] = _;
                          break;
                        case 21:
                          (q = s.pop()), s.push(u[q] || 0);
                          break;
                        case 22:
                          var W = s.pop(),
                            H = s.pop(),
                            Y = s.pop(),
                            Z = s.pop();
                          s.push(Y <= Z ? W : H);
                          break;
                        case 23:
                          s.push(Math.random());
                          break;
                        case 24:
                          (G = s.pop()), (V = s.pop()), s.push(G * V);
                          break;
                        case 26:
                          (G = s.pop()), s.push(Math.sqrt(G));
                          break;
                        case 27:
                          (G = s.pop()), s.push(G, G);
                          break;
                        case 28:
                          (G = s.pop()), (V = s.pop()), s.push(V, G);
                          break;
                        case 29:
                          (q = s.pop()) < 0
                            ? (q = 0)
                            : q > s.length - 1 && (q = s.length - 1),
                            s.push(s[q]);
                          break;
                        case 30:
                          var X = s.pop(),
                            K = s.pop();
                          if (K >= 0)
                            for (; K > 0; ) {
                              for (var J = s[X - 1], Q = X - 2; Q >= 0; Q--)
                                s[Q + 1] = s[Q];
                              (s[0] = J), K--;
                            }
                          else
                            for (; K < 0; ) {
                              J = s[0];
                              for (var $ = 0; $ <= X; $++) s[$] = s[$ + 1];
                              (s[X - 1] = J), K++;
                            }
                          break;
                        case 34:
                          (C = f + s.shift()),
                            (P = h),
                            (I = C + s.shift()),
                            (O = P + s.shift());
                          var ee = I + s.shift(),
                            te = O,
                            re = ee + s.shift(),
                            ne = te,
                            ie = re + s.shift(),
                            ae = ne,
                            oe = ie + s.shift(),
                            se = ae;
                          (f = oe),
                            (h = se),
                            o.bezierCurveTo(C, P, I, O, ee, te),
                            o.bezierCurveTo(re, ne, ie, ae, oe, se);
                          break;
                        case 35:
                          for (var ue = [], le = 0; le <= 5; le++)
                            (f += s.shift()), (h += s.shift()), ue.push(f, h);
                          o.bezierCurveTo.apply(o, ue.slice(0, 6)),
                            o.bezierCurveTo.apply(o, ue.slice(6)),
                            s.shift();
                          break;
                        case 36:
                          (C = f + s.shift()),
                            (P = h + s.shift()),
                            (I = C + s.shift()),
                            (ne = te = O = P + s.shift()),
                            (ie =
                              (re = (ee = I + s.shift()) + s.shift()) +
                              s.shift()),
                            (ae = ne + s.shift()),
                            (oe = ie + s.shift()),
                            (f = oe),
                            (h = se = ae),
                            o.bezierCurveTo(C, P, I, O, ee, te),
                            o.bezierCurveTo(re, ne, ie, ae, oe, se);
                          break;
                        case 37:
                          var ce = f,
                            fe = h;
                          ue = [];
                          for (var he = 0; he <= 4; he++)
                            (f += s.shift()), (h += s.shift()), ue.push(f, h);
                          Math.abs(f - ce) > Math.abs(h - fe)
                            ? ((f += s.shift()), (h = fe))
                            : ((f = ce), (h += s.shift())),
                            ue.push(f, h),
                            o.bezierCurveTo.apply(o, ue.slice(0, 6)),
                            o.bezierCurveTo.apply(o, ue.slice(6));
                          break;
                        default:
                          throw new Error("Unknown op: 12 " + l);
                      }
                      break;
                    default:
                      throw new Error("Unknown op: " + l);
                  }
                else if (l < 247) s.push(l - 139);
                else if (l < 251) {
                  var de = e.readUInt8();
                  s.push(256 * (l - 247) + de + 108);
                } else
                  l < 255
                    ? ((de = e.readUInt8()),
                      s.push(256 * -(l - 251) - de - 108))
                    : s.push(e.readInt32BE() / 65536);
              }
            })(),
            d && o.closePath(),
            o
          );
        }),
        t
      );
    })(tb),
    sb = new ni.Struct({
      originX: ni.uint16,
      originY: ni.uint16,
      type: new ni.String(4),
      data: new ni.Buffer(function (e) {
        return e.parent.buflen - e._currentOffset;
      }),
    }),
    ub = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      li(t, e);
      var r = t.prototype;
      return (
        (r.getImageForSize = function (e) {
          for (var t = 0; t < this._font.sbix.imageTables.length; t++) {
            var r = this._font.sbix.imageTables[t];
            if (r.ppem >= e) break;
          }
          var n = r.imageOffsets,
            i = n[this.id],
            a = n[this.id + 1];
          return i === a
            ? null
            : ((this._font.stream.pos = i),
              sb.decode(this._font.stream, { buflen: a - i }));
        }),
        (r.render = function (t, r) {
          var n = this.getImageForSize(r);
          if (null != n) {
            var i = r / this._font.unitsPerEm;
            t.image(n.data, {
              height: r,
              x: n.originX,
              y: (this.bbox.minY - n.originY) * i,
            });
          }
          this._font.sbix.flags.renderOutlines &&
            e.prototype.render.call(this, t, r);
        }),
        t
      );
    })(ab),
    lb = function (e, t) {
      (this.glyph = e), (this.color = t);
    },
    cb = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      li(t, e);
      var r = t.prototype;
      return (
        (r._getBBox = function () {
          for (var e = new Sd(), t = 0; t < this.layers.length; t++) {
            var r = this.layers[t].glyph.bbox;
            e.addPoint(r.minX, r.minY), e.addPoint(r.maxX, r.maxY);
          }
          return e;
        }),
        (r.render = function (e, t) {
          var r = this.layers,
            n = Array.isArray(r),
            i = 0;
          for (r = n ? r : r[Symbol.iterator](); ; ) {
            var a;
            if (n) {
              if (i >= r.length) break;
              a = r[i++];
            } else {
              if ((i = r.next()).done) break;
              a = i.value;
            }
            var o = a,
              s = o.glyph,
              u = o.color;
            e.fillColor([u.red, u.green, u.blue], (u.alpha / 255) * 100),
              s.render(e, t);
          }
        }),
        si(t, [
          {
            key: "layers",
            get: function () {
              for (
                var e = this._font.CPAL,
                  t = this._font.COLR,
                  r = 0,
                  n = t.baseGlyphRecord.length - 1;
                r <= n;

              ) {
                var i = (r + n) >> 1,
                  a = t.baseGlyphRecord[i];
                if (this.id < a.gid) n = i - 1;
                else {
                  if (!(this.id > a.gid)) {
                    var o = a;
                    break;
                  }
                  r = i + 1;
                }
              }
              if (null == o) {
                var s = this._font._getBaseGlyph(this.id);
                return [
                  new lb(s, (c = { red: 0, green: 0, blue: 0, alpha: 255 })),
                ];
              }
              for (
                var u = [], l = o.firstLayerIndex;
                l < o.firstLayerIndex + o.numLayers;
                l++
              ) {
                a = t.layerRecords[l];
                var c = e.colorRecords[a.paletteIndex];
                s = this._font._getBaseGlyph(a.gid);
                u.push(new lb(s, c));
              }
              return u;
            },
          },
        ]),
        t
      );
    })(tb),
    fb = (function () {
      function e(e, t) {
        (this.font = e),
          (this.normalizedCoords = this.normalizeCoords(t)),
          (this.blendVectors = new Map());
      }
      var t = e.prototype;
      return (
        (t.normalizeCoords = function (e) {
          for (var t = [], r = 0; r < this.font.fvar.axis.length; r++) {
            var n = this.font.fvar.axis[r];
            e[r] < n.defaultValue
              ? t.push(
                  (e[r] - n.defaultValue + Number.EPSILON) /
                    (n.defaultValue - n.minValue + Number.EPSILON)
                )
              : t.push(
                  (e[r] - n.defaultValue + Number.EPSILON) /
                    (n.maxValue - n.defaultValue + Number.EPSILON)
                );
          }
          if (this.font.avar)
            for (r = 0; r < this.font.avar.segment.length; r++)
              for (
                var i = this.font.avar.segment[r], a = 0;
                a < i.correspondence.length;
                a++
              ) {
                var o = i.correspondence[a];
                if (a >= 1 && t[r] < o.fromCoord) {
                  var s = i.correspondence[a - 1];
                  t[r] =
                    ((t[r] - s.fromCoord) * (o.toCoord - s.toCoord) +
                      Number.EPSILON) /
                      (o.fromCoord - s.fromCoord + Number.EPSILON) +
                    s.toCoord;
                  break;
                }
              }
          return t;
        }),
        (t.transformPoints = function (e, t) {
          if (this.font.fvar && this.font.gvar) {
            var r = this.font.gvar;
            if (!(e >= r.glyphCount)) {
              var n = r.offsets[e];
              if (n !== r.offsets[e + 1]) {
                var i = this.font.stream;
                if (((i.pos = n), !(i.pos >= i.length))) {
                  var a = i.readUInt16BE(),
                    o = n + i.readUInt16BE();
                  if (32768 & a) {
                    var s = i.pos;
                    i.pos = o;
                    var u = this.decodePoints();
                    (o = i.pos), (i.pos = s);
                  }
                  var l = t.map(function (e) {
                    return e.copy();
                  });
                  a &= 4095;
                  for (var c = 0; c < a; c++) {
                    var f = i.readUInt16BE(),
                      h = i.readUInt16BE();
                    if (32768 & h)
                      for (var d = [], p = 0; p < r.axisCount; p++)
                        d.push(i.readInt16BE() / 16384);
                    else {
                      if ((4095 & h) >= r.globalCoordCount)
                        throw new Error("Invalid gvar table");
                      d = r.globalCoords[4095 & h];
                    }
                    if (16384 & h) {
                      for (var g = [], v = 0; v < r.axisCount; v++)
                        g.push(i.readInt16BE() / 16384);
                      for (var y = [], b = 0; b < r.axisCount; b++)
                        y.push(i.readInt16BE() / 16384);
                    }
                    var m = this.tupleFactor(h, d, g, y);
                    if (0 !== m) {
                      s = i.pos;
                      if (((i.pos = o), 8192 & h)) var w = this.decodePoints();
                      else w = u;
                      var x = 0 === w.length ? t.length : w.length,
                        S = this.decodeDeltas(x),
                        k = this.decodeDeltas(x);
                      if (0 === w.length)
                        for (var A = 0; A < t.length; A++) {
                          var C = t[A];
                          (C.x += Math.round(S[A] * m)),
                            (C.y += Math.round(k[A] * m));
                        }
                      else {
                        for (
                          var P = l.map(function (e) {
                              return e.copy();
                            }),
                            I = t.map(function () {
                              return !1;
                            }),
                            O = 0;
                          O < w.length;
                          O++
                        ) {
                          var E = w[O];
                          if (E < t.length) {
                            var B = P[E];
                            (I[E] = !0),
                              (B.x += Math.round(S[O] * m)),
                              (B.y += Math.round(k[O] * m));
                          }
                        }
                        this.interpolateMissingDeltas(P, l, I);
                        for (var T = 0; T < t.length; T++) {
                          var L = P[T].x - l[T].x,
                            z = P[T].y - l[T].y;
                          (t[T].x += L), (t[T].y += z);
                        }
                      }
                      (o += f), (i.pos = s);
                    } else o += f;
                  }
                }
              }
            }
          }
        }),
        (t.decodePoints = function () {
          var e = this.font.stream,
            t = e.readUInt8();
          128 & t && (t = ((127 & t) << 8) | e.readUInt8());
          for (var r = new Uint16Array(t), n = 0, i = 0; n < t; )
            for (
              var a = e.readUInt8(),
                o = 1 + (127 & a),
                s = 128 & a ? e.readUInt16 : e.readUInt8,
                u = 0;
              u < o && n < t;
              u++
            )
              (i += s.call(e)), (r[n++] = i);
          return r;
        }),
        (t.decodeDeltas = function (e) {
          for (
            var t = this.font.stream, r = 0, n = new Int16Array(e);
            r < e;

          ) {
            var i = t.readUInt8(),
              a = 1 + (63 & i);
            if (128 & i) r += a;
            else
              for (
                var o = 64 & i ? t.readInt16BE : t.readInt8, s = 0;
                s < a && r < e;
                s++
              )
                n[r++] = o.call(t);
          }
          return n;
        }),
        (t.tupleFactor = function (e, t, r, n) {
          for (
            var i = this.normalizedCoords, a = this.font.gvar, o = 1, s = 0;
            s < a.axisCount;
            s++
          )
            if (0 !== t[s]) {
              if (0 === i[s]) return 0;
              if (0 == (16384 & e)) {
                if (i[s] < Math.min(0, t[s]) || i[s] > Math.max(0, t[s]))
                  return 0;
                o = (o * i[s] + Number.EPSILON) / (t[s] + Number.EPSILON);
              } else {
                if (i[s] < r[s] || i[s] > n[s]) return 0;
                o =
                  i[s] < t[s]
                    ? (o * (i[s] - r[s] + Number.EPSILON)) /
                      (t[s] - r[s] + Number.EPSILON)
                    : (o * (n[s] - i[s] + Number.EPSILON)) /
                      (n[s] - t[s] + Number.EPSILON);
              }
            }
          return o;
        }),
        (t.interpolateMissingDeltas = function (e, t, r) {
          if (0 !== e.length)
            for (var n = 0; n < e.length; ) {
              for (var i = n, a = n, o = e[a]; !o.endContour; ) o = e[++a];
              for (; n <= a && !r[n]; ) n++;
              if (!(n > a)) {
                var s = n,
                  u = n;
                for (n++; n <= a; )
                  r[n] &&
                    (this.deltaInterpolate(u + 1, n - 1, u, n, t, e), (u = n)),
                    n++;
                u === s
                  ? this.deltaShift(i, a, u, t, e)
                  : (this.deltaInterpolate(u + 1, a, u, s, t, e),
                    s > 0 && this.deltaInterpolate(i, s - 1, u, s, t, e)),
                  (n = a + 1);
              }
            }
        }),
        (t.deltaInterpolate = function (e, t, r, n, i, a) {
          if (!(e > t))
            for (var o = ["x", "y"], s = 0; s < o.length; s++) {
              var u = o[s];
              if (i[r][u] > i[n][u]) {
                var l = r;
                (r = n), (n = l);
              }
              var c = i[r][u],
                f = i[n][u],
                h = a[r][u],
                d = a[n][u];
              if (c !== f || h === d)
                for (
                  var p = c === f ? 0 : (d - h) / (f - c), g = e;
                  g <= t;
                  g++
                ) {
                  var v = i[g][u];
                  v <= c
                    ? (v += h - c)
                    : v >= f
                    ? (v += d - f)
                    : (v = h + (v - c) * p),
                    (a[g][u] = v);
                }
            }
        }),
        (t.deltaShift = function (e, t, r, n, i) {
          var a = i[r].x - n[r].x,
            o = i[r].y - n[r].y;
          if (0 !== a || 0 !== o)
            for (var s = e; s <= t; s++)
              s !== r && ((i[s].x += a), (i[s].y += o));
        }),
        (t.getAdvanceAdjustment = function (e, t) {
          var r, n;
          if (t.advanceWidthMapping) {
            var i = e;
            i >= t.advanceWidthMapping.mapCount &&
              (i = t.advanceWidthMapping.mapCount - 1);
            t.advanceWidthMapping.entryFormat;
            var a = t.advanceWidthMapping.mapData[i];
            (r = a.outerIndex), (n = a.innerIndex);
          } else (r = 0), (n = e);
          return this.getDelta(t.itemVariationStore, r, n);
        }),
        (t.getDelta = function (e, t, r) {
          if (t >= e.itemVariationData.length) return 0;
          var n = e.itemVariationData[t];
          if (r >= n.deltaSets.length) return 0;
          for (
            var i = n.deltaSets[r], a = this.getBlendVector(e, t), o = 0, s = 0;
            s < n.regionIndexCount;
            s++
          )
            o += i.deltas[s] * a[s];
          return o;
        }),
        (t.getBlendVector = function (e, t) {
          var r = e.itemVariationData[t];
          if (this.blendVectors.has(r)) return this.blendVectors.get(r);
          for (
            var n = this.normalizedCoords, i = [], a = 0;
            a < r.regionIndexCount;
            a++
          ) {
            for (
              var o = 1,
                s = r.regionIndexes[a],
                u = e.variationRegionList.variationRegions[s],
                l = 0;
              l < u.length;
              l++
            ) {
              var c = u[l];
              o *=
                c.startCoord > c.peakCoord || c.peakCoord > c.endCoord
                  ? 1
                  : c.startCoord < 0 && c.endCoord > 0 && 0 !== c.peakCoord
                  ? 1
                  : 0 === c.peakCoord
                  ? 1
                  : n[l] < c.startCoord || n[l] > c.endCoord
                  ? 0
                  : n[l] === c.peakCoord
                  ? 1
                  : n[l] < c.peakCoord
                  ? (n[l] - c.startCoord + Number.EPSILON) /
                    (c.peakCoord - c.startCoord + Number.EPSILON)
                  : (c.endCoord - n[l] + Number.EPSILON) /
                    (c.endCoord - c.peakCoord + Number.EPSILON);
            }
            i[a] = o;
          }
          return this.blendVectors.set(r, i), i;
        }),
        e
      );
    })(),
    hb = re(function (e) {
      var t = (function () {
        function e(t, n, i, a) {
          "object" == typeof n &&
            ((i = n.depth), (a = n.prototype), n.filter, (n = n.circular));
          var o = [],
            s = [],
            u = !0;
          return (
            void 0 === n && (n = !0),
            void 0 === i && (i = 1 / 0),
            (function t(i, l) {
              if (null === i) return null;
              if (0 == l) return i;
              var c, f;
              if ("object" != typeof i) return i;
              if (e.__isArray(i)) c = [];
              else if (e.__isRegExp(i))
                (c = new RegExp(i.source, r(i))),
                  i.lastIndex && (c.lastIndex = i.lastIndex);
              else if (e.__isDate(i)) c = new Date(i.getTime());
              else {
                if (u && J(i))
                  return (
                    (c = g.allocUnsafe
                      ? g.allocUnsafe(i.length)
                      : new g(i.length)),
                    i.copy(c),
                    c
                  );
                void 0 === a
                  ? ((f = Object.getPrototypeOf(i)), (c = Object.create(f)))
                  : ((c = Object.create(a)), (f = a));
              }
              if (n) {
                var h = o.indexOf(i);
                if (-1 != h) return s[h];
                o.push(i), s.push(c);
              }
              for (var d in i) {
                var p;
                f && (p = Object.getOwnPropertyDescriptor(f, d)),
                  (p && null == p.set) || (c[d] = t(i[d], l - 1));
              }
              return c;
            })(t, i)
          );
        }
        function t(e) {
          return Object.prototype.toString.call(e);
        }
        function r(e) {
          var t = "";
          return (
            e.global && (t += "g"),
            e.ignoreCase && (t += "i"),
            e.multiline && (t += "m"),
            t
          );
        }
        return (
          (e.clonePrototype = function (e) {
            if (null === e) return null;
            var t = function () {};
            return (t.prototype = e), new t();
          }),
          (e.__objToStr = t),
          (e.__isDate = function (e) {
            return "object" == typeof e && "[object Date]" === t(e);
          }),
          (e.__isArray = function (e) {
            return "object" == typeof e && "[object Array]" === t(e);
          }),
          (e.__isRegExp = function (e) {
            return "object" == typeof e && "[object RegExp]" === t(e);
          }),
          (e.__getRegExpFlags = r),
          e
        );
      })();
      e.exports && (e.exports = t);
    }),
    db = (function () {
      function e(e) {
        (this.font = e),
          (this.glyphs = []),
          (this.mapping = {}),
          this.includeGlyph(0);
      }
      var t = e.prototype;
      return (
        (t.includeGlyph = function (e) {
          return (
            "object" == typeof e && (e = e.id),
            null == this.mapping[e] &&
              (this.glyphs.push(e), (this.mapping[e] = this.glyphs.length - 1)),
            this.mapping[e]
          );
        }),
        (t.encodeStream = function () {
          var e = this,
            t = new ni.EncodeStream();
          return (
            Se(function () {
              return e.encode(t), t.end();
            }),
            t
          );
        }),
        e
      );
    })(),
    pb = (function () {
      function e() {}
      return (
        (e.size = function (e) {
          return e >= 0 && e <= 255 ? 1 : 2;
        }),
        (e.encode = function (e, t) {
          t >= 0 && t <= 255 ? e.writeUInt8(t) : e.writeInt16BE(t);
        }),
        e
      );
    })(),
    gb = new ni.Struct({
      numberOfContours: ni.int16,
      xMin: ni.int16,
      yMin: ni.int16,
      xMax: ni.int16,
      yMax: ni.int16,
      endPtsOfContours: new ni.Array(ni.uint16, "numberOfContours"),
      instructions: new ni.Array(ni.uint8, ni.uint16),
      flags: new ni.Array(ni.uint8, 0),
      xPoints: new ni.Array(pb, 0),
      yPoints: new ni.Array(pb, 0),
    }),
    vb = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.encodeSimple = function (e, t) {
          void 0 === t && (t = []);
          for (
            var r = [],
              n = [],
              i = [],
              a = [],
              o = 0,
              s = 0,
              u = 0,
              l = 0,
              c = 0,
              f = 0;
            f < e.commands.length;
            f++
          ) {
            for (var h = e.commands[f], d = 0; d < h.args.length; d += 2) {
              var p = h.args[d],
                g = h.args[d + 1],
                v = 0;
              if ("quadraticCurveTo" === h.command && 2 === d) {
                var y = e.commands[f + 1];
                if (y && "quadraticCurveTo" === y.command) {
                  var b = (s + y.args[0]) / 2,
                    m = (u + y.args[1]) / 2;
                  if (p === b && g === m) continue;
                }
              }
              ("quadraticCurveTo" === h.command && 0 === d) || (v |= 1),
                (v = this._encodePoint(p, s, n, v, 2, 16)),
                (v = this._encodePoint(g, u, i, v, 4, 32)) === l && o < 255
                  ? ((a[a.length - 1] |= 8), o++)
                  : (o > 0 && (a.push(o), (o = 0)), a.push(v), (l = v)),
                (s = p),
                (u = g),
                c++;
            }
            "closePath" === h.command && r.push(c - 1);
          }
          e.commands.length > 1 &&
            "closePath" !== e.commands[e.commands.length - 1].command &&
            r.push(c - 1);
          var w = e.bbox,
            x = {
              numberOfContours: r.length,
              xMin: w.minX,
              yMin: w.minY,
              xMax: w.maxX,
              yMax: w.maxY,
              endPtsOfContours: r,
              instructions: t,
              flags: a,
              xPoints: n,
              yPoints: i,
            },
            S = gb.size(x),
            k = 4 - (S % 4),
            A = new ni.EncodeStream(S + k);
          return gb.encode(A, x), 0 !== k && A.fill(0, k), A.buffer;
        }),
        (t._encodePoint = function (e, t, r, n, i, a) {
          var o = e - t;
          return (
            e === t
              ? (n |= a)
              : (-255 <= o &&
                  o <= 255 &&
                  ((n |= i), o < 0 ? (o = -o) : (n |= a)),
                r.push(o)),
            n
          );
        }),
        e
      );
    })(),
    yb = (function (e) {
      function t(t) {
        var r;
        return ((r = e.call(this, t) || this).glyphEncoder = new vb()), r;
      }
      li(t, e);
      var r = t.prototype;
      return (
        (r._addGlyph = function (e) {
          var t = this.font.getGlyph(e),
            r = t._decode(),
            n = this.font.loca.offsets[e],
            i = this.font.loca.offsets[e + 1],
            a = this.font._getTableStream("glyf");
          a.pos += n;
          var o = a.readBuffer(i - n);
          if (r && r.numberOfContours < 0) {
            o = new g(o);
            var s = r.components,
              u = Array.isArray(s),
              l = 0;
            for (s = u ? s : s[Symbol.iterator](); ; ) {
              var c;
              if (u) {
                if (l >= s.length) break;
                c = s[l++];
              } else {
                if ((l = s.next()).done) break;
                c = l.value;
              }
              var f = c;
              (e = this.includeGlyph(f.glyphID)), o.writeUInt16BE(e, f.pos);
            }
          } else
            r &&
              this.font._variationProcessor &&
              (o = this.glyphEncoder.encodeSimple(t.path, r.instructions));
          return (
            this.glyf.push(o),
            this.loca.offsets.push(this.offset),
            this.hmtx.metrics.push({
              advance: t.advanceWidth,
              bearing: t._getMetrics().leftBearing,
            }),
            (this.offset += o.length),
            this.glyf.length - 1
          );
        }),
        (r.encode = function (e) {
          (this.glyf = []),
            (this.offset = 0),
            (this.loca = { offsets: [] }),
            (this.hmtx = { metrics: [], bearings: [] });
          for (var t = 0; t < this.glyphs.length; )
            this._addGlyph(this.glyphs[t++]);
          var r = hb(this.font.maxp);
          (r.numGlyphs = this.glyf.length),
            this.loca.offsets.push(this.offset),
            Bu.loca.preEncode.call(this.loca);
          var n = hb(this.font.head);
          n.indexToLocFormat = this.loca.version;
          var i = hb(this.font.hhea);
          (i.numberOfMetrics = this.hmtx.metrics.length),
            zu.encode(e, {
              tables: {
                head: n,
                hhea: i,
                loca: this.loca,
                maxp: r,
                "cvt ": this.font["cvt "],
                prep: this.font.prep,
                glyf: this.glyf,
                hmtx: this.hmtx,
                fpgm: this.font.fpgm,
              },
            });
        }),
        t
      );
    })(db),
    bb = (function (e) {
      function t(t) {
        var r;
        if ((((r = e.call(this, t) || this).cff = r.font["CFF "]), !r.cff))
          throw new Error("Not a CFF Font");
        return r;
      }
      li(t, e);
      var r = t.prototype;
      return (
        (r.subsetCharstrings = function () {
          this.charstrings = [];
          var e = {},
            t = this.glyphs,
            r = Array.isArray(t),
            n = 0;
          for (t = r ? t : t[Symbol.iterator](); ; ) {
            var i;
            if (r) {
              if (n >= t.length) break;
              i = t[n++];
            } else {
              if ((n = t.next()).done) break;
              i = n.value;
            }
            var a = i;
            this.charstrings.push(this.cff.getCharString(a));
            var o = this.font.getGlyph(a);
            o.path;
            for (var s in o._usedGsubrs) e[s] = !0;
          }
          this.gsubrs = this.subsetSubrs(this.cff.globalSubrIndex, e);
        }),
        (r.subsetSubrs = function (e, t) {
          for (var r = [], n = 0; n < e.length; n++) {
            var i = e[n];
            t[n]
              ? ((this.cff.stream.pos = i.offset),
                r.push(this.cff.stream.readBuffer(i.length)))
              : r.push(new g([11]));
          }
          return r;
        }),
        (r.subsetFontdict = function (e) {
          (e.FDArray = []), (e.FDSelect = { version: 0, fds: [] });
          var t = {},
            r = [],
            n = this.glyphs,
            i = Array.isArray(n),
            a = 0;
          for (n = i ? n : n[Symbol.iterator](); ; ) {
            var o;
            if (i) {
              if (a >= n.length) break;
              o = n[a++];
            } else {
              if ((a = n.next()).done) break;
              o = a.value;
            }
            var s = o,
              u = this.cff.fdForGlyph(s);
            if (null != u) {
              t[u] ||
                (e.FDArray.push(Object.assign({}, this.cff.topDict.FDArray[u])),
                r.push({})),
                (t[u] = !0),
                e.FDSelect.fds.push(e.FDArray.length - 1);
              var l = this.font.getGlyph(s);
              l.path;
              for (var c in l._usedSubrs) r[r.length - 1][c] = !0;
            }
          }
          for (var f = 0; f < e.FDArray.length; f++) {
            var h = e.FDArray[f];
            delete h.FontName,
              h.Private &&
                h.Private.Subrs &&
                ((h.Private = Object.assign({}, h.Private)),
                (h.Private.Subrs = this.subsetSubrs(h.Private.Subrs, r[f])));
          }
        }),
        (r.createCIDFontdict = function (e) {
          var t = {},
            r = this.glyphs,
            n = Array.isArray(r),
            i = 0;
          for (r = n ? r : r[Symbol.iterator](); ; ) {
            var a;
            if (n) {
              if (i >= r.length) break;
              a = r[i++];
            } else {
              if ((i = r.next()).done) break;
              a = i.value;
            }
            var o = a,
              s = this.font.getGlyph(o);
            s.path;
            for (var u in s._usedSubrs) t[u] = !0;
          }
          var l = Object.assign({}, this.cff.topDict.Private);
          return (
            this.cff.topDict.Private &&
              this.cff.topDict.Private.Subrs &&
              (l.Subrs = this.subsetSubrs(this.cff.topDict.Private.Subrs, t)),
            (e.FDArray = [{ Private: l }]),
            (e.FDSelect = {
              version: 3,
              nRanges: 1,
              ranges: [{ first: 0, fd: 0 }],
              sentinel: this.charstrings.length,
            })
          );
        }),
        (r.addString = function (e) {
          return e
            ? (this.strings || (this.strings = []),
              this.strings.push(e),
              ea.length + this.strings.length - 1)
            : null;
        }),
        (r.encode = function (e) {
          this.subsetCharstrings();
          var t = {
              version: this.charstrings.length > 255 ? 2 : 1,
              ranges: [{ first: 1, nLeft: this.charstrings.length - 2 }],
            },
            r = Object.assign({}, this.cff.topDict);
          (r.Private = null),
            (r.charset = t),
            (r.Encoding = null),
            (r.CharStrings = this.charstrings);
          for (
            var n = [
                "version",
                "Notice",
                "Copyright",
                "FullName",
                "FamilyName",
                "Weight",
                "PostScript",
                "BaseFontName",
                "FontName",
              ],
              i = 0;
            i < n.length;
            i++
          ) {
            var a = n[i];
            r[a] = this.addString(this.cff.string(r[a]));
          }
          (r.ROS = [this.addString("Adobe"), this.addString("Identity"), 0]),
            (r.CIDCount = this.charstrings.length),
            this.cff.isCIDFont
              ? this.subsetFontdict(r)
              : this.createCIDFontdict(r);
          var o = {
            version: 1,
            hdrSize: this.cff.hdrSize,
            offSize: this.cff.length,
            header: this.cff.header,
            nameIndex: [this.cff.postscriptName],
            topDictIndex: [r],
            stringIndex: this.strings,
            globalSubrIndex: this.gsubrs,
          };
          ro.encode(e, o);
        }),
        t
      );
    })(db),
    mb =
      (ci(
        ($y = (function () {
          function e(e, t) {
            for (var r in (void 0 === t && (t = null),
            (this.stream = e),
            (this.variationCoords = t),
            (this._directoryPos = this.stream.pos),
            (this._tables = {}),
            (this._glyphs = {}),
            this._decodeDirectory(),
            this.directory.tables)) {
              var n = this.directory.tables[r];
              Bu[r] &&
                n.length > 0 &&
                Object.defineProperty(this, r, {
                  get: this._getTable.bind(this, n),
                });
            }
          }
          e.probe = function (e) {
            var t = e.toString("ascii", 0, 4);
            return (
              "true" === t ||
              "OTTO" === t ||
              t === String.fromCharCode(0, 1, 0, 0)
            );
          };
          var t = e.prototype;
          return (
            (t._getTable = function (e) {
              if (!(e.tag in this._tables))
                try {
                  this._tables[e.tag] = this._decodeTable(e);
                } catch (t) {
                  ai.logErrors &&
                    (console.error("Error decoding table " + e.tag),
                    console.error(t.stack));
                }
              return this._tables[e.tag];
            }),
            (t._getTableStream = function (e) {
              var t = this.directory.tables[e];
              return t ? ((this.stream.pos = t.offset), this.stream) : null;
            }),
            (t._decodeDirectory = function () {
              return (this.directory = zu.decode(this.stream, {
                _startOffset: 0,
              }));
            }),
            (t._decodeTable = function (e) {
              var t = this.stream.pos,
                r = this._getTableStream(e.tag),
                n = Bu[e.tag].decode(r, this, e.length);
              return (this.stream.pos = t), n;
            }),
            (t.getName = function (e, t) {
              void 0 === t && (t = "en");
              var r = this.name.records[e];
              return r ? r[t] : null;
            }),
            (t.hasGlyphForCodePoint = function (e) {
              return !!this._cmapProcessor.lookup(e);
            }),
            (t.glyphForCodePoint = function (e) {
              return this.getGlyph(this._cmapProcessor.lookup(e), [e]);
            }),
            (t.glyphsForString = function (e) {
              for (var t = [], r = e.length, n = 0, i = -1, a = -1; n <= r; ) {
                var o = 0,
                  s = 0;
                if (n < r) {
                  if (55296 <= (o = e.charCodeAt(n++)) && o <= 56319 && n < r) {
                    var u = e.charCodeAt(n);
                    56320 <= u &&
                      u <= 57343 &&
                      (n++, (o = ((1023 & o) << 10) + (1023 & u) + 65536));
                  }
                  s =
                    (65024 <= o && o <= 65039) || (917760 <= o && o <= 917999)
                      ? 1
                      : 0;
                } else n++;
                0 === a && 1 === s
                  ? t.push(
                      this.getGlyph(this._cmapProcessor.lookup(i, o), [i, o])
                    )
                  : 0 === a && 0 === s && t.push(this.glyphForCodePoint(i)),
                  (i = o),
                  (a = s);
              }
              return t;
            }),
            (t.layout = function (e, t, r, n, i) {
              return this._layoutEngine.layout(e, t, r, n, i);
            }),
            (t.stringsForGlyph = function (e) {
              return this._layoutEngine.stringsForGlyph(e);
            }),
            (t.getAvailableFeatures = function (e, t) {
              return this._layoutEngine.getAvailableFeatures(e, t);
            }),
            (t._getBaseGlyph = function (e, t) {
              return (
                void 0 === t && (t = []),
                this._glyphs[e] ||
                  (this.directory.tables.glyf
                    ? (this._glyphs[e] = new ab(e, t, this))
                    : (this.directory.tables["CFF "] ||
                        this.directory.tables.CFF2) &&
                      (this._glyphs[e] = new ob(e, t, this))),
                this._glyphs[e] || null
              );
            }),
            (t.getGlyph = function (e, t) {
              return (
                void 0 === t && (t = []),
                this._glyphs[e] ||
                  (this.directory.tables.sbix
                    ? (this._glyphs[e] = new ub(e, t, this))
                    : this.directory.tables.COLR && this.directory.tables.CPAL
                    ? (this._glyphs[e] = new cb(e, t, this))
                    : this._getBaseGlyph(e, t)),
                this._glyphs[e] || null
              );
            }),
            (t.createSubset = function () {
              return this.directory.tables["CFF "]
                ? new bb(this)
                : new yb(this);
            }),
            (t.getVariation = function (t) {
              if (
                !this.directory.tables.fvar ||
                !(
                  (this.directory.tables.gvar && this.directory.tables.glyf) ||
                  this.directory.tables.CFF2
                )
              )
                throw new Error(
                  "Variations require a font with the fvar, gvar and glyf, or CFF2 tables."
                );
              if (
                ("string" == typeof t && (t = this.namedVariations[t]),
                "object" != typeof t)
              )
                throw new Error(
                  "Variation settings must be either a variation name or settings object."
                );
              var r = this.fvar.axis.map(function (e, r) {
                  var n = e.axisTag.trim();
                  return n in t
                    ? Math.max(e.minValue, Math.min(e.maxValue, t[n]))
                    : e.defaultValue;
                }),
                n = new ni.DecodeStream(this.stream.buffer);
              n.pos = this._directoryPos;
              var i = new e(n, r);
              return (i._tables = this._tables), i;
            }),
            (t.getFont = function (e) {
              return this.getVariation(e);
            }),
            si(e, [
              {
                key: "postscriptName",
                get: function () {
                  var e = this.name.records.postscriptName;
                  return e ? e[Object.keys(e)[0]] : null;
                },
              },
              {
                key: "fullName",
                get: function () {
                  return this.getName("fullName");
                },
              },
              {
                key: "familyName",
                get: function () {
                  return this.getName("fontFamily");
                },
              },
              {
                key: "subfamilyName",
                get: function () {
                  return this.getName("fontSubfamily");
                },
              },
              {
                key: "copyright",
                get: function () {
                  return this.getName("copyright");
                },
              },
              {
                key: "version",
                get: function () {
                  return this.getName("version");
                },
              },
              {
                key: "ascent",
                get: function () {
                  return this.hhea.ascent;
                },
              },
              {
                key: "descent",
                get: function () {
                  return this.hhea.descent;
                },
              },
              {
                key: "lineGap",
                get: function () {
                  return this.hhea.lineGap;
                },
              },
              {
                key: "underlinePosition",
                get: function () {
                  return this.post.underlinePosition;
                },
              },
              {
                key: "underlineThickness",
                get: function () {
                  return this.post.underlineThickness;
                },
              },
              {
                key: "italicAngle",
                get: function () {
                  return this.post.italicAngle;
                },
              },
              {
                key: "capHeight",
                get: function () {
                  var e = this["OS/2"];
                  return e ? e.capHeight : this.ascent;
                },
              },
              {
                key: "xHeight",
                get: function () {
                  var e = this["OS/2"];
                  return e ? e.xHeight : 0;
                },
              },
              {
                key: "numGlyphs",
                get: function () {
                  return this.maxp.numGlyphs;
                },
              },
              {
                key: "unitsPerEm",
                get: function () {
                  return this.head.unitsPerEm;
                },
              },
              {
                key: "bbox",
                get: function () {
                  return Object.freeze(
                    new Sd(
                      this.head.xMin,
                      this.head.yMin,
                      this.head.xMax,
                      this.head.yMax
                    )
                  );
                },
              },
              {
                key: "_cmapProcessor",
                get: function () {
                  return new Mu(this.cmap);
                },
              },
              {
                key: "characterSet",
                get: function () {
                  return this._cmapProcessor.getCharacterSet();
                },
              },
              {
                key: "_layoutEngine",
                get: function () {
                  return new Hy(this);
                },
              },
              {
                key: "availableFeatures",
                get: function () {
                  return this._layoutEngine.getAvailableFeatures();
                },
              },
              {
                key: "variationAxes",
                get: function () {
                  var e = {};
                  if (!this.fvar) return e;
                  var t = this.fvar.axis,
                    r = Array.isArray(t),
                    n = 0;
                  for (t = r ? t : t[Symbol.iterator](); ; ) {
                    var i;
                    if (r) {
                      if (n >= t.length) break;
                      i = t[n++];
                    } else {
                      if ((n = t.next()).done) break;
                      i = n.value;
                    }
                    var a = i;
                    e[a.axisTag.trim()] = {
                      name: a.name.en,
                      min: a.minValue,
                      default: a.defaultValue,
                      max: a.maxValue,
                    };
                  }
                  return e;
                },
              },
              {
                key: "namedVariations",
                get: function () {
                  var e = {};
                  if (!this.fvar) return e;
                  var t = this.fvar.instance,
                    r = Array.isArray(t),
                    n = 0;
                  for (t = r ? t : t[Symbol.iterator](); ; ) {
                    var i;
                    if (r) {
                      if (n >= t.length) break;
                      i = t[n++];
                    } else {
                      if ((n = t.next()).done) break;
                      i = n.value;
                    }
                    for (
                      var a = i, o = {}, s = 0;
                      s < this.fvar.axis.length;
                      s++
                    ) {
                      o[this.fvar.axis[s].axisTag.trim()] = a.coord[s];
                    }
                    e[a.name.en] = o;
                  }
                  return e;
                },
              },
              {
                key: "_variationProcessor",
                get: function () {
                  if (!this.fvar) return null;
                  var e = this.variationCoords;
                  return e || this.CFF2
                    ? (e ||
                        (e = this.fvar.axis.map(function (e) {
                          return e.defaultValue;
                        })),
                      new fb(this, e))
                    : null;
                },
              },
            ]),
            e
          );
        })()).prototype,
        "bbox",
        [fi],
        Object.getOwnPropertyDescriptor($y.prototype, "bbox"),
        $y.prototype
      ),
      ci(
        $y.prototype,
        "_cmapProcessor",
        [fi],
        Object.getOwnPropertyDescriptor($y.prototype, "_cmapProcessor"),
        $y.prototype
      ),
      ci(
        $y.prototype,
        "characterSet",
        [fi],
        Object.getOwnPropertyDescriptor($y.prototype, "characterSet"),
        $y.prototype
      ),
      ci(
        $y.prototype,
        "_layoutEngine",
        [fi],
        Object.getOwnPropertyDescriptor($y.prototype, "_layoutEngine"),
        $y.prototype
      ),
      ci(
        $y.prototype,
        "variationAxes",
        [fi],
        Object.getOwnPropertyDescriptor($y.prototype, "variationAxes"),
        $y.prototype
      ),
      ci(
        $y.prototype,
        "namedVariations",
        [fi],
        Object.getOwnPropertyDescriptor($y.prototype, "namedVariations"),
        $y.prototype
      ),
      ci(
        $y.prototype,
        "_variationProcessor",
        [fi],
        Object.getOwnPropertyDescriptor($y.prototype, "_variationProcessor"),
        $y.prototype
      ),
      $y),
    wb = new ni.Struct({
      tag: new ni.String(4),
      offset: new ni.Pointer(ni.uint32, "void", { type: "global" }),
      compLength: ni.uint32,
      length: ni.uint32,
      origChecksum: ni.uint32,
    }),
    xb = new ni.Struct({
      tag: new ni.String(4),
      flavor: ni.uint32,
      length: ni.uint32,
      numTables: ni.uint16,
      reserved: new ni.Reserved(ni.uint16),
      totalSfntSize: ni.uint32,
      majorVersion: ni.uint16,
      minorVersion: ni.uint16,
      metaOffset: ni.uint32,
      metaLength: ni.uint32,
      metaOrigLength: ni.uint32,
      privOffset: ni.uint32,
      privLength: ni.uint32,
      tables: new ni.Array(wb, "numTables"),
    });
  xb.process = function () {
    var e = {},
      t = this.tables,
      r = Array.isArray(t),
      n = 0;
    for (t = r ? t : t[Symbol.iterator](); ; ) {
      var i;
      if (r) {
        if (n >= t.length) break;
        i = t[n++];
      } else {
        if ((n = t.next()).done) break;
        i = n.value;
      }
      var a = i;
      e[a.tag] = a;
    }
    this.tables = e;
  };
  var Sb = (function (e) {
    function t() {
      return e.apply(this, arguments) || this;
    }
    li(t, e),
      (t.probe = function (e) {
        return "wOFF" === e.toString("ascii", 0, 4);
      });
    var r = t.prototype;
    return (
      (r._decodeDirectory = function () {
        this.directory = xb.decode(this.stream, { _startOffset: 0 });
      }),
      (r._getTableStream = function (e) {
        var t = this.directory.tables[e];
        if (t) {
          if (((this.stream.pos = t.offset), t.compLength < t.length)) {
            this.stream.pos += 2;
            var r = new g(t.length),
              n = sl(this.stream.readBuffer(t.compLength - 2), r);
            return new ni.DecodeStream(n);
          }
          return this.stream;
        }
        return null;
      }),
      t
    );
  })(mb);
  function kb(e) {
    (this.buffer = e), (this.pos = 0);
  }
  kb.prototype.read = function (e, t, r) {
    this.pos + r > this.buffer.length && (r = this.buffer.length - this.pos);
    for (var n = 0; n < r; n++) e[t + n] = this.buffer[this.pos + n];
    return (this.pos += r), r;
  };
  var Ab = kb;
  function Cb(e) {
    (this.buffer = e), (this.pos = 0);
  }
  Cb.prototype.write = function (e, t) {
    if (this.pos + t > this.buffer.length)
      throw new Error("Output buffer is not large enough");
    return this.buffer.set(e.subarray(0, t), this.pos), (this.pos += t), t;
  };
  var Pb = { BrotliInput: Ab, BrotliOutput: Cb },
    Ib = 8224,
    Ob = new Uint32Array([
      0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383,
      32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607,
      16777215,
    ]);
  function Eb(e) {
    (this.buf_ = new Uint8Array(Ib)), (this.input_ = e), this.reset();
  }
  (Eb.READ_SIZE = 4096),
    (Eb.IBUF_MASK = 8191),
    (Eb.prototype.reset = function () {
      (this.buf_ptr_ = 0),
        (this.val_ = 0),
        (this.pos_ = 0),
        (this.bit_pos_ = 0),
        (this.bit_end_pos_ = 0),
        (this.eos_ = 0),
        this.readMoreInput();
      for (var e = 0; e < 4; e++)
        (this.val_ |= this.buf_[this.pos_] << (8 * e)), ++this.pos_;
      return this.bit_end_pos_ > 0;
    }),
    (Eb.prototype.readMoreInput = function () {
      if (!(this.bit_end_pos_ > 256))
        if (this.eos_) {
          if (this.bit_pos_ > this.bit_end_pos_)
            throw new Error(
              "Unexpected end of input " +
                this.bit_pos_ +
                " " +
                this.bit_end_pos_
            );
        } else {
          var e = this.buf_ptr_,
            t = this.input_.read(this.buf_, e, 4096);
          if (t < 0) throw new Error("Unexpected end of input");
          if (t < 4096) {
            this.eos_ = 1;
            for (var r = 0; r < 32; r++) this.buf_[e + t + r] = 0;
          }
          if (0 === e) {
            for (r = 0; r < 32; r++) this.buf_[8192 + r] = this.buf_[r];
            this.buf_ptr_ = 4096;
          } else this.buf_ptr_ = 0;
          this.bit_end_pos_ += t << 3;
        }
    }),
    (Eb.prototype.fillBitWindow = function () {
      for (; this.bit_pos_ >= 8; )
        (this.val_ >>>= 8),
          (this.val_ |= this.buf_[8191 & this.pos_] << 24),
          ++this.pos_,
          (this.bit_pos_ = (this.bit_pos_ - 8) >>> 0),
          (this.bit_end_pos_ = (this.bit_end_pos_ - 8) >>> 0);
    }),
    (Eb.prototype.readBits = function (e) {
      32 - this.bit_pos_ < e && this.fillBitWindow();
      var t = (this.val_ >>> this.bit_pos_) & Ob[e];
      return (this.bit_pos_ += e), t;
    });
  for (
    var Bb = Eb,
      Tb = function (e) {
        var t = jb(e),
          r = t[0],
          n = t[1];
        return (3 * (r + n)) / 4 - n;
      },
      Lb = function (e) {
        for (
          var t,
            r = jb(e),
            n = r[0],
            i = r[1],
            a = new Mb(
              (function (e, t, r) {
                return (3 * (t + r)) / 4 - r;
              })(0, n, i)
            ),
            o = 0,
            s = i > 0 ? n - 4 : n,
            u = 0;
          u < s;
          u += 4
        )
          (t =
            (Rb[e.charCodeAt(u)] << 18) |
            (Rb[e.charCodeAt(u + 1)] << 12) |
            (Rb[e.charCodeAt(u + 2)] << 6) |
            Rb[e.charCodeAt(u + 3)]),
            (a[o++] = (t >> 16) & 255),
            (a[o++] = (t >> 8) & 255),
            (a[o++] = 255 & t);
        2 === i &&
          ((t = (Rb[e.charCodeAt(u)] << 2) | (Rb[e.charCodeAt(u + 1)] >> 4)),
          (a[o++] = 255 & t));
        1 === i &&
          ((t =
            (Rb[e.charCodeAt(u)] << 10) |
            (Rb[e.charCodeAt(u + 1)] << 4) |
            (Rb[e.charCodeAt(u + 2)] >> 2)),
          (a[o++] = (t >> 8) & 255),
          (a[o++] = 255 & t));
        return a;
      },
      zb = function (e) {
        for (
          var t, r = e.length, n = r % 3, i = [], a = 0, o = r - n;
          a < o;
          a += 16383
        )
          i.push(Gb(e, a, a + 16383 > o ? o : a + 16383));
        1 === n
          ? ((t = e[r - 1]), i.push(Db[t >> 2] + Db[(t << 4) & 63] + "=="))
          : 2 === n &&
            ((t = (e[r - 2] << 8) + e[r - 1]),
            i.push(Db[t >> 10] + Db[(t >> 4) & 63] + Db[(t << 2) & 63] + "="));
        return i.join("");
      },
      Db = [],
      Rb = [],
      Mb = "undefined" != typeof Uint8Array ? Uint8Array : Array,
      Fb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      Ub = 0,
      Nb = Fb.length;
    Ub < Nb;
    ++Ub
  )
    (Db[Ub] = Fb[Ub]), (Rb[Fb.charCodeAt(Ub)] = Ub);
  function jb(e) {
    var t = e.length;
    if (t % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var r = e.indexOf("=");
    return -1 === r && (r = t), [r, r === t ? 0 : 4 - (r % 4)];
  }
  function Gb(e, t, r) {
    for (var n, i, a = [], o = t; o < r; o += 3)
      (n =
        ((e[o] << 16) & 16711680) +
        ((e[o + 1] << 8) & 65280) +
        (255 & e[o + 2])),
        a.push(
          Db[((i = n) >> 18) & 63] +
            Db[(i >> 12) & 63] +
            Db[(i >> 6) & 63] +
            Db[63 & i]
        );
    return a.join("");
  }
  (Rb["-".charCodeAt(0)] = 62), (Rb["_".charCodeAt(0)] = 63);
  var Vb = { byteLength: Tb, toByteArray: Lb, fromByteArray: zb },
    _b = function (e) {
      return e(
        Vb.toByteArray(
          "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"
        )
      );
    },
    qb = re(function (e, t) {
      (t.init = function (e) {
        t.dictionary = _b(e);
      }),
        (t.offsetsByLength = new Uint32Array([
          0, 0, 0, 0, 0, 4096, 9216, 21504, 35840, 44032, 53248, 63488, 74752,
          87040, 93696, 100864, 104704, 106752, 108928, 113536, 115968, 118528,
          119872, 121280, 122016,
        ])),
        (t.sizeBitsByLength = new Uint8Array([
          0, 0, 0, 0, 10, 10, 11, 11, 10, 10, 10, 10, 10, 9, 9, 8, 7, 7, 8, 7,
          7, 6, 6, 5, 5,
        ])),
        (t.minDictionaryWordLength = 4),
        (t.maxDictionaryWordLength = 24);
    });
  qb.init,
    qb.dictionary,
    qb.offsetsByLength,
    qb.sizeBitsByLength,
    qb.minDictionaryWordLength,
    qb.maxDictionaryWordLength;
  function Wb(e, t) {
    (this.bits = e), (this.value = t);
  }
  var Hb = 15;
  function Yb(e, t) {
    for (var r = 1 << (t - 1); e & r; ) r >>= 1;
    return (e & (r - 1)) + r;
  }
  function Zb(e, t, r, n, i) {
    do {
      e[t + (n -= r)] = new Wb(i.bits, i.value);
    } while (n > 0);
  }
  function Xb(e, t, r) {
    for (var n = 1 << (t - r); t < Hb && !((n -= e[t]) <= 0); ) ++t, (n <<= 1);
    return t - r;
  }
  var Kb = {
      HuffmanCode: Wb,
      BrotliBuildHuffmanTable: function (e, t, r, n, i) {
        var a,
          o,
          s,
          u,
          l,
          c,
          f,
          h,
          d,
          p,
          g = t,
          v = new Int32Array(Hb + 1),
          y = new Int32Array(Hb + 1);
        for (p = new Int32Array(i), o = 0; o < i; o++) v[n[o]]++;
        for (y[1] = 0, a = 1; a < Hb; a++) y[a + 1] = y[a] + v[a];
        for (o = 0; o < i; o++) 0 !== n[o] && (p[y[n[o]]++] = o);
        if (((d = h = 1 << (f = r)), 1 === y[Hb])) {
          for (s = 0; s < d; ++s) e[t + s] = new Wb(0, 65535 & p[0]);
          return d;
        }
        for (s = 0, o = 0, a = 1, u = 2; a <= r; ++a, u <<= 1)
          for (; v[a] > 0; --v[a])
            Zb(e, t + s, u, h, new Wb(255 & a, 65535 & p[o++])), (s = Yb(s, a));
        for (c = d - 1, l = -1, a = r + 1, u = 2; a <= Hb; ++a, u <<= 1)
          for (; v[a] > 0; --v[a])
            (s & c) !== l &&
              ((t += h),
              (d += h = 1 << (f = Xb(v, a, r))),
              (e[g + (l = s & c)] = new Wb(
                (f + r) & 255,
                (t - g - l) & 65535
              ))),
              Zb(e, t + (s >> r), u, h, new Wb((a - r) & 255, 65535 & p[o++])),
              (s = Yb(s, a));
        return d;
      },
    },
    Jb = {
      lookup: new Uint8Array([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 8, 12, 16, 12, 12, 20, 12, 16, 24, 28, 12, 12,
        32, 12, 36, 12, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 32, 32, 24, 40,
        28, 12, 12, 48, 52, 52, 52, 48, 52, 52, 52, 48, 52, 52, 52, 52, 52, 48,
        52, 52, 52, 52, 52, 48, 52, 52, 52, 52, 52, 24, 12, 28, 12, 12, 12, 56,
        60, 60, 60, 56, 60, 60, 60, 56, 60, 60, 60, 60, 60, 56, 60, 60, 60, 60,
        60, 56, 60, 60, 60, 60, 60, 24, 12, 28, 12, 0, 0, 1, 0, 1, 0, 1, 0, 1,
        0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
        0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
        0, 1, 0, 1, 0, 1, 0, 1, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3,
        2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3,
        2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2,
        2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1,
        1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
        4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
        4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6,
        6, 6, 6, 6, 6, 6, 6, 7, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
        16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
        16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
        16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 24, 24, 24, 24, 24, 24,
        24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        24, 24, 24, 24, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
        32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
        32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
        32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 40, 40, 40,
        40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
        40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
        40, 40, 40, 40, 40, 40, 40, 40, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48,
        48, 48, 48, 48, 48, 56, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
        14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
        32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
        50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 0, 1, 2, 3, 4,
        5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
        24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
        42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
        60, 61, 62, 63, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
        34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
        52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 0, 1, 2, 3, 4, 5, 6, 7,
        8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
        26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
        44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61,
        62, 63, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
        5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10,
        11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15,
        15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19,
        20, 20, 20, 20, 21, 21, 21, 21, 22, 22, 22, 22, 23, 23, 23, 23, 24, 24,
        24, 24, 25, 25, 25, 25, 26, 26, 26, 26, 27, 27, 27, 27, 28, 28, 28, 28,
        29, 29, 29, 29, 30, 30, 30, 30, 31, 31, 31, 31, 32, 32, 32, 32, 33, 33,
        33, 33, 34, 34, 34, 34, 35, 35, 35, 35, 36, 36, 36, 36, 37, 37, 37, 37,
        38, 38, 38, 38, 39, 39, 39, 39, 40, 40, 40, 40, 41, 41, 41, 41, 42, 42,
        42, 42, 43, 43, 43, 43, 44, 44, 44, 44, 45, 45, 45, 45, 46, 46, 46, 46,
        47, 47, 47, 47, 48, 48, 48, 48, 49, 49, 49, 49, 50, 50, 50, 50, 51, 51,
        51, 51, 52, 52, 52, 52, 53, 53, 53, 53, 54, 54, 54, 54, 55, 55, 55, 55,
        56, 56, 56, 56, 57, 57, 57, 57, 58, 58, 58, 58, 59, 59, 59, 59, 60, 60,
        60, 60, 61, 61, 61, 61, 62, 62, 62, 62, 63, 63, 63, 63, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ]),
      lookupOffsets: new Uint16Array([
        1024, 1536, 1280, 1536, 0, 256, 768, 512,
      ]),
    };
  function Qb(e, t) {
    (this.offset = e), (this.nbits = t);
  }
  var $b = {
    kBlockLengthPrefixCode: [
      new Qb(1, 2),
      new Qb(5, 2),
      new Qb(9, 2),
      new Qb(13, 2),
      new Qb(17, 3),
      new Qb(25, 3),
      new Qb(33, 3),
      new Qb(41, 3),
      new Qb(49, 4),
      new Qb(65, 4),
      new Qb(81, 4),
      new Qb(97, 4),
      new Qb(113, 5),
      new Qb(145, 5),
      new Qb(177, 5),
      new Qb(209, 5),
      new Qb(241, 6),
      new Qb(305, 6),
      new Qb(369, 7),
      new Qb(497, 8),
      new Qb(753, 9),
      new Qb(1265, 10),
      new Qb(2289, 11),
      new Qb(4337, 12),
      new Qb(8433, 13),
      new Qb(16625, 24),
    ],
    kInsertLengthPrefixCode: [
      new Qb(0, 0),
      new Qb(1, 0),
      new Qb(2, 0),
      new Qb(3, 0),
      new Qb(4, 0),
      new Qb(5, 0),
      new Qb(6, 1),
      new Qb(8, 1),
      new Qb(10, 2),
      new Qb(14, 2),
      new Qb(18, 3),
      new Qb(26, 3),
      new Qb(34, 4),
      new Qb(50, 4),
      new Qb(66, 5),
      new Qb(98, 5),
      new Qb(130, 6),
      new Qb(194, 7),
      new Qb(322, 8),
      new Qb(578, 9),
      new Qb(1090, 10),
      new Qb(2114, 12),
      new Qb(6210, 14),
      new Qb(22594, 24),
    ],
    kCopyLengthPrefixCode: [
      new Qb(2, 0),
      new Qb(3, 0),
      new Qb(4, 0),
      new Qb(5, 0),
      new Qb(6, 0),
      new Qb(7, 0),
      new Qb(8, 0),
      new Qb(9, 0),
      new Qb(10, 1),
      new Qb(12, 1),
      new Qb(14, 2),
      new Qb(18, 2),
      new Qb(22, 3),
      new Qb(30, 3),
      new Qb(38, 4),
      new Qb(54, 4),
      new Qb(70, 5),
      new Qb(102, 5),
      new Qb(134, 6),
      new Qb(198, 7),
      new Qb(326, 8),
      new Qb(582, 9),
      new Qb(1094, 10),
      new Qb(2118, 24),
    ],
    kInsertRangeLut: [0, 0, 8, 8, 0, 16, 8, 16, 16],
    kCopyRangeLut: [0, 8, 0, 8, 16, 0, 16, 8, 16],
  };
  function em(e, t, r) {
    (this.prefix = new Uint8Array(e.length)),
      (this.transform = t),
      (this.suffix = new Uint8Array(r.length));
    for (var n = 0; n < e.length; n++) this.prefix[n] = e.charCodeAt(n);
    for (n = 0; n < r.length; n++) this.suffix[n] = r.charCodeAt(n);
  }
  var tm = [
    new em("", 0, ""),
    new em("", 0, " "),
    new em(" ", 0, " "),
    new em("", 12, ""),
    new em("", 10, " "),
    new em("", 0, " the "),
    new em(" ", 0, ""),
    new em("s ", 0, " "),
    new em("", 0, " of "),
    new em("", 10, ""),
    new em("", 0, " and "),
    new em("", 13, ""),
    new em("", 1, ""),
    new em(", ", 0, " "),
    new em("", 0, ", "),
    new em(" ", 10, " "),
    new em("", 0, " in "),
    new em("", 0, " to "),
    new em("e ", 0, " "),
    new em("", 0, '"'),
    new em("", 0, "."),
    new em("", 0, '">'),
    new em("", 0, "\n"),
    new em("", 3, ""),
    new em("", 0, "]"),
    new em("", 0, " for "),
    new em("", 14, ""),
    new em("", 2, ""),
    new em("", 0, " a "),
    new em("", 0, " that "),
    new em(" ", 10, ""),
    new em("", 0, ". "),
    new em(".", 0, ""),
    new em(" ", 0, ", "),
    new em("", 15, ""),
    new em("", 0, " with "),
    new em("", 0, "'"),
    new em("", 0, " from "),
    new em("", 0, " by "),
    new em("", 16, ""),
    new em("", 17, ""),
    new em(" the ", 0, ""),
    new em("", 4, ""),
    new em("", 0, ". The "),
    new em("", 11, ""),
    new em("", 0, " on "),
    new em("", 0, " as "),
    new em("", 0, " is "),
    new em("", 7, ""),
    new em("", 1, "ing "),
    new em("", 0, "\n\t"),
    new em("", 0, ":"),
    new em(" ", 0, ". "),
    new em("", 0, "ed "),
    new em("", 20, ""),
    new em("", 18, ""),
    new em("", 6, ""),
    new em("", 0, "("),
    new em("", 10, ", "),
    new em("", 8, ""),
    new em("", 0, " at "),
    new em("", 0, "ly "),
    new em(" the ", 0, " of "),
    new em("", 5, ""),
    new em("", 9, ""),
    new em(" ", 10, ", "),
    new em("", 10, '"'),
    new em(".", 0, "("),
    new em("", 11, " "),
    new em("", 10, '">'),
    new em("", 0, '="'),
    new em(" ", 0, "."),
    new em(".com/", 0, ""),
    new em(" the ", 0, " of the "),
    new em("", 10, "'"),
    new em("", 0, ". This "),
    new em("", 0, ","),
    new em(".", 0, " "),
    new em("", 10, "("),
    new em("", 10, "."),
    new em("", 0, " not "),
    new em(" ", 0, '="'),
    new em("", 0, "er "),
    new em(" ", 11, " "),
    new em("", 0, "al "),
    new em(" ", 11, ""),
    new em("", 0, "='"),
    new em("", 11, '"'),
    new em("", 10, ". "),
    new em(" ", 0, "("),
    new em("", 0, "ful "),
    new em(" ", 10, ". "),
    new em("", 0, "ive "),
    new em("", 0, "less "),
    new em("", 11, "'"),
    new em("", 0, "est "),
    new em(" ", 10, "."),
    new em("", 11, '">'),
    new em(" ", 0, "='"),
    new em("", 10, ","),
    new em("", 0, "ize "),
    new em("", 11, "."),
    new em("Â ", 0, ""),
    new em(" ", 0, ","),
    new em("", 10, '="'),
    new em("", 11, '="'),
    new em("", 0, "ous "),
    new em("", 11, ", "),
    new em("", 10, "='"),
    new em(" ", 10, ","),
    new em(" ", 11, '="'),
    new em(" ", 11, ", "),
    new em("", 11, ","),
    new em("", 11, "("),
    new em("", 11, ". "),
    new em(" ", 11, "."),
    new em("", 11, "='"),
    new em(" ", 11, ". "),
    new em(" ", 10, '="'),
    new em(" ", 11, "='"),
    new em(" ", 10, "='"),
  ];
  function rm(e, t) {
    return e[t] < 192
      ? (e[t] >= 97 && e[t] <= 122 && (e[t] ^= 32), 1)
      : e[t] < 224
      ? ((e[t + 1] ^= 32), 2)
      : ((e[t + 2] ^= 5), 3);
  }
  var nm = {
      kTransforms: tm,
      kNumTransforms: tm.length,
      transformDictionaryWord: function (e, t, r, n, i) {
        var a,
          o = tm[i].prefix,
          s = tm[i].suffix,
          u = tm[i].transform,
          l = u < 12 ? 0 : u - 11,
          c = 0,
          f = t;
        l > n && (l = n);
        for (var h = 0; h < o.length; ) e[t++] = o[h++];
        for (r += l, n -= l, u <= 9 && (n -= u), c = 0; c < n; c++)
          e[t++] = qb.dictionary[r + c];
        if (((a = t - n), 10 === u)) rm(e, a);
        else if (11 === u)
          for (; n > 0; ) {
            var d = rm(e, a);
            (a += d), (n -= d);
          }
        for (var p = 0; p < s.length; ) e[t++] = s[p++];
        return t - f;
      },
    },
    im = Pb.BrotliInput,
    am = Pb.BrotliOutput,
    om = Kb.HuffmanCode,
    sm = Kb.BrotliBuildHuffmanTable,
    um = 8,
    lm = 16,
    cm = 256,
    fm = 704,
    hm = 26,
    dm = 6,
    pm = 2,
    gm = 8,
    vm = 255,
    ym = 1080,
    bm = 18,
    mm = new Uint8Array([
      1, 2, 3, 4, 0, 5, 17, 6, 16, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    ]),
    wm = 16,
    xm = new Uint8Array([3, 2, 1, 0, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2]),
    Sm = new Int8Array([0, 0, 0, 0, -1, 1, -2, 2, -3, 3, -1, 1, -2, 2, -3, 3]),
    km = new Uint16Array([
      256, 402, 436, 468, 500, 534, 566, 598, 630, 662, 694, 726, 758, 790, 822,
      854, 886, 920, 952, 984, 1016, 1048, 1080,
    ]);
  function Am(e) {
    var t;
    return 0 === e.readBits(1)
      ? 16
      : (t = e.readBits(3)) > 0
      ? 17 + t
      : (t = e.readBits(3)) > 0
      ? 8 + t
      : 17;
  }
  function Cm(e) {
    if (e.readBits(1)) {
      var t = e.readBits(3);
      return 0 === t ? 1 : e.readBits(t) + (1 << t);
    }
    return 0;
  }
  function Pm() {
    (this.meta_block_length = 0),
      (this.input_end = 0),
      (this.is_uncompressed = 0),
      (this.is_metadata = !1);
  }
  function Im(e) {
    var t,
      r,
      n,
      i = new Pm();
    if (((i.input_end = e.readBits(1)), i.input_end && e.readBits(1))) return i;
    if (7 === (t = e.readBits(2) + 4)) {
      if (((i.is_metadata = !0), 0 !== e.readBits(1)))
        throw new Error("Invalid reserved bit");
      if (0 === (r = e.readBits(2))) return i;
      for (n = 0; n < r; n++) {
        var a = e.readBits(8);
        if (n + 1 === r && r > 1 && 0 === a)
          throw new Error("Invalid size byte");
        i.meta_block_length |= a << (8 * n);
      }
    } else
      for (n = 0; n < t; ++n) {
        var o = e.readBits(4);
        if (n + 1 === t && t > 4 && 0 === o)
          throw new Error("Invalid size nibble");
        i.meta_block_length |= o << (4 * n);
      }
    return (
      ++i.meta_block_length,
      i.input_end || i.is_metadata || (i.is_uncompressed = e.readBits(1)),
      i
    );
  }
  function Om(e, t, r) {
    var n;
    return (
      r.fillBitWindow(),
      (n = e[(t += (r.val_ >>> r.bit_pos_) & vm)].bits - gm) > 0 &&
        ((r.bit_pos_ += gm),
        (t += e[t].value),
        (t += (r.val_ >>> r.bit_pos_) & ((1 << n) - 1))),
      (r.bit_pos_ += e[t].bits),
      e[t].value
    );
  }
  function Em(e, t, r, n) {
    var i,
      a,
      o = new Uint8Array(e);
    if ((n.readMoreInput(), 1 === (a = n.readBits(2)))) {
      for (
        var s = e - 1, u = 0, l = new Int32Array(4), c = n.readBits(2) + 1;
        s;

      )
        (s >>= 1), ++u;
      for (f = 0; f < c; ++f) (l[f] = n.readBits(u) % e), (o[l[f]] = 2);
      switch (((o[l[0]] = 1), c)) {
        case 1:
          break;
        case 3:
          if (l[0] === l[1] || l[0] === l[2] || l[1] === l[2])
            throw new Error("[ReadHuffmanCode] invalid symbols");
          break;
        case 2:
          if (l[0] === l[1])
            throw new Error("[ReadHuffmanCode] invalid symbols");
          o[l[1]] = 1;
          break;
        case 4:
          if (
            l[0] === l[1] ||
            l[0] === l[2] ||
            l[0] === l[3] ||
            l[1] === l[2] ||
            l[1] === l[3] ||
            l[2] === l[3]
          )
            throw new Error("[ReadHuffmanCode] invalid symbols");
          n.readBits(1) ? ((o[l[2]] = 3), (o[l[3]] = 3)) : (o[l[0]] = 2);
      }
    } else {
      var f,
        h = new Uint8Array(bm),
        d = 32,
        p = 0,
        g = [
          new om(2, 0),
          new om(2, 4),
          new om(2, 3),
          new om(3, 2),
          new om(2, 0),
          new om(2, 4),
          new om(2, 3),
          new om(4, 1),
          new om(2, 0),
          new om(2, 4),
          new om(2, 3),
          new om(3, 2),
          new om(2, 0),
          new om(2, 4),
          new om(2, 3),
          new om(4, 5),
        ];
      for (f = a; f < bm && d > 0; ++f) {
        var v,
          y = mm[f],
          b = 0;
        n.fillBitWindow(),
          (b += (n.val_ >>> n.bit_pos_) & 15),
          (n.bit_pos_ += g[b].bits),
          (v = g[b].value),
          (h[y] = v),
          0 !== v && ((d -= 32 >> v), ++p);
      }
      if (1 !== p && 0 !== d)
        throw new Error("[ReadHuffmanCode] invalid num_codes or space");
      !(function (e, t, r, n) {
        for (
          var i = 0, a = um, o = 0, s = 0, u = 32768, l = [], c = 0;
          c < 32;
          c++
        )
          l.push(new om(0, 0));
        for (sm(l, 0, 5, e, bm); i < t && u > 0; ) {
          var f,
            h = 0;
          if (
            (n.readMoreInput(),
            n.fillBitWindow(),
            (h += (n.val_ >>> n.bit_pos_) & 31),
            (n.bit_pos_ += l[h].bits),
            (f = 255 & l[h].value) < lm)
          )
            (o = 0), (r[i++] = f), 0 !== f && ((a = f), (u -= 32768 >> f));
          else {
            var d,
              p,
              g = f - 14,
              v = 0;
            if (
              (f === lm && (v = a),
              s !== v && ((o = 0), (s = v)),
              (d = o),
              o > 0 && ((o -= 2), (o <<= g)),
              i + (p = (o += n.readBits(g) + 3) - d) > t)
            )
              throw new Error(
                "[ReadHuffmanCodeLengths] symbol + repeat_delta > num_symbols"
              );
            for (var y = 0; y < p; y++) r[i + y] = s;
            (i += p), 0 !== s && (u -= p << (15 - s));
          }
        }
        if (0 !== u) throw new Error("[ReadHuffmanCodeLengths] space = " + u);
        for (; i < t; i++) r[i] = 0;
      })(h, e, o, n);
    }
    if (0 === (i = sm(t, r, gm, o, e)))
      throw new Error("[ReadHuffmanCode] BuildHuffmanTable failed: ");
    return i;
  }
  function Bm(e, t, r) {
    var n, i;
    return (
      (n = Om(e, t, r)),
      (i = $b.kBlockLengthPrefixCode[n].nbits),
      $b.kBlockLengthPrefixCode[n].offset + r.readBits(i)
    );
  }
  function Tm(e, t, r) {
    var n;
    return (
      e < wm ? ((r += xm[e]), (n = t[(r &= 3)] + Sm[e])) : (n = e - wm + 1), n
    );
  }
  function Lm(e, t) {
    for (var r = e[t], n = t; n; --n) e[n] = e[n - 1];
    e[0] = r;
  }
  function zm(e, t) {
    (this.alphabet_size = e),
      (this.num_htrees = t),
      (this.codes = new Array(t + t * km[(e + 31) >>> 5])),
      (this.htrees = new Uint32Array(t));
  }
  function Dm(e, t) {
    var r,
      n,
      i = { num_htrees: null, context_map: null },
      a = 0;
    t.readMoreInput();
    var o = (i.num_htrees = Cm(t) + 1),
      s = (i.context_map = new Uint8Array(e));
    if (o <= 1) return i;
    for (t.readBits(1) && (a = t.readBits(4) + 1), r = [], n = 0; n < ym; n++)
      r[n] = new om(0, 0);
    for (Em(o + a, r, 0, t), n = 0; n < e; ) {
      var u;
      if ((t.readMoreInput(), 0 === (u = Om(r, 0, t)))) (s[n] = 0), ++n;
      else if (u <= a)
        for (var l = 1 + (1 << u) + t.readBits(u); --l; ) {
          if (n >= e)
            throw new Error("[DecodeContextMap] i >= context_map_size");
          (s[n] = 0), ++n;
        }
      else (s[n] = u - a), ++n;
    }
    return (
      t.readBits(1) &&
        (function (e, t) {
          var r,
            n = new Uint8Array(256);
          for (r = 0; r < 256; ++r) n[r] = r;
          for (r = 0; r < t; ++r) {
            var i = e[r];
            (e[r] = n[i]), i && Lm(n, i);
          }
        })(s, e),
      i
    );
  }
  function Rm(e, t, r, n, i, a, o) {
    var s,
      u = 2 * r,
      l = r,
      c = Om(t, r * ym, o);
    (s =
      0 === c
        ? i[u + (1 & a[l])]
        : 1 === c
        ? i[u + ((a[l] - 1) & 1)] + 1
        : c - 2) >= e && (s -= e),
      (n[r] = s),
      (i[u + (1 & a[l])] = s),
      ++a[l];
  }
  function Mm(e, t, r, n, i, a) {
    var o,
      s = i + 1,
      u = r & i,
      l = a.pos_ & Bb.IBUF_MASK;
    if (t < 8 || a.bit_pos_ + (t << 3) < a.bit_end_pos_)
      for (; t-- > 0; )
        a.readMoreInput(),
          (n[u++] = a.readBits(8)),
          u === s && (e.write(n, s), (u = 0));
    else {
      if (a.bit_end_pos_ < 32)
        throw new Error("[CopyUncompressedBlockToOutput] br.bit_end_pos_ < 32");
      for (; a.bit_pos_ < 32; )
        (n[u] = a.val_ >>> a.bit_pos_), (a.bit_pos_ += 8), ++u, --t;
      if (l + (o = (a.bit_end_pos_ - a.bit_pos_) >> 3) > Bb.IBUF_MASK) {
        for (var c = Bb.IBUF_MASK + 1 - l, f = 0; f < c; f++)
          n[u + f] = a.buf_[l + f];
        (o -= c), (u += c), (t -= c), (l = 0);
      }
      for (f = 0; f < o; f++) n[u + f] = a.buf_[l + f];
      if (((t -= o), (u += o) >= s)) {
        e.write(n, s), (u -= s);
        for (f = 0; f < u; f++) n[f] = n[s + f];
      }
      for (; u + t >= s; ) {
        if (((o = s - u), a.input_.read(n, u, o) < o))
          throw new Error("[CopyUncompressedBlockToOutput] not enough bytes");
        e.write(n, s), (t -= o), (u = 0);
      }
      if (a.input_.read(n, u, t) < t)
        throw new Error("[CopyUncompressedBlockToOutput] not enough bytes");
      a.reset();
    }
  }
  function Fm(e) {
    var t = (e.bit_pos_ + 7) & -8;
    return 0 == e.readBits(t - e.bit_pos_);
  }
  function Um(e) {
    var t = new im(e),
      r = new Bb(t);
    return Am(r), Im(r).meta_block_length;
  }
  zm.prototype.decode = function (e) {
    var t,
      r = 0;
    for (t = 0; t < this.num_htrees; ++t)
      (this.htrees[t] = r), (r += Em(this.alphabet_size, this.codes, r, e));
  };
  var Nm = Um;
  function jm(e, t) {
    var r = new im(e);
    null == t && (t = Um(e));
    var n = new Uint8Array(t),
      i = new am(n);
    return (
      Vm(r, i),
      i.pos < i.buffer.length && (i.buffer = i.buffer.subarray(0, i.pos)),
      i.buffer
    );
  }
  var Gm = jm;
  function Vm(e, t) {
    var r,
      n,
      i,
      a,
      o,
      s,
      u,
      l,
      c,
      f,
      h = 0,
      d = 0,
      p = 0,
      g = [16, 15, 11, 4],
      v = 0,
      y = 0,
      b = 0,
      m = [new zm(0, 0), new zm(0, 0), new zm(0, 0)],
      w = 128 + Bb.READ_SIZE;
    (i = (1 << (n = Am((f = new Bb(e))))) - 16),
      (o = (a = 1 << n) - 1),
      (s = new Uint8Array(a + w + qb.maxDictionaryWordLength)),
      (u = a),
      (l = []),
      (c = []);
    for (var x = 0; x < 3 * ym; x++)
      (l[x] = new om(0, 0)), (c[x] = new om(0, 0));
    for (; !d; ) {
      var S,
        k,
        A,
        C,
        P,
        I,
        O,
        E,
        B,
        T,
        L,
        z = 0,
        D = [1 << 28, 1 << 28, 1 << 28],
        R = [0],
        M = [1, 1, 1],
        F = [0, 1, 0, 1, 0, 1],
        U = [0],
        N = null,
        j = null,
        G = 0,
        V = null,
        _ = 0,
        q = 0,
        W = 0;
      for (r = 0; r < 3; ++r) (m[r].codes = null), (m[r].htrees = null);
      f.readMoreInput();
      var H = Im(f);
      if (h + (z = H.meta_block_length) > t.buffer.length) {
        var Y = new Uint8Array(h + z);
        Y.set(t.buffer), (t.buffer = Y);
      }
      if (((d = H.input_end), (S = H.is_uncompressed), H.is_metadata))
        for (Fm(f); z > 0; --z) f.readMoreInput(), f.readBits(8);
      else if (0 !== z)
        if (S)
          (f.bit_pos_ = (f.bit_pos_ + 7) & -8), Mm(t, z, h, s, o, f), (h += z);
        else {
          for (r = 0; r < 3; ++r)
            (M[r] = Cm(f) + 1),
              M[r] >= 2 &&
                (Em(M[r] + 2, l, r * ym, f),
                Em(hm, c, r * ym, f),
                (D[r] = Bm(c, r * ym, f)),
                (U[r] = 1));
          for (
            f.readMoreInput(),
              C = (1 << (k = f.readBits(2))) - 1,
              P = (A = wm + (f.readBits(4) << k)) + (48 << k),
              N = new Uint8Array(M[0]),
              r = 0;
            r < M[0];
            ++r
          )
            f.readMoreInput(), (N[r] = f.readBits(2) << 1);
          var Z = Dm(M[0] << dm, f);
          (O = Z.num_htrees), (I = Z.context_map);
          var X = Dm(M[2] << pm, f);
          for (
            B = X.num_htrees,
              E = X.context_map,
              m[0] = new zm(cm, O),
              m[1] = new zm(fm, M[1]),
              m[2] = new zm(P, B),
              r = 0;
            r < 3;
            ++r
          )
            m[r].decode(f);
          for (
            j = 0,
              V = 0,
              T = N[R[0]],
              q = Jb.lookupOffsets[T],
              W = Jb.lookupOffsets[T + 1],
              L = m[1].htrees[0];
            z > 0;

          ) {
            var K, J, Q, $, ee, te, re, ne, ie, ae, oe, se;
            for (
              f.readMoreInput(),
                0 === D[1] &&
                  (Rm(M[1], l, 1, R, F, U, f),
                  (D[1] = Bm(c, ym, f)),
                  (L = m[1].htrees[R[1]])),
                --D[1],
                (J = (K = Om(m[1].codes, L, f)) >> 6) >= 2
                  ? ((J -= 2), (re = -1))
                  : (re = 0),
                Q = $b.kInsertRangeLut[J] + ((K >> 3) & 7),
                $ = $b.kCopyRangeLut[J] + (7 & K),
                ee =
                  $b.kInsertLengthPrefixCode[Q].offset +
                  f.readBits($b.kInsertLengthPrefixCode[Q].nbits),
                te =
                  $b.kCopyLengthPrefixCode[$].offset +
                  f.readBits($b.kCopyLengthPrefixCode[$].nbits),
                y = s[(h - 1) & o],
                b = s[(h - 2) & o],
                ie = 0;
              ie < ee;
              ++ie
            )
              f.readMoreInput(),
                0 === D[0] &&
                  (Rm(M[0], l, 0, R, F, U, f),
                  (D[0] = Bm(c, 0, f)),
                  (j = R[0] << dm),
                  (T = N[R[0]]),
                  (q = Jb.lookupOffsets[T]),
                  (W = Jb.lookupOffsets[T + 1])),
                (G = I[j + (Jb.lookup[q + y] | Jb.lookup[W + b])]),
                --D[0],
                (b = y),
                (y = Om(m[0].codes, m[0].htrees[G], f)),
                (s[h & o] = y),
                (h & o) === o && t.write(s, a),
                ++h;
            if ((z -= ee) <= 0) break;
            if (re < 0)
              if (
                (f.readMoreInput(),
                0 === D[2] &&
                  (Rm(M[2], l, 2, R, F, U, f),
                  (D[2] = Bm(c, 2 * ym, f)),
                  (V = R[2] << pm)),
                --D[2],
                (_ = E[V + (255 & (te > 4 ? 3 : te - 2))]),
                (re = Om(m[2].codes, m[2].htrees[_], f)) >= A)
              )
                (se = (re -= A) & C),
                  (re =
                    A +
                    (((ue =
                      ((2 + (1 & (re >>= k))) << (oe = 1 + (re >> 1))) - 4) +
                      f.readBits(oe)) <<
                      k) +
                    se);
            if ((ne = Tm(re, g, v)) < 0)
              throw new Error("[BrotliDecompress] invalid distance");
            if (((ae = h & o), ne > (p = h < i && p !== i ? h : i))) {
              if (
                !(
                  te >= qb.minDictionaryWordLength &&
                  te <= qb.maxDictionaryWordLength
                )
              )
                throw new Error(
                  "Invalid backward reference. pos: " +
                    h +
                    " distance: " +
                    ne +
                    " len: " +
                    te +
                    " bytes left: " +
                    z
                );
              var ue = qb.offsetsByLength[te],
                le = ne - p - 1,
                ce = qb.sizeBitsByLength[te],
                fe = le >> ce;
              if (
                ((ue += (le & ((1 << ce) - 1)) * te), !(fe < nm.kNumTransforms))
              )
                throw new Error(
                  "Invalid backward reference. pos: " +
                    h +
                    " distance: " +
                    ne +
                    " len: " +
                    te +
                    " bytes left: " +
                    z
                );
              var he = nm.transformDictionaryWord(s, ae, ue, te, fe);
              if (((h += he), (z -= he), (ae += he) >= u)) {
                t.write(s, a);
                for (var de = 0; de < ae - u; de++) s[de] = s[u + de];
              }
            } else {
              if ((re > 0 && ((g[3 & v] = ne), ++v), te > z))
                throw new Error(
                  "Invalid backward reference. pos: " +
                    h +
                    " distance: " +
                    ne +
                    " len: " +
                    te +
                    " bytes left: " +
                    z
                );
              for (ie = 0; ie < te; ++ie)
                (s[h & o] = s[(h - ne) & o]),
                  (h & o) === o && t.write(s, a),
                  ++h,
                  --z;
            }
            (y = s[(h - 1) & o]), (b = s[(h - 2) & o]);
          }
          h &= 1073741823;
        }
    }
    t.write(s, h & o);
  }
  var _m = Vm;
  qb.init(jm);
  var qm = {
      BrotliDecompressedSize: Nm,
      BrotliDecompressBuffer: Gm,
      BrotliDecompress: _m,
    }.BrotliDecompressBuffer,
    Wm = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      li(t, e);
      var r = t.prototype;
      return (
        (r._decode = function () {
          return this._font._transformedGlyphs[this.id];
        }),
        (r._getCBox = function () {
          return this.path.bbox;
        }),
        t
      );
    })(ab),
    Hm = {
      decode: function (e) {
        for (var t = 0, r = [0, 1, 2, 3, 4], n = 0; n < r.length; n++) {
          var i = e.readUInt8();
          if (3758096384 & t) throw new Error("Overflow");
          if (((t = (t << 7) | (127 & i)), 0 == (128 & i))) return t;
        }
        throw new Error("Bad base 128 number");
      },
    },
    Ym = [
      "cmap",
      "head",
      "hhea",
      "hmtx",
      "maxp",
      "name",
      "OS/2",
      "post",
      "cvt ",
      "fpgm",
      "glyf",
      "loca",
      "prep",
      "CFF ",
      "VORG",
      "EBDT",
      "EBLC",
      "gasp",
      "hdmx",
      "kern",
      "LTSH",
      "PCLT",
      "VDMX",
      "vhea",
      "vmtx",
      "BASE",
      "GDEF",
      "GPOS",
      "GSUB",
      "EBSC",
      "JSTF",
      "MATH",
      "CBDT",
      "CBLC",
      "COLR",
      "CPAL",
      "SVG ",
      "sbix",
      "acnt",
      "avar",
      "bdat",
      "bloc",
      "bsln",
      "cvar",
      "fdsc",
      "feat",
      "fmtx",
      "fvar",
      "gvar",
      "hsty",
      "just",
      "lcar",
      "mort",
      "morx",
      "opbd",
      "prop",
      "trak",
      "Zapf",
      "Silf",
      "Glat",
      "Gloc",
      "Feat",
      "Sill",
    ],
    Zm = new ni.Struct({
      flags: ni.uint8,
      customTag: new ni.Optional(new ni.String(4), function (e) {
        return 63 == (63 & e.flags);
      }),
      tag: function (e) {
        return e.customTag || Ym[63 & e.flags];
      },
      length: Hm,
      transformVersion: function (e) {
        return (e.flags >>> 6) & 3;
      },
      transformed: function (e) {
        return "glyf" === e.tag || "loca" === e.tag
          ? 0 === e.transformVersion
          : 0 !== e.transformVersion;
      },
      transformLength: new ni.Optional(Hm, function (e) {
        return e.transformed;
      }),
    }),
    Xm = new ni.Struct({
      tag: new ni.String(4),
      flavor: ni.uint32,
      length: ni.uint32,
      numTables: ni.uint16,
      reserved: new ni.Reserved(ni.uint16),
      totalSfntSize: ni.uint32,
      totalCompressedSize: ni.uint32,
      majorVersion: ni.uint16,
      minorVersion: ni.uint16,
      metaOffset: ni.uint32,
      metaLength: ni.uint32,
      metaOrigLength: ni.uint32,
      privOffset: ni.uint32,
      privLength: ni.uint32,
      tables: new ni.Array(Zm, "numTables"),
    });
  Xm.process = function () {
    for (var e = {}, t = 0; t < this.tables.length; t++) {
      var r = this.tables[t];
      e[r.tag] = r;
    }
    return (this.tables = e);
  };
  var Km = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      li(t, e),
        (t.probe = function (e) {
          return "wOF2" === e.toString("ascii", 0, 4);
        });
      var r = t.prototype;
      return (
        (r._decodeDirectory = function () {
          (this.directory = Xm.decode(this.stream)),
            (this._dataPos = this.stream.pos);
        }),
        (r._decompress = function () {
          if (!this._decompressed) {
            this.stream.pos = this._dataPos;
            var e = this.stream.readBuffer(this.directory.totalCompressedSize),
              t = 0;
            for (var r in this.directory.tables) {
              var n = this.directory.tables[r];
              (n.offset = t),
                (t += null != n.transformLength ? n.transformLength : n.length);
            }
            var i = qm(e, t);
            if (!i) throw new Error("Error decoding compressed data in WOFF2");
            (this.stream = new ni.DecodeStream(new g(i))),
              (this._decompressed = !0);
          }
        }),
        (r._decodeTable = function (t) {
          return this._decompress(), e.prototype._decodeTable.call(this, t);
        }),
        (r._getBaseGlyph = function (t, r) {
          if ((void 0 === r && (r = []), !this._glyphs[t]))
            return this.directory.tables.glyf &&
              this.directory.tables.glyf.transformed
              ? (this._transformedGlyphs || this._transformGlyfTable(),
                (this._glyphs[t] = new Wm(t, r, this)))
              : e.prototype._getBaseGlyph.call(this, t, r);
        }),
        (r._transformGlyfTable = function () {
          this._decompress(),
            (this.stream.pos = this.directory.tables.glyf.offset);
          for (
            var e = Qm.decode(this.stream), t = [], r = 0;
            r < e.numGlyphs;
            r++
          ) {
            var n = {},
              i = e.nContours.readInt16BE();
            if (((n.numberOfContours = i), i > 0)) {
              for (var a = [], o = 0, s = 0; s < i; s++) {
                (o += nw(e.nPoints)), a.push(o);
              }
              n.points = aw(e.flags, e.glyphs, o);
              for (var u = 0; u < i; u++) n.points[a[u] - 1].endContour = !0;
              nw(e.glyphs);
            } else if (i < 0) {
              if (
                ab.prototype._decodeComposite.call(
                  { _font: this },
                  n,
                  e.composites
                )
              )
                nw(e.glyphs);
            }
            t.push(n);
          }
          this._transformedGlyphs = t;
        }),
        t
      );
    })(mb),
    Jm = (function () {
      function e(e) {
        (this.length = e), (this._buf = new ni.Buffer(e));
      }
      return (
        (e.prototype.decode = function (e, t) {
          return new ni.DecodeStream(this._buf.decode(e, t));
        }),
        e
      );
    })(),
    Qm = new ni.Struct({
      version: ni.uint32,
      numGlyphs: ni.uint16,
      indexFormat: ni.uint16,
      nContourStreamSize: ni.uint32,
      nPointsStreamSize: ni.uint32,
      flagStreamSize: ni.uint32,
      glyphStreamSize: ni.uint32,
      compositeStreamSize: ni.uint32,
      bboxStreamSize: ni.uint32,
      instructionStreamSize: ni.uint32,
      nContours: new Jm("nContourStreamSize"),
      nPoints: new Jm("nPointsStreamSize"),
      flags: new Jm("flagStreamSize"),
      glyphs: new Jm("glyphStreamSize"),
      composites: new Jm("compositeStreamSize"),
      bboxes: new Jm("bboxStreamSize"),
      instructions: new Jm("instructionStreamSize"),
    }),
    $m = 253,
    ew = 254,
    tw = 255,
    rw = 253;
  function nw(e) {
    var t = e.readUInt8();
    return t === $m
      ? e.readUInt16BE()
      : t === tw
      ? e.readUInt8() + rw
      : t === ew
      ? e.readUInt8() + 2 * rw
      : t;
  }
  function iw(e, t) {
    return 1 & e ? t : -t;
  }
  function aw(e, t, r) {
    for (var n, i = (n = 0), a = [], o = 0; o < r; o++) {
      var s = 0,
        u = 0,
        l = e.readUInt8(),
        c = !(l >> 7);
      if ((l &= 127) < 10)
        (s = 0), (u = iw(l, ((14 & l) << 7) + t.readUInt8()));
      else if (l < 20)
        (s = iw(l, (((l - 10) & 14) << 7) + t.readUInt8())), (u = 0);
      else if (l < 84) {
        (s = iw(l, 1 + (48 & (f = l - 20)) + ((h = t.readUInt8()) >> 4))),
          (u = iw(l >> 1, 1 + ((12 & f) << 2) + (15 & h)));
      } else if (l < 120) {
        var f;
        (s = iw(l, 1 + (((f = l - 84) / 12) << 8) + t.readUInt8())),
          (u = iw(l >> 1, 1 + ((f % 12 >> 2) << 8) + t.readUInt8()));
      } else if (l < 124) {
        var h = t.readUInt8(),
          d = t.readUInt8();
        (s = iw(l, (h << 4) + (d >> 4))),
          (u = iw(l >> 1, ((15 & d) << 8) + t.readUInt8()));
      } else (s = iw(l, t.readUInt16BE())), (u = iw(l >> 1, t.readUInt16BE()));
      (i += s), (n += u), a.push(new nb(c, !1, i, n));
    }
    return a;
  }
  var ow = new ni.VersionedStruct(ni.uint32, {
      65536: {
        numFonts: ni.uint32,
        offsets: new ni.Array(ni.uint32, "numFonts"),
      },
      131072: {
        numFonts: ni.uint32,
        offsets: new ni.Array(ni.uint32, "numFonts"),
        dsigTag: ni.uint32,
        dsigLength: ni.uint32,
        dsigOffset: ni.uint32,
      },
    }),
    sw = (function () {
      function e(e) {
        if (((this.stream = e), "ttcf" !== e.readString(4)))
          throw new Error("Not a TrueType collection");
        this.header = ow.decode(e);
      }
      return (
        (e.probe = function (e) {
          return "ttcf" === e.toString("ascii", 0, 4);
        }),
        (e.prototype.getFont = function (e) {
          var t = this.header.offsets,
            r = Array.isArray(t),
            n = 0;
          for (t = r ? t : t[Symbol.iterator](); ; ) {
            var i;
            if (r) {
              if (n >= t.length) break;
              i = t[n++];
            } else {
              if ((n = t.next()).done) break;
              i = n.value;
            }
            var a = i,
              o = new ni.DecodeStream(this.stream.buffer);
            o.pos = a;
            var s = new mb(o);
            if (s.postscriptName === e) return s;
          }
          return null;
        }),
        si(e, [
          {
            key: "fonts",
            get: function () {
              var e = [],
                t = this.header.offsets,
                r = Array.isArray(t),
                n = 0;
              for (t = r ? t : t[Symbol.iterator](); ; ) {
                var i;
                if (r) {
                  if (n >= t.length) break;
                  i = t[n++];
                } else {
                  if ((n = t.next()).done) break;
                  i = n.value;
                }
                var a = i,
                  o = new ni.DecodeStream(this.stream.buffer);
                (o.pos = a), e.push(new mb(o));
              }
              return e;
            },
          },
        ]),
        e
      );
    })(),
    uw = new ni.String(ni.uint8),
    lw =
      (new ni.Struct({ len: ni.uint32, buf: new ni.Buffer("len") }),
      new ni.Struct({
        id: ni.uint16,
        nameOffset: ni.int16,
        attr: ni.uint8,
        dataOffset: ni.uint24,
        handle: ni.uint32,
      })),
    cw = new ni.Struct({
      name: new ni.String(4),
      maxTypeIndex: ni.uint16,
      refList: new ni.Pointer(
        ni.uint16,
        new ni.Array(lw, function (e) {
          return e.maxTypeIndex + 1;
        }),
        { type: "parent" }
      ),
    }),
    fw = new ni.Struct({
      length: ni.uint16,
      types: new ni.Array(cw, function (e) {
        return e.length + 1;
      }),
    }),
    hw = new ni.Struct({
      reserved: new ni.Reserved(ni.uint8, 24),
      typeList: new ni.Pointer(ni.uint16, fw),
      nameListOffset: new ni.Pointer(ni.uint16, "void"),
    }),
    dw = new ni.Struct({
      dataOffset: ni.uint32,
      map: new ni.Pointer(ni.uint32, hw),
      dataLength: ni.uint32,
      mapLength: ni.uint32,
    }),
    pw = (function () {
      function e(e) {
        (this.stream = e), (this.header = dw.decode(this.stream));
        var t = this.header.map.typeList.types,
          r = Array.isArray(t),
          n = 0;
        for (t = r ? t : t[Symbol.iterator](); ; ) {
          var i;
          if (r) {
            if (n >= t.length) break;
            i = t[n++];
          } else {
            if ((n = t.next()).done) break;
            i = n.value;
          }
          var a = i,
            o = a.refList,
            s = Array.isArray(o),
            u = 0;
          for (o = s ? o : o[Symbol.iterator](); ; ) {
            var l;
            if (s) {
              if (u >= o.length) break;
              l = o[u++];
            } else {
              if ((u = o.next()).done) break;
              l = u.value;
            }
            var c = l;
            c.nameOffset >= 0
              ? ((this.stream.pos =
                  c.nameOffset + this.header.map.nameListOffset),
                (c.name = uw.decode(this.stream)))
              : (c.name = null);
          }
          "sfnt" === a.name && (this.sfnt = a);
        }
      }
      return (
        (e.probe = function (e) {
          var t = new ni.DecodeStream(e);
          try {
            var r = dw.decode(t);
          } catch (e) {
            return !1;
          }
          var n = r.map.typeList.types,
            i = Array.isArray(n),
            a = 0;
          for (n = i ? n : n[Symbol.iterator](); ; ) {
            var o;
            if (i) {
              if (a >= n.length) break;
              o = n[a++];
            } else {
              if ((a = n.next()).done) break;
              o = a.value;
            }
            if ("sfnt" === o.name) return !0;
          }
          return !1;
        }),
        (e.prototype.getFont = function (e) {
          if (!this.sfnt) return null;
          var t = this.sfnt.refList,
            r = Array.isArray(t),
            n = 0;
          for (t = r ? t : t[Symbol.iterator](); ; ) {
            var i;
            if (r) {
              if (n >= t.length) break;
              i = t[n++];
            } else {
              if ((n = t.next()).done) break;
              i = n.value;
            }
            var a = i,
              o = this.header.dataOffset + a.dataOffset + 4,
              s = new ni.DecodeStream(this.stream.buffer.slice(o)),
              u = new mb(s);
            if (u.postscriptName === e) return u;
          }
          return null;
        }),
        si(e, [
          {
            key: "fonts",
            get: function () {
              var e = [],
                t = this.sfnt.refList,
                r = Array.isArray(t),
                n = 0;
              for (t = r ? t : t[Symbol.iterator](); ; ) {
                var i;
                if (r) {
                  if (n >= t.length) break;
                  i = t[n++];
                } else {
                  if ((n = t.next()).done) break;
                  i = n.value;
                }
                var a = i,
                  o = this.header.dataOffset + a.dataOffset + 4,
                  s = new ni.DecodeStream(this.stream.buffer.slice(o));
                e.push(new mb(s));
              }
              return e;
            },
          },
        ]),
        e
      );
    })();
  return (
    ai.registerFormat(mb),
    ai.registerFormat(Sb),
    ai.registerFormat(Km),
    ai.registerFormat(sw),
    ai.registerFormat(pw),
    ai
  );
});
