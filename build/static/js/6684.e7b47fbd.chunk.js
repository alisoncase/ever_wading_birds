"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[6684],{18444:(e,t,r)=>{r.d(t,{L0:()=>v,Ot:()=>c,W4:()=>l,uV:()=>d});var s=r(93800),o=r(19455),i=r(48602),n=(r(21265),r(50925),r(14746),r(47332)),a=r(75269);let l=class extends o.A{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,s._)([(0,i.MZ)({type:Number})],l.prototype,"nodesPerPage",void 0),(0,s._)([(0,i.MZ)({type:Number})],l.prototype,"rootIndex",void 0),(0,s._)([(0,i.MZ)({type:String})],l.prototype,"lodSelectionMetricType",void 0),l=(0,s._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SNodePageDefinition")],l);let p=class extends o.A{constructor(){super(...arguments),this.factor=1}};(0,s._)([(0,i.MZ)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],p.prototype,"id",void 0),(0,s._)([(0,i.MZ)({type:Number})],p.prototype,"factor",void 0),p=(0,s._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialTexture")],p);let u=class extends o.A{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,s._)([(0,i.MZ)({type:[Number]})],u.prototype,"baseColorFactor",void 0),(0,s._)([(0,i.MZ)({type:p})],u.prototype,"baseColorTexture",void 0),(0,s._)([(0,i.MZ)({type:p})],u.prototype,"metallicRoughnessTexture",void 0),(0,s._)([(0,i.MZ)({type:Number})],u.prototype,"metallicFactor",void 0),(0,s._)([(0,i.MZ)({type:Number})],u.prototype,"roughnessFactor",void 0),u=(0,s._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialPBRMetallicRoughness")],u);let d=class extends o.A{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,s._)([(0,n.e)({opaque:"opaque",mask:"mask",blend:"blend"})],d.prototype,"alphaMode",void 0),(0,s._)([(0,i.MZ)({type:Number})],d.prototype,"alphaCutoff",void 0),(0,s._)([(0,i.MZ)({type:Boolean})],d.prototype,"doubleSided",void 0),(0,s._)([(0,n.e)({none:"none",back:"back",front:"front"})],d.prototype,"cullFace",void 0),(0,s._)([(0,i.MZ)({type:p})],d.prototype,"normalTexture",void 0),(0,s._)([(0,i.MZ)({type:p})],d.prototype,"occlusionTexture",void 0),(0,s._)([(0,i.MZ)({type:p})],d.prototype,"emissiveTexture",void 0),(0,s._)([(0,i.MZ)({type:[Number]})],d.prototype,"emissiveFactor",void 0),(0,s._)([(0,i.MZ)({type:u})],d.prototype,"pbrMetallicRoughness",void 0),d=(0,s._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialDefinition")],d);let y=class extends o.A{};(0,s._)([(0,i.MZ)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],y.prototype,"name",void 0),(0,s._)([(0,n.e)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],y.prototype,"format",void 0),y=(0,s._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3STextureFormat")],y);let c=class extends o.A{constructor(){super(...arguments),this.atlas=!1}};(0,s._)([(0,i.MZ)({type:[y]})],c.prototype,"formats",void 0),(0,s._)([(0,i.MZ)({type:Boolean})],c.prototype,"atlas",void 0),c=(0,s._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3STextureSetDefinition")],c);let h=class extends o.A{};(0,s._)([(0,n.e)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],h.prototype,"type",void 0),(0,s._)([(0,i.MZ)({type:Number})],h.prototype,"component",void 0),h=(0,s._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryAttribute")],h);let f=class extends o.A{};(0,s._)([(0,n.e)({draco:"draco"})],f.prototype,"encoding",void 0),(0,s._)([(0,i.MZ)({type:[String]})],f.prototype,"attributes",void 0),f=(0,s._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryCompressedAttributes")],f);let g=class extends o.A{constructor(){super(...arguments),this.offset=0}};(0,s._)([(0,i.MZ)({type:Number})],g.prototype,"offset",void 0),(0,s._)([(0,i.MZ)({type:h})],g.prototype,"position",void 0),(0,s._)([(0,i.MZ)({type:h})],g.prototype,"normal",void 0),(0,s._)([(0,i.MZ)({type:h})],g.prototype,"uv0",void 0),(0,s._)([(0,i.MZ)({type:h})],g.prototype,"color",void 0),(0,s._)([(0,i.MZ)({type:h})],g.prototype,"uvRegion",void 0),(0,s._)([(0,i.MZ)({type:h})],g.prototype,"featureId",void 0),(0,s._)([(0,i.MZ)({type:h})],g.prototype,"faceRange",void 0),(0,s._)([(0,i.MZ)({type:f})],g.prototype,"compressedAttributes",void 0),g=(0,s._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryBuffer")],g);let v=class extends o.A{};(0,s._)([(0,n.e)({triangle:"triangle"})],v.prototype,"topology",void 0),(0,s._)([(0,i.MZ)()],v.prototype,"geometryBuffers",void 0),v=(0,s._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryDefinition")],v)},41317:(e,t,r)=>{r.d(t,{$7:()=>w,B:()=>x,Fo:()=>M,M7:()=>F,NN:()=>y,Q5:()=>S,Tq:()=>L,Up:()=>Z,XF:()=>A,Ze:()=>v,bK:()=>a,bh:()=>d,id:()=>m,ky:()=>u,qt:()=>T,tW:()=>I,v9:()=>c,w7:()=>l,wF:()=>n,wS:()=>b,wz:()=>f,x:()=>h,xS:()=>_,ze:()=>p});var s=r(84190),o=r(34308);function i(e){return e?T:L}function n(e,t){return t?.mode?t.mode:i(e).mode}function a(e,t){return null!=t?t:i(e)}function l(e,t){return n(null==e||(e.hasZ??!1),t)}function p(e,t){return a(null==e||(e.hasZ??!1),t)}function u(e){const t=g(e);return l(e.geometry,t)}function d(e){const t=g(e),r=l(e.geometry,t),s=null!=t&&"on-the-ground"!==r?F(t):0,o=t?.featureExpressionInfo;return{mode:r,offset:s,featureExpressionInfo:o}}function y(e){return f(d(e))}function c(e){return f(e)||h(e)}function h(e){return"0"===e?.featureExpressionInfo?.expression}function f(e){if(!e)return!1;if("on-the-ground"===e.mode)return!1;const t=e?.featureExpressionInfo?e.featureExpressionInfo.expression:null;return!(!t||"0"===t)}function g(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function v(e,t){if(!e?.offset)return 0;const{offset:r,unit:o}=e;if("decimal-degrees"===o)return 0;const i="unknown"!==o&&o?o:"meters",n=(0,s.mq)(t);return n?(0,s.oU)(r,i,n):0}function m(e,t,r){if(!r?.mode)return;const s=e.hasZ?e.z:0,o=v(r,e.spatialReference);switch(r.mode){case"absolute-height":return s-o;case"on-the-ground":return 0;case"relative-to-ground":return s-((t.elevationProvider.getElevation(e.x,e.y,s,e.spatialReference,"ground")??0)+o);case"relative-to-scene":return s-((t.elevationProvider.getElevation(e.x,e.y,s,e.spatialReference,"scene")??0)+o)}}function b(e,t,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return M(e,t.x,t.y,t.hasZ?t.z:0,t.spatialReference,r,s)}function _(e,t,r,s){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return M(e,t[0],t[1],t.length>2?t[2]:0,r,s,o)}function M(e,t,r,s,o,i){let n=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;if(null==i)return;const a=null!=n?n.mode:"absolute-height";if("on-the-ground"===a)return 0;const{absoluteZ:l}=S(t,r,s,o,e,i);return function(e,t,r,s,o,i,n,a){const l=v(n,o);switch(a){case"absolute-height":return e-l;case"relative-to-ground":return e-((i.elevationProvider.getElevation(t,r,s,o,"ground")??0)+l);case"relative-to-scene":return e-((i.elevationProvider.getElevation(t,r,s,o,"scene")??0)+l)}}(l,t,r,s,o,e,n,a)}function S(e,t,r,s,o,i){const n=v(i,s);switch(i.mode){case"absolute-height":return{absoluteZ:r+n,elevation:0};case"on-the-ground":{const r=o.elevationProvider.getElevation(e,t,0,s,"ground")??0;return{absoluteZ:r,elevation:r}}case"relative-to-ground":{const i=o.elevationProvider.getElevation(e,t,r,s,"ground")??0;return{absoluteZ:r+i+n,elevation:i}}case"relative-to-scene":{const i=o.elevationProvider.getElevation(e,t,r,s,"scene")??0;return{absoluteZ:r+i+n,elevation:i}}}}function Z(e,t){if(null==t)return!1;const{mode:r}=t;return null!=r&&("scene"===e&&"relative-to-scene"===r||"ground"===e&&"absolute-height"!==r)}function x(e,t,r){return r&&r.mode!==t?`${e} only support ${t} elevation mode`:null}function w(e,t,r){return r?.mode===t?`${e} do not support ${t} elevation mode`:null}function I(e,t){return null!=t?.featureExpressionInfo&&"0"!==t.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function A(e,t){t&&e.warn(".elevationInfo=",t)}function F(e){return(e?.offset??0)*(0,o.Ao)(e?.unit)}const T={mode:"absolute-height",offset:0},L={mode:"on-the-ground",offset:null}},46684:(e,t,r)=>{r.r(t),r.d(t,{default:()=>et});var s=r(93800),o=r(48690),i=r(5100),n=r(74719),a=r(82301),l=r(53598),p=r(50925),u=r(59321),d=r(49959),y=r(43103),c=r(48602),h=(r(21265),r(14800)),f=r(75269),g=r(93321),v=r(57457),m=r(79625),b=r(77955),_=r(23060),M=r(42761),S=r(81933),Z=r(20620),x=(r(14746),r(47332)),w=r(12560),I=r(74841),A=r(93633),F=r(80556),T=r(75238);let L=class extends(A.A.IdentifiableMixin(u.L)){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(e,t){return"string"==typeof t.alias?t.alias:"string"==typeof t.name?t.name:""}readIdOnlyOnce(e){return-1!==this.id?this.id:"number"==typeof e?e:-1}};(0,s._)([(0,c.MZ)({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],L.prototype,"title",void 0),(0,s._)([(0,h.w)("service","title",["alias","name"])],L.prototype,"readTitle",null),(0,s._)([(0,c.MZ)()],L.prototype,"layer",void 0),(0,s._)([(0,c.MZ)({type:F.jz,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,isRequired:!0}}})],L.prototype,"id",void 0),(0,s._)([(0,h.w)("service","id")],L.prototype,"readIdOnlyOnce",null),(0,s._)([(0,c.MZ)((0,T.Qo)(String))],L.prototype,"modelName",void 0),(0,s._)([(0,c.MZ)((0,T.Qo)(Boolean))],L.prototype,"isEmpty",void 0),(0,s._)([(0,c.MZ)({type:Boolean,nonNullable:!0})],L.prototype,"legendEnabled",void 0),(0,s._)([(0,c.MZ)({type:Boolean,json:{name:"visibility",write:!0}})],L.prototype,"visible",void 0),(0,s._)([(0,c.MZ)({type:Number,json:{write:!0}})],L.prototype,"opacity",void 0),L=(0,s._)([(0,f.$)("esri.layers.buildingSublayers.BuildingSublayer")],L);const O=L;var E=r(74048),j=r(78308),B=r(14365),R=r(76747),P=r(95011),q=r(65877),D=r(18444),N=r(97292),k=r(85618),C=r(69943),$=r(1802),Q=r(87730),U=r(29093),V=r(49996);const z=(0,B.p)();let K=class extends(S.A.LoadableMixin(Z.A.EsriPromiseMixin(O))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl?.path}/sublayers/${this.id}`,query:this.layer.parsedUrl?.query}:{path:""}}get fieldsIndex(){return new R.A(this.fields)}readAssociatedLayer(e,t){const r=this.layer.associatedFeatureServiceItem,s=t.associatedLayerID;return null!=r&&"number"==typeof s?new I.default({portalItem:r,customParameters:this.customParameters,layerId:s}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}get displayField(){return null!=this.associatedLayer?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get customParameters(){return this.layer.customParameters}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const t=null!=e?e.signal:null,r=this._fetchService(t).then((()=>{this.indexInfo=(0,q.F)(this.parsedUrl.path,this.rootNode,this.nodePages,this.customParameters,this.apiKey,p.A.getLogger(this),t)}));return this.addResolvingPromise(r),Promise.resolve(this)}createPopupTemplate(e){return(0,$.tn)(this,e)}async _fetchService(e){const t=(await(0,_.A)(this.parsedUrl.path,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const r=this.getField(e)?.domain??null;return this.associatedLayer?(0,j.Vq)(this.associatedLayer,e,t,r):r}getFeatureType(e){return e&&null!=this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){return null!=this.associatedLayer?this.associatedLayer.types??[]:[]}get typeIdField(){return null!=this.associatedLayer?this.associatedLayer.typeIdField:null}get geometryType(){return"3d-object"===this.layerType?"mesh":"point"}get profile(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=null!=this.associatedLayer&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:E.P,{query:t,data:{supportsZ:r,supportsM:s,isVersioned:o}}=e;return{query:t,data:{supportsZ:r,supportsM:s,isVersioned:o}}}createQuery(){const e=new k.A;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=this.layer,t.sourceLayer=this;return e}))}async queryObjectIds(e,t){const r=await this._getAssociatedLayerForQuery();return(await r.queryObjectIds(e||this.createQuery(),t)).filter(C.Et)}async queryCachedAttributes(e,t){const r=(0,P.hL)(this.fieldsIndex,await(0,V.TO)(this,(0,V.D8)(this)));return(0,U.s1)(this.parsedUrl.path,this.attributeStorageInfo,e,t,r,this.apiKey,this.customParameters)}async queryCachedFeature(e,t){const r=await this.queryCachedAttributes(e,[t]);if(!r||0===r.length)throw new n.A("scenelayer:feature-not-in-cached-data","Feature not found in cached data");return new m.A({attributes:r[0],layer:this,sourceLayer:this})}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:null!=this.associatedLayer}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return null!=e&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),null==this.associatedLayer)throw new n.A("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(ye){throw new n.A("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:ye})}return this.associatedLayer}};(0,s._)([(0,c.MZ)({readOnly:!0})],K.prototype,"parsedUrl",null),(0,s._)([(0,c.MZ)({type:D.W4,readOnly:!0})],K.prototype,"nodePages",void 0),(0,s._)([(0,c.MZ)({type:[D.uV],readOnly:!0})],K.prototype,"materialDefinitions",void 0),(0,s._)([(0,c.MZ)({type:[D.Ot],readOnly:!0})],K.prototype,"textureSetDefinitions",void 0),(0,s._)([(0,c.MZ)({type:[D.L0],readOnly:!0})],K.prototype,"geometryDefinitions",void 0),(0,s._)([(0,c.MZ)({readOnly:!0})],K.prototype,"serviceUpdateTimeStamp",void 0),(0,s._)([(0,c.MZ)({readOnly:!0})],K.prototype,"store",void 0),(0,s._)([(0,c.MZ)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],K.prototype,"rootNode",void 0),(0,s._)([(0,c.MZ)({readOnly:!0})],K.prototype,"attributeStorageInfo",void 0),(0,s._)([(0,c.MZ)(z.fields)],K.prototype,"fields",void 0),(0,s._)([(0,c.MZ)({readOnly:!0})],K.prototype,"fieldsIndex",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:I.default})],K.prototype,"associatedLayer",void 0),(0,s._)([(0,h.w)("service","associatedLayer",["associatedLayerID"])],K.prototype,"readAssociatedLayer",null),(0,s._)([(0,c.MZ)(z.outFields)],K.prototype,"outFields",void 0),(0,s._)([(0,c.MZ)({type:String,readOnly:!0})],K.prototype,"objectIdField",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:String,json:{read:!1}})],K.prototype,"displayField",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:String})],K.prototype,"apiKey",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:String})],K.prototype,"customParameters",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:w.A})],K.prototype,"fullExtent",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:g.A})],K.prototype,"spatialReference",null),(0,s._)([(0,c.MZ)({readOnly:!0})],K.prototype,"version",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:Q.A})],K.prototype,"elevationInfo",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:Number})],K.prototype,"minScale",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:Number})],K.prototype,"maxScale",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:Number})],K.prototype,"effectiveScaleRange",null),(0,s._)([(0,c.MZ)({type:["hide","show"],json:{write:!0}})],K.prototype,"listMode",void 0),(0,s._)([(0,c.MZ)({types:N.XJ,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],K.prototype,"renderer",void 0),(0,s._)([(0,c.MZ)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],K.prototype,"definitionExpression",void 0),(0,s._)([(0,c.MZ)(T.M6)],K.prototype,"popupEnabled",void 0),(0,s._)([(0,c.MZ)({type:b.A,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],K.prototype,"popupTemplate",void 0),(0,s._)([(0,c.MZ)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],K.prototype,"normalReferenceFrame",void 0),(0,s._)([(0,c.MZ)({readOnly:!0,json:{read:!1}})],K.prototype,"defaultPopupTemplate",null),(0,s._)([(0,c.MZ)()],K.prototype,"types",null),(0,s._)([(0,c.MZ)()],K.prototype,"typeIdField",null),(0,s._)([(0,c.MZ)({json:{write:!1}}),(0,x.e)(new M.J({"3DObject":"3d-object",Point:"point"}))],K.prototype,"layerType",void 0),(0,s._)([(0,c.MZ)()],K.prototype,"geometryType",null),(0,s._)([(0,c.MZ)()],K.prototype,"profile",null),(0,s._)([(0,c.MZ)({readOnly:!0,json:{read:!1}})],K.prototype,"capabilities",null),(0,s._)([(0,c.MZ)({readOnly:!0})],K.prototype,"statisticsInfo",void 0),K=(0,s._)([(0,f.$)("esri.layers.buildingSublayers.BuildingComponentSublayer")],K);const G=K;var H,W=r(21965);const X={type:o.A,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:J}}},read:!1}};function J(e,t,r){if(e&&Array.isArray(e))return new o.A(e.map((e=>{const t=function(e){return"group"===e.layerType?Y:G}(e);if(t){const s=new t;return s.read(e,r),s}return r?.messages&&e&&r.messages.push(new W.A("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r})),null})))}let Y=H=class extends O{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return(0,l.L)(this,(e=>H.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)}))))}};var ee;(0,s._)([(0,c.MZ)({type:["hide","show","hide-children"],json:{write:!0}})],Y.prototype,"listMode",void 0),(0,s._)([(0,c.MZ)(X)],Y.prototype,"sublayers",void 0),Y=H=(0,s._)([(0,f.$)("esri.layers.buildingSublayers.BuildingGroupSublayer")],Y),(ee=Y||(Y={})).sublayersProperty=X,ee.readSublayers=J,ee.forEachSublayer=function e(t,r){t.forEach((t=>{r(t),"building-group"===t.type&&e(t.sublayers,r)}))};const te=Y;var re=r(33979),se=r(9171),oe=r(53367),ie=r(8592),ne=r(30528),ae=r(75215),le=r(34787),pe=r(39960),ue=r(19455),de=r(12130);let ye=class extends ue.A{constructor(){super(...arguments),this.type=null}};(0,s._)([(0,c.MZ)({type:String,readOnly:!0,json:{write:{isRequired:!0}}})],ye.prototype,"type",void 0),ye=(0,s._)([(0,f.$)("esri.layers.support.BuildingFilterAuthoringInfo")],ye);const ce=ye;var he;let fe=he=class extends ue.A{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new he({filterType:this.filterType,filterValues:(0,a.o8)(this.filterValues)})}};(0,s._)([(0,c.MZ)({type:String,json:{write:{isRequired:!0}}})],fe.prototype,"filterType",void 0),(0,s._)([(0,c.MZ)({type:[String],json:{write:{isRequired:!0}}})],fe.prototype,"filterValues",void 0),fe=he=(0,s._)([(0,f.$)("esri.layers.support.BuildingFilterAuthoringInfoType")],fe);const ge=fe;var ve;const me=o.A.ofType(ge);let be=ve=class extends ue.A{clone(){return new ve({filterTypes:(0,a.o8)(this.filterTypes)})}};(0,s._)([(0,c.MZ)({type:me,json:{write:{isRequired:!0}}})],be.prototype,"filterTypes",void 0),be=ve=(0,s._)([(0,f.$)("esri.layers.support.BuildingFilterAuthoringInfoBlock")],be);const _e=be;var Me;const Se=o.A.ofType(_e);let Ze=Me=class extends ce{constructor(){super(...arguments),this.type="checkbox"}clone(){return new Me({filterBlocks:(0,a.o8)(this.filterBlocks)})}};(0,s._)([(0,c.MZ)({type:["checkbox"]})],Ze.prototype,"type",void 0),(0,s._)([(0,c.MZ)({type:Se,json:{write:{isRequired:!0}}})],Ze.prototype,"filterBlocks",void 0),Ze=Me=(0,s._)([(0,f.$)("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],Ze);const xe=Ze;let we=class extends ue.A{};(0,s._)([(0,c.MZ)({readOnly:!0,json:{read:!1,write:{isRequired:!0}}})],we.prototype,"type",void 0),we=(0,s._)([(0,f.$)("esri.layers.support.BuildingFilterMode")],we);const Ie=we;var Ae;let Fe=Ae=class extends Ie{constructor(){super(...arguments),this.type="solid"}clone(){return new Ae}};(0,s._)([(0,c.MZ)({type:["solid"],readOnly:!0,json:{write:{isRequired:!0}}})],Fe.prototype,"type",void 0),Fe=Ae=(0,s._)([(0,f.$)("esri.layers.support.BuildingFilterModeSolid")],Fe);const Te=Fe;var Le,Oe=r(69479);let Ee=Le=class extends Ie{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new Le({edges:(0,a.o8)(this.edges)})}};(0,s._)([(0,x.e)({wireFrame:"wire-frame"})],Ee.prototype,"type",void 0),(0,s._)([(0,c.MZ)(Oe.J)],Ee.prototype,"edges",void 0),Ee=Le=(0,s._)([(0,f.$)("esri.layers.support.BuildingFilterModeWireFrame")],Ee);const je=Ee;var Be;let Re=Be=class extends Ie{constructor(){super(...arguments),this.type="x-ray"}clone(){return new Be}};(0,s._)([(0,c.MZ)({type:["x-ray"],readOnly:!0,json:{write:{isRequired:!0}}})],Re.prototype,"type",void 0),Re=Be=(0,s._)([(0,f.$)("esri.layers.support.BuildingFilterModeXRay")],Re);const Pe=Re;var qe;const De={nonNullable:!0,types:{key:"type",base:Ie,typeMap:{solid:Te,"wire-frame":je,"x-ray":Pe}},json:{read:e=>{switch(e?.type){case"solid":return Te.fromJSON(e);case"wireFrame":return je.fromJSON(e);case"x-ray":return Pe.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let Ne=qe=class extends ue.A{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new Te,this.title=""}clone(){return new qe({filterExpression:this.filterExpression,filterMode:(0,a.o8)(this.filterMode),title:this.title})}};(0,s._)([(0,c.MZ)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Ne.prototype,"filterExpression",void 0),(0,s._)([(0,c.MZ)(De)],Ne.prototype,"filterMode",void 0),(0,s._)([(0,c.MZ)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Ne.prototype,"title",void 0),Ne=qe=(0,s._)([(0,f.$)("esri.layers.support.BuildingFilterBlock")],Ne);const ke=Ne;var Ce;const $e=o.A.ofType(ke);let Qe=Ce=class extends ue.A{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=(0,de.lk)(),this.name=null}clone(){return new Ce({description:this.description,filterBlocks:(0,a.o8)(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:(0,a.o8)(this.filterAuthoringInfo)})}};(0,s._)([(0,c.MZ)({type:String,json:{write:!0}})],Qe.prototype,"description",void 0),(0,s._)([(0,c.MZ)({type:$e,json:{write:{enabled:!0,isRequired:!0}}})],Qe.prototype,"filterBlocks",void 0),(0,s._)([(0,c.MZ)({types:{key:"type",base:ce,typeMap:{checkbox:xe}},json:{read:e=>"checkbox"===e?.type?xe.fromJSON(e):null,write:!0}})],Qe.prototype,"filterAuthoringInfo",void 0),(0,s._)([(0,c.MZ)({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],Qe.prototype,"id",void 0),(0,s._)([(0,c.MZ)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Qe.prototype,"name",void 0),Qe=Ce=(0,s._)([(0,f.$)("esri.layers.support.BuildingFilter")],Qe);const Ue=Qe;let Ve=class extends ue.A{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};(0,s._)([(0,c.MZ)({type:String})],Ve.prototype,"fieldName",void 0),(0,s._)([(0,c.MZ)({type:String})],Ve.prototype,"modelName",void 0),(0,s._)([(0,c.MZ)({type:String})],Ve.prototype,"label",void 0),(0,s._)([(0,c.MZ)({type:Number})],Ve.prototype,"min",void 0),(0,s._)([(0,c.MZ)({type:Number})],Ve.prototype,"max",void 0),(0,s._)([(0,c.MZ)({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],Ve.prototype,"mostFrequentValues",void 0),(0,s._)([(0,c.MZ)({type:[Number]})],Ve.prototype,"subLayerIds",void 0),Ve=(0,s._)([(0,f.$)("esri.layers.support.BuildingSummaryStatistics.BuildingFieldStatistics")],Ve);let ze=class extends(S.A.LoadableMixin(Z.A.EsriPromiseMixin(ue.A))){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(p.A.getLogger(this).error("building summary statistics are not loaded"),null)}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}async _fetchService(e){const t=(await(0,_.A)(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"})}};(0,s._)([(0,c.MZ)({constructOnly:!0,type:String})],ze.prototype,"url",void 0),(0,s._)([(0,c.MZ)({readOnly:!0,type:[Ve],json:{read:{source:"summary"}}})],ze.prototype,"fields",null),ze=(0,s._)([(0,f.$)("esri.layers.support.BuildingSummaryStatistics")],ze);const Ke=ze;var Ge=r(41317);const He=o.A.ofType(Ue),We=(0,a.o8)(te.sublayersProperty),Xe=We.json?.origins;Xe&&(Xe["web-scene"]={type:[G],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},Xe["portal-item"]={type:[G],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let Je=class extends((0,le.w6)((0,se.b)((0,ie.q)((0,ne.A)((0,ae.j)((0,u.P)((0,oe.d)((0,re.p)(v.A))))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new i.A({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this._allSublayerOverrides=null,this.filters=new He,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,t,r){const s=te.readSublayers(e,t,r);return te.forEachSublayer(s,(e=>e.layer=this)),this._allSublayerOverrides&&(function(e,t){t.forEach((t=>Ye(e,t)))}(s,this._allSublayerOverrides),this._allSublayerOverrides=null),s}write(e,t){return e=super.write(e,t),!t||"web-scene"!==t.origin&&"portal-item"!==t.origin||(this.sublayers?function(e,t,r){const s=[];te.forEachSublayer(e,(e=>{const t=e.write({},r);Object.keys(t).length>1&&s.push(t)})),s.length>0&&(t.sublayers=s)}(this.sublayers,e,t):this._allSublayerOverrides&&function(e,t,r){const s=r?.origin&&e.get(r.origin);s&&(t.sublayers=[],s.overrides.forEach((e=>{t.sublayers.push((0,a.o8)(e))})))}(this._allSublayerOverrides,e,t)),e}read(e,t){if(super.read(e,t),("web-scene"===t?.origin||"portal-item"===t?.origin)&&Array.isArray(e?.sublayers)){const r=function(e,t){const r=new Map;for(const s of e)null!=s&&"object"==typeof s&&"number"==typeof s.id?r.set(s.id,s):t.messages?.push(new n.A("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:s}));return{overrides:r,context:t}}(e.sublayers,t);this.sublayers?Ye(this.sublayers,r):(this._allSublayerOverrides??=new Map,this._allSublayerOverrides.set(t.origin,r))}}readSummaryStatistics(e,t){if("string"==typeof t.statisticsHRef){const e=(0,y.fj)(this.parsedUrl?.path,t.statisticsHRef);return new Ke({url:e})}return null}set elevationInfo(e){null!=e&&"absolute-height"!==e.mode||this._set("elevationInfo",e),this._validateElevationInfo(e)}load(e){const t=null!=e?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(d.QP).then((()=>this._fetchService(t))).then((()=>this._fetchAssociatedFeatureService(t)));return this.addResolvingPromise(r),Promise.resolve(this)}loadAll(){return(0,l.g)(this,(e=>{te.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)})),this.summaryStatistics&&e(this.summaryStatistics)}))}async saveAs(e,t){return this._debouncedSaveOperations(le.Xh.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(le.Xh.SAVE,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new n.A("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}async _fetchAssociatedFeatureService(e){try{const{portalItem:t}=await(0,pe.L)(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e});this.associatedFeatureServiceItem=t}catch(ee){p.A.getLogger(this).warn("Associated feature service item could not be loaded",ee)}}_validateElevationInfo(e){const t="Building scene layers";(0,Ge.XF)(p.A.getLogger(this),(0,Ge.B)(t,"absolute-height",e)),(0,Ge.XF)(p.A.getLogger(this),(0,Ge.tW)(t,e))}};function Ye(e,t){const{overrides:r,context:s}=t;te.forEachSublayer(e,(e=>e.read(r.get(e.id),s)))}(0,s._)([(0,c.MZ)({type:["BuildingSceneLayer"]})],Je.prototype,"operationalLayerType",void 0),(0,s._)([(0,c.MZ)({readOnly:!0})],Je.prototype,"allSublayers",void 0),(0,s._)([(0,c.MZ)(We)],Je.prototype,"sublayers",void 0),(0,s._)([(0,h.w)("service","sublayers")],Je.prototype,"readSublayers",null),(0,s._)([(0,c.MZ)({type:He,nonNullable:!0,json:{write:!0}})],Je.prototype,"filters",void 0),(0,s._)([(0,c.MZ)({type:String,json:{write:!0}})],Je.prototype,"activeFilterId",void 0),(0,s._)([(0,c.MZ)({readOnly:!0,type:Ke})],Je.prototype,"summaryStatistics",void 0),(0,s._)([(0,h.w)("summaryStatistics",["statisticsHRef"])],Je.prototype,"readSummaryStatistics",null),(0,s._)([(0,c.MZ)({type:[String],json:{read:!1}})],Je.prototype,"outFields",void 0),(0,s._)([(0,c.MZ)(T.Fm)],Je.prototype,"fullExtent",void 0),(0,s._)([(0,c.MZ)(T.fV)],Je.prototype,"legendEnabled",void 0),(0,s._)([(0,c.MZ)({type:["show","hide","hide-children"]})],Je.prototype,"listMode",void 0),(0,s._)([(0,c.MZ)((0,T.Qo)(g.A))],Je.prototype,"spatialReference",void 0),(0,s._)([(0,c.MZ)(T.Yj)],Je.prototype,"elevationInfo",null),(0,s._)([(0,c.MZ)({json:{read:!1},readOnly:!0})],Je.prototype,"type",void 0),(0,s._)([(0,c.MZ)()],Je.prototype,"associatedFeatureServiceItem",void 0),Je=(0,s._)([(0,f.$)("esri.layers.BuildingSceneLayer")],Je);const et=Je},49996:(e,t,r)=>{r.d(t,{D8:()=>i,TO:()=>o,d0:()=>n});var s=r(95011);async function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.popupTemplate;if(null==t)return[];const r=await t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:o}=t,{objectIdField:i,typeIdField:n,globalIdField:a,relationships:l}=e;if(r.includes("*"))return["*"];const p=o?(0,s.eX)(e):[],u=(0,s.DB)(e.fieldsIndex,[...r,...p]);return n&&u.push(n),u&&i&&e.fieldsIndex?.has(i)&&!u.includes(i)&&u.push(i),u&&a&&e.fieldsIndex?.has(a)&&!u.includes(a)&&u.push(a),l&&l.forEach((t=>{const{keyField:r}=t;u&&r&&e.fieldsIndex?.has(r)&&!u.includes(r)&&u.push(r)})),u}function i(e,t){return e.popupTemplate?e.popupTemplate:null!=t&&t.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}function n(e,t){return null!=i(e,{defaultPopupTemplateEnabled:t})}},74048:(e,t,r)=>{r.d(t,{$:()=>s,P:()=>o});const s={supportsDate:!1,supportsFixedInterval:!1,supportsAutoInterval:!1,supportsFixedBoundaries:!1,supportsStackBy:!1,supportsSplitBy:!1,supportsSnapToData:!1,supportsReturnFullIntervalBin:!1,supportsFirstDayOfWeek:!1,supportsNormalization:!1,supportedStatistics:void 0,supportedNormalizationTypes:void 0},o={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsOrderByFields:!1,supportsResize:!1},data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsAsyncApplyEdits:!1,zDefault:void 0},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryBins:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryAttributeBins:s,query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsCurrentUser:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsReturnMesh:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsTrueCurve:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}}}]);