"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[49357],{49357:(e,n,r)=>{r.r(n),r.d(n,{getVersionInfos:()=>a});var s=r(23060),i=r(10193);async function a(e,n,r){const a=(0,i.Dl)(e),t=n.toJSON(),o=(0,i.jV)(a.query,{query:(0,i.lF)({...t,f:"json"}),...r}),u=`${a.path}/versionInfos`,{data:d}=await(0,s.default)(u,o);return d.versions.map((e=>{const{versionName:n,versionGuid:r,...s}=e;return{...s,versionIdentifier:{name:n,guid:r}}}))}}}]);