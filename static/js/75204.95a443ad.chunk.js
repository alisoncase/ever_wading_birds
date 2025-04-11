"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[75204],{826:(e,o,t)=>{t.d(o,{n:()=>n});t(21265);var r=t(73031);class n{constructor(e,o,t,n){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(this.name=e,this.type=o,this.arraySize=a,this.bind={[r.c.Bind]:null,[r.c.Pass]:null,[r.c.Draw]:null},n)switch(t){case void 0:break;case r.c.Bind:this.bind[r.c.Bind]=n;break;case r.c.Pass:this.bind[r.c.Pass]=n;break;case r.c.Draw:this.bind[r.c.Draw]=n}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}},6513:(e,o,t)=>{t.d(o,{E7:()=>C,gP:()=>r,s0:()=>n,zP:()=>h});var r,n,a,l=t(88242),i=t(16213),d=t(31500),c=t(42162),s=t(8815),u=t(57554),f=t(16878),m=t(91018),v=t(80203),p=t(38950),x=t(81775),T=t(22131);function C(e,o){const t=e.vertex;t.include(c.W),e.include(i.Y,o);const{silhouette:r,legacy:n,spherical:a}=o;t.uniforms.add(new x.o("componentDataTex",(e=>e.componentDataTexture))),e.attributes.add(T.r.COMPONENTINDEX,"float");t.constants.add("lineWidthFractionFactor","float",8),t.constants.add("extensionLengthOffset","float",128),t.code.add(f.H`
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
      vec3 normal2 = ${r?f.H`decompressNormal(normal2Compressed)`:f.H`normal`};

      vec4 colorValue = texelFetch(componentDataTex, ivec2(colorIndex), 0);
      vec4 otherValue = texelFetch(componentDataTex, ivec2(otherIndex), 0);
      float verticalOffset = uninterpolatedRGBAToFloat(texelFetch(componentDataTex, ivec2(verticalOffsetIndex), 0)) * ${f.H.float(l.Hi)};

      return ComponentData(
        vec4(colorValue.rgb, colorValue.a * otherValue.w), // otherValue.w stores separate opacity
        normal, normal2,
        otherValue.x * (255.0 / ${f.H.float(8)} ),
        otherValue.y * 255.0 - ${f.H.float(128)},
        -(otherValue.z * 255.0) + 0.5, // SOLID (=0/255) needs to be > 0.0, SKETCHY (=1/255) needs to be <= 0;
        verticalOffset
      );
    }
  `),n?t.code.add(f.H`vec3 _modelToWorldNormal(vec3 normal) {
return (model * vec4(normal, 0.0)).xyz;
}
vec3 _modelToViewNormal(vec3 normal) {
return (localView * model * vec4(normal, 0.0)).xyz;
}`):(t.uniforms.add(new m.h("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel))),t.code.add(f.H`vec3 _modelToWorldNormal(vec3 normal) {
return transformNormalGlobalFromModel * normal;
}`)),r?(e.attributes.add(T.r.NORMAL2COMPRESSED,"vec2"),t.code.add(f.H`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(normalize(data.normal + data.normal2));
}`)):t.code.add(f.H`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(data.normal);
}`),n?t.code.add(f.H`void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
worldPos = (model * vec4(modelPos, 1.0)).xyz;
viewPos = (localView * vec4(worldPos, 1.0)).xyz;
}`):(t.include(d.u,o),t.uniforms.add(new v.k("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new m.h("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new s.W("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL)),new s.W("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new u.t("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new u.t("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH))),t.code.add(f.H`
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
    `)),t.uniforms.add(new p.F("transformProjFromView",(e=>e.camera.projectionMatrix))).code.add(f.H`vec4 projFromViewPosition(vec3 position) {
return transformProjFromView * vec4(position, 1.0);
}`),t.code.add(f.H`float calculateExtensionLength(float extensionLength, float lineLength) {
return extensionLength / (log2(max(1.0, 256.0 / lineLength)) * 0.2 + 1.0);
}`)}function h(e){return e===r.Sketch||e===r.Mixed}(a=r||(r={}))[a.Solid=0]="Solid",a[a.Sketch=1]="Sketch",a[a.Mixed=2]="Mixed",a[a.COUNT=3]="COUNT",function(e){e[e.REGULAR=0]="REGULAR",e[e.SILHOUETTE=1]="SILHOUETTE"}(n||(n={}))},7757:(e,o,t)=>{var r;t.d(o,{x:()=>r}),function(e){e[e.TRANSPARENT=0]="TRANSPARENT",e[e.OPAQUE=1]="OPAQUE"}(r||(r={}))},8815:(e,o,t)=>{t.d(o,{W:()=>a});var r=t(73031),n=t(826);class a extends n.n{constructor(e,o){super(e,"vec3",r.c.Draw,((t,r,n,a)=>t.setUniform3fv(e,o(r,n,a))))}}},13473:(e,o,t)=>{function r(){return[1,0,0,0,1,0,0,0,1]}function n(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]}function a(e,o,t,r,n,a,l,i,d){return[e,o,t,r,n,a,l,i,d]}t.d(o,{fA:()=>a,o8:()=>n,vt:()=>r,zK:()=>l});const l=[1,0,0,0,1,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:l,clone:n,create:r,createView:function(e,o){return new Float64Array(e,o,9)},fromValues:a},Symbol.toStringTag,{value:"Module"}))},15173:(e,o,t)=>{t.d(o,{T:()=>a,U:()=>n});var r=t(64682);function n(e,o){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const n=(0,r.qE)(e,0,d);for(let r=0;r<4;r++)o[t+r]=Math.floor(256*c(n*l[r]))}function a(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=0;for(let r=0;r<4;r++)t+=e[o+r]*i[r];return t}const l=[1,256,65536,16777216],i=[1/256,1/65536,1/16777216,1/4294967296],d=a(new Uint8ClampedArray([255,255,255,255]));function c(e){return e-Math.floor(e)}},16213:(e,o,t)=>{t.d(o,{W:()=>r,Y:()=>d});var r,n,a=t(7951),l=t(16878),i=t(22131);function d(e,o){switch(o.normalType){case r.Compressed:e.attributes.add(i.r.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(l.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case r.Attribute:e.attributes.add(i.r.NORMAL,"vec3"),e.vertex.code.add(l.H`vec3 normalModel() {
return normal;
}`);break;case r.ScreenDerivative:e.fragment.code.add(l.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,a.Xb)(o.normalType);case r.COUNT:}}(n=r||(r={}))[n.Attribute=0]="Attribute",n[n.Compressed=1]="Compressed",n[n.ScreenDerivative=2]="ScreenDerivative",n[n.COUNT=3]="COUNT"},16878:(e,o,t)=>{function r(e){let o="";for(let t=0;t<(arguments.length<=1?0:arguments.length-1);t++)o+=e[t]+(t+1<1||arguments.length<=t+1?void 0:arguments[t+1]);return o+=e[e.length-1],o}function n(e,o){return e?o:arguments.length>2&&void 0!==arguments[2]?arguments[2]:""}t.d(o,{H:()=>r,If:()=>n}),function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(r)},18162:(e,o,t)=>{t.d(o,{F:()=>a});t(96913);var r=t(93321),n=t(31183);function a(e,o,t,r,a){return!(null==o||null==r||e.length<2)&&(l.x=e[0],l.y=e[1],l.z=e[2],l.spatialReference=o,(0,n.g)(l,t,r,a))}const l=(0,t(62240).T)(0,0,0,r.default.WGS84)},18498:(e,o,t)=>{t.d(o,{A:()=>a});var r=t(44873),n=t(16878);function a(e){e.vertex.code.add(n.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${n.H.int(r.k5.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${n.H.int(r.k5.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${n.H.int(r.k5.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${n.H.int(r.k5.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}},19983:(e,o,t)=>{t.d(o,{E5:()=>i,JU:()=>l,Of:()=>n,Uk:()=>a,WK:()=>d,g7:()=>c,lO:()=>s,lQ:()=>u});var r=t(74719);function n(e){return e&&"function"==typeof e.highlight}function a(e){return e&&"function"==typeof e.maskOccludee}function l(e,o,t){return null==e||e>=t&&(0===o||e<=o)}function i(e,o){if(o&&e){const{minScale:t,maxScale:r}=e;if(d(t,r))return l(o,t,r)}return!0}function d(e,o){return null!=e&&e>0||null!=o&&o>0}function c(e){return!e?.minScale||!e.maxScale||e.minScale>=e.maxScale}function s(e){return null!=e&&"object"==typeof e&&"createQuery"in e&&"queryFeatures"in e&&"layer"in e&&"view"in e}function u(e,o,t){return new r.default("layerview:spatial-reference-incompatible",`The spatial reference of this ${e}${o?`(wkid:${o})`:""} is incompatible with the spatial reference of the view${t?`(wkid:${t})`:""}.`,{})}},21152:(e,o,t)=>{t.d(o,{V:()=>a});var r=t(73031),n=t(826);class a extends n.n{constructor(e,o){super(e,"vec4",r.c.Draw,((t,r,n)=>t.setUniform4fv(e,o(r,n))))}}},22131:(e,o,t)=>{var r;function n(e){return e===r.POSITION}t.d(o,{b:()=>n,r:()=>r}),function(e){e.POSITION="position",e.NORMAL="normal",e.NORMALCOMPRESSED="normalCompressed",e.UV0="uv0",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.ROTATION="rotation",e.TANGENT="tangent",e.OFFSET="offset",e.PERSPECTIVEDIVIDE="perspectiveDivide",e.CENTEROFFSETANDDISTANCE="centerOffsetAndDistance",e.LENGTH="length",e.PREVPOSITION="prevPosition",e.NEXTPOSITION="nextPosition",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.INSTANCEMODELORIGINHI="instanceModelOriginHi",e.INSTANCEMODELORIGINLO="instanceModelOriginLo",e.INSTANCEMODEL="instanceModel",e.INSTANCEMODELNORMAL="instanceModelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMAL2COMPRESSED="normal2Compressed",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.START_UP="startUp",e.END_UP="endUp",e.EXTRUDE="extrude",e.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",e.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}(r||(r={}))},31183:(e,o,t)=>{t.d(o,{W:()=>i,g:()=>l});var r=t(28473),n=t(96913),a=t(67093);function l(e,o,t,r){if((0,n.canProjectWithoutEngine)(e.spatialReference,t)){d[0]=e.x,d[1]=e.y;const n=e.z;return d[2]=n??r??0,(0,a.projectBuffer)(d,e.spatialReference,0,o,t,0)}const l=(0,n.tryProjectWithZConversion)(e,t);return!!l&&(o[0]=l?.x,o[1]=l?.y,o[2]=l?.z??r??0,!0)}async function i(e,o,t,r,a){return await(0,n.initializeProjection)(e.spatialReference,t,null,a),l(e,o,t,r)}const d=(0,r.vt)()},31500:(e,o,t)=>{t.d(o,{u:()=>n});var r=t(16878);function n(e,o){let{code:t}=e;o.doublePrecisionRequiresObfuscation?t.add(r.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):t.add(r.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}},38950:(e,o,t)=>{t.d(o,{F:()=>a});var r=t(73031),n=t(826);class a extends n.n{constructor(e,o){super(e,"mat4",r.c.Bind,((t,r)=>t.setUniformMatrix4fv(e,o(r))))}}},42162:(e,o,t)=>{t.d(o,{W:()=>n});var r=t(16878);function n(e){e.code.add(r.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}`),e.code.add(r.H`const vec4 RGBA_TO_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgbaTofloat(vec4 rgba) {
return dot(rgba, RGBA_TO_FLOAT_FACTORS);
}`),e.code.add(r.H`const vec4 uninterpolatedRGBAToFloatFactors = vec4(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBAToFloat(vec4 rgba) {
return (dot(round(rgba * 255.0), uninterpolatedRGBAToFloatFactors) - 0.5) * 2.0;
}`)}},44873:(e,o,t)=>{t.d(o,{Eb:()=>l,_j:()=>i,k5:()=>r});var r,n,a=t(64682);function l(e){switch(e){case"multiply":default:return r.Multiply;case"ignore":return r.Ignore;case"replace":return r.Replace;case"tint":return r.Tint}}function i(e,o,t){if(null==e||o===r.Ignore)return t[0]=255,t[1]=255,t[2]=255,void(t[3]=255);const n=(0,a.qE)(Math.round(e[3]*c),0,c),l=0===n||o===r.Tint?0:o===r.Replace?s:u;t[0]=(0,a.qE)(Math.round(e[0]*d),0,d),t[1]=(0,a.qE)(Math.round(e[1]*d),0,d),t[2]=(0,a.qE)(Math.round(e[2]*d),0,d),t[3]=n+l}(n=r||(r={}))[n.Multiply=1]="Multiply",n[n.Ignore=2]="Ignore",n[n.Replace=3]="Replace",n[n.Tint=4]="Tint";const d=255,c=85,s=c,u=2*c},49996:(e,o,t)=>{t.d(o,{D8:()=>a,TO:()=>n,d0:()=>l});var r=t(95011);async function n(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.popupTemplate;if(null==o)return[];const t=await o.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:n}=o,{objectIdField:a,typeIdField:l,globalIdField:i,relationships:d}=e;if(t.includes("*"))return["*"];const c=n?(0,r.getFeatureEditFields)(e):[],s=(0,r.fixFields)(e.fieldsIndex,[...t,...c]);return l&&s.push(l),s&&a&&e.fieldsIndex?.has(a)&&!s.includes(a)&&s.push(a),s&&i&&e.fieldsIndex?.has(i)&&!s.includes(i)&&s.push(i),d&&d.forEach((o=>{const{keyField:t}=o;s&&t&&e.fieldsIndex?.has(t)&&!s.includes(t)&&s.push(t)})),s}function a(e,o){return e.popupTemplate?e.popupTemplate:null!=o&&o.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}function l(e,o){return null!=a(e,{defaultPopupTemplateEnabled:o})}},57554:(e,o,t)=>{t.d(o,{t:()=>a});var r=t(73031),n=t(826);class a extends n.n{constructor(e,o){super(e,"vec3",r.c.Pass,((t,r,n)=>t.setUniform3fv(e,o(r,n))))}}},62240:(e,o,t)=>{function r(e,o,t,r){return{x:e,y:o,z:t,hasZ:null!=t,hasM:!1,spatialReference:r,type:"point"}}function n(e,o,t,r,n){e.x=o,e.y=t,e.z=r,e.hasZ=null!=r,e.spatialReference=n}t.d(o,{J:()=>n,T:()=>r})},73031:(e,o,t)=>{var r;t.d(o,{c:()=>r}),function(e){e[e.Bind=0]="Bind",e[e.Pass=1]="Pass",e[e.Draw=2]="Draw"}(r||(r={}))},77520:(e,o,t)=>{t.d(o,{Cc:()=>c,Qo:()=>s,CC:()=>u,RF:()=>d});var r=t(88102),n=(t(21265),t(16804)),a=t(24646);var l=t(7757),i=t(6513);function d(e){return e&&e.enabled&&(function(e){return"extrude"===e.type}(e)||function(e){return"fill"===e.type}(e))&&null!=e.edges}function c(e,o){return s(function(e){return e&&e.enabled&&e.edges||null}(e),o)}function s(e,o){if(null==e)return null;const t=null!=e.color?(0,a.ci)(r.default.toUnitRGBA(e.color)):(0,a.fA)(0,0,0,0),l=(0,n.Lz)(e.size),d=(0,n.Lz)(e.extensionLength);switch(e.type){case"solid":return u({color:t,size:l,extensionLength:d,...o});case"sketch":return c={color:t,size:l,extensionLength:d,...o},{...m,...c,type:i.gP.Sketch};default:return}var c}function u(e){return{...f,...e,type:i.gP.Solid}}const f={color:(0,a.fA)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:l.x.OPAQUE,hasSlicePlane:!1},m={color:(0,a.fA)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:l.x.OPAQUE,hasSlicePlane:!1}},80203:(e,o,t)=>{t.d(o,{k:()=>a});var r=t(73031),n=t(826);class a extends n.n{constructor(e,o){super(e,"mat3",r.c.Pass,((t,r,n)=>t.setUniformMatrix3fv(e,o(r,n))))}}},81775:(e,o,t)=>{t.d(o,{o:()=>a});var r=t(73031),n=t(826);class a extends n.n{constructor(e,o){super(e,"sampler2D",r.c.Draw,((t,r,n)=>t.bindTexture(e,o(r,n))))}}},88242:(e,o,t)=>{t.d(o,{cz:()=>A,Sg:()=>m,B:()=>h,Hi:()=>C});var r=t(7951),n=t(15173),a=t(18498),l=t(96236),i=t(42162),d=t(21152),c=t(16878),s=t(73031),u=t(826);class f extends u.n{constructor(e,o){super(e,"int",s.c.Draw,((t,r,n)=>t.setUniform1i(e,o(r,n))))}}var m,v,p=t(81775),x=t(96122),T=t(22131);(v=m||(m={}))[v.Uniform=0]="Uniform",v[v.Varying=1]="Varying",v[v.COUNT=2]="COUNT";const C=429496.7296;function h(e,o){(0,n.U)(e/C*.5+.5,o)}function A(e,o){switch(o.componentData){case m.Varying:return function(e,o){const{vertex:t,fragment:r}=e;t.include(i.W),t.uniforms.add(new p.o("componentColorTex",(e=>e.componentParameters.texture.texture))),e.attributes.add(T.r.COMPONENTINDEX,"float"),e.varyings.add("vExternalColorMixMode","mediump float"),e.varyings.add("vExternalColor","vec4");const n=o.output===l.V.ObjectAndLayerIdColor;n&&e.varyings.add("vObjectAndLayerIdColor","vec4"),e.include(a.A),t.constants.add("stride","float",(0,x.E)()?3:2),t.code.add(c.H`vec2 getComponentTextureCoordinates(float componentIndex, float typeOffset) {
float index = componentIndex * stride + typeOffset;
float texSize = float(textureSize(componentColorTex, 0).x);
float coordX = mod(index, texSize);
float coordY = floor(index / texSize);
return vec2(coordX, coordY) + 0.5;
}`),t.code.add(c.H`
  vec4 _readComponentColor() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 0.0);
    return texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
   }

  float readElevationOffset() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 1.0);
    vec4 encodedElevation = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
    return uninterpolatedRGBAToFloat(encodedElevation) * ${c.H.float(C)};
  }

  ${n?c.H`
          void forwardObjectAndLayerIdColor() {
            vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 2.0);
            vObjectAndLayerIdColor = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
          }`:c.H`void forwardObjectAndLayerIdColor() {}`}

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
`),r.code.add(c.H`
  void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {
    externalColor = vExternalColor;
    externalColorMixMode = int(vExternalColorMixMode);
  }

  void outputObjectAndLayerIdColor() {
     ${n?c.H`fragColor = vObjectAndLayerIdColor;`:""}
  }
`)}(e,o);case m.Uniform:return function(e,o){const{vertex:t,fragment:r}=e;e.varyings.add("vExternalColor","vec4"),t.uniforms.add(new d.V("externalColor",(e=>e.componentParameters.externalColor))).code.add(c.H`float readElevationOffset() {
return 0.0;
}
void forwardObjectAndLayerIdColor() {}
vec4 forwardExternalColor(out bool castShadows) {
vExternalColor = externalColor;
castShadows = true;
return externalColor;
}`);const n=o.output===l.V.ObjectAndLayerIdColor;r.uniforms.add(new f("externalColorMixMode",(e=>e.componentParameters.externalColorMixMode))).code.add(c.H`
    void readExternalColor(out vec4 color, out int colorMixMode) {
      color = vExternalColor;
      colorMixMode = externalColorMixMode;
    }

    void outputObjectAndLayerIdColor() {
      ${(0,c.If)(n,"fragColor = vec4(0, 0, 0, 0);")}
    }
  `)}(e,o);case m.COUNT:return;default:(0,r.Xb)(o.componentData)}}},91018:(e,o,t)=>{t.d(o,{h:()=>a});var r=t(73031),n=t(826);class a extends n.n{constructor(e,o){super(e,"mat3",r.c.Draw,((t,r,n)=>t.setUniformMatrix3fv(e,o(r,n))))}}},96122:(e,o,t)=>{t.d(o,{E:()=>n});var r=t(21265);function n(){return!!(0,r.A)("enable-feature:objectAndLayerId-rendering")}},96236:(e,o,t)=>{var r;function n(e){return e===r.Shadow||e===r.ShadowHighlight||e===r.ShadowExcludeHighlight||e===r.ViewshedShadow}function a(e){return function(e){return p(e)||C(e)}(e)||e===r.Normal}function l(e){return T(e)||e===r.Normal}function i(e){return e===r.Highlight||e===r.ObjectAndLayerIdColor}function d(e){return c(e)||i(e)}function c(e){return e===r.Color}function s(e){return c(e)||h(e)}function u(e){return c(e)||e===r.ObjectAndLayerIdColor}function f(e){return s(e)||e===r.ObjectAndLayerIdColor}function m(e){return c(e)||e===r.Highlight}function v(e){return m(e)||C(e)}function p(e){return c(e)||i(e)}function x(e){return s(e)||i(e)}function T(e){return x(e)||C(e)}function C(e){return e===r.Depth}function h(e){return e===r.ColorEmission}t.d(o,{CL:()=>i,LG:()=>h,Mb:()=>x,PJ:()=>n,QG:()=>f,RN:()=>s,T2:()=>T,V:()=>r,XY:()=>a,_o:()=>c,aD:()=>v,dX:()=>p,eh:()=>C,i3:()=>d,iq:()=>l,zW:()=>u}),function(e){e[e.Color=0]="Color",e[e.ColorEmission=1]="ColorEmission",e[e.Depth=2]="Depth",e[e.Normal=3]="Normal",e[e.Shadow=4]="Shadow",e[e.ShadowHighlight=5]="ShadowHighlight",e[e.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",e[e.ViewshedShadow=7]="ViewshedShadow",e[e.Highlight=8]="Highlight",e[e.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",e[e.COUNT=10]="COUNT"}(r||(r={}))}}]);