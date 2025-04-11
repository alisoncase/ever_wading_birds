"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[89644],{89644:(e,t,o)=>{o.r(t),o.d(t,{default:()=>R});var r=o(93800),i=o(32195),l=o(23060),s=o(59321),n=o(49959),a=o(43103),y=o(48602),p=(o(21265),o(50925),o(14746),o(14800)),u=o(75269),d=o(12560),h=o(70576),c=o(57457),f=o(24203),S=o(8592),m=o(30528),g=o(52954),v=o(75215),_=o(75238),b=o(9167),M=o(92744),C=o(99071),w=o(83031),Z=o(76695);const k=["atom","xml"],G={base:Z.default,key:"type",typeMap:{"simple-line":C.default},errorContext:"symbol"},P={base:Z.default,key:"type",typeMap:{"picture-marker":b.default,"simple-marker":w.default},errorContext:"symbol"},x={base:Z.default,key:"type",typeMap:{"simple-fill":M.default},errorContext:"symbol"};let F=class extends((0,f.dM)((0,g.J)((0,S.q)((0,m.A)((0,v.j)((0,s.P)(c.default))))))){constructor(){super(...arguments),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readFeatureCollections(e,t){return t.featureCollection.layers.forEach((e=>{const t=e.layerDefinition.drawingInfo.renderer.symbol;t&&"esriSFS"===t.type&&t.outline?.style.includes("esriSFS")&&(t.outline.style="esriSLSSolid")})),t.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?(0,a.getFilename)(this.url,k)||"GeoRSS":e}set title(e){this._set("title",e)}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(n.throwIfAbortError).then((()=>this._fetchService(t))).then((e=>{this.read(e,{origin:"service"})}))),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){const t=this.spatialReference,{data:o}=await(0,l.default)(i.default.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:(0,h.oT)(t)?void 0:t.wkid??JSON.stringify(t)},signal:e});return o}_hasGeometry(e){return this.featureCollections?.some((t=>t.featureSet?.geometryType===e&&t.featureSet.features?.length>0))??!1}};(0,r._)([(0,y.MZ)()],F.prototype,"description",void 0),(0,r._)([(0,y.MZ)()],F.prototype,"featureCollections",void 0),(0,r._)([(0,p.w)("service","featureCollections",["featureCollection.layers"])],F.prototype,"readFeatureCollections",null),(0,r._)([(0,y.MZ)({type:d.default,json:{name:"lookAtExtent"}})],F.prototype,"fullExtent",void 0),(0,r._)([(0,y.MZ)(_.id)],F.prototype,"id",void 0),(0,r._)([(0,y.MZ)(_.fV)],F.prototype,"legendEnabled",void 0),(0,r._)([(0,y.MZ)({types:G,json:{write:!0}})],F.prototype,"lineSymbol",void 0),(0,r._)([(0,y.MZ)({type:["show","hide"]})],F.prototype,"listMode",void 0),(0,r._)([(0,y.MZ)({types:P,json:{write:!0}})],F.prototype,"pointSymbol",void 0),(0,r._)([(0,y.MZ)({types:x,json:{write:!0}})],F.prototype,"polygonSymbol",void 0),(0,r._)([(0,y.MZ)({type:["GeoRSS"]})],F.prototype,"operationalLayerType",void 0),(0,r._)([(0,y.MZ)(_.OZ)],F.prototype,"url",void 0),(0,r._)([(0,y.MZ)({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],F.prototype,"title",null),(0,r._)([(0,y.MZ)({readOnly:!0,json:{read:!1},value:"geo-rss"})],F.prototype,"type",void 0),F=(0,r._)([(0,u.$)("esri.layers.GeoRSSLayer")],F);const R=F}}]);