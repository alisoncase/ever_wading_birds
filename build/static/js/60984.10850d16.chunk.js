"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[60984],{1277:(t,e,r)=>{r.d(e,{C:()=>u,Cr:()=>d,H6:()=>O,LV:()=>l,_I:()=>h,dz:()=>A,fA:()=>g,kb:()=>f,ld:()=>v,sd:()=>p,vt:()=>c});var n=r(64682),i=r(32636),a=r(89227),s=r(28473),o=r(1696);function c(t){return t?{origin:(0,s.o8)(t.origin),vector:(0,s.o8)(t.vector)}:{origin:(0,s.vt)(),vector:(0,s.vt)()}}function l(t,e){const r=m.get();return r.origin=t,r.vector=e,r}function u(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c();return g(t.origin,t.vector,e)}function g(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c();return(0,a.c)(r.origin,t),(0,a.c)(r.vector,e),r}function d(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c();return(0,a.c)(r.origin,t),(0,a.d)(r.vector,e,t),r}function f(t,e){const r=(0,a.d)(o.rq.get(),e,t.origin),i=(0,a.f)(t.vector,r),s=(0,a.f)(t.vector,t.vector),c=(0,n.qE)(i/s,0,1),l=(0,a.d)(o.rq.get(),(0,a.h)(o.rq.get(),t.vector,c),r);return(0,a.f)(l,l)}function h(t,e,r){return O(t,e,0,1,r)}function p(t,e,r){return(0,a.g)(r,t.origin,(0,a.h)(r,t.vector,e))}function O(t,e,r,i,s){const{vector:c,origin:l}=t,u=(0,a.d)(o.rq.get(),e,l),g=(0,a.f)(c,u)/(0,a.k)(c);return(0,a.h)(s,c,(0,n.qE)(g,r,i)),(0,a.g)(s,s,t.origin)}function A(t,e){if(E(t,l(e.origin,e.direction),!1,T)){const{tA:e,pB:r,distance2:n}=T;if(e>=0&&e<=1)return n;if(e<0)return(0,a.s)(t.origin,r);if(e>1)return(0,a.s)((0,a.g)(o.rq.get(),t.origin,t.vector),r)}return null}function v(t,e,r){return!!E(t,e,!0,T)&&((0,a.c)(r,T.pA),!0)}function E(t,e,r,i){const s=1e-6,c=t.origin,l=(0,a.g)(o.rq.get(),c,t.vector),u=e.origin,g=(0,a.g)(o.rq.get(),u,e.vector),d=o.rq.get(),f=o.rq.get();if(d[0]=c[0]-u[0],d[1]=c[1]-u[1],d[2]=c[2]-u[2],f[0]=g[0]-u[0],f[1]=g[1]-u[1],f[2]=g[2]-u[2],Math.abs(f[0])<s&&Math.abs(f[1])<s&&Math.abs(f[2])<s)return!1;const h=o.rq.get();if(h[0]=l[0]-c[0],h[1]=l[1]-c[1],h[2]=l[2]-c[2],Math.abs(h[0])<s&&Math.abs(h[1])<s&&Math.abs(h[2])<s)return!1;const p=d[0]*f[0]+d[1]*f[1]+d[2]*f[2],O=f[0]*h[0]+f[1]*h[1]+f[2]*h[2],A=d[0]*h[0]+d[1]*h[1]+d[2]*h[2],v=f[0]*f[0]+f[1]*f[1]+f[2]*f[2],E=(h[0]*h[0]+h[1]*h[1]+h[2]*h[2])*v-O*O;if(Math.abs(E)<s)return!1;let T=(p*O-A*v)/E,m=(p+O*T)/v;r&&(T=(0,n.qE)(T,0,1),m=(0,n.qE)(m,0,1));const b=o.rq.get(),I=o.rq.get();return b[0]=c[0]+T*h[0],b[1]=c[1]+T*h[1],b[2]=c[2]+T*h[2],I[0]=u[0]+m*f[0],I[1]=u[1]+m*f[1],I[2]=u[2]+m*f[2],i.tA=T,i.tB=m,i.pA=b,i.pB=I,i.distance2=(0,a.s)(b,I),!0}const T={tA:0,tB:0,pA:(0,s.vt)(),pB:(0,s.vt)(),distance2:0},m=new i.I((()=>c()))},20783:(t,e,r)=>{r.d(e,{Y:()=>n,m:()=>i});const n=class{},i=new n},22131:(t,e,r)=>{var n;function i(t){return t===n.POSITION}r.d(e,{b:()=>i,r:()=>n}),function(t){t.POSITION="position",t.NORMAL="normal",t.NORMALCOMPRESSED="normalCompressed",t.UV0="uv0",t.COLOR="color",t.SYMBOLCOLOR="symbolColor",t.SIZE="size",t.ROTATION="rotation",t.TANGENT="tangent",t.OFFSET="offset",t.PERSPECTIVEDIVIDE="perspectiveDivide",t.CENTEROFFSETANDDISTANCE="centerOffsetAndDistance",t.LENGTH="length",t.PREVPOSITION="prevPosition",t.NEXTPOSITION="nextPosition",t.SUBDIVISIONFACTOR="subdivisionFactor",t.COLORFEATUREATTRIBUTE="colorFeatureAttribute",t.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",t.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",t.DISTANCETOSTART="distanceToStart",t.UVMAPSPACE="uvMapSpace",t.BOUNDINGRECT="boundingRect",t.UVREGION="uvRegion",t.PROFILERIGHT="profileRight",t.PROFILEUP="profileUp",t.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",t.FEATUREVALUE="featureValue",t.INSTANCEMODELORIGINHI="instanceModelOriginHi",t.INSTANCEMODELORIGINLO="instanceModelOriginLo",t.INSTANCEMODEL="instanceModel",t.INSTANCEMODELNORMAL="instanceModelNormal",t.INSTANCECOLOR="instanceColor",t.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",t.LOCALTRANSFORM="localTransform",t.GLOBALTRANSFORM="globalTransform",t.BOUNDINGSPHERE="boundingSphere",t.MODELORIGIN="modelOrigin",t.MODELSCALEFACTORS="modelScaleFactors",t.FEATUREATTRIBUTE="featureAttribute",t.STATE="state",t.LODLEVEL="lodLevel",t.POSITION0="position0",t.POSITION1="position1",t.NORMAL2COMPRESSED="normal2Compressed",t.COMPONENTINDEX="componentIndex",t.VARIANTOFFSET="variantOffset",t.VARIANTSTROKE="variantStroke",t.VARIANTEXTENSION="variantExtension",t.SIDENESS="sideness",t.START="start",t.END="end",t.UP="up",t.START_UP="startUp",t.END_UP="endUp",t.EXTRUDE="extrude",t.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",t.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}(n||(n={}))},25071:(t,e,r)=>{r.d(e,{B:()=>v,a:()=>T,b:()=>W,c:()=>S,d:()=>E,e:()=>D,f:()=>m,g:()=>N,h:()=>P,i:()=>R,n:()=>B,r:()=>x,t:()=>U,u:()=>b});r(21265);var n=r(50925),i=r(64682),a=r(32636),s=r(87752),o=r(10382),c=r(89227),l=r(28473),u=r(90772),g=r(91345),d=r(1277),f=r(10872),h=r(91102),p=r(49943),O=r(1696);const A=()=>n.A.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");const v=class{constructor(){this.plane=(0,f.vt)(),this.origin=(0,l.vt)(),this.basis1=(0,l.vt)(),this.basis2=(0,l.vt)()}};function E(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k;return{plane:(0,f.vt)(t.plane),origin:(0,l.o8)(t.origin),basis1:(0,l.o8)(t.basis1),basis2:(0,l.o8)(t.basis2)}}function T(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E();return m(t.origin,t.basis1,t.basis2,e)}function m(t,e,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:E();return(0,c.c)(n.origin,t),(0,c.c)(n.basis1,e),(0,c.c)(n.basis2,r),b(n),function(t,e){Math.abs((0,c.f)(t.basis1,t.basis2)/((0,c.l)(t.basis1)*(0,c.l)(t.basis2)))>1e-6&&A().warn(e,"Provided basis vectors are not perpendicular"),Math.abs((0,c.f)(t.basis1,B(t)))>1e-6&&A().warn(e,"Basis vectors and plane normal are not perpendicular"),Math.abs(-(0,c.f)(B(t),t.origin)-t.plane[3])>1e-6&&A().warn(e,"Plane offset is not consistent with plane origin")}(n,"fromValues()"),n}function b(t){(0,f.mR)(t.basis2,t.basis1,t.origin,t.plane)}function I(t,e,r){t!==r&&T(t,r);const n=(0,c.h)(O.rq.get(),B(t),e);return(0,c.g)(r.origin,r.origin,n),r.plane[3]-=e,r}function N(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E();const r=(t[2]-t[0])/2,n=(t[3]-t[1])/2;return(0,c.i)(e.origin,t[0]+r,t[1]+n,0),(0,c.i)(e.basis1,r,0,0),(0,c.i)(e.basis2,0,n,0),(0,f.fA)(0,0,1,0,e.plane),e}function R(t,e,r){return!!(0,f.Ui)(t.plane,e,r)&&y(t,r)}function C(t,e,r){const n=G.get();Y(t,e,n,G.get());let a=Number.POSITIVE_INFINITY;for(const s of X){const o=w(t,s,j.get()),l=O.rq.get();if((0,f.T7)(n,o,l)){const t=(0,c.o)(O.rq.get(),e.origin,l),n=Math.abs((0,i.XM)((0,c.f)(e.direction,t)));n<a&&(a=n,(0,c.c)(r,l))}}return a===Number.POSITIVE_INFINITY?F(t,e,r):r}function S(t,e){return(e-t)/e}function F(t,e,r){if(R(t,e,r))return r;const n=G.get(),i=G.get();Y(t,e,n,i);let a=Number.POSITIVE_INFINITY;for(const s of X){const o=w(t,s,j.get()),l=O.rq.get();if((0,f.gv)(n,o,l)){const t=(0,h.kb)(e,l);if(!(0,f.Tj)(i,l))continue;t<a&&(a=t,(0,c.c)(r,l))}}return _(t,e.origin)<a&&M(t,e.origin,r),r}function M(t,e,r){const n=(0,f._I)(t.plane,e,O.rq.get()),i=(0,d.H6)(V(t,t.basis1),n,-1,1,O.rq.get()),a=(0,d.H6)(V(t,t.basis2),n,-1,1,O.rq.get());return(0,c.d)(r,(0,c.g)(O.rq.get(),i,a),t.origin),r}function L(t,e,r){const{origin:n,basis1:i,basis2:a}=t,s=(0,c.d)(O.rq.get(),e,n),o=(0,p.gr)(i,s),l=(0,p.gr)(a,s),u=(0,p.gr)(B(t),s);return(0,c.i)(r,o,l,u)}function _(t,e){const r=L(t,e,O.rq.get()),{basis1:n,basis2:i}=t,a=(0,c.l)(n),s=(0,c.l)(i),o=Math.max(Math.abs(r[0])-a,0),l=Math.max(Math.abs(r[1])-s,0),u=r[2];return o*o+l*l+u*u}function P(t,e){return Math.sqrt(_(t,e))}function D(t,e){return(0,f.Tj)(t.plane,e)&&y(t,e)}function q(t,e){const r=-t.plane[3];return(0,p.gr)(B(t),e)-r}function U(t,e,r){return t!==r&&T(t,r),(0,s.B8)(J,e),(0,s.mg)(J,J),(0,c.t)(r.basis1,t.basis1,J),(0,c.t)(r.basis2,t.basis2,J),(0,c.t)((0,f.Qj)(r.plane),(0,f.Qj)(t.plane),J),(0,c.t)(r.origin,t.origin,e),(0,f.mP)(r.plane,r.plane,r.origin),r}function x(t,e,r,n){return t!==n&&T(t,n),(0,s.$0)(Q,e,r),(0,c.t)(n.basis1,t.basis1,Q),(0,c.t)(n.basis2,t.basis2,Q),b(n),n}function B(t){return(0,f.Qj)(t.plane)}function y(t,e){const r=(0,c.d)(O.rq.get(),e,t.origin),n=(0,c.k)(t.basis1),i=(0,c.k)(t.basis2),a=(0,c.f)(t.basis1,r),s=(0,c.f)(t.basis2,r);return-a-n<0&&a-n<0&&-s-i<0&&s-i<0}function V(t,e){const r=j.get();return(0,c.c)(r.origin,t.origin),(0,c.c)(r.vector,e),r}function w(t,e,r){const{basis1:n,basis2:i,origin:a}=t,s=(0,c.h)(O.rq.get(),n,e.origin[0]),o=(0,c.h)(O.rq.get(),i,e.origin[1]);(0,c.g)(r.origin,s,o),(0,c.g)(r.origin,r.origin,a);const l=(0,c.h)(O.rq.get(),n,e.direction[0]),u=(0,c.h)(O.rq.get(),i,e.direction[1]);return(0,c.h)(r.vector,(0,c.g)(l,l,u),2),r}function Y(t,e,r,n){const i=B(t);(0,f.mR)(i,e.direction,e.origin,r),(0,f.mR)((0,f.Qj)(r),i,e.origin,n)}const k={plane:(0,f.vt)(),origin:(0,l.fA)(0,0,0),basis1:(0,l.fA)(1,0,0),basis2:(0,l.fA)(0,1,0)},G=new a.I(f.vt),j=new a.I(d.vt),H=(0,l.vt)(),z=new a.I((()=>E())),X=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],J=(0,o.vt)(),Q=(0,o.vt)(),W=Object.freeze(Object.defineProperty({__proto__:null,BoundedPlaneClass:v,altitudeAt:q,axisAt:function(t,e,r,n){return function(t,e,r){switch(e){case g._.X:(0,c.c)(r,t.basis1),(0,c.n)(r,r);break;case g._.Y:(0,c.c)(r,t.basis2),(0,c.n)(r,r);break;case g._.Z:(0,c.c)(r,B(t))}return r}(t,r,n)},cameraFrustumCoverage:S,closestPoint:F,closestPointOnSilhouette:C,copy:T,copyWithoutVerify:function(t,e){(0,c.c)(e.origin,t.origin),(0,c.c)(e.basis1,t.basis1),(0,c.c)(e.basis2,t.basis2),(0,f.C)(e.plane,t.plane)},create:E,distance:P,distance2:_,distanceToSilhouette:function(t,e){let r=Number.NEGATIVE_INFINITY;for(const n of X){const i=w(t,n,j.get()),a=(0,d.kb)(i,e);a>r&&(r=a)}return Math.sqrt(r)},elevate:I,equals:function(t,e){return(0,c.p)(t.basis1,e.basis1)&&(0,c.p)(t.basis2,e.basis2)&&(0,c.p)(t.origin,e.origin)},extrusionContainsPoint:D,fromAABoundingRect:N,fromValues:m,getExtent:function(t,e){const r=t.basis1[0],n=t.basis2[1],[i,a]=t.origin;return(0,u.fA)(i-r,a-n,i+r,a+n,e)},intersectRay:R,intersectRayClosestSilhouette:function(t,e,r){if(R(t,e,r))return r;const n=C(t,e,O.rq.get());return(0,c.g)(r,e.origin,(0,c.h)(O.rq.get(),e.direction,(0,c.j)(e.origin,n)/(0,c.l)(e.direction))),r},normal:B,projectPoint:M,projectPointLocal:L,rotate:x,setAltitudeAt:function(t,e,r,n){const i=q(t,e),a=(0,c.h)(H,B(t),r-i);return(0,c.g)(n,e,a),n},setExtent:function(t,e,r){return N(e,r),I(r,q(t,t.origin),r),r},transform:U,up:k,updateUnboundedPlane:b,wrap:function(t,e,r){const n=z.get();return n.origin=t,n.basis1=e,n.basis2=r,n.plane=(0,f.LV)(0,0,0,0),b(n),n}},Symbol.toStringTag,{value:"Module"}))},33683:(t,e,r)=>{r.d(e,{J:()=>i});var n=r(31923);class i{constructor(){this.id=(0,n.c)()}}},44375:(t,e,r)=>{r.d(e,{M4:()=>c,MD:()=>d,cJ:()=>g,hs:()=>f,m0:()=>u,mt:()=>o});var n=r(64682),i=r(25071),a=r(89476),s=r(51064);function o(t,e){return new h(t,p,e)}function c(t,e){const{curvatureDependent:r,scaleStart:n,scaleFallOffRange:i}=p;return new h(t,{curvatureDependent:{min:{curvature:r.min.curvature,tiltAngle:r.min.tiltAngle,scaleFallOffFactor:O.curvatureDependent.min.scaleFallOffFactor},max:{curvature:r.max.curvature,tiltAngle:r.max.tiltAngle,scaleFallOffFactor:O.curvatureDependent.max.scaleFallOffFactor}},scaleStart:n,scaleFallOffRange:i,minPixelSize:O.minPixelSize},e)}function l(t,e,r){const n=r.parameters;return A.scale=Math.min(n.divisor/(e-n.offset),1),A.factor=function(t){return Math.abs(t*t*t)}(t),A}function u(t,e){return(0,n.Cc)(t*Math.max(e.scale,e.minScaleFactor),t,e.factor)}function g(t,e,r,n){n.scale=function(t,e,r){const n=l(t,e,r);return n.minScaleFactor=0,u(1,n)}(t,e,r),n.factor=0,n.minScaleFactor=r.minScaleFactor}function d(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0,0];const n=Math.min(Math.max(e.scale,e.minScaleFactor),1);return r[0]=t[0]*n,r[1]=t[1]*n,r}function f(t,e,r,n){return u(t,l(e,r,n))}class h{get minScaleFactor(){return null!=this._fontHeight?Math.min(this._description.minPixelSize/this._fontHeight,1):0}constructor(t,e,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{camera:{distance:0,fovY:0},divisor:0,offset:0},i=arguments.length>4?arguments[4]:void 0;this._viewingMode=t,this._description=e,this._ellipsoidRadius=r,this.parameters=n,this._fontHeight=i,this._viewingMode===s.RT.Local?(this._coverageCompensation=this._surfaceCoverageCompensationLocal,this._calculateCurvatureDependentParameters=this._calculateCurvatureDependentParametersLocal):(this._coverageCompensation=this._surfaceCoverageCompensationGlobal,this._calculateCurvatureDependentParameters=this._calculateCurvatureDependentParametersGlobal)}update(t){return(!this.parameters||this.parameters.camera.fovY!==t.fovY||this.parameters.camera.distance!==t.distance)&&(this._calculateParameters(t,this._ellipsoidRadius,this.parameters),!0)}overrideFontHeight(t){return t!==this._fontHeight?new h(this._viewingMode,this._description,this._ellipsoidRadius,this.parameters,t):this}_calculateParameters(t,e,r){const{scaleStart:n,scaleFallOffRange:i}=this._description,{fovY:a,distance:s}=t,o=this._calculateCurvatureDependentParameters(t,e),c=this._coverageCompensation(t,e,o),{tiltAngle:l,scaleFallOffFactor:u}=o,g=Math.sin(l)*s,d=.5*Math.PI-l-a*(.5-n*c),f=g/Math.cos(d),h=d+a*i*c,p=(f-u*(g/Math.cos(h)))/(1-u);return r.camera.fovY=t.fovY,r.camera.distance=t.distance,r.offset=p,r.divisor=f-p,r}_calculateCurvatureDependentParametersLocal(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:v;return r.tiltAngle=this._description.curvatureDependent.min.tiltAngle,r.scaleFallOffFactor=this._description.curvatureDependent.min.scaleFallOffFactor,r}_calculateCurvatureDependentParametersGlobal(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:v;const i=this._description.curvatureDependent,a=1+t.distance/e,s=Math.sqrt(a*a-1),[o,c]=[i.min.curvature,i.max.curvature],l=(0,n.qE)((s-o)/(c-o),0,1),[u,g]=[i.min,i.max];return r.tiltAngle=(0,n.Cc)(u.tiltAngle,g.tiltAngle,l),r.scaleFallOffFactor=(0,n.Cc)(u.scaleFallOffFactor,g.scaleFallOffFactor,l),r}_surfaceCoverageCompensationLocal(t,e,r){return(0,i.c)(r.tiltAngle,t.fovY)}_surfaceCoverageCompensationGlobal(t,e,r){return(0,a.b)(E,e),(0,a.d)(E,r.tiltAngle,t.distance,t.fovY)}}const p={curvatureDependent:{min:{curvature:(0,n.kU)(10),tiltAngle:(0,n.kU)(12),scaleFallOffFactor:.5},max:{curvature:(0,n.kU)(70),tiltAngle:(0,n.kU)(40),scaleFallOffFactor:.8}},scaleStart:.3,scaleFallOffRange:.65,minPixelSize:0},O={curvatureDependent:{min:{scaleFallOffFactor:.7},max:{scaleFallOffFactor:.95}},minPixelSize:14};const A={scale:0,factor:0,minScaleFactor:0},v={tiltAngle:0,scaleFallOffFactor:0},E=(0,a.c)()},60984:(t,e,r)=>{r.d(e,{im:()=>g,m$:()=>n,qA:()=>d});var n,i,a=r(28473),s=r(33683),o=r(69291),c=r(69586),l=r(64003),u=r(20783);class g extends s.J{constructor(t,e){super(),this.type=o.X.Material,this.supportsEdges=!1,this._renderPriority=0,this.vertexAttributeLocations=c.D,this._pp0=(0,a.fA)(0,0,1),this._pp1=(0,a.fA)(0,0,0),this._parameters=new e,(0,l.MB)(this._parameters,t),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(t){return!1}setParameters(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];(0,l.MB)(this._parameters,t)&&(this.validateParameters(this._parameters),e&&this._parametersChanged())}validateParameters(t){}shouldRender(t){return this.visible&&this.isVisibleForOutput(t.output)&&(!this.parameters.isDecoration||t.bind.decorations)&&!!(this.parameters.renderOccluded&t.renderOccludedMask)}isVisibleForOutput(t){return!0}get renderPriority(){return this._renderPriority}set renderPriority(t){t!==this._renderPriority&&(this._renderPriority=t,this._parametersChanged())}_parametersChanged(){this.repository?.materialChanged(this)}queryRenderOccludedState(t){return this.visible&&this.parameters.renderOccluded===t}get hasEmissions(){return!1}intersectDraped(t,e,r,n,i,a){return this._pp0[0]=this._pp1[0]=n[0],this._pp0[1]=this._pp1[1]=n[1],this.intersect(t,e,r,this._pp0,this._pp1,i)}}(i=n||(n={}))[i.None=0]="None",i[i.Occlude=1]="Occlude",i[i.Transparent=2]="Transparent",i[i.OccludeAndTransparent=4]="OccludeAndTransparent",i[i.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",i[i.Opaque=16]="Opaque";class d extends u.Y{constructor(){super(...arguments),this.renderOccluded=n.Occlude,this.isDecoration=!1}}},64003:(t,e,r)=>{r.d(e,{MB:()=>o,Um:()=>c,kE:()=>s});var n=r(62631),i=r(64682),a=r(44375);function s(t,e,r,n,s){let o=(r.screenLength||0)*t.pixelRatio;null!=s&&(o=(0,a.hs)(o,n,e,s));const c=o*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return(0,i.qE)(c*e,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function o(t,e){let r=!1;for(const i in e){const a=e[i];void 0!==a&&(Array.isArray(a)?Array.isArray(t[i])&&(0,n.aI)(a,t[i])||(t[i]=a.slice(),r=!0):t[i]!==a&&(r=!0,t[i]=a))}return r}const c={multiply:1,ignore:2,replace:3,tint:4}},69291:(t,e,r)=>{var n;r.d(e,{X:()=>n}),function(t){t[t.Layer=0]="Layer",t[t.Object=1]="Object",t[t.Mesh=2]="Mesh",t[t.Line=3]="Line",t[t.Point=4]="Point",t[t.Material=5]="Material",t[t.Texture=6]="Texture",t[t.COUNT=7]="COUNT"}(n||(n={}))},69586:(t,e,r)=>{r.d(e,{D:()=>i});var n=r(22131);const i=new Map([[n.r.POSITION,0],[n.r.NORMAL,1],[n.r.NORMALCOMPRESSED,1],[n.r.UV0,2],[n.r.COLOR,3],[n.r.COLORFEATUREATTRIBUTE,3],[n.r.SIZE,4],[n.r.TANGENT,4],[n.r.CENTEROFFSETANDDISTANCE,5],[n.r.SYMBOLCOLOR,5],[n.r.FEATUREATTRIBUTE,6],[n.r.INSTANCEFEATUREATTRIBUTE,6],[n.r.INSTANCECOLOR,7],[n.r.OBJECTANDLAYERIDCOLOR,7],[n.r.INSTANCEOBJECTANDLAYERIDCOLOR,7],[n.r.ROTATION,8],[n.r.INSTANCEMODEL,8],[n.r.INSTANCEMODELNORMAL,12],[n.r.INSTANCEMODELORIGINHI,11],[n.r.INSTANCEMODELORIGINLO,15]])}}]);