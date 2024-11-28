"use strict";(self.webpackChunkspacexcode_com=self.webpackChunkspacexcode_com||[]).push([[1518],{98456:(e,r,t)=>{t.d(r,{Z:()=>_});var s=t(67294),o=t(63961),i=t(15463),a=t(70917),n=t(90948),l=t(96918),c=t(28628),d=t(98216),h=t(40902),p=t(45154),u=t(22104);function v(e){return(0,u.ZP)("MuiCircularProgress",e)}(0,p.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var m=t(85893);const f=44,x=a.F4`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,k=a.F4`
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
`,g="string"!=typeof x?a.iv`
        animation: ${x} 1.4s linear infinite;
      `:null,y="string"!=typeof k?a.iv`
        animation: ${k} 1.4s ease-in-out infinite;
      `:null,Z=(0,n.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,d.Z)(t.color)}`]]}})((0,l.Z)((({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:g||{animation:`${x} 1.4s linear infinite`}},...Object.entries(e.palette).filter((0,h.Z)()).map((([r])=>({props:{color:r},style:{color:(e.vars||e).palette[r].main}})))]})))),w=(0,n.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),j=(0,n.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${(0,d.Z)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((0,l.Z)((({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink,style:y||{animation:`${k} 1.4s ease-in-out infinite`}}]})))),_=s.forwardRef((function(e,r){const t=(0,c.i)({props:e,name:"MuiCircularProgress"}),{className:s,color:a="primary",disableShrink:n=!1,size:l=40,style:h,thickness:p=3.6,value:u=0,variant:x="indeterminate",...k}=t,g={...t,color:a,disableShrink:n,size:l,thickness:p,value:u,variant:x},y=(e=>{const{classes:r,variant:t,color:s,disableShrink:o}=e,a={root:["root",t,`color${(0,d.Z)(s)}`],svg:["svg"],circle:["circle",`circle${(0,d.Z)(t)}`,o&&"circleDisableShrink"]};return(0,i.Z)(a,v,r)})(g),_={},C={},b={};if("determinate"===x){const e=2*Math.PI*((f-p)/2);_.strokeDasharray=e.toFixed(3),b["aria-valuenow"]=Math.round(u),_.strokeDashoffset=`${((100-u)/100*e).toFixed(3)}px`,C.transform="rotate(-90deg)"}return(0,m.jsx)(Z,{className:(0,o.Z)(y.root,s),style:{width:l,height:l,...C,...h},ownerState:g,ref:r,role:"progressbar",...b,...k,children:(0,m.jsx)(w,{className:y.svg,ownerState:g,viewBox:"22 22 44 44",children:(0,m.jsx)(j,{className:y.circle,style:_,ownerState:g,cx:f,cy:f,r:(f-p)/2,fill:"none",strokeWidth:p})})})}))},40902:(e,r,t)=>{function s(e=[]){return([,r])=>r&&function(e,r=[]){if(!function(e){return"string"==typeof e.main}(e))return!1;for(const t of r)if(!e.hasOwnProperty(t)||"string"!=typeof e[t])return!1;return!0}(r,e)}t.d(r,{Z:()=>s})},40760:(e,r,t)=>{t.r(r),t.d(r,{default:()=>n});t(67294);var s=t(86010),o=t(73613),i=t(98456),a=t(85893);function n(e){let{route:r,active:t,loading:n,handleClickRoute:l,dropDown:c,handleClickMore:d}=e;return(0,a.jsxs)("li",{style:{borderColor:t?r.color:"#e0e4e0"},onClick:()=>l(r.slug),children:[(0,a.jsxs)("div",{className:o.Z.rhead,children:[(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:o.Z.dot,style:{backgroundColor:r.color}}),r.name]}),(0,a.jsx)("span",{className:o.Z.mode,children:r.type})]}),(0,a.jsxs)("ol",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{children:"\u8def\u7a0b (Distance)"}),(0,a.jsxs)("strong",{children:[r.distance," km"]})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{children:"\u6d77\u62d4 (Elevation)"}),(0,a.jsxs)("strong",{children:[r.elevation," m"]})]})]}),(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:(0,s.Z)(o.Z.moreBtn,t&&c?o.Z.open:""),onClick:()=>d(),children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5l7 7-7 7"})}),n&&t?(0,a.jsx)("div",{className:o.Z.loadingCover,children:(0,a.jsx)(i.Z,{color:"inherit"})}):(0,a.jsx)(a.Fragment,{})]},r.slug)}},73613:(e,r,t)=>{t.d(r,{Z:()=>s});const s={aside:"aside_aON2",nav:"nav_jwR_",header:"header_MbCX",filterNav:"filterNav_dMb8",routerList:"routerList_A1GY",rhead:"rhead_DOIQ",dot:"dot_JUJJ",moreBtn:"moreBtn_p2BJ",open:"open_mBFW",loadingCover:"loadingCover_BQkP",divCenter:"divCenter_yMXO",drwInner:"drwInner_sB0L",drwhead:"drwhead_Zjwd",routeDetail:"routeDetail_jFub",chartBox:"chartBox_GQVy",intro:"intro_iRGh",footer:"footer_sZ_K",rightMap:"rightMap_LANU",small:"small_VQa2",chart:"chart_wvgD",hoverText:"hoverText_CmA6"}}}]);