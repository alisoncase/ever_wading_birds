"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[38875,39960,51413],{2133:(e,t,r)=>{r.d(t,{Ju:()=>i,K8:()=>p,XH:()=>c,_r:()=>s,bO:()=>l,l:()=>y,nu:()=>f,pJ:()=>o,rc:()=>u});var a=r(39960),n=r(51413);function s(e){const t={id:e.id,name:e.name},r=(0,n.K)(e.type);return"FeatureLayer"!==r&&(t.layerType=r),t}async function l(e,t,r){if(null==e?.layers||null==e?.tables){const a=await r.fetchServiceMetadata(t,{customParameters:o(e)?.customParameters});(e=e||{}).layers=e.layers||a?.layers?.map(s),e.tables=e.tables||a?.tables?.map(s)}return e}function o(e){if(!e)return null;const{layers:t,tables:r}=e;return t?.length?t[0]:r?.length?r[0]:null}function u(e,t){return null==t?null:[...e.layers||[],...e.tables||[]].find((e=>e.id===t))}function i(e,t){return[...e.layers||[],...e.tables||[]].filter((e=>{let{layerType:r}=e;return r?t.includes(r):t.includes("ArcGISFeatureLayer")}))}function c(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function y(e){switch(e){case"catalog":return["CatalogLayer"];case"feature":return["ArcGISFeatureLayer"];case"oriented-imagery":return["OrientedImageryLayer"];case"subtype-group":return["SubtypeGroupLayer","SubtypeGroupTable"]}return null}function p(e){switch(e){case"CatalogLayer":return"CatalogLayer";case"OrientedImageryLayer":return"OrientedImageryLayer";case"SubtypeGroupLayer":case"SubtypeGroupTable":return"SubtypeGroupLayer"}return"FeatureLayer"}async function f(e,t,r){if(!e?.url)return t??{};if(t??={},!t.layers){const a=await r.fetchServiceMetadata(e.url);t.layers=a.layers?.map(s)}const{serverUrl:n,portalItem:l}=await(0,a.L)(e.url,{sceneLayerItem:e,customParameters:o(t)?.customParameters}).catch((()=>({serverUrl:null,portalItem:null})));if(null==n)return t.tables=[],t;if(!t.tables&&l){const e=await l.fetchData().catch((()=>null));if(e?.tables)t.tables=e.tables.map(s);else{const a=await r.fetchServiceMetadata(n,{customParameters:o(e)?.customParameters}).catch((()=>null));t.tables=a?.tables?.map(s)}}if(t.tables)for(const a of t.tables)a.url=`${n}/${a.id}`;return t}},32750:(e,t,r)=>{r.d(t,{v:()=>n});var a=r(91706);class n{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(e,t){const r=this._serviceMetadatas.get(e);if(r)return r;const n=await(0,a.V)(e,t);return this._serviceMetadatas.set(e,n),n}async fetchItemData(e){const{id:t}=e;if(!t)return null;const{_itemDatas:r}=this;if(r.has(t))return r.get(t);const a=await e.fetchData();return r.set(t,a),a}async fetchCustomParameters(e,t){const r=await this.fetchItemData(e);return r&&"object"==typeof r&&(t?t(r):r.customParameters)||null}}},38875:(e,t,r)=>{r.d(t,{load:()=>f});var a=r(74719),n=r(65073),s=r(51413),l=r(32750),o=r(78139),u=r(55909),i=r(2133),c=r(85866),y=r(52178),p=r(91706);async function f(e,t){const r=e.instance.portalItem;if(r?.id)return await r.load(t),function(e){const t=e.instance.portalItem;if(!t?.type||!e.supportedTypes.includes(t.type))throw new a.default("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:t?.type,expectedType:e.supportedTypes.join(", ")})}(e),e.validateItem&&e.validateItem(r),async function(e,t){const r=e.instance,n=r.portalItem;if(!n)return;const{url:o,title:f}=n,m=(0,u.v)(n,"portal-item");if("group"===r.type)return async function(e,t,r){const n=e.portalItem;if(!e.sourceIsPortalItem)return;const{title:o,type:y}=n;if("Group Layer"===y){if(!(0,c.Y)(n,"Map"))throw new a.default("portal:invalid-layer-item-typekeyword","'Group Layer' item without 'Map' type keyword is not supported");return async function(e,t){const r=e.portalItem,n=await r.fetchData("json");if(!n)return;if(!t.populateGroupLayer)throw new a.default("portal:missing-populate-group-layer","Missing populate group layer");const s=(0,u.v)(r,"web-map");e.read(n,s),await t.populateGroupLayer(e,n,{context:s}),e.resourceReferences={portalItem:r,paths:s.readResourcePaths??[]}}(e,r)}return e.read({title:o},t),async function(e,t){let r;const{portalItem:n}=e;if(!n)return;const o=n.type,u=t.layerModuleTypeMap;if(!u)throw new a.default("portal:missing-layer-module-type-map","Layer module type map is required to construct sub layers");switch(o){case"Feature Service":case"Feature Collection":r=u.FeatureLayer;break;case"Stream Service":r=u.StreamLayer;break;case"Scene Service":r=u.SceneLayer;break;default:throw new a.default("portal:unsupported-item-type-as-group",`The item type '${o}' is not supported as a 'IGroupLayer'`)}const c=new l.v;let[y,f]=await Promise.all([r(),h(t,c)]),m=()=>y;if("Feature Service"===o){const t=(0,i.pJ)(f)?.customParameters;f=n.url?await(0,i.bO)(f,n.url,c):{},m=await async function(e,t){const{layers:r,tables:a}=e,n=[...r??[],...a??[]];if(!n.length)return;const s=new Set,l=[];for(const{layerType:c}of n){const e=c??"ArcGISFeatureLayer";if(s.has(e))continue;s.add(e);const r=t[(0,i.K8)(e)];l.push(r())}const o=await Promise.all(l),u=new Map;return Array.from(s).forEach(((e,t)=>{u.set(e,o[t])})),e=>{let{layerType:t}=e;const r=t??"ArcGISFeatureLayer";return u.get(r)}}(f,u)||m;const r=await async function(e,t){const{layersJSON:r}=await(0,s.Q)(e,t);if(!r)return null;const a=[...r.layers,...r.tables];return e=>a.find((t=>t.id===e.id))}(n.url,{customParameters:t,loadContext:c});return await d(e,m,m,f,u,r)}return"Scene Service"===o&&n.url&&(f=await(0,i.nu)(n,f,c)),(0,i.XH)(f)>0?await d(e,m,null,f,u):await async function(e,t,r){const{portalItem:a}=e;if(!a?.url)return;const n=await(0,p.V)(a.url);n&&d(e,t,null,{layers:n.layers?.map(i._r),tables:n.tables?.map(i._r)},r)}(e,m,u)}(e,r)}(r,m,e);o&&"media"!==r.type&&r.read({url:o},m);const w=new l.v,g=await h(e,w,t);return g&&r.read(g,m),r.resourceReferences={portalItem:n,paths:m.readResourcePaths??[]},"subtype-group"!==r.type&&r.read({title:f},m),(0,y.L)(r,m)}(e,t)}async function d(e,t,r,a,n,s){let l=a.layers||[];const o=a.tables||[];if("Feature Collection"===e.portalItem?.type?(l.forEach(((e,t)=>{e.id=t,"Table"===e?.layerDefinition?.type&&o.push(e)})),l=l.filter((e=>"Table"!==e?.layerDefinition?.type))):(l.reverse(),o.reverse()),l.forEach((r=>{const n=s?.(r);if(n||!s){const s=m(e,t(r),a,r,n);e.add(s)}})),o.length){const t=r?null:await n.FeatureLayer();o.forEach((n=>{const l=s?.(n);if(l||!s){const s=m(e,r?r(n):t,a,n,l);e.tables.add(s)}}))}}function m(e,t,r,a,n){const s=e.portalItem,l={portalItem:s.clone(),layerId:a.id};null!=a.url&&(l.url=a.url);const u=new t(l);if("sourceJSON"in u&&(u.sourceJSON=n),"subtype-group"!==u.type&&"catalog"!==u.type&&(u.sublayerTitleMode="service-name"),"Feature Collection"===s.type){const e={origin:"portal-item",portal:s.portal||o.default.getDefault()};u.read(a,e);const t=r.showLegend;null!=t&&u.read({showLegend:t},e)}return u}async function h(e,t,r){if(!1===e.supportsData)return;const a=e.instance,s=a.portalItem;if(!s)return;let l=null;try{l=await s.fetchData("json",r)}catch(o){}if(function(e){return"stream"!==e.type&&"layerId"in e}(a)){let e=null;const r=await async function(e,t,r){if(t?.layers&&t?.tables)return(0,i.XH)(t);const a=(0,n.qg)(e.url);if(!a)return 1;const s=await r.fetchServiceMetadata(a.url.path,{customParameters:(0,i.pJ)(t)?.customParameters}).catch((()=>null));return(t?.layers?.length??s?.layers?.length??0)+(t?.tables?.length??s?.tables?.length??0)}(s,l,t);if((l?.layers||l?.tables)&&r>0){if(null==a.layerId){const e=(0,i.l)(a.type),t=e?.length?(0,i.Ju)(l,e)[0]:(0,i.pJ)(l);t&&(a.layerId=t.id)}e=function(e,t){const{layerId:r}=t,a=e.layers?.find((e=>e.id===r))||e.tables?.find((e=>e.id===r));return a&&function(e,t){const r="layerType"in e&&e.layerType,{type:a}=t;return!("feature"===a&&r&&"ArcGISFeatureLayer"!==e.layerType||"catalog"===a&&!r||"oriented-imagery"===a&&!r||"subtype-group"===a&&!r)}(a,t)?a:null}(l,a),"OrientedImageryLayer"===e?.layerType&&"oriented-imagery"===a.type&&a.supportedSourceTypes.add("Feature Layer"),e&&null!=l.showLegend&&(e.showLegend=l.showLegend)}return r>1&&"sublayerTitleMode"in a&&"service-name"!==a.sublayerTitleMode&&(a.sublayerTitleMode="item-title-and-service-name"),e}return l}},39960:(e,t,r)=>{r.d(t,{L:()=>c});var a=r(13248),n=r(23060),s=r(74719),l=r(49959),o=r(65073),u=r(78139),i=r(34587);async function c(e,t){const r=(0,o.qg)(e);if(!r)throw new s.default("invalid-url","Invalid scene service url");const c={...t,sceneServerUrl:r.url.path,layerId:r.sublayer??void 0};if(c.sceneLayerItem??=await async function(e){const t=(await y(e)).serviceItemId;if(!t)return null;const r=new i.default({id:t,apiKey:e.apiKey}),s=await async function(e){const t=a.id?.findServerInfo(e.sceneServerUrl);if(t?.owningSystemUrl)return t.owningSystemUrl;const r=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const t=(await(0,n.default)(r,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(t)return t}catch(f){(0,l.throwIfAbortError)(f)}return null}(e);null!=s&&(r.portal=new u.default({url:s}));try{return await r.load({signal:e.signal})}catch(d){return(0,l.throwIfAbortError)(d),null}}(c),null==c.sceneLayerItem)return p(c.sceneServerUrl.replace("/SceneServer","/FeatureServer"),c);const f=await async function(e){let{sceneLayerItem:t,signal:r}=e;if(!t)return null;try{const e=(await t.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:r})).find((e=>"Feature Service"===e.type))||null;if(!e)return null;const a=new i.default({portal:e.portal,id:e.id});return await a.load(),a}catch(a){return(0,l.throwIfAbortError)(a),null}}(c);if(!f?.url)throw new s.default("related-service-not-found","Could not find feature service through portal item relationship");c.featureServiceItem=f;const d=await p(f.url,c);return d.portalItem=f,d}async function y(e){if(e.rootDocument)return e.rootDocument;const t={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const r=await(0,n.default)(e.sceneServerUrl,t);e.rootDocument=r.data}catch{e.rootDocument={}}return e.rootDocument}async function p(e,t){const r=(0,o.qg)(e);if(!r)throw new s.default("invalid-feature-service-url","Invalid feature service url");const a=r.url.path,l=t.layerId;if(null==l)return{serverUrl:a};const u=y(t),i=t.featureServiceItem?await t.featureServiceItem.fetchData("json"):null,c=(i?.layers?.[0]||i?.tables?.[0])?.customParameters,p=e=>{const r={query:{f:"json",...c},responseType:"json",authMode:e,signal:t.signal};return(0,n.default)(a,r)},f=p("anonymous").catch((()=>p("no-prompt"))),[d,m]=await Promise.all([f,u]),h=m?.layers,w=d.data&&d.data.layers;if(!Array.isArray(w))throw new Error("expected layers array");if(Array.isArray(h)){for(let n=0;n<Math.min(h.length,w.length);n++)if(h[n].id===l)return{serverUrl:a,layerId:w[n].id}}else if(null!=l&&l<w.length)return{serverUrl:a,layerId:w[l].id};throw new Error("could not find matching associated sublayer")}},51413:(e,t,r)=>{r.d(t,{K:()=>p,Q:()=>s});var a=r(91706);const n=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function s(e,t){const{loadContext:r,...n}=t||{},s=r?await r.fetchServiceMetadata(e,n):await(0,a.V)(e,n);y(s),u(s);const l={serviceJSON:s};if((s.currentVersion??0)<10.5)return l;const o=`${e}/layers`,i=r?await r.fetchServiceMetadata(o,n):await(0,a.V)(o,n);return y(i),u(i),l.layersJSON={layers:i.layers,tables:i.tables},l}function l(e){const{type:t}=e;return!!t&&n.has(t)}function o(e){return"Table"===e.type}function u(e){e.layers=e.layers?.filter(l),e.tables=e.tables?.filter(o)}function i(e){e.type||="Feature Layer"}function c(e){e.type||="Table"}function y(e){e.layers?.forEach(i),e.tables?.forEach(c)}function p(e){switch(e){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}},91706:(e,t,r)=>{r.d(t,{V:()=>n});var a=r(23060);async function n(e,t){const{data:r}=await(0,a.default)(e,{responseType:"json",query:{f:"json",...t?.customParameters,token:t?.apiKey}});return r}}}]);