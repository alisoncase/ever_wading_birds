"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[1501,46768,50751,69247,88423,95740],{1501:(t,e,n)=>{n.r(e),n.d(e,{default:()=>p});var i,o=n(93800),a=n(19455),s=n(48602),r=(n(21265),n(50925),n(14746),n(47332)),l=n(75269),u=n(69247),c=n(78496);let m=i=class extends a.A{constructor(t){super(t),this.colormapInfos=null,this.type="raster-colormap"}static createFromColormap(t,e){if(!t)return null;const n=5===t[0].length,o=[...t].sort(((t,e)=>t[0]-e[0])).map((t=>u.default.fromJSON({value:t[0],color:n?t.slice(1,5):t.slice(1,4).concat([255]),label:e?e[t[0]]??"":t[0]})));return new i({colormapInfos:o})}static createFromColorramp(t){const e=(0,c.R8)(t);return i.createFromColormap(e)}clone(){return new i({colormapInfos:this.colormapInfos.map((t=>t.toJSON()))})}extractColormap(){return this.colormapInfos.map((t=>{let{value:e,color:n}=t;return[e,n.r,n.g,n.b,n.a>1?n.a:255*n.a&255]})).sort(((t,e)=>t[0]-e[0]))}};(0,o._)([(0,s.MZ)({type:[u.default],json:{write:{isRequired:!0}}})],m.prototype,"colormapInfos",void 0),(0,o._)([(0,r.e)({rasterColormap:"raster-colormap"}),(0,s.MZ)({json:{write:{isRequired:!0}}})],m.prototype,"type",void 0),m=i=(0,o._)([(0,l.$)("esri.renderers.RasterColormapRenderer")],m);const p=m},47659:(t,e,n)=>{n.d(e,{DP:()=>y,Nh:()=>v,Pg:()=>g,RP:()=>c,WF:()=>u,_N:()=>b,eH:()=>f,f4:()=>h,fP:()=>p,zj:()=>m});var i=n(17741),o=n(61531),a=n(82518),s=n(70943);const r=1,l=[.299,.587,.114];function u(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256;e=Math.min(e,256);const{size:n,counts:i}=t,o=new Uint8Array(n),a=i.reduce(((t,n)=>t+n/e),0);let s=0,r=0,l=0,u=a;for(let c=0;c<n;c++)if(l+=i[c],!(c<n-1&&l+i[c+1]<u)){for(;s<e-1&&u<l;)s++,u+=a;for(let t=r;t<=c;t++)o[t]=s;r=c+1}for(let c=r;c<n;c++)o[c]=e-1;return o}function c(t){const{minCutOff:e,maxCutOff:n,gamma:i,pixelType:o,rounding:a}=t;if(!["u8","u16","s8","s16"].includes(o))return null;const s=e.length,r="s8"===o?-127:"s16"===o?-32767:0,l=["u16","s16"].includes(o)?65536:256,u=[],c=[],{minOutput:p=0,maxOutput:d=255}=t,f=d-p;for(let m=0;m<s;m++)c[m]=n[m]-e[m],u[m]=0===c[m]?0:f/c[m];const h=[];if(i&&i.length>=s){const t=v(s,i);for(let o=0;o<s;o++){const s=[];for(let u=0;u<l;u++){if(0===c[o]){s[u]=p;continue}const l=u+r,m=(l-e[o])/c[o];let h=1;if(i[o]>1&&(h-=(1/f)**(m*t[o])),l<n[o]&&l>e[o]){const t=h*f*m**(1/i[o])+p;s[u]="floor"===a?Math.floor(t):"round"===a?Math.round(t):t}else l>=n[o]?s[u]=d:s[u]=p}h[o]=s}}else for(let m=0;m<s;m++){const t=[];for(let i=0;i<l;i++){const o=i+r;if(o<=e[m])t[i]=p;else if(o>=n[m])t[i]=d;else{const n=(o-e[m])*u[m]+p;t[i]="floor"===a?Math.floor(n):"round"===a?Math.round(n):n}}h[m]=t}if(null!=t.contrastOffset){const e=m(t.contrastOffset,t.brightnessOffset);for(let t=0;t<s;t++){const n=h[t];for(let t=0;t<l;t++)n[t]=e[n[t]]}}return{lut:h,offset:r}}function m(t,e){const n=Math.min(Math.max(t,-100),100),i=Math.min(Math.max(e??0,-100),100),o=255,a=new Uint8Array(256);for(let s=0;s<256;s++){let t=0;n>0&&n<100?t=(200*s-25500+510*i)/(2*(100-n))+128:n<=0&&n>-100?t=(200*s-25500+510*i)*(100+n)/2e4+128:100===n?(t=200*s-25500+256*(100-n)+510*i,t=t>0?o:0):-100===n&&(t=128),a[s]=t>o?o:t<0?0:t}return a}function p(t,e,n){const i=[];for(let o=0;o<e.length;o++){let a=0,s=0,r=0;"min"in e[o]?({min:a,max:s,avg:r}=e[o]):[a,s,r]=e[o];let u=r??0;"u8"!==t&&(u=255*(u-a)/(s-a)),n&&(u*=l[o]),i.push(d(u))}return i}function d(t){if(t<=0||t>=255)return r;const e=t+(150===t?0:t<150?45*Math.cos(.01047*t):17*Math.sin(.021*t)),n=Math.log(t/255),i=Math.log(e/255);if(0===i)return r;const o=n/i;return isNaN(o)?r:Math.min(9.9,Math.max(.01,o))}function f(t){const{pixels:e,mask:n,pixelType:i,bandMasks:o}=t,a=e.map(((t,e)=>function(t,e,n){let i=1/0,o=-1/0,a=0,s=0,r=0,l=0;const u=t.length,c=new Map,m=[];for(let M=0;M<u;M++){const n=t[M];if(!e||e[M]){m.push(n);const t=(c.get(n)??0)+1;c.set(n,t),t>l&&(l=t,r=n),i=n<i?n:i,o=n>o?n:o,a+=n,s++}}if(0===s)return{statistics:{min:0,max:0,avg:0,stddev:0,mode:0,median:0},histogram:null};const p=a/s;let d=0;for(let M=0;M<u;M++)e&&!e[M]||(d+=(t[M]-p)**2);const f=e?e.filter((t=>t)).length:u,h=f<=1?0:Math.sqrt(d/(f-1));m.sort(((t,e)=>t-e));const g=s>>>1,y={min:i,max:o,avg:p,stddev:h,mode:r,median:s%2?m[Math.floor(g)]:(m[g-1]+m[g])/2};if(["u8","s8","u4","u2","u1"].includes(n)){const n=o-i+1,a=new Uint32Array(n);for(let o=0;o<u;o++)e&&!e[o]||a[t[o]-i]++;return{statistics:y,histogram:{min:i-.5,max:o+.5,size:n,counts:a}}}const v=256,b=new Uint32Array(v),w=(o-i)/v;if(0===w)return{statistics:y,histogram:{min:i,max:o,size:1,counts:new Uint32Array(1).fill(s)}};const x=new Uint32Array(257);for(let M=0;M<u;M++)e&&!e[M]||x[Math.floor((t[M]-i)/w)]++;for(let M=0;M<255;M++)b[M]=x[M];return b[255]=x[255]+x[v],{statistics:y,histogram:{min:i,max:o,size:v,counts:b}}}(t,o?.[e]??n,i)));return{statistics:a.map((t=>{let{statistics:e}=t;return e})),histograms:a.map((t=>{let{histogram:e}=t;return e}))}}function h(t){if(!t?.pixels?.length)return null;const{pixels:e,mask:n,bandMasks:i,pixelType:o}=t,a=t.width*t.height,s=e.length,r=[],l=[],u=256;let c,m;for(let p=0;p<s;p++){let s=new Uint32Array(u);const d=e[p],f=i?.[p]??n;if("u8"===o){if(c=255,m=0,f){for(let t=0;t<a;t++)if(f[t]){const e=d[t];c=e<c?e:c,m=e>m?e:m,s[e]++}}else for(let t=0;t<a;t++){const e=d[t];c=e<c?e:c,m=e>m?e:m,s[e]++}s=s.slice(c,m+1)}else{let e=!1;t.statistics||(t.updateStatistics(),e=!0);const n=t.statistics;c=n[p].minValue,m=n[p].maxValue;const i=(m-c)/u;if(0===i){!n||t.validPixelCount||e||t.updateStatistics();const i=(t.validPixelCount||t.width*t.height)/u;for(let t=0;t<u;t++)s[t]=Math.round(i*(t+1))-Math.round(i*t)}else{const t=new Uint32Array(257);for(let e=0;e<a;e++)f&&!f[e]||t[Math.floor((d[e]-c)/i)]++;for(let e=0;e<255;e++)s[e]=t[e];s[255]=t[255]+t[u]}}const h="u8"===o?c-.5:c,g="u8"===o?m+.5:m;r.push({min:h,max:g,size:s.length,counts:s});let y=0,v=0,b=0;for(let t=0;t<s.length;t++)y+=s[t],v+=t*s[t];const w=v/y;for(let t=0;t<s.length;t++)b+=s[t]*(t-w)**2;const x=Math.sqrt(b/(y-1)),M=(g-h)/s.length,C=(w+("u8"===o?0:.5))*M+c,S=x*M;l.push({min:c,max:m,avg:C,stddev:S})}return{statistics:l,histograms:r}}function g(t){const e=[];for(let n=0;n<t.length;n++){const{min:i,max:o,size:a,counts:s}=t[n];let r=0,l=0;for(let t=0;t<a;t++)r+=s[t],l+=t*s[t];const u=l/r;let c=0;for(let t=0;t<a;t++)c+=s[t]*(t-u)**2;const m=(o-i)/a,p=(u+.5)*m+i,d=Math.sqrt(c/(r-1))*m;e.push({min:i,max:o,avg:p,stddev:d})}return e}function y(t,e){const{pixelBlock:n,bandIds:o,returnHistogramLut:r,rasterInfo:l}=e;let c=null,m=null,p=t.stretchType;if("number"==typeof p&&(p=s.x[p]),t.dra)if("minMax"===p&&n?.statistics)c=n.statistics.map((t=>[t.minValue,t.maxValue,0,0]));else{const t=h(n);c=null!=t?t.statistics:null,m=null!=t?t.histograms:null}else c=t.statistics?.length?t.statistics:l.statistics,m="histograms"in t?t.histograms:void 0,m||(m=l.histograms);"percentClip"!==p&&"histogramEqualization"!==p||m?.length||(p="minMax");const d=c?.length||m?.length||l.bandCount,f=[],g=[];c&&!Array.isArray(c[0])&&(c=c.map((t=>[t.min,t.max,t.avg,t.stddev])));const[y,v]=(0,a.hP)(l.pixelType);if(!c?.length){c=[];for(let t=0;t<d;t++)c.push([y,v,1,1]);"standardDeviation"===p&&(p="minMax")}switch(p){case"none":for(let t=0;t<d;t++)f[t]=y,g[t]=v;break;case"minMax":for(let t=0;t<d;t++){const e=c[t];f[t]=e[0],g[t]=e[1]}break;case"standardDeviation":{const{numberOfStandardDeviations:e=2}=t;for(let t=0;t<d;t++){const n=c[t];f[t]=n[2]-e*n[3],g[t]=n[2]+e*n[3],f[t]<n[0]&&(f[t]=n[0]),g[t]>n[1]&&(g[t]=n[1])}}break;case"histogramEqualization":(0,i.Lw)(m);for(let t=0;t<d;t++)f[t]=m[t].min,g[t]=m[t].max;break;case"percentClip":(0,i.Lw)(m);for(let e=0;e<m.length;e++){const n=m[e],i=new Uint32Array(n.size),o=[...n.counts];o.length>=20&&(o[0]=o[1]=o[2]=o[o.length-1]=o[o.length-2]=0);let a=0;const s=(n.max-n.min)/n.size,r=-.5===n.min&&1===s?.5:0;for(let t=0;t<n.size;t++)a+=o[t],i[t]=a;let l=(t.minPercent||0)*a/100;f[e]=n.min+r;for(let t=0;t<n.size;t++)if(i[t]>l){f[e]=n.min+s*(t+r);break}l=(1-(t.maxPercent||0)/100)*a,g[e]=n.max+r;for(let t=n.size-2;t>=0;t--)if(i[t]<l){g[e]=n.min+s*(t+2-r);break}if(g[e]<f[e]){const t=f[e];f[e]=g[e],g[e]=t}}break;default:for(let t=0;t<d;t++){const e=c[t];f[t]=e[0],g[t]=e[1]}}let b,w,x;return"histogramEqualization"===p?((0,i.Lw)(m),w=m[0].size||256,b=0,r&&(x=m.map((t=>u(t))))):(w=t.max||255,b=t.min||0),function(t,e){if(null==e||0===e.length)return t;const n=Math.max.apply(null,e),{minCutOff:i,maxCutOff:o,minOutput:a,maxOutput:s,histogramLut:r}=t;return i.length===e.length||i.length<=n?t:{minCutOff:e.map((t=>i[t])),maxCutOff:e.map((t=>o[t])),histogramLut:r?e.map((t=>r[t])):null,minOutput:a,maxOutput:s}}({minCutOff:f,maxCutOff:g,maxOutput:w,minOutput:b,histogramLut:x},o)}function v(t,e){const n=new Float32Array(t);for(let i=0;i<t;i++)e[i]>1?e[i]>2?n[i]=6.5+(e[i]-2)**2.5:n[i]=6.5+100*(2-e[i])**4:n[i]=1;return n}function b(t,e){if(!t?.pixels?.length)return t;const{mask:n,bandMasks:i,width:a,height:s,pixels:r}=t,{minCutOff:l,maxCutOff:u,minOutput:c,maxOutput:m,gamma:p}=e,d=a*s,f=e.outputPixelType||"u8",h=t.pixels.map((()=>o.default.createEmptyBand(f,d))),g=h.length,y=m-c,b=[],w=[];for(let o=0;o<g;o++)w[o]=u[o]-l[o],b[o]=0===w[o]?0:y/w[o];const x=f.startsWith("u")||f.startsWith("s"),M=p&&p.length>=g,C=!!e.isRenderer;if(M){const t=v(g,p);for(let e=0;e<g;e++){const o=i?.[e]??n;for(let n=0;n<d;n++)if(null==o||o[n]){if(0===w[e]){h[e][n]=c;continue}const i=r[e][n],o=(i-l[e])/w[e];let a=1;if(p[e]>1&&(a-=(1/y)**(o*t[e])),i<u[e]&&i>l[e]){const t=a*y*o**(1/p[e])+c;h[e][n]=C?Math.floor(t):x?Math.round(t):t}else i>=u[e]?h[e][n]=m:h[e][n]=c}}}else for(let o=0;o<g;o++){const t=i?.[o]??n;for(let e=0;e<d;e++)if(null==t||t[e]){const t=r[o][e];if(t<u[o]&&t>l[o]){const n=(t-l[o])*b[o]+c;h[o][e]=C?Math.floor(n):x?Math.round(n):n}else t>=u[o]?h[o][e]=m:h[o][e]=c}}const S=new o.default({width:a,height:s,mask:n,bandMasks:i,pixels:h,pixelType:f});return S.updateStatistics(),S}},50751:(t,e,n)=>{n.r(e),n.d(e,{default:()=>y});var i,o=n(93800),a=n(88102),s=n(42761),r=n(19455),l=n(16804),u=n(48602),c=(n(21265),n(50925),n(14746),n(47332)),m=n(75269),p=n(12078),d=n(45023),f=n(37382);const h=new s.J({flow_from:"flow-from",flow_to:"flow-to"});let g=i=class extends((0,p.h)(r.A)){constructor(t){super(t),this.density=.8,this.color=new a.default([255,255,255,1]),this.maxPathLength=200,this.trailWidth=1.5,this.flowSpeed=10,this.trailLength=100,this.smoothing=0,this.flowRepresentation="flow-from",this.type="flow",this.authoringInfo=null,this.legendOptions=null,this.trailCap="butt",this.background="none"}clone(){const{density:t,maxPathLength:e,trailWidth:n,flowSpeed:o,trailLength:a,smoothing:s,flowRepresentation:r,trailCap:l,background:u}=this,c=this.color.clone(),m=(this.visualVariables||[]).map((t=>t.clone())),p=this.authoringInfo?.clone(),d=this.legendOptions?.clone();return new i({density:t,color:c,maxPathLength:e,trailWidth:n,flowSpeed:o,trailLength:a,trailCap:l,background:u,smoothing:s,flowRepresentation:r,visualVariables:m,authoringInfo:p,legendOptions:d})}getSymbol(t,e){}async getSymbolAsync(t,e){}getSymbols(){return[]}};(0,o._)([(0,u.MZ)({type:Number,json:{write:!0}})],g.prototype,"density",void 0),(0,o._)([(0,u.MZ)({type:a.default,json:{write:{allowNull:!0}}})],g.prototype,"color",void 0),(0,o._)([(0,u.MZ)({type:Number,cast:l.cr,json:{write:!0}})],g.prototype,"maxPathLength",void 0),(0,o._)([(0,u.MZ)({type:Number,cast:l.cr,json:{write:!0}})],g.prototype,"trailWidth",void 0),(0,o._)([(0,u.MZ)({type:Number,json:{write:!0}})],g.prototype,"flowSpeed",void 0),(0,o._)([(0,u.MZ)({type:Number,json:{write:!0}})],g.prototype,"trailLength",void 0),(0,o._)([(0,u.MZ)({type:Number,cast:l.cr,json:{write:!1}})],g.prototype,"smoothing",void 0),(0,o._)([(0,u.MZ)({type:h.apiValues,json:{type:h.jsonValues,read:{reader:h.read},write:{writer:h.write}}})],g.prototype,"flowRepresentation",void 0),(0,o._)([(0,c.e)({flowRenderer:"flow"})],g.prototype,"type",void 0),(0,o._)([(0,u.MZ)({type:d.default,json:{write:!0}})],g.prototype,"authoringInfo",void 0),(0,o._)([(0,u.MZ)({type:f.A,json:{write:!0}})],g.prototype,"legendOptions",void 0),(0,o._)([(0,u.MZ)({type:String,json:{write:!0}})],g.prototype,"trailCap",void 0),(0,o._)([(0,u.MZ)({type:String,json:{write:!0}})],g.prototype,"background",void 0),g=i=(0,o._)([(0,m.$)("esri.renderers.FlowRenderer")],g);const y=g},69247:(t,e,n)=>{n.r(e),n.d(e,{default:()=>c});var i=n(93800),o=n(88102),a=n(19455),s=n(48602),r=n(80556),l=(n(21265),n(14746),n(75269));let u=class extends a.A{constructor(){super(...arguments),this.value=null,this.label=null,this.color=null}};(0,i._)([(0,s.MZ)({type:Number,json:{write:{isRequired:!0}}})],u.prototype,"value",void 0),(0,i._)([(0,s.MZ)({type:String,json:{write:!0}})],u.prototype,"label",void 0),(0,i._)([(0,s.MZ)({type:o.default,json:{type:[r.jz],write:{isRequired:!0}}})],u.prototype,"color",void 0),u=(0,i._)([(0,l.$)("esri.renderers.support.ColormapInfo")],u);const c=u},70943:(t,e,n)=>{n.d(e,{u:()=>i,x:()=>o});const i=new(n(42761).J)({none:"none",standardDeviation:"standard-deviation",histogramEqualization:"histogram-equalization",minMax:"min-max",percentClip:"percent-clip",sigmoid:"sigmoid"}),o={0:"none",3:"standardDeviation",4:"histogramEqualization",5:"minMax",6:"percentClip",9:"sigmoid"}},76874:(t,e,n)=>{n.d(e,{$P:()=>U,I8:()=>z,Ix:()=>W,Mm:()=>O,NI:()=>N,Ny:()=>q,PD:()=>Z,VI:()=>F,ci:()=>A,dY:()=>B,fp:()=>k,iG:()=>$,m7:()=>I,sp:()=>E,tj:()=>V,un:()=>J,w6:()=>L,zd:()=>P});var i=n(88102),o=n(84190),a=n(50616),s=n(99325),r=n(50751),l=n(1501),u=n(95740),c=n(88423),m=n(45581),p=n(31640),d=n(45023),f=n(27883),h=n(78496),g=n(81759),y=n(16378),v=n(80023),b=n(56563),w=n(88311),x=n(12305),M=n(17661),C=n(63145),S=n(92744);const _=.25,R=C.default.fromJSON({type:"multipart",colorRamps:[{fromColor:[0,0,255],toColor:[0,255,255]},{fromColor:[0,255,255],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[255,0,0]}]}),T=C.default.fromJSON(h.vj[0]),j=new Set(["scientific","standard-time","vector-uv","vector-magdir","vector-u","vector-v","vector-magnitude","vector-direction"]);function z(t){return t.presetRenderers?.find((e=>{let{method:n,value:i}=e;return"raster-function-template"===n?i===t.rasterFunctionName:"variable"===n&&i===t.variableName}))}function Z(t,e){const{attributeTable:n,colormap:i}=t;if((0,g.rd)(t)){const e=B(t);if(null!=e)return e}if(e?.rasterFunctionColorRamp){const n=N(t,e);return n.colorRamp=e.rasterFunctionColorRamp,n}if(null!=i){const e=q(t);if(null!=e)return e}if(null!=n){const e=P(t);if(null!=e)return e}return N(t,e)}function k(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=["raster-stretch"];return(0,g.FA)(t,e)&&n.push("raster-colormap"),(0,g.hu)(t)&&n.push("unique-value"),(0,g.xX)(t,e)&&n.push("class-breaks"),(0,g.iL)(t)&&n.push("raster-shaded-relief"),(0,g.rd)(t)&&n.push("vector-field"),(0,g.QJ)(t)&&n.push("flow"),n}function O(t){return"Function"===t.datasetFormat&&"Colormap"===t.rasterFunction.functionName?t.rasterFunction.colorRamp:void 0}function L(t,e,n){const i=n?.toLowerCase().replace("bicubic","cubic"),o=["nearest","bilinear","cubic","majority"].find((t=>t===i));return"Map"===e?o??"bilinear":"standard-time"===t.dataType?o??"nearest":"thematic"===t.dataType||t.attributeTable||t.colormap?"nearest"===o||"majority"===o?o:"nearest":o??"bilinear"}function N(t,e){t=I(t,e?.variableName);const{bandCount:n}=t;let{bandIds:i,stretchType:o}=e||{};i?.some((t=>t>=n))&&(i=null);let a=t.statistics,s=t.histograms;n>1?(i=i?.length?i:A(t),a=null==a?null:i?.map((t=>a[t])),s=null==s?null:i?.map((t=>s[t]))):i=[0],null==o&&(o=function(t){let e="percent-clip";const{pixelType:n,dataType:i,histograms:o,statistics:a,multidimensionalInfo:s}=t,r=j.has(i)||"generic"===i&&null!=s;return"u8"!==n||"processed"!==i&&null!=o&&null!=a?"u8"===n||"elevation"===i||r?e="min-max":null!=o?e="percent-clip":null!=a&&(e="min-max"):e="none",e}(t)),e?.includeStatisticsInStretch&&("percent-clip"===o||"histogram-equalization"===o)&&t.statistics?.length&&(o="min-max");let r=!1;switch(o){case"none":r=!1;break;case"percent-clip":r=!s?.length;break;default:r=!a?.length}const{dataType:l}=t,u=1===i?.length&&j.has(l)?R:null,m=new c.default({stretchType:o,dynamicRangeAdjustment:r,colorRamp:u,outputMin:0,outputMax:255,gamma:1===i?.length?[1]:[1,1,1],useGamma:!1});return"percent-clip"===o?m.maxPercent=m.minPercent=_:"standard-deviation"===o&&(m.numberOfStandardDeviations=2),r||null==t.multidimensionalInfo&&!e?.includeStatisticsInStretch||("percent-clip"===o?m.histograms=s:"min-max"!==o&&"standard-deviation"!==o||(m.statistics=a)),m}function I(t,e){const{multidimensionalInfo:n}=t;if(!e||!n)return t;const i=n.variables.find((t=>t.name===e));if(!i)return t;if(t=t.clone(),i){const{statistics:e,histograms:n}=i;e?.length&&(t.statistics=e.map((t=>({min:t.min,max:t.max,avg:t.avg,stddev:t.stddev})))),n?.length&&(t.histograms=n)}return t}function A(t){const e=t.bandCount;if(1===e)return null;if(2===e)return[0];const{bandInfos:n}=t;let i;if(n.length===e){const{red:t,green:e,blue:o,nir:a}=function(t){const e={};for(let n=0;n<t.length;n++){const i=t[n],o=i.name.toLowerCase();if("red"===o)e.red=n;else if("green"===o)e.green=n;else if("blue"===o)e.blue=n;else if("nearinfrared"===o||"nearinfrared_1"===o||"nir"===o)e.nir=n;else if(i.maxWavelength&&i.minWavelength){const t=i.minWavelength,o=i.maxWavelength;null==e.blue&&t>=410&&t<=480&&o>=480&&o<=540?e.blue=n:null==e.green&&t>=490&&t<=560&&o>=560&&o<=610?e.green=n:null==e.red&&t>=595&&t<=670&&o>=660&&o<=730?e.red=n:null==e.nir&&t>=700&&t<=860&&o>=800&&o<=950&&(e.nir=n)}}return e}(n);null!=t&&null!=e&&null!=o?i=[t,e,o]:null!=a&&null!=t&&null!=e&&(i=[a,t,e])}return!i&&e>=3&&(i=[0,1,2]),i}function P(t,e,n,o){if(!(0,g.hu)(t,e))return null;const{attributeTable:a,statistics:s}=t,r=V(a,e),l=F(a,"red"),u=F(a,"green"),c=F(a,"blue"),p=new d.default,f=[],v=new Set,b=!!(l&&u&&c);if(null!=a)a.features.forEach((t=>{const e=t.attributes[r.name];if(!v.has(t.attributes[r.name])&&null!=e){v.add(e);const n=b&&("single"===l.type||"double"===l.type)&&("single"===u.type||"double"===u.type)&&("single"===c.type||"double"===c.type)&&!a.features.some((t=>t.attributes[l.name]>1||t.attributes[u.name]>1||t.attributes[c.name]>1))?255:1;f.push(new y.default({value:t.attributes[r.name],label:t.attributes[r.name]+"",symbol:new S.default({style:"solid",outline:null,color:new i.default(b?[t.attributes[l.name]*n,t.attributes[u.name]*n,t.attributes[c.name]*n,1]:[0,0,0,0])})}))}}));else if(s?.[0])for(let m=s[0].min;m<=s[0].max;m++)f.push(new y.default({value:m,label:m.toString(),symbol:new S.default({style:"solid",outline:null,color:new i.default([0,0,0,0])})}));if(f.sort(((t,e)=>t.value&&"string"==typeof t.value.valueOf()?0:t.value>e.value?1:-1)),!b){const t=(0,h.R8)(T,{numColors:f.length});f.forEach(((e,n)=>e.symbol.color=new i.default(t[n].slice(1,4)))),p.colorRamp=T}if(n||o){const t=n||(0,h.R8)(o,{numColors:f.length}).map((t=>t.slice(1)));f.forEach(((e,n)=>e.symbol.color=new i.default(t[n]))),p.colorRamp=o}return new m.default({field:r.name,uniqueValueInfos:f,authoringInfo:p})}function V(t,e,n){let i;return null!=t?(i=e?t.fields.find((t=>e.toLowerCase()===t.name.toLowerCase())):function(t){let e;for(let n=0;n<t.length;n++){const i=t[n].name.toLowerCase();if("string"===t[n].type){if(i.startsWith("class")){e=t[n];break}null==e&&(i.endsWith("name")||i.endsWith("type"))&&(e=t[n])}}return e}(t.fields),i||(n||(i=t.fields.find((t=>"string"===t.type))),i||(i=F(t,"value")))):i=new a.default({name:"value"}),i}function F(t,e){return null==t?null:t.fields.find((t=>t.name.toLowerCase()===e))}function q(t){if(!(0,g.FA)(t))return null;let e;const{attributeTable:n,colormap:i}=t;if(null!=n){const t=F(n,"value"),i=V(n,null,!0);"string"===i.type&&(e={},n.features.forEach((n=>{const o=n.attributes;e[o[t.name]]=i?o[i.name]:o[t.name]})))}return l.default.createFromColormap(i,e)}function E(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"traditional";if(!(0,g.iL)(t))return null;const{extent:n}=t,i=n.width*(0,o.GA)(n.spatialReference);return new u.default({hillshadeType:e,scalingType:i>5e6?"adjusted":"none"})}function W(t,e){t=I(t,e?.variableName);const{attributeTable:n}=t;if(!(0,g.xX)(t))return null;const i=null!=t.histograms?t.histograms[0]:null,o=null!=e?.numClasses&&isFinite(e?.numClasses)?e.numClasses:5,a=new d.default({classificationMethod:e?.classificationMethod,colorRamp:e?.colorRamp});let r=e?.field||"value";const l=[],u=[],c=null!=n,m=c&&n.fields.find((t=>"count"===t.name.toLowerCase())),p=c?n.fields.find((t=>t.name.toLowerCase()===r.toLowerCase())):void 0;if(p&&c){r=p.name;const t=n.features.length;let e=0;n.features.forEach((n=>e+=(m?n.attributes[m.name]:50)/t)),n.features.forEach((n=>{const i=n.attributes[p.name],o=m?n.attributes[m.name]:50;if(o>0){u.push(o);const n=Math.max(1,Math.round(o/t/e*1e3));for(let t=0;t<n;t++)l.push(i)}}))}else{const{pixelType:e}=t,o=(i.max-i.min)/i.size,a=e.includes("s")||e.includes("u"),s=a&&1===o?Math.floor(i.min+.5):i.min,r=a&&1===o?Math.floor(i.max-.5):i.max,m=i.size;let d,f=0;i.counts.forEach((t=>f+=t/m)),i.counts.forEach(((t,e)=>{if(t>0){u.push(t);const a=Math.max(1,Math.round(t/m/f*1e3));d=c?n.features[e].attributes[p.name]:0===e?s:e===m-1?r:i.min+o*(e+.5);for(let t=0;t<a;t++)l.push(d)}}))}const y=e?.classificationMethod||"natural-breaks";let v=e?.definedInterval;"defined-interval"!==y||v||(v=function(t,e,n){let i=0,o=0;if(null!=t.attributeTable){const n=t.attributeTable;i=o=n.features[0].attributes[e.name],n.features.forEach((t=>{const n=t.attributes[e.name];n<i&&(i=n),n>o&&(o=n)}))}else if(null!=t.histograms){const e=t.histograms;i=e[0].min,o=e[0].max}return(o-i)/n}(t,p,o));const b=(0,M.t)({values:l,valueFrequency:u,normalizationTotal:null,definition:new x.A({classificationMethod:y,breakCount:o,definedInterval:v})});let w=e?.colors;if(!w){const t=e?.colorRamp||R;a.colorRamp=t;const n=(0,h.R8)(t,{numColors:b.classBreaks.length,interpolateAlpha:!0});w=n.map((t=>t.slice(1)))}const C=b.classBreaks.map(((t,e)=>new f.default({minValue:t.minValue,maxValue:t.maxValue,label:t.label,symbol:new S.default({color:w[e]})})));return new s.default({field:r,classBreakInfos:C,authoringInfo:a})}const D=new Map([["m/s","meter-per-second"],["km/h","kilometer-per-hour"],["knots","knots"],["ft/s","feet-per-second"],["mph","mile-per-hour"]]);function B(t){if(!(0,g.rd)(t))return null;let e;if(null!=t.statistics&&t.statistics.length&&("vector-magdir"===t.dataType||"vector-uv"===t.dataType)){const{minMagnitude:n,maxMagnitude:i}=$(t.dataType,t.statistics);e=[new b.default({field:"Magnitude",minSize:10,maxSize:40,minDataValue:n,maxDataValue:i})]}const n=null!=t.multidimensionalInfo?D.get(t.multidimensionalInfo.variables[0].unit):void 0,i=new p.default({visualVariables:e,inputUnit:n,rotationType:"geographic"});return i.visualVariables=[...i.sizeVariables,...i.rotationVariables],i}function G(t){return{color:t.symbolLayers[0].material?.color,type:"esriSFS",style:"esriSFSSolid"}}function U(t){if("uniqueValue"===t.type){const e=t.uniqueValueInfos,n=e?.[0].symbol;return n?.symbolLayers?.length&&(t.uniqueValueInfos=e?.map((t=>({value:t.value,label:t.label,symbol:t.symbol?G(t.symbol):null})))),t}if("classBreaks"===t.type){const e=t.classBreakInfos,n=e[0].symbol;return n?.symbolLayers?.length&&(t.classBreakInfos=e.map((t=>({classMinValue:t.classMinValue,classMaxValue:t.classMaxValue,label:t.label,symbol:t.symbol?G(t.symbol):null})))),t}return t}function J(t){if(!(0,g.QJ)(t))return null;let e;if(null!=t.statistics&&t.statistics.length>0&&("vector-magdir"===t.dataType||"vector-uv"===t.dataType)){const{minMagnitude:n,maxMagnitude:o}=$(t.dataType,t.statistics);e=[new v.default({field:"Magnitude",stops:[new w.default({value:n,color:new i.default("#1020c0")}),new w.default({value:o,color:new i.default("#c02010")})]})]}return new r.default({visualVariables:e})}function $(t,e){let n,i;if("vector-magdir"===t)n=e[0].min,i=e[0].max;else{const t=e[0].min,o=e[0].max,a=e[1].min,s=e[1].max;n=0,i=Math.max(Math.abs(t),Math.abs(a),Math.abs(o),Math.abs(s))}return{minMagnitude:n,maxMagnitude:i}}},81759:(t,e,n)=>{function i(t){return["u8","s8"].includes(t.pixelType)&&null!=t.statistics?.[0]?.min&&null!=t.statistics[0]?.max&&1===t.bandCount}function o(t,e){const{attributeTable:n,bandCount:o}=t;return!(null!=n||!i(t))||!(null==n||o>1)&&(!e||null!=n.fields.find((t=>t.name.toLowerCase()===e.toLowerCase())))}function a(t){const{bandCount:e,dataType:n,pixelType:i}=t;return"elevation"===n||"generic"===n&&1===e&&("s16"===i||"s32"===i||"f32"===i||"f64"===i)}function s(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{bandCount:n,colormap:i,pixelType:o}=t;return 1===n&&(!!i?.length||!e&&"u8"===o)}function r(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{attributeTable:n,bandCount:i}=t;return 1===i&&(!e||null!=n||null!=t.histograms)}function l(t){const{dataType:e}=t;return"vector-uv"===e||"vector-magdir"===e}function u(t){const{dataType:e}=t;return"vector-uv"===e||"vector-magdir"===e}function c(t){return!!t?.length&&t.length<=16384}n.d(e,{FA:()=>s,QJ:()=>u,WN:()=>c,bo:()=>i,hu:()=>o,iL:()=>a,rd:()=>l,xX:()=>r})},88423:(t,e,n)=>{n.r(e),n.d(e,{default:()=>y});var i,o=n(93800),a=n(56082),s=n(19455),r=n(82301),l=n(50925),u=n(48602),c=(n(21265),n(47332)),m=n(14800),p=n(75269),d=n(15484),f=n(70943),h=n(93898);let g=i=class extends s.A{constructor(t){super(t),this.colorRamp=null,this.computeGamma=!1,this.dynamicRangeAdjustment=!1,this.gamma=[],this.maxPercent=null,this.minPercent=null,this.numberOfStandardDeviations=null,this.outputMax=null,this.outputMin=null,this.sigmoidStrengthLevel=null,this.histograms=null,this.useGamma=!1,this.stretchType="none",this.type="raster-stretch"}readColorRamp(t){if(t)return(0,h.r)(t)}get statistics(){return this._get("statistics")}set statistics(t){(0,a.Lx)(l.A.getLogger(this),"statistics",{replacement:"customStatistics",version:"4.31",warnOnce:!0}),this._set("statistics",t)}get customStatistics(){const t=this.statistics;return t&&Array.isArray(t[0])?t.map((t=>({min:t[0],max:t[1],avg:t[2],stddev:t[3]}))):t}set customStatistics(t){this._set("statistics",t?.map((t=>[t.min,t.max,t.avg??0,t.stddev??1])))}readCustomStatistics(t){return t?.map((t=>({min:t[0],max:t[1],avg:t[2],stddev:t[3]})))}writeCustomStatistics(t,e,n){t?.length&&(e[n]=t.map((t=>[t.min,t.max,t.avg??0,t.stddev??1])))}readStretchType(t,e){let n=e.stretchType;return"number"==typeof n&&(n=f.x[n]),f.u.read(n)}clone(){const t=new i({stretchType:this.stretchType,outputMin:this.outputMin,outputMax:this.outputMax,useGamma:this.useGamma,computeGamma:this.computeGamma,gamma:(0,r.clone)(this.gamma),sigmoidStrengthLevel:this.sigmoidStrengthLevel,numberOfStandardDeviations:this.numberOfStandardDeviations,minPercent:this.minPercent,maxPercent:this.maxPercent,colorRamp:(0,r.clone)(this.colorRamp),histograms:(0,r.clone)(this.histograms),dynamicRangeAdjustment:this.dynamicRangeAdjustment});return t._set("statistics",(0,r.clone)(this.statistics)),t}};(0,o._)([(0,u.MZ)({types:h.g,json:{write:!0}})],g.prototype,"colorRamp",void 0),(0,o._)([(0,m.w)("colorRamp")],g.prototype,"readColorRamp",null),(0,o._)([(0,u.MZ)({type:Boolean,json:{write:!0}})],g.prototype,"computeGamma",void 0),(0,o._)([(0,u.MZ)({type:Boolean,json:{write:{target:"dra"},read:{source:"dra"}}})],g.prototype,"dynamicRangeAdjustment",void 0),(0,o._)([(0,u.MZ)({type:[Number],json:{write:!0}})],g.prototype,"gamma",void 0),(0,o._)([(0,u.MZ)({type:Number,json:{write:!0}})],g.prototype,"maxPercent",void 0),(0,o._)([(0,u.MZ)({type:Number,json:{write:!0}})],g.prototype,"minPercent",void 0),(0,o._)([(0,u.MZ)({type:Number,json:{write:!0}})],g.prototype,"numberOfStandardDeviations",void 0),(0,o._)([(0,u.MZ)({type:Number,json:{read:{source:"max"},write:{target:"max"}}})],g.prototype,"outputMax",void 0),(0,o._)([(0,u.MZ)({type:Number,json:{read:{source:"min"},write:{target:"min"}}})],g.prototype,"outputMin",void 0),(0,o._)([(0,u.MZ)({type:Number,json:{write:!0}})],g.prototype,"sigmoidStrengthLevel",void 0),(0,o._)([(0,u.MZ)({})],g.prototype,"statistics",null),(0,o._)([(0,u.MZ)()],g.prototype,"histograms",void 0),(0,o._)([(0,u.MZ)({json:{type:[[Number]],name:"statistics",write:!0}})],g.prototype,"customStatistics",null),(0,o._)([(0,m.w)("customStatistics")],g.prototype,"readCustomStatistics",null),(0,o._)([(0,d.K)("customStatistics")],g.prototype,"writeCustomStatistics",null),(0,o._)([(0,u.MZ)({type:Boolean,json:{write:!0}})],g.prototype,"useGamma",void 0),(0,o._)([(0,u.MZ)({type:f.u.apiValues,json:{type:f.u.jsonValues,write:f.u.write}})],g.prototype,"stretchType",void 0),(0,o._)([(0,m.w)("stretchType",["stretchType"])],g.prototype,"readStretchType",null),(0,o._)([(0,c.e)({rasterStretch:"raster-stretch"})],g.prototype,"type",void 0),g=i=(0,o._)([(0,p.$)("esri.renderers.RasterStretchRenderer")],g);const y=g},95740:(t,e,n)=>{n.r(e),n.d(e,{default:()=>d});var i,o=n(93800),a=n(19455),s=n(82301),r=n(48602),l=(n(21265),n(50925),n(47332)),u=n(14800),c=n(75269),m=n(93898);let p=i=class extends a.A{constructor(t){super(t),this.altitude=45,this.azimuth=315,this.colorRamp=null,this.hillshadeType="traditional",this.pixelSizePower=.664,this.pixelSizeFactor=.024,this.scalingType="none",this.type="raster-shaded-relief",this.zFactor=1}readColorRamp(t){return(0,m.r)(t)}clone(){return new i({hillshadeType:this.hillshadeType,altitude:this.altitude,azimuth:this.azimuth,zFactor:this.zFactor,scalingType:this.scalingType,pixelSizeFactor:this.pixelSizeFactor,pixelSizePower:this.pixelSizePower,colorRamp:(0,s.clone)(this.colorRamp)})}};(0,o._)([(0,r.MZ)({type:Number,json:{write:{isRequired:!0}}})],p.prototype,"altitude",void 0),(0,o._)([(0,r.MZ)({type:Number,json:{write:{isRequired:!0}}})],p.prototype,"azimuth",void 0),(0,o._)([(0,r.MZ)({types:m.g,json:{write:!0}})],p.prototype,"colorRamp",void 0),(0,o._)([(0,u.w)("colorRamp")],p.prototype,"readColorRamp",null),(0,o._)([(0,r.MZ)({type:["traditional","multi-directional"],json:{write:{isRequired:!0}}})],p.prototype,"hillshadeType",void 0),(0,o._)([(0,r.MZ)({type:Number,json:{write:!0}})],p.prototype,"pixelSizePower",void 0),(0,o._)([(0,r.MZ)({type:Number,json:{write:!0}})],p.prototype,"pixelSizeFactor",void 0),(0,o._)([(0,r.MZ)({type:["none","adjusted"],json:{write:{isRequired:!0}}})],p.prototype,"scalingType",void 0),(0,o._)([(0,l.e)({rasterShadedRelief:"raster-shaded-relief"}),(0,r.MZ)({json:{write:{isRequired:!0}}})],p.prototype,"type",void 0),(0,o._)([(0,r.MZ)({type:Number,json:{write:{isRequired:!0}}})],p.prototype,"zFactor",void 0),p=i=(0,o._)([(0,c.$)("esri.renderers.RasterShadedReliefRenderer")],p);const d=p}}]);