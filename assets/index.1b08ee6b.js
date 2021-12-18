import{_ as S,u as F,a as N,b as z,c as g,r as c,o as f,d as v,e as a,f as n,w as l,n as y,g as B,h as s}from"./index.95fbdc71.js";import"./axios.dd49c521.js";const P={components:{},setup(){const d=F(),_=N(()=>!d.value),m=d;return{showAnchor:_,displayMode:z(),wrapperStyle:g(()=>m.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:g(()=>_.value?"width: calc(100% - 164px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"demo/pages/docs/customize-theme/zhCN/index.md"}}},G=s("Novice UI \u901A\u8FC7\u4F7F\u7528 "),M=s("n-config-provider"),I=s(" \u8C03\u6574\u4E3B\u9898\u3002"),E=s("\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u6240\u6709\u7EC4\u4EF6\u5747\u4E3A\u4EAE\u8272\u4E3B\u9898\uFF0C\u65E0\u9700\u4EFB\u4F55\u914D\u7F6E\u3002"),R=s("\u4E86\u89E3\u66F4\u591A\u5173\u4E8E "),V=s("n-config-provider"),A=s(" \u7684\u4FE1\u606F\uFF0C\u53C2\u89C1 "),D=s("\u5168\u5C40\u5316\u914D\u7F6E"),U=s("\u3002"),L=s("\u4F7F\u7528\u6697\u8272\u4E3B\u9898"),$=s("\u5C06 "),q=s("n-config-provider"),H=s(" \u7684 "),J=s("theme"),K=s(" \u8BBE\u4E3A\u4ECE novice-ui \u5BFC\u5165\u7684 "),Q=s("darkTheme"),W=s(" \u6765\u8BBE\u5B9A\u6697\u8272\u4E3B\u9898\u3002"),X=s("\u82E5 "),Y=s("theme"),Z=s(" \u4E3A "),ss=s("undefined"),as=s(" \u5219\u4E0D\u4F1A\u5F71\u54CD\u5185\u90E8\u7EC4\u4EF6\u7684\u4E3B\u9898\u3002"),ns=a("pre",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"n-config-provider"),s(),a("span",{class:"hljs-attr"},":theme"),s("="),a("span",{class:"hljs-string"},'"darkTheme"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"app"),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { defineComponent } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { darkTheme } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'novice-ui'"),s(`

  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(),a("span",{class:"hljs-title function_"},"defineComponent"),s(`({
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        darkTheme
      }
    }
  })
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])],-1),ls=s("\u8C03\u6574\u4E3B\u9898\u53D8\u91CF"),es=s("\u4F60\u4E0D\u9700\u8981\u5199\u4EFB\u4F55 CSS\uFF08Scss\u3001Less...\uFF09\u3002"),ts=s("\u914D\u7F6E\u7684\u5168\u5C40\u4E3B\u9898\u53D8\u91CF\u4F1A\u5BF9\u540E\u4EE3\u7EC4\u4EF6\u751F\u6548\u7684\u4E3B\u9898\u53D8\u91CF\u8986\u76D6\u3002"),cs=s("\u901A\u8FC7\u8BBE\u5B9A "),os=s("n-config-provider"),ps=s(" \u7684 "),hs=s("theme-overrides"),rs=s(" \u6765\u8C03\u6574\u4E3B\u9898\u53D8\u91CF\u3002novice-ui \u5BFC\u51FA\u4E86 "),is=s("GlobalThemeOverrides"),ds=s(" \u7C7B\u578B\u5E2E\u52A9\u4F60\u5B9A\u4E49\u4E3B\u9898\u3002"),_s=s("\u5177\u4F53\u53EF\u4F7F\u7528\u53D8\u91CF\u8BF7\u53C2\u8003 "),js=s("GlobalThemeOverrides"),ms=s(" \u7C7B\u578B\u63D0\u793A\u3002"),us=s("\u5982\u679C\u60F3\u8981\u67E5\u770B\u66F4\u591A\u7684\u4E3B\u9898\u53D8\u91CF\uFF0C\u53EF\u5728 Novice UI \u4E3B\u9875\u7684\u53F3\u4E0B\u89D2\u7684 edit \u6309\u94AE\u67E5\u770B\u3002"),gs=s("\u53EF\u4EE5\u4FEE\u6539\u5BF9\u5E94\u7684\u4E3B\u9898\u53D8\u91CF\uFF0C\u5BFC\u51FA\u540E\u53EF\u4EE5\u62FF\u5230 themeOverrides \u5BF9\u8C61\u3002"),fs=a("pre",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { NConfigProvider } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'novice-ui'"),s(`

  `),a("span",{class:"hljs-comment"},[s(`/**
   * js \u6587\u4EF6\u4E0B\u4F7F\u7528\u8FD9\u4E2A\u505A\u7C7B\u578B\u63D0\u793A
   * `),a("span",{class:"hljs-doctag"},"@type"),s(` import('novice-ui').GlobalThemeOverrides
   */`)]),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(` themeOverrides = {
    `),a("span",{class:"hljs-attr"},"common"),s(`: {
      `),a("span",{class:"hljs-attr"},"primaryColor"),s(": "),a("span",{class:"hljs-string"},"'#FF0000'"),s(`
    },
    `),a("span",{class:"hljs-title class_"},"Button"),s(`: {
      `),a("span",{class:"hljs-attr"},"textColor"),s(": "),a("span",{class:"hljs-string"},"'#FF0000'"),s(`
    },
    `),a("span",{class:"hljs-title class_"},"Select"),s(`: {
      `),a("span",{class:"hljs-attr"},"peers"),s(`: {
        `),a("span",{class:"hljs-title class_"},"InternalSelection"),s(`: {
          `),a("span",{class:"hljs-attr"},"textColor"),s(": "),a("span",{class:"hljs-string"},"'#FF0000'"),s(`
        }
      }
    }
    `),a("span",{class:"hljs-comment"},"// ..."),s(`
  }

  `),a("span",{class:"hljs-comment"},"// ..."),s(`
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"n-config-provider"),s(),a("span",{class:"hljs-attr"},":theme-overrides"),s("="),a("span",{class:"hljs-string"},'"themeOverrides"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"my-app"),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")])],-1),vs=s("TS \u4E0B\u4F7F\u7528\u4E3B\u9898\u53D8\u91CF"),ys=s("\u5982\u679C\u4F60\u6B63\u5728\u4F7F\u7528 ts \u5199\u4EE3\u7801\uFF0C\u8FD9\u5757\u6BD4\u8F83\u9002\u5408\u4F60\u3002"),xs=a("pre",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { NConfigProvider, "),a("span",{class:"hljs-title class_"},"GlobalThemeOverrides"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'novice-ui'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-attr"},"themeOverrides"),s(": "),a("span",{class:"hljs-title class_"},"GlobalThemeOverrides"),s(` = {
    `),a("span",{class:"hljs-attr"},"common"),s(`: {
      `),a("span",{class:"hljs-attr"},"primaryColor"),s(": "),a("span",{class:"hljs-string"},"'#FF0000'"),s(`
    },
    `),a("span",{class:"hljs-title class_"},"Button"),s(`: {
      `),a("span",{class:"hljs-attr"},"textColor"),s(": "),a("span",{class:"hljs-string"},"'#FF0000'"),s(`
    }
  }

  `),a("span",{class:"hljs-comment"},"// ..."),s(`
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"n-config-provider"),s(),a("span",{class:"hljs-attr"},":theme-overrides"),s("="),a("span",{class:"hljs-string"},'"themeOverrides"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"my-app"),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")])],-1),bs=s("\u8C03\u6574\u7EC4\u4EF6\u4E3B\u9898\u53D8\u91CF"),ks=s("\u7EC4\u4EF6\u4E3B\u9898\u53D8\u91CF\u4F7F\u7528\u65B9\u6CD5\u540C\u5168\u5C40\u4E3B\u9898\u53D8\u91CF\u4F7F\u7528\u65B9\u6CD5\uFF0C\u5E76\u4E14\u7EC4\u4EF6\u4E3B\u9898\u53D8\u91CF\u4F1A\u8986\u76D6\u5168\u5C40\u4E3B\u9898\u53D8\u91CF\u3002"),ws=a("pre",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"SelectProps"),s(", "),a("span",{class:"hljs-title class_"},"ButtonProps"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'novice-ui'"),s(`

  type `),a("span",{class:"hljs-title class_"},"SelectThemeOverrides"),s(" = "),a("span",{class:"hljs-title class_"},"NonNullable"),s("<"),a("span",{class:"hljs-title class_"},"SelectProps"),s("["),a("span",{class:"hljs-string"},"'themeOverrides'"),s(`]>
  type `),a("span",{class:"hljs-title class_"},"ButtonThemeOverrides"),s(" = "),a("span",{class:"hljs-title class_"},"NonNullable"),s("<"),a("span",{class:"hljs-title class_"},"ButtonProps"),s("["),a("span",{class:"hljs-string"},"'themeOverrides'"),s(`]>

  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-attr"},"selectThemeOverrides"),s(": "),a("span",{class:"hljs-title class_"},"SelectThemeOverrides"),s(` = {
    `),a("span",{class:"hljs-attr"},"menuBoxShadow"),s(`:
      `),a("span",{class:"hljs-string"},"'0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)'"),s(`,
    `),a("span",{class:"hljs-attr"},"peers"),s(`: {
      `),a("span",{class:"hljs-title class_"},"InternalSelection"),s(`: {
        `),a("span",{class:"hljs-attr"},"textColor"),s(": "),a("span",{class:"hljs-string"},"'#FF0000'"),s(`,
        `),a("span",{class:"hljs-attr"},"heightMedium"),s(": "),a("span",{class:"hljs-string"},"'42px'"),s(`
      }
    }
  }
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-attr"},"buttonThemeOverrides"),s(": "),a("span",{class:"hljs-title class_"},"ButtonThemeOverrides"),s(` = {
    `),a("span",{class:"hljs-attr"},"heightMedium"),s(": "),a("span",{class:"hljs-string"},"'40px'"),s(`,
    `),a("span",{class:"hljs-attr"},"textColor"),s(": "),a("span",{class:"hljs-string"},"'rgba(24, 127, 231, 1)'"),s(`
  }

  `),a("span",{class:"hljs-comment"},"// ..."),s(`
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"n-select"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:value"),s("="),a("span",{class:"hljs-string"},'"value"'),s(`
    `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(`
    `),a("span",{class:"hljs-attr"},":theme-overrides"),s("="),a("span",{class:"hljs-string"},'"selectThemeOverrides"'),s(`
  />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"n-button"),s(),a("span",{class:"hljs-attr"},":theme-overrides"),s("="),a("span",{class:"hljs-string"},'"buttonThemeOverrides"'),s(">")]),s("theme"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"n-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")])],-1),Ts=s("\u4E0D\u540C\u4E3B\u9898\u4E0B\u8C03\u6574\u4E3B\u9898\u53D8\u91CF"),Os=s("\u5982\u679C\u4F60\u60F3\u8981\u5728\u4EAE\u8272\u548C\u6697\u8272\u4E0A\u540C\u65F6\u4F7F\u7528\u4E0D\u540C\u7684\u4E3B\u9898\u53D8\u91CF\uFF0C\u53EF\u4EE5\u6765\u770B\u770B\u8FD9\u4E2A\u3002"),Cs=a("pre",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { NConfigProvider, darkTheme } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'novice-ui'"),s(`

  `),a("span",{class:"hljs-comment"},[s(`/**
   * `),a("span",{class:"hljs-doctag"},"@type"),s(` import('novice-ui').GlobalThemeOverrides
   */`)]),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(` lightThemeOverrides = {
    `),a("span",{class:"hljs-attr"},"common"),s(`: {
      `),a("span",{class:"hljs-attr"},"primaryColor"),s(": "),a("span",{class:"hljs-string"},"'#000000'"),s(`
    }
    `),a("span",{class:"hljs-comment"},"// ..."),s(`
  }

  `),a("span",{class:"hljs-keyword"},"const"),s(` darkThemeOverrides = {
    `),a("span",{class:"hljs-attr"},"common"),s(`: {
      `),a("span",{class:"hljs-attr"},"primaryColor"),s(": "),a("span",{class:"hljs-string"},"'#FFFFFF'"),s(`
    }
    `),a("span",{class:"hljs-comment"},"// ..."),s(`
  }

  `),a("span",{class:"hljs-keyword"},"const"),s(" theme = "),a("span",{class:"hljs-literal"},"null"),s(`
  `),a("span",{class:"hljs-comment"},"// ..."),s(`
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"n-config-provider"),s(`
    `),a("span",{class:"hljs-attr"},":theme"),s("="),a("span",{class:"hljs-string"},'"theme"'),s(`
    `),a("span",{class:"hljs-attr"},":theme-overrides"),s("="),a("span",{class:"hljs-string"},'"theme === null ? lightThemeOverrides : darkThemeOverrides"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"my-app"),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")])],-1),Ss=s("\u4F7F\u7528 peers \u4E3B\u9898\u53D8\u91CF"),Fs=s("\u5F88\u591A\u65F6\u5019\u7EC4\u4EF6\u5185\u90E8\u90FD\u4F1A\u590D\u7528\u53E6\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u56E0\u6B64\u51FA\u73B0\u4E86 peers \u7684\u4E3B\u9898\u53D8\u91CF\u3002"),Ns=s("peers \u76F8\u5173\u7684\u4E3B\u9898\u53D8\u91CF\u8FD8\u6CA1\u6709\u66B4\u9732\uFF0C\u4F7F\u7528 "),zs=s("GlobalThemeOverrides"),Bs=s(" \u53EF\u4EE5\u67E5\u770B\u5BF9\u5E94\u7EC4\u4EF6\u7684 peers \u53D8\u91CF\u3002"),Ps=s("\u5177\u4F53\u54EA\u4E9B\u53EF\u4F7F\u7528\u7684 peers \u540E\u7EED\u4F1A\u66F4\u65B0\u3002"),Gs=a("pre",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { NConfigProvider, "),a("span",{class:"hljs-title class_"},"GlobalThemeOverrides"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'novice-ui'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-attr"},"themeOverrides"),s(": "),a("span",{class:"hljs-title class_"},"GlobalThemeOverrides"),s(` = {
    `),a("span",{class:"hljs-title class_"},"Select"),s(`: {
      `),a("span",{class:"hljs-attr"},"peers"),s(`: {
        `),a("span",{class:"hljs-title class_"},"InternalSelection"),s(`: {
          `),a("span",{class:"hljs-attr"},"textColor"),s(": "),a("span",{class:"hljs-string"},"'#FF0000'"),s(`
        },
        `),a("span",{class:"hljs-title class_"},"InternalSelectMenu"),s(`: {
          `),a("span",{class:"hljs-attr"},"borderRadius"),s(": "),a("span",{class:"hljs-string"},"'6px'"),s(`
        }
      }
    },
    `),a("span",{class:"hljs-title class_"},"DataTable"),s(`: {
      `),a("span",{class:"hljs-attr"},"paginationMargin"),s(": "),a("span",{class:"hljs-string"},"'40px 0 0 0'"),s(`,
      `),a("span",{class:"hljs-attr"},"peers"),s(`: {
        `),a("span",{class:"hljs-title class_"},"Empty"),s(`: {
          `),a("span",{class:"hljs-attr"},"textColor"),s(": "),a("span",{class:"hljs-string"},"'#ccc'"),s(`
        },
        `),a("span",{class:"hljs-title class_"},"Pagination"),s(`: {
          `),a("span",{class:"hljs-attr"},"itemTextColor"),s(": "),a("span",{class:"hljs-string"},"'#ccc'"),s(`
        }
      }
    }
    `),a("span",{class:"hljs-comment"},"// ..."),s(`
  }
  `),a("span",{class:"hljs-comment"},"// ..."),s(`
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"n-config-provider"),s(),a("span",{class:"hljs-attr"},":theme-overrides"),s("="),a("span",{class:"hljs-string"},'"themeOverrides"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"my-app"),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")])],-1),Ms=s("\u540C\u6B65 body \u5143\u7D20\u7684\u6837\u5F0F"),Is=s("\u51FA\u4E8E\u4EE5\u4E0B\u539F\u56E0\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u5C06\u67D0\u4E9B\u6837\u5F0F\u8BBE\u5B9A\u5728 "),Es=s("document.body"),Rs=s(" \u4E0A\u3002"),Vs=s("novice-ui \u4F1A\u8BBE\u5B9A\u4E00\u4E9B\u975E\u54CD\u5E94\u5F0F\u7684\u5168\u5C40\u6837\u5F0F\uFF08\u4F8B\u5982\u5B57\u4F53\uFF09\uFF0C\u5B83\u4EEC\u5728\u9ED8\u8BA4\u72B6\u51B5\u4E0B\u5DE5\u4F5C\u826F\u597D\uFF0C\u4F46\u662F\u4E0D\u80FD\u54CD\u5E94\u4E3B\u9898\u7684\u53D8\u5316\u3002"),As=s("n-config-provider"),Ds=s(" \u65E0\u6CD5\u5C06\u5168\u5C40\u6837\u5F0F\u540C\u6B65\u5230\u5B83\u4EE5\u5916\u7684\u5730\u65B9\uFF08\u4F8B\u5982 body \u80CC\u666F\u8272\uFF09\u3002"),Us=s("\u901A\u8FC7\u4F7F\u7528 "),Ls=s("n-global-style"),$s=s(" \u53EF\u4EE5\u5C06\u5E38\u89C1\u7684\u5168\u5C40\u6837\u5F0F\u540C\u6B65\u5230 body \u4E0A\u3002\u5728\u4E0B\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C"),qs=s("n-global-style"),Hs=s(" \u4F1A\u5C06 "),Js=s("n-config-provider"),Ks=s(" \u63D0\u4F9B\u7684\u4E3B\u9898\u540C\u6B65\u5230 "),Qs=s("document.body"),Ws=s(" \u4E0A\u3002"),Xs=a("pre",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"app"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"n-global-style"),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")])],-1),Ys=s("\u4E3B\u9898\u7F16\u8F91\u5668"),Zs=s("novice-ui \u63D0\u4F9B\u4E3B\u9898\u7F16\u8F91\u5668\u5E2E\u52A9\u4F60\u65B9\u4FBF\u7684\u7F16\u8F91\u4E3B\u9898\u5E76\u5BFC\u51FA\u5BF9\u5E94\u914D\u7F6E\u3002\u5B83\u53EF\u4EE5\u88AB\u5D4C\u5957\u4E8E "),sa=s("n-config-provider"),aa=s(" \u4E2D\u3002"),na=s("\u4E3B\u9898\u7F16\u8F91\u5668\u4E0D\u5305\u542B\u5728\u5168\u5C40\u5B89\u88C5\u4E2D\uFF08"),la=s("app.use(novice)"),ea=s("\uFF09\u3002\u4F60\u9700\u8981\u663E\u5F0F\u5F15\u5165\u6765\u4F7F\u7528\u5B83\u3002"),ta=a("pre",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"n-theme-editor"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"app"),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"n-theme-editor"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { defineComponent } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { NThemeEditor } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'novice-ui'"),s(`

  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(),a("span",{class:"hljs-title function_"},"defineComponent"),s(`({
    `),a("span",{class:"hljs-attr"},"components"),s(`: {
      NThemeEditor
    }
  })
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])],-1),ca={key:0,style:{width:"128px"}};function oa(d,_,m,j,pa,ha){const x=c("edit-on-github-header"),t=c("n-text"),e=c("n-p"),b=c("n-a"),k=c("router-link"),o=c("n-h2"),p=c("n-code"),h=c("n-scrollbar"),r=c("n-card"),u=c("n-li"),w=c("n-ol"),i=c("n-anchor-link"),T=c("n-anchor");return f(),v("div",{class:"doc",style:y(j.wrapperStyle)},[a("div",{style:y(j.contentStyle)},[n(x,{"relative-url":"demo/pages/docs/customize-theme/zhCN/index.md",text:"\u8C03\u6574\u4E3B\u9898"}),n(e,null,{default:l(()=>[G,n(t,{code:""},{default:l(()=>[M]),_:1}),I]),_:1}),n(e,null,{default:l(()=>[E]),_:1}),n(e,null,{default:l(()=>[R,n(t,{code:""},{default:l(()=>[V]),_:1}),A,n(k,{to:"../components/config-provider",custom:""},{default:l(({navigate:O,href:C})=>[n(b,{href:C,onClick:O},{default:l(()=>[D]),_:2},1032,["href","onClick"])]),_:1}),U]),_:1}),n(o,{id:"\u4F7F\u7528\u6697\u8272\u4E3B\u9898"},{default:l(()=>[L]),_:1}),n(e,null,{default:l(()=>[$,n(t,{code:""},{default:l(()=>[q]),_:1}),H,n(t,{code:""},{default:l(()=>[J]),_:1}),K,n(t,{code:""},{default:l(()=>[Q]),_:1}),W]),_:1}),n(e,null,{default:l(()=>[X,n(t,{code:""},{default:l(()=>[Y]),_:1}),Z,n(t,{code:""},{default:l(()=>[ss]),_:1}),as]),_:1}),n(r,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:l(()=>[n(h,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:l(()=>[n(p,null,{default:l(()=>[ns]),_:1})]),_:1})]),_:1}),n(o,{id:"\u8C03\u6574\u4E3B\u9898\u53D8\u91CF"},{default:l(()=>[ls]),_:1}),n(e,null,{default:l(()=>[es]),_:1}),n(e,null,{default:l(()=>[ts]),_:1}),n(e,null,{default:l(()=>[cs,n(t,{code:""},{default:l(()=>[os]),_:1}),ps,n(t,{code:""},{default:l(()=>[hs]),_:1}),rs,n(t,{code:""},{default:l(()=>[is]),_:1}),ds]),_:1}),n(e,null,{default:l(()=>[_s,n(t,{code:""},{default:l(()=>[js]),_:1}),ms]),_:1}),n(e,null,{default:l(()=>[us]),_:1}),n(e,null,{default:l(()=>[gs]),_:1}),n(r,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:l(()=>[n(h,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:l(()=>[n(p,null,{default:l(()=>[fs]),_:1})]),_:1})]),_:1}),n(o,{id:"TS-\u4E0B\u4F7F\u7528\u4E3B\u9898\u53D8\u91CF"},{default:l(()=>[vs]),_:1}),n(e,null,{default:l(()=>[ys]),_:1}),n(r,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:l(()=>[n(h,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:l(()=>[n(p,null,{default:l(()=>[xs]),_:1})]),_:1})]),_:1}),n(o,{id:"\u8C03\u6574\u7EC4\u4EF6\u4E3B\u9898\u53D8\u91CF"},{default:l(()=>[bs]),_:1}),n(e,null,{default:l(()=>[ks]),_:1}),n(r,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:l(()=>[n(h,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:l(()=>[n(p,null,{default:l(()=>[ws]),_:1})]),_:1})]),_:1}),n(o,{id:"\u4E0D\u540C\u4E3B\u9898\u4E0B\u8C03\u6574\u4E3B\u9898\u53D8\u91CF"},{default:l(()=>[Ts]),_:1}),n(e,null,{default:l(()=>[Os]),_:1}),n(r,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:l(()=>[n(h,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:l(()=>[n(p,null,{default:l(()=>[Cs]),_:1})]),_:1})]),_:1}),n(o,{id:"\u4F7F\u7528-peers-\u4E3B\u9898\u53D8\u91CF"},{default:l(()=>[Ss]),_:1}),n(e,null,{default:l(()=>[Fs]),_:1}),n(e,null,{default:l(()=>[Ns,n(t,{code:""},{default:l(()=>[zs]),_:1}),Bs]),_:1}),n(e,null,{default:l(()=>[Ps]),_:1}),n(r,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:l(()=>[n(h,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:l(()=>[n(p,null,{default:l(()=>[Gs]),_:1})]),_:1})]),_:1}),n(o,{id:"\u540C\u6B65-body-\u5143\u7D20\u7684\u6837\u5F0F"},{default:l(()=>[Ms]),_:1}),n(e,null,{default:l(()=>[Is,n(t,{code:""},{default:l(()=>[Es]),_:1}),Rs]),_:1}),n(w,null,{default:l(()=>[n(u,null,{default:l(()=>[Vs]),_:1}),n(u,null,{default:l(()=>[n(t,{code:""},{default:l(()=>[As]),_:1}),Ds]),_:1})]),_:1}),n(e,null,{default:l(()=>[Us,n(t,{code:""},{default:l(()=>[Ls]),_:1}),$s,n(t,{code:""},{default:l(()=>[qs]),_:1}),Hs,n(t,{code:""},{default:l(()=>[Js]),_:1}),Ks,n(t,{code:""},{default:l(()=>[Qs]),_:1}),Ws]),_:1}),n(r,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:l(()=>[n(h,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:l(()=>[n(p,null,{default:l(()=>[Xs]),_:1})]),_:1})]),_:1}),n(o,{id:"\u4E3B\u9898\u7F16\u8F91\u5668"},{default:l(()=>[Ys]),_:1}),n(e,null,{default:l(()=>[Zs,n(t,{code:""},{default:l(()=>[sa]),_:1}),aa]),_:1}),n(e,null,{default:l(()=>[na,n(t,{code:""},{default:l(()=>[la]),_:1}),ea]),_:1}),n(r,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:l(()=>[n(h,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:l(()=>[n(p,null,{default:l(()=>[ta]),_:1})]),_:1})]),_:1})],4),j.showAnchor?(f(),v("div",ca,[n(T,{"internal-scrollable":"",bound:16,type:"block",style:{width:"128px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:l(()=>[n(i,{title:"\u4F7F\u7528\u6697\u8272\u4E3B\u9898",href:"#\u4F7F\u7528\u6697\u8272\u4E3B\u9898"}),n(i,{title:"\u8C03\u6574\u4E3B\u9898\u53D8\u91CF",href:"#\u8C03\u6574\u4E3B\u9898\u53D8\u91CF"}),n(i,{title:"TS \u4E0B\u4F7F\u7528\u4E3B\u9898\u53D8\u91CF",href:"#TS-\u4E0B\u4F7F\u7528\u4E3B\u9898\u53D8\u91CF"}),n(i,{title:"\u8C03\u6574\u7EC4\u4EF6\u4E3B\u9898\u53D8\u91CF",href:"#\u8C03\u6574\u7EC4\u4EF6\u4E3B\u9898\u53D8\u91CF"}),n(i,{title:"\u4E0D\u540C\u4E3B\u9898\u4E0B\u8C03\u6574\u4E3B\u9898\u53D8\u91CF",href:"#\u4E0D\u540C\u4E3B\u9898\u4E0B\u8C03\u6574\u4E3B\u9898\u53D8\u91CF"}),n(i,{title:"\u4F7F\u7528 peers \u4E3B\u9898\u53D8\u91CF",href:"#\u4F7F\u7528-peers-\u4E3B\u9898\u53D8\u91CF"}),n(i,{title:"\u540C\u6B65 body \u5143\u7D20\u7684\u6837\u5F0F",href:"#\u540C\u6B65-body-\u5143\u7D20\u7684\u6837\u5F0F"}),n(i,{title:"\u4E3B\u9898\u7F16\u8F91\u5668",href:"#\u4E3B\u9898\u7F16\u8F91\u5668"})]),_:1})])):B("",!0)],4)}var da=S(P,[["render",oa]]);export{da as default};
