"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[48243],{48243:(t,e,s)=>{s.r(e),s.d(e,{submitTraceJob:()=>u,trace:()=>c});var r=s(23060),a=s(10193),n=s(47862);async function c(t,e,s){const c=(0,a.Dl)(t),u=e.toJSON();u.traceLocations=JSON.stringify(e.traceLocations),e.resultTypes&&(u.resultTypes=JSON.stringify(e.resultTypes));const i=(0,a.jV)(c.query,{query:(0,a.lF)({...u,f:"json"}),...s}),o=`${c.path}/trace`;return(0,r.default)(o,i).then((t=>function(t){const{data:e}=t;return n.default.fromJSON(e.traceResults)}(t)))}async function u(t,e,s){const n=(0,a.Dl)(t),c=e.toJSON();c.traceLocations=JSON.stringify(e.traceLocations),e.resultTypes&&(c.resultTypes=JSON.stringify(e.resultTypes));const u=(0,a.jV)(n.query,{query:(0,a.lF)({...c,async:!0,f:"json"}),...s}),i=`${n.path}/trace`,{data:o}=await(0,r.default)(i,u);return o.statusUrl}}}]);