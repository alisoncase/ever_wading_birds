"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[2862,66559,95719],{2862:(e,t,n)=>{n.r(t),n.d(t,{fromExtent:()=>v,fromGeometry:()=>x,fromMultipoint:()=>M,fromPoint:()=>w,fromPolygon:()=>C,fromPolyline:()=>G,fromSpatialReference:()=>R,getSpatialReference:()=>y,toExtent:()=>Z,toGeometry:()=>_,toMultipoint:()=>P,toPoint:()=>b,toPolygon:()=>V,toPolyline:()=>k});var r=n(54256),s=(n(45204),n(9270)),o=n(12834),i=n(65889),a=n(75646),u=n(12560),l=n(76493),c=n(75400),f=n(65920),h=n(54824),m=(n(3016),n(5410));const p="_gxVersion",d=2,g=1;function y(e){return Array.isArray(e)?e[0].spatialReference:e.spatialReference}function x(e){switch(e.type){case"point":return w(e);case"multipoint":return M(e);case"polyline":return G(e);case"polygon":return C(e);case"extent":return v(e);default:throw new Error(`Unsupported geometry type: ${e.type}`)}}function v(e){if(!e.getCacheValue(p)){const t=new o.E;t.setCoords(e.xmin,e.ymin,e.xmax,e.ymax),e.hasM&&t.setInterval(d,0,e.mmin,e.mmax),e.hasZ&&t.setInterval(g,0,e.zmin,e.zmax),e.setCacheValue(p,t)}return e.getCacheValue(p)}function M(e){if(!e.getCacheValue(p)){const t=new i.M,n=new o.P,r=e.points,s=e.hasM,a=e.hasZ,u=a?3:2;for(let e=0,o=r.length;e<o;e++){const o=r[e];n.setXYCoords(o[0],o[1]),a&&n.setZ(o[2]??0),s&&n.setM(o[u]??NaN),t.add(n)}e.setCacheValue(p,t)}return e.getCacheValue(p)}function w(e){if(!e.getCacheValue(p)){const t=new o.P;t.setXYCoords(e.x,e.y),e.hasM&&t.setM(e.m),e.hasZ&&t.setZ(e.z),e.setCacheValue(p,t)}return e.getCacheValue(p)}function C(e){if(!e.getCacheValue(p)){const{curveRings:t,hasM:n,hasZ:r,rings:s}=e,o=(0,m.fromGeometryToGXGeometry)({curveRings:t,hasM:n,hasZ:r,rings:s});e.setCacheValue(p,o)}return e.getCacheValue(p)}function G(e){if(!e.getCacheValue(p)){const{curvePaths:t,hasM:n,hasZ:r,paths:s}=e,o=(0,m.fromGeometryToGXGeometry)({curvePaths:t,hasM:n,hasZ:r,paths:s});e.setCacheValue(p,o)}return e.getCacheValue(p)}function R(e){if(e.wkid)return(0,a.c)(e.wkid);const t=e.wkt2||e.wkt;return t?(0,a.b)(t):null}function _(e,t){if(e)switch(e.getGeometryType()){case s.G.enumPoint:return b(e,t);case s.G.enumEnvelope:return Z(e,t);case s.G.enumMultiPoint:return P(e,t);case s.G.enumPolyline:return k(e,t);case s.G.enumPolygon:return V(e,t)}return null}function Z(e,t){if(e.isEmpty())return null;const n=new u.default({xmin:e.getXMin(),ymin:e.getYMin(),xmax:e.getXMax(),ymax:e.getYMax(),spatialReference:t}),r=e.getDescription();if(r.hasM()){const t=e.queryInterval(d,0);n.mmin=t.vmin,n.mmax=t.vmax}if(r.hasZ()){const t=e.queryInterval(g,0);n.zmin=t.vmin,n.zmax=t.vmax}return n.setCacheValue(p,e),n}function P(e,t){if(e.isEmpty())return null;const n=e.getDescription(),r=n.hasM(),s=n.hasZ(),i=[],a=new o.P;for(let o=0,l=e.getPointCount();o<l;o++){e.getPointByVal(o,a);const t=[a.getX(),a.getY()];s&&t.push(a.getZ()),r&&t.push(a.getM()),i.push(t)}const u=new l.default({hasM:r,hasZ:s,points:i,spatialReference:t});return u.setCacheValue(p,e),u}function b(e,t){if(e instanceof r.P)return new c.default({x:e.x,y:e.y,spatialReference:t});if(e.isEmpty())return null;const n=new c.default({x:e.getX(),y:e.getY(),spatialReference:t}),s=e.getDescription();return s.hasM()&&(n.m=e.getM()),s.hasZ()&&(n.z=e.getZ()),n.setCacheValue(p,e),n}function V(e,t){if(e.isEmpty())return null;const n=f.default.fromJSON({spatialReference:t,...(0,m.toGeometry)(e,null)});return n.setCacheValue(p,e),n}function k(e,t){if(e.isEmpty())return null;const n=h.default.fromJSON({spatialReference:t,...(0,m.toGeometry)(e,null)});return n.setCacheValue(p,e),n}},4700:(e,t,n)=>{n.d(t,{a:()=>u,b:()=>c,e:()=>a,s:()=>l});var r=n(62631),s=n(84190),o=n(65718),i=n(2862);function a(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{unit:r}=n,a=(0,i.getSpatialReference)(e);return r&&(t=(0,s.UW)(t,r,a)),(0,i.toPolygon)((0,o.g7)((0,i.fromGeometry)(e),(0,i.fromSpatialReference)(a),t),a)}function u(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{maxDeviation:a=NaN,maxVerticesInFullCircle:u=96,union:l=!1,unit:c}=n;const f=(0,i.getSpatialReference)(e);c&&(t=t.map((e=>(0,s.UW)(e,c,f))),a&&(a=(0,s.UW)(a,c,f)));const h=e.map(i.fromGeometry);return(0,o.yv)(h,(0,i.fromSpatialReference)(f),t,a,u,l).map((e=>(0,i.toPolygon)(e,f))).filter(r.Ru)}const l=(0,o.fz)(),c=Object.freeze(Object.defineProperty({__proto__:null,execute:a,executeMany:u,supportsCurves:l},Symbol.toStringTag,{value:"Module"}))},13369:(e,t,n)=>{n.d(t,{createPresetServiceEdit:()=>m});var r=n(74719),s=n(42985),o=n(83874),i=n(60757),a=n(76493),u=n(75400),l=n(65920),c=n(54824),f=n(84114),h=n(95719);function m(e){let{edits:t,geometry:n,mode:a,relationships:u,rotation:l,tag:c="",template:d}=e;const{definition:g}=d,y=n.x-g.origin.x,x=n.y-g.origin.y,v=g.origin.hasZ&&n.hasZ?n.z-g.origin.z:0,M=p(g.origin.clone(),y,x,v),w=(new h.default).rotate(l,M.x,M.y);for(const h of g.parts){if(t.length>i.Cg&&"digitizing"===a)break;const e=h.template;if(!(0,s.xZ)(e))throw new r.default("shared-template:template-not-loaded","A template part's template must be loaded before use");if((0,s.Cq)(e)){let n=p(h.geometry,y,x,v);w.isIdentity||(n=(0,f.execute)(n,w)),(0,o.i)({edits:t,geometry:n,relationships:u,tag:c,template:e})}else if((0,s.JC)(e)){const r=[];if(m({edits:w.isIdentity?r:t,geometry:n,mode:a,relationships:u,rotation:0,tag:c,template:e}),!w.isIdentity)for(const e of r){const{geometry:n}=e.graphic;n&&"mesh"!==n.type&&(e.graphic.geometry=(0,f.execute)(n,w),t.push(e))}}}return M}function p(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(!e)return null;if("point"===e.type)return new u.default({spatialReference:e.spatialReference,x:e.x+t,y:e.y+n,...e.hasZ?{z:e.z+r}:{},...e.hasM?{m:e.m}:{}});if("multipoint"===e.type){const s=[];if(e.hasZ&&e.hasM)for(let o=0;o<e.points.length;o++){const i=e.points[o];s.push([i[0]+t,i[1]+n,i[2]+r,i[3]])}else if(e.hasZ)for(let o=0;o<e.points.length;o++){const i=e.points[o];s.push([i[0]+t,i[1]+n,i[2]+r])}else if(e.hasM)for(let r=0;r<e.points.length;r++){const o=e.points[r];s.push([o[0]+t,o[1]+n,o[2]])}else for(let r=0;r<e.points.length;r++){const o=e.points[r];s.push([o[0]+t,o[1]+n])}return new a.default({spatialReference:e.spatialReference,hasZ:e.hasZ,hasM:e.hasM,points:s})}if("polygon"===e.type){const s=new l.default({spatialReference:e.spatialReference,hasZ:e.hasZ,hasM:e.hasM});for(let o=0;o<e.rings.length;o++){const i=e.rings[o],a=[];if(e.hasZ&&e.hasM)for(let e=0;e<i.length;e++)a.push([i[e][0]+t,i[e][1]+n,i[e][2]+r,i[e][3]]);else if(e.hasM)for(let e=0;e<i.length;e++)a.push([i[e][0]+t,i[e][1]+n,i[e][2]]);else if(e.hasZ)for(let e=0;e<i.length;e++)a.push([i[e][0]+t,i[e][1]+n,i[e][2]+r]);else for(let e=0;e<i.length;e++)a.push([i[e][0]+t,i[e][1]+n]);s.addRing(a)}return s}if("polyline"===e.type){const s=new c.default({spatialReference:e.spatialReference,hasZ:e.hasZ,hasM:e.hasM});for(let o=0;o<e.paths.length;o++){const i=e.paths[o],a=[];if(e.hasZ&&e.hasM)for(let e=0;e<i.length;e++)a.push([i[e][0]+t,i[e][1]+n,i[e][2]+r,i[e][3]]);else if(e.hasZ)for(let e=0;e<i.length;e++)a.push([i[e][0]+t,i[e][1]+n,i[e][2]+r]);else if(e.hasM)for(let e=0;e<i.length;e++)a.push([i[e][0]+t,i[e][1]+n,i[e][2]]);else for(let e=0;e<i.length;e++)a.push([i[e][0]+t,i[e][1]+n]);s.addPath(a)}return s}return e.clone()}},64030:(e,t,n)=>{n.d(t,{Dl:()=>m,Gr:()=>d,RT:()=>v,TR:()=>h,V2:()=>x,YI:()=>g,_0:()=>p,fS:()=>c,kI:()=>f,kS:()=>y});var r=n(74719),s=n(84190),o=n(42985),i=n(83874),a=n(13369),u=n(65920),l=n(78629);function c(e){let{edits:t,mode:n,relationships:s,shape:u,templatePart:c}=e,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(null===c)return;const{template:h}=c;if(!(0,o.xZ)(h))throw new r.default("shared-template:template-not-loaded","A template part's template must be loaded before use");if((0,o.JC)(h)){if(!(0,l.isPoint)(u))throw new r.default("shared-template:invalid-geometry","Preset templates must have a point geometry");(0,a.createPresetServiceEdit)({geometry:u,template:h,edits:t,relationships:s,rotation:0,mode:n,tag:f})}else(0,o.Cq)(h)&&(0,i.i)({geometry:u,template:h,edits:t,relationships:s,tag:f})}function f(e,t){if(!e||!(0,l.isPolygon)(e))return null;if(!t.hasZ&&!t.hasM)return e;let n=null,r=null;const s=t.hasZ&&t.hasM?3:2;switch(t.type){case"point":n=t.hasZ?t.z:null,r=t.hasM?t.m:null;break;case"polygon":case"polyline":{const e="polygon"===t.type?t.rings:t.paths;for(const o of e)for(const e of o)t.hasZ&&(null===n||e[2]>n)&&(n=e[2]),t.hasM&&(null===r||e[s]>r)&&(r=e[s])}break;case"multipoint":for(const e of t.points)t.hasZ&&(null===n||e[2]>n)&&(n=e[2]),t.hasM&&(null===r||e[s]>r)&&(r=e[s]);break;default:return e}const o=function(e,t,n,r,s){const o=[];for(const i of e)o.push(M(i,t,n,r,s));return o}(e.rings,t.hasZ,t.hasM,n,r);return new u.default({rings:o,spatialReference:e.spatialReference,hasZ:t.hasZ,hasM:t.hasM})}function h(e){let t=1;return(e.spatialReference.vcsWkid||e.spatialReference.latestVcsWkid)&&(t=(0,s.G9)(e.spatialReference)/(0,s.GA)(e.spatialReference)),t}function m(e){let t=!1;return void 0!==e.byNumber&&(t=!0===e.byNumber),t}function p(e){let t=0;return void 0!==e.count&&(t=e.count),t}function d(e,t){let n=0;return t?void 0!==e.proportional&&(n=e.proportional):void 0!==e.distanceValue&&(n=e.distanceValue),t&&(n/=100),n}function g(e){return!0===e.isProportional}function y(e){return!1!==e.createUnique}function x(e){let t=0;return void 0!==e.offsetDistance&&(t=e.offsetDistance),void 0!==e.side&&1===e.side&&(t*=-1),t}function v(e){return!0===e.vertexBeforeOffset}function M(e,t,n,r,s){const o=[];for(const i of e){const e=[i[0],i[1]];t&&(e[2]=r),n&&(e[t?3:2]=s),o.push(e)}return o}},65718:(e,t,n)=>{n.d(t,{fz:()=>h,g7:()=>c,yv:()=>f});var r=n(22290),s=n(9270),o=n(75646),i=n(45204),a=n(51526);class u extends r.G{constructor(e,t,n,r,s,o,u){super(),this.m_currentUnionEnvelope2D=new i.Envelope2D,this.m_index=-1,this.m_dindex=-1,this.m_progressTracker=u,this.m_bufferer=new a.B(u),this.m_inputGeoms=e,this.m_spatialReference=t,this.m_distances=n,this.m_maxDeviation=r,this.m_maxVerticesInFullCircle=s}tock(){return!0}getRank(){return 1}next(){{let e;for(;e=this.m_inputGeoms.next();)return(0,s.d)(e),this.m_index=this.m_inputGeoms.getGeometryID(),this.m_dindex+1<this.m_distances.length&&this.m_dindex++,this.buffer(e,this.m_distances[this.m_dindex]);return null}}getGeometryID(){return this.m_index}buffer(e,t){return this.m_bufferer.buffer(e,t,this.m_spatialReference,0,0,4,this.m_maxDeviation,this.m_maxVerticesInFullCircle)}}const l=new class{getOperatorType(){return 10004}supportsCurves(){return!0}accelerateGeometry(e,t,n){return!1}canAccelerateGeometry(e){return!1}executeMany(e,t,n,r,s){return this.executeManyEx(e,t,n,Number.NaN,96,r,s)}execute(e,t,n,o){Number.isFinite(n)||(0,s.t)("Invalid distance for buffer operation");const i=new r.S([e]),a=[n],u=this.executeMany(i,t,a,!1,o).next();return u||(0,s.c)("null buffer output"),u}executeManyEx(e,t,n,r,i,a,l){if(void 0!==n.find((e=>!Number.isFinite(e)))&&(0,s.t)("Invalid distance for buffer operation"),a){const s=new u(e,t,n,r,i,!1,l);return(new o.h).executeMany(s,t,l,2)}return new u(e,t,n,r,i,!1,l)}};function c(e,t,n){return l.execute(e,t,n,null)}function f(e,t,n,s,o,i){const a=l.executeManyEx(new r.S(e),t,n,s,o,i,null);return Array.from(a)}function h(){return l.supportsCurves()}},66559:(e,t,n)=>{n.r(t),n.d(t,{execute:()=>i,isAsync:()=>a});var r=n(64030),s=n(60757),o=n(4700);function i(e){let{templatePart:t,shape:n,edits:i,relationships:a,mode:u}=e;if(!(0,s.Bi)(n))return;const l=t.builderConfig?.distanceValue??0;if(l<=0)return;const c=(0,r.kI)((0,o.e)(n,l),n);c&&(0,r.fS)({templatePart:t,shape:c,edits:i,relationships:a,mode:u})}const a=!1},84114:(e,t,n)=>{n.r(t),n.d(t,{execute:()=>c,executeMany:()=>f,supportsCurves:()=>h});var r=n(62631),s=n(22290),o=n(9270);class i extends s.G{constructor(e,t,n){super(),this.m_index=-1,this.m_transformation=t.clone(),this.m_inputGeometryCursor=e}next(){let e;if(e=this.m_inputGeometryCursor.next()){(0,o.d)(e),this.m_index=this.m_inputGeometryCursor.getGeometryID();const t=e.clone();return t.applyTransformation(this.m_transformation),t}return null}getGeometryID(){return this.m_index}tock(){return!0}getRank(){return 1}}const a=new class{getOperatorType(){return 10303}supportsCurves(){return!0}accelerateGeometry(e,t,n){return!1}canAccelerateGeometry(e){return!1}executeMany(e,t,n){return new i(e,t,n)}execute(e,t,n){const r=e.clone();return r.applyTransformation(t),r}};function u(e,t){return a.execute(e,t,null)}var l=n(2862);function c(e,t){const n=(0,l.getSpatialReference)(e);return(0,l.toGeometry)(u((0,l.fromGeometry)(e),t.transform),n)}function f(e,t){const n=e.map(l.fromGeometry),o=(0,l.getSpatialReference)(e);return function(e,t){const n=a.executeMany(new s.S(e),t,null);return Array.from(n)}(n,t.transform).map((e=>(0,l.toGeometry)(e,o))).filter(r.Ru)}const h=a.supportsCurves()},95719:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(54256),s=n(61853),o=n(64682);const i={uniform:0,conformal:1,rigid:2,"rigid-motion":3,general:4},a=e=>e.map((e=>new r.P(e.x,e.y)));class u{constructor(){this.transform=new s.T}calculateErrors(e,t){const n=e.length,r=t.length;if(n!==r)throw new Error(`The input length (${n}) is not the same as output length (${r})`);const s=[];return{rms:this.transform.calculateErrors(n,a(e),a(t),s),errorsOut:s}}flipX(e,t){return this.transform.flipX(e,t),this}flipY(e,t){return this.transform.flipY(e,t),this}initializeFromControlPoints(e,t,n,r){const s=t.length,o=n.length;if(s!==o)throw new Error(`The input length (${s}) is not the same as output length (${o})`);this.transform.initializeFromControlPoints(i[e],s,a(t),a(n),r?.transform)}isIdentity(){return this.transform.isIdentity()}rotate(e,t,n){const s=(0,o.kU)(e);return null!=t&&null!=n?this.transform.rotateAngleAbout(s,new r.P(t,n)):this.transform.rotateAngle(s),this}scale(e,t){return this.transform.scale(e,t),this}setIdentity(){this.transform.setIdentity()}setSwapCoordinates(){return this.transform.setSwapCoordinates(),this}shear(e,t){return this.transform.shear(e,t),this}shift(e,t){return this.transform.shiftCoords(e,t),this}}}}]);