"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[180,9909],{22290:(e,t,n)=>{n.d(t,{G:()=>r,S:()=>o});class r{*[Symbol.iterator](){let e=this.next();for(;e;)yield e,e=this.next()}}class o extends r{constructor(e){super(),this.m_iGeom=-1,this.m_aGeoms=e?e.slice():[]}next(){if(this.m_iGeom<this.m_aGeoms.length-1){const e=this.m_aGeoms[++this.m_iGeom];return this.m_aGeoms[this.m_iGeom]=null,e}return null}tock(){return!1}getGeometryID(){return this.m_iGeom}getRank(){return 1}}},37798:(e,t,n)=>{n.d(t,{Hh:()=>u,fz:()=>c,g7:()=>l,s1:()=>i,zo:()=>a});var r=n(22290),o=n(93205);let s;function i(){return!!s&&(0,o.i)()}async function u(){if(!i()){const[e,t]=await Promise.all([Promise.all([n.e(1853),n.e(5646),n.e(773)]).then(n.bind(n,60773)),Promise.all([n.e(1853),n.e(5646)]).then(n.bind(n,75646)).then((e=>e.aG)).then((e=>{let{injectPe:t}=e;return t})),(0,o.l)()]);s=new e.OperatorGeodeticDensifyByLength,t(o.p)}}function l(e,t,n,r){return s.execute(e,t,n,r,null)}function a(e,t,n,o){const i=s.executeMany(new r.S(e),t,n,o,null);return Array.from(i)}function c(){return s.supportsCurves()}},40180:(e,t,n)=>{n.r(t),n.d(t,{execute:()=>r.e,executeMany:()=>r.a,isLoaded:()=>r.i,load:()=>r.l,supportsCurves:()=>r.s});n(84190),n(37798),n(73401);var r=n(82016)},73401:(e,t,n)=>{n.d(t,{O:()=>r});const r={geodesic:0,loxodrome:1,"great-elliptic":2,"normal-section":3,"shape-preserving":4}},82016:(e,t,n)=>{n.d(t,{a:()=>f,e:()=>h,g:()=>p,i:()=>m,l:()=>d,s:()=>c});var r=n(84190),o=n(37798),s=n(73401);let i,u,l,a,c;function m(){return!!i&&(0,o.s1)()}async function d(){if(!m()){const[e]=await Promise.all([Promise.all([n.e(1853),n.e(5646),n.e(5410),n.e(2862)]).then(n.bind(n,2862)),(0,o.Hh)()]);i=e.fromGeometry,u=e.fromSpatialReference,l=e.getSpatialReference,a=e.toGeometry,c=(0,o.fz)()}}function h(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{curveType:c="geodesic",unit:m}=n;m&&(t=(0,r.oU)(t,m,"meters"));const d=l(e);return a((0,o.g7)(i(e),t,u(d),s.O[c]),d)}function f(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{curveType:c="geodesic",unit:m}=n;m&&(t=(0,r.oU)(t,m,"meters"));const d=e.map(i),h=l(e);return(0,o.zo)(d,t,u(h),s.O[c]).map((e=>a(e,h)))}const p=Object.freeze(Object.defineProperty({__proto__:null,execute:h,executeMany:f,isLoaded:m,load:d,get supportsCurves(){return c}},Symbol.toStringTag,{value:"Module"}))}}]);