"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[44827,51623,79538,79906,82046],{6135:(e,t,o)=>{o.d(t,{$4:()=>M,O0:()=>C,O1:()=>k,Sw:()=>I,eH:()=>b,rc:()=>g});var n=o(21772),r=o(88102),i=o(23060),s=o(76612),l=o(16804),a=o(44827);const c="picture-fill",f="simple-fill",u="simple-line",m="simple-marker",y="text",d="cim",h=new Map([["dash",[4,3]],["dashdot",[4,3,1,3]],["dot",[1,3]],["longdash",[8,3]],["longdashdot",[8,3,1,3]],["longdashdotdot",[8,3,1,3,1,3]],["shortdash",[4,1]],["shortdashdot",[4,1,1,1]],["shortdashdotdot",[4,1,1,1,1,1]],["shortdot",[1,1]],["solid",[]]]),p=new s.q(1e3);function b(e){const t=e.style;let o=null;if(e)switch(e.type){case m:"cross"!==t&&"x"!==t&&(o=e.color);break;case f:t&&"solid"!==t?"none"!==t&&(o={type:"pattern",x:0,y:0,src:(0,n.s)(`esri/symbols/patterns/${t}.png`),width:5,height:5}):o=e.color;break;case c:o={type:"pattern",src:e.url,width:(0,l.Lz)(e.width)*e.xscale,height:(0,l.Lz)(e.height)*e.yscale,x:(0,l.Lz)(e.xoffset),y:(0,l.Lz)(e.yoffset)};break;case y:o=e.color;break;case d:o=(0,a.getCIMSymbolColor)(e)}return o}function g(e,t){const o=e+"-"+t;return void 0!==p.get(o)?Promise.resolve(p.get(o)):(0,i.default)(e,{responseType:"image"}).then((e=>{const n=e.data,r=n.naturalWidth,i=n.naturalHeight,s=document.createElement("canvas");s.width=r,s.height=i;const l=s.getContext("2d");l.fillStyle=t,l.fillRect(0,0,r,i),l.globalCompositeOperation="destination-in",l.drawImage(n,0,0);const a=s.toDataURL();return p.put(o,a),a}))}function M(e){if(!e)return null;let t=null;switch(e.type){case f:case c:case m:t=M(e.outline);break;case u:{const o=(0,l.Lz)(e.width);null!=e.style&&"none"!==e.style&&0!==o&&(t={color:e.color,style:k(e.style),width:o,cap:e.cap,join:"miter"===e.join?(0,l.Lz)(e.miterLimit):e.join},t.dashArray=C(t).join(",")||"none");break}default:t=null}return t}function C(e){if(!e?.style)return[];const{dashArray:t,style:o,width:n}=e;if("string"==typeof t&&"none"!==t)return t.split(",").map((e=>Number(e)));const r=n??0,i=h.has(o)?h.get(o).map((e=>e*r)):[];if("butt"!==e.cap)for(const[s,l]of i.entries())i[s]=s%2==1?l+r:Math.max(l-r,1);return i}const k=(()=>{const e={};return t=>{if(e[t])return e[t];const o=t.replaceAll("-","");return e[t]=o,o}})(),I=new r.default([128,128,128])},44827:(e,t,o)=>{o.r(t),o.d(t,{applyCIMSymbolColor:()=>y,applyCIMSymbolRotation:()=>p,getCIMSymbolColor:()=>f,getCIMSymbolRotation:()=>h,getCIMSymbolSize:()=>i,getCIMSymbolType:()=>b,scaleCIMMarker:()=>a,scaleCIMSymbol:()=>l,scaleCIMSymbolTo:()=>s});var n=o(88102),r=o(61154);function i(e){const t=(0,r.lW)(e);if("CIMTextSymbol"===t?.type)return t.height??0;let o=0;if(t?.symbolLayers)for(const n of t.symbolLayers)(0,r.MM)(n)&&null!=n.size&&n.size>o?o=n.size:(0,r.mA)(n)&&null!=n.width&&n.width>o?o=n.width:(0,r.jn)(n);return o}function s(e,t,o){if(!e)return;const n=(0,r.lW)(e),s=i(e);0!==s?l(n,t/s,!1,o):function(e,t){if(e)if("CIMTextSymbol"!==e.type){if(e.symbolLayers)for(const o of e.symbolLayers)switch(o.type){case"CIMPictureMarker":case"CIMVectorMarker":o.size=t;break;case"CIMPictureStroke":case"CIMSolidStroke":case"CIMGradientStroke":o.width=t}}else e.height=t}(n,t)}function l(e,t,o,n){if(e)if("CIMTextSymbol"!==e.type){if(o&&e.effects)for(const o of e.effects)c(o,t);if(e.symbolLayers)for(const o of e.symbolLayers){switch(o.type){case"CIMPictureMarker":case"CIMVectorMarker":a(o,t,n);break;case"CIMPictureStroke":case"CIMSolidStroke":case"CIMGradientStroke":!n?.preserveOutlineWidth&&o.width&&(o.width*=t);break;case"CIMPictureFill":o.height&&(o.height*=t),o.offsetX&&(o.offsetX*=t),o.offsetY&&(o.offsetY*=t);break;case"CIMHatchFill":l(o.lineSymbol,t,!0,{...n,preserveOutlineWidth:!1}),o.offsetX&&(o.offsetX*=t),o.offsetY&&(o.offsetY*=t),o.separation&&(o.separation*=t)}if(o.effects)for(const e of o.effects)c(e,t)}}else null!=e.height&&(e.height*=t)}function a(e,t,o){if(e&&(e.markerPlacement&&function(e,t){switch((0,r.zr)(e)&&e.offset&&(e.offset*=t),e.type){case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAlongLineSameSize":if(e.customEndingOffset&&(e.customEndingOffset*=t),e.offsetAlongLine&&(e.offsetAlongLine*=t),e.placementTemplate&&e.placementTemplate.length){const o=e.placementTemplate.map((e=>e*t));e.placementTemplate=o}break;case"CIMMarkerPlacementAlongLineVariableSize":if(e.maxRandomOffset&&(e.maxRandomOffset*=t),e.placementTemplate&&e.placementTemplate.length){const o=e.placementTemplate.map((e=>e*t));e.placementTemplate=o}break;case"CIMMarkerPlacementOnLine":e.startPointOffset&&(e.startPointOffset*=t);break;case"CIMMarkerPlacementAtExtremities":e.offsetAlongLine&&(e.offsetAlongLine*=t);break;case"CIMMarkerPlacementAtMeasuredUnits":case"CIMMarkerPlacementOnVertices":break;case"CIMMarkerPlacementAtRatioPositions":e.beginPosition&&(e.beginPosition*=t),e.endPosition&&(e.endPosition*=t);break;case"CIMMarkerPlacementPolygonCenter":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t);break;case"CIMMarkerPlacementInsidePolygon":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t),e.stepX&&(e.stepX*=t),e.stepY&&(e.stepY*=t)}}(e.markerPlacement,t),e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t),e.anchorPoint&&"Absolute"===e.anchorPointUnits&&(e.anchorPoint={x:e.anchorPoint.x*t,y:e.anchorPoint.y*t}),e.size=null!=e.size?e.size*t:0,"CIMVectorMarker"===e.type&&e.markerGraphics))for(const n of e.markerGraphics)e.scaleSymbolsProportionally||l(n.symbol,t,!0,o)}function c(e,t){switch(e.type){case"CIMGeometricEffectArrow":case"CIMGeometricEffectDonut":e.width&&(e.width*=t);break;case"CIMGeometricEffectBuffer":e.size&&(e.size*=t);break;case"CIMGeometricEffectCut":e.beginCut&&(e.beginCut*=t),e.endCut&&(e.endCut*=t),e.middleCut&&(e.middleCut*=t);break;case"CIMGeometricEffectDashes":if(e.customEndingOffset&&(e.customEndingOffset*=t),e.offsetAlongLine&&(e.offsetAlongLine*=t),e.dashTemplate&&e.dashTemplate.length){const o=e.dashTemplate.map((e=>e*t));e.dashTemplate=o}break;case"CIMGeometricEffectExtension":case"CIMGeometricEffectJog":case"CIMGeometricEffectRadial":e.length&&(e.length*=t);break;case"CIMGeometricEffectMove":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t);break;case"CIMGeometricEffectOffset":case"CIMGeometricEffectOffsetTangent":e.offset&&(e.offset*=t);break;case"CIMGeometricEffectRegularPolygon":e.radius&&(e.radius*=t);break;case"CIMGeometricEffectTaperedPolygon":e.fromWidth&&(e.fromWidth*=t),e.length&&(e.length*=t),e.toWidth&&(e.toWidth*=t);break;case"CIMGeometricEffectWave":e.amplitude&&(e.amplitude*=t),e.period&&(e.period*=t)}}function f(e){const t=[];return u((0,r.lW)(e),t),t.length?new n.default((0,r.e6)(t[0])):null}function u(e,t){if(!e)return;let o;o="CIMTextSymbol"===e.type?e.symbol:e;const n="CIMPolygonSymbol"===e.type;if(o?.symbolLayers)for(const i of o.symbolLayers)if(!(i.colorLocked||n&&((0,r.mA)(i)||(0,r.MM)(i)&&i.markerPlacement&&(0,r.zr)(i.markerPlacement))))switch(i.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":i.tintColor&&m(t,i.tintColor);break;case"CIMVectorMarker":i.markerGraphics?.forEach((e=>{u(e.symbol,t)}));break;case"CIMSolidStroke":case"CIMSolidFill":m(t,i.color);break;case"CIMHatchFill":u(i.lineSymbol,t)}}function m(e,t){for(const o of e)if(o.join(".")===t.join("."))return;e.push(t)}function y(e,t,o){t instanceof n.default||(t=new n.default(t));const i=(0,r.lW)(e);i&&d(i,t,o)}function d(e,t,o){if(!e)return;let n;n="CIMTextSymbol"===e.type?e.symbol:e;const i="CIMPolygonSymbol"===n?.type;if(n?.symbolLayers)for(const s of n.symbolLayers){if(s.colorLocked)continue;if(i)if(o){const{layersToColor:e}=o;if(((0,r.mA)(s)||(0,r.MM)(s)&&s.markerPlacement&&(0,r.zr)(s.markerPlacement))&&"fill"===e||(0,r.jn)(s)&&"outline"===e)continue}else if((0,r.mA)(s)||(0,r.MM)(s)&&s.markerPlacement&&(0,r.zr)(s.markerPlacement))continue;const e=t.toArray();switch(s.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":s.tintColor=e;break;case"CIMVectorMarker":s.markerGraphics?.forEach((e=>{d(e.symbol,t,o)}));break;case"CIMSolidStroke":case"CIMSolidFill":s.color=e;break;case"CIMHatchFill":d(s.lineSymbol,t,o)}}}function h(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const o=(0,r.lW)(e);if("CIMTextSymbol"===o?.type||"CIMPointSymbol"===o?.type){const e=o.angle;return null!=e&&t?360-e:e??0}return 0}function p(e,t){let o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const n=(0,r.lW)(e);if(o&&(t=360-t),"CIMTextSymbol"!==n?.type){if("CIMPointSymbol"===n?.type&&n.symbolLayers){const e=t-(n.angle||0);for(const t of n.symbolLayers)if((0,r.MM)(t)){let o=t.rotation||0;t.rotateClockwise?o-=e:o+=e,t.rotation=o}n.angle=t}}else n.angle=t}function b(e){const t=(0,r.lW)(e);if(!t)return null;switch(t.type){case"CIMPointSymbol":return"CIMPointSymbol";case"CIMLineSymbol":return"CIMLineSymbol";case"CIMPolygonSymbol":return"CIMPolygonSymbol";case"CIMTextSymbol":return"CIMTextSymbol";case"CIMMeshSymbol":return"CIMMeshSymbol";default:return null}}},62412:(e,t,o)=>{o.r(t),o.d(t,{default:()=>l});var n=o(93800),r=(o(50925),o(21265),o(14746),o(74719),o(75269)),i=o(65140);let s=class extends i.default{constructor(e){super(e)}};s=(0,n._)([(0,r.$)("esri.widgets.Popup.PopupViewModel")],s);const l=s},79538:(e,t,o)=>{o.d(t,{BV:()=>P,EG:()=>M,Lk:()=>S,Ll:()=>v,Np:()=>f,R3:()=>T,SO:()=>d,T1:()=>L,UH:()=>c,Wy:()=>C,XR:()=>y,aM:()=>w,fs:()=>g,i0:()=>z,i3:()=>b});var n=o(66845),r=o(95011),i=o(96247),s=o(76983),l=o(73210),a=o(40731);const c=",",f={light:["streets","gray","topo","terrain","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector","topo-3d","navigation-3d","streets-3d","osm-3d","gray-3d"],dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector","navigation-dark-3d","streets-dark-3d","dark-gray-3d"]},u="percent-of-total",m="field",y={exclude:["median"]},d={years:365,months:30,days:1,hours:1/24,minutes:1/1440,seconds:1/86400,milliseconds:1/864e5},h=new Set(["integer","small-integer"]);let p=null;const b=["date","date-only","timestamp-offset"];function g(e){return(0,r.isDateField)(e)||(0,r.isDateOnlyField)(e)||(0,r.isTimestampOffsetField)(e)}async function M(e){const{field:t,field2:o,field3:n,normalizationField:r,valueExpression:s}=e;let l=[];if(s){if(!p){const{arcadeUtils:e}=await(0,i.lw)();p=e}l=p.extractFieldNames(s)}return t&&l.push(t),o&&l.push(o),n&&l.push(n),r&&l.push(r),l}function C(e){let t=e.normalizationType;return t||(e.normalizationField?t=m:null!=e.normalizationTotal&&(t=u)),t??void 0}function k(e){return String(e).padStart(2,"0")}function I(e,t,o){let n;return"date"===t||"number"===t?("number"===t&&(e=new Date(e)),n=`TIMESTAMP'${o?e.getFullYear():e.getUTCFullYear()}-${k((o?e.getMonth():e.getUTCMonth())+1)}-${k(o?e.getDate():e.getUTCDate())} ${k(o?e.getHours():e.getUTCHours())}:${k(o?e.getMinutes():e.getUTCMinutes())}:${k(o?e.getSeconds():e.getUTCSeconds())}'`):n=e,n}function w(e,t,o,n){const{hasQueryEngine:r}=e,i=`(${I(o,S(e,o),r)} - ${I(t,S(e,t),r)})`;let s=d[n],l="/";return s<1&&(s=1/s,l="*"),{sqlExpression:1===s?i:`(${i} ${l} ${s})`,sqlWhere:null}}function S(e,t){if(t instanceof Date)return"date";if("number"==typeof t)return"number";if("string"==typeof t){const o=e.getField(t);if("<now>"===t.toLowerCase())return;if((0,r.isDateField)(o))return"field"}}function P(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f;for(const o in t)if(t[o].includes(e))return o}function L(e,t){let o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=null;return e&&("string"==typeof e?t.includes(e)&&(n=e):n=(0,s.q3)(e)),o?n||"gray":n}function T(e,t){const o=t&&e.getField(t);return!!o&&h.has(o.type)}function v(e){return`cast(${e} as float)`}function z(e,t){const{format:o,timeZoneOptions:r,fieldType:i}=t??{};let s,c;if(r&&({timeZone:s,timeZoneName:c}=(0,a.hv)(r.layerTimeZone,r.datesInUnknownTimezone,r.viewTimeZone,(0,n.J2)(o||"short-date-short-time"),i)),"string"==typeof e&&isNaN(Date.parse("time-only"===i?`1970-01-01T${e}Z`:e)))return e;switch(i){case"date-only":{const t=(0,n.J2)(o||"short-date");return"string"==typeof e?(0,n.iS)(e,{...t}):(0,n.Yq)(e,{...t,timeZone:l.n$})}case"time-only":{const t=(0,n.J2)(o||"short-time");return"string"==typeof e?(0,n.F8)(e,t):(0,n.Yq)(e,{...t,timeZone:l.n$})}case"timestamp-offset":{if(!s&&"string"==typeof e&&new Date(e).toISOString()!==e)return e;const t=o||r?(0,n.J2)(o||"short-date-short-time"):void 0,i=t?{...t,timeZone:s,timeZoneName:c}:void 0;return"string"==typeof e?(0,n.Ey)(e,i):(0,n.Yq)(e,i)}default:{const t=o||r?(0,n.J2)(o||"short-date-short-time"):void 0;return(0,n.Yq)("string"==typeof e?new Date(e):e,t?{...t,timeZone:s,timeZoneName:c}:void 0)}}}},79906:(e,t,o)=>{o.d(t,{$d:()=>d,GG:()=>S,N7:()=>h,Sx:()=>p,UQ:()=>w,cJ:()=>b,di:()=>P,dt:()=>g,f3:()=>L,k_:()=>y});var n=o(88102),r=o(58828),i=(o(21265),o(16804)),s=o(28473),l=o(22250),a=o(44827),c=o(6135),f=o(76945),u=o(38602);const m=new n.default("white");function y(e){if(!e)return 0;if((0,u.wk)(e)){const t=function(e){const t=e.symbolLayers?.at(-1);if(t&&"outline"in t)return t?.outline?.size}(e);return null!=t?t:0}return(0,i.PN)((0,c.$4)(e)?.width)}function d(e){if(null==e||!("symbolLayers"in e)||null==e.symbolLayers)return!1;switch(e.type){case"point-3d":return e.symbolLayers.some((e=>"object"===e.type));case"line-3d":return e.symbolLayers.some((e=>"path"===e.type));case"polygon-3d":return e.symbolLayers.some((e=>"object"===e.type||"extrude"===e.type));default:return!1}}function h(e){return e.resource?.href??""}function p(e,t){if(!e)return null;let o=null;return(0,u.wk)(e)?o=function(e){const t=e.symbolLayers;if(!t)return null;let o=null;return t.forEach((e=>{"object"===e.type&&e.resource?.href||(o="water"===e.type?e.color:e.material?e.material.color:null)})),o?new n.default(o):null}(e):(0,u.$y)(e)&&(o="cim"===e.type?(0,a.getCIMSymbolColor)(e):e.color?new n.default(e.color):null),o?b(o,t):null}function b(e,t){if(null==t||null==e)return e;const o=e.toRgba();return o[3]=o[3]*t,new n.default(o)}function g(e,t,o){e&&(t||null!=o)&&(t&&(t=new n.default(t)),(0,u.wk)(e)?function(e,t,o){const n=e.symbolLayers;if(!n)return;const r=e=>b(t=t??e??(null!=o?m:null),o);n.forEach((e=>{if("object"!==e.type||!e.resource?.href||t)if("water"===e.type)e.color=r(e.color);else{const t=null!=e.material?e.material.color:null,n=r(t);null==e.material?e.material=new f.N({color:n}):e.material.color=n,null!=o&&"outline"in e&&null!=e.outline?.color&&(e.outline.color=b(e.outline.color,o))}}))}(e,t,o):(0,u.$y)(e)&&function(e,t,o){(t=t??e.color)&&(e.color=b(t,o)),null!=o&&"outline"in e&&e.outline?.color&&(e.outline.color=b(e.outline.color,o))}(e,t,o))}async function M(e,t){const n=e.symbolLayers;n&&await(0,r.jJ)(n,(async e=>async function(e,t){switch(e.type){case"extrude":!function(e,t){e.size="number"==typeof t[2]?t[2]:0}(e,t);break;case"icon":case"line":case"text":!function(e,t){const o=C(t);null!=o&&(e.size=o)}(e,t);break;case"path":!function(e,t){const o=k(t,s.Un,[e.width,void 0,e.height]);e.width=I(t[0],e.width,1,o),e.height=I(t[2],e.height,1,o)}(e,t);break;case"object":await async function(e,t){const{resourceSize:n,symbolSize:r}=await async function(e){const{computeObjectLayerResourceSize:t}=await o.e(28897).then(o.bind(o,28897)),n=await t(e,10),{width:r,height:i,depth:s}=e,l=[r,s,i];let a=1;for(let o=0;o<3;o++){const e=l[o];if(null!=e){a=e/n[o];break}}for(let o=0;o<3;o++)null==l[o]&&(l[o]=n[o]*a);return{resourceSize:n,symbolSize:l}}(e),i=k(t,n,r);e.width=I(t[0],r[0],n[0],i),e.depth=I(t[1],r[1],n[1],i),e.height=I(t[2],r[2],n[2],i)}(e,t)}}(e,t)))}function C(e){for(const t of e)if("number"==typeof t)return t;return null}function k(e,t,o){for(let n=0;n<3;n++){const r=e[n];switch(r){case"symbol-value":{const e=o[n];return null!=e?e/t[n]:1}case"proportional":break;default:if(r&&t[n])return r/t[n]}}return 1}function I(e,t,o,n){switch(e){case"proportional":return o*n;case"symbol-value":return null!=t?t:o;default:return e}}async function w(e,t){if(e&&t)return(0,u.wk)(e)?M(e,t):void((0,u.$y)(e)&&function(e,t){const o=C(t);if(null!=o)switch(e.type){case"simple-marker":e.size=o;break;case"picture-marker":{const t=e.width/e.height;t>1?(e.width=o,e.height=o*t):(e.width=o*t,e.height=o);break}case"simple-line":e.width=o;break;case"text":e.font.size=o}}(e,t))}function S(e,t,o){if(e&&null!=t)if((0,u.wk)(e)){const n=e.symbolLayers;n&&n.forEach((e=>{if("object"===e.type)switch(o){case"tilt":e.tilt=(e.tilt??0)+t;break;case"roll":e.roll=(e.roll??0)+t;break;default:e.heading=(e.heading??0)+t}"icon"===e.type&&(e.angle+=t)}))}else(0,u.$y)(e)&&("simple-marker"!==e.type&&"picture-marker"!==e.type&&"text"!==e.type||(e.angle+=t))}function P(e){if(!e)return null;const t=e.effects.filter((e=>"bloom"!==e.type)).map((e=>e.toJSON()));return(0,l.zu)(t)}function L(e){return null!=e&&"polygon-3d"===e.type&&e.symbolLayers.some((e=>"extrude"===e.type))}}}]);