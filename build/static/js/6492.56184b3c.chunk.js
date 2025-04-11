"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[6492],{7472:(t,e,a)=>{a.d(e,{X:()=>s});const s=Symbol("WebScene")},24641:(t,e,a)=>{a.d(e,{A:()=>ot});var s=a(93800),i=a(79625),r=a(6946),n=a(79953),o=a(48602),l=(a(21265),a(50925)),c=(a(14746),a(75269)),d=a(16804),h=a(67965),u=a(27510);function p(t){return"constant"===t.kind?t.value[0]:t.values[t.values.length-1]}function m(t){const e=t.toRgba();return[e[0]/255,e[1]/255,e[2]/255,e[3]]}function _(t){if(!t.hasVisualVariables("size"))return{kind:"constant",value:[(0,d.Lz)(t.trailWidth)]};const e=t.getVisualVariablesForType("size")[0],a=[],s=[];let i;if(e.stops){for(const t of e.stops)a.push(t.value),s.push((0,d.Lz)(t.size));i=e.stops.length}else a.push(e.minDataValue,e.maxDataValue),s.push((0,d.Lz)(e.minSize),(0,d.Lz)(e.maxSize)),i=2;return{kind:"ramp",stops:a,values:s,count:i}}function f(t){if(!t.hasVisualVariables("opacity"))return{kind:"constant",value:[1]};const e=t.getVisualVariablesForType("opacity")[0],a=[],s=[];for(const i of e.stops)a.push(i.value),s.push(i.opacity);return{kind:"ramp",stops:a,values:s,count:e.stops.length}}function y(t,e,a,s){switch(e){case"int":t.setUniform1iv(a,s);break;case"float":t.setUniform1fv(a,s);break;case"vec2":t.setUniform2fv(a,s);break;case"vec3":t.setUniform3fv(a,s);break;case"vec4":t.setUniform4fv(a,s)}}function g(t,e,a,s){"constant"===s.kind?y(t,a,`u_${e}`,s.value):(y(t,"float",`u_${e}_stops`,s.stops),y(t,a,`u_${e}_values`,s.values),t.setUniform1i(`u_${e}_count`,s.count))}function v(t,e){return t===e||null!=t&&null!=e&&t.equals(e)}function w(t,e){if(!function(t,e){let a=!0;return a=a&&t.collisions===e.collisions,a=a&&t.density===e.density,a=a&&t.interpolate===e.interpolate,a=a&&t.lineCollisionWidth===e.lineCollisionWidth,a=a&&t.lineSpacing===e.lineSpacing,a=a&&t.maxTurnAngle===e.maxTurnAngle,a=a&&t.minSpeedThreshold===e.minSpeedThreshold,a=a&&t.segmentLength===e.segmentLength,a=a&&t.smoothing===e.smoothing,a=a&&t.velocityScale===e.velocityScale,a=a&&t.verticesPerLine===e.verticesPerLine,a}(t.simulationSettings,e.simulationSettings))return!1;if(!v(t.timeExtent,e.timeExtent))return!1;let a=!0;return a=a&&t.loadImagery===e.loadImagery,a=a&&t.createFlowMesh===e.createFlowMesh,a=a&&t.color.kind===e.color.kind,a=a&&t.opacity.kind===e.opacity.kind,a=a&&t.size.kind===e.size.kind,a}var x=a(49959),S=a(80861),A=a(92156),b=a(72416),M=a(77936),D=a(25874),T=a(605);class R{constructor(t){this._params=t,this.animated=!1}isCompatible(t){if(!(t instanceof R))return!1;if(!v(this._params.timeExtent,t._params.timeExtent))return!1;let e=!0;return e=e&&this._params.loadImagery===t._params.loadImagery,e=e&&this._params.color.kind===t._params.color.kind,e=e&&this._params.opacity.kind===t._params.opacity.kind,e}async load(t,e){const{extent:a,size:s}=t;(0,x.Te)(e);const i=await this._params.loadImagery(a,s[0],s[1],this._params.timeExtent,e);return new I(i,{color:this._params.color,opacity:this._params.opacity})}render(t,e,a){const{context:s}=t,{program:i}=a;s.setFaceCullingEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunction(A.dn.ONE,A.dn.ONE_MINUS_SRC_ALPHA),s.useProgram(i),i.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),s.bindTexture(a.texture,0),i.setUniform1i("u_texture",0),i.setUniform1f("u_Min",a.min),i.setUniform1f("u_Max",a.max),g(i,"color","vec4",this._params.color),g(i,"opacity","float",this._params.opacity),s.bindVAO(a.vertexArray),s.drawArrays(A.WR.TRIANGLE_STRIP,0,4)}}const z=new Map;z.set("a_position",0),z.set("a_texcoord",1);const U=new Map([["geometry",[new T._("a_position",2,A.pe.UNSIGNED_SHORT,0,8),new T._("a_texcoord",2,A.pe.UNSIGNED_SHORT,4,8)]]]),P={vsPath:"raster/flow/imagery",fsPath:"raster/flow/imagery",attributes:z};class I{constructor(t,e){this._flowData=t,this._values=e}attach(t){const{context:e}=t,{width:a,height:s}=this._flowData,i=S.g.createVertex(e,A._U.STATIC_DRAW,new Uint16Array([0,0,0,1,a,0,1,1,0,s,0,0,a,s,1,0])),r=new Map([["geometry",i]]),n=new D.Z(e,z,U,r),o=[];"ramp"===this._values.color.kind&&o.push("vvColor"),"ramp"===this._values.opacity.kind&&o.push("vvOpacity");const l=t.getProgram(P,o);let c=1e6,d=-1e6;for(let m=0;m<s;m++)for(let t=0;t<a;t++)if(0!==this._flowData.mask[m*a+t]){const e=this._flowData.data[2*(m*a+t)],s=this._flowData.data[2*(m*a+t)+1],i=Math.sqrt(e*e+s*s);c=Math.min(c,i),d=Math.max(d,i)}const h=new Uint8Array(4*a*s);for(let m=0;m<s;m++)for(let t=0;t<a;t++)if(0!==this._flowData.mask[m*a+t]){const e=this._flowData.data[2*(m*a+t)],s=this._flowData.data[2*(m*a+t)+1],i=(Math.sqrt(e*e+s*s)-c)/(d-c);h[4*(m*a+t)]=255*i,h[4*(m*a+t)+1]=0,h[4*(m*a+t)+2]=0,h[4*(m*a+t)+3]=255}else h[4*(m*a+t)]=0,h[4*(m*a+t)+1]=0,h[4*(m*a+t)+2]=0,h[4*(m*a+t)+3]=0;const u=new M.R;u.internalFormat=A.Ab.RGBA,u.wrapMode=A.pF.CLAMP_TO_EDGE,u.flipped=!0,u.width=a,u.height=s;const p=new b.g(e,u,h);this.vertexArray=n,this.program=l,this.texture=p,this.min=c,this.max=d,this._flowData=null}detach(){this.vertexArray.dispose(),this.texture.dispose()}get ready(){return this.program.compiled}}class E{constructor(t){this._params=t}get animated(){return this._params.flowSpeed>0}isCompatible(t){return t instanceof E&&w(this._params,t._params)}async load(t,e){const{extent:a,size:s}=t;(0,x.Te)(e);const i=await this._params.loadImagery(a,s[0],s[1],this._params.timeExtent,e),{vertexData:r,indexData:n}=await this._params.createFlowMesh("Particles",this._params.simulationSettings,i,e);return new k(r,n,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})}render(t,e,a){const{context:s}=t,{program:i}=a;s.setFaceCullingEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunction(A.dn.ONE,A.dn.ONE_MINUS_SRC_ALPHA),s.useProgram(i),i.setUniform1f("u_time",e.time),i.setUniform1f("u_trailLength",this._params.trailLength),i.setUniform1f("u_flowSpeed",this._params.flowSpeed),i.setUniform1f("u_featheringSize",this._params.featheringSize),i.setUniform1f("u_featheringOffset",this._params.featheringOffset),i.setUniform1f("u_introFade",this._params.introFade?1:0),i.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),i.setUniform1f("u_decayRate",this._params.decayRate),i.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),i.setUniformMatrix3fv("u_displayViewMat3",e.displayViewMat3),g(i,"color","vec4",this._params.color),g(i,"opacity","float",this._params.opacity),g(i,"size","float",this._params.size),s.bindVAO(a.vertexArray),s.drawElements(A.WR.TRIANGLES,a.indexCount,A.pe.UNSIGNED_INT,0)}}const O=new Map;O.set("a_xyts0",0),O.set("a_xyts1",1),O.set("a_typeIdDurationSeed",2),O.set("a_extrudeInfo",3);const V=new Map([["geometry",[new T._("a_xyts0",4,A.pe.FLOAT,0,64),new T._("a_xyts1",4,A.pe.FLOAT,16,64),new T._("a_typeIdDurationSeed",4,A.pe.FLOAT,32,64),new T._("a_extrudeInfo",4,A.pe.FLOAT,48,64)]]]),F={vsPath:"raster/flow/particles",fsPath:"raster/flow/particles",attributes:O};class k{constructor(t,e,a){this._vertexData=t,this._indexData=e,this._values=a}attach(t){const{context:e}=t,a=S.g.createVertex(e,A._U.STATIC_DRAW,this._vertexData),s=S.g.createIndex(e,A._U.STATIC_DRAW,this._indexData),i=new Map([["geometry",a]]),r=new D.Z(e,O,V,i,s),n=[];"ramp"===this._values.color.kind&&n.push("vvColor"),"ramp"===this._values.opacity.kind&&n.push("vvOpacity"),"ramp"===this._values.size.kind&&n.push("vvSize");const o=t.getProgram(F,n);this.vertexArray=r,this.program=o,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose()}get ready(){return this.program.compiled}}class C{constructor(t){this._styles=t}get animated(){return this._styles.reduce(((t,e)=>t||e.animated),!1)}isCompatible(t){if(!(t instanceof C))return!1;if(this._styles.length!==t._styles.length)return!1;const e=this._styles.length;for(let a=0;a<e;a++)if(!this._styles[a].isCompatible(t._styles[a]))return!1;return!0}async load(t,e){const a=await Promise.all(this._styles.map((a=>a.load(t,e))));return new L(a)}render(t,e,a){for(let s=0;s<this._styles.length;s++)this._styles[s].render(t,e,a.resources[s])}}class L{constructor(t){this.resources=t}attach(t){for(const e of this.resources)e.attach(t)}detach(){for(const t of this.resources)t.detach()}get ready(){return this.resources.reduce(((t,e)=>t&&e.ready),!0)}}class N{constructor(t){this._params=t}get animated(){return this._params.flowSpeed>0}isCompatible(t){return t instanceof N&&w(this._params,t._params)}async load(t,e){const{extent:a,size:s}=t;(0,x.Te)(e);const i=await this._params.loadImagery(a,s[0],s[1],this._params.timeExtent,e),{vertexData:r,indexData:n}=await this._params.createFlowMesh("Streamlines",this._params.simulationSettings,i,e);return new G(r,n,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})}render(t,e,a){const{context:s}=t,{program:i}=a;s.setFaceCullingEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunction(A.dn.ONE,A.dn.ONE_MINUS_SRC_ALPHA),s.useProgram(i),i.setUniform1f("u_time",e.time),i.setUniform1f("u_trailLength",this._params.trailLength),i.setUniform1f("u_flowSpeed",this._params.flowSpeed),i.setUniform1f("u_featheringSize",this._params.featheringSize),i.setUniform1f("u_featheringOffset",this._params.featheringOffset),i.setUniform1f("u_introFade",this._params.introFade?1:0),i.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),i.setUniform1f("u_decayRate",this._params.decayRate),i.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),i.setUniformMatrix3fv("u_displayViewMat3",e.displayViewMat3),g(i,"color","vec4",this._params.color),g(i,"opacity","float",this._params.opacity),g(i,"size","float",this._params.size),s.bindVAO(a.vertexArray),s.drawElements(A.WR.TRIANGLES,a.indexCount,A.pe.UNSIGNED_INT,0)}}const Z=new Map;Z.set("a_positionAndSide",0),Z.set("a_timeInfo",1),Z.set("a_extrude",2),Z.set("a_speed",3);const W=new Map([["geometry",[new T._("a_positionAndSide",3,A.pe.FLOAT,0,36),new T._("a_timeInfo",3,A.pe.FLOAT,12,36),new T._("a_extrude",2,A.pe.FLOAT,24,36),new T._("a_speed",1,A.pe.FLOAT,32,36)]]]),q={vsPath:"raster/flow/streamlines",fsPath:"raster/flow/streamlines",attributes:Z};class G{constructor(t,e,a){this._vertexData=t,this._indexData=e,this._values=a}attach(t){const{context:e}=t,a=S.g.createVertex(e,A._U.STATIC_DRAW,this._vertexData),s=S.g.createIndex(e,A._U.STATIC_DRAW,this._indexData),i=new Map([["geometry",a]]),r=new D.Z(e,Z,W,i,s),n=[];"ramp"===this._values.color.kind&&n.push("vvColor"),"ramp"===this._values.opacity.kind&&n.push("vvOpacity"),"ramp"===this._values.size.kind&&n.push("vvSize");const o=t.getProgram(q,n);this.vertexArray=r,this.program=o,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose()}get ready(){return this.program.compiled}}function B(t,e){const{flowSpeed:a,trailLength:s}=t,i=function(t){const e=p(_(t)),a=e,s=Math.max(e/2,5),i=Math.round((0,d.Lz)(t.maxPathLength)/s)+1,{density:r}=t;return{smoothing:(0,d.Lz)(t.smoothing),interpolate:!0,velocityScale:"flow-from"===t.flowRepresentation?1:-1,verticesPerLine:i,minSpeedThreshold:.001,segmentLength:s,maxTurnAngle:1,collisions:!0,lineCollisionWidth:a,lineSpacing:10,density:r}}(t);let r=null;const n={opacity:f(t),size:_(t)};let o=function(t){if(!t.hasVisualVariables("color"))return{kind:"constant",value:m(t.color)};const e=t.getVisualVariablesForType("color")[0],a=[],s=[];for(const i of e.stops)a.push(i.value),Array.prototype.push.apply(s,m(i.color));return{kind:"ramp",stops:a,values:s,count:e.stops.length}}(t);if("none"===t.background)n.color=o;else{"constant"===o.kind&&(o={kind:"ramp",stops:[0,1],values:[0,0,0,1,o.value[0],o.value[1],o.value[2],o.value[3]],count:2});const t={loadImagery:e.loadImagery,timeExtent:e.timeExtent,color:o,opacity:{kind:"constant",value:[1]}};r=new R(t),n.color={kind:"constant",value:[.1,.1,.1,1]}}const l={loadImagery:e.loadImagery,createFlowMesh:e.createFlowMesh,simulationSettings:i,timeExtent:e.timeExtent,trailLength:s,flowSpeed:a,featheringSize:1,featheringOffset:.5,introFade:true,fadeToZero:true,decayRate:2.3,color:n.color,opacity:n.opacity,size:n.size},c="butt"===t.trailCap||p(_(t))<=4?new N(l):new E(l);return null!=r?new C([r,c]):c}var H=a(65078),j=a(96869);class $ extends j.A{constructor(){super(...arguments),this._visualState={time:0,dvsMat3:(0,u.vt)(),displayViewMat3:(0,u.vt)()}}dispose(){}prepareState(t){const{context:e}=t;e.setColorMask(!0,!0,!0,!0),e.setStencilFunction(A.MT.EQUAL,0,255)}draw(t,e){const{requestRender:a,allowDelayedRender:s}=t,{displayData:i}=e;if(null==i)return;if("loaded"===i.state.name&&i.attach({context:t.context,getProgram:(e,a)=>t.painter.materialManager.getProgram(e,a)}),"attached"!==i.state.name)return;const r=i.state.resources;!s||r.ready||null==a?(this._visualState.time=t.time/1e3,this._visualState.dvsMat3=e.transforms.displayViewScreenMat3,this._visualState.displayViewMat3=t.state.displayViewMat3,i.flowStyle.render({context:t.context,getProgram:(e,a)=>t.painter.materialManager.getProgram(e,a)},this._visualState,r),i.flowStyle.animated&&null!=a&&a()):a()}}var X=a(39698),J=a(21159);class K extends J.A{constructor(){super(...arguments),this.flowStyle=null}doRender(t){super.doRender(t)}prepareRenderPasses(t){const e=t.registerRenderPass({name:"flow",brushes:[$],target:()=>this.children,drawPhase:X.S5.MAP});return[...super.prepareRenderPasses(t),e]}}var Q=a(64682),Y=a(12560),tt=a(75400);class et{constructor(t,e,a,s){this.state={name:"created"},this.flowStyle=t,this.extent=e,this.size=a,this.pixelRatio=s}async load(){const t=new AbortController;this.state={name:"loading",abortController:t};const e={extent:this.extent,size:this.size,pixelRatio:this.pixelRatio},a=await this.flowStyle.load(e,t.signal);this.state={name:"loaded",resources:a}}attach(t){if("loaded"!==this.state.name)return void l.A.getLogger("esri.views.2d.engine.flow.FlowDisplayData").error("Only loaded resources can be attached.");const e=this.state.resources;e.attach(t),this.state={name:"attached",resources:e}}detach(){if("loading"===this.state.name)return this.state.abortController.abort(),void(this.state={name:"detached"});"attached"===this.state.name&&(this.state.resources.detach(),this.state={name:"detached"})}update(t){return!!this.flowStyle.isCompatible(t.flowStyle)&&(!(!this.extent.equals(t.extent)||this.size[0]!==t.size[0]||this.size[1]!==t.size[1]||this.pixelRatio!==t.pixelRatio)&&(this.flowStyle=t.flowStyle,!0))}}var at=a(13767);class st extends at.q{constructor(){super(...arguments),this._displayData=null}get displayData(){return this._displayData}set displayData(t){this._displayData=t,this.requestRender()}clear(){null!=this._displayData&&(this._displayData.detach(),this._displayData=null,this.requestRender())}setTransform(t){const{displayData:e}=this;if(null==e)return;const a=e.extent.xmin,s=e.extent.ymax,i=[0,0];t.toScreen(i,[a,s]);const r=(e.extent.xmax-e.extent.xmin)/e.size[0]/t.resolution,n=(0,Q.kU)(t.rotation),{displayViewScreenMat3:o}=this.transforms;(0,h.kN)(o,[-1,1,0]),(0,h.hs)(o,o,[2/(t.size[0]*t.pixelRatio),-2/(t.size[1]*t.pixelRatio),1]),(0,h.Tl)(o,o,[i[0],i[1],0]),(0,h.e$)(o,o,n),(0,h.hs)(o,o,[r*t.pixelRatio,r*t.pixelRatio,1])}_createTransforms(){return{displayViewScreenMat3:(0,u.vt)()}}}let it=class extends r.A{constructor(t){super(t),this._flowDisplayObject=new st,this._loading=null}initialize(){this.flowContainer.addChild(this._flowDisplayObject)}destroy(){this._clear(),this.flowContainer.removeAllChildren()}get updating(){return null!=this._loading}update(t){const{flowStyle:e}=this.flowContainer;if(null==e)return void this._clear();const{extent:a,rotation:s,resolution:i,pixelRatio:r}=t.state,n=function(t,e){const a=new tt.A({x:(t.xmax+t.xmin)/2,y:(t.ymax+t.ymin)/2,spatialReference:t.spatialReference}),s=t.xmax-t.xmin,i=t.ymax-t.ymin,r=Math.abs(Math.cos((0,Q.kU)(e))),n=Math.abs(Math.sin((0,Q.kU)(e))),o=r*s+n*i,l=n*s+r*i,c=new Y.A({xmin:a.x-o/2,ymin:a.y-l/2,xmax:a.x+o/2,ymax:a.y+l/2,spatialReference:t.spatialReference});return c.centerAt(a),c}(a,s);n.expand(1.15);const o=[Math.round((n.xmax-n.xmin)/i),Math.round((n.ymax-n.ymin)/i)],c=new et(e,n,o,r);if(null!=this._loading){if(this._loading.update(c))return;this._loading.detach(),this._loading=null}null!=this._flowDisplayObject.displayData&&this._flowDisplayObject.displayData.update(c)||(c.load().then((()=>{this._flowDisplayObject.clear(),this._flowDisplayObject.displayData=this._loading,this._loading=null}),(t=>{(0,x.zf)(t)||(l.A.getLogger(this).error("A resource failed to load.",t),this._loading=null)})),this._loading=c)}_clear(){this._flowDisplayObject.clear(),null!=this._loading&&(this._loading.detach(),this._loading=null)}};(0,s._)([(0,o.MZ)()],it.prototype,"_loading",void 0),(0,s._)([(0,o.MZ)()],it.prototype,"flowContainer",void 0),(0,s._)([(0,o.MZ)()],it.prototype,"updating",null),it=(0,s._)([(0,c.$)("esri.views.2d.engine.flow.FlowStrategy")],it);const rt=it;let nt=class extends r.A{constructor(){super(...arguments),this._loadImagery=(t,e,a,s,i)=>(0,H.pH)(this.layer,t,e,a,s,i),this._createFlowMesh=(t,e,a,s)=>this.layer.createFlowMesh({meshType:t,flowData:a,simulationSettings:e},{signal:s}),this.attached=!1,this.type="flow",this.timeExtent=null,this.redrawOrRefetch=async()=>{this._updateVisualization()}}get updating(){return!this.attached||this._strategy.updating}attach(){const{layer:t}=this,e=()=>{this._loadImagery=(e,a,s,i,r)=>(0,H.pH)(t,e,a,s,i,r),this._updateVisualization()};"multidimensionalDefinition"in t?this.addHandles((0,n.wB)((()=>t.multidimensionalDefinition),e)):this.addHandles([(0,n.wB)((()=>t.mosaicRule),e),(0,n.wB)((()=>t.rasterFunction),e),(0,n.wB)((()=>t.definitionExpression),e)]),this.container=new K,this._strategy=new rt({flowContainer:this.container}),this._updateVisualization()}detach(){this._strategy.destroy(),this.container?.removeAllChildren(),this.container=null,this.removeHandles()}update(t){t.stationary?this._strategy.update(t):this.layerView.requestUpdate()}hitTest(t){return new i.A({attributes:{},geometry:t.clone(),layer:this.layer})}moveEnd(){}async doRefresh(){}_updateVisualization(){const t=this.layer.renderer;if(null==t||"flow"!==t.type)return;const e=B(t,{loadImagery:this._loadImagery,createFlowMesh:this._createFlowMesh,timeExtent:this.timeExtent});this.container.flowStyle=e,this.layerView.requestUpdate()}};(0,s._)([(0,o.MZ)()],nt.prototype,"_strategy",void 0),(0,s._)([(0,o.MZ)()],nt.prototype,"attached",void 0),(0,s._)([(0,o.MZ)()],nt.prototype,"container",void 0),(0,s._)([(0,o.MZ)()],nt.prototype,"layer",void 0),(0,s._)([(0,o.MZ)()],nt.prototype,"layerView",void 0),(0,s._)([(0,o.MZ)()],nt.prototype,"type",void 0),(0,s._)([(0,o.MZ)()],nt.prototype,"updating",null),(0,s._)([(0,o.MZ)()],nt.prototype,"timeExtent",void 0),nt=(0,s._)([(0,c.$)("esri.views.2d.engine.flow.FlowView2D")],nt);const ot=nt},49996:(t,e,a)=>{a.d(e,{D8:()=>r,TO:()=>i,d0:()=>n});var s=a(95011);async function i(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.popupTemplate;if(null==e)return[];const a=await e.getRequiredFields(t.fieldsIndex),{lastEditInfoEnabled:i}=e,{objectIdField:r,typeIdField:n,globalIdField:o,relationships:l}=t;if(a.includes("*"))return["*"];const c=i?(0,s.eX)(t):[],d=(0,s.DB)(t.fieldsIndex,[...a,...c]);return n&&d.push(n),d&&r&&t.fieldsIndex?.has(r)&&!d.includes(r)&&d.push(r),d&&o&&t.fieldsIndex?.has(o)&&!d.includes(o)&&d.push(o),l&&l.forEach((e=>{const{keyField:a}=e;d&&a&&t.fieldsIndex?.has(a)&&!d.includes(a)&&d.push(a)})),d}function r(t,e){return t.popupTemplate?t.popupTemplate:null!=e&&e.defaultPopupTemplateEnabled&&null!=t.defaultPopupTemplate?t.defaultPopupTemplate:null}function n(t,e){return null!=r(t,{defaultPopupTemplateEnabled:e})}},66748:(t,e,a)=>{a.d(e,{A:()=>c});var s=a(96869),i=a(92156);const r=new Float32Array([.27058823529411763,.4588235294117647,.7098039215686275,1,.396078431372549,.5372549019607843,.7215686274509804,1,.5176470588235295,.6196078431372549,.7294117647058823,1,.6352941176470588,.7058823529411765,.7411764705882353,1,.7529411764705882,.8,.7450980392156863,1,.8705882352941177,.8901960784313725,.7490196078431373,1,1,1,.7490196078431373,1,1,.8627450980392157,.6313725490196078,1,.9803921568627451,.7254901960784313,.5176470588235295,1,.9607843137254902,.596078431372549,.4117647058823529,1,.9294117647058824,.4588235294117647,.3176470588235294,1,.9098039215686274,.08235294117647059,.08235294117647059,1]),n=new Float32Array([0,92/255,230/255,1]),o={beaufort_ft:r,beaufort_m:r,beaufort_km:r,beaufort_mi:r,beaufort_kn:new Float32Array([.1568627450980392,.5725490196078431,.7803921568627451,1,.34901960784313724,.6352941176470588,.7294117647058823,1,.5058823529411764,.7019607843137254,.6705882352941176,1,.6274509803921569,.7607843137254902,.6078431372549019,1,.7490196078431373,.8313725490196079,.5411764705882353,1,.8549019607843137,.9019607843137255,.4666666666666667,1,.9803921568627451,.9803921568627451,.39215686274509803,1,.9882352941176471,.8352941176470589,.3254901960784314,1,.9882352941176471,.7019607843137254,.4,1,.9803921568627451,.5529411764705883,.20392156862745098,1,.9686274509803922,.43137254901960786,.16470588235294117,1,.9411764705882353,.2784313725490196,.11372549019607843,1]),classified_arrow:new Float32Array([.2196078431372549,.6588235294117647,0,1,.5450980392156862,1.2117647058823529,0,1,1,1,0,1,1,.5019607843137255,0,1,1,0,0,1]),ocean_current_m:new Float32Array([.3058823529411765,.10196078431372549,.6,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),ocean_current_kn:new Float32Array([0,0,0,1,0,.1450980392156863,.39215686274509803,1,.3058823529411765,.10196078431372549,.6,1,.592156862745098,0,.39215686274509803,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.6941176470588235,.3058823529411765,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.7019607843137254,.20392156862745098,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),simple_scalar:n,single_arrow:n,wind_speed:new Float32Array([0,0,0,1])},l=[0,20];class c extends s.A{constructor(){super(...arguments),this._desc={magdir:{vsPath:"raster/magdir",fsPath:"raster/magdir",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])},scalar:{vsPath:"raster/scalar",fsPath:"raster/scalar",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])}}}dispose(){}prepareState(t){let{context:e}=t;e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(i.dn.ONE,i.dn.ONE_MINUS_SRC_ALPHA,i.dn.ONE,i.dn.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!0),e.setStencilOp(i.eA.KEEP,i.eA.KEEP,i.eA.REPLACE)}draw(t,e){if(null==e.source||0===e.source.validPixelCount)return;const{context:a,timeline:s}=t;if(s.begin(this.name),a.setStencilFunction(i.MT.EQUAL,e.stencilRef,255),e.updateVectorFieldVAO(t),"scalar"===t.renderPass){const a=e.vaoData.scalar;a&&this._drawScalars(t,e,a.vao,a.elementCount)}else{const a=e.vaoData.magdir;a&&this._drawTriangles(t,e,a.vao,a.elementCount)}s.end(this.name)}_drawTriangles(t,e,a,s){const{context:r,painter:n,requestRender:c,allowDelayedRender:d}=t,{symbolizerParameters:h}=e,u=h.dataRange?["dataRange"]:[];"geographic"===h.rotationType&&u.push("rotationGeographic");const p=n.materialManager.getProgram(this._desc.magdir,u);if(d&&null!=c&&!p.compiled)return void c();r.useProgram(p);const{coordScale:m,opacity:_,transforms:f}=e;p.setUniform2fv("u_coordScale",m),p.setUniform1f("u_opacity",_),p.setUniformMatrix3fv("u_dvsMat3",f.displayViewScreenMat3);const{style:y,dataRange:g,rotation:v,symbolPercentRange:w}=h;p.setUniform4fv("u_colors",o[y]),p.setUniform2fv("u_dataRange",g||l),p.setUniform1f("u_rotation",v),p.setUniform2fv("u_symbolPercentRange",w);const x=this._getSymbolSize(t,e);p.setUniform2fv("u_symbolSize",x),r.bindVAO(a),r.drawElements(i.WR.TRIANGLES,s,i.pe.UNSIGNED_INT,0)}_drawScalars(t,e,a,s){const{context:r,painter:n,requestRender:o,allowDelayedRender:c}=t,{symbolizerParameters:d}=e,h=[];"wind_speed"===d.style?h.push("innerCircle"):d.dataRange&&h.push("dataRange"),"geographic"===d.rotationType&&h.push("rotationGeographic");const u=n.materialManager.getProgram(this._desc.scalar,h);if(c&&null!=o&&!u.compiled)return void o();r.useProgram(u);const{coordScale:p,opacity:m,transforms:_}=e;u.setUniform2fv("u_coordScale",p),u.setUniform1f("u_opacity",m),u.setUniformMatrix3fv("u_dvsMat3",_.displayViewScreenMat3);const{dataRange:f,symbolPercentRange:y}=d;u.setUniform2fv("u_dataRange",f||l),u.setUniform2fv("u_symbolPercentRange",y);const g=this._getSymbolSize(t,e);u.setUniform2fv("u_symbolSize",g),r.bindVAO(a),r.drawElements(i.WR.TRIANGLES,s,i.pe.UNSIGNED_INT,0)}_getSymbolSize(t,e){const a=e.key?2**(t.displayLevel-e.key.level):e.resolution/t.state.resolution,{symbolTileSize:s}=e.symbolizerParameters;return[s/(Math.round((e.width-e.offset[0])/s)*s)/a,s/(Math.round((e.height-e.offset[1])/s)*s)/a]}}},70214:(t,e,a)=>{a.d(e,{F:()=>r});a(62631),a(82301);var s=a(87431),i=a(32474);a(46047),a(7472);function r(t,e,a){if(null==t?.timeInfo)return null;const{datesInUnknownTimezone:r=!1,timeOffset:n,useViewTime:o}=t;let l=t.timeExtent;r&&(l=function(t){if(!t)return t;const{start:e,end:a}=t;return new i.A({start:null!=e?(0,s.S1)(e,e.getTimezoneOffset(),"minutes"):e,end:null!=a?(0,s.S1)(a,a.getTimezoneOffset(),"minutes"):a})}(l));let c=o?e&&l?e.intersection(l):e||l:l;return!c||c.isEmpty||c.isAllTime?c:(n&&(c=c.offset(-n.value,n.unit)),r&&(c=function(t){if(!t)return t;const{start:e,end:a}=t;return new i.A({start:null!=e?(0,s.S1)(e,-e.getTimezoneOffset(),"minutes"):e,end:null!=a?(0,s.S1)(a,-a.getTimezoneOffset(),"minutes"):a})}(c)),c.equals(a)?a:c)}},82107:(t,e,a)=>{a.d(e,{X:()=>u});a(21265);var s=a(67965),i=a(27510),r=a(74715),n=a(21543),o=a(13767),l=a(7505),c=a(80861),d=a(92156),h=a(25874);class u extends o.q{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;super(),this._source=null,this._symbolizerParameters=null,this._vaoInvalidated=!0,this.coordScale=[1,1],this.height=null,this.key=null,this.offset=null,this.stencilRef=0,this.resolution=null,this.pixelRatio=1,this.x=0,this.y=0,this.rotation=0,this.rawPixelData=null,this.vaoData=null,this.width=null,this.source=t}destroy(){null!=this.vaoData&&(this.vaoData.magdir?.vao.dispose(),this.vaoData.scalar?.vao.dispose(),this.vaoData=null)}get symbolizerParameters(){return this._symbolizerParameters}set symbolizerParameters(t){JSON.stringify(this._symbolizerParameters)!==JSON.stringify(t)&&(this._symbolizerParameters=t,this.invalidateVAO())}get source(){return this._source}set source(t){this._source=t,this.invalidateVAO()}invalidateVAO(){this._vaoInvalidated||null==this.vaoData||(this.vaoData.magdir?.vao.dispose(),this.vaoData.scalar?.vao.dispose(),this.vaoData=null,this._vaoInvalidated=!0,this.requestRender())}updateVectorFieldVAO(t){if(this._vaoInvalidated){if(this._vaoInvalidated=!1,null!=this.source&&null==this.vaoData){const{style:e}=this.symbolizerParameters;switch(e){case"beaufort_ft":case"beaufort_km":case"beaufort_kn":case"beaufort_m":case"beaufort_mi":case"classified_arrow":case"ocean_current_kn":case"ocean_current_m":case"single_arrow":{const e=(0,n.gf)(this.source,this.symbolizerParameters),a=this._createVectorFieldVAO(t.context,e);this.vaoData={magdir:a}}break;case"simple_scalar":{const e=(0,n.Ud)(this.source,this.symbolizerParameters),a=this._createVectorFieldVAO(t.context,e);this.vaoData={scalar:a}}break;case"wind_speed":{const e=(0,n.gf)(this.source,this.symbolizerParameters),a=this._createVectorFieldVAO(t.context,e),s=(0,n.Ud)(this.source,this.symbolizerParameters),i=this._createVectorFieldVAO(t.context,s);this.vaoData={magdir:a,scalar:i}}}}this.ready(),this.requestRender()}}_createTransforms(){return{displayViewScreenMat3:(0,i.vt)()}}setTransform(t){const e=(0,s.D_)(this.transforms.displayViewScreenMat3),[a,i]=t.toScreenNoRotation([0,0],[this.x,this.y]),n=this.resolution/this.pixelRatio/t.resolution,o=n*this.width,l=n*this.height,c=Math.PI*this.rotation/180;(0,s.Tl)(e,e,(0,r.fA)(a,i)),(0,s.Tl)(e,e,(0,r.fA)(o/2,l/2)),(0,s.e$)(e,e,-c),(0,s.Tl)(e,e,(0,r.fA)(-o/2,-l/2)),(0,s.Oe)(e,e,(0,r.fA)(o,l)),(0,s.lw)(this.transforms.displayViewScreenMat3,t.displayViewMat3,e)}onAttach(){this.invalidateVAO()}onDetach(){this.invalidateVAO()}_createVectorFieldVAO(t,e){const{vertexData:a,indexData:s}=e,i=c.g.createVertex(t,d._U.STATIC_DRAW,new Float32Array(a)),r=c.g.createIndex(t,d._U.STATIC_DRAW,new Uint32Array(s)),n=(0,l.ES)("vector-field",{geometry:[{location:0,name:"a_pos",count:2,type:d.pe.FLOAT,normalized:!1},{location:1,name:"a_offset",count:2,type:d.pe.FLOAT,normalized:!1},{location:2,name:"a_vv",count:2,type:d.pe.FLOAT,normalized:!1}]});return{vao:new h.Z(t,n.attributes,n.bufferLayouts,new Map([["geometry",i]]),r),elementCount:s.length}}}}}]);