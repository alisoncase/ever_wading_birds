"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[512,52147,67011,97267],{512:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var s=r(93800),i=r(97267),o=r(85715),n=r(48602),a=(r(21265),r(50925),r(14746),r(14800)),l=r(75269),u=r(87520);let p=class extends(o.A.ClonableMixin(u.default)){constructor(){super(...arguments),this.features=[]}readFeatures(e,t){return this.readFeaturesWithClass(e,t,i.default)}};(0,s._)([(0,n.MZ)({type:[i.default],json:{write:!0}})],p.prototype,"features",void 0),(0,s._)([(0,a.w)("features")],p.prototype,"readFeatures",null),p=(0,s._)([(0,l.$)("esri.rest.support.AttributeBinsFeatureSet")],p);const d=p},3133:(e,t,r)=>{r.d(t,{F:()=>s,P:()=>i});const s={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!0,supportsCurrentUser:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!0,supportsReturnMesh:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByAnonymous:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0,supportsTrueCurve:!1},i={supportsDate:!0,supportsFixedInterval:!0,supportsAutoInterval:!0,supportsFixedBoundaries:!0,supportsStackBy:!0,supportsSplitBy:!0,supportsSnapToData:!1,supportsReturnFullIntervalBin:!1,supportsFirstDayOfWeek:!1,supportsNormalization:!0,supportedStatistics:{count:!0,sum:!0,avg:!0,var:!0,stddev:!0,min:!0,max:!0,percentileContinuous:!0,percentileDiscrete:!0,envelope:!0,centroid:!0,convexHull:!0},supportedNormalizationTypes:{field:!0,log:!0,naturalLog:!0,percentOfTotal:!0,squareRoot:!0}}},23185:(e,t,r)=>{r.r(t),r.d(t,{default:()=>K});var s=r(93800),i=r(35377),o=r(59321),n=r(93670),a=r(43103),l=r(48602),u=r(80556),p=r(21265),d=(r(14746),r(75269)),c=r(15484),h=r(12560),y=r(93321),f=r(54723),m=r(57457),g=r(74719),w=r(81933),v=r(50925),F=r(49959),I=r(34037),b=r(97495),_=r(7641),S=r(512),O=r(87520),x=r(73210);let M=class extends w.A{constructor(){super(...arguments),this._connection=null,this._workerHandler=null,this.capabilities=(0,b.f)(!1,!1),this.type="wfs",this.refresh=(0,F.debounce)((async()=>{await this.load();const e={customParameters:this.layer.customParameters,maxRecordCount:this.layer.maxRecordCount,maxTotalRecordCount:this.layer.maxTotalRecordCount,maxPageCount:this.layer.maxPageCount},{extent:t}=await this._workerHandler.refresh(e);return t&&(this.sourceJSON.extent=t),{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}}))}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._startWorker({signal:t})),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null,this._workerHandler=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=await this.queryFeaturesJSON(e,t);return O.default.fromJSON(r)}async queryFeaturesJSON(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(t),this._workerHandler.queryFeatures(e?e.toJSON():void 0,t)}async queryFeatureCount(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(t),this._workerHandler.queryFeatureCount(e?e.toJSON():void 0,t)}async queryObjectIds(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(t),this._workerHandler.queryObjectIds(e?e.toJSON():void 0,t)}async queryExtent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};await this.load(t);const r=await this._workerHandler.queryExtent(e?e.toJSON():void 0,t);return{count:r.count,extent:h.default.fromJSON(r.extent)}}async querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(t),this._workerHandler.querySnapping(e,t)}async queryAttributeBins(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};await this.load(t);const r=await this._workerHandler.queryAttributeBins(e?.toJSON(),t);return S.default.fromJSON(r)}async _createLoadOptions(e){const{url:t,customParameters:r,name:s,namespaceUri:i,fields:o,geometryType:n,maxRecordCount:a,maxPageCount:l,maxTotalRecordCount:u,swapXY:p}=this.layer,d="defaults"===this.layer.originOf("spatialReference")?void 0:this.layer.spatialReference;if(!t)throw new g.default("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await(0,_.getCapabilities)(t,{customParameters:r,...e}));const c=["fields","geometryType","name","namespaceUri","swapXY"].some((e=>null==this.layer[e])),h=c?await(0,_.getWFSLayerInfo)(this.wfsCapabilities,s,i,{spatialReference:d,customParameters:r,signal:e?.signal}):{...(0,_.prepareWFSLayerFields)(o??[]),geometryType:n,name:s,namespaceUri:i,spatialReference:d,swapXY:p},y=(0,_.findFeatureType)(this.wfsCapabilities.readFeatureTypes(),h.name,h.namespaceUri),m=f.gy.toJSON(h.geometryType),{operations:w}=this.wfsCapabilities,v=w.GetFeature.url,F=w.GetFeature.outputFormat;return{customParameters:r,featureType:y,fields:h.fields?.map((e=>e.toJSON()))??[],geometryField:h.geometryField,geometryType:m,getFeatureUrl:v,getFeatureOutputFormat:F,maxRecordCount:a,maxPageCount:l,maxTotalRecordCount:u,objectIdField:h.objectIdField,spatialReference:h.spatialReference?.toJSON(),swapXY:!!h.swapXY}}async _startWorker(e){const[t,r]=await(0,F.eachAlways)([this._createLoadOptions(e),(0,I.ho)("WFSSourceWorker",{...e,strategy:(0,p.A)("feature-layers-workers")?"dedicated":"local",registryTarget:this})]),s=t.error||r.error||null,i=r.value||null;if(s)throw i&&i.close(),s;const o=t.value;this._connection=r.value,this._workerHandler=this._connection.createInvokeProxy();const n=await this._workerHandler.load(o,e);for(const a of n.warnings)v.A.getLogger(this.layer).warn("#load()",`${a.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:a});this.sourceJSON={dateFieldsTimeReference:{timeZoneIANA:x.n$},extent:n.extent,fields:o.fields,geometryType:o.geometryType,objectIdField:o.objectIdField,geometryField:o.geometryField,drawingInfo:(0,b.F0)(o.geometryType),name:o.featureType.title,wfsInfo:{name:o.featureType.name,featureUrl:o.getFeatureUrl,maxFeatures:o.maxRecordCount,swapXY:o.swapXY,supportedSpatialReferences:o.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:o.featureType.namespaceUri}}}};(0,s._)([(0,l.MZ)()],M.prototype,"capabilities",void 0),(0,s._)([(0,l.MZ)({constructOnly:!0})],M.prototype,"layer",void 0),(0,s._)([(0,l.MZ)()],M.prototype,"sourceJSON",void 0),(0,s._)([(0,l.MZ)()],M.prototype,"type",void 0),(0,s._)([(0,l.MZ)()],M.prototype,"wfsCapabilities",void 0),M=(0,s._)([(0,d.$)("esri.layers.graphics.sources.WFSSource")],M);var T,N=r(24203),C=r(53367),R=r(48853),P=r(30851),Z=r(59155),A=r(8592),j=r(78941),q=r(30528),E=r(52954),k=r(75215),J=r(39936),U=r(38667),D=r(75238),Q=r(50616),Y=r(14365),B=r(95011),V=r(56808),H=r(51496),W=r(86899),$=r(53512),G=r(1802),z=r(40731);const L=(0,Y.p)();let X=T=class extends((0,j.fY)((0,R.FJ)((0,C.d)((0,Z.J)((0,P.F)((0,N.dM)((0,J.e)((0,U.d)((0,E.J)((0,k.j)((0,A.q)((0,q.A)((0,o.P)(m.default)))))))))))))){static fromWFSLayerInfo(e){const{customParameters:t,fields:r,geometryField:s,geometryType:i,name:o,namespaceUri:n,objectIdField:a,spatialReference:l,swapXY:u,url:p,wfsCapabilities:d}=e;return new T({customParameters:t,fields:r,geometryField:s,geometryType:i,name:o,namespaceUri:n,objectIdField:a,spatialReference:l,swapXY:u,url:p,wfsCapabilities:d})}constructor(e){super(e),this.copyright=null,this.customParameters=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxRecordCount=3e3,this.maxPageCount=10,this.maxTotalRecordCount=2e5,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new M({layer:this}),this.spatialReference=y.default.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}destroy(){this.source?.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then((()=>this.source.load(e))).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),(0,B.fixRendererFields)(this.renderer,this.fieldsIndex),(0,B.fixTimeInfoFields)(this.timeInfo,this.fieldsIndex)}))),Promise.resolve(this)}get capabilities(){return this.source?.capabilities}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,t,r){const s=e.filter((e=>e.name!==_.wfsOidFieldName));this.geometryField&&s.unshift(new Q.default({name:this.geometryField,alias:this.geometryField,type:"geometry"})),(0,n.sM)(r,s.map((e=>e.toJSON())),t)}get parsedUrl(){return(0,a.urlToObject)(this.url)}set renderer(e){(0,B.fixRendererFields)(e,this.fieldsIndex),this._set("renderer",e)}get wfsCapabilities(){return this.source?.wfsCapabilities}set wfsCapabilities(e){this.source&&(this.source.wfsCapabilities=e)}createPopupTemplate(e){return(0,G.createPopupTemplate)(this,e)}createQuery(){const e=new $.default({returnGeometry:!0,outFields:["*"],where:this.definitionExpression||"1=1"}),{timeOffset:t,timeExtent:r}=this;return e.timeExtent=null!=t&&null!=r?r.offset(-t.value,t.unit):r||null,e}getFieldDomain(e,t){return this.getField(e)?.domain}getField(e){return this.fieldsIndex?.get(e)}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures($.default.from(e)||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds($.default.from(e)||this.createQuery(),t)))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount($.default.from(e)||this.createQuery(),t)))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent($.default.from(e)||this.createQuery(),t)))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh();return null!=t&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};(0,s._)([(0,l.MZ)({readOnly:!0})],X.prototype,"capabilities",null),(0,s._)([(0,l.MZ)({type:String})],X.prototype,"copyright",void 0),(0,s._)([(0,l.MZ)({readOnly:!0})],X.prototype,"createQueryVersion",null),(0,s._)([(0,l.MZ)({json:{name:"wfsInfo.customParameters",write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0),ignoreOrigin:!0})}}})],X.prototype,"customParameters",void 0),(0,s._)([(0,l.MZ)((0,z.P6)("dateFieldsTimeReference"))],X.prototype,"dateFieldsTimeZone",void 0),(0,s._)([(0,l.MZ)({readOnly:!0})],X.prototype,"defaultPopupTemplate",null),(0,s._)([(0,l.MZ)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],X.prototype,"definitionExpression",void 0),(0,s._)([(0,l.MZ)({type:String})],X.prototype,"displayField",void 0),(0,s._)([(0,l.MZ)(D.Yj)],X.prototype,"elevationInfo",void 0),(0,s._)([(0,l.MZ)({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],X.prototype,"featureUrl",void 0),(0,s._)([(0,l.MZ)({type:[Q.default],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],X.prototype,"fields",void 0),(0,s._)([(0,c.K)("fields")],X.prototype,"writeFields",null),(0,s._)([(0,l.MZ)(L.fieldsIndex)],X.prototype,"fieldsIndex",void 0),(0,s._)([(0,l.MZ)({type:h.default,json:{name:"extent"}})],X.prototype,"fullExtent",void 0),(0,s._)([(0,l.MZ)()],X.prototype,"geometryField",void 0),(0,s._)([(0,l.MZ)({type:String,json:{read:{source:"layerDefinition.geometryType",reader:f.gy.read},write:{target:"layerDefinition.geometryType",writer:f.gy.write,ignoreOrigin:!0},origins:{service:{read:f.gy.read}}}})],X.prototype,"geometryType",void 0),(0,s._)([(0,l.MZ)({type:String})],X.prototype,"id",void 0),(0,s._)([(0,l.MZ)(D.kF)],X.prototype,"labelsVisible",void 0),(0,s._)([(0,l.MZ)({type:[V.default],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:H.w},write:!0}})],X.prototype,"labelingInfo",void 0),(0,s._)([(0,l.MZ)(D.fV)],X.prototype,"legendEnabled",void 0),(0,s._)([(0,l.MZ)({type:["show","hide"]})],X.prototype,"listMode",void 0),(0,s._)([(0,l.MZ)({type:String})],X.prototype,"objectIdField",void 0),(0,s._)([(0,l.MZ)({type:["WFS"]})],X.prototype,"operationalLayerType",void 0),(0,s._)([(0,l.MZ)({type:u.jz,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],X.prototype,"maxRecordCount",void 0),(0,s._)([(0,l.MZ)({type:u.jz})],X.prototype,"maxPageCount",void 0),(0,s._)([(0,l.MZ)({type:u.jz})],X.prototype,"maxTotalRecordCount",void 0),(0,s._)([(0,l.MZ)({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],X.prototype,"mode",void 0),(0,s._)([(0,l.MZ)({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],X.prototype,"name",void 0),(0,s._)([(0,l.MZ)({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],X.prototype,"namespaceUri",void 0),(0,s._)([(0,l.MZ)(D.Ih)],X.prototype,"opacity",void 0),(0,s._)([(0,l.MZ)(L.outFields)],X.prototype,"outFields",void 0),(0,s._)([(0,l.MZ)({readOnly:!0})],X.prototype,"parsedUrl",null),(0,s._)([(0,l.MZ)(D.M6)],X.prototype,"popupEnabled",void 0),(0,s._)([(0,l.MZ)({type:i.default,json:{name:"popupInfo",write:!0}})],X.prototype,"popupTemplate",void 0),(0,s._)([(0,l.MZ)({types:W.Hg,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:W.XJ,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],X.prototype,"renderer",null),(0,s._)([(0,l.MZ)(D.PY)],X.prototype,"screenSizePerspectiveEnabled",void 0),(0,s._)([(0,l.MZ)({readOnly:!0})],X.prototype,"source",void 0),(0,s._)([(0,l.MZ)({type:y.default,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],X.prototype,"spatialReference",void 0),(0,s._)([(0,l.MZ)({readOnly:!0,type:[u.jz],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],X.prototype,"spatialReferences",void 0),(0,s._)([(0,l.MZ)({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],X.prototype,"swapXY",void 0),(0,s._)([(0,l.MZ)({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],X.prototype,"title",void 0),(0,s._)([(0,l.MZ)({json:{read:!1},readOnly:!0})],X.prototype,"type",void 0),(0,s._)([(0,l.MZ)(D.OZ)],X.prototype,"url",void 0),(0,s._)([(0,l.MZ)({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],X.prototype,"version",void 0),(0,s._)([(0,l.MZ)()],X.prototype,"wfsCapabilities",null),X=T=(0,s._)([(0,d.$)("esri.layers.WFSLayer")],X);const K=X},39817:(e,t,r)=>{r.d(t,{A:()=>i});var s=r(42080);class i{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this.lengths=e??[],this.coords=t??[]}static fromJSON(e){return new i(e.lengths,e.coords)}static fromRect(e){const[t,r,s,o]=e,n=s-t,a=o-r;return new i([5],[t,r,n,0,0,a,-n,0,0,-a])}get isPoint(){return 0===this.lengths.length&&this.coords.length>=2}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((e,t)=>e+t))}get usedMemory(){return 64+(0,s.Qf)(this.lengths,this.coords)}area(){let e=0,t=0;if(!this.lengths.length)return 0;for(let r=0;r<this.lengths.length;r++){const s=this.lengths[r];if(s<3)continue;let i=this.coords[2*t],o=this.coords[2*t+1];for(let r=1;r<s;r+=1){const s=this.coords[2*(r+t)],n=this.coords[2*(r+t)+1];e+=-.5*(s-i)*(n+o),i=s,o=n}t+=s}return e}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let r=0;r<this.lengths.length;r++){const s=this.lengths[r];for(let r=0;r<s;r++)e(this.coords[2*(r+t)],this.coords[2*(r+t)+1]);t+=s}}deltaDecode(){const e=this.clone(),{coords:t,lengths:r}=e;let s=0;for(const i of r){for(let e=1;e<i;e++)t[2*(s+e)]+=t[2*(s+e)-2],t[2*(s+e)+1]+=t[2*(s+e)-1];s+=i}return e}clone(e){if(0===this.lengths.length)return new i([],[this.coords[0],this.coords[1]]);const t=2*(0===this.lengths.length?1:this.lengths.reduce(((e,t)=>e+t))),r=this.coords.slice(0,t);return e?(e.set(r),new i(this.lengths,e)):new i(Array.from(this.lengths),Array.from(r))}}},40602:(e,t,r)=>{function s(e,t){return e?t?4:3:t?3:2}function i(e,t,r,i){if(!t?.lengths.length)return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const a=e.coords,l=[],u=r?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:p,coords:d}=t,c=s(r,i);let h=0;for(const s of p){const e=o(u,d,h,s,r,i);e&&l.push(e),h+=s*c}if(l.sort(((e,t)=>{let s=e[2]-t[2];return 0===s&&r&&(s=e[4]-t[4]),s})),l.length){let e=6*l[0][2];a[0]=l[0][0]/e,a[1]=l[0][1]/e,r&&(e=6*l[0][4],a[2]=0!==e?l[0][3]/e:0),(a[0]<u[0]||a[0]>u[1]||a[1]<u[2]||a[1]>u[3]||r&&(a[2]<u[4]||a[2]>u[5]))&&(a.length=0)}if(!a.length){const e=t.lengths[0]?n(d,0,p[0],r,i):null;if(!e)return null;a[0]=e[0],a[1]=e[1],r&&e.length>2&&(a[2]=e[2])}return e}function o(e,t,r,i,o,n){const a=s(o,n);let l=r,u=r+a,p=0,d=0,c=0,h=0,y=0;for(let s=0,m=i-1;s<m;s++,l+=a,u+=a){const r=t[l],s=t[l+1],i=t[l+2],n=t[u],a=t[u+1],f=t[u+2];let m=r*a-n*s;h+=m,p+=(r+n)*m,d+=(s+a)*m,o&&(m=r*f-n*i,c+=(i+f)*m,y+=m),r<e[0]&&(e[0]=r),r>e[1]&&(e[1]=r),s<e[2]&&(e[2]=s),s>e[3]&&(e[3]=s),o&&(i<e[4]&&(e[4]=i),i>e[5]&&(e[5]=i))}if(h>0&&(h*=-1),y>0&&(y*=-1),!h)return null;const f=[p,d,.5*h];return o&&(f[3]=c,f[4]=.5*y),f}function n(e,t,r,i,o){const n=s(i,o);let d=t,c=t+n,h=0,y=0,f=0,m=0;for(let s=0,g=r-1;s<g;s++,d+=n,c+=n){const t=e[d],r=e[d+1],s=e[d+2],o=e[c],n=e[c+1],g=e[c+2],w=i?l(t,r,s,o,n,g):a(t,r,o,n);if(w)if(h+=w,i){const e=p(t,r,s,o,n,g);y+=w*e[0],f+=w*e[1],m+=w*e[2]}else{const e=u(t,r,o,n);y+=w*e[0],f+=w*e[1]}}return h>0?i?[y/h,f/h,m/h]:[y/h,f/h]:r>0?i?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function a(e,t,r,s){const i=r-e,o=s-t;return Math.sqrt(i*i+o*o)}function l(e,t,r,s,i,o){const n=s-e,a=i-t,l=o-r;return Math.sqrt(n*n+a*a+l*l)}function u(e,t,r,s){return[e+.5*(r-e),t+.5*(s-t)]}function p(e,t,r,s,i,o){return[e+.5*(s-e),t+.5*(i-t),r+.5*(o-r)]}r.d(t,{Q:()=>i})},42080:(e,t,r)=>{r.d(t,{$B:()=>i,Qf:()=>u,Qh:()=>a,RS:()=>o,ez:()=>c,i5:()=>h,lM:()=>n,qK:()=>d,rq:()=>p});var s=r(25048);function i(e){return 32+e.length}const o=16;function n(e){if(!e)return 0;let t=d;for(const r in e)e.hasOwnProperty(r)&&(t+=l(e[r],!1));return t}function a(e){if(!e)return 0;if("number"==typeof e[0])return u(e);if(Array.isArray(e))return function(e){const t=e.length;if(0===t||"number"==typeof e[0])return p(e,8);let r=c;for(let s=0;s<t;s++)r+=l(e[s]);return r}(e);let t=d;for(const r in e)e.hasOwnProperty(r)&&(t+=l(e[r]));return t}function l(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];switch(typeof e){case"object":return t?a(e):d;case"string":return i(e);case"number":return o;case"boolean":return 4;default:return 8}}function u(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce(((e,t)=>e+(t?(0,s.iu)(t)?t.byteLength+h:Array.isArray(t)?p(t,o):0:0)),0)}function p(e,t){return c+e.length*t}const d=32,c=16,h=145},67011:(e,t,r)=>{r.d(t,{N3:()=>a,Om:()=>n});var s=r(42080),i=r(40602),o=r(39817);class n{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;this.geometry=e,this.attributes=t,this.centroid=r,this.objectId=s,this.displayId=i}static fromJSON(e){const t=e.geometry?o.A.fromJSON(e.geometry):null,r=e.centroid?o.A.fromJSON(e.centroid):null,s=e.objectId;return new n(t,e.attributes,r,s)}weakClone(){const e=new n(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e}clone(){const e=this.geometry?.clone(),t=new n(e,{...this.attributes},this.centroid?.clone(),this.objectId);return t.displayId=this.displayId,t}ensureCentroid(e){return this.centroid??=(0,i.Q)(new o.A,this.geometry,e.hasZ,e.hasM),this.centroid}get usedMemory(){return 128+(0,s.lM)(this.attributes)+(this.geometry?.usedMemory??0)}}function a(e){return!!e.geometry?.coords?.length}},97267:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var s,i=r(93800),o=r(79625),n=r(85715),a=r(82301),l=r(48602),u=(r(21265),r(50925),r(75269));let p=s=class extends(n.A.ClonableMixin(o.default)){constructor(e){super(e),this.stackedAttributes=null}cloneShallow(){return new s({...super.cloneShallow(),stackedAttributes:this.stackedAttributes})}toJSON(){return{...super.toJSON(),stackedAttributes:(0,a.clone)(this.stackedAttributes)}}};(0,i._)([(0,l.MZ)()],p.prototype,"stackedAttributes",void 0),p=s=(0,i._)([(0,u.$)("esri.AttributeBinsGraphic")],p);const d=p},97495:(e,t,r)=>{r.d(t,{F0:()=>a,Vx:()=>p,e2:()=>c,f:()=>h});var s=r(21265),i=r(82301),o=r(3133),n=r(46575);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?n.Cb:"esriGeometryPolyline"===e?n.yM:n.WR}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let u=1;function p(e,t){if((0,s.A)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let r=`this${d(t)} = null;`;for(const t in e)r+=`this${d(t)} = ${JSON.stringify(e[t])};`;const s=new Function(`\n      return class AttributesClass$${u++} {\n        constructor() {\n          ${r};\n        }\n      }\n    `)();return()=>new s}catch(r){return()=>({[t]:null,...e})}}function d(e){return l.test(e)?`.${e}`:`["${e}"]`}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,i.clone)(e)}}]}function h(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryBins:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:o.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryAttributeBins:o.P,editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}}}]);