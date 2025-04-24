"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[1303],{3115:(e,t,n)=>{n.r(t),n.d(t,{InternalRenderCategory:()=>i,RenderCategory:()=>r,fromRenderCoordinates:()=>d,renderCoordinateTransformAt:()=>u,toRenderCoordinates:()=>l});var r,i,o,a=n(10382),s=n(42276),c=n(67093);function l(e,t,n,r,i,o,a){return r=r||e.spatialReference,(0,c.projectBuffer)(t,r,n,i,e.renderCoordsHelper.spatialReference,o,a)?i:null}function d(e,t,n,r,i,o,a){return o=o||e.spatialReference,(0,c.projectBuffer)(t,e.renderCoordsHelper.spatialReference,n,r,o,i,a)?r:null}function u(e,t,n,r){return r||(r=(0,a.vt)()),n=n||e.spatialReference,(0,s.l)(n,t,r,e.renderCoordsHelper.spatialReference)?r:null}(o=r||(r={})).OPAQUE="opaque-color",o.TRANSPARENT="transparent-color",o.COMPOSITE="composite-color",o.FINAL="final-color",function(e){e.SSAO="ssao",e.LASERLINES="laserline-color",e.ANTIALIASING="aa-color",e.HIGHLIGHTS="highlight-color",e.MAGNIFIER="magnifier-color",e.OCCLUDED="occluded-color",e.VIEWSHED="viewshed-color",e.OPAQUE_ENVIRONMENT="opaque-environment-color",e.TRANSPARENT_ENVIRONMENT="transparent-environment-color",e.FOCUSAREA="focus-area"}(i||(i={}))},7683:(e,t,n)=>{n.d(t,{c:()=>o});var r=n(73031),i=n(826);class o extends i.n{constructor(e,t){super(e,"int",r.c.Pass,((n,r,i)=>n.setUniform1i(e,t(r,i))))}}},10894:(e,t,n)=>{n.d(t,{Gc:()=>o,O4:()=>a,Vt:()=>s});var r=n(87824),i=n(16878);function o(e){e.uniforms.add(new r.d("mainLightDirection",(e=>e.lighting.mainLight.direction)))}function a(e){e.uniforms.add(new r.d("mainLightIntensity",(e=>e.lighting.mainLight.intensity)))}function s(e){o(e.fragment),a(e.fragment),e.fragment.code.add(i.H`vec3 applyShading(vec3 shadingNormalWorld, float shadow) {
float dotVal = clamp(dot(shadingNormalWorld, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}},12258:(e,t,n)=>{n.d(t,{$p:()=>i,Qx:()=>a,_y:()=>o,e_:()=>s});var r=n(28473);class i{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,r.Ul)();this.intensity=e}}class o{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,r.Ul)(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,r.fA)(.57735,.57735,.57735);this.intensity=e,this.direction=t}}class a{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,r.Ul)(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,r.fA)(.57735,.57735,.57735),n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;this.intensity=e,this.direction=t,this.castShadows=n,this.specularStrength=i,this.environmentStrength=o}}class s{constructor(){this.r=[0],this.g=[0],this.b=[0]}}},12796:(e,t,n)=>{n.d(t,{A9:()=>r,_Z:()=>g});var r,i,o=n(99424),a=n(8815),s=n(57554),c=n(16878),l=n(81775),d=n(67058),u=n(35694),h=(n(14391),n(73031));(i=r||(r={}))[i.Disabled=0]="Disabled",i[i.Normal=1]="Normal",i[i.Schematic=2]="Schematic",i[i.Water=3]="Water",i[i.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",i[i.Simplified=5]="Simplified",i[i.TerrainWithWater=6]="TerrainWithWater",i[i.COUNT=7]="COUNT";u.NV;function g(e,t){const n=t.pbrMode,i=e.fragment;if(n!==r.Schematic&&n!==r.Disabled&&n!==r.Normal)return void i.code.add(c.H`void applyPBRFactors() {}`);if(n===r.Disabled)return void i.code.add(c.H`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(n===r.Schematic)return void i.code.add(c.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);const{hasMetallicRoughnessTexture:u,hasMetallicRoughnessTextureTransform:g,hasOcclusionTexture:f,hasOcclusionTextureTransform:m,bindType:p}=t;(u||f)&&e.include(o.r,t),i.code.add(c.H`vec3 mrr;
float occlusion;`),u&&i.uniforms.add(p===h.c.Pass?new d.N("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new l.o("texMetallicRoughness",(e=>e.textureMetallicRoughness))),f&&i.uniforms.add(p===h.c.Pass?new d.N("texOcclusion",(e=>e.textureOcclusion)):new l.o("texOcclusion",(e=>e.textureOcclusion))),i.uniforms.add(p===h.c.Pass?new s.t("mrrFactors",(e=>e.mrrFactors)):new a.W("mrrFactors",(e=>e.mrrFactors))),i.code.add(c.H`
    ${(0,c.If)(u,c.H`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${(0,c.If)(f,"void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${f?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${(0,c.If)(u,`applyMetallicRoughness(${g?"metallicRoughnessUV":"vuv0"});`)}
      ${(0,c.If)(f,`applyOcclusion(${m?"occlusionUV":"vuv0"});`)}
    }
  `)}},14391:(e,t,n)=>{n.d(t,{Bt:()=>c,Jr:()=>o,SY:()=>l,mb:()=>s,me:()=>a});var r=n(89227),i=n(28473);function o(e){let{normalTexture:t,metallicRoughnessTexture:n,metallicFactor:o,roughnessFactor:a,emissiveTexture:s,emissiveFactor:c,occlusionTexture:l}=e;return null==t&&null==n&&null==s&&(null==c||(0,r.p)(c,i.uY))&&null==l&&(null==a||1===a)&&(null==o||1===o)}function a(e){let{normalTexture:t,metallicRoughnessTexture:n,metallicFactor:o,roughnessFactor:a,emissiveTexture:s,emissiveFactor:c,occlusionTexture:l}=e;return null==t&&null==n&&null==s&&(null==c||(0,r.p)(c,i.uY))&&null==l&&(null==a||1===a)&&(null==o||1===o||0===o)}const s=(0,i.CN)(1,1,.5),c=(0,i.CN)(0,.6,.2),l=(0,i.CN)(0,1,.2)},15500:(e,t,n)=>{var r,i;n.d(t,{N:()=>r,z:()=>i}),function(e){e[e.RED=0]="RED",e[e.RG=1]="RG",e[e.RGBA4=2]="RGBA4",e[e.RGBA=3]="RGBA",e[e.RGBA_MIPMAP=4]="RGBA_MIPMAP",e[e.R16F=5]="R16F",e[e.RGBA16F=6]="RGBA16F"}(r||(r={})),function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(i||(i={}))},37379:(e,t,n)=>{n.d(t,{c:()=>o});var r=n(16878),i=n(22131);function o(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e.attributes.add(i.r.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.main.add(r.H`
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?r.H`uv = position * 0.5 + vec2(0.5);`:""}
  `)}},50508:(e,t,n)=>{n.d(t,{O:()=>r,b:()=>i});const r=3e5,i=5e5},59139:(e,t,n)=>{n.d(t,{o:()=>o});var r=n(73031),i=n(826);class o extends i.n{constructor(e,t){super(e,"bool",r.c.Bind,((n,r)=>n.setUniform1b(e,t(r))))}}},59572:(e,t,n)=>{n.d(t,{c:()=>s,f:()=>c});var r=n(16878);function i(e){const t=e.fragment.code;t.add(r.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(r.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(r.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var o=n(12796),a=n(11833);function s(e,t){const n=e.fragment.code;e.include(a.p),t.pbrMode!==o.A9.Normal&&t.pbrMode!==o.A9.Schematic&&t.pbrMode!==o.A9.Simplified&&t.pbrMode!==o.A9.TerrainWithWater||(n.add(r.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),n.add(r.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==o.A9.Normal&&t.pbrMode!==o.A9.Schematic||(e.include(i),n.add(r.H`struct PBRShadingInfo
{
float NdotV;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),n.add(r.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),n.add(r.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),n.add(r.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function c(e,t){const n=e.fragment.code;e.include(a.p),n.add(r.H`
  struct PBRShadingWater
  {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),n.add(r.H`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),n.add(r.H`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),n.add(r.H`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),n.add(r.H`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}},62650:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r=n(93800),i=n(6946),o=n(74719),a=n(79953),s=n(48602),c=n(75269),l=n(3115),d=n(71723);let u=class extends i.default{constructor(e){super(e),this.view=null,this.consumes={required:[]},this.produces=l.RenderCategory.COMPOSITE,this.requireGeometryDepth=!1,this._dirty=!0}initialize(){this.addHandles([(0,a.watch)((()=>this.view.ready),(e=>{e&&this.view._stage?.renderer.addRenderNode(this)}),a.initial)])}destroy(){this.view._stage?.renderer?.removeRenderNode(this)}precompile(){}render(){throw new o.default("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view._stage.renderView.renderingContext.gl}get techniques(){return this.view._stage.renderView.techniques}acquireOutputFramebuffer(){const e=this._frameBuffer?.getTexture()?.descriptor,t=this.view._stage.renderer.fboCache.acquire(e?.width??640,e?.height??480,this.produces);return t.fbo?.initializeAndBind(),t}bindRenderTarget(){return this._frameBuffer?.fbo?.initializeAndBind(),this._frameBuffer}requestRender(e){e===d.C7.UPDATE&&this.view._stage?.renderView.requestRender(e),this._dirty=!0}resetWebGLState(){this.renderingContext.resetState(),this.renderingContext.bindFramebuffer(this._frameBuffer?.fbo)}get fboCache(){return this.view._stage.renderer.fboCache}get bindParameters(){return this.renderContext.bind}get renderingContext(){return this.view._stage.renderView.renderingContext}get renderContext(){return this.view._stage?.renderer.renderContext}updateAnimation(e){return!!this._dirty&&(this._dirty=!1,!0)}doRender(e){this._frameBuffer=e.find((e=>{let{name:t}=e;return t===this.produces}));try{return this.render(e)}finally{this._frameBuffer=null}}};(0,r._)([(0,s.MZ)({constructOnly:!0})],u.prototype,"view",void 0),(0,r._)([(0,s.MZ)({constructOnly:!0})],u.prototype,"consumes",void 0),(0,r._)([(0,s.MZ)()],u.prototype,"produces",void 0),(0,r._)([(0,s.MZ)({readOnly:!0})],u.prototype,"techniques",null),u=(0,r._)([(0,c.$)("esri.views.3d.webgl.RenderNode")],u);const h=u},64667:(e,t,n)=>{n.d(t,{TA:()=>x,uH:()=>N});var r=n(64682),i=n(89227),o=n(28473),a=n(12258);function s(e,t,n){(n=n||e).length=e.length;for(let r=0;r<e.length;r++)n[r]=e[r]*t[r];return n}function c(e,t,n){(n=n||e).length=e.length;for(let r=0;r<e.length;r++)n[r]=e[r]*t;return n}function l(e,t,n){(n=n||e).length=e.length;for(let r=0;r<e.length;r++)n[r]=e[r]+t[r];return n}function d(e){return(e+1)*(e+1)}function u(e,t,n){const r=e[0],i=e[1],o=e[2],a=n||[];return a.length=d(t),t>=0&&(a[0]=.28209479177),t>=1&&(a[1]=.4886025119*r,a[2]=.4886025119*o,a[3]=.4886025119*i),t>=2&&(a[4]=1.09254843059*r*i,a[5]=1.09254843059*i*o,a[6]=.31539156525*(3*o*o-1),a[7]=1.09254843059*r*o,a[8]=.54627421529*(r*r-i*i)),a}function h(e,t){const n=d(e),r=t||{r:[],g:[],b:[]};r.r.length=r.g.length=r.b.length=n;for(let i=0;i<n;i++)r.r[i]=r.g[i]=r.b[i]=0;return r}function g(e,t){const n=function(e){return(0,r.qE)(Math.floor(Math.sqrt(e)-1),0,2)}(t.r.length);for(const r of e)(0,i.v)(_,r.direction),u(_,n,b),s(b,y),c(b,r.intensity[0],R),l(t.r,R),c(b,r.intensity[1],R),l(t.g,R),c(b,r.intensity[2],R),l(t.b,R);return t}function f(e,t){u(_,0,b);for(const n of e)t.r[0]+=b[0]*y[0]*n.intensity[0]*4*Math.PI,t.g[0]+=b[0]*y[0]*n.intensity[1]*4*Math.PI,t.b[0]+=b[0]*y[0]*n.intensity[2]*4*Math.PI;return t}const m=[],p=[],v=[],b=[0],R=[0],_=(0,o.vt)(),y=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];class H{constructor(){this.color=(0,o.vt)(),this.intensity=1}}class S{constructor(){this.direction=(0,o.vt)(),this.ambient=new H,this.diffuse=new H}}const N=.4;class x{constructor(){this._shOrder=2,this._legacy=new S,this.globalFactor=.5,this.noonFactor=.5,this._sphericalHarmonics=new a.e_,this._mainLight=new a.Qx((0,o.vt)(),(0,o.fA)(1,0,0),!1)}get legacy(){return this._legacy}get sh(){return this._sphericalHarmonics}get mainLight(){return this._mainLight}set(e){(function(e,t,n,r){h(t,r),(0,i.i)(n.intensity,0,0,0);let o=!1;const s=m,c=p,d=v;s.length=0,c.length=0,d.length=0;for(const l of e)l instanceof a.Qx&&!o?((0,i.c)(n.direction,l.direction),(0,i.c)(n.intensity,l.intensity),n.specularStrength=l.specularStrength,n.environmentStrength=l.environmentStrength,n.castShadows=l.castShadows,o=!0):l instanceof a.Qx||l instanceof a._y?s.push(l):l instanceof a.$p?c.push(l):l instanceof a.e_&&d.push(l);g(s,r),f(c,r);for(const i of d)l(r.r,i.r),l(r.g,i.g),l(r.b,i.b)})(e,this._shOrder,this._mainLight,this._sphericalHarmonics),(0,i.c)(this._legacy.direction,this._mainLight.direction);const t=1/Math.PI;this._legacy.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*t,this._legacy.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*t,this._legacy.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*t,(0,i.h)(this._legacy.diffuse.color,this._mainLight.intensity,t),(0,i.c)(C,this._legacy.diffuse.color),(0,i.h)(C,C,N*this.globalFactor),(0,i.g)(this._legacy.ambient.color,this._legacy.ambient.color,C)}copyFrom(e){this._sphericalHarmonics.r=Array.from(e.sh.r),this._sphericalHarmonics.g=Array.from(e.sh.g),this._sphericalHarmonics.b=Array.from(e.sh.b),(0,i.c)(this._mainLight.direction,e.mainLight.direction),(0,i.c)(this._mainLight.intensity,e.mainLight.intensity),this._mainLight.castShadows=e.mainLight.castShadows,this._mainLight.specularStrength=e.mainLight.specularStrength,this._mainLight.environmentStrength=e.mainLight.environmentStrength,this.globalFactor=e.globalFactor,this.noonFactor=e.noonFactor}lerpLighting(e,t,n){if((0,i.m)(this._mainLight.intensity,e.mainLight.intensity,t.mainLight.intensity,n),this._mainLight.environmentStrength=(0,r.Cc)(e.mainLight.environmentStrength,t.mainLight.environmentStrength,n),this._mainLight.specularStrength=(0,r.Cc)(e.mainLight.specularStrength,t.mainLight.specularStrength,n),(0,i.c)(this._mainLight.direction,t.mainLight.direction),this._mainLight.castShadows=t.mainLight.castShadows,this.globalFactor=(0,r.Cc)(e.globalFactor,t.globalFactor,n),this.noonFactor=(0,r.Cc)(e.noonFactor,t.noonFactor,n),e.sh.r.length===t.sh.r.length)for(let i=0;i<t.sh.r.length;i++)this._sphericalHarmonics.r[i]=(0,r.Cc)(e.sh.r[i],t.sh.r[i],n),this._sphericalHarmonics.g[i]=(0,r.Cc)(e.sh.g[i],t.sh.g[i],n),this._sphericalHarmonics.b[i]=(0,r.Cc)(e.sh.b[i],t.sh.b[i],n);else for(let r=0;r<t.sh.r.length;r++)this._sphericalHarmonics.r[r]=t.sh.r[r],this._sphericalHarmonics.g[r]=t.sh.g[r],this._sphericalHarmonics.b[r]=t.sh.b[r]}}const C=(0,o.vt)()},93858:(e,t,n)=>{n.d(t,{t:()=>o});var r=n(73031),i=n(826);class o extends i.n{constructor(e,t){super(e,"vec2",r.c.Draw,((n,r,i,o)=>n.setUniform2fv(e,t(r,i,o))))}}}}]);