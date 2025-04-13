"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[5669,55737,61348,79538],{2925:(e,t,n)=>{n.d(t,{$:()=>M,IB:()=>u,Iy:()=>U,KV:()=>Z,N2:()=>k,QP:()=>G,RH:()=>I,Vl:()=>B,Ws:()=>F,ZD:()=>S,_L:()=>z,bJ:()=>C,e$:()=>D,f6:()=>O,hw:()=>N,pW:()=>R,pf:()=>E,rs:()=>x,sn:()=>J,we:()=>q});var a=n(88102),r=n(62631),o=n(82301),i=n(64682),s=n(60548),l=n(24646);function u(e){return"r"in e&&"g"in e&&"b"in e}function c(e){return"h"in e&&"s"in e&&"v"in e}function m(e){return"l"in e&&"a"in e&&"b"in e}function d(e){return"l"in e&&"c"in e&&"h"in e}const f=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],h=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function p(e,t){const n=[];let a,r;if(e[0].length!==t.length)throw new Error("dimensions do not match");const o=e.length,i=e[0].length;let s=0;for(a=0;a<o;a++){for(s=0,r=0;r<i;r++)s+=e[a][r]*t[r];n.push(s)}return n}function g(e){const t=[e.r/255,e.g/255,e.b/255].map((e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4)),n=p(f,t);return{x:100*n[0],y:100*n[1],z:100*n[2]}}function b(e){const t=p(h,[e.x/100,e.y/100,e.z/100]).map((e=>{const t=e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055;return Math.min(1,Math.max(t,0))}));return{r:Math.round(255*t[0]),g:Math.round(255*t[1]),b:Math.round(255*t[2])}}function y(e){const t=[e.x/95.047,e.y/100,e.z/108.883].map((e=>e>(6/29)**3?e**(1/3):1/3*(29/6)**2*e+4/29));return{l:116*t[1]-16,a:500*(t[0]-t[1]),b:200*(t[1]-t[2])}}function w(e){const t=e.l,n=[(t+16)/116+e.a/500,(t+16)/116,(t+16)/116-e.b/200].map((e=>e>6/29?e**3:3*(6/29)**2*(e-4/29)));return{x:95.047*n[0],y:100*n[1],z:108.883*n[2]}}function v(e){return function(e){const t=e.l,n=e.a,a=e.b,r=Math.sqrt(n*n+a*a);let o=Math.atan2(a,n);return o=o>0?o:o+2*Math.PI,{l:t,c:r,h:o}}(y(g(e)))}function T(e){return b(w(function(e){const t=e.l,n=e.c,a=e.h;return{l:t,a:n*Math.cos(a),b:n*Math.sin(a)}}(e)))}function M(e){return u(e)?e:d(e)?T(e):m(e)?function(e){return b(w(e))}(e):function(e){return"x"in e&&"y"in e&&"z"in e}(e)?b(e):c(e)?function(e){const t=(e.h+360)%360/60,n=e.s/100,a=e.v/100*255,r=a*n,o=r*(1-Math.abs(t%2-1));let i;switch(Math.floor(t)){case 0:i={r:r,g:o,b:0};break;case 1:i={r:o,g:r,b:0};break;case 2:i={r:0,g:r,b:o};break;case 3:i={r:0,g:o,b:r};break;case 4:i={r:o,g:0,b:r};break;case 5:case 6:i={r:r,g:0,b:o};break;default:i={r:0,g:0,b:0}}return i.r=Math.round(i.r+a-r),i.g=Math.round(i.g+a-r),i.b=Math.round(i.b+a-r),i}(e):e}function k(e){return c(e)?e:function(e){const t=e.r,n=e.g,a=e.b,r=Math.max(t,n,a),o=r-Math.min(t,n,a);let i=r,s=0===o?0:r===t?(n-a)/o%6:r===n?(a-t)/o+2:(t-n)/o+4,l=0===o?0:o/i;return s<0&&(s+=6),s*=60,l*=100,i*=100/255,{h:s,s:l,v:i}}(M(e))}function S(e){return m(e)?e:function(e){return y(g(e))}(M(e))}function I(e){return d(e)?e:v(M(e))}function x(e){return L(e).isBright?"light":"dark"}function L(e){let{r:t,g:n,b:r,a:o}=e;return o<1&&(t=Math.round(o*t+255*(1-o)),n=Math.round(o*n+255*(1-o)),r=Math.round(o*r+255*(1-o))),new a.default({r:t,g:n,b:r})}function F(e,t){const{r:n,g:a,b:r}=t?.ignoreAlpha?e:L(e);return.2126*n+.7152*a+.0722*r}var R,$;function C(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:R.High;return F(e,{ignoreAlpha:!0})>t?new a.default([0,0,0,e.a]):new a.default([255,255,255,e.a])}function D(e,t){const n=S(e);n.l*=1-t;const a=M(n),r=e.clone();return r.setColor(a),r.a=e.a,r}function z(e,t){const n=e.clone();return n.a*=t,n}function B(e,t){const n=k(e);n.s*=t;const a=M(n),r=e.clone();return r.setColor(a),r.a=e.a,r}function G(e){return a.default.toUnitRGBA(e)}function N(e,t){return e===t||null!=e&&e.equals(t)}function q(e,t){return e===t||null!=e&&null!=t&&(0,s.e)(e,t)}function E(e){return(0,l.fA)(e[0],e[1],e[2],e.length>3?e[3]:1)}function Z(e){return e[0]??=0,e[1]??=0,e[2]??=0,e}function J(e){return e.length=4,Z(e),e[3]??=1,(0,i.qE)(e[3],0,1),e}function O(e,t){const n=a.default.toUnitRGBA(e);return n[3]*=t,n}function U(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(0===e.length||t<=0)return[];if(1===(e=e.map((e=>"string"==typeof e?new a.default(e):e))).length||1===t){const n=[],a=e[0];for(let e=0;e<t;e++)n.push(a.clone());return n}if(n.shuffle&&(e=(0,r.k4)((0,o.clone)(e),n.seed)),e.length>=t){const n=[],a=(e.length-1)/(t-1);for(let r=0;r<t;r++){const t=Math.round(r*a);n.push(e[t].clone())}return n}return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=[],o=e.length-1,i=Math.ceil((t-e.length)/o);e:for(let r=0;r<o;r++){const o=e[r],s=e[r+1];for(let r=1;r<=i;r++){const l=r/(i+1);if(a.push(A(o,s,l,n)),a.length+e.length===t)break e}}return[...e.map((e=>e.clone())),...(0,r.k4)(a,n.seed??1)]}(e,t,n)}($=R||(R={}))[$.Low=160]="Low",$[$.High=225]="High";const H=(e,t)=>{const n=Math.floor(10*t())-5;return Math.min(255,Math.max(0,e+n))};function A(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const i=e.r,s=e.g,l=e.b,u=t.r,c=t.g,m=t.b,d=Math.round(i+(u-i)*n),f=Math.round(s+(c-s)*n),h=Math.round(l+(m-l)*n);if(!o.offset)return new a.default([d,f,h]);const p=(0,r.Mo)(o.seed);return new a.default([H(d,p),H(f,p),H(h,p)])}},22420:(e,t,n)=>{n.d(t,{GP:()=>d,LI:()=>c,lc:()=>l,u5:()=>u});n(88677);var a=n(23224);const r=/^-?(\d+)(\.(\d+))?$/i;function o(e,t){return e-t}function i(e,t){let n,a;return n=Number(e.toFixed(t)),n<e?a=n+1/10**t:(a=n,n-=1/10**t),n=Number(n.toFixed(t)),a=Number(a.toFixed(t)),[n,a]}function s(e,t,n,a,r){const o=u(e,t,n,a),i=null==o.previous||o.previous<=r,s=null==o.next||o.next<=r;return i&&s||o.previous+o.next<=2*r}function l(e){const t=String(e),n=t.match(r);if(n?.[1])return{integer:n[1].split("").length,fractional:n[3]?n[3].split("").length:0};if(t.toLowerCase().includes("e")){const e=t.split("e"),n=e[0],a=e[1];if(n&&a){const e=Number(n);let t=Number(a);const r=t>0;r||(t=Math.abs(t));const o=l(e);return r?(o.integer+=t,t>o.fractional?o.fractional=0:o.fractional-=t):(o.fractional+=t,t>o.integer?o.integer=1:o.integer-=t),o}}return{integer:0,fractional:0}}function u(e,t,n,a){const r={previous:null,next:null};if(null!=n){const a=e-n,o=t-n-a;r.previous=Math.floor(Math.abs(100*o/a))}if(null!=a){const n=a-e,o=a-t-n;r.next=Math.floor(Math.abs(100*o/n))}return r}function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=e.slice(),{tolerance:a=2,strictBounds:r=!1,indexes:u=n.map(((e,t)=>t))}=t;u.sort(o);for(let o=0;o<u.length;o++){const e=u[o],t=n[e],c=0===e?null:n[e-1],m=e===n.length-1?null:n[e+1],d=l(t).fractional;if(d){let l,u=0,f=!1;for(;u<=d&&!f;){const e=i(t,u);l=r&&0===o?e[1]:e[0],f=s(t,l,c,m,a),u++}f&&(n[e]=l)}}return n}const m={maximumFractionDigits:20};function d(e){return(0,a.ZV)(e,m)}},28245:(e,t,n)=>{n.d(t,{bG:()=>i,Ty:()=>l,YJ:()=>u,Fq:()=>c,vt:()=>s});var a=n(82301),r=n(79538);class o{constructor(e){const{name:t,label:n,description:a,schemes:o}=e;this.name=t,this.label=n,this.description=a,this.schemes=o;const i=e.basemapGroups||r.Np;let s=[];Object.keys(i).forEach((e=>{s=s.concat(i[e])})),this.supportedBasemaps=s,this.basemapGroups=i}isBasemapSupported(e){const t=(0,r.T1)(e,this.supportedBasemaps);return!(!t||!this.supportedBasemaps.includes(t))}getRawSchemes(e){const{basemapId:t,basemapTheme:n}=function(e,t,n){let a=null,o=null;if(t&&(a=(0,r.T1)(t,e,!1),a)){const e=(0,r.BV)(a);null!=e&&(o=e)}return!a&&n&&(a="dark"===n?"dark-gray":"gray",o=n),a||o||(a="gray",o="light"),{basemapId:a,basemapTheme:o}}(this.supportedBasemaps,e.basemap,e.basemapTheme);let o=n;if(t){const e=(0,r.BV)(t,this.basemapGroups);null!=e&&(o=e)}let i=e.geometryType;"multipoint"===i?i="point":"mesh"===i&&(i="polygon");const s=this.schemes[i]||this.schemes.default;return{schemesInfo:(0,a.clone)(s[o]),basemapId:t,basemapTheme:n}}}function i(e){const t=e.themeDictionary,n=new Map;for(const a in t){const e=t[a];n.set(a,new o(e))}return n}function s(e,t){const n=[];return e.forEach((e=>{e.isBasemapSupported(t)&&n.push({name:e.name,label:e.label,description:e.description,basemaps:[...e.supportedBasemaps]})})),n}function l(e,t){if(!e)return;if(!t)return;let n=null;const a=[t.primaryScheme,...t.secondarySchemes];for(const r of a)if(r.name?.toLowerCase()===e.toLowerCase()){n=r;break}return n}function u(e,t,n){if(!e&&!t)return[];if(!n)return[];const a=!e?.length,r=!t?.length,o=[n.primaryScheme,...n.secondarySchemes],i=[];for(const s of o){const n=!!a||e.some((e=>s.tags.includes(e))),o=!r&&t.some((e=>s.tags.includes(e)));n&&!o&&i.push(s)}return i}function c(e){const t=e.theme;if(t)return t.getRawSchemes({basemap:e.basemap,geometryType:e.geometryType,basemapTheme:e.basemapTheme})}},29056:(e,t,n)=>{n.r(t),n.d(t,{createRenderer:()=>y,updateRenderer:()=>w});var a=n(88102),r=n(2925),o=n(74719),i=n(93231),s=n(45023),l=n(54823),u=n(98785),c=n(39569),m=n(61348),d=n(79538),f=n(2938),h=n(55737);const p=.01;async function g(e,t){const{field:n,basemap:o,radius:u,fadeToTransparent:m,heatmapScheme:d,view:f}=t,{scheme:g,basemapId:y,basemapTheme:w}=await async function(e){let t=e.scheme,n=null,a=null;const r=await(0,c.Ib)(e.basemap,e.view);if(n=null!=r.basemapId?r.basemapId:null,a=null!=r.basemapTheme?r.basemapTheme:null,t)return{scheme:(0,h.cloneScheme)(t),basemapId:n,basemapTheme:a};const o=(0,h.getSchemes)({basemapTheme:a});return o&&(t=o.primaryScheme,n=o.basemapId,a=o.basemapTheme),{scheme:t,basemapId:n,basemapTheme:a}}({basemap:o,scheme:d,view:f}),v=g.colors,T=v.length,M=null==e.min,k=M?[0,.04]:[e.min,e.max];let S;const I=t.fadeRatio??0,x=t.maxRatio??0,L=t.minRatio??0,F=(x-L)/(T-1),R=v[0],$=m?L:p,C=[new l.default({ratio:0,color:new a.default([R.r,R.g,R.b,0])}),new l.default({ratio:p,color:new a.default([R.r,R.g,R.b,0])}),new l.default({ratio:$,color:new a.default([R.r,R.g,R.b,$])})];return(0,r.Iy)(v,T).forEach(((e,t)=>{const n=L+F*t;C.push(new l.default({ratio:n,color:e}))})),m&&(b(C,I),S=new s.default({fadeRatio:I})),{renderer:new i.default({authoringInfo:S,radius:u,colorStops:C,field:n,minDensity:k[0],maxDensity:k[1]}),statistics:e,defaultValuesUsed:M,scheme:(0,h.cloneScheme)(g),basemapId:y,basemapTheme:w}}function b(e,t){const n=10*(1-t)+1,a=e.length-3,r=e[2].color.a;e.forEach(((e,o)=>{if(o<=2)return;const{color:i}=e,s=(o-3)/a;i.a=0===t?1:Math.min(Math.max(s*n+s+r,r),1)}))}async function y(e){const t=await async function(e){if(!e?.layer||!e.view)throw new o.default("heatmap-renderer:missing-parameters","'layer' and 'view' parameters are required");const t={...e,layer:e.layer,view:e.view};t.radius??=null==t.blurRadius?18:(0,u.zp)(t.blurRadius),t.minRatio??=.01,t.maxRatio??=1,t.fadeRatio??=.2,t.fadeToTransparent??=!0;const n=[f.mb.CSVLayer,f.mb.FeatureLayer,f.mb.GeoJSONLayer,f.mb.KnowledgeGraphSublayer,f.mb.OGCFeatureLayer,f.mb.OrientedImageryLayer,f.mb.ParquetLayer,f.mb.StreamLayer,f.mb.WFSLayer],a=(0,f.Jg)(t.layer,n);if(!a)throw new o.default("heatmap-renderer:invalid-parameters","'layer' must be one of these types: "+(0,f.Ho)(n).join(", "));t.layer=a;const r=null!=t.signal?{signal:t.signal}:null;await a.load(r);const i=await(0,d.EG)({field:t.field}),s=(0,c.MH)(a,i,"heatmap-renderer:invalid-parameters");if(s)throw s;return t}(e);return g(t.statistics??await(0,m.default)({layer:t.layer,field:t.field,radius:t.radius,view:t.view,filter:t.filter,signal:t.signal}),t)}function w(e){const{fadeRatio:t,renderer:n}=e,a=n.clone(),r=t??(a?.authoringInfo?.fadeRatio||0);return b(a.colorStops,r),a.authoringInfo?a.authoringInfo.fadeRatio=r:a.authoringInfo=new s.default({fadeRatio:r}),a}},55737:(e,t,n)=>{n.r(t),n.d(t,{cloneScheme:()=>d,getSchemeByName:()=>c,getSchemes:()=>u,getSchemesByTag:()=>m,getThemes:()=>l});var a=n(88102),r=n(62631),o=n(43073),i=n(28245);const s=(0,i.bG)({themeDictionary:{default:{name:"default",label:"Default",description:"Default theme for visualizing features using heatmap.",schemes:{default:{light:{primary:"heatmap-v1",secondary:["heatmap-v2","heatmap-v3","heatmap-plasma","heatmap-cividis","neutral-yellow-orange","neutral-yellow-green","neutral-yellow-purple","neutral-yellow-magenta","neutral-white-blue","neutral-white-blue-metal","neutral-white-gold","neutral-yellow-bronze","heatmap-v4","heatmap-viridis","heatmap-magma","heatmap-inferno","dark-yellow-orange","dark-yellow-green","dark-yellow-purple","dark-yellow-magenta","dark-white-blue","dark-white-blue-metal","dark-white-gold","dark-yellow-bronze"]},dark:{primary:"heatmap-v4",secondary:["heatmap-inferno","heatmap-viridis","heatmap-magma","dark-white-blue","dark-yellow-orange","dark-yellow-green","dark-yellow-purple","dark-yellow-magenta","dark-white-blue-metal","dark-white-gold","dark-yellow-bronze","heatmap-v1","heatmap-v2","heatmap-v3","heatmap-plasma","heatmap-cividis","neutral-yellow-orange","neutral-yellow-green","neutral-yellow-purple","neutral-yellow-magenta","neutral-white-blue","neutral-white-blue-metal","neutral-white-gold","neutral-yellow-bronze"]}}}}}});function l(e){return(0,i.vt)(s,e)}function u(e){const t="default",n=(0,i.Fq)({basemap:e.basemap,basemapTheme:e.basemapTheme,theme:s.get(t)});if(!n)return;const{schemesInfo:a,basemapId:o,basemapTheme:l}=n,u=`${t}/${o}/`;return{primaryScheme:f(a.primary,u+a.primary),secondarySchemes:a.secondary.map((e=>f(e,u+e))).filter(r.Ru),basemapId:o,basemapTheme:l}}function c(e){return(0,i.Ty)(e.name,u(e))}function m(e){return(0,i.YJ)(e.includedTags,e.excludedTags,u(e))}function d(e){if(!e)return;const t={...e};return t.colors=t.colors.map((e=>new a.default(e))),t.tags=[...t.tags],t}function f(e,t){const n=o.A[e];if(n)return function(e){return{id:e.id,name:e.name,tags:[...e.tags],colors:e.colors.map((e=>new a.default(e))),opacity:e.opacity}}({id:t,name:n.name,tags:n.tags,colors:n.stops??[],opacity:.7})}},61348:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(74719),r=n(95011),o=n(98785),i=n(70934),s=n(79538),l=n(2938);const u=r.numericTypes;async function c(e){const{layerAdapter:t,...n}=await async function(e){if(!e?.layer||!e.view)throw new a.default("heatmap-statistics:missing-parameters","'layer' and 'view' parameters are required");const t=[l.mb.CSVLayer,l.mb.FeatureLayer,l.mb.GeoJSONLayer,l.mb.KnowledgeGraphSublayer,l.mb.OGCFeatureLayer,l.mb.OrientedImageryLayer,l.mb.ParquetLayer,l.mb.StreamLayer,l.mb.WFSLayer],{layer:n,...r}=e,c=(0,l.Jg)(n,t);if(!c)throw new a.default("heatmap-statistics:invalid-parameters","'layer' must be one of these types: "+(0,l.Ho)(t).join(", "));const m={layerAdapter:c,...r};m.radius=null==m.radius?null==m.blurRadius?18:(0,o.zp)(m.blurRadius):m.radius;const d=null!=m.signal?{signal:m.signal}:null;await c.load(d);const f=m.field,h=f?c.getField(f):null,p=await(0,s.EG)({field:f}),g=(0,i.MH)(c,p,"heatmap-statistics:invalid-parameters");if(g)throw g;if(h){const e=(0,i.a)(c,h,"heatmap-statistics:invalid-parameters",u);if(e)throw e}return m}(e);return t.heatmapStatistics(n)}},79538:(e,t,n)=>{n.d(t,{BV:()=>I,EG:()=>w,Lk:()=>S,Ll:()=>F,Np:()=>c,R3:()=>L,SO:()=>h,T1:()=>x,UH:()=>u,Wy:()=>v,XR:()=>f,aM:()=>k,fs:()=>y,i0:()=>R,i3:()=>b});var a=n(66845),r=n(95011),o=n(96247),i=n(76983),s=n(73210),l=n(40731);const u=",",c={light:["streets","gray","topo","terrain","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector","topo-3d","navigation-3d","streets-3d","osm-3d","gray-3d"],dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector","navigation-dark-3d","streets-dark-3d","dark-gray-3d"]},m="percent-of-total",d="field",f={exclude:["median"]},h={years:365,months:30,days:1,hours:1/24,minutes:1/1440,seconds:1/86400,milliseconds:1/864e5},p=new Set(["integer","small-integer"]);let g=null;const b=["date","date-only","timestamp-offset"];function y(e){return(0,r.isDateField)(e)||(0,r.isDateOnlyField)(e)||(0,r.isTimestampOffsetField)(e)}async function w(e){const{field:t,field2:n,field3:a,normalizationField:r,valueExpression:i}=e;let s=[];if(i){if(!g){const{arcadeUtils:e}=await(0,o.lw)();g=e}s=g.extractFieldNames(i)}return t&&s.push(t),n&&s.push(n),a&&s.push(a),r&&s.push(r),s}function v(e){let t=e.normalizationType;return t||(e.normalizationField?t=d:null!=e.normalizationTotal&&(t=m)),t??void 0}function T(e){return String(e).padStart(2,"0")}function M(e,t,n){let a;return"date"===t||"number"===t?("number"===t&&(e=new Date(e)),a=`TIMESTAMP'${n?e.getFullYear():e.getUTCFullYear()}-${T((n?e.getMonth():e.getUTCMonth())+1)}-${T(n?e.getDate():e.getUTCDate())} ${T(n?e.getHours():e.getUTCHours())}:${T(n?e.getMinutes():e.getUTCMinutes())}:${T(n?e.getSeconds():e.getUTCSeconds())}'`):a=e,a}function k(e,t,n,a){const{hasQueryEngine:r}=e,o=`(${M(n,S(e,n),r)} - ${M(t,S(e,t),r)})`;let i=h[a],s="/";return i<1&&(i=1/i,s="*"),{sqlExpression:1===i?o:`(${o} ${s} ${i})`,sqlWhere:null}}function S(e,t){if(t instanceof Date)return"date";if("number"==typeof t)return"number";if("string"==typeof t){const n=e.getField(t);if("<now>"===t.toLowerCase())return;if((0,r.isDateField)(n))return"field"}}function I(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c;for(const n in t)if(t[n].includes(e))return n}function x(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=null;return e&&("string"==typeof e?t.includes(e)&&(a=e):a=(0,i.q3)(e)),n?a||"gray":a}function L(e,t){const n=t&&e.getField(t);return!!n&&p.has(n.type)}function F(e){return`cast(${e} as float)`}function R(e,t){const{format:n,timeZoneOptions:r,fieldType:o}=t??{};let i,u;if(r&&({timeZone:i,timeZoneName:u}=(0,l.hv)(r.layerTimeZone,r.datesInUnknownTimezone,r.viewTimeZone,(0,a.J2)(n||"short-date-short-time"),o)),"string"==typeof e&&isNaN(Date.parse("time-only"===o?`1970-01-01T${e}Z`:e)))return e;switch(o){case"date-only":{const t=(0,a.J2)(n||"short-date");return"string"==typeof e?(0,a.iS)(e,{...t}):(0,a.Yq)(e,{...t,timeZone:s.n$})}case"time-only":{const t=(0,a.J2)(n||"short-time");return"string"==typeof e?(0,a.F8)(e,t):(0,a.Yq)(e,{...t,timeZone:s.n$})}case"timestamp-offset":{if(!i&&"string"==typeof e&&new Date(e).toISOString()!==e)return e;const t=n||r?(0,a.J2)(n||"short-date-short-time"):void 0,o=t?{...t,timeZone:i,timeZoneName:u}:void 0;return"string"==typeof e?(0,a.Ey)(e,o):(0,a.Yq)(e,o)}default:{const t=n||r?(0,a.J2)(n||"short-date-short-time"):void 0;return(0,a.Yq)("string"==typeof e?new Date(e):e,t?{...t,timeZone:i,timeZoneName:u}:void 0)}}}}}]);