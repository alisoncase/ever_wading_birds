"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[296,38397,99300],{296:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var o=r(93800),i=r(79625),s=r(19455),n=r(48602),a=(r(21265),r(50925),r(14746),r(14800)),l=r(75269),u=r(15484),d=r(54723);let y=class extends s.A{constructor(e){super(e),this.displayFieldName=null,this.feature=null,this.foundFieldName=null,this.layerId=null,this.layerName=null,this.value=void 0}readFeature(e,t){const r={attributes:{}};return t.attributes&&(r.attributes=t.attributes),t.geometry&&(r.geometry=t.geometry),i.default.fromJSON(r)}writeFeature(e,t){if(!e)return;const{attributes:r,geometry:o}=e;r&&(t.attributes={...r}),null!=o&&(t.geometry=o.toJSON(),t.geometryType=d.Ye.toJSON(o.type))}};(0,o._)([(0,n.MZ)({type:String,json:{write:!0}})],y.prototype,"displayFieldName",void 0),(0,o._)([(0,n.MZ)({type:i.default})],y.prototype,"feature",void 0),(0,o._)([(0,a.w)("feature",["attributes","geometry"])],y.prototype,"readFeature",null),(0,o._)([(0,u.K)("feature")],y.prototype,"writeFeature",null),(0,o._)([(0,n.MZ)({type:String,json:{write:!0}})],y.prototype,"foundFieldName",void 0),(0,o._)([(0,n.MZ)({type:Number,json:{write:!0}})],y.prototype,"layerId",void 0),(0,o._)([(0,n.MZ)({type:String,json:{write:!0}})],y.prototype,"layerName",void 0),(0,o._)([(0,n.MZ)({json:{write:!0}})],y.prototype,"value",void 0),y=(0,o._)([(0,l.$)("esri.rest.support.FindResult")],y);const p=y},38397:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var o=r(93800),i=r(19455),s=r(48602),n=r(80556),a=(r(21265),r(14746),r(75269)),l=r(93321);let u=class extends i.A{constructor(e){super(e),this.contains=!0,this.dynamicLayerInfos=null,this.gdbVersion=null,this.geometryPrecision=null,this.layerDefinitions=null,this.layerIds=null,this.maxAllowableOffset=null,this.outSpatialReference=null,this.returnGeometry=!1,this.searchFields=null,this.searchText=null}};(0,o._)([(0,s.MZ)({type:Boolean,json:{write:{enabled:!0,isRequired:!0}}})],u.prototype,"contains",void 0),(0,o._)([(0,s.MZ)({type:[Object],json:{read:{source:"dynamicLayers"},write:{target:"dynamicLayers"}}})],u.prototype,"dynamicLayerInfos",void 0),(0,o._)([(0,s.MZ)({type:String,json:{write:!0}})],u.prototype,"gdbVersion",void 0),(0,o._)([(0,s.MZ)({type:Number,json:{write:!0}})],u.prototype,"geometryPrecision",void 0),(0,o._)([(0,s.MZ)({type:[Object],json:{write:!0}})],u.prototype,"layerDefinitions",void 0),(0,o._)([(0,s.MZ)({type:[Number],json:{write:!0}})],u.prototype,"layerIds",void 0),(0,o._)([(0,s.MZ)({type:Number,json:{write:!0}})],u.prototype,"maxAllowableOffset",void 0),(0,o._)([(0,s.MZ)({type:l.default,json:{read:{source:"outSR"},write:{target:"outSR"}}})],u.prototype,"outSpatialReference",void 0),(0,o._)([(0,s.MZ)({type:Boolean,json:{write:{enabled:!0,isRequired:!0}}})],u.prototype,"returnGeometry",void 0),(0,o._)([(0,s.MZ)({type:[String],json:{write:!0}})],u.prototype,"searchFields",void 0),(0,o._)([(0,s.MZ)({type:String,json:{write:!0}})],u.prototype,"searchText",void 0),u=(0,o._)([(0,a.$)("esri.rest.support.FindParameters")],u),u.from=(0,n.dp)(u);const d=u},99300:(e,t,r)=>{r.r(t),r.d(t,{find:()=>u});var o=r(23060),i=r(10193),s=r(70576),n=r(78076);var a=r(38397),l=r(296);async function u(e,t,r){const l=function(e){const{contains:t,dynamicLayers:r,geometryPrecision:o,layerDefinitions:i,layerIds:a,maxAllowableOffset:l,outSR:u,returnGeometry:d,searchFields:y,searchText:p}=e.toJSON(),c={contains:t,returnGeometry:d,geometryPrecision:o,maxAllowableOffset:l,searchText:p};if(a&&(c.layers=a.join(",")),y&&(c.searchFields=y.join(",")),u&&(c.sr=(0,s.YX)(u)),i){const e=[];for(let t=0;t<i.length;t++){const r=i[t];e[r.id]=r.definitionExpression}c.layerDefs=(0,n.Mt)(e)}if(r?.length){const e=[];for(let o=0;o<r.length;o++){const t=r[o],s=t.id;if(!t.subLayerIds&&a?.includes(s)){const r={id:s};r.source=t.source;let o=null;if(i?.length){const e=i.find((e=>e.id===s));o=e?.definitionExpression}o&&(r.definitionExpression=o),e.push(r)}}let t=JSON.stringify(e);"[]"===t&&(t="[{}]"),c.dynamicLayers=t}return c}(t=a.default.from(t)),u=(0,i.Dl)(e);u.path+="/find";const y=(0,i.lF)({...u.query,f:"json",...l}),p=(0,i.jV)(y,r);return(0,o.default)(u.path,p).then(d)}function d(e){const t=e.data;t.results=t.results||[];const r={results:[]};return r.results=t.results.map((e=>l.default.fromJSON(e))),r}}}]);