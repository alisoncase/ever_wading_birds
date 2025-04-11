"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[7641],{7641:(e,t,n)=>{n.r(t),n.d(t,{describeFeatureType:()=>V,findFeatureType:()=>I,getCapabilities:()=>v,getFeature:()=>_,getFeatureCount:()=>H,getFeatureTypeInfo:()=>O,getGetFeatureSpatialReference:()=>B,getWFSLayerInfo:()=>L,parseDescribeFeatureTypeResponse:()=>z,parseGetCapabilitiesResponse:()=>G,prepareWFSLayerFields:()=>U,wfsOidFieldName:()=>b});var r=n(23060),o=n(74719),a=n(64986),i=n(43103),s=n(12560),u=n(96913),l=n(93321),c=n(70576),p=n(54723),f=n(42958),d=n(72844),y=n(65073),m=n(50616),g=n(95011);const w="xlink:href",h="2.0.0",b="__esri_wfs_id__",T="wfs-layer:getWFSLayerTypeInfo-error",F="wfs-layer:empty-service",S="wfs-layer:feature-type-not-found",P="wfs-layer:geojson-not-supported",x="wfs-layer:kvp-encoding-not-supported",C="wfs-layer:malformed-json",k="wfs-layer:unknown-geometry-type",N="wfs-layer:unknown-field-type",E="wfs-layer:unsupported-spatial-reference",R="wfs-layer:unsupported-wfs-version";async function v(e,t){const n=G((await(0,r.default)(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:h,...t?.customParameters},signal:t?.signal})).data);return function(e,t){(0,i.isHTTPSProtocol)(e)&&((0,i.hasSameOrigin)(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=(0,i.toHTTPS)(t.operations.DescribeFeatureType.url)),(0,i.hasSameOrigin)(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=(0,i.toHTTPS)(t.operations.GetFeature.url)))}(e,n),n}function G(e){const t=X(e);(function(e){const t=e.firstElementChild?.getAttribute("version");if(t&&t!==h)throw new o.default(R,`Unsupported WFS version ${t}. Supported version: ${h}`)})(t),J(t);const n=t.firstElementChild,r=(0,a.PP)(function(e){return(0,d.i)(e,{FeatureTypeList:{FeatureType:e=>{const t={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",defaultSpatialReference:4326,supportedSpatialReferences:[]},n=new Set;return(0,d.p)(e,{Name:e=>{const{name:n,prefix:r}=q(e.textContent);t.typeName=`${r}:${n}`,t.name=n,t.namespacePrefix=r,t.namespaceUri=e.lookupNamespaceURI(r)},Abstract:e=>{t.description=e.textContent},Title:e=>{t.title=e.textContent},WGS84BoundingBox:e=>{t.extent=s.default.fromJSON(function(e){let t,n,r,o;for(const a of e.children)switch(a.localName){case"LowerCorner":[t,n]=a.textContent.split(" ").map((e=>Number.parseFloat(e)));break;case"UpperCorner":[r,o]=a.textContent.split(" ").map((e=>Number.parseFloat(e)))}return{xmin:t,ymin:n,xmax:r,ymax:o,spatialReference:c.KK}}(e))},DefaultCRS:e=>{const r=M(e);r&&(t.defaultSpatialReference=r,n.add(r))},OtherCRS:e=>{const t=M(e);t&&n.add(t)}}),t.title||(t.title=t.name),n.add(4326),t.supportedSpatialReferences.push(...n),t}}})}(n));return{operations:D(n),get featureTypes(){return Array.from(r())},readFeatureTypes:r}}const A=["json","application/json","geojson","application/json; subtype=geojson","application/geo+json"];function j(e){for(const t of A){const n=e.findIndex((e=>e.toLowerCase()===t));if(n>=0)return e[n]}return null}function D(e){let t=!1;const n={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}},r=[],a=[];if((0,d.p)(e,{OperationsMetadata:{Parameter:e=>{if("outputFormat"===e.getAttribute("name"))return{AllowedValues:{Value:e=>{let{textContent:t}=e;t&&r.push(t)}}}},Operation:e=>{switch(e.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:e=>{n.GetCapabilities.url=e.getAttribute(w)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:e=>{n.DescribeFeatureType.url=e.getAttribute(w)}}}};case"GetFeature":return{DCP:{HTTP:{Get:e=>{n.GetFeature.url=e.getAttribute(w)}}},Parameter:e=>{if("outputFormat"===e.getAttribute("name"))return{AllowedValues:{Value:e=>{let{textContent:t}=e;t&&a.push(t)}}}}}}},Constraint:e=>{switch(e.getAttribute("name")){case"KVPEncoding":return{DefaultValue:e=>{t="true"===e.textContent.toLowerCase()}};case"ImplementsResultPaging":return{DefaultValue:e=>{n.GetFeature.supportsPagination="true"===e.textContent.toLowerCase()}}}}}}),n.GetFeature.outputFormat=j(a)??j(r),!t)throw new o.default(x,"WFS service doesn't support key/value pair (KVP) encoding");if(null==n.GetFeature.outputFormat)throw new o.default(P,"WFS service doesn't support GeoJSON output format");return n}function M(e){const t=parseInt(e.textContent?.match(/(?<wkid>\d+$)/i)?.groups?.wkid??"",10);if(!Number.isNaN(t))return t}function I(e,t,n){return(0,a.I6)(e,(e=>n?e.name===t&&e.namespaceUri===n:e.typeName===t||e.name===t))}async function L(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{featureType:a,extent:i}=await O(e,t,n,r),{spatialReference:s}=B(e.operations.GetFeature.url,a,r.spatialReference),{fields:u,geometryType:c,swapXY:p,objectIdField:f,geometryField:d}=await async function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{typeName:a}=t,[i,s]=await Promise.allSettled([V(e.operations.DescribeFeatureType.url,a,r),$(e,a,n,r)]),u=e=>new o.default(T,`An error occurred while getting info about the feature type '${a}'`,{error:e});if("rejected"===i.status)throw u(i.reason);if("rejected"===s.status)throw u(s.reason);const{fields:l,errors:c}=i.value??{},p=i.value?.geometryType||s.value?.geometryType,f=s.value?.swapXY??!1;if(null==p)throw new o.default(k,`The geometry type could not be determined for type '${a}`,{typeName:a,geometryType:p,fields:l,errors:c});return{...U(l??[]),geometryType:p,swapXY:f}}(e,a,s,r);return{url:e.operations.GetCapabilities.url,name:a.name,namespaceUri:a.namespaceUri,fields:u,geometryField:d,geometryType:c,objectIdField:f,spatialReference:r.spatialReference??new l.default({wkid:a.defaultSpatialReference}),extent:i,swapXY:p,wfsCapabilities:e,customParameters:r.customParameters}}async function O(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const a=e.readFeatureTypes(),i=t?I(a,t,n):a.next().value,{spatialReference:s=new l.default({wkid:i?.defaultSpatialReference})}=r;if(null==i)throw t?new o.default(S,`The type '${t}' could not be found in the service`):new o.default(F,"The service is empty");let p=i.extent;if(p&&!(0,c.aI)(p.spatialReference,s))try{await(0,u.initializeProjection)(p.spatialReference,s,void 0,r),p=(0,u.project)(p,s)}catch{throw new o.default(E,"Projection not supported")}return{extent:p,spatialReference:s,featureType:i}}function U(e){const t=e.find((e=>"geometry"===e.type));let n=e.find((e=>"oid"===e.type));return e=e.filter((e=>"geometry"!==e.type)),n||(n=new m.default({name:b,type:"oid",alias:b}),e.unshift(n)),{geometryField:t?.name??null,objectIdField:n.name,fields:e}}async function $(e,t,n){let o,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=!1;const[s,u]=await Promise.all([_(e.operations.GetFeature.url,t,n,e.operations.GetFeature.outputFormat,{...a,count:1}),(0,r.default)(e.operations.GetFeature.url,{responseType:"text",query:Y(t,n,void 0,{...a,count:1}),signal:a?.signal})]),l="FeatureCollection"===s.type&&s.features[0]?.geometry;if(l){let e;switch(o=p.gy.fromJSON((0,f.xD)(l.type)),l.type){case"Point":e=l.coordinates;break;case"LineString":case"MultiPoint":e=l.coordinates[0];break;case"MultiLineString":case"Polygon":e=l.coordinates[0][0];break;case"MultiPolygon":e=l.coordinates[0][0][0]}const t=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(u.data);if(t){const n=e[0].toFixed(3),r=e[1].toFixed(3),o=parseFloat(t[1]).toFixed(3);n===parseFloat(t[2]).toFixed(3)&&r===o&&(i=!0)}}return{geometryType:o,swapXY:i}}async function V(e,t,n){return z(t,(await(0,r.default)(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:h,TYPENAME:t,TYPENAMES:t,...n?.customParameters},signal:n?.signal})).data)}function z(e,t){const{name:n}=q(e),r=X(t);J(r);const i=(0,a.I6)((0,d.i)(r.firstElementChild,{element:e=>e}),(e=>e.getAttribute("name")===n));if(null!=i){const e=i.getAttribute("type"),t=e?(0,a.I6)((0,d.i)(r.firstElementChild,{complexType:e=>e}),(t=>t.getAttribute("name")===q(e).name)):(0,a.I6)((0,d.i)(i,{complexType:e=>e}),(()=>!0));if(t)return function(e){const t=[],n=[];let r;const a=(0,d.i)(e,{complexContent:{extension:{sequence:{element:e=>e}}}});for(const i of a){const a=i.getAttribute("name");if(!a)continue;let s,u;if(i.hasAttribute("type")?s=q(i.getAttribute("type")).name:(0,d.p)(i,{simpleType:{restriction:e=>(s=q(e.getAttribute("base")).name,{maxLength:e=>{u=+e.getAttribute("value")}})}}),!s)continue;const l="true"===i.getAttribute("nillable");let c=!1;switch(s.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":n.push(new m.default({name:a,alias:a,type:"integer",nullable:l,length:(0,g.getFieldDefaultLength)("integer")}));break;case"float":case"double":case"decimal":n.push(new m.default({name:a,alias:a,type:"double",nullable:l,length:(0,g.getFieldDefaultLength)("double")}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":n.push(new m.default({name:a,alias:a,type:"string",nullable:l,length:u??(0,g.getFieldDefaultLength)("string")}));break;case"datetime":case"date":n.push(new m.default({name:a,alias:a,type:"date",nullable:l,length:u??(0,g.getFieldDefaultLength)("date")}));break;case"pointpropertytype":r="point",c=!0;break;case"multipointpropertytype":r="multipoint",c=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":r="polyline",c=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":r="polygon",c=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":c=!0,t.push(new o.default(k,`geometry type '${s}' is not supported`,{type:(new XMLSerializer).serializeToString(e)}));break;default:t.push(new o.default(N,`Unknown field type '${s}'`,{type:(new XMLSerializer).serializeToString(e)}))}c&&n.push(new m.default({name:a,alias:a,type:"geometry",nullable:l}))}for(const o of n)if("integer"===o.type&&!o.nullable&&W.has(o.name.toLowerCase())){o.type="oid";break}return{geometryType:r,fields:n,errors:t}}(t)}throw new o.default(S,`Type '${e}' not found in document`,{document:(new XMLSerializer).serializeToString(r)})}const W=new Set(["objectid","fid"]);async function _(e,t,n,a,i){let{data:s}=await(0,r.default)(e,{responseType:"text",query:Y(t,n,a,i),signal:i?.signal});s=s.replaceAll(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{return JSON.parse(s)}catch(u){throw new o.default(C,"Error while parsing the\xa0response",{response:s,error:u})}}function Y(e,t,n,r){const o="number"==typeof t?t:t.wkid;return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:h,TYPENAMES:e,OUTPUTFORMAT:n,SRSNAME:"EPSG:"+o,STARTINDEX:r?.startIndex,COUNT:r?.count,...r?.customParameters}}async function H(e,t,n){const o=await(0,r.default)(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:h,TYPENAMES:t,RESULTTYPE:"hits",...n?.customParameters},signal:n?.signal}),a=/numberMatched=["'](?<numberMatched>\d+)["']/gi.exec(o.data);if(a?.groups)return+a.groups.numberMatched}function X(e){return(new DOMParser).parseFromString(e.trim(),"text/xml")}function q(e){const[t,n]=e.split(":");return{prefix:n?t:"",name:n??t}}function J(e){let t="",n="";if((0,d.p)(e.firstElementChild,{Exception:e=>(t=e.getAttribute("exceptionCode"),{ExceptionText:e=>{n=e.textContent}})}),t)throw new o.default(`wfs-layer:${t}`,n)}function B(e,t,n){const r={wkid:t.defaultSpatialReference},o=null!=n?.wkid?{wkid:n.wkid}:r;return{spatialReference:o,getFeatureSpatialReference:(0,y.Fi)(e)||o.wkid&&t.supportedSpatialReferences.includes(o.wkid)?{wkid:o.wkid}:{wkid:t.defaultSpatialReference}}}},36357:(e,t,n)=>{function r(e){return null!=s(e)||null!=i(e)}function o(e){return u.test(e)}function a(e){return s(e)??i(e)}function i(e){const t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;let n=!0;if(c&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,r=0;for(;!t&&r<=e.length;)t=!l.test(e[r]),r++;n=!t}}return n}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function s(e){const t=u.exec(e);if(!t?.groups)return null;const n=t.groups,r=+n.year,o=+n.month-1,a=+n.day,i=+(n.hours??"0"),s=+(n.minutes??"0"),l=+(n.seconds??"0");if(i>23)return null;if(s>59)return null;if(l>59)return null;const c=n.ms??"0",p=c?+c.padEnd(3,"0").slice(0,3):0;let f;if(n.isUTC||!n.offsetSign)f=Date.UTC(r,o,a,i,s,l,p);else{const e=+n.offsetHours,t=+n.offsetMinutes;f=6e4*("+"===n.offsetSign?-1:1)*(60*e+t)+Date.UTC(r,o,a,i,s,l,p)}return Number.isNaN(f)?null:f}n.d(t,{Br:()=>o,Cq:()=>r,_U:()=>a});const u=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;const l=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,c=!Number.isNaN(new Date("technology 10").getTime())},42958:(e,t,n)=>{n.d(t,{BM:()=>x,bd:()=>C,sO:()=>P,xD:()=>c});var r=n(36357),o=n(74719),a=n(70576),i=n(67011),s=n(39817),u=n(95011);const l={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function c(e){return l[e]}function*p(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*f(e){if(e)switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function d(e){for(const t of e)if(t.length>2)return!0;return!1}function y(e){let t=0;for(let n=0;n<e.length;n++){const r=e[n],o=e[(n+1)%e.length];t+=r[0]*o[1]-o[0]*r[1]}return t<=0}function m(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function g(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return b(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const r of t.coordinates)b(e,r,n);return e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const r of t.coordinates){w(e,r[0],n);for(let t=1;t<r.length;t++)h(e,r[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return F(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const r=t.coordinates;w(e,r[0],n);for(let o=1;o<r.length;o++)h(e,r[o],n);return e}(e,t,n)}}function w(e,t,n){const r=m(t);!function(e){return!y(e)}(r)?b(e,r,n):T(e,r,n)}function h(e,t,n){const r=m(t);!function(e){return y(e)}(r)?b(e,r,n):T(e,r,n)}function b(e,t,n){for(const r of t)F(e,r,n);e.lengths.push(t.length)}function T(e,t,n){for(let r=t.length-1;r>=0;r--)F(e,t[r],n);e.lengths.push(t.length)}function F(e,t,n){const[r,o,a]=t;e.coords.push(r,o),n.hasZ&&e.coords.push(a||0)}function S(e){switch(typeof e){case"string":return(0,r.Br)(e)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function P(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4326;if(!e)throw new o.default("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new o.default("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:n}=e;if(!n)return;const r="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,i=(0,a.oT)({wkid:t})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(`.*(${t})$`,"i");if(!r||!i.test(r))throw new o.default("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function x(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=[],r=new Set,o=new Set;let a,i=!1,s=null,l=!1,{geometryType:y=null}=t;for(const g of p(e)){const{geometry:e,properties:t,id:p}=g;if((!e||(y||(y=c(e.type)),c(e.type)===y))&&(i||(i=d(f(e))),l||(l=null!=p,l&&(a=typeof p,t&&(s=Object.keys(t).filter((e=>t[e]===p))))),t&&s&&l&&null!=p&&(s.length>1?s=s.filter((e=>t[e]===p)):1===s.length&&(s=t[s[0]]===p?s:[])),t))for(const a in t){if(r.has(a))continue;const e=S(t[a]);if("unknown"===e){o.add(a);continue}o.delete(a),r.add(a);const i=(0,u.normalizeFieldName)(a);i&&n.push({name:i,alias:a,type:e})}}const m=(0,u.normalizeFieldName)(1===s?.length&&s[0]||null)??void 0;if(m)for(const c of n)if(c.name===m&&(0,u.isNumericField)(c)){c.type="esriFieldTypeOID";break}return{fields:n,geometryType:y,hasZ:i,objectIdFieldName:m,objectIdFieldType:a,unknownFields:Array.from(o)}}function C(e,t){return Array.from(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function*(){const{geometryType:n,objectIdField:r}=t;for(const o of e){const{geometry:e,properties:a,id:u}=o;if(e&&c(e.type)!==n)continue;const l=a||{};let p;r&&(p=l[r],null==u||p||(l[r]=p=u));const f=new i.Om(e?g(new s.A,e,t):null,l,null,p);yield f}}()}(p(e),t))}},72844:(e,t,n)=>{function r(e,t){if(e&&t)for(const n of e.children)if(n.localName in t){const e=t[n.localName];if("function"==typeof e){const t=e(n);t&&r(n,t)}else r(n,e)}}function*o(e,t){for(const n of e.children)if(n.localName in t){const e=t[n.localName];"function"==typeof e?yield e(n):yield*o(n,e)}}n.d(t,{i:()=>o,p:()=>r})}}]);