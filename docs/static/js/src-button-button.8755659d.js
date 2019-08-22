(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    './src/button/button.mdx': function(e, t, n) {
      'use strict';
      n.r(t);
      var o = n(
          './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        i = n('./node_modules/react/index.js'),
        r = n('./node_modules/@mdx-js/react/dist/index.es.js'),
        s = n('./node_modules/docz/dist/index.esm.js'),
        u = n(
          './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        c = n(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        );
      function p() {
        var e = Object(u.a)([
          '\n  color: white;\n  background-color: ',
          ';\n  padding: 5px;\n  border-radius: 5px;\n  cursor: pointer;\n'
        ]);
        return (
          (p = function() {
            return e;
          }),
          e
        );
      }
      'undefined' !== typeof Props &&
        Props &&
        Props === Object(Props) &&
        Object.isExtensible(Props) &&
        Object.defineProperty(Props, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Props', filename: 'src/button/index.tsx' }
        });
      var a = c.d.button(p(), function(e) {
        return e.primary ? 'pink' : 'purple';
      });
      'undefined' !== typeof a &&
        a &&
        a === Object(a) &&
        Object.isExtensible(a) &&
        Object.defineProperty(a, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'BasicButton', filename: 'src/button/index.tsx' }
        });
      var d = function(e) {
          var t = e.title,
            n = void 0 === t ? 'Nothing will happen!' : t,
            o = e.primary,
            r = void 0 !== o && o;
          return i.createElement(a, { primary: r }, n);
        },
        b = d;
      d &&
        d === Object(d) &&
        Object.isExtensible(d) &&
        Object.defineProperty(d, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Button', filename: 'src/button/index.tsx' }
        }),
        n.d(t, 'default', function() {
          return j;
        });
      var l = {},
        m = 'wrapper';
      function j(e) {
        var t = e.components,
          n = Object(o.a)(e, ['components']);
        return Object(r.b)(
          m,
          Object.assign({}, l, n, { components: t, mdxType: 'MDXLayout' }),
          Object(r.b)('h1', { id: 'button' }, 'Button'),
          Object(r.b)('p', null, 'A simple demonstration button'),
          Object(r.b)(s.d, { of: b, mdxType: 'Props' }),
          Object(r.b)(
            'h2',
            { id: 'basic-usage-default-settings' },
            'Basic usage ',
            '[default settings]'
          ),
          Object(r.b)(
            s.c,
            {
              __position: 1,
              __code: '<Button />',
              __scope: {
                props: this ? this.props : n,
                Playground: s.c,
                Props: s.d,
                Button: b
              },
              mdxType: 'Playground'
            },
            Object(r.b)(b, { mdxType: 'Button' })
          ),
          Object(r.b)(
            'h2',
            { id: 'with-a-custom-title' },
            'With a custom title'
          ),
          Object(r.b)(
            s.c,
            {
              __position: 2,
              __code: "<Button title={'My custom title'}></Button>",
              __scope: {
                props: this ? this.props : n,
                Playground: s.c,
                Props: s.d,
                Button: b
              },
              mdxType: 'Playground'
            },
            Object(r.b)(b, { title: 'My custom title', mdxType: 'Button' })
          ),
          Object(r.b)(
            'h2',
            { id: 'with-a-primary-setting' },
            'With a primary setting'
          ),
          Object(r.b)(
            s.c,
            {
              __position: 3,
              __code:
                "<Button primary={true} title={'I am pink now!'}></Button>",
              __scope: {
                props: this ? this.props : n,
                Playground: s.c,
                Props: s.d,
                Button: b
              },
              mdxType: 'Playground'
            },
            Object(r.b)(b, {
              primary: !0,
              title: 'I am pink now!',
              mdxType: 'Button'
            })
          )
        );
      }
      j &&
        j === Object(j) &&
        Object.isExtensible(j) &&
        Object.defineProperty(j, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'MDXContent', filename: 'src/button/button.mdx' }
        }),
        (j.isMDXComponent = !0);
    }
  }
]);
//# sourceMappingURL=src-button-button.c9215264e9df2b3613a1.js.map
