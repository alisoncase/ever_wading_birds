"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[10963,66201,72363,88582,90994,92734,93118],{9399:(e,t,i)=>{i.d(t,{ES:()=>v,GB:()=>g,Gq:()=>M,MN:()=>L,Mq:()=>o,Qv:()=>d,Vq:()=>C,Yl:()=>c,_L:()=>p,cR:()=>a,cg:()=>r,dL:()=>y,do:()=>I,dv:()=>n,eF:()=>b,eY:()=>h,ep:()=>l,kL:()=>f,mk:()=>_,oU:()=>m,oZ:()=>u});const s={hide:"hide",hideChildren:"hide-children"},n=10,l=2;function r(e){let{exclusive:t,visible:i,visibilityAppearance:s}=e;const n="checkbox"===s;return i?t?"circle-f":n?"check-square-f":"view-visible":t?"circle":n?"square":"view-hide"}function a(e){let{connectionStatus:t,publishing:i}=e;return t?"connected"===t?"beacon":"offline":i?"square":"bullet-point"}function o(e){return e?.listMode===s.hideChildren}function d(e){return e?.listMode??void 0}function c(e){if(!e)return"inherited";const t=function(e){const t=w(e);return null!=t&&"supportsSublayerVisibility"in t?t.supportsSublayerVisibility:void 0}(g(e)?e.layer:e);return null!=t?t?"independent":"inherited":"visibilityMode"in e&&null!=e.visibilityMode?e.visibilityMode:"independent"}function h(e){e?.removeMany(e.filter((e=>e?.destroyed)))}function u(e){if(e&&(!("type"in e)||"wmts"!==e.type))return"sublayers"in e?"sublayers":"layers"in e?"layers":void 0}function p(e,t){e&&(e.filterPredicate=t?e=>t(M(e)):void 0)}function y(e){const t=(e?.layer&&g(e.layer)?e.layer.layer:void 0)??e?.layer;return!!t&&"catalog"!==t.type&&(function(e){const t=w(e);return null!=t&&"supportsDynamicLayers"in t?t.supportsDynamicLayers:void 0}(t)??!0)}function m(e){return d(e)!==s.hide}function b(e,t){if(!e||null==t||isNaN(t))return!1;const i=function(e){return null!=e&&"minScale"in e&&null!=e.minScale?e.minScale:void 0}(e),s=function(e){return null!=e&&"maxScale"in e&&null!=e.maxScale?e.maxScale:void 0}(e),n=null!=i&&!isNaN(i)&&i>0&&t>i,l=null!=s&&!isNaN(s)&&s>0&&t<s;return n||l}function _(e,t){e?.sort(((e,i)=>{const s="uid"in e?t.indexOf(e.uid):-1,n="uid"in i?t.indexOf(i.uid):-1;return s>n?-1:s<n?1:0}))}function f(e,t){const i=e?.layer;if(!i)return;const s=u(i);if(!s)return;let n;"layers"===s&&"layers"in i?n=i.layers:"sublayers"===s&&"sublayers"in i&&(n=i.sublayers),_(n,t)}function v(e){const t=e?.layer;return t&&"layers"in t?t.layers:null}function g(e){return null!=e&&"layer"in e&&null!=e.layer}function w(e){return e&&"capabilities"in e&&null!=e.capabilities&&"exportMap"in e.capabilities?e.capabilities.exportMap:void 0}function M(e){return e?.["data-item"]}function L(e){return e?.getAttribute("data-layer-type")}function I(e){const{children:t,error:i}=e,s="incompatible"in e&&e.incompatible;return!!t?.filter((e=>!e.hidden)).length&&!i&&!s}function C(e){for(const t of e)for(const e of t)if("button"===e.type||"toggle"===e.type)return e}},66201:(e,t,i)=>{function s(e){return t=>{t.hasOwnProperty("_delegatedEventNames")||(t._delegatedEventNames=t._delegatedEventNames?t._delegatedEventNames.slice():[]);const i=t._delegatedEventNames,s=Array.isArray(e)?e:function(e){return e.split(",").map((e=>e.trim()))}(e);i.push(...s)}}i.d(t,{U:()=>s})},72363:(e,t,i)=>{i.r(t),i.d(t,{accessibleHandler:()=>s.$,additionalAllowedTags:()=>a.j9,classes:()=>a.Ly,cssTransition:()=>a.nk,discardNode:()=>a.N_,getCalciteThemeClass:()=>o.fJ,hasDomNode:()=>c,isActivationKey:()=>a.OU,isDarkTheme:()=>o.g4,isRTL:()=>a.V8,isWidget:()=>d,messageBundle:()=>n.G,onResize:()=>a.EV,renderingSanitizer:()=>a.W5,safeAttrs:()=>a.uM,setCalciteThemeClass:()=>o.hY,setFocus:()=>a.Z6,storeNode:()=>a.cA,tsx:()=>r.K,tsxFragment:()=>r.w,vmEvent:()=>l.U});var s=i(79304),n=i(76697),l=i(66201),r=i(87118),a=i(17745),o=i(5619);function d(e){return e&&"function"==typeof e.render}function c(e){return e&&"function"==typeof e.postMixInProperties&&"function"==typeof e.buildRendering&&"function"==typeof e.postCreate&&"function"==typeof e.startup}},90994:(e,t,i)=>{i.r(t),i.d(t,{default:()=>M});var s=i(93800),n=i(89129),l=i(58448),r=i(79953),a=i(48602),o=(i(21265),i(50925),i(14746),i(75269)),d=i(92734),c=i(9399);const h="view",u="basemap",p="base-layers",y="reference-layers",m="reference-layers-list-mode",b="base-layers-list-mode",_="base-layer-views",f="reference-layer-views",v="children",g=n.default.ofType(d.default);let w=class extends l.A.EventedAccessor{constructor(e){super(e),this.baseItems=new g,this.baseListItemCreatedFunction=null,this.checkPublishStatusEnabled=!1,this.listModeDisabled=!1,this.referenceListItemCreatedFunction=null,this.referenceItems=new g,this.view=null,this._compileBaseList=this._compileBaseList.bind(this),this._compileReferenceList=this._compileReferenceList.bind(this)}initialize(){this.addHandles([(0,r.watch)((()=>[this.view?.map?.basemap,!0===this.view?.ready,this.view?.basemapView]),(()=>this._watchBasemapLayers()),r.initial),(0,r.watch)((()=>[this.baseListItemCreatedFunction,this.checkPublishStatusEnabled,this.listModeDisabled]),(()=>this._baseListItemCreatedFunctionChanged())),(0,r.watch)((()=>[this.referenceListItemCreatedFunction,this.checkPublishStatusEnabled,this.listModeDisabled]),(()=>this._referenceListItemCreatedFunctionChanged()))],h)}destroy(){this.view=null,this._removeAllBaseItems(),this._removeAllReferenceItems()}get basemapTitle(){return this.view?.map?.basemap?.title??null}set basemapTitle(e){this._override("basemapTitle",e)}get state(){return this.view?.ready?"ready":this.view?"loading":"disabled"}get totalBaseItems(){return this.baseItems.flatten((e=>e.children)).length}get totalReferenceItems(){return this.referenceItems.flatten((e=>e.children)).length}triggerAction(e,t){e&&!e.disabled&&this.emit("trigger-action",{action:e,item:t})}moveListItem(e){let{targetItem:t,fromParentItem:i,toParentItem:s,from:n,to:l,newIndex:r}=e;const a=t?.layer;if(!a||"subtype-sublayer"===a.type||"sublayer"===a.type)return;const o=this.view?.map?.basemap,d=o?.baseLayers,h=o?.referenceLayers,u=i?(0,c.ES)(i):"base"===n?d:h,p=s?(0,c.ES)(s):"base"===l?d:h;if(!u||!p)return;const{baseItems:y,referenceItems:m}=this,b="base"===n?y:m,_="base"===l?y:m,f=i?.children||b,v=s?.children||_,g=p.length-r;t.parent=s||null,f.remove(t),u.remove(a),v.includes(t)||v.add(t,g),p.includes(a)||p.add(a,g),this._compileLists()}_createItemChangeHandles(e){let{items:t,key:i,callback:s}=e;this.removeHandles(i),s(),t&&this.addHandles(t.on("change",(()=>s())),i)}_createListItem(e){let{layer:t,type:i}=e;const{view:s,baseListItemCreatedFunction:n,referenceListItemCreatedFunction:l,checkPublishStatusEnabled:r,listModeDisabled:a}=this;return new d.default({layer:t,checkPublishStatusEnabled:r,listItemCreatedFunction:"base"===i?n:l,listModeDisabled:a,view:s})}_watchLayersListMode(e){let{layers:t,key:i,callback:s}=e;this.removeHandles(i),t&&!this.listModeDisabled&&this.addHandles((0,r.watch)((()=>t.filter((e=>"listMode"in e)).map((e=>e.listMode)).toArray()),(()=>s())),i)}_getViewableLayers(e){return e?this.listModeDisabled?e:e.filter((e=>"hide"!==(0,c.Qv)(e))):void 0}_compileListItems(e){let{layers:t,items:i,key:s,type:n,callback:l}=e;this._watchLayersListMode({layers:t,key:s,callback:l});const r=this._getViewableLayers(t);r?.length?(this._createNewItems({type:n,items:i,layers:r}),this._removeItems({items:i,layers:r}),this._sortItems(i,r)):"base"===n?this._removeAllBaseItems():this._removeAllReferenceItems()}_compileReferenceList(){const{referenceItems:e}=this,t=this.view?.map?.basemap?.referenceLayers;this._compileListItems({type:"reference",layers:t,items:e,key:b,callback:this._compileReferenceList})}_compileBaseList(){const{baseItems:e}=this,t=this.view?.map?.basemap?.baseLayers;this._compileListItems({type:"base",layers:t,items:e,key:m,callback:this._compileBaseList})}_compileLists(){this._compileReferenceList(),this._compileBaseList()}_createNewItems(e){let{items:t,layers:i,type:s}=e;i?.forEach((e=>{t.some((t=>t.layer===e))||t.add(this._createListItem({type:s,layer:e}))}))}_removeItems(e){let{items:t,layers:i}=e;t&&t.forEach((e=>{if(!e)return;const s=i?.some((t=>e.layer===t));s||(this.removeHandles(`${v}-${e.uid}`),t.remove(e),e.destroy())}))}_sortItems(e,t){e&&t&&e.sort(((e,i)=>{const s=t.indexOf(e.layer),n=t.indexOf(i.layer);return s>n?-1:s<n?1:0}))}_removeAllBaseItems(){this.baseItems.drain((e=>{this.removeHandles(`${v}-${e.uid}`),e.destroy()}))}_removeAllReferenceItems(){this.referenceItems.drain((e=>{this.removeHandles(`${v}-${e.uid}`),e.destroy()}))}_baseListItemCreatedFunctionChanged(){this._removeAllBaseItems(),this._compileLists()}_referenceListItemCreatedFunctionChanged(){this._removeAllReferenceItems(),this._compileLists()}_watchBasemapLayers(){const{view:e}=this;if(this.removeHandles([p,y,u,_,f]),!e?.ready)return this._removeAllBaseItems(),void this._removeAllReferenceItems();this._compileLists(),this.addHandles([(0,r.watch)((()=>this.view?.map?.basemap?.baseLayers),(e=>this._createItemChangeHandles({items:e,key:p,callback:this._compileBaseList})),r.initial),(0,r.watch)((()=>this.view?.map?.basemap?.referenceLayers),(e=>this._createItemChangeHandles({items:e,key:y,callback:this._compileReferenceList})),r.initial),(0,r.watch)((()=>this.view?.basemapView?.baseLayerViews),(e=>this._createItemChangeHandles({items:e,key:_,callback:this._compileBaseList})),r.initial),(0,r.watch)((()=>this.view?.basemapView?.referenceLayerViews),(e=>this._createItemChangeHandles({items:e,key:f,callback:this._compileReferenceList})),r.initial)],u)}};(0,s._)([(0,a.MZ)({type:g,readOnly:!0})],w.prototype,"baseItems",void 0),(0,s._)([(0,a.MZ)()],w.prototype,"basemapTitle",null),(0,s._)([(0,a.MZ)()],w.prototype,"baseListItemCreatedFunction",void 0),(0,s._)([(0,a.MZ)()],w.prototype,"checkPublishStatusEnabled",void 0),(0,s._)([(0,a.MZ)({nonNullable:!0})],w.prototype,"listModeDisabled",void 0),(0,s._)([(0,a.MZ)()],w.prototype,"referenceListItemCreatedFunction",void 0),(0,s._)([(0,a.MZ)({type:g,readOnly:!0})],w.prototype,"referenceItems",void 0),(0,s._)([(0,a.MZ)({readOnly:!0})],w.prototype,"state",null),(0,s._)([(0,a.MZ)()],w.prototype,"totalBaseItems",null),(0,s._)([(0,a.MZ)()],w.prototype,"totalReferenceItems",null),(0,s._)([(0,a.MZ)()],w.prototype,"view",void 0),w=(0,s._)([(0,o.$)("esri.widgets.BasemapLayerList.BasemapLayerListViewModel")],w);const M=w},92734:(e,t,i)=>{i.r(t),i.d(t,{default:()=>I});var s,n=i(93800),l=i(6946),r=i(62631),a=i(89129),o=i(93633),d=i(79953),c=i(48602),h=i(32980),u=(i(21265),i(75269)),p=i(99940),y=i(58590),m=i(73283),b=i(84915),_=i(93118),f=i(9399);const v=a.default.ofType({key:"type",defaultKeyValue:"button",base:y.default,typeMap:{button:m.default,toggle:b.default}}),g=a.default.ofType(v),w="layer",M="child-list-mode";let L=s=class extends(o.A.IdentifiableMixin(l.default)){constructor(e){super(e),this.actionsSections=new g,this.actionsOpen=!1,this.checkPublishStatusEnabled=!1,this.children=new(a.default.ofType(s)),this.childrenSortable=!0,this.hidden=!1,this.layer=null,this.listItemCreatedFunction=null,this.listModeDisabled=!1,this.open=!1,this.panel=null,this.parent=null,this.view=null}initialize(){if(this.addHandles([(0,d.watch)((()=>[this.layer,this.layer?.listMode,this.listModeDisabled]),(()=>this._watchLayerProperties(this.layer)),d.initial),(0,d.watch)((()=>this.checkPublishStatusEnabled),(e=>this._updateChildrenPublishing(e)),d.initial),(0,d.watch)((()=>this.view),(e=>this._updateChildrenView(e)),d.initial),(0,d.watch)((()=>this.panel),(e=>this._setListItemOnPanel(e)),d.initial)]),"function"==typeof this.listItemCreatedFunction){const e={item:this};this.listItemCreatedFunction.call(null,e)}}destroy(){this.panel?.destroy(),this.children.destroyAll(),this.view=null}get connectionStatus(){const{layerView:e,publishing:t}=this;if(!t&&e&&"connectionStatus"in e)return e.connectionStatus}get error(){return this.layer?.loadError}get incompatible(){const{layerView:e}=this;return!(!e||!("spatialReferenceSupported"in e))&&!e.spatialReferenceSupported}get layerView(){const{layer:e,view:t}=this;if(!e||!t||"sublayer"===e.type)return null;const i="subtype-sublayer"===e.type?e.parent:e;return t.allLayerViews.find((e=>e.layer===i))??null}castPanel(e){return this.panel?.open&&!e.hasOwnProperty("open")&&(e.open=!0),e?new _.default(e):null}get sortable(){return"knowledge-graph-sublayer"!==this.layer?.type&&this._get("sortable")}set sortable(e){this._set("sortable",e)}get title(){const e=(0,p.Jt)(this,"layer.layer");return(!e||e&&(0,p.Jt)(this,"layer.layer.loaded"))&&(0,p.Jt)(this,"layer.title")||(0,p.Jt)(this,"layer.attributes.title")||""}set title(e){this._override("title",e)}get publishing(){const{layer:e,checkPublishStatusEnabled:t}=this;return!!(t&&e&&"publishingInfo"in e&&"publishing"===e.publishingInfo?.status)}get updating(){const{layerView:e,connectionStatus:t,layer:i,publishing:s}=this;return!s&&!t&&(e?e.updating:"loading"===i?.loadStatus||!1)}get visible(){return!!this.layer?.visible}set visible(e){const t=this.layer;t&&(t.visible=e)}get visibleAtCurrentScale(){return this.layerView?.visibleAtCurrentScale??!(0,f.eF)(this.layer,this.view?.scale)}get visibleAtCurrentTimeExtent(){return this.layerView?.visibleAtCurrentTimeExtent??!0}get visibilityMode(){return(0,f.Yl)(this.layer)}clone(){return new s({actionsSections:this.actionsSections.clone(),actionsOpen:this.actionsOpen,checkPublishStatusEnabled:this.checkPublishStatusEnabled,children:this.children.clone(),childrenSortable:this.childrenSortable,hidden:this.hidden,layer:this.layer,listItemCreatedFunction:this.listItemCreatedFunction,listModeDisabled:this.listModeDisabled,open:this.open,panel:this.panel,parent:this.parent,sortable:this.sortable,title:this.title,view:this.view,visible:this.visible})}_setListItemOnPanel(e){e&&(e.listItem=this)}_updateChildrenPublishing(e){this.children?.forEach((t=>t.checkPublishStatusEnabled=e))}_updateChildrenView(e){const t=this.children;t&&t.forEach((t=>t.view=e))}_createChildren(e){const{listModeDisabled:t,children:i}=this,s=e.filter((e=>!i.some((t=>t.layer===e))));i.addMany(this._createChildItems(s,t))}_destroyChildren(e){const{children:t}=this,i=t.filter((t=>!!t.layer&&!e.includes(t.layer)));t.destroyMany(i)}_sortChildren(e){this.children.sort(((t,i)=>e.indexOf(i.layer)-e.indexOf(t.layer)))}_destroyAllChildren(){this.removeHandles(M),this.children.destroyAll()}_watchChildLayerListMode(e){this.removeHandles(M),this.listModeDisabled||this.addHandles(e.toArray().map((t=>(0,d.watch)((()=>t.listMode),(()=>this._compileChildren(e))))),M)}_compileChildren(e){const t=this.listModeDisabled?e:e?.filter((e=>"hide"!==(0,f.Qv)(e)));e?.length?(this._createChildren(t),this._destroyChildren(t),this._sortChildren(t),this._watchChildLayerListMode(e)):this._destroyAllChildren()}_watchSublayerChanges(e){e&&this.addHandles(e.on("change",(()=>this._compileChildren(e))),w)}_initializeChildLayers(e){this._compileChildren(e),this._watchSublayerChanges(e)}_createChildItems(e,t){return e.reverse().map((e=>t||(0,f.oU)(e)?new s({layer:e,checkPublishStatusEnabled:this.checkPublishStatusEnabled,listItemCreatedFunction:this.listItemCreatedFunction,listModeDisabled:this.listModeDisabled,parent:this,view:this.view}):null)).filter(r.Ru)}_watchLayerProperties(e){if(this.removeHandles(w),this.removeHandles(M),!e)return;if("hide-children"===(!this.listModeDisabled&&(0,f.Qv)(e)))return void this.children.destroyAll();const t=(0,f.oZ)(e);t&&this.addHandles((0,d.watch)((()=>e[t]),(i=>{e.hasOwnProperty(t)&&this._initializeChildLayers(i)}),d.initial),w)}};(0,n._)([(0,c.MZ)({type:g})],L.prototype,"actionsSections",void 0),(0,n._)([(0,c.MZ)()],L.prototype,"actionsOpen",void 0),(0,n._)([(0,c.MZ)()],L.prototype,"checkPublishStatusEnabled",void 0),(0,n._)([(0,c.MZ)({type:a.default.ofType(L)})],L.prototype,"children",void 0),(0,n._)([(0,c.MZ)()],L.prototype,"childrenSortable",void 0),(0,n._)([(0,c.MZ)({readOnly:!0})],L.prototype,"connectionStatus",null),(0,n._)([(0,c.MZ)({readOnly:!0})],L.prototype,"error",null),(0,n._)([(0,c.MZ)()],L.prototype,"hidden",void 0),(0,n._)([(0,c.MZ)({readOnly:!0})],L.prototype,"incompatible",null),(0,n._)([(0,c.MZ)()],L.prototype,"layer",void 0),(0,n._)([(0,c.MZ)({readOnly:!0})],L.prototype,"layerView",null),(0,n._)([(0,c.MZ)()],L.prototype,"listItemCreatedFunction",void 0),(0,n._)([(0,c.MZ)({nonNullable:!0})],L.prototype,"listModeDisabled",void 0),(0,n._)([(0,c.MZ)()],L.prototype,"open",void 0),(0,n._)([(0,c.MZ)({type:_.default})],L.prototype,"panel",void 0),(0,n._)([(0,h.w)("panel")],L.prototype,"castPanel",null),(0,n._)([(0,c.MZ)()],L.prototype,"parent",void 0),(0,n._)([(0,c.MZ)({value:!0})],L.prototype,"sortable",null),(0,n._)([(0,c.MZ)()],L.prototype,"title",null),(0,n._)([(0,c.MZ)({readOnly:!0})],L.prototype,"publishing",null),(0,n._)([(0,c.MZ)({readOnly:!0})],L.prototype,"updating",null),(0,n._)([(0,c.MZ)()],L.prototype,"view",void 0),(0,n._)([(0,c.MZ)()],L.prototype,"visible",null),(0,n._)([(0,c.MZ)({readOnly:!0})],L.prototype,"visibleAtCurrentScale",null),(0,n._)([(0,c.MZ)({readOnly:!0})],L.prototype,"visibleAtCurrentTimeExtent",null),(0,n._)([(0,c.MZ)({readOnly:!0})],L.prototype,"visibilityMode",null),L=s=(0,n._)([(0,u.$)("esri.widgets.LayerList.ListItem")],L);const I=L},93118:(e,t,i)=>{i.r(t),i.d(t,{default:()=>y});var s=i(93800),n=i(93633),l=i(17741),r=i(79953),a=i(48602),o=(i(21265),i(50925),i(14746),i(75269)),d=i(27811),c=i(9399),h=i(72363),u=i(87118);let p=class extends(n.A.IdentifiableMixin(d.default)){constructor(e,t){super(e,t),this._legend=null,this.className=null,this.content=null,this.flowEnabled=!1,this.image=null,this.listItem=null,this.open=!1,this.visible=!0}initialize(){this.addHandles([(0,r.watch)((()=>this._canCreateLegend),(()=>this._createLegend()),r.initial),(0,r.watch)((()=>[this._legend,this._legendOptions]),(()=>this._updateLegend()),r.initial)])}destroy(){this._legend=(0,l.pR)(this._legend)}get _canCreateLegend(){const{content:e,listItem:t}=this;if(!t)return!1;const i="legend";return e===i||null!=e&&!!Array.isArray(e)&&e.includes(i)}get _legendOptions(){const{listItem:e,_legendLayerInfo:t}=this,i=e?.view;return t&&i?{view:i,layerInfos:[t]}:{}}get _legendLayerInfo(){const e=this.listItem?.layer;if(!e||"subtype-sublayer"===e.type)return null;const t=(0,c.GB)(e)?e:null,i=e?.parent,s=null!=i&&"type"in i&&"map-image"===i.type?t?.source:null;return s&&i?{layer:i,title:"",sublayerIds:[s.mapLayerId]}:{layer:e,title:""}}get disabled(){const{listItem:e,_legend:t,content:i}=this;return!e||!(Array.isArray(i)&&i.length>1)&&!!t&&(!t.activeLayerInfos?.length||!e.visibleAtCurrentScale||!e.visible)}set disabled(e){this._overrideIfSome("disabled",e)}get icon(){const{image:e}=this,t=this._getFirstWidget();return this._get("icon")??(!e&&t?t.icon:null)}set icon(e){this._overrideIfSome("icon",e)}get title(){return this._get("title")||(this._getFirstWidget()?.label??"")}set title(e){this._override("title",e)}render(){return(0,u.K)("div",{class:"esri-list-item-panel"},this._renderContents())}_renderContent(e){const{_legend:t,disabled:i,open:s}=this;return e&&!i&&s?"legend"===e&&t?(0,u.K)("div",{key:"legend-widget"},t.render()):"string"==typeof e?(0,u.K)("div",{innerHTML:e,key:e}):(0,h.isWidget)(e)?(0,u.K)("div",{key:"content-widget"},e.render()):e instanceof HTMLElement?(0,u.K)("div",{afterCreate:this._attachToNode,bind:e,key:"content-element"}):null:null}_renderContents(){const{content:e,open:t}=this;return t?Array.isArray(e)?e.map((e=>this._renderContent(e))):this._renderContent(e):null}async _createLegend(){if((0,l.pR)(this._legend),this._legend=null,!this._canCreateLegend)return;const{default:e}=await Promise.all([i.e(88171),i.e(56095),i.e(26286),i.e(12285),i.e(76005)]).then(i.bind(i,76005)),t=new e(this._legendOptions);this._legend=t}_attachToNode(e){e.appendChild(this)}_updateLegend(){const e=this._legend;e&&e.set(this._legendOptions)}_getWidget(e){return"legend"===e?this._legend:(0,h.isWidget)(e)?e:null}_getFirstWidget(){const{content:e}=this;return Array.isArray(e)?e.map((e=>this._getWidget(e))).find((e=>e)):this._getWidget(e)}};(0,s._)([(0,a.MZ)()],p.prototype,"_legend",void 0),(0,s._)([(0,a.MZ)()],p.prototype,"_canCreateLegend",null),(0,s._)([(0,a.MZ)()],p.prototype,"_legendOptions",null),(0,s._)([(0,a.MZ)()],p.prototype,"_legendLayerInfo",null),(0,s._)([(0,a.MZ)()],p.prototype,"className",void 0),(0,s._)([(0,a.MZ)()],p.prototype,"content",void 0),(0,s._)([(0,a.MZ)()],p.prototype,"disabled",null),(0,s._)([(0,a.MZ)()],p.prototype,"flowEnabled",void 0),(0,s._)([(0,a.MZ)()],p.prototype,"icon",null),(0,s._)([(0,a.MZ)()],p.prototype,"image",void 0),(0,s._)([(0,a.MZ)()],p.prototype,"listItem",void 0),(0,s._)([(0,a.MZ)()],p.prototype,"open",void 0),(0,s._)([(0,a.MZ)()],p.prototype,"title",null),(0,s._)([(0,a.MZ)()],p.prototype,"visible",void 0),p=(0,s._)([(0,o.$)("esri.widgets.LayerList.ListItemPanel")],p);const y=p}}]);