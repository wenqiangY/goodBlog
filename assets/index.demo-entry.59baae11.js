import{k as g,y as C,_ as A,r as l,o as u,j as _,w as n,e,f as o,h as t,q as M,s as Q,m as $,A as j,K as q,z as K,u as G,a as J,b as X,c as F,d as I,n as R,g as Y}from"./index.95fbdc71.js";import{M as Z}from"./MdHourglass.89a6833f.js";import"./axios.dd49c521.js";const ee=g({setup(){const s=C();return{info(){s.info("I don't know why nobody told you how to unfold your love",{keepAliveOnHover:!0})},error(){s.error("Once upon a time you dressed so fine")},warning(){s.warning("How many roads must a man walk down")},success(){s.success("'Cause you walked hand in hand With another man in my place")},loading(){s.loading("If I were you, I will realize that I love you more than any other guy")}}}}),te=t(" \u57FA\u7840\u7528\u6CD5 "),ne={class:"demo-card__view"},oe=t(" \u4FE1\u606F\uFF08Hover\u4E0D\u6D88\u5931\uFF09"),se=t(" \u9519\u8BEF "),le=t(" \u8B66\u544A "),ae=t(" \u6210\u529F "),ce=t(" \u52A0\u8F7D\u4E2D ");function de(s,i,m,c,p,f){const d=l("n-button"),r=l("n-space"),a=l("component-demo");return u(),_(a,{"demo-file-name":"basic","relative-url":"src/message/demos/zhCN/basic.demo.md",title:"\u57FA\u7840\u7528\u6CD5",code:"%3Ctemplate%3E%0A%20%20%3Cn-space%3E%0A%20%20%20%20%3Cn-button%20%40click%3D%22info%22%3E%20%E4%BF%A1%E6%81%AF%EF%BC%88Hover%E4%B8%8D%E6%B6%88%E5%A4%B1%EF%BC%89%3C%2Fn-button%3E%0A%20%20%20%20%3Cn-button%20%40click%3D%22error%22%3E%20%E9%94%99%E8%AF%AF%20%3C%2Fn-button%3E%0A%20%20%20%20%3Cn-button%20%40click%3D%22warning%22%3E%20%E8%AD%A6%E5%91%8A%20%3C%2Fn-button%3E%0A%20%20%20%20%3Cn-button%20%40click%3D%22success%22%3E%20%E6%88%90%E5%8A%9F%20%3C%2Fn-button%3E%0A%20%20%20%20%3Cn-button%20%40click%3D%22loading%22%3E%20%E5%8A%A0%E8%BD%BD%E4%B8%AD%20%3C%2Fn-button%3E%0A%20%20%3C%2Fn-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0Aimport%20%7B%20useMessage%20%7D%20from%20'novice-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20message%20%3D%20useMessage()%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20info%20()%20%7B%0A%20%20%20%20%20%20%20%20message.info(%0A%20%20%20%20%20%20%20%20%20%20%22I%20don't%20know%20why%20nobody%20told%20you%20how%20to%20unfold%20your%20love%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20keepAliveOnHover%3A%20true%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20error%20()%20%7B%0A%20%20%20%20%20%20%20%20message.error('Once%20upon%20a%20time%20you%20dressed%20so%20fine')%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20warning%20()%20%7B%0A%20%20%20%20%20%20%20%20message.warning('How%20many%20roads%20must%20a%20man%20walk%20down')%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20success%20()%20%7B%0A%20%20%20%20%20%20%20%20message.success(%0A%20%20%20%20%20%20%20%20%20%20%22'Cause%20you%20walked%20hand%20in%20hand%20With%20another%20man%20in%20my%20place%22%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20loading%20()%20%7B%0A%20%20%20%20%20%20%20%20message.loading(%0A%20%20%20%20%20%20%20%20%20%20'If%20I%20were%20you%2C%20I%20will%20realize%20that%20I%20love%20you%20more%20than%20any%20other%20guy'%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:n(()=>[te]),content:n(()=>[]),demo:n(()=>[e("div",ne,[o(r,null,{default:n(()=>[o(d,{onClick:s.info},{default:n(()=>[oe]),_:1},8,["onClick"]),o(d,{onClick:s.error},{default:n(()=>[se]),_:1},8,["onClick"]),o(d,{onClick:s.warning},{default:n(()=>[le]),_:1},8,["onClick"]),o(d,{onClick:s.success},{default:n(()=>[ae]),_:1},8,["onClick"]),o(d,{onClick:s.loading},{default:n(()=>[ce]),_:1},8,["onClick"])]),_:1})])]),_:1})}var ie=A(ee,[["render",de]]);const ue=g({setup(){const s=C();return{createMessage(){s.warning("I never needed anybody's help in any way",{icon:()=>M(Q,null,{default:()=>M(Z)})})}}}}),re=t(" \u56FE\u6807 "),_e={class:"demo-card__view"},me=t(" \u6F0F\u6597\u56FE\u6807 ");function pe(s,i,m,c,p,f){const d=l("n-button"),r=l("component-demo");return u(),_(r,{"demo-file-name":"icon","relative-url":"src/message/demos/zhCN/icon.demo.md",title:"\u56FE\u6807",code:"%3Ctemplate%3E%0A%20%20%3Cn-button%20%40click%3D%22createMessage%22%3E%20%E6%BC%8F%E6%96%97%E5%9B%BE%E6%A0%87%20%3C%2Fn-button%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20h%20%7D%20from%20'vue'%0Aimport%20%7B%20NIcon%2C%20useMessage%20%7D%20from%20'novice-ui'%0Aimport%20%7B%20MdHourglass%20%7D%20from%20'%40vicons%2Fionicons4'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20message%20%3D%20useMessage()%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20createMessage%20()%20%7B%0A%20%20%20%20%20%20%20%20message.warning(%22I%20never%20needed%20anybody's%20help%20in%20any%20way%22%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20icon%3A%20()%20%3D%3E%20h(NIcon%2C%20null%2C%20%7B%20default%3A%20()%20%3D%3E%20h(MdHourglass)%20%7D)%0A%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:n(()=>[re]),content:n(()=>[]),demo:n(()=>[e("div",_e,[o(d,{onClick:s.createMessage},{default:n(()=>[me]),_:1},8,["onClick"])])]),_:1})}var he=A(ue,[["render",pe]]);const Ae=g({setup(){const s=C();return{createMessage(){s.info("I don't know why nobody told you how to unfold your love",{duration:5e3})}}}}),fe=t(" \u65F6\u95F4 "),ge=t("\u8BBE\u5B9A Message \u7684\u6301\u7EED\u65F6\u95F4\u3002"),Ce={class:"demo-card__view"},ye=t(" \u6301\u7EED 5 \u79D2 ");function ve(s,i,m,c,p,f){const d=l("n-p"),r=l("n-button"),a=l("component-demo");return u(),_(a,{"demo-file-name":"timing","relative-url":"src/message/demos/zhCN/timing.demo.md",title:"\u65F6\u95F4",code:"%3Ctemplate%3E%0A%20%20%3Cn-button%20%40click%3D%22createMessage%22%3E%20%E6%8C%81%E7%BB%AD%205%20%E7%A7%92%20%3C%2Fn-button%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0Aimport%20%7B%20useMessage%20%7D%20from%20'novice-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20message%20%3D%20useMessage()%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20createMessage%20()%20%7B%0A%20%20%20%20%20%20%20%20message.info(%0A%20%20%20%20%20%20%20%20%20%20%22I%20don't%20know%20why%20nobody%20told%20you%20how%20to%20unfold%20your%20love%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20duration%3A%205000%20%7D%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:n(()=>[fe]),content:n(()=>[o(d,null,{default:n(()=>[ge]),_:1})]),demo:n(()=>[e("div",Ce,[o(r,{onClick:s.createMessage},{default:n(()=>[ye]),_:1},8,["onClick"])])]),_:1})}var De=A(Ae,[["render",ve]]);const Be=g({setup(){const s=C();return{createMessage(){s.info("I don't know why nobody told you how to unfold your love",{closable:!0,duration:5e3})}}}}),Ee=t(" \u53EF\u5173\u95ED "),be=t("\u8BBE\u5B9A "),we=t("closable"),ke=t(" \u4F7F Message \u53EF\u4EE5\u901A\u8FC7\u70B9\u51FB\u5173\u95ED\u3002"),Me={class:"demo-card__view"},$e=t(" \u6253\u5F00\u4FE1\u606F ");function xe(s,i,m,c,p,f){const d=l("n-text"),r=l("n-p"),a=l("n-button"),y=l("component-demo");return u(),_(y,{"demo-file-name":"closable","relative-url":"src/message/demos/zhCN/closable.demo.md",title:"\u53EF\u5173\u95ED",code:"%3Ctemplate%3E%0A%20%20%3Cn-button%20%40click%3D%22createMessage%22%3E%20%E6%89%93%E5%BC%80%E4%BF%A1%E6%81%AF%20%3C%2Fn-button%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0Aimport%20%7B%20useMessage%20%7D%20from%20'novice-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20message%20%3D%20useMessage()%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20createMessage%20()%20%7B%0A%20%20%20%20%20%20%20%20message.info(%0A%20%20%20%20%20%20%20%20%20%20%22I%20don't%20know%20why%20nobody%20told%20you%20how%20to%20unfold%20your%20love%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20closable%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20duration%3A%205000%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:n(()=>[Ee]),content:n(()=>[o(r,null,{default:n(()=>[be,o(d,{code:""},{default:n(()=>[we]),_:1}),ke]),_:1})]),demo:n(()=>[e("div",Me,[o(a,{onClick:s.createMessage},{default:n(()=>[$e]),_:1},8,["onClick"])])]),_:1})}var je=A(Be,[["render",xe]]);const Fe=g({setup(){const s=C(),i=["success","info","warning","error","loading"],m=$(0),c=$(0);let p=j(null);return{plus(){p&&(m.value++,p.content=""+m.value)},changeType(){p&&(c.value=(c.value+1)%i.length,p.type=i[c.value])},createMessage(){p=s[i[c.value]](""+m.value,{duration:1e4})}}}}),Ie=t(" \u4FEE\u6539\u521B\u5EFA\u7684\u4FE1\u606F "),Re={class:"demo-card__view"},Ne=t(" \u5148\u5F00\u4E2A\u4FE1\u606F "),Pe=t("\u6539\u53D8\u7C7B\u578B"),ze=t("\u52A0\u4E00");function Ve(s,i,m,c,p,f){const d=l("n-button"),r=l("n-space"),a=l("component-demo");return u(),_(a,{"demo-file-name":"modify-content","relative-url":"src/message/demos/zhCN/modify-content.demo.md",title:"\u4FEE\u6539\u521B\u5EFA\u7684\u4FE1\u606F",code:"%3Ctemplate%3E%0A%20%20%3Cn-space%3E%0A%20%20%20%20%3Cn-button%20%40click%3D%22createMessage%22%3E%20%E5%85%88%E5%BC%80%E4%B8%AA%E4%BF%A1%E6%81%AF%20%3C%2Fn-button%3E%0A%20%20%20%20%3Cn-button%20%40click%3D%22changeType%22%3E%E6%94%B9%E5%8F%98%E7%B1%BB%E5%9E%8B%3C%2Fn-button%3E%0A%20%20%20%20%3Cn-button%20%40click%3D%22plus%22%3E%E5%8A%A0%E4%B8%80%3C%2Fn-button%3E%0A%20%20%3C%2Fn-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%2C%20reactive%20%7D%20from%20'vue'%0Aimport%20%7B%20useMessage%20%7D%20from%20'novice-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20message%20%3D%20useMessage()%0A%20%20%20%20const%20types%20%3D%20%5B'success'%2C%20'info'%2C%20'warning'%2C%20'error'%2C%20'loading'%5D%0A%20%20%20%20const%20countRef%20%3D%20ref(0)%0A%20%20%20%20const%20typeIndexRef%20%3D%20ref(0)%0A%20%20%20%20let%20msgReactive%20%3D%20reactive(null)%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20plus%20()%20%7B%0A%20%20%20%20%20%20%20%20if%20(msgReactive)%20%7B%0A%20%20%20%20%20%20%20%20%20%20countRef.value%2B%2B%0A%20%20%20%20%20%20%20%20%20%20msgReactive.content%20%3D%20''%20%2B%20countRef.value%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20changeType%20()%20%7B%0A%20%20%20%20%20%20%20%20if%20(msgReactive)%20%7B%0A%20%20%20%20%20%20%20%20%20%20typeIndexRef.value%20%3D%20(typeIndexRef.value%20%2B%201)%20%25%20types.length%0A%20%20%20%20%20%20%20%20%20%20msgReactive.type%20%3D%20types%5BtypeIndexRef.value%5D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20createMessage%20()%20%7B%0A%20%20%20%20%20%20%20%20msgReactive%20%3D%20message%5Btypes%5BtypeIndexRef.value%5D%5D(''%20%2B%20countRef.value%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20duration%3A%2010000%0A%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:n(()=>[Ie]),content:n(()=>[]),demo:n(()=>[e("div",Re,[o(r,null,{default:n(()=>[o(d,{onClick:s.createMessage},{default:n(()=>[Ne]),_:1},8,["onClick"]),o(d,{onClick:s.changeType},{default:n(()=>[Pe]),_:1},8,["onClick"]),o(d,{onClick:s.plus},{default:n(()=>[ze]),_:1},8,["onClick"])]),_:1})])]),_:1})}var He=A(Fe,[["render",Ve]]);const Oe=g({setup(){const s=C();let i=j(null);const m=()=>{i&&(i.destroy(),i=null)};return q(m),{removeMessage:m,createMessage(){i||(i=s.info("3 * 3 * 4 * 4 * ?",{duration:0}))}}}}),Te=t(" \u624B\u52A8\u5173\u95ED "),Le={class:"demo-card__view"},Se=t(" \u6253\u5F00 "),We=t(" \u5173\u95ED ");function Ue(s,i,m,c,p,f){const d=l("n-button"),r=l("n-space"),a=l("component-demo");return u(),_(a,{"demo-file-name":"manually-close","relative-url":"src/message/demos/zhCN/manually-close.demo.md",title:"\u624B\u52A8\u5173\u95ED",code:"%3Ctemplate%3E%0A%20%20%3Cn-space%3E%0A%20%20%20%20%3Cn-button%20%40click%3D%22createMessage%22%3E%20%E6%89%93%E5%BC%80%20%3C%2Fn-button%3E%0A%20%20%20%20%3Cn-button%20%40click%3D%22removeMessage%22%3E%20%E5%85%B3%E9%97%AD%20%3C%2Fn-button%3E%0A%20%20%3C%2Fn-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20onBeforeUnmount%2C%20reactive%20%7D%20from%20'vue'%0Aimport%20%7B%20useMessage%20%7D%20from%20'novice-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20message%20%3D%20useMessage()%0A%20%20%20%20let%20messageReactive%20%3D%20reactive(null)%0A%0A%20%20%20%20const%20removeMessage%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20if%20(messageReactive)%20%7B%0A%20%20%20%20%20%20%20%20messageReactive.destroy()%0A%20%20%20%20%20%20%20%20messageReactive%20%3D%20null%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%0A%20%20%20%20onBeforeUnmount(removeMessage)%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20removeMessage%2C%0A%20%20%20%20%20%20createMessage%20()%20%7B%0A%20%20%20%20%20%20%20%20if%20(!messageReactive)%20%7B%0A%20%20%20%20%20%20%20%20%20%20messageReactive%20%3D%20message.info('3%20*%203%20*%204%20*%204%20*%20%3F'%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20duration%3A%200%0A%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:n(()=>[Te]),content:n(()=>[]),demo:n(()=>[e("div",Le,[o(r,null,{default:n(()=>[o(d,{onClick:s.createMessage},{default:n(()=>[Se]),_:1},8,["onClick"]),o(d,{onClick:s.removeMessage},{default:n(()=>[We]),_:1},8,["onClick"])]),_:1})])]),_:1})}var Qe=A(Oe,[["render",Ue]]);const qe=g({setup(){const s=C();return{info(){s.info("I don't know why nobody told you how to unfold your love",{duration:5e3})}}}}),Ke=t(" \u5173\u4E8E\u4E3B\u9898\u7684\u6CE8\u610F\u4E8B\u9879 "),Ge=t("\u5982\u679C\u4F60\u4E0D\u660E\u786E\u6307\u660E\u4E3B\u9898\uFF0C\u88AB\u521B\u5EFA\u4FE1\u606F\u7684\u4E3B\u9898\u4F1A\u4E0E\u5BF9\u5E94 "),Je=t("n-message-provider"),Xe=t(" \u7684\u4E3B\u9898\u4E00\u81F4\u3002"),Ye={class:"demo-card__view"},Ze=t(" \u4F60\u53EF\u4EE5\u5728 Message \u8FD8\u5728\u7684\u65F6\u5019\u5207\u6362\u4E3B\u9898 ");function e0(s,i,m,c,p,f){const d=l("n-text"),r=l("n-p"),a=l("n-button"),y=l("component-demo");return u(),_(y,{"demo-file-name":"about-theme","relative-url":"src/message/demos/zhCN/about-theme.demo.md",title:"\u5173\u4E8E\u4E3B\u9898\u7684\u6CE8\u610F\u4E8B\u9879",code:"%3Ctemplate%3E%0A%20%20%3Cn-button%20%40click%3D%22info%22%3E%20%E4%BD%A0%E5%8F%AF%E4%BB%A5%E5%9C%A8%20Message%20%E8%BF%98%E5%9C%A8%E7%9A%84%E6%97%B6%E5%80%99%E5%88%87%E6%8D%A2%E4%B8%BB%E9%A2%98%20%3C%2Fn-button%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0Aimport%20%7B%20useMessage%20%7D%20from%20'novice-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20message%20%3D%20useMessage()%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20info%20()%20%7B%0A%20%20%20%20%20%20%20%20message.info(%0A%20%20%20%20%20%20%20%20%20%20%22I%20don't%20know%20why%20nobody%20told%20you%20how%20to%20unfold%20your%20love%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20duration%3A%205000%20%7D%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:n(()=>[Ke]),content:n(()=>[o(r,null,{default:n(()=>[Ge,o(d,{code:""},{default:n(()=>[Je]),_:1}),Xe]),_:1})]),demo:n(()=>[e("div",Ye,[o(a,{onClick:s.info},{default:n(()=>[Ze]),_:1},8,["onClick"])])]),_:1})}var t0=A(qe,[["render",e0]]);const n0=g({setup(){const s=C();return{info(){s.info("I don't know why nobody told you how to unfold your love. Once upon a time you dressed so fine. How many roads must a man walk down. 'Cause you walked hand in hand With another man in my place. If I were you, I will realize that I love you more than any other guy.")}}}}),o0=t(" \u591A\u884C "),s0={class:"demo-card__view"},l0=t(" \u591A\u884C ");function a0(s,i,m,c,p,f){const d=l("n-button"),r=l("component-demo");return u(),_(r,{"demo-file-name":"multiple-line","relative-url":"src/message/demos/zhCN/multiple-line.demo.md",title:"\u591A\u884C",code:"%3Ctemplate%3E%0A%20%20%3Cn-button%20%40click%3D%22info%22%3E%20%E5%A4%9A%E8%A1%8C%20%3C%2Fn-button%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0Aimport%20%7B%20useMessage%20%7D%20from%20'novice-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20message%20%3D%20useMessage()%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20info%20()%20%7B%0A%20%20%20%20%20%20%20%20message.info(%0A%20%20%20%20%20%20%20%20%20%20%22I%20don't%20know%20why%20nobody%20told%20you%20how%20to%20unfold%20your%20love.%20Once%20upon%20a%20time%20you%20dressed%20so%20fine.%20How%20many%20roads%20must%20a%20man%20walk%20down.%20'Cause%20you%20walked%20hand%20in%20hand%20With%20another%20man%20in%20my%20place.%20If%20I%20were%20you%2C%20I%20will%20realize%20that%20I%20love%20you%20more%20than%20any%20other%20guy.%22%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:n(()=>[o0]),content:n(()=>[]),demo:n(()=>[e("div",s0,[o(d,{onClick:s.info},{default:n(()=>[l0]),_:1},8,["onClick"])])]),_:1})}var c0=A(n0,[["render",a0]]);const d0={emits:["changePlacement"],setup(){return{message:C(),placementArray:[{placement:"top",text:"\u9876\u90E8"},{placement:"bottom",text:"\u5E95\u90E8"},{placement:"top-left",text:"\u5DE6\u4E0A"},{placement:"top-right",text:"\u53F3\u4E0A"},{placement:"bottom-left",text:"\u5DE6\u4E0B"},{placement:"bottom-right",text:"\u53F3\u4E0B"}]}},render(){return this.placementArray.map(s=>M(K,{onClick:()=>{this.$emit("changePlacement",s.placement),this.message.info("How many roads must a man walk down")},style:{marginRight:"10px"}},{default:()=>s.text}))}},i0=g({components:{Buttons:d0},setup(){const s=$("top");return{placement:s,changePlacement(i){s.value=i}}}}),u0=t(" \u4F4D\u7F6E "),r0={class:"demo-card__view"};function _0(s,i,m,c,p,f){const d=l("Buttons"),r=l("n-message-provider"),a=l("component-demo");return u(),_(a,{"demo-file-name":"placement","relative-url":"src/message/demos/zhCN/placement.demo.md",title:"\u4F4D\u7F6E",code:"%3Ctemplate%3E%0A%20%20%3Cn-message-provider%20%3Aplacement%3D%22placement%22%3E%0A%20%20%20%20%3CButtons%20%40changePlacement%3D%22changePlacement%22%20%2F%3E%0A%20%20%3C%2Fn-message-provider%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20h%2C%20ref%20%7D%20from%20'vue'%0Aimport%20%7B%20useMessage%2C%20NButton%20%7D%20from%20'novice-ui'%0A%0Aconst%20Buttons%20%3D%20%7B%0A%20%20emits%3A%20%5B'changePlacement'%5D%2C%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20message%20%3D%20useMessage()%0A%20%20%20%20const%20placementArray%20%3D%20%5B%0A%20%20%20%20%20%20%7B%20placement%3A%20'top'%2C%20text%3A%20'%E9%A1%B6%E9%83%A8'%20%7D%2C%0A%20%20%20%20%20%20%7B%20placement%3A%20'bottom'%2C%20text%3A%20'%E5%BA%95%E9%83%A8'%20%7D%2C%0A%20%20%20%20%20%20%7B%20placement%3A%20'top-left'%2C%20text%3A%20'%E5%B7%A6%E4%B8%8A'%20%7D%2C%0A%20%20%20%20%20%20%7B%20placement%3A%20'top-right'%2C%20text%3A%20'%E5%8F%B3%E4%B8%8A'%20%7D%2C%0A%20%20%20%20%20%20%7B%20placement%3A%20'bottom-left'%2C%20text%3A%20'%E5%B7%A6%E4%B8%8B'%20%7D%2C%0A%20%20%20%20%20%20%7B%20placement%3A%20'bottom-right'%2C%20text%3A%20'%E5%8F%B3%E4%B8%8B'%20%7D%0A%20%20%20%20%5D%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20message%2C%0A%20%20%20%20%20%20placementArray%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20render%20()%20%7B%0A%20%20%20%20return%20this.placementArray.map((item)%20%3D%3E%0A%20%20%20%20%20%20h(%0A%20%20%20%20%20%20%20%20NButton%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20onClick%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20this.%24emit('changePlacement'%2C%20item.placement)%0A%20%20%20%20%20%20%20%20%20%20%20%20this.message.info('How%20many%20roads%20must%20a%20man%20walk%20down')%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20style%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20marginRight%3A%20'10px'%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20default%3A%20()%20%3D%3E%20item.text%20%7D%0A%20%20%20%20%20%20)%0A%20%20%20%20)%0A%20%20%7D%0A%7D%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20components%3A%20%7B%0A%20%20%20%20Buttons%0A%20%20%7D%2C%0A%20%20setup%20()%20%7B%0A%20%20%20%20const%20placementRef%20%3D%20ref('top')%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20placement%3A%20placementRef%2C%0A%20%20%20%20%20%20changePlacement%20(val)%20%7B%0A%20%20%20%20%20%20%20%20placementRef.value%20%3D%20val%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E"},{title:n(()=>[u0]),content:n(()=>[]),demo:n(()=>[e("div",r0,[o(r,{placement:s.placement},{default:n(()=>[o(d,{onChangePlacement:s.changePlacement},null,8,["onChangePlacement"])]),_:1},8,["placement"])])]),_:1})}var m0=A(i0,[["render",_0]]);const p0={components:{basicDemo:ie,iconDemo:he,timingDemo:De,closableDemo:je,modifyContentDemo:He,manuallyCloseDemo:Qe,aboutThemeDemo:t0,multipleLineDemo:c0,placementDemo:m0},setup(){const s=G(),i=J(()=>!s.value),m=s;return{showAnchor:i,displayMode:X(),wrapperStyle:F(()=>m.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:F(()=>i.value?"width: calc(100% - 164px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"src/message/demos/zhCN/index.demo-entry.md"}}},h0=t("\uFF08\u4E00\u822C\u662F\uFF09\u4ECE\u6D4F\u89C8\u5668\u9876\u90E8\u964D\u4E0B\u6765\u7684\u795E\u8C15\u3002"),A0=t(" \u5982\u679C\u4F60\u60F3\u4F7F\u7528\u4FE1\u606F\uFF0C\u4F60\u9700\u8981\u628A\u8C03\u7528\u5176\u65B9\u6CD5\u7684\u7EC4\u4EF6\u653E\u5728 "),f0=t("n-message-provider"),g0=t(" \u5185\u90E8\u5E76\u4E14\u4F7F\u7528 "),C0=t("useMessage"),y0=t(" \u53BB\u83B7\u53D6 API\u3002 "),v0=t(" \u4F8B\u5982\uFF1A "),D0=e("pre",null,[e("span",{class:"hljs-comment"},"<!-- App.vue -->"),t(`
`),e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"n-message-provider"),t(">")]),t(`
  `),e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"content"),t(" />")]),t(`
`),e("span",{class:"hljs-tag"},[t("</"),e("span",{class:"hljs-name"},"n-message-provider"),t(">")])],-1),B0=e("pre",null,[e("span",{class:"hljs-keyword"},"import"),t(" { useMessage } "),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'novice-ui'"),t(`
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
})`)],-1),E0=t("\u6F14\u793A"),b0=t("API"),w0=t("MessageProvider Props"),k0={class:"md-table-wrapper"},M0=e("thead",null,[e("tr",null,[e("th",null,"\u540D\u79F0"),e("th",null,"\u7C7B\u578B"),e("th",null,"\u9ED8\u8BA4\u503C"),e("th",null,"\u8BF4\u660E")])],-1),$0=e("td",null,"closable",-1),x0=t("boolean"),j0=e("td",null,"\u6240\u6709 Message \u662F\u5426\u663E\u793A close \u56FE\u6807",-1),F0=e("td",null,null,-1),I0=e("td",null,"duration",-1),R0=t("number"),N0=t("3000"),P0=e("td",null,"\u6240\u6709 Message \u9ED8\u8BA4\u7684\u6301\u7EED\u65F6\u957F",-1),z0=e("td",null,"keep-alive-on-hover",-1),V0=t("boolean"),H0=t("false"),O0=e("td",null,"\u6240\u6709 Message \u5728\u60AC\u6D6E\u4FE1\u606F\u4E0A\u65F6\u662F\u5426\u4E0D\u9500\u6BC1",-1),T0=e("td",null,"max",-1),L0=t("number"),S0=t("undefined"),W0=e("td",null,"\u9650\u5236\u63D0\u793A\u4FE1\u606F\u663E\u793A\u7684\u4E2A\u6570",-1),U0=e("td",null,"placement",-1),Q0=t("top | top-left | top-right | bottom | bottom-left | bottom-right "),q0=t("top"),K0=e("td",null,"\u6240\u6709 Message \u663E\u793A\u7684\u4F4D\u7F6E",-1),G0=e("td",null,"to",-1),J0=t("string | HTMLElement"),X0=t("'body'"),Y0=e("td",null,"Message \u5BB9\u5668\u8282\u70B9\u7684\u4F4D\u7F6E",-1),Z0=t("MessageProvider Injection API"),e2=t("MessageProvider Injection Methods"),t2={class:"md-table-wrapper"},n2=e("thead",null,[e("tr",null,[e("th",null,"\u540D\u79F0"),e("th",null,"\u7C7B\u578B"),e("th",null,"\u8BF4\u660E")])],-1),o2=e("td",null,"destroyAll",-1),s2=t("() => void"),l2=e("td",null,"\u9500\u6BC1\u6240\u6709\u5F39\u51FA\u7684\u4FE1\u606F",-1),a2=e("td",null,"error",-1),c2=t("(content: string | (() => VNodeChild), option?: MessageOption) => MessageReactive"),d2=e("td",null,"\u8C03\u7528 error \u7C7B\u578B\u7684\u4FE1\u606F",-1),i2=e("td",null,"info",-1),u2=t("(content: string | (() => VNodeChild), option?: MessageOption) => MessageReactive"),r2=e("td",null,"\u8C03\u7528 info \u7C7B\u578B\u7684\u4FE1\u606F",-1),_2=e("td",null,"loading",-1),m2=t("(content: string | (() => VNodeChild), option?: MessageOption) => MessageReactive"),p2=e("td",null,"\u8C03\u7528 loading \u7C7B\u578B\u7684\u4FE1\u606F",-1),h2=e("td",null,"success",-1),A2=t("(content: string | (() => VNodeChild), option?: MessageOption) => MessageReactive"),f2=e("td",null,"\u8C03\u7528 success \u7C7B\u578B\u7684\u4FE1\u606F",-1),g2=e("td",null,"warning",-1),C2=t("(content: string | (() => VNodeChild), option?: MessageOption) => MessageReactive"),y2=e("td",null,"\u8C03\u7528 warning \u7C7B\u578B\u7684\u4FE1\u606F",-1),v2=t("MessageOption Properties"),D2={class:"md-table-wrapper"},B2=e("thead",null,[e("tr",null,[e("th",null,"\u540D\u79F0"),e("th",null,"\u7C7B\u578B"),e("th",null,"\u8BF4\u660E")])],-1),E2=e("td",null,"closable",-1),b2=t("boolean"),w2=e("td",null,"\u662F\u5426\u663E\u793A close \u56FE\u6807",-1),k2=e("td",null,"duration",-1),M2=t("number"),$2=e("td",null,"\u4FE1\u606F\u5C55\u793A\u7684\u65F6\u957F",-1),x2=e("td",null,"icon",-1),j2=t("() => VNode"),F2=e("td",null,"\u4FE1\u606F\u56FE\u6807",-1),I2=e("td",null,"keepAliveOnHover",-1),R2=t("boolean"),N2=e("td",null,"Hover \u5230\u4FE1\u606F\u4E0A\u662F\u5426\u4E0D\u9500\u6BC1",-1),P2=e("td",null,"onAfterLeave",-1),z2=t("() => void"),V2=e("td",null,"\u4FE1\u606F\u6D88\u5931\u52A8\u753B\u7ED3\u675F\u7684\u56DE\u8C03",-1),H2=e("td",null,"onClose",-1),O2=t("() => void"),T2=e("td",null,"\u70B9\u51FB\u5173\u95ED\u56FE\u6807\u7684\u56DE\u8C03",-1),L2=e("td",null,"onLeave",-1),S2=t("() => void"),W2=e("td",null,"\u4FE1\u606F\u5F00\u59CB\u6D88\u5931\u7684\u56DE\u8C03",-1),U2=t("MessageReactive Properties"),Q2={class:"md-table-wrapper"},q2=e("thead",null,[e("tr",null,[e("th",null,"\u540D\u79F0"),e("th",null,"\u7C7B\u578B"),e("th",null,"\u8BF4\u660E")])],-1),K2=e("td",null,"closable",-1),G2=t("boolean"),J2=e("td",null,"\u662F\u5426\u663E\u793A close \u56FE\u6807",-1),X2=e("td",null,"content",-1),Y2=t("string | (() => VNodeChild)"),Z2=e("td",null,"\u4FE1\u606F\u5185\u5BB9",-1),et=e("td",null,"destroy",-1),tt=t("() => void"),nt=e("td",null,"\u9500\u6BC1\u4FE1\u606F\u7684\u65B9\u6CD5",-1),ot=e("td",null,"icon",-1),st=t("() => VNode"),lt=e("td",null,"\u4FE1\u606F\u56FE\u6807",-1),at=e("td",null,"keepAliveOnHover",-1),ct=t("boolean"),dt=e("td",null,"Hover \u5230\u4FE1\u606F\u4E0A\u662F\u5426\u4E0D\u9500\u6BC1",-1),it=e("td",null,"type",-1),ut=t("'info' | 'success' | 'warning' | 'error' | 'loading'"),rt=e("td",null,"\u4FE1\u606F\u7C7B\u578B",-1),_t=e("td",null,"onAfterLeave",-1),mt=t("() => void"),pt=e("td",null,"\u4FE1\u606F\u6D88\u5931\u52A8\u753B\u7ED3\u675F\u7684\u56DE\u8C03",-1),ht=e("td",null,"onLeave",-1),At=t("() => void"),ft=e("td",null,"\u4FE1\u606F\u5F00\u59CB\u6D88\u5931\u7684\u56DE\u8C03",-1),gt=t("MessageReactive Methods"),Ct={class:"md-table-wrapper"},yt=e("thead",null,[e("tr",null,[e("th",null,"\u540D\u79F0"),e("th",null,"\u7C7B\u578B"),e("th",null,"\u8BF4\u660E")])],-1),vt=e("td",null,"destroy",-1),Dt=t("()"),Bt=e("td",null,"\u9500\u6BC1\u4FE1\u606F\u7684\u65B9\u6CD5",-1),Et=t("Q & A"),bt=t("\u5728 setup \u5916\u4F7F\u7528"),wt=t(" \u5982\u679C\u4F60\u60F3\u5728 setup \u5916\u4F7F\u7528\u4FE1\u606F\uFF0C\u4F60\u9700\u8981\u5728\u9876\u5C42 setup \u4E2D\u628A "),kt=t("useMessage"),Mt=t(" \u8FD4\u56DE\u7684 message \u503C\u6302\u8F7D\u5230 window \u4E0B\u7136\u540E\u518D\u8C03\u7528\uFF0C\u8C03\u7528\u524D\u9700\u8981\u786E\u4FDD message \u5DF2\u7ECF\u6302\u8F7D\u6210\u529F\u3002 "),$t=e("pre",null,[e("span",{class:"hljs-comment"},"<!-- App.vue -->"),t(`
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
  `),e("span",{class:"hljs-comment"},"// \u9700\u8981\u786E\u4FDD\u5DF2\u7ECF\u5728 setup \u4E2D\u6267\u884C\u4E86 window.$message = message"),t(`
  `),e("span",{class:"hljs-variable language_"},"window"),t("."),e("span",{class:"hljs-property"},"$message"),t("."),e("span",{class:"hljs-title function_"},"success"),t(`(
    `),e("span",{class:"hljs-string"},"'Cause you walked hand in hand With another man in my place'"),t(`
  )
}`)],-1),Ft={key:0,style:{width:"128px"}};function It(s,i,m,c,p,f){const d=l("edit-on-github-header"),r=l("n-p"),a=l("n-text"),y=l("n-alert"),v=l("n-code"),D=l("n-scrollbar"),B=l("n-card"),x=l("n-space"),w=l("n-h2"),N=l("basicDemo"),P=l("iconDemo"),z=l("timingDemo"),V=l("closableDemo"),H=l("modifyContentDemo"),O=l("manuallyCloseDemo"),T=l("aboutThemeDemo"),L=l("multipleLineDemo"),S=l("placementDemo"),W=l("component-demos"),k=l("n-h3"),E=l("n-table"),b=l("n-h4"),h=l("n-anchor-link"),U=l("n-anchor");return u(),I("div",{class:"doc",style:R(c.wrapperStyle)},[e("div",{style:R(c.contentStyle)},[o(d,{"relative-url":"src/message/demos/zhCN/index.demo-entry.md",text:"\u4FE1\u606F Message"}),o(r,null,{default:n(()=>[h0]),_:1}),o(x,{vertical:""},{default:n(()=>[o(y,{title:"\u4F7F\u7528\u524D\u63D0",type:"warning"},{default:n(()=>[A0,o(a,{code:""},{default:n(()=>[f0]),_:1}),g0,o(a,{code:""},{default:n(()=>[C0]),_:1}),y0]),_:1}),v0,o(B,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:n(()=>[o(D,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:n(()=>[o(v,null,{default:n(()=>[D0]),_:1})]),_:1})]),_:1}),o(B,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:n(()=>[o(D,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:n(()=>[o(v,null,{default:n(()=>[B0]),_:1})]),_:1})]),_:1})]),_:1}),o(w,{id:"\u6F14\u793A"},{default:n(()=>[E0]),_:1}),o(W,{span:2},{default:n(()=>[o(N),o(P),o(z),o(V),o(H),o(O),o(T),o(L),o(S)]),_:1}),o(w,{id:"API"},{default:n(()=>[b0]),_:1}),o(k,{id:"MessageProvider-Props"},{default:n(()=>[w0]),_:1}),e("div",k0,[o(E,{"single-column":"",class:"md-table"},{default:n(()=>[M0,e("tbody",null,[e("tr",null,[$0,e("td",null,[o(a,{code:""},{default:n(()=>[x0]),_:1})]),j0,F0]),e("tr",null,[I0,e("td",null,[o(a,{code:""},{default:n(()=>[R0]),_:1})]),e("td",null,[o(a,{code:""},{default:n(()=>[N0]),_:1})]),P0]),e("tr",null,[z0,e("td",null,[o(a,{code:""},{default:n(()=>[V0]),_:1})]),e("td",null,[o(a,{code:""},{default:n(()=>[H0]),_:1})]),O0]),e("tr",null,[T0,e("td",null,[o(a,{code:""},{default:n(()=>[L0]),_:1})]),e("td",null,[o(a,{code:""},{default:n(()=>[S0]),_:1})]),W0]),e("tr",null,[U0,e("td",null,[o(a,{code:""},{default:n(()=>[Q0]),_:1})]),e("td",null,[o(a,{code:""},{default:n(()=>[q0]),_:1})]),K0]),e("tr",null,[G0,e("td",null,[o(a,{code:""},{default:n(()=>[J0]),_:1})]),e("td",null,[o(a,{code:""},{default:n(()=>[X0]),_:1})]),Y0])])]),_:1})]),o(k,{id:"MessageProvider-Injection-API"},{default:n(()=>[Z0]),_:1}),o(b,{id:"MessageProvider-Injection-Methods"},{default:n(()=>[e2]),_:1}),e("div",t2,[o(E,{"single-column":"",class:"md-table"},{default:n(()=>[n2,e("tbody",null,[e("tr",null,[o2,e("td",null,[o(a,{code:""},{default:n(()=>[s2]),_:1})]),l2]),e("tr",null,[a2,e("td",null,[o(a,{code:""},{default:n(()=>[c2]),_:1})]),d2]),e("tr",null,[i2,e("td",null,[o(a,{code:""},{default:n(()=>[u2]),_:1})]),r2]),e("tr",null,[_2,e("td",null,[o(a,{code:""},{default:n(()=>[m2]),_:1})]),p2]),e("tr",null,[h2,e("td",null,[o(a,{code:""},{default:n(()=>[A2]),_:1})]),f2]),e("tr",null,[g2,e("td",null,[o(a,{code:""},{default:n(()=>[C2]),_:1})]),y2])])]),_:1})]),o(b,{id:"MessageOption-Properties"},{default:n(()=>[v2]),_:1}),e("div",D2,[o(E,{"single-column":"",class:"md-table"},{default:n(()=>[B2,e("tbody",null,[e("tr",null,[E2,e("td",null,[o(a,{code:""},{default:n(()=>[b2]),_:1})]),w2]),e("tr",null,[k2,e("td",null,[o(a,{code:""},{default:n(()=>[M2]),_:1})]),$2]),e("tr",null,[x2,e("td",null,[o(a,{code:""},{default:n(()=>[j2]),_:1})]),F2]),e("tr",null,[I2,e("td",null,[o(a,{code:""},{default:n(()=>[R2]),_:1})]),N2]),e("tr",null,[P2,e("td",null,[o(a,{code:""},{default:n(()=>[z2]),_:1})]),V2]),e("tr",null,[H2,e("td",null,[o(a,{code:""},{default:n(()=>[O2]),_:1})]),T2]),e("tr",null,[L2,e("td",null,[o(a,{code:""},{default:n(()=>[S2]),_:1})]),W2])])]),_:1})]),o(b,{id:"MessageReactive-Properties"},{default:n(()=>[U2]),_:1}),e("div",Q2,[o(E,{"single-column":"",class:"md-table"},{default:n(()=>[q2,e("tbody",null,[e("tr",null,[K2,e("td",null,[o(a,{code:""},{default:n(()=>[G2]),_:1})]),J2]),e("tr",null,[X2,e("td",null,[o(a,{code:""},{default:n(()=>[Y2]),_:1})]),Z2]),e("tr",null,[et,e("td",null,[o(a,{code:""},{default:n(()=>[tt]),_:1})]),nt]),e("tr",null,[ot,e("td",null,[o(a,{code:""},{default:n(()=>[st]),_:1})]),lt]),e("tr",null,[at,e("td",null,[o(a,{code:""},{default:n(()=>[ct]),_:1})]),dt]),e("tr",null,[it,e("td",null,[o(a,{code:""},{default:n(()=>[ut]),_:1})]),rt]),e("tr",null,[_t,e("td",null,[o(a,{code:""},{default:n(()=>[mt]),_:1})]),pt]),e("tr",null,[ht,e("td",null,[o(a,{code:""},{default:n(()=>[At]),_:1})]),ft])])]),_:1})]),o(b,{id:"MessageReactive-Methods"},{default:n(()=>[gt]),_:1}),e("div",Ct,[o(E,{"single-column":"",class:"md-table"},{default:n(()=>[yt,e("tbody",null,[e("tr",null,[vt,e("td",null,[o(a,{code:""},{default:n(()=>[Dt]),_:1})]),Bt])])]),_:1})]),o(w,{id:"Q-&-A"},{default:n(()=>[Et]),_:1}),o(k,{id:"\u5728-setup-\u5916\u4F7F\u7528"},{default:n(()=>[bt]),_:1}),o(x,{vertical:""},{default:n(()=>[o(y,{type:"warning"},{default:n(()=>[wt,o(a,{code:""},{default:n(()=>[kt]),_:1}),Mt]),_:1}),o(B,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:n(()=>[o(D,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:n(()=>[o(v,null,{default:n(()=>[$t]),_:1})]),_:1})]),_:1}),o(B,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:n(()=>[o(D,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:n(()=>[o(v,null,{default:n(()=>[xt]),_:1})]),_:1})]),_:1}),o(B,{size:"small",class:"md-card","content-style":"padding: 0;"},{default:n(()=>[o(D,{"x-scrollable":"","content-style":"padding: 12px; 16px;"},{default:n(()=>[o(v,null,{default:n(()=>[jt]),_:1})]),_:1})]),_:1})]),_:1})],4),c.showAnchor?(u(),I("div",Ft,[o(U,{"internal-scrollable":"",bound:16,type:"block",style:{width:"128px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:n(()=>[(c.displayMode,u(),_(h,{key:0,title:"\u57FA\u7840\u7528\u6CD5",href:"#basic"})),(c.displayMode,u(),_(h,{key:1,title:"\u56FE\u6807",href:"#icon"})),(c.displayMode,u(),_(h,{key:2,title:"\u65F6\u95F4",href:"#timing"})),(c.displayMode,u(),_(h,{key:3,title:"\u53EF\u5173\u95ED",href:"#closable"})),(c.displayMode,u(),_(h,{key:4,title:"\u4FEE\u6539\u521B\u5EFA\u7684\u4FE1\u606F",href:"#modify-content"})),(c.displayMode,u(),_(h,{key:5,title:"\u624B\u52A8\u5173\u95ED",href:"#manually-close"})),(c.displayMode,u(),_(h,{key:6,title:"\u5173\u4E8E\u4E3B\u9898\u7684\u6CE8\u610F\u4E8B\u9879",href:"#about-theme"})),(c.displayMode,u(),_(h,{key:7,title:"\u591A\u884C",href:"#multiple-line"})),(c.displayMode,u(),_(h,{key:8,title:"\u4F4D\u7F6E",href:"#placement"})),(c.displayMode,u(),_(h,{key:9,title:"API",href:"#API"}))]),_:1})])):Y("",!0)],4)}var zt=A(p0,[["render",It]]);export{zt as default};
