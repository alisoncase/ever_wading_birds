"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[25976,46094],{25976:(t,e,i)=>{i.r(e),i.d(e,{default:()=>E});var s=i(93800),o=(i(88677),i(6946)),r=i(89129),n=i(74719),a=i(50925),l=i(79953),c=i(48602),d=(i(21265),i(14746),i(75269)),u=i(15492),h=i(78076),y=i(78139),p=i(28417),v=i(12711),g=i(53957);const w=-2147208940,_=-2147217146,k=-2147220947;let f=class extends o.default{constructor(t){super(t),this._activeOperationDidSucceed=!1,this._initialValidationsFinished=!1,this._dirtyAreasLayer=null,this._serverVersion=null,this._updatingHandles=new u.U,this._validConstructProperties=!1,this.executionError="",this.extentToValidate="current",this.loadErrors=new r.default}initialize(){const t=async()=>{this.messages||(this.messages=await(0,g.ud)("esri/widgets/UtilityNetworkValidateTopology/t9n/UtilityNetworkValidateTopology"))};t().then((()=>{this.view||(this.view=null),this.utilityNetwork||(this.utilityNetwork=null),this.addHandles([(0,l.watch)((()=>[this.view,this.utilityNetwork]),(async()=>{const{loadErrors:t,messages:{info:{noUtilityNetwork:e,noView:i}}}=this;this._initialValidationsFinished=!1,t.removeAll(),this._validConstructProperties=!0,this._dirtyAreasLayer=null,this._serverVersion=null,"utility"!==this.utilityNetwork?.type&&(this.loadErrors.push(e),a.A.getLogger(this).error(new n.default("utilityNetworkValidateTopology:missing-property",e)),this._validConstructProperties=!1),"2d"!==this.view?.type&&(this.loadErrors.push(i),a.A.getLogger(this).error(new n.default("utilityNetworkValidateTopology:missing-property",i)),this._validConstructProperties=!1),this._validConstructProperties&&(this.utilityNetwork.loaded||await this.utilityNetwork.load().catch((t=>{a.A.getLogger(this).error(t),this._validConstructProperties=!1})),await this._setDirtyAreasLayer()),this._validConstructProperties&&await this._validateNetworkExtension()}),l.initial),(0,l.on)((()=>this.view?.map?.layers),"change",(async()=>{const{loadErrors:t,messages:{info:{noUtilityNetwork:e}}}=this,i=t.find((t=>t===e));this._initialValidationsFinished=!1,i||(t.removeAll(),await this._validateNetworkExtension(),await this._setDirtyAreasLayer()),this._initialValidationsFinished=!0})),(0,v.oQ)(t)])}))}destroy(){this._updatingHandles.destroy()}get state(){return this.loadErrors.length||!this._validConstructProperties?"disabled":this.executionError?"failed":this._updatingHandles.updating?"executing":this._activeOperationDidSucceed?"success":this._initialValidationsFinished?"ready":"loading"}set utilityNetwork(t){this._get("utilityNetwork")!==t&&this._set("utilityNetwork",t)}set view(t){this._get("view")!==t&&this._set("view",t)}async validateTopology(){const{messages:{info:{cannotAcquireVersionLock:t,noDirtyAreasInExtent:e}},utilityNetwork:i,view:s}=this;if(!this.loadErrors.length){this._activeOperationDidSucceed=!1,this._set("executionError","");const o={gdbVersion:i?.gdbVersion,outSpatialReference:s.spatialReference?.clone()||null,validateArea:"current"===this.extentToValidate?s.extent.clone():i.fullExtent.clone()};this._updatingHandles.addPromise(i?.validateTopology(o).then((()=>{this._activeOperationDidSucceed=!0}),(i=>{let s="Error: "+i;if(i instanceof n.default&&i.details?.raw)switch(i.details.raw.extendedCode){case w:s=e;break;case _:case k:s=t;break;default:s=i.details.message}this._set("executionError",s)})))}}async _setDirtyAreasLayer(){const{messages:{info:{noDirtyAreasLayer:t}}}=this,e=this.view?.map.allLayers.items.filter((t=>(0,h.yZ)(t))).find((t=>t.parsedUrl?.path===this.utilityNetwork?.networkSystemLayers.dirtyAreasLayerUrl));e?(this._dirtyAreasLayer=e,await this._dirtyAreasLayer.load(),this._serverVersion=this._dirtyAreasLayer.version??0,this._validConstructProperties=!0):(this.loadErrors.includes(t)||(this.loadErrors.push(t),a.A.getLogger(this).error(new n.default("utilityNetworkValidateTopology:missing-layer",t))),this._validConstructProperties=!1)}async _validateNetworkExtension(){const{messages:{info:{noAdvancedEditingUserTypeExtension:t,noUtilityNetworkServiceUserTypeExtension:e}}}=this,i=await(0,h.wI)(this.utilityNetwork.layerUrl),s=new y.default({url:i});await s.load();const o=s.user?.username??"",r=Number(this._serverVersion)<=11.1?"utilityNetwork":"advediting";if(!await(0,p.RE)(s,o,r)){const i=Number(this._serverVersion)<=11.1?e:t;this.loadErrors.push(i),a.A.getLogger(this).error(new n.default("utilityNetworkValidateTopology:no-user-type-extension",i)),this._validConstructProperties=!1}this._initialValidationsFinished=!0}};(0,s._)([(0,c.MZ)()],f.prototype,"_initialValidationsFinished",void 0),(0,s._)([(0,c.MZ)()],f.prototype,"_dirtyAreasLayer",void 0),(0,s._)([(0,c.MZ)()],f.prototype,"_validConstructProperties",void 0),(0,s._)([(0,c.MZ)({readOnly:!0})],f.prototype,"executionError",void 0),(0,s._)([(0,c.MZ)()],f.prototype,"extentToValidate",void 0),(0,s._)([(0,c.MZ)()],f.prototype,"loadErrors",void 0),(0,s._)([(0,c.MZ)()],f.prototype,"messages",void 0),(0,s._)([(0,c.MZ)({readOnly:!0})],f.prototype,"state",null),(0,s._)([(0,c.MZ)()],f.prototype,"utilityNetwork",null),(0,s._)([(0,c.MZ)()],f.prototype,"view",null),f=(0,s._)([(0,d.$)("esri.widgets.UtilityNetworkValidateTopology.UtilityNetworkValidateTopologyViewModel")],f);const E=f},28417:(t,e,i)=>{i.d(e,{Kw:()=>r,RE:()=>a,Sl:()=>n});var s=i(13248),o=i(23060);async function r(t,e,i){const r=s.id?.findCredential(t.restUrl);if(!r)return null;if("loaded"===t.loadStatus&&""===e&&t.user?.sourceJSON&&!1===i)return t.user.sourceJSON;const n={responseType:"json",query:{f:"json"}};if(i&&(n.query.returnUserLicenseTypeExtensions=!0),""===e){const e=await(0,o.default)(t.restUrl+"/community/self",n);if(e.data){const t=e.data;if(t?.username)return t}return null}const a=await(0,o.default)(t.restUrl+"/community/users/"+e,n);if(a.data){const t=a.data;return t.error?null:t}return null}async function n(t,e,i){const s=await r(t,e,!0);return s?.privileges?.includes(i)??!1}async function a(t,e,i){const s=await r(t,e,!0);return s?.userLicenseTypeExtensions?.includes(i)??!1}},46094:(t,e,i)=>{i.r(e),i.d(e,{default:()=>p});var s=i(93800),o=i(48602),r=(i(21265),i(50925),i(14746),i(75269)),n=i(27811),a=i(49403),l=(i(17745),i(76697)),c=i(87118),d=i(25976);const u="esri-un-validate-topology",h={container:`${u}__container`,content:`${u}__content`,controlsContainer:`${u}__controls-container`,statusIconError:`${u}__status-icon-error`,statusIconSuccess:`${u}__status-icon-success`,statusIconContainer:`${u}__status-icon-container`};let y=class extends n.default{constructor(t,e){super(t,e),this.messages=null,this.viewModel=new d.default}loadDependencies(){return(0,a.W)({action:()=>i.e(88342).then(i.bind(i,88342)),block:()=>Promise.all([i.e(86290),i.e(74597),i.e(73373),i.e(31853)]).then(i.bind(i,31853)),icon:()=>Promise.resolve().then(i.bind(i,92439)),notice:()=>i.e(51132).then(i.bind(i,51132)),option:()=>i.e(99163).then(i.bind(i,99163)),select:()=>i.e(34280).then(i.bind(i,34280)),tooltip:()=>Promise.resolve().then(i.bind(i,75703))})}get extentToValidate(){return this.viewModel.extentToValidate}set extentToValidate(t){this.viewModel.extentToValidate=t}get icon(){return"check-circle"}set icon(t){this._overrideIfSome("icon",t)}get label(){return this.messages?.label??""}set label(t){this._overrideIfSome("label",t)}get utilityNetwork(){return this.viewModel.utilityNetwork}set utilityNetwork(t){this.viewModel.utilityNetwork=t}get view(){return this.viewModel.view}set view(t){this.viewModel.view=t}render(){const{viewModel:t}=this;return"disabled"===t.state?(0,c.K)("div",{class:h.container},(0,c.K)("calcite-block",{class:h.content,collapsible:!1,heading:this.label,open:!0},this._renderLoadErrorStatusIcon(),this._renderLoadErrorsNotices())):(0,c.K)("div",{class:h.container},(0,c.K)("calcite-block",{class:h.content,collapsible:!0,heading:this.label,open:!1},this._renderStatusIcon(),this._renderValidateTopologyAction(),this._renderControls()))}_extentOptionSelectChange(t){this.extentToValidate=t.currentTarget.value}_getLoadErrorMessagesAsNotices(t,e){return(0,c.K)("calcite-notice",{closable:!1,key:"error-notice-"+e,kind:"warning",open:!0,scale:"s"},(0,c.K)("div",{slot:"message"},t))}_handleValidateTopologyAction(){this.viewModel.validateTopology().catch((()=>{}))}_renderControls(){const{viewModel:t}=this;return"failed"===t.state?(0,c.K)("div",{class:h.controlsContainer},this._renderExtentOptionSelect(),this._renderStatusNotice()):this._renderExtentOptionSelect()}_renderExtentOptionSelect(){const{messages:t,viewModel:e}=this;return(0,c.K)("div",{key:"selectExtentDiv"},(0,c.K)("calcite-select",{bind:this,disabled:"loading"===e.state||"executing"===e.state,label:t.input.extentToValidate,onCalciteSelectChange:this._extentOptionSelectChange},(0,c.K)("calcite-option",{value:"current"},t.input.currentExtent),(0,c.K)("calcite-option",{value:"entire"},t.input.entireExtent)))}_renderLoadErrorsNotices(){const{viewModel:t}=this;return(0,c.K)("div",{class:h.controlsContainer,key:"loadErrorsDiv"},t.loadErrors.items.map(this._getLoadErrorMessagesAsNotices))}_renderLoadErrorStatusIcon(){return(0,c.K)("div",{class:h.statusIconContainer,key:"statusDiv",slot:"control"},(0,c.K)("calcite-icon",{class:h.statusIconError,icon:"exclamation-mark-triangle",scale:"s"}))}_renderStatusIcon(){const{messages:t,viewModel:e}=this,i=`${this.id}-validation-status-action`,s=`${this.id}-error-status-icon`,o=`${this.id}-success-status-icon`;return"executing"===e.state?(0,c.K)("div",{key:"statusDivExecuting",slot:"control"},(0,c.K)("calcite-action",{id:i,loading:!0,text:t.status.executing}),(0,c.K)("calcite-tooltip",{overlayPositioning:"fixed",referenceElement:i},(0,c.K)("span",null,t.status.executing))):"success"===e.state?(0,c.K)("div",{afterCreate:t=>{setTimeout((()=>{t.textContent=""}),3500)},class:h.statusIconContainer,key:"statusDivSuccess",slot:"control"},(0,c.K)("calcite-icon",{class:h.statusIconSuccess,icon:"check-circle",id:o,scale:"s"}),(0,c.K)("calcite-tooltip",{referenceElement:o},(0,c.K)("span",null,t.status.success))):"failed"===e.state?(0,c.K)("div",{class:h.statusIconContainer,key:"statusDivFailed",slot:"control"},(0,c.K)("calcite-icon",{class:h.statusIconError,icon:"exclamation-mark-triangle",id:s,scale:"s"}),(0,c.K)("calcite-tooltip",{referenceElement:s},(0,c.K)("span",null,e.executionError))):(0,c.K)("div",{class:h.statusIconContainer,key:"statusDiv",slot:"control"})}_renderStatusNotice(){const{viewModel:t}=this;return(0,c.K)("div",{key:"executionErrorDiv"},(0,c.K)("calcite-notice",{closable:!0,kind:"warning",open:!0,scale:"s"},(0,c.K)("div",{slot:"message"},t.executionError)))}_renderValidateTopologyAction(){const{messages:t,viewModel:e}=this,i=`${this.id}-validation-action`;return(0,c.K)("div",{key:"actionDiv",slot:"control"},(0,c.K)("calcite-action",{bind:this,disabled:"executing"===e.state,icon:"play-f",id:i,loading:"loading"===e.state,onclick:this._handleValidateTopologyAction,text:t.input.validateTopology}),(0,c.K)("calcite-tooltip",{referenceElement:i},(0,c.K)("span",null,"loading"===e.state?t.status.loading:t.input.validateTopology)))}};(0,s._)([(0,o.MZ)()],y.prototype,"extentToValidate",null),(0,s._)([(0,o.MZ)()],y.prototype,"icon",null),(0,s._)([(0,o.MZ)()],y.prototype,"label",null),(0,s._)([(0,o.MZ)(),(0,l.G)("esri/widgets/UtilityNetworkValidateTopology/t9n/UtilityNetworkValidateTopology")],y.prototype,"messages",void 0),(0,s._)([(0,o.MZ)()],y.prototype,"utilityNetwork",null),(0,s._)([(0,o.MZ)()],y.prototype,"view",null),(0,s._)([(0,o.MZ)({type:d.default})],y.prototype,"viewModel",void 0),y=(0,s._)([(0,r.$)("esri.widgets.UtilityNetworkValidateTopology")],y);const p=y}}]);