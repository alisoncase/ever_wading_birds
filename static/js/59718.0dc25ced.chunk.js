"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[59718,73848],{59718:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var n,i=s(93800),a=s(19455),r=s(48602),o=(s(21265),s(50925),s(14746),s(75269)),l=s(12560),u=s(47800),p=s(65920),d=s(78629),c=s(73848);const m={base:u.default,key:"type",typeMap:{extent:l.default,polygon:p.default}};let f=n=class extends a.A{constructor(e){super(e),this.areaOfInterest=null,this.subsetDefinitions=null}get dimensions(){const{subsetDefinitions:e}=this;if(null==e||0===e.length)return[];const t=new Map;e.forEach((e=>{if(!e.dimensionName)return;let s,n;if(Array.isArray(e.values[0])){const t=e.values;s=t[0][0],n=t[e.values.length-1][1]}else{const t=e.values;s=t[0],n=t[e.values.length-1]}if(t.has(e.dimensionName)){const i=t.get(e.dimensionName);i[0]=Math.min(s,i[0]),i[1]=Math.max(n,i[1])}else t.set(e.dimensionName,[s,n])}));const s=[];for(const n of t)s.push({name:n[0],extent:n[1]});return s}get variables(){const{subsetDefinitions:e}=this;if(null==e||0===e.length)return[];const t=new Set;return e.forEach((e=>{e.variableName&&t.add(e.variableName)})),[...t]}clone(){const e=this.subsetDefinitions?.map((e=>e.clone())),t=this.areaOfInterest?this.areaOfInterest.clone():this.areaOfInterest;return new n({areaOfInterest:t,subsetDefinitions:e})}};(0,i._)([(0,r.MZ)({types:m,json:{read:d.fromJSON,write:!0}})],f.prototype,"areaOfInterest",void 0),(0,i._)([(0,r.MZ)({readOnly:!0})],f.prototype,"dimensions",null),(0,i._)([(0,r.MZ)({readOnly:!0})],f.prototype,"variables",null),(0,i._)([(0,r.MZ)({type:[c.default],json:{write:!0}})],f.prototype,"subsetDefinitions",void 0),f=n=(0,i._)([(0,o.$)("esri.layers.support.MultidimensionalSubset")],f);const h=f},73848:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var n,i=s(93800),a=s(19455),r=s(82301),o=s(48602),l=s(80556),u=s(75269);let p=n=class extends a.A{constructor(e){super(e),this.variableName=null,this.dimensionName=null,this.values=[],this.isSlice=!1}clone(){return new n({variableName:this.variableName,dimensionName:this.dimensionName,values:(0,r.clone)(this.values),isSlice:this.isSlice})}};(0,i._)([(0,o.MZ)({type:String,json:{write:!0}})],p.prototype,"variableName",void 0),(0,i._)([(0,o.MZ)({type:String,json:{write:!0}})],p.prototype,"dimensionName",void 0),(0,i._)([(0,o.MZ)({type:l.gK.array(l.gK.oneOf([l.gK.native(Number),l.gK.array(l.gK.native(Number))])),json:{write:!0}})],p.prototype,"values",void 0),(0,i._)([(0,o.MZ)({type:Boolean,json:{write:!0}})],p.prototype,"isSlice",void 0),p=n=(0,i._)([(0,u.$)("esri.layers.support.DimensionalDefinition")],p);const d=p}}]);