!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react/jsx-runtime"),require("react")):"function"==typeof define&&define.amd?define(["exports","react/jsx-runtime","react"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ReactWidgets={},e.React,e.React)}(this,(function(e,t,n){"use strict";var i,r,s;e.ReactWidgets=void 0,(e.ReactWidgets||(e.ReactWidgets={})).REACT_WIDGETS_OPTION={};class o{constructor(){}static get instance(){var e;return null!==(e=this._instance)&&void 0!==e?e:this._instance=new o}set currentOption(t){e.ReactWidgets.REACT_WIDGETS_OPTION=t}optionValueOf(t){var n;return null!==(n=e.ReactWidgets.REACT_WIDGETS_OPTION[t])&&void 0!==n?n:o.default[t]}initialize(){const e=new CSSStyleSheet;this.optionValueOf("useStrict")&&e.insertRule("div { flex-shrink: 0; boxSizing: border-box; }"),this.initializeStyleSheet(e)}initializeStyleSheet(e){e.insertRule("widget-row { display: flex; flex-direction: row; }"),e.insertRule("widget-column { display: flex; flex-direction: column; }"),e.insertRule("widget-grid { display: grid; }"),e.insertRule("\n                scrollable-vertical {\n                    display: block;\n                    height: 100%;\n                    overflow: auto;\n                }\n            "),e.insertRule("scrollable-vertical > * { height: max-content }"),e.insertRule("\n                scrollable-horizontal {\n                    display: block;\n                    width: 100%;\n                    overflow: auto;\n                }\n            "),e.insertRule("scrollable-horizontal > * { width: max-content; }"),document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}function l(e){const n=e;return e.size&&(console.assert(null==e.width,"The width cannot be defined when defining the size."),console.assert(null==e.height,"The height cannot be defined when defining the size."),n.width=e.size,n.height=e.size),t.jsx("div",{ref:e.refer,className:e.className,tabIndex:e.focusable?0:null,style:n,children:e.children})}o.default={useStrict:!0};class a{static reflow(e){e.getBoundingClientRect()}static intrinsicSizeOf(e){for(;e;){const t=getComputedStyle(e),n=parseFloat(t.width),i=parseFloat(t.height),r=parseFloat(t.paddingLeft),s=parseFloat(t.paddingRight),o=parseFloat(t.paddingTop),l=parseFloat(t.paddingBottom),a=parseFloat(t.borderLeft),c=parseFloat(t.borderRight),d=parseFloat(t.borderTop),h=parseFloat(t.borderBottom),u=t.boxSizing;if("contents"==t.display){let t=Array.from(e.children).filter((e=>"STYLE"!=e.tagName&&"SCRIPT"!=e.tagName));if(1!=t.length)throw new Error("An element with a display property of contents must have only one child to define its intrinsic size.");e=t[0];continue}let g=n,f=i;return"content-box"==u&&(g+=r+s+a+c,f+=o+l+d+h),{width:g,height:f}}}}Object.defineProperty(Element.prototype,"intrinsicSize",{get:function(){return a.intrinsicSizeOf(this)}}),Object.defineProperty(Element.prototype,"intrinsicWidth",{get:()=>function(){return a.intrinsicSizeOf(this).width}}),Object.defineProperty(Element.prototype,"intrinsicHeight",{get:()=>function(){return a.intrinsicSizeOf(this).height}}),Object.defineProperty(Element.prototype,"reflow",{get:()=>function(){return a.reflow(this)}}),e.AnimatedFoldable=void 0,(i=e.AnimatedFoldable||(e.AnimatedFoldable={})).Horizontal=function({visible:e,overflow:i="hidden",duration:r,transition:s={opacity:!1},curve:o,children:c}){var d;const h=n.useRef(e),u=n.useRef(null),g=null!==(d=null==s?void 0:s.opacity)&&void 0!==d&&d;return n.useLayoutEffect((()=>{const t=u.current,n=t.firstElementChild,i=a.intrinsicSizeOf(n),r=a.intrinsicSizeOf(t);if(n.ontransitionend=e=>{e.stopPropagation()},e==h.current)t.style.width=e?null:"0px",n.style.width=e?null:`${i.width}px`;else{t.style.width=null,n.style.width=null;const i=a.intrinsicSizeOf(t);g&&(t.style.opacity=e?"1":"0"),e?(t.style.width=`${r.width}px`,n.style.width=`${r.width}px`,a.reflow(t),t.style.width=`${i.width}px`,t.ontransitionend=()=>{t.style.width=null,n.style.width=null},n.style.width=`${i.width}px`):(t.style.width=`${r.width}px`,n.style.width=`${i.width}px`,a.reflow(t),t.style.width="0px",t.ontransitionend=null)}h.current=e}),[e]),t.jsx(l,{refer:u,opacity:g?e?"1":"0":void 0,overflow:i,transitionProperty:g?"width, opacity":"width",transitionDuration:r,transitionTimingFunction:o,children:t.jsx("div",{children:c})})},i.Vertical=function({visible:e,overflow:i="hidden",duration:r,transition:s={opacity:!1},curve:o,children:c}){var d;const h=n.useRef(e),u=n.useRef(null),g=null!==(d=null==s?void 0:s.opacity)&&void 0!==d&&d;return n.useLayoutEffect((()=>{const t=u.current,n=t.firstElementChild,i=a.intrinsicSizeOf(n),r=a.intrinsicSizeOf(t);if(n.ontransitionend=e=>{e.stopPropagation()},e==h.current)t.style.height=e?null:"0px",n.style.height=e?null:`${i.height}px`;else{t.style.height=null,n.style.height=null;const i=a.intrinsicSizeOf(t);g&&(t.style.opacity=e?"1":"0"),e?(t.style.height=`${r.height}px`,n.style.height=`${r.height}px`,a.reflow(t),t.style.height=`${i.height}px`,t.ontransitionend=()=>{t.style.height=null,n.style.height=null},n.style.height=`${i.height}px`):(t.style.height=`${r.height}px`,n.style.height=`${i.height}px`,a.reflow(t),t.style.height="0px",t.ontransitionend=null)}h.current=e}),[e]),t.jsx(l,{refer:u,opacity:g?e?"1":"0":void 0,overflow:i,transitionProperty:g?"height, opacity":"height",transitionDuration:r,transitionTimingFunction:o,children:t.jsx("div",{children:c})})},e.AnimatedReplace=void 0,(e.AnimatedReplace||(e.AnimatedReplace={})).Horizontal=function({index:e,duration:i,children:r}){const s=r.length,o=n.useRef(null);return console.assert(e>=0,"A value of [index] cannot be negative."),console.assert(e<s,"A value of [index] cannot be bigger than a given item-count."),n.useLayoutEffect((()=>{const t=o.current,n=Array.from(t.children),i=n[e];n.filter(((t,n)=>n!=e));for(let e=0;e<n.length;e++)n[e].style.minWidth="max-content";t.style.removeProperty("width"),t.style.removeProperty("height");const r=i.getBoundingClientRect();t.style.width=`${r.width}px`,t.style.height=`${r.height}px`}),[e]),t.jsx(l,{refer:o,display:"flex",children:r.map((e=>t.jsx("div",{children:e})))})};function c(e){const n=e.align,i=Object.assign(Object.assign({},e),{flexDirection:e.reverse?"column-reverse":void 0,flexWrap:e.wrap?"wrap":void 0,gap:e.gap});return e.size&&(console.assert(null==e.width,"The width cannot be defined when defining the size."),console.assert(null==e.height,"The height cannot be defined when defining the size."),i.width=e.size,i.height=e.size),"bottomCenter"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="end"):"bottomLeft"==n?(i.alignItems="start",i.alignContent="start",i.justifyContent="end"):"bottomRight"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="end"):"center"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="center"):"centerLeft"==n?(i.alignItems="start",i.alignContent="start",i.justifyContent="center"):"centerRight"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="center"):"topCenter"==n?(i.alignItems="center",i.alignContent="center"):"topLeft"==n?(i.alignItems="left",i.alignContent="left"):"topRight"==n?(i.alignItems="right",i.alignContent="right"):"spaceBetweenLeft"==n?i.justifyContent="space-between":"spaceBetweenCenter"==n?(i.alignContent="center",i.justifyContent="space-between"):"spaceBetweenRight"==n?(i.alignContent="end",i.justifyContent="space-between"):"spaceAroundLeft"==n?i.justifyContent="space-between":"spaceAroundCenter"==n?(i.alignContent="center",i.justifyContent="space-around"):"spaceAroundRight"==n?(i.alignContent="end",i.justifyContent="space-around"):"spaceEvenlyLeft"==n?i.justifyContent="space-evenly":"spaceEvenlyCenter"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="space-evenly"):"spaceEvenlyRight"==n&&(i.alignItems="end",i.alignContent="end",i.justifyContent="space-evenly"),t.jsx("widget-column",{className:e.className,style:i,children:e.children})}function d(e){const n=e.align,i=Object.assign(Object.assign({},e),{flexDirection:e.reverse?"row-reverse":void 0,flexWrap:e.wrap?"wrap":void 0,gap:e.gap});return e.size&&(console.assert(null==e.width,"The width cannot be defined when defining the size."),console.assert(null==e.height,"The height cannot be defined when defining the size."),i.width=e.size,i.height=e.size),"bottomCenter"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="center"):"bottomLeft"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="left"):"bottomRight"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="right"):"bottomSpaceBetween"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="space-between"):"bottomSpaceAround"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="space-around"):"bottomSpaceEvenly"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="space-evenly"):"center"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="center"):"centerLeft"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="left"):"centerRight"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="right"):"centerSpaceBetween"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="space-between"):"centerSpaceAround"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="space-around"):"centerSpaceEvenly"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="space-evenly"):"topCenter"==n?i.justifyContent="center":"topLeft"==n?i.justifyContent="left":"topRight"==n?i.justifyContent="right":"topSpaceBetween"==n?i.justifyContent="space-between":"topSpaceAround"==n?i.justifyContent="space-around":"topSpaceEvenly"==n&&(i.justifyContent="space-evenly"),t.jsx("widget-row",{className:e.className,style:i,children:e.children})}e.Canvas=void 0,function(e){function i({contextType:e,width:i,height:r,onDraw:s,controller:o}){const l=n.useRef(null);return n.useLayoutEffect((()=>{const t=l.current,n=new ResizeObserver((()=>{t.style.width=i,t.style.height=r;const n=a.intrinsicSizeOf(t);t.setAttribute("width",`${n.width}px`),t.setAttribute("height",`${n.height}px`),s(t.getContext(e))}));return n.observe(t),()=>{n.disconnect()}}),[]),n.useLayoutEffect((()=>{const t=l.current;o&&(o.active=t,o.addListener((()=>s(t.getContext(e)))))}),[o]),t.jsx("canvas",{ref:l})}e.Context2D=function({width:e,height:n,onDraw:r,controller:s}){return t.jsx(i,{contextType:"2d",width:e,height:n,onDraw:r,controller:s})},e.Foundation=i}(e.Canvas||(e.Canvas={})),e.SizeBuilder=void 0,(r=e.SizeBuilder||(e.SizeBuilder={})).Viewport=function({builder:e}){const i=()=>({width:window.innerWidth,height:window.innerHeight}),[r,s]=n.useState(i());return n.useLayoutEffect((()=>{const e=()=>s(i());return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),t.jsx(t.Fragment,{children:e(r.width,r.height)})},r.Parent=function({builder:e}){};function h(e){const n=Object.assign(Object.assign({},e),{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:e.maxLine,textAlign:e.alignment,overflow:"hidden"});switch(e.type){case"h1":return t.jsx("h1",{style:n,children:e.children});case"h2":return t.jsx("h2",{style:n,children:e.children});case"h3":return t.jsx("h3",{style:n,children:e.children});case"h4":return t.jsx("h4",{style:n,children:e.children});case"h5":return t.jsx("h5",{style:n,children:e.children});case"h6":return t.jsx("h6",{style:n,children:e.children});case"a":return t.jsx("a",{style:n,children:e.children});case"p":return t.jsx("p",{style:n,children:e.children});case"span":return t.jsx("span",{style:n,children:e.children});default:return t.jsx("div",{style:n,children:e.children})}}e.Scrollable=void 0,(s=e.Scrollable||(e.Scrollable={})).Vertical=function({children:e}){return t.jsx("scrollable-vertical",{children:e})},s.Horizontal=function({children:e}){return t.jsx("scrollable-horizontal",{children:e})},e.TabNavigation=void 0,function(e){function i(e,t){const n=e.length;if(t>n)throw new Error(`The index of TabNavigation is overflowed. (given: ${t} > length: ${n})`);let i=0;for(let n=0;n<=t;n++)"ignore"==e[n+i].className&&i++;return e[t+i]}e.defualtStyle={backgroundColor:"black",width:"100%",thickness:"3px"},e.Horizontal=function({children:r,index:s,style:o,duration:a,curve:c,gap:h}){const u=n.useRef(null),g=Object.assign(Object.assign({},e.defualtStyle),o);return console.assert(s>=0,"The index of TabNavigation cannot be negative."),console.assert(s!=1/0,"The index of TabNavigation cannot be infinity."),n.useLayoutEffect((()=>{if(null==s)return;const e=u.current,t=e.firstElementChild,n=e.lastElementChild,r=i(t.children,s),o=t.getBoundingClientRect(),l=r.getBoundingClientRect();n.style.width=`${l.width}px`,n.style.marginLeft=l.left-o.left+"px",null==n.style.transitionProperty&&requestAnimationFrame((()=>n.style.transitionProperty="margin, width"))}),[s]),t.jsxs(l,{refer:u,children:[t.jsx(d,{gap:h,children:r}),t.jsx(l,{transitionDuration:a,transitionTimingFunction:c,children:t.jsx(l,{width:g.width,height:null!=s?g.thickness:0,backgroundColor:g.backgroundColor,borderRadius:g.borderRadius,transitionDuration:a,transitionProperty:"height",transitionTimingFunction:c,margin:"0 auto"})})]})},e.Vertical=function({children:r,index:s,style:o,duration:a,curve:d,gap:h}){const u=n.useRef(null),g=Object.assign(Object.assign({},e.defualtStyle),o);return console.assert(s>=0,"The index of TabNavigation cannot be negative."),console.assert(s!=1/0,"The index of TabNavigation cannot be infinity."),n.useLayoutEffect((()=>{if(null==s)return;const e=u.current,t=e.lastElementChild,n=e.firstElementChild,r=i(t.children,s),o=t.getBoundingClientRect(),l=r.getBoundingClientRect();n.style.height=`${l.height}px`,n.style.marginTop=l.top-o.top+"px",null==n.style.transitionProperty&&requestAnimationFrame((()=>n.style.transitionProperty="margin, height"))}),[s]),t.jsxs(l,{display:"flex",refer:u,children:[t.jsx(l,{display:"flex",alignItems:"center",transitionDuration:a,transitionTimingFunction:d,children:t.jsx(l,{width:null!=s?g.thickness:0,height:g.width,backgroundColor:g.backgroundColor,borderRadius:g.borderRadius,transitionDuration:a,transitionProperty:"width",transitionTimingFunction:d})}),t.jsx(c,{gap:h,children:r})]})}}(e.TabNavigation||(e.TabNavigation={})),function(e){e.h1=function(n){return n=Object.assign(Object.assign({},n),{type:"h1"}),t.jsx(e,Object.assign({},n))},e.h2=function(n){return n=Object.assign(Object.assign({},n),{type:"h2"}),t.jsx(e,Object.assign({},n))},e.h3=function(n){return n=Object.assign(Object.assign({},n),{type:"h3"}),t.jsx(e,Object.assign({},n))},e.h4=function(n){return n=Object.assign(Object.assign({},n),{type:"h4"}),t.jsx(e,Object.assign({},n))},e.h5=function(n){return n=Object.assign(Object.assign({},n),{type:"h5"}),t.jsx(e,Object.assign({},n))},e.h6=function(n){return n=Object.assign(Object.assign({},n),{type:"h6"}),t.jsx(e,Object.assign({},n))},e.a=function(n){return n=Object.assign(Object.assign({},n),{type:"a"}),t.jsx(e,Object.assign({},n))},e.p=function(n){return n=Object.assign(Object.assign({},n),{type:"p"}),t.jsx(e,Object.assign({},n))},e.span=function(n){return n=Object.assign(Object.assign({},n),{type:"span"}),t.jsx(e,Object.assign({},n))}}(h||(h={})),addEventListener("DOMContentLoaded",(()=>o.instance.initialize())),e.AnimatedPage=function({duration:e,children:t}){return t},e.AnimatedSize=function({children:e,duration:i,curve:r,sizeTolerance:s}){const o=n.useRef(null),c=n.useRef(null),d=n.useRef(null),h=()=>o.current,u=()=>h().firstElementChild;return n.useLayoutEffect((()=>{const e=a.intrinsicSizeOf(u());c.current=e,d.current=e}),[]),n.useLayoutEffect((()=>{const e=h(),t=u();t.firstChild.ontransitionend=e=>{e.stopPropagation()};{e.style.width=null,e.style.height=null,t.style.minWidth=null,t.style.minHeight=null;const n=c.current,i=a.intrinsicSizeOf(t);if(n.width==i.width&&n.height==i.height)return;d.current=i,e.style.width=`${n.width}px`,e.style.height=`${n.height}px`,a.reflow(t),e.style.width=`${i.width}px`,e.style.height=`${i.height}px`,e.ontransitionend=()=>{e.style.width=null,e.style.height=null,t.style.minWidth=null,t.style.minHeight=null},t.style.minWidth=`${i.width}px`,t.style.minHeight=`${i.height}px`}const n=new ResizeObserver((()=>{c.current=a.intrinsicSizeOf(e)}));return n.observe(e,{box:"device-pixel-content-box"}),()=>n.disconnect()}),[e]),t.jsx(l,{refer:o,overflow:"hidden",transitionProperty:"width, height",transitionDuration:i,transitionTimingFunction:r,children:t.jsx("div",{children:e})})},e.Box=l,e.CanvasController=class{constructor(){this._listeners=[]}redraw(){this.animId&&cancelAnimationFrame(this.animId),this.animId=requestAnimationFrame((()=>{this.notifyListeners(),this.animId=null}))}addListener(e){console.assert(!this._listeners.includes(e),"Already exists a given listener."),this._listeners.push(e)}removeListener(e){console.assert(this._listeners.includes(e),"Already not exists a given listener."),this._listeners=this._listeners.filter((t=>t!=e))}notifyListeners(){this._listeners.forEach((e=>e()))}},e.Column=c,e.Constraint=class{constructor(e,t,n){if(this.min=e,this.max=t,this.value=n,e>t)throw new Error("A min-constraint must be less than a max-constraint.")}},e.ConstraintBuilder=function({constraints:n,builder:i}){return console.assert(0!=n.length,"A constraints of ConstraintBuilder must be one or more."),t.jsx(e.SizeBuilder.Viewport,{builder:(e,t)=>{var r;const s=null===(r=n.find((t=>t.min<=e&&t.max>=e)))||void 0===r?void 0:r.value;if(null==s)throw new Error("No constraint value exists for the current window size.");return i(s)}})},e.Expanded=function({direction:e,children:i}){const r=n.useRef(null);return n.useLayoutEffect((()=>{const t=r.current,n=t.parentElement,i=Array.from(n.children).filter((e=>e!=t));let s=0,o=0;const l=new ResizeObserver((r=>{const c=r[0].contentBoxSize[0].inlineSize,d=r[0].contentBoxSize[0].blockSize;if("vertical"==e&&o==d)return;if("horizontal"==e&&s==c)return;s=c,o=d;const h=i.reduce(((e,t)=>{const n=a.intrinsicSizeOf(t);return{width:e.width+n.width,height:e.height+n.height}}),{width:0,height:0});l.disconnect(),"vertical"==e?t.style.height=`calc(100% - ${h.height}px)`:t.style.minWidth=`calc(100% - ${h.width}px)`,requestAnimationFrame((()=>l.observe(n)))}));return l.observe(n),()=>l.disconnect()}),[]),t.jsx("div",{ref:r,children:i})},e.Grid=function(e){const n=Object.assign(Object.assign({},e),{gridTemplateColumns:Array.from({length:e.rowCount},(()=>"1fr")).join(" "),padding:e.padding,margin:e.margin});return null!=e.gap?n.gap=e.gap:null!=e.verticalGap?n.rowGap=e.verticalGap:null!=e.horizontalGap&&(n.columnGap=e.horizontalGap),t.jsx("widget-grid",{style:n,children:e.children})},e.Ignore=function({children:e}){return t.jsx("div",{className:"ignore",children:e})},e.Layout=function({before:e,behind:i,children:r}){const s=n.useRef(null);return n.useLayoutEffect((()=>{const t=s.current,n=new ResizeObserver((()=>{if(t.removeAttribute("style"),e){const n=t.getBoundingClientRect();e(n,t)}if(i){console.assert(null!=e,"[before] and [behind] must be used together.");const n=t.getBoundingClientRect();i(n,t)}}));return n.observe(t),()=>n.disconnect()}),[]),t.jsx("div",{ref:s,children:r})},e.Row=d,e.Text=h}));
//# sourceMappingURL=index.umd.js.map
