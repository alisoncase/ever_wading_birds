"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[85090],{28113:(e,t,r)=>{r.d(t,{X:()=>R});var s=r(93800),i=r(6946),o=r(93633),a=r(48602),n=(r(21265),r(50925),r(14746),r(75269)),c=r(77297),h=r(69473),d=r(71602);class l{constructor(e){this._resourceFactory=e,this._resources=null,this._visible=!0,this._attached=!1,this._renderGroup=c.O7.Outline}destroy(){this._destroyResources()}get resources(){return null!=this._resources?this._resources.external:null}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this._syncGeometriesToRenderer())}get attached(){return this._attached}set attached(e){e!==this._attached&&(this._attached=e,this._createOrDestroyResources())}get renderGroup(){return this._renderGroup}set renderGroup(e){this._renderGroup=e;const t=this._resources?.layerView;t&&(t.renderGroup=e)}recreate(){this.attached&&this._createResources()}recreateGeometry(){this._resourceFactory.recreateGeometry?null!=this._resources&&(this._ensureRenderGeometriesRemoved(),this._resourceFactory.recreateGeometry(this._resources.external),this._syncGeometriesToRenderer()):this.recreate()}_createOrDestroyResources(){this._attached?null==this._resources&&this._createResources():this._destroyResources()}_createResources(){this._destroyResources();const e=this._resourceFactory.createResources(),t=new u({view:this._resourceFactory.view,renderGroup:this._renderGroup}),r=this._resourceFactory.view.basemapTerrain?.overlayManager;this._resources={layerView:new u({view:this._resourceFactory.view,renderGroup:this._renderGroup}),external:e,geometriesAdded:!1},r&&(this._resources.drapeSourceRenderer=r.registerGeometryDrapeSource(t)),this._syncGeometriesToRenderer()}_destroyResources(){if(null==this._resources)return;this._ensureRenderGeometriesRemoved();const e=this._resourceFactory.view.basemapTerrain?.overlayManager;e&&e.unregisterDrapeSource(this._resources.layerView),this._resourceFactory.destroyResources(this._resources.external),this._resources=null}_syncGeometriesToRenderer(){this._visible?this._ensureRenderGeometriesAdded():this._ensureRenderGeometriesRemoved()}_ensureRenderGeometriesRemoved(){null!=this._resources?.drapeSourceRenderer&&this._resources.geometriesAdded&&(this._resources.drapeSourceRenderer.removeGeometries(this._resources.external.geometries,h.q.UPDATE),this._resources.geometriesAdded=!1)}_ensureRenderGeometriesAdded(){null!=this._resources?.drapeSourceRenderer&&(this._resources.geometriesAdded||(this._resources.drapeSourceRenderer.addGeometries(this._resources.external.geometries,h.q.UPDATE),this._resources.geometriesAdded=!0))}}let u=class extends(o.A.IdentifiableMixin(i.default)){constructor(e){super(e),this.drapeSourceType=c.Om.Features,this.updatePolicy=d.q.SYNC,this.renderGroup=c.O7.Outline}};(0,s._)([(0,a.MZ)({constructOnly:!0})],u.prototype,"view",void 0),(0,s._)([(0,a.MZ)({readOnly:!0})],u.prototype,"drapeSourceType",void 0),(0,s._)([(0,a.MZ)()],u.prototype,"renderGroup",void 0),u=(0,s._)([(0,n.$)("esri.views.3d.interactive.visualElements.DrapedVisualElementResources")],u);var _=r(49979),p=r(79953),y=r(69291),m=r(8461),f=r(20196);class b{constructor(e){this._resourceFactory=e,this._resources=null,this._visible=!0,this._attached=!1}destroy(){this._destroyResources()}get object(){return null!=this._resources?this._resources.object:null}get resources(){return null!=this._resources?this._resources.external:null}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this._syncVisible())}get attached(){return this._attached}set attached(e){e!==this._attached&&(this._attached=e,this._createOrDestroyResources())}recreate(){this.attached&&this._createResources()}recreateGeometry(){if(!this._resourceFactory.recreateGeometry)return void this.recreate();const e=this._resourceFactory.view._stage;if(null==this._resources||!e)return;const t=this._resources.object;this._resources.external.forEach((t=>{t.type!==y.X.Mesh&&t.type!==y.X.Line&&t.type!==y.X.Point||e.remove(t)})),t.removeAllGeometries(),this._resourceFactory.recreateGeometry(this._resources.external,t,this._resources.layer),this._resources.external.forEach((t=>{t.type!==y.X.Mesh&&t.type!==y.X.Line&&t.type!==y.X.Point||e.add(t)}))}_createOrDestroyResources(){this._attached?this._resources||this._createResources():this._destroyResources()}_createResources(){this._destroyResources();const e=this._resourceFactory,t=e.view,r=t._stage;if(!r)return;const s=new f.x(r,{pickable:!1,updatePolicy:d.q.SYNC}),i=new m.B({castShadow:!1}),o=e.createResources(i,s);o.forEach((e=>{r.add(e),e.type===y.X.Texture&&e.load(r.renderView.renderingContext)})),r.add(i),s.add(i);const a=e.cameraChanged,n=a?(0,p.watch)((()=>t.state.camera),(e=>a(e)),p.initial):null;this._resources={layer:s,object:i,external:o,cameraHandle:n},this._syncVisible()}_destroyResources(){if(null==this._resources)return;const e=this._resourceFactory.view._stage;e&&(e.remove(this._resources.object),this._resources.layer.destroy(),this._resources.external.forEach((t=>{e.remove(t),t.type===y.X.Texture&&t.unload()}))),this._resources.object.dispose(),this._resources.cameraHandle?.remove(),this._resourceFactory.destroyResources(this._resources.external),this._resources=null}_syncVisible(){null!=this._resources&&(this._resources.object.visible=this._visible)}}class R extends _.B{constructor(e){super(e),this._isDraped=!1,this.object3dResources=new b(this.createObject3DResourceFactory(e.view)),this.drapedResources=new l(this.createDrapedResourceFactory(e.view)),this.isDraped=e.isDraped??!1}get isDraped(){return this._isDraped}set isDraped(e){e!==this._isDraped&&(this._isDraped=e,this.object3dResources.attached=this.attached&&!e,this.drapedResources.attached=this.attached&&e)}get renderGroup(){return this.drapedResources.renderGroup}set renderGroup(e){this.drapedResources.renderGroup=e}createResources(){this.object3dResources.attached=!this._isDraped,this.drapedResources.attached=this._isDraped}destroyResources(){this.object3dResources.attached=!1,this.drapedResources.attached=!1}recreate(){this.object3dResources.recreate(),this.drapedResources.recreate()}recreateGeometry(){this.object3dResources.recreateGeometry(),this.drapedResources.recreateGeometry()}destroy(){this.object3dResources.destroy(),this.drapedResources.destroy(),super.destroy()}updateVisibility(e){this.object3dResources.visible=e,this.drapedResources.visible=e}}},85090:(e,t,r)=>{r.d(t,{A:()=>O,U:()=>R});r(21265);var s=r(89227),i=r(28473),o=r(60548),a=r(24646),n=r(1700),c=r(12096),h=r(1277),d=r(91102),l=r(28113),u=r(48261),_=r(84654),p=r(86580),y=r(60984),m=r(10625),f=r(22131),b=r(23664);class R extends l.X{constructor(e){super(e),this._ray=(0,d.vt)(),this._isWorldDown=!1,this._start=(0,i.vt)(),this._end=(0,i.fA)(1,0,0),this._width=1,this._color=(0,a.fA)(1,0,1,1),this._polygonOffset=!1,this._writeDepthEnabled=!0,this._innerWidth=0,this._innerColor=(0,a.fA)(1,1,1,1),this._stipplePattern=null,this._stippleOffColor=null,this._stipplePreferContinuous=!0,this._falloff=0,this._extensionType=O.LINE,this._laserlineStyle=null,this._laserlineEnabled=!1,this._renderOccluded=y.m$.OccludeAndTransparent,this._fadedExtensions=E,this._laserline=new u.o({view:this.view,isDecoration:e.isDecoration}),this.applyProperties(e)}destroy(){this._laserline.destroy(),super.destroy()}createObject3DResourceFactory(e){return{view:e,createResources:e=>this._createObject3DResources(e),destroyResources:g,recreateGeometry:(e,t)=>this._recreateObject3DGeometry(e,t),cameraChanged:()=>this._updateGeometry()}}createDrapedResourceFactory(e){return{view:e,createResources:()=>this._createDrapedResources(),destroyResources:g,recreateGeometry:e=>this._recreateDrapedGeometry(e)}}updateVisibility(e){super.updateVisibility(e),this._laserline.visible=e}onAttachedChange(){this._laserline.attached=this._laserlineAttached}setStartEndFromWorldDownAtLocation(e){this._isWorldDown=!0,(0,s.c)(this._start,e),this.view.renderCoordsHelper.worldUpAtPosition(e,this._end),(0,s.d)(this._end,e,this._end),(0,d.Cr)(this._start,this._end,this._ray),this._updateGeometry()}get start(){return this._start}set start(e){this._isWorldDown=!1,(0,s.p)(this._start,e)||((0,s.c)(this._start,e),(0,d.Cr)(this._start,this._end,this._ray),this._updateGeometry())}get end(){return this._end}set end(e){this._isWorldDown=!1,(0,s.p)(this._end,e)||((0,s.c)(this._end,e),(0,d.Cr)(this._start,this._end,this._ray),this._updateGeometry())}get width(){return this._width}set width(e){e!==this._width&&(this._width=e,this._updateMaterial())}get color(){return this._color}set color(e){(0,o.a)(e,this._color)||((0,o.c)(this._color,e),this._updateMaterial())}get polygonOffset(){return this._polygonOffset}set polygonOffset(e){e!==this._polygonOffset&&(this._polygonOffset=e,this._updateMaterial())}get writeDepthEnabled(){return this._writeDepthEnabled}set writeDepthEnabled(e){this._writeDepthEnabled!==e&&(this._writeDepthEnabled=e,this._updateMaterial())}get innerWidth(){return this._innerWidth}set innerWidth(e){e!==this._innerWidth&&(this._innerWidth=e,this._updateMaterial())}get innerColor(){return this._innerColor}set innerColor(e){(0,o.a)(e,this._innerColor)||((0,o.c)(this._innerColor,e),this._updateMaterial())}get stipplePattern(){return this._stipplePattern}set stipplePattern(e){const t=null!=e!=(null!=this._stipplePattern);this._stipplePattern=e,t?this.recreate():this._updateMaterial()}get stippleOffColor(){return this._stippleOffColor}set stippleOffColor(e){null!=e&&null!=this._stippleOffColor&&(0,o.a)(e,this._stippleOffColor)||(this._stippleOffColor=null!=e?(0,a.o8)(e):null,this._updateMaterial())}get stipplePreferContinuous(){return this._stipplePreferContinuous}set stipplePreferContinuous(e){e!==this._stipplePreferContinuous&&(this._stipplePreferContinuous=e,this._updateMaterial())}get falloff(){return this._falloff}set falloff(e){e!==this._falloff&&(this._falloff=e,this._updateMaterial())}get extensionType(){return this._extensionType}set extensionType(e){e!==this._extensionType&&(this._extensionType=e,this.recreateGeometry())}get _laserlineAttached(){return this._laserlineEnabled&&null!=this._laserlineStyle&&this.attached&&!this.isDraped}get laserlineStyle(){return this._laserlineStyle}set laserlineStyle(e){this._laserlineStyle=e,this._laserline.attached=this._laserlineAttached,null!=e&&(this._laserline.style=e)}get laserlineEnabled(){return this._laserlineEnabled}set laserlineEnabled(e){this._laserlineEnabled!==e&&(this._laserlineEnabled=e,this._laserline.attached=this._laserlineAttached)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}get _normalizedRenderOccluded(){return this.isDraped&&this._renderOccluded===y.m$.OccludeAndTransparentStencil?y.m$.OccludeAndTransparent:this._renderOccluded}get fadedExtensions(){return this._fadedExtensions}set fadedExtensions(e){this._fadedExtensions=e??E,this.recreateGeometry()}_updateMaterial(){const{materialParameters:e}=this;this.object3dResources.resources?.material.setParameters(e),this.drapedResources.resources?.material.setParameters(e)}get materialParameters(){return{width:this._width,color:this._color,stippleOffColor:this._stippleOffColor,stipplePattern:this._stipplePattern,stipplePreferContinuous:this._stipplePreferContinuous,innerWidth:this._innerWidth,innerColor:this._innerColor,falloff:this._falloff,hasPolygonOffset:this._polygonOffset,renderOccluded:this._normalizedRenderOccluded,isDecoration:this.isDecoration,writeDepth:this._writeDepthEnabled}}_createObject3DResources(e){const t=new b.W(this.materialParameters),r=new Array;return this._createObject3DGeometry(t,e,r),{material:t,geometries:r,forEach:e=>{e(t),r.forEach(e)}}}_recreateObject3DGeometry(e,t){e.geometries.length=0,this._createObject3DGeometry(e.material,t,e.geometries)}_createObject3DGeometry(e,t,r){const s=this._createGeometry(e);r.push(s),t.addGeometry(s),this._updateVerticesObject3D(t)}_createDrapedResources(){const e=new b.W(this.materialParameters);return{material:e,geometries:[this._createDrapedGeometry(e)]}}_recreateDrapedGeometry(e){e.geometries=[this._createDrapedGeometry(e.material)]}_createDrapedGeometry(e){const t=this._createGeometry(e);return this._updateVerticesDraped(t),new m.$(t)}_createGeometry(e){const t=this.extensionType===O.FADED,r=t?[(0,i.vt)(),(0,i.vt)(),(0,i.vt)(),(0,i.vt)()]:[(0,i.vt)(),(0,i.vt)()];return(0,p.Z8)(e,r,null,t?[1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0]:null)}_updateGeometry(){if(this.isDraped)this.drapedResources.recreateGeometry();else{const e=this.object3dResources.object;e&&this._updateVerticesObject3D(e)}}_updateVerticesObject3D(e){const t=this._lineSegment;this._updateVertexAttributesObject3D(e,t),this._laserline.intersectsLine=t}_updateVerticesDraped(e){this._updateVertexAttributesDraped(e,this._lineSegment)}get _lineSegment(){return this._extensionType===O.FADED?this._updateLineSegmentFinite(G):this._updateLineSegmentInfinite(this._extensionType,G)}_updateLineSegmentFinite(e){return(0,h.Cr)(this._start,this._end,e)}_updateLineSegmentInfinite(e,t){const r=this.view.state.camera;switch((0,n.$e)(this._ray,v),e){case O.LINE:v.c0=-Number.MAX_VALUE;break;case O.RAY:case O.GROUND_RAY:{const e=this._ray.origin,t=this.view.elevationProvider.getElevation(e[0],e[1],e[2],this.view.renderCoordsHelper.spatialReference,"ground")??0,r=this.view.renderCoordsHelper.getAltitude(e);this._isWorldDown&&r<t&&(0,s.v)(v.ray.direction,v.ray.direction),this._extensionType===O.GROUND_RAY&&null!=t&&(v.c1=Math.abs(r-t));break}}if(!(0,c.ig)(r.frustum,v))return this._updateLineSegmentFinite(t);const i=(0,n.j1)(v,D),o=(0,n.mO)(v,w);return(0,h.Cr)(i,o,t)}_updateVertexAttributesObject3D(e,t){const r=e.geometries[0].getMutableAttribute(f.r.POSITION)?.data;if(!r)return;let s=0;for(const i of this._lineVertices(t))r[s++]=i[0],r[s++]=i[1],r[s++]=i[2];e.geometryVertexAttributeUpdated(e.geometries[0],f.r.POSITION)}_updateVertexAttributesDraped(e,t){const r=e.getMutableAttribute(f.r.POSITION)?.data;if(!r)return;let s=0;for(const i of this._lineVertices(t))r[s++]=i[0],r[s++]=i[1],r[s++]=_.bi;e.invalidateBoundingInfo()}*_lineVertices(e){this.extensionType===O.FADED?(yield(0,h.sd)(e,-this.fadedExtensions.start,D),yield(0,h.sd)(e,0,D),yield(0,h.sd)(e,1,D),yield(0,h.sd)(e,1+this.fadedExtensions.end,D)):(yield(0,h.sd)(e,0,D),yield(0,h.sd)(e,1,D))}}function g(e){e.geometries=[]}const v=(0,n.vt)(),D=(0,i.vt)(),w=(0,i.vt)(),G=(0,h.vt)();var O,A;(A=O||(O={}))[A.LINE=0]="LINE",A[A.RAY=1]="RAY",A[A.GROUND_RAY=2]="GROUND_RAY",A[A.FADED=3]="FADED";const x=1/3,E={start:x,end:x}}}]);