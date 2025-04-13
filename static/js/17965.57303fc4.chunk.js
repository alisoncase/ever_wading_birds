"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[11392,17965,32955,98185],{4742:(e,t,i)=>{i.d(t,{CU:()=>o,EY:()=>u,Me:()=>r,P2:()=>d,SR:()=>l,cf:()=>p,hB:()=>f,nU:()=>m,sH:()=>c,yt:()=>h});var n=i(64682),a=i(90772),s=i(49386);const l=64,r=512,o=2.5,c=(0,n.$8)(n.pq/10),u=2,p=(0,a.vt)();s.n.WebMercatorAuxiliarySphere.getExtent(0,0,0,p);const h=(0,a.vt)([-180,-90,180,90]),f="Cannot extend surface to encompass all layers because it would result in too many root tiles.",d="Surface extent is too large for tile resolution at level 0.",m=4},11392:(e,t,i)=>{i.r(t),i.d(t,{default:()=>w});var n=i(93800),a=i(47412),s=i(89129),l=i(74719),r=i(81933),o=i(50925),c=i(20620),u=i(49959),p=i(79953),h=i(48602),f=(i(21265),i(14746),i(75269)),d=i(78139),m=i(98185);const y=s.default.ofType(a.default);let g=class extends(r.A.LoadableMixin(c.A.EsriPromiseMixin(m.default))){constructor(e){super(e),this._lastPortalBasemapFetchController=null,this.basemaps=new y,this.filterFunction=null,this.portal=d.default.getDefault(),this.query=null,this.updateBasemapsCallback=null,this.viewType=null}initialize(){this.addHandles((0,p.watch)((()=>[this.filterFunction,this.loadStatus,this.portal?.basemapGalleryGroupQuery,this.portal?.basemapGalleryGroupQuery3D,this.portal?.user,this.query,this.updateBasemapsCallback]),(()=>this.refresh()),p.initial))}destroy(){this.filterFunction=null,this.portal=null,this.basemaps.forEach((e=>e.destroy()))}get state(){return"not-loaded"===this.loadStatus?"not-loaded":"loading"===this.loadStatus||this._lastPortalBasemapFetchController?"loading":"ready"}load(e){return this.addResolvingPromise(this.portal.load(e)),Promise.resolve(this)}async refresh(){if("loaded"!==this.loadStatus)return;this._lastPortalBasemapFetchController&&(this._lastPortalBasemapFetchController.abort(),this._lastPortalBasemapFetchController=null);const e=this.portal,t=new AbortController;this._lastPortalBasemapFetchController=t,this.notifyChange("state");try{const i=await e.fetchBasemaps(this._toQueryString(this.query),{signal:t.signal,include3d:"3d"===this.viewType||void 0});await this._updateBasemaps(i)}catch(i){if((0,u.isAbortError)(i))throw i;o.A.getLogger(this).warn(new l.default("basemap-source:fetch-basemaps-error","Could not fetch basemaps from portal.",{error:i})),await this._updateBasemaps()}this._lastPortalBasemapFetchController=null,this.notifyChange("state")}_toQueryString(e){return e&&"string"!=typeof e?Object.keys(e).map((t=>`${t}:${e[t]}`)).join(" AND "):e}async _updateBasemaps(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=await this._filterBasemaps(e);t=this.updateBasemapsCallback?await this.updateBasemapsCallback(t):t,this.basemaps.removeAll(),this.basemaps.addMany(t)}async _filterBasemaps(e){if(!this.filterFunction)return e;const t=e.map(this.filterFunction),i=await Promise.all(t);return e.filter(((e,t)=>i[t]))}};(0,n._)([(0,h.MZ)({readOnly:!0,type:y})],g.prototype,"basemaps",void 0),(0,n._)([(0,h.MZ)()],g.prototype,"filterFunction",void 0),(0,n._)([(0,h.MZ)({type:d.default})],g.prototype,"portal",void 0),(0,n._)([(0,h.MZ)()],g.prototype,"query",void 0),(0,n._)([(0,h.MZ)({readOnly:!0})],g.prototype,"state",null),(0,n._)([(0,h.MZ)()],g.prototype,"updateBasemapsCallback",void 0),(0,n._)([(0,h.MZ)()],g.prototype,"viewType",void 0),g=(0,n._)([(0,f.$)("esri.widgets.BasemapGallery.support.PortalBasemapsSource")],g);const w=g},17965:(e,t,i)=>{i.r(t),i.d(t,{default:()=>I});var n=i(93800),a=i(47412),s=i(89129),l=i(81933),r=i(79953),o=i(48602),c=i(32980),u=(i(21265),i(14746),i(75269)),p=i(96913),h=i(70576),f=i(35104),d=i(71374),m=i(76983),y=i(62631),g=i(74719),w=i(49959),v=i(78076),b=i(51064),T=i(37858),S=i(49386),_=i(66380);async function R(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{basemap:i,view:n}=e;await i.load(t),function(e){if(0===e.baseLayers.length&&0===e.referenceLayers.length)return;const t=e.baseLayers.concat(e.referenceLayers).toArray().filter((e=>!(0,v.ce)(e))).map((e=>function(e){return new g.default("basemap-compatibility:unsupported-basemap-layer-type","Unsupported basemap layer type ${operationalLayerType}",{layer:e,operationalLayerType:e.operationalLayerType||"unknown"})}(e)));if(t.length)throw t[0]}(i),await async function(e,t,i){if(0===e.baseLayers.length)return;const n=e.baseLayers.at(0);if((0,v.r$)(n)){try{await n.load(i)}catch(a){const e="basemap-compatibility:unknown-error",t="Unknown basemap compatibility error",{name:i=e,message:n=t,details:s}=a;throw new g.default(i,n,s)}!function(e,t){const i=t.state.viewingMode;if(!i)return;let n,a;if("wmts"===e?.type){const s=(0,T.EM)(e,t.spatialReference,i);if(null==s.tileInfo)throw new g.default("basemapgalleryitem:tiling-scheme-incompatible","Basemap tiling scheme is incompatible with the view");n=s.tileInfo,a=s.fullExtent}else n=e.tileInfo,a=e.fullExtent;if(null==n)return;if(!(0,_.M)(n.spatialReference,i))throw new g.default(`basemapgalleryitem:spatial-reference-unsupported-${(0,b._s)(i)}`,`Basemap spatial reference is unsupported in ${(0,b._s)(i)} mode`);const s="vector-tile"===e?.type?n.getCompatibleForVTL(256):null;if(i===b.RT.Global){let t=(0,T._y)(n,a,null,i);if(t&&"vector-tile"===e?.type&&null!=a&&s&&!(0,T._y)(s,a,null,i)&&(t=null),t){const e=n.spatialReference.isWebMercator?"web-mercator":"wgs84";throw new g.default(`basemapgalleryitem:tiling-scheme-unsupported-${e}-global`,"Basemap tiling scheme is unsupported in global mode",{error:t})}}else if(S.n.checkUnsupported(n))throw new g.default("basemapgalleryitem:tiling-scheme-unsupported-local","Basemap tiling scheme is unsupported in local mode");const l=t.basemapTerrain?.tilingScheme;if(l&&!l.compatibleWith(n)&&("vector-tile"!==e?.type||!s||!l.compatibleWith(s)))throw new g.default("basemapgalleryitem:tiling-scheme-incompatible","Basemap tiling scheme is incompatible with the view")}(n,t)}}(i,n,t),(0,w.throwIfAborted)(t)}async function M(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{basemap:i,view:n}=e;(0,w.throwIfAborted)(t);const a=i.baseLayers.find((e=>"unknown"===e.type))?.loadError;if(null!=a)throw a;if(!n||"spatialReferenceLocked"in n&&!n.spatialReferenceLocked)return;if(await i.load(t),(0,w.throwIfAborted)(t),0===i.baseLayers.length)return;const s=i.baseLayers.at(0);if(!(0,v.qK)(s))return;if(i.spatialReference){if(n.spatialReference.equals(i.spatialReference))return;E()}await s.load(t),(0,w.throwIfAborted)(t);const l=(("supportedSpatialReferences"in s?s.supportedSpatialReferences:null)||["tileInfo"in s?s.tileInfo?.spatialReference:null]).filter(y.Ru);0!==l.length&&l.every((e=>!n.spatialReference.equals(e)))&&E()}function E(){throw new g.default("basemap-compatibility:incompatible-spatial-reference","Basemap spatial reference is not compatible with the view")}var x=i(32955),O=i(98185),A=i(11392);const N=s.default.ofType(x.default);let L=class extends l.A{constructor(e){super(e),this._loadingProjectionEngine=!1,this.items=new N,this.source=new A.default,this.view=null}initialize(){const e=()=>this._recreateItems();this.addHandles([(0,r.watch)((()=>"ready"===this.state?this.compatibilityFunction:null),(()=>this._updateItems())),(0,r.on)((()=>this.source?.basemaps),"change",e,{onListenerAdd:e}),(0,r.when)((()=>this.view),(()=>{this.source instanceof A.default&&(this.source.viewType=this.view?.type)}),{once:!0})])}destroy(){const e=this.source.basemaps.find((e=>e===this.activeBasemap));e&&this.source.basemaps.remove(e),this.source?.destroy()}get activeBasemap(){return this.view?.map?.basemap??null}set activeBasemap(e){const t=this.view;if(!t?.map)return;if(!e||!t.ready)return t.map.basemap=e,void this._clearOverride("activeBasemap");const i=e.spatialReference||this.items?.find((t=>this.basemapEquals(e,t.basemap)))?.spatialReference;if(i&&"spatialReferenceLocked"in t&&!t.spatialReferenceLocked){const n=t.spatialReference;if(null!=i&&!(0,h.aI)(n,i)&&!(0,p.canProjectWithoutEngine)(t.spatialReference,i)&&!(0,p.isLoaded)())return this._override("activeBasemap",e),this._loadingProjectionEngine=!0,void(0,p.load)().then((()=>{this._get("activeBasemap")===e&&(t.map.basemap=e,t.spatialReference=i,this._clearOverride("activeBasemap"))}),(()=>{})).then((()=>{this._loadingProjectionEngine=!1}));t.map.basemap=e,this._clearOverride("activeBasemap"),null==i||(0,h.aI)(t.spatialReference,i)||(t.spatialReference=i)}else t.map.basemap=e,this._clearOverride("activeBasemap")}castActiveBasemap(e){return(0,d.es)(e)}get activeBasemapIndex(){const{state:e,activeBasemap:t}=this;return"ready"!==e?-1:this._findBasemapIndex(t)}get compatibilityFunction(){return"3d"===this.view?.type?R:M}set compatibilityFunction(e){this._overrideIfSome("compatibilityFunction",e)}castSource(e){return Array.isArray(e)||s.default.isCollection(e)?new O.default({basemaps:Array.isArray(e)?new s.default(e):e}):function(e){return e&&"esri.portal.Portal"===e.declaredClass}(e)?new A.default({portal:e}):function(e){return e&&!(e instanceof A.default)&&(!!e.portal||!!e.query)}(e)?new A.default(e):function(e){return e&&"basemaps"in e&&"state"in e&&"refresh"in e}(e)?e:null}get state(){return this.view?.ready&&this.source?(0,f.O)(this.view)&&!this.view.inGeographicLayout?"unsupported":this._loadingProjectionEngine?"loading":"ready":"disabled"}basemapEquals(e,t){return(0,m.jU)(e,t)}refresh(){this._recreateItems()}load(){return this.loadSource()}loadSource(e){return this.addResolvingPromise(l.A.isLoadable(this.source)?this.source.load(e):null),Promise.resolve(this)}_findBasemapIndex(e){const{items:t}=this,i=t.findIndex((t=>t.basemap===e));return-1===i?t.findIndex((t=>this.basemapEquals(t.basemap,e))):i}_recreateItems(){const e=this.source?.basemaps??[],{view:t,compatibilityFunction:i}=this,n=new Map(this.items.map((e=>[e.basemap,e]))),a=e.map((e=>{const a=n.get(e);return a?(n.delete(e),a):new x.default({basemap:e,compatibilityFunction:i,view:t})}));this.items.removeAll(),this.items.addMany(a),n.forEach((e=>e.destroy()))}_updateItems(){for(const e of this.items)e.compatibilityFunction=this.compatibilityFunction,e.view=this.view}};(0,n._)([(0,o.MZ)()],L.prototype,"_loadingProjectionEngine",void 0),(0,n._)([(0,o.MZ)({type:a.default})],L.prototype,"activeBasemap",null),(0,n._)([(0,c.w)("activeBasemap")],L.prototype,"castActiveBasemap",null),(0,n._)([(0,o.MZ)({readOnly:!0})],L.prototype,"activeBasemapIndex",null),(0,n._)([(0,o.MZ)()],L.prototype,"compatibilityFunction",null),(0,n._)([(0,o.MZ)({readOnly:!0,type:N})],L.prototype,"items",void 0),(0,n._)([(0,o.MZ)()],L.prototype,"source",void 0),(0,n._)([(0,c.w)("source")],L.prototype,"castSource",null),(0,n._)([(0,o.MZ)({readOnly:!0})],L.prototype,"state",null),(0,n._)([(0,o.MZ)()],L.prototype,"view",void 0),L=(0,n._)([(0,u.$)("esri.widgets.BasemapGallery.BasemapGalleryViewModel")],L);const I=L},26282:(e,t,i)=>{var n;i.d(t,{N:()=>n}),function(e){e[e.NORTH=0]="NORTH",e[e.NORTH_EAST=1]="NORTH_EAST",e[e.EAST=2]="EAST",e[e.SOUTH_EAST=3]="SOUTH_EAST",e[e.SOUTH=4]="SOUTH",e[e.SOUTH_WEST=5]="SOUTH_WEST",e[e.WEST=6]="WEST",e[e.NORTH_WEST=7]="NORTH_WEST"}(n||(n={}))},32955:(e,t,i)=>{i.r(t),i.d(t,{default:()=>h});var n=i(93800),a=i(6946),s=i(93633),l=i(49959),r=i(79953),o=i(48602),c=(i(21265),i(50925),i(14746),i(75269)),u=i(76983);let p=class extends(s.A.IdentifiableMixin(a.default)){constructor(e){super(e),this.compatibilityFunction=null,this.error=null,this.state="loading",this.view=null}initialize(){const e=()=>this.refresh();this.addHandles([(0,r.watch)((()=>this.basemap?.loadStatus),e),(0,r.watch)((()=>this.compatibilityFunction),e),(0,r.watch)((()=>this.view&&"basemapTerrain"in this.view&&this.view.basemapTerrain?.tilingScheme),e),(0,r.watch)((()=>this.view?.ready),e),(0,r.watch)((()=>this.view?.spatialReference),e)]),this.refresh()}destroy(){this._cancelRefresh(),this.basemap=null,this.compatibilityFunction=null,this.view=null}get _spatialReferenceTask(){return(0,u.n8)(this.view,this.basemap)}set basemap(e){e&&e.load().catch((()=>{})),this._set("basemap",e)}get spatialReference(){return this._spatialReferenceTask.spatialReference}refresh(){this._cancelRefresh(),this._set("state","loading");const e=this.basemap?.loadStatus;if("loaded"!==e&&"failed"!==e)return;if(!this.compatibilityFunction)return void("loaded"===e?(this._set("state","ready"),this._set("error",null)):(this._set("state","error"),this._set("error",this.basemap.loadError)));const t=new AbortController,{signal:i}=t;this.compatibilityFunction(this,{signal:i}).then((()=>(0,r.whenOnce)((()=>!this._spatialReferenceTask.updating),i))).then((()=>{this._set("state","ready"),this._set("error",null)})).catch((e=>{(0,l.isAbortError)(e)||(this._set("state","error"),this._set("error",e))})),this._refreshController=t}_cancelRefresh(){this._refreshController&&(this._refreshController.abort(),this._refreshController=null)}};(0,n._)([(0,o.MZ)({readOnly:!0})],p.prototype,"_spatialReferenceTask",null),(0,n._)([(0,o.MZ)()],p.prototype,"basemap",null),(0,n._)([(0,o.MZ)()],p.prototype,"compatibilityFunction",void 0),(0,n._)([(0,o.MZ)({readOnly:!0})],p.prototype,"error",void 0),(0,n._)([(0,o.MZ)({readOnly:!0})],p.prototype,"spatialReference",null),(0,n._)([(0,o.MZ)({readOnly:!0})],p.prototype,"state",void 0),(0,n._)([(0,o.MZ)()],p.prototype,"view",void 0),p=(0,n._)([(0,c.$)("esri.widgets.BasemapGallery.support.BasemapGalleryItem")],p);const h=p},35104:(e,t,i)=>{function n(e){return null!=e&&"object"==typeof e&&"2d"===e.type&&"linkchart"===e.view2dType}i.d(t,{O:()=>n})},37858:(e,t,i)=>{i.d(t,{yL:()=>V,_y:()=>F,T7:()=>T,L8:()=>w,Tn:()=>b,aL:()=>v,EM:()=>P,Uo:()=>U,GH:()=>S,KE:()=>N,sZ:()=>X,oX:()=>O,Gk:()=>A,rI:()=>B,n9:()=>R,fe:()=>C,LC:()=>L,uK:()=>te,HF:()=>K,Ci:()=>_,mJ:()=>ee,eS:()=>I,E5:()=>k,G3:()=>E,Y4:()=>H,cU:()=>W,Ec:()=>J,hL:()=>Q,xl:()=>j,XQ:()=>ne,Rz:()=>ie,jj:()=>Y,JM:()=>D,n8:()=>G,t6:()=>q,Cs:()=>z,hC:()=>$,bA:()=>Z,bk:()=>g});var n=i(89129),a=i(70576),s=i(78076),l=i(51064),r=i(26282),o=i(98697),c=i(74719),u=i(90772),p=i(61129),h=i(4742),f=i(49386);const d=Object.freeze(Object.defineProperty({__proto__:null,checkIfTileInfoSupportedForViewSR:function(e,t,i,n){if(null==e)return(0,f.P)();const a=e.spatialReference;if(a.isGeographic&&!(0,p.s)(a))return new c.default("tilingscheme:local-unsupported-spatial-reference","The tiling scheme spatial reference is not supported in local scenes");const s=f.n.checkUnsupported(e);if(null!=s)return s;if(null==i)return new c.default("tilingscheme:extent-not-exist","The layer does not provide a layer extent.");const l=function(e,t){const i=e.lods,n=i[0].resolution*2**i[0].level,a=[n*e.size[0],n*e.size[1]],s=[e.origin.x,e.origin.y],l=(0,u.VY)(t),r=(0,u.vt)();f.n.computeRowColExtent(l,a,s,r);const o=(r[2]-r[0])*(r[3]-r[1]);if(o>h.SR){const t=i[0].scale*2**i[0].level;let a=Math.max((l[3]-l[1])/e.size[1],(l[2]-l[0])/e.size[0])*t/n;const s=Math.floor(Math.log(a)/Math.log(10));return a=Math.ceil(a/10**s)*10**s,new c.default("tilingscheme:too-many-root-tiles","Scale of level 0 of the tiling scheme (1:"+Math.floor(t).toLocaleString()+") is too large for the layer's extent. Suggested scale: 1:"+a.toLocaleString()+".",{level0Scale:t,suggestedLevel0Scale:a,requiredNumRootTiles:o,allowedNumRootTiles:h.SR})}return null}(e,i);return l||(null==t||a.equals(t)||t.isWGS84&&a.isWebMercator?null:new c.default("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the local scene"))}},Symbol.toStringTag,{value:"Module"}));const m=Object.freeze(Object.defineProperty({__proto__:null,checkIfTileInfoSupportedForViewSR:function(e,t,i,n){if(null==e)return(0,f.P)();const a=e?.lods.length-1,s=e.spatialReference;if(s.isWebMercator){if(!f.n.makeWebMercatorAuxiliarySphere(a).compatibleWith(e,n))return new c.default("tilingscheme:incompatible-global-web-mercator","The tiling scheme is not compatible with the ArcGIS Online Web Mercator tiling scheme")}else{if(!(0,p.C)(s))return new c.default("tilingscheme:global-unsupported-spatial-reference","The tiling scheme spatial reference is not supported in global scenes");if(!f.n.makeGCSWithTileSize(e.spatialReference,e.size[0],a).compatibleWith(e,n))return e.spatialReference.isWGS84?new c.default("tilingscheme:incompatible-global-wgs84","The tiling scheme is not compatible with the ArcGIS Online WGS84 tiling scheme"):new c.default("tilingscheme:incompatible-global","The tiling scheme is not compatible with the ArcGIS Online tiling scheme")}return null==t||e.spatialReference.equals(t)?null:new c.default("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the global scene")}},Symbol.toStringTag,{value:"Module"})),y={[l.RT.Global]:m,[l.RT.Local]:d};function g(e,t){e||console.warn("Terrain: "+t)}let w=!1,v=!1;function b(e){v=e,w=w||e}function T(e){w=e}function S(e,t){if(w&&!e){const e=(new Error).stack?.slice(5);throw console.warn("Terrain internal: "+(t??"")+" at "+e),new Error("Assertion failed"+(t?": "+t:""))}}function _(e){return"imagery-tile"===e?.type||"wcs"===e?.type}function R(e){return"imagery-tile-3d"===e?.type}function M(e){return"tile-3d"===e?.type}function E(e){return"vector-tile-3d"===e?.type}function x(e){return"wmts-3d"===e?.type}function O(e){return"elevation-3d"===e?.type}function A(e){return"group"===e?.type}function N(e){return e&&(M(e)||x(e)||R(e)||E(e))}function L(e){return e&&(M(e)||R(e)||E(e)||x(e))}function I(e){return L(e)||O(e)}function C(e){return(0,o.k$)(e?.sourceLayerInfo?.data)}function W(e){return H(e?.sourceLayerInfo)||!!e?.isVTLBackground}function k(e){return(0,o.Cs)(e?.sourceLayerInfo?.data)}function B(e){const t=e?.sourceLayerInfo?.data;return(0,o.EM)(t)||t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof ImageData}function H(e){return(0,o.kC)(e?.data)}function G(e){return null!=e&&"release"in e&&e.release(),null}function z(e){return e.fetchTile&&!1!==e.hasOverriddenFetchTile}function F(e,t,i,n,a){return y[n].checkIfTileInfoSupportedForViewSR(e,i,t,a)}function U(e,t,i){let n=null,a=null;if("wmts"===e?.type){const s=P(e,t,i);n=s.tileInfo,a=s.fullExtent}else{a=_(e)?e.getCompatibleFullExtent(t):e.fullExtent;const s=i===l.RT.Local;n=_(e)?e.getCompatibleTileInfo(t,a,s):"vector-tile"===e?.type?s&&!Z(t)||q.force512VTL?e.tileInfo:e.tileInfo.getCompatibleForVTL(256):e.tileInfo}const s="tilemapCache"in e?e.tilemapCache?.effectiveMaxLOD:void 0;return null!=n&&null!=a&&null==F(n,a,t,i,s)?{tileInfo:n,fullExtent:a}:null}function P(e,t,i){const a=(0,s.r0)(e);if(null!=a){if(!n.default.isCollection(a))return{tileInfo:a.tileInfo,fullExtent:a.fullExtent};{const e=a.find((e=>null==F(e.tileInfo,e.fullExtent,t,i)));if(e)return{tileInfo:e.tileInfo,fullExtent:e.fullExtent}}}return{tileInfo:null,fullExtent:null}}function Z(e){return e.isWGS84||e.isWebMercator||(0,a.x1)(e)||!(0,a.B3)(e)}const q={force512VTL:!1};function j(e){return"["+e[0]+","+e[1]+","+e[2]+"]"}function $(e){return"("+e[0]+","+e[1]+","+e[2]+")"}function V(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ae;return Math.abs(e-t)<i}function Y(e){return e===r.N.NORTH_EAST?r.N.SOUTH_WEST:e===r.N.NORTH_WEST?r.N.SOUTH_EAST:e===r.N.SOUTH_WEST?r.N.NORTH_EAST:r.N.NORTH_WEST}function D(e){return e===r.N.NORTH?r.N.SOUTH:e===r.N.EAST?r.N.WEST:e===r.N.SOUTH?r.N.NORTH:r.N.EAST}function Q(e){return e===r.N.NORTH_WEST||e===r.N.SOUTH_WEST}function K(e){return e===r.N.NORTH_WEST||e===r.N.NORTH_EAST}function J(e){return e===r.N.NORTH_WEST||e===r.N.WEST||e===r.N.SOUTH_WEST}function X(e){return e===r.N.NORTH_EAST||e===r.N.EAST||e===r.N.SOUTH_EAST}function ee(e){return e===r.N.SOUTH_EAST||e===r.N.SOUTH||e===r.N.SOUTH_WEST}function te(e){return e===r.N.NORTH_EAST||e===r.N.NORTH||e===r.N.NORTH_WEST}const ie=[r.N.NORTH,r.N.EAST,r.N.SOUTH,r.N.WEST],ne=[r.N.NORTH_EAST,r.N.SOUTH_EAST,r.N.SOUTH_WEST,r.N.NORTH_WEST],ae=1e-5},49386:(e,t,i)=>{i.d(t,{P:()=>m,n:()=>d});var n=i(74719),a=(i(21265),i(64682)),s=i(84190),l=i(12560),r=i(75400),o=i(93321),c=i(90772),u=i(70576),p=i(5616),h=i(29275),f=i(4126);class d{constructor(e){const t=d.checkUnsupported(e);if(null!=t)throw t;const i=e;this.spatialReference=i.spatialReference,this._isWebMercator=this.spatialReference.isWebMercator,this._isGCS=(0,u.EA)(this.spatialReference),this.origin=[i.origin.x,i.origin.y],this.pixelSize=i.size[0],this.dpi=i.dpi;const n=i.lods.reduce(((e,t)=>(t.level<e.minLod.level&&(e.minLod=t),e.max=Math.max(e.max,t.level),e)),{minLod:i.lods[0],max:-1/0}),a=n.minLod,s=2**a.level;let l=a.resolution*s,r=a.scale*s;this.levels=new Array(n.max+1);for(let o=0;o<this.levels.length;o++)this.levels[o]={resolution:l,scale:r,tileSize:[l*i.size[0],l*i.size[1]]},l/=2,r/=2}clone(){return new d(this.toTileInfo())}toTileInfo(){return new f.default({dpi:this.dpi,origin:new r.default({x:this.origin[0],y:this.origin[1],spatialReference:this.spatialReference}),size:[this.pixelSize,this.pixelSize],spatialReference:this.spatialReference,lods:this.levels.map(((e,t)=>new h.default({level:t,scale:e.scale,resolution:e.resolution})))})}getExtent(e,t,i,n){const a=this.levels[e],s=a.tileSize[0],l=a.tileSize[1];n[0]=this.origin[0]+i*s,n[2]=this.origin[0]+(i+1)*s,n[3]=this.origin[1]-t*l,n[1]=this.origin[1]-(t+1)*l}convertExtentToRadians(e,t){this._isWebMercator?(t[0]=(0,p.x2lon)(e[0]),t[1]=(0,p.y2lat)(e[1]),t[2]=(0,p.x2lon)(e[2]),t[3]=(0,p.y2lat)(e[3])):this._isGCS&&(t[0]=(0,a.kU)(e[0]),t[1]=(0,a.kU)(e[1]),t[2]=(0,a.kU)(e[2]),t[3]=(0,a.kU)(e[3]))}getExtentGeometry(e,t,i){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new l.default;return this.getExtent(e,t,i,y),n.spatialReference=this.spatialReference,n.xmin=y[0],n.ymin=y[1],n.xmax=y[2],n.ymax=y[3],n.zmin=void 0,n.zmax=void 0,n}ensureMaxLod(e){if(null==e)return!1;let t=!1;for(;this.levels.length<=e;){const{resolution:e,scale:i}=this.levels[this.levels.length-1],n=e/2*this.pixelSize;this.levels.push({resolution:e/2,scale:i/2,tileSize:[n,n]}),t=!0}return t}capMaxLod(e){this.levels.length>e+1&&(this.levels.length=e+1)}getMaxLod(){return this.levels.length-1}scaleAtLevel(e){return this.levels[0].scale/2**e}levelAtScale(e){const t=this.levels[0].scale;return e>=t?0:Math.log(t/e)*Math.LOG2E}resolutionAtLevel(e){return this.levels[0].resolution/2**e}compatibleWith(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0;if(d.checkUnsupported(e))return!1;const i=new d(e);if(!i.spatialReference.equals(this.spatialReference))return!1;if(i.pixelSize!==this.pixelSize)return!1;const n=Math.min(this.levels.length-1,i.levels.length-1,t),s=this.levels[n].resolution;let l=.5*s;return!(!(0,a.Sp)(i.origin[0],this.origin[0],l)||!(0,a.Sp)(i.origin[1],this.origin[1],l))&&(l=.5*s/2**n/this.pixelSize*12,(0,a.Sp)(s,i.levels[n].resolution,l))}rootTilesInExtent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0;const n=new Array,a=this.levels[0].tileSize;if(null==e||0===a[0]||0===a[1])return n;d.computeRowColExtent(e,a,this.origin,y);let s=y[1],l=y[3],r=y[0],o=y[2];const c=o-r,u=l-s;if(c*u>i){const e=Math.floor(Math.sqrt(i));u>e&&(s=s+Math.floor(.5*u)-Math.floor(.5*e),l=s+e),c>e&&(r=r+Math.floor(.5*c)-Math.floor(.5*e),o=r+e)}for(let p=s;p<l;p++)for(let e=r;e<o;e++)n.push([0,p,e]);return null!=t&&(t[0]=this.origin[0]+r*a[0],t[1]=this.origin[1]-l*a[1],t[2]=this.origin[0]+o*a[0],t[3]=this.origin[1]-s*a[1]),n}static computeRowColExtent(e,t,i,n){const a=.001*(e[2]-e[0]+(e[3]-e[1]));n[0]=Math.max(0,Math.floor((e[0]+a-i[0])/t[0])),n[2]=Math.max(0,Math.ceil((e[2]-a-i[0])/t[0])),n[1]=Math.max(0,Math.floor((i[1]-e[3]+a)/t[1])),n[3]=Math.max(0,Math.ceil((i[1]-e[1]-a)/t[1]))}static isPowerOfTwo(e){const t=e.lods,i=t[0].resolution*2**t[0].level;return!t.some((e=>!(0,a.b6)(e.resolution,i/2**e.level)))}static hasGapInLevels(e){const t=e.lods.map((e=>e.level));t.sort(((e,t)=>e-t));for(let i=1;i<t.length;i++)if(t[i]!==t[0]+i)return!0;return!1}static tileSizeSupported(e){const t=e.size[1];return t===e.size[0]&&!(t&t-1)&&t>=128&&t<=512}static hasOriginPerLODs(e){const t=e.origin;return e.lods.some((e=>null!=e.origin&&(e.origin[0]!==t.x||e.origin[1]!==t.y)))}static getMissingTileInfoError(){return new n.default("tilingscheme:tile-info-missing","Tiling scheme must have tiling information")}static checkUnsupported(e){return null==e?m():e.lods.length<1?new n.default("tilingscheme:generic","Tiling scheme must have at least one level"):d.isPowerOfTwo(e)?d.hasGapInLevels(e)?new n.default("tilingscheme:gaps","Tiling scheme levels must not have gaps between min and max level"):d.tileSizeSupported(e)?d.hasOriginPerLODs(e)?new n.default("tilingscheme:multiple-origin","Tiling scheme levels must not have their own origin"):null:new n.default("tilingscheme:tile-size","Tiles must be square and size must be one of [128, 256, 512]"):new n.default("tilingscheme:power-of-two","Tiling scheme must be power of two")}static fromExtent(e,t){const i=e[2]-e[0],n=e[3]-e[1],a=(0,s.GA)(t),l=1.2*Math.max(i,n),o=l/256,c=o*a*(96/.0254),u=new d(new f.default({size:[256,256],origin:new r.default({x:e[0]-.5*(l-i),y:e[3]+.5*(l-n)}),lods:[new h.default({level:0,resolution:o,scale:c})],spatialReference:t}));return u.ensureMaxLod(20),u}static makeWebMercatorAuxiliarySphere(e){const t=new d(d.WebMercatorAuxiliarySphereTileInfo);return t.ensureMaxLod(e),t}static makeGCSWithTileSize(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:16;const n=256/t,a=new d(new f.default({size:[t,t],origin:new r.default({x:-180,y:90,spatialReference:e}),spatialReference:e,lods:[new h.default({level:0,resolution:.703125*n,scale:295497598.570834*n})]}));return a.ensureMaxLod(i),a}get test(){}}function m(){return new n.default("tilingscheme:tile-info-missing","Tiling scheme must have tiling information")}d.WebMercatorAuxiliarySphereTileInfo=new f.default({size:[256,256],origin:new r.default({x:-20037508.342787,y:20037508.342787,spatialReference:o.default.WebMercator}),spatialReference:o.default.WebMercator,lods:[new h.default({level:0,resolution:156543.03392800014,scale:591657527.591555})]}),d.WebMercatorAuxiliarySphere=d.makeWebMercatorAuxiliarySphere(19);const y=(0,c.vt)()},61129:(e,t,i)=>{i.d(t,{C:()=>a,s:()=>s});var n=i(70576);function a(e){return s(e)||(0,n.q8)(e)||(0,n.KQ)(e)}function s(e){return(0,n.oT)(e)||(0,n.x1)(e)}},66380:(e,t,i)=>{i.d(t,{M:()=>s});var n=i(78757),a=i(51064);function s(e,t){return null!=e&&(null==t||(t===a.RT.Local?!e.isGeographic||e.isWGS84||e.wkid===n.Y.CGCS2000:e.isWebMercator||e.isWGS84||e.wkid===n.Y.CGCS2000||e.wkid===n.Y.GCSMARS2000||e.wkid===n.Y.GCSMARS2000_SPHERE||e.wkid===n.Y.GCSMOON2000))}},98185:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var n=i(93800),a=i(47412),s=i(6946),l=i(89129),r=i(48602),o=(i(21265),i(50925),i(14746),i(75269));const c=l.default.ofType(a.default);let u=class extends s.default{constructor(e){super(e),this.basemaps=new c}destroy(){this.basemaps.forEach((e=>e.destroy()))}get state(){return"ready"}refresh(){}};(0,n._)([(0,r.MZ)({type:c})],u.prototype,"basemaps",void 0),(0,n._)([(0,r.MZ)({readOnly:!0})],u.prototype,"state",null),u=(0,n._)([(0,o.$)("esri.widgets.BasemapGallery.support.LocalBasemapsSource")],u);const p=u},98697:(e,t,i)=>{function n(e){return null!=e&&"type"in e&&"vector-tile"===e.type}function a(e){return null!=e&&"type"in e&&"raster-tile"===e.type}function s(e){return null!=e&&"type"in e&&"tile-texture"===e.type}function l(e){return null!=e&&"type"in e&&"image+type"===e.type}i.d(t,{Cs:()=>s,EM:()=>l,k$:()=>a,kC:()=>n})}}]);