import{jsx as e,Fragment as t,jsxs as n}from"react/jsx-runtime";import{forwardRef as i,useRef as r,useLayoutEffect as s,memo as o,useState as l,useMemo as a}from"react";var c;!function(e){e.REACT_WIDGETS_OPTION={}}(c||(c={}));class h{constructor(){this.ids=new Map}static get instance(){var e;return null!==(e=this._instance)&&void 0!==e?e:this._instance=new h}set currentOption(e){c.REACT_WIDGETS_OPTION=e}getElementIdByTag(e){var t;const n=(null!==(t=this.ids.get(e))&&void 0!==t?t:0)+1;return e+this.ids.set(e,n).get(e)}optionValueOf(e){var t;return null!==(t=c.REACT_WIDGETS_OPTION[e])&&void 0!==t?t:h.default[e]}initialize(){const e=new CSSStyleSheet;this.optionValueOf("useStrict")&&e.insertRule("div { flex-shrink: 0; boxSizing: border-box; }"),this.initializeStyleSheet(e)}initializeStyleSheet(e){e.insertRule("widget-row { display: flex; flex-direction: row; }"),e.insertRule("widget-column { display: flex; flex-direction: column; }"),e.insertRule("widget-grid { display: grid; }"),e.insertRule("\n                scrollable-vertical {\n                    display: block;\n                    height: 100%;\n                    overflow: auto;\n                }\n            "),e.insertRule("scrollable-vertical > * { height: max-content }"),e.insertRule("scrollable-vertical[scrollbar-none]::-webkit-scrollbar { display: none; }"),e.insertRule("\n                scrollable-horizontal {\n                    display: block;\n                    width: 100%;\n                    overflow: auto;\n                }\n            "),e.insertRule("scrollable-horizontal > * { width: max-content; }"),e.insertRule("scrollable-horizontal[scrollbar-none]::-webkit-scrollbar { display: none; }"),document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}h.default={useStrict:!0,useDefaultMemo:!0,useWillChange:!0};class d{constructor(){this.listeners=[]}static get instance(){var e;return null!==(e=this._instance)&&void 0!==e?e:this._instance=new d}attach(e){console.assert(!this.listeners.includes(e),"Already exists a given listener in this binding."),this.listeners.push(e)}detach(e){console.assert(this.listeners.includes(e),"Already not exists a given listener in this binding."),this.listeners=this.listeners.filter((t=>t!=e))}rebuild(){console.assert(0!=this.listeners.length,"The `Application` component to detect events at top-level components is missing."),console.assert(1==this.listeners.length,"The `Application` component must exist as the only unique entity.")}}d._instance=null;const u=new Proxy(d,{get:()=>d.instance});var g;!function(e){e[e.REBUILD=0]="REBUILD"}(g||(g={}));const p=i(((t,n)=>{var i;const r=Object.assign({},t),s={id:t.id,className:t.className,children:t.children,ref:n,onClick:t.onClick,onClickCapture:t.onClickCapture,onDoubleClick:t.onDoubleClick,onDoubleClickCapture:t.onDoubleClickCapture,onFocus:t.onFocus,onFocusCapture:t.onFocusCapture,onChange:t.onChange,onChangeCapture:t.onChangeCapture,onRateChange:t.onRateChange,onRateChangeCapture:t.onRateChangeCapture,onVolumeChange:t.onVolumeChange,onVolumeChangeCapture:t.onVolumeChangeCapture};return t.size&&(console.assert(null==t.width,"The width cannot be defined when defining the size."),console.assert(null==t.height,"The height cannot be defined when defining the size."),r.width=t.size,r.height=t.size),e(null!==(i=t.tagName)&&void 0!==i?i:"div",Object.assign(Object.assign({},s),{style:r}))}));Object.defineProperty(Element.prototype,"intrinsicSize",{get:function(){return f.intrinsicSizeOf(this)}}),Object.defineProperty(Element.prototype,"intrinsicWidth",{get:function(){return f.intrinsicSizeOf(this).width}}),Object.defineProperty(Element.prototype,"intrinsicHeight",{get:function(){return f.intrinsicSizeOf(this).height}}),Object.defineProperty(Element.prototype,"reflow",{get:function(){return f.reflow(this)}});class f{static reflow(e){e.getBoundingClientRect()}static intrinsicSizeOf(e,t){for(;e;){const n=null!=t?t:getComputedStyle(e),i=parseFloat(n.width),r=parseFloat(n.height),s=parseFloat(n.paddingLeft),o=parseFloat(n.paddingRight),l=parseFloat(n.paddingTop),a=parseFloat(n.paddingBottom),c=parseFloat(n.borderLeftWidth),h=parseFloat(n.borderRightWidth),d=parseFloat(n.borderTopWidth),u=parseFloat(n.borderBottomWidth),g=parseFloat(n.marginLeft),p=parseFloat(n.marginRight),f=parseFloat(n.marginTop),y=parseFloat(n.marginBottom),w=n.boxSizing,b=n.position;if("contents"===n.display){let t=Array.from(e.children).filter((e=>"STYLE"!==e.tagName&&"SCRIPT"!==e.tagName));if(1!==t.length)throw new Error("An element with a display property of 'contents' must have only one child to define its intrinsic size.");e=t[0];continue}let m=i,C=r;return"content-box"===w&&(m+=s+o+c+h,C+=l+a+d+u),"absolute"!==b&&"fixed"!==b&&(m+=g+p,C+=f+y),{width:m,height:C}}}}Object.defineProperty(Element.prototype,"intrinsicRect",{get:function(){return y.intrinsicOf(this)}});class y{static intrinsicOf(e,t){const n=null!=t?t:getComputedStyle(e),i=f.intrinsicSizeOf(e,n),r=e.getBoundingClientRect();return new DOMRect(r.x,r.y,i.width,i.height)}}var w,b,m;function C({duration:e,children:t}){return t}function v({children:t,duration:n,curve:i,sizeTolerance:o}){const l=r(null),a=r(null),c=r(null),d=h.instance.optionValueOf("useWillChange")?"width, height":void 0,u=()=>l.current,g=()=>u().firstElementChild;return s((()=>{const e=f.intrinsicSizeOf(g());a.current=e,c.current=e}),[]),s((()=>{const e=u(),t=g();t.firstChild.ontransitionend=e=>{e.stopPropagation()};{e.style.width=null,e.style.height=null,t.style.minWidth=null,t.style.minHeight=null;const n=a.current,i=f.intrinsicSizeOf(t);if(n.width==i.width&&n.height==i.height)return;c.current=i,e.style.width=`${n.width}px`,e.style.height=`${n.height}px`,f.reflow(t),e.style.width=`${i.width}px`,e.style.height=`${i.height}px`,e.ontransitionend=()=>{e.style.width=null,e.style.height=null,t.style.minWidth=null,t.style.minHeight=null},t.style.minWidth=`${i.width}px`,t.style.minHeight=`${i.height}px`}const n=new ResizeObserver((()=>{a.current=f.intrinsicSizeOf(e)}));return n.observe(e,{box:"device-pixel-content-box"}),()=>n.disconnect()}),[t]),e(p,{ref:l,overflow:"hidden",willChange:d,transitionProperty:"width, height",transitionDuration:n,transitionTimingFunction:i,children:e("div",{children:t})})}!function(t){t.Horizontal=function({visible:t,overflow:n="hidden",duration:i,transition:o={opacity:!1},curve:l,children:a}){var c;const d=r(t),u=r(null),g=null!==(c=null==o?void 0:o.opacity)&&void 0!==c&&c,y=h.instance.optionValueOf("useWillChange")?g?"width, opacity":"width":void 0;return s((()=>{const e=u.current,n=e.firstElementChild,i=f.intrinsicSizeOf(n),r=f.intrinsicSizeOf(e);if(n.ontransitionend=e=>{e.stopPropagation()},t==d.current)e.style.width=t?null:"0px",n.style.width=t?null:`${i.width}px`;else{e.style.width=null,n.style.width=null;const i=f.intrinsicSizeOf(e);g&&(e.style.opacity=t?"1":"0"),t?(e.style.width=`${r.width}px`,n.style.width=`${r.width}px`,f.reflow(e),e.style.width=`${i.width}px`,e.ontransitionend=()=>{e.style.width=null,n.style.width=null},n.style.width=`${i.width}px`):(e.style.width=`${r.width}px`,n.style.width=`${i.width}px`,f.reflow(e),e.style.width="0px",e.ontransitionend=null)}d.current=t}),[t]),e(p,{ref:u,opacity:g?t?"1":"0":void 0,overflow:n,willChange:y,transitionProperty:g?"width, opacity":"width",transitionDuration:i,transitionTimingFunction:l,children:e("div",{children:a})})},t.Vertical=function({visible:t,overflow:n="hidden",duration:i,transition:o={opacity:!1},curve:l,children:a}){var c;const d=r(t),u=r(null),g=null!==(c=null==o?void 0:o.opacity)&&void 0!==c&&c,y=h.instance.optionValueOf("useWillChange")?g?"height, opacity":"height":void 0;return s((()=>{const e=u.current,n=e.firstElementChild,i=f.intrinsicSizeOf(n),r=f.intrinsicSizeOf(e);if(n.ontransitionend=e=>{e.stopPropagation()},t==d.current)e.style.height=t?null:"0px",n.style.height=t?null:`${i.height}px`;else{e.style.height=null,n.style.height=null;const i=f.intrinsicSizeOf(e);g&&(e.style.opacity=t?"1":"0"),t?(e.style.height=`${r.height}px`,n.style.height=`${r.height}px`,f.reflow(e),e.style.height=`${i.height}px`,e.ontransitionend=()=>{e.style.height=null,n.style.height=null},n.style.height=`${i.height}px`):(e.style.height=`${r.height}px`,n.style.height=`${i.height}px`,f.reflow(e),e.style.height="0px",e.ontransitionend=null)}d.current=t}),[t]),e(p,{ref:u,opacity:g?t?"1":"0":void 0,overflow:n,willChange:y,transitionProperty:g?"height, opacity":"height",transitionDuration:i,transitionTimingFunction:l,children:e("div",{children:a})})}}(w||(w={})),function(t){t.Horizontal=function({index:t,duration:n,children:i}){const o=i.length,l=r(null);return console.assert(t>=0,"A value of [index] cannot be negative."),console.assert(t<o,"A value of [index] cannot be bigger than a given item-count."),s((()=>{const e=l.current,n=Array.from(e.children),i=n[t];n.filter(((e,n)=>n!=t));for(let e=0;e<n.length;e++)n[e].style.minWidth="max-content";e.style.removeProperty("width"),e.style.removeProperty("height");const r=i.getBoundingClientRect();e.style.width=`${r.width}px`,e.style.height=`${r.height}px`}),[t]),e(p,{ref:l,display:"flex",children:i.map((t=>e("div",{children:t})))})}}(b||(b={}));class x{constructor(){this._listeners=[]}redraw(){this.animId&&cancelAnimationFrame(this.animId),this.animId=requestAnimationFrame((()=>{this.notifyListeners(),this.animId=null}))}addListener(e){console.assert(!this._listeners.includes(e),"Already exists a given listener."),this._listeners.push(e)}removeListener(e){console.assert(this._listeners.includes(e),"Already not exists a given listener."),this._listeners=this._listeners.filter((t=>t!=e))}notifyListeners(){this._listeners.forEach((e=>e()))}}function O(t){const n=t.align,i=Object.assign(Object.assign({},t),{flexDirection:t.reverse?"column-reverse":void 0,flexWrap:t.wrap?"wrap":void 0});return t.size&&(console.assert(null==t.width,"The `width` cannot be defined when defining the `size`."),console.assert(null==t.height,"The `height` cannot be defined when defining the `size`."),i.width=t.size,i.height=t.size),t.paddingAndGap&&(console.assert(null==t.padding,"The `padding` cannot be defined when defining the `paddingAndGap`."),console.assert(null==t.gap,"The `gap` cannot be defined when defining the `paddingAndGap`."),i.padding=t.paddingAndGap,i.gap=t.paddingAndGap),"bottomCenter"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="end"):"bottomLeft"==n?(i.alignItems="start",i.alignContent="start",i.justifyContent="end"):"bottomRight"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="end"):"center"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="center"):"centerLeft"==n?(i.alignItems="start",i.alignContent="start",i.justifyContent="center"):"centerRight"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="center"):"topCenter"==n?(i.alignItems="center",i.alignContent="center"):"topLeft"==n?(i.alignItems="left",i.alignContent="left"):"topRight"==n?(i.alignItems="right",i.alignContent="right"):"spaceBetweenLeft"==n?i.justifyContent="space-between":"spaceBetweenCenter"==n?(i.alignContent="center",i.justifyContent="space-between"):"spaceBetweenRight"==n?(i.alignContent="end",i.justifyContent="space-between"):"spaceAroundLeft"==n?i.justifyContent="space-between":"spaceAroundCenter"==n?(i.alignContent="center",i.justifyContent="space-around"):"spaceAroundRight"==n?(i.alignContent="end",i.justifyContent="space-around"):"spaceEvenlyLeft"==n?i.justifyContent="space-evenly":"spaceEvenlyCenter"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="space-evenly"):"spaceEvenlyRight"==n&&(i.alignItems="end",i.alignContent="end",i.justifyContent="space-evenly"),e("widget-column",{className:t.className,style:i,children:t.children})}function j(t){const n=t.align,i=Object.assign(Object.assign({},t),{flexDirection:t.reverse?"row-reverse":void 0,flexWrap:t.wrap?"wrap":void 0});return t.size&&(console.assert(null==t.width,"The width cannot be defined when defining the size."),console.assert(null==t.height,"The height cannot be defined when defining the size."),i.width=t.size,i.height=t.size),t.paddingAndGap&&(console.assert(null==t.padding,"The padding cannot be defined when defining the paddingAndGap."),console.assert(null==t.gap,"The gap cannot be defined when defining the paddingAndGap."),i.padding=t.paddingAndGap,i.gap=t.paddingAndGap),"bottomCenter"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="center"):"bottomLeft"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="left"):"bottomRight"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="right"):"bottomSpaceBetween"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="space-between"):"bottomSpaceAround"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="space-around"):"bottomSpaceEvenly"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="space-evenly"):"center"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="center"):"centerLeft"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="left"):"centerRight"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="right"):"centerSpaceBetween"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="space-between"):"centerSpaceAround"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="space-around"):"centerSpaceEvenly"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="space-evenly"):"topCenter"==n?i.justifyContent="center":"topLeft"==n?i.justifyContent="left":"topRight"==n?i.justifyContent="right":"topSpaceBetween"==n?i.justifyContent="space-between":"topSpaceAround"==n?i.justifyContent="space-around":"topSpaceEvenly"==n&&(i.justifyContent="space-evenly"),e("widget-row",{className:t.className,style:i,children:t.children})}!function(t){function n({contextType:t,width:n,height:i,onDraw:o,controller:l}){const a=r(null);return s((()=>{const e=a.current,r=new ResizeObserver((()=>{e.style.width=n,e.style.height=i;const r=f.intrinsicSizeOf(e);e.setAttribute("width",`${r.width}px`),e.setAttribute("height",`${r.height}px`),o(e.getContext(t))}));return r.observe(e),()=>{r.disconnect()}}),[]),s((()=>{const e=a.current;l&&(l.active=e,l.addListener((()=>o(e.getContext(t)))))}),[l]),e("canvas",{ref:a})}t.Context2D=function({width:t,height:i,onDraw:r,controller:s}){return e(n,{contextType:"2d",width:t,height:i,onDraw:r,controller:s})},t.Foundation=n}(m||(m={}));const z=o((e=>e.children),((e,t)=>e.value===t.value));var S,T,R;!function(n){n.Viewport=function({builder:n}){const i=()=>({width:window.innerWidth,height:window.innerHeight}),[r,o]=l(i());return s((()=>{const e=()=>o(i());return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),e(t,{children:n(r.width,r.height)})},n.Parent=function({builder:e}){}}(S||(S={}));class A{constructor(e,t,n){if(this.min=e,this.max=t,this.value=n,e>t)throw new Error("A min-constraint must be less than a max-constraint.")}}function I({constraints:t,usememo:n,builder:i}){return console.assert(0!=t.length,"A constraints of ConstraintBuilder must be one or more."),e(S.Viewport,{builder:(e,r)=>{var s;const o=null===(s=t.find((t=>t.min<=e&&t.max>=e)))||void 0===s?void 0:s.value;if(null==o)throw new Error("No constraint value exists for the current window size.");return(null!=n?n:h.instance.optionValueOf("useDefaultMemo"))?a((()=>i(o)),[o]):i(o)}})}function E({direction:t,children:n}){const i=r(null);return s((()=>{const e=i.current,n=e.parentElement,r=Array.from(n.children).filter((t=>t!=e));let s=0,o=0;const l=new ResizeObserver((i=>{const a=i[0].contentBoxSize[0].inlineSize,c=i[0].contentBoxSize[0].blockSize;if("vertical"==t&&o==c)return;if("horizontal"==t&&s==a)return;s=a,o=c;const h=r.reduce(((e,t)=>{const n=f.intrinsicSizeOf(t);return{width:e.width+n.width,height:e.height+n.height}}),{width:0,height:0});l.disconnect(),"vertical"==t?e.style.height=`calc(100% - ${h.height}px)`:e.style.minWidth=`calc(100% - ${h.width}px)`,requestAnimationFrame((()=>l.observe(n)))}));return l.observe(n),()=>l.disconnect()}),[]),e("div",{ref:i,children:n})}function F(t){const n=Object.assign(Object.assign({},t),{gridTemplateColumns:Array.from({length:t.rowCount},(()=>"1fr")).join(" "),padding:t.padding,margin:t.margin});return null!=t.gap?n.gap=t.gap:null!=t.verticalGap?n.rowGap=t.verticalGap:null!=t.horizontalGap&&(n.columnGap=t.horizontalGap),e("widget-grid",{style:n,children:t.children})}function $({children:t}){return e("div",{className:"ignore",children:t})}function L({before:t,behind:n,children:i}){const o=r(null);return s((()=>{const e=o.current,i=new ResizeObserver((()=>{if(e.removeAttribute("style"),t){const n=e.getBoundingClientRect();t(n,e)}if(n){console.assert(null!=t,"[before] and [behind] must be used together.");const i=e.getBoundingClientRect();n(i,e)}}));return i.observe(e),()=>i.disconnect()}),[]),e("div",{ref:o,children:i})}function k(t){const n=Object.assign(Object.assign({},t),{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:t.maxLine,textAlign:t.alignment,overflow:"hidden"});switch(t.type){case"h1":return e("h1",{style:n,children:t.children});case"h2":return e("h2",{style:n,children:t.children});case"h3":return e("h3",{style:n,children:t.children});case"h4":return e("h4",{style:n,children:t.children});case"h5":return e("h5",{style:n,children:t.children});case"h6":return e("h6",{style:n,children:t.children});case"a":return e("a",{style:n,children:t.children});case"p":return e("p",{style:n,children:t.children});case"span":return e("span",{style:n,children:t.children});default:return e("div",{style:n,children:t.children})}}!function(t){t.Vertical=function(t){var n;const i=!(null===(n=t.scrollbar)||void 0===n||n);return e("scrollable-vertical",Object.assign({children:t.children},i&&{"scrollbar-none":""}))},t.Horizontal=function(t){var n;const i=!(null===(n=t.scrollbar)||void 0===n||n);return e("scrollable-horizontal",Object.assign({children:t.children},i&&{"scrollbar-none":""}))}}(T||(T={})),function(t){function i(e,t){const n=e.length;if(t>n)throw new Error(`The index of TabNavigation is overflowed. (given: ${t} > length: ${n})`);let i=0;for(let n=0;n<=t;n++)"ignore"==e[n+i].className&&i++;return e[t+i]}t.defualtStyle={backgroundColor:"black",width:"100%",thickness:"3px"},t.Horizontal=function({children:o,index:l,style:a,duration:c,curve:h,gap:d}){const u=r(null),g=Object.assign(Object.assign({},t.defualtStyle),a);return console.assert(l>=0,"The index of TabNavigation cannot be negative."),console.assert(l!=1/0,"The index of TabNavigation cannot be infinity."),s((()=>{if(null==l)return;const e=u.current,t=e.firstElementChild,n=e.lastElementChild,r=i(t.children,l),s=y.intrinsicOf(t),o=y.intrinsicOf(r);n.style.width=`${o.width}px`,n.style.marginLeft=o.left-s.left+"px",null==n.style.transitionProperty&&requestAnimationFrame((()=>n.style.transitionProperty="margin, width"))}),[l]),n(p,{ref:u,children:[e(j,{gap:d,children:o}),e(p,{transitionDuration:c,transitionTimingFunction:h,children:e(p,{width:g.width,height:null!=l?g.thickness:0,backgroundColor:g.backgroundColor,borderRadius:g.borderRadius,transitionDuration:c,transitionProperty:"height",transitionTimingFunction:h,margin:"0 auto"})})]})},t.Vertical=function({children:o,index:l,style:a,duration:c,curve:h,gap:d}){const u=r(null),g=Object.assign(Object.assign({},t.defualtStyle),a);return console.assert(l>=0,"The index of TabNavigation cannot be negative."),console.assert(l!=1/0,"The index of TabNavigation cannot be infinity."),s((()=>{if(null==l)return;const e=u.current,t=e.lastElementChild,n=e.firstElementChild,r=i(t.children,l),s=y.intrinsicOf(t),o=y.intrinsicOf(r);n.style.height=`${o.height}px`,n.style.marginTop=o.top-s.top+"px",null==n.style.transitionProperty&&requestAnimationFrame((()=>n.style.transitionProperty="margin, height"))}),[l]),n(p,{display:"flex",ref:u,children:[e(p,{display:"flex",alignItems:"center",transitionDuration:c,transitionTimingFunction:h,children:e(p,{width:null!=l?g.thickness:0,height:g.width,backgroundColor:g.backgroundColor,borderRadius:g.borderRadius,transitionDuration:c,transitionProperty:"width",transitionTimingFunction:h})}),e(O,{gap:d,children:o})]})}}(R||(R={})),function(t){t.h1=function(n){return n=Object.assign(Object.assign({},n),{type:"h1"}),e(t,Object.assign({},n))},t.h2=function(n){return n=Object.assign(Object.assign({},n),{type:"h2"}),e(t,Object.assign({},n))},t.h3=function(n){return n=Object.assign(Object.assign({},n),{type:"h3"}),e(t,Object.assign({},n))},t.h4=function(n){return n=Object.assign(Object.assign({},n),{type:"h4"}),e(t,Object.assign({},n))},t.h5=function(n){return n=Object.assign(Object.assign({},n),{type:"h5"}),e(t,Object.assign({},n))},t.h6=function(n){return n=Object.assign(Object.assign({},n),{type:"h6"}),e(t,Object.assign({},n))},t.a=function(n){return n=Object.assign(Object.assign({},n),{type:"a"}),e(t,Object.assign({},n))},t.p=function(n){return n=Object.assign(Object.assign({},n),{type:"p"}),e(t,Object.assign({},n))},t.span=function(n){return n=Object.assign(Object.assign({},n),{type:"span"}),e(t,Object.assign({},n))}}(k||(k={})),addEventListener("DOMContentLoaded",(()=>h.instance.initialize()));export{w as AnimatedFoldable,C as AnimatedPage,b as AnimatedReplace,v as AnimatedSize,u as App,d as ApplicationBinding,g as ApplicationEvent,p as Box,m as Canvas,x as CanvasController,O as Column,z as ConditionalRender,A as Constraint,I as ConstraintBuilder,E as Expanded,F as Grid,$ as Ignore,L as Layout,c as ReactWidgets,h as ReactWidgetsBinding,j as Row,T as Scrollable,S as SizeBuilder,R as TabNavigation,k as Text};
//# sourceMappingURL=index.esm.js.map
