(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/atoms/svg/base/SvgIcon.mdx":function(e,n,o){"use strict";o.r(n),o.d(n,"default",function(){return p});var t=o("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),c=o("./node_modules/react/index.js"),s=o.n(c),r=o("./node_modules/@mdx-js/react/dist/index.es.js"),a=o("./node_modules/docz/dist/index.esm.js"),i=o("./src/atoms/svg/base/SvgIcon.tsx"),l={},d="wrapper";function p(e){var n=e.components,o=Object(t.a)(e,["components"]);return Object(r.b)(d,Object.assign({},l,o,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"svgicon"},"SvgIcon"),Object(r.b)("p",null,"Basic svg component that displays an icon based on its content (paths). You can use this component in order to display icons that are not available in UI-components icons set and that are specific to your project."),Object(r.b)("p",null,"\u26a0\ufe0f Consider wrapping your path(s) in a ",Object(r.b)("inlineCode",{parentName:"p"},"<React.Fragment>")," element."),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)(a.d,{of:i.a,mdxType:"Props"}),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("h3",{id:"basic-usage"},"Basic usage"),Object(r.b)(a.c,{__position:1,__code:'<SvgIcon viewBox="0 0 24 24">\n  <React.Fragment>\n    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24.21-.34.1-.79-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72z" />\n  </React.Fragment>\n</SvgIcon>',__scope:{props:this?this.props:o,Playground:a.c,Props:a.d,SvgIcon:i.a},style:{display:"flex",justifyContent:"center"},mdxType:"Playground"},Object(r.b)(i.a,{viewBox:"0 0 24 24",mdxType:"SvgIcon"},Object(r.b)(s.a.Fragment,null,Object(r.b)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24.21-.34.1-.79-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72z"})))),Object(r.b)("h3",{id:"we-can-customize-the-svgicon-by-specifying-a-color-andor-a-size"},"We can customize the svgIcon by specifying a color and/or a size"),Object(r.b)(a.c,{__position:2,__code:'<SvgIcon\n  hoverColor="hotpink"\n  activeColor="mediumvioletred"\n  size={30}\n  viewBox="0 0 24 24"\n>\n  <React.Fragment>\n    <path\n      fillOpacity=".3"\n      d="M23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l10.08 12.56c.8 1 2.32 1 3.12 0L23.64 7z"\n    ></path>\n    <path d="M3.53 10.94l6.91 8.61c.8 1 2.32 1 3.12 0l6.91-8.61c-.43-.33-3.66-2.95-8.47-2.95s-8.04 2.62-8.47 2.95z"></path>\n  </React.Fragment>\n</SvgIcon>\n<SvgIcon\n  color="cadetblue"\n  activeColor="red"\n  hoverColor="darkgoldenrod"\n  size={30}\n  viewBox="0 0 24 24"\n>\n  <React.Fragment>\n    <path d="M21 11h-3.17l2.54-2.54c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0L15 11h-2V9l3.95-3.95c.39-.39.39-1.03 0-1.42a.9959.9959 0 00-1.41 0L13 6.17V3c0-.55-.45-1-1-1s-1 .45-1 1v3.17L8.46 3.63a.9959.9959 0 00-1.41 0c-.39.39-.39 1.03 0 1.42L11 9v2H9L5.05 7.05c-.39-.39-1.03-.39-1.42 0-.39.39-.39 1.02 0 1.41L6.17 11H3c-.55 0-1 .45-1 1s.45 1 1 1h3.17l-2.54 2.54c-.39.39-.39 1.02 0 1.41.39.39 1.03.39 1.42 0L9 13h2v2l-3.95 3.95c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0L11 17.83V21c0 .55.45 1 1 1s1-.45 1-1v-3.17l2.54 2.54c.39.39 1.02.39 1.41 0 .39-.39.39-1.03 0-1.42L13 15v-2h2l3.95 3.95c.39.39 1.03.39 1.42 0 .39-.39.39-1.02 0-1.41L17.83 13H21c.55 0 1-.45 1-1s-.45-1-1-1z" />\n  </React.Fragment>\n</SvgIcon>',__scope:{props:this?this.props:o,Playground:a.c,Props:a.d,SvgIcon:i.a},style:{display:"flex",flexDirection:"row",justifyContent:"space-around"},mdxType:"Playground"},Object(r.b)(i.a,{hoverColor:"hotpink",activeColor:"mediumvioletred",size:30,viewBox:"0 0 24 24",mdxType:"SvgIcon"},Object(r.b)(s.a.Fragment,null,Object(r.b)("path",{fillOpacity:".3",d:"M23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l10.08 12.56c.8 1 2.32 1 3.12 0L23.64 7z"}),Object(r.b)("path",{d:"M3.53 10.94l6.91 8.61c.8 1 2.32 1 3.12 0l6.91-8.61c-.43-.33-3.66-2.95-8.47-2.95s-8.04 2.62-8.47 2.95z"}))),Object(r.b)(i.a,{color:"cadetblue",activeColor:"red",hoverColor:"darkgoldenrod",size:30,viewBox:"0 0 24 24",mdxType:"SvgIcon"},Object(r.b)(s.a.Fragment,null,Object(r.b)("path",{d:"M21 11h-3.17l2.54-2.54c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0L15 11h-2V9l3.95-3.95c.39-.39.39-1.03 0-1.42a.9959.9959 0 00-1.41 0L13 6.17V3c0-.55-.45-1-1-1s-1 .45-1 1v3.17L8.46 3.63a.9959.9959 0 00-1.41 0c-.39.39-.39 1.03 0 1.42L11 9v2H9L5.05 7.05c-.39-.39-1.03-.39-1.42 0-.39.39-.39 1.02 0 1.41L6.17 11H3c-.55 0-1 .45-1 1s.45 1 1 1h3.17l-2.54 2.54c-.39.39-.39 1.02 0 1.41.39.39 1.03.39 1.42 0L9 13h2v2l-3.95 3.95c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0L11 17.83V21c0 .55.45 1 1 1s1-.45 1-1v-3.17l2.54 2.54c.39.39 1.02.39 1.41 0 .39-.39.39-1.03 0-1.42L13 15v-2h2l3.95 3.95c.39.39 1.03.39 1.42 0 .39-.39.39-1.02 0-1.41L17.83 13H21c.55 0 1-.45 1-1s-.45-1-1-1z"})))),Object(r.b)("h3",{id:"the-svgicon-can-be-disabled-in-case-of-we-dont-want-to-allow-actions-on-it"},"The SvgIcon can be disabled in case of we don't want to allow actions on it"),Object(r.b)(a.c,{__position:3,__code:'<SvgIcon size={30} color="darkblue" viewBox="0 0 24 24" disabled>\n  <React.Fragment>\n    <path d="M21 14.58c0-.36-.19-.69-.49-.89L13 9V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-7.51 4.69c-.3.19-.49.53-.49.89 0 .7.68 1.21 1.36 1L10 13.5V19l-1.8 1.35c-.13.09-.2.24-.2.4v.59c0 .33.32.57.64.48L11.5 21l2.86.82c.32.09.64-.15.64-.48v-.59c0-.16-.07-.31-.2-.4L13 19v-5.5l6.64 2.08c.68.21 1.36-.3 1.36-1z" />\n  </React.Fragment>\n</SvgIcon>',__scope:{props:this?this.props:o,Playground:a.c,Props:a.d,SvgIcon:i.a},style:{display:"flex",justifyContent:"center"},mdxType:"Playground"},Object(r.b)(i.a,{size:30,color:"darkblue",viewBox:"0 0 24 24",disabled:!0,mdxType:"SvgIcon"},Object(r.b)(s.a.Fragment,null,Object(r.b)("path",{d:"M21 14.58c0-.36-.19-.69-.49-.89L13 9V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-7.51 4.69c-.3.19-.49.53-.49.89 0 .7.68 1.21 1.36 1L10 13.5V19l-1.8 1.35c-.13.09-.2.24-.2.4v.59c0 .33.32.57.64.48L11.5 21l2.86.82c.32.09.64-.15.64-.48v-.59c0-.16-.07-.31-.2-.4L13 19v-5.5l6.64 2.08c.68.21 1.36-.3 1.36-1z"})))))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/atoms/svg/base/SvgIcon.mdx"}}),p.isMDXComponent=!0},"./src/atoms/svg/base/SvgIcon.tsx":function(e,n,o){"use strict";var t=o("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),c=o("./node_modules/react/index.js"),s=o("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),r=o("./node_modules/styled-components/dist/styled-components.browser.esm.js");function a(){var e=Object(s.a)(["\n  display: flex;\n  width: ",";\n  height: ",";\n  cursor: ",";\n  outline: none;\n  border-radius: 4px;\n  fill: ",";\n  opacity: ",";\n  transition: ",";\n  &:hover {\n    fill: ",";\n  }\n  &:active {\n    fill: ",";\n  }\n"]);return a=function(){return e},e}"undefined"!==typeof ColorProps&&ColorProps&&ColorProps===Object(ColorProps)&&Object.isExtensible(ColorProps)&&Object.defineProperty(ColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColorProps",filename:"src/ions/icon/Icon.tsx"}});var i=function(e){var n=e.size;return"".concat(void 0===n?20:n,"px")},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"color";return function(n){return n.animated?"none":n[e]||n.color||"inherit"}},d=r.d.svg.attrs(function(e){return{viewBox:e.viewBox||"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}})(a(),i,i,function(e){return e.disabled?"not-allowed":"pointer"},l(),function(e){return e.disabled?.5:1},function(e){return e.animated?"none":"all 0.1s ease-in"},l("hoverColor"),l("activeColor")),p=d;"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/ions/icon/Icon.tsx"}}),"undefined"!==typeof Props&&Props&&Props===Object(Props)&&Object.isExtensible(Props)&&Object.defineProperty(Props,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Props",filename:"src/atoms/svg/base/SvgIcon.tsx"}}),"undefined"!==typeof IconProps&&IconProps&&IconProps===Object(IconProps)&&Object.isExtensible(IconProps)&&Object.defineProperty(IconProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IconProps",filename:"src/atoms/svg/base/SvgIcon.tsx"}});var b=function(e){var n=e.title,o=e.children,s=Object(t.a)(e,["title","children"]),r=!(!o.props||!o.props.children)&&function(e){return!!Array.from(e).find(function(e){return"animateTransform"===e.type})}(o.props.children);return c.createElement(p,Object.assign({animated:r},s),n?c.createElement("title",null,n):null,o)};n.a=b;b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SvgIcon",filename:"src/atoms/svg/base/SvgIcon.tsx"}})}}]);
//# sourceMappingURL=src-atoms-svg-base-svg-icon.53a656949aae2be8d31d.js.map