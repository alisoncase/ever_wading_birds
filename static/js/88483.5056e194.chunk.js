"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[41510,88483],{38319:(e,t,i)=>{i.d(t,{W:()=>s});var r=i(60984),n=i(30051);class s extends r.im{intersect(e,t,i,r,s,a){return(0,n.Uy)(e,i,r,s,void 0,a)}}},38539:(e,t,i)=>{i.d(t,{V:()=>s});var r=i(5616),n=i(41510);async function s(e){const t=e.view.spatialReference,i=e.layer.fullExtent,s=null!=i&&i.spatialReference;if(null==i||!s)return null;if(s.equals(t))return i.clone();const a=(0,r.project)(i,t);if(null!=a)return a;if(e.view.state.isLocal)try{const r=await(0,n.projectGeometry)(i,t,e.layer.portalItem);return e.destroyed||null==r?null:r}catch{return null}return null}},41510:(e,t,i)=>{i.r(t),i.d(t,{getGeometryServiceURL:()=>l,projectGeometry:()=>d});var r=i(32195),n=i(74719),s=i(78139),a=i(81881),o=i(16897);async function l(){let e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=arguments.length>1?arguments[1]:void 0;if(r.default.geometryServiceUrl)return r.default.geometryServiceUrl;if(!t)throw new n.default("internal:geometry-service-url-not-configured");e="portal"in t?t.portal||s.default.getDefault():t,await e.load({signal:i});const a=e.helperServices?.geometry?.url;if(!a)throw new n.default("internal:geometry-service-url-not-configured");return a}async function d(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0;const s=await l(i,r),d=new o.default({geometries:[e],outSpatialReference:t}),h=await(0,a.C)(s,d,{signal:r});if(h&&Array.isArray(h)&&1===h.length)return h[0];throw new n.default("internal:geometry-service-projection-failed")}},47752:(e,t,i)=>{i.d(t,{I:()=>_,a:()=>y,b:()=>m});var r=i(96236),n=i(75304),s=i(50366),a=i(78731),o=i(61535),l=i(66652),d=i(35490),h=i(42403),u=i(16878),c=i(67058),p=i(22131),g=i(14480),f=i(20783),v=i(8118);class y extends f.Y{}function m(e){const t=new v.N5,{vertex:i,fragment:f}=t,{output:y,perspectiveInterpolation:m}=e;return(0,d.NB)(i,e),t.include(s.d,e),t.include(o.Z,e),t.fragment.include(n.HQ,e),t.include(a.g,e),t.include(g.z,e),t.attributes.add(p.r.POSITION,"vec3"),t.attributes.add(p.r.UV0,"vec2"),m&&t.attributes.add(p.r.PERSPECTIVEDIVIDE,"float"),i.main.add(u.H`
    vpos = position;
    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    vTexCoord = uv0;
    gl_Position = transformPosition(proj, view, vpos);
    ${(0,u.If)(m,"gl_Position *= perspectiveDivide;")}`),t.varyings.add("vpos","vec3"),t.varyings.add("vTexCoord","vec2"),f.include(l.a),f.uniforms.add(new h.m("opacity",(e=>e.opacity)),new c.N("tex",(e=>e.texture))).main.add(u.H`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${(0,u.If)(y===r.V.ObjectAndLayerIdColor,"fragColor = vec4(0, 0, 0, 1); return;")}
    vec4 finalColor = texture(tex, vTexCoord) * opacity;
    outputColorHighlightOID(finalColor, vpos);`),t}const _=Object.freeze(Object.defineProperty({__proto__:null,ImageMaterialPassParameters:y,build:m},Symbol.toStringTag,{value:"Module"}))},59247:(e,t,i)=>{i.d(t,{r:()=>M});var r=i(76517),n=i(96236),s=i(71723),a=i(35694),o=i(60984),l=i(85645),d=i(53801),h=i(89893),u=i(22131),c=i(19236),p=i(92434),g=i(38319),f=i(33050),v=i(93003),y=i(16434),m=i(86836),_=i(92804),w=i(47752),x=i(12723);class I extends y.w{constructor(e,t){super(e,t,new v.$(w.I,(()=>i.e(63336).then(i.bind(i,63336)))),b)}_getPipelineState(e,t){const{oitPass:i,output:r,hasOccludees:s,enableOffset:a,cullFace:o}=e,d=i===m.Y.NONE,h=i===m.Y.FrontFace;return(0,x.Ey)({blending:(0,n.RN)(r)?d?x.Os:(0,l.ez)(i):null,culling:(0,x.Xt)(o),depthTest:{func:(0,l.K_)(i)},depthWrite:(0,l.z5)(e),drawBuffers:(0,l.m6)(i,r),colorWrite:x.kn,stencilWrite:s?_.v0:null,stencilTest:s?t?_.a9:_.qh:null,polygonOffset:d||h?null:(0,l.aB)(a)})}initializePipeline(e){return this._occludeePipeline=this._getPipelineState(e,!0),this._getPipelineState(e,!1)}getPipeline(e){return e?this._occludeePipeline:super.getPipeline()}}const b=new Map([[u.r.POSITION,0],[u.r.UV0,2],[u.r.PERSPECTIVEDIVIDE,3]]);var A=i(93800),E=i(69261),S=i(82606),R=i(21484),P=i(51448);class O extends P.E{constructor(){super(...arguments),this.cullFace=s.s2.None,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.perspectiveInterpolation=!0,this.textureCoordinateType=E.I.None,this.emissionSource=S.ZX.None,this.discardInvisibleFragments=!0,this.occlusionPass=!1,this.objectAndLayerIdColorInstanced=!1}}(0,A._)([(0,R.W)({count:s.s2.COUNT})],O.prototype,"cullFace",void 0),(0,A._)([(0,R.W)()],O.prototype,"enableOffset",void 0),(0,A._)([(0,R.W)()],O.prototype,"writeDepth",void 0),(0,A._)([(0,R.W)()],O.prototype,"hasOccludees",void 0),(0,A._)([(0,R.W)()],O.prototype,"terrainDepthTest",void 0),(0,A._)([(0,R.W)()],O.prototype,"cullAboveTerrain",void 0),(0,A._)([(0,R.W)()],O.prototype,"perspectiveInterpolation",void 0);class M extends g.W{constructor(e){super(e,D),this._configuration=new O,this.vertexAttributeLocations=b,this.supportsEdges=!0,this.produces=new Map([[d.N.OPAQUE_MATERIAL,e=>(0,n.CL)(e)],[d.N.TRANSPARENT_MATERIAL,e=>(0,n._o)(e)&&this.parameters.writeDepth],[d.N.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>(0,n._o)(e)&&!this.parameters.writeDepth],[d.N.DRAPED_MATERIAL,e=>(0,n._o)(e)||(0,n.CL)(e)]])}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=t.hasOccludees,this._configuration.oitPass=t.oitPass,this._configuration.enableOffset=t.camera.relativeElevation<l.xt,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}get visible(){return!0}createGLMaterial(e){return new T(e)}createBufferWriter(){const e=p.zK.clone();return this.parameters.perspectiveInterpolation&&e.f32(u.r.PERSPECTIVEDIVIDE),new C(e)}}class T extends a.m8{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(I,e)}}class C extends c.Z{write(e,t,i,n,s,a){for(const o of this.vertexBufferLayout.fields.keys()){const n=i.get(o);if(n)if(o===u.r.PERSPECTIVEDIVIDE){(0,h.vA)(1===n.size);const e=s.getField(o,r.Y$);e&&(0,f.uO)(n,e,a)}else(0,f.zC)(o,n,e,t,s,a)}}}class D extends o.qA{constructor(e){super(),this.textureId=e,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=s.s2.None,this.opacity=1,this.perspectiveInterpolation=!1}}},71106:(e,t,i)=>{i.d(t,{A:()=>l});var r=i(93800),n=i(50925),s=i(49959),a=i(79953),o=(i(21265),i(14746),i(74719),i(75269));const l=e=>{let t=class extends e{initialize(){this.addHandles((0,a.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,s.isAbortError)(e)||n.A.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return t=(0,r._)([(0,o.$)("esri.views.layers.RefreshableLayerView")],t),t}},76406:(e,t,i)=>{i.d(t,{w:()=>h});var r=i(93800),n=i(42198),s=i(49959),a=i(79953),o=i(48602),l=(i(21265),i(50925),i(14746),i(75269)),d=i(19317);const h=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(){super.postscript(),(0,d.jI)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.addHandles((0,n.hA)((()=>e.abort()))),await(0,a.whenOnce)((()=>this.view.defaultsFromMap?.heightModelInfoReady),t),(0,s.throwIfAborted)(t);const i=(0,d.Hu)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}};return(0,r._)([(0,o.MZ)()],t.prototype,"view",void 0),(0,r._)([(0,o.MZ)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,r._)([(0,l.$)("esri.views.3d.layers.LayerView3D")],t),t}},84279:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});var r=i(93800),n=i(6946),s=i(58448),a=i(93633),o=i(50925),l=i(17741),d=i(20620),h=i(48602),u=(i(21265),i(14746),i(75269)),c=i(15492),p=i(19983);let g=class extends(a.A.IdentifiableMixin(d.A.EsriPromiseMixin(s.A.EventedMixin(n.default)))){get spatialReferenceSupported(){return!0}constructor(e){super(e),this._updatingHandles=new c.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer?.title||"no title";o.A.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}destroy(){this._updatingHandles=(0,l.pR)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){const e=this.view.timeExtent,t=this.layer?.visibilityTimeExtent;return!e||!t||!e.intersection(t).isEmpty}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&this.layer?.loaded&&this.parent&&!this.parent.suspended&&this.view?.ready&&(0,p.g7)(e)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){const e=this.parent?.suspended?this.parent.suspendInfo:{};this.view?.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0);const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,p.g7)(t)&&this.visibleAtCurrentScale||(e.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(e.outsideVisibilityTimeExtent=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,r._)([(0,h.MZ)({readOnly:!0})],g.prototype,"spatialReferenceSupported",null),(0,r._)([(0,h.MZ)()],g.prototype,"view",void 0),(0,r._)([(0,h.MZ)()],g.prototype,"fullOpacity",null),(0,r._)([(0,h.MZ)()],g.prototype,"layer",void 0),(0,r._)([(0,h.MZ)()],g.prototype,"parent",void 0),(0,r._)([(0,h.MZ)({readOnly:!0})],g.prototype,"suspended",null),(0,r._)([(0,h.MZ)({readOnly:!0})],g.prototype,"suspendInfo",null),(0,r._)([(0,h.MZ)({readOnly:!0})],g.prototype,"legendEnabled",null),(0,r._)([(0,h.MZ)({type:Boolean,readOnly:!0})],g.prototype,"updating",null),(0,r._)([(0,h.MZ)({readOnly:!0})],g.prototype,"updatingProgress",null),(0,r._)([(0,h.MZ)()],g.prototype,"updateSuspended",null),(0,r._)([(0,h.MZ)()],g.prototype,"visible",null),(0,r._)([(0,h.MZ)({readOnly:!0})],g.prototype,"visibleAtCurrentScale",null),(0,r._)([(0,h.MZ)({readOnly:!0})],g.prototype,"visibleAtCurrentTimeExtent",null),g=(0,r._)([(0,u.$)("esri.views.layers.LayerView")],g);const f=g},88483:(e,t,i)=>{i.d(t,{A:()=>Z});var r=i(93800),n=i(58828),s=i(42198),a=i(50925),o=i(17741),l=i(49959),d=i(79953),h=i(48602),u=(i(21265),i(14746),i(75269)),c=i(12560),p=i(90772),g=i(77297),f=i(76406),v=i(66028),y=i(46576),m=i(65069),_=i(25735),w=i(86580),x=i(22131);function I(e,t){return(0,w.Gj)(e,[[t[0],t[1],-1],[t[2],t[1],-1],[t[2],t[3],-1],[t[0],t[3],-1]])}function b(e,t,i){if(!(0,p.HY)(t,i))return I(e,i);const r=[t[1]-i[1],Math.min(t[3],i[3])-Math.max(t[1],i[1]),i[3]-t[3],123456],n=[t[0]-i[0],Math.min(t[2],i[2])-Math.max(t[0],i[0]),i[2]-t[2],123456],s=i[2]-i[0],a=i[3]-i[1],o=n[0]>0&&n[2]>0?3:2,l=r[0]>0&&r[2]>0?3:2,d=(l+1)*(o+1),h=(0,v.jh)(3*d),u=(0,y.oe)(2*d),c=new Array(6*(l*o-1));let g=0,f=0,w=0,b=0,E=0;for(let p=0;p<4;p++){const e=r[p];if(e<=0)continue;let t=0;for(let r=0;r<4;r++){const e=n[r];e<=0||(h[f++]=i[0]+t,h[f++]=i[1]+g,h[f++]=-1,u[w++]=t/s,u[w++]=g/a,r<3&&p<3&&(1!==r||1!==p)&&(c[E++]=b,c[E++]=b+1,c[E++]=b+o+1,c[E++]=b+1,c[E++]=b+o+2,c[E++]=b+o+1),b++,t+=e)}g+=e}const S=new Array(c.length);return new _.V(e,[[x.r.POSITION,new m.n(h,c,3,!0)],[x.r.NORMAL,new m.n(A,S,3,!0)],[x.r.UV0,new m.n(u,c,2,!0)]])}const A=[0,0,1];var E=i(38539),S=i(4794),R=i(44106),P=i(69473),O=i(10625),M=i(51446),T=i(71602),C=i(59247),D=i(84279),L=i(71106),N=i(19983),V=i(92156);let H=class extends((0,L.A)((0,f.w)(D.default))){constructor(){super(...arguments),this.drapeSourceType=g.Om.RasterImage,this.updatePolicy=T.q.SYNC,this.fullExtentInLocalViewSpatialReference=null,this.maximumDataResolution=null,this._images=new Array,this._extents=new Array,this._overlays=new Array,this.updateWhenStationary=!0,this._drapeSourceRenderer=null,this.refreshDebounced=(0,l.debounce)((async e=>{this.destroyed||await this._doRefresh(e).catch((e=>{(0,l.isAbortError)(e)||a.A.getLogger(this).error(e)}))}),2e3)}get visibleAtCurrentScale(){const e=this.layer,t="effectiveScaleRange"in e?e.effectiveScaleRange:null;return(0,N.E5)(t,this.view.scale)}initialize(){this._drapeSourceRenderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this),this.addHandles((0,s.hA)((()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this)))),this.addResolvingPromise((0,E.V)(this).then((e=>this._set("fullExtentInLocalViewSpatialReference",e)))),this._updatingHandles.add((()=>this.suspended),(()=>this._suspendedChangeHandler()))}destroy(){this.clear()}setDrapingExtent(e,t){this._spatialReference=t,e.forEach(((e,t)=>{this._overlays[t]=e,this._updateImageExtent(e,t)}))}_updateImageExtent(e,t){const i=this._clippedExtent(e.extent,G);if(null==i)return;const r=function(e,t,i){const r=(0,p.VL)(e)/(0,p.uJ)(e),n={width:i,height:i};return r>1.0001?n.height=i/r:r<.9999&&(n.width=i*r),n.width=Math.round(n.width/((0,p.VL)(e)/(0,p.VL)(t))),n.height=Math.round(n.height/((0,p.uJ)(e)/(0,p.uJ)(t))),n}(e.extent,i,e.resolution);let n=e.pixelRatio*this.view.state.pixelRatio;const{layer:s}=this;if("imageMaxWidth"in s&&null!=s.imageMaxWidth||"imageMaxHeight"in s&&null!=s.imageMaxHeight){const e=s.imageMaxWidth,t=s.imageMaxHeight;if(r.width>e){const t=e/r.width;r.height=Math.floor(r.height*t),r.width=e,n*=t}if(r.height>t){const e=t/r.height;r.width=Math.floor(r.width*e),r.height=t,n*=e}}const o=this._extents[t];o&&(0,p.aI)(o.extent,i)&&this._imageSizeEquals(i,o.imageSize,r)||(this._extents[t]={extent:(0,p.vt)(i),imageSize:r,pixelRatio:n},this.suspended||this._fetch(t).catch((e=>{(0,l.isAbortError)(e)||a.A.getLogger(this).error(e)})))}clear(){for(let e=0;e<this._images.length;e++)this._clearImage(e)}async doRefresh(){return this._doRefresh()}async _doRefresh(e){if(this.suspended)return;const t=[];for(let i=0;i<this._extents.length;i++)this._extents[i]&&t.push(this._fetch(i,e));await Promise.allSettled(t)}async processResult(e,t,i){(t instanceof HTMLImageElement||t instanceof HTMLCanvasElement)&&(e.image=t)}findExtentInfoAt(e){for(const t of this._extents){const i=t.extent;if(new c.default(i[0],i[1],i[2],i[3],this._spatialReference).contains(e))return t}return null}getFetchOptions(){}async redraw(e,t){await(0,n.jJ)(this._images,(async(i,r)=>{i&&(await e(i,t),await this._createStageObjects(r,i.image,t))}))}_imageSizeEquals(e,t,i){if(!this.maximumDataResolution)return!1;const r=(0,p.VL)(e)/this.maximumDataResolution.x,n=(0,p.uJ)(e)/this.maximumDataResolution.y,s=r/t.width,a=n/t.height,o=r/i.width,l=n/i.height,d=Math.abs(s-o),h=Math.abs(a-l),u=S.b.TESTS_DISABLE_OPTIMIZATIONS?0:1.5;return d<=u&&h<=u}async _fetch(e,t){if(this.suspended)return;const i=this._extents[e],r=i.extent;this._images[e]||(this._images[e]={texture:null,material:null,renderGeometry:null,loadingPromise:null,loadingAbortController:null,image:null,pixelData:null,renderExtent:(0,p.vt)(r)});const n=this._images[e];n.loadingAbortController=(0,o.DC)(n.loadingAbortController);const s=new c.default(r[0],r[1],r[2],r[3],this._spatialReference);if(0===s.width||0===s.height)return void this._clearImage(e);const d=new AbortController;n.loadingAbortController=d,(0,l.onAbort)(t,(()=>d.abort()));const h=d.signal,u=this._waitFetchReady(h).then((async()=>{const t={requestAsImageElement:!0,pixelRatio:this._overlays[e].pixelRatio,...this.getFetchOptions(),signal:h},{height:r,width:n}=i.imageSize;return this.layer.fetchImage(s,n,r,t)})).then((e=>{if((0,l.isAborted)(h))throw a.A.getLogger(this).warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."),(0,l.createAbortError)();return this.processResult(n,e)})).then((()=>{(0,p.C)(n.renderExtent,r)}));n.loadingPromise=u,await this._updatingHandles.addPromise(u.then((async()=>{(0,l.throwIfAborted)(h),await this._createStageObjects(e,n.image,h)})).catch((e=>{throw e&&!(0,l.isAbortError)(e)&&a.A.getLogger(this).error(e),e})).finally((()=>{u===n.loadingPromise&&(n.loadingPromise=null,n.loadingAbortController=null)})))}_clearImage(e){const t=this._images[e];if(t){null!=t.renderGeometry&&(this._drapeSourceRenderer.removeGeometries([t.renderGeometry],P.q.UPDATE),t.renderGeometry=null);const e=this.view._stage,i=t.texture;i?.unload(),e.remove(i),t.texture=null,e.remove(t.material),t.material=null,t.loadingAbortController=(0,o.DC)(t.loadingAbortController),t.loadingPromise=null,t.image=null,t.pixelData=null}}async _createStageObjects(e,t,i){const r=this.view._stage,s=this._images[e],a=()=>{s.texture?.unload(),r.remove(s.texture),s.texture=null,s.renderGeometry&&(this._drapeSourceRenderer.removeGeometries([s.renderGeometry],P.q.UPDATE),s.renderGeometry=null)};if(t){const o=new M.g(t,{width:t.width,height:t.height,preMultiplyAlpha:!0,wrap:{s:V.pF.CLAMP_TO_EDGE,t:V.pF.CLAMP_TO_EDGE}});let d;if(await(0,n.Ke)(this._images[e===R.vr.INNER?R.vr.OUTER:R.vr.INNER].loadingPromise),(0,l.throwIfAborted)(i),a(),await r.schedule((()=>o.load(r.renderView.renderingContext)),i),r.add(o),s.texture=o,null==s.material?(s.material=new C.r({textureId:o.id}),r.add(s.material)):s.material.setParameters({textureId:o.id}),e===R.vr.INNER)d=I(s.material,s.renderExtent);else{const e=this._images[0].renderExtent;if(!e)return void a();d=b(s.material,e,s.renderExtent)}s.renderGeometry=new O.$(d),s.renderGeometry.localOrigin=this._overlays[e].renderLocalOrigin,this._drapeSourceRenderer.addGeometries([s.renderGeometry],P.q.UPDATE)}else a(),r.remove(s.material),s.material=null}_clippedExtent(e,t){if("local"!==this.view.viewingMode)return(0,p.C)(t,e);const i=this.view.basemapTerrain;return i.ready?(0,p.E$)(e,i.extent,t):(0,p.C)(t,e)}_suspendedChangeHandler(){this.suspended?this.clear():this.refreshDebounced()}async _waitFetchReady(e){await(0,d.whenOnce)((()=>this.view.stationary),e),(0,l.throwIfAborted)(e)}};(0,r._)([(0,h.MZ)()],H.prototype,"layer",void 0),(0,r._)([(0,h.MZ)()],H.prototype,"suspended",void 0),(0,r._)([(0,h.MZ)({readOnly:!0})],H.prototype,"fullExtentInLocalViewSpatialReference",void 0),(0,r._)([(0,h.MZ)({readOnly:!0})],H.prototype,"visibleAtCurrentScale",null),(0,r._)([(0,h.MZ)()],H.prototype,"updating",void 0),H=(0,r._)([(0,u.$)("esri.views.3d.layers.DynamicLayerView3D")],H);const Z=H,G=(0,p.vt)()},92434:(e,t,i)=>{i.d(t,{Ci:()=>s,Dq:()=>l,dB:()=>o,zK:()=>a});var r=i(98876),n=i(22131);const s=(0,r.BP)().vec3f(n.r.POSITION),a=(0,r.BP)().vec3f(n.r.POSITION).vec2f(n.r.UV0),o=(0,r.BP)().vec3f(n.r.POSITION).vec4u8(n.r.COLOR),l=(0,r.BP)().vec3f(n.r.POSITION).vec2f(n.r.UV0).vec4u8(n.r.OBJECTANDLAYERIDCOLOR)}}]);