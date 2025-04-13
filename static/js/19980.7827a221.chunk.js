"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[19980,49724,79538,81060],{22420:(e,t,a)=>{a.d(t,{GP:()=>d,LI:()=>u,lc:()=>l,u5:()=>c});a(88677);var r=a(23224);const n=/^-?(\d+)(\.(\d+))?$/i;function s(e,t){return e-t}function i(e,t){let a,r;return a=Number(e.toFixed(t)),a<e?r=a+1/10**t:(r=a,a-=1/10**t),a=Number(a.toFixed(t)),r=Number(r.toFixed(t)),[a,r]}function o(e,t,a,r,n){const s=c(e,t,a,r),i=null==s.previous||s.previous<=n,o=null==s.next||s.next<=n;return i&&o||s.previous+s.next<=2*n}function l(e){const t=String(e),a=t.match(n);if(a?.[1])return{integer:a[1].split("").length,fractional:a[3]?a[3].split("").length:0};if(t.toLowerCase().includes("e")){const e=t.split("e"),a=e[0],r=e[1];if(a&&r){const e=Number(a);let t=Number(r);const n=t>0;n||(t=Math.abs(t));const s=l(e);return n?(s.integer+=t,t>s.fractional?s.fractional=0:s.fractional-=t):(s.fractional+=t,t>s.integer?s.integer=1:s.integer-=t),s}}return{integer:0,fractional:0}}function c(e,t,a,r){const n={previous:null,next:null};if(null!=a){const r=e-a,s=t-a-r;n.previous=Math.floor(Math.abs(100*s/r))}if(null!=r){const a=r-e,s=r-t-a;n.next=Math.floor(Math.abs(100*s/a))}return n}function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const a=e.slice(),{tolerance:r=2,strictBounds:n=!1,indexes:c=a.map(((e,t)=>t))}=t;c.sort(s);for(let s=0;s<c.length;s++){const e=c[s],t=a[e],u=0===e?null:a[e-1],m=e===a.length-1?null:a[e+1],d=l(t).fractional;if(d){let l,c=0,p=!1;for(;c<=d&&!p;){const e=i(t,c);l=n&&0===s?e[1]:e[0],p=o(t,l,u,m,r),c++}p&&(a[e]=l)}}return a}const m={maximumFractionDigits:20};function d(e){return(0,r.ZV)(e,m)}},28245:(e,t,a)=>{a.d(t,{bG:()=>i,Ty:()=>l,YJ:()=>c,Fq:()=>u,vt:()=>o});var r=a(82301),n=a(79538);class s{constructor(e){const{name:t,label:a,description:r,schemes:s}=e;this.name=t,this.label=a,this.description=r,this.schemes=s;const i=e.basemapGroups||n.Np;let o=[];Object.keys(i).forEach((e=>{o=o.concat(i[e])})),this.supportedBasemaps=o,this.basemapGroups=i}isBasemapSupported(e){const t=(0,n.T1)(e,this.supportedBasemaps);return!(!t||!this.supportedBasemaps.includes(t))}getRawSchemes(e){const{basemapId:t,basemapTheme:a}=function(e,t,a){let r=null,s=null;if(t&&(r=(0,n.T1)(t,e,!1),r)){const e=(0,n.BV)(r);null!=e&&(s=e)}return!r&&a&&(r="dark"===a?"dark-gray":"gray",s=a),r||s||(r="gray",s="light"),{basemapId:r,basemapTheme:s}}(this.supportedBasemaps,e.basemap,e.basemapTheme);let s=a;if(t){const e=(0,n.BV)(t,this.basemapGroups);null!=e&&(s=e)}let i=e.geometryType;"multipoint"===i?i="point":"mesh"===i&&(i="polygon");const o=this.schemes[i]||this.schemes.default;return{schemesInfo:(0,r.clone)(o[s]),basemapId:t,basemapTheme:a}}}function i(e){const t=e.themeDictionary,a=new Map;for(const r in t){const e=t[r];a.set(r,new s(e))}return a}function o(e,t){const a=[];return e.forEach((e=>{e.isBasemapSupported(t)&&a.push({name:e.name,label:e.label,description:e.description,basemaps:[...e.supportedBasemaps]})})),a}function l(e,t){if(!e)return;if(!t)return;let a=null;const r=[t.primaryScheme,...t.secondarySchemes];for(const n of r)if(n.name?.toLowerCase()===e.toLowerCase()){a=n;break}return a}function c(e,t,a){if(!e&&!t)return[];if(!a)return[];const r=!e?.length,n=!t?.length,s=[a.primaryScheme,...a.secondarySchemes],i=[];for(const o of s){const a=!!r||e.some((e=>o.tags.includes(e))),s=!n&&t.some((e=>o.tags.includes(e)));a&&!s&&i.push(o)}return i}function u(e){const t=e.theme;if(t)return t.getRawSchemes({basemap:e.basemap,geometryType:e.geometryType,basemapTheme:e.basemapTheme})}},42648:(e,t,a)=>{a.d(t,{_J:()=>c,_t:()=>l});var r=a(16804),n=a(79538);const s=n.Np.light,i=n.Np.dark;function o(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b}function l(e,t){let a=0;if(e.length===t.length){let r=e.every(((e,a)=>o(e,t[a])));r?a=1:(r=e.slice().reverse().every(((e,a)=>o(e,t[a]))),r&&(a=-1))}return a}function c(e,t){return Math.ceil(function(e){const t=e.width,a=e.height;let n=e.pixelSizeAt(e.toMap((0,r.tc)(.5*t,.5*a),{exclude:[]}));if(n<=0&&(n=e.pixelSizeAt(e.toMap((0,r.tc)(.5*t,.95*a),{exclude:[]})),n<=0&&"camera"in e)){const t=e.camera.position.clone();t.z=0,n=2*e.pixelSizeAt(t)}return n}(t)*(0,r.Lz)((0,r.cr)(e)))}},75629:(e,t,a)=>{a.r(t),a.d(t,{cloneScheme:()=>y,getSchemeByName:()=>h,getSchemes:()=>f,getSchemesByTag:()=>g,getThemes:()=>p});var r=a(88102),n=a(62631),s=a(72410),i=a(43073),o=a(28245);const l={color:"#4c64c9",density:.8,layerEffect:"drop-shadow(1px, 1px, 3px, rgba(0,0,0,0.75))"},c={color:"#00ffff",density:.8,layerEffect:"bloom(1.4, 0.6px, 0)"},u={flowSpeed:10,trailLength:100,trailWidth:1,trailCap:"butt",minSize:1,maxSize:4},m={flowSpeed:3,trailLength:.7,trailWidth:8,trailCap:"butt",minSize:4,maxSize:16},d=(0,o.bG)({themeDictionary:{"flow-line":{name:"flow-line",label:"TODO",description:"TODO",schemes:{default:{light:{common:{...u,...l},primary:"seq-lines-purple-brown",secondary:[...s.sequentialLightSchemes,...s.sequentialDarkSchemes].filter((e=>"seq-lines-purple-brown"!==e))},dark:{common:{...u,...c},primary:"seq-mentone-beach",secondary:[...s.sequentialDarkSchemes,...s.sequentialLightSchemes].filter((e=>"seq-mentone-beach"!==e))}}}},"wave-front":{name:"wave-front",label:"TODO",description:"TODO",schemes:{default:{light:{common:{...m,...l},primary:"seq-lines-purple-brown",secondary:[...s.sequentialLightSchemes,...s.sequentialDarkSchemes].filter((e=>"seq-lines-purple-brown"!==e))},dark:{common:{...m,...c},primary:"seq-mentone-beach",secondary:[...s.sequentialDarkSchemes,...s.sequentialLightSchemes].filter((e=>"seq-mentone-beach"!==e))}}}}}});function p(e){return(0,o.vt)(d,e)}function f(e){const t=e.theme||"flow-line",a=(0,o.Fq)({basemap:e.basemap,basemapTheme:e.basemapTheme,theme:d.get(t)});if(!a)return;const{schemesInfo:r,basemapId:s,basemapTheme:i}=a,l=r.common,c={...e,basemap:s};return{primaryScheme:b(c,r.primary,l),secondarySchemes:r.secondary.map((e=>b(c,e,l))).filter(n.Ru),basemapId:s,basemapTheme:i}}function h(e){return(0,o.Ty)(e.name,f(e))}function g(e){return(0,o.YJ)(e.includedTags,e.excludedTags,f(e))}function y(e){if(!e)return;const t={...e};return t.colors=t.colors.map((e=>new r.default(e))),t.tags=[...t.tags],t.color&&(t.color=new r.default(t.color)),t}function b(e,t,a){const n=e.theme||"flow-line",s=i.A[t];if(!s)return;const o=s.stops;return{id:`${n}/${e.basemap}/${t}`,name:s.name,tags:[...s.tags],theme:n,color:new r.default(a.color),colors:o.map((e=>new r.default(e))),density:a.density,flowSpeed:a.flowSpeed,trailLength:"wave-front"===n&&e.hasSizeVariable?2*a.trailLength:a.trailLength,trailWidth:a.trailWidth,trailCap:a.trailCap,layerEffect:a.layerEffect,minSize:a.minSize,maxSize:a.maxSize,minOpacity:.25,maxOpacity:1}}},79538:(e,t,a)=>{a.d(t,{BV:()=>M,EG:()=>w,Lk:()=>I,Ll:()=>z,Np:()=>u,R3:()=>F,SO:()=>f,T1:()=>R,UH:()=>c,Wy:()=>v,XR:()=>p,aM:()=>T,fs:()=>b,i0:()=>N,i3:()=>y});var r=a(66845),n=a(95011),s=a(96247),i=a(76983),o=a(73210),l=a(40731);const c=",",u={light:["streets","gray","topo","terrain","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector","topo-3d","navigation-3d","streets-3d","osm-3d","gray-3d"],dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector","navigation-dark-3d","streets-dark-3d","dark-gray-3d"]},m="percent-of-total",d="field",p={exclude:["median"]},f={years:365,months:30,days:1,hours:1/24,minutes:1/1440,seconds:1/86400,milliseconds:1/864e5},h=new Set(["integer","small-integer"]);let g=null;const y=["date","date-only","timestamp-offset"];function b(e){return(0,n.isDateField)(e)||(0,n.isDateOnlyField)(e)||(0,n.isTimestampOffsetField)(e)}async function w(e){const{field:t,field2:a,field3:r,normalizationField:n,valueExpression:i}=e;let o=[];if(i){if(!g){const{arcadeUtils:e}=await(0,s.lw)();g=e}o=g.extractFieldNames(i)}return t&&o.push(t),a&&o.push(a),r&&o.push(r),n&&o.push(n),o}function v(e){let t=e.normalizationType;return t||(e.normalizationField?t=d:null!=e.normalizationTotal&&(t=m)),t??void 0}function S(e){return String(e).padStart(2,"0")}function x(e,t,a){let r;return"date"===t||"number"===t?("number"===t&&(e=new Date(e)),r=`TIMESTAMP'${a?e.getFullYear():e.getUTCFullYear()}-${S((a?e.getMonth():e.getUTCMonth())+1)}-${S(a?e.getDate():e.getUTCDate())} ${S(a?e.getHours():e.getUTCHours())}:${S(a?e.getMinutes():e.getUTCMinutes())}:${S(a?e.getSeconds():e.getUTCSeconds())}'`):r=e,r}function T(e,t,a,r){const{hasQueryEngine:n}=e,s=`(${x(a,I(e,a),n)} - ${x(t,I(e,t),n)})`;let i=f[r],o="/";return i<1&&(i=1/i,o="*"),{sqlExpression:1===i?s:`(${s} ${o} ${i})`,sqlWhere:null}}function I(e,t){if(t instanceof Date)return"date";if("number"==typeof t)return"number";if("string"==typeof t){const a=e.getField(t);if("<now>"===t.toLowerCase())return;if((0,n.isDateField)(a))return"field"}}function M(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;for(const a in t)if(t[a].includes(e))return a}function R(e,t){let a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=null;return e&&("string"==typeof e?t.includes(e)&&(r=e):r=(0,i.q3)(e)),a?r||"gray":r}function F(e,t){const a=t&&e.getField(t);return!!a&&h.has(a.type)}function z(e){return`cast(${e} as float)`}function N(e,t){const{format:a,timeZoneOptions:n,fieldType:s}=t??{};let i,c;if(n&&({timeZone:i,timeZoneName:c}=(0,l.hv)(n.layerTimeZone,n.datesInUnknownTimezone,n.viewTimeZone,(0,r.J2)(a||"short-date-short-time"),s)),"string"==typeof e&&isNaN(Date.parse("time-only"===s?`1970-01-01T${e}Z`:e)))return e;switch(s){case"date-only":{const t=(0,r.J2)(a||"short-date");return"string"==typeof e?(0,r.iS)(e,{...t}):(0,r.Yq)(e,{...t,timeZone:o.n$})}case"time-only":{const t=(0,r.J2)(a||"short-time");return"string"==typeof e?(0,r.F8)(e,t):(0,r.Yq)(e,{...t,timeZone:o.n$})}case"timestamp-offset":{if(!i&&"string"==typeof e&&new Date(e).toISOString()!==e)return e;const t=a||n?(0,r.J2)(a||"short-date-short-time"):void 0,s=t?{...t,timeZone:i,timeZoneName:c}:void 0;return"string"==typeof e?(0,r.Ey)(e,s):(0,r.Yq)(e,s)}default:{const t=a||n?(0,r.J2)(a||"short-date-short-time"):void 0;return(0,r.Yq)("string"==typeof e?new Date(e):e,t?{...t,timeZone:i,timeZoneName:c}:void 0)}}}},83633:(e,t,a)=>{a.r(t),a.d(t,{createRasterLayerAdapter:()=>x,getDefaultBandCombination:()=>I,getSupportedRendererInfo:()=>T,processRasterRendererParameters:()=>M});var r=a(74719),n=a(76874),s=a(93800),i=a(48602),o=(a(21265),a(50925),a(14746),a(75269)),l=a(75400),c=a(47659),u=a(45643),m=a(81933),d=a(76612);let p=class extends m.A{constructor(){super(...arguments),this.type="raster-layer-adapter",this._statsCache=new d.q(20)}get serviceRasterInfo(){return this.rasterInfo}async updateRasterInfo(e){this.rasterInfo=await this.generateRasterInfo(e),this.rasterFunction=e?.rasterFunction}async updateRasterInfoWithEstimatedStats(e,t){const a=await this.estimateStatisticsHistograms(t);a?.statistics&&(e.statistics=a.statistics),a?.histograms&&(e.histograms=a.histograms)}};(0,s._)([(0,i.MZ)()],p.prototype,"layer",void 0),(0,s._)([(0,i.MZ)()],p.prototype,"serviceRasterInfo",null),(0,s._)([(0,i.MZ)()],p.prototype,"rasterInfo",void 0),(0,s._)([(0,i.MZ)()],p.prototype,"rasterFunction",void 0),(0,s._)([(0,i.MZ)({readOnly:!0})],p.prototype,"type",void 0),(0,s._)([(0,i.MZ)()],p.prototype,"version",void 0),p=(0,s._)([(0,o.$)("esri.smartMapping.raster.support.adapters.RasterLayerAdapter")],p);const f=p;let h=class extends f{generateRasterInfo(e){const t=e?.rasterFunction;try{return this.layer.generateRasterInfo(t,{signal:e?.signal})}catch{return Promise.resolve(this.layer.serviceRasterInfo)}}async estimateStatisticsHistograms(e){const{layer:t}=this,a=t.mosaicRule?.multidimensionalDefinition?.[0]?.variableName??"",r=`${e?.rasterFunction?.functionName??"default"}${a}`,n=this._statsCache.get(r);if(n)return n;let{width:s,height:i,pixelSize:o}=t.rasterInfo,m=1;for(;s>2e3||i>2e3;)s/=2,i/=2,m*=2;const d=e?.rasterFunction??t.rasterFunction,{fullExtent:p,mosaicRule:f}=t;o=new l.default(o.x*m,o.y*m,p.spatialReference);const h=new u.default({geometry:p,pixelSize:o,renderingRule:d,mosaicRule:f});let g;if(t.capabilities.operations.supportsComputeStatisticsHistograms)g=await t.computeStatisticsHistograms(h,e);else{const{histograms:a}=await t.computeHistograms(h,e);g={statistics:(0,c.Pg)(a),histograms:a}}return g&&this._statsCache.put(r,g),g}supportsMultidirectionalHillshade(){return this.layer.version>=10.81}load(e){return this.addResolvingPromise(this.layer.load(e).then((()=>{this.generateRasterInfo({rasterFunction:this.rasterFunction,signal:e?.signal}).then((e=>this.rasterInfo=e))}))),Promise.resolve(this)}};(0,s._)([(0,i.MZ)()],h.prototype,"layer",void 0),h=(0,s._)([(0,o.$)("esri.smartMapping.raster.support.adapters.ImageryLayerAdapter")],h);const g=h;var y=a(12560);let b=class extends f{async generateRasterInfo(e){const{layer:t}=this,a=e?.rasterFunction;if("imagery-tile"===t.type&&a)try{return await t.generateRasterInfo(a,{signal:e?.signal})}catch{return t.serviceRasterInfo}return this.rasterInfo}async estimateStatisticsHistograms(e){const{layer:t}=this,a=t.multidimensionalDefinition?.[0]?.variableName??"",n=`${t.rasterFunction?.functionName??"default"}${a}`,s=this._statsCache.get(n);if(s)return s;const{raster:i}=t,{extent:o,width:l,height:u}=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;const{pyramidScalingFactor:a,maximumPyramidLevel:r}=e.storageInfo;let{extent:n,width:s,height:i,pixelSize:o}=e,l=Math.max(0,Math.ceil(Math.log(Math.max(s,i)/t)/Math.log(a))-1),c=0,u=0;if(l<=r){const e=a**l;s=Math.floor(s/e),i=Math.floor(i/e)}else l=0,s=Math.min(s,t),i=Math.min(i,t),c=Math.max(Math.floor(s/2-500),0),u=Math.max(Math.floor(i/2-500),0),n=new y.default({xmin:n.xmin+c*o.x,xmax:Math.min(n.xmax,n.xmin+c*o.x*t),ymin:n.ymin+u*o.y,ymax:Math.min(n.ymax,n.ymin+u*o.y*t)});return{extent:n,width:s,height:i,origin:{x:c,y:u}}}(i.rasterInfo),{pixelBlock:m}=await t.fetchPixels(o,l,u,e);if(null==m)throw new r.default("raster-layer-adapter","Unable to estimate histograms");const d=(0,c.f4)(m);return d&&this._statsCache.put(n,d),d}supportsMultidirectionalHillshade(){return!0}load(e){return this.addResolvingPromise(this.layer.load(e).then((()=>this.rasterInfo=this.layer.raster.rasterInfo))),Promise.resolve(this)}};(0,s._)([(0,i.MZ)()],b.prototype,"layer",void 0),b=(0,s._)([(0,o.$)("esri.smartMapping.raster.support.adapters.ImageryTileLayerAdapter")],b);const w={imagery:{adapter:g,label:"ImageryLayer"},"imagery-tile":{adapter:b,label:"ImageryTileLayer"},wcs:{adapter:b,label:"WCSLayer"}},v={"raster-stretch":"raster-stretch","unique-value":"raster-unique-value","raster-rgb":"raster-rgb","class-breaks":"raster-class-breaks","raster-colormap":"raster-colormap","raster-shaded-relief":"raster-shaded-relief","vector-field":"raster-vector-field",flow:"raster-flow"},S=Object.keys(w).map((e=>w[e].label));function x(e){if("raster-layer-adapter"===e.type)return e;const t=w[e.type]?.adapter;return null==t?null:new t({layer:e})}async function T(e){const t=x((e=await M(e)).layer),a=await t.generateRasterInfo(e),r=(0,n.fp)(a,!0).map((e=>v[e])),s=t.layer,i="imagery-tile"===s.type?(0,n.Mm)(s.raster):void 0,o="wcs"!==s.type?s.presetRenderers:void 0,l=(0,n.I8)({variableName:e.variableName,rasterFunctionName:e.rasterFunction?.functionName,presetRenderers:o}),c=l?.renderer??(0,n.PD)(a,{rasterFunctionColorRamp:i,variableName:e.variableName}),{bandCount:u}=a;return u>1&&r.push("raster-rgb"),!r.includes("raster-class-breaks")&&1===u&&+t.layer?.version>=10.3&&r.push("raster-class-breaks"),{supportedTypes:r,defaultRenderer:c}}async function I(e){const t=x((e=await M(e)).layer),a=await t.generateRasterInfo(e),{layer:r}=t;if("wcs"!==r.type&&r.presetRenderers?.length){const t=(0,n.I8)({variableName:e.variableName,rasterFunctionName:e.rasterFunction?.functionName,presetRenderers:r.presetRenderers});if(t?.bandIds?.length)return t.bandIds}return(0,n.ci)(a)}async function M(e){const{layer:t}=e;if(!t)throw new r.default("raster-renderer-creator:missing-parameters","'layer' parameter is required");const a=x(t);if(null==a)throw new r.default("raster-renderer-creator:invalid-parameters","'layer' must be one of these types: "+S.join(", "));await a.load();const n=e.rasterFunction??e.renderingRule??t.rasterFunction;return await a.updateRasterInfo({rasterFunction:n,signal:e.signal}),{...e,layer:a,rasterFunction:n}}},96308:(e,t,a)=>{a.r(t),a.d(t,{createRenderer:()=>v});var r=a(2925),n=a(74719),s=a(45023),i=a(84267),o=a(76874),l=a(37382),c=a(80023),u=a(72861),m=a(56563),d=a(88311),p=a(34441),f=a(81467),h=a(83633),g=a(39569),y=a(75629);const b=5;async function w(e,t){t.flowRepresentation&&(e.flowRepresentation=t.flowRepresentation);const a=await async function(e){let t=e.flowScheme,a=null,r=null;const n=await(0,g.Ib)(null,e.view);if(a=null!=n.basemapId?n.basemapId:null,r=null!=n.basemapTheme?n.basemapTheme:null,t)return{scheme:(0,y.cloneScheme)(t),basemapId:a,basemapTheme:r};const s=(0,y.getSchemes)({basemapTheme:r,theme:e.theme,hasSizeVariable:e.hasSizeVariable});return s&&(t=s.primaryScheme,a=s.basemapId,r=s.basemapTheme),{scheme:t,basemapId:a,basemapTheme:r}}({theme:t.theme,flowScheme:t.flowScheme,view:t.view,hasSizeVariable:t.includeSizeVariable}),h=a.scheme;if(!h)throw new n.default("flow-renderer:insufficient-info","Unable to find flow scheme");e.flowSpeed=h.flowSpeed,e.density=h.density,e.trailLength=h.trailLength,e.trailWidth=h.trailWidth,e.trailCap=h.trailCap,e.color=h.color;const w=[],v=[],S="Magnitude",x=t.layer.serviceRasterInfo,T=null==x?.statistics||"vector-magdir"!==x.dataType&&"vector-uv"!==x.dataType?{minMagnitude:0,maxMagnitude:10}:(0,o.iG)(x.dataType,x.statistics);if(null==T?.minMagnitude||null==T.maxMagnitude)throw new n.default("flow-renderer:insufficient-info","stats not available");const I={min:T.minMagnitude,max:T.maxMagnitude},M={min:I.min,max:null!=I.max?I.max/2:null},R=(0,g.Gc)(M,null,null),F=(0,g.TQ)(R,M,null);if(t.includeColorVariable){const e=(0,r.Iy)(h.colors,b);if(e.length<b)throw new n.default("flow-renderer:insufficient-info","Flow scheme does not have enough colors");const t=new c.default({field:S,stops:F.map(((t,a)=>new d.default({value:t,color:e[a]})))});w.push(t);const a=new i.default({type:"color",minSliderValue:I.min,maxSliderValue:I.max,theme:"high-to-low"});v.push(a)}if(t.includeOpacityVariable){const e=new u.default({field:S,stops:[new p.default({value:F[0],opacity:h.minOpacity}),new p.default({value:F[4],opacity:h.maxOpacity})]});w.push(e);const t=new i.default({type:"opacity",minSliderValue:I.min,maxSliderValue:I.max});v.push(t)}if(t.includeSizeVariable){const e=new m.default({field:S,stops:[new f.default({value:I.min,size:h.minSize}),new f.default({value:I.max,size:h.maxSize})]});w.push(e);const t=new i.default({type:"size",minSliderValue:I.min,maxSliderValue:I.max,theme:"high-to-low"});v.push(t)}const z=new s.default({type:"flow",visualVariables:v.length?v:void 0,flowTheme:h.theme});return e.visualVariables=w,e.authoringInfo=z,e.legendOptions=l.A.from(t.legendOptions),{renderer:e,visualVariables:w.map((e=>e.clone())),flowScheme:(0,y.cloneScheme)(h),basemapId:a.basemapId,basemapTheme:a.basemapTheme,layerEffect:h.layerEffect,statistics:I}}async function v(e){e=await async function(e){const t={...e};return t.theme||(t.theme="flow-line"),(0,h.processRasterRendererParameters)(t)}(e);const t=(0,o.un)(e.layer.serviceRasterInfo);if(null==t)throw new n.default("flow-renderer:not-supported","Only vector data is supported");return w(t,e)}}}]);