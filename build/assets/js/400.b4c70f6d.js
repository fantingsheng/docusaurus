"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[400],{49990:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(87462),o=n(63366),i=n(67294),u=n(86010),s=n(94780),l=n(90948),a=n(71657),c=n(51705),p=n(2068),d=n(79674),f=n(73350),h=n(70917),m=n(85893);const b=function(e){const{className:t,classes:n,pulsate:r=!1,rippleX:o,rippleY:s,rippleSize:l,in:a,onExited:c,timeout:p}=e,[d,f]=i.useState(!1),h=(0,u.Z)(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),b={width:l,height:l,top:-l/2+s,left:-l/2+o},v=(0,u.Z)(n.child,d&&n.childLeaving,r&&n.childPulsate);return a||d||f(!0),i.useEffect((()=>{if(!a&&null!=c){const e=setTimeout(c,p);return()=>{clearTimeout(e)}}}),[c,a,p]),(0,m.jsx)("span",{className:h,style:b,children:(0,m.jsx)("span",{className:v})})};var v=n(1588);const Z=(0,v.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),y=["center","classes","className"];let g,R,E,x,M=e=>e;const T=(0,h.F4)(g||(g=M`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),k=(0,h.F4)(R||(R=M`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),w=(0,h.F4)(E||(E=M`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),C=(0,l.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),P=(0,l.ZP)(b,{name:"MuiTouchRipple",slot:"Ripple"})(x||(x=M`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),Z.rippleVisible,T,550,(({theme:e})=>e.transitions.easing.easeInOut),Z.ripplePulsate,(({theme:e})=>e.transitions.duration.shorter),Z.child,Z.childLeaving,k,550,(({theme:e})=>e.transitions.easing.easeInOut),Z.childPulsate,w,(({theme:e})=>e.transitions.easing.easeInOut)),V=i.forwardRef((function(e,t){const n=(0,a.Z)({props:e,name:"MuiTouchRipple"}),{center:s=!1,classes:l={},className:c}=n,p=(0,o.Z)(n,y),[d,h]=i.useState([]),b=i.useRef(0),v=i.useRef(null);i.useEffect((()=>{v.current&&(v.current(),v.current=null)}),[d]);const g=i.useRef(!1),R=i.useRef(0),E=i.useRef(null),x=i.useRef(null);i.useEffect((()=>()=>{R.current&&clearTimeout(R.current)}),[]);const M=i.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:o,cb:i}=e;h((e=>[...e,(0,m.jsx)(P,{classes:{ripple:(0,u.Z)(l.ripple,Z.ripple),rippleVisible:(0,u.Z)(l.rippleVisible,Z.rippleVisible),ripplePulsate:(0,u.Z)(l.ripplePulsate,Z.ripplePulsate),child:(0,u.Z)(l.child,Z.child),childLeaving:(0,u.Z)(l.childLeaving,Z.childLeaving),childPulsate:(0,u.Z)(l.childPulsate,Z.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:o},b.current)])),b.current+=1,v.current=i}),[l]),T=i.useCallback(((e={},t={},n=(()=>{}))=>{const{pulsate:r=!1,center:o=s||t.pulsate,fakeElement:i=!1}=t;if("mousedown"===(null==e?void 0:e.type)&&g.current)return void(g.current=!1);"touchstart"===(null==e?void 0:e.type)&&(g.current=!0);const u=i?null:x.current,l=u?u.getBoundingClientRect():{width:0,height:0,left:0,top:0};let a,c,p;if(o||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)a=Math.round(l.width/2),c=Math.round(l.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;a=Math.round(t-l.left),c=Math.round(n-l.top)}if(o)p=Math.sqrt((2*l.width**2+l.height**2)/3),p%2==0&&(p+=1);else{const e=2*Math.max(Math.abs((u?u.clientWidth:0)-a),a)+2,t=2*Math.max(Math.abs((u?u.clientHeight:0)-c),c)+2;p=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===E.current&&(E.current=()=>{M({pulsate:r,rippleX:a,rippleY:c,rippleSize:p,cb:n})},R.current=setTimeout((()=>{E.current&&(E.current(),E.current=null)}),80)):M({pulsate:r,rippleX:a,rippleY:c,rippleSize:p,cb:n})}),[s,M]),k=i.useCallback((()=>{T({},{pulsate:!0})}),[T]),w=i.useCallback(((e,t)=>{if(clearTimeout(R.current),"touchend"===(null==e?void 0:e.type)&&E.current)return E.current(),E.current=null,void(R.current=setTimeout((()=>{w(e,t)})));E.current=null,h((e=>e.length>0?e.slice(1):e)),v.current=t}),[]);return i.useImperativeHandle(t,(()=>({pulsate:k,start:T,stop:w})),[k,T,w]),(0,m.jsx)(C,(0,r.Z)({className:(0,u.Z)(Z.root,l.root,c),ref:x},p,{children:(0,m.jsx)(f.Z,{component:null,exit:!0,children:d})}))}));var L=n(34867);function S(e){return(0,L.Z)("MuiButtonBase",e)}const D=(0,v.Z)("MuiButtonBase",["root","disabled","focusVisible"]),F=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],$=(0,l.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${D.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),j=i.forwardRef((function(e,t){const n=(0,a.Z)({props:e,name:"MuiButtonBase"}),{action:l,centerRipple:f=!1,children:h,className:b,component:v="button",disabled:Z=!1,disableRipple:y=!1,disableTouchRipple:g=!1,focusRipple:R=!1,LinkComponent:E="a",onBlur:x,onClick:M,onContextMenu:T,onDragLeave:k,onFocus:w,onFocusVisible:C,onKeyDown:P,onKeyUp:L,onMouseDown:D,onMouseLeave:j,onMouseUp:B,onTouchEnd:N,onTouchMove:I,onTouchStart:O,tabIndex:z=0,TouchRippleProps:K,touchRippleRef:X,type:U}=n,A=(0,o.Z)(n,F),Y=i.useRef(null),H=i.useRef(null),W=(0,c.Z)(H,X),{isFocusVisibleRef:q,onFocus:G,onBlur:J,ref:Q}=(0,d.Z)(),[_,ee]=i.useState(!1);Z&&_&&ee(!1),i.useImperativeHandle(l,(()=>({focusVisible:()=>{ee(!0),Y.current.focus()}})),[]);const[te,ne]=i.useState(!1);i.useEffect((()=>{ne(!0)}),[]);const re=te&&!y&&!Z;function oe(e,t,n=g){return(0,p.Z)((r=>{t&&t(r);return!n&&H.current&&H.current[e](r),!0}))}i.useEffect((()=>{_&&R&&!y&&te&&H.current.pulsate()}),[y,R,_,te]);const ie=oe("start",D),ue=oe("stop",T),se=oe("stop",k),le=oe("stop",B),ae=oe("stop",(e=>{_&&e.preventDefault(),j&&j(e)})),ce=oe("start",O),pe=oe("stop",N),de=oe("stop",I),fe=oe("stop",(e=>{J(e),!1===q.current&&ee(!1),x&&x(e)}),!1),he=(0,p.Z)((e=>{Y.current||(Y.current=e.currentTarget),G(e),!0===q.current&&(ee(!0),C&&C(e)),w&&w(e)})),me=()=>{const e=Y.current;return v&&"button"!==v&&!("A"===e.tagName&&e.href)},be=i.useRef(!1),ve=(0,p.Z)((e=>{R&&!be.current&&_&&H.current&&" "===e.key&&(be.current=!0,H.current.stop(e,(()=>{H.current.start(e)}))),e.target===e.currentTarget&&me()&&" "===e.key&&e.preventDefault(),P&&P(e),e.target===e.currentTarget&&me()&&"Enter"===e.key&&!Z&&(e.preventDefault(),M&&M(e))})),Ze=(0,p.Z)((e=>{R&&" "===e.key&&H.current&&_&&!e.defaultPrevented&&(be.current=!1,H.current.stop(e,(()=>{H.current.pulsate(e)}))),L&&L(e),M&&e.target===e.currentTarget&&me()&&" "===e.key&&!e.defaultPrevented&&M(e)}));let ye=v;"button"===ye&&(A.href||A.to)&&(ye=E);const ge={};"button"===ye?(ge.type=void 0===U?"button":U,ge.disabled=Z):(A.href||A.to||(ge.role="button"),Z&&(ge["aria-disabled"]=Z));const Re=(0,c.Z)(t,Q,Y);const Ee=(0,r.Z)({},n,{centerRipple:f,component:v,disabled:Z,disableRipple:y,disableTouchRipple:g,focusRipple:R,tabIndex:z,focusVisible:_}),xe=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:o}=e,i={root:["root",t&&"disabled",n&&"focusVisible"]},u=(0,s.Z)(i,S,o);return n&&r&&(u.root+=` ${r}`),u})(Ee);return(0,m.jsxs)($,(0,r.Z)({as:ye,className:(0,u.Z)(xe.root,b),ownerState:Ee,onBlur:fe,onClick:M,onContextMenu:ue,onFocus:he,onKeyDown:ve,onKeyUp:Ze,onMouseDown:ie,onMouseLeave:ae,onMouseUp:le,onDragLeave:se,onTouchEnd:pe,onTouchMove:de,onTouchStart:ce,ref:Re,tabIndex:Z?-1:z,type:U},ge,A,{children:[h,re?(0,m.jsx)(V,(0,r.Z)({ref:W,center:f},K)):null]}))}))},98216:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(14142).Z},2068:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(59948).Z},51705:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(33703).Z},79674:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(99962).Z},7960:(e,t,n)=>{function r(e,t){"function"==typeof e?e(t):e&&(e.current=t)}n.d(t,{Z:()=>r})},73546:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294);const o="undefined"!=typeof window?r.useLayoutEffect:r.useEffect},59948:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),o=n(73546);const i=function(e){const t=r.useRef(e);return(0,o.Z)((()=>{t.current=e})),r.useCallback(((...e)=>(0,t.current)(...e)),[])}},33703:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),o=n(7960);function i(...e){return r.useMemo((()=>e.every((e=>null==e))?null:t=>{e.forEach((e=>{(0,o.Z)(e,t)}))}),e)}},99962:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(67294);let o,i=!0,u=!1;const s={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function l(e){e.metaKey||e.altKey||e.ctrlKey||(i=!0)}function a(){i=!1}function c(){"hidden"===this.visibilityState&&u&&(i=!0)}function p(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(n){}return i||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!s[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}function d(){const e=r.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",l,!0),t.addEventListener("mousedown",a,!0),t.addEventListener("pointerdown",a,!0),t.addEventListener("touchstart",a,!0),t.addEventListener("visibilitychange",c,!0))}),[]),t=r.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!p(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(u=!0,window.clearTimeout(o),o=window.setTimeout((()=>{u=!1}),100),t.current=!1,!0)},ref:e}}},73350:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(63366),o=n(87462),i=n(97326),u=n(75068),s=n(67294),l=n(220);function a(e,t){var n=Object.create(null);return e&&s.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,s.isValidElement)(e)?t(e):e}(e)})),n}function c(e,t,n){return null!=n[t]?n[t]:e.props[t]}function p(e,t,n){var r=a(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,o=Object.create(null),i=[];for(var u in e)u in t?i.length&&(o[u]=i,i=[]):i.push(u);var s={};for(var l in t){if(o[l])for(r=0;r<o[l].length;r++){var a=o[l][r];s[o[l][r]]=n(a)}s[l]=n(l)}for(r=0;r<i.length;r++)s[i[r]]=n(i[r]);return s}(t,r);return Object.keys(o).forEach((function(i){var u=o[i];if((0,s.isValidElement)(u)){var l=i in t,a=i in r,p=t[i],d=(0,s.isValidElement)(p)&&!p.props.in;!a||l&&!d?a||!l||d?a&&l&&(0,s.isValidElement)(p)&&(o[i]=(0,s.cloneElement)(u,{onExited:n.bind(null,u),in:p.props.in,exit:c(u,"exit",e),enter:c(u,"enter",e)})):o[i]=(0,s.cloneElement)(u,{in:!1}):o[i]=(0,s.cloneElement)(u,{onExited:n.bind(null,u),in:!0,exit:c(u,"exit",e),enter:c(u,"enter",e)})}})),o}var d=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},f=function(e){function t(t,n){var r,o=(r=e.call(this,t,n)||this).handleExited.bind((0,i.Z)(r));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}(0,u.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,o=t.children,i=t.handleExited;return{children:t.firstRender?(n=e,r=i,a(n.children,(function(e){return(0,s.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:c(e,"appear",n),enter:c(e,"enter",n),exit:c(e,"exit",n)})}))):p(e,o,i),firstRender:!1}},n.handleExited=function(e,t){var n=a(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,o.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,o=(0,r.Z)(e,["component","childFactory"]),i=this.state.contextValue,u=d(this.state.children).map(n);return delete o.appear,delete o.enter,delete o.exit,null===t?s.createElement(l.Z.Provider,{value:i},u):s.createElement(l.Z.Provider,{value:i},s.createElement(t,o,u))},t}(s.Component);f.propTypes={},f.defaultProps={component:"div",childFactory:function(e){return e}};const h=f},220:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(67294).createContext(null)},97326:(e,t,n)=>{function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:()=>r})}}]);