import{k as x,m as v,_ as y,r as s,o as u,j as p,w as t,e,f as o,h as n,c as $,u as T,a as k,b as U,d as F,n as S,g as M}from"./index.95fbdc71.js";import{A as N}from"./Add.26334d2a.js";import"./axios.dd49c521.js";const z=x({setup(){return{tags:v(["teacher","programmer"])}}}),P=n(" Basic "),R={class:"demo-card__view"};function I(a,d,r,i,A,b){const m=s("n-dynamic-tags"),_=s("component-demo");return u(),p(_,{"demo-file-name":"basic","relative-url":"src/dynamic-tags/demos/enUS/basic.demo.md",title:"Basic",code:"%3Ctemplate%3E%0A%20%20%3Cn-dynamic-tags%20v-model%3Avalue%3D%22tags%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20tags%3A%20ref(%5B'teacher'%2C%20'programmer'%5D)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:t(()=>[P]),content:t(()=>[]),demo:t(()=>[e("div",R,[o(m,{value:a.tags,"onUpdate:value":d[0]||(d[0]=c=>a.tags=c)},null,8,["value"])])]),_:1})}var j=y(z,[["render",I]]);const q=x({setup(){return{tags:v(["teacher","programmer"])}}}),W=n(" Max Tag Count "),O={class:"demo-card__view"};function Y(a,d,r,i,A,b){const m=s("n-dynamic-tags"),_=s("component-demo");return u(),p(_,{"demo-file-name":"max","relative-url":"src/dynamic-tags/demos/enUS/max.demo.md",title:"Max Tag Count",code:"%3Ctemplate%3E%0A%20%20%3Cn-dynamic-tags%20v-model%3Avalue%3D%22tags%22%20%3Amax%3D%223%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20tags%3A%20ref(%5B'teacher'%2C%20'programmer'%5D)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:t(()=>[W]),content:t(()=>[]),demo:t(()=>[e("div",O,[o(m,{value:a.tags,"onUpdate:value":d[0]||(d[0]=c=>a.tags=c),max:3},null,8,["value"])])]),_:1})}var G=y(q,[["render",Y]]);const H=x({setup(){return{model:v({tags:["teacher","programmer"]}),rules:{tags:{trigger:["change"],validator(a,d){return d.length>=5?new Error("Up to 4 tags"):!0}}}}}}),J=n(" Use in Form "),K={class:"demo-card__view"};function L(a,d,r,i,A,b){const m=s("n-dynamic-tags"),_=s("n-form-item"),c=s("n-form"),g=s("component-demo");return u(),p(g,{"demo-file-name":"form","relative-url":"src/dynamic-tags/demos/enUS/form.demo.md",title:"Use in Form",code:"%3Ctemplate%3E%0A%20%20%3Cn-form%20%3Amodel%3D%22model%22%20%3Arules%3D%22rules%22%3E%0A%20%20%20%20%3Cn-form-item%20path%3D%22tags%22%20%3Ashow-label%3D%22false%22%3E%0A%20%20%20%20%20%20%3Cn-dynamic-tags%20v-model%3Avalue%3D%22model.tags%22%20%2F%3E%0A%20%20%20%20%3C%2Fn-form-item%3E%0A%20%20%3C%2Fn-form%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20model%3A%20ref(%7B%0A%20%20%20%20%20%20%20%20tags%3A%20%5B'teacher'%2C%20'programmer'%5D%0A%20%20%20%20%20%20%7D)%2C%0A%20%20%20%20%20%20rules%3A%20%7B%0A%20%20%20%20%20%20%20%20tags%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20trigger%3A%20%5B'change'%5D%2C%0A%20%20%20%20%20%20%20%20%20%20validator%20(rule%2C%20value)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(value.length%20%3E%3D%205)%20return%20new%20Error('Up%20to%204%20tags')%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20true%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:t(()=>[J]),content:t(()=>[]),demo:t(()=>[e("div",K,[o(c,{model:a.model,rules:a.rules},{default:t(()=>[o(_,{path:"tags","show-label":!1},{default:t(()=>[o(m,{value:a.model.tags,"onUpdate:value":d[0]||(d[0]=D=>a.model.tags=D)},null,8,["value"])]),_:1})]),_:1},8,["model","rules"])])]),_:1})}var Q=y(H,[["render",L]]);const X=x({components:{Add:N},setup(){const a=v(""),d=$(()=>{if(a.value===null)return[];const r=a.value.split("@")[0],i=a.value.split("@")[1];return i?[{label:r+"@"+i,value:r+"@"+i}]:["@gmail.com","@163.com","@qq.com"].map(A=>({label:r+A,value:r+A}))});return{tags:v(["Teacher","Programmer"]),inputValue:a,options:d}}}),Z=n(" Customizing Input or Trigger Element "),e2=n("You can replace a dynamic-tags input or trigger element with another component."),t2={class:"demo-card__view"},o2=n(" New Tag ");function n2(a,d,r,i,A,b){const m=s("n-p"),_=s("n-auto-complete"),c=s("Add"),g=s("n-icon"),D=s("n-button"),B=s("n-dynamic-tags"),E=s("component-demo");return u(),p(E,{"demo-file-name":"slot","relative-url":"src/dynamic-tags/demos/enUS/slot.demo.md",title:"Customizing Input or Trigger Element",code:"%3Ctemplate%3E%0A%20%20%3Cn-dynamic-tags%20v-model%3Avalue%3D%22tags%22%3E%0A%20%20%20%20%3Ctemplate%20%23input%3D%22%7B%20submit%20%7D%22%3E%0A%20%20%20%20%20%20%3Cn-auto-complete%0A%20%20%20%20%20%20%20%20size%3D%22small%22%0A%20%20%20%20%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%20%20%20%20v-model%3Avalue%3D%22inputValue%22%0A%20%20%20%20%20%20%20%20placeholder%3D%22Email%22%0A%20%20%20%20%20%20%20%20%3Aclear-after-select%3D%22true%22%0A%20%20%20%20%20%20%20%20%40select%3D%22submit(%24event)%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3Ctemplate%20%23trigger%3D%22%7B%20activate%2C%20disabled%20%7D%22%3E%0A%20%20%20%20%20%20%3Cn-button%0A%20%20%20%20%20%20%20%20size%3D%22small%22%0A%20%20%20%20%20%20%20%20%40click%3D%22activate()%22%0A%20%20%20%20%20%20%20%20type%3D%22primary%22%0A%20%20%20%20%20%20%20%20dashed%0A%20%20%20%20%20%20%20%20%3Adisabled%3D%22disabled%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAdd%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fn-icon%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%20%20New%20Tag%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fn-dynamic-tags%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%2C%20computed%20%7D%20from%20'vue'%0Aimport%20%7B%20Add%20%7D%20from%20'%40vicons%2Fionicons5'%0Aexport%20default%20defineComponent(%7B%0A%20%20components%3A%20%7B%0A%20%20%20%20Add%0A%20%20%7D%2C%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20inputValueRef%20%3D%20ref('')%0A%20%20%20%20const%20options%20%3D%20computed(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20if%20(inputValueRef.value%20%3D%3D%3D%20null)%20%7B%0A%20%20%20%20%20%20%20%20return%20%5B%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20const%20prefix%20%3D%20inputValueRef.value.split('%40')%5B0%5D%0A%20%20%20%20%20%20const%20inputSuffix%20%3D%20inputValueRef.value.split('%40')%5B1%5D%0A%20%20%20%20%20%20if%20(inputSuffix)%20%7B%0A%20%20%20%20%20%20%20%20return%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20prefix%20%2B%20'%40'%20%2B%20inputSuffix%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20prefix%20%2B%20'%40'%20%2B%20inputSuffix%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20return%20%5B'%40gmail.com'%2C%20'%40163.com'%2C%20'%40qq.com'%5D.map((suffix)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20prefix%20%2B%20suffix%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20prefix%20%2B%20suffix%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D)%0A%20%20%20%20%7D)%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20tags%3A%20ref(%5B'Teacher'%2C%20'Programmer'%5D)%2C%0A%20%20%20%20%20%20inputValue%3A%20inputValueRef%2C%0A%20%20%20%20%20%20options%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:t(()=>[Z]),content:t(()=>[o(m,null,{default:t(()=>[e2]),_:1})]),demo:t(()=>[e("div",t2,[o(B,{value:a.tags,"onUpdate:value":d[1]||(d[1]=h=>a.tags=h)},{input:t(({submit:h})=>[o(_,{size:"small",options:a.options,value:a.inputValue,"onUpdate:value":d[0]||(d[0]=f=>a.inputValue=f),placeholder:"Email","clear-after-select":!0,onSelect:f=>h(f)},null,8,["options","value","onSelect"])]),trigger:t(({activate:h,disabled:f})=>[o(D,{size:"small",onClick:l=>h(),type:"primary",dashed:"",disabled:f},{icon:t(()=>[o(g,null,{default:t(()=>[o(c)]),_:1})]),default:t(()=>[o2]),_:2},1032,["onClick","disabled"])]),_:1},8,["value"])])]),_:1})}var l2=y(X,[["render",n2]]);const s2={components:{basicDemo:j,maxDemo:G,formDemo:Q,slotDemo:l2},setup(){const a=T(),d=k(()=>!a.value),r=a;return{showAnchor:d,displayMode:U(),wrapperStyle:$(()=>r.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:$(()=>d.value?"width: calc(100% - 164px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"src/dynamic-tags/demos/enUS/index.demo-entry.md"}}},a2=n("Turn tags to inputs and back again."),d2=n("Demos"),i2=n("API"),r2=n("DynamicTags Props"),u2={class:"md-table-wrapper"},c2=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Default"),e("th",null,"Description")])],-1),m2=e("td",null,"closable",-1),_2=n("boolean"),p2=n("true"),f2=e("td",null,"Whether the tag is closable.",-1),A2=e("td",null,"color",-1),h2=n("{ color?: string, borderColor?: string, textColor?: string }"),g2=n("undefined"),D2=n("Color of the tag. Note: it will override the color set by "),C2=n("type"),v2=n("."),y2=e("td",null,"default-value",-1),b2=n("string[]"),x2=n("[]"),B2=e("td",null,"Default value.",-1),E2=e("td",null,"disabled",-1),$2=n("boolean"),w2=n("false"),F2=e("td",null,"Whether the tag is disabled.",-1),S2=e("td",null,"input-style",-1),V2=n("string | Object"),T2=n("undefined"),k2=e("td",null,"Customize the style of the input.",-1),U2=e("td",null,"max",-1),M2=n("number"),N2=n("undefined"),z2=e("td",null,"Maximum number of tags.",-1),P2=e("td",null,"round",-1),R2=n("boolean"),I2=n("false"),j2=e("td",null,"Whether the tag has rounded corners.",-1),q2=e("td",null,"size",-1),W2=n("'small' | 'medium' | 'large'"),O2=n("'medium'"),Y2=e("td",null,"Size of the tag.",-1),G2=e("td",null,"tag-style",-1),H2=n("string | Object"),J2=n("undefined"),K2=e("td",null,"Customize the style of the tag.",-1),L2=e("td",null,"type",-1),Q2=n("'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'"),X2=n("'default'"),Z2=e("td",null,"Type of the tag.",-1),ee=e("td",null,"value",-1),te=n("string[]"),oe=n("undefined"),ne=e("td",null,"Value if manually set.",-1),le=e("td",null,"on-update:value",-1),se=n("(value: boolean) => void"),ae=n("undefined"),de=e("td",null,"Callback when the component's value changes.",-1),ie=n("DynamicTags Slots"),re={class:"md-table-wrapper"},ue=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Parameters"),e("th",null,"Description")])],-1),ce=e("td",null,"input",-1),me=n("(info: { submit: (value: any) => void, })"),_e=e("td",null,"Custom element(s) to replace the regular input.",-1),pe=e("td",null,"trigger",-1),fe=n("(info: { activate: () => void, disabled: boolean })"),Ae=e("td",null,"The element or component that triggers the tag to switch to an input.",-1),he={key:0,style:{width:"128px"}};function ge(a,d,r,i,A,b){const m=s("edit-on-github-header"),_=s("n-p"),c=s("n-h2"),g=s("basicDemo"),D=s("maxDemo"),B=s("formDemo"),E=s("slotDemo"),h=s("component-demos"),f=s("n-h3"),l=s("n-text"),w=s("n-table"),C=s("n-anchor-link"),V=s("n-anchor");return u(),F("div",{class:"doc",style:S(i.wrapperStyle)},[e("div",{style:S(i.contentStyle)},[o(m,{"relative-url":"src/dynamic-tags/demos/enUS/index.demo-entry.md",text:"Dynamic Tags"}),o(_,null,{default:t(()=>[a2]),_:1}),o(c,{id:"Demos"},{default:t(()=>[d2]),_:1}),o(h,{span:2},{default:t(()=>[o(g),o(D),o(B),o(E)]),_:1}),o(c,{id:"API"},{default:t(()=>[i2]),_:1}),o(f,{id:"DynamicTags-Props"},{default:t(()=>[r2]),_:1}),e("div",u2,[o(w,{"single-column":"",class:"md-table"},{default:t(()=>[c2,e("tbody",null,[e("tr",null,[m2,e("td",null,[o(l,{code:""},{default:t(()=>[_2]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[p2]),_:1})]),f2]),e("tr",null,[A2,e("td",null,[o(l,{code:""},{default:t(()=>[h2]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[g2]),_:1})]),e("td",null,[D2,o(l,{code:""},{default:t(()=>[C2]),_:1}),v2])]),e("tr",null,[y2,e("td",null,[o(l,{code:""},{default:t(()=>[b2]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[x2]),_:1})]),B2]),e("tr",null,[E2,e("td",null,[o(l,{code:""},{default:t(()=>[$2]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[w2]),_:1})]),F2]),e("tr",null,[S2,e("td",null,[o(l,{code:""},{default:t(()=>[V2]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[T2]),_:1})]),k2]),e("tr",null,[U2,e("td",null,[o(l,{code:""},{default:t(()=>[M2]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[N2]),_:1})]),z2]),e("tr",null,[P2,e("td",null,[o(l,{code:""},{default:t(()=>[R2]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[I2]),_:1})]),j2]),e("tr",null,[q2,e("td",null,[o(l,{code:""},{default:t(()=>[W2]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[O2]),_:1})]),Y2]),e("tr",null,[G2,e("td",null,[o(l,{code:""},{default:t(()=>[H2]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[J2]),_:1})]),K2]),e("tr",null,[L2,e("td",null,[o(l,{code:""},{default:t(()=>[Q2]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[X2]),_:1})]),Z2]),e("tr",null,[ee,e("td",null,[o(l,{code:""},{default:t(()=>[te]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[oe]),_:1})]),ne]),e("tr",null,[le,e("td",null,[o(l,{code:""},{default:t(()=>[se]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[ae]),_:1})]),de])])]),_:1})]),o(f,{id:"DynamicTags-Slots"},{default:t(()=>[ie]),_:1}),e("div",re,[o(w,{"single-column":"",class:"md-table"},{default:t(()=>[ue,e("tbody",null,[e("tr",null,[ce,e("td",null,[o(l,{code:""},{default:t(()=>[me]),_:1})]),_e]),e("tr",null,[pe,e("td",null,[o(l,{code:""},{default:t(()=>[fe]),_:1})]),Ae])])]),_:1})])],4),i.showAnchor?(u(),F("div",he,[o(V,{"internal-scrollable":"",bound:16,type:"block",style:{width:"128px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:t(()=>[(i.displayMode,u(),p(C,{key:0,title:"Basic",href:"#basic"})),(i.displayMode,u(),p(C,{key:1,title:"Max Tag Count",href:"#max"})),(i.displayMode,u(),p(C,{key:2,title:"Use in Form",href:"#form"})),(i.displayMode,u(),p(C,{key:3,title:"Customizing Input or Trigger Element",href:"#slot"})),(i.displayMode,u(),p(C,{key:4,title:"API",href:"#API"}))]),_:1})])):M("",!0)],4)}var ye=y(s2,[["render",ge]]);export{ye as default};
