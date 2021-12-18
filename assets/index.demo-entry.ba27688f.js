import{_ as k,r as s,o as c,j as _,w as t,f as n,e,h as o,k as F,m as S,u as z,a as B,b as U,c as v,d as D,n as E,g as M}from"./index.95fbdc71.js";import"./axios.dd49c521.js";const N={},V=o(" Basic Usage "),P=o("Use "),I=o("text"),R=o(" to create text skeleton."),W={class:"demo-card__view"},j=o();function T(i,a){const r=s("n-text"),l=s("n-p"),u=s("n-skeleton"),h=s("component-demo");return c(),_(h,{"demo-file-name":"basic","relative-url":"src/skeleton/demos/enUS/basic.demo.md",title:"Basic Usage",code:"%3Ctemplate%3E%0A%20%20%3Cn-skeleton%20text%20%3Arepeat%3D%222%22%20%2F%3E%20%3Cn-skeleton%20text%20style%3D%22width%3A%2060%25%3B%22%20%2F%3E%0A%3C%2Ftemplate%3E"},{title:t(()=>[V]),content:t(()=>[n(l,null,{default:t(()=>[P,n(r,{code:""},{default:t(()=>[I]),_:1}),R]),_:1})]),demo:t(()=>[e("div",W,[n(u,{text:"",repeat:2}),j,n(u,{text:"",style:{width:"60%"}})])]),_:1})}var L=k(N,[["render",T]]);const q={},G=o(" Box "),H=o("Use it as a box."),J={class:"demo-card__view"};function K(i,a){const r=s("n-p"),l=s("n-skeleton"),u=s("n-space"),h=s("component-demo");return c(),_(h,{"demo-file-name":"box","relative-url":"src/skeleton/demos/enUS/box.demo.md",title:"Box",code:"%3Ctemplate%3E%0A%20%20%3Cn-space%20vertical%3E%0A%20%20%20%20%3Cn-skeleton%20height%3D%2240px%22%20width%3D%2233%25%22%20%2F%3E%0A%20%20%20%20%3Cn-skeleton%20height%3D%2240px%22%20width%3D%2266%25%22%20%3Asharp%3D%22false%22%20%2F%3E%0A%20%20%20%20%3Cn-skeleton%20height%3D%2240px%22%20round%20%2F%3E%0A%20%20%20%20%3Cn-skeleton%20height%3D%2240px%22%20circle%20%2F%3E%0A%20%20%3C%2Fn-space%3E%0A%3C%2Ftemplate%3E"},{title:t(()=>[G]),content:t(()=>[n(r,null,{default:t(()=>[H]),_:1})]),demo:t(()=>[e("div",J,[n(u,{vertical:""},{default:t(()=>[n(l,{height:"40px",width:"33%"}),n(l,{height:"40px",width:"66%",sharp:!1}),n(l,{height:"40px",round:""}),n(l,{height:"40px",circle:""})]),_:1})])]),_:1})}var O=k(q,[["render",K]]);const Q=F({setup(){return{loading:S(!0)}}}),X=o(" Size "),Y=o("Use "),Z=o("size"),ee=o(" to make its height the same as other components."),te={class:"demo-card__view"},ne=o("Loading"),oe=o("Won't you fly high"),se=o("free bird, yeah"),de=o("?");function le(i,a,r,l,u,h){const b=s("n-text"),A=s("n-p"),x=s("n-switch"),m=s("n-space"),p=s("n-skeleton"),f=s("n-button"),y=s("component-demo");return c(),_(y,{"demo-file-name":"size","relative-url":"src/skeleton/demos/enUS/size.demo.md",title:"Size",code:"%3Ctemplate%3E%0A%20%20%3Cn-space%20vertical%3E%0A%20%20%20%20%3Cn-space%3E%3Cn-switch%20v-model%3Avalue%3D%22loading%22%20%2F%3ELoading%3C%2Fn-space%3E%0A%20%20%20%20%3Cn-space%3E%0A%20%20%20%20%20%20%3Cn-skeleton%20v-if%3D%22loading%22%20%3Awidth%3D%22146%22%20%3Asharp%3D%22false%22%20size%3D%22medium%22%20%2F%3E%0A%20%20%20%20%20%20%3Cn-button%20v-else%3EWon't%20you%20fly%20high%3C%2Fn-button%3E%0A%20%20%20%20%20%20%3Cn-skeleton%20v-if%3D%22loading%22%20%3Awidth%3D%22132%22%20round%20size%3D%22medium%22%20%2F%3E%0A%20%20%20%20%20%20%3Cn-button%20v-else%20round%3Efree%20bird%2C%20yeah%3C%2Fn-button%3E%0A%20%20%20%20%20%20%3Cn-skeleton%20v-if%3D%22loading%22%20circle%20size%3D%22medium%22%20%2F%3E%0A%20%20%20%20%20%20%3Cn-button%20v-else%20circle%3E%3F%3C%2Fn-button%3E%0A%20%20%20%20%3C%2Fn-space%3E%0A%20%20%3C%2Fn-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20loading%3A%20ref(true)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:t(()=>[X]),content:t(()=>[n(A,null,{default:t(()=>[Y,n(b,{code:""},{default:t(()=>[Z]),_:1}),ee]),_:1})]),demo:t(()=>[e("div",te,[n(m,{vertical:""},{default:t(()=>[n(m,null,{default:t(()=>[n(x,{value:i.loading,"onUpdate:value":a[0]||(a[0]=C=>i.loading=C)},null,8,["value"]),ne]),_:1}),n(m,null,{default:t(()=>[i.loading?(c(),_(p,{key:0,width:146,sharp:!1,size:"medium"})):(c(),_(f,{key:1},{default:t(()=>[oe]),_:1})),i.loading?(c(),_(p,{key:2,width:132,round:"",size:"medium"})):(c(),_(f,{key:3,round:""},{default:t(()=>[se]),_:1})),i.loading?(c(),_(p,{key:4,circle:"",size:"medium"})):(c(),_(f,{key:5,circle:""},{default:t(()=>[de]),_:1}))]),_:1})]),_:1})])]),_:1})}var ce=k(Q,[["render",le]]);const _e={components:{basicDemo:L,boxDemo:O,sizeDemo:ce},setup(){const i=z(),a=B(()=>!i.value),r=i;return{showAnchor:a,displayMode:U(),wrapperStyle:v(()=>r.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:v(()=>a.value?"width: calc(100% - 164px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"src/skeleton/demos/enUS/index.demo-entry.md"}}},ie=o("A twinkle placeholder."),ae=o("Demos"),re=o("API"),ue=o("Skeleton Props"),he={class:"md-table-wrapper"},me=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Default"),e("th",null,"Description")])],-1),pe=e("td",null,"text",-1),fe=o("boolean"),xe=o("false"),ge=e("td",null,"Text skeleton.",-1),ke=e("td",null,"round",-1),be=o("boolean"),Ae=o("false"),ye=e("td",null,"Round skeleton.",-1),Ce=e("td",null,"circle",-1),ve=o("boolean"),De=o("false"),Ee=e("td",null,"Circle skeleton.",-1),we=e("td",null,"height",-1),$e=o("string | number"),Fe=o("undefined"),Se=e("td",null,"Skeleton height.",-1),ze=e("td",null,"width",-1),Be=o("string | number"),Ue=o("undefined"),Me=e("td",null,"Skeleton width.",-1),Ne=e("td",null,"size",-1),Ve=o("'small' | 'medium' | 'large'"),Pe=o("undefined"),Ie=e("td",null,"Skeleton size.",-1),Re=e("td",null,"repeat",-1),We=o("string | number"),je=o("1"),Te=e("td",null,"Repeat frequency.",-1),Le=e("td",null,"animated",-1),qe=o("boolean"),Ge=o("true"),He=e("td",null,"Whether to enable animation.",-1),Je=e("td",null,"sharp",-1),Ke=o("boolean"),Oe=o("true"),Qe=e("td",null,"Whether to display as a right angled skeleton.",-1),Xe={key:0,style:{width:"128px"}};function Ye(i,a,r,l,u,h){const b=s("edit-on-github-header"),A=s("n-p"),x=s("n-h2"),m=s("basicDemo"),p=s("boxDemo"),f=s("sizeDemo"),y=s("component-demos"),C=s("n-h3"),d=s("n-text"),w=s("n-table"),g=s("n-anchor-link"),$=s("n-anchor");return c(),D("div",{class:"doc",style:E(l.wrapperStyle)},[e("div",{style:E(l.contentStyle)},[n(b,{"relative-url":"src/skeleton/demos/enUS/index.demo-entry.md",text:"Skeleton"}),n(A,null,{default:t(()=>[ie]),_:1}),n(x,{id:"Demos"},{default:t(()=>[ae]),_:1}),n(y,{span:2},{default:t(()=>[n(m),n(p),n(f)]),_:1}),n(x,{id:"API"},{default:t(()=>[re]),_:1}),n(C,{id:"Skeleton-Props"},{default:t(()=>[ue]),_:1}),e("div",he,[n(w,{"single-column":"",class:"md-table"},{default:t(()=>[me,e("tbody",null,[e("tr",null,[pe,e("td",null,[n(d,{code:""},{default:t(()=>[fe]),_:1})]),e("td",null,[n(d,{code:""},{default:t(()=>[xe]),_:1})]),ge]),e("tr",null,[ke,e("td",null,[n(d,{code:""},{default:t(()=>[be]),_:1})]),e("td",null,[n(d,{code:""},{default:t(()=>[Ae]),_:1})]),ye]),e("tr",null,[Ce,e("td",null,[n(d,{code:""},{default:t(()=>[ve]),_:1})]),e("td",null,[n(d,{code:""},{default:t(()=>[De]),_:1})]),Ee]),e("tr",null,[we,e("td",null,[n(d,{code:""},{default:t(()=>[$e]),_:1})]),e("td",null,[n(d,{code:""},{default:t(()=>[Fe]),_:1})]),Se]),e("tr",null,[ze,e("td",null,[n(d,{code:""},{default:t(()=>[Be]),_:1})]),e("td",null,[n(d,{code:""},{default:t(()=>[Ue]),_:1})]),Me]),e("tr",null,[Ne,e("td",null,[n(d,{code:""},{default:t(()=>[Ve]),_:1})]),e("td",null,[n(d,{code:""},{default:t(()=>[Pe]),_:1})]),Ie]),e("tr",null,[Re,e("td",null,[n(d,{code:""},{default:t(()=>[We]),_:1})]),e("td",null,[n(d,{code:""},{default:t(()=>[je]),_:1})]),Te]),e("tr",null,[Le,e("td",null,[n(d,{code:""},{default:t(()=>[qe]),_:1})]),e("td",null,[n(d,{code:""},{default:t(()=>[Ge]),_:1})]),He]),e("tr",null,[Je,e("td",null,[n(d,{code:""},{default:t(()=>[Ke]),_:1})]),e("td",null,[n(d,{code:""},{default:t(()=>[Oe]),_:1})]),Qe])])]),_:1})])],4),l.showAnchor?(c(),D("div",Xe,[n($,{"internal-scrollable":"",bound:16,type:"block",style:{width:"128px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:t(()=>[(l.displayMode,c(),_(g,{key:0,title:"Basic Usage",href:"#basic"})),(l.displayMode,c(),_(g,{key:1,title:"Box",href:"#box"})),(l.displayMode,c(),_(g,{key:2,title:"Size",href:"#size"})),(l.displayMode,c(),_(g,{key:3,title:"API",href:"#API"}))]),_:1})])):M("",!0)],4)}var tt=k(_e,[["render",Ye]]);export{tt as default};
