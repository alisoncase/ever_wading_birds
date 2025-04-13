"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[60822,85022],{60822:(e,t,n)=>{n.r(t),n.d(t,{buffer:()=>D,changeDefaultSpatialReferenceTolerance:()=>B,clearDefaultSpatialReferenceTolerance:()=>W,clip:()=>u,contains:()=>l,convexHull:()=>M,crosses:()=>h,cut:()=>s,densify:()=>N,difference:()=>P,disjoint:()=>x,distance:()=>p,equals:()=>y,extendedSpatialReferenceInfo:()=>d,flipHorizontal:()=>C,flipVertical:()=>H,generalize:()=>J,geodesicArea:()=>Y,geodesicBuffer:()=>T,geodesicDensify:()=>O,geodesicLength:()=>j,intersect:()=>V,intersectLinesToPoints:()=>q,intersects:()=>g,isSimple:()=>v,nearestCoordinate:()=>z,nearestVertex:()=>b,nearestVertices:()=>E,offset:()=>_,overlaps:()=>m,planarArea:()=>I,planarLength:()=>X,relate:()=>w,rotate:()=>k,simplify:()=>R,symmetricDifference:()=>S,touches:()=>G,union:()=>Z,within:()=>A});var r=n(80556),a=n(97653),i=n(31329),c=n(93321),o=n(85022);function f(e){const t=Array.isArray(e)?e[0].spatialReference:e.spatialReference;return t?(0,r.PZ)(c.default,t):c.default.WGS84}function d(e){return i.G.extendedSpatialReferenceInfo(e)}function u(e,t){return(0,a.f)(e),i.G.clip(o.hydratedAdapter,f(e),e,t)}function s(e,t){return(0,a.f)(e),i.G.cut(o.hydratedAdapter,f(e),e,t)}function l(e,t){return(0,a.f)(e),(0,a.f)(t),i.G.contains(o.hydratedAdapter,f(e),e,t)}function h(e,t){return(0,a.f)(e),(0,a.f)(t),i.G.crosses(o.hydratedAdapter,f(e),e,t)}function p(e,t,n){return(0,a.f)(e),(0,a.f)(t),i.G.distance(o.hydratedAdapter,f(e),e,t,n)}function y(e,t){return(0,a.f)(e),(0,a.f)(t),i.G.equals(o.hydratedAdapter,f(e),e,t)}function g(e,t){return(0,a.f)(e),(0,a.f)(t),i.G.intersects(o.hydratedAdapter,f(e),e,t)}function G(e,t){return(0,a.f)(e),(0,a.f)(t),i.G.touches(o.hydratedAdapter,f(e),e,t)}function A(e,t){return(0,a.f)(e),(0,a.f)(t),i.G.within(o.hydratedAdapter,f(e),e,t)}function x(e,t){return(0,a.f)(e),(0,a.f)(t),i.G.disjoint(o.hydratedAdapter,f(e),e,t)}function m(e,t){return(0,a.f)(e),(0,a.f)(t),i.G.overlaps(o.hydratedAdapter,f(e),e,t)}function w(e,t,n){return(0,a.f)(e),(0,a.f)(t),i.G.relate(o.hydratedAdapter,f(e),e,t,n)}function v(e){return(0,a.f)(e),i.G.isSimple(o.hydratedAdapter,f(e),e)}function R(e){return(0,a.f)(e),i.G.simplify(o.hydratedAdapter,f(e),e)}function M(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return i.G.convexHull(o.hydratedAdapter,f(e),e,t)}function P(e,t){return(0,a.f)(t),i.G.difference(o.hydratedAdapter,f(e),e,t)}function S(e,t){return(0,a.f)(t),i.G.symmetricDifference(o.hydratedAdapter,f(e),e,t)}function V(e,t){return(0,a.f)(t),i.G.intersect(o.hydratedAdapter,f(e),e,t)}function Z(e){return i.G.union(o.hydratedAdapter,f(e),e)}function _(e,t,n,r,a,c){return i.G.offset(o.hydratedAdapter,f(e),e,t,n,r,a,c)}function D(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return i.G.buffer(o.hydratedAdapter,f(e),e,t,n,r)}function T(e,t,n,r,a,c){return i.G.geodesicBuffer(o.hydratedAdapter,f(e),e,t,n,r,a,c)}function z(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return(0,a.f)(e),i.G.nearestCoordinate(o.hydratedAdapter,f(e),e,t,n)}function b(e,t){return(0,a.f)(e),i.G.nearestVertex(o.hydratedAdapter,f(e),e,t)}function E(e,t,n,r){return(0,a.f)(e),i.G.nearestVertices(o.hydratedAdapter,f(e),e,t,n,r)}function L(e){return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?e.extent?.center??null:null}function k(e,t,n){if(null==e)throw new F;const r=e.spatialReference;if(null==(n=n??L(e)))throw new F;const a=e.constructor.fromJSON(i.G.rotate(e,t,n));return a.spatialReference=r,a}function C(e,t){if(null==e)throw new F;const n=e.spatialReference;if(null==(t=t??L(e)))throw new F;const r=e.constructor.fromJSON(i.G.flipHorizontal(e,t));return r.spatialReference=n,r}function H(e,t){if(null==e)throw new F;const n=e.spatialReference;if(null==(t=t??L(e)))throw new F;const r=e.constructor.fromJSON(i.G.flipVertical(e,t));return r.spatialReference=n,r}function J(e,t,n,r){return(0,a.f)(e),i.G.generalize(o.hydratedAdapter,f(e),e,t,n,r)}function N(e,t,n){return(0,a.f)(e),i.G.densify(o.hydratedAdapter,f(e),e,t,n)}function O(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return(0,a.f)(e),i.G.geodesicDensify(o.hydratedAdapter,f(e),e,t,n,r)}function I(e,t){return(0,a.f)(e),i.G.planarArea(o.hydratedAdapter,f(e),e,t)}function X(e,t){return(0,a.f)(e),i.G.planarLength(o.hydratedAdapter,f(e),e,t)}function Y(e,t,n){return(0,a.f)(e),i.G.geodesicArea(o.hydratedAdapter,f(e),e,t,n)}function j(e,t,n){return(0,a.f)(e),i.G.geodesicLength(o.hydratedAdapter,f(e),e,t,n)}function q(e,t){return i.G.intersectLinesToPoints(o.hydratedAdapter,f(e),e,t)}function B(e,t){i.G.changeDefaultSpatialReferenceTolerance(e,t)}function W(e){i.G.clearDefaultSpatialReferenceTolerance(e)}class F extends Error{constructor(){super("Illegal Argument Exception")}}},85022:(e,t,n)=>{n.r(t),n.d(t,{hydratedAdapter:()=>f});var r=n(12560),a=n(76493),i=n(75400),c=n(65920),o=n(54824);const f={convertToGEGeometry:function(e,t){if(null==t)return null;let n="cache"in t?t.cache._geVersion:void 0;return null==n&&(n=e.convertJSONToGeometry(t),"cache"in t&&(t.cache._geVersion=n)),n},exportPoint:function(e,t,n){const r=e.hasZ(t),a=e.hasM(t),c=new i.default({x:e.getPointX(t),y:e.getPointY(t),spatialReference:n});return r&&(c.z=e.getPointZ(t)),a&&(c.m=e.getPointM(t)),c.cache._geVersion=t,c},exportPolygon:function(e,t,n){const r=new c.default({rings:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:n});return r.cache._geVersion=t,r},exportPolyline:function(e,t,n){const r=new o.default({paths:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:n});return r.cache._geVersion=t,r},exportMultipoint:function(e,t,n){const r=new a.default({hasZ:e.hasZ(t),hasM:e.hasM(t),points:e.exportPoints(t),spatialReference:n});return r.cache._geVersion=t,r},exportExtent:function(e,t,n){const a=e.hasZ(t),i=e.hasM(t),c=new r.default({xmin:e.getXMin(t),ymin:e.getYMin(t),xmax:e.getXMax(t),ymax:e.getYMax(t),spatialReference:n});if(a){const n=e.getZExtent(t);c.zmin=n.vmin,c.zmax=n.vmax}if(i){const n=e.getMExtent(t);c.mmin=n.vmin,c.mmax=n.vmax}return c.cache._geVersion=t,c}}}}]);