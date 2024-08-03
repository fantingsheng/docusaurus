"use strict";(self.webpackChunkspacexcode_com=self.webpackChunkspacexcode_com||[]).push([[1722],{67720:(e,t,r)=>{r.d(t,{Z:()=>b});var i=r(63366),a=r(87462),o=r(67294),n=r(63961),s=r(94780),l=r(41796),c=r(90948),d=r(71657),p=r(35097),u=r(85893);const m=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],f=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,a.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,l.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({ownerState:e})=>(0,a.Z)({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})),(({theme:e,ownerState:t})=>(0,a.Z)({},t.children&&"vertical"!==t.orientation&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`}})),(({theme:e,ownerState:t})=>(0,a.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`}})),(({ownerState:e})=>(0,a.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),h=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,a.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),g=o.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiDivider"}),{absolute:o=!1,children:l,className:c,component:g=(l?"div":"hr"),flexItem:b=!1,light:v=!1,orientation:y="horizontal",role:x=("hr"!==g?"separator":void 0),textAlign:w="center",variant:$="fullWidth"}=r,A=(0,i.Z)(r,m),k=(0,a.Z)({},r,{absolute:o,component:g,flexItem:b,light:v,orientation:y,role:x,textAlign:w,variant:$}),E=(e=>{const{absolute:t,children:r,classes:i,flexItem:a,light:o,orientation:n,textAlign:l,variant:c}=e,d={root:["root",t&&"absolute",c,o&&"light","vertical"===n&&"vertical",a&&"flexItem",r&&"withChildren",r&&"vertical"===n&&"withChildrenVertical","right"===l&&"vertical"!==n&&"textAlignRight","left"===l&&"vertical"!==n&&"textAlignLeft"],wrapper:["wrapper","vertical"===n&&"wrapperVertical"]};return(0,s.Z)(d,p.V,i)})(k);return(0,u.jsx)(f,(0,a.Z)({as:g,className:(0,n.Z)(E.root,c),role:x,ref:t,ownerState:k},A,{children:l?(0,u.jsx)(h,{className:E.wrapper,ownerState:k,children:l}):null}))}));g.muiSkipListHighlight=!0;const b=g},35097:(e,t,r)=>{r.d(t,{V:()=>o,Z:()=>n});var i=r(1588),a=r(34867);function o(e){return(0,a.Z)("MuiDivider",e)}const n=(0,i.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])},86501:(e,t,r)=>{r.d(t,{x7:()=>re,ZP:()=>ie});var i=r(67294);let a={data:""},o=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||a,n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,s=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,c=(e,t)=>{let r="",i="",a="";for(let o in e){let n=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+n+";":i+="f"==o[1]?c(n,o):o+"{"+c(n,"k"==o[1]?"":t)+"}":"object"==typeof n?i+=c(n,t?t.replace(/([^,])+/g,(e=>o.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):o):null!=n&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=c.p?c.p(o,n):o+":"+n+";")}return r+(t&&a?t+"{"+a+"}":a)+i},d={},p=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+p(e[r]);return t}return e},u=(e,t,r,i,a)=>{let o=p(e),u=d[o]||(d[o]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(o));if(!d[u]){let t=o!==e?e:(e=>{let t,r,i=[{}];for(;t=n.exec(e.replace(s,""));)t[4]?i.shift():t[3]?(r=t[3].replace(l," ").trim(),i.unshift(i[0][r]=i[0][r]||{})):i[0][t[1]]=t[2].replace(l," ").trim();return i[0]})(e);d[u]=c(a?{["@keyframes "+u]:t}:t,r?"":"."+u)}let m=r&&d.g?d.g:null;return r&&(d.g=d[u]),((e,t,r,i)=>{i?t.data=t.data.replace(i,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(d[u],t,i,m),u},m=(e,t,r)=>e.reduce(((e,i,a)=>{let o=t[a];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+i+(null==o?"":o)}),"");function f(e){let t=this||{},r=e.call?e(t.p):e;return u(r.unshift?r.raw?m(r,[].slice.call(arguments,1),t.p):r.reduce(((e,r)=>Object.assign(e,r&&r.call?r(t.p):r)),{}):r,o(t.target),t.g,t.o,t.k)}f.bind({g:1});let h,g,b,v=f.bind({k:1});function y(e,t){let r=this||{};return function(){let i=arguments;function a(o,n){let s=Object.assign({},o),l=s.className||a.className;r.p=Object.assign({theme:g&&g()},s),r.o=/ *go\d+/.test(l),s.className=f.apply(r,i)+(l?" "+l:""),t&&(s.ref=n);let c=e;return e[0]&&(c=s.as||e,delete s.as),b&&c[0]&&b(s),h(c,s)}return t?t(a):a}}var x=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,w=(()=>{let e=0;return()=>(++e).toString()})(),$=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),A=new Map,k=e=>{if(A.has(e))return;let t=setTimeout((()=>{A.delete(e),Z({type:4,toastId:e})}),1e3);A.set(e,t)},E=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=A.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:r}=t;return e.toasts.find((e=>e.id===r.id))?E(e,{type:1,toast:r}):E(e,{type:0,toast:r});case 3:let{toastId:i}=t;return i?k(i):e.toasts.forEach((e=>{k(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===i||void 0===i?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+a})))}}},C=[],S={toasts:[],pausedAt:void 0},Z=e=>{S=E(S,e),C.forEach((e=>{e(S)}))},I={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},D=e=>(t,r)=>{let i=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||w()}))(t,e,r);return Z({type:2,toast:i}),i.id},N=(e,t)=>D("blank")(e,t);N.error=D("error"),N.success=D("success"),N.loading=D("loading"),N.custom=D("custom"),N.dismiss=e=>{Z({type:3,toastId:e})},N.remove=e=>Z({type:4,toastId:e}),N.promise=(e,t,r)=>{let i=N.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then((e=>(N.success(x(t.success,e),{id:i,...r,...null==r?void 0:r.success}),e))).catch((e=>{N.error(x(t.error,e),{id:i,...r,...null==r?void 0:r.error})})),e};var j=(e,t)=>{Z({type:1,toast:{id:e,height:t}})},O=()=>{Z({type:5,time:Date.now()})},z=e=>{let{toasts:t,pausedAt:r}=((e={})=>{let[t,r]=(0,i.useState)(S);(0,i.useEffect)((()=>(C.push(r),()=>{let e=C.indexOf(r);e>-1&&C.splice(e,1)})),[t]);let a=t.toasts.map((t=>{var r,i;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||I[t.type],style:{...e.style,...null==(i=e[t.type])?void 0:i.style,...t.style}}}));return{...t,toasts:a}})(e);(0,i.useEffect)((()=>{if(r)return;let e=Date.now(),i=t.map((t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(r<0))return setTimeout((()=>N.dismiss(t.id)),r);t.visible&&N.dismiss(t.id)}));return()=>{i.forEach((e=>e&&clearTimeout(e)))}}),[t,r]);let a=(0,i.useCallback)((()=>{r&&Z({type:6,time:Date.now()})}),[r]),o=(0,i.useCallback)(((e,r)=>{let{reverseOrder:i=!1,gutter:a=8,defaultPosition:o}=r||{},n=t.filter((t=>(t.position||o)===(e.position||o)&&t.height)),s=n.findIndex((t=>t.id===e.id)),l=n.filter(((e,t)=>t<s&&e.visible)).length;return n.filter((e=>e.visible)).slice(...i?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+a),0)}),[t]);return{toasts:t,handlers:{updateHeight:j,startPause:O,endPause:a,calculateOffset:o}}},L=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,M=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,P=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,R=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${M} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${P} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,T=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,V=y("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${T} 1s linear infinite;
`,W=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,F=v`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,H=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${W} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${F} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,B=y("div")`
  position: absolute;
`,_=y("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,q=v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,U=y("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${q} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Y=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?i.createElement(U,null,t):t:"blank"===r?null:i.createElement(_,null,i.createElement(V,{...a}),"loading"!==r&&i.createElement(B,null,"error"===r?i.createElement(R,{...a}):i.createElement(H,{...a})))},G=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,J=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,K=y("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Q=y("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=i.memo((({toast:e,position:t,style:r,children:a})=>{let o=e.height?((e,t)=>{let r=e.includes("top")?1:-1,[i,a]=$()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[G(r),J(r)];return{animation:t?`${v(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},n=i.createElement(Y,{toast:e}),s=i.createElement(Q,{...e.ariaProps},x(e.message,e));return i.createElement(K,{className:e.className,style:{...o,...r,...e.style}},"function"==typeof a?a({icon:n,message:s}):i.createElement(i.Fragment,null,n,s))}));!function(e,t,r,i){c.p=t,h=e,g=r,b=i}(i.createElement);var ee=({id:e,className:t,style:r,onHeightUpdate:a,children:o})=>{let n=i.useCallback((t=>{if(t){let r=()=>{let r=t.getBoundingClientRect().height;a(e,r)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[e,a]);return i.createElement("div",{ref:n,className:t,style:r},o)},te=f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,re=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:o,containerStyle:n,containerClassName:s})=>{let{toasts:l,handlers:c}=z(r);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map((r=>{let n=r.position||t,s=((e,t)=>{let r=e.includes("top"),i=r?{top:0}:{bottom:0},a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:$()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...i,...a}})(n,c.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return i.createElement(ee,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?te:"",style:s},"custom"===r.type?x(r.message,r):o?o(r):i.createElement(X,{toast:r,position:n}))})))},ie=N}}]);