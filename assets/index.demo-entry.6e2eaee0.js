import{k as D,_ as v,r as o,o as a,j as x,w as e,e as t,f as n,h as s,u as F,a as k,b as M,c as C,d as y,n as E,g as B}from"./index.95fbdc71.js";import{M as V}from"./MdSave.4f1aeff6.js";import"./axios.dd49c521.js";const $=D({components:{MdSave:V}}),N=s(" Basic "),P={class:"demo-card__view"},I=s("/ 100"),U=s("1,234,123");function j(i,_,p,c,S,g){const m=o("md-save"),h=o("n-icon"),d=o("n-statistic"),r=o("n-col"),f=o("n-row"),u=o("component-demo");return a(),x(u,{"demo-file-name":"basic","relative-url":"src/statistic/demos/enUS/basic.demo.md",title:"Basic",code:"%3Ctemplate%3E%0A%20%20%3Cn-row%3E%0A%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0A%20%20%20%20%20%20%3Cn-statistic%20label%3D%22Statistic%22%20%3Avalue%3D%2299%22%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23prefix%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cmd-save%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fn-icon%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23suffix%3E%2F%20100%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2Fn-statistic%3E%0A%20%20%20%20%3C%2Fn-col%3E%0A%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0A%20%20%20%20%20%20%3Cn-statistic%20label%3D%22Active%20Users%22%3E1%2C234%2C123%3C%2Fn-statistic%3E%0A%20%20%20%20%3C%2Fn-col%3E%0A%20%20%3C%2Fn-row%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0Aimport%20%7B%20MdSave%20%7D%20from%20'%40vicons%2Fionicons4'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20components%3A%20%7B%0A%20%20%20%20MdSave%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:e(()=>[N]),content:e(()=>[]),demo:e(()=>[t("div",P,[n(f,null,{default:e(()=>[n(r,{span:12},{default:e(()=>[n(d,{label:"Statistic",value:99},{prefix:e(()=>[n(h,null,{default:e(()=>[n(m)]),_:1})]),suffix:e(()=>[I]),_:1})]),_:1}),n(r,{span:12},{default:e(()=>[n(d,{label:"Active Users"},{default:e(()=>[U]),_:1})]),_:1})]),_:1})])]),_:1})}var R=v($,[["render",j]]);const L={components:{basicDemo:R},setup(){const i=F(),_=k(()=>!i.value),p=i;return{showAnchor:_,displayMode:M(),wrapperStyle:C(()=>p.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:C(()=>_.value?"width: calc(100% - 164px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"src/statistic/demos/enUS/index.demo-entry.md"}}},T=s("As simple as it looks."),z=s("Demos"),q=s("API"),G=s("Statistic Props"),H={class:"md-table-wrapper"},J=t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Type"),t("th",null,"Default"),t("th",null,"Description")])],-1),K=t("td",null,"label",-1),O=s("string"),Q=s("undefined"),W=t("td",null,"Label of the statistics.",-1),X=t("td",null,"value",-1),Y=s("string"),Z=s("undefined"),tt=t("td",null,"Statistics value.",-1),et=s("Statistic Slots"),nt={class:"md-table-wrapper"},ot=t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Parameters"),t("th",null,"Description")])],-1),st=t("td",null,"default",-1),lt=s("()"),ct=t("td",null,"Value slot.",-1),dt=t("td",null,"label",-1),at=s("()"),it=t("td",null,"Label slot.",-1),_t=t("td",null,"prefix",-1),rt=s("()"),ut=t("td",null,"Value prefix.",-1),pt=t("td",null,"suffix",-1),mt=s("()"),ht=t("td",null,"Value suffix.",-1),ft={key:0,style:{width:"128px"}};function xt(i,_,p,c,S,g){const m=o("edit-on-github-header"),h=o("n-p"),d=o("n-h2"),r=o("basicDemo"),f=o("component-demos"),u=o("n-h3"),l=o("n-text"),A=o("n-table"),b=o("n-anchor-link"),w=o("n-anchor");return a(),y("div",{class:"doc",style:E(c.wrapperStyle)},[t("div",{style:E(c.contentStyle)},[n(m,{"relative-url":"src/statistic/demos/enUS/index.demo-entry.md",text:"Statistic"}),n(h,null,{default:e(()=>[T]),_:1}),n(d,{id:"Demos"},{default:e(()=>[z]),_:1}),n(f,{span:2},{default:e(()=>[n(r)]),_:1}),n(d,{id:"API"},{default:e(()=>[q]),_:1}),n(u,{id:"Statistic-Props"},{default:e(()=>[G]),_:1}),t("div",H,[n(A,{"single-column":"",class:"md-table"},{default:e(()=>[J,t("tbody",null,[t("tr",null,[K,t("td",null,[n(l,{code:""},{default:e(()=>[O]),_:1})]),t("td",null,[n(l,{code:""},{default:e(()=>[Q]),_:1})]),W]),t("tr",null,[X,t("td",null,[n(l,{code:""},{default:e(()=>[Y]),_:1})]),t("td",null,[n(l,{code:""},{default:e(()=>[Z]),_:1})]),tt])])]),_:1})]),n(u,{id:"Statistic-Slots"},{default:e(()=>[et]),_:1}),t("div",nt,[n(A,{"single-column":"",class:"md-table"},{default:e(()=>[ot,t("tbody",null,[t("tr",null,[st,t("td",null,[n(l,{code:""},{default:e(()=>[lt]),_:1})]),ct]),t("tr",null,[dt,t("td",null,[n(l,{code:""},{default:e(()=>[at]),_:1})]),it]),t("tr",null,[_t,t("td",null,[n(l,{code:""},{default:e(()=>[rt]),_:1})]),ut]),t("tr",null,[pt,t("td",null,[n(l,{code:""},{default:e(()=>[mt]),_:1})]),ht])])]),_:1})])],4),c.showAnchor?(a(),y("div",ft,[n(w,{"internal-scrollable":"",bound:16,type:"block",style:{width:"128px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:e(()=>[(c.displayMode,a(),x(b,{key:0,title:"Basic",href:"#basic"})),(c.displayMode,a(),x(b,{key:1,title:"API",href:"#API"}))]),_:1})])):B("",!0)],4)}var Ct=v(L,[["render",xt]]);export{Ct as default};
