"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[1051],{18444:(e,t,o)=>{o.d(t,{L0:()=>g,Ot:()=>y,W4:()=>p,uV:()=>c});var r=o(93800),n=o(19455),i=o(48602),s=(o(21265),o(50925),o(14746),o(47332)),a=o(75269);let p=class extends n.A{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,r._)([(0,i.MZ)({type:Number})],p.prototype,"nodesPerPage",void 0),(0,r._)([(0,i.MZ)({type:Number})],p.prototype,"rootIndex",void 0),(0,r._)([(0,i.MZ)({type:String})],p.prototype,"lodSelectionMetricType",void 0),p=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SNodePageDefinition")],p);let l=class extends n.A{constructor(){super(...arguments),this.factor=1}};(0,r._)([(0,i.MZ)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],l.prototype,"id",void 0),(0,r._)([(0,i.MZ)({type:Number})],l.prototype,"factor",void 0),l=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialTexture")],l);let u=class extends n.A{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,r._)([(0,i.MZ)({type:[Number]})],u.prototype,"baseColorFactor",void 0),(0,r._)([(0,i.MZ)({type:l})],u.prototype,"baseColorTexture",void 0),(0,r._)([(0,i.MZ)({type:l})],u.prototype,"metallicRoughnessTexture",void 0),(0,r._)([(0,i.MZ)({type:Number})],u.prototype,"metallicFactor",void 0),(0,r._)([(0,i.MZ)({type:Number})],u.prototype,"roughnessFactor",void 0),u=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialPBRMetallicRoughness")],u);let c=class extends n.A{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,r._)([(0,s.e)({opaque:"opaque",mask:"mask",blend:"blend"})],c.prototype,"alphaMode",void 0),(0,r._)([(0,i.MZ)({type:Number})],c.prototype,"alphaCutoff",void 0),(0,r._)([(0,i.MZ)({type:Boolean})],c.prototype,"doubleSided",void 0),(0,r._)([(0,s.e)({none:"none",back:"back",front:"front"})],c.prototype,"cullFace",void 0),(0,r._)([(0,i.MZ)({type:l})],c.prototype,"normalTexture",void 0),(0,r._)([(0,i.MZ)({type:l})],c.prototype,"occlusionTexture",void 0),(0,r._)([(0,i.MZ)({type:l})],c.prototype,"emissiveTexture",void 0),(0,r._)([(0,i.MZ)({type:[Number]})],c.prototype,"emissiveFactor",void 0),(0,r._)([(0,i.MZ)({type:u})],c.prototype,"pbrMetallicRoughness",void 0),c=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialDefinition")],c);let d=class extends n.A{};(0,r._)([(0,i.MZ)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],d.prototype,"name",void 0),(0,r._)([(0,s.e)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],d.prototype,"format",void 0),d=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3STextureFormat")],d);let y=class extends n.A{constructor(){super(...arguments),this.atlas=!1}};(0,r._)([(0,i.MZ)({type:[d]})],y.prototype,"formats",void 0),(0,r._)([(0,i.MZ)({type:Boolean})],y.prototype,"atlas",void 0),y=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3STextureSetDefinition")],y);let f=class extends n.A{};(0,r._)([(0,s.e)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],f.prototype,"type",void 0),(0,r._)([(0,i.MZ)({type:Number})],f.prototype,"component",void 0),f=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryAttribute")],f);let m=class extends n.A{};(0,r._)([(0,s.e)({draco:"draco"})],m.prototype,"encoding",void 0),(0,r._)([(0,i.MZ)({type:[String]})],m.prototype,"attributes",void 0),m=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryCompressedAttributes")],m);let h=class extends n.A{constructor(){super(...arguments),this.offset=0}};(0,r._)([(0,i.MZ)({type:Number})],h.prototype,"offset",void 0),(0,r._)([(0,i.MZ)({type:f})],h.prototype,"position",void 0),(0,r._)([(0,i.MZ)({type:f})],h.prototype,"normal",void 0),(0,r._)([(0,i.MZ)({type:f})],h.prototype,"uv0",void 0),(0,r._)([(0,i.MZ)({type:f})],h.prototype,"color",void 0),(0,r._)([(0,i.MZ)({type:f})],h.prototype,"uvRegion",void 0),(0,r._)([(0,i.MZ)({type:f})],h.prototype,"featureId",void 0),(0,r._)([(0,i.MZ)({type:f})],h.prototype,"faceRange",void 0),(0,r._)([(0,i.MZ)({type:m})],h.prototype,"compressedAttributes",void 0),h=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryBuffer")],h);let g=class extends n.A{};(0,r._)([(0,s.e)({triangle:"triangle"})],g.prototype,"topology",void 0),(0,r._)([(0,i.MZ)()],g.prototype,"geometryBuffers",void 0),g=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryDefinition")],g)},24589:(e,t,o)=>{o.d(t,{n:()=>n});var r=o(43103);function n(e){return i[function(e){return"json"===e.type?"application/json":"blob"===e.type?e.blob.type:function(e){const t=(0,r.Zo)(e);return p[t]||s}(e.url)}(e)]||a}const i={},s="text/plain",a=i[s],p={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const l in p)i[p[l]]=l},41317:(e,t,o)=>{o.d(t,{$7:()=>w,B:()=>I,Fo:()=>x,M7:()=>N,NN:()=>d,Q5:()=>b,Tq:()=>T,Up:()=>M,XF:()=>A,Ze:()=>g,bK:()=>a,bh:()=>c,id:()=>v,ky:()=>u,qt:()=>P,tW:()=>Z,v9:()=>y,w7:()=>p,wF:()=>s,wS:()=>_,wz:()=>m,x:()=>f,xS:()=>S,ze:()=>l});var r=o(84190),n=o(34308);function i(e){return e?P:T}function s(e,t){return t?.mode?t.mode:i(e).mode}function a(e,t){return null!=t?t:i(e)}function p(e,t){return s(null==e||(e.hasZ??!1),t)}function l(e,t){return a(null==e||(e.hasZ??!1),t)}function u(e){const t=h(e);return p(e.geometry,t)}function c(e){const t=h(e),o=p(e.geometry,t),r=null!=t&&"on-the-ground"!==o?N(t):0,n=t?.featureExpressionInfo;return{mode:o,offset:r,featureExpressionInfo:n}}function d(e){return m(c(e))}function y(e){return m(e)||f(e)}function f(e){return"0"===e?.featureExpressionInfo?.expression}function m(e){if(!e)return!1;if("on-the-ground"===e.mode)return!1;const t=e?.featureExpressionInfo?e.featureExpressionInfo.expression:null;return!(!t||"0"===t)}function h(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function g(e,t){if(!e?.offset)return 0;const{offset:o,unit:n}=e;if("decimal-degrees"===n)return 0;const i="unknown"!==n&&n?n:"meters",s=(0,r.mq)(t);return s?(0,r.oU)(o,i,s):0}function v(e,t,o){if(!o?.mode)return;const r=e.hasZ?e.z:0,n=g(o,e.spatialReference);switch(o.mode){case"absolute-height":return r-n;case"on-the-ground":return 0;case"relative-to-ground":return r-((t.elevationProvider.getElevation(e.x,e.y,r,e.spatialReference,"ground")??0)+n);case"relative-to-scene":return r-((t.elevationProvider.getElevation(e.x,e.y,r,e.spatialReference,"scene")??0)+n)}}function _(e,t,o){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return x(e,t.x,t.y,t.hasZ?t.z:0,t.spatialReference,o,r)}function S(e,t,o,r){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return x(e,t[0],t[1],t.length>2?t[2]:0,o,r,n)}function x(e,t,o,r,n,i){let s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;if(null==i)return;const a=null!=s?s.mode:"absolute-height";if("on-the-ground"===a)return 0;const{absoluteZ:p}=b(t,o,r,n,e,i);return function(e,t,o,r,n,i,s,a){const p=g(s,n);switch(a){case"absolute-height":return e-p;case"relative-to-ground":return e-((i.elevationProvider.getElevation(t,o,r,n,"ground")??0)+p);case"relative-to-scene":return e-((i.elevationProvider.getElevation(t,o,r,n,"scene")??0)+p)}}(p,t,o,r,n,e,s,a)}function b(e,t,o,r,n,i){const s=g(i,r);switch(i.mode){case"absolute-height":return{absoluteZ:o+s,elevation:0};case"on-the-ground":{const o=n.elevationProvider.getElevation(e,t,0,r,"ground")??0;return{absoluteZ:o,elevation:o}}case"relative-to-ground":{const i=n.elevationProvider.getElevation(e,t,o,r,"ground")??0;return{absoluteZ:o+i+s,elevation:i}}case"relative-to-scene":{const i=n.elevationProvider.getElevation(e,t,o,r,"scene")??0;return{absoluteZ:o+i+s,elevation:i}}}}function M(e,t){if(null==t)return!1;const{mode:o}=t;return null!=o&&("scene"===e&&"relative-to-scene"===o||"ground"===e&&"absolute-height"!==o)}function I(e,t,o){return o&&o.mode!==t?`${e} only support ${t} elevation mode`:null}function w(e,t,o){return o?.mode===t?`${e} do not support ${t} elevation mode`:null}function Z(e,t){return null!=t?.featureExpressionInfo&&"0"!==t.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function A(e,t){t&&e.warn(".elevationInfo=",t)}function N(e){return(e?.offset??0)*(0,n.Ao)(e?.unit)}const P={mode:"absolute-height",offset:0},T={mode:"on-the-ground",offset:null}},46751:(e,t,o)=>{o.d(t,{P:()=>y});var r=o(74719),n=o(99521),i=o(10876),s=o(43103),a=o(12130),p=o(54391),l=o(70605),u=o(48602),c=o(24589),d=o(85042);function y(e){const t=e?.origins??[void 0];return(o,r)=>{const n=function(e,t,o){if("resource"===e?.type)return function(e,t,o){const r=(0,p.z4)(t,o);return{type:String,read:(e,t,o)=>{const n=(0,d.r)(e,t,o);return r.type===String?n:"function"==typeof r.type?new r.type({url:n}):void 0},write:{isRequired:r.json?.write?.isRequired,writer(t,n,a,p){if(!p?.resources)return"string"==typeof t?void(n[a]=(0,d.t)(t,p)):void(n[a]=t.write({},p));const u=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),y=(0,d.t)(u,{...p,verifyItemRelativeUrls:p?.verifyItemRelativeUrls?{writtenUrls:p.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},d.M.NO),g=r.type!==String&&(!(0,i.H)(this)||p?.origin&&this.originIdOf(o)>(0,l.aB)(p.origin)),v={object:this,propertyName:o,value:t,targetUrl:y,dest:n,targetPropertyName:a,context:p,params:e};p?.portalItem&&y&&!(0,s.oP)(y)?g&&e?.contentAddressed?f(v):g?function(e){const{context:t,targetUrl:o,params:r,value:n,dest:i,targetPropertyName:a}=e;if(!t.portalItem)return;const p=t.portalItem.resourceFromPath(o),l=h(n,o,t),u=(0,c.n)(l),d=(0,s.Zo)(p.path),y=r?.compress??!1;u===d?(t.resources&&m({...e,resource:p,content:l,compress:y,updates:t.resources.toUpdate}),i[a]=o):f(e)}(v):function(e){let{context:t,targetUrl:o,dest:r,targetPropertyName:n}=e;t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(o),compress:!1}),r[n]=o)}(v):p?.portalItem&&(null==y||null!=(0,d.i)(y)||(0,s.w8)(y)||g)?f(v):n[a]=y}}}}(e,t,o);switch(e?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=d.b;return{read:e,write:t}}}}(e,o,r);for(const e of t){const t=(0,u.rM)(o,e,r);for(const e in n)t[e]=n[e]}}}function f(e){const{targetUrl:t,params:o,value:i,context:p,dest:l,targetPropertyName:u}=e;if(!p.portalItem)return;const y=(0,d.p)(t),f=h(i,t,p);if(o?.contentAddressed&&"json"!==f.type)return void p.messages?.push(new r.A("persistable:contentAddressingUnsupported",`Property "${u}" is trying to serializing a resource with content of type ${f.type} with content addressing. Content addressing is only supported for json resources.`,{content:f}));const g=o?.contentAddressed&&"json"===f.type?(0,n.d)(f.jsonString):y?.filename??(0,a.lk)(),v=(0,s.fj)(o?.prefix??y?.prefix,g),_=`${v}.${(0,c.n)(f)}`;if(o?.contentAddressed&&p.resources&&"json"===f.type){const e=p.resources.toKeep.find((e=>{let{resource:t}=e;return t.path===_}))??p.resources.toAdd.find((e=>{let{resource:t}=e;return t.path===_}));if(e)return void(l[u]=e.resource.itemRelativeUrl)}const S=p.portalItem.resourceFromPath(_);(0,s.w8)(t)&&p.resources&&p.resources.pendingOperations.push((0,s.tk)(t).then((e=>{S.path=`${v}.${(0,c.n)({type:"blob",blob:e})}`,l[u]=S.itemRelativeUrl})).catch((()=>{})));const x=o?.compress??!1;p.resources&&m({...e,resource:S,content:f,compress:x,updates:p.resources.toAdd}),l[u]=S.itemRelativeUrl}function m(e){let{object:t,propertyName:o,updates:r,resource:n,content:i,compress:s}=e;r.push({resource:n,content:i,compress:s,finish:e=>{!function(e,t,o){"string"==typeof e[t]?e[t]=o.url:e[t].url=o.url}(t,o,e)}})}function h(e,t,o){return"string"==typeof e?{type:"url",url:t}:{type:"json",jsonString:JSON.stringify(e.toJSON(o))}}},91051:(e,t,o)=>{o.r(t),o.d(t,{default:()=>z});var r,n=o(93800),i=o(74719),s=o(50925),a=o(59321),p=o(49959),l=o(79953),u=o(48602),c=(o(21265),o(14746),o(14800)),d=o(75269),y=o(46751),f=o(57457),m=o(33979),h=o(9171),g=o(53367),v=o(8592),_=o(30528),S=o(75215),x=o(34787),b=o(75238),M=o(18444),I=o(23060),w=o(48690),Z=o(19455),A=o(43103),N=o(82301),P=o(21965),T=o(15484),j=o(65920),R=o(96913);let U=r=class extends Z.A{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,o,r){if(r.layer?.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,R.canProjectWithoutEngine)(e.spatialReference,r.layer.spatialReference))return void(r?.messages&&r.messages.push(new P.A("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const n=new j.A;(0,R.projectPolygon)(e,n,r.layer.spatialReference),t[o]=n.toJSON(r)}else t[o]=e.toJSON(r);delete t[o].spatialReference}clone(){return new r({geometry:(0,N.o8)(this.geometry),type:this.type})}};(0,n._)([(0,u.MZ)({type:j.A}),(0,y.P)()],U.prototype,"geometry",void 0),(0,n._)([(0,T.K)(["web-scene","portal-item"],"geometry")],U.prototype,"writeGeometry",null),(0,n._)([(0,u.MZ)({type:["clip","mask","replace"],nonNullable:!0}),(0,y.P)()],U.prototype,"type",void 0),U=r=(0,n._)([(0,d.$)("esri.layers.support.SceneModification")],U);const O=U;var L;let $=L=class extends(Z.A.JSONSupportMixin(w.A.ofType(O))){constructor(e){super(e),this.url=null}clone(){return new L({url:this.url,items:this.items.map((e=>e.clone()))})}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}static fromJSON(e,t){const o=new L;for(const r of e)o.add(O.fromJSON(r,t));return o}static async fromUrl(e,t,o){const r={url:(0,A.An)(e),origin:"service"},n=await(0,I.A)(e,{responseType:"json",signal:o?.signal}),i=t.toJSON(),s=[];for(const a of n.data)s.push(O.fromJSON({...a,geometry:{...a.geometry,spatialReference:i}},r));return new L({url:e,items:s})}};(0,n._)([(0,u.MZ)({type:String})],$.prototype,"url",void 0),$=L=(0,n._)([(0,d.$)("esri.layers.support.SceneModifications")],$);const E=$;var F=o(41317),D=o(85042);let k=class extends((0,x.w6)((0,h.b)((0,v.q)((0,_.A)((0,S.j)((0,a.P)((0,g.d)((0,m.p)(f.A))))))))){constructor(){super(...arguments),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null,this.definitionExpression=null}initialize(){this.addHandles((0,l.on)((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),l.OH))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,o){this._modificationsSource={url:(0,D.f)(e,o),context:o}}set elevationInfo(e){null!=e&&"absolute-height"!==e.mode||this._set("elevationInfo",e),this._validateElevationInfo(e)}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=e?.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(o){(0,p.QP)(o)}if(await this._fetchService(t),null!=this._modificationsSource){const t=await E.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(null!=this._modificationsSource)return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(x.Xh.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(x.Xh.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new i.A("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new i.A("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new i.A("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(e){const t="Integrated mesh layers";(0,F.XF)(s.A.getLogger(this),(0,F.B)(t,"absolute-height",e)),(0,F.XF)(s.A.getLogger(this),(0,F.tW)(t,e))}};(0,n._)([(0,u.MZ)({type:String,readOnly:!0})],k.prototype,"geometryType",void 0),(0,n._)([(0,u.MZ)({type:["show","hide"]})],k.prototype,"listMode",void 0),(0,n._)([(0,u.MZ)({type:["IntegratedMeshLayer"]})],k.prototype,"operationalLayerType",void 0),(0,n._)([(0,u.MZ)({json:{read:!1},readOnly:!0})],k.prototype,"type",void 0),(0,n._)([(0,u.MZ)({type:M.W4,readOnly:!0})],k.prototype,"nodePages",void 0),(0,n._)([(0,u.MZ)({type:[M.uV],readOnly:!0})],k.prototype,"materialDefinitions",void 0),(0,n._)([(0,u.MZ)({type:[M.Ot],readOnly:!0})],k.prototype,"textureSetDefinitions",void 0),(0,n._)([(0,u.MZ)({type:[M.L0],readOnly:!0})],k.prototype,"geometryDefinitions",void 0),(0,n._)([(0,u.MZ)({readOnly:!0})],k.prototype,"serviceUpdateTimeStamp",void 0),(0,n._)([(0,u.MZ)({type:E}),(0,y.P)({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],k.prototype,"modifications",void 0),(0,n._)([(0,c.w)(["web-scene","portal-item"],"modifications")],k.prototype,"readModifications",null),(0,n._)([(0,u.MZ)(b.Yj)],k.prototype,"elevationInfo",null),(0,n._)([(0,u.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],k.prototype,"path",void 0),k=(0,n._)([(0,d.$)("esri.layers.IntegratedMeshLayer")],k);const z=k}}]);