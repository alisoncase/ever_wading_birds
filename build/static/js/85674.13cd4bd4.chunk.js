"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[85674],{41572:(e,r,s)=>{s.d(r,{t:()=>n});var t=s(23060);async function n(e,r){let s=null;const n="string"==typeof r?r:r.path;if(!e.has(n)){const i=await(0,t.default)(n.replace(/\/VersionManagementServer/i,"/FeatureServer"),{query:{f:"json"}});s={serverVersion:Number(i.data.currentVersion),featureServerUrl:n.replace(/\/VersionManagementServer/i,"/FeatureServer")},e.set(r,s)}}},85674:(e,r,s)=>{s.r(r),s.d(r,{alterVersion:()=>u,serverVersionCacheMap:()=>o});var t=s(23060),n=s(74719),i=s(10193),a=s(41572);const o=new Map;async function u(e,r,s,u){o.has(e)||await(0,a.t)(o,e);const c=o.get(e);if((c?.serverVersion??0)<=11.1)throw new n.default("alterVersion:enterprise-version","versioning API requires ArcGIS Enterprise version 11.2 or higher");if(!r)throw new n.default("alterVersion:missing-guid","guid for version is missing");const l=(0,i.Dl)(e),d=s.toJSON(),v=(0,i.jV)(l.query,{query:(0,i.lF)({...d,f:"json"}),...u,authMode:"immediate",method:"post"});r.startsWith("{")&&(r=r.slice(1,-1));const f=`${l.path}/versions/${r}/alter`,{data:h}=await(0,t.default)(f,v);return!!h&&h.success}}}]);