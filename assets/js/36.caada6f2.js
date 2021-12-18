(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{403:function(t,s,a){"use strict";a.r(s);var e=a(25),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("Flutter中键盘弹起时会改变页面窗口的大小，页面可能会出现布局错乱的问题.如果页面中存在底部定位，那这个问题就更严重了。")]),t._v(" "),a("h4",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),a("p",[t._v("图一键盘未弹起时\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/3/16f695f68e03301b?w=1080&h=1920&f=jpeg&s=126991",alt:"bug003"}}),t._v("\n图二键盘弹起时\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/3/16f695fc482f5e8b?w=1080&h=1920&f=jpeg&s=192373",alt:"bug004"}})]),t._v(" "),a("h4",{attrs:{id:"第一种解决办法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一种解决办法"}},[t._v("#")]),t._v(" 第一种解决办法")]),t._v(" "),a("p",[t._v("设置"),a("code",[t._v("Scaffold")]),t._v("的属性 "),a("code",[t._v("resizeToAvoidBottomPadding")]),t._v(" 为 "),a("code",[t._v("false")])]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Scaffold")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      resizeToAvoidBottomPadding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("设置完之后的效果\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/3/16f697abf3d63dcb?w=1080&h=1920&f=jpeg&s=156885",alt:"bug005"}})]),t._v(" "),a("p",[t._v("注意:如果你跟我一样是在登录页面给这个属性的话，input输入框获取焦点的时候就无法把页面向上移了，会把第二个input框遮住")]),t._v(" "),a("p",[t._v("如图:这并不是我们想要的结果\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/3/16f697b0d1c87ea7?w=1080&h=1920&f=jpeg&s=158366",alt:"bug006"}})]),t._v(" "),a("h4",{attrs:{id:"第二种解决办法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二种解决办法"}},[t._v("#")]),t._v(" 第二种解决办法")]),t._v(" "),a("p",[t._v("Scaffold的body包裹一个ListView（就是让这个视图具有弹性效果）,"),a("br"),t._v("\n把原本的布局放到ListView的children里面"),a("br"),t._v(" "),a("strong",[t._v("注意:")]),t._v(" 不要设置"),a("code",[t._v("resizeToAvoidBottomPadding: false")]),t._v("和"),a("code",[t._v("resizeToAvoidBottomInset: false")]),t._v("不然键盘还是会遮住输入框")])])}),[],!1,null,null,null);s.default=r.exports}}]);