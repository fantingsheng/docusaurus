"use strict";(self.webpackChunkspacexcode_com=self.webpackChunkspacexcode_com||[]).push([[5020],{88078:(e,t,a)=>{a.d(t,{Z:()=>R});var n=a(63366),i=a(87462),r=a(67294),o=a(63961),s=a(70917),h=a(94780);function d(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function l(e){return parseFloat(e)}var c=a(41796),m=a(90948),u=a(71657),p=a(1588),g=a(34867);function v(e){return(0,g.Z)("MuiSkeleton",e)}(0,p.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var w=a(85893);const f=["animation","className","component","height","style","variant","width"];let b,k,Z,C,x=e=>e;const y=(0,s.F4)(b||(b=x`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),S=(0,s.F4)(k||(k=x`
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
`)),_=(0,m.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],!1!==a.animation&&t[a.animation],a.hasChildren&&t.withChildren,a.hasChildren&&!a.width&&t.fitContent,a.hasChildren&&!a.height&&t.heightAuto]}})((({theme:e,ownerState:t})=>{const a=d(e.shape.borderRadius)||"px",n=l(e.shape.borderRadius);return(0,i.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,c.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${a}/${Math.round(n/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===t.variant&&{borderRadius:"50%"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})}),(({ownerState:e})=>"pulse"===e.animation&&(0,s.iv)(Z||(Z=x`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),y)),(({ownerState:e,theme:t})=>"wave"===e.animation&&(0,s.iv)(C||(C=x`
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
    `),S,(t.vars||t).palette.action.hover))),R=r.forwardRef((function(e,t){const a=(0,u.Z)({props:e,name:"MuiSkeleton"}),{animation:r="pulse",className:s,component:d="span",height:l,style:c,variant:m="text",width:p}=a,g=(0,n.Z)(a,f),b=(0,i.Z)({},a,{animation:r,component:d,variant:m,hasChildren:Boolean(g.children)}),k=(e=>{const{classes:t,variant:a,animation:n,hasChildren:i,width:r,height:o}=e,s={root:["root",a,n,i&&"withChildren",i&&!r&&"fitContent",i&&!o&&"heightAuto"]};return(0,h.Z)(s,v,t)})(b);return(0,w.jsx)(_,(0,i.Z)({as:d,ref:t,className:(0,o.Z)(k.root,s),ownerState:b},g,{style:(0,i.Z)({width:p,height:l},c)}))}))},75314:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});a(67294);var n=a(18336),i=a(88078),r=a(86010),o=a(85893);const s=()=>(0,o.jsx)(i.Z,{animation:!1,variant:"rectangular",width:116,height:68,children:(0,o.jsx)("div",{className:(0,r.Z)(n.Z.theme,n.Z.shadowTheme),children:(0,o.jsx)("div",{className:n.Z.content})})})},18336:(e,t,a)=>{a.d(t,{Z:()=>n});const n={theme:"theme_Xc1U",content:"content_mj5R",gridTheme:"gridTheme_Nnpc",paperTheme:"paperTheme_qv7_",svgFilterBg:"svgFilterBg_uv5u",shadowTheme:"shadowTheme_Mplk",paper2Theme:"paper2Theme_oQmb"}}}]);