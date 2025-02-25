"use strict";(self.webpackChunkspacexcode_com=self.webpackChunkspacexcode_com||[]).push([[8567],{88078:(e,t,a)=>{a.d(t,{Z:()=>j});var i=a(63366),n=a(87462),r=a(67294),o=a(63961),s=a(70917),h=a(94780);function l(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function d(e){return parseFloat(e)}var c=a(41796),m=a(90948),u=a(71657),g=a(1588),v=a(34867);function p(e){return(0,v.Z)("MuiSkeleton",e)}(0,g.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var b=a(85893);const w=["animation","className","component","height","style","variant","width"];let f,x,Z,_,k=e=>e;const C=(0,s.F4)(f||(f=k`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),T=(0,s.F4)(x||(x=k`
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
`)),y=(0,m.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],!1!==a.animation&&t[a.animation],a.hasChildren&&t.withChildren,a.hasChildren&&!a.width&&t.fitContent,a.hasChildren&&!a.height&&t.heightAuto]}})((({theme:e,ownerState:t})=>{const a=l(e.shape.borderRadius)||"px",i=d(e.shape.borderRadius);return(0,n.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,c.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${a}/${Math.round(i/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===t.variant&&{borderRadius:"50%"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})}),(({ownerState:e})=>"pulse"===e.animation&&(0,s.iv)(Z||(Z=k`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),C)),(({ownerState:e,theme:t})=>"wave"===e.animation&&(0,s.iv)(_||(_=k`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),T,(t.vars||t).palette.action.hover))),j=r.forwardRef((function(e,t){const a=(0,u.Z)({props:e,name:"MuiSkeleton"}),{animation:r="pulse",className:s,component:l="span",height:d,style:c,variant:m="text",width:g}=a,v=(0,i.Z)(a,w),f=(0,n.Z)({},a,{animation:r,component:l,variant:m,hasChildren:Boolean(v.children)}),x=(e=>{const{classes:t,variant:a,animation:i,hasChildren:n,width:r,height:o}=e,s={root:["root",a,i,n&&"withChildren",n&&!r&&"fitContent",n&&!o&&"heightAuto"]};return(0,h.Z)(s,p,t)})(f);return(0,b.jsx)(y,(0,n.Z)({as:l,ref:t,className:(0,o.Z)(x.root,s),ownerState:f},v,{style:(0,n.Z)({width:g,height:d},c)}))}))},8556:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});a(67294);var i=a(43158),n=a(88078),r=a(85893);const o=()=>(0,r.jsx)("div",{className:i.Z.mobileTheme,children:(0,r.jsx)(n.Z,{animation:!1,variant:"rectangular",sx:{padding:"8px 8px 0"},width:116,height:68,children:(0,r.jsxs)("div",{className:i.Z.content,children:[(0,r.jsxs)("div",{className:i.Z.left,children:[(0,r.jsx)(n.Z,{animation:!1,variant:"text",width:"100%",sx:{backgroundColor:"rgba(255, 255, 255)"},height:10}),(0,r.jsx)(n.Z,{animation:!1,variant:"text",width:"100%",sx:{backgroundColor:"rgba(255, 255, 255)"},height:10}),(0,r.jsx)(n.Z,{animation:!1,variant:"text",width:"70%",sx:{backgroundColor:"rgba(255, 255, 255)"},height:10})]}),(0,r.jsx)("div",{className:i.Z.right,children:(0,r.jsx)("div",{className:i.Z.mobile,children:(0,r.jsxs)("div",{className:i.Z.header,children:[(0,r.jsx)("div",{className:i.Z.audio}),(0,r.jsx)("div",{className:i.Z.view})]})})})]})})})},43158:(e,t,a)=>{a.d(t,{Z:()=>i});const i={basicTheme:"basicTheme_QrGv",content:"content_Ke7B",bt:"bt__gf4",backgroundTheme:"backgroundTheme_o620",bgIcon:"bgIcon_VJoP",stylishTheme:"stylishTheme_hrTa",left:"left_DTlD",right:"right_Isk3",outlineTheme:"outlineTheme_ngkj",modernTheme:"modernTheme_mMMP",icon:"icon_HkZl",previewTheme:"previewTheme_TEs3",preview:"preview__aqA",toolbar:"toolbar_qCzR",mobileTheme:"mobileTheme_YPyM",mobile:"mobile_t_Rw",header:"header_Kwer",audio:"audio_vq1X",view:"view_Js8F",pictureTheme:"pictureTheme_y0ag"}}}]);