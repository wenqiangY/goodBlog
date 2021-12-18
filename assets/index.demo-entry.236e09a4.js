import{k,m as S,_ as v,r as n,o as d,j as f,w as t,e,f as o,h as s,u as B,a as T,b as $,c as C,d as b,n as x,g as N}from"./index.95fbdc71.js";import"./axios.dd49c521.js";const P=k({setup(){return{show:S(!0)}}}),F=s(" Basic "),M={class:"demo-card__view"},V=s("Show"),I=s("Hide"),U=s(' "There is no single development, in either technology or management technique, which by itself promises even one order of magnitude [tenfold] improvement within a decade in productivity, in reliability, in simplicity." ');function j(l,i,_,a,g,D){const p=n("n-switch"),h=n("n-collapse-transition"),r=n("n-space"),u=n("component-demo");return d(),f(u,{"demo-file-name":"basic","relative-url":"src/collapse-transition/demos/enUS/basic.demo.md",title:"Basic",code:"%3Ctemplate%3E%0A%20%20%3Cn-space%20vertical%3E%0A%20%20%20%20%3Cn-switch%20v-model%3Avalue%3D%22show%22%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23checked%3EShow%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23unchecked%3EHide%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fn-switch%3E%0A%20%20%20%20%3Cn-collapse-transition%20%3Ashow%3D%22show%22%3E%0A%20%20%20%20%20%20%22There%20is%20no%20single%20development%2C%20in%20either%20technology%20or%20management%0A%20%20%20%20%20%20technique%2C%20which%20by%20itself%20promises%20even%20one%20order%20of%20magnitude%20%5Btenfold%5D%0A%20%20%20%20%20%20improvement%20within%20a%20decade%20in%20productivity%2C%20in%20reliability%2C%20in%20simplicity.%22%0A%20%20%20%20%3C%2Fn-collapse-transition%3E%0A%20%20%3C%2Fn-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20show%3A%20ref(true)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:t(()=>[F]),content:t(()=>[]),demo:t(()=>[e("div",M,[o(r,{vertical:""},{default:t(()=>[o(p,{value:l.show,"onUpdate:value":i[0]||(i[0]=m=>l.show=m)},{checked:t(()=>[V]),unchecked:t(()=>[I]),_:1},8,["value"]),o(h,{show:l.show},{default:t(()=>[U]),_:1},8,["show"])]),_:1})])]),_:1})}var R=v(P,[["render",j]]);const q={components:{basicDemo:R},setup(){const l=B(),i=T(()=>!l.value),_=l;return{showAnchor:i,displayMode:$(),wrapperStyle:C(()=>_.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:C(()=>i.value?"width: calc(100% - 164px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"src/collapse-transition/demos/enUS/index.demo-entry.md"}}},H=s("A collapse item without any form of encapsulation."),W=s("Demos"),z=s("API"),G=s("CollapseTransition Props"),J={class:"md-table-wrapper"},K=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Default"),e("th",null,"Description")])],-1),L=e("td",null,"appear",-1),O=s("boolean"),Q=s("false"),X=e("td",null,"Whether to play animation on first mounted.",-1),Y=e("td",null,"show",-1),Z=s("boolean"),ee=s("true"),te=e("td",null,"Whether to show content.",-1),oe=s("CollapseTransition Slots"),ne={class:"md-table-wrapper"},se=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Parameters"),e("th",null,"Description")])],-1),le=e("td",null,"default",-1),ie=s("()"),ae=e("td",null,"The content inside the transition.",-1),ce={key:0,style:{width:"128px"}};function de(l,i,_,a,g,D){const p=n("edit-on-github-header"),h=n("n-p"),r=n("n-h2"),u=n("basicDemo"),m=n("component-demos"),w=n("n-h3"),c=n("n-text"),y=n("n-table"),A=n("n-anchor-link"),E=n("n-anchor");return d(),b("div",{class:"doc",style:x(a.wrapperStyle)},[e("div",{style:x(a.contentStyle)},[o(p,{"relative-url":"src/collapse-transition/demos/enUS/index.demo-entry.md",text:"Collapse Transition"}),o(h,null,{default:t(()=>[H]),_:1}),o(r,{id:"Demos"},{default:t(()=>[W]),_:1}),o(m,{span:2},{default:t(()=>[o(u)]),_:1}),o(r,{id:"API"},{default:t(()=>[z]),_:1}),o(w,{id:"CollapseTransition-Props"},{default:t(()=>[G]),_:1}),e("div",J,[o(y,{"single-column":"",class:"md-table"},{default:t(()=>[K,e("tbody",null,[e("tr",null,[L,e("td",null,[o(c,{code:""},{default:t(()=>[O]),_:1})]),e("td",null,[o(c,{code:""},{default:t(()=>[Q]),_:1})]),X]),e("tr",null,[Y,e("td",null,[o(c,{code:""},{default:t(()=>[Z]),_:1})]),e("td",null,[o(c,{code:""},{default:t(()=>[ee]),_:1})]),te])])]),_:1})]),o(w,{id:"CollapseTransition-Slots"},{default:t(()=>[oe]),_:1}),e("div",ne,[o(y,{"single-column":"",class:"md-table"},{default:t(()=>[se,e("tbody",null,[e("tr",null,[le,e("td",null,[o(c,{code:""},{default:t(()=>[ie]),_:1})]),ae])])]),_:1})])],4),a.showAnchor?(d(),b("div",ce,[o(E,{"internal-scrollable":"",bound:16,type:"block",style:{width:"128px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:t(()=>[(a.displayMode,d(),f(A,{key:0,title:"Basic",href:"#basic"})),(a.displayMode,d(),f(A,{key:1,title:"API",href:"#API"}))]),_:1})])):N("",!0)],4)}var pe=v(q,[["render",de]]);export{pe as default};
