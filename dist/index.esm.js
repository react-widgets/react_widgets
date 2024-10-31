import{jsx as e,Fragment as t,jsxs as n}from"react/jsx-runtime";import{forwardRef as i,useRef as r,useLayoutEffect as s,memo as o,useState as l,useMemo as a,createContext as c,useContext as d}from"react";var h;!function(e){e.REACT_WIDGETS_OPTION={}}(h||(h={}));class u{constructor(){this.ids=new Map}static get instance(){var e;return null!==(e=this._instance)&&void 0!==e?e:this._instance=new u}set currentOption(e){h.REACT_WIDGETS_OPTION=e}getElementIdByTag(e){var t;const n=(null!==(t=this.ids.get(e))&&void 0!==t?t:0)+1;return e+this.ids.set(e,n).get(e)}optionValueOf(e){var t;return null!==(t=h.REACT_WIDGETS_OPTION[e])&&void 0!==t?t:u.default[e]}initialize(){const e=new CSSStyleSheet;this.optionValueOf("useStrict")&&e.insertRule("div { flex-shrink: 0; boxSizing: border-box; }"),this.initializeStyleSheet(e)}initializeStyleSheet(e){e.insertRule("widget-row { display: flex; flex-direction: row; }"),e.insertRule("widget-column { display: flex; flex-direction: column; }"),e.insertRule("widget-grid { display: grid; }"),e.insertRule("\n                scrollable-vertical {\n                    display: block;\n                    height: 100%;\n                    overflow-y: auto;\n                    overflow-x: clip;\n                }\n            "),e.insertRule("scrollable-vertical > * { height: max-content }"),e.insertRule("scrollable-vertical[scrollbar-none]::-webkit-scrollbar { display: none; }"),e.insertRule("\n                scrollable-horizontal {\n                    display: block;\n                    width: 100%;\n                    overflow-x: auto;\n                    overflow-y: clip;\n                }\n            "),e.insertRule("scrollable-horizontal > * { width: max-content; }"),e.insertRule("scrollable-horizontal[scrollbar-none]::-webkit-scrollbar { display: none; }"),e.insertRule("\n                widget-invisible[active] > * { display: none !important; }\n            "),document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}u.default={useStrict:!0,useDefaultMemo:!0,useWillChange:!0};class g{constructor(){this.listeners=[]}static get instance(){var e;return null!==(e=this._instance)&&void 0!==e?e:this._instance=new g}attach(e){console.assert(!this.listeners.includes(e),"Already exists a given listener in this binding."),this.listeners.push(e)}detach(e){console.assert(this.listeners.includes(e),"Already not exists a given listener in this binding."),this.listeners=this.listeners.filter((t=>t!=e))}rebuild(){console.assert(0!=this.listeners.length,"The `Application` component to detect events at top-level components is missing."),console.assert(1==this.listeners.length,"The `Application` component must exist as the only unique entity.")}}g._instance=null;const f=new Proxy(g,{get:()=>g.instance});var p;!function(e){e[e.REBUILD=0]="REBUILD"}(p||(p={}));const y=i(((t,n)=>{var i;const r=Object.assign({},t),s={id:t.id,className:t.className,children:t.children,ref:n,dangerouslySetInnerHTML:t.innerHTML?{__html:t.innerHTML}:void 0,onClick:t.onClick,onClickCapture:t.onClickCapture,onDoubleClick:t.onDoubleClick,onDoubleClickCapture:t.onDoubleClickCapture,onFocus:t.onFocus,onFocusCapture:t.onFocusCapture,onChange:t.onChange,onChangeCapture:t.onChangeCapture,onRateChange:t.onRateChange,onRateChangeCapture:t.onRateChangeCapture,onVolumeChange:t.onVolumeChange,onVolumeChangeCapture:t.onVolumeChangeCapture};return t.size&&(console.assert(null==t.width,"The width cannot be defined when defining the size."),console.assert(null==t.height,"The height cannot be defined when defining the size."),r.width=t.size,r.height=t.size),e(null!==(i=t.tagName)&&void 0!==i?i:"div",Object.assign(Object.assign({},s),{style:r}))}));Object.defineProperty(Element.prototype,"intrinsicSize",{get:function(){return b.intrinsicSizeOf(this)}}),Object.defineProperty(Element.prototype,"intrinsicWidth",{get:function(){return b.intrinsicSizeOf(this).width}}),Object.defineProperty(Element.prototype,"intrinsicHeight",{get:function(){return b.intrinsicSizeOf(this).height}}),Object.defineProperty(Element.prototype,"reflow",{get:function(){return b.reflow(this)}});class b{static reflow(e){e.getBoundingClientRect()}static intrinsicSizeOf(e,t){for(;e;){const n=null!=t?t:getComputedStyle(e),i=parseFloat(n.width),r=parseFloat(n.height),s=parseFloat(n.paddingLeft),o=parseFloat(n.paddingRight),l=parseFloat(n.paddingTop),a=parseFloat(n.paddingBottom),c=parseFloat(n.borderLeftWidth),d=parseFloat(n.borderRightWidth),h=parseFloat(n.borderTopWidth),u=parseFloat(n.borderBottomWidth),g=parseFloat(n.marginLeft),f=parseFloat(n.marginRight),p=parseFloat(n.marginTop),y=parseFloat(n.marginBottom),b=n.boxSizing,w=n.position;if("contents"===n.display){let t=Array.from(e.children).filter((e=>"STYLE"!==e.tagName&&"SCRIPT"!==e.tagName));if(1!==t.length)throw new Error("An element with a display property of 'contents' must have only one child to define its intrinsic size.");e=t[0];continue}let m=i,v=r;return"content-box"===b&&(m+=s+o+c+d,v+=l+a+h+u),"absolute"!==w&&"fixed"!==w&&(m+=g+f,v+=p+y),{width:m,height:v}}}}Object.defineProperty(Element.prototype,"intrinsicRect",{get:function(){return w.intrinsicOf(this)}});class w{static intrinsicOf(e,t){const n=null!=t?t:getComputedStyle(e),i=b.intrinsicSizeOf(e,n),r=e.getBoundingClientRect();return new DOMRect(r.x,r.y,i.width,i.height)}}var m;!function(t){t.Horizontal=function({visible:t,overflow:n="hidden",duration:i,transition:o={opacity:!1},curve:l,children:a}){var c;const d=r(t),h=r(null),g=null!==(c=null==o?void 0:o.opacity)&&void 0!==c&&c,f=u.instance.optionValueOf("useWillChange")?g?"width, opacity":"width":void 0;return s((()=>{const e=h.current,n=e.firstElementChild,i=b.intrinsicSizeOf(n),r=b.intrinsicSizeOf(e);if(n.ontransitionend=e=>{e.stopPropagation()},t==d.current)e.style.width=t?null:"0px",n.style.width=t?null:`${i.width}px`;else{e.style.width=null,n.style.width=null;const i=b.intrinsicSizeOf(e);g&&(e.style.opacity=t?"1":"0"),t?(e.style.width=`${r.width}px`,n.style.width=`${r.width}px`,b.reflow(e),e.style.width=`${i.width}px`,e.ontransitionend=()=>{e.style.width=null,n.style.width=null},n.style.width=`${i.width}px`):(e.style.width=`${r.width}px`,n.style.width="max-content",b.reflow(e),e.style.width="0px",e.ontransitionend=()=>null)}d.current=t}),[t]),e(y,{ref:h,opacity:g?t?"1":"0":void 0,overflow:n,willChange:f,transitionProperty:g?"width, opacity":"width",transitionDuration:i,transitionTimingFunction:l,children:e("div",{children:a})})},t.Vertical=function({visible:t,overflow:n="hidden",duration:i,transition:o={opacity:!1},curve:l,children:a}){var c;const d=r(t),h=r(null),g=null!==(c=null==o?void 0:o.opacity)&&void 0!==c&&c,f=u.instance.optionValueOf("useWillChange")?g?"height, opacity":"height":void 0;return s((()=>{const e=h.current,n=e.firstElementChild,i=b.intrinsicSizeOf(n),r=b.intrinsicSizeOf(e);if(n.ontransitionend=e=>{e.stopPropagation()},t==d.current)e.style.height=t?null:"0px",n.style.height=t?null:`${i.height}px`;else{e.style.height=null,n.style.height=null;const i=b.intrinsicSizeOf(e);g&&(e.style.opacity=t?"1":"0"),t?(e.style.height=`${r.height}px`,n.style.height=`${r.height}px`,b.reflow(e),e.style.height=`${i.height}px`,e.ontransitionend=()=>{e.style.height=null,n.style.height=null},n.style.height=`${i.height}px`):(e.style.height=`${r.height}px`,n.style.height="max-content",b.reflow(e),e.style.height="0px",e.ontransitionend=null)}d.current=t}),[t]),e(y,{ref:h,opacity:g?t?"1":"0":void 0,overflow:n,willChange:f,transitionProperty:g?"height, opacity":"height",transitionDuration:i,transitionTimingFunction:l,children:e("div",{children:a})})}}(m||(m={}));const v=o((e=>e.children),((e,t)=>{var n;return(null===(n=t.active)||void 0===n||n)&&e.value===t.value}));function C({value:t,style:n,animation:i,children:s}){const o=null!=t?t:s,a=r(0),c=r([{key:o,id:a.current}]),d=c.current,[h,u]=l(0);return 0!=d.length&&d[d.length-1].key!==o&&d.push({key:o,id:a.current+=1}),e("div",{style:Object.assign({position:"relative"},n),children:d.map(((t,n)=>e(O,{value:t.key,first:0==t.id,latest:n==d.length-1,children:s,animation:i,onDetach:()=>{c.current=c.current.filter((e=>e.id!==t.id)),u((e=>e+1))}},t.id)))})}function O({value:t,first:n,latest:i,children:o,onDetach:l,animation:a}){const c=r(null),d=r({width:0,height:0});console.assert(null!=a.duration||null!=a.fadeInDuration,"A given not exists a duration of the fade-in animation. therefore, you should defines the value of the `duration` or `fadeInDuration`."),console.assert(null!=a.duration||null!=a.fadeOutDuration,"A given not exists a duration of the fade-out animation. therefore, you should defines the value of the `duration` or `fadeOutDuration`."),s((()=>{var e,t,r;const s=c.current;if(i){const t=null!==(e=a.fadeOutDuration)&&void 0!==e?e:a.duration;if(n)return;"string"==typeof a.fadeIn?s.style.animation=`${a.fadeIn} ${t}`:(s.style.transitionProperty=[...new Set([...Object.keys(a.fadeIn.from),...Object.keys(a.fadeIn.to)])].join(", "),Object.entries(a.fadeIn.from).forEach((([e,t])=>{s.style.setProperty(e,t)})),requestAnimationFrame((()=>{s.style.transitionDuration=t,Object.entries(a.fadeIn.to).forEach((([e,t])=>{s.style.setProperty(e,t)}))})))}else{const e=null!==(t=a.fadeOutDuration)&&void 0!==t?t:a.duration,n=d.current;s.style.width=`${n.width}px`,s.style.height=`${n.height}px`,"string"==typeof a.fadeOut?(s.style.animation=`${a.fadeOut} ${e}`,s.onanimationend=l):(s.style.transitionProperty=[...new Set([...Object.keys(null!==(r=a.fadeOut.from)&&void 0!==r?r:[]),...Object.keys(a.fadeOut.to)])].join(", "),s.style.transitionDuration=e,s.ontransitionend=l,null!=a.fadeOut.from&&Object.entries(a.fadeOut.from).forEach((([e,t])=>{s.style.setProperty(e,t)})),requestAnimationFrame((()=>{s.style.transitionDuration=e,Object.entries(a.fadeOut.to).forEach((([e,t])=>{s.style.setProperty(e,t)}))})))}}),[i]),s((()=>{const e=new ResizeObserver((e=>{d.current={width:e[0].contentRect.width,height:e[0].contentRect.height}}));return e.observe(c.current),()=>e.disconnect()}),[]);return e(y,{ref:c,position:i?void 0:"absolute",children:e(v,{active:!i,value:t,children:o})})}function x({children:t,overflow:n="clip",duration:i,curve:o}){const l=r(null),a=r(null),c=r(null),d=u.instance.optionValueOf("useWillChange")?"width, height":void 0,h=()=>l.current;return s((()=>{const e=new ResizeObserver((()=>{a.current=b.intrinsicSizeOf(h())}));return e.observe(h(),{box:"border-box"}),()=>e.disconnect()}),[]),s((()=>{const e=h(),t=h().firstElementChild;t.ontransitionend=e=>{e.stopPropagation()};{if(!a.current)return;e.style.display="contents",t.style.display="contents",e.style.width=null,t.style.width=null,e.style.height=null,t.style.height=null;const n=a.current,i=b.intrinsicSizeOf(t);if(n.width==i.width&&n.height==i.height)return;c.current=i,e.style.display=null,e.style.width=`${n.width}px`,e.style.height=`${n.height}px`,b.reflow(t),e.style.width=`${i.width}px`,e.style.height=`${i.height}px`,e.ontransitionend=()=>{e.style.display="contents",t.style.display="contents",e.style.width=null,e.style.height=null,t.style.minWidth=null,t.style.minWidth=null},t.style.display=null,t.style.minWidth=`${i.width}px`,t.style.minHeight=`${i.height}px`}}),[t]),e(y,{ref:l,overflow:n,willChange:d,transitionProperty:"width, height",transitionDuration:i,transitionTimingFunction:o,children:e("div",{children:t})})}function j({size:t,width:n,height:i,children:o,threshold:l=1e-10}){const a=r(null);return s((()=>{const e=a.current,t=new IntersectionObserver((t=>{for(const n of t)0==n.intersectionRatio?e.setAttribute("active",""):e.removeAttribute("active")}),{threshold:l});return t.observe(e),()=>t.disconnect()}),[]),s((()=>{const e=a.current,r=null!=n?n:t,s=null!=i?i:t,o=new ResizeObserver((()=>{if(null!=r&&null!=s)e.style.width=r,e.style.height=s;else{const t=b.intrinsicSizeOf(e.firstElementChild);e.style.width=`${null!=r?r:t.width}px`,e.style.height=`${null!=s?s:t.height}px`}}));return o.observe(e.firstElementChild,{box:"border-box"}),()=>{o.disconnect()}}),[t,n,i]),e("widget-invisible",{ref:a,children:o})}class z{constructor(){this._listeners=[]}redraw(){this.animId&&cancelAnimationFrame(this.animId),this.animId=requestAnimationFrame((()=>{this.notifyListeners(),this.animId=null}))}addListener(e){console.assert(!this._listeners.includes(e),"Already exists a given listener."),this._listeners.push(e)}removeListener(e){console.assert(this._listeners.includes(e),"Already not exists a given listener."),this._listeners=this._listeners.filter((t=>t!=e))}notifyListeners(){this._listeners.forEach((e=>e()))}}var S,T,R;function E(t){const n=t.align,i=Object.assign(Object.assign({},t),{flexDirection:t.reverse?"column-reverse":void 0,flexWrap:t.wrap?"wrap":void 0});return t.size&&(console.assert(null==t.width,"The `width` cannot be defined when defining the `size`."),console.assert(null==t.height,"The `height` cannot be defined when defining the `size`."),i.width=t.size,i.height=t.size),t.paddingAndGap&&(console.assert(null==t.padding,"The `padding` cannot be defined when defining the `paddingAndGap`."),console.assert(null==t.gap,"The `gap` cannot be defined when defining the `paddingAndGap`."),i.padding=t.paddingAndGap,i.gap=t.paddingAndGap),"bottomCenter"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="end"):"bottomLeft"==n?(i.alignItems="start",i.alignContent="start",i.justifyContent="end"):"bottomRight"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="end"):"center"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="center"):"centerLeft"==n?(i.alignItems="start",i.alignContent="start",i.justifyContent="center"):"centerRight"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="center"):"topCenter"==n?(i.alignItems="center",i.alignContent="center"):"topLeft"==n?(i.alignItems="left",i.alignContent="left"):"topRight"==n?(i.alignItems="right",i.alignContent="right"):"spaceBetweenLeft"==n?i.justifyContent="space-between":"spaceBetweenCenter"==n?(i.alignContent="center",i.justifyContent="space-between"):"spaceBetweenRight"==n?(i.alignContent="end",i.justifyContent="space-between"):"spaceAroundLeft"==n?i.justifyContent="space-between":"spaceAroundCenter"==n?(i.alignContent="center",i.justifyContent="space-around"):"spaceAroundRight"==n?(i.alignContent="end",i.justifyContent="space-around"):"spaceEvenlyLeft"==n?i.justifyContent="space-evenly":"spaceEvenlyCenter"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="space-evenly"):"spaceEvenlyRight"==n&&(i.alignItems="end",i.alignContent="end",i.justifyContent="space-evenly"),e("widget-column",{className:t.className,style:i,children:t.children})}function A(t){const n=t.align,i=Object.assign(Object.assign({},t),{flexDirection:t.reverse?"row-reverse":void 0,flexWrap:t.wrap?"wrap":void 0});return t.size&&(console.assert(null==t.width,"The width cannot be defined when defining the size."),console.assert(null==t.height,"The height cannot be defined when defining the size."),i.width=t.size,i.height=t.size),t.paddingAndGap&&(console.assert(null==t.padding,"The padding cannot be defined when defining the paddingAndGap."),console.assert(null==t.gap,"The gap cannot be defined when defining the paddingAndGap."),i.padding=t.paddingAndGap,i.gap=t.paddingAndGap),"bottomCenter"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="center"):"bottomLeft"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="left"):"bottomRight"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="right"):"bottomSpaceBetween"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="space-between"):"bottomSpaceAround"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="space-around"):"bottomSpaceEvenly"==n?(i.alignItems="end",i.alignContent="end",i.justifyContent="space-evenly"):"center"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="center"):"centerLeft"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="left"):"centerRight"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="right"):"centerSpaceBetween"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="space-between"):"centerSpaceAround"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="space-around"):"centerSpaceEvenly"==n?(i.alignItems="center",i.alignContent="center",i.justifyContent="space-evenly"):"topCenter"==n?i.justifyContent="center":"topLeft"==n?i.justifyContent="left":"topRight"==n?i.justifyContent="right":"topSpaceBetween"==n?i.justifyContent="space-between":"topSpaceAround"==n?i.justifyContent="space-around":"topSpaceEvenly"==n&&(i.justifyContent="space-evenly"),e("widget-row",{className:t.className,style:i,children:t.children})}!function(t){function n({contextType:t,width:n,height:i,onDraw:o,controller:l}){const a=r(null);return s((()=>{const e=a.current,r=new ResizeObserver((()=>{e.style.width=n,e.style.height=i,r.disconnect();const s=b.intrinsicSizeOf(e);e.setAttribute("width",`${s.width}px`),e.setAttribute("height",`${s.height}px`),o(e.getContext(t)),requestAnimationFrame((()=>r.observe(e)))}));return r.observe(e),()=>{r.disconnect()}}),[]),s((()=>{const e=a.current;l&&(l.active=e,l.addListener((()=>o(e.getContext(t)))))}),[l]),e("canvas",{ref:a})}t.Context2D=function({width:t,height:i,onDraw:r,controller:s}){return e(n,{contextType:"2d",width:t,height:i,onDraw:r,controller:s})},t.Foundation=n}(S||(S={})),function(n){n.Viewport=function({builder:n}){const i=()=>({width:window.innerWidth,height:window.innerHeight}),[r,o]=l(i());return s((()=>{const e=()=>o(i());return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),e(t,{children:n(r.width,r.height)})},n.Parent=function({builder:e}){}}(T||(T={}));class I{constructor(e,t,n){if(this.min=e,this.max=t,this.value=n,e>t)throw new Error("A min-constraint must be less than a max-constraint.")}}function L({constraints:t,usememo:n,builder:i}){return console.assert(0!=t.length,"A constraints of ConstraintBuilder must be one or more."),e(T.Viewport,{builder:(e,r)=>{var s;const o=null===(s=t.find((t=>t.min<=e&&t.max>=e)))||void 0===s?void 0:s.value;if(null==o)throw new Error("No constraint value exists for the current window size.");return(null!=n?n:u.instance.optionValueOf("useDefaultMemo"))?a((()=>i(o)),[o]):i(o)}})}function D({direction:t,children:n}){const i=r(null);return s((()=>{const e=i.current,n=e.parentElement,r=Array.from(n.children).filter((t=>t!=e));let s=0,o=0;const l=new ResizeObserver((i=>{const a=i[0].contentBoxSize[0].inlineSize,c=i[0].contentBoxSize[0].blockSize;if("vertical"==t&&o==c)return;if("horizontal"==t&&s==a)return;s=a,o=c;const d=r.reduce(((e,t)=>{const n=b.intrinsicSizeOf(t);return{width:e.width+n.width,height:e.height+n.height}}),{width:0,height:0});l.disconnect(),"vertical"==t?e.style.height=`calc(100% - ${d.height}px)`:e.style.minWidth=`calc(100% - ${d.width}px)`,requestAnimationFrame((()=>l.observe(n)))}));return l.observe(n),()=>l.disconnect()}),[]),e("div",{ref:i,children:n})}function F(t){const n=Object.assign(Object.assign({},t),{gridTemplateColumns:Array.from({length:t.rowCount},(()=>"1fr")).join(" "),padding:t.padding,margin:t.margin});return null!=t.gap?n.gap=t.gap:null!=t.verticalGap?n.rowGap=t.verticalGap:null!=t.horizontalGap&&(n.columnGap=t.horizontalGap),e("widget-grid",{style:n,children:t.children})}function k({children:t}){return e("div",{className:"ignore",children:t})}function $({before:t,behind:n,children:i}){const o=r(null);return s((()=>{const e=o.current,i=new ResizeObserver((()=>{if(e.removeAttribute("style"),t){const n=e.getBoundingClientRect();t(n,e)}if(n){console.assert(null!=t,"[before] and [behind] must be used together.");const i=e.getBoundingClientRect();n(i,e)}}));return i.observe(e),()=>i.disconnect()}),[]),e("div",{ref:o,children:i})}!function(t){t.Vertical=function(t){var n;const i=!(null===(n=t.scrollbar)||void 0===n||n);return e("scrollable-vertical",Object.assign({children:t.children},i&&{"scrollbar-none":""}))},t.Horizontal=function(t){var n;const i=!(null===(n=t.scrollbar)||void 0===n||n);return e("scrollable-horizontal",Object.assign({children:t.children},i&&{"scrollbar-none":""}))}}(R||(R={}));const P=c(null);class _{constructor(){this.listeners=[]}addListener(e){console.assert(!this.listeners.includes(e),"Already exists a given listener in this binding"),this.listeners.push(e)}removeListener(e){console.assert(this.listeners.includes(e),"Already not exists a given listener in this binding"),this.listeners=this.listeners.filter((t=>t!=e))}notifyListeners(e){console.assert(0!=this.listeners.length,"Not exists a listener to notify in this `SizedCononectionBinding` instance. Therefore, you need to add the 'SizedSlaver' component to the subtree of the 'SizedConnection' component."),this.listeners.forEach((t=>t(e)))}}function B({children:t}){const[n,i]=l(new _);return e(P.Provider,{value:n,children:t})}function N(t){const n=d(P),i=r(null);return console.assert(null!=n,"The `SizedConnection` component does not exist among the ancestor components of this `SizedMaster` component, Therefore you need to insert a `SizedConnection` component into ancestor tree of the `SizedMaster` component."),s((()=>{const e=i.current.firstElementChild,t=new ResizeObserver((()=>{null==n||n.notifyListeners(b.intrinsicSizeOf(e))}));return t.observe(e,{box:"border-box"}),()=>t.disconnect()}),[]),e(y,Object.assign({ref:i},t))}function W({onLayout:t,children:n}){const i=d(P),o=r(null);return s((()=>{const e=e=>{t(e,o.current.firstElementChild)};return i.addListener(e),()=>i.removeListener(e)}),[]),e(y,{ref:o,display:"contents",children:n})}var G;function V(t){const n=Object.assign(Object.assign({},t),{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:t.maxLine,textAlign:t.alignment,overflow:"hidden"});switch(t.type){case"h1":return e("h1",{style:n,children:t.children});case"h2":return e("h2",{style:n,children:t.children});case"h3":return e("h3",{style:n,children:t.children});case"h4":return e("h4",{style:n,children:t.children});case"h5":return e("h5",{style:n,children:t.children});case"h6":return e("h6",{style:n,children:t.children});case"a":return e("a",{style:n,children:t.children});case"p":return e("p",{style:n,children:t.children});case"span":return e("span",{style:n,children:t.children});default:return e("div",{style:n,children:t.children})}}!function(t){function i(e,t){const n=e.length;if(t>n)throw new Error(`The index of TabNavigation is overflowed. (given: ${t} > length: ${n})`);let i=0;for(let n=0;n<=t;n++)"ignore"==e[n+i].className&&i++;return e[t+i]}t.DEFUALT_STYLE={backgroundColor:"black",borderRadius:void 0,width:"100%",thickness:"3px"},t.Horizontal=function({children:o,index:l,style:a,duration:c,curve:d,gap:h}){const u=r(l),g=r(null),f=Object.assign(Object.assign({},t.DEFUALT_STYLE),a);return console.assert(l>=0,"The index of TabNavigation cannot be negative."),console.assert(l!=1/0,"The index of TabNavigation cannot be infinity."),s((()=>{const e=g.current,t=e.firstElementChild,n=e.lastElementChild,r=i(t.children,l);l!=u.current&&(n.style.transitionProperty="margin, width",n.style.transitionDuration=c,n.style.transitionTimingFunction=d,u.current=l);const s=w.intrinsicOf(t),o=w.intrinsicOf(r);n.style.width=`${o.width}px`,n.style.marginLeft=o.left-s.left+"px",n.ontransitionend=()=>{n.style.removeProperty("transition-property"),n.style.removeProperty("transition-duration")}}),[l]),n(y,{ref:g,children:[e(A,{gap:h,children:o}),e(y,{children:e(y,{width:f.width,height:null!=l?f.thickness:0,backgroundColor:f.backgroundColor,borderRadius:f.borderRadius,transitionDuration:c,transitionProperty:"height",transitionTimingFunction:d,margin:"0 auto"})})]})},t.Vertical=function({children:o,index:l,style:a,duration:c,curve:d,gap:h}){const u=r(l),g=r(null),f=Object.assign(Object.assign({},t.DEFUALT_STYLE),a);return console.assert(l>=0,"The index of TabNavigation cannot be negative."),console.assert(l!=1/0,"The index of TabNavigation cannot be infinity."),s((()=>{const e=g.current,t=e.lastElementChild,n=e.firstElementChild,r=i(t.children,l);l!=u.current&&(n.style.transitionProperty="margin, height",n.style.transitionDuration=c,n.style.transitionTimingFunction=d,u.current=l);const s=w.intrinsicOf(t),o=w.intrinsicOf(r);n.style.height=`${o.height}px`,n.style.marginTop=o.top-s.top+"px",n.ontransitionend=()=>{n.style.removeProperty("transition-property"),n.style.removeProperty("transition-duration")}}),[l]),n(y,{display:"flex",ref:g,children:[e(y,{display:"flex",alignItems:"center",children:e(y,{width:null!=l?f.thickness:0,height:f.width,backgroundColor:f.backgroundColor,borderRadius:f.borderRadius,transitionDuration:c,transitionProperty:"width",transitionTimingFunction:d})}),e(E,{gap:h,children:o})]})}}(G||(G={})),function(t){t.h1=function(n){return n=Object.assign(Object.assign({},n),{type:"h1"}),e(t,Object.assign({},n))},t.h2=function(n){return n=Object.assign(Object.assign({},n),{type:"h2"}),e(t,Object.assign({},n))},t.h3=function(n){return n=Object.assign(Object.assign({},n),{type:"h3"}),e(t,Object.assign({},n))},t.h4=function(n){return n=Object.assign(Object.assign({},n),{type:"h4"}),e(t,Object.assign({},n))},t.h5=function(n){return n=Object.assign(Object.assign({},n),{type:"h5"}),e(t,Object.assign({},n))},t.h6=function(n){return n=Object.assign(Object.assign({},n),{type:"h6"}),e(t,Object.assign({},n))},t.a=function(n){return n=Object.assign(Object.assign({},n),{type:"a"}),e(t,Object.assign({},n))},t.p=function(n){return n=Object.assign(Object.assign({},n),{type:"p"}),e(t,Object.assign({},n))},t.span=function(n){return n=Object.assign(Object.assign({},n),{type:"span"}),e(t,Object.assign({},n))}}(V||(V={})),addEventListener("DOMContentLoaded",(()=>u.instance.initialize()));export{m as AnimatedFoldable,x as AnimatedSize,C as AnimatedTransition,f as App,g as ApplicationBinding,p as ApplicationEvent,y as Box,S as Canvas,z as CanvasController,E as Column,v as ConditionalRender,I as Constraint,L as ConstraintBuilder,D as Expanded,F as Grid,k as Ignore,j as Invisible,$ as Layout,h as ReactWidgets,u as ReactWidgetsBinding,A as Row,R as Scrollable,T as SizeBuilder,B as SizedConnection,_ as SizedConnectionBinding,P as SizedConnectionContext,N as SizedMaster,W as SizedSlaver,G as TabNavigation,V as Text};
//# sourceMappingURL=index.esm.js.map
