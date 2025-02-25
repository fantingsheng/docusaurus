"use strict";(self.webpackChunkspacexcode_com=self.webpackChunkspacexcode_com||[]).push([[7739],{47739:(e,t,n)=>{n.d(t,{Z:()=>X});var r=n(87462),i=n(63366),o=n(67294),l=n(63961),s=n(94780),a=n(90948),u=n(71657),c=n(51705),p=n(2068),d=n(79674);var h=n(75068),f=n(220);function m(e,t){var n=Object.create(null);return e&&o.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,o.isValidElement)(e)?t(e):e}(e)})),n}function b(e,t,n){return null!=n[t]?n[t]:e.props[t]}function v(e,t,n){var r=m(e.children),i=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),o=[];for(var l in e)l in t?o.length&&(i[l]=o,o=[]):o.push(l);var s={};for(var a in t){if(i[a])for(r=0;r<i[a].length;r++){var u=i[a][r];s[i[a][r]]=n(u)}s[a]=n(a)}for(r=0;r<o.length;r++)s[o[r]]=n(o[r]);return s}(t,r);return Object.keys(i).forEach((function(l){var s=i[l];if((0,o.isValidElement)(s)){var a=l in t,u=l in r,c=t[l],p=(0,o.isValidElement)(c)&&!c.props.in;!u||a&&!p?u||!a||p?u&&a&&(0,o.isValidElement)(c)&&(i[l]=(0,o.cloneElement)(s,{onExited:n.bind(null,s),in:c.props.in,exit:b(s,"exit",e),enter:b(s,"enter",e)})):i[l]=(0,o.cloneElement)(s,{in:!1}):i[l]=(0,o.cloneElement)(s,{onExited:n.bind(null,s),in:!0,exit:b(s,"exit",e),enter:b(s,"enter",e)})}})),i}var g=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},y=function(e){function t(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,h.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,i=t.children,l=t.handleExited;return{children:t.firstRender?(n=e,r=l,m(n.children,(function(e){return(0,o.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:b(e,"appear",n),enter:b(e,"enter",n),exit:b(e,"exit",n)})}))):v(e,i,l),firstRender:!1}},n.handleExited=function(e,t){var n=m(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,r.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=(0,i.Z)(e,["component","childFactory"]),l=this.state.contextValue,s=g(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?o.createElement(f.Z.Provider,{value:l},s):o.createElement(f.Z.Provider,{value:l},o.createElement(t,r,s))},t}(o.Component);y.propTypes={},y.defaultProps={component:"div",childFactory:function(e){return e}};const R=y;var x=n(70917),E=n(85893);const Z=function(e){const{className:t,classes:n,pulsate:r=!1,rippleX:i,rippleY:s,rippleSize:a,in:u,onExited:c,timeout:p}=e,[d,h]=o.useState(!1),f=(0,l.Z)(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),m={width:a,height:a,top:-a/2+s,left:-a/2+i},b=(0,l.Z)(n.child,d&&n.childLeaving,r&&n.childPulsate);return u||d||h(!0),o.useEffect((()=>{if(!u&&null!=c){const e=setTimeout(c,p);return()=>{clearTimeout(e)}}}),[c,u,p]),(0,E.jsx)("span",{className:f,style:m,children:(0,E.jsx)("span",{className:b})})};var M=n(1588);const T=(0,M.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),k=["center","classes","className"];let w,C,P,V,S=e=>e;const L=(0,x.F4)(w||(w=S`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),D=(0,x.F4)(C||(C=S`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),F=(0,x.F4)(P||(P=S`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),$=(0,a.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),j=(0,a.ZP)(Z,{name:"MuiTouchRipple",slot:"Ripple"})(V||(V=S`
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
`),T.rippleVisible,L,550,(({theme:e})=>e.transitions.easing.easeInOut),T.ripplePulsate,(({theme:e})=>e.transitions.duration.shorter),T.child,T.childLeaving,D,550,(({theme:e})=>e.transitions.easing.easeInOut),T.childPulsate,F,(({theme:e})=>e.transitions.easing.easeInOut)),B=o.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiTouchRipple"}),{center:s=!1,classes:a={},className:c}=n,p=(0,i.Z)(n,k),[d,h]=o.useState([]),f=o.useRef(0),m=o.useRef(null);o.useEffect((()=>{m.current&&(m.current(),m.current=null)}),[d]);const b=o.useRef(!1),v=o.useRef(0),g=o.useRef(null),y=o.useRef(null);o.useEffect((()=>()=>{v.current&&clearTimeout(v.current)}),[]);const x=o.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:i,cb:o}=e;h((e=>[...e,(0,E.jsx)(j,{classes:{ripple:(0,l.Z)(a.ripple,T.ripple),rippleVisible:(0,l.Z)(a.rippleVisible,T.rippleVisible),ripplePulsate:(0,l.Z)(a.ripplePulsate,T.ripplePulsate),child:(0,l.Z)(a.child,T.child),childLeaving:(0,l.Z)(a.childLeaving,T.childLeaving),childPulsate:(0,l.Z)(a.childPulsate,T.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:i},f.current)])),f.current+=1,m.current=o}),[a]),Z=o.useCallback(((e={},t={},n=(()=>{}))=>{const{pulsate:r=!1,center:i=s||t.pulsate,fakeElement:o=!1}=t;if("mousedown"===(null==e?void 0:e.type)&&b.current)return void(b.current=!1);"touchstart"===(null==e?void 0:e.type)&&(b.current=!0);const l=o?null:y.current,a=l?l.getBoundingClientRect():{width:0,height:0,left:0,top:0};let u,c,p;if(i||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)u=Math.round(a.width/2),c=Math.round(a.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;u=Math.round(t-a.left),c=Math.round(n-a.top)}if(i)p=Math.sqrt((2*a.width**2+a.height**2)/3),p%2==0&&(p+=1);else{const e=2*Math.max(Math.abs((l?l.clientWidth:0)-u),u)+2,t=2*Math.max(Math.abs((l?l.clientHeight:0)-c),c)+2;p=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===g.current&&(g.current=()=>{x({pulsate:r,rippleX:u,rippleY:c,rippleSize:p,cb:n})},v.current=setTimeout((()=>{g.current&&(g.current(),g.current=null)}),80)):x({pulsate:r,rippleX:u,rippleY:c,rippleSize:p,cb:n})}),[s,x]),M=o.useCallback((()=>{Z({},{pulsate:!0})}),[Z]),w=o.useCallback(((e,t)=>{if(clearTimeout(v.current),"touchend"===(null==e?void 0:e.type)&&g.current)return g.current(),g.current=null,void(v.current=setTimeout((()=>{w(e,t)})));g.current=null,h((e=>e.length>0?e.slice(1):e)),m.current=t}),[]);return o.useImperativeHandle(t,(()=>({pulsate:M,start:Z,stop:w})),[M,Z,w]),(0,E.jsx)($,(0,r.Z)({className:(0,l.Z)(T.root,a.root,c),ref:y},p,{children:(0,E.jsx)(R,{component:null,exit:!0,children:d})}))}));var N=n(34867);function I(e){return(0,N.Z)("MuiButtonBase",e)}const O=(0,M.Z)("MuiButtonBase",["root","disabled","focusVisible"]),z=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],K=(0,a.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${O.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),X=o.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiButtonBase"}),{action:a,centerRipple:h=!1,children:f,className:m,component:b="button",disabled:v=!1,disableRipple:g=!1,disableTouchRipple:y=!1,focusRipple:R=!1,LinkComponent:x="a",onBlur:Z,onClick:M,onContextMenu:T,onDragLeave:k,onFocus:w,onFocusVisible:C,onKeyDown:P,onKeyUp:V,onMouseDown:S,onMouseLeave:L,onMouseUp:D,onTouchEnd:F,onTouchMove:$,onTouchStart:j,tabIndex:N=0,TouchRippleProps:O,touchRippleRef:X,type:U}=n,A=(0,i.Z)(n,z),Y=o.useRef(null),H=o.useRef(null),W=(0,c.Z)(H,X),{isFocusVisibleRef:q,onFocus:_,onBlur:G,ref:J}=(0,d.Z)(),[Q,ee]=o.useState(!1);v&&Q&&ee(!1),o.useImperativeHandle(a,(()=>({focusVisible:()=>{ee(!0),Y.current.focus()}})),[]);const[te,ne]=o.useState(!1);o.useEffect((()=>{ne(!0)}),[]);const re=te&&!g&&!v;function ie(e,t,n=y){return(0,p.Z)((r=>{t&&t(r);return!n&&H.current&&H.current[e](r),!0}))}o.useEffect((()=>{Q&&R&&!g&&te&&H.current.pulsate()}),[g,R,Q,te]);const oe=ie("start",S),le=ie("stop",T),se=ie("stop",k),ae=ie("stop",D),ue=ie("stop",(e=>{Q&&e.preventDefault(),L&&L(e)})),ce=ie("start",j),pe=ie("stop",F),de=ie("stop",$),he=ie("stop",(e=>{G(e),!1===q.current&&ee(!1),Z&&Z(e)}),!1),fe=(0,p.Z)((e=>{Y.current||(Y.current=e.currentTarget),_(e),!0===q.current&&(ee(!0),C&&C(e)),w&&w(e)})),me=()=>{const e=Y.current;return b&&"button"!==b&&!("A"===e.tagName&&e.href)},be=o.useRef(!1),ve=(0,p.Z)((e=>{R&&!be.current&&Q&&H.current&&" "===e.key&&(be.current=!0,H.current.stop(e,(()=>{H.current.start(e)}))),e.target===e.currentTarget&&me()&&" "===e.key&&e.preventDefault(),P&&P(e),e.target===e.currentTarget&&me()&&"Enter"===e.key&&!v&&(e.preventDefault(),M&&M(e))})),ge=(0,p.Z)((e=>{R&&" "===e.key&&H.current&&Q&&!e.defaultPrevented&&(be.current=!1,H.current.stop(e,(()=>{H.current.pulsate(e)}))),V&&V(e),M&&e.target===e.currentTarget&&me()&&" "===e.key&&!e.defaultPrevented&&M(e)}));let ye=b;"button"===ye&&(A.href||A.to)&&(ye=x);const Re={};"button"===ye?(Re.type=void 0===U?"button":U,Re.disabled=v):(A.href||A.to||(Re.role="button"),v&&(Re["aria-disabled"]=v));const xe=(0,c.Z)(t,J,Y);const Ee=(0,r.Z)({},n,{centerRipple:h,component:b,disabled:v,disableRipple:g,disableTouchRipple:y,focusRipple:R,tabIndex:N,focusVisible:Q}),Ze=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:i}=e,o={root:["root",t&&"disabled",n&&"focusVisible"]},l=(0,s.Z)(o,I,i);return n&&r&&(l.root+=` ${r}`),l})(Ee);return(0,E.jsxs)(K,(0,r.Z)({as:ye,className:(0,l.Z)(Ze.root,m),ownerState:Ee,onBlur:he,onClick:M,onContextMenu:le,onFocus:fe,onKeyDown:ve,onKeyUp:ge,onMouseDown:oe,onMouseLeave:ue,onMouseUp:ae,onDragLeave:se,onTouchEnd:pe,onTouchMove:de,onTouchStart:ce,ref:xe,tabIndex:v?-1:N,type:U},Re,A,{children:[f,re?(0,E.jsx)(B,(0,r.Z)({ref:W,center:h},O)):null]}))}))},2068:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(59948).Z},79674:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(99962).Z},99962:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(67294);let i,o=!0,l=!1;const s={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function a(e){e.metaKey||e.altKey||e.ctrlKey||(o=!0)}function u(){o=!1}function c(){"hidden"===this.visibilityState&&l&&(o=!0)}function p(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(n){}return o||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!s[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}function d(){const e=r.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",a,!0),t.addEventListener("mousedown",u,!0),t.addEventListener("pointerdown",u,!0),t.addEventListener("touchstart",u,!0),t.addEventListener("visibilitychange",c,!0))}),[]),t=r.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!p(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(l=!0,window.clearTimeout(i),i=window.setTimeout((()=>{l=!1}),100),t.current=!1,!0)},ref:e}}}}]);