"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[4052],{3133:(e,t,s)=>{s.d(t,{F:()=>r,P:()=>o});const r={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!0,supportsCurrentUser:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!0,supportsReturnMesh:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByAnonymous:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0,supportsTrueCurve:!1},o={supportsDate:!0,supportsFixedInterval:!0,supportsAutoInterval:!0,supportsFixedBoundaries:!0,supportsStackBy:!0,supportsSplitBy:!0,supportsSnapToData:!1,supportsReturnFullIntervalBin:!1,supportsFirstDayOfWeek:!1,supportsNormalization:!0,supportedStatistics:{count:!0,sum:!0,avg:!0,var:!0,stddev:!0,min:!0,max:!0,percentileContinuous:!0,percentileDiscrete:!0,envelope:!0,centroid:!0,convexHull:!0},supportedNormalizationTypes:{field:!0,log:!0,naturalLog:!0,percentOfTotal:!0,squareRoot:!0}}},39817:(e,t,s)=>{s.d(t,{A:()=>o});var r=s(42080);class o{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this.lengths=e??[],this.coords=t??[]}static fromJSON(e){return new o(e.lengths,e.coords)}static fromRect(e){const[t,s,r,i]=e,n=r-t,p=i-s;return new o([5],[t,s,n,0,0,p,-n,0,0,-p])}get isPoint(){return 0===this.lengths.length&&this.coords.length>=2}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((e,t)=>e+t))}get usedMemory(){return 64+(0,r.Qf)(this.lengths,this.coords)}area(){let e=0,t=0;if(!this.lengths.length)return 0;for(let s=0;s<this.lengths.length;s++){const r=this.lengths[s];if(r<3)continue;let o=this.coords[2*t],i=this.coords[2*t+1];for(let s=1;s<r;s+=1){const r=this.coords[2*(s+t)],n=this.coords[2*(s+t)+1];e+=-.5*(r-o)*(n+i),o=r,i=n}t+=r}return e}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let s=0;s<this.lengths.length;s++){const r=this.lengths[s];for(let s=0;s<r;s++)e(this.coords[2*(s+t)],this.coords[2*(s+t)+1]);t+=r}}deltaDecode(){const e=this.clone(),{coords:t,lengths:s}=e;let r=0;for(const o of s){for(let e=1;e<o;e++)t[2*(r+e)]+=t[2*(r+e)-2],t[2*(r+e)+1]+=t[2*(r+e)-1];r+=o}return e}clone(e){if(0===this.lengths.length)return new o([],[this.coords[0],this.coords[1]]);const t=2*(0===this.lengths.length?1:this.lengths.reduce(((e,t)=>e+t))),s=this.coords.slice(0,t);return e?(e.set(s),new o(this.lengths,e)):new o(Array.from(this.lengths),Array.from(s))}}},40602:(e,t,s)=>{function r(e,t){return e?t?4:3:t?3:2}function o(e,t,s,o){if(!t?.lengths.length)return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const p=e.coords,u=[],a=s?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:l,coords:d}=t,c=r(s,o);let h=0;for(const r of l){const e=i(a,d,h,r,s,o);e&&u.push(e),h+=r*c}if(u.sort(((e,t)=>{let r=e[2]-t[2];return 0===r&&s&&(r=e[4]-t[4]),r})),u.length){let e=6*u[0][2];p[0]=u[0][0]/e,p[1]=u[0][1]/e,s&&(e=6*u[0][4],p[2]=0!==e?u[0][3]/e:0),(p[0]<a[0]||p[0]>a[1]||p[1]<a[2]||p[1]>a[3]||s&&(p[2]<a[4]||p[2]>a[5]))&&(p.length=0)}if(!p.length){const e=t.lengths[0]?n(d,0,l[0],s,o):null;if(!e)return null;p[0]=e[0],p[1]=e[1],s&&e.length>2&&(p[2]=e[2])}return e}function i(e,t,s,o,i,n){const p=r(i,n);let u=s,a=s+p,l=0,d=0,c=0,h=0,y=0;for(let r=0,f=o-1;r<f;r++,u+=p,a+=p){const s=t[u],r=t[u+1],o=t[u+2],n=t[a],p=t[a+1],g=t[a+2];let f=s*p-n*r;h+=f,l+=(s+n)*f,d+=(r+p)*f,i&&(f=s*g-n*o,c+=(o+g)*f,y+=f),s<e[0]&&(e[0]=s),s>e[1]&&(e[1]=s),r<e[2]&&(e[2]=r),r>e[3]&&(e[3]=r),i&&(o<e[4]&&(e[4]=o),o>e[5]&&(e[5]=o))}if(h>0&&(h*=-1),y>0&&(y*=-1),!h)return null;const g=[l,d,.5*h];return i&&(g[3]=c,g[4]=.5*y),g}function n(e,t,s,o,i){const n=r(o,i);let d=t,c=t+n,h=0,y=0,g=0,f=0;for(let r=0,m=s-1;r<m;r++,d+=n,c+=n){const t=e[d],s=e[d+1],r=e[d+2],i=e[c],n=e[c+1],m=e[c+2],v=o?u(t,s,r,i,n,m):p(t,s,i,n);if(v)if(h+=v,o){const e=l(t,s,r,i,n,m);y+=v*e[0],g+=v*e[1],f+=v*e[2]}else{const e=a(t,s,i,n);y+=v*e[0],g+=v*e[1]}}return h>0?o?[y/h,g/h,f/h]:[y/h,g/h]:s>0?o?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function p(e,t,s,r){const o=s-e,i=r-t;return Math.sqrt(o*o+i*i)}function u(e,t,s,r,o,i){const n=r-e,p=o-t,u=i-s;return Math.sqrt(n*n+p*p+u*u)}function a(e,t,s,r){return[e+.5*(s-e),t+.5*(r-t)]}function l(e,t,s,r,o,i){return[e+.5*(r-e),t+.5*(o-t),s+.5*(i-s)]}s.d(t,{Q:()=>o})},52579:(e,t,s)=>{s.d(t,{A:()=>r});class r{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new r;return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}},67011:(e,t,s)=>{s.d(t,{N3:()=>p,Om:()=>n});var r=s(42080),o=s(40602),i=s(39817);class n{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;this.geometry=e,this.attributes=t,this.centroid=s,this.objectId=r,this.displayId=o}static fromJSON(e){const t=e.geometry?i.A.fromJSON(e.geometry):null,s=e.centroid?i.A.fromJSON(e.centroid):null,r=e.objectId;return new n(t,e.attributes,s,r)}weakClone(){const e=new n(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e}clone(){const e=this.geometry?.clone(),t=new n(e,{...this.attributes},this.centroid?.clone(),this.objectId);return t.displayId=this.displayId,t}ensureCentroid(e){return this.centroid??=(0,o.Q)(new i.A,this.geometry,e.hasZ,e.hasM),this.centroid}get usedMemory(){return 128+(0,r.lM)(this.attributes)+(this.geometry?.usedMemory??0)}}function p(e){return!!e.geometry?.coords?.length}},74048:(e,t,s)=>{s.d(t,{$:()=>r,P:()=>o});const r={supportsDate:!1,supportsFixedInterval:!1,supportsAutoInterval:!1,supportsFixedBoundaries:!1,supportsStackBy:!1,supportsSplitBy:!1,supportsSnapToData:!1,supportsReturnFullIntervalBin:!1,supportsFirstDayOfWeek:!1,supportsNormalization:!1,supportedStatistics:void 0,supportedNormalizationTypes:void 0},o={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsOrderByFields:!1,supportsResize:!1},data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsAsyncApplyEdits:!1,zDefault:void 0},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryBins:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryAttributeBins:r,query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsCurrentUser:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsReturnMesh:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsTrueCurve:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}},94430:(e,t,s)=>{s.r(t),s.d(t,{default:()=>H});var r=s(93800),o=s(35377),i=s(59321),n=s(48602),p=(s(21265),s(50925),s(14746),s(75269)),u=s(12560),a=s(93321),l=s(54723),d=s(57457),c=s(74719),h=s(81933),y=s(56612),g=s(32204),f=s(74048),m=s(87520);let v=class extends h.A{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:s,supportedCrs:r},layer:{apiKey:o,customParameters:i,effectiveMaxRecordCount:n}}=this;return{type:"ogc-source",collection:e,layerDefinition:t,maxRecordCount:n,queryParameters:{apiKey:o,customParameters:i},spatialReference:s,supportedCrs:r}}queryExtent(e){return null}queryFeatureCount(e){return null}queryFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.queryFeaturesJSON(e,t).then((e=>m.default.fromJSON(e)))}queryFeaturesJSON(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const s=this.getSource();return this.load(t).then((()=>(0,g.bW)(s,e,t)))}queryObjectIds(e){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){const s=new RegExp(`^${(0,y.Cj)(t)}$`,"i");return e.conformsTo.some((e=>s.test(e)))??!1}_getCapabilities(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryBins:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},query:{maxRecordCount:t,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsCurrentUser:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsReturnMesh:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,supportsTrueCurve:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryAttributeBins:f.$,editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}_getMaxRecordCount(e){const t=e?.components?.parameters;return t?.limit?.schema?.maximum??t?.limitFeatures?.schema?.maximum}_getStorageSpatialReference(e){const t=e.storageCrs??g.QE,s=(0,g.J0)(t);return null==s?a.default.WGS84:new a.default({wkid:s})}_getSupportedSpatialReferences(e,t){const s="#/crs",r=e.crs??[g.QE],o=r.includes(s)?r.filter((e=>e!==s)).concat(t.crs??[]):r,i=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return o.filter((e=>!i.test(e)))}async _loadOGCServices(e,t){const s=null!=t?t.signal:null,{apiKey:r,collectionId:o,customParameters:i,fields:n,geometryType:p,hasZ:u,objectIdField:a,timeInfo:d,url:h}=e,f={fields:n?.map((e=>e.toJSON())),geometryType:l.Ye.toJSON(p),hasZ:u??!1,objectIdField:a,timeInfo:d?.toJSON()},m={apiKey:r,customParameters:i,signal:s},v=await(0,g.Ki)(h,m),[I,S]=await Promise.all([(0,g.Px)(v,m),(0,g.bV)(v,m)]);if(!this._conformsToType(I,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new c.default("ogc-feature-layer:no-geojson-support","Server does not support geojson");const F=S.collections.find((e=>{let{id:t}=e;return t===o}));if(!F)throw new c.default("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const C=this._conformsToType(I,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await(0,g.GA)(v,m):null,T=await(0,g.GL)(F,f,m),M=this._getMaxRecordCount(C),R=this._getCapabilities(T.hasZ,M),x=this._getStorageSpatialReference(F).toJSON(),b=this._getSupportedSpatialReferences(F,S),_=new RegExp(`^${(0,y.Cj)(g.vJ)}`,"i"),N={};for(const l of b){const e=(0,g.J0)(l);null!=e&&(N[e]||(N[e]=l.replace(_,"")))}this.featureDefinition={capabilities:R,collection:F,layerDefinition:T,spatialReference:x,supportedCrs:N}}};(0,r._)([(0,n.MZ)()],v.prototype,"featureDefinition",void 0),(0,r._)([(0,n.MZ)({constructOnly:!0})],v.prototype,"layer",void 0),(0,r._)([(0,n.MZ)()],v.prototype,"type",void 0),v=(0,r._)([(0,p.$)("esri.layers.graphics.sources.OGCFeatureSource")],v);var I=s(33979),S=s(24203),F=s(53367),C=s(48853),T=s(30851),M=s(59155),R=s(8592),x=s(78941),b=s(30528),_=s(52954),N=s(75215),w=s(39936),O=s(38667),D=s(75238),A=s(66042),E=s(50616),Z=s(14365),P=s(95011),B=s(56808),Q=s(51496),j=s(86899),q=s(53512),G=s(1802);const z=(0,Z.p)();let V=class extends((0,C.FJ)((0,I.p)((0,F.d)((0,M.J)((0,T.F)((0,S.dM)((0,x.fY)((0,w.e)((0,O.d)((0,N.j)((0,R.q)((0,b.A)((0,_.J)((0,i.P)(d.default))))))))))))))){constructor(e){super(e),this.capabilities=null,this.collectionId=null,this.copyright=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new v({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){this.source?.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then((()=>this._fetchService(e)))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){return this.maxRecordCount??this.capabilities?.query.maxRecordCount??5e3}get isTable(){return this.loaded&&null==this.geometryType}set renderer(e){(0,P.fixRendererFields)(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return(0,G.createPopupTemplate)(this,e)}createQuery(){return new q.default}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){let s,r=!1;const o=t?.feature?.attributes,i=this.typeIdField&&o?.[this.typeIdField];return null!=i&&this.types&&(r=this.types.some((t=>t.id==i&&(s=t.domains?.[e],"inherited"===s?.type&&(s=this._getLayerDomain(e)),!0)))),r||s||(s=this._getLayerDomain(e)),s}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(q.default.from(e)||this.createQuery(),t))).then((e=>(e?.features?.forEach((e=>{e.layer=e.sourceLayer=this})),e)))}serviceSupportsSpatialReference(e){return this.source?.serviceSupportsSpatialReference(e)??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),(0,P.fixRendererFields)(this.renderer,this.fieldsIndex),(0,P.fixTimeInfoFields)(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};(0,r._)([(0,n.MZ)({readOnly:!0,json:{origins:{service:{read:!0}}}})],V.prototype,"capabilities",void 0),(0,r._)([(0,n.MZ)({type:String,json:{write:!0}})],V.prototype,"collectionId",void 0),(0,r._)([(0,n.MZ)({type:String})],V.prototype,"copyright",void 0),(0,r._)([(0,n.MZ)({readOnly:!0})],V.prototype,"defaultPopupTemplate",null),(0,r._)([(0,n.MZ)({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],V.prototype,"description",void 0),(0,r._)([(0,n.MZ)({type:String})],V.prototype,"displayField",void 0),(0,r._)([(0,n.MZ)({type:Number})],V.prototype,"effectiveMaxRecordCount",null),(0,r._)([(0,n.MZ)(D.Yj)],V.prototype,"elevationInfo",void 0),(0,r._)([(0,n.MZ)({type:[E.default],json:{origins:{service:{name:"layerDefinition.fields"}}}})],V.prototype,"fields",void 0),(0,r._)([(0,n.MZ)(z.fieldsIndex)],V.prototype,"fieldsIndex",void 0),(0,r._)([(0,n.MZ)({readOnly:!0,type:u.default,json:{origins:{service:{name:"layerDefinition.extent"}}}})],V.prototype,"fullExtent",void 0),(0,r._)([(0,n.MZ)({type:l.gy.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:l.gy.read}}}}})],V.prototype,"geometryType",void 0),(0,r._)([(0,n.MZ)({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],V.prototype,"hasZ",void 0),(0,r._)([(0,n.MZ)({type:Boolean,readOnly:!0})],V.prototype,"isTable",null),(0,r._)([(0,n.MZ)({type:[B.default],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Q.w},write:!0}}}})],V.prototype,"labelingInfo",void 0),(0,r._)([(0,n.MZ)(D.kF)],V.prototype,"labelsVisible",void 0),(0,r._)([(0,n.MZ)(D.fV)],V.prototype,"legendEnabled",void 0),(0,r._)([(0,n.MZ)({type:Number})],V.prototype,"maxRecordCount",void 0),(0,r._)([(0,n.MZ)({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],V.prototype,"objectIdField",void 0),(0,r._)([(0,n.MZ)({type:["OGCFeatureLayer"]})],V.prototype,"operationalLayerType",void 0),(0,r._)([(0,n.MZ)(D.M6)],V.prototype,"popupEnabled",void 0),(0,r._)([(0,n.MZ)({type:o.default,json:{name:"popupInfo",write:!0}})],V.prototype,"popupTemplate",void 0),(0,r._)([(0,n.MZ)({types:j.Hg,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:j.XJ,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],V.prototype,"renderer",null),(0,r._)([(0,n.MZ)(D.PY)],V.prototype,"screenSizePerspectiveEnabled",void 0),(0,r._)([(0,n.MZ)({readOnly:!0})],V.prototype,"source",void 0),(0,r._)([(0,n.MZ)({readOnly:!0,type:a.default,json:{origins:{service:{read:!0}}}})],V.prototype,"spatialReference",void 0),(0,r._)([(0,n.MZ)({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],V.prototype,"title",void 0),(0,r._)([(0,n.MZ)({readOnly:!0,json:{read:!1}})],V.prototype,"type",void 0),(0,r._)([(0,n.MZ)({type:String,readOnly:!0})],V.prototype,"typeIdField",void 0),(0,r._)([(0,n.MZ)({type:[A.default]})],V.prototype,"types",void 0),(0,r._)([(0,n.MZ)(D.OZ)],V.prototype,"url",void 0),V=(0,r._)([(0,p.$)("esri.layers.OGCFeatureLayer")],V);const H=V}}]);