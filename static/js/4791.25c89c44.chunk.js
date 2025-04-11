"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[4791],{8461:(e,t,i)=>{i.d(t,{B:()=>m});i(21265);var r=i(87752),n=i(10382),o=i(89227),a=i(28473),s=i(89476),l=i(11741),c=i(71723),d=i(33683),p=i(69291),h=i(86845),u=i(89893),f=i(22131),v=i(30078);class m extends d.J{get geometries(){return this._geometries}get transformation(){return this._transformation??n.zK}set transformation(e){this._transformation=(0,r.C)(this._transformation??(0,n.vt)(),e),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?(0,r.C)(this._shaderTransformation??(0,n.vt)(),e):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(),this.type=p.X.Object,this._shaderTransformation=null,this._parentLayer=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerUid=e.layerUid,e.isElevationSource&&(this.lastValidElevationBB=new g),this._geometries=e.geometries?Array.from(e.geometries):new Array}dispose(){this._geometries.length=0}get parentLayer(){return this._parentLayer}set parentLayer(e){(0,u.vA)(null==this._parentLayer||null==e,"Object3D can only be added to a single Layer"),this._parentLayer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e),this._emit("geometryAdded",{object:this,geometry:e}),this._invalidateBoundingVolume()}removeGeometry(e){const t=this._geometries.splice(e,1)[0];t&&(this._emit("geometryRemoved",{object:this,geometry:t}),this._invalidateBoundingVolume())}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this._emit("attributesChanged",{object:this,geometry:e,attribute:t,sync:i}),(0,f.b)(t)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(const e of this._geometries)e.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const e=new h.p;for(const t of this._geometries)t.occludees=(0,v.Ci)(t.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(const t of this._geometries)t.occludees=(0,v.PC)(t.occludees,e);this._emit("occlusionChanged",this)}highlight(e){const t=new h.h(e);for(const i of this._geometries)i.addHighlight(t);return this._emit("highlightChanged",this),t}removeHighlight(e){for(const t of this._geometries)t.removeHighlight(e);this._emit("highlightChanged",this)}removeStateID(e){e.channel===c.Mg.Highlight?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,t){return(0,r.lw)(t,this.transformation,e.transformation)}getCombinedShaderTransformation(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,n.vt)();return(0,r.lw)(t,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=this._bvWorldSpace||new S,this._validateBoundingVolume(this._bvWorldSpace,O.WorldSpace)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=this._bvObjectSpace||new S,this._validateBoundingVolume(this._bvObjectSpace,O.ObjectSpace)),this._bvObjectSpace}_validateBoundingVolume(e,t){const i=t===O.ObjectSpace;for(const r of this._geometries){const t=r.boundingInfo;t&&_(t,e,i?r.transformation:this.getCombinedShaderTransformation(r))}(0,o.m)((0,s.a)(e.bounds),e.min,e.max,.5);for(const r of this._geometries){const t=r.boundingInfo;if(null==t)continue;const n=i?r.transformation:this.getCombinedShaderTransformation(r),a=(0,l.hG)(n);(0,o.t)(A,t.center,n);const c=(0,o.j)(A,(0,s.a)(e.bounds)),d=t.radius*a;e.bounds[3]=Math.max(e.bounds[3],c+d)}}_invalidateBoundingVolume(){const e=this._bvWorldSpace?.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this._parentLayer&&e&&this._parentLayer.notifyObjectBBChanged(this,e)}_emit(e,t){this._parentLayer&&this._parentLayer.events.emit(e,t)}get test(){}}class g{constructor(){this.min=(0,a.fA)(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.max=(0,a.fA)(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.max[0]<this.min[0]&&this.max[1]<this.min[1]&&this.max[2]<this.min[2]}}class S extends g{constructor(){super(...arguments),this.bounds=(0,s.c)()}}function _(e,t,i){const n=e.bbMin,a=e.bbMax;if((0,r.tZ)(i)){const e=(0,o.i)(T,i[12],i[13],i[14]);(0,o.g)(y,n,e),(0,o.g)(b,a,e);for(let i=0;i<3;++i)t.min[i]=Math.min(t.min[i],y[i]),t.max[i]=Math.max(t.max[i],b[i])}else if((0,o.t)(y,n,i),(0,o.p)(n,a))for(let r=0;r<3;++r)t.min[r]=Math.min(t.min[r],y[r]),t.max[r]=Math.max(t.max[r],y[r]);else{(0,o.t)(b,a,i);for(let e=0;e<3;++e)t.min[e]=Math.min(t.min[e],y[e],b[e]),t.max[e]=Math.max(t.max[e],y[e],b[e]);for(let e=0;e<3;++e){(0,o.c)(y,n),(0,o.c)(b,a),y[e]=a[e],b[e]=n[e],(0,o.t)(y,y,i),(0,o.t)(b,b,i);for(let e=0;e<3;++e)t.min[e]=Math.min(t.min[e],y[e],b[e]),t.max[e]=Math.max(t.max[e],y[e],b[e])}}}const T=(0,a.vt)(),y=(0,a.vt)(),b=(0,a.vt)(),A=(0,a.vt)();var O,R;(R=O||(O={}))[R.WorldSpace=0]="WorldSpace",R[R.ObjectSpace=1]="ObjectSpace"},15173:(e,t,i)=>{i.d(t,{T:()=>o,U:()=>n});var r=i(64682);function n(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const n=(0,r.qE)(e,0,l);for(let r=0;r<4;r++)t[i+r]=Math.floor(256*c(n*a[r]))}function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=0;for(let r=0;r<4;r++)i+=e[t+r]*s[r];return i}const a=[1,256,65536,16777216],s=[1/256,1/65536,1/16777216,1/4294967296],l=o(new Uint8ClampedArray([255,255,255,255]));function c(e){return e-Math.floor(e)}},18287:(e,t,i)=>{i.d(t,{CN:()=>l,PY:()=>c,Q_:()=>s,m9:()=>h,ny:()=>d,sZ:()=>p});i(21265);var r=i(15173),n=i(24646),o=i(51446),a=i(92156);const s=128,l=.5,c=(0,n.CN)(l/2,l/2,1-l/2,1-l/2);function d(e){return"cross"===e||"x"===e}function p(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;const i=h(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:t*l,arguments.length>3&&void 0!==arguments[3]?arguments[3]:0);return new o.g(i,{mipmap:!1,wrap:{s:a.pF.CLAMP_TO_EDGE,t:a.pF.CLAMP_TO_EDGE},width:t,height:t,components:4,noUnpackFlip:!0,reloadable:!0})}function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t*l,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;switch(e){case"circle":default:return function(e,t){const i=e/2-.5;return g(e,v(i,i,t/2))}(t,i);case"square":return function(e,t){return u(e,t,!1)}(t,i);case"cross":return function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return f(e,t,!1,i)}(t,i,r);case"x":return function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return f(e,t,!0,i)}(t,i,r);case"kite":return function(e,t){return u(e,t,!0)}(t,i);case"triangle":return function(e,t){return g(e,m(e/2,t,t/2))}(t,i);case"arrow":return function(e,t){const i=t,r=t/2,n=e/2,o=.8*i,a=v(n,(e-t)/2-o,Math.sqrt(o*o+r*r)),s=m(n,i,r);return g(e,((e,t)=>Math.max(s(e,t),-a(e,t))))}(t,i)}}function u(e,t,i){return i&&(t/=Math.SQRT2),g(e,((r,n)=>{let o=r-.5*e+.25,a=.5*e-n-.75;if(i){const e=(o+a)/Math.SQRT2;a=(a-o)/Math.SQRT2,o=e}return Math.max(Math.abs(o),Math.abs(a))-.5*t}))}function f(e,t,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;t-=r,i&&(t*=Math.SQRT2);const n=.5*t;return g(e,((t,o)=>{let a,s=t-.5*e,l=.5*e-o-1;if(i){const e=(s+l)/Math.SQRT2;l=(l-s)/Math.SQRT2,s=e}return s=Math.abs(s),l=Math.abs(l),a=s>l?s>n?Math.sqrt((s-n)*(s-n)+l*l):l:l>n?Math.sqrt(s*s+(l-n)*(l-n)):s,a-=r/2,a}))}function v(e,t,i){return(r,n)=>{const o=r-e,a=n-t;return Math.sqrt(o*o+a*a)-i}}function m(e,t,i){const r=Math.sqrt(t*t+i*i);return(n,o)=>{const a=Math.abs(n-e)-i,s=o-e+t/2+.75,l=(t*a+i*s)/r,c=-s;return Math.max(l,c)}}function g(e,t){const i=new Uint8Array(4*e*e);for(let n=0;n<e;n++)for(let o=0;o<e;o++){const a=o+e*n;let s=t(o,n);s=s/e+.5,(0,r.U)(s,i,4*a)}return i}},20196:(e,t,i)=>{i.d(t,{x:()=>h,r:()=>u});var r=i(58448),n=i(90834),o=i(17741),a=i(15899),s=i(33683),l=i(69291);const c=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];var d=i(51255),p=i(71602);class h extends s.J{constructor(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";super(),this.stage=e,this.apiLayerUid=i,this.type=l.X.Layer,this.events=new r.A,this.visible=!0,this.sliceable=!1,this._objectsAdded=new a.A,this._handles=new n.default,this._objects=new a.A,this._pickable=!0,this.visible=t?.visible??!0,this._pickable=t?.pickable??!0,this.updatePolicy=t?.updatePolicy??p.q.ASYNC,this._disableOctree=t?.disableOctree??!1,e.add(this);for(const r of c)this._handles.add(this.events.on(r,(t=>e.handleEvent(r,t))))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.remove(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.push(e),e.parentLayer=this,this.events.emit("layerObjectAdded",{layer:this,object:e}),null!=this._octree&&this._objectsAdded.push(e)}remove(e){this._objects.removeUnordered(e)&&(e.parentLayer=null,this.events.emit("layerObjectRemoved",{layer:this,object:e}),null!=this._octree&&(this._objectsAdded.removeUnordered(e)||this._octree.remove([e])))}addMany(e){this._objects.pushArray(e);for(const t of e)t.parentLayer=this;this.events.emit("layerObjectsAdded",{layer:this,objects:e}),null!=this._octree&&this._objectsAdded.pushArray(e)}removeMany(e){const t=new Array;if(this._objects.removeUnorderedMany(e,e.length,t),0!==t.length){for(const e of t)e.parentLayer=null;if(this.events.emit("layerObjectsRemoved",{layer:this,objects:t}),null!=this._octree){for(let e=0;e<t.length;)this._objectsAdded.removeUnordered(t[e])?(t[e]=t[t.length-1],t.length-=1):++e;this._octree.remove(t)}}}sync(){this.updatePolicy!==p.q.SYNC&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,t){null==this._octree||this._objectsAdded.includes(e)||this._octree.update(e,t)}getSpatialQueryAccelerator(){return null==this._octree&&this._objects.length>50&&!this._disableOctree?(this._octree=new d.A((e=>e.boundingVolumeWorldSpace.bounds)),this._octree.add(this._objects.data,this._objects.length)):null!=this._octree&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded.data,this._objectsAdded.length),this._objectsAdded.clear()),this._octree}invalidateSpatialQueryAccelerator(){this._octree=(0,o.pR)(this._octree),this._objectsAdded.clear()}}function u(e){return null!=e&&e.type===l.X.Layer}},21703:(e,t,i)=>{i.d(t,{s:()=>d});var r=i(75762),n=i(57554),o=i(42403),a=i(74802),s=i(16878),l=i(22131);const c=8;function d(e,t){const i=e.vertex;i.uniforms.add(new o.m("intrinsicWidth",(e=>e.width))),t.vvSize?(e.attributes.add(l.r.SIZEFEATUREATTRIBUTE,"float"),i.uniforms.add(new n.t("vvSizeMinSize",(e=>e.vvSize.minSize)),new n.t("vvSizeMaxSize",(e=>e.vvSize.maxSize)),new n.t("vvSizeOffset",(e=>e.vvSize.offset)),new n.t("vvSizeFactor",(e=>e.vvSize.factor))),i.code.add(s.H`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(e.attributes.add(l.r.SIZE,"float"),i.code.add(s.H`float getSize(){
return intrinsicWidth * size;
}`)),t.vvOpacity?(e.attributes.add(l.r.OPACITYFEATUREATTRIBUTE,"float"),i.constants.add("vvOpacityNumber","int",8),i.uniforms.add(new a.x("vvOpacityValues",(e=>e.vvOpacity.values),c),new a.x("vvOpacityOpacities",(e=>e.vvOpacity.opacityValues),c)),i.code.add(s.H`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):i.code.add(s.H`vec4 applyOpacity( vec4 color ){
return color;
}`),t.vvColor?(e.include(r.A,t),e.attributes.add(l.r.COLORFEATUREATTRIBUTE,"float"),i.code.add(s.H`vec4 getColor(){
return applyOpacity(interpolateVVColor(colorFeatureAttribute));
}`)):(e.attributes.add(l.r.COLOR,"vec4"),i.code.add(s.H`vec4 getColor(){
return applyOpacity(color);
}`))}},23664:(e,t,i)=>{i.d(t,{W:()=>M});var r=i(50925),n=i(64682),o=i(16804),a=i(32006),s=i(89227),l=i(28473),c=i(24646),d=i(12096),p=i(1277),h=i(10872),u=i(98876),f=i(96236),v=i(96122),m=i(9215),g=i(60984),S=i(53801),_=i(89893),T=i(22131),y=i(90623),b=i(93570),A=i(56092),O=(i(21265),i(93003)),R=i(16434),C=i(86836),E=i(85645),x=i(92804),L=i(92156),D=i(12723);class P extends R.w{constructor(e,t){super(e,t,new O.$(A.R,(()=>i.e(80732).then(i.bind(i,80732)))),w),this.primitiveType=t.wireframe?L.WR.LINES:L.WR.TRIANGLE_STRIP}_makePipelineState(e,t){const{oitPass:i,output:r,hasOccludees:n,hasPolygonOffset:o}=e,a=i===C.Y.NONE,s=i===C.Y.FrontFace;return(0,D.Ey)({blending:(0,f.RN)(r)?(0,E.Yf)(i):null,depthTest:{func:(0,E.K_)(i)},depthWrite:(0,E.z5)(e),drawBuffers:r===f.V.Depth?{buffers:[L.Hr.NONE]}:(0,E.m6)(i,r),colorWrite:D.kn,stencilWrite:n?x.v0:null,stencilTest:n?t?x.a9:x.qh:null,polygonOffset:a||s?o?N:null:E.SE})}initializePipeline(e){if(e.occluder){const t=e.hasPolygonOffset?N:null;this._occluderPipelineTransparent=(0,D.Ey)({blending:D.Ky,polygonOffset:t,depthTest:x.sf,depthWrite:null,colorWrite:D.kn,stencilWrite:null,stencilTest:x.mK,drawBuffers:e.output===f.V.Depth?{buffers:[L.Hr.NONE]}:null}),this._occluderPipelineOpaque=(0,D.Ey)({blending:D.Ky,polygonOffset:t,depthTest:x.sf,depthWrite:null,colorWrite:D.kn,stencilWrite:x.r8,stencilTest:x.I$,drawBuffers:e.output===f.V.Depth?{buffers:[L.Hr.NONE]}:null}),this._occluderPipelineMaskWrite=(0,D.Ey)({blending:null,polygonOffset:t,depthTest:x.m,depthWrite:null,colorWrite:null,stencilWrite:x.v0,stencilTest:x.a9,drawBuffers:e.output===f.V.Depth?{buffers:[L.Hr.NONE]}:null})}return this._occludeePipeline=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,t){if(e)return this._occludeePipeline;switch(t){case S.N.TRANSPARENT_OCCLUDER_MATERIAL:return this._occluderPipelineTransparent??super.getPipeline();case S.N.OCCLUDER_MATERIAL:return this._occluderPipelineOpaque??super.getPipeline();default:return this._occluderPipelineMaskWrite??super.getPipeline()}}}const N={factor:0,units:-4},w=new Map([[T.r.POSITION,0],[T.r.PREVPOSITION,1],[T.r.NEXTPOSITION,2],[T.r.SUBDIVISIONFACTOR,3],[T.r.UV0,4],[T.r.COLOR,5],[T.r.COLORFEATUREATTRIBUTE,5],[T.r.SIZE,6],[T.r.SIZEFEATUREATTRIBUTE,6],[T.r.OPACITYFEATUREATTRIBUTE,7],[T.r.OBJECTANDLAYERIDCOLOR,8]]);var I,F,W=i(33332),z=i(12621);(F=I||(I={}))[F.LEFT_JOIN_START=-2]="LEFT_JOIN_START",F[F.LEFT_JOIN_END=-1]="LEFT_JOIN_END",F[F.LEFT_CAP_START=-4]="LEFT_CAP_START",F[F.LEFT_CAP_END=-5]="LEFT_CAP_END",F[F.RIGHT_JOIN_START=2]="RIGHT_JOIN_START",F[F.RIGHT_JOIN_END=1]="RIGHT_JOIN_END",F[F.RIGHT_CAP_START=4]="RIGHT_CAP_START",F[F.RIGHT_CAP_END=5]="RIGHT_CAP_END";class M extends g.im{constructor(e){super(e,U),this._configuration=new W.Q,this.vertexAttributeLocations=w,this.produces=new Map([[S.N.OPAQUE_MATERIAL,e=>(0,f.CL)(e)||(0,f.RN)(e)&&this.parameters.renderOccluded===g.m$.OccludeAndTransparentStencil],[S.N.OPAQUE_MATERIAL_WITHOUT_NORMALS,e=>(0,f.eh)(e)],[S.N.OCCLUDER_MATERIAL,e=>(0,f.T2)(e)&&this.parameters.renderOccluded===g.m$.OccludeAndTransparentStencil],[S.N.TRANSPARENT_OCCLUDER_MATERIAL,e=>(0,f.T2)(e)&&this.parameters.renderOccluded===g.m$.OccludeAndTransparentStencil],[S.N.TRANSPARENT_MATERIAL,e=>(0,f.RN)(e)&&this.parameters.writeDepth&&this.parameters.renderOccluded!==g.m$.OccludeAndTransparentStencil],[S.N.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>(0,f.RN)(e)&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==g.m$.OccludeAndTransparentStencil],[S.N.DRAPED_MATERIAL,e=>(0,f.i3)(e)]])}getConfiguration(e,t){this._configuration.output=e,this._configuration.oitPass=t.oitPass,this._configuration.draped=t.slot===S.N.DRAPED_MATERIAL;const i=null!=this.parameters.stipplePattern&&e!==f.V.Highlight;return this._configuration.stippleEnabled=i,this._configuration.stippleOffColorEnabled=i&&null!=this.parameters.stippleOffColor,this._configuration.stipplePreferContinuous=i&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins="round"===this.parameters.join,this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=null!=this.parameters.markerParameters&&function(e){return e.anchor===b.kJ.Tip&&e.hideOnShortSegments&&"begin-end"===e.placement&&e.worldSpace}(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&null!=this.parameters.innerColor,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=t.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===g.m$.OccludeAndTransparentStencil,this._configuration.terrainDepthTest=t.terrainDepthTest&&(0,f.RN)(e),this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.wireframe=this.parameters.wireframe,this._configuration}get visible(){return this.parameters.color[3]>=z.Q||null!=this.parameters.stipplePattern&&(this.parameters.stippleOffColor?.[3]??0)>z.Q}intersectDraped(e,t,i,r,o,a){let{attributes:s,screenToWorldRatio:l}=e;if(!i.options.selectionMode)return;const c=s.get(T.r.SIZE);let d=this.parameters.width;if(this.parameters.vvSize){const e=s.get(T.r.SIZEFEATUREATTRIBUTE).data[0];d*=(0,n.qE)(this.parameters.vvSize.offset[0]+e*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else c&&(d*=c.data[0]);const p=r[0],h=r[1],u=(d/2+4)*l;let f=Number.MAX_VALUE,v=0;const m=s.get(T.r.POSITION).data,g=B(this.parameters,s)?m.length-2:m.length-5;for(let S=0;S<g;S+=3){const e=m[S],t=m[S+1],i=(S+3)%m.length,r=p-e,o=h-t,a=m[i]-e,s=m[i+1]-t,l=(0,n.qE)((a*r+s*o)/(a*a+s*s),0,1),c=a*l-r,d=s*l-o,u=c*c+d*d;u<f&&(f=u,v=S/3)}f<u*u&&o(a.dist,a.normal,v,!1)}intersect(e,t,i,o,l,c){if(!i.options.selectionMode||!e.visible)return;if(!(0,_.zH)(t))return void r.A.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const u=e.attributes,f=u.get(T.r.POSITION).data;let v=this.parameters.width;if(this.parameters.vvSize){const e=u.get(T.r.SIZEFEATUREATTRIBUTE).data[0];v*=(0,n.qE)(this.parameters.vvSize.offset[0]+e*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else u.has(T.r.SIZE)&&(v*=u.get(T.r.SIZE).data[0]);const m=i.camera,g=$;(0,a.C)(g,i.point);const S=v*m.pixelRatio/2+4*m.pixelRatio;(0,s.i)(ne[0],g[0]-S,g[1]+S,0),(0,s.i)(ne[1],g[0]+S,g[1]+S,0),(0,s.i)(ne[2],g[0]+S,g[1]-S,0),(0,s.i)(ne[3],g[0]-S,g[1]-S,0);for(let r=0;r<4;r++)if(!m.unprojectFromRenderScreen(ne[r],oe[r]))return;(0,h.Cr)(m.eye,oe[0],oe[1],ae),(0,h.Cr)(m.eye,oe[1],oe[2],se),(0,h.Cr)(m.eye,oe[2],oe[3],le),(0,h.Cr)(m.eye,oe[3],oe[0],ce);let y=Number.MAX_VALUE,b=0;const A=B(this.parameters,u)?f.length-2:f.length-5;for(let r=0;r<A;r+=3){k[0]=f[r]+t[12],k[1]=f[r+1]+t[13],k[2]=f[r+2]+t[14];const e=(r+3)%f.length;if(G[0]=f[e]+t[12],G[1]=f[e+1]+t[13],G[2]=f[e+2]+t[14],(0,h.mN)(ae,k)<0&&(0,h.mN)(ae,G)<0||(0,h.mN)(se,k)<0&&(0,h.mN)(se,G)<0||(0,h.mN)(le,k)<0&&(0,h.mN)(le,G)<0||(0,h.mN)(ce,k)<0&&(0,h.mN)(ce,G)<0)continue;if(m.projectToRenderScreen(k,q),m.projectToRenderScreen(G,X),q[2]<0&&X[2]>0){(0,s.d)(J,k,G);const e=m.frustum,t=-(0,h.mN)(e[d.FB.NEAR],k)/(0,s.f)(J,(0,h.Qj)(e[d.FB.NEAR]));(0,s.h)(J,J,t),(0,s.g)(k,k,J),m.projectToRenderScreen(k,q)}else if(q[2]>0&&X[2]<0){(0,s.d)(J,G,k);const e=m.frustum,t=-(0,h.mN)(e[d.FB.NEAR],G)/(0,s.f)(J,(0,h.Qj)(e[d.FB.NEAR]));(0,s.h)(J,J,t),(0,s.g)(G,G,J),m.projectToRenderScreen(G,X)}else if(q[2]<0&&X[2]<0)continue;q[2]=0,X[2]=0;const i=(0,p.kb)((0,p.Cr)(q,X,K),g);i<y&&(y=i,(0,s.c)(Y,k),(0,s.c)(Z,G),b=r/3)}const O=i.rayBegin,R=i.rayEnd;if(y<S*S){let e=Number.MAX_VALUE;if((0,p.ld)((0,p.Cr)(Y,Z,K),(0,p.Cr)(O,R,ee),Q)){(0,s.d)(Q,Q,O);const t=(0,s.l)(Q);(0,s.h)(Q,Q,1/t),e=t/(0,s.j)(O,R)}c(e,Q,b,!1)}}get _layout(){const e=(0,u.BP)().vec3f(T.r.POSITION).vec3f(T.r.PREVPOSITION).vec3f(T.r.NEXTPOSITION).f32(T.r.SUBDIVISIONFACTOR).vec2f(T.r.UV0);return this.parameters.vvSize?e.f32(T.r.SIZEFEATUREATTRIBUTE):e.f32(T.r.SIZE),this.parameters.vvColor?e.f32(T.r.COLORFEATUREATTRIBUTE):e.vec4f(T.r.COLOR),this.parameters.vvOpacity&&e.f32(T.r.OPACITYFEATUREATTRIBUTE),(0,v.E)()&&e.vec4u8(T.r.OBJECTANDLAYERIDCOLOR),e}createBufferWriter(){return new H(this._layout,this.parameters)}createGLMaterial(e){return new j(e)}validateParameters(e){"miter"!==e.join&&(e.miterLimit=0),null!=e.markerParameters&&(e.markerScale=e.markerParameters.width/e.width)}}class j extends m.A{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){const t=this._material.parameters.stipplePattern;return this._stipplePattern!==t&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(t,this._stipplePattern)}),this._stipplePattern=t),this.getTechnique(P,e)}}class U extends y.S{constructor(){super(...arguments),this.width=0,this.color=c.Un,this.join="miter",this.cap=W.x.BUTT,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1}get transparent(){return this.color[3]<1||null!=this.stipplePattern&&(this.stippleOffColor?.[3]??0)<1}}class H{constructor(e,t){this.vertexBufferLayout=e,this._parameters=t,this.numJoinSubdivisions=0;const i=t.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=i;break;case"round":this.numJoinSubdivisions=A.r+i}}_isClosed(e){return B(this._parameters,e)}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const t=e.get(T.r.POSITION).indices.length/2+1,i=this._isClosed(e);let r=i?2:4;return r+=((i?t:t-1)-(i?0:1))*(2*this.numJoinSubdivisions+4),r+=2,this._parameters.wireframe&&(r=2+4*(r-2)),r}write(e,t,i,r,n,o){const a=te,l=ie,c=re,d=i.get(T.r.POSITION),p=d.indices,h=d.data.length/3,u=i.get(T.r.DISTANCETOSTART)?.data;p&&p.length!==2*(h-1)&&console.warn("RibbonLineMaterial does not support indices");const f=i.get(T.r.SIZEFEATUREATTRIBUTE)?.data[0]??i.get(T.r.SIZE)?.data[0]??1;let m=[1,1,1,1],g=0;const S=this.vertexBufferLayout.fields.has(T.r.COLORFEATUREATTRIBUTE);S?g=i.get(T.r.COLORFEATUREATTRIBUTE).data[0]:i.has(T.r.COLOR)&&(m=i.get(T.r.COLOR).data);const _=this.vertexBufferLayout.fields.has(T.r.OPACITYFEATUREATTRIBUTE),y=_?i.get(T.r.OPACITYFEATUREATTRIBUTE).data[0]:0,b=new Float32Array(n.buffer),A=(0,v.E)()?new Uint8Array(n.buffer):null,O=this.vertexBufferLayout.stride/4;let R=o*O;const C=R;let E=0;const x=u?(e,t,i)=>E=u[i]:(e,t,i)=>E+=(0,s.j)(e,t),L=(e,t,i,n,o,a,s)=>{if(b[R++]=t[0],b[R++]=t[1],b[R++]=t[2],b[R++]=e[0],b[R++]=e[1],b[R++]=e[2],b[R++]=i[0],b[R++]=i[1],b[R++]=i[2],b[R++]=n,b[R++]=s,b[R++]=o,b[R++]=f,S)b[R++]=g;else{const e=Math.min(4*a,m.length-4);b[R++]=m[e],b[R++]=m[e+1],b[R++]=m[e+2],b[R++]=m[e+3]}_&&(b[R++]=y),(0,v.E)()&&(r&&(A[4*R]=r[0],A[4*R+1]=r[1],A[4*R+2]=r[2],A[4*R+3]=r[3]),R++)};R+=O,(0,s.i)(l,d.data[0],d.data[1],d.data[2]),e&&(0,s.t)(l,l,e);const D=this._isClosed(i);if(D){const t=d.data.length-3;(0,s.i)(a,d.data[t],d.data[t+1],d.data[t+2]),e&&(0,s.t)(a,a,e)}else(0,s.i)(c,d.data[3],d.data[4],d.data[5]),e&&(0,s.t)(c,c,e),L(l,l,c,1,I.LEFT_CAP_START,0,0),L(l,l,c,1,I.RIGHT_CAP_START,0,0),(0,s.c)(a,l),(0,s.c)(l,c);const P=D?0:1,N=D?h:h-1;for(let v=P;v<N;v++){const t=(v+1)%h*3;(0,s.i)(c,d.data[t],d.data[t+1],d.data[t+2]),e&&(0,s.t)(c,c,e),x(a,l,v),L(a,l,c,0,I.LEFT_JOIN_END,v,E),L(a,l,c,0,I.RIGHT_JOIN_END,v,E);const i=this.numJoinSubdivisions;for(let e=0;e<i;++e){const t=(e+1)/(i+1);L(a,l,c,t,I.LEFT_JOIN_END,v,E),L(a,l,c,t,I.RIGHT_JOIN_END,v,E)}L(a,l,c,1,I.LEFT_JOIN_START,v,E),L(a,l,c,1,I.RIGHT_JOIN_START,v,E),(0,s.c)(a,l),(0,s.c)(l,c)}D?((0,s.i)(c,d.data[3],d.data[4],d.data[5]),e&&(0,s.t)(c,c,e),E=x(a,l,N),L(a,l,c,0,I.LEFT_JOIN_END,P,E),L(a,l,c,0,I.RIGHT_JOIN_END,P,E)):(E=x(a,l,N),L(a,l,l,0,I.LEFT_CAP_END,N,E),L(a,l,l,0,I.RIGHT_CAP_END,N,E)),V(b,C+O,b,C,O),R=V(b,R-O,b,R,O),this._parameters.wireframe&&this._addWireframeVertices(n,C,R,O)}_addWireframeVertices(e,t,i,r){const n=new Float32Array(e.buffer,i*Float32Array.BYTES_PER_ELEMENT),o=new Float32Array(e.buffer,t*Float32Array.BYTES_PER_ELEMENT,i-t);let a=0;const s=e=>a=V(o,e,n,a,r);for(let l=0;l<o.length-1;l+=2*r)s(l),s(l+2*r),s(l+1*r),s(l+2*r),s(l+1*r),s(l+3*r)}}function V(e,t,i,r,n){for(let o=0;o<n;o++)i[r++]=e[t++];return r}function B(e,t){return!!e.isClosed&&t.get(T.r.POSITION).indices.length>2}const k=(0,l.vt)(),G=(0,l.vt)(),J=(0,l.vt)(),Q=(0,l.vt)(),$=(0,l.vt)(),q=(0,o.r_)(),X=(0,o.r_)(),Y=(0,l.vt)(),Z=(0,l.vt)(),K=(0,p.vt)(),ee=(0,p.vt)(),te=(0,l.vt)(),ie=(0,l.vt)(),re=(0,l.vt)(),ne=[(0,o.r_)(),(0,o.r_)(),(0,o.r_)(),(0,o.r_)()],oe=[(0,l.vt)(),(0,l.vt)(),(0,l.vt)(),(0,l.vt)()],ae=(0,h.vt)(),se=(0,h.vt)(),le=(0,h.vt)(),ce=(0,h.vt)()},30078:(e,t,i)=>{i.d(t,{Ci:()=>o,PC:()=>a,Vk:()=>s});var r=i(28473),n=i(99416);function o(e,t){return null==e&&(e=[]),e.push(t),e}function a(e,t){if(null==e)return null;const i=e.filter((e=>e!==t));return 0===i.length?null:i}function s(e,t,i,r,o){l[0]=e.get(t,0),l[1]=e.get(t,1),l[2]=e.get(t,2),(0,n.jS)(l,c,3),i.set(o,0,c[0]),r.set(o,0,c[1]),i.set(o,1,c[2]),r.set(o,1,c[3]),i.set(o,2,c[4]),r.set(o,2,c[5])}const l=(0,r.vt)(),c=new Float32Array(6)},33332:(e,t,i)=>{i.d(t,{Q:()=>d,x:()=>r});var r,n,o=i(93800),a=i(69261),s=i(82606),l=i(21484),c=i(51448);(n=r||(r={}))[n.BUTT=0]="BUTT",n[n.SQUARE=1]="SQUARE",n[n.ROUND=2]="ROUND",n[n.COUNT=3]="COUNT";class d extends c.E{constructor(){super(...arguments),this.capType=r.BUTT,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.objectAndLayerIdColorInstanced=!1,this.textureCoordinateType=a.I.None,this.emissionSource=s.ZX.None,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0}}(0,o._)([(0,l.W)({count:r.COUNT})],d.prototype,"capType",void 0),(0,o._)([(0,l.W)()],d.prototype,"hasPolygonOffset",void 0),(0,o._)([(0,l.W)()],d.prototype,"writeDepth",void 0),(0,o._)([(0,l.W)()],d.prototype,"draped",void 0),(0,o._)([(0,l.W)()],d.prototype,"stippleEnabled",void 0),(0,o._)([(0,l.W)()],d.prototype,"stippleOffColorEnabled",void 0),(0,o._)([(0,l.W)()],d.prototype,"stipplePreferContinuous",void 0),(0,o._)([(0,l.W)()],d.prototype,"roundJoins",void 0),(0,o._)([(0,l.W)()],d.prototype,"applyMarkerOffset",void 0),(0,o._)([(0,l.W)()],d.prototype,"vvSize",void 0),(0,o._)([(0,l.W)()],d.prototype,"vvColor",void 0),(0,o._)([(0,l.W)()],d.prototype,"vvOpacity",void 0),(0,o._)([(0,l.W)()],d.prototype,"falloffEnabled",void 0),(0,o._)([(0,l.W)()],d.prototype,"innerColorEnabled",void 0),(0,o._)([(0,l.W)()],d.prototype,"hasOccludees",void 0),(0,o._)([(0,l.W)()],d.prototype,"occluder",void 0),(0,o._)([(0,l.W)()],d.prototype,"terrainDepthTest",void 0),(0,o._)([(0,l.W)()],d.prototype,"cullAboveTerrain",void 0),(0,o._)([(0,l.W)()],d.prototype,"wireframe",void 0),(0,o._)([(0,l.W)()],d.prototype,"discardInvisibleFragments",void 0),(0,o._)([(0,l.W)()],d.prototype,"objectAndLayerIdColorInstanced",void 0)},42162:(e,t,i)=>{i.d(t,{W:()=>n});var r=i(16878);function n(e){e.code.add(r.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}`),e.code.add(r.H`const vec4 RGBA_TO_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgbaTofloat(vec4 rgba) {
return dot(rgba, RGBA_TO_FLOAT_FACTORS);
}`),e.code.add(r.H`const vec4 uninterpolatedRGBAToFloatFactors = vec4(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBAToFloat(vec4 rgba) {
return (dot(round(rgba * 255.0), uninterpolatedRGBAToFloatFactors) - 0.5) * 2.0;
}`)}},42402:(e,t,i)=>{i.d(t,{Cz:()=>l,DZ:()=>p,PV:()=>d,sS:()=>h,vO:()=>s});var r=i(18287),n=i(92156),o=i(64177),a=i(77936);const s=64,l=s/2,c=l/5,d=s/c,p=.25;function h(e,t){const i=(0,r.m9)(e,s,l,c),d=new a.R;return d.internalFormat=n.Ab.RGBA,d.width=s,d.height=s,d.wrapMode=n.pF.CLAMP_TO_EDGE,new o.g(t,d,i)}},43286:(e,t,i)=>{i.d(t,{f:()=>n});var r=i(31923);class n{constructor(e,t,i){this._createTexture=e,this._parametersKey=t,this._repository=new Map,this._orphanCache=i.newCache(`procedural-texture-repository:${(0,r.c)()}`,(e=>e.dispose()))}destroy(){for(const{texture:e}of this._repository.values())e.dispose();this._repository.clear(),this._orphanCache.destroy()}swap(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const i=this._acquire(e);return this.release(t),i}release(e){if(null==e)return;const t=this._parametersKey(e),i=this._repository.get(t);if(i&&(i.refCount--,0===i.refCount)){this._repository.delete(t);const{texture:e}=i;this._orphanCache.put(t,e)}}_acquire(e){if(null==e)return null;const t=this._parametersKey(e),i=this._repository.get(t);if(i)return i.refCount++,i.texture;const r=this._orphanCache.pop(t)??this._createTexture(e),n=new o(r);return this._repository.set(t,n),r}}class o{constructor(e){this.texture=e,this.refCount=1}}},56092:(e,t,i)=>{i.d(t,{R:()=>x,b:()=>E,r:()=>C});var r=i(96236),n=i(75304),o=i(78731),a=i(21703),s=i(69804),l=i(82905),c=i(11833),d=i(61535),p=i(66652),h=i(35490),u=i(15025),f=i(34927),v=i(94409),m=i(4241),g=i(42403),S=i(16878),_=i(38950),T=i(22131),y=i(93570),b=i(14480),A=i(33332),O=i(8118),R=i(12621);const C=1;function E(e){const t=new O.N5,{attributes:i,varyings:E,vertex:x,fragment:L}=t,{applyMarkerOffset:D,draped:P,output:N,capType:w,stippleEnabled:I,falloffEnabled:F,roundJoins:W,wireframe:z,innerColorEnabled:M}=e;t.include(c.p),t.include(a.s,e),t.include(s.q,e),t.include(o.g,e),t.include(d.Z,e);const j=D&&!P;j&&(x.uniforms.add(new g.m("markerScale",(e=>e.markerScale))),t.include(l.r,{space:y.lM.World})),(0,h.NB)(x,e),x.uniforms.add(new _.F("inverseProjectionMatrix",(e=>e.camera.inverseProjectionMatrix)),new u.E("nearFar",(e=>e.camera.nearFar)),new g.m("miterLimit",(e=>"miter"!==e.join?0:e.miterLimit)),new f.I("viewport",(e=>e.camera.fullViewport))),x.constants.add("LARGE_HALF_FLOAT","float",65500),i.add(T.r.POSITION,"vec3"),i.add(T.r.PREVPOSITION,"vec3"),i.add(T.r.NEXTPOSITION,"vec3"),i.add(T.r.SUBDIVISIONFACTOR,"float"),i.add(T.r.UV0,"vec2"),E.add("vColor","vec4"),E.add("vpos","vec3"),E.add("vLineDistance","float"),E.add("vLineWidth","float");const U=I;U&&E.add("vLineSizeInv","float");const H=w===A.x.ROUND,V=I&&H,B=F||V;B&&E.add("vLineDistanceNorm","float"),H&&(E.add("vSegmentSDF","float"),E.add("vReverseSegmentSDF","float")),x.code.add(S.H`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),x.code.add(S.H`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),x.code.add(S.H`void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
float vnp = nearFar[0] * 0.99;
if(pos.z > -nearFar[0]) {
if (!isStartVertex) {
if(prev.z < -nearFar[0]) {
pos = mix(prev, pos, interp(vnp, prev, pos));
next = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
} else {
if(next.z < -nearFar[0]) {
pos = mix(pos, next, interp(vnp, pos, next));
prev = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
}
} else {
if (prev.z > -nearFar[0]) {
prev = mix(pos, prev, interp(vnp, pos, prev));
}
if (next.z > -nearFar[0]) {
next = mix(next, pos, interp(vnp, next, pos));
}
}
forwardViewPosDepth(pos.xyz);
pos = projectAndScale(pos);
next = projectAndScale(next);
prev = projectAndScale(prev);
}`),(0,h.Nz)(x),x.constants.add("aaWidth","float",I?0:1).main.add(S.H`
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;
      float lineSize = getSize();

      if (lineSize < 1.0) {
        coverage = lineSize; // convert sub-pixel coverage to alpha
        lineSize = 1.0;
      }
      lineSize += aaWidth;

      float lineWidth = lineSize * pixelRatio;
      vLineWidth = lineWidth;
      ${U?S.H`vLineSizeInv = 1.0 / lineSize;`:""}

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);
  `),j&&x.main.add(S.H`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`),x.main.add(S.H`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`),(I||H)&&x.main.add(S.H`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${H?S.H`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),x.main.add(S.H`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = perpendicular(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),W?x.main.add(S.H`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = perpendicular(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = perpendicular(endDir);

        float factor = ${I?S.H`min(1.0, subdivisionFactor * ${S.H.float((C+2)/(C+1))})`:S.H`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):x.main.add(S.H`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = perpendicular(joinDisplacementDir);`);const k=w!==A.x.BUTT;return x.main.add(S.H`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = perpendicular(joinDisplacementDir);

      ${k?S.H`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),x.main.add(S.H`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = sign(uv0.y) * pos.w;

    vLineDistance =  lineWidth * lineDistNorm;
    ${B?S.H`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),H&&x.main.add(S.H`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),I&&(P?x.uniforms.add(new m.U("worldToScreenRatio",(e=>1/e.screenToPCSRatio))):x.main.add(S.H`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),x.main.add(S.H`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),P?x.main.add(S.H`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):x.main.add(S.H`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),x.uniforms.add(new g.m("stipplePatternPixelSize",(e=>(0,s.h)(e)))),x.main.add(S.H`float patternLength = lineSize * stipplePatternPixelSize;
vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);
if (segmentLengthScreenDouble >= 0.001) {
vec2 stippleDisplacement = pos.xy - segmentOrigin;
float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);
vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
}
vStippleDistanceLimits *= pos.w;
vStippleDistance *= pos.w;
vStippleDistanceLimits = isJoin ?
vStippleDistanceLimits :
isStartVertex ?
vec2(-1e34, vStippleDistanceLimits.y) :
vec2(vStippleDistanceLimits.x, 1e34);`)),x.main.add(S.H`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${z&&!P?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),t.fragment.include(n.HQ,e),t.include(b.z,e),L.include(p.a),L.main.add(S.H`discardBySlice(vpos);
discardByTerrainDepth();`),z?L.main.add(S.H`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(H&&L.main.add(S.H`
        float sdf = min(vSegmentSDF, vReverseSegmentSDF);
        vec2 fragmentPosition = vec2(
          min(sdf, 0.0),
          vLineDistance
        ) * gl_FragCoord.w;

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${S.H.float(R.Q)}) {
          discard;
        }
      `),V?L.main.add(S.H`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${S.H.float(R.Q)}, stippleCoverage);
      `):L.main.add(S.H`float stippleAlpha = getStippleAlpha();`),N!==r.V.ObjectAndLayerIdColor&&L.main.add(S.H`discardByStippleAlpha(stippleAlpha, ${S.H.float(R.Q)});`),L.uniforms.add(new v.E("intrinsicColor",(e=>e.color))),L.main.add(S.H`vec4 color = intrinsicColor * vColor;`),M&&(L.uniforms.add(new v.E("innerColor",(e=>e.innerColor??e.color)),new g.m("innerWidth",((e,t)=>e.innerWidth*t.camera.pixelRatio))),L.main.add(S.H`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),L.main.add(S.H`vec4 finalColor = blendStipple(color, stippleAlpha);`),F&&(L.uniforms.add(new g.m("falloff",(e=>e.falloff))),L.main.add(S.H`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`)),I||L.main.add(S.H`float featherStartDistance = max(vLineWidth - 2.0, 0.0);
float value = abs(vLineDistance) * gl_FragCoord.w;
float feather = (value - featherStartDistance) / (vLineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`)),L.main.add(S.H`outputColorHighlightOID(finalColor, vpos);`),t}const x=Object.freeze(Object.defineProperty({__proto__:null,build:E,ribbonlineNumRoundJoinSubdivisions:C},Symbol.toStringTag,{value:"Module"}))},67650:(e,t,i)=>{i.d(t,{GQ:()=>p,GV:()=>h,Ry:()=>l});var r=i(15173),n=i(43286),o=i(92156),a=i(64177),s=i(77936);function l(e,t){return new n.f((t=>{const{encodedData:i,textureSize:r}=c(t),n=new s.R;return n.internalFormat=o.Ab.RGBA,n.width=r,n.height=1,n.wrapMode=o.pF.REPEAT,new a.g(e,n,i)}),(e=>`${e.pattern.join(",")}-r${e.pixelRatio}`),t)}function c(e){const t=d(e),i=1/e.pixelRatio,n=p(e),o=h(e),a=(Math.floor(.5*(o-1))+.5)*i,s=[];let l=1;for(const r of t){for(let e=0;e<r;e++){const t=l*(Math.min(e,r-1-e)+.5)*i/a*.5+.5;s.push(t)}l=-l}const c=Math.round(t[0]/2),u=[...s.slice(c),...s.slice(0,c)],f=new Uint8Array(4*n);let v=0;for(const d of u)(0,r.U)(d,f,v),v+=4;return{encodedData:f,textureSize:n}}function d(e){return e.pattern.map((t=>Math.round(t*e.pixelRatio)))}function p(e){if(null==e)return 1;const t=d(e);return Math.floor(t.reduce(((e,t)=>e+t)))}function h(e){return d(e).reduce(((e,t)=>Math.max(e,t)))}},69804:(e,t,i)=>{i.d(t,{q:()=>f,h:()=>v});var r=i(42162),n=i(35490),o=i(94409),a=i(4241),s=i(42403),l=i(16878),c=i(67058),d=i(67650),p=i(60548),h=i(24646);const u=(0,h.vt)();function f(e,t){if(!t.stippleEnabled)return void e.fragment.code.add(l.H`float getStippleAlpha() { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);const i=!(t.draped&&t.stipplePreferContinuous),{vertex:f,fragment:g}=e;g.include(r.W),t.draped||((0,n.yu)(f,t),f.uniforms.add(new a.U("worldToScreenPerDistanceRatio",(e=>{let{camera:t}=e;return 1/t.perScreenPixelRatio}))).code.add(l.H`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),e.varyings.add("vStippleDistance","float"),e.varyings.add("vStippleDistanceLimits","vec2"),e.varyings.add("vStipplePatternStretch","float"),f.code.add(l.H`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${l.H.float(m)};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),f.code.add(l.H`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),f.code.add(l.H`
    if (segmentLengthPseudoScreen >= ${i?"patternLength":"1e4"}) {
  `),(0,n.Nz)(f),f.code.add(l.H`float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
float segmentLengthScreenRounded = flooredRepetitions * patternLength;
float stretch = repetitions / flooredRepetitions;
vStipplePatternStretch = max(0.75, stretch);
return vec2(0.0, segmentLengthScreenRounded);
}
return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
}`),g.uniforms.add(new c.N("stipplePatternTexture",(e=>e.stippleTexture)),new s.m("stipplePatternSDFNormalizer",(e=>function(e){return e?(Math.floor(.5*((0,d.GV)(e)-1))+.5)/e.pixelRatio:1}(e.stipplePattern))),new s.m("stipplePatternPixelSizeInv",(e=>1/v(e)))),t.stippleOffColorEnabled&&g.uniforms.add(new o.E("stippleOffColor",(e=>{return null==(t=e.stippleOffColor)?h.uY:4===t.length?t:(0,p.s)(u,t[0],t[1],t[2],1);var t}))),g.code.add(l.H`float getStippleSDF(out bool isClamped) {
float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv * vLineSizeInv;
u = fract(u);
float encodedSDF = rgbaTofloat(texture(stipplePatternTexture, vec2(u, 0.5)));
float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;
return (sdf - 0.5) * vStipplePatternStretch + 0.5;
}
float getStippleSDF() {
bool ignored;
return getStippleSDF(ignored);
}
float getStippleAlpha() {
bool isClamped;
float stippleSDF = getStippleSDF(isClamped);
float antiAliasedResult = clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);
return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
}`),g.code.add(l.H`
    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${(0,l.If)(!t.stippleOffColorEnabled,"if (stippleAlpha < threshold) { discard; }")}
    }

    vec4 blendStipple(vec4 color, float stippleAlpha) {
      return ${t.stippleOffColorEnabled?"mix(color, stippleOffColor, stippleAlpha)":"vec4(color.rgb, color.a * stippleAlpha)"};
    }
  `)}function v(e){const t=e.stipplePattern;return t?(0,d.GQ)(e.stipplePattern)/t.pixelRatio:1}const m=.4},71602:(e,t,i)=>{var r;i.d(t,{q:()=>r}),function(e){e[e.ASYNC=0]="ASYNC",e[e.SYNC=1]="SYNC"}(r||(r={}))},82905:(e,t,i)=>{i.d(t,{r:()=>l});var r=i(42402),n=i(35490),o=i(4241),a=i(16878),s=i(93570);function l(e,t){const i=e.vertex;(0,n.Nz)(i),null==i.uniforms.get("markerScale")&&i.constants.add("markerScale","float",1),i.constants.add("markerSizePerLineWidth","float",r.PV).code.add(a.H`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),t.space===s.lM.World&&(i.constants.add("maxSegmentLengthFraction","float",.45),i.uniforms.add(new o.U("perRenderPixelRatio",(e=>e.camera.perRenderPixelRatio))),i.code.add(a.H`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}
float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}`))}},93570:(e,t,i)=>{i.d(t,{Dt:()=>p,kJ:()=>n,lM:()=>r});var r,n,o,a=i(93800),s=i(69261),l=i(82606),c=i(21484),d=i(51448);(o=r||(r={}))[o.Draped=0]="Draped",o[o.Screen=1]="Screen",o[o.World=2]="World",o[o.COUNT=3]="COUNT",function(e){e[e.Center=0]="Center",e[e.Tip=1]="Tip",e[e.COUNT=2]="COUNT"}(n||(n={}));class p extends d.E{constructor(){super(...arguments),this.space=r.Screen,this.anchor=n.Center,this.occluder=!1,this.writeDepth=!1,this.hideOnShortSegments=!1,this.hasCap=!1,this.hasTip=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.textureCoordinateType=s.I.None,this.emissionSource=l.ZX.None,this.discardInvisibleFragments=!0,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0,this.objectAndLayerIdColorInstanced=!1}get draped(){return this.space===r.Draped}}(0,a._)([(0,c.W)({count:r.COUNT})],p.prototype,"space",void 0),(0,a._)([(0,c.W)({count:n.COUNT})],p.prototype,"anchor",void 0),(0,a._)([(0,c.W)()],p.prototype,"occluder",void 0),(0,a._)([(0,c.W)()],p.prototype,"writeDepth",void 0),(0,a._)([(0,c.W)()],p.prototype,"hideOnShortSegments",void 0),(0,a._)([(0,c.W)()],p.prototype,"hasCap",void 0),(0,a._)([(0,c.W)()],p.prototype,"hasTip",void 0),(0,a._)([(0,c.W)()],p.prototype,"vvSize",void 0),(0,a._)([(0,c.W)()],p.prototype,"vvColor",void 0),(0,a._)([(0,c.W)()],p.prototype,"vvOpacity",void 0),(0,a._)([(0,c.W)()],p.prototype,"hasOccludees",void 0),(0,a._)([(0,c.W)()],p.prototype,"terrainDepthTest",void 0),(0,a._)([(0,c.W)()],p.prototype,"cullAboveTerrain",void 0)}}]);