"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[13938,25454,28110,79538,81060],{2925:(e,t,n)=>{n.d(t,{$:()=>S,IB:()=>c,Iy:()=>R,KV:()=>C,N2:()=>z,QP:()=>q,RH:()=>M,Vl:()=>O,Ws:()=>E,ZD:()=>T,_L:()=>I,bJ:()=>$,e$:()=>F,f6:()=>V,hw:()=>L,pW:()=>D,pf:()=>J,rs:()=>k,sn:()=>Z,we:()=>A});var o=n(88102),i=n(62631),r=n(82301),a=n(64682),l=n(60548),s=n(24646);function c(e){return"r"in e&&"g"in e&&"b"in e}function u(e){return"h"in e&&"s"in e&&"v"in e}function f(e){return"l"in e&&"a"in e&&"b"in e}function p(e){return"l"in e&&"c"in e&&"h"in e}const m=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],d=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function h(e,t){const n=[];let o,i;if(e[0].length!==t.length)throw new Error("dimensions do not match");const r=e.length,a=e[0].length;let l=0;for(o=0;o<r;o++){for(l=0,i=0;i<a;i++)l+=e[o][i]*t[i];n.push(l)}return n}function g(e){const t=[e.r/255,e.g/255,e.b/255].map((e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4)),n=h(m,t);return{x:100*n[0],y:100*n[1],z:100*n[2]}}function y(e){const t=h(d,[e.x/100,e.y/100,e.z/100]).map((e=>{const t=e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055;return Math.min(1,Math.max(t,0))}));return{r:Math.round(255*t[0]),g:Math.round(255*t[1]),b:Math.round(255*t[2])}}function w(e){const t=[e.x/95.047,e.y/100,e.z/108.883].map((e=>e>(6/29)**3?e**(1/3):1/3*(29/6)**2*e+4/29));return{l:116*t[1]-16,a:500*(t[0]-t[1]),b:200*(t[1]-t[2])}}function v(e){const t=e.l,n=[(t+16)/116+e.a/500,(t+16)/116,(t+16)/116-e.b/200].map((e=>e>6/29?e**3:3*(6/29)**2*(e-4/29)));return{x:95.047*n[0],y:100*n[1],z:108.883*n[2]}}function b(e){return function(e){const t=e.l,n=e.a,o=e.b,i=Math.sqrt(n*n+o*o);let r=Math.atan2(o,n);return r=r>0?r:r+2*Math.PI,{l:t,c:i,h:r}}(w(g(e)))}function x(e){return y(v(function(e){const t=e.l,n=e.c,o=e.h;return{l:t,a:n*Math.cos(o),b:n*Math.sin(o)}}(e)))}function S(e){return c(e)?e:p(e)?x(e):f(e)?function(e){return y(v(e))}(e):function(e){return"x"in e&&"y"in e&&"z"in e}(e)?y(e):u(e)?function(e){const t=(e.h+360)%360/60,n=e.s/100,o=e.v/100*255,i=o*n,r=i*(1-Math.abs(t%2-1));let a;switch(Math.floor(t)){case 0:a={r:i,g:r,b:0};break;case 1:a={r:r,g:i,b:0};break;case 2:a={r:0,g:i,b:r};break;case 3:a={r:0,g:r,b:i};break;case 4:a={r:r,g:0,b:i};break;case 5:case 6:a={r:i,g:0,b:r};break;default:a={r:0,g:0,b:0}}return a.r=Math.round(a.r+o-i),a.g=Math.round(a.g+o-i),a.b=Math.round(a.b+o-i),a}(e):e}function z(e){return u(e)?e:function(e){const t=e.r,n=e.g,o=e.b,i=Math.max(t,n,o),r=i-Math.min(t,n,o);let a=i,l=0===r?0:i===t?(n-o)/r%6:i===n?(o-t)/r+2:(t-n)/r+4,s=0===r?0:r/a;return l<0&&(l+=6),l*=60,s*=100,a*=100/255,{h:l,s:s,v:a}}(S(e))}function T(e){return f(e)?e:function(e){return w(g(e))}(S(e))}function M(e){return p(e)?e:b(S(e))}function k(e){return B(e).isBright?"light":"dark"}function B(e){let{r:t,g:n,b:i,a:r}=e;return r<1&&(t=Math.round(r*t+255*(1-r)),n=Math.round(r*n+255*(1-r)),i=Math.round(r*i+255*(1-r))),new o.default({r:t,g:n,b:i})}function E(e,t){const{r:n,g:o,b:i}=t?.ignoreAlpha?e:B(e);return.2126*n+.7152*o+.0722*i}var D,N;function $(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:D.High;return E(e,{ignoreAlpha:!0})>t?new o.default([0,0,0,e.a]):new o.default([255,255,255,e.a])}function F(e,t){const n=T(e);n.l*=1-t;const o=S(n),i=e.clone();return i.setColor(o),i.a=e.a,i}function I(e,t){const n=e.clone();return n.a*=t,n}function O(e,t){const n=z(e);n.s*=t;const o=S(n),i=e.clone();return i.setColor(o),i.a=e.a,i}function q(e){return o.default.toUnitRGBA(e)}function L(e,t){return e===t||null!=e&&e.equals(t)}function A(e,t){return e===t||null!=e&&null!=t&&(0,l.e)(e,t)}function J(e){return(0,s.fA)(e[0],e[1],e[2],e.length>3?e[3]:1)}function C(e){return e[0]??=0,e[1]??=0,e[2]??=0,e}function Z(e){return e.length=4,C(e),e[3]??=1,(0,a.qE)(e[3],0,1),e}function V(e,t){const n=o.default.toUnitRGBA(e);return n[3]*=t,n}function R(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(0===e.length||t<=0)return[];if(1===(e=e.map((e=>"string"==typeof e?new o.default(e):e))).length||1===t){const n=[],o=e[0];for(let e=0;e<t;e++)n.push(o.clone());return n}if(n.shuffle&&(e=(0,i.k4)((0,r.clone)(e),n.seed)),e.length>=t){const n=[],o=(e.length-1)/(t-1);for(let i=0;i<t;i++){const t=Math.round(i*o);n.push(e[t].clone())}return n}return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const o=[],r=e.length-1,a=Math.ceil((t-e.length)/r);e:for(let i=0;i<r;i++){const r=e[i],l=e[i+1];for(let i=1;i<=a;i++){const s=i/(a+1);if(o.push(P(r,l,s,n)),o.length+e.length===t)break e}}return[...e.map((e=>e.clone())),...(0,i.k4)(o,n.seed??1)]}(e,t,n)}(N=D||(D={}))[N.Low=160]="Low",N[N.High=225]="High";const U=(e,t)=>{const n=Math.floor(10*t())-5;return Math.min(255,Math.max(0,e+n))};function P(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const a=e.r,l=e.g,s=e.b,c=t.r,u=t.g,f=t.b,p=Math.round(a+(c-a)*n),m=Math.round(l+(u-l)*n),d=Math.round(s+(f-s)*n);if(!r.offset)return new o.default([p,m,d]);const h=(0,i.Mo)(r.seed);return new o.default([U(p,h),U(m,h),U(d,h)])}},22420:(e,t,n)=>{n.d(t,{GP:()=>p,LI:()=>u,lc:()=>s,u5:()=>c});n(88677);var o=n(23224);const i=/^-?(\d+)(\.(\d+))?$/i;function r(e,t){return e-t}function a(e,t){let n,o;return n=Number(e.toFixed(t)),n<e?o=n+1/10**t:(o=n,n-=1/10**t),n=Number(n.toFixed(t)),o=Number(o.toFixed(t)),[n,o]}function l(e,t,n,o,i){const r=c(e,t,n,o),a=null==r.previous||r.previous<=i,l=null==r.next||r.next<=i;return a&&l||r.previous+r.next<=2*i}function s(e){const t=String(e),n=t.match(i);if(n?.[1])return{integer:n[1].split("").length,fractional:n[3]?n[3].split("").length:0};if(t.toLowerCase().includes("e")){const e=t.split("e"),n=e[0],o=e[1];if(n&&o){const e=Number(n);let t=Number(o);const i=t>0;i||(t=Math.abs(t));const r=s(e);return i?(r.integer+=t,t>r.fractional?r.fractional=0:r.fractional-=t):(r.fractional+=t,t>r.integer?r.integer=1:r.integer-=t),r}}return{integer:0,fractional:0}}function c(e,t,n,o){const i={previous:null,next:null};if(null!=n){const o=e-n,r=t-n-o;i.previous=Math.floor(Math.abs(100*r/o))}if(null!=o){const n=o-e,r=o-t-n;i.next=Math.floor(Math.abs(100*r/n))}return i}function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=e.slice(),{tolerance:o=2,strictBounds:i=!1,indexes:c=n.map(((e,t)=>t))}=t;c.sort(r);for(let r=0;r<c.length;r++){const e=c[r],t=n[e],u=0===e?null:n[e-1],f=e===n.length-1?null:n[e+1],p=s(t).fractional;if(p){let s,c=0,m=!1;for(;c<=p&&!m;){const e=a(t,c);s=i&&0===r?e[1]:e[0],m=l(t,s,u,f,o),c++}m&&(n[e]=s)}}return n}const f={maximumFractionDigits:20};function p(e){return(0,o.ZV)(e,f)}},28110:(e,t,n)=>{n.r(t),n.d(t,{cloneScheme:()=>u,getSchemes:()=>c,getThemes:()=>s});var o=n(88102),i=n(62631),r=n(28245),a=n(42648);const l=(0,r.bG)({themeDictionary:{default:{name:"default",label:"Default",description:"Default theme for basic visualization of features.",schemes:{point:{light:{primary:{color:[77,77,77,1],outline:{color:[255,255,255,.25],width:"1px"},size:"8px"},secondary:[{color:[226,119,40,1],outline:{color:[255,255,255,.25],width:"1px"},size:"8px"},{color:[255,255,255,1],outline:{color:[51,51,51,.25],width:"1px"},size:"8px"}]},dark:{primary:{color:[255,255,255,1],outline:{color:[92,92,92,.25],width:"1px"},size:"8px"},secondary:[{color:[226,119,40,1],outline:{color:[255,255,255,.25],width:"1px"},size:"8px"},{color:[26,26,26,1],outline:{color:[178,178,178,.25],width:"1px"},size:"8px"}]}},polyline:{light:{primary:{color:[77,77,77,1],width:"2px"},secondary:[{color:[226,119,40,1],width:"2px"},{color:[255,255,255,1],width:"2px"}]},dark:{primary:{color:[255,255,255,1],width:"2px"},secondary:[{color:[226,119,40,1],width:"2px"},{color:[26,26,26,1],width:"2px"}]}},polygon:{light:{primary:{size:"12px",color:[227,139,79,1],outline:{color:[255,255,255,.25],width:"1px"},opacity:.8},secondary:[{size:"12px",color:[128,128,128,1],outline:{color:[255,255,255,.25],width:"1px"},opacity:.8},{size:"12px",color:[255,255,255,1],outline:{color:[128,128,128,.25],width:"1px"},opacity:.8}]},dark:{primary:{size:"12px",color:[227,139,79,1],outline:{color:[92,92,92,.25],width:"1px"},opacity:.8},secondary:[{size:"12px",color:[178,178,178,1],outline:{color:[92,92,92,.25],width:"1px"},opacity:.8},{size:"12px",color:[26,26,26,1],outline:{color:[128,128,128,.25],width:"1px"},opacity:.8}]}}}}}});function s(e){return(0,r.vt)(l,e)}function c(e){const t=(0,r.Fq)({basemap:e.basemap,geometryType:e.geometryType,basemapTheme:e.basemapTheme,theme:l.get("default")});if(!t)return;const{schemesInfo:n,basemapId:o,basemapTheme:a}=t;return{primaryScheme:f(e,n.primary),secondarySchemes:n.secondary.map((t=>f(e,t))).filter(i.Ru),basemapId:o,basemapTheme:a}}function u(e){if(!e)return;const t={...e};return t.color&&(t.color=new o.default(t.color)),"outline"in t&&t.outline&&(t.outline={color:t.outline.color&&new o.default(t.outline.color),width:t.outline.width}),t}function f(e,t){const n="mesh"!==e.geometryType&&e.worldScale?e.view:null;switch(e.geometryType){case"point":case"multipoint":{const e=t;return function(e,t){return{color:new o.default(e.color),outline:{color:new o.default(e.outline.color),width:e.outline.width},size:t?(0,a._J)(e.size,t):e.size,opacity:1}}({color:e.color,outline:{...e.outline},size:e.size},n)}case"polyline":{const e=t;return function(e,t){return{color:new o.default(e.color),width:t?(0,a._J)(e.width,t):e.width,opacity:1}}({color:e.color,width:e.width},n)}case"polygon":{const e=t;return function(e,t){return{color:new o.default(e.color),outline:{color:new o.default(e.outline.color),width:e.outline.width},size:t?(0,a._J)(e.size,t):e.size,opacity:e.opacity}}({size:e.size,color:e.color,outline:{...e.outline},opacity:e.opacity},n)}case"mesh":{const e=t;return function(e){return{color:new o.default(e.color),opacity:e.opacity}}({color:e.color,opacity:e.opacity})}}}},28245:(e,t,n)=>{n.d(t,{bG:()=>a,Ty:()=>s,YJ:()=>c,Fq:()=>u,vt:()=>l});var o=n(82301),i=n(79538);class r{constructor(e){const{name:t,label:n,description:o,schemes:r}=e;this.name=t,this.label=n,this.description=o,this.schemes=r;const a=e.basemapGroups||i.Np;let l=[];Object.keys(a).forEach((e=>{l=l.concat(a[e])})),this.supportedBasemaps=l,this.basemapGroups=a}isBasemapSupported(e){const t=(0,i.T1)(e,this.supportedBasemaps);return!(!t||!this.supportedBasemaps.includes(t))}getRawSchemes(e){const{basemapId:t,basemapTheme:n}=function(e,t,n){let o=null,r=null;if(t&&(o=(0,i.T1)(t,e,!1),o)){const e=(0,i.BV)(o);null!=e&&(r=e)}return!o&&n&&(o="dark"===n?"dark-gray":"gray",r=n),o||r||(o="gray",r="light"),{basemapId:o,basemapTheme:r}}(this.supportedBasemaps,e.basemap,e.basemapTheme);let r=n;if(t){const e=(0,i.BV)(t,this.basemapGroups);null!=e&&(r=e)}let a=e.geometryType;"multipoint"===a?a="point":"mesh"===a&&(a="polygon");const l=this.schemes[a]||this.schemes.default;return{schemesInfo:(0,o.clone)(l[r]),basemapId:t,basemapTheme:n}}}function a(e){const t=e.themeDictionary,n=new Map;for(const o in t){const e=t[o];n.set(o,new r(e))}return n}function l(e,t){const n=[];return e.forEach((e=>{e.isBasemapSupported(t)&&n.push({name:e.name,label:e.label,description:e.description,basemaps:[...e.supportedBasemaps]})})),n}function s(e,t){if(!e)return;if(!t)return;let n=null;const o=[t.primaryScheme,...t.secondarySchemes];for(const i of o)if(i.name?.toLowerCase()===e.toLowerCase()){n=i;break}return n}function c(e,t,n){if(!e&&!t)return[];if(!n)return[];const o=!e?.length,i=!t?.length,r=[n.primaryScheme,...n.secondarySchemes],a=[];for(const l of r){const n=!!o||e.some((e=>l.tags.includes(e))),r=!i&&t.some((e=>l.tags.includes(e)));n&&!r&&a.push(l)}return a}function u(e){const t=e.theme;if(t)return t.getRawSchemes({basemap:e.basemap,geometryType:e.geometryType,basemapTheme:e.basemapTheme})}},30178:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var o=n(74719),i=n(11099),r=n(46176),a=n(85151),l=n(2938);const s=500,c=1e8,u=1280,f=12,p=30,m=15;async function d(e){const{view:t,sampleSize:n}=e;if(!e||!e.layer)throw new o.default("scale-range:missing-parameters","'layer' parameter is required");if(e.snapToLOD&&!t)throw new o.default("scale-range:missing-parameters","'view' parameter is required when 'snapToLOD' is true");e.forBinning&&(0,a.p)(e,"scale-range");const{layer:i,...r}=e,c=e.forBinning?l.Mi:l.J4,u=(0,l.Jg)(i,c,e.forBinning);if(!u)throw new o.default("scale-range:invalid-parameters","'layer' must be one of these types: "+(0,l.Ho)(c).join(", "));const f={layerAdapter:u,...r};f.sampleSize=n||s,await(t?.when());const p=null!=f.signal?{signal:f.signal}:null;return await u.load(p),f}function h(e,t,n){const o=function(e,t){const n=f,o=u/4,i=p,r=u/4,a=m,l=u/2;let s=0,c=0,d=0,h=0;switch(e){case"point":case"multipoint":{const e=t;s=e.avgMinDistance??0,c=n,d=e.minDistance??0,h=o;break}case"polyline":{const e=t;s=e.avgLength??0,c=i,d=e.minLength??0,h=r;break}case"polygon":{const e=t;s=e.avgSize??0,c=a,d=e.minSize??0,h=l;break}}return{resolutionForMinScale:s>0?s/c:null,resolutionForMaxScale:d>0?d/h:null}}(e.geometryType,t),r=n?.spatialReference||e.layer.spatialReference;return{minScale:(0,i.gB)(o.resolutionForMinScale??0,r),maxScale:(0,i.gB)(o.resolutionForMaxScale??0,r)}}function g(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(e.constraints&&"effectiveLODs"in e.constraints){const o=e.constraints.effectiveLODs,i=n?o:o.slice().reverse();let r=null;for(const e of i)if(!(n?e.scale>t:e.scale<t)){r=e;break}return r}}function y(e,t,n,i){const{view:r,snapToLOD:a,layerAdapter:l}=e;if(a&&r){const e=g(r,t),o=g(r,n,!1);t=e?e.scale:t,n=o?o.scale:n}if(t<n)throw new o.default("scale-range:invalid","calculated minScale is less than maxScale.");return n>t/2&&(n=Math.floor(n/2)),t>c&&(t=0),"polygon"!==l.geometryType&&(n=0),{minScale:Math.ceil(t),maxScale:Math.floor(n),spatialStatistics:i}}async function w(e){const t=await d(e),{view:n,sampleSize:i,layerAdapter:a,signal:l,filter:s}=t,c=await a.getSampleFeatures({view:n,sampleSize:i,returnGeometry:!0,filter:s,signal:l},"json");if(!c?.length)throw new o.default("scale-range:insufficient-info","No features are available to calculate statistics");const u=await(0,r.A)({features:c,geometryType:a.geometryType}),{minScale:f,maxScale:p}=h(a,u,n);return y(t,f,p,u)}},42648:(e,t,n)=>{n.d(t,{_J:()=>c,_t:()=>s});var o=n(16804),i=n(79538);const r=i.Np.light,a=i.Np.dark;function l(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b}function s(e,t){let n=0;if(e.length===t.length){let o=e.every(((e,n)=>l(e,t[n])));o?n=1:(o=e.slice().reverse().every(((e,n)=>l(e,t[n]))),o&&(n=-1))}return n}function c(e,t){return Math.ceil(function(e){const t=e.width,n=e.height;let i=e.pixelSizeAt(e.toMap((0,o.tc)(.5*t,.5*n),{exclude:[]}));if(i<=0&&(i=e.pixelSizeAt(e.toMap((0,o.tc)(.5*t,.95*n),{exclude:[]})),i<=0&&"camera"in e)){const t=e.camera.position.clone();t.z=0,i=2*e.pixelSizeAt(t)}return i}(t)*(0,o.Lz)((0,o.cr)(e)))}},66787:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});n(21265);var o=n(74719),i=n(16804),r=n(11099),a=n(56563),l=n(81467),s=n(30178),c=n(85151),u=n(2938);const f=1e8,p=1128.497176,m=591657527.591555,d=[10,8,4,2],h=[100,100,60,30],g=[2,1,.75,.5],y=[32,18,12,6],w=[{level:0,resolution:156543.03392800014,scale:591657527.591555},{level:1,resolution:78271.51696399994,scale:295828763.795777},{level:2,resolution:39135.75848200009,scale:147914381.897889},{level:3,resolution:19567.87924099992,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.992452562495,scale:4622324.434309},{level:8,resolution:611.4962262813797,scale:2311162.217155},{level:9,resolution:305.74811314055756,scale:1155581.108577},{level:10,resolution:152.87405657041106,scale:577790.554289},{level:11,resolution:76.43702828507324,scale:288895.277144},{level:12,resolution:38.21851414253662,scale:144447.638572},{level:13,resolution:19.10925707126831,scale:72223.819286},{level:14,resolution:9.554628535634155,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.388657133974685,scale:9027.977411},{level:17,resolution:1.1943285668550503,scale:4513.988705},{level:18,resolution:.5971642835598172,scale:2256.994353},{level:19,resolution:.29858214164761665,scale:1128.497176}];function v(e,t){const{view:n}=e;if(!n)throw new o.default("scale-range:invalid-parameters","'view' is required");const i=t.minScale||f,r=n.constraints&&"effectiveLODs"in n.constraints&&n.constraints.effectiveLODs||w,a=[];for(let o=0;o<r.length;o++){if(r[o].scale>i)continue;const e=Number(o),t=[e-3,e,e+3,e+6];for(const n of t)n>-1&&n<r.length&&a.push(r[n].scale);break}return a.sort(((e,t)=>e-t))}function b(e,t){const{view:n,layerAdapter:i}=e;if(!n)throw new o.default("scale-range:invalid-parameters","'view' is required");const a=i.fullExtent,l=i.minScale||p,s=i.maxScale||m,c=t.minScale||0,u=t.maxScale||0;let f=null!=a?(0,r.X_)(n,a):0;return f=f<l&&f>s?f:0,{scales:[l,s,c,u,f].map(Math.round).sort(((e,t)=>e-t)).filter(((e,t,n)=>!!e&&n.indexOf(e)===t)).filter(((e,t,n)=>!t||Math.abs(e-n[t-1])>5)),fullExtentScale:f}}function x(e,t){const{spatialStatistics:n,minScale:r,maxScale:s}=t;if(!("avgSize"in n)||!n.avgSize)throw new o.default("size-range:insufficient-info","average polygon size is invalid");const c=n.avgSize,{view:u}=e;if(!u)throw new o.default("scale-range:invalid-parameters","'view' is required");const{resolution:f,scale:p}=u,m=f/p,{scales:d,fullExtentScale:h}=b(e,{minScale:r,maxScale:s}),g=[],y=[];return d.forEach(((e,t)=>{const{min:n,max:o}=function(e,t){const n=Math.ceil(e/t);let o=Math.ceil(n/4);o<4?o=4:o>16&&(o=16);const i=5*o;return{min:o,max:i<50?50:i}}(c,m*e),r=d.indexOf(h),a=r>-1&&t>r?2:1;g.push(new l.default({value:e,size:(0,i.PN)(n/a)})),y.push(new l.default({value:e,size:(0,i.PN)(o/a)}))})),{minSize:new a.default({valueExpression:"$view.scale",stops:g}),maxSize:new a.default({valueExpression:"$view.scale",stops:y})}}async function S(e){const t=await async function(e){const{view:t}=e;if(!(e&&t&&e.layer))throw new o.default("size-range:missing-parameters","'view' and 'layer' parameters are required");e.forBinning&&(0,c.p)(e,"size-range");const{layer:n,...i}=e,r=e.forBinning?u.Mi:u.J4,a=(0,u.Jg)(n,r,e.forBinning);if(!a)throw new o.default("size-range:invalid-parameters","'layer' must be one of these types: "+(0,u.Ho)(r).join(", "));const l={layerAdapter:a,...i,view:t};await t.when();const s=null!=l.signal?{signal:l.signal}:null;await a.load(s);const f=a.geometryType;if("point"!==f&&"multipoint"!==f&&"polyline"!==f&&"polygon"!==f)throw new o.default("size-range:not-supported",`sizeRange is not supported for geometryType: ${f}`);return l}(e),{view:n,layerAdapter:r,signal:f,filter:p}=t,m=await(0,s.default)({layer:r,view:n,signal:f,filter:p});switch(r.geometryType){case"point":case"multipoint":return function(e,t){const{minScale:n,maxScale:r}=t,s=v(e,{minScale:n,maxScale:r});if(!s.length)throw new o.default("scale-range:insufficient-info","not enough scale values");return{minSize:new a.default({valueExpression:"$view.scale",stops:s.map(((e,t)=>new l.default({value:e,size:(0,i.PN)(d[t])})))}),maxSize:new a.default({valueExpression:"$view.scale",stops:s.map(((e,t)=>new l.default({value:e,size:(0,i.PN)(h[t])})))})}}(t,m);case"polyline":return function(e,t){const{minScale:n,maxScale:r}=t,s=v(e,{minScale:n,maxScale:r});if(!s.length)throw new o.default("scale-range:insufficient-info","not enough scale values");return{minSize:new a.default({valueExpression:"$view.scale",stops:s.map(((e,t)=>new l.default({value:e,size:(0,i.PN)(g[t])})))}),maxSize:new a.default({valueExpression:"$view.scale",stops:s.map(((e,t)=>new l.default({value:e,size:(0,i.PN)(y[t])})))})}}(t,m);case"polygon":return x(t,m);case"mesh":case"multipatch":return null}return null}},79538:(e,t,n)=>{n.d(t,{BV:()=>M,EG:()=>v,Lk:()=>T,Ll:()=>E,Np:()=>u,R3:()=>B,SO:()=>d,T1:()=>k,UH:()=>c,Wy:()=>b,XR:()=>m,aM:()=>z,fs:()=>w,i0:()=>D,i3:()=>y});var o=n(66845),i=n(95011),r=n(96247),a=n(76983),l=n(73210),s=n(40731);const c=",",u={light:["streets","gray","topo","terrain","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector","topo-3d","navigation-3d","streets-3d","osm-3d","gray-3d"],dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector","navigation-dark-3d","streets-dark-3d","dark-gray-3d"]},f="percent-of-total",p="field",m={exclude:["median"]},d={years:365,months:30,days:1,hours:1/24,minutes:1/1440,seconds:1/86400,milliseconds:1/864e5},h=new Set(["integer","small-integer"]);let g=null;const y=["date","date-only","timestamp-offset"];function w(e){return(0,i.isDateField)(e)||(0,i.isDateOnlyField)(e)||(0,i.isTimestampOffsetField)(e)}async function v(e){const{field:t,field2:n,field3:o,normalizationField:i,valueExpression:a}=e;let l=[];if(a){if(!g){const{arcadeUtils:e}=await(0,r.lw)();g=e}l=g.extractFieldNames(a)}return t&&l.push(t),n&&l.push(n),o&&l.push(o),i&&l.push(i),l}function b(e){let t=e.normalizationType;return t||(e.normalizationField?t=p:null!=e.normalizationTotal&&(t=f)),t??void 0}function x(e){return String(e).padStart(2,"0")}function S(e,t,n){let o;return"date"===t||"number"===t?("number"===t&&(e=new Date(e)),o=`TIMESTAMP'${n?e.getFullYear():e.getUTCFullYear()}-${x((n?e.getMonth():e.getUTCMonth())+1)}-${x(n?e.getDate():e.getUTCDate())} ${x(n?e.getHours():e.getUTCHours())}:${x(n?e.getMinutes():e.getUTCMinutes())}:${x(n?e.getSeconds():e.getUTCSeconds())}'`):o=e,o}function z(e,t,n,o){const{hasQueryEngine:i}=e,r=`(${S(n,T(e,n),i)} - ${S(t,T(e,t),i)})`;let a=d[o],l="/";return a<1&&(a=1/a,l="*"),{sqlExpression:1===a?r:`(${r} ${l} ${a})`,sqlWhere:null}}function T(e,t){if(t instanceof Date)return"date";if("number"==typeof t)return"number";if("string"==typeof t){const n=e.getField(t);if("<now>"===t.toLowerCase())return;if((0,i.isDateField)(n))return"field"}}function M(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;for(const n in t)if(t[n].includes(e))return n}function k(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=null;return e&&("string"==typeof e?t.includes(e)&&(o=e):o=(0,a.q3)(e)),n?o||"gray":o}function B(e,t){const n=t&&e.getField(t);return!!n&&h.has(n.type)}function E(e){return`cast(${e} as float)`}function D(e,t){const{format:n,timeZoneOptions:i,fieldType:r}=t??{};let a,c;if(i&&({timeZone:a,timeZoneName:c}=(0,s.hv)(i.layerTimeZone,i.datesInUnknownTimezone,i.viewTimeZone,(0,o.J2)(n||"short-date-short-time"),r)),"string"==typeof e&&isNaN(Date.parse("time-only"===r?`1970-01-01T${e}Z`:e)))return e;switch(r){case"date-only":{const t=(0,o.J2)(n||"short-date");return"string"==typeof e?(0,o.iS)(e,{...t}):(0,o.Yq)(e,{...t,timeZone:l.n$})}case"time-only":{const t=(0,o.J2)(n||"short-time");return"string"==typeof e?(0,o.F8)(e,t):(0,o.Yq)(e,{...t,timeZone:l.n$})}case"timestamp-offset":{if(!a&&"string"==typeof e&&new Date(e).toISOString()!==e)return e;const t=n||i?(0,o.J2)(n||"short-date-short-time"):void 0,r=t?{...t,timeZone:a,timeZoneName:c}:void 0;return"string"==typeof e?(0,o.Ey)(e,r):(0,o.Yq)(e,r)}default:{const t=n||i?(0,o.J2)(n||"short-date-short-time"):void 0;return(0,o.Yq)("string"==typeof e?new Date(e):e,t?{...t,timeZone:a,timeZoneName:c}:void 0)}}}},79809:(e,t,n)=>{n.r(t),n.d(t,{createRenderer:()=>f});var o=n(74719),i=n(99181),r=n(70183),a=n(66787),l=n(39569),s=n(85151),c=n(2938),u=n(28110);async function f(e){const t=await async function(e){if(!e?.layer)throw new o.default("location-renderer:missing-parameters","'layer' parameter is required");e.forBinning&&(0,s.p)(e,"location-renderer");const t={...e,layer:e.layer};t.symbolType=t.symbolType||"2d";const n=e.forBinning?c.Mi:c.J4,i=(0,c.Jg)(t.layer,n,e.forBinning);if(!i)throw new o.default("location-renderer:invalid-parameters","'layer' must be one of these types: "+(0,c.Ho)(n).join(", "));t.layer=i;const r=null!=t.signal?{signal:t.signal}:null;await i.load(r);const a=i.geometryType;if(t.outlineOptimizationEnabled="polygon"===a&&t.outlineOptimizationEnabled,t.sizeOptimizationEnabled=("point"===a||"multipoint"===a||"polyline"===a)&&t.sizeOptimizationEnabled,"mesh"===a)t.symbolType="3d-volumetric",t.colorMixMode=t.colorMixMode||"replace",t.edgesType=t.edgesType||"none";else{if("3d-volumetric-uniform"===t.symbolType&&"point"!==a)throw new o.default("location-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(t.symbolType.includes("3d-volumetric")&&(!t.view||"3d"!==t.view.type))throw new o.default("location-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'")}return t}(e),n=t.layer.geometryType,f=await async function(e,t){let n=e.locationScheme,o=null,i=null;const r=await(0,l.Ib)(e.basemap,e.view);if(o=null!=r.basemapId?r.basemapId:null,i=null!=r.basemapTheme?r.basemapTheme:null,n)return{scheme:(0,u.cloneScheme)(n),basemapId:o,basemapTheme:i};const a=(0,u.getSchemes)({basemapTheme:i,geometryType:t,worldScale:!!e.symbolType?.includes("3d-volumetric"),view:e.view});return a&&(n=a.primaryScheme,o=a.basemapId,i=a.basemapTheme),{scheme:n,basemapId:o,basemapTheme:i}}(t,n),p=f.scheme;if(!p)throw new o.default("location-renderer:insufficient-info","Unable to find location scheme");const{view:m,layer:d,signal:h,filter:g}=t,[y,w]=await Promise.all([t.outlineOptimizationEnabled?(0,r.A)({view:m,layer:d,signal:h,filter:g}).catch(l.ou):null,t.sizeOptimizationEnabled?(0,a.default)({view:m,layer:d,signal:h,filter:g}).catch(l.ou):null]),v=y?.opacity,b=new i.default({symbol:(0,l.v5)(n,{type:t.symbolType,color:p.color,size:(0,l.N6)(p,n),outline:(0,l.qc)(p,n,v),meshInfo:{colorMixMode:t.colorMixMode,edgesType:t.edgesType}})});return y?.visualVariables.length&&(b.visualVariables=y.visualVariables.map((e=>e.clone()))),w?.minSize&&(b.visualVariables?b.visualVariables.push(w.minSize):b.visualVariables=[w.minSize]),{renderer:b,locationScheme:(0,u.cloneScheme)(p),basemapId:f.basemapId,basemapTheme:f.basemapTheme}}}}]);