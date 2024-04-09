"use strict";(self.webpackChunkspacexcode_com=self.webpackChunkspacexcode_com||[]).push([[1714],{81458:(r,e,t)=>{t.d(e,{Z:()=>W});var a=t(63366),o=t(87462),n=t(67294),i=t(63961),s=t(94780),l=t(70917),u=t(41796),c=t(98216),p=t(2734),m=t(90948),d=t(71657),f=t(1588),b=t(34867);function h(r){return(0,b.Z)("MuiLinearProgress",r)}(0,f.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var g=t(85893);const v=["className","color","value","valueBuffer","variant"];let y,Z,w,x,C,S,B=r=>r;const P=(0,l.F4)(y||(y=B`
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
`)),$=(0,l.F4)(Z||(Z=B`
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
`)),k=(0,l.F4)(w||(w=B`
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
`)),M=(r,e)=>"inherit"===e?"currentColor":r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:"light"===r.palette.mode?(0,u.$n)(r.palette[e].main,.62):(0,u._j)(r.palette[e].main,.5),N=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[`color${(0,c.Z)(t.color)}`],e[t.variant]]}})((({ownerState:r,theme:e})=>(0,o.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:M(e,r.color)},"inherit"===r.color&&"buffer"!==r.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===r.variant&&{backgroundColor:"transparent"},"query"===r.variant&&{transform:"rotate(180deg)"}))),R=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.dashed,e[`dashedColor${(0,c.Z)(t.color)}`]]}})((({ownerState:r,theme:e})=>{const t=M(e,r.color);return(0,o.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===r.color&&{opacity:.3},{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,l.iv)(x||(x=B`
    animation: ${0} 3s infinite linear;
  `),k)),I=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e[`barColor${(0,c.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar1Indeterminate,"determinate"===t.variant&&e.bar1Determinate,"buffer"===t.variant&&e.bar1Buffer]}})((({ownerState:r,theme:e})=>(0,o.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===r.color?"currentColor":(e.vars||e).palette[r.color].main},"determinate"===r.variant&&{transition:"transform .4s linear"},"buffer"===r.variant&&{zIndex:1,transition:"transform .4s linear"})),(({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,l.iv)(C||(C=B`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),P))),L=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e[`barColor${(0,c.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar2Indeterminate,"buffer"===t.variant&&e.bar2Buffer]}})((({ownerState:r,theme:e})=>(0,o.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==r.variant&&{backgroundColor:"inherit"===r.color?"currentColor":(e.vars||e).palette[r.color].main},"inherit"===r.color&&{opacity:.3},"buffer"===r.variant&&{backgroundColor:M(e,r.color),transition:"transform .4s linear"})),(({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,l.iv)(S||(S=B`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),$))),W=n.forwardRef((function(r,e){const t=(0,d.Z)({props:r,name:"MuiLinearProgress"}),{className:n,color:l="primary",value:u,valueBuffer:m,variant:f="indeterminate"}=t,b=(0,a.Z)(t,v),y=(0,o.Z)({},t,{color:l,variant:f}),Z=(r=>{const{classes:e,variant:t,color:a}=r,o={root:["root",`color${(0,c.Z)(a)}`,t],dashed:["dashed",`dashedColor${(0,c.Z)(a)}`],bar1:["bar",`barColor${(0,c.Z)(a)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&`barColor${(0,c.Z)(a)}`,"buffer"===t&&`color${(0,c.Z)(a)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,s.Z)(o,h,e)})(y),w=(0,p.Z)(),x={},C={bar1:{},bar2:{}};if("determinate"===f||"buffer"===f)if(void 0!==u){x["aria-valuenow"]=Math.round(u),x["aria-valuemin"]=0,x["aria-valuemax"]=100;let r=u-100;"rtl"===w.direction&&(r=-r),C.bar1.transform=`translateX(${r}%)`}else 0;if("buffer"===f)if(void 0!==m){let r=(m||0)-100;"rtl"===w.direction&&(r=-r),C.bar2.transform=`translateX(${r}%)`}else 0;return(0,g.jsxs)(N,(0,o.Z)({className:(0,i.Z)(Z.root,n),ownerState:y,role:"progressbar"},x,{ref:e},b,{children:["buffer"===f?(0,g.jsx)(R,{className:Z.dashed,ownerState:y}):null,(0,g.jsx)(I,{className:Z.bar1,ownerState:y,style:C.bar1}),"determinate"===f?null:(0,g.jsx)(L,{className:Z.bar2,ownerState:y,style:C.bar2})]}))}))},15861:(r,e,t)=>{t.d(e,{Z:()=>Z});var a=t(63366),o=t(87462),n=t(67294),i=t(63961),s=t(39707),l=t(94780),u=t(90948),c=t(71657),p=t(98216),m=t(1588),d=t(34867);function f(r){return(0,d.Z)("MuiTypography",r)}(0,m.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var b=t(85893);const h=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,t.variant&&e[t.variant],"inherit"!==t.align&&e[`align${(0,p.Z)(t.align)}`],t.noWrap&&e.noWrap,t.gutterBottom&&e.gutterBottom,t.paragraph&&e.paragraph]}})((({theme:r,ownerState:e})=>(0,o.Z)({margin:0},"inherit"===e.variant&&{font:"inherit"},"inherit"!==e.variant&&r.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16}))),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Z=n.forwardRef((function(r,e){const t=(0,c.Z)({props:r,name:"MuiTypography"}),n=(r=>y[r]||r)(t.color),u=(0,s.Z)((0,o.Z)({},t,{color:n})),{align:m="inherit",className:d,component:Z,gutterBottom:w=!1,noWrap:x=!1,paragraph:C=!1,variant:S="body1",variantMapping:B=v}=u,P=(0,a.Z)(u,h),$=(0,o.Z)({},u,{align:m,color:n,className:d,component:Z,gutterBottom:w,noWrap:x,paragraph:C,variant:S,variantMapping:B}),k=Z||(C?"p":B[S]||v[S])||"span",M=(r=>{const{align:e,gutterBottom:t,noWrap:a,paragraph:o,variant:n,classes:i}=r,s={root:["root",n,"inherit"!==r.align&&`align${(0,p.Z)(e)}`,t&&"gutterBottom",a&&"noWrap",o&&"paragraph"]};return(0,l.Z)(s,f,i)})($);return(0,b.jsx)(g,(0,o.Z)({as:k,ref:e,ownerState:$,className:(0,i.Z)(M.root,d)},P))}))},71579:(r,e,t)=>{t.d(e,{Z:()=>o});var a=t(67294);const o=function(r,e){var t,o;return a.isValidElement(r)&&-1!==e.indexOf(null!=(t=r.type.muiName)?t:null==(o=r.type)||null==(o=o._payload)||null==(o=o.value)?void 0:o.muiName)}},11151:(r,e,t)=>{t.d(e,{Z:()=>s,a:()=>i});var a=t(67294);const o={},n=a.createContext(o);function i(r){const e=a.useContext(n);return a.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function s(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(o):r.components||o:i(r.components),a.createElement(n.Provider,{value:e},r.children)}}}]);