"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[3153],{8523:(e,i,s)=>{s.d(i,{A:()=>a});var r=s(39698),t=s(9122),h=s(50765);class a extends t.f{renderChildren(e){for(const i of this.children)i.setTransform(e.state);if(super.renderChildren(e),this._updateAttributeView(),this.children.some((e=>e.hasData))){switch(e.drawPhase){case r.S5.MAP:this._renderChildren(e,r.RI.All);break;case r.S5.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(e)}this._boundsRenderer&&this._boundsRenderer.doRender(e)}}_renderHighlight(e){(0,h.lB)(e,!1,(e=>{this._renderChildren(e,r.RI.Highlight)}))}}},23153:(e,i,s)=>{s.r(i),s.d(i,{default:()=>m});var r=s(93800),t=s(77955),h=s(48690),a=s(79953),n=(s(50925),s(21265),s(14746),s(74719),s(75269)),o=s(99181),l=s(72117),p=s(87520),c=s(79508),d=s(8523),y=s(94814),g=s(84279);let w=class extends((0,c.e)(g.A)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,i){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().flatMap((i=>{const r=this._popupTemplates.get(i),t=i.hitTest(e);for(const e of t)e.layer=s,e.sourceLayer=s,e.popupTemplate=r;return t})).map((i=>({type:"graphic",graphic:i,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const i of this.graphicsViews)i.processUpdate(e)}attach(){this.addAttachHandles([(0,a.wB)((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:i,featureSet:s,layerDefinition:r}of e){const e=p.A.fromJSON(s),a=new h.A(e.features),n=r.drawingInfo,o=i?t.A.fromJSON(i):null,c=(0,l.r)(n.renderer),g=new y.A({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:a,renderer:c,container:new d.A(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,o),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=c.symbol):this.layer.lineSymbol=c.symbol:this.layer.polygonSymbol=c.symbol,this.graphicsViews.push(g),this.container.addChild(g.container)}}),a.Vh),(0,a.wB)((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new o.A({symbol:e})}),a.Vh),(0,a.wB)((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new o.A({symbol:e})}),a.Vh),(0,a.wB)((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new o.A({symbol:e})}),a.Vh)])}detach(){this._clear()}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};w=(0,r._)([(0,n.$)("esri.views.2d.layers.GeoRSSLayerView2D")],w);const m=w}}]);