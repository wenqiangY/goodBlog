import{k as $,y as M,m as V,a2 as N,a3 as S,_ as C,r as a,o as i,j as A,w as t,f as n,e,h as o,t as D,u as E,a as P,b as U,c as x,d as g,n as B,g as I}from"./index.95fbdc71.js";import"./axios.dd49c521.js";const z=$({setup(){const d=M();return{value:V(N(Date.now(),1).valueOf()),handleUpdateValue(s,{year:u,month:r,date:p}){d.success(`${u}-${r}-${p}`)},isDateDisabled(s){return!!S(s)}}}}),j=o(" \u57FA\u7840\u7528\u6CD5 "),F=o("\u4E00\u4E2A\u666E\u901A\u7684\u65E5\u5386\u3002"),R={class:"demo-card__view"};function Y(d,s,u,r,p,w){const h=a("n-p"),f=a("n-calendar"),_=a("component-demo");return i(),A(_,{"demo-file-name":"basic","relative-url":"src/calendar/demos/zhCN/basic.demo.md",title:"\u57FA\u7840\u7528\u6CD5",code:"%3Ctemplate%3E%0A%20%20%3Cn-calendar%0A%20%20%20%20%40update%3Avalue%3D%22handleUpdateValue%22%0A%20%20%20%20%23%3D%22%7B%20year%2C%20month%2C%20date%20%7D%22%0A%20%20%20%20v-model%3Avalue%3D%22value%22%0A%20%20%20%20%3Ais-date-disabled%3D%22isDateDisabled%22%0A%20%20%3E%0A%20%20%20%20%7B%7B%20year%20%7D%7D-%7B%7B%20month%20%7D%7D-%7B%7B%20date%20%7D%7D%0A%20%20%3C%2Fn-calendar%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0Aimport%20%7B%20useMessage%20%7D%20from%20'novice-ui'%0Aimport%20%7B%20isYesterday%2C%20addDays%20%7D%20from%20'date-fns'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20message%20%3D%20useMessage()%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(addDays(Date.now()%2C%201).valueOf())%2C%0A%20%20%20%20%20%20handleUpdateValue%20(_%2C%20%7B%20year%2C%20month%2C%20date%20%7D)%20%7B%0A%20%20%20%20%20%20%20%20message.success(%60%24%7Byear%7D-%24%7Bmonth%7D-%24%7Bdate%7D%60)%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20isDateDisabled%20(timestamp)%20%7B%0A%20%20%20%20%20%20%20%20if%20(isYesterday(timestamp))%20%7B%0A%20%20%20%20%20%20%20%20%20%20return%20true%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20return%20false%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:t(()=>[j]),content:t(()=>[n(h,null,{default:t(()=>[F]),_:1})]),demo:t(()=>[e("div",R,[n(f,{"onUpdate:value":[d.handleUpdateValue,s[0]||(s[0]=c=>d.value=c)],value:d.value,"is-date-disabled":d.isDateDisabled},{default:t(({year:c,month:b,date:m})=>[o(D(c)+"-"+D(b)+"-"+D(m),1)]),_:1},8,["onUpdate:value","value","is-date-disabled"])])]),_:1})}var O=C(z,[["render",Y]]);const T={components:{basicDemo:O},setup(){const d=E(),s=P(()=>!d.value),u=d;return{showAnchor:s,displayMode:U(),wrapperStyle:x(()=>u.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:x(()=>s.value?"width: calc(100% - 164px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"src/calendar/demos/zhCN/index.demo-entry.md"}}},q=o("\u65F6\u95F4\u8FC7\u7684\u5FEB\u3002"),G=o("\u6F14\u793A"),H=o("API"),J=o("Calendar Props"),K={class:"md-table-wrapper"},L=e("thead",null,[e("tr",null,[e("th",null,"\u540D\u79F0"),e("th",null,"\u7C7B\u578B"),e("th",null,"\u9ED8\u8BA4\u503C"),e("th",null,"\u8BF4\u660E")])],-1),Q=e("td",null,"default-value",-1),W=o("number"),X=o("null"),Z=e("td",null,"\u9ED8\u8BA4\u88AB\u9009\u4E2D\u7684\u65E5\u671F\u7684\u65F6\u95F4\u6233",-1),ee=e("td",null,"is-date-disabled",-1),te=o("(timestamp: number) => boolean"),ne=o("undefined"),oe=e("td",null,"\u65E5\u671F\u7981\u7528\u7684\u6821\u9A8C\u51FD\u6570",-1),ae=e("td",null,"value",-1),de=o("number | null"),se=o("undefined"),le=e("td",null,"\u88AB\u9009\u4E2D\u7684\u65E5\u671F\u7684\u65F6\u95F4\u6233",-1),re=e("td",null,"on-update:value",-1),ue=o("(timestamp: number, { year: number, month: number, date: number }) => void"),ce=o("undefined"),ie=e("td",null,"\u9009\u4E2D\u65E5\u671F\u7684\u56DE\u8C03",-1),_e=o("Calendar Slots"),me={class:"md-table-wrapper"},pe=e("thead",null,[e("tr",null,[e("th",null,"\u540D\u79F0"),e("th",null,"\u53C2\u6570"),e("th",null,"\u8BF4\u660E")])],-1),he=e("td",null,"default",-1),fe=o("({ year: number, month: number, date: number })"),be=e("td",null,"\u6BCF\u4E2A\u65E5\u671F\u4E2D\u6E32\u67D3\u7684\u5185\u5BB9",-1),Ae={key:0,style:{width:"128px"}};function De(d,s,u,r,p,w){const h=a("edit-on-github-header"),f=a("n-p"),_=a("n-h2"),c=a("basicDemo"),b=a("component-demos"),m=a("n-h3"),l=a("n-text"),y=a("n-table"),v=a("n-anchor-link"),k=a("n-anchor");return i(),g("div",{class:"doc",style:B(r.wrapperStyle)},[e("div",{style:B(r.contentStyle)},[n(h,{"relative-url":"src/calendar/demos/zhCN/index.demo-entry.md",text:"\u65E5\u5386 Calendar"}),n(f,null,{default:t(()=>[q]),_:1}),n(_,{id:"\u6F14\u793A"},{default:t(()=>[G]),_:1}),n(b,{span:1},{default:t(()=>[n(c)]),_:1}),n(_,{id:"API"},{default:t(()=>[H]),_:1}),n(m,{id:"Calendar-Props"},{default:t(()=>[J]),_:1}),e("div",K,[n(y,{"single-column":"",class:"md-table"},{default:t(()=>[L,e("tbody",null,[e("tr",null,[Q,e("td",null,[n(l,{code:""},{default:t(()=>[W]),_:1})]),e("td",null,[n(l,{code:""},{default:t(()=>[X]),_:1})]),Z]),e("tr",null,[ee,e("td",null,[n(l,{code:""},{default:t(()=>[te]),_:1})]),e("td",null,[n(l,{code:""},{default:t(()=>[ne]),_:1})]),oe]),e("tr",null,[ae,e("td",null,[n(l,{code:""},{default:t(()=>[de]),_:1})]),e("td",null,[n(l,{code:""},{default:t(()=>[se]),_:1})]),le]),e("tr",null,[re,e("td",null,[n(l,{code:""},{default:t(()=>[ue]),_:1})]),e("td",null,[n(l,{code:""},{default:t(()=>[ce]),_:1})]),ie])])]),_:1})]),n(m,{id:"Calendar-Slots"},{default:t(()=>[_e]),_:1}),e("div",me,[n(y,{"single-column":"",class:"md-table"},{default:t(()=>[pe,e("tbody",null,[e("tr",null,[he,e("td",null,[n(l,{code:""},{default:t(()=>[fe]),_:1})]),be])])]),_:1})])],4),r.showAnchor?(i(),g("div",Ae,[n(k,{"internal-scrollable":"",bound:16,type:"block",style:{width:"128px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:t(()=>[(r.displayMode,i(),A(v,{key:0,title:"\u57FA\u7840\u7528\u6CD5",href:"#basic"})),(r.displayMode,i(),A(v,{key:1,title:"API",href:"#API"}))]),_:1})])):I("",!0)],4)}var Ce=C(T,[["render",De]]);export{Ce as default};
