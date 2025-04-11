"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[37081,83988],{59462:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var r=s(93800),o=s(74719),n=s(58448),i=s(48602),a=(s(21265),s(50925),s(14746),s(75269));let c=class extends n.A.EventedAccessor{destroy(){this.emit("destroy")}get connectionError(){return this.errorString?new o.default("stream-connection",this.errorString):null}onFeature(e){this.emit("data-received",e)}onMessage(e){this.emit("message-received",e)}};(0,r._)([(0,i.MZ)({readOnly:!0})],c.prototype,"connectionError",null),c=(0,r._)([(0,a.$)("esri.layers.support.StreamConnection")],c);const u=c},83376:(e,t,s)=>{s.d(t,{G:()=>i});var r=s(70351),o=s(64682),n=s(46636);class i{constructor(e,t,s,r){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:128;this._trackIdToObservations=new Map,this._idCounter=0,this._lastPurge=performance.now(),this._addOrUpdated=new Map,this._removed=[],this._maxAge=0,this._timeInfo=s,this._purgeOptions=r,this.store=e,this.objectIdField=t,this.purgeInterval=o,this._useGeneratedIds=this.objectIdField===n.DN}removeById(e){this._removed.push(e)}removeByTrackId(e){const t=this._trackIdToObservations.get(e);if(t)for(const s of t.entries)this._removed.push(s)}add(e){if(this._useGeneratedIds){const t=this._nextId();e.attributes[this.objectIdField]=t,e.objectId=t}else e.objectId=e.attributes[this.objectIdField];const t=e.objectId;if(this._addOrUpdated.set(t,e),this._maxAge=Math.max(this._maxAge,e.attributes[this._timeInfo.startTimeField]),!this._timeInfo.trackIdField)return null==this._trackIdLessObservations&&(this._trackIdLessObservations=new r.A(1e5)),void this._trackIdLessObservations.enqueue(t);const s=e.attributes[this._timeInfo.trackIdField];if(!this._trackIdToObservations.has(s)){const e=null!=this._purgeOptions?.maxObservations?this._purgeOptions.maxObservations:1e3,t=(0,o.qE)(e,0,1e3);this._trackIdToObservations.set(s,new r.A(t))}const n=this._trackIdToObservations.get(s),i=n?.enqueue(t);null!=i&&(this._addOrUpdated.has(i)?this._addOrUpdated.delete(i):this._removed.push(i))}checkForUpdates(){const e=this._getToAdd(),t=this._getToRemove(),s=performance.now(),r=s-this._lastPurge,o=Date.now();r>=this.purgeInterval&&(this._purge(s),this._lastPurge=s);const i=[];if(null!=t)for(const n of t){const e=this.store.removeById(n);null!=e&&i.push(e)}const a=[];if(null!=e){const r=new Set(t??[]);for(const t of e)r.has(t.objectId)||(t.attributes[n.Gm]=s,t.attributes[n.Aw]=o,this.store.add(t),a.push(t))}return!(!a.length&&!i?.length)&&(this.store.update(a,i),!0)}_getToAdd(){if(!this._addOrUpdated.size)return null;const e=new Array(this._addOrUpdated.size);let t=0;return this._addOrUpdated.forEach((s=>e[t++]=s)),this._addOrUpdated.clear(),e}_getToRemove(){const e=this._removed;return this._removed.length?(this._removed=[],e):null}_nextId(){const e=this._idCounter;return this._idCounter=(this._idCounter+1)%4294967294+1,e}_purge(e){const t=this._purgeOptions;null!=t&&(this._purgeSomeByDisplayCount(t),this._purgeByAge(t),this._purgeByAgeReceived(e,t),this._purgeTracks())}_purgeSomeByDisplayCount(e){if(!e.displayCount)return;let t=this.store.size;if(t>e.displayCount){if(this._timeInfo.trackIdField)for(const s of this._trackIdToObservations.values())if(t>e.displayCount&&s.size){const e=s.dequeue();this._removed.push(e),t--}if(null!=this._trackIdLessObservations){let s=t-e.displayCount;for(;s-- >0;){const e=this._trackIdLessObservations.dequeue();null!=e&&this._removed.push(e)}}}}_purgeByAge(e){const t=this._timeInfo?.startTimeField;if(!e.age||!t)return;const s=60*e.age*1e3,r=this._maxAge-s;this.store.forEach((e=>{e.attributes[t]<r&&this._removed.push(e.objectId)}))}_purgeByAgeReceived(e,t){if(!t.ageReceived)return;const s=e-60*t.ageReceived*1e3;this.store.forEach((e=>{e.attributes[n.Gm]<s&&this._removed.push(e.objectId)}))}_purgeTracks(){this._trackIdToObservations.forEach(((e,t)=>{0===e.size&&this._trackIdToObservations.delete(t)}))}}},87551:(e,t,s)=>{s.r(t),s.d(t,{createConnection:()=>C});var r,o,n=s(93800),i=s(23060),a=s(74719),c=s(50925),u=s(49959),d=s(43103),l=(s(21265),s(14746),s(75269)),h=s(93321),g=s(78629),f=s(48602),_=s(30880),p=s(59462);(o=r||(r={}))[o.CONNECTING=0]="CONNECTING",o[o.OPEN=1]="OPEN",o[o.CLOSING=2]="CLOSING",o[o.CLOSED=3]="CLOSED";let y=class extends p.default{constructor(e){super({}),this._outstandingMessages=[],this.errorString=null;const{geometryType:t,spatialReference:s,sourceSpatialReference:r}=e;this._config=e,this._featureZScaler=(0,_.N)(t,r,s),this._open()}normalizeCtorArgs(){return{}}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){super.destroy(),null!=this._websocket&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(null==this._websocket)return"disconnected";switch(this._websocket.readyState){case r.CONNECTING:case r.OPEN:return"connected";case r.CLOSING:case r.CLOSED:return"disconnected"}}sendMessageToSocket(e){null!=this._websocket?this._websocket.send(JSON.stringify(e)):this._outstandingMessages.push(e)}sendMessageToClient(e){this._onMessage(e)}updateCustomParameters(e){this._config.customParameters=e,null!=this._websocket&&this._websocket.close()}async _tryCreateWebSocket(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._config.source.path,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;try{if(this.destroyed)return;const t=(0,d.addQueryParameters)(e,this._config.customParameters??{});this._websocket=await this._createWebSocket(t),this.notifyChange("connectionStatus")}catch(r){const o=t/1e3;return this._config.maxReconnectionAttempts&&s>=this._config.maxReconnectionAttempts?(c.A.getLogger(this).error(new a.default("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(c.A.getLogger(this).error(new a.default("websocket-connection",`Failed to connect. Attempting to reconnect in ${o}s`,r)),await(0,u.after)(t),this._tryCreateWebSocket(e,Math.min(1.5*t,1e3*this._config.maxReconnectionInterval),s+1))}}_setWebSocketJSONParseHandler(e){e.onmessage=e=>{try{const t=JSON.parse(e.data);this._onMessage(t)}catch(t){return void c.A.getLogger(this).error(new a.default("websocket-connection","Failed to parse message, invalid JSON",{error:t}))}}}_createWebSocket(e){return new Promise(((t,s)=>{const r=new WebSocket(e);r.onopen=()=>{if(r.onopen=null,this.destroyed)return r.onclose=null,void r.close();r.onclose=e=>this._onClose(e),r.onerror=e=>this._onError(e),this._setWebSocketJSONParseHandler(r),t(r)},r.onclose=e=>{r.onopen=r.onclose=null,s(e)}}))}async _handshake(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e4;const t=this._websocket;if(null==t)return;const s=(0,u.createResolver)(),o=t.onmessage,{filter:n,outFields:i,spatialReference:d}=this._config;return s.timeout(e),t.onmessage=e=>{let u=null;try{u=JSON.parse(e.data)}catch(r){}u&&"object"==typeof u||(c.A.getLogger(this).error(new a.default("websocket-connection","Protocol violation. Handshake failed - malformed message",e.data)),s.reject(),this.destroy()),u.spatialReference?.wkid!==d?.wkid&&(c.A.getLogger(this).error(new a.default("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${d.wkid}`,e.data)),s.reject(),this.destroy()),"json"!==u.format&&(c.A.getLogger(this).error(new a.default("websocket-connection","Protocol violation. Handshake failed - format is not set",e.data)),s.reject(),this.destroy()),n&&u.filter!==n&&c.A.getLogger(this).error(new a.default("websocket-connection","Tried to set filter, but server doesn't support it")),i&&u.outFields!==i&&c.A.getLogger(this).error(new a.default("websocket-connection","Tried to set outFields, but server doesn't support it")),t.onmessage=o;for(const s of this._outstandingMessages)t.send(JSON.stringify(s));this._outstandingMessages=[],s.resolve()},t.send(JSON.stringify({filter:n,outFields:i,format:"json",spatialReference:{wkid:d.wkid}})),s.promise}_onMessage(e){if(this.onMessage(e),"type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)null!=this._featureZScaler&&this._featureZScaler(t.geometry),this.onFeature(t)}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),c.A.getLogger(this).error("websocket-connection",t)}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),1e3!==e.code&&c.A.getLogger(this).error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open()}};(0,n._)([(0,f.MZ)()],y.prototype,"connectionStatus",null),(0,n._)([(0,f.MZ)()],y.prototype,"errorString",void 0),y=(0,n._)([(0,l.$)("esri.layers.graphics.sources.connections.WebSocketConnection")],y);var m=s(83238),w=s(53512);const v={maxQueryDepth:5,maxRecordCountFactor:3};let b=class extends y{constructor(e){super({...v,...e}),this._buddyServicesQuery=null,this._relatedFeatures=null}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||c.A.getLogger(this).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:s,outFields:r}=this._config;this.destroyed||this._setFilter(s,r)}_onMessage(e){if("attributes"in e){let s;try{s=this._enrich(e),null!=this._featureZScaler&&this._featureZScaler(s.geometry)}catch(t){return void c.A.getLogger(this).error(new a.default("geoevent-connection","Failed to parse message",t))}this.onFeature(s)}else this.onMessage(e)}async _fetchServiceDefinition(e){const t={f:"json",...this._config.customParameters},s=(0,i.default)(e.path,{query:t,responseType:"json"}),r=(await s).data;return this._serviceDefinition=r,r}_fetchWebSocketUrl(e,t){const s=e[0],{urls:r,token:o}=s,n=this._inferWebSocketBaseUrl(r);return(0,d.addQueryParameters)(`${n}/subscribe`,{outSR:""+t.wkid,token:o})}_inferWebSocketBaseUrl(e){if(1===e.length)return e[0];for(const t of e)if(t.includes("wss"))return t;return c.A.getLogger(this).error(new a.default("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const s=this._websocket;if(null==s||null==e&&null==t)return;const r=JSON.stringify({filter:this._serializeFilter(e,t)});let o=!1;const n=(0,u.createResolver)();return s.onmessage=e=>{const t=JSON.parse(e.data);t.filter&&(t.error&&(c.A.getLogger(this).error(new a.default("geoevent-connection","Failed to set service filter",t.error)),this._set("errorString",`Could not set service filter - ${t.error}`),n.reject(t.error)),this._setWebSocketJSONParseHandler(s),o=!0,n.resolve())},s.send(r),setTimeout((()=>{o||(this.destroyed||this._websocket!==s||c.A.getLogger(this).error(new a.default("geoevent-connection","Server timed out when setting filter")),n.reject())}),1e4),n.promise}_serializeFilter(e,t){const s={};if(null==e&&null==t)return s;if(e?.geometry)try{const t=(0,g.fromJSON)(e.geometry);if("extent"!==t.type)throw new a.default(`Expected extent but found type ${t.type}`);s.geometry=JSON.stringify(t.shiftCentralMeridian())}catch(r){c.A.getLogger(this).error(new a.default("geoevent-connection","Encountered an error when setting connection geometryDefinition",r))}return e?.where&&"1 = 1"!==e.where&&"1=1"!==e.where&&(s.where=e.where),null!=t&&(s.outFields=t.join(",")),s}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,s=e.attributes[t],r=this._relatedFeatures.get(s);if(!r)return c.A.getLogger(this).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:o,geometry:n}=r;for(const i in o)e.attributes[i]=o[i];return n&&(e.geometry=n),e.geometry||e.centroid||c.A.getLogger(this).error(new a.default("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,s=this._queryRelatedFeatures(e),r=this._queryArchive(t);await s;const o=await r;if(!o)return;for(const n of o.features)this.onFeature(this._enrich(n))}catch(o){c.A.getLogger(this).error(new a.default("geoevent-connection","Encountered an error when querying buddy services",{error:o}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){const t=new((await Promise.resolve().then(s.bind(s,77969))).default)({url:e}),{capabilities:r}=await t.load(),o=r.query.supportsMaxRecordCountFactor,n=r.query.supportsPagination,i=r.query.supportsCentroid,a=this._config.maxRecordCountFactor,c=t.capabilities.query.maxRecordCount,u=o?c*a:c,d=new w.default;if(d.outFields=this._config.outFields??["*"],d.where=this._config.filter?.where??"1=1",d.returnGeometry=!0,d.returnExceededLimitFeatures=!0,d.outSpatialReference=h.default.fromJSON(this._config.spatialReference),i&&(d.returnCentroid=!0),o&&(d.maxRecordCountFactor=a),n)return d.num=u,t.destroy(),this._queryPages(e,d);const l=await(0,m.eW)(e,d,this._config.sourceSpatialReference);return t.destroy(),l.data}async _queryPages(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;t.start=null!=t.num?r*t.num:null;const{data:o}=await(0,m.eW)(e,t,this._config.sourceSpatialReference);return o.exceededTransferLimit&&r<(this._config.maxQueryDepth??0)?(o.features.forEach((e=>s.push(e))),this._queryPages(e,t,s,r+1)):(s.forEach((e=>o.features.push(e))),o)}_addRelatedFeatures(e){const t=new Map,s=e.features,r=this._serviceDefinition.relatedFeatures.joinField;for(const o of s){const e=o.attributes[r];t.set(e,o)}this._relatedFeatures=t}};b=(0,n._)([(0,l.$)("esri.layers.graphics.sources.connections.GeoEventConnection")],b);const k=b;let S=class extends p.default{constructor(e){super({}),this.connectionStatus="connected",this.errorString=null;const{geometryType:t,spatialReference:s,sourceSpatialReference:r}=e;this._featureZScaler=(0,_.N)(t,r,s)}normalizeCtorArgs(){return{}}updateCustomParameters(e){}sendMessageToSocket(e){}sendMessageToClient(e){if("type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)null!=this._featureZScaler&&this._featureZScaler(t.geometry),this.onFeature(t)}this.onMessage(e)}};function O(e,t){if(null==e&&null==t)return null;const s={};return null!=t&&(s.geometry=t),null!=e&&(s.where=e),s}function C(e,t,s,r,o,n,i,a,c){const u={source:e,sourceSpatialReference:t,spatialReference:s,geometryType:r,filter:O(o,n),maxReconnectionAttempts:i,maxReconnectionInterval:a,customParameters:c};return e?e.path.startsWith("wss://")||e.path.startsWith("ws://")?new y(u):new k(u):new S(u)}(0,n._)([(0,f.MZ)()],S.prototype,"connectionStatus",void 0),(0,n._)([(0,f.MZ)()],S.prototype,"errorString",void 0),S=(0,n._)([(0,l.$)("esri.layers.support.ClientSideConnection")],S)}}]);