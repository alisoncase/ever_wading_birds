"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[1510],{41510:(e,r,t)=>{t.r(r),t.d(r,{getGeometryServiceURL:()=>c,projectGeometry:()=>g});var n=t(32195),i=t(74719),o=t(21457),l=t(81881),a=t(16897);async function c(){let e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;if(n.A.geometryServiceUrl)return n.A.geometryServiceUrl;if(!r)throw new i.A("internal:geometry-service-url-not-configured");e="portal"in r?r.portal||o.A.getDefault():r,await e.load({signal:t});const l=e.helperServices?.geometry?.url;if(!l)throw new i.A("internal:geometry-service-url-not-configured");return l}async function g(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3?arguments[3]:void 0;const o=await c(t,n),g=new a.A({geometries:[e],outSpatialReference:r}),s=await(0,l.C)(o,g,{signal:n});if(s&&Array.isArray(s)&&1===s.length)return s[0];throw new i.A("internal:geometry-service-projection-failed")}}}]);