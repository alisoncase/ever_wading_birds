"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[10963,66201,81512,88582,94685],{9137:(e,t,o)=>{o.d(t,{D:()=>l,S:()=>d});var i=o(64682),a=o(50821),r=o(17745),n=o(87118);function l(e,t){let{level:o,class:i,...l}=e;const d=s(o);return(0,n.K)(`h${d}`,{...l,"aria-level":String(d),class:(0,r.Ly)(a.D.heading,i),role:"heading"},t)}function s(e){return(0,i.qE)(Math.ceil(e),1,6)}function d(e){return s(e+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:1))}},17066:(e,t,o)=>{o.r(t),o.d(t,{default:()=>K});var i=o(93800),a=o(62631),r=o(93633),n=o(48602),l=(o(21265),o(50925),o(75269)),s=o(66845),d=o(73210),u=o(97699),m=o(27811),c=o(6946);o(14746);let k=class extends c.default{constructor(e){super(e)}get editedBookmark(){const{bookmark:e}=this;return e?this._get("editedBookmark")||e.clone():null}get customUrl(){return this.editedBookmark?.thumbnail?.isSecureUrl?this.editedBookmark.thumbnail.url:null}set customUrl(e){this._override("customUrl",e)}get screenshotUrl(){return this.editedBookmark?.thumbnail?.isDataURI?this.editedBookmark.thumbnail.url:null}set screenshotUrl(e){this._override("screenshotUrl",e)}get state(){return this._get("state")}set state(e){this.validationState=void 0,this.loading=void 0,this._set("state",e)}get thumbnailState(){return this.editedBookmark?.thumbnail?.url?this.editedBookmark?.thumbnail?.isSecureUrl?"url":"screenshot":"none"}set thumbnailState(e){this._overrideIfSome("thumbnailState",e)}};(0,i._)([(0,n.MZ)()],k.prototype,"bookmark",void 0),(0,i._)([(0,n.MZ)({readOnly:!0})],k.prototype,"editedBookmark",null),(0,i._)([(0,n.MZ)()],k.prototype,"customUrl",null),(0,i._)([(0,n.MZ)()],k.prototype,"screenshotUrl",null),(0,i._)([(0,n.MZ)()],k.prototype,"state",null),(0,i._)([(0,n.MZ)()],k.prototype,"thumbnailState",null),(0,i._)([(0,n.MZ)()],k.prototype,"validationState",void 0),(0,i._)([(0,n.MZ)()],k.prototype,"loading",void 0),k=(0,i._)([(0,l.$)("esri.widgets.Bookmarks.BookmarksUserState")],k);const h=k;var p=o(81512);let b=class extends c.default{constructor(){super(...arguments),this.addBookmarkButton=!1,this.closeButton=!1,this.collapseButton=!1,this.editBookmarkButton=!1,this.filter=!1,this.flow=!0,this.heading=!1,this.thumbnail=!0,this.time=!0}};(0,i._)([(0,n.MZ)({type:Boolean,nonNullable:!0})],b.prototype,"addBookmarkButton",void 0),(0,i._)([(0,n.MZ)({type:Boolean,nonNullable:!0})],b.prototype,"closeButton",void 0),(0,i._)([(0,n.MZ)({type:Boolean,nonNullable:!0})],b.prototype,"collapseButton",void 0),(0,i._)([(0,n.MZ)({type:Boolean,nonNullable:!0})],b.prototype,"editBookmarkButton",void 0),(0,i._)([(0,n.MZ)({type:Boolean,nonNullable:!0})],b.prototype,"filter",void 0),(0,i._)([(0,n.MZ)({type:Boolean,nonNullable:!0})],b.prototype,"flow",void 0),(0,i._)([(0,n.MZ)({type:Boolean,nonNullable:!0})],b.prototype,"heading",void 0),(0,i._)([(0,n.MZ)({type:Boolean,nonNullable:!0})],b.prototype,"thumbnail",void 0),(0,i._)([(0,n.MZ)({type:Boolean,nonNullable:!0})],b.prototype,"time",void 0),b=(0,i._)([(0,l.$)("esri.widgets.Bookmarks.BookmarksVisibleElements")],b);const _=b,v="esri-bookmarks",g=`${v}__authoring`,f=`${v}__bookmark`,w={base:v,noBookmarksHeader:`${v}__no-bookmarks-heading`,noBookmarksDescription:`${v}__no-bookmarks-description`,form:`${v}__form`,list:`${v}__list`,loader:`${v}__loader`,filterNoResults:`${v}__filter-no-results`,formContent:`${v}__form-content`,addBookmarkButton:`${v}__add-bookmark-button`,editBookmarkInput:`${v}__edit-bookmark-input`,addBookmarkInput:`${v}__add-bookmark-input`,dragEnabled:`${v}--drag-enabled`,bookmarkImage:`${v}__image`,bookmarkImageContainer:`${f}-image-container`,bookmarkContent:`${f}-content`,bookmarkContentLabel:`${f}-content-label`,authoring:g,authoringImageContainer:`${g}-image-container`,authoringRefreshThumbnailButton:`${g}-refresh-thumbnail-button`};var B=o(49403),E=o(50821),y=o(9137),S=o(53430),I=o(17745),T=o(76697),M=o(66201),C=o(87118);let x=class extends(r.A.IdentifiableMixin(m.default)){constructor(e,t){super(e,t),this._addInputNode=null,this._editInputNode=null,this._urlEditInputNode=null,this._lastDragDetail=null,this._selectedDragBookmarkUid=null,this._editIncludeTimeExtent=void 0,this._userState=null,this._focusRootFlowItem=!1,this._focusAddFlowItem=!1,this._focusEditFlowItem=!1,this.disabled=!1,this.dragEnabled=!1,this.filterPlaceholder="",this.filterText="",this.headingLevel=2,this.messages=null,this.messagesCommon=null,this.viewModel=new p.default,this.visibleElements=new _,this._onCalciteListOrderChange=e=>{const{_lastDragDetail:t,bookmarks:o}=this,{toEl:i,fromEl:a,dragEl:r,newIndex:n}=e;if(!o.length)return;if(!a||!i||t?.newIndex===n&&t?.dragEl===r&&t?.toEl===i&&t?.fromEl===a)return;this._lastDragDetail=e;const l=Array.from(a.children).filter((e=>e?.matches("calcite-list-item"))).map((e=>e.value));o.sort(((e,t)=>{const o=l.indexOf(e.uid),i=l.indexOf(t.uid);return o>i?1:o<i?-1:0})),this._selectedDragBookmarkUid=r.value}}loadDependencies(){return(0,B.W)({action:()=>o.e(88342).then(o.bind(o,88342)),button:()=>Promise.resolve().then(o.bind(o,20423)),"chip-group":()=>o.e(5732).then(o.bind(o,5732)),chip:()=>o.e(60382).then(o.bind(o,60382)),fab:()=>o.e(25905).then(o.bind(o,25905)),flow:()=>o.e(58739).then(o.bind(o,58739)),"flow-item":()=>Promise.all([o.e(86290),o.e(74597),o.e(99776),o.e(85326)]).then(o.bind(o,85326)),icon:()=>Promise.resolve().then(o.bind(o,92439)),input:()=>o.e(46138).then(o.bind(o,46138)),"input-message":()=>o.e(60380).then(o.bind(o,60380)),label:()=>o.e(60216).then(o.bind(o,60216)),list:()=>Promise.all([o.e(46138),o.e(89939),o.e(18170)]).then(o.bind(o,18170)),"list-item":()=>Promise.all([o.e(73373),o.e(14960)]).then(o.bind(o,28898)),loader:()=>Promise.resolve().then(o.bind(o,23173)),notice:()=>o.e(51132).then(o.bind(o,51132)),scrim:()=>o.e(86836).then(o.bind(o,64455)),switch:()=>o.e(92812).then(o.bind(o,92812)),table:()=>Promise.all([o.e(60382),o.e(78652),o.e(86510)]).then(o.bind(o,86510)),"table-cell":()=>o.e(95305).then(o.bind(o,95305)),"table-header":()=>o.e(34878).then(o.bind(o,34878)),"table-row":()=>o.e(76709).then(o.bind(o,76709))})}get defaultCreateOptions(){return this.viewModel.defaultCreateOptions}set defaultCreateOptions(e){this.viewModel.defaultCreateOptions=e}get defaultEditOptions(){return this.viewModel.defaultEditOptions}set defaultEditOptions(e){this.viewModel.defaultEditOptions=e}get bookmarks(){return this.viewModel.bookmarks}set bookmarks(e){this.viewModel.bookmarks=e}get goToOverride(){return this.viewModel.goToOverride}set goToOverride(e){this.viewModel.goToOverride=e}get icon(){return"bookmark"}set icon(e){this._overrideIfSome("icon",e)}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}endAddBookmark(){this._userState=null}goTo(e){return this.viewModel.goTo(e)}render(){return(0,C.K)("div",{class:this.classes(w.base,E.D.widget,E.D.panel)},this._renderBookmarksContainer())}startAddBookmark(){this._userState=new h({state:"add"}),this._focusAddFlowItem=!0}_renderNoBookmarksContainer(e){const{messages:t,viewModel:{state:o}}=this;return e.length||"loading"===o?null:(0,C.K)("div",{class:E.D.empty,key:"no-bookmarks"},(0,C.K)("calcite-icon",{icon:"bookmark",scale:"l"}),(0,C.K)(y.D,{class:this.classes(E.D.heading,w.noBookmarksHeader),level:this.headingLevel},t?.noBookmarksHeading),(0,C.K)("p",{class:w.noBookmarksDescription},t.noBookmarksDescription))}_renderEditBookmarkFlowItems(){const{_userState:e}=this,t=e?.editedBookmark;return t&&"edit"===e?.state?this._renderEditingBookmark(t):[]}_renderBookmarkItems(e){return e?e.toArray().map((e=>this._renderBookmark(e))):[]}_handleCalciteListDragEnd(e){const{fromEl:t,dragEl:o,oldIndex:i}=e;t.insertBefore(o,t.children[i])}_renderBookmarksContainer(){const{viewModel:{state:e,bookmarks:t},dragEnabled:o,messages:i,disabled:r,filterPlaceholder:n,filterText:l,visible:s,headingLevel:d,visibleElements:{closeButton:u,collapseButton:m,filter:c,heading:k,flow:h},uid:p}=this,b=t.filter(a.Ru),_=b.length?(0,C.K)("calcite-list",{class:w.list,displayMode:"flat",dragEnabled:o,filterEnabled:c,filterPlaceholder:n,filterProps:S.o,filterText:l,group:`bookmarks-${p}`,key:"bookmark-list",label:i.widgetLabel,selectionAppearance:"border",selectionMode:"none",onCalciteListDragEnd:e=>this._handleCalciteListDragEnd(e.detail),onCalciteListFilter:e=>this.filterText=e.currentTarget?.filterText??"",onCalciteListOrderChange:e=>this._onCalciteListOrderChange(e.detail)},this._renderBookmarkItems(b),c?(0,C.K)("div",{class:w.filterNoResults,slot:"filter-no-results"},(0,C.K)("calcite-notice",{kind:"info",open:!0,width:"full"},(0,C.K)("div",{slot:"message"},i.noBookmarksHeading),";")):null):null,v=[(0,C.K)("calcite-flow-item",{afterCreate:this._focusRootFlowItemNode,afterUpdate:this._focusRootFlowItemNode,bind:this,closable:u,closed:!s,collapsible:m,disabled:r,heading:k?i.widgetLabel:void 0,headingLevel:d,loading:"loading"===e,selected:!this._userState?.state,onCalciteFlowItemClose:()=>this.visible=!1},this._renderNoBookmarksContainer(b),_,this._renderAddBookmarkButton()),this._renderAddingBookmark(),this._renderEditBookmarkFlowItems()];return s?h?(0,C.K)("calcite-flow",{key:"root-flow"},v):v:null}_renderAddBookmarkButton(){const{messages:e,_userState:t,disabled:o,viewModel:{view:i,state:a},visibleElements:{addBookmarkButton:r}}=this,n=t?.loading??!1;return i&&"loading"!==a&&r?(0,C.K)("calcite-fab",{appearance:"outline-fill",bind:this,class:w.addBookmarkButton,disabled:o||n,icon:"plus",key:"add-bookmark-item",kind:"neutral",loading:n,onclick:this.startAddBookmark,slot:"fab",text:e.addBookmark,textEnabled:!0,title:e.addBookmark,type:"button"}):null}_renderEditContainer(e){const{messagesCommon:t,visibleElements:{editBookmarkButton:o}}=this,i=`${t.edit} ${this._getBookmarkTitle(e)}`;return o?(0,C.K)("calcite-action",{appearance:"transparent",icon:"pencil",key:"edit-action",onclick:()=>this._showEditBookmarkForm(e),slot:"actions-end",text:i,title:i}):null}_renderBookmarkImage(e,t){return t?(0,C.K)("img",{alt:"",class:w.bookmarkImage,key:"bookmark-image",src:e.thumbnail?.url}):null}_renderBookmarkTimeSwitch(e){const{messages:t,viewModel:{view:o}}=this,{timeExtent:i}=e;return o?.timeExtent??i?(0,C.K)("calcite-label",{layout:"inline-space-between"},t.includeTimeExtent,(0,C.K)("calcite-switch",{checked:!!i,onCalciteSwitchChange:e=>{this._editIncludeTimeExtent=!!e.currentTarget.checked}})):null}_renderEditBookmarkTimeExtent(e){return this._editIncludeTimeExtent?this._renderBookmarkTimeExtent(e):null}_getTimeExtentStrings(e){const{visibleElements:t}=this,{timeExtent:o}=e;if(!o)return{};const{start:i,end:a}=o,r=null!=a&&(null==i||i.getTime()!==a.getTime()),n=i?this._formatDate(i):"",l=i&&t.time?this._formatTime(i):"";return r?{startDate:n,startTime:l,endDate:this._formatDate(a),endTime:t.time?this._formatTime(a):""}:{startDate:n,startTime:l}}_renderTimeExtentDescription(e){const{startDate:t,startTime:o,endDate:i,endTime:a}=this._getTimeExtentStrings(e);if(!t)return"";const r=`${t} ${o}`;return i?`${r} - ${i} ${a}`:r}_renderBookmarkTimeExtent(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{messages:o}=this,{startDate:i,startTime:a,endDate:r,endTime:n}=this._getTimeExtentStrings(e),l=t?null:(0,C.K)("calcite-table-row",{slot:"table-header"},(0,C.K)("calcite-table-header",{heading:o.startDate}),r?(0,C.K)("calcite-table-header",{heading:o.endDate}):null);return i?(0,C.K)("calcite-table",{caption:o.timeExtent,scale:"s"},l,(0,C.K)("calcite-table-row",null,(0,C.K)("calcite-table-cell",null,i," ",a?[(0,C.K)("br",null),a]:null),r?(0,C.K)("calcite-table-cell",null,r,n?[(0,C.K)("br",null),n]:null):null)):null}_renderBookmarkActiveScrim(e,t){return this.viewModel.activeBookmark===e&&t?(0,C.K)("calcite-scrim",{key:"bookmark-active-scrim",loading:!0}):null}_renderBookmarkActiveLoader(e,t){return this.viewModel.activeBookmark!==e||t?null:(0,C.K)("calcite-loader",{class:w.loader,inline:!0,key:"bookmark-active-loader",label:this.messagesCommon.loading})}_renderBookmarkImageIcon(e,t){return this.viewModel.activeBookmark===e||t?null:(0,C.K)("calcite-icon",{icon:"bookmark",key:"bookmark-icon",scale:"s"})}_renderBookmarkThumbnail(e){const t=this.visibleElements.thumbnail&&!!e.thumbnail?.url;return(0,C.K)("div",{class:w.bookmarkImageContainer,slot:"content-start"},this._renderBookmarkActiveScrim(e,t),this._renderBookmarkImage(e,t),this._renderBookmarkActiveLoader(e,t),this._renderBookmarkImageIcon(e,t))}_focusSelectedDragEl(e,t){this._selectedDragBookmarkUid===t.uid&&((0,I.Z6)(e),this._selectedDragBookmarkUid=null)}_renderBookmark(e){return(0,C.K)("calcite-list-item",{afterCreate:t=>this._focusSelectedDragEl(t,e),afterUpdate:t=>this._focusSelectedDragEl(t,e),class:this.classes({[w.dragEnabled]:this.dragEnabled}),description:this._renderTimeExtentDescription(e),key:e.uid,label:this._getBookmarkTitle(e),value:e.uid,onCalciteListItemSelect:()=>this._goToBookmark(e)},this._renderBookmarkThumbnail(e),this._renderBookmarkContent(e),this._renderEditContainer(e))}_renderBookmarkContent(e){return(0,C.K)("div",{class:w.bookmarkContent,slot:"content"},(0,C.K)("span",{class:w.bookmarkContentLabel},this._getBookmarkTitle(e)),this._renderBookmarkTimeExtent(e,!0))}_renderEditingBookmarkName(e){const{messages:t,_userState:o}=this,i="name-required"===o?.validationState;return(0,C.K)("calcite-label",null,t.title,(0,C.K)("calcite-input",{afterCreate:this._storeEditInput,bind:this,class:w.editBookmarkInput,name:"bookmark-name",placeholder:t.titlePlaceholder,required:!0,type:"text",value:e.name}),i?(0,C.K)("calcite-input-message",{icon:"exclamation-mark-triangle",status:"invalid"},t.invalidTitle):null)}_renderEditingBookmarkActions(){const{messagesCommon:e,_userState:t}=this,o=t?.bookmark;return[(0,C.K)("calcite-button",{appearance:"transparent",kind:"danger",onclick:()=>this._deleteBookmark(o),slot:"footer",type:"button",width:"full"},e.delete),(0,C.K)("calcite-button",{appearance:"outline",bind:this,onclick:this._closeEditBookmarkForm,slot:"footer",type:"button",width:"full"},e.cancel),(0,C.K)("calcite-button",{slot:"footer",type:"submit",width:"full"},e.save)]}_handleUrlEditInputChange(){const{_userState:e,_urlEditInputNode:t}=this,o=t?.value;if(!e?.editedBookmark||!o)return;e.validationState=void 0,e.editedBookmark.thumbnail?.isDataURI&&(e.screenshotUrl=e.editedBookmark.thumbnail?.url);const i=new u.o({url:o});i.isSecureUrl&&(e.customUrl=o,e.editedBookmark.thumbnail=i)}_renderEditingTimeExtent(e){const{capabilities:t,view:o}=this.viewModel,{timeExtent:i}=e;return t.time&&(o?.timeExtent??i)?(0,C.K)("div",{key:"edit-bookmark-time-container"},this._renderBookmarkTimeSwitch(e),this._renderEditBookmarkTimeExtent(e)):null}_renderEditingBookmarkImage(e){const{_userState:t}=this,o=t?.thumbnailState,i=e.thumbnail?.isSecureUrl?"url"===o:e.thumbnail?.isDataURI?"screenshot"===o:null;if(i)return this._renderBookmarkImage(e,i)}_renderEditingThumbnail(e){const{_userState:t,visibleElements:o}=this,i=t?.thumbnailState;return o.thumbnail&&"none"!==i?(0,C.K)("div",{class:w.authoringImageContainer},this._renderEditingBookmarkImage(e)):null}_renderUpdateThumbnailButton(){const{visibleElements:e,messages:t,_userState:o}=this,i=o?.thumbnailState;return e.thumbnail&&"screenshot"===i?(0,C.K)("calcite-button",{appearance:"outline",class:w.authoringRefreshThumbnailButton,iconStart:"refresh",key:"update-thumbnail",kind:"neutral",onclick:()=>{this._updateThumbnail()},width:"full"},t.updateThumbnail):null}_renderEditingBookmarkUrlInput(e){const{messages:t,_userState:o}=this,i=e.thumbnail?.url,a=e.thumbnail?.isSecureUrl?i:void 0,r=i&&"absolute-url-required"===o?.validationState,n=o?.thumbnailState;return"url"===n?(0,C.K)("calcite-label",{key:"thumbnail-url-input"},(0,C.K)("calcite-input",{afterCreate:this._storeUrlEditInput,bind:this,name:"bookmark-thumbnail-url",pattern:"https://.*",placeholder:t?`https://<${t.imageUrlPlaceholder}>`:void 0,required:!0,title:t.imageUrlTooltip,type:"text",value:a,onCalciteInputChange:this._handleUrlEditInputChange,onCalciteInputInput:this._handleUrlEditInputChange}),r?(0,C.K)("calcite-input-message",{icon:"exclamation-mark-triangle",status:"invalid"},t.invalidImageUrl):null):null}_renderThumbnailSelector(){const{visibleElements:e,messages:t,_userState:o}=this,i=o?.thumbnailState;return e.thumbnail?(0,C.K)("calcite-label",{key:"thumbnail-chip-group"},t.thumbnail,(0,C.K)("calcite-chip-group",{label:t.thumbnail,selectionMode:"single-persist",onCalciteChipGroupSelect:e=>this._handleThumbnailTypeSelect(e.currentTarget.selectedItems[0].value)},(0,C.K)("calcite-chip",{label:t.screenshot,selected:"screenshot"===i,value:"screenshot"},t.screenshot),(0,C.K)("calcite-chip",{label:t.url,selected:"url"===i,value:"url"},t.url),(0,C.K)("calcite-chip",{label:t.none,selected:"none"===i,value:"none"},t.none))):null}_renderEditingBookmark(e){const{disabled:t,messagesCommon:o,headingLevel:i}=this;return e?(0,C.K)("form",{bind:this,class:w.form,disabled:this.disabled,onsubmit:this._editBookmarkSubmit},(0,C.K)("calcite-flow-item",{afterCreate:this._focusEditFlowItemNode,afterUpdate:this._focusEditFlowItemNode,bind:this,disabled:t,heading:o.edit,headingLevel:i,key:"edit-bookmark-form",selected:"edit"===this._userState?.state,onCalciteFlowItemBack:e=>{e.preventDefault(),this._closeEditBookmarkForm()}},(0,C.K)("div",{class:w.formContent},(0,C.K)("div",{class:w.authoring},this._renderEditingBookmarkName(e),this._renderThumbnailSelector(),this._renderEditingThumbnail(e),this._renderEditingBookmarkUrlInput(e),this._renderUpdateThumbnailButton(),this._renderEditingTimeExtent(e))),this._renderEditingBookmarkActions())):null}_renderAddingBookmarkName(){const{_userState:e,messages:t}=this,o="name-required"===e?.validationState;return(0,C.K)("calcite-label",null,t.title,(0,C.K)("calcite-input",{afterCreate:this._storeAddInput,bind:this,class:w.addBookmarkInput,name:"bookmark-name",placeholder:t.titlePlaceholder,required:!0,type:"text",value:""}),o?(0,C.K)("calcite-input-message",{icon:"exclamation-mark-triangle",status:"invalid"},t.invalidTitle):null)}_renderAddingBookmarkActions(){const{messagesCommon:e}=this;return[(0,C.K)("calcite-button",{appearance:"outline",bind:this,onclick:this._endAddBookmark,slot:"footer",type:"button",width:"full"},e.cancel),(0,C.K)("calcite-button",{slot:"footer",type:"submit",width:"full"},e.add)]}_renderAddingBookmark(){const{disabled:e,messages:t,headingLevel:o,_userState:i}=this;return"add"===i?.state?(0,C.K)("form",{bind:this,class:w.form,disabled:e,onsubmit:this._addBookmarkSubmitClick},(0,C.K)("calcite-flow-item",{afterCreate:this._focusAddFlowItemNode,afterUpdate:this._focusAddFlowItemNode,bind:this,disabled:e,heading:t.addBookmark,headingLevel:o,key:"add-bookmark-form",selected:"add"===this._userState?.state,onCalciteFlowItemBack:e=>{e.preventDefault(),this._endAddBookmark()}},(0,C.K)("div",{class:w.formContent},this._renderAddingBookmarkName()),this._renderAddingBookmarkActions())):null}_getBookmarkTitle(e){return e?.name||this.messagesCommon.untitled}_formatDate(e){return e?(0,s.Yq)(e,{...(0,s.J2)("short-date"),timeZone:this.viewModel.view?.timeZone??d.qU}):""}_formatTime(e){return e?(0,s.Yq)(e,{...(0,s.J2)("long-time"),timeZone:this.viewModel.view?.timeZone??d.qU}):""}_endAddBookmark(){this.endAddBookmark(),this._focusRootFlowItem=!0}_showEditBookmarkForm(e){e&&(this._editIncludeTimeExtent=!!e.timeExtent,this._userState=new h({bookmark:e,state:"edit"}),this._focusEditFlowItem=!0,this.viewModel.goTo(e))}async _createNewScreenshotUrl(){const e=await this.viewModel.createBookmark();return e.thumbnail?.url??null}_storeCurrentUrl(){const{_userState:e}=this,t=e?.editedBookmark?.thumbnail?.url;t&&(e?.editedBookmark?.thumbnail?.isSecureUrl?e.customUrl=t:e?.editedBookmark?.thumbnail?.isDataURI&&(e.screenshotUrl=t))}async _handleThumbnailTypeSelect(e){const{_userState:t}=this;if(!t)return;const{screenshotUrl:o,customUrl:i,editedBookmark:a}=t,r="screenshot"===e?o??await this._createNewScreenshotUrl():"url"===e&&i?i:null;this._storeCurrentUrl(),a&&r&&(a.thumbnail=new u.o({url:r})),t.validationState=void 0,t.thumbnailState=e}_closeEditBookmarkForm(){this._userState=null,this._focusRootFlowItem=!0}_addBookmarkSubmitClick(e){e.preventDefault(),this._addBookmarkSubmit()}async _addBookmarkSubmit(){const{_addInputNode:e,_userState:t,viewModel:o,viewModel:{bookmarks:i}}=this;if(!t)return;const a=e?e.value.trim():null;if(!a)return void(t.validationState="name-required");t.loading=!0;const r=await o.createBookmark();r.name=a,i.add(r),this._endAddBookmark()}async _editBookmarkAndClose(e,t){const{viewModel:o,viewModel:{defaultEditOptions:i}}=this;await o.editBookmark(e,{...i,...t}),this._closeEditBookmarkForm()}_editBookmarkSubmit(e){e.preventDefault();const{_editInputNode:t,_userState:o,_editIncludeTimeExtent:i,_urlEditInputNode:a}=this;if(!o?.bookmark||!o.editedBookmark)return;o.validationState=void 0,o.customUrl=void 0,o.screenshotUrl=void 0;const r=t?.value.trim();if(!r)return void(o.validationState="name-required");o.bookmark.name=r,o.bookmark.thumbnail=o.editedBookmark.thumbnail,i||(o.bookmark.timeExtent=null);const n=o.thumbnailState;if("url"===n&&a){const e=a.value,t=new u.o({url:e});if(!t.isSecureUrl)return void(o.validationState="absolute-url-required");o.bookmark.thumbnail=t}else"none"===n&&(o.bookmark.thumbnail=null);this._editBookmarkAndClose(o.bookmark,{takeScreenshot:!1,captureTimeExtent:i})}_storeEditInput(e){this._editInputNode=e}_storeAddInput(e){this._addInputNode=e}_storeUrlEditInput(e){this._urlEditInputNode=e}_deleteBookmark(e){this._closeEditBookmarkForm(),e&&(this.viewModel.bookmarks.remove(e),e.destroy())}_goToBookmark(e){this.endAddBookmark(),this.viewModel.goTo(e)}async _updateThumbnail(){const{_userState:e,viewModel:t}=this;e&&(e.validationState=void 0,await t.editBookmark(e.editedBookmark,{takeScreenshot:!0,captureViewpoint:!1,captureRotation:!1,captureScale:!1,captureTimeExtent:!1}))}_focusRootFlowItemNode(e){this._focusRootFlowItem&&(this._focusRootFlowItem=!1,(0,I.Z6)(e))}_focusEditFlowItemNode(e){this._focusEditFlowItem&&(this._focusEditFlowItem=!1,(0,I.Z6)(e))}_focusAddFlowItemNode(e){this._focusAddFlowItem&&(this._focusAddFlowItem=!1,(0,I.Z6)(e))}};(0,i._)([(0,n.MZ)()],x.prototype,"_editIncludeTimeExtent",void 0),(0,i._)([(0,n.MZ)({type:h})],x.prototype,"_userState",void 0),(0,i._)([(0,n.MZ)()],x.prototype,"_focusRootFlowItem",void 0),(0,i._)([(0,n.MZ)()],x.prototype,"_focusAddFlowItem",void 0),(0,i._)([(0,n.MZ)()],x.prototype,"_focusEditFlowItem",void 0),(0,i._)([(0,n.MZ)()],x.prototype,"defaultCreateOptions",null),(0,i._)([(0,n.MZ)()],x.prototype,"defaultEditOptions",null),(0,i._)([(0,n.MZ)()],x.prototype,"bookmarks",null),(0,i._)([(0,n.MZ)()],x.prototype,"disabled",void 0),(0,i._)([(0,n.MZ)()],x.prototype,"dragEnabled",void 0),(0,i._)([(0,n.MZ)()],x.prototype,"filterPlaceholder",void 0),(0,i._)([(0,n.MZ)()],x.prototype,"filterText",void 0),(0,i._)([(0,n.MZ)()],x.prototype,"headingLevel",void 0),(0,i._)([(0,n.MZ)()],x.prototype,"goToOverride",null),(0,i._)([(0,n.MZ)()],x.prototype,"icon",null),(0,i._)([(0,n.MZ)()],x.prototype,"label",null),(0,i._)([(0,n.MZ)(),(0,T.G)("esri/widgets/Bookmarks/t9n/Bookmarks")],x.prototype,"messages",void 0),(0,i._)([(0,n.MZ)(),(0,T.G)("esri/t9n/common")],x.prototype,"messagesCommon",void 0),(0,i._)([(0,n.MZ)()],x.prototype,"uiStrings",void 0),(0,i._)([(0,n.MZ)()],x.prototype,"view",null),(0,i._)([(0,n.MZ)({type:p.default}),(0,M.U)(["select-bookmark","bookmark-edit","bookmark-select"])],x.prototype,"viewModel",void 0),(0,i._)([(0,n.MZ)({type:_,nonNullable:!0})],x.prototype,"visibleElements",void 0),(0,i._)([(0,n.MZ)()],x.prototype,"endAddBookmark",null),(0,i._)([(0,n.MZ)()],x.prototype,"startAddBookmark",null),x=(0,i._)([(0,l.$)("esri.widgets.Bookmarks")],x);const K=x},53430:(e,t,o)=>{o.d(t,{o:()=>i});const i=["label","description","metadata"]},66201:(e,t,o)=>{function i(e){return t=>{t.hasOwnProperty("_delegatedEventNames")||(t._delegatedEventNames=t._delegatedEventNames?t._delegatedEventNames.slice():[]);const o=t._delegatedEventNames,i=Array.isArray(e)?e:function(e){return e.split(",").map((e=>e.trim()))}(e);o.push(...i)}}o.d(t,{U:()=>i})},81512:(e,t,o)=>{o.r(t),o.d(t,{default:()=>g});var i=o(93800),a=o(99104),r=o(89129),n=o(74719),l=o(58448),s=o(48602),d=o(32980),u=(o(21265),o(14746),o(75269)),m=o(97699),c=o(85928),k=o(30920);const h=r.default.ofType(c.default),p={width:128,height:128,format:"png"},b={takeScreenshot:!0,captureViewpoint:!0,captureRotation:!0,captureScale:!0,captureTimeExtent:!0},_={time:!0};let v=class extends((0,k.A)(l.A.EventedAccessor)){constructor(e){super(e),this.capabilities={..._},this.activeBookmark=null,this.view=null}destroy(){this.view=null,this._set("activeBookmark",null)}castCapabilities(e){return{..._,...e}}get bookmarks(){return this.view?.map?.bookmarks??new h}set bookmarks(e){this._overrideIfSome("bookmarks",e)}set defaultCreateOptions(e){this._set("defaultCreateOptions",{...b,...e})}get defaultCreateOptions(){return b}set defaultEditOptions(e){this._set("defaultEditOptions",{...b,...e})}get defaultEditOptions(){return b}get state(){const{view:e}=this;return e&&!e.ready?"loading":"ready"}async createBookmark(e){const{view:t,defaultCreateOptions:o,capabilities:i}=this;if(!t)throw new n.default("create-bookmark:invalid-view","Cannot create a bookmark without a view.");const{takeScreenshot:a,screenshotSettings:r,captureViewpoint:l,captureRotation:s,captureScale:d,captureTimeExtent:u}={...o,...e},m=a?await this._createThumbnail(r):void 0,k=i.time&&u&&null!=t.timeExtent?t.timeExtent.clone():void 0;return new c.default({...m&&{thumbnail:m},...u&&{timeExtent:k},...l&&{viewpoint:this._createViewpoint({view:t,captureScale:d,captureRotation:s})}})}async editBookmark(e,t){if(!e)return e;const{view:o,defaultEditOptions:i}=this;if(!o)throw new n.default("edit-bookmark:invalid-view","Cannot edit a bookmark without a view.");const{takeScreenshot:a,screenshotSettings:r,captureViewpoint:l,captureRotation:s,captureScale:d,captureTimeExtent:u}={...i,...t},m=a?await this._createThumbnail(r):void 0;return m&&(e.thumbnail=m),l&&(e.viewpoint=this._createViewpoint({view:o,captureScale:d,captureRotation:s})),u&&null!=o.timeExtent&&(e.timeExtent=o.timeExtent.clone()),this.emit("bookmark-edit",{bookmark:e}),e}goTo(e){const{capabilities:t,view:o}=this;if(!o)throw new n.default("go-to:invalid-view","Cannot go to a bookmark without a view");const i=e?.viewpoint;if(!i)throw new n.default("go-to:invalid-bookmark","Cannot go to a bookmark that does not contain a 'viewpoint'.",{bookmark:e});this._set("activeBookmark",e);const a=this.callGoTo({target:i}),r=e?.timeExtent;return t.time&&r&&(o.timeExtent=r),this.emit("bookmark-select",{bookmark:e}),a.catch((()=>{})).then((()=>this._set("activeBookmark",null))),a}async _createThumbnail(e){const{view:t}=this;if(!t)throw new n.default("bookmark:invalid-view","Cannot create slide thumbnail without a view");const o=await t.takeScreenshot({...p,...e});return new m.o({url:o.dataUrl})}_createViewpoint(e){let{view:t,captureRotation:o,captureScale:i}=e;const r=t.viewpoint?.clone();return new a.default({targetGeometry:t.extent?.clone(),rotation:(o?r?.rotation:null)??0,scale:(i?r?.scale:null)??0})}};(0,i._)([(0,s.MZ)()],v.prototype,"capabilities",void 0),(0,i._)([(0,d.w)("capabilities")],v.prototype,"castCapabilities",null),(0,i._)([(0,s.MZ)({readOnly:!0})],v.prototype,"activeBookmark",void 0),(0,i._)([(0,s.MZ)({type:h})],v.prototype,"bookmarks",null),(0,i._)([(0,s.MZ)()],v.prototype,"defaultCreateOptions",null),(0,i._)([(0,s.MZ)()],v.prototype,"defaultEditOptions",null),(0,i._)([(0,s.MZ)({readOnly:!0})],v.prototype,"state",null),(0,i._)([(0,s.MZ)()],v.prototype,"view",void 0),v=(0,i._)([(0,u.$)("esri.widgets.Bookmarks.BookmarksViewModel")],v);const g=v}}]);