"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[39569],{17675:(e,t,n)=>{n.r(t),n.d(t,{getAgeExpressions:()=>c,supportedAgeUnits:()=>r,verifyDates:()=>o});var a=n(74719),i=n(79538),l=n(2938);const s=new Set(["date","number"]),r=["years","months","days","hours","minutes","seconds"];function o(e,t,n,l){const r=[];let o=null;return[t,n].every((t=>{const n=(0,i.Lk)(e,t);return n&&r.push(n),!!n}))?r[0]===r[1]?"field"===r[0]?t===n&&(o=new a.default(l,"'startTime' and 'endTime' parameters cannot be identical")):o=new a.default(l,"Invalid combination of 'startTime' and 'endTime' parameters"):s.has(r[0])&&s.has(r[1])&&(o=new a.default(l,"Invalid combination of 'startTime' and 'endTime' parameters")):o=new a.default(l,"'startTime' and 'endTime' parameters must be one of these values: a date object, unix epoch time, name of a valid date field or <now>"),o}function u(e,t,n){let a;return a="number"===t?e:"date"===t?e.getTime():'$feature["'+e+'"]',"var "+n+" = "+a+";"}function d(e,t,n,a){const l=(0,i.Lk)(e,t),s=(0,i.Lk)(e,n),r=[u(t,l,"startTime"),u(n,s,"endTime"),`var retVal = null;\n\n    if (startTime != null && endTime != null) {\n      startTime = Date(startTime);\n      endTime = Date(endTime);\n      retVal = DateDiff(endTime, startTime, "${a}");\n    }\n\n    return retVal;`],o=[];return"field"===l&&o.push(t),"field"===s&&o.push(n),function(e){const t=e.map((e=>`$feature["${e}"];`));return t.length?t.join("\n")+"\n":""}(o)+r.join("\n")}function c(e){const{layer:t,startTime:n,endTime:a}=e,s=(0,l.Jg)(t),r=e.unit||"days",o=(0,i.aM)(s,n,a,r);return{valueExpression:d(s,n,a,r),statisticsQuery:o,histogramQuery:o}}},25902:(e,t,n)=>{n.d(t,{A:()=>d});var a,i=n(93800),l=n(48602),s=(n(21265),n(50925),n(14746),n(47332)),r=n(75269),o=n(54542);let u=a=class extends o.A{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new a({scaleFactor:this.scaleFactor})}};(0,i._)([(0,s.e)({pointCloudSplatAlgorithm:"splat"})],u.prototype,"type",void 0),(0,i._)([(0,l.MZ)({type:Number,value:1,nonNullable:!0,json:{write:{isRequired:!0}}})],u.prototype,"scaleFactor",void 0),u=a=(0,i._)([(0,r.$)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],u);const d=u},39569:(e,t,n)=>{n.d(t,{BD:()=>W,DL:()=>Z,Gc:()=>R,Ib:()=>ae,Km:()=>ee,MH:()=>Q,N4:()=>$,N6:()=>Y,Nl:()=>X,Pv:()=>O,QR:()=>J,TQ:()=>_,f3:()=>ne,g2:()=>K,l7:()=>le,ou:()=>ie,qc:()=>G,rm:()=>te,u8:()=>H,v5:()=>P});var a=n(88102),i=(n(88677),n(89129)),l=(n(21265),n(74719)),s=n(66845),r=n(22420),o=n(25902),u=n(70183),d=n(91323),c=n(65104),f=n(17675),m=n(79538),p=n(46220),w=n(46144),h=n(35727),y=n(62666),g=n(67349),v=n(39677),b=n(30879),x=n(47874),T=n(85102),z=n(2190),k=n(92744),D=n(99071),V=n(83031),E=n(37047),M=n(61944),q=n(40731),S=n(42006),A=n(53957),B=n(99961);const F=/^(\d+(\.\d+)?)\s*(%)$/i,L=new a.default([0,0,0,.4]),C=new Set(["hours","minutes","seconds"]),I=[...m.Np.light,...m.Np.dark];function U(e,t,n,a){if("string"==typeof e){const t=n.getField(e);if(t&&(0,m.fs)(t))return t.alias||t.name}else if("number"==typeof e||e instanceof Date){const i=null!=t&&C.has(t),l=(0,s.J2)(i?"short-date-short-time":"short-date");if(a&&i){const t=n.layer,{timeZone:i}=(0,q.hv)("preferredTimeZone"in t?t.preferredTimeZone:null,"datesInUnknownTimezone"in t&&t.datesInUnknownTimezone,a.timeZone,l,"date");return(0,s.Yq)(e,{...l,timeZone:i,timeZoneName:q.dS})}return(0,s.Yq)(e,l)}return e}function N(e,t,n){return e+t>0&&0>e-t&&n<0?0:e}function R(e,t,n,a){const{avg:i,stddev:l,min:s,max:r}=e,o=$(e,!!n,a??!0);let u=o?o[0]:s,d=o?o[1]:r;return o?{minDataValue:u,maxDataValue:d,defaultValuesUsed:!0}:("above"===t?u=N(i,l,s):"below"===t&&(d=N(i,l,s)),{minDataValue:u,maxDataValue:d,defaultValuesUsed:!1})}function $(e,t,n){let a,i;const l=function(e){let t,n,a=e.statistics;if(a||(a={}),null==a.min)if(e.isDate){const e=j();t=e[0],n=e[1]}else t=0,n=100;else if(a.min===a.max)if(e.isDate){const e=j(a.min);t=e[0],n=e[1]}else a.min<0?(t=2*a.min,n=0):a.min>0?(t=0,n=2*a.min):(t=0,n=100);return{min:null!=t?t:a.min,max:null!=n?n:a.max,defaultValuesUsed:null!=t||null!=n}}({statistics:e,isDate:t});return l.defaultValuesUsed?(a=l.min,i=l.max):!n||null!=e.avg&&e.stddev||(a=e.min,i=e.max),null!=a&&null!=i?[a,i]:null}function j(e){const t=("number"==typeof e?new Date(e):new Date).getUTCFullYear();let n=Date.UTC(t,0,1,12,0,0,0),a=Date.UTC(t,11,31,12,0,0,0);return"number"==typeof e&&(e<n&&(n=e),e>a&&(a=e)),[n,a]}function _(e,t,n){let{minDataValue:a,maxDataValue:i,defaultValuesUsed:l}=e,s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return l||"above"===n||"below"===n?H(a,i,5):W(t,s)}function J(e,t){const{avg:n,stddev:a}=e,i=e.min,l=e.max;if(null==n||null==a){const[n,a]=$(e,t,!0);return H(n,a,5)}const s=N(n,a,i),o=l-s,u=s-i,d=Math.max(o,u);return(0,r.LI)([s-d,s-d/2,s,d/2+s,s+d],{strictBounds:!0})}function Z(e,t){const{min:n,max:a}=t,[i,l,s,o,u]=e,d=null!=n&&i<n,c=null!=a&&u>a;if(null==n||null==a||!d&&!c)return e;const f=d?n:i,m=c?a:u;return(0,r.LI)([f,d?f+(s-f)/2:l,s,c?s+(m-s)/2:o,m],{strictBounds:!0})}function H(e,t,n){const a=(t-e)/(n-1),i=[e];for(let l=1;l<=n-2;l++)i.push(e+l*a);return i.push(t),(0,r.LI)(i,{strictBounds:!0})}function W(e){let{min:t,max:n,avg:a,stddev:i}=e;if(null==t||null==n||null==a||null==i)return[];let l=a-i,s=a+i;l<t&&(l=t),s>n&&(s=n),(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&(a=l+(s-l)/2);let o=(0,r.LI)([l,s],{strictBounds:!0});return l=o[0],s=o[1],o=[l,l+(a-l)/2,a,a+(s-a)/2,s],(0,r.LI)(o,{strictBounds:!0})}function Y(e,t,n){switch(t){case"point":case"multipoint":return n?"noDataSize"in e?e.noDataSize:null:"size"in e?e.size:null;case"polyline":return n?"noDataWidth"in e?e.noDataWidth:null:"width"in e?e.width:null;case"polygon":return"size"in e?e.size:null;default:return}}function G(e,t,n){switch(t){case"point":case"multipoint":case"polygon":{if(!("outline"in e))return null;const t={color:e.outline.color,width:e.outline.width};if(null!=n&&t.color){const e=t.color.clone();e.a=n,t.color=e}return t}default:return}}function P(e,t){const{type:n,size:a,color:l,outline:s}=t;let r;switch(e){case"point":case"multipoint":if("2d"===n)r=new V.default({color:l,size:a,outline:{color:s.color,width:s.width}});else if("3d-flat"===n)r=new T.default({symbolLayers:new i.default([new h.default({size:a,resource:{primitive:"circle"},material:{color:l},outline:{color:s.color,size:s.width}})])});else if(n?.includes("3d-volumetric")){const e="3d-volumetric-uniform"===n,s=new b.default({height:a,resource:{primitive:e?"sphere":"cylinder"},material:{color:l}});e||(s.width=t.widthAndDepth,s.depth=t.widthAndDepth),r=new T.default({symbolLayers:new i.default([s])})}break;case"polyline":"2d"===n?r=new D.default({color:l,width:a}):"3d-flat"===n?r=new y.default({symbolLayers:new i.default([new g.default({size:a,material:{color:l}})])}):"3d-volumetric"===n&&(r=new y.default({symbolLayers:new i.default([new x.default({width:"number"==typeof a?a:parseFloat(a),height:"number"==typeof a?a:parseFloat(a),material:{color:l}})])}));break;case"polygon":"2d"===n?r=new k.default({color:l,outline:{color:s.color,width:s.width}}):"3d-flat"===n?r=new z.default({symbolLayers:new i.default([new w.default({material:{color:l},outline:{color:s.color,size:s.width}})])}):"3d-volumetric"===n&&(r=new z.default({symbolLayers:new i.default([new p.default({size:a,material:{color:l}})])}));break;case"mesh":{const e=t.meshInfo?.colorMixMode,n=t.meshInfo?.edgesType;r=new v.default({symbolLayers:new i.default([new w.default({material:{color:l,colorMixMode:e||null},edges:"solid"===n?new M.default({color:L}):"sketch"===n?new E.default({color:L}):null})])});break}}return r}function Q(e,t,n){const a=function(e){const t=e.layer;return e.fields.filter((e=>!t.getField(e)))}({layer:e,fields:t});if(a.length)return new l.default(n,"Unknown fields: "+a.join(", ")+". You can only use fields defined in the layer schema");const i=function(e){const t=e.layer;return e.fields.filter((e=>{const n=t.getFieldUsageInfo(e);return!n||!n.supportsRenderer}))}({layer:e,fields:t});return i.length?new l.default(n,"Unsupported fields: "+i.join(", ")+". You can only use fields that are accessible to the renderer i.e. FieldUsageInfo.supportsRenderer must be true"):void 0}async function O(e,t){const n={layer:e.layer,view:e.view,filter:e.filter,signal:e.signal},[a,i]=await Promise.all([(0,d.default)(e).catch(ie),t?(0,u.A)(n).catch(ie):null]),l=$({min:a?.minValue,max:a?.maxValue,avg:null,stddev:null},!1,!1);return{result:l?await(0,d.default)({...e,classificationMethod:"equal-interval",numClasses:1,analyzeData:!1,minValue:l[0],maxValue:l[1],normalizationTotal:l[0]+l[1]}):a,defaultValuesUsed:!!l,outlineResult:i}}function K(e){return(0,c.default)({outStatisticTypes:m.XR,...e})}function X(e,t){let{minSize:n,maxSize:a}=e;return"height"===t&&(n=((a-n)/2+n)/4.6,a*=2),{minSize:n,maxSize:a}}function ee(e){return F.test(e)}function te(e){if(null==e)return;const t=e.match(F),n=Number(t[1]);return"%"===t[3]?new o.A({scaleFactor:n/100}):void 0}function ne(e,t,n,a){e.startTime=t instanceof Date?t.getTime():t,e.endTime=n instanceof Date?n.getTime():n,e.units=a,e.field="string"==typeof t?t:"string"==typeof n?n:null}async function ae(e,t){let n=null,a=null;if(!e&&!t)return{basemapId:n,basemapTheme:a};if(t&&(a=await(0,S.getBackgroundColorTheme)(t),e||(e=t.map?.basemap)),e&&(n=(0,m.T1)(e,I,!1),n&&!a)){const e=(0,m.BV)(n);null!=e&&(a=e)}return!n&&a&&(n="dark"===a?"dark-gray":"gray"),{basemapId:n,basemapTheme:a}}function ie(e){const t=e.name?.toLowerCase();if(!t||t?.includes(":insufficient-info")||t?.includes(":insufficient-data"))return null;throw e}async function le(e,t){const{layer:n,startTime:a,endTime:i,view:l}=e,s=(0,f.getAgeExpressions)({layer:n,startTime:a,endTime:i,unit:t}).valueExpression,r=await(0,A.ud)("esri/smartMapping/t9n/smartMapping");return{valueExpression:s,title:(0,B.V)(r[`ageInfo_${t}`],{unit:t,startTime:U(a,t,n,l),endTime:U(i,t,n,l)})}}},42006:(e,t,n)=>{n.r(t),n.d(t,{getBackgroundColor:()=>l,getBackgroundColorTheme:()=>s});var a=n(88102),i=n(2925);async function l(e){await e.whenReady();const t=e.basemapView?.baseLayerViews.map((e=>e.layer)).toArray()??[];if(!t.length){const t=getComputedStyle(e.container).backgroundColor,n=t?new a.default(t):void 0;return("background"in e?e.background?.color:void 0)||(0!==n?.a?n:null)||null}const n=(await e.takeScreenshot({format:"png",layers:t})).data.data,i=n.length;let l=0,s=0,r=0,o=0,u=0,d=0;for(let a=0;a<i;a+=4){const e=n[a],t=n[a+1],i=n[a+2],c=n[a+3],f=c/255;l+=e*e*f,s+=t*t*f,r+=i*i*f,u+=f,c&&(o+=c,d++)}return l=Math.round(Math.sqrt(l/u)),s=Math.round(Math.sqrt(s/u)),r=Math.round(Math.sqrt(r/u)),new a.default([l,s,r,o/d/255])}async function s(e){if(!e)return null;const t=await l(e);return null!=t?(0,i.rs)(t):null}},46176:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(53053),i=n(11771);function l(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[];if(t){for(const a of e)if(a.geometry){const e=a.geometry;n.push.apply(n,e.points)}}else n=e.map((e=>e.geometry));const i=[],l=[];let s=1/0,r=-1/0,o=0,u=0,d=0,c=0;for(const f of n){if(!f)continue;t?(i[0]=f[0],i[1]=f[1]):(i[0]=f.x,i[1]=f.y);let e=1/0,m=-1/0;for(const o of n){if(o===f)continue;if(!o)continue;t?(l[0]=o[0],l[1]=o[1]):(l[0]=o.x,l[1]=o.y);const n=(0,a.R3)(i,l);n>0&&(n<e&&(e=n),n<s&&(s=n),n>m&&(m=n),n>r&&(r=n))}e!==1/0&&(++d,o+=e),m!==-1/0&&(++c,u+=m)}return{minDistance:s!==1/0?s:null,maxDistance:r!==-1/0?r:null,avgMinDistance:d?o/d:null,avgMaxDistance:c?u/c:null}}function s(e){const{features:t}=e;let n=null;switch(e.geometryType){case"point":n=l(t);break;case"multipoint":n=l(t,!0);break;case"polyline":n=function(e){let t=0,n=0,i=1/0,l=-1/0;for(const s of e){const e=s.geometry;if(e){let s=0;for(const t of e.paths){const e=(0,a.Yl)(t);e>0&&(s+=e)}s>0&&(++t,n+=s,s<i&&(i=s),s>l&&(l=s))}}return{minLength:i!==1/0?i:null,maxLength:l!==-1/0?l:null,avgLength:t?n/t:null}}(t);break;case"polygon":n=function(e){let t=0,n=0,a=1/0,l=-1/0;for(const s of e){const e=s.geometry;if(e){const s=(0,i.v)(e);if(s){const e=Math.abs(s.xmax-s.xmin),i=Math.abs(s.ymax-s.ymin),r=Math.sqrt(e*i);r>0&&(++t,n+=r,r<a&&(a=r),r>l&&(l=r))}}}return{minSize:a!==1/0?a:null,maxSize:l!==-1/0?l:null,avgSize:t?n/t:null}}(t)}return Promise.resolve(n)}},54542:(e,t,n)=>{n.d(t,{A:()=>d});var a=n(93800),i=n(42761),l=n(19455),s=n(48602),r=(n(21265),n(50925),n(14746),n(75269));const o=new i.J({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let u=class extends l.A{};(0,a._)([(0,s.MZ)({type:o.apiValues,readOnly:!0,nonNullable:!0,json:{type:o.jsonValues,read:!1,write:{writer:o.write,isRequired:!0}}})],u.prototype,"type",void 0),u=(0,a._)([(0,r.$)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],u);const d=u},65104:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(74719),i=n(95011),l=n(70934),s=n(85151),r=n(79538),o=n(2938);const u=[...i.numericTypes,...r.i3,"time-only","string"];async function d(e){const{layerAdapter:t,...n}=await async function(e){if(!e?.layer||!(e.field||e.valueExpression||e.sqlExpression))throw new a.default("summary-statistics:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.sqlExpression&&!e.view)throw new a.default("summary-statistics:missing-parameters","View is required when 'valueExpression' is specified");e.forBinning&&(0,s.p)(e,"summary-statistics");const{layer:t,...n}=e,d=e.forBinning?o.Mi:o.G3,c=(0,o.Jg)(t,d,e.forBinning);if(!c)throw new a.default("summary-statistics:invalid-parameters","'layer' must be one of these types: "+(0,o.Ho)(d).join(", "));const f={layerAdapter:c,...n};f.normalizationType=(0,r.Wy)(f);const m=null!=f.signal?{signal:f.signal}:null;await c.load(m);const p=f.field,w=f.normalizationType,h=f.valueExpression||f.sqlExpression,y=p?c.getField(p):null,g=await(0,r.EG)({field:f.field,normalizationField:f.normalizationField,valueExpression:f.valueExpression}),v=(0,l.MH)(c,g,"summary-statistics:invalid-parameters");if(v)throw v;if(y){const e=(0,l.a)(c,y,"summary-statistics:invalid-parameters",u);if(e)throw e;if(((0,r.fs)(y)||(0,i.isTimeOnlyField)(y))&&w)throw new a.default("summary-statistics:invalid-parameters","Normalization is not allowed for date fields")}else if(h&&w)throw new a.default("summary-statistics:invalid-parameters","Normalization is not allowed when 'valueExpression' or 'sqlExpression' is specified");f.filter&&!f.filter.spatialRelationship&&(f.filter.spatialRelationship="intersects");const b=(0,l.Wk)(f.filter,"summary-statistics:invalid-parameters");if(b)throw b;return f}(e);return t.summaryStatistics(n)}},70183:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(74719),i=n(11099),l=n(56563),s=n(81467),r=n(46176),o=n(85151),u=n(2938);const d=[{size:10,width:0},{size:20,width:.5},{size:80,width:1},{size:250,width:2}];async function c(e){const{layerAdapter:t,...n}=await async function(e){const{view:t}=e;if(!(e&&t&&e.layer))throw new a.default("outline:missing-parameters","'view' and 'layer' parameters are required");e.forBinning&&(0,o.p)(e,"outline");const{layer:n,...i}=e,l=e.forBinning?u.Mi:u.J4,s=(0,u.Jg)(n,l,e.forBinning);if(!s)throw new a.default("outline:invalid-parameters","'layer' must be one of these types: "+(0,u.Ho)(l).join(", "));const r={layerAdapter:s,...i,view:t};await t.when();const d=null!=r.signal?{signal:r.signal}:null;if(await s.load(d),"polygon"!==s.geometryType)throw new a.default("outline:not-supported",`outline is not supported for geometryType: ${s.geometryType}`);return r}(e),c=await t.getSampleFeatures({sampleSize:-1,returnGeometry:!0,...n},"json");if(!c?.length)throw new a.default("outline:insufficient-info","No features are available to calculate statistics");const f=await(0,r.A)({features:c,geometryType:t.geometryType});if(!(f&&"avgSize"in f&&f.avgSize))throw new a.default("outline:insufficient-info","average polygon size is invalid");return function(e,t){const n=e.avgSize,a=(0,i.gB)(1,t.spatialReference),r=d.map((e=>new s.default({size:e.width,value:Math.round(n/e.size*a)})));return r.sort(((e,t)=>e.value-t.value)),{visualVariables:[new l.default({target:"outline",valueExpression:"$view.scale",stops:r})],opacity:.25}}({...f,avgSize:f.avgSize},n.view)}},85151:(e,t,n)=>{n.d(t,{p:()=>l,z:()=>i});var a=n(74719);const i="aggregateCount";function l(e,t){if(!e.view)throw new a.default(`${t}:missing-parameters`,"'view' parameter is required for binning");if(e.sqlExpression)throw new a.default(`${t}:invalid-parameters`,"'sqlExpression' parameter is not supported for binning");if("3d"===e.view.type)throw new a.default(`${t}:invalid-parameters`,"3d view is not supported for binning")}},91323:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var a=n(74719),i=n(70934),l=n(85151),s=n(79538),r=n(2938);const o=5;async function u(e){const{layerAdapter:t,...n}=await async function(e){if(!e?.layer||!e.field&&!e.valueExpression)throw new a.default("class-breaks:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(e.valueExpression&&!e.view)throw new a.default("class-breaks:missing-parameters","View is required when 'valueExpression' is specified");e.forBinning&&(0,l.p)(e,"class-breaks");const{layer:t,...n}=e,u=e.forBinning?r.Mi:r.J4,d=(0,r.Jg)(t,u,e.forBinning);if(!d)throw new a.default("class-breaks:invalid-parameters","'layer' must be one of these types: "+(0,r.Ho)(u).join(", "));const c={layerAdapter:d,...n};c.normalizationType=(0,s.Wy)(c),c.numClasses=c.numClasses||o;const f=null!=c.signal?{signal:c.signal}:null;await d.load(f);const m=c.field,p=c.minValue,w=c.maxValue,h=null!=p||null!=w,y=c.classificationMethod,g="percent-of-total"===c.normalizationType,v=!1!==c.analyzeData,b=m?d.getField(m):null,x=await(0,s.EG)({field:c.field,normalizationField:c.normalizationField,valueExpression:c.valueExpression}),T=(0,i.MH)(d,x,"class-breaks:invalid-parameters");if(T)throw T;if(b){const e=(0,i.hw)(d,b,"class-breaks:invalid-parameters");if(e)throw e}if(c.valueExpression&&c.normalizationType)throw new a.default("class-breaks:invalid-parameters","Normalization is not allowed when 'valueExpression' is specified");if(h)if(v){if(g&&null==c.normalizationTotal)throw new a.default("class-breaks:missing-parameters","'normalizationTotal' is required when 'normalizationType' is 'precent-of-total' and 'minValue', 'maxValue' are specified")}else{if(null==p||null==w)throw new a.default("class-breaks:missing-parameters","Both 'minValue' and 'maxValue' are required when 'analyzeData' is false");if(p>=w)throw new a.default("class-breaks:invalid-parameters","'minValue' should be less than 'maxValue'");if(y&&"equal-interval"!==y)throw new a.default("class-breaks:invalid-parameters","'classificationMethod' other than 'equal-interval' is not allowed when 'analyzeData' is false");if(g&&null==c.normalizationTotal)throw new a.default("class-breaks:missing-parameters","'normalizationTotal' is required when 'normalizationType' is 'precent-of-total' and 'analyzeData' is false")}else if(!v)throw new a.default("class-breaks:missing-parameters","Both 'minValue' and 'maxValue' are required when 'analyzeData' is false");c.filter&&!c.filter.spatialRelationship&&(c.filter.spatialRelationship="intersects");const z=(0,i.Wk)(c.filter,"class-breaks:invalid-parameters");if(z)throw z;return c}(e);return t.classBreaks(n)}}}]);