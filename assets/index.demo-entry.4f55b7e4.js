import{k as g,y,_ as f,r as l,o as r,j as m,w as n,e,f as o,h as t,q as $,s as Y,m as E,A as j,K as q,z as Q,u as K,a as G,b as J,c as I,d as R,n as F,g as X}from"./index.95fbdc71.js";import{M as Z}from"./MdHourglass.89a6833f.js";import"./axios.dd49c521.js";const ee=g({setup(){const s=y();return{info(){s.info("I don't know why nobody told you how to unfold your love",{keepAliveOnHover:!0})},error(){s.error("Once upon a time you dressed so fine")},warning(){s.warning("How many roads must a man walk down")},success(){s.success("'Cause you walked hand in hand With another man in my place")},loading(){s.loading("If I were you, I will realize that I love you more than any other guy")}}}}),te=t(" Basic "),ne={class:"demo-card__view"},oe=t(" Info(Hover will keep alive) "),se=t(" Error "),le=t(" Warning "),ae=t(" Success "),ce=t(" Loading ");function de(s,i,_,c,p,A){const d=l("n-button"),u=l("n-space"),a=l("component-demo");return r(),m(a,{"demo-file-name":"basic","relative-url":"src/message/demos/enUS/basic.demo.md",title:"Basic",code:"%3Ctemplate%3E%0A%20%20%3Cn-space%3E%0A%20%20%20%20%3Cn-button%20%40click%3D%22info%22%3E%20Info(Hover%20will%20keep%20alive)%20%3C%2Fn-button%3E%0A%20%20%20%20%3Cn-button%20%40click%3D%22error%22%3E%20Error%20%3C%2Fn-button%3E%0A%20%20%20%20%3Cn-button%20%40click%3D%22warning%22%3E%20Warning%20%3C%2Fn-button%3E%0A%20%20%20%20%3Cn-button%20%40click%3D%22success%22%3E%20Success%20%3C%2Fn-button%3E%0A%20%20%20%20%3Cn-button%20%40click%3D%22loading%22%3E%20Loading%20%3C%2Fn-button%3E%0A%20%20%3C%2Fn-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0Aimport%20%7B%20useMessage%20%7D%20from%20'novice-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20message%20%3D%20useMessage()%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20info%20()%20%7B%0A%20%20%20%20%20%20%20%20message.info(%0A%20%20%20%20%20%20%20%20%20%20%22I%20don't%20know%20why%20nobody%20told%20you%20how%20to%20unfold%20your%20love%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20keepAliveOnHover%3A%20true%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20error%20()%20%7B%0A%20%20%20%20%20%20%20%20message.error('Once%20upon%20a%20time%20you%20dressed%20so%20fine')%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20warning%20()%20%7B%0A%20%20%20%20%20%20%20%20message.warning('How%20many%20roads%20must%20a%20man%20walk%20down')%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20success%20()%20%7B%0A%20%20%20%20%20%20%20%20message.success(%0A%20%20%20%20%20%20%20%20%20%20%22'Cause%20you%20walked%20hand%20in%20hand%20With%20another%20man%20in%20my%20place%22%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20loading%20()%20%7B%0A%20%20%20%20%20%20%20%20message.loading(%0A%20%20%20%20%20%20%20%20%20%20'If%20I%20were%20you%2C%20I%20will%20realize%20that%20I%20love%20you%20more%20than%20any%20other%20guy'%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:n(()=>[te]),content:n(()=>[]),demo:n(()=>[e("div",ne,[o(u,null,{default:n(()=>[o(d,{onClick:s.info},{default:n(()=>[oe]),_:1},8,["onClick"]),o(d,{onClick:s.error},{default:n(()=>[se]),_:1},8,["onClick"]),o(d,{onClick:s.warning},{default:n(()=>[le]),_:1},8,["onClick"]),o(d,{onClick:s.success},{default:n(()=>[ae]),_:1},8,["onClick"]),o(d,{onClick:s.loading},{default:n(()=>[ce]),_:1},8,["onClick"])]),_:1})])]),_:1})}var ie=f(ee,[["render",de]]);const re=g({setup(){const s=y();return{createMessage(){s.warning("I never needed anybody's help in any way",{icon:()=>$(Y,null,{default:()=>$(Z)})})}}}}),ue=t(" Icon "),me={class:"demo-card__view"},_e=t(" Hourglass Icon ");function pe(s,i,_,c,p,A){const d=l("n-button"),u=l("component-demo");return r(),m(u,{"demo-file-name":"icon","relative-url":"src/message/demos/enUS/icon.demo.md",title:"Icon",code:"%3Ctemplate%3E%0A%20%20%3Cn-button%20%40click%3D%22createMessage%22%3E%20Hourglass%20Icon%20%3C%2Fn-button%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20h%20%7D%20from%20'vue'%0Aimport%20%7B%20NIcon%2C%20useMessage%20%7D%20from%20'novice-ui'%0Aimport%20%7B%20MdHourglass%20%7D%20from%20'%40vicons%2Fionicons4'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20message%20%3D%20useMessage()%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20createMessage%20()%20%7B%0A%20%20%20%20%20%20%20%20message.warning(%22I%20never%20needed%20anybody's%20help%20in%20any%20way%22%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20icon%3A%20()%20%3D%3E%20h(NIcon%2C%20null%2C%20%7B%20default%3A%20()%20%3D%3E%20h(MdHourglass)%20%7D)%0A%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:n(()=>[ue]),content:n(()=>[]),demo:n(()=>[e("div",me,[o(d,{onClick:s.createMessage},{default:n(()=>[_e]),_:1},8,["onClick"])])]),_:1})}var he=f(re,[["render",pe]]);const fe=g({setup(){const s=y();return{createMessage(){s.info("I don't know why nobody told you how to unfold your love",{duration:5e3})}}}}),Ae=t(" Timing "),ge=t("Specify the duration of messages."),ye={class:"demo-card__view"},Ce=t(" Last for 5 second ");function ve(s,i,_,c,p,A){const d=l("n-p"),u=l("n-button"),a=l("component-demo");return r(),m(a,{"demo-file-name":"timing","relative-url":"src/message/demos/enUS/timing.demo.md",title:"Timing",code:"%3Ctemplate%3E%0A%20%20%3Cn-button%20%40click%3D%22createMessage%22%3E%20Last%20for%205%20second%20%3C%2Fn-button%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0Aimport%20%7B%20useMessage%20%7D%20from%20'novice-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20message%20%3D%20useMessage()%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20createMessage%20()%20%7B%0A%20%20%20%20%20%20%20%20message.info(%0A%20%20%20%20%20%20%20%20%20%20%22I%20don't%20know%20why%20nobody%20told%20you%20how%20to%20unfold%20your%20love%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20duration%3A%205000%20%7D%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:n(()=>[Ae]),content:n(()=>[o(d,null,{default:n(()=>[ge]),_:1})]),demo:n(()=>[e("div",ye,[o(u,{onClick:s.createMessage},{default:n(()=>[Ce]),_:1},8,["onClick"])])]),_:1})}var De=f(fe,[["render",ve]]);const be=g({setup(){const s=y();return{createMessage(){s.info("I don't know why nobody told you how to unfold your love",{closable:!0,duration:5e3})}}}}),we=t(" Closable "),Me=t("Set "),Be=t("closable"),ke=t(" to make message closable by a click."),$e={class:"demo-card__view"},Ee=t(" Create a Message ");function xe(s,i,_,c,p,A){const d=l("n-text"),u=l("n-p"),a=l("n-button"),C=l("component-demo");return r(),m(C,{"demo-file-name":"closable","relative-url":"src/message/demos/enUS/closable.demo.md",title:"Closable",code:"%3Ctemplate%3E%0A%20%20%3Cn-button%20%40click%3D%22createMessage%22%3E%20Create%20a%20Message%20%3C%2Fn-button%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0Aimport%20%7B%20useMessage%20%7D%20from%20'novice-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20message%20%3D%20useMessage()%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20createMessage%20()%20%7B%0A%20%20%20%20%20%20%20%20message.info(%0A%20%20%20%20%20%20%20%20%20%20%22I%20don't%20know%20why%20nobody%20told%20you%20how%20to%20unfold%20your%20love%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20closable%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20duration%3A%205000%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:n(()=>[we]),content:n(()=>[o(u,null,{default:n(()=>[Me,o(d,{code:""},{default:n(()=>[Be]),_:1}),ke]),_:1})]),demo:n(()=>[e("div",$e,[o(a,{onClick:s.createMessage},{default:n(()=>[Ee]),_:1},8,["onClick"])])]),_:1})}var je=f(be,[["render",xe]]);const Ie=g({setup(){const s=y(),i=["success","info","warning","error","loading"],_=E(0),c=E(0);let p=j(null);return{plus(){p&&(_.value++,p.content=""+_.value)},changeType(){p&&(c.value=(c.value+1)%i.length,p.type=i[c.value])},createMessage(){p=s[i[c.value]](""+_.value,{duration:1e4})}}}}),Re=t(" Modify Exist Message "),Fe={class:"demo-card__view"},Pe=t(" Create a Message Firstly "),Ne=t("Change Type"),Te=t("Plus 1");function Se(s,i,_,c,p,A){const d=l("n-button"),u=l("n-space"),a=l("component-demo");return r(),m(a,{"demo-file-name":"modify-content","relative-url":"src/message/demos/enUS/modify-content.demo.md",title:"Modify Exist Message",code:"%3Ctemplate%3E%0A%20%20%3Cn-space%3E%0A%20%20%20%20%3Cn-button%20%40click%3D%22createMessage%22%3E%20Create%20a%20Message%20Firstly%20%3C%2Fn-button%3E%0A%20%20%20%20%3Cn-button%20%40click%3D%22changeType%22%3EChange%20Type%3C%2Fn-button%3E%0A%20%20%20%20%3Cn-button%20%40click%3D%22plus%22%3EPlus%201%3C%2Fn-button%3E%0A%20%20%3C%2Fn-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%2C%20reactive%20%7D%20from%20'vue'%0Aimport%20%7B%20useMessage%20%7D%20from%20'novice-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20message%20%3D%20useMessage()%0A%20%20%20%20const%20types%20%3D%20%5B'success'%2C%20'info'%2C%20'warning'%2C%20'error'%2C%20'loading'%5D%0A%20%20%20%20const%20countRef%20%3D%20ref(0)%0A%20%20%20%20const%20typeIndexRef%20%3D%20ref(0)%0A%20%20%20%20let%20msgReactive%20%3D%20reactive(null)%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20plus%20()%20%7B%0A%20%20%20%20%20%20%20%20if%20(msgReactive)%20%7B%0A%20%20%20%20%20%20%20%20%20%20countRef.value%2B%2B%0A%20%20%20%20%20%20%20%20%20%20msgReactive.content%20%3D%20''%20%2B%20countRef.value%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20changeType%20()%20%7B%0A%20%20%20%20%20%20%20%20if%20(msgReactive)%20%7B%0A%20%20%20%20%20%20%20%20%20%20typeIndexRef.value%20%3D%20(typeIndexRef.value%20%2B%201)%20%25%20types.length%0A%20%20%20%20%20%20%20%20%20%20msgReactive.type%20%3D%20types%5BtypeIndexRef.value%5D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20createMessage%20()%20%7B%0A%20%20%20%20%20%20%20%20msgReactive%20%3D%20message%5Btypes%5BtypeIndexRef.value%5D%5D(''%20%2B%20countRef.value%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20duration%3A%2010000%0A%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:n(()=>[Re]),content:n(()=>[]),demo:n(()=>[e("div",Fe,[o(u,null,{default:n(()=>[o(d,{onClick:s.createMessage},{default:n(()=>[Pe]),_:1},8,["onClick"]),o(d,{onClick:s.changeType},{default:n(()=>[Ne]),_:1},8,["onClick"]),o(d,{onClick:s.plus},{default:n(()=>[Te]),_:1},8,["onClick"])]),_:1})])]),_:1})}var Le=f(Ie,[["render",Se]]);const Ve=g({setup(){const s=y();let i=j(null);const _=()=>{i&&(i.destroy(),i=null)};return q(_),{removeMessage:_,createMessage(){i||(i=s.info("3 * 3 * 4 * 4 * ?",{duration:0}))}}}}),Ue=t(" Manually Close "),He={class:"demo-card__view"},Oe=t(" Create "),ze=t(" Destroy ");function We(s,i,_,c,p,A){const d=l("n-button"),u=l("n-space"),a=l("component-demo");return r(),m(a,{"demo-file-name":"manually-close","relative-url":"src/message/demos/enUS/manually-close.demo.md",title:"Manually Close",code:"%3Ctemplate%3E%0A%20%20%3Cn-space%3E%0A%20%20%20%20%3Cn-button%20%40click%3D%22createMessage%22%3E%20Create%20%3C%2Fn-button%3E%0A%20%20%20%20%3Cn-button%20%40click%3D%22removeMessage%22%3E%20Destroy%20%3C%2Fn-button%3E%0A%20%20%3C%2Fn-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20onBeforeUnmount%2C%20reactive%20%7D%20from%20'vue'%0Aimport%20%7B%20useMessage%20%7D%20from%20'novice-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20message%20%3D%20useMessage()%0A%20%20%20%20let%20messageReactive%20%3D%20reactive(null)%0A%0A%20%20%20%20const%20removeMessage%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20if%20(messageReactive)%20%7B%0A%20%20%20%20%20%20%20%20messageReactive.destroy()%0A%20%20%20%20%20%20%20%20messageReactive%20%3D%20null%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%0A%20%20%20%20onBeforeUnmount(removeMessage)%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20removeMessage%2C%0A%20%20%20%20%20%20createMessage%20()%20%7B%0A%20%20%20%20%20%20%20%20if%20(!messageReactive)%20%7B%0A%20%20%20%20%20%20%20%20%20%20messageReactive%20%3D%20message.info('3%20*%203%20*%204%20*%204%20*%20%3F'%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20duration%3A%200%0A%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:n(()=>[Ue]),content:n(()=>[]),demo:n(()=>[e("div",He,[o(u,null,{default:n(()=>[o(d,{onClick:s.createMessage},{default:n(()=>[Oe]),_:1},8,["onClick"]),o(d,{onClick:s.removeMessage},{default:n(()=>[ze]),_:1},8,["onClick"])]),_:1})])]),_:1})}var Ye=f(Ve,[["render",We]]);const qe=g({setup(){const s=y();return{info(){s.info("I don't know why nobody told you how to unfold your love",{duration:5e3})}}}}),Qe=t(" Caveat About Theme "),Ke=t("If you don't specified the theme, the theme of created message will be the same as its "),Ge=t("n-message-provider"),Je=t("."),Xe={class:"demo-card__view"},Ze=t(" You can change the theme while the message is active ");function e0(s,i,_,c,p,A){const d=l("n-text"),u=l("n-p"),a=l("n-button"),C=l("component-demo");return r(),m(C,{"demo-file-name":"about-theme","relative-url":"src/message/demos/enUS/about-theme.demo.md",title:"Caveat About Theme",code:"%3Ctemplate%3E%0A%20%20%3Cn-button%20%40click%3D%22info%22%3E%0A%20%20%20%20You%20can%20change%20the%20theme%20while%20the%20message%20is%20active%0A%20%20%3C%2Fn-button%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0Aimport%20%7B%20useMessage%20%7D%20from%20'novice-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20message%20%3D%20useMessage()%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20info%20()%20%7B%0A%20%20%20%20%20%20%20%20message.info(%0A%20%20%20%20%20%20%20%20%20%20%22I%20don't%20know%20why%20nobody%20told%20you%20how%20to%20unfold%20your%20love%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20duration%3A%205000%20%7D%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:n(()=>[Qe]),content:n(()=>[o(u,null,{default:n(()=>[Ke,o(d,{code:""},{default:n(()=>[Ge]),_:1}),Je]),_:1})]),demo:n(()=>[e("div",Xe,[o(a,{onClick:s.info},{default:n(()=>[Ze]),_:1},8,["onClick"])])]),_:1})}var t0=f(qe,[["render",e0]]);const n0=g({setup(){const s=y();return{info(){s.info("I don't know why nobody told you how to unfold your love. Once upon a time you dressed so fine. How many roads must a man walk down. 'Cause you walked hand in hand With another man in my place. If I were you, I will realize that I love you more than any other guy.")}}}}),o0=t(" Multiple Line "),s0={class:"demo-card__view"},l0=t(" Multiple Line ");function a0(s,i,_,c,p,A){const d=l("n-button"),u=l("component-demo");return r(),m(u,{"demo-file-name":"multiple-line","relative-url":"src/message/demos/enUS/multiple-line.demo.md",title:"Multiple Line",code:"%3Ctemplate%3E%0A%20%20%3Cn-button%20%40click%3D%22info%22%3E%20Multiple%20Line%20%3C%2Fn-button%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0Aimport%20%7B%20useMessage%20%7D%20from%20'novice-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20message%20%3D%20useMessage()%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20info%20()%20%7B%0A%20%20%20%20%20%20%20%20message.info(%0A%20%20%20%20%20%20%20%20%20%20%22I%20don't%20know%20why%20nobody%20told%20you%20how%20to%20unfold%20your%20love.%20Once%20upon%20a%20time%20you%20dressed%20so%20fine.%20How%20many%20roads%20must%20a%20man%20walk%20down.%20'Cause%20you%20walked%20hand%20in%20hand%20With%20another%20man%20in%20my%20place.%20If%20I%20were%20you%2C%20I%20will%20realize%20that%20I%20love%20you%20more%20than%20any%20other%20guy.%22%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:n(()=>[o0]),content:n(()=>[]),demo:n(()=>[e("div",s0,[o(d,{onClick:s.info},{default:n(()=>[l0]),_:1},8,["onClick"])])]),_:1})}var c0=f(n0,[["render",a0]]);const d0={emits:["changePlacement"],setup(){return{message:y(),placementArray:[{placement:"top",text:"Top"},{placement:"bottom",text:"Bottom"},{placement:"top-left",text:"TopLeft"},{placement:"top-right",text:"TopRight"},{placement:"bottom-left",text:"BottomLeft"},{placement:"bottom-right",text:"BottomRight"}]}},render(){return this.placementArray.map(s=>$(Q,{onClick:()=>{this.$emit("changePlacement",s.placement),this.message.info("How many roads must a man walk down")},style:{marginRight:"10px"}},{default:()=>s.text}))}},i0=g({components:{Buttons:d0},setup(){const s=E("top");return{placement:s,changePlacement(i){s.value=i}}}}),r0=t(" Placement "),u0={class:"demo-card__view"};function m0(s,i,_,c,p,A){const d=l("Buttons"),u=l("n-message-provider"),a=l("component-demo");return r(),m(a,{"demo-file-name":"placement","relative-url":"src/message/demos/enUS/placement.demo.md",title:"Placement",code:"%3Ctemplate%3E%0A%20%20%3Cn-message-provider%20%3Aplacement%3D%22placement%22%3E%0A%20%20%20%20%3CButtons%20%40changePlacement%3D%22changePlacement%22%20%2F%3E%0A%20%20%3C%2Fn-message-provider%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20h%2C%20ref%20%7D%20from%20'vue'%0Aimport%20%7B%20useMessage%2C%20NButton%20%7D%20from%20'novice-ui'%0A%0Aconst%20Buttons%20%3D%20%7B%0A%20%20emits%3A%20%5B'changePlacement'%5D%2C%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20message%20%3D%20useMessage()%0A%20%20%20%20const%20placementArray%20%3D%20%5B%0A%20%20%20%20%20%20%7B%20placement%3A%20'top'%2C%20text%3A%20'Top'%20%7D%2C%0A%20%20%20%20%20%20%7B%20placement%3A%20'bottom'%2C%20text%3A%20'Bottom'%20%7D%2C%0A%20%20%20%20%20%20%7B%20placement%3A%20'top-left'%2C%20text%3A%20'TopLeft'%20%7D%2C%0A%20%20%20%20%20%20%7B%20placement%3A%20'top-right'%2C%20text%3A%20'TopRight'%20%7D%2C%0A%20%20%20%20%20%20%7B%20placement%3A%20'bottom-left'%2C%20text%3A%20'BottomLeft'%20%7D%2C%0A%20%20%20%20%20%20%7B%20placement%3A%20'bottom-right'%2C%20text%3A%20'BottomRight'%20%7D%0A%20%20%20%20%5D%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20message%2C%0A%20%20%20%20%20%20placementArray%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20render%20()%20%7B%0A%20%20%20%20return%20this.placementArray.map((item)%20%3D%3E%0A%20%20%20%20%20%20h(%0A%20%20%20%20%20%20%20%20NButton%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20onClick%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20this.%24emit('changePlacement'%2C%20item.placement)%0A%20%20%20%20%20%20%20%20%20%20%20%20this.message.info('How%20many%20roads%20must%20a%20man%20walk%20down')%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20style%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20marginRight%3A%20'10px'%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20default%3A%20()%20%3D%3E%20item.text%20%7D%0A%20%20%20%20%20%20)%0A%20%20%20%20)%0A%20%20%7D%0A%7D%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20components%3A%20%7B%0A%20%20%20%20Buttons%0A%20%20%7D%2C%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20placementRef%20%3D%20ref('top')%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20placement%3A%20placementRef%2C%0A%20%20%20%20%20%20changePlacement%20(val)%20%7B%0A%20%20%20%20%20%20%20%20placementRef.value%20%3D%20val%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:n(()=>[r0]),content:n(()=>[]),demo:n(()=>[e("div",u0,[o(u,{placement:s.placement},{default:n(()=>[o(d,{onChangePlacement:s.changePlacement},null,8,["onChangePlacement"])]),_:1},8,["placement"])])]),_:1})}var _0=f(i0,[["render",m0]]);const p0={components:{basicDemo:ie,iconDemo:he,timingDemo:De,closableDemo:je,modifyContentDemo:Le,manuallyCloseDemo:Ye,aboutThemeDemo:t0,multipleLineDemo:c0,placementDemo:_0},setup(){const s=K(),i=G(()=>!s.value),_=s;return{showAnchor:i,displayMode:J(),wrapperStyle:I(()=>_.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:I(()=>i.value?"width: calc(100% - 164px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"src/message/demos/enUS/index.demo-entry.md"}}},h0=t("Oracle from the top(always) of the browser."),f0=t(" If you want use message, you need to wrap the component where you call related methods inside "),A0=t("n-message-provider"),g0=t(" and use "),y0=t("useMessage"),C0=t(" to get the API. "),v0=t(" For example: "),D0=e("pre",null,[e("span",{class:"hljs-comment"},"<!-- App.vue -->"),t(`
`),e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"n-message-provider"),t(">")]),t(`
  `),e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"content"),t(" />")]),t(`
`),e("span",{class:"hljs-tag"},[t("</"),e("span",{class:"hljs-name"},"n-message-provider"),t(">")])],-1),b0=e("pre",null,[e("span",{class:"hljs-keyword"},"import"),t(" { useMessage } "),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'novice-ui'"),t(`
`),e("span",{class:"hljs-keyword"},"import"),t(" { defineComponent } "),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'vue'"),t(`

`),e("span",{class:"hljs-comment"},"// content"),t(`
`),e("span",{class:"hljs-keyword"},"export"),t(),e("span",{class:"hljs-keyword"},"default"),t(),e("span",{class:"hljs-title function_"},"defineComponent"),t(`({
  setup () {
    `),e("span",{class:"hljs-keyword"},"const"),t(" message = "),e("span",{class:"hljs-title function_"},"useMessage"),t(`()
    `),e("span",{class:"hljs-keyword"},"return"),t(` {
      warning () {
        message.`),e("span",{class:"hljs-title function_"},"warning"),t("("),e("span",{class:"hljs-string"},"'...'"),t(`)
      }
    }
  }
})`)],-1),w0=t("Demos"),M0=t("API"),B0=t("MessageProvider Props"),k0={class:"md-table-wrapper"},$0=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Default"),e("th",null,"Description")])],-1),E0=e("td",null,"closable",-1),x0=t("boolean"),j0=e("td",null,"Whether to show close icon on all messages.",-1),I0=e("td",null,null,-1),R0=e("td",null,"duration",-1),F0=t("number"),P0=t("3000"),N0=e("td",null,"Default duration of on all messages.",-1),T0=e("td",null,"keep-alive-on-hover",-1),S0=t("boolean"),L0=t("false"),V0=e("td",null,"Whether to destroy while hovering on all messages.",-1),U0=e("td",null,"max",-1),H0=t("number"),O0=t("undefined"),z0=e("td",null,"Limit the number of messages to display.",-1),W0=e("td",null,"placement",-1),Y0=t("top | top-left | top-right | bottom | bottom-left | bottom-right "),q0=t("top"),Q0=e("td",null,"Placement of all messages.",-1),K0=e("td",null,"to",-1),G0=t("string | HTMLElement"),J0=t("'body'"),X0=e("td",null,"Container node of message container.",-1),Z0=t("MessageProvider Injection API"),e2=t("MessageProvider Injection Methods"),t2={class:"md-table-wrapper"},n2=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Description")])],-1),o2=e("td",null,"destroyAll",-1),s2=t("() => void"),l2=e("td",null,"Destroy all popup messages.",-1),a2=e("td",null,"error",-1),c2=t("(content: string | (() => VNodeChild), option?: MessageOption) => MessageReactive"),d2=e("td",null,"Use error type message.",-1),i2=e("td",null,"info",-1),r2=t("(content: string | (() => VNodeChild), option?: MessageOption) => MessageReactive"),u2=e("td",null,"Use info type message.",-1),m2=e("td",null,"loading",-1),_2=t("(content: string | (() => VNodeChild), option?: MessageOption) => MessageReactive"),p2=e("td",null,"Use loading type message.",-1),h2=e("td",null,"success",-1),f2=t("(content: string | (() => VNodeChild), option?: MessageOption) => MessageReactive"),A2=e("td",null,"Use success type message.",-1),g2=e("td",null,"warning",-1),y2=t("(content: string | (() => VNodeChild), option?: MessageOption) => MessageReactive"),C2=e("td",null,"Use warning type message.",-1),v2=t("MessageOption Properties"),D2={class:"md-table-wrapper"},b2=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Description")])],-1),w2=e("td",null,"closable",-1),M2=t("boolean"),B2=e("td",null,"Whether to show close icon.",-1),k2=e("td",null,"duration",-1),$2=t("number"),E2=e("td",null,"The duration of the message.",-1),x2=e("td",null,"icon",-1),j2=t("() => VNode"),I2=e("td",null,"Message icon.",-1),R2=e("td",null,"keepAliveOnHover",-1),F2=t("boolean"),P2=e("td",null,"Messages whether to destroy while hover",-1),N2=e("td",null,"onAfterLeave",-1),T2=t("() => void"),S2=e("td",null,"Callback after message disappeared.",-1),L2=e("td",null,"onClose",-1),V2=t("() => void"),U2=e("td",null,"Callback when close icon is clicked.",-1),H2=e("td",null,"onLeave",-1),O2=t("() => void"),z2=e("td",null,"Callback when message start to disappear.",-1),W2=t("MessageReactive Properties"),Y2={class:"md-table-wrapper"},q2=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Description")])],-1),Q2=e("td",null,"closable",-1),K2=t("boolean"),G2=e("td",null,"Whether to show close icon.",-1),J2=e("td",null,"content",-1),X2=t("string | (() => VNodeChild)"),Z2=e("td",null,"Message content.",-1),et=e("td",null,"destroy",-1),tt=t("() => void"),nt=e("td",null,"Message destroy method.",-1),ot=e("td",null,"icon",-1),st=t("() => VNode"),lt=e("td",null,"Message icon.",-1),at=e("td",null,"keepAliveOnHover",-1),ct=t("boolean"),dt=e("td",null,"Messages whether to destroy while hover",-1),it=e("td",null,"type",-1),rt=t("'info' | 'success' | 'warning' | 'error' | 'loading'"),ut=e("td",null,"Message type.",-1),mt=e("td",null,"onAfterLeave",-1),_t=t("() => void"),pt=e("td",null,"Callback after message disappeared.",-1),ht=e("td",null,"onLeave",-1),ft=t("() => void"),At=e("td",null,"Callback when message start to disappear.",-1),gt=t("MessageReactive Methods"),yt={class:"md-table-wrapper"},Ct=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Description")])],-1),vt=e("td",null,"destroy",-1),Dt=t("()"),bt=e("td",null,"Message destroy method.",-1),wt=t("Q & A"),Mt=t("Use Message Outside Setup"),Bt=t(" You need to mount the return value of "),kt=t("useMessage"),$t=t(" to the window in the top-level setup and then call it. Before calling it, you need to make sure that message has been mounted successfully. "),Et=e("pre",null,[e("span",{class:"hljs-comment"},"<!-- App.vue -->"),t(`
`),e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"n-message-provider"),t(">")]),t(`
  `),e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"content"),t(" />")]),t(`
`),e("span",{class:"hljs-tag"},[t("</"),e("span",{class:"hljs-name"},"n-message-provider"),t(">")])],-1),xt=e("pre",null,[e("span",{class:"hljs-comment"},"<!-- content.vue -->"),t(`
`),e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"template"),t(">")]),t("..."),e("span",{class:"hljs-tag"},[t("</"),e("span",{class:"hljs-name"},"template"),t(">")]),t(`

`),e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"script"),t(">")]),e("span",{class:"language-javascript"},[t(`
  `),e("span",{class:"hljs-keyword"},"import"),t(" { useMessage } "),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'novice-ui'"),t(`
  `),e("span",{class:"hljs-keyword"},"import"),t(" { defineComponent } "),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'vue'"),t(`

  `),e("span",{class:"hljs-comment"},"// content"),t(`
  `),e("span",{class:"hljs-keyword"},"export"),t(),e("span",{class:"hljs-keyword"},"default"),t(),e("span",{class:"hljs-title function_"},"defineComponent"),t(`({
    `),e("span",{class:"hljs-title function_"},"setup"),t("("),e("span",{class:"hljs-params"}),t(`) {
      `),e("span",{class:"hljs-variable language_"},"window"),t("."),e("span",{class:"hljs-property"},"$message"),t(" = "),e("span",{class:"hljs-title function_"},"useMessage"),t(`()
    }
  })
`)]),e("span",{class:"hljs-tag"},[t("</"),e("span",{class:"hljs-name"},"script"),t(">")])],-1),jt=e("pre",null,[e("span",{class:"hljs-comment"},"// xxx.js"),t(`
`),e("span",{class:"hljs-keyword"},"export"),t(),e("span",{class:"hljs-keyword"},"const"),t(),e("span",{class:"hljs-title function_"},"handler"),t(" = ("),e("span",{class:"hljs-params"}),t(`) => {
  `),e("span",{class:"hljs-comment"},"// You need to ensure that window.$message = message has been executed in setup"),t(`
  `),e("span",{class:"hljs-variable language_"},"window"),t("."),e("span",{class:"hljs-property"},"$message"),t("."),e("span",{class:"hljs-title function_"},"success"),t(`(
    `),e("span",{class:"hljs-string"},"'Cause you walked hand in hand With another man in my place'"),t(`
  )
}`)],-1),It={key:0,style:{width:"128px"}};function Rt(s,i,_,c,p,A){const d=l("edit-on-github-header"),u=l("n-p"),a=l("n-text"),C=l("n-alert"),v=l("n-code"),D=l("n-scrollbar"),b=l("n-card"),x=l("n-space"),B=l("n-h2"),P=l("basicDemo"),N=l("iconDemo"),T=l("timingDemo"),S=l("closableDemo"),L=l("modifyContentDemo"),V=l("manuallyCloseDemo"),U=l("aboutThemeDemo"),H=l("multipleLineDemo"),O=l("placementDemo"),z=l("component-demos"),k=l("n-h3"),w=l("n-table"),M=l("n-h4"),h=l("n-anchor-link"),W=l("n-anchor");return r(),R("div",{class:"doc",style:F(c.wrapperStyle)},[e("div",{style:F(c.contentStyle)},[o(d,{"relative-url":"src/message/demos/enUS/index.demo-entry.md",text:"Message"}),o(u,null,{default:n(()=>[h0]),_:1}),o(x,{vertical:""},{default:n(()=>[o(C,{title:"Prerequisite",type:"warning"},{default:n(()=>[f0,o(a,{code:""},{default:n(()=>[A0]),_:1}),g0,o(a,{code:""},{default:n(()=>[y0]),_:1}),C0]),_:1}),v0,o(b,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:n(()=>[o(D,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:n(()=>[o(v,null,{default:n(()=>[D0]),_:1})]),_:1})]),_:1}),o(b,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:n(()=>[o(D,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:n(()=>[o(v,null,{default:n(()=>[b0]),_:1})]),_:1})]),_:1})]),_:1}),o(B,{id:"Demos"},{default:n(()=>[w0]),_:1}),o(z,{span:2},{default:n(()=>[o(P),o(N),o(T),o(S),o(L),o(V),o(U),o(H),o(O)]),_:1}),o(B,{id:"API"},{default:n(()=>[M0]),_:1}),o(k,{id:"MessageProvider-Props"},{default:n(()=>[B0]),_:1}),e("div",k0,[o(w,{"single-column":"",class:"md-table"},{default:n(()=>[$0,e("tbody",null,[e("tr",null,[E0,e("td",null,[o(a,{code:""},{default:n(()=>[x0]),_:1})]),j0,I0]),e("tr",null,[R0,e("td",null,[o(a,{code:""},{default:n(()=>[F0]),_:1})]),e("td",null,[o(a,{code:""},{default:n(()=>[P0]),_:1})]),N0]),e("tr",null,[T0,e("td",null,[o(a,{code:""},{default:n(()=>[S0]),_:1})]),e("td",null,[o(a,{code:""},{default:n(()=>[L0]),_:1})]),V0]),e("tr",null,[U0,e("td",null,[o(a,{code:""},{default:n(()=>[H0]),_:1})]),e("td",null,[o(a,{code:""},{default:n(()=>[O0]),_:1})]),z0]),e("tr",null,[W0,e("td",null,[o(a,{code:""},{default:n(()=>[Y0]),_:1})]),e("td",null,[o(a,{code:""},{default:n(()=>[q0]),_:1})]),Q0]),e("tr",null,[K0,e("td",null,[o(a,{code:""},{default:n(()=>[G0]),_:1})]),e("td",null,[o(a,{code:""},{default:n(()=>[J0]),_:1})]),X0])])]),_:1})]),o(k,{id:"MessageProvider-Injection-API"},{default:n(()=>[Z0]),_:1}),o(M,{id:"MessageProvider-Injection-Methods"},{default:n(()=>[e2]),_:1}),e("div",t2,[o(w,{"single-column":"",class:"md-table"},{default:n(()=>[n2,e("tbody",null,[e("tr",null,[o2,e("td",null,[o(a,{code:""},{default:n(()=>[s2]),_:1})]),l2]),e("tr",null,[a2,e("td",null,[o(a,{code:""},{default:n(()=>[c2]),_:1})]),d2]),e("tr",null,[i2,e("td",null,[o(a,{code:""},{default:n(()=>[r2]),_:1})]),u2]),e("tr",null,[m2,e("td",null,[o(a,{code:""},{default:n(()=>[_2]),_:1})]),p2]),e("tr",null,[h2,e("td",null,[o(a,{code:""},{default:n(()=>[f2]),_:1})]),A2]),e("tr",null,[g2,e("td",null,[o(a,{code:""},{default:n(()=>[y2]),_:1})]),C2])])]),_:1})]),o(M,{id:"MessageOption-Properties"},{default:n(()=>[v2]),_:1}),e("div",D2,[o(w,{"single-column":"",class:"md-table"},{default:n(()=>[b2,e("tbody",null,[e("tr",null,[w2,e("td",null,[o(a,{code:""},{default:n(()=>[M2]),_:1})]),B2]),e("tr",null,[k2,e("td",null,[o(a,{code:""},{default:n(()=>[$2]),_:1})]),E2]),e("tr",null,[x2,e("td",null,[o(a,{code:""},{default:n(()=>[j2]),_:1})]),I2]),e("tr",null,[R2,e("td",null,[o(a,{code:""},{default:n(()=>[F2]),_:1})]),P2]),e("tr",null,[N2,e("td",null,[o(a,{code:""},{default:n(()=>[T2]),_:1})]),S2]),e("tr",null,[L2,e("td",null,[o(a,{code:""},{default:n(()=>[V2]),_:1})]),U2]),e("tr",null,[H2,e("td",null,[o(a,{code:""},{default:n(()=>[O2]),_:1})]),z2])])]),_:1})]),o(M,{id:"MessageReactive-Properties"},{default:n(()=>[W2]),_:1}),e("div",Y2,[o(w,{"single-column":"",class:"md-table"},{default:n(()=>[q2,e("tbody",null,[e("tr",null,[Q2,e("td",null,[o(a,{code:""},{default:n(()=>[K2]),_:1})]),G2]),e("tr",null,[J2,e("td",null,[o(a,{code:""},{default:n(()=>[X2]),_:1})]),Z2]),e("tr",null,[et,e("td",null,[o(a,{code:""},{default:n(()=>[tt]),_:1})]),nt]),e("tr",null,[ot,e("td",null,[o(a,{code:""},{default:n(()=>[st]),_:1})]),lt]),e("tr",null,[at,e("td",null,[o(a,{code:""},{default:n(()=>[ct]),_:1})]),dt]),e("tr",null,[it,e("td",null,[o(a,{code:""},{default:n(()=>[rt]),_:1})]),ut]),e("tr",null,[mt,e("td",null,[o(a,{code:""},{default:n(()=>[_t]),_:1})]),pt]),e("tr",null,[ht,e("td",null,[o(a,{code:""},{default:n(()=>[ft]),_:1})]),At])])]),_:1})]),o(M,{id:"MessageReactive-Methods"},{default:n(()=>[gt]),_:1}),e("div",yt,[o(w,{"single-column":"",class:"md-table"},{default:n(()=>[Ct,e("tbody",null,[e("tr",null,[vt,e("td",null,[o(a,{code:""},{default:n(()=>[Dt]),_:1})]),bt])])]),_:1})]),o(B,{id:"Q-&-A"},{default:n(()=>[wt]),_:1}),o(k,{id:"Use-Message-Outside-Setup"},{default:n(()=>[Mt]),_:1}),o(x,{vertical:""},{default:n(()=>[o(C,{type:"warning"},{default:n(()=>[Bt,o(a,{code:""},{default:n(()=>[kt]),_:1}),$t]),_:1}),o(b,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:n(()=>[o(D,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:n(()=>[o(v,null,{default:n(()=>[Et]),_:1})]),_:1})]),_:1}),o(b,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:n(()=>[o(D,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:n(()=>[o(v,null,{default:n(()=>[xt]),_:1})]),_:1})]),_:1}),o(b,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:n(()=>[o(D,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:n(()=>[o(v,null,{default:n(()=>[jt]),_:1})]),_:1})]),_:1})]),_:1})],4),c.showAnchor?(r(),R("div",It,[o(W,{"internal-scrollable":"",bound:16,type:"block",style:{width:"128px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:n(()=>[(c.displayMode,r(),m(h,{key:0,title:"Basic",href:"#basic"})),(c.displayMode,r(),m(h,{key:1,title:"Icon",href:"#icon"})),(c.displayMode,r(),m(h,{key:2,title:"Timing",href:"#timing"})),(c.displayMode,r(),m(h,{key:3,title:"Closable",href:"#closable"})),(c.displayMode,r(),m(h,{key:4,title:"Modify Exist Message",href:"#modify-content"})),(c.displayMode,r(),m(h,{key:5,title:"Manually Close",href:"#manually-close"})),(c.displayMode,r(),m(h,{key:6,title:"Caveat About Theme",href:"#about-theme"})),(c.displayMode,r(),m(h,{key:7,title:"Multiple Line",href:"#multiple-line"})),(c.displayMode,r(),m(h,{key:8,title:"Placement",href:"#placement"})),(c.displayMode,r(),m(h,{key:9,title:"API",href:"#API"}))]),_:1})])):X("",!0)],4)}var Tt=f(p0,[["render",Rt]]);export{Tt as default};
