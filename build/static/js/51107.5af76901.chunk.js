"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[2133,31754,51107,52453,55626,67011,70674,73177,81091,81343,81826,95570],{3864:(e,t,r)=>{r.d(t,{P_:()=>a,SJ:()=>n,iQ:()=>s,lg:()=>i});var o=r(42761);const n=(0,o.O)()({none:"none",startAndEnd:"start-and-end",startOnly:"start-only"}),i=(0,o.O)()({absoluteValue:"absolute-value",multiplier:"multiplier"}),s=["basic-grid","chronological-mono-timeline","chronological-multi-timeline","geographic-organic-standard","hierarchical-bottom-to-top","hierarchical-top-to-bottom","organic-community","organic-fusiform","organic-leaf-circle","organic-standard","radial-node-centric","radial-root-centric","tree-bottom-to-top","tree-left-to-right","tree-right-to-left","tree-top-to-bottom"],a=new Map([["basic-grid","basic-grid"],["geographic-organic-standard","geographic-organic-standard"],["hierarchical-bottom-to-top","hierarchical-bottom-to-top"],["hierarchical-top-to-bottom","hierarchical-bottom-to-top"],["organic-community","organic-community"],["organic-fusiform","organic-standard"],["organic-leaf-circle","organic-standard"],["organic-standard","organic-standard"],["radial-node-centric","radial-root-centric"],["radial-root-centric","radial-root-centric"],["tree-bottom-to-top","tree-left-to-right"],["tree-left-to-right","tree-left-to-right"],["tree-right-to-left","tree-left-to-right"],["tree-top-to-bottom","tree-left-to-right"],["chronological-mono-timeline","chronological-mono-timeline"],["chronological-multi-timeline","chronological-multi-timeline"]])},22209:(e,t,r)=>{r.d(t,{A:()=>a});var o=r(78629),n=r(81765),i=r(67011),s=r(39244);class a{constructor(){this._featureLookup=new Map}static getInstance(){return a.instance||(a.instance=new a),a.instance}static resetInstance(){a.instance&&(a.instance=null)}deleteFromStore(e){e.forEach((e=>{this._featureLookup.delete(e)}))}readFromStoreByList(e){const t=[];return e.forEach((e=>{const r=this.readFromStoreById(e);r&&t.push(r)})),t}readFromStoreById(e){return this._featureLookup.get(e)??null}writeToStore(e,t,r){const a=[];return e.forEach((e=>{if(!e?.id)return;e.properties||(e.properties=[]);let l,c=null;if(r&&e.properties[r]&&(c=(0,n.Ux)(e.properties[r])),"originId"in e&&"destinationId"in e&&(e.properties[s.Cz]=e.originId,e.properties[s.KQ]=e.destinationId),e.properties[t]=e.id,e.id&&this._featureLookup.has(e.id)&&this._featureLookup.get(e.id).attributes){const n=this._featureLookup.get(e.id),s=JSON.parse(JSON.stringify(Object.assign(n.attributes,e.properties)));r&&e.properties[r]&&(s[r]=(0,o.fromJSON)(e.properties[r])),l=new i.Om(c?JSON.parse(JSON.stringify(c)):n?.geometry?JSON.parse(JSON.stringify(n.geometry)):null,s,null,e.properties[t])}else l=new i.Om(c?JSON.parse(JSON.stringify(c)):null,e.properties,null,e.properties[t]);this._featureLookup.set(`${e.typeName?`${e.typeName}__${e.id}`:e.id}`,l),a.push(l)})),a}}},30449:(e,t,r)=>{r.r(t),r.d(t,{convertLayoutTypeToWebSupportedFormat:()=>M,getChronologicalOverlay:()=>N,getDefaultChronologicalOverlayLayerId:()=>E,getRelationshipEndNodeIds:()=>v,getRelationshipEndNodeMap:()=>b,loadRecordsIntoLocalCache:()=>w,utilsExtentToInBoundsRings:()=>T});var o=r(79625),n=r(74719),i=r(75400),s=r(65920),a=r(54824),l=r(70674),c=r(39244),u=r(22209),d=r(65373),h=r(3864),p=r(59858),y=r(52453),g=r(14360),f=r(92744),m=r(89320);function I(e,t){const r=new Map;if(t.dataModel?.relationshipTypes)for(const o of t.dataModel.relationshipTypes)o.name&&r.set(o.name,[]);for(const o of e)r.has(o.typeName)&&r.get(o.typeName)?.push(o.id);return r}async function v(e,t,r){const o=[],n=I(e,t),i={},s=[];for(const[u,d]of n){if(d.length<1)continue;const e=`${u}_ids`;i[e]=d,s.push(`MATCH (n)-[r:${u}]->(m) WHERE id(r) in $${e} RETURN id(n), labels(n)[0], id(m), labels(m)[0]`)}if(0===s.length)return[];const a=s.join(" UNION "),l=new y.default({openCypherQuery:a,bindParameters:i}),c=(await(0,p.executeQueryStreaming)(t,l,r?.requestOptions)).resultRowsStream.getReader();for(;;){const{done:e,value:t}=await c.read();if(e)break;for(const r of t)o.push({id:r[0],typeName:r[1]}),o.push({id:r[2],typeName:r[3]})}return o}async function b(e,t,r){const o=new Map,n=I(e,t),i={},s=[];for(const[u,d]of n){if(d.length<1)continue;const e=`${u}_ids`;i[e]=d,s.push(`MATCH (n)-[r:${u}]->(m) WHERE id(r) in $${e} RETURN id(r), id(n), id(m)`)}if(0===s.length)return o;const a=s.join(" UNION "),l=new y.default({openCypherQuery:a,bindParameters:i}),c=(await(0,p.executeQueryStreaming)(t,l,r?.requestOptions)).resultRowsStream.getReader();for(;;){const{done:e,value:t}=await c.read();if(e)break;for(const r of t)o.set(r[0],[r[1],r[2]])}return o}const _="ESRI__ChronologicalLayoutOverlay",E=()=>_,N=e=>{const t=[],r={type:"CIMGeometricEffectCut",beginCut:3,endCut:3};for(const n of e.chronologicalAuxiliaryGraphics?.lines??[]){const e={type:"CIMSolidStroke",enable:!0,width:n.width,color:[n.color.r,n.color.g,n.color.b,Math.round(n.color.a/100*255)],effects:n.dashPattern.length>0?[{type:"CIMGeometricEffectDashes",dashTemplate:n.dashPattern,lineDashEnding:"NoConstraint"},r]:[r]},i={type:"CIMVectorMarker",enable:!0,size:10,frame:{xmin:-5,ymin:-5,xmax:0,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[-12,-3.47],[-12,3.6],[-2.06,-.03],[-12,-3.47]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:[n.color.r,n.color.g,n.color.b,Math.round(n.color.a/100*255)]}]}}],markerPlacement:{type:"CIMMarkerPlacementOnLine",angleToLine:!0,relativeTo:"LineEnd",offsetAlongLine:0}},s=new g.default({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:n.arrowheadSizeAtEnd?[e,i]:[e]}}});for(const r of n.elements){const e=new a.default({paths:[[[r.origin.x,r.origin.y],[r.destination.x,r.destination.y]]]});t.push(new o.default({geometry:e,symbol:s}))}}for(const n of e.chronologicalAuxiliaryGraphics?.polygons??[]){const e=new f.default({color:[n.color.r,n.color.g,n.color.b,n.color.a/100],style:"solid",outline:null});for(const r of n.elements){const n=new s.default({rings:[r.points.map((e=>[e.x,e.y]))]});t.push(new o.default({geometry:n,symbol:e}))}}for(const n of e.chronologicalAuxiliaryGraphics?.texts??[]){let e="middle",r="center";switch(n.direction?.value){case d.aQ.left:r="right";break;case d.aQ.right:r="left";break;case d.aQ.bottom:e="bottom"}for(const s of n.elements){const a=new m.default({color:[n.color.r,n.color.g,n.color.b,n.color.a/100],text:s.str,font:{size:n.height,weight:"bold"},verticalAlignment:e,horizontalAlignment:r}),l=new i.default({x:s.anchor.x,y:s.anchor.y});t.push(new o.default({geometry:l,symbol:a}))}}return new l.default({graphics:t,listMode:"hide",title:_,id:_})},w=(e,t)=>{const r=new Map;for(const n of[...t.entityTypes??[],...t.relationshipTypes??[]])for(const e of n.properties??[])e.geometryType&&"esriGeometryNull"!==e.geometryType&&r.set(n.name,e.name??"");const o=u.A.getInstance();for(const n of e)o.writeToStore([n],c.dr,r.get(n.typeName??"")??"")},M=e=>h.P_.get(e)??"radial-root-centric";function T(e){if(!e.spatialReference.isWGS84)throw new n.default("knowledge-graph:layer-support-utils","The utilsExtentToInBoundsRings function only supports WGS84 spatial references.");return e.clone().normalize().map((e=>[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]))}},39244:(e,t,r)=>{r.d(t,{BL:()=>l,Cz:()=>n,KQ:()=>i,M1:()=>a,T1:()=>s,dr:()=>o});const o="ESRI__ID",n="ESRI__OriginID",i="ESRI__DestID",s="ESRI__LayoutGeometry",a="ESRI__AggregationCount",l="LC.ESRI__IsSpatial"},39817:(e,t,r)=>{r.d(t,{A:()=>n});var o=r(42080);class n{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this.lengths=e??[],this.coords=t??[]}static fromJSON(e){return new n(e.lengths,e.coords)}static fromRect(e){const[t,r,o,i]=e,s=o-t,a=i-r;return new n([5],[t,r,s,0,0,a,-s,0,0,-a])}get isPoint(){return 0===this.lengths.length&&this.coords.length>=2}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((e,t)=>e+t))}get usedMemory(){return 64+(0,o.Qf)(this.lengths,this.coords)}area(){let e=0,t=0;if(!this.lengths.length)return 0;for(let r=0;r<this.lengths.length;r++){const o=this.lengths[r];if(o<3)continue;let n=this.coords[2*t],i=this.coords[2*t+1];for(let r=1;r<o;r+=1){const o=this.coords[2*(r+t)],s=this.coords[2*(r+t)+1];e+=-.5*(o-n)*(s+i),n=o,i=s}t+=o}return e}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let r=0;r<this.lengths.length;r++){const o=this.lengths[r];for(let r=0;r<o;r++)e(this.coords[2*(r+t)],this.coords[2*(r+t)+1]);t+=o}}deltaDecode(){const e=this.clone(),{coords:t,lengths:r}=e;let o=0;for(const n of r){for(let e=1;e<n;e++)t[2*(o+e)]+=t[2*(o+e)-2],t[2*(o+e)+1]+=t[2*(o+e)-1];o+=n}return e}clone(e){if(0===this.lengths.length)return new n([],[this.coords[0],this.coords[1]]);const t=2*(0===this.lengths.length?1:this.lengths.reduce(((e,t)=>e+t))),r=this.coords.slice(0,t);return e?(e.set(r),new n(this.lengths,e)):new n(Array.from(this.lengths),Array.from(r))}}},40602:(e,t,r)=>{function o(e,t){return e?t?4:3:t?3:2}function n(e,t,r,n){if(!t?.lengths.length)return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const a=e.coords,l=[],c=r?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:u,coords:d}=t,h=o(r,n);let p=0;for(const o of u){const e=i(c,d,p,o,r,n);e&&l.push(e),p+=o*h}if(l.sort(((e,t)=>{let o=e[2]-t[2];return 0===o&&r&&(o=e[4]-t[4]),o})),l.length){let e=6*l[0][2];a[0]=l[0][0]/e,a[1]=l[0][1]/e,r&&(e=6*l[0][4],a[2]=0!==e?l[0][3]/e:0),(a[0]<c[0]||a[0]>c[1]||a[1]<c[2]||a[1]>c[3]||r&&(a[2]<c[4]||a[2]>c[5]))&&(a.length=0)}if(!a.length){const e=t.lengths[0]?s(d,0,u[0],r,n):null;if(!e)return null;a[0]=e[0],a[1]=e[1],r&&e.length>2&&(a[2]=e[2])}return e}function i(e,t,r,n,i,s){const a=o(i,s);let l=r,c=r+a,u=0,d=0,h=0,p=0,y=0;for(let o=0,f=n-1;o<f;o++,l+=a,c+=a){const r=t[l],o=t[l+1],n=t[l+2],s=t[c],a=t[c+1],g=t[c+2];let f=r*a-s*o;p+=f,u+=(r+s)*f,d+=(o+a)*f,i&&(f=r*g-s*n,h+=(n+g)*f,y+=f),r<e[0]&&(e[0]=r),r>e[1]&&(e[1]=r),o<e[2]&&(e[2]=o),o>e[3]&&(e[3]=o),i&&(n<e[4]&&(e[4]=n),n>e[5]&&(e[5]=n))}if(p>0&&(p*=-1),y>0&&(y*=-1),!p)return null;const g=[u,d,.5*p];return i&&(g[3]=h,g[4]=.5*y),g}function s(e,t,r,n,i){const s=o(n,i);let d=t,h=t+s,p=0,y=0,g=0,f=0;for(let o=0,m=r-1;o<m;o++,d+=s,h+=s){const t=e[d],r=e[d+1],o=e[d+2],i=e[h],s=e[h+1],m=e[h+2],I=n?l(t,r,o,i,s,m):a(t,r,i,s);if(I)if(p+=I,n){const e=u(t,r,o,i,s,m);y+=I*e[0],g+=I*e[1],f+=I*e[2]}else{const e=c(t,r,i,s);y+=I*e[0],g+=I*e[1]}}return p>0?n?[y/p,g/p,f/p]:[y/p,g/p]:r>0?n?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function a(e,t,r,o){const n=r-e,i=o-t;return Math.sqrt(n*n+i*i)}function l(e,t,r,o,n,i){const s=o-e,a=n-t,l=i-r;return Math.sqrt(s*s+a*a+l*l)}function c(e,t,r,o){return[e+.5*(r-e),t+.5*(o-t)]}function u(e,t,r,o,n,i){return[e+.5*(o-e),t+.5*(n-t),r+.5*(i-r)]}r.d(t,{Q:()=>n})},42080:(e,t,r)=>{r.d(t,{$B:()=>n,Qf:()=>c,Qh:()=>a,RS:()=>i,ez:()=>h,i5:()=>p,lM:()=>s,qK:()=>d,rq:()=>u});var o=r(25048);function n(e){return 32+e.length}const i=16;function s(e){if(!e)return 0;let t=d;for(const r in e)e.hasOwnProperty(r)&&(t+=l(e[r],!1));return t}function a(e){if(!e)return 0;if("number"==typeof e[0])return c(e);if(Array.isArray(e))return function(e){const t=e.length;if(0===t||"number"==typeof e[0])return u(e,8);let r=h;for(let o=0;o<t;o++)r+=l(e[o]);return r}(e);let t=d;for(const r in e)e.hasOwnProperty(r)&&(t+=l(e[r]));return t}function l(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];switch(typeof e){case"object":return t?a(e):d;case"string":return n(e);case"number":return i;case"boolean":return 4;default:return 8}}function c(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce(((e,t)=>e+(t?(0,o.iu)(t)?t.byteLength+p:Array.isArray(t)?u(t,i):0:0)),0)}function u(e,t){return h+e.length*t}const d=32,h=16,p=145},52453:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var o=r(93800),n=r(48602),i=(r(21265),r(50925),r(14746),r(75269)),s=r(93321),a=r(73177);let l=class extends a.default{constructor(e){super(e),this.bindParameters=null,this.bindGeometryQuantizationParameters=null,this.outputQuantizationParameters=null,this.outputSpatialReference=null,this.provenanceBehavior=null}};(0,o._)([(0,n.MZ)()],l.prototype,"bindParameters",void 0),(0,o._)([(0,n.MZ)()],l.prototype,"bindGeometryQuantizationParameters",void 0),(0,o._)([(0,n.MZ)()],l.prototype,"outputQuantizationParameters",void 0),(0,o._)([(0,n.MZ)({type:s.default})],l.prototype,"outputSpatialReference",void 0),(0,o._)([(0,n.MZ)()],l.prototype,"provenanceBehavior",void 0),l=(0,o._)([(0,i.$)("esri.rest.knowledgeGraph.GraphQueryStreaming")],l);const c=l},52579:(e,t,r)=>{r.d(t,{A:()=>o});class o{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new o;return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}},55626:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var o=r(93800),n=r(48602),i=(r(21265),r(50925),r(14746),r(75269)),s=r(75400),a=r(81091);let l=class extends a.default{constructor(e){super(e),this.layoutGeometry=null}};(0,o._)([(0,n.MZ)({type:s.default,json:{write:!0}})],l.prototype,"layoutGeometry",void 0),l=(0,o._)([(0,i.$)("esri.rest.knowledgeGraph.Entity")],l);const c=l},65373:(e,t,r)=>{r.d(t,{$C:()=>I,Hh:()=>s,J:()=>c,JT:()=>l,Tu:()=>f,Wg:()=>m,Xq:()=>b,aQ:()=>u,i6:()=>_,pM:()=>g,tx:()=>a,vJ:()=>v});var o=r(21772);let n,i=null;function s(){return n||(n=r.e(39685).then(r.bind(r,39685)).then((e=>e.l)).then((e=>{let{default:t}=e;return t({locateFile:e=>(0,o.s)(`esri/libs/linkchartlayout/${e}`)})})).then((e=>{!function(e){i=e}(e)})),n)}var a,l,c,u,d;(d=a||(a={}))[d.None=0]="None",d[d.IsMovable=1]="IsMovable",d[d.IsGeographic=2]="IsGeographic",d[d.IsRoot=4]="IsRoot",d[d.IsOld=8]="IsOld",function(e){e[e.Success=0]="Success",e[e.Error=1]="Error",e[e.Canceled=2]="Canceled"}(l||(l={})),function(e){e[e.Regular=0]="Regular",e[e.Curved=1]="Curved",e[e.Recursive=2]="Recursive"}(c||(c={})),function(e){e[e.right=0]="right",e[e.left=1]="left",e[e.top=2]="top",e[e.bottom=3]="bottom"}(u||(u={}));const h={none:0,"start-only":1,"start-and-end":2};function p(e){const t={timeDirection:"right",timeBannerUTCOffsetInMinutes:0,eventsTicksVisualization:"start-and-end",showDurationLineForNonZeroDurationEntityEvents:!0,durationLineWidth:5,entityPositionAtDurationRatio:1,showNonZeroDurationIntervalBounds:!1,separateTimeOverlaps:!0,separateTimelineOverlaps:!0,moveFirstBends:!0,secondBendRatio:.3,lineSeparationMultiplier:1,spaceSeparatedLinesEvenly:!1,useBezierCurves:!1,separatedLineShapeRatio:0,...e?.toJSON()??{},eventsTicksVisualization:e?.eventsTicksVisualization??"start-and-end"};return{...t,timeDirection:{value:u[t.timeDirection]??u.right},eventsTicksVisualization:{value:h[t.eventsTicksVisualization]??h["start-and-end"]}}}function y(e,t,r,o,n,s){const a=r.length,c=n.length,u=Float64Array.BYTES_PER_ELEMENT,d=Uint32Array.BYTES_PER_ELEMENT,h=Uint8Array.BYTES_PER_ELEMENT,p=16+a*(h+2*u)+c*(2*d),y=i._malloc(p);try{const h=y+16-y%16,p=h+a*u,g=p+a*u,f=g+c*d,m=f+c*d,I=()=>[i.HEAPF64.subarray(h>>3,(h>>3)+a),i.HEAPF64.subarray(p>>3,(p>>3)+a),i.HEAPU32.subarray(g>>2,(g>>2)+c),i.HEAPU32.subarray(f>>2,(f>>2)+c),i.HEAPU8.subarray(m,m+a)],[v,b,_,E,N]=I();v.set(r),b.set(o),_.set(n),E.set(s),N.set(t);const w=e(a,m,h,p,c,g,f);let M=null,T=null;if(w.value===l.Success){const e=i.getLayoutLinksTypes(),t=i.getLayoutLinksVerticesEndIndices(),r=i.getLayoutLinksVertices(),o=i.countLayoutLinksVertices();!c||e&&t?o&&!r?w.value=l.Error:(M={types:new Uint8Array(i.HEAPU8.subarray(e,e+c)),vertexEndIndex:new Uint32Array(i.HEAPU32.subarray(t>>2,(t>>2)+c)),vertices:new Float64Array(i.HEAPF64.subarray(r>>3,(r>>3)+2*o))},T=i.getAuxiliaryGraphicElements()):w.value=l.Error}const[S,C,A,L,R]=I();return r.set(S),o.set(C),n.set(A),s.set(L),t.set(R),{status:w.value,links:M,graphics:T}}finally{i._free(y),i.cleanupLayout()}}var g,f,m,I,v,b,_,E,N;!function(e){e.getMinIdealEdgeLength=function(){return i.getMinIdealEdgeLength()},e.apply=function(e,t,r,o,n,s){let a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:2,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:-1;return y(((t,r,o,n,s,u,d)=>i.applyForceDirectedLayout(e,t,r,o,n,s,u,d,a,l,c)),t,r,o,n,s)}}(g||(g={})),function(e){e.apply=function(e,t,r,o,n,s){let a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:2,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:-1;return y(((t,r,o,n,s,u,d)=>i.applyCommunityLayout(e,t,r,o,n,s,u,d,a,l,c)),t,r,o,n,s)}}(f||(f={})),function(e){e.apply=function(e,t,r,o,n,s){return y(((t,r,o,n,s,a,l)=>i.applySimpleLayout(e,t,r,o,n,s,a,l)),t,r,o,n,s)}}(m||(m={})),function(e){e.apply=function(e,t,r,o,n,s){return y(((t,r,o,n,s,a,l)=>i.applyHierarchicalLayout(e,t,r,o,n,s,a,l)),t,r,o,n,s)}}(I||(I={})),function(e){e.apply=function(e,t,r,o,n,s){return y(((t,r,o,n,s,a,l)=>i.applyRadialTreeLayout(e,t,r,o,n,s,a,l)),t,r,o,n,s)}}(v||(v={})),function(e){e.apply=function(e,t,r,o,n,s){return y(((t,r,o,n,s,a,l)=>i.applySmartTreeLayout(e,t,r,o,n,s,a,l)),t,r,o,n,s)}}(b||(b={})),function(e){e.apply=function(e,t,r,o,n,s,a,c,u,d,h,g){return y(((t,r,o,a,c,y,f)=>{if(n.length!==t)return{value:l.Error};if(s.length!==t)return{value:l.Error};if(u.length!==c)return{value:l.Error};if(d.length!==c)return{value:l.Error};const m=Float64Array.BYTES_PER_ELEMENT,I=16,v=i._malloc(I+t*m),b=i._malloc(I+t*m),_=i._malloc(I+c*m),E=i._malloc(I+c*m),N=v+I-v%I,w=b+I-b%I,M=_+I-_%I,T=E+I-E%I;try{return i.HEAPF64.subarray(N>>3,(N>>3)+t).set(n),i.HEAPF64.subarray(w>>3,(w>>3)+t).set(s),i.HEAPF64.subarray(M>>3,(M>>3)+c).set(u),i.HEAPF64.subarray(T>>3,(T>>3)+c).set(d),i.applyChronologicalLayout(e,t,r,o,a,N,w,c,y,f,M,T,h,p(g))}finally{i._free(v),i._free(b),i._free(_),i._free(E)}}),t,r,o,a,c)}}(_||(_={})),function(e){e[e.Undirected=0]="Undirected",e[e.Directed=1]="Directed",e[e.Reversed=2]="Reversed"}(E||(E={})),function(e){e[e.ByCC_Raw=0]="ByCC_Raw",e[e.ByCC_NormalizeGlobally=1]="ByCC_NormalizeGlobally",e[e.ByCC_NormalizeByCC=2]="ByCC_NormalizeByCC"}(N||(N={}))},67011:(e,t,r)=>{r.d(t,{N3:()=>a,Om:()=>s});var o=r(42080),n=r(40602),i=r(39817);class s{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;this.geometry=e,this.attributes=t,this.centroid=r,this.objectId=o,this.displayId=n}static fromJSON(e){const t=e.geometry?i.A.fromJSON(e.geometry):null,r=e.centroid?i.A.fromJSON(e.centroid):null,o=e.objectId;return new s(t,e.attributes,r,o)}weakClone(){const e=new s(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e}clone(){const e=this.geometry?.clone(),t=new s(e,{...this.attributes},this.centroid?.clone(),this.objectId);return t.displayId=this.displayId,t}ensureCentroid(e){return this.centroid??=(0,n.Q)(new i.A,this.geometry,e.hasZ,e.hasM),this.centroid}get usedMemory(){return 128+(0,o.lM)(this.attributes)+(this.geometry?.usedMemory??0)}}function a(e){return!!e.geometry?.coords?.length}},70674:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var o=r(93800),n=r(48602),i=(r(21265),r(50925),r(14746),r(75269)),s=r(21),a=r(57457),l=r(24203),c=r(75215),u=r(33580),d=r(87730);let h=class extends((0,l.dM)((0,c.j)(a.default))){constructor(e){super(e),this.elevationInfo=null,this.graphics=new u.Y,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};(0,o._)([(0,n.MZ)({type:d.A})],h.prototype,"elevationInfo",void 0),(0,o._)([(0,n.MZ)((0,s.C)(u.Y,"graphics"))],h.prototype,"graphics",void 0),(0,o._)([(0,n.MZ)({type:["show","hide"]})],h.prototype,"listMode",void 0),(0,o._)([(0,n.MZ)()],h.prototype,"screenSizePerspectiveEnabled",void 0),(0,o._)([(0,n.MZ)({readOnly:!0})],h.prototype,"type",void 0),(0,o._)([(0,n.MZ)({constructOnly:!0})],h.prototype,"internal",void 0),h=(0,o._)([(0,i.$)("esri.layers.GraphicsLayer")],h);const p=h},73177:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var o=r(93800),n=r(6946),i=r(48602),s=(r(21265),r(50925),r(14746),r(75269));let a=class extends n.default{constructor(e){super(e),this.openCypherQuery=""}};(0,o._)([(0,i.MZ)()],a.prototype,"openCypherQuery",void 0),a=(0,o._)([(0,s.$)("esri.rest.knowledgeGraph.GraphQuery")],a);const l=a},81073:(e,t,r)=>{r.d(t,{A:()=>a});var o=r(93800),n=(r(50925),r(21265),r(14746),r(74719),r(75269)),i=r(95570);let s=class extends i.default{constructor(e){super(e)}};s=(0,o._)([(0,n.$)("esri.rest.knowledgeGraph.ObjectValue")],s);const a=s},81091:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var o=r(93800),n=r(48602),i=(r(21265),r(50925),r(14746),r(75269)),s=r(95570);let a=class extends s.default{constructor(e){super(e),this.typeName=null,this.id=null}};(0,o._)([(0,n.MZ)({type:String,json:{write:!0}})],a.prototype,"typeName",void 0),(0,o._)([(0,n.MZ)({type:String,json:{write:!0}})],a.prototype,"id",void 0),a=(0,o._)([(0,i.$)("esri.rest.knowledgeGraph.GraphNamedObject")],a);const l=a},81343:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var o=r(93800),n=r(48602),i=(r(21265),r(50925),r(14746),r(75269)),s=r(54824),a=r(81091);let l=class extends a.default{constructor(e){super(e),this.originId=null,this.destinationId=null,this.layoutGeometry=null}};(0,o._)([(0,n.MZ)({type:String,json:{write:!0}})],l.prototype,"originId",void 0),(0,o._)([(0,n.MZ)({type:String,json:{write:!0}})],l.prototype,"destinationId",void 0),(0,o._)([(0,n.MZ)({type:s.default,json:{write:!0}})],l.prototype,"layoutGeometry",void 0),l=(0,o._)([(0,i.$)("esri.rest.knowledgeGraph.Relationship")],l);const c=l},81826:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var o=r(93800),n=r(19455),i=r(48602),s=(r(21265),r(50925),r(14746),r(75269)),a=r(95570);let l=class extends n.A{constructor(e){super(e),this.path=[]}};(0,o._)([(0,i.MZ)({type:[a.default],json:{write:!0}})],l.prototype,"path",void 0),l=(0,o._)([(0,s.$)("esri.rest.knowledgeGraph.Path")],l);const c=l},95570:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var o=r(93800),n=r(19455),i=r(48602),s=(r(21265),r(50925),r(14746),r(75269));let a=class extends n.A{constructor(e){super(e),this.properties=null}};(0,o._)([(0,i.MZ)({json:{write:!0}})],a.prototype,"properties",void 0),a=(0,o._)([(0,s.$)("esri.rest.knowledgeGraph.GraphObject")],a);const l=a}}]);