import{_ as b,u as C,a as z,b as S,c as u,r as l,o as j,d as g,e as n,f as a,w as e,n as f,g as D,h as s}from"./index.95fbdc71.js";import"./axios.dd49c521.js";const P={components:{},setup(){const c=C(),o=z(()=>(c.value,!1)),h=c;return{showAnchor:o,displayMode:S(),wrapperStyle:u(()=>h.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:u(()=>o.value?"width: calc(100% - 164px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"demo/pages/docs/import-on-demand/zhCN/index.md"}}},T=s("Novice UI \u652F\u6301 tree shaking\uFF0C\u7EC4\u4EF6\u3001\u8BED\u8A00\u3001\u4E3B\u9898\u5747\u53EF tree-shaking\u3002"),A=s("\u9ED8\u8BA4\u60C5\u51B5\u7EC4\u4EF6\u4E3B\u9898\u4E3A\u4EAE\u8272\uFF0C\u8BED\u8A00\u4E3A\u82F1\u6587\uFF0C\u65E0\u9700\u989D\u5916\u5BFC\u5165\u3002"),B=s("\u4E86\u89E3\u66F4\u591A\u5173\u4E8E\u4E3B\u9898\u8BBE\u5B9A\u7684\u4FE1\u606F\uFF0C\u53C2\u89C1"),M=s("\u8C03\u6574\u4E3B\u9898"),I=s("\u3002"),V=s("\u76F4\u63A5\u5F15\u5165"),R=n("pre",null,[n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"script"),s(">")]),n("span",{class:"language-javascript"},[s(`
  `),n("span",{class:"hljs-keyword"},"import"),s(" { defineComponent } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'vue'"),s(`
  `),n("span",{class:"hljs-keyword"},"import"),s(" { NConfigProvider, NInput, NDatePicker, NSpace } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'novice-ui'"),s(`
  `),n("span",{class:"hljs-comment"},"// theme"),s(`
  `),n("span",{class:"hljs-keyword"},"import"),s(" { createTheme, inputDark, datePickerDark } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'novice-ui'"),s(`
  `),n("span",{class:"hljs-comment"},"// locale & dateLocale"),s(`
  `),n("span",{class:"hljs-keyword"},"import"),s(" { zhCN, dateZhCN } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'novice-ui'"),s(`

  `),n("span",{class:"hljs-keyword"},"export"),s(),n("span",{class:"hljs-keyword"},"default"),s(),n("span",{class:"hljs-title function_"},"defineComponent"),s(`({
    `),n("span",{class:"hljs-attr"},"components"),s(`: {
      NConfigProvider,
      NInput,
      NDatePicker,
      NSpace
    },
    `),n("span",{class:"hljs-title function_"},"setup"),s("("),n("span",{class:"hljs-params"}),s(`) {
      `),n("span",{class:"hljs-keyword"},"return"),s(` {
        `),n("span",{class:"hljs-attr"},"darkTheme"),s(": "),n("span",{class:"hljs-title function_"},"createTheme"),s(`([inputDark, datePickerDark]),
        zhCN,
        dateZhCN
      }
    }
  })
`)]),n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"n-config-provider"),s(),n("span",{class:"hljs-attr"},":theme"),s("="),n("span",{class:"hljs-string"},'"darkTheme"'),s(),n("span",{class:"hljs-attr"},":locale"),s("="),n("span",{class:"hljs-string"},'"zhCN"'),s(),n("span",{class:"hljs-attr"},":date-locale"),s("="),n("span",{class:"hljs-string"},'"dateZhCN"'),s(">")]),s(`
    `),n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"n-space"),s(),n("span",{class:"hljs-attr"},"vertical"),s(">")]),s(`
      `),n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"n-input"),s(" />")]),s(`
      `),n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"n-date-picker"),s(" />")]),s(`
    `),n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"n-space"),s(">")]),s(`
  `),n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"style"),s(">")]),n("span",{class:"language-css"},[s(`
  `),n("span",{class:"hljs-selector-tag"},"body"),s(` {
    `),n("span",{class:"hljs-attribute"},"background"),s(`: black;
  }
`)]),n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"style"),s(">")])],-1),Z=s("\u6309\u9700\u5168\u5C40\u5B89\u88C5\u7EC4\u4EF6"),E=n("pre",null,[n("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'vue'"),s(`
`),n("span",{class:"hljs-keyword"},"import"),s(` {
  `),n("span",{class:"hljs-comment"},"// create novice ui"),s(`
  create,
  `),n("span",{class:"hljs-comment"},"// component"),s(`
  NButton
} `),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'novice-ui'"),s(`

`),n("span",{class:"hljs-keyword"},"const"),s(" novice = "),n("span",{class:"hljs-title function_"},"create"),s(`({
  `),n("span",{class:"hljs-attr"},"components"),s(`: [NButton]
})

`),n("span",{class:"hljs-keyword"},"const"),s(" app = "),n("span",{class:"hljs-title function_"},"createApp"),s(`()
app.`),n("span",{class:"hljs-title function_"},"use"),s("(novice)")],-1),F=s("\u5B89\u88C5\u540E\uFF0C\u4F60\u53EF\u4EE5\u8FD9\u6837\u5728 SFC \u4E2D\u4F7F\u7528\u4F60\u5B89\u88C5\u7684\u7EC4\u4EF6\u3002"),L=n("pre",null,[n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"n-button"),s(">")]),s("novice-ui"),n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"n-button"),s(">")]),s(`
`),n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"template"),s(">")])],-1),U={key:0,style:{width:"128px"}};function $(c,o,h,p,q,G){const k=l("edit-on-github-header"),t=l("n-p"),y=l("n-a"),x=l("router-link"),m=l("n-h2"),r=l("n-code"),i=l("n-scrollbar"),d=l("n-card"),_=l("n-anchor-link"),w=l("n-anchor");return j(),g("div",{class:"doc",style:f(p.wrapperStyle)},[n("div",{style:f(p.contentStyle)},[a(k,{"relative-url":"demo/pages/docs/import-on-demand/zhCN/index.md",text:"\u6309\u9700\u5F15\u5165\uFF08Tree Shaking\uFF09"}),a(t,null,{default:e(()=>[T]),_:1}),a(t,null,{default:e(()=>[A]),_:1}),a(t,null,{default:e(()=>[B,a(x,{to:"customize-theme",custom:""},{default:e(({navigate:v,href:N})=>[a(y,{href:N,onClick:v},{default:e(()=>[M]),_:2},1032,["href","onClick"])]),_:1}),I]),_:1}),a(m,{id:"\u76F4\u63A5\u5F15\u5165"},{default:e(()=>[V]),_:1}),a(d,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:e(()=>[a(i,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:e(()=>[a(r,null,{default:e(()=>[R]),_:1})]),_:1})]),_:1}),a(m,{id:"\u6309\u9700\u5168\u5C40\u5B89\u88C5\u7EC4\u4EF6"},{default:e(()=>[Z]),_:1}),a(d,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:e(()=>[a(i,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:e(()=>[a(r,null,{default:e(()=>[E]),_:1})]),_:1})]),_:1}),a(t,null,{default:e(()=>[F]),_:1}),a(d,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:e(()=>[a(i,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:e(()=>[a(r,null,{default:e(()=>[L]),_:1})]),_:1})]),_:1})],4),p.showAnchor?(j(),g("div",U,[a(w,{"internal-scrollable":"",bound:16,type:"block",style:{width:"128px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:e(()=>[a(_,{title:"\u76F4\u63A5\u5F15\u5165",href:"#\u76F4\u63A5\u5F15\u5165"}),a(_,{title:"\u6309\u9700\u5168\u5C40\u5B89\u88C5\u7EC4\u4EF6",href:"#\u6309\u9700\u5168\u5C40\u5B89\u88C5\u7EC4\u4EF6"})]),_:1})])):D("",!0)],4)}var K=b(P,[["render",$]]);export{K as default};
