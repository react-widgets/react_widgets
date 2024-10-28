!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react/jsx-runtime"),require("react")):"function"==typeof define&&define.amd?define(["exports","react/jsx-runtime","react"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ReactWidgets={},e.React,e.React)}(this,(function(e,t,n){"use strict";e.ReactWidgets=void 0,(e.ReactWidgets||(e.ReactWidgets={})).REACT_WIDGETS_OPTION={};class i{constructor(){this.ids=new Map}static get instance(){var e;return null!==(e=this._instance)&&void 0!==e?e:this._instance=new i}set currentOption(t){e.ReactWidgets.REACT_WIDGETS_OPTION=t}getElementIdByTag(e){var t;const n=(null!==(t=this.ids.get(e))&&void 0!==t?t:0)+1;return e+this.ids.set(e,n).get(e)}optionValueOf(t){var n;return null!==(n=e.ReactWidgets.REACT_WIDGETS_OPTION[t])&&void 0!==n?n:i.default[t]}initialize(){const e=new CSSStyleSheet;this.optionValueOf("useStrict")&&e.insertRule("div { flex-shrink: 0; boxSizing: border-box; }"),this.initializeStyleSheet(e)}initializeStyleSheet(e){e.insertRule("widget-row { display: flex; flex-direction: row; }"),e.insertRule("widget-column { display: flex; flex-direction: column; }"),e.insertRule("widget-grid { display: grid; }"),e.insertRule("\n                scrollable-vertical {\n                    display: block;\n                    height: 100%;\n                    overflow-y: auto;\n                    overflow-x: clip;\n                }\n            "),e.insertRule("scrollable-vertical > * { height: max-content }"),e.insertRule("scrollable-vertical[scrollbar-none]::-webkit-scrollbar { display: none; }"),e.insertRule("\n                scrollable-horizontal {\n                    display: block;\n                    width: 100%;\n                    overflow-x: auto;\n                    overflow-y: clip;\n                }\n            "),e.insertRule("scrollable-horizontal > * { width: max-content; }"),e.insertRule("scrollable-horizontal[scrollbar-none]::-webkit-scrollbar { display: none; }"),e.insertRule("\n                widget-invisible[active] > * { display: none !important; }\n            "),document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}i.default={useStrict:!0,useDefaultMemo:!0,useWillChange:!0};class s{constructor(){this.listeners=[]}static get instance(){var e;return null!==(e=this._instance)&&void 0!==e?e:this._instance=new s}attach(e){console.assert(!this.listeners.includes(e),"Already exists a given listener in this binding."),this.listeners.push(e)}detach(e){console.assert(this.listeners.includes(e),"Already not exists a given listener in this binding."),this.listeners=this.listeners.filter((t=>t!=e))}rebuild(){console.assert(0!=this.listeners.length,"The `Application` component to detect events at top-level components is missing."),console.assert(1==this.listeners.length,"The `Application` component must exist as the only unique entity.")}}s._instance=null;const r=new Proxy(s,{get:()=>s.instance});var o;e.ApplicationEvent=void 0,(o=e.ApplicationEvent||(e.ApplicationEvent={}))[o.REBUILD=0]="REBUILD";const l=n.forwardRef(((e,n)=>{var i;const s=Object.assign({},e),r={id:e.id,className:e.className,children:e.children,ref:n,dangerouslySetInnerHTML:e.innerHTML?{__html:e.innerHTML}:void 0,onClick:e.onClick,onClickCapture:e.onClickCapture,onDoubleClick:e.onDoubleClick,onDoubleClickCapture:e.onDoubleClickCapture,onFocus:e.onFocus,onFocusCapture:e.onFocusCapture,onChange:e.onChange,onChangeCapture:e.onChangeCapture,onRateChange:e.onRateChange,onRateChangeCapture:e.onRateChangeCapture,onVolumeChange:e.onVolumeChange,onVolumeChangeCapture:e.onVolumeChangeCapture};return e.size&&(console.assert(null==e.width,"The width cannot be defined when defining the size."),console.assert(null==e.height,"The height cannot be defined when defining the size."),s.width=e.size,s.height=e.size),t.jsx(null!==(i=e.tagName)&&void 0!==i?i:"div",Object.assign(Object.assign({},r),{style:s}))}));Object.defineProperty(Element.prototype,"intrinsicSize",{get:function(){return a.intrinsicSizeOf(this)}}),Object.defineProperty(Element.prototype,"intrinsicWidth",{get:function(){return a.intrinsicSizeOf(this).width}}),Object.defineProperty(Element.prototype,"intrinsicHeight",{get:function(){return a.intrinsicSizeOf(this).height}}),Object.defineProperty(Element.prototype,"reflow",{get:function(){return a.reflow(this)}});class a{static reflow(e){e.getBoundingClientRect()}static intrinsicSizeOf(e,t){for(;e;){const n=null!=t?t:getComputedStyle(e),i=parseFloat(n.width),s=parseFloat(n.height),r=parseFloat(n.paddingLeft),o=parseFloat(n.paddingRight),l=parseFloat(n.paddingTop),a=parseFloat(n.paddingBottom),c=parseFloat(n.borderLeftWidth),d=parseFloat(n.borderRightWidth),h=parseFloat(n.borderTopWidth),u=parseFloat(n.borderBottomWidth),g=parseFloat(n.marginLeft),f=parseFloat(n.marginRight),p=parseFloat(n.marginTop),y=parseFloat(n.marginBottom),b=n.boxSizing,m=n.position;if("contents"===n.display){let t=Array.from(e.children).filter((e=>"STYLE"!==e.tagName&&"SCRIPT"!==e.tagName));if(1!==t.length)throw new Error("An element with a display property of 'contents' must have only one child to define its intrinsic size.");e=t[0];continue}let w=i,v=s;return"content-box"===b&&(w+=r+o+c+d,v+=l+a+h+u),"absolute"!==m&&"fixed"!==m&&(w+=g+f,v+=p+y),{width:w,height:v}}}}Object.defineProperty(Element.prototype,"intrinsicRect",{get:function(){return c.intrinsicOf(this)}});class c{static intrinsicOf(e,t){const n=null!=t?t:getComputedStyle(e),i=a.intrinsicSizeOf(e,n),s=e.getBoundingClientRect();return new DOMRect(s.x,s.y,i.width,i.height)}}var d;e.AnimatedFoldable=void 0,(d=e.AnimatedFoldable||(e.AnimatedFoldable={})).Horizontal=function({visible:e,overflow:s="hidden",duration:r,transition:o={opacity:!1},curve:c,children:d}){var h;const u=n.useRef(e),g=n.useRef(null),f=null!==(h=null==o?void 0:o.opacity)&&void 0!==h&&h,p=i.instance.optionValueOf("useWillChange")?f?"width, opacity":"width":void 0;return n.useLayoutEffect((()=>{const t=g.current,n=t.firstElementChild,i=a.intrinsicSizeOf(n),s=a.intrinsicSizeOf(t);if(n.ontransitionend=e=>{e.stopPropagation()},e==u.current)t.style.width=e?null:"0px",n.style.width=e?null:`${i.width}px`;else{t.style.width=null,n.style.width=null;const i=a.intrinsicSizeOf(t);f&&(t.style.opacity=e?"1":"0"),e?(t.style.width=`${s.width}px`,n.style.width=`${s.width}px`,a.reflow(t),t.style.width=`${i.width}px`,t.ontransitionend=()=>{t.style.width=null,n.style.width=null},n.style.width=`${i.width}px`):(t.style.width=`${s.width}px`,n.style.width="max-content",a.reflow(t),t.style.width="0px",t.ontransitionend=()=>null)}u.current=e}),[e]),t.jsx(l,{ref:g,opacity:f?e?"1":"0":void 0,overflow:s,willChange:p,transitionProperty:f?"width, opacity":"width",transitionDuration:r,transitionTimingFunction:c,children:t.jsx("div",{children:d})})},d.Vertical=function({visible:e,overflow:s="hidden",duration:r,transition:o={opacity:!1},curve:c,children:d}){var h;const u=n.useRef(e),g=n.useRef(null),f=null!==(h=null==o?void 0:o.opacity)&&void 0!==h&&h,p=i.instance.optionValueOf("useWillChange")?f?"height, opacity":"height":void 0;return n.useLayoutEffect((()=>{const t=g.current,n=t.firstElementChild,i=a.intrinsicSizeOf(n),s=a.intrinsicSizeOf(t);if(n.ontransitionend=e=>{e.stopPropagation()},e==u.current)t.style.height=e?null:"0px",n.style.height=e?null:`${i.height}px`;else{t.style.height=null,n.style.height=null;const i=a.intrinsicSizeOf(t);f&&(t.style.opacity=e?"1":"0"),e?(t.style.height=`${s.height}px`,n.style.height=`${s.height}px`,a.reflow(t),t.style.height=`${i.height}px`,t.ontransitionend=()=>{t.style.height=null,n.style.height=null},n.style.height=`${i.height}px`):(t.style.height=`${s.height}px`,n.style.height="max-content",a.reflow(t),t.style.height="0px",t.ontransitionend=null)}u.current=e}),[e]),t.jsx(l,{ref:g,opacity:f?e?"1":"0":void 0,overflow:s,willChange:p,transitionProperty:f?"height, opacity":"height",transitionDuration:r,transitionTimingFunction:c,children:t.jsx("div",{children:d})})};const h=n.memo((e=>e.children),((e,t)=>{var n;return(null===(n=t.active)||void 0===n||n)&&e.value===t.value}));function u({value:e,first:i,latest:s,children:r,onDetach:o,animation:a}){const c=n.useRef(null),d=n.useRef({width:0,height:0});console.assert(null!=a.duration||null!=a.fadeInDuration,"A given not exists a duration of the fade-in animation. therefore, you should defines the value of the `duration` or `fadeInDuration`."),console.assert(null!=a.duration||null!=a.fadeOutDuration,"A given not exists a duration of the fade-out animation. therefore, you should defines the value of the `duration` or `fadeOutDuration`."),n.useLayoutEffect((()=>{var e,t,n;const r=c.current;if(s){const t=null!==(e=a.fadeOutDuration)&&void 0!==e?e:a.duration;if(i)return;"string"==typeof a.fadeIn?r.style.animation=`${a.fadeIn} ${t}`:(r.style.transitionProperty=[...new Set([...Object.keys(a.fadeIn.from),...Object.keys(a.fadeIn.to)])].join(", "),Object.entries(a.fadeIn.from).forEach((([e,t])=>{r.style.setProperty(e,t)})),requestAnimationFrame((()=>{r.style.transitionDuration=t,Object.entries(a.fadeIn.to).forEach((([e,t])=>{r.style.setProperty(e,t)}))})))}else{const e=null!==(t=a.fadeOutDuration)&&void 0!==t?t:a.duration,i=d.current;r.style.width=`${i.width}px`,r.style.height=`${i.height}px`,"string"==typeof a.fadeOut?(r.style.animation=`${a.fadeOut} ${e}`,r.onanimationend=o):(r.style.transitionProperty=[...new Set([...Object.keys(null!==(n=a.fadeOut.from)&&void 0!==n?n:[]),...Object.keys(a.fadeOut.to)])].join(", "),r.style.transitionDuration=e,r.ontransitionend=o,null!=a.fadeOut.from&&Object.entries(a.fadeOut.from).forEach((([e,t])=>{r.style.setProperty(e,t)})),requestAnimationFrame((()=>{r.style.transitionDuration=e,Object.entries(a.fadeOut.to).forEach((([e,t])=>{r.style.setProperty(e,t)}))})))}}),[s]),n.useLayoutEffect((()=>{const e=new ResizeObserver((e=>{d.current={width:e[0].contentRect.width,height:e[0].contentRect.height}}));return e.observe(c.current),()=>e.disconnect()}),[]);const u=s?void 0:"absolute";return t.jsx(l,{ref:c,position:u,children:t.jsx(h,{active:!s,value:e,children:r})})}function g(e){const n=e.align,i=Object.assign(Object.assign({},e),{flexDirection:e.reverse?"column-reverse":void 0,flexWrap:e.wrap?"wrap":void 0});return e.size&&(console.assert(null==e.width,"The `width` cannot be defined when defining the `size`."),console.assert(null==e.height,"The `height` cannot be defined when defining the `size`."),i.width=e.size,i.height=e.size),e.paddingAndGap&&(console.assert(null==e.padding,"The `padding` cannot be defined when defining the `paddingAndGap`."),console.assert(null==e.gap,"The `gap` cannot be defined when defining the `paddingAndGap`."),i.padding=e.paddingAndGap,i.gap=e.paddingAndGap),"bottomCenter"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="end"):"bottomLeft"==n?(i.alignItems="start",i.alignContent="start",i.justifyContent="end"):"bottomRight"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="end"):"center"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="center"):"centerLeft"==n?(i.alignItems="start",i.alignContent="start",i.justifyContent="center"):"centerRight"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="center"):"topCenter"==n?(i.alignItems="center",i.alignContent="center"):"topLeft"==n?(i.alignItems="left",i.alignContent="left"):"topRight"==n?(i.alignItems="right",i.alignContent="right"):"spaceBetweenLeft"==n?i.justifyContent="space-between":"spaceBetweenCenter"==n?(i.alignContent="center",i.justifyContent="space-between"):"spaceBetweenRight"==n?(i.alignContent="end",i.justifyContent="space-between"):"spaceAroundLeft"==n?i.justifyContent="space-between":"spaceAroundCenter"==n?(i.alignContent="center",i.justifyContent="space-around"):"spaceAroundRight"==n?(i.alignContent="end",i.justifyContent="space-around"):"spaceEvenlyLeft"==n?i.justifyContent="space-evenly":"spaceEvenlyCenter"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="space-evenly"):"spaceEvenlyRight"==n&&(i.alignItems="end",i.alignContent="end",i.justifyContent="space-evenly"),t.jsx("widget-column",{className:e.className,style:i,children:e.children})}function f(e){const n=e.align,i=Object.assign(Object.assign({},e),{flexDirection:e.reverse?"row-reverse":void 0,flexWrap:e.wrap?"wrap":void 0});return e.size&&(console.assert(null==e.width,"The width cannot be defined when defining the size."),console.assert(null==e.height,"The height cannot be defined when defining the size."),i.width=e.size,i.height=e.size),e.paddingAndGap&&(console.assert(null==e.padding,"The padding cannot be defined when defining the paddingAndGap."),console.assert(null==e.gap,"The gap cannot be defined when defining the paddingAndGap."),i.padding=e.paddingAndGap,i.gap=e.paddingAndGap),"bottomCenter"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="center"):"bottomLeft"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="left"):"bottomRight"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="right"):"bottomSpaceBetween"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="space-between"):"bottomSpaceAround"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="space-around"):"bottomSpaceEvenly"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="space-evenly"):"center"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="center"):"centerLeft"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="left"):"centerRight"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="right"):"centerSpaceBetween"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="space-between"):"centerSpaceAround"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="space-around"):"centerSpaceEvenly"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="space-evenly"):"topCenter"==n?i.justifyContent="center":"topLeft"==n?i.justifyContent="left":"topRight"==n?i.justifyContent="right":"topSpaceBetween"==n?i.justifyContent="space-between":"topSpaceAround"==n?i.justifyContent="space-around":"topSpaceEvenly"==n&&(i.justifyContent="space-evenly"),t.jsx("widget-row",{className:e.className,style:i,children:e.children})}var p,y;e.Canvas=void 0,function(e){function i({contextType:e,width:i,height:s,onDraw:r,controller:o}){const l=n.useRef(null);return n.useLayoutEffect((()=>{const t=l.current,n=new ResizeObserver((()=>{t.style.width=i,t.style.height=s;const n=a.intrinsicSizeOf(t);t.setAttribute("width",`${n.width}px`),t.setAttribute("height",`${n.height}px`),r(t.getContext(e))}));return n.observe(t),()=>{n.disconnect()}}),[]),n.useLayoutEffect((()=>{const t=l.current;o&&(o.active=t,o.addListener((()=>r(t.getContext(e)))))}),[o]),t.jsx("canvas",{ref:l})}e.Context2D=function({width:e,height:n,onDraw:s,controller:r}){return t.jsx(i,{contextType:"2d",width:e,height:n,onDraw:s,controller:r})},e.Foundation=i}(e.Canvas||(e.Canvas={})),e.SizeBuilder=void 0,(p=e.SizeBuilder||(e.SizeBuilder={})).Viewport=function({builder:e}){const i=()=>({width:window.innerWidth,height:window.innerHeight}),[s,r]=n.useState(i());return n.useLayoutEffect((()=>{const e=()=>r(i());return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),t.jsx(t.Fragment,{children:e(s.width,s.height)})},p.Parent=function({builder:e}){};e.Scrollable=void 0,(y=e.Scrollable||(e.Scrollable={})).Vertical=function(e){var n;const i=!(null===(n=e.scrollbar)||void 0===n||n);return t.jsx("scrollable-vertical",Object.assign({children:e.children},i&&{"scrollbar-none":""}))},y.Horizontal=function(e){var n;const i=!(null===(n=e.scrollbar)||void 0===n||n);return t.jsx("scrollable-horizontal",Object.assign({children:e.children},i&&{"scrollbar-none":""}))};const b=n.createContext(null);class m{constructor(){this.listeners=[]}addListener(e){console.assert(!this.listeners.includes(e),"Already exists a given listener in this binding"),this.listeners.push(e)}removeListener(e){console.assert(this.listeners.includes(e),"Already not exists a given listener in this binding"),this.listeners=this.listeners.filter((t=>t!=e))}notifyListeners(e){console.assert(0!=this.listeners.length,"Not exists a listener to notify in this `SizedCononectionBinding` instance. Therefore, you need to add the 'SizedSlaver' component to the subtree of the 'SizedConnection' component."),this.listeners.forEach((t=>t(e)))}}function w(e){const n=Object.assign(Object.assign({},e),{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:e.maxLine,textAlign:e.alignment,overflow:"hidden"});switch(e.type){case"h1":return t.jsx("h1",{style:n,children:e.children});case"h2":return t.jsx("h2",{style:n,children:e.children});case"h3":return t.jsx("h3",{style:n,children:e.children});case"h4":return t.jsx("h4",{style:n,children:e.children});case"h5":return t.jsx("h5",{style:n,children:e.children});case"h6":return t.jsx("h6",{style:n,children:e.children});case"a":return t.jsx("a",{style:n,children:e.children});case"p":return t.jsx("p",{style:n,children:e.children});case"span":return t.jsx("span",{style:n,children:e.children});default:return t.jsx("div",{style:n,children:e.children})}}e.TabNavigation=void 0,function(e){function i(e,t){const n=e.length;if(t>n)throw new Error(`The index of TabNavigation is overflowed. (given: ${t} > length: ${n})`);let i=0;for(let n=0;n<=t;n++)"ignore"==e[n+i].className&&i++;return e[t+i]}e.DEFUALT_STYLE={backgroundColor:"black",borderRadius:void 0,width:"100%",thickness:"3px"},e.Horizontal=function({children:s,index:r,style:o,duration:a,curve:d,gap:h}){const u=n.useRef(r),g=n.useRef(null),p=Object.assign(Object.assign({},e.DEFUALT_STYLE),o);return console.assert(r>=0,"The index of TabNavigation cannot be negative."),console.assert(r!=1/0,"The index of TabNavigation cannot be infinity."),n.useLayoutEffect((()=>{const e=g.current,t=e.firstElementChild,n=e.lastElementChild,s=i(t.children,r);r!=u.current&&(n.style.transitionProperty="margin, width",n.style.transitionDuration=a,n.style.transitionTimingFunction=d,u.current=r);const o=c.intrinsicOf(t),l=c.intrinsicOf(s);n.style.width=`${l.width}px`,n.style.marginLeft=l.left-o.left+"px",n.ontransitionend=()=>{n.style.removeProperty("transition-property"),n.style.removeProperty("transition-duration")}}),[r]),t.jsxs(l,{ref:g,children:[t.jsx(f,{gap:h,children:s}),t.jsx(l,{children:t.jsx(l,{width:p.width,height:null!=r?p.thickness:0,backgroundColor:p.backgroundColor,borderRadius:p.borderRadius,transitionDuration:a,transitionProperty:"height",transitionTimingFunction:d,margin:"0 auto"})})]})},e.Vertical=function({children:s,index:r,style:o,duration:a,curve:d,gap:h}){const u=n.useRef(r),f=n.useRef(null),p=Object.assign(Object.assign({},e.DEFUALT_STYLE),o);return console.assert(r>=0,"The index of TabNavigation cannot be negative."),console.assert(r!=1/0,"The index of TabNavigation cannot be infinity."),n.useLayoutEffect((()=>{const e=f.current,t=e.lastElementChild,n=e.firstElementChild,s=i(t.children,r);r!=u.current&&(n.style.transitionProperty="margin, height",n.style.transitionDuration=a,n.style.transitionTimingFunction=d,u.current=r);const o=c.intrinsicOf(t),l=c.intrinsicOf(s);n.style.height=`${l.height}px`,n.style.marginTop=l.top-o.top+"px",n.ontransitionend=()=>{n.style.removeProperty("transition-property"),n.style.removeProperty("transition-duration")}}),[r]),t.jsxs(l,{display:"flex",ref:f,children:[t.jsx(l,{display:"flex",alignItems:"center",children:t.jsx(l,{width:null!=r?p.thickness:0,height:p.width,backgroundColor:p.backgroundColor,borderRadius:p.borderRadius,transitionDuration:a,transitionProperty:"width",transitionTimingFunction:d})}),t.jsx(g,{gap:h,children:s})]})}}(e.TabNavigation||(e.TabNavigation={})),function(e){e.h1=function(n){return n=Object.assign(Object.assign({},n),{type:"h1"}),t.jsx(e,Object.assign({},n))},e.h2=function(n){return n=Object.assign(Object.assign({},n),{type:"h2"}),t.jsx(e,Object.assign({},n))},e.h3=function(n){return n=Object.assign(Object.assign({},n),{type:"h3"}),t.jsx(e,Object.assign({},n))},e.h4=function(n){return n=Object.assign(Object.assign({},n),{type:"h4"}),t.jsx(e,Object.assign({},n))},e.h5=function(n){return n=Object.assign(Object.assign({},n),{type:"h5"}),t.jsx(e,Object.assign({},n))},e.h6=function(n){return n=Object.assign(Object.assign({},n),{type:"h6"}),t.jsx(e,Object.assign({},n))},e.a=function(n){return n=Object.assign(Object.assign({},n),{type:"a"}),t.jsx(e,Object.assign({},n))},e.p=function(n){return n=Object.assign(Object.assign({},n),{type:"p"}),t.jsx(e,Object.assign({},n))},e.span=function(n){return n=Object.assign(Object.assign({},n),{type:"span"}),t.jsx(e,Object.assign({},n))}}(w||(w={})),addEventListener("DOMContentLoaded",(()=>i.instance.initialize())),e.AnimatedSize=function({children:e,overflow:s="clip",duration:r,curve:o}){const c=n.useRef(null),d=n.useRef(null),h=n.useRef(null),u=i.instance.optionValueOf("useWillChange")?"width, height":void 0,g=()=>c.current;return g()&&(d.current=a.intrinsicSizeOf(g())),n.useLayoutEffect((()=>{const e=g(),t=g().firstElementChild;t.ontransitionend=e=>{e.stopPropagation()};{if(e.style.display="contents",t.style.display="contents",e.style.width=null,t.style.width=null,e.style.height=null,t.style.height=null,!d.current)return;const n=d.current,i=a.intrinsicSizeOf(t);if(n.width==i.width&&n.height==i.height)return;h.current=i,e.style.display=null,e.style.width=`${n.width}px`,e.style.height=`${n.height}px`,a.reflow(t),e.style.width=`${i.width}px`,e.style.height=`${i.height}px`,e.ontransitionend=()=>{e.style.display="contents",t.style.display="contents",e.style.width=null,e.style.height=null,t.style.minWidth=null,t.style.minWidth=null},t.style.display=null,t.style.minWidth=`${i.width}px`,t.style.minHeight=`${i.height}px`}}),[e]),t.jsx(l,{ref:c,overflow:s,willChange:u,transitionProperty:"width, height",transitionDuration:r,transitionTimingFunction:o,children:t.jsx("div",{children:e})})},e.AnimatedTransition=function({value:e,style:i,animation:s,children:r}){const o=null!=e?e:r,l=n.useRef(0),a=n.useRef([{key:o,id:l.current}]),c=a.current,[d,h]=n.useState(0);return 0!=c.length&&c[c.length-1].key!==o&&c.push({key:o,id:l.current+=1}),t.jsx("div",{style:Object.assign({position:"relative"},i),children:c.map(((e,n)=>t.jsx(u,{value:e.key,first:0==e.id,latest:n==c.length-1,children:r,animation:s,onDetach:()=>{a.current=a.current.filter((t=>t.id!==e.id)),h((e=>e+1))}},e.id)))})},e.App=r,e.ApplicationBinding=s,e.Box=l,e.CanvasController=class{constructor(){this._listeners=[]}redraw(){this.animId&&cancelAnimationFrame(this.animId),this.animId=requestAnimationFrame((()=>{this.notifyListeners(),this.animId=null}))}addListener(e){console.assert(!this._listeners.includes(e),"Already exists a given listener."),this._listeners.push(e)}removeListener(e){console.assert(this._listeners.includes(e),"Already not exists a given listener."),this._listeners=this._listeners.filter((t=>t!=e))}notifyListeners(){this._listeners.forEach((e=>e()))}},e.Column=g,e.ConditionalRender=h,e.Constraint=class{constructor(e,t,n){if(this.min=e,this.max=t,this.value=n,e>t)throw new Error("A min-constraint must be less than a max-constraint.")}},e.ConstraintBuilder=function({constraints:s,usememo:r,builder:o}){return console.assert(0!=s.length,"A constraints of ConstraintBuilder must be one or more."),t.jsx(e.SizeBuilder.Viewport,{builder:(e,t)=>{var l;const a=null===(l=s.find((t=>t.min<=e&&t.max>=e)))||void 0===l?void 0:l.value;if(null==a)throw new Error("No constraint value exists for the current window size.");return(null!=r?r:i.instance.optionValueOf("useDefaultMemo"))?n.useMemo((()=>o(a)),[a]):o(a)}})},e.Expanded=function({direction:e,children:i}){const s=n.useRef(null);return n.useLayoutEffect((()=>{const t=s.current,n=t.parentElement,i=Array.from(n.children).filter((e=>e!=t));let r=0,o=0;const l=new ResizeObserver((s=>{const c=s[0].contentBoxSize[0].inlineSize,d=s[0].contentBoxSize[0].blockSize;if("vertical"==e&&o==d)return;if("horizontal"==e&&r==c)return;r=c,o=d;const h=i.reduce(((e,t)=>{const n=a.intrinsicSizeOf(t);return{width:e.width+n.width,height:e.height+n.height}}),{width:0,height:0});l.disconnect(),"vertical"==e?t.style.height=`calc(100% - ${h.height}px)`:t.style.minWidth=`calc(100% - ${h.width}px)`,requestAnimationFrame((()=>l.observe(n)))}));return l.observe(n),()=>l.disconnect()}),[]),t.jsx("div",{ref:s,children:i})},e.Grid=function(e){const n=Object.assign(Object.assign({},e),{gridTemplateColumns:Array.from({length:e.rowCount},(()=>"1fr")).join(" "),padding:e.padding,margin:e.margin});return null!=e.gap?n.gap=e.gap:null!=e.verticalGap?n.rowGap=e.verticalGap:null!=e.horizontalGap&&(n.columnGap=e.horizontalGap),t.jsx("widget-grid",{style:n,children:e.children})},e.Ignore=function({children:e}){return t.jsx("div",{className:"ignore",children:e})},e.Invisible=function({size:e,width:i,height:s,children:r,threshold:o=1e-10}){const l=n.useRef(null);return n.useLayoutEffect((()=>{const e=l.current,t=new IntersectionObserver((t=>{for(const n of t)0==n.intersectionRatio?e.setAttribute("active",""):e.removeAttribute("active")}),{threshold:o});return t.observe(e),()=>t.disconnect()}),[]),n.useLayoutEffect((()=>{const t=l.current,n=null!=i?i:e,r=null!=s?s:e,o=new ResizeObserver((()=>{if(null!=n&&null!=r)t.style.width=n,t.style.height=r;else{const e=a.intrinsicSizeOf(t.firstElementChild);t.style.width=`${null!=n?n:e.width}px`,t.style.height=`${null!=r?r:e.height}px`}}));return o.observe(t.firstElementChild,{box:"border-box"}),()=>{o.disconnect()}}),[e,i,s]),t.jsx("widget-invisible",{ref:l,children:r})},e.Layout=function({before:e,behind:i,children:s}){const r=n.useRef(null);return n.useLayoutEffect((()=>{const t=r.current,n=new ResizeObserver((()=>{if(t.removeAttribute("style"),e){const n=t.getBoundingClientRect();e(n,t)}if(i){console.assert(null!=e,"[before] and [behind] must be used together.");const n=t.getBoundingClientRect();i(n,t)}}));return n.observe(t),()=>n.disconnect()}),[]),t.jsx("div",{ref:r,children:s})},e.ReactWidgetsBinding=i,e.Row=f,e.SizedConnection=function({children:e}){const[i,s]=n.useState(new m);return t.jsx(b.Provider,{value:i,children:e})},e.SizedConnectionBinding=m,e.SizedConnectionContext=b,e.SizedMaster=function(e){const i=n.useContext(b),s=n.useRef(null);return console.assert(null!=i,"The `SizedConnection` component does not exist among the ancestor components of this `SizedMaster` component, Therefore you need to insert a `SizedConnection` component into ancestor tree of the `SizedMaster` component."),n.useLayoutEffect((()=>{const e=s.current.firstElementChild,t=new ResizeObserver((()=>{null==i||i.notifyListeners(a.intrinsicSizeOf(e))}));return t.observe(e,{box:"border-box"}),()=>t.disconnect()}),[]),t.jsx(l,Object.assign({ref:s},e))},e.SizedSlaver=function({onLayout:e,children:i}){const s=n.useContext(b),r=n.useRef(null);return n.useLayoutEffect((()=>{const t=t=>{e(t,r.current.firstElementChild)};return s.addListener(t),()=>s.removeListener(t)}),[]),t.jsx(l,{ref:r,display:"contents",children:i})},e.Text=w}));
//# sourceMappingURL=index.umd.js.map
