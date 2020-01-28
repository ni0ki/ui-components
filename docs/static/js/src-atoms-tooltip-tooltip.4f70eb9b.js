(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/atoms/tooltip/Tooltip.mdx":function(e,t,n){"use strict";n.r(t);var i=n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),o=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/react/index.js"),a=n("./node_modules/@mdx-js/react/dist/index.es.js"),l=n("./node_modules/docz/dist/index.esm.js"),s=n("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),c=n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),u=n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),m=n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),b=n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),p=n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),f=n("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),d=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),h=n("./src/ions/text/StyledText.tsx"),j=n("./src/colors/colors.ts"),O=n("./src/utility/helpers.ts");"10"===Object("10")&&Object.isExtensible("10")&&Object.defineProperty("10","__filemeta",{enumerable:!0,configurable:!0,value:{name:"tooltipMargin",filename:"src/atoms/tooltip/helpers.ts"}});var g="\n  margin-bottom: 0;\n  bottom: auto;\n  transform: translate(0, -50%);\n  left: 100%;\n  top: 50%;\n  margin-left: ".concat("10","px;\n"),v="\n  margin-bottom: 0;\n  bottom: auto;\n  transform: translate(0, -50%);\n  left: auto;\n  right: 100%;\n  top: 50%;\n  margin-right: ".concat("10","px;\n"),y="\n  margin-bottom: 0;\n  bottom: auto;\n  left: 50%;\n  top: 100%;\n  margin-top: ".concat("10","px;\n"),x=function(e){var t=e.placement;switch(t){case"top":return"\n  margin-bottom: 10px;\n  bottom: 100%;\n  left: 50%;\n";case"right":return g;case"left":return v;case"bottom":return y;default:return Object(O.a)(t)}};x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"handleTooltipPosition",filename:"src/atoms/tooltip/helpers.ts"}});var E=function(e){var t=e.placement;switch(t){case"top":return"\n  margin-bottom: 5px;\n  bottom: 100%;\n  transform: translate(-50%, 0);\n  left: 50%;\n";case"right":return"\n  margin-bottom: 0;\n  bottom: auto;\n  transform: rotate(90deg) translate(0, -50%);\n  left: 100%;\n  top: 50%;\n  margin-left: -2px;\n  margin-top: -4px;\n";case"left":return"\n  margin-bottom: 0;\n  bottom: auto;\n  transform: rotate(-90deg) translate(0, -50%);\n  left: auto;\n  right: 100%;\n  top: 50%;\n  margin-right: -2px;\n  margin-top: -4px;\n";case"bottom":return"\n  margin-bottom: 0;\n  bottom: auto;\n  transform: rotate(180deg) translate(-50%, 0);\n  top: 100%;\n  left: unset;\n  right: 50%\n  margin-top: 5px;\n";default:return Object(O.a)(t)}};E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"handleTooltipArrowPosition",filename:"src/atoms/tooltip/helpers.ts"}});var _=function(e){switch(e){case"info":return j.b;case"success":return j.n;case"error":return j.i;default:return Object(O.a)(e)}};_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTooltipBgColorByType",filename:"src/atoms/tooltip/helpers.ts"}});var P=function(e){return isNaN(e)?0:e},w=function(e,t,n){var i=parseInt(e.paddingLeft||"0",10)+parseInt(e.paddingRight||"0",10)+parseInt("10",10)+parseInt(n||e.width||"0",10);return P(i)};w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"computeTooltipWidth",filename:"src/atoms/tooltip/helpers.ts"}});var F=function(e,t,n){var i=parseInt(e.paddingTop||"0",10)+parseInt(e.paddingBottom||"0",10)+parseInt("10",10)+parseInt(n||e.height||"0",10);return P(i)};F&&F===Object(F)&&Object.isExtensible(F)&&Object.defineProperty(F,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"computeTooltipHeight",filename:"src/atoms/tooltip/helpers.ts"}});var T=function(e){return/\d/.test(e)},D=function(e,t){return-1!==e.indexOf(t)},C=function(e){var t=e.height,n=e.width;return!(!t||!n)&&(T(t)||T(n)||!D(t,"%")||!D(n,"%"))};C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"checkIsStyleComputed",filename:"src/atoms/tooltip/helpers.ts"}});var q=function(e){return window.getComputedStyle(e,":before")};q&&q===Object(q)&&Object.isExtensible(q)&&Object.defineProperty(q,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getCSSComputedStyle",filename:"src/atoms/tooltip/helpers.ts"}});var k=function(e){return e?e.getBoundingClientRect():{top:0,left:0,right:0,bottom:0,width:0,height:0}};"undefined"!==typeof k&&k&&k===Object(k)&&Object.isExtensible(k)&&Object.defineProperty(k,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getBoundingRect",filename:"src/atoms/tooltip/helpers.ts"}});var A=function(e,t){var n=document.createElement("div");Object.values(e).forEach(function(t){t&&"length"!==t&&"parentRule"!==t&&!T(t.toString())&&(n.style[t]=e[t])}),t.appendChild(n);var i=n.getBoundingClientRect(),o=i.height,r=i.width;return n.remove(),{height:o.toString(),width:r.toString()}};A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getAlternativeStyle",filename:"src/atoms/tooltip/helpers.ts"}});var B=function(e){var t=e.rect,n=e.measurements,i=e.container,o=e.placement,r=n.totalWidth,a=n.totalHeight,l=function(e){if(e===window)return{maxHeight:window.innerHeight,minHeight:0,maxWidth:window.innerWidth,minWidth:0};var t=k(e);return{maxHeight:t.top+t.height,minHeight:t.top,minWidth:t.left,maxWidth:t.left+t.width}}(i),s=l.maxHeight,c=l.minHeight,u=l.maxWidth,m=l.minWidth;switch(o){case"top":return t.top-a<c||t.left+t.width/2+r/2>u||t.left+t.width/2-r/2<m;case"bottom":return t.top+t.height+a>s||t.left+t.width/2+r/2>u||t.left+t.width/2-r/2<m;case"right":return t.left+t.width+r>u||t.top+t.height/2-a/2<c||t.top+t.height/2+a/2>s;case"left":return t.left-r<m||t.top+t.height/2-a/2<c||t.top+t.height/2+a/2>s;default:return Object(O.a)(o),!0}};B&&B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isElementOutOfContainer",filename:"src/atoms/tooltip/helpers.ts"}});var S=function(e,t){return e.filter(function(e){return e!==t})};function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function W(){var e=Object(f.a)(["\n  > :first-child:hover {\n    position: relative;\n  }\n\n  > :first-child::before {\n    ","\n    visibility: hidden;\n    opacity: 0;\n    font-size: 0.75rem;\n    line-height: 1.25;\n    display: inline-block;\n    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);\n    border-radius: 4px;\n    padding: 8px;\n    background-color: ",";\n    content: attr(data-tooltip);\n    color: ",";\n    position: absolute;\n    max-width: ",";\n    width: max-content;\n    @supports (-ms-ime-align: auto) {\n      min-width: 50px;\n    }\n    word-wrap: break-word;\n    transform: translate(-50%, 0);\n    text-align: center;\n    z-index: 1001;\n    transition: opacity 0.1s ease-in-out;\n    ","\n  }\n\n  > :first-child:hover::before {\n    visibility: visible;\n    opacity: 1;\n  }\n\n  > :first-child::after {\n    display: inline-block;\n    visibility: hidden;\n    opacity: 0;\n    width: 0;\n    height: 0;\n    border-left: 7px solid transparent;\n    border-right: 7px solid transparent;\n    border-top: 7px solid\n      ",";\n    position: absolute;\n    content: '';\n    z-index: 1002;\n    transition: opacity 0.1s ease-in-out;\n    ","\n  }\n\n  > :first-child:hover::after {\n    visibility: visible;\n    opacity: 1;\n  }\n"]);return W=function(){return e},e}S&&S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"removeOutOfScreenPlacement",filename:"src/atoms/tooltip/helpers.ts"}}),"undefined"!==typeof Props&&Props&&Props===Object(Props)&&Object.isExtensible(Props)&&Object.defineProperty(Props,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Props",filename:"src/atoms/tooltip/Tooltip.tsx"}}),"undefined"!==typeof WrapperProps&&WrapperProps&&WrapperProps===Object(WrapperProps)&&Object.isExtensible(WrapperProps)&&Object.defineProperty(WrapperProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"WrapperProps",filename:"src/atoms/tooltip/Tooltip.tsx"}});var I=d.d.span(W(),h.b,function(e){var t=e.type;return _(t)},j.o,function(e){var t=e.options;return t.tooltipMaxWidth?"".concat(t.tooltipMaxWidth,"px"):"300px"},x,function(e){var t=e.type;return _(t)},E),G=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(b.a)(t).call(this,e))).ref=void 0,n.coordinates=void 0,n.tooltipPossiblePlacements=[],n.defaultPlacement=void 0,n.onHover=function(e){var t=e.currentTarget,o=n.coordinates,r=o.top,a=o.left,l=k(t),s=l.top,c=l.left;s===r&&c===a||(n.coordinates=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n.coordinates,{},{top:s,left:c}),n.ref=t,n.positionTooltip())},n.cloneChildren=function(e){return function(t){if(r.isValidElement(t))return r.cloneElement(t,{"data-tooltip":e,onMouseEnter:n.onHover})}},n.defaultPlacement="top",n.ref=null,n.state={placement:e.placement||n.defaultPlacement},n.tooltipPossiblePlacements=["top","left","right","bottom"],n.coordinates={top:null,left:null},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e,t){t.placement===this.state.placement&&this.ref&&this.positionTooltip()}},{key:"getTooltipPlacement",value:function(e,t){if(!e)throw new Error("Tooltip cannot be displayed in the container Element/Window due to its incompatible size. Please consider reducing it or better position tooltiped element in the screen.");if(!this.isOutScreen(e))return e;var n=S(t,e),i=Object(s.a)(n,1)[0];return this.getTooltipPlacement(i,n)}},{key:"isOutScreen",value:function(e){var t=q(this.ref),n=C(t)?{}:A(t,this.ref),i=n.width,o=void 0===i?null:i,r=n.height,a=void 0===r?null:r,l=w(t,0,o),s=F(t,0,a),c=k(this.ref),u=this.props.options,m=u&&u.container?u.container:window;return B({rect:c,measurements:{totalWidth:l,totalHeight:s},container:m,placement:e})}},{key:"positionTooltip",value:function(){try{var e=this.getTooltipPlacement(this.props.placement||this.defaultPlacement,this.tooltipPossiblePlacements);this.setState({placement:e})}catch(t){console.error(t)}}},{key:"render",value:function(){var e=this.props,t=e.title,n=void 0===t?"Default":t,i=e.type,o=void 0===i?"info":i,a=e.children,l=e.options,s=void 0===l?{}:l,c=r.Children.map(a,this.cloneChildren(n));return r.createElement(I,{type:o,placement:this.state.placement,options:s},c)}}]),t}(r.PureComponent),H=G;"undefined"!==typeof G&&G&&G===Object(G)&&Object.isExtensible(G)&&Object.defineProperty(G,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Tooltip",filename:"src/atoms/tooltip/Tooltip.tsx"}});var R=n("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),z=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(b.a)(t).call(this,e))).clickCb=function(){1===n.props.item&&(n.setState({itemOneClicked:!0}),setTimeout(function(){return n.setState({itemOneClicked:!1})},500))},n.getTitle=function(){var e=n.props.item;return 1!=e||n.state.itemOneClicked?1==e&&n.state.itemOneClicked?"This is a custom title for item 1 after click appended with an extra long text to test the placement auto change behaviour":"Tooltip for item ".concat(e," on hover."):"Item 1"},n.state={itemOneClicked:!1},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.item,n=e.innerRef;return r.createElement(r.Fragment,null,r.createElement("li",{style:{border:"solid 1px lightgray",padding:" 0 4px",borderRadius:"4px",display:"flex",justifyContent:"space-around"}},r.createElement("span",null,"Item ",t),r.createElement(H,{placement:1===t?"left":"bottom",type:1===t&&this.state.itemOneClicked?"success":"info",options:{tooltipMaxWidth:150,container:n?n.current:null},title:this.getTitle()},r.createElement("button",{style:{marginRight:"20px"},onClick:this.clickCb},"Hover me"))),r.createElement("hr",null))}}]),t}(r.Component),M=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(b.a)(t).call(this,e))).ref=void 0,n.ref=r.createRef(),n.state={ref:n.ref},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({ref:this.ref})}},{key:"render",value:function(){var e=this;return r.createElement("ul",{ref:this.ref,style:{height:"200px",width:"40%",padding:0,overflow:"hidden",overflowY:"scroll"}},Object(R.a)(Array(13)).map(function(t,n){return r.createElement(z,{innerRef:e.state.ref,key:n,item:n})}))}}]),t}(r.Component),U=M;"undefined"!==typeof M&&M&&M===Object(M)&&Object.isExtensible(M)&&Object.defineProperty(M,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TooltipDemo",filename:"src/atoms/tooltip/TooltipDemo.tsx"}}),n.d(t,"default",function(){return X});var L={},Y="wrapper";function X(e){var t,n,r,s=e.components,c=Object(o.a)(e,["components"]);return Object(a.b)(Y,Object.assign({},L,c,{components:s,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"tooltip"},"Tooltip"),Object(a.b)("p",null,"A tooltip component that gives an extra information about something when the user moves the mouse pointer over an element.\nThis tooltip component is dynamic: it adapts to the container size. It means that if you specify a ",Object(a.b)("inlineCode",{parentName:"p"},"right")," placement for the tooltip and that placement doesn't fit in the current container, then the tooltip placement will be changed automatically to the first possible placement. The alternative placements order is defined like following ",Object(a.b)("inlineCode",{parentName:"p"},"['top', 'left', 'right', 'bottom']"),". If the tooltip-ed element changes its position in the container (due to scroll or window resize for example) then the placement will be calculated again to fit the new display.\nAlso, if the text of the tooltip changes while its being displayed, then the placement will be calculated again to make sure that it still fits in the container with the new content."),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)(l.d,{of:H,mdxType:"Props"}),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("h3",{id:"basic-usage"},"Basic usage"),Object(a.b)("p",null,"Examples below show usage of the tooltip with different titles and types. You can change the size of the window (by opening the dev console for example) to see how the tooltip of the last button adapts to the new container size (placement goes from right to top)."),Object(a.b)(l.c,{__position:1,__code:'<div style={{ display: \'flex\' }}>\n  <div>\n    <Tooltip\n      options={{ container: document.getElementById(\'list\') }}\n      title="Oups!"\n      type="error"\n    >\n      <button>Tooltip me to the default (top)</button>\n    </Tooltip>\n  </div>\n  <div>\n    <Tooltip\n      placement="left"\n      options={{ container: document.getElementById(\'list\') }}\n      title="At vero eos et accusamus"\n      placement="right"\n    >\n      <button>Tooltip me to the right</button>\n    </Tooltip>\n  </div>\n  <div>\n    <Tooltip\n      placement="bottom"\n      options={{ container: document.getElementById(\'list\') }}\n      title="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"\n      placement="bottom"\n      options={{ container: document.getElementById(\'list\') }}\n      type="success"\n    >\n      <button>Tooltip me to the bottom with success</button>\n    </Tooltip>\n  </div>\n  <div>\n    <Tooltip\n      placement="right"\n      options={{ container: document.getElementById(\'list\') }}\n      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "\n      placement="right"\n      type="success"\n    >\n      <button>Tooltip me to the right with a long text</button>\n    </Tooltip>\n  </div>\n</div>',__scope:{props:this?this.props:c,Playground:l.c,Props:l.d,Tooltip:H,TooltipDemo:U},style:{display:"flex",flexDirection:"row",justifyContent:"space-around"},mdxType:"Playground"},Object(a.b)("div",{style:{display:"flex"}},Object(a.b)("div",null,Object(a.b)(H,{options:{container:document.getElementById("list")},title:"Oups!",type:"error",mdxType:"Tooltip"},Object(a.b)("button",null,"Tooltip me to the default (top)"))),Object(a.b)("div",null,Object(a.b)(H,(t={placement:"left",options:{container:document.getElementById("list")},title:"At vero eos et accusamus"},Object(i.a)(t,"placement","right"),Object(i.a)(t,"mdxType","Tooltip"),t),Object(a.b)("button",null,"Tooltip me to the right"))),Object(a.b)("div",null,Object(a.b)(H,(n={placement:"bottom",options:{container:document.getElementById("list")},title:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"},Object(i.a)(n,"placement","bottom"),Object(i.a)(n,"options",{container:document.getElementById("list")}),Object(i.a)(n,"type","success"),Object(i.a)(n,"mdxType","Tooltip"),n),Object(a.b)("button",null,"Tooltip me to the bottom with success"))),Object(a.b)("div",null,Object(a.b)(H,(r={placement:"right",options:{container:document.getElementById("list")},title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},Object(i.a)(r,"placement","right"),Object(i.a)(r,"type","success"),Object(i.a)(r,"mdxType","Tooltip"),r),Object(a.b)("button",null,"Tooltip me to the right with a long text"))))),Object(a.b)("h3",{id:"advanced-settings"},"Advanced settings"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The Tooltip can be configured with extra options in order to customize it with the desired behaviour. This is where you can make use of the ",Object(a.b)("inlineCode",{parentName:"li"},"options")," props."),Object(a.b)("li",{parentName:"ul"},'The Example below shows a list of items. A tooltip is displayed once we hover the "hover me" button of each item. The placement of tooltip is configured to ',Object(a.b)("inlineCode",{parentName:"li"},"bottom")," for all items except for the item number ",Object(a.b)("inlineCode",{parentName:"li"},"1")," that has a ",Object(a.b)("inlineCode",{parentName:"li"},"left")," placement. The code associated to this example is located in the ",Object(a.b)("inlineCode",{parentName:"li"},"TooltipDemo.tsx")," file."),Object(a.b)("li",{parentName:"ul"},"This example shows how to configure a custom ",Object(a.b)("inlineCode",{parentName:"li"},"container")," (the ",Object(a.b)("inlineCode",{parentName:"li"},"ul")," list in our case) if you need to handle the tooltip placement calculation in a specific zone. The placement will be then calculated in the range of that container instead of Window."),Object(a.b)("li",{parentName:"ul"},"Also you can configure a ",Object(a.b)("inlineCode",{parentName:"li"},"tooltipMaxWidth")," to make the max-width property smaller than default (300px) in order to adapt to the tooltip size to the new container."),Object(a.b)("li",{parentName:"ul"},"You will notice as you test the behaviour below that for the fourth item the tooltip will be displayed on top instead of specified placement ",Object(a.b)("inlineCode",{parentName:"li"},"bottom")," since the space left doesn't allow it to be visible. And if you scroll in the list, then the space will be sufficient for it to be displayed so the placement will be set back to bottom."),Object(a.b)("li",{parentName:"ul"},'You will notice as well that once you click on the "hover me" button of the item number ',Object(a.b)("inlineCode",{parentName:"li"},"1")," the tooltip title will be updated and its placement will be automatically calculated again to fit into the container with the new long text.")),Object(a.b)(l.c,{__position:2,__code:"<TooltipDemo />",__scope:{props:this?this.props:c,Playground:l.c,Props:l.d,Tooltip:H,TooltipDemo:U},style:{display:"flex",justifyContent:"center"},mdxType:"Playground"},Object(a.b)(U,{mdxType:"TooltipDemo"})))}X&&X===Object(X)&&Object.isExtensible(X)&&Object.defineProperty(X,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/atoms/tooltip/Tooltip.mdx"}}),X.isMDXComponent=!0},"./src/colors/colors.ts":function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"c",function(){return o}),n.d(t,"d",function(){return r}),n.d(t,"e",function(){return a}),n.d(t,"f",function(){return l}),n.d(t,"a",function(){return s}),n.d(t,"j",function(){return c}),n.d(t,"k",function(){return u}),n.d(t,"l",function(){return m}),n.d(t,"g",function(){return O}),n.d(t,"h",function(){return g}),n.d(t,"i",function(){return v}),n.d(t,"o",function(){return S}),n.d(t,"n",function(){return N}),n.d(t,"m",function(){return W});var i="#0E353D";"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"dashGreen00",filename:"src/colors/colors.ts"}});var o="#3E5D64";"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"dashGreen01",filename:"src/colors/colors.ts"}});var r="#6E868B";"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"dashGreen02",filename:"src/colors/colors.ts"}});var a="#9FAEB1";"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"dashGreen03",filename:"src/colors/colors.ts"}});"#CFD7D8"===Object("#CFD7D8")&&Object.isExtensible("#CFD7D8")&&Object.defineProperty("#CFD7D8","__filemeta",{enumerable:!0,configurable:!0,value:{name:"dashGreen04",filename:"src/colors/colors.ts"}});var l="#D9DFE0";"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"dashGreen05",filename:"src/colors/colors.ts"}});"#F5F7F7"===Object("#F5F7F7")&&Object.isExtensible("#F5F7F7")&&Object.defineProperty("#F5F7F7","__filemeta",{enumerable:!0,configurable:!0,value:{name:"dashGreen06",filename:"src/colors/colors.ts"}});var s="#071A1E";"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"dashDarkerGreen00",filename:"src/colors/colors.ts"}});var c="#0E6476";"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"midGreen00",filename:"src/colors/colors.ts"}});var u="#3E8391";"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"midGreen01",filename:"src/colors/colors.ts"}});"#6EA2AD"===Object("#6EA2AD")&&Object.isExtensible("#6EA2AD")&&Object.defineProperty("#6EA2AD","__filemeta",{enumerable:!0,configurable:!0,value:{name:"midGreen02",filename:"src/colors/colors.ts"}});var m="#9FC1C8";"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"midGreen03",filename:"src/colors/colors.ts"}});"#CFE0E4"===Object("#CFE0E4")&&Object.isExtensible("#CFE0E4")&&Object.defineProperty("#CFE0E4","__filemeta",{enumerable:!0,configurable:!0,value:{name:"midGreen04",filename:"src/colors/colors.ts"}});"#D9E6E9"===Object("#D9E6E9")&&Object.isExtensible("#D9E6E9")&&Object.defineProperty("#D9E6E9","__filemeta",{enumerable:!0,configurable:!0,value:{name:"midGreen05",filename:"src/colors/colors.ts"}});var b="#FDB5AF";b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"pink00",filename:"src/colors/colors.ts"}});var p="#FDC4BF";p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"pink01",filename:"src/colors/colors.ts"}});var f="#FED3CF";f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"pink02",filename:"src/colors/colors.ts"}});var d="#FEE1DF";d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"pink03",filename:"src/colors/colors.ts"}});var h="#FFF0EF";h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"pink04",filename:"src/colors/colors.ts"}});var j="#FFF3F2";j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"pink05",filename:"src/colors/colors.ts"}});"#FE5B33"===Object("#FE5B33")&&Object.isExtensible("#FE5B33")&&Object.defineProperty("#FE5B33","__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange00",filename:"src/colors/colors.ts"}});"#FE7C5C"===Object("#FE7C5C")&&Object.isExtensible("#FE7C5C")&&Object.defineProperty("#FE7C5C","__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange01",filename:"src/colors/colors.ts"}});"#FE9D85"===Object("#FE9D85")&&Object.isExtensible("#FE9D85")&&Object.defineProperty("#FE9D85","__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange02",filename:"src/colors/colors.ts"}});"#FFBDAD"===Object("#FFBDAD")&&Object.isExtensible("#FFBDAD")&&Object.defineProperty("#FFBDAD","__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange03",filename:"src/colors/colors.ts"}});"#FFDED6"===Object("#FFDED6")&&Object.isExtensible("#FFDED6")&&Object.defineProperty("#FFDED6","__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange04",filename:"src/colors/colors.ts"}});"#FFE5DE"===Object("#FFE5DE")&&Object.isExtensible("#FFE5DE")&&Object.defineProperty("#FFE5DE","__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange05",filename:"src/colors/colors.ts"}});var O="#4E000D";"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"functionalRed00",filename:"src/colors/colors.ts"}});var g="#8B0018";"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"functionalRed01",filename:"src/colors/colors.ts"}});var v="#FF002D";"undefined"!==typeof v&&v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"functionalRed02",filename:"src/colors/colors.ts"}});"#FFA49F"===Object("#FFA49F")&&Object.isExtensible("#FFA49F")&&Object.defineProperty("#FFA49F","__filemeta",{enumerable:!0,configurable:!0,value:{name:"functionalRed03",filename:"src/colors/colors.ts"}});var y="#BF0A33";y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red00",filename:"src/colors/colors.ts"}});var x="#CC3B5C";x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red01",filename:"src/colors/colors.ts"}});var E="#D96C85";E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red02",filename:"src/colors/colors.ts"}});var _="#E59DAD";_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red03",filename:"src/colors/colors.ts"}});var P="#F2CED6";P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red04",filename:"src/colors/colors.ts"}});var w="#F5D8DE";w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red05",filename:"src/colors/colors.ts"}});var F="#615B57";F===Object(F)&&Object.isExtensible(F)&&Object.defineProperty(F,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"grey00",filename:"src/colors/colors.ts"}});var T="#999592";T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"grey01",filename:"src/colors/colors.ts"}});var D="#CCC7C2";D===Object(D)&&Object.isExtensible(D)&&Object.defineProperty(D,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"grey02",filename:"src/colors/colors.ts"}});var C="#D6D2CE";C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"grey03",filename:"src/colors/colors.ts"}});var q="#E0DDDA";q===Object(q)&&Object.isExtensible(q)&&Object.defineProperty(q,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"grey04",filename:"src/colors/colors.ts"}});var k="#EBE9E7";k===Object(k)&&Object.isExtensible(k)&&Object.defineProperty(k,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"grey05",filename:"src/colors/colors.ts"}});var A="#F5F4F3";A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"grey06",filename:"src/colors/colors.ts"}});var B="#000000";B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"black",filename:"src/colors/colors.ts"}});var S="#FFFFFF";"undefined"!==typeof S&&S&&S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"white",filename:"src/colors/colors.ts"}});var N="#20B422";"undefined"!==typeof N&&N&&N===Object(N)&&Object.isExtensible(N)&&Object.defineProperty(N,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"validatorGreen",filename:"src/colors/colors.ts"}});var W="transparent";"undefined"!==typeof W&&W&&W===Object(W)&&Object.isExtensible(W)&&Object.defineProperty(W,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"transparent",filename:"src/colors/colors.ts"}})},"./src/ions/text/StyledText.tsx":function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return s});var i=n("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),o=n("./node_modules/styled-components/dist/styled-components.browser.esm.js");function r(){var e=Object(i.a)(["\n  ","\n  font-weight: 600;\n"]);return r=function(){return e},e}function a(){var e=Object(i.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Public+Sans:400,500,600&display=swap');\n  font-family: 'Public Sans', 'Helvetica Neue', Helvetica, Arial,\n    'Lucida Grande', sans-serif;\n"]);return a=function(){return e},e}var l=Object(o.c)(a());"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fontFamily",filename:"src/ions/text/StyledText.tsx"}});var s=o.d.span(r(),l);"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StyledText",filename:"src/ions/text/StyledText.tsx"}})},"./src/utility/helpers.ts":function(e,t,n){"use strict";function i(e){throw new Error("Unexpected value. Should have been never.")}n.d(t,"a",function(){return i}),i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"assertUnreachable",filename:"src/utility/helpers.ts"}})}}]);
//# sourceMappingURL=src-atoms-tooltip-tooltip.d3460709248b986c1fd4.js.map