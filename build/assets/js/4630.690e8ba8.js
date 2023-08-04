"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4630],{49990:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(87462),o=n(63366),i=n(67294),u=n(86010),l=n(94780),s=n(11496),a=n(27623),c=n(51705),p=n(2068),d=n(79674),f=n(73350),h=n(70917),m=n(85893);const b=function(e){const{className:t,classes:n,pulsate:r=!1,rippleX:o,rippleY:l,rippleSize:s,in:a,onExited:c,timeout:p}=e,[d,f]=i.useState(!1),h=(0,u.Z)(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),b={width:s,height:s,top:-s/2+l,left:-s/2+o},v=(0,u.Z)(n.child,d&&n.childLeaving,r&&n.childPulsate);return a||d||f(!0),i.useEffect((()=>{if(!a&&null!=c){const e=setTimeout(c,p);return()=>{clearTimeout(e)}}}),[c,a,p]),(0,m.jsx)("span",{className:h,style:b,children:(0,m.jsx)("span",{className:v})})};var v=n(1588);const Z=(0,v.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),y=["center","classes","className"];let g,R,E,x,M=e=>e;const T=(0,h.F4)(g||(g=M`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),w=(0,h.F4)(R||(R=M`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),k=(0,h.F4)(E||(E=M`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),C=(0,s.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),V=(0,s.ZP)(b,{name:"MuiTouchRipple",slot:"Ripple"})(x||(x=M`
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
`),Z.rippleVisible,T,550,(({theme:e})=>e.transitions.easing.easeInOut),Z.ripplePulsate,(({theme:e})=>e.transitions.duration.shorter),Z.child,Z.childLeaving,w,550,(({theme:e})=>e.transitions.easing.easeInOut),Z.childPulsate,k,(({theme:e})=>e.transitions.easing.easeInOut)),P=i.forwardRef((function(e,t){const n=(0,a.Z)({props:e,name:"MuiTouchRipple"}),{center:l=!1,classes:s={},className:c}=n,p=(0,o.Z)(n,y),[d,h]=i.useState([]),b=i.useRef(0),v=i.useRef(null);i.useEffect((()=>{v.current&&(v.current(),v.current=null)}),[d]);const g=i.useRef(!1),R=i.useRef(0),E=i.useRef(null),x=i.useRef(null);i.useEffect((()=>()=>{R.current&&clearTimeout(R.current)}),[]);const M=i.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:o,cb:i}=e;h((e=>[...e,(0,m.jsx)(V,{classes:{ripple:(0,u.Z)(s.ripple,Z.ripple),rippleVisible:(0,u.Z)(s.rippleVisible,Z.rippleVisible),ripplePulsate:(0,u.Z)(s.ripplePulsate,Z.ripplePulsate),child:(0,u.Z)(s.child,Z.child),childLeaving:(0,u.Z)(s.childLeaving,Z.childLeaving),childPulsate:(0,u.Z)(s.childPulsate,Z.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:o},b.current)])),b.current+=1,v.current=i}),[s]),T=i.useCallback(((e={},t={},n=(()=>{}))=>{const{pulsate:r=!1,center:o=l||t.pulsate,fakeElement:i=!1}=t;if("mousedown"===(null==e?void 0:e.type)&&g.current)return void(g.current=!1);"touchstart"===(null==e?void 0:e.type)&&(g.current=!0);const u=i?null:x.current,s=u?u.getBoundingClientRect():{width:0,height:0,left:0,top:0};let a,c,p;if(o||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)a=Math.round(s.width/2),c=Math.round(s.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;a=Math.round(t-s.left),c=Math.round(n-s.top)}if(o)p=Math.sqrt((2*s.width**2+s.height**2)/3),p%2==0&&(p+=1);else{const e=2*Math.max(Math.abs((u?u.clientWidth:0)-a),a)+2,t=2*Math.max(Math.abs((u?u.clientHeight:0)-c),c)+2;p=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===E.current&&(E.current=()=>{M({pulsate:r,rippleX:a,rippleY:c,rippleSize:p,cb:n})},R.current=setTimeout((()=>{E.current&&(E.current(),E.current=null)}),80)):M({pulsate:r,rippleX:a,rippleY:c,rippleSize:p,cb:n})}),[l,M]),w=i.useCallback((()=>{T({},{pulsate:!0})}),[T]),k=i.useCallback(((e,t)=>{if(clearTimeout(R.current),"touchend"===(null==e?void 0:e.type)&&E.current)return E.current(),E.current=null,void(R.current=setTimeout((()=>{k(e,t)})));E.current=null,h((e=>e.length>0?e.slice(1):e)),v.current=t}),[]);return i.useImperativeHandle(t,(()=>({pulsate:w,start:T,stop:k})),[w,T,k]),(0,m.jsx)(C,(0,r.Z)({className:(0,u.Z)(Z.root,s.root,c),ref:x},p,{children:(0,m.jsx)(f.Z,{component:null,exit:!0,children:d})}))}));var L=n(34867);function S(e){return(0,L.Z)("MuiButtonBase",e)}const D=(0,v.Z)("MuiButtonBase",["root","disabled","focusVisible"]),F=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],$=(0,s.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${D.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),j=i.forwardRef((function(e,t){const n=(0,a.Z)({props:e,name:"MuiButtonBase"}),{action:s,centerRipple:f=!1,children:h,className:b,component:v="button",disabled:Z=!1,disableRipple:y=!1,disableTouchRipple:g=!1,focusRipple:R=!1,LinkComponent:E="a",onBlur:x,onClick:M,onContextMenu:T,onDragLeave:w,onFocus:k,onFocusVisible:C,onKeyDown:V,onKeyUp:L,onMouseDown:D,onMouseLeave:j,onMouseUp:B,onTouchEnd:N,onTouchMove:I,onTouchStart:O,tabIndex:z=0,TouchRippleProps:K,touchRippleRef:X,type:U}=n,A=(0,o.Z)(n,F),Y=i.useRef(null),H=i.useRef(null),W=(0,c.Z)(H,X),{isFocusVisibleRef:q,onFocus:G,onBlur:J,ref:Q}=(0,d.Z)(),[_,ee]=i.useState(!1);Z&&_&&ee(!1),i.useImperativeHandle(s,(()=>({focusVisible:()=>{ee(!0),Y.current.focus()}})),[]);const[te,ne]=i.useState(!1);i.useEffect((()=>{ne(!0)}),[]);const re=te&&!y&&!Z;function oe(e,t,n=g){return(0,p.Z)((r=>{t&&t(r);return!n&&H.current&&H.current[e](r),!0}))}i.useEffect((()=>{_&&R&&!y&&te&&H.current.pulsate()}),[y,R,_,te]);const ie=oe("start",D),ue=oe("stop",T),le=oe("stop",w),se=oe("stop",B),ae=oe("stop",(e=>{_&&e.preventDefault(),j&&j(e)})),ce=oe("start",O),pe=oe("stop",N),de=oe("stop",I),fe=oe("stop",(e=>{J(e),!1===q.current&&ee(!1),x&&x(e)}),!1),he=(0,p.Z)((e=>{Y.current||(Y.current=e.currentTarget),G(e),!0===q.current&&(ee(!0),C&&C(e)),k&&k(e)})),me=()=>{const e=Y.current;return v&&"button"!==v&&!("A"===e.tagName&&e.href)},be=i.useRef(!1),ve=(0,p.Z)((e=>{R&&!be.current&&_&&H.current&&" "===e.key&&(be.current=!0,H.current.stop(e,(()=>{H.current.start(e)}))),e.target===e.currentTarget&&me()&&" "===e.key&&e.preventDefault(),V&&V(e),e.target===e.currentTarget&&me()&&"Enter"===e.key&&!Z&&(e.preventDefault(),M&&M(e))})),Ze=(0,p.Z)((e=>{R&&" "===e.key&&H.current&&_&&!e.defaultPrevented&&(be.current=!1,H.current.stop(e,(()=>{H.current.pulsate(e)}))),L&&L(e),M&&e.target===e.currentTarget&&me()&&" "===e.key&&!e.defaultPrevented&&M(e)}));let ye=v;"button"===ye&&(A.href||A.to)&&(ye=E);const ge={};"button"===ye?(ge.type=void 0===U?"button":U,ge.disabled=Z):(A.href||A.to||(ge.role="button"),Z&&(ge["aria-disabled"]=Z));const Re=(0,c.Z)(t,Q,Y);const Ee=(0,r.Z)({},n,{centerRipple:f,component:v,disabled:Z,disableRipple:y,disableTouchRipple:g,focusRipple:R,tabIndex:z,focusVisible:_}),xe=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:o}=e,i={root:["root",t&&"disabled",n&&"focusVisible"]},u=(0,l.Z)(i,S,o);return n&&r&&(u.root+=` ${r}`),u})(Ee);return(0,m.jsxs)($,(0,r.Z)({as:ye,className:(0,u.Z)(xe.root,b),ownerState:Ee,onBlur:fe,onClick:M,onContextMenu:ue,onFocus:he,onKeyDown:ve,onKeyUp:Ze,onMouseDown:ie,onMouseLeave:ae,onMouseUp:se,onDragLeave:le,onTouchEnd:pe,onTouchMove:de,onTouchStart:ce,ref:Re,tabIndex:Z?-1:z,type:U},ge,A,{children:[h,re?(0,m.jsx)(P,(0,r.Z)({ref:W,center:f},K)):null]}))}))},98216:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(14142).Z},57144:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(39336).Z},8038:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(82690).Z},5340:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(74161).Z},2068:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(59948).Z},51705:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(33703).Z},79674:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(99962).Z},49064:(e,t,n)=>{function r(...e){return e.reduce(((e,t)=>null==t?e:function(...n){e.apply(this,n),t.apply(this,n)}),(()=>{}))}n.d(t,{Z:()=>r})},39336:(e,t,n)=>{function r(e,t=166){let n;function r(...r){clearTimeout(n),n=setTimeout((()=>{e.apply(this,r)}),t)}return r.clear=()=>{clearTimeout(n)},r}n.d(t,{Z:()=>r})},82690:(e,t,n)=>{function r(e){return e&&e.ownerDocument||document}n.d(t,{Z:()=>r})},74161:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(82690);function o(e){return(0,r.Z)(e).defaultView||window}},7960:(e,t,n)=>{function r(e,t){"function"==typeof e?e(t):e&&(e.current=t)}n.d(t,{Z:()=>r})},73546:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294);const o="undefined"!=typeof window?r.useLayoutEffect:r.useEffect},59948:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),o=n(73546);function i(e){const t=r.useRef(e);return(0,o.Z)((()=>{t.current=e})),r.useCallback(((...e)=>(0,t.current)(...e)),[])}},33703:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),o=n(7960);function i(...e){return r.useMemo((()=>e.every((e=>null==e))?null:t=>{e.forEach((e=>{(0,o.Z)(e,t)}))}),e)}},99962:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(67294);let o,i=!0,u=!1;const l={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function s(e){e.metaKey||e.altKey||e.ctrlKey||(i=!0)}function a(){i=!1}function c(){"hidden"===this.visibilityState&&u&&(i=!0)}function p(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(n){}return i||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!l[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}function d(){const e=r.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",s,!0),t.addEventListener("mousedown",a,!0),t.addEventListener("pointerdown",a,!0),t.addEventListener("touchstart",a,!0),t.addEventListener("visibilitychange",c,!0))}),[]),t=r.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!p(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(u=!0,window.clearTimeout(o),o=window.setTimeout((()=>{u=!1}),100),t.current=!1,!0)},ref:e}}},73350:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(63366),o=n(87462),i=n(97326),u=n(75068),l=n(67294),s=n(220);function a(e,t){var n=Object.create(null);return e&&l.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,l.isValidElement)(e)?t(e):e}(e)})),n}function c(e,t,n){return null!=n[t]?n[t]:e.props[t]}function p(e,t,n){var r=a(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,o=Object.create(null),i=[];for(var u in e)u in t?i.length&&(o[u]=i,i=[]):i.push(u);var l={};for(var s in t){if(o[s])for(r=0;r<o[s].length;r++){var a=o[s][r];l[o[s][r]]=n(a)}l[s]=n(s)}for(r=0;r<i.length;r++)l[i[r]]=n(i[r]);return l}(t,r);return Object.keys(o).forEach((function(i){var u=o[i];if((0,l.isValidElement)(u)){var s=i in t,a=i in r,p=t[i],d=(0,l.isValidElement)(p)&&!p.props.in;!a||s&&!d?a||!s||d?a&&s&&(0,l.isValidElement)(p)&&(o[i]=(0,l.cloneElement)(u,{onExited:n.bind(null,u),in:p.props.in,exit:c(u,"exit",e),enter:c(u,"enter",e)})):o[i]=(0,l.cloneElement)(u,{in:!1}):o[i]=(0,l.cloneElement)(u,{onExited:n.bind(null,u),in:!0,exit:c(u,"exit",e),enter:c(u,"enter",e)})}})),o}var d=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},f=function(e){function t(t,n){var r,o=(r=e.call(this,t,n)||this).handleExited.bind((0,i.Z)(r));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}(0,u.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,o=t.children,i=t.handleExited;return{children:t.firstRender?(n=e,r=i,a(n.children,(function(e){return(0,l.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:c(e,"appear",n),enter:c(e,"enter",n),exit:c(e,"exit",n)})}))):p(e,o,i),firstRender:!1}},n.handleExited=function(e,t){var n=a(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,o.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,o=(0,r.Z)(e,["component","childFactory"]),i=this.state.contextValue,u=d(this.state.children).map(n);return delete o.appear,delete o.enter,delete o.exit,null===t?l.createElement(s.Z.Provider,{value:i},u):l.createElement(s.Z.Provider,{value:i},l.createElement(t,o,u))},t}(l.Component);f.propTypes={},f.defaultProps={component:"div",childFactory:function(e){return e}};const h=f},220:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(67294).createContext(null)},97326:(e,t,n)=>{function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:()=>r})}}]);