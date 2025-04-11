"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[3523],{21118:(e,n,t)=>{t.d(n,{AL:()=>y,DV:()=>v,ER:()=>a,F_:()=>s,Nd:()=>f,Oo:()=>r,dy:()=>d,eS:()=>D,h4:()=>x,jC:()=>b,nq:()=>h,rZ:()=>c,y6:()=>g});var i=t(50616);const a="Raster.",r="Raster.Dim.",l=".Max",s={servicePixelValue:"Raster.ServicePixelValue",rawServicePixelValue:"Raster.ServicePixelValue.Raw",itemPixelValue:"Raster.ItemPixelValue",magnitude:"Raster.Magnitude",direction:"Raster.Direction",variable:"Raster.Variable"},u=new Map([["quarters","Quarter"],["months","Month"],["weeks","Week of the year"],["days","Day of the year"]]);function o(e,n){return new i.A({name:e,alias:n,domain:null,editable:!1,length:50,type:"string"})}function m(e,n){return new i.A({name:e,alias:n,domain:null,editable:!1,type:"double"})}function c(e){return o(s.servicePixelValue,e??"Service Pixel Value")}function d(e){return o(s.rawServicePixelValue,e??"Raw Service Pixel Value")}function f(){return o(s.itemPixelValue,"Item Pixel Value")}function h(e){return o(`${s.servicePixelValue}.${e}`,e)}function v(e){return m(`${s.magnitude}`,"Magnitude"+(e?` (${e})`:""))}function g(){return m(`${s.direction}`,"Direction (\xb0)")}function b(e){return e.fields.filter((e=>"oid"!==e.type&&"value"!==e.name.toLowerCase())).map((e=>{const n=e.clone();return n.name=`${a}${e.name}`,n}))}function y(e){const n=new Set,t=new Set,a=new Map;return e.variables.forEach((e=>{let{dimensions:i}=e;i.forEach((e=>{if(e.recurring)a.set(e.name,e.unit);else{const i="ISO8601"===e.unit?.trim()?n:t;i.add(e.name),e.hasRanges&&i.add(`${e.name}${l}`)}}))})),[o(s.variable,"Variable"),...[...n].map((e=>function(e,n){return new i.A({name:e,alias:n,domain:null,editable:!1,type:"date"})}(`${r}${e}`,w(e)))),...[...t].map((e=>m(`${r}${e}`,w(e)))),...[...a].map((e=>{let[n,t]=e;return m(`${r}${n}`,p(n,t))}))]}function p(e,n){return n=n?.toLowerCase(),n&&u.has(n)?u.get(n):w(e)}function w(e){const n=e.endsWith(l),t=n?e.slice(0,-4):e,i="StdTime"===t?"Standard Time":"StdZ"===t?"Standard Z":t;return n?`${i} Max`:i}function N(e,n){return n?new Date(e):e}function D(e,n,t){t?.length&&(n[s.variable]=t[0].variableName,t.forEach((t=>{let{dimensionName:i,values:a}=t;if(i&&a?.length){const t=`${r}${i}`,s=e.find((e=>{let{name:n}=e;return n===t}));if(!s)return;const u="date"===s.type,o=a[0];if(Array.isArray(o)){if(n[`${r}${i}`]=N(o[0],u),null!=o[1]){const t=`${r}${i}${l}`;if(e.some((e=>{let{name:n}=e;return n===t}))){const e=N(o[1],u);n[t]=e}}}else n[`${r}${i}`]=N(o,u)}})))}function x(e,n){if(n.pixelType.startsWith("f")&&e.forEach((e=>{let{format:n,fieldName:t}=e;n&&t&&/^raster\.(item|service)pixelvalue/i.test(t)&&(n.places=2)})),n.multidimensionalInfo){const t=n.multidimensionalInfo.variables.flatMap((e=>{let{dimensions:n}=e;return n}));e.forEach((e=>{let{format:n,fieldName:i}=e;if(n&&i?.startsWith(r)){const e=i.slice(r.length),a=`${e}${l}`,s=t.find((n=>{let{name:t}=n;return t===e||t===a}));s?.values?.every((e=>Number.isInteger(e)))&&(n.places=0)}}))}}},73848:(e,n,t)=>{t.d(n,{A:()=>c});var i,a=t(93800),r=t(19455),l=t(82301),s=t(48602),u=t(80556),o=t(75269);let m=i=class extends r.A{constructor(e){super(e),this.variableName=null,this.dimensionName=null,this.values=[],this.isSlice=!1}clone(){return new i({variableName:this.variableName,dimensionName:this.dimensionName,values:(0,l.o8)(this.values),isSlice:this.isSlice})}};(0,a._)([(0,s.MZ)({type:String,json:{write:!0}})],m.prototype,"variableName",void 0),(0,a._)([(0,s.MZ)({type:String,json:{write:!0}})],m.prototype,"dimensionName",void 0),(0,a._)([(0,s.MZ)({type:u.gK.array(u.gK.oneOf([u.gK.native(Number),u.gK.array(u.gK.native(Number))])),json:{write:!0}})],m.prototype,"values",void 0),(0,a._)([(0,s.MZ)({type:Boolean,json:{write:!0}})],m.prototype,"isSlice",void 0),m=i=(0,a._)([(0,o.$)("esri.layers.support.DimensionalDefinition")],m);const c=m},74706:(e,n,t)=>{t.d(n,{$E:()=>x,DY:()=>b,NG:()=>D,QW:()=>l,Rp:()=>f,XU:()=>h,Xg:()=>N,ct:()=>v,fy:()=>g,sx:()=>d,xx:()=>s,z2:()=>y});var i=t(62631),a=t(73848);function r(e,n,t){const i=n.shift();if(0===t.length){const e=[];t.push({sliceId:-1,multidimensionalDefinition:e})}const a=t.length;for(let r=0;r<a;r++){const n=t.shift().multidimensionalDefinition;i.values?.forEach((a=>{t.push({sliceId:-1,multidimensionalDefinition:[...n,{variableName:e,dimensionName:i.name,values:[a]}]})}))}n.length&&r(e,n,t)}function l(e,n){const t=[];let i=0;return(n?e.variables.filter((e=>e.name.toLowerCase()===n.toLowerCase())):[...e.variables].sort(((e,n)=>e.name>n.name?1:-1))).forEach((e=>{const n=[],a=[...e.dimensions].sort(((e,n)=>e.name>n.name?-1:1));r(e.name,a,n),n.forEach((e=>{t.push({...e,sliceId:i++})}))})),t}function s(e,n,t){let i=e;if(n&&(n=[...n].sort(((e,n)=>e.dimensionName<n.dimensionName?-1:1))).forEach((e=>{let{dimensionName:n,values:t,isSlice:a}=e;t.length&&(i=i.filter((e=>{const i=e.multidimensionalDefinition.find((e=>e.dimensionName===n));if(null==i)return!1;const r=i.values[0];return"number"==typeof r?"number"==typeof t[0]?t.includes(r):t.some((e=>e[0]<=r&&e[1]>=r)):"number"==typeof t[0]?t.some((e=>r[0]<=e&&r[1]>=e)):a?t.some((e=>e[0]===r[0]&&e[0]===r[1])):t.some((e=>e[0]>=r[0]&&e[0]<=r[1]||e[1]>=r[0]&&e[1]<=r[1]||e[0]<r[0]&&e[1]>r[1]))})))})),i.length&&null!=t?.start&&null!=t.end){const e=t.start.getTime(),n=t.end.getTime(),a=i[0].multidimensionalDefinition.findIndex((e=>"StdTime"===e.dimensionName));a>-1&&(i=i.filter((t=>{const i=t.multidimensionalDefinition[a].values[0];return e<=i&&n>=i})))}return i.map((e=>e.sliceId))}function u(e,n){return Array.isArray(e)?n[0]===n[1]?e[0]===n[0]||e[1]===n[0]:e[0]>=n[0]&&e[0]<=n[1]&&e[1]>=n[0]&&e[1]<=n[1]:e>=n[0]&&e<=n[1]}function o(e,n){return e[0]<=n[0]&&e[1]>=n[0]||e[0]<=n[1]&&e[1]>=n[1]||e[0]>=n[0]&&e[1]<=n[1]}function m(e){return 1===e.length?[e[0],e[0]]:[e[0],e[e.length-1]]}function c(e,n,t){if(!n?.subsetDefinitions?.length)return e;let i;if(t){const{variables:a}=n;if(a.length&&!a.includes(t))return null;const r=n.subsetDefinitions.find((n=>n.dimensionName===e.name&&n.variableName===t));if(!r?.values?.length)return e;i=m(r.values)}else{const t=n.dimensions.find((n=>{let{name:t}=n;return t===e.name}));i=t?.extent}const a=i;if(!a?.length)return e;const r=e.values.filter((e=>u(e,a)));return{...e,extent:[...a],values:r}}function d(e,n,t){if(!n?.subsetDefinitions?.length)return!1;const{variables:i}=n;if(i.length&&e.some((e=>{let{variableName:n}=e;return n&&!i.includes(n)})))return!0;for(let a=0;a<e.length;a++){const i=e[a],r=n.subsetDefinitions.find((e=>(""===i.variableName||e.variableName===i.variableName)&&e.dimensionName===i.dimensionName));if(r?.values.length){const e=m(r.values);if(i.isSlice||2!==i.values.length||Array.isArray(i.values[0])||i.values[0]===i.values[1]||!t){if(i.values.some((n=>!u(n,e))))return!0}else if(!o(i.values,e))return!0}}return!1}function f(e,n){if(null==e)return{isOutside:!1};const{geometry:t,timeExtent:i,multidimensionalDefinition:r}=n;let l=null;if(null!=i&&(l=function(e,n){const t=e.dimensions.find((e=>{let{name:n}=e;return"StdTime"===n}));if(null==t||null==n.start&&null==n.end)return n;n=n.clone();const{start:i,end:r}=n.toJSON(),l=i===r?[i]:null!=i&&null!=r?[i,r]:[i??r];return 2===l.length&&t?.extent.length&&(l[0]=Math.max(l[0],t.extent[0]),l[1]=Math.min(l[1],t.extent[1]??t.extent[0]),l[1]<l[0])||d([new a.A({variableName:"",dimensionName:"StdTime",isSlice:1===l.length,values:l})],e,!0)?null:(n.start=new Date(l[0]),n.end=new Date(l[1]??l[0]),n)}(e,i),null==l))return{isOutside:!0};const{areaOfInterest:s}=e;if(s&&t){const e="point"===t.type?t:"extent"===t.type?t.center:"polygon"===t.type?t.centroid:null;if(e&&!s.contains(e))return{isOutside:!0}}return null!=r&&r.length&&d(r,e,!0)?{isOutside:!0}:{isOutside:!1,intersection:{geometry:t,timeExtent:l,multidimensionalDefinition:r}}}function h(e){const{rasterInfo:n,multidimensionalSubset:t}=e,{multidimensionalInfo:i}=n;if(null==i)return null;let a=e.multidimensionalDefinition?.length?e.multidimensionalDefinition:g(n,{multidimensionalSubset:t});if(!a?.length)return null;if(a.some((e=>!e.dimensionName))){const{variableName:e}=a[0],i=g(n,{multidimensionalSubset:t,variableName:e});i?.forEach((e=>{const n=a?.find((n=>{let{dimensionName:t}=n;return t===e.dimensionName}));n?.values?.length&&(e.values=n.values,e.isSlice=n.isSlice)})),a=i}const{timeExtent:r}=e;if(null!=a&&null!=r&&(null!=r.start||null!=r.end)){a=a.map((e=>e.clone()));const e=i.variables.find((e=>{let{name:n}=e;return n===a[0].variableName}))?.dimensions?.find((e=>{let{name:n}=e;return"StdTime"===n})),n=a.find((e=>{let{dimensionName:n}=e;return"StdTime"===n}));if(!e||!n)return null;const{start:t,end:l}=r,s=null==t?null:t.getTime(),u=null==l?null:l.getTime(),o=s??u,m=u??s;if(null!=e.values){const t=e.values.filter((e=>{if(Array.isArray(e)){if(o===m)return e[0]<=o&&e[1]>=o;const n=e[0]<=o&&e[1]>o||e[0]<m&&e[1]>=m,t=e[0]>=o&&e[1]<=m||e[0]<o&&e[1]>m;return n||t}return o===m?e===o:e>=o&&e<=m}));if(t.length){const e=t.sort(((e,n)=>{const t=Array.isArray(e)?e[0]:e,i=Array.isArray(e)?e[1]:e,a=Array.isArray(n)?n[0]:n,r=Array.isArray(n)?n[1]:n;return o===m?t-a:Math.abs(i-m)-Math.abs(r-m)}))[0];n.values=[e]}else a=null}else if(e.hasRegularIntervals&&e.extent){const[t,i]=e.extent;o>i||m<t?a=null:n.values=o===m?[o]:[Math.max(t,o),Math.min(i,m)]}}return null!=a&&d(a,t)?null:a}function v(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{multidimensionalInfo:t,keyProperties:i}=e;if(null==t)return null;const{variableName:a,multidimensionalSubset:r,multidimensionalDefinition:l}=n,s=null!=l?l[0]?.variableName:null,u=a||s||i?.DefaultVariable;let{variables:o}=t;return r?.variables?.length&&(o=o.filter((e=>{let{name:n}=e;return r.variables.includes(n)}))),u?o.find((e=>{let{name:n}=e;return n===u}))??o[0]:o[0]}function g(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const t=v(e,n);if(!t)return null;const i=[],{dimensions:r,name:l}=t;if(0===r.length)return[new a.A({variableName:l,dimensionName:"",values:[],isSlice:!0})];for(let s=0;s<r.length;s++){const e=c(r[s],n.multidimensionalSubset,l);if(!e)return null;const{values:t,extent:u}=e;let o=t?.[0]??u?.[0];"stdz"===e.name.toLowerCase()&&!e.hasRanges&&u&&Math.abs(u[1])<=Math.abs(u[0])&&(o=t?.length?t[t.length-1]:u[1]),i.push(new a.A({variableName:l,dimensionName:e.name,values:[o],isSlice:!n.useRangeForRangedDimensionInfo||!!e.hasRanges}))}return i}function b(e){return!!e?.length&&e.some((e=>{if(null==e.values)return!0;const n=e.values.length;return 0===n||n>1||!e.isSlice&&Array.isArray(e.values[0])}))}function y(e,n){if(null==n||null==e)return null;let t=n.variables.map((e=>({...e})));return e?.variables?.length&&(t=t.filter((n=>{let{name:t}=n;return e.variables.includes(t)})),t.forEach((n=>{n.dimensions=n.dimensions.map((t=>c(t,e,n.name))).filter(i.Ru)}))),t}function p(e,n){const{values:t}=n;if(t?.length){const n=Array.isArray(t[0]),i=Array.isArray(e);return n!==i?-1:n&&i?t.findIndex((n=>n[0]===e[0]&&n[1]===e[1])):t.indexOf(e)}const{extent:i}=n;if(Array.isArray(e)||!i||e<i[0]||e>i[1])return-1;const a=n.interval||1;if("ISO8601"!==n.unit)return Math.round((e-i[0])/a);const r=i[0];let l=-1;switch(n.intervalUnit?.toLowerCase()||"days"){case"seconds":l=Math.round((e-r)/1e3/a);break;case"minutes":l=Math.round((e-r)/6e4/a);break;case"hours":l=Math.round((e-r)/36e5/a);break;case"days":l=Math.round((e-r)/864e5/a);break;case"months":{const n=new Date(e).getUTCFullYear()-new Date(r).getUTCFullYear(),t=new Date(r).getUTCMonth(),i=new Date(e).getUTCMonth();l=0===n?i-t:i+11-t+12*(n-1)}break;case"years":l=Math.round((new Date(e).getUTCFullYear()-new Date(r).getUTCFullYear())/a);break;case"decades":l=Math.round((new Date(e).getUTCFullYear()-new Date(r).getUTCFullYear())/10/a)}return l}function w(e){let n=e.values?.length;if(n)return n;const{extent:t,unit:i}=e,a=e.interval||1,r=t?t[1]-t[0]:0;if("ISO8601"!==i)return Math.round(r/a);switch(e.intervalUnit?.toLowerCase()??"seconds"){case"seconds":n=Math.round(r/1e3/a);break;case"minutes":n=Math.round(r/6e4/a);break;case"hours":n=Math.round(r/36e5/a);break;case"days":n=Math.round(r/864e5/a);break;case"months":if(t){const e=new Date(t[1]).getUTCFullYear()-new Date(t[0]).getUTCFullYear(),i=new Date(t[0]).getUTCMonth(),a=new Date(t[1]).getUTCMonth();n=0===e?a-i+1:a+11-i+12*(e-1)+1}else n=0;break;case"years":n=t?Math.round((new Date(t[1]).getUTCFullYear()-new Date(t[0]).getUTCFullYear())/a):0;break;case"decades":n=t?Math.round((new Date(t[1]).getUTCFullYear()-new Date(t[0]).getUTCFullYear())/10/a):0;break;default:n=0}return n}function N(e){if(2!==e.extent?.length||!e.interval)return[];const{extent:[n,t],interval:i}=e;if("ISO8601"===e.unit){const a=e.intervalUnit?.toLowerCase()??"days";return["decades","years","months","days","hours","minutes","seconds"].includes(a)?function(e,n,t,i){const a=[];let r=e;const l=new Date(e);for(;r<=n;)switch(a.push(r),i){case"decades":l.setUTCFullYear(l.getUTCFullYear()+10*t),r=l.getTime();break;case"years":l.setUTCFullYear(l.getUTCFullYear()+t),r=l.getTime();break;case"months":l.setUTCMonth(l.getUTCMonth()+t),r=l.getTime();break;case"days":r+=864e5*t;break;case"hours":r+=36e5*t;break;case"minutes":r+=6e4*t;break;case"seconds":r+=1e3*t}return 1===a.length?a[1]=n:a[a.length-1]=n,a}(n,t,i,a):[]}const a=Math.round((t-n)/i);return Array.from({length:a},((e,r)=>r===a-1?t:n+r*i))}function D(e,n){let t=0;const i=e[0].variableName,a=[...n.variables].sort(((e,n)=>e.name>n.name?1:-1));for(let r=0;r<a.length;r++){const n=a[r],l=[...n.dimensions].sort(((e,n)=>e.name>n.name?-1:1));if(n.name!==i){t+=l.map((e=>w(e))).reduce(((e,n)=>e*n));continue}const s=l.map((e=>w(e))),u=l.length;for(let i=0;i<u;i++){const n=e.find((e=>e.dimensionName===l[i].name));if(null==n)return null;const a=p(n.values[0],l[i]);if(-1===a)return null;s.shift(),t+=i===u-1?a:a*s.reduce(((e,n)=>e*n))}break}return t}function x(e){return Math.round(24*(e-25569)*3600*1e3)}}}]);