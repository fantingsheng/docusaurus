"use strict";(self.webpackChunkspacexcode_com=self.webpackChunkspacexcode_com||[]).push([[7521],{1958:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(67294),i=n(63961),o=n(15463),s=n(81990),u=n(90948),l=n(28628),a=n(51705),c=n(2068),p=n(90933);class d{static create(){return new d}static use(){const e=(0,p.Z)(d.create).current,[t,n]=r.useState(!1);return e.shouldMount=t,e.setShouldMount=n,r.useEffect(e.mountEffect,[t]),e}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=function(){let e,t;const n=new Promise(((n,r)=>{e=n,t=r}));return n.resolve=e,n.reject=t,n}(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&null!==this.ref.current&&(this.didMount=!0,this.mounted.resolve())};start(...e){this.mount().then((()=>this.ref.current?.start(...e)))}stop(...e){this.mount().then((()=>this.ref.current?.stop(...e)))}pulsate(...e){this.mount().then((()=>this.ref.current?.pulsate(...e)))}}var h=n(63366),f=n(87462);var m=n(75068),b=n(220);function v(e,t){var n=Object.create(null);return e&&r.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,r.isValidElement)(e)?t(e):e}(e)})),n}function g(e,t,n){return null!=n[t]?n[t]:e.props[t]}function x(e,t,n){var i=v(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),o=[];for(var s in e)s in t?o.length&&(i[s]=o,o=[]):o.push(s);var u={};for(var l in t){if(i[l])for(r=0;r<i[l].length;r++){var a=i[l][r];u[i[l][r]]=n(a)}u[l]=n(l)}for(r=0;r<o.length;r++)u[o[r]]=n(o[r]);return u}(t,i);return Object.keys(o).forEach((function(s){var u=o[s];if((0,r.isValidElement)(u)){var l=s in t,a=s in i,c=t[s],p=(0,r.isValidElement)(c)&&!c.props.in;!a||l&&!p?a||!l||p?a&&l&&(0,r.isValidElement)(c)&&(o[s]=(0,r.cloneElement)(u,{onExited:n.bind(null,u),in:c.props.in,exit:g(u,"exit",e),enter:g(u,"enter",e)})):o[s]=(0,r.cloneElement)(u,{in:!1}):o[s]=(0,r.cloneElement)(u,{onExited:n.bind(null,u),in:!0,exit:g(u,"exit",e),enter:g(u,"enter",e)})}})),o}var M=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},y=function(e){function t(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,m.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,i,o=t.children,s=t.handleExited;return{children:t.firstRender?(n=e,i=s,v(n.children,(function(e){return(0,r.cloneElement)(e,{onExited:i.bind(null,e),in:!0,appear:g(e,"appear",n),enter:g(e,"enter",n),exit:g(e,"exit",n)})}))):x(e,o,s),firstRender:!1}},n.handleExited=function(e,t){var n=v(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,f.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,i=(0,h.Z)(e,["component","childFactory"]),o=this.state.contextValue,s=M(this.state.children).map(n);return delete i.appear,delete i.enter,delete i.exit,null===t?r.createElement(b.Z.Provider,{value:o},s):r.createElement(b.Z.Provider,{value:o},r.createElement(t,i,s))},t}(r.Component);y.propTypes={},y.defaultProps={component:"div",childFactory:function(e){return e}};const Z=y;var E=n(1437),R=n(70917),k=n(85893);const P=function(e){const{className:t,classes:n,pulsate:o=!1,rippleX:s,rippleY:u,rippleSize:l,in:a,onExited:c,timeout:p}=e,[d,h]=r.useState(!1),f=(0,i.Z)(t,n.ripple,n.rippleVisible,o&&n.ripplePulsate),m={width:l,height:l,top:-l/2+u,left:-l/2+s},b=(0,i.Z)(n.child,d&&n.childLeaving,o&&n.childPulsate);return a||d||h(!0),r.useEffect((()=>{if(!a&&null!=c){const e=setTimeout(c,p);return()=>{clearTimeout(e)}}}),[c,a,p]),(0,k.jsx)("span",{className:f,style:m,children:(0,k.jsx)("span",{className:b})})};var T=n(45154);const w=(0,T.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),V=R.F4`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,S=R.F4`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,C=R.F4`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,I=(0,u.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),$=(0,u.ZP)(P,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${w.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${V};
    animation-duration: ${550}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${w.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${w.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${w.childLeaving} {
    opacity: 0;
    animation-name: ${S};
    animation-duration: ${550}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${w.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${C};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,j=r.forwardRef((function(e,t){const n=(0,l.i)({props:e,name:"MuiTouchRipple"}),{center:o=!1,classes:s={},className:u,...a}=n,[c,p]=r.useState([]),d=r.useRef(0),h=r.useRef(null);r.useEffect((()=>{h.current&&(h.current(),h.current=null)}),[c]);const f=r.useRef(!1),m=(0,E.Z)(),b=r.useRef(null),v=r.useRef(null),g=r.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:o,cb:u}=e;p((e=>[...e,(0,k.jsx)($,{classes:{ripple:(0,i.Z)(s.ripple,w.ripple),rippleVisible:(0,i.Z)(s.rippleVisible,w.rippleVisible),ripplePulsate:(0,i.Z)(s.ripplePulsate,w.ripplePulsate),child:(0,i.Z)(s.child,w.child),childLeaving:(0,i.Z)(s.childLeaving,w.childLeaving),childPulsate:(0,i.Z)(s.childPulsate,w.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:o},d.current)])),d.current+=1,h.current=u}),[s]),x=r.useCallback(((e={},t={},n=(()=>{}))=>{const{pulsate:r=!1,center:i=o||t.pulsate,fakeElement:s=!1}=t;if("mousedown"===e?.type&&f.current)return void(f.current=!1);"touchstart"===e?.type&&(f.current=!0);const u=s?null:v.current,l=u?u.getBoundingClientRect():{width:0,height:0,left:0,top:0};let a,c,p;if(i||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)a=Math.round(l.width/2),c=Math.round(l.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;a=Math.round(t-l.left),c=Math.round(n-l.top)}if(i)p=Math.sqrt((2*l.width**2+l.height**2)/3),p%2==0&&(p+=1);else{const e=2*Math.max(Math.abs((u?u.clientWidth:0)-a),a)+2,t=2*Math.max(Math.abs((u?u.clientHeight:0)-c),c)+2;p=Math.sqrt(e**2+t**2)}e?.touches?null===b.current&&(b.current=()=>{g({pulsate:r,rippleX:a,rippleY:c,rippleSize:p,cb:n})},m.start(80,(()=>{b.current&&(b.current(),b.current=null)}))):g({pulsate:r,rippleX:a,rippleY:c,rippleSize:p,cb:n})}),[o,g,m]),M=r.useCallback((()=>{x({},{pulsate:!0})}),[x]),y=r.useCallback(((e,t)=>{if(m.clear(),"touchend"===e?.type&&b.current)return b.current(),b.current=null,void m.start(0,(()=>{y(e,t)}));b.current=null,p((e=>e.length>0?e.slice(1):e)),h.current=t}),[m]);return r.useImperativeHandle(t,(()=>({pulsate:M,start:x,stop:y})),[M,x,y]),(0,k.jsx)(I,{className:(0,i.Z)(w.root,s.root,u),ref:v,...a,children:(0,k.jsx)(Z,{component:null,exit:!0,children:c})})}));var D=n(22104);function B(e){return(0,D.ZP)("MuiButtonBase",e)}const L=(0,T.Z)("MuiButtonBase",["root","disabled","focusVisible"]),F=(0,u.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${L.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),N=r.forwardRef((function(e,t){const n=(0,l.i)({props:e,name:"MuiButtonBase"}),{action:u,centerRipple:p=!1,children:h,className:f,component:m="button",disabled:b=!1,disableRipple:v=!1,disableTouchRipple:g=!1,focusRipple:x=!1,focusVisibleClassName:M,LinkComponent:y="a",onBlur:Z,onClick:E,onContextMenu:R,onDragLeave:P,onFocus:T,onFocusVisible:w,onKeyDown:V,onKeyUp:S,onMouseDown:C,onMouseLeave:I,onMouseUp:$,onTouchEnd:D,onTouchMove:L,onTouchStart:N,tabIndex:z=0,TouchRippleProps:O,touchRippleRef:X,type:Y,...A}=n,U=r.useRef(null),H=d.use(),K=(0,a.Z)(H.ref,X),[W,q]=r.useState(!1);b&&W&&q(!1),r.useImperativeHandle(u,(()=>({focusVisible:()=>{q(!0),U.current.focus()}})),[]);const _=H.shouldMount&&!v&&!b;function G(e,t,n=g){return(0,c.Z)((r=>{t&&t(r);return n||H[e](r),!0}))}r.useEffect((()=>{W&&x&&!v&&H.pulsate()}),[v,x,W,H]);const J=G("start",C),Q=G("stop",R),ee=G("stop",P),te=G("stop",$),ne=G("stop",(e=>{W&&e.preventDefault(),I&&I(e)})),re=G("start",N),ie=G("stop",D),oe=G("stop",L),se=G("stop",(e=>{(0,s.Z)(e.target)||q(!1),Z&&Z(e)}),!1),ue=(0,c.Z)((e=>{U.current||(U.current=e.currentTarget),(0,s.Z)(e.target)&&(q(!0),w&&w(e)),T&&T(e)})),le=()=>{const e=U.current;return m&&"button"!==m&&!("A"===e.tagName&&e.href)},ae=(0,c.Z)((e=>{x&&!e.repeat&&W&&" "===e.key&&H.stop(e,(()=>{H.start(e)})),e.target===e.currentTarget&&le()&&" "===e.key&&e.preventDefault(),V&&V(e),e.target===e.currentTarget&&le()&&"Enter"===e.key&&!b&&(e.preventDefault(),E&&E(e))})),ce=(0,c.Z)((e=>{x&&" "===e.key&&W&&!e.defaultPrevented&&H.stop(e,(()=>{H.pulsate(e)})),S&&S(e),E&&e.target===e.currentTarget&&le()&&" "===e.key&&!e.defaultPrevented&&E(e)}));let pe=m;"button"===pe&&(A.href||A.to)&&(pe=y);const de={};"button"===pe?(de.type=void 0===Y?"button":Y,de.disabled=b):(A.href||A.to||(de.role="button"),b&&(de["aria-disabled"]=b));const he=(0,a.Z)(t,U),fe={...n,centerRipple:p,component:m,disabled:b,disableRipple:v,disableTouchRipple:g,focusRipple:x,tabIndex:z,focusVisible:W},me=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:i}=e,s={root:["root",t&&"disabled",n&&"focusVisible"]},u=(0,o.Z)(s,B,i);return n&&r&&(u.root+=` ${r}`),u})(fe);return(0,k.jsxs)(F,{as:pe,className:(0,i.Z)(me.root,f),ownerState:fe,onBlur:se,onClick:E,onContextMenu:Q,onFocus:ue,onKeyDown:ae,onKeyUp:ce,onMouseDown:J,onMouseLeave:ne,onMouseUp:te,onDragLeave:ee,onTouchEnd:ie,onTouchMove:oe,onTouchStart:re,ref:he,tabIndex:b?-1:z,type:Y,...de,...A,children:[h,_?(0,k.jsx)(j,{ref:K,center:p,...O}):null]})}))},81990:(e,t,n)=>{function r(e){try{return e.matches(":focus-visible")}catch(t){0}return!1}n.d(t,{Z:()=>r})},90933:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294);const i={};function o(e,t){const n=r.useRef(i);return n.current===i&&(n.current=e(t)),n}},1437:(e,t,n)=>{n.d(t,{V:()=>s,Z:()=>u});var r=n(90933),i=n(67294);const o=[];class s{static create(){return new s}currentId=null;start(e,t){this.clear(),this.currentId=setTimeout((()=>{this.currentId=null,t()}),e)}clear=()=>{null!==this.currentId&&(clearTimeout(this.currentId),this.currentId=null)};disposeEffect=()=>this.clear}function u(){const e=(0,r.Z)(s.create).current;var t;return t=e.disposeEffect,i.useEffect(t,o),e}},40902:(e,t,n)=>{function r(e=[]){return([,t])=>t&&function(e,t=[]){if(!function(e){return"string"==typeof e.main}(e))return!1;for(const n of t)if(!e.hasOwnProperty(n)||"string"!=typeof e[n])return!1;return!0}(t,e)}n.d(t,{Z:()=>r})},2068:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(88515).Z}}]);