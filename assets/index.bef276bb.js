import{_ as z,u as O,a as F,b as N,c as g,r as o,o as f,d as v,e,f as a,w as n,n as y,g as I,h as s}from"./index.95fbdc71.js";import"./axios.dd49c521.js";const U={components:{},setup(){const d=O(),m=F(()=>!d.value),j=d;return{showAnchor:m,displayMode:N(),wrapperStyle:g(()=>j.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:g(()=>m.value?"width: calc(100% - 164px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"demo/pages/docs/customize-theme/enUS/index.md"}}},B=s("Naive-ui provide "),P=s("n-config-provider"),G=s(" to customize the theme."),M=s("By default all the component is light themed, without any configuration."),E=s("Learn more about "),R=s("n-config-provider"),V=s(", see "),A=s("Config Provider"),Y=s("."),D=s("Use dark theme"),L=s("Set "),q=s("n-config-provider"),$=s("'s "),H=s("theme"),J=s(" prop to "),K=s("darkTheme"),Q=s(" imported from naive-ui to set dark theme inside "),W=s("n-config-provider"),X=s("."),Z=s("If "),ss=s("theme"),es=s(" is "),as=s("undefined"),ns=s(" it won't affect the theme of components inside."),ts=e("pre",null,[e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"n-config-provider"),s(),e("span",{class:"hljs-attr"},":theme"),s("="),e("span",{class:"hljs-string"},'"darkTheme"'),s(">")]),s(`
    `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"app"),s(" />")]),s(`
  `),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"script"),s(">")]),e("span",{class:"language-javascript"},[s(`
  `),e("span",{class:"hljs-keyword"},"import"),s(" { defineComponent } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'vue'"),s(`
  `),e("span",{class:"hljs-keyword"},"import"),s(" { darkTheme } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'novice-ui'"),s(`

  `),e("span",{class:"hljs-keyword"},"export"),s(),e("span",{class:"hljs-keyword"},"default"),s(),e("span",{class:"hljs-title function_"},"defineComponent"),s(`({
    `),e("span",{class:"hljs-title function_"},"setup"),s("("),e("span",{class:"hljs-params"}),s(`) {
      `),e("span",{class:"hljs-keyword"},"return"),s(` {
        darkTheme
      }
    }
  })
`)]),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"script"),s(">")])],-1),ls=s("Customizing theme vars (design tokens)"),os=s("No CSS (Scss, Less) needed."),cs=s("The configured global theme variables will overwrite the theme variables that take effect on descendant components."),is=s("Set "),hs=s("n-config-provider"),rs=s("'s "),ps=s("theme-overrides"),ds=s(" to customize theme vars. Naive-ui exports type "),ms=s("GlobalThemeOverrides"),_s=s(" to help you define "),js=s("theme-overrides"),us=s("."),gs=s("For available vars please follow the type hint of "),fs=s("GlobalThemeOverrides"),vs=s("."),ys=s("If you want to view more theme variables, you can view them in the edit button at the bottom right corner of the Naive UI homepage."),xs=s("You can modify the corresponding theme variable, you can get the themeOverrides object after export."),bs=e("pre",null,[e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"script"),s(">")]),e("span",{class:"language-javascript"},[s(`
  `),e("span",{class:"hljs-keyword"},"import"),s(" { NConfigProvider } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'novice-ui'"),s(`

  `),e("span",{class:"hljs-comment"},[s(`/**
   * Use this for type hints under js file
   * `),e("span",{class:"hljs-doctag"},"@type"),s(` import('naive-ui').GlobalThemeOverrides
   */`)]),s(`
  `),e("span",{class:"hljs-keyword"},"const"),s(` themeOverrides = {
    `),e("span",{class:"hljs-attr"},"common"),s(`: {
      `),e("span",{class:"hljs-attr"},"primaryColor"),s(": "),e("span",{class:"hljs-string"},"'#FF0000'"),s(`
    },
    `),e("span",{class:"hljs-title class_"},"Button"),s(`: {
      `),e("span",{class:"hljs-attr"},"textColor"),s(": "),e("span",{class:"hljs-string"},"'#FF0000'"),s(`
    },
    `),e("span",{class:"hljs-title class_"},"Select"),s(`: {
      `),e("span",{class:"hljs-attr"},"peers"),s(`: {
        `),e("span",{class:"hljs-title class_"},"InternalSelection"),s(`: {
          `),e("span",{class:"hljs-attr"},"textColor"),s(": "),e("span",{class:"hljs-string"},"'#FF0000'"),s(`
        }
      }
    }
    `),e("span",{class:"hljs-comment"},"// ..."),s(`
  }

  `),e("span",{class:"hljs-comment"},"// ..."),s(`
`)]),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"n-config-provider"),s(),e("span",{class:"hljs-attr"},":theme-overrides"),s("="),e("span",{class:"hljs-string"},'"themeOverrides"'),s(">")]),s(`
    `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"my-app"),s(" />")]),s(`
  `),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"template"),s(">")])],-1),ws=s("Customizing theme vars in TypeScript"),ks=s("If you are using ts to write code, this one is more suitable for you."),Ts=e("pre",null,[e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"script"),s(),e("span",{class:"hljs-attr"},"lang"),s("="),e("span",{class:"hljs-string"},'"ts"'),s(">")]),e("span",{class:"language-javascript"},[s(`
  `),e("span",{class:"hljs-keyword"},"import"),s(" { NConfigProvider, "),e("span",{class:"hljs-title class_"},"GlobalThemeOverrides"),s(" } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'novice-ui'"),s(`

  `),e("span",{class:"hljs-keyword"},"const"),s(),e("span",{class:"hljs-attr"},"themeOverrides"),s(": "),e("span",{class:"hljs-title class_"},"GlobalThemeOverrides"),s(` = {
    `),e("span",{class:"hljs-attr"},"common"),s(`: {
      `),e("span",{class:"hljs-attr"},"primaryColor"),s(": "),e("span",{class:"hljs-string"},"'#FF0000'"),s(`
    },
    `),e("span",{class:"hljs-title class_"},"Button"),s(`: {
      `),e("span",{class:"hljs-attr"},"textColor"),s(": "),e("span",{class:"hljs-string"},"'#FF0000'"),s(`
    }
  }

  `),e("span",{class:"hljs-comment"},"// ..."),s(`
`)]),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"n-config-provider"),s(),e("span",{class:"hljs-attr"},":theme-overrides"),s("="),e("span",{class:"hljs-string"},'"themeOverrides"'),s(">")]),s(`
    `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"my-app"),s(" />")]),s(`
  `),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"template"),s(">")])],-1),Cs=s("Customizing component theme vars"),Ss=s("The use of component theme variables is the same as the use of global theme variables, and the component theme variables will override the global theme variables."),zs=e("pre",null,[e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"script"),s(),e("span",{class:"hljs-attr"},"lang"),s("="),e("span",{class:"hljs-string"},'"ts"'),s(">")]),e("span",{class:"language-javascript"},[s(`
  `),e("span",{class:"hljs-keyword"},"import"),s(" { "),e("span",{class:"hljs-title class_"},"SelectProps"),s(", "),e("span",{class:"hljs-title class_"},"ButtonProps"),s(" } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'novice-ui'"),s(`

  type `),e("span",{class:"hljs-title class_"},"SelectThemeOverrides"),s(" = "),e("span",{class:"hljs-title class_"},"NonNullable"),s("<"),e("span",{class:"hljs-title class_"},"SelectProps"),s("["),e("span",{class:"hljs-string"},"'themeOverrides'"),s(`]>
  type `),e("span",{class:"hljs-title class_"},"ButtonThemeOverrides"),s(" = "),e("span",{class:"hljs-title class_"},"NonNullable"),s("<"),e("span",{class:"hljs-title class_"},"ButtonProps"),s("["),e("span",{class:"hljs-string"},"'themeOverrides'"),s(`]>

  `),e("span",{class:"hljs-keyword"},"const"),s(),e("span",{class:"hljs-attr"},"selectThemeOverrides"),s(": "),e("span",{class:"hljs-title class_"},"SelectThemeOverrides"),s(` = {
    `),e("span",{class:"hljs-attr"},"menuBoxShadow"),s(`:
      `),e("span",{class:"hljs-string"},"'0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)'"),s(`,
    `),e("span",{class:"hljs-attr"},"peers"),s(`: {
      `),e("span",{class:"hljs-title class_"},"InternalSelection"),s(`: {
        `),e("span",{class:"hljs-attr"},"textColor"),s(": "),e("span",{class:"hljs-string"},"'#FF0000'"),s(`,
        `),e("span",{class:"hljs-attr"},"heightMedium"),s(": "),e("span",{class:"hljs-string"},"'42px'"),s(`
      }
    }
  }
  `),e("span",{class:"hljs-keyword"},"const"),s(),e("span",{class:"hljs-attr"},"buttonThemeOverrides"),s(": "),e("span",{class:"hljs-title class_"},"ButtonThemeOverrides"),s(` = {
    `),e("span",{class:"hljs-attr"},"heightMedium"),s(": "),e("span",{class:"hljs-string"},"'40px'"),s(`,
    `),e("span",{class:"hljs-attr"},"textColor"),s(": "),e("span",{class:"hljs-string"},"'rgba(24, 127, 231, 1)'"),s(`
  }

  `),e("span",{class:"hljs-comment"},"// ..."),s(`
`)]),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"n-select"),s(`
    `),e("span",{class:"hljs-attr"},"v-model:value"),s("="),e("span",{class:"hljs-string"},'"value"'),s(`
    `),e("span",{class:"hljs-attr"},":options"),s("="),e("span",{class:"hljs-string"},'"options"'),s(`
    `),e("span",{class:"hljs-attr"},":theme-overrides"),s("="),e("span",{class:"hljs-string"},'"selectThemeOverrides"'),s(`
  />`)]),s(`
  `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"n-button"),s(),e("span",{class:"hljs-attr"},":theme-overrides"),s("="),e("span",{class:"hljs-string"},'"buttonThemeOverrides"'),s(">")]),s("theme"),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"n-button"),s(">")]),s(`
`),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"template"),s(">")])],-1),Os=s("Customizing theme vars under different themes"),Fs=s("If you want to use different theme variables on light and dark theme at the same time, you can take a look at this."),Ns=e("pre",null,[e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"script"),s(">")]),e("span",{class:"language-javascript"},[s(`
  `),e("span",{class:"hljs-keyword"},"import"),s(" { NConfigProvider, darkTheme } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'novice-ui'"),s(`

  `),e("span",{class:"hljs-comment"},[s(`/**
   * `),e("span",{class:"hljs-doctag"},"@type"),s(` import('naive-ui').GlobalThemeOverrides
   */`)]),s(`
  `),e("span",{class:"hljs-keyword"},"const"),s(` lightThemeOverrides = {
    `),e("span",{class:"hljs-attr"},"common"),s(`: {
      `),e("span",{class:"hljs-attr"},"primaryColor"),s(": "),e("span",{class:"hljs-string"},"'#000000'"),s(`
    }
    `),e("span",{class:"hljs-comment"},"// ..."),s(`
  }

  `),e("span",{class:"hljs-keyword"},"const"),s(` darkThemeOverrides = {
    `),e("span",{class:"hljs-attr"},"common"),s(`: {
      `),e("span",{class:"hljs-attr"},"primaryColor"),s(": "),e("span",{class:"hljs-string"},"'#FFFFFF'"),s(`
    }
    `),e("span",{class:"hljs-comment"},"// ..."),s(`
  }

  `),e("span",{class:"hljs-keyword"},"const"),s(" theme = "),e("span",{class:"hljs-literal"},"null"),s(`
  `),e("span",{class:"hljs-comment"},"// ..."),s(`
`)]),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"n-config-provider"),s(`
    `),e("span",{class:"hljs-attr"},":theme"),s("="),e("span",{class:"hljs-string"},'"theme"'),s(`
    `),e("span",{class:"hljs-attr"},":theme-overrides"),s("="),e("span",{class:"hljs-string"},'"theme === null ? lightThemeOverrides : darkThemeOverrides"'),s(`
  >`)]),s(`
    `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"my-app"),s(" />")]),s(`
  `),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"template"),s(">")])],-1),Is=s("Use the peers vars"),Us=s("In many cases, another component will be reused inside a component, so the theme variable of peers appears."),Bs=s("The theme variables related to peers have not been exposed yet. Use "),Ps=s("GlobalThemeOverrides"),Gs=s(" to view the peers variables of the corresponding component."),Ms=s("The specific available peers will be updated later."),Es=e("pre",null,[e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"script"),s(),e("span",{class:"hljs-attr"},"lang"),s("="),e("span",{class:"hljs-string"},'"ts"'),s(">")]),e("span",{class:"language-javascript"},[s(`
  `),e("span",{class:"hljs-keyword"},"import"),s(" { NConfigProvider, "),e("span",{class:"hljs-title class_"},"GlobalThemeOverrides"),s(" } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'novice-ui'"),s(`

  `),e("span",{class:"hljs-keyword"},"const"),s(),e("span",{class:"hljs-attr"},"themeOverrides"),s(": "),e("span",{class:"hljs-title class_"},"GlobalThemeOverrides"),s(` = {
    `),e("span",{class:"hljs-title class_"},"Select"),s(`: {
      `),e("span",{class:"hljs-attr"},"peers"),s(`: {
        `),e("span",{class:"hljs-title class_"},"InternalSelection"),s(`: {
          `),e("span",{class:"hljs-attr"},"textColor"),s(": "),e("span",{class:"hljs-string"},"'#FF0000'"),s(`
        },
        `),e("span",{class:"hljs-title class_"},"InternalSelectMenu"),s(`: {
          `),e("span",{class:"hljs-attr"},"borderRadius"),s(": "),e("span",{class:"hljs-string"},"'6px'"),s(`
        }
      }
    },
    `),e("span",{class:"hljs-title class_"},"DataTable"),s(`: {
      `),e("span",{class:"hljs-attr"},"paginationMargin"),s(": "),e("span",{class:"hljs-string"},"'40px 0 0 0'"),s(`,
      `),e("span",{class:"hljs-attr"},"peers"),s(`: {
        `),e("span",{class:"hljs-title class_"},"Empty"),s(`: {
          `),e("span",{class:"hljs-attr"},"textColor"),s(": "),e("span",{class:"hljs-string"},"'#ccc'"),s(`
        },
        `),e("span",{class:"hljs-title class_"},"Pagination"),s(`: {
          `),e("span",{class:"hljs-attr"},"itemTextColor"),s(": "),e("span",{class:"hljs-string"},"'#ccc'"),s(`
        }
      }
    }
    `),e("span",{class:"hljs-comment"},"// ..."),s(`
  }
  `),e("span",{class:"hljs-comment"},"// ..."),s(`
`)]),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"n-config-provider"),s(),e("span",{class:"hljs-attr"},":theme-overrides"),s("="),e("span",{class:"hljs-string"},'"themeOverrides"'),s(">")]),s(`
    `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"my-app"),s(" />")]),s(`
  `),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"template"),s(">")])],-1),Rs=s("Sync style of the body element"),Vs=s("For the following reasons, you may need to set some styles on "),As=s("document.body"),Ys=s("."),Ds=s("Naive-ui will mount some global style that is unresponsive (to theme, not media query). For example "),Ls=s("font-family"),qs=s(". The style works fine by default, however they won't change when theme is changed."),$s=s("n-config-provider"),Hs=s(" can't sync global style (for example, body's background color) outside it."),Js=s("You can use "),Ks=s("n-global-style"),Qs=s(" to sync common global style to the body element. In the following example, "),Ws=s("n-global-style"),Xs=s(" will sync the theme provided by "),Zs=s("n-config-provider"),se=s(" to "),ee=s("document.body"),ae=s("."),ne=e("pre",null,[e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"n-config-provider"),s(),e("span",{class:"hljs-attr"},"..."),s(">")]),s(`
    `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"app"),s(" />")]),s(`
    `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"n-global-style"),s(" />")]),s(`
  `),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"template"),s(">")])],-1),te=s("Theme editor"),le=s("Naive-ui provides theme editor to help you edit theme and export the corresponding configuration. It can be placed inside "),oe=s("n-config-provider"),ce=s("."),ie=s("The theme editor is not included in global installation ("),he=s("app.use(naive)"),re=s("). You need to import it explicitly to use it."),pe=e("pre",null,[e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"n-theme-editor"),s(">")]),s(`
    `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"app"),s(" />")]),s(`
  `),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"n-theme-editor"),s(">")]),s(`
`),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"script"),s(">")]),e("span",{class:"language-javascript"},[s(`
  `),e("span",{class:"hljs-keyword"},"import"),s(" { defineComponent } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'vue'"),s(`
  `),e("span",{class:"hljs-keyword"},"import"),s(" { NThemeEditor } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'novice-ui'"),s(`

  `),e("span",{class:"hljs-keyword"},"export"),s(),e("span",{class:"hljs-keyword"},"default"),s(),e("span",{class:"hljs-title function_"},"defineComponent"),s(`({
    `),e("span",{class:"hljs-attr"},"components"),s(`: {
      NThemeEditor
    }
  })
`)]),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"script"),s(">")])],-1),de={key:0,style:{width:"128px"}};function me(d,m,j,_,_e,je){const x=o("edit-on-github-header"),t=o("n-text"),l=o("n-p"),b=o("n-a"),w=o("router-link"),c=o("n-h2"),i=o("n-code"),h=o("n-scrollbar"),r=o("n-card"),u=o("n-li"),k=o("n-ol"),p=o("n-anchor-link"),T=o("n-anchor");return f(),v("div",{class:"doc",style:y(_.wrapperStyle)},[e("div",{style:y(_.contentStyle)},[a(x,{"relative-url":"demo/pages/docs/customize-theme/enUS/index.md",text:"Customizing theme"}),a(l,null,{default:n(()=>[B,a(t,{code:""},{default:n(()=>[P]),_:1}),G]),_:1}),a(l,null,{default:n(()=>[M]),_:1}),a(l,null,{default:n(()=>[E,a(t,{code:""},{default:n(()=>[R]),_:1}),V,a(w,{to:"../components/config-provider",custom:""},{default:n(({navigate:C,href:S})=>[a(b,{href:S,onClick:C},{default:n(()=>[A]),_:2},1032,["href","onClick"])]),_:1}),Y]),_:1}),a(c,{id:"Use-dark-theme"},{default:n(()=>[D]),_:1}),a(l,null,{default:n(()=>[L,a(t,{code:""},{default:n(()=>[q]),_:1}),$,a(t,{code:""},{default:n(()=>[H]),_:1}),J,a(t,{code:""},{default:n(()=>[K]),_:1}),Q,a(t,{code:""},{default:n(()=>[W]),_:1}),X]),_:1}),a(l,null,{default:n(()=>[Z,a(t,{code:""},{default:n(()=>[ss]),_:1}),es,a(t,{code:""},{default:n(()=>[as]),_:1}),ns]),_:1}),a(r,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:n(()=>[a(h,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:n(()=>[a(i,null,{default:n(()=>[ts]),_:1})]),_:1})]),_:1}),a(c,{id:"Customizing-theme-vars-(design-tokens)"},{default:n(()=>[ls]),_:1}),a(l,null,{default:n(()=>[os]),_:1}),a(l,null,{default:n(()=>[cs]),_:1}),a(l,null,{default:n(()=>[is,a(t,{code:""},{default:n(()=>[hs]),_:1}),rs,a(t,{code:""},{default:n(()=>[ps]),_:1}),ds,a(t,{code:""},{default:n(()=>[ms]),_:1}),_s,a(t,{code:""},{default:n(()=>[js]),_:1}),us]),_:1}),a(l,null,{default:n(()=>[gs,a(t,{code:""},{default:n(()=>[fs]),_:1}),vs]),_:1}),a(l,null,{default:n(()=>[ys]),_:1}),a(l,null,{default:n(()=>[xs]),_:1}),a(r,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:n(()=>[a(h,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:n(()=>[a(i,null,{default:n(()=>[bs]),_:1})]),_:1})]),_:1}),a(c,{id:"Customizing-theme-vars-in-TypeScript"},{default:n(()=>[ws]),_:1}),a(l,null,{default:n(()=>[ks]),_:1}),a(r,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:n(()=>[a(h,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:n(()=>[a(i,null,{default:n(()=>[Ts]),_:1})]),_:1})]),_:1}),a(c,{id:"Customizing-component-theme-vars"},{default:n(()=>[Cs]),_:1}),a(l,null,{default:n(()=>[Ss]),_:1}),a(r,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:n(()=>[a(h,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:n(()=>[a(i,null,{default:n(()=>[zs]),_:1})]),_:1})]),_:1}),a(c,{id:"Customizing-theme-vars-under-different-themes"},{default:n(()=>[Os]),_:1}),a(l,null,{default:n(()=>[Fs]),_:1}),a(r,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:n(()=>[a(h,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:n(()=>[a(i,null,{default:n(()=>[Ns]),_:1})]),_:1})]),_:1}),a(c,{id:"Use-the-peers-vars"},{default:n(()=>[Is]),_:1}),a(l,null,{default:n(()=>[Us]),_:1}),a(l,null,{default:n(()=>[Bs,a(t,{code:""},{default:n(()=>[Ps]),_:1}),Gs]),_:1}),a(l,null,{default:n(()=>[Ms]),_:1}),a(r,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:n(()=>[a(h,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:n(()=>[a(i,null,{default:n(()=>[Es]),_:1})]),_:1})]),_:1}),a(c,{id:"Sync-style-of-the-body-element"},{default:n(()=>[Rs]),_:1}),a(l,null,{default:n(()=>[Vs,a(t,{code:""},{default:n(()=>[As]),_:1}),Ys]),_:1}),a(k,null,{default:n(()=>[a(u,null,{default:n(()=>[Ds,a(t,{code:""},{default:n(()=>[Ls]),_:1}),qs]),_:1}),a(u,null,{default:n(()=>[a(t,{code:""},{default:n(()=>[$s]),_:1}),Hs]),_:1})]),_:1}),a(l,null,{default:n(()=>[Js,a(t,{code:""},{default:n(()=>[Ks]),_:1}),Qs,a(t,{code:""},{default:n(()=>[Ws]),_:1}),Xs,a(t,{code:""},{default:n(()=>[Zs]),_:1}),se,a(t,{code:""},{default:n(()=>[ee]),_:1}),ae]),_:1}),a(r,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:n(()=>[a(h,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:n(()=>[a(i,null,{default:n(()=>[ne]),_:1})]),_:1})]),_:1}),a(c,{id:"Theme-editor"},{default:n(()=>[te]),_:1}),a(l,null,{default:n(()=>[le,a(t,{code:""},{default:n(()=>[oe]),_:1}),ce]),_:1}),a(l,null,{default:n(()=>[ie,a(t,{code:""},{default:n(()=>[he]),_:1}),re]),_:1}),a(r,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:n(()=>[a(h,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:n(()=>[a(i,null,{default:n(()=>[pe]),_:1})]),_:1})]),_:1})],4),_.showAnchor?(f(),v("div",de,[a(T,{"internal-scrollable":"",bound:16,type:"block",style:{width:"128px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:n(()=>[a(p,{title:"Use dark theme",href:"#Use-dark-theme"}),a(p,{title:"Customizing theme vars (design tokens)",href:"#Customizing-theme-vars-(design-tokens)"}),a(p,{title:"Customizing theme vars in TypeScript",href:"#Customizing-theme-vars-in-TypeScript"}),a(p,{title:"Customizing component theme vars",href:"#Customizing-component-theme-vars"}),a(p,{title:"Customizing theme vars under different themes",href:"#Customizing-theme-vars-under-different-themes"}),a(p,{title:"Use the peers vars",href:"#Use-the-peers-vars"}),a(p,{title:"Sync style of the body element",href:"#Sync-style-of-the-body-element"}),a(p,{title:"Theme editor",href:"#Theme-editor"})]),_:1})])):I("",!0)],4)}var fe=z(U,[["render",me]]);export{fe as default};
