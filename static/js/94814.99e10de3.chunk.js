"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[9036,25955,94814],{2925:(e,t,r)=>{r.d(t,{$:()=>I,IB:()=>h,Iy:()=>N,KV:()=>U,N2:()=>w,QP:()=>L,RH:()=>x,Vl:()=>D,Ws:()=>T,ZD:()=>S,_L:()=>O,bJ:()=>G,e$:()=>A,f6:()=>V,hw:()=>z,pW:()=>P,pf:()=>F,rs:()=>C,sn:()=>j,we:()=>E});var s=r(88102),i=r(62631),n=r(82301),o=r(64682),a=r(60548),c=r(24646);function h(e){return"r"in e&&"g"in e&&"b"in e}function u(e){return"h"in e&&"s"in e&&"v"in e}function l(e){return"l"in e&&"a"in e&&"b"in e}function d(e){return"l"in e&&"c"in e&&"h"in e}const p=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],m=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function f(e,t){const r=[];let s,i;if(e[0].length!==t.length)throw new Error("dimensions do not match");const n=e.length,o=e[0].length;let a=0;for(s=0;s<n;s++){for(a=0,i=0;i<o;i++)a+=e[s][i]*t[i];r.push(a)}return r}function y(e){const t=[e.r/255,e.g/255,e.b/255].map((e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4)),r=f(p,t);return{x:100*r[0],y:100*r[1],z:100*r[2]}}function g(e){const t=f(m,[e.x/100,e.y/100,e.z/100]).map((e=>{const t=e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055;return Math.min(1,Math.max(t,0))}));return{r:Math.round(255*t[0]),g:Math.round(255*t[1]),b:Math.round(255*t[2])}}function _(e){const t=[e.x/95.047,e.y/100,e.z/108.883].map((e=>e>(6/29)**3?e**(1/3):1/3*(29/6)**2*e+4/29));return{l:116*t[1]-16,a:500*(t[0]-t[1]),b:200*(t[1]-t[2])}}function b(e){const t=e.l,r=[(t+16)/116+e.a/500,(t+16)/116,(t+16)/116-e.b/200].map((e=>e>6/29?e**3:3*(6/29)**2*(e-4/29)));return{x:95.047*r[0],y:100*r[1],z:108.883*r[2]}}function v(e){return function(e){const t=e.l,r=e.a,s=e.b,i=Math.sqrt(r*r+s*s);let n=Math.atan2(s,r);return n=n>0?n:n+2*Math.PI,{l:t,c:i,h:n}}(_(y(e)))}function M(e){return g(b(function(e){const t=e.l,r=e.c,s=e.h;return{l:t,a:r*Math.cos(s),b:r*Math.sin(s)}}(e)))}function I(e){return h(e)?e:d(e)?M(e):l(e)?function(e){return g(b(e))}(e):function(e){return"x"in e&&"y"in e&&"z"in e}(e)?g(e):u(e)?function(e){const t=(e.h+360)%360/60,r=e.s/100,s=e.v/100*255,i=s*r,n=i*(1-Math.abs(t%2-1));let o;switch(Math.floor(t)){case 0:o={r:i,g:n,b:0};break;case 1:o={r:n,g:i,b:0};break;case 2:o={r:0,g:i,b:n};break;case 3:o={r:0,g:n,b:i};break;case 4:o={r:n,g:0,b:i};break;case 5:case 6:o={r:i,g:0,b:n};break;default:o={r:0,g:0,b:0}}return o.r=Math.round(o.r+s-i),o.g=Math.round(o.g+s-i),o.b=Math.round(o.b+s-i),o}(e):e}function w(e){return u(e)?e:function(e){const t=e.r,r=e.g,s=e.b,i=Math.max(t,r,s),n=i-Math.min(t,r,s);let o=i,a=0===n?0:i===t?(r-s)/n%6:i===r?(s-t)/n+2:(t-r)/n+4,c=0===n?0:n/o;return a<0&&(a+=6),a*=60,c*=100,o*=100/255,{h:a,s:c,v:o}}(I(e))}function S(e){return l(e)?e:function(e){return _(y(e))}(I(e))}function x(e){return d(e)?e:v(I(e))}function C(e){return R(e).isBright?"light":"dark"}function R(e){let{r:t,g:r,b:i,a:n}=e;return n<1&&(t=Math.round(n*t+255*(1-n)),r=Math.round(n*r+255*(1-n)),i=Math.round(n*i+255*(1-n))),new s.default({r:t,g:r,b:i})}function T(e,t){const{r:r,g:s,b:i}=t?.ignoreAlpha?e:R(e);return.2126*r+.7152*s+.0722*i}var P,k;function G(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P.High;return T(e,{ignoreAlpha:!0})>t?new s.default([0,0,0,e.a]):new s.default([255,255,255,e.a])}function A(e,t){const r=S(e);r.l*=1-t;const s=I(r),i=e.clone();return i.setColor(s),i.a=e.a,i}function O(e,t){const r=e.clone();return r.a*=t,r}function D(e,t){const r=w(e);r.s*=t;const s=I(r),i=e.clone();return i.setColor(s),i.a=e.a,i}function L(e){return s.default.toUnitRGBA(e)}function z(e,t){return e===t||null!=e&&e.equals(t)}function E(e,t){return e===t||null!=e&&null!=t&&(0,a.e)(e,t)}function F(e){return(0,c.fA)(e[0],e[1],e[2],e.length>3?e[3]:1)}function U(e){return e[0]??=0,e[1]??=0,e[2]??=0,e}function j(e){return e.length=4,U(e),e[3]??=1,(0,o.qE)(e[3],0,1),e}function V(e,t){const r=s.default.toUnitRGBA(e);return r[3]*=t,r}function N(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(0===e.length||t<=0)return[];if(1===(e=e.map((e=>"string"==typeof e?new s.default(e):e))).length||1===t){const r=[],s=e[0];for(let e=0;e<t;e++)r.push(s.clone());return r}if(r.shuffle&&(e=(0,i.k4)((0,n.clone)(e),r.seed)),e.length>=t){const r=[],s=(e.length-1)/(t-1);for(let i=0;i<t;i++){const t=Math.round(i*s);r.push(e[t].clone())}return r}return function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const s=[],n=e.length-1,o=Math.ceil((t-e.length)/n);e:for(let i=0;i<n;i++){const n=e[i],a=e[i+1];for(let i=1;i<=o;i++){const c=i/(o+1);if(s.push(q(n,a,c,r)),s.length+e.length===t)break e}}return[...e.map((e=>e.clone())),...(0,i.k4)(s,r.seed??1)]}(e,t,r)}(k=P||(P={}))[k.Low=160]="Low",k[k.High=225]="High";const B=(e,t)=>{const r=Math.floor(10*t())-5;return Math.min(255,Math.max(0,e+r))};function q(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const o=e.r,a=e.g,c=e.b,h=t.r,u=t.g,l=t.b,d=Math.round(o+(h-o)*r),p=Math.round(a+(u-a)*r),m=Math.round(c+(l-c)*r);if(!n.offset)return new s.default([d,p,m]);const f=(0,i.Mo)(n.seed);return new s.default([B(d,f),B(p,f),B(m,f)])}},9036:(e,t,r)=>{r.d(t,{default:()=>o});var s=r(74719),i=r(50925),n=r(73532);function o(e,t,r,s,n){if(null==e)return null;const o=e.references("geometry")&&n?c(t,s,n):t,a=e.repurposeFeature(o);try{return e.evaluate({...r,$feature:a},e.services)}catch(h){return i.A.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",h),null}}const a=new Map;function c(e,t,r){const{transform:o,hasZ:c,hasM:h}=r;a.has(t)||a.set(t,function(e){const t={};switch(e){case"esriGeometryPoint":return(e,r,s,i)=>(0,n.Tr)(r,t,e,s,i);case"esriGeometryPolygon":return(e,r,s,i)=>(0,n.$X)(r,t,e,s,i);case"esriGeometryPolyline":return(e,r,s,i)=>(0,n.P5)(r,t,e,s,i);case"esriGeometryMultipoint":return(e,r,s,i)=>(0,n.SW)(r,t,e,s,i);default:return i.A.getLogger("esri.views.2d.support.arcadeOnDemand").error(new s.default("mapview-arcade",`Unable to handle geometryType: ${e}`)),e=>e}}(t));const u=a.get(t)(e.geometry,o,c,h);return{...e,geometry:u}}},13473:(e,t,r)=>{function s(){return[1,0,0,0,1,0,0,0,1]}function i(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]}function n(e,t,r,s,i,n,o,a,c){return[e,t,r,s,i,n,o,a,c]}r.d(t,{fA:()=>n,o8:()=>i,vt:()=>s,zK:()=>o});const o=[1,0,0,0,1,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:o,clone:i,create:s,createView:function(e,t){return new Float64Array(e,t,9)},fromValues:n},Symbol.toStringTag,{value:"Module"}))},25955:(e,t,r)=>{r.d(t,{OverrideHelper:()=>u});var s=r(88102),i=r(2925),n=r(82301),o=r(96247),a=r(61154),c=r(9036);const h=e=>{if(!e)return[0,0,0,0];const{r:t,g:r,b:s,a:i}=e;return[t,r,s,255*i]};class u{static findApplicableOverrides(e,t,r){if(e&&t){if(e.primitiveName){let s=!1;for(const t of r)if(t.primitiveName===e.primitiveName){s=!0;break}if(!s)for(const i of t)i.primitiveName===e.primitiveName&&r.push(i)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const s of e.effects)u.findApplicableOverrides(s,t,r);if(e.symbolLayers)for(const s of e.symbolLayers)u.findApplicableOverrides(s,t,r);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":if(e.effects)for(const s of e.effects)u.findApplicableOverrides(s,t,r);if(e.markerPlacement&&u.findApplicableOverrides(e.markerPlacement,t,r),"CIMVectorMarker"===e.type){if(e.markerGraphics)for(const s of e.markerGraphics)u.findApplicableOverrides(s,t,r),u.findApplicableOverrides(s.symbol,t,r)}else"CIMCharacterMarker"===e.type?u.findApplicableOverrides(e.symbol,t,r):"CIMHatchFill"===e.type?u.findApplicableOverrides(e.lineSymbol,t,r):"CIMPictureMarker"===e.type&&u.findApplicableOverrides(e.animatedSymbolProperties,t,r)}}}static findEffectOverrides(e,t){if(!e)return null;if("CIMGeometricEffectDashes"===e.type&&(0,a.FH)(e),!t||!e.primitiveName)return{type:"cim-effect-param",effect:e,overrides:[]};const r=(0,a.rB)(e),s=e.primitiveName,i=[];for(const n of t)n.primitiveName===s&&i.push((0,a.rB)(n));return{type:"cim-effect-param",effect:r,overrides:(0,a.pk)(i)}}static async resolveSymbolOverrides(e,t,r,s,i,o,c){if(!e?.symbol)return null;let{symbol:h,primitiveOverrides:l}=e;const d=!!l;if(!d&&!s)return h;h=(0,n.clone)(h),l=(0,n.clone)(l);let p=!0;if(t||(t={attributes:{}},p=!1),d){if(p||(l=l.filter((e=>!e.valueExpressionInfo?.expression.includes("$feature")))),c||(l=l.filter((e=>!e.valueExpressionInfo?.expression.includes("$view")))),l.length>0){const e={spatialReference:r,fields:(0,a.O2)(t.attributes),geometryType:i};await u.createRenderExpressions(l,e),u.evaluateOverrides(l,t,i??"esriGeometryPoint",o,c)}u.applyOverrides(h,l)}return s&&u.applyDictionaryTextOverrides(h,t,s,null),h}static async createRenderExpressions(e,t){const r=[];for(const s of e){const e=s.valueExpressionInfo;if(!e||u._expressionToRenderExpression.has(e.expression))continue;const i=(0,o.Ad)(e.expression,t.spatialReference,t.fields);r.push(i),i.then((t=>u._expressionToRenderExpression.set(e.expression,t)))}r.length>0&&await Promise.all(r)}static evaluateOverrides(e,t,r,s,n){const o={$view:{scale:n?.scale}};for(const a of e){a.value&&"object"==typeof a.value&&(0,i.IB)(a.value)&&("Color"===a.propertyName||"StrokeColor"===a.propertyName)&&(a.value=h(a.value));const e=a.valueExpressionInfo;if(!e)continue;const n=u._expressionToRenderExpression.get(e.expression);n&&(a.value=(0,c.default)(n,t,o,r,s))}}static applyDictionaryTextOverrides(e,t,r,s){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"Normal";if(e?.type)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":case"CIMTextSymbol":{const n=e.symbolLayers;if(!n)return;for(const o of n)o&&"CIMVectorMarker"===o.type&&u.applyDictionaryTextOverrides(o,t,r,s,"CIMTextSymbol"===e.type?e.textCase:i)}break;case"CIMVectorMarker":{const i=e.markerGraphics;if(!i)return;for(const e of i)e&&u.applyDictionaryTextOverrides(e,t,r,s)}break;case"CIMMarkerGraphic":{const n=e.textString;if(n&&n.includes("[")){const o=(0,a.gQ)(n,r);e.textString=(0,a.FM)(t,o,s,i)}}}}static applyOverrides(e,t,r,s){if(e.primitiveName)for(const i of t)if(i.primitiveName===e.primitiveName){const t=(0,a.YF)(i.propertyName);if(s&&s.push({cim:e,nocapPropertyName:t,value:e[t]}),r){let t=!1;for(const s of r)s.primitiveName===e.primitiveName&&(t=!0);t||r.push(i)}null!=i.value&&(e[t]=i.value)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const i of e.effects)u.applyOverrides(i,t,r,s);if(e.symbolLayers)for(const i of e.symbolLayers)u.applyOverrides(i,t,r,s);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(e.effects)for(const i of e.effects)u.applyOverrides(i,t,r,s);if("CIMVectorMarker"===e.type&&e.markerGraphics)for(const i of e.markerGraphics)u.applyOverrides(i,t,r,s),u.applyOverrides(i.symbol,t,r,s)}}static restoreOverrides(e){for(const t of e)t.cim[t.nocapPropertyName]=t.value}static buildOverrideKey(e){let t="";for(const r of e)void 0!==r.value&&(t+=`${r.primitiveName}${r.propertyName}${JSON.stringify(r.value)}`);return t}static toValue(e,t){if("DashTemplate"===e)return t.split(" ").map((e=>Number(e)));if("Color"===e){const e=new s.default(t).toRgba();return e[3]*=255,e}return t}}u._expressionToRenderExpression=new Map},94814:(e,t,r)=>{r.d(t,{A:()=>we});var s=r(93800),i=r(6946),n=r(62631),o=r(21265),a=r(93633),c=r(17741),h=r(49959),u=r(79953),l=r(48602),d=(r(50925),r(75269)),p=r(90772),m=r(78629),f=r(76747),y=r(88116),g=r(25955),_=r(78129),b=r(77690),v=r(5702),M=r(97582),I=r(65986),w=r(95003),S=r(5940);var x=r(55071),C=r(54333),R=r(35643),T=r(63995),P=r(90632),k=r(81765),G=r(39817),A=r(38207);class O extends A.Y{static from(e,t,r){return new O(e,t,r)}constructor(e,t,r){super(r),this._items=e,this._tile=t,this._index=-1,this._cachedGeometry=null;const s=t.lod;s.wrap&&(this._wrappingInfo={worldSizeX:s.worldSize[0]})}get _current(){return this._items[this._index]}getItem(){return this._current}getZOrder(){return this._current.zOrder}getMeshWriters(){return this._current.symbolResource?.symbolInfo.meshWriters??[]}hasField(e){return null!=this._current.attributes[e]}field(e){return this.readAttribute(e)}get geometryType(){const e=(0,m.getJsonType)(this._current.geometry);return"esriGeometryPoint"===e?"esriGeometryMultipoint":e}getCursor(){return this.copy()}copy(){const e=new O(this._items,this._tile,this.metadata);return this.copyInto(e),e}copyInto(e){super.copyInto(e),e._cachedGeometry=this._cachedGeometry,e._index=this._index}get fields(){throw new Error("Fields reading not supported to graphics.")}get hasFeatures(){return!!this._items.length}get hasNext(){return this._index+1<this._items.length}get exceededTransferLimit(){throw new Error("InternalError: exceededTransferLimit not implemented for graphics.")}get hasZ(){return!1}get hasM(){return!1}get usedMemory(){return this._current.usedMemory}getInTransform(){return this._tile.transform}getSize(){return this._items.length}getAttributeHash(){let e="";for(const t in this._current.attributes)e+=this._current.attributes[t];return e}getObjectId(){return this._items[this._index].objectId}getDisplayId(){return this._current.displayId}setDisplayId(e){throw new Error("InternalError: Setting displayId not supported for graphics.")}setIndex(e){this._index=e}getIndex(){return this._index}next(){for(this._cachedGeometry=null;++this._index<this._items.length&&!this._getExists(););return this._index<this._items.length}readGeometryArea(){throw new Error("InternalError: readGeometryArea not supported for graphics.")}_readGeometry(){if(!this._cachedGeometry){let e=(0,k.Ux)(this._current.projectedGeometry,this.hasZ,this.hasM);if("esriGeometryPolyline"===this.geometryType&&(e=(0,k.kz)(new G.A,e,this.hasZ,this.hasM,this.geometryType,this._tile.transform.scale[0])),this._cachedGeometry=(0,k.Nl)(new G.A,e,this.hasZ,this.hasM,this.geometryType,this._tile.transform),!this._cachedGeometry)return null;this._wrapGeometry(this._cachedGeometry)}return this._cachedGeometry}_wrapGeometry(e){if(!this._wrappingInfo)return;const{worldSizeX:t}=this._wrappingInfo;if(e.isPoint)return 1===t?(e.coords.push(b.CQ,0),e.coords.push(-1024,0),void e.lengths.push(3)):2===t?(e.coords.push(2*b.CQ,0),e.coords.push(-2048,0),void e.lengths.push(3)):void this._wrapVertex(e.coords,0,2,t);if("esriGeometryMultipoint"!==this.geometryType);else{if(1===t){const t=e.coords.slice();t[0]-=512;const r=e.coords.slice();r[0]+=512,e.coords.push(...t,...r);const s=e.lengths[0];return void e.lengths.push(s,s)}this._wrapVertex(e.coords,0,2,t)}}_wrapVertex(e,t,r,s){const i=t*r,n=e[i];n<-b.CQ*(s-2)?e[i]=n+b.CQ*s:n>b.CQ*(s-1)&&(e[i]=n-b.CQ*s)}_readX(){const e=this._readGeometry();return null!=e?e.coords[0]:0}_readY(){const e=this._readGeometry();return null!=e?e.coords[1]:0}_readServerCentroid(){switch(this.geometryType){case"esriGeometryPolygon":{const e=(0,P.l8)(this._current.projectedGeometry),t=new G.A([],e);return(0,k.Nl)(new G.A,t,this.hasZ,this.hasM,this.geometryType,this._tile.transform)}case"esriGeometryPolyline":{const e=this._current.projectedGeometry,t=(0,P.S8)(e.paths,this.hasZ),r=new G.A([],t);return(0,k.Nl)(new G.A,r,this.hasZ,this.hasM,this.geometryType,this._tile.transform)}}return null}_readAttribute(e,t){const r=this._current.attributes[e];if(void 0!==r)return r;const s=e.toLowerCase();for(const i in this._current.attributes)if(i.toLowerCase()===s)return this._current.attributes[i]}_readAttributes(){return this._current.attributes}}var D=r(16804),L=r(37844),z=r(30312),E=r(70576),F=r(75119),U=r(42080),j=r(41896),V=r(53053);function N(e){return"curveRings"in e&&!!e.curveRings?.length||"curvePaths"in e&&!!e.curvePaths?.length}function B(e){return"b"in e}function q(e){return"c"in e}function Z(e){return"a"in e}function $(e){return B(e)?e.b[0]:q(e)?e.c[0]:Z(e)?e.a[0]:e}var H=r(64682),Q=r(67965),W=r(13473),Y=r(32006);const J={maxSegmentLength:1/0,maxSegmentsPerCurve:12e3,minSegmentsPerCurve:1},X=1e-6,K=(0,W.vt)();function ee(e,t){return(0,Y.hG)(e,t)}function te(e,t){const r=Math.atan2(e,t);return r<0?r+2*Math.PI:r}function re(e,t,r,s,i){let{maxSegmentLength:n,maxSegmentsPerCurve:o,minSegmentsPerCurve:a}=s;const c=n*n,h=1/o,u=i(0),l=i(1);ee(t,u)>X&&e.push(u);const d=[1],p=[l],m=1/a;for(let g=a-1;g>0;g--){const e=g*m;d.push(e),p.push(i(e))}let f=0,y=u;for(;d.length>0;){const t=d.pop(),r=p.pop();if(ee(y,r)<c||f===t||t-f<h)e.push(r),f=t,y=r;else{d.push(t),p.push(r);const e=(f+t)/2;d.push(e),p.push(i(e))}}return ee(r,l)>X&&e.push([...r]),e}function se(e,t,r,s){const[i,n]=t,[o,a]=r,[c,h]=s,u=i*i+n*n,l=o*o+a*a,d=c*c+h*h;(0,Q.hZ)(K,i,o,c,n,a,h,1,1,1);const p=(0,Q.a4)(K);if(0===p)return null;(0,Q.hZ)(K,u,l,d,n,a,h,1,1,1);const m=(0,Q.a4)(K);(0,Q.hZ)(K,u,l,d,i,o,c,1,1,1);const f=m/p*.5,y=(0,Q.a4)(K)/p*-.5;return e[0]=f,e[1]=y,e}function ie(e,t,r,s,i,n,o,a,c){let{maxSegmentLength:h,maxSegmentsPerCurve:u,minSegmentsPerCurve:l}=c;const d=2*n,p=[s+n*Math.cos(o),i+n*Math.sin(o)],m=[s+n*Math.cos(a),i+n*Math.sin(a)];ee(t,p)>X&&e.push(p);const f=a-o,y=h<d?2*Math.asin(h/d):f,g=Math.min(u,Math.max(l,Math.ceil(Math.abs(f/y)))),_=1/g;for(let b=1;b<g;b++){const t=b*_,r=o*(1-t)+a*t;e.push([s+n*Math.cos(r),i+n*Math.sin(r)])}return e.push(m),ee(r,m)>X&&e.push([...r]),e}function ne(e,t,r){const[s,i,n,o]=r.a,a=Math.abs(e-t),c=a>Math.PI,h=a<Math.PI,u=(0,H.Sp)(a,Math.PI);return(!u&&(c&&n||h&&!n)||u&&(e>t&&o||e<t&&!o))&&(e+=2*(Math.sign(t-e)||1)*Math.PI),e}function oe(e,t,r,s){return B(r)?function(e,t,r,s){const[i,n,o]=r.b;return re(e,t,i,s,(e=>function(e,t,r,s,i){const n=1-i,o=n*n,a=i*i,c=o*n,h=3*i*o,u=3*a*n,l=a*i;return[e[0]*c+t[0]*h+r[0]*u+s[0]*l,e[1]*c+t[1]*h+r[1]*u+s[1]*l]}(t,n,o,i,e)))}(e,t,r,s):q(r)?function(e,t,r,s){const[i,n]=r.c,o=se([],t,n,i);if(null==o)return e.push([...i]),e;const[a,c]=t,[h,u]=n,[l,d]=i,[p,m]=o,f=a-p,y=c-m,g=Math.sqrt(f*f+y*y),_=te(c-m,a-p),b=te(u-m,h-p);let v=te(d-m,l-p);return(b-_)*(v-b)<0&&(v+=2*Math.sign(_-v)*Math.PI),ie(e,t,i,p,m,g,_,v,s)}(e,t,r,s):Z(r)?function(e){return 4===e.a.length}(r)?function(e,t,r,s){const[i,n]=r.a,[o,a]=t,[c,h]=i,[u,l]=n,d=o-u,p=a-l,m=Math.sqrt(d*d+p*p),f=te(a-l,o-u);return ie(e,t,i,u,l,m,f,ne(te(h-l,c-u),f,r),s)}(e,t,r,s):function(e,t,r,s){const[i,n,o,a,c,h,u]=r.a,[l,d]=t,[p,m]=i,[f,y]=n,g=h*u,_=Math.cos(c),b=Math.sin(c),v=te(1/g*(d-y)*_-1/g*(l-f)*b,1/h*(d-y)*b+1/h*(l-f)*_),M=ne(te(1/g*(m-y)*_-1/g*(p-f)*b,1/h*(m-y)*b+1/h*(p-f)*_),v,r);return re(e,t,i,s,(e=>{const t=v*(1-e)+M*e,r=Math.cos(t),s=Math.sin(t);return[h*r*_-g*s*b+f,h*r*b+g*s*_+y]}))}(e,t,r,s):function(e){return Array.isArray(e)}(r)?(e.push([...r]),e):e}function ae(e,t){if(!N(e))return e;const r=function(e){return"curveRings"in e?e.curveRings:e.curvePaths}(e),s=[];for(const i of r){const e=[];for(let r=0,s=1;s<i.length;r=s++){const n=$(i[r]);0===r&&e.push(n),oe(e,n,i[s],{maxSegmentLength:t.maxSegmentLength??J.maxSegmentLength,maxSegmentsPerCurve:t.maxSegmentsPerCurve??J.maxSegmentsPerCurve,minSegmentsPerCurve:Math.max(t.minSegmentsPerCurve??J.minSegmentsPerCurve,1)})}s.push(e)}return"curvePaths"in e?{paths:s,spatialReference:e.spatialReference}:{rings:s,spatialReference:e.spatialReference}}var ce=r(83795),he=r(21899),ue=r(1413),le=r(75253),de=r(80928);class pe{static fromGraphic(e,t,r,s){return new pe(e.geometry,t,e.attributes,e.visible,e.uid,e.version,r,s)}constructor(e,t,r,s,i,n,o,a){this.geometry=e,this.symbol=t,this.attributes=r,this.visible=s,this.objectId=i,this._version=n,this.zOrder=o,this.displayId=a,this.symbolBounds=(0,p.Ie)(),this.prevSymbolBounds=(0,p.Ie)(),this.size=[0,0,0,0],this.geometryBounds=(0,p.Ie)(),this._isDensificationDirty=!1,this._densificationSegmentLength=1/0}get projectedGeometry(){return this._projectedGeometry}get linearCIM(){return this.symbolResource?.symbolInfo.linearCIM}get usedMemory(){return 128+(0,U.lM)(this.attributes)+(0,he.gR)(this.geometry)}get hasAnimations(){const{linearCIM:e}=this;return!!e&&e.some((e=>"animationParams"in e&&!!e.animationParams))}get hasCurvedGeoemtry(){return null!=this.geometry&&"mesh"!==this.geometry.type&&N(this.geometry)}update(e,t,r){return(this._version!==e.version||this.zOrder!==r||this.symbol!==t)&&(this.prevSymbolBounds=this.symbolBounds,this.symbolBounds=(0,p.Ie)(),this.zOrder=r,this.geometry=e.geometry,this.attributes=e.attributes,this.symbol=t,this.visible=e.visible,this._version=e.version,this.symbolResource=null,this._projectedGeometry=null,(0,p.Ie)(this.geometryBounds),this._minDensificationSegmentLength=null,!0)}updateDensificationResolution(e){if(!this.hasCurvedGeoemtry)return!1;const t=Math.max(function(e){return 2**Math.round(Math.log2(e))*(0,le.ab)()}(e),this._minDensificationSegmentLength??0);return t!==this._densificationSegmentLength&&(this._densificationSegmentLength=t,this._isDensificationDirty=!0,!0)}async projectAndNormalize(e){let t,r=this.geometry;if(r&&r.spatialReference&&"mesh"!==r.type&&("extent"===r.type&&(r=(0,de.DF)(r)),t=N(r)?ae(r,{maxSegmentLength:1/0,minSegmentsPerCurve:(0,le.mK)()}):r.toJSON(),this._projectedGeometry=await me(t,r.spatialReference,e),(0,j.Rg)(this.geometryBounds,this._projectedGeometry),this.hasCurvedGeoemtry&&null!=this._projectedGeometry)){const e=(0,p.VL)(this.geometryBounds),t=(0,p.uJ)(this.geometryBounds);(e||t)&&(this._minDensificationSegmentLength=Math.max(e,t)/(0,le.B1)())}}async densifyCurvedGeometryForDisplay(e){if(!this.hasCurvedGeoemtry||!this._isDensificationDirty)return;this._isDensificationDirty=!1;const t=this.geometry;if(!t||!t.spatialReference||"mesh"===t.type)return;const r=e.metersPerUnit/t.spatialReference.metersPerUnit,s=ae(t,{maxSegmentLength:this._densificationSegmentLength*r,minSegmentsPerCurve:(0,le.bR)()});this._projectedGeometry=await me(s,t.spatialReference,e)}}async function me(e,t,r){await(0,ue.Nk)(e.spatialReference,r);const s=(0,ce.b3)(e);if(!s)return;const i=(0,ue.Cv)(s,t,r);return i&&(0,V.uC)(i),(0,m.isExtent)(i)?(0,de.DF)(i):i}class fe{constructor(e,t,r){this.added=e,this.updated=t,this.removed=r}hasAnyUpdate(){return!!(this.added.length||this.updated.length||this.removed.length)}}const ye=1e-5;function ge(e,t){return t.zOrder-e.zOrder}class _e{constructor(e,t,r,s,i){this._items=new Map,this._boundsDirty=!1,this._outSpatialReference=e,this._cimResourceManager=t,this._hittestDrawHelper=new F.CK(t),this._tileInfoView=r,this._store=i;const n=r.getClosestInfoForScale(s);this._resolution=this._tileInfoView.getTileResolution(n.level)}destroy(){this._hittestDrawHelper.destroy()}items(){return this._items.values()}getItem(e){return this._items.get(e)}async update(e,t,r){const s=[],i=[],n=[],o=new Set,a=[];let c=0;for(const h of e.items){c++;const e=h.uid,n=this._items.get(e),u=t(h);if(o.add(e),n){const e=n.update(h,u,c),t=n.updateDensificationResolution(this._resolution);e&&a.push(this._updateItem(n,r)),(e||t)&&i.push(n);continue}const l=this._store.createDisplayIdForObjectId(e),d=pe.fromGraphic(h,u,c,l);d.updateDensificationResolution(this._resolution),a.push(this._updateItem(d,r)),this._items.set(d.objectId,d),s.push(d)}for(const[h,u]of this._items.entries())o.has(h)||(this._store.releaseDisplayIdForObjectId(h),this._items.delete(h),n.push(u));return await Promise.all(a),this._index=null,new fe(s,i,n)}updateLevel(e){if(this._resolution===e)return!1;this._index=null,this._boundsDirty=!0,this._resolution=e;for(const t of this.items())if(t.hasCurvedGeoemtry)return!0;return!1}hitTest(e,t,r,s,i){const n=(0,o.A)("esri-mobile"),a=n?b.fy:b.V3,c=a+(n?0:b._M);e=(0,z.normalizeMapX)(e,this._tileInfoView.spatialReference);const h=s*window.devicePixelRatio*c,u=(0,p.vt)();u[0]=e-h,u[1]=t-h,u[2]=e+h,u[3]=t+h;const l=s*window.devicePixelRatio*a,d=(0,p.vt)();d[0]=e-l,d[1]=t-l,d[2]=e+l,d[3]=t+l;const m=.5*s*(c+de.RA),f=this._searchIndex(e-m,t-m,e+m,t+m);if(!f||0===f.length)return[];const y=[],g=(0,p.vt)(),_=(0,p.vt)();for(const o of f){if(!o.visible)continue;const{geometryBounds:e,symbolResource:t}=o;this._getSymbolBounds(g,t,e,_,i),_[3]=_[2]=_[1]=_[0]=0,(0,p.HY)(g,u)&&y.push(o)}if(0===y.length)return[];const v=this._hittestDrawHelper,M=[];for(const o of y){const{projectedGeometry:e,symbolResource:t}=o;if(!t)continue;const{textInfo:r,symbolInfo:n}=t,a=n.cimSymbol;v.hitTest(d,a.symbol,e,r,i,s)&&M.push(o)}return M.sort(ge),M.map((e=>e.objectId))}queryItems(e){return 0===this._items.size?[]:this._searchForItems(e)}clear(){this._items.clear(),this._index=null}async _updateItem(e,t){await e.projectAndNormalize(this._outSpatialReference),await t(e);const{size:r}=e;r[0]=r[1]=r[2]=r[3]=0,this._getSymbolBounds(e.symbolBounds,e.symbolResource,e.geometryBounds,e.size,0)}_searchIndex(e,t,r,s){return this._boundsDirty&&(this._items.forEach((e=>this._getSymbolBounds(e.symbolBounds,e.symbolResource,e.geometryBounds,e.size,0))),this._boundsDirty=!1),this._index||(this._index=(0,L.r)(9,(e=>({minX:e.symbolBounds[0],minY:e.symbolBounds[1],maxX:e.symbolBounds[2],maxY:e.symbolBounds[3]}))),this._index.load(Array.from(this._items.values()))),this._index.search({minX:e,minY:t,maxX:r,maxY:s})}_searchForItems(e){const t=this._tileInfoView.spatialReference,r=e.bounds,s=(0,E.Vp)(t);if(s&&t.isWrappable){const[t,i]=s.valid,n=Math.abs(r[2]-i)<ye,o=Math.abs(r[0]-t)<ye;if((!n||!o)&&(n||o)){const s=e.resolution;let o;o=(0,p.vt)(n?[t,r[1],t+s*de.RA,r[3]]:[i-s*de.RA,r[1],i,r[3]]);const a=this._searchIndex(r[0],r[1],r[2],r[3]),c=this._searchIndex(o[0],o[1],o[2],o[3]);return[...new Set([...a,...c])]}}return this._searchIndex(r[0],r[1],r[2],r[3])}_getSymbolBounds(e,t,r,s,i){if(!t||!t.symbolInfo.linearCIM)return null;if(e||(e=(0,p.vt)()),(0,p.C)(e,r),!s||0===s[0]&&0===s[1]&&0===s[2]&&0===s[3]){const{textInfo:e,symbolInfo:r}=t,n=r.cimSymbol;s||(s=[0,0,0,0]);const o=y.Sc.getSymbolInflateSize(s,n.symbol,this._cimResourceManager,i,e);s[0]=(0,D.Lz)(o[0]),s[1]=(0,D.Lz)(o[1]),s[2]=(0,D.Lz)(o[2]),s[3]=(0,D.Lz)(o[3])}const n=this._resolution,o=y.Sc.safeSize(s);return e[0]-=o*n,e[1]-=o*n,e[2]+=o*n,e[3]+=o*n,e}}var be=r(99323),ve=r(79666);class Me{static getOrCreate(e,t,r){let s=t.get(e.id);return s||(s=new Me(e,r),t.set(e.id,s)),s}static fromItems(e,t,r){const s=new Me(e,r);for(const i of t)s.append(i);return s}constructor(e,t){this.tile=e,this.metadata=t,this.addedOrModified=[],this.removed=[],this.objectIdMap=null}get reader(){return this._reader||(this._reader=O.from(this.addedOrModified,this.tile,this.metadata)),this._reader}append(e){this.addedOrModified.push(e),e.hasAnimations&&(this.objectIdMap=this.objectIdMap||{},this.objectIdMap[e.displayId]=e.objectId)}}let Ie=class extends(a.A.IdentifiableMixin(i.default)){constructor(e){super(e),this._attached=!1,this._tiles=new Map,this._controller=new AbortController,this._hashToSymbolInfo=new Map,this._lastCleanup=performance.now(),this._cleanupRequired=!0,this.lastUpdateId=-1,this.renderer=null,this._updateTracking=new ve.F({debugName:"GraphicsView2D"}),this.updateRequested=!1,this.defaultPointSymbolEnabled=!0,this._commandQueue=new be.j({process:e=>{if("update"===e.type)return this._update();throw new Error("InternalError: Unsupported command")}}),this.graphicUpdateHandler=this.graphicUpdateHandler.bind(this)}destroy(){this.container.destroy(),this.view=null,this.renderer=null,this._set("graphics",null),this._controller.abort(),this._graphicStore.clear(),this._graphicStore.destroy(),this._attributeStore=null,this._hashToSymbolInfo.clear(),this._updateTracking.destroy(),this._commandQueue.destroy()}_initAttributeStore(){this._storage=new R.l({spatialReference:this.view.spatialReference,fields:new f.default}),this._attributeStore=new C.K({isLocal:!0,update:e=>{(0,o.A)("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView2D.AttributeStoreView.updateStart`,{message:e}),this.container.attributeView.requestUpdate(e),this.container.requestRender(),(0,o.A)("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView2D.AttributeStoreView.updateEnd`,{message:e})}});const e=(0,x.T9)(null,[]);this._attributeStore.update(e,this._storage,null),this.container.checkHighlight=()=>this._attributeStore.hasHighlight}initialize(){this._initAttributeStore(),this._metadata=T.h.createGraphics(this.view.spatialReference),this._resourceProxy=new I.J({fetch:e=>Promise.all(e.map((e=>this.view.stage.textureManager.rasterizeItem(e)))),fetchDictionary:e=>{throw new Error("InternalError: Graphics do not support Dictionary requests")}}),this.addHandles([(0,u.watch)((()=>this._effectiveRenderer),(()=>this._pushUpdate())),this.view.graphicsTileStore.on("update",this._onTileUpdate.bind(this)),this.container.on("attach",(()=>{this.addHandles([this.graphics.on("change",(()=>this._pushUpdate()))]),this._graphicStore?.destroy(),this._graphicStore=new _e(this.view.spatialReference,this._cimResourceManager,this.view.featuresTilingScheme,this.view.state.scale,this._attributeStore),this._attached=!0,this.requestUpdate(),this._pushUpdate()}))]),this._updateTracking.addUpdateTracking("CommandQueue",this._commandQueue.updateTracking);const e=this.view.graphicsTileStore.tiles;this._onTileUpdate({added:e,removed:[]})}get _effectiveRenderer(){return"function"==typeof this.renderer?this.renderer():this.renderer}get _cimResourceManager(){return this.view.stage.textureManager.resourceManager}get updating(){const e=!this._attached||this._updateTracking.updating;return(0,o.A)("esri-2d-log-updating")&&console.log(`Updating GraphicsView2D: ${e}\n  -> attaching ${!this._attached}\n  -> updateTracking ${this._updateTracking.updating}`),e}hitTest(e){if(!this.view||this.view.suspended)return[];const{resolution:t,rotation:r}=this.view.state,s=this._graphicStore.hitTest(e.x,e.y,2,t,r),i=new Set(s),o=this.graphics.items.reduce(((e,t)=>(i.has(t.uid)&&e.set(t.uid,t),e)),new Map);return s.map((e=>o.get(e))).filter(n.Ru)}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.requestUpdateCallback()),this.notifyChange("updating")}processUpdate(e){this.updateRequested&&(this.updateRequested=!1,this.update(e))}viewChange(){this.requestUpdate()}setHighlight(e){const t=[];for(const{objectId:r,highlightFlags:s}of e){const e=this._graphicStore.getItem(r)?.displayId;t.push({objectId:r,highlightFlags:s,displayId:e})}this._attributeStore.setHighlight(t,e),this._pushUpdate()}graphicUpdateHandler(e){this._pushUpdate()}update(e){this.updateRequested=!1,this._attached&&this._graphicStore.updateLevel(e.state.resolution)&&this.pushUpdate()}pushUpdate(){this._pushUpdate()}_pushUpdate(){(0,h.ignoreAbortErrors)(this._commandQueue.push({type:"update"}))}async _update(){try{(0,o.A)("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView._update start`);const e=await this._graphicStore.update(this.graphics,(e=>this._getSymbolForGraphic(e)),(e=>this._ensureSymbolResource(e)));for(const r of e.updated)this.container.restartAnimation(r.objectId);if(!e.hasAnyUpdate())return void this._attributeStore.sendUpdates();e.removed.length&&(this._cleanupRequired=!0),(0,o.A)("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView updateMessage`,e);const t=this._createTileMessages(e);await this._densifyItemsForDisplay(t),await this._fetchResources(t),this._write(t);for(const r of e.added)this._setFilterState(r);for(const r of e.updated)this._setFilterState(r);(0,o.A)("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView sendUpdate`,e),this._attributeStore.sendUpdates(),(0,o.A)("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView sendUpdate.await`,e)}catch(e){}this._cleanupSharedResources()}_createTileMessages(e){const t=new Map;for(const r of e.added){const e=this.view.graphicsTileStore.getIntersectingTiles(r.symbolBounds);for(const s of e)Me.getOrCreate(s,t,this._metadata).append(r)}for(const r of e.updated){const e=this.view.graphicsTileStore.getIntersectingTiles(r.prevSymbolBounds),s=this.view.graphicsTileStore.getIntersectingTiles(r.symbolBounds);for(const i of e)Me.getOrCreate(i,t,this._metadata).removed.push(r.displayId);for(const i of s)Me.getOrCreate(i,t,this._metadata).append(r)}for(const r of e.removed){const e=this.view.graphicsTileStore.getIntersectingTiles(r.symbolBounds);for(const s of e)Me.getOrCreate(s,t,this._metadata).removed.push(r.displayId)}return Array.from(t.values())}async _densifyItemsForDisplay(e){const t=new Map;for(const r of e)for(const e of r.addedOrModified)t.has(e)||t.set(e,e.densifyCurvedGeometryForDisplay(this.view.spatialReference));await Promise.all(t.values())}async _fetchResources(e){const t={timeZone:null,timeExtent:null};for(const{tile:r,reader:s}of e){(0,o.A)("esri-2d-update-debug")&&console.debug(`Id[${this.layerId}] Tile[${r.id}] GraphicsView fetchResources`,e);const i=s.getCursor();for(;i.next();)for(const e of i.getMeshWriters())e.enqueueRequest(this._resourceProxy,i,r.createArcadeEvaluationOptions(t))}await this._resourceProxy.fetchEnqueuedResources()}_write(e){for(const t of e){(0,o.A)("esri-2d-update-debug")&&console.debug(`Id[${this.layerId}] Tile[${t.tile.id}] GraphicsView write`,t);const e=this._writeMeshes(t);let r=this._tiles.get(t.tile.key);r||(r=this._createFeatureTile(t.tile.key)),(0,o.A)("esri-2d-update-debug")&&console.debug(`Id[${this.layerId}] Tile[${t.tile.id}] GraphicsView onTileData`,t),this.container.onTileData(r,{type:"update",modify:e,remove:t.removed,end:!1,attributeEpoch:this._attributeStore.epoch,objectIdMap:t.objectIdMap}),this.container.requestRender()}}_writeMeshes(e){const t={timeZone:null,timeExtent:null},r=new M.U(e.tile.id),s=e.reader.getCursor();for(;s.next();){r.entityStart(s.getDisplayId(),s.getZOrder());for(const i of s.getMeshWriters())i.write(r,this._resourceProxy,s,e.tile.createArcadeEvaluationOptions(t),e.tile.level);r.entityEnd()}return{...r.serialize().message,tileId:e.tile.id}}_setFilterState(e){const t=e.displayId,r=this._attributeStore.getHighlightFlags(e.objectId);this._attributeStore.setData(t,0,0,r|(e.visible?b.LY:0))}_getSymbolForGraphic(e){return null!=e.symbol?e.symbol:null!=this._effectiveRenderer?this._effectiveRenderer.getSymbol(e):this._getNullSymbol(e)}async _ensureSymbolResource(e){if(!e.symbol)return;const t=await this._getSymbolInfo(e.symbol);if(!t)return;const r=t.linearCIM.filter((e=>"text"===e.type));if(r.length>0){const s=await this._getTextResources(e,r);e.symbolResource={symbolInfo:t,textInfo:s}}else e.symbolResource={symbolInfo:t}}_getSymbolInfo(e){const t=e.hash();return this._hashToSymbolInfo.has(t)||this._hashToSymbolInfo.set(t,this._createSymbolInfo(t,e).catch((e=>null))),this._hashToSymbolInfo.get(t)}async _createSymbolInfo(e,t){const r=await this._convertToCIMSymbol(t),s=await this._createLinearCIM(r);return{hash:e,cimSymbol:r,linearCIM:s,meshWriters:await this._createMeshWriters(r,s)}}async _convertToCIMSymbol(e){const t=(0,y.Vb)(e);return"web-style"===t.type?(await t.fetchCIMSymbol()).data:t}async _createLinearCIM(e){return await Promise.all(y.wp.fetchResources(e.symbol,this._cimResourceManager,[])),this.view.stage.cimAnalyzer.analyzeSymbolReference(e,!1)}async _createMeshWriters(e,t){(0,h.throwIfAborted)(this._controller.signal);const r=this.container.instanceStore,s=this.view.stage.meshWriterRegistry,i=await async function(e,t,r){const s=[],i={scaleInfo:(0,S.TY)(e),scaleExpression:null};for(const n of t)switch(n.type){case"marker":if(n.animationParams){s.push(...(0,S.gF)(r.instances.animatedMarker,n,w.Dk,i));break}s.push(...(0,S.Zi)(r.instances.marker,n,w.Dk,i));break;case"fill":null==n.spriteRasterizationParam?s.push(...(0,S.Gn)(r.instances.fill,n,i)):s.push(...(0,S.oF)(r.instances.complexFill,n,!1,i));break;case"line":n.spriteRasterizationParam?s.push(...(0,S.EM)(r.instances.texturedLine,n,!1,i)):s.push(...(0,S.NZ)(r.instances.line,n,!1,i));break;case"text":s.push(...(0,S.IQ)(r.instances.text,n,w.Dk,i));break;case"gradientFill":s.push(...(0,S.mp)(r.instances.gradientFill,n,i));break;case"gradientStroke":s.push(...(0,S.Dr)(r.instances.gradientStroke,n,i))}return s}(e,t,r);return Promise.all(i.map((e=>s.createMeshWriter(this._storage,this._resourceProxy,{tileInfo:this.view.featuresTilingScheme.tileInfo},e))))}_onTileUpdate(e){if(e.added&&e.added.length>0)for(const t of e.added)this._updateTracking.addPromise(this._addTile(t));if(e.removed&&e.removed.length>0)for(const t of e.removed)this._removeTile(t.key)}_createFeatureTile(e){const t=this.view.featuresTilingScheme.getTileBounds((0,p.vt)(),e),r=this.view.featuresTilingScheme.getTileResolution(e.level),s=new v.R(e,r,t[0],t[3]);return this._tiles.set(e,s),this.container.addChild(s),s}async _addTile(e){if(!this._attached)return;const t=this._graphicStore.queryItems(e);if(!t.length)return;const r=this._createFeatureTile(e.key),s=Me.fromItems(e,t,this._metadata);await this._densifyItemsForDisplay([s]),await this._fetchResources([s]);const i=this._writeMeshes(s);r.onMessage({type:"append",append:i,clear:!1,end:!0,attributeEpoch:this._attributeStore.epoch,objectIdMap:s.objectIdMap})}_removeTile(e){if(!this._tiles.has(e))return;const t=this._tiles.get(e);this.container.removeChild(t),t.destroy(),this._tiles.delete(e)}_getNullSymbol(e){const t=e.geometry;return(0,m.isPolyline)(t)?_.x3:(0,m.isPolygon)(t)||(0,m.isExtent)(t)?_.JJ:this.defaultPointSymbolEnabled?_.jM:null}async _getTextResources(e,t){const r=new Array,s=new Array;for(let a=0;a<t.length;a++){const i=t[a],{resource:n,overrides:o}=i.textRasterizationParam;if(o?.length>0){const t=g.OverrideHelper.resolveSymbolOverrides({type:"CIMSymbolReference",primitiveOverrides:o,symbol:{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,size:n.symbol.height,anchorPointUnits:"Relative",frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{x:0,y:0},symbol:n.symbol,textString:n.textString}],scaleSymbolsProportionally:!0,respectFrame:!0}]}},e,this.view.spatialReference,null,(0,m.getJsonType)(e.projectedGeometry),null,null);t.then((e=>{const t=e.symbolLayers[0],{textString:r}=t.markerGraphics[0];s.push({type:"cim-rasterization-info",resource:{type:"text",textString:r||"",font:n.font}}),i.text=n.textString=r||""})),r.push(t)}else s.push({type:"cim-rasterization-info",resource:n})}r.length>0&&await Promise.all(r);const i=s.map((e=>this.view.stage.textureManager.rasterizeItem(e))),n=await Promise.all(i);(0,c.Lw)(n);const o=new Map;for(let a=0;a<t.length;a++){const e=t[a];o.set(e.textRasterizationParam.resource.symbol,{text:e.text,glyphMosaicItems:n[a]})}return o}_cleanupSharedResources(){if(!this._cleanupRequired)return;const e=performance.now();if(e-this._lastCleanup<5e3)return;this._cleanupRequired=!1,this._lastCleanup=e;const t=new Set;for(const s of this._graphicStore.items()){const e=s.symbolResource?.symbolInfo.hash;t.add(e)}const r=new Set(this._hashToSymbolInfo.keys());for(const s of r.values())t.has(s)||this._hashToSymbolInfo.delete(s)}};(0,s._)([(0,l.MZ)()],Ie.prototype,"_effectiveRenderer",null),(0,s._)([(0,l.MZ)({constructOnly:!0})],Ie.prototype,"layerId",void 0),(0,s._)([(0,l.MZ)({constructOnly:!0})],Ie.prototype,"requestUpdateCallback",void 0),(0,s._)([(0,l.MZ)()],Ie.prototype,"container",void 0),(0,s._)([(0,l.MZ)({constructOnly:!0})],Ie.prototype,"graphics",void 0),(0,s._)([(0,l.MZ)()],Ie.prototype,"renderer",void 0),(0,s._)([(0,l.MZ)()],Ie.prototype,"_updateTracking",void 0),(0,s._)([(0,l.MZ)()],Ie.prototype,"updating",null),(0,s._)([(0,l.MZ)()],Ie.prototype,"view",void 0),(0,s._)([(0,l.MZ)()],Ie.prototype,"updateRequested",void 0),(0,s._)([(0,l.MZ)()],Ie.prototype,"defaultPointSymbolEnabled",void 0),Ie=(0,s._)([(0,d.$)("esri.views.2d.layers.graphics.GraphicsView2D")],Ie);const we=Ie}}]);