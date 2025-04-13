"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[14524,14967,19333,47381,55928,69762,86434,92143],{10993:(e,t,n)=>{n.d(t,{CI:()=>a,aI:()=>u,fk:()=>l});n(21265);var r=n(64682),i=n(70576);function o(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++){const r=e[n],i=t[n];if(r.length!==i.length)return!1;for(let e=0;e<r.length;e++)if(r[e]!==i[e])return!1}return!0}function s(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(!o(e[n],t[n]))return!1;return!0}function a(e,t){return e===t||null!=e&&null!=t&&(0,i.aI)(e.spatialReference,t.spatialReference)&&e.x===t.x&&e.y===t.y&&e.z===t.z&&e.m===t.m}function l(e,t,n){return e===t||null!=e&&null!=t&&(0,i.aI)(e.spatialReference,t.spatialReference)&&(0,r.Sp)(e.x,t.x,n)&&(0,r.Sp)(e.y,t.y,n)&&(0,r.Sp)(e.z??0,t.z??0,n)&&(0,r.Sp)(e.m??0,t.m??0,n)}function d(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.type!==t.type)return!1;switch(e.type){case"point":return a(e,t);case"extent":return function(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&!!(0,i.aI)(e.spatialReference,t.spatialReference)&&e.xmin===t.xmin&&e.ymin===t.ymin&&e.zmin===t.zmin&&e.xmax===t.xmax&&e.ymax===t.ymax&&e.zmax===t.zmax}(e,t);case"polyline":return function(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&!!(0,i.aI)(e.spatialReference,t.spatialReference)&&s(e.paths,t.paths)}(e,t);case"polygon":return function(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&!!(0,i.aI)(e.spatialReference,t.spatialReference)&&s(e.rings,t.rings)}(e,t);case"multipoint":return function(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&!!(0,i.aI)(e.spatialReference,t.spatialReference)&&o(e.points,t.points)}(e,t);case"mesh":return!1;default:return}}function u(e,t){return e===t||null!=e&&null!=t&&e.objectId===t.objectId&&!!d(e.geometry,t.geometry)&&!!function(e,t){if(e===t)return!0;if(!e||!t)return!1;const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n)if(e[i]!==t[i])return!1;return!0}(e.attributes,t.attributes)}},14967:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r,i=n(93800),o=n(85715),s=n(19455),a=n(48602),l=(n(21265),n(50925),n(14746),n(47332)),d=n(75269);let u=r=class extends(o.A.ClonableMixin(s.A)){constructor(e){super(e),this.type="georeferenced",this.origin=null}};u.absolute=new r,(0,i._)([(0,l.e)({georeferenced:"georeferenced"},{readOnly:!0})],u.prototype,"type",void 0),(0,i._)([(0,a.MZ)({type:[Number],nonNullable:!1,json:{write:!0}})],u.prototype,"origin",void 0),u=r=(0,i._)([(0,d.$)("esri.geometry.support.MeshGeoreferencedVertexSpace")],u);const h=u},18162:(e,t,n)=>{n.d(t,{F:()=>o});n(96913);var r=n(93321),i=n(31183);function o(e,t,n,r,o){return!(null==t||null==r||e.length<2)&&(s.x=e[0],s.y=e[1],s.z=e[2],s.spatialReference=t,(0,i.g)(s,n,r,o))}const s=(0,n(62240).T)(0,0,0,r.default.WGS84)},19103:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r=n(93800),i=n(48602),o=(n(21265),n(50925),n(14746),n(75269)),s=n(75400),a=n(56347),l=n(49282),d=n(82959),u=n(94761),h=n(51232),c=n(4542),p=n(53605);let v=class extends a.default{constructor(e){super(e),this._panEnabled=!1,this._popVertexOnPointerMove=!1,this._addVertexOnPointerUp=!1,this._drawTool=null,this.mode=l.t}initialize(){this._addViewHandles(),"3d"===this.view.type&&this._addDrawTool()}destroy(){this._removeDrawTool(),this.emit("destroy")}get _clickEnabled(){return"click"===this.mode||"hybrid"===this.mode}get _dragEnabled(){return"freehand"===this.mode||"hybrid"===this.mode}undo(){this._drawTool?this._drawTool.undo():(super.undo(),this.notifyChange("vertices"))}redo(){this._drawTool?this._drawTool.redo():(super.redo(),this.notifyChange("vertices"))}canUndo(){return this._drawTool?.canUndo()??super.canUndo()}canRedo(){return this._drawTool?.canRedo()??super.canRedo()}complete(){this._completeDrawing()}_addViewHandles(){this._addViewHandles2DOnly(),this.addHandles([this.view.on("key-down",(e=>{const{key:t,repeat:n}=e;t!==c.NE.vertexAdd||n?t!==c.NE.complete||n?t!==c.NE.undo||this.interactiveUndoDisabled||n?t!==c.NE.redo||this.interactiveUndoDisabled||n||(e.stopPropagation(),this.redo()):(e.stopPropagation(),this.undo()):(e.stopPropagation(),this._drawCompleteHandler(e)):(e.stopPropagation(),this._handleVertexAddKey(e))}),h.o.TOOL)])}_addViewHandles2DOnly(){"2d"===this.view.type&&(this.addHandles([this.view.on("click",(e=>{e.stopPropagation()}),h.o.TOOL),this.view.on("pointer-down",(e=>{this._shouldHandlePointerEvent(e)&&!this._panEnabled&&(this._abortSnapping(),this._activePointerId=e.pointerId,this._addVertexOnPointerUp=!0,this._cursorScreenPoint=(0,p.ZV)(e),"touch"===e.pointerType&&this._updateCursor())}),h.o.TOOL),this.view.on("pointer-move",(e=>{this._popVertexOnPointerMove&&(this.undo(),this._popVertexOnPointerMove=!1),this._abortSnapping(),this._cursorScreenPoint=(0,p.ZV)(e),"touch"!==e.pointerType&&this._updateCursor()}),h.o.TOOL),this.view.on("pointer-drag",(e=>{this._shouldHandlePointerEvent(e)&&(this._abortSnapping(),this._cursorScreenPoint=(0,p.ZV)(e),this._dragEnabled&&!this._panEnabled?this._vertexAddHandler(e):this._addVertexOnPointerUp=!1)}),h.o.TOOL),this.view.on("pointer-up",(e=>{if(this._shouldHandlePointerEvent(e))if(this._abortSnapping(),this._activePointerId=null,this._addVertexOnPointerUp){if(!this._clickEnabled)return 1===this.vertices.length&&this.vertices.pop(),void this._drawCompleteHandler(e);this._vertexAddHandler(e)}else{const t="touch"===e.pointerType;this._updateCursor(t)}}),h.o.TOOL),this.view.on("drag",(e=>{this._dragEnabled&&null!=this._activePointerId&&!this._panEnabled&&e.stopPropagation()}),h.o.TOOL),this.view.on("drag",["Shift"],(e=>{e.stopPropagation()}),h.o.TOOL),this.view.on("double-click",(e=>{e.stopPropagation(),this._drawCompleteHandler(e)}),h.o.TOOL),this.view.on("double-click",["Control"],(e=>{e.stopPropagation(),this._drawCompleteHandler(e)}),h.o.TOOL),this.view.on("key-down",(e=>{const{key:t,repeat:n}=e;t!==c.NE.pan||n||(e.stopPropagation(),this._panEnabled=!0)}),h.o.TOOL),this.view.on("key-up",(e=>{e.key===c.NE.pan&&(e.stopPropagation(),this._panEnabled=!1)}),h.o.TOOL)]),this._addUndoRedoHandles())}_handleVertexAddKey(e){this._drawTool?this._drawTool.drawOperation.commitStagedVertex():this._cursorScreenPoint&&(this._abortSnapping(),this._vertexAddHandler(e))}_addUndoRedoHandles(){this.addHandles([this._editGeometryOperations.on("vertex-remove",(e=>{if(this.notifyChange("vertices"),"undo"===e.operation){const t=[...this._committedVertices];null!=this._stagedVertex&&t.push(this._coordinateHelper.pointToArray(this._stagedVertex)),this.emit("undo",new u.NM(this.view,e.vertices[0].index,t))}})),this._editGeometryOperations.on("vertex-add",(e=>{if(this.notifyChange("vertices"),"apply"===e.operation){const e=this._committedVertices.length-1,t=new u.Sf(this.view,e,this.vertices);this.emit("vertex-add",t),t.defaultPrevented&&(this._popVertexOnPointerMove=!0)}else if("redo"===e.operation){const t=[...this._committedVertices];null!=this._stagedVertex&&t.push(this._coordinateHelper.pointToArray(this._stagedVertex)),this.emit("redo",new u.Sf(this.view,e.vertices[0].index,t))}}))])}_addDrawTool(){const e=new d.B({view:this.view,elevationInfo:this.elevationInfo,hasZ:this.hasZ,geometryType:"polyline",mode:this.mode});this._drawTool=e,this.view.addAndActivateTool(e),this.addHandles([e.on("vertex-add",(t=>{if(1!==t.vertices.length)return;const{view:n}=this,r=t.vertices[0].vertexIndex,i=e.getVertexCoords();this.emit("vertex-add",new u.Sf(n,r,i)),"undo"!==t.operation&&"redo"!==t.operation||this.emit(t.operation,new u.Sf(n,r,i))})),e.on("vertex-remove",(t=>{if(1!==t.vertices.length)return;const{view:n}=this,r=t.vertices[0].vertexIndex,i=e.getVertexCoords();this.emit("vertex-remove",new u.NM(n,r,i)),"undo"!==t.operation&&"redo"!==t.operation||this.emit(t.operation,new u.NM(n,r,i))})),e.on("cursor-update",(t=>{1===t.vertices.length&&this.emit("cursor-update",new u.sQ(this.view,t.vertices[0].vertexIndex,e.getVertexCoords()))})),e.on("complete",(t=>{this.emit("draw-complete",new u.cH(e.getVertexCoords())),this._removeDrawTool(),this.removeAllHandles()}))])}_removeDrawTool(){this._drawTool&&(this.view.tools.remove(this._drawTool),this._drawTool=null)}_addVertex(e){const t=this._coordinateHelper.arrayToVector(e);this._isDuplicateOfLastVertex(t)||(this._lastVertexUnsnapped=this._stagedVertexUnsnapped,this._popCursorVertex(),this._editGeometryOperations.appendVertex(t))}_updateCursor(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this._popCursorVertex(),!this._cursorScreenPoint)return;const t=this.getCoordsAndPointFromScreenPoint(this._cursorScreenPoint);null==t||e||this._pushCursorVertex(t.vertex,(()=>this.emit("cursor-update",new u.sQ(this.view,this._activeComponent.vertices.length,this.vertices,null!=this._stagedVertex?new s.default(this._stagedVertex):null))))}_completeDrawing(){if(this._drawTool)return void this._drawTool.completeCreateOperation();if(this._activePointerId=null,this._popCursorVertex(),this._committedVertices.length<2)return;this._abortSnapping(),null!=this._snappingManager&&this._snappingManager.doneSnapping();const e=new u.cH(this.vertices);this.emit("draw-complete",e),e.defaultPrevented||this.removeAllHandles()}};(0,r._)([(0,i.MZ)()],v.prototype,"_clickEnabled",null),(0,r._)([(0,i.MZ)()],v.prototype,"_dragEnabled",null),(0,r._)([(0,i.MZ)({type:l.x})],v.prototype,"mode",void 0),v=(0,r._)([(0,o.$)("esri.views.draw.PolylineDrawAction")],v);const f=v},20444:(e,t,n)=>{n.d(t,{CK:()=>d,E9:()=>a,Hq:()=>l,MW:()=>u,TE:()=>h,yJ:()=>c});var r=n(89227),i=n(75400),o=n(14967),s=n(55928);function a(e){return null==e.origin}function l(e){return null!=e.origin}function d(e){return l(e.vertexSpace)}function u(e,t){if(!l(e))return null;const[n,r,o]=e.origin;return new i.default({x:n,y:r,z:o,spatialReference:t})}function h(e,t){const{x:n,y:r,z:i,spatialReference:a}=e,l=[n,r,i??0];return"local"===(t?.vertexSpace??function(e){return e.isGeographic||e.isWebMercator?"local":"georeferenced"}(a))?new s.default({origin:l}):new o.default({origin:l})}function c(e,t){return e.type===t.type&&(e.origin===t.origin||null!=e.origin&&null!=t.origin&&(0,r.p)(e.origin,t.origin))}},31183:(e,t,n)=>{n.d(t,{W:()=>a,g:()=>s});var r=n(28473),i=n(96913),o=n(67093);function s(e,t,n,r){if((0,i.canProjectWithoutEngine)(e.spatialReference,n)){l[0]=e.x,l[1]=e.y;const i=e.z;return l[2]=i??r??0,(0,o.projectBuffer)(l,e.spatialReference,0,t,n,0)}const s=(0,i.tryProjectWithZConversion)(e,n);return!!s&&(t[0]=s?.x,t[1]=s?.y,t[2]=s?.z??r??0,!0)}async function a(e,t,n,r,o){return await(0,i.initializeProjection)(e.spatialReference,n,null,o),s(e,t,n,r)}const l=(0,r.vt)()},34156:(e,t,n)=>{n.d(t,{EL:()=>g,RS:()=>m,gr:()=>d,wP:()=>h,wZ:()=>c});var r=n(79625),i=(n(21265),n(82301)),o=n(25048),s=n(93321),a=n(78629),l=n(62240);function d(e){return"declaredClass"in e}function u(e){return"declaredClass"in e}function h(e,t){return e?function(e){return"declaredClass"in e}(e)?e:new r.default({layer:t,sourceLayer:t,visible:e.visible,symbol:(0,i.clone)(e.symbol),attributes:(0,i.clone)(e.attributes),geometry:c(e.geometry)}):null}function c(e){return null==e?null:d(e)?e:(0,a.fromJSON)(function(e){const{wkid:t,wkt:n,wkt2:r,latestWkid:i}=e.spatialReference,o={wkid:t,wkt:n,wkt2:r,latestWkid:i};switch(e.type){case"point":{const{x:t,y:n,z:r,m:i}=e;return{x:t,y:n,z:r,m:i,spatialReference:o}}case"polygon":{const{rings:t,hasZ:n,hasM:r}=e;return{rings:p(t),hasZ:n,hasM:r,spatialReference:o}}case"polyline":{const{paths:t,hasZ:n,hasM:r}=e;return{paths:p(t),hasZ:n,hasM:r,spatialReference:o}}case"extent":{const{xmin:t,xmax:n,ymin:r,ymax:i,zmin:s,zmax:a,mmin:l,mmax:d,hasZ:u,hasM:h}=e;return{xmin:t,xmax:n,ymin:r,ymax:i,zmin:s,zmax:a,mmin:l,mmax:d,hasZ:u,hasM:h,spatialReference:o}}case"multipoint":{const{points:t,hasZ:n,hasM:r}=e;return{points:f(t)?v(t):t,hasZ:n,hasM:r,spatialReference:o}}default:return}}(e))}function p(e){return function(e){for(const t of e)if(0!==t.length)return f(t);return!1}(e)?e.map((e=>v(e))):e}function v(e){return e.map((e=>Array.from(e)))}function f(e){return e.length>0&&((0,o.vZ)(e[0])||(0,o.aI)(e[0]))}function g(e,t){if(!e)return null;let n;if(u(e)){if(null==t)return e.clone();if(u(t))return t.copy(e)}return null!=t?(n=t,n.x=e.x,n.y=e.y,n.spatialReference=e.spatialReference,e.hasZ?(n.z=e.z,n.hasZ=e.hasZ):(n.z=void 0,n.hasZ=!1),e.hasM?(n.m=e.m,n.hasM=!0):(n.m=void 0,n.hasM=!1)):(n=(0,l.T)(e.x,e.y,e.z,e.spatialReference),e.hasM&&(n.m=e.m,n.hasM=!0)),n}function m(e){const{wkid:t,wkt:n,wkt2:r,latestWkid:i}=e,o={wkid:t,wkt:n,wkt2:r,latestWkid:i};return s.default.fromJSON(o)}},49282:(e,t,n)=>{n.d(t,{t:()=>i,x:()=>r});const r=["freehand","hybrid","click"],i="click"},55928:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r=n(93800),i=n(85715),o=n(19455),s=n(48602),a=(n(21265),n(50925),n(14746),n(47332)),l=n(75269),d=n(28473);let u=class extends(i.A.ClonableMixin(o.A)){constructor(e){super(e),this.type="local",this.origin=(0,d.vt)()}};(0,r._)([(0,a.e)({local:"local"},{readOnly:!0})],u.prototype,"type",void 0),(0,r._)([(0,s.MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],u.prototype,"origin",void 0),u=(0,r._)([(0,l.$)("esri.geometry.support.MeshLocalVertexSpace")],u);const h=u},64053:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=n(93800),i=n(6946),o=n(48602),s=(n(21265),n(50925),n(14746),n(75269));let a=class extends i.default{constructor(e){super(e),this.enabled=!1}};(0,r._)([(0,o.MZ)({type:Boolean,nonNullable:!0})],a.prototype,"enabled",void 0),a=(0,r._)([(0,s.$)("esri.views.interactive.sketch.SketchLabelOptions")],a);const l=a},81064:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(5019),i=n(69601);class o{constructor(e){this._observable=new i.I,this._set=new Set(e)}get size(){return(0,r.gc)(this._observable),this._set.size}add(e){const t=this._set.size;return this._set.add(e),this._set.size!==t&&this._observable.notify(),this}clear(){this._set.size>0&&(this._set.clear(),this._observable.notify())}delete(e){const t=this._set.delete(e);return t&&this._observable.notify(),t}entries(){return(0,r.gc)(this._observable),this._set.entries()}forEach(e,t){(0,r.gc)(this._observable),this._set.forEach(((n,r)=>e.call(t,n,r,this)),t)}has(e){return(0,r.gc)(this._observable),this._set.has(e)}keys(){return(0,r.gc)(this._observable),this._set.keys()}values(){return(0,r.gc)(this._observable),this._set.values()}[Symbol.iterator](){return(0,r.gc)(this._observable),this._set[Symbol.iterator]()}[Symbol.dispose](){this._observable.destroy()}get[Symbol.toStringTag](){return this._set[Symbol.toStringTag]}}},82959:(e,t,n)=>{n.d(t,{B:()=>c});var r=n(93800),i=n(58448),o=n(17741),s=n(48602),a=(n(21265),n(50925),n(14746),n(75269)),l=n(41317),d=n(26054),u=n(48941),h=n(88204);let c=class extends(i.A.EventedMixin(h.g)){constructor(e){super(e),this.defaultZ=0,this.elevationInfo=null,this.hasZ=!0,this.mode=null,this.snapToScene=null,this.type="draw-3d"}initialize(){const e=this.view,t=(0,l.bK)(this.hasZ,this.elevationInfo);this.drawOperation=new d.O0({view:e,manipulators:this.manipulators,geometryType:this.geometryType,drawingMode:this.mode,hasZ:this.hasZ,defaultZ:this.defaultZ,snapToSceneEnabled:this.snapToScene,drawSurface:"3d"===e.type?new u.IX(e,t):null,elevationDrawSurface:"3d"===e.type?new u.rT(t,this.defaultZ,e):null,hasM:!1,elevationInfo:t}),this.addHandles([this.drawOperation.on("vertex-add",(e=>this.onVertexAdd(e))),this.drawOperation.on("vertex-remove",(e=>this.onVertexRemove(e))),this.drawOperation.on("vertex-update",(e=>this.onVertexUpdate(e))),this.drawOperation.on("cursor-update",(e=>this.onCursorUpdate(e))),this.drawOperation.on("complete",(e=>this.onComplete(e)))]),this.finishToolCreation()}destroy(){this.drawOperation=(0,o.pR)(this.drawOperation),this._set("view",null)}set enabled(e){this.drawOperation.interactive=e,this._set("enabled",e)}get updating(){return this.drawOperation?.updating??!1}completeCreateOperation(){this.drawOperation.complete()}onDeactivate(){this.drawOperation.isCompleted||this.drawOperation.cancel()}getVertexCoords(){return this.drawOperation.geometryIncludingUncommittedVertices}onInputEvent(e){this.drawOperation.onInputEvent(e)}canRedo(){return this.drawOperation.canRedo}canUndo(){return this.drawOperation.canUndo}redo(){this.drawOperation.redo()}reset(){}undo(){this.drawOperation.undo()}onComplete(e){this.emit("complete",e)}onCursorUpdate(e){this.emit("cursor-update",e)}onVertexAdd(e){this.emit("vertex-add",e)}onVertexRemove(e){this.emit("vertex-remove",e)}onVertexUpdate(e){this.emit("vertex-update",e)}};(0,r._)([(0,s.MZ)({constructOnly:!0,nonNullable:!0})],c.prototype,"defaultZ",void 0),(0,r._)([(0,s.MZ)()],c.prototype,"drawOperation",void 0),(0,r._)([(0,s.MZ)({constructOnly:!0})],c.prototype,"elevationInfo",void 0),(0,r._)([(0,s.MZ)({value:!0})],c.prototype,"enabled",null),(0,r._)([(0,s.MZ)({constructOnly:!0})],c.prototype,"geometryType",void 0),(0,r._)([(0,s.MZ)({constructOnly:!0})],c.prototype,"hasZ",void 0),(0,r._)([(0,s.MZ)({constructOnly:!0})],c.prototype,"mode",void 0),(0,r._)([(0,s.MZ)()],c.prototype,"snapToScene",void 0),(0,r._)([(0,s.MZ)({readOnly:!0})],c.prototype,"type",void 0),(0,r._)([(0,s.MZ)({readOnly:!0})],c.prototype,"updating",null),(0,r._)([(0,s.MZ)({constructOnly:!0,nonNullable:!0})],c.prototype,"view",void 0),c=(0,r._)([(0,a.$)("esri.views.draw.DrawTool")],c)},92143:(e,t,n)=>{n.d(t,{IV:()=>f,LF:()=>i,T9:()=>u,Wq:()=>a,d_:()=>o,g2:()=>c,gT:()=>s,hs:()=>h,iT:()=>v,kM:()=>l,l3:()=>d,n0:()=>g,r7:()=>p});var r=n(84190);function i(e){return{value:e}}function o(e,t){return{type:(0,r.t$)(t),value:e,unit:t}}function s(e,t){return{type:(0,r.t$)(t),value:e,unit:t}}function a(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"arithmetic";return{type:(0,r.t$)(t),value:e,unit:t,rotationType:n}}function l(e,t){const n=d(e,t);return"angle"===e.type?a(n,t,e.rotationType):function(e,t){return{type:(0,r.t$)(t),value:e,unit:t}}(n,t)}function d(e,t){return(0,r.oU)(e.value,e.unit,t)}function u(e,t){return null==e?t:null==t||e.value>(0,r.oU)(t.value,t.unit,e.unit)?e:t}function h(e,t){return null==e?null:{...e,value:e.value*t}}function c(e,t,n){if(t===n)return e;switch(n){case"arithmetic":case"geographic":return 90-e}}const p=o(0,"meters"),v=s(0,"square-meters"),f=(a(0,"radians"),a(0,"degrees")),g=a(0,"degrees","geographic")},94761:(e,t,n)=>{n.d(t,{NM:()=>i,Sf:()=>r,cH:()=>s,sQ:()=>o});class r{constructor(e,t,n){this.view=e,this.vertexIndex=t,this.vertices=n,this.defaultPrevented=!1,this.type="vertex-add"}preventDefault(){this.defaultPrevented=!0}}class i{constructor(e,t,n){this.view=e,this.vertexIndex=t,this.vertices=n,this.defaultPrevented=!1,this.type="vertex-remove"}preventDefault(){this.defaultPrevented=!0}}class o{constructor(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;this.view=e,this.vertexIndex=t,this.vertices=n,this.mapPoint=r,this.coordinates=null,this.defaultPrevented=!1,this.type="cursor-update",this.coordinates=1===n.length?n[0]:null}preventDefault(){this.defaultPrevented=!0}}class s{constructor(e){this.vertices=e,this.coordinates=null,this.defaultPrevented=!1,this.type="draw-complete",this.coordinates=1===e.length?e[0]:null}preventDefault(){this.defaultPrevented=!0}}},95095:(e,t,n)=>{n.d(t,{$h:()=>v,Ef:()=>O,IP:()=>g,P1:()=>w,hF:()=>b,jQ:()=>y,rT:()=>x,rZ:()=>r,uR:()=>m});var r,i=n(5839),o=n(92143),s=n(84190),a=n(32006),l=n(98080),d=n(89227),u=n(28473),h=n(18162),c=n(26266),p=n(70576);function v(e,t){if(null==e||null==t)return;const n=f(e,t);return null!=n?(0,o.Wq)(n,"radians","geographic"):void 0}!function(e){e.Absolute="absolute",e.Relative="relative",e.RelativeBilateral="relative-bilateral"}(r||(r={}));const f=(()=>{const e=(0,u.vt)(),t=(0,u.vt)();return(n,r)=>((0,d.i)(e,n.x,n.y,n.z??0),(0,d.i)(t,r.x,r.y,r.z??0),g(e,t,n.spatialReference,r.spatialReference))})(),g=(()=>{const e=(0,l.vt)(),t=(0,u.vt)(),n=(0,u.vt)();return(r,i,o,u)=>{if((0,d.p)(r,i))return;const v=(0,c.geodesicCompatibleSpatialReference)(o),f=(0,c.geodesicCompatibleSpatialReference)(u);if(v&&f&&(0,p.aI)(v,f)&&(0,h.F)(r,o,t,v)&&(0,h.F)(i,u,n,f)){const{azimuth:e}=(0,c.inverseGeodeticSolver)(M,t,n,v);return null!=e?(0,s.oU)(e,"degrees","radians"):void 0}e[0]=i[0]-r[0],e[1]=i[1]-r[1];let g=(0,a.g7)(l.JP,e);return e[0]<0&&(g=Z-g),g}})();function m(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r.Absolute;if(t&&n)switch(i){case r.Absolute:return v(t,n);case r.Relative:return y(_(e,t,n),r.Relative);case r.RelativeBilateral:return y(_(e,t,n),r.RelativeBilateral)}}function _(e,t,n){if(!e||!t||!n)return;const r=f(e,t),i=f(t,n);return null!=r&&null!=i?(0,o.Wq)(i-r,"radians","geographic"):void 0}function y(e,t){if(null!=e)switch(t){case r.Absolute:return w(e);case r.Relative:{const t=b(e);let n=S.normalize(t,0,!0);return-180===n&&(n=180),(0,o.Wq)(n,"degrees","geographic")}case r.RelativeBilateral:{const t=b(e),n=Math.abs(S.normalize(t,0,!0));return(0,o.Wq)(n,"degrees","geographic")}}}function w(e){const t=b(e),n=P.normalize(t,0,!0);return(0,o.Wq)(n,"degrees","geographic")}const x=(()=>{const e=(0,u.vt)();return function(t,n,r,i,a){let l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"geodesic";(0,d.c)(e,n);const u=b(a);if("geodesic"===l){const o=(0,c.geodesicCompatibleSpatialReference)(r);if(o&&(0,h.F)(e,r,e,o))return(0,c.directGeodeticSolver)(t,e,u,i,o),t[2]=n[2],!!(0,h.F)(t,o,t,r)}const p=(0,o.g2)(u,"geographic","arithmetic"),v=(0,s.oU)(p,"degrees","radians"),f=n[0]+i*Math.cos(v),g=n[1]+i*Math.sin(v),m=n[2];return(0,d.i)(t,f,g,m),!0}})();function b(e){if(null!=e)return(0,o.g2)(T(e),e.rotationType,"geographic")}function O(e){if(null!=e)return(0,o.g2)(T(e),e.rotationType,"arithmetic")}function T(e){return(0,s.oU)(e.value,e.unit,"degrees")}const M=new c.InverseGeodeticSolverResult,Z=2*Math.PI,P=i.ie,S=new i.hr(-180,180)}}]);