"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[25084,66645,88824],{605:(t,e,n)=>{n.d(e,{_:()=>r});class r{constructor(t,e,n,r,i){let s=arguments.length>5&&void 0!==arguments[5]&&arguments[5],o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;this.name=t,this.count=e,this.type=n,this.offset=r,this.stride=i,this.normalized=s,this.divisor=o}}},22131:(t,e,n)=>{var r;function i(t){return t===r.POSITION}n.d(e,{b:()=>i,r:()=>r}),function(t){t.POSITION="position",t.NORMAL="normal",t.NORMALCOMPRESSED="normalCompressed",t.UV0="uv0",t.COLOR="color",t.SYMBOLCOLOR="symbolColor",t.SIZE="size",t.ROTATION="rotation",t.TANGENT="tangent",t.OFFSET="offset",t.PERSPECTIVEDIVIDE="perspectiveDivide",t.CENTEROFFSETANDDISTANCE="centerOffsetAndDistance",t.LENGTH="length",t.PREVPOSITION="prevPosition",t.NEXTPOSITION="nextPosition",t.SUBDIVISIONFACTOR="subdivisionFactor",t.COLORFEATUREATTRIBUTE="colorFeatureAttribute",t.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",t.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",t.DISTANCETOSTART="distanceToStart",t.UVMAPSPACE="uvMapSpace",t.BOUNDINGRECT="boundingRect",t.UVREGION="uvRegion",t.PROFILERIGHT="profileRight",t.PROFILEUP="profileUp",t.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",t.FEATUREVALUE="featureValue",t.INSTANCEMODELORIGINHI="instanceModelOriginHi",t.INSTANCEMODELORIGINLO="instanceModelOriginLo",t.INSTANCEMODEL="instanceModel",t.INSTANCEMODELNORMAL="instanceModelNormal",t.INSTANCECOLOR="instanceColor",t.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",t.LOCALTRANSFORM="localTransform",t.GLOBALTRANSFORM="globalTransform",t.BOUNDINGSPHERE="boundingSphere",t.MODELORIGIN="modelOrigin",t.MODELSCALEFACTORS="modelScaleFactors",t.FEATUREATTRIBUTE="featureAttribute",t.STATE="state",t.LODLEVEL="lodLevel",t.POSITION0="position0",t.POSITION1="position1",t.NORMAL2COMPRESSED="normal2Compressed",t.COMPONENTINDEX="componentIndex",t.VARIANTOFFSET="variantOffset",t.VARIANTSTROKE="variantStroke",t.VARIANTEXTENSION="variantExtension",t.SIDENESS="sideness",t.START="start",t.END="end",t.UP="up",t.START_UP="startUp",t.END_UP="endUp",t.EXTRUDE="extrude",t.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",t.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}(r||(r={}))},25084:(t,e,n)=>{n.d(e,{EdgeInputBufferLayout:()=>o,In:()=>l,gr:()=>u,vG:()=>f,vJ:()=>a,wO:()=>c});var r=n(66458),i=n(98876),s=n(22131);const o=(0,i.BP)().vec3f(s.r.POSITION).u16(s.r.COMPONENTINDEX).freeze(),a=(0,i.BP)().vec2u8(s.r.SIDENESS).freeze(),c=(0,r.U)(a),u=(0,i.BP)().vec3f(s.r.POSITION0).vec3f(s.r.POSITION1).vec2i16(s.r.NORMALCOMPRESSED).u16(s.r.COMPONENTINDEX).u8(s.r.VARIANTOFFSET,{glNormalized:!0}).u8(s.r.VARIANTSTROKE).u8(s.r.VARIANTEXTENSION,{glNormalized:!0}).freeze(),l=(0,i.BP)().vec3f(s.r.POSITION0).vec3f(s.r.POSITION1).vec2i16(s.r.NORMALCOMPRESSED).vec2i16(s.r.NORMAL2COMPRESSED).u16(s.r.COMPONENTINDEX).u8(s.r.VARIANTOFFSET,{glNormalized:!0}).u8(s.r.VARIANTSTROKE).u8(s.r.VARIANTEXTENSION,{glNormalized:!0}).freeze(),f=new Map([[s.r.POSITION0,0],[s.r.POSITION1,1],[s.r.COMPONENTINDEX,2],[s.r.VARIANTOFFSET,3],[s.r.VARIANTSTROKE,4],[s.r.VARIANTEXTENSION,5],[s.r.NORMALCOMPRESSED,6],[s.r.NORMAL2COMPRESSED,7],[s.r.SIDENESS,8]])},28983:(t,e,n)=>{n.d(e,{b:()=>s});var r=n(64682),i=n(55239);function s(t,e,n){const s=Array.isArray(t),l=s?t.length/e:t.byteLength/(4*e),f=s?t:new Uint32Array(t,0,l*e),d=n?.minReduction??0,h=n?.originalIndices||null,p=h?h.length:0,g=n?.componentOffsets||null;let A=0;if(g)for(let r=0;r<g.length-1;r++){const t=g[r+1]-g[r];t>A&&(A=t)}else A=l;const E=Math.floor(1.1*A)+1;(null==u||u.length<2*E)&&(u=new Uint32Array((0,r.cU)(2*E)));for(let r=0;r<2*E;r++)u[r]=0;let y=0;const T=!!g&&!!h,I=T?p:l;let N=(0,i.my)(l);const O=new Uint32Array(p),S=1.96;let m=0!==d?Math.ceil(4*S*S/(d*d)*d*(1-d)):I,w=1,v=g?g[1]:I;for(let r=0;r<I;r++){if(r===m){const t=1-y/r;if(t+S*Math.sqrt(t*(1-t)/r)<d)return null;m*=2}if(r===v){for(let t=0;t<2*E;t++)u[t]=0;if(h)for(let t=g[w-1];t<g[w];t++)O[t]=N[h[t]];v=g[++w]}const t=T?h[r]:r,n=t*e,i=c(f,n,e);let s=i%E,a=y;for(;0!==u[2*s+1];){if(u[2*s]===i){const t=u[2*s+1]-1;if(o(f,n,t*e,e)){a=N[t];break}}s++,s>=E&&(s-=E)}a===y&&(u[2*s]=i,u[2*s+1]=t+1,y++),N[t]=a}if(0!==d&&1-y/l<d)return null;if(T){for(let t=g[w-1];t<O.length;t++)O[t]=N[h[t]];N=(0,i.Dg)(O)}const L=s?new Array(y):new Uint32Array(y*e);y=0;for(let r=0;r<I;r++)N[r]===y&&(a(f,(T?h[r]:r)*e,L,y*e,e),y++);if(h&&!T){const t=new Uint32Array(p);for(let e=0;e<t.length;e++)t[e]=N[h[e]];N=(0,i.Dg)(t)}return{buffer:Array.isArray(L)?L:L.buffer,indices:N,uniqueCount:y}}function o(t,e,n,r){for(let i=0;i<r;i++)if(t[e+i]!==t[n+i])return!1;return!0}function a(t,e,n,r,i){for(let s=0;s<i;s++)n[r+s]=t[e+s]}function c(t,e,n){let r=0;for(let i=0;i<n;i++)r=t[e+i]+r|0,r=r+(r<<11)+(r>>>2)|0;return r>>>0}let u=null},34431:(t,e,n)=>{n.d(e,{L:()=>i,s:()=>s});var r=n(98876);function i(t,e){return e.push(t.buffer),{buffer:t.buffer,layout:new r.l5(t.layout)}}function s(t){return new r.q3(t.layout).createView(t.buffer)}},46576:(t,e,n)=>{n.d(e,{AK:()=>a,Wz:()=>o,oe:()=>i,p_:()=>s});var r=n(25048);function i(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t<=r.y9?e?new Array(t).fill(0):new Array(t):new Float32Array(t)}function s(t){return Array.isArray(t)?t.length<r.y9?t:new Float32Array(t):t.length<r.y9?Array.from(t):t}function o(t){return(Array.isArray(t)?t.length:t.byteLength/8)<=r.y9?Array.from(t):new Float32Array(t)}function a(t,e,n){return Array.isArray(t)?t.slice(e,e+n):t.subarray(e,e+n)}},55239:(t,e,n)=>{n.d(e,{BF:()=>p,Dg:()=>i,EH:()=>h,JH:()=>o,my:()=>s,tM:()=>l});var r=n(25048);function i(t){if(Array.isArray(t)){if(t.length<r.y9)return t}else if(t.length<r.y9)return Array.from(t);let e=!0,n=!0;return t.some(((t,r)=>(e=e&&0===t,n=n&&t===r,!e&&!n))),e?h(t.length):n?l(t.length):(0,r.iu)(t)&&t.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT?t:function(t){let e=!0;for(const n of t){if(n>=65536)return(0,r.iu)(t)?t:new Uint32Array(t);n>=256&&(e=!1)}return e?new Uint8Array(t):new Uint16Array(t)}(t)}function s(t){return t<=r.y9?new Array(t):t<=65536?new Uint16Array(t):new Uint32Array(t)}function o(t){return t<=r.y9?new Array(t):new Uint32Array(t)}let a=f(131072);const c=[0],u=(()=>{const t=new Uint16Array(65536);for(let e=0;e<t.length;++e)t[e]=e;return t})();function l(t){return 1===t?c:t<r.y9?Array.from(new Uint16Array(u.buffer,0,t)):t<u.length?new Uint16Array(u.buffer,0,t):(t>a.length&&(a=f(Math.max(2*a.length,t))),new Uint32Array(a.buffer,0,t))}function f(t){const e=new Uint32Array(t);for(let n=0;n<e.length;n++)e[n]=n;return e}let d=new Uint8Array(65536);function h(t){if(1===t)return c;if(t<r.y9)return new Array(t).fill(0);if(t>d.length){const e=Math.max(2*d.length,t);d=new Uint8Array(e)}return new Uint8Array(d.buffer,0,t)}function p(){a=f(131072),d=new Uint8Array(65536)}},62749:(t,e,n)=>{n.d(e,{K:()=>c});var r=n(64682),i=n(15899),s=n(89227),o=n(28473);const a=-1;function c(t,e,n){const r=t.vertices.position,i=t.vertices.componentIndex,o=g.position0,c=g.position1,f=g.faceNormal0,h=g.faceNormal1,{edges:p,normals:A}=l(t),E=p.length/4,y=e.allocate(E);let T=0;const I=E,S=n?.allocate(I);let w=0,v=0,L=0;d.length=0;for(let a=0;a<E;++a){const t=4*a;r.getVec(p.data[t],o),r.getVec(p.data[t+1],c);const e=d.pushNew();e.index=4*a,e.length=(0,s.j)(o,c)}d.sort(((t,e)=>e.length-t.length));const R=new Array,M=new Array;d.forAll((t=>{let{length:l,index:d}=t;const E=p.data[d],I=p.data[d+1],b=p.data[d+2],U=p.data[d+3],_=U===a;if(r.getVec(E,o),r.getVec(I,c),_){const t=3*b;(0,s.i)(f,A.data[t],A.data[t+1],A.data[t+2]),(0,s.c)(h,f),g.componentIndex=i.get(E),g.cosAngle=(0,s.f)(f,h)}else{let t=3*b;if((0,s.i)(f,A.data[t],A.data[t+1],A.data[t+2]),t=3*U,(0,s.i)(h,A.data[t],A.data[t+1],A.data[t+2]),g.componentIndex=i.get(E),g.cosAngle=(0,s.f)(f,h),function(t,e){return t.cosAngle>e}(g,O))return;g.cosAngle<-.9999&&(0,s.c)(h,f)}v+=l,L++,_||function(t,e){return t.cosAngle<e}(g,m)?(e.write(y,T++,g),R.push(l)):u(g,N)&&(S&&n&&n.write(S,w++,g),M.push(l))}));const b=new Float32Array(R.reverse()),U=new Float32Array(M.reverse()),_=S&&n?{instancesData:S.slice(0,w),lodInfo:{lengths:U}}:void 0;return{regular:{instancesData:y.slice(0,T),lodInfo:{lengths:b}},silhouette:_,averageEdgeLength:v/L}}function u(t,e){const n=(0,r.XM)(t.cosAngle);return(0,s.o)(E,t.position1,t.position0),n*((0,s.f)((0,s.e)(A,t.faceNormal0,t.faceNormal1),E)>0?-1:1)>e}function l(t){const e=t.faces.length/3,n=t.faces,r=t.neighbors,i=t.vertices.position;h.length=p.length=0;for(let o=0;o<e;o++){const t=3*o,e=r[t],c=r[t+1],u=r[t+2],l=n[t],f=n[t+1],d=n[t+2];i.getVec(l,y),i.getVec(f,T),i.getVec(d,I),(0,s.d)(T,T,y),(0,s.d)(I,I,y),(0,s.e)(y,T,I),(0,s.n)(y,y),p.pushArray(y),(e===a||l<f)&&(h.push(l),h.push(f),h.push(o),h.push(e)),(c===a||f<d)&&(h.push(f),h.push(d),h.push(o),h.push(c)),(u===a||d<l)&&(h.push(d),h.push(l),h.push(o),h.push(u))}return{edges:h,normals:p}}class f{constructor(){this.index=0,this.length=0}}const d=new i.A({allocator:t=>t||new f,deallocator:null}),h=new i.A({deallocator:null}),p=new i.A({deallocator:null}),g=new class{constructor(){this.position0=(0,o.vt)(),this.position1=(0,o.vt)(),this.faceNormal0=(0,o.vt)(),this.faceNormal1=(0,o.vt)(),this.componentIndex=0,this.cosAngle=0}},A=(0,o.vt)(),E=(0,o.vt)(),y=(0,o.vt)(),T=(0,o.vt)(),I=(0,o.vt)(),N=(0,r.kU)(4),O=Math.cos(N),S=(0,r.kU)(35),m=Math.cos(S)},65496:(t,e,n)=>{n.d(e,{T:()=>E,k:()=>y});var r=n(14746),i=n(89227),s=n(28473),o=n(66458),a=n(75093),c=n(25084);class u{updateSettings(t){this.settings=t,this._edgeHashFunction=t.reducedPrecision?p:h}write(t,e,n){I.seed=this._edgeHashFunction(n);const r=I.getIntRange(0,255),i=I.getIntRange(0,this.settings.variants-1),s=I.getFloat(),o=255*(.5*function(t,e){return Math.abs(t)**e*Math.sign(t)}(-(1-Math.min(s/.7,1))+Math.max(0,s-.7)/(1-.7),1.2)+.5);t.position0.setVec(e,n.position0),t.position1.setVec(e,n.position1),t.componentIndex.set(e,n.componentIndex),t.variantOffset.set(e,r),t.variantStroke.set(e,i),t.variantExtension.set(e,o)}}const l=new Float32Array(6),f=new Uint32Array(l.buffer),d=new Uint32Array(1);function h(t){return l[0]=t.position0[0],l[1]=t.position0[1],l[2]=t.position0[2],l[3]=t.position1[0],l[4]=t.position1[1],l[5]=t.position1[2],d[0]=31*(31*(31*(31*(31*(166811+f[0])+f[1])+f[2])+f[3])+f[4])+f[5],d[0]}function p(t){const e=l;e[0]=A(t.position0[0]),e[1]=A(t.position0[1]),e[2]=A(t.position0[2]),e[3]=A(t.position1[0]),e[4]=A(t.position1[1]),e[5]=A(t.position1[2]),d[0]=5381;for(let n=0;n<f.length;n++)d[0]=31*d[0]+f[n];return d[0]}const g=1e4;function A(t){return Math.round(t*g)/g}class E{constructor(){this._commonWriter=new u}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return c.gr.createBuffer(t)}write(t,e,n){this._commonWriter.write(t,e,n),(0,i.g)(T,n.faceNormal0,n.faceNormal1),(0,i.n)(T,T);const{typedBuffer:r,typedBufferStride:s}=t.normalCompressed;(0,a.aT)(r,e,T[0],T[1],T[2],s)}}E.Layout=c.gr,E.glLayout=(0,o.U)(c.gr,1);class y{constructor(){this._commonWriter=new u}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return c.In.createBuffer(t)}write(t,e,n){this._commonWriter.write(t,e,n);{const{typedBuffer:r,typedBufferStride:i}=t.normalCompressed;(0,a.aT)(r,e,n.faceNormal0[0],n.faceNormal0[1],n.faceNormal0[2],i)}{const{typedBuffer:r,typedBufferStride:i}=t.normal2Compressed;(0,a.aT)(r,e,n.faceNormal1[0],n.faceNormal1[1],n.faceNormal1[2],i)}}}y.Layout=c.In,y.glLayout=(0,o.U)(c.In,1);const T=(0,s.vt)(),I=new r.A},66458:(t,e,n)=>{n.d(e,{U:()=>s});var r=n(92156),i=n(605);function s(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const n=t.stride;return Array.from(t.fields.keys()).map((r=>{const s=t.fields.get(r),a=s.constructor.ElementCount,c=o(s.constructor.ElementType),u=s.offset,l=s.optional?.glNormalized??!1;return new i._(r,a,c,u,n,l,e)}))}function o(t){const e=a[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}const a={u8:r.pe.UNSIGNED_BYTE,u16:r.pe.UNSIGNED_SHORT,u32:r.pe.UNSIGNED_INT,i8:r.pe.BYTE,i16:r.pe.SHORT,i32:r.pe.INT,f32:r.pe.FLOAT}},66645:(t,e,n)=>{n.r(e),n.d(e,{default:()=>a});var r=n(34431),i=n(25084),s=n(62749),o=n(88824);class a{async extract(t){const e=c(t),n=(0,o.o6)(e),r=[e.data.buffer];return{result:u(n,r),transferList:r}}async extractComponentsEdgeLocations(t){const e=c(t),n=(0,o.hx)(e.data,e.skipDeduplicate,e.indices,e.indicesLength),i=(0,s.K)(n,f),a=[];return{result:(0,r.L)(i.regular.instancesData,a),transferList:a}}async extractEdgeLocations(t){const e=c(t),n=(0,o.hx)(e.data,e.skipDeduplicate,e.indices,e.indicesLength),i=(0,s.K)(n,l),a=[];return{result:(0,r.L)(i.regular.instancesData,a),transferList:a}}}function c(t){return{data:i.EdgeInputBufferLayout.createView(t.dataBuffer),indices:"Uint32Array"===t.indicesType?new Uint32Array(t.indices):"Uint16Array"===t.indicesType?new Uint16Array(t.indices):t.indices,indicesLength:t.indicesLength,writerSettings:t.writerSettings,skipDeduplicate:t.skipDeduplicate}}function u(t,e){return e.push(t.regular.lodInfo.lengths.buffer),e.push(t.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:(0,r.L)(t.regular.instancesData,e),lodInfo:{lengths:t.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:(0,r.L)(t.silhouette.instancesData,e),lodInfo:{lengths:t.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:t.averageEdgeLength}}const l=new class{allocate(t){return o.Jb.createBuffer(t)}trim(t,e){return t.slice(0,e)}write(t,e,n){t.position0.setVec(e,n.position0),t.position1.setVec(e,n.position1)}},f=new class{allocate(t){return o.extractComponentsEdgeLocationsLayout.createBuffer(t)}trim(t,e){return t.slice(0,e)}write(t,e,n){t.position0.setVec(e,n.position0),t.position1.setVec(e,n.position1),t.componentIndex.set(e,n.componentIndex)}}},75093:(t,e,n)=>{n.d(e,{Tz:()=>u,_l:()=>c,aT:()=>o,fA:()=>a});var r=n(64682),i=n(89227),s=n(28473);n(46576);function o(t,e,n,r,i){let s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:2;const o=1/(Math.abs(n)+Math.abs(r)+Math.abs(i)),a=n*o,c=r*o,u=i<=0?(a>=0?1:-1)*(1-Math.abs(c)):a,f=i<=0?(c>=0?1:-1)*(1-Math.abs(a)):c,d=e*s;t[d]=l(u),t[d+1]=l(f)}function a(t){const e=t.length/3,n=new Int16Array(2*e);let r=0;for(let i=0;i<e;++i)o(n,i,t[r++],t[r++],t[r++]);return n}function c(t,e){const n=t.length/3,r=new Int16Array(2*n);let a=0;const c=(0,s.vt)();for(let s=0;s<n;++s)c[0]=t[a++],c[1]=t[a++],c[2]=t[a++],(0,i.q)(c,c,e),o(r,s,c[0],c[1],c[2]);return r}function u(t,e,n){const r=n*(arguments.length>3&&void 0!==arguments[3]?arguments[3]:2),s=f(e[r]),o=f(e[r+1]),a=1-Math.abs(s)-Math.abs(o);t[2]=a,a<0?(t[0]=(s>=0?1:-1)*(1-Math.abs(o)),t[1]=(o>=0?1:-1)*(1-Math.abs(s))):(t[0]=s,t[1]=o),(0,i.n)(t,t)}function l(t){return(0,r.qE)(Math.round(32767*t),-32767,32767)}function f(t){return(0,r.qE)(t/32767,-1,1)}},88824:(t,e,n)=>{n.d(e,{o6:()=>l,extractComponentsEdgeLocationsLayout:()=>A,hx:()=>f,Jb:()=>g});var r=n(28983);function i(t,e,n){const r=e/3,i=new Uint32Array(n+1),s=new Uint32Array(n+1),o=(t,e)=>{t<e?i[t+1]++:s[e+1]++};for(let E=0;E<r;E++){const e=t[3*E],n=t[3*E+1],r=t[3*E+2];o(e,n),o(n,r),o(r,e)}let a=0,c=0;for(let E=0;E<n;E++){const t=i[E+1],e=s[E+1];i[E+1]=a,s[E+1]=c,a+=t,c+=e}const u=new Uint32Array(6*r),l=i[n],f=(t,e,n)=>{if(t<e){const r=i[t+1]++;u[2*r]=e,u[2*r+1]=n}else{const r=s[e+1]++;u[2*l+2*r]=t,u[2*l+2*r+1]=n}};for(let E=0;E<r;E++){const e=t[3*E],n=t[3*E+1],r=t[3*E+2];f(e,n,E),f(n,r,E),f(r,e,E)}const d=(t,e)=>{const n=2*t,r=e-t;for(let i=1;i<r;i++){const t=u[n+2*i],e=u[n+2*i+1];let r=i-1;for(;r>=0&&u[n+2*r]>t;r--)u[n+2*r+2]=u[n+2*r],u[n+2*r+3]=u[n+2*r+1];u[n+2*r+2]=t,u[n+2*r+3]=e}};for(let E=0;E<n;E++)d(i[E],i[E+1]),d(l+s[E],l+s[E+1]);const h=new Int32Array(3*r),p=(e,n)=>e===t[3*n]?0:e===t[3*n+1]?1:e===t[3*n+2]?2:-1,g=(t,e)=>{const n=p(t,e);h[3*e+n]=-1},A=(t,e,n,r)=>{const i=p(t,e);h[3*e+i]=r;const s=p(n,r);h[3*r+s]=e};for(let E=0;E<n;E++){let t=i[E];const e=i[E+1];let n=s[E];const r=s[E+1];for(;t<e&&n<r;){const e=u[2*t],r=u[2*l+2*n];e===r?(A(E,u[2*t+1],r,u[2*l+2*n+1]),t++,n++):e<r?(g(E,u[2*t+1]),t++):(g(r,u[2*l+2*n+1]),n++)}for(;t<e;)g(E,u[2*t+1]),t++;for(;n<r;)g(u[2*l+2*n],u[2*l+2*n+1]),n++}return h}var s=n(98876),o=n(22131),a=n(25084),c=n(65496),u=n(62749);function l(t){const e=f(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return h.updateSettings(t.writerSettings),p.updateSettings(t.writerSettings),(0,u.K)(e,h,p)}function f(t,e,n,s){if(e){const e=i(n,s,t.count);return new d(n,s,e,t)}const o=(0,r.b)(t.buffer,t.stride/4,{originalIndices:n,originalIndicesLength:s}),c=i(o.indices,s,o.uniqueCount);return{faces:o.indices,facesLength:o.indices.length,neighbors:c,vertices:a.EdgeInputBufferLayout.createView(o.buffer)}}class d{constructor(t,e,n,r){this.faces=t,this.facesLength=e,this.neighbors=n,this.vertices=r}}const h=new c.T,p=new c.k,g=(0,s.BP)().vec3f(o.r.POSITION0).vec3f(o.r.POSITION1),A=(0,s.BP)().vec3f(o.r.POSITION0).vec3f(o.r.POSITION1).u16(o.r.COMPONENTINDEX)},89893:(t,e,n)=>{n.d(e,{Cv:()=>f,L:()=>l,MX:()=>c,O_:()=>u,kL:()=>d,vA:()=>a,zH:()=>h});var r=n(98080),i=n(60548);const s=(0,n(24646).vt)();class o{constructor(t){this.message=t}toString(){return`AssertException: ${this.message}`}}function a(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Assertion";if(!t){const t=new Error(e).stack;throw new o(`${e} at ${t}`)}}function c(t,e){t||(e=e||"",console.warn("Verify failed: "+e+"\n"+new Error("verify").stack))}function u(t,e,n,r){let i,s=(n[0]-t[0])/e[0],o=(r[0]-t[0])/e[0];s>o&&(i=s,s=o,o=i);let a=(n[1]-t[1])/e[1],c=(r[1]-t[1])/e[1];if(a>c&&(i=a,a=c,c=i),s>c||a>o)return!1;a>s&&(s=a),c<o&&(o=c);let u=(n[2]-t[2])/e[2],l=(r[2]-t[2])/e[2];return u>l&&(i=u,u=l,l=i),!(s>l||u>o)&&(l<o&&(o=l),!(o<0))}function l(t,e,n,i,s){let o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:(0,r.vt)();const a=(i[s]-n[s])*(e[0]-t[0])-(i[0]-n[0])*(e[s]-t[s]),c=(i[0]-n[0])*(t[s]-n[s])-(i[s]-n[s])*(t[0]-n[0]);if(0===a)return!1;const u=c/a;return o[0]=t[0]+u*(e[0]-t[0]),o[1]=t[s]+u*(e[s]-t[s]),!0}function f(t,e,n,r,o){s[0]=t[0],s[1]=t[1],s[2]=t[2],s[3]=1,(0,i.t)(s,s,e),o.length>2&&(o[2]=-s[2]),(0,i.t)(s,s,n),a(0!==s[3]),o[0]=s[0]/s[3],o[1]=s[1]/s[3],o[2]=s[2]/s[3],o[0]=(.5*o[0]+.5)*r[2]+r[0],o[1]=(.5*o[1]+.5)*r[3]+r[1]}function d(t,e){return Math.log(t)/Math.log(e)}function h(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[3]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[7]&&0===t[8]&&0===t[9]&&1===t[10]&&0===t[11]&&1===t[15]}},97928:(t,e,n)=>{function r(t){switch(t){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8}}n.d(e,{GJ:()=>r})},98876:(t,e,n)=>{n.d(e,{BP:()=>c,l5:()=>u,q3:()=>a});var r=n(76517),i=n(97928),s=n(89893);class o{constructor(t,e){this.layout=t,this.buffer="number"==typeof e?new ArrayBuffer(e*t.stride):e;for(const n of t.fields.keys()){const e=t.fields.get(n);this[n]=new e.constructor(this.buffer,e.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(t,e){const n=this[t];return n&&n.elementCount===e.ElementCount&&n.elementType===e.ElementType?n:null}slice(t,e){return new o(this.layout,this.buffer.slice(t*this.stride,e*this.stride))}copyFrom(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.count;const i=this.stride;if(i%4==0){const s=new Uint32Array(t.buffer,e*i,r*i/4);new Uint32Array(this.buffer,n*i,r*i/4).set(s)}else{const s=new Uint8Array(t.buffer,e*i,r*i);new Uint8Array(this.buffer,n*i,r*i).set(s)}return this}get cachedMemory(){return this.byteLength}dispose(){}}class a{constructor(t){this._stride=0,this._lastAligned=0,this._fields=new Map,t&&(this._stride=t.stride,t.fields.forEach((t=>this._fields.set(t[0],{...t[1],constructor:d(t[1].constructor)}))))}freeze(){return this}vec2f(t,e){return this._appendField(t,r.gH,e),this}vec2f64(t,e){return this._appendField(t,r.si,e),this}vec3f(t,e){return this._appendField(t,r.xs,e),this}vec3f64(t,e){return this._appendField(t,r.Xm,e),this}vec4f(t,e){return this._appendField(t,r.Eq,e),this}vec4f64(t,e){return this._appendField(t,r.Aj,e),this}mat3f(t,e){return this._appendField(t,r.jZ,e),this}mat3f64(t,e){return this._appendField(t,r.j0,e),this}mat4f(t,e){return this._appendField(t,r.Sx,e),this}mat4f64(t,e){return this._appendField(t,r.E$,e),this}vec4u8(t,e){return this._appendField(t,r.XP,e),this}f32(t,e){return this._appendField(t,r.Y$,e),this}f64(t,e){return this._appendField(t,r.qB,e),this}u8(t,e){return this._appendField(t,r.SL,e),this}u16(t,e){return this._appendField(t,r.h,e),this}i8(t,e){return this._appendField(t,r.bf,e),this}vec2i8(t,e){return this._appendField(t,r.D6,e),this}vec2i16(t,e){return this._appendField(t,r.mJ,e),this}vec2u8(t,e){return this._appendField(t,r.LC,e),this}vec4u16(t,e){return this._appendField(t,r.Uz,e),this}u32(t,e){return this._appendField(t,r.P,e),this}_appendField(t,e,n){if(this._fields.has(t))return void(0,s.vA)(!1,`${t} already added to vertex buffer layout`);const r=e.ElementCount*(0,i.GJ)(e.ElementType),o=this._stride;this._stride+=r,this._fields.set(t,{size:r,constructor:e,offset:o,optional:n})}createBuffer(t){return new o(this,t)}createView(t){return new o(this,t)}clone(){const t=new a;return t._stride=this._stride,t._fields=new Map,this._fields.forEach(((e,n)=>t._fields.set(n,e))),t.BufferType=this.BufferType,t}get stride(){if(this._lastAligned!==this._fields.size){let t=1;this._fields.forEach((e=>t=Math.max(t,(0,i.GJ)(e.constructor.ElementType)))),this._stride=Math.floor((this._stride+t-1)/t)*t,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function c(){return new a}class u{constructor(t){this.fields=new Array,t.fields.forEach(((t,e)=>{const n={...t,constructor:f(t.constructor)};this.fields.push([e,n])})),this.stride=t.stride}}const l=[r.Y$,r.gH,r.xs,r.Eq,r.jZ,r.Sx,r.qB,r.si,r.Xm,r.Aj,r.j0,r.E$,r.SL,r.LC,r.eI,r.XP,r.h,r.Yi,r.nS,r.Uz,r.P,r.An,r.H$,r.ml,r.bf,r.D6,r.m8,r.TX,r.Qt,r.mJ,r.Vp,r.E7,r.My,r.UL,r.zD,r.Y4];function f(t){return`${t.ElementType}_${t.ElementCount}`}function d(t){return h.get(t)}const h=new Map;l.forEach((t=>h.set(f(t),t)))}}]);