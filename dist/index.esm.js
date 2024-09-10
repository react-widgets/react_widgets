import{jsx as e,Fragment as t,jsxs as n}from"react/jsx-runtime";import{useRef as i,useLayoutEffect as r,useState as s}from"react";var o,l,a,c,h,d,u;!function(e){e.REACT_WIDGETS_OPTION={}}(o||(o={}));class g{constructor(){}static get instance(){var e;return null!==(e=this._instance)&&void 0!==e?e:this._instance=new g}set currentOption(e){o.REACT_WIDGETS_OPTION=e}optionValueOf(e){var t;return null!==(t=o.REACT_WIDGETS_OPTION[e])&&void 0!==t?t:g.default[e]}initialize(){const e=new CSSStyleSheet;this.optionValueOf("useStrict")&&e.insertRule("div { flex-shrink: 0; boxSizing: border-box; }"),this.initializeStyleSheet(e)}initializeStyleSheet(e){e.insertRule("widget-row { display: flex; flex-direction: row; }"),e.insertRule("widget-column { display: flex; flex-direction: column; }"),e.insertRule("widget-grid { display: grid; }"),e.insertRule("\n                scrollable-vertical {\n                    display: block;\n                    height: 100%;\n                    overflow: auto;\n                }\n            "),e.insertRule("scrollable-vertical > * { height: max-content }"),e.insertRule("\n                scrollable-horizontal {\n                    display: block;\n                    width: 100%;\n                    overflow: auto;\n                }\n            "),e.insertRule("scrollable-horizontal > * { width: max-content; }"),document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}function f(t){const n=t;return t.size&&(console.assert(null==t.width,"The width cannot be defined when defining the size."),console.assert(null==t.height,"The height cannot be defined when defining the size."),n.width=t.size,n.height=t.size),e("div",{ref:t.refer,className:t.className,tabIndex:t.focusable?0:null,style:n,children:t.children})}g.default={useStrict:!0};class p{static reflow(e){e.getBoundingClientRect()}static intrinsicSizeOf(e){for(;e;){const t=getComputedStyle(e),n=parseFloat(t.width),i=parseFloat(t.height),r=parseFloat(t.paddingLeft),s=parseFloat(t.paddingRight),o=parseFloat(t.paddingTop),l=parseFloat(t.paddingBottom),a=parseFloat(t.borderLeft),c=parseFloat(t.borderRight),h=parseFloat(t.borderTop),d=parseFloat(t.borderBottom),u=t.boxSizing;if("contents"==t.display){let t=Array.from(e.children).filter((e=>"STYLE"!=e.tagName&&"SCRIPT"!=e.tagName));if(1!=t.length)throw new Error("An element with a display property of contents must have only one child to define its intrinsic size.");e=t[0];continue}let g=n,f=i;return"content-box"==u&&(g+=r+s+a+c,f+=o+l+h+d),{width:g,height:f}}}}function y({duration:e,children:t}){return t}function w({children:t,duration:n,curve:s,sizeTolerance:o}){const l=i(null),a=i(null),c=i(null),h=()=>l.current,d=()=>h().firstElementChild;return r((()=>{const e=p.intrinsicSizeOf(d());a.current=e,c.current=e}),[]),r((()=>{const e=h(),t=d();t.firstChild.ontransitionend=e=>{e.stopPropagation()};{e.style.width=null,e.style.height=null,t.style.minWidth=null,t.style.minHeight=null;const n=a.current,i=p.intrinsicSizeOf(t);if(n.width==i.width&&n.height==i.height)return;c.current=i,e.style.width=`${n.width}px`,e.style.height=`${n.height}px`,p.reflow(t),e.style.width=`${i.width}px`,e.style.height=`${i.height}px`,e.ontransitionend=()=>{e.style.width=null,e.style.height=null,t.style.minWidth=null,t.style.minHeight=null},t.style.minWidth=`${i.width}px`,t.style.minHeight=`${i.height}px`}const n=new ResizeObserver((()=>{a.current=p.intrinsicSizeOf(e)}));return n.observe(e,{box:"device-pixel-content-box"}),()=>n.disconnect()}),[t]),e(f,{refer:l,overflow:"hidden",transitionProperty:"width, height",transitionDuration:n,transitionTimingFunction:s,children:e("div",{children:t})})}!function(t){t.Horizontal=function({visible:t,overflow:n="hidden",duration:s,transition:o={opacity:!1},curve:l,children:a}){var c;const h=i(t),d=i(null),u=null!==(c=null==o?void 0:o.opacity)&&void 0!==c&&c;return r((()=>{const e=d.current,n=e.firstElementChild,i=p.intrinsicSizeOf(n),r=p.intrinsicSizeOf(e);if(n.ontransitionend=e=>{e.stopPropagation()},t==h.current)e.style.width=t?null:"0px",n.style.width=t?null:`${i.width}px`;else{e.style.width=null,n.style.width=null;const i=p.intrinsicSizeOf(e);u&&(e.style.opacity=t?"1":"0"),t?(e.style.width=`${r.width}px`,n.style.width=`${r.width}px`,p.reflow(e),e.style.width=`${i.width}px`,e.ontransitionend=()=>{e.style.width=null,n.style.width=null},n.style.width=`${i.width}px`):(e.style.width=`${r.width}px`,n.style.width=`${i.width}px`,p.reflow(e),e.style.width="0px",e.ontransitionend=null)}h.current=t}),[t]),e(f,{refer:d,opacity:u?t?"1":"0":void 0,overflow:n,transitionProperty:u?"width, opacity":"width",transitionDuration:s,transitionTimingFunction:l,children:e("div",{children:a})})},t.Vertical=function({visible:t,overflow:n="hidden",duration:s,transition:o={opacity:!1},curve:l,children:a}){var c;const h=i(t),d=i(null),u=null!==(c=null==o?void 0:o.opacity)&&void 0!==c&&c;return r((()=>{const e=d.current,n=e.firstElementChild,i=p.intrinsicSizeOf(n),r=p.intrinsicSizeOf(e);if(n.ontransitionend=e=>{e.stopPropagation()},t==h.current)e.style.height=t?null:"0px",n.style.height=t?null:`${i.height}px`;else{e.style.height=null,n.style.height=null;const i=p.intrinsicSizeOf(e);u&&(e.style.opacity=t?"1":"0"),t?(e.style.height=`${r.height}px`,n.style.height=`${r.height}px`,p.reflow(e),e.style.height=`${i.height}px`,e.ontransitionend=()=>{e.style.height=null,n.style.height=null},n.style.height=`${i.height}px`):(e.style.height=`${r.height}px`,n.style.height=`${i.height}px`,p.reflow(e),e.style.height="0px",e.ontransitionend=null)}h.current=t}),[t]),e(f,{refer:d,opacity:u?t?"1":"0":void 0,overflow:n,transitionProperty:u?"height, opacity":"height",transitionDuration:s,transitionTimingFunction:l,children:e("div",{children:a})})}}(l||(l={})),function(t){t.Horizontal=function({index:t,duration:n,children:s}){const o=s.length,l=i(null);return console.assert(t>=0,"A value of [index] cannot be negative."),console.assert(t<o,"A value of [index] cannot be bigger than a given item-count."),r((()=>{const e=l.current,n=Array.from(e.children),i=n[t];n.filter(((e,n)=>n!=t));for(let e=0;e<n.length;e++)n[e].style.minWidth="max-content";e.style.removeProperty("width"),e.style.removeProperty("height");const r=i.getBoundingClientRect();e.style.width=`${r.width}px`,e.style.height=`${r.height}px`}),[t]),e(f,{refer:l,display:"flex",children:s.map((t=>e("div",{children:t})))})}}(a||(a={}));class b{constructor(){this._listeners=[]}redraw(){this.animId&&cancelAnimationFrame(this.animId),this.animId=requestAnimationFrame((()=>{this.notifyListeners(),this.animId=null}))}addListener(e){console.assert(!this._listeners.includes(e),"Already exists a given listener."),this._listeners.push(e)}removeListener(e){console.assert(this._listeners.includes(e),"Already not exists a given listener."),this._listeners=this._listeners.filter((t=>t!=e))}notifyListeners(){this._listeners.forEach((e=>e()))}}function m(t){const n=t.align,i=Object.assign(Object.assign({},t),{flexDirection:t.reverse?"column-reverse":void 0,flexWrap:t.wrap?"wrap":void 0,gap:t.gap});return t.size&&(console.assert(null==t.width,"The width cannot be defined when defining the size."),console.assert(null==t.height,"The height cannot be defined when defining the size."),i.width=t.size,i.height=t.size),"bottomCenter"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="end"):"bottomLeft"==n?(i.alignItems="start",i.alignContent="start",i.justifyContent="end"):"bottomRight"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="end"):"center"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="center"):"centerLeft"==n?(i.alignItems="start",i.alignContent="start",i.justifyContent="center"):"centerRight"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="center"):"topCenter"==n?(i.alignItems="center",i.alignContent="center"):"topLeft"==n?(i.alignItems="left",i.alignContent="left"):"topRight"==n?(i.alignItems="right",i.alignContent="right"):"spaceBetweenLeft"==n?i.justifyContent="space-between":"spaceBetweenCenter"==n?(i.alignContent="center",i.justifyContent="space-between"):"spaceBetweenRight"==n?(i.alignContent="end",i.justifyContent="space-between"):"spaceAroundLeft"==n?i.justifyContent="space-between":"spaceAroundCenter"==n?(i.alignContent="center",i.justifyContent="space-around"):"spaceAroundRight"==n?(i.alignContent="end",i.justifyContent="space-around"):"spaceEvenlyLeft"==n?i.justifyContent="space-evenly":"spaceEvenlyCenter"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="space-evenly"):"spaceEvenlyRight"==n&&(i.alignItems="end",i.alignContent="end",i.justifyContent="space-evenly"),e("widget-column",{className:t.className,style:i,children:t.children})}function v(t){const n=t.align,i=Object.assign(Object.assign({},t),{flexDirection:t.reverse?"row-reverse":void 0,flexWrap:t.wrap?"wrap":void 0,gap:t.gap});return t.size&&(console.assert(null==t.width,"The width cannot be defined when defining the size."),console.assert(null==t.height,"The height cannot be defined when defining the size."),i.width=t.size,i.height=t.size),"bottomCenter"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="center"):"bottomLeft"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="left"):"bottomRight"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="right"):"bottomSpaceBetween"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="space-between"):"bottomSpaceAround"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="space-around"):"bottomSpaceEvenly"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="space-evenly"):"center"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="center"):"centerLeft"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="left"):"centerRight"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="right"):"centerSpaceBetween"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="space-between"):"centerSpaceAround"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="space-around"):"centerSpaceEvenly"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="space-evenly"):"topCenter"==n?i.justifyContent="center":"topLeft"==n?i.justifyContent="left":"topRight"==n?i.justifyContent="right":"topSpaceBetween"==n?i.justifyContent="space-between":"topSpaceAround"==n?i.justifyContent="space-around":"topSpaceEvenly"==n&&(i.justifyContent="space-evenly"),e("widget-row",{className:t.className,style:i,children:t.children})}!function(t){function n({contextType:t,width:n,height:s,onDraw:o,controller:l}){const a=i(null);return r((()=>{const e=a.current,i=new ResizeObserver((()=>{e.style.width=n,e.style.height=s;const i=p.intrinsicSizeOf(e);e.setAttribute("width",`${i.width}px`),e.setAttribute("height",`${i.height}px`),o(e.getContext(t))}));return i.observe(e),()=>{i.disconnect()}}),[]),r((()=>{const e=a.current;l&&(l.active=e,l.addListener((()=>o(e.getContext(t)))))}),[l]),e("canvas",{ref:a})}t.Context2D=function({width:t,height:i,onDraw:r,controller:s}){return e(n,{contextType:"2d",width:t,height:i,onDraw:r,controller:s})},t.Foundation=n}(c||(c={})),function(n){n.Viewport=function({builder:n}){const i=()=>({width:window.innerWidth,height:window.innerHeight}),[o,l]=s(i());return r((()=>{const e=()=>l(i());return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),e(t,{children:n(o.width,o.height)})},n.Parent=function({builder:e}){}}(h||(h={}));class C{constructor(e,t,n){if(this.min=e,this.max=t,this.value=n,e>t)throw new Error("A min-constraint must be less than a max-constraint.")}}function x({constraints:t,builder:n}){return console.assert(0!=t.length,"A constraints of ConstraintBuilder must be one or more."),e(h.Viewport,{builder:(e,i)=>{var r;const s=null===(r=t.find((t=>t.min<=e&&t.max>=e)))||void 0===r?void 0:r.value;if(null==s)throw new Error("No constraint value exists for the current window size.");return n(s)}})}function j({direction:t,children:n}){const s=i(null);return r((()=>{const e=s.current,n=e.parentElement,i=Array.from(n.children).filter((t=>t!=e));let r=0,o=0;const l=new ResizeObserver((s=>{const a=s[0].contentBoxSize[0].inlineSize,c=s[0].contentBoxSize[0].blockSize;if("vertical"==t&&o==c)return;if("horizontal"==t&&r==a)return;r=a,o=c;const h=i.reduce(((e,t)=>{const n=p.intrinsicSizeOf(t);return{width:e.width+n.width,height:e.height+n.height}}),{width:0,height:0});l.disconnect(),"vertical"==t?e.style.height=`calc(100% - ${h.height}px)`:e.style.minWidth=`calc(100% - ${h.width}px)`,requestAnimationFrame((()=>l.observe(n)))}));return l.observe(n),()=>l.disconnect()}),[]),e("div",{ref:s,children:n})}function O(t){const n=Object.assign(Object.assign({},t),{gridTemplateColumns:Array.from({length:t.rowCount},(()=>"1fr")).join(" "),padding:t.padding,margin:t.margin});return null!=t.gap?n.gap=t.gap:null!=t.verticalGap?n.rowGap=t.verticalGap:null!=t.horizontalGap&&(n.columnGap=t.horizontalGap),e("widget-grid",{style:n,children:t.children})}function z({children:t}){return e("div",{className:"ignore",children:t})}function S({before:t,behind:n,children:s}){const o=i(null);return r((()=>{const e=o.current,i=new ResizeObserver((()=>{if(e.removeAttribute("style"),t){const n=e.getBoundingClientRect();t(n,e)}if(n){console.assert(null!=t,"[before] and [behind] must be used together.");const i=e.getBoundingClientRect();n(i,e)}}));return i.observe(e),()=>i.disconnect()}),[]),e("div",{ref:o,children:s})}function T(t){const n=Object.assign(Object.assign({},t),{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:t.maxLine,textAlign:t.alignment,overflow:"hidden"});switch(t.type){case"h1":return e("h1",{style:n,children:t.children});case"h2":return e("h2",{style:n,children:t.children});case"h3":return e("h3",{style:n,children:t.children});case"h4":return e("h4",{style:n,children:t.children});case"h5":return e("h5",{style:n,children:t.children});case"h6":return e("h6",{style:n,children:t.children});case"a":return e("a",{style:n,children:t.children});case"p":return e("p",{style:n,children:t.children});case"span":return e("span",{style:n,children:t.children});default:return e("div",{style:n,children:t.children})}}!function(t){t.Vertical=function({children:t}){return e("scrollable-vertical",{children:t})},t.Horizontal=function({children:t}){return e("scrollable-horizontal",{children:t})}}(d||(d={})),function(t){function s(e,t){const n=e.length;if(t>n)throw new Error(`The index of TabNavigation is overflowed. (given: ${t} > length: ${n})`);let i=0;for(let n=0;n<=t;n++)"ignore"==e[n+i].className&&i++;return e[t+i]}t.defualtStyle={backgroundColor:"black",width:"100%",thickness:"3px"},t.Horizontal=function({children:o,index:l,style:a,duration:c,curve:h,gap:d}){const u=i(null),g=Object.assign(Object.assign({},t.defualtStyle),a);return console.assert(l>=0,"The index of TabNavigation cannot be negative."),console.assert(l!=1/0,"The index of TabNavigation cannot be infinity."),r((()=>{if(null==l)return;const e=u.current,t=e.firstElementChild,n=e.lastElementChild,i=s(t.children,l),r=t.getBoundingClientRect(),o=i.getBoundingClientRect();n.style.width=`${o.width}px`,n.style.marginLeft=o.left-r.left+"px"}),[l]),n(f,{refer:u,children:[e(v,{gap:d,children:o}),e(f,{transitionDuration:c,transitionProperty:"margin, width",transitionTimingFunction:h,children:e(f,{width:g.width,height:null!=l?g.thickness:0,backgroundColor:g.backgroundColor,borderRadius:g.borderRadius,transitionDuration:c,transitionProperty:"height",transitionTimingFunction:h,margin:"0 auto"})})]})},t.Vertical=function({children:o,index:l,style:a,duration:c,curve:h,gap:d}){const u=i(null),g=Object.assign(Object.assign({},t.defualtStyle),a);return console.assert(l>=0,"The index of TabNavigation cannot be negative."),console.assert(l!=1/0,"The index of TabNavigation cannot be infinity."),r((()=>{if(null==l)return;const e=u.current,t=e.lastElementChild,n=e.firstElementChild,i=s(t.children,l),r=t.getBoundingClientRect(),o=i.getBoundingClientRect();n.style.height=`${o.height}px`,n.style.marginTop=o.top-r.top+"px"}),[l]),n(f,{display:"flex",refer:u,children:[e(f,{display:"flex",alignItems:"center",transitionDuration:c,transitionProperty:"margin, height",transitionTimingFunction:h,children:e(f,{width:null!=l?g.thickness:0,height:g.width,backgroundColor:g.backgroundColor,borderRadius:g.borderRadius,transitionDuration:c,transitionProperty:"width",transitionTimingFunction:h})}),e(m,{gap:d,children:o})]})}}(u||(u={})),function(t){t.h1=function(n){return n=Object.assign(Object.assign({},n),{type:"h1"}),e(t,Object.assign({},n))},t.h2=function(n){return n=Object.assign(Object.assign({},n),{type:"h2"}),e(t,Object.assign({},n))},t.h3=function(n){return n=Object.assign(Object.assign({},n),{type:"h3"}),e(t,Object.assign({},n))},t.h4=function(n){return n=Object.assign(Object.assign({},n),{type:"h4"}),e(t,Object.assign({},n))},t.h5=function(n){return n=Object.assign(Object.assign({},n),{type:"h5"}),e(t,Object.assign({},n))},t.h6=function(n){return n=Object.assign(Object.assign({},n),{type:"h6"}),e(t,Object.assign({},n))},t.a=function(n){return n=Object.assign(Object.assign({},n),{type:"a"}),e(t,Object.assign({},n))},t.p=function(n){return n=Object.assign(Object.assign({},n),{type:"p"}),e(t,Object.assign({},n))},t.span=function(n){return n=Object.assign(Object.assign({},n),{type:"span"}),e(t,Object.assign({},n))}}(T||(T={})),addEventListener("DOMContentLoaded",(()=>g.instance.initialize()));export{l as AnimatedFoldable,y as AnimatedPage,a as AnimatedReplace,w as AnimatedSize,f as Box,c as Canvas,b as CanvasController,m as Column,C as Constraint,x as ConstraintBuilder,j as Expanded,O as Grid,z as Ignore,S as Layout,o as ReactWidgets,v as Row,d as Scrollable,h as SizeBuilder,u as TabNavigation,T as Text};
//# sourceMappingURL=index.esm.js.map
