"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[154],{10154:(n,e,t)=>{t.r(e),t.d(e,{classBreaks:()=>r,heatmapStatistics:()=>u,histogram:()=>s,summaryStatistics:()=>o,uniqueValues:()=>a});var i=t(70934),l=t(68584);async function o(n){const{attribute:e,features:t}=n,{normalizationType:o,normalizationField:a,minValue:r,maxValue:s,fieldType:u,outStatisticTypes:c}=e,f=await(0,i.Jc)({field:e.field,valueExpression:e.valueExpression,normalizationType:o,normalizationField:a,normalizationTotal:e.normalizationTotal,viewInfoParams:e.viewInfoParams,timeZone:e.timeZone,fieldInfos:e.fieldInfos},t),d=(0,l.Vb)({normalizationType:o,normalizationField:a,minValue:r,maxValue:s}),m={value:.5,fieldType:u},h="esriFieldTypeString"===u?(0,l.z9)({values:f,supportsNullCount:d,percentileParams:m,outStatisticTypes:c}):(0,l.G_)({values:f,minValue:r,maxValue:s,useSampleStdDev:!o,supportsNullCount:d,percentileParams:m,outStatisticTypes:c});return(0,l.oZ)(h,c,"esriFieldTypeDate"===u)}async function a(n){const{attribute:e,features:t}=n,o=await(0,i.Jc)({field:e.field,field2:e.field2,field3:e.field3,fieldDelimiter:e.fieldDelimiter,valueExpression:e.valueExpression,viewInfoParams:e.viewInfoParams,timeZone:e.timeZone,fieldInfos:e.fieldInfos},t,!1),a=(0,l.b3)(o);return(0,l.lv)(a,e.domains,e.returnAllCodedValues,e.fieldDelimiter)}async function r(n){const{attribute:e,features:t}=n,{field:o,normalizationType:a,normalizationField:r,normalizationTotal:s,classificationMethod:u}=e,c=await(0,i.Jc)({field:o,valueExpression:e.valueExpression,normalizationType:a,normalizationField:r,normalizationTotal:s,viewInfoParams:e.viewInfoParams,timeZone:e.timeZone,fieldInfos:e.fieldInfos},t),f=(0,l.Rw)(c,{field:o,normalizationType:a,normalizationField:r,normalizationTotal:s,classificationMethod:u,standardDeviationInterval:e.standardDeviationInterval,numClasses:e.numClasses,minValue:e.minValue,maxValue:e.maxValue});return(0,l.jM)(f,u)}async function s(n){const{attribute:e,features:t}=n,{field:o,normalizationType:a,normalizationField:r,normalizationTotal:s,classificationMethod:u}=e,c=await(0,i.Jc)({field:o,valueExpression:e.valueExpression,normalizationType:a,normalizationField:r,normalizationTotal:s,viewInfoParams:e.viewInfoParams,timeZone:e.timeZone,fieldInfos:e.fieldInfos},t);return(0,l.$y)(c,{field:o,normalizationType:a,normalizationField:r,normalizationTotal:s,classificationMethod:u,standardDeviationInterval:e.standardDeviationInterval,numBins:e.numBins,minValue:e.minValue,maxValue:e.maxValue})}async function u(n){const{attribute:e,features:t}=n,{field:l,radius:o,transform:a,spatialReference:r}=e,s=e.size??[0,0],u=(0,i.$r)(t??[],a,r,s);return(0,i.gV)(u,o??void 0,l,s[0],s[1])}},70934:(n,e,t)=>{t.d(e,{$r:()=>v,Jc:()=>z,Lc:()=>x,MH:()=>V,Wk:()=>M,gV:()=>y,lX:()=>I,rb:()=>w,sf:()=>T});var i=t(74719),l=t(16804),o=t(87431),a=t(75400),r=t(93321),s=t(73532),u=t(70576),c=t(95011),f=t(98785),d=t(79538),m=t(68584),h=t(96247);let p=null;const g=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function v(n,e,t,i){const l=(0,u.d9)(t)?(0,u.Vp)(t):null,o=l?Math.round((l.valid[1]-l.valid[0])/e.scale[0]):null;return n.map((n=>{const t=new a.A(n.geometry);return(0,s.Gy)(e,t,t),n.geometry=l?function(n,e,t){return n.x<0?n.x+=e:n.x>t&&(n.x-=e),n}(t,o??0,i[0]):t,n}))}function y(n){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,t=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;const a=new Float64Array(i*o);e=Math.round((0,l.Lz)(e));let r=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;const u=(0,f.YW)(t);for(const{geometry:l,attributes:c}of n){const{x:n,y:t}=l,d=Math.max(0,n-e),m=Math.max(0,t-e),h=Math.min(o,t+e),p=Math.min(i,n+e),g=+u(c);for(let l=m;l<h;l++)for(let o=d;o<p;o++){const u=l*i+o,c=(0,f.hv)(o-n,l-t,e)*g,d=a[u]+=c;r=Math.min(r,d),s=Math.max(s,d)}}return{min:r,max:s}}function w(n){const e=g.exec(n);if(!e)return null;const{hh:t,mm:i,ss:l,ms:a}=e.groups;return Number(t)*o.vf.hours+Number(i)*o.vf.minutes+Number(l)*o.vf.seconds+Number(a||0)}async function z(n,e){let t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(!e)return[];const{field:i,field2:l,field3:o,fieldDelimiter:a,fieldInfos:s,timeZone:u}=n,f=i&&s?.find((n=>n.name.toLowerCase()===i.toLowerCase())),g=!!f&&(0,c.OH)(f),v=!!f&&(0,d.fs)(f),y=n.valueExpression,z=n.normalizationType,x=n.normalizationField,I=n.normalizationTotal,T=[],M=n.viewInfoParams;let V=null,b=null;if(y){if(!p){const{arcadeUtils:n}=await(0,h.lw)();p=n}p.hasGeometryOperations(y)&&await p.enableGeometryOperations(),V=p.createFunction(y),b=M?p.getViewInfo({viewingMode:M.viewingMode,scale:M.scale,spatialReference:new r.A(M.spatialReference)}):null}const F=n.fieldInfos,P=e[0]&&"declaredClass"in e[0]&&"esri.Graphic"===e[0].declaredClass||!F?null:{fields:F};return e.forEach((n=>{const e=n.attributes;let r;if(y){const e=P?{...n,layer:P}:n,t=p.createExecContext(e,b,u);r=p.executeFunction(V,t)}else e&&(r=e[i],l?(r=`${(0,m.gJ)(r)}${a}${(0,m.gJ)(e[l])}`,o&&(r=`${r}${a}${(0,m.gJ)(e[o])}`)):"string"==typeof r&&t&&(v?r=r?new Date(r).getTime():null:g&&(r=r?w(r):null)));if(z&&"number"==typeof r&&isFinite(r)){const n=e&&parseFloat(e[x]);r=(0,m.zS)(r,z,n,I)}T.push(r)})),T}function x(n){const e=n.field,t=n.normalizationType,i=n.normalizationField;let l;return"field"===t?l="(NOT "+i+" = 0)":"log"!==t&&"natural-log"!==t&&"square-root"!==t||(l=`(${e} > 0)`),l}function I(n,e,t){const i=null!=e?n+" >= "+e:"",l=null!=t?n+" <= "+t:"";let o="";return o=i&&l?T(i,l):i||l,o?"("+o+")":""}function T(n,e){let t=null!=n?n:"";return null!=e&&e&&(t=t?"("+t+") AND ("+e+")":e),t}function M(n,e){if(n&&"intersects"!==n.spatialRelationship)return new i.A(e,"Only 'intersects' spatialRelationship is supported for featureFilter")}function V(n,e,t){const l=function(n){const e=n.layer;return n.fields.filter((n=>!e.getField(n)))}({layer:n,fields:e});if(l.length)return new i.A(t,"Unknown fields: "+l.join(", ")+". You can only use fields defined in the layer schema");const o=function(n){const e=n.layer;return n.fields.filter((n=>{const t=e.getFieldUsageInfo(n);return!t||!t.supportsStatistics}))}({layer:n,fields:e});return o.length?new i.A(t,"Unsupported fields: "+o.join(", ")+". You can only use fields that can be fetched i.e. AdapterFieldUsageInfo.supportsStatistics must be true"):void 0}},73532:(n,e,t)=>{t.d(e,{$X:()=>Z,B2:()=>a,Gy:()=>M,IE:()=>o,P5:()=>E,Q1:()=>l,QE:()=>b,SW:()=>F,Tr:()=>P,VV:()=>i,wp:()=>V});t(78629);function i(n){return n?{originPosition:"upper-left"===n.originPosition?"upperLeft":"lower-left"===n.originPosition?"lowerLeft":n.originPosition,scale:n.tolerance?[n.tolerance,n.tolerance,1,1]:[1,1,1,1],translate:null!=n.extent?[n.extent.xmin,n.extent.ymax,n.extent.zmin??0,n.extent.mmin??0]:[0,0,0,0]}:null}function l(n){if(function(n){return"lowerLeft"===n.originPosition&&4===n.scale.length&&4===n.translate.length}(n))return n;const{originPosition:e,scale:t,translate:i}=n,l=t[0]??1,o=t[1]??1;return{originPosition:"lowerLeft",scale:[l,"lowerLeft"===e?o:-o,t[2]??1,t[3]??1],translate:[i[0]??0,i[1]??0,i[2]??0,i[3]??0]}}function o(n,e){let{scale:t,translate:i}=n;return Math.round((e-i[0])/t[0])}function a(n,e){let{scale:t,translate:i}=n;return Math.round((e-i[1])/t[1])}function r(n,e){let{scale:t,translate:i}=n;return Math.round(((e??0)-i[2])/t[2])}function s(n,e){let{scale:t,translate:i}=n;return e?Math.round((e-i[3])/t[3]):0}function u(n,e){return n&&e?m:n&&!e?f:!n&&e?d:c}const c=(n,e)=>{const t=[];if(!e.length)return null;const i=e[0];let l=o(n,i[0]),r=a(n,i[1]);t.push([l,r]);for(let s=1;s<e.length;s++){const[i,u]=e[s],c=o(n,i),f=a(n,u);c===l&&f===r||t.push([c-l,f-r]),l=c,r=f}return t},f=(n,e)=>{const t=[];if(!e.length)return null;const i=e[0];let l=o(n,i[0]),s=a(n,i[1]),u=r(n,i[2]);t.push([l,s,u]);for(let c=1;c<e.length;c++){const[i,f,d]=e[c],m=o(n,i),h=a(n,f),p=r(n,d);m===l&&h===s&&p===u||t.push([m-l,h-s,p]),l=m,s=h,u=p}return t},d=(n,e)=>{const t=[];if(!e.length)return null;const i=e[0];let l=o(n,i[0]),r=a(n,i[1]),u=s(n,i[2]);t.push([l,r,u]);for(let c=1;c<e.length;c++){const[i,f,d]=e[c],m=o(n,i),h=a(n,f),p=s(n,d);m===l&&h===r&&p===u||t.push([m-l,h-r,p]),l=m,r=h,u=p}return t},m=(n,e)=>{const t=[];if(!e.length)return null;const i=e[0];let l=o(n,i[0]),u=a(n,i[1]),c=r(n,i[2]),f=s(n,i[3]);t.push([l,u,c,f]);for(let d=1;d<e.length;d++){const[i,m,h,p]=e[d],g=o(n,i),v=a(n,m),y=r(n,h),w=s(n,p);g===l&&v===u&&y===c&&w===f||t.push([g-l,v-u,y,w]),l=g,u=v,c=y,f=w}return t};function h(n,e){let{scale:t,translate:i}=n;return e*t[0]+i[0]}function p(n,e){let{scale:t,translate:i}=n;return e*t[1]+i[1]}function g(n,e){let{scale:t,translate:i}=n;return(e??0)*t[2]+i[2]}function v(n,e){let{scale:t,translate:i}=n;return e?e*t[3]+i[3]:0}function y(n,e){return n&&e?I:n&&!e?z:!n&&e?x:w}const w=(n,e)=>{const t=new Array(e.length);if(!e.length)return t;const i=e[0];let l=h(n,i[0]),o=p(n,i[1]);t[0]=[l,o];const{scale:a,originPosition:r}=n,s=a[0],u="lowerLeft"===r?a[1]:-a[1];for(let c=1;c<e.length;c++){const[n,i]=e[c];l+=s*n,o+=u*i,t[c]=[l,o]}return t},z=(n,e)=>{const t=new Array(e.length);if(!e.length)return t;const i=e[0];let l=h(n,i[0]),o=p(n,i[1]);t[0]=[l,o,g(n,i[2])];const{scale:a,originPosition:r}=n,s=a[0],u="lowerLeft"===r?a[1]:-a[1];for(let c=1;c<e.length;c++){const[i,a,r]=e[c];l+=s*i,o+=u*a,t[c]=[l,o,g(n,r)]}return t},x=(n,e)=>{const t=new Array(e.length);if(!e.length)return t;const i=e[0];let l=h(n,i[0]),o=p(n,i[1]);t[0]=[l,o,v(n,i[2])];const{scale:a,originPosition:r}=n,s=a[0],u="lowerLeft"===r?a[1]:-a[1];for(let c=1;c<e.length;c++){const[i,a,r]=e[c];l+=s*i,o+=u*a,t[c]=[l,o,v(n,r)]}return t},I=(n,e)=>{const t=new Array(e.length);if(!e.length)return t;const i=e[0];let l=h(n,i[0]),o=p(n,i[1]);t[0]=[l,o,g(n,i[2]),v(n,i[3])];const{scale:a,originPosition:r}=n,s=a[0],u="lowerLeft"===r?a[1]:-a[1];for(let c=1;c<e.length;c++){const[i,a,r,f]=e[c];l+=s*i,o+=u*a,t[c]=[l,o,g(n,r),v(n,f)]}return t};function T(n,e,t){const i=new Array(t.length);for(let l=0;l<t.length;l++)i[l]=e(n,t[l]);return i}function M(n,e,t){const i=l(n);return e.x=o(i,t.x),e.y=a(i,t.y),null!=t.z&&(e.z=r(i,t.z)),null!=t.m&&(e.m=s(i,t.m)),e}function V(n,e,t){const i=function(n,e,t,i){const l=[],o=u(t,i);for(let a=0;a<e.length;a++){const t=o(n,e[a]);t&&t.length>=3&&l.push(t)}return l.length?l:null}(l(n),t.rings,t.hasZ,t.hasM);return i?(e.rings=i,e.hasZ=t.hasZ??!1,e.hasM=t.hasM??!1,e):null}function b(n,e,t){const i=function(n,e,t,i){const l=[],o=u(t,i);for(let a=0;a<e.length;a++){const t=o(n,e[a]);t&&t.length>=2&&l.push(t)}return l.length?l:null}(l(n),t.paths,t.hasZ,t.hasM);return i?(e.paths=i,e.hasZ=t.hasZ??!1,e.hasM=t.hasM??!1,e):null}function F(n,e,t){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t?.hasZ??!1,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:t?.hasM??!1;if(null!=t){const a=l(n);e.points=y(i,o)(a,t.points),e.hasZ=i,e.hasM=o}return e}function P(n,e,t){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null!=t?.z,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null!=t?.m;if(null==t)return e;const a=l(n);return e.x=h(a,t.x),e.y=p(a,t.y),i&&(e.z=g(a,t.z)),o&&(e.m=v(a,t.m)),e}function Z(n,e,t){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t?.hasZ??!1,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:t?.hasM??!1;if(null!=t){const a=l(n);e.rings=T(a,y(i,o),t.rings),e.hasZ=i,e.hasM=o}return e}function E(n,e,t){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t?.hasZ??!1,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:t?.hasM??!1;if(null!=t){const a=l(n);e.paths=T(a,y(i,o),t.paths),e.hasZ=i,e.hasM=o}return e}}}]);