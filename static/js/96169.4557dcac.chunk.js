"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[79538,81060,96169],{2925:(t,e,n)=>{n.d(e,{$:()=>C,IB:()=>l,Iy:()=>L,KV:()=>E,N2:()=>D,QP:()=>J,RH:()=>M,Vl:()=>Z,Ws:()=>x,ZD:()=>T,_L:()=>q,bJ:()=>F,e$:()=>I,f6:()=>_,hw:()=>N,pW:()=>$,pf:()=>A,rs:()=>z,sn:()=>O,we:()=>U});var o=n(88102),a=n(62631),r=n(82301),s=n(64682),i=n(60548),c=n(24646);function l(t){return"r"in t&&"g"in t&&"b"in t}function u(t){return"h"in t&&"s"in t&&"v"in t}function m(t){return"l"in t&&"a"in t&&"b"in t}function d(t){return"l"in t&&"c"in t&&"h"in t}const h=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],p=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function f(t,e){const n=[];let o,a;if(t[0].length!==e.length)throw new Error("dimensions do not match");const r=t.length,s=t[0].length;let i=0;for(o=0;o<r;o++){for(i=0,a=0;a<s;a++)i+=t[o][a]*e[a];n.push(i)}return n}function g(t){const e=[t.r/255,t.g/255,t.b/255].map((t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4)),n=f(h,e);return{x:100*n[0],y:100*n[1],z:100*n[2]}}function y(t){const e=f(p,[t.x/100,t.y/100,t.z/100]).map((t=>{const e=t<=.0031308?12.92*t:1.055*t**(1/2.4)-.055;return Math.min(1,Math.max(e,0))}));return{r:Math.round(255*e[0]),g:Math.round(255*e[1]),b:Math.round(255*e[2])}}function b(t){const e=[t.x/95.047,t.y/100,t.z/108.883].map((t=>t>(6/29)**3?t**(1/3):1/3*(29/6)**2*t+4/29));return{l:116*e[1]-16,a:500*(e[0]-e[1]),b:200*(e[1]-e[2])}}function w(t){const e=t.l,n=[(e+16)/116+t.a/500,(e+16)/116,(e+16)/116-t.b/200].map((t=>t>6/29?t**3:3*(6/29)**2*(t-4/29)));return{x:95.047*n[0],y:100*n[1],z:108.883*n[2]}}function v(t){return function(t){const e=t.l,n=t.a,o=t.b,a=Math.sqrt(n*n+o*o);let r=Math.atan2(o,n);return r=r>0?r:r+2*Math.PI,{l:e,c:a,h:r}}(b(g(t)))}function k(t){return y(w(function(t){const e=t.l,n=t.c,o=t.h;return{l:e,a:n*Math.cos(o),b:n*Math.sin(o)}}(t)))}function C(t){return l(t)?t:d(t)?k(t):m(t)?function(t){return y(w(t))}(t):function(t){return"x"in t&&"y"in t&&"z"in t}(t)?y(t):u(t)?function(t){const e=(t.h+360)%360/60,n=t.s/100,o=t.v/100*255,a=o*n,r=a*(1-Math.abs(e%2-1));let s;switch(Math.floor(e)){case 0:s={r:a,g:r,b:0};break;case 1:s={r:r,g:a,b:0};break;case 2:s={r:0,g:a,b:r};break;case 3:s={r:0,g:r,b:a};break;case 4:s={r:r,g:0,b:a};break;case 5:case 6:s={r:a,g:0,b:r};break;default:s={r:0,g:0,b:0}}return s.r=Math.round(s.r+o-a),s.g=Math.round(s.g+o-a),s.b=Math.round(s.b+o-a),s}(t):t}function D(t){return u(t)?t:function(t){const e=t.r,n=t.g,o=t.b,a=Math.max(e,n,o),r=a-Math.min(e,n,o);let s=a,i=0===r?0:a===e?(n-o)/r%6:a===n?(o-e)/r+2:(e-n)/r+4,c=0===r?0:r/s;return i<0&&(i+=6),i*=60,c*=100,s*=100/255,{h:i,s:c,v:s}}(C(t))}function T(t){return m(t)?t:function(t){return b(g(t))}(C(t))}function M(t){return d(t)?t:v(C(t))}function z(t){return S(t).isBright?"light":"dark"}function S(t){let{r:e,g:n,b:a,a:r}=t;return r<1&&(e=Math.round(r*e+255*(1-r)),n=Math.round(r*n+255*(1-r)),a=Math.round(r*a+255*(1-r))),new o.default({r:e,g:n,b:a})}function x(t,e){const{r:n,g:o,b:a}=e?.ignoreAlpha?t:S(t);return.2126*n+.7152*o+.0722*a}var $,B;function F(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:$.High;return x(t,{ignoreAlpha:!0})>e?new o.default([0,0,0,t.a]):new o.default([255,255,255,t.a])}function I(t,e){const n=T(t);n.l*=1-e;const o=C(n),a=t.clone();return a.setColor(o),a.a=t.a,a}function q(t,e){const n=t.clone();return n.a*=e,n}function Z(t,e){const n=D(t);n.s*=e;const o=C(n),a=t.clone();return a.setColor(o),a.a=t.a,a}function J(t){return o.default.toUnitRGBA(t)}function N(t,e){return t===e||null!=t&&t.equals(e)}function U(t,e){return t===e||null!=t&&null!=e&&(0,i.e)(t,e)}function A(t){return(0,c.fA)(t[0],t[1],t[2],t.length>3?t[3]:1)}function E(t){return t[0]??=0,t[1]??=0,t[2]??=0,t}function O(t){return t.length=4,E(t),t[3]??=1,(0,s.qE)(t[3],0,1),t}function _(t,e){const n=o.default.toUnitRGBA(t);return n[3]*=e,n}function L(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(0===t.length||e<=0)return[];if(1===(t=t.map((t=>"string"==typeof t?new o.default(t):t))).length||1===e){const n=[],o=t[0];for(let t=0;t<e;t++)n.push(o.clone());return n}if(n.shuffle&&(t=(0,a.k4)((0,r.clone)(t),n.seed)),t.length>=e){const n=[],o=(t.length-1)/(e-1);for(let a=0;a<e;a++){const e=Math.round(a*o);n.push(t[e].clone())}return n}return function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const o=[],r=t.length-1,s=Math.ceil((e-t.length)/r);t:for(let a=0;a<r;a++){const r=t[a],i=t[a+1];for(let a=1;a<=s;a++){const c=a/(s+1);if(o.push(R(r,i,c,n)),o.length+t.length===e)break t}}return[...t.map((t=>t.clone())),...(0,a.k4)(o,n.seed??1)]}(t,e,n)}(B=$||($={}))[B.Low=160]="Low",B[B.High=225]="High";const G=(t,e)=>{const n=Math.floor(10*e())-5;return Math.min(255,Math.max(0,t+n))};function R(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const s=t.r,i=t.g,c=t.b,l=e.r,u=e.g,m=e.b,d=Math.round(s+(l-s)*n),h=Math.round(i+(u-i)*n),p=Math.round(c+(m-c)*n);if(!r.offset)return new o.default([d,h,p]);const f=(0,a.Mo)(r.seed);return new o.default([G(d,f),G(h,f),G(p,f)])}},28245:(t,e,n)=>{n.d(e,{bG:()=>s,Ty:()=>c,YJ:()=>l,Fq:()=>u,vt:()=>i});var o=n(82301),a=n(79538);class r{constructor(t){const{name:e,label:n,description:o,schemes:r}=t;this.name=e,this.label=n,this.description=o,this.schemes=r;const s=t.basemapGroups||a.Np;let i=[];Object.keys(s).forEach((t=>{i=i.concat(s[t])})),this.supportedBasemaps=i,this.basemapGroups=s}isBasemapSupported(t){const e=(0,a.T1)(t,this.supportedBasemaps);return!(!e||!this.supportedBasemaps.includes(e))}getRawSchemes(t){const{basemapId:e,basemapTheme:n}=function(t,e,n){let o=null,r=null;if(e&&(o=(0,a.T1)(e,t,!1),o)){const t=(0,a.BV)(o);null!=t&&(r=t)}return!o&&n&&(o="dark"===n?"dark-gray":"gray",r=n),o||r||(o="gray",r="light"),{basemapId:o,basemapTheme:r}}(this.supportedBasemaps,t.basemap,t.basemapTheme);let r=n;if(e){const t=(0,a.BV)(e,this.basemapGroups);null!=t&&(r=t)}let s=t.geometryType;"multipoint"===s?s="point":"mesh"===s&&(s="polygon");const i=this.schemes[s]||this.schemes.default;return{schemesInfo:(0,o.clone)(i[r]),basemapId:e,basemapTheme:n}}}function s(t){const e=t.themeDictionary,n=new Map;for(const o in e){const t=e[o];n.set(o,new r(t))}return n}function i(t,e){const n=[];return t.forEach((t=>{t.isBasemapSupported(e)&&n.push({name:t.name,label:t.label,description:t.description,basemaps:[...t.supportedBasemaps]})})),n}function c(t,e){if(!t)return;if(!e)return;let n=null;const o=[e.primaryScheme,...e.secondarySchemes];for(const a of o)if(a.name?.toLowerCase()===t.toLowerCase()){n=a;break}return n}function l(t,e,n){if(!t&&!e)return[];if(!n)return[];const o=!t?.length,a=!e?.length,r=[n.primaryScheme,...n.secondarySchemes],s=[];for(const i of r){const n=!!o||t.some((t=>i.tags.includes(t))),r=!a&&e.some((t=>i.tags.includes(t)));n&&!r&&s.push(i)}return s}function u(t){const e=t.theme;if(e)return e.getRawSchemes({basemap:t.basemap,geometryType:t.geometryType,basemapTheme:t.basemapTheme})}},42648:(t,e,n)=>{n.d(e,{_J:()=>l,_t:()=>c});var o=n(16804),a=n(79538);const r=a.Np.light,s=a.Np.dark;function i(t,e){return t.r===e.r&&t.g===e.g&&t.b===e.b}function c(t,e){let n=0;if(t.length===e.length){let o=t.every(((t,n)=>i(t,e[n])));o?n=1:(o=t.slice().reverse().every(((t,n)=>i(t,e[n]))),o&&(n=-1))}return n}function l(t,e){return Math.ceil(function(t){const e=t.width,n=t.height;let a=t.pixelSizeAt(t.toMap((0,o.tc)(.5*e,.5*n),{exclude:[]}));if(a<=0&&(a=t.pixelSizeAt(t.toMap((0,o.tc)(.5*e,.95*n),{exclude:[]})),a<=0&&"camera"in t)){const e=t.camera.position.clone();e.z=0,a=2*t.pixelSizeAt(e)}return a}(e)*(0,o.Lz)((0,o.cr)(t)))}},79538:(t,e,n)=>{n.d(e,{BV:()=>M,EG:()=>w,Lk:()=>T,Ll:()=>x,Np:()=>u,R3:()=>S,SO:()=>p,T1:()=>z,UH:()=>l,Wy:()=>v,XR:()=>h,aM:()=>D,fs:()=>b,i0:()=>$,i3:()=>y});var o=n(66845),a=n(95011),r=n(96247),s=n(76983),i=n(73210),c=n(40731);const l=",",u={light:["streets","gray","topo","terrain","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector","topo-3d","navigation-3d","streets-3d","osm-3d","gray-3d"],dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector","navigation-dark-3d","streets-dark-3d","dark-gray-3d"]},m="percent-of-total",d="field",h={exclude:["median"]},p={years:365,months:30,days:1,hours:1/24,minutes:1/1440,seconds:1/86400,milliseconds:1/864e5},f=new Set(["integer","small-integer"]);let g=null;const y=["date","date-only","timestamp-offset"];function b(t){return(0,a.isDateField)(t)||(0,a.isDateOnlyField)(t)||(0,a.isTimestampOffsetField)(t)}async function w(t){const{field:e,field2:n,field3:o,normalizationField:a,valueExpression:s}=t;let i=[];if(s){if(!g){const{arcadeUtils:t}=await(0,r.lw)();g=t}i=g.extractFieldNames(s)}return e&&i.push(e),n&&i.push(n),o&&i.push(o),a&&i.push(a),i}function v(t){let e=t.normalizationType;return e||(t.normalizationField?e=d:null!=t.normalizationTotal&&(e=m)),e??void 0}function k(t){return String(t).padStart(2,"0")}function C(t,e,n){let o;return"date"===e||"number"===e?("number"===e&&(t=new Date(t)),o=`TIMESTAMP'${n?t.getFullYear():t.getUTCFullYear()}-${k((n?t.getMonth():t.getUTCMonth())+1)}-${k(n?t.getDate():t.getUTCDate())} ${k(n?t.getHours():t.getUTCHours())}:${k(n?t.getMinutes():t.getUTCMinutes())}:${k(n?t.getSeconds():t.getUTCSeconds())}'`):o=t,o}function D(t,e,n,o){const{hasQueryEngine:a}=t,r=`(${C(n,T(t,n),a)} - ${C(e,T(t,e),a)})`;let s=p[o],i="/";return s<1&&(s=1/s,i="*"),{sqlExpression:1===s?r:`(${r} ${i} ${s})`,sqlWhere:null}}function T(t,e){if(e instanceof Date)return"date";if("number"==typeof e)return"number";if("string"==typeof e){const n=t.getField(e);if("<now>"===e.toLowerCase())return;if((0,a.isDateField)(n))return"field"}}function M(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;for(const n in e)if(e[n].includes(t))return n}function z(t,e){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=null;return t&&("string"==typeof t?e.includes(t)&&(o=t):o=(0,s.q3)(t)),n?o||"gray":o}function S(t,e){const n=e&&t.getField(e);return!!n&&f.has(n.type)}function x(t){return`cast(${t} as float)`}function $(t,e){const{format:n,timeZoneOptions:a,fieldType:r}=e??{};let s,l;if(a&&({timeZone:s,timeZoneName:l}=(0,c.hv)(a.layerTimeZone,a.datesInUnknownTimezone,a.viewTimeZone,(0,o.J2)(n||"short-date-short-time"),r)),"string"==typeof t&&isNaN(Date.parse("time-only"===r?`1970-01-01T${t}Z`:t)))return t;switch(r){case"date-only":{const e=(0,o.J2)(n||"short-date");return"string"==typeof t?(0,o.iS)(t,{...e}):(0,o.Yq)(t,{...e,timeZone:i.n$})}case"time-only":{const e=(0,o.J2)(n||"short-time");return"string"==typeof t?(0,o.F8)(t,e):(0,o.Yq)(t,{...e,timeZone:i.n$})}case"timestamp-offset":{if(!s&&"string"==typeof t&&new Date(t).toISOString()!==t)return t;const e=n||a?(0,o.J2)(n||"short-date-short-time"):void 0,r=e?{...e,timeZone:s,timeZoneName:l}:void 0;return"string"==typeof t?(0,o.Ey)(t,r):(0,o.Yq)(t,r)}default:{const e=n||a?(0,o.J2)(n||"short-date-short-time"):void 0;return(0,o.Yq)("string"==typeof t?new Date(t):t,e?{...e,timeZone:s,timeZoneName:l}:void 0)}}}},96169:(t,e,n)=>{n.r(e),n.d(e,{cloneScheme:()=>k,getSchemeByName:()=>w,getSchemes:()=>b,getSchemesByTag:()=>v,getThemes:()=>y});var o=n(88102),a=n(62631),r=n(2925),s=n(43073),i=n(28245),c=n(42648);const l={light:{color:[153,153,153,.25],width:"1px"},dark:{color:[153,153,153,.25],width:"1px"},darker:{color:[26,26,26,.25],width:"1px"}},u=["tropical-bliss","desert-blooms","under-the-sea","vibrant-rainbow","ocean-bay","prairie-summer","pastel-chalk"],m=["predominant-v1","predominant-v2","predominant-v3","predominant-v4","predominant-v5","predominance-race","predominance-money","predominance-race-ethnic","predominance-rainbow","predominance-sequence"],d=["cat-symbols-strong","cat-symbols-autumnal","cat-symbols-bright","cat-symbols-midrange","cat-symbols-subdued","cat-symbols-pastel","cat-symbols-red","cat-symbols-blue","cat-symbols-green","cat-symbols-gray"],h=["cat-popup-olympic-sunset"],p="#aaaaaa",f="12px",g=(0,i.bG)({themeDictionary:{default:{name:"default",label:"Default",description:"Default theme for visualizing features by their type.",schemes:{point:{light:{common:{noDataColor:p,outline:l.light,size:"8px"},primary:"cat-dark",secondary:["cat-light"].concat(d).concat(u).concat(m).concat(h)},dark:{common:{noDataColor:p,outline:l.darker,size:"8px"},primary:"cat-light",secondary:["cat-dark"].concat(d).concat(u).concat(m).concat(h)}},polyline:{light:{common:{noDataColor:p,width:"2px"},primary:"cat-dark",secondary:["cat-light"].concat(d).concat(u).concat(m).concat(h)},dark:{common:{noDataColor:p,width:"2px"},primary:"cat-light",secondary:["cat-dark"].concat(d).concat(u).concat(m).concat(h)}},polygon:{light:{common:{noDataColor:p,outline:l.light,fillOpacity:.8},primary:"cat-dark",secondary:["cat-light"].concat(d).concat(u).concat(m).concat(h)},dark:{common:{noDataColor:p,outline:l.dark,fillOpacity:.8},primary:"cat-light",secondary:["cat-dark"].concat(d).concat(u).concat(m).concat(h)}}}},"point-cloud-class":{name:"point-cloud-class",label:"Point Cloud Class",description:"Default theme for visualizing point cloud data based on classification.",schemes:{point:{light:{primary:"point-cloud-class-scheme",secondary:[]},dark:{primary:"point-cloud-class-scheme",secondary:[]}}}}}});function y(t){return(0,i.vt)(g,t)}function b(t){const e=t.theme||"default",n=(0,i.Fq)({basemap:t.basemap,geometryType:t.geometryType,basemapTheme:t.basemapTheme,theme:g.get(e)});if(!n)return;const{schemesInfo:o,basemapId:r,basemapTheme:s}=n,c=o.common;return{primaryScheme:C(t,o.primary,c),secondarySchemes:o.secondary.map((e=>C(t,e,c))).filter(a.Ru),basemapId:r,basemapTheme:s}}function w(t){return(0,i.Ty)(t.name,b(t))}function v(t){return(0,i.YJ)(t.includedTags,t.excludedTags,b(t))}function k(t){if(!t)return;const e={...t};return e.colors=e.colors.map((t=>new o.default(t))),e.tags=[...e.tags],"noDataColor"in e&&e.noDataColor&&(e.noDataColor=new o.default(e.noDataColor)),"outline"in e&&e.outline&&(e.outline={color:e.outline.color&&new o.default(e.outline.color),width:e.outline.width}),e}function C(t,e,n){const{numColors:a}=t,i=t.theme||"default",l=s.A[e];if(!l)return;const u=a?l[a]??(0,r.Iy)(l.stops,a):l.stops,m="mesh"!==t.geometryType&&t.worldScale?t.view:null;switch(t.geometryType){case"point":case"multipoint":{if("point-cloud-class"===i)return function(t){return{name:t.name,tags:[...t.tags],theme:t.theme,colors:t.colors.map((t=>new o.default(t)))}}({theme:i,name:l.name,tags:l.tags,colors:u});const t=n;return function(t,e){return{name:t.name,tags:[...t.tags],theme:t.theme,colors:t.colors.map((t=>new o.default(t))),noDataColor:new o.default(t.noDataColor),outline:{color:new o.default(t.outline.color),width:t.outline.width},size:e?(0,c._J)(t.size,e):t.size,opacity:t.opacity}}({name:l.name,tags:l.tags,theme:i,colors:u,noDataColor:t.noDataColor,opacity:1,outline:t.outline,size:t.size},m)}case"polyline":{const t=n;return function(t,e){return{name:t.name,tags:[...t.tags],theme:t.theme,colors:t.colors.map((t=>new o.default(t))),noDataColor:new o.default(t.noDataColor),width:e?(0,c._J)(t.width,e):t.width,opacity:t.opacity}}({name:l.name,tags:l.tags,theme:i,colors:u,noDataColor:t.noDataColor,opacity:1,width:t.width},m)}case"polygon":{const t=n;return function(t,e){return{name:t.name,tags:[...t.tags],theme:t.theme,colors:t.colors.map((t=>new o.default(t))),noDataColor:new o.default(t.noDataColor),outline:{color:new o.default(t.outline.color),width:t.outline.width},opacity:t.opacity,size:e?(0,c._J)(t.size,e):t.size}}({name:l.name,tags:l.tags,theme:i,colors:u,noDataColor:t.noDataColor,opacity:t.fillOpacity||1,outline:t.outline,size:f},m)}case"mesh":{const t=n;return function(t){return{name:t.name,tags:[...t.tags],theme:t.theme,colors:t.colors.map((t=>new o.default(t))),noDataColor:new o.default(t.noDataColor),opacity:t.opacity}}({name:l.name,tags:l.tags,theme:i,colors:u,noDataColor:t.noDataColor,opacity:t.fillOpacity||1})}default:return}}}}]);