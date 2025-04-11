"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[4891,8929],{19977:(e,t,n)=>{n.r(t),n.d(t,{default:()=>F});var s=n(23060),i=n(58828),r=n(74719),o=n(50925),a=n(49959),l=n(78629),u=n(70576),h=n(81765),d=n(33657),c=n(78670),f=n(1413),p=n(13791),m=n(42958),y=n(97495),g=n(30091),_=n(76747),I=n(22464),b=n(95011),x=n(73210);const w={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsQueryAttachmentOrderByFields:!1,supportsQueryBins:!0,supportsQueryWithCacheHint:!0,supportsQueryWithDistance:!0,supportsQueryWithResultType:!0,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0},queryBinsCapabilities:g.PC};class F{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){this._queryEngine?.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._loadOptions={url:e.url,customParameters:e.customParameters};const n=[],[s]=await Promise.all([e.url?this._fetch(t?.signal):null,this._checkProjection(e.spatialReference)]),i=(0,m.BM)(s,{geometryType:e.geometryType}),o=e.fields||i.fields||[],a=null!=e.hasZ?e.hasZ:i.hasZ,l=i.geometryType;let h=e.objectIdField||i.objectIdFieldName||"__OBJECTID";const d=e.spatialReference||u.KK;let f=e.timeInfo;o===i.fields&&i.unknownFields.length>0&&n.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:i.unknownFields}});const g=new _.A(o);let F=g.get(h);F?("esriFieldTypeString"!==F.type&&(F.type="esriFieldTypeOID"),F.editable=!1,F.nullable=!1,h=F.name):(F={alias:h,name:h,type:"string"===i.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o.unshift(F));const T={};for(const u of o){if(null==u.name&&(u.name=u.alias),null==u.alias&&(u.alias=u.name),!u.name)throw new r.A("geojson-layer:invalid-field-name","field name is missing",{field:u});if(!I.m.jsonValues.includes(u.type))throw new r.A("geojson-layer:invalid-field-type",`invalid type for field "${u.name}"`,{field:u});if(u.name!==F.name){const e=(0,b.lD)(u);void 0!==e&&(T[u.name]=e)}null==u.length&&(u.length=(0,b._b)(u))}if(f){if(f.startTimeField){const e=g.get(f.startTimeField);e?(f.startTimeField=e.name,e.type="esriFieldTypeDate"):f.startTimeField=null}if(f.endTimeField){const e=g.get(f.endTimeField);e?(f.endTimeField=e.name,e.type="esriFieldTypeDate"):f.endTimeField=null}if(f.trackIdField){const e=g.get(f.trackIdField);e?f.trackIdField=e.name:(f.trackIdField=null,n.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:f}}))}f.startTimeField||f.endTimeField||(n.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:f}}),f=null)}const B=l?(0,y.F0)(l):void 0,M=g.dateFields.length?{timeZoneIANA:x.n$}:null,E={warnings:n,featureErrors:[],layerDefinition:{...w,drawingInfo:B??void 0,templates:(0,y.e2)(T),extent:void 0,geometryType:l,objectIdField:h,fields:o,hasZ:!!a,timeInfo:f,dateFieldsTimeReference:M}};this._queryEngine=new p.do({fieldsIndex:_.A.fromLayerJSON({fields:o,timeInfo:f,dateFieldsTimeReference:M}),geometryType:l,hasM:!1,hasZ:a,objectIdField:h,spatialReference:d,timeInfo:f,featureStore:new c.A({geometryType:l,hasM:!1,hasZ:a})});const v=this._queryEngine.fieldsIndex.requiredFields.indexOf(F);v>-1&&this._queryEngine.fieldsIndex.requiredFields.splice(v,1),this._createDefaultAttributes=(0,y.Vx)(T,h);const S=await this._createFeatures(s);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,S);const A=this._normalizeFeatures(S,E.featureErrors);this._queryEngine.featureStore.addMany(A);const{fullExtent:N,timeExtent:j}=await this._queryEngine.fetchRecomputedExtents();if(E.layerDefinition.extent=N,j){const{start:e,end:t}=j;E.layerDefinition.timeInfo.timeExtent=[e,t]}return E}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Promise.all([(0,g.$1)(t,n),(0,f.Nk)(e.adds,t),(0,f.Nk)(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),(0,d.J)(this._queryEngine,e,t.signal)}async queryAttributeBins(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeAttributeBinsQuery(e,t.signal)}async refresh(e){this._loadOptions.customParameters=e,this._snapshotTask?.abort(),this._snapshotTask=(0,i.UT)(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,e);const t=this._normalizeFeatures(e);t&&this._queryEngine.featureStore.addMany(t)}),(e=>{this._queryEngine.featureStore.clear(),(0,a.zf)(e)||o.A.getLogger("esri.layers.GeoJSONLayer").error(new r.A("geojson-layer:refresh","An error occurred during refresh",{error:e}))})),await this._waitSnapshotComplete();const{fullExtent:t,timeExtent:n}=await this._queryEngine.fetchRecomputedExtents();return{extent:t,timeExtent:n}}async _createFeatures(e){if(null==e)return[];const{geometryType:t,hasZ:n,objectIdField:s}=this._queryEngine,i=(0,m.bd)(e,{geometryType:t,hasZ:n,objectIdField:s});if(!(0,u.aI)(this._queryEngine.spatialReference,u.KK))for(const r of i)null!=r.geometry&&(r.geometry=(0,h.Ux)((0,f.Cv)((0,h.zv)(r.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),u.KK,this._queryEngine.spatialReference)));return i}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:n}=this._loadOptions,i=(await(0,s.A)(t??"",{responseType:"json",query:{...n},signal:e})).data;return(0,m.sO)(i),i}_normalizeFeatures(e,t){const{objectIdField:n,fieldsIndex:s}=this._queryEngine,i=[];for(const r of e){const e=this._createDefaultAttributes(),o=(0,g.MB)(s,e,r.attributes,!0);o?t?.push(o):(this._assignObjectId(e,r.attributes,!0),r.attributes=e,r.objectId=e[n],i.push(r))}return i}async _applyEdits(e){const{adds:t,updates:n,deletes:s}=e,i={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t?.length&&this._applyAddEdits(i,t),n?.length&&this._applyUpdateEdits(i,n),s?.length){for(const e of s)i.deleteResults.push((0,g.bP)(e));this._queryEngine.featureStore.removeManyById(s)}const{fullExtent:r,timeExtent:o}=await this._queryEngine.fetchRecomputedExtents();return{extent:r,timeExtent:o,featureEditResults:i}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:s,hasM:i,hasZ:r,objectIdField:o,spatialReference:a,featureStore:u,fieldsIndex:d}=this._queryEngine,c=[];for(const h of t){if(h.geometry&&s!==(0,l.$B)(h.geometry)){n.push((0,g.Yx)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),i=(0,g.MB)(d,t,h.attributes);if(i)n.push(i);else{if(this._assignObjectId(t,h.attributes),h.attributes=t,null!=h.uid){const t=h.attributes[o];e.uidToObjectId[h.uid]=t}if(null!=h.geometry){const e=h.geometry.spatialReference??a;h.geometry=(0,f.Cv)((0,g.CR)(h.geometry,e),e,a)}c.push(h),n.push((0,g.bP)(h.attributes[o]))}}u.addMany((0,h.Di)([],c,s,r,i,o))}_applyUpdateEdits(e,t){let{updateResults:n}=e;const{geometryType:s,hasM:i,hasZ:r,objectIdField:o,spatialReference:a,featureStore:u,fieldsIndex:d}=this._queryEngine;for(const c of t){const{attributes:e,geometry:t}=c,p=e?.[o];if(null==p){n.push((0,g.Yx)(`Identifier field ${o} missing`));continue}if(!u.has(p)){n.push((0,g.Yx)(`Feature with object id ${p} missing`));continue}const m=(0,h.oN)(u.getFeature(p),s,r,i);if(null!=t){if(s!==(0,l.$B)(t)){n.push((0,g.Yx)("Incorrect geometry type."));continue}const e=t.spatialReference??a;m.geometry=(0,f.Cv)((0,g.CR)(t,e),e,a)}if(e){const t=(0,g.MB)(d,m.attributes,e);if(t){n.push(t);continue}}u.add((0,h.E2)(m,s,r,i,o)),n.push((0,g.bP)(p))}}_createObjectIdGenerator(e,t){const n=e.fieldsIndex.get(e.objectIdField);if("esriFieldTypeString"===n.type)return()=>n.name+"-"+Date.now().toString(16);let s=Number.NEGATIVE_INFINITY;for(const i of t)i.objectId&&(s=Math.max(s,i.objectId));return s=Math.max(0,s)+1,()=>s++}_assignObjectId(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const s=this._queryEngine.objectIdField;e[s]=n&&s in t?t[s]:this._objectIdGenerator()}async _checkProjection(e){try{await(0,f.Nk)(u.KK,e)}catch{throw new r.A("geojson-layer","Projection not supported")}}}},30091:(e,t,n)=>{n.d(t,{$1:()=>y,CR:()=>m,MB:()=>c,PC:()=>g,Yx:()=>l,bP:()=>h});var s=n(36357),i=n(70576),r=n(95011);class o{constructor(){this.code=null,this.description=null}}class a{constructor(e){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function l(e){return new a(e)}class u{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function h(e){return new u(e)}const d=new Set;function c(e,t,n){let s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];d.clear();for(const i in n){const o=e.get(i);if(!o)continue;const a=f(o,n[i]);if(d.add(o.name),o&&(s||o.editable)){const e=(0,r.CJ)(o,a);if(e)return l((0,r.uo)(e,o,a));t[o.name]=a}}for(const i of e.requiredFields??[])if(!d.has(i.name))return l(`missing required field "${i.name}"`);return null}function f(e,t){let n=t;return(0,r.WA)(e)&&"string"==typeof t?n=parseFloat(t):(0,r.yM)(e)&&null!=t&&"string"!=typeof t?n=String(t):(0,r.vE)(e)&&"string"==typeof t&&(n=(0,s._U)(t)),(0,r.WX)(n)}let p;function m(e,t){if(!e||!(0,i.fn)(t))return e;if("rings"in e||"paths"in e){if(null==p)throw new TypeError("geometry engine not loaded");return p.simplify(t,e)}return e}async function y(e,t){!(0,i.fn)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return null==p&&(p=await Promise.all([n.e(1329),n.e(1805)]).then(n.bind(n,32984))),p}()}const g={supportsAutoIntervalBin:!0,supportsFixedIntervalBin:!0,supportsFixedBoundariesBin:!0,supportsDateBin:!0,supportsStackBy:!0,supportsSplitBy:!0,supportsNormalization:!0,supportedStatisticTypes:["COUNT","SUM","AVG","VAR","STDDEV","MIN","MAX","PERCENTILE_CONT","PERCENTILE_DISC","CentroidAggregate","EnvelopeAggregate","ConvexHullAggregate"],supportedNormalizationTypes:["field","log","naturalLog","percentOfTotal","squareRoot"]}},33657:(e,t,n)=>{n.d(t,{J:()=>p});var s=n(82301),i=n(49959),r=n(78629),o=n(79624),a=n(70576),l=n(1413),u=n(13791),h=n(69317),d=n(51488),c=n(13313),f=n(66022);async function p(e,t,n){const p=(0,i.Mq)(n),{point:m,distance:y,returnEdge:g,vertexMode:_}=t;if(!g&&"none"===_)return{candidates:[]};let I=(0,s.o8)(t.query);I=await e.schedule((()=>(0,d.T2)(I,e.definitionExpression,e.spatialReference)),p),I=await e.reschedule((()=>(0,c.B4)(I,{availableFields:e.availableFields,fieldsIndex:e.fieldsIndex,geometryType:e.geometryType,spatialReference:e.spatialReference})),p);const b=!(0,a.aI)(m.spatialReference,e.spatialReference);b&&await(0,l.Nk)(m.spatialReference,e.spatialReference);const x="number"==typeof y?y:y.x,w="number"==typeof y?y:y.y,F={xmin:m.x-x,xmax:m.x+x,ymin:m.y-w,ymax:m.y+w,spatialReference:m.spatialReference},T=b?(0,l.Cv)(F,e.spatialReference):F;if(!T)return{candidates:[]};const B=(await(0,o.el)((0,r.rS)(m),null,{signal:p}))[0],M=(await(0,o.el)((0,r.rS)(T),null,{signal:p}))[0];if(null==B||null==M)return{candidates:[]};const E=new h.G(await e.reschedule((()=>e.searchFeatures((0,u.ux)(M.toJSON()))),p),I,e);await e.reschedule((()=>e.executeObjectIdsQuery(E)),p),await e.reschedule((()=>e.executeTimeQuery(E)),p),await e.reschedule((()=>e.executeAttributesQuery(E)),p),await e.reschedule((()=>async function(e,t,n){const{query:s}=t,{spatialRel:i}=s;if(!t?.items?.length||!s.geometry||!i)return;const r=await(0,f.xt)(i,s.geometry,e.geometryType,e.hasZ,e.hasM),o=await e.runSpatialFilter(t.items,(e=>r(e.geometry)),n);t.items=o}(e,E,p)),p);const v=B.toJSON(),S=b?(0,l.Cv)(v,e.spatialReference):v,A=b?Math.max(T.xmax-T.xmin,T.ymax-T.ymin)/2:y;return E.createSnappingResponse({...t,point:S,distance:A},m.spatialReference)}},36357:(e,t,n)=>{function s(e){return null!=a(e)||null!=o(e)}function i(e){return l.test(e)}function r(e){return a(e)??o(e)}function o(e){const t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;let n=!0;if(h&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,s=0;for(;!t&&s<=e.length;)t=!u.test(e[s]),s++;n=!t}}return n}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function a(e){const t=l.exec(e);if(!t?.groups)return null;const n=t.groups,s=+n.year,i=+n.month-1,r=+n.day,o=+(n.hours??"0"),a=+(n.minutes??"0"),u=+(n.seconds??"0");if(o>23)return null;if(a>59)return null;if(u>59)return null;const h=n.ms??"0",d=h?+h.padEnd(3,"0").slice(0,3):0;let c;if(n.isUTC||!n.offsetSign)c=Date.UTC(s,i,r,o,a,u,d);else{const e=+n.offsetHours,t=+n.offsetMinutes;c=6e4*("+"===n.offsetSign?-1:1)*(60*e+t)+Date.UTC(s,i,r,o,a,u,d)}return Number.isNaN(c)?null:c}n.d(t,{Br:()=>i,Cq:()=>s,_U:()=>r});const l=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;const u=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,h=!Number.isNaN(new Date("technology 10").getTime())},39817:(e,t,n)=>{n.d(t,{A:()=>i});var s=n(42080);class i{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this.lengths=e??[],this.coords=t??[]}static fromJSON(e){return new i(e.lengths,e.coords)}static fromRect(e){const[t,n,s,r]=e,o=s-t,a=r-n;return new i([5],[t,n,o,0,0,a,-o,0,0,-a])}get isPoint(){return 0===this.lengths.length&&this.coords.length>=2}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((e,t)=>e+t))}get usedMemory(){return 64+(0,s.Qf)(this.lengths,this.coords)}area(){let e=0,t=0;if(!this.lengths.length)return 0;for(let n=0;n<this.lengths.length;n++){const s=this.lengths[n];if(s<3)continue;let i=this.coords[2*t],r=this.coords[2*t+1];for(let n=1;n<s;n+=1){const s=this.coords[2*(n+t)],o=this.coords[2*(n+t)+1];e+=-.5*(s-i)*(o+r),i=s,r=o}t+=s}return e}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let n=0;n<this.lengths.length;n++){const s=this.lengths[n];for(let n=0;n<s;n++)e(this.coords[2*(n+t)],this.coords[2*(n+t)+1]);t+=s}}deltaDecode(){const e=this.clone(),{coords:t,lengths:n}=e;let s=0;for(const i of n){for(let e=1;e<i;e++)t[2*(s+e)]+=t[2*(s+e)-2],t[2*(s+e)+1]+=t[2*(s+e)-1];s+=i}return e}clone(e){if(0===this.lengths.length)return new i([],[this.coords[0],this.coords[1]]);const t=2*(0===this.lengths.length?1:this.lengths.reduce(((e,t)=>e+t))),n=this.coords.slice(0,t);return e?(e.set(n),new i(this.lengths,e)):new i(Array.from(this.lengths),Array.from(n))}}},40602:(e,t,n)=>{function s(e,t){return e?t?4:3:t?3:2}function i(e,t,n,i){if(!t?.lengths.length)return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const a=e.coords,l=[],u=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:h,coords:d}=t,c=s(n,i);let f=0;for(const s of h){const e=r(u,d,f,s,n,i);e&&l.push(e),f+=s*c}if(l.sort(((e,t)=>{let s=e[2]-t[2];return 0===s&&n&&(s=e[4]-t[4]),s})),l.length){let e=6*l[0][2];a[0]=l[0][0]/e,a[1]=l[0][1]/e,n&&(e=6*l[0][4],a[2]=0!==e?l[0][3]/e:0),(a[0]<u[0]||a[0]>u[1]||a[1]<u[2]||a[1]>u[3]||n&&(a[2]<u[4]||a[2]>u[5]))&&(a.length=0)}if(!a.length){const e=t.lengths[0]?o(d,0,h[0],n,i):null;if(!e)return null;a[0]=e[0],a[1]=e[1],n&&e.length>2&&(a[2]=e[2])}return e}function r(e,t,n,i,r,o){const a=s(r,o);let l=n,u=n+a,h=0,d=0,c=0,f=0,p=0;for(let s=0,y=i-1;s<y;s++,l+=a,u+=a){const n=t[l],s=t[l+1],i=t[l+2],o=t[u],a=t[u+1],m=t[u+2];let y=n*a-o*s;f+=y,h+=(n+o)*y,d+=(s+a)*y,r&&(y=n*m-o*i,c+=(i+m)*y,p+=y),n<e[0]&&(e[0]=n),n>e[1]&&(e[1]=n),s<e[2]&&(e[2]=s),s>e[3]&&(e[3]=s),r&&(i<e[4]&&(e[4]=i),i>e[5]&&(e[5]=i))}if(f>0&&(f*=-1),p>0&&(p*=-1),!f)return null;const m=[h,d,.5*f];return r&&(m[3]=c,m[4]=.5*p),m}function o(e,t,n,i,r){const o=s(i,r);let d=t,c=t+o,f=0,p=0,m=0,y=0;for(let s=0,g=n-1;s<g;s++,d+=o,c+=o){const t=e[d],n=e[d+1],s=e[d+2],r=e[c],o=e[c+1],g=e[c+2],_=i?l(t,n,s,r,o,g):a(t,n,r,o);if(_)if(f+=_,i){const e=h(t,n,s,r,o,g);p+=_*e[0],m+=_*e[1],y+=_*e[2]}else{const e=u(t,n,r,o);p+=_*e[0],m+=_*e[1]}}return f>0?i?[p/f,m/f,y/f]:[p/f,m/f]:n>0?i?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function a(e,t,n,s){const i=n-e,r=s-t;return Math.sqrt(i*i+r*r)}function l(e,t,n,s,i,r){const o=s-e,a=i-t,l=r-n;return Math.sqrt(o*o+a*a+l*l)}function u(e,t,n,s){return[e+.5*(n-e),t+.5*(s-t)]}function h(e,t,n,s,i,r){return[e+.5*(s-e),t+.5*(i-t),n+.5*(r-n)]}n.d(t,{Q:()=>i})},42080:(e,t,n)=>{n.d(t,{Qf:()=>l,Qh:()=>o,RS:()=>i,ez:()=>d,i5:()=>c,lM:()=>r,qK:()=>h});var s=n(25048);const i=16;function r(e){if(!e)return 0;let t=h;for(const n in e)e.hasOwnProperty(n)&&(t+=a(e[n],!1));return t}function o(e){if(!e)return 0;if("number"==typeof e[0])return l(e);if(Array.isArray(e))return function(e){const t=e.length;if(0===t||"number"==typeof e[0])return u(e,8);let n=d;for(let s=0;s<t;s++)n+=a(e[s]);return n}(e);let t=h;for(const n in e)e.hasOwnProperty(n)&&(t+=a(e[n]));return t}function a(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];switch(typeof e){case"object":return t?o(e):h;case"string":return function(e){return 32+e.length}(e);case"number":return i;case"boolean":return 4;default:return 8}}function l(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(((e,t)=>e+(t?(0,s.iu)(t)?t.byteLength+c:Array.isArray(t)?u(t,i):0:0)),0)}function u(e,t){return d+e.length*t}const h=32,d=16,c=145},42347:(e,t,n)=>{n.d(t,{F:()=>l});var s=n(21265),i=n(95984),r=n(90772);const o={minX:0,minY:0,maxX:0,maxY:0};function a(e,t,n){(function(e){o.minX=e[0],o.minY=e[1],o.maxX=e[2],o.maxY=e[3]})(t),e.search(o,n)}class l{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new i.w(9,(0,s.A)("esri-csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach(((n,s)=>{e[t++]=s})),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter((e=>this._idByBounds.has(e)))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const e=(0,r.Ie)();for(const t of this._boundsById.values())t&&(e[0]=Math.min(t[0],e[0]),e[1]=Math.min(t[1],e[1]),e[2]=Math.max(t[2],e[2]),e[3]=Math.max(t[3],e[3]));return e}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex(),a(this._index,e,(e=>t(this._idByBounds.get(e))))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},42958:(e,t,n)=>{n.d(t,{BM:()=>T,bd:()=>B,sO:()=>F,xD:()=>h});var s=n(36357),i=n(74719),r=n(70576),o=n(67011),a=n(39817),l=n(95011);const u={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function h(e){return u[e]}function*d(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*c(e){if(e)switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function f(e){for(const t of e)if(t.length>2)return!0;return!1}function p(e){let t=0;for(let n=0;n<e.length;n++){const s=e[n],i=e[(n+1)%e.length];t+=s[0]*i[1]-i[0]*s[1]}return t<=0}function m(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function y(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return I(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const s of t.coordinates)I(e,s,n);return e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const s of t.coordinates){g(e,s[0],n);for(let t=1;t<s.length;t++)_(e,s[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return x(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const s=t.coordinates;g(e,s[0],n);for(let i=1;i<s.length;i++)_(e,s[i],n);return e}(e,t,n)}}function g(e,t,n){const s=m(t);!function(e){return!p(e)}(s)?I(e,s,n):b(e,s,n)}function _(e,t,n){const s=m(t);!function(e){return p(e)}(s)?I(e,s,n):b(e,s,n)}function I(e,t,n){for(const s of t)x(e,s,n);e.lengths.push(t.length)}function b(e,t,n){for(let s=t.length-1;s>=0;s--)x(e,t[s],n);e.lengths.push(t.length)}function x(e,t,n){const[s,i,r]=t;e.coords.push(s,i),n.hasZ&&e.coords.push(r||0)}function w(e){switch(typeof e){case"string":return(0,s.Br)(e)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function F(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4326;if(!e)throw new i.A("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new i.A("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:n}=e;if(!n)return;const s="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,o=(0,r.oT)({wkid:t})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(`.*(${t})$`,"i");if(!s||!o.test(s))throw new i.A("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function T(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=[],s=new Set,i=new Set;let r,o=!1,a=null,u=!1,{geometryType:p=null}=t;for(const y of d(e)){const{geometry:e,properties:t,id:d}=y;if((!e||(p||(p=h(e.type)),h(e.type)===p))&&(o||(o=f(c(e))),u||(u=null!=d,u&&(r=typeof d,t&&(a=Object.keys(t).filter((e=>t[e]===d))))),t&&a&&u&&null!=d&&(a.length>1?a=a.filter((e=>t[e]===d)):1===a.length&&(a=t[a[0]]===d?a:[])),t))for(const r in t){if(s.has(r))continue;const e=w(t[r]);if("unknown"===e){i.add(r);continue}i.delete(r),s.add(r);const o=(0,l.rS)(r);o&&n.push({name:o,alias:r,type:e})}}const m=(0,l.rS)(1===a?.length&&a[0]||null)??void 0;if(m)for(const h of n)if(h.name===m&&(0,l.WA)(h)){h.type="esriFieldTypeOID";break}return{fields:n,geometryType:p,hasZ:o,objectIdFieldName:m,objectIdFieldType:r,unknownFields:Array.from(i)}}function B(e,t){return Array.from(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function*(){const{geometryType:n,objectIdField:s}=t;for(const i of e){const{geometry:e,properties:r,id:l}=i;if(e&&h(e.type)!==n)continue;const u=r||{};let d;s&&(d=u[s],null==l||d||(u[s]=d=l));const c=new o.Om(e?y(new a.A,e,t):null,u,null,d);yield c}}()}(d(e),t))}},52579:(e,t,n)=>{n.d(t,{A:()=>s});class s{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new s;return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}},67011:(e,t,n)=>{n.d(t,{N3:()=>a,Om:()=>o});var s=n(42080),i=n(40602),r=n(39817);class o{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;this.geometry=e,this.attributes=t,this.centroid=n,this.objectId=s,this.displayId=i}static fromJSON(e){const t=e.geometry?r.A.fromJSON(e.geometry):null,n=e.centroid?r.A.fromJSON(e.centroid):null,s=e.objectId;return new o(t,e.attributes,n,s)}weakClone(){const e=new o(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e}clone(){const e=this.geometry?.clone(),t=new o(e,{...this.attributes},this.centroid?.clone(),this.objectId);return t.displayId=this.displayId,t}ensureCentroid(e){return this.centroid??=(0,i.Q)(new r.A,this.geometry,e.hasZ,e.hasM),this.centroid}get usedMemory(){return 128+(0,s.lM)(this.attributes)+(this.geometry?.usedMemory??0)}}function a(e){return!!e.geometry?.coords?.length}},78670:(e,t,n)=>{n.d(t,{A:()=>p});var s=n(62631),i=n(74719),r=n(58448),o=n(50925),a=n(4309),l=n(90772),u=n(81765),h=n(42347),d=n(63904),c=n(79801);const f=(0,a.vt)();class p{constructor(e){this.geometryInfo=e,this._boundsStore=new h.F,this._featuresById=new Map,this._usedMemory=0,this.events=new r.A,this.featureAdapter=c.T}get usedMemory(){return this._usedMemory}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{null!=t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(e){if(null==this.fullBounds)return null;const[t,n,s,i]=this.fullBounds;return{xmin:t,ymin:n,xmax:s,ymax:i,spatialReference:(0,d.ag)(e)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}upsertMany(e){const t=e.map((e=>this._upsert(e)));return this._emitChanged(),t.filter(s.Ru)}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged(),this._usedMemory=0}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t){for(const n of e){const e=this._boundsStore.get(n.objectId);e&&t((0,a.Jt)(f,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void o.A.getLogger("esri.layers.graphics.data.FeatureStore").error(new i.A("featurestore:invalid-feature","feature id is missing",{feature:e}));const n=this._featuresById.get(t);let s;if(n?(e.displayId=n.displayId,s=this._boundsStore.get(t),this._boundsStore.delete(t),this._usedMemory-=this.estimateFeatureUsedMemory?.(n)??0):null!=this.onFeatureAdd&&this.onFeatureAdd(e),!e.geometry?.coords?.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);s=(0,u.jQ)(null!=s?s:(0,l.vt)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),null!=s&&this._boundsStore.set(t,s),this._featuresById.set(t,e),this._usedMemory+=this.estimateFeatureUsedMemory?.(e)??0}_upsert(e){const t=e?.objectId;if(null==t)return o.A.getLogger("esri.layers.graphics.data.FeatureStore").error(new i.A("featurestore:invalid-feature","feature id is missing",{feature:e})),null;const n=this._featuresById.get(t);if(!n)return this._add(e),e;this._usedMemory-=this.estimateFeatureUsedMemory?.(n)??0;const{geometry:s,attributes:r}=e;for(const i in r)n.attributes[i]=r[i];return s&&(n.geometry=s,this._boundsStore.set(t,(0,u.jQ)((0,l.vt)(),s,this.geometryInfo.hasZ,this.geometryInfo.hasM)??null)),this._usedMemory+=this.estimateFeatureUsedMemory?.(n)??0,n}_remove(e){null!=this.onFeatureRemove&&this.onFeatureRemove(e);const t=e.objectId;return this._boundsStore.delete(t),this._featuresById.delete(t),this._usedMemory-=this.estimateFeatureUsedMemory?.(e)??0,e}}},79801:(e,t,n)=>{n.d(t,{T:()=>i});var s=n(67011);const i={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new s.Om(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>e.ensureCentroid(t)}},95984:(e,t,n)=>{n.d(t,{E:()=>B,w:()=>a});var s=n(62631),i=n(7951),r=(n(21265),n(15899)),o=n(95735);class a{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,t=arguments.length>1?arguments[1]:void 0;this._compareMinX=c,this._compareMinY=f,this._toBBox=e=>e,this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this._toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),x.prune(),w.prune(),F.prune(),T.prune()}all(e){l(this._data,e)}search(e,t){let n=this._data;const s=this._toBBox;if(I(e,n))for(x.clear();n;){for(let i=0,r=n.children.length;i<r;i++){const r=n.children[i],o=n.leaf?s(r):r;I(e,o)&&(n.leaf?t(r):_(e,o)?l(r,t):x.push(r))}n=x.pop()}}collides(e){let t=this._data;const n=this._toBBox;if(!I(e,t))return!1;for(x.clear();t;){for(let s=0,i=t.children.length;s<i;s++){const i=t.children[s],r=t.leaf?n(i):i;if(I(e,r)){if(t.leaf||_(e,r))return!0;x.push(i)}}t=x.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let t=0,n=e.length;t<n;t++)this.insert(e[t]);return this}let t=this._build(e.slice(),0,e.length-1,0);if(this._data.children.length)if(this._data.height===t.height)this._splitRoot(this._data,t);else{if(this._data.height<t.height){const e=this._data;this._data=t,t=e}this._insert(t,this._data.height-t.height-1,!0)}else this._data=t;return this}insert(e){return e&&this._insert(e,this._data.height-1),this}clear(){return this._data=new E([]),this}remove(e){if(!e)return this;let t,n=this._data,r=null,o=0,a=!1;const l=this._toBBox(e);for(F.clear(),T.clear();n||F.length>0;){if(n||(n=F.pop(),r=F.data[F.length-1],o=T.pop()??0,a=!0),n.leaf&&(t=(0,s.qh)(n.children,(0,i.zI)(e),n.children.length,n.indexHint),-1!==t))return n.children.splice(t,1),F.push(n),this._condense(F),this;a||n.leaf||!_(n,l)?r?(o++,n=r.children[o],a=!1):n=null:(F.push(n),T.push(o),o=0,r=n,n=n.children[0])}return this}toJSON(){return this._data}fromJSON(e){return this._data=e,this}_build(e,t,n,s){const i=n-t+1;let r=this._maxEntries;if(i<=r){const s=new E(e.slice(t,n+1));return u(s,this._toBBox),s}s||(s=Math.ceil(Math.log(i)/Math.log(r)),r=Math.ceil(i/r**(s-1)));const o=new v([]);o.height=s;const a=Math.ceil(i/r),l=a*Math.ceil(Math.sqrt(r));b(e,t,n,l,this._compareMinX);for(let u=t;u<=n;u+=l){const t=Math.min(u+l-1,n);b(e,u,t,a,this._compareMinY);for(let n=u;n<=t;n+=a){const i=Math.min(n+a-1,t);o.children.push(this._build(e,n,i,s-1))}}return u(o,this._toBBox),o}_insert(e,t,n){const s=this._toBBox,i=n?e:s(e);F.clear();const r=function(e,t,n,s){for(;s.push(t),!0!==t.leaf&&s.length-1!==n;){let n,s=1/0,i=1/0;for(let r=0,o=t.children.length;r<o;r++){const o=t.children[r],a=p(o),l=y(e,o)-a;l<i?(i=l,s=a<s?a:s,n=o):l===i&&a<s&&(s=a,n=o)}t=n||t.children[0]}return t}(i,this._data,t,F);for(r.children.push(e),d(r,i);t>=0&&F.data[t].children.length>this._maxEntries;)this._split(F,t),t--;!function(e,t,n){for(let s=n;s>=0;s--)d(t.data[s],e)}(i,F,t)}_split(e,t){const n=e.data[t],s=n.children.length,i=this._minEntries;this._chooseSplitAxis(n,i,s);const r=this._chooseSplitIndex(n,i,s);if(!r)return;const o=n.children.splice(r,n.children.length-r),a=n.leaf?new E(o):new v(o);a.height=n.height,u(n,this._toBBox),u(a,this._toBBox),t?e.data[t-1].children.push(a):this._splitRoot(n,a)}_splitRoot(e,t){this._data=new v([e,t]),this._data.height=e.height+1,u(this._data,this._toBBox)}_chooseSplitIndex(e,t,n){let s,i,r;s=i=1/0;for(let o=t;o<=n-t;o++){const t=h(e,0,o,this._toBBox),a=h(e,o,n,this._toBBox),l=g(t,a),u=p(t)+p(a);l<s?(s=l,r=o,i=u<i?u:i):l===s&&u<i&&(i=u,r=o)}return r}_chooseSplitAxis(e,t,n){const s=e.leaf?this._compareMinX:c,i=e.leaf?this._compareMinY:f;this._allDistMargin(e,t,n,s)<this._allDistMargin(e,t,n,i)&&e.children.sort(s)}_allDistMargin(e,t,n,s){e.children.sort(s);const i=this._toBBox,r=h(e,0,t,i),o=h(e,n-t,n,i);let a=m(r)+m(o);for(let l=t;l<n-t;l++){const t=e.children[l];d(r,e.leaf?i(t):t),a+=m(r)}for(let l=n-t-1;l>=t;l--){const t=e.children[l];d(o,e.leaf?i(t):t),a+=m(o)}return a}_condense(e){for(let t=e.length-1;t>=0;t--){const n=e.data[t];if(0===n.children.length)if(t>0){const i=e.data[t-1],r=i.children;r.splice((0,s.qh)(r,n,r.length,i.indexHint),1)}else this.clear();else u(n,this._toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this._compareMinX=new Function("a","b",t.join(e[0])),this._compareMinY=new Function("a","b",t.join(e[1])),this._toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function l(e,t){let n=e;for(w.clear();n;){if(!0===n.leaf)for(const e of n.children)t((0,i.zI)(e));else w.pushArray(n.children);n=w.pop()??null}}function u(e,t){h(e,0,e.children.length,t,e)}function h(e,t,n,s,i){i||(i=new E([])),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(let r,o=t;o<n;o++)r=e.children[o],d(i,e.leaf?s(r):r);return i}function d(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function c(e,t){return e.minX-t.minX}function f(e,t){return e.minY-t.minY}function p(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function m(e){return e.maxX-e.minX+(e.maxY-e.minY)}function y(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function g(e,t){const n=Math.max(e.minX,t.minX),s=Math.max(e.minY,t.minY),i=Math.min(e.maxX,t.maxX),r=Math.min(e.maxY,t.maxY);return Math.max(0,i-n)*Math.max(0,r-s)}function _(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function I(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function b(e,t,n,s,i){const r=[t,n];for(;r.length;){const t=r.pop(),n=r.pop();if(t-n<=s)continue;const a=n+Math.ceil((t-n)/s/2)*s;(0,o.q)(e,a,n,t,i),r.push(n,a,a,t)}}const x=new r.A,w=new r.A,F=new r.A,T=new r.A({deallocator:void 0});class B{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class M extends B{constructor(){super(...arguments),this.height=1,this.indexHint=new s.vW}}class E extends M{constructor(e){super(),this.children=e,this.leaf=!0}}class v extends M{constructor(e){super(),this.children=e,this.leaf=!1}}},97495:(e,t,n)=>{n.d(t,{F0:()=>a,Vx:()=>h,e2:()=>c,f:()=>f});var s=n(21265),i=n(82301),r=n(3133),o=n(46575);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.Cb:"esriGeometryPolyline"===e?o.yM:o.WR}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let u=1;function h(e,t){if((0,s.A)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let n=`this${d(t)} = null;`;for(const t in e)n+=`this${d(t)} = ${JSON.stringify(e[t])};`;const s=new Function(`\n      return class AttributesClass$${u++} {\n        constructor() {\n          ${n};\n        }\n      }\n    `)();return()=>new s}catch(n){return()=>({[t]:null,...e})}}function d(e){return l.test(e)?`.${e}`:`["${e}"]`}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,i.o8)(e)}}]}function f(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryBins:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:r.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryAttributeBins:r.P,editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}}}]);