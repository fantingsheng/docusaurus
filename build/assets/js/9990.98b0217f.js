"use strict";(self.webpackChunkspacexcode_com=self.webpackChunkspacexcode_com||[]).push([[9990],{49990:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(87462),i=n(63366),o=n(67294),l=n(63961),s=n(94780),u=n(90948),a=n(71657),c=n(51705),p=n(2068),d=n(79674),h=n(73350),f=n(70917),m=n(85893);const b=function(e){const{className:t,classes:n,pulsate:r=!1,rippleX:i,rippleY:s,rippleSize:u,in:a,onExited:c,timeout:p}=e,[d,h]=o.useState(!1),f=(0,l.Z)(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),b={width:u,height:u,top:-u/2+s,left:-u/2+i},v=(0,l.Z)(n.child,d&&n.childLeaving,r&&n.childPulsate);return a||d||h(!0),o.useEffect((()=>{if(!a&&null!=c){const e=setTimeout(c,p);return()=>{clearTimeout(e)}}}),[c,a,p]),(0,m.jsx)("span",{className:f,style:b,children:(0,m.jsx)("span",{className:v})})};var v=n(1588);const g=(0,v.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),y=["center","classes","className"];let R,x,Z,E,M=e=>e;const T=(0,f.F4)(R||(R=M`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),k=(0,f.F4)(x||(x=M`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),w=(0,f.F4)(Z||(Z=M`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),C=(0,u.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),P=(0,u.ZP)(b,{name:"MuiTouchRipple",slot:"Ripple"})(E||(E=M`
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
`),g.rippleVisible,T,550,(({theme:e})=>e.transitions.easing.easeInOut),g.ripplePulsate,(({theme:e})=>e.transitions.duration.shorter),g.child,g.childLeaving,k,550,(({theme:e})=>e.transitions.easing.easeInOut),g.childPulsate,w,(({theme:e})=>e.transitions.easing.easeInOut)),V=o.forwardRef((function(e,t){const n=(0,a.Z)({props:e,name:"MuiTouchRipple"}),{center:s=!1,classes:u={},className:c}=n,p=(0,i.Z)(n,y),[d,f]=o.useState([]),b=o.useRef(0),v=o.useRef(null);o.useEffect((()=>{v.current&&(v.current(),v.current=null)}),[d]);const R=o.useRef(!1),x=o.useRef(0),Z=o.useRef(null),E=o.useRef(null);o.useEffect((()=>()=>{x.current&&clearTimeout(x.current)}),[]);const M=o.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:i,cb:o}=e;f((e=>[...e,(0,m.jsx)(P,{classes:{ripple:(0,l.Z)(u.ripple,g.ripple),rippleVisible:(0,l.Z)(u.rippleVisible,g.rippleVisible),ripplePulsate:(0,l.Z)(u.ripplePulsate,g.ripplePulsate),child:(0,l.Z)(u.child,g.child),childLeaving:(0,l.Z)(u.childLeaving,g.childLeaving),childPulsate:(0,l.Z)(u.childPulsate,g.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:i},b.current)])),b.current+=1,v.current=o}),[u]),T=o.useCallback(((e={},t={},n=(()=>{}))=>{const{pulsate:r=!1,center:i=s||t.pulsate,fakeElement:o=!1}=t;if("mousedown"===(null==e?void 0:e.type)&&R.current)return void(R.current=!1);"touchstart"===(null==e?void 0:e.type)&&(R.current=!0);const l=o?null:E.current,u=l?l.getBoundingClientRect():{width:0,height:0,left:0,top:0};let a,c,p;if(i||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)a=Math.round(u.width/2),c=Math.round(u.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;a=Math.round(t-u.left),c=Math.round(n-u.top)}if(i)p=Math.sqrt((2*u.width**2+u.height**2)/3),p%2==0&&(p+=1);else{const e=2*Math.max(Math.abs((l?l.clientWidth:0)-a),a)+2,t=2*Math.max(Math.abs((l?l.clientHeight:0)-c),c)+2;p=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===Z.current&&(Z.current=()=>{M({pulsate:r,rippleX:a,rippleY:c,rippleSize:p,cb:n})},x.current=setTimeout((()=>{Z.current&&(Z.current(),Z.current=null)}),80)):M({pulsate:r,rippleX:a,rippleY:c,rippleSize:p,cb:n})}),[s,M]),k=o.useCallback((()=>{T({},{pulsate:!0})}),[T]),w=o.useCallback(((e,t)=>{if(clearTimeout(x.current),"touchend"===(null==e?void 0:e.type)&&Z.current)return Z.current(),Z.current=null,void(x.current=setTimeout((()=>{w(e,t)})));Z.current=null,f((e=>e.length>0?e.slice(1):e)),v.current=t}),[]);return o.useImperativeHandle(t,(()=>({pulsate:k,start:T,stop:w})),[k,T,w]),(0,m.jsx)(C,(0,r.Z)({className:(0,l.Z)(g.root,u.root,c),ref:E},p,{children:(0,m.jsx)(h.Z,{component:null,exit:!0,children:d})}))}));var S=n(34867);function L(e){return(0,S.Z)("MuiButtonBase",e)}const D=(0,v.Z)("MuiButtonBase",["root","disabled","focusVisible"]),F=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],$=(0,u.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${D.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),j=o.forwardRef((function(e,t){const n=(0,a.Z)({props:e,name:"MuiButtonBase"}),{action:u,centerRipple:h=!1,children:f,className:b,component:v="button",disabled:g=!1,disableRipple:y=!1,disableTouchRipple:R=!1,focusRipple:x=!1,LinkComponent:Z="a",onBlur:E,onClick:M,onContextMenu:T,onDragLeave:k,onFocus:w,onFocusVisible:C,onKeyDown:P,onKeyUp:S,onMouseDown:D,onMouseLeave:j,onMouseUp:B,onTouchEnd:N,onTouchMove:I,onTouchStart:O,tabIndex:z=0,TouchRippleProps:K,touchRippleRef:X,type:U}=n,A=(0,i.Z)(n,F),Y=o.useRef(null),H=o.useRef(null),W=(0,c.Z)(H,X),{isFocusVisibleRef:q,onFocus:_,onBlur:G,ref:J}=(0,d.Z)(),[Q,ee]=o.useState(!1);g&&Q&&ee(!1),o.useImperativeHandle(u,(()=>({focusVisible:()=>{ee(!0),Y.current.focus()}})),[]);const[te,ne]=o.useState(!1);o.useEffect((()=>{ne(!0)}),[]);const re=te&&!y&&!g;function ie(e,t,n=R){return(0,p.Z)((r=>{t&&t(r);return!n&&H.current&&H.current[e](r),!0}))}o.useEffect((()=>{Q&&x&&!y&&te&&H.current.pulsate()}),[y,x,Q,te]);const oe=ie("start",D),le=ie("stop",T),se=ie("stop",k),ue=ie("stop",B),ae=ie("stop",(e=>{Q&&e.preventDefault(),j&&j(e)})),ce=ie("start",O),pe=ie("stop",N),de=ie("stop",I),he=ie("stop",(e=>{G(e),!1===q.current&&ee(!1),E&&E(e)}),!1),fe=(0,p.Z)((e=>{Y.current||(Y.current=e.currentTarget),_(e),!0===q.current&&(ee(!0),C&&C(e)),w&&w(e)})),me=()=>{const e=Y.current;return v&&"button"!==v&&!("A"===e.tagName&&e.href)},be=o.useRef(!1),ve=(0,p.Z)((e=>{x&&!be.current&&Q&&H.current&&" "===e.key&&(be.current=!0,H.current.stop(e,(()=>{H.current.start(e)}))),e.target===e.currentTarget&&me()&&" "===e.key&&e.preventDefault(),P&&P(e),e.target===e.currentTarget&&me()&&"Enter"===e.key&&!g&&(e.preventDefault(),M&&M(e))})),ge=(0,p.Z)((e=>{x&&" "===e.key&&H.current&&Q&&!e.defaultPrevented&&(be.current=!1,H.current.stop(e,(()=>{H.current.pulsate(e)}))),S&&S(e),M&&e.target===e.currentTarget&&me()&&" "===e.key&&!e.defaultPrevented&&M(e)}));let ye=v;"button"===ye&&(A.href||A.to)&&(ye=Z);const Re={};"button"===ye?(Re.type=void 0===U?"button":U,Re.disabled=g):(A.href||A.to||(Re.role="button"),g&&(Re["aria-disabled"]=g));const xe=(0,c.Z)(t,J,Y);const Ze=(0,r.Z)({},n,{centerRipple:h,component:v,disabled:g,disableRipple:y,disableTouchRipple:R,focusRipple:x,tabIndex:z,focusVisible:Q}),Ee=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:i}=e,o={root:["root",t&&"disabled",n&&"focusVisible"]},l=(0,s.Z)(o,L,i);return n&&r&&(l.root+=` ${r}`),l})(Ze);return(0,m.jsxs)($,(0,r.Z)({as:ye,className:(0,l.Z)(Ee.root,b),ownerState:Ze,onBlur:he,onClick:M,onContextMenu:le,onFocus:fe,onKeyDown:ve,onKeyUp:ge,onMouseDown:oe,onMouseLeave:ae,onMouseUp:ue,onDragLeave:se,onTouchEnd:pe,onTouchMove:de,onTouchStart:ce,ref:xe,tabIndex:g?-1:z,type:U},Re,A,{children:[f,re?(0,m.jsx)(V,(0,r.Z)({ref:W,center:h},K)):null]}))}))},2068:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(59948).Z},79674:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(99962).Z},99962:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(67294);let i,o=!0,l=!1;const s={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function u(e){e.metaKey||e.altKey||e.ctrlKey||(o=!0)}function a(){o=!1}function c(){"hidden"===this.visibilityState&&l&&(o=!0)}function p(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(n){}return o||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!s[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}function d(){const e=r.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",u,!0),t.addEventListener("mousedown",a,!0),t.addEventListener("pointerdown",a,!0),t.addEventListener("touchstart",a,!0),t.addEventListener("visibilitychange",c,!0))}),[]),t=r.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!p(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(l=!0,window.clearTimeout(i),i=window.setTimeout((()=>{l=!1}),100),t.current=!1,!0)},ref:e}}},73350:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(63366),i=n(87462),o=n(97326),l=n(75068),s=n(67294),u=n(220);function a(e,t){var n=Object.create(null);return e&&s.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,s.isValidElement)(e)?t(e):e}(e)})),n}function c(e,t,n){return null!=n[t]?n[t]:e.props[t]}function p(e,t,n){var r=a(e.children),i=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),o=[];for(var l in e)l in t?o.length&&(i[l]=o,o=[]):o.push(l);var s={};for(var u in t){if(i[u])for(r=0;r<i[u].length;r++){var a=i[u][r];s[i[u][r]]=n(a)}s[u]=n(u)}for(r=0;r<o.length;r++)s[o[r]]=n(o[r]);return s}(t,r);return Object.keys(i).forEach((function(o){var l=i[o];if((0,s.isValidElement)(l)){var u=o in t,a=o in r,p=t[o],d=(0,s.isValidElement)(p)&&!p.props.in;!a||u&&!d?a||!u||d?a&&u&&(0,s.isValidElement)(p)&&(i[o]=(0,s.cloneElement)(l,{onExited:n.bind(null,l),in:p.props.in,exit:c(l,"exit",e),enter:c(l,"enter",e)})):i[o]=(0,s.cloneElement)(l,{in:!1}):i[o]=(0,s.cloneElement)(l,{onExited:n.bind(null,l),in:!0,exit:c(l,"exit",e),enter:c(l,"enter",e)})}})),i}var d=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},h=function(e){function t(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind((0,o.Z)(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,l.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,i=t.children,o=t.handleExited;return{children:t.firstRender?(n=e,r=o,a(n.children,(function(e){return(0,s.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:c(e,"appear",n),enter:c(e,"enter",n),exit:c(e,"exit",n)})}))):p(e,i,o),firstRender:!1}},n.handleExited=function(e,t){var n=a(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,i.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,i=(0,r.Z)(e,["component","childFactory"]),o=this.state.contextValue,l=d(this.state.children).map(n);return delete i.appear,delete i.enter,delete i.exit,null===t?s.createElement(u.Z.Provider,{value:o},l):s.createElement(u.Z.Provider,{value:o},s.createElement(t,i,l))},t}(s.Component);h.propTypes={},h.defaultProps={component:"div",childFactory:function(e){return e}};const f=h},97326:(e,t,n)=>{function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:()=>r})}}]);