"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[26121],{2925:(t,e,n)=>{n.d(e,{$:()=>M,IB:()=>h,Iy:()=>O,KV:()=>B,N2:()=>P,QP:()=>z,RH:()=>k,Vl:()=>C,Ws:()=>H,ZD:()=>x,_L:()=>I,bJ:()=>A,e$:()=>$,f6:()=>V,hw:()=>D,pW:()=>R,pf:()=>Z,rs:()=>L,sn:()=>U,we:()=>T});var i=n(88102),r=n(62631),o=n(82301),a=n(64682),s=n(60548),l=n(24646);function h(t){return"r"in t&&"g"in t&&"b"in t}function c(t){return"h"in t&&"s"in t&&"v"in t}function u(t){return"l"in t&&"a"in t&&"b"in t}function d(t){return"l"in t&&"c"in t&&"h"in t}const f=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],p=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function g(t,e){const n=[];let i,r;if(t[0].length!==e.length)throw new Error("dimensions do not match");const o=t.length,a=t[0].length;let s=0;for(i=0;i<o;i++){for(s=0,r=0;r<a;r++)s+=t[i][r]*e[r];n.push(s)}return n}function v(t){const e=[t.r/255,t.g/255,t.b/255].map((t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4)),n=g(f,e);return{x:100*n[0],y:100*n[1],z:100*n[2]}}function w(t){const e=g(p,[t.x/100,t.y/100,t.z/100]).map((t=>{const e=t<=.0031308?12.92*t:1.055*t**(1/2.4)-.055;return Math.min(1,Math.max(e,0))}));return{r:Math.round(255*e[0]),g:Math.round(255*e[1]),b:Math.round(255*e[2])}}function y(t){const e=[t.x/95.047,t.y/100,t.z/108.883].map((t=>t>(6/29)**3?t**(1/3):1/3*(29/6)**2*t+4/29));return{l:116*e[1]-16,a:500*(e[0]-e[1]),b:200*(e[1]-e[2])}}function _(t){const e=t.l,n=[(e+16)/116+t.a/500,(e+16)/116,(e+16)/116-t.b/200].map((t=>t>6/29?t**3:3*(6/29)**2*(t-4/29)));return{x:95.047*n[0],y:100*n[1],z:108.883*n[2]}}function b(t){return function(t){const e=t.l,n=t.a,i=t.b,r=Math.sqrt(n*n+i*i);let o=Math.atan2(i,n);return o=o>0?o:o+2*Math.PI,{l:e,c:r,h:o}}(y(v(t)))}function m(t){return w(_(function(t){const e=t.l,n=t.c,i=t.h;return{l:e,a:n*Math.cos(i),b:n*Math.sin(i)}}(t)))}function M(t){return h(t)?t:d(t)?m(t):u(t)?function(t){return w(_(t))}(t):function(t){return"x"in t&&"y"in t&&"z"in t}(t)?w(t):c(t)?function(t){const e=(t.h+360)%360/60,n=t.s/100,i=t.v/100*255,r=i*n,o=r*(1-Math.abs(e%2-1));let a;switch(Math.floor(e)){case 0:a={r:r,g:o,b:0};break;case 1:a={r:o,g:r,b:0};break;case 2:a={r:0,g:r,b:o};break;case 3:a={r:0,g:o,b:r};break;case 4:a={r:o,g:0,b:r};break;case 5:case 6:a={r:r,g:0,b:o};break;default:a={r:0,g:0,b:0}}return a.r=Math.round(a.r+i-r),a.g=Math.round(a.g+i-r),a.b=Math.round(a.b+i-r),a}(t):t}function P(t){return c(t)?t:function(t){const e=t.r,n=t.g,i=t.b,r=Math.max(e,n,i),o=r-Math.min(e,n,i);let a=r,s=0===o?0:r===e?(n-i)/o%6:r===n?(i-e)/o+2:(e-n)/o+4,l=0===o?0:o/a;return s<0&&(s+=6),s*=60,l*=100,a*=100/255,{h:s,s:l,v:a}}(M(t))}function x(t){return u(t)?t:function(t){return y(v(t))}(M(t))}function k(t){return d(t)?t:b(M(t))}function L(t){return E(t).isBright?"light":"dark"}function E(t){let{r:e,g:n,b:r,a:o}=t;return o<1&&(e=Math.round(o*e+255*(1-o)),n=Math.round(o*n+255*(1-o)),r=Math.round(o*r+255*(1-o))),new i.default({r:e,g:n,b:r})}function H(t,e){const{r:n,g:i,b:r}=e?.ignoreAlpha?t:E(t);return.2126*n+.7152*i+.0722*r}var R,S;function A(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:R.High;return H(t,{ignoreAlpha:!0})>e?new i.default([0,0,0,t.a]):new i.default([255,255,255,t.a])}function $(t,e){const n=x(t);n.l*=1-e;const i=M(n),r=t.clone();return r.setColor(i),r.a=t.a,r}function I(t,e){const n=t.clone();return n.a*=e,n}function C(t,e){const n=P(t);n.s*=e;const i=M(n),r=t.clone();return r.setColor(i),r.a=t.a,r}function z(t){return i.default.toUnitRGBA(t)}function D(t,e){return t===e||null!=t&&t.equals(e)}function T(t,e){return t===e||null!=t&&null!=e&&(0,s.e)(t,e)}function Z(t){return(0,l.fA)(t[0],t[1],t[2],t.length>3?t[3]:1)}function B(t){return t[0]??=0,t[1]??=0,t[2]??=0,t}function U(t){return t.length=4,B(t),t[3]??=1,(0,a.qE)(t[3],0,1),t}function V(t,e){const n=i.default.toUnitRGBA(t);return n[3]*=e,n}function O(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(0===t.length||e<=0)return[];if(1===(t=t.map((t=>"string"==typeof t?new i.default(t):t))).length||1===e){const n=[],i=t[0];for(let t=0;t<e;t++)n.push(i.clone());return n}if(n.shuffle&&(t=(0,r.k4)((0,o.clone)(t),n.seed)),t.length>=e){const n=[],i=(t.length-1)/(e-1);for(let r=0;r<e;r++){const e=Math.round(r*i);n.push(t[e].clone())}return n}return function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const i=[],o=t.length-1,a=Math.ceil((e-t.length)/o);t:for(let r=0;r<o;r++){const o=t[r],s=t[r+1];for(let r=1;r<=a;r++){const l=r/(a+1);if(i.push(q(o,s,l,n)),i.length+t.length===e)break t}}return[...t.map((t=>t.clone())),...(0,r.k4)(i,n.seed??1)]}(t,e,n)}(S=R||(R={}))[S.Low=160]="Low",S[S.High=225]="High";const j=(t,e)=>{const n=Math.floor(10*e())-5;return Math.min(255,Math.max(0,t+n))};function q(t,e,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const a=t.r,s=t.g,l=t.b,h=e.r,c=e.g,u=e.b,d=Math.round(a+(h-a)*n),f=Math.round(s+(c-s)*n),p=Math.round(l+(u-l)*n);if(!o.offset)return new i.default([d,f,p]);const g=(0,r.Mo)(o.seed);return new i.default([j(d,g),j(f,g),j(p,g)])}},19983:(t,e,n)=>{n.d(e,{E5:()=>s,JU:()=>a,Of:()=>r,Uk:()=>o,WK:()=>l,g7:()=>h,lO:()=>c,lQ:()=>u});var i=n(74719);function r(t){return t&&"function"==typeof t.highlight}function o(t){return t&&"function"==typeof t.maskOccludee}function a(t,e,n){return null==t||t>=n&&(0===e||t<=e)}function s(t,e){if(e&&t){const{minScale:n,maxScale:i}=t;if(l(n,i))return a(e,n,i)}return!0}function l(t,e){return null!=t&&t>0||null!=e&&e>0}function h(t){return!t?.minScale||!t.maxScale||t.minScale>=t.maxScale}function c(t){return null!=t&&"object"==typeof t&&"createQuery"in t&&"queryFeatures"in t&&"layer"in t&&"view"in t}function u(t,e,n){return new i.default("layerview:spatial-reference-incompatible",`The spatial reference of this ${t}${e?`(wkid:${e})`:""} is incompatible with the spatial reference of the view${n?`(wkid:${n})`:""}.`,{})}},26121:(t,e,n)=>{n.r(e),n.d(e,{ElevationProfileView2D:()=>P});var i=n(90834),r=n(17741),o=n(79953),a=n(92645),s=n(76264),l=n(58828),h=n(49959),c=n(19983);class u{constructor(t){this._params=t,this._highlightTask=null,this._highlightHandle=null}destroy(){this.remove()}remove(){this._highlightTask=(0,r.DC)(this._highlightTask),this._highlightHandle=(0,r.xt)(this._highlightHandle)}update(t){if(this.remove(),null==t||(null==(e=t).geometry||"polyline"!==e.geometry.type))return;var e;const n=t.layer;this._highlightTask=(0,l.UT)((async e=>{const i=await this._params.view.whenLayerView(n);(0,h.throwIfAborted)(e);const r=(0,c.Of)(i)?i:null;r&&(this._highlightHandle=r.highlight(t))}))}}var d=n(93800),f=n(79625),p=n(6946),g=n(2925),v=n(76469),w=n(48602),y=(n(21265),n(50925),n(14746),n(75269)),_=n(70674),b=n(14360),m=n(60831);let M=class extends p.default{constructor(t){super(t),this._chartData=null,this._graphic=new f.default,this._layer=new _.default({listMode:"hide",internal:!0,title:"Profile line"}),this._update=t=>{const{chartData:e}=t;if(null==e)return this.remove();if(!e.refined)return;const n=e.lines.find((t=>t.viewVisualizationEnabled));if(!n)return;this._graphic.geometry=(0,m.T)(n,t.spatialReference),this._graphic.symbol=new b.default({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",effects:[{type:"CIMGeometricEffectDashes",dashTemplate:[5,10],lineDashEnding:"HalfPattern",controlPointEnding:"HalfPattern"}],capStyle:"Butt",width:1.5,color:n.color.toArray()},{type:"CIMSolidStroke",capStyle:"Butt",width:2,color:(0,g.bJ)(n.color).toArray()}]}}});const i=this.view?.map?.layers;i&&!i.includes(this._layer)&&i.add(this._layer)}}initialize(){this._layer.add(this._graphic);const t=(0,a.zj)().profileLinesUpdateThrottleMillis;let e=this._update;if(t>0){const n=(0,v.n)(this._update,t);this.addHandles(n),e=n}this.addHandles((0,o.watch)((()=>({spatialReference:this.view.spatialReference,chartData:this._chartData})),e,o.syncAndInitial))}destroy(){this.remove()}remove(){this.view?.map?.remove(this._layer)}update(t){this._chartData=t}};(0,d._)([(0,w.MZ)()],M.prototype,"view",void 0),(0,d._)([(0,w.MZ)()],M.prototype,"_chartData",void 0),M=(0,d._)([(0,y.$)("esri.widgets.ElevationProfile.support.ProfileLine2D")],M);class P{constructor(t,e){this._handles=new i.default,this._inputRepresentation=new u({view:t}),this._hoveredPoints=new s.t({view:t}),this._profileLine=new M({view:t}),this._handles.add([(0,o.watch)((()=>e.viewModel.hoveredPoints),(t=>this._hoveredPoints.update(t)),o.syncAndInitial),(0,o.watch)((()=>{const{state:t,highlightEnabled:n,viewModel:i}=e;return{input:i.input,state:t,highlightEnabled:n}}),(t=>this._updateInputRepresentation(t)),o.syncAndInitial),(0,o.watch)((()=>e.viewModel.chartData),(t=>this._profileLine.update(t)),o.syncAndInitial),(0,o.watch)((()=>e.viewModel.input?.geometry),(()=>{this._profileLine.remove()}),o.syncAndInitial)])}destroy(){this._handles=(0,r.pR)(this._handles),this._inputRepresentation=(0,r.pR)(this._inputRepresentation),this._hoveredPoints=(0,r.pR)(this._hoveredPoints),this._profileLine=(0,r.pR)(this._profileLine)}_updateInputRepresentation(t){let{input:e,state:n,highlightEnabled:i}=t;n===a.o8.Selected&&i?this._inputRepresentation.update(e):this._inputRepresentation.remove()}}},60831:(t,e,n)=>{n.d(e,{T:()=>r});var i=n(54824);function r(t,e){const n=t.samples??[],r=n.length-1,o=[];let a=[];for(let i=0;i<=r;i++){const{x:t,y:e,z:s}=n[i];null!=s&&a.push([t,e,s]),i!==r&&null!=s||!a.length||(o.push(a),a=[])}return new i.default({paths:o,hasZ:!0,spatialReference:e})}},71456:(t,e,n)=>{n.d(e,{A:()=>c});var i=n(93800),r=n(58448),o=n(79953),a=n(48602),s=(n(21265),n(50925),n(14746),n(75269)),l=n(96913);let h=class extends r.A.EventedAccessor{constructor(t){super(t),this.location=null,this.screenLocationEnabled=!1,this.view=null,this.addHandles([(0,o.when)((()=>{const t=this.screenLocationEnabled?this.view:null;return t?[t.size,"3d"===t.type?t.camera:t.viewpoint]:null}),(()=>this.notifyChange("screenLocation"))),(0,o.watch)((()=>this.screenLocation),((t,e)=>{null!=t&&null!=e&&this.emit("view-change")}))])}destroy(){this.view=null}get screenLocation(){const{location:t,view:e,screenLocationEnabled:n}=this,i=e?.spatialReference,r=i?(0,l.projectOrLoad)(t,i).geometry:null;return n&&r&&e?.ready?e.toScreen(r):null}};(0,i._)([(0,a.MZ)()],h.prototype,"location",void 0),(0,i._)([(0,a.MZ)()],h.prototype,"screenLocation",null),(0,i._)([(0,a.MZ)()],h.prototype,"screenLocationEnabled",void 0),(0,i._)([(0,a.MZ)()],h.prototype,"view",void 0),h=(0,i._)([(0,s.$)("esri.widgets.support.AnchorElementViewModel")],h);const c=h},76264:(t,e,n)=>{n.d(e,{t:()=>u});var i=n(93800),r=n(6946),o=n(89129),a=n(79953),s=n(48602),l=(n(21265),n(50925),n(14746),n(75269)),h=n(92645),c=n(71456);let u=class extends r.default{constructor(t){super(t),this._hoveredPoints=new o.default}initialize(){this.addHandles((0,a.watch)((()=>this._hoveredPoints.toArray().map((t=>{let{anchor:e,element:n}=t;return{screenLocation:e.screenLocation,element:n}}))),(t=>{for(const{screenLocation:e,element:n}of t)e&&(n.style.transform=`translate(${e.x}px, ${e.y}px)`)}),a.syncAndInitial))}destroy(){this._hoveredPoints.drain((t=>this._destroyHoveredPoint(t)))}update(t){const e=this.view,n=this._hoveredPoints,i=t.length;for(;this._hoveredPoints.length>i;)this._destroyHoveredPoint(this._hoveredPoints.pop());for(;this._hoveredPoints.length<i;){const t=this._makeHoveredPoint();n.push(t),e.surface?.appendChild(t.element)}for(let r=0;r<i;++r){const e=n.at(i-1-r),o=t[r];this._updateHoveredPoint(e,o)}}_makeHoveredPoint(){const{size:t,borderStyle:e,borderColor:n,borderWidth:i,boxShadow:r}=(0,h.zj)().hoveredPointsStyle,o=this.view,a=new c.A({view:o,screenLocationEnabled:!0}),s=document.createElement("div"),l=s.style;return l.position="absolute",l.top="0",l.left="0",l.contain="strict",l.boxSizing="border-box",l.width=`${t}px`,l.height=`${t}px`,l.marginTop=`-${t/2}px`,l.marginLeft=`-${t/2}px`,l.border=`${e} ${i}px ${n}`,l.borderRadius=`${t}px`,l.boxShadow=r,{anchor:a,element:s}}_updateHoveredPoint(t,e){let{anchor:n,element:i}=t;n.screenLocationEnabled=!0,n.location=e.hoveredPoint;const r=i.style;r.display="block",r.background=e.color.toCss()}_destroyHoveredPoint(t){let{anchor:e,element:n}=t;e.destroy(),this.view.surface?.removeChild(n)}};(0,i._)([(0,s.MZ)()],u.prototype,"view",void 0),(0,i._)([(0,s.MZ)()],u.prototype,"_hoveredPoints",void 0),u=(0,i._)([(0,l.$)("esri.widgets.ElevationProfile.support.HoveredPoints")],u)}}]);