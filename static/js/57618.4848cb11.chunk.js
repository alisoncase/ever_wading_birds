"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[12726,17389,21885,55544,57618,83314],{12726:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(93800),o=r(62631),s=r(19455),i=r(48602),a=r(80556),l=(r(21265),r(75269)),N=r(78629);let f=class extends s.A{constructor(e){super(e),this.geometries1=null,this.geometries2=null,this.relation=null,this.relationParameter=null}};(0,n._)([(0,i.MZ)({json:{read:{reader:e=>e?e.map((e=>(0,N.fromJSON)(e))).filter(o.Ru):null},write:{writer:(e,t)=>{t.geometries1=e?.map((e=>e.toJSON()))??null}}}})],f.prototype,"geometries1",void 0),(0,n._)([(0,i.MZ)({json:{read:{reader:e=>e?e.map((e=>(0,N.fromJSON)(e))).filter(o.Ru):null},write:{writer:(e,t)=>{t.geometries2=e?.map((e=>e.toJSON()))??null}}}})],f.prototype,"geometries2",void 0),(0,n._)([(0,i.MZ)({type:String,json:{write:!0}})],f.prototype,"relation",void 0),(0,n._)([(0,i.MZ)({type:String,json:{write:!0}})],f.prototype,"relationParameter",void 0),f=(0,n._)([(0,l.$)("esri.rest.support.RelationParameters")],f),f.from=(0,a.dp)(f);const u=f},17389:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(93800),o=r(19455),s=r(48602),i=r(80556),a=(r(21265),r(14746),r(75269)),l=r(54824),N=r(78629);let f=class extends o.A{constructor(e){super(e),this.calculationType=null,this.geodesic=null,this.lengthUnit=null,this.polylines=null}};(0,n._)([(0,s.MZ)({type:String,json:{write:!0}})],f.prototype,"calculationType",void 0),(0,n._)([(0,s.MZ)({type:Boolean,json:{write:!0}})],f.prototype,"geodesic",void 0),(0,n._)([(0,s.MZ)({json:{write:!0}})],f.prototype,"lengthUnit",void 0),(0,n._)([(0,s.MZ)({type:[l.default],json:{read:{reader:e=>e?e.map((e=>(0,N.fromJSON)(e))):null},write:{writer:(e,t)=>{t.polylines=e.map((e=>e.toJSON()))}}}})],f.prototype,"polylines",void 0),f=(0,n._)([(0,a.$)("esri.rest.support.LengthsParameters")],f),f.from=(0,i.dp)(f);const u=f},21885:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(93800),o=r(62631),s=r(19455),i=r(48602),a=r(80556),l=(r(21265),r(75269)),N=r(78629);let f=class extends s.A{constructor(e){super(e),this.bevelRatio=null,this.geometries=null,this.offsetDistance=null,this.offsetHow=null,this.offsetUnit=null}};(0,n._)([(0,i.MZ)({type:Number,json:{write:!0}})],f.prototype,"bevelRatio",void 0),(0,n._)([(0,i.MZ)({json:{read:{reader:e=>e?e.map((e=>(0,N.fromJSON)(e))).filter(o.Ru):null},write:{writer:(e,t)=>{t.geometries=e?.map((e=>e.toJSON()))??null}}}})],f.prototype,"geometries",void 0),(0,n._)([(0,i.MZ)({type:Number,json:{write:!0}})],f.prototype,"offsetDistance",void 0),(0,n._)([(0,i.MZ)({type:String,json:{write:!0}})],f.prototype,"offsetHow",void 0),(0,n._)([(0,i.MZ)({type:String,json:{write:!0}})],f.prototype,"offsetUnit",void 0),f=(0,n._)([(0,l.$)("esri.rest.support.OffsetParameters")],f),f.from=(0,a.dp)(f);const u=f},55544:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(93800),o=r(62631),s=r(19455),i=r(48602),a=r(80556),l=(r(21265),r(75269)),N=r(78629);let f=class extends s.A{constructor(e){super(e),this.deviationUnit=null,this.geometries=null,this.maxDeviation=null}};(0,n._)([(0,i.MZ)({type:String,json:{write:!0}})],f.prototype,"deviationUnit",void 0),(0,n._)([(0,i.MZ)({json:{read:{reader:e=>e?e.map((e=>(0,N.fromJSON)(e))).filter(o.Ru):null},write:{writer:(e,t)=>{t.geometries=e?.map((e=>e.toJSON()))??null}}}})],f.prototype,"geometries",void 0),(0,n._)([(0,i.MZ)({type:Number,json:{write:!0}})],f.prototype,"maxDeviation",void 0),f=(0,n._)([(0,l.$)("esri.rest.support.GeneralizeParameters")],f),f.from=(0,a.dp)(f);const u=f},57618:(e,t,r)=>{r.r(t),r.d(t,{areasAndLengths:()=>s,autoComplete:()=>N,buffer:()=>f,conversionTypeKebabDict:()=>y,convexHull:()=>p,cut:()=>c.J,densify:()=>d,difference:()=>_,distance:()=>m,fromGeoCoordinateString:()=>S,generalize:()=>R,intersect:()=>U,labelPoints:()=>E,lengths:()=>h,offset:()=>j,project:()=>w.C,relation:()=>G,reshape:()=>q,simplify:()=>x.C,toGeoCoordinateString:()=>Y,trimExtend:()=>Z,union:()=>K,units:()=>I});var n=r(23060),o=r(10193);async function s(e,t,r){const s=(0,o.Dl)(e),i={...s.query,f:"json",...t.toJSON()},a=(0,o.jV)(i,r);return(0,n.default)(s.path+"/areasAndLengths",a).then((e=>e.data))}var i=r(65920),a=r(70576),l=r(45945);async function N(e,t,r,s){const N=t[0].spatialReference,f=(0,o.Dl)(e),u={...f.query,f:"json",sr:(0,a.YX)(N),polygons:JSON.stringify((0,l.X)(t).geometries),polylines:JSON.stringify((0,l.X)(r).geometries)},p=(0,o.jV)(u,s);return(0,n.default)(f.path+"/autoComplete",p).then((e=>{let{data:t}=e;return(t.geometries||[]).map((e=>{let{rings:t}=e;return new i.default({spatialReference:N,rings:t})}))}))}async function f(e,t,r){const s=(0,o.Dl)(e),a={...s.query,f:"json",...t.toJSON()},l=t.outSpatialReference||t.geometries[0].spatialReference,N=(0,o.jV)(a,r);return(0,n.default)(s.path+"/buffer",N).then((e=>(e.data.geometries||[]).map((e=>{let{rings:t}=e;return new i.default({spatialReference:l,rings:t})}))))}var u=r(78629);async function p(e,t,r){const s=t[0].spatialReference,i=(0,o.Dl)(e),a={...i.query,f:"json",sr:JSON.stringify(s.toJSON()),geometries:JSON.stringify((0,l.X)(t))},N=(0,o.jV)(a,r);return(0,n.default)(i.path+"/convexHull",N).then((e=>{let{data:t}=e;return(0,u.fromJSON)(t.geometry).set({spatialReference:s})}))}var c=r(3536);async function d(e,t,r){const s=t.geometries?.[0].spatialReference,i=(0,o.Dl)(e),a={...i.query,f:"json",...t.toJSON()},l=(0,o.jV)(a,r);return(0,n.default)(i.path+"/densify",l).then((e=>{let{data:t}=e;return(t.geometries||[]).map((e=>(0,u.fromJSON)(e).set({spatialReference:s})))}))}async function _(e,t,r,s){const i=t[0].spatialReference,a=(0,o.Dl)(e);let N={query:{...a.query,f:"json",sr:JSON.stringify(i.toJSON()),geometries:JSON.stringify((0,l.X)(t)),geometry:JSON.stringify({geometryType:(0,u.getJsonType)(r),geometry:r.toJSON()})}};return s&&(N={...s,...N}),(0,n.default)(a.path+"/difference",N).then((e=>{let{data:t}=e;return(t.geometries||[]).map((e=>(0,u.fromJSON)(e).set({spatialReference:i})))}))}async function m(e,t,r){const s=(0,o.Dl)(e),i={...s.query,f:"json",...t.toJSON()},a=(0,o.jV)(i,r);return(0,n.default)(s.path+"/distance",a).then((e=>{let{data:t}=e;return t&&t.distance}))}var T=r(42761);const y=new T.J({MGRS:"mgrs",USNG:"usng",UTM:"utm",GeoRef:"geo-ref",GARS:"gars",DMS:"dms",DDM:"ddm",DD:"dd"}),I={UNIT_METER:9001,UNIT_GERMAN_METER:9031,UNIT_FOOT:9002,UNIT_SURVEY_FOOT:9003,UNIT_CLARKE_FOOT:9005,UNIT_FATHOM:9014,UNIT_NAUTICAL_MILE:9030,UNIT_SURVEY_CHAIN:9033,UNIT_SURVEY_LINK:9034,UNIT_SURVEY_MILE:9035,UNIT_KILOMETER:9036,UNIT_CLARKE_YARD:9037,UNIT_CLARKE_CHAIN:9038,UNIT_CLARKE_LINK:9039,UNIT_SEARS_YARD:9040,UNIT_SEARS_FOOT:9041,UNIT_SEARS_CHAIN:9042,UNIT_SEARS_LINK:9043,UNIT_BENOIT_1895A_YARD:9050,UNIT_BENOIT_1895A_FOOT:9051,UNIT_BENOIT_1895A_CHAIN:9052,UNIT_BENOIT_1895A_LINK:9053,UNIT_BENOIT_1895B_YARD:9060,UNIT_BENOIT_1895B_FOOT:9061,UNIT_BENOIT_1895B_CHAIN:9062,UNIT_BENOIT_1895B_LINK:9063,UNIT_INDIAN_FOOT:9080,UNIT_INDIAN_1937_FOOT:9081,UNIT_INDIAN_1962_FOOT:9082,UNIT_INDIAN_1975_FOOT:9083,UNIT_INDIAN_YARD:9084,UNIT_INDIAN_1937_YARD:9085,UNIT_INDIAN_1962_YARD:9086,UNIT_INDIAN_1975_YARD:9087,UNIT_FOOT_1865:9070,UNIT_RADIAN:9101,UNIT_DEGREE:9102,UNIT_ARCMINUTE:9103,UNIT_ARCSECOND:9104,UNIT_GRAD:9105,UNIT_GON:9106,UNIT_MICRORADIAN:9109,UNIT_ARCMINUTE_CENTESIMAL:9112,UNIT_ARCSECOND_CENTESIMAL:9113,UNIT_MIL6400:9114,UNIT_BRITISH_1936_FOOT:9095,UNIT_GOLDCOAST_FOOT:9094,UNIT_INTERNATIONAL_CHAIN:109003,UNIT_INTERNATIONAL_LINK:109004,UNIT_INTERNATIONAL_YARD:109001,UNIT_STATUTE_MILE:9093,UNIT_SURVEY_YARD:109002,UNIT_50KILOMETER_LENGTH:109030,UNIT_150KILOMETER_LENGTH:109031,UNIT_DECIMETER:109005,UNIT_CENTIMETER:109006,UNIT_MILLIMETER:109007,UNIT_INTERNATIONAL_INCH:109008,UNIT_US_SURVEY_INCH:109009,UNIT_INTERNATIONAL_ROD:109010,UNIT_US_SURVEY_ROD:109011,UNIT_US_NAUTICAL_MILE:109012,UNIT_UK_NAUTICAL_MILE:109013,UNIT_SQUARE_INCHES:"esriSquareInches",UNIT_SQUARE_FEET:"esriSquareFeet",UNIT_SQUARE_YARDS:"esriSquareYards",UNIT_ACRES:"esriAcres",UNIT_SQUARE_MILES:"esriSquareMiles",UNIT_SQUARE_MILLIMETERS:"esriSquareMillimeters",UNIT_SQUARE_CENTIMETERS:"esriSquareCentimeters",UNIT_SQUARE_DECIMETERS:"esriSquareDecimeters",UNIT_SQUARE_METERS:"esriSquareMeters",UNIT_ARES:"esriAres",UNIT_HECTARES:"esriHectares",UNIT_SQUARE_KILOMETERS:"esriSquareKilometers"};async function S(e,t,r){const s={};null!=t.sr&&"object"==typeof t.sr?s.sr=(0,a.YX)(t.sr):s.sr=t.sr,s.strings=JSON.stringify(t.strings);const i=t.conversionType||"mgrs";s.conversionType=y.toJSON(i),s.conversionMode=t.conversionMode;const l=(0,o.Dl)(e),N={...l.query,f:"json",...s},f=(0,o.jV)(N,r);return(0,n.default)(l.path+"/fromGeoCoordinateString",f).then((e=>{let{data:t}=e;return t.coordinates}))}const g=new T.J({109006:"centimeters",9102:"decimal-degrees",109005:"decimeters",9002:"feet",109009:"inches",9036:"kilometers",9001:"meters",9035:"miles",109007:"millimeters",109012:"nautical-miles",9096:"yards"});var O=r(55544);async function R(e,t,r){const s=(t=O.default.from(t)).toJSON(),i=function(e){const{geometries:t,deviationUnit:r,maxDeviation:n}=e.toJSON(),o={maxDeviation:n};return t&&t.length&&(o.geometries=JSON.stringify({geometryType:(0,u.getJsonType)(t[0]),geometries:t}),o.sr=JSON.stringify(t[0].spatialReference)),g.write(r,o,"deviationUnit"),o}(t),a=(0,o.Dl)(e),l={...a.query,f:"json",...i},N=s.geometries[0].spatialReference,f=(0,o.jV)(l,r);return(0,n.default)(a.path+"/generalize",f).then((e=>{let{data:t}=e;return(t.geometries||[]).map((e=>(0,u.fromJSON)(e).set({spatialReference:N})))}))}async function U(e,t,r,s){const i=t[0].spatialReference,a=(0,o.Dl)(e),N={...a.query,f:"json",sr:JSON.stringify(i.toJSON()),geometries:JSON.stringify((0,l.X)(t)),geometry:JSON.stringify({geometryType:(0,u.getJsonType)(r),geometry:r.toJSON()})},f=(0,o.jV)(N,s);return(0,n.default)(a.path+"/intersect",f).then((e=>{let{data:t}=e;return(t.geometries||[]).map((e=>(0,u.fromJSON)(e).set({spatialReference:i})))}))}function E(e,t,r){const s=t.map((e=>e.toJSON())),i=t[0].spatialReference,l=(0,o.Dl)(e),N={...l.query,f:"json",sr:(0,a.YX)(i),polygons:JSON.stringify(s)},f=(0,o.jV)(N,r);return(0,n.default)(l.path+"/labelPoints",f).then((e=>{let{data:t}=e;return(t.labelPoints||[]).map((e=>(0,u.fromJSON)(e).set({spatialReference:i})))}))}const J=new T.J({preserveShape:"preserve-shape"});var A=r(17389);async function h(e,t,r){const s=function(e){const{polylines:t,lengthUnit:r,geodesic:n,calculationType:o}=e.toJSON(),s={};s.polylines=JSON.stringify(t);const i=e.polylines[0].spatialReference;return s.sr=(0,a.YX)(i),r&&(s.lengthUnit=r),n&&(s.geodesic=n),o&&(s.calculationType=J.toJSON(o)),s}(t=A.default.from(t)),i=(0,o.Dl)(e),l={...i.query,f:"json",...s},N=(0,o.jV)(l,r);return(0,n.default)(i.path+"/lengths",N).then((e=>{let{data:t}=e;return t}))}const v=new T.J({esriGeometryOffsetBevelled:"bevelled",esriGeometryOffsetMitered:"mitered",esriGeometryOffsetRounded:"rounded"}),D=new T.J({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});var M=r(21885);async function j(e,t,r){const s=function(e){const{geometries:t,bevelRatio:r,offsetDistance:n,offsetHow:o,offsetUnit:s}=e.toJSON(),i={bevelRatio:r,offsetDistance:n};return t&&t.length&&(i.geometries=JSON.stringify({geometryType:(0,u.getJsonType)(t[0]),geometries:t}),i.sr=JSON.stringify(t[0].spatialReference)),o&&(i.offsetHow=v.toJSON(o)),s&&(i.offsetUnit=D.toJSON(s)),i}(t=M.default.from(t)),i=(0,o.Dl)(e),a={...i.query,f:"json",...s},l=t.geometries?.[0].spatialReference,N=(0,o.jV)(a,r);return(0,n.default)(i.path+"/offset",N).then((e=>{let{data:t}=e;return(t.geometries||[]).map((e=>(0,u.fromJSON)(e).set({spatialReference:l})))}))}var w=r(81881);const C=new T.J({esriGeometryRelationCross:"cross",esriGeometryRelationDisjoint:"disjoint",esriGeometryRelationIn:"in",esriGeometryRelationInteriorIntersection:"interior-intersection",esriGeometryRelationIntersection:"intersection",esriGeometryRelationLineCoincidence:"line-coincidence",esriGeometryRelationLineTouch:"line-touch",esriGeometryRelationOverlap:"overlap",esriGeometryRelationPointTouch:"point-touch",esriGeometryRelationTouch:"touch",esriGeometryRelationWithin:"within",esriGeometryRelationRelation:"relation"});var L=r(12726);async function G(e,t,r){const s=function(e){const{geometries1:t,geometries2:r,relation:n,relationParameter:o}=e.toJSON(),s={};return t?.length&&(s.geometries1=JSON.stringify({geometryType:(0,u.getJsonType)(t[0]),geometries:t}),s.sr=(0,a.YX)(t[0].spatialReference)),r&&r.length>0&&(s.geometries2=JSON.stringify({geometryType:(0,u.getJsonType)(r[0]),geometries:r})),n&&(s.relation=C.toJSON(n)),o&&(s.relationParam=o),s}(t=L.default.from(t)),i=(0,o.Dl)(e),l={...i.query,f:"json",...s},N=(0,o.jV)(l,r);return(0,n.default)(i.path+"/relation",N).then((e=>{let{data:t}=e;return t.relations}))}async function q(e,t,r,s){const i=t.spatialReference,l=(0,o.Dl)(e),N={...l.query,f:"json",sr:(0,a.YX)(i),target:JSON.stringify({geometryType:(0,u.getJsonType)(t),geometry:t.toJSON()}),reshaper:JSON.stringify(r.toJSON())},f=(0,o.jV)(N,s);return(0,n.default)(l.path+"/reshape",f).then((e=>{let{data:t}=e;return(0,u.fromJSON)(t.geometry).set({spatialReference:i})}))}var x=r(66261);async function Y(e,t,r){const s={};null!=t.sr&&"object"==typeof t.sr?s.sr=(0,a.YX)(t.sr):s.sr=t.sr,s.coordinates=JSON.stringify(t.coordinates);const i=t.conversionType||"mgrs";s.conversionType=y.toJSON(i),s.conversionMode=t.conversionMode,s.numOfDigits=t.numOfDigits,s.rounding=t.rounding,s.addSpaces=t.addSpaces;const l=(0,o.Dl)(e),N={...l.query,f:"json",...s},f=(0,o.jV)(N,r);return(0,n.default)(l.path+"/toGeoCoordinateString",f).then((e=>{let{data:t}=e;return t.strings}))}var H=r(54824);const V=new T.J({0:"default-curve-extension",1:"relocate-ends",2:"keep-end-attributes",4:"no-end-attributes",8:"no-extend-at-from",16:"no-extend-at-to"});var b=r(83314);async function Z(e,t,r){const s=function(e){const{extendHow:t,polylines:r,trimExtendTo:n}=e.toJSON(),o={};return o.extendHow=V.toJSON(t),r?.length&&(o.polylines=JSON.stringify(r),o.sr=JSON.stringify(r[0].spatialReference)),n&&(o.trimExtendTo=JSON.stringify(n)),o}(t=b.default.from(t)),i=(0,o.Dl)(e),a={...i.query,f:"json",...s},l=t.sr,N=(0,o.jV)(a,r);return(0,n.default)(i.path+"/trimExtend",N).then((e=>{let{data:t}=e;return(t.geometries||[]).map((e=>{let{paths:t}=e;return new H.default({spatialReference:l,paths:t})}))}))}async function K(e,t,r){const s=t[0].spatialReference,i=(0,o.Dl)(e),a={...i.query,f:"json",sr:JSON.stringify(s.toJSON()),geometries:JSON.stringify((0,l.X)(t))},N=(0,o.jV)(a,r);return(0,n.default)(i.path+"/union",N).then((e=>{let{data:t}=e;return(0,u.fromJSON)(t.geometry).set({spatialReference:s})}))}},83314:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(93800),o=r(19455),s=r(48602),i=r(80556),a=(r(21265),r(14746),r(75269)),l=r(54824),N=r(78629);let f=class extends o.A{constructor(e){super(e),this.extendHow="default-curve-extension",this.polylines=null,this.trimExtendTo=null}};(0,n._)([(0,s.MZ)({type:String,json:{write:!0}})],f.prototype,"extendHow",void 0),(0,n._)([(0,s.MZ)({type:[l.default],json:{read:{reader:e=>e?e.map((e=>(0,N.fromJSON)(e))):null},write:{writer:(e,t)=>{t.polylines=e.map((e=>e.toJSON()))}}}})],f.prototype,"polylines",void 0),(0,n._)([(0,s.MZ)({type:l.default,json:{read:{reader:e=>e?(0,N.fromJSON)(e):null},write:{writer:(e,t)=>{t.trimExtendTo=e.toJSON()}}}})],f.prototype,"trimExtendTo",void 0),f=(0,n._)([(0,a.$)("esri.rest.support.TrimExtendParameters")],f),f.from=(0,i.dp)(f);const u=f}}]);