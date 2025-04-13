"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[36447,80106],{1277:(t,e,n)=>{n.d(e,{C:()=>h,Cr:()=>m,H6:()=>x,LV:()=>c,_I:()=>d,dz:()=>g,fA:()=>u,kb:()=>f,ld:()=>_,sd:()=>p,vt:()=>l});var i=n(64682),r=n(32636),o=n(89227),s=n(28473),a=n(1696);function l(t){return t?{origin:(0,s.o8)(t.origin),vector:(0,s.o8)(t.vector)}:{origin:(0,s.vt)(),vector:(0,s.vt)()}}function c(t,e){const n=w.get();return n.origin=t,n.vector=e,n}function h(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l();return u(t.origin,t.vector,e)}function u(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l();return(0,o.c)(n.origin,t),(0,o.c)(n.vector,e),n}function m(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l();return(0,o.c)(n.origin,t),(0,o.d)(n.vector,e,t),n}function f(t,e){const n=(0,o.d)(a.rq.get(),e,t.origin),r=(0,o.f)(t.vector,n),s=(0,o.f)(t.vector,t.vector),l=(0,i.qE)(r/s,0,1),c=(0,o.d)(a.rq.get(),(0,o.h)(a.rq.get(),t.vector,l),n);return(0,o.f)(c,c)}function d(t,e,n){return x(t,e,0,1,n)}function p(t,e,n){return(0,o.g)(n,t.origin,(0,o.h)(n,t.vector,e))}function x(t,e,n,r,s){const{vector:l,origin:c}=t,h=(0,o.d)(a.rq.get(),e,c),u=(0,o.f)(l,h)/(0,o.k)(l);return(0,o.h)(s,l,(0,i.qE)(u,n,r)),(0,o.g)(s,s,t.origin)}function g(t,e){if(v(t,c(e.origin,e.direction),!1,M)){const{tA:e,pB:n,distance2:i}=M;if(e>=0&&e<=1)return i;if(e<0)return(0,o.s)(t.origin,n);if(e>1)return(0,o.s)((0,o.g)(a.rq.get(),t.origin,t.vector),n)}return null}function _(t,e,n){return!!v(t,e,!0,M)&&((0,o.c)(n,M.pA),!0)}function v(t,e,n,r){const s=1e-6,l=t.origin,c=(0,o.g)(a.rq.get(),l,t.vector),h=e.origin,u=(0,o.g)(a.rq.get(),h,e.vector),m=a.rq.get(),f=a.rq.get();if(m[0]=l[0]-h[0],m[1]=l[1]-h[1],m[2]=l[2]-h[2],f[0]=u[0]-h[0],f[1]=u[1]-h[1],f[2]=u[2]-h[2],Math.abs(f[0])<s&&Math.abs(f[1])<s&&Math.abs(f[2])<s)return!1;const d=a.rq.get();if(d[0]=c[0]-l[0],d[1]=c[1]-l[1],d[2]=c[2]-l[2],Math.abs(d[0])<s&&Math.abs(d[1])<s&&Math.abs(d[2])<s)return!1;const p=m[0]*f[0]+m[1]*f[1]+m[2]*f[2],x=f[0]*d[0]+f[1]*d[1]+f[2]*d[2],g=m[0]*d[0]+m[1]*d[1]+m[2]*d[2],_=f[0]*f[0]+f[1]*f[1]+f[2]*f[2],v=(d[0]*d[0]+d[1]*d[1]+d[2]*d[2])*_-x*x;if(Math.abs(v)<s)return!1;let M=(p*x-g*_)/v,w=(p+x*M)/_;n&&(M=(0,i.qE)(M,0,1),w=(0,i.qE)(w,0,1));const Y=a.rq.get(),A=a.rq.get();return Y[0]=l[0]+M*d[0],Y[1]=l[1]+M*d[1],Y[2]=l[2]+M*d[2],A[0]=h[0]+w*f[0],A[1]=h[1]+w*f[1],A[2]=h[2]+w*f[2],r.tA=M,r.tB=w,r.pA=Y,r.pB=A,r.distance2=(0,o.s)(Y,A),!0}const M={tA:0,tB:0,pA:(0,s.vt)(),pB:(0,s.vt)(),distance2:0},w=new r.I((()=>l()))},32636:(t,e,n)=>{n.d(e,{I:()=>r});var i=n(22029);class r{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,i.d)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*o);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,o));t++)this._items.push(this._allocator())}}const o=1024},36447:(t,e,n)=>{n.r(e),n.d(e,{ElevationSamplerBase:()=>h,MultiTileElevationSampler:()=>m,TileElevationSampler:()=>u,updateGeometryElevation:()=>f});n(21265);var i=n(42198),r=n(50925),o=n(84190),s=n(75400),a=n(90772),l=n(5616);const c=()=>r.A.getLogger("esri.layers.support.ElevationSampler");class h{queryElevation(t){return f(t.clone(),this)}on(){return(0,i.hA)()}projectIfRequired(t,e){return d(t,e)}}class u extends h{get spatialReference(){return this.extent.spatialReference}constructor(t,e,n){super(),this.tile=t,this.noDataValue=n;const i=t.tile.extent;this.extent=(0,a.w1)(i,e.spatialReference),this.extent.zmin=t.zmin,this.extent.zmax=t.zmax,this._aaExtent=i;const r=(0,o.GA)(e.spatialReference),s=e.lodAt(t.tile.level).resolution*r;this.demResolution={min:s,max:s}}contains(t){const e=this.projectIfRequired(t,this.spatialReference);return null!=e&&this.containsAt(e.x,e.y)}containsAt(t,e){return(0,a.Rj)(this._aaExtent,t,e)}elevationAt(t,e){if(!this.containsAt(t,e)){const n=this.extent,i=`${n.xmin}, ${n.ymin}, ${n.xmax}, ${n.ymax}`;return c().warn("#elevationAt()",`Point used to sample elevation (${t}, ${e}) is outside of the sampler extent (${i})`),this.noDataValue}return this.tile.sample(t,e)??this.noDataValue}}class m extends h{get spatialReference(){return this.extent.spatialReference}constructor(t,e,n){let i;super(),"number"==typeof e?(this.noDataValue=e,i=null):(i=e,this.noDataValue=n),this.samplers=i?t.map((t=>new u(t,i,this.noDataValue))):t;const r=this.samplers[0];if(r){this.extent=r.extent.clone();const{min:t,max:e}=r.demResolution;this.demResolution={min:t,max:e};for(let n=1;n<this.samplers.length;n++){const t=this.samplers[n];this.extent.union(t.extent),this.demResolution.min=Math.min(this.demResolution.min,t.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,t.demResolution.max)}}else this.extent=(0,a.w1)((0,a.vt)(),i.spatialReference),this.demResolution={min:0,max:0}}elevationAt(t,e){let n,i=!1;for(const r of this.samplers)if(r.containsAt(t,e)&&(i=!0,n=r.elevationAt(t,e),n!==r.noDataValue))return n;return null!=n?n:(i||c().warn("#elevationAt()",`Point used to sample elevation (${t}, ${e}) is outside of the sampler`),this.noDataValue)}}function f(t,e){const n=d(t,e.spatialReference);if(!n)return null;switch(t.type){case"point":!function(t,e,n){t.z=n.elevationAt(e.x,e.y)}(t,n,e);break;case"polyline":!function(t,e,n){p.spatialReference=e.spatialReference;const i=t.hasM&&!t.hasZ;for(let r=0;r<t.paths.length;r++){const o=t.paths[r],s=e.paths[r];for(let t=0;t<o.length;t++){const e=o[t],r=s[t];p.x=r[0],p.y=r[1],i&&(e[3]=e[2]),e[2]=n.elevationAt(p.x,p.y)}}t.hasZ=!0}(t,n,e);break;case"multipoint":!function(t,e,n){p.spatialReference=e.spatialReference;const i=t.hasM&&!t.hasZ;for(let r=0;r<t.points.length;r++){const o=t.points[r],s=e.points[r];p.x=s[0],p.y=s[1],i&&(o[3]=o[2]),o[2]=n.elevationAt(p.x,p.y)}t.hasZ=!0}(t,n,e)}return t}function d(t,e){if(null==t)return null;const n=t.spatialReference;if(n.equals(e))return t;const i=(0,l.project)(t,e);return i||c().error(`Cannot project geometry spatial reference (wkid:${n.wkid}) to elevation sampler spatial reference (wkid:${e.wkid})`),i}const p=new s.default},54380:(t,e,n)=>{n.d(e,{Fm:()=>c,Q7:()=>h,Ui:()=>l});var i=n(32636),r=n(89227),o=n(28473),s=n(1277);n(1696);function a(t){return t?{p0:(0,o.o8)(t.p0),p1:(0,o.o8)(t.p1),p2:(0,o.o8)(t.p2)}:{p0:(0,o.vt)(),p1:(0,o.vt)(),p2:(0,o.vt)()}}function l(t,e,n){const{direction:i,origin:o}=e,{p0:s,p1:a,p2:l}=t,c=a[0]-s[0],h=a[1]-s[1],u=a[2]-s[2],m=l[0]-s[0],f=l[1]-s[1],d=l[2]-s[2],p=i[1]*d-f*i[2],x=i[2]*m-d*i[0],g=i[0]*f-m*i[1],_=c*p+h*x+u*g;if(_>-1e-5&&_<1e-5)return!1;const v=1/_,M=o[0]-s[0],w=o[1]-s[1],Y=o[2]-s[2],A=v*(M*p+w*x+Y*g);if(A<0||A>1)return!1;const X=w*u-h*Y,B=Y*c-u*M,R=M*h-c*w,b=v*(i[0]*X+i[1]*B+i[2]*R);return!(b<0||A+b>1)&&(n&&((0,r.h)(n,i,v*(m*X+f*B+d*R)),(0,r.g)(n,o,n)),!0)}function c(t,e,n){const i=e[0]-t[0],r=e[1]-t[1],o=n[0]-t[0],s=n[1]-t[1];return.5*Math.abs(i*s-r*o)}function h(t,e,n){return(0,r.d)(u,e,t),(0,r.d)(m,n,t),.5*(0,r.l)((0,r.e)(u,u,m))}new i.I(s.vt),new i.I((()=>a()));const u=(0,o.vt)(),m=(0,o.vt)()},75512:(t,e,n)=>{n.r(e),n.d(e,{default:()=>a});var i=n(21265),r=n(95984),o=n(14967),s=n(41571);class a{async createIndex(t,e){const n=new Array;if(!t.vertexAttributes?.position)return new r.w;const i=function(t){const{vertexAttributes:{position:e},vertexSpace:n,spatialReference:i,transform:r}=t,a=(0,s.UR)({vertexAttributes:{position:e},vertexSpace:n,spatialReference:i,transform:r},o.default.absolute,{allowBufferReuse:!0})?.position;return a?!t.components||t.components.some((t=>!t.faces))?{position:a.buffer}:{position:a.buffer,components:t.components.map((t=>t.faces))}:null}(t),a=null!=e?await e.invoke("createIndexThread",i,{transferList:n}):this.createIndexThread(i).result;return l().fromJSON(a)}createIndexThread(t){const e=l();if(!t)return{result:e.toJSON()};const n=new Float64Array(t.position);return t.components?function(t,e,n){let i=0;for(const s of n)i+=s.length/3;const r=new Array(i);let o=0;for(const s of n)for(let t=0;t<s.length;t+=3)r[o++]=c(e,3*s[t],3*s[t+1],3*s[t+2]);return t.load(r),{result:t.toJSON()}}(e,n,t.components.map((t=>new Uint32Array(t)))):function(t,e){const n=new Array(e.length/9);let i=0;for(let r=0;r<e.length;r+=9)n[i++]=c(e,r,r+3,r+6);return t.load(n),{result:t.toJSON()}}(e,n)}}function l(){return new r.w(9,(0,i.A)("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}function c(t,e,n,i){return{minX:Math.min(t[e],t[n],t[i]),maxX:Math.max(t[e],t[n],t[i]),minY:Math.min(t[e+1],t[n+1],t[i+1]),maxY:Math.max(t[e+1],t[n+1],t[i+1]),p0:[t[e],t[e+1],t[e+2]],p1:[t[n],t[n+1],t[n+2]],p2:[t[i],t[i+1],t[i+2]]}}},80106:(t,e,n)=>{n.r(e),n.d(e,{create:()=>c});var i=n(34037),r=n(28473),o=n(91102),s=n(54380),a=n(75512),l=n(36447);async function c(t,e){const n=await(++m,d&&(clearTimeout(d),d=0),f||(f=(0,i.ho)("ElevationSamplerWorker").catch((()=>null)),f)),r=await u.createIndex(t,n);return function(t){--m,null!=t&&0===m&&(d=setTimeout((()=>{t.close(),f=null,d=0}),p))}(n),new h(t,r,e)}class h extends l.ElevationSamplerBase{constructor(t,e,n){super(),this._rindex=e,this.demResolution={min:0,max:0},this.spatialReference=t.spatialReference.clone(),this.extent=t.extent.clone(),this.noDataValue=n?.noDataValue||0}elevationAt(t,e){let n=Number.NEGATIVE_INFINITY;return(0,o.fA)([t,e,0],[0,0,-1],x),this._rindex.search({minX:t,maxX:t,minY:e,maxY:e},(t=>{(0,s.Ui)(t,x,g)&&g[2]>n&&(n=g[2])})),n===Number.NEGATIVE_INFINITY?this.noDataValue:n}}const u=new a.default;let m=0,f=null,d=0;const p=1e4,x=(0,o.fA)([0,0,0],[0,0,-1]),g=(0,r.vt)()},91102:(t,e,n)=>{n.d(e,{C:()=>d,Cr:()=>p,LV:()=>f,Zb:()=>v,aI:()=>m,fA:()=>x,kb:()=>g,oC:()=>_,vt:()=>h});var i=n(62631),r=n(32636),o=n(67965),s=n(13473),a=n(89227),l=n(28473),c=n(1696);function h(t){return t?u((0,l.o8)(t.origin),(0,l.o8)(t.direction)):u((0,l.vt)(),(0,l.vt)())}function u(t,e){return{origin:t,direction:e}}function m(t,e){return(0,i.aI)(t.origin,e.origin)&&(0,i.aI)(t.direction,e.direction)}function f(t,e){const n=M.get();return n.origin=t,n.direction=e,n}function d(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h();return x(t.origin,t.direction,e)}function p(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:h();return(0,a.c)(n.origin,t),(0,a.d)(n.direction,e,t),n}function x(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:h();return(0,a.c)(n.origin,t),(0,a.c)(n.direction,e),n}function g(t,e){const n=(0,a.e)(c.rq.get(),(0,a.n)(c.rq.get(),t.direction),(0,a.d)(c.rq.get(),e,t.origin));return(0,a.f)(n,n)}function _(t,e,n){const i=(0,a.f)(t.direction,(0,a.d)(n,e,t.origin));return(0,a.g)(n,t.origin,(0,a.h)(n,t.direction,i)),n}function v(t,e,n,i){const r=t.origin,s=e.origin,l=t.direction,c=e.direction,h=(0,a.f)((0,a.n)(Y,l),(0,a.n)(A,c));if(Math.abs(h)>=1)return null;const u=(0,a.e)(Y,l,c),m=(0,a.a)(w,s,r),f=(0,o.hZ)(X,l[0],l[1],l[2],-c[0],-c[1],-c[2],u[0],u[1],u[2]),d=(0,o.B8)(X,f);if(null==d)return[n,i];const p=(0,a.f)((0,a.i)(Y,d[0],d[3],d[6]),m),x=(0,a.f)((0,a.i)(A,d[1],d[4],d[7]),m);return(0,a.g)(n,r,(0,a.h)(w,l,p)),(0,a.g)(i,s,(0,a.h)(w,c,x)),[n,i]}const M=new r.I((()=>h())),w=(0,l.vt)(),Y=(0,l.vt)(),A=(0,l.vt)(),X=(0,s.vt)()},95984:(t,e,n)=>{n.d(e,{E:()=>B,w:()=>a});var i=n(62631),r=n(7951),o=(n(21265),n(15899)),s=n(95735);class a{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,e=arguments.length>1?arguments[1]:void 0;this._compareMinX=m,this._compareMinY=f,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this._toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),w.prune(),Y.prune(),A.prune(),X.prune()}all(t){l(this._data,t)}search(t,e){let n=this._data;const i=this._toBBox;if(v(t,n))for(w.clear();n;){for(let r=0,o=n.children.length;r<o;r++){const o=n.children[r],s=n.leaf?i(o):o;v(t,s)&&(n.leaf?e(o):_(t,s)?l(o,e):w.push(o))}n=w.pop()}}collides(t){let e=this._data;const n=this._toBBox;if(!v(t,e))return!1;for(w.clear();e;){for(let i=0,r=e.children.length;i<r;i++){const r=e.children[i],o=e.leaf?n(r):r;if(v(t,o)){if(e.leaf||_(t,o))return!0;w.push(r)}}e=w.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}let e=this._build(t.slice(),0,t.length-1,0);if(this._data.children.length)if(this._data.height===e.height)this._splitRoot(this._data,e);else{if(this._data.height<e.height){const t=this._data;this._data=e,e=t}this._insert(e,this._data.height-e.height-1,!0)}else this._data=e;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new b([]),this}remove(t){if(!t)return this;let e,n=this._data,o=null,s=0,a=!1;const l=this._toBBox(t);for(A.clear(),X.clear();n||A.length>0;){if(n||(n=A.pop(),o=A.data[A.length-1],s=X.pop()??0,a=!0),n.leaf&&(e=(0,i.qh)(n.children,(0,r.zI)(t),n.children.length,n.indexHint),-1!==e))return n.children.splice(e,1),A.push(n),this._condense(A),this;a||n.leaf||!_(n,l)?o?(s++,n=o.children[s],a=!1):n=null:(A.push(n),X.push(s),s=0,o=n,n=n.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_build(t,e,n,i){const r=n-e+1;let o=this._maxEntries;if(r<=o){const i=new b(t.slice(e,n+1));return c(i,this._toBBox),i}i||(i=Math.ceil(Math.log(r)/Math.log(o)),o=Math.ceil(r/o**(i-1)));const s=new I([]);s.height=i;const a=Math.ceil(r/o),l=a*Math.ceil(Math.sqrt(o));M(t,e,n,l,this._compareMinX);for(let c=e;c<=n;c+=l){const e=Math.min(c+l-1,n);M(t,c,e,a,this._compareMinY);for(let n=c;n<=e;n+=a){const r=Math.min(n+a-1,e);s.children.push(this._build(t,n,r,i-1))}}return c(s,this._toBBox),s}_insert(t,e,n){const i=this._toBBox,r=n?t:i(t);A.clear();const o=function(t,e,n,i){for(;i.push(e),!0!==e.leaf&&i.length-1!==n;){let n,i=1/0,r=1/0;for(let o=0,s=e.children.length;o<s;o++){const s=e.children[o],a=d(s),l=x(t,s)-a;l<r?(r=l,i=a<i?a:i,n=s):l===r&&a<i&&(i=a,n=s)}e=n||e.children[0]}return e}(r,this._data,e,A);for(o.children.push(t),u(o,r);e>=0&&A.data[e].children.length>this._maxEntries;)this._split(A,e),e--;!function(t,e,n){for(let i=n;i>=0;i--)u(e.data[i],t)}(r,A,e)}_split(t,e){const n=t.data[e],i=n.children.length,r=this._minEntries;this._chooseSplitAxis(n,r,i);const o=this._chooseSplitIndex(n,r,i);if(!o)return;const s=n.children.splice(o,n.children.length-o),a=n.leaf?new b(s):new I(s);a.height=n.height,c(n,this._toBBox),c(a,this._toBBox),e?t.data[e-1].children.push(a):this._splitRoot(n,a)}_splitRoot(t,e){this._data=new I([t,e]),this._data.height=t.height+1,c(this._data,this._toBBox)}_chooseSplitIndex(t,e,n){let i,r,o;i=r=1/0;for(let s=e;s<=n-e;s++){const e=h(t,0,s,this._toBBox),a=h(t,s,n,this._toBBox),l=g(e,a),c=d(e)+d(a);l<i?(i=l,o=s,r=c<r?c:r):l===i&&c<r&&(r=c,o=s)}return o}_chooseSplitAxis(t,e,n){const i=t.leaf?this._compareMinX:m,r=t.leaf?this._compareMinY:f;this._allDistMargin(t,e,n,i)<this._allDistMargin(t,e,n,r)&&t.children.sort(i)}_allDistMargin(t,e,n,i){t.children.sort(i);const r=this._toBBox,o=h(t,0,e,r),s=h(t,n-e,n,r);let a=p(o)+p(s);for(let l=e;l<n-e;l++){const e=t.children[l];u(o,t.leaf?r(e):e),a+=p(o)}for(let l=n-e-1;l>=e;l--){const e=t.children[l];u(s,t.leaf?r(e):e),a+=p(s)}return a}_condense(t){for(let e=t.length-1;e>=0;e--){const n=t.data[e];if(0===n.children.length)if(e>0){const r=t.data[e-1],o=r.children;o.splice((0,i.qh)(o,n,o.length,r.indexHint),1)}else this.clear();else c(n,this._toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this._compareMinX=new Function("a","b",e.join(t[0])),this._compareMinY=new Function("a","b",e.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function l(t,e){let n=t;for(Y.clear();n;){if(!0===n.leaf)for(const t of n.children)e((0,r.zI)(t));else Y.pushArray(n.children);n=Y.pop()??null}}function c(t,e){h(t,0,t.children.length,e,t)}function h(t,e,n,i,r){r||(r=new b([])),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(let o,s=e;s<n;s++)o=t.children[s],u(r,t.leaf?i(o):o);return r}function u(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function m(t,e){return t.minX-e.minX}function f(t,e){return t.minY-e.minY}function d(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function p(t){return t.maxX-t.minX+(t.maxY-t.minY)}function x(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function g(t,e){const n=Math.max(t.minX,e.minX),i=Math.max(t.minY,e.minY),r=Math.min(t.maxX,e.maxX),o=Math.min(t.maxY,e.maxY);return Math.max(0,r-n)*Math.max(0,o-i)}function _(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function v(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function M(t,e,n,i,r){const o=[e,n];for(;o.length;){const e=o.pop(),n=o.pop();if(e-n<=i)continue;const a=n+Math.ceil((e-n)/i/2)*i;(0,s.q)(t,a,n,e,r),o.push(n,a,a,e)}}const w=new o.A,Y=new o.A,A=new o.A,X=new o.A({deallocator:void 0});class B{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class R extends B{constructor(){super(...arguments),this.height=1,this.indexHint=new i.vW}}class b extends R{constructor(t){super(),this.children=t,this.leaf=!0}}class I extends R{constructor(t){super(),this.children=t,this.leaf=!1}}}}]);