import{i as c,C as t,p as u}from"./index.95fbdc71.js";var r={};Object.defineProperty(r,"__esModule",{value:!0});var d=r.useThemeVars=void 0;const i=c,v=t,s=u;function a(){const n=(0,i.inject)(v.configProviderInjectionKey,null);return(0,i.computed)(()=>{if(n===null)return s.commonLight;const{mergedThemeRef:{value:o},mergedThemeOverridesRef:{value:e}}=n,m=(o==null?void 0:o.common)||s.commonLight;return(e==null?void 0:e.common)?Object.assign({},m,e.common):m})}d=r.useThemeVars=a;export{d as u};
