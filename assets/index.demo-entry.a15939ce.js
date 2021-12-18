import{k as E,m as h,_ as C,r as s,o as p,j as _,w as t,e,f as o,h as n,t as B,u as O,a as J,b as R,c as x,d as y,n as k,g as T}from"./index.95fbdc71.js";import"./axios.dd49c521.js";const G=E({setup(){return{page:h(2)}}}),H=n(" \u57FA\u7840\u7528\u6CD5 "),K={class:"demo-card__view"};function L(d,a,u,l,A,g){const r=s("n-pagination"),m=s("component-demo");return p(),_(m,{"demo-file-name":"basic","relative-url":"src/pagination/demos/zhCN/basic.demo.md",title:"\u57FA\u7840\u7528\u6CD5",code:"%3Ctemplate%3E%0A%20%20%3Cn-pagination%20v-model%3Apage%3D%22page%22%20%3Apage-count%3D%22100%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20page%3A%20ref(2)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:t(()=>[H]),content:t(()=>[]),demo:t(()=>[e("div",K,[o(r,{page:d.page,"onUpdate:page":a[0]||(a[0]=c=>d.page=c),"page-count":100},null,8,["page"])])]),_:1})}var Q=C(G,[["render",L]]);const W=E({setup(){return{page:h(2)}}}),X=n(" \u9875\u9762\u69FD\u4F4D "),Y=n("\u5206\u9875\u6709\u4E00\u4E2A\u5C5E\u6027 "),Z=n("page-slot"),ee=n("\uFF0C\u8BD5\u4E00\u4E0B\u4F60\u5C31\u80FD\u7406\u89E3\u5B83\u5728\u505A\u4EC0\u4E48\u4E86\u3002\u8FD9\u4E2A\u6982\u5FF5\u4E3B\u8981\u662F\u4E3A\u4E86\u89E3\u51B3\u7531\u4E8E\u5206\u9875\u957F\u5EA6\u53D8\u5316\u5BFC\u81F4\u7684\u8BEF\u70B9\u51FB\u95EE\u9898\u3002"),te={class:"demo-card__view"};function ne(d,a,u,l,A,g){const r=s("n-text"),m=s("n-p"),c=s("n-pagination"),z=s("n-space"),D=s("component-demo");return p(),_(D,{"demo-file-name":"slot","relative-url":"src/pagination/demos/zhCN/slot.demo.md",title:"\u9875\u9762\u69FD\u4F4D",code:"%3Ctemplate%3E%0A%20%20%3Cn-space%20vertical%3E%0A%20%20%20%20%3Cn-pagination%20v-model%3Apage%3D%22page%22%20%3Apage-count%3D%22100%22%20%2F%3E%0A%20%20%20%20%3Cn-pagination%20v-model%3Apage%3D%22page%22%20%3Apage-count%3D%22100%22%20%3Apage-slot%3D%228%22%20%2F%3E%0A%20%20%20%20%3Cn-pagination%20v-model%3Apage%3D%22page%22%20%3Apage-count%3D%22100%22%20%3Apage-slot%3D%227%22%20%2F%3E%0A%20%20%3C%2Fn-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20page%3A%20ref(2)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:t(()=>[X]),content:t(()=>[o(m,null,{default:t(()=>[Y,o(r,{code:""},{default:t(()=>[Z]),_:1}),ee]),_:1})]),demo:t(()=>[e("div",te,[o(z,{vertical:""},{default:t(()=>[o(c,{page:d.page,"onUpdate:page":a[0]||(a[0]=v=>d.page=v),"page-count":100},null,8,["page"]),o(c,{page:d.page,"onUpdate:page":a[1]||(a[1]=v=>d.page=v),"page-count":100,"page-slot":8},null,8,["page"]),o(c,{page:d.page,"onUpdate:page":a[2]||(a[2]=v=>d.page=v),"page-count":100,"page-slot":7},null,8,["page"])]),_:1})])]),_:1})}var oe=C(W,[["render",ne]]);const se=E({setup(){return{page:h(2)}}}),de=n(" \u5FEB\u901F\u8DF3\u8DC3 "),ae={class:"demo-card__view"};function ie(d,a,u,l,A,g){const r=s("n-pagination"),m=s("component-demo");return p(),_(m,{"demo-file-name":"quick-jumper","relative-url":"src/pagination/demos/zhCN/quick-jumper.demo.md",title:"\u5FEB\u901F\u8DF3\u8DC3",code:"%3Ctemplate%3E%0A%20%20%3Cn-pagination%20v-model%3Apage%3D%22page%22%20%3Apage-count%3D%22100%22%20show-quick-jumper%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20page%3A%20ref(2)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:t(()=>[de]),content:t(()=>[]),demo:t(()=>[e("div",ae,[o(r,{page:d.page,"onUpdate:page":a[0]||(a[0]=c=>d.page=c),"page-count":100,"show-quick-jumper":""},null,8,["page"])])]),_:1})}var le=C(se,[["render",ie]]);const pe=E({setup(){return{page:h(2),pageSize:h(20)}}}),ce=n(" \u6BCF\u9875\u6761\u6570 "),_e={class:"demo-card__view"};function ue(d,a,u,l,A,g){const r=s("n-pagination"),m=s("component-demo");return p(),_(m,{"demo-file-name":"size-picker","relative-url":"src/pagination/demos/zhCN/size-picker.demo.md",title:"\u6BCF\u9875\u6761\u6570",code:"%3Ctemplate%3E%0A%20%20%3Cn-pagination%0A%20%20%20%20v-model%3Apage%3D%22page%22%0A%20%20%20%20v-model%3Apage-size%3D%22pageSize%22%0A%20%20%20%20%3Apage-count%3D%22100%22%0A%20%20%20%20show-size-picker%0A%20%20%20%20%3Apage-sizes%3D%22%5B10%2C%2020%2C%2030%2C%2040%5D%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20page%3A%20ref(2)%2C%0A%20%20%20%20%20%20pageSize%3A%20ref(20)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:t(()=>[ce]),content:t(()=>[]),demo:t(()=>[e("div",_e,[o(r,{page:d.page,"onUpdate:page":a[0]||(a[0]=c=>d.page=c),"page-size":d.pageSize,"onUpdate:page-size":a[1]||(a[1]=c=>d.pageSize=c),"page-count":100,"show-size-picker":"","page-sizes":[10,20,30,40]},null,8,["page","page-size"])])]),_:1})}var re=C(pe,[["render",ue]]);const me=E({setup(){return{page:h(2),pageSize:h(20),disabled:h(!0)}}}),ge=n(" \u7981\u7528 "),Ae={class:"demo-card__view"};function fe(d,a,u,l,A,g){const r=s("n-pagination"),m=s("n-switch"),c=s("n-space"),z=s("component-demo");return p(),_(z,{"demo-file-name":"disabled","relative-url":"src/pagination/demos/zhCN/disabled.demo.md",title:"\u7981\u7528",code:"%3Ctemplate%3E%0A%20%20%3Cn-space%20vertical%3E%0A%20%20%20%20%3Cn-pagination%0A%20%20%20%20%20%20v-model%3Apage%3D%22page%22%0A%20%20%20%20%20%20v-model%3Apage-size%3D%22pageSize%22%0A%20%20%20%20%20%20%3Apage-count%3D%22100%22%0A%20%20%20%20%20%20show-size-picker%0A%20%20%20%20%20%20%3Apage-sizes%3D%22%5B10%2C%2020%2C%2030%2C%2040%5D%22%0A%20%20%20%20%20%20show-quick-jumper%0A%20%20%20%20%20%20%3Adisabled%3D%22disabled%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3Cn-switch%20v-model%3Avalue%3D%22disabled%22%20%2F%3E%0A%20%20%3C%2Fn-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20page%3A%20ref(2)%2C%0A%20%20%20%20%20%20pageSize%3A%20ref(20)%2C%0A%20%20%20%20%20%20disabled%3A%20ref(true)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:t(()=>[ge]),content:t(()=>[]),demo:t(()=>[e("div",Ae,[o(c,{vertical:""},{default:t(()=>[o(r,{page:d.page,"onUpdate:page":a[0]||(a[0]=D=>d.page=D),"page-size":d.pageSize,"onUpdate:page-size":a[1]||(a[1]=D=>d.pageSize=D),"page-count":100,"show-size-picker":"","page-sizes":[10,20,30,40],"show-quick-jumper":"",disabled:d.disabled},null,8,["page","page-size","disabled"]),o(m,{value:d.disabled,"onUpdate:value":a[2]||(a[2]=D=>d.disabled=D)},null,8,["value"])]),_:1})])]),_:1})}var he=C(me,[["render",fe]]);const Ce={},De=n(" \u4F7F\u7528\u5143\u7D20\u4E2A\u6570\u63A7\u5236\u5206\u9875 "),ve=n("\u6709\u7684\u65F6\u5019\u4F60\u4E0D\u60F3\u4F20\u9012 "),Ee=n("page-count"),ze=n("\uFF0C\u8FD9\u4E2A\u65F6\u5019\u4F60\u53EF\u4EE5\u8BBE\u5B9A "),be=n("item-count"),Be=n(" \u548C "),$e=n("page-size"),xe=n("\u3002"),ye={class:"demo-card__view"};function ke(d,a){const u=s("n-text"),l=s("n-p"),A=s("n-pagination"),g=s("component-demo");return p(),_(g,{"demo-file-name":"item-count","relative-url":"src/pagination/demos/zhCN/item-count.demo.md",title:"\u4F7F\u7528\u5143\u7D20\u4E2A\u6570\u63A7\u5236\u5206\u9875",code:"%3Ctemplate%3E%0A%20%20%3Cn-pagination%20%3Aitem-count%3D%22201%22%20%3Apage-sizes%3D%22%5B10%2C%2020%2C%2030%2C%2040%5D%22%20showSizePicker%20%2F%3E%0A%3C%2Ftemplate%3E"},{title:t(()=>[De]),content:t(()=>[o(l,null,{default:t(()=>[ve,o(u,{code:""},{default:t(()=>[Ee]),_:1}),ze,o(u,{code:""},{default:t(()=>[be]),_:1}),Be,o(u,{code:""},{default:t(()=>[$e]),_:1}),xe]),_:1})]),demo:t(()=>[e("div",ye,[o(A,{"item-count":201,"page-sizes":[10,20,30,40],showSizePicker:""})])]),_:1})}var we=C(Ce,[["render",ke]]);const Fe={},Se=n(" \u81EA\u5B9A\u4E49\u4E0A\u4E00\u6B65\u548C\u4E0B\u4E00\u6B65 "),Pe={class:"demo-card__view"},Ne=n("\u5F80\u56DE\u8D70"),je=n("\u7EE7\u7EED\u8D70");function Ie(d,a){const u=s("n-pagination"),l=s("component-demo");return p(),_(l,{"demo-file-name":"prev","relative-url":"src/pagination/demos/zhCN/prev.demo.md",title:"\u81EA\u5B9A\u4E49\u4E0A\u4E00\u6B65\u548C\u4E0B\u4E00\u6B65",code:"%3Ctemplate%3E%0A%20%20%3Cn-pagination%20%3Apage-count%3D%22101%22%3E%0A%20%20%20%20%3Ctemplate%20%23prev%3E%E5%BE%80%E5%9B%9E%E8%B5%B0%3C%2Ftemplate%3E%0A%20%20%20%20%3Ctemplate%20%23next%3E%E7%BB%A7%E7%BB%AD%E8%B5%B0%3C%2Ftemplate%3E%0A%20%20%3C%2Fn-pagination%3E%0A%3C%2Ftemplate%3E"},{title:t(()=>[Se]),content:t(()=>[]),demo:t(()=>[e("div",Pe,[o(u,{"page-count":101},{prev:t(()=>[Ne]),next:t(()=>[je]),_:1})])]),_:1})}var Ve=C(Fe,[["render",Ie]]);const Me={},Ue=n(" \u524D\u540E\u7F00 "),qe=n("\u4F60\u53EF\u80FD\u60F3\u518D\u524D\u540E\u90FD\u52A0\u70B9\u5565\u3002"),Oe={class:"demo-card__view"};function Je(d,a){const u=s("n-p"),l=s("n-pagination"),A=s("component-demo");return p(),_(A,{"demo-file-name":"prefix","relative-url":"src/pagination/demos/zhCN/prefix.demo.md",title:"\u524D\u540E\u7F00",code:"%3Ctemplate%3E%0A%20%20%3Cn-pagination%20%3Aitem-count%3D%22101%22%3E%0A%20%20%20%20%3Ctemplate%20%23prefix%3D%22%7B%20itemCount%20%2C%20startIndex%20%7D%22%3E%0A%20%20%20%20%20%20%E4%BB%8E%E7%AC%AC%20%7B%7B%20startIndex%20%7D%7D%20%E9%A1%B9%E5%BC%80%E5%A7%8B%2C%20%E5%85%B1%20%7B%7B%20itemCount%20%7D%7D%20%E9%A1%B9%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3Ctemplate%20%23suffix%3D%22%7B%20endIndex%20%7D%22%3E%20%E4%BB%8E%E7%AC%AC%20%7B%7B%20endIndex%20%7D%7D%20%E9%A1%B9%E7%BB%93%E6%9D%9F%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fn-pagination%3E%0A%3C%2Ftemplate%3E"},{title:t(()=>[Ue]),content:t(()=>[o(u,null,{default:t(()=>[qe]),_:1})]),demo:t(()=>[e("div",Oe,[o(l,{"item-count":101},{prefix:t(({itemCount:g,startIndex:r})=>[n(" \u4ECE\u7B2C "+B(r)+" \u9879\u5F00\u59CB, \u5171 "+B(g)+" \u9879 ",1)]),suffix:t(({endIndex:g})=>[n(" \u4ECE\u7B2C "+B(g)+" \u9879\u7ED3\u675F ",1)]),_:1})])]),_:1})}var Re=C(Me,[["render",Je]]);const Te=E({setup(){const d=[{label:"10 \u6BCF\u9875",value:10},{label:"20 \u6BCF\u9875",value:20},{label:"30 \u6BCF\u9875",value:30},{label:"40 \u6BCF\u9875",value:50}];return{page:h(2),pageSize:h(20),pageSizes:d}}}),Ge=n(" \u81EA\u5B9A\u4E49 PageSizes \u9009\u9879 "),He={class:"demo-card__view"};function Ke(d,a,u,l,A,g){const r=s("n-pagination"),m=s("component-demo");return p(),_(m,{"demo-file-name":"page-size-option","relative-url":"src/pagination/demos/zhCN/page-size-option.demo.md",title:"\u81EA\u5B9A\u4E49 PageSizes \u9009\u9879",code:"%3Ctemplate%3E%0A%20%20%3Cn-pagination%0A%20%20%20%20v-model%3Apage%3D%22page%22%0A%20%20%20%20v-model%3Apage-size%3D%22pageSize%22%0A%20%20%20%20%3Apage-count%3D%22100%22%0A%20%20%20%20show-size-picker%0A%20%20%20%20%3Apage-sizes%3D%22pageSizes%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20pageSizes%20%3D%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'10%20%E6%AF%8F%E9%A1%B5'%2C%0A%20%20%20%20%20%20%20%20value%3A%2010%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'20%20%E6%AF%8F%E9%A1%B5'%2C%0A%20%20%20%20%20%20%20%20value%3A%2020%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'30%20%E6%AF%8F%E9%A1%B5'%2C%0A%20%20%20%20%20%20%20%20value%3A%2030%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'40%20%E6%AF%8F%E9%A1%B5'%2C%0A%20%20%20%20%20%20%20%20value%3A%2050%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20page%3A%20ref(2)%2C%0A%20%20%20%20%20%20pageSize%3A%20ref(20)%2C%0A%20%20%20%20%20%20pageSizes%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:t(()=>[Ge]),content:t(()=>[]),demo:t(()=>[e("div",He,[o(r,{page:d.page,"onUpdate:page":a[0]||(a[0]=c=>d.page=c),"page-size":d.pageSize,"onUpdate:page-size":a[1]||(a[1]=c=>d.pageSize=c),"page-count":100,"show-size-picker":"","page-sizes":d.pageSizes},null,8,["page","page-size","page-sizes"])])]),_:1})}var Le=C(Te,[["render",Ke]]);const Qe={components:{basicDemo:Q,slotDemo:oe,quickJumperDemo:le,sizePickerDemo:re,disabledDemo:he,itemCountDemo:we,prevDemo:Ve,prefixDemo:Re,pageSizeOptionDemo:Le},setup(){const d=O(),a=J(()=>!d.value),u=d;return{showAnchor:a,displayMode:R(),wrapperStyle:x(()=>u.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:x(()=>a.value?"width: calc(100% - 164px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"src/pagination/demos/zhCN/index.demo-entry.md"}}},We=n("\u957F\u6570\u636E\u4E4B\u53CB\u3002"),Xe=n("\u6F14\u793A"),Ye=n("API"),Ze=n("Pagination Props"),et={class:"md-table-wrapper"},tt=e("thead",null,[e("tr",null,[e("th",null,"\u540D\u79F0"),e("th",null,"\u7C7B\u578B"),e("th",null,"\u9ED8\u8BA4\u503C"),e("th",null,"\u8BF4\u660E")])],-1),nt=e("td",null,"default-page",-1),ot=n("number"),st=n("1"),dt=e("td",null,"\u975E\u53D7\u63A7\u6A21\u5F0F\u4E0B\u7684\u5F53\u524D\u9875",-1),at=e("td",null,"default-page-size",-1),it=n("number"),lt=n("10"),pt=e("td",null,"\u975E\u53D7\u63A7\u6A21\u5F0F\u4E0B\u7684\u5206\u9875\u5927\u5C0F",-1),ct=e("td",null,"next",-1),_t=n("(info: PaginationInfo) => VNodeChild"),ut=n("undefined"),rt=e("td",null,"\u4E0B\u4E00\u9875",-1),mt=e("td",null,"prev",-1),gt=n("(info: PaginationInfo) => VNodeChild"),At=n("undefined"),ft=e("td",null,"\u4E0A\u4E00\u9875",-1),ht=e("td",null,"item-count",-1),Ct=n("number"),Dt=n("undefined"),vt=e("td",null,"\u603B\u6761\u6570",-1),Et=e("td",null,"page-count",-1),zt=n("number"),bt=n("1"),Bt=e("td",null,"\u603B\u9875\u6570",-1),$t=e("td",null,"page-sizes",-1),xt=n("Array<number | PaginationSizeOption>"),yt=n("[10]"),kt=e("td",null,"\u6BCF\u9875\u6761\u6570\uFF0C \u53EF\u81EA\u5B9A\u4E49",-1),wt=e("td",null,"page-size",-1),Ft=n("number"),St=n("undefined"),Pt=e("td",null,"\u53D7\u63A7\u6A21\u5F0F\u4E0B\u7684\u5206\u9875\u5927\u5C0F",-1),Nt=e("td",null,"page-slot",-1),jt=n("number"),It=n("9"),Vt=e("td",null,"\u9875\u7801\u663E\u793A\u7684\u4E2A\u6570",-1),Mt=e("td",null,"page",-1),Ut=n("number"),qt=n("undefined"),Ot=e("td",null,"\u53D7\u63A7\u6A21\u5F0F\u4E0B\u7684\u5F53\u524D\u9875",-1),Jt=e("td",null,"prefix",-1),Rt=n("(info: PaginationInfo) => VNodeChild"),Tt=n("undefined"),Gt=e("td",null,"\u5206\u9875\u524D\u7F00",-1),Ht=e("td",null,"show-quick-jumper",-1),Kt=n("boolean"),Lt=n("false"),Qt=e("td",null,"\u662F\u5426\u663E\u793A\u5FEB\u901F\u8DF3\u8F6C",-1),Wt=e("td",null,"suffix",-1),Xt=n("(info: PaginationInfo) => VNodeChild"),Yt=n("undefined"),Zt=e("td",null,"\u5206\u9875\u540E\u7F00",-1),en=e("td",null,"show-size-picker",-1),tn=n("boolean"),nn=n("false"),on=e("td",null,"\u662F\u5426\u663E\u793A\u6BCF\u9875\u6761\u6570\u7684\u9009\u62E9\u5668",-1),sn=e("td",null,"on-update:page",-1),dn=n("(page: number) => void"),an=n("undefined"),ln=e("td",null,"\u5F53\u524D\u9875\u53D1\u751F\u6539\u53D8\u65F6\u7684\u56DE\u8C03\u51FD\u6570",-1),pn=e("td",null,"on-update:page-size",-1),cn=n("(pageSize: number) => void"),_n=n("undefined"),un=e("td",null,"\u5F53\u524D\u5206\u9875\u5927\u5C0F\u53D1\u751F\u6539\u53D8\u65F6\u7684\u56DE\u8C03\u51FD\u6570",-1),rn=n("Pagination Slots"),mn={class:"md-table-wrapper"},gn=e("thead",null,[e("tr",null,[e("th",null,"\u540D\u79F0"),e("th",null,"\u53C2\u6570"),e("th",null,"\u8BF4\u660E")])],-1),An=e("td",null,"next",-1),fn=n("(info: PaginationInfo)"),hn=e("td",null,"\u4E0B\u4E00\u9875",-1),Cn=e("td",null,"prev",-1),Dn=n("(info: PaginationInfo)"),vn=e("td",null,"\u4E0A\u4E00\u9875",-1),En=e("td",null,"prefix",-1),zn=n("(info: PaginationInfo)"),bn=e("td",null,"\u5206\u9875\u524D\u7F00",-1),Bn=e("td",null,"suffix",-1),$n=n("(info: PaginationInfo)"),xn=e("td",null,"\u5206\u9875\u540E\u7F00",-1),yn=n("PaginationInfo Type"),kn=e("pre",null,[e("span",{class:"hljs-keyword"},"interface"),n(),e("span",{class:"hljs-title class_"},"PaginationInfo"),n(` {
  `),e("span",{class:"hljs-attr"},"startIndex"),n(": "),e("span",{class:"hljs-built_in"},"number"),n(`
  `),e("span",{class:"hljs-attr"},"endIndex"),n(": "),e("span",{class:"hljs-built_in"},"number"),n(`
  `),e("span",{class:"hljs-attr"},"page"),n(": "),e("span",{class:"hljs-built_in"},"number"),n(`
  `),e("span",{class:"hljs-attr"},"pageSize"),n(": "),e("span",{class:"hljs-built_in"},"number"),n(`
  `),e("span",{class:"hljs-attr"},"pageCount"),n(": "),e("span",{class:"hljs-built_in"},"number"),n(`
  `),e("span",{class:"hljs-attr"},"itemCount"),n(": "),e("span",{class:"hljs-built_in"},"number"),n(" | "),e("span",{class:"hljs-literal"},"undefined"),n(`
}`)],-1),wn={key:0,style:{width:"128px"}};function Fn(d,a,u,l,A,g){const r=s("edit-on-github-header"),m=s("n-p"),c=s("n-h2"),z=s("basicDemo"),D=s("slotDemo"),v=s("quickJumperDemo"),w=s("sizePickerDemo"),F=s("disabledDemo"),S=s("itemCountDemo"),P=s("prevDemo"),N=s("prefixDemo"),j=s("pageSizeOptionDemo"),I=s("component-demos"),b=s("n-h3"),i=s("n-text"),$=s("n-table"),V=s("n-code"),M=s("n-scrollbar"),U=s("n-card"),f=s("n-anchor-link"),q=s("n-anchor");return p(),y("div",{class:"doc",style:k(l.wrapperStyle)},[e("div",{style:k(l.contentStyle)},[o(r,{"relative-url":"src/pagination/demos/zhCN/index.demo-entry.md",text:"\u5206\u9875 Pagination"}),o(m,null,{default:t(()=>[We]),_:1}),o(c,{id:"\u6F14\u793A"},{default:t(()=>[Xe]),_:1}),o(I,{span:1},{default:t(()=>[o(z),o(D),o(v),o(w),o(F),o(S),o(P),o(N),o(j)]),_:1}),o(c,{id:"API"},{default:t(()=>[Ye]),_:1}),o(b,{id:"Pagination-Props"},{default:t(()=>[Ze]),_:1}),e("div",et,[o($,{"single-column":"",class:"md-table"},{default:t(()=>[tt,e("tbody",null,[e("tr",null,[nt,e("td",null,[o(i,{code:""},{default:t(()=>[ot]),_:1})]),e("td",null,[o(i,{code:""},{default:t(()=>[st]),_:1})]),dt]),e("tr",null,[at,e("td",null,[o(i,{code:""},{default:t(()=>[it]),_:1})]),e("td",null,[o(i,{code:""},{default:t(()=>[lt]),_:1})]),pt]),e("tr",null,[ct,e("td",null,[o(i,{code:""},{default:t(()=>[_t]),_:1})]),e("td",null,[o(i,{code:""},{default:t(()=>[ut]),_:1})]),rt]),e("tr",null,[mt,e("td",null,[o(i,{code:""},{default:t(()=>[gt]),_:1})]),e("td",null,[o(i,{code:""},{default:t(()=>[At]),_:1})]),ft]),e("tr",null,[ht,e("td",null,[o(i,{code:""},{default:t(()=>[Ct]),_:1})]),e("td",null,[o(i,{code:""},{default:t(()=>[Dt]),_:1})]),vt]),e("tr",null,[Et,e("td",null,[o(i,{code:""},{default:t(()=>[zt]),_:1})]),e("td",null,[o(i,{code:""},{default:t(()=>[bt]),_:1})]),Bt]),e("tr",null,[$t,e("td",null,[o(i,{code:""},{default:t(()=>[xt]),_:1})]),e("td",null,[o(i,{code:""},{default:t(()=>[yt]),_:1})]),kt]),e("tr",null,[wt,e("td",null,[o(i,{code:""},{default:t(()=>[Ft]),_:1})]),e("td",null,[o(i,{code:""},{default:t(()=>[St]),_:1})]),Pt]),e("tr",null,[Nt,e("td",null,[o(i,{code:""},{default:t(()=>[jt]),_:1})]),e("td",null,[o(i,{code:""},{default:t(()=>[It]),_:1})]),Vt]),e("tr",null,[Mt,e("td",null,[o(i,{code:""},{default:t(()=>[Ut]),_:1})]),e("td",null,[o(i,{code:""},{default:t(()=>[qt]),_:1})]),Ot]),e("tr",null,[Jt,e("td",null,[o(i,{code:""},{default:t(()=>[Rt]),_:1})]),e("td",null,[o(i,{code:""},{default:t(()=>[Tt]),_:1})]),Gt]),e("tr",null,[Ht,e("td",null,[o(i,{code:""},{default:t(()=>[Kt]),_:1})]),e("td",null,[o(i,{code:""},{default:t(()=>[Lt]),_:1})]),Qt]),e("tr",null,[Wt,e("td",null,[o(i,{code:""},{default:t(()=>[Xt]),_:1})]),e("td",null,[o(i,{code:""},{default:t(()=>[Yt]),_:1})]),Zt]),e("tr",null,[en,e("td",null,[o(i,{code:""},{default:t(()=>[tn]),_:1})]),e("td",null,[o(i,{code:""},{default:t(()=>[nn]),_:1})]),on]),e("tr",null,[sn,e("td",null,[o(i,{code:""},{default:t(()=>[dn]),_:1})]),e("td",null,[o(i,{code:""},{default:t(()=>[an]),_:1})]),ln]),e("tr",null,[pn,e("td",null,[o(i,{code:""},{default:t(()=>[cn]),_:1})]),e("td",null,[o(i,{code:""},{default:t(()=>[_n]),_:1})]),un])])]),_:1})]),o(b,{id:"Pagination-Slots"},{default:t(()=>[rn]),_:1}),e("div",mn,[o($,{"single-column":"",class:"md-table"},{default:t(()=>[gn,e("tbody",null,[e("tr",null,[An,e("td",null,[o(i,{code:""},{default:t(()=>[fn]),_:1})]),hn]),e("tr",null,[Cn,e("td",null,[o(i,{code:""},{default:t(()=>[Dn]),_:1})]),vn]),e("tr",null,[En,e("td",null,[o(i,{code:""},{default:t(()=>[zn]),_:1})]),bn]),e("tr",null,[Bn,e("td",null,[o(i,{code:""},{default:t(()=>[$n]),_:1})]),xn])])]),_:1})]),o(b,{id:"PaginationInfo-Type"},{default:t(()=>[yn]),_:1}),o(U,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:t(()=>[o(M,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:t(()=>[o(V,null,{default:t(()=>[kn]),_:1})]),_:1})]),_:1})],4),l.showAnchor?(p(),y("div",wn,[o(q,{"internal-scrollable":"",bound:16,type:"block",style:{width:"128px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:t(()=>[(l.displayMode,p(),_(f,{key:0,title:"\u57FA\u7840\u7528\u6CD5",href:"#basic"})),(l.displayMode,p(),_(f,{key:1,title:"\u9875\u9762\u69FD\u4F4D",href:"#slot"})),(l.displayMode,p(),_(f,{key:2,title:"\u5FEB\u901F\u8DF3\u8DC3",href:"#quick-jumper"})),(l.displayMode,p(),_(f,{key:3,title:"\u6BCF\u9875\u6761\u6570",href:"#size-picker"})),(l.displayMode,p(),_(f,{key:4,title:"\u7981\u7528",href:"#disabled"})),(l.displayMode,p(),_(f,{key:5,title:"\u4F7F\u7528\u5143\u7D20\u4E2A\u6570\u63A7\u5236\u5206\u9875",href:"#item-count"})),(l.displayMode,p(),_(f,{key:6,title:"\u81EA\u5B9A\u4E49\u4E0A\u4E00\u6B65\u548C\u4E0B\u4E00\u6B65",href:"#prev"})),(l.displayMode,p(),_(f,{key:7,title:"\u524D\u540E\u7F00",href:"#prefix"})),(l.displayMode,p(),_(f,{key:8,title:"\u81EA\u5B9A\u4E49 PageSizes \u9009\u9879",href:"#page-size-option"})),(l.displayMode,p(),_(f,{key:9,title:"API",href:"#API"}))]),_:1})])):T("",!0)],4)}var Nn=C(Qe,[["render",Fn]]);export{Nn as default};
