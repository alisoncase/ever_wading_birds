"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[2862,8482,8659,9909],{2862:(e,t,n)=>{n.r(t),n.d(t,{fromExtent:()=>C,fromGeometry:()=>G,fromMultipoint:()=>M,fromPoint:()=>v,fromPolygon:()=>w,fromPolyline:()=>d,fromSpatialReference:()=>V,getSpatialReference:()=>x,toExtent:()=>_,toGeometry:()=>P,toMultipoint:()=>Z,toPoint:()=>R,toPolygon:()=>E,toPolyline:()=>b});var r=n(54256),a=(n(45204),n(9270)),s=n(12834),o=n(65889),i=n(75646),u=n(12560),c=n(76493),l=n(75400),m=n(65920),h=n(54824),f=(n(3016),n(5410));const g="_gxVersion",p=2,y=1;function x(e){return Array.isArray(e)?e[0].spatialReference:e.spatialReference}function G(e){switch(e.type){case"point":return v(e);case"multipoint":return M(e);case"polyline":return d(e);case"polygon":return w(e);case"extent":return C(e);default:throw new Error(`Unsupported geometry type: ${e.type}`)}}function C(e){if(!e.getCacheValue(g)){const t=new s.E;t.setCoords(e.xmin,e.ymin,e.xmax,e.ymax),e.hasM&&t.setInterval(p,0,e.mmin,e.mmax),e.hasZ&&t.setInterval(y,0,e.zmin,e.zmax),e.setCacheValue(g,t)}return e.getCacheValue(g)}function M(e){if(!e.getCacheValue(g)){const t=new o.M,n=new s.P,r=e.points,a=e.hasM,i=e.hasZ,u=i?3:2;for(let e=0,s=r.length;e<s;e++){const s=r[e];n.setXYCoords(s[0],s[1]),i&&n.setZ(s[2]??0),a&&n.setM(s[u]??NaN),t.add(n)}e.setCacheValue(g,t)}return e.getCacheValue(g)}function v(e){if(!e.getCacheValue(g)){const t=new s.P;t.setXYCoords(e.x,e.y),e.hasM&&t.setM(e.m),e.hasZ&&t.setZ(e.z),e.setCacheValue(g,t)}return e.getCacheValue(g)}function w(e){if(!e.getCacheValue(g)){const{curveRings:t,hasM:n,hasZ:r,rings:a}=e,s=(0,f.fromGeometryToGXGeometry)({curveRings:t,hasM:n,hasZ:r,rings:a});e.setCacheValue(g,s)}return e.getCacheValue(g)}function d(e){if(!e.getCacheValue(g)){const{curvePaths:t,hasM:n,hasZ:r,paths:a}=e,s=(0,f.fromGeometryToGXGeometry)({curvePaths:t,hasM:n,hasZ:r,paths:a});e.setCacheValue(g,s)}return e.getCacheValue(g)}function V(e){if(e.wkid)return(0,i.c)(e.wkid);const t=e.wkt2||e.wkt;return t?(0,i.b)(t):null}function P(e,t){if(e)switch(e.getGeometryType()){case a.G.enumPoint:return R(e,t);case a.G.enumEnvelope:return _(e,t);case a.G.enumMultiPoint:return Z(e,t);case a.G.enumPolyline:return b(e,t);case a.G.enumPolygon:return E(e,t)}return null}function _(e,t){if(e.isEmpty())return null;const n=new u.A({xmin:e.getXMin(),ymin:e.getYMin(),xmax:e.getXMax(),ymax:e.getYMax(),spatialReference:t}),r=e.getDescription();if(r.hasM()){const t=e.queryInterval(p,0);n.mmin=t.vmin,n.mmax=t.vmax}if(r.hasZ()){const t=e.queryInterval(y,0);n.zmin=t.vmin,n.zmax=t.vmax}return n.setCacheValue(g,e),n}function Z(e,t){if(e.isEmpty())return null;const n=e.getDescription(),r=n.hasM(),a=n.hasZ(),o=[],i=new s.P;for(let s=0,c=e.getPointCount();s<c;s++){e.getPointByVal(s,i);const t=[i.getX(),i.getY()];a&&t.push(i.getZ()),r&&t.push(i.getM()),o.push(t)}const u=new c.A({hasM:r,hasZ:a,points:o,spatialReference:t});return u.setCacheValue(g,e),u}function R(e,t){if(e instanceof r.P)return new l.A({x:e.x,y:e.y,spatialReference:t});if(e.isEmpty())return null;const n=new l.A({x:e.getX(),y:e.getY(),spatialReference:t}),a=e.getDescription();return a.hasM()&&(n.m=e.getM()),a.hasZ()&&(n.z=e.getZ()),n.setCacheValue(g,e),n}function E(e,t){if(e.isEmpty())return null;const n=m.A.fromJSON({spatialReference:t,...(0,f.toGeometry)(e,null)});return n.setCacheValue(g,e),n}function b(e,t){if(e.isEmpty())return null;const n=h.A.fromJSON({spatialReference:t,...(0,f.toGeometry)(e,null)});return n.setCacheValue(g,e),n}},17319:(e,t,n)=>{n.d(t,{a:()=>i,e:()=>s,s:()=>o});var r=n(84190),a=n(2862);function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{unit:n}=t;let s=(0,a.fromGeometry)(e).calculateArea2D();if(s&&n){const t=(0,a.getSpatialReference)(e);if(t.isGeographic)throw new Error("Unable to convert from an angular area unit to a linear area unit.");const o=(0,r.B5)(t);o!==n&&(o?s=(0,r.oU)(s,o,n):(s=Math.sqrt(s),s*=(0,r.GA)(t),s**=2,s=(0,r.oU)(s,"square-meters",n)))}return s}const o=!0,i=Object.freeze(Object.defineProperty({__proto__:null,execute:s,supportsCurves:o},Symbol.toStringTag,{value:"Module"}))},22290:(e,t,n)=>{n.d(t,{G:()=>r,S:()=>a});class r{*[Symbol.iterator](){let e=this.next();for(;e;)yield e,e=this.next()}}class a extends r{constructor(e){super(),this.m_iGeom=-1,this.m_aGeoms=e?e.slice():[]}next(){if(this.m_iGeom<this.m_aGeoms.length-1){const e=this.m_aGeoms[++this.m_iGeom];return this.m_aGeoms[this.m_iGeom]=null,e}return null}tock(){return!1}getGeometryID(){return this.m_iGeom}getRank(){return 1}}},58891:(e,t,n)=>{n.r(t),n.d(t,{execute:()=>r.e,supportsCurves:()=>r.s});n(84190),n(2862);var r=n(17319)}}]);