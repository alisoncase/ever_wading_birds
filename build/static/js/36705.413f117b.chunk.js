"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[36705],{7972:(e,t,o)=>{o.d(t,{H:()=>L,b:()=>F,c:()=>N});var i=o(32006),r=o(98080),a=o(24646),s=o(23311),n=o(96236),l=o(75304),c=o(78731),d=o(67095),u=o(66195),p=o(10043),f=o(89659),h=o(65228),v=o(75762),g=o(66652),m=o(42162),S=o(95206),b=o(35490),C=o(61315),O=o(34927),A=o(21152),P=o(94409),x=o(4241),T=o(42403),E=o(16878),z=o(73712),y=o(67058),_=o(86836),I=o(22131),w=o(8118),D=o(12621);function F(e){const t=new w.N5,o=e.signedDistanceFieldEnabled;t.include(u.Q,e),t.vertex.include(l.rA,e);const{occlusionPass:r,output:F,oitPass:L}=e;if(r)return t.include(p.I,e),t;const{vertex:j,fragment:B}=t;t.include(S.Y6),t.include(v.A,e),t.include(c.g,e),t.include(f.y),B.include(m.W),B.include(g.a),t.varyings.add("vcolor","vec4"),t.varyings.add("vtc","vec2"),t.varyings.add("vsize","vec2");const V=F===n.V.Highlight,U=V&&e.occlusionTestEnabled;U&&t.varyings.add("voccluded","float"),j.uniforms.add(new O.I("viewport",(e=>e.camera.fullViewport)),new C.G("screenOffset",((e,t)=>(0,i.hZ)(H,2*e.screenOffset[0]*t.camera.pixelRatio,2*e.screenOffset[1]*t.camera.pixelRatio))),new C.G("anchorPosition",(e=>N(e))),new P.E("materialColor",(e=>e.color)),new T.m("materialRotation",(e=>e.rotation))),(0,b.Nz)(j),o&&(j.uniforms.add(new P.E("outlineColor",(e=>e.outlineColor))),B.uniforms.add(new P.E("outlineColor",(e=>R(e)?e.outlineColor:a.uY)),new T.m("outlineSize",(e=>R(e)?e.outlineSize:0)))),e.horizonCullingEnabled&&j.uniforms.add(new A.V("pointDistanceSphere",((e,t)=>{const o=t.camera.eye,i=e.origin;return(0,a.fA)(i[0]-o[0],i[1]-o[1],i[2]-o[2],s.$O.radius)}))),e.pixelSnappingEnabled&&j.include(d.K),e.hasScreenSizePerspective&&((0,S.pM)(j),(0,S.OH)(j)),e.debugDrawLabelBorder&&t.varyings.add("debugBorderCoords","vec4"),t.attributes.add(I.r.UV0,"vec2"),t.attributes.add(I.r.COLOR,"vec4"),t.attributes.add(I.r.SIZE,"vec2"),t.attributes.add(I.r.ROTATION,"float"),t.attributes.add(I.r.FEATUREATTRIBUTE,"vec4"),j.code.add(e.horizonCullingEnabled?E.H`bool behindHorizon(vec3 posModel) {
vec3 camToEarthCenter = pointDistanceSphere.xyz - localOrigin;
vec3 camToPos = pointDistanceSphere.xyz + posModel;
float earthRadius = pointDistanceSphere.w;
float a = dot(camToPos, camToPos);
float b = dot(camToPos, camToEarthCenter);
float c = dot(camToEarthCenter, camToEarthCenter) - earthRadius * earthRadius;
return  b > 0.0 && b < a && b * b  > a * c;
}`:E.H`bool behindHorizon(vec3 posModel) { return false; }`),j.main.add(E.H`
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      forwardObjectAndLayerIdColor();

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }

      if (behindHorizon(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }

      vec2 inputSize;
      ${(0,E.If)(e.hasScreenSizePerspective,E.H`
          inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
          vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,E.H`
          inputSize = size;
          vec2 screenOffsetScaled = screenOffset;`)}
      ${(0,E.If)(e.vvSize,E.H`inputSize *= vvScale(featureAttribute).xx;`)}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);

      ${(0,E.If)(e.occlusionTestEnabled,E.H`
      bool visible = testHUDVisibility(posProj);
      if (!visible) {
        vtc = vec2(0.0);
        ${(0,E.If)(e.debugDrawLabelBorder,"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);")}
        return;
      }`)}
      ${(0,E.If)(U,E.H`voccluded = visible ? 0.0 : 1.0;`)}
    `);const M=E.H`
      vec2 uv01 = floor(uv0);
      vec2 uv = uv0 - uv01;
      quadOffset.xy = (uv01 - anchorPosition) * 2.0 * combinedSize;

      ${(0,E.If)(e.hasRotation,E.H`
          float angle = radians(materialRotation + rotation);
          float cosAngle = cos(angle);
          float sinAngle = sin(angle);
          mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

          quadOffset.xy = rotate * quadOffset.xy;
        `)}

      quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,$=e.pixelSnappingEnabled?o?E.H`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:E.H`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:E.H`posProj += quadOffset;`;j.main.add(E.H`
    ${M}
    ${e.vvColor?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${(0,E.If)(F===n.V.ObjectAndLayerIdColor,E.H`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${E.H.float(D.Q)};
    ${(0,E.If)(o,`alphaDiscard = alphaDiscard && outlineColor.a < ${E.H.float(D.Q)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${$}
      gl_Position = posProj;
    }

    vtc = uv;

    ${(0,E.If)(e.debugDrawLabelBorder,E.H`debugBorderCoords = vec4(uv01, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),B.uniforms.add(new y.N("tex",(e=>e.texture))),e.occludedFragmentFade&&(B.uniforms.add(new z.x("depthMap",(e=>e.mainDepth))),B.uniforms.add(new x.U("occludedOpacity",(e=>e.hudOccludedFragmentOpacity))));const W=e.debugDrawLabelBorder?E.H`(isBorder > 0.0 ? 0.0 : ${E.H.float(D.Q)})`:E.H.float(D.Q),q=E.H`
    ${(0,E.If)(e.debugDrawLabelBorder,E.H`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    ${(0,E.If)(e.sampleSignedDistanceFieldTexelCenter,E.H`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;`,E.H`vec2 samplePos = vtc;`)}

    ${o?E.H`
      vec4 fillPixelColor = vcolor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgbaTofloat(texture(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${W} ||
          fillPixelColor.a + outlinePixelColor.a < ${E.H.float(D.Q)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${(0,E.If)(!V,E.H`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${W}) {
          discard;
        }

        ${(0,E.If)(!V,E.H`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:E.H`
          vec4 texColor = texture(tex, vtc, -0.5);
          if (texColor.a < ${W}) {
            discard;
          }
          ${(0,E.If)(!V,E.H`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${(0,E.If)(e.occludedFragmentFade&&!V,E.H`
        float zSample = texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x;
        if (zSample < gl_FragCoord.z) {
          fragColor *= occludedOpacity;
        }
        `)}

    ${(0,E.If)(!V&&e.debugDrawLabelBorder,E.H`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}
  `;switch(F){case n.V.Color:case n.V.ColorEmission:t.outputs.add("fragColor","vec4",0),F===n.V.ColorEmission&&t.outputs.add("fragEmission","vec4",1),L===_.Y.ColorAlpha&&t.outputs.add("fragAlpha","float",F===n.V.ColorEmission?2:1),B.main.add(E.H`
        ${q}
        ${(0,E.If)(L===_.Y.FrontFace,E.H`fragColor.rgb /= fragColor.a;`)}
        ${(0,E.If)(F===n.V.ColorEmission,E.H`fragEmission = vec4(0.0);`)}
        ${(0,E.If)(L===_.Y.ColorAlpha,E.H`fragAlpha = fragColor.a;`)}`);break;case n.V.ObjectAndLayerIdColor:B.main.add(E.H`
        ${q}
        outputObjectAndLayerIdColor();`);break;case n.V.Highlight:t.include(h.Q,e),B.main.add(E.H`
        ${q}
        outputHighlight(${(0,E.If)(U,E.H`voccluded == 1.0`,E.H`false`)});`)}return t}function R(e){return e.outlineColor[3]>0&&e.outlineSize>0}function N(e){return e.textureIsSignedDistanceField?(t=e.anchorPosition,o=e.distanceFieldBoundingBox,r=H,(0,i.hZ)(r,t[0]*(o[2]-o[0])+o[0],t[1]*(o[3]-o[1])+o[1])):(0,i.C)(H,e.anchorPosition),H;var t,o,r}const H=(0,r.vt)(),L=Object.freeze(Object.defineProperty({__proto__:null,build:F,calculateAnchorPosition:N},Symbol.toStringTag,{value:"Module"}))},10043:(e,t,o)=>{o.d(t,{I:()=>s});var i=o(67095),r=o(61535),a=o(16878);function s(e,t){const{vertex:o,fragment:s}=e;e.include(r.Z,t),o.include(i.K),o.main.add(a.H`vec4 posProjCenter;
if (dot(position, position) > 0.0) {
ProjectHUDAux projectAux;
vec4 posProj = projectPositionHUD(projectAux);
posProjCenter = alignToPixelCenter(posProj, viewport.zw);
forwardViewPosDepth(projectAux.posView);
vec3 vpos = projectAux.posModel;
if (rejectBySlice(vpos)) {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
} else {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
gl_Position = posProjCenter;
gl_PointSize = 1.0;`),s.main.add(a.H`fragColor = vec4(1);
if(discardByTerrainDepth()) {
fragColor.g = 0.5;
}`)}},46314:(e,t,o)=>{o.d(t,{D:()=>i});class i{constructor(){this.factor=new r,this.factorAlignment=new r}}class r{constructor(){this.scale=0,this.factor=0,this.minScaleFactor=0}}},66458:(e,t,o)=>{o.d(t,{U:()=>a});var i=o(92156),r=o(605);function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const o=e.stride;return Array.from(e.fields.keys()).map((i=>{const a=e.fields.get(i),n=a.constructor.ElementCount,l=s(a.constructor.ElementType),c=a.offset,d=a.optional?.glNormalized??!1;return new r._(i,n,l,c,o,d,t)}))}function s(e){const t=n[e];if(t)return t;throw new Error("BufferType not supported in WebGL")}const n={u8:i.pe.UNSIGNED_BYTE,u16:i.pe.UNSIGNED_SHORT,u32:i.pe.UNSIGNED_INT,i8:i.pe.BYTE,i16:i.pe.SHORT,i32:i.pe.INT,f32:i.pe.FLOAT}},99254:(e,t,o)=>{o.d(t,{R:()=>G});var i=o(64682),r=o(67965),a=o(13473),s=o(87752),n=o(10382),l=o(32006),c=o(98080),d=o(89227),u=o(28473),p=o(24646);function f(e){return function(e){return e instanceof Float32Array&&e.length>=16}(e)||function(e){return Array.isArray(e)&&e.length>=16}(e)}var h=o(90772),v=o(76517),g=o(82501),m=o(4794),S=o(98876),b=o(96236),C=o(66195),O=o(96122),A=o(35694),P=o(60984),x=o(53801),T=o(44375),E=o(89893),z=o(22131),y=o(46314),_=o(33050),I=o(64003),w=o(7972),D=o(93003),F=o(16434),R=o(86836),N=o(85645),H=o(92156),L=o(12723);class j extends F.w{constructor(e,t){super(e,t,new D.$(w.H,(()=>o.e(28612).then(o.bind(o,28612))))),this.primitiveType=t.occlusionPass?H.WR.POINTS:H.WR.TRIANGLES}initializePipeline(e){const{oitPass:t,hasPolygonOffset:o,draped:i,output:r,depthTestEnabled:a,occlusionPass:s}=e,n=t===R.Y.NONE,l=t===R.Y.ColorAlpha,c=r===b.V.Highlight,d=a&&!i&&!l&&!s&&!c;return(0,L.Ey)({blending:(0,b.RN)(r)?n?L.Os:(0,N.ez)(t):null,depthTest:a&&!i?{func:H.MT.LEQUAL}:null,depthWrite:d?L.Uy:null,drawBuffers:(0,N.m6)(t,r),colorWrite:L.kn,polygonOffset:o?B:null})}}const B={factor:0,units:-4};var V=o(93800),U=o(69261),M=o(82606),$=o(21484),W=o(51448);class q extends W.E{constructor(e){super(),this.spherical=e,this.screenCenterOffsetUnitsEnabled=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.vvSize=!1,this.vvColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.hasPolygonOffset=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.occlusionPass=!1,this.occludedFragmentFade=!1,this.objectAndLayerIdColorInstanced=!1,this.horizonCullingEnabled=!0,this.isFocused=!0,this.textureCoordinateType=U.I.None,this.emissionSource=M.ZX.None,this.discardInvisibleFragments=!0,this.hasVvInstancing=!1}}(0,V._)([(0,$.W)()],q.prototype,"screenCenterOffsetUnitsEnabled",void 0),(0,V._)([(0,$.W)()],q.prototype,"occlusionTestEnabled",void 0),(0,V._)([(0,$.W)()],q.prototype,"signedDistanceFieldEnabled",void 0),(0,V._)([(0,$.W)()],q.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),(0,V._)([(0,$.W)()],q.prototype,"vvSize",void 0),(0,V._)([(0,$.W)()],q.prototype,"vvColor",void 0),(0,V._)([(0,$.W)()],q.prototype,"hasVerticalOffset",void 0),(0,V._)([(0,$.W)()],q.prototype,"hasScreenSizePerspective",void 0),(0,V._)([(0,$.W)()],q.prototype,"hasRotation",void 0),(0,V._)([(0,$.W)()],q.prototype,"debugDrawLabelBorder",void 0),(0,V._)([(0,$.W)()],q.prototype,"hasPolygonOffset",void 0),(0,V._)([(0,$.W)()],q.prototype,"depthTestEnabled",void 0),(0,V._)([(0,$.W)()],q.prototype,"pixelSnappingEnabled",void 0),(0,V._)([(0,$.W)()],q.prototype,"draped",void 0),(0,V._)([(0,$.W)()],q.prototype,"terrainDepthTest",void 0),(0,V._)([(0,$.W)()],q.prototype,"cullAboveTerrain",void 0),(0,V._)([(0,$.W)()],q.prototype,"occlusionPass",void 0),(0,V._)([(0,$.W)()],q.prototype,"occludedFragmentFade",void 0),(0,V._)([(0,$.W)()],q.prototype,"objectAndLayerIdColorInstanced",void 0),(0,V._)([(0,$.W)()],q.prototype,"horizonCullingEnabled",void 0),(0,V._)([(0,$.W)()],q.prototype,"isFocused",void 0);var Y=o(12621);class G extends P.im{constructor(e,t){super(e,ge),this.produces=new Map([[x.N.HUD_MATERIAL,e=>(0,b.Mb)(e)&&!this.parameters.drawAsLabel],[x.N.LABEL_MATERIAL,e=>(0,b.Mb)(e)&&this.parameters.drawAsLabel],[x.N.OCCLUSION_PIXELS,()=>this.parameters.occlusionTest],[x.N.DRAPED_MATERIAL,e=>this.parameters.draped&&(0,b.Mb)(e)]]),this._visible=!0,this._configuration=new q(t)}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled="screen"===this.parameters.centerOffsetUnits,this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=this.parameters.draped,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.hasRotation=this.parameters.hasRotation,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.occlusionPass=t.slot===x.N.OCCLUSION_PIXELS,this._configuration.occludedFragmentFade=this.parameters.occludedFragmentFade,this._configuration.horizonCullingEnabled=this.parameters.horizonCullingEnabled,this._configuration.isFocused=this.parameters.isFocused,this._configuration.depthTestEnabled=this.parameters.depthEnabled||t.slot===x.N.OCCLUSION_PIXELS,(0,b.RN)(e)&&(this._configuration.debugDrawLabelBorder=!!m.b.LABELS_SHOW_BORDER),this._configuration.oitPass=t.oitPass,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration}intersect(e,t,o,i,a,n){const{options:{selectionMode:l,hud:c,excludeLabels:p},point:f,camera:h}=o,{parameters:v}=this;if(!l||!c||p&&v.isLabel||!e.visible||!f)return;const{scaleX:g,scaleY:m}=this._getScreenScale(e,h.pixelRatio);(0,r.z0)(ae,t),e.attributes.has(z.r.FEATUREATTRIBUTE)&&function(e){const t=e[0],o=e[1],i=e[2],r=e[3],a=e[4],s=e[5],n=e[6],l=e[7],c=e[8],d=1/Math.sqrt(t*t+o*o+i*i),u=1/Math.sqrt(r*r+a*a+s*s),p=1/Math.sqrt(n*n+l*l+c*c);e[0]=t*d,e[1]=o*d,e[2]=i*d,e[3]=r*u,e[4]=a*u,e[5]=s*u,e[6]=n*p,e[7]=l*p,e[8]=c*p}(ae);const S=e.attributes.get(z.r.POSITION),b=e.attributes.get(z.r.SIZE),C=e.attributes.get(z.r.NORMAL),O=e.attributes.get(z.r.ROTATION),A=e.attributes.get(z.r.CENTEROFFSETANDDISTANCE);(0,E.vA)(S.size>=3);const P=(0,w.c)(v),x="screen"===this.parameters.centerOffsetUnits;for(let r=0;r<S.data.length/S.size;r++){const e=r*S.size;(0,d.i)(J,S.data[e],S.data[e+1],S.data[e+2]),(0,d.t)(J,J,t),(0,d.t)(J,J,h.viewMatrix);const i=r*A.size;if((0,d.i)(le,A.data[i],A.data[i+1],A.data[i+2]),!x&&(J[0]+=le[0],J[1]+=le[1],0!==le[2])){const e=le[2];(0,d.n)(le,J),(0,d.d)(J,J,(0,d.h)(le,le,e))}const a=r*C.size;if((0,d.i)(K,C.data[a],C.data[a+1],C.data[a+2]),Q(K,ae,h,ue),this._applyVerticalOffsetTransformationView(J,ue,h,X),h.applyProjection(J,ee),ee[0]>-1){x&&(le[0]||le[1])&&(ee[0]+=le[0]*h.pixelRatio,0!==le[1]&&(ee[1]+=(0,T.m0)(le[1],X.factorAlignment)*h.pixelRatio),h.unapplyProjection(ee,J)),ee[0]+=this.parameters.screenOffset[0]*h.pixelRatio,ee[1]+=this.parameters.screenOffset[1]*h.pixelRatio,ee[0]=Math.floor(ee[0]),ee[1]=Math.floor(ee[1]);const e=r*b.size;he[0]=b.data[e],he[1]=b.data[e+1],(0,T.MD)(he,X.factor,he);const t=pe*h.pixelRatio;let i=0;v.textureIsSignedDistanceField&&(i=Math.min(v.outlineSize,.5*he[0])*h.pixelRatio/2),he[0]*=g,he[1]*=m;const a=r*O.size,l=v.rotation+O.data[a];if(Z(f,ee[0],ee[1],he,t,i,l,v,P)){const e=o.ray;if((0,d.t)(oe,J,(0,s.B8)(ne,h.viewMatrix)),ee[0]=f[0],ee[1]=f[1],h.unprojectFromRenderScreen(ee,J)){const t=(0,u.vt)();(0,d.c)(t,e.direction);const o=1/(0,d.l)(t);(0,d.h)(t,t,o),n((0,d.j)(e.origin,J)*o,t,-1,!0,1,oe)}}}}}intersectDraped(e,t,o,i,r,a){const s=e.attributes.get(z.r.POSITION),n=e.attributes.get(z.r.SIZE),l=e.attributes.get(z.r.ROTATION),c=this.parameters,d=(0,w.c)(c),{scaleX:u,scaleY:p}=this._getScreenScale(e,e.screenToWorldRatio),f=fe*e.screenToWorldRatio;for(let h=0;h<s.data.length/s.size;h++){const t=h*s.size,o=s.data[t],v=s.data[t+1],g=h*n.size;he[0]=n.data[g],he[1]=n.data[g+1];let m=0;c.textureIsSignedDistanceField&&(m=Math.min(c.outlineSize,.5*he[0])*e.screenToWorldRatio/2),he[0]*=u,he[1]*=p;const S=h*l.size,b=c.rotation+l.data[S];Z(i,o,v,he,f,m,b,c,d)&&r(a.dist,a.normal,-1,!1)}}createBufferWriter(){return new be}_updateScaleInfo(e,t,o){const i=this.parameters;null!=i.screenSizePerspective?(0,T.cJ)(o,t,i.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minScaleFactor=0),null!=i.screenSizePerspectiveAlignment?(0,T.cJ)(o,t,i.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minScaleFactor=e.factor.minScaleFactor)}applyShaderOffsetsView(e,t,o,i,r,a,s){const n=Q(t,o,r,ue);return this._applyVerticalGroundOffsetView(e,n,r,s),this._applyVerticalOffsetTransformationView(s,n,r,a),this._applyPolygonOffsetView(s,n,i[3],r,s),this._applyCenterOffsetView(s,i,s),s}applyShaderOffsetsNDC(e,t,o,i,r){return this._applyCenterOffsetNDC(e,t,o,i),null!=r&&(0,d.c)(r,i),this._applyPolygonOffsetNDC(i,t,o,i),i}_applyPolygonOffsetView(e,t,o,r,a){const s=r.aboveGround?1:-1;let n=Math.sign(o);0===n&&(n=s);const l=s*n;if(this.parameters.shaderPolygonOffset<=0)return(0,d.c)(a,e);const c=(0,i.qE)(Math.abs(t.cosAngle),.01,1),u=1-Math.sqrt(1-c*c)/c/r.viewport[2];return(0,d.h)(a,e,l>0?u:1/u),a}_applyVerticalGroundOffsetView(e,t,o,i){const r=(0,d.l)(e),a=o.aboveGround?1:-1,s=o.computeRenderPixelSizeAtDist(r)*C.R,n=(0,d.h)(J,t.normal,a*s);return(0,d.g)(i,e,n),i}_applyVerticalOffsetTransformationView(e,t,o,i){const r=this.parameters;if(!r.verticalOffset?.screenLength){if(r.screenSizePerspective||r.screenSizePerspectiveAlignment){const o=(0,d.l)(e);this._updateScaleInfo(i,o,t.cosAngle)}else i.factor.scale=1,i.factorAlignment.scale=1;return e}const a=(0,d.l)(e),s=r.screenSizePerspectiveAlignment??r.screenSizePerspective,n=(0,I.kE)(o,a,r.verticalOffset,t.cosAngle,s);return this._updateScaleInfo(i,a,t.cosAngle),(0,d.h)(t.normal,t.normal,n),(0,d.g)(e,e,t.normal)}_applyCenterOffsetView(e,t,o){const i="screen"!==this.parameters.centerOffsetUnits;return o!==e&&(0,d.c)(o,e),i&&(o[0]+=t[0],o[1]+=t[1],t[2]&&((0,d.n)(K,o),(0,d.g)(o,o,(0,d.h)(K,K,t[2])))),o}_applyCenterOffsetNDC(e,t,o,i){const r="screen"!==this.parameters.centerOffsetUnits;return i!==e&&(0,d.c)(i,e),r||(i[0]+=t[0]/o.fullWidth*2,i[1]+=t[1]/o.fullHeight*2),i}_applyPolygonOffsetNDC(e,t,o,i){const r=this.parameters.shaderPolygonOffset;if(e!==i&&(0,d.c)(i,e),r){const e=o.aboveGround?1:-1,a=e*Math.sign(t[3]);i[2]-=(a||e)*r}return i}set visible(e){this._visible=e}get visible(){const{color:e,outlineSize:t,outlineColor:o}=this.parameters,i=e[3]>=Y.Q||t>=Y.Q&&o[3]>=Y.Q;return this._visible&&i}createGLMaterial(e){return new k(e)}calculateRelativeScreenBounds(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,h.vt)();return function(e,t,o,i){i[0]=e.anchorPosition[0]*-t[0]+e.screenOffset[0]*o,i[1]=e.anchorPosition[1]*-t[1]+e.screenOffset[1]*o}(this.parameters,e,t,o),o[2]=o[0]+e[0],o[3]=o[1]+e[1],o}_getScreenScale(e,t){const o=e.attributes.get(z.r.FEATUREATTRIBUTE);if(null==o)return{scaleX:t,scaleY:t};const i=(0,p.ci)(o.data,de);return(0,g.VC)(ce,this.parameters,i),{scaleX:ce[0]*t,scaleY:ce[1]*t}}}class k extends A.m8{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(j,e)}}function Q(e,t,o,i){return f(t)&&(t=(0,r.z0)(se,t)),(0,d.q)(i.normal,e,t),(0,d.t)(i.normal,i.normal,o.viewInverseTransposeMatrix),i.cosAngle=(0,d.f)(te,ve),i}function Z(e,t,o,r,a,s,n,c,d){let u=t-a-r[0]*d[0],p=u+r[0]+2*a,f=o-a-r[1]*d[1],h=f+r[1]+2*a;const v=c.distanceFieldBoundingBox;return c.textureIsSignedDistanceField&&null!=v&&(u+=r[0]*v[0],f+=r[1]*v[1],p-=r[0]*(1-v[2]),h-=r[1]*(1-v[3]),u-=s,p+=s,f-=s,h+=s),(0,l.hZ)(re,t,o),(0,l.e$)(ie,e,re,(0,i.kU)(n)),ie[0]>u&&ie[0]<p&&ie[1]>f&&ie[1]<h}const X=new y.D,J=(0,u.vt)(),K=(0,u.vt)(),ee=(0,p.vt)(),te=(0,u.vt)(),oe=(0,u.vt)(),ie=(0,c.vt)(),re=(0,c.vt)(),ae=(0,a.vt)(),se=(0,a.vt)(),ne=(0,n.vt)(),le=(0,u.vt)(),ce=(0,u.vt)(),de=(0,p.vt)(),ue={normal:te,cosAngle:0},pe=1,fe=2,he=[0,0],ve=(0,u.fA)(0,0,1);class ge extends A.NV{constructor(){super(...arguments),this.renderOccluded=P.m$.Occlude,this.isDecoration=!1,this.color=(0,p.CN)(1,1,1,1),this.polygonOffset=!1,this.anchorPosition=(0,c.fA)(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=(0,p.CN)(1,1,1,1),this.outlineSize=0,this.distanceFieldBoundingBox=(0,p.vt)(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.occludedFragmentFade=!1,this.horizonCullingEnabled=!1,this.centerOffsetUnits="world",this.drawAsLabel=!1,this.depthEnabled=!0,this.isFocused=!0,this.focusEffect="none",this.draped=!1,this.isLabel=!1}}const me=(0,S.BP)().vec3f(z.r.POSITION).vec3f(z.r.NORMAL).vec2f(z.r.UV0).vec4u8(z.r.COLOR).vec2f(z.r.SIZE).f32(z.r.ROTATION).vec4f(z.r.CENTEROFFSETANDDISTANCE).vec4f(z.r.FEATUREATTRIBUTE),Se=me.clone().vec4u8(z.r.OBJECTANDLAYERIDCOLOR);class be{constructor(){this.vertexBufferLayout=(0,O.E)()?Se:me}elementCount(e){return 6*e.get(z.r.POSITION).indices.length}write(e,t,o,i,r,a){(0,_.Hk)(o.get(z.r.POSITION),e,r.position,a,6),(0,_.p1)(o.get(z.r.NORMAL),t,r.normal,a,6);const s=o.get(z.r.UV0)?.data;let n=0,l=0,c=1,d=1;s&&s.length>=4&&(n=s[0],l=s[1],c=s[2],d=s[3]),c=Math.min(1.99999,c+1),d=Math.min(1.99999,d+1);let u=o.get(z.r.POSITION).indices.length,p=a;const f=r.uv0;for(let v=0;v<u;++v)f.set(p,0,n),f.set(p,1,l),p++,f.set(p,0,c),f.set(p,1,l),p++,f.set(p,0,c),f.set(p,1,d),p++,f.set(p,0,c),f.set(p,1,d),p++,f.set(p,0,n),f.set(p,1,d),p++,f.set(p,0,n),f.set(p,1,l),p++;(0,_.tb)(o.get(z.r.COLOR),4,r.color,a,6);const{data:h,indices:g}=o.get(z.r.SIZE);u=g.length;const m=r.size;p=a;for(let v=0;v<u;++v){const e=h[2*g[v]],t=h[2*g[v]+1];for(let o=0;o<6;++o)m.set(p,0,e),m.set(p,1,t),p++}if((0,_.uO)(o.get(z.r.ROTATION),r.rotation,a,6),o.get(z.r.CENTEROFFSETANDDISTANCE)?(0,_.Ut)(o.get(z.r.CENTEROFFSETANDDISTANCE),r.centerOffsetAndDistance,a,6):(0,_.Pq)(r.centerOffsetAndDistance,a,6*u),o.get(z.r.FEATUREATTRIBUTE)?(0,_.Ut)(o.get(z.r.FEATUREATTRIBUTE),r.featureAttribute,a,6):(0,_.Pq)(r.featureAttribute,a,6*u),null!=i){const e=o.get(z.r.POSITION)?.indices;if(e){const t=e.length,o=r.getField(z.r.OBJECTANDLAYERIDCOLOR,v.XP);(0,_.tH)(i,o,t,a,6)}}}}}}]);