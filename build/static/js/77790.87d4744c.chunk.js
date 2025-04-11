"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[10963,12749,35130,59116,66201,77790,79892,88582],{33170:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r,i=n(93800),a=n(6946),l=n(74719),o=n(79953),s=n(48602),p=(n(21265),n(50925),n(14746),n(75269)),d=n(59116),u=n(35130),y=n(9399),c=n(89129),h=n(99572),g=n(42214),f=n(62631),b=n(92734);let v=r=class extends b.default{constructor(e){super(e),this.children=new c.default,this.parent=null}get enabled(){const{children:e}=this;if(0===e.length)return null!=this.featureSource&&this.featureSource.enabled?"enabled":"disabled";let t=!1,n=!1;for(const r of e){if("indeterminate"===r.enabled)return r.enabled;if("enabled"===r.enabled?t=!0:"disabled"===r.enabled&&(n=!0),n&&t)return"indeterminate"}return n?"disabled":"enabled"}get childLayerIds(){return this.children.toArray().flatMap((e=>[e.layer?.id,...e.childLayerIds]))}get featureSource(){const{layer:e,getFeatureSnappingSources:t}=this;return t().find((t=>t.layer===e))}_initializeChildLayers(e){if(!e)return;const t=e.filter(g.mH);super._initializeChildLayers(t)}_createChildItems(e){return e.map((e=>(0,y.oU)(e)?new r({layer:e,parent:this,view:this.view,getFeatureSnappingSources:this.getFeatureSnappingSources}):null)).filter(f.Ru).reverse()}};(0,i._)([(0,s.MZ)()],v.prototype,"enabled",null),(0,i._)([(0,s.MZ)()],v.prototype,"children",void 0),(0,i._)([(0,s.MZ)()],v.prototype,"childLayerIds",null),(0,i._)([(0,s.MZ)()],v.prototype,"featureSource",null),(0,i._)([(0,s.MZ)({constructOnly:!0})],v.prototype,"getFeatureSnappingSources",void 0),(0,i._)([(0,s.MZ)()],v.prototype,"parent",void 0),v=r=(0,i._)([(0,p.$)("esri.widgets.support.SnappingControls.SnappingListItem")],v);let S=class extends h.default{constructor(){super(...arguments),this.featureSnappingSources=new c.default}get operationalItemsFlat(){return this.operationalItems.flatten((e=>e.children))}get selectableItems(){return this.operationalItemsFlat.filter((e=>!e.children?.length))}_compileList(){const e=this.view?.map?.layers;if(!e)return;const t=e.filter(g.mH);this._watchLayersListMode(t);const n=this._getViewableLayers(t);n?.length?(this._createNewItems(n),this._removeItems(n),this._sortItems(n)):this._removeAllItems()}_createListItem(e){return new v({layer:e,view:this.view,getFeatureSnappingSources:()=>this.featureSnappingSources})}};(0,i._)([(0,s.MZ)()],S.prototype,"featureSnappingSources",void 0),(0,i._)([(0,s.MZ)()],S.prototype,"operationalItems",void 0),(0,i._)([(0,s.MZ)()],S.prototype,"operationalItemsFlat",null),(0,i._)([(0,s.MZ)()],S.prototype,"selectableItems",null),S=(0,i._)([(0,p.$)("esri.widgets.support.SnappingControls.SnappingLayerListViewModel")],S);let _=class extends a.default{constructor(e){super(e),this.layerListViewModel=new S,this.snappingOptions=new u.default,this.view=null}initialize(){this.addHandles([(0,o.watch)((()=>({viewModel:this.layerListViewModel,view:this.view})),(e=>{let{viewModel:t,view:n}=e;t.view=n}),o.initial),(0,o.watch)((()=>({viewModel:this.layerListViewModel,sources:this.snappingOptions?.featureSources})),(e=>{let{viewModel:t,sources:n}=e;t.featureSnappingSources=n}),o.initial)])}get allLayersEnabled(){return(this.layerListViewModel?.selectableItems??[]).every((e=>"enabled"===e.enabled))}get allLayersDisabled(){return(this.layerListViewModel?.selectableItems??[]).every((e=>!e.enabled))}get layersEnabledCount(){return this.layerListViewModel?.selectableItems?.filter((e=>"enabled"===e.enabled)).length??0}get state(){return this.snappingOptions?"ready":"disabled"}toggleSnappingForLayers(e,t){e?.forEach((e=>t?this.enableSnappingForLayer(e):this.disableSnappingForLayer(e)))}toggleSnappingForAllLayers(e){this.layerListViewModel.selectableItems.forEach((t=>{let{layer:n}=t;const r=n?.id;e?this.enableSnappingForLayer(r):this.disableSnappingForLayer(r)}))}enableSnappingForLayer(e){const t=this._findSnappingSourceForLayer(e)??this._makeSnappingSourceForLayer(e);t&&(t.enabled=!0)}disableSnappingForLayer(e){const t=this._findSnappingSourceForLayer(e);t&&(t.enabled=!1)}updateEnabledFeatureSources(e){for(const t of this.snappingOptions.featureSources)(0,y.oU)(t.layer)&&(t.enabled=e.includes(t.layer.id))}_findSnappingSourceForLayer(e){return this.snappingOptions.featureSources.find((t=>t.layer.id===e))}_makeSnappingSourceForLayer(e){const t=this.layerListViewModel.operationalItemsFlat.find((t=>t.layer?.id===e))?.layer;if(!t)throw new l.default("snapping-controls:layer-not-found",`cannot enable snapping for layer with id ${e} because no such layer was found in the view`);if("group"===t.type)return;const n=new d.default({layer:t});return this.snappingOptions.featureSources.add(n),n}};(0,i._)([(0,s.MZ)()],_.prototype,"allLayersEnabled",null),(0,i._)([(0,s.MZ)()],_.prototype,"allLayersDisabled",null),(0,i._)([(0,s.MZ)({constructOnly:!0})],_.prototype,"layerListViewModel",void 0),(0,i._)([(0,s.MZ)()],_.prototype,"layersEnabledCount",null),(0,i._)([(0,s.MZ)({type:u.default,nonNullable:!0})],_.prototype,"snappingOptions",void 0),(0,i._)([(0,s.MZ)()],_.prototype,"state",null),(0,i._)([(0,s.MZ)()],_.prototype,"view",void 0),_=(0,i._)([(0,p.$)("esri.widgets.support.SnappingControls.SnappingControlsViewModel")],_);const m=_},34519:(e,t,n)=>{n.d(t,{N:()=>d});var r=n(93800),i=n(88102),a=n(19455),l=n(48602),o=n(75269);let s=class extends a.A{constructor(){super(...arguments),this.enabled=!0}};(0,r._)([(0,l.MZ)({type:Boolean})],s.prototype,"enabled",void 0),s=(0,r._)([(0,o.$)("esri.views.interactive.snapping.Settings.DefaultSnappingAlgorithm")],s);let p=class extends a.A{constructor(e){super(e),this.lineSnapper=new s,this.parallelLineSnapper=new s,this.rightAngleSnapper=new s,this.rightAngleTriangleSnapper=new s,this.shortLineThreshold=15,this.distance=5,this.pointThreshold=1e-6,this.intersectionParallelLineThreshold=1e-6,this.parallelLineThreshold=1e-6,this.verticalLineThresholdMeters=.3,this.touchSensitivityMultiplier=1.5,this.pointOnLineThreshold=1e-6,this.orange=new i.default([255,127,0]),this.orangeTransparent=new i.default([255,127,0,.5]),this.lineHintWidthReference=3,this.lineHintWidthTarget=3,this.lineHintFadedExtensions=.3,this.parallelLineHintWidth=2,this.parallelLineHintLength=24,this.parallelLineHintOffset=1.5,this.rightAngleHintSize=24,this.rightAngleHintOutlineSize=1.5,this.satisfiesConstraintScreenThreshold=1}};(0,r._)([(0,l.MZ)({type:s,constructOnly:!0,nonNullable:!0,json:{write:!0}})],p.prototype,"lineSnapper",void 0),(0,r._)([(0,l.MZ)({type:s,constructOnly:!0,nonNullable:!0,json:{write:!0}})],p.prototype,"parallelLineSnapper",void 0),(0,r._)([(0,l.MZ)({type:s,constructOnly:!0,nonNullable:!0,json:{write:!0}})],p.prototype,"rightAngleSnapper",void 0),(0,r._)([(0,l.MZ)({type:s,constructOnly:!0,nonNullable:!0,json:{write:!0}})],p.prototype,"rightAngleTriangleSnapper",void 0),(0,r._)([(0,l.MZ)({type:Number,nonNullable:!0,range:{min:-1,max:50,step:1},json:{write:!0}})],p.prototype,"shortLineThreshold",void 0),(0,r._)([(0,l.MZ)({type:Number,nonNullable:!0,range:{min:-1,max:50,step:1},json:{write:!0}})],p.prototype,"distance",void 0),(0,r._)([(0,l.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1e-5},json:{write:!0}})],p.prototype,"pointThreshold",void 0),(0,r._)([(0,l.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1e-5},json:{write:!0}})],p.prototype,"intersectionParallelLineThreshold",void 0),(0,r._)([(0,l.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1e-5},json:{write:!0}})],p.prototype,"parallelLineThreshold",void 0),(0,r._)([(0,l.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],p.prototype,"verticalLineThresholdMeters",void 0),(0,r._)([(0,l.MZ)({type:Number,nonNullable:!0,range:{min:0,max:10},json:{write:!0}})],p.prototype,"touchSensitivityMultiplier",void 0),(0,r._)([(0,l.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1e-5},json:{write:!0}})],p.prototype,"pointOnLineThreshold",void 0),(0,r._)([(0,l.MZ)({type:i.default,nonNullable:!0})],p.prototype,"orange",void 0),(0,r._)([(0,l.MZ)({type:i.default,nonNullable:!0})],p.prototype,"orangeTransparent",void 0),(0,r._)([(0,l.MZ)({type:Number,nonNullable:!0,range:{min:0,max:10},json:{write:!0}})],p.prototype,"lineHintWidthReference",void 0),(0,r._)([(0,l.MZ)({type:Number,nonNullable:!0,range:{min:0,max:10},json:{write:!0}})],p.prototype,"lineHintWidthTarget",void 0),(0,r._)([(0,l.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],p.prototype,"lineHintFadedExtensions",void 0),(0,r._)([(0,l.MZ)({type:Number,nonNullable:!0,range:{min:0,max:10},json:{write:!0}})],p.prototype,"parallelLineHintWidth",void 0),(0,r._)([(0,l.MZ)({type:Number,nonNullable:!0,range:{min:0,max:50},json:{write:!0}})],p.prototype,"parallelLineHintLength",void 0),(0,r._)([(0,l.MZ)({type:Number,nonNullable:!0,range:{min:0,max:5},json:{write:!0}})],p.prototype,"parallelLineHintOffset",void 0),(0,r._)([(0,l.MZ)({type:Number,nonNullable:!0,range:{min:0,max:46},json:{write:!0}})],p.prototype,"rightAngleHintSize",void 0),(0,r._)([(0,l.MZ)({type:Number,nonNullable:!0,range:{min:0,max:6},json:{write:!0}})],p.prototype,"rightAngleHintOutlineSize",void 0),(0,r._)([(0,l.MZ)({type:Number,nonNullable:!0,range:{min:0,max:5},json:{write:!0}})],p.prototype,"satisfiesConstraintScreenThreshold",void 0),p=(0,r._)([(0,o.$)("esri.views.interactive.snapping.Settings.Defaults")],p);const d=new p},35130:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(93800),i=n(6946),a=n(62631),l=n(89129),o=n(50925),s=n(48602),p=(n(21265),n(75269)),d=n(59116),u=n(34519);let y=class extends i.default{constructor(e){super(e),this.enabled=!1,this.enabledToggled=!1,this.forceDisabled=!1,this.selfEnabled=!0,this.featureEnabled=!0,this.gridEnabled=!1,this.attributeRulesEnabled=!1,this.featureSources=new l.default,this.distance=u.N.distance,this.touchSensitivityMultiplier=u.N.touchSensitivityMultiplier}get effectiveEnabled(){return!this.forceDisabled&&(this.enabledToggled?!this.enabled:this.enabled)}get effectiveGridEnabled(){return this.effectiveEnabled&&this.gridEnabled}get effectiveSelfEnabled(){return this.effectiveEnabled&&this.selfEnabled}get effectiveFeatureEnabled(){return this.effectiveEnabled&&this.featureEnabled}get _effectiveFeatureSources(){const e=this.featureSources;e.some(h)&&o.A.getLogger(this).warnOnce("Do not configure SubtypeGroupLayer sources in SnappingOptions.featureSources directly. Create a FeatureSnappingLayerSource for each SubtypeSublayer.");const t=e.filter(f),n=this._get("_effectiveFeatureSources")?.filter(h)??new l.default;for(const a of t){const e=n.find((e=>e.layer===a.layer.parent));if(e)e.sublayerSources.includes(a)||e.sublayerSources.add(a);else if(a.layer.parent){const e=new d.default({layer:a.layer.parent});e.sublayerSources.add(a),n.add(e)}}for(const a of n){const e=a.sublayerSources.filter((e=>!t.includes(e)));a.sublayerSources.removeMany(e)}n.removeMany(n.filter((e=>0===e.sublayerSources.length)));const r=e.filter(g),i=this._get("_effectiveFeatureSources")??new l.default,{added:s,removed:p}=(0,a.iv)(i.toArray(),[...r,...n]);return i.removeMany(p),i.addMany(s),i}};(0,r._)([(0,s.MZ)()],y.prototype,"enabled",void 0),(0,r._)([(0,s.MZ)()],y.prototype,"enabledToggled",void 0),(0,r._)([(0,s.MZ)()],y.prototype,"forceDisabled",void 0),(0,r._)([(0,s.MZ)()],y.prototype,"selfEnabled",void 0),(0,r._)([(0,s.MZ)()],y.prototype,"featureEnabled",void 0),(0,r._)([(0,s.MZ)()],y.prototype,"gridEnabled",void 0),(0,r._)([(0,s.MZ)()],y.prototype,"attributeRulesEnabled",void 0),(0,r._)([(0,s.MZ)({type:l.default.ofType(d.default)})],y.prototype,"featureSources",void 0),(0,r._)([(0,s.MZ)()],y.prototype,"distance",void 0),(0,r._)([(0,s.MZ)()],y.prototype,"touchSensitivityMultiplier",void 0),(0,r._)([(0,s.MZ)({readOnly:!0})],y.prototype,"effectiveEnabled",null),(0,r._)([(0,s.MZ)({readOnly:!0})],y.prototype,"effectiveGridEnabled",null),(0,r._)([(0,s.MZ)({readOnly:!0})],y.prototype,"effectiveSelfEnabled",null),(0,r._)([(0,s.MZ)({readOnly:!0})],y.prototype,"effectiveFeatureEnabled",null),(0,r._)([(0,s.MZ)({readOnly:!0})],y.prototype,"_effectiveFeatureSources",null),y=(0,r._)([(0,p.$)("esri.views.interactive.snapping.SnappingOptions")],y);const c=y;function h(e){return"subtype-group"===e.layer.type}function g(e){return"subtype-group"!==e.layer.type}function f(e){return"subtype-sublayer"===e.layer.type}},42214:(e,t,n)=>{n.d(t,{BR:()=>o,mH:()=>i});var r=n(9399);const i=e=>a(e)||l(e),a=e=>{if(!("type"in e))return!1;switch(e.type){case"feature":case"geojson":case"csv":case"graphics":case"wfs":case"map-notes":case"oriented-imagery":case"scene":case"building-scene":case"subtype-sublayer":return!0;default:return!1}},l=e=>{const t=(0,r.oZ)(e);if(null!=t&&e.hasOwnProperty(t)&&null!=e[t])for(const n of e[t])if(i(n))return!0;return!1},o=(e,t)=>null!=t&&null!=e&&(t.test(e.title)?"self":!!e.children.some((e=>!1!==o(e,t)))&&"children")},59116:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r=n(93800),i=n(6946),a=n(89129),l=n(48602),o=(n(21265),n(50925),n(14746),n(75269));let s=class extends i.default{constructor(e){super(e),this.layer=null,this.enabled=!0,this.updating=!1,this.availability=1,this.sublayerSources=new a.default}};(0,r._)([(0,l.MZ)({constructOnly:!0})],s.prototype,"layer",void 0),(0,r._)([(0,l.MZ)()],s.prototype,"enabled",void 0),(0,r._)([(0,l.MZ)()],s.prototype,"updating",void 0),(0,r._)([(0,l.MZ)()],s.prototype,"availability",void 0),(0,r._)([(0,l.MZ)()],s.prototype,"sublayerSources",void 0),s=(0,r._)([(0,o.$)("esri.views.interactive.snapping.FeatureSnappingLayerSource")],s);const p=s},66201:(e,t,n)=>{function r(e){return t=>{t.hasOwnProperty("_delegatedEventNames")||(t._delegatedEventNames=t._delegatedEventNames?t._delegatedEventNames.slice():[]);const n=t._delegatedEventNames,r=Array.isArray(e)?e:function(e){return e.split(",").map((e=>e.trim()))}(e);n.push(...r)}}n.d(t,{U:()=>r})}}]);