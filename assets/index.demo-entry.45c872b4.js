import{k as b,m as E,_ as D,r as s,o as _,j as p,w as e,f as o,e as n,h as t,t as j,y as N,n as x,u as O,a as H,b as L,c as S,d as P,g as q}from"./index.95fbdc71.js";import"./axios.dd49c521.js";const G=b({setup(){return{showModal:E(!1)}}}),J=t(" \u57FA\u7840\u7528\u6CD5 "),K=t("\u6A21\u6001\u6846\u7684\u57FA\u7840\u7528\u6CD5\uFF0C\u4F60\u53EF\u4EE5\u628A\u4EFB\u4F55\u4E1C\u897F\u653E\u8FDB\u53BB\uFF0C\u6BD4\u5982\u4E00\u4E2A\u5361\u7247\u3002"),Q={class:"demo-card__view"},W=t(" \u6765\u5427 "),X=t(" \u5662\uFF01 "),Y=t(" \u5185\u5BB9 "),Z=t(" \u5C3E\u90E8 ");function ee(l,d,f,a,w,v){const m=s("n-p"),i=s("n-button"),u=s("n-card"),A=s("n-modal"),r=s("component-demo");return _(),p(r,{"demo-file-name":"basic","relative-url":"src/modal/demos/zhCN/basic.demo.md",title:"\u57FA\u7840\u7528\u6CD5",code:"%3Ctemplate%3E%0A%20%20%3Cn-button%20%40click%3D%22showModal%20%3D%20true%22%3E%20%E6%9D%A5%E5%90%A7%20%3C%2Fn-button%3E%0A%20%20%3Cn-modal%20v-model%3Ashow%3D%22showModal%22%3E%0A%20%20%20%20%3Cn-card%20style%3D%22width%3A%20600px%3B%22%20title%3D%22%E6%A8%A1%E6%80%81%E6%A1%86%22%20%3Abordered%3D%22false%22%20size%3D%22huge%22%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23header-extra%3E%20%E5%99%A2%EF%BC%81%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%E5%86%85%E5%AE%B9%0A%20%20%20%20%20%20%3Ctemplate%20%23footer%3E%20%E5%B0%BE%E9%83%A8%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fn-card%3E%0A%20%20%3C%2Fn-modal%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20showModal%3A%20ref(false)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:e(()=>[J]),content:e(()=>[o(m,null,{default:e(()=>[K]),_:1})]),demo:e(()=>[n("div",Q,[o(i,{onClick:d[0]||(d[0]=h=>l.showModal=!0)},{default:e(()=>[W]),_:1}),o(A,{show:l.showModal,"onUpdate:show":d[1]||(d[1]=h=>l.showModal=h)},{default:e(()=>[o(u,{style:{width:"600px"},title:"\u6A21\u6001\u6846",bordered:!1,size:"huge"},{"header-extra":e(()=>[X]),footer:e(()=>[Z]),default:e(()=>[Y]),_:1})]),_:1},8,["show"])])]),_:1})}var oe=D(G,[["render",ee]]);const te=b({setup(){const l=E(!1),d=E(6e3),f=()=>{d.value<=0?l.value=!1:(d.value-=1e3,setTimeout(f,1e3))};return{showModal:l,timeout:d,handleClick:()=>{l.value=!0,d.value=6e3,f()}}}}),ne=t(" \u53D7\u63A7\u663E\u793A "),se=t("\u6A21\u6001\u6846\u7684\u663E\u793A\u53EF\u4EE5\u662F\u53D7\u63A7\u7684\u3002"),le={class:"demo-card__view"},de=t(" \u6765\u5427 ");function ae(l,d,f,a,w,v){const m=s("n-p"),i=s("n-button"),u=s("n-card"),A=s("n-modal"),r=s("component-demo");return _(),p(r,{"demo-file-name":"controlled","relative-url":"src/modal/demos/zhCN/controlled.demo.md",title:"\u53D7\u63A7\u663E\u793A",code:"%3Ctemplate%3E%0A%20%20%3Cn-button%20%40click%3D%22handleClick%22%3E%20%E6%9D%A5%E5%90%A7%20%3C%2Fn-button%3E%0A%20%20%3Cn-modal%20%3Ashow%3D%22showModal%22%3E%0A%20%20%20%20%3Cn-card%20style%3D%22width%3A%20600px%3B%22%20title%3D%22%E6%A8%A1%E6%80%81%E6%A1%86%22%20size%3D%22huge%22%20%3Abordered%3D%22false%22%3E%0A%20%20%20%20%20%20%E5%80%92%E8%AE%A1%E6%97%B6%20%7B%7B%20timeout%20%2F%201000%20%7D%7D%20%E7%A7%92%0A%20%20%20%20%3C%2Fn-card%3E%0A%20%20%3C%2Fn-modal%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20showModalRef%20%3D%20ref(false)%0A%20%20%20%20const%20timeoutRef%20%3D%20ref(6000)%0A%0A%20%20%20%20const%20countdown%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20if%20(timeoutRef.value%20%3C%3D%200)%20%7B%0A%20%20%20%20%20%20%20%20showModalRef.value%20%3D%20false%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20timeoutRef.value%20-%3D%201000%0A%20%20%20%20%20%20%20%20setTimeout(countdown%2C%201000)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%0A%20%20%20%20const%20handleClick%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20showModalRef.value%20%3D%20true%0A%20%20%20%20%20%20timeoutRef.value%20%3D%206000%0A%0A%20%20%20%20%20%20countdown()%0A%20%20%20%20%7D%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20showModal%3A%20showModalRef%2C%0A%20%20%20%20%20%20timeout%3A%20timeoutRef%2C%0A%20%20%20%20%20%20handleClick%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:e(()=>[ne]),content:e(()=>[o(m,null,{default:e(()=>[se]),_:1})]),demo:e(()=>[n("div",le,[o(i,{onClick:l.handleClick},{default:e(()=>[de]),_:1},8,["onClick"]),o(A,{show:l.showModal},{default:e(()=>[o(u,{style:{width:"600px"},title:"\u6A21\u6001\u6846",size:"huge",bordered:!1},{default:e(()=>[t(" \u5012\u8BA1\u65F6 "+j(l.timeout/1e3)+" \u79D2 ",1)]),_:1})]),_:1},8,["show"])])]),_:1})}var ie=D(te,[["render",ae]]);const ce=b({setup(){const l=N(),d=E(!1);return{showModal:d,onNegativeClick(){l.success("Cancel"),d.value=!1},onPositiveClick(){l.success("Submit"),d.value=!1}}}}),re=t(" \u906E\u7F69\u5173\u95ED "),_e=t("\u4F7F\u7528 "),me=t("mask-closable=false"),ue=t(" \u4F7F\u70B9\u51FB\u906E\u7F69\u5C42\u4E0D\u53D1\u51FA\u5173\u95ED\u4E8B\u4EF6\u3002"),Ae={class:"demo-card__view"},pe=t(" \u6765\u5427 ");function he(l,d,f,a,w,v){const m=s("n-text"),i=s("n-p"),u=s("n-button"),A=s("n-modal"),r=s("component-demo");return _(),p(r,{"demo-file-name":"mask-closable","relative-url":"src/modal/demos/zhCN/mask-closable.demo.md",title:"\u906E\u7F69\u5173\u95ED",code:"%3Ctemplate%3E%0A%20%20%3Cn-button%20%40click%3D%22showModal%20%3D%20true%22%3E%20%E6%9D%A5%E5%90%A7%20%3C%2Fn-button%3E%0A%20%20%3Cn-modal%0A%20%20%20%20v-model%3Ashow%3D%22showModal%22%0A%20%20%20%20%3Amask-closable%3D%22false%22%0A%20%20%20%20preset%3D%22dialog%22%0A%20%20%20%20title%3D%22%E7%A1%AE%E8%AE%A4%22%0A%20%20%20%20content%3D%22%E4%BD%A0%E7%A1%AE%E8%AE%A4%22%0A%20%20%20%20positive-text%3D%22%E7%A1%AE%E8%AE%A4%22%0A%20%20%20%20%40positive-click%3D%22onPositiveClick%22%0A%20%20%20%20%40negative-click%3D%22onNegativeClick%22%0A%20%20%20%20negative-text%3D%22%E7%AE%97%E4%BA%86%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0Aimport%20%7B%20useMessage%20%7D%20from%20'novice-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20message%20%3D%20useMessage()%0A%20%20%20%20const%20showModalRef%20%3D%20ref(false)%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20showModal%3A%20showModalRef%2C%0A%20%20%20%20%20%20onNegativeClick%20()%20%7B%0A%20%20%20%20%20%20%20%20message.success('Cancel')%0A%20%20%20%20%20%20%20%20showModalRef.value%20%3D%20false%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20onPositiveClick%20()%20%7B%0A%20%20%20%20%20%20%20%20message.success('Submit')%0A%20%20%20%20%20%20%20%20showModalRef.value%20%3D%20false%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:e(()=>[re]),content:e(()=>[o(i,null,{default:e(()=>[_e,o(m,{code:""},{default:e(()=>[me]),_:1}),ue]),_:1})]),demo:e(()=>[n("div",Ae,[o(u,{onClick:d[0]||(d[0]=h=>l.showModal=!0)},{default:e(()=>[pe]),_:1}),o(A,{show:l.showModal,"onUpdate:show":d[1]||(d[1]=h=>l.showModal=h),"mask-closable":!1,preset:"dialog",title:"\u786E\u8BA4",content:"\u4F60\u786E\u8BA4","positive-text":"\u786E\u8BA4",onPositiveClick:l.onPositiveClick,onNegativeClick:l.onNegativeClick,"negative-text":"\u7B97\u4E86"},null,8,["show","onPositiveClick","onNegativeClick"])])]),_:1})}var fe=D(ce,[["render",he]]);const Ce=b({setup(){return{showModal:E(!1)}}}),Ee=t(" \u8C03\u6574\u4F4D\u7F6E "),De=t("\u901A\u8FC7\u56FA\u5B9A\u5B9A\u4F4D\u8BBE\u5B9A Modal \u7684\u4F4D\u7F6E\u3002"),we={class:"demo-card__view"},ve=t(" \u6765\u5427 "),be=t(" \u5662\uFF01 "),ge=t(" \u5185\u5BB9 "),Me=t(" \u5C3E\u90E8 ");function $e(l,d,f,a,w,v){const m=s("n-p"),i=s("n-button"),u=s("n-card"),A=s("n-modal"),r=s("component-demo");return _(),p(r,{"demo-file-name":"custom-position","relative-url":"src/modal/demos/zhCN/custom-position.demo.md",title:"\u8C03\u6574\u4F4D\u7F6E",code:"%3Ctemplate%3E%0A%20%20%3Cn-button%20%40click%3D%22showModal%20%3D%20true%22%3E%20%E6%9D%A5%E5%90%A7%20%3C%2Fn-button%3E%0A%20%20%3Cn-modal%0A%20%20%20%20v-model%3Ashow%3D%22showModal%22%0A%20%20%20%20style%3D%22width%3A%20600px%3B%20position%3A%20fixed%3B%20right%3A%20100px%3B%20bottom%3A%20100px%3B%22%0A%20%20%3E%0A%20%20%20%20%3Cn-card%20title%3D%22%E6%A8%A1%E6%80%81%E6%A1%86%22%20%3Abordered%3D%22false%22%20size%3D%22huge%22%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23header-extra%3E%20%E5%99%A2%EF%BC%81%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%E5%86%85%E5%AE%B9%0A%20%20%20%20%20%20%3Ctemplate%20%23footer%3E%20%E5%B0%BE%E9%83%A8%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fn-card%3E%0A%20%20%3C%2Fn-modal%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20showModal%3A%20ref(false)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:e(()=>[Ee]),content:e(()=>[o(m,null,{default:e(()=>[De]),_:1})]),demo:e(()=>[n("div",we,[o(i,{onClick:d[0]||(d[0]=h=>l.showModal=!0)},{default:e(()=>[ve]),_:1}),o(A,{show:l.showModal,"onUpdate:show":d[1]||(d[1]=h=>l.showModal=h),style:{width:"600px",position:"fixed",right:"100px",bottom:"100px"}},{default:e(()=>[o(u,{title:"\u6A21\u6001\u6846",bordered:!1,size:"huge"},{"header-extra":e(()=>[be]),footer:e(()=>[Me]),default:e(()=>[ge]),_:1})]),_:1},8,["show"])])]),_:1})}var ke=D(Ce,[["render",$e]]);const Be=b({setup(){return{bodyStyle:{width:"600px"},segmented:{content:"soft",footer:"soft"},showModal:E(!1)}}}),ye=t(" \u4F7F\u7528 Card \u9884\u8BBE "),xe=t("\u6A21\u6001\u6846\u6709\u4E00\u4E9B\u9884\u8BBE\uFF0C\u8BA9\u4F60\u5728\u8BBE\u5B9A\u4E4B\u540E\u53EF\u4EE5\u4F7F\u7528\u5BF9\u5E94\u7684 slots \u8FD8\u6709 props\u3002"),Fe={class:"demo-card__view"},Ne=t(" \u6765\u5427 "),Se=t(" \u5662! "),Pe=t(" \u5185\u5BB9 "),ze=t(" \u5C3E\u90E8 ");function Re(l,d,f,a,w,v){const m=s("n-p"),i=s("n-button"),u=s("n-modal"),A=s("component-demo");return _(),p(A,{"demo-file-name":"preset-card","relative-url":"src/modal/demos/zhCN/preset-card.demo.md",title:"\u4F7F\u7528 Card \u9884\u8BBE",code:"%3Ctemplate%3E%0A%20%20%3Cn-button%20%40click%3D%22showModal%20%3D%20true%22%3E%20%E6%9D%A5%E5%90%A7%20%3C%2Fn-button%3E%0A%20%20%3Cn-modal%0A%20%20%20%20class%3D%22custom-card%22%0A%20%20%20%20v-model%3Ashow%3D%22showModal%22%0A%20%20%20%20preset%3D%22card%22%0A%20%20%20%20%3Astyle%3D%22bodyStyle%22%0A%20%20%20%20title%3D%22%E5%8D%A1%E7%89%87%E9%A2%84%E8%AE%BE%22%0A%20%20%20%20size%3D%22huge%22%0A%20%20%20%20%3Abordered%3D%22false%22%0A%20%20%20%20%3Asegmented%3D%22segmented%22%0A%20%20%3E%0A%20%20%20%20%3Ctemplate%20%23header-extra%3E%20%E5%99%A2!%20%3C%2Ftemplate%3E%0A%20%20%20%20%E5%86%85%E5%AE%B9%0A%20%20%20%20%3Ctemplate%20%23footer%3E%20%E5%B0%BE%E9%83%A8%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fn-modal%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20bodyStyle%3A%20%7B%0A%20%20%20%20%20%20%20%20width%3A%20'600px'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20segmented%3A%20%7B%0A%20%20%20%20%20%20%20%20content%3A%20'soft'%2C%0A%20%20%20%20%20%20%20%20footer%3A%20'soft'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20showModal%3A%20ref(false)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:e(()=>[ye]),content:e(()=>[o(m,null,{default:e(()=>[xe]),_:1})]),demo:e(()=>[n("div",Fe,[o(i,{onClick:d[0]||(d[0]=r=>l.showModal=!0)},{default:e(()=>[Ne]),_:1}),o(u,{class:"custom-card",show:l.showModal,"onUpdate:show":d[1]||(d[1]=r=>l.showModal=r),preset:"card",style:x(l.bodyStyle),title:"\u5361\u7247\u9884\u8BBE",size:"huge",bordered:!1,segmented:l.segmented},{"header-extra":e(()=>[Se]),footer:e(()=>[ze]),default:e(()=>[Pe]),_:1},8,["show","style","segmented"])])]),_:1})}var Ve=D(Be,[["render",Re]]);const Ue=b({setup(){const l=N();return{showModal:E(!1),cancelCallback(){l.success("Cancel")},submitCallback(){l.success("Submit")}}}}),Ie=t(" \u4F7F\u7528 Dialog \u9884\u8BBE "),Te=t("dialog"),je=t(" \u9884\u8BBE\u7684\u4F8B\u5B50\u3002"),Oe={class:"demo-card__view"},He=t(" \u6765\u5427 ");function Le(l,d,f,a,w,v){const m=s("n-text"),i=s("n-p"),u=s("n-button"),A=s("n-modal"),r=s("component-demo");return _(),p(r,{"demo-file-name":"preset-confirm","relative-url":"src/modal/demos/zhCN/preset-confirm.demo.md",title:"\u4F7F\u7528 Dialog \u9884\u8BBE",code:"%3Ctemplate%3E%0A%20%20%3Cn-button%20%40click%3D%22showModal%20%3D%20true%22%3E%20%E6%9D%A5%E5%90%A7%20%3C%2Fn-button%3E%0A%20%20%3Cn-modal%0A%20%20%20%20v-model%3Ashow%3D%22showModal%22%0A%20%20%20%20preset%3D%22dialog%22%0A%20%20%20%20title%3D%22%E7%A1%AE%E8%AE%A4%22%0A%20%20%20%20content%3D%22%E4%BD%A0%E7%A1%AE%E8%AE%A4%3F%22%0A%20%20%20%20positive-text%3D%22%E7%A1%AE%E8%AE%A4%22%0A%20%20%20%20%40positive-click%3D%22submitCallback%22%0A%20%20%20%20%40negative-click%3D%22cancelCallback%22%0A%20%20%20%20negative-text%3D%22%E7%AE%97%E4%BA%86%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0Aimport%20%7B%20useMessage%20%7D%20from%20'novice-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20message%20%3D%20useMessage()%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20showModal%3A%20ref(false)%2C%0A%20%20%20%20%20%20cancelCallback%20()%20%7B%0A%20%20%20%20%20%20%20%20message.success('Cancel')%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20submitCallback%20()%20%7B%0A%20%20%20%20%20%20%20%20message.success('Submit')%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:e(()=>[Ie]),content:e(()=>[o(i,null,{default:e(()=>[o(m,{code:""},{default:e(()=>[Te]),_:1}),je]),_:1})]),demo:e(()=>[n("div",Oe,[o(u,{onClick:d[0]||(d[0]=h=>l.showModal=!0)},{default:e(()=>[He]),_:1}),o(A,{show:l.showModal,"onUpdate:show":d[1]||(d[1]=h=>l.showModal=h),preset:"dialog",title:"\u786E\u8BA4",content:"\u4F60\u786E\u8BA4?","positive-text":"\u786E\u8BA4",onPositiveClick:l.submitCallback,onNegativeClick:l.cancelCallback,"negative-text":"\u7B97\u4E86"},null,8,["show","onPositiveClick","onNegativeClick"])])]),_:1})}var qe=D(Ue,[["render",Le]]);const Ge=b({setup(){return{showModal:E(!1)}}}),Je=t(" \u4F7F\u7528 Dialog \u9884\u8BBE\u7684\u63D2\u69FD "),Ke=t("\u63D2\u69FD\u4E5F\u4F1A\u968F\u7740\u9884\u8BBE\u53D8\u52A8\u3002"),Qe={class:"demo-card__view"},We=t(" \u6765\u5427 "),Xe=n("div",null,"\u6807\u9898",-1),Ye=n("div",null,"\u5185\u5BB9",-1),Ze=n("div",null,"\u64CD\u4F5C",-1);function e2(l,d,f,a,w,v){const m=s("n-p"),i=s("n-button"),u=s("n-modal"),A=s("component-demo");return _(),p(A,{"demo-file-name":"preset-confirm-slot","relative-url":"src/modal/demos/zhCN/preset-confirm-slot.demo.md",title:"\u4F7F\u7528 Dialog \u9884\u8BBE\u7684\u63D2\u69FD",code:"%3Ctemplate%3E%0A%20%20%3Cn-button%20%40click%3D%22showModal%20%3D%20true%22%3E%20%E6%9D%A5%E5%90%A7%20%3C%2Fn-button%3E%0A%20%20%3Cn-modal%20v-model%3Ashow%3D%22showModal%22%20preset%3D%22dialog%22%20title%3D%22Dialog%22%3E%0A%20%20%20%20%3Ctemplate%20%23header%3E%0A%20%20%20%20%20%20%3Cdiv%3E%E6%A0%87%E9%A2%98%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3Cdiv%3E%E5%86%85%E5%AE%B9%3C%2Fdiv%3E%0A%20%20%20%20%3Ctemplate%20%23action%3E%0A%20%20%20%20%20%20%3Cdiv%3E%E6%93%8D%E4%BD%9C%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fn-modal%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20showModal%3A%20ref(false)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:e(()=>[Je]),content:e(()=>[o(m,null,{default:e(()=>[Ke]),_:1})]),demo:e(()=>[n("div",Qe,[o(i,{onClick:d[0]||(d[0]=r=>l.showModal=!0)},{default:e(()=>[We]),_:1}),o(u,{show:l.showModal,"onUpdate:show":d[1]||(d[1]=r=>l.showModal=r),preset:"dialog",title:"Dialog"},{header:e(()=>[Xe]),action:e(()=>[Ze]),default:e(()=>[Ye]),_:1},8,["show"])])]),_:1})}var o2=D(Ge,[["render",e2]]);const t2=b({setup(){return{showModal:E(!1)}}}),n2=t(" \u51FA\u73B0\u4F4D\u7F6E "),s2=t("\u867D\u7136\u4ECE\u9F20\u6807\u4F4D\u7F6E\u51FA\u73B0\u7684\u52A8\u753B\u770B\u8D77\u6765\u5F88\u9177\uFF0C\u4F46\u662F\u6211\u4EEC\u6709\u65F6\u4E5F\u60F3\u8981\u4E00\u4E9B\u6734\u5B9E\u65E0\u534E\u7684\u4ECE\u5C4F\u5E55\u4E2D\u95F4\u5F39\u51FA\u6765\u7684\u52A8\u753B\u3002\u8FD9\u65F6\u4F60\u53EF\u4EE5\u5C06 "),l2=t("transform-origin"),d2=t(" \u8BBE\u4E3A "),a2=t("'center'"),i2=t("\u3002"),c2={class:"demo-card__view"},r2=t("\u6CA1\u4EC0\u4E48\u7684"),_2=t("\u6309\u9700"),m2=t(" \u539F\u5219 "),u2=t("\u652F\u6301\u4E00\u4E0B");function A2(l,d,f,a,w,v){const m=s("n-text"),i=s("n-p"),u=s("n-button"),A=s("n-card"),r=s("n-modal"),h=s("component-demo");return _(),p(h,{"demo-file-name":"transform-origin","relative-url":"src/modal/demos/zhCN/transform-origin.demo.md",title:"\u51FA\u73B0\u4F4D\u7F6E",code:"%3Ctemplate%3E%0A%20%20%3Cn-button%20%40click%3D%22showModal%20%3D%20true%22%3E%E6%B2%A1%E4%BB%80%E4%B9%88%E7%9A%84%3C%2Fn-button%3E%0A%20%20%3Cn-modal%20v-model%3Ashow%3D%22showModal%22%20transform-origin%3D%22center%22%3E%0A%20%20%20%20%3Cn-card%20style%3D%22width%3A%20600px%3B%22%20title%3D%22%E8%87%AA%E6%84%BF%22%20%3Abordered%3D%22false%22%20size%3D%22huge%22%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23header-extra%3E%E6%8C%89%E9%9C%80%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%E5%8E%9F%E5%88%99%0A%20%20%20%20%20%20%3Ctemplate%20%23footer%3E%E6%94%AF%E6%8C%81%E4%B8%80%E4%B8%8B%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fn-card%3E%0A%20%20%3C%2Fn-modal%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20showModal%3A%20ref(false)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:e(()=>[n2]),content:e(()=>[o(i,null,{default:e(()=>[s2,o(m,{code:""},{default:e(()=>[l2]),_:1}),d2,o(m,{code:""},{default:e(()=>[a2]),_:1}),i2]),_:1})]),demo:e(()=>[n("div",c2,[o(u,{onClick:d[0]||(d[0]=k=>l.showModal=!0)},{default:e(()=>[r2]),_:1}),o(r,{show:l.showModal,"onUpdate:show":d[1]||(d[1]=k=>l.showModal=k),"transform-origin":"center"},{default:e(()=>[o(A,{style:{width:"600px"},title:"\u81EA\u613F",bordered:!1,size:"huge"},{"header-extra":e(()=>[_2]),footer:e(()=>[u2]),default:e(()=>[m2]),_:1})]),_:1},8,["show"])])]),_:1})}var p2=D(t2,[["render",A2]]);const h2={components:{basicDemo:oe,controlledDemo:ie,maskClosableDemo:fe,customPositionDemo:ke,presetCardDemo:Ve,presetConfirmDemo:qe,presetConfirmSlotDemo:o2,transformOriginDemo:p2},setup(){const l=O(),d=H(()=>!l.value),f=l;return{showAnchor:d,displayMode:L(),wrapperStyle:S(()=>f.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:S(()=>d.value?"width: calc(100% - 164px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"src/modal/demos/zhCN/index.demo-entry.md"}}},f2=t("\u5B83\u4F1A\u5F39\u51FA\u6765\uFF0C\u7136\u540E\u7ED9\u4F60\u770B\u70B9\u4E1C\u897F\u3002"),C2=t("\u6F14\u793A"),E2=t("API"),D2=t("Modal Props"),w2={class:"md-table-wrapper"},v2=n("thead",null,[n("tr",null,[n("th",null,"\u540D\u79F0"),n("th",null,"\u7C7B\u578B"),n("th",null,"\u9ED8\u8BA4\u503C"),n("th",null,"\u8BF4\u660E")])],-1),b2=n("td",null,"display-directive",-1),g2=t("'if' | 'show'"),M2=t("'if'"),$2=n("td",null,"\u4F7F\u7528\u4F55\u79CD\u6307\u4EE4\u63A7\u5236\u6A21\u6001\u6846\u4E3B\u4F53\u7684\u6761\u4EF6\u6E32\u67D3",-1),k2=n("td",null,"mask-closable",-1),B2=t("boolean"),y2=t("true"),x2=t("\u70B9\u51FB\u906E\u7F69\u65F6\u662F\u5426\u53D1\u51FA "),F2=t("update:show"),N2=t(" \u4E8B\u4EF6"),S2=n("td",null,"preset",-1),P2=t("'card' | 'dialog'"),z2=t("undefined"),R2=n("td",null,"\u6A21\u6001\u6846\u4F7F\u7528\u4F55\u79CD\u9884\u8BBE",-1),V2=n("td",null,"show",-1),U2=t("boolean"),I2=t("false"),T2=n("td",null,"\u662F\u5426\u5C55\u793A Modal",-1),j2=n("td",null,"to",-1),O2=t("string | HTMLElement"),H2=t("body"),L2=n("td",null,"Modal \u7684\u6302\u8F7D\u4F4D\u7F6E",-1),q2=n("td",null,"transform-origin",-1),G2=t("'mouse' | 'center'"),J2=t("'mouse'"),K2=n("td",null,"\u6A21\u6001\u6846\u52A8\u753B\u51FA\u73B0\u7684\u4F4D\u7F6E",-1),Q2=n("td",null,"on-update:show",-1),W2=t("(value: boolean) => void"),X2=t("undefined"),Y2=n("td",null,"\u6A21\u6001\u6846\u66F4\u65B0\u662F\u5426\u5C55\u793A\u72B6\u6001\u7684\u56DE\u8C03",-1),Z2=n("td",null,"on-after-enter",-1),eo=t("() => void"),oo=t("undefined"),to=n("td",null,"Modal \u51FA\u73B0\u540E\u7684\u56DE\u8C03",-1),no=n("td",null,"on-after-leave",-1),so=t("() => void"),lo=t("undefined"),ao=n("td",null,"Modal \u5173\u95ED\u540E\u7684\u56DE\u8C03",-1),io=t("Modal\uFF08Card \u9884\u8BBE\uFF09Props"),co=t("\u53C2\u8003 "),ro=t("Card props"),_o=t("Modal\uFF08Dialog \u9884\u8BBE\uFF09Props"),mo=t("\u53C2\u8003 "),uo=t("Dialog props"),Ao=t("Modal\uFF08\u65E0\u9884\u8BBE\uFF09Slots"),po={class:"md-table-wrapper"},ho=n("thead",null,[n("tr",null,[n("th",null,"\u540D\u79F0"),n("th",null,"\u53C2\u6570"),n("th",null,"\u8BF4\u660E")])],-1),fo=n("td",null,"default",-1),Co=t("()"),Eo=n("td",null,"\u6A21\u6001\u6846\u7684\u5185\u5BB9",-1),Do=t("Modal\uFF08Card \u9884\u8BBE\uFF09Slots"),wo=t("\u53C2\u8003 "),vo=t("Card slots"),bo=t("Modal\uFF08Dialog \u9884\u8BBE\uFF09Slots"),go=t("\u53C2\u8003 "),Mo=t("Dialog slots"),$o={key:0,style:{width:"128px"}};function ko(l,d,f,a,w,v){const m=s("edit-on-github-header"),i=s("n-p"),u=s("n-h2"),A=s("basicDemo"),r=s("controlledDemo"),h=s("maskClosableDemo"),k=s("customPositionDemo"),z=s("presetCardDemo"),R=s("presetConfirmDemo"),V=s("presetConfirmSlotDemo"),U=s("transformOriginDemo"),I=s("component-demos"),$=s("n-h3"),c=s("n-text"),F=s("n-table"),B=s("n-a"),y=s("router-link"),C=s("n-anchor-link"),T=s("n-anchor");return _(),P("div",{class:"doc",style:x(a.wrapperStyle)},[n("div",{style:x(a.contentStyle)},[o(m,{"relative-url":"src/modal/demos/zhCN/index.demo-entry.md",text:"\u6A21\u6001\u6846 Modal"}),o(i,null,{default:e(()=>[f2]),_:1}),o(u,{id:"\u6F14\u793A"},{default:e(()=>[C2]),_:1}),o(I,{span:2},{default:e(()=>[o(A),o(r),o(h),o(k),o(z),o(R),o(V),o(U)]),_:1}),o(u,{id:"API"},{default:e(()=>[E2]),_:1}),o($,{id:"Modal-Props"},{default:e(()=>[D2]),_:1}),n("div",w2,[o(F,{"single-column":"",class:"md-table"},{default:e(()=>[v2,n("tbody",null,[n("tr",null,[b2,n("td",null,[o(c,{code:""},{default:e(()=>[g2]),_:1})]),n("td",null,[o(c,{code:""},{default:e(()=>[M2]),_:1})]),$2]),n("tr",null,[k2,n("td",null,[o(c,{code:""},{default:e(()=>[B2]),_:1})]),n("td",null,[o(c,{code:""},{default:e(()=>[y2]),_:1})]),n("td",null,[x2,o(c,{code:""},{default:e(()=>[F2]),_:1}),N2])]),n("tr",null,[S2,n("td",null,[o(c,{code:""},{default:e(()=>[P2]),_:1})]),n("td",null,[o(c,{code:""},{default:e(()=>[z2]),_:1})]),R2]),n("tr",null,[V2,n("td",null,[o(c,{code:""},{default:e(()=>[U2]),_:1})]),n("td",null,[o(c,{code:""},{default:e(()=>[I2]),_:1})]),T2]),n("tr",null,[j2,n("td",null,[o(c,{code:""},{default:e(()=>[O2]),_:1})]),n("td",null,[o(c,{code:""},{default:e(()=>[H2]),_:1})]),L2]),n("tr",null,[q2,n("td",null,[o(c,{code:""},{default:e(()=>[G2]),_:1})]),n("td",null,[o(c,{code:""},{default:e(()=>[J2]),_:1})]),K2]),n("tr",null,[Q2,n("td",null,[o(c,{code:""},{default:e(()=>[W2]),_:1})]),n("td",null,[o(c,{code:""},{default:e(()=>[X2]),_:1})]),Y2]),n("tr",null,[Z2,n("td",null,[o(c,{code:""},{default:e(()=>[eo]),_:1})]),n("td",null,[o(c,{code:""},{default:e(()=>[oo]),_:1})]),to]),n("tr",null,[no,n("td",null,[o(c,{code:""},{default:e(()=>[so]),_:1})]),n("td",null,[o(c,{code:""},{default:e(()=>[lo]),_:1})]),ao])])]),_:1})]),o($,{id:"Modal\uFF08Card-\u9884\u8BBE\uFF09Props"},{default:e(()=>[io]),_:1}),o(i,null,{default:e(()=>[co,o(y,{to:"card#Card-Props",custom:""},{default:e(({navigate:g,href:M})=>[o(B,{href:M,onClick:g},{default:e(()=>[ro]),_:2},1032,["href","onClick"])]),_:1})]),_:1}),o($,{id:"Modal\uFF08Dialog-\u9884\u8BBE\uFF09Props"},{default:e(()=>[_o]),_:1}),o(i,null,{default:e(()=>[mo,o(y,{to:"dialog#Dialog-Props",custom:""},{default:e(({navigate:g,href:M})=>[o(B,{href:M,onClick:g},{default:e(()=>[uo]),_:2},1032,["href","onClick"])]),_:1})]),_:1}),o($,{id:"Modal\uFF08\u65E0\u9884\u8BBE\uFF09Slots"},{default:e(()=>[Ao]),_:1}),n("div",po,[o(F,{"single-column":"",class:"md-table"},{default:e(()=>[ho,n("tbody",null,[n("tr",null,[fo,n("td",null,[o(c,{code:""},{default:e(()=>[Co]),_:1})]),Eo])])]),_:1})]),o($,{id:"Modal\uFF08Card-\u9884\u8BBE\uFF09Slots"},{default:e(()=>[Do]),_:1}),o(i,null,{default:e(()=>[wo,o(y,{to:"card#Card-Slots",custom:""},{default:e(({navigate:g,href:M})=>[o(B,{href:M,onClick:g},{default:e(()=>[vo]),_:2},1032,["href","onClick"])]),_:1})]),_:1}),o($,{id:"Modal\uFF08Dialog-\u9884\u8BBE\uFF09Slots"},{default:e(()=>[bo]),_:1}),o(i,null,{default:e(()=>[go,o(y,{to:"dialog#Dialog-Slots",custom:""},{default:e(({navigate:g,href:M})=>[o(B,{href:M,onClick:g},{default:e(()=>[Mo]),_:2},1032,["href","onClick"])]),_:1})]),_:1})],4),a.showAnchor?(_(),P("div",$o,[o(T,{"internal-scrollable":"",bound:16,type:"block",style:{width:"128px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:e(()=>[(a.displayMode,_(),p(C,{key:0,title:"\u57FA\u7840\u7528\u6CD5",href:"#basic"})),(a.displayMode,_(),p(C,{key:1,title:"\u53D7\u63A7\u663E\u793A",href:"#controlled"})),(a.displayMode,_(),p(C,{key:2,title:"\u906E\u7F69\u5173\u95ED",href:"#mask-closable"})),(a.displayMode,_(),p(C,{key:3,title:"\u8C03\u6574\u4F4D\u7F6E",href:"#custom-position"})),(a.displayMode,_(),p(C,{key:4,title:"\u4F7F\u7528 Card \u9884\u8BBE",href:"#preset-card"})),(a.displayMode,_(),p(C,{key:5,title:"\u4F7F\u7528 Dialog \u9884\u8BBE",href:"#preset-confirm"})),(a.displayMode,_(),p(C,{key:6,title:"\u4F7F\u7528 Dialog \u9884\u8BBE\u7684\u63D2\u69FD",href:"#preset-confirm-slot"})),(a.displayMode,_(),p(C,{key:7,title:"\u51FA\u73B0\u4F4D\u7F6E",href:"#transform-origin"})),(a.displayMode,_(),p(C,{key:8,title:"API",href:"#API"}))]),_:1})])):q("",!0)],4)}var xo=D(h2,[["render",ko]]);export{xo as default};
