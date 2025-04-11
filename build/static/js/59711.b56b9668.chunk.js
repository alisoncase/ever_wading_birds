"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[34472,40663,59711,63044,79538,82092],{2925:(e,t,n)=>{n.d(t,{$:()=>x,IB:()=>u,Iy:()=>G,KV:()=>Z,N2:()=>M,QP:()=>$,RH:()=>z,Vl:()=>N,Ws:()=>k,ZD:()=>T,_L:()=>q,bJ:()=>D,e$:()=>F,f6:()=>L,hw:()=>O,pW:()=>I,pf:()=>R,rs:()=>E,sn:()=>A,we:()=>C});var r=n(88102),i=n(62631),a=n(82301),s=n(64682),o=n(60548),l=n(24646);function u(e){return"r"in e&&"g"in e&&"b"in e}function c(e){return"h"in e&&"s"in e&&"v"in e}function f(e){return"l"in e&&"a"in e&&"b"in e}function d(e){return"l"in e&&"c"in e&&"h"in e}const m=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],p=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function h(e,t){const n=[];let r,i;if(e[0].length!==t.length)throw new Error("dimensions do not match");const a=e.length,s=e[0].length;let o=0;for(r=0;r<a;r++){for(o=0,i=0;i<s;i++)o+=e[r][i]*t[i];n.push(o)}return n}function g(e){const t=[e.r/255,e.g/255,e.b/255].map((e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4)),n=h(m,t);return{x:100*n[0],y:100*n[1],z:100*n[2]}}function y(e){const t=h(p,[e.x/100,e.y/100,e.z/100]).map((e=>{const t=e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055;return Math.min(1,Math.max(t,0))}));return{r:Math.round(255*t[0]),g:Math.round(255*t[1]),b:Math.round(255*t[2])}}function b(e){const t=[e.x/95.047,e.y/100,e.z/108.883].map((e=>e>(6/29)**3?e**(1/3):1/3*(29/6)**2*e+4/29));return{l:116*t[1]-16,a:500*(t[0]-t[1]),b:200*(t[1]-t[2])}}function v(e){const t=e.l,n=[(t+16)/116+e.a/500,(t+16)/116,(t+16)/116-e.b/200].map((e=>e>6/29?e**3:3*(6/29)**2*(e-4/29)));return{x:95.047*n[0],y:100*n[1],z:108.883*n[2]}}function w(e){return function(e){const t=e.l,n=e.a,r=e.b,i=Math.sqrt(n*n+r*r);let a=Math.atan2(r,n);return a=a>0?a:a+2*Math.PI,{l:t,c:i,h:a}}(b(g(e)))}function S(e){return y(v(function(e){const t=e.l,n=e.c,r=e.h;return{l:t,a:n*Math.cos(r),b:n*Math.sin(r)}}(e)))}function x(e){return u(e)?e:d(e)?S(e):f(e)?function(e){return y(v(e))}(e):function(e){return"x"in e&&"y"in e&&"z"in e}(e)?y(e):c(e)?function(e){const t=(e.h+360)%360/60,n=e.s/100,r=e.v/100*255,i=r*n,a=i*(1-Math.abs(t%2-1));let s;switch(Math.floor(t)){case 0:s={r:i,g:a,b:0};break;case 1:s={r:a,g:i,b:0};break;case 2:s={r:0,g:i,b:a};break;case 3:s={r:0,g:a,b:i};break;case 4:s={r:a,g:0,b:i};break;case 5:case 6:s={r:i,g:0,b:a};break;default:s={r:0,g:0,b:0}}return s.r=Math.round(s.r+r-i),s.g=Math.round(s.g+r-i),s.b=Math.round(s.b+r-i),s}(e):e}function M(e){return c(e)?e:function(e){const t=e.r,n=e.g,r=e.b,i=Math.max(t,n,r),a=i-Math.min(t,n,r);let s=i,o=0===a?0:i===t?(n-r)/a%6:i===n?(r-t)/a+2:(t-n)/a+4,l=0===a?0:a/s;return o<0&&(o+=6),o*=60,l*=100,s*=100/255,{h:o,s:l,v:s}}(x(e))}function T(e){return f(e)?e:function(e){return b(g(e))}(x(e))}function z(e){return d(e)?e:w(x(e))}function E(e){return V(e).isBright?"light":"dark"}function V(e){let{r:t,g:n,b:i,a:a}=e;return a<1&&(t=Math.round(a*t+255*(1-a)),n=Math.round(a*n+255*(1-a)),i=Math.round(a*i+255*(1-a))),new r.default({r:t,g:n,b:i})}function k(e,t){const{r:n,g:r,b:i}=t?.ignoreAlpha?e:V(e);return.2126*n+.7152*r+.0722*i}var I,B;function D(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:I.High;return k(e,{ignoreAlpha:!0})>t?new r.default([0,0,0,e.a]):new r.default([255,255,255,e.a])}function F(e,t){const n=T(e);n.l*=1-t;const r=x(n),i=e.clone();return i.setColor(r),i.a=e.a,i}function q(e,t){const n=e.clone();return n.a*=t,n}function N(e,t){const n=M(e);n.s*=t;const r=x(n),i=e.clone();return i.setColor(r),i.a=e.a,i}function $(e){return r.default.toUnitRGBA(e)}function O(e,t){return e===t||null!=e&&e.equals(t)}function C(e,t){return e===t||null!=e&&null!=t&&(0,o.e)(e,t)}function R(e){return(0,l.fA)(e[0],e[1],e[2],e.length>3?e[3]:1)}function Z(e){return e[0]??=0,e[1]??=0,e[2]??=0,e}function A(e){return e.length=4,Z(e),e[3]??=1,(0,s.qE)(e[3],0,1),e}function L(e,t){const n=r.default.toUnitRGBA(e);return n[3]*=t,n}function G(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(0===e.length||t<=0)return[];if(1===(e=e.map((e=>"string"==typeof e?new r.default(e):e))).length||1===t){const n=[],r=e[0];for(let e=0;e<t;e++)n.push(r.clone());return n}if(n.shuffle&&(e=(0,i.k4)((0,a.clone)(e),n.seed)),e.length>=t){const n=[],r=(e.length-1)/(t-1);for(let i=0;i<t;i++){const t=Math.round(i*r);n.push(e[t].clone())}return n}return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=[],a=e.length-1,s=Math.ceil((t-e.length)/a);e:for(let i=0;i<a;i++){const a=e[i],o=e[i+1];for(let i=1;i<=s;i++){const l=i/(s+1);if(r.push(U(a,o,l,n)),r.length+e.length===t)break e}}return[...e.map((e=>e.clone())),...(0,i.k4)(r,n.seed??1)]}(e,t,n)}(B=I||(I={}))[B.Low=160]="Low",B[B.High=225]="High";const J=(e,t)=>{const n=Math.floor(10*t())-5;return Math.min(255,Math.max(0,e+n))};function U(e,t,n){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const s=e.r,o=e.g,l=e.b,u=t.r,c=t.g,f=t.b,d=Math.round(s+(u-s)*n),m=Math.round(o+(c-o)*n),p=Math.round(l+(f-l)*n);if(!a.offset)return new r.default([d,m,p]);const h=(0,i.Mo)(a.seed);return new r.default([J(d,h),J(m,h),J(p,h)])}},22420:(e,t,n)=>{n.d(t,{GP:()=>d,LI:()=>c,lc:()=>l,u5:()=>u});n(88677);var r=n(23224);const i=/^-?(\d+)(\.(\d+))?$/i;function a(e,t){return e-t}function s(e,t){let n,r;return n=Number(e.toFixed(t)),n<e?r=n+1/10**t:(r=n,n-=1/10**t),n=Number(n.toFixed(t)),r=Number(r.toFixed(t)),[n,r]}function o(e,t,n,r,i){const a=u(e,t,n,r),s=null==a.previous||a.previous<=i,o=null==a.next||a.next<=i;return s&&o||a.previous+a.next<=2*i}function l(e){const t=String(e),n=t.match(i);if(n?.[1])return{integer:n[1].split("").length,fractional:n[3]?n[3].split("").length:0};if(t.toLowerCase().includes("e")){const e=t.split("e"),n=e[0],r=e[1];if(n&&r){const e=Number(n);let t=Number(r);const i=t>0;i||(t=Math.abs(t));const a=l(e);return i?(a.integer+=t,t>a.fractional?a.fractional=0:a.fractional-=t):(a.fractional+=t,t>a.integer?a.integer=1:a.integer-=t),a}}return{integer:0,fractional:0}}function u(e,t,n,r){const i={previous:null,next:null};if(null!=n){const r=e-n,a=t-n-r;i.previous=Math.floor(Math.abs(100*a/r))}if(null!=r){const n=r-e,a=r-t-n;i.next=Math.floor(Math.abs(100*a/n))}return i}function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=e.slice(),{tolerance:r=2,strictBounds:i=!1,indexes:u=n.map(((e,t)=>t))}=t;u.sort(a);for(let a=0;a<u.length;a++){const e=u[a],t=n[e],c=0===e?null:n[e-1],f=e===n.length-1?null:n[e+1],d=l(t).fractional;if(d){let l,u=0,m=!1;for(;u<=d&&!m;){const e=s(t,u);l=i&&0===a?e[1]:e[0],m=o(t,l,c,f,r),u++}m&&(n[e]=l)}}return n}const f={maximumFractionDigits:20};function d(e){return(0,r.ZV)(e,f)}},28245:(e,t,n)=>{n.d(t,{bG:()=>s,Ty:()=>l,YJ:()=>u,Fq:()=>c,vt:()=>o});var r=n(82301),i=n(79538);class a{constructor(e){const{name:t,label:n,description:r,schemes:a}=e;this.name=t,this.label=n,this.description=r,this.schemes=a;const s=e.basemapGroups||i.Np;let o=[];Object.keys(s).forEach((e=>{o=o.concat(s[e])})),this.supportedBasemaps=o,this.basemapGroups=s}isBasemapSupported(e){const t=(0,i.T1)(e,this.supportedBasemaps);return!(!t||!this.supportedBasemaps.includes(t))}getRawSchemes(e){const{basemapId:t,basemapTheme:n}=function(e,t,n){let r=null,a=null;if(t&&(r=(0,i.T1)(t,e,!1),r)){const e=(0,i.BV)(r);null!=e&&(a=e)}return!r&&n&&(r="dark"===n?"dark-gray":"gray",a=n),r||a||(r="gray",a="light"),{basemapId:r,basemapTheme:a}}(this.supportedBasemaps,e.basemap,e.basemapTheme);let a=n;if(t){const e=(0,i.BV)(t,this.basemapGroups);null!=e&&(a=e)}let s=e.geometryType;"multipoint"===s?s="point":"mesh"===s&&(s="polygon");const o=this.schemes[s]||this.schemes.default;return{schemesInfo:(0,r.clone)(o[a]),basemapId:t,basemapTheme:n}}}function s(e){const t=e.themeDictionary,n=new Map;for(const r in t){const e=t[r];n.set(r,new a(e))}return n}function o(e,t){const n=[];return e.forEach((e=>{e.isBasemapSupported(t)&&n.push({name:e.name,label:e.label,description:e.description,basemaps:[...e.supportedBasemaps]})})),n}function l(e,t){if(!e)return;if(!t)return;let n=null;const r=[t.primaryScheme,...t.secondarySchemes];for(const i of r)if(i.name?.toLowerCase()===e.toLowerCase()){n=i;break}return n}function u(e,t,n){if(!e&&!t)return[];if(!n)return[];const r=!e?.length,i=!t?.length,a=[n.primaryScheme,...n.secondarySchemes],s=[];for(const o of a){const n=!!r||e.some((e=>o.tags.includes(e))),a=!i&&t.some((e=>o.tags.includes(e)));n&&!a&&s.push(o)}return s}function c(e){const t=e.theme;if(t)return t.getRawSchemes({basemap:e.basemap,geometryType:e.geometryType,basemapTheme:e.basemapTheme})}},34472:(e,t,n)=>{n.r(t),n.d(t,{cloneScheme:()=>h,getSchemeByName:()=>m,getSchemes:()=>d,getSchemesByTag:()=>p,getThemes:()=>f});var r=n(88102),i=n(62631),a=n(2925),s=n(43073),o=n(28245);const l={light:{color:[153,153,153,.25],width:"1px"},dark:{color:[153,153,153,.25],width:"1px"}},u=["vibrant-rainbow","cat-dark","predominant-v2","predominant-v1","predominance-race","desert-blooms","tropical-bliss","under-the-sea","ocean-bay","cat-light","predominant-v4","predominance-money","predominant-v3","predominance-race-ethnic","pastel-chalk","predominance-rainbow","predominance-sequence","cat-popup-olympic-sunset"],c=(0,o.bG)({themeDictionary:{default:{name:"default",label:"Default",description:"Default theme for visualizing features using the density of randomly placed dots.",schemes:{default:{light:{primary:"predominant-v5",secondary:u,common:{outline:l.light,fillOpacity:.8}},dark:{primary:"predominant-v5",secondary:u,common:{outline:l.dark,fillOpacity:.8}}}}}}});function f(e){return(0,o.vt)(c,e)}function d(e){const t=(0,o.Fq)({basemap:e.basemap,basemapTheme:e.basemapTheme,theme:c.get("default")});if(!t)return;const{schemesInfo:n,basemapId:r,basemapTheme:a}=t,s=n.common,l=e.numColors;return{primaryScheme:g(n.primary,s,l),secondarySchemes:n.secondary.map((e=>g(e,s,l))).filter(i.Ru),basemapId:r,basemapTheme:a}}function m(e){return(0,o.Ty)(e.name,d(e))}function p(e){return(0,o.YJ)(e.includedTags,e.excludedTags,d(e))}function h(e){if(!e)return;const t={...e};return t.tags=[...t.tags],t.colors&&(t.colors=t.colors.map((e=>new r.default(e)))),t.outline&&(t.outline={color:t.outline.color&&new r.default(t.outline.color),width:t.outline.width}),t}function g(e,t,n){const i=s.A[e];if(i)return function(e){return{name:e.name,tags:[...e.tags],colors:e.colors.map((e=>new r.default(e))),outline:{color:new r.default(e.outline.color),width:e.outline.width},opacity:e.opacity}}({name:i.name,tags:i.tags,colors:i[n]||(0,a.Iy)(i.stops,n),opacity:t.fillOpacity,outline:t.outline})}},40663:(e,t,n)=>{n.d(t,{AC:()=>i,DW:()=>l,Hj:()=>S,Ih:()=>h,Jy:()=>f,OW:()=>y,Rv:()=>u,UJ:()=>o,_i:()=>c,d8:()=>m,fs:()=>d,kc:()=>p,ke:()=>w,mE:()=>a,wx:()=>s});var r=n(74719);async function i(e,t){const{layer:n,view:i,forBinning:a,filter:s}=e;if(!n||!i)throw new r.default(`${t}:missing-parameters`,"'layer' and 'view' parameters are required");await n.load();const o="featureReduction"in n?n.featureReduction:null;if(a){if("binning"!==o?.type)throw new r.default(`${t}:invalid-parameters`,"'layer' must have 'featureReduction' property defined with 'binning' type when 'forBinning' parameter is true");if(s)throw new r.default(`${t}:invalid-parameters`,"'filter' parameter is not supported when 'forBinning' parameter is true")}return e}async function a(e){const{layer:t,forBinning:n,renderer:i}=e;await t.load();const a="featureReduction"in t?t.featureReduction:null,s=i?.clone()??(n&&"binning"===a?.type?a?.renderer?.clone():"renderer"in t?t.renderer?.clone():null);if(!s)throw new r.default("get-renderer-to-update:invalid-parameters","renderer not available");return s}function s(e,t,n){const r=e?.authoringInfo?.visualVariables;return r?.find((e=>"reference-size"===n?e.type===t&&"reference-size"===e.theme:e.type===t))}function o(e){if(!e)return null;const t=e.type,n="visualVariables"in e?e.visualVariables:null,r=n?.find(h),i=n?.find(y),a=e.authoringInfo,o=s(e,"color"),l=s(e,"size"),u=s(e,"size","reference-size");if("class-breaks"===t){if("univariate-color-size"===a?.type)return"univariate-color-size";if(r)return i?l?.units?"color-size-age":o?.units?"color-age-size":"color-size":o?.units?"color-age":u?"color-size":"color-continuous";if(i)return l?.units?"size-age":"size-continuous";if(e.classBreakInfos.length>1)return"class-breaks-color"===a?.type?"color-class-breaks":"class-breaks-size"===a?.type?"size-class-breaks":null;if(u)return"size-continuous"}return"unique-value"===t?e.valueExpression?"predominance"===a?.type?"predominance":"relationship"===a?.type?i||u?"relationship-size":"relationship":i||u?"type-size":"type":i?l?.units?"type-size-age":"type-size":u?"type-size":"type":"pie-chart"===t?"pie-chart":"dot-density"===t?"dot-density":null}function l(e){return!!e.visualVariables?.some(b)}function u(e){return!!e.visualVariables?.some(v)}function c(e){return e?.findIndex(b)??-1}function f(e){return e?.findIndex(y)??-1}function d(e){return e?.findIndex(h)??-1}function m(e){return e?.findIndex(g)??-1}function p(e){return e?.findIndex(v)??-1}function h(e){return"color"===e.type}function g(e){return"opacity"===e.type}function y(e){return"size"===e.type&&"outline"!==e.target&&"$view.scale"!==e.valueExpression}function b(e){return"size"===e.type&&"outline"===e.target}function v(e){return"size"===e.type&&"$view.scale"===e.valueExpression&&"outline"!==e.target&&Array.isArray(e.stops)}function w(e,t,n){const r=e.visualVariables,i=n(r);if(!t||Array.isArray(t)&&!t.length)return;Array.isArray(t)||(t=[t]);const a=t.map((e=>e.clone()));r?i>-1?r.splice(i,1,...a):r.push(...a):e.visualVariables=a}function S(e,t,n){const r=t?.visualVariables.find((e=>e.type===n)),i=s(e,n);i&&r&&(i.minSliderValue=r.minSliderValue,i.maxSliderValue=r.maxSliderValue,"size"===n&&"reference-size"===i.theme&&(i.sizeStops=r.sizeStops?.map((e=>e.clone())),i.referenceSizeScale=r.referenceSizeScale))}},68990:(e,t,n)=>{n.r(t),n.d(t,{createRenderer:()=>V,regenerateRenderer:()=>k});var r=n(2925),i=n(74719),a=n(11099),s=n(19560),o=n(45023),l=n(70183);function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=Math.round(e);if(n<=1)return 1;const r=n.toString().length;for(let i=r-1>=3?3:r-1;i>=0;i--){const r=10**i,a=Math.floor(e/r)*r,s=Math.ceil(e/r)*r,o=Math.round((a+s)/2),l=Math.abs(e-a)/e*100,u=Math.abs(e-s)/e*100,c=Math.abs(e-o)/e*100,f=Math.min(l,u,c);if(f<=t){if(f===l){n=a;break}if(f===u){n=s;break}if(f===c){n=o;break}}}return n}var c=n(40663),f=n(39569),d=n(46176),m=n(70934),p=n(85151),h=n(79538),g=n(2938);async function y(e){const{layerAdapter:t,...n}=await async function(e){if(!(e&&e.layer&&e.attributes))throw new i.default("summary-statistics-for-attributes:missing-parameters","'layer' and 'attributes' parameters are required");if(e.attributes.some((e=>!!e.valueExpression))&&!e.view)throw new i.default("summary-statistics-for-attributes:missing-parameters","View is required when 'valueExpression' is specified in attributes");e.forBinning&&(0,p.p)(e,"summary-statistics-for-attributes");const{layer:t,...n}=e,r=[g.mb.CSVLayer,g.mb.FeatureLayer,g.mb.OGCFeatureLayer,g.mb.GeoJSONLayer,g.mb.KnowledgeGraphSublayer,g.mb.ParquetLayer,g.mb.WFSLayer],a=e.forBinning?g.Mi:r,s=(0,g.Jg)(t,a,e.forBinning);if(!s)throw new i.default("summary-statistics-for-attributes:invalid-parameters","'layer' must be one of these types: "+(0,g.Ho)(a).join(", "));const o={layerAdapter:s,...n};o.includeZeros=null==o.includeZeros||o.includeZeros,o.includeNegatives=null==o.includeNegatives||o.includeNegatives;const l=o.view,u=null!=o.signal?{signal:o.signal}:null;await Promise.all([l?.when(),s.load(u)]);const c=[];for(const i of o.attributes){const e=await(0,h.EG)({field:i.field,valueExpression:i.valueExpression});Array.prototype.push.apply(c,e)}const f=(0,m.MH)(s,c,"summary-statistics-for-attributes:invalid-parameters");if(f)throw f;return o}(e),r=(0,m.D9)(n.attributes,n.includeZeros,n.includeNegatives);return t.summaryStatistics({valueExpression:r.valueExpression,sqlExpression:r.sqlExpression,sqlWhere:r.sqlWhere,view:n.view,filter:n.filter,outStatisticTypes:h.XR,signal:n.signal})}var b=n(96247);function v(e,t,n){return null!=e&&isFinite(e)&&((t??!0)||0!==e)&&((n??!0)||e>=0)}async function w(e){const{features:t,attributes:n,includeZeros:r,includeNegatives:i,view:a}=e;let s=0,o=0,l=1/0,u=-1/0,c=null;const f=new Map;for(let m=0;m<n.length;m++){const{valueExpression:e}=n[m];if(e){if(!c){const{arcadeUtils:e}=await(0,b.lw)();c=e}f.set(m,c.createFunction(e))}}const d=a?c?.getViewInfo({viewingMode:"2d"===a.type?"map":a.viewingMode,scale:a.scale,spatialReference:a.spatialReference}):null;for(const m of t){const e=m.geometry,t=m.attributes;if(e){const p=e.extent;if(p){const e=p.width*p.height;if(e>0){let p=0;const h=c?.createExecContext(m,d,a?.timeZone);for(let e=0;e<n.length;e++){const{field:a,valueExpression:s}=n[e];let o=null;if(a)o=t[a];else if(s){const t=f.get(e);o=c.executeFunction(t,h)}v(o,r,i)&&(p+=o||0)}if(v(p,r,i)){const t=p/e;++s,o+=t,t<l&&(l=t),t>u&&(u=t)}}}}}return{minDensity:l!==1/0?l:null,maxDensity:u!==-1/0?u:null,avgDensity:s?o/s:null}}var S=n(34472);const x=500;async function M(e){const t=e.view;if(!(e?.layer&&t&&e.attributes?.length))throw new i.default("dot-density-renderer:missing-parameters","'layer', 'view' and 'attributes' parameters are required");if(e.attributes.length>8)throw new i.default("dot-density-renderer:invalid-parameters","Dot density renderer does not support more than 8 attributes");e.forBinning&&(0,p.p)(e,"dot-density-renderer");const n={...e,view:t,layer:e.layer,attributes:e.attributes},r=[g.mb.FeatureLayer,g.mb.ParquetLayer,g.mb.KnowledgeGraphSublayer,g.mb.OGCFeatureLayer,g.mb.GeoJSONLayer,g.mb.WFSLayer],a=e.forBinning?g.Mi:r,s=(0,g.Jg)(n.layer,a,e.forBinning);if(!s)throw new i.default("dot-density-renderer:invalid-parameters","'layer' must be one of these types: "+(0,g.Ho)(a).join(", "));n.dotBlendingEnabled??=!0,n.dotValueOptimizationEnabled??=!0;const o=null!=n.signal?{signal:n.signal}:null;if(await Promise.all([t.when(),s.load(o)]),"polygon"!==s.geometryType)throw new i.default("dot-density-renderer:not-supported","Dot density renderer is supported for polygon layers only");const l=[],u=n.attributes;for(const i of u){const e=await(0,h.EG)({field:i.field,valueExpression:i.valueExpression});l.push(...e)}const c=(0,f.MH)(s,l.filter(Boolean),"dot-density-renderer:invalid-parameters");if(c)throw c;return{...n,layer:s}}function T(e){return{dotValue:1,referenceScale:e.scale,minSliderValue:1,maxSliderValue:100}}async function z(e){const{view:t,layer:n,attributes:r,signal:i,filter:s}=e,o=await n.getSampleFeatures({view:t,sampleSize:x,returnGeometry:!0,filter:s,signal:i},"json"),[l,c]=await Promise.all([(0,d.A)({features:o,geometryType:n.geometryType}),y({layer:n,attributes:r,filter:s,includeZeros:!1,includeNegatives:!1,view:t,signal:i})]),f=null!=l&&"avgSize"in l&&l.avgSize,m=c.avg;if(!f||!m)return T(t);const p=(0,a.i1)(t.scale,t.spatialReference);return{dotValue:u(m/(f*f/(p*p)*.1))||1,referenceScale:t.scale,minSliderValue:1,maxSliderValue:u(m)}}async function E(e){const{view:t,layer:n,attributes:r,signal:i,filter:s}=e,o=[];for(const a of r){const e=await(0,h.EG)({field:a.field,valueExpression:a.valueExpression});o.push(...e)}const l=await n.getSampleFeatures({view:t,sampleSize:x,requiredFields:o,filter:s,returnGeometry:!0,signal:i},"json"),{minDensity:c,maxDensity:f,avgDensity:d}=await w({features:l,attributes:r,includeZeros:!1,includeNegatives:!1,view:t});if(!d||!c||!f)return T(t);const m=(0,a.i1)(t.scale,t.spatialReference),p=m*m,g=u(c*p),y=u(f*p);let b=u(d*p*10)||1;return b>y&&(b=y),{dotValue:b,referenceScale:t.scale,minSliderValue:g,maxSliderValue:y}}async function V(e){const t=await M(e),n=t.layer,a=n.geometryType,u=await async function(e){let t=e.dotDensityScheme,n=null,r=null;const i=await(0,f.Ib)(e.basemap,e.view);if(n=null!=i.basemapId?i.basemapId:null,r=null!=i.basemapTheme?i.basemapTheme:null,t)return{scheme:(0,S.cloneScheme)(t),basemapId:n,basemapTheme:r};const a=(0,S.getSchemes)({numColors:e.attributes.length,basemapTheme:r});return a&&(t=a.primaryScheme,n=a.basemapId,r=a.basemapTheme),{scheme:t,basemapId:n,basemapTheme:r}}(t),c=u?.scheme;if(!c)throw new i.default("dot-density-renderer:insufficient-info","Unable to find dot-density scheme");const d=t.view,m=t.filter,p={layer:n,view:d,filter:m,attributes:t.attributes,signal:t.signal},h={layer:t.layer,view:d,filter:m,signal:t.signal},[g,y]=await Promise.all([t.trueDensity?E(p):z(p),t.outlineOptimizationEnabled?(0,l.A)(h).catch(f.ou):null]),{dotValue:b,referenceScale:v,minSliderValue:w,maxSliderValue:x}=g,T=(0,r.Iy)(c.colors,t.attributes.length),V=t.attributes.map(((e,t)=>({field:e.field,valueExpression:e.valueExpression,label:e.label,valueExpressionTitle:e.valueExpressionTitle,color:T[t]}))),k=new s.default({attributes:V,dotBlendingEnabled:t.dotBlendingEnabled,outline:y?(0,f.qc)(c,a,y.opacity):null,dotValue:b,referenceScale:t.dotValueOptimizationEnabled?v:null,legendOptions:t.legendOptions});return y?.visualVariables.length&&(k.visualVariables=y.visualVariables.map((e=>e.clone()))),k.authoringInfo=new o.default({type:"dot-density",minSliderValue:w,maxSliderValue:x}),{renderer:k,dotDensityScheme:c,basemapId:u.basemapId,basemapTheme:u.basemapTheme}}async function k(e){const{creatorParameters:t,renderer:n}=await async function(e){const t="regenerate-dot-density-renderer";await(0,c.AC)(e,t);const n=await(0,c.mE)(e);if("dot-density"!==(0,c.UJ)(n))throw new i.default(`${t}:invalid-parameters`,"Renderer is invalid");const{layer:r,forBinning:a,filter:s,view:o,signal:l}=e,u=(0,c.DW)(n),f=n.attributes.map((e=>({field:e.field,valueExpression:e.valueExpression,label:e.label,valueExpressionTitle:e.valueExpressionTitle}))),d=await M({layer:r,attributes:f,dotValueOptimizationEnabled:null!=n.referenceScale,outlineOptimizationEnabled:u,forBinning:a,filter:s,view:o,signal:l});return{...e,creatorParameters:d,renderer:n}}(e),{layer:r,attributes:a,outlineOptimizationEnabled:s,view:o,signal:u,filter:d}=t,m={layer:r,view:o,filter:d,attributes:a,signal:u},[p,h]=await Promise.all([t.trueDensity?E(m):z(m),s?(0,l.A)({layer:r,view:o,signal:u,filter:d}).catch(f.ou):null]),{dotValue:g,referenceScale:y,minSliderValue:b,maxSliderValue:v}=p;return n.dotValue=g,n.referenceScale=t.dotValueOptimizationEnabled?y:null,n.authoringInfo&&(n.authoringInfo.minSliderValue=b,n.authoringInfo.maxSliderValue=v),(0,c.ke)(n,h?.visualVariables,c._i),{renderer:n}}},79538:(e,t,n)=>{n.d(t,{BV:()=>z,EG:()=>v,Lk:()=>T,Ll:()=>k,Np:()=>c,R3:()=>V,SO:()=>p,T1:()=>E,UH:()=>u,Wy:()=>w,XR:()=>m,aM:()=>M,fs:()=>b,i0:()=>I,i3:()=>y});var r=n(66845),i=n(95011),a=n(96247),s=n(76983),o=n(73210),l=n(40731);const u=",",c={light:["streets","gray","topo","terrain","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector","topo-3d","navigation-3d","streets-3d","osm-3d","gray-3d"],dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector","navigation-dark-3d","streets-dark-3d","dark-gray-3d"]},f="percent-of-total",d="field",m={exclude:["median"]},p={years:365,months:30,days:1,hours:1/24,minutes:1/1440,seconds:1/86400,milliseconds:1/864e5},h=new Set(["integer","small-integer"]);let g=null;const y=["date","date-only","timestamp-offset"];function b(e){return(0,i.isDateField)(e)||(0,i.isDateOnlyField)(e)||(0,i.isTimestampOffsetField)(e)}async function v(e){const{field:t,field2:n,field3:r,normalizationField:i,valueExpression:s}=e;let o=[];if(s){if(!g){const{arcadeUtils:e}=await(0,a.lw)();g=e}o=g.extractFieldNames(s)}return t&&o.push(t),n&&o.push(n),r&&o.push(r),i&&o.push(i),o}function w(e){let t=e.normalizationType;return t||(e.normalizationField?t=d:null!=e.normalizationTotal&&(t=f)),t??void 0}function S(e){return String(e).padStart(2,"0")}function x(e,t,n){let r;return"date"===t||"number"===t?("number"===t&&(e=new Date(e)),r=`TIMESTAMP'${n?e.getFullYear():e.getUTCFullYear()}-${S((n?e.getMonth():e.getUTCMonth())+1)}-${S(n?e.getDate():e.getUTCDate())} ${S(n?e.getHours():e.getUTCHours())}:${S(n?e.getMinutes():e.getUTCMinutes())}:${S(n?e.getSeconds():e.getUTCSeconds())}'`):r=e,r}function M(e,t,n,r){const{hasQueryEngine:i}=e,a=`(${x(n,T(e,n),i)} - ${x(t,T(e,t),i)})`;let s=p[r],o="/";return s<1&&(s=1/s,o="*"),{sqlExpression:1===s?a:`(${a} ${o} ${s})`,sqlWhere:null}}function T(e,t){if(t instanceof Date)return"date";if("number"==typeof t)return"number";if("string"==typeof t){const n=e.getField(t);if("<now>"===t.toLowerCase())return;if((0,i.isDateField)(n))return"field"}}function z(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c;for(const n in t)if(t[n].includes(e))return n}function E(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=null;return e&&("string"==typeof e?t.includes(e)&&(r=e):r=(0,s.q3)(e)),n?r||"gray":r}function V(e,t){const n=t&&e.getField(t);return!!n&&h.has(n.type)}function k(e){return`cast(${e} as float)`}function I(e,t){const{format:n,timeZoneOptions:i,fieldType:a}=t??{};let s,u;if(i&&({timeZone:s,timeZoneName:u}=(0,l.hv)(i.layerTimeZone,i.datesInUnknownTimezone,i.viewTimeZone,(0,r.J2)(n||"short-date-short-time"),a)),"string"==typeof e&&isNaN(Date.parse("time-only"===a?`1970-01-01T${e}Z`:e)))return e;switch(a){case"date-only":{const t=(0,r.J2)(n||"short-date");return"string"==typeof e?(0,r.iS)(e,{...t}):(0,r.Yq)(e,{...t,timeZone:o.n$})}case"time-only":{const t=(0,r.J2)(n||"short-time");return"string"==typeof e?(0,r.F8)(e,t):(0,r.Yq)(e,{...t,timeZone:o.n$})}case"timestamp-offset":{if(!s&&"string"==typeof e&&new Date(e).toISOString()!==e)return e;const t=n||i?(0,r.J2)(n||"short-date-short-time"):void 0,a=t?{...t,timeZone:s,timeZoneName:u}:void 0;return"string"==typeof e?(0,r.Ey)(e,a):(0,r.Yq)(e,a)}default:{const t=n||i?(0,r.J2)(n||"short-date-short-time"):void 0;return(0,r.Yq)("string"==typeof e?new Date(e):e,t?{...t,timeZone:s,timeZoneName:u}:void 0)}}}}}]);