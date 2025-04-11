"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[17675,79538],{17675:(e,t,n)=>{n.r(t),n.d(t,{getAgeExpressions:()=>m,supportedAgeUnits:()=>o,verifyDates:()=>d});var i=n(74719),r=n(79538),a=n(2938);const s=new Set(["date","number"]),o=["years","months","days","hours","minutes","seconds"];function d(e,t,n,a){const o=[];let d=null;return[t,n].every((t=>{const n=(0,r.Lk)(e,t);return n&&o.push(n),!!n}))?o[0]===o[1]?"field"===o[0]?t===n&&(d=new i.default(a,"'startTime' and 'endTime' parameters cannot be identical")):d=new i.default(a,"Invalid combination of 'startTime' and 'endTime' parameters"):s.has(o[0])&&s.has(o[1])&&(d=new i.default(a,"Invalid combination of 'startTime' and 'endTime' parameters")):d=new i.default(a,"'startTime' and 'endTime' parameters must be one of these values: a date object, unix epoch time, name of a valid date field or <now>"),d}function l(e,t,n){let i;return i="number"===t?e:"date"===t?e.getTime():'$feature["'+e+'"]',"var "+n+" = "+i+";"}function u(e,t,n,i){const a=(0,r.Lk)(e,t),s=(0,r.Lk)(e,n),o=[l(t,a,"startTime"),l(n,s,"endTime"),`var retVal = null;\n\n    if (startTime != null && endTime != null) {\n      startTime = Date(startTime);\n      endTime = Date(endTime);\n      retVal = DateDiff(endTime, startTime, "${i}");\n    }\n\n    return retVal;`],d=[];return"field"===a&&d.push(t),"field"===s&&d.push(n),function(e){const t=e.map((e=>`$feature["${e}"];`));return t.length?t.join("\n")+"\n":""}(d)+o.join("\n")}function m(e){const{layer:t,startTime:n,endTime:i}=e,s=(0,a.Jg)(t),o=e.unit||"days",d=(0,r.aM)(s,n,i,o);return{valueExpression:u(s,n,i,o),statisticsQuery:d,histogramQuery:d}}},79538:(e,t,n)=>{n.d(t,{BV:()=>F,EG:()=>v,Lk:()=>D,Ll:()=>U,Np:()=>u,R3:()=>S,SO:()=>g,T1:()=>Z,UH:()=>l,Wy:()=>w,XR:()=>c,aM:()=>k,fs:()=>T,i0:()=>C,i3:()=>y});var i=n(66845),r=n(95011),a=n(96247),s=n(76983),o=n(73210),d=n(40731);const l=",",u={light:["streets","gray","topo","terrain","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector","topo-3d","navigation-3d","streets-3d","osm-3d","gray-3d"],dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector","navigation-dark-3d","streets-dark-3d","dark-gray-3d"]},m="percent-of-total",f="field",c={exclude:["median"]},g={years:365,months:30,days:1,hours:1/24,minutes:1/1440,seconds:1/86400,milliseconds:1/864e5},p=new Set(["integer","small-integer"]);let h=null;const y=["date","date-only","timestamp-offset"];function T(e){return(0,r.isDateField)(e)||(0,r.isDateOnlyField)(e)||(0,r.isTimestampOffsetField)(e)}async function v(e){const{field:t,field2:n,field3:i,normalizationField:r,valueExpression:s}=e;let o=[];if(s){if(!h){const{arcadeUtils:e}=await(0,a.lw)();h=e}o=h.extractFieldNames(s)}return t&&o.push(t),n&&o.push(n),i&&o.push(i),r&&o.push(r),o}function w(e){let t=e.normalizationType;return t||(e.normalizationField?t=f:null!=e.normalizationTotal&&(t=m)),t??void 0}function $(e){return String(e).padStart(2,"0")}function b(e,t,n){let i;return"date"===t||"number"===t?("number"===t&&(e=new Date(e)),i=`TIMESTAMP'${n?e.getFullYear():e.getUTCFullYear()}-${$((n?e.getMonth():e.getUTCMonth())+1)}-${$(n?e.getDate():e.getUTCDate())} ${$(n?e.getHours():e.getUTCHours())}:${$(n?e.getMinutes():e.getUTCMinutes())}:${$(n?e.getSeconds():e.getUTCSeconds())}'`):i=e,i}function k(e,t,n,i){const{hasQueryEngine:r}=e,a=`(${b(n,D(e,n),r)} - ${b(t,D(e,t),r)})`;let s=g[i],o="/";return s<1&&(s=1/s,o="*"),{sqlExpression:1===s?a:`(${a} ${o} ${s})`,sqlWhere:null}}function D(e,t){if(t instanceof Date)return"date";if("number"==typeof t)return"number";if("string"==typeof t){const n=e.getField(t);if("<now>"===t.toLowerCase())return;if((0,r.isDateField)(n))return"field"}}function F(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;for(const n in t)if(t[n].includes(e))return n}function Z(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=null;return e&&("string"==typeof e?t.includes(e)&&(i=e):i=(0,s.q3)(e)),n?i||"gray":i}function S(e,t){const n=t&&e.getField(t);return!!n&&p.has(n.type)}function U(e){return`cast(${e} as float)`}function C(e,t){const{format:n,timeZoneOptions:r,fieldType:a}=t??{};let s,l;if(r&&({timeZone:s,timeZoneName:l}=(0,d.hv)(r.layerTimeZone,r.datesInUnknownTimezone,r.viewTimeZone,(0,i.J2)(n||"short-date-short-time"),a)),"string"==typeof e&&isNaN(Date.parse("time-only"===a?`1970-01-01T${e}Z`:e)))return e;switch(a){case"date-only":{const t=(0,i.J2)(n||"short-date");return"string"==typeof e?(0,i.iS)(e,{...t}):(0,i.Yq)(e,{...t,timeZone:o.n$})}case"time-only":{const t=(0,i.J2)(n||"short-time");return"string"==typeof e?(0,i.F8)(e,t):(0,i.Yq)(e,{...t,timeZone:o.n$})}case"timestamp-offset":{if(!s&&"string"==typeof e&&new Date(e).toISOString()!==e)return e;const t=n||r?(0,i.J2)(n||"short-date-short-time"):void 0,a=t?{...t,timeZone:s,timeZoneName:l}:void 0;return"string"==typeof e?(0,i.Ey)(e,a):(0,i.Yq)(e,a)}default:{const t=n||r?(0,i.J2)(n||"short-date-short-time"):void 0;return(0,i.Yq)("string"==typeof e?new Date(e):e,t?{...t,timeZone:s,timeZoneName:l}:void 0)}}}}}]);