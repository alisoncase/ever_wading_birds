"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[38690,41543,63924],{10382:(e,t,r)=>{function n(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function u(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function o(e,t,r,n,u,o,c,f,l,a,s,i,p,y,b,d){return[e,t,r,n,u,o,c,f,l,a,s,i,p,y,b,d]}r.d(t,{fA:()=>o,o8:()=>u,vt:()=>n,zK:()=>c});const c=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:c,clone:u,create:n,createView:function(e,t){return new Float64Array(e,t,16)},fromValues:o},Symbol.toStringTag,{value:"Module"}))},66509:(e,t,r)=>{function n(){return[0,0,0,1]}function u(e){return[e[0],e[1],e[2],e[3]]}function o(e,t,r,n){return[e,t,r,n]}r.d(t,{fA:()=>o,o8:()=>u,vt:()=>n,zK:()=>c});const c=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:c,clone:u,create:n,fromValues:o},Symbol.toStringTag,{value:"Module"}))},81069:(e,t,r)=>{r.r(t),r.d(t,{createFeatureServices:()=>c});var n=r(65073),u=r(46707);const o=(e,t)=>{for(const r of e)if("feature"===r.type||"subtype-group"===r.type){if(!r.url)continue;const e=(0,n.qg)(r.url).url.path,o=t.get(e);if(o)o.layers.push(r);else{const n=new u.default({url:e}),o=[r];t.set(e,{featureService:n,layers:o})}}else"group"===r.type&&o(r.layers.filter((e=>"feature"===e.type||"subtype-group"===e.type||"group"===e.type)),t)};function c(e){const t=new Map;return o(e,t),t}}}]);