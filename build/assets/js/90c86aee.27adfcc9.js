"use strict";(self.webpackChunkspacexcode_com=self.webpackChunkspacexcode_com||[]).push([[3427],{88078:(e,t,i)=>{i.d(t,{Z:()=>_});var a=i(67294),n=i(63961),r=i(15463);function o(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function s(e){return parseFloat(e)}var h=i(8980),l=i(70917),d=i(90948),m=i(96918),c=i(28628),p=i(45154),u=i(22104);function v(e){return(0,u.ZP)("MuiSkeleton",e)}(0,p.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var g=i(85893);const f=l.F4`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,w=l.F4`
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
`,b="string"!=typeof f?l.iv`
        animation: ${f} 2s ease-in-out 0.5s infinite;
      `:null,x="string"!=typeof w?l.iv`
        &::after {
          animation: ${w} 2s linear 0.5s infinite;
        }
      `:null,y=(0,d.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,t[i.variant],!1!==i.animation&&t[i.animation],i.hasChildren&&t.withChildren,i.hasChildren&&!i.width&&t.fitContent,i.hasChildren&&!i.height&&t.heightAuto]}})((0,m.Z)((({theme:e})=>{const t=o(e.shape.borderRadius)||"px",i=s(e.shape.borderRadius);return{display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,h.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${t}/${Math.round(i/.6*10)/10}${t}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:e})=>e.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:e})=>e.hasChildren&&!e.width,style:{maxWidth:"fit-content"}},{props:({ownerState:e})=>e.hasChildren&&!e.height,style:{height:"auto"}},{props:{animation:"pulse"},style:b||{animation:`${f} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(\n                90deg,\n                transparent,\n                ${(e.vars||e).palette.action.hover},\n                transparent\n              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:x||{"&::after":{animation:`${w} 2s linear 0.5s infinite`}}}]}}))),_=a.forwardRef((function(e,t){const i=(0,c.i)({props:e,name:"MuiSkeleton"}),{animation:a="pulse",className:o,component:s="span",height:h,style:l,variant:d="text",width:m,...p}=i,u={...i,animation:a,component:s,variant:d,hasChildren:Boolean(p.children)},f=(e=>{const{classes:t,variant:i,animation:a,hasChildren:n,width:o,height:s}=e,h={root:["root",i,a,n&&"withChildren",n&&!o&&"fitContent",n&&!s&&"heightAuto"]};return(0,r.Z)(h,v,t)})(u);return(0,g.jsx)(y,{as:s,ref:t,className:(0,n.Z)(f.root,o),ownerState:u,...p,style:{width:m,height:h,...l}})}))},24219:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});i(67294);var a=i(43158),n=i(88078),r=i(85893);const o=()=>(0,r.jsx)("div",{className:a.Z.modernTheme,children:(0,r.jsx)(n.Z,{animation:!1,variant:"rectangular",sx:{padding:"8px",position:"relative"},width:116,height:68,children:(0,r.jsxs)("div",{className:a.Z.content,children:[(0,r.jsx)("div",{className:a.Z.left,children:(0,r.jsx)("div",{className:a.Z.icon,children:(0,r.jsx)(n.Z,{animation:!1,variant:"rounded",width:10,height:10})})}),(0,r.jsxs)("div",{className:a.Z.right,children:[(0,r.jsx)(n.Z,{animation:!1,variant:"text",width:"100%",height:10}),(0,r.jsx)(n.Z,{animation:!1,variant:"text",width:"100%",height:10}),(0,r.jsx)(n.Z,{animation:!1,variant:"text",width:"60%",height:10}),(0,r.jsx)("div",{className:a.Z.bt,children:(0,r.jsx)(n.Z,{animation:!1,variant:"text",width:20,height:8})})]})]})})})},43158:(e,t,i)=>{i.d(t,{Z:()=>a});const a={basicTheme:"basicTheme_QrGv",content:"content_Ke7B",bt:"bt__gf4",backgroundTheme:"backgroundTheme_o620",bgIcon:"bgIcon_VJoP",stylishTheme:"stylishTheme_hrTa",left:"left_DTlD",right:"right_Isk3",outlineTheme:"outlineTheme_ngkj",modernTheme:"modernTheme_mMMP",icon:"icon_HkZl",previewTheme:"previewTheme_TEs3",preview:"preview__aqA",toolbar:"toolbar_qCzR",mobileTheme:"mobileTheme_YPyM",mobile:"mobile_t_Rw",header:"header_Kwer",audio:"audio_vq1X",view:"view_Js8F",pictureTheme:"pictureTheme_y0ag"}}}]);