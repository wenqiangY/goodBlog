import{k as S,$ as M,m as N,_ as y,r as s,o as r,j as p,w as t,e,f as o,h as n,u as P,a as R,b as L,c as v,d as C,n as B,g as I}from"./index.95fbdc71.js";import"./axios.dd49c521.js";const z=S({setup(){const a=M(),d=N(!0);return{disabled:d,handleStart(){a.start(),d.value=!1},handleFinish(){a.finish(),d.value=!0},handleError(){d.value=!0,a.error()}}}}),V=n(" \u57FA\u7840\u7528\u6CD5 "),T={class:"demo-card__view"},q=n(" \u5F00\u59CB "),G=n(" \u7ED3\u675F "),H=n(" \u62A5\u4E2A\u9519 ");function J(a,d,_,c,j,k){const i=s("n-button"),u=s("n-space"),l=s("component-demo");return r(),p(l,{"demo-file-name":"basic","relative-url":"src/loading-bar/demos/zhCN/basic.demo.md",title:"\u57FA\u7840\u7528\u6CD5",code:"%3Ctemplate%3E%0A%20%20%3Cn-space%3E%0A%20%20%20%20%3Cn-button%20%40click%3D%22handleStart%22%3E%20%E5%BC%80%E5%A7%8B%20%3C%2Fn-button%3E%0A%20%20%20%20%3Cn-button%20%40click%3D%22handleFinish%22%20%3Adisabled%3D%22disabled%22%3E%20%E7%BB%93%E6%9D%9F%20%3C%2Fn-button%3E%0A%20%20%20%20%3Cn-button%20%40click%3D%22handleError%22%3E%20%E6%8A%A5%E4%B8%AA%E9%94%99%20%3C%2Fn-button%3E%0A%20%20%3C%2Fn-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0Aimport%20%7B%20useLoadingBar%20%7D%20from%20'novice-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20loadingBar%20%3D%20useLoadingBar()%0A%20%20%20%20const%20disabledRef%20%3D%20ref(true)%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20disabled%3A%20disabledRef%2C%0A%20%20%20%20%20%20handleStart%20()%20%7B%0A%20%20%20%20%20%20%20%20loadingBar.start()%0A%20%20%20%20%20%20%20%20disabledRef.value%20%3D%20false%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20handleFinish%20()%20%7B%0A%20%20%20%20%20%20%20%20loadingBar.finish()%0A%20%20%20%20%20%20%20%20disabledRef.value%20%3D%20true%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20handleError%20()%20%7B%0A%20%20%20%20%20%20%20%20disabledRef.value%20%3D%20true%0A%20%20%20%20%20%20%20%20loadingBar.error()%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:t(()=>[V]),content:t(()=>[]),demo:t(()=>[e("div",T,[o(u,null,{default:t(()=>[o(i,{onClick:a.handleStart},{default:t(()=>[q]),_:1},8,["onClick"]),o(i,{onClick:a.handleFinish,disabled:a.disabled},{default:t(()=>[G]),_:1},8,["onClick","disabled"]),o(i,{onClick:a.handleError},{default:t(()=>[H]),_:1},8,["onClick"])]),_:1})])]),_:1})}var K=y(z,[["render",J]]);const O={components:{basicDemo:K},setup(){const a=P(),d=R(()=>!a.value),_=a;return{showAnchor:d,displayMode:L(),wrapperStyle:v(()=>_.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:v(()=>d.value?"width: calc(100% - 164px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"src/loading-bar/demos/zhCN/index.demo-entry.md"}}},Q=n("\u7126\u8651\u7684\u5B89\u6170\u5242\uFF0C\u7597\u6548\u5C1A\u53EF\u3002"),U=n(" \u5982\u679C\u4F60\u60F3\u4F7F\u7528\u52A0\u8F7D\u6761\uFF0C\u4F60\u9700\u8981\u628A\u8C03\u7528\u5176\u65B9\u6CD5\u7684\u7EC4\u4EF6\u653E\u5728 "),W=n("n-loading-bar-provider"),X=n(" \u5185\u90E8\u5E76\u4E14\u6CE8\u5165 "),Y=n("loadingBar"),Z=n("\u3002 "),ee=n(" \u4F8B\u5982\uFF1A "),ne=e("pre",null,[e("span",{class:"hljs-comment"},"<!-- App.vue -->"),n(`
`),e("span",{class:"hljs-tag"},[n("<"),e("span",{class:"hljs-name"},"n-loading-bar-provider"),n(">")]),n(`
  `),e("span",{class:"hljs-tag"},[n("<"),e("span",{class:"hljs-name"},"content"),n(" />")]),n(`
`),e("span",{class:"hljs-tag"},[n("</"),e("span",{class:"hljs-name"},"n-loading-bar-provider"),n(">")])],-1),te=e("pre",null,[e("span",{class:"hljs-keyword"},"import"),n(" { defineComponent } "),e("span",{class:"hljs-keyword"},"from"),n(),e("span",{class:"hljs-string"},"'vue'"),n(`
`),e("span",{class:"hljs-keyword"},"import"),n(" { useLoadingBar } "),e("span",{class:"hljs-keyword"},"from"),n(),e("span",{class:"hljs-string"},"'novice-ui'"),n(`

`),e("span",{class:"hljs-comment"},"// content"),n(`
`),e("span",{class:"hljs-keyword"},"export"),n(),e("span",{class:"hljs-keyword"},"default"),n(),e("span",{class:"hljs-title function_"},"defineComponent"),n(`({
  setup () {
    `),e("span",{class:"hljs-keyword"},"const"),n(" loadingBar = "),e("span",{class:"hljs-title function_"},"useLoadingBar"),n(`()
    `),e("span",{class:"hljs-keyword"},"return"),n(` {
      loading () {
        loadingBar.`),e("span",{class:"hljs-title function_"},"start"),n(`()
      }
    }
  }
})`)],-1),oe=n("\u6F14\u793A"),se=n("API"),ae=n("LoadingBarProvider Props"),le={class:"md-table-wrapper"},de=e("thead",null,[e("tr",null,[e("th",null,"\u540D\u79F0"),e("th",null,"\u7C7B\u578B"),e("th",null,"\u9ED8\u8BA4\u503C"),e("th",null,"\u8BF4\u660E")])],-1),ce=e("td",null,"loading-bar-style",-1),ie=n("{ loading?: string | object, error?: string | object }"),re=n("undefined"),_e=e("td",null,"\u52A0\u8F7D\u6761\u6837\u5F0F",-1),ue=n("loadingBar"),pe=n(" Injection Methods"),he={class:"md-table-wrapper"},me=e("thead",null,[e("tr",null,[e("th",null,"\u540D\u79F0"),e("th",null,"\u7C7B\u578B"),e("th",null,"\u8BF4\u660E")])],-1),fe=e("td",null,"error",-1),be=n("() => void"),ge=e("td",null,"\u52A0\u8F7D\u6761\u51FA\u73B0\u9519\u8BEF\u7684\u56DE\u8C03\u51FD\u6570",-1),Ae=e("td",null,"finish",-1),xe=n("() => void"),ye=e("td",null,"\u52A0\u8F7D\u6761\u7ED3\u675F\u52A0\u8F7D\u7684\u56DE\u8C03\u51FD\u6570",-1),ve=e("td",null,"start",-1),Ce=n("() => void"),Be=e("td",null,"\u52A0\u8F7D\u6761\u5F00\u59CB\u52A0\u8F7D\u7684\u56DE\u8C03\u51FD\u6570",-1),je={key:0,style:{width:"128px"}};function ke(a,d,_,c,j,k){const i=s("edit-on-github-header"),u=s("n-p"),l=s("n-text"),w=s("n-alert"),h=s("n-code"),m=s("n-scrollbar"),f=s("n-card"),E=s("n-space"),b=s("n-h2"),D=s("basicDemo"),F=s("component-demos"),g=s("n-h3"),A=s("n-table"),x=s("n-anchor-link"),$=s("n-anchor");return r(),C("div",{class:"doc",style:B(c.wrapperStyle)},[e("div",{style:B(c.contentStyle)},[o(i,{"relative-url":"src/loading-bar/demos/zhCN/index.demo-entry.md",text:"\u52A0\u8F7D\u6761 Loading Bar"}),o(u,null,{default:t(()=>[Q]),_:1}),o(E,{vertical:""},{default:t(()=>[o(w,{title:"\u4F7F\u7528\u524D\u63D0",type:"warning"},{default:t(()=>[U,o(l,{code:""},{default:t(()=>[W]),_:1}),X,o(l,{code:""},{default:t(()=>[Y]),_:1}),Z]),_:1}),ee,o(f,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:t(()=>[o(m,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:t(()=>[o(h,null,{default:t(()=>[ne]),_:1})]),_:1})]),_:1}),o(f,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:t(()=>[o(m,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:t(()=>[o(h,null,{default:t(()=>[te]),_:1})]),_:1})]),_:1})]),_:1}),o(b,{id:"\u6F14\u793A"},{default:t(()=>[oe]),_:1}),o(F,{span:2},{default:t(()=>[o(D)]),_:1}),o(b,{id:"API"},{default:t(()=>[se]),_:1}),o(g,{id:"LoadingBarProvider-Props"},{default:t(()=>[ae]),_:1}),e("div",le,[o(A,{"single-column":"",class:"md-table"},{default:t(()=>[de,e("tbody",null,[e("tr",null,[ce,e("td",null,[o(l,{code:""},{default:t(()=>[ie]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[re]),_:1})]),_e])])]),_:1})]),o(g,{id:"<n-text-code>loadingBar</n-text>-Injection-Methods"},{default:t(()=>[o(l,{code:""},{default:t(()=>[ue]),_:1}),pe]),_:1}),e("div",he,[o(A,{"single-column":"",class:"md-table"},{default:t(()=>[me,e("tbody",null,[e("tr",null,[fe,e("td",null,[o(l,{code:""},{default:t(()=>[be]),_:1})]),ge]),e("tr",null,[Ae,e("td",null,[o(l,{code:""},{default:t(()=>[xe]),_:1})]),ye]),e("tr",null,[ve,e("td",null,[o(l,{code:""},{default:t(()=>[Ce]),_:1})]),Be])])]),_:1})])],4),c.showAnchor?(r(),C("div",je,[o($,{"internal-scrollable":"",bound:16,type:"block",style:{width:"128px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:t(()=>[(c.displayMode,r(),p(x,{key:0,title:"\u57FA\u7840\u7528\u6CD5",href:"#basic"})),(c.displayMode,r(),p(x,{key:1,title:"API",href:"#API"}))]),_:1})])):I("",!0)],4)}var De=y(O,[["render",ke]]);export{De as default};
