"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[52768],{29591:(e,t,s)=>{s.d(t,{v:()=>i});const i=new(s(42761).J)({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"})},52768:(e,t,s)=>{s.r(t),s.d(t,{default:()=>y});var i=s(93800),o=s(19455),n=s(48602),r=(s(21265),s(50925),s(14746),s(75269)),u=s(65920),p=s(93321),l=s(78629),a=s(70576),d=s(54723),f=s(29591);let c=class extends o.A{constructor(e){super(e),this.bufferSpatialReference=null,this.distances=null,this.geodesic=!1,this.geometries=null,this.outSpatialReference=null,this.unionResults=!1,this.unit=null}toJSON(){const e={unit:f.v.toJSON(this.unit),unionResults:this.unionResults,geodesic:this.geodesic},t=this.distances,s=this.outSpatialReference,i=this.bufferSpatialReference,o=this.geometries;if(o&&o.length>0){const t=o.map((e=>(e="extent"===e.type?u.default.fromExtent(e):e).toJSON())),s="extent"===o[0].type?"esriGeometryPolygon":(0,l.getJsonType)(o[0]);e.geometries=JSON.stringify({geometryType:s,geometries:t}),e.inSR=(0,a.YX)(o[0].spatialReference)}return t&&(e.distances=t.join(",")),s&&(e.outSR=(0,a.YX)(s)),i&&(e.bufferSR=(0,a.YX)(i)),e}};(0,i._)([(0,n.MZ)({type:p.default,json:{write:!0}})],c.prototype,"bufferSpatialReference",void 0),(0,i._)([(0,n.MZ)({type:[Number],json:{write:!0}})],c.prototype,"distances",void 0),(0,i._)([(0,n.MZ)({type:Boolean,json:{write:!0}})],c.prototype,"geodesic",void 0),(0,i._)([(0,n.MZ)({types:[d.yR],json:{write:!0}})],c.prototype,"geometries",void 0),(0,i._)([(0,n.MZ)({type:p.default,json:{write:!0}})],c.prototype,"outSpatialReference",void 0),(0,i._)([(0,n.MZ)({type:Boolean,json:{write:!0}})],c.prototype,"unionResults",void 0),(0,i._)([(0,n.MZ)({type:String,json:{write:!0}})],c.prototype,"unit",void 0),c=(0,i._)([(0,r.$)("esri.rest.support.BufferParameters")],c);const y=c}}]);