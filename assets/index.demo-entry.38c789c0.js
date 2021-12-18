import{k as E,m as C,_ as $,r as d,o as r,j as m,w as t,e,f as n,h as o,y as T,t as W,u as j,a as H,b as K,c as B,d as x,n as F,g as R}from"./index.95fbdc71.js";import"./axios.dd49c521.js";const Y=E({setup(){return{value:C(0)}}}),q=o(" Basic "),G={class:"demo-card__view"};function J(l,u,h,a,A,b){const _=d("n-input-number"),c=d("component-demo");return r(),m(c,{"demo-file-name":"basic","relative-url":"src/input-number/demos/enUS/basic.demo.md",title:"Basic",code:"%3Ctemplate%3E%0A%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%22%20clearable%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(0)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:t(()=>[q]),content:t(()=>[]),demo:t(()=>[e("div",G,[n(_,{value:l.value,"onUpdate:value":u[0]||(u[0]=i=>l.value=i),clearable:""},null,8,["value"])])]),_:1})}var L=$(Y,[["render",J]]);const O=E({setup(){return{value:C(0),disabled:C(!0)}}}),Q=o(" Disabled "),X={class:"demo-card__view"};function Z(l,u,h,a,A,b){const _=d("n-switch"),c=d("n-input-number"),i=d("n-space"),v=d("component-demo");return r(),m(v,{"demo-file-name":"disabled","relative-url":"src/input-number/demos/enUS/disabled.demo.md",title:"Disabled",code:"%3Ctemplate%3E%0A%20%20%3Cn-space%20align%3D%22center%22%3E%0A%20%20%20%20%3Cn-switch%20v-model%3Avalue%3D%22disabled%22%20%2F%3E%0A%20%20%20%20%3Cn-input-number%20%3Adisabled%3D%22disabled%22%20v-model%3Avalue%3D%22value%22%20%2F%3E%0A%20%20%3C%2Fn-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(0)%2C%0A%20%20%20%20%20%20disabled%3A%20ref(true)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:t(()=>[Q]),content:t(()=>[]),demo:t(()=>[e("div",X,[n(i,{align:"center"},{default:t(()=>[n(_,{value:l.disabled,"onUpdate:value":u[0]||(u[0]=p=>l.disabled=p)},null,8,["value"]),n(c,{disabled:l.disabled,value:l.value,"onUpdate:value":u[1]||(u[1]=p=>l.value=p)},null,8,["disabled","value"])]),_:1})])]),_:1})}var ee=$(O,[["render",Z]]);const te=E({setup(){const l=T();return{value:C(0),handleChange(u){l.info(`update:value(${u})`)},handleBlur(){l.info("blur")},handleFocus(){l.info("focus")}}}}),ne=o(" Event "),oe=o("Blur & change events are exposed."),le={class:"demo-card__view"};function de(l,u,h,a,A,b){const _=d("n-p"),c=d("n-input-number"),i=d("component-demo");return r(),m(i,{"demo-file-name":"event","relative-url":"src/input-number/demos/enUS/event.demo.md",title:"Event",code:"%3Ctemplate%3E%0A%20%20%3Cn-input-number%0A%20%20%20%20v-model%3Avalue%3D%22value%22%0A%20%20%20%20%40update%3Avalue%3D%22handleChange%22%0A%20%20%20%20%40focus%3D%22handleFocus%22%0A%20%20%20%20%40blur%3D%22handleBlur%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0Aimport%20%7B%20useMessage%20%7D%20from%20'novice-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20message%20%3D%20useMessage()%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(0)%2C%0A%20%20%20%20%20%20handleChange%20(v)%20%7B%0A%20%20%20%20%20%20%20%20message.info(%60update%3Avalue(%24%7Bv%7D)%60)%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20handleBlur%20()%20%7B%0A%20%20%20%20%20%20%20%20message.info('blur')%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20handleFocus%20()%20%7B%0A%20%20%20%20%20%20%20%20message.info('focus')%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:t(()=>[ne]),content:t(()=>[n(_,null,{default:t(()=>[oe]),_:1})]),demo:t(()=>[e("div",le,[n(c,{value:l.value,"onUpdate:value":[u[0]||(u[0]=v=>l.value=v),l.handleChange],onFocus:l.handleFocus,onBlur:l.handleBlur},null,8,["value","onUpdate:value","onFocus","onBlur"])])]),_:1})}var ue=$(te,[["render",de]]);const se=E({setup(){return{value:C(0)}}}),ae=o(" Prefix & suffix "),ie=o("Add prefix and suffix contents."),re={class:"demo-card__view"},_e=o("$"),ce=o("%"),me=o("%");function pe(l,u,h,a,A,b){const _=d("n-p"),c=d("n-input-number"),i=d("n-space"),v=d("component-demo");return r(),m(v,{"demo-file-name":"icon","relative-url":"src/input-number/demos/enUS/icon.demo.md",title:"Prefix & suffix",code:"%3Ctemplate%3E%0A%20%20%3Cn-space%20vertical%3E%0A%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%22%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23prefix%3E%24%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fn-input-number%3E%0A%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%22%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23suffix%3E%25%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fn-input-number%3E%0A%20%20%20%20%3Cn-input-number%20%3Ashow-button%3D%22false%22%20v-model%3Avalue%3D%22value%22%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23suffix%3E%25%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fn-input-number%3E%0A%20%20%3C%2Fn-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(0)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:t(()=>[ae]),content:t(()=>[n(_,null,{default:t(()=>[ie]),_:1})]),demo:t(()=>[e("div",re,[n(i,{vertical:""},{default:t(()=>[n(c,{value:l.value,"onUpdate:value":u[0]||(u[0]=p=>l.value=p)},{prefix:t(()=>[_e]),_:1},8,["value"]),n(c,{value:l.value,"onUpdate:value":u[1]||(u[1]=p=>l.value=p)},{suffix:t(()=>[ce]),_:1},8,["value"]),n(c,{"show-button":!1,value:l.value,"onUpdate:value":u[2]||(u[2]=p=>l.value=p)},{suffix:t(()=>[me]),_:1},8,["value"])]),_:1})])]),_:1})}var ve=$(se,[["render",pe]]);const he=E({setup(){return{value:C(null)}}}),fe=o(" Min and max "),Ae=o("You can set minimum and maximum values too."),be={class:"demo-card__view"};function De(l,u,h,a,A,b){const _=d("n-p"),c=d("n-input-number"),i=d("n-space"),v=d("component-demo");return r(),m(v,{"demo-file-name":"min-max","relative-url":"src/input-number/demos/enUS/min-max.demo.md",title:"Min and max",code:"%3Ctemplate%3E%0A%20%20%3Cn-space%20vertical%3E%0A%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%22%20placeholder%3D%22Min%22%20%3Amin%3D%22-3%22%20%3Amax%3D%225%22%20%2F%3E%0A%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%22%20placeholder%3D%22Max%22%20%3Amin%3D%22-5%22%20%3Amax%3D%223%22%20%2F%3E%0A%20%20%3C%2Fn-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(null)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:t(()=>[fe]),content:t(()=>[n(_,null,{default:t(()=>[Ae]),_:1})]),demo:t(()=>[e("div",be,[n(i,{vertical:""},{default:t(()=>[n(c,{value:l.value,"onUpdate:value":u[0]||(u[0]=p=>l.value=p),placeholder:"Min",min:-3,max:5},null,8,["value"]),n(c,{value:l.value,"onUpdate:value":u[1]||(u[1]=p=>l.value=p),placeholder:"Max",min:-5,max:3},null,8,["value"])]),_:1})])]),_:1})}var Ce=$(he,[["render",De]]);const $e=E({setup(){return{value:C(0)}}}),Ee=o(" Size "),ge=o("small"),we=o(", "),ye=o("medium"),Be=o(", "),xe=o("large"),Fe=o("."),ke={class:"demo-card__view"};function Ue(l,u,h,a,A,b){const _=d("n-text"),c=d("n-p"),i=d("n-input-number"),v=d("n-space"),p=d("component-demo");return r(),m(p,{"demo-file-name":"size","relative-url":"src/input-number/demos/enUS/size.demo.md",title:"Size",code:"%3Ctemplate%3E%0A%20%20%3Cn-space%20vertical%3E%0A%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%22%20size%3D%22small%22%20%2F%3E%0A%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%22%20size%3D%22medium%22%20%2F%3E%0A%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%22%20size%3D%22large%22%20%2F%3E%0A%20%20%3C%2Fn-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(0)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:t(()=>[Ee]),content:t(()=>[n(c,null,{default:t(()=>[n(_,{code:""},{default:t(()=>[ge]),_:1}),we,n(_,{code:""},{default:t(()=>[ye]),_:1}),Be,n(_,{code:""},{default:t(()=>[xe]),_:1}),Fe]),_:1})]),demo:t(()=>[e("div",ke,[n(v,{vertical:""},{default:t(()=>[n(i,{value:l.value,"onUpdate:value":u[0]||(u[0]=f=>l.value=f),size:"small"},null,8,["value"]),n(i,{value:l.value,"onUpdate:value":u[1]||(u[1]=f=>l.value=f),size:"medium"},null,8,["value"]),n(i,{value:l.value,"onUpdate:value":u[2]||(u[2]=f=>l.value=f),size:"large"},null,8,["value"])]),_:1})])]),_:1})}var Me=$($e,[["render",Ue]]);const Se=E({setup(){return{value:C(0)}}}),Ne=o(" Step "),Ve=o("Set how much the buttons change the value."),ze={class:"demo-card__view"};function Ie(l,u,h,a,A,b){const _=d("n-p"),c=d("n-input-number"),i=d("component-demo");return r(),m(i,{"demo-file-name":"step","relative-url":"src/input-number/demos/enUS/step.demo.md",title:"Step",code:"%3Ctemplate%3E%0A%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%22%20%3Astep%3D%222%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(0)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:t(()=>[Ne]),content:t(()=>[n(_,null,{default:t(()=>[Ve]),_:1})]),demo:t(()=>[e("div",ze,[n(c,{value:l.value,"onUpdate:value":u[0]||(u[0]=v=>l.value=v),step:2},null,8,["value"])])]),_:1})}var Pe=$(Se,[["render",Ie]]);const Te=E({setup(){return{value:C(0),validator:l=>l>0}}}),We=o(" Validator "),je={class:"demo-card__view"};function He(l,u,h,a,A,b){const _=d("n-input-number"),c=d("component-demo");return r(),m(c,{"demo-file-name":"validator","relative-url":"src/input-number/demos/enUS/validator.demo.md",title:"Validator",code:"%3Ctemplate%3E%0A%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%22%20%3Avalidator%3D%22validator%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(0)%2C%0A%20%20%20%20%20%20validator%3A%20(x)%20%3D%3E%20x%20%3E%200%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:t(()=>[We]),content:t(()=>[]),demo:t(()=>[e("div",je,[n(_,{value:l.value,"onUpdate:value":u[0]||(u[0]=i=>l.value=i),validator:l.validator},null,8,["value","validator"])])]),_:1})}var Ke=$(Te,[["render",He]]);const Re=E({setup(){return{value:C(0),disabled:C(!0)}}}),Ye=o(" Hide button "),qe=o("Use "),Ge=o("show-button"),Je=o(" prop to control whether to show control buttons."),Le={class:"demo-card__view"};function Oe(l,u,h,a,A,b){const _=d("n-text"),c=d("n-p"),i=d("n-switch"),v=d("n-input-number"),p=d("n-space"),f=d("component-demo");return r(),m(f,{"demo-file-name":"show-button","relative-url":"src/input-number/demos/enUS/show-button.demo.md",title:"Hide button",code:"%3Ctemplate%3E%0A%20%20%3Cn-space%20align%3D%22center%22%3E%0A%20%20%20%20%3Cn-switch%20v-model%3Avalue%3D%22disabled%22%20%2F%3E%0A%20%20%20%20%3Cn-input-number%20%3Ashow-button%3D%22disabled%22%20v-model%3Avalue%3D%22value%22%20%2F%3E%0A%20%20%3C%2Fn-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(0)%2C%0A%20%20%20%20%20%20disabled%3A%20ref(true)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:t(()=>[Ye]),content:t(()=>[n(c,null,{default:t(()=>[qe,n(_,{code:""},{default:t(()=>[Ge]),_:1}),Je]),_:1})]),demo:t(()=>[e("div",Le,[n(p,{align:"center"},{default:t(()=>[n(i,{value:l.disabled,"onUpdate:value":u[0]||(u[0]=g=>l.disabled=g)},null,8,["value"]),n(v,{"show-button":l.disabled,value:l.value,"onUpdate:value":u[1]||(u[1]=g=>l.value=g)},null,8,["show-button","value"])]),_:1})])]),_:1})}var Qe=$(Re,[["render",Oe]]);const Xe={},Ze=o(" Disable keyboard arrow up & down "),et=o("Set "),tt=o(':keyboard="{ ArrowUp: false, ArrowDown: false }"'),nt=o(" to disabled keyboard arrow up & down."),ot={class:"demo-card__view"};function lt(l,u){const h=d("n-text"),a=d("n-p"),A=d("n-input-number"),b=d("component-demo");return r(),m(b,{"demo-file-name":"disable-keyboard","relative-url":"src/input-number/demos/enUS/disable-keyboard.demo.md",title:"Disable keyboard arrow up & down",code:"%3Ctemplate%3E%0A%20%20%3Cn-input-number%20%3Akeyboard%3D%22%7B%20ArrowUp%3A%20false%2C%20ArrowDown%3A%20false%20%7D%22%20%2F%3E%0A%3C%2Ftemplate%3E"},{title:t(()=>[Ze]),content:t(()=>[n(a,null,{default:t(()=>[et,n(h,{code:""},{default:t(()=>[tt]),_:1}),nt]),_:1})]),demo:t(()=>[e("div",ot,[n(A,{keyboard:{ArrowUp:!1,ArrowDown:!1}})])]),_:1})}var dt=$(Xe,[["render",lt]]);const ut=E({setup(){return{value:C(35)}}}),st=o(" Timing to change "),at=o("Set "),it=o("update-value-on-input"),rt=o(" to "),_t=o("false"),ct=o(", the value won't be changed on input."),mt={class:"demo-card__view"};function pt(l,u,h,a,A,b){const _=d("n-text"),c=d("n-p"),i=d("n-input-number"),v=d("n-space"),p=d("component-demo");return r(),m(p,{"demo-file-name":"change-timing","relative-url":"src/input-number/demos/enUS/change-timing.demo.md",title:"Timing to change",code:"%3Ctemplate%3E%0A%20%20%3Cn-space%20vertical%3E%0A%20%20%20%20%3Cn-input-number%0A%20%20%20%20%20%20%3Aupdate-value-on-input%3D%22false%22%0A%20%20%20%20%20%20v-model%3Avalue%3D%22value%22%0A%20%20%20%20%20%20placeholder%3D%22%22%0A%20%20%20%20%20%20%3Amin%3D%2220%22%0A%20%20%20%20%20%20%3Amax%3D%2250%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%22%20placeholder%3D%22%22%20%3Amin%3D%2220%22%20%3Amax%3D%2250%22%20%2F%3E%0A%20%20%20%20%7B%7B%20value%20%7D%7D%0A%20%20%3C%2Fn-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(35)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:t(()=>[st]),content:t(()=>[n(c,null,{default:t(()=>[at,n(_,{code:""},{default:t(()=>[it]),_:1}),rt,n(_,{code:""},{default:t(()=>[_t]),_:1}),ct]),_:1})]),demo:t(()=>[e("div",mt,[n(v,{vertical:""},{default:t(()=>[n(i,{"update-value-on-input":!1,value:l.value,"onUpdate:value":u[0]||(u[0]=f=>l.value=f),placeholder:"",min:20,max:50},null,8,["value"]),n(i,{value:l.value,"onUpdate:value":u[1]||(u[1]=f=>l.value=f),placeholder:"",min:20,max:50},null,8,["value"]),o(" "+W(l.value),1)]),_:1})])]),_:1})}var vt=$(ut,[["render",pt]]);const ht={components:{basicDemo:L,disabledDemo:ee,eventDemo:ue,iconDemo:ve,minMaxDemo:Ce,sizeDemo:Me,stepDemo:Pe,validatorDemo:Ke,showButtonDemo:Qe,disableKeyboardDemo:dt,changeTimingDemo:vt},setup(){const l=j(),u=H(()=>!l.value),h=l;return{showAnchor:u,displayMode:K(),wrapperStyle:B(()=>h.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:B(()=>u.value?"width: calc(100% - 164px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"src/input-number/demos/enUS/index.demo-entry.md"}}},ft=o("If you just want a number, this is for you."),At=o("Demos"),bt=o("API"),Dt=o("InputNumber Props"),Ct={class:"md-table-wrapper"},$t=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Default"),e("th",null,"Description")])],-1),Et=e("td",null,"bordered",-1),gt=o("boolean"),wt=o("true"),yt=e("td",null,"Whether to show a border.",-1),Bt=e("td",null,"clearable",-1),xt=o("boolean"),Ft=o("false"),kt=e("td",null,"Whether the input is clearable.",-1),Ut=e("td",null,"default-value",-1),Mt=o("number | null"),St=o("null"),Nt=e("td",null,"Default value when not manually set.",-1),Vt=e("td",null,"disabled",-1),zt=o("boolean"),It=o("false"),Pt=e("td",null,"Whether to disable the input.",-1),Tt=e("td",null,"keyboard",-1),Wt=o("{ ArrowUp?: boolean, ArrowDown?: boolean }"),jt=o("{}"),Ht=e("td",null,"Control the keyboard behavior. If you set corresponding to false, the keyboard behavior will be disabled.",-1),Kt=e("td",null,"max",-1),Rt=o("number"),Yt=o("undefined"),qt=e("td",null,"The max value.",-1),Gt=e("td",null,"min",-1),Jt=o("number"),Lt=o("undefined"),Ot=e("td",null,"The min value.",-1),Qt=e("td",null,"placeholder",-1),Xt=o("string"),Zt=o("'Please Input'"),en=e("td",null,"Placeholder.",-1),tn=e("td",null,"show-button",-1),nn=o("boolean"),on=o("true"),ln=e("td",null,"Whether to show increase/decrease buttons.",-1),dn=e("td",null,"size",-1),un=o("'small' | 'medium' | 'large'"),sn=o("'medium'"),an=e("td",null,"The size of input box.",-1),rn=e("td",null,"step",-1),_n=o("number"),cn=o("1"),mn=e("td",null,"The number which the current value is increased or decreased on key or button press. It can be an integer or a decimal.",-1),pn=e("td",null,"update-value-on-input",-1),vn=o("boolean"),hn=o("true"),fn=e("td",null,"Whether to change the value on input if the input value is valid.",-1),An=e("td",null,"validator",-1),bn=o("(value) => boolean"),Dn=o("undefined"),Cn=e("td",null,"Setup custom validation.",-1),$n=e("td",null,"value",-1),En=o("number | null"),gn=o("undefined"),wn=e("td",null,"Manually set the input value.",-1),yn=e("td",null,"on-blur",-1),Bn=o("(event: FocusEvent) => void"),xn=o("undefined"),Fn=e("td",null,"Callback triggered when the input is blurred.",-1),kn=e("td",null,"on-clear",-1),Un=o("() => void"),Mn=o("undefined"),Sn=e("td",null,"Callback triggered when the input is cleared.",-1),Nn=e("td",null,"on-focus",-1),Vn=o("(event: FocusEvent) => void"),zn=o("undefined"),In=e("td",null,"Callback triggered when the input is focussed on.",-1),Pn=e("td",null,"on-update:value",-1),Tn=o("(value: number | null) => void"),Wn=o("undefined"),jn=e("td",null,"Callback triggered when the input value changes.",-1),Hn=o("InputNumber Slots"),Kn={class:"md-table-wrapper"},Rn=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Parameters"),e("th",null,"Description")])],-1),Yn=e("td",null,"prefix",-1),qn=o("()"),Gn=e("td",null,"Prefix content slot.",-1),Jn=e("td",null,"suffix",-1),Ln=o("()"),On=e("td",null,"Suffix content slot.",-1),Qn=o("InputNumber Methods"),Xn={class:"md-table-wrapper"},Zn=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Description")])],-1),eo=e("td",null,"blur",-1),to=o("() => void"),no=e("td",null,"Blur the input number.",-1),oo=e("td",null,"focus",-1),lo=o("() => void"),uo=e("td",null,"Focus the input number.",-1),so={key:0,style:{width:"128px"}};function ao(l,u,h,a,A,b){const _=d("edit-on-github-header"),c=d("n-p"),i=d("n-h2"),v=d("basicDemo"),p=d("disabledDemo"),f=d("eventDemo"),g=d("iconDemo"),k=d("minMaxDemo"),U=d("sizeDemo"),M=d("stepDemo"),S=d("validatorDemo"),N=d("showButtonDemo"),V=d("disableKeyboardDemo"),z=d("changeTimingDemo"),I=d("component-demos"),w=d("n-h3"),s=d("n-text"),y=d("n-table"),D=d("n-anchor-link"),P=d("n-anchor");return r(),x("div",{class:"doc",style:F(a.wrapperStyle)},[e("div",{style:F(a.contentStyle)},[n(_,{"relative-url":"src/input-number/demos/enUS/index.demo-entry.md",text:"Input Number"}),n(c,null,{default:t(()=>[ft]),_:1}),n(i,{id:"Demos"},{default:t(()=>[At]),_:1}),n(I,{span:2},{default:t(()=>[n(v),n(p),n(f),n(g),n(k),n(U),n(M),n(S),n(N),n(V),n(z)]),_:1}),n(i,{id:"API"},{default:t(()=>[bt]),_:1}),n(w,{id:"InputNumber-Props"},{default:t(()=>[Dt]),_:1}),e("div",Ct,[n(y,{"single-column":"",class:"md-table"},{default:t(()=>[$t,e("tbody",null,[e("tr",null,[Et,e("td",null,[n(s,{code:""},{default:t(()=>[gt]),_:1})]),e("td",null,[n(s,{code:""},{default:t(()=>[wt]),_:1})]),yt]),e("tr",null,[Bt,e("td",null,[n(s,{code:""},{default:t(()=>[xt]),_:1})]),e("td",null,[n(s,{code:""},{default:t(()=>[Ft]),_:1})]),kt]),e("tr",null,[Ut,e("td",null,[n(s,{code:""},{default:t(()=>[Mt]),_:1})]),e("td",null,[n(s,{code:""},{default:t(()=>[St]),_:1})]),Nt]),e("tr",null,[Vt,e("td",null,[n(s,{code:""},{default:t(()=>[zt]),_:1})]),e("td",null,[n(s,{code:""},{default:t(()=>[It]),_:1})]),Pt]),e("tr",null,[Tt,e("td",null,[n(s,{code:""},{default:t(()=>[Wt]),_:1})]),e("td",null,[n(s,{code:""},{default:t(()=>[jt]),_:1})]),Ht]),e("tr",null,[Kt,e("td",null,[n(s,{code:""},{default:t(()=>[Rt]),_:1})]),e("td",null,[n(s,{code:""},{default:t(()=>[Yt]),_:1})]),qt]),e("tr",null,[Gt,e("td",null,[n(s,{code:""},{default:t(()=>[Jt]),_:1})]),e("td",null,[n(s,{code:""},{default:t(()=>[Lt]),_:1})]),Ot]),e("tr",null,[Qt,e("td",null,[n(s,{code:""},{default:t(()=>[Xt]),_:1})]),e("td",null,[n(s,{code:""},{default:t(()=>[Zt]),_:1})]),en]),e("tr",null,[tn,e("td",null,[n(s,{code:""},{default:t(()=>[nn]),_:1})]),e("td",null,[n(s,{code:""},{default:t(()=>[on]),_:1})]),ln]),e("tr",null,[dn,e("td",null,[n(s,{code:""},{default:t(()=>[un]),_:1})]),e("td",null,[n(s,{code:""},{default:t(()=>[sn]),_:1})]),an]),e("tr",null,[rn,e("td",null,[n(s,{code:""},{default:t(()=>[_n]),_:1})]),e("td",null,[n(s,{code:""},{default:t(()=>[cn]),_:1})]),mn]),e("tr",null,[pn,e("td",null,[n(s,{code:""},{default:t(()=>[vn]),_:1})]),e("td",null,[n(s,{code:""},{default:t(()=>[hn]),_:1})]),fn]),e("tr",null,[An,e("td",null,[n(s,{code:""},{default:t(()=>[bn]),_:1})]),e("td",null,[n(s,{code:""},{default:t(()=>[Dn]),_:1})]),Cn]),e("tr",null,[$n,e("td",null,[n(s,{code:""},{default:t(()=>[En]),_:1})]),e("td",null,[n(s,{code:""},{default:t(()=>[gn]),_:1})]),wn]),e("tr",null,[yn,e("td",null,[n(s,{code:""},{default:t(()=>[Bn]),_:1})]),e("td",null,[n(s,{code:""},{default:t(()=>[xn]),_:1})]),Fn]),e("tr",null,[kn,e("td",null,[n(s,{code:""},{default:t(()=>[Un]),_:1})]),e("td",null,[n(s,{code:""},{default:t(()=>[Mn]),_:1})]),Sn]),e("tr",null,[Nn,e("td",null,[n(s,{code:""},{default:t(()=>[Vn]),_:1})]),e("td",null,[n(s,{code:""},{default:t(()=>[zn]),_:1})]),In]),e("tr",null,[Pn,e("td",null,[n(s,{code:""},{default:t(()=>[Tn]),_:1})]),e("td",null,[n(s,{code:""},{default:t(()=>[Wn]),_:1})]),jn])])]),_:1})]),n(w,{id:"InputNumber-Slots"},{default:t(()=>[Hn]),_:1}),e("div",Kn,[n(y,{"single-column":"",class:"md-table"},{default:t(()=>[Rn,e("tbody",null,[e("tr",null,[Yn,e("td",null,[n(s,{code:""},{default:t(()=>[qn]),_:1})]),Gn]),e("tr",null,[Jn,e("td",null,[n(s,{code:""},{default:t(()=>[Ln]),_:1})]),On])])]),_:1})]),n(w,{id:"InputNumber-Methods"},{default:t(()=>[Qn]),_:1}),e("div",Xn,[n(y,{"single-column":"",class:"md-table"},{default:t(()=>[Zn,e("tbody",null,[e("tr",null,[eo,e("td",null,[n(s,{code:""},{default:t(()=>[to]),_:1})]),no]),e("tr",null,[oo,e("td",null,[n(s,{code:""},{default:t(()=>[lo]),_:1})]),uo])])]),_:1})])],4),a.showAnchor?(r(),x("div",so,[n(P,{"internal-scrollable":"",bound:16,type:"block",style:{width:"128px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:t(()=>[(a.displayMode,r(),m(D,{key:0,title:"Basic",href:"#basic"})),(a.displayMode,r(),m(D,{key:1,title:"Disabled",href:"#disabled"})),(a.displayMode,r(),m(D,{key:2,title:"Event",href:"#event"})),(a.displayMode,r(),m(D,{key:3,title:"Prefix & suffix",href:"#icon"})),(a.displayMode,r(),m(D,{key:4,title:"Min and max",href:"#min-max"})),(a.displayMode,r(),m(D,{key:5,title:"Size",href:"#size"})),(a.displayMode,r(),m(D,{key:6,title:"Step",href:"#step"})),(a.displayMode,r(),m(D,{key:7,title:"Validator",href:"#validator"})),(a.displayMode,r(),m(D,{key:8,title:"Hide button",href:"#show-button"})),(a.displayMode,r(),m(D,{key:9,title:"Disable keyboard arrow up & down",href:"#disable-keyboard"})),(a.displayMode,r(),m(D,{key:10,title:"Timing to change",href:"#change-timing"})),(a.displayMode,r(),m(D,{key:11,title:"API",href:"#API"}))]),_:1})])):R("",!0)],4)}var _o=$(ht,[["render",ao]]);export{_o as default};
