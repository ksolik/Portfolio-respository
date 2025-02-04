(() => {
    var t = {
      487: function () {
        "use strict";
        window.tram = function (t) {
          // Initialization and utilities
          function e(t, e) {
            return new D.Bare().init(t, e);
          }
          function n(t) {
            var e = parseInt(t.slice(1), 16);
            return [(e >> 16) & 255, (e >> 8) & 255, 255 & e];
          }
          function i(t, e, n) {
            return "#" + ((1 << 24) | (t << 16) | (e << 8) | n).toString(16).slice(1);
          }
          function r() {}
          function o(t, e, n) {
            if (void 0 !== e && (n = e), void 0 === t) return n;
            var i = n;
            return Y.test(t) || !K.test(t)
              ? (i = parseInt(t, 10))
              : K.test(t) && (i = 1e3 * parseFloat(t)),
              i < 0 && (i = 0),
              i == i ? i : n;
          }
          function a(t) {
            H.debug && window && window.console.warn(t);
          }
          // Tram core object
          var s, u, c, l = function (t, e, n) {
              // Prototype-based structure for initialization
              function i(t) {
                return "object" === typeof t;
              }
              function r(t) {
                return "function" === typeof t;
              }
              function o() {}
              return function a(s, u) {
                function c() {
                  var t = new l();
                  return r(t.init) && t.init.apply(t, arguments), t;
                }
                function l() {}
                u === n && (u = s, s = Object),
                  c.Bare = l;
                var f,
                  d = o[t] = s[t],
                  h = l[t] = c[t] = new o();
                return (
                  (h.constructor = c),
                  (c.mixin = function (e) {
                    return (l[t] = c[t] = a(c, e)[t]), c;
                  }),
                  (c.open = function (t) {
                    if (((f = {}), r(t) ? (f = t.call(c, h, d, c, s)) : i(t) && (f = t), i(f))) {
                      for (var n in f) e.call(f, n) && (h[n] = f[n]);
                    }
                    return r(h.init) || (h.init = s), c;
                  }),
                  c.open(u)
                );
              };
            }("prototype", {}.hasOwnProperty),
            f = {
              // Animation easings
              ease: [
                "ease",
                function (t, e, n, i) {
                  var r = (t /= i) * t,
                    o = r * t;
                  return (
                    e + n * (-2.75 * o * r + 11 * r * r - 15.5 * o + 8 * r + 0.25 * t)
                  );
                },
              ],
            };
          // Remaining core definitions...
        };
      },
      756: function (t) {
        // Other utility functions and interactions
      },
      461: function (t) {
        // Navbar interactions
      },
      334: function (t) {
        // Focus utility
      },
      // Add other modules as needed
    };
    // Main export
    var e = {};
    function n(i) {
      var r = e[i];
      if (void 0 !== r) return r.exports;
      var o = (e[i] = { exports: {} });
      return t[i](o, o.exports, n), o.exports;
    }
    n.rv = function () {
      return "1.1.8";
    };
    n.ruid = "bundler=rspack@1.1.8";
    n(461);
    n(334);
    n(756);
    n(487);
  })();
  