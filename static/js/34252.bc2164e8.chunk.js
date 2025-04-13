"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[34252],{10876:(e,t,r)=>{function a(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{H:()=>a})},26381:(e,t,r)=>{r.d(t,{UN:()=>b,Uh:()=>h});var a=r(74719),n=r(36591),o=r(78139),i=r(34587),s=r(55909),l=r(85866),u=r(68004);async function p(e){const{layer:t,errorNamePrefix:r,validateLayer:n}=e;await t.load(),function(e,t,r){const n=r(e);if(!n.isValid)throw new a.default(`${t}:invalid-parameters`,n.errorMessage,{layer:e})}(t,r,n)}function d(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function c(e){const{item:t,errorNamePrefix:r,layer:n,validateItem:o}=e;if(function(e){const{item:t,itemType:r,additionalItemType:n,errorNamePrefix:o,layer:i}=e,s=[r];if(n&&s.push(n),!s.includes(t.type)){const e=s.map((e=>`'${e}'`)).join(", ");throw new a.default(`${o}:portal-item-wrong-type`,`Portal item type should be one of: "${e}"`,{item:t,layer:i})}}(e),o){const e=o(t);if(!e.isValid)throw new a.default(`${r}:invalid-parameters`,e.errorMessage,{layer:n})}}function m(e){const{layer:t,errorNamePrefix:r}=e,{portalItem:n}=t;if(!n)throw new a.default(`${r}:portal-item-not-set`,d(t,"requires the portalItem property to be set"));if(!n.loaded)throw new a.default(`${r}:portal-item-not-loaded`,d(t,"cannot be saved to a portal item that does not exist or is inaccessible"));c({...e,item:n})}function f(e){const{newItem:t,itemType:r}=e;let a=i.default.from(t);return a.id&&(a=a.clone(),a.id=null),a.type??=r,a.portal??=o.default.getDefault(),c({...e,item:a}),a}function y(e){return(0,s.m)(e,"portal-item")}async function w(e,t,r){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const a=e.write({},t);return await Promise.all(t.resources?.pendingOperations??[]),(0,u.c)(t,{errorName:"layer-write:unsupported"},r),a}function v(e){(0,l.LG)(e,l.mm.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))}async function b(e,t){const{layer:r,createItemData:a,createJSONContext:o,setItemProperties:i,saveResources:s,supplementalUnsupportedErrors:l}=e;await p(e),m(e);const u=r.portalItem,d=o?o(u):y(u),c=await w(r,d,{...t,supplementalUnsupportedErrors:l}),f=await a({layer:r,layerJSON:c},u);return await(i?.(r,u,f)),v(u),await u.update({data:f}),(0,n.v)(d),await(s?.(u,d)),u}async function h(e,t){const{layer:r,createItemData:a,createJSONContext:o,setItemProperties:i,saveResources:s,supplementalUnsupportedErrors:l}=e;await p(e);const u=f(e),d=o?o(u):y(u),c=await w(r,d,{...t,supplementalUnsupportedErrors:l}),m=await a({layer:r,layerJSON:c},u);return await i(r,u,m),v(u),await async function(e,t,r){const a=e.portal;await a.signIn(),await a.user.addItem({item:e,data:t,folder:r?.folder})}(u,m,t),r.portalItem=u,(0,n.v)(d),await(s?.(u,d)),u}},34252:(e,t,r)=>{r.d(t,{save:()=>c,saveAs:()=>m});var a=r(26381),n=r(85866);const o="Stream Service",i="Feed",s="stream-layer-save",l="stream-layer-save-as";function u(e){return{isValid:"stream"===e.type&&!!e.url&&!e.webSocketUrl,errorMessage:"Stream layer should be created using a url to a stream service"}}function p(e){const t=e.layerJSON;return Promise.resolve(t&&Object.keys(t).length?t:null)}async function d(e,t){const{parsedUrl:r,title:a,fullExtent:o}=e;t.url=r.path,t.title||=a,t.extent=null,null!=o&&(t.extent=await(0,n.sQ)(o)),(0,n.OM)(t,n.mm.METADATA),(0,n.LG)(t,n.mm.SINGLE_LAYER)}async function c(e,t){return(0,a.UN)({layer:e,itemType:o,additionalItemType:i,validateLayer:u,createItemData:p,errorNamePrefix:s},t)}async function m(e,t,r){return(0,a.Uh)({layer:e,itemType:o,validateLayer:u,createItemData:p,errorNamePrefix:l,newItem:t,setItemProperties:d},r)}},36591:(e,t,r)=>{r.d(t,{v:()=>n});var a=r(10876);function n(e){e?.writtenProperties&&e.writtenProperties.forEach((e=>{let{target:t,propName:r,newOrigin:n}=e;(0,a.H)(t)&&n&&t.originOf(r)!==n&&t.updateOrigin(r,n)}))}},68004:(e,t,r)=>{r.d(t,{c:()=>i,d:()=>n});var a=r(74719);async function n(e){const t=[];for(const r of e.allLayers)if("beforeSave"in r&&"function"==typeof r.beforeSave){const e=r.beforeSave();e&&t.push(e)}await Promise.allSettled(t)}const o=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function i(e,t,r){let n=(e.messages??[]).filter((e=>{let{type:t}=e;return"error"===t})).map((e=>{let{name:t,message:r,details:n}=e;return new a.default(t,r,n)}));if(e.blockedRelativeUrls&&(n=n.concat(e.blockedRelativeUrls.map((e=>new a.default("url:unsupported",`Relative url '${e}' is not supported`))))),r){const{ignoreUnsupported:e,supplementalUnsupportedErrors:t=[],requiredPropertyChecksDisabled:a}=r;e&&(n=n.filter((e=>{let{name:r}=e;return!(o.has(r)||t.includes(r))}))),a&&(n=n.filter((e=>"web-document-write:property-required"!==e.name)))}if(n.length>0)throw new a.default(t.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:n})}}}]);