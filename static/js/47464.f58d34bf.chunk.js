"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[771,24245,45501,47464,51523,75715,85594],{771:(e,t,i)=>{i.r(t),i.d(t,{default:()=>y});var n=i(93800),r=i(85715),s=i(42761),o=i(19455),a=i(48602),l=i(80556),p=(i(21265),i(14746),i(47332)),u=i(75269);const d=new s.J({esriFieldTypeInteger:"integer",esriFieldTypeString:"string"});let c=class extends(r.A.ClonableMixin(o.A)){constructor(e){super(e),this.alias=null,this.responseType=null,this.type=null,this.value=null,this.valueType=null}};(0,n._)([(0,a.MZ)({type:String,json:{name:"outAlias",write:!0}})],c.prototype,"alias",void 0),(0,n._)([(0,a.MZ)({type:String})],c.prototype,"responseType",void 0),(0,n._)([(0,a.MZ)({type:String,json:{write:!0}})],c.prototype,"type",void 0),(0,n._)([(0,a.MZ)({type:String,json:{write:!0}})],c.prototype,"value",void 0),(0,n._)([(0,p.e)(d)],c.prototype,"valueType",void 0),c=(0,n._)([(0,u.$)("esri.rest.support.AttributeBinsGrouping")],c);const y=c;c.from=(0,l.dp)(c)},1413:(e,t,i)=>{i.d(t,{Cv:()=>f,Nk:()=>y,lK:()=>g});var n=i(62631),r=i(49959),s=i(96913),o=i(10641),a=i(70576),l=i(5616);const p=[0,0];function u(e,t){if(!t)return null;if("x"in t){const i={x:0,y:0};return[i.x,i.y]=e(t.x,t.y,p),null!=t.z&&(i.z=t.z),null!=t.m&&(i.m=t.m),i}if("xmin"in t){const i={xmin:0,ymin:0,xmax:0,ymax:0};return[i.xmin,i.ymin]=e(t.xmin,t.ymin,p),[i.xmax,i.ymax]=e(t.xmax,t.ymax,p),t.hasZ&&(i.zmin=t.zmin,i.zmax=t.zmax,i.hasZ=!0),t.hasM&&(i.mmin=t.mmin,i.mmax=t.mmax,i.hasM=!0),i}return"rings"in t?{rings:d(t.rings,e),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:d(t.paths,e),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:c(t.points,e),hasM:t.hasM,hasZ:t.hasZ}:null}function d(e,t){const i=[];for(const n of e)i.push(c(n,t));return i}function c(e,t){const i=[];for(const n of e){const e=t(n[0],n[1],[0,0]);i.push(e),n.length>2&&e.push(n[2]),n.length>3&&e.push(n[3])}return i}async function y(e,t){if(!e||!t)return;const i=Array.isArray(e)?e.map((e=>null!=e.geometry?e.geometry.spatialReference:null)).filter(n.Ru):[e];await(0,s.initializeProjection)(i.map((e=>({source:e,dest:t}))))}const m=u.bind(null,l.lngLatToXY),h=u.bind(null,l.xyToLngLat);function f(e,t,i,n){if(!e)return null;if(i||(i=t,t=e.spatialReference),!(0,a.fn)(t)||!(0,a.fn)(i)||(0,a.aI)(t,i))return e;if((0,l.canProject)(t,i)){const t=(0,a.K8)(i)?m(e):h(e);return t.spatialReference=i,t}return(0,s.projectMany)(o.g,[e],t,i,null,n)[0]}const v=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(e,t,i,n){if(!e?.length||!t||!i||(0,a.aI)(t,i))return e;const s={geometries:e,inSpatialReference:t,outSpatialReference:i,geographicTransformation:n,resolve:(0,r.createResolver)()};return this._jobs.push(s),this._timer??=setTimeout(this._process,10),s.resolve.promise}_process(){this._timer=null;const e=this._jobs.shift();if(!e)return;const{geometries:t,inSpatialReference:i,outSpatialReference:n,resolve:r,geographicTransformation:p}=e;(0,l.canProject)(i,n)?(0,a.K8)(n)?r(t.map(m)):r(t.map(h)):r((0,s.projectMany)(o.g,t,i,n,p,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};function g(e,t,i,n){return v.push(e,t,i,n)}},4872:(e,t,i)=>{i.d(t,{A:()=>m});var n=i(93800),r=i(85715),s=i(42761),o=i(19455),a=i(48602),l=(i(21265),i(50925),i(14746),i(47332)),p=i(75269),u=i(771);const d=new s.J({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeDate:"date",esriFieldTypeDateOnly:"date-only",esriFieldTypeTimeOnly:"time-only",esriFieldTypeTimestampOffset:"timestamp-offset"}),c=new s.J({naturalLog:"natural-log",squareRoot:"square-root"});let y=class extends(r.A.ClonableMixin(o.A)){constructor(e){super(e),this.expression=null,this.expressionValueType=null,this.field=null,this.firstDayOfWeek=null,this.hideUpperBound=null,this.splitBy=null,this.stackBy=null,this.transformation=null}};(0,n._)([(0,a.MZ)({type:String,json:{name:"onExpression.value",write:!0}})],y.prototype,"expression",void 0),(0,n._)([(0,l.e)(d,{name:"onExpression.valueType"})],y.prototype,"expressionValueType",void 0),(0,n._)([(0,a.MZ)({type:String,json:{name:"onField",write:!0}})],y.prototype,"field",void 0),(0,n._)([(0,a.MZ)({type:String,json:{write:!0}})],y.prototype,"firstDayOfWeek",void 0),(0,n._)([(0,a.MZ)({type:String,json:{write:!0}})],y.prototype,"hideUpperBound",void 0),(0,n._)([(0,a.MZ)({type:u.default,json:{write:{overridePolicy(){return{enabled:null!=this.splitBy?.value||null!=this.splitBy?.type}}}}})],y.prototype,"splitBy",void 0),(0,n._)([(0,a.MZ)({type:u.default,json:{write:{target:{stackBy:{type:u.default},jsonStyle:{type:String}},writer:(e,t)=>{e&&(t.stackBy=e.toJSON(),null!=e.responseType&&(t.jsonStyle=e.responseType))},overridePolicy(){return{enabled:null!=this.stackBy?.value||null!=this.stackBy?.type}}},read:{source:["stackBy","jsonStyle"],reader:(e,t)=>u.default.fromJSON({...t.stackBy,responseType:t.jsonStyle})}}})],y.prototype,"stackBy",void 0),(0,n._)([(0,l.e)(c)],y.prototype,"transformation",void 0),y=(0,n._)([(0,p.$)("esri.rest.support.BinParametersBase")],y);const m=y},10641:(e,t,i)=>{i.d(t,{g:()=>n});const n={convertToGEGeometry:function(e,t){return null==t?null:e.convertJSONToGeometry(t)},exportPoint:function(e,t,i){const n=new r(e.getPointX(t),e.getPointY(t),i),s=e.hasZ(t),o=e.hasM(t);return s&&(n.z=e.getPointZ(t)),o&&(n.m=e.getPointM(t)),n},exportPolygon:function(e,t,i){return new s(e.exportPaths(t),i,e.hasZ(t),e.hasM(t))},exportPolyline:function(e,t,i){return new o(e.exportPaths(t),i,e.hasZ(t),e.hasM(t))},exportMultipoint:function(e,t,i){return new a(e.exportPoints(t),i,e.hasZ(t),e.hasM(t))},exportExtent:function(e,t,i){const n=e.hasZ(t),r=e.hasM(t),s=new l(e.getXMin(t),e.getYMin(t),e.getXMax(t),e.getYMax(t),i);if(n){const i=e.getZExtent(t);s.zmin=i.vmin,s.zmax=i.vmax}if(r){const i=e.getMExtent(t);s.mmin=i.vmin,s.mmax=i.vmax}return s}};class r{constructor(e,t,i){this.x=e,this.y=t,this.spatialReference=i,this.z=void 0,this.m=void 0}}class s{constructor(e,t,i,n){this.rings=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}class o{constructor(e,t,i,n){this.paths=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}class a{constructor(e,t,i,n){this.points=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}class l{constructor(e,t,i,n,r){this.xmin=e,this.ymin=t,this.xmax=i,this.ymax=n,this.spatialReference=r,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},24245:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var n=i(93800),r=i(93670),s=i(48602),o=i(80556),a=(i(21265),i(14746),i(47332)),l=i(75269),p=i(4872),u=i(45501);function d(e,t,i){(0,r.sM)(i,"string"==typeof e?e:e?.getTime(),t)}function c(e,t){const i=e.parameters[t];return i?"string"==typeof i?i:new Date(i):null}let y=class extends p.A{constructor(e){super(e),this.end=null,this.interval=null,this.offset=null,this.returnFullIntervalBin=null,this.start=null,this.snapToData=null,this.type="date"}};(0,n._)([(0,s.MZ)({cast:e=>null!=e?"string"==typeof e?e:new Date(e):null,json:{name:"parameters.end",read:{reader:(e,t)=>c(t,"end")},write:{writer:d}}})],y.prototype,"end",void 0),(0,n._)([(0,s.MZ)({type:u.default,json:{name:"parameters",write:!0}})],y.prototype,"interval",void 0),(0,n._)([(0,s.MZ)({type:u.default,json:{name:"parameters.offset",write:!0}})],y.prototype,"offset",void 0),(0,n._)([(0,s.MZ)({type:Boolean,json:{name:"parameters.returnFullIntervalBin",write:!0}})],y.prototype,"returnFullIntervalBin",void 0),(0,n._)([(0,s.MZ)({cast:e=>null!=e?"string"==typeof e?e:new Date(e):null,json:{name:"parameters.start",read:{reader:(e,t)=>c(t,"start")},write:{writer:d}}})],y.prototype,"start",void 0),(0,n._)([(0,s.MZ)({type:String,json:{name:"parameters.snapToData",write:!0}})],y.prototype,"snapToData",void 0),(0,n._)([(0,a.e)({dateBin:"date"},{readOnly:!0})],y.prototype,"type",void 0),y=(0,n._)([(0,l.$)("esri.rest.support.DateBinParameters")],y);const m=y;y.from=(0,o.dp)(y)},45501:(e,t,i)=>{i.r(t),i.d(t,{default:()=>y});var n=i(93800),r=i(85715),s=i(42761),o=i(19455),a=i(48602),l=i(80556),p=(i(21265),i(14746),i(47332)),u=i(75269);const d=(0,s.O)()({year:"years",quarter:"quarters",month:"months",week:"weeks",day:"days",hour:"hours",minute:"minutes",second:"seconds"});let c=class extends(r.A.ClonableMixin(o.A)){constructor(e){super(e),this.value=null,this.unit=null}};(0,n._)([(0,a.MZ)({type:Number,json:{name:"number",write:!0}})],c.prototype,"value",void 0),(0,n._)([(0,p.e)(d)],c.prototype,"unit",void 0),c=(0,n._)([(0,u.$)("esri.rest.support.DateBinTimeInterval")],c);const y=c;c.from=(0,l.dp)(c)},47464:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});var n=i(93800),r=i(85715),s=i(42761),o=i(19455),a=i(50925),l=i(48602),p=i(80556),u=(i(21265),i(14746),i(47332)),d=i(75269),c=i(93321),y=i(78629),m=i(54723),h=i(51488),f=i(51523),v=i(4872),g=i(24245),x=i(75715),w=i(85594),M=i(47505),_=i(97975),Z=i(32474),S=i(40731);const B=new s.J({asc:"ascending",desc:"descending"}),j={base:v.A,key:"type",typeMap:{"auto-interval":f.default,date:g.default,"fixed-boundaries":x.default,"fixed-interval":w.default}};let T=class extends(r.A.ClonableMixin(o.A)){constructor(e){super(e),this.binParameters=null,this.binOrder="ascending",this.cacheHint=void 0,this.datumTransformation=null,this.defaultSpatialReference=null,this.distance=void 0,this.geometry=null,this.lowerBoundaryAlias=null,this.outSpatialReference=null,this.outStatistics=null,this.returnDistinctValues=null,this.spatialRelationship="intersects",this.timeExtent=null,this.upperBoundaryAlias=null,this.units=null,this.where="1=1"}set outTimeZone(e){this._set("outTimeZone",e),e&&!(0,S.wr)(e)&&a.A.getLogger(this).warn("#outTimeZone",`the parsed value '${e}' may not be a valid IANA time zone`)}};(0,n._)([(0,l.MZ)({types:j,json:{name:"bin",write:!0}})],T.prototype,"binParameters",void 0),(0,n._)([(0,u.e)(B)],T.prototype,"binOrder",void 0),(0,n._)([(0,l.MZ)({type:Boolean,json:{write:!0}})],T.prototype,"cacheHint",void 0),(0,n._)([(0,l.MZ)({json:{write:!0}})],T.prototype,"datumTransformation",void 0),(0,n._)([(0,l.MZ)({type:c.default,json:{name:"defaultSR",write:!0}})],T.prototype,"defaultSpatialReference",void 0),(0,n._)([(0,l.MZ)({type:Number,json:{write:{overridePolicy:e=>({enabled:e>0})}}})],T.prototype,"distance",void 0),(0,n._)([(0,l.MZ)({types:m.yR,json:{read:y.fromJSON,write:!0}})],T.prototype,"geometry",void 0),(0,n._)([(0,l.MZ)({type:String,json:{write:!0}})],T.prototype,"lowerBoundaryAlias",void 0),(0,n._)([(0,l.MZ)({type:c.default,json:{name:"outSR",write:!0}})],T.prototype,"outSpatialReference",void 0),(0,n._)([(0,l.MZ)({type:[_.default],json:{write:{enabled:!0,overridePolicy(){return{enabled:null!=this.outStatistics&&this.outStatistics.length>0}}}}})],T.prototype,"outStatistics",void 0),(0,n._)([(0,l.MZ)({value:null,json:{name:"outTimeReference",read:{reader:e=>e.ianaTimeZone},write:{writer:(e,t,i)=>{e&&(t[i]={ianaTimeZone:e})}}}})],T.prototype,"outTimeZone",null),(0,n._)([(0,l.MZ)({type:Boolean,json:{write:!0}})],T.prototype,"returnDistinctValues",void 0),(0,n._)([(0,u.e)(M.x,{name:"spatialRel"})],T.prototype,"spatialRelationship",void 0),(0,n._)([(0,l.MZ)({type:Z.default,json:{write:!0}})],T.prototype,"timeExtent",void 0),(0,n._)([(0,l.MZ)({type:String,json:{write:!0}})],T.prototype,"upperBoundaryAlias",void 0),(0,n._)([(0,l.MZ)({type:String,json:{read:h.VY.read,write:{writer:h.VY.write,overridePolicy(e){return{enabled:null!=e&&null!=this.distance}}}}})],T.prototype,"units",void 0),(0,n._)([(0,l.MZ)({type:String,json:{write:!0}})],T.prototype,"where",void 0),T=(0,n._)([(0,d.$)("esri.rest.support.AttributeBinsQuery")],T);const b=T;T.from=(0,p.dp)(T)},51488:(e,t,i)=>{i.d(t,{GC:()=>f,T2:()=>v,VY:()=>c,dO:()=>x,iJ:()=>h,v8:()=>y});var n=i(74719),r=i(42761),s=i(84190),o=i(96913),a=i(11771),l=i(78629),p=i(30312),u=i(70576),d=i(1413);const c=new r.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),y=Object.freeze({}),m="frequency";async function h(e,t,i){const n=e.bin;return n.onField&&(n.onField=n.onField.trim()),n.onExpression?.value&&(n.onExpression.value=n.onExpression.value.trim()),n.splitBy&&(n.splitBy.value&&(n.splitBy.value=n.splitBy.value.trim()),n.splitBy.outAlias&&(n.splitBy.outAlias=n.splitBy.outAlias.trim())),n.stackBy&&(n.stackBy.value&&(n.stackBy.value=n.stackBy.value.trim()),n.stackBy.outAlias&&(n.stackBy.outAlias=n.stackBy.outAlias.trim())),"normalizationField"in n.parameters&&n.parameters.normalizationField&&(n.parameters.normalizationField=n.parameters.normalizationField.trim()),e.outStatistics?.length||(e.outStatistics=[{statisticType:"count",onStatisticField:"1",outStatisticFieldName:m}]),f(e,t,i)}async function f(e,t,i){const{outFields:n,orderByFields:r,groupByFieldsForStatistics:s,outStatistics:o}=e;if(n)for(let a=0;a<n.length;a++)n[a]=n[a].trim();if(r)for(let a=0;a<r.length;a++)r[a]=r[a].trim();if(s)for(let a=0;a<s.length;a++)s[a]=s[a].trim();if(o)for(let a=0;a<o.length;a++)o[a].onStatisticField&&(o[a].onStatisticField=o[a].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),v(e,t,i)}async function v(e,t,r){if(!e)return null;let{where:o}=e;if(e.where=o=o?.trim(),(!o||/^1 *= *1$/.test(o)||t&&t===o)&&(e.where=null),!e.geometry)return e;let m=await async function(e){const{distance:t,units:r}=e,o=e.geometry;if(null==t||"vertexAttributes"in o)return o;const a=o.spatialReference,p=r?c.fromJSON(r):(0,s.Ij)(a),y=a&&((0,u.EA)(a)||(0,u.K8)(a))?o:await(0,d.Nk)(a,u.KK).then((()=>(0,d.Cv)(o,u.KK))),m=await i.e(52482).then(i.bind(i,52482));await m.load();const h=m.execute(y,t||1,{unit:p})??void 0;if(!h||!(0,l.isPolygon)(h)||0===h.rings.length)throw new n.default("unsupported-query:invalid-parameters","Invalid parameters for query by distance");return h}(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;m=(0,a.HA)(m),m.spatialReference=t}if(m){await(0,d.Nk)(m.spatialReference,r),m=function(e,t){const i=e.spatialReference;return g(e,t)&&(0,l.isExtent)(e)?{spatialReference:i,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:e}(m,r);const t=(await(0,p.normalizeCentralMeridian)((0,l.fromJSON)(m)))[0];if(null==t)throw y;const i="quantizationParameters"in e&&e.quantizationParameters?.tolerance||"maxAllowableOffset"in e&&e.maxAllowableOffset||0,n=i&&g(m,r)?{densificationStep:8*i}:void 0,s=t.toJSON(),o=(0,d.Cv)(s,s.spatialReference,r,n);if(!o)throw y;o.spatialReference=r,e.geometry=o}return e}function g(e,t){if(!e)return!1;const i=e.spatialReference;return((0,l.isExtent)(e)||(0,l.isPolygon)(e)||(0,l.isPolyline)(e))&&!(0,u.aI)(i,t)&&!(0,o.canProjectWithoutEngine)(i,t)}function x(e,t){return null==e?null:"string"==typeof e?t?new Date(`1970-01-01T${e}Z`).getTime():new Date(e).getTime():e instanceof Date?e.getTime():e}},51523:(e,t,i)=>{i.r(t),i.d(t,{default:()=>y});var n=i(93800),r=i(93670),s=i(48602),o=i(80556),a=(i(21265),i(14746),i(47332)),l=i(75269),p=i(4872),u=i(17835);function d(e,t,i){(0,r.sM)(i,e instanceof Date?e.getTime():e,t)}let c=class extends((0,u.K)(p.A)){constructor(e){super(e),this.numBins=null,this.end=null,this.start=null,this.type="auto-interval"}};(0,n._)([(0,s.MZ)({type:Number,json:{name:"parameters.numberOfBins",write:!0}})],c.prototype,"numBins",void 0),(0,n._)([(0,s.MZ)({json:{name:"parameters.end",write:{writer:d}}})],c.prototype,"end",void 0),(0,n._)([(0,s.MZ)({json:{name:"parameters.start",write:{writer:d}}})],c.prototype,"start",void 0),(0,n._)([(0,a.e)({autoIntervalBin:"auto-interval"},{readOnly:!0})],c.prototype,"type",void 0),c=(0,n._)([(0,l.$)("esri.rest.support.AutoIntervalBinParameters")],c);const y=c;c.from=(0,o.dp)(c)},75715:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var n=i(93800),r=i(93670),s=i(48602),o=i(80556),a=(i(21265),i(14746),i(47332)),l=i(75269),p=i(4872);let u=class extends p.A{constructor(e){super(e),this.boundaries=[],this.type="fixed-boundaries"}};(0,n._)([(0,s.MZ)({json:{name:"parameters.boundaries",write:{writer:function(e,t,i){(0,r.sM)(i,e&&function(e){return e[0]instanceof Date}(e)?e.map((e=>e.getTime())):e,t)}}}})],u.prototype,"boundaries",void 0),(0,n._)([(0,a.e)({fixedBoundariesBin:"fixed-boundaries"},{readOnly:!0})],u.prototype,"type",void 0),u=(0,n._)([(0,l.$)("esri.rest.support.FixedBoundariesBinParameters")],u);const d=u;u.from=(0,o.dp)(u)},85594:(e,t,i)=>{i.r(t),i.d(t,{default:()=>y});var n=i(93800),r=i(93670),s=i(48602),o=i(80556),a=(i(21265),i(14746),i(47332)),l=i(75269),p=i(4872),u=i(17835);function d(e,t,i){(0,r.sM)(i,e instanceof Date?e.getTime():e,t)}let c=class extends((0,u.K)(p.A)){constructor(e){super(e),this.end=null,this.interval=null,this.start=null,this.type="fixed-interval"}};(0,n._)([(0,s.MZ)({json:{name:"parameters.end",write:{writer:d}}})],c.prototype,"end",void 0),(0,n._)([(0,s.MZ)({type:Number,json:{name:"parameters.interval",write:!0}})],c.prototype,"interval",void 0),(0,n._)([(0,s.MZ)({json:{name:"parameters.start",write:{writer:d}}})],c.prototype,"start",void 0),(0,n._)([(0,a.e)({fixedIntervalBin:"fixed-interval"},{readOnly:!0})],c.prototype,"type",void 0),c=(0,n._)([(0,l.$)("esri.rest.support.FixedIntervalBinParameters")],c);const y=c;c.from=(0,o.dp)(c)}}]);