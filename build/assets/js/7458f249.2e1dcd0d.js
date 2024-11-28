"use strict";(self.webpackChunkspacexcode_com=self.webpackChunkspacexcode_com||[]).push([[5020],{88078:(e,t,a)=>{a.d(t,{Z:()=>C});var n=a(67294),i=a(63961),r=a(15463);function o(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function s(e){return parseFloat(e)}var h=a(8980),l=a(70917),d=a(90948),p=a(96918),c=a(28628),m=a(45154),u=a(22104);function g(e){return(0,u.ZP)("MuiSkeleton",e)}(0,m.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var v=a(85893);const f=l.F4`
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
      `:null,y="string"!=typeof w?l.iv`
        &::after {
          animation: ${w} 2s linear 0.5s infinite;
        }
      `:null,k=(0,d.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],!1!==a.animation&&t[a.animation],a.hasChildren&&t.withChildren,a.hasChildren&&!a.width&&t.fitContent,a.hasChildren&&!a.height&&t.heightAuto]}})((0,p.Z)((({theme:e})=>{const t=o(e.shape.borderRadius)||"px",a=s(e.shape.borderRadius);return{display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,h.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${t}/${Math.round(a/.6*10)/10}${t}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:e})=>e.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:e})=>e.hasChildren&&!e.width,style:{maxWidth:"fit-content"}},{props:({ownerState:e})=>e.hasChildren&&!e.height,style:{height:"auto"}},{props:{animation:"pulse"},style:b||{animation:`${f} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(\n                90deg,\n                transparent,\n                ${(e.vars||e).palette.action.hover},\n                transparent\n              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:y||{"&::after":{animation:`${w} 2s linear 0.5s infinite`}}}]}}))),C=n.forwardRef((function(e,t){const a=(0,c.i)({props:e,name:"MuiSkeleton"}),{animation:n="pulse",className:o,component:s="span",height:h,style:l,variant:d="text",width:p,...m}=a,u={...a,animation:n,component:s,variant:d,hasChildren:Boolean(m.children)},f=(e=>{const{classes:t,variant:a,animation:n,hasChildren:i,width:o,height:s}=e,h={root:["root",a,n,i&&"withChildren",i&&!o&&"fitContent",i&&!s&&"heightAuto"]};return(0,r.Z)(h,g,t)})(u);return(0,v.jsx)(k,{as:s,ref:t,className:(0,i.Z)(f.root,o),ownerState:u,...m,style:{width:p,height:h,...l}})}))},75314:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});a(67294);var n=a(18336),i=a(88078),r=a(86010),o=a(85893);const s=()=>(0,o.jsx)(i.Z,{animation:!1,variant:"rectangular",width:116,height:68,children:(0,o.jsx)("div",{className:(0,r.Z)(n.Z.theme,n.Z.shadowTheme),children:(0,o.jsx)("div",{className:n.Z.content})})})},18336:(e,t,a)=>{a.d(t,{Z:()=>n});const n={theme:"theme_Xc1U",content:"content_mj5R",gridTheme:"gridTheme_Nnpc",paperTheme:"paperTheme_qv7_",svgFilterBg:"svgFilterBg_uv5u",shadowTheme:"shadowTheme_Mplk",paper2Theme:"paper2Theme_oQmb"}}}]);