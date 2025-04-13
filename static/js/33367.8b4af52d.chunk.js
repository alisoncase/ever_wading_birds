"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[10963,16162,33367,66201,72363,88582],{16162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var o=n(93800),i=n(6946),s=n(79953),l=n(48602),a=(n(21265),n(50925),n(14746),n(75269));let d=class extends i.default{constructor(e){super(e),this._viewpointHandle=null,this.group=null}initialize(){this.addHandles((0,s.on)((()=>this.view?.ui),"expand",(e=>{const{target:t}=e;t&&t!==this&&t.expanded&&t.group&&t.group===this.group&&this._collapse()})))}destroy(){this._viewpointHandle=null,this.view=null}set autoCollapse(e){this._set("autoCollapse",e),this._watchViewpoint()}set expanded(e){const t=!!e;this._set("expanded",t);const n=this.view?.ui;n&&n.emit("expand",{target:this}),this._viewpointHandleChange(t)}get state(){return this.view?.ready?"ready":"disabled"}set view(e){this._get("view")!==e&&(this._set("view",e),e&&(0,s.when)((()=>e.ready),(()=>{this.view===e&&this._watchViewpoint()}),{once:!0,initial:!0}))}_viewpointHandleChange(e){this._viewpointHandle&&(e?(0,s.when)((()=>this.view?.stationary),(()=>this._viewpointHandle?.resume()),{once:!0,initial:!0}):this._viewpointHandle.pause())}_watchViewpoint(){const e="viewpoint";this.removeHandles(e),this._viewpointHandle=null;const{autoCollapse:t,view:n}=this;if(!n||!t)return;const o=(0,s.pausable)((()=>"3d"===n.type?n.camera:n.viewpoint),(()=>this._collapse()));this.addHandles(o,e),this._viewpointHandle=o}_collapse(){this.expanded=!1}};(0,o._)([(0,l.MZ)({value:!1})],d.prototype,"autoCollapse",null),(0,o._)([(0,l.MZ)({value:!1})],d.prototype,"expanded",null),(0,o._)([(0,l.MZ)()],d.prototype,"group",void 0),(0,o._)([(0,l.MZ)({readOnly:!0})],d.prototype,"state",null),(0,o._)([(0,l.MZ)({value:null})],d.prototype,"view",null),d=(0,o._)([(0,a.$)("esri.widgets.Expand.ExpandViewModel")],d);const r=d},33367:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var o=n(93800),i=n(79953),s=n(48602),l=(n(21265),n(50925),n(14746),n(75269)),a=n(27811),d=n(16162),r=n(49403),p=n(50821),c=n(72363),h=n(87118),u=n(76697);const _="esri-expand",v={base:_,toggle:`${_}__toggle`,popoverContent:`${_}__popover-content`,panel:`${_}__panel`,panelContent:`${_}__panel-content`,sheet:`${_}__sheet`,panelIconNumber:`${_}__panel-icon-number`,contentContainer:`${_}__content-container`,icon:"esri-collapse__icon",iconFlip:"esri-collapse__icon-flip",iconExpanded:`${_}__icon--expanded`,iconNumber:`${_}__icon-number`,content:`${_}__content`,contentExpanded:`${_}__content--expanded`},g="chevrons-left",w="chevrons-right";let m=class extends a.default{constructor(e,t){super(e,t),this.closeOnEsc=!0,this.collapseTooltip="",this.content="",this.expandTooltip="",this.focusTrapDisabled=!1,this.iconNumber=0,this.messages=null,this.messagesCommon=null,this.mode="auto",this.placement=null,this.viewModel=new d.default,this.toggle=()=>{this.viewModel.expanded=!this.viewModel.expanded},this._handlePopoverClose=e=>{e.target===this._popoverEl&&(this.viewModel.expanded=e.currentTarget.open)},this._handleSheetClose=e=>{this.viewModel.expanded=e.currentTarget.open},this._handlePanelClose=e=>{this.viewModel.expanded=!e.currentTarget.closed},this._handleKeyDown=e=>{this.viewModel.expanded&&"Escape"===e.key&&!this._willCloseOnEsc(e)&&e.preventDefault()},this._storeToggleActionEl=e=>{this._toggleActionEl=e},this._storePopoverEl=e=>{this._popoverEl=e}}initialize(){this.addHandles((0,i.watch)((()=>this.viewModel?.view?.size),(()=>this._popoverEl?.reposition()),i.initial))}loadDependencies(){return(0,r.W)({action:()=>n.e(88342).then(n.bind(n,88342)),icon:()=>Promise.resolve().then(n.bind(n,92439)),panel:()=>Promise.all([n.e(86290),n.e(74597),n.e(99776)]).then(n.bind(n,99776)),popover:()=>Promise.all([n.e(86290),n.e(74597)]).then(n.bind(n,74597)),sheet:()=>Promise.all([n.e(86290),n.e(64582),n.e(62399)]).then(n.bind(n,62399))})}get expandTitle(){const{expanded:e,messagesCommon:t,collapseTooltip:n,expandTooltip:o}=this;return(e?n||t?.collapse:o||t?.expand)??""}get _displaySheet(){switch(this.mode){case"drawer":return!0;case"auto":return"xsmall"===this.viewModel.view?.widthBreakpoint;default:return!1}}get autoCollapse(){return this.viewModel.autoCollapse}set autoCollapse(e){this.viewModel.autoCollapse=e}get collapseIcon(){return w}set collapseIcon(e){this._overrideIfSome("collapseIcon",e)}get expanded(){return this.viewModel.expanded}set expanded(e){this.viewModel.expanded=e}get expandIcon(){return(0,c.isWidget)(this.content)?this.content.icon:g}set expandIcon(e){this._overrideIfSome("expandIcon",e)}get group(){return this.viewModel.group}set group(e){this.viewModel.group=e}get icon(){return null}get label(){return((0,c.isWidget)(this.content)?this.content.label:null)??this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}expand(){this.viewModel.expanded=!0}collapse(){this.viewModel.expanded=!1}render(){const{_displaySheet:e,_toggleActionEl:t,viewModel:{expanded:n},label:o,placement:i}=this;return(0,h.K)("div",{class:this.classes(v.base,p.D.widget)},this._renderToggle(),e?(0,h.K)("calcite-sheet",{class:v.sheet,heightScale:"l",label:o,onkeydown:this._handleKeyDown,open:n,position:"block-end",onCalciteSheetClose:this._handleSheetClose},(0,h.K)("calcite-panel",{class:v.panel,closable:!0,closed:!n,heading:o,onkeydown:this._handleKeyDown,onCalcitePanelClose:this._handlePanelClose},(0,h.K)("div",{class:v.panelContent},this._renderContent()))):t?(0,h.K)("calcite-popover",{afterCreate:this._storePopoverEl,afterUpdate:this._storePopoverEl,focusTrapDisabled:this.focusTrapDisabled,label:o,onkeydown:this._handleKeyDown,open:n,overlayPositioning:"fixed",placement:i??this._getPlacement(),referenceElement:t,onCalcitePopoverClose:this._handlePopoverClose},(0,h.K)("div",{class:v.popoverContent},this._renderContent())):null)}_getPlacement(){const{container:e,view:t}=this,n=e&&t?t.ui.getPosition(e):null;if(!n||"manual"===n)return"auto";const[o,i]=n.split("-");return`${"right"===i?"left":"right"}-${"bottom"===o?"end":"start"}`}_willCloseOnEsc(e){const{closeOnEsc:t}=this;return"function"==typeof t?t(e):t}_renderBadgeNumber(){const{expanded:e,iconNumber:t}=this;return t&&!e?(0,h.K)("span",{class:v.iconNumber,key:"expand__icon-number"},t):null}_renderToggleButton(){const{expanded:e,expandTitle:t,expandIcon:n,collapseIcon:o}=this,i=e?o:n,s=i===g||i===w;return(0,h.K)("calcite-action",{afterCreate:this._storeToggleActionEl,afterUpdate:this._storeToggleActionEl,class:p.D.widgetButton,onclick:this.toggle,scale:"s",text:t,title:t},i?(0,h.K)("calcite-icon",{class:this.classes(v.icon,s&&v.iconFlip),icon:i,scale:"s"}):null)}_renderToggle(){return(0,h.K)("div",{class:v.toggle},this._renderToggleButton(),this._renderBadgeNumber())}_renderContent(){const{content:e}=this;return"string"==typeof e?(0,h.K)("div",{class:v.contentContainer,innerHTML:e,key:"content__string"}):(0,c.isWidget)(e)?(0,h.K)("div",{class:v.contentContainer,key:"content__widget"},e.render()):e instanceof HTMLElement?(0,h.K)("div",{afterCreate:this._attachToNode,bind:e,class:v.contentContainer,key:"content__html-element"}):(0,c.hasDomNode)(e)?(0,h.K)("div",{afterCreate:this._attachToNode,bind:e.domNode,class:v.contentContainer,key:"content__node"}):null}_attachToNode(e){e.appendChild(this)}};(0,o._)([(0,s.MZ)({readOnly:!0})],m.prototype,"expandTitle",null),(0,o._)([(0,s.MZ)()],m.prototype,"_toggleActionEl",void 0),(0,o._)([(0,s.MZ)()],m.prototype,"_displaySheet",null),(0,o._)([(0,s.MZ)()],m.prototype,"autoCollapse",null),(0,o._)([(0,s.MZ)()],m.prototype,"closeOnEsc",void 0),(0,o._)([(0,s.MZ)()],m.prototype,"collapseIcon",null),(0,o._)([(0,s.MZ)()],m.prototype,"collapseTooltip",void 0),(0,o._)([(0,s.MZ)()],m.prototype,"content",void 0),(0,o._)([(0,s.MZ)()],m.prototype,"expanded",null),(0,o._)([(0,s.MZ)()],m.prototype,"expandIcon",null),(0,o._)([(0,s.MZ)()],m.prototype,"expandTooltip",void 0),(0,o._)([(0,s.MZ)()],m.prototype,"focusTrapDisabled",void 0),(0,o._)([(0,s.MZ)()],m.prototype,"group",null),(0,o._)([(0,s.MZ)()],m.prototype,"icon",null),(0,o._)([(0,s.MZ)()],m.prototype,"iconNumber",void 0),(0,o._)([(0,s.MZ)()],m.prototype,"label",null),(0,o._)([(0,s.MZ)(),(0,u.G)("esri/widgets/Expand/t9n/Expand")],m.prototype,"messages",void 0),(0,o._)([(0,s.MZ)(),(0,u.G)("esri/t9n/common")],m.prototype,"messagesCommon",void 0),(0,o._)([(0,s.MZ)()],m.prototype,"mode",void 0),(0,o._)([(0,s.MZ)()],m.prototype,"placement",void 0),(0,o._)([(0,s.MZ)()],m.prototype,"view",null),(0,o._)([(0,s.MZ)({type:d.default})],m.prototype,"viewModel",void 0),m=(0,o._)([(0,l.$)("esri.widgets.Expand")],m);const y=m},66201:(e,t,n)=>{function o(e){return t=>{t.hasOwnProperty("_delegatedEventNames")||(t._delegatedEventNames=t._delegatedEventNames?t._delegatedEventNames.slice():[]);const n=t._delegatedEventNames,o=Array.isArray(e)?e:function(e){return e.split(",").map((e=>e.trim()))}(e);n.push(...o)}}n.d(t,{U:()=>o})},72363:(e,t,n)=>{n.r(t),n.d(t,{accessibleHandler:()=>o.$,additionalAllowedTags:()=>a.j9,classes:()=>a.Ly,cssTransition:()=>a.nk,discardNode:()=>a.N_,getCalciteThemeClass:()=>d.fJ,hasDomNode:()=>p,isActivationKey:()=>a.OU,isDarkTheme:()=>d.g4,isRTL:()=>a.V8,isWidget:()=>r,messageBundle:()=>i.G,onResize:()=>a.EV,renderingSanitizer:()=>a.W5,safeAttrs:()=>a.uM,setCalciteThemeClass:()=>d.hY,setFocus:()=>a.Z6,storeNode:()=>a.cA,tsx:()=>l.K,tsxFragment:()=>l.w,vmEvent:()=>s.U});var o=n(79304),i=n(76697),s=n(66201),l=n(87118),a=n(17745),d=n(5619);function r(e){return e&&"function"==typeof e.render}function p(e){return e&&"function"==typeof e.postMixInProperties&&"function"==typeof e.buildRendering&&"function"==typeof e.postCreate&&"function"==typeof e.startup}}}]);