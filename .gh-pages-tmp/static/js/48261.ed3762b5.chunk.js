"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[48261],{12866:(e,t,i)=>{i.d(t,{L:()=>P,b:()=>_});var n=i(87752),r=i(10382),s=i(32006),a=i(98080),l=i(24205),o=i(15025),c=i(4241),h=i(42403),d=i(16878),p=i(38950),u=i(94320),f=i(22131),g=i(8118);function _(e){const t=new g.N5;t.include(l.K,e);const{vertex:i,fragment:r}=t;i.uniforms.add(new u.X("modelView",((e,t)=>{let{camera:i}=t;return(0,n.Tl)(v,i.viewMatrix,e.origin)})),new p.F("proj",(e=>{let{camera:t}=e;return t.projectionMatrix})),new h.m("glowWidth",((e,t)=>{let{camera:i}=t;return e.glowWidth*i.pixelRatio})),new o.E("pixelToNDC",(e=>{let{camera:t}=e;return(0,s.hZ)(m,2/t.fullViewport[2],2/t.fullViewport[3])}))),t.attributes.add(f.r.START,"vec3"),t.attributes.add(f.r.END,"vec3"),e.spherical&&(t.attributes.add(f.r.START_UP,"vec3"),t.attributes.add(f.r.END_UP,"vec3")),t.attributes.add(f.r.EXTRUDE,"vec2"),t.varyings.add("uv","vec2"),t.varyings.add("vViewStart","vec3"),t.varyings.add("vViewEnd","vec3"),t.varyings.add("vViewSegmentNormal","vec3"),t.varyings.add("vViewStartNormal","vec3"),t.varyings.add("vViewEndNormal","vec3");const a=!e.spherical;return i.main.add(d.H`
    vec3 pos = mix(start, end, extrude.x);

    vec4 viewPos = modelView * vec4(pos, 1);
    vec4 projPos = proj * viewPos;
    vec2 ndcPos = projPos.xy / projPos.w;

    // in planar we hardcode the up vectors to be Z-up */
    ${(0,d.If)(a,d.H`vec3 startUp = vec3(0, 0, 1);`)}
    ${(0,d.If)(a,d.H`vec3 endUp = vec3(0, 0, 1);`)}

    // up vector corresponding to the location of the vertex, selecting either startUp or endUp */
    vec3 up = extrude.y * mix(startUp, endUp, extrude.x);
    vec3 viewUp = (modelView * vec4(up, 0)).xyz;

    vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
    vec2 projUp = normalize(projPosUp.xy / projPosUp.w - ndcPos);

    // extrude ndcPos along projUp to the edge of the screen
    vec2 lxy = abs(sign(projUp) - ndcPos);
    ndcPos += length(lxy) * projUp;

    vViewStart = (modelView * vec4(start, 1)).xyz;
    vViewEnd = (modelView * vec4(end, 1)).xyz;

    vec3 viewStartEndDir = vViewEnd - vViewStart;

    vec3 viewStartUp = (modelView * vec4(startUp, 0)).xyz;

    // the normal of the plane that aligns with the segment and the up vector
    vViewSegmentNormal = normalize(cross(viewStartUp, viewStartEndDir));

    // the normal orthogonal to the segment normal and the start up vector
    vViewStartNormal = -normalize(cross(vViewSegmentNormal, viewStartUp));

    // the normal orthogonal to the segment normal and the end up vector
    vec3 viewEndUp = (modelView * vec4(endUp, 0)).xyz;
    vViewEndNormal = normalize(cross(vViewSegmentNormal, viewEndUp));

    // Add enough padding in the X screen space direction for "glow"
    float xPaddingPixels = sign(dot(vViewSegmentNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
    ndcPos.x += xPaddingPixels * pixelToNDC.x;

    // uv is used to read back depth to reconstruct the position at the fragment
    uv = ndcPos * 0.5 + 0.5;

    gl_Position = vec4(ndcPos, 0, 1);
  `),r.uniforms.add(new c.U("perScreenPixelRatio",(e=>e.camera.perScreenPixelRatio))),r.code.add(d.H`float planeDistance(vec3 planeNormal, vec3 planeOrigin, vec3 pos) {
return dot(planeNormal, pos - planeOrigin);
}
float segmentDistancePixels(vec3 segmentNormal, vec3 startNormal, vec3 endNormal, vec3 pos, vec3 start, vec3 end) {
float distSegmentPlane = planeDistance(segmentNormal, start, pos);
float distStartPlane = planeDistance(startNormal, start, pos);
float distEndPlane = planeDistance(endNormal, end, pos);
float dist = max(max(distStartPlane, distEndPlane), abs(distSegmentPlane));
float width = fwidth(distSegmentPlane);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}`),r.main.add(d.H`fragColor = vec4(0.0);
vec3 dEndStart = vViewEnd - vViewStart;
if (dot(dEndStart, dEndStart) < 1e-5) {
return;
}
vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
return;
}
float distance = segmentDistancePixels(
vViewSegmentNormal,
vViewStartNormal,
vViewEndNormal,
pos,
vViewStart,
vViewEnd
);
vec4 color = laserlineProfile(distance);
float alpha = (1.0 - smoothstep(0.995 - angleCutoffAdjust, 0.999 - angleCutoffAdjust, abs(dot(normal, vViewSegmentNormal))));
fragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);`),t}const m=(0,a.vt)(),v=(0,r.vt)(),P=Object.freeze(Object.defineProperty({__proto__:null,build:_},Symbol.toStringTag,{value:"Module"}))},24205:(e,t,i)=>{i.d(t,{K:()=>h});var n=i(33273),r=i(49008),s=i(57554),a=i(42403),l=i(16878),o=i(73712),c=i(67058);function h(e,t){const i=e.fragment;i.include(n.E),e.include(r.Ir),i.uniforms.add(new a.m("globalAlpha",(e=>e.globalAlpha)),new s.t("glowColor",(e=>e.glowColor)),new a.m("glowWidth",((e,t)=>e.glowWidth*t.camera.pixelRatio)),new a.m("glowFalloff",(e=>e.glowFalloff)),new s.t("innerColor",(e=>e.innerColor)),new a.m("innerWidth",((e,t)=>e.innerWidth*t.camera.pixelRatio)),new o.x("depthMap",(e=>e.depth?.attachment)),new c.N("normalMap",(e=>e.normals))),i.code.add(l.H`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`),i.code.add(l.H`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),i.code.add(l.H`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),i.code.add(l.H`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float angleCutoffAdjust, out float depthDiscontinuityAlpha) {
float depth = depthFromTexture(depthMap, uv);
if (depth == 1.0) {
return false;
}
float linearDepth = linearizeDepth(depth);
pos = reconstructPosition(gl_FragCoord.xy, linearDepth);
float minStep = 6e-8;
float depthStep = clamp(depth + minStep, 0.0, 1.0);
float linearDepthStep = linearizeDepth(depthStep);
float depthError = abs(linearDepthStep - linearDepth);
if (depthError > 0.2) {
normal = texture(normalMap, uv).xyz * 2.0 - 1.0;
angleCutoffAdjust = 0.004;
} else {
normal = normalize(cross(dFdx(pos), dFdy(pos)));
angleCutoffAdjust = 0.0;
}
float ddepth = fwidth(linearDepth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / linearDepth);
return true;
}`),t.contrastControlEnabled?i.uniforms.add(new c.N("frameColor",((e,t)=>e.colors)),new a.m("globalAlphaContrastBoost",(e=>e.globalAlphaContrastBoost))).code.add(l.H`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`):i.code.add(l.H`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}},48261:(e,t,i)=>{i.d(t,{o:()=>K});i(21265);var n=i(89227),r=i(28473),s=i(1277),a=i(49979),l=i(93800),o=i(17741),c=i(48602),h=(i(50925),i(14746),i(75269)),d=i(1700),p=i(12096),u=i(91102),f=i(51064),g=i(3115),_=i(62650),m=i(16079),v=i(66028),P=i(66458),b=i(98876),w=i(93003),D=i(16434),E=i(64682),V=i(82960),x=i(20783);class C extends x.Y{constructor(){super(...arguments),this.innerColor=(0,r.fA)(1,1,1),this.innerWidth=1,this.glowColor=(0,r.fA)(1,.5,0),this.glowWidth=8,this.glowFalloff=8,this.globalAlpha=.75,this.globalAlphaContrastBoost=2,this.angleCutoff=(0,E.kU)(6),this.pointDistanceOrigin=(0,r.vt)(),this.pointDistanceTarget=(0,r.vt)(),this.lineVerticalPlaneSegment=(0,s.vt)(),this.intersectsLineSegment=(0,s.vt)(),this.intersectsLineRadius=3,this.heightManifoldTarget=(0,r.vt)(),this.lineStartWorld=(0,r.vt)(),this.lineEndWorld=(0,r.vt)()}}class S extends D.w{constructor(e,t){super(e,t,new w.$(V.L,(()=>i.e(80080).then(i.bind(i,80080)))))}}var L=i(22131),y=i(12866);class A extends C{constructor(){super(...arguments),this.origin=(0,r.vt)()}}class M extends D.w{constructor(e,t){super(e,t,new w.$(y.L,(()=>i.e(25538).then(i.bind(i,25538)))),T)}}const T=new Map([[L.r.START,0],[L.r.END,1],[L.r.EXTRUDE,2],[L.r.START_UP,3],[L.r.END_UP,4]]);var R=i(9369),U=i(80861),I=i(92156);class H{constructor(e){this._renderCoordsHelper=e,this._buffers=null,this._origin=(0,r.vt)(),this._dirty=!1,this._count=0,this._vao=null}set vertices(e){const t=(0,v.jh)(3*e.length);let i=0;for(const n of e)t[i++]=n[0],t[i++]=n[1],t[i++]=n[2];this.buffers=[t]}set buffers(e){if(this._buffers=e,this._buffers.length>0){const e=this._buffers[0],t=3*Math.floor(e.length/3/2);(0,n.i)(this._origin,e[t],e[t+1],e[t+2])}else(0,n.i)(this._origin,0,0,0);this._dirty=!0}get origin(){return this._origin}draw(e){const t=this._ensureVAO(e);null!=t&&(e.bindVAO(t),e.drawArrays(I.WR.TRIANGLES,0,this._count))}dispose(){null!=this._vao&&this._vao.dispose()}get _layout(){return this._renderCoordsHelper.viewingMode===f.RT.Global?j:W}_ensureVAO(e){return null==this._buffers?null:(this._vao??=this._createVAO(e,this._buffers),this._ensureVertexData(this._vao,this._buffers),this._vao)}_createVAO(e,t){const i=this._createDataBuffer(t);return this._dirty=!1,new R.Z(e,T,new Map([["data",(0,P.U)(this._layout)]]),new Map([["data",U.g.createVertex(e,I._U.STATIC_DRAW,i)]]))}_ensureVertexData(e,t){if(!this._dirty)return;const i=this._createDataBuffer(t);e.vertexBuffers.get("data")?.setData(i),this._dirty=!1}_createDataBuffer(e){const t=e.reduce(((e,t)=>e+O(t)),0);this._count=t;const i=this._layout.createBuffer(t),r=this._origin;let s=0,a=0;const l="startUp"in i?this._setUpVectors.bind(this,i):void 0;for(const o of e){for(let e=0;e<o.length;e+=3){const t=(0,n.i)(q,o[e],o[e+1],o[e+2]);0===e?a=this._renderCoordsHelper.getAltitude(t):this._renderCoordsHelper.setAltitude(t,a);const c=s+2*e;l?.(e,c,o,t);const h=(0,n.d)(q,t,r);if(e<o.length-3){for(let e=0;e<6;e++)i.start.setVec(c+e,h);i.extrude.setValues(c,0,-1),i.extrude.setValues(c+1,1,-1),i.extrude.setValues(c+2,1,1),i.extrude.setValues(c+3,0,-1),i.extrude.setValues(c+4,1,1),i.extrude.setValues(c+5,0,1)}if(e>0)for(let e=-6;e<0;e++)i.end.setVec(c+e,h)}s+=O(o)}return i.buffer}_setUpVectors(e,t,i,n,r){const s=this._renderCoordsHelper.worldUpAtPosition(r,N);if(t<n.length-3)for(let a=0;a<6;a++)e.startUp.setVec(i+a,s);if(t>0)for(let a=-6;a<0;a++)e.endUp.setVec(i+a,s)}}function O(e){return 2*(e.length/3-1)*3}const N=(0,r.vt)(),q=(0,r.vt)(),j=(0,b.BP)().vec3f(L.r.START).vec3f(L.r.END).vec2f(L.r.EXTRUDE).vec3f(L.r.START_UP).vec3f(L.r.END_UP),W=(0,b.BP)().vec3f(L.r.START).vec3f(L.r.END).vec2f(L.r.EXTRUDE);var z=i(21484);class B extends z.K{constructor(){super(...arguments),this.contrastControlEnabled=!1,this.spherical=!1}}(0,l._)([(0,z.W)()],B.prototype,"contrastControlEnabled",void 0),(0,l._)([(0,z.W)()],B.prototype,"spherical",void 0);class G extends B{constructor(){super(...arguments),this.heightManifoldEnabled=!1,this.pointDistanceEnabled=!1,this.lineVerticalPlaneEnabled=!1,this.intersectsLineEnabled=!1}}(0,l._)([(0,z.W)()],G.prototype,"heightManifoldEnabled",void 0),(0,l._)([(0,z.W)()],G.prototype,"pointDistanceEnabled",void 0),(0,l._)([(0,z.W)()],G.prototype,"lineVerticalPlaneEnabled",void 0),(0,l._)([(0,z.W)()],G.prototype,"intersectsLineEnabled",void 0);var F=i(71723),k=i(64003),Z=i(19416);let X=class extends _.default{constructor(e){super(e),this.produces=g.InternalRenderCategory.LASERLINES,this.consumes={required:[g.InternalRenderCategory.LASERLINES,"normals"]},this.requireGeometryDepth=!0,this._configuration=new G,this._pathTechniqueConfiguration=new B,this._heightManifoldEnabled=!1,this._pointDistanceEnabled=!1,this._lineVerticalPlaneEnabled=!1,this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._pathVerticalPlaneEnabled=!1,this._passParameters=new A;const t=e.view._stage.renderView.techniques,i=new B;i.contrastControlEnabled=e.contrastControlEnabled,t.precompile(M,i)}initialize(){this._passParameters.renderCoordsHelper=this.view.renderCoordsHelper,this._pathTechniqueConfiguration.spherical=this.view.state.viewingMode===f.RT.Global,this._pathTechniqueConfiguration.contrastControlEnabled=this.contrastControlEnabled,this._techniques.precompile(M,this._pathTechniqueConfiguration),this._blit=new m.G(this._techniques,Z.d.PremultipliedAlpha)}destroy(){this._pathVerticalPlaneData=(0,o.WD)(this._pathVerticalPlaneData),this._blit=null}get _techniques(){return this.view._stage.renderView.techniques}get heightManifoldEnabled(){return this._heightManifoldEnabled}set heightManifoldEnabled(e){this._heightManifoldEnabled!==e&&(this._heightManifoldEnabled=e,this.requestRender(F.C7.UPDATE))}get heightManifoldTarget(){return this._passParameters.heightManifoldTarget}set heightManifoldTarget(e){(0,n.c)(this._passParameters.heightManifoldTarget,e),this.requestRender(F.C7.UPDATE)}get pointDistanceEnabled(){return this._pointDistanceEnabled}set pointDistanceEnabled(e){e!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=e,this.requestRender(F.C7.UPDATE))}get pointDistanceTarget(){return this._passParameters.pointDistanceTarget}set pointDistanceTarget(e){(0,n.c)(this._passParameters.pointDistanceTarget,e),this.requestRender(F.C7.UPDATE)}get pointDistanceOrigin(){return this._passParameters.pointDistanceOrigin}set pointDistanceOrigin(e){(0,n.c)(this._passParameters.pointDistanceOrigin,e),this.requestRender(F.C7.UPDATE)}get lineVerticalPlaneEnabled(){return this._lineVerticalPlaneEnabled}set lineVerticalPlaneEnabled(e){e!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=e,this.requestRender(F.C7.UPDATE))}get lineVerticalPlaneSegment(){return this._passParameters.lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){(0,s.C)(e,this._passParameters.lineVerticalPlaneSegment),this.requestRender(F.C7.UPDATE)}get intersectsLineEnabled(){return this._intersectsLineEnabled}set intersectsLineEnabled(e){e!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=e,this.requestRender(F.C7.UPDATE))}get intersectsLineSegment(){return this._passParameters.intersectsLineSegment}set intersectsLineSegment(e){(0,s.C)(e,this._passParameters.intersectsLineSegment),this.requestRender(F.C7.UPDATE)}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){e!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=e,this.requestRender(F.C7.UPDATE))}get pathVerticalPlaneEnabled(){return this._pathVerticalPlaneEnabled}set pathVerticalPlaneEnabled(e){e!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=e,null!=this._pathVerticalPlaneData&&this.requestRender(F.C7.UPDATE))}set pathVerticalPlaneVertices(e){null==this._pathVerticalPlaneData&&(this._pathVerticalPlaneData=new H(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.vertices=e,this.pathVerticalPlaneEnabled&&this.requestRender(F.C7.UPDATE)}set pathVerticalPlaneBuffers(e){null==this._pathVerticalPlaneData&&(this._pathVerticalPlaneData=new H(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.buffers=e,this.pathVerticalPlaneEnabled&&this.requestRender(F.C7.UPDATE)}setParameters(e){(0,k.MB)(this._passParameters,e)&&this.requestRender(F.C7.UPDATE)}precompile(){this._acquireTechnique()}render(e){const t=e.find((e=>{let{name:t}=e;return t===this.produces}));if(!this.bindParameters.decorations||null==this._blit)return t;const i=this.renderingContext,n=e.find((e=>{let{name:t}=e;return"normals"===t}));this._passParameters.normals=n?.getTexture();const r=()=>{(this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled)&&this._renderUnified(),this.pathVerticalPlaneEnabled&&this._renderPath()};if(!this.contrastControlEnabled)return i.bindFramebuffer(t.fbo),r(),t;this._passParameters.colors=t.getTexture();const s=this.fboCache.acquire(t.fbo.width,t.fbo.height,"laser lines");return i.bindFramebuffer(s.fbo),i.setClearColor(0,0,0,0),i.clear(I.NV.COLOR|I.NV.DEPTH),r(),i.unbindTexture(t.getTexture()),this._blit.blend(i,s,t,this.bindParameters)||this.requestRender(F.C7.UPDATE),s.release(),t}_acquireTechnique(){return this._configuration.heightManifoldEnabled=this.heightManifoldEnabled,this._configuration.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled,this._configuration.pointDistanceEnabled=this.pointDistanceEnabled,this._configuration.intersectsLineEnabled=this.intersectsLineEnabled,this._configuration.contrastControlEnabled=this.contrastControlEnabled,this._configuration.spherical=this.view.state.viewingMode===f.RT.Global,this._techniques.get(S,this._configuration)}_renderUnified(){if(!this._updatePassParameters())return;const e=this._acquireTechnique();if(e.compiled){const t=this.renderingContext;t.bindTechnique(e,this.bindParameters,this._passParameters),t.screen.draw()}else this.requestRender(F.C7.UPDATE)}_renderPath(){if(null==this._pathVerticalPlaneData)return;const e=this._techniques.get(M,this._pathTechniqueConfiguration);if(e.compiled){const t=this.renderingContext;this._passParameters.origin=this._pathVerticalPlaneData.origin,t.bindTechnique(e,this.bindParameters,this._passParameters),this._pathVerticalPlaneData.draw(t)}else this.requestRender(F.C7.UPDATE)}_updatePassParameters(){if(!this._intersectsLineEnabled)return!0;const e=this.bindParameters.camera,t=this._passParameters;if(this._intersectsLineInfinite){if((0,d.$e)((0,u.LV)(t.intersectsLineSegment.origin,t.intersectsLineSegment.vector),$),$.c0=-Number.MAX_VALUE,!(0,p.ig)(e.frustum,$))return!1;(0,d.j1)($,t.lineStartWorld),(0,d.mO)($,t.lineEndWorld)}else(0,n.c)(t.lineStartWorld,t.intersectsLineSegment.origin),(0,n.g)(t.lineEndWorld,t.intersectsLineSegment.origin,t.intersectsLineSegment.vector);return!0}get test(){}};(0,l._)([(0,c.MZ)({constructOnly:!0})],X.prototype,"contrastControlEnabled",void 0),(0,l._)([(0,c.MZ)({constructOnly:!0})],X.prototype,"isDecoration",void 0),(0,l._)([(0,c.MZ)()],X.prototype,"produces",void 0),(0,l._)([(0,c.MZ)()],X.prototype,"consumes",void 0),X=(0,l._)([(0,h.$)("esri.views.3d.webgl-engine.effects.laserlines.LaserLineRenderer")],X);const $=(0,d.vt)();class K extends a.B{constructor(e){super(e),this._angleCutoff=V.d,this._style={},this._heightManifoldTarget=(0,r.vt)(),this._heightManifoldEnabled=!1,this._intersectsLine=(0,s.vt)(),this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._lineVerticalPlaneSegment=null,this._pathVerticalPlaneBuffers=null,this._pointDistanceLine=null,this.applyProperties(e)}get testData(){}createResources(){this._ensureRenderer()}destroyResources(){this._disposeRenderer()}updateVisibility(){this._syncRenderer(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance()}get angleCutoff(){return this._angleCutoff}set angleCutoff(e){this._angleCutoff!==e&&(this._angleCutoff=e,this._syncAngleCutoff())}get style(){return this._style}set style(e){this._style=e,this._syncStyle()}get heightManifoldTarget(){return this._heightManifoldEnabled?this._heightManifoldTarget:null}set heightManifoldTarget(e){null!=e?((0,n.c)(this._heightManifoldTarget,e),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1,this._syncRenderer(),this._syncHeightManifold()}set intersectsWorldUpAtLocation(e){if(null==e)return void(this.intersectsLine=null);const t=this.view.renderCoordsHelper.worldUpAtPosition(e,Y);this.intersectsLine=(0,s.fA)(e,t),this.intersectsLineInfinite=!0}get intersectsLine(){return this._intersectsLineEnabled?this._intersectsLine:null}set intersectsLine(e){null!=e?((0,s.C)(e,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1,this._syncIntersectsLine(),this._syncRenderer()}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){this._intersectsLineInfinite=e,this._syncIntersectsLineInfinite()}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){this._lineVerticalPlaneSegment=null!=e?(0,s.C)(e):null,this._syncLineVerticalPlane(),this._syncRenderer()}get pathVerticalPlane(){return this._pathVerticalPlaneBuffers}set pathVerticalPlane(e){this._pathVerticalPlaneBuffers=e,this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncRenderer()}get pointDistanceLine(){return this._pointDistanceLine}set pointDistanceLine(e){this._pointDistanceLine=null!=e?{origin:(0,r.o8)(e.origin),target:e.target?(0,r.o8)(e.target):null}:null,this._syncPointDistance(),this._syncRenderer()}_syncRenderer(){this.attached&&this.visible&&(this._intersectsLineEnabled||this._heightManifoldEnabled||null!=this._pointDistanceLine||null!=this._pathVerticalPlaneBuffers)?this._ensureRenderer():this._disposeRenderer()}_ensureRenderer(){null==this._renderer&&(this._renderer=new X({view:this.view,contrastControlEnabled:!0,isDecoration:this.isDecoration}),this._syncStyle(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncIntersectsLineInfinite(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncAngleCutoff())}_syncStyle(){null!=this._renderer&&this._renderer.setParameters(this._style)}_syncAngleCutoff(){this._renderer?.setParameters({angleCutoff:this._angleCutoff})}_syncHeightManifold(){null!=this._renderer&&(this._renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this._renderer.heightManifoldTarget=this._heightManifoldTarget))}_syncIntersectsLine(){null!=this._renderer&&(this._renderer.intersectsLineEnabled=this._intersectsLineEnabled&&this.visible,this._intersectsLineEnabled&&(this._renderer.intersectsLineSegment=this._intersectsLine))}_syncIntersectsLineInfinite(){null!=this._renderer&&(this._renderer.intersectsLineInfinite=this._intersectsLineInfinite)}_syncPathVerticalPlane(){null!=this._renderer&&(this._renderer.pathVerticalPlaneEnabled=null!=this._pathVerticalPlaneBuffers&&this.visible,null!=this._pathVerticalPlaneBuffers&&(this._renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers))}_syncLineVerticalPlane(){null!=this._renderer&&(this._renderer.lineVerticalPlaneEnabled=null!=this._lineVerticalPlaneSegment&&this.visible,null!=this._lineVerticalPlaneSegment&&(this._renderer.lineVerticalPlaneSegment=this._lineVerticalPlaneSegment))}_syncPointDistance(){if(null==this._renderer)return;const e=this._pointDistanceLine,t=null!=e;this._renderer.pointDistanceEnabled=t&&null!=e.target&&this.visible,t&&(this._renderer.pointDistanceOrigin=e.origin,null!=e.target&&(this._renderer.pointDistanceTarget=e.target))}_disposeRenderer(){null!=this._renderer&&this.view._stage&&(this._renderer.destroy(),this._renderer=null)}}const Y=(0,r.vt)()},82960:(e,t,i)=>{i.d(t,{L:()=>I,b:()=>V,d:()=>E});var n=i(64682),r=i(32006),s=i(98080),a=i(89227),l=i(28473),o=i(60548),c=i(24646),h=i(1277),d=i(10872),p=i(89476),u=i(24205),f=i(37379),g=i(61315),_=i(87824),m=i(57554),v=i(94409),P=i(4241),b=i(42403),w=i(16878),D=i(8118);const E=(0,n.kU)(6);function V(e){const t=new D.N5;t.include(f.c),t.include(u.K,e);const i=t.fragment;if(e.lineVerticalPlaneEnabled||e.heightManifoldEnabled)if(i.uniforms.add(new b.m("maxPixelDistance",((t,i)=>e.heightManifoldEnabled?2*i.camera.computeScreenPixelSizeAt(t.heightManifoldTarget):2*i.camera.computeScreenPixelSizeAt(t.lineVerticalPlaneSegment.origin)))),i.code.add(w.H`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),e.spherical){const e=(e,t,i)=>(0,a.t)(e,t.heightManifoldTarget,i.camera.viewMatrix),t=(e,t)=>(0,a.t)(e,[0,0,0],t.camera.viewMatrix);i.uniforms.add(new v.E("heightManifoldOrigin",((i,n)=>(e(L,i,n),t(M,n),(0,a.d)(M,M,L),(0,a.n)(y,M),y[3]=(0,a.l)(M),y))),new _.d("globalOrigin",(e=>t(L,e))),new b.m("cosSphericalAngleThreshold",((e,t)=>1-Math.max(2,(0,a.j)(t.camera.eye,e.heightManifoldTarget)*t.camera.perRenderPixelRatio)/(0,a.l)(e.heightManifoldTarget)))),i.code.add(w.H`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`)}else i.code.add(w.H`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);if(e.pointDistanceEnabled&&(i.uniforms.add(new b.m("maxPixelDistance",((e,t)=>2*t.camera.computeScreenPixelSizeAt(e.pointDistanceTarget)))),i.code.add(w.H`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)),e.intersectsLineEnabled&&i.uniforms.add(new P.U("perScreenPixelRatio",(e=>e.camera.perScreenPixelRatio))).code.add(w.H`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`),(e.lineVerticalPlaneEnabled||e.intersectsLineEnabled)&&i.code.add(w.H`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),i.main.add(w.H`vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
fragColor = vec4(0.0);
return;
}
vec4 color = vec4(0.0);`),e.heightManifoldEnabled){i.uniforms.add(new g.G("angleCutoff",(e=>x(e))),new v.E("heightPlane",((e,t)=>C(e.heightManifoldTarget,e.renderCoordsHelper.worldUpAtPosition(e.heightManifoldTarget,L),t.camera.viewMatrix))));const t=e.spherical?w.H`normalize(globalOrigin - pos)`:w.H`heightPlane.xyz`;i.main.add(w.H`
      vec2 angleCutoffAdjusted = angleCutoff - angleCutoffAdjust;
      // Fade out laserlines on flat surfaces
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoffAdjusted.x, angleCutoffAdjusted.y, abs(dot(normal, ${t})));
      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);`)}return e.pointDistanceEnabled&&(i.uniforms.add(new g.G("angleCutoff",(e=>x(e))),new v.E("pointDistanceSphere",((e,t)=>function(e,t){return(0,a.t)((0,p.a)(U),e.pointDistanceOrigin,t.camera.viewMatrix),U[3]=(0,a.j)(e.pointDistanceOrigin,e.pointDistanceTarget),U}(e,t)))),i.main.add(w.H`float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);`)),e.lineVerticalPlaneEnabled&&(i.uniforms.add(new g.G("angleCutoff",(e=>x(e))),new v.E("lineVerticalPlane",((e,t)=>function(e,t){const i=(0,h.sd)(e.lineVerticalPlaneSegment,.5,L),n=e.renderCoordsHelper.worldUpAtPosition(i,A),r=(0,a.n)(M,e.lineVerticalPlaneSegment.vector),s=(0,a.e)(L,n,r);return(0,a.n)(s,s),C(e.lineVerticalPlaneSegment.origin,s,t.camera.viewMatrix)}(e,t))),new m.t("lineVerticalStart",((e,t)=>function(e,t){const i=(0,a.c)(L,e.lineVerticalPlaneSegment.origin);return e.renderCoordsHelper.setAltitude(i,0),(0,a.t)(i,i,t.camera.viewMatrix)}(e,t))),new m.t("lineVerticalEnd",((e,t)=>function(e,t){const i=(0,a.g)(L,e.lineVerticalPlaneSegment.origin,e.lineVerticalPlaneSegment.vector);return e.renderCoordsHelper.setAltitude(i,0),(0,a.t)(i,i,t.camera.viewMatrix)}(e,t)))),i.main.add(w.H`if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}`)),e.intersectsLineEnabled&&(i.uniforms.add(new g.G("angleCutoff",(e=>x(e))),new m.t("intersectsLineStart",((e,t)=>(0,a.t)(L,e.lineStartWorld,t.camera.viewMatrix))),new m.t("intersectsLineEnd",((e,t)=>(0,a.t)(L,e.lineEndWorld,t.camera.viewMatrix))),new m.t("intersectsLineDirection",((e,t)=>((0,a.c)(y,e.intersectsLineSegment.vector),y[3]=0,(0,a.n)(L,(0,o.t)(y,y,t.camera.viewMatrix))))),new b.m("intersectsLineRadius",(e=>e.intersectsLineRadius))),i.main.add(w.H`if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}`)),i.main.add(w.H`fragColor = laserlineOutput(color * depthDiscontinuityAlpha);`),t}function x(e){return(0,r.hZ)(S,Math.cos(e.angleCutoff),Math.cos(Math.max(0,e.angleCutoff-(0,n.kU)(2))))}function C(e,t,i){return(0,a.t)(T,e,i),(0,a.c)(y,t),y[3]=0,(0,o.t)(y,y,i),(0,d.O_)(T,y,R)}const S=(0,s.vt)(),L=(0,l.vt)(),y=(0,c.vt)(),A=(0,l.vt)(),M=(0,l.vt)(),T=(0,l.vt)(),R=(0,d.vt)(),U=(0,p.c)(),I=Object.freeze(Object.defineProperty({__proto__:null,build:V,defaultAngleCutoff:E},Symbol.toStringTag,{value:"Module"}))}}]);