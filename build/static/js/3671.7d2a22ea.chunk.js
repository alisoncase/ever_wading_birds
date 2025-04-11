"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[3671],{10876:(e,t,r)=>{function a(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{H:()=>a})},26381:(e,t,r)=>{r.d(t,{UN:()=>h,Uh:()=>v});var a=r(74719),n=r(36591),o=r(21457),s=r(79601),i=r(55909),l=r(85866),u=r(68004);async function c(e){const{layer:t,errorNamePrefix:r,validateLayer:n}=e;await t.load(),function(e,t,r){const n=r(e);if(!n.isValid)throw new a.A(`${t}:invalid-parameters`,n.errorMessage,{layer:e})}(t,r,n)}function p(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function d(e){const{item:t,errorNamePrefix:r,layer:n,validateItem:o}=e;if(function(e){const{item:t,itemType:r,additionalItemType:n,errorNamePrefix:o,layer:s}=e,i=[r];if(n&&i.push(n),!i.includes(t.type)){const e=i.map((e=>`'${e}'`)).join(", ");throw new a.A(`${o}:portal-item-wrong-type`,`Portal item type should be one of: "${e}"`,{item:t,layer:s})}}(e),o){const e=o(t);if(!e.isValid)throw new a.A(`${r}:invalid-parameters`,e.errorMessage,{layer:n})}}function y(e){const{layer:t,errorNamePrefix:r}=e,{portalItem:n}=t;if(!n)throw new a.A(`${r}:portal-item-not-set`,p(t,"requires the portalItem property to be set"));if(!n.loaded)throw new a.A(`${r}:portal-item-not-loaded`,p(t,"cannot be saved to a portal item that does not exist or is inaccessible"));d({...e,item:n})}function f(e){const{newItem:t,itemType:r}=e;let a=s.default.from(t);return a.id&&(a=a.clone(),a.id=null),a.type??=r,a.portal??=o.A.getDefault(),d({...e,item:a}),a}function m(e){return(0,i.m)(e,"portal-item")}async function w(e,t,r){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const a=e.write({},t);return await Promise.all(t.resources?.pendingOperations??[]),(0,u.c)(t,{errorName:"layer-write:unsupported"},r),a}function b(e){(0,l.LG)(e,l.mm.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))}async function h(e,t){const{layer:r,createItemData:a,createJSONContext:o,setItemProperties:s,saveResources:i,supplementalUnsupportedErrors:l}=e;await c(e),y(e);const u=r.portalItem,p=o?o(u):m(u),d=await w(r,p,{...t,supplementalUnsupportedErrors:l}),f=await a({layer:r,layerJSON:d},u);return await(s?.(r,u,f)),b(u),await u.update({data:f}),(0,n.v)(p),await(i?.(u,p)),u}async function v(e,t){const{layer:r,createItemData:a,createJSONContext:o,setItemProperties:s,saveResources:i,supplementalUnsupportedErrors:l}=e;await c(e);const u=f(e),p=o?o(u):m(u),d=await w(r,p,{...t,supplementalUnsupportedErrors:l}),y=await a({layer:r,layerJSON:d},u);return await s(r,u,y),b(u),await async function(e,t,r){const a=e.portal;await a.signIn(),await a.user.addItem({item:e,data:t,folder:r?.folder})}(u,y,t),r.portalItem=u,(0,n.v)(p),await(i?.(u,p)),u}},36591:(e,t,r)=>{r.d(t,{v:()=>n});var a=r(10876);function n(e){e?.writtenProperties&&e.writtenProperties.forEach((e=>{let{target:t,propName:r,newOrigin:n}=e;(0,a.H)(t)&&n&&t.originOf(r)!==n&&t.updateOrigin(r,n)}))}},46052:(e,t,r)=>{r.d(t,{save:()=>L,saveAs:()=>x});var a=r(62631),n=(r(21265),r(74719),r(26381)),o=r(65073),s=r(51413),i=r(78076),l=r(55909),u=r(85866);const c="Feature Service",p="feature-layer-utils",d=`${p}-save`,y=`${p}-save-as`;function f(e){return{isValid:(0,i.W_)(e)&&(!("dynamicDataSource"in e)||!e.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function m(e,t){const r=(0,l.m)(e,"portal-item");return t?.isTable&&(r.layerContainerType="tables"),r}function w(e){const t=[],r=[];for(const{layer:a,layerJSON:n}of e)a.isTable?r.push(n):t.push(n);return{layers:t,tables:r}}function b(e){return w([e])}async function h(e,t){return/\/\d+\/?$/.test(e.url)?b(t[0]):v(t,e)}async function v(e,t){if(e.reverse(),!t)return w(e);const a=await async function(e,t){let a=await e.fetchData("json");if(function(e){return!!(e&&Array.isArray(e.layers)&&Array.isArray(e.tables))}(a))return a;a||={},function(e){e.layers||=[],e.tables||=[]}(a);const{layer:{url:n,customParameters:o,apiKey:i}}=t[0];return await async function(e,t,a){const{url:n,customParameters:o,apiKey:i}=t,{serviceJSON:l,layersJSON:u}=await(0,s.Q)(n,{customParameters:o,apiKey:i}),c=P(e.layers,l.layers,a),p=P(e.tables,l.tables,a);e.layers=c.itemResources,e.tables=p.itemResources;const d=[...c.added,...p.added],y=u?[...u.layers,...u.tables]:[];await async function(e,t,a,n){const o=await async function(e){const t=[];e.forEach((e=>{let{type:a}=e;switch((0,s.K)(a)){case"CatalogLayer":t.push(Promise.all([r.e(1765),r.e(8584),r.e(9071),r.e(3208),r.e(3234),r.e(4962)]).then(r.bind(r,34962)).then((e=>e.default)));break;case"FeatureLayer":t.push(Promise.resolve().then(r.bind(r,74841)).then((e=>e.default)));break;case"OrientedImageryLayer":t.push(r.e(7539).then(r.bind(r,77539)).then((e=>e.default)))}}));const a=await Promise.all(t),n=new Map;return e.forEach(((e,t)=>{let{type:r}=e;n.set(r,a[t])})),n}(t),i=t.map((e=>{let{id:t,type:r}=e;return new(o.get(r))({url:a,layerId:t,sourceJSON:n.find((e=>{let{id:r}=e;return r===t}))})}));await Promise.allSettled(i.map((e=>e.load()))),i.forEach((t=>{const{layerId:r,loaded:a,defaultPopupTemplate:n}=t;if(!a||null==n)return;const o={id:r,popupInfo:n.toJSON()};"ArcGISFeatureLayer"!==t.operationalLayerType&&(o.layerType=t.operationalLayerType),g(t,o,e)}))}(e,d,n,y)}(a,{url:n??"",customParameters:o,apiKey:i},t.map((e=>e.layer.layerId))),a}(t,e);for(const r of e)g(r.layer,r.layerJSON,a);return function(e,t){const r=[],a=[];for(const{layer:n}of t){const{isTable:e,layerId:t}=n;e?a.push(t):r.push(t)}S(e.layers,r),S(e.tables,a)}(a,e),a}function S(e,t){if(e.length<2)return;const r=[];for(const{id:a}of e)r.push(a);(0,a.aI)(r.sort(I),t.slice().sort(I))&&e.sort(((e,r)=>{const a=t.indexOf(e.id),n=t.indexOf(r.id);return a<n?-1:a>n?1:0}))}function I(e,t){return e<t?-1:e>t?1:0}function P(e,t,r){const n=(0,a.iv)(e,t,((e,t)=>e.id===t.id));e=e.filter((e=>!n.removed.some((t=>t.id===e.id))));const o=n.added;return o.forEach((t=>{let{id:r}=t;e.push({id:r})})),{itemResources:e,added:o.filter((e=>{let{id:t}=e;return!r.includes(t)}))}}function g(e,t,r){e.isTable?A(r.tables,t):A(r.layers,t)}function A(e,t){const r=e.findIndex((e=>{let{id:r}=e;return r===t.id}));-1===r?e.push(t):e[r]=t}function O(e,t){let r=0,a=0,n=0;for(const{layerType:o}of[...t.layers,...t.tables])switch(o){case"OrientedImageryLayer":r++;break;case"SubtypeGroupLayer":a++;break;case"SubtypeGroupTable":n++}(0,u.Sm)(e,u.mm.ORIENTED_IMAGERY_LAYER,r>0),(0,u.Sm)(e,u.mm.SUBTYPE_GROUP_LAYER,a>0),(0,u.Sm)(e,u.mm.SUBTYPE_GROUP_TABLE,n>0)}function T(e,t,r){(0,u.OM)(t,u.mm.METADATA),(0,u.Sm)(t,u.mm.MULTI_LAYER,e.length>1),(0,u.Sm)(t,u.mm.SINGLE_LAYER,1===e.length),(0,u.Sm)(t,u.mm.TABLE,r.tables.length>0&&0===r.layers.length),O(t,r)}async function N(e,t,r){O(t,r)}async function E(e,t,r){const{url:a,layerId:n,title:s,fullExtent:i,isTable:l}=e,c=(0,o.qg)(a);t.url=("FeatureServer"===c?.serverType?a:`${a}/${n}`)??null,t.title||=s,t.extent=null,l||null==i||(t.extent=await(0,u.sQ)(i)),T([e],t,r)}async function L(e,t){return(0,n.UN)({layer:e,itemType:c,validateLayer:f,createJSONContext:t=>m(t,e),createItemData:(e,t)=>h(t,[e]),errorNamePrefix:d,setItemProperties:N},t)}async function x(e,t,r){return(0,n.Uh)({layer:e,itemType:c,validateLayer:f,createJSONContext:t=>m(t,e),createItemData:(e,t)=>Promise.resolve(b(e)),errorNamePrefix:y,newItem:t,setItemProperties:E},r)}},68004:(e,t,r)=>{r.d(t,{c:()=>s,d:()=>n});var a=r(74719);async function n(e){const t=[];for(const r of e.allLayers)if("beforeSave"in r&&"function"==typeof r.beforeSave){const e=r.beforeSave();e&&t.push(e)}await Promise.allSettled(t)}const o=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function s(e,t,r){let n=(e.messages??[]).filter((e=>{let{type:t}=e;return"error"===t})).map((e=>{let{name:t,message:r,details:n}=e;return new a.A(t,r,n)}));if(e.blockedRelativeUrls&&(n=n.concat(e.blockedRelativeUrls.map((e=>new a.A("url:unsupported",`Relative url '${e}' is not supported`))))),r){const{ignoreUnsupported:e,supplementalUnsupportedErrors:t=[],requiredPropertyChecksDisabled:a}=r;e&&(n=n.filter((e=>{let{name:r}=e;return!(o.has(r)||t.includes(r))}))),a&&(n=n.filter((e=>"web-document-write:property-required"!==e.name)))}if(n.length>0)throw new a.A(t.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:n})}}}]);