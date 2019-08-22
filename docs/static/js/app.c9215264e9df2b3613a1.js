!(function(e) {
  function n(n) {
    for (
      var r, o, i = n[0], d = n[1], s = n[2], c = n[3] || [], a = 0, u = [];
      a < i.length;
      a++
    )
      (o = i[a]), H[o] && u.push(H[o][0]), (H[o] = 0);
    for (r in d) Object.prototype.hasOwnProperty.call(d, r) && (e[r] = d[r]);
    for (
      q && q(n),
        c.forEach(function(e) {
          if (void 0 === H[e]) {
            H[e] = null;
            var n = document.createElement('link');
            (n.crossOrigin = 'anonymous'),
              A.nc && n.setAttribute('nonce', A.nc),
              (n.rel = 'prefetch'),
              (n.as = 'script'),
              (n.href = B(e)),
              document.head.appendChild(n);
          }
        });
      u.length;

    )
      u.shift()();
    return I.push.apply(I, s || []), t();
  }
  function t() {
    for (var e, n = 0; n < I.length; n++) {
      for (var t = I[n], r = !0, o = 1; o < t.length; o++) {
        var i = t[o];
        0 !== H[i] && (r = !1);
      }
      r && (I.splice(n--, 1), (e = A((A.s = t[0]))));
    }
    return e;
  }
  var r = window.webpackHotUpdate;
  window.webpackHotUpdate = function(e, n) {
    !(function(e, n) {
      if (!O[e] || !x[e]) return;
      for (var t in ((x[e] = !1), n))
        Object.prototype.hasOwnProperty.call(n, t) && (m[t] = n[t]);
      0 === --g && 0 === y && D();
    })(e, n),
      r && r(e, n);
  };
  var o,
    i = !0,
    d = 'c9215264e9df2b3613a1',
    s = 1e4,
    c = {},
    a = [],
    u = [];
  function l(e) {
    var n = {
      _acceptedDependencies: {},
      _declinedDependencies: {},
      _selfAccepted: !1,
      _selfDeclined: !1,
      _disposeHandlers: [],
      _main: o !== e,
      active: !0,
      accept: function(e, t) {
        if (void 0 === e) n._selfAccepted = !0;
        else if ('function' === typeof e) n._selfAccepted = e;
        else if ('object' === typeof e)
          for (var r = 0; r < e.length; r++)
            n._acceptedDependencies[e[r]] = t || function() {};
        else n._acceptedDependencies[e] = t || function() {};
      },
      decline: function(e) {
        if (void 0 === e) n._selfDeclined = !0;
        else if ('object' === typeof e)
          for (var t = 0; t < e.length; t++) n._declinedDependencies[e[t]] = !0;
        else n._declinedDependencies[e] = !0;
      },
      dispose: function(e) {
        n._disposeHandlers.push(e);
      },
      addDisposeHandler: function(e) {
        n._disposeHandlers.push(e);
      },
      removeDisposeHandler: function(e) {
        var t = n._disposeHandlers.indexOf(e);
        t >= 0 && n._disposeHandlers.splice(t, 1);
      },
      check: _,
      apply: P,
      status: function(e) {
        if (!e) return f;
        p.push(e);
      },
      addStatusHandler: function(e) {
        p.push(e);
      },
      removeStatusHandler: function(e) {
        var n = p.indexOf(e);
        n >= 0 && p.splice(n, 1);
      },
      data: c[e]
    };
    return (o = void 0), n;
  }
  var p = [],
    f = 'idle';
  function h(e) {
    f = e;
    for (var n = 0; n < p.length; n++) p[n].call(null, e);
  }
  var b,
    m,
    v,
    g = 0,
    y = 0,
    w = {},
    x = {},
    O = {};
  function j(e) {
    return +e + '' === e ? +e : e;
  }
  function _(e) {
    if ('idle' !== f) throw new Error('check() is only allowed in idle status');
    return (
      (i = e),
      h('check'),
      ((n = s),
      (n = n || 1e4),
      new Promise(function(e, t) {
        if ('undefined' === typeof XMLHttpRequest)
          return t(new Error('No browser support'));
        try {
          var r = new XMLHttpRequest(),
            o = A.p + '' + d + '.hot-update.json';
          r.open('GET', o, !0), (r.timeout = n), r.send(null);
        } catch (i) {
          return t(i);
        }
        r.onreadystatechange = function() {
          if (4 === r.readyState)
            if (0 === r.status)
              t(new Error('Manifest request to ' + o + ' timed out.'));
            else if (404 === r.status) e();
            else if (200 !== r.status && 304 !== r.status)
              t(new Error('Manifest request to ' + o + ' failed.'));
            else {
              try {
                var n = JSON.parse(r.responseText);
              } catch (i) {
                return void t(i);
              }
              e(n);
            }
        };
      })).then(function(e) {
        if (!e) return h('idle'), null;
        (x = {}), (w = {}), (O = e.c), (v = e.h), h('prepare');
        var n = new Promise(function(e, n) {
          b = { resolve: e, reject: n };
        });
        for (var t in ((m = {}), H)) E(t);
        return 'prepare' === f && 0 === y && 0 === g && D(), n;
      })
    );
    var n;
  }
  function E(e) {
    O[e]
      ? ((x[e] = !0),
        g++,
        (function(e) {
          var n = document.createElement('script');
          (n.charset = 'utf-8'),
            (n.src = A.p + '' + e + '.' + d + '.hot-update.js'),
            (n.crossOrigin = 'anonymous'),
            document.head.appendChild(n);
        })(e))
      : (w[e] = !0);
  }
  function D() {
    h('ready');
    var e = b;
    if (((b = null), e))
      if (i)
        Promise.resolve()
          .then(function() {
            return P(i);
          })
          .then(
            function(n) {
              e.resolve(n);
            },
            function(n) {
              e.reject(n);
            }
          );
      else {
        var n = [];
        for (var t in m)
          Object.prototype.hasOwnProperty.call(m, t) && n.push(j(t));
        e.resolve(n);
      }
  }
  function P(n) {
    if ('ready' !== f)
      throw new Error('apply() is only allowed in ready status');
    var t, r, o, i, s;
    function u(e) {
      for (
        var n = [e],
          t = {},
          r = n.slice().map(function(e) {
            return { chain: [e], id: e };
          });
        r.length > 0;

      ) {
        var o = r.pop(),
          d = o.id,
          s = o.chain;
        if ((i = k[d]) && !i.hot._selfAccepted) {
          if (i.hot._selfDeclined)
            return { type: 'self-declined', chain: s, moduleId: d };
          if (i.hot._main) return { type: 'unaccepted', chain: s, moduleId: d };
          for (var c = 0; c < i.parents.length; c++) {
            var a = i.parents[c],
              u = k[a];
            if (u) {
              if (u.hot._declinedDependencies[d])
                return {
                  type: 'declined',
                  chain: s.concat([a]),
                  moduleId: d,
                  parentId: a
                };
              -1 === n.indexOf(a) &&
                (u.hot._acceptedDependencies[d]
                  ? (t[a] || (t[a] = []), l(t[a], [d]))
                  : (delete t[a],
                    n.push(a),
                    r.push({ chain: s.concat([a]), id: a })));
            }
          }
        }
      }
      return {
        type: 'accepted',
        moduleId: e,
        outdatedModules: n,
        outdatedDependencies: t
      };
    }
    function l(e, n) {
      for (var t = 0; t < n.length; t++) {
        var r = n[t];
        -1 === e.indexOf(r) && e.push(r);
      }
    }
    n = n || {};
    var p = {},
      b = [],
      g = {},
      y = function() {
        console.warn(
          '[HMR] unexpected require(' + x.moduleId + ') to disposed module'
        );
      };
    for (var w in m)
      if (Object.prototype.hasOwnProperty.call(m, w)) {
        var x;
        s = j(w);
        var _ = !1,
          E = !1,
          D = !1,
          P = '';
        switch (
          ((x = m[w] ? u(s) : { type: 'disposed', moduleId: w }).chain &&
            (P = '\nUpdate propagation: ' + x.chain.join(' -> ')),
          x.type)
        ) {
          case 'self-declined':
            n.onDeclined && n.onDeclined(x),
              n.ignoreDeclined ||
                (_ = new Error(
                  'Aborted because of self decline: ' + x.moduleId + P
                ));
            break;
          case 'declined':
            n.onDeclined && n.onDeclined(x),
              n.ignoreDeclined ||
                (_ = new Error(
                  'Aborted because of declined dependency: ' +
                    x.moduleId +
                    ' in ' +
                    x.parentId +
                    P
                ));
            break;
          case 'unaccepted':
            n.onUnaccepted && n.onUnaccepted(x),
              n.ignoreUnaccepted ||
                (_ = new Error(
                  'Aborted because ' + s + ' is not accepted' + P
                ));
            break;
          case 'accepted':
            n.onAccepted && n.onAccepted(x), (E = !0);
            break;
          case 'disposed':
            n.onDisposed && n.onDisposed(x), (D = !0);
            break;
          default:
            throw new Error('Unexception type ' + x.type);
        }
        if (_) return h('abort'), Promise.reject(_);
        if (E)
          for (s in ((g[s] = m[s]),
          l(b, x.outdatedModules),
          x.outdatedDependencies))
            Object.prototype.hasOwnProperty.call(x.outdatedDependencies, s) &&
              (p[s] || (p[s] = []), l(p[s], x.outdatedDependencies[s]));
        D && (l(b, [x.moduleId]), (g[s] = y));
      }
    var I,
      B = [];
    for (r = 0; r < b.length; r++)
      (s = b[r]),
        k[s] &&
          k[s].hot._selfAccepted &&
          B.push({ module: s, errorHandler: k[s].hot._selfAccepted });
    h('dispose'),
      Object.keys(O).forEach(function(e) {
        !1 === O[e] &&
          (function(e) {
            delete H[e];
          })(e);
      });
    for (var M, S, U = b.slice(); U.length > 0; )
      if (((s = U.pop()), (i = k[s]))) {
        var q = {},
          T = i.hot._disposeHandlers;
        for (o = 0; o < T.length; o++) (t = T[o])(q);
        for (
          c[s] = q, i.hot.active = !1, delete k[s], delete p[s], o = 0;
          o < i.children.length;
          o++
        ) {
          var z = k[i.children[o]];
          z && ((I = z.parents.indexOf(s)) >= 0 && z.parents.splice(I, 1));
        }
      }
    for (s in p)
      if (Object.prototype.hasOwnProperty.call(p, s) && (i = k[s]))
        for (S = p[s], o = 0; o < S.length; o++)
          (M = S[o]),
            (I = i.children.indexOf(M)) >= 0 && i.children.splice(I, 1);
    for (s in (h('apply'), (d = v), g))
      Object.prototype.hasOwnProperty.call(g, s) && (e[s] = g[s]);
    var C = null;
    for (s in p)
      if (Object.prototype.hasOwnProperty.call(p, s) && (i = k[s])) {
        S = p[s];
        var R = [];
        for (r = 0; r < S.length; r++)
          if (((M = S[r]), (t = i.hot._acceptedDependencies[M]))) {
            if (-1 !== R.indexOf(t)) continue;
            R.push(t);
          }
        for (r = 0; r < R.length; r++) {
          t = R[r];
          try {
            t(S);
          } catch (L) {
            n.onErrored &&
              n.onErrored({
                type: 'accept-errored',
                moduleId: s,
                dependencyId: S[r],
                error: L
              }),
              n.ignoreErrored || C || (C = L);
          }
        }
      }
    for (r = 0; r < B.length; r++) {
      var J = B[r];
      (s = J.module), (a = [s]);
      try {
        A(s);
      } catch (L) {
        if ('function' === typeof J.errorHandler)
          try {
            J.errorHandler(L);
          } catch (W) {
            n.onErrored &&
              n.onErrored({
                type: 'self-accept-error-handler-errored',
                moduleId: s,
                error: W,
                originalError: L
              }),
              n.ignoreErrored || C || (C = W),
              C || (C = L);
          }
        else
          n.onErrored &&
            n.onErrored({ type: 'self-accept-errored', moduleId: s, error: L }),
            n.ignoreErrored || C || (C = L);
      }
    }
    return C
      ? (h('fail'), Promise.reject(C))
      : (h('idle'),
        new Promise(function(e) {
          e(b);
        }));
  }
  var k = {},
    H = { 1: 0 },
    I = [];
  function B(e) {
    return (
      A.p +
      'static/js/' +
      ({
        2: 'src-button-button',
        3: 'src-ions-base-base',
        4: 'src-ions-disabled-disabled',
        5: 'src-ions-hovered-hovered'
      }[e] || e) +
      '.' +
      { 2: '8755659d', 3: '612da760', 4: '6402045c', 5: '239bc31f' }[e] +
      '.js'
    );
  }
  function A(n) {
    if (k[n]) return k[n].exports;
    var t = (k[n] = {
      i: n,
      l: !1,
      exports: {},
      hot: l(n),
      parents: ((u = a), (a = []), u),
      children: []
    });
    return (
      e[n].call(
        t.exports,
        t,
        t.exports,
        (function(e) {
          var n = k[e];
          if (!n) return A;
          var t = function(t) {
              return (
                n.hot.active
                  ? (k[t]
                      ? -1 === k[t].parents.indexOf(e) && k[t].parents.push(e)
                      : ((a = [e]), (o = t)),
                    -1 === n.children.indexOf(t) && n.children.push(t))
                  : (console.warn(
                      '[HMR] unexpected require(' +
                        t +
                        ') from disposed module ' +
                        e
                    ),
                    (a = [])),
                A(t)
              );
            },
            r = function(e) {
              return {
                configurable: !0,
                enumerable: !0,
                get: function() {
                  return A[e];
                },
                set: function(n) {
                  A[e] = n;
                }
              };
            };
          for (var i in A)
            Object.prototype.hasOwnProperty.call(A, i) &&
              'e' !== i &&
              't' !== i &&
              Object.defineProperty(t, i, r(i));
          return (
            (t.e = function(e) {
              return (
                'ready' === f && h('prepare'),
                y++,
                A.e(e).then(n, function(e) {
                  throw (n(), e);
                })
              );
              function n() {
                y--,
                  'prepare' === f && (w[e] || E(e), 0 === y && 0 === g && D());
              }
            }),
            (t.t = function(e, n) {
              return 1 & n && (e = t(e)), A.t(e, -2 & n);
            }),
            t
          );
        })(n)
      ),
      (t.l = !0),
      t.exports
    );
  }
  (A.e = function(e) {
    var n = [],
      t = H[e];
    if (0 !== t)
      if (t) n.push(t[2]);
      else {
        var r = new Promise(function(n, r) {
          t = H[e] = [n, r];
        });
        n.push((t[2] = r));
        var o,
          i = document.createElement('script');
        (i.charset = 'utf-8'),
          (i.timeout = 120),
          A.nc && i.setAttribute('nonce', A.nc),
          (i.src = B(e)),
          0 !== i.src.indexOf(window.location.origin + '/') &&
            (i.crossOrigin = 'anonymous'),
          (o = function(n) {
            (i.onerror = i.onload = null), clearTimeout(d);
            var t = H[e];
            if (0 !== t) {
              if (t) {
                var r = n && ('load' === n.type ? 'missing' : n.type),
                  o = n && n.target && n.target.src,
                  s = new Error(
                    'Loading chunk ' + e + ' failed.\n(' + r + ': ' + o + ')'
                  );
                (s.type = r), (s.request = o), t[1](s);
              }
              H[e] = void 0;
            }
          });
        var d = setTimeout(function() {
          o({ type: 'timeout', target: i });
        }, 12e4);
        (i.onerror = i.onload = o), document.head.appendChild(i);
      }
    return Promise.all(n);
  }),
    (A.m = e),
    (A.c = k),
    (A.d = function(e, n, t) {
      A.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (A.r = function(e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (A.t = function(e, n) {
      if ((1 & n && (e = A(e)), 8 & n)) return e;
      if (4 & n && 'object' === typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (A.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
        2 & n && 'string' != typeof e)
      )
        for (var r in e)
          A.d(
            t,
            r,
            function(n) {
              return e[n];
            }.bind(null, r)
          );
      return t;
    }),
    (A.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return A.d(n, 'a', n), n;
    }),
    (A.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (A.p = '/ui-components/'),
    (A.oe = function(e) {
      throw (console.error(e), e);
    }),
    (A.h = function() {
      return d;
    });
  var M = (window.webpackJsonp = window.webpackJsonp || []),
    S = M.push.bind(M);
  (M.push = n), (M = M.slice());
  for (var U = 0; U < M.length; U++) n(M[U]);
  var q = S;
  n([[], {}, 0, [0, 2, 3, 4, 5]]), I.push([0, 0]), t();
})({
  './.docz/app/db.json': function(e) {
    e.exports = {
      config: {
        title: 'UI Components',
        description: 'This is Dashlane UI components lib documentation',
        menu: [],
        version: '0.0.1',
        repository: null,
        native: !1,
        codeSandbox: !1,
        themeConfig: {},
        separator: '-',
        typescript: !0,
        dest: 'docs',
        hashRouter: !0,
        base: '/ui-components/'
      },
      props: [],
      entries: [
        {
          key: 'src/button/button.mdx',
          value: {
            name: 'Button',
            route: '/ui-components/',
            id: '8b9658365601a4e7461418a88980bf0f',
            filepath: 'src/button/button.mdx',
            link: '',
            slug: 'src-button-button',
            menu: '',
            headings: [
              { slug: 'button', depth: 1, value: 'Button' },
              {
                slug: 'basic-usage-default-settings',
                depth: 2,
                value: 'Basic usage  default settings'
              },
              {
                slug: 'with-a-custom-title',
                depth: 2,
                value: 'With a custom title'
              },
              {
                slug: 'with-a-primary-setting',
                depth: 2,
                value: 'With a primary setting'
              }
            ]
          }
        },
        {
          key: 'src/ions/base/base.mdx',
          value: {
            name: 'BasicButton',
            route: '/ui-components/',
            id: '802fc2004e00f71280e0d04efc7e5095',
            filepath: 'src/ions/base/base.mdx',
            link: '',
            slug: 'src-ions-base-base',
            menu: '',
            headings: [
              { slug: 'basebutton', depth: 1, value: 'BaseButton' },
              {
                slug: 'basic-usage-default-settings',
                depth: 2,
                value: 'Basic usage  default settings'
              },
              {
                slug: 'with-a-custom-background',
                depth: 2,
                value: 'With a custom background'
              }
            ]
          }
        },
        {
          key: 'src/ions/disabled/disabled.mdx',
          value: {
            name: 'DisabledButton',
            route: '/ui-components/disabled',
            id: 'cc4d84d00704bc23e43a4b4f8d755fa9',
            filepath: 'src/ions/disabled/disabled.mdx',
            link: '',
            slug: 'src-ions-disabled-disabled',
            menu: '',
            headings: [
              { slug: 'basicbutton', depth: 1, value: 'BasicButton' },
              { slug: 'basic-usage', depth: 2, value: 'Basic usage' }
            ]
          }
        },
        {
          key: 'src/ions/hovered/hovered.mdx',
          value: {
            name: 'HoveredButton',
            route: '/ui-components/hovered',
            id: 'bbfcdd57d9af15208cedecb6c5d9c2cd',
            filepath: 'src/ions/hovered/hovered.mdx',
            link: '',
            slug: 'src-ions-hovered-hovered',
            menu: '',
            headings: [
              { slug: 'hoveredbutton', depth: 1, value: 'HoveredButton' },
              { slug: 'basic-usage', depth: 2, value: 'Basic usage' }
            ]
          }
        }
      ]
    };
  },
  './.docz/app/index.jsx': function(e, n, t) {
    'use strict';
    t.r(n);
    var r = t('./node_modules/react/index.js'),
      o = t.n(r),
      i = t('./node_modules/react-dom/index.js'),
      d = t.n(i),
      s = t('./node_modules/docz/dist/index.esm.js'),
      c = t('./node_modules/docz-theme-default/dist/index.esm.js'),
      a = {
        'src/button/button.mdx': function() {
          return Promise.all([t.e(0), t.e(2)]).then(
            t.bind(null, './src/button/button.mdx')
          );
        },
        'src/ions/base/base.mdx': function() {
          return Promise.all([t.e(0), t.e(3)]).then(
            t.bind(null, './src/ions/base/base.mdx')
          );
        },
        'src/ions/disabled/disabled.mdx': function() {
          return Promise.all([t.e(0), t.e(4)]).then(
            t.bind(null, './src/ions/disabled/disabled.mdx')
          );
        },
        'src/ions/hovered/hovered.mdx': function() {
          return Promise.all([t.e(0), t.e(5)]).then(
            t.bind(null, './src/ions/hovered/hovered.mdx')
          );
        }
      },
      u = t('./.docz/app/db.json'),
      l = function() {
        return o.a.createElement(
          c.a,
          { linkComponent: s.b, db: u },
          o.a.createElement(s.e, { imports: a })
        );
      },
      p = [],
      f = [],
      h = function() {
        return p.forEach(function(e) {
          return e && e();
        });
      },
      b = function() {
        return f.forEach(function(e) {
          return e && e();
        });
      },
      m = document.querySelector('#root');
    !(function() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
      h(), d.a.render(o.a.createElement(e, null), m, b);
    })(l);
  },
  0: function(e, n, t) {
    e.exports = t('./.docz/app/index.jsx');
  }
});
//# sourceMappingURL=app.c9215264e9df2b3613a1.js.map
