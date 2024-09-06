!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react/jsx-runtime"),require("react")):"function"==typeof define&&define.amd?define(["exports","react/jsx-runtime","react"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ReactWidgets={},e.React,e.React)}(this,(function(e,t,n){"use strict";var i,s,r;e.ReactWidgets=void 0,(e.ReactWidgets||(e.ReactWidgets={})).REACT_WIDGETS_OPTION={};class l{constructor(){}static get instance(){var e;return null!==(e=this._instance)&&void 0!==e?e:this._instance=new l}set currentOption(t){e.ReactWidgets.REACT_WIDGETS_OPTION=t}optionValueOf(t){var n;return null!==(n=e.ReactWidgets.REACT_WIDGETS_OPTION[t])&&void 0!==n?n:l.default[t]}initialize(){if(this.optionValueOf("useStrict")){const e=new CSSStyleSheet;e.insertRule("div { flex-shrink: 0; }"),document.adoptedStyleSheets=[e]}}}function o(e){const n=Object.assign(Object.assign({},{flexShrink:0,boxSizing:"border-box"}),e);return e.size&&(console.assert(null==e.width,"The width cannot be defined when defining the size."),console.assert(null==e.height,"The height cannot be defined when defining the size."),n.width=e.size,n.height=e.size),t.jsx("div",{ref:e.refer,className:e.className,tabIndex:e.focusable?0:null,style:n,children:e.children})}l.default={useStrict:!0};class a{static reflow(e){e.getBoundingClientRect()}static measureSize(e){const t=getComputedStyle(e);return{width:parseFloat(t.width),height:parseFloat(t.height)}}}function c(e){const n=Object.assign(Object.assign({},{display:"flex",overflow:"hidden",flexShrink:0,boxSizing:"border-box"}),e);return t.jsx("div",{ref:e.refer,className:e.className,style:n,children:e.children})}e.AnimatedFoldable=void 0,(i=e.AnimatedFoldable||(e.AnimatedFoldable={})).Horizontal=function({visible:e,overflow:i="hidden",duration:s,curve:r,children:l}){const c=n.useRef(e),d=n.useRef(null);return n.useLayoutEffect((()=>{const t=d.current,n=t.firstElementChild,i=a.measureSize(t);if(n.ontransitionend=e=>{e.stopPropagation()},e==c.current)t.style.width=e?null:"0px";else{t.style.width=null,n.style.width=null;const s=a.measureSize(t);e?(t.style.width=`${i.width}px`,n.style.width=`${i.width}px`,a.reflow(t),t.style.width=`${s.width}px`,t.ontransitionend=()=>{t.style.width=null,n.style.width=null},n.style.width=`${s.width}px`):(t.style.width=`${i.width}px`,n.style.width=`${s.width}px`,a.reflow(t),t.style.width="0px",t.ontransitionend=null)}c.current=e}),[e]),t.jsx(o,{refer:d,overflow:i,transitionProperty:"width",transitionDuration:s,transitionTimingFunction:r,children:t.jsx("div",{children:l})})},i.Vertical=function({visible:e,overflow:i="hidden",duration:s,curve:r,children:l}){const c=n.useRef(e),d=n.useRef(null);return n.useLayoutEffect((()=>{const t=d.current,n=t.firstElementChild,i=a.measureSize(t);if(n.ontransitionend=e=>{e.stopPropagation()},e==c.current)t.style.height=e?null:"0px";else{t.style.height=null,n.style.height=null;const s=a.measureSize(t);e?(t.style.height=`${i.height}px`,n.style.height=`${i.height}px`,a.reflow(t),t.style.height=`${s.height}px`,t.ontransitionend=()=>{t.style.height=null,n.style.height=null},n.style.height=`${s.height}px`):(t.style.height=`${i.height}px`,n.style.height=`${s.height}px`,a.reflow(t),t.style.height="0px",t.ontransitionend=null)}c.current=e}),[e]),t.jsx(o,{refer:d,overflow:i,transitionProperty:"height",transitionDuration:s,transitionTimingFunction:r,children:t.jsx("div",{children:l})})},e.AnimatedReplace=void 0,(e.AnimatedReplace||(e.AnimatedReplace={})).Horizontal=function({index:e,duration:i,children:s}){const r=s.length,l=n.useRef(null);return console.assert(e>=0,"A value of [index] cannot be negative."),console.assert(e<r,"A value of [index] cannot be bigger than a given item-count."),n.useLayoutEffect((()=>{const t=l.current,n=Array.from(t.children),i=n[e];n.filter(((t,n)=>n!=e));for(let e=0;e<n.length;e++)n[e].style.minWidth="max-content";t.style.removeProperty("width"),t.style.removeProperty("height");const s=i.getBoundingClientRect();t.style.width=`${s.width}px`,t.style.height=`${s.height}px`}),[e]),t.jsx(o,{refer:l,display:"flex",children:s.map((e=>t.jsx("div",{children:e})))})};function d(n){const i=Object.assign(Object.assign({},n),{display:"flex",flexDirection:null!=n.reverse?"column-reverse":"column",flexWrap:null!=n.wrap?"wrap":void 0,gap:n.gap});n.size&&(console.assert(null==n.width,"The width cannot be defined when defining the size."),console.assert(null==n.height,"The height cannot be defined when defining the size."),i.width=n.size,i.height=n.size),n.bottomCenter?(i.alignItems="center",i.alignContent="center",i.justifyContent="end"):n.bottomLeft?(i.alignItems="start",i.alignContent="start",i.justifyContent="end"):n.bottomRight?(i.alignItems="end",i.alignContent="end",i.justifyContent="end"):n.center?(i.alignItems="center",i.alignContent="center",i.justifyContent="center"):n.centerLeft?(i.alignItems="start",i.alignContent="start",i.justifyContent="center"):n.centerRight?(i.alignItems="end",i.alignContent="end",i.justifyContent="center"):n.topCenter?(i.alignItems="center",i.alignContent="center"):n.topLeft?(i.alignItems="left",i.alignContent="left"):n.topRight?(i.alignItems="right",i.alignContent="right"):n.spaceBetweenLeft?i.justifyContent="space-between":n.spaceBetweenCenter?(i.alignContent="center",i.justifyContent="space-between"):n.spaceBetweenRight?(i.alignContent="end",i.justifyContent="space-between"):n.spaceAroundLeft?i.justifyContent="space-between":n.spaceAroundCenter?(i.alignContent="center",i.justifyContent="space-around"):n.spaceAroundRight?(i.alignContent="end",i.justifyContent="space-around"):n.spaceEvenlyLeft?i.justifyContent="space-evenly":n.spaceEvenlyCenter?(i.alignItems="center",i.alignContent="center",i.justifyContent="space-evenly"):n.spaceEvenlyRight&&(i.alignItems="end",i.alignContent="end",i.justifyContent="space-evenly");const s=t.jsx("div",{className:n.className,style:i,children:n.children});return n.scrollable?t.jsx(e.Scrollable.Vertical,{children:s}):s}function h(n){const i=Object.assign(Object.assign({},n),{display:"flex",flexDirection:null!=n.reverse?"row-reverse":"row",flexWrap:null!=n.wrap?"wrap":void 0,gap:n.gap});n.size&&(console.assert(null==n.width,"The width cannot be defined when defining the size."),console.assert(null==n.height,"The height cannot be defined when defining the size."),i.width=n.size,i.height=n.size),n.bottomCenter?(i.alignItems="end",i.alignContent="end",i.justifyContent="center"):n.bottomLeft?(i.alignItems="end",i.alignContent="end",i.justifyContent="left"):n.bottomRight?(i.alignItems="end",i.alignContent="end",i.justifyContent="right"):n.bottomSpaceBetween?(i.alignItems="end",i.alignContent="end",i.justifyContent="space-between"):n.bottomSpaceAround?(i.alignItems="end",i.alignContent="end",i.justifyContent="space-around"):n.bottomSpaceEvenly?(i.alignItems="end",i.alignContent="end",i.justifyContent="space-evenly"):n.center?(i.alignItems="center",i.alignContent="center",i.justifyContent="center"):n.centerLeft?(i.alignItems="center",i.alignContent="center",i.justifyContent="left"):n.centerRight?(i.alignItems="center",i.alignContent="center",i.justifyContent="right"):n.centerSpaceBetween?(i.alignItems="center",i.alignContent="center",i.justifyContent="space-between"):n.centerSpaceAround?(i.alignItems="center",i.alignContent="center",i.justifyContent="space-around"):n.centerSpaceEvenly?(i.alignItems="center",i.alignContent="center",i.justifyContent="space-evenly"):n.topCenter?i.justifyContent="center":n.topLeft?i.justifyContent="left":n.topRight?i.justifyContent="right":n.topSpaceBetween?i.justifyContent="space-between":n.topSpaceAround?i.justifyContent="space-around":n.topSpaceEvenly&&(i.justifyContent="space-evenly");const s=t.jsx("div",{className:n.className,style:i,children:n.children});return n.scrollable?t.jsx(e.Scrollable.Horizontal,{children:s}):s}e.Canvas=void 0,function(e){function i({contextType:e,width:i,height:s,onDraw:r,controller:l}){const o=n.useRef(null);return n.useLayoutEffect((()=>{const t=o.current,n=new ResizeObserver((()=>{t.style.width=i,t.style.height=s;const n=a.measureSize(t);t.setAttribute("width",`${n.width}px`),t.setAttribute("height",`${n.height}px`),r(t.getContext(e))}));return n.observe(t),()=>{n.disconnect()}}),[]),n.useLayoutEffect((()=>{const t=o.current;l&&(l.active=t,l.addListener((()=>r(t.getContext(e)))))}),[l]),t.jsx("canvas",{ref:o})}e.Context2D=function({width:e,height:n,onDraw:s,controller:r}){return t.jsx(i,{contextType:"2d",width:e,height:n,onDraw:s,controller:r})},e.Foundation=i}(e.Canvas||(e.Canvas={})),e.Scrollable=void 0,(s=e.Scrollable||(e.Scrollable={})).Horizontal=function(e){const n={flexShrink:0,marginLeft:null!=e.center||null!=e.right?"auto":void 0,marginRight:null!=e.center?"auto":void 0};return t.jsx("div",{style:{display:"flex",width:"100%",flexShrink:"1",overflowX:"auto"},children:t.jsx("div",{style:n,children:e.children})})},s.Vertical=function({children:e}){return t.jsx("div",{style:{display:"flex",height:"100%",flexShrink:"1",overflowY:"auto"},children:t.jsx("div",{style:{width:"100%",height:"100%",maxHeight:"max-content"},children:e})})},e.SizeBuilder=void 0,(r=e.SizeBuilder||(e.SizeBuilder={})).Viewport=function({builder:e}){const i=()=>({width:window.innerWidth,height:window.innerHeight}),[s,r]=n.useState(i());return n.useLayoutEffect((()=>{const e=()=>r(i());return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),t.jsx(t.Fragment,{children:e(s.width,s.height)})},r.Parent=function({builder:e}){};function u({children:e}){return t.jsx("div",{style:{width:"100%",height:"100%",overflow:"hidden"},children:e})}function g(e){const n=Object.assign(Object.assign({},e),{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:e.maxLine,textAlign:e.alignment,overflow:"hidden"});switch(e.type){case"h1":return t.jsx("h1",{style:n,children:e.children});case"h2":return t.jsx("h2",{style:n,children:e.children});case"h3":return t.jsx("h3",{style:n,children:e.children});case"h4":return t.jsx("h4",{style:n,children:e.children});case"h5":return t.jsx("h5",{style:n,children:e.children});case"h6":return t.jsx("h6",{style:n,children:e.children});case"a":return t.jsx("a",{style:n,children:e.children});case"p":return t.jsx("p",{style:n,children:e.children});case"span":return t.jsx("span",{style:n,children:e.children});default:return t.jsx("div",{style:n,children:e.children})}}!function(e){e.Horizontal=function({children:e}){return t.jsx("div",{style:{width:"100%",overflow:"hidden"},children:e})},e.Vertical=function({children:e}){return t.jsx("div",{style:{height:"100%",overflow:"hidden"},children:e})}}(u||(u={})),e.TabNavigation=void 0,function(e){function i(e,t){const n=e.length;if(t>n)throw new Error(`The index of TabNavigation is overflowed. (given: ${t} > length: ${n})`);let i=0;for(let n=0;n<=t;n++)"ignore"==e[n+i].className&&i++;return e[t+i]}e.defualtStyle={backgroundColor:"black",width:"100%",thickness:"3px"},e.Horizontal=function({children:s,index:r,style:l,duration:a,curve:c,gap:d}){const u=n.useRef(null),g=Object.assign(Object.assign({},e.defualtStyle),l);return console.assert(r>=0,"The index of TabNavigation cannot be negative."),console.assert(r!=1/0,"The index of TabNavigation cannot be infinity."),n.useLayoutEffect((()=>{if(null==r)return;const e=u.current,t=e.firstElementChild,n=e.lastElementChild,s=i(t.children,r),l=t.getBoundingClientRect(),o=s.getBoundingClientRect();n.style.width=`${o.width}px`,n.style.marginLeft=o.left-l.left+"px"}),[r]),t.jsxs(o,{refer:u,children:[t.jsx(h,{gap:d,children:s}),t.jsx(o,{transitionDuration:a,transitionProperty:"margin, width",transitionTimingFunction:c,children:t.jsx(o,{width:g.width,height:null!=r?g.thickness:0,backgroundColor:g.backgroundColor,borderRadius:g.borderRadius,transitionDuration:a,transitionProperty:"height",transitionTimingFunction:c,margin:"0 auto"})})]})},e.Vertical=function({children:s,index:r,style:l,duration:a,curve:c,gap:h}){const u=n.useRef(null),g=Object.assign(Object.assign({},e.defualtStyle),l);return console.assert(r>=0,"The index of TabNavigation cannot be negative."),console.assert(r!=1/0,"The index of TabNavigation cannot be infinity."),n.useLayoutEffect((()=>{if(null==r)return;const e=u.current,t=e.lastElementChild,n=e.firstElementChild,s=i(t.children,r),l=t.getBoundingClientRect(),o=s.getBoundingClientRect();n.style.height=`${o.height}px`,n.style.marginTop=o.top-l.top+"px"}),[r]),t.jsxs(o,{display:"flex",refer:u,children:[t.jsx(o,{display:"flex",alignItems:"center",transitionDuration:a,transitionProperty:"margin, height",transitionTimingFunction:c,children:t.jsx(o,{width:null!=r?g.thickness:0,height:g.width,backgroundColor:g.backgroundColor,borderRadius:g.borderRadius,transitionDuration:a,transitionProperty:"width",transitionTimingFunction:c})}),t.jsx(d,{gap:h,children:s})]})}}(e.TabNavigation||(e.TabNavigation={})),function(e){e.h1=function(n){return n=Object.assign(Object.assign({},n),{type:"h1"}),t.jsx(e,Object.assign({},n))},e.h2=function(n){return n=Object.assign(Object.assign({},n),{type:"h2"}),t.jsx(e,Object.assign({},n))},e.h3=function(n){return n=Object.assign(Object.assign({},n),{type:"h3"}),t.jsx(e,Object.assign({},n))},e.h4=function(n){return n=Object.assign(Object.assign({},n),{type:"h4"}),t.jsx(e,Object.assign({},n))},e.h5=function(n){return n=Object.assign(Object.assign({},n),{type:"h5"}),t.jsx(e,Object.assign({},n))},e.h6=function(n){return n=Object.assign(Object.assign({},n),{type:"h6"}),t.jsx(e,Object.assign({},n))},e.a=function(n){return n=Object.assign(Object.assign({},n),{type:"a"}),t.jsx(e,Object.assign({},n))},e.p=function(n){return n=Object.assign(Object.assign({},n),{type:"p"}),t.jsx(e,Object.assign({},n))},e.span=function(n){return n=Object.assign(Object.assign({},n),{type:"span"}),t.jsx(e,Object.assign({},n))}}(g||(g={})),addEventListener("DOMContentLoaded",(()=>l.instance.initialize())),e.AnimatedPage=function({duration:e,children:t}){return t},e.AnimatedSize=function({children:e,duration:i,curve:s,sizeTolerance:r}){const l=n.useRef(null),o=n.useRef(null),d=n.useRef(null),h=()=>l.current,u=()=>h().firstElementChild;return n.useLayoutEffect((()=>{const e=a.measureSize(u());o.current=e,d.current=e}),[]),n.useLayoutEffect((()=>{const e=h(),t=u();t.firstChild.ontransitionend=e=>{e.stopPropagation()};{e.style.width=null,e.style.height=null,t.style.minWidth=null,t.style.minHeight=null;const n=o.current,i=a.measureSize(t);if(n.width==i.width&&n.height==i.height)return;d.current=i,e.style.width=`${n.width}px`,e.style.height=`${n.height}px`,a.reflow(t),e.style.width=`${i.width}px`,e.style.height=`${i.height}px`,e.ontransitionend=()=>{e.style.width=null,e.style.height=null,t.style.minWidth=null,t.style.minHeight=null},t.style.minWidth=`${i.width}px`,t.style.minHeight=`${i.height}px`}const n=new ResizeObserver((()=>{o.current=a.measureSize(e)}));return n.observe(e,{box:"device-pixel-content-box"}),()=>n.disconnect()}),[e]),t.jsx(c,{refer:l,transitionProperty:"width, height",transitionDuration:i,transitionTimingFunction:s,children:t.jsx("div",{children:e})})},e.Box=o,e.CanvasController=class{constructor(){this._listeners=[]}redraw(){this.animId&&cancelAnimationFrame(this.animId),this.animId=requestAnimationFrame((()=>{this.notifyListeners(),this.animId=null}))}addListener(e){console.assert(!this._listeners.includes(e),"Already exists a given listener."),this._listeners.push(e)}removeListener(e){console.assert(this._listeners.includes(e),"Already not exists a given listener."),this._listeners=this._listeners.filter((t=>t!=e))}notifyListeners(){this._listeners.forEach((e=>e()))}},e.ClipBox=c,e.Column=d,e.Constraint=class{constructor(e,t,n){if(this.min=e,this.max=t,this.value=n,e>t)throw new Error("A min-constraint must be less than a max-constraint.")}},e.ConstraintBuilder=function({constraints:n,builder:i}){return console.assert(0!=n.length,"A constraints of ConstraintBuilder must be one or more."),t.jsx(e.SizeBuilder.Viewport,{builder:(e,t)=>{var s;const r=null===(s=n.find((t=>t.min<=e&&t.max>=e)))||void 0===s?void 0:s.value;if(null==r)throw new Error("No constraint value exists for the current window size.");return i(r)}})},e.Expanded=u,e.Grid=function(e){const n=Object.assign(Object.assign({},e),{display:"grid",gridTemplateColumns:Array.from({length:e.rowCount},(()=>"1fr")).join(" "),padding:e.padding,margin:e.margin});return null!=e.gap?n.gap=e.gap:null!=e.verticalGap?n.rowGap=e.verticalGap:null!=e.horizontalGap&&(n.columnGap=e.horizontalGap),t.jsx("div",{style:n,children:e.children})},e.Ignore=function({children:e}){return t.jsx("div",{className:"ignore",children:e})},e.Layout=function({before:e,behind:i,children:s}){const r=n.useRef(null);return n.useLayoutEffect((()=>{const t=r.current,n=new ResizeObserver((()=>{if(t.removeAttribute("style"),e){const n=t.getBoundingClientRect();e(n,t)}if(i){console.assert(null!=e,"[before] and [behind] must be used together.");const n=t.getBoundingClientRect();i(n,t)}}));return n.observe(t),()=>n.disconnect()}),[]),t.jsx("div",{ref:r,children:s})},e.Row=h,e.Text=g}));
//# sourceMappingURL=index.umd.js.map
