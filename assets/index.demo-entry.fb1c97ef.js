import{k as w,l as $,m as S,_ as v,r as o,o as _,j as b,w as e,f as n,e as t,h as s,u as F,a as N,b as M,c as x,d as y,n as g,g as P}from"./index.95fbdc71.js";import"./axios.dd49c521.js";const T=w({setup(){return{darkTheme:$,theme:S(null)}}}),V=s(" \u57FA\u7840 "),z=s("\u4F60\u53EF\u4EE5\u4F7F\u7528\u4E0A\u9762\u7684 CSS \u53D8\u91CF\u3002\u5982\u679C\u4F60\u9700\u8981\u5728 JS \u4E2D\u4F7F\u7528\u8FD9\u4E9B\u53D8\u91CF\uFF0C\u8BF7\u4F7F\u7528 "),I=s("useThemeVars"),j=s("\u3002"),R={class:"demo-card__view"},J=s("\u6DF1\u8272"),U=s("\u6D45\u8272"),q=s(" \u6211\u662F\u4E2A span \u6807\u7B7E ");function G(l,c,A,d,k,B){const C=o("n-a"),E=o("router-link"),i=o("n-p"),m=o("n-button"),u=o("n-space"),p=o("n-el"),a=o("n-card"),h=o("n-config-provider"),f=o("component-demo");return _(),b(f,{"demo-file-name":"basic","relative-url":"src/element/demos/zhCN/basic.demo.md",title:"\u57FA\u7840",code:"%3Ctemplate%3E%0A%20%20%3Cn-space%20vertical%3E%0A%20%20%20%20%3Cn-space%3E%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22theme%20%3D%20darkTheme%22%3E%E6%B7%B1%E8%89%B2%3C%2Fn-button%3E%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22theme%20%3D%20null%22%3E%E6%B5%85%E8%89%B2%3C%2Fn-button%3E%0A%20%20%20%20%3C%2Fn-space%3E%0A%20%20%20%20%3Cn-config-provider%20%3Atheme%3D%22theme%22%3E%0A%20%20%20%20%20%20%3Cn-card%3E%0A%20%20%20%20%20%20%20%20%3Cn-el%0A%20%20%20%20%20%20%20%20%20%20tag%3D%22span%22%0A%20%20%20%20%20%20%20%20%20%20style%3D%22color%3A%20var(--primary-color)%3B%20transition%3A%20.3s%20var(--cubic-bezier-ease-in-out)%3B%22%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%E6%88%91%E6%98%AF%E4%B8%AA%20span%20%E6%A0%87%E7%AD%BE%0A%20%20%20%20%20%20%20%20%3C%2Fn-el%3E%0A%20%20%20%20%20%20%3C%2Fn-card%3E%0A%20%20%20%20%3C%2Fn-config-provider%3E%0A%20%20%3C%2Fn-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0Aimport%20%7B%20darkTheme%20%7D%20from%20'novice-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20darkTheme%2C%0A%20%20%20%20%20%20theme%3A%20ref(null)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:e(()=>[V]),content:e(()=>[n(i,null,{default:e(()=>[z,n(E,{to:"../docs/theme#use-theme-vars",custom:""},{default:e(({navigate:r,href:D})=>[n(C,{href:D,onClick:r},{default:e(()=>[I]),_:2},1032,["href","onClick"])]),_:1}),j]),_:1})]),demo:e(()=>[t("div",R,[n(u,{vertical:""},{default:e(()=>[n(u,null,{default:e(()=>[n(m,{onClick:c[0]||(c[0]=r=>l.theme=l.darkTheme)},{default:e(()=>[J]),_:1}),n(m,{onClick:c[1]||(c[1]=r=>l.theme=null)},{default:e(()=>[U]),_:1})]),_:1}),n(h,{theme:l.theme},{default:e(()=>[n(a,null,{default:e(()=>[n(p,{tag:"span",style:{color:"var(--primary-color)",transition:".3s var(--cubic-bezier-ease-in-out)"}},{default:e(()=>[q]),_:1})]),_:1})]),_:1},8,["theme"])]),_:1})])]),_:1})}var H=v(T,[["render",G]]);const K={components:{basicDemo:H},setup(){const l=F(),c=N(()=>!l.value),A=l;return{showAnchor:c,displayMode:M(),wrapperStyle:x(()=>A.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:x(()=>c.value?"width: calc(100% - 164px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"src/element/demos/zhCN/index.demo-entry.md"}}},L=s("Element \u4E0A\u9762\u6709\u5F88\u591A Novice UI \u63D0\u4F9B\u7684\u4E3B\u9898\u53D8\u91CF\u3002"),O=s("\u6F14\u793A"),Q=s("API"),W=s("Element Props"),X={class:"md-table-wrapper"},Y=t("thead",null,[t("tr",null,[t("th",null,"\u540D\u79F0"),t("th",null,"\u7C7B\u578B"),t("th",null,"\u9ED8\u8BA4\u503C"),t("th",null,"\u8BF4\u660E")])],-1),Z=t("td",null,"tag",-1),ee=s("string"),te=s("'div'"),ne=s("n-element"),oe=s(" \u9700\u8981\u6E32\u67D3\u4E3A\u4EC0\u4E48\u5143\u7D20"),se=s("Element Slots"),le={class:"md-table-wrapper"},ce=t("thead",null,[t("tr",null,[t("th",null,"\u540D\u79F0"),t("th",null,"\u53C2\u6570"),t("th",null,"\u8BF4\u660E")])],-1),de=t("td",null,"default",-1),ae=s("()"),re=t("td",null,"\u5143\u7D20\u5185\u5BB9",-1),_e={key:0,style:{width:"128px"}};function ie(l,c,A,d,k,B){const C=o("edit-on-github-header"),E=o("n-p"),i=o("n-h2"),m=o("basicDemo"),u=o("component-demos"),p=o("n-h3"),a=o("n-text"),h=o("n-table"),f=o("n-anchor-link"),r=o("n-anchor");return _(),y("div",{class:"doc",style:g(d.wrapperStyle)},[t("div",{style:g(d.contentStyle)},[n(C,{"relative-url":"src/element/demos/zhCN/index.demo-entry.md",text:"\u5143\u7D20 Element"}),n(E,null,{default:e(()=>[L]),_:1}),n(i,{id:"\u6F14\u793A"},{default:e(()=>[O]),_:1}),n(u,{span:2},{default:e(()=>[n(m)]),_:1}),n(i,{id:"API"},{default:e(()=>[Q]),_:1}),n(p,{id:"Element-Props"},{default:e(()=>[W]),_:1}),t("div",X,[n(h,{"single-column":"",class:"md-table"},{default:e(()=>[Y,t("tbody",null,[t("tr",null,[Z,t("td",null,[n(a,{code:""},{default:e(()=>[ee]),_:1})]),t("td",null,[n(a,{code:""},{default:e(()=>[te]),_:1})]),t("td",null,[n(a,{code:""},{default:e(()=>[ne]),_:1}),oe])])])]),_:1})]),n(p,{id:"Element-Slots"},{default:e(()=>[se]),_:1}),t("div",le,[n(h,{"single-column":"",class:"md-table"},{default:e(()=>[ce,t("tbody",null,[t("tr",null,[de,t("td",null,[n(a,{code:""},{default:e(()=>[ae]),_:1})]),re])])]),_:1})])],4),d.showAnchor?(_(),y("div",_e,[n(r,{"internal-scrollable":"",bound:16,type:"block",style:{width:"128px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:e(()=>[(d.displayMode,_(),b(f,{key:0,title:"\u57FA\u7840",href:"#basic"})),(d.displayMode,_(),b(f,{key:1,title:"API",href:"#API"}))]),_:1})])):P("",!0)],4)}var pe=v(K,[["render",ie]]);export{pe as default};
