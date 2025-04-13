"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[9036,25955,81061],{2925:(e,t,r)=>{r.d(t,{$:()=>x,IB:()=>l,Iy:()=>V,KV:()=>$,N2:()=>C,QP:()=>T,RH:()=>k,Vl:()=>F,Ws:()=>O,ZD:()=>I,_L:()=>G,bJ:()=>N,e$:()=>A,f6:()=>H,hw:()=>E,pW:()=>P,pf:()=>L,rs:()=>S,sn:()=>z,we:()=>D});var n=r(88102),i=r(62631),s=r(82301),o=r(64682),a=r(60548),c=r(24646);function l(e){return"r"in e&&"g"in e&&"b"in e}function h(e){return"h"in e&&"s"in e&&"v"in e}function u(e){return"l"in e&&"a"in e&&"b"in e}function f(e){return"l"in e&&"c"in e&&"h"in e}const p=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],d=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function m(e,t){const r=[];let n,i;if(e[0].length!==t.length)throw new Error("dimensions do not match");const s=e.length,o=e[0].length;let a=0;for(n=0;n<s;n++){for(a=0,i=0;i<o;i++)a+=e[n][i]*t[i];r.push(a)}return r}function y(e){const t=[e.r/255,e.g/255,e.b/255].map((e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4)),r=m(p,t);return{x:100*r[0],y:100*r[1],z:100*r[2]}}function g(e){const t=m(d,[e.x/100,e.y/100,e.z/100]).map((e=>{const t=e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055;return Math.min(1,Math.max(t,0))}));return{r:Math.round(255*t[0]),g:Math.round(255*t[1]),b:Math.round(255*t[2])}}function M(e){const t=[e.x/95.047,e.y/100,e.z/108.883].map((e=>e>(6/29)**3?e**(1/3):1/3*(29/6)**2*e+4/29));return{l:116*t[1]-16,a:500*(t[0]-t[1]),b:200*(t[1]-t[2])}}function v(e){const t=e.l,r=[(t+16)/116+e.a/500,(t+16)/116,(t+16)/116-e.b/200].map((e=>e>6/29?e**3:3*(6/29)**2*(e-4/29)));return{x:95.047*r[0],y:100*r[1],z:108.883*r[2]}}function b(e){return function(e){const t=e.l,r=e.a,n=e.b,i=Math.sqrt(r*r+n*n);let s=Math.atan2(n,r);return s=s>0?s:s+2*Math.PI,{l:t,c:i,h:s}}(M(y(e)))}function w(e){return g(v(function(e){const t=e.l,r=e.c,n=e.h;return{l:t,a:r*Math.cos(n),b:r*Math.sin(n)}}(e)))}function x(e){return l(e)?e:f(e)?w(e):u(e)?function(e){return g(v(e))}(e):function(e){return"x"in e&&"y"in e&&"z"in e}(e)?g(e):h(e)?function(e){const t=(e.h+360)%360/60,r=e.s/100,n=e.v/100*255,i=n*r,s=i*(1-Math.abs(t%2-1));let o;switch(Math.floor(t)){case 0:o={r:i,g:s,b:0};break;case 1:o={r:s,g:i,b:0};break;case 2:o={r:0,g:i,b:s};break;case 3:o={r:0,g:s,b:i};break;case 4:o={r:s,g:0,b:i};break;case 5:case 6:o={r:i,g:0,b:s};break;default:o={r:0,g:0,b:0}}return o.r=Math.round(o.r+n-i),o.g=Math.round(o.g+n-i),o.b=Math.round(o.b+n-i),o}(e):e}function C(e){return h(e)?e:function(e){const t=e.r,r=e.g,n=e.b,i=Math.max(t,r,n),s=i-Math.min(t,r,n);let o=i,a=0===s?0:i===t?(r-n)/s%6:i===r?(n-t)/s+2:(t-r)/s+4,c=0===s?0:s/o;return a<0&&(a+=6),a*=60,c*=100,o*=100/255,{h:a,s:c,v:o}}(x(e))}function I(e){return u(e)?e:function(e){return M(y(e))}(x(e))}function k(e){return f(e)?e:b(x(e))}function S(e){return R(e).isBright?"light":"dark"}function R(e){let{r:t,g:r,b:i,a:s}=e;return s<1&&(t=Math.round(s*t+255*(1-s)),r=Math.round(s*r+255*(1-s)),i=Math.round(s*i+255*(1-s))),new n.default({r:t,g:r,b:i})}function O(e,t){const{r:r,g:n,b:i}=t?.ignoreAlpha?e:R(e);return.2126*r+.7152*n+.0722*i}var P,_;function N(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P.High;return O(e,{ignoreAlpha:!0})>t?new n.default([0,0,0,e.a]):new n.default([255,255,255,e.a])}function A(e,t){const r=I(e);r.l*=1-t;const n=x(r),i=e.clone();return i.setColor(n),i.a=e.a,i}function G(e,t){const r=e.clone();return r.a*=t,r}function F(e,t){const r=C(e);r.s*=t;const n=x(r),i=e.clone();return i.setColor(n),i.a=e.a,i}function T(e){return n.default.toUnitRGBA(e)}function E(e,t){return e===t||null!=e&&e.equals(t)}function D(e,t){return e===t||null!=e&&null!=t&&(0,a.e)(e,t)}function L(e){return(0,c.fA)(e[0],e[1],e[2],e.length>3?e[3]:1)}function $(e){return e[0]??=0,e[1]??=0,e[2]??=0,e}function z(e){return e.length=4,$(e),e[3]??=1,(0,o.qE)(e[3],0,1),e}function H(e,t){const r=n.default.toUnitRGBA(e);return r[3]*=t,r}function V(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(0===e.length||t<=0)return[];if(1===(e=e.map((e=>"string"==typeof e?new n.default(e):e))).length||1===t){const r=[],n=e[0];for(let e=0;e<t;e++)r.push(n.clone());return r}if(r.shuffle&&(e=(0,i.k4)((0,s.clone)(e),r.seed)),e.length>=t){const r=[],n=(e.length-1)/(t-1);for(let i=0;i<t;i++){const t=Math.round(i*n);r.push(e[t].clone())}return r}return function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const n=[],s=e.length-1,o=Math.ceil((t-e.length)/s);e:for(let i=0;i<s;i++){const s=e[i],a=e[i+1];for(let i=1;i<=o;i++){const c=i/(o+1);if(n.push(q(s,a,c,r)),n.length+e.length===t)break e}}return[...e.map((e=>e.clone())),...(0,i.k4)(n,r.seed??1)]}(e,t,r)}(_=P||(P={}))[_.Low=160]="Low",_[_.High=225]="High";const B=(e,t)=>{const r=Math.floor(10*t())-5;return Math.min(255,Math.max(0,e+r))};function q(e,t,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const o=e.r,a=e.g,c=e.b,l=t.r,h=t.g,u=t.b,f=Math.round(o+(l-o)*r),p=Math.round(a+(h-a)*r),d=Math.round(c+(u-c)*r);if(!s.offset)return new n.default([f,p,d]);const m=(0,i.Mo)(s.seed);return new n.default([B(f,m),B(p,m),B(d,m)])}},9036:(e,t,r)=>{r.d(t,{default:()=>o});var n=r(74719),i=r(50925),s=r(73532);function o(e,t,r,n,s){if(null==e)return null;const o=e.references("geometry")&&s?c(t,n,s):t,a=e.repurposeFeature(o);try{return e.evaluate({...r,$feature:a},e.services)}catch(l){return i.A.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",l),null}}const a=new Map;function c(e,t,r){const{transform:o,hasZ:c,hasM:l}=r;a.has(t)||a.set(t,function(e){const t={};switch(e){case"esriGeometryPoint":return(e,r,n,i)=>(0,s.Tr)(r,t,e,n,i);case"esriGeometryPolygon":return(e,r,n,i)=>(0,s.$X)(r,t,e,n,i);case"esriGeometryPolyline":return(e,r,n,i)=>(0,s.P5)(r,t,e,n,i);case"esriGeometryMultipoint":return(e,r,n,i)=>(0,s.SW)(r,t,e,n,i);default:return i.A.getLogger("esri.views.2d.support.arcadeOnDemand").error(new n.default("mapview-arcade",`Unable to handle geometryType: ${e}`)),e=>e}}(t));const h=a.get(t)(e.geometry,o,c,l);return{...e,geometry:h}}},25955:(e,t,r)=>{r.d(t,{OverrideHelper:()=>h});var n=r(88102),i=r(2925),s=r(82301),o=r(96247),a=r(61154),c=r(9036);const l=e=>{if(!e)return[0,0,0,0];const{r:t,g:r,b:n,a:i}=e;return[t,r,n,255*i]};class h{static findApplicableOverrides(e,t,r){if(e&&t){if(e.primitiveName){let n=!1;for(const t of r)if(t.primitiveName===e.primitiveName){n=!0;break}if(!n)for(const i of t)i.primitiveName===e.primitiveName&&r.push(i)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const n of e.effects)h.findApplicableOverrides(n,t,r);if(e.symbolLayers)for(const n of e.symbolLayers)h.findApplicableOverrides(n,t,r);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":if(e.effects)for(const n of e.effects)h.findApplicableOverrides(n,t,r);if(e.markerPlacement&&h.findApplicableOverrides(e.markerPlacement,t,r),"CIMVectorMarker"===e.type){if(e.markerGraphics)for(const n of e.markerGraphics)h.findApplicableOverrides(n,t,r),h.findApplicableOverrides(n.symbol,t,r)}else"CIMCharacterMarker"===e.type?h.findApplicableOverrides(e.symbol,t,r):"CIMHatchFill"===e.type?h.findApplicableOverrides(e.lineSymbol,t,r):"CIMPictureMarker"===e.type&&h.findApplicableOverrides(e.animatedSymbolProperties,t,r)}}}static findEffectOverrides(e,t){if(!e)return null;if("CIMGeometricEffectDashes"===e.type&&(0,a.FH)(e),!t||!e.primitiveName)return{type:"cim-effect-param",effect:e,overrides:[]};const r=(0,a.rB)(e),n=e.primitiveName,i=[];for(const s of t)s.primitiveName===n&&i.push((0,a.rB)(s));return{type:"cim-effect-param",effect:r,overrides:(0,a.pk)(i)}}static async resolveSymbolOverrides(e,t,r,n,i,o,c){if(!e?.symbol)return null;let{symbol:l,primitiveOverrides:u}=e;const f=!!u;if(!f&&!n)return l;l=(0,s.clone)(l),u=(0,s.clone)(u);let p=!0;if(t||(t={attributes:{}},p=!1),f){if(p||(u=u.filter((e=>!e.valueExpressionInfo?.expression.includes("$feature")))),c||(u=u.filter((e=>!e.valueExpressionInfo?.expression.includes("$view")))),u.length>0){const e={spatialReference:r,fields:(0,a.O2)(t.attributes),geometryType:i};await h.createRenderExpressions(u,e),h.evaluateOverrides(u,t,i??"esriGeometryPoint",o,c)}h.applyOverrides(l,u)}return n&&h.applyDictionaryTextOverrides(l,t,n,null),l}static async createRenderExpressions(e,t){const r=[];for(const n of e){const e=n.valueExpressionInfo;if(!e||h._expressionToRenderExpression.has(e.expression))continue;const i=(0,o.Ad)(e.expression,t.spatialReference,t.fields);r.push(i),i.then((t=>h._expressionToRenderExpression.set(e.expression,t)))}r.length>0&&await Promise.all(r)}static evaluateOverrides(e,t,r,n,s){const o={$view:{scale:s?.scale}};for(const a of e){a.value&&"object"==typeof a.value&&(0,i.IB)(a.value)&&("Color"===a.propertyName||"StrokeColor"===a.propertyName)&&(a.value=l(a.value));const e=a.valueExpressionInfo;if(!e)continue;const s=h._expressionToRenderExpression.get(e.expression);s&&(a.value=(0,c.default)(s,t,o,r,n))}}static applyDictionaryTextOverrides(e,t,r,n){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"Normal";if(e?.type)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":case"CIMTextSymbol":{const s=e.symbolLayers;if(!s)return;for(const o of s)o&&"CIMVectorMarker"===o.type&&h.applyDictionaryTextOverrides(o,t,r,n,"CIMTextSymbol"===e.type?e.textCase:i)}break;case"CIMVectorMarker":{const i=e.markerGraphics;if(!i)return;for(const e of i)e&&h.applyDictionaryTextOverrides(e,t,r,n)}break;case"CIMMarkerGraphic":{const s=e.textString;if(s&&s.includes("[")){const o=(0,a.gQ)(s,r);e.textString=(0,a.FM)(t,o,n,i)}}}}static applyOverrides(e,t,r,n){if(e.primitiveName)for(const i of t)if(i.primitiveName===e.primitiveName){const t=(0,a.YF)(i.propertyName);if(n&&n.push({cim:e,nocapPropertyName:t,value:e[t]}),r){let t=!1;for(const n of r)n.primitiveName===e.primitiveName&&(t=!0);t||r.push(i)}null!=i.value&&(e[t]=i.value)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const i of e.effects)h.applyOverrides(i,t,r,n);if(e.symbolLayers)for(const i of e.symbolLayers)h.applyOverrides(i,t,r,n);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(e.effects)for(const i of e.effects)h.applyOverrides(i,t,r,n);if("CIMVectorMarker"===e.type&&e.markerGraphics)for(const i of e.markerGraphics)h.applyOverrides(i,t,r,n),h.applyOverrides(i.symbol,t,r,n)}}static restoreOverrides(e){for(const t of e)t.cim[t.nocapPropertyName]=t.value}static buildOverrideKey(e){let t="";for(const r of e)void 0!==r.value&&(t+=`${r.primitiveName}${r.propertyName}${JSON.stringify(r.value)}`);return t}static toValue(e,t){if("DashTemplate"===e)return t.split(" ").map((e=>Number(e)));if("Color"===e){const e=new n.default(t).toRgba();return e[3]*=255,e}return t}}h._expressionToRenderExpression=new Map},81061:(e,t,r)=>{r.r(t),r.d(t,{CIMSymbolRasterizer:()=>h});var n=r(94505),i=r(75119),s=r(88116),o=r(25955),a=r(52316),c=r(61154);const l=96/72;class h{constructor(e){this._spatialReference=e,this._imageDataCanvas=null,this._cimResourceManager=new n.A}get _canvas(){return this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas")),this._imageDataCanvas}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(e,t,r,n,i,l,h,f,p,d){if(!e)return null;const{data:m}=e;if(!m||"CIMSymbolReference"!==m.type||!m.symbol)return null;const{symbol:y}=m;l||(l=(0,c.n5)(y));const g=await o.OverrideHelper.resolveSymbolOverrides(m,t,this._spatialReference,i,l,h,f),M=this._cimResourceManager,v=[];s.wp.fetchResources(g,M,v),s.wp.fetchFonts(g,M,v),v.length>0&&await Promise.all(v);const{width:b,height:w}=r;let x=u(l,b,w,n,d);const C=s.wp.getEnvelope(g,x,M);if(!C)return null;C.x===1/0&&(C.x=b+2),C.y===1/0&&(C.y=-w/2),C.width===-1/0&&(C.width=b),C.height===-1/0&&(C.height=w);let I=1,k=0,S=0;switch(y.type){case"CIMPointSymbol":case"CIMTextSymbol":{let e=1;C.width>b&&(e=b/C.width);let t=1;C.height>w&&(t=w/C.height),"preview"===n&&(C.width<b&&(e=b/C.width),C.height<w&&(t=w/C.height)),I=Math.min(e,t),k=C.x+C.width/2,S=C.y+C.height/2}break;case"CIMLineSymbol":if(d){S=C.y+C.height/2,k=C.x+C.width/2;const e=C.width-b,t=C.height-w;x={paths:(0,a.hs)(x.paths,{xmin:-1*C.width/2+e,xmax:C.width/2-e,ymin:-1*C.height/2+t,ymax:C.height/2-t,width:C.width-2*e,height:C.height-2*t})}}else{(p||C.height>w)&&(I=w/C.height),S=C.y+C.height/2;const e=C.x*I+b/2,t=(C.x+C.width)*I+b/2,{paths:r}=x;r[0][0][0]-=e/I,r[0][2][0]-=(t-b)/I}break;case"CIMPolygonSymbol":if(d){S=C.y+C.height/2,k=C.x+C.width/2;const e=C.width-b,t=C.height-w;x={paths:(0,a.hs)(x.rings,{xmin:-1*C.width/2+e,xmax:C.width/2-e,ymin:-1*C.height/2+t,ymax:C.height/2-t,width:C.width-2*e,height:C.height-2*t})}}else{k=C.x+C.width/2,S=C.y+C.height/2;const e=C.x*I+b/2,t=(C.x+C.width)*I+b/2,r=C.y*I+w/2,n=(C.y+C.height)*I+w/2,{rings:i}=x;e<0&&(i[0][0][0]-=e,i[0][3][0]-=e,i[0][4][0]-=e),r<0&&(i[0][0][1]+=r,i[0][1][1]+=r,i[0][4][1]+=r),t>b&&(i[0][1][0]-=t-b,i[0][2][0]-=t-b),n>w&&(i[0][2][1]+=n-w,i[0][3][1]+=n-w)}}const R={type:"cim",data:{type:"CIMSymbolReference",symbol:g}};return this.rasterize(R,b,w,k,S,I,l,1,x)}rasterize(e,t,r,n,s,o,a){let h=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,f=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null,p=arguments.length>9&&void 0!==arguments[9]?arguments[9]:window.devicePixelRatio||1;const{data:d}=e;if(!d||"CIMSymbolReference"!==d.type||!d.symbol)return null;const{symbol:m}=d,y=this._canvas,g=p*l;y.width=t*g,y.height=r*g,a||(a=(0,c.n5)(m)),f||(f=u(a,t,r,"legend")),y.width+=2*h,y.height+=2*h;const M=y.getContext("2d",{willReadFrequently:!0}),v=i.IT.createIdentity();return v.translate(-n,-s),v.scale(o*g,-o*g),v.translate(t*g/2+h,r*g/2+h),M.clearRect(0,0,y.width,y.height),new i.Rj(M,this._cimResourceManager,v,!0).drawSymbol(m,f),M.getImageData(0,0,y.width,y.height)}}function u(e,t,r,n,i){const s=-t/2+1,o=t/2-1,c=r/2-1,l=-r/2+1;if(i&&("esriGeometryPolygon"===e||"esriGeometryPolyline"===e)){const n=function(e,t,r,n){return"esriGeometryPolygon"===t?{rings:(0,a.Tl)((0,a.hs)(e.rings,{xmin:0,ymin:0,xmax:r,ymax:n,width:r,height:n}),-1*r/2,-1*n/2)}:"esriGeometryPolyline"===t?{paths:(0,a.Tl)((0,a.hs)(e.paths,{xmin:0,ymin:0,xmax:r,ymax:n,width:r,height:n}),-1*r/2,-1*n/2)}:null}(i,e,t,r);if(n)return n}switch(e){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[s,0],[0,0],[o,0]]]};default:return"legend"===n?{rings:[[[s,c],[o,0],[o,l],[s,l],[s,c]]]}:{rings:[[[s,c],[o,c],[o,l],[s,l],[s,c]]]}}}},94505:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(26903),i=r(99571);class s{constructor(){this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){this._inFlightResourceMap.clear(),this._resourceMap.clear()}getResource(e){return this._resourceMap.get(e)??null}async fetchResource(e,t){const r=this._resourceMap.get(e);if(r)return{width:r.width,height:r.height};let n=this._inFlightResourceMap.get(e);return n?n.then((e=>({width:e.width,height:e.height}))):(n=(0,i.M5)(e,t),this._inFlightResourceMap.set(e,n),n.then((t=>(this._inFlightResourceMap.delete(e),this._resourceMap.set(e,t),{width:t.width,height:t.height})),(()=>({width:0,height:0}))))}deleteResource(e){this._inFlightResourceMap.delete(e),this._resourceMap.delete(e)}loadFont(e){return(0,n.Al)(e)}}}}]);