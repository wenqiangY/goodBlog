import{k,y as w,_ as g,r as l,o as r,j as C,w as e,e as t,f as n,h as o,u as $,a as M,b as P,c as B,d as y,n as F,g as z}from"./index.95fbdc71.js";import{E as H}from"./EllipsisHorizontal.63c6420a.js";import"./axios.dd49c521.js";const N=k({components:{EllipsisHorizontal:H},setup(){const d=w();return{handleBack(){d.info("[onBack]")},options:[{label:"\u50AC\u66F4",key:"1"},{label:"\u50AC\u66F4",key:"2"},{label:"\u50AC\u66F4",key:"3"}]}}}),S=o(" \u57FA\u7840\u7528\u6CD5 "),j={class:"demo-card__view"},V=t("a",{href:"https://anyway.fm/",style:{"text-decoration":"none",color:"inherit"}},"Anyway.FM",-1),I=o("\u64AD\u5BA2"),R=o("\u7CBE\u9009"),T=o("\u8D85\u7EA7\u7CBE\u9009"),q=o("Anyway.FM"),G=o("\u50AC\u66F4"),J=o("\xB7\xB7\xB7"),K=o("\u622A\u6B62\u5230 2021 \u5E74 4 \u6708 3 \u65E5");function L(d,u,E,_,D,x){const a=l("n-statistic"),c=l("n-gi"),p=l("n-grid"),i=l("n-breadcrumb-item"),f=l("n-breadcrumb"),A=l("n-avatar"),s=l("n-button"),m=l("n-dropdown"),h=l("n-space"),b=l("n-page-header"),v=l("component-demo");return r(),C(v,{"demo-file-name":"basic","relative-url":"src/page-header/demos/zhCN/basic.demo.md",title:"\u57FA\u7840\u7528\u6CD5",code:"%3Ctemplate%3E%0A%20%20%3Cn-page-header%20subtitle%3D%22%E8%AE%A9%E4%BD%A0%E7%9A%84%E5%90%AC%E8%A7%89%E6%9B%B4%E6%87%82%E8%A7%86%E8%A7%89%22%20%40back%3D%22handleBack%22%3E%0A%20%20%20%20%3Cn-grid%20%3Acols%3D%225%22%3E%0A%20%20%20%20%20%20%3Cn-gi%3E%0A%20%20%20%20%20%20%20%20%3Cn-statistic%20label%3D%22%E6%AD%A3%E7%89%87%22%20value%3D%22125%20%E9%9B%86%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fn-gi%3E%0A%20%20%20%20%20%20%3Cn-gi%3E%0A%20%20%20%20%20%20%20%20%3Cn-statistic%20label%3D%22%E5%98%89%E5%AE%BE%22%20value%3D%2222%20%E4%BD%8D%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fn-gi%3E%0A%20%20%20%20%20%20%3Cn-gi%3E%0A%20%20%20%20%20%20%20%20%3Cn-statistic%20label%3D%22%E9%81%93%E6%AD%89%22%20value%3D%2236%20%E6%AC%A1%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fn-gi%3E%0A%20%20%20%20%20%20%3Cn-gi%3E%0A%20%20%20%20%20%20%20%20%3Cn-statistic%20label%3D%22%E8%AF%9D%E9%A2%98%22%20value%3D%2283%20%E4%B8%AA%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fn-gi%3E%0A%20%20%20%20%20%20%3Cn-gi%3E%0A%20%20%20%20%20%20%20%20%3Cn-statistic%20label%3D%22%E5%8F%82%E8%80%83%E9%93%BE%E6%8E%A5%22%20value%3D%222%2C346%20%E4%B8%AA%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fn-gi%3E%0A%20%20%20%20%3C%2Fn-grid%3E%0A%20%20%20%20%3Ctemplate%20%23title%3E%0A%20%20%20%20%20%20%3Ca%20href%3D%22https%3A%2F%2Fanyway.fm%2F%22%20style%3D%22text-decoration%3A%20none%3B%20color%3A%20inherit%3B%22%0A%20%20%20%20%20%20%20%20%3EAnyway.FM%3C%2Fa%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3Ctemplate%20%23header%3E%0A%20%20%20%20%20%20%3Cn-breadcrumb%3E%0A%20%20%20%20%20%20%20%20%3Cn-breadcrumb-item%3E%E6%92%AD%E5%AE%A2%3C%2Fn-breadcrumb-item%3E%0A%20%20%20%20%20%20%20%20%3Cn-breadcrumb-item%3E%E7%B2%BE%E9%80%89%3C%2Fn-breadcrumb-item%3E%0A%20%20%20%20%20%20%20%20%3Cn-breadcrumb-item%3E%E8%B6%85%E7%BA%A7%E7%B2%BE%E9%80%89%3C%2Fn-breadcrumb-item%3E%0A%20%20%20%20%20%20%20%20%3Cn-breadcrumb-item%3EAnyway.FM%3C%2Fn-breadcrumb-item%3E%0A%20%20%20%20%20%20%3C%2Fn-breadcrumb%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3Ctemplate%20%23avatar%3E%0A%20%20%20%20%20%20%3Cn-avatar%0A%20%20%20%20%20%20%20%20src%3D%22https%3A%2F%2Fcdnimg103.lizhi.fm%2Fuser%2F2017%2F02%2F04%2F2583325032200238082_160x160.jpg%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3Ctemplate%20%23extra%3E%0A%20%20%20%20%20%20%3Cn-space%3E%0A%20%20%20%20%20%20%20%20%3Cn-button%3E%E5%82%AC%E6%9B%B4%3C%2Fn-button%3E%0A%20%20%20%20%20%20%20%20%3Cn-dropdown%20%3Aoptions%3D%22options%22%20placement%3D%22bottom-start%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cn-button%20%3Abordered%3D%22false%22%20style%3D%22padding%3A%200%204px%22%3E%C2%B7%C2%B7%C2%B7%3C%2Fn-button%3E%0A%20%20%20%20%20%20%20%20%3C%2Fn-dropdown%3E%0A%20%20%20%20%20%20%3C%2Fn-space%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3Ctemplate%20%23footer%3E%E6%88%AA%E6%AD%A2%E5%88%B0%202021%20%E5%B9%B4%204%20%E6%9C%88%203%20%E6%97%A5%3C%2Ftemplate%3E%0A%20%20%3C%2Fn-page-header%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0Aimport%20%7B%20useMessage%20%7D%20from%20'novice-ui'%0Aimport%20%7B%20EllipsisHorizontal%20%7D%20from%20'%40vicons%2Fionicons5'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20components%3A%20%7B%0A%20%20%20%20EllipsisHorizontal%0A%20%20%7D%2C%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20message%20%3D%20useMessage()%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20handleBack%20()%20%7B%0A%20%20%20%20%20%20%20%20message.info('%5BonBack%5D')%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20options%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%82%AC%E6%9B%B4'%2C%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'1'%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%82%AC%E6%9B%B4'%2C%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'2'%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%82%AC%E6%9B%B4'%2C%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'3'%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:e(()=>[S]),content:e(()=>[]),demo:e(()=>[t("div",j,[n(b,{subtitle:"\u8BA9\u4F60\u7684\u542C\u89C9\u66F4\u61C2\u89C6\u89C9",onBack:d.handleBack},{title:e(()=>[V]),header:e(()=>[n(f,null,{default:e(()=>[n(i,null,{default:e(()=>[I]),_:1}),n(i,null,{default:e(()=>[R]),_:1}),n(i,null,{default:e(()=>[T]),_:1}),n(i,null,{default:e(()=>[q]),_:1})]),_:1})]),avatar:e(()=>[n(A,{src:"https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg"})]),extra:e(()=>[n(h,null,{default:e(()=>[n(s,null,{default:e(()=>[G]),_:1}),n(m,{options:d.options,placement:"bottom-start"},{default:e(()=>[n(s,{bordered:!1,style:{padding:"0 4px"}},{default:e(()=>[J]),_:1})]),_:1},8,["options"])]),_:1})]),footer:e(()=>[K]),default:e(()=>[n(p,{cols:5},{default:e(()=>[n(c,null,{default:e(()=>[n(a,{label:"\u6B63\u7247",value:"125 \u96C6"})]),_:1}),n(c,null,{default:e(()=>[n(a,{label:"\u5609\u5BBE",value:"22 \u4F4D"})]),_:1}),n(c,null,{default:e(()=>[n(a,{label:"\u9053\u6B49",value:"36 \u6B21"})]),_:1}),n(c,null,{default:e(()=>[n(a,{label:"\u8BDD\u9898",value:"83 \u4E2A"})]),_:1}),n(c,null,{default:e(()=>[n(a,{label:"\u53C2\u8003\u94FE\u63A5",value:"2,346 \u4E2A"})]),_:1})]),_:1})]),_:1},8,["onBack"])])]),_:1})}var O=g(N,[["render",L]]);const Q={components:{basicDemo:O},setup(){const d=$(),u=M(()=>!d.value),E=d;return{showAnchor:u,displayMode:P(),wrapperStyle:B(()=>E.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:B(()=>u.value?"width: calc(100% - 164px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"src/page-header/demos/zhCN/index.demo-entry.md"}}},U=o("\u6211\u611F\u89C9\u4F60\u5F88\u53EF\u80FD\u7528\u4E0D\u4E0A\u8FD9\u4E2A\u7EC4\u4EF6\uFF0C\u56E0\u4E3A\u6839\u636E\u4F60\u62FF\u5230\u7684\u8BBE\u8BA1\u7A3F\u5F88\u53EF\u80FD\u662F\u91CD\u5199\u4E00\u4E2A\u7B80\u5355\u3002"),W=o("\u6F14\u793A"),X=o("API"),Y=o("PageHeader Props"),Z={class:"md-table-wrapper"},t2=t("thead",null,[t("tr",null,[t("th",null,"\u540D\u79F0"),t("th",null,"\u7C7B\u578B"),t("th",null,"\u9ED8\u8BA4\u503C"),t("th",null,"\u8BF4\u660E")])],-1),e2=t("td",null,"extra",-1),n2=o("string"),o2=o("undefined"),l2=o("\u989D\u5916\u7684\u6587\u672C\u4FE1\u606F\uFF0C\u5F53\u4F7F\u7528 "),s2=o("extra"),d2=o(" \u63D2\u69FD\u65F6\u8BE5\u53C2\u6570\u65E0\u6548"),a2=t("td",null,"subtitle",-1),c2=o("string"),_2=o("undefined"),i2=t("td",null,"\u526F\u6807\u9898",-1),r2=t("td",null,"title",-1),u2=o("string"),p2=o("undefined"),A2=t("td",null,"\u4E3B\u6807\u9898",-1),m2=t("td",null,"on-back",-1),h2=o("() => void"),E2=o("undefined"),f2=t("td",null,"\u70B9\u51FB\u8FD4\u56DE\u6309\u94AE\u7684\u56DE\u8C03",-1),b2=o("PageHeader Slots"),C2={class:"md-table-wrapper"},g2=t("thead",null,[t("tr",null,[t("th",null,"\u540D\u79F0"),t("th",null,"\u53C2\u6570"),t("th",null,"\u8BF4\u660E")])],-1),B2=t("td",null,"avatar",-1),y2=o("()"),F2=t("td",null,"\u56FE\u7247\u4FE1\u606F",-1),D2=t("td",null,"header",-1),x2=o("()"),v2=t("td",null,"\u5934\u90E8\u4FE1\u606F",-1),k2=t("td",null,"default",-1),w2=o("()"),$2=t("td",null,"\u5185\u5BB9",-1),M2=t("td",null,"extra",-1),P2=o("()"),z2=t("td",null,"\u989D\u5916\u4FE1\u606F",-1),H2=t("td",null,"footer",-1),N2=o("()"),S2=t("td",null,"\u5E95\u90E8\u4FE1\u606F",-1),j2=t("td",null,"subtitle",-1),V2=o("()"),I2=t("td",null,"\u526F\u6807\u9898\u4FE1\u606F",-1),R2=t("td",null,"title",-1),T2=o("()"),q2=t("td",null,"\u6807\u9898\u4FE1\u606F",-1),G2={key:0,style:{width:"128px"}};function J2(d,u,E,_,D,x){const a=l("edit-on-github-header"),c=l("n-p"),p=l("n-h2"),i=l("basicDemo"),f=l("component-demos"),A=l("n-h3"),s=l("n-text"),m=l("n-table"),h=l("n-anchor-link"),b=l("n-anchor");return r(),y("div",{class:"doc",style:F(_.wrapperStyle)},[t("div",{style:F(_.contentStyle)},[n(a,{"relative-url":"src/page-header/demos/zhCN/index.demo-entry.md",text:"\u9875\u5934 PageHeader"}),n(c,null,{default:e(()=>[U]),_:1}),n(p,{id:"\u6F14\u793A"},{default:e(()=>[W]),_:1}),n(f,{span:1},{default:e(()=>[n(i)]),_:1}),n(p,{id:"API"},{default:e(()=>[X]),_:1}),n(A,{id:"PageHeader-Props"},{default:e(()=>[Y]),_:1}),t("div",Z,[n(m,{"single-column":"",class:"md-table"},{default:e(()=>[t2,t("tbody",null,[t("tr",null,[e2,t("td",null,[n(s,{code:""},{default:e(()=>[n2]),_:1})]),t("td",null,[n(s,{code:""},{default:e(()=>[o2]),_:1})]),t("td",null,[l2,n(s,{code:""},{default:e(()=>[s2]),_:1}),d2])]),t("tr",null,[a2,t("td",null,[n(s,{code:""},{default:e(()=>[c2]),_:1})]),t("td",null,[n(s,{code:""},{default:e(()=>[_2]),_:1})]),i2]),t("tr",null,[r2,t("td",null,[n(s,{code:""},{default:e(()=>[u2]),_:1})]),t("td",null,[n(s,{code:""},{default:e(()=>[p2]),_:1})]),A2]),t("tr",null,[m2,t("td",null,[n(s,{code:""},{default:e(()=>[h2]),_:1})]),t("td",null,[n(s,{code:""},{default:e(()=>[E2]),_:1})]),f2])])]),_:1})]),n(A,{id:"PageHeader-Slots"},{default:e(()=>[b2]),_:1}),t("div",C2,[n(m,{"single-column":"",class:"md-table"},{default:e(()=>[g2,t("tbody",null,[t("tr",null,[B2,t("td",null,[n(s,{code:""},{default:e(()=>[y2]),_:1})]),F2]),t("tr",null,[D2,t("td",null,[n(s,{code:""},{default:e(()=>[x2]),_:1})]),v2]),t("tr",null,[k2,t("td",null,[n(s,{code:""},{default:e(()=>[w2]),_:1})]),$2]),t("tr",null,[M2,t("td",null,[n(s,{code:""},{default:e(()=>[P2]),_:1})]),z2]),t("tr",null,[H2,t("td",null,[n(s,{code:""},{default:e(()=>[N2]),_:1})]),S2]),t("tr",null,[j2,t("td",null,[n(s,{code:""},{default:e(()=>[V2]),_:1})]),I2]),t("tr",null,[R2,t("td",null,[n(s,{code:""},{default:e(()=>[T2]),_:1})]),q2])])]),_:1})])],4),_.showAnchor?(r(),y("div",G2,[n(b,{"internal-scrollable":"",bound:16,type:"block",style:{width:"128px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:e(()=>[(_.displayMode,r(),C(h,{key:0,title:"\u57FA\u7840\u7528\u6CD5",href:"#basic"})),(_.displayMode,r(),C(h,{key:1,title:"API",href:"#API"}))]),_:1})])):z("",!0)],4)}var Q2=g(Q,[["render",J2]]);export{Q2 as default};
