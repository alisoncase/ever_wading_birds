"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[59847],{39426:(e,t,l)=>{l.d(t,{A:()=>n});var s=l(93800),i=l(48602),o=(l(21265),l(50925),l(14746),l(75269)),r=l(27811);let a=class extends r.default{constructor(e,t){super(e,t),this.type=null,this.viewModel=null}};(0,s._)([(0,i.MZ)()],a.prototype,"type",void 0),(0,s._)([(0,i.MZ)()],a.prototype,"viewModel",void 0),a=(0,s._)([(0,o.$)("esri.widgets.ValuePicker.ValuePickerBaseComponent")],a);const n=a},59847:(e,t,l)=>{l.r(t),l.d(t,{default:()=>v});var s=l(93800),i=l(48602),o=(l(21265),l(50925),l(14746),l(75269)),r=l(49403),a=(l(17745),l(87118)),n=l(39426);let u=class extends n.A{constructor(e,t){super(e,t),this.items=null,this.placeholder=null,this.type="combobox"}loadDependencies(){return(0,r.W)({combobox:()=>Promise.all([l.e(60382),l.e(89939),l.e(90609)]).then(l.bind(l,90609)),"combobox-item":()=>l.e(32045).then(l.bind(l,32045))})}get canNext(){return!(!this.items||!this.viewModel)&&this.items.findIndex((e=>{let{value:t}=e;return t===this.viewModel.values?.[0]}))!==this.items.length-1}get canPlay(){return null!=this.viewModel&&!!this.items?.length}get canPrevious(){const{items:e,viewModel:t}=this;return!(!e||!t)&&0!==e.findIndex((e=>{let{value:l}=e;return l===t.values?.[0]}))}render(){const{viewModel:e}=this;if(null==e)return(0,a.K)("div",null);const t=e.values?.[0];return(0,a.K)("div",{class:"esri-value-picker__combobox"},(0,a.K)("calcite-combobox",{disabled:e.disabled,label:this.label,maxItems:10,overlayPositioning:"fixed",placeholder:this.placeholder??void 0,selectionMode:"single",onCalciteComboboxChange:t=>{Array.isArray(t.currentTarget.value)||(null!=e.values?e.values[0]!==t.currentTarget.value&&(e.values=[t.currentTarget.value]):e.values=[t.currentTarget.value])}},this.items?.map(((e,l)=>{let{value:s,label:i}=e;return(0,a.K)("calcite-combobox-item",{key:l,selected:s===t,textLabel:i,value:s})}))))}animate(e){this._step(1,e)}next(){this._step(1)}previous(){this._step(-1)}_step(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{viewModel:l,items:s}=this;if(!s?.length||!l)return;if(!l.values)return void(l.values=[s[0].value]);const i=s.findIndex((e=>{let{value:t}=e;return t===l.values[0]}));if(-1===i)return void(l.values=[s[0].value]);const o=i+e;o<0||o>=s.length?l.loop||t?l.values=[s[1===e?0:s.length-1].value]:"playing"===l.state&&l.pause():l.values=[s[o].value]}};(0,s._)([(0,i.MZ)()],u.prototype,"canNext",null),(0,s._)([(0,i.MZ)()],u.prototype,"canPlay",null),(0,s._)([(0,i.MZ)()],u.prototype,"canPrevious",null),(0,s._)([(0,i.MZ)()],u.prototype,"items",void 0),(0,s._)([(0,i.MZ)()],u.prototype,"placeholder",void 0),(0,s._)([(0,i.MZ)()],u.prototype,"type",void 0),u=(0,s._)([(0,o.$)("esri.widgets.ValuePicker.ValuePickerCombobox")],u);const v=u}}]);