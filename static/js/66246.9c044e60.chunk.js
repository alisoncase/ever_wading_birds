"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[66246],{2925:(e,t,o)=>{o.d(t,{$:()=>b,IB:()=>s,Iy:()=>$,KV:()=>W,N2:()=>M,QP:()=>H,RH:()=>E,Vl:()=>z,Ws:()=>R,ZD:()=>T,_L:()=>F,bJ:()=>I,e$:()=>O,f6:()=>k,hw:()=>L,pW:()=>P,pf:()=>U,rs:()=>S,sn:()=>V,we:()=>N});var n=o(88102),r=o(62631),a=o(82301),i=o(64682),l=o(60548),c=o(24646);function s(e){return"r"in e&&"g"in e&&"b"in e}function u(e){return"h"in e&&"s"in e&&"v"in e}function d(e){return"l"in e&&"a"in e&&"b"in e}function f(e){return"l"in e&&"c"in e&&"h"in e}const m=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],h=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function v(e,t){const o=[];let n,r;if(e[0].length!==t.length)throw new Error("dimensions do not match");const a=e.length,i=e[0].length;let l=0;for(n=0;n<a;n++){for(l=0,r=0;r<i;r++)l+=e[n][r]*t[r];o.push(l)}return o}function p(e){const t=[e.r/255,e.g/255,e.b/255].map((e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4)),o=v(m,t);return{x:100*o[0],y:100*o[1],z:100*o[2]}}function g(e){const t=v(h,[e.x/100,e.y/100,e.z/100]).map((e=>{const t=e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055;return Math.min(1,Math.max(t,0))}));return{r:Math.round(255*t[0]),g:Math.round(255*t[1]),b:Math.round(255*t[2])}}function x(e){const t=[e.x/95.047,e.y/100,e.z/108.883].map((e=>e>(6/29)**3?e**(1/3):1/3*(29/6)**2*e+4/29));return{l:116*t[1]-16,a:500*(t[0]-t[1]),b:200*(t[1]-t[2])}}function y(e){const t=e.l,o=[(t+16)/116+e.a/500,(t+16)/116,(t+16)/116-e.b/200].map((e=>e>6/29?e**3:3*(6/29)**2*(e-4/29)));return{x:95.047*o[0],y:100*o[1],z:108.883*o[2]}}function C(e){return function(e){const t=e.l,o=e.a,n=e.b,r=Math.sqrt(o*o+n*n);let a=Math.atan2(n,o);return a=a>0?a:a+2*Math.PI,{l:t,c:r,h:a}}(x(p(e)))}function w(e){return g(y(function(e){const t=e.l,o=e.c,n=e.h;return{l:t,a:o*Math.cos(n),b:o*Math.sin(n)}}(e)))}function b(e){return s(e)?e:f(e)?w(e):d(e)?function(e){return g(y(e))}(e):function(e){return"x"in e&&"y"in e&&"z"in e}(e)?g(e):u(e)?function(e){const t=(e.h+360)%360/60,o=e.s/100,n=e.v/100*255,r=n*o,a=r*(1-Math.abs(t%2-1));let i;switch(Math.floor(t)){case 0:i={r:r,g:a,b:0};break;case 1:i={r:a,g:r,b:0};break;case 2:i={r:0,g:r,b:a};break;case 3:i={r:0,g:a,b:r};break;case 4:i={r:a,g:0,b:r};break;case 5:case 6:i={r:r,g:0,b:a};break;default:i={r:0,g:0,b:0}}return i.r=Math.round(i.r+n-r),i.g=Math.round(i.g+n-r),i.b=Math.round(i.b+n-r),i}(e):e}function M(e){return u(e)?e:function(e){const t=e.r,o=e.g,n=e.b,r=Math.max(t,o,n),a=r-Math.min(t,o,n);let i=r,l=0===a?0:r===t?(o-n)/a%6:r===o?(n-t)/a+2:(t-o)/a+4,c=0===a?0:a/i;return l<0&&(l+=6),l*=60,c*=100,i*=100/255,{h:l,s:c,v:i}}(b(e))}function T(e){return d(e)?e:function(e){return x(p(e))}(b(e))}function E(e){return f(e)?e:C(b(e))}function S(e){return A(e).isBright?"light":"dark"}function A(e){let{r:t,g:o,b:r,a:a}=e;return a<1&&(t=Math.round(a*t+255*(1-a)),o=Math.round(a*o+255*(1-a)),r=Math.round(a*r+255*(1-a))),new n.default({r:t,g:o,b:r})}function R(e,t){const{r:o,g:n,b:r}=t?.ignoreAlpha?e:A(e);return.2126*o+.7152*n+.0722*r}var P,_;function I(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P.High;return R(e,{ignoreAlpha:!0})>t?new n.default([0,0,0,e.a]):new n.default([255,255,255,e.a])}function O(e,t){const o=T(e);o.l*=1-t;const n=b(o),r=e.clone();return r.setColor(n),r.a=e.a,r}function F(e,t){const o=e.clone();return o.a*=t,o}function z(e,t){const o=M(e);o.s*=t;const n=b(o),r=e.clone();return r.setColor(n),r.a=e.a,r}function H(e){return n.default.toUnitRGBA(e)}function L(e,t){return e===t||null!=e&&e.equals(t)}function N(e,t){return e===t||null!=e&&null!=t&&(0,l.e)(e,t)}function U(e){return(0,c.fA)(e[0],e[1],e[2],e.length>3?e[3]:1)}function W(e){return e[0]??=0,e[1]??=0,e[2]??=0,e}function V(e){return e.length=4,W(e),e[3]??=1,(0,i.qE)(e[3],0,1),e}function k(e,t){const o=n.default.toUnitRGBA(e);return o[3]*=t,o}function $(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(0===e.length||t<=0)return[];if(1===(e=e.map((e=>"string"==typeof e?new n.default(e):e))).length||1===t){const o=[],n=e[0];for(let e=0;e<t;e++)o.push(n.clone());return o}if(o.shuffle&&(e=(0,r.k4)((0,a.clone)(e),o.seed)),e.length>=t){const o=[],n=(e.length-1)/(t-1);for(let r=0;r<t;r++){const t=Math.round(r*n);o.push(e[t].clone())}return o}return function(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const n=[],a=e.length-1,i=Math.ceil((t-e.length)/a);e:for(let r=0;r<a;r++){const a=e[r],l=e[r+1];for(let r=1;r<=i;r++){const c=r/(i+1);if(n.push(q(a,l,c,o)),n.length+e.length===t)break e}}return[...e.map((e=>e.clone())),...(0,r.k4)(n,o.seed??1)]}(e,t,o)}(_=P||(P={}))[_.Low=160]="Low",_[_.High=225]="High";const j=(e,t)=>{const o=Math.floor(10*t())-5;return Math.min(255,Math.max(0,e+o))};function q(e,t,o){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const i=e.r,l=e.g,c=e.b,s=t.r,u=t.g,d=t.b,f=Math.round(i+(s-i)*o),m=Math.round(l+(u-l)*o),h=Math.round(c+(d-c)*o);if(!a.offset)return new n.default([f,m,h]);const v=(0,r.Mo)(a.seed);return new n.default([j(f,v),j(m,v),j(h,v)])}},6513:(e,t,o)=>{o.d(t,{E7:()=>x,gP:()=>n,s0:()=>r,zP:()=>y});var n,r,a,i=o(88242),l=o(16213),c=o(31500),s=o(42162),u=o(8815),d=o(57554),f=o(16878),m=o(91018),h=o(80203),v=o(38950),p=o(81775),g=o(22131);function x(e,t){const o=e.vertex;o.include(s.W),e.include(l.Y,t);const{silhouette:n,legacy:r,spherical:a}=t;o.uniforms.add(new p.o("componentDataTex",(e=>e.componentDataTexture))),e.attributes.add(g.r.COMPONENTINDEX,"float");o.constants.add("lineWidthFractionFactor","float",8),o.constants.add("extensionLengthOffset","float",128),o.code.add(f.H`
    vec2 _componentTextureCoords(float componentIndex, float fieldOffset) {
      float fieldIndex = ${f.H.float(3)}  * componentIndex + fieldOffset;
      float texSize = float(textureSize(componentDataTex, 0).x);
      float colIndex = mod(fieldIndex, texSize);
      float rowIndex = floor(fieldIndex / texSize);

      return vec2(colIndex, rowIndex) + 0.5;
    }

    struct ComponentData {
      vec4 color;
      vec3 normal;
      vec3 normal2;
      float lineWidth;
      float extensionLength;
      float type;
      float verticalOffset;
    };

    ComponentData readComponentData() {
      vec2 colorIndex = _componentTextureCoords(componentIndex, ${f.H.float(0)});
      vec2 otherIndex = _componentTextureCoords(componentIndex, ${f.H.float(1)});
      vec2 verticalOffsetIndex = _componentTextureCoords(float(componentIndex), ${f.H.float(2)} );
      vec3 normal = normalModel();
      vec3 normal2 = ${n?f.H`decompressNormal(normal2Compressed)`:f.H`normal`};

      vec4 colorValue = texelFetch(componentDataTex, ivec2(colorIndex), 0);
      vec4 otherValue = texelFetch(componentDataTex, ivec2(otherIndex), 0);
      float verticalOffset = uninterpolatedRGBAToFloat(texelFetch(componentDataTex, ivec2(verticalOffsetIndex), 0)) * ${f.H.float(i.Hi)};

      return ComponentData(
        vec4(colorValue.rgb, colorValue.a * otherValue.w), // otherValue.w stores separate opacity
        normal, normal2,
        otherValue.x * (255.0 / ${f.H.float(8)} ),
        otherValue.y * 255.0 - ${f.H.float(128)},
        -(otherValue.z * 255.0) + 0.5, // SOLID (=0/255) needs to be > 0.0, SKETCHY (=1/255) needs to be <= 0;
        verticalOffset
      );
    }
  `),r?o.code.add(f.H`vec3 _modelToWorldNormal(vec3 normal) {
return (model * vec4(normal, 0.0)).xyz;
}
vec3 _modelToViewNormal(vec3 normal) {
return (localView * model * vec4(normal, 0.0)).xyz;
}`):(o.uniforms.add(new m.h("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel))),o.code.add(f.H`vec3 _modelToWorldNormal(vec3 normal) {
return transformNormalGlobalFromModel * normal;
}`)),n?(e.attributes.add(g.r.NORMAL2COMPRESSED,"vec2"),o.code.add(f.H`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(normalize(data.normal + data.normal2));
}`)):o.code.add(f.H`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(data.normal);
}`),r?o.code.add(f.H`void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
worldPos = (model * vec4(modelPos, 1.0)).xyz;
viewPos = (localView * vec4(worldPos, 1.0)).xyz;
}`):(o.include(c.u,t),o.uniforms.add(new h.k("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new m.h("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new u.W("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL)),new u.W("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new d.t("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new d.t("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH))),o.code.add(f.H`
      void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
        vec3 rotatedModelPosition = transformWorldFromModelRS * modelPos;

        vec3 transformCameraRelativeFromModel = dpAdd(
          transformWorldFromModelTL,
          transformWorldFromModelTH,
          -transformWorldFromViewTL,
          -transformWorldFromViewTH
        );

        worldPos = transformCameraRelativeFromModel + rotatedModelPosition;

        if (verticalOffset != 0.0) {
          vec3 vUp = ${a?"normalize(transformWorldFromModelTL + rotatedModelPosition);":"vec3(0.0, 0.0, 1.0);"}
          worldPos += verticalOffset * vUp;
        }

        viewPos = transformViewFromCameraRelativeRS * worldPos;
      }
    `)),o.uniforms.add(new v.F("transformProjFromView",(e=>e.camera.projectionMatrix))).code.add(f.H`vec4 projFromViewPosition(vec3 position) {
return transformProjFromView * vec4(position, 1.0);
}`),o.code.add(f.H`float calculateExtensionLength(float extensionLength, float lineLength) {
return extensionLength / (log2(max(1.0, 256.0 / lineLength)) * 0.2 + 1.0);
}`)}function y(e){return e===n.Sketch||e===n.Mixed}(a=n||(n={}))[a.Solid=0]="Solid",a[a.Sketch=1]="Sketch",a[a.Mixed=2]="Mixed",a[a.COUNT=3]="COUNT",function(e){e[e.REGULAR=0]="REGULAR",e[e.SILHOUETTE=1]="SILHOUETTE"}(r||(r={}))},7757:(e,t,o)=>{var n;o.d(t,{x:()=>n}),function(e){e[e.TRANSPARENT=0]="TRANSPARENT",e[e.OPAQUE=1]="OPAQUE"}(n||(n={}))},9452:(e,t,o)=>{o.d(t,{Gc:()=>c,RI:()=>u,Z4:()=>s,dk:()=>f,vr:()=>d});var n=o(16804),r=o(32006),a=o(89227),i=o(91102),l=o(1696);function c(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,i.vt)();return s(e,(0,n.WA)(t),o),(0,a.n)(o.direction,o.direction),o}function s(e,t,o){return u(e,e.screenToRender(t,(0,n.sc)(l.rq.get())),o)}function u(e,t,o){const i=(0,n.sc)((0,r.C)(l.rq.get(),t));if(i[2]=0,!e.unprojectFromRenderScreen(i,o.origin))return null;const c=(0,n.sc)((0,r.C)(l.rq.get(),t));c[2]=1;const s=e.unprojectFromRenderScreen(c,l.rq.get());return null==s?null:((0,a.d)(o.direction,s,o.origin),o)}function d(e,t,o){return f(e,e.screenToRender(t,(0,n.sc)(l.rq.get())),o)}function f(e,t,o){(0,a.c)(o.origin,e.eye);const n=(0,a.i)(l.rq.get(),t[0],t[1],1),r=e.unprojectFromRenderScreen(n,l.rq.get());return null==r?null:((0,a.d)(o.direction,r,o.origin),o)}},13473:(e,t,o)=>{function n(){return[1,0,0,0,1,0,0,0,1]}function r(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]}function a(e,t,o,n,r,a,i,l,c){return[e,t,o,n,r,a,i,l,c]}o.d(t,{fA:()=>a,o8:()=>r,vt:()=>n,zK:()=>i});const i=[1,0,0,0,1,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:i,clone:r,create:n,createView:function(e,t){return new Float64Array(e,t,9)},fromValues:a},Symbol.toStringTag,{value:"Module"}))},16213:(e,t,o)=>{o.d(t,{W:()=>n,Y:()=>c});var n,r,a=o(7951),i=o(16878),l=o(22131);function c(e,t){switch(t.normalType){case n.Compressed:e.attributes.add(l.r.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(i.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case n.Attribute:e.attributes.add(l.r.NORMAL,"vec3"),e.vertex.code.add(i.H`vec3 normalModel() {
return normal;
}`);break;case n.ScreenDerivative:e.fragment.code.add(i.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,a.Xb)(t.normalType);case n.COUNT:}}(r=n||(n={}))[r.Attribute=0]="Attribute",r[r.Compressed=1]="Compressed",r[r.ScreenDerivative=2]="ScreenDerivative",r[r.COUNT=3]="COUNT"},18162:(e,t,o)=>{o.d(t,{F:()=>a});o(96913);var n=o(93321),r=o(31183);function a(e,t,o,n,a){return!(null==t||null==n||e.length<2)&&(i.x=e[0],i.y=e[1],i.z=e[2],i.spatialReference=t,(0,r.g)(i,o,n,a))}const i=(0,o(62240).T)(0,0,0,n.default.WGS84)},18498:(e,t,o)=>{o.d(t,{A:()=>a});var n=o(44873),r=o(16878);function a(e){e.vertex.code.add(r.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${r.H.int(n.k5.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${r.H.int(n.k5.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${r.H.int(n.k5.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${r.H.int(n.k5.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}},19983:(e,t,o)=>{o.d(t,{E5:()=>l,JU:()=>i,Of:()=>r,Uk:()=>a,WK:()=>c,g7:()=>s,lO:()=>u,lQ:()=>d});var n=o(74719);function r(e){return e&&"function"==typeof e.highlight}function a(e){return e&&"function"==typeof e.maskOccludee}function i(e,t,o){return null==e||e>=o&&(0===t||e<=t)}function l(e,t){if(t&&e){const{minScale:o,maxScale:n}=e;if(c(o,n))return i(t,o,n)}return!0}function c(e,t){return null!=e&&e>0||null!=t&&t>0}function s(e){return!e?.minScale||!e.maxScale||e.minScale>=e.maxScale}function u(e){return null!=e&&"object"==typeof e&&"createQuery"in e&&"queryFeatures"in e&&"layer"in e&&"view"in e}function d(e,t,o){return new n.default("layerview:spatial-reference-incompatible",`The spatial reference of this ${e}${t?`(wkid:${t})`:""} is incompatible with the spatial reference of the view${o?`(wkid:${o})`:""}.`,{})}},28515:(e,t,o)=>{o.d(t,{E$:()=>T,Gs:()=>_,Jq:()=>E,PX:()=>R,Sj:()=>p,U9:()=>P,US:()=>M,Ui:()=>w,Z7:()=>h,b:()=>m,jI:()=>y,lt:()=>b,oJ:()=>x,vf:()=>C,vt:()=>f,xW:()=>S});var n=o(87752),r=o(89227),a=o(28473),i=o(30142),l=o(93321),c=o(54671),s=o(91345),u=o(25071),d=o(89476);function f(e){const{value:t,operations:o}=e;return{operations:o,value:o.create(t)}}function m(e,t,o){return e.operations.setExtent(e.value,t,o.value),o}function h(e,t){return e.operations.getExtent(e.value,t),t}function v(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return{operations:e,value:e.create()}}(e);return o.operations=e,e.copy(t,o.value),o}function p(e){return v(d.s,(0,d.f)(0,0,0,(0,i.tO)(e).radius))}const g=2**50;function x(){return v(u.b,(0,u.f)([0,0,0],[g,0,0],[0,g,0]))}function y(e,t,o){return e.operations.axisAt(e.value,t,s._.Z,o)}function C(e,t,o,n){return e.operations.axisAt(e.value,t,o,n)}function w(e,t,o){return e.operations.intersectRay(e.value,t,o)}function b(e,t,o){return e.operations.intersectRayClosestSilhouette(e.value,t,o)}function M(e,t){return e.operations.altitudeAt(e.value,t)}function T(e,t,o,n){return e.operations.setAltitudeAt(e.value,t,o,n)}function E(e,t,o,a){return t!==a&&(0,n.C)(a,t),(0,r.i)(A,a[12],a[13],a[14]),T(e,A,o,A),a[12]=A[0],a[13]=A[1],a[14]=A[2],a}function S(e,t,o){return e.operations.elevate(e.value,t,o.value)}const A=(0,a.vt)();function R(e,t,o,n,a){return a[0]=(0,r.f)(e,t),a[1]=(0,r.f)(e,o),a[2]=(0,r.f)(e,n),a}function P(e,t,o,n,a){(0,r.c)(o,e),(0,r.c)(I,t),(0,r.n)(I,I),(0,r.e)(n,I,o),(0,r.e)(a,n,o)}function _(e,t){return e?(0,c.lO)(t):t.isGeographic?l.default.PlateCarree:t}const I=(0,a.vt)()},30466:(e,t,o)=>{o.d(t,{I:()=>i,_:()=>l});var n=o(74719),r=(o(21265),o(57942)),a=o(21484);class i{constructor(e){this.context=e,this._debug=!1,this._precompiling=this._debug?0:1,this._cache=new r.O}get precompiling(){return this._precompiling}set precompiling(e){this._precompiling=e,0===e&&this.context.rctx.gl.flush()}get viewingMode(){return this.context.viewingMode}destroy(){this._cache.forAll((e=>e.destroy())),this._cache.clear()}precompile(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;++this.precompiling,this.get(e,t),--this.precompiling}get(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;const o=t.key.code;let r=this._cache.get(e,o);if(null==r){if(0===this._precompiling){let o=`Uncached shader compile in ${(new Error).stack}\n  for configuration\n${t.decode()}`;const r=this._cache.getInner(e);throw r?.size&&(o+="\n\n  cached configurations:\n",o+=Array.from(r.values()).map((e=>t.decode(e.key))).sort().join("\n\n")),console.log(o),new n.default(o)}r=new e(this.context,t),this._cache.set(e,o,r)}return r}async reloadAll(){const e=new Array;this._cache.forEach((t=>e.push(async function(e){let t=!0;e.forEach((async e=>{await e.reload(t),t=!1}))}(t)))),await Promise.all(e)}}const l=new a.K},31183:(e,t,o)=>{o.d(t,{W:()=>l,g:()=>i});var n=o(28473),r=o(96913),a=o(67093);function i(e,t,o,n){if((0,r.canProjectWithoutEngine)(e.spatialReference,o)){c[0]=e.x,c[1]=e.y;const r=e.z;return c[2]=r??n??0,(0,a.projectBuffer)(c,e.spatialReference,0,t,o,0)}const i=(0,r.tryProjectWithZConversion)(e,o);return!!i&&(t[0]=i?.x,t[1]=i?.y,t[2]=i?.z??n??0,!0)}async function l(e,t,o,n,a){return await(0,r.initializeProjection)(e.spatialReference,o,null,a),i(e,t,o,n)}const c=(0,n.vt)()},41317:(e,t,o)=>{o.d(t,{$7:()=>E,B:()=>T,Fo:()=>w,M7:()=>R,NN:()=>f,Q5:()=>b,Tq:()=>_,Up:()=>M,XF:()=>A,Ze:()=>g,bK:()=>l,bh:()=>d,id:()=>x,ky:()=>u,qt:()=>P,tW:()=>S,v9:()=>m,w7:()=>c,wF:()=>i,wS:()=>y,wz:()=>v,x:()=>h,xS:()=>C,ze:()=>s});var n=o(84190),r=o(34308);function a(e){return e?P:_}function i(e,t){return t?.mode?t.mode:a(e).mode}function l(e,t){return null!=t?t:a(e)}function c(e,t){return i(null==e||(e.hasZ??!1),t)}function s(e,t){return l(null==e||(e.hasZ??!1),t)}function u(e){const t=p(e);return c(e.geometry,t)}function d(e){const t=p(e),o=c(e.geometry,t),n=null!=t&&"on-the-ground"!==o?R(t):0,r=t?.featureExpressionInfo;return{mode:o,offset:n,featureExpressionInfo:r}}function f(e){return v(d(e))}function m(e){return v(e)||h(e)}function h(e){return"0"===e?.featureExpressionInfo?.expression}function v(e){if(!e)return!1;if("on-the-ground"===e.mode)return!1;const t=e?.featureExpressionInfo?e.featureExpressionInfo.expression:null;return!(!t||"0"===t)}function p(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function g(e,t){if(!e?.offset)return 0;const{offset:o,unit:r}=e;if("decimal-degrees"===r)return 0;const a="unknown"!==r&&r?r:"meters",i=(0,n.mq)(t);return i?(0,n.oU)(o,a,i):0}function x(e,t,o){if(!o?.mode)return;const n=e.hasZ?e.z:0,r=g(o,e.spatialReference);switch(o.mode){case"absolute-height":return n-r;case"on-the-ground":return 0;case"relative-to-ground":return n-((t.elevationProvider.getElevation(e.x,e.y,n,e.spatialReference,"ground")??0)+r);case"relative-to-scene":return n-((t.elevationProvider.getElevation(e.x,e.y,n,e.spatialReference,"scene")??0)+r)}}function y(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return w(e,t.x,t.y,t.hasZ?t.z:0,t.spatialReference,o,n)}function C(e,t,o,n){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return w(e,t[0],t[1],t.length>2?t[2]:0,o,n,r)}function w(e,t,o,n,r,a){let i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;if(null==a)return;const l=null!=i?i.mode:"absolute-height";if("on-the-ground"===l)return 0;const{absoluteZ:c}=b(t,o,n,r,e,a);return function(e,t,o,n,r,a,i,l){const c=g(i,r);switch(l){case"absolute-height":return e-c;case"relative-to-ground":return e-((a.elevationProvider.getElevation(t,o,n,r,"ground")??0)+c);case"relative-to-scene":return e-((a.elevationProvider.getElevation(t,o,n,r,"scene")??0)+c)}}(c,t,o,n,r,e,i,l)}function b(e,t,o,n,r,a){const i=g(a,n);switch(a.mode){case"absolute-height":return{absoluteZ:o+i,elevation:0};case"on-the-ground":{const o=r.elevationProvider.getElevation(e,t,0,n,"ground")??0;return{absoluteZ:o,elevation:o}}case"relative-to-ground":{const a=r.elevationProvider.getElevation(e,t,o,n,"ground")??0;return{absoluteZ:o+a+i,elevation:a}}case"relative-to-scene":{const a=r.elevationProvider.getElevation(e,t,o,n,"scene")??0;return{absoluteZ:o+a+i,elevation:a}}}}function M(e,t){if(null==t)return!1;const{mode:o}=t;return null!=o&&("scene"===e&&"relative-to-scene"===o||"ground"===e&&"absolute-height"!==o)}function T(e,t,o){return o&&o.mode!==t?`${e} only support ${t} elevation mode`:null}function E(e,t,o){return o?.mode===t?`${e} do not support ${t} elevation mode`:null}function S(e,t){return null!=t?.featureExpressionInfo&&"0"!==t.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function A(e,t){t&&e.warn(".elevationInfo=",t)}function R(e){return(e?.offset??0)*(0,r.Ao)(e?.unit)}const P={mode:"absolute-height",offset:0},_={mode:"on-the-ground",offset:null}},44873:(e,t,o)=>{o.d(t,{Eb:()=>i,_j:()=>l,k5:()=>n});var n,r,a=o(64682);function i(e){switch(e){case"multiply":default:return n.Multiply;case"ignore":return n.Ignore;case"replace":return n.Replace;case"tint":return n.Tint}}function l(e,t,o){if(null==e||t===n.Ignore)return o[0]=255,o[1]=255,o[2]=255,void(o[3]=255);const r=(0,a.qE)(Math.round(e[3]*s),0,s),i=0===r||t===n.Tint?0:t===n.Replace?u:d;o[0]=(0,a.qE)(Math.round(e[0]*c),0,c),o[1]=(0,a.qE)(Math.round(e[1]*c),0,c),o[2]=(0,a.qE)(Math.round(e[2]*c),0,c),o[3]=r+i}(r=n||(n={}))[r.Multiply=1]="Multiply",r[r.Ignore=2]="Ignore",r[r.Replace=3]="Replace",r[r.Tint=4]="Tint";const c=255,s=85,u=s,d=2*s},57942:(e,t,o)=>{o.d(t,{O:()=>n});class n{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}getInner(e){return this._outer.get(e)}set(e,t,o){const n=this._outer.get(e);n?n.set(t,o):this._outer.set(e,new Map([[t,o]]))}delete(e,t){const o=this._outer.get(e);o&&(o.delete(t),0===o.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,o)=>e(t,o)))}forAll(e){for(const t of this._outer.values())for(const o of t.values())e(o)}}},62240:(e,t,o)=>{function n(e,t,o,n){return{x:e,y:t,z:o,hasZ:null!=o,hasM:!1,spatialReference:n,type:"point"}}function r(e,t,o,n,r){e.x=t,e.y=o,e.z=n,e.hasZ=null!=n,e.spatialReference=r}o.d(t,{J:()=>r,T:()=>n})},63034:(e,t,o)=>{o.d(t,{d:()=>C});var n=o(64682),r=o(84190),a=o(87752),i=o(89227),l=o(30142),c=o(54671),s=o(31183),u=o(70075),d=o(18162),f=o(90772),m=o(91345),h=o(28515),v=o(10872),p=o(49943),g=o(1696),x=o(49807),y=o(51064);class C{constructor(e,t,o,n){this.viewingMode=e,this.spatialReference=t,this.unitInMeters=o,this._coordinateSystem=n,this._tmpCoordinateSystem=(0,h.vt)(n),this.referenceEllipsoid=(0,l.tO)(t),this.sphericalPCPF=(0,c.lO)(t)}set extent(e){e&&(0,h.b)(this._coordinateSystem,e,this._coordinateSystem)}get extent(){return(0,h.Z7)(this._coordinateSystem,(0,f.vt)())}getAltitude(e){return(0,h.US)(this._coordinateSystem,e)}setAltitude(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;return(0,h.E$)(this._coordinateSystem,o,t,e)}setAltitudeOfTransformation(e,t){(0,h.Jq)(this._coordinateSystem,t,e,t)}worldUpAtPosition(e,t){return(0,h.jI)(this._coordinateSystem,e,t)}worldBasisAtPosition(e,t,o){return(0,h.vf)(this._coordinateSystem,e,t,o)}basisMatrixAtPosition(e,t){const o=this.worldBasisAtPosition(e,m._.X,g.rq.get()),n=this.worldBasisAtPosition(e,m._.Y,g.rq.get()),r=this.worldBasisAtPosition(e,m._.Z,g.rq.get());return(0,a.hZ)(t,o[0],o[1],o[2],0,n[0],n[1],n[2],0,r[0],r[1],r[2],0,0,0,0,1),t}headingAtPosition(e,t){const o=this.worldUpAtPosition(e,g.rq.get()),r=this.worldBasisAtPosition(e,m._.Y,g.rq.get()),a=(0,p.EJ)(t,r,o);return(0,n.KJ)(a)}intersectManifoldClosestSilhouette(e,t,o){return(0,h.xW)(this._coordinateSystem,t,this._tmpCoordinateSystem),(0,h.lt)(this._tmpCoordinateSystem,e,o),o}intersectManifold(e,t,o){(0,h.xW)(this._coordinateSystem,t,this._tmpCoordinateSystem);const n=g.rq.get();return(0,h.Ui)(this._tmpCoordinateSystem,e,n)?(0,i.c)(o,n):null}intersectInfiniteManifold(e,t,o){if(this.viewingMode===y.RT.Global)return this.intersectManifold(e,t,o);(0,h.xW)(this._coordinateSystem,t,this._tmpCoordinateSystem);const n=this._tmpCoordinateSystem.value,r=g.rq.get();return(0,v.Ui)(n.plane,e,r)?(0,i.c)(o,r):null}toRenderCoords(e,t,o){return(0,x.v)(e)?(0,s.g)(e,t,this.spatialReference):(0,d.F)(e,t,o,this.spatialReference)}fromRenderCoords(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return(0,x.v)(t)?(null!=o&&(t.spatialReference=o),(0,u.E)(e,this.spatialReference,t)?t:null):(0,d.F)(e,this.spatialReference,t,o)?t:null}static create(e,t){switch(e){case y.RT.Local:return new C(y.RT.Local,t,(0,r.GA)(t),(0,h.oJ)());case y.RT.Global:return new C(y.RT.Global,t,1,(0,h.Sj)(t))}}static renderUnitScaleFactor(e,t){return(0,r.KX)(e)/(0,r.KX)(t)}}},70075:(e,t,o)=>{o.d(t,{C:()=>l,E:()=>i});var n=o(28473),r=o(96913),a=o(18162);function i(e,t,o){return!!(0,a.F)(e,t,c,o.spatialReference)&&(o.x=c[0],o.y=c[1],o.z=c[2],!0)}async function l(e,t,o,n){return await(0,r.initializeProjection)(t,o.spatialReference,null,n),i(e,t,o)}const c=(0,n.vt)()},77520:(e,t,o)=>{o.d(t,{Cc:()=>s,Qo:()=>u,CC:()=>d,RF:()=>c});var n=o(88102),r=(o(21265),o(16804)),a=o(24646);var i=o(7757),l=o(6513);function c(e){return e&&e.enabled&&(function(e){return"extrude"===e.type}(e)||function(e){return"fill"===e.type}(e))&&null!=e.edges}function s(e,t){return u(function(e){return e&&e.enabled&&e.edges||null}(e),t)}function u(e,t){if(null==e)return null;const o=null!=e.color?(0,a.ci)(n.default.toUnitRGBA(e.color)):(0,a.fA)(0,0,0,0),i=(0,r.Lz)(e.size),c=(0,r.Lz)(e.extensionLength);switch(e.type){case"solid":return d({color:o,size:i,extensionLength:c,...t});case"sketch":return s={color:o,size:i,extensionLength:c,...t},{...m,...s,type:l.gP.Sketch};default:return}var s}function d(e){return{...f,...e,type:l.gP.Solid}}const f={color:(0,a.fA)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:i.x.OPAQUE,hasSlicePlane:!1},m={color:(0,a.fA)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:i.x.OPAQUE,hasSlicePlane:!1}},88242:(e,t,o)=>{o.d(t,{cz:()=>C,Sg:()=>m,B:()=>y,Hi:()=>x});var n=o(7951),r=o(15173),a=o(18498),i=o(96236),l=o(42162),c=o(21152),s=o(16878),u=o(73031),d=o(826);class f extends d.n{constructor(e,t){super(e,"int",u.c.Draw,((o,n,r)=>o.setUniform1i(e,t(n,r))))}}var m,h,v=o(81775),p=o(96122),g=o(22131);(h=m||(m={}))[h.Uniform=0]="Uniform",h[h.Varying=1]="Varying",h[h.COUNT=2]="COUNT";const x=429496.7296;function y(e,t){(0,r.U)(e/x*.5+.5,t)}function C(e,t){switch(t.componentData){case m.Varying:return function(e,t){const{vertex:o,fragment:n}=e;o.include(l.W),o.uniforms.add(new v.o("componentColorTex",(e=>e.componentParameters.texture.texture))),e.attributes.add(g.r.COMPONENTINDEX,"float"),e.varyings.add("vExternalColorMixMode","mediump float"),e.varyings.add("vExternalColor","vec4");const r=t.output===i.V.ObjectAndLayerIdColor;r&&e.varyings.add("vObjectAndLayerIdColor","vec4"),e.include(a.A),o.constants.add("stride","float",(0,p.E)()?3:2),o.code.add(s.H`vec2 getComponentTextureCoordinates(float componentIndex, float typeOffset) {
float index = componentIndex * stride + typeOffset;
float texSize = float(textureSize(componentColorTex, 0).x);
float coordX = mod(index, texSize);
float coordY = floor(index / texSize);
return vec2(coordX, coordY) + 0.5;
}`),o.code.add(s.H`
  vec4 _readComponentColor() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 0.0);
    return texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
   }

  float readElevationOffset() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 1.0);
    vec4 encodedElevation = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
    return uninterpolatedRGBAToFloat(encodedElevation) * ${s.H.float(x)};
  }

  ${r?s.H`
          void forwardObjectAndLayerIdColor() {
            vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 2.0);
            vObjectAndLayerIdColor = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
          }`:s.H`void forwardObjectAndLayerIdColor() {}`}

  vec4 forwardExternalColor(out bool castShadows) {
    vec4 componentColor = _readComponentColor() * 255.0;

    float shadowFlag = mod(componentColor.b * 255.0, 2.0);
    componentColor.b -= shadowFlag;
    castShadows = shadowFlag >= 1.0;

    int decodedColorMixMode;
    vExternalColor = decodeSymbolColor(componentColor, decodedColorMixMode) * 0.003921568627451; // = 1/255;
    vExternalColorMixMode = float(decodedColorMixMode) + 0.5; // add 0.5 to avoid interpolation artifacts

    return vExternalColor;
  }
`),n.code.add(s.H`
  void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {
    externalColor = vExternalColor;
    externalColorMixMode = int(vExternalColorMixMode);
  }

  void outputObjectAndLayerIdColor() {
     ${r?s.H`fragColor = vObjectAndLayerIdColor;`:""}
  }
`)}(e,t);case m.Uniform:return function(e,t){const{vertex:o,fragment:n}=e;e.varyings.add("vExternalColor","vec4"),o.uniforms.add(new c.V("externalColor",(e=>e.componentParameters.externalColor))).code.add(s.H`float readElevationOffset() {
return 0.0;
}
void forwardObjectAndLayerIdColor() {}
vec4 forwardExternalColor(out bool castShadows) {
vExternalColor = externalColor;
castShadows = true;
return externalColor;
}`);const r=t.output===i.V.ObjectAndLayerIdColor;n.uniforms.add(new f("externalColorMixMode",(e=>e.componentParameters.externalColorMixMode))).code.add(s.H`
    void readExternalColor(out vec4 color, out int colorMixMode) {
      color = vExternalColor;
      colorMixMode = externalColorMixMode;
    }

    void outputObjectAndLayerIdColor() {
      ${(0,s.If)(r,"fragColor = vec4(0, 0, 0, 0);")}
    }
  `)}(e,t);case m.COUNT:return;default:(0,n.Xb)(t.componentData)}}},96504:(e,t,o)=>{o.d(t,{R1:()=>i,aY:()=>r,cN:()=>a});var n=o(49807);class r{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.array=e,this.spatialReference=t,this.offset=o}}function a(e){return"array"in e}function i(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ground";if((0,n.v)(t))return e.getElevation(t.x,t.y,t.z||0,t.spatialReference,o);if(a(t)){let n=t.offset;return e.getElevation(t.array[n++],t.array[n++],t.array[n]||0,t.spatialReference??e.spatialReference,o)}return e.getElevation(t[0],t[1],t[2]||0,e.spatialReference,o)}}}]);