"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[14380],{13473:(t,e,n)=>{function o(){return[1,0,0,0,1,0,0,0,1]}function r(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]}function i(t,e,n,o,r,i,l,s,c){return[t,e,n,o,r,i,l,s,c]}n.d(e,{fA:()=>i,o8:()=>r,vt:()=>o,zK:()=>l});const l=[1,0,0,0,1,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:l,clone:r,create:o,createView:function(t,e){return new Float64Array(t,e,9)},fromValues:i},Symbol.toStringTag,{value:"Module"}))},14380:(t,e,n)=>{n.r(e),n.d(e,{default:()=>E});var o=n(93800),r=n(85715),i=n(74719),l=n(19455),s=n(50925),c=n(79970),a=n(16804),u=n(48602),p=(n(21265),n(14746),n(14800)),f=n(75269),h=n(15484),P=n(67965),d=n(13473),m=n(32006),y=n(98080),g=n(75400),v=n(65920),w=n(96913),R=n(93321),_=n(95617);const x=(0,d.vt)(),Z=(0,y.vt)();let C=class extends l.A{};(0,o._)([(0,u.MZ)({type:Number,json:{write:{isRequired:!0}}})],C.prototype,"x",void 0),(0,o._)([(0,u.MZ)({type:Number,json:{write:{isRequired:!0}}})],C.prototype,"y",void 0),C=(0,o._)([(0,f.$)("esri.layers.support.ControlPointsGeoreference.ControlPointJSONType")],C);let b=class extends r.A{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};(0,o._)([(0,u.MZ)()],b.prototype,"sourcePoint",void 0),(0,o._)([(0,u.MZ)({type:g.default})],b.prototype,"mapPoint",void 0),b=(0,o._)([(0,f.$)("esri.layers.support.ControlPointsGeoreference.ControlPoint")],b);let j=class extends(l.A.JSONSupportMixin(_.A)){constructor(t){super(t),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(t,e){const n=R.default.fromJSON(e.spatialReference),o=(0,d.fA)(...e.coefficients,1);return t.map((t=>((0,m.hZ)(Z,t.x,t.y),(0,c.W)(Z,Z,o),{sourcePoint:t,mapPoint:new g.default({x:Z[0],y:Z[1],spatialReference:n})})))}writeControlPoints(t,e,n,o){if(null!=this.transform)null!=t&&A(t[0])&&(e.controlPoints=t.map((t=>{const e=t.sourcePoint;return{x:e.x,y:e.y}})),e.spatialReference=t[0].mapPoint.spatialReference.toJSON(),e.coefficients=this.transform.slice(0,8));else{const t=new i.default("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration. Make sure the parent media element is loaded i.e. the ImageElement or VideoElement set as 'MediaLayer.source'.",{layer:o?.layer,georeference:this});o?.messages?o.messages.push(t):s.A.getLogger(this).error(t.name,t.message)}}get coords(){if(null==this.controlPoints)return null;const t=this._updateTransform(x);if(null==t||!A(this.controlPoints[0]))return null;const e=this.controlPoints[0].mapPoint.spatialReference;return function(t,e,n,o){const r=(0,y.fA)(0,n),i=(0,y.fA)(0,0),l=(0,y.fA)(e,0),s=(0,y.fA)(e,n);return(0,c.W)(r,r,t),(0,c.W)(i,i,t),(0,c.W)(l,l,t),(0,c.W)(s,s,t),new v.default({rings:[[r,i,l,s,r]],spatialReference:o})}(t,this.width,this.height,e)}set coords(t){if(null==this.controlPoints||!A(this.controlPoints[0]))return;const e=this.controlPoints[0].mapPoint.spatialReference;if(null==(t=this.projectOrWarn(t,e)))return;const{width:n,height:o}=this,{rings:[[r,i,l,s]]}=t,u={sourcePoint:(0,a.tc)(0,o),mapPoint:new g.default({x:r[0],y:r[1],spatialReference:e})},p={sourcePoint:(0,a.tc)(0,0),mapPoint:new g.default({x:i[0],y:i[1],spatialReference:e})},f={sourcePoint:(0,a.tc)(n,0),mapPoint:new g.default({x:l[0],y:l[1],spatialReference:e})},h={sourcePoint:(0,a.tc)(n,o),mapPoint:new g.default({x:s[0],y:s[1],spatialReference:e})};A(u)&&A(p)&&A(f)&&A(h)&&(k(x,u,p,f,h),this.controlPoints=this.controlPoints.map((t=>{let{sourcePoint:n}=t;return(0,m.hZ)(Z,n.x,n.y),(0,c.W)(Z,Z,x),{sourcePoint:n,mapPoint:new g.default({x:Z[0],y:Z[1],spatialReference:e})}})))}get inverseTransform(){return null==this.transform?null:(0,P.B8)((0,d.vt)(),this.transform)}get transform(){return this._updateTransform()}toMap(t){if(null==t||null==this.transform||null==this.controlPoints||!A(this.controlPoints[0]))return null;(0,m.hZ)(Z,t.x,t.y);const e=this.controlPoints[0].mapPoint.spatialReference;return(0,c.W)(Z,Z,this.transform),new g.default({x:Z[0],y:Z[1],spatialReference:e})}toSource(t){if(null==t||null==this.inverseTransform||null==this.controlPoints||!A(this.controlPoints[0]))return null;const e=this.controlPoints[0].mapPoint.spatialReference;return t=t.normalize(),null==(t=(0,w.projectOrLoad)(t,e).geometry)?null:((0,m.hZ)(Z,t.x,t.y),(0,c.W)(Z,Z,this.inverseTransform),(0,a.tc)(Z[0],Z[1]))}toSourceNormalized(t){const e=this.toSource(t);return null!=e&&(e.x/=this.width,e.y/=this.height),e}_updateTransform(t){const{controlPoints:e,width:n,height:o}=this;if(!(null!=e&&n>0&&o>0))return null;const[r,i,l,s]=e;if(!A(r))return null;const c=r.mapPoint.spatialReference,a=this._projectControlPoint(i,c),u=this._projectControlPoint(l,c),p=this._projectControlPoint(s,c);if(!a.valid||!u.valid||!p.valid)return null;if(!A(a.controlPoint))return null;null==t&&(t=(0,d.vt)());let f=null;return f=A(u.controlPoint)&&A(p.controlPoint)?k(t,r,a.controlPoint,u.controlPoint,p.controlPoint):A(u.controlPoint)?function(t,e,n,o){return L(M,T,e),L(O,W,n),L(N,q,o),(0,m.Cc)(S,M,O,.5),(0,m.e$)(S,N,S,Math.PI),(0,m.Cc)($,T,W,.5),(0,m.e$)($,q,$,Math.PI),K(t,M,O,N,S,T,W,q,$)}(t,r,a.controlPoint,u.controlPoint):function(t,e,n){return L(M,T,e),L(O,W,n),(0,m.e$)(N,O,M,I),(0,m.e$)(S,M,O,I),(0,m.e$)(q,W,T,-I),(0,m.e$)($,T,W,-I),K(t,M,O,N,S,T,W,q,$)}(t,r,a.controlPoint),f.every((t=>0===t))?null:f}_projectControlPoint(t,e){if(!A(t))return{valid:!0,controlPoint:t};const{sourcePoint:n,mapPoint:o}=t,{geometry:r,pending:i}=(0,w.projectOrLoad)(o,e);return i?{valid:!1,controlPoint:null}:i||r?{valid:!0,controlPoint:{sourcePoint:n,mapPoint:r}}:(s.A.getLogger(this).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:t,sourceSpatialReference:o.spatialReference,targetSpatialReference:e}),{valid:!1,controlPoint:null})}};function A(t){return null!=t?.sourcePoint&&null!=t.mapPoint}(0,o._)([(0,u.MZ)({type:[b],json:{write:{allowNull:!1,isRequired:!0,target:{controlPoints:{type:[C],isRequired:!0},coefficients:{type:[Number],isRequired:!0},spatialReference:{type:R.default,isRequired:!0}}}}})],j.prototype,"controlPoints",void 0),(0,o._)([(0,p.w)("controlPoints")],j.prototype,"readControlPoints",null),(0,o._)([(0,h.K)("controlPoints")],j.prototype,"writeControlPoints",null),(0,o._)([(0,u.MZ)({clonable:!1})],j.prototype,"coords",null),(0,o._)([(0,u.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],j.prototype,"height",void 0),(0,o._)([(0,u.MZ)({readOnly:!0})],j.prototype,"inverseTransform",null),(0,o._)([(0,u.MZ)({readOnly:!0})],j.prototype,"transform",null),(0,o._)([(0,u.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],j.prototype,"width",void 0),j=(0,o._)([(0,f.$)("esri.layers.support.ControlPointsGeoreference")],j);const M=(0,y.vt)(),O=(0,y.vt)(),N=(0,y.vt)(),S=(0,y.vt)(),T=(0,y.vt)(),W=(0,y.vt)(),q=(0,y.vt)(),$=(0,y.vt)(),I=Math.PI/2;function L(t,e,n){(0,m.hZ)(t,n.sourcePoint.x,n.sourcePoint.y),(0,m.hZ)(e,n.mapPoint.x,n.mapPoint.y)}function k(t,e,n,o,r){return L(M,T,e),L(O,W,n),L(N,q,o),L(S,$,r),K(t,M,O,N,S,T,W,q,$)}const z=new Array(8).fill(0),G=new Array(8).fill(0);function J(t,e,n,o,r){return t[0]=e[0],t[1]=e[1],t[2]=n[0],t[3]=n[1],t[4]=o[0],t[5]=o[1],t[6]=r[0],t[7]=r[1],t}function K(t,e,n,o,r,i,l,s,a){return(0,c.O)(t,J(z,e,n,o,r),J(G,i,l,s,a))}const E=j},79970:(t,e,n)=>{n.d(e,{O:()=>f,W:()=>p});var o=n(67965),r=n(13473),i=n(32006),l=n(89227);const s=(0,n(28473).vt)(),c=(0,r.vt)(),a=(0,r.vt)(),u=(0,r.vt)();function p(t,e,n){return(0,l.i)(s,e[0],e[1],1),(0,l.q)(s,s,(0,o.mg)(c,n)),0===s[2]?(0,i.hZ)(t,s[0],s[1]):(0,i.hZ)(t,s[0]/s[2],s[1]/s[2])}function f(t,e,n){return h(a,e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]),h(u,n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]),(0,o.lw)(t,(0,o.KC)(a,a),u),0!==t[8]&&(t[0]/=t[8],t[1]/=t[8],t[2]/=t[8],t[3]/=t[8],t[4]/=t[8],t[5]/=t[8],t[6]/=t[8],t[7]/=t[8],t[8]/=t[8]),t}function h(t,e,n,r,i,a,u,p,f){(0,o.hZ)(t,e,r,a,n,i,u,1,1,1),(0,l.i)(s,p,f,1),(0,o.KC)(c,t);const[h,P,d]=(0,l.q)(s,s,(0,o.mg)(c,c));return(0,o.hZ)(c,h,0,0,0,P,0,0,0,d),(0,o.lw)(t,c,t)}},95617:(t,e,n)=>{n.d(e,{A:()=>a});var o=n(93800),r=n(85715),i=n(50925),l=(n(21265),n(14746),n(74719),n(75269)),s=n(96913);let c=class extends r.A{projectOrWarn(t,e){if(null==t)return t;const{geometry:n,pending:o}=(0,s.projectOrLoad)(t,e);return o?null:o||n?n:(i.A.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:t,sourceSpatialReference:t.spatialReference,targetSpatialReference:e}),null)}};c=(0,o._)([(0,l.$)("esri.layers.support.GeoreferenceBase")],c);const a=c}}]);