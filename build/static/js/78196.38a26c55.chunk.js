"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[78196,79538],{22420:(e,t,n)=>{n.d(t,{GP:()=>f,LI:()=>A,lc:()=>l,u5:()=>u});n(88677);var i=n(23224);const o=/^-?(\d+)(\.(\d+))?$/i;function r(e,t){return e-t}function a(e,t){let n,i;return n=Number(e.toFixed(t)),n<e?i=n+1/10**t:(i=n,n-=1/10**t),n=Number(n.toFixed(t)),i=Number(i.toFixed(t)),[n,i]}function s(e,t,n,i,o){const r=u(e,t,n,i),a=null==r.previous||r.previous<=o,s=null==r.next||r.next<=o;return a&&s||r.previous+r.next<=2*o}function l(e){const t=String(e),n=t.match(o);if(n?.[1])return{integer:n[1].split("").length,fractional:n[3]?n[3].split("").length:0};if(t.toLowerCase().includes("e")){const e=t.split("e"),n=e[0],i=e[1];if(n&&i){const e=Number(n);let t=Number(i);const o=t>0;o||(t=Math.abs(t));const r=l(e);return o?(r.integer+=t,t>r.fractional?r.fractional=0:r.fractional-=t):(r.fractional+=t,t>r.integer?r.integer=1:r.integer-=t),r}}return{integer:0,fractional:0}}function u(e,t,n,i){const o={previous:null,next:null};if(null!=n){const i=e-n,r=t-n-i;o.previous=Math.floor(Math.abs(100*r/i))}if(null!=i){const n=i-e,r=i-t-n;o.next=Math.floor(Math.abs(100*r/n))}return o}function A(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=e.slice(),{tolerance:i=2,strictBounds:o=!1,indexes:u=n.map(((e,t)=>t))}=t;u.sort(r);for(let r=0;r<u.length;r++){const e=u[r],t=n[e],A=0===e?null:n[e-1],c=e===n.length-1?null:n[e+1],f=l(t).fractional;if(f){let l,u=0,d=!1;for(;u<=f&&!d;){const e=a(t,u);l=o&&0===r?e[1]:e[0],d=s(t,l,A,c,i),u++}d&&(n[e]=l)}}return n}const c={maximumFractionDigits:20};function f(e){return(0,i.ZV)(e,c)}},78196:(e,t,n)=>{n.d(t,{Dd:()=>A,E2:()=>c,Zo:()=>d,_l:()=>m,getDateFormatOptions:()=>g,kC:()=>u,l5:()=>l,uM:()=>f});var i=n(87431),o=n(95011),r=n(22420),a=n(79538),s=n(99071);const l="<",u=">";function A(e,t,n,i){let o="";return 0===t?o=`${l} `:t===n&&(o=`${u} `),o+(i?(0,a.i0)(e,i):(0,r.GP)(e))}const c=["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwcdIkqhiWn5fHwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu6JrzFUAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwaeIkqhiWl5/HwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu6sKxboAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwadJEqhiWl5fPwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu75+IUcAAAAASUVORK5CYII="];async function f(e){if(!("visualVariables"in e)||!e.visualVariables)return null;const t=e.visualVariables.find((e=>"color"===e.type));if(!t)return null;let i=null,o=null;if(t.stops){if(1===t.stops.length)return t.stops[0].color;i=t.stops[0].value,o=t.stops[t.stops.length-1].value}const r=null!=i&&null!=o?i+(o-i)/2:0,{getColor:a}=await Promise.resolve().then(n.bind(n,71237));return a(t,r)??null}async function d(e,t){const n=e.trailCap,i=e.trailWidth||1,o=t||await f(e)||e.color;return new s.default({cap:n,color:o,width:i})}function g(e,t,n){const r=function(e,t){if(!t.field)return null;if("featureReduction"in e)switch(e.featureReduction?.type){case"cluster":case"binning":{const n=e.featureReduction.fields.find((e=>{let{name:n}=e;return n.toLowerCase()===t.field.toLowerCase()}));return n&&"getField"in e?e.getField(n.onStatisticField):null}}return"getField"in e?e.getField?.(t.field):null}(e,t);if(!r||!(0,a.fs)(r)&&!(0,o.isTimeOnlyField)(r))return null;let s=function(e,t){const n="popupTemplate"in e?e.popupTemplate?.fieldInfos:null;if(n?.length&&t)return n.find((e=>e.fieldName?.toLowerCase()===t.toLowerCase()))?.format?.dateFormat}(e,r.name);if(!s&&"date"===r.type){let e=0,n=0;t.stops?(e=t.stops?.at(0)?.value??e,n=t.stops?.at(-1)?.value??n):"minDataValue"in t&&"maxDataValue"in t&&(e=t.minDataValue??e,n=t.maxDataValue??n),s=n-e>2*i.vf.days?"short-date":"short-date-short-time"}return{fieldType:r.type,format:s,timeZoneOptions:{layerTimeZone:"preferredTimeZone"in e?e.preferredTimeZone:null,viewTimeZone:n,datesInUnknownTimezone:"datesInUnknownTimezone"in e&&e.datesInUnknownTimezone}}}function m(e){if("authoringInfo"in e)return e.authoringInfo?.visualVariables?.find((e=>{let{theme:t}=e;return"reference-size"===t}))}},79538:(e,t,n)=>{n.d(t,{BV:()=>I,EG:()=>v,Lk:()=>F,Ll:()=>N,Np:()=>A,R3:()=>M,SO:()=>g,T1:()=>b,UH:()=>u,Wy:()=>y,XR:()=>d,aM:()=>U,fs:()=>w,i0:()=>k,i3:()=>h});var i=n(66845),o=n(95011),r=n(96247),a=n(76983),s=n(73210),l=n(40731);const u=",",A={light:["streets","gray","topo","terrain","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector","topo-3d","navigation-3d","streets-3d","osm-3d","gray-3d"],dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector","navigation-dark-3d","streets-dark-3d","dark-gray-3d"]},c="percent-of-total",f="field",d={exclude:["median"]},g={years:365,months:30,days:1,hours:1/24,minutes:1/1440,seconds:1/86400,milliseconds:1/864e5},m=new Set(["integer","small-integer"]);let p=null;const h=["date","date-only","timestamp-offset"];function w(e){return(0,o.isDateField)(e)||(0,o.isDateOnlyField)(e)||(0,o.isTimestampOffsetField)(e)}async function v(e){const{field:t,field2:n,field3:i,normalizationField:o,valueExpression:a}=e;let s=[];if(a){if(!p){const{arcadeUtils:e}=await(0,r.lw)();p=e}s=p.extractFieldNames(a)}return t&&s.push(t),n&&s.push(n),i&&s.push(i),o&&s.push(o),s}function y(e){let t=e.normalizationType;return t||(e.normalizationField?t=f:null!=e.normalizationTotal&&(t=c)),t??void 0}function T(e){return String(e).padStart(2,"0")}function C(e,t,n){let i;return"date"===t||"number"===t?("number"===t&&(e=new Date(e)),i=`TIMESTAMP'${n?e.getFullYear():e.getUTCFullYear()}-${T((n?e.getMonth():e.getUTCMonth())+1)}-${T(n?e.getDate():e.getUTCDate())} ${T(n?e.getHours():e.getUTCHours())}:${T(n?e.getMinutes():e.getUTCMinutes())}:${T(n?e.getSeconds():e.getUTCSeconds())}'`):i=e,i}function U(e,t,n,i){const{hasQueryEngine:o}=e,r=`(${C(n,F(e,n),o)} - ${C(t,F(e,t),o)})`;let a=g[i],s="/";return a<1&&(a=1/a,s="*"),{sqlExpression:1===a?r:`(${r} ${s} ${a})`,sqlWhere:null}}function F(e,t){if(t instanceof Date)return"date";if("number"==typeof t)return"number";if("string"==typeof t){const n=e.getField(t);if("<now>"===t.toLowerCase())return;if((0,o.isDateField)(n))return"field"}}function I(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:A;for(const n in t)if(t[n].includes(e))return n}function b(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=null;return e&&("string"==typeof e?t.includes(e)&&(i=e):i=(0,a.q3)(e)),n?i||"gray":i}function M(e,t){const n=t&&e.getField(t);return!!n&&m.has(n.type)}function N(e){return`cast(${e} as float)`}function k(e,t){const{format:n,timeZoneOptions:o,fieldType:r}=t??{};let a,u;if(o&&({timeZone:a,timeZoneName:u}=(0,l.hv)(o.layerTimeZone,o.datesInUnknownTimezone,o.viewTimeZone,(0,i.J2)(n||"short-date-short-time"),r)),"string"==typeof e&&isNaN(Date.parse("time-only"===r?`1970-01-01T${e}Z`:e)))return e;switch(r){case"date-only":{const t=(0,i.J2)(n||"short-date");return"string"==typeof e?(0,i.iS)(e,{...t}):(0,i.Yq)(e,{...t,timeZone:s.n$})}case"time-only":{const t=(0,i.J2)(n||"short-time");return"string"==typeof e?(0,i.F8)(e,t):(0,i.Yq)(e,{...t,timeZone:s.n$})}case"timestamp-offset":{if(!a&&"string"==typeof e&&new Date(e).toISOString()!==e)return e;const t=n||o?(0,i.J2)(n||"short-date-short-time"):void 0,r=t?{...t,timeZone:a,timeZoneName:u}:void 0;return"string"==typeof e?(0,i.Ey)(e,r):(0,i.Yq)(e,r)}default:{const t=n||o?(0,i.J2)(n||"short-date-short-time"):void 0;return(0,i.Yq)("string"==typeof e?new Date(e):e,t?{...t,timeZone:a,timeZoneName:u}:void 0)}}}}}]);