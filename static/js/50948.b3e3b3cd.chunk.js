"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[11833,12336,37004,45078,50948,65207],{4716:(e,t,r)=>{r.d(t,{c:()=>i,n:()=>f});var i,o,a=r(7951),n=r(64682),s=r(20889),l=r(87752),c=r(10382),h=r(89227),d=r(28473),u=r(21465),g=r(23311),p=r(92212),v=r(39584);class f{constructor(){this.startTime=0,this._data=(0,s.v)(null),this._readChannels=p.c.RG,this.parallax=new m,this.parallaxNew=new m,this._anchorPoint=(0,d.vt)(),this._fadeState=(0,s.v)(i.HIDE),this._fadeFactor=(0,s.v)(1)}get data(){return this._data.value}set data(e){this._data.value=e}get readChannels(){return this._readChannels}get fadeState(){return this._fadeState.value}get fadeFactor(){return this._fadeFactor.value}get opacity(){switch(this.fadeState){case i.HIDE:return 0;case i.FADE_OUT:return 1-this.fadeFactor;case i.FADE_IN:return this.fadeFactor;case i.SHOW:case i.CROSS_FADE:return 1}}fade(e,t,r){this.isFading&&this.fadeFactor<1&&(this._fadeFactor.value=r?(0,n.qE)((t-this.startTime)/(w*r),0,1):1,1===this.fadeFactor&&this._endFade()),this._evaluateState(e,t),this._updateParallax(e)}_evaluateState(e,t){const r=e.relativeElevation,o=this._updateAnchorPoint(e);(r>1.7*v.zF||r<-1e4||o>b)&&this.opacity>0?this._startFade(i.HIDE,t):this.isFading||(r>v.zF||r<-.35*v.zF||o>C*b?this.opacity>0&&this._startFade(i.FADE_OUT,t):(0,p.pi)(this.data)&&(0===this.opacity?this._startFade(i.FADE_IN,t):this.data.state===p.tf.Ready&&(this.fadeState===i.SHOW?this._startFade(i.CROSS_FADE,t):this._startFade(i.SHOW,t))))}_updateParallax(e){const t=(0,h.k)(e.eye);this.parallax.radiusCurvatureCorrection=.84*Math.sqrt(Math.max(t-g.$O.radius*g.$O.radius,0))/Math.sqrt(t),(0,u.Cr)(_,this.parallax.anchorPoint,x),(0,l.e$)(this.parallax.transform,c.zK,x[3],(0,u.yo)(x)),(0,u.Cr)(_,this.parallaxNew.anchorPoint,x),(0,l.e$)(this.parallaxNew.transform,c.zK,x[3],(0,u.yo)(x))}_updateAnchorPoint(e){return(0,h.n)(this._anchorPoint,e.eye),(0,h.h)(this._anchorPoint,this._anchorPoint,g.$O.radius),this.fadeState===i.HIDE&&this.data?.state===p.tf.Ready?((0,h.c)(this.parallax.anchorPoint,this._anchorPoint),0):(0,h.l)((0,h.d)(y,this.parallax.anchorPoint,this._anchorPoint))}requestFade(){this._fadeFactor.value=0}_startFade(e,t){switch(this._fadeState.value=e,this.startTime=t,e){case i.CROSS_FADE:this.requestFade(),this._switchReadChannels(),(0,h.c)(this.parallaxNew.anchorPoint,this._anchorPoint);break;case i.FADE_IN:this.requestFade(),this._switchReadChannels(),(0,h.c)(this.parallax.anchorPoint,this._anchorPoint),(0,h.c)(this.parallaxNew.anchorPoint,this._anchorPoint);break;case i.FADE_OUT:this.requestFade();break;case i.SHOW:this._switchReadChannels(),(0,h.c)(this.parallax.anchorPoint,this._anchorPoint),(0,h.c)(this.parallaxNew.anchorPoint,this._anchorPoint),this._endFade();break;case i.HIDE:this._endFade()}}_endFade(){switch(this._fadeFactor.value=1,this.data&&this.data.state!==p.tf.Ready&&(this.data.state=p.tf.Idle),this.fadeState){case i.CROSS_FADE:(0,h.c)(this.parallax.anchorPoint,this.parallaxNew.anchorPoint),this._fadeState.value=i.SHOW;break;case i.FADE_IN:this._fadeState.value=i.SHOW;break;case i.FADE_OUT:this._fadeState.value=i.HIDE;break;case i.SHOW:case i.HIDE:break;default:(0,a.Xb)(this.fadeState)}}_switchReadChannels(){this.data?.state===p.tf.Ready&&(this._readChannels=1-this._readChannels,this.data.state=p.tf.Fading)}get isFading(){return this.fadeState===i.FADE_OUT||this.fadeState===i.FADE_IN||this.fadeState===i.CROSS_FADE}}(o=i||(i={}))[o.HIDE=0]="HIDE",o[o.FADE_IN=1]="FADE_IN",o[o.SHOW=2]="SHOW",o[o.CROSS_FADE=3]="CROSS_FADE",o[o.FADE_OUT=4]="FADE_OUT";class m{constructor(){this.anchorPoint=(0,d.vt)(),this.radiusCurvatureCorrection=0,this.transform=(0,c.vt)()}}const _=(0,d.fA)(0,0,1),x=(0,u.vt)(),y=(0,d.vt)(),w=1.25,C=.5,b=2e5},9369:(e,t,r)=>{r.d(t,{Z:()=>o});var i=r(25874);class o extends i.Z{}},10625:(e,t,r)=>{r.d(t,{$:()=>c});var i=r(31923),o=r(87752),a=r(10382),n=r(89227),s=r(89476),l=r(11741);class c{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.geometry=e,this.screenToWorldRatio=1,this._transformation=(0,a.vt)(),this._shaderTransformation=null,this._boundingSphere=null,this.id=(0,i.c)(),this.layerUid=t.layerUid,this.graphicUid=t.graphicUid,this.castShadow=t.castShadow??!1,t.objectShaderTransformation&&this.objectShaderTransformationChanged(t.objectShaderTransformation)}get transformation(){return this._transformation}set transformation(e){(0,o.C)(this._transformation,e),this._boundingSphere=null}get boundingInfo(){return this.geometry.boundingInfo}objectShaderTransformationChanged(e){null==e?this._shaderTransformation=null:(this._shaderTransformation??=(0,a.vt)(),(0,o.lw)(this._shaderTransformation,e,this.geometry.transformation)),this._boundingSphere=null}get boundingSphere(){return this.boundingInfo?(null==this._boundingSphere&&(this._boundingSphere??=(0,s.c)(),(0,n.t)((0,s.a)(this._boundingSphere),this.boundingInfo.center,this.shaderTransformation),this._boundingSphere[3]=this.boundingInfo.radius*(0,l.hG)(this.shaderTransformation)),this._boundingSphere):s.N}get material(){return this.geometry.material}get type(){return this.geometry.type}get shaderTransformation(){return this._shaderTransformation??this.transformation}get attributes(){return this.geometry.attributes}get highlight(){return this.geometry.highlights}foreachHighlightOptions(e){this.geometry.foreachHighlightOptions(e)}get hasHighlights(){return this.geometry.hasHighlights}get occludees(){return this.geometry.occludees}get visible(){return this.geometry.visible}set visible(e){this.geometry.visible=e}}},10980:(e,t,r)=>{var i;r.d(t,{U:()=>i}),function(e){e[e.Immediate=0]="Immediate",e[e.FadeWithWeather=1]="FadeWithWeather"}(i||(i={}))},12188:(e,t,r)=>{r.d(t,{Lg:()=>C,Tv:()=>x,eO:()=>y,w9:()=>i});var i,o,a=r(24646),n=r(90772),s=r(44106),l=r(73803),c=r(96013),h=r(96236),d=r(10894),u=r(12796),g=r(94982),p=r(21152),v=r(42403),f=r(16878),m=r(67058),_=r(826);function x(e,t){const{vertex:r,fragment:i}=e;r.uniforms.add(new p.V("overlayTexOffset",((e,t)=>function(e,t){const r=t.overlay?.overlays[s.vr.INNER]?.extent;(0,n.pT)(r)&&(b[0]=e.toMapSpace[0]/(0,n.VL)(r)-r[0]/(0,n.VL)(r),b[1]=e.toMapSpace[1]/(0,n.uJ)(r)-r[1]/(0,n.uJ)(r));const i=t.overlay?.overlays[s.vr.OUTER]?.extent;return(0,n.pT)(i)&&(b[2]=e.toMapSpace[0]/(0,n.VL)(i)-i[0]/(0,n.VL)(i),b[3]=e.toMapSpace[1]/(0,n.uJ)(i)-i[1]/(0,n.uJ)(i)),b}(e,t))),new p.V("overlayTexScale",((e,t)=>function(e,t){const r=t.overlay?.overlays[s.vr.INNER]?.extent;(0,n.pT)(r)&&(b[0]=e.toMapSpace[2]/(0,n.VL)(r),b[1]=e.toMapSpace[3]/(0,n.uJ)(r));const i=t.overlay?.overlays[s.vr.OUTER]?.extent;return(0,n.pT)(i)&&(b[2]=e.toMapSpace[2]/(0,n.VL)(i),b[3]=e.toMapSpace[3]/(0,n.uJ)(i)),b}(e,t)))),i.constants.add("overlayOpacity","float",1),i.uniforms.add(new m.N("ovColorTex",((e,t)=>C(e,t)))),w(e,t)}function y(e,t){const{vertex:r,fragment:i}=e;r.uniforms.add(new T("overlayTexOffset"),new T("overlayTexScale")),i.uniforms.add(new v.m("overlayOpacity",(e=>e.overlayOpacity)),new m.N("ovColorTex",((e,t)=>t.overlay?.getTexture(e.overlayContent)))),w(e,t)}function w(e,t){const r=t.pbrMode===u.A9.Water||t.pbrMode===u.A9.WaterOnIntegratedMesh||t.pbrMode===u.A9.TerrainWithWater;r&&e.include(g.E,t);const{vertex:i,fragment:o}=e;e.varyings.add("vtcOverlay","vec4"),i.code.add(f.H`void setOverlayVTC(in vec2 uv) {
vtcOverlay = vec4(uv, uv) * overlayTexScale + overlayTexOffset;
}`),o.code.add(f.H`bool isValid(vec2 uv, vec2 dxdy) {
return (uv.x >= 0.0 + dxdy.x) && (uv.x <= 1.0 - dxdy.x) && (uv.y >= 0.0 + dxdy.y) && (uv.y <= 1.0 - dxdy.y);
}
vec4 getOverlayColor(sampler2D ov0Tex, vec4 texCoords) {
vec4 color0 = texture(ov0Tex, vec2(texCoords.x * 0.5, texCoords.y));
vec4 color1 = texture(ov0Tex, vec2(texCoords.z * 0.5 + 0.5, texCoords.w));
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`),o.code.add(f.H`vec4 getCombinedOverlayColor() {
return overlayOpacity * getOverlayColor(ovColorTex, vtcOverlay);
}`),o.code.add(f.H`vec4 getOverlayColorTexel() {
vec4 texCoords = vtcOverlay;
vec2 texDim =  vec2(textureSize(ovColorTex, 0));
vec4 color0 = texelFetch(ovColorTex, ivec2(vec2(texCoords.x * 0.5, texCoords.y) * texDim), 0);
vec4 color1 = texelFetch(ovColorTex, ivec2(vec2(texCoords.z * 0.5 + 0.5, texCoords.w) * texDim), 0);
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`),o.code.add(f.H`vec2 getAllOverlayHighlightValuesEncoded() {
vec4 texCoords = vtcOverlay;
vec2 uvInner = texCoords.xy;
vec2 uvOuter = texCoords.zw;
bool isValidInner = isValid(uvInner, fwidth(uvInner));
bool isValidOuter = isValid(uvOuter, vec2(0.0, 0.0));
vec2 texelCoordInner = uvInner * vec2(0.5, 1.0);
vec2 texelCoordOuter = uvOuter * vec2(0.5, 1.0) + vec2(0.5,0.0);
vec2 texDim =  vec2(textureSize(ovColorTex, 0));
vec2 texelValueInner = texelFetch(ovColorTex, ivec2(texelCoordInner * texDim), 0).rg;
vec2 texelValueOuter = texelFetch(ovColorTex, ivec2(texelCoordOuter * texDim), 0).rg;
return
isValidInner ? texelValueInner :
isValidOuter ? texelValueOuter :
vec2(0.0);
}`),r&&((0,d.Gc)(o),(0,d.O4)(o),o.code.add(f.H`vec4 getOverlayWaterColor(vec4 maskInput, vec4 colorInput, vec3 vposEyeDir,
float shadow, vec3 localUp, mat3 tbn, vec3 position, vec3 positionWorld) {
vec3 n = normalize(tbn *  (2.0 * maskInput.rgb - vec3(1.0)));
vec3 v = vposEyeDir;
vec3 final = getSeaColor(n, v, mainLightDirection, colorInput.rgb, mainLightIntensity, localUp, 1.0 - shadow, maskInput.w, position, positionWorld);
return vec4(final, colorInput.w);
}`))}function C(e,t){return e.identifier===c.z.Material&&(0,h.RN)(e.output)?t.overlay?.getTexture(l.A.ColorNoRasterImage):e.identifier===c.z.Material&&e.output===h.V.ObjectAndLayerIdColor?t.overlay?.getTexture(l.A.ObjectAndLayerIdColor):e.identifier===c.z.Highlight?t.overlay?.getTexture(l.A.Highlight):null}(o=i||(i={}))[o.Disabled=0]="Disabled",o[o.Enabled=1]="Enabled",o[o.EnabledWithWater=2]="EnabledWithWater",o[o.COUNT=3]="COUNT";const b=(0,a.vt)();class T extends _.n{constructor(e){super(e,"vec4")}}},12336:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var i,o=r(93800),a=r(19455),n=r(48602),s=(r(21265),r(50925),r(14746),r(47332)),l=r(75269);let c=i=class extends a.A{constructor(e){super(e),this.type="cloudy",this.cloudCover=.5}clone(){return new i({cloudCover:this.cloudCover})}};(0,o._)([(0,s.e)({cloudy:"cloudy"}),(0,n.MZ)({json:{write:{isRequired:!0}}})],c.prototype,"type",void 0),(0,o._)([(0,n.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],c.prototype,"cloudCover",void 0),c=i=(0,o._)([(0,l.$)("esri.views.3d.environment.CloudyWeather")],c);const h=c},17992:(e,t,r)=>{r.d(t,{f4:()=>V,VO:()=>U,Q_:()=>W});var i=r(93800),o=(r(21265),r(17741)),a=r(79953),n=r(48602),s=(r(50925),r(14746),r(75269)),l=r(32006),c=r(24646),h=r(3115),d=r(15500),u=r(62650),g=r(93003),p=r(16434),v=r(62214),f=r(12723);class m extends p.w{constructor(e,t){super(e,t,new g.$(v.H,(()=>r.e(68390).then(r.bind(r,68390)))))}initializePipeline(){return(0,f.Ey)({blending:f.Ky,colorWrite:f.kn})}}var _=r(37958);class x extends p.w{constructor(e,t){super(e,t,new g.$(_.a,(()=>r.e(18790).then(r.bind(r,18790)))))}initializePipeline(){return(0,f.Ey)({colorWrite:f.kn})}}var y=r(50330),w=r(20783);class C extends w.Y{constructor(){super(...arguments),this.occludedFactor=y.cD,this.verticalCellCount=0,this.horizontalCellCount=0,this.highlightLevel=0,this.pixelRatio=1}}var b=r(88107);class T extends p.w{constructor(e,t){super(e,t,new g.$(b.H,(()=>r.e(25643).then(r.bind(r,25643)))))}initializePipeline(){return(0,f.Ey)({colorWrite:f.kn})}}var S=r(75218);class O extends p.w{constructor(e,t){super(e,t,new g.$(S.S,(()=>r.e(7026).then(r.bind(r,7026)))))}initializePipeline(){return(0,f.Ey)({blending:f.Ky,colorWrite:f.kn})}}var R=r(73983);class D extends p.w{constructor(e,t){super(e,t,new g.$(R.a,(()=>r.e(59551).then(r.bind(r,59551)))))}initializePipeline(){return(0,f.Ey)({colorWrite:f.kn})}}var M=r(71723),I=r(69586),P=r(34289),A=r(9369),F=r(80861),E=r(92156),H=r(64177),N=r(77936);let V=class extends u.default{constructor(){super(...arguments),this.produces=h.InternalRenderCategory.HIGHLIGHTS,this.consumes={required:[h.InternalRenderCategory.HIGHLIGHTS,"highlights"]},this._useMultipleHighlights=!1,this._downsampleDrawParameters=new _.H,this._passParameters=new C,this._singleHighlightBlurDrawParameters=new R.S,this._grid=new L}initialize(){this.addHandles([(0,a.watch)((()=>this._updateOptionsTexture()),(()=>{}),a.initial)])}destroy(){this._grid.coverage=(0,o.Gz)(this._grid.coverage),this._grid.vao=(0,o.WD)(this._grid.vao),this._passParameters.highlightOptionsTexture=(0,o.Gz)(this._passParameters.highlightOptionsTexture)}_updateOptionsTexture(){if(null==this._passParameters.highlightOptionsTexture){const e=new N.R(16,2);e.internalFormat=E.Ab.RGBA,e.samplingMode=E.Cj.NEAREST,this._passParameters.highlightOptionsTexture=new H.g(this.renderingContext,e,null)}this._passParameters.highlightOptionsTexture.setData(function(e){const t=new Uint8Array(128);let r=0;for(const i of e){const e=4*r,o=4*r+64;++r;const{color:a}=i,n=i.haloColor??a;t[e+0]=a.r,t[e+1]=a.g,t[e+2]=a.b,t[e+3]=i.fillOpacity*a.a*255,t[o+0]=n.r,t[o+1]=n.g,t[o+2]=n.b,t[o+3]=i.haloOpacity*n.a*255}return t}(this.view.state.highlights)),this.requestRender(M.C7.UPDATE)}precompile(){this.techniques.precompile(x),this._useMultipleHighlights?this.techniques.precompile(m):(this.techniques.precompile(T),this.techniques.precompile(D),this.techniques.precompile(O))}render(e){const t=e.find((e=>{let{name:t}=e;return t===h.InternalRenderCategory.HIGHLIGHTS})),{techniques:r,bindParameters:i,_passParameters:o,renderingContext:a}=this;if(!i.decorations)return t;const n=r.get(x);if(!n.compiled)return this.requestRender(M.C7.UPDATE),t;const s=e.find((e=>{let{name:t}=e;return"highlights"===t})).getTexture(),l=()=>{this._gridUpdateResources(s);const e=this._gridComputeCoverage(n,s,i),{horizontalCellCount:t,verticalCellCount:r}=e;return o.horizontalCellCount=t,o.verticalCellCount=r,o.coverageTexture=e.coverage?.getTexture(),e},c=e=>{const t=e.verticalCellCount*e.horizontalCellCount;a.bindVAO(e.vao),a.drawElementsInstanced(E.WR.TRIANGLES,6,E.pe.UNSIGNED_BYTE,0,t)},{camera:d}=i,u=()=>{a.bindFramebuffer(t.fbo),a.setViewport4fv(d.fullViewport)};return this._useMultipleHighlights?this._renderMultiple(s,l,c,u):this._renderSingle(s,l,c,u),o.highlightTexture=null,o.coverageTexture=null,t}_renderMultiple(e,t,r,i){const{techniques:o,bindParameters:a,_passParameters:n,renderingContext:s}=this,l=o.get(m);if(!l.compiled)return void this.requestRender(M.C7.UPDATE);const c=t();n.highlightTexture=e,n.pixelRatio=a.camera.pixelRatio,s.bindTechnique(l,a,n),i(),r(c)}_renderSingle(e,t,r,i){const{fboCache:o,techniques:a,bindParameters:n,_passParameters:s,renderingContext:c}=this,h=a.get(T),u=a.get(D),g=a.get(O);if(!g.compiled||!u.compiled||!h.compiled)return void this.requestRender(M.C7.UPDATE);const p=t(),{width:v,height:f}=e.descriptor;s.highlightTexture=e;const{camera:m}=n,{fullWidth:_,fullHeight:x,pixelRatio:y}=m,w=Math.ceil(_/y),C=Math.ceil(x/y),{_singleHighlightBlurDrawParameters:b}=this,S=this.view._stage.renderView.renderer,{highlights:R}=n;for(let T=0;T<R.length;++T){const{name:e}=R[T];if(!S.hasHighlightOptions(e))continue;s.highlightLevel=T,c.setClearColor(0,0,0,0);const t=o.acquire(v,f,"single highlight",d.N.RG);c.bindFramebuffer(t.fbo),c.setViewport(0,0,v,f),c.clear(E.NV.COLOR),c.bindTechnique(h,n,s),r(p),b.blurInput=t.getTexture(),(0,l.hZ)(b.blurSize,1/w,0);const a=o.acquire(w,C,"single highlight blur h",d.N.RG);c.unbindTexture(a.fbo?.colorTexture),c.bindFramebuffer(a.fbo),c.setViewport(0,0,w,C),c.clear(E.NV.COLOR),c.bindTechnique(u,n,s,b),r(p),t.release(),(0,l.hZ)(b.blurSize,0,1/C),s.singleHighlightBlurTexture=a.getTexture(),i(),c.bindTechnique(g,n,s,b),r(p),a.release()}}_gridUpdateResources(e){const t=this._grid,{width:r,height:i}=e.descriptor;if(t.horizontalCellCount=Math.ceil(r/_.g),t.verticalCellCount=Math.ceil(i/_.g),t.vao)return;const o=this.renderingContext,a=F.g.createIndex(o,E._U.STATIC_DRAW,j);t.vao=new A.Z(o,I.D,new Map([["geometry",P.wR]]),new Map([["geometry",F.g.createVertex(o,E._U.STATIC_DRAW)]]),a)}_gridComputeCoverage(e,t,r){const i=this.renderingContext,o=this._grid,a=t.descriptor,n=Math.ceil(a.width/_.g),s=Math.ceil(a.height/_.g);this._downsampleDrawParameters.input=t,o.coverage?.release();const l=this.fboCache.acquire(n,s,"highlight coverage",d.N.RG);return o.coverage=l,i.bindFramebuffer(l.fbo),i.bindTechnique(e,r,this._passParameters,this._downsampleDrawParameters),i.setViewport(0,0,n,s),i.screen.draw(),o}get test(){}};(0,i._)([(0,n.MZ)()],V.prototype,"produces",void 0),(0,i._)([(0,n.MZ)()],V.prototype,"consumes",void 0),V=(0,i._)([(0,s.$)("esri.views.3d.webgl-engine.effects.highlight.Highlight")],V);class L{constructor(){this.coverage=null,this.vao=null,this.verticalCellCount=0,this.horizontalCellCount=0,this.viewportWidth=0,this.viewportHeight=0}}let z=0;function W(e){let t=0;for(const i of e){const{name:e}=i;t+=e.length;const{color:r,fillOpacity:o,haloColor:a,haloOpacity:n}=i;t+=r.r+r.g+r.b+r.a+o,t+=a?a.r+a.g+a.b+a.a+n:0}const r=e.at(0);if(r){const{shadowOpacity:e,shadowDifference:i,shadowColor:o}=r;t+=e+i+o.r+o.g+o.b+o.a}return z+++(t>=0?0:1)}const j=new Uint8Array([0,1,2,2,1,3]);function U(e,t,r,i,o){let a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;const n=i.highlights,s=n.length>1?t.acquire(r.width,r.height,"highlight mix",d.N.RG):null;if(s){const t=e.getBoundFramebufferObject();e.bindFramebuffer(s.fbo),e.clearFramebuffer(c.uY),e.bindFramebuffer(t)}const h=s?.getTexture();i.highlightMixTexture=h,(0,l.hZ)(i.highlightMixOrigin,a,0),n.forEach(((t,n)=>{n>0&&(e.bindTexture(h,H.g.TEXTURE_UNIT_FOR_UPDATES),e.gl.copyTexSubImage2D(E.Ap.TEXTURE_2D,0,0,0,a,0,r.width,r.height),e.bindTexture(null,H.g.TEXTURE_UNIT_FOR_UPDATES)),e.clear(E.NV.DEPTH),i.highlightLevel=n,o()})),i.highlightLevel=null,i.highlightMixTexture=null,s?.release()}},20907:(e,t,r)=>{r.d(t,{v:()=>s});var i=r(50925),o=r(17741),a=r(57942),n=r(89893);class s{constructor(e,t,r,i){this._textures=e,this._techniques=t,this.materialChanged=r,this.requestRender=i,this._id2glMaterialRef=new a.O}dispose(){this._textures.destroy()}acquire(e,t,r){this._ownMaterial(e);const i=e.produces.get(t);if(!i?.(r))return null;let o=this._id2glMaterialRef.get(r,e.id);if(null==o){const t=e.createGLMaterial({material:e,techniques:this._techniques,textures:this._textures,output:r});o=new l(t),this._id2glMaterialRef.set(r,e.id,o)}return o.ref(),o.glMaterial}release(e,t){const r=this._id2glMaterialRef.get(t,e.id);null!=r&&(r.unref(),r.referenced||((0,o.WD)(r.glMaterial),this._id2glMaterialRef.delete(t,e.id)))}_ownMaterial(e){e.repository&&e.repository!==this&&i.A.getLogger("esri.views.3d.webgl-engine.lib.GLMaterialRepository").error("Material is already owned by a different material repository"),e.repository=this}}class l{constructor(e){this.glMaterial=e,this._refCnt=0}ref(){++this._refCnt}unref(){--this._refCnt,(0,n.vA)(this._refCnt>=0)}get referenced(){return this._refCnt>0}}},21465:(e,t,r)=>{r.d(t,{$I:()=>m,AU:()=>p,Cr:()=>d,g7:()=>f,i4:()=>h,ui:()=>u,up:()=>x,vt:()=>c,yo:()=>v});var i=r(64682),o=r(87752),a=r(21369),n=r(66509),s=r(89227),l=r(28473);function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x;return[e[0],e[1],e[2],e[3]]}function h(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c();return(0,s.c)(r,e),r[3]=t,r}function d(e,t,r){return(0,s.e)(r,e,t),(0,s.n)(r,r),r[3]=-(0,s.r)(e,t),r}function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c();const r=(0,o.l)(y,e);return _(t,(0,i.KJ)((0,a.Xd)(t,r))),t}function g(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c();return(0,a.x8)(y,e,m(e)),(0,a.x8)(w,t,m(t)),(0,a.lw)(y,w,y),_(r,(0,i.KJ)((0,a.Xd)(r,y)))}function p(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:c();return h(l.Cw,e,C),h(l.JP,t,b),h(l.Cb,r,T),g(C,b,C),g(C,T,i),i}function v(e){return e}function f(e){return e[3]}function m(e){return(0,i.kU)(e[3])}function _(e,t){return e[3]=t,e}const x=[0,0,1,0],y=(0,n.vt)(),w=(0,n.vt)(),C=(c(),c()),b=c(),T=c()},29025:(e,t,r)=>{r.d(t,{AZ:()=>c,Vr:()=>h,gE:()=>l});var i=r(26988),o=r(83607),a=r(96236),n=r(97626),s=r(60984);class l{constructor(e,t){this.rctx=e,this.lastFrameCamera=new o.default,this.output=a.V.Color,this.renderOccludedMask=h,this.bind=new n.k(t),this.bind.alignPixelEnabled=!0}}class c extends l{constructor(e,t,r){super(e,t),this.techniques=r,this.time=(0,i.l5)(0)}}const h=s.m$.Occlude|s.m$.OccludeAndTransparent|s.m$.OccludeAndTransparentStencil},34214:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var i,o=r(93800),a=r(19455),n=r(48602),s=(r(21265),r(50925),r(14746),r(47332)),l=r(75269);let c=i=class extends a.A{constructor(e){super(e),this.type="rainy",this.cloudCover=.5,this.precipitation=.5}clone(){return new i({cloudCover:this.cloudCover,precipitation:this.precipitation})}};(0,o._)([(0,s.e)({rainy:"rainy"}),(0,n.MZ)({json:{write:{isRequired:!0}}})],c.prototype,"type",void 0),(0,o._)([(0,n.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],c.prototype,"cloudCover",void 0),(0,o._)([(0,n.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],c.prototype,"precipitation",void 0),c=i=(0,o._)([(0,l.$)("esri.views.3d.environment.RainyWeather")],c);const h=c},34289:(e,t,r)=>{r.d(t,{SL:()=>s,lK:()=>l,u7:()=>c,wR:()=>n});var i=r(22131),o=r(92156),a=r(605);const n=[],s=[new a._(i.r.POSITION,3,o.pe.FLOAT,0,12)],l=[new a._(i.r.POSITION,2,o.pe.FLOAT,0,8)],c=[new a._(i.r.POSITION,2,o.pe.FLOAT,0,16),new a._(i.r.UV0,2,o.pe.FLOAT,8,16)]},37004:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var i,o=r(93800),a=r(19455),n=r(48602),s=(r(21265),r(50925),r(14746),r(47332)),l=r(75269);let c=i=class extends a.A{constructor(e){super(e),this.type="snowy",this.cloudCover=.5,this.precipitation=.5,this.snowCover="disabled"}clone(){return new i({cloudCover:this.cloudCover,precipitation:this.precipitation,snowCover:this.snowCover})}};(0,o._)([(0,s.e)({snowy:"snowy"}),(0,n.MZ)({json:{write:{isRequired:!0}}})],c.prototype,"type",void 0),(0,o._)([(0,n.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],c.prototype,"cloudCover",void 0),(0,o._)([(0,n.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],c.prototype,"precipitation",void 0),(0,o._)([(0,n.MZ)({type:["enabled","disabled"],nonNullable:!0,json:{write:!0}})],c.prototype,"snowCover",void 0),c=i=(0,o._)([(0,l.$)("esri.views.3d.environment.SnowyWeather")],c);const h=c},37958:(e,t,r)=>{r.d(t,{H:()=>l,a:()=>g,b:()=>u,c:()=>c,g:()=>h,o:()=>d});var i=r(37379),o=r(16878),a=r(81775),n=r(20783),s=r(8118);class l extends n.Y{}function c(){const e=new s.N5,{outputs:t,fragment:r}=e;return e.include(i.c),r.uniforms.add(new a.o("textureInput",(e=>e.input))),r.constants.add("outlineWidth","int",Math.ceil(d)),r.constants.add("cellSize","int",h),t.add("fragGrid","vec2"),r.main.add(o.H`ivec2 inputTextureSize = textureSize(textureInput, 0);
ivec2 cellBottomLeftCornerInput = ivec2(floor(gl_FragCoord.xy) * vec2(cellSize));
ivec2 coordMid =  cellBottomLeftCornerInput + ivec2(cellSize >> 1);
uvec2 centreTexel = uvec2( texelFetch(textureInput, coordMid, 0).rg * 255.0) & uvec2(0x55u);
float marginSquare = float(outlineWidth*outlineWidth);
uvec2 outputValue = centreTexel & uvec2(0x55u);
for(int y = -outlineWidth; y <= cellSize + outlineWidth; y+=2) {
int dy = y < 0 ? -y : y > cellSize ? y-cellSize : 0;
int xMargin = dy > 0 ? int(ceil(sqrt(marginSquare - float(dy*dy)))) : outlineWidth;
for(int x = -xMargin; x <= cellSize + xMargin; x+=2) {
ivec2 coord = cellBottomLeftCornerInput + ivec2(x, y);
uvec2[4] texels = uvec2[4] (
uvec2(texelFetch(textureInput,coord+ivec2(0,0),0).rg * 255.0) & uvec2(0x55u),
uvec2(texelFetch(textureInput,coord+ivec2(1,0),0).rg * 255.0) & uvec2(0x55u),
uvec2(texelFetch(textureInput,coord+ivec2(0,1),0).rg * 255.0) & uvec2(0x55u),
uvec2(texelFetch(textureInput,coord+ivec2(1,1),0).rg * 255.0) & uvec2(0x55u)
);
if (texels[0] == texels[1] && texels[1] == texels[2] && texels[2] == texels[3] && texels[3] ==  centreTexel) {
continue;
}
for (int i=0; i<4; ++i){
outputValue |= ((texels[i] ^ centreTexel) << 1);
outputValue |= texels[i];
}
}
}
fragGrid = vec2(outputValue) / 255.0;`),e}const h=32,d=9,u=.4,g=Object.freeze(Object.defineProperty({__proto__:null,HighlightDownsampleDrawParameters:l,blurSize:u,build:c,gridCellPixelSize:h,outlineSize:d},Symbol.toStringTag,{value:"Module"}))},39540:(e,t,r)=>{r.d(t,{v:()=>a,z:()=>o});var i=r(16878);function o(e){e.fragment.code.add(i.H`float normals2FoamIntensity(vec3 n, float waveStrength){
float normalizationFactor =  max(0.015, waveStrength);
return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
}`)}function a(e){e.fragment.code.add(i.H`vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
}`)}},39584:(e,t,r)=>{r.d(t,{TJ:()=>h,eM:()=>l,k9:()=>u,l2:()=>c,zF:()=>d});var i=r(12336),o=r(45078),a=r(34214),n=r(37004),s=r(87588);const l={key:"type",base:s.default,typeMap:{sunny:s.default,cloudy:i.default,rainy:a.default,snowy:n.default,foggy:o.default}},c=Object.keys(l.typeMap);function h(e,t){return!!c.includes(e)||(t.error(`"${e}" is not a valid weather type`),!1)}const d=1e4,u=1e5},44106:(e,t,r)=>{var i,o,a;r.d(t,{JG:()=>o,ZY:()=>a,vr:()=>i}),function(e){e[e.INNER=0]="INNER",e[e.OUTER=1]="OUTER"}(i||(i={})),function(e){e[e.REGULAR=0]="REGULAR",e[e.HAS_NORTH_POLE=1]="HAS_NORTH_POLE",e[e.HAS_SOUTH_POLE=2]="HAS_SOUTH_POLE",e[e.HAS_BOTH_POLES=3]="HAS_BOTH_POLES"}(o||(o={})),function(e){e[e.FADING=0]="FADING",e[e.IMMEDIATE=1]="IMMEDIATE",e[e.UNFADED=2]="UNFADED"}(a||(a={}))},45078:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var i,o=r(93800),a=r(19455),n=r(48602),s=(r(21265),r(50925),r(14746),r(47332)),l=r(75269);let c=i=class extends a.A{constructor(e){super(e),this.type="foggy",this.fogStrength=.5}clone(){return new i({fogStrength:this.fogStrength})}};(0,o._)([(0,s.e)({foggy:"foggy"}),(0,n.MZ)({json:{write:{isRequired:!0}}})],c.prototype,"type",void 0),(0,o._)([(0,n.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],c.prototype,"fogStrength",void 0),c=i=(0,o._)([(0,l.$)("esri.views.3d.environment.FoggyWeather")],c);const h=c},45917:(e,t,r)=>{r.d(t,{p:()=>I,z:()=>C});var i=r(21265),o=r(64682),a=r(17741),n=r(13473),s=r(87752),l=r(10382),c=r(32006),h=r(98080),d=r(89227),u=r(28473),g=r(60548),p=r(24646),v=r(51064),f=r(15500),m=r(93800),_=r(48602),x=(r(50925),r(14746),r(75269)),y=r(83607);let w=class extends y.default{constructor(){super(...arguments),this._projectionMatrix=(0,l.vt)()}get projectionMatrix(){return this._projectionMatrix}};(0,m._)([(0,_.MZ)()],w.prototype,"_projectionMatrix",void 0),(0,m._)([(0,_.MZ)({readOnly:!0})],w.prototype,"projectionMatrix",null),w=(0,m._)([(0,x.$)("esri.views.3d.webgl-engine.lib.CascadeCamera")],w);var C,b,T=r(85293),S=r(89893),O=r(92156),R=r(64177);(b=C||(C={}))[b.Highlight=0]="Highlight",b[b.ExcludeHighlight=1]="ExcludeHighlight";class D{constructor(){this.camera=new w,this.lightMat=(0,l.vt)()}}class M{constructor(){this.maxNumCascadesHighQuality=4,this.maxNumCascadesLowQuality=4,this.textureSizeModHighQuality=1.3,this.textureSizeModLowQuality=.9,this.splitSchemeLambda=0}}class I{constructor(e,t){this._fbos=e,this._viewingMode=t,this._enabled=!1,this._snapshots=new Array,this._textureHeight=0,this._numCascades=1,this.settings=new M,this._projectionView=(0,l.vt)(),this._projectionViewInverse=(0,l.vt)(),this._modelViewLight=(0,l.vt)(),this._cascadeDistances=[0,0,0,0,0],this._usedCascadeDistances=(0,p.vt)(),this._cascades=[new D,new D,new D,new D],this._lastOrigin=null,this._maxTextureWidth=Math.min((0,i.A)("esri-mobile")?4096:16384,e.rctx.parameters.maxTextureSize)}dispose(){this.enabled=!1,this.disposeOffscreenBuffers()}get depthTexture(){return this._handle?.getTexture()}get _textureWidth(){return this._textureHeight*this._numCascades}get numCascades(){return this._numCascades}get cascadeDistances(){return(0,g.s)(this._usedCascadeDistances,this._cascadeDistances[0],this._numCascades>1?this._cascadeDistances[1]:1/0,this._numCascades>2?this._cascadeDistances[2]:1/0,this._numCascades>3?this._cascadeDistances[3]:1/0)}disposeOffscreenBuffers(){this._handle=(0,a.Gz)(this._handle),this._discardSnapshots()}set maxCascades(e){this.settings.maxNumCascadesHighQuality=(0,o.qE)(Math.floor(e),1,4)}get maxCascades(){return this.settings.maxNumCascadesHighQuality}set enabled(e){this._enabled=e,e||this.disposeOffscreenBuffers()}get enabled(){return this._enabled}get ready(){return this._enabled&&null!=this.depthTexture}get cascades(){for(let e=0;e<this._numCascades;++e)W[e]=this._cascades[e];return W.length=this._numCascades,W}start(e,t,r,i,o){(0,S.vA)(this.enabled);const{near:a,far:n}=function(e){let{near:t,far:r}=e;return t<2&&(t=2),r<2&&(r=2),t>=r&&(t=2,r=4),{near:t,far:r}}(r);this._computeCascadeDistances(a,n,i),this._textureHeight=this._computeTextureHeight(e,o,i),this._setupMatrices(e,t);const{viewMatrix:s,projectionMatrix:l}=e;for(let c=0;c<this._numCascades;++c)this._constructCascade(c,l,s,t);this._lastOrigin=null,this.clear()}finish(){(0,S.vA)(this.enabled),this._handle?.detachDepth()}getShadowMapMatrices(e){if(!this._lastOrigin||!(0,d.p)(e,this._lastOrigin)){this._lastOrigin=this._lastOrigin||(0,u.vt)(),(0,d.c)(this._lastOrigin,e);for(let t=0;t<this._numCascades;++t){(0,s.Tl)(j,this._cascades[t].lightMat,e);for(let e=0;e<16;++e)U[16*t+e]=j[e]}}return U}moveSnapshot(e){(0,S.vA)(this.enabled),this._handle?.detachDepth(),this._snapshots[e]?.release(),this._snapshots[e]=this._handle,this._handle=null,this.clear()}copySnapshot(e){const t=this._handle?.getTexture()?.descriptor;if(!this.enabled||!t)return;this._snapshots[e]?.release();const{width:r,height:i}=t,o=e===C.Highlight?"shadow highlight snapshot":"shadow no highlight snapshot";this._snapshots[e]=this._fbos.acquire(r,i,o,f.N.RGBA4);const a=this._fbos.rctx;this._bindFbo();const n=a.bindTexture(this._snapshots[e]?.getTexture(),R.g.TEXTURE_UNIT_FOR_UPDATES);a.gl.copyTexSubImage2D(O.Ap.TEXTURE_2D,0,0,0,0,0,r,i),a.bindTexture(n,R.g.TEXTURE_UNIT_FOR_UPDATES)}getSnapshot(e){return this.enabled?this._snapshots[e]?.getTexture():null}clear(){const e=this._fbos.rctx;this._ensureFbo(),this._bindFbo(),e.setClearColor(1,1,1,1),e.clear(O.NV.COLOR|O.NV.DEPTH)}_computeTextureHeight(e,t,r){const i=Math.min(window.devicePixelRatio,t)/e.pixelRatio,o=r?this.settings.textureSizeModHighQuality:this.settings.textureSizeModLowQuality,a=(0,T.Mv)(Math.floor(Math.max(e.fullWidth,e.fullHeight)*i*o)),n=Math.min(this._maxTextureWidth,this._numCascades*a);return(0,T.uT)(n/this._numCascades)}_ensureFbo(){this._handle?.fbo?.width===this._textureWidth&&this._handle?.fbo.height===this._textureHeight||(this._handle?.release(),this._handle=this._fbos.acquire(this._textureWidth,this._textureHeight,"shadow map",f.N.RGBA4)),this._handle?.acquireDepth(f.z.DEPTH16_BUFFER)}_discardSnapshot(e){this._snapshots[e]=(0,a.Gz)(this._snapshots[e])}_discardSnapshots(){for(let e=0;e<this._snapshots.length;++e)this._discardSnapshot(e);this._snapshots.length=0}_bindFbo(){this._fbos.rctx.bindFramebuffer(this._handle?.fbo)}_constructCascade(e,t,r,i){const a=this._cascades[e],n=-this._cascadeDistances[e],l=-this._cascadeDistances[e+1],h=(t[10]*n+t[14])/Math.abs(t[11]*n+t[15]),u=(t[10]*l+t[14])/Math.abs(t[11]*l+t[15]);(0,S.vA)(h<u);for(let o=0;o<8;++o){(0,g.s)(A,o%4==0||o%4==3?-1:1,o%4==0||o%4==1?-1:1,o<4?h:u,1);const e=F[o];(0,g.t)(e,A,this._projectionViewInverse),e[0]/=e[3],e[1]/=e[3],e[2]/=e[3]}(0,d.v)(z,F[0]),a.camera.viewMatrix=(0,s.Tl)(P,this._modelViewLight,z);for(let o=0;o<8;++o)(0,d.t)(F[o],F[o],a.camera.viewMatrix);let p=F[0][2],v=F[0][2];for(let o=1;o<8;++o)p=Math.min(p,F[o][2]),v=Math.max(v,F[o][2]);p-=200,v+=200,a.camera.near=-v,a.camera.far=-p,function(e,t,r,i,a){const n=1/F[0][3],s=1/F[4][3];(0,S.vA)(n<s);let l=n+Math.sqrt(n*s);const h=Math.sin((0,o.XM)(e[2]*t[0]+e[6]*t[1]+e[10]*t[2]));l/=h,function(e,t,r,i,o,a,n,s){(0,c.hZ)(G,0,0);for(let C=0;C<4;++C)(0,c.WQ)(G,G,e[C]);(0,c.hs)(G,G,.25),(0,c.hZ)(k,0,0);for(let C=4;C<8;++C)(0,c.WQ)(k,k,e[C]);(0,c.hs)(k,k,.25),(0,c.Cc)(q[0],e[4],e[5],.5),(0,c.Cc)(q[1],e[5],e[6],.5),(0,c.Cc)(q[2],e[6],e[7],.5),(0,c.Cc)(q[3],e[7],e[4],.5);let l=0,h=(0,c.hG)(q[0],G);for(let C=1;C<4;++C){const e=(0,c.hG)(q[C],G);e<h&&(h=e,l=C)}(0,c.Re)(B,q[l],e[l+4]);const d=B[0];let u,g;B[0]=-B[1],B[1]=d,(0,c.Re)(Z,k,G),(0,c.Om)(Z,B)<0&&(0,c.ze)(B,B),(0,c.Cc)(B,B,Z,r),(0,c.S8)(B,B),u=g=(0,c.Om)((0,c.Re)($,e[0],G),B);for(let C=1;C<8;++C){const t=(0,c.Om)((0,c.Re)($,e[C],G),B);t<u?u=t:t>g&&(g=t)}(0,c.C)(i,G),(0,c.hs)($,B,u-t),(0,c.WQ)(i,i,$);let p=-1,v=1,f=0,m=0;for(let C=0;C<8;++C){(0,c.Re)(Q,e[C],i),(0,c.S8)(Q,Q);const t=B[0]*Q[1]-B[1]*Q[0];t>0?t>p&&(p=t,f=C):t<v&&(v=t,m=C)}(0,S.MX)(p>0,"leftArea"),(0,S.MX)(v<0,"rightArea"),(0,c.hs)(X,B,u),(0,c.WQ)(X,X,G),(0,c.hs)(Y,B,g),(0,c.WQ)(Y,Y,G),K[0]=-B[1],K[1]=B[0];const _=(0,S.L)(i,e[m],Y,(0,c.WQ)($,Y,K),1,o),x=(0,S.L)(i,e[f],Y,$,1,a),y=(0,S.L)(i,e[f],X,(0,c.WQ)($,X,K),1,n),w=(0,S.L)(i,e[m],X,$,1,s);(0,S.MX)(_,"rayRay"),(0,S.MX)(x,"rayRay"),(0,S.MX)(y,"rayRay"),(0,S.MX)(w,"rayRay")}(F,l,h,E,H,N,V,L),function(e,t,r,i,o){(0,c.Re)(re,r,i),(0,c.hs)(re,re,.5),ie[0]=re[0],ie[1]=re[1],ie[2]=0,ie[3]=re[1],ie[4]=-re[0],ie[5]=0,ie[6]=re[0]*re[0]+re[1]*re[1],ie[7]=re[0]*re[1]-re[1]*re[0],ie[8]=1,ie[J(0,2)]=-(0,c.Om)(te(ie,0),e),ie[J(1,2)]=-(0,c.Om)(te(ie,1),e);let a=(0,c.Om)(te(ie,0),r)+ie[J(0,2)],n=(0,c.Om)(te(ie,1),r)+ie[J(1,2)],s=(0,c.Om)(te(ie,0),i)+ie[J(0,2)],l=(0,c.Om)(te(ie,1),i)+ie[J(1,2)];a=-(a+s)/(n+l),ie[J(0,0)]+=ie[J(1,0)]*a,ie[J(0,1)]+=ie[J(1,1)]*a,ie[J(0,2)]+=ie[J(1,2)]*a,a=1/((0,c.Om)(te(ie,0),r)+ie[J(0,2)]),n=1/((0,c.Om)(te(ie,1),r)+ie[J(1,2)]),ie[J(0,0)]*=a,ie[J(0,1)]*=a,ie[J(0,2)]*=a,ie[J(1,0)]*=n,ie[J(1,1)]*=n,ie[J(1,2)]*=n,ie[J(2,0)]=ie[J(1,0)],ie[J(2,1)]=ie[J(1,1)],ie[J(2,2)]=ie[J(1,2)],ie[J(1,2)]+=1,a=(0,c.Om)(te(ie,1),t)+ie[J(1,2)],n=(0,c.Om)(te(ie,2),t)+ie[J(2,2)],s=(0,c.Om)(te(ie,1),r)+ie[J(1,2)],l=(0,c.Om)(te(ie,2),r)+ie[J(2,2)],a=-.5*(a/n+s/l),ie[J(1,0)]+=ie[J(2,0)]*a,ie[J(1,1)]+=ie[J(2,1)]*a,ie[J(1,2)]+=ie[J(2,2)]*a,a=(0,c.Om)(te(ie,1),t)+ie[J(1,2)],n=(0,c.Om)(te(ie,2),t)+ie[J(2,2)],s=-n/a,ie[J(1,0)]*=s,ie[J(1,1)]*=s,ie[J(1,2)]*=s,o[0]=ie[0],o[1]=ie[1],o[2]=0,o[3]=ie[2],o[4]=ie[3],o[5]=ie[4],o[6]=0,o[7]=ie[5],o[8]=0,o[9]=0,o[10]=1,o[11]=0,o[12]=ie[6],o[13]=ie[7],o[14]=0,o[15]=ie[8]}(E,H,V,L,a.projectionMatrix),a.projectionMatrix[10]=2/(r-i),a.projectionMatrix[14]=-(r+i)/(r-i)}(r,i,p,v,a.camera),(0,s.lw)(a.lightMat,a.camera.projectionMatrix,a.camera.viewMatrix);const f=this._textureHeight;a.camera.viewport=[e*f,0,f,f]}_setupMatrices(e,t){(0,s.lw)(this._projectionView,e.projectionMatrix,e.viewMatrix),(0,s.B8)(this._projectionViewInverse,this._projectionView);const r=this._viewingMode===v.RT.Global?e.eye:(0,d.i)(z,0,0,1);(0,s.t5)(this._modelViewLight,[0,0,0],[-t[0],-t[1],-t[2]],r)}_computeCascadeDistances(e,t,r){const i=r?this.settings.maxNumCascadesHighQuality:this.settings.maxNumCascadesLowQuality;this._numCascades=Math.min(1+Math.floor((0,S.kL)(t/e,4)),i);const a=(t-e)/this._numCascades,n=(t/e)**(1/this._numCascades);let s=e,l=e;for(let c=0;c<this._numCascades+1;++c)this._cascadeDistances[c]=(0,o.Cc)(s,l,this.settings.splitSchemeLambda),s*=n,l+=a}get test(){}}const P=(0,l.vt)(),A=(0,p.vt)(),F=[];for(let oe=0;oe<8;++oe)F.push((0,p.vt)());const E=(0,h.vt)(),H=(0,h.vt)(),N=(0,h.vt)(),V=(0,h.vt)(),L=(0,h.vt)(),z=(0,u.vt)(),W=[],j=(0,l.vt)(),U=l.zK.concat(l.zK,l.zK,l.zK,l.zK),G=(0,h.vt)(),k=(0,h.vt)(),q=[(0,h.vt)(),(0,h.vt)(),(0,h.vt)(),(0,h.vt)()],B=(0,h.vt)(),Z=(0,h.vt)(),$=(0,h.vt)(),Q=(0,h.vt)(),X=(0,h.vt)(),Y=(0,h.vt)(),K=(0,h.vt)();function J(e,t){return 3*t+e}const ee=(0,h.vt)();function te(e,t){return(0,c.hZ)(ee,e[t],e[t+3]),ee}const re=(0,h.vt)(),ie=(0,n.vt)()},46027:(e,t,r)=>{r.d(t,{g:()=>m});var i=r(28473),o=r(23311),a=r(92212),n=r(4716),s=r(39584),l=r(10894),c=r(59139),h=r(87824),d=r(4241),u=r(16878),g=r(38950),p=r(73031),v=r(826);class f extends v.n{constructor(e,t){super(e,"samplerCube",p.c.Bind,((r,i)=>r.bindTexture(e,t(i))))}}function m(e){const t=e.fragment;t.constants.add("radiusCloudsSquared","float",_).code.add(u.H`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos) {
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusCloudsSquared;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
return (cameraPosition + dir * pointIntDist) - spherePos;
}`),t.uniforms.add(new d.U("radiusCurvatureCorrection",(e=>{let{clouds:t}=e;return t.parallax.radiusCurvatureCorrection}))).code.add(u.H`vec3 correctForPlanetCurvature(vec3 dir) {
dir.z = dir.z * (1.0 - radiusCurvatureCorrection) + radiusCurvatureCorrection;
return dir;
}`),t.code.add(u.H`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec) {
return (rotMat * vec4(inVec, 0.0)).xyz;
}`),(0,l.Gc)(t),(0,l.O4)(t);const r=(0,i.fA)(.28,.175,.035);t.constants.add("RIM_COLOR","vec3",r);t.code.add(u.H`
    vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds) {
      float upDotLight = dot(cameraPosition, mainLightDirection);
      float dirDotLight = max(dot(worldSpaceRay, mainLightDirection), 0.0);
      float sunsetTransition = clamp(pow(max(upDotLight, 0.0), ${u.H.float(.3)}), 0.0, 1.0);

      // Base color of the clouds that depends on lighting of the sun and sky
      vec3 ambientLight = calculateAmbientIrradiance(cameraPosition,  0.0);
      vec3 combinedLight = clamp((mainLightIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
      vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));

      // Rim light around the edge of the clouds simulating scattering of the direct lun light
      float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
      float rimLightIntensity = 0.5 + 0.5 * pow(max(upDotLight, 0.0), 0.35);
      vec3 directSunScattering = RIM_COLOR * rimLightIntensity * (pow(dirDotLight, ${u.H.float(140)})) * scatteringMod;

      // Brighten the clouds around the sun at the sunsets
      float additionalLight = ${u.H.float(.2)} * pow(dirDotLight, ${u.H.float(10)}) * (1. - pow(sunsetTransition, ${u.H.float(.3)})) ;

      return vec3(baseCloudColor * (1.0 + additionalLight) + directSunScattering);
    }
  `),t.uniforms.add(new c.o("readChannelsRG",(e=>e.clouds.readChannels===a.c.RG)),new f("cubeMap",(e=>e.clouds.data?.cubeMap?.colorTexture??null))).code.add(u.H`vec4 sampleCloud(vec3 rayDir, bool readOtherChannel) {
vec4 s = texture(cubeMap, rayDir);
bool readRG = readChannelsRG ^^ readOtherChannel;
s = readRG ? vec4(vec3(s.r), s.g) : vec4(vec3(s.b), s.a);
return length(s) == 0.0 ? vec4(s.rgb, 1.0) : s;
}`),t.uniforms.add(new h.d("anchorPoint",(e=>e.clouds.parallax.anchorPoint)),new h.d("anchorPointNew",(e=>e.clouds.parallaxNew.anchorPoint)),new g.F("rotationClouds",(e=>e.clouds.parallax.transform)),new g.F("rotationCloudsNew",(e=>e.clouds.parallaxNew.transform)),new d.U("cloudsOpacity",(e=>e.clouds.opacity)),new d.U("fadeFactor",(e=>e.clouds.fadeFactor)),new c.o("crossFade",(e=>e.clouds.fadeState===n.c.CROSS_FADE))).code.add(u.H`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition) {
vec3 intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPoint);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = sampleCloud(worldRayRotatedCorrected, crossFade);
vec3 cameraPositionN = normalize(cameraPosition);
vec4 cloudColor = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
if(crossFade) {
intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPointNew);
worldRayRotated = rotateDirectionToAnchorPoint(rotationCloudsNew, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = sampleCloud(worldRayRotatedCorrected, false);
vec4 cloudColorNew = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorNew, fadeFactor);
}
float totalTransmittance = length(cloudColor.rgb) == 0.0 ?
1.0 :
clamp(cloudColor.a * cloudsOpacity + (1.0 - cloudsOpacity), 0.0 , 1.0);
return vec4(cloudColor.rgb, totalTransmittance);
}`)}const _=(o.$O.radius+s.k9)**2},47998:(e,t,r)=>{r.d(t,{b:()=>o});var i=r(16878);function o(e){e.code.add(i.H`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`)}},49631:(e,t,r)=>{r.d(t,{T:()=>h,a:()=>u,b:()=>d});var i=r(28473),o=r(37379),a=r(57554),n=r(16878),s=r(67058),l=r(20783),c=r(8118);class h extends l.Y{constructor(){super(...arguments),this.color=(0,i.fA)(1,1,1)}}function d(){const e=new c.N5;return e.include(o.c),e.fragment.uniforms.add(new s.N("tex",(e=>e.texture)),new a.t("uColor",(e=>e.color))),e.fragment.main.add(n.H`vec4 texColor = texture(tex, uv);
fragColor = texColor * vec4(uColor, 1.0);`),e}const u=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:h,build:d},Symbol.toStringTag,{value:"Module"}))},57942:(e,t,r)=>{r.d(t,{O:()=>i});class i{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}getInner(e){return this._outer.get(e)}set(e,t,r){const i=this._outer.get(e);i?i.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}forAll(e){for(const t of this._outer.values())for(const r of t.values())e(r)}}},62214:(e,t,r)=>{r.d(t,{H:()=>d,b:()=>h});var i=r(71666),o=r(15),a=r(42403),n=r(16878),s=r(68017),l=r(67058),c=r(8118);function h(){const e=new c.N5;e.include(i.Q);const{fragment:t}=e;return t.uniforms.add(new l.N("highlightTexture",(e=>e.highlightTexture)),new l.N("highlightOptionsTexture",(e=>e.highlightOptionsTexture)),new a.m("pixelRatio",(e=>e.pixelRatio)),new a.m("occludedIntensityFactor",(e=>e.occludedFactor)),new s.W("maxHighlightLevel",(e=>e.highlights.length-1))),t.constants.add("pixelSampleScale","float",1),e.include(o.y),t.code.add(n.H`const float pascal17[9] = float[9](12870.0, 11440.0, 8008.0, 4368.0, 1820.0, 560.0, 120.0, 16.0, 1.0);
const float denom17 =  65536.0;
float colorWeight[16] = float[16](0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
float colorOcclusion[16] = float[16](0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
float weights[16] = float[16](0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
void applyTexel(vec2 texel, float weight) {
if (texel != vec2(0.0)){
int maxChannel = (maxHighlightLevel >> 2) & 1;
for (int channelIndex = 0; channelIndex <= maxChannel; ++channelIndex){
uint channel = readChannel(texel, channelIndex << 2);
int firstIndex = channelIndex << 2;
int maxIndex  = min(firstIndex + 3, maxHighlightLevel);
for (int highlightIndex = firstIndex; highlightIndex <= maxIndex; ++highlightIndex ) {
uint v = readChannelBits(channel, highlightIndex);
if ((v & 1u) == 1u){
colorWeight[highlightIndex] += weight;
if ((v & 2u) == 2u){
colorOcclusion[highlightIndex] += weight;
}
}
}
}
}
}
vec2 readTexel(ivec2 iuv, int du, int dv) {
return texelFetch(highlightTexture, iuv + ivec2(du, dv), 0).rg;
}
void readAndApplyTexel(ivec2 iuv, int du, int dv, float weight) {
vec2 texel = readTexel(iuv, du, dv);
applyTexel(texel, weight);
}
void readAndApply2TexelsU(ivec2 iuv, int du, int dv, float weight) {
readAndApplyTexel(iuv, -du, dv, weight);
readAndApplyTexel(iuv, +du, dv, weight);
}
float getWeight(int pixelDistance) {
float scaledDistance = float(pixelDistance) * pixelSampleScale / pixelRatio;
float d0f = floor(scaledDistance);
int d0 = int(d0f);
if (d0 >= 8){
return 0.0;
}
float w0 = pascal17[d0];
float w1 = pascal17[d0+1];
float f =  scaledDistance - d0f;
return mix(w0, w1, f);
}`),t.main.add(n.H`vec2 highlightTextureSize = vec2(textureSize(highlightTexture,0));
ivec2 iuv = ivec2(sUV * highlightTextureSize);
vec2 centerTexel = texelFetch(highlightTexture, iuv, 0).rg;
bool outlinePossible = false;
if (vOutlinePossible > 0.0){
for (int highlightLevel=0; highlightLevel<= maxHighlightLevel; ++highlightLevel) {
if ((readLevelBits(centerTexel,highlightLevel) & 1u) == 0u) {
outlinePossible = true;
break;
}
}
}
if (outlinePossible) {
int maxPixelDistance = clamp(int(8.0 * pixelRatio / pixelSampleScale), 2, 16);
float weightSum = 0.0;
for(int y = 0; y <= maxPixelDistance; ++y) {
float w = getWeight(y);
weights[y] = w;
weightSum += w * (y == 0 ? 1.0 : 2.0);
}
for(int y = 0; y <= maxPixelDistance; ++y) {
weights[y] = weights[y] / weightSum;
}
float weight0 = weights[0];
applyTexel(centerTexel, weight0 * weight0);
for(int y = 0; y <= maxPixelDistance; y += 1) {
float yFactor = weights[y];
if (y != 0) {
float xFactor = weight0;
float weight = xFactor * yFactor;
if (weight > 0.0) {
readAndApplyTexel(iuv, 0, +y, weight);
readAndApplyTexel(iuv, 0, -y, weight);
}
}
for(int x = 1; x <= maxPixelDistance; x += 1) {
float xFactor = weights[x];
float weight = xFactor * yFactor;
if (weight > 0.0) {
readAndApply2TexelsU(iuv, x, +y, weight);
if (y != 0){
readAndApply2TexelsU(iuv, x, -y, weight);
}
}
}
}
} else {
applyTexel(centerTexel, 1.0);
}
int frontColorIndex = 999;
int maxColorIndex = 0;
for (int i = 0; i <= maxHighlightLevel; ++i) {
if (colorWeight[i] > 0.0){
frontColorIndex = min(frontColorIndex, i);
maxColorIndex = max(maxColorIndex, i);
}
}
if (frontColorIndex == 999){
fragColor = vec4(0.0);
return;
}
vec4 accumulatedColor = vec4(0.0);
for (int curColorIndex = frontColorIndex; curColorIndex <= maxColorIndex; ++curColorIndex) {
float curColorWeight = colorWeight[curColorIndex];
if (curColorWeight <= 0.01){
continue;
}
uint vc = readLevelBits(centerTexel, curColorIndex);
bool centerFilled = (vc & 1u) == 1u;
bool centerOccluded = (vc & 3u) == 3u;
float curColorOcclusion = colorOcclusion[curColorIndex];
bool occluded = centerFilled ? centerOccluded : curColorOcclusion > 0.5 * curColorWeight;
int colorChannel = centerFilled ? 0 : 1;
vec4 colorBase = texelFetch(highlightOptionsTexture, ivec2(curColorIndex, colorChannel), 0);
float occlusionFactor = occluded ? occludedIntensityFactor : 1.0;
float outlineFactor = centerFilled ? 1.0 : smoothstep(0.0, 0.03, curColorWeight);
float intensity = colorBase.a * occlusionFactor * outlineFactor;
vec3 currentColor = colorBase.rgb;
float a0 = accumulatedColor.a;
float a1 = intensity;
float alpha = clamp(a0 + a1 - a0 * a1, 0.0, 1.0);
if (alpha > 0.001){
vec3 blendedColor = ((1.0 - a1) * a0 * accumulatedColor.rgb + a1 * currentColor) / alpha;
accumulatedColor = vec4(blendedColor, alpha);
}
}
fragColor = accumulatedColor;`),e}const d=Object.freeze(Object.defineProperty({__proto__:null,build:h},Symbol.toStringTag,{value:"Module"}))},69473:(e,t,r)=>{var i,o;r.d(t,{k:()=>o,q:()=>i}),function(e){e[e.ADD=0]="ADD",e[e.UPDATE=1]="UPDATE",e[e.REMOVE=2]="REMOVE"}(i||(i={})),function(e){e[e.NONE=0]="NONE",e[e.VISIBILITY=1]="VISIBILITY",e[e.GEOMETRY=2]="GEOMETRY",e[e.TRANSFORMATION=4]="TRANSFORMATION",e[e.HIGHLIGHT=8]="HIGHLIGHT",e[e.OCCLUDEE=16]="OCCLUDEE"}(o||(o={}))},70846:(e,t,r)=>{r.d(t,{O:()=>d,a:()=>g,b:()=>u});var i=r(44106),o=r(37379),a=r(42403),n=r(16878),s=r(7683),l=r(67058),c=r(20783),h=r(8118);class d extends c.Y{constructor(){super(...arguments),this.overlayIndex=i.vr.INNER,this.opacity=1}}function u(){const e=new h.N5;return e.include(o.c),e.fragment.uniforms.add(new l.N("tex",(e=>e.texture))),e.fragment.uniforms.add(new s.c("overlayIdx",(e=>e.overlayIndex))),e.fragment.uniforms.add(new a.m("opacity",(e=>e.opacity))),e.fragment.main.add(n.H`vec2 overlayUV = overlayIdx == 0 ? vec2(uv.x * 0.5, uv.y) : vec2(uv.x * 0.5 + 0.5, uv.y);
fragColor = texture(tex, overlayUV) * opacity;`),e}const g=Object.freeze(Object.defineProperty({__proto__:null,OverlayCompositingPassParameters:d,build:u},Symbol.toStringTag,{value:"Module"}))},71666:(e,t,r)=>{r.d(t,{Q:()=>u});var i=r(32006),o=r(98080),a=r(16878),n=r(73031),s=r(826);class l extends s.n{constructor(e,t){super(e,"ivec2",n.c.Pass,((r,i,o)=>r.setUniform2iv(e,t(i,o))))}}var c=r(7683),h=r(67058),d=r(37958);function u(e){const{vertex:t}=e;t.uniforms.add(new h.N("coverageTexture",(e=>e.coverageTexture)),new l("highlightRenderCellCount",(e=>(0,i.hZ)(g,e.horizontalCellCount,e.verticalCellCount))),new l("highlightTextureResolution",(e=>{let{highlightTexture:t}=e;return(0,i.hZ)(g,t.descriptor.width,t.descriptor.height)})),new c.c("highlightLevel",(e=>e.highlightLevel))).constants.add("cellSize","int",d.g),e.varyings.add("sUV","vec2"),e.varyings.add("vOutlinePossible","float"),t.code.add(a.H`const ivec2 cellVertices[4] = ivec2[4](ivec2(0,0), ivec2(1,0), ivec2(0,1), ivec2(1,1));`).main.add(a.H`int cellIndex = gl_InstanceID;
int cellX = cellIndex % highlightRenderCellCount[0];
int cellY = (cellIndex - cellX) / highlightRenderCellCount[0];
ivec2 cellPos = ivec2(cellX, cellY);
uvec2 covTexel = uvec2(texelFetch(coverageTexture, cellPos, 0).rg * 255.0);
int channelIndex = (highlightLevel >> 2) & 3;
uint channelValue = covTexel[channelIndex];
int highlightIndex = (highlightLevel & 3) << 1;
bool covered = ((channelValue >> highlightIndex) & 1u) == 1u;
if (!covered) {
gl_Position = vec4(0.0);
return;
}
vOutlinePossible = (((channelValue >> highlightIndex) & 2u) == 2u) ? 1.0 : 0.0;
ivec2 iPosInCell = cellVertices[gl_VertexID];
vec2 sPos = vec2(cellPos * cellSize + iPosInCell * (cellSize));
vec2 vPos = sPos / vec2(highlightTextureResolution);
sUV = vPos;
gl_Position = vec4(2.0 * vPos - vec2(1.0), 0.0, 1.0);`)}const g=(0,o.vt)()},73803:(e,t,r)=>{var i;r.d(t,{A:()=>i}),function(e){e[e.Color=0]="Color",e[e.ColorNoRasterImage=1]="ColorNoRasterImage",e[e.Highlight=2]="Highlight",e[e.WaterNormal=3]="WaterNormal",e[e.Occluded=4]="Occluded",e[e.ObjectAndLayerIdColor=5]="ObjectAndLayerIdColor"}(i||(i={}))},73983:(e,t,r)=>{r.d(t,{S:()=>h,a:()=>u,b:()=>d});var i=r(98080),o=r(71666),a=r(93858),n=r(16878),s=r(81775),l=r(20783),c=r(8118);class h extends l.Y{constructor(){super(...arguments),this.blurSize=(0,i.vt)()}}function d(){const e=new c.N5;return e.include(o.Q),e.outputs.add("fragSingleHighlight","vec2",0),e.fragment.uniforms.add(new a.t("blurSize",(e=>e.blurSize)),new s.o("blurInput",(e=>e.blurInput))).main.add(n.H`vec2 highlightTextureSize = vec2(textureSize(blurInput,0));
vec2 center = texture(blurInput, sUV).rg;
if (vOutlinePossible == 0.0) {
fragSingleHighlight = center;
} else {
vec2 sum = center * 0.204164;
sum += texture(blurInput, sUV + blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, sUV - blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, sUV + blurSize * 3.294215).rg * 0.093913;
sum += texture(blurInput, sUV - blurSize * 3.294215).rg * 0.093913;
fragSingleHighlight = sum;
}`),e}const u=Object.freeze(Object.defineProperty({__proto__:null,SingleHighlightBlurDrawParameters:h,build:d},Symbol.toStringTag,{value:"Module"}))},75218:(e,t,r)=>{r.d(t,{S:()=>g,b:()=>u});var i=r(71666),o=r(15),a=r(93858),n=r(42403),s=r(16878),l=r(7683),c=r(67058),h=r(37958),d=r(8118);function u(){const e=new d.N5;e.include(i.Q);const{fragment:t}=e;return t.uniforms.add(new c.N("blurInput",(e=>e.singleHighlightBlurTexture)),new a.t("blurSize",(e=>e.blurSize)),new c.N("highlightTexture",(e=>e.highlightTexture)),new c.N("highlightOptionsTexture",(e=>e.highlightOptionsTexture)),new l.c("highlightLevel",(e=>e.highlightLevel)),new n.m("occludedIntensityFactor",(e=>e.occludedFactor))),t.constants.add("inner","float",1-(h.o-h.b)/h.o),e.include(o.y),t.main.add(s.H`vec2 highlightTextureSize = vec2(textureSize(highlightTexture,0));
vec2 uv = sUV;
vec2 center = texture(blurInput, uv).rg;
vec2 blurredHighlightValue = (vOutlinePossible == 0.0)
? center
: center * 0.204164
+ texture(blurInput, uv + blurSize * 1.407333).rg * 0.304005
+ texture(blurInput, uv - blurSize * 1.407333).rg * 0.304005
+ texture(blurInput, uv + blurSize * 3.294215).rg * 0.093913
+ texture(blurInput, uv - blurSize * 3.294215).rg * 0.093913;
float highlightIntensity = blurredHighlightValue.r;
float occlusionWeight = blurredHighlightValue.g;
if (highlightIntensity <= 0.01) {
discard;
}
vec4 fillColor    = texelFetch(highlightOptionsTexture, ivec2(highlightLevel, 0), 0);
vec4 outlineColor = texelFetch(highlightOptionsTexture, ivec2(highlightLevel, 1), 0);
vec2 centerTexel = texelFetch(highlightTexture, ivec2(uv * highlightTextureSize), 0).rg;
uint centerBits = readLevelBits(centerTexel, highlightLevel);
bool centerFilled = (centerBits & 1u) == 1u;
bool centerOccluded = (centerBits & 3u) == 3u;
bool occluded = centerOccluded || (0.5 * highlightIntensity < occlusionWeight);
float occlusionFactor = occluded ? occludedIntensityFactor : 1.0;
float outlineFactor = centerFilled ? 1.0 : smoothstep(0.0, inner, highlightIntensity);
float fillFactor = centerFilled ? 1.0 : 0.0;
vec4 baseColor = mix(outlineColor, fillColor, fillFactor);
float intensity = baseColor.a * occlusionFactor * outlineFactor;
fragColor = vec4(baseColor.rgb, intensity);`),e}const g=Object.freeze(Object.defineProperty({__proto__:null,build:u},Symbol.toStringTag,{value:"Module"}))},77742:(e,t,r)=>{r.d(t,{C:()=>a});var i=r(8601),o=r(16878);function a(e){e.fragment.code.add(o.H`
    const float GAMMA = ${o.H.float(i.Tf)};
    const float INV_GAMMA = ${o.H.float(1/i.Tf)};

    vec4 delinearizeGamma(vec4 color) {
      return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.a);
    }

    vec3 linearizeGamma(vec3 color) {
      return pow(color, vec3(GAMMA));
    }
  `)}},84654:(e,t,r)=>{r.d(t,{or:()=>ie,bi:()=>ne,O8:()=>se});var i=r(93800),o=r(58448),a=(r(21265),r(45622)),n=r(17741),s=r(15899),l=r(79953),c=r(35920),h=r(48602),d=(r(50925),r(14746),r(75269)),u=r(87752),g=r(89227),p=r(28473),v=r(77297),f=r(4794),m=r(44106),_=r(90772),x=r(43208);class y{constructor(){this._extent=(0,_.vt)(),this.resolution=0,this.renderLocalOrigin=(0,x.f)(0,0,0,"O"),this.pixelRatio=1,this.mapUnitsPerPixel=1,this.canvasGeometries=new w}get extent(){return this._extent}setupGeometryViewsCyclical(e){this.setupGeometryView();const t=.001*e.range;if(this._extent[0]-t<=e.min){const t=this.canvasGeometries.extents[this.canvasGeometries.numViews++];(0,_.cY)(this._extent,e.range,0,t)}if(this._extent[2]+t>=e.max){const t=this.canvasGeometries.extents[this.canvasGeometries.numViews++];(0,_.cY)(this._extent,-e.range,0,t)}}setupGeometryView(){this.canvasGeometries.numViews=1,(0,_.C)(this.canvasGeometries.extents[0],this._extent)}hasSomeSizedView(){for(let e=0;e<this.canvasGeometries.numViews;e++){const t=this.canvasGeometries.extents[e];if(t[0]!==t[2]&&t[1]!==t[3])return!0}return!1}}class w{constructor(){this.extents=[(0,_.vt)(),(0,_.vt)(),(0,_.vt)()],this.numViews=0}}var C=r(73803);class b{constructor(e,t,r){this._fbos=e,this._format=t,this._name=r}get valid(){return null!=this._handle?.getTexture()}dispose(){this._handle=(0,n.Gz)(this._handle)}get texture(){return this._handle?.getTexture()}bind(e,t,r){this._handle&&this._handle.fbo?.width===t&&this._handle.fbo?.height===r||(this._handle?.release(),this._handle=this._fbos.acquire(t,r,this._name,this._format)),e.bindFramebuffer(this._handle?.fbo)}generateMipMap(){this._handle?.getTexture()?.descriptor?.hasMipmap&&this._handle?.getTexture()?.generateMipmap()}}var T=r(15500),S=r(96236),O=r(96122);class R{constructor(e,t,r,i){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:T.N.RGBA_MIPMAP;this.output=r,this.content=i,this.fbo=new b(e,o,t)}get valid(){return this.fbo.valid}}class D{constructor(e){this.targets=[new R(e,"overlay color",S.V.Color,C.A.Color),new R(e,"overlay IM color",S.V.Color,C.A.ColorNoRasterImage),new R(e,"overlay highlight",S.V.Highlight,C.A.Highlight,T.N.RG),new R(e,"overlay water",S.V.Normal,C.A.WaterNormal),new R(e,"overlay occluded",S.V.Color,C.A.Occluded)],(0,O.E)()&&this.targets.push(new R(e,"overlay olid",S.V.ObjectAndLayerIdColor,C.A.ObjectAndLayerIdColor,T.N.RGBA))}getTexture(e){return this.targets[e]?.fbo.texture}dispose(){for(const e of this.targets)e.fbo.dispose()}computeValidity(){return this.targets.reduce(((e,t,r)=>t.valid?e|=1<<r:e),0)}}var M=r(83607),I=r(12188),P=r(49631),A=r(91077),F=r(17992),E=r(71723),H=r(20907),N=r(44e3),V=r(60984),L=r(86836),z=r(29025),W=r(53801),j=r(45917),U=r(93003),G=r(16434),k=r(12723);class q extends G.w{constructor(e,t){super(e,t,new U.$(P.a,(()=>r.e(7958).then(r.bind(r,7958)))))}initializePipeline(e){return e.hasAlpha?(0,k.Ey)({blending:k.Ky,colorWrite:k.kn}):(0,k.Ey)({colorWrite:k.kn})}}var B=r(21484);class Z extends B.K{constructor(){super(...arguments),this.hasAlpha=!1}}(0,i._)([(0,B.W)()],Z.prototype,"hasAlpha",void 0);var $=r(10980),Q=r(71602),X=r(12258),Y=r(70846);class K extends G.w{constructor(e,t){super(e,t,new U.$(Y.a,(()=>r.e(18878).then(r.bind(r,18878)))))}}var J=r(19565),ee=r(92156),te=r(64177),re=r(77936);let ie=class extends A.RW{constructor(e){super(e),this._overlays=null,this._renderTargets=null,this._overlayParameters=new Y.O,this.hasHighlights=!1,this._hasWater=!1,this._renderers=new Map,this._sortedDrapeSourceRenderersDirty=!1,this._sortedRenderers=new s.A,this._passParameters=new P.T,this._materials=null,this._screenToWorldRatio=1,this._localOriginFactory=null,this.unloadedMemory=0,this.ignoresMemoryFactor=!1,this._camera=new M.default,this.events=new o.A,this.longitudeCyclical=null,this.produces=new Map([[W.N.DRAPED_MATERIAL,e=>e!==S.V.Highlight||this.hasHighlights],[W.N.DRAPED_WATER,()=>this._hasWater]]),this._hasTargetWithoutRasterImage=!1,this._hasDrapedFeatureSource=!1,this._hasDrapedRasterSource=!1}initialize(){const e=this._view,t=e._stage,r=t.renderer.fboCache,{waterTextures:i,textures:o}=t.renderView;this._renderContext=new z.gE(this._rctx,new j.p(r,e.state.viewingMode)),this.addHandles([(0,l.watch)((()=>i.updating),(()=>this.events.emit("content-changed")),l.syncAndInitial),(0,l.watch)((()=>this.spatialReference),(e=>this._localOriginFactory=new N.g(e)),l.syncAndInitial),(0,l.on)((()=>e.allLayerViews),"after-changes",(()=>this._sortedDrapeSourceRenderersDirty=!0)),(0,l.watch)((()=>(0,F.Q_)(e.state.highlights)),(()=>this._sortedDrapeSourceRenderersDirty=!0),l.initial),(0,l.watch)((()=>e.state.highlights),(t=>{this._bindParameters.highlights=t,this._bindParameters.highlightOrderMap=e.state.highlightOrderMap,this._updateHighlights()}),l.initial),e.resourceController.scheduler.registerTask(J.W6.STAGE,this)]),this._materials=new H.v(o,this._techniques,(()=>{this.notifyChange("rendersOccludedDraped"),this.events.emit("content-changed"),this.notifyChange("updating"),this.notifyChange("isEmpty")}),(()=>this.events.emit("content-changed")));const{_bindParameters:a,_camera:n}=this;n.near=1,n.far=1e4,n.relativeElevation=null,a.slot=W.N.DRAPED_MATERIAL,a.mainDepth=null,a.camera=n,a.oitPass=L.Y.NONE,a.updateLighting([new X.$p((0,p.S)())],0,0,$.U.Immediate)}destroy(){this._renderers.forEach((e=>e.destroy())),this._renderers.clear(),this._passParameters.texture=(0,n.WD)(this._passParameters.texture),this.disposeOverlays()}get _bindParameters(){return this._renderContext.bind}get _rctx(){return this._stage.renderView.renderingContext}get _view(){return this.parent.view}get _stage(){return this.parent.view._stage}get spatialReference(){return this.parent.spatialReference}get _techniques(){return this._stage.renderView.techniques}get rctx(){return this._rctx}get materials(){return this._materials}get screenToWorldRatio(){return this._screenToWorldRatio}get localOriginFactory(){return this._localOriginFactory}get pluginContext(){return this._pluginContext}initializeRenderContext(e){this._pluginContext=e,this._techniques.precompile(K)}uninitializeRenderContext(){}acquireTechniques(){return[]}render(){}get updating(){return this._sortedDrapeSourceRenderersDirty||(0,a.Bs)(this._renderers,(e=>e.updating))}get hasOverlays(){return null!=this._overlays&&null!=this._renderTargets}getMaterialRenderer(e){for(const t of this._renderers.values()){const r=t.getMaterialRenderer(e);if(r)return r}return null}get layers(){return this._sortedDrapeSourceRenderersDirty&&this._updateSortedDrapeSourceRenderers(),this._sortedRenderers.map((e=>e.drapeSource.layer)).filter((e=>!!e))}_updateHighlights(){const e=this._view.state;this._renderers.forEach((t=>t.updateHighlights(e.highlightOrderMap)))}createDrapeSourceRenderer(e,t,r){const i=this._renderers.get(e);null!=i&&i.destroy();const o=new t({...r,rendererContext:this,drapeSource:e});return this._renderers.set(e,o),this._sortedDrapeSourceRenderersDirty=!0,"fullOpacity"in e&&this.addHandles((0,l.watch)((()=>e.fullOpacity),(()=>this.events.emit("content-changed"))),e),o}removeDrapeSourceRenderer(e){if(null==e)return;const t=this._renderers.get(e);null!=t&&(this._sortedDrapeSourceRenderersDirty=!0,this._renderers.delete(e),this.removeHandles(e),t.destroy())}computeValidity(){return this._renderTargets?.computeValidity()??0}releaseRenderTargets(){this._renderTargets?.dispose()}get overlays(){return this._overlays??[]}ensureDrapeTargets(e){this._hasTargetWithoutRasterImage=!!this._overlays&&(0,c.bw)(e,(e=>e.drapeTargetType===v.sv.WithoutRasterImage))}ensureDrapeSources(e){this._overlays?(this._hasDrapedFeatureSource=(0,c.bw)(e,(e=>e.drapeSourceType===v.Om.Features)),this._hasDrapedRasterSource=(0,c.bw)(e,(e=>e.drapeSourceType===v.Om.RasterImage))):this._hasDrapedFeatureSource=this._hasDrapedRasterSource=!1}get _needsColorWithoutRasterImage(){return this._hasDrapedRasterSource&&this._hasDrapedFeatureSource&&this._hasTargetWithoutRasterImage}ensureOverlays(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this._bindParameters.overlayStretch;null==this._overlays&&(this._renderTargets=new D(this._stage.renderer.fboCache),this._overlays=[new y,new y]),this.ensureDrapeTargets(e),this.ensureDrapeSources(t),this._bindParameters.overlayStretch=r}disposeOverlays(){this._overlays=null,this._renderTargets=(0,n.WD)(this._renderTargets),this.events.emit("textures-disposed")}getTexture(e){if(null!=e)return e===C.A.ColorNoRasterImage&&!this._needsColorWithoutRasterImage&&this._hasDrapedFeatureSource?this._renderTargets?.getTexture(C.A.Color):this._renderTargets?.getTexture(e)}get running(){return this.updating}runTask(e){this._processDrapeSources(e,(()=>!0))}_processDrapeSources(e,t){let r=!1;for(const[i,o]of this._renderers){if(e.done)break;(i.destroyed||t(i))&&o.commitChanges(this._view.state.highlightOrderMap)&&(r=!0,e.madeProgress())}this._sortedDrapeSourceRenderersDirty&&(this._sortedDrapeSourceRenderersDirty=!1,r=!0,this._updateSortedDrapeSourceRenderers()),r&&(null!=this._overlays&&0===this._renderers.size&&this.disposeOverlays(),this.notifyChange("updating"),this.notifyChange("isEmpty"),this.events.emit("content-changed"),this.hasHighlights=(0,a.Bs)(this._renderers,(e=>e.hasHighlights)),this.notifyChange("rendersOccludedDraped"))}hasHighlightOptions(e){return(0,a.Bs)(this._renderers,(t=>t.hasHighlightOptions(e)))}processSyncDrapeSources(){this._processDrapeSources(J.Bb,(e=>e.updatePolicy===Q.q.SYNC))}get isEmpty(){return!f.b.OVERLAY_DRAW_DEBUG_TEXTURE&&!(0,a.Bs)(this._renderers,(e=>!e.isEmpty))}get hasWater(){const e=(0,a.Bs)(this._renderers,(e=>e.hasWater));return e!==this._hasWater&&(this._hasWater=e,this.events.emit("has-water")),this._hasWater}get rendersOccludedDraped(){const e=this._renderContext.renderOccludedMask;this._renderContext.renderOccludedMask=se,++this._techniques.precompiling;const t=this._sortedRenderers.some((e=>{let{renderer:t}=e;return t.precompile(this._renderContext)}));return--this._techniques.precompiling,this._renderContext.renderOccludedMask=e,t}renders(e){if(f.b.OVERLAY_DRAW_DEBUG_TEXTURE&&e!==C.A.Occluded&&e!==C.A.Highlight)return!0;++this._techniques.precompiling;const t=this._sortedRenderers.some((e=>{let{renderer:t}=e;return t.precompile(this._renderContext)}));return--this._techniques.precompiling,t}get mode(){return this.isEmpty?I.w9.Disabled:this.hasWater&&this.renders(C.A.WaterNormal)?I.w9.EnabledWithWater:this._renderTargets?.getTexture(C.A.Color)?I.w9.Enabled:I.w9.Disabled}updateAnimation(e){let t=!1;return this._renderers.forEach((r=>t=r.updateAnimation(e)||t)),t&&this.parent.requestRender(E.C7.BACKGROUND),t}updateDrapeSourceOrder(){this._sortedDrapeSourceRenderersDirty=!0}precompileShaders(e){if(this._renderTargets){this._bindParameters.alignPixelEnabled=e.alignPixelEnabled,++this._techniques.precompiling;for(const e of this._renderTargets.targets){if(e.content===C.A.ColorNoRasterImage&&!this._needsColorWithoutRasterImage)continue;const t=e.output;this._renderContext.output=t,this._bindParameters.slot=t===S.V.Normal?W.N.DRAPED_WATER:W.N.DRAPED_MATERIAL,e.content===C.A.Occluded&&(this._renderContext.renderOccludedMask=se),this._sortedRenderers.forAll((t=>{let{drapeSource:r,renderer:i}=t;e.content===C.A.ColorNoRasterImage&&r.drapeSourceType===v.Om.RasterImage||i.precompile(this._renderContext)})),this._renderContext.renderOccludedMask=z.Vr}--this._techniques.precompiling}}drawOverlays(e){if(this._overlays&&this._renderTargets){for(const e of this._overlays)this.longitudeCyclical?e.setupGeometryViewsCyclical(this.longitudeCyclical):e.setupGeometryView();this._bindParameters.alignPixelEnabled=e.alignPixelEnabled;for(const e of this._renderTargets.targets){if(e.content===C.A.ColorNoRasterImage&&!this._needsColorWithoutRasterImage)continue;const t=this._drawTarget(m.vr.INNER,e),r=this._drawTarget(m.vr.OUTER,e);(t||r)&&e.fbo.generateMipMap()}}}_drawTarget(e,t){const r=this._overlays[e],i=r.canvasGeometries;if(0===i.numViews)return!1;const o=this._view.state.contentPixelRatio;this._screenToWorldRatio=o*r.mapUnitsPerPixel/this._bindParameters.overlayStretch;const a=t.output;if(this.isEmpty||a===S.V.Normal&&!this.hasWater||!r.hasSomeSizedView())return!1;const{_rctx:n,_camera:s,_renderContext:l,_bindParameters:c}=this;if(s.pixelRatio=r.pixelRatio*o,l.output=a,c.screenToWorldRatio=this._screenToWorldRatio,c.screenToPCSRatio=this._screenToWorldRatio*this.parent.worldToPCSRatio,c.slot=a===S.V.Normal?W.N.DRAPED_WATER:W.N.DRAPED_MATERIAL,t.content===C.A.Occluded&&(l.renderOccludedMask=se),!this.renders(t.content))return l.renderOccludedMask=z.Vr,!1;const{resolution:h}=r,d=e===m.vr.INNER?0:h;if(n.setViewport(d,0,h,h),this._bindTargetFBO(t),e===m.vr.INNER&&(n.setClearColor(0,0,0,0),n.clear(ee.NV.COLOR)),f.b.OVERLAY_DRAW_DEBUG_TEXTURE&&t.content!==C.A.Occluded&&t.content!==C.A.Highlight){this._techniques.precompile(q,le);const t=this._techniques.get(q,le);for(let o=0;o<i.numViews;o++)this._setViewParameters(i.extents[o],r),this._ensureDebugPatternResources(r.resolution,ae[e]),n.bindTechnique(t,c,this._passParameters),n.screen.draw()}if(t.output===S.V.Highlight){const{fboCache:r}=this._stage.renderer,i=this._resolution;this._bindTargetFBO(t),(0,F.VO)(n,r,{width:i,height:i},c,(()=>this._renderAllGeometry(e,t)),d)}else this._renderAllGeometry(e,t);return n.bindFramebuffer(null),l.renderOccludedMask=z.Vr,!0}_renderAllGeometry(e,t){const r=this._overlays[e],i=r.canvasGeometries;this._sortedRenderers.forAll((o=>{let{drapeSource:a,renderer:n}=o;if(t.content===C.A.ColorNoRasterImage&&a.drapeSourceType===v.Om.RasterImage)return;const{fullOpacity:s}=a,l=null!=s&&s<1&&t.output===S.V.Color&&this._bindTemporaryFBO();for(let e=0;e<i.numViews;e++)this._setViewParameters(i.extents[e],r),n.render(this._renderContext);if(l){this._bindTargetFBO(t),this._overlayParameters.texture=l.getTexture(),this._overlayParameters.opacity=s,this._overlayParameters.overlayIndex=e;const r=this._techniques.get(K);this._rctx.bindTechnique(r,this._bindParameters,this._overlayParameters),this._rctx.screen.draw(),l.release()}}))}_bindTargetFBO(e){const t=this._resolution,r=2*t;e.fbo.bind(this._rctx,r,t)}_bindTemporaryFBO(){const e=this._resolution,t=2*e,r=this._stage.renderer.fboCache,i=r.acquire(t,e,"overlay tmp");return r.rctx.bindFramebuffer(i.fbo),r.rctx.clear(ee.NV.COLOR),i}get _resolution(){return this._overlays?.[m.vr.INNER].resolution??0}notifyContentChanged(){this.events.emit("content-changed")}intersect(e,t,r,i){this._sortedDrapeSourceRenderersDirty&&this._updateSortedDrapeSourceRenderers();let o=0;for(const{renderer:a}of this._sortedRenderers)o=a.intersect?.(e,t,r,i,o)??o}_updateSortedDrapeSourceRenderers(){if(this._sortedRenderers.clear(),0===this._renderers.size)return;const e=this._view.map.allLayers,t=e.length;this._renderers.forEach(((r,i)=>{const o=e.indexOf(i.layer),a=o>=0,n=i.renderGroup??(a?v.O7.MapLayer:v.O7.ViewLayer),s=t*n+(a?o:0);this._sortedRenderers.push(new oe(i,r,s))})),this._sortedRenderers.sort(((e,t)=>e.index-t.index))}_setViewParameters(e,t){const r=this._camera;r.viewport=[0,0,t.resolution,t.resolution],(0,u.v3)(r.projectionMatrix,0,e[2]-e[0],0,e[3]-e[1],r.near,r.far),(0,u.kN)(r.viewMatrix,[-e[0],-e[1],0])}_ensureDebugPatternResources(e,t){if((0,g.i)(this._passParameters.color,t[0],t[1],t[2]),this._passParameters.texture)return;const r=new Uint8Array(e*e*4);let i=0;for(let a=0;a<e;a++)for(let t=0;t<e;t++){const o=Math.floor(t/10),n=Math.floor(a/10);o<2||n<2||10*o>e-20||10*n>e-20?(r[i++]=255,r[i++]=255,r[i++]=255,r[i++]=255):(r[i++]=255,r[i++]=255,r[i++]=255,r[i++]=1&o&&1&n?1&t^1&a?0:255:1&o^1&n?0:128)}const o=new re.R(e);o.samplingMode=ee.Cj.NEAREST,this._passParameters.texture=new te.g(this._rctx,o,r)}get test(){}};(0,i._)([(0,h.MZ)()],ie.prototype,"hasHighlights",void 0),(0,i._)([(0,h.MZ)()],ie.prototype,"_sortedDrapeSourceRenderersDirty",void 0),(0,i._)([(0,h.MZ)({constructOnly:!0})],ie.prototype,"parent",void 0),(0,i._)([(0,h.MZ)({readOnly:!0})],ie.prototype,"_techniques",null),(0,i._)([(0,h.MZ)({type:Boolean,readOnly:!0})],ie.prototype,"updating",null),(0,i._)([(0,h.MZ)()],ie.prototype,"isEmpty",null),(0,i._)([(0,h.MZ)({readOnly:!0})],ie.prototype,"rendersOccludedDraped",null),ie=(0,i._)([(0,d.$)("esri.views.3d.terrain.OverlayRenderer")],ie);class oe{constructor(e,t,r){this.drapeSource=e,this.renderer=t,this.index=r}}const ae=[[1,.5,.5],[.5,.5,1]],ne=-2,se=V.m$.OccludeAndTransparent,le=new Z;le.hasAlpha=!0},87588:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var i,o=r(93800),a=r(19455),n=r(48602),s=(r(21265),r(50925),r(14746),r(47332)),l=r(75269);let c=i=class extends a.A{constructor(e){super(e),this.type="sunny",this.cloudCover=.5}clone(){return new i({cloudCover:this.cloudCover})}};(0,o._)([(0,s.e)({sunny:"sunny"}),(0,n.MZ)({json:{write:{isRequired:!0}}})],c.prototype,"type",void 0),(0,o._)([(0,n.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],c.prototype,"cloudCover",void 0),c=i=(0,o._)([(0,l.$)("esri.views.3d.environment.SunnyWeather")],c);const h=c},88107:(e,t,r)=>{r.d(t,{H:()=>h,b:()=>c});var i=r(71666),o=r(15),a=r(16878),n=r(7683),s=r(67058),l=r(8118);function c(){const e=new l.N5;e.include(i.Q),e.include(o.y);const{fragment:t}=e;return e.outputs.add("fragSingleHighlight","vec2",0),t.uniforms.add(new s.N("highlightTexture",(e=>e.highlightTexture)),new n.c("highlightLevel",(e=>e.highlightLevel))),t.main.add(a.H`ivec2 iuv = ivec2(gl_FragCoord.xy);
vec2 inputTexel = texelFetch(highlightTexture, iuv, 0).rg;
uint bits = readLevelBits(inputTexel, highlightLevel);
bool hasHighlight = (bits & 1u) == 1u;
bool hasOccluded  = (bits & 2u) == 2u;
fragSingleHighlight = vec2(hasHighlight ? 1.0 : 0.0, hasOccluded ? 1.0 : 0.0);`),e}const h=Object.freeze(Object.defineProperty({__proto__:null,build:c},Symbol.toStringTag,{value:"Module"}))},91077:(e,t,r)=>{r.d(t,{B7:()=>n,Cc:()=>c,RW:()=>l,qo:()=>a});var i=r(6946),o=r(96236);const a={required:[]},n={required:[o.V.Depth]};class s extends i.default{precompile(e){return!!this.acquireTechniques(e)}consumes(){return a}get usedMemory(){return 0}get isDecoration(){return!1}get running(){return!1}modify(e){}get numGeometries(){return 0}get hasOccludees(){return!1}get hasEmissions(){return!1}forEachGeometry(e){}queryRenderOccludedState(e){return!1}}class l extends s{}class c extends s{}},92212:(e,t,r)=>{var i,o;function a(e){return null!=e&&!e.running}r.d(t,{c:()=>o,pi:()=>a,tf:()=>i}),function(e){e[e.Idle=0]="Idle",e[e.Rendering=1]="Rendering",e[e.Ready=2]="Ready",e[e.Fading=3]="Fading"}(i||(i={})),function(e){e[e.RG=0]="RG",e[e.BA=1]="BA",e[e.COUNT=2]="COUNT"}(o||(o={}))},94982:(e,t,r)=>{r.d(t,{E:()=>f});var i=r(39540),o=r(77742),a=r(59572),n=r(50508),s=r(33273),l=r(15025),c=r(4241),h=r(16878),d=r(38950),u=r(73712);function g(e,t){if(!t.screenSpaceReflections)return;const r=e.fragment;r.include(s.E),r.uniforms.add(new l.E("nearFar",(e=>e.camera.nearFar)),new u.x("depthMap",(e=>e.depth?.attachment)),new d.F("proj",(e=>e.camera.projectionMatrix)),new c.U("invResolutionHeight",(e=>1/e.camera.height)),new d.F("reprojectionMatrix",(e=>e.ssr.reprojectionMatrix))).code.add(h.H`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate)
  {
    vec4 zw = proj * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoord = reprojectionMatrix * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
    reprojectedCoord.xy /= reprojectedCoord.w;
    return reprojectedCoord.xy * 0.5 + 0.5;
  }

  const int maxSteps = ${t.highStepCount?"150":"75"};

  vec4 applyProjectionMat(mat4 projectionMat, vec3 x)
  {
    vec4 projectedCoord =  projectionMat * vec4(x, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    projectedCoord.xy = projectedCoord.xy*0.5 + 0.5;
    return projectedCoord;
  }

  vec3 screenSpaceIntersection(vec3 dir, vec3 startPosition, vec3 viewDir, vec3 normal)
  {
    vec3 viewPos = startPosition;
    vec3 viewPosEnd = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(proj, viewPos);
    vec3  Q0 = viewPos / projectedCoordStart.w; // homogeneous camera space
    float k0 = 1.0/ projectedCoordStart.w;

    // advance the position in the direction of the reflection
    viewPos += dir;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(proj, dir);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(proj, viewPos);
    vec3  Q1 = viewPos / projectedCoordEnd.w; // homogeneous camera space
    float k1 = 1.0/ projectedCoordEnd.w;

    // calculate the reflection direction in the screen space
    vec2 projectedCoordDir = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 projectedCoordDistVanishingPoint = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float yMod = min(abs(projectedCoordDistVanishingPoint.y), 1.0);

    float projectedCoordDirLength = length(projectedCoordDir);
    float maxSt = float(maxSteps);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the reflection looks
    vec2 dP = yMod * (projectedCoordDir)/(maxSt * projectedCoordDirLength);

    // Normalize the homogeneous camera space coordinates
    vec3  dQ = yMod * (Q1 - Q0)/(maxSt * projectedCoordDirLength);
    float dk = yMod * (k1 - k0)/(maxSt * projectedCoordDirLength);

    // initialize the variables for ray marching
    vec2 P = projectedCoordStart.xy;
    vec3 Q = Q0;
    float k = k0;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float prevEstimateZ = -startPosition.z;
    float rayDiffZ = 0.0;
    float dDepth;
    float depth;
    float rayDiffZOld = 0.0;

    // early outs
    if (dot(normal, dir) < 0.0 || dot(-viewDir, normal) < 0.0)
      return vec3(P, 0.0);
    float dDepthBefore = 0.0;

    for(int i = 0; i < maxSteps-1; i++)
    {
      depth = -linearDepthFromTexture(depthMap, P); // get linear depth from the depth buffer

      // estimate depth of the marching ray
      rayStartZ = prevEstimateZ;
      dDepth = -rayStartZ - depth;
      rayEndZ = (dQ.z * 0.5 + Q.z)/ ((dk * 0.5 + k));
      rayDiffZ = rayEndZ- rayStartZ;
      prevEstimateZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || P.y < 0.0  || P.y > 1.0 )
      {
        return vec3(P, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - dDepth > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between dDepth and rayDiffZOld is not too large
      //  - if difference between dDepth and 0.025/abs(k) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if((dDepth) < 0.025/abs(k) + abs(rayDiffZ) && dDepth > 0.0 && depth > nearFar[0] && depth < nearFar[1] && abs(P.y - projectedCoordStart.y) > invResolutionHeight)
      {
        float weight = dDepth / (dDepth - dDepthBefore);
        vec2 Pf = mix(P - dP, P, 1.0 - weight);
        if (abs(Pf.y - projectedCoordStart.y) > invResolutionHeight) {
          return vec3(Pf, depth);
        }
        else {
          return vec3(P, depth);
        }
      }

      // continue with ray marching
      P = clamp(P + dP, vec2(0.0), vec2(0.999));
      Q.z += dQ.z;
      k += dk;
      rayDiffZOld = rayDiffZ;
      dDepthBefore = dDepth;
    }
    return vec3(P, 0.0);
  }
  `)}var p=r(46027),v=r(47998);function f(e,t){e.include(a.f,t),e.include(o.C),e.include(i.v),t.cloudReflections&&e.include(p.g),e.include(g,t);const r=e.fragment;r.include(v.b),r.constants.add("fresnelSky","vec3",[.02,1,15]),r.constants.add("fresnelMaterial","vec2",[.02,.1]),r.constants.add("roughness","float",.015),r.constants.add("foamIntensityExternal","float",1.7),r.constants.add("ssrIntensity","float",.65),r.constants.add("ssrHeightFadeStart","float",n.O),r.constants.add("ssrHeightFadeEnd","float",n.b),r.constants.add("waterDiffusion","float",.92),r.constants.add("waterSeaColorMod","float",.8),r.constants.add("correctionViewingPowerFactor","float",.4),r.constants.add("skyZenitColor","vec3",[.52,.68,.9]),r.constants.add("skyColor","vec3",[.67,.79,.9]),r.constants.add("cloudFresnelModifier","vec2",[1.2,.01]),r.code.add(h.H`PBRShadingWater shadingInfo;
vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
return mix(zenit, horizon, exponent);
}`),r.uniforms.add(new c.U("lightingSpecularStrength",(e=>e.lighting.mainLight.specularStrength)),new c.U("lightingEnvironmentStrength",(e=>e.lighting.mainLight.environmentStrength))),r.code.add(h.H`vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 viewPosition, vec3 position) {
float reflectionHit = 0.0;
float reflectionHitDiffused = 0.0;
vec3 seaWaterColor = linearizeGamma(color);
vec3 h = normalize(l + v);
shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
float upDotV = max(dot(localUp,v), 0.0);
vec3 skyHorizon = linearizeGamma(skyColor);
vec3 skyZenit = linearizeGamma(skyZenitColor);
vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );
float upDotL = max(dot(localUp,l),0.0);
float daytimeMod = 0.1 + upDotL * 0.9;
skyColor *= daytimeMod;
float shadowModifier = clamp(shadow, 0.8, 1.0);
vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
vec3 reflSky = lightingEnvironmentStrength * fresnelModifier * skyColor * shadowModifier;
vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;
vec3 specular = vec3(0.0);
if(upDotV > 0.0 && upDotL > 0.0) {
vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);
vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;
float NdotL = clamp(dot(n, l), 0.0, 1.0);
specular = lightingSpecularStrength * NdotL * incidentLight * specularSun;
}
vec3 foam = vec3(0.0);
if(upDotV > 0.0) {
foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
}
float correctionViewingFactor = pow(max(dot(v, localUp), 0.0), correctionViewingPowerFactor);
vec3 normalCorrectedClouds = mix(localUp, n, correctionViewingFactor);
vec3 reflectedWorld = normalize(reflect(-v, normalCorrectedClouds));`),t.cloudReflections&&r.uniforms.add(new c.U("cloudsOpacity",(e=>e.clouds.opacity))).code.add(h.H`vec4 cloudsColor = renderClouds(reflectedWorld, position);
cloudsColor.a = 1.0 - cloudsColor.a;
cloudsColor = pow(cloudsColor, vec4(GAMMA));
cloudsColor *= clamp(fresnelModifier.y * cloudFresnelModifier[0] - cloudFresnelModifier[1], 0.0, 1.0) * cloudsOpacity;`),t.screenSpaceReflections?r.uniforms.add(new d.F("view",(e=>e.camera.viewMatrix)),new u.x("lastFrameColorTexture",(e=>e.ssr.lastFrameColor?.getTexture())),new c.U("fadeFactorSSR",(e=>e.ssr.fadeFactor))).code.add(h.H`vec3 viewDir = normalize(viewPosition);
vec4 viewNormalVectorCoordinate = view * vec4(n, 0.0);
vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
vec4 viewUp = view * vec4(localUp, 0.0);
vec3 viewNormalCorrectedSSR = mix(viewUp.xyz, viewNormal, correctionViewingFactor);
vec3 reflected = normalize(reflect(viewDir, viewNormalCorrectedSSR));
vec3 hitCoordinate = screenSpaceIntersection(reflected, viewPosition, viewDir, viewUp.xyz);
vec3 reflectedColor = vec3(0.0);
if (hitCoordinate.z > 0.0)
{
vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);
vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -viewPosition.z);
reflectionHit = clamp(1.0 - (1.3 * dCoords.y), 0.0, 1.0) * heightMod * fadeFactorSSR;
reflectionHitDiffused = waterDiffusion * reflectionHit;
reflectedColor = linearizeGamma(texture(lastFrameColorTexture, reprojectedCoordinate).xyz) *
reflectionHitDiffused * fresnelModifier.y * ssrIntensity;
}
float seaColorMod =  mix(waterSeaColorMod, waterSeaColorMod * 0.5, reflectionHitDiffused);
vec3 waterRenderedColor = tonemapACES((1.0 - reflectionHitDiffused) * reflSky + reflectedColor +
reflSea * seaColorMod + specular + foam);`):r.code.add(h.H`vec3 waterRenderedColor = tonemapACES(reflSky + reflSea * waterSeaColorMod + specular + foam);`),t.cloudReflections?t.screenSpaceReflections?r.code.add(h.H`return waterRenderedColor * (1.0 - (1.0 - reflectionHit) * cloudsColor.a) + (1.0 - reflectionHit) * cloudsColor.xyz;
}`):r.code.add(h.H`return waterRenderedColor * (1.0 - cloudsColor.a) + cloudsColor.xyz;
}`):r.code.add(h.H`return waterRenderedColor;
}`)}},96013:(e,t,r)=>{var i;r.d(t,{z:()=>i}),function(e){e[e.Material=0]="Material",e[e.ShadowMap=1]="ShadowMap",e[e.Highlight=2]="Highlight",e[e.ViewshedShadowMap=3]="ViewshedShadowMap"}(i||(i={}))},97626:(e,t,r)=>{r.d(t,{k:()=>g,q:()=>u});var i=r(10382),o=r(98080),a=r(4716),n=r(83607),s=r(69436),l=r(86836),c=r(53801),h=r(10980),d=r(64667);class u{constructor(e,t){this.width=e,this.height=t}}class g{constructor(e){this.shadowMap=e,this.slot=c.N.OPAQUE_MATERIAL,this.slicePlane=null,this.hasOccludees=!1,this.enableFillLights=!0,this.oitPass=l.Y.NONE,this.alignPixelEnabled=!1,this.decorations=!0,this.overlayStretch=1,this.viewshedEnabled=!1,this._camera=new n.default,this._inverseViewport=(0,o.vt)(),this._oldLighting=new d.TA,this._newLighting=new d.TA,this._fadedLighting=new d.TA,this._lighting=this._newLighting,this.ssr=new p,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.highlights=new Array,this.highlightOrderMap=new Map,this.highlightMixOrigin=(0,o.vt)(),this.highlightMixTexture=null,this.hudRenderStyle=s.D.Occluded,this.hudOccludedFragmentOpacity=1,this.clouds=new a.n,this.shadowHighlightsVisible=!1}get camera(){return this._camera}set camera(e){this._camera=e,this._inverseViewport[0]=1/e.fullViewport[2],this._inverseViewport[1]=1/e.fullViewport[3]}get inverseViewport(){return this._inverseViewport}get lighting(){return this._lighting}fadeLighting(){switch(this.clouds.fadeFactor){case 0:this._lighting=this._oldLighting;break;default:this._fadedLighting.lerpLighting(this._oldLighting,this._newLighting,this.clouds.fadeFactor),this._lighting=this._fadedLighting;break;case 1:this._lighting=this._newLighting,this._oldLighting.copyFrom(this._newLighting)}}updateLighting(e,t,r,i){this._oldLighting.copyFrom(this.lighting),this._newLighting.noonFactor=t,this._newLighting.globalFactor=r,this._newLighting.set(e),i===h.U.FadeWithWeather&&this.clouds.requestFade(),this.fadeLighting()}get highlight(){return null==this.highlightLevel?null:this.highlights[this.highlightLevel]}}class p{constructor(){this.fadeFactor=1,this.reprojectionMatrix=(0,i.vt)()}}}}]);