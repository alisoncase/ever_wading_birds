"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[2133,31754,55626,67011,81091,81343,81826,95570],{39244:(t,e,r)=>{r.d(e,{BL:()=>h,Cz:()=>n,KQ:()=>o,M1:()=>l,T1:()=>i,dr:()=>s});const s="ESRI__ID",n="ESRI__OriginID",o="ESRI__DestID",i="ESRI__LayoutGeometry",l="ESRI__AggregationCount",h="LC.ESRI__IsSpatial"},39817:(t,e,r)=>{r.d(e,{A:()=>n});var s=r(42080);class n{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this.lengths=t??[],this.coords=e??[]}static fromJSON(t){return new n(t.lengths,t.coords)}static fromRect(t){const[e,r,s,o]=t,i=s-e,l=o-r;return new n([5],[e,r,i,0,0,l,-i,0,0,-l])}get isPoint(){return 0===this.lengths.length&&this.coords.length>=2}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((t,e)=>t+e))}get usedMemory(){return 64+(0,s.Qf)(this.lengths,this.coords)}area(){let t=0,e=0;if(!this.lengths.length)return 0;for(let r=0;r<this.lengths.length;r++){const s=this.lengths[r];if(s<3)continue;let n=this.coords[2*e],o=this.coords[2*e+1];for(let r=1;r<s;r+=1){const s=this.coords[2*(r+e)],i=this.coords[2*(r+e)+1];t+=-.5*(s-n)*(i+o),n=s,o=i}e+=s}return t}forEachVertex(t){let e=0;this.lengths.length||t(this.coords[0],this.coords[1]);for(let r=0;r<this.lengths.length;r++){const s=this.lengths[r];for(let r=0;r<s;r++)t(this.coords[2*(r+e)],this.coords[2*(r+e)+1]);e+=s}}deltaDecode(){const t=this.clone(),{coords:e,lengths:r}=t;let s=0;for(const n of r){for(let t=1;t<n;t++)e[2*(s+t)]+=e[2*(s+t)-2],e[2*(s+t)+1]+=e[2*(s+t)-1];s+=n}return t}clone(t){if(0===this.lengths.length)return new n([],[this.coords[0],this.coords[1]]);const e=2*(0===this.lengths.length?1:this.lengths.reduce(((t,e)=>t+e))),r=this.coords.slice(0,e);return t?(t.set(r),new n(this.lengths,t)):new n(Array.from(this.lengths),Array.from(r))}}},40602:(t,e,r)=>{function s(t,e){return t?e?4:3:e?3:2}function n(t,e,r,n){if(!e?.lengths.length)return null;t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0);const l=t.coords,h=[],u=r?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:c,coords:d}=e,a=s(r,n);let g=0;for(const s of c){const t=o(u,d,g,s,r,n);t&&h.push(t),g+=s*a}if(h.sort(((t,e)=>{let s=t[2]-e[2];return 0===s&&r&&(s=t[4]-e[4]),s})),h.length){let t=6*h[0][2];l[0]=h[0][0]/t,l[1]=h[0][1]/t,r&&(t=6*h[0][4],l[2]=0!==t?h[0][3]/t:0),(l[0]<u[0]||l[0]>u[1]||l[1]<u[2]||l[1]>u[3]||r&&(l[2]<u[4]||l[2]>u[5]))&&(l.length=0)}if(!l.length){const t=e.lengths[0]?i(d,0,c[0],r,n):null;if(!t)return null;l[0]=t[0],l[1]=t[1],r&&t.length>2&&(l[2]=t[2])}return t}function o(t,e,r,n,o,i){const l=s(o,i);let h=r,u=r+l,c=0,d=0,a=0,g=0,f=0;for(let s=0,I=n-1;s<I;s++,h+=l,u+=l){const r=e[h],s=e[h+1],n=e[h+2],i=e[u],l=e[u+1],y=e[u+2];let I=r*l-i*s;g+=I,c+=(r+i)*I,d+=(s+l)*I,o&&(I=r*y-i*n,a+=(n+y)*I,f+=I),r<t[0]&&(t[0]=r),r>t[1]&&(t[1]=r),s<t[2]&&(t[2]=s),s>t[3]&&(t[3]=s),o&&(n<t[4]&&(t[4]=n),n>t[5]&&(t[5]=n))}if(g>0&&(g*=-1),f>0&&(f*=-1),!g)return null;const y=[c,d,.5*g];return o&&(y[3]=a,y[4]=.5*f),y}function i(t,e,r,n,o){const i=s(n,o);let d=e,a=e+i,g=0,f=0,y=0,I=0;for(let s=0,p=r-1;s<p;s++,d+=i,a+=i){const e=t[d],r=t[d+1],s=t[d+2],o=t[a],i=t[a+1],p=t[a+2],m=n?h(e,r,s,o,i,p):l(e,r,o,i);if(m)if(g+=m,n){const t=c(e,r,s,o,i,p);f+=m*t[0],y+=m*t[1],I+=m*t[2]}else{const t=u(e,r,o,i);f+=m*t[0],y+=m*t[1]}}return g>0?n?[f/g,y/g,I/g]:[f/g,y/g]:r>0?n?[t[e],t[e+1],t[e+2]]:[t[e],t[e+1]]:null}function l(t,e,r,s){const n=r-t,o=s-e;return Math.sqrt(n*n+o*o)}function h(t,e,r,s,n,o){const i=s-t,l=n-e,h=o-r;return Math.sqrt(i*i+l*l+h*h)}function u(t,e,r,s){return[t+.5*(r-t),e+.5*(s-e)]}function c(t,e,r,s,n,o){return[t+.5*(s-t),e+.5*(n-e),r+.5*(o-r)]}r.d(e,{Q:()=>n})},42080:(t,e,r)=>{r.d(e,{$B:()=>n,Qf:()=>u,Qh:()=>l,RS:()=>o,ez:()=>a,i5:()=>g,lM:()=>i,qK:()=>d,rq:()=>c});var s=r(25048);function n(t){return 32+t.length}const o=16;function i(t){if(!t)return 0;let e=d;for(const r in t)t.hasOwnProperty(r)&&(e+=h(t[r],!1));return e}function l(t){if(!t)return 0;if("number"==typeof t[0])return u(t);if(Array.isArray(t))return function(t){const e=t.length;if(0===e||"number"==typeof t[0])return c(t,8);let r=a;for(let s=0;s<e;s++)r+=h(t[s]);return r}(t);let e=d;for(const r in t)t.hasOwnProperty(r)&&(e+=h(t[r]));return e}function h(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];switch(typeof t){case"object":return e?l(t):d;case"string":return n(t);case"number":return o;case"boolean":return 4;default:return 8}}function u(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.reduce(((t,e)=>t+(e?(0,s.iu)(e)?e.byteLength+g:Array.isArray(e)?c(e,o):0:0)),0)}function c(t,e){return a+t.length*e}const d=32,a=16,g=145},52579:(t,e,r)=>{r.d(e,{A:()=>s});class s{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const t=new s;return t.objectIdFieldName=this.objectIdFieldName,t.globalIdFieldName=this.globalIdFieldName,t.geohashFieldName=this.geohashFieldName,t.geometryProperties=this.geometryProperties,t.geometryType=this.geometryType,t.spatialReference=this.spatialReference,t.hasZ=this.hasZ,t.hasM=this.hasM,t.features=this.features,t.fields=this.fields,t.transform=this.transform,t.exceededTransferLimit=this.exceededTransferLimit,t.uniqueIdField=this.uniqueIdField,t.queryGeometry=this.queryGeometry,t.queryGeometryType=this.queryGeometryType,t}}},55626:(t,e,r)=>{r.r(e),r.d(e,{default:()=>u});var s=r(93800),n=r(48602),o=(r(21265),r(50925),r(14746),r(75269)),i=r(75400),l=r(81091);let h=class extends l.default{constructor(t){super(t),this.layoutGeometry=null}};(0,s._)([(0,n.MZ)({type:i.default,json:{write:!0}})],h.prototype,"layoutGeometry",void 0),h=(0,s._)([(0,o.$)("esri.rest.knowledgeGraph.Entity")],h);const u=h},67011:(t,e,r)=>{r.d(e,{N3:()=>l,Om:()=>i});var s=r(42080),n=r(40602),o=r(39817);class i{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;this.geometry=t,this.attributes=e,this.centroid=r,this.objectId=s,this.displayId=n}static fromJSON(t){const e=t.geometry?o.A.fromJSON(t.geometry):null,r=t.centroid?o.A.fromJSON(t.centroid):null,s=t.objectId;return new i(e,t.attributes,r,s)}weakClone(){const t=new i(this.geometry,this.attributes,this.centroid,this.objectId);return t.displayId=this.displayId,t}clone(){const t=this.geometry?.clone(),e=new i(t,{...this.attributes},this.centroid?.clone(),this.objectId);return e.displayId=this.displayId,e}ensureCentroid(t){return this.centroid??=(0,n.Q)(new o.A,this.geometry,t.hasZ,t.hasM),this.centroid}get usedMemory(){return 128+(0,s.lM)(this.attributes)+(this.geometry?.usedMemory??0)}}function l(t){return!!t.geometry?.coords?.length}},81073:(t,e,r)=>{r.d(e,{A:()=>l});var s=r(93800),n=(r(50925),r(21265),r(14746),r(74719),r(75269)),o=r(95570);let i=class extends o.default{constructor(t){super(t)}};i=(0,s._)([(0,n.$)("esri.rest.knowledgeGraph.ObjectValue")],i);const l=i},81091:(t,e,r)=>{r.r(e),r.d(e,{default:()=>h});var s=r(93800),n=r(48602),o=(r(21265),r(50925),r(14746),r(75269)),i=r(95570);let l=class extends i.default{constructor(t){super(t),this.typeName=null,this.id=null}};(0,s._)([(0,n.MZ)({type:String,json:{write:!0}})],l.prototype,"typeName",void 0),(0,s._)([(0,n.MZ)({type:String,json:{write:!0}})],l.prototype,"id",void 0),l=(0,s._)([(0,o.$)("esri.rest.knowledgeGraph.GraphNamedObject")],l);const h=l},81343:(t,e,r)=>{r.r(e),r.d(e,{default:()=>u});var s=r(93800),n=r(48602),o=(r(21265),r(50925),r(14746),r(75269)),i=r(54824),l=r(81091);let h=class extends l.default{constructor(t){super(t),this.originId=null,this.destinationId=null,this.layoutGeometry=null}};(0,s._)([(0,n.MZ)({type:String,json:{write:!0}})],h.prototype,"originId",void 0),(0,s._)([(0,n.MZ)({type:String,json:{write:!0}})],h.prototype,"destinationId",void 0),(0,s._)([(0,n.MZ)({type:i.default,json:{write:!0}})],h.prototype,"layoutGeometry",void 0),h=(0,s._)([(0,o.$)("esri.rest.knowledgeGraph.Relationship")],h);const u=h},81826:(t,e,r)=>{r.r(e),r.d(e,{default:()=>u});var s=r(93800),n=r(19455),o=r(48602),i=(r(21265),r(50925),r(14746),r(75269)),l=r(95570);let h=class extends n.A{constructor(t){super(t),this.path=[]}};(0,s._)([(0,o.MZ)({type:[l.default],json:{write:!0}})],h.prototype,"path",void 0),h=(0,s._)([(0,i.$)("esri.rest.knowledgeGraph.Path")],h);const u=h},95570:(t,e,r)=>{r.r(e),r.d(e,{default:()=>h});var s=r(93800),n=r(19455),o=r(48602),i=(r(21265),r(50925),r(14746),r(75269));let l=class extends n.A{constructor(t){super(t),this.properties=null}};(0,s._)([(0,o.MZ)({json:{write:!0}})],l.prototype,"properties",void 0),l=(0,s._)([(0,i.$)("esri.rest.knowledgeGraph.GraphObject")],l);const h=l}}]);