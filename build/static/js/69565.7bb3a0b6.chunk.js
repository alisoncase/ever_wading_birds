"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[69565],{12305:(e,t,a)=>{a.d(t,{A:()=>f});var r=a(93800),s=a(42761),n=a(19455),i=a(48602),l=(a(21265),a(50925),a(14746),a(47332)),o=a(75269);const u=new s.J({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),c=new s.J({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let d=class extends n.A{constructor(e){super(e),this.type="class-breaks-definition",this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null}set standardDeviationInterval(e){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",e)}set definedInterval(e){"defined-interval"===this.classificationMethod&&this._set("definedInterval",e)}};(0,r._)([(0,l.e)({classBreaksDef:"class-breaks-definition"})],d.prototype,"type",void 0),(0,r._)([(0,i.MZ)({json:{write:!0}})],d.prototype,"breakCount",void 0),(0,r._)([(0,i.MZ)({json:{write:!0}})],d.prototype,"classificationField",void 0),(0,r._)([(0,i.MZ)({type:String,json:{read:u.read,write:u.write}})],d.prototype,"classificationMethod",void 0),(0,r._)([(0,i.MZ)({json:{write:!0}})],d.prototype,"normalizationField",void 0),(0,r._)([(0,i.MZ)({json:{read:c.read,write:c.write}})],d.prototype,"normalizationType",void 0),(0,r._)([(0,i.MZ)({value:null,json:{write:!0}})],d.prototype,"standardDeviationInterval",null),(0,r._)([(0,i.MZ)({value:null,json:{write:!0}})],d.prototype,"definedInterval",null),d=(0,r._)([(0,o.$)("esri.rest.support.ClassBreaksDefinition")],d);const f=d},17661:(e,t,a)=>{a.d(t,{_:()=>i,t:()=>l});var r=a(50925);const s=()=>r.A.getLogger("esri.rest.support.generateRendererUtils");function n(e,t){return Number(e.toFixed(t))}function i(e){const t=c(e),a=[],r=t.uniqueValues.length;for(let s=0;s<r;s++){const e=t.uniqueValues[s],r=t.valueFrequency[s],n=e.toString();a.push({value:e,count:r,label:n})}return{uniqueValues:a}}function l(e,t){const{normalizationTotal:a}=e;return{classBreaks:o(e,t),normalizationTotal:a}}function o(e,t){const a=e.definition,{classificationMethod:r,normalizationType:s,definedInterval:i}=a,l=a.breakCount??1,o=[];let f=e.values;if(0===f.length)return[];f=f.sort(((e,t)=>e-t));const[h,p]=t??[f.at(0),f.at(-1)];if("equal-interval"===r)if(f.length>=l){const e=(p-h)/l;let t=h;for(let a=1;a<l;a++){const r=n(h+a*e,6);o.push({minValue:t,maxValue:r,label:u(t,r,s)}),t=r}o.push({minValue:t,maxValue:p,label:u(t,p,s)})}else f.forEach((e=>{o.push({minValue:e,maxValue:e,label:u(e,e,s)})}));else if("natural-breaks"===r){const t=c(f),a=e.valueFrequency||t.valueFrequency,r=d(t.uniqueValues,a,l);let i=h;for(let e=1;e<l;e++)if(t.uniqueValues.length>e){const a=n(t.uniqueValues[r[e]],6);o.push({minValue:i,maxValue:a,label:u(i,a,s)}),i=a}o.push({minValue:i,maxValue:p,label:u(i,p,s)})}else if("quantile"===r)if(f.length>=l&&h!==p){let e=h,t=Math.ceil(f.length/l),a=0;for(let r=1;r<l;r++){let n=t+a-1;n>f.length&&(n=f.length-1),n<0&&(n=0),o.push({minValue:e,maxValue:f[n],label:u(e,f[n],s)}),e=f[n],a+=t,t=Math.ceil((f.length-a)/(l-r))}o.push({minValue:e,maxValue:p,label:u(e,p,s)})}else{let e=-1;for(let t=0;t<f.length;t++){const a=f[t];a!==e&&(e=a,o.push({minValue:e,maxValue:a,label:u(e,a,s)}),e=a)}}else if("standard-deviation"===r){const e=function(e){let t=0;for(let a=0;a<e.length;a++)t+=e[a];return t/=e.length,t}(f),t=function(e,t){let a=0;for(let r=0;r<e.length;r++){const s=e[r];a+=(s-t)*(s-t)}return a/=e.length,Math.sqrt(a)}(f,e);if(0===t)o.push({minValue:f[0],maxValue:f[0],label:u(f[0],f[0],s)});else{const a=function(e,t,a,r,s){let n=Math.max(r-e,t-r)/s/a;return n=n>=1?1:n>=.5?.5:.25,n}(h,p,l,e,t)*t;let r=0,i=h;for(let t=l;t>=1;t--){const l=n(e-(t-.5)*a,6);o.push({minValue:i,maxValue:l,label:u(i,l,s)}),i=l,r++}let c=n(e+.5*a,6);o.push({minValue:i,maxValue:c,label:u(i,c,s)}),i=c,r++;for(let t=1;t<=l;t++)c=r===2*l?p:n(e+(t+.5)*a,6),o.push({minValue:i,maxValue:c,label:u(i,c,s)}),i=c,r++}}else if("defined-interval"===r){if(!i)return o;const[e,a]=t??[f.at(0),f.at(-1)],r=Math.ceil((a-e)/i);let l=e;for(let t=1;t<r;t++){const a=n(e+t*i,6);o.push({minValue:l,maxValue:a,label:u(l,a,s)}),l=a}o.push({minValue:l,maxValue:a,label:u(l,a,s)})}return o}function u(e,t,a){let r=null;return r=e===t?a&&"percent-of-total"===a?e+"%":e.toString():a&&"percent-of-total"===a?e+"% - "+t+"%":e+" - "+t,r}function c(e){const t=[],a=[];let r=Number.MIN_VALUE,s=1,n=-1;for(let i=0;i<e.length;i++){const l=e[i];l===r?(s++,a[n]=s):null!==l&&(t.push(l),r=l,s=1,a.push(s),n++)}return{uniqueValues:t,valueFrequency:a}}function d(e,t,a){const r=e.length,s=[];a>r&&(a=r);for(let i=0;i<a;i++)s.push(Math.round(i*r/a-1));s.push(r-1);let n=f(s,e,t,a);return function(e,t,a,r,s,n){let i=0,l=0,o=0,u=0,c=!0;for(let d=0;d<2&&c;d++){0===d&&(c=!1);for(let d=0;d<n-1;d++)for(;a[d+1]+1!==a[d+2];){a[d+1]=a[d+1]+1;const n=h(d,a,r,s);o=n.sbMean,i=n.sbSdcm;const f=h(d+1,a,r,s);if(u=f.sbMean,l=f.sbSdcm,!(i+l<t[d]+t[d+1])){a[d+1]=a[d+1]-1;break}t[d]=i,t[d+1]=l,e[d]=o,e[d+1]=u,c=!0}for(let d=n-1;d>0;d--)for(;a[d]!==a[d-1]+1;){a[d]=a[d]-1;const n=h(d-1,a,r,s);o=n.sbMean,i=n.sbSdcm;const f=h(d,a,r,s);if(u=f.sbMean,l=f.sbSdcm,!(i+l<t[d-1]+t[d])){a[d]=a[d]+1;break}t[d-1]=i,t[d]=l,e[d-1]=o,e[d]=u,c=!0}}return c}(n.mean,n.sdcm,s,e,t,a)&&(n=f(s,e,t,a)),s}function f(e,t,a,r){let s=[],n=[],i=[],l=0;const o=[],u=[];for(let p=0;p<r;p++){const r=h(p,e,t,a);o.push(r.sbMean),u.push(r.sbSdcm),l+=u[p]}let c,d=l,f=!0;for(;f||l<d;){f=!1,s=[];for(let t=0;t<r;t++)s.push(e[t]);for(let a=0;a<r;a++)for(let s=e[a]+1;s<=e[a+1];s++)if(c=t[s],a>0&&s!==e[a+1]&&Math.abs(c-o[a])>Math.abs(c-o[a-1]))e[a]=s;else if(a<r-1&&e[a]!==s-1&&Math.abs(c-o[a])>Math.abs(c-o[a+1])){e[a+1]=s-1;break}d=l,l=0,n=[],i=[];for(let s=0;s<r;s++){n.push(o[s]),i.push(u[s]);const r=h(s,e,t,a);o[s]=r.sbMean,u[s]=r.sbSdcm,l+=u[s]}}if(l>d){for(let t=0;t<r;t++)e[t]=s[t],o[t]=n[t],u[t]=i[t];l=d}return{mean:o,sdcm:u}}function h(e,t,a,r){let n=0,i=0;for(let s=t[e]+1;s<=t[e+1];s++){const e=r[s];n+=a[s]*e,i+=e}i<=0&&s().warn("Exception in Natural Breaks calculation");const l=n/i;let o=0;for(let s=t[e]+1;s<=t[e+1];s++)o+=r[s]*(a[s]-l)**2;return{sbMean:l,sbSdcm:o}}},83633:(e,t,a)=>{a.r(t),a.d(t,{createRasterLayerAdapter:()=>x,getDefaultBandCombination:()=>R,getSupportedRendererInfo:()=>I,processRasterRendererParameters:()=>V});var r=a(74719),s=a(76874),n=a(93800),i=a(48602),l=(a(21265),a(50925),a(14746),a(75269)),o=a(75400),u=a(47659),c=a(45643),d=a(81933),f=a(76612);let h=class extends d.A{constructor(){super(...arguments),this.type="raster-layer-adapter",this._statsCache=new f.q(20)}get serviceRasterInfo(){return this.rasterInfo}async updateRasterInfo(e){this.rasterInfo=await this.generateRasterInfo(e),this.rasterFunction=e?.rasterFunction}async updateRasterInfoWithEstimatedStats(e,t){const a=await this.estimateStatisticsHistograms(t);a?.statistics&&(e.statistics=a.statistics),a?.histograms&&(e.histograms=a.histograms)}};(0,n._)([(0,i.MZ)()],h.prototype,"layer",void 0),(0,n._)([(0,i.MZ)()],h.prototype,"serviceRasterInfo",null),(0,n._)([(0,i.MZ)()],h.prototype,"rasterInfo",void 0),(0,n._)([(0,i.MZ)()],h.prototype,"rasterFunction",void 0),(0,n._)([(0,i.MZ)({readOnly:!0})],h.prototype,"type",void 0),(0,n._)([(0,i.MZ)()],h.prototype,"version",void 0),h=(0,n._)([(0,l.$)("esri.smartMapping.raster.support.adapters.RasterLayerAdapter")],h);const p=h;let m=class extends p{generateRasterInfo(e){const t=e?.rasterFunction;try{return this.layer.generateRasterInfo(t,{signal:e?.signal})}catch{return Promise.resolve(this.layer.serviceRasterInfo)}}async estimateStatisticsHistograms(e){const{layer:t}=this,a=t.mosaicRule?.multidimensionalDefinition?.[0]?.variableName??"",r=`${e?.rasterFunction?.functionName??"default"}${a}`,s=this._statsCache.get(r);if(s)return s;let{width:n,height:i,pixelSize:l}=t.rasterInfo,d=1;for(;n>2e3||i>2e3;)n/=2,i/=2,d*=2;const f=e?.rasterFunction??t.rasterFunction,{fullExtent:h,mosaicRule:p}=t;l=new o.default(l.x*d,l.y*d,h.spatialReference);const m=new c.default({geometry:h,pixelSize:l,renderingRule:f,mosaicRule:p});let y;if(t.capabilities.operations.supportsComputeStatisticsHistograms)y=await t.computeStatisticsHistograms(m,e);else{const{histograms:a}=await t.computeHistograms(m,e);y={statistics:(0,u.Pg)(a),histograms:a}}return y&&this._statsCache.put(r,y),y}supportsMultidirectionalHillshade(){return this.layer.version>=10.81}load(e){return this.addResolvingPromise(this.layer.load(e).then((()=>{this.generateRasterInfo({rasterFunction:this.rasterFunction,signal:e?.signal}).then((e=>this.rasterInfo=e))}))),Promise.resolve(this)}};(0,n._)([(0,i.MZ)()],m.prototype,"layer",void 0),m=(0,n._)([(0,l.$)("esri.smartMapping.raster.support.adapters.ImageryLayerAdapter")],m);const y=m;var g=a(12560);let v=class extends p{async generateRasterInfo(e){const{layer:t}=this,a=e?.rasterFunction;if("imagery-tile"===t.type&&a)try{return await t.generateRasterInfo(a,{signal:e?.signal})}catch{return t.serviceRasterInfo}return this.rasterInfo}async estimateStatisticsHistograms(e){const{layer:t}=this,a=t.multidimensionalDefinition?.[0]?.variableName??"",s=`${t.rasterFunction?.functionName??"default"}${a}`,n=this._statsCache.get(s);if(n)return n;const{raster:i}=t,{extent:l,width:o,height:c}=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;const{pyramidScalingFactor:a,maximumPyramidLevel:r}=e.storageInfo;let{extent:s,width:n,height:i,pixelSize:l}=e,o=Math.max(0,Math.ceil(Math.log(Math.max(n,i)/t)/Math.log(a))-1),u=0,c=0;if(o<=r){const e=a**o;n=Math.floor(n/e),i=Math.floor(i/e)}else o=0,n=Math.min(n,t),i=Math.min(i,t),u=Math.max(Math.floor(n/2-500),0),c=Math.max(Math.floor(i/2-500),0),s=new g.default({xmin:s.xmin+u*l.x,xmax:Math.min(s.xmax,s.xmin+u*l.x*t),ymin:s.ymin+c*l.y,ymax:Math.min(s.ymax,s.ymin+c*l.y*t)});return{extent:s,width:n,height:i,origin:{x:u,y:c}}}(i.rasterInfo),{pixelBlock:d}=await t.fetchPixels(l,o,c,e);if(null==d)throw new r.default("raster-layer-adapter","Unable to estimate histograms");const f=(0,u.f4)(d);return f&&this._statsCache.put(s,f),f}supportsMultidirectionalHillshade(){return!0}load(e){return this.addResolvingPromise(this.layer.load(e).then((()=>this.rasterInfo=this.layer.raster.rasterInfo))),Promise.resolve(this)}};(0,n._)([(0,i.MZ)()],v.prototype,"layer",void 0),v=(0,n._)([(0,l.$)("esri.smartMapping.raster.support.adapters.ImageryTileLayerAdapter")],v);const b={imagery:{adapter:y,label:"ImageryLayer"},"imagery-tile":{adapter:v,label:"ImageryTileLayer"},wcs:{adapter:v,label:"WCSLayer"}},M={"raster-stretch":"raster-stretch","unique-value":"raster-unique-value","raster-rgb":"raster-rgb","class-breaks":"raster-class-breaks","raster-colormap":"raster-colormap","raster-shaded-relief":"raster-shaded-relief","vector-field":"raster-vector-field",flow:"raster-flow"},w=Object.keys(b).map((e=>b[e].label));function x(e){if("raster-layer-adapter"===e.type)return e;const t=b[e.type]?.adapter;return null==t?null:new t({layer:e})}async function I(e){const t=x((e=await V(e)).layer),a=await t.generateRasterInfo(e),r=(0,s.fp)(a,!0).map((e=>M[e])),n=t.layer,i="imagery-tile"===n.type?(0,s.Mm)(n.raster):void 0,l="wcs"!==n.type?n.presetRenderers:void 0,o=(0,s.I8)({variableName:e.variableName,rasterFunctionName:e.rasterFunction?.functionName,presetRenderers:l}),u=o?.renderer??(0,s.PD)(a,{rasterFunctionColorRamp:i,variableName:e.variableName}),{bandCount:c}=a;return c>1&&r.push("raster-rgb"),!r.includes("raster-class-breaks")&&1===c&&+t.layer?.version>=10.3&&r.push("raster-class-breaks"),{supportedTypes:r,defaultRenderer:u}}async function R(e){const t=x((e=await V(e)).layer),a=await t.generateRasterInfo(e),{layer:r}=t;if("wcs"!==r.type&&r.presetRenderers?.length){const t=(0,s.I8)({variableName:e.variableName,rasterFunctionName:e.rasterFunction?.functionName,presetRenderers:r.presetRenderers});if(t?.bandIds?.length)return t.bandIds}return(0,s.ci)(a)}async function V(e){const{layer:t}=e;if(!t)throw new r.default("raster-renderer-creator:missing-parameters","'layer' parameter is required");const a=x(t);if(null==a)throw new r.default("raster-renderer-creator:invalid-parameters","'layer' must be one of these types: "+w.join(", "));await a.load();const s=e.rasterFunction??e.renderingRule??t.rasterFunction;return await a.updateRasterInfo({rasterFunction:s,signal:e.signal}),{...e,layer:a,rasterFunction:s}}}}]);