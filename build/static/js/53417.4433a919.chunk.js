"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[41510,53417],{8660:(e,t,i)=>{i.d(t,{K:()=>P});var r=i(93800),s=i(79625),n=i(6946),a=i(42198),l=i(17741),o=i(49959),p=i(79953),d=i(48602),u=(i(21265),i(50925),i(14746),i(75269)),c=i(92012),h=i(15492),y=i(57457),g=i(34156),f=i(48845),v=i(53512),b=i(77297),m=i(13366),w=i(70478),_=i(18085),C=i(73925),S=i(12228),E=i(52003),M=i(12770),O=i(96432),I=i(71602);let P=class extends n.default{constructor(e){super(e),this.type="graphics-3d",this.graphicsCore=null,this.drapeSourceType=b.Om.Features,this.scaleVisibilityEnabled=!1,this.frustumVisibilityEnabled=!1,this._suspendResumeExtent=null,this._updatingHandles=new h.U}initialize(){const{layer:e}=this,t="effectiveScaleRange"in e?e:null,i=this.scaleVisibilityEnabled&&null!=t,r=new w.w({owner:this,layer:this.owner.layer,preferredUpdatePolicy:I.q.SYNC,graphicSymbolSupported:!0,componentFactories:{elevationAlignment:(e,t)=>new _.V({graphicsCoreOwner:this,graphicsCore:e,queryGraphicUIDsInExtent:t,elevationProvider:this.view.elevationProvider}),scaleVisibility:i?(e,i)=>new E.N({graphicsCoreOwner:this,layer:t,queryGraphicUIDsInExtent:i,graphicsCore:e,basemapTerrain:this.owner.view.basemapTerrain}):null,objectStates:e=>new S.w(e)}});if(this._set("graphicsCore",r),this.frustumVisibilityEnabled&&this._set("frustumVisibility",new C.p({graphicsCoreOwner:this})),"fullOpacity"in this.owner){const e=this.owner;this._updatingHandles.add((()=>e.fullOpacity),(()=>this.graphicsCore.opacityChange()))}if("elevationInfo"in e){const t=e;this._updatingHandles.add((()=>t.elevationInfo),((e,t)=>{(0,c.Ui)(e,t)&&this._updatingHandles.addPromise(this.graphicsCore.elevationInfoChange())}))}this._set("initializePromise",this._initializeAsync()),this._updatingHandles.addPromise(this.initializePromise)}async _initializeAsync(){try{await this.graphicsCore.initializePromise}catch(e){if((0,o.isAbortError)(e))return;throw e}this.destroyed||(this.addHandles((0,p.watch)((()=>this.view.clippingArea),(()=>this._updateClippingExtent()),p.sync)),this._updateClippingExtent(),this._setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics())}destroy(){this._updatingHandles.destroy(),this._set("frustumVisibility",(0,l.pR)(this.frustumVisibility)),this._set("graphicsCore",(0,l.pR)(this.graphicsCore))}get layer(){return this.owner.layer}get view(){return this.owner.view}get scaleVisibility(){return this.graphicsCore?.scaleVisibility}get elevationAlignment(){return this.graphicsCore?.elevationAlignment}get scaleVisibilitySuspended(){return!(null==this.scaleVisibility||!this.scaleVisibility.suspended)}get frustumVisibilitySuspended(){return null!=this.frustumVisibility&&this.frustumVisibility.suspended}get suspended(){return this.owner.suspended??!1}get updating(){return!!(this.graphicsCore?.updating||null!=this.scaleVisibility&&this.scaleVisibility.updating||null!=this.frustumVisibility&&this.frustumVisibility.updating||this._updatingHandles.updating)}get graphics3DGraphics(){return this.graphicsCore?.graphics3DGraphics}get graphics3DGraphicsByObjectID(){return this.graphicsCore?.graphics3DGraphicsByObjectID}get loadedGraphics(){return this.owner.loadedGraphics}get fullOpacity(){return this.owner.fullOpacity??1}get slicePlaneEnabled(){return this.owner.slicePlaneEnabled}get updatePolicy(){return this.owner.updatePolicy}notifyGraphicGeometryChanged(e){this.graphicsCore.notifyGraphicGeometryChanged(e)}notifyGraphicVisibilityChanged(e){this.graphicsCore.notifyGraphicVisibilityChanged(e)}getRenderingInfo(e,t,i){const r=(0,f.vl)(e,{renderer:t,arcade:i});if(r?.color){const e=r.color;e[0]=e[0]/255,e[1]=e[1]/255,e[2]=e[2]/255}return r}getRenderingInfoAsync(e,t,i,r){return(0,f.LO)(e,{renderer:t,arcade:i,...r})}getHit(e){if(this.owner.loadedGraphics){const t=this.owner.loadedGraphics.find((t=>t.uid===e));if(t){const e=this.layer instanceof y.default?this.layer:null,i=(0,g.wP)(t,e);return{type:"graphic",graphic:i,layer:i.layer}}}return null}whenGraphicBounds(e,t){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(e,t):Promise.reject()}computeAttachmentOrigin(e,t){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(e,t):null}getSymbolLayerSize(e,t){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(e,t):null}maskOccludee(e){const t=this.graphicsCore?.objectStates;if(!t)return(0,a.hA)();const{set:i,handle:r}=t.acquireOccludeeSet(null);return t.setUid(i,e.uid),r}highlight(e,t){const i=this.graphicsCore?.objectStates;if(!i)return V;if(e instanceof v.default)return V;const r=(0,O.UX)(e);if(0===r.length)return V;if(r[0]instanceof s.default){const e=r.map((e=>e.uid)),{set:s,handle:n}=i.acquireHighlightSet(t,null);return i.setUids(s,e),n}if("number"==typeof r[0]){const e=r,{set:s,handle:n}=i.acquireHighlightSet(t,null);return i.setObjectIds(s,e),n}return V}_setupSuspendResumeExtent(){const{scaleVisibility:e,frustumVisibility:t}=this;if(null==e&&null==t)return;const i=i=>{let{computedExtent:r,extentPadding:s}=i;this._suspendResumeExtent=(0,M.t8)(r,this._suspendResumeExtent,m.qD,s),null!=e&&e.setExtent(this._suspendResumeExtent),null!=t&&t.setExtent(this._suspendResumeExtent)};this.addHandles((0,p.watch)((()=>({computedExtent:this.graphicsCore?.computedExtent,extentPadding:this.graphicsCore?.extentPadding})),(e=>i(e)),p.syncAndInitial))}_updateClippingExtent(){const e=this.view.clippingArea;this.graphicsCore.setClippingExtent(e,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()}};(0,r._)([(0,d.MZ)()],P.prototype,"type",void 0),(0,r._)([(0,d.MZ)({constructOnly:!0})],P.prototype,"owner",void 0),(0,r._)([(0,d.MZ)()],P.prototype,"layer",null),(0,r._)([(0,d.MZ)()],P.prototype,"view",null),(0,r._)([(0,d.MZ)({constructOnly:!0})],P.prototype,"graphicsCore",void 0),(0,r._)([(0,d.MZ)()],P.prototype,"scaleVisibility",null),(0,r._)([(0,d.MZ)({constructOnly:!0})],P.prototype,"frustumVisibility",void 0),(0,r._)([(0,d.MZ)()],P.prototype,"elevationAlignment",null),(0,r._)([(0,d.MZ)()],P.prototype,"scaleVisibilitySuspended",null),(0,r._)([(0,d.MZ)({readOnly:!0})],P.prototype,"frustumVisibilitySuspended",null),(0,r._)([(0,d.MZ)()],P.prototype,"suspended",null),(0,r._)([(0,d.MZ)({readOnly:!0})],P.prototype,"updating",null),(0,r._)([(0,d.MZ)()],P.prototype,"loadedGraphics",null),(0,r._)([(0,d.MZ)()],P.prototype,"fullOpacity",null),(0,r._)([(0,d.MZ)()],P.prototype,"slicePlaneEnabled",null),(0,r._)([(0,d.MZ)()],P.prototype,"drapeSourceType",void 0),(0,r._)([(0,d.MZ)()],P.prototype,"updatePolicy",null),(0,r._)([(0,d.MZ)({constructOnly:!0})],P.prototype,"scaleVisibilityEnabled",void 0),(0,r._)([(0,d.MZ)({constructOnly:!0})],P.prototype,"frustumVisibilityEnabled",void 0),(0,r._)([(0,d.MZ)()],P.prototype,"initializePromise",void 0),P=(0,r._)([(0,u.$)("esri.views.3d.layers.graphics.GraphicsProcessor")],P);const V=(0,a.hA)()},38539:(e,t,i)=>{i.d(t,{V:()=>n});var r=i(5616),s=i(41510);async function n(e){const t=e.view.spatialReference,i=e.layer.fullExtent,n=null!=i&&i.spatialReference;if(null==i||!n)return null;if(n.equals(t))return i.clone();const a=(0,r.project)(i,t);if(null!=a)return a;if(e.view.state.isLocal)try{const r=await(0,s.projectGeometry)(i,t,e.layer.portalItem);return e.destroyed||null==r?null:r}catch{return null}return null}},41510:(e,t,i)=>{i.r(t),i.d(t,{getGeometryServiceURL:()=>o,projectGeometry:()=>p});var r=i(32195),s=i(74719),n=i(78139),a=i(81881),l=i(16897);async function o(){let e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=arguments.length>1?arguments[1]:void 0;if(r.default.geometryServiceUrl)return r.default.geometryServiceUrl;if(!t)throw new s.default("internal:geometry-service-url-not-configured");e="portal"in t?t.portal||n.default.getDefault():t,await e.load({signal:i});const a=e.helperServices?.geometry?.url;if(!a)throw new s.default("internal:geometry-service-url-not-configured");return a}async function p(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0;const n=await o(i,r),p=new l.default({geometries:[e],outSpatialReference:t}),d=await(0,a.C)(n,p,{signal:r});if(d&&Array.isArray(d)&&1===d.length)return d[0];throw new s.default("internal:geometry-service-projection-failed")}},53417:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var r=i(93800),s=i(74719),n=i(17741),a=i(79953),l=i(48602),o=(i(21265),i(50925),i(14746),i(75269)),p=i(76406),d=i(67004),u=i(8660),c=i(88323),h=i(37255),y=i(38539),g=i(71602),f=i(84279),v=i(50330);let b=class extends((0,p.w)(f.default)){constructor(){super(...arguments),this.type="graphics-3d",this.symbologySnappingSupported=!0,this._slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null,this.ignoresMemoryFactor=!0}get highlightOptions(){return null}initialize(){this._set("processor",new u.K({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.initializePromise),this.addHandles(this.layer.on("graphic-update",(e=>this.processor.graphicsCore.graphicUpdateHandler(e)))),this.layer.internal?this.notifyChange("updating"):(this.addResolvingPromise((0,y.V)(this).then((e=>this.fullExtentInLocalViewSpatialReference=e))),this.addHandles((0,a.when)((()=>this.view?.basemapTerrain?.ready),(()=>()=>this.notifyChange("updating")),{once:!0})))}destroy(){this._updatingHandles.removeAll(),this._set("processor",(0,n.pR)(this.processor))}get loadedGraphics(){return this.layer.graphics}get legendEnabled(){return this.canResume()&&!this.processor?.frustumVisibilitySuspended}get visibleAtCurrentScale(){return!this.processor?.scaleVisibilitySuspended}get slicePlaneEnabled(){const e=this.layer.internal;return this._slicePlaneEnabled&&!e}set slicePlaneEnabled(e){this._slicePlaneEnabled=e}getSuspendInfo(){const e=super.getSuspendInfo();return e.outsideOfView=this.processor?.frustumVisibilitySuspended??!1,e}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,t){return this.processor.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){return this.processor?.computeAttachmentOrigin(e,t)}getSymbolLayerSize(e,t){return this.processor.getSymbolLayerSize(e,t)}queryGraphics(){return Promise.resolve(this.loadedGraphics)}maskOccludee(e){return this.processor.maskOccludee(e)}highlight(e,t){return this.processor.highlight(e,t?.name??v.Tv)}async elevationAlignPointsInFeatures(e,t){const{processor:i}=this;if(null==i?.graphics3DGraphics)throw new s.default("graphicslayerview3d:missing-processor","A Graphics3D processor is needed to resolve graphics elevation.");const{graphics3DGraphics:r}=i;return(0,d.a)(this.view,this.layer,(e=>"number"==typeof e?r.get(e):void 0),e,t)}async queryForSymbologySnapping(e,t){return(0,c.N)(this.processor,e,t)}get updatePolicy(){return this.processor?.graphicsCore.effectiveUpdatePolicy||g.q.SYNC}isUpdating(){return this.view&&this.layer&&!(!this.processor?.updating&&(this.layer.internal||this.view.basemapTerrain?.ready))}get performanceInfo(){return new h.P(this.usedMemory,this.loadedGraphics.length,-1,-1)}get usedMemory(){return this.processor?.graphicsCore?.usedMemory??0}get unloadedMemory(){return this.processor?.graphicsCore?.unprocessedMemoryEstimate}get test(){return{graphics3DProcessor:this.processor,loadedGraphics:this.loadedGraphics}}};(0,r._)([(0,l.MZ)()],b.prototype,"highlightOptions",null),(0,r._)([(0,l.MZ)()],b.prototype,"loadedGraphics",null),(0,r._)([(0,l.MZ)({readOnly:!0})],b.prototype,"legendEnabled",null),(0,r._)([(0,l.MZ)()],b.prototype,"layer",void 0),(0,r._)([(0,l.MZ)({readOnly:!0})],b.prototype,"processor",void 0),(0,r._)([(0,l.MZ)({readOnly:!0})],b.prototype,"visibleAtCurrentScale",null),(0,r._)([(0,l.MZ)()],b.prototype,"_slicePlaneEnabled",void 0),(0,r._)([(0,l.MZ)({type:Boolean})],b.prototype,"slicePlaneEnabled",null),b=(0,r._)([(0,o.$)("esri.views.3d.layers.GraphicsLayerView3D")],b);const m=b},67004:(e,t,i)=>{i.d(t,{a:()=>c});var r=i(49959),s=i(28473),n=i(93321),a=i(31183),l=i(62240),o=i(41317),p=i(50190),d=i(72249),u=i(71750);async function c(e,t,i,c,h){const{elevationProvider:y,renderCoordsHelper:g}=e,{elevationInfo:f}=t,{pointsInFeatures:v,spatialReference:b}=c,m=n.default.fromJSON(b),w=(0,u.MF)(f,!0),_=await(0,u.q6)(w,m,h);(0,r.throwIfAborted)(h);const C=[],S=new Set,E=new Set,M=new d.F,O=(0,l.T)(0,0,0,n.default.WGS84),I=new p.Uk,P=(0,s.vt)();O.spatialReference=m;const V=e.elevationProvider.spatialReference??e.spatialReference;for(const{objectId:r,points:s}of v){const e=i(r);if(null==e){for(const e of s)C.push(e.z??0);S.add(r);continue}e.isDraped&&E.add(r);const n=e.graphic.geometry;M.setFromElevationInfo((0,o.ze)(n,f)),M.updateFeatureExpressionInfoContext(_,e.graphic,t);for(const{x:t,y:i,z:r}of s)O.x=t,O.y=i,O.z=r??0,await(0,a.W)(O,P,V,0,{signal:h}),(0,p.sE)(P,y,M,g,I),C.push(I.z)}return{elevations:C,drapedObjectIds:E,failedObjectIds:S}}},76406:(e,t,i)=>{i.d(t,{w:()=>d});var r=i(93800),s=i(42198),n=i(49959),a=i(79953),l=i(48602),o=(i(21265),i(50925),i(14746),i(75269)),p=i(19317);const d=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(){super.postscript(),(0,p.jI)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.addHandles((0,s.hA)((()=>e.abort()))),await(0,a.whenOnce)((()=>this.view.defaultsFromMap?.heightModelInfoReady),t),(0,n.throwIfAborted)(t);const i=(0,p.Hu)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}};return(0,r._)([(0,l.MZ)()],t.prototype,"view",void 0),(0,r._)([(0,l.MZ)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,r._)([(0,o.$)("esri.views.3d.layers.LayerView3D")],t),t}},84279:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var r=i(93800),s=i(6946),n=i(58448),a=i(93633),l=i(50925),o=i(17741),p=i(20620),d=i(48602),u=(i(21265),i(14746),i(75269)),c=i(15492),h=i(19983);let y=class extends(a.A.IdentifiableMixin(p.A.EsriPromiseMixin(n.A.EventedMixin(s.default)))){get spatialReferenceSupported(){return!0}constructor(e){super(e),this._updatingHandles=new c.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer?.title||"no title";l.A.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}destroy(){this._updatingHandles=(0,o.pR)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){const e=this.view.timeExtent,t=this.layer?.visibilityTimeExtent;return!e||!t||!e.intersection(t).isEmpty}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&this.layer?.loaded&&this.parent&&!this.parent.suspended&&this.view?.ready&&(0,h.g7)(e)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){const e=this.parent?.suspended?this.parent.suspendInfo:{};this.view?.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0);const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,h.g7)(t)&&this.visibleAtCurrentScale||(e.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(e.outsideVisibilityTimeExtent=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,r._)([(0,d.MZ)({readOnly:!0})],y.prototype,"spatialReferenceSupported",null),(0,r._)([(0,d.MZ)()],y.prototype,"view",void 0),(0,r._)([(0,d.MZ)()],y.prototype,"fullOpacity",null),(0,r._)([(0,d.MZ)()],y.prototype,"layer",void 0),(0,r._)([(0,d.MZ)()],y.prototype,"parent",void 0),(0,r._)([(0,d.MZ)({readOnly:!0})],y.prototype,"suspended",null),(0,r._)([(0,d.MZ)({readOnly:!0})],y.prototype,"suspendInfo",null),(0,r._)([(0,d.MZ)({readOnly:!0})],y.prototype,"legendEnabled",null),(0,r._)([(0,d.MZ)({type:Boolean,readOnly:!0})],y.prototype,"updating",null),(0,r._)([(0,d.MZ)({readOnly:!0})],y.prototype,"updatingProgress",null),(0,r._)([(0,d.MZ)()],y.prototype,"updateSuspended",null),(0,r._)([(0,d.MZ)()],y.prototype,"visible",null),(0,r._)([(0,d.MZ)({readOnly:!0})],y.prototype,"visibleAtCurrentScale",null),(0,r._)([(0,d.MZ)({readOnly:!0})],y.prototype,"visibleAtCurrentTimeExtent",null),y=(0,r._)([(0,u.$)("esri.views.layers.LayerView")],y);const g=y},88323:(e,t,i)=>{i.d(t,{N:()=>n});var r=i(49959),s=i(96247);async function n(e,t,i){if(null==e||0===t.candidates.length)return a;const n=e.graphics3DGraphicsByObjectID??e.graphics3DGraphics,l=[],o=[],{renderer:p}=e,d=null!=p&&"arcadeRequired"in p&&p.arcadeRequired?(0,s.lw)():null,u=async(t,r)=>{let{graphic:s,graphics3DSymbol:n}=r;const a=await d,l=await e.getRenderingInfoAsync(s,p,a,{signal:i});return null==l?[]:n.queryForSnapping(t,h,l,i)},{candidates:c,spatialReference:h}=t;for(let r=0;r<c.length;++r){const e=c[r],{objectId:t}=e,i="number"==typeof t?n?.get(t):void 0;if(null==i)continue;const{graphics3DSymbol:s}=i;s.symbologySnappingSupported&&(l.push(u(e,i)),o.push(r))}if(0===l.length)return a;const y=await Promise.all(l);(0,r.throwIfAborted)(i);const g=[],f=[];for(let r=0;r<y.length;++r){const e=y[r],t=o[r];for(const i of e)g.push(i),f.push(t)}return{candidates:g,sourceCandidateIndices:f}}const a={candidates:[],sourceCandidateIndices:[]}}}]);