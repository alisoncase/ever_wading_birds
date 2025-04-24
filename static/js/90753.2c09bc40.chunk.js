"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[14967,55928,90753],{826:(e,t,o)=>{o.d(t,{n:()=>r});o(21265);var n=o(73031);class r{constructor(e,t,o,r){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(this.name=e,this.type=t,this.arraySize=a,this.bind={[n.c.Bind]:null,[n.c.Pass]:null,[n.c.Draw]:null},r)switch(o){case void 0:break;case n.c.Bind:this.bind[n.c.Bind]=r;break;case n.c.Pass:this.bind[n.c.Pass]=r;break;case n.c.Draw:this.bind[n.c.Draw]=r}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}},6513:(e,t,o)=>{o.d(t,{E7:()=>x,gP:()=>n,s0:()=>r,zP:()=>y});var n,r,a,i=o(88242),l=o(16213),s=o(31500),c=o(42162),d=o(8815),u=o(57554),f=o(16878),h=o(91018),m=o(80203),p=o(38950),v=o(81775),g=o(22131);function x(e,t){const o=e.vertex;o.include(c.W),e.include(l.Y,t);const{silhouette:n,legacy:r,spherical:a}=t;o.uniforms.add(new v.o("componentDataTex",(e=>e.componentDataTexture))),e.attributes.add(g.r.COMPONENTINDEX,"float");o.constants.add("lineWidthFractionFactor","float",8),o.constants.add("extensionLengthOffset","float",128),o.code.add(f.H`
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
}`):(o.uniforms.add(new h.h("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel))),o.code.add(f.H`vec3 _modelToWorldNormal(vec3 normal) {
return transformNormalGlobalFromModel * normal;
}`)),n?(e.attributes.add(g.r.NORMAL2COMPRESSED,"vec2"),o.code.add(f.H`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(normalize(data.normal + data.normal2));
}`)):o.code.add(f.H`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(data.normal);
}`),r?o.code.add(f.H`void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
worldPos = (model * vec4(modelPos, 1.0)).xyz;
viewPos = (localView * vec4(worldPos, 1.0)).xyz;
}`):(o.include(s.u,t),o.uniforms.add(new m.k("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new h.h("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new d.W("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL)),new d.W("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new u.t("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new u.t("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH))),o.code.add(f.H`
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
    `)),o.uniforms.add(new p.F("transformProjFromView",(e=>e.camera.projectionMatrix))).code.add(f.H`vec4 projFromViewPosition(vec3 position) {
return transformProjFromView * vec4(position, 1.0);
}`),o.code.add(f.H`float calculateExtensionLength(float extensionLength, float lineLength) {
return extensionLength / (log2(max(1.0, 256.0 / lineLength)) * 0.2 + 1.0);
}`)}function y(e){return e===n.Sketch||e===n.Mixed}(a=n||(n={}))[a.Solid=0]="Solid",a[a.Sketch=1]="Sketch",a[a.Mixed=2]="Mixed",a[a.COUNT=3]="COUNT",function(e){e[e.REGULAR=0]="REGULAR",e[e.SILHOUETTE=1]="SILHOUETTE"}(r||(r={}))},7757:(e,t,o)=>{var n;o.d(t,{x:()=>n}),function(e){e[e.TRANSPARENT=0]="TRANSPARENT",e[e.OPAQUE=1]="OPAQUE"}(n||(n={}))},8815:(e,t,o)=>{o.d(t,{W:()=>a});var n=o(73031),r=o(826);class a extends r.n{constructor(e,t){super(e,"vec3",n.c.Draw,((o,n,r,a)=>o.setUniform3fv(e,t(n,r,a))))}}},13473:(e,t,o)=>{function n(){return[1,0,0,0,1,0,0,0,1]}function r(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]}function a(e,t,o,n,r,a,i,l,s){return[e,t,o,n,r,a,i,l,s]}o.d(t,{fA:()=>a,o8:()=>r,vt:()=>n,zK:()=>i});const i=[1,0,0,0,1,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:i,clone:r,create:n,createView:function(e,t){return new Float64Array(e,t,9)},fromValues:a},Symbol.toStringTag,{value:"Module"}))},14967:(e,t,o)=>{o.r(t),o.d(t,{default:()=>u});var n,r=o(93800),a=o(85715),i=o(19455),l=o(48602),s=(o(21265),o(50925),o(14746),o(47332)),c=o(75269);let d=n=class extends(a.A.ClonableMixin(i.A)){constructor(e){super(e),this.type="georeferenced",this.origin=null}};d.absolute=new n,(0,r._)([(0,s.e)({georeferenced:"georeferenced"},{readOnly:!0})],d.prototype,"type",void 0),(0,r._)([(0,l.MZ)({type:[Number],nonNullable:!1,json:{write:!0}})],d.prototype,"origin",void 0),d=n=(0,r._)([(0,c.$)("esri.geometry.support.MeshGeoreferencedVertexSpace")],d);const u=d},15173:(e,t,o)=>{o.d(t,{T:()=>a,U:()=>r});var n=o(64682);function r(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const r=(0,n.qE)(e,0,s);for(let n=0;n<4;n++)t[o+n]=Math.floor(256*c(r*i[n]))}function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=0;for(let n=0;n<4;n++)o+=e[t+n]*l[n];return o}const i=[1,256,65536,16777216],l=[1/256,1/65536,1/16777216,1/4294967296],s=a(new Uint8ClampedArray([255,255,255,255]));function c(e){return e-Math.floor(e)}},16213:(e,t,o)=>{o.d(t,{W:()=>n,Y:()=>s});var n,r,a=o(7951),i=o(16878),l=o(22131);function s(e,t){switch(t.normalType){case n.Compressed:e.attributes.add(l.r.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(i.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case n.Attribute:e.attributes.add(l.r.NORMAL,"vec3"),e.vertex.code.add(i.H`vec3 normalModel() {
return normal;
}`);break;case n.ScreenDerivative:e.fragment.code.add(i.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,a.Xb)(t.normalType);case n.COUNT:}}(r=n||(n={}))[r.Attribute=0]="Attribute",r[r.Compressed=1]="Compressed",r[r.ScreenDerivative=2]="ScreenDerivative",r[r.COUNT=3]="COUNT"},16878:(e,t,o)=>{function n(e){let t="";for(let o=0;o<(arguments.length<=1?0:arguments.length-1);o++)t+=e[o]+(o+1<1||arguments.length<=o+1?void 0:arguments[o+1]);return t+=e[e.length-1],t}function r(e,t){return e?t:arguments.length>2&&void 0!==arguments[2]?arguments[2]:""}o.d(t,{H:()=>n,If:()=>r}),function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(n)},18162:(e,t,o)=>{o.d(t,{F:()=>a});o(96913);var n=o(93321),r=o(31183);function a(e,t,o,n,a){return!(null==t||null==n||e.length<2)&&(i.x=e[0],i.y=e[1],i.z=e[2],i.spatialReference=t,(0,r.g)(i,o,n,a))}const i=(0,o(62240).T)(0,0,0,n.default.WGS84)},18498:(e,t,o)=>{o.d(t,{A:()=>a});var n=o(44873),r=o(16878);function a(e){e.vertex.code.add(r.H`
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
  `)}},19983:(e,t,o)=>{o.d(t,{E5:()=>l,JU:()=>i,Of:()=>r,Uk:()=>a,WK:()=>s,g7:()=>c,lO:()=>d,lQ:()=>u});var n=o(74719);function r(e){return e&&"function"==typeof e.highlight}function a(e){return e&&"function"==typeof e.maskOccludee}function i(e,t,o){return null==e||e>=o&&(0===t||e<=t)}function l(e,t){if(t&&e){const{minScale:o,maxScale:n}=e;if(s(o,n))return i(t,o,n)}return!0}function s(e,t){return null!=e&&e>0||null!=t&&t>0}function c(e){return!e?.minScale||!e.maxScale||e.minScale>=e.maxScale}function d(e){return null!=e&&"object"==typeof e&&"createQuery"in e&&"queryFeatures"in e&&"layer"in e&&"view"in e}function u(e,t,o){return new n.default("layerview:spatial-reference-incompatible",`The spatial reference of this ${e}${t?`(wkid:${t})`:""} is incompatible with the spatial reference of the view${o?`(wkid:${o})`:""}.`,{})}},21152:(e,t,o)=>{o.d(t,{V:()=>a});var n=o(73031),r=o(826);class a extends r.n{constructor(e,t){super(e,"vec4",n.c.Draw,((o,n,r)=>o.setUniform4fv(e,t(n,r))))}}},22131:(e,t,o)=>{var n;function r(e){return e===n.POSITION}o.d(t,{b:()=>r,r:()=>n}),function(e){e.POSITION="position",e.NORMAL="normal",e.NORMALCOMPRESSED="normalCompressed",e.UV0="uv0",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.ROTATION="rotation",e.TANGENT="tangent",e.OFFSET="offset",e.PERSPECTIVEDIVIDE="perspectiveDivide",e.CENTEROFFSETANDDISTANCE="centerOffsetAndDistance",e.LENGTH="length",e.PREVPOSITION="prevPosition",e.NEXTPOSITION="nextPosition",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.INSTANCEMODELORIGINHI="instanceModelOriginHi",e.INSTANCEMODELORIGINLO="instanceModelOriginLo",e.INSTANCEMODEL="instanceModel",e.INSTANCEMODELNORMAL="instanceModelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMAL2COMPRESSED="normal2Compressed",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.START_UP="startUp",e.END_UP="endUp",e.EXTRUDE="extrude",e.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",e.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}(n||(n={}))},26882:(e,t,o)=>{o.d(t,{EG:()=>p,Js:()=>r,TJ:()=>n,UY:()=>l,ay:()=>h,bP:()=>m,cJ:()=>i,iF:()=>a});var n,r,a,i,l,s,c=o(24646),d=o(89476),u=o(69270),f=o(95528);class h extends f.H{constructor(e,t){super(NaN,NaN),this.id=e,this.serviceMbsInIndexSR=t,this.serviceMbsInRenderSR=(0,d.f)(0,0,0,-1)}invalidateServiceBVsInRenderSR(){(0,u.Q7)(this.serviceMbsInRenderSR),this.serviceObbInRenderSR?.invalidate()}shareServiceBVsInRenderSRWith(e){this.serviceObbInRenderSR=e.serviceObbInRenderSR,this.serviceMbsInRenderSR=e.serviceMbsInRenderSR}}(s=n||(n={}))[s.Unmodified=0]="Unmodified",s[s.Culled=1]="Culled",s[s.NotChecked=2]="NotChecked",function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(r||(r={}));class m extends h{constructor(e,t,o,n,i,l,s,d,u,f){super(e,o),this.index=t,this.childCount=n,this.level=i,this.resources=l,this.version=s,this.lodMetric=d,this.maxError=u,this.numFeatures=f,this.failed=!1,this.cacheState=a.Unknown,this.vertexCount=0,this.memory=0,this.childrenLoaded=0,this.hasModifications=!1,this.imModificationImpact=r.NotChecked,this.elevationAgnosticBoundingVolume=(0,c.fA)(0,0,0,-1)}invalidateServiceBVsInRenderSR(){super.invalidateServiceBVsInRenderSR(),this.elevationAgnosticBoundingVolume[3]=-1}}!function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"}(a||(a={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(i||(i={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(l||(l={}));class p{constructor(e,t,o,n){this.nodeHasLOD=e,this.isChosen=t,this.lodLevel=o,this.version=n}}},31183:(e,t,o)=>{o.d(t,{W:()=>l,g:()=>i});var n=o(28473),r=o(96913),a=o(67093);function i(e,t,o,n){if((0,r.canProjectWithoutEngine)(e.spatialReference,o)){s[0]=e.x,s[1]=e.y;const r=e.z;return s[2]=r??n??0,(0,a.projectBuffer)(s,e.spatialReference,0,t,o,0)}const i=(0,r.tryProjectWithZConversion)(e,o);return!!i&&(t[0]=i?.x,t[1]=i?.y,t[2]=i?.z??n??0,!0)}async function l(e,t,o,n,a){return await(0,r.initializeProjection)(e.spatialReference,o,null,a),i(e,t,o,n)}const s=(0,n.vt)()},31500:(e,t,o)=>{o.d(t,{u:()=>r});var n=o(16878);function r(e,t){let{code:o}=e;t.doublePrecisionRequiresObfuscation?o.add(n.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`):o.add(n.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}},38950:(e,t,o)=>{o.d(t,{F:()=>a});var n=o(73031),r=o(826);class a extends r.n{constructor(e,t){super(e,"mat4",n.c.Bind,((o,n)=>o.setUniformMatrix4fv(e,t(n))))}}},40753:(e,t,o)=>{o.d(t,{a:()=>u,b:()=>l,c:()=>i,d:()=>r,e:()=>f,f:()=>d,l:()=>c,n:()=>h,t:()=>a});var n=o(8601);o(21265),o(50925);function r(e,t,o){a(e.typedBuffer,t.typedBuffer,o,e.typedBufferStride,t.typedBufferStride)}function a(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n;if(e.length/n!==Math.ceil(t.length/r))return e;const a=e.length/n,i=o[0],l=o[1],s=o[2],c=o[4],d=o[5],u=o[6],f=o[8],h=o[9],m=o[10],p=o[12],v=o[13],g=o[14];let x=0,y=0;for(let b=0;b<a;b++){const o=t[x],a=t[x+1],b=t[x+2];e[y]=i*o+c*a+f*b+p,e[y+1]=l*o+d*a+h*b+v,e[y+2]=s*o+u*a+m*b+g,x+=r,y+=n}return e}function i(e,t,o){l(e.typedBuffer,t.typedBuffer,o,e.typedBufferStride,t.typedBufferStride)}function l(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n;if(e.length/n!==Math.ceil(t.length/r))return;const a=e.length/n,i=o[0],l=o[1],s=o[2],c=o[3],d=o[4],u=o[5],f=o[6],h=o[7],m=o[8];let p=0,v=0;for(let g=0;g<a;g++){const o=t[p],a=t[p+1],g=t[p+2];e[v]=i*o+c*a+f*g,e[v+1]=l*o+d*a+h*g,e[v+2]=s*o+u*a+m*g,p+=r,v+=n}}function s(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n;const a=Math.min(e.length/n,t.length/r);let i=0,l=0;for(let s=0;s<a;s++)e[l]=o*t[i],e[l+1]=o*t[i+1],e[l+2]=o*t[i+2],i+=r,l+=n;return e}function c(e,t,o,n){d(e.typedBuffer,t.typedBuffer,o,n,e.typedBufferStride,t.typedBufferStride)}function d(e,t,o,r){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:3,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:a;const l=Math.min(e.length/a,t.length/i);let s=0,c=0;const d=1/n.Tf;for(let n=0;n<l;n++)e[c]=r*(o*t[s])**d,e[c+1]=r*(o*t[s+1])**d,e[c+2]=r*(o*t[s+2])**d,s+=i,c+=a}function u(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n;const a=e.length/n;if(a!==Math.ceil(t.length/r))return e;let i=0,l=0;for(let s=0;s<a;s++)e[l]=t[i]+o[0],e[l+1]=t[i+1]+o[1],e[l+2]=t[i+2]+o[2],i+=r,l+=n;return e}function f(e,t){h(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function h(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:o;const r=Math.min(e.length/o,t.length/n);let a=0,i=0;for(let l=0;l<r;l++){const r=t[a],l=t[a+1],s=t[a+2],c=r*r+l*l+s*s;if(c>0){const t=1/Math.sqrt(c);e[i]=t*r,e[i+1]=t*l,e[i+2]=t*s}a+=n,i+=o}}Object.freeze(Object.defineProperty({__proto__:null,linearToSRGB:d,linearToSRGBView:c,normalize:h,normalizeView:f,scale:s,scaleView:function(e,t,o){s(e.typedBuffer,t.typedBuffer,o,e.typedBufferStride,t.typedBufferStride)},shiftRight:function(e,t,o){const n=Math.min(e.count,t.count),r=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,l=t.typedBufferStride;let s=0,c=0;for(let d=0;d<n;d++)r[c]=i[s]>>o,r[c+1]=i[s+1]>>o,r[c+2]=i[s+2]>>o,s+=l,c+=a},transformMat3:l,transformMat3View:i,transformMat4:a,transformMat4View:r,translate:u},Symbol.toStringTag,{value:"Module"}))},41237:(e,t,o)=>{o.d(t,{Ir:()=>p,_b:()=>d,sQ:()=>u,xb:()=>f});var n=o(50925),r=o(15899),a=o(28473),i=o(74125),l=o(96913),s=o(18162),c=o(48038);class d{constructor(e,t,o,n,r,a){this.layout=e,this.interleavedVertexData=t,this.indices=o,this.hasColors=n,this.hasModifications=r,this.positionData=a}}class u{constructor(e,t,o,n,r,a,i){this.componentOffsets=e,this.featureIds=t,this.anchorIds=o,this.anchors=n,this.transformedGeometry=r,this.globalTrafo=a,this.obb=i}}class f extends i.B{constructor(e){super("SceneLayerWorker","process",{process:e=>[e.geometryBuffer],project:e=>[e.positions.buffer],transformNormals:e=>[e.normals.buffer]},e,{hasInitialize:!0})}setModifications(e,t,o,n){const r={context:e,modifications:p(t,o,n),isGeodetic:n.isGeographic};this.broadcast(r,"setModifications")}setLegacySchema(e,t){const o=JSON.stringify(t);return this.broadcast({context:e,jsonSchema:o},"setLegacySchema")}destroyContext(e){return this.broadcast(e,"destroyContext")}project(e,t){return this.invokeMethod("project",e,t)}transformNormals(e,t){return this.invokeMethod("transformNormals",e,t)}}const h=new r.A({deallocator:null}),m=(0,a.vt)();function p(e,t,o){h.clear();let r=1/0,a=1/0,i=-1/0,d=-1/0,u=!1;for(const p of t){const e="clip"===p.type?c.D.Inside:"mask"===p.type?c.D.Outside:c.D.Replace,t=p.geometry;let f=e=>e;if(t.spatialReference){if(!(0,l.canProjectWithoutEngine)(t.spatialReference,o)){n.A.getLogger("esri.views.3d.layers.I3SMeshWorkerHandle").warn("Can't project modification polygon into layer spatial reference, ignoring modification");continue}f=e=>((0,s.F)(e,t.spatialReference,m,o),m)}else t.hasZ||(m[2]=0,f=e=>(m[0]=e[0],m[1]=e[1],m));u=u||e===c.D.Outside,h.push(e),h.push(t.rings.length);for(const o of t.rings){h.push(o.length);for(const e of o){const t=f(e);h.push(t[0]),h.push(t[1]),h.push(t[2]),r=Math.min(r,t[0]),a=Math.min(a,t[1]),i=Math.max(i,t[0]),d=Math.max(d,t[1])}}}if(null!=e)if(u){const t=1e-4;h.push(c.D.Inside),h.push(2),h.push(4),h.push(r-t),h.push(a-t),h.push(0),h.push(i+t),h.push(a-t),h.push(0),h.push(i+t),h.push(d+t),h.push(0),h.push(r-t),h.push(d+t),h.push(0),h.push(4),h.push(e[0]),h.push(e[1]),h.push(0),h.push(e[2]),h.push(e[1]),h.push(0),h.push(e[2]),h.push(e[3]),h.push(0),h.push(e[0]),h.push(e[3]),h.push(0)}else h.push(c.D.Outside),h.push(1),h.push(4),h.push(e[0]),h.push(e[1]),h.push(0),h.push(e[2]),h.push(e[1]),h.push(0),h.push(e[2]),h.push(e[3]),h.push(0),h.push(e[0]),h.push(e[3]),h.push(0);h.push(c.D.Finished);const f=new Float64Array(h.length);for(let n=0;n<h.length;++n)f[n]=h.at(n);return f}},42162:(e,t,o)=>{o.d(t,{W:()=>r});var n=o(16878);function r(e){e.code.add(n.H`const float MAX_RGBA_FLOAT =
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
}`),e.code.add(n.H`const vec4 RGBA_TO_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgbaTofloat(vec4 rgba) {
return dot(rgba, RGBA_TO_FLOAT_FACTORS);
}`),e.code.add(n.H`const vec4 uninterpolatedRGBAToFloatFactors = vec4(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBAToFloat(vec4 rgba) {
return (dot(round(rgba * 255.0), uninterpolatedRGBAToFloatFactors) - 0.5) * 2.0;
}`)}},44873:(e,t,o)=>{o.d(t,{Eb:()=>i,_j:()=>l,k5:()=>n});var n,r,a=o(64682);function i(e){switch(e){case"multiply":default:return n.Multiply;case"ignore":return n.Ignore;case"replace":return n.Replace;case"tint":return n.Tint}}function l(e,t,o){if(null==e||t===n.Ignore)return o[0]=255,o[1]=255,o[2]=255,void(o[3]=255);const r=(0,a.qE)(Math.round(e[3]*c),0,c),i=0===r||t===n.Tint?0:t===n.Replace?d:u;o[0]=(0,a.qE)(Math.round(e[0]*s),0,s),o[1]=(0,a.qE)(Math.round(e[1]*s),0,s),o[2]=(0,a.qE)(Math.round(e[2]*s),0,s),o[3]=r+i}(r=n||(n={}))[r.Multiply=1]="Multiply",r[r.Ignore=2]="Ignore",r[r.Replace=3]="Replace",r[r.Tint=4]="Tint";const s=255,c=85,d=c,u=2*c},48038:(e,t,o)=>{var n,r;o.d(t,{D:()=>r,f:()=>n}),function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"}(n||(n={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(r||(r={}))},55928:(e,t,o)=>{o.r(t),o.d(t,{default:()=>u});var n=o(93800),r=o(85715),a=o(19455),i=o(48602),l=(o(21265),o(50925),o(14746),o(47332)),s=o(75269),c=o(28473);let d=class extends(r.A.ClonableMixin(a.A)){constructor(e){super(e),this.type="local",this.origin=(0,c.vt)()}};(0,n._)([(0,l.e)({local:"local"},{readOnly:!0})],d.prototype,"type",void 0),(0,n._)([(0,i.MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],d.prototype,"origin",void 0),d=(0,n._)([(0,s.$)("esri.geometry.support.MeshLocalVertexSpace")],d);const u=d},57554:(e,t,o)=>{o.d(t,{t:()=>a});var n=o(73031),r=o(826);class a extends r.n{constructor(e,t){super(e,"vec3",n.c.Pass,((o,n,r)=>o.setUniform3fv(e,t(n,r))))}}},62240:(e,t,o)=>{function n(e,t,o,n){return{x:e,y:t,z:o,hasZ:null!=o,hasM:!1,spatialReference:n,type:"point"}}function r(e,t,o,n,r){e.x=t,e.y=o,e.z=n,e.hasZ=null!=n,e.spatialReference=r}o.d(t,{J:()=>r,T:()=>n})},73031:(e,t,o)=>{var n;o.d(t,{c:()=>n}),function(e){e[e.Bind=0]="Bind",e[e.Pass=1]="Pass",e[e.Draw=2]="Draw"}(n||(n={}))},74125:(e,t,o)=>{o.d(t,{B:()=>s});var n=o(62631),r=o(42198),a=o(50925),i=o(49959),l=o(34037);class s{constructor(e,t,o,n){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};this._mainMethod=t,this._transferLists=o,this._listeners=[],this._promise=(0,l.ho)(e,{...r,schedule:n}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,r.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>a.A.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e} worker: ${t}`)))}on(e,t){const o={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(o),this._connectListener(o),(0,r.hA)((()=>{o.removed=!0,(0,n.TF)(this._listeners,o),this._thread&&null!=o.threadHandle&&o.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,o){if(this._thread){const n=this._transferLists[e],r=n?n(t):[];return this._thread.invoke(e,t,{transferList:r,signal:o})}return this._promise?this._promise.then((()=>((0,i.throwIfAborted)(o),this.invokeMethod(e,t,o)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}},77520:(e,t,o)=>{o.d(t,{Cc:()=>c,Qo:()=>d,CC:()=>u,RF:()=>s});var n=o(88102),r=(o(21265),o(16804)),a=o(24646);var i=o(7757),l=o(6513);function s(e){return e&&e.enabled&&(function(e){return"extrude"===e.type}(e)||function(e){return"fill"===e.type}(e))&&null!=e.edges}function c(e,t){return d(function(e){return e&&e.enabled&&e.edges||null}(e),t)}function d(e,t){if(null==e)return null;const o=null!=e.color?(0,a.ci)(n.default.toUnitRGBA(e.color)):(0,a.fA)(0,0,0,0),i=(0,r.Lz)(e.size),s=(0,r.Lz)(e.extensionLength);switch(e.type){case"solid":return u({color:o,size:i,extensionLength:s,...t});case"sketch":return c={color:o,size:i,extensionLength:s,...t},{...h,...c,type:l.gP.Sketch};default:return}var c}function u(e){return{...f,...e,type:l.gP.Solid}}const f={color:(0,a.fA)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:i.x.OPAQUE,hasSlicePlane:!1},h={color:(0,a.fA)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:i.x.OPAQUE,hasSlicePlane:!1}},80203:(e,t,o)=>{o.d(t,{k:()=>a});var n=o(73031),r=o(826);class a extends r.n{constructor(e,t){super(e,"mat3",n.c.Pass,((o,n,r)=>o.setUniformMatrix3fv(e,t(n,r))))}}},81775:(e,t,o)=>{o.d(t,{o:()=>a});var n=o(73031),r=o(826);class a extends r.n{constructor(e,t){super(e,"sampler2D",n.c.Draw,((o,n,r)=>o.bindTexture(e,t(n,r))))}}},88242:(e,t,o)=>{o.d(t,{cz:()=>b,Sg:()=>h,B:()=>y,Hi:()=>x});var n=o(7951),r=o(15173),a=o(18498),i=o(96236),l=o(42162),s=o(21152),c=o(16878),d=o(73031),u=o(826);class f extends u.n{constructor(e,t){super(e,"int",d.c.Draw,((o,n,r)=>o.setUniform1i(e,t(n,r))))}}var h,m,p=o(81775),v=o(96122),g=o(22131);(m=h||(h={}))[m.Uniform=0]="Uniform",m[m.Varying=1]="Varying",m[m.COUNT=2]="COUNT";const x=429496.7296;function y(e,t){(0,r.U)(e/x*.5+.5,t)}function b(e,t){switch(t.componentData){case h.Varying:return function(e,t){const{vertex:o,fragment:n}=e;o.include(l.W),o.uniforms.add(new p.o("componentColorTex",(e=>e.componentParameters.texture.texture))),e.attributes.add(g.r.COMPONENTINDEX,"float"),e.varyings.add("vExternalColorMixMode","mediump float"),e.varyings.add("vExternalColor","vec4");const r=t.output===i.V.ObjectAndLayerIdColor;r&&e.varyings.add("vObjectAndLayerIdColor","vec4"),e.include(a.A),o.constants.add("stride","float",(0,v.E)()?3:2),o.code.add(c.H`vec2 getComponentTextureCoordinates(float componentIndex, float typeOffset) {
float index = componentIndex * stride + typeOffset;
float texSize = float(textureSize(componentColorTex, 0).x);
float coordX = mod(index, texSize);
float coordY = floor(index / texSize);
return vec2(coordX, coordY) + 0.5;
}`),o.code.add(c.H`
  vec4 _readComponentColor() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 0.0);
    return texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
   }

  float readElevationOffset() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 1.0);
    vec4 encodedElevation = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
    return uninterpolatedRGBAToFloat(encodedElevation) * ${c.H.float(x)};
  }

  ${r?c.H`
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
`),n.code.add(c.H`
  void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {
    externalColor = vExternalColor;
    externalColorMixMode = int(vExternalColorMixMode);
  }

  void outputObjectAndLayerIdColor() {
     ${r?c.H`fragColor = vObjectAndLayerIdColor;`:""}
  }
`)}(e,t);case h.Uniform:return function(e,t){const{vertex:o,fragment:n}=e;e.varyings.add("vExternalColor","vec4"),o.uniforms.add(new s.V("externalColor",(e=>e.componentParameters.externalColor))).code.add(c.H`float readElevationOffset() {
return 0.0;
}
void forwardObjectAndLayerIdColor() {}
vec4 forwardExternalColor(out bool castShadows) {
vExternalColor = externalColor;
castShadows = true;
return externalColor;
}`);const r=t.output===i.V.ObjectAndLayerIdColor;n.uniforms.add(new f("externalColorMixMode",(e=>e.componentParameters.externalColorMixMode))).code.add(c.H`
    void readExternalColor(out vec4 color, out int colorMixMode) {
      color = vExternalColor;
      colorMixMode = externalColorMixMode;
    }

    void outputObjectAndLayerIdColor() {
      ${(0,c.If)(r,"fragColor = vec4(0, 0, 0, 0);")}
    }
  `)}(e,t);case h.COUNT:return;default:(0,n.Xb)(t.componentData)}}},91018:(e,t,o)=>{o.d(t,{h:()=>a});var n=o(73031),r=o(826);class a extends r.n{constructor(e,t){super(e,"mat3",n.c.Draw,((o,n,r)=>o.setUniformMatrix3fv(e,t(n,r))))}}},91538:(e,t,o)=>{o.r(t),o.d(t,{destroyContext:()=>M,dracoDecompressPointCloudData:()=>p,filterObbsForModifications:()=>v,filterObbsForModificationsSync:()=>S,initialize:()=>I,interpretObbModificationResults:()=>E,process:()=>m,project:()=>y,setLegacySchema:()=>x,setModifications:()=>g,setModificationsSync:()=>A,test:()=>F,transformNormals:()=>b});var n=o(64682),r=o(93321),a=o(14967),i=o(55928),l=o(40753),s=o(48038),c=o(21772);function d(e){return(0,c.s)(`esri/libs/i3s/${e}`)}let u;var f=o(41237),h=o(26882);async function m(e){T=await N();const t=[e.geometryBuffer];return{result:R(T,e,t),transferList:t}}async function p(e){T=await N();const t=[e.geometryBuffer],{geometryBuffer:o}=e,n=o.byteLength,r=T._malloc(n),a=new Uint8Array(T.HEAPU8.buffer,r,n);a.set(new Uint8Array(o));const i=T.dracoDecompressPointCloudData(r,a.byteLength);if(T._free(r),i.error.length>0)throw new Error(`i3s.wasm: ${i.error}`);const l=i.featureIds?.length>0?i.featureIds.slice():null,s=i.positions.slice();return l&&t.push(l.buffer),t.push(s.buffer),{result:{positions:s,featureIds:l},transferList:t}}async function v(e){await N(),S(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function g(e){await N(),A(e)}async function x(e){T=await N(),T.setLegacySchema(e.context,e.jsonSchema)}async function y(e){const{localMatrix:t,origin:n,positions:l,vertexSpace:s}=e,c=r.default.fromJSON(e.inSpatialReference),d=r.default.fromJSON(e.outSpatialReference);let u;const[{projectBuffer:f},{initializeProjection:h}]=await Promise.all([Promise.resolve().then(o.bind(o,67093)),Promise.resolve().then(o.bind(o,96913))]);await h(c,d);const m=[0,0,0];if(!f(n,c,0,m,d,0))throw new Error("Failed to project");if("georeferenced"===s.type&&null==s.origin){if(u=new Float64Array(l.length),!f(l,c,0,u,d,0,u.length/3))throw new Error("Failed to project")}else{const e="georeferenced"===s.type?a.default.fromJSON(s):i.default.fromJSON(s),{projectMeshVertexPositions:n}=await Promise.all([o.e(76517),o.e(59177)]).then(o.bind(o,59177)),r=n({vertexAttributes:{position:l},transform:t?{localMatrix:t}:void 0,vertexSpace:e,spatialReference:c},d);if(!r)throw new Error("Failed to project");u=r}const p=u.length,[v,g,x]=m;for(let o=0;o<p;o+=3)u[o]-=v,u[o+1]-=g,u[o+2]-=x;return{result:{projected:u,original:l,projectedOrigin:m},transferList:[u.buffer,l.buffer]}}async function b(e){let{normalMatrix:t,normals:o}=e;const r=new Float32Array(o.length);return(0,l.b)(r,o,t),(0,n.or)(t)&&(0,l.n)(r,r),{result:{transformed:r,original:o},transferList:[r.buffer,o.buffer]}}function M(e){O(e)}let C,T;function A(e){if(!T)return;const t=e.modifications,o=T._malloc(8*t.length),n=new Float64Array(T.HEAPU8.buffer,o,t.length);for(let r=0;r<t.length;++r)n[r]=t[r];T.setModifications(e.context,o,t.length,e.isGeodetic),T._free(o)}function R(e,t,o){const{context:n,globalTrafo:r,mbs:a,obbData:i,elevationOffset:l,geometryBuffer:c,geometryDescriptor:d,indexToVertexProjector:u,vertexToRenderProjector:h}=t,m=e._malloc(c.byteLength),p=e._malloc(33*Float64Array.BYTES_PER_ELEMENT),v=new Uint8Array(e.HEAPU8.buffer,m,c.byteLength);v.set(new Uint8Array(c));const g=new Float64Array(e.HEAPU8.buffer,p,33);w(g,[NaN,NaN,NaN]);let x=g.byteOffset+3*g.BYTES_PER_ELEMENT,y=new Float64Array(g.buffer,x);w(y,r),x+=16*g.BYTES_PER_ELEMENT,y=new Float64Array(g.buffer,x),w(y,a),x+=4*g.BYTES_PER_ELEMENT,i&&(y=new Float64Array(g.buffer,x),w(y,i));const b=d,M={isDraco:!1,isLegacy:!1,color:t.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:t.needNormals&&t.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:t.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:t.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:b.featureIndex},C=e.process(n,!!t.obbData,m,v.byteLength,b,M,p,l,u,h,t.normalReferenceFrame);if(e._free(p),e._free(m),C.error.length>0)throw new Error(`i3s.wasm: ${C.error}`);if(C.discarded)return null;const T=C.componentOffsets.length>0?C.componentOffsets.slice():null,A=C.featureIds.length>0?C.featureIds.slice():null,R=C.anchorIds.length>0?Array.from(C.anchorIds):null,E=C.anchors.length>0?Array.from(C.anchors):null,S=C.interleavedVertedData.slice().buffer,O=C.indicesType===s.f.Int16?new Uint16Array(C.indices.buffer,C.indices.byteOffset,C.indices.byteLength/2).slice():new Uint32Array(C.indices.buffer,C.indices.byteOffset,C.indices.byteLength/4).slice(),I=C.positions.slice(),{buffer:N,byteOffset:F,byteLength:L}=C.positionIndices,P=C.positionIndicesType===s.f.Int16?new Uint16Array(N,F,L/2).slice():new Uint32Array(N,F,L/4).slice(),_=new f._b(t.layouts[0],S,O,C.hasColors,C.hasModifications,{data:I,indices:P});return A&&o.push(A.buffer),T&&o.push(T.buffer),o.push(S),o.push(O.buffer),o.push(I.buffer),o.push(P.buffer),new f.sQ(T,A,R,E,_,r,C.obb)}function E(e){return 0===e?h.Js.Unmodified:1===e?h.Js.PotentiallyModified:2===e?h.Js.Culled:h.Js.Unknown}function S(e){if(!T)return;const{context:t,buffer:o}=e,n=T._malloc(o.byteLength),r=o.byteLength/Float64Array.BYTES_PER_ELEMENT,a=new Float64Array(T.HEAPU8.buffer,n,r),i=new Float64Array(o);a.set(i),T.filterOBBs(t,n,r),i.set(a),T._free(n)}function O(e){T&&0===T.destroy(e)&&(T=null)}function w(e,t){for(let o=0;o<t.length;++o)e[o]=t[o]}async function I(){T||await N()}async function N(){return T||(T=await(C??=(u||(u=new Promise((e=>o.e(94561).then(o.bind(o,94561)).then((e=>e.i)).then((t=>{let{default:o}=t;const n=o({locateFile:d,onRuntimeInitialized:()=>e(n)});delete n.then})))).catch((e=>{throw e}))),u))),T}const F={transform:(e,t)=>T&&R(T,e,t),destroy:O}},95528:(e,t,o)=>{o.d(t,{H:()=>n});class n{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1/0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1/0;this.elevationRangeMin=e,this.elevationRangeMax=t}get elevationRangeValid(){return!Number.isNaN(this.elevationRangeMin)}invalidateElevationRange(){this.elevationRangeMin=NaN}expandElevationRangeValues(e,t){this.elevationRangeMin=Math.min(this.elevationRangeMin,e),this.elevationRangeMax=Math.max(this.elevationRangeMax,t)}expandElevationRange(e){this.elevationRangeMin=Math.min(this.elevationRangeMin,e.elevationRangeMin),this.elevationRangeMax=Math.max(this.elevationRangeMax,e.elevationRangeMax)}setElevationRange(e){this.elevationRangeMin=e.elevationRangeMin,this.elevationRangeMax=e.elevationRangeMax}}},96122:(e,t,o)=>{o.d(t,{E:()=>r});var n=o(21265);function r(){return!!(0,n.A)("enable-feature:objectAndLayerId-rendering")}},96236:(e,t,o)=>{var n;function r(e){return e===n.Shadow||e===n.ShadowHighlight||e===n.ShadowExcludeHighlight||e===n.ViewshedShadow}function a(e){return function(e){return p(e)||x(e)}(e)||e===n.Normal}function i(e){return g(e)||e===n.Normal}function l(e){return e===n.Highlight||e===n.ObjectAndLayerIdColor}function s(e){return c(e)||l(e)}function c(e){return e===n.Color}function d(e){return c(e)||y(e)}function u(e){return c(e)||e===n.ObjectAndLayerIdColor}function f(e){return d(e)||e===n.ObjectAndLayerIdColor}function h(e){return c(e)||e===n.Highlight}function m(e){return h(e)||x(e)}function p(e){return c(e)||l(e)}function v(e){return d(e)||l(e)}function g(e){return v(e)||x(e)}function x(e){return e===n.Depth}function y(e){return e===n.ColorEmission}o.d(t,{CL:()=>l,LG:()=>y,Mb:()=>v,PJ:()=>r,QG:()=>f,RN:()=>d,T2:()=>g,V:()=>n,XY:()=>a,_o:()=>c,aD:()=>m,dX:()=>p,eh:()=>x,i3:()=>s,iq:()=>i,zW:()=>u}),function(e){e[e.Color=0]="Color",e[e.ColorEmission=1]="ColorEmission",e[e.Depth=2]="Depth",e[e.Normal=3]="Normal",e[e.Shadow=4]="Shadow",e[e.ShadowHighlight=5]="ShadowHighlight",e[e.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",e[e.ViewshedShadow=7]="ViewshedShadow",e[e.Highlight=8]="Highlight",e[e.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",e[e.COUNT=10]="COUNT"}(n||(n={}))}}]);