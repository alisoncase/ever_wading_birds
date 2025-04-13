"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[3788,79538],{2925:(t,e,n)=>{n.d(e,{$:()=>M,IB:()=>u,Iy:()=>A,KV:()=>I,N2:()=>E,QP:()=>C,RH:()=>k,Vl:()=>S,Ws:()=>q,ZD:()=>F,_L:()=>D,bJ:()=>Z,e$:()=>N,f6:()=>L,hw:()=>U,pW:()=>z,pf:()=>H,rs:()=>T,sn:()=>J,we:()=>B});var r=n(88102),i=n(62631),o=n(82301),a=n(64682),l=n(60548),s=n(24646);function u(t){return"r"in t&&"g"in t&&"b"in t}function c(t){return"h"in t&&"s"in t&&"v"in t}function f(t){return"l"in t&&"a"in t&&"b"in t}function d(t){return"l"in t&&"c"in t&&"h"in t}const h=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],g=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function m(t,e){const n=[];let r,i;if(t[0].length!==e.length)throw new Error("dimensions do not match");const o=t.length,a=t[0].length;let l=0;for(r=0;r<o;r++){for(l=0,i=0;i<a;i++)l+=t[r][i]*e[i];n.push(l)}return n}function p(t){const e=[t.r/255,t.g/255,t.b/255].map((t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4)),n=m(h,e);return{x:100*n[0],y:100*n[1],z:100*n[2]}}function v(t){const e=m(g,[t.x/100,t.y/100,t.z/100]).map((t=>{const e=t<=.0031308?12.92*t:1.055*t**(1/2.4)-.055;return Math.min(1,Math.max(e,0))}));return{r:Math.round(255*e[0]),g:Math.round(255*e[1]),b:Math.round(255*e[2])}}function y(t){const e=[t.x/95.047,t.y/100,t.z/108.883].map((t=>t>(6/29)**3?t**(1/3):1/3*(29/6)**2*t+4/29));return{l:116*e[1]-16,a:500*(e[0]-e[1]),b:200*(e[1]-e[2])}}function b(t){const e=t.l,n=[(e+16)/116+t.a/500,(e+16)/116,(e+16)/116-t.b/200].map((t=>t>6/29?t**3:3*(6/29)**2*(t-4/29)));return{x:95.047*n[0],y:100*n[1],z:108.883*n[2]}}function w(t){return function(t){const e=t.l,n=t.a,r=t.b,i=Math.sqrt(n*n+r*r);let o=Math.atan2(r,n);return o=o>0?o:o+2*Math.PI,{l:e,c:i,h:o}}(y(p(t)))}function x(t){return v(b(function(t){const e=t.l,n=t.c,r=t.h;return{l:e,a:n*Math.cos(r),b:n*Math.sin(r)}}(t)))}function M(t){return u(t)?t:d(t)?x(t):f(t)?function(t){return v(b(t))}(t):function(t){return"x"in t&&"y"in t&&"z"in t}(t)?v(t):c(t)?function(t){const e=(t.h+360)%360/60,n=t.s/100,r=t.v/100*255,i=r*n,o=i*(1-Math.abs(e%2-1));let a;switch(Math.floor(e)){case 0:a={r:i,g:o,b:0};break;case 1:a={r:o,g:i,b:0};break;case 2:a={r:0,g:i,b:o};break;case 3:a={r:0,g:o,b:i};break;case 4:a={r:o,g:0,b:i};break;case 5:case 6:a={r:i,g:0,b:o};break;default:a={r:0,g:0,b:0}}return a.r=Math.round(a.r+r-i),a.g=Math.round(a.g+r-i),a.b=Math.round(a.b+r-i),a}(t):t}function E(t){return c(t)?t:function(t){const e=t.r,n=t.g,r=t.b,i=Math.max(e,n,r),o=i-Math.min(e,n,r);let a=i,l=0===o?0:i===e?(n-r)/o%6:i===n?(r-e)/o+2:(e-n)/o+4,s=0===o?0:o/a;return l<0&&(l+=6),l*=60,s*=100,a*=100/255,{h:l,s:s,v:a}}(M(t))}function F(t){return f(t)?t:function(t){return y(p(t))}(M(t))}function k(t){return d(t)?t:w(M(t))}function T(t){return V(t).isBright?"light":"dark"}function V(t){let{r:e,g:n,b:i,a:o}=t;return o<1&&(e=Math.round(o*e+255*(1-o)),n=Math.round(o*n+255*(1-o)),i=Math.round(o*i+255*(1-o))),new r.default({r:e,g:n,b:i})}function q(t,e){const{r:n,g:r,b:i}=e?.ignoreAlpha?t:V(t);return.2126*n+.7152*r+.0722*i}var z,$;function Z(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:z.High;return q(t,{ignoreAlpha:!0})>e?new r.default([0,0,0,t.a]):new r.default([255,255,255,t.a])}function N(t,e){const n=F(t);n.l*=1-e;const r=M(n),i=t.clone();return i.setColor(r),i.a=t.a,i}function D(t,e){const n=t.clone();return n.a*=e,n}function S(t,e){const n=E(t);n.s*=e;const r=M(n),i=t.clone();return i.setColor(r),i.a=t.a,i}function C(t){return r.default.toUnitRGBA(t)}function U(t,e){return t===e||null!=t&&t.equals(e)}function B(t,e){return t===e||null!=t&&null!=e&&(0,l.e)(t,e)}function H(t){return(0,s.fA)(t[0],t[1],t[2],t.length>3?t[3]:1)}function I(t){return t[0]??=0,t[1]??=0,t[2]??=0,t}function J(t){return t.length=4,I(t),t[3]??=1,(0,a.qE)(t[3],0,1),t}function L(t,e){const n=r.default.toUnitRGBA(t);return n[3]*=e,n}function A(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(0===t.length||e<=0)return[];if(1===(t=t.map((t=>"string"==typeof t?new r.default(t):t))).length||1===e){const n=[],r=t[0];for(let t=0;t<e;t++)n.push(r.clone());return n}if(n.shuffle&&(t=(0,i.k4)((0,o.clone)(t),n.seed)),t.length>=e){const n=[],r=(t.length-1)/(e-1);for(let i=0;i<e;i++){const e=Math.round(i*r);n.push(t[e].clone())}return n}return function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=[],o=t.length-1,a=Math.ceil((e-t.length)/o);t:for(let i=0;i<o;i++){const o=t[i],l=t[i+1];for(let i=1;i<=a;i++){const s=i/(a+1);if(r.push(P(o,l,s,n)),r.length+t.length===e)break t}}return[...t.map((t=>t.clone())),...(0,i.k4)(r,n.seed??1)]}(t,e,n)}($=z||(z={}))[$.Low=160]="Low",$[$.High=225]="High";const O=(t,e)=>{const n=Math.floor(10*e())-5;return Math.min(255,Math.max(0,t+n))};function P(t,e,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const a=t.r,l=t.g,s=t.b,u=e.r,c=e.g,f=e.b,d=Math.round(a+(u-a)*n),h=Math.round(l+(c-l)*n),g=Math.round(s+(f-s)*n);if(!o.offset)return new r.default([d,h,g]);const m=(0,i.Mo)(o.seed);return new r.default([O(d,m),O(h,m),O(g,m)])}},22420:(t,e,n)=>{n.d(e,{GP:()=>d,LI:()=>c,lc:()=>s,u5:()=>u});n(88677);var r=n(23224);const i=/^-?(\d+)(\.(\d+))?$/i;function o(t,e){return t-e}function a(t,e){let n,r;return n=Number(t.toFixed(e)),n<t?r=n+1/10**e:(r=n,n-=1/10**e),n=Number(n.toFixed(e)),r=Number(r.toFixed(e)),[n,r]}function l(t,e,n,r,i){const o=u(t,e,n,r),a=null==o.previous||o.previous<=i,l=null==o.next||o.next<=i;return a&&l||o.previous+o.next<=2*i}function s(t){const e=String(t),n=e.match(i);if(n?.[1])return{integer:n[1].split("").length,fractional:n[3]?n[3].split("").length:0};if(e.toLowerCase().includes("e")){const t=e.split("e"),n=t[0],r=t[1];if(n&&r){const t=Number(n);let e=Number(r);const i=e>0;i||(e=Math.abs(e));const o=s(t);return i?(o.integer+=e,e>o.fractional?o.fractional=0:o.fractional-=e):(o.fractional+=e,e>o.integer?o.integer=1:o.integer-=e),o}}return{integer:0,fractional:0}}function u(t,e,n,r){const i={previous:null,next:null};if(null!=n){const r=t-n,o=e-n-r;i.previous=Math.floor(Math.abs(100*o/r))}if(null!=r){const n=r-t,o=r-e-n;i.next=Math.floor(Math.abs(100*o/n))}return i}function c(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=t.slice(),{tolerance:r=2,strictBounds:i=!1,indexes:u=n.map(((t,e)=>e))}=e;u.sort(o);for(let o=0;o<u.length;o++){const t=u[o],e=n[t],c=0===t?null:n[t-1],f=t===n.length-1?null:n[t+1],d=s(e).fractional;if(d){let s,u=0,h=!1;for(;u<=d&&!h;){const t=a(e,u);s=i&&0===o?t[1]:t[0],h=l(e,s,c,f,r),u++}h&&(n[t]=s)}}return n}const f={maximumFractionDigits:20};function d(t){return(0,r.ZV)(t,f)}},55633:(t,e,n)=>{n.r(e),n.d(e,{createVisualVariable:()=>g});var r=n(74719),i=n(80556),o=n(45023),a=n(84267),l=n(72861),s=n(34441),u=n(77225),c=n(39569),f=n(85151),d=n(79538),h=n(2938);async function g(t){const e=await async function(t){if(!t?.layer||!(t.field||t.valueExpression||t.sqlExpression))throw new r.default("opacity-visual-variable:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(t.valueExpression&&!t.view)throw new r.default("opacity-visual-variable:missing-parameters","View is required when 'valueExpression' is specified");t.forBinning&&(0,f.p)(t,"opacity-visual-variable");const e={...t,layer:t.layer},n=t.forBinning?h.Mi:h.J4,i=(0,h.Jg)(e.layer,n,t.forBinning);if(!i)throw new r.default("opacity-visual-variable:invalid-parameters","'layer' must be one of these types: "+(0,h.Ho)(n).join(", "));e.layer=i;const o=null!=e.signal?{signal:e.signal}:null;await i.load(o);const a=await(0,d.EG)({field:e.field,normalizationField:e.normalizationField,valueExpression:e.valueExpression}),l=(0,c.MH)(i,a,"opacity-visual-variable:invalid-parameters");if(l)throw l;return e}(t);let n=null;return n=e.statistics?e.statistics:await(0,c.g2)({layer:e.layer,field:e.field,valueExpression:e.valueExpression,sqlExpression:e.sqlExpression,sqlWhere:e.sqlWhere,normalizationType:e.normalizationField?"field":void 0,normalizationField:e.normalizationField,minValue:e.minValue,maxValue:e.maxValue,filter:e.filter,view:e.view,signal:e.signal}),function(t,e){const n=e.layer,r=e.field,f=r&&"function"!=typeof r?n.getField(r):null,h=(0,d.fs)(f),g=(0,c.BD)(t),m=(0,c.N4)(t,h,!0),p=m||[g[0],g[4]],v=new l.default({field:r??void 0,valueExpression:e.valueExpression,valueExpressionTitle:e.valueExpressionTitle,normalizationField:e.normalizationField,stops:[new s.default({value:p[0],opacity:.3}),new s.default({value:p[1],opacity:1})],legendOptions:(0,i.PZ)(u.A,e.legendOptions)}),y=new a.default({type:"opacity",minSliderValue:null!=e.minValue?e.minValue:t.min,maxSliderValue:null!=e.maxValue?e.maxValue:t.max}),b=new o.default({visualVariables:[y]});return Promise.resolve({visualVariable:v,statistics:t,defaultValuesUsed:!!m,authoringInfo:b})}(n,e)}},79538:(t,e,n)=>{n.d(e,{BV:()=>k,EG:()=>b,Lk:()=>F,Ll:()=>q,Np:()=>c,R3:()=>V,SO:()=>g,T1:()=>T,UH:()=>u,Wy:()=>w,XR:()=>h,aM:()=>E,fs:()=>y,i0:()=>z,i3:()=>v});var r=n(66845),i=n(95011),o=n(96247),a=n(76983),l=n(73210),s=n(40731);const u=",",c={light:["streets","gray","topo","terrain","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector","topo-3d","navigation-3d","streets-3d","osm-3d","gray-3d"],dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector","navigation-dark-3d","streets-dark-3d","dark-gray-3d"]},f="percent-of-total",d="field",h={exclude:["median"]},g={years:365,months:30,days:1,hours:1/24,minutes:1/1440,seconds:1/86400,milliseconds:1/864e5},m=new Set(["integer","small-integer"]);let p=null;const v=["date","date-only","timestamp-offset"];function y(t){return(0,i.isDateField)(t)||(0,i.isDateOnlyField)(t)||(0,i.isTimestampOffsetField)(t)}async function b(t){const{field:e,field2:n,field3:r,normalizationField:i,valueExpression:a}=t;let l=[];if(a){if(!p){const{arcadeUtils:t}=await(0,o.lw)();p=t}l=p.extractFieldNames(a)}return e&&l.push(e),n&&l.push(n),r&&l.push(r),i&&l.push(i),l}function w(t){let e=t.normalizationType;return e||(t.normalizationField?e=d:null!=t.normalizationTotal&&(e=f)),e??void 0}function x(t){return String(t).padStart(2,"0")}function M(t,e,n){let r;return"date"===e||"number"===e?("number"===e&&(t=new Date(t)),r=`TIMESTAMP'${n?t.getFullYear():t.getUTCFullYear()}-${x((n?t.getMonth():t.getUTCMonth())+1)}-${x(n?t.getDate():t.getUTCDate())} ${x(n?t.getHours():t.getUTCHours())}:${x(n?t.getMinutes():t.getUTCMinutes())}:${x(n?t.getSeconds():t.getUTCSeconds())}'`):r=t,r}function E(t,e,n,r){const{hasQueryEngine:i}=t,o=`(${M(n,F(t,n),i)} - ${M(e,F(t,e),i)})`;let a=g[r],l="/";return a<1&&(a=1/a,l="*"),{sqlExpression:1===a?o:`(${o} ${l} ${a})`,sqlWhere:null}}function F(t,e){if(e instanceof Date)return"date";if("number"==typeof e)return"number";if("string"==typeof e){const n=t.getField(e);if("<now>"===e.toLowerCase())return;if((0,i.isDateField)(n))return"field"}}function k(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c;for(const n in e)if(e[n].includes(t))return n}function T(t,e){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=null;return t&&("string"==typeof t?e.includes(t)&&(r=t):r=(0,a.q3)(t)),n?r||"gray":r}function V(t,e){const n=e&&t.getField(e);return!!n&&m.has(n.type)}function q(t){return`cast(${t} as float)`}function z(t,e){const{format:n,timeZoneOptions:i,fieldType:o}=e??{};let a,u;if(i&&({timeZone:a,timeZoneName:u}=(0,s.hv)(i.layerTimeZone,i.datesInUnknownTimezone,i.viewTimeZone,(0,r.J2)(n||"short-date-short-time"),o)),"string"==typeof t&&isNaN(Date.parse("time-only"===o?`1970-01-01T${t}Z`:t)))return t;switch(o){case"date-only":{const e=(0,r.J2)(n||"short-date");return"string"==typeof t?(0,r.iS)(t,{...e}):(0,r.Yq)(t,{...e,timeZone:l.n$})}case"time-only":{const e=(0,r.J2)(n||"short-time");return"string"==typeof t?(0,r.F8)(t,e):(0,r.Yq)(t,{...e,timeZone:l.n$})}case"timestamp-offset":{if(!a&&"string"==typeof t&&new Date(t).toISOString()!==t)return t;const e=n||i?(0,r.J2)(n||"short-date-short-time"):void 0,o=e?{...e,timeZone:a,timeZoneName:u}:void 0;return"string"==typeof t?(0,r.Ey)(t,o):(0,r.Yq)(t,o)}default:{const e=n||i?(0,r.J2)(n||"short-date-short-time"):void 0;return(0,r.Yq)("string"==typeof t?new Date(t):t,e?{...e,timeZone:a,timeZoneName:u}:void 0)}}}}}]);