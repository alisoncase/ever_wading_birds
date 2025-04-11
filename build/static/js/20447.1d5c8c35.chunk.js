"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[20447],{20447:(e,t,s)=>{s.r(t),s.d(t,{default:()=>g});var n=s(93800),i=s(49959),r=s(48602),a=(s(21265),s(50925),s(14746),s(75269)),o=s(27811),l=s(45614),u=s(50821),p=s(62150),m=(s(17745),s(76697)),d=s(87118);const c="esri-area-measurement-3d",_={base:c,newMeasurementButton:`${c}__clear-button`};let v=class extends o.default{constructor(e,t){super(e,t),this.messages=null,this.messagesCommon=null,this.messagesUnits=null,this.viewModel=new l.default}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}get visible(){return this.viewModel.visible}set visible(e){this.viewModel.visible=e}get active(){return this.viewModel.active}get analysis(){return this.viewModel.analysis}set analysis(e){this.viewModel.analysis=e}get icon(){return"measure-area"}set icon(e){this._overrideIfSome("icon",e)}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get unitOptions(){return this.viewModel.unitOptions}set unitOptions(e){this.viewModel.unitOptions=e}get unit(){return this.viewModel.unit}set unit(e){this.viewModel.unit=e}render(){const{messages:e,messagesCommon:t,messagesUnits:s,unit:n,unitOptions:r,viewModel:a}=this,{active:o,measurement:l,state:m,supported:c}=a;return(0,d.K)("div",{"aria-label":this.messages.widgetLabel,class:this.classes(_.base,u.D.widget,u.D.panel),key:this,role:"presentation"},this.visible?(0,d.K)(p.I,{active:o,measurementItems:[{key:"direct",title:s.measures.area,value:h(l?.area)},{key:"perimeter",title:e.perimeterLength,value:h(l?.perimeterLength)}],messages:{...e,notApplicable:t.notApplicable},newMeasurementButtonClass:_.newMeasurementButton,state:m,supported:c,unit:n,unitOptions:r,onNewMeasurementClick:()=>{(0,i.ignoreAbortErrors)(this.viewModel.start())},onUnitChange:e=>{this.unit=e}}):null)}};function h(e){return"available"===e?.state?e.text:null}(0,n._)([(0,r.MZ)()],v.prototype,"view",null),(0,n._)([(0,r.MZ)()],v.prototype,"visible",null),(0,n._)([(0,r.MZ)()],v.prototype,"active",null),(0,n._)([(0,r.MZ)({constructOnly:!0,nonNullable:!0})],v.prototype,"analysis",null),(0,n._)([(0,r.MZ)()],v.prototype,"icon",null),(0,n._)([(0,r.MZ)()],v.prototype,"label",null),(0,n._)([(0,r.MZ)(),(0,m.G)("esri/widgets/AreaMeasurement3D/t9n/AreaMeasurement3D")],v.prototype,"messages",void 0),(0,n._)([(0,r.MZ)(),(0,m.G)("esri/t9n/common")],v.prototype,"messagesCommon",void 0),(0,n._)([(0,r.MZ)(),(0,m.G)("esri/core/t9n/Units")],v.prototype,"messagesUnits",void 0),(0,n._)([(0,r.MZ)()],v.prototype,"uiStrings",void 0),(0,n._)([(0,r.MZ)({type:l.default})],v.prototype,"viewModel",void 0),(0,n._)([(0,r.MZ)()],v.prototype,"unitOptions",null),(0,n._)([(0,r.MZ)()],v.prototype,"unit",null),v=(0,n._)([(0,a.$)("esri.widgets.AreaMeasurement3D")],v);const g=v},33209:(e,t,s)=>{s.d(t,{t:()=>c});var n=s(93800),i=s(84190),r=s(48602),a=(s(21265),s(50925),s(14746),s(75269)),o=s(27811),l=s(49403),u=(s(17745),s(76697)),p=s(87118);const m="esri-unit-select",d={base:m,label:`${m}__label`,select:`${m}__select`};let c=class extends o.default{constructor(e,t){super(e,t),this._onSelectChange=e=>{this.onChange(e.currentTarget.value)}}loadDependencies(){return(0,l.W)({label:()=>s.e(60216).then(s.bind(s,60216)),option:()=>s.e(99163).then(s.bind(s,99163)),select:()=>s.e(34280).then(s.bind(s,34280))})}render(){const{messages:e,options:t,selectLabel:s,value:n,_onSelectChange:r}=this;return(0,p.K)("div",{class:d.base,key:"units"},(0,p.K)("calcite-label",{class:d.label},s,(0,p.K)("calcite-select",{class:d.select,label:s,onCalciteSelectChange:r},t.map((t=>(0,p.K)("calcite-option",{key:t,selected:t===n,value:t},(0,i.GT)(t)?e.systems[t]:e.units[t]?.pluralCapitalized))))))}};(0,n._)([(0,r.MZ)()],c.prototype,"options",void 0),(0,n._)([(0,r.MZ)()],c.prototype,"onChange",void 0),(0,n._)([(0,r.MZ)()],c.prototype,"selectLabel",void 0),(0,n._)([(0,r.MZ)()],c.prototype,"value",void 0),(0,n._)([(0,r.MZ)(),(0,u.G)("esri/core/t9n/Units")],c.prototype,"messages",void 0),c=(0,n._)([(0,a.$)("esri.widgets.support.UnitSelect")],c)},62150:(e,t,s)=>{s.d(t,{I:()=>d});var n=s(93800),i=s(48602),r=(s(21265),s(50925),s(14746),s(75269)),a=s(27811),o=s(49403),l=s(33209),u=(s(17745),s(87118));const p="esri-measurement-widget-content",m={base:p,actions:`${p}__actions`,error:`${p}__error`,hint:`${p}__hint`,hintText:`${p}__hint-text`,panelError:`${p}__panel--error`,settings:`${p}__settings`,measurement:`${p}__measurement`,measurementItem:`${p}__measurement-item`,measurementItemDisabled:`${p}__measurement-item--disabled`,measurementItemTitle:`${p}__measurement-item__title`,measurementItemValue:`${p}__measurement-item__value`};let d=class extends a.default{constructor(e,t){super(e,t)}loadDependencies(){return(0,o.W)({button:()=>Promise.resolve().then(s.bind(s,20423))})}render(){return(0,u.K)("div",{class:m.base},this._renderContent())}_renderContent(){const{supported:e,active:t,state:s}=this;switch(s){case"disabled":case"ready":return e?t?this._renderHint():this._renderActions():this._renderUnsupportedMessage();case"measuring":case"measured":return[this._renderSettings(),this._renderMeasurement(),this._renderActions()]}}_renderUnsupportedMessage(){return(0,u.K)("section",{class:m.error,key:"unsupported"},(0,u.K)("p",null,this.messages.unsupported))}_renderHint(){const{messages:e}=this;return(0,u.K)("section",{class:m.hint,key:"hint"},(0,u.K)("p",{class:m.hintText},e.hint))}_renderSettings(){return(0,u.K)("div",{class:m.settings,key:"settings"},(0,u.K)(l.t,{options:this.unitOptions,selectLabel:this.messages.unit,value:this.unit,onChange:this.onUnitChange}))}_renderMeasurement(){return(0,u.K)("section",{class:m.measurement,key:"measurement"},this.measurementItems.map((e=>this._renderMeasurementItem(e))))}_renderMeasurementItem(e){let{key:t,title:s,value:n}=e;return(0,u.K)("div",{class:this.classes(m.measurementItem,null==n&&m.measurementItemDisabled),key:t},(0,u.K)("span",{class:m.measurementItemTitle},s),(0,u.K)("span",{"aria-live":"polite",class:m.measurementItemValue},n??this.messages.notApplicable))}_renderActions(){const{messages:e}=this;return(0,u.K)("div",{class:m.actions},(0,u.K)("calcite-button",{class:this.newMeasurementButtonClass,disabled:"disabled"===this.state,onclick:this.onNewMeasurementClick},e.newMeasurement))}};(0,n._)([(0,i.MZ)()],d.prototype,"active",void 0),(0,n._)([(0,i.MZ)()],d.prototype,"measurementItems",void 0),(0,n._)([(0,i.MZ)()],d.prototype,"messages",void 0),(0,n._)([(0,i.MZ)()],d.prototype,"newMeasurementButtonClass",void 0),(0,n._)([(0,i.MZ)()],d.prototype,"onNewMeasurementClick",void 0),(0,n._)([(0,i.MZ)()],d.prototype,"onUnitChange",void 0),(0,n._)([(0,i.MZ)()],d.prototype,"state",void 0),(0,n._)([(0,i.MZ)()],d.prototype,"supported",void 0),(0,n._)([(0,i.MZ)()],d.prototype,"unit",void 0),(0,n._)([(0,i.MZ)()],d.prototype,"unitOptions",void 0),d=(0,n._)([(0,r.$)("esri.widgets.support.MeasurementWidgetContent")],d)}}]);