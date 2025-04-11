"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[822,3959,5022,8842],{6461:(e,t,n)=>{n.d(t,{c:()=>r,g:()=>a});var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function a(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}},60822:(e,t,n)=>{n.r(t),n.d(t,{buffer:()=>Z,changeDefaultSpatialReferenceTolerance:()=>B,clearDefaultSpatialReferenceTolerance:()=>W,clip:()=>u,contains:()=>l,convexHull:()=>M,crosses:()=>p,cut:()=>s,densify:()=>J,difference:()=>P,disjoint:()=>x,distance:()=>h,equals:()=>y,extendedSpatialReferenceInfo:()=>d,flipHorizontal:()=>k,flipVertical:()=>C,generalize:()=>H,geodesicArea:()=>X,geodesicBuffer:()=>T,geodesicDensify:()=>N,geodesicLength:()=>Y,intersect:()=>V,intersectLinesToPoints:()=>q,intersects:()=>g,isSimple:()=>v,nearestCoordinate:()=>D,nearestVertex:()=>z,nearestVertices:()=>E,offset:()=>b,overlaps:()=>m,planarArea:()=>j,planarLength:()=>I,relate:()=>w,rotate:()=>O,simplify:()=>R,symmetricDifference:()=>S,touches:()=>A,union:()=>_,within:()=>G});var r=n(80556),a=n(97653),i=n(31329),o=n(93321),c=n(85022);function f(e){const t=Array.isArray(e)?e[0].spatialReference:e.spatialReference;return t?(0,r.PZ)(o.A,t):o.A.WGS84}function d(e){return i.G.extendedSpatialReferenceInfo(e)}function u(e,t){return(0,a.f)(e),i.G.clip(c.hydratedAdapter,f(e),e,t)}function s(e,t){return(0,a.f)(e),i.G.cut(c.hydratedAdapter,f(e),e,t)}function l(e,t){return(0,a.f)(e),(0,a.f)(t),i.G.contains(c.hydratedAdapter,f(e),e,t)}function p(e,t){return(0,a.f)(e),(0,a.f)(t),i.G.crosses(c.hydratedAdapter,f(e),e,t)}function h(e,t,n){return(0,a.f)(e),(0,a.f)(t),i.G.distance(c.hydratedAdapter,f(e),e,t,n)}function y(e,t){return(0,a.f)(e),(0,a.f)(t),i.G.equals(c.hydratedAdapter,f(e),e,t)}function g(e,t){return(0,a.f)(e),(0,a.f)(t),i.G.intersects(c.hydratedAdapter,f(e),e,t)}function A(e,t){return(0,a.f)(e),(0,a.f)(t),i.G.touches(c.hydratedAdapter,f(e),e,t)}function G(e,t){return(0,a.f)(e),(0,a.f)(t),i.G.within(c.hydratedAdapter,f(e),e,t)}function x(e,t){return(0,a.f)(e),(0,a.f)(t),i.G.disjoint(c.hydratedAdapter,f(e),e,t)}function m(e,t){return(0,a.f)(e),(0,a.f)(t),i.G.overlaps(c.hydratedAdapter,f(e),e,t)}function w(e,t,n){return(0,a.f)(e),(0,a.f)(t),i.G.relate(c.hydratedAdapter,f(e),e,t,n)}function v(e){return(0,a.f)(e),i.G.isSimple(c.hydratedAdapter,f(e),e)}function R(e){return(0,a.f)(e),i.G.simplify(c.hydratedAdapter,f(e),e)}function M(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return i.G.convexHull(c.hydratedAdapter,f(e),e,t)}function P(e,t){return(0,a.f)(t),i.G.difference(c.hydratedAdapter,f(e),e,t)}function S(e,t){return(0,a.f)(t),i.G.symmetricDifference(c.hydratedAdapter,f(e),e,t)}function V(e,t){return(0,a.f)(t),i.G.intersect(c.hydratedAdapter,f(e),e,t)}function _(e){return i.G.union(c.hydratedAdapter,f(e),e)}function b(e,t,n,r,a,o){return i.G.offset(c.hydratedAdapter,f(e),e,t,n,r,a,o)}function Z(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return i.G.buffer(c.hydratedAdapter,f(e),e,t,n,r)}function T(e,t,n,r,a,o){return i.G.geodesicBuffer(c.hydratedAdapter,f(e),e,t,n,r,a,o)}function D(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return(0,a.f)(e),i.G.nearestCoordinate(c.hydratedAdapter,f(e),e,t,n)}function z(e,t){return(0,a.f)(e),i.G.nearestVertex(c.hydratedAdapter,f(e),e,t)}function E(e,t,n,r){return(0,a.f)(e),i.G.nearestVertices(c.hydratedAdapter,f(e),e,t,n,r)}function L(e){return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?e.extent?.center??null:null}function O(e,t,n){if(null==e)throw new F;const r=e.spatialReference;if(null==(n=n??L(e)))throw new F;const a=e.constructor.fromJSON(i.G.rotate(e,t,n));return a.spatialReference=r,a}function k(e,t){if(null==e)throw new F;const n=e.spatialReference;if(null==(t=t??L(e)))throw new F;const r=e.constructor.fromJSON(i.G.flipHorizontal(e,t));return r.spatialReference=n,r}function C(e,t){if(null==e)throw new F;const n=e.spatialReference;if(null==(t=t??L(e)))throw new F;const r=e.constructor.fromJSON(i.G.flipVertical(e,t));return r.spatialReference=n,r}function H(e,t,n,r){return(0,a.f)(e),i.G.generalize(c.hydratedAdapter,f(e),e,t,n,r)}function J(e,t,n){return(0,a.f)(e),i.G.densify(c.hydratedAdapter,f(e),e,t,n)}function N(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return(0,a.f)(e),i.G.geodesicDensify(c.hydratedAdapter,f(e),e,t,n,r)}function j(e,t){return(0,a.f)(e),i.G.planarArea(c.hydratedAdapter,f(e),e,t)}function I(e,t){return(0,a.f)(e),i.G.planarLength(c.hydratedAdapter,f(e),e,t)}function X(e,t,n){return(0,a.f)(e),i.G.geodesicArea(c.hydratedAdapter,f(e),e,t,n)}function Y(e,t,n){return(0,a.f)(e),i.G.geodesicLength(c.hydratedAdapter,f(e),e,t,n)}function q(e,t){return i.G.intersectLinesToPoints(c.hydratedAdapter,f(e),e,t)}function B(e,t){i.G.changeDefaultSpatialReferenceTolerance(e,t)}function W(e){i.G.clearDefaultSpatialReferenceTolerance(e)}class F extends Error{constructor(){super("Illegal Argument Exception")}}},85022:(e,t,n)=>{n.r(t),n.d(t,{hydratedAdapter:()=>f});var r=n(12560),a=n(76493),i=n(75400),o=n(65920),c=n(54824);const f={convertToGEGeometry:function(e,t){if(null==t)return null;let n="cache"in t?t.cache._geVersion:void 0;return null==n&&(n=e.convertJSONToGeometry(t),"cache"in t&&(t.cache._geVersion=n)),n},exportPoint:function(e,t,n){const r=e.hasZ(t),a=e.hasM(t),o=new i.A({x:e.getPointX(t),y:e.getPointY(t),spatialReference:n});return r&&(o.z=e.getPointZ(t)),a&&(o.m=e.getPointM(t)),o.cache._geVersion=t,o},exportPolygon:function(e,t,n){const r=new o.A({rings:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:n});return r.cache._geVersion=t,r},exportPolyline:function(e,t,n){const r=new c.A({paths:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:n});return r.cache._geVersion=t,r},exportMultipoint:function(e,t,n){const r=new a.A({hasZ:e.hasZ(t),hasM:e.hasM(t),points:e.exportPoints(t),spatialReference:n});return r.cache._geVersion=t,r},exportExtent:function(e,t,n){const a=e.hasZ(t),i=e.hasM(t),o=new r.A({xmin:e.getXMin(t),ymin:e.getYMin(t),xmax:e.getXMax(t),ymax:e.getYMax(t),spatialReference:n});if(a){const n=e.getZExtent(t);o.zmin=n.vmin,o.zmax=n.vmax}if(i){const n=e.getMExtent(t);o.mmin=n.vmin,o.mmax=n.vmax}return o.cache._geVersion=t,o}}}}]);