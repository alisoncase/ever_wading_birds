"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[10963,48037,66201,88582],{48037:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var i=n(93800),a=(n(88677),n(21265),n(42198)),o=n(45622),l=n(79953),r=n(48602),s=(n(50925),n(14746),n(75269)),d=n(95011),u=n(69943),p=n(27811),c=n(36045),m=n(92660);const h="esri-batch-attribute-form",_=`${h}__group`,b=`${h}__input`,v={base:h,form:`${h}__form`,formHeader:`${h}__form-header`,noticeError:`${h}__notice-error`,label:`${h}__label`,labelTextContent:`${h}__label-text-content`,fieldInput:`${b}`,inputRadio:`${b}--radio`,placeholderRadio:`${b}--radio-placeholder`,inputRadioGroup:`${b}--radio-group`,inputRadioLabel:`${b}--radio-label`,inputDisabled:`${b}--disabled`,inputSwitch:`${b}--switch`,centeredButton:`${h}__centered-button`,description:`${h}__description-text`,dateInputContainer:`${h}__date-input-container`,block:`${h}__block`,group:_,groupSequential:`${_}--sequential`,individualElement:`${_}__individual-element`};var f=n(6946);let g=class extends f.default{constructor(e){super(e),this.errorsForNonVisibleFields=!0,this.featureInfo=!0,this.featureSwitcher=!0}};(0,i._)([(0,r.MZ)({type:Boolean,nonNullable:!0})],g.prototype,"errorsForNonVisibleFields",void 0),(0,i._)([(0,r.MZ)({type:Boolean,nonNullable:!0})],g.prototype,"featureInfo",void 0),(0,i._)([(0,r.MZ)({type:Boolean,nonNullable:!0})],g.prototype,"featureSwitcher",void 0),g=(0,i._)([(0,s.$)("esri.widgets.BatchAttributeForm.VisibleElements")],g);var C=n(36445),I=n(49403),y=n(53826),w=n(50821),F=n(17745),M=n(76697),D=n(66201),k=n(87118),T=n(82368),x=n(99961);const O="data-element-id";let V=class extends p.default{constructor(e,t){super(e,t),this.headingLevel=2,this.messagesCommon=null,this.messages=null,this.featureFormMessages=null,this.readOnly=!1,this.viewModel=new m.default,this.visibleElements=new g,this.groupDisplay="all",this._attemptFocusOnNextRender=!1,this._dateComponentMap=new Map,this._touchedInputs=new Set,this._focusedFieldInput=null,this._batchSwitchInputInitialValues=new Map,this._saveInput=this._saveInput.bind(this),this._onFormSubmit=this._onFormSubmit.bind(this),this._onComponentFocus=this._onComponentFocus.bind(this),this._onComponentBlur=this._onComponentBlur.bind(this),this._afterComponentCreateOrUpdate=this._afterComponentCreateOrUpdate.bind(this),this._afterDateComponentCreate=this._afterDateComponentCreate.bind(this),this._afterDateComponentUpdate=this._afterDateComponentUpdate.bind(this),this._afterRadioGroupCreateOrUpdate=this._afterRadioGroupCreateOrUpdate.bind(this)}initialize(){this.addHandles([(0,l.watch)((()=>this.features),(()=>{this._dateComponentMap.clear();const e=new AbortController;(0,l.whenOnce)((()=>!this.viewModel.updating),e.signal).then((()=>{this._attemptFocusOnNextRender=!0})),this.addHandles((0,a.rE)(e))})),(0,l.watch)((()=>this.viewModel.activeForm),(()=>{this._batchSwitchInputInitialValues.clear()}))])}loadDependencies(){return(0,I.W)({input:()=>n.e(46138).then(n.bind(n,46138)),block:()=>Promise.all([n.e(86290),n.e(74597),n.e(73373),n.e(31853)]).then(n.bind(n,31853)),button:()=>Promise.resolve().then(n.bind(n,20423)),combobox:()=>Promise.all([n.e(60382),n.e(89939),n.e(90609)]).then(n.bind(n,90609)),"combobox-item":()=>n.e(32045).then(n.bind(n,32045)),"combobox-item-group":()=>n.e(32099).then(n.bind(n,32099)),dropdown:()=>n.e(41631).then(n.bind(n,41631)),"dropdown-group":()=>n.e(90553).then(n.bind(n,90553)),"dropdown-item":()=>n.e(54055).then(n.bind(n,54055)),"input-date-picker":()=>Promise.all([n.e(86290),n.e(42015),n.e(57020)]).then(n.bind(n,57020)),"input-number":()=>Promise.all([n.e(9982),n.e(86634)]).then(n.bind(n,9982)),"input-time-picker":()=>Promise.all([n.e(86290),n.e(74597),n.e(42015),n.e(40435)]).then(n.bind(n,40435)),"input-time-zone":()=>Promise.all([n.e(60382),n.e(89939),n.e(90609),n.e(64699)]).then(n.bind(n,64699)),label:()=>n.e(60216).then(n.bind(n,60216)),"input-message":()=>n.e(60380).then(n.bind(n,60380)),loader:()=>Promise.resolve().then(n.bind(n,23173)),notice:()=>n.e(51132).then(n.bind(n,51132)),switch:()=>n.e(92812).then(n.bind(n,92812)),"text-area":()=>n.e(90423).then(n.bind(n,90423)),"radio-button":()=>n.e(35906).then(n.bind(n,35906)),"radio-button-group":()=>n.e(31544).then(n.bind(n,31544))})}get activeFeatureIndex(){return this.viewModel.activeFeatureIndex}set activeFeatureIndex(e){this.viewModel.activeFeatureIndex=e}get disabled(){return this.viewModel.disabled}set disabled(e){this.viewModel.disabled=e}get _effectiveDisabled(){return this.disabled||this.viewModel.updating}get features(){return this.viewModel.features}set features(e){this.viewModel.features=e}get map(){return this.viewModel.map}set map(e){this.viewModel.map=e}get spatialReference(){return this.viewModel.spatialReference}set spatialReference(e){this.viewModel.spatialReference=e}get timeZone(){return this.viewModel.timeZone}set timeZone(e){this.viewModel.timeZone=e}get icon(){return"edit-attributes"}set icon(e){this._overrideIfSome("icon",e)}goToClosestError(){const e=this.viewModel.getFirstVisibleInvalidFieldInput();if(!e)return;const{groupInput:t}=e;t&&(t.open||(t.open=!0)),setTimeout((()=>{if(!this.domNode)return;const t=this.domNode.querySelector(`[data-element-id="${e.input.template.elementId}"]`);t&&(0,F.Z6)(t)}),10)}render(){const{status:e}=this.viewModel;return"failed"===e?this._renderErrorNotice(this.messages.formFailedToLoad):this.viewModel.expressionEvaluationFailed?this._renderErrorNotice(this.messages.expressionEvaluationFailed):this.viewModel.hasLayersWithContingentValues?this._renderErrorNotice(this.messages.unsupportedContingentValues):(0,k.K)("div",{class:this.classes(v.base,w.D.widget,w.D.panel)},"loaded"===e?this._renderForm():"loading"===e?(0,k.K)("calcite-loader",{key:"loader",label:this.messagesCommon?.loading}):null)}_setDateTimeTimeZoneMap(e){const{datePart:t,elementId:n}=e.dataset,i=this._getCalciteElementFromDateTimeTimeZonePicker(e,t);if(!i)return;const a=(0,o.tE)(this._dateComponentMap,`${n}`,(()=>({placeholder:{date:"",time:"",timeZone:""}})));switch(a.placeholder[t]=i.placeholder??"",t){case"date":a.date=e;break;case"time":a.time=e;break;case"timeZone":a.timeZone=e,a.defaultComboboxItemElements=i.selectedItems}"timeZone"===t&&(a.defaultComboboxItemElements=i.selectedItems)}_getCalciteElementFromDateTimeTimeZonePicker(e,t){const n=e.shadowRoot;return n?"timeZone"===t?n.querySelector("calcite-combobox"):n.querySelector("calcite-input-text"):null}_updateDateTimeOrTimeZoneShadowDom(e,t){const{datePart:n,elementId:i}=e.dataset,a=this._dateComponentMap.get(`${i}`);if(!a)return;const o=this._getCalciteElementFromDateTimeTimeZonePicker(e,n);if(o)switch(n){case"date":case"time":o.placeholder=t?this.messages.differentValues:a.placeholder[n];break;case"timeZone":t?(o.value="",o.placeholder=this.messages.differentValues):(!o.selectedItems.length&&a.defaultComboboxItemElements?.length&&(o.selectedItems[0]=a.defaultComboboxItemElements[0]),o.placeholder=a.placeholder[n])}}_renderErrorNotice(e){return(0,k.K)("div",{class:this.classes(v.base,w.D.widget,w.D.panel)},(0,k.K)("calcite-notice",{class:v.noticeError,icon:!0,kind:"warning",open:!0},(0,k.K)("div",{slot:"message"},e)))}_renderForm(){return(0,k.K)("form",{onsubmit:this._onFormSubmit},this._renderInvisibleFieldsError(),this._renderContent())}_renderInvisibleFieldsError(){const{viewModel:e}=this,{hasNonActiveInvalidFeatures:t,activeForm:n}=e;let i;if(!e.submitHasBeenAttempted)return null;if(n.invalidHiddenInputs.length>0)if(i=(0,c.In)(n,e.mode,this.messages),"batch"===this.viewModel.mode){const e=n.invalidHiddenInputs.filter((e=>e.effectiveVisibilityCode===C.qp.HIDDEN_GROUP_VISIBILITY_EXPRESSION_ALL||e.visibilityCode===C.qp.HIDDEN_VISIBILITY_EXPRESSION_ALL));e.length>0?i+=` (${e.map((e=>e.label)).join(", ")})`:i=null}else i+=` (${n.invalidHiddenInputs.map((e=>e.label)).join(", ")})`;else if(t)return null;return i?(0,k.K)("calcite-notice",{class:v.noticeError,icon:!0,kind:"danger",open:!0},(0,k.K)("div",{slot:"message"},i)):null}_renderContent(){if(!this.viewModel.hasVisibleInputs)return[(0,k.K)("calcite-notice",{class:v.noticeError,icon:!0,kind:"warning",open:!0},(0,k.K)("div",{slot:"message"},this.messages.noVisibleFields[this.viewModel.noVisibleElementsReason]))];const{inputs:e}=this.viewModel.activeForm;return e.filter((e=>e.visible)).map((e=>this._renderInput(e)))}_renderInput(e){return(0,C.Et)(e)?this._renderGroupInput(e):(0,C.rf)(e)?this._renderLabeledField(e):void 0}_renderGroupInput(e){const{inputs:t,template:n,open:i}=e,a=t.filter((e=>e.visible)),o=n.label??"";return(0,k.K)("calcite-block",{class:this.classes(v.group,"sequential"===this.groupDisplay?v.groupSequential:null,this.disabled?v.inputDisabled:null),collapsible:!0,description:n.description??void 0,disabled:this._effectiveDisabled,heading:o,headingLevel:this.headingLevel,key:`{${n.elementId}-key}`,label:o,open:i,onCalciteBlockClose:()=>{e.open=!1},onCalciteBlockOpen:()=>{e.open=!0}},a.map((e=>this._renderInput(e))))}_renderLabeledField(e){const{label:t,elementId:n}=e.template,{required:i,dataType:a}=e,o=i?(0,x.V)(this.messages.requiredFieldLabel,{name:t}):t;return(0,k.K)("calcite-label",{"aria-label":o,class:v.label,key:`field--${n}`},(0,k.K)("div",{class:v.labelTextContent,key:"labelTextContainer"},t,i?(0,k.K)("span",{"aria-hidden":"true",title:this.messagesCommon.required},"*"):void 0),"unsupported"!==a?this._renderFieldInput(e):this._renderReadOnlyComponent(e),this._renderAuxiliaryText(e))}_renderFieldInput(e){const t=this.getCommonInputProps(e),{dataType:n}=e;return"date"===n?this._renderDateComponents(e,t):"coded-value"===e.domain?.type?this._renderCodedInputs({input:e,props:t}):"number"===n?this._renderNumberComponent(e,t):this._renderStringComponent(e,t)}_renderAuxiliaryText(e){const{compositeError:t,description:n,submittable:i}=e,a=!i&&t&&(this.viewModel.submitHasBeenAttempted||this._touchedInputs.has(e.template.elementId))?(0,c.HJ)(e,t,this.messages):null;return a?(0,k.K)("calcite-input-message",{icon:!0,status:"invalid"},a):n?(0,k.K)("calcite-input-message",{class:v.description,icon:!1,status:"idle"},n):null}_renderCodedInputs(e){let{input:t,props:n}=e;const i=t.template.input?.type??null,a=t.codedValueOptions;switch(i){case"switch":return this._renderSwitchField({input:t,props:n});case"radio-buttons":return this._renderRadioButtonGroupComponent({input:t,options:a.flat(),props:n});default:return this._renderComboBoxComponent({options:a,props:n,input:t})}}_renderSwitchField(e){let{input:t,props:n}=e;if((this._batchSwitchInputInitialValues.get(t)===C.pg||t.value===C.pg)&&"batch"===this.viewModel.mode){const e={dropdown:{afterCreate:this._afterComponentCreateOrUpdate,afterUpdate:this._afterComponentCreateOrUpdate,disabled:n.readOnly,open:!1,[O]:n[O]},trigger:{appearance:"transparent",iconEnd:"chevron-down",kind:"neutral",slot:"trigger",label:n.label},group:{mode:"single"}};return this._renderDropdownComponent({buttonValue:t.value,dropdownProps:e,options:[{name:this.messages.differentValues,value:C.pg,disabled:!0},...t.codedValueDomainOptions]})}return this._renderSwitchComponent({input:t,props:n})}_renderSwitchComponent(e){let{input:t,props:n}=e;return(0,k.K)("calcite-switch",{...n,checked:!!(0,c.ND)(t.template,"switch")&&t.value===t.template.input.onValue,class:v.inputSwitch,disabled:n.readOnly,onblur:()=>{this._focusedFieldInput=null},onCalciteSwitchChange:e=>{let{currentTarget:t}=e;return this._saveInput(t)}})}_renderDropdownComponent(e){let{buttonValue:t,options:n,dropdownProps:i}=e;const{trigger:a,dropdown:o,group:l}=i;return(0,k.K)("calcite-dropdown",{...o,onblur:()=>{this._focusedFieldInput=null},onfocus:this._onComponentFocus,onCalciteDropdownSelect:e=>{let{currentTarget:t}=e;return this._saveInput(t)}},(0,k.K)("calcite-button",{...a},t===C.pg?this.messages.differentValues:t),(0,k.K)("calcite-dropdown-group",{selectionMode:l.mode},n.map((e=>(0,k.K)("calcite-dropdown-item",{disabled:e.disabled,label:String(e.name),selected:t===e.value},e.name)))))}_renderComboBoxComponent(e){let{input:t,options:n,props:i}=e;const a="INSERT"===this.viewModel.editType,o=this._touchedInputs.has(t?.template?.elementId),l=a&&t.showNoValueOptionEnabled&&!o?()=>{}:i.onblur,r={...i,onblur:l};return(0,k.K)("calcite-combobox",{...r,selectionMode:"single",value:i.placeholder===this.messages.differentValues?C.pg:String(i.value),onCalciteComboboxChange:e=>{let{currentTarget:t}=e;t.value!==C.pg&&this._saveInput(t)}},this.renderComboboxOptionsList({input:t,options:n,props:i}))}renderComboboxOptionsList(e){let{input:t,options:n,props:i}=e;const[a,o]=n.map((e=>e.map((e=>{let{name:t,value:n}=e;return(0,k.K)("calcite-combobox-item",{key:`#${n}`,selected:i.value===n,textLabel:t,value:`${n}`})})))),l=[...a];o.length>0&&l.push((0,k.K)("calcite-combobox-item-group",{key:"unsupported",label:this.featureFormMessages.subtypes.unsupportedDomainGroupTitle},o));const r=i.placeholder===this.messages.differentValues,s=!r&&(0,T.Po)(i.value);return t.showNoValueOptionEnabled&&l.unshift((0,k.K)("calcite-combobox-item",{key:"empty-option",selected:s,textLabel:t.showNoValueLabel||this.messages.empty,value:""})),r&&l.unshift((0,k.K)("calcite-combobox-item",{key:C.pg,selected:!0,textLabel:this.messages.differentValues,value:C.pg})),l}_renderRadioButtonGroupComponent(e){let{input:t,options:n,props:i}=e;const a=n.map((e=>{let{name:n,value:a}=e;return this._renderRadioButtons({label:n,value:a,selected:a===t.value,props:i})}));if(t.showNoValueOptionEnabled){const e="",n=t.showNoValueLabel||this.messages.empty,o=(0,T.Po)(t.value);a.unshift(this._renderRadioButtons({label:n,value:e,selected:o,props:i}))}return(0,k.K)("calcite-radio-button-group",{afterCreate:this._afterRadioGroupCreateOrUpdate,afterUpdate:this._afterRadioGroupCreateOrUpdate,class:v.inputRadioGroup,disabled:i.readOnly,key:`${i.key}-radio-group`,layout:"vertical",name:i.name,required:i.required},a,i.placeholder===this.messages.differentValues?(0,k.K)("calcite-label",{class:v.placeholderRadio,key:i.label,layout:"inline"},(0,k.K)("calcite-radio-button",{checked:!0,class:v.inputRadio,disabled:!0,name:i.placeholder,value:i.placeholder}),i.placeholder):null)}_renderRadioButtons(e){let{value:t,selected:n,label:i,props:a}=e;return(0,k.K)("calcite-label",{class:v.inputRadioLabel,key:a.label,layout:"inline"},(0,k.K)("calcite-radio-button",{...a,afterCreate:void 0,afterUpdate:void 0,checked:n,class:v.inputRadio,disabled:a.readOnly,name:a.label,onblur:()=>{this._focusedFieldInput=null},value:t,onCalciteRadioButtonChange:e=>{let{currentTarget:t}=e;t.checked&&this._saveInput(t)}}),i)}_renderStringComponent(e,t){const{template:n}=e;return n.field.editable?n.input&&"text-area"===n.input.type?(0,k.K)("calcite-text-area",{...t,class:this.classes(v.individualElement),resize:"vertical",value:t.value?String(t.value):"",onCalciteTextAreaInput:e=>{let{currentTarget:t}=e;return this._saveInput(t)}}):(0,k.K)("calcite-input",{...t,class:this.classes(v.individualElement),type:"text",value:t.value?String(t.value):"",onCalciteInputInput:e=>{let{currentTarget:t}=e;return this._saveInput(t)}}):this._renderReadOnlyComponent(e)}_renderNumberComponent(e,t){const n=(0,d.isIntegerField)(e.field);return(0,k.K)("calcite-input-number",{...t,integer:n,type:"number",value:n&&""!==t.value?Math.round(parseFloat(String(t.value))).toString():String(t.value),onCalciteInputNumberInput:e=>{let{currentTarget:t}=e;return this._saveInput(t)}})}_renderReadOnlyComponent(e,t){const n=this.getCommonInputProps(e);return(0,k.K)("calcite-input",{...n,class:this.classes(v.fieldInput,v.inputDisabled,v.individualElement),readOnly:!0,type:"text",value:String(t??n.value??"")})}_renderDateComponents(e,t){const{type:n}=e.field;switch(n){case"date":return this._renderDateFieldComponents(e,t);case"date-only":return this._renderDateOnlyFieldComponent(e,t);case"time-only":return this._renderTimeOnlyFieldComponent(e,t);case"timestamp-offset":return this._renderTimestampOffsetFieldComponents(e,t);default:return this._renderReadOnlyComponent(e,(0,y.ZP)(e.field,t.value,{timeZone:e.effectiveTimeZone,...(0,y.ZT)(e.template.field)}))}}_renderDateOnlyFieldComponent(e,t){const{class:n,key:i,readOnly:a}=t,{rawMax:o,rawMin:l}=e.range;return(0,k.K)("calcite-input-date-picker",{afterCreate:this._afterDateComponentCreate,afterUpdate:this._afterDateComponentUpdate,class:n,"data-date-part":"date","data-element-id":t[O],key:`${i}-date-input`,max:(0,u.Kg)(o)?o:void 0,min:(0,u.Kg)(l)?l:void 0,onblur:()=>{this._focusedFieldInput=null},onfocus:this._onComponentFocus,overlayPositioning:"fixed",readOnly:a,value:e.value===C.pg?"":e.value?String(e.value):"",onCalciteInputDatePickerChange:t=>this._saveValueFromDateComponent(e,t.currentTarget)})}_renderTimeOnlyFieldComponent(e,t){const{class:n,key:i,readOnly:a}=t;return(0,k.K)("calcite-input-time-picker",{afterCreate:this._afterDateComponentCreate,afterUpdate:this._afterDateComponentUpdate,class:n,"data-date-part":"time","data-element-id":t[O],key:`${i}-time-input`,onblur:()=>{this._focusedFieldInput=null},onfocus:this._onComponentFocus,overlayPositioning:"fixed",readOnly:a,value:e.value===C.pg?"":e.value?String(e.value):"",onCalciteInputTimePickerChange:t=>this._saveValueFromDateComponent(e,t.currentTarget)})}_renderTimestampOffsetFieldComponents(e,t){const{class:n,key:i,readOnly:a}=t,{rawMax:o,rawMin:l}=e.range,r=(0,y.T8)(o),s=(0,y.T8)(l),d=(0,y.T8)(e.value===C.pg?"":e.value),u=e.includeTimeOffset,p={afterCreate:this._afterDateComponentCreate,afterUpdate:this._afterDateComponentUpdate,overlayPositioning:"fixed",readOnly:a,[O]:t[O],onfocus:this._onComponentFocus};return(0,k.K)("div",{class:v.dateInputContainer,key:`${i}-date-time-container`},(0,k.K)("calcite-input-date-picker",{...p,class:n,"data-date-part":"date",key:`${i}-date-input`,max:r?.date??void 0,min:s?.date??void 0,onblur:()=>{this._focusedFieldInput=null},value:d.date??"",onCalciteInputDatePickerChange:t=>this._saveValueFromDateComponent(e,t.target)}),(0,k.K)("calcite-input-time-picker",{...p,class:n,"data-date-part":"time",key:`${i}-time-input`,onblur:()=>{this._focusedFieldInput=null},value:d.time??"",onCalciteInputTimePickerChange:t=>this._saveValueFromDateComponent(e,t.target)}),u?(0,k.K)("calcite-input-time-zone",{...p,class:n,"data-date-part":"timeZone",key:`${i}-timezone-input`,onblur:()=>{this._focusedFieldInput=null},value:d.timeZoneOffset??"0",onCalciteInputTimeZoneChange:t=>this._saveValueFromDateComponent(e,t.target)}):null)}_renderDateFieldComponents(e,t){const{class:n,key:i,readOnly:a,min:o,max:l}=t,r=e.effectiveTimeZone,s=(0,y.Q0)(e.value===C.pg?"":e.value,r),d=(0,y.Q0)(l,r),u=(0,y.Q0)(o,r),p=e.includeTime,c={afterCreate:this._afterDateComponentCreate,afterUpdate:this._afterDateComponentUpdate,overlayPositioning:"fixed",readOnly:a,[O]:t[O],onfocus:this._onComponentFocus};return(0,k.K)("div",{class:v.dateInputContainer,key:`${i}-date-time-container`},(0,k.K)("calcite-input-date-picker",{...c,class:n,"data-date-part":"date",key:`${i}-date-input`,max:d?.date??void 0,min:u?.date??void 0,onblur:()=>{this._focusedFieldInput=null},value:s.date??"",onCalciteInputDatePickerChange:t=>this._saveValueFromDateComponent(e,t.target)}),p?(0,k.K)("calcite-input-time-picker",{...c,"data-date-part":"time",key:`${i}-time-input`,onblur:()=>{this._focusedFieldInput=null},step:1,value:s.time??"",onCalciteInputTimePickerChange:t=>{this._saveValueFromDateComponent(e,t.target)}}):null)}getCommonInputProps(e){const{_effectiveDisabled:t}=this,{template:n,valid:i,value:a,minLength:o,maxLength:l,required:r,fieldName:s,editable:d,userHasChangedValue:u,range:{max:p,min:c}}=e,m=!d||t;let h=n.hint??void 0,_=!1;return a===C.pg&&(h=this.messages.differentValues,_=!0),{afterCreate:this._afterComponentCreateOrUpdate,afterUpdate:this._afterComponentCreateOrUpdate,"aria-invalid":i?"false":"true",class:this.classes(v.fieldInput,m?v.inputDisabled:null),status:!u&&!this.viewModel.submitHasBeenAttempted||i?"idle":"invalid",maxLength:l&&l>-1?l:void 0,minLength:o&&o>-1?o:void 0,key:n.elementId,label:s,name:s,max:null!=p?p:void 0,min:null!=c?c:void 0,readOnly:m,onblur:this._onComponentBlur,required:r,placeholder:h,value:_?"":a??"",[O]:n.elementId,onfocus:this._onComponentFocus}}_onFormSubmit(e){e.preventDefault()}_getFieldInputFromHTMLElement(e){return this.viewModel.findFieldInput(e.getAttribute(O))}_afterRadioGroupCreateOrUpdate(e){const t=e.selectedItem,n=e.querySelector("calcite-radio-button"),i=t||n;i&&this._afterComponentCreateOrUpdate(i)}_onComponentFocus(e){const t=e.target,n=this._getFieldInputFromHTMLElement(t);this._touchedInputs.add(n.template.elementId),this._focusedFieldInput=n}_afterComponentCreateOrUpdate(e){const t=this._getFieldInputFromHTMLElement(e),n=this._focusedFieldInput;this._attemptFocusOnNextRender&&n===t&&(this._attemptFocusOnNextRender=!1,(0,F.Z6)(e))}_onComponentBlur(){this._focusedFieldInput=null}_parseValue(e,t){if((0,c.ND)(t.template,"switch")){if("calcite-dropdown"===e.localName&&t.domain)for(const n of t.domain.codedValues)if(n.name===e.selectedItems[0].textContent)return n.code;return e.checked?t.template.input.onValue:t.template.input.offValue}const n=e.value;return null==n||""===n?null:"number"===t.dataType?"-0"===n||"-0."===n||"-0,"===n?n:parseFloat(n):"date"===t.field.type?parseFloat(n):n}_saveInput(e){const t=this._getFieldInputFromHTMLElement(e),{elementId:n}=t.template;if(!t)return;const i=t?.value;if((0,c.ND)(t.template,"switch")&&"single"!==this.viewModel.mode){const e=(0,o.tE)(this._batchSwitchInputInitialValues,t,(()=>t.value));this._batchSwitchInputInitialValues.set(t,null===e?i:e)}const a=this._parseValue(e,t);a!==i&&this.viewModel.setValue(n,a)}async _afterDateComponentCreate(e){const t=this._getFieldInputFromHTMLElement(e);await e.componentOnReady(),this._setDateTimeTimeZoneMap(e),this._updateDateTimeOrTimeZoneShadowDom(e,t.value===C.pg),this._afterComponentCreateOrUpdate(e)}async _afterDateComponentUpdate(e){const{value:t}=this._getFieldInputFromHTMLElement(e);await e.componentOnReady(),this._updateDateTimeOrTimeZoneShadowDom(e,t===C.pg),this._afterComponentCreateOrUpdate(e)}_saveValueFromDateComponent(e,t){const{elementId:n}=e.template,i=e.field.type,a=this._dateComponentMap.get(`${n}`);if(!a)return;const o=e.effectiveTimeZone;let l=e.value===C.pg?void 0:e.value,r=null;"date-only"===i?r=Array.isArray(t.value)?t.value[0]:t.value:"time-only"===i?(l=(0,y.iP)(l),r=(0,y.iP)(t.value)):r="timestamp-offset"===i?null!=t.value?(0,y.Ng)({dateComponent:a.date,timeComponent:a.time,oldValue:l,timeZoneComponent:a.timeZone,defaultTimeZone:o}):null:null!=t.value?(0,y.oh)({oldValue:l,dateComponent:a.date,timeZone:o,timeComponent:a.time?.value===C.pg?void 0:a.time}):null,l!==r&&(null!==r&&t.value?this.viewModel.setValue(`${n}`,r):this.viewModel.setValue(`${n}`,null))}};(0,i._)([(0,r.MZ)()],V.prototype,"activeFeatureIndex",null),(0,i._)([(0,r.MZ)()],V.prototype,"disabled",null),(0,i._)([(0,r.MZ)()],V.prototype,"_effectiveDisabled",null),(0,i._)([(0,r.MZ)()],V.prototype,"features",null),(0,i._)([(0,r.MZ)()],V.prototype,"map",null),(0,i._)([(0,r.MZ)()],V.prototype,"spatialReference",null),(0,i._)([(0,r.MZ)()],V.prototype,"timeZone",null),(0,i._)([(0,r.MZ)()],V.prototype,"headingLevel",void 0),(0,i._)([(0,r.MZ)()],V.prototype,"icon",null),(0,i._)([(0,r.MZ)(),(0,M.G)("esri/t9n/common")],V.prototype,"messagesCommon",void 0),(0,i._)([(0,r.MZ)(),(0,M.G)("esri/widgets/BatchAttributeForm/t9n/BatchAttributeForm")],V.prototype,"messages",void 0),(0,i._)([(0,r.MZ)(),(0,M.G)("esri/widgets/FeatureForm/t9n/FeatureForm")],V.prototype,"featureFormMessages",void 0),(0,i._)([(0,r.MZ)()],V.prototype,"readOnly",void 0),(0,i._)([(0,r.MZ)(),(0,D.U)(["value-change","submit"])],V.prototype,"viewModel",void 0),(0,i._)([(0,r.MZ)({type:g,nonNullable:!0})],V.prototype,"visibleElements",void 0),(0,i._)([(0,r.MZ)()],V.prototype,"groupDisplay",void 0),V=(0,i._)([(0,s.$)("esri.widgets.BatchAttributeForm")],V);const E=V},66201:(e,t,n)=>{function i(e){return t=>{t.hasOwnProperty("_delegatedEventNames")||(t._delegatedEventNames=t._delegatedEventNames?t._delegatedEventNames.slice():[]);const n=t._delegatedEventNames,i=Array.isArray(e)?e:function(e){return e.split(",").map((e=>e.trim()))}(e);n.push(...i)}}n.d(t,{U:()=>i})}}]);