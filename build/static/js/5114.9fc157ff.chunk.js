"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[5114],{35114:(i,e,s)=>{s.r(e),s.d(e,{default:()=>p});var r=s(93800),t=(s(50925),s(21265),s(14746),s(74719),s(75269)),l=s(79508),a=s(48690),y=s(40736),h=s(79953),n=s(48602),d=s(84279);let V=class extends d.A{constructor(i){super(i),this.type="group",this.layerViews=new a.A}destroy(){this.layerViews.length=0}_allLayerViewVisibility(i){this.layerViews.forEach((e=>{e.visible=i}))}initialize(){this.addHandles([this.layerViews.on("change",(i=>this._layerViewsChangeHandler(i))),(0,h.wB)((()=>this.layer?.visibilityMode),(()=>{this.layer&&this._applyVisibility((()=>this._allLayerViewVisibility(this.visible)),(()=>this._applyExclusiveVisibility(null)))}),h.OH),(0,h.wB)((()=>this.visible),(i=>{this._applyVisibility((()=>this._allLayerViewVisibility(i)),(()=>{}))}),h.OH)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}get creatingLayerViews(){return this.view?.layerViewManager?.isCreatingLayerViewsForLayer(this.layer)??!1}set layerViews(i){this._set("layerViews",(0,y.V)(i,this._get("layerViews")))}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((i,e)=>i+e.updatingProgress),0)/this.layerViews.length}isUpdating(){return this.creatingLayerViews||this.layerViews.some((i=>i.updating))}_hasLayerViewVisibleOverrides(){return this.layerViews.some((i=>i._isOverridden("visible")))}_findLayerViewForLayer(i){return i&&this.layerViews.find((e=>e.layer===i))}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find((i=>{const e=this._findLayerViewForLayer(i);return!!e?.visible}));return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){null==i&&null==(i=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.at(0))),this.layerViews.forEach((e=>{e.visible=e===i}))}_layerViewsChangeHandler(i){this.removeHandles("grouplayerview:visible"),this.addHandles(this.layerViews.map((i=>(0,h.wB)((()=>i.visible),(e=>this._applyVisibility((()=>{e!==this.visible&&(i.visible=this.visible)}),(()=>this._applyExclusiveVisibility(e?i:null)))),h.OH))).toArray(),"grouplayerview:visible");const e=i.added[i.added.length-1];this._applyVisibility((()=>this._allLayerViewVisibility(this.visible)),(()=>this._applyExclusiveVisibility(e?.visible?e:null)))}_applyVisibility(i,e){this._hasLayerViewVisibleOverrides()&&("inherited"===this.layer?.visibilityMode?i():"exclusive"===this.layer?.visibilityMode&&e())}};(0,r._)([(0,n.MZ)({readOnly:!0})],V.prototype,"creatingLayerViews",null),(0,r._)([(0,n.MZ)({cast:y.H})],V.prototype,"layerViews",null),(0,r._)([(0,n.MZ)({readOnly:!0})],V.prototype,"updatingProgress",null),(0,r._)([(0,n.MZ)()],V.prototype,"view",void 0),V=(0,r._)([(0,t.$)("esri.views.layers.GroupLayerView")],V);const w=V;let o=class extends((0,l.e)(w)){attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",(()=>this._updateStageChildren())))}detach(){this.container.removeAllChildren()}update(i){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((i,e)=>this.container.addChildAt(i.container,e)))}};o=(0,r._)([(0,t.$)("esri.views.2d.layers.GroupLayerView2D")],o);const p=o}}]);