"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[2862,13369,22290,28659,84114,85993,95719],{2862:(e,t,n)=>{n.r(t),n.d(t,{fromExtent:()=>M,fromGeometry:()=>x,fromMultipoint:()=>w,fromPoint:()=>C,fromPolygon:()=>G,fromPolyline:()=>Z,fromSpatialReference:()=>v,getSpatialReference:()=>y,toExtent:()=>P,toGeometry:()=>R,toMultipoint:()=>V,toPoint:()=>_,toPolygon:()=>k,toPolyline:()=>b});var r=n(54256),s=(n(45204),n(9270)),o=n(12834),a=n(65889),i=n(75646),l=n(12560),u=n(76493),c=n(75400),h=n(65920),f=n(54824),m=(n(3016),n(5410));const p="_gxVersion",g=2,d=1;function y(e){return Array.isArray(e)?e[0].spatialReference:e.spatialReference}function x(e){switch(e.type){case"point":return C(e);case"multipoint":return w(e);case"polyline":return Z(e);case"polygon":return G(e);case"extent":return M(e);default:throw new Error(`Unsupported geometry type: ${e.type}`)}}function M(e){if(!e.getCacheValue(p)){const t=new o.E;t.setCoords(e.xmin,e.ymin,e.xmax,e.ymax),e.hasM&&t.setInterval(g,0,e.mmin,e.mmax),e.hasZ&&t.setInterval(d,0,e.zmin,e.zmax),e.setCacheValue(p,t)}return e.getCacheValue(p)}function w(e){if(!e.getCacheValue(p)){const t=new a.M,n=new o.P,r=e.points,s=e.hasM,i=e.hasZ,l=i?3:2;for(let e=0,o=r.length;e<o;e++){const o=r[e];n.setXYCoords(o[0],o[1]),i&&n.setZ(o[2]??0),s&&n.setM(o[l]??NaN),t.add(n)}e.setCacheValue(p,t)}return e.getCacheValue(p)}function C(e){if(!e.getCacheValue(p)){const t=new o.P;t.setXYCoords(e.x,e.y),e.hasM&&t.setM(e.m),e.hasZ&&t.setZ(e.z),e.setCacheValue(p,t)}return e.getCacheValue(p)}function G(e){if(!e.getCacheValue(p)){const{curveRings:t,hasM:n,hasZ:r,rings:s}=e,o=(0,m.fromGeometryToGXGeometry)({curveRings:t,hasM:n,hasZ:r,rings:s});e.setCacheValue(p,o)}return e.getCacheValue(p)}function Z(e){if(!e.getCacheValue(p)){const{curvePaths:t,hasM:n,hasZ:r,paths:s}=e,o=(0,m.fromGeometryToGXGeometry)({curvePaths:t,hasM:n,hasZ:r,paths:s});e.setCacheValue(p,o)}return e.getCacheValue(p)}function v(e){if(e.wkid)return(0,i.c)(e.wkid);const t=e.wkt2||e.wkt;return t?(0,i.b)(t):null}function R(e,t){if(e)switch(e.getGeometryType()){case s.G.enumPoint:return _(e,t);case s.G.enumEnvelope:return P(e,t);case s.G.enumMultiPoint:return V(e,t);case s.G.enumPolyline:return b(e,t);case s.G.enumPolygon:return k(e,t)}return null}function P(e,t){if(e.isEmpty())return null;const n=new l.default({xmin:e.getXMin(),ymin:e.getYMin(),xmax:e.getXMax(),ymax:e.getYMax(),spatialReference:t}),r=e.getDescription();if(r.hasM()){const t=e.queryInterval(g,0);n.mmin=t.vmin,n.mmax=t.vmax}if(r.hasZ()){const t=e.queryInterval(d,0);n.zmin=t.vmin,n.zmax=t.vmax}return n.setCacheValue(p,e),n}function V(e,t){if(e.isEmpty())return null;const n=e.getDescription(),r=n.hasM(),s=n.hasZ(),a=[],i=new o.P;for(let o=0,u=e.getPointCount();o<u;o++){e.getPointByVal(o,i);const t=[i.getX(),i.getY()];s&&t.push(i.getZ()),r&&t.push(i.getM()),a.push(t)}const l=new u.default({hasM:r,hasZ:s,points:a,spatialReference:t});return l.setCacheValue(p,e),l}function _(e,t){if(e instanceof r.P)return new c.default({x:e.x,y:e.y,spatialReference:t});if(e.isEmpty())return null;const n=new c.default({x:e.getX(),y:e.getY(),spatialReference:t}),s=e.getDescription();return s.hasM()&&(n.m=e.getM()),s.hasZ()&&(n.z=e.getZ()),n.setCacheValue(p,e),n}function k(e,t){if(e.isEmpty())return null;const n=h.default.fromJSON({spatialReference:t,...(0,m.toGeometry)(e,null)});return n.setCacheValue(p,e),n}function b(e,t){if(e.isEmpty())return null;const n=f.default.fromJSON({spatialReference:t,...(0,m.toGeometry)(e,null)});return n.setCacheValue(p,e),n}},13369:(e,t,n)=>{n.d(t,{createPresetServiceEdit:()=>m});var r=n(74719),s=n(42985),o=n(83874),a=n(60757),i=n(76493),l=n(75400),u=n(65920),c=n(54824),h=n(84114),f=n(95719);function m(e){let{edits:t,geometry:n,mode:i,relationships:l,rotation:u,tag:c="",template:g}=e;const{definition:d}=g,y=n.x-d.origin.x,x=n.y-d.origin.y,M=d.origin.hasZ&&n.hasZ?n.z-d.origin.z:0,w=p(d.origin.clone(),y,x,M),C=(new f.default).rotate(u,w.x,w.y);for(const f of d.parts){if(t.length>a.Cg&&"digitizing"===i)break;const e=f.template;if(!(0,s.xZ)(e))throw new r.default("shared-template:template-not-loaded","A template part's template must be loaded before use");if((0,s.Cq)(e)){let n=p(f.geometry,y,x,M);C.isIdentity||(n=(0,h.execute)(n,C)),(0,o.i)({edits:t,geometry:n,relationships:l,tag:c,template:e})}else if((0,s.JC)(e)){const r=[];if(m({edits:C.isIdentity?r:t,geometry:n,mode:i,relationships:l,rotation:0,tag:c,template:e}),!C.isIdentity)for(const e of r){const{geometry:n}=e.graphic;n&&"mesh"!==n.type&&(e.graphic.geometry=(0,h.execute)(n,C),t.push(e))}}}return w}function p(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(!e)return null;if("point"===e.type)return new l.default({spatialReference:e.spatialReference,x:e.x+t,y:e.y+n,...e.hasZ?{z:e.z+r}:{},...e.hasM?{m:e.m}:{}});if("multipoint"===e.type){const s=[];if(e.hasZ&&e.hasM)for(let o=0;o<e.points.length;o++){const a=e.points[o];s.push([a[0]+t,a[1]+n,a[2]+r,a[3]])}else if(e.hasZ)for(let o=0;o<e.points.length;o++){const a=e.points[o];s.push([a[0]+t,a[1]+n,a[2]+r])}else if(e.hasM)for(let r=0;r<e.points.length;r++){const o=e.points[r];s.push([o[0]+t,o[1]+n,o[2]])}else for(let r=0;r<e.points.length;r++){const o=e.points[r];s.push([o[0]+t,o[1]+n])}return new i.default({spatialReference:e.spatialReference,hasZ:e.hasZ,hasM:e.hasM,points:s})}if("polygon"===e.type){const s=new u.default({spatialReference:e.spatialReference,hasZ:e.hasZ,hasM:e.hasM});for(let o=0;o<e.rings.length;o++){const a=e.rings[o],i=[];if(e.hasZ&&e.hasM)for(let e=0;e<a.length;e++)i.push([a[e][0]+t,a[e][1]+n,a[e][2]+r,a[e][3]]);else if(e.hasM)for(let e=0;e<a.length;e++)i.push([a[e][0]+t,a[e][1]+n,a[e][2]]);else if(e.hasZ)for(let e=0;e<a.length;e++)i.push([a[e][0]+t,a[e][1]+n,a[e][2]+r]);else for(let e=0;e<a.length;e++)i.push([a[e][0]+t,a[e][1]+n]);s.addRing(i)}return s}if("polyline"===e.type){const s=new c.default({spatialReference:e.spatialReference,hasZ:e.hasZ,hasM:e.hasM});for(let o=0;o<e.paths.length;o++){const a=e.paths[o],i=[];if(e.hasZ&&e.hasM)for(let e=0;e<a.length;e++)i.push([a[e][0]+t,a[e][1]+n,a[e][2]+r,a[e][3]]);else if(e.hasZ)for(let e=0;e<a.length;e++)i.push([a[e][0]+t,a[e][1]+n,a[e][2]+r]);else if(e.hasM)for(let e=0;e<a.length;e++)i.push([a[e][0]+t,a[e][1]+n,a[e][2]]);else for(let e=0;e<a.length;e++)i.push([a[e][0]+t,a[e][1]+n]);s.addPath(i)}return s}return e.clone()}},22290:(e,t,n)=>{n.d(t,{G:()=>r,O:()=>s,S:()=>o});class r{*[Symbol.iterator](){let e=this.next();for(;e;)yield e,e=this.next()}}class s extends r{}class o extends r{constructor(e){super(),this.m_iGeom=-1,this.m_aGeoms=e?e.slice():[]}next(){if(this.m_iGeom<this.m_aGeoms.length-1){const e=this.m_aGeoms[++this.m_iGeom];return this.m_aGeoms[this.m_iGeom]=null,e}return null}tock(){return!1}getGeometryID(){return this.m_iGeom}getRank(){return 1}}},64030:(e,t,n)=>{n.d(t,{Dl:()=>m,Gr:()=>g,RT:()=>M,TR:()=>f,V2:()=>x,YI:()=>d,_0:()=>p,fS:()=>c,kI:()=>h,kS:()=>y});var r=n(74719),s=n(84190),o=n(42985),a=n(83874),i=n(13369),l=n(65920),u=n(78629);function c(e){let{edits:t,mode:n,relationships:s,shape:l,templatePart:c}=e,h=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(null===c)return;const{template:f}=c;if(!(0,o.xZ)(f))throw new r.default("shared-template:template-not-loaded","A template part's template must be loaded before use");if((0,o.JC)(f)){if(!(0,u.isPoint)(l))throw new r.default("shared-template:invalid-geometry","Preset templates must have a point geometry");(0,i.createPresetServiceEdit)({geometry:l,template:f,edits:t,relationships:s,rotation:0,mode:n,tag:h})}else(0,o.Cq)(f)&&(0,a.i)({geometry:l,template:f,edits:t,relationships:s,tag:h})}function h(e,t){if(!e||!(0,u.isPolygon)(e))return null;if(!t.hasZ&&!t.hasM)return e;let n=null,r=null;const s=t.hasZ&&t.hasM?3:2;switch(t.type){case"point":n=t.hasZ?t.z:null,r=t.hasM?t.m:null;break;case"polygon":case"polyline":{const e="polygon"===t.type?t.rings:t.paths;for(const o of e)for(const e of o)t.hasZ&&(null===n||e[2]>n)&&(n=e[2]),t.hasM&&(null===r||e[s]>r)&&(r=e[s])}break;case"multipoint":for(const e of t.points)t.hasZ&&(null===n||e[2]>n)&&(n=e[2]),t.hasM&&(null===r||e[s]>r)&&(r=e[s]);break;default:return e}const o=function(e,t,n,r,s){const o=[];for(const a of e)o.push(w(a,t,n,r,s));return o}(e.rings,t.hasZ,t.hasM,n,r);return new l.default({rings:o,spatialReference:e.spatialReference,hasZ:t.hasZ,hasM:t.hasM})}function f(e){let t=1;return(e.spatialReference.vcsWkid||e.spatialReference.latestVcsWkid)&&(t=(0,s.G9)(e.spatialReference)/(0,s.GA)(e.spatialReference)),t}function m(e){let t=!1;return void 0!==e.byNumber&&(t=!0===e.byNumber),t}function p(e){let t=0;return void 0!==e.count&&(t=e.count),t}function g(e,t){let n=0;return t?void 0!==e.proportional&&(n=e.proportional):void 0!==e.distanceValue&&(n=e.distanceValue),t&&(n/=100),n}function d(e){return!0===e.isProportional}function y(e){return!1!==e.createUnique}function x(e){let t=0;return void 0!==e.offsetDistance&&(t=e.offsetDistance),void 0!==e.side&&1===e.side&&(t*=-1),t}function M(e){return!0===e.vertexBeforeOffset}function w(e,t,n,r,s){const o=[];for(const a of e){const e=[a[0],a[1]];t&&(e[2]=r),n&&(e[t?3:2]=s),o.push(e)}return o}},84114:(e,t,n)=>{n.r(t),n.d(t,{execute:()=>c,executeMany:()=>h,supportsCurves:()=>f});var r=n(62631),s=n(22290),o=n(9270);class a extends s.G{constructor(e,t,n){super(),this.m_index=-1,this.m_transformation=t.clone(),this.m_inputGeometryCursor=e}next(){let e;if(e=this.m_inputGeometryCursor.next()){(0,o.d)(e),this.m_index=this.m_inputGeometryCursor.getGeometryID();const t=e.clone();return t.applyTransformation(this.m_transformation),t}return null}getGeometryID(){return this.m_index}tock(){return!0}getRank(){return 1}}const i=new class{getOperatorType(){return 10303}supportsCurves(){return!0}accelerateGeometry(e,t,n){return!1}canAccelerateGeometry(e){return!1}executeMany(e,t,n){return new a(e,t,n)}execute(e,t,n){const r=e.clone();return r.applyTransformation(t),r}};function l(e,t){return i.execute(e,t,null)}var u=n(2862);function c(e,t){const n=(0,u.getSpatialReference)(e);return(0,u.toGeometry)(l((0,u.fromGeometry)(e),t.transform),n)}function h(e,t){const n=e.map(u.fromGeometry),o=(0,u.getSpatialReference)(e);return function(e,t){const n=i.executeMany(new s.S(e),t,null);return Array.from(n)}(n,t.transform).map((e=>(0,u.toGeometry)(e,o))).filter(r.Ru)}const f=i.supportsCurves()},85993:(e,t,n)=>{n.r(t),n.d(t,{execute:()=>o,isAsync:()=>a});var r=n(64030),s=n(60757);function o(e){let{templatePart:t,shape:n,edits:o,relationships:a,mode:i}=e;if(!(0,s.Bi)(n))return;const{centroid:l}=n;l&&(0,r.fS)({templatePart:t,shape:l,edits:o,relationships:a,mode:i})}const a=!1},95719:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=n(54256),s=n(61853),o=n(64682);const a={uniform:0,conformal:1,rigid:2,"rigid-motion":3,general:4},i=e=>e.map((e=>new r.P(e.x,e.y)));class l{constructor(){this.transform=new s.T}calculateErrors(e,t){const n=e.length,r=t.length;if(n!==r)throw new Error(`The input length (${n}) is not the same as output length (${r})`);const s=[];return{rms:this.transform.calculateErrors(n,i(e),i(t),s),errorsOut:s}}flipX(e,t){return this.transform.flipX(e,t),this}flipY(e,t){return this.transform.flipY(e,t),this}initializeFromControlPoints(e,t,n,r){const s=t.length,o=n.length;if(s!==o)throw new Error(`The input length (${s}) is not the same as output length (${o})`);this.transform.initializeFromControlPoints(a[e],s,i(t),i(n),r?.transform)}isIdentity(){return this.transform.isIdentity()}rotate(e,t,n){const s=(0,o.kU)(e);return null!=t&&null!=n?this.transform.rotateAngleAbout(s,new r.P(t,n)):this.transform.rotateAngle(s),this}scale(e,t){return this.transform.scale(e,t),this}setIdentity(){this.transform.setIdentity()}setSwapCoordinates(){return this.transform.setSwapCoordinates(),this}shear(e,t){return this.transform.shear(e,t),this}shift(e,t){return this.transform.shiftCoords(e,t),this}}}}]);