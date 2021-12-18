import{_ as N,u as C,a as D,b as I,c as _,r as l,o as j,d as f,e as n,f as a,w as e,n as g,g as S,h as s}from"./index.95fbdc71.js";import"./axios.dd49c521.js";const z={components:{},setup(){const o=C(),c=D(()=>(o.value,!1)),h=o;return{showAnchor:c,displayMode:I(),wrapperStyle:_(()=>h.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:_(()=>c.value?"width: calc(100% - 164px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"demo/pages/docs/import-on-demand/enUS/index.md"}}},P=s("Naive UI support tree shaking for components, locales and themes."),T=s("By default the component theme is light, locale is enUS, no extra imports is needed."),A=s("For more info about theming, see "),B=s("Customizing Theme"),M=s("."),G=s("Import Directly"),U=n("pre",null,[n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"script"),s(">")]),n("span",{class:"language-javascript"},[s(`
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
`)]),n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"style"),s(">")])],-1),V=s("Install on Demand Globally"),R=n("pre",null,[n("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'vue'"),s(`
`),n("span",{class:"hljs-keyword"},"import"),s(` {
  `),n("span",{class:"hljs-comment"},"// create naive ui"),s(`
  create,
  `),n("span",{class:"hljs-comment"},"// component"),s(`
  NButton
} `),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'novice-ui'"),s(`

`),n("span",{class:"hljs-keyword"},"const"),s(" naive = "),n("span",{class:"hljs-title function_"},"create"),s(`({
  `),n("span",{class:"hljs-attr"},"components"),s(`: [NButton]
})

`),n("span",{class:"hljs-keyword"},"const"),s(" app = "),n("span",{class:"hljs-title function_"},"createApp"),s(`()
app.`),n("span",{class:"hljs-title function_"},"use"),s("(naive)")],-1),Z=s("After the installation. You can use the components you installed in SFC like this."),F=n("pre",null,[n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"n-button"),s(">")]),s("novice-ui"),n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"n-button"),s(">")]),s(`
`),n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"template"),s(">")])],-1),E={key:0,style:{width:"128px"}};function L(o,c,h,p,Y,$){const y=l("edit-on-github-header"),t=l("n-p"),k=l("n-a"),x=l("router-link"),m=l("n-h2"),r=l("n-code"),i=l("n-scrollbar"),d=l("n-card"),u=l("n-anchor-link"),w=l("n-anchor");return j(),f("div",{class:"doc",style:g(p.wrapperStyle)},[n("div",{style:g(p.contentStyle)},[a(y,{"relative-url":"demo/pages/docs/import-on-demand/enUS/index.md",text:"Import on Demand (Tree Shaking)"}),a(t,null,{default:e(()=>[P]),_:1}),a(t,null,{default:e(()=>[T]),_:1}),a(t,null,{default:e(()=>[A,a(x,{to:"customize-theme",custom:""},{default:e(({navigate:v,href:b})=>[a(k,{href:b,onClick:v},{default:e(()=>[B]),_:2},1032,["href","onClick"])]),_:1}),M]),_:1}),a(m,{id:"Import-Directly"},{default:e(()=>[G]),_:1}),a(d,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:e(()=>[a(i,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:e(()=>[a(r,null,{default:e(()=>[U]),_:1})]),_:1})]),_:1}),a(m,{id:"Install-on-Demand-Globally"},{default:e(()=>[V]),_:1}),a(d,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:e(()=>[a(i,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:e(()=>[a(r,null,{default:e(()=>[R]),_:1})]),_:1})]),_:1}),a(t,null,{default:e(()=>[Z]),_:1}),a(d,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:e(()=>[a(i,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:e(()=>[a(r,null,{default:e(()=>[F]),_:1})]),_:1})]),_:1})],4),p.showAnchor?(j(),f("div",E,[a(w,{"internal-scrollable":"",bound:16,type:"block",style:{width:"128px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:e(()=>[a(u,{title:"Import Directly",href:"#Import-Directly"}),a(u,{title:"Install on Demand Globally",href:"#Install-on-Demand-Globally"})]),_:1})])):S("",!0)],4)}var J=N(z,[["render",L]]);export{J as default};
