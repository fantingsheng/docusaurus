"use strict";(self.webpackChunkspacexcode_com=self.webpackChunkspacexcode_com||[]).push([[422],{35097:(e,r,t)=>{t.d(r,{V:()=>i,Z:()=>n});var a=t(1588),o=t(34867);function i(e){return(0,o.Z)("MuiDivider",e)}const n=(0,a.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])},81458:(e,r,t)=>{t.d(r,{Z:()=>F});var a=t(63366),o=t(87462),i=t(67294),n=t(63961),s=t(94780),l=t(70917),d=t(41796),c=t(98216),u=t(2734),m=t(90948),p=t(71657),b=t(1588),f=t(34867);function v(e){return(0,f.Z)("MuiLinearProgress",e)}(0,b.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var g=t(85893);const h=["className","color","value","valueBuffer","variant"];let Z,y,C,$,x,w,k=e=>e;const I=(0,l.F4)(Z||(Z=k`
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
`)),S=(0,l.F4)(y||(y=k`
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
`)),M=(0,l.F4)(C||(C=k`
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
`)),P=(e,r)=>"inherit"===r?"currentColor":e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:"light"===e.palette.mode?(0,d.$n)(e.palette[r].main,.62):(0,d._j)(e.palette[r].main,.5),L=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`color${(0,c.Z)(t.color)}`],r[t.variant]]}})((({ownerState:e,theme:r})=>(0,o.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:P(r,e.color)},"inherit"===e.color&&"buffer"!==e.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===e.variant&&{backgroundColor:"transparent"},"query"===e.variant&&{transform:"rotate(180deg)"}))),B=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.dashed,r[`dashedColor${(0,c.Z)(t.color)}`]]}})((({ownerState:e,theme:r})=>{const t=P(r,e.color);return(0,o.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===e.color&&{opacity:.3},{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,l.iv)($||($=k`
    animation: ${0} 3s infinite linear;
  `),M)),O=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r[`barColor${(0,c.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&r.bar1Indeterminate,"determinate"===t.variant&&r.bar1Determinate,"buffer"===t.variant&&r.bar1Buffer]}})((({ownerState:e,theme:r})=>(0,o.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===e.color?"currentColor":(r.vars||r).palette[e.color].main},"determinate"===e.variant&&{transition:"transform .4s linear"},"buffer"===e.variant&&{zIndex:1,transition:"transform .4s linear"})),(({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,l.iv)(x||(x=k`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),I))),q=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r[`barColor${(0,c.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&r.bar2Indeterminate,"buffer"===t.variant&&r.bar2Buffer]}})((({ownerState:e,theme:r})=>(0,o.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==e.variant&&{backgroundColor:"inherit"===e.color?"currentColor":(r.vars||r).palette[e.color].main},"inherit"===e.color&&{opacity:.3},"buffer"===e.variant&&{backgroundColor:P(r,e.color),transition:"transform .4s linear"})),(({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,l.iv)(w||(w=k`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),S))),F=i.forwardRef((function(e,r){const t=(0,p.Z)({props:e,name:"MuiLinearProgress"}),{className:i,color:l="primary",value:d,valueBuffer:m,variant:b="indeterminate"}=t,f=(0,a.Z)(t,h),Z=(0,o.Z)({},t,{color:l,variant:b}),y=(e=>{const{classes:r,variant:t,color:a}=e,o={root:["root",`color${(0,c.Z)(a)}`,t],dashed:["dashed",`dashedColor${(0,c.Z)(a)}`],bar1:["bar",`barColor${(0,c.Z)(a)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&`barColor${(0,c.Z)(a)}`,"buffer"===t&&`color${(0,c.Z)(a)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,s.Z)(o,v,r)})(Z),C=(0,u.Z)(),$={},x={bar1:{},bar2:{}};if("determinate"===b||"buffer"===b)if(void 0!==d){$["aria-valuenow"]=Math.round(d),$["aria-valuemin"]=0,$["aria-valuemax"]=100;let e=d-100;"rtl"===C.direction&&(e=-e),x.bar1.transform=`translateX(${e}%)`}else 0;if("buffer"===b)if(void 0!==m){let e=(m||0)-100;"rtl"===C.direction&&(e=-e),x.bar2.transform=`translateX(${e}%)`}else 0;return(0,g.jsxs)(L,(0,o.Z)({className:(0,n.Z)(y.root,i),ownerState:Z,role:"progressbar"},$,{ref:r},f,{children:["buffer"===b?(0,g.jsx)(B,{className:y.dashed,ownerState:Z}):null,(0,g.jsx)(O,{className:y.bar1,ownerState:Z,style:x.bar1}),"determinate"===b?null:(0,g.jsx)(q,{className:y.bar2,ownerState:Z,style:x.bar2})]}))}))},84592:(e,r,t)=>{t.d(r,{Z:()=>n,f:()=>i});var a=t(1588),o=t(34867);function i(e){return(0,o.Z)("MuiListItemIcon",e)}const n=(0,a.Z)("MuiListItemIcon",["root","alignItemsFlexStart"])},26336:(e,r,t)=>{t.d(r,{L:()=>i,Z:()=>n});var a=t(1588),o=t(34867);function i(e){return(0,o.Z)("MuiListItemText",e)}const n=(0,a.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"])},18972:(e,r,t)=>{t.d(r,{Z:()=>k});var a=t(63366),o=t(87462),i=t(67294),n=t(63961),s=t(94780),l=t(41796),d=t(90948),c=t(71657),u=t(59773),m=t(47739),p=t(58974),b=t(51705),f=t(35097),v=t(84592),g=t(26336),h=t(1588),Z=t(34867);function y(e){return(0,Z.Z)("MuiMenuItem",e)}const C=(0,h.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var $=t(85893);const x=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],w=(0,d.ZP)(m.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,t.dense&&r.dense,t.divider&&r.divider,!t.disableGutters&&r.gutters]}})((({theme:e,ownerState:r})=>(0,o.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!r.disableGutters&&{paddingLeft:16,paddingRight:16},r.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${C.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${C.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${C.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${C.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${C.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${f.Z.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${f.Z.inset}`]:{marginLeft:52},[`& .${g.Z.root}`]:{marginTop:0,marginBottom:0},[`& .${g.Z.inset}`]:{paddingLeft:36},[`& .${v.Z.root}`]:{minWidth:36}},!r.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},r.dense&&(0,o.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${v.Z.root} svg`]:{fontSize:"1.25rem"}})))),k=i.forwardRef((function(e,r){const t=(0,c.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:l=!1,component:d="li",dense:m=!1,divider:f=!1,disableGutters:v=!1,focusVisibleClassName:g,role:h="menuitem",tabIndex:Z,className:C}=t,k=(0,a.Z)(t,x),I=i.useContext(u.Z),S=i.useMemo((()=>({dense:m||I.dense||!1,disableGutters:v})),[I.dense,m,v]),M=i.useRef(null);(0,p.Z)((()=>{l&&M.current&&M.current.focus()}),[l]);const P=(0,o.Z)({},t,{dense:S.dense,divider:f,disableGutters:v}),L=(e=>{const{disabled:r,dense:t,divider:a,disableGutters:i,selected:n,classes:l}=e,d={root:["root",t&&"dense",r&&"disabled",!i&&"gutters",a&&"divider",n&&"selected"]},c=(0,s.Z)(d,y,l);return(0,o.Z)({},l,c)})(t),B=(0,b.Z)(M,r);let O;return t.disabled||(O=void 0!==Z?Z:-1),(0,$.jsx)(u.Z.Provider,{value:S,children:(0,$.jsx)(w,(0,o.Z)({ref:B,role:h,tabIndex:O,component:d,focusVisibleClassName:(0,n.Z)(L.focusVisible,g),className:(0,n.Z)(L.root,C)},k,{ownerState:P,classes:L}))})}))}}]);