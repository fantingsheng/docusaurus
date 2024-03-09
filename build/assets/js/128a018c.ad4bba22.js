"use strict";(self.webpackChunkspacexcode_com=self.webpackChunkspacexcode_com||[]).push([[5387],{88078:(e,t,i)=>{i.d(t,{Z:()=>j});var a=i(63366),n=i(87462),r=i(67294),o=i(63961),s=i(70917),h=i(94780);function d(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function l(e){return parseFloat(e)}var c=i(41796),m=i(90948),u=i(71657),g=i(1588),v=i(34867);function p(e){return(0,v.Z)("MuiSkeleton",e)}(0,g.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var w=i(85893);const b=["animation","className","component","height","style","variant","width"];let f,x,_,Z,k=e=>e;const T=(0,s.F4)(f||(f=k`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),C=(0,s.F4)(x||(x=k`
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
`)),y=(0,m.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,t[i.variant],!1!==i.animation&&t[i.animation],i.hasChildren&&t.withChildren,i.hasChildren&&!i.width&&t.fitContent,i.hasChildren&&!i.height&&t.heightAuto]}})((({theme:e,ownerState:t})=>{const i=d(e.shape.borderRadius)||"px",a=l(e.shape.borderRadius);return(0,n.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,c.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${i}/${Math.round(a/.6*10)/10}${i}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===t.variant&&{borderRadius:"50%"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})}),(({ownerState:e})=>"pulse"===e.animation&&(0,s.iv)(_||(_=k`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),T)),(({ownerState:e,theme:t})=>"wave"===e.animation&&(0,s.iv)(Z||(Z=k`
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
    `),C,(t.vars||t).palette.action.hover))),j=r.forwardRef((function(e,t){const i=(0,u.Z)({props:e,name:"MuiSkeleton"}),{animation:r="pulse",className:s,component:d="span",height:l,style:c,variant:m="text",width:g}=i,v=(0,a.Z)(i,b),f=(0,n.Z)({},i,{animation:r,component:d,variant:m,hasChildren:Boolean(v.children)}),x=(e=>{const{classes:t,variant:i,animation:a,hasChildren:n,width:r,height:o}=e,s={root:["root",i,a,n&&"withChildren",n&&!r&&"fitContent",n&&!o&&"heightAuto"]};return(0,h.Z)(s,p,t)})(f);return(0,w.jsx)(y,(0,n.Z)({as:d,ref:t,className:(0,o.Z)(x.root,s),ownerState:f},v,{style:(0,n.Z)({width:g,height:l},c)}))}))},51244:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});i(67294);var a=i(43158),n=i(88078),r=i(85893);const o=()=>(0,r.jsx)("div",{className:a.Z.stylishTheme,children:(0,r.jsx)(n.Z,{animation:!1,variant:"rectangular",sx:{padding:"8px"},width:116,height:68,children:(0,r.jsxs)("div",{className:a.Z.content,children:[(0,r.jsxs)("div",{className:a.Z.left,children:[(0,r.jsx)(n.Z,{animation:!1,variant:"text",width:"100%",height:10}),(0,r.jsx)(n.Z,{animation:!1,variant:"text",width:"70%",height:10}),(0,r.jsxs)("div",{className:a.Z.bt,children:[(0,r.jsx)(n.Z,{animation:!1,variant:"rounded",width:10,height:10}),(0,r.jsx)(n.Z,{animation:!1,variant:"text",width:"20%",height:8})]})]}),(0,r.jsx)("div",{className:a.Z.right,children:(0,r.jsx)(n.Z,{animation:!1,variant:"rectangular",width:"100%",height:"100%"})})]})})})},43158:(e,t,i)=>{i.d(t,{Z:()=>a});const a={basicTheme:"basicTheme_QrGv",content:"content_Ke7B",bt:"bt__gf4",backgroundTheme:"backgroundTheme_o620",bgIcon:"bgIcon_VJoP",stylishTheme:"stylishTheme_hrTa",left:"left_DTlD",right:"right_Isk3",outlineTheme:"outlineTheme_ngkj",modernTheme:"modernTheme_mMMP",icon:"icon_HkZl",previewTheme:"previewTheme_TEs3",preview:"preview__aqA",toolbar:"toolbar_qCzR",mobileTheme:"mobileTheme_YPyM",mobile:"mobile_t_Rw",header:"header_Kwer",audio:"audio_vq1X",view:"view_Js8F",pictureTheme:"pictureTheme_y0ag"}}}]);