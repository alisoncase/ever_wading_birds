"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[3638],{2133:(e,r,a)=>{a.d(r,{Ju:()=>y,K8:()=>p,XH:()=>c,_r:()=>s,bO:()=>n,l:()=>u,nu:()=>d,pJ:()=>o,rc:()=>l});var t=a(39960),i=a(51413);function s(e){const r={id:e.id,name:e.name},a=(0,i.K)(e.type);return"FeatureLayer"!==a&&(r.layerType=a),r}async function n(e,r,a){if(null==e?.layers||null==e?.tables){const t=await a.fetchServiceMetadata(r,{customParameters:o(e)?.customParameters});(e=e||{}).layers=e.layers||t?.layers?.map(s),e.tables=e.tables||t?.tables?.map(s)}return e}function o(e){if(!e)return null;const{layers:r,tables:a}=e;return r?.length?r[0]:a?.length?a[0]:null}function l(e,r){return null==r?null:[...e.layers||[],...e.tables||[]].find((e=>e.id===r))}function y(e,r){return[...e.layers||[],...e.tables||[]].filter((e=>{let{layerType:a}=e;return a?r.includes(a):r.includes("ArcGISFeatureLayer")}))}function c(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function u(e){switch(e){case"catalog":return["CatalogLayer"];case"feature":return["ArcGISFeatureLayer"];case"oriented-imagery":return["OrientedImageryLayer"];case"subtype-group":return["SubtypeGroupLayer","SubtypeGroupTable"]}return null}function p(e){switch(e){case"CatalogLayer":return"CatalogLayer";case"OrientedImageryLayer":return"OrientedImageryLayer";case"SubtypeGroupLayer":case"SubtypeGroupTable":return"SubtypeGroupLayer"}return"FeatureLayer"}async function d(e,r,a){if(!e?.url)return r??{};if(r??={},!r.layers){const t=await a.fetchServiceMetadata(e.url);r.layers=t.layers?.map(s)}const{serverUrl:i,portalItem:n}=await(0,t.L)(e.url,{sceneLayerItem:e,customParameters:o(r)?.customParameters}).catch((()=>({serverUrl:null,portalItem:null})));if(null==i)return r.tables=[],r;if(!r.tables&&n){const e=await n.fetchData().catch((()=>null));if(e?.tables)r.tables=e.tables.map(s);else{const t=await a.fetchServiceMetadata(i,{customParameters:o(e)?.customParameters}).catch((()=>null));r.tables=t?.tables?.map(s)}}if(r.tables)for(const t of r.tables)t.url=`${i}/${t.id}`;return r}},7472:(e,r,a)=>{a.d(r,{X:()=>t});const t=Symbol("WebScene")},32750:(e,r,a)=>{a.d(r,{v:()=>i});var t=a(91706);class i{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(e,r){const a=this._serviceMetadatas.get(e);if(a)return a;const i=await(0,t.V)(e,r);return this._serviceMetadatas.set(e,i),i}async fetchItemData(e){const{id:r}=e;if(!r)return null;const{_itemDatas:a}=this;if(a.has(r))return a.get(r);const t=await e.fetchData();return a.set(r,t),t}async fetchCustomParameters(e,r){const a=await this.fetchItemData(e);return a&&"object"==typeof a&&(r?r(a):a.customParameters)||null}}},36501:(e,r,a)=>{a.r(r),a.d(r,{populateGroupLayer:()=>T,populateOperationalLayers:()=>c});var t=a(48690),i=(a(21265),a(32750)),s=a(90596),n=a(79601);function o(e,r){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===r}var l=a(87366),y=a(52178);async function c(e,r,a){if(!r)return;const t=r.map((e=>async function(e,r){return async function(e,r,a){const t=new e;return t.read(r,a.context),"group"===t.type&&("GroupLayer"===r.layerType?await T(t,r,a):I(r)?function(e,r,a){r.itemId&&(e.portalItem=new n.default({id:r.itemId,portal:a?.portal}),e.when((()=>{const t=t=>{const i=t.layerId;G(t,e,r,i,a);const s=r.featureCollection?.layers?.[i];s&&t.read(s,a)};e.layers?.forEach(t),e.tables?.forEach(t)})))}(t,r,a.context):g(r)&&await async function(e,r,a){const t=s.S.FeatureLayer,i=await t(),n=r.featureCollection,o=n?.showLegend,l=n?.layers?.map(((t,s)=>{const n=new i;n.read(t,a);const l={...a,ignoreDefaults:!0};return G(n,e,r,s,l),null!=o&&n.read({showLegend:o},l),n}));e.layers.addMany(l??[])}(t,r,a.context)),await(0,y.L)(t,a.context),t}(await w(e,r),e,r)}(e,a))),i=await Promise.allSettled(t);for(const s of i)"rejected"===s.status||s.value&&e.add(s.value)}const u={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BuildingSceneLayer:"BuildingSceneLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",IntegratedMesh3DTilesLayer:"IntegratedMesh3DTilesLayer",Object3DTilesLayer:"UnsupportedLayer",IntegratedMeshLayer:"IntegratedMeshLayer",KML:"KMLLayer",LineOfSightLayer:"LineOfSightLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",PointCloudLayer:"PointCloudLayer",RasterDataLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",ViewshedLayer:"ViewshedLayer",Voxel:"VoxelLayer",WCS:"WCSLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},p={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},d={ArcGISFeatureLayer:"FeatureLayer"},L={ArcGISImageServiceLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WCS:"UnsupportedLayer",WMS:"UnsupportedLayer",WebTiledLayer:"WebTileLayer"},m={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GeoRSS:"GeoRSSLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",KnowledgeGraphLayer:"KnowledgeGraphLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WCS:"WCSLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},f={ArcGISFeatureLayer:"FeatureLayer",SubtypeGroupTable:"SubtypeGroupLayer"},S={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WCS:"WCSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},h={...m,LinkChartLayer:"LinkChartLayer"},b={...f},v={...S};async function w(e,r){const a=r.context,t=M(a);let y=e.layerType||e.type;!y&&r?.defaultLayerType&&(y=r.defaultLayerType);const c=t[y];let u=c?s.S[c]:s.S.UnknownLayer;if(I(e)){const r=a?.portal;if(e.itemId){const a=new n.default({id:e.itemId,portal:r});await a.load();const t=(await(0,l.n)(a,new i.v)).className||"UnknownLayer";u=s.S[t]}}else"ArcGISFeatureLayer"===y?function(e){return o(e,"notes")}(e)||function(e){return o(e,"markup")}(e)?u=s.S.MapNotesLayer:function(e){return o(e,"route")}(e)?u=s.S.RouteLayer:g(e)&&(u=s.S.GroupLayer):e.wmtsInfo?.url&&e.wmtsInfo.layerIdentifier?u=s.S.WMTSLayer:"WFS"===y&&"2.0.0"!==e.wfsInfo?.version&&(u=s.S.UnsupportedLayer);return u()}function g(e){return"ArcGISFeatureLayer"===e.layerType&&!I(e)&&(e.featureCollection?.layers?.length??0)>1}function I(e){return"Feature Collection"===e.type}function M(e){let r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=L;break;case"ground":r=p;break;case"tables":r=d;break;default:r=u}break;case"link-chart":switch(e.layerContainerType){case"basemap":r=v;break;case"tables":r=b;break;default:r=h}break;default:switch(e.layerContainerType){case"basemap":r=S;break;case"tables":r=f;break;default:r=m}}return r}async function T(e,r,a){const i=new t.A,s=c(i,Array.isArray(r.layers)?r.layers:[],a);try{try{if(await s,"group"===e.type)return e.layers.addMany(i),e}catch(n){e.destroy();for(const e of i)e.destroy();throw n}}catch(n){throw n}}function G(e,r,a,t,i){e.read({id:`${r.id}-sublayer-${t}`,visibility:a.visibleLayers?.includes(t)??!0},i)}},63638:(e,r,a)=>{a.r(r),a.d(r,{default:()=>F});var t=a(93800),i=a(5100),s=a(53598),n=a(50925),o=a(59321),l=a(49959),y=a(79953),c=a(48602),u=(a(21265),a(14746),a(83497)),p=a(14800),d=a(75269),L=a(15484),m=a(70605),f=a(57457),S=a(24203),h=a(8592),b=a(30528),v=a(75215),w=a(36501),g=a(90596),I=a(79601),M=a(99356),T=a(118),G=a(2243),A=a(7472),C=a(53756),O=a(68004),N=a(52972);let _=class extends((0,S.dM)((0,v.j)((0,h.q)((0,b.A)((0,G.l)((0,T.Q)((0,o.P)(f.A)))))))){constructor(e){super(e),this.allLayers=new i.A({getCollections:()=>[this.layers],getChildrenFunction:e=>"layers"in e?e.layers:null}),this.allTables=(0,M.Z)(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._debouncedSaveOperations=(0,l.sg)((async(e,r,t)=>{const{save:i,saveAs:s}=await a.e(2873).then(a.bind(a,32873));switch(e){case C.X.SAVE:return i(this,r);case C.X.SAVE_AS:return s(this,t,r)}}))}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles([(0,y.wB)((()=>{let e=this.parent;for(;e&&"parent"in e&&e.parent;)e=e.parent;return e&&A.X in e}),(e=>{const r="prevent-adding-tables";this.removeHandles(r),e&&(this.tables.removeAll(),this.addHandles((0,y.on)((()=>this.tables),"before-add",(e=>{e.preventDefault(),n.A.getLogger(this).errorOnce("tables","tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.")})),r))}),y.pc),(0,y.wB)((()=>this.visible),this._onVisibilityChange.bind(this),y.OH)])}destroy(){this.allLayers.destroy(),this.allTables.destroy()}get sourceIsPortalItem(){return this.portalItem&&this.originIdOf("portalItem")===m.Gr.USER}_writeLayers(e,r,a,t){const i=[];if(!e)return i;e.forEach((e=>{const r=(0,N.CJ)(e,t.webmap?t.webmap.getLayerJSONFromResourceInfo(e):null,t);r?.layerType&&i.push(r)})),r.layers=i}set portalItem(e){this._set("portalItem",e)}readPortalItem(e,r,a){const{itemId:t,layerType:i}=r;if("GroupLayer"===i&&t)return new I.default({id:t,portal:a?.portal})}writePortalItem(e,r){e?.id&&(r.itemId=e.id)}set visibilityMode(e){const r=this._get("visibilityMode")!==e;this._set("visibilityMode",e),r&&this._enforceVisibility(e,this.visible)}async beforeSave(){return(0,O.d)(this)}load(e){const r=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Group Layer","Scene Service"],layerModuleTypeMap:g.S,populateGroupLayer:w.populateGroupLayer},e).catch((e=>{if((0,l.QP)(e),this.sourceIsPortalItem)throw e}));return this.addResolvingPromise(r),Promise.resolve(this)}async loadAll(){return(0,s.g)(this,(e=>{e(this.layers,this.tables)}))}async save(e){return this._debouncedSaveOperations(C.X.SAVE,e)}async saveAs(e,r){return this._debouncedSaveOperations(C.X.SAVE_AS,r,e)}layerAdded(e){e.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(e):"inherited"===this.visibilityMode&&(e.visible=this.visible),this.hasHandles(e.uid)?console.error(`Layer read to Grouplayer: uid=${e.uid}`):this.addHandles((0,y.wB)((()=>e.visible),(r=>this._onChildVisibilityChange(e,r)),y.OH),e.uid)}layerRemoved(e){this.removeHandles(e.uid),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(e){this.layers.forEach((r=>{r!==e&&(r.visible=!1)}))}_enforceVisibility(e,r){if(!(0,u.oY)(this).initialized)return;const a=this.layers;let t=a.find((e=>e.visible));switch(e){case"exclusive":a.length&&!t&&(t=a.at(0),t.visible=!0),this._turnOffOtherLayers(t);break;case"inherited":a.forEach((e=>{e.visible=r}))}}_onVisibilityChange(e){"inherited"===this.visibilityMode&&this.layers.forEach((r=>{r.visible=e}))}_onChildVisibilityChange(e,r){switch(this.visibilityMode){case"exclusive":r?this._turnOffOtherLayers(e):this._isAnyLayerVisible()||(e.visible=!0);break;case"inherited":e.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some((e=>e.visible))}};(0,t._)([(0,c.MZ)({readOnly:!0,dependsOn:[]})],_.prototype,"allLayers",void 0),(0,t._)([(0,c.MZ)({readOnly:!0})],_.prototype,"allTables",void 0),(0,t._)([(0,c.MZ)({json:{read:!0,write:!0}})],_.prototype,"blendMode",void 0),(0,t._)([(0,c.MZ)()],_.prototype,"fullExtent",void 0),(0,t._)([(0,c.MZ)({readOnly:!0})],_.prototype,"sourceIsPortalItem",null),(0,t._)([(0,c.MZ)({json:{read:!1,write:{ignoreOrigin:!0}}})],_.prototype,"layers",void 0),(0,t._)([(0,L.K)("layers")],_.prototype,"_writeLayers",null),(0,t._)([(0,c.MZ)({type:["GroupLayer"]})],_.prototype,"operationalLayerType",void 0),(0,t._)([(0,c.MZ)({json:{origins:{"web-map":{read:!1,write:{overridePolicy(e,r,a){return{enabled:"Group Layer"===e?.type&&a?.initiator!==this}}}},"web-scene":{read:!1,write:!1}}}})],_.prototype,"portalItem",null),(0,t._)([(0,p.w)("web-map","portalItem",["itemId"])],_.prototype,"readPortalItem",null),(0,t._)([(0,L.K)("web-map","portalItem",{itemId:{type:String}})],_.prototype,"writePortalItem",null),(0,t._)([(0,c.MZ)()],_.prototype,"spatialReference",void 0),(0,t._)([(0,c.MZ)({json:{read:!1},readOnly:!0,value:"group"})],_.prototype,"type",void 0),(0,t._)([(0,c.MZ)({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{type:["independent","exclusive"],write:(e,r,a)=>{"inherited"!==e&&(r[a]=e)}}}}})],_.prototype,"visibilityMode",null),_=(0,t._)([(0,d.$)("esri.layers.GroupLayer")],_);const F=_},68004:(e,r,a)=>{a.d(r,{c:()=>n,d:()=>i});var t=a(74719);async function i(e){const r=[];for(const a of e.allLayers)if("beforeSave"in a&&"function"==typeof a.beforeSave){const e=a.beforeSave();e&&r.push(e)}await Promise.allSettled(r)}const s=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function n(e,r,a){let i=(e.messages??[]).filter((e=>{let{type:r}=e;return"error"===r})).map((e=>{let{name:r,message:a,details:i}=e;return new t.A(r,a,i)}));if(e.blockedRelativeUrls&&(i=i.concat(e.blockedRelativeUrls.map((e=>new t.A("url:unsupported",`Relative url '${e}' is not supported`))))),a){const{ignoreUnsupported:e,supplementalUnsupportedErrors:r=[],requiredPropertyChecksDisabled:t}=a;e&&(i=i.filter((e=>{let{name:a}=e;return!(s.has(a)||r.includes(a))}))),t&&(i=i.filter((e=>"web-document-write:property-required"!==e.name)))}if(i.length>0)throw new t.A(r.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:i})}},87366:(e,r,a)=>{a.d(r,{fromItem:()=>p,n:()=>d});var t=a(74719),i=a(39960),s=a(51413),n=a(32750),o=a(78076),l=a(90596),y=a(79601),c=a(2133),u=a(85866);async function p(e){let{portalItem:r}=e;!r||r instanceof y.default||(r=new y.default(r));const a=await async function(e){await e.load();const r=new n.v;return async function(e){const r=e.className,a=l.S[r];return{constructor:await a(),properties:e.properties}}(await d(e,r))}(r);return new(0,a.constructor)({portalItem:r,...a.properties})}async function d(e,r){switch(e.type){case"3DTiles Service":return e.typeKeywords.includes("3DObject")?{className:"UnsupportedLayer"}:{className:"IntegratedMesh3DTilesLayer"};case"CSV":return{className:"CSVLayer"};case"Feature Collection":return async function(e){await e.load();const r=(0,u.Y)(e,"Map Notes"),a=(0,u.Y)(e,"Markup");if(r||a)return{className:"MapNotesLayer"};if((0,u.Y)(e,"Route Layer"))return{className:"RouteLayer"};const t=await e.fetchData();return 1===(0,c.XH)(t)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Feature Service":return async function(e,r){const a=await L(e,r);if("object"==typeof a){const{sourceJSON:e,className:r}=a,t={sourceJSON:e};return null!=a.id&&(t.layerId=a.id),{className:r||"FeatureLayer",properties:t}}return{className:"GroupLayer"}}(e,r);case"Feed":case"Stream Service":return{className:"StreamLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"Group Layer":return{className:"GroupLayer"};case"Image Service":return async function(e,r){await e.load();const a=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(a.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(a.includes("tiled imagery"))return{className:"ImageryTileLayer"};const t=await r.fetchItemData(e),i=t?.layerType;if("ArcGISTiledImageServiceLayer"===i)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===i)return{className:"ImageryLayer"};const s=await r.fetchServiceMetadata(e.url,{customParameters:await r.fetchCustomParameters(e)}),n=s.cacheType?.toLowerCase(),o=s.capabilities?.toLowerCase().includes("tilesonly"),l=s.tileInfo?.format?.toLowerCase()??"",y=null==n&&["jpg","jpeg","png","png8","png24","png32","mixed"].includes(l);return"map"===n||y||o?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e,r);case"KML":return{className:"KMLLayer"};case"Knowledge Graph Layer":return{className:"KnowledgeGraphLayer"};case"Map Service":return async function(e,r){return await async function(e,r){const{tileInfo:a}=await r.fetchServiceMetadata(e.url,{customParameters:await r.fetchCustomParameters(e)});return a}(e,r)?{className:"TileLayer"}:{className:"MapImageLayer"}}(e,r);case"Media Layer":return{className:"MediaLayer"};case"Scene Service":return async function(e,r){const a=await L(e,r,(async()=>{try{if(!e.url)return[];const{serverUrl:a}=await(0,i.L)(e.url,{sceneLayerItem:e}),t=await r.fetchServiceMetadata(a);return t?.tables??[]}catch{return[]}}));if("object"==typeof a){const t={};let i;if(null!=a.id?(t.layerId=a.id,i=`${e.url}/layers/${a.id}`):i=e.url,e.typeKeywords?.length)for(const r of Object.keys(o.XX))if(e.typeKeywords.includes(r))return{className:o.XX[r]};const s=await r.fetchServiceMetadata(i,{customParameters:await r.fetchCustomParameters(e,(e=>(0,c.pJ)(e)?.customParameters))});return{className:o.XX[s?.layerType]||"SceneLayer",properties:t}}if(!1===a){const a=await r.fetchServiceMetadata(e.url);if("Voxel"===a?.layerType)return{className:"VoxelLayer"}}return{className:"GroupLayer"}}(e,r);case"Vector Tile Service":return{className:"VectorTileLayer"};case"WCS":return{className:"WCSLayer"};case"WFS":return{className:"WFSLayer"};case"WMS":return{className:"WMSLayer"};case"WMTS":return{className:"WMTSLayer"};default:throw new t.A("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function L(e,r,a){const{url:t,type:i}=e,n="Feature Service"===i;if(!t)return{};if(/\/\d+$/.test(t)){if(n){const a=await r.fetchServiceMetadata(t,{customParameters:await r.fetchCustomParameters(e,(e=>(0,c.pJ)(e)?.customParameters))});return{id:a.id,className:(0,s.K)(a.type),sourceJSON:a}}return{}}await e.load();let o=await r.fetchItemData(e);if(n){const e=await(0,c.bO)(o,t,r),a=m(e);if("object"==typeof a){const r=(0,c.rc)(e,a.id);a.className=(0,c.K8)(r?.layerType)}return a}if("Scene Service"===i&&(o=await(0,c.nu)(e,o,r)),(0,c.XH)(o)>0)return m(o);const l=await r.fetchServiceMetadata(t);return a&&(l.tables=await a()),m(l)}function m(e){return 1===(0,c.XH)(e)&&{id:(0,c.pJ)(e)?.id}}}}]);