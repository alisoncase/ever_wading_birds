"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[30544,38690,41543,47859,63924,84657],{10382:(e,t,r)=>{function i(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function n(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function o(e,t,r,i,n,o,s,a,u,d,l,c,h,v,p,g){return[e,t,r,i,n,o,s,a,u,d,l,c,h,v,p,g]}r.d(t,{fA:()=>o,o8:()=>n,vt:()=>i,zK:()=>s});const s=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:s,clone:n,create:i,createView:function(e,t){return new Float64Array(e,t,16)},fromValues:o},Symbol.toStringTag,{value:"Module"}))},28417:(e,t,r)=>{r.d(t,{Kw:()=>o,RE:()=>a,Sl:()=>s});var i=r(13248),n=r(23060);async function o(e,t,r){const o=i.id?.findCredential(e.restUrl);if(!o)return null;if("loaded"===e.loadStatus&&""===t&&e.user?.sourceJSON&&!1===r)return e.user.sourceJSON;const s={responseType:"json",query:{f:"json"}};if(r&&(s.query.returnUserLicenseTypeExtensions=!0),""===t){const t=await(0,n.default)(e.restUrl+"/community/self",s);if(t.data){const e=t.data;if(e?.username)return e}return null}const a=await(0,n.default)(e.restUrl+"/community/users/"+t,s);if(a.data){const e=a.data;return e.error?null:e}return null}async function s(e,t,r){const i=await o(e,t,!0);return i?.privileges?.includes(r)??!1}async function a(e,t,r){const i=await o(e,t,!0);return i?.userLicenseTypeExtensions?.includes(r)??!1}},30544:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var i=r(93800),n=r(89129),o=r(74719),s=r(19455),a=r(81933),u=r(50925),d=r(48602),l=(r(21265),r(14746),r(75269));let c=class extends(s.A.JSONSupportMixin(a.A)){constructor(e){super(e),this.versionManagementService=null,this.featureServiceUrl=null,this.url=null,this.currentVersion=null,this.currentVersionInfo=null,this.versionInfos=[],this.versionableItems=new n.default,this.usePersistentReadSessions=!1,this.state="lock-none"}initialize(){this.url=this.versionManagementService.url,this.featureServiceUrl=this.url.replace(/\/VersionManagementServer/i,"/FeatureServer"),this.addHandles([this.versionableItems.on("before-add",(e=>{if(e.item.featureServiceUrl.toLowerCase()!==this.featureServiceUrl.toLowerCase())return e.preventDefault(),void u.A.getLogger(this).error("#add()","Cannot add versionAdapter, feature service urls do not match.")})),this.versionableItems.on("before-remove",(e=>{if(0===this.versionableItems.items.length&&this.currentVersion&&"name"in this.currentVersion&&"none"!==this.versionManagementService.getLockType(this.currentVersion))return e.preventDefault(),void u.A.getLogger(this).error("#remove()","Cannot remove last versionAdapter.")}))])}load(e){return this.addResolvingPromise(this._setUpState(e)),Promise.resolve(this)}get defaultVersionIdentifier(){return this.versionManagementService.defaultVersionIdentifier}get isDefault(){return!this.currentVersion||!!this.currentVersion&&"name"in this.currentVersion&&this.currentVersion.name===this.defaultVersionIdentifier.name}async getVersionInfos(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(this.versionInfos=await this.versionManagementService.getVersionInfos()),this.versionInfos}async alterVersion(e,t){if(this.currentVersion&&"guid"in this.currentVersion&&e.guid===this.currentVersion.guid)return!1;const r=await this.versionManagementService.alterVersion(e,t);return r&&await this.getVersionInfos(!0),r}async deleteVersion(e){if(this.currentVersion&&"guid"in this.currentVersion&&e.guid===this.currentVersion.guid)return!1;const t=await this.versionManagementService.deleteVersion(e);return t&&await this.getVersionInfos(!0),t}async getVersionInfoExtended(){return this.currentVersion&&"name"in this.currentVersion?this.versionManagementService.getVersionInfoExtended(this.currentVersion):this.versionManagementService.getVersionInfoExtended(this.defaultVersionIdentifier)}async startEditing(){if(this._isDefaultOrHistoricVersion())return{success:!1};if(!this.usePersistentReadSessions){const e=await this.versionManagementService.startReadingWithResult(this.currentVersion);if(!e.success)return e;this.state="lock-read"}const e=await this.versionManagementService.startEditingWithResult(this.currentVersion);return e.success&&(this.state="lock-write"),e}async stopEditing(e){if(this._isDefaultOrHistoricVersion())return{success:!1};const t=await this.versionManagementService.stopEditingWithResult(this.currentVersion,e);if(!t.success)return t;if(this.state="lock-read",!this.usePersistentReadSessions){const e=await this.versionManagementService.stopReadingWithResult(this.currentVersion);return e.success&&(this.state="lock-none"),e}return t}async changeVersion(e){let t=null;if(this.usePersistentReadSessions){if(this._isDefaultOrHistoricVersion(e))e&&"name"in e?(t=await this.versionManagementService.getVersionInfoExtended(e),this.state="public"===t?.access?"lock-none":"lock-read"):this.state="lock-read";else if(!await this.versionManagementService.startReading(e))throw new o.default("Failed to acquire read lock for version: "+e);this._isDefaultOrHistoricVersion(this.currentVersion)||await this.versionManagementService.stopReading(this.currentVersion)}const r=await this.versionManagementService.changeVersionWithResult(this.versionableItems,this.currentVersion,e);let i=!1;return r.forEach(((e,t)=>{i=i||e.success})),i&&(this.currentVersion=e,this.currentVersionInfo=t||await this.getVersionInfoExtended(),this._isDefaultOrHistoricVersion()?this.currentVersion&&"name"in this.currentVersion?this.state="public"===this.currentVersionInfo?.access?"lock-none":"lock-read":this.state="lock-read":this.state="read"!==this.versionManagementService.getLockType(this.currentVersion)?"lock-none":"lock-read"),r}async undo(){return this._isDefaultOrHistoricVersion()?{success:!1}:(this.versionManagementService.undo(this.currentVersion),{success:!0})}async redo(){return this._isDefaultOrHistoricVersion()?{success:!1}:(this.versionManagementService.redo(this.currentVersion),{success:!0})}async _setUpState(e){await this.versionManagementService.load(e),this.state="lock-none",this.currentVersionInfo=await this.getVersionInfoExtended(),this.versionableItems.forEach((e=>{this.currentVersion?"name"in this.currentVersion?(e.gdbVersion=this.currentVersion.name,e.historicMoment=null):(e.historicMoment=this.currentVersion,e.gdbVersion=null):(e.gdbVersion=null,e.historicMoment=null)})),this.usePersistentReadSessions&&(this._isDefaultOrHistoricVersion()?this.currentVersion&&"name"in this.currentVersion?this.state="public"===this.currentVersionInfo?.access?"lock-none":"lock-read":this.state="lock-read":await this.versionManagementService.startReading(this.currentVersion)&&(this.state="lock-read"))}_isDefaultOrHistoricVersion(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentVersion;return!(e&&"name"in e)||e.name===this.versionManagementService.defaultVersionIdentifier.name}};(0,i._)([(0,d.MZ)()],c.prototype,"versionManagementService",void 0),(0,i._)([(0,d.MZ)()],c.prototype,"featureServiceUrl",void 0),(0,i._)([(0,d.MZ)()],c.prototype,"url",void 0),(0,i._)([(0,d.MZ)()],c.prototype,"currentVersion",void 0),(0,i._)([(0,d.MZ)()],c.prototype,"currentVersionInfo",void 0),(0,i._)([(0,d.MZ)()],c.prototype,"versionInfos",void 0),(0,i._)([(0,d.MZ)()],c.prototype,"versionableItems",void 0),(0,i._)([(0,d.MZ)()],c.prototype,"usePersistentReadSessions",void 0),(0,i._)([(0,d.MZ)()],c.prototype,"state",void 0),(0,i._)([(0,d.MZ)({readOnly:!0})],c.prototype,"defaultVersionIdentifier",null),(0,i._)([(0,d.MZ)({readOnly:!0})],c.prototype,"isDefault",null),c=(0,i._)([(0,l.$)("esri.versionManagement.VersioningState")],c);const h=c},31508:(e,t,r)=>{r.r(t),r.d(t,{default:()=>E});var i=r(93800),n=r(6946),o=r(89129),s=r(74719),a=r(50925),u=r(79953),d=r(43103),l=r(48602),c=(r(21265),r(14746),r(75269)),h=r(15492),v=r(78076),p=r(78139),g=r(28417),m=r(46707),f=r(81069),w=r(61048),_=r(30544),S=r(46538),V=r(86349);let y=class extends n.default{constructor(e){super(e),this._portalLookup=new Map,this._updatingHandlesLoad=new h.U,this._updatingHandlesExecute=new h.U,this.advancedEditingUserTypeExtensionLookup=new Map,this.executionError=void 0,this.featureServiceLookup=new Map,this.loadError=void 0,this.serverVersionLookup=new Map,this.serviceNameLookup=new Map,this.userLookup=new Map,this.versionIdentifierLookup=new Map,this.versionInfoLookup=new Map,this.versionAdministratorLookup=new Map,this.versionManagementServiceLookup=new Map,this.versioningStateLookup=new Map,this.view=null,this.versioningStates=null}initialize(){this._viewChangeHandle(),this.addHandles([(0,u.watch)((()=>this.view),(()=>{this._resetAllLookupProperties(),this._viewChangeHandle()})),(0,u.watch)((()=>this.versioningStates),(()=>{this._resetVersioningLookupProperties(),this._setVersioningStatesLookups()}))])}destroy(){this._updatingHandlesLoad.destroy(),this._updatingHandlesExecute.destroy()}get state(){return this._updatingHandlesLoad.updating?"loading":this.loadError?"disabled":this._updatingHandlesExecute.updating?"executing":this.executionError?"failed":"ready"}async alterVersion(e){return this._updatingHandlesExecute.addPromise(this._alterVersionInternal(e))}async changeVersion(e,t,r){return this._updatingHandlesExecute.addPromise(this._changeVersionInternal(e,t,r))}async createVersion(e){return this._updatingHandlesExecute.addPromise(this._createVersionInternal(e))}async deleteVersion(e,t,r){return this._updatingHandlesExecute.addPromise(this._deleteVersionInternal(e,t,r))}async getVersionInfos(e){return this._updatingHandlesExecute.addPromise(this._getVersionInfosInternal(e))}async _alterVersionInternal(e){if("disabled"===this.state)throw this._logError("version-management-view-model:load-error",this.loadError),new s.default("version-management-view-model:load-error",this.loadError);this._setExecutionError();const t=this.versioningStateLookup.get(e.featureServerUrl);if(!t)throw this._logError("version-management-view-model:execution-error","no-versioning-state-found"),new s.default("version-management-view-model:execution-error",this.executionError);if(!this.serverVersionLookup.has(e.featureServerUrl)||this.serverVersionLookup.get(e.featureServerUrl)<=11.1)throw this._logError("version-management-view-model:execution-error","no-valid-enterprise-version"),new s.default("version-management-view-model:execution-error",this.executionError);if(!this.advancedEditingUserTypeExtensionLookup.get(e.featureServerUrl))throw this._logError("version-management-view-model:execution-error","no-advanced-editing-user-type-extension"),new s.default("version-management-view-model:execution-error",this.executionError);const{featureServerUrl:r,versionIdentifier:i,...n}=e,o=await t.alterVersion(i,n).catch((e=>{throw this._logExecutionError(e),e}));return await this.getVersionInfos(r),o}async _changeVersionInternal(e,t,r){if("disabled"===this.state)throw this._logError("version-management-view-model:load-error",this.loadError),new s.default("version-management-view-model:load-error",this.loadError);this._setExecutionError();const i=this.versioningStateLookup.get(e);if(!i)throw this._logError("version-management-view-model:execution-error","no-versioning-state-found"),new s.default("version-management-view-model:execution-error",this.executionError);const n={name:t,guid:r};return await i.changeVersion(n).catch((e=>{throw this._logExecutionError(e),e}))}_updateVersionableItems(e){this._updatingHandlesLoad.addPromise((async()=>{(0,V.createVersionAdapters)(e.added).forEach((e=>{const t=e.featureServiceUrl,r=this.versioningStateLookup.get(t);r&&(r.versionableItems.find((t=>t.versionableItem===e.versionableItem))||r.versionableItems.add(e))})),(0,V.createVersionAdapters)(e.removed).forEach((e=>{const{allLayers:t,allTables:r}=this.view.map,i=e.featureServiceUrl,n=this.versioningStateLookup.get(i);if(!n)return void this._logError("version-management-view-model:execution-error","no-version-management-service-found");const o=e=>("feature"===e.type||"subtype-group"===e.type)&&(e.url?.includes(i)??!1);[...t.filter(o),...r.filter(o)].length||(this.featureServiceLookup.delete(i),this.serviceNameLookup.delete(i),this.versioningStateLookup.delete(i),this.versioningStates.remove(n));const s=n.versionableItems.find((t=>t.versionableItem===e.versionableItem));s&&n.versionableItems.remove(s)}))})())}async _createVersionInternal(e){if("disabled"===this.state)throw this._logError("version-management-view-model:load-error",this.loadError),new s.default("version-management-view-model:load-error",this.loadError);this._setExecutionError();const t=e.featureServerUrl,r=this.versioningStateLookup.get(t);if(!r)throw this._logError("version-management-view-model:execution-error","no-versioning-state-found"),new s.default("version-management-view-model:execution-error",this.executionError);const i=this.advancedEditingUserTypeExtensionLookup.get(e.featureServerUrl),n=this.userLookup.get(t).toUpperCase(),o=this._isEmptyString(e.ownerName)?n:e.ownerName?.trim().toUpperCase();if(o!==n){if(this.serverVersionLookup.get(t)<=11.1)throw this._logError("version-management-view-model:execution-error","versioning-api-error"),new s.default("version-management-view-model:execution-error",this.executionError);if(!i)throw this._logError("version-management-view-model:execution-error","no-advanced-editing-user-type-extension"),new s.default("version-management-view-model:execution-error",this.executionError)}let a=await(this.versioningStateLookup.get(t)?.getVersionInfos());if("SDE"===o?.toUpperCase()&&"DEFAULT"===e.versionName.toUpperCase()||a?.find((t=>t.versionIdentifier.name.toUpperCase()===(o+"."+e.versionName).toUpperCase()||t.versionIdentifier.name.toUpperCase()===(n+"."+e.versionName).toUpperCase())))throw this._logError("version-management-view-model:execution-error","no-valid-version-name"),new s.default("version-management-view-model:execution-error",this.executionError);const u=await r.versionManagementService.createVersion({versionName:e.versionName,access:o!==n?"public":e.access,description:e.description}).catch((e=>{throw this._logExecutionError(e),e}));if(o!==n){const{guid:r,name:i}=u.versionIdentifier,s={featureServerUrl:t,versionIdentifier:{guid:r,name:i},access:e.access,ownerName:o};await this.alterVersion(s)||this.deleteVersion(t,n+"."+e.versionName,u.versionIdentifier.guid)}return await this.getVersionInfos(t),a=await(this.versioningStateLookup.get(t)?.getVersionInfos()),a?.find((e=>e.versionIdentifier.guid===u.versionIdentifier.guid))}async _deleteVersionInternal(e,t,r){if("disabled"===this.state)throw this._logError("version-management-view-model:load-error",this.loadError),new s.default("version-management-view-model:load-error",this.loadError);this._setExecutionError();const i=this.versioningStateLookup.get(e);if(!i)throw this._logError("version-management-view-model:execution-error","no-versioning-state-found"),new s.default("version-management-view-model:execution-error",this.executionError);if(this.serverVersionLookup.get(e)<=11.1)throw this._logError("version-management-view-model:execution-error","versioning-api-error"),new s.default("version-management-view-model:execution-error",this.executionError);if(!this.advancedEditingUserTypeExtensionLookup.get(e))throw this._logError("version-management-view-model:execution-error","no-advanced-editing-user-type-extension"),new s.default("version-management-view-model:execution-error",this.executionError);const n={name:t,guid:r};return await i.deleteVersion(n).catch((e=>{throw this._logExecutionError(e),new s.default("version-management-view-model:execution-error",this.executionError)}))}async _getVersionInfosInternal(e){if("disabled"===this.state)throw this._logError("version-management-view-model:load-error",this.loadError),new s.default("version-management-view-model:load-error",this.loadError);this._setExecutionError();const t=this.featureServiceLookup.get(e)?.featureService;if(!t)throw this._logError("version-management-view-model:execution-error","no-feature-service-found"),new s.default("version-management-view-model:execution-error",this.executionError);t.loaded||await t.load().catch((e=>{throw this._logExecutionError(e),e}));const r=t.url;this.serverVersionLookup.set(r,t.sourceJSON?.currentVersion??0),this.serverVersionLookup.get(r)<=11.1&&this.advancedEditingUserTypeExtensionLookup.set(r,!1);const i=this.userLookup.get(e);this._portalLookup.get(e)&&i?(this.advancedEditingUserTypeExtensionLookup.set(r,await(0,g.RE)(this._portalLookup.get(e),i,"advediting")),this.versionAdministratorLookup.set(r,await(0,g.Sl)(this._portalLookup.get(e),i,"features:user:manageVersions"))):(this.advancedEditingUserTypeExtensionLookup.set(r,!1),this.versionAdministratorLookup.set(r,!1));const n=this.versioningStateLookup.get(e);if(!n)throw this._logError("version-management-view-model:execution-error","no-versioning-state-found"),new s.default("version-management-view-model:execution-error",this.executionError);return n.loaded||await n.load().catch((e=>{throw this._logExecutionError(e),e})),await n.getVersionInfos(!0).catch((e=>{throw this._logExecutionError(e),e}))}_isEmptyString(e){return!e||0===e.trim().length}_logError(e,t){switch(a.A.getLogger(this).error(new s.default(e,t)),e){case"version-management-view-model:load-error":this._setLoadError(t);break;case"version-management-view-model:execution-error":this._setExecutionError(t)}}_logExecutionError(e){this._logError("version-management-view-model:execution-error",e.message)}async _viewChangeHandle(){this._updatingHandlesLoad.addPromise((async()=>{if(this._setLoadError(),!this.view)return void this._setLoadError("no-view-property");if(this.view&&"2d"!==this.view.type)return void this._logError("version-management-view-model:load-error","sceneView-not-supported");this.removeHandles("map-change-handle"),this.addHandles([(0,u.watch)((()=>this.view?.map),(()=>{this._resetAllLookupProperties(),this._mapChangeHandle(this.versioningStates)}))],"map-change-handle");const e=await this._getVersioningStates();await this._mapChangeHandle(e)})())}async _mapChangeHandle(e){this._updatingHandlesLoad.addPromise((async()=>{this._setLoadError(),this.removeHandles("map-layers-tables-change-handle"),this.addHandles([(0,u.on)((()=>this.view?.map.allLayers),"change",(e=>{(e.added.some((e=>{let{type:t}=e;return"feature"===t}))||e.removed.some((e=>{let{type:t}=e;return"feature"===t}))||e.added.some((e=>{let{type:t}=e;return"subtype-group"===t}))||e.removed.some((e=>{let{type:t}=e;return"subtype-group"===t})))&&(this._resetServiceRelatedLookupProperties(),this._propertiesChangeInternal(this.versioningStates),this._updateVersionableItems(e))})),(0,u.on)((()=>this.view?.map.allTables),"change",(e=>{(e.added.some((e=>{let{type:t}=e;return"feature"===t}))||e.removed.some((e=>{let{type:t}=e;return"feature"===t}))||e.added.some((e=>{let{type:t}=e;return"subtype-group"===t}))||e.removed.some((e=>{let{type:t}=e;return"subtype-group"===t})))&&(this._resetServiceRelatedLookupProperties(),this._propertiesChangeInternal(this.versioningStates),this._updateVersionableItems(e))}))],"map-layers-tables-change-handle"),await this._propertiesChangeInternal(e)})())}async _propertiesChangeInternal(e){this._updatingHandlesLoad.addPromise((async()=>{const t=e=>"feature"===e.type||"subtype-group"===e.type,{allLayers:r,allTables:i}=this.view.map;if(this._setLoadError(),this.featureServiceLookup=(0,f.createFeatureServices)([...r.filter(t),...i.filter(t)]),this.featureServiceLookup.size){this._updateFeatureServiceLookup(e),this.serviceNameLookup=new Map;for(const e of this.featureServiceLookup.values()){const{featureService:t,featureService:{url:r}}=e;if(!this.serviceNameLookup.has(r)){if(t.loaded||await t.load().catch((e=>{a.A.getLogger(this).error(e)})),!t.versionManagementServiceUrl){this.featureServiceLookup.delete(r);continue}const e=await(0,v.wI)(r),i=new p.default({authMode:"immediate",url:e});await i.load().catch((e=>{a.A.getLogger(this).error(e)}));const n=i.user?.username;if(!t.loaded||!i.loaded||!n)continue;this.serviceNameLookup.set((0,d.removeTrailingSlash)(r),r.split("/").at(-2)),this.userLookup.set(r,n),this._portalLookup.set(r,i)}}this.removeHandles("versioning-states-change-handle"),e.forEach((e=>this._handleVersioningStateLookupUpdate(e))),await this._updateVersioningStates(e),this.versioningStates=e}else this._logError("version-management-view-model:load-error","no-feature-services")})())}_updateFeatureServiceLookup(e){for(const t of e){const e=t.featureServiceUrl;if(!this.featureServiceLookup.has(e)){const r=new m.default({url:e}),i=t.versionableItems.toArray().flatMap((e=>"network"===e.type?null:e.versionableItem)).filter((e=>!!e));this.featureServiceLookup.set(e,{featureService:r,layers:i})}}}async _updateVersioningStates(e){for(const t of this.featureServiceLookup.values()){const r=t.featureService;if(r.versionManagementServiceUrl){if(!e.find((e=>e.featureServiceUrl===r.url))&&r.versionManagementServiceUrl){const i=new o.default((0,V.createVersionAdapters)(t.layers)),n=new _.default({versionManagementService:new S.default({url:r.versionManagementServiceUrl}),versionableItems:i});e.add(n),this._handleVersioningStateLookupUpdate(n)}await this.getVersionInfos(r.url)}}}async _getVersioningStates(){return this.versioningStates&&this.versioningStates.length?this.versioningStates:this.view?await(0,w.getVersioningStates)(this.view,!1):(this._logError("version-management-view-model:load-error","no-view-property"),new o.default)}_handleVersioningStateLookupUpdate(e){this.versioningStateLookup.set(e.featureServiceUrl,e),this._addHandlesToVersioningState(e),this.versionIdentifierLookup.set(e.featureServiceUrl,e.currentVersionInfo?.versionIdentifier),this.versionManagementServiceLookup.set(e.featureServiceUrl,e.versionManagementService)}async _setVersioningStatesLookups(){this._updatingHandlesLoad.addPromise((async()=>{this.versioningStates&&(this.removeHandles("versioning-states-change-handle"),this._updateFeatureServiceLookup(this.versioningStates),this.versioningStates.forEach((e=>this._handleVersioningStateLookupUpdate(e))),await this._updateVersioningStates(this.versioningStates))})())}_addHandlesToVersioningState(e){this.addHandles([(0,u.watch)((()=>e.versionInfos),(()=>{this.versionInfoLookup.set(e.featureServiceUrl,e.versionInfos)})),(0,u.watch)((()=>e.currentVersionInfo?.versionIdentifier),(()=>{this.versionIdentifierLookup.set(e.featureServiceUrl,e.currentVersionInfo?.versionIdentifier)}))],"versioning-states-change-handle")}_resetVersioningLookupProperties(){this.versionIdentifierLookup=new Map,this.versionInfoLookup=new Map,this.versionManagementServiceLookup=new Map,this.versioningStateLookup=new Map}_resetAllLookupProperties(){this._portalLookup=new Map,this.advancedEditingUserTypeExtensionLookup=new Map,this.serverVersionLookup=new Map,this.userLookup=new Map,this.versioningStates=new o.default,this._resetVersioningLookupProperties(),this._resetServiceRelatedLookupProperties()}_resetServiceRelatedLookupProperties(){this.featureServiceLookup=new Map,this.serviceNameLookup=new Map}_setExecutionError(e){this._set("executionError",e)}_setLoadError(e){this._set("loadError",e)}};(0,i._)([(0,l.MZ)()],y.prototype,"_portalLookup",void 0),(0,i._)([(0,l.MZ)()],y.prototype,"advancedEditingUserTypeExtensionLookup",void 0),(0,i._)([(0,l.MZ)({readOnly:!0})],y.prototype,"executionError",void 0),(0,i._)([(0,l.MZ)()],y.prototype,"featureServiceLookup",void 0),(0,i._)([(0,l.MZ)({readOnly:!0})],y.prototype,"loadError",void 0),(0,i._)([(0,l.MZ)()],y.prototype,"serverVersionLookup",void 0),(0,i._)([(0,l.MZ)()],y.prototype,"serviceNameLookup",void 0),(0,i._)([(0,l.MZ)({readOnly:!0})],y.prototype,"state",null),(0,i._)([(0,l.MZ)()],y.prototype,"userLookup",void 0),(0,i._)([(0,l.MZ)()],y.prototype,"versionIdentifierLookup",void 0),(0,i._)([(0,l.MZ)()],y.prototype,"versionInfoLookup",void 0),(0,i._)([(0,l.MZ)()],y.prototype,"versionAdministratorLookup",void 0),(0,i._)([(0,l.MZ)()],y.prototype,"versionManagementServiceLookup",void 0),(0,i._)([(0,l.MZ)()],y.prototype,"versioningStateLookup",void 0),(0,i._)([(0,l.MZ)()],y.prototype,"view",void 0),(0,i._)([(0,l.MZ)()],y.prototype,"versioningStates",void 0),y=(0,i._)([(0,c.$)("esri.widgets.VersionManagement.VersionManagementViewModel")],y);const E=y},61048:(e,t,r)=>{r.r(t),r.d(t,{createVersioningStates:()=>c,getVersioningStates:()=>v});var i=r(89129),n=r(42198),o=r(50925),s=r(45622),a=r(46707),u=r(30544),d=r(46538),l=r(86349);async function c(e,t){let r;if("layers"in e){const t=(0,l.createVersionAdapters)(e.allTables.concat(e.allLayers).filter((e=>"group"!==e.type)).toArray());e.utilityNetworks&&e.utilityNetworks.forEach((e=>{const r=(0,l.createVersionAdapters)([e]);t.push(...r)})),r=t}else r=new i.default(e);const n=new Map;for(const s of r){const e=n.get(s.featureServiceUrl);e?e.push(s):n.set(s.featureServiceUrl,new i.default([s]))}const o=new i.default;for(const[i,s]of n){const e=new a.default({url:i});if(await e.load(),!e.versionManagementServiceUrl)continue;const r=new d.default({url:e.versionManagementServiceUrl});o.push(new u.default({versionManagementService:r,versionableItems:s,usePersistentReadSessions:t}))}return o}const h=new Map;async function v(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const r=await c(e.map,t);return(0,s.tE)(h,e,(()=>(e.addHandles((0,n.hA)((()=>{h.delete(e),r.forEach((e=>e.destroy()))}))),r.forEach((e=>e.load().catch((e=>{o.A.getLogger("esri.versionManagement.VersioningState").error("Failed to load Versioning State",e)})))),r)))}},66509:(e,t,r)=>{function i(){return[0,0,0,1]}function n(e){return[e[0],e[1],e[2],e[3]]}function o(e,t,r,i){return[e,t,r,i]}r.d(t,{fA:()=>o,o8:()=>n,vt:()=>i,zK:()=>s});const s=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:s,clone:n,create:i,fromValues:o},Symbol.toStringTag,{value:"Module"}))},81069:(e,t,r)=>{r.r(t),r.d(t,{createFeatureServices:()=>s});var i=r(65073),n=r(46707);const o=(e,t)=>{for(const r of e)if("feature"===r.type||"subtype-group"===r.type){if(!r.url)continue;const e=(0,i.qg)(r.url).url.path,o=t.get(e);if(o)o.layers.push(r);else{const i=new n.default({url:e}),o=[r];t.set(e,{featureService:i,layers:o})}}else"group"===r.type&&o(r.layers.filter((e=>"feature"===e.type||"subtype-group"===e.type||"group"===e.type)),t)};function s(e){const t=new Map;return o(e,t),t}}}]);