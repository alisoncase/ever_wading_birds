"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[8875],{605:(t,e,n)=>{n.d(e,{_:()=>o});class o{constructor(t,e,n,o,i){let r=arguments.length>5&&void 0!==arguments[5]&&arguments[5],s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;this.name=t,this.count=e,this.type=n,this.offset=o,this.stride=i,this.normalized=r,this.divisor=s}}},1277:(t,e,n)=>{n.d(e,{C:()=>u,Cr:()=>g,H6:()=>p,_I:()=>f,dz:()=>v,fA:()=>a,kb:()=>h,ld:()=>_,sd:()=>l,vt:()=>d});var o=n(64682),i=n(32636),r=n(89227),s=n(28473),c=n(1696);function d(t){return t?{origin:(0,s.o8)(t.origin),vector:(0,s.o8)(t.vector)}:{origin:(0,s.vt)(),vector:(0,s.vt)()}}function u(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d();return a(t.origin,t.vector,e)}function a(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d();return(0,r.c)(n.origin,t),(0,r.c)(n.vector,e),n}function g(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d();return(0,r.c)(n.origin,t),(0,r.d)(n.vector,e,t),n}function h(t,e){const n=(0,r.d)(c.rq.get(),e,t.origin),i=(0,r.f)(t.vector,n),s=(0,r.f)(t.vector,t.vector),d=(0,o.qE)(i/s,0,1),u=(0,r.d)(c.rq.get(),(0,r.h)(c.rq.get(),t.vector,d),n);return(0,r.f)(u,u)}function f(t,e,n){return p(t,e,0,1,n)}function l(t,e,n){return(0,r.g)(n,t.origin,(0,r.h)(n,t.vector,e))}function p(t,e,n,i,s){const{vector:d,origin:u}=t,a=(0,r.d)(c.rq.get(),e,u),g=(0,r.f)(d,a)/(0,r.k)(d);return(0,r.h)(s,d,(0,o.qE)(g,n,i)),(0,r.g)(s,s,t.origin)}function v(t,e){if(b(t,function(t,e){const n=w.get();return n.origin=t,n.vector=e,n}(e.origin,e.direction),!1,m)){const{tA:e,pB:n,distance2:o}=m;if(e>=0&&e<=1)return o;if(e<0)return(0,r.s)(t.origin,n);if(e>1)return(0,r.s)((0,r.g)(c.rq.get(),t.origin,t.vector),n)}return null}function _(t,e,n){return!!b(t,e,!0,m)&&((0,r.c)(n,m.pA),!0)}function b(t,e,n,i){const s=1e-6,d=t.origin,u=(0,r.g)(c.rq.get(),d,t.vector),a=e.origin,g=(0,r.g)(c.rq.get(),a,e.vector),h=c.rq.get(),f=c.rq.get();if(h[0]=d[0]-a[0],h[1]=d[1]-a[1],h[2]=d[2]-a[2],f[0]=g[0]-a[0],f[1]=g[1]-a[1],f[2]=g[2]-a[2],Math.abs(f[0])<s&&Math.abs(f[1])<s&&Math.abs(f[2])<s)return!1;const l=c.rq.get();if(l[0]=u[0]-d[0],l[1]=u[1]-d[1],l[2]=u[2]-d[2],Math.abs(l[0])<s&&Math.abs(l[1])<s&&Math.abs(l[2])<s)return!1;const p=h[0]*f[0]+h[1]*f[1]+h[2]*f[2],v=f[0]*l[0]+f[1]*l[1]+f[2]*l[2],_=h[0]*l[0]+h[1]*l[1]+h[2]*l[2],b=f[0]*f[0]+f[1]*f[1]+f[2]*f[2],m=(l[0]*l[0]+l[1]*l[1]+l[2]*l[2])*b-v*v;if(Math.abs(m)<s)return!1;let w=(p*v-_*b)/m,C=(p+v*w)/b;n&&(w=(0,o.qE)(w,0,1),C=(0,o.qE)(C,0,1));const q=c.rq.get(),E=c.rq.get();return q[0]=d[0]+w*l[0],q[1]=d[1]+w*l[1],q[2]=d[2]+w*l[2],E[0]=a[0]+C*f[0],E[1]=a[1]+C*f[1],E[2]=a[2]+C*f[2],i.tA=w,i.tB=C,i.pA=q,i.pB=E,i.distance2=(0,r.s)(q,E),!0}const m={tA:0,tB:0,pA:(0,s.vt)(),pB:(0,s.vt)(),distance2:0},w=new i.I((()=>d()))},13473:(t,e,n)=>{function o(){return[1,0,0,0,1,0,0,0,1]}function i(t,e,n,o,i,r,s,c,d){return[t,e,n,o,i,r,s,c,d]}n.d(e,{fA:()=>i,vt:()=>o,zK:()=>r});const r=[1,0,0,0,1,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:r,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},create:o,createView:function(t,e){return new Float64Array(t,e,9)},fromValues:i},Symbol.toStringTag,{value:"Module"}))},66951:(t,e,n)=>{n.r(e),n.d(e,{default:()=>l});var o=n(93800),i=n(49959),r=(n(50925),n(21265),n(14746),n(74719),n(75269)),s=n(89227),c=n(28473),d=n(1277),u=n(89476),a=n(51255),g=n(54171);function h(t,e,n){const o=(0,u.c)(),i=(0,u.a)(o);return(0,s.b)(i,i,t,.5),(0,s.b)(i,i,e,.5),o[3]=(0,s.j)(i,t),(0,s.g)(i,i,n),o}let f=class{constructor(){this._idToComponent=new Map,this._components=new a.A((t=>t.bounds)),this._edges=new a.A((t=>t.bounds)),this._tmpLineSegment=(0,d.vt)(),this._tmpP1=(0,c.vt)(),this._tmpP2=(0,c.vt)(),this._tmpP3=(0,c.vt)(),this.remoteClient=null}async fetchCandidates(t,e){await Promise.resolve(),(0,i.Te)(e),await this._ensureEdgeLocations(t,e);const n=[];return this._edges.forEachNeighbor((e=>(this._addCandidates(t,e,n),n.length<1e3)),t.bounds),{result:{candidates:n}}}async _ensureEdgeLocations(t,e){const n=[];if(this._components.forEachNeighbor((t=>{if(null==t.info){const{id:e,uid:o}=t;n.push({id:e,uid:o})}return!0}),t.bounds),!n.length)return;const o={components:n},i=await this.remoteClient.invoke("fetchAllEdgeLocations",o,e??{});for(const r of i.components)this._setFetchEdgeLocations(r)}async add(t){const e=new v(t.id,t.bounds);return this._idToComponent.set(e.id,e),this._components.add([e]),{result:{}}}async remove(t){const e=this._idToComponent.get(t.id);if(e){const t=[];this._edges.forEachNeighbor((n=>(n.component===e&&t.push(n),!0)),e.bounds),this._edges.remove(t),this._components.remove([e]),this._idToComponent.delete(e.id)}return{result:{}}}_setFetchEdgeLocations(t){const e=this._idToComponent.get(t.id);if(null==e||t.uid!==e.uid)return;const n=g.HY.createView(t.locations),o=new Array(n.count),i=(0,c.vt)(),r=(0,c.vt)();for(let c=0;c<n.count;c++){n.position0.getVec(c,i),n.position1.getVec(c,r);const s=h(i,r,t.origin),d=new _(e,c,s);o[c]=d}this._edges.add(o);const{objectIds:s,origin:d}=t;e.info={locations:n,objectIds:s,origin:d}}_addCandidates(t,e,n){const{info:o}=e.component,{origin:i,objectIds:r}=o,c=o.locations,d=c.position0.getVec(e.index,this._tmpP1),u=c.position1.getVec(e.index,this._tmpP2);(0,s.g)(d,d,i),(0,s.g)(u,u,i);const a=r[c.componentIndex.get(e.index)];this._addEdgeCandidate(t,a,d,u,n),p(t,a,d,n),p(t,a,u,n)}_addEdgeCandidate(t,e,n,o,i){if(!t.returnEdge)return;const r=(0,u.a)(t.bounds),a=(0,d.Cr)(n,o,this._tmpLineSegment),g=(0,d._I)(a,r,this._tmpP3);(0,u.o)(t.bounds,g)&&i.push({type:"edge",objectId:e,target:(0,c.o8)(g),distance:(0,s.j)(r,g),start:(0,c.o8)(n),end:(0,c.o8)(o)})}};f=(0,o._)([(0,r.$)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],f);const l=f;function p(t,e,n,o){if(!t.returnVertex||!(0,u.o)(t.bounds,n))return;const i=(0,u.a)(t.bounds);o.push({type:"vertex",objectId:e,target:(0,c.o8)(n),distance:(0,s.j)(i,n)})}class v{constructor(t,e){this.id=t,this.bounds=e,this.info=null,this.uid=++v.uid}}v.uid=0;class _{constructor(t,e,n){this.component=t,this.index=e,this.bounds=n}}}}]);