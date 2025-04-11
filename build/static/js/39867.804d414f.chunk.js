"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[871,39867,57935],{871:(t,e,i)=>{i.r(e),i.d(e,{default:()=>C});var r=i(93800),a=i(38394),n=i(85715),o=i(59321),s=i(43103),l=i(12130),h=i(48602),p=(i(21265),i(50925),i(14746),i(14800)),y=i(75269),u=i(15484),d=i(70605),c=i(30449),g=i(3864),k=i(42147),L=i(57935),w=i(85042);let v=class extends(n.A.ClonableMixin(o.L)){constructor(t){super(t),this.aggregatedEntitiesUrl=null,this.aggregatedRelationshipsUrl=null,this.autoCollapseRelationships=!0,this.centralityIsUpToDate=!0,this.entitiesUrl=null,this.layoutSettings=null,this.layoutType="organic-standard",this.nonspatialDataDisplay=null,this.relationshipsUrl=null}readEntitiesUrl(t,e,i){return(0,w.f)(t,i)}writeEntitiesUrl(t,e,i,r){const a=r?.portalItem,n=r?.resources,o=(0,d.aB)(r?.origin),s=r?.webmap?.activeLinkChartLayer;a&&n&&null!=o&&s&&s.membershipModified?this._saveUrlAsNewResource(e,i,n,a,s):t&&(e[i]=(0,w.t)(t,r))}readRelationshipsUrl(t,e,i){return(0,w.f)(t,i)}writeRelationshipsUrl(t,e,i,r){const a=r?.portalItem,n=r?.resources,o=(0,d.aB)(r?.origin),s=r?.webmap?.activeLinkChartLayer;a&&n&&null!=o&&s&&s.membershipModified?this._saveUrlAsNewResource(e,i,n,a,s):t&&(e[i]=(0,w.t)(t,r))}_saveUrlAsNewResource(t,e,i,r,n){t[e]="<pending>";const o=(n.knowledgeGraph.dataModel.relationshipTypes??[]).map((t=>t.name)).reduce(((t,e)=>{if(!e)return t;const{members:i}=n.dataManager.inclusionModeDefinition.namedTypeDefinitions.get(e)||{members:void 0};if(!i)return t;for(const[r]of i)t.push({id:r,typeName:e});return t}),[]);i.pendingOperations.push(new Promise((h=>{(0,c.getRelationshipEndNodeMap)(o,n.knowledgeGraph).then((o=>{(async function(t,e,i,r){let n;return n="entitiesUrl"===e?await(0,a._P)(t,i,r):await(0,a.sD)(t,i,r),new Blob([n],{type:"application/x-protobuf"})})(n.dataManager.inclusionModeDefinition,e,n.knowledgeGraph,o).then((a=>{const n=function(t,e){const i=`${e}-${(0,l.lk)()}.dat`,r=(0,s.join)("linkChart",i);return t.resourceFromPath(r)}(r,"entitiesUrl"===e?"entitiesUrl":"relationshipsUrl");t[e]=n.itemRelativeUrl,i.toAdd.push({resource:n,content:{type:"blob",blob:a},compress:!1,finish:t=>{"entitiesUrl"===e?this.entitiesUrl=t.url:this.relationshipsUrl=t.url}}),h()}))}))})))}};(0,r._)([(0,h.MZ)({type:String,json:{write:!0}})],v.prototype,"aggregatedEntitiesUrl",void 0),(0,r._)([(0,h.MZ)({type:String,json:{write:!0}})],v.prototype,"aggregatedRelationshipsUrl",void 0),(0,r._)([(0,h.MZ)({type:Boolean,json:{write:!0}})],v.prototype,"autoCollapseRelationships",void 0),(0,r._)([(0,h.MZ)({type:Boolean,json:{write:!0}})],v.prototype,"centralityIsUpToDate",void 0),(0,r._)([(0,h.MZ)({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}})],v.prototype,"entitiesUrl",void 0),(0,r._)([(0,p.w)("entitiesUrl")],v.prototype,"readEntitiesUrl",null),(0,r._)([(0,u.K)("entitiesUrl")],v.prototype,"writeEntitiesUrl",null),(0,r._)([(0,h.MZ)({type:k.default,json:{write:!0}})],v.prototype,"layoutSettings",void 0),(0,r._)([(0,h.MZ)({type:g.iQ,json:{write:!0}})],v.prototype,"layoutType",void 0),(0,r._)([(0,h.MZ)({type:L.default,json:{write:!0}})],v.prototype,"nonspatialDataDisplay",void 0),(0,r._)([(0,h.MZ)({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}})],v.prototype,"relationshipsUrl",void 0),(0,r._)([(0,p.w)("relationshipsUrl")],v.prototype,"readRelationshipsUrl",null),(0,r._)([(0,u.K)("relationshipsUrl")],v.prototype,"writeRelationshipsUrl",null),v=(0,r._)([(0,y.$)("esri.linkChart.LinkChartProperties")],v);const C=v},31748:(t,e,i)=>{i.r(e),i.d(e,{default:()=>y});var r=i(93800),a=i(85715),n=i(19455),o=i(48602),s=(i(21265),i(50925),i(14746),i(47332)),l=i(75269),h=i(3864);let p=class extends(a.A.ClonableMixin(n.A)){constructor(t){super(t),this.absoluteIdealEdgeLength=1,this.autoRepulsionRadius=!0,this.computationBudgetTime=2,this.idealEdgeLengthType="multiplier",this.multiplicativeIdealEdgeLength=1,this.repulsionRadiusMultiplier=1}};(0,r._)([(0,o.MZ)({type:Number,range:{min:0,max:360},json:{write:!0}})],p.prototype,"absoluteIdealEdgeLength",void 0),(0,r._)([(0,o.MZ)({type:Boolean,json:{write:!0}})],p.prototype,"autoRepulsionRadius",void 0),(0,r._)([(0,o.MZ)({type:Number,json:{write:!1}})],p.prototype,"computationBudgetTime",void 0),(0,r._)([(0,s.e)(h.lg)],p.prototype,"idealEdgeLengthType",void 0),(0,r._)([(0,o.MZ)({type:Number,range:{min:0,max:5},json:{write:!0}})],p.prototype,"multiplicativeIdealEdgeLength",void 0),(0,r._)([(0,o.MZ)({type:Number,range:{min:1,max:99},json:{write:!0}})],p.prototype,"repulsionRadiusMultiplier",void 0),p=(0,r._)([(0,l.$)("esri.linkChart.OrganicLayoutSettings")],p);const y=p},35363:(t,e,i)=>{i.r(e),i.d(e,{default:()=>u});var r=i(93800),a=i(85715),n=i(19455),o=i(48602),s=i(80556),l=(i(21265),i(14746),i(47332)),h=i(75269),p=i(3864);let y=class extends(a.A.ClonableMixin(n.A)){constructor(t){super(t),this.durationLineWidth=5,this.entityPositionAtDurationRatio=1,this.eventsTicksVisualization="start-and-end",this.lineSeparationMultiplier=1,this.moveFirstBends=!0,this.secondBendRatio=.3,this.separateTimeOverlaps=!0,this.separateTimelineOverlaps=!0,this.separatedLineShapeRatio=0,this.showDurationLineForNonZeroDurationEntityEvents=!1,this.showNonZeroDurationIntervalBounds=!1,this.spaceSeparatedLinesEvenly=!1,this.timeBannerUTCOffsetInMinutes=0,this.timeDirection="right",this.useBezierCurves=!1}};(0,r._)([(0,o.MZ)({type:s.jz,range:{min:1,max:10},json:{write:!0}})],y.prototype,"durationLineWidth",void 0),(0,r._)([(0,o.MZ)({type:Number,range:{min:0,max:1},json:{write:!0}})],y.prototype,"entityPositionAtDurationRatio",void 0),(0,r._)([(0,l.e)(p.SJ)],y.prototype,"eventsTicksVisualization",void 0),(0,r._)([(0,o.MZ)({type:Number,range:{min:0},json:{write:!0}})],y.prototype,"lineSeparationMultiplier",void 0),(0,r._)([(0,o.MZ)({type:Boolean,json:{write:!0}})],y.prototype,"moveFirstBends",void 0),(0,r._)([(0,o.MZ)({type:Number,range:{min:0,max:1},json:{write:!0}})],y.prototype,"secondBendRatio",void 0),(0,r._)([(0,o.MZ)({type:Boolean,json:{write:!0}})],y.prototype,"separateTimeOverlaps",void 0),(0,r._)([(0,o.MZ)({type:Boolean,json:{write:!0}})],y.prototype,"separateTimelineOverlaps",void 0),(0,r._)([(0,o.MZ)({type:Number,range:{min:0,max:1},json:{write:!0}})],y.prototype,"separatedLineShapeRatio",void 0),(0,r._)([(0,o.MZ)({type:Boolean,json:{write:!0}})],y.prototype,"showDurationLineForNonZeroDurationEntityEvents",void 0),(0,r._)([(0,o.MZ)({type:Boolean,json:{write:!0}})],y.prototype,"showNonZeroDurationIntervalBounds",void 0),(0,r._)([(0,o.MZ)({type:Boolean,json:{write:!0}})],y.prototype,"spaceSeparatedLinesEvenly",void 0),(0,r._)([(0,o.MZ)({type:s.jz,json:{write:!0}})],y.prototype,"timeBannerUTCOffsetInMinutes",void 0),(0,r._)([(0,o.MZ)({type:["bottom","left","right","top"],json:{write:!0}})],y.prototype,"timeDirection",void 0),(0,r._)([(0,o.MZ)({type:Boolean,json:{write:!0}})],y.prototype,"useBezierCurves",void 0),y=(0,r._)([(0,h.$)("esri.linkChart.ChronologicalLayoutSettings")],y);const u=y},39867:(t,e,i)=>{i.r(e),i.d(e,{default:()=>v});var r,a=i(93800),n=i(47412),o=i(29923),s=i(74719),l=i(48602),h=(i(21265),i(50925),i(14746),i(75269)),p=i(30449),y=i(42147),u=i(871),d=i(57935),c=i(27686),g=i(46047),k=i(27514);const L={currentVersion:g.Y,createInitialViewProperties:()=>new c.default,parseVersion:k.R.parse,itemType:"Web Link Chart",name:"linkchart",origin:"link-chart"};let w=r=class extends o.default{constructor(t){super(t),this.mapType="webLinkChart",this.linkChartProperties=new u.default}get activeLinkChartLayer(){return this.layers.find((t=>{let{type:e}=t;return"link-chart"===e}))}get context(){return L}async applyLayout(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"organic-standard",e=arguments.length>1?arguments[1]:void 0;if(await this.load(),!this.activeLinkChartLayer)throw new s.default("WebLinkChart:no-link-chart-layer","No link chart layer found");return"geographic-organic-standard"!==t||this.basemap?.baseLayers?.length||(this.basemap=n.default.fromId("topo-vector"),await(this.basemap?.load())),this.linkChartProperties.layoutType=t,e?.layoutSettings?.chronologicalLayoutSettings&&e.layoutSettings.organicLayoutSettings||!this.linkChartProperties.layoutSettings?this.linkChartProperties.layoutSettings=e?.layoutSettings:this.linkChartProperties.layoutSettings=new y.default({organicLayoutSettings:e?.layoutSettings?.organicLayoutSettings??this.linkChartProperties.layoutSettings?.organicLayoutSettings,chronologicalLayoutSettings:e?.layoutSettings?.chronologicalLayoutSettings??this.linkChartProperties.layoutSettings?.chronologicalLayoutSettings}),this.activeLinkChartLayer.applyNewLinkChartLayout(t,e)}changeNonspatialDataDisplay(t){if(!this.activeLinkChartLayer)throw new s.default("WebLinkChart:no-link-chart-layer","No link chart layer found");this.linkChartProperties.nonspatialDataDisplay||(this.linkChartProperties.nonspatialDataDisplay=new d.default),this.linkChartProperties.nonspatialDataDisplay.mode=t}async addRecords(t,e){if(await this.load(),!this.activeLinkChartLayer)throw new s.default("WebLinkChart:no-link-chart-layer","No link chart layer found");return this.activeLinkChartLayer.addRecords(t,e)}async removeRecords(t){if(await this.load(),!this.activeLinkChartLayer)throw new s.default("WebLinkChart:no-link-chart-layer","No link chart layer found");return this.activeLinkChartLayer.removeRecords(t)}async expand(t,e){if(await this.load(),!this.activeLinkChartLayer)throw new s.default("WebLinkChart:no-link-chart-layer","No link chart layer found");const i=await this.activeLinkChartLayer.expand(t,e);return i?.records??[]}async refreshLinkChartData(t){if(await this.load(),!this.activeLinkChartLayer)throw new s.default("WebLinkChart:no-link-chart-layer","No link chart layer found");return this.activeLinkChartLayer.refreshLinkChartCache(t)}async connectBetweenEntities(t,e){if(await this.load(),!this.activeLinkChartLayer)throw new s.default("WebLinkChart:no-link-chart-layer","No link chart layer found");const i=await this.activeLinkChartLayer.connectBetweenEntities(t,e);return i?.records??[]}async connectFromEntities(t,e){if(await this.load(),!this.activeLinkChartLayer)throw new s.default("WebLinkChart:no-link-chart-layer","No link chart layer found");const i=await this.activeLinkChartLayer.connectFromEntities(t,e);return i?.records??[]}getMemberIdsByType(t){if(!this.activeLinkChartLayer)throw new s.default("WebLinkChart:no-link-chart-layer","No link chart layer found");return Array.from(this.activeLinkChartLayer?.dataManager.sublayerCaches.get(t)?.keys()??[])}get diagramNodesExtent(){if(!this.activeLinkChartLayer)throw new s.default("WebLinkChart:no-link-chart-layer","No link chart layer found");return this.activeLinkChartLayer.linkChartExtent}get entityCount(){if(!this.activeLinkChartLayer)throw new s.default("WebLinkChart:no-link-chart-layer","No link chart layer found");return this.activeLinkChartLayer.entityLinkChartDiagramLookup.size}get relationshipCount(){if(!this.activeLinkChartLayer)throw new s.default("WebLinkChart:no-link-chart-layer","No link chart layer found");return this.activeLinkChartLayer.relationshipLinkChartDiagramLookup.size}get knowledgeGraph(){if(!this.activeLinkChartLayer)throw new s.default("WebLinkChart:no-link-chart-layer","No link chart layer found");return this.activeLinkChartLayer?.knowledgeGraph}add(t,e){if(this.activeLinkChartLayer&&"type"in t&&"link-chart"===t.type)throw new s.default("linkchart:one-link-chart-layer","Web Link Charts can only have one Link Chart Layer, another cannot be added");if(super.add(t,e),"type"in t&&"link-chart"===t.type){const e=t.initializationLinkChartConfig?.layoutMode;e&&(this.linkChartProperties.layoutType=e);const i=t.initializationLinkChartConfig?.layoutSettings;i&&(this.linkChartProperties.layoutSettings=i)}}static fromJSON(t){if(t)return new r({resourceInfo:t});throw new s.default("linkchart:empty-resource","Expected a JSON resource but got nothing")}handleChronologicalOverlay(){if(!this.activeLinkChartLayer)return;const t=this.activeLinkChartLayer,e=this.findLayerById((0,p.getDefaultChronologicalOverlayLayerId)());if(e&&this.remove(e),"chronological-mono-timeline"===this.linkChartProperties.layoutType||"chronological-multi-timeline"===this.linkChartProperties.layoutType){const e=(0,p.getChronologicalOverlay)(t);this.add(e,0)}}};(0,a._)([(0,l.MZ)({readOnly:!0})],w.prototype,"activeLinkChartLayer",null),(0,a._)([(0,l.MZ)({json:{write:{ignoreOrigin:!0}}})],w.prototype,"mapType",void 0),(0,a._)([(0,l.MZ)({type:u.default,nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],w.prototype,"linkChartProperties",void 0),(0,a._)([(0,l.MZ)({readOnly:!0})],w.prototype,"diagramNodesExtent",null),(0,a._)([(0,l.MZ)({readOnly:!0})],w.prototype,"entityCount",null),(0,a._)([(0,l.MZ)({readOnly:!0})],w.prototype,"relationshipCount",null),(0,a._)([(0,l.MZ)({readOnly:!0})],w.prototype,"knowledgeGraph",null),w=r=(0,a._)([(0,h.$)("esri.WebLinkChart")],w);const v=w},42147:(t,e,i)=>{i.r(e),i.d(e,{default:()=>y});var r=i(93800),a=i(85715),n=i(19455),o=i(48602),s=(i(21265),i(50925),i(14746),i(75269)),l=i(35363),h=i(31748);let p=class extends(a.A.ClonableMixin(n.A)){constructor(t){super(t),this.chronologicalLayoutSettings=null,this.organicLayoutSettings=null}};(0,r._)([(0,o.MZ)({type:l.default,json:{write:!0}})],p.prototype,"chronologicalLayoutSettings",void 0),(0,r._)([(0,o.MZ)({type:h.default,json:{write:!0}})],p.prototype,"organicLayoutSettings",void 0),p=(0,r._)([(0,s.$)("esri.linkChart.LayoutSettings")],p);const y=p},57935:(t,e,i)=>{i.r(e),i.d(e,{default:()=>h});var r=i(93800),a=i(85715),n=i(19455),o=i(48602),s=(i(21265),i(50925),i(14746),i(75269));let l=class extends(a.A.ClonableMixin(n.A)){constructor(t){super(t),this.mode="visible"}};(0,r._)([(0,o.MZ)({type:["hidden","visible"],json:{write:!0}})],l.prototype,"mode",void 0),l=(0,r._)([(0,s.$)("esri.linkChart.NonspatialDataDisplay")],l);const h=l}}]);