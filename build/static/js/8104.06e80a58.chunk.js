"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[8104],{10876:(e,t,n)=>{function r(e){return e&&"getAtOrigin"in e&&"originOf"in e}n.d(t,{H:()=>r})},24589:(e,t,n)=>{n.d(t,{n:()=>o});var r=n(43103);function o(e){return i[function(e){return"json"===e.type?"application/json":"blob"===e.type?e.blob.type:function(e){const t=(0,r.Zo)(e);return a[t]||s}(e.url)}(e)]||l}const i={},s="text/plain",l=i[s],a={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const u in a)i[a[u]]=u},41317:(e,t,n)=>{n.d(t,{$7:()=>M,B:()=>I,Fo:()=>w,M7:()=>O,NN:()=>d,Q5:()=>_,Tq:()=>E,Up:()=>Z,XF:()=>j,Ze:()=>v,bK:()=>l,bh:()=>c,id:()=>m,ky:()=>p,qt:()=>P,tW:()=>A,v9:()=>f,w7:()=>a,wF:()=>s,wS:()=>x,wz:()=>y,x:()=>g,xS:()=>b,ze:()=>u});var r=n(84190),o=n(34308);function i(e){return e?P:E}function s(e,t){return t?.mode?t.mode:i(e).mode}function l(e,t){return null!=t?t:i(e)}function a(e,t){return s(null==e||(e.hasZ??!1),t)}function u(e,t){return l(null==e||(e.hasZ??!1),t)}function p(e){const t=h(e);return a(e.geometry,t)}function c(e){const t=h(e),n=a(e.geometry,t),r=null!=t&&"on-the-ground"!==n?O(t):0,o=t?.featureExpressionInfo;return{mode:n,offset:r,featureExpressionInfo:o}}function d(e){return y(c(e))}function f(e){return y(e)||g(e)}function g(e){return"0"===e?.featureExpressionInfo?.expression}function y(e){if(!e)return!1;if("on-the-ground"===e.mode)return!1;const t=e?.featureExpressionInfo?e.featureExpressionInfo.expression:null;return!(!t||"0"===t)}function h(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function v(e,t){if(!e?.offset)return 0;const{offset:n,unit:o}=e;if("decimal-degrees"===o)return 0;const i="unknown"!==o&&o?o:"meters",s=(0,r.mq)(t);return s?(0,r.oU)(n,i,s):0}function m(e,t,n){if(!n?.mode)return;const r=e.hasZ?e.z:0,o=v(n,e.spatialReference);switch(n.mode){case"absolute-height":return r-o;case"on-the-ground":return 0;case"relative-to-ground":return r-((t.elevationProvider.getElevation(e.x,e.y,r,e.spatialReference,"ground")??0)+o);case"relative-to-scene":return r-((t.elevationProvider.getElevation(e.x,e.y,r,e.spatialReference,"scene")??0)+o)}}function x(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return w(e,t.x,t.y,t.hasZ?t.z:0,t.spatialReference,n,r)}function b(e,t,n,r){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return w(e,t[0],t[1],t.length>2?t[2]:0,n,r,o)}function w(e,t,n,r,o,i){let s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;if(null==i)return;const l=null!=s?s.mode:"absolute-height";if("on-the-ground"===l)return 0;const{absoluteZ:a}=_(t,n,r,o,e,i);return function(e,t,n,r,o,i,s,l){const a=v(s,o);switch(l){case"absolute-height":return e-a;case"relative-to-ground":return e-((i.elevationProvider.getElevation(t,n,r,o,"ground")??0)+a);case"relative-to-scene":return e-((i.elevationProvider.getElevation(t,n,r,o,"scene")??0)+a)}}(a,t,n,r,o,e,s,l)}function _(e,t,n,r,o,i){const s=v(i,r);switch(i.mode){case"absolute-height":return{absoluteZ:n+s,elevation:0};case"on-the-ground":{const n=o.elevationProvider.getElevation(e,t,0,r,"ground")??0;return{absoluteZ:n,elevation:n}}case"relative-to-ground":{const i=o.elevationProvider.getElevation(e,t,n,r,"ground")??0;return{absoluteZ:n+i+s,elevation:i}}case"relative-to-scene":{const i=o.elevationProvider.getElevation(e,t,n,r,"scene")??0;return{absoluteZ:n+i+s,elevation:i}}}}function Z(e,t){if(null==t)return!1;const{mode:n}=t;return null!=n&&("scene"===e&&"relative-to-scene"===n||"ground"===e&&"absolute-height"!==n)}function I(e,t,n){return n&&n.mode!==t?`${e} only support ${t} elevation mode`:null}function M(e,t,n){return n?.mode===t?`${e} do not support ${t} elevation mode`:null}function A(e,t){return null!=t?.featureExpressionInfo&&"0"!==t.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function j(e,t){t&&e.warn(".elevationInfo=",t)}function O(e){return(e?.offset??0)*(0,o.Ao)(e?.unit)}const P={mode:"absolute-height",offset:0},E={mode:"on-the-ground",offset:null}},46751:(e,t,n)=>{n.d(t,{P:()=>f});var r=n(74719),o=n(99521),i=n(10876),s=n(43103),l=n(12130),a=n(54391),u=n(70605),p=n(48602),c=n(24589),d=n(85042);function f(e){const t=e?.origins??[void 0];return(n,r)=>{const o=function(e,t,n){if("resource"===e?.type)return function(e,t,n){const r=(0,a.z4)(t,n);return{type:String,read:(e,t,n)=>{const o=(0,d.r)(e,t,n);return r.type===String?o:"function"==typeof r.type?new r.type({url:o}):void 0},write:{isRequired:r.json?.write?.isRequired,writer(t,o,l,a){if(!a?.resources)return"string"==typeof t?void(o[l]=(0,d.t)(t,a)):void(o[l]=t.write({},a));const p=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),f=(0,d.t)(p,{...a,verifyItemRelativeUrls:a?.verifyItemRelativeUrls?{writtenUrls:a.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},d.M.NO),v=r.type!==String&&(!(0,i.H)(this)||a?.origin&&this.originIdOf(n)>(0,u.aB)(a.origin)),m={object:this,propertyName:n,value:t,targetUrl:f,dest:o,targetPropertyName:l,context:a,params:e};a?.portalItem&&f&&!(0,s.oP)(f)?v&&e?.contentAddressed?g(m):v?function(e){const{context:t,targetUrl:n,params:r,value:o,dest:i,targetPropertyName:l}=e;if(!t.portalItem)return;const a=t.portalItem.resourceFromPath(n),u=h(o,n,t),p=(0,c.n)(u),d=(0,s.Zo)(a.path),f=r?.compress??!1;p===d?(t.resources&&y({...e,resource:a,content:u,compress:f,updates:t.resources.toUpdate}),i[l]=n):g(e)}(m):function(e){let{context:t,targetUrl:n,dest:r,targetPropertyName:o}=e;t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(n),compress:!1}),r[o]=n)}(m):a?.portalItem&&(null==f||null!=(0,d.i)(f)||(0,s.w8)(f)||v)?g(m):o[l]=f}}}}(e,t,n);switch(e?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=d.b;return{read:e,write:t}}}}(e,n,r);for(const e of t){const t=(0,p.rM)(n,e,r);for(const e in o)t[e]=o[e]}}}function g(e){const{targetUrl:t,params:n,value:i,context:a,dest:u,targetPropertyName:p}=e;if(!a.portalItem)return;const f=(0,d.p)(t),g=h(i,t,a);if(n?.contentAddressed&&"json"!==g.type)return void a.messages?.push(new r.A("persistable:contentAddressingUnsupported",`Property "${p}" is trying to serializing a resource with content of type ${g.type} with content addressing. Content addressing is only supported for json resources.`,{content:g}));const v=n?.contentAddressed&&"json"===g.type?(0,o.d)(g.jsonString):f?.filename??(0,l.lk)(),m=(0,s.fj)(n?.prefix??f?.prefix,v),x=`${m}.${(0,c.n)(g)}`;if(n?.contentAddressed&&a.resources&&"json"===g.type){const e=a.resources.toKeep.find((e=>{let{resource:t}=e;return t.path===x}))??a.resources.toAdd.find((e=>{let{resource:t}=e;return t.path===x}));if(e)return void(u[p]=e.resource.itemRelativeUrl)}const b=a.portalItem.resourceFromPath(x);(0,s.w8)(t)&&a.resources&&a.resources.pendingOperations.push((0,s.tk)(t).then((e=>{b.path=`${m}.${(0,c.n)({type:"blob",blob:e})}`,u[p]=b.itemRelativeUrl})).catch((()=>{})));const w=n?.compress??!1;a.resources&&y({...e,resource:b,content:g,compress:w,updates:a.resources.toAdd}),u[p]=b.itemRelativeUrl}function y(e){let{object:t,propertyName:n,updates:r,resource:o,content:i,compress:s}=e;r.push({resource:o,content:i,compress:s,finish:e=>{!function(e,t,n){"string"==typeof e[t]?e[t]=n.url:e[t].url=n.url}(t,n,e)}})}function h(e,t,n){return"string"==typeof e?{type:"url",url:t}:{type:"json",jsonString:JSON.stringify(e.toJSON(n))}}},98104:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var r=n(93800),o=n(38432),i=n(28576),s=n(6946),l=n(85715),a=n(19455),u=n(17741),p=n(48602),c=(n(21265),n(50925),n(14746),n(75269)),d=n(46751),f=n(75400),g=n(87730);let y=class extends(a.A.JSONSupportMixin(l.A.ClonableMixin(s.A))){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return(0,u.CM)(this.position,e.position)&&(0,u.CM)(this.elevationInfo,e.elevationInfo)&&(0,i.xH)(this.feature,e.feature)}};(0,r._)([(0,p.MZ)({type:f.A,json:{write:{isRequired:!0}}})],y.prototype,"position",void 0),(0,r._)([(0,p.MZ)({type:g.A}),(0,d.P)()],y.prototype,"elevationInfo",void 0),(0,r._)([(0,p.MZ)(i.N1)],y.prototype,"feature",void 0),y=(0,r._)([(0,c.$)("esri.analysis.LineOfSightAnalysisObserver")],y);const h=y;let v=class extends(a.A.JSONSupportMixin(l.A)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return(0,u.CM)(this.position,e.position)&&(0,u.CM)(this.elevationInfo,e.elevationInfo)&&(0,i.xH)(this.feature,e.feature)}};(0,r._)([(0,p.MZ)({type:f.A,json:{write:!0,origins:{"web-scene":{write:{isRequired:!0}}}}}),(0,d.P)()],v.prototype,"position",void 0),(0,r._)([(0,p.MZ)({type:g.A}),(0,d.P)()],v.prototype,"elevationInfo",void 0),(0,r._)([(0,p.MZ)(i.N1)],v.prototype,"feature",void 0),v=(0,r._)([(0,c.$)("esri.analysis.LineOfSightAnalysisTarget")],v);const m=v;var x=n(48690),b=n(40736),w=n(79953),_=n(96913),Z=n(4309),I=n(41317);const M=x.A.ofType(m);let A=class extends o.A{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles((0,w.wB)((()=>this._computeExtent()),(e=>{null==e?.pending&&this._set("extent",null!=e?e.extent:null)}),w.pc))}get targets(){return this._get("targets")||new M}set targets(e){this._set("targets",(0,b.V)(e,this.targets,M))}get spatialReference(){return null!=this.observer?.position?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[this.observer?.position]}async waitComputeExtent(){const e=this._computeExtent();return null!=e?e.pending:Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(null==this.observer?.position||null==e)return null;const t=e=>"absolute-height"===(0,I.w7)(e.position,e.elevationInfo),n=this.observer.position,r=(0,Z.fA)(n.x,n.y,n.z,n.x,n.y,n.z);for(const i of this.targets)if(null!=i.position){const t=(0,_.projectOrLoad)(i.position,e);if(null!=t.pending)return{pending:t.pending,extent:null};if(null!=t.geometry){const{x:e,y:n,z:o}=t.geometry;(0,Z.iT)(r,[e,n,o])}}const o=(0,Z.w1)(r,e);return t(this.observer)&&this.targets.every(t)||(o.zmin=void 0,o.zmax=void 0),{pending:null,extent:o}}clear(){this.observer=null,this.targets.removeAll()}};(0,r._)([(0,p.MZ)({type:["line-of-sight"]})],A.prototype,"type",void 0),(0,r._)([(0,p.MZ)({type:h,json:{read:!0,write:!0}})],A.prototype,"observer",void 0),(0,r._)([(0,p.MZ)({cast:b.H,type:M,nonNullable:!0,json:{read:!0,write:!0}})],A.prototype,"targets",null),(0,r._)([(0,p.MZ)({value:null,readOnly:!0})],A.prototype,"extent",void 0),(0,r._)([(0,p.MZ)({readOnly:!0})],A.prototype,"spatialReference",null),(0,r._)([(0,p.MZ)({readOnly:!0})],A.prototype,"requiredPropertiesForEditing",null),A=(0,r._)([(0,c.$)("esri.analysis.LineOfSightAnalysis")],A);const j=A;var O=n(59321),P=n(57457),E=n(8592);const R=x.A.ofType(m);let S=class extends((0,E.q)((0,O.P)(P.A))){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new j,this.opacity=1}initialize(){this.addHandles((0,w.wB)((()=>this.analysis),((e,t)=>{null!=t&&t.parent===this&&(t.parent=null),null!=e&&(e.parent=this)}),w.pc))}async load(){return null!=this.analysis&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return this.analysis?.observer}set observer(e){const{analysis:t}=this;t&&(t.observer=e)}get targets(){return null!=this.analysis?this.analysis.targets:new x.A}set targets(e){(0,b.V)(e,this.analysis?.targets)}get fullExtent(){return null!=this.analysis?this.analysis.extent:null}get spatialReference(){return null!=this.analysis?this.analysis.spatialReference:null}releaseAnalysis(e){this.analysis===e&&(this.analysis=new j)}};(0,r._)([(0,p.MZ)({json:{read:!1},readOnly:!0})],S.prototype,"type",void 0),(0,r._)([(0,p.MZ)({type:["LineOfSightLayer"]})],S.prototype,"operationalLayerType",void 0),(0,r._)([(0,p.MZ)({type:h,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],S.prototype,"observer",null),(0,r._)([(0,p.MZ)({type:R,json:{read:!0,write:{ignoreOrigin:!0,isRequired:!0}}})],S.prototype,"targets",null),(0,r._)([(0,p.MZ)({type:j,nonNullable:!0,json:{read:!1,write:!1}})],S.prototype,"analysis",void 0),(0,r._)([(0,p.MZ)({readOnly:!0})],S.prototype,"fullExtent",null),(0,r._)([(0,p.MZ)({readOnly:!0})],S.prototype,"spatialReference",null),(0,r._)([(0,p.MZ)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],S.prototype,"opacity",void 0),(0,r._)([(0,p.MZ)({type:["show","hide"]})],S.prototype,"listMode",void 0),S=(0,r._)([(0,c.$)("esri.layers.LineOfSightLayer")],S);const z=S}}]);