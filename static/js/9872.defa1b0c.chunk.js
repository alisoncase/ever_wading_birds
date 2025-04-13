"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[2862,9872,22290,28659],{2862:(t,e,s)=>{s.r(e),s.d(e,{fromExtent:()=>G,fromGeometry:()=>y,fromMultipoint:()=>C,fromPoint:()=>x,fromPolygon:()=>v,fromPolyline:()=>I,fromSpatialReference:()=>P,getSpatialReference:()=>d,toExtent:()=>k,toGeometry:()=>S,toMultipoint:()=>M,toPoint:()=>w,toPolygon:()=>E,toPolyline:()=>F});var i=s(54256),n=(s(45204),s(9270)),r=s(12834),o=s(65889),a=s(75646),h=s(12560),m=s(76493),u=s(75400),c=s(65920),l=s(54824),p=(s(3016),s(5410));const _="_gxVersion",g=2,f=1;function d(t){return Array.isArray(t)?t[0].spatialReference:t.spatialReference}function y(t){switch(t.type){case"point":return x(t);case"multipoint":return C(t);case"polyline":return I(t);case"polygon":return v(t);case"extent":return G(t);default:throw new Error(`Unsupported geometry type: ${t.type}`)}}function G(t){if(!t.getCacheValue(_)){const e=new r.E;e.setCoords(t.xmin,t.ymin,t.xmax,t.ymax),t.hasM&&e.setInterval(g,0,t.mmin,t.mmax),t.hasZ&&e.setInterval(f,0,t.zmin,t.zmax),t.setCacheValue(_,e)}return t.getCacheValue(_)}function C(t){if(!t.getCacheValue(_)){const e=new o.M,s=new r.P,i=t.points,n=t.hasM,a=t.hasZ,h=a?3:2;for(let t=0,r=i.length;t<r;t++){const r=i[t];s.setXYCoords(r[0],r[1]),a&&s.setZ(r[2]??0),n&&s.setM(r[h]??NaN),e.add(s)}t.setCacheValue(_,e)}return t.getCacheValue(_)}function x(t){if(!t.getCacheValue(_)){const e=new r.P;e.setXYCoords(t.x,t.y),t.hasM&&e.setM(t.m),t.hasZ&&e.setZ(t.z),t.setCacheValue(_,e)}return t.getCacheValue(_)}function v(t){if(!t.getCacheValue(_)){const{curveRings:e,hasM:s,hasZ:i,rings:n}=t,r=(0,p.fromGeometryToGXGeometry)({curveRings:e,hasM:s,hasZ:i,rings:n});t.setCacheValue(_,r)}return t.getCacheValue(_)}function I(t){if(!t.getCacheValue(_)){const{curvePaths:e,hasM:s,hasZ:i,paths:n}=t,r=(0,p.fromGeometryToGXGeometry)({curvePaths:e,hasM:s,hasZ:i,paths:n});t.setCacheValue(_,r)}return t.getCacheValue(_)}function P(t){if(t.wkid)return(0,a.c)(t.wkid);const e=t.wkt2||t.wkt;return e?(0,a.b)(e):null}function S(t,e){if(t)switch(t.getGeometryType()){case n.G.enumPoint:return w(t,e);case n.G.enumEnvelope:return k(t,e);case n.G.enumMultiPoint:return M(t,e);case n.G.enumPolyline:return F(t,e);case n.G.enumPolygon:return E(t,e)}return null}function k(t,e){if(t.isEmpty())return null;const s=new h.default({xmin:t.getXMin(),ymin:t.getYMin(),xmax:t.getXMax(),ymax:t.getYMax(),spatialReference:e}),i=t.getDescription();if(i.hasM()){const e=t.queryInterval(g,0);s.mmin=e.vmin,s.mmax=e.vmax}if(i.hasZ()){const e=t.queryInterval(f,0);s.zmin=e.vmin,s.zmax=e.vmax}return s.setCacheValue(_,t),s}function M(t,e){if(t.isEmpty())return null;const s=t.getDescription(),i=s.hasM(),n=s.hasZ(),o=[],a=new r.P;for(let r=0,m=t.getPointCount();r<m;r++){t.getPointByVal(r,a);const e=[a.getX(),a.getY()];n&&e.push(a.getZ()),i&&e.push(a.getM()),o.push(e)}const h=new m.default({hasM:i,hasZ:n,points:o,spatialReference:e});return h.setCacheValue(_,t),h}function w(t,e){if(t instanceof i.P)return new u.default({x:t.x,y:t.y,spatialReference:e});if(t.isEmpty())return null;const s=new u.default({x:t.getX(),y:t.getY(),spatialReference:e}),n=t.getDescription();return n.hasM()&&(s.m=t.getM()),n.hasZ()&&(s.z=t.getZ()),s.setCacheValue(_,t),s}function E(t,e){if(t.isEmpty())return null;const s=c.default.fromJSON({spatialReference:e,...(0,p.toGeometry)(t,null)});return s.setCacheValue(_,t),s}function F(t,e){if(t.isEmpty())return null;const s=l.default.fromJSON({spatialReference:e,...(0,p.toGeometry)(t,null)});return s.setCacheValue(_,t),s}},9872:(t,e,s)=>{s.r(e),s.d(e,{executeMany:()=>g,supportsCurves:()=>f});var i=s(62631),n=s(22290),r=s(9270),o=s(45204),a=s(12834),h=s(65889),m=s(75646),u=s(54256);function c(t){t&&t.checkProgress()}class l extends n.O{constructor(t,e,s,i){super(),this.m_shape=null,this.m_topoGraph=null,this.m_curveStitcher=null,this.m_stitchMaxDeviation=0,this.m_chainStack=[],this.m_bitsetToChains=null,this.m_chainsLists=null,this.m_visitedChainsIndex=-1,this.m_index=-1,this.m_geometryIndex=-1,this.m_progressCounter=0,this.m_currentIds=[],this.m_currentEdgeIds=[],t||(0,r.t)(""),this.m_progressTracker=i,this.m_options=0!==s?s:3,(this.m_options<=0||this.m_options>63)&&(0,r.t)("options"),this.m_inputGeometryCursor=t,this.m_sr=e}tock(){return!0}getRank(){return 1}next(){if(-1===this.m_index){this.m_shape=new h.E;const t=new o.Envelope2D;t.setEmpty(),this.m_geometryIndex=this.m_shape.createGeometryUserIndex();for(let a=this.m_inputGeometryCursor.next();null!==a;a=this.m_inputGeometryCursor.next()){(0,r.d)(a);const e=this.m_shape.addGeometry(a);a.getGeometryType()!==r.G.enumPolygon&&(0,r.t)("Polygon Overlay only supports Polygons"),this.m_shape.setGeometryUserIndex(e,this.m_geometryIndex,this.m_inputGeometryCursor.getGeometryID());const s=this.m_inputGeometryCursor.getRank();s>h.o&&this.m_shape.assignRankToGeometryVertices(e,s);const i=new o.Envelope2D;a.queryLooseEnvelope(i),t.mergeEnvelope2D(i),c(this.m_progressTracker)}this.m_inputGeometryCursor=null;const e=(0,a.a)(this.m_sr,t,!0),s=(0,a.a)(this.m_sr,t,!1);t.inflate(10*e.total()),this.m_shape.forceSetEnvelope2D(t),this.m_stitchMaxDeviation=0;let i=0;if(this.m_shape.hasCurves()){this.m_curveStitcher=new m.C;const s=(0,m.k)(e.total(),t);this.m_stitchMaxDeviation=(0,m.s)(e.total()),i=(0,m.ar)(s,this.m_stitchMaxDeviation),(0,m.l)(this.m_shape,s,e.total(),12e3,this.m_curveStitcher,null,this.m_progressTracker)}if((0,m.ap)(this.m_shape,s,this.m_progressTracker)){(0,m.aq)(this.m_shape,e.add(i),this.m_progressTracker,!0,!1);for(let t=this.m_shape.getFirstGeometry();t!==h.n;t=this.m_shape.getNextGeometry(t))this.m_shape.getGeometryType(t)===r.G.enumPolygon&&(0,m.an)(this.m_shape,t,-1,!1,h.n,this.m_progressTracker)}this.m_topoGraph=new m.at,this.m_topoGraph.buildGeometryParentageSets(),this.m_topoGraph.setEditShape(this.m_shape,this.m_progressTracker);const n=this.m_topoGraph.getFirstChain();for(let r=this.m_topoGraph.getChainFirstIsland(n);r!==h.n;r=this.m_topoGraph.getChainNextInParent(r))for(let t=this.m_topoGraph.getChainFirstIsland(r);t!==h.n;t=this.m_topoGraph.getChainNextInParent(t))this.m_chainStack.push(t);if(16&this.m_options){this.m_visitedChainsIndex=this.m_topoGraph.createUserIndexForChains(),this.m_bitsetToChains=new Map,this.m_chainsLists=new m.au;const t=[],e=this.m_topoGraph.getFirstChain();for(t.push(e);t.length>0;){const e=t.at(-1);t.pop();for(let s=this.m_topoGraph.getChainFirstIsland(e);s!==h.n;s=this.m_topoGraph.getChainNextInParent(s))for(let e=this.m_topoGraph.getChainFirstIsland(s);e!==h.n;e=this.m_topoGraph.getChainNextInParent(e)){const s=this.m_topoGraph.getChainBitSet(e);if(null!==s&&!s.isZero()){let t;this.m_bitsetToChains.has(s)?t=this.m_bitsetToChains.get(s):(t=this.m_chainsLists.createList(),this.m_bitsetToChains.set(s,t)),this.m_chainsLists.addElement(t,e)}t.push(e)}}}}return this.makeNextGeometry()}getGeometryID(){return this.m_index}getGeometryIDs(){return this.m_currentIds.slice()}getBoundaryIDs(){return this.m_currentEdgeIds.slice()}buildIdsFromBitset(t,e){if(!t)return;const s=this.m_topoGraph.getGeometriesFromBits(t);if(s.length>0){for(let t=0,i=s.length;t<i;t++)e.push(this.m_shape.getGeometryUserIndex(s[t],this.m_geometryIndex));(0,u.v)(e)}}makeGeometryFromChainSinglePart(t){this.m_index++;const e=new h.E;null!==this.m_curveStitcher&&e.setCurveStitcherPointer(this.m_curveStitcher);const s=this.m_topoGraph.extractPolygonFromChainAndIslands(e,h.n,t,h.n);return null!==this.m_curveStitcher&&this.m_curveStitcher.stitchCurves(e,s,this.m_stitchMaxDeviation,!1),e.getGeometry(s)}makeGeometryFromChainMultiPart(t,e){this.m_index++;const s=new h.E;null!==this.m_curveStitcher&&s.setCurveStitcherPointer(this.m_curveStitcher);const i=this.m_bitsetToChains.has(e);(0,r.g)(i);const n=this.m_bitsetToChains.get(e);let o=h.n;for(let r=this.m_chainsLists.getFirst(n);r!==m.au.st_nullNode();r=this.m_chainsLists.getNext(r)){const t=this.m_chainsLists.getElement(r);o=this.m_topoGraph.extractPolygonFromChainAndIslands(s,o,t,h.n),this.m_topoGraph.setChainUserIndex(t,this.m_visitedChainsIndex,1)}return null!==this.m_curveStitcher&&this.m_curveStitcher.stitchCurves(s,o,this.m_stitchMaxDeviation,!1),s.getGeometry(o)}makeNextGeometry(){for(c(this.m_progressTracker);this.m_chainStack.length>0;){this.m_currentIds.length=0,this.m_currentEdgeIds.length=0;const t=this.m_chainStack.at(-1);this.m_chainStack.pop();const e=this.m_topoGraph.getChainArea(t);if(0!==e)if(e<0)for(let s=this.m_topoGraph.getChainFirstIsland(t);s!==h.n;s=this.m_topoGraph.getChainNextInParent(s))this.m_topoGraph.getChainArea(s)>0&&this.m_chainStack.push(s);else{for(let i=this.m_topoGraph.getChainFirstIsland(t);i!==h.n;i=this.m_topoGraph.getChainNextInParent(i))this.m_topoGraph.getChainArea(i)<0&&this.m_chainStack.push(i);if(-1!==this.m_visitedChainsIndex&&1===this.m_topoGraph.getChainUserIndex(t,this.m_visitedChainsIndex))continue;const e=t=>{const e=t.getUnorderedBitIterator();let s=0;for(;e.next()!==m.av.npos();)if(s++,s>1)return s;return s},s=e(this.m_topoGraph.getChainBitSet(t));if(s>0){if(1===s&&2&this.m_options||s>1&&1&this.m_options){const e=this.m_topoGraph.getChainBitSet(t);return this.buildIdsFromBitset(e,this.m_currentIds),16&this.m_options?this.makeGeometryFromChainMultiPart(t,e):this.makeGeometryFromChainSinglePart(t)}}else{if(!(12&~this.m_options)){if(32&this.m_options){const e=this.m_topoGraph.getChainBoundaryBitSet(t);this.buildIdsFromBitset(e,this.m_currentEdgeIds)}return this.makeGeometryFromChainSinglePart(t)}if(4&this.m_options){const s=this.m_topoGraph.getChainBoundaryBitSet(t);if(e(s)>1)return 32&this.m_options&&this.buildIdsFromBitset(s,this.m_currentEdgeIds),this.makeGeometryFromChainSinglePart(t);continue}if(8&this.m_options){const s=this.m_topoGraph.getChainBoundaryBitSet(t);if(1===e(s))return 32&this.m_options&&this.buildIdsFromBitset(s,this.m_currentEdgeIds),this.makeGeometryFromChainSinglePart(t);continue}}}}return null}}const p=new class{getOperatorType(){return 10012}accelerateGeometry(t,e,s){return!1}canAccelerateGeometry(t){return!1}supportsCurves(){return!0}executeMany(t,e,s,i){return new l(t,e,s,i)}};var _=s(2862);function g(t,e){let s=0;e&&(e.overlaps&&(s|=1),e.noOverlaps&&(s|=2),e.gaps&&(s|=4),e.holes&&(s|=8),e.multiPart&&(s|=16));const r=t.map(_.fromGeometry),o=(0,_.getSpatialReference)(t);return function(t,e,s){const i=p.executeMany(new n.S(t),e,s,null);return Array.from(i)}(r,(0,_.fromSpatialReference)(o),s).map((t=>(0,_.toPolygon)(t,o))).filter(i.Ru)}const f=p.supportsCurves()},22290:(t,e,s)=>{s.d(e,{G:()=>i,O:()=>n,S:()=>r});class i{*[Symbol.iterator](){let t=this.next();for(;t;)yield t,t=this.next()}}class n extends i{}class r extends i{constructor(t){super(),this.m_iGeom=-1,this.m_aGeoms=t?t.slice():[]}next(){if(this.m_iGeom<this.m_aGeoms.length-1){const t=this.m_aGeoms[++this.m_iGeom];return this.m_aGeoms[this.m_iGeom]=null,t}return null}tock(){return!1}getGeometryID(){return this.m_iGeom}getRank(){return 1}}}}]);