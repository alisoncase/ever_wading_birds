"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[60814,97545],{7472:(e,t,r)=>{r.d(t,{X:()=>n});const n=Symbol("WebScene")},48464:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(93800),i=r(74719),a=r(17741),s=r(49959),l=r(48602),o=(r(21265),r(50925),r(14746),r(75269)),u=r(63646),m=r(75972);const c=e=>{let t=class extends e{initialize(){this.exportImageParameters=new u.r({layer:this.layer})}destroy(){this.exportImageParameters=(0,a.pR)(this.exportImageParameters)}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}get timeExtent(){return(0,m.F)(this.layer,this.view?.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(e,t){const{layer:r}=this;if(!e)throw new i.default("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r});const{popupEnabled:n}=r;if(!n)throw new i.default("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:n});const a=this.createFetchPopupFeaturesQuery(e);if(!a)return[];const{extent:l,width:o,height:u,x:m,y:c}=a;if(!(l&&o&&u))throw new i.default("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:l,width:o,height:u});const p=await r.fetchFeatureInfo(l,o,u,m,c);return(0,s.throwIfAborted)(t),p}};return(0,n._)([(0,l.MZ)()],t.prototype,"exportImageParameters",void 0),(0,n._)([(0,l.MZ)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,n._)([(0,l.MZ)()],t.prototype,"layer",void 0),(0,n._)([(0,l.MZ)({readOnly:!0})],t.prototype,"timeExtent",null),t=(0,n._)([(0,o.$)("esri.views.layers.WMSLayerView")],t),t}},60814:(e,t,r)=>{r.r(t),r.d(t,{getTimeExtentFromLayers:()=>p,getTimeSliderSettingsFromWebDocument:()=>h,toLocalTimeExtent:()=>y,toUTCTimeExtent:()=>f});var n=r(62631),i=r(82301),a=r(87431),s=r(32474),l=r(46047),o=r(7472);function u(e){return void 0!==e.timeInfo}async function m(e,t){return e.widgets?.timeSlider?.fullTimeExtent??p(e.allLayers,t)}function c(e){const{numStops:t,stopInterval:r,stops:n}=e;return n?{dates:(0,i.clone)(n)}:r?{interval:r.clone()}:{count:t??5}}async function p(e,t){if(0===e.length)return s.default.allTime;await Promise.all(e.map((e=>e.load({signal:t}))));const r=e.filter(u),i=e.filter((e=>!u(e)&&null!=e.visibilityTimeExtent));if(0===r.length&&0===i.length)return s.default.allTime;const a=[],l=[];for(const n of r)"feature"!==n?.type&&"map-image"!==n?.type||!n.timeInfo?.hasLiveData?l.push(n):a.push(n);const o=e=>null==e||e.isAllTime,m=[...l.map((e=>{const t=e.timeInfo?.fullTimeExtent,{visibilityTimeExtent:r}=e;return t?.intersection(r)??r})),...i.map((e=>e.visibilityTimeExtent))];if(m.some(o))return s.default.allTime;const c=a.map((async e=>{const r=(await e.fetchRecomputedExtents({signal:t}))?.timeExtent??e.timeInfo?.fullTimeExtent,{visibilityTimeExtent:n}=e;return r?.intersection(n)??n})),p=(await Promise.allSettled(c)).map((e=>"fulfilled"===e.status?e.value:null));if(p.some(o))return s.default.allTime;const d=[...p,...m].filter(n.Ru);return 0===d.length?s.default.allTime:d.reduce(((e,t)=>e.union(t)))}function d(e,t){const r=e.currentTimeExtent;if(!r)return null;const{start:n,end:i}=r,a=n??i??null;switch(t){case"time-window":return new s.default({start:n,end:i});case"cumulative-from-start":return new s.default({start:null,end:a});case"cumulative-from-end":return new s.default({start:a,end:null});case"instant":return new s.default({start:a,end:a})}}async function h(e,t){if(!(0,l.r)(e)&&!function(e){return null!=e&&"object"==typeof e&&o.X in e}(e))return null;await e.load({signal:t});const r=e?.widgets?.timeSlider;if(!r)return null;const n=await m(e,t),i=r.loop,a=function(e){const t=e.numThumbs??2,r=e.currentTimeExtent;if(r){const{start:e,end:n}=r;return null!=e&&null!=n&&e.getTime()===n.getTime()?"instant":2===t?"time-window":null==e||0===e.getTime()?"cumulative-from-start":"cumulative-from-end"}return 2===t?"time-window":"cumulative-from-start"}(r);return{fullTimeExtent:n,loop:i,mode:a,playRate:r.stopDelay??2e3,stops:c(r),timeExtent:d(r,a)}}function f(e){if(!e)return e;const{start:t,end:r}=e;return new s.default({start:null!=t?(0,a.S1)(t,-t.getTimezoneOffset(),"minutes"):t,end:null!=r?(0,a.S1)(r,-r.getTimezoneOffset(),"minutes"):r})}function y(e){if(!e)return e;const{start:t,end:r}=e;return new s.default({start:null!=t?(0,a.S1)(t,t.getTimezoneOffset(),"minutes"):t,end:null!=r?(0,a.S1)(r,r.getTimezoneOffset(),"minutes"):r})}},63646:(e,t,r)=>{r.d(t,{r:()=>o});var n=r(93800),i=r(6946),a=r(48602),s=(r(21265),r(50925),r(14746),r(75269));const l={visible:"visibleSublayers"};let o=class extends i.default{constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(l[e.propertyName])))],"layer"))}get layers(){return this.visibleSublayers.filter((e=>{let{name:t}=e;return t})).map((e=>{let{name:t}=e;return t})).join()}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:t}=this,r=e?.sublayers,n=[],i=e=>{const{minScale:r,maxScale:a,sublayers:s,visible:l}=e;l&&(0===t||(0===r||t<=r)&&(0===a||t>=a))&&(s?s.forEach(i):n.push(e))};return r?.forEach(i),n}toJSON(){const{layer:e,layers:t}=this,{imageFormat:r,imageTransparency:n,version:i}=e;return{format:r,request:"GetMap",service:"WMS",styles:"",transparent:n?"TRUE":"FALSE",version:i,layers:t}}};(0,n._)([(0,a.MZ)()],o.prototype,"layer",null),(0,n._)([(0,a.MZ)({readOnly:!0})],o.prototype,"layers",null),(0,n._)([(0,a.MZ)({type:Number})],o.prototype,"scale",void 0),(0,n._)([(0,a.MZ)({readOnly:!0})],o.prototype,"version",null),(0,n._)([(0,a.MZ)({readOnly:!0})],o.prototype,"visibleSublayers",null),o=(0,n._)([(0,s.$)("esri.layers.support.ExportWMSImageParameters")],o)},75972:(e,t,r)=>{r.d(t,{F:()=>i});var n=r(60814);function i(e,t,r){if(null==e?.timeInfo)return null;const{datesInUnknownTimezone:i=!1,timeOffset:a,useViewTime:s}=e;let l=e.timeExtent;i&&(l=(0,n.toLocalTimeExtent)(l));let o=s?t&&l?t.intersection(l):t||l:l;return!o||o.isEmpty||o.isAllTime?o:(a&&(o=o.offset(-a.value,a.unit)),i&&(o=(0,n.toUTCTimeExtent)(o)),o.equals(r)?r:o)}},97545:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var n=r(93800),i=r(50925),a=r(17741),s=r(49959),l=r(79953),o=r(48602),u=(r(21265),r(14746),r(75269)),m=r(12560),c=r(38012),p=r(58023),d=r(81220),h=r(84279),f=r(71106),y=r(48464);let g=class extends((0,y.A)((0,f.A)((0,p.e)(h.default)))){constructor(){super(...arguments),this.bitmapContainer=new c.l}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch((e=>{(0,s.isAbortError)(e)||i.A.getLogger(this).error(e)}))}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this.bitmapContainer=new c.l,this.container.addChild(this.bitmapContainer),this.strategy=new d.A({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles((0,l.watch)((()=>this.exportImageVersion),(()=>this.requestUpdate())))}detach(){this.strategy=(0,a.pR)(this.strategy),this.container.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:r}=this,{x:n,y:i}=e,{spatialReference:a}=t;let s,l=0,o=0;if(r.children.some((e=>{const{width:t,height:r,resolution:u,x:c,y:p}=e,d=c+u*t,h=p-u*r;return n>=c&&n<=d&&i<=p&&i>=h&&(s=new m.default({xmin:c,ymin:h,xmax:d,ymax:p,spatialReference:a}),l=t,o=r,!0)})),!s)return null;const u=s.width/l,c=Math.round((n-s.xmin)/u),p=Math.round((s.ymax-i)/u);return{extent:s,width:l,height:o,x:c,y:p}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,n){return this.layer.fetchImageBitmap(e,t,r,{timeExtent:this.timeExtent,...n})}};(0,n._)([(0,o.MZ)()],g.prototype,"strategy",void 0),(0,n._)([(0,o.MZ)()],g.prototype,"updating",void 0),g=(0,n._)([(0,u.$)("esri.views.2d.layers.WMSLayerView2D")],g);const w=g}}]);