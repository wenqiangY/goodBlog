import{_ as b,u as N,a as z,b as E,c as f,r as l,o as g,d as j,e as s,f as e,w as t,n as x,g as R,h as n}from"./index.95fbdc71.js";import"./axios.dd49c521.js";const P={components:{},setup(){const c=N(),d=z(()=>!c.value),h=c;return{showAnchor:d,displayMode:E(),wrapperStyle:f(()=>h.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:f(()=>d.value?"width: calc(100% - 164px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"demo/pages/docs/i18n/enUS/index.md"}}},L=n("Naive-ui provide "),A=n("n-config-provider"),B=n(" to customize the internationalization. By default, all components are in English."),D=n("Learn more about "),M=n("n-config-provider"),F=n(", see "),J=n("Config Provider"),T=n("."),V=n("Configure"),I=n("Set "),G=n("n-config-provider"),O=n("'s "),W=n("locale"),Z=n(" prop to "),Y=n("enUS"),$=n(" imported from naive-ui to set Chinese theme inside "),q=n("n-config-provider"),H=n("."),K=n("Set "),Q=n("n-config-provider"),X=n("'s "),ss=n("date-locale"),ns=n(" prop to "),es=n("dateEnUS"),ts=n(" imported from naive-ui to set Chinese theme's date inside "),ls=n("n-config-provider"),as=n("."),os=s("pre",null,[s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`
  `),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"n-config-provider"),n(),s("span",{class:"hljs-attr"},":locale"),n("="),s("span",{class:"hljs-string"},'"enUS"'),n(),s("span",{class:"hljs-attr"},":date-locale"),n("="),s("span",{class:"hljs-string"},'"dateEnUS"'),n(">")]),n(`
    `),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"app"),n(" />")]),n(`
  `),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"n-config-provider"),n(">")]),n(`
`),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`

`),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"script"),n(">")]),s("span",{class:"language-javascript"},[n(`
  `),s("span",{class:"hljs-keyword"},"import"),n(" { defineComponent } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'vue'"),n(`
  `),s("span",{class:"hljs-keyword"},"import"),n(" { NConfigProvider } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'novice-ui'"),n(`
  `),s("span",{class:"hljs-keyword"},"import"),n(" { enUS, dateEnUS } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'novice-ui'"),n(`

  `),s("span",{class:"hljs-keyword"},"export"),n(),s("span",{class:"hljs-keyword"},"default"),n(),s("span",{class:"hljs-title function_"},"defineComponent"),n(`({
    `),s("span",{class:"hljs-attr"},"components"),n(`: {
      NConfigProvider
    },
    `),s("span",{class:"hljs-title function_"},"setup"),n("("),s("span",{class:"hljs-params"}),n(`) {
      `),s("span",{class:"hljs-keyword"},"return"),n(` {
        enUS,
        dateEnUS
      }
    }
  })
`)]),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"script"),n(">")])],-1),cs=n("Supported languages"),ds=n("PR is welcomed for locales that is not supported yet!"),is={class:"md-table-wrapper"},rs=s("thead",null,[s("tr",null,[s("th",null,"Language"),s("th",null,"Config"),s("th",null,"Date config")])],-1),ps=s("tbody",null,[s("tr",null,[s("td",null,"English"),s("td",null,"enUS"),s("td",null,"dateEnUS")]),s("tr",null,[s("td",null,"Japanese"),s("td",null,"jaJP"),s("td",null,"dateJaJP")]),s("tr",null,[s("td",null,"Russian"),s("td",null,"ruRU"),s("td",null,"dateRuRU")]),s("tr",null,[s("td",null,"Ukrainian"),s("td",null,"ukUA"),s("td",null,"dateUkUA")]),s("tr",null,[s("td",null,"Chinese (Simplified)"),s("td",null,"zhCN"),s("td",null,"dateZhCN")]),s("tr",null,[s("td",null,"Chinese (Traditional)"),s("td",null,"zhTW"),s("td",null,"dateZhTW")]),s("tr",null,[s("td",null,"German - Germany"),s("td",null,"deDE"),s("td",null,"dateDeDe")]),s("tr",null,[s("td",null,"Norwegian Bokm\xE5l (Norway)"),s("td",null,"nbNO"),s("td",null,"dateNbNO")]),s("tr",null,[s("td",null,"French"),s("td",null,"frFR"),s("td",null,"dateFrFR")])],-1),hs=n("Customize the existing locale"),us=n("You can use "),_s=n("createLocale"),ms=n(" to customize the existing locale."),fs=s("pre",null,[s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`
  `),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"n-config-provider"),n(),s("span",{class:"hljs-attr"},":locale"),n("="),s("span",{class:"hljs-string"},'"locale"'),n(),s("span",{class:"hljs-attr"},":date-locale"),n("="),s("span",{class:"hljs-string"},'"dateEnUS"'),n(">")]),n(`
    `),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"app"),n(" />")]),n(`
  `),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"n-config-provider"),n(">")]),n(`
`),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`

`),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"script"),n(">")]),s("span",{class:"language-javascript"},[n(`
  `),s("span",{class:"hljs-keyword"},"import"),n(" { defineComponent } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'vue'"),n(`
  `),s("span",{class:"hljs-keyword"},"import"),n(" { NConfigProvider, createLocale, enUS } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'novice-ui'"),n(`
  `),s("span",{class:"hljs-keyword"},"import"),n(" { enUS, dateEnUS } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'novice-ui'"),n(`

  `),s("span",{class:"hljs-keyword"},"const"),n(" customizedLocale = "),s("span",{class:"hljs-title function_"},"createLocale"),n(`(
    {
      `),s("span",{class:"hljs-title class_"},"Input"),n(`: {
        `),s("span",{class:"hljs-attr"},"placeholder"),n(": "),s("span",{class:"hljs-string"},"'\u4E0D\u63D0\u7533\u8BF7\u4E0D\u6784\u6210\u52A0\u73ED'"),n(`
      }
    },
    enUS
  )

  `),s("span",{class:"hljs-keyword"},"export"),n(),s("span",{class:"hljs-keyword"},"default"),n(),s("span",{class:"hljs-title function_"},"defineComponent"),n(`({
    `),s("span",{class:"hljs-attr"},"components"),n(`: {
      NConfigProvider
    },
    `),s("span",{class:"hljs-title function_"},"setup"),n("("),s("span",{class:"hljs-params"}),n(`) {
      `),s("span",{class:"hljs-keyword"},"return"),n(` {
        `),s("span",{class:"hljs-attr"},"locale"),n(`: customizedLocale,
        dateEnUS
      }
    }
  })
`)]),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"script"),n(">")])],-1),gs={key:0,style:{width:"128px"}};function js(c,d,h,i,xs,ys){const y=l("edit-on-github-header"),a=l("n-text"),o=l("n-p"),v=l("n-a"),w=l("router-link"),r=l("n-h2"),u=l("n-code"),_=l("n-scrollbar"),m=l("n-card"),k=l("n-table"),p=l("n-anchor-link"),S=l("n-anchor");return g(),j("div",{class:"doc",style:x(i.wrapperStyle)},[s("div",{style:x(i.contentStyle)},[e(y,{"relative-url":"demo/pages/docs/i18n/enUS/index.md",text:"Internationalization"}),e(o,null,{default:t(()=>[L,e(a,{code:""},{default:t(()=>[A]),_:1}),B]),_:1}),e(o,null,{default:t(()=>[D,e(a,{code:""},{default:t(()=>[M]),_:1}),F,e(w,{to:"../components/config-provider",custom:""},{default:t(({navigate:C,href:U})=>[e(v,{href:U,onClick:C},{default:t(()=>[J]),_:2},1032,["href","onClick"])]),_:1}),T]),_:1}),e(r,{id:"Configure"},{default:t(()=>[V]),_:1}),e(o,null,{default:t(()=>[I,e(a,{code:""},{default:t(()=>[G]),_:1}),O,e(a,{code:""},{default:t(()=>[W]),_:1}),Z,e(a,{code:""},{default:t(()=>[Y]),_:1}),$,e(a,{code:""},{default:t(()=>[q]),_:1}),H]),_:1}),e(o,null,{default:t(()=>[K,e(a,{code:""},{default:t(()=>[Q]),_:1}),X,e(a,{code:""},{default:t(()=>[ss]),_:1}),ns,e(a,{code:""},{default:t(()=>[es]),_:1}),ts,e(a,{code:""},{default:t(()=>[ls]),_:1}),as]),_:1}),e(m,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:t(()=>[e(_,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:t(()=>[e(u,null,{default:t(()=>[os]),_:1})]),_:1})]),_:1}),e(r,{id:"Supported-languages"},{default:t(()=>[cs]),_:1}),e(o,null,{default:t(()=>[ds]),_:1}),s("div",is,[e(k,{"single-column":"",class:"md-table"},{default:t(()=>[rs,ps]),_:1})]),e(r,{id:"Customize-the-existing-locale"},{default:t(()=>[hs]),_:1}),e(o,null,{default:t(()=>[us,e(a,{code:""},{default:t(()=>[_s]),_:1}),ms]),_:1}),e(m,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:t(()=>[e(_,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:t(()=>[e(u,null,{default:t(()=>[fs]),_:1})]),_:1})]),_:1})],4),i.showAnchor?(g(),j("div",gs,[e(S,{"internal-scrollable":"",bound:16,type:"block",style:{width:"128px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:t(()=>[e(p,{title:"Configure",href:"#Configure"}),e(p,{title:"Supported languages",href:"#Supported-languages"}),e(p,{title:"Customize the existing locale",href:"#Customize-the-existing-locale"})]),_:1})])):R("",!0)],4)}var ks=b(P,[["render",js]]);export{ks as default};
