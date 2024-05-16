"use strict";(self.webpackChunkspacexcode_com=self.webpackChunkspacexcode_com||[]).push([[1518],{98456:(e,r,t)=>{t.d(r,{Z:()=>M});var a=t(63366),s=t(87462),o=t(67294),i=t(63961),n=t(94780),l=t(70917),c=t(98216),d=t(71657),h=t(90948),v=t(1588),m=t(34867);function u(e){return(0,m.Z)("MuiCircularProgress",e)}(0,v.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var x=t(85893);const k=["className","color","disableShrink","size","style","thickness","value","variant"];let p,f,g,Z,w=e=>e;const _=44,j=(0,l.F4)(p||(p=w`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),C=(0,l.F4)(f||(f=w`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),y=(0,h.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,c.Z)(t.color)}`]]}})((({ownerState:e,theme:r})=>(0,s.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:r.transitions.create("transform")},"inherit"!==e.color&&{color:(r.vars||r).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,l.iv)(g||(g=w`
      animation: ${0} 1.4s linear infinite;
    `),j))),S=(0,h.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),b=(0,h.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${(0,c.Z)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((({ownerState:e,theme:r})=>(0,s.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,l.iv)(Z||(Z=w`
      animation: ${0} 1.4s ease-in-out infinite;
    `),C))),M=o.forwardRef((function(e,r){const t=(0,d.Z)({props:e,name:"MuiCircularProgress"}),{className:o,color:l="primary",disableShrink:h=!1,size:v=40,style:m,thickness:p=3.6,value:f=0,variant:g="indeterminate"}=t,Z=(0,a.Z)(t,k),w=(0,s.Z)({},t,{color:l,disableShrink:h,size:v,thickness:p,value:f,variant:g}),j=(e=>{const{classes:r,variant:t,color:a,disableShrink:s}=e,o={root:["root",t,`color${(0,c.Z)(a)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(t)}`,s&&"circleDisableShrink"]};return(0,n.Z)(o,u,r)})(w),C={},M={},D={};if("determinate"===g){const e=2*Math.PI*((_-p)/2);C.strokeDasharray=e.toFixed(3),D["aria-valuenow"]=Math.round(f),C.strokeDashoffset=`${((100-f)/100*e).toFixed(3)}px`,M.transform="rotate(-90deg)"}return(0,x.jsx)(y,(0,s.Z)({className:(0,i.Z)(j.root,o),style:(0,s.Z)({width:v,height:v},M,m),ownerState:w,ref:r,role:"progressbar"},D,Z,{children:(0,x.jsx)(S,{className:j.svg,ownerState:w,viewBox:"22 22 44 44",children:(0,x.jsx)(b,{className:j.circle,style:C,ownerState:w,cx:_,cy:_,r:(_-p)/2,fill:"none",strokeWidth:p})})}))}))},40760:(e,r,t)=>{t.r(r),t.d(r,{default:()=>n});t(67294);var a=t(86010),s=t(73613),o=t(98456),i=t(85893);function n(e){let{route:r,active:t,loading:n,handleClickRoute:l,dropDown:c,handleClickMore:d}=e;return(0,i.jsxs)("li",{style:{borderColor:t?r.color:"#e0e4e0"},onClick:()=>l(r.slug),children:[(0,i.jsxs)("div",{className:s.Z.rhead,children:[(0,i.jsxs)("p",{children:[(0,i.jsx)("span",{className:s.Z.dot,style:{backgroundColor:r.color}}),r.name]}),(0,i.jsx)("span",{className:s.Z.mode,children:r.type})]}),(0,i.jsxs)("ol",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{children:"\u8def\u7a0b (Distance)"}),(0,i.jsxs)("strong",{children:[r.distance," km"]})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{children:"\u6d77\u62d4 (Elevation)"}),(0,i.jsxs)("strong",{children:[r.elevation," m"]})]})]}),(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:(0,a.Z)(s.Z.moreBtn,t&&c?s.Z.open:""),onClick:()=>d(),children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5l7 7-7 7"})}),n&&t?(0,i.jsx)("div",{className:s.Z.loadingCover,children:(0,i.jsx)(o.Z,{color:"inherit"})}):(0,i.jsx)(i.Fragment,{})]},r.slug)}},73613:(e,r,t)=>{t.d(r,{Z:()=>a});const a={aside:"aside_aON2",nav:"nav_jwR_",header:"header_MbCX",filterNav:"filterNav_dMb8",routerList:"routerList_A1GY",rhead:"rhead_DOIQ",dot:"dot_JUJJ",moreBtn:"moreBtn_p2BJ",open:"open_mBFW",loadingCover:"loadingCover_BQkP",divCenter:"divCenter_yMXO",drwInner:"drwInner_sB0L",drwhead:"drwhead_Zjwd",routeDetail:"routeDetail_jFub",chartBox:"chartBox_GQVy",intro:"intro_iRGh",footer:"footer_sZ_K",rightMap:"rightMap_LANU",small:"small_VQa2",chart:"chart_wvgD",hoverText:"hoverText_CmA6"}}}]);