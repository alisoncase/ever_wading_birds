"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[13938],{2925:(e,n,t)=>{t.d(n,{$:()=>M,IB:()=>c,Iy:()=>C,KV:()=>G,N2:()=>x,QP:()=>$,RH:()=>k,Vl:()=>O,Ws:()=>A,ZD:()=>z,_L:()=>q,bJ:()=>N,e$:()=>D,f6:()=>J,hw:()=>P,pW:()=>L,pf:()=>_,rs:()=>T,sn:()=>I,we:()=>R});var a=t(88102),r=t(62631),s=t(82301),i=t(64682),l=t(60548),o=t(24646);function c(e){return"r"in e&&"g"in e&&"b"in e}function u(e){return"h"in e&&"s"in e&&"v"in e}function f(e){return"l"in e&&"a"in e&&"b"in e}function h(e){return"l"in e&&"c"in e&&"h"in e}const p=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],m=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function g(e,n){const t=[];let a,r;if(e[0].length!==n.length)throw new Error("dimensions do not match");const s=e.length,i=e[0].length;let l=0;for(a=0;a<s;a++){for(l=0,r=0;r<i;r++)l+=e[a][r]*n[r];t.push(l)}return t}function d(e){const n=[e.r/255,e.g/255,e.b/255].map((e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4)),t=g(p,n);return{x:100*t[0],y:100*t[1],z:100*t[2]}}function w(e){const n=g(m,[e.x/100,e.y/100,e.z/100]).map((e=>{const n=e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055;return Math.min(1,Math.max(n,0))}));return{r:Math.round(255*n[0]),g:Math.round(255*n[1]),b:Math.round(255*n[2])}}function v(e){const n=[e.x/95.047,e.y/100,e.z/108.883].map((e=>e>(6/29)**3?e**(1/3):1/3*(29/6)**2*e+4/29));return{l:116*n[1]-16,a:500*(n[0]-n[1]),b:200*(n[1]-n[2])}}function b(e){const n=e.l,t=[(n+16)/116+e.a/500,(n+16)/116,(n+16)/116-e.b/200].map((e=>e>6/29?e**3:3*(6/29)**2*(e-4/29)));return{x:95.047*t[0],y:100*t[1],z:108.883*t[2]}}function y(e){return function(e){const n=e.l,t=e.a,a=e.b,r=Math.sqrt(t*t+a*a);let s=Math.atan2(a,t);return s=s>0?s:s+2*Math.PI,{l:n,c:r,h:s}}(v(d(e)))}function S(e){return w(b(function(e){const n=e.l,t=e.c,a=e.h;return{l:n,a:t*Math.cos(a),b:t*Math.sin(a)}}(e)))}function M(e){return c(e)?e:h(e)?S(e):f(e)?function(e){return w(b(e))}(e):function(e){return"x"in e&&"y"in e&&"z"in e}(e)?w(e):u(e)?function(e){const n=(e.h+360)%360/60,t=e.s/100,a=e.v/100*255,r=a*t,s=r*(1-Math.abs(n%2-1));let i;switch(Math.floor(n)){case 0:i={r:r,g:s,b:0};break;case 1:i={r:s,g:r,b:0};break;case 2:i={r:0,g:r,b:s};break;case 3:i={r:0,g:s,b:r};break;case 4:i={r:s,g:0,b:r};break;case 5:case 6:i={r:r,g:0,b:s};break;default:i={r:0,g:0,b:0}}return i.r=Math.round(i.r+a-r),i.g=Math.round(i.g+a-r),i.b=Math.round(i.b+a-r),i}(e):e}function x(e){return u(e)?e:function(e){const n=e.r,t=e.g,a=e.b,r=Math.max(n,t,a),s=r-Math.min(n,t,a);let i=r,l=0===s?0:r===n?(t-a)/s%6:r===t?(a-n)/s+2:(n-t)/s+4,o=0===s?0:s/i;return l<0&&(l+=6),l*=60,o*=100,i*=100/255,{h:l,s:o,v:i}}(M(e))}function z(e){return f(e)?e:function(e){return v(d(e))}(M(e))}function k(e){return h(e)?e:y(M(e))}function T(e){return B(e).isBright?"light":"dark"}function B(e){let{r:n,g:t,b:r,a:s}=e;return s<1&&(n=Math.round(s*n+255*(1-s)),t=Math.round(s*t+255*(1-s)),r=Math.round(s*r+255*(1-s))),new a.default({r:n,g:t,b:r})}function A(e,n){const{r:t,g:a,b:r}=n?.ignoreAlpha?e:B(e);return.2126*t+.7152*a+.0722*r}var L,E;function N(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:L.High;return A(e,{ignoreAlpha:!0})>n?new a.default([0,0,0,e.a]):new a.default([255,255,255,e.a])}function D(e,n){const t=z(e);t.l*=1-n;const a=M(t),r=e.clone();return r.setColor(a),r.a=e.a,r}function q(e,n){const t=e.clone();return t.a*=n,t}function O(e,n){const t=x(e);t.s*=n;const a=M(t),r=e.clone();return r.setColor(a),r.a=e.a,r}function $(e){return a.default.toUnitRGBA(e)}function P(e,n){return e===n||null!=e&&e.equals(n)}function R(e,n){return e===n||null!=e&&null!=n&&(0,l.e)(e,n)}function _(e){return(0,o.fA)(e[0],e[1],e[2],e.length>3?e[3]:1)}function G(e){return e[0]??=0,e[1]??=0,e[2]??=0,e}function I(e){return e.length=4,G(e),e[3]??=1,(0,i.qE)(e[3],0,1),e}function J(e,n){const t=a.default.toUnitRGBA(e);return t[3]*=n,t}function C(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(0===e.length||n<=0)return[];if(1===(e=e.map((e=>"string"==typeof e?new a.default(e):e))).length||1===n){const t=[],a=e[0];for(let e=0;e<n;e++)t.push(a.clone());return t}if(t.shuffle&&(e=(0,r.k4)((0,s.clone)(e),t.seed)),e.length>=n){const t=[],a=(e.length-1)/(n-1);for(let r=0;r<n;r++){const n=Math.round(r*a);t.push(e[n].clone())}return t}return function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=[],s=e.length-1,i=Math.ceil((n-e.length)/s);e:for(let r=0;r<s;r++){const s=e[r],l=e[r+1];for(let r=1;r<=i;r++){const o=r/(i+1);if(a.push(H(s,l,o,t)),a.length+e.length===n)break e}}return[...e.map((e=>e.clone())),...(0,r.k4)(a,t.seed??1)]}(e,n,t)}(E=L||(L={}))[E.Low=160]="Low",E[E.High=225]="High";const F=(e,n)=>{const t=Math.floor(10*n())-5;return Math.min(255,Math.max(0,e+t))};function H(e,n,t){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const i=e.r,l=e.g,o=e.b,c=n.r,u=n.g,f=n.b,h=Math.round(i+(c-i)*t),p=Math.round(l+(u-l)*t),m=Math.round(o+(f-o)*t);if(!s.offset)return new a.default([h,p,m]);const g=(0,r.Mo)(s.seed);return new a.default([F(h,g),F(p,g),F(m,g)])}},28245:(e,n,t)=>{t.d(n,{bG:()=>i,Ty:()=>o,YJ:()=>c,Fq:()=>u,vt:()=>l});var a=t(82301),r=t(79538);class s{constructor(e){const{name:n,label:t,description:a,schemes:s}=e;this.name=n,this.label=t,this.description=a,this.schemes=s;const i=e.basemapGroups||r.Np;let l=[];Object.keys(i).forEach((e=>{l=l.concat(i[e])})),this.supportedBasemaps=l,this.basemapGroups=i}isBasemapSupported(e){const n=(0,r.T1)(e,this.supportedBasemaps);return!(!n||!this.supportedBasemaps.includes(n))}getRawSchemes(e){const{basemapId:n,basemapTheme:t}=function(e,n,t){let a=null,s=null;if(n&&(a=(0,r.T1)(n,e,!1),a)){const e=(0,r.BV)(a);null!=e&&(s=e)}return!a&&t&&(a="dark"===t?"dark-gray":"gray",s=t),a||s||(a="gray",s="light"),{basemapId:a,basemapTheme:s}}(this.supportedBasemaps,e.basemap,e.basemapTheme);let s=t;if(n){const e=(0,r.BV)(n,this.basemapGroups);null!=e&&(s=e)}let i=e.geometryType;"multipoint"===i?i="point":"mesh"===i&&(i="polygon");const l=this.schemes[i]||this.schemes.default;return{schemesInfo:(0,a.clone)(l[s]),basemapId:n,basemapTheme:t}}}function i(e){const n=e.themeDictionary,t=new Map;for(const a in n){const e=n[a];t.set(a,new s(e))}return t}function l(e,n){const t=[];return e.forEach((e=>{e.isBasemapSupported(n)&&t.push({name:e.name,label:e.label,description:e.description,basemaps:[...e.supportedBasemaps]})})),t}function o(e,n){if(!e)return;if(!n)return;let t=null;const a=[n.primaryScheme,...n.secondarySchemes];for(const r of a)if(r.name?.toLowerCase()===e.toLowerCase()){t=r;break}return t}function c(e,n,t){if(!e&&!n)return[];if(!t)return[];const a=!e?.length,r=!n?.length,s=[t.primaryScheme,...t.secondarySchemes],i=[];for(const l of s){const t=!!a||e.some((e=>l.tags.includes(e))),s=!r&&n.some((e=>l.tags.includes(e)));t&&!s&&i.push(l)}return i}function u(e){const n=e.theme;if(n)return n.getRawSchemes({basemap:e.basemap,geometryType:e.geometryType,basemapTheme:e.basemapTheme})}},30178:(e,n,t)=>{t.r(n),t.d(n,{default:()=>v});var a=t(74719),r=t(11099),s=t(46176),i=t(85151),l=t(2938);const o=500,c=1e8,u=1280,f=12,h=30,p=15;async function m(e){const{view:n,sampleSize:t}=e;if(!e||!e.layer)throw new a.default("scale-range:missing-parameters","'layer' parameter is required");if(e.snapToLOD&&!n)throw new a.default("scale-range:missing-parameters","'view' parameter is required when 'snapToLOD' is true");e.forBinning&&(0,i.p)(e,"scale-range");const{layer:r,...s}=e,c=e.forBinning?l.Mi:l.J4,u=(0,l.Jg)(r,c,e.forBinning);if(!u)throw new a.default("scale-range:invalid-parameters","'layer' must be one of these types: "+(0,l.Ho)(c).join(", "));const f={layerAdapter:u,...s};f.sampleSize=t||o,await(n?.when());const h=null!=f.signal?{signal:f.signal}:null;return await u.load(h),f}function g(e,n,t){const a=function(e,n){const t=f,a=u/4,r=h,s=u/4,i=p,l=u/2;let o=0,c=0,m=0,g=0;switch(e){case"point":case"multipoint":{const e=n;o=e.avgMinDistance??0,c=t,m=e.minDistance??0,g=a;break}case"polyline":{const e=n;o=e.avgLength??0,c=r,m=e.minLength??0,g=s;break}case"polygon":{const e=n;o=e.avgSize??0,c=i,m=e.minSize??0,g=l;break}}return{resolutionForMinScale:o>0?o/c:null,resolutionForMaxScale:m>0?m/g:null}}(e.geometryType,n),s=t?.spatialReference||e.layer.spatialReference;return{minScale:(0,r.gB)(a.resolutionForMinScale??0,s),maxScale:(0,r.gB)(a.resolutionForMaxScale??0,s)}}function d(e,n){let t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(e.constraints&&"effectiveLODs"in e.constraints){const a=e.constraints.effectiveLODs,r=t?a:a.slice().reverse();let s=null;for(const e of r)if(!(t?e.scale>n:e.scale<n)){s=e;break}return s}}function w(e,n,t,r){const{view:s,snapToLOD:i,layerAdapter:l}=e;if(i&&s){const e=d(s,n),a=d(s,t,!1);n=e?e.scale:n,t=a?a.scale:t}if(n<t)throw new a.default("scale-range:invalid","calculated minScale is less than maxScale.");return t>n/2&&(t=Math.floor(t/2)),n>c&&(n=0),"polygon"!==l.geometryType&&(t=0),{minScale:Math.ceil(n),maxScale:Math.floor(t),spatialStatistics:r}}async function v(e){const n=await m(e),{view:t,sampleSize:r,layerAdapter:i,signal:l,filter:o}=n,c=await i.getSampleFeatures({view:t,sampleSize:r,returnGeometry:!0,filter:o,signal:l},"json");if(!c?.length)throw new a.default("scale-range:insufficient-info","No features are available to calculate statistics");const u=await(0,s.A)({features:c,geometryType:i.geometryType}),{minScale:f,maxScale:h}=g(i,u,t);return w(n,f,h,u)}},42648:(e,n,t)=>{t.d(n,{_J:()=>c,_t:()=>o});var a=t(16804),r=t(79538);const s=r.Np.light,i=r.Np.dark;function l(e,n){return e.r===n.r&&e.g===n.g&&e.b===n.b}function o(e,n){let t=0;if(e.length===n.length){let a=e.every(((e,t)=>l(e,n[t])));a?t=1:(a=e.slice().reverse().every(((e,t)=>l(e,n[t]))),a&&(t=-1))}return t}function c(e,n){return Math.ceil(function(e){const n=e.width,t=e.height;let r=e.pixelSizeAt(e.toMap((0,a.tc)(.5*n,.5*t),{exclude:[]}));if(r<=0&&(r=e.pixelSizeAt(e.toMap((0,a.tc)(.5*n,.95*t),{exclude:[]})),r<=0&&"camera"in e)){const n=e.camera.position.clone();n.z=0,r=2*e.pixelSizeAt(n)}return r}(n)*(0,a.Lz)((0,a.cr)(e)))}},66787:(e,n,t)=>{t.r(n),t.d(n,{default:()=>M});t(21265);var a=t(74719),r=t(16804),s=t(11099),i=t(56563),l=t(81467),o=t(30178),c=t(85151),u=t(2938);const f=1e8,h=1128.497176,p=591657527.591555,m=[10,8,4,2],g=[100,100,60,30],d=[2,1,.75,.5],w=[32,18,12,6],v=[{level:0,resolution:156543.03392800014,scale:591657527.591555},{level:1,resolution:78271.51696399994,scale:295828763.795777},{level:2,resolution:39135.75848200009,scale:147914381.897889},{level:3,resolution:19567.87924099992,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.992452562495,scale:4622324.434309},{level:8,resolution:611.4962262813797,scale:2311162.217155},{level:9,resolution:305.74811314055756,scale:1155581.108577},{level:10,resolution:152.87405657041106,scale:577790.554289},{level:11,resolution:76.43702828507324,scale:288895.277144},{level:12,resolution:38.21851414253662,scale:144447.638572},{level:13,resolution:19.10925707126831,scale:72223.819286},{level:14,resolution:9.554628535634155,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.388657133974685,scale:9027.977411},{level:17,resolution:1.1943285668550503,scale:4513.988705},{level:18,resolution:.5971642835598172,scale:2256.994353},{level:19,resolution:.29858214164761665,scale:1128.497176}];function b(e,n){const{view:t}=e;if(!t)throw new a.default("scale-range:invalid-parameters","'view' is required");const r=n.minScale||f,s=t.constraints&&"effectiveLODs"in t.constraints&&t.constraints.effectiveLODs||v,i=[];for(let a=0;a<s.length;a++){if(s[a].scale>r)continue;const e=Number(a),n=[e-3,e,e+3,e+6];for(const t of n)t>-1&&t<s.length&&i.push(s[t].scale);break}return i.sort(((e,n)=>e-n))}function y(e,n){const{view:t,layerAdapter:r}=e;if(!t)throw new a.default("scale-range:invalid-parameters","'view' is required");const i=r.fullExtent,l=r.minScale||h,o=r.maxScale||p,c=n.minScale||0,u=n.maxScale||0;let f=null!=i?(0,s.X_)(t,i):0;return f=f<l&&f>o?f:0,{scales:[l,o,c,u,f].map(Math.round).sort(((e,n)=>e-n)).filter(((e,n,t)=>!!e&&t.indexOf(e)===n)).filter(((e,n,t)=>!n||Math.abs(e-t[n-1])>5)),fullExtentScale:f}}function S(e,n){const{spatialStatistics:t,minScale:s,maxScale:o}=n;if(!("avgSize"in t)||!t.avgSize)throw new a.default("size-range:insufficient-info","average polygon size is invalid");const c=t.avgSize,{view:u}=e;if(!u)throw new a.default("scale-range:invalid-parameters","'view' is required");const{resolution:f,scale:h}=u,p=f/h,{scales:m,fullExtentScale:g}=y(e,{minScale:s,maxScale:o}),d=[],w=[];return m.forEach(((e,n)=>{const{min:t,max:a}=function(e,n){const t=Math.ceil(e/n);let a=Math.ceil(t/4);a<4?a=4:a>16&&(a=16);const r=5*a;return{min:a,max:r<50?50:r}}(c,p*e),s=m.indexOf(g),i=s>-1&&n>s?2:1;d.push(new l.default({value:e,size:(0,r.PN)(t/i)})),w.push(new l.default({value:e,size:(0,r.PN)(a/i)}))})),{minSize:new i.default({valueExpression:"$view.scale",stops:d}),maxSize:new i.default({valueExpression:"$view.scale",stops:w})}}async function M(e){const n=await async function(e){const{view:n}=e;if(!(e&&n&&e.layer))throw new a.default("size-range:missing-parameters","'view' and 'layer' parameters are required");e.forBinning&&(0,c.p)(e,"size-range");const{layer:t,...r}=e,s=e.forBinning?u.Mi:u.J4,i=(0,u.Jg)(t,s,e.forBinning);if(!i)throw new a.default("size-range:invalid-parameters","'layer' must be one of these types: "+(0,u.Ho)(s).join(", "));const l={layerAdapter:i,...r,view:n};await n.when();const o=null!=l.signal?{signal:l.signal}:null;await i.load(o);const f=i.geometryType;if("point"!==f&&"multipoint"!==f&&"polyline"!==f&&"polygon"!==f)throw new a.default("size-range:not-supported",`sizeRange is not supported for geometryType: ${f}`);return l}(e),{view:t,layerAdapter:s,signal:f,filter:h}=n,p=await(0,o.default)({layer:s,view:t,signal:f,filter:h});switch(s.geometryType){case"point":case"multipoint":return function(e,n){const{minScale:t,maxScale:s}=n,o=b(e,{minScale:t,maxScale:s});if(!o.length)throw new a.default("scale-range:insufficient-info","not enough scale values");return{minSize:new i.default({valueExpression:"$view.scale",stops:o.map(((e,n)=>new l.default({value:e,size:(0,r.PN)(m[n])})))}),maxSize:new i.default({valueExpression:"$view.scale",stops:o.map(((e,n)=>new l.default({value:e,size:(0,r.PN)(g[n])})))})}}(n,p);case"polyline":return function(e,n){const{minScale:t,maxScale:s}=n,o=b(e,{minScale:t,maxScale:s});if(!o.length)throw new a.default("scale-range:insufficient-info","not enough scale values");return{minSize:new i.default({valueExpression:"$view.scale",stops:o.map(((e,n)=>new l.default({value:e,size:(0,r.PN)(d[n])})))}),maxSize:new i.default({valueExpression:"$view.scale",stops:o.map(((e,n)=>new l.default({value:e,size:(0,r.PN)(w[n])})))})}}(n,p);case"polygon":return S(n,p);case"mesh":case"multipatch":return null}return null}}}]);