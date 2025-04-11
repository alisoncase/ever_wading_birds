"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[9789],{3290:(e,t,o)=>{o.d(t,{a8:()=>p,eU:()=>f,kA:()=>g});var a=o(8601),r=o(7951),i=o(31238),n=o(39459),s=o(10894),l=o(59572),c=o(12796),d=o(11833),u=o(59139),m=o(4241),h=o(16878),v=o(64667);function p(e){e.constants.add("ambientBoostFactor","float",v.uH)}function f(e){e.uniforms.add(new m.U("lightingGlobalFactor",(e=>e.lighting.globalFactor)))}function g(e,t){const o=e.fragment;switch(e.include(n.n,t),t.pbrMode!==c.A9.Disabled&&e.include(l.c,t),e.include(i.W,t),e.include(d.p),o.code.add(h.H`
    const float GAMMA_SRGB = ${h.H.float(a.Tf)};
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===c.A9.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),p(o),f(o),(0,s.Gc)(o),o.code.add(h.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?h.H`normalize(vPosWorld)`:h.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,s.O4)(o),o.code.add(h.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case c.A9.Disabled:case c.A9.WaterOnIntegratedMesh:case c.A9.Water:e.include(s.Vt),o.code.add(h.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case c.A9.Normal:case c.A9.Schematic:o.code.add(h.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec4 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(h.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?o.uniforms.add(new u.o("hasFillLights",(e=>e.enableFillLights))):o.constants.add("hasFillLights","bool",!1),o.code.add(h.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.uniforms.add(new m.U("lightingSpecularStrength",(e=>e.lighting.mainLight.specularStrength)),new m.U("lightingEnvironmentStrength",(e=>e.lighting.mainLight.environmentStrength))).code.add(h.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(h.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : pow(_emission.rgb, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==c.A9.Schematic||t.hasColorTexture?h.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:h.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case c.A9.Simplified:case c.A9.TerrainWithWater:(0,s.Gc)(o),(0,s.O4)(o),o.code.add(h.H`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:(0,r.Xb)(t.pbrMode);case c.A9.COUNT:}}},3356:(e,t,o)=>{o.d(t,{R5:()=>M,V:()=>T,uD:()=>w});var a=o(28473),r=o(24646),i=o(96236),n=o(16213),s=o(8375),l=o(93003),c=o(16434),d=o(71723),u=o(60984),m=o(86836),h=o(85645),v=o(92804),p=o(14391),f=o(8652),g=o(92156),x=o(12723),b=o(12621);class w extends s.Zo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=p.mb,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=d.s2.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=a.uY,this.instancedDoublePrecision=!1,this.normalType=n.W.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=(0,a.CN)(.2,.2,.2),this.diffuse=(0,a.CN)(.8,.8,.8),this.externalColor=(0,r.fA)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,a.vt)(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=d.it.Less,this.textureAlphaMode=d.sf.Blend,this.textureAlphaCutoff=b.Q,this.textureAlphaPremultiplied=!1,this.renderOccluded=u.m$.Occlude,this.isDecoration=!1}}class T extends s.gy{constructor(){super(...arguments),this.origin=(0,a.vt)(),this.slicePlaneLocalOrigin=this.origin}}class M extends c.w{constructor(e,t){super(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:new l.$(f.D,(()=>o.e(61420).then(o.bind(o,61420))))),this.type="DefaultMaterialTechnique"}_makePipeline(e,t){const{oitPass:o,output:a,transparent:r,cullFace:n,customDepthTest:s,hasOccludees:l,enableOffset:c}=e,d=o===m.Y.NONE,u=o===m.Y.FrontFace;return(0,x.Ey)({blending:(0,i.RN)(a)&&r?(0,h.Yf)(o):null,culling:y(e)?(0,x.Xt)(n):null,depthTest:{func:(0,h.K_)(o,S(s))},depthWrite:(0,h.z5)(e),drawBuffers:a===i.V.Depth?{buffers:[g.Hr.NONE]}:(0,h.m6)(o,a),colorWrite:x.kn,stencilWrite:l?v.v0:null,stencilTest:l?t?v.a9:v.qh:null,polygonOffset:d||u?null:(0,h.aB)(c)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function S(e){return e===d.it.Lequal?g.MT.LEQUAL:g.MT.LESS}function y(e){return e.cullFace!==d.s2.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}},6775:(e,t,o)=>{o.d(t,{S:()=>h,b:()=>m});var a=o(37379),r=o(33273),i=o(93858),n=o(42403),s=o(16878),l=o(81775),c=o(67058),d=o(8118);const u=4;function m(){const e=new d.N5,t=e.fragment;e.include(a.c);const o=(u+1)/2,m=1/(2*o*o);return t.include(r.E),t.uniforms.add(new c.N("depthMap",(e=>e.depthTexture)),new l.o("tex",(e=>e.colorTexture)),new i.t("blurSize",(e=>e.blurSize)),new n.m("projScale",((e,t)=>{const o=t.camera.distance;return o>5e4?Math.max(0,e.projScale-(o-5e4)):e.projScale}))),t.code.add(s.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${s.H.float(m)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.main.add(s.H`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${s.H.int(u)}; r <= ${s.H.int(u)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}const h=Object.freeze(Object.defineProperty({__proto__:null,build:m},Symbol.toStringTag,{value:"Module"}))},7815:(e,t,o)=>{o.d(t,{G:()=>c,V:()=>u});var a=o(60548),r=o(24646),i=o(95206),n=o(35490),s=o(94409),l=o(16878);function c(e,t){const o=e.vertex;t.hasVerticalOffset?(u(o),t.hasScreenSizePerspective&&(e.include(i.Y6),(0,i.OH)(o),(0,n.yu)(e.vertex,t)),o.code.add(l.H`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?l.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:l.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?l.H`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:l.H`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):o.code.add(l.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const d=(0,r.vt)();function u(e){e.uniforms.add(new s.E("verticalOffset",((e,t)=>{const{minWorldLength:o,maxWorldLength:r,screenLength:i}=e.verticalOffset,n=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),s=t.camera.pixelRatio||1;return(0,a.s)(d,i*s,n,o,r)})))}},8375:(e,t,o)=>{o.d(t,{Mh:()=>u,Zo:()=>m,gy:()=>h});var a=o(7951),r=o(13473),i=o(24646),n=o(16213),s=o(4127),l=o(16878),c=o(91018),d=o(80203);function u(e,t){switch(t.normalType){case n.W.Attribute:case n.W.Compressed:e.include(n.Y,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new c.h("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new d.k("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),e.vertex.code.add(l.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case n.W.ScreenDerivative:e.vertex.code.add(l.H`void forwardNormal() {}`);break;default:(0,a.Xb)(t.normalType);case n.W.COUNT:}}class m extends s.dO{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,r.vt)()}}class h extends s.EM{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,r.vt)(),this.toMapSpace=(0,i.vt)()}}},8652:(e,t,o)=>{o.d(t,{D:()=>W,b:()=>V});var a=o(49443),r=o(79049),i=o(96236),n=o(75304),s=o(50366),l=o(67624),c=o(16213),d=o(84025),u=o(78751),m=o(69261),h=o(769),v=o(8375),p=o(7815),f=o(40117),g=o(61209),x=o(39459),b=o(3290),w=o(10894),T=o(86821),M=o(59572),S=o(12796),y=o(53769),C=o(61535),O=o(31819),z=o(75762),A=o(96757),_=o(71425),N=o(35490),I=o(57554),E=o(94409),H=o(42403),P=o(16878),G=o(67058),L=o(22131),F=o(14480),R=o(8118),D=o(12621);function V(e){const t=new R.N5,{vertex:o,fragment:V,varyings:W}=t,{output:j,normalType:B,offsetBackfaces:U,instancedColor:Y,spherical:q,receiveShadows:Z,snowCover:J,pbrMode:k,textureAlphaPremultiplied:X,instancedDoublePrecision:$,hasVertexColors:K,hasVertexTangents:Q,hasColorTexture:ee,hasNormalTexture:te,hasNormalTextureTransform:oe,hasColorTextureTransform:ae}=e;if((0,N.NB)(o,e),t.include(d.I),W.add("vpos","vec3"),t.include(z.A,e),t.include(l.B,e),t.include(p.G,e),t.include(O.q2,e),!(0,i.RN)(j))return t.include(f.E,e),t;t.include(O.Sx,e),t.include(O.MU,e),t.include(O.O1,e),t.include(O.QM,e),(0,N.yu)(o,e),t.include(c.Y,e),t.include(s.d,e);const re=B===c.W.Attribute||B===c.W.Compressed;return re&&U&&t.include(r.M),t.include(g.W,e),t.include(v.Mh,e),Y&&t.attributes.add(L.r.INSTANCECOLOR,"vec4"),W.add("vPositionLocal","vec3"),t.include(m.U,e),t.include(a.oD,e),t.include(u.K,e),t.include(h.c,e),o.uniforms.add(new E.E("externalColor",(e=>e.externalColor))),W.add("vcolorExt","vec4"),t.include(C.Z,e),o.main.add(P.H`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${(0,P.If)(Y,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${(0,P.If)(re,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${(0,P.If)(Q,"vTangent = dpTransformVertexTangent(tangent);")}
    gl_Position = transformPosition(proj, view, vpos);
    ${(0,P.If)(re&&U,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (vcolorExt.a < ${P.H.float(D.Q)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
  `),t.include(b.kA,e),t.include(x.n,e),t.include(A.S,e),t.include($?y.G:y.Bz,e),t.fragment.include(n.HQ,e),t.include(F.z,e),(0,N.yu)(V,e),V.uniforms.add(o.uniforms.get("localOrigin"),new I.t("ambient",(e=>e.ambient)),new I.t("diffuse",(e=>e.diffuse)),new H.m("opacity",(e=>e.opacity)),new H.m("layerOpacity",(e=>e.layerOpacity))),ee&&V.uniforms.add(new G.N("tex",(e=>e.texture))),t.include(S._Z,e),t.include(M.c,e),V.include(_.N),t.include(T.r,e),(0,b.a8)(V),(0,b.eU)(V),(0,w.O4)(V),V.main.add(P.H`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${ee?P.H`
            vec4 texColor = texture(tex, ${ae?"colorUV":"vuv0"});
            ${(0,P.If)(X,"texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);`:P.H`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${B===c.W.ScreenDerivative?P.H`vec3 normal = screenDerivativeNormal(vPositionLocal);`:P.H`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${Z?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":(0,P.If)(q,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${(0,P.If)(K,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
    float opacity_ = layerOpacity * mixExternalOpacity(${(0,P.If)(K,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
    ${te?`mat3 tangentSpace = computeTangentSpace(${Q?"normal":"normal, vpos, vuv0"});\n            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${oe?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
    vec3 normalGround = ${q?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

    ${(0,P.If)(J,P.H`
          float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${k===S.A9.Normal||k===S.A9.Schematic?P.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${(0,P.If)(J,P.H`mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);`)}
            vec4 emission = ${J?"mix(getEmissions(), vec4(0.0), snow)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:P.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOID(finalColor, vpos);
  `),t}const W=Object.freeze(Object.defineProperty({__proto__:null,build:V},Symbol.toStringTag,{value:"Module"}))},9789:(e,t,o)=>{o.d(t,{$U:()=>H});var a=o(89227),r=o(28473),i=o(51064),n=o(98876),s=o(96236),l=o(16213),c=o(82606),d=o(86821),u=o(12796),m=o(96122),h=o(71723),v=o(35694),p=o(60984),f=o(85645),g=o(30051),x=o(53801),b=o(22131),w=o(64863),T=o(19236),M=o(64003),S=o(3356),y=o(93800),C=o(69261),O=o(21484),z=o(51448);class A extends z.E{constructor(e,t){super(),this.spherical=e,this.doublePrecisionRequiresObfuscation=t,this.alphaDiscardMode=h.sf.Opaque,this.doubleSidedMode=d.W.None,this.pbrMode=u.A9.Disabled,this.cullFace=h.s2.None,this.normalType=l.W.Attribute,this.customDepthTest=h.it.Less,this.emissionSource=c.ZX.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===c.ZX.Texture||this.hasOcclusionTexture||this.hasNormalTexture?C.I.Default:C.I.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}(0,y._)([(0,O.W)({count:h.sf.COUNT})],A.prototype,"alphaDiscardMode",void 0),(0,y._)([(0,O.W)({count:d.W.COUNT})],A.prototype,"doubleSidedMode",void 0),(0,y._)([(0,O.W)({count:u.A9.COUNT})],A.prototype,"pbrMode",void 0),(0,y._)([(0,O.W)({count:h.s2.COUNT})],A.prototype,"cullFace",void 0),(0,y._)([(0,O.W)({count:l.W.COUNT})],A.prototype,"normalType",void 0),(0,y._)([(0,O.W)({count:h.it.COUNT})],A.prototype,"customDepthTest",void 0),(0,y._)([(0,O.W)({count:c.ZX.COUNT})],A.prototype,"emissionSource",void 0),(0,y._)([(0,O.W)()],A.prototype,"hasVertexColors",void 0),(0,y._)([(0,O.W)()],A.prototype,"hasSymbolColors",void 0),(0,y._)([(0,O.W)()],A.prototype,"hasVerticalOffset",void 0),(0,y._)([(0,O.W)()],A.prototype,"hasColorTexture",void 0),(0,y._)([(0,O.W)()],A.prototype,"hasMetallicRoughnessTexture",void 0),(0,y._)([(0,O.W)()],A.prototype,"hasOcclusionTexture",void 0),(0,y._)([(0,O.W)()],A.prototype,"hasNormalTexture",void 0),(0,y._)([(0,O.W)()],A.prototype,"hasScreenSizePerspective",void 0),(0,y._)([(0,O.W)()],A.prototype,"hasVertexTangents",void 0),(0,y._)([(0,O.W)()],A.prototype,"hasOccludees",void 0),(0,y._)([(0,O.W)()],A.prototype,"hasModelTransformation",void 0),(0,y._)([(0,O.W)()],A.prototype,"offsetBackfaces",void 0),(0,y._)([(0,O.W)()],A.prototype,"vvSize",void 0),(0,y._)([(0,O.W)()],A.prototype,"vvColor",void 0),(0,y._)([(0,O.W)()],A.prototype,"receiveShadows",void 0),(0,y._)([(0,O.W)()],A.prototype,"receiveAmbientOcclusion",void 0),(0,y._)([(0,O.W)()],A.prototype,"textureAlphaPremultiplied",void 0),(0,y._)([(0,O.W)()],A.prototype,"instanced",void 0),(0,y._)([(0,O.W)()],A.prototype,"instancedColor",void 0),(0,y._)([(0,O.W)()],A.prototype,"writeDepth",void 0),(0,y._)([(0,O.W)()],A.prototype,"transparent",void 0),(0,y._)([(0,O.W)()],A.prototype,"enableOffset",void 0),(0,y._)([(0,O.W)()],A.prototype,"terrainDepthTest",void 0),(0,y._)([(0,O.W)()],A.prototype,"cullAboveTerrain",void 0),(0,y._)([(0,O.W)()],A.prototype,"snowCover",void 0),(0,y._)([(0,O.W)()],A.prototype,"hasColorTextureTransform",void 0),(0,y._)([(0,O.W)()],A.prototype,"hasEmissionTextureTransform",void 0),(0,y._)([(0,O.W)()],A.prototype,"hasNormalTextureTransform",void 0),(0,y._)([(0,O.W)()],A.prototype,"hasOcclusionTextureTransform",void 0),(0,y._)([(0,O.W)()],A.prototype,"hasMetallicRoughnessTextureTransform",void 0);var _=o(93003),N=o(46476);class I extends S.R5{constructor(e,t){super(e,t,new _.$(N.R,(()=>o.e(17612).then(o.bind(o,17612))))),this.type="RealisticTreeTechnique"}}var E=o(12621);class H extends p.im{constructor(e,t){super(e,G),this.materialType="default",this.supportsEdges=!0,this.produces=new Map([[x.N.OPAQUE_MATERIAL,e=>((0,s.iq)(e)||(0,s.PJ)(e))&&!this.parameters.transparent],[x.N.TRANSPARENT_MATERIAL,e=>((0,s.iq)(e)||(0,s.PJ)(e))&&this.parameters.transparent&&this.parameters.writeDepth],[x.N.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>((0,s.XY)(e)||(0,s.PJ)(e))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=function(e){const t=(0,n.BP)().vec3f(b.r.POSITION);return e.normalType===l.W.Compressed?t.vec2i16(b.r.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(b.r.NORMAL),e.hasVertexTangents&&t.vec4f(b.r.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(b.r.UV0),e.hasVertexColors&&t.vec4u8(b.r.COLOR),e.hasSymbolColors&&t.vec4u8(b.r.SYMBOLCOLOR),(0,m.E)()&&t.vec4u8(b.r.OBJECTANDLAYERIDCOLOR),t}(this.parameters),this._configuration=new A(t.spherical,t.doublePrecisionRequiresObfuscation)}isVisibleForOutput(e){return e!==s.V.Shadow&&e!==s.V.ShadowExcludeHighlight&&e!==s.V.ShadowHighlight||this.parameters.castShadows}get visible(){const e=this.parameters;if(e.layerOpacity<E.Q)return!1;const{hasInstancedColor:t,hasVertexColors:o,hasSymbolColors:a,vvColor:r}=e,i=t||r||a,n="replace"===e.colorMixMode,s=e.opacity>=E.Q;if(o&&i)return n||s;const l=e.externalColor&&e.externalColor[3]>=E.Q;return o?n?l:s:i?n||s:n?l:s}get hasEmissions(){return!!this.parameters.emissiveTextureId||!(0,a.p)(this.parameters.emissiveFactor,r.uY)}getConfiguration(e,t){const o=this.parameters,{treeRendering:a,doubleSided:r,doubleSidedType:i}=o;return this._configuration.output=e,this._configuration.hasNormalTexture=!a&&!!o.normalTextureId,this._configuration.hasColorTexture=!!o.textureId,this._configuration.hasVertexTangents=!a&&o.hasVertexTangents,this._configuration.instanced=o.isInstanced,this._configuration.instancedDoublePrecision=o.instancedDoublePrecision,this._configuration.vvSize=!!o.vvSize,this._configuration.hasVerticalOffset=null!=o.verticalOffset,this._configuration.hasScreenSizePerspective=null!=o.screenSizePerspective,this._configuration.hasSlicePlane=o.hasSlicePlane,this._configuration.alphaDiscardMode=o.textureAlphaMode,this._configuration.normalType=a?l.W.Attribute:o.normalType,this._configuration.transparent=o.transparent,this._configuration.writeDepth=o.writeDepth,null!=o.customDepthTest&&(this._configuration.customDepthTest=o.customDepthTest),this._configuration.hasOccludees=t.hasOccludees,this._configuration.cullFace=o.hasSlicePlane?h.s2.None:o.cullFace,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.hasModelTransformation=!a&&null!=o.modelTransformation,this._configuration.hasVertexColors=o.hasVertexColors,this._configuration.hasSymbolColors=o.hasSymbolColors,this._configuration.doubleSidedMode=a?d.W.WindingOrder:r&&"normal"===i?d.W.View:r&&"winding-order"===i?d.W.WindingOrder:d.W.None,this._configuration.instancedColor=o.hasInstancedColor,(0,s.RN)(e)?(this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.receiveShadows=o.receiveShadows,this._configuration.receiveAmbientOcclusion=o.receiveAmbientOcclusion&&null!=t.ssao):(this._configuration.terrainDepthTest=!1,this._configuration.receiveShadows=this._configuration.receiveAmbientOcclusion=!1),this._configuration.vvColor=!!o.vvColor,this._configuration.textureAlphaPremultiplied=!!o.textureAlphaPremultiplied,this._configuration.pbrMode=o.usePBR?o.isSchematic?u.A9.Schematic:u.A9.Normal:u.A9.Disabled,this._configuration.hasMetallicRoughnessTexture=!a&&!!o.metallicRoughnessTextureId,this._configuration.emissionSource=a?c.ZX.None:null!=o.emissiveTextureId?c.ZX.Texture:o.usePBR?c.ZX.Value:c.ZX.None,this._configuration.hasOcclusionTexture=!a&&!!o.occlusionTextureId,this._configuration.offsetBackfaces=!(!o.transparent||!o.offsetTransparentBackfaces),this._configuration.oitPass=t.oitPass,this._configuration.enableOffset=t.camera.relativeElevation<f.xt,this._configuration.snowCover=function(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}(t),this._configuration.hasColorTextureTransform=!!o.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!o.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!o.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!o.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!o.metallicRoughnessTextureTransformMatrix,this._configuration}intersect(e,t,o,r,n,s){if(null!=this.parameters.verticalOffset){const e=o.camera;(0,a.i)(W,t[12],t[13],t[14]);let s=null;switch(o.viewingMode){case i.RT.Global:s=(0,a.n)(D,W);break;case i.RT.Local:s=(0,a.c)(D,R)}let l=0;const c=(0,a.d)(j,W,e.eye),d=(0,a.l)(c),u=(0,a.h)(c,c,1/d);let m=null;this.parameters.screenSizePerspective&&(m=(0,a.f)(s,u)),l+=(0,M.kE)(e,d,this.parameters.verticalOffset,m??0,this.parameters.screenSizePerspective),(0,a.h)(s,s,l),(0,a.q)(V,s,o.transform.inverseRotation),r=(0,a.d)(L,r,V),n=(0,a.d)(F,n,V)}(0,g.Uy)(e,o,r,n,(0,w.ou)(o.verticalOffset),s)}createGLMaterial(e){return new P(e)}createBufferWriter(){return new T.Z(this._vertexBufferLayout)}}class P extends v.m8{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});const t=this._material.parameters;this.updateTexture(t.textureId);const o=e.camera.viewInverseTransposeMatrix;return(0,a.i)(t.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.getTechnique(t.treeRendering?I:S.R5,e)}}class G extends S.uD{constructor(){super(...arguments),this.treeRendering=!1,this.hasVertexTangents=!1}}const L=(0,r.vt)(),F=(0,r.vt)(),R=(0,r.fA)(0,0,1),D=(0,r.vt)(),V=(0,r.vt)(),W=(0,r.vt)(),j=(0,r.vt)()},12738:(e,t,o)=>{o.d(t,{J:()=>i});var a=o(73031),r=o(826);class i extends r.n{constructor(e,t){super(e,"float",a.c.Draw,((o,a,r)=>o.setUniform1f(e,t(a,r))))}}},16213:(e,t,o)=>{o.d(t,{W:()=>a,Y:()=>l});var a,r,i=o(7951),n=o(16878),s=o(22131);function l(e,t){switch(t.normalType){case a.Compressed:e.attributes.add(s.r.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(n.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case a.Attribute:e.attributes.add(s.r.NORMAL,"vec3"),e.vertex.code.add(n.H`vec3 normalModel() {
return normal;
}`);break;case a.ScreenDerivative:e.fragment.code.add(n.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,i.Xb)(t.normalType);case a.COUNT:}}(r=a||(a={}))[r.Attribute=0]="Attribute",r[r.Compressed=1]="Compressed",r[r.ScreenDerivative=2]="ScreenDerivative",r[r.COUNT=3]="COUNT"},18498:(e,t,o)=>{o.d(t,{A:()=>i});var a=o(44873),r=o(16878);function i(e){e.vertex.code.add(r.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${r.H.int(a.k5.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${r.H.int(a.k5.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${r.H.int(a.k5.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${r.H.int(a.k5.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}},19639:(e,t,o)=>{o.d(t,{m:()=>i});var a=o(73031),r=o(826);class i extends r.n{constructor(e,t,o){super(e,"mat4",a.c.Pass,((o,a,r)=>o.setUniformMatrix4fv(e,t(a,r))),o)}}},22860:(e,t,o)=>{o.d(t,{L:()=>n});var a=o(96236),r=o(46855),i=o(16878);function n(e,t){switch(t.output){case a.V.Shadow:case a.V.ShadowHighlight:case a.V.ShadowExcludeHighlight:case a.V.ViewshedShadow:e.fragment.include(r.U),e.fragment.code.add(i.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}},31238:(e,t,o)=>{o.d(t,{W:()=>u});var a=o(89227),r=o(28473),i=o(60548),n=o(24646),s=o(12796),l=o(87824),c=o(34927),d=o(16878);function u(e,t){const o=e.fragment,r=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===r?(o.uniforms.add(new l.d("lightingAmbientSH0",(e=>{let{lighting:t}=e;return(0,a.i)(m,t.sh.r[0],t.sh.g[0],t.sh.b[0])}))),o.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===r?(o.uniforms.add(new c.I("lightingAmbientSH_R",(e=>{let{lighting:t}=e;return(0,i.s)(h,t.sh.r[0],t.sh.r[1],t.sh.r[2],t.sh.r[3])})),new c.I("lightingAmbientSH_G",(e=>{let{lighting:t}=e;return(0,i.s)(h,t.sh.g[0],t.sh.g[1],t.sh.g[2],t.sh.g[3])})),new c.I("lightingAmbientSH_B",(e=>{let{lighting:t}=e;return(0,i.s)(h,t.sh.b[0],t.sh.b[1],t.sh.b[2],t.sh.b[3])}))),o.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===r&&(o.uniforms.add(new l.d("lightingAmbientSH0",(e=>{let{lighting:t}=e;return(0,a.i)(m,t.sh.r[0],t.sh.g[0],t.sh.b[0])})),new c.I("lightingAmbientSH_R1",(e=>{let{lighting:t}=e;return(0,i.s)(h,t.sh.r[1],t.sh.r[2],t.sh.r[3],t.sh.r[4])})),new c.I("lightingAmbientSH_G1",(e=>{let{lighting:t}=e;return(0,i.s)(h,t.sh.g[1],t.sh.g[2],t.sh.g[3],t.sh.g[4])})),new c.I("lightingAmbientSH_B1",(e=>{let{lighting:t}=e;return(0,i.s)(h,t.sh.b[1],t.sh.b[2],t.sh.b[3],t.sh.b[4])})),new c.I("lightingAmbientSH_R2",(e=>{let{lighting:t}=e;return(0,i.s)(h,t.sh.r[5],t.sh.r[6],t.sh.r[7],t.sh.r[8])})),new c.I("lightingAmbientSH_G2",(e=>{let{lighting:t}=e;return(0,i.s)(h,t.sh.g[5],t.sh.g[6],t.sh.g[7],t.sh.g[8])})),new c.I("lightingAmbientSH_B2",(e=>{let{lighting:t}=e;return(0,i.s)(h,t.sh.b[5],t.sh.b[6],t.sh.b[7],t.sh.b[8])}))),o.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==s.A9.Normal&&t.pbrMode!==s.A9.Schematic||o.code.add(d.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const m=(0,r.vt)(),h=(0,n.vt)()},31819:(e,t,o)=>{o.d(t,{MU:()=>c,O1:()=>d,QM:()=>u,Sx:()=>l,q2:()=>s});var a=o(13473),r=o(69261),i=o(16878),n=o(80203);function s(e,t){t.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new n.k("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??a.zK))).code.add(i.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardColorUV(){}`)}function l(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==r.I.None?(e.varyings.add("normalUV","vec2"),e.vertex.uniforms.add(new n.k("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??a.zK))).code.add(i.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardNormalUV(){}`)}function c(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==r.I.None?(e.varyings.add("emissiveUV","vec2"),e.vertex.uniforms.add(new n.k("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??a.zK))).code.add(i.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardEmissiveUV(){}`)}function d(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==r.I.None?(e.varyings.add("occlusionUV","vec2"),e.vertex.uniforms.add(new n.k("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??a.zK))).code.add(i.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardOcclusionUV(){}`)}function u(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==r.I.None?(e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.uniforms.add(new n.k("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??a.zK))).code.add(i.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardMetallicRoughnessUV(){}`)}},39459:(e,t,o)=>{o.d(t,{n:()=>n});var a=o(16878),r=o(73712),i=o(99570);function n(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add(new r.x("ssaoTex",(e=>e.ssao?.getTexture()))),o.constants.add("blurSizePixelsInverse","float",1/i.s),o.code.add(a.H`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):o.code.add(a.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},40117:(e,t,o)=>{o.d(t,{E:()=>b});var a=o(49443),r=o(96236),i=o(75304),n=o(50366),s=o(16213),l=o(78731),c=o(69261),d=o(8375),u=o(22860),m=o(65228),h=o(75762),v=o(96757),p=o(35490),f=o(16878),g=o(67058),x=o(71723);function b(e,t){const{vertex:o,fragment:b}=e,w=t.hasColorTexture&&t.alphaDiscardMode!==x.sf.Opaque,{output:T,normalType:M,hasColorTextureTransform:S}=t;switch(T){case r.V.Depth:(0,p.NB)(o,t),e.include(n.d,t),e.fragment.include(i.HQ,t),e.include(c.U,t),w&&b.uniforms.add(new g.N("tex",(e=>e.texture))),o.main.add(f.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(v.S,t),b.main.add(f.H`
        discardBySlice(vpos);
        ${(0,f.If)(w,f.H`vec4 texColor = texture(tex, ${S?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);break;case r.V.Shadow:case r.V.ShadowHighlight:case r.V.ShadowExcludeHighlight:case r.V.ViewshedShadow:case r.V.ObjectAndLayerIdColor:(0,p.NB)(o,t),e.include(n.d,t),e.include(c.U,t),e.include(h.A,t),e.include(u.L,t),e.fragment.include(i.HQ,t),e.include(l.g,t),(0,a.xJ)(e),e.varyings.add("depth","float"),w&&b.uniforms.add(new g.N("tex",(e=>e.texture))),o.main.add(f.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(v.S,t),b.main.add(f.H`
        discardBySlice(vpos);
        ${(0,f.If)(w,f.H`vec4 texColor = texture(tex, ${S?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        ${T===r.V.ObjectAndLayerIdColor?f.H`outputObjectAndLayerIdColor();`:f.H`outputDepth(depth);`}`);break;case r.V.Normal:{(0,p.NB)(o,t),e.include(n.d,t),e.include(s.Y,t),e.include(d.Mh,t),e.include(c.U,t),e.include(h.A,t),w&&b.uniforms.add(new g.N("tex",(e=>e.texture))),M===s.W.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const a=M===s.W.Attribute||M===s.W.Compressed;o.main.add(f.H`
        vpos = getVertexInLocalOriginSpace();
        ${a?f.H`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:f.H`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),e.fragment.include(i.HQ,t),e.include(v.S,t),b.main.add(f.H`
        discardBySlice(vpos);
        ${(0,f.If)(w,f.H`vec4 texColor = texture(tex, ${S?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${M===s.W.ScreenDerivative?f.H`vec3 normal = screenDerivativeNormal(vPositionView);`:f.H`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case r.V.Highlight:(0,p.NB)(o,t),e.include(n.d,t),e.include(c.U,t),e.include(h.A,t),w&&b.uniforms.add(new g.N("tex",(e=>e.texture))),o.main.add(f.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.fragment.include(i.HQ,t),e.include(v.S,t),e.include(m.Q,t),b.main.add(f.H`
        discardBySlice(vpos);
        ${(0,f.If)(w,f.H`vec4 texColor = texture(tex, ${S?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}},44873:(e,t,o)=>{o.d(t,{Eb:()=>n,_j:()=>s,k5:()=>a});var a,r,i=o(64682);function n(e){switch(e){case"multiply":default:return a.Multiply;case"ignore":return a.Ignore;case"replace":return a.Replace;case"tint":return a.Tint}}function s(e,t,o){if(null==e||t===a.Ignore)return o[0]=255,o[1]=255,o[2]=255,void(o[3]=255);const r=(0,i.qE)(Math.round(e[3]*c),0,c),n=0===r||t===a.Tint?0:t===a.Replace?d:u;o[0]=(0,i.qE)(Math.round(e[0]*l),0,l),o[1]=(0,i.qE)(Math.round(e[1]*l),0,l),o[2]=(0,i.qE)(Math.round(e[2]*l),0,l),o[3]=r+n}(r=a||(a={}))[r.Multiply=1]="Multiply",r[r.Ignore=2]="Ignore",r[r.Replace=3]="Replace",r[r.Tint=4]="Tint";const l=255,c=85,d=c,u=2*c},46476:(e,t,o)=>{o.d(t,{R:()=>F,b:()=>L});var a=o(49443),r=o(79049),i=o(96236),n=o(75304),s=o(50366),l=o(67624),c=o(16213),d=o(84025),u=o(78751),m=o(69261),h=o(769),v=o(7815),p=o(40117),f=o(39459),g=o(3290),x=o(10894),b=o(59572),w=o(12796),T=o(53769),M=o(61535),S=o(75762),y=o(96757),C=o(71425),O=o(35490),z=o(57554),A=o(94409),_=o(42403),N=o(16878),I=o(67058),E=o(22131),H=o(14480),P=o(8118),G=o(12621);function L(e){const t=new P.N5,{vertex:o,fragment:L,varyings:F}=t,{output:R,offsetBackfaces:D,instancedColor:V,pbrMode:W,snowCover:j,spherical:B}=e,U=W===w.A9.Normal||W===w.A9.Schematic;if((0,O.NB)(o,e),t.include(d.I),F.add("vpos","vec3"),t.include(S.A,e),t.include(l.B,e),t.include(v.G,e),t.include(M.Z,e),(0,i.RN)(R)&&((0,O.yu)(t.vertex,e),t.include(c.Y,e),t.include(s.d,e),D&&t.include(r.M),V&&t.attributes.add(E.r.INSTANCECOLOR,"vec4"),F.add("vNormalWorld","vec3"),F.add("localvpos","vec3"),t.include(m.U,e),t.include(a.oD,e),t.include(u.K,e),t.include(h.c,e),o.uniforms.add(new A.E("externalColor",(e=>e.externalColor))),F.add("vcolorExt","vec4"),o.main.add(N.H`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${(0,N.If)(V,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      bool alphaCut = vcolorExt.a < ${N.H.float(G.Q)};
      vpos = getVertexInLocalOriginSpace();
      localvpos = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
      vpos = addVerticalOffset(vpos, localOrigin);
      vec4 basePosition = transformPosition(proj, view, vpos);

      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
      forwardLinearDepth();
      forwardTextureCoordinates();

      gl_Position = alphaCut ? vec4(1e38, 1e38, 1e38, 1.0) :
      ${(0,N.If)(D,"offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);","basePosition;")}
    `)),(0,i.RN)(R)){const{hasColorTexture:a,hasColorTextureTransform:r,receiveShadows:i}=e;t.include(g.kA,e),t.include(f.n,e),t.include(y.S,e),t.include(e.instancedDoublePrecision?T.G:T.Bz,e),t.fragment.include(n.HQ,e),t.include(H.z,e),(0,O.yu)(t.fragment,e),(0,x.Gc)(L),(0,g.a8)(L),(0,g.eU)(L),L.uniforms.add(o.uniforms.get("localOrigin"),o.uniforms.get("view"),new z.t("ambient",(e=>e.ambient)),new z.t("diffuse",(e=>e.diffuse)),new _.m("opacity",(e=>e.opacity)),new _.m("layerOpacity",(e=>e.layerOpacity))),a&&L.uniforms.add(new I.N("tex",(e=>e.texture))),t.include(w._Z,e),t.include(b.c,e),L.include(C.N),(0,x.O4)(L),L.main.add(N.H`
      discardBySlice(vpos);
      discardByTerrainDepth();
      vec4 texColor = ${a?`texture(tex, ${r?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${(0,N.If)(a,`${(0,N.If)(e.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${i?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":B?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?N.H`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:N.H`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${(0,N.If)(j,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${N.H`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${(0,N.If)(U,`vec3 normalGround = ${B?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${U?N.H`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${(0,N.If)(j,N.H`mrr = vec3(0.0, 1.0, 0.04);`)}
            vec4 emission = ${j?"vec4(0.0)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:N.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);`)}return t.include(p.E,e),t}const F=Object.freeze(Object.defineProperty({__proto__:null,build:L},Symbol.toStringTag,{value:"Module"}))},46855:(e,t,o)=>{o.d(t,{U:()=>r});var a=o(16878);function r(e){e.code.add(a.H`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}},49008:(e,t,o)=>{o.d(t,{Ir:()=>d});var a=o(32006),r=o(98080),i=o(60548),n=o(24646),s=o(15025),l=o(34927),c=o(16878);function d(e){e.fragment.uniforms.add(new l.I("projInfo",(e=>function(e){const t=e.projectionMatrix;return 0===t[11]?(0,i.s)(u,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,i.s)(u,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}(e.camera)))),e.fragment.uniforms.add(new s.E("zScale",(e=>0===e.camera.projectionMatrix[11]?(0,a.hZ)(m,0,1):(0,a.hZ)(m,1,0)))),e.fragment.code.add(c.H`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const u=(0,n.vt)();const m=(0,r.vt)()},53769:(e,t,o)=>{o.d(t,{Bz:()=>x,G:()=>g,QR:()=>f});var a=o(10382),r=o(28473),i=o(46855),n=o(34927),s=o(16878),l=o(68017),c=o(73031),d=o(826);class u extends d.n{constructor(e,t,o){super(e,"mat4",c.c.Draw,((o,a,r,i)=>o.setUniformMatrix4fv(e,t(a,r,i))),o)}}var m=o(19639),h=o(73712),v=o(20783);v.Y;class p extends v.Y{constructor(){super(...arguments),this.modelTransformation=a.zK}}class f extends p{constructor(){super(...arguments),this.origin=(0,r.vt)()}}function g(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new m.m("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),b(e))}function x(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new u("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),b(e))}function b(e){const t=e.fragment;t.include(i.U),t.uniforms.add(new h.x("shadowMap",(e=>e.shadowMap.depthTexture)),new l.W("numCascades",(e=>e.shadowMap.numCascades)),new n.I("cascadeDistances",(e=>e.shadowMap.cascadeDistances))).code.add(s.H`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}},56276:(e,t,o)=>{o.d(t,{S:()=>b,b:()=>f,g:()=>g});var a=o(32006),r=o(98080),i=o(37379),n=o(33273),s=o(49008),l=o(15025),c=o(61315),d=o(4241),u=o(42403),m=o(16878),h=o(67058),v=o(8118);const p=16;function f(){const e=new v.N5,t=e.fragment;return e.include(i.c),e.include(s.Ir),t.include(n.E),t.uniforms.add(new d.U("radius",(e=>g(e.camera)))).code.add(m.H`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(m.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new h.N("normalMap",(e=>e.normalTexture)),new h.N("depthMap",(e=>e.depthTexture)),new u.m("projScale",(e=>e.projScale)),new h.N("rnm",(e=>e.noiseTexture)),new c.G("rnmScale",((e,t)=>(0,a.hZ)(x,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new u.m("intensity",(e=>e.intensity)),new l.E("screenSize",(e=>(0,a.hZ)(x,e.camera.fullWidth,e.camera.fullHeight)))),e.outputs.add("fragOcclusion","float"),t.main.add(m.H`
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${m.H.int(p)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${m.H.int(p)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

      fragOcclusion = A;`),e}function g(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const x=(0,r.vt)(),b=Object.freeze(Object.defineProperty({__proto__:null,build:f,getRadius:g},Symbol.toStringTag,{value:"Module"}))},61209:(e,t,o)=>{o.d(t,{W:()=>p});var a=o(13473),r=o(98080),i=o(69261),n=o(99424),s=o(86821),l=o(61315),c=o(16878),d=o(80203),u=o(81775),m=o(67058),h=o(22131),v=o(73031);function p(e,t){const o=e.fragment;t.hasVertexTangents?(e.attributes.add(h.r.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===s.W.WindingOrder?o.code.add(c.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(c.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):o.code.add(c.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),t.textureCoordinateType!==i.I.None&&(e.include(n.r,t),o.uniforms.add(t.bindType===v.c.Pass?new m.N("normalTexture",(e=>e.textureNormal)):new u.o("normalTexture",(e=>e.textureNormal))),t.hasNormalTextureTransform&&(o.uniforms.add(new l.G("scale",(e=>e.scale??r.Un))),o.uniforms.add(new d.k("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??a.zK)))),o.code.add(c.H`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),t.hasNormalTextureTransform&&o.code.add(c.H`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),o.code.add(c.H`return tangentSpace * rawNormal;
}`))}},61315:(e,t,o)=>{o.d(t,{G:()=>i});var a=o(73031),r=o(826);class i extends r.n{constructor(e,t){super(e,"vec2",a.c.Pass,((o,a,r)=>o.setUniform2fv(e,t(a,r))))}}},67624:(e,t,o)=>{o.d(t,{B:()=>b});var a=o(67965),r=o(13473),i=o(10382),n=o(89227),s=o(28473),l=o(96236),c=o(31500),d=o(35490),u=o(87824),m=o(16878),h=o(80203),v=o(94320),p=o(22131),f=o(99416),g=o(20783);g.Y;const x=(0,r.vt)();function b(e,t){const o=t.hasModelTransformation,r=t.instancedDoublePrecision;o&&(e.vertex.uniforms.add(new v.X("model",(e=>e.modelTransformation??i.zK))),e.vertex.uniforms.add(new h.k("normalLocalOriginFromModel",(e=>((0,a.Ge)(x,e.modelTransformation??i.zK),x))))),t.instanced&&r&&(e.attributes.add(p.r.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(p.r.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(p.r.INSTANCEMODEL,"mat3"),e.attributes.add(p.r.INSTANCEMODELNORMAL,"mat3"));const s=e.vertex;r&&(s.include(c.u,t),s.uniforms.add(new u.d("viewOriginHi",(e=>(0,f.Zo)((0,n.i)(w,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),w))),new u.d("viewOriginLo",(e=>(0,f.jA)((0,n.i)(w,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),w))))),s.code.add(m.H`
    vec3 getVertexInLocalOriginSpace() {
      return ${o?r?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":r?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${r?m.H`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),s.code.add(m.H`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${o?r?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":r?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===l.V.Normal&&((0,d.S7)(s),s.code.add(m.H`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${o?r?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":r?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&s.code.add(m.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${o?r?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":r?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const w=(0,s.vt)()},71425:(e,t,o)=>{o.d(t,{N:()=>n});var a=o(44873),r=o(66652),i=o(16878);function n(e){e.include(r.a),e.code.add(i.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.H.int(a.k5.Multiply)}) {
        return allMixed;
      }
      if (mode == ${i.H.int(a.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.H.int(a.k5.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${i.H.int(a.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.H.int(a.k5.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},78751:(e,t,o)=>{o.d(t,{K:()=>l});var a=o(18498),r=o(16878),i=o(7683),n=o(22131),s=o(64003);function l(e,t){t.hasSymbolColors?(e.include(a.A),e.attributes.add(n.r.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(r.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new i.c("colorMixMode",(e=>s.Um[e.colorMixMode]))),e.vertex.code.add(r.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},79049:(e,t,o)=>{o.d(t,{M:()=>r});var a=o(16878);function r(e){e.vertex.code.add(a.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},86821:(e,t,o)=>{o.d(t,{W:()=>a,r:()=>s});var a,r,i=o(7951),n=o(16878);function s(e,t){const o=e.fragment;switch(o.code.add(n.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case a.None:o.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case a.View:o.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case a.WindingOrder:o.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,i.Xb)(t.doubleSidedMode);case a.COUNT:}}(r=a||(a={}))[r.None=0]="None",r[r.View=1]="View",r[r.WindingOrder=2]="WindingOrder",r[r.COUNT=3]="COUNT"},95206:(e,t,o)=>{o.d(t,{OH:()=>c,Y6:()=>s,pM:()=>l});var a=o(89227),r=o(28473),i=o(57554),n=o(16878);function s(e){e.vertex.code.add(n.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(n.H`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(n.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(n.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(n.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(n.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function l(e){e.uniforms.add(new i.t("screenSizePerspective",(e=>d(e.screenSizePerspective))))}function c(e){e.uniforms.add(new i.t("screenSizePerspectiveAlignment",(e=>d(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}function d(e){return(0,a.i)(u,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}const u=(0,r.vt)()},96757:(e,t,o)=>{o.d(t,{H:()=>c,S:()=>l});var a=o(12738),r=o(42403),i=o(16878),n=o(71723),s=o(12621);function l(e,t){d(e,t,new r.m("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function c(e,t){d(e,t,new a.J("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function d(e,t,o){const a=e.fragment,r=t.alphaDiscardMode,l=r===n.sf.Blend;r!==n.sf.Mask&&r!==n.sf.MaskBlend||a.uniforms.add(o),a.code.add(i.H`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${r===n.sf.Opaque?"color.a = 1.0;":`if (color.a < ${l?i.H.float(s.Q):"textureAlphaCutoff"}) {\n              discard;\n             } ${(0,i.If)(r===n.sf.Mask,"else { color.a = 1.0; }")}`}
    }
  `)}},99570:(e,t,o)=>{o.d(t,{n:()=>H,s:()=>E});var a=o(93800),r=o(64682),i=o(17741),n=o(79953),s=o(26988),l=o(48602),c=(o(21265),o(50925),o(14746),o(75269)),d=o(32006),u=o(3115),m=o(15500),h=o(62650),v=o(50508),p=o(93003),f=o(16434),g=o(6775),x=o(12723);class b extends f.w{constructor(e,t){super(e,t,new p.$(g.S,(()=>o.e(70295).then(o.bind(o,70295)))))}initializePipeline(){return(0,x.Ey)({colorWrite:x.kn})}}var w=o(98080),T=o(20783);class M extends T.Y{constructor(){super(...arguments),this.projScale=1}}class S extends M{constructor(){super(...arguments),this.intensity=1}}class y extends T.Y{}class C extends y{constructor(){super(...arguments),this.blurSize=(0,w.vt)()}}var O=o(56276);class z extends f.w{constructor(e,t){super(e,t,new p.$(O.S,(()=>o.e(6996).then(o.bind(o,6996)))))}initializePipeline(){return(0,x.Ey)({colorWrite:x.kn})}}var A=o(71723),_=o(92156),N=o(64177),I=o(77936);const E=2;let H=class extends h.default{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=u.InternalRenderCategory.SSAO,this.isEnabled=()=>!1,this._enableTime=(0,s.l5)(0),this._passParameters=new S,this._drawParameters=new C}initialize(){const e=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),(e=>e.charCodeAt(0))),t=new I.R;t.wrapMode=_.pF.CLAMP_TO_EDGE,t.pixelFormat=_.Ab.RGB,t.wrapMode=_.pF.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new N.g(this.renderingContext,t,e),this.techniques.precompile(z),this.techniques.precompile(b),this.addHandles((0,n.watch)((()=>this.isEnabled()),(()=>this._enableTime=(0,s.l5)(0))))}destroy(){this._passParameters.noiseTexture=(0,i.WD)(this._passParameters.noiseTexture)}render(e){const t=this.bindParameters,o=e.find((e=>{let{name:t}=e;return"normals"===t})),a=o?.getTexture(),i=o?.getTexture(_.nI),n=this.fboCache,l=t.camera,c=l.fullViewport[2],h=l.fullViewport[3],p=Math.round(c/E),f=Math.round(h/E),g=this.techniques.get(z),x=this.techniques.get(b);if(!g.compiled||!x.compiled)return this._enableTime=(0,s.l5)(performance.now()),this.requestRender(A.C7.UPDATE),n.acquire(p,f,u.InternalRenderCategory.SSAO,m.N.RED);0===this._enableTime&&(this._enableTime=(0,s.l5)(performance.now()));const w=this.renderingContext,T=this.view.qualitySettings.fadeDuration,M=l.relativeElevation,S=(0,r.qE)((v.b-M)/(v.b-v.O),0,1),y=T>0?Math.min(T,performance.now()-this._enableTime)/T:1,C=y*S;this._passParameters.normalTexture=a,this._passParameters.depthTexture=i,this._passParameters.projScale=1/l.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*P/(0,O.g)(l)**6*C;const N=n.acquire(c,h,"ssao input",m.N.RG);w.bindFramebuffer(N.fbo),w.setViewport(0,0,c,h),w.bindTechnique(g,t,this._passParameters,this._drawParameters),w.screen.draw();const I=n.acquire(p,f,"ssao blur",m.N.RED);w.bindFramebuffer(I.fbo),this._drawParameters.colorTexture=N.getTexture(),(0,d.hZ)(this._drawParameters.blurSize,0,E/h),w.bindTechnique(x,t,this._passParameters,this._drawParameters),w.setViewport(0,0,p,f),w.screen.draw(),N.release();const H=n.acquire(p,f,u.InternalRenderCategory.SSAO,m.N.RED);return w.bindFramebuffer(H.fbo),w.setViewport(0,0,c,h),w.setClearColor(1,1,1,0),w.clear(_.NV.COLOR),this._drawParameters.colorTexture=I.getTexture(),(0,d.hZ)(this._drawParameters.blurSize,E/c,0),w.bindTechnique(x,t,this._passParameters,this._drawParameters),w.setViewport(0,0,p,f),w.screen.draw(),w.setViewport4fv(l.fullViewport),I.release(),y<1&&this.requestRender(A.C7.UPDATE),H}};(0,a._)([(0,l.MZ)()],H.prototype,"consumes",void 0),(0,a._)([(0,l.MZ)()],H.prototype,"produces",void 0),(0,a._)([(0,l.MZ)({constructOnly:!0})],H.prototype,"isEnabled",void 0),H=(0,a._)([(0,c.$)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],H);const P=.5}}]);