"use strict";(self.webpackChunkspacexcode_com=self.webpackChunkspacexcode_com||[]).push([[3034],{81458:(r,t,e)=>{e.d(t,{Z:()=>W});var a=e(63366),o=e(87462),n=e(67294),i=e(63961),s=e(94780),l=e(70917),u=e(41796),c=e(98216),p=e(2734),m=e(90948),d=e(71657),f=e(1588),b=e(34867);function h(r){return(0,b.Z)("MuiLinearProgress",r)}(0,f.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var g=e(85893);const v=["className","color","value","valueBuffer","variant"];let y,Z,w,x,C,S,B=r=>r;const M=(0,l.F4)(y||(y=B`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),P=(0,l.F4)(Z||(Z=B`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),$=(0,l.F4)(w||(w=B`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),k=(r,t)=>"inherit"===t?"currentColor":r.vars?r.vars.palette.LinearProgress[`${t}Bg`]:"light"===r.palette.mode?(0,u.$n)(r.palette[t].main,.62):(0,u._j)(r.palette[t].main,.5),I=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,t)=>{const{ownerState:e}=r;return[t.root,t[`color${(0,c.Z)(e.color)}`],t[e.variant]]}})((({ownerState:r,theme:t})=>(0,o.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:k(t,r.color)},"inherit"===r.color&&"buffer"!==r.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===r.variant&&{backgroundColor:"transparent"},"query"===r.variant&&{transform:"rotate(180deg)"}))),L=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,t)=>{const{ownerState:e}=r;return[t.dashed,t[`dashedColor${(0,c.Z)(e.color)}`]]}})((({ownerState:r,theme:t})=>{const e=k(t,r.color);return(0,o.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===r.color&&{opacity:.3},{backgroundImage:`radial-gradient(${e} 0%, ${e} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,l.iv)(x||(x=B`
    animation: ${0} 3s infinite linear;
  `),$)),N=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,t)=>{const{ownerState:e}=r;return[t.bar,t[`barColor${(0,c.Z)(e.color)}`],("indeterminate"===e.variant||"query"===e.variant)&&t.bar1Indeterminate,"determinate"===e.variant&&t.bar1Determinate,"buffer"===e.variant&&t.bar1Buffer]}})((({ownerState:r,theme:t})=>(0,o.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===r.color?"currentColor":(t.vars||t).palette[r.color].main},"determinate"===r.variant&&{transition:"transform .4s linear"},"buffer"===r.variant&&{zIndex:1,transition:"transform .4s linear"})),(({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,l.iv)(C||(C=B`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),M))),R=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,t)=>{const{ownerState:e}=r;return[t.bar,t[`barColor${(0,c.Z)(e.color)}`],("indeterminate"===e.variant||"query"===e.variant)&&t.bar2Indeterminate,"buffer"===e.variant&&t.bar2Buffer]}})((({ownerState:r,theme:t})=>(0,o.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==r.variant&&{backgroundColor:"inherit"===r.color?"currentColor":(t.vars||t).palette[r.color].main},"inherit"===r.color&&{opacity:.3},"buffer"===r.variant&&{backgroundColor:k(t,r.color),transition:"transform .4s linear"})),(({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,l.iv)(S||(S=B`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),P))),W=n.forwardRef((function(r,t){const e=(0,d.Z)({props:r,name:"MuiLinearProgress"}),{className:n,color:l="primary",value:u,valueBuffer:m,variant:f="indeterminate"}=e,b=(0,a.Z)(e,v),y=(0,o.Z)({},e,{color:l,variant:f}),Z=(r=>{const{classes:t,variant:e,color:a}=r,o={root:["root",`color${(0,c.Z)(a)}`,e],dashed:["dashed",`dashedColor${(0,c.Z)(a)}`],bar1:["bar",`barColor${(0,c.Z)(a)}`,("indeterminate"===e||"query"===e)&&"bar1Indeterminate","determinate"===e&&"bar1Determinate","buffer"===e&&"bar1Buffer"],bar2:["bar","buffer"!==e&&`barColor${(0,c.Z)(a)}`,"buffer"===e&&`color${(0,c.Z)(a)}`,("indeterminate"===e||"query"===e)&&"bar2Indeterminate","buffer"===e&&"bar2Buffer"]};return(0,s.Z)(o,h,t)})(y),w=(0,p.Z)(),x={},C={bar1:{},bar2:{}};if("determinate"===f||"buffer"===f)if(void 0!==u){x["aria-valuenow"]=Math.round(u),x["aria-valuemin"]=0,x["aria-valuemax"]=100;let r=u-100;"rtl"===w.direction&&(r=-r),C.bar1.transform=`translateX(${r}%)`}else 0;if("buffer"===f)if(void 0!==m){let r=(m||0)-100;"rtl"===w.direction&&(r=-r),C.bar2.transform=`translateX(${r}%)`}else 0;return(0,g.jsxs)(I,(0,o.Z)({className:(0,i.Z)(Z.root,n),ownerState:y,role:"progressbar"},x,{ref:t},b,{children:["buffer"===f?(0,g.jsx)(L,{className:Z.dashed,ownerState:y}):null,(0,g.jsx)(N,{className:Z.bar1,ownerState:y,style:C.bar1}),"determinate"===f?null:(0,g.jsx)(R,{className:Z.bar2,ownerState:y,style:C.bar2})]}))}))},84592:(r,t,e)=>{e.d(t,{Z:()=>i,f:()=>n});var a=e(1588),o=e(34867);function n(r){return(0,o.Z)("MuiListItemIcon",r)}const i=(0,a.Z)("MuiListItemIcon",["root","alignItemsFlexStart"])},26336:(r,t,e)=>{e.d(t,{L:()=>n,Z:()=>i});var a=e(1588),o=e(34867);function n(r){return(0,o.Z)("MuiListItemText",r)}const i=(0,a.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"])},15861:(r,t,e)=>{e.d(t,{Z:()=>Z});var a=e(63366),o=e(87462),n=e(67294),i=e(63961),s=e(39707),l=e(94780),u=e(90948),c=e(71657),p=e(98216),m=e(1588),d=e(34867);function f(r){return(0,d.Z)("MuiTypography",r)}(0,m.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var b=e(85893);const h=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(r,t)=>{const{ownerState:e}=r;return[t.root,e.variant&&t[e.variant],"inherit"!==e.align&&t[`align${(0,p.Z)(e.align)}`],e.noWrap&&t.noWrap,e.gutterBottom&&t.gutterBottom,e.paragraph&&t.paragraph]}})((({theme:r,ownerState:t})=>(0,o.Z)({margin:0},"inherit"===t.variant&&{font:"inherit"},"inherit"!==t.variant&&r.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Z=n.forwardRef((function(r,t){const e=(0,c.Z)({props:r,name:"MuiTypography"}),n=(r=>y[r]||r)(e.color),u=(0,s.Z)((0,o.Z)({},e,{color:n})),{align:m="inherit",className:d,component:Z,gutterBottom:w=!1,noWrap:x=!1,paragraph:C=!1,variant:S="body1",variantMapping:B=v}=u,M=(0,a.Z)(u,h),P=(0,o.Z)({},u,{align:m,color:n,className:d,component:Z,gutterBottom:w,noWrap:x,paragraph:C,variant:S,variantMapping:B}),$=Z||(C?"p":B[S]||v[S])||"span",k=(r=>{const{align:t,gutterBottom:e,noWrap:a,paragraph:o,variant:n,classes:i}=r,s={root:["root",n,"inherit"!==r.align&&`align${(0,p.Z)(t)}`,e&&"gutterBottom",a&&"noWrap",o&&"paragraph"]};return(0,l.Z)(s,f,i)})(P);return(0,b.jsx)(g,(0,o.Z)({as:$,ref:t,ownerState:P,className:(0,i.Z)(k.root,d)},M))}))},11151:(r,t,e)=>{e.d(t,{Z:()=>s,a:()=>i});var a=e(67294);const o={},n=a.createContext(o);function i(r){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof r?r(t):{...t,...r}}),[t,r])}function s(r){let t;return t=r.disableParentContext?"function"==typeof r.components?r.components(o):r.components||o:i(r.components),a.createElement(n.Provider,{value:t},r.children)}}}]);