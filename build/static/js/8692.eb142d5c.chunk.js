"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[8692,9909],{15747:(e,t,r)=>{r.d(t,{Pg:()=>m,fz:()=>c,g7:()=>i,zo:()=>u});var n=r(22290),o=(r(9270),r(65889),r(75646));r(12834);const s=new o.g;function i(e,t,r){return s.execute(e,t,r,null)}function u(e,t,r){const o=s.executeMany(new n.S(e),t,r,null);return Array.from(o)}function m(e,t,r){return s.isSimpleAsFeature(e,t,r,null,null)}function c(){return s.supportsCurves()}},22290:(e,t,r)=>{r.d(t,{G:()=>n,S:()=>o});class n{*[Symbol.iterator](){let e=this.next();for(;e;)yield e,e=this.next()}}class o extends n{constructor(e){super(),this.m_iGeom=-1,this.m_aGeoms=e?e.slice():[]}next(){if(this.m_iGeom<this.m_aGeoms.length-1){const e=this.m_aGeoms[++this.m_iGeom];return this.m_aGeoms[this.m_iGeom]=null,e}return null}tock(){return!1}getGeometryID(){return this.m_iGeom}getRank(){return 1}}},88692:(e,t,r)=>{r.r(t),r.d(t,{execute:()=>s,executeMany:()=>i,isSimple:()=>u});var n=r(15747),o=r(5410);function s(e){const t=(0,o.fromGeometry)(e),r=t.getSpatialReference();return(0,o.toGeometry)((0,n.g7)(t.getGeometry(),r,!1),r)}function i(e){const[t,r]=(0,o.fromGeometries)(e);return(0,n.zo)(t,r,!1).map((e=>(0,o.toGeometry)(e,r)))}function u(e){const t=(0,o.fromGeometry)(e);return(0,n.Pg)(t.getGeometry(),t.getSpatialReference(),!1)}}}]);