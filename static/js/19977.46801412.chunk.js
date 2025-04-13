"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[19977],{19977:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});var s=n(23060),i=n(58828),r=n(74719),o=n(50925),a=n(49959),u=n(78629),l=n(70576),c=n(81765),d=n(33657),p=n(78670),y=n(1413),f=n(13791),h=n(42958),g=n(97495),m=n(30091),b=n(76747),F=n(22464),_=n(95011),w=n(73210);const I={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsQueryAttachmentOrderByFields:!1,supportsQueryBins:!0,supportsQueryWithCacheHint:!0,supportsQueryWithDistance:!0,supportsQueryWithResultType:!0,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0},queryBinsCapabilities:m.PC};class T{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){this._queryEngine?.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._loadOptions={url:e.url,customParameters:e.customParameters};const n=[],[s]=await Promise.all([e.url?this._fetch(t?.signal):null,this._checkProjection(e.spatialReference)]),i=(0,h.BM)(s,{geometryType:e.geometryType}),o=e.fields||i.fields||[],a=null!=e.hasZ?e.hasZ:i.hasZ,u=i.geometryType;let c=e.objectIdField||i.objectIdFieldName||"__OBJECTID";const d=e.spatialReference||l.KK;let y=e.timeInfo;o===i.fields&&i.unknownFields.length>0&&n.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:i.unknownFields}});const m=new b.default(o);let T=m.get(c);T?("esriFieldTypeString"!==T.type&&(T.type="esriFieldTypeOID"),T.editable=!1,T.nullable=!1,c=T.name):(T={alias:c,name:c,type:"string"===i.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o.unshift(T));const E={};for(const l of o){if(null==l.name&&(l.name=l.alias),null==l.alias&&(l.alias=l.name),!l.name)throw new r.default("geojson-layer:invalid-field-name","field name is missing",{field:l});if(!F.m.jsonValues.includes(l.type))throw new r.default("geojson-layer:invalid-field-type",`invalid type for field "${l.name}"`,{field:l});if(l.name!==T.name){const e=(0,_.getFieldDefaultValue)(l);void 0!==e&&(E[l.name]=e)}null==l.length&&(l.length=(0,_.getFieldDefaultLength)(l))}if(y){if(y.startTimeField){const e=m.get(y.startTimeField);e?(y.startTimeField=e.name,e.type="esriFieldTypeDate"):y.startTimeField=null}if(y.endTimeField){const e=m.get(y.endTimeField);e?(y.endTimeField=e.name,e.type="esriFieldTypeDate"):y.endTimeField=null}if(y.trackIdField){const e=m.get(y.trackIdField);e?y.trackIdField=e.name:(y.trackIdField=null,n.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:y}}))}y.startTimeField||y.endTimeField||(n.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:y}}),y=null)}const S=u?(0,g.F0)(u):void 0,j=m.dateFields.length?{timeZoneIANA:w.n$}:null,q={warnings:n,featureErrors:[],layerDefinition:{...I,drawingInfo:S??void 0,templates:(0,g.e2)(E),extent:void 0,geometryType:u,objectIdField:c,fields:o,hasZ:!!a,timeInfo:y,dateFieldsTimeReference:j}};this._queryEngine=new f.do({fieldsIndex:b.default.fromLayerJSON({fields:o,timeInfo:y,dateFieldsTimeReference:j}),geometryType:u,hasM:!1,hasZ:a,objectIdField:c,spatialReference:d,timeInfo:y,featureStore:new p.A({geometryType:u,hasM:!1,hasZ:a})});const C=this._queryEngine.fieldsIndex.requiredFields.indexOf(T);C>-1&&this._queryEngine.fieldsIndex.requiredFields.splice(C,1),this._createDefaultAttributes=(0,g.Vx)(E,c);const v=await this._createFeatures(s);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,v);const x=this._normalizeFeatures(v,q.featureErrors);this._queryEngine.featureStore.addMany(x);const{fullExtent:P,timeExtent:A}=await this._queryEngine.fetchRecomputedExtents();if(q.layerDefinition.extent=P,A){const{start:e,end:t}=A;q.layerDefinition.timeInfo.timeExtent=[e,t]}return q}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Promise.all([(0,m.$1)(t,n),(0,y.Nk)(e.adds,t),(0,y.Nk)(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),(0,d.J)(this._queryEngine,e,t.signal)}async queryAttributeBins(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeAttributeBinsQuery(e,t.signal)}async refresh(e){this._loadOptions.customParameters=e,this._snapshotTask?.abort(),this._snapshotTask=(0,i.UT)(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,e);const t=this._normalizeFeatures(e);t&&this._queryEngine.featureStore.addMany(t)}),(e=>{this._queryEngine.featureStore.clear(),(0,a.isAbortError)(e)||o.A.getLogger("esri.layers.GeoJSONLayer").error(new r.default("geojson-layer:refresh","An error occurred during refresh",{error:e}))})),await this._waitSnapshotComplete();const{fullExtent:t,timeExtent:n}=await this._queryEngine.fetchRecomputedExtents();return{extent:t,timeExtent:n}}async _createFeatures(e){if(null==e)return[];const{geometryType:t,hasZ:n,objectIdField:s}=this._queryEngine,i=(0,h.bd)(e,{geometryType:t,hasZ:n,objectIdField:s});if(!(0,l.aI)(this._queryEngine.spatialReference,l.KK))for(const r of i)null!=r.geometry&&(r.geometry=(0,c.Ux)((0,y.Cv)((0,c.zv)(r.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),l.KK,this._queryEngine.spatialReference)));return i}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:n}=this._loadOptions,i=(await(0,s.default)(t??"",{responseType:"json",query:{...n},signal:e})).data;return(0,h.sO)(i),i}_normalizeFeatures(e,t){const{objectIdField:n,fieldsIndex:s}=this._queryEngine,i=[];for(const r of e){const e=this._createDefaultAttributes(),o=(0,m.MB)(s,e,r.attributes,!0);o?t?.push(o):(this._assignObjectId(e,r.attributes,!0),r.attributes=e,r.objectId=e[n],i.push(r))}return i}async _applyEdits(e){const{adds:t,updates:n,deletes:s}=e,i={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t?.length&&this._applyAddEdits(i,t),n?.length&&this._applyUpdateEdits(i,n),s?.length){for(const e of s)i.deleteResults.push((0,m.bP)(e));this._queryEngine.featureStore.removeManyById(s)}const{fullExtent:r,timeExtent:o}=await this._queryEngine.fetchRecomputedExtents();return{extent:r,timeExtent:o,featureEditResults:i}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:s,hasM:i,hasZ:r,objectIdField:o,spatialReference:a,featureStore:l,fieldsIndex:d}=this._queryEngine,p=[];for(const c of t){if(c.geometry&&s!==(0,u.getJsonType)(c.geometry)){n.push((0,m.Yx)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),i=(0,m.MB)(d,t,c.attributes);if(i)n.push(i);else{if(this._assignObjectId(t,c.attributes),c.attributes=t,null!=c.uid){const t=c.attributes[o];e.uidToObjectId[c.uid]=t}if(null!=c.geometry){const e=c.geometry.spatialReference??a;c.geometry=(0,y.Cv)((0,m.CR)(c.geometry,e),e,a)}p.push(c),n.push((0,m.bP)(c.attributes[o]))}}l.addMany((0,c.Di)([],p,s,r,i,o))}_applyUpdateEdits(e,t){let{updateResults:n}=e;const{geometryType:s,hasM:i,hasZ:r,objectIdField:o,spatialReference:a,featureStore:l,fieldsIndex:d}=this._queryEngine;for(const p of t){const{attributes:e,geometry:t}=p,f=e?.[o];if(null==f){n.push((0,m.Yx)(`Identifier field ${o} missing`));continue}if(!l.has(f)){n.push((0,m.Yx)(`Feature with object id ${f} missing`));continue}const h=(0,c.oN)(l.getFeature(f),s,r,i);if(null!=t){if(s!==(0,u.getJsonType)(t)){n.push((0,m.Yx)("Incorrect geometry type."));continue}const e=t.spatialReference??a;h.geometry=(0,y.Cv)((0,m.CR)(t,e),e,a)}if(e){const t=(0,m.MB)(d,h.attributes,e);if(t){n.push(t);continue}}l.add((0,c.E2)(h,s,r,i,o)),n.push((0,m.bP)(f))}}_createObjectIdGenerator(e,t){const n=e.fieldsIndex.get(e.objectIdField);if("esriFieldTypeString"===n.type)return()=>n.name+"-"+Date.now().toString(16);let s=Number.NEGATIVE_INFINITY;for(const i of t)i.objectId&&(s=Math.max(s,i.objectId));return s=Math.max(0,s)+1,()=>s++}_assignObjectId(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const s=this._queryEngine.objectIdField;e[s]=n&&s in t?t[s]:this._objectIdGenerator()}async _checkProjection(e){try{await(0,y.Nk)(l.KK,e)}catch{throw new r.default("geojson-layer","Projection not supported")}}}},30091:(e,t,n)=>{n.d(t,{$1:()=>g,CR:()=>h,MB:()=>p,PC:()=>m,Yx:()=>u,bP:()=>c});var s=n(36357),i=n(70576),r=n(95011);class o{constructor(){this.code=null,this.description=null}}class a{constructor(e){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function u(e){return new a(e)}class l{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function c(e){return new l(e)}const d=new Set;function p(e,t,n){let s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];d.clear();for(const i in n){const o=e.get(i);if(!o)continue;const a=y(o,n[i]);if(d.add(o.name),o&&(s||o.editable)){const e=(0,r.validateFieldValue)(o,a);if(e)return u((0,r.validationErrorToString)(e,o,a));t[o.name]=a}}for(const i of e.requiredFields??[])if(!d.has(i.name))return u(`missing required field "${i.name}"`);return null}function y(e,t){let n=t;return(0,r.isNumericField)(e)&&"string"==typeof t?n=parseFloat(t):(0,r.isStringField)(e)&&null!=t&&"string"!=typeof t?n=String(t):(0,r.isDateField)(e)&&"string"==typeof t&&(n=(0,s._U)(t)),(0,r.sanitizeNullFieldValue)(n)}let f;function h(e,t){if(!e||!(0,i.fn)(t))return e;if("rings"in e||"paths"in e){if(null==f)throw new TypeError("geometry engine not loaded");return f.simplify(t,e)}return e}async function g(e,t){!(0,i.fn)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return null==f&&(f=await Promise.all([n.e(31329),n.e(51805)]).then(n.bind(n,32984))),f}()}const m={supportsAutoIntervalBin:!0,supportsFixedIntervalBin:!0,supportsFixedBoundariesBin:!0,supportsDateBin:!0,supportsStackBy:!0,supportsSplitBy:!0,supportsNormalization:!0,supportedStatisticTypes:["COUNT","SUM","AVG","VAR","STDDEV","MIN","MAX","PERCENTILE_CONT","PERCENTILE_DISC","CentroidAggregate","EnvelopeAggregate","ConvexHullAggregate"],supportedNormalizationTypes:["field","log","naturalLog","percentOfTotal","squareRoot"]}},36357:(e,t,n)=>{function s(e){return null!=a(e)||null!=o(e)}function i(e){return u.test(e)}function r(e){return a(e)??o(e)}function o(e){const t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;let n=!0;if(c&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,s=0;for(;!t&&s<=e.length;)t=!l.test(e[s]),s++;n=!t}}return n}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function a(e){const t=u.exec(e);if(!t?.groups)return null;const n=t.groups,s=+n.year,i=+n.month-1,r=+n.day,o=+(n.hours??"0"),a=+(n.minutes??"0"),l=+(n.seconds??"0");if(o>23)return null;if(a>59)return null;if(l>59)return null;const c=n.ms??"0",d=c?+c.padEnd(3,"0").slice(0,3):0;let p;if(n.isUTC||!n.offsetSign)p=Date.UTC(s,i,r,o,a,l,d);else{const e=+n.offsetHours,t=+n.offsetMinutes;p=6e4*("+"===n.offsetSign?-1:1)*(60*e+t)+Date.UTC(s,i,r,o,a,l,d)}return Number.isNaN(p)?null:p}n.d(t,{Br:()=>i,Cq:()=>s,_U:()=>r});const u=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;const l=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,c=!Number.isNaN(new Date("technology 10").getTime())},42958:(e,t,n)=>{n.d(t,{BM:()=>E,bd:()=>S,sO:()=>T,xD:()=>c});var s=n(36357),i=n(74719),r=n(70576),o=n(67011),a=n(39817),u=n(95011);const l={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function c(e){return l[e]}function*d(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*p(e){if(e)switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function y(e){for(const t of e)if(t.length>2)return!0;return!1}function f(e){let t=0;for(let n=0;n<e.length;n++){const s=e[n],i=e[(n+1)%e.length];t+=s[0]*i[1]-i[0]*s[1]}return t<=0}function h(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function g(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return F(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const s of t.coordinates)F(e,s,n);return e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const s of t.coordinates){m(e,s[0],n);for(let t=1;t<s.length;t++)b(e,s[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return w(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const s=t.coordinates;m(e,s[0],n);for(let i=1;i<s.length;i++)b(e,s[i],n);return e}(e,t,n)}}function m(e,t,n){const s=h(t);!function(e){return!f(e)}(s)?F(e,s,n):_(e,s,n)}function b(e,t,n){const s=h(t);!function(e){return f(e)}(s)?F(e,s,n):_(e,s,n)}function F(e,t,n){for(const s of t)w(e,s,n);e.lengths.push(t.length)}function _(e,t,n){for(let s=t.length-1;s>=0;s--)w(e,t[s],n);e.lengths.push(t.length)}function w(e,t,n){const[s,i,r]=t;e.coords.push(s,i),n.hasZ&&e.coords.push(r||0)}function I(e){switch(typeof e){case"string":return(0,s.Br)(e)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function T(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4326;if(!e)throw new i.default("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new i.default("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:n}=e;if(!n)return;const s="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,o=(0,r.oT)({wkid:t})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(`.*(${t})$`,"i");if(!s||!o.test(s))throw new i.default("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function E(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=[],s=new Set,i=new Set;let r,o=!1,a=null,l=!1,{geometryType:f=null}=t;for(const g of d(e)){const{geometry:e,properties:t,id:d}=g;if((!e||(f||(f=c(e.type)),c(e.type)===f))&&(o||(o=y(p(e))),l||(l=null!=d,l&&(r=typeof d,t&&(a=Object.keys(t).filter((e=>t[e]===d))))),t&&a&&l&&null!=d&&(a.length>1?a=a.filter((e=>t[e]===d)):1===a.length&&(a=t[a[0]]===d?a:[])),t))for(const r in t){if(s.has(r))continue;const e=I(t[r]);if("unknown"===e){i.add(r);continue}i.delete(r),s.add(r);const o=(0,u.normalizeFieldName)(r);o&&n.push({name:o,alias:r,type:e})}}const h=(0,u.normalizeFieldName)(1===a?.length&&a[0]||null)??void 0;if(h)for(const c of n)if(c.name===h&&(0,u.isNumericField)(c)){c.type="esriFieldTypeOID";break}return{fields:n,geometryType:f,hasZ:o,objectIdFieldName:h,objectIdFieldType:r,unknownFields:Array.from(i)}}function S(e,t){return Array.from(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function*(){const{geometryType:n,objectIdField:s}=t;for(const i of e){const{geometry:e,properties:r,id:u}=i;if(e&&c(e.type)!==n)continue;const l=r||{};let d;s&&(d=l[s],null==u||d||(l[s]=d=u));const p=new o.Om(e?g(new a.A,e,t):null,l,null,d);yield p}}()}(d(e),t))}},97495:(e,t,n)=>{n.d(t,{F0:()=>a,Vx:()=>c,e2:()=>p,f:()=>y});var s=n(21265),i=n(82301),r=n(3133),o=n(46575);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.Cb:"esriGeometryPolyline"===e?o.yM:o.WR}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let l=1;function c(e,t){if((0,s.A)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let n=`this${d(t)} = null;`;for(const t in e)n+=`this${d(t)} = ${JSON.stringify(e[t])};`;const s=new Function(`\n      return class AttributesClass$${l++} {\n        constructor() {\n          ${n};\n        }\n      }\n    `)();return()=>new s}catch(n){return()=>({[t]:null,...e})}}function d(e){return u.test(e)?`.${e}`:`["${e}"]`}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,i.clone)(e)}}]}function y(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryBins:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:r.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryAttributeBins:r.P,editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}}}]);