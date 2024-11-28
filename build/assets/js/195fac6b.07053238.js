"use strict";(self.webpackChunkspacexcode_com=self.webpackChunkspacexcode_com||[]).push([[5727],{88078:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(67294),i=a(63961),r=a(15463);function o(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function s(e){return parseFloat(e)}var h=a(8980),l=a(70917),d=a(90948),p=a(96918),c=a(28628),m=a(45154),u=a(22104);function v(e){return(0,u.ZP)("MuiSkeleton",e)}(0,m.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var g=a(85893);const b=l.F4`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,f=l.F4`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,w="string"!=typeof b?l.iv`
        animation: ${b} 2s ease-in-out 0.5s infinite;
      `:null,y="string"!=typeof f?l.iv`
        &::after {
          animation: ${f} 2s linear 0.5s infinite;
        }
      `:null,_=(0,d.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],!1!==a.animation&&t[a.animation],a.hasChildren&&t.withChildren,a.hasChildren&&!a.width&&t.fitContent,a.hasChildren&&!a.height&&t.heightAuto]}})((0,p.Z)((({theme:e})=>{const t=o(e.shape.borderRadius)||"px",a=s(e.shape.borderRadius);return{display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,h.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${t}/${Math.round(a/.6*10)/10}${t}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:e})=>e.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:e})=>e.hasChildren&&!e.width,style:{maxWidth:"fit-content"}},{props:({ownerState:e})=>e.hasChildren&&!e.height,style:{height:"auto"}},{props:{animation:"pulse"},style:w||{animation:`${b} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(\n                90deg,\n                transparent,\n                ${(e.vars||e).palette.action.hover},\n                transparent\n              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:y||{"&::after":{animation:`${f} 2s linear 0.5s infinite`}}}]}}))),k=n.forwardRef((function(e,t){const a=(0,c.i)({props:e,name:"MuiSkeleton"}),{animation:n="pulse",className:o,component:s="span",height:h,style:l,variant:d="text",width:p,...m}=a,u={...a,animation:n,component:s,variant:d,hasChildren:Boolean(m.children)},b=(e=>{const{classes:t,variant:a,animation:n,hasChildren:i,width:o,height:s}=e,h={root:["root",a,n,i&&"withChildren",i&&!o&&"fitContent",i&&!s&&"heightAuto"]};return(0,r.Z)(h,v,t)})(u);return(0,g.jsx)(_,{as:s,ref:t,className:(0,i.Z)(b.root,o),ownerState:u,...m,style:{width:p,height:h,...l}})}))},31845:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});a(67294);var n=a(43158),i=a(88078),r=a(85893);const o=()=>(0,r.jsx)("div",{className:n.Z.previewTheme,children:(0,r.jsx)(i.Z,{animation:!1,variant:"rectangular",sx:{paddingTop:"5px"},width:116,height:68,children:(0,r.jsxs)("div",{className:n.Z.content,children:[(0,r.jsx)(i.Z,{animation:!1,variant:"text",width:"60%",sx:{backgroundColor:"rgba(255, 255, 255)"},height:10}),(0,r.jsx)("div",{className:n.Z.preview,children:(0,r.jsxs)("div",{className:n.Z.toolbar,children:[(0,r.jsx)("span",{}),(0,r.jsx)("span",{}),(0,r.jsx)("span",{})]})})]})})})},43158:(e,t,a)=>{a.d(t,{Z:()=>n});const n={basicTheme:"basicTheme_QrGv",content:"content_Ke7B",bt:"bt__gf4",backgroundTheme:"backgroundTheme_o620",bgIcon:"bgIcon_VJoP",stylishTheme:"stylishTheme_hrTa",left:"left_DTlD",right:"right_Isk3",outlineTheme:"outlineTheme_ngkj",modernTheme:"modernTheme_mMMP",icon:"icon_HkZl",previewTheme:"previewTheme_TEs3",preview:"preview__aqA",toolbar:"toolbar_qCzR",mobileTheme:"mobileTheme_YPyM",mobile:"mobile_t_Rw",header:"header_Kwer",audio:"audio_vq1X",view:"view_Js8F",pictureTheme:"pictureTheme_y0ag"}}}]);