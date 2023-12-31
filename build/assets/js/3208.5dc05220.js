"use strict";(self.webpackChunkspacexcode_com=self.webpackChunkspacexcode_com||[]).push([[3208],{81458:(r,e,t)=>{t.d(e,{Z:()=>T});var a=t(63366),o=t(87462),n=t(67294),i=t(63961),s=t(94780),l=t(70917),d=t(41796),u=t(98216),c=t(2734),p=t(90948),m=t(71657),f=t(1588),b=t(34867);function h(r){return(0,b.Z)("MuiLinearProgress",r)}(0,f.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var g=t(85893);const v=["className","color","value","valueBuffer","variant"];let Z,y,w,x,S,C,P=r=>r;const M=(0,l.F4)(Z||(Z=P`
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
`)),B=(0,l.F4)(y||(y=P`
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
`)),$=(0,l.F4)(w||(w=P`
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
`)),k=(r,e)=>"inherit"===e?"currentColor":r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:"light"===r.palette.mode?(0,d.$n)(r.palette[e].main,.62):(0,d._j)(r.palette[e].main,.5),L=(0,p.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[`color${(0,u.Z)(t.color)}`],e[t.variant]]}})((({ownerState:r,theme:e})=>(0,o.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:k(e,r.color)},"inherit"===r.color&&"buffer"!==r.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===r.variant&&{backgroundColor:"transparent"},"query"===r.variant&&{transform:"rotate(180deg)"}))),I=(0,p.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.dashed,e[`dashedColor${(0,u.Z)(t.color)}`]]}})((({ownerState:r,theme:e})=>{const t=k(e,r.color);return(0,o.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===r.color&&{opacity:.3},{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,l.iv)(x||(x=P`
    animation: ${0} 3s infinite linear;
  `),$)),R=(0,p.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e[`barColor${(0,u.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar1Indeterminate,"determinate"===t.variant&&e.bar1Determinate,"buffer"===t.variant&&e.bar1Buffer]}})((({ownerState:r,theme:e})=>(0,o.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===r.color?"currentColor":(e.vars||e).palette[r.color].main},"determinate"===r.variant&&{transition:"transform .4s linear"},"buffer"===r.variant&&{zIndex:1,transition:"transform .4s linear"})),(({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,l.iv)(S||(S=P`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),M))),N=(0,p.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e[`barColor${(0,u.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar2Indeterminate,"buffer"===t.variant&&e.bar2Buffer]}})((({ownerState:r,theme:e})=>(0,o.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==r.variant&&{backgroundColor:"inherit"===r.color?"currentColor":(e.vars||e).palette[r.color].main},"inherit"===r.color&&{opacity:.3},"buffer"===r.variant&&{backgroundColor:k(e,r.color),transition:"transform .4s linear"})),(({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,l.iv)(C||(C=P`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),B))),T=n.forwardRef((function(r,e){const t=(0,m.Z)({props:r,name:"MuiLinearProgress"}),{className:n,color:l="primary",value:d,valueBuffer:p,variant:f="indeterminate"}=t,b=(0,a.Z)(t,v),Z=(0,o.Z)({},t,{color:l,variant:f}),y=(r=>{const{classes:e,variant:t,color:a}=r,o={root:["root",`color${(0,u.Z)(a)}`,t],dashed:["dashed",`dashedColor${(0,u.Z)(a)}`],bar1:["bar",`barColor${(0,u.Z)(a)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&`barColor${(0,u.Z)(a)}`,"buffer"===t&&`color${(0,u.Z)(a)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,s.Z)(o,h,e)})(Z),w=(0,c.Z)(),x={},S={bar1:{},bar2:{}};if("determinate"===f||"buffer"===f)if(void 0!==d){x["aria-valuenow"]=Math.round(d),x["aria-valuemin"]=0,x["aria-valuemax"]=100;let r=d-100;"rtl"===w.direction&&(r=-r),S.bar1.transform=`translateX(${r}%)`}else 0;if("buffer"===f)if(void 0!==p){let r=(p||0)-100;"rtl"===w.direction&&(r=-r),S.bar2.transform=`translateX(${r}%)`}else 0;return(0,g.jsxs)(L,(0,o.Z)({className:(0,i.Z)(y.root,n),ownerState:Z,role:"progressbar"},x,{ref:e},b,{children:["buffer"===f?(0,g.jsx)(I,{className:y.dashed,ownerState:Z}):null,(0,g.jsx)(R,{className:y.bar1,ownerState:Z,style:S.bar1}),"determinate"===f?null:(0,g.jsx)(N,{className:y.bar2,ownerState:Z,style:S.bar2})]}))}))},78462:(r,e,t)=>{t.d(e,{Z:()=>g});var a=t(63366),o=t(87462),n=t(67294),i=t(63961),s=t(94780),l=t(90948),d=t(71657),u=t(59773),c=t(1588),p=t(34867);function m(r){return(0,p.Z)("MuiList",r)}(0,c.Z)("MuiList",["root","padding","dense","subheader"]);var f=t(85893);const b=["children","className","component","dense","disablePadding","subheader"],h=(0,l.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,!t.disablePadding&&e.padding,t.dense&&e.dense,t.subheader&&e.subheader]}})((({ownerState:r})=>(0,o.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!r.disablePadding&&{paddingTop:8,paddingBottom:8},r.subheader&&{paddingTop:0}))),g=n.forwardRef((function(r,e){const t=(0,d.Z)({props:r,name:"MuiList"}),{children:l,className:c,component:p="ul",dense:g=!1,disablePadding:v=!1,subheader:Z}=t,y=(0,a.Z)(t,b),w=n.useMemo((()=>({dense:g})),[g]),x=(0,o.Z)({},t,{component:p,dense:g,disablePadding:v}),S=(r=>{const{classes:e,disablePadding:t,dense:a,subheader:o}=r,n={root:["root",!t&&"padding",a&&"dense",o&&"subheader"]};return(0,s.Z)(n,m,e)})(x);return(0,f.jsx)(u.Z.Provider,{value:w,children:(0,f.jsxs)(h,(0,o.Z)({as:p,className:(0,i.Z)(S.root,c),ref:e,ownerState:x},y,{children:[Z,l]}))})}))},59773:(r,e,t)=>{t.d(e,{Z:()=>a});const a=t(67294).createContext({})},84592:(r,e,t)=>{t.d(e,{Z:()=>i,f:()=>n});var a=t(1588),o=t(34867);function n(r){return(0,o.Z)("MuiListItemIcon",r)}const i=(0,a.Z)("MuiListItemIcon",["root","alignItemsFlexStart"])},26336:(r,e,t)=>{t.d(e,{L:()=>n,Z:()=>i});var a=t(1588),o=t(34867);function n(r){return(0,o.Z)("MuiListItemText",r)}const i=(0,a.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"])},15861:(r,e,t)=>{t.d(e,{Z:()=>y});var a=t(63366),o=t(87462),n=t(67294),i=t(63961),s=t(39707),l=t(94780),d=t(90948),u=t(71657),c=t(98216),p=t(1588),m=t(34867);function f(r){return(0,m.Z)("MuiTypography",r)}(0,p.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var b=t(85893);const h=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=(0,d.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,t.variant&&e[t.variant],"inherit"!==t.align&&e[`align${(0,c.Z)(t.align)}`],t.noWrap&&e.noWrap,t.gutterBottom&&e.gutterBottom,t.paragraph&&e.paragraph]}})((({theme:r,ownerState:e})=>(0,o.Z)({margin:0},"inherit"===e.variant&&{font:"inherit"},"inherit"!==e.variant&&r.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16}))),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=n.forwardRef((function(r,e){const t=(0,u.Z)({props:r,name:"MuiTypography"}),n=(r=>Z[r]||r)(t.color),d=(0,s.Z)((0,o.Z)({},t,{color:n})),{align:p="inherit",className:m,component:y,gutterBottom:w=!1,noWrap:x=!1,paragraph:S=!1,variant:C="body1",variantMapping:P=v}=d,M=(0,a.Z)(d,h),B=(0,o.Z)({},d,{align:p,color:n,className:m,component:y,gutterBottom:w,noWrap:x,paragraph:S,variant:C,variantMapping:P}),$=y||(S?"p":P[C]||v[C])||"span",k=(r=>{const{align:e,gutterBottom:t,noWrap:a,paragraph:o,variant:n,classes:i}=r,s={root:["root",n,"inherit"!==r.align&&`align${(0,c.Z)(e)}`,t&&"gutterBottom",a&&"noWrap",o&&"paragraph"]};return(0,l.Z)(s,f,i)})(B);return(0,b.jsx)(g,(0,o.Z)({as:$,ref:e,ownerState:B,className:(0,i.Z)(k.root,m)},M))}))},57144:(r,e,t)=>{t.d(e,{Z:()=>a});const a=t(39336).Z},8038:(r,e,t)=>{t.d(e,{Z:()=>a});const a=t(82690).Z},5340:(r,e,t)=>{t.d(e,{Z:()=>a});const a=t(74161).Z},49299:(r,e,t)=>{t.d(e,{Z:()=>a});const a=t(19032).Z},58974:(r,e,t)=>{t.d(e,{Z:()=>a});const a=t(73546).Z},39336:(r,e,t)=>{function a(r,e=166){let t;function a(...a){clearTimeout(t),t=setTimeout((()=>{r.apply(this,a)}),e)}return a.clear=()=>{clearTimeout(t)},a}t.d(e,{Z:()=>a})},19032:(r,e,t)=>{t.d(e,{Z:()=>o});var a=t(67294);function o({controlled:r,default:e,name:t,state:o="value"}){const{current:n}=a.useRef(void 0!==r),[i,s]=a.useState(e);return[n?r:i,a.useCallback((r=>{n||s(r)}),[])]}}}]);