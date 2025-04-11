"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[15659,71446,72286,75204,97684],{826:(e,t,o)=>{o.d(t,{n:()=>n});o(21265);var r=o(73031);class n{constructor(e,t,o,n){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(this.name=e,this.type=t,this.arraySize=i,this.bind={[r.c.Bind]:null,[r.c.Pass]:null,[r.c.Draw]:null},n)switch(o){case void 0:break;case r.c.Bind:this.bind[r.c.Bind]=n;break;case r.c.Pass:this.bind[r.c.Pass]=n;break;case r.c.Draw:this.bind[r.c.Draw]=n}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}},6513:(e,t,o)=>{o.d(t,{E7:()=>g,gP:()=>r,s0:()=>n,zP:()=>x});var r,n,i,l=o(88242),a=o(16213),s=o(31500),d=o(42162),c=o(8815),u=o(57554),p=o(16878),f=o(91018),y=o(80203),v=o(38950),m=o(81775),h=o(22131);function g(e,t){const o=e.vertex;o.include(d.W),e.include(a.Y,t);const{silhouette:r,legacy:n,spherical:i}=t;o.uniforms.add(new m.o("componentDataTex",(e=>e.componentDataTexture))),e.attributes.add(h.r.COMPONENTINDEX,"float");o.constants.add("lineWidthFractionFactor","float",8),o.constants.add("extensionLengthOffset","float",128),o.code.add(p.H`
    vec2 _componentTextureCoords(float componentIndex, float fieldOffset) {
      float fieldIndex = ${p.H.float(3)}  * componentIndex + fieldOffset;
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
      vec2 colorIndex = _componentTextureCoords(componentIndex, ${p.H.float(0)});
      vec2 otherIndex = _componentTextureCoords(componentIndex, ${p.H.float(1)});
      vec2 verticalOffsetIndex = _componentTextureCoords(float(componentIndex), ${p.H.float(2)} );
      vec3 normal = normalModel();
      vec3 normal2 = ${r?p.H`decompressNormal(normal2Compressed)`:p.H`normal`};

      vec4 colorValue = texelFetch(componentDataTex, ivec2(colorIndex), 0);
      vec4 otherValue = texelFetch(componentDataTex, ivec2(otherIndex), 0);
      float verticalOffset = uninterpolatedRGBAToFloat(texelFetch(componentDataTex, ivec2(verticalOffsetIndex), 0)) * ${p.H.float(l.Hi)};

      return ComponentData(
        vec4(colorValue.rgb, colorValue.a * otherValue.w), // otherValue.w stores separate opacity
        normal, normal2,
        otherValue.x * (255.0 / ${p.H.float(8)} ),
        otherValue.y * 255.0 - ${p.H.float(128)},
        -(otherValue.z * 255.0) + 0.5, // SOLID (=0/255) needs to be > 0.0, SKETCHY (=1/255) needs to be <= 0;
        verticalOffset
      );
    }
  `),n?o.code.add(p.H`vec3 _modelToWorldNormal(vec3 normal) {
return (model * vec4(normal, 0.0)).xyz;
}
vec3 _modelToViewNormal(vec3 normal) {
return (localView * model * vec4(normal, 0.0)).xyz;
}`):(o.uniforms.add(new f.h("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel))),o.code.add(p.H`vec3 _modelToWorldNormal(vec3 normal) {
return transformNormalGlobalFromModel * normal;
}`)),r?(e.attributes.add(h.r.NORMAL2COMPRESSED,"vec2"),o.code.add(p.H`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(normalize(data.normal + data.normal2));
}`)):o.code.add(p.H`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(data.normal);
}`),n?o.code.add(p.H`void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
worldPos = (model * vec4(modelPos, 1.0)).xyz;
viewPos = (localView * vec4(worldPos, 1.0)).xyz;
}`):(o.include(s.u,t),o.uniforms.add(new y.k("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new f.h("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new c.W("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL)),new c.W("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new u.t("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new u.t("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH))),o.code.add(p.H`
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
          vec3 vUp = ${i?"normalize(transformWorldFromModelTL + rotatedModelPosition);":"vec3(0.0, 0.0, 1.0);"}
          worldPos += verticalOffset * vUp;
        }

        viewPos = transformViewFromCameraRelativeRS * worldPos;
      }
    `)),o.uniforms.add(new v.F("transformProjFromView",(e=>e.camera.projectionMatrix))).code.add(p.H`vec4 projFromViewPosition(vec3 position) {
return transformProjFromView * vec4(position, 1.0);
}`),o.code.add(p.H`float calculateExtensionLength(float extensionLength, float lineLength) {
return extensionLength / (log2(max(1.0, 256.0 / lineLength)) * 0.2 + 1.0);
}`)}function x(e){return e===r.Sketch||e===r.Mixed}(i=r||(r={}))[i.Solid=0]="Solid",i[i.Sketch=1]="Sketch",i[i.Mixed=2]="Mixed",i[i.COUNT=3]="COUNT",function(e){e[e.REGULAR=0]="REGULAR",e[e.SILHOUETTE=1]="SILHOUETTE"}(n||(n={}))},7757:(e,t,o)=>{var r;o.d(t,{x:()=>r}),function(e){e[e.TRANSPARENT=0]="TRANSPARENT",e[e.OPAQUE=1]="OPAQUE"}(r||(r={}))},8815:(e,t,o)=>{o.d(t,{W:()=>i});var r=o(73031),n=o(826);class i extends n.n{constructor(e,t){super(e,"vec3",r.c.Draw,((o,r,n,i)=>o.setUniform3fv(e,t(r,n,i))))}}},13473:(e,t,o)=>{function r(){return[1,0,0,0,1,0,0,0,1]}function n(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]}function i(e,t,o,r,n,i,l,a,s){return[e,t,o,r,n,i,l,a,s]}o.d(t,{fA:()=>i,o8:()=>n,vt:()=>r,zK:()=>l});const l=[1,0,0,0,1,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:l,clone:n,create:r,createView:function(e,t){return new Float64Array(e,t,9)},fromValues:i},Symbol.toStringTag,{value:"Module"}))},15173:(e,t,o)=>{o.d(t,{T:()=>i,U:()=>n});var r=o(64682);function n(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const n=(0,r.qE)(e,0,s);for(let r=0;r<4;r++)t[o+r]=Math.floor(256*d(n*l[r]))}function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=0;for(let r=0;r<4;r++)o+=e[t+r]*a[r];return o}const l=[1,256,65536,16777216],a=[1/256,1/65536,1/16777216,1/4294967296],s=i(new Uint8ClampedArray([255,255,255,255]));function d(e){return e-Math.floor(e)}},15659:(e,t,o)=>{o.r(t),o.d(t,{default:()=>f});var r=o(93800),n=o(23060),i=o(19455),l=o(81933),a=o(50925),s=o(20620),d=o(48602),c=(o(21265),o(14746),o(75269));let u=class extends i.A{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};(0,r._)([(0,d.MZ)({type:String})],u.prototype,"fieldName",void 0),(0,r._)([(0,d.MZ)({type:String})],u.prototype,"modelName",void 0),(0,r._)([(0,d.MZ)({type:String})],u.prototype,"label",void 0),(0,r._)([(0,d.MZ)({type:Number})],u.prototype,"min",void 0),(0,r._)([(0,d.MZ)({type:Number})],u.prototype,"max",void 0),(0,r._)([(0,d.MZ)({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],u.prototype,"mostFrequentValues",void 0),(0,r._)([(0,d.MZ)({type:[Number]})],u.prototype,"subLayerIds",void 0),u=(0,r._)([(0,c.$)("esri.layers.support.BuildingSummaryStatistics.BuildingFieldStatistics")],u);let p=class extends(l.A.LoadableMixin(s.A.EsriPromiseMixin(i.A))){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(a.A.getLogger(this).error("building summary statistics are not loaded"),null)}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}async _fetchService(e){const t=(await(0,n.default)(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"})}};(0,r._)([(0,d.MZ)({constructOnly:!0,type:String})],p.prototype,"url",void 0),(0,r._)([(0,d.MZ)({readOnly:!0,type:[u],json:{read:{source:"summary"}}})],p.prototype,"fields",null),p=(0,r._)([(0,c.$)("esri.layers.support.BuildingSummaryStatistics")],p);const f=p},16213:(e,t,o)=>{o.d(t,{W:()=>r,Y:()=>s});var r,n,i=o(7951),l=o(16878),a=o(22131);function s(e,t){switch(t.normalType){case r.Compressed:e.attributes.add(a.r.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(l.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case r.Attribute:e.attributes.add(a.r.NORMAL,"vec3"),e.vertex.code.add(l.H`vec3 normalModel() {
return normal;
}`);break;case r.ScreenDerivative:e.fragment.code.add(l.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,i.Xb)(t.normalType);case r.COUNT:}}(n=r||(r={}))[n.Attribute=0]="Attribute",n[n.Compressed=1]="Compressed",n[n.ScreenDerivative=2]="ScreenDerivative",n[n.COUNT=3]="COUNT"},16878:(e,t,o)=>{function r(e){let t="";for(let o=0;o<(arguments.length<=1?0:arguments.length-1);o++)t+=e[o]+(o+1<1||arguments.length<=o+1?void 0:arguments[o+1]);return t+=e[e.length-1],t}function n(e,t){return e?t:arguments.length>2&&void 0!==arguments[2]?arguments[2]:""}o.d(t,{H:()=>r,If:()=>n}),function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(r)},18162:(e,t,o)=>{o.d(t,{F:()=>i});o(96913);var r=o(93321),n=o(31183);function i(e,t,o,r,i){return!(null==t||null==r||e.length<2)&&(l.x=e[0],l.y=e[1],l.z=e[2],l.spatialReference=t,(0,n.g)(l,o,r,i))}const l=(0,o(62240).T)(0,0,0,r.default.WGS84)},18498:(e,t,o)=>{o.d(t,{A:()=>i});var r=o(44873),n=o(16878);function i(e){e.vertex.code.add(n.H`
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
  `)}},19983:(e,t,o)=>{o.d(t,{E5:()=>a,JU:()=>l,Of:()=>n,Uk:()=>i,WK:()=>s,g7:()=>d,lO:()=>c,lQ:()=>u});var r=o(74719);function n(e){return e&&"function"==typeof e.highlight}function i(e){return e&&"function"==typeof e.maskOccludee}function l(e,t,o){return null==e||e>=o&&(0===t||e<=t)}function a(e,t){if(t&&e){const{minScale:o,maxScale:r}=e;if(s(o,r))return l(t,o,r)}return!0}function s(e,t){return null!=e&&e>0||null!=t&&t>0}function d(e){return!e?.minScale||!e.maxScale||e.minScale>=e.maxScale}function c(e){return null!=e&&"object"==typeof e&&"createQuery"in e&&"queryFeatures"in e&&"layer"in e&&"view"in e}function u(e,t,o){return new r.default("layerview:spatial-reference-incompatible",`The spatial reference of this ${e}${t?`(wkid:${t})`:""} is incompatible with the spatial reference of the view${o?`(wkid:${o})`:""}.`,{})}},20461:(e,t,o)=>{o.d(t,{A:()=>x});var r,n=o(93800),i=o(19455),l=o(82301),a=o(48602),s=(o(21265),o(50925),o(75269)),d=o(38387),c=o(97720),u=o(47332),p=o(54811);let f=r=class extends d.A{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new r({edges:(0,l.clone)(this.edges)})}};(0,n._)([(0,u.e)({wireFrame:"wire-frame"})],f.prototype,"type",void 0),(0,n._)([(0,a.MZ)(p.J)],f.prototype,"edges",void 0),f=r=(0,n._)([(0,s.$)("esri.layers.support.BuildingFilterModeWireFrame")],f);const y=f;var v,m=o(45687);const h={nonNullable:!0,types:{key:"type",base:d.A,typeMap:{solid:c.A,"wire-frame":y,"x-ray":m.A}},json:{read:e=>{switch(e?.type){case"solid":return c.A.fromJSON(e);case"wireFrame":return y.fromJSON(e);case"x-ray":return m.A.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let g=v=class extends i.A{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new c.A,this.title=""}clone(){return new v({filterExpression:this.filterExpression,filterMode:(0,l.clone)(this.filterMode),title:this.title})}};(0,n._)([(0,a.MZ)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"filterExpression",void 0),(0,n._)([(0,a.MZ)(h)],g.prototype,"filterMode",void 0),(0,n._)([(0,a.MZ)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"title",void 0),g=v=(0,n._)([(0,s.$)("esri.layers.support.BuildingFilterBlock")],g);const x=g},21152:(e,t,o)=>{o.d(t,{V:()=>i});var r=o(73031),n=o(826);class i extends n.n{constructor(e,t){super(e,"vec4",r.c.Draw,((o,r,n)=>o.setUniform4fv(e,t(r,n))))}}},22131:(e,t,o)=>{var r;function n(e){return e===r.POSITION}o.d(t,{b:()=>n,r:()=>r}),function(e){e.POSITION="position",e.NORMAL="normal",e.NORMALCOMPRESSED="normalCompressed",e.UV0="uv0",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.ROTATION="rotation",e.TANGENT="tangent",e.OFFSET="offset",e.PERSPECTIVEDIVIDE="perspectiveDivide",e.CENTEROFFSETANDDISTANCE="centerOffsetAndDistance",e.LENGTH="length",e.PREVPOSITION="prevPosition",e.NEXTPOSITION="nextPosition",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.INSTANCEMODELORIGINHI="instanceModelOriginHi",e.INSTANCEMODELORIGINLO="instanceModelOriginLo",e.INSTANCEMODEL="instanceModel",e.INSTANCEMODELNORMAL="instanceModelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMAL2COMPRESSED="normal2Compressed",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.START_UP="startUp",e.END_UP="endUp",e.EXTRUDE="extrude",e.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",e.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}(r||(r={}))},23331:(e,t,o)=>{o.r(t),o.d(t,{default:()=>v});var r,n=o(93800),i=o(89129),l=o(53598),a=o(21965),s=o(48602),d=(o(21265),o(50925),o(14746),o(75269)),c=o(17055),u=o(10456);const p={type:i.default,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:f}}},read:!1}};function f(e,t,o){if(e&&Array.isArray(e))return new i.default(e.map((e=>{const t=function(e){return"group"===e.layerType?y:c.default}(e);if(t){const r=new t;return r.read(e,o),r}return o?.messages&&e&&o.messages.push(new a.A("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:o})),null})))}let y=r=class extends u.default{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return(0,l.L)(this,(e=>r.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)}))))}};(0,n._)([(0,s.MZ)({type:["hide","show","hide-children"],json:{write:!0}})],y.prototype,"listMode",void 0),(0,n._)([(0,s.MZ)(p)],y.prototype,"sublayers",void 0),y=r=(0,n._)([(0,d.$)("esri.layers.buildingSublayers.BuildingGroupSublayer")],y),function(e){e.sublayersProperty=p,e.readSublayers=f,e.forEachSublayer=function e(t,o){t.forEach((t=>{o(t),"building-group"===t.type&&e(t.sublayers,o)}))}}(y||(y={}));const v=y},31183:(e,t,o)=>{o.d(t,{W:()=>a,g:()=>l});var r=o(28473),n=o(96913),i=o(67093);function l(e,t,o,r){if((0,n.canProjectWithoutEngine)(e.spatialReference,o)){s[0]=e.x,s[1]=e.y;const n=e.z;return s[2]=n??r??0,(0,i.projectBuffer)(s,e.spatialReference,0,t,o,0)}const l=(0,n.tryProjectWithZConversion)(e,o);return!!l&&(t[0]=l?.x,t[1]=l?.y,t[2]=l?.z??r??0,!0)}async function a(e,t,o,r,i){return await(0,n.initializeProjection)(e.spatialReference,o,null,i),l(e,t,o,r)}const s=(0,r.vt)()},31500:(e,t,o)=>{o.d(t,{u:()=>n});var r=o(16878);function n(e,t){let{code:o}=e;t.doublePrecisionRequiresObfuscation?o.add(r.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`):o.add(r.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}},38387:(e,t,o)=>{o.d(t,{A:()=>s});var r=o(93800),n=o(19455),i=o(48602),l=(o(21265),o(50925),o(14746),o(75269));let a=class extends n.A{};(0,r._)([(0,i.MZ)({readOnly:!0,json:{read:!1,write:{isRequired:!0}}})],a.prototype,"type",void 0),a=(0,r._)([(0,l.$)("esri.layers.support.BuildingFilterMode")],a);const s=a},38950:(e,t,o)=>{o.d(t,{F:()=>i});var r=o(73031),n=o(826);class i extends n.n{constructor(e,t){super(e,"mat4",r.c.Bind,((o,r)=>o.setUniformMatrix4fv(e,t(r))))}}},41317:(e,t,o)=>{o.d(t,{$7:()=>E,B:()=>w,Fo:()=>T,M7:()=>C,NN:()=>p,Q5:()=>A,Tq:()=>F,Up:()=>S,XF:()=>O,Ze:()=>h,bK:()=>a,bh:()=>u,id:()=>g,ky:()=>c,qt:()=>I,tW:()=>M,v9:()=>f,w7:()=>s,wF:()=>l,wS:()=>x,wz:()=>v,x:()=>y,xS:()=>b,ze:()=>d});var r=o(84190),n=o(34308);function i(e){return e?I:F}function l(e,t){return t?.mode?t.mode:i(e).mode}function a(e,t){return null!=t?t:i(e)}function s(e,t){return l(null==e||(e.hasZ??!1),t)}function d(e,t){return a(null==e||(e.hasZ??!1),t)}function c(e){const t=m(e);return s(e.geometry,t)}function u(e){const t=m(e),o=s(e.geometry,t),r=null!=t&&"on-the-ground"!==o?C(t):0,n=t?.featureExpressionInfo;return{mode:o,offset:r,featureExpressionInfo:n}}function p(e){return v(u(e))}function f(e){return v(e)||y(e)}function y(e){return"0"===e?.featureExpressionInfo?.expression}function v(e){if(!e)return!1;if("on-the-ground"===e.mode)return!1;const t=e?.featureExpressionInfo?e.featureExpressionInfo.expression:null;return!(!t||"0"===t)}function m(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function h(e,t){if(!e?.offset)return 0;const{offset:o,unit:n}=e;if("decimal-degrees"===n)return 0;const i="unknown"!==n&&n?n:"meters",l=(0,r.mq)(t);return l?(0,r.oU)(o,i,l):0}function g(e,t,o){if(!o?.mode)return;const r=e.hasZ?e.z:0,n=h(o,e.spatialReference);switch(o.mode){case"absolute-height":return r-n;case"on-the-ground":return 0;case"relative-to-ground":return r-((t.elevationProvider.getElevation(e.x,e.y,r,e.spatialReference,"ground")??0)+n);case"relative-to-scene":return r-((t.elevationProvider.getElevation(e.x,e.y,r,e.spatialReference,"scene")??0)+n)}}function x(e,t,o){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return T(e,t.x,t.y,t.hasZ?t.z:0,t.spatialReference,o,r)}function b(e,t,o,r){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return T(e,t[0],t[1],t.length>2?t[2]:0,o,r,n)}function T(e,t,o,r,n,i){let l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;if(null==i)return;const a=null!=l?l.mode:"absolute-height";if("on-the-ground"===a)return 0;const{absoluteZ:s}=A(t,o,r,n,e,i);return function(e,t,o,r,n,i,l,a){const s=h(l,n);switch(a){case"absolute-height":return e-s;case"relative-to-ground":return e-((i.elevationProvider.getElevation(t,o,r,n,"ground")??0)+s);case"relative-to-scene":return e-((i.elevationProvider.getElevation(t,o,r,n,"scene")??0)+s)}}(s,t,o,r,n,e,l,a)}function A(e,t,o,r,n,i){const l=h(i,r);switch(i.mode){case"absolute-height":return{absoluteZ:o+l,elevation:0};case"on-the-ground":{const o=n.elevationProvider.getElevation(e,t,0,r,"ground")??0;return{absoluteZ:o,elevation:o}}case"relative-to-ground":{const i=n.elevationProvider.getElevation(e,t,o,r,"ground")??0;return{absoluteZ:o+i+l,elevation:i}}case"relative-to-scene":{const i=n.elevationProvider.getElevation(e,t,o,r,"scene")??0;return{absoluteZ:o+i+l,elevation:i}}}}function S(e,t){if(null==t)return!1;const{mode:o}=t;return null!=o&&("scene"===e&&"relative-to-scene"===o||"ground"===e&&"absolute-height"!==o)}function w(e,t,o){return o&&o.mode!==t?`${e} only support ${t} elevation mode`:null}function E(e,t,o){return o?.mode===t?`${e} do not support ${t} elevation mode`:null}function M(e,t){return null!=t?.featureExpressionInfo&&"0"!==t.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function O(e,t){t&&e.warn(".elevationInfo=",t)}function C(e){return(e?.offset??0)*(0,n.Ao)(e?.unit)}const I={mode:"absolute-height",offset:0},F={mode:"on-the-ground",offset:null}},42162:(e,t,o)=>{o.d(t,{W:()=>n});var r=o(16878);function n(e){e.code.add(r.H`const float MAX_RGBA_FLOAT =
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
}`)}},44873:(e,t,o)=>{o.d(t,{Eb:()=>l,_j:()=>a,k5:()=>r});var r,n,i=o(64682);function l(e){switch(e){case"multiply":default:return r.Multiply;case"ignore":return r.Ignore;case"replace":return r.Replace;case"tint":return r.Tint}}function a(e,t,o){if(null==e||t===r.Ignore)return o[0]=255,o[1]=255,o[2]=255,void(o[3]=255);const n=(0,i.qE)(Math.round(e[3]*d),0,d),l=0===n||t===r.Tint?0:t===r.Replace?c:u;o[0]=(0,i.qE)(Math.round(e[0]*s),0,s),o[1]=(0,i.qE)(Math.round(e[1]*s),0,s),o[2]=(0,i.qE)(Math.round(e[2]*s),0,s),o[3]=n+l}(n=r||(r={}))[n.Multiply=1]="Multiply",n[n.Ignore=2]="Ignore",n[n.Replace=3]="Replace",n[n.Tint=4]="Tint";const s=255,d=85,c=d,u=2*d},45687:(e,t,o)=>{o.d(t,{A:()=>d});var r,n=o(93800),i=o(48602),l=(o(21265),o(50925),o(14746),o(75269)),a=o(38387);let s=r=class extends a.A{constructor(){super(...arguments),this.type="x-ray"}clone(){return new r}};(0,n._)([(0,i.MZ)({type:["x-ray"],readOnly:!0,json:{write:{isRequired:!0}}})],s.prototype,"type",void 0),s=r=(0,n._)([(0,l.$)("esri.layers.support.BuildingFilterModeXRay")],s);const d=s},49996:(e,t,o)=>{o.d(t,{D8:()=>i,TO:()=>n,d0:()=>l});var r=o(95011);async function n(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.popupTemplate;if(null==t)return[];const o=await t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:n}=t,{objectIdField:i,typeIdField:l,globalIdField:a,relationships:s}=e;if(o.includes("*"))return["*"];const d=n?(0,r.getFeatureEditFields)(e):[],c=(0,r.fixFields)(e.fieldsIndex,[...o,...d]);return l&&c.push(l),c&&i&&e.fieldsIndex?.has(i)&&!c.includes(i)&&c.push(i),c&&a&&e.fieldsIndex?.has(a)&&!c.includes(a)&&c.push(a),s&&s.forEach((t=>{const{keyField:o}=t;c&&o&&e.fieldsIndex?.has(o)&&!c.includes(o)&&c.push(o)})),c}function i(e,t){return e.popupTemplate?e.popupTemplate:null!=t&&t.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}function l(e,t){return null!=i(e,{defaultPopupTemplateEnabled:t})}},57554:(e,t,o)=>{o.d(t,{t:()=>i});var r=o(73031),n=o(826);class i extends n.n{constructor(e,t){super(e,"vec3",r.c.Pass,((o,r,n)=>o.setUniform3fv(e,t(r,n))))}}},62240:(e,t,o)=>{function r(e,t,o,r){return{x:e,y:t,z:o,hasZ:null!=o,hasM:!1,spatialReference:r,type:"point"}}function n(e,t,o,r,n){e.x=t,e.y=o,e.z=r,e.hasZ=null!=r,e.spatialReference=n}o.d(t,{J:()=>n,T:()=>r})},68199:(e,t,o)=>{o.r(t),o.d(t,{default:()=>D});var r=o(93800),n=o(89129),i=o(5100),l=o(74719),a=o(82301),s=o(53598),d=o(50925),c=o(59321),u=o(49959),p=o(43103),f=o(48602),y=(o(21265),o(14800)),v=o(75269),m=o(93321),h=o(57457),g=o(17055),x=o(23331),b=o(33979),T=o(9171),A=o(53367),S=o(8592),w=o(30528),E=o(75215),M=o(34787),O=o(39960),C=o(72286),I=o(15659),F=o(75238),R=o(41317);const N=n.default.ofType(C.default),_=(0,a.clone)(x.default.sublayersProperty),P=_.json?.origins;P&&(P["web-scene"]={type:[g.default],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},P["portal-item"]={type:[g.default],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let L=class extends((0,M.w6)((0,T.b)((0,S.q)((0,w.A)((0,E.j)((0,c.P)((0,A.d)((0,b.p)(h.default))))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new i.A({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this._allSublayerOverrides=null,this.filters=new N,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,t,o){const r=x.default.readSublayers(e,t,o);return x.default.forEachSublayer(r,(e=>e.layer=this)),this._allSublayerOverrides&&(function(e,t){t.forEach((t=>B(e,t)))}(r,this._allSublayerOverrides),this._allSublayerOverrides=null),r}write(e,t){return e=super.write(e,t),!t||"web-scene"!==t.origin&&"portal-item"!==t.origin||(this.sublayers?function(e,t,o){const r=[];x.default.forEachSublayer(e,(e=>{const t=e.write({},o);Object.keys(t).length>1&&r.push(t)})),r.length>0&&(t.sublayers=r)}(this.sublayers,e,t):this._allSublayerOverrides&&function(e,t,o){const r=o?.origin&&e.get(o.origin);r&&(t.sublayers=[],r.overrides.forEach((e=>{t.sublayers.push((0,a.clone)(e))})))}(this._allSublayerOverrides,e,t)),e}read(e,t){if(super.read(e,t),("web-scene"===t?.origin||"portal-item"===t?.origin)&&Array.isArray(e?.sublayers)){const o=function(e,t){const o=new Map;for(const r of e)null!=r&&"object"==typeof r&&"number"==typeof r.id?o.set(r.id,r):t.messages?.push(new l.default("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:r}));return{overrides:o,context:t}}(e.sublayers,t);this.sublayers?B(this.sublayers,o):(this._allSublayerOverrides??=new Map,this._allSublayerOverrides.set(t.origin,o))}}readSummaryStatistics(e,t){if("string"==typeof t.statisticsHRef){const e=(0,p.join)(this.parsedUrl?.path,t.statisticsHRef);return new I.default({url:e})}return null}set elevationInfo(e){null!=e&&"absolute-height"!==e.mode||this._set("elevationInfo",e),this._validateElevationInfo(e)}load(e){const t=null!=e?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(u.throwIfAbortError).then((()=>this._fetchService(t))).then((()=>this._fetchAssociatedFeatureService(t)));return this.addResolvingPromise(o),Promise.resolve(this)}loadAll(){return(0,s.g)(this,(e=>{x.default.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)})),this.summaryStatistics&&e(this.summaryStatistics)}))}async saveAs(e,t){return this._debouncedSaveOperations(M.Xh.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(M.Xh.SAVE,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new l.default("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}async _fetchAssociatedFeatureService(e){try{const{portalItem:t}=await(0,O.L)(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e});this.associatedFeatureServiceItem=t}catch(t){d.A.getLogger(this).warn("Associated feature service item could not be loaded",t)}}_validateElevationInfo(e){const t="Building scene layers";(0,R.XF)(d.A.getLogger(this),(0,R.B)(t,"absolute-height",e)),(0,R.XF)(d.A.getLogger(this),(0,R.tW)(t,e))}};function B(e,t){const{overrides:o,context:r}=t;x.default.forEachSublayer(e,(e=>e.read(o.get(e.id),r)))}(0,r._)([(0,f.MZ)({type:["BuildingSceneLayer"]})],L.prototype,"operationalLayerType",void 0),(0,r._)([(0,f.MZ)({readOnly:!0})],L.prototype,"allSublayers",void 0),(0,r._)([(0,f.MZ)(_)],L.prototype,"sublayers",void 0),(0,r._)([(0,y.w)("service","sublayers")],L.prototype,"readSublayers",null),(0,r._)([(0,f.MZ)({type:N,nonNullable:!0,json:{write:!0}})],L.prototype,"filters",void 0),(0,r._)([(0,f.MZ)({type:String,json:{write:!0}})],L.prototype,"activeFilterId",void 0),(0,r._)([(0,f.MZ)({readOnly:!0,type:I.default})],L.prototype,"summaryStatistics",void 0),(0,r._)([(0,y.w)("summaryStatistics",["statisticsHRef"])],L.prototype,"readSummaryStatistics",null),(0,r._)([(0,f.MZ)({type:[String],json:{read:!1}})],L.prototype,"outFields",void 0),(0,r._)([(0,f.MZ)(F.Fm)],L.prototype,"fullExtent",void 0),(0,r._)([(0,f.MZ)(F.fV)],L.prototype,"legendEnabled",void 0),(0,r._)([(0,f.MZ)({type:["show","hide","hide-children"]})],L.prototype,"listMode",void 0),(0,r._)([(0,f.MZ)((0,F.Qo)(m.default))],L.prototype,"spatialReference",void 0),(0,r._)([(0,f.MZ)(F.Yj)],L.prototype,"elevationInfo",null),(0,r._)([(0,f.MZ)({json:{read:!1},readOnly:!0})],L.prototype,"type",void 0),(0,r._)([(0,f.MZ)()],L.prototype,"associatedFeatureServiceItem",void 0),L=(0,r._)([(0,v.$)("esri.layers.BuildingSceneLayer")],L);const D=L},72286:(e,t,o)=>{o.r(t),o.d(t,{default:()=>O});var r=o(93800),n=o(89129),i=o(19455),l=o(82301),a=o(12130),s=o(48602),d=(o(21265),o(50925),o(75269));o(14746);let c=class extends i.A{constructor(){super(...arguments),this.type=null}};(0,r._)([(0,s.MZ)({type:String,readOnly:!0,json:{write:{isRequired:!0}}})],c.prototype,"type",void 0),c=(0,r._)([(0,d.$)("esri.layers.support.BuildingFilterAuthoringInfo")],c);const u=c;var p;let f=p=class extends i.A{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new p({filterType:this.filterType,filterValues:(0,l.clone)(this.filterValues)})}};(0,r._)([(0,s.MZ)({type:String,json:{write:{isRequired:!0}}})],f.prototype,"filterType",void 0),(0,r._)([(0,s.MZ)({type:[String],json:{write:{isRequired:!0}}})],f.prototype,"filterValues",void 0),f=p=(0,r._)([(0,d.$)("esri.layers.support.BuildingFilterAuthoringInfoType")],f);const y=f;var v;const m=n.default.ofType(y);let h=v=class extends i.A{clone(){return new v({filterTypes:(0,l.clone)(this.filterTypes)})}};(0,r._)([(0,s.MZ)({type:m,json:{write:{isRequired:!0}}})],h.prototype,"filterTypes",void 0),h=v=(0,r._)([(0,d.$)("esri.layers.support.BuildingFilterAuthoringInfoBlock")],h);const g=h;var x;const b=n.default.ofType(g);let T=x=class extends u{constructor(){super(...arguments),this.type="checkbox"}clone(){return new x({filterBlocks:(0,l.clone)(this.filterBlocks)})}};(0,r._)([(0,s.MZ)({type:["checkbox"]})],T.prototype,"type",void 0),(0,r._)([(0,s.MZ)({type:b,json:{write:{isRequired:!0}}})],T.prototype,"filterBlocks",void 0),T=x=(0,r._)([(0,d.$)("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],T);const A=T;var S,w=o(20461);const E=n.default.ofType(w.A);let M=S=class extends i.A{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=(0,a.lk)(),this.name=null}clone(){return new S({description:this.description,filterBlocks:(0,l.clone)(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:(0,l.clone)(this.filterAuthoringInfo)})}};(0,r._)([(0,s.MZ)({type:String,json:{write:!0}})],M.prototype,"description",void 0),(0,r._)([(0,s.MZ)({type:E,json:{write:{enabled:!0,isRequired:!0}}})],M.prototype,"filterBlocks",void 0),(0,r._)([(0,s.MZ)({types:{key:"type",base:u,typeMap:{checkbox:A}},json:{read:e=>"checkbox"===e?.type?A.fromJSON(e):null,write:!0}})],M.prototype,"filterAuthoringInfo",void 0),(0,r._)([(0,s.MZ)({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],M.prototype,"id",void 0),(0,r._)([(0,s.MZ)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],M.prototype,"name",void 0),M=S=(0,r._)([(0,d.$)("esri.layers.support.BuildingFilter")],M);const O=M},73031:(e,t,o)=>{var r;o.d(t,{c:()=>r}),function(e){e[e.Bind=0]="Bind",e[e.Pass=1]="Pass",e[e.Draw=2]="Draw"}(r||(r={}))},77520:(e,t,o)=>{o.d(t,{Cc:()=>d,Qo:()=>c,CC:()=>u,RF:()=>s});var r=o(88102),n=(o(21265),o(16804)),i=o(24646);var l=o(7757),a=o(6513);function s(e){return e&&e.enabled&&(function(e){return"extrude"===e.type}(e)||function(e){return"fill"===e.type}(e))&&null!=e.edges}function d(e,t){return c(function(e){return e&&e.enabled&&e.edges||null}(e),t)}function c(e,t){if(null==e)return null;const o=null!=e.color?(0,i.ci)(r.default.toUnitRGBA(e.color)):(0,i.fA)(0,0,0,0),l=(0,n.Lz)(e.size),s=(0,n.Lz)(e.extensionLength);switch(e.type){case"solid":return u({color:o,size:l,extensionLength:s,...t});case"sketch":return d={color:o,size:l,extensionLength:s,...t},{...f,...d,type:a.gP.Sketch};default:return}var d}function u(e){return{...p,...e,type:a.gP.Solid}}const p={color:(0,i.fA)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:l.x.OPAQUE,hasSlicePlane:!1},f={color:(0,i.fA)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:l.x.OPAQUE,hasSlicePlane:!1}},80203:(e,t,o)=>{o.d(t,{k:()=>i});var r=o(73031),n=o(826);class i extends n.n{constructor(e,t){super(e,"mat3",r.c.Pass,((o,r,n)=>o.setUniformMatrix3fv(e,t(r,n))))}}},81775:(e,t,o)=>{o.d(t,{o:()=>i});var r=o(73031),n=o(826);class i extends n.n{constructor(e,t){super(e,"sampler2D",r.c.Draw,((o,r,n)=>o.bindTexture(e,t(r,n))))}}},88242:(e,t,o)=>{o.d(t,{cz:()=>b,Sg:()=>f,B:()=>x,Hi:()=>g});var r=o(7951),n=o(15173),i=o(18498),l=o(96236),a=o(42162),s=o(21152),d=o(16878),c=o(73031),u=o(826);class p extends u.n{constructor(e,t){super(e,"int",c.c.Draw,((o,r,n)=>o.setUniform1i(e,t(r,n))))}}var f,y,v=o(81775),m=o(96122),h=o(22131);(y=f||(f={}))[y.Uniform=0]="Uniform",y[y.Varying=1]="Varying",y[y.COUNT=2]="COUNT";const g=429496.7296;function x(e,t){(0,n.U)(e/g*.5+.5,t)}function b(e,t){switch(t.componentData){case f.Varying:return function(e,t){const{vertex:o,fragment:r}=e;o.include(a.W),o.uniforms.add(new v.o("componentColorTex",(e=>e.componentParameters.texture.texture))),e.attributes.add(h.r.COMPONENTINDEX,"float"),e.varyings.add("vExternalColorMixMode","mediump float"),e.varyings.add("vExternalColor","vec4");const n=t.output===l.V.ObjectAndLayerIdColor;n&&e.varyings.add("vObjectAndLayerIdColor","vec4"),e.include(i.A),o.constants.add("stride","float",(0,m.E)()?3:2),o.code.add(d.H`vec2 getComponentTextureCoordinates(float componentIndex, float typeOffset) {
float index = componentIndex * stride + typeOffset;
float texSize = float(textureSize(componentColorTex, 0).x);
float coordX = mod(index, texSize);
float coordY = floor(index / texSize);
return vec2(coordX, coordY) + 0.5;
}`),o.code.add(d.H`
  vec4 _readComponentColor() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 0.0);
    return texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
   }

  float readElevationOffset() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 1.0);
    vec4 encodedElevation = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
    return uninterpolatedRGBAToFloat(encodedElevation) * ${d.H.float(g)};
  }

  ${n?d.H`
          void forwardObjectAndLayerIdColor() {
            vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 2.0);
            vObjectAndLayerIdColor = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
          }`:d.H`void forwardObjectAndLayerIdColor() {}`}

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
`),r.code.add(d.H`
  void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {
    externalColor = vExternalColor;
    externalColorMixMode = int(vExternalColorMixMode);
  }

  void outputObjectAndLayerIdColor() {
     ${n?d.H`fragColor = vObjectAndLayerIdColor;`:""}
  }
`)}(e,t);case f.Uniform:return function(e,t){const{vertex:o,fragment:r}=e;e.varyings.add("vExternalColor","vec4"),o.uniforms.add(new s.V("externalColor",(e=>e.componentParameters.externalColor))).code.add(d.H`float readElevationOffset() {
return 0.0;
}
void forwardObjectAndLayerIdColor() {}
vec4 forwardExternalColor(out bool castShadows) {
vExternalColor = externalColor;
castShadows = true;
return externalColor;
}`);const n=t.output===l.V.ObjectAndLayerIdColor;r.uniforms.add(new p("externalColorMixMode",(e=>e.componentParameters.externalColorMixMode))).code.add(d.H`
    void readExternalColor(out vec4 color, out int colorMixMode) {
      color = vExternalColor;
      colorMixMode = externalColorMixMode;
    }

    void outputObjectAndLayerIdColor() {
      ${(0,d.If)(n,"fragColor = vec4(0, 0, 0, 0);")}
    }
  `)}(e,t);case f.COUNT:return;default:(0,r.Xb)(t.componentData)}}},91018:(e,t,o)=>{o.d(t,{h:()=>i});var r=o(73031),n=o(826);class i extends n.n{constructor(e,t){super(e,"mat3",r.c.Draw,((o,r,n)=>o.setUniformMatrix3fv(e,t(r,n))))}}},96122:(e,t,o)=>{o.d(t,{E:()=>n});var r=o(21265);function n(){return!!(0,r.A)("enable-feature:objectAndLayerId-rendering")}},96236:(e,t,o)=>{var r;function n(e){return e===r.Shadow||e===r.ShadowHighlight||e===r.ShadowExcludeHighlight||e===r.ViewshedShadow}function i(e){return function(e){return v(e)||g(e)}(e)||e===r.Normal}function l(e){return h(e)||e===r.Normal}function a(e){return e===r.Highlight||e===r.ObjectAndLayerIdColor}function s(e){return d(e)||a(e)}function d(e){return e===r.Color}function c(e){return d(e)||x(e)}function u(e){return d(e)||e===r.ObjectAndLayerIdColor}function p(e){return c(e)||e===r.ObjectAndLayerIdColor}function f(e){return d(e)||e===r.Highlight}function y(e){return f(e)||g(e)}function v(e){return d(e)||a(e)}function m(e){return c(e)||a(e)}function h(e){return m(e)||g(e)}function g(e){return e===r.Depth}function x(e){return e===r.ColorEmission}o.d(t,{CL:()=>a,LG:()=>x,Mb:()=>m,PJ:()=>n,QG:()=>p,RN:()=>c,T2:()=>h,V:()=>r,XY:()=>i,_o:()=>d,aD:()=>y,dX:()=>v,eh:()=>g,i3:()=>s,iq:()=>l,zW:()=>u}),function(e){e[e.Color=0]="Color",e[e.ColorEmission=1]="ColorEmission",e[e.Depth=2]="Depth",e[e.Normal=3]="Normal",e[e.Shadow=4]="Shadow",e[e.ShadowHighlight=5]="ShadowHighlight",e[e.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",e[e.ViewshedShadow=7]="ViewshedShadow",e[e.Highlight=8]="Highlight",e[e.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",e[e.COUNT=10]="COUNT"}(r||(r={}))},97720:(e,t,o)=>{o.d(t,{A:()=>d});var r,n=o(93800),i=o(48602),l=(o(21265),o(50925),o(14746),o(75269)),a=o(38387);let s=r=class extends a.A{constructor(){super(...arguments),this.type="solid"}clone(){return new r}};(0,n._)([(0,i.MZ)({type:["solid"],readOnly:!0,json:{write:{isRequired:!0}}})],s.prototype,"type",void 0),s=r=(0,n._)([(0,l.$)("esri.layers.support.BuildingFilterModeSolid")],s);const d=s}}]);