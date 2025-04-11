"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[20102,33737,79538,92471],{23708:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(93800),i=n(48602),o=(n(21265),n(50925),n(14746),n(75269)),l=n(78076),a=n(76713),u=n(82368);let s=class extends a.A{constructor(e){super(e),this.arcadeEditType="NA",this.editableExpressionExecutor=null}get editable(){return!!this.layerAllowsEdits&&(this.evaluatedEditableExpression??!0)}get evaluatedEditableExpression(){const{editableExpressionExecutor:e}=this;return null!=e?!!e.lastEvaluatedValue:null}get layerAllowsEdits(){const{layer:e}=this;if(!e)return!1;const t=(0,l.BR)(e),n=t?.operations.supportsEditing,r=(0,u.of)(t,this.arcadeEditType);return!(!n||!r)}};(0,r._)([(0,i.MZ)()],s.prototype,"arcadeEditType",void 0),(0,r._)([(0,i.MZ)()],s.prototype,"editable",null),(0,r._)([(0,i.MZ)()],s.prototype,"editableExpressionExecutor",void 0),(0,r._)([(0,i.MZ)()],s.prototype,"evaluatedEditableExpression",null),(0,r._)([(0,i.MZ)()],s.prototype,"layerAllowsEdits",null),s=(0,r._)([(0,o.$)("esri.widgets.FeatureForm.EditableInput")],s);const d=s},39652:(e,t,n)=>{function r(e){const{attributes:t,sourceLayer:n}=e??{},r=n&&"displayField"in n?n.displayField:null,i=r?t?.[r]:null,o=null!=i?JSON.stringify(i):null,l=e?.getObjectId()?.toString();return o||l||""}n.d(t,{R:()=>r})},41327:(e,t,n)=>{n.d(t,{Au:()=>F,CU:()=>D,Et:()=>b,Gq:()=>L,H1:()=>V,HG:()=>O,Iy:()=>E,Kl:()=>Q,Kn:()=>P,LZ:()=>A,TN:()=>N,U3:()=>Y,Ve:()=>k,XI:()=>Z,bx:()=>I,cU:()=>w,k_:()=>T,lB:()=>G,l_:()=>z,n4:()=>H,nT:()=>v,oc:()=>U,qG:()=>q,rf:()=>h,s9:()=>$,t6:()=>R,tM:()=>j,vp:()=>M,wr:()=>x});n(88677);var r=n(62631),i=n(7951),o=n(82301),l=n(50925),a=n(56612),u=n(96299),s=n(7249),d=n(95011),f=n(78076),c=n(79538),p=n(53826),m=n(82368),y=n(39652),g=n(99961);const h=e=>"field"===e?.type,b=e=>"group"===e?.type,v=e=>"relationship"===e?.type,T=e=>"text"===e.type,F=e=>"utilityNetworkAssociations"===e.type,I=e=>!b(e)&&null!=e.group,x=e=>e.reduce(((e,t)=>b(t)?[...e,...t.inputs]:[...e,t]),[]),E=e=>x(e).filter(h),w=e=>x(e).filter(v),N=e=>x(e).filter(F),Z=e=>null!=e&&(O(e,"combo-box")||O(e,"radio-buttons")),O=(e,t)=>null!=e&&e.input?.type===t,L=e=>{let{domain:t,inputType:n="text-box",dataType:r}=e;return"number"===r&&"text-box"===n&&(!t||"coded-value"!==t.type)};function M(e,t){const{title:n,feature:r}=e??{};return n||(r?(0,y.R)(r):null)||t||""}function A(e){const{attributes:t,fieldsIndex:n,label:i,timeZone:o}=e;if(!t||"object"!=typeof t)return i;const l=Object.keys(t).filter((e=>(0,a.mk)(i,e))),u=l.map((e=>t[e])),s=l.map((e=>n.get(e))).filter(r.Ru);return function(e,t){return(0,a.HC)((0,a.HC)(e,(e=>`{${e.toLowerCase()}}`)),Object.fromEntries(Object.entries(t).map((e=>{let[t,n]=e;return[t.toLowerCase(),n]}))))}(i,k({values:u,fields:s,timeZone:o}))}const _="expression/",C="expr/",S="field/";function U(e){const[t,n]=e.split(_);return""===t&&n?n:(l.A.getLogger("esri.widgets.FeatureForm/featureFormUtils").error("extractExpressionNameFromString:invalid-input",`The string ${e} is not a valid expression reference of the form '${_}/expressionName'`),"")}function R(e){return`${_}${e}`}function V(e){return`${S}${e}`}function $(e){return e.startsWith(_)}function q(e){return e.startsWith(C)}function k(e){const{fields:t,values:n}=e,r=e.timeZone??void 0,i=t.map(((e,t)=>{let i=n[t];if(e.domain&&"coded-value"===e.domain.type){const t=e.domain.codedValues.find((e=>e.code===i));t?.name&&(i=t.name)}return((0,c.fs)(e)||(0,d.isTimeOnlyField)(e))&&(i=(0,p.ZP)(e,i,{timeZone:r,...(0,p.ZT)(e)})),[e.name,i]}));return Object.fromEntries(i)}const D=e=>{const t={typeFieldName:null,types:[]};return e?((0,f.Sv)(e)?(t.typeFieldName=e.parent?.subtypeField,t.types=e.parent?.subtypes??[]):"subtype-group"===e.type||"feature"===e.type&&e.subtypes?.length?(t.typeFieldName=e.subtypeField,t.types=e.subtypes??[]):"types"in e&&e.types&&(t.typeFieldName=e.typeIdField,t.types=e.types.map((e=>{let{id:t,name:n,domains:r}=e;return{code:t,name:n,domains:r}}))),null!=t.typeFieldName&&(t.typeFieldName=e.getField(t.typeFieldName)?.name??t.typeFieldName),t):t},j=(e,t,n)=>{const{dataType:r,error:i,minLength:o}=e,l=t?.validationErrors;if(!l||!i)return null;if(i===m.gK.CANNOT_BE_EMPTY)return l.cannotBeNull;if(i===s.Mh.VALUE_OUT_OF_RANGE||i===d.NumericRangeValidationError.OUT_OF_RANGE){const{field:t,range:i}=e,o={type:"date",intlOptions:{timeZone:"date"===t.type&&n?n:void 0,...(0,p.ZT)(t)}},a=(0,m.hQ)(i,l);return(0,g.V)(a,i,{format:{max:"date"===r?o:null!=i.max&&(0,m.qn)(i.max)?m.Qv:m.PA,min:"date"===r?o:null!=i.min&&(0,m.qn)(i.min)?m.Qv:m.PA}})}return i===s.Mh.INVALID_CODED_VALUE?l.invalidCodedValue:i===d.TypeValidationError.INVALID_TYPE?l.invalidType:i===m.gK.TOO_SHORT?(0,g.V)(l.tooShort,{min:o}):(m.gK.TOO_LONG,null)},z=e=>{if(!e)return;const t=e.layer,n=t&&"geometryType"in t?t.geometryType:void 0,r=e.geometry?.type;return"polyline"===r||"polyline"===n?"line":"mesh"===r||"mesh"===n||"multipatch"===n?"cube":"multipoint"===r||"multipoint"===n?"point":r||n||"table"},H=e=>{const t=[];if(e.formTemplate){const{description:n,title:r}=e.formTemplate;e.fields?.forEach((e=>{const i=r&&(0,a.mk)(r,e.name),o=n&&(0,a.mk)(n,e.name);(i||o)&&t.push(e.name)}))}return t};function G(e,t){const n=t??("formTemplate"in e&&e.formTemplate);return!!n&&(n.elements?.filter(u.jt)??[]).some((t=>{let{fieldName:n}=t;return!e.fieldsIndex.get(n)}))}function P(e,t){return null==e||t.onValue!==e&&t.offValue!==e}function Q(e,t){switch(t.objectType){case"any":return!0;case"null":return null==e;case"code":return e===t.codedValue?.code;case"range":return null!=e&&null!=t.minValue&&null!=t.maxValue&&+e>=t.minValue&&+e<=t.maxValue;default:return(0,i.Xb)(t.objectType),!1}}function Y(e,t,n){const r=(0,f.fV)(e),i=r?.find((e=>e.code===n));if(!i)return!1;const l=r?.find((e=>e.code===t));return!(0,o.equalsShallow)(i.defaultValues,l?.defaultValues)&&Object.values(i.defaultValues).some((e=>null!=e))}},53826:(e,t,n)=>{n.d(t,{Ng:()=>x,OM:()=>h,Q0:()=>T,T8:()=>v,ZP:()=>I,ZT:()=>F,eX:()=>N,fD:()=>L,fb:()=>m,fl:()=>p,iP:()=>O,oh:()=>E,rX:()=>M,sH:()=>y,yk:()=>A});n(88677),n(21265);var r=n(74719),i=n(64682),o=n(66845),l=n(72520),a=n(69943),u=n(73210),s=n(51536),d=n(12711);const f=u.n$,c={date:null,time:null,timeZoneOffset:null},p=new Map([["hours",3600],["minutes",60],["seconds",1],["deciseconds",.1],["centiseconds",.01],["milliseconds",.001]]),m="latn",y=new Set(["date-only","time-only","timestamp-offset"]),g=e=>"valueAsDate"in e;function h(e){return{locale:(0,d.JK)(),numberingSystem:m,zone:e??f}}function b(e,t){return null==e?null:s.c9.fromMillis(e,h(t))}function v(e,t){if(null==e||!(0,a.Kg)(e)||""===e){if(t){const e=s.c9.local({zone:t});return{date:null,time:null,timeZoneOffset:e.isValid?e.offset.toString():null}}return c}const n=s.c9.fromISO(e,{setZone:!0});return{date:n.toFormat(l.mo,h()),time:n.toFormat(l.Uq.HMS_MS,h()),timeZoneOffset:n.offset.toString()}}function T(e,t){if(null==e||!(0,a.Et)(e)||isNaN(e))return c;const n=b(e,t);return n?{date:n.toFormat(l.mo,h(t)),time:n.toFormat(l.Fj,h(t))}:c}function F(e){switch(e.type){case"date":default:return(0,o.J2)("short-date-short-time");case"date-only":return(0,o.J2)("short-date");case"time-only":return(0,o.J2)("short-time");case"timestamp-offset":return{...(0,o.J2)("short-date-short-time"),timeZone:void 0,timeZoneName:"short"}}}function I(e,t,n){if(!e||null==t)return null;switch(e.type){case"date":return(0,o.Yq)(t,n);case"date-only":return(0,o.iS)(t,n);case"time-only":return(0,o.F8)(t,n);case"timestamp-offset":return(0,o.Ey)(t,n);default:return null}}function x(e){const{dateComponent:t,defaultTimeZone:n,timeComponent:r,timeZoneComponent:i,oldValue:o}=e;if(!t?.value)return null;const{year:a,month:d,day:f}=s.c9.fromFormat(t.value,l.mo),{hour:c,minute:p,second:m,millisecond:y}=w(r,u.n$)??s.c9.now(),g=v(o,n),h=i?.value?parseInt(i.value,10):null!=g.timeZoneOffset?parseInt(g.timeZoneOffset,10):(new Date).getTimezoneOffset(),b=s.mQ.instance(h),T=s.c9.fromObject({year:a,month:d,day:f,hour:c,minute:p,second:m,millisecond:y},{zone:b});return T.isValid?T.toISO({includeOffset:!0}):null}function E(e){const{dateComponent:t,timeComponent:n,timeZone:r,max:i,min:o,oldValue:l}=e,a=w(t,r);let u=!!e.applyRange;if(!a)return null;let d=null;if(null!=n?.value){const e=w(n,r),t=Date.now(),o=null!=i&&i<t?i:t,l=s.c9.fromMillis(o,h(r)),u=a||l,{year:f,month:c,day:p}=u,{hour:m,minute:y,second:g,millisecond:b}=e||l;d=u.set({year:f,month:c,day:p,hour:m,minute:y,second:g,millisecond:b})}else{const e=b(Z({value:l??Date.now(),max:i,min:o}),r),{year:t,month:n,day:s}=a,{hour:f,minute:c,second:p,millisecond:m}=e;u=!0,d=a.set({year:t,month:n,day:s,hour:f,minute:c,second:p,millisecond:m})}if(!d.isValid)return null;const f=d.toMillis();return u?Z({value:f,max:i,min:o}):f}function w(e,t){if(null==e?.value||Array.isArray(e.value))return null;let n=null;return n=g(e)?s.c9.fromFormat(e.value,l.mo,h(t)):(0,l.UE)(e.value),n?.isValid?n:null}function N(e){const{max:t,min:n,value:r}=e;return!isNaN(r)&&!(null!=t&&r>t)&&!(null!=n&&r<n)}function Z(e){const{max:t,min:n,value:r}=e;return null!=t&&null!=n?(0,i.qE)(r,n,t):null!=t&&r>t?t:null!=n&&r<n?n:r}function O(e){if(!e)return"";const t=e.split(".").at(0);if(!t||t.length<1)throw new r.default("invalid time-only field",`Cannot parse valid time-only field value from ${e}`);const n=t.split(":"),i=new Array(3);for(let r=0;r<3;r++){const e=n.at(r)??"";i[r]=e.padStart(2,"0")}return i.join(":")}function L(e,t){switch(t){case"date":return e.getTime();case"date-only":return e.toISODate();case"time-only":return O(e.toISOTime(!0,!1));case"timestamp-offset":return e.toISOString(!1);default:return null}}function M(e){return!!e&&"object"==typeof e&&"getTime"in e&&"toISOString"in e&&"timeZone"in e}function A(e){const{type:t,range:n,value:r}=e;if(null==r||!n||r===n.min||r===n.max)return!0;if("date"===t)return N({value:r,min:n.min,max:n.max});const{rawMax:i,rawMin:o}=n;let a=null,u=null,s=null;switch(t){case"date-only":a=(0,l.Xi)(i),u=(0,l.Xi)(o),s=(0,l.Xi)(r);break;case"time-only":a=(0,l.UE)(i),u=(0,l.UE)(o),s=(0,l.UE)(r);break;case"timestamp-offset":a=(0,l.gz)(i),u=(0,l.gz)(o),s=(0,l.gz)(r)}return!s||N({value:s.valueOf(),min:u?.valueOf(),max:a?.valueOf()})}},76713:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(93800),i=n(6946),o=n(48602),l=(n(21265),n(50925),n(14746),n(75269)),a=n(41327);let u=class extends i.default{constructor(e){super(e),this.element=null,this.feature=null,this.layer=null,this.timeZone=null,this.type=null,this.visibilityExpressionExecutor=null}get description(){return this.getFormattedLabel(this.element?.description)}get evaluatedVisibilityExpression(){const{visibilityExpressionExecutor:e}=this;return null!=e?!!e.lastEvaluatedValue:null}get label(){return this.getFormattedLabel(this.element?.label)}get updating(){return!1}get visible(){return null!=this.evaluatedVisibilityExpression?this.evaluatedVisibilityExpression:null!=this.element}getFormattedLabel(e){const{feature:t,layer:n,timeZone:r}=this;return null==n||null==e?e:(0,a.LZ)({label:e,attributes:t.attributes,fieldsIndex:n.fieldsIndex,timeZone:r})}};(0,r._)([(0,o.MZ)({readOnly:!0})],u.prototype,"description",null),(0,r._)([(0,o.MZ)({constructOnly:!0})],u.prototype,"element",void 0),(0,r._)([(0,o.MZ)()],u.prototype,"evaluatedVisibilityExpression",null),(0,r._)([(0,o.MZ)()],u.prototype,"feature",void 0),(0,r._)([(0,o.MZ)()],u.prototype,"label",null),(0,r._)([(0,o.MZ)()],u.prototype,"layer",void 0),(0,r._)([(0,o.MZ)()],u.prototype,"timeZone",void 0),(0,r._)([(0,o.MZ)()],u.prototype,"type",void 0),(0,r._)([(0,o.MZ)()],u.prototype,"updating",null),(0,r._)([(0,o.MZ)()],u.prototype,"visible",null),(0,r._)([(0,o.MZ)()],u.prototype,"visibilityExpressionExecutor",void 0),u=(0,r._)([(0,l.$)("esri.widgets.FeatureForm.InputBase")],u);const s=u},79538:(e,t,n)=>{n.d(t,{BV:()=>w,EG:()=>v,Lk:()=>E,Ll:()=>O,Np:()=>d,R3:()=>Z,SO:()=>m,T1:()=>N,UH:()=>s,Wy:()=>T,XR:()=>p,aM:()=>x,fs:()=>b,i0:()=>L,i3:()=>h});var r=n(66845),i=n(95011),o=n(96247),l=n(76983),a=n(73210),u=n(40731);const s=",",d={light:["streets","gray","topo","terrain","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector","topo-3d","navigation-3d","streets-3d","osm-3d","gray-3d"],dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector","navigation-dark-3d","streets-dark-3d","dark-gray-3d"]},f="percent-of-total",c="field",p={exclude:["median"]},m={years:365,months:30,days:1,hours:1/24,minutes:1/1440,seconds:1/86400,milliseconds:1/864e5},y=new Set(["integer","small-integer"]);let g=null;const h=["date","date-only","timestamp-offset"];function b(e){return(0,i.isDateField)(e)||(0,i.isDateOnlyField)(e)||(0,i.isTimestampOffsetField)(e)}async function v(e){const{field:t,field2:n,field3:r,normalizationField:i,valueExpression:l}=e;let a=[];if(l){if(!g){const{arcadeUtils:e}=await(0,o.lw)();g=e}a=g.extractFieldNames(l)}return t&&a.push(t),n&&a.push(n),r&&a.push(r),i&&a.push(i),a}function T(e){let t=e.normalizationType;return t||(e.normalizationField?t=c:null!=e.normalizationTotal&&(t=f)),t??void 0}function F(e){return String(e).padStart(2,"0")}function I(e,t,n){let r;return"date"===t||"number"===t?("number"===t&&(e=new Date(e)),r=`TIMESTAMP'${n?e.getFullYear():e.getUTCFullYear()}-${F((n?e.getMonth():e.getUTCMonth())+1)}-${F(n?e.getDate():e.getUTCDate())} ${F(n?e.getHours():e.getUTCHours())}:${F(n?e.getMinutes():e.getUTCMinutes())}:${F(n?e.getSeconds():e.getUTCSeconds())}'`):r=e,r}function x(e,t,n,r){const{hasQueryEngine:i}=e,o=`(${I(n,E(e,n),i)} - ${I(t,E(e,t),i)})`;let l=m[r],a="/";return l<1&&(l=1/l,a="*"),{sqlExpression:1===l?o:`(${o} ${a} ${l})`,sqlWhere:null}}function E(e,t){if(t instanceof Date)return"date";if("number"==typeof t)return"number";if("string"==typeof t){const n=e.getField(t);if("<now>"===t.toLowerCase())return;if((0,i.isDateField)(n))return"field"}}function w(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d;for(const n in t)if(t[n].includes(e))return n}function N(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=null;return e&&("string"==typeof e?t.includes(e)&&(r=e):r=(0,l.q3)(e)),n?r||"gray":r}function Z(e,t){const n=t&&e.getField(t);return!!n&&y.has(n.type)}function O(e){return`cast(${e} as float)`}function L(e,t){const{format:n,timeZoneOptions:i,fieldType:o}=t??{};let l,s;if(i&&({timeZone:l,timeZoneName:s}=(0,u.hv)(i.layerTimeZone,i.datesInUnknownTimezone,i.viewTimeZone,(0,r.J2)(n||"short-date-short-time"),o)),"string"==typeof e&&isNaN(Date.parse("time-only"===o?`1970-01-01T${e}Z`:e)))return e;switch(o){case"date-only":{const t=(0,r.J2)(n||"short-date");return"string"==typeof e?(0,r.iS)(e,{...t}):(0,r.Yq)(e,{...t,timeZone:a.n$})}case"time-only":{const t=(0,r.J2)(n||"short-time");return"string"==typeof e?(0,r.F8)(e,t):(0,r.Yq)(e,{...t,timeZone:a.n$})}case"timestamp-offset":{if(!l&&"string"==typeof e&&new Date(e).toISOString()!==e)return e;const t=n||i?(0,r.J2)(n||"short-date-short-time"):void 0,o=t?{...t,timeZone:l,timeZoneName:s}:void 0;return"string"==typeof e?(0,r.Ey)(e,o):(0,r.Yq)(e,o)}default:{const t=n||i?(0,r.J2)(n||"short-date-short-time"):void 0;return(0,r.Yq)("string"==typeof e?new Date(e):e,t?{...t,timeZone:l,timeZoneName:s}:void 0)}}}},82368:(e,t,n)=>{n.d(t,{$$:()=>F,D_:()=>c,Gd:()=>f,Kx:()=>r,PA:()=>h,Po:()=>p,Qv:()=>b,gK:()=>i,hQ:()=>T,jl:()=>y,of:()=>d,qn:()=>v,zU:()=>m});var r,i,o,l=n(96299),a=n(7249),u=n(95011),s=n(53826);(o=r||(r={})).Text="text",o.Number="number",o.Date="date",o.Unsupported="unsupported",function(e){e.CANNOT_BE_EMPTY="input-validation-error::cannot-be-empty",e.TOO_SHORT="length-validation-error::too-short",e.TOO_LONG="length-validation-error::too-long"}(i||(i={}));const d=(e,t)=>{if(!e)return!0;const{operations:n}=e;switch(t){case"INSERT":return n.supportsAdd;case"UPDATE":case"DELETE":return n.supportsUpdate;default:return!0}};function f(e,t){const{dataType:n,domain:r,field:o,maxLength:l,minLength:d,range:f,required:c}=t;if(null==e)return c?i.CANNOT_BE_EMPTY:null;if("text"===n&&"string"==typeof e){if(d>-1&&e.length<d)return i.TOO_SHORT;if(l>-1&&e.length>l)return i.TOO_LONG}return"date"!==n||(0,s.yk)({type:o.type,range:f,value:e})?r?(0,a.wb)(o,e,r):(0,u.validateFieldValue)(o,e)??(0,a.wb)(o,e):u.NumericRangeValidationError.OUT_OF_RANGE}function c(e,t){return!(!p(e)||!p(t))||e===t}function p(e){return null==e||""===e}function m(e){let{dataType:t,field:n,input:i}=e;if(t===r.Date)return-1;const o=g(n.length);if(!i||!(0,l.AI)(i))return o;const a=g(i.maxLength);return-1===a?o:-1===o?a:Math.min(o,a)}function y(e){let{dataType:t,field:n,input:i}=e;if(t===r.Date)return-1;if(!i||!(0,l.AI)(i))return-1;const o=g(i.minLength);if(o<0)return-1;const a=g(n.length);return a>-1&&a<o?-1:o}function g(e){return"number"==typeof e&&e>-1?e:-1}const h={type:"number"},b={type:"number",intlOptions:{notation:"scientific"}};function v(e){return e>=1e7||e<=-1e7}function T(e,t){return null!=e.max&&null!=e.min?t.outsideRange:null!=e.max?t.outsideRangeMax:t.outsideRangeMin}const F=e=>e&&!Number.isNaN(e.valueOf())},92471:(e,t,n)=>{n.r(t),n.d(t,{applyTextFormattingHTML:()=>K,createFieldInfoMap:()=>Q,findRelatedLayer:()=>ae,findUtilityNetwork:()=>ue,fixTokens:()=>R,formatAttributes:()=>X,formatEditInfo:()=>P,formatValueToFieldInfo:()=>z,getAllFieldInfos:()=>Y,getFieldInfo:()=>G,getFieldInfoLabel:()=>O,getFixedFieldName:()=>L,getFixedFieldNames:()=>M,getHighlightKeyForFeature:()=>fe,getSourceLayer:()=>E,graphicCallback:()=>w,htmlEntities:()=>J,isAssociatedFeatureSupportedLayer:()=>D,isExpressionField:()=>Z,isFeatureSupportedLayer:()=>$,isGraphicForRelatableFeatureSupportedLayer:()=>j,isRelatableFeatureSupportedLayer:()=>k,isRelatableLayer:()=>q,isRelatedField:()=>te,preLayerQueryCallback:()=>oe,preRequestCallback:()=>le,querySourceLayer:()=>W,queryUpdatedFeature:()=>ee,shouldOpenInNewTab:()=>N,substituteAttributes:()=>S,substituteFieldsInLinksAndAttributes:()=>C});var r=n(21265),i=n(50925),o=n(56612),l=n(66845),a=n(23224),u=n(95011),s=n(78076),d=n(79538),f=n(96247),c=n(40731);const p=()=>i.A.getLogger("esri.widgets.Feature.support.featureUtils"),m=/href=(""|'')/gi,y=/(\{([^{\r\n]+)\})/g,g=/'/g,h=/^\s*expression\//i,b=/(\n)/gi,v=/[\u00A0-\u9999<>&]/gim,T=/href\s*=\s*(?:"([^"]+)"|'([^']+)')/gi,F=/^(?:mailto:|tel:)/,I="relationships/",x=(0,l.J2)("short-date-short-time");function E(e){if(null!=e)return(e.sourceLayer||e.layer)??void 0}async function w(e){let{type:t,value:n,event:r}=e;try{return"function"==typeof n?n(r):await n}catch(i){return void p().error("error",`An error occurred when calling the "${t}" function`,{error:i,graphic:r.graphic,value:n})}}function N(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e)return!F.test(e.trim().toLowerCase())}function Z(e){return!!e&&h.test(e)}function O(e,t){const n=function(e,t){if(!t||!Z(t)||!e)return;const n=t.replace(h,"").toLowerCase();return e.find((e=>{let{name:t}=e;return t.toLowerCase()===n}))}(t,e?.fieldName);return n?n.title||null:e?e.label||e.fieldName:null}function L(e,t){const n=A(t,e);return n?n.name:e}function M(e,t){return e&&e.map((e=>L(e,t)))}function A(e,t){return e&&"function"==typeof e.getField&&t?e.getField(t)??null:null}function _(e){return`${e}`.trim()}function C(e){let{attributes:t,globalAttributes:n,layer:r,text:i,expressionAttributes:o,fieldInfoMap:l}=e;return i?S({formattedAttributes:n,template:V(i,{...n,...o,...t},r),fieldInfoMap:l}):""}function S(e){let{formattedAttributes:t,template:n,fieldInfoMap:r}=e;return _(function(e){return e.replaceAll(m,"")}((0,o.HC)((0,o.HC)(n,(e=>function(e,t){const n=t.get(e.toLowerCase());return`{${n?.fieldName||e}}`}(e,r))),t)))}function U(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n={...e};return Object.keys(n).forEach((e=>function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const r=t[e];if("string"==typeof r){const i="%27",o=(n?encodeURIComponent(r):r).replaceAll(g,i);t[e]=o}}(e,n,t))),n}function R(e,t){return e.replaceAll(y,((e,n,r)=>{const i=A(t,r);return i?`{${i.name}}`:n}))}function V(e,t,n){const r=R(e,n);return r?r.replaceAll(T,((e,n,r)=>function(e,t,n){const r=(t=_(t))&&"{"!==t[0];return(0,o.HC)(e,U(n,r||!1))}(e,n||r,t))):r}function $(e){return null!=e&&"object"==typeof e&&"fieldsIndex"in e&&"geometryType"in e&&"getField"in e&&"load"in e&&"loaded"in e&&"objectIdField"in e&&"spatialReference"in e&&"type"in e&&("feature"===e.type||"scene"===e.type||"subtype-group"===e.type||"subtype-sublayer"===e.type||"sublayer"===e.type)&&"when"in e}function q(e){return null!=e&&"object"==typeof e&&"createQuery"in e&&"queryFeatureCount"in e&&"queryObjectIds"in e&&"queryRelatedFeatures"in e&&"queryRelatedFeaturesCount"in e&&"relationships"in e}function k(e){return $(e)&&q(e)}function D(e){return!(!(e&&"object"==typeof e&&"createQuery"in e&&"getField"in e&&"queryFeatureCount"in e&&"queryFeatures"in e&&"queryObjectIds"in e&&"capabilities"in e&&"fields"in e&&"fieldsIndex"in e&&"type"in e)||"feature"!==e.type&&"subtype-group"!==e.type&&"subtype-sublayer"!==e.type&&"sublayer"!==e.type||!("when"in e))&&("subtype-sublayer"===e.type&&"parent"in e&&e.parent&&"object"==typeof e.parent?"globalIdField"in e.parent:"globalIdField"in e)}function j(e){return!!e&&"object"==typeof e&&"sourceLayer"in e&&k(e.sourceLayer)}function z(e,t){const{fieldInfos:n,fieldName:r,preventPlacesFormatting:i,layer:o,timeZone:l}=t,s=G(n,r),f=A(o,r);if(s&&!(0,u.isRasterPixelValueField)(r)){const t=f?.type,n=s.format?.dateFormat;if("date"===t||"date-only"===t||"time-only"===t||"timestamp-offset"===t||n)return(0,d.i0)(e,{format:n,fieldType:t,timeZoneOptions:{layerTimeZone:o&&"preferredTimeZone"in o?o.preferredTimeZone:null,viewTimeZone:l,datesInUnknownTimezone:!(!o||!("datesInUnknownTimezone"in o))&&!!o.datesInUnknownTimezone}})}const c=s?.format;return"string"==typeof e&&(0,u.isRasterPixelValueField)(r)&&c?function(e,t){return e=e.trim(),/\d{2}-\d{2}/.test(e)?e:e.includes(",")?H(e,",",", ",t):e.includes(";")?H(e,";","; ",t):e.includes(" ")?H(e," "," ",t):(0,a.ZV)(Number(e),(0,a.yx)(t))}(e,c):"string"==typeof(e=function(e,t){if("string"==typeof e&&t&&null==t.dateFormat&&(null!=t.places||null!=t.digitSeparator)){const t=Number(e);if(!isNaN(t))return t}return e}(e,c))||null==e||null==c?K(e):(0,a.ZV)(e,i?{...(0,a.yx)(c),minimumFractionDigits:0,maximumFractionDigits:20}:(0,a.yx)(c))}function H(e,t,n,r){return e.trim().split(t).map((e=>(0,a.ZV)(Number(e),(0,a.yx)(r)))).join(n)}function G(e,t){if(e?.length&&t)return e.find((e=>e.fieldName?.toLowerCase()===t.toLowerCase()))}function P(e,t,n,r){const{creatorField:i,creationDateField:o,editorField:a,editDateField:u}=e;if(!t)return;const s=(0,c.hv)(r&&"preferredTimeZone"in r?r.preferredTimeZone:null,!(!r||!("datesInUnknownTimezone"in r))&&!!r.datesInUnknownTimezone,n,x,"date"),d={...x,...s},f=t[u];if("number"==typeof f){const e=t[a];return{type:"edit",date:(0,l.Yq)(f,d),user:e}}const p=t[o];if("number"==typeof p){const e=t[i];return{type:"create",date:(0,l.Yq)(p,d),user:e}}return null}function Q(e,t){const n=new Map;if(!e)return n;for(const r of e){if(!r.fieldName)continue;const e=L(r.fieldName,t);r.fieldName=e,n.set(e.toLowerCase(),r)}return n}function Y(e){const t=[];if(!e)return t;const{fieldInfos:n,content:r}=e;return n&&t.push(...n),r&&Array.isArray(r)?(r.forEach((e=>{if("fields"===e.type){const n=e?.fieldInfos;n&&t.push(...n)}})),t):t}function J(e){return e.replaceAll(v,(e=>`&#${e.charCodeAt(0)};`))}function K(e){return"string"==typeof e?e.replaceAll(b,'<br class="esri-text-new-line" />'):e}function B(e){const{value:t,fieldName:n,fieldInfos:i,fieldInfoMap:o,layer:l,graphic:a,timeZone:s}=e;if(null==t)return"";const f=function(e){let{fieldName:t,value:n,graphic:i,layer:o}=e;if(te(t))return null;if(!o||"function"!=typeof o.getFieldDomain)return null;const l=i&&o.getFieldDomain(t,{feature:i,excludeImpliedDomains:(0,r.A)("esri-widget-legacy-field-domain-calculation")});return l&&"coded-value"===l.type?l.getName(n):null}({fieldName:n,value:t,graphic:a,layer:l});if(f)return f;const c=function(e){let{fieldName:t,graphic:n,layer:r}=e;if(te(t))return null;if(!r||"function"!=typeof r.getFeatureType)return null;const{typeIdField:i}=r;if(!i||t!==i)return null;const o=r.getFeatureType(n);return o?o.name:null}({fieldName:n,graphic:a,layer:l});if(c)return c;if(o.get(n.toLowerCase()))return z(t,{fieldInfos:i||Array.from(o.values()),fieldName:n,layer:l,timeZone:s});const p=l?.fieldsIndex?.get(n);return p&&((0,d.fs)(p)||(0,u.isTimeOnlyField)(p))?(0,d.i0)(t,{fieldType:p.type,timeZoneOptions:{layerTimeZone:l&&"preferredTimeZone"in l?l.preferredTimeZone:null,viewTimeZone:s,datesInUnknownTimezone:!(!l||!("datesInUnknownTimezone"in l))&&!!l.datesInUnknownTimezone}}):K(t)}function X(e){let{fieldInfos:t,attributes:n,layer:r,graphic:i,fieldInfoMap:o,relatedInfos:l,timeZone:a}=e;const u={};return l?.forEach((e=>function(e){let{attributes:t,relatedInfo:n,fieldInfoMap:r,fieldInfos:i,layer:o,timeZone:l}=e;t&&n&&(n.relatedFeatures?.forEach((e=>ne({attributes:t,graphic:e,relatedInfo:n,fieldInfoMap:r,fieldInfos:i,layer:o,timeZone:l}))),n.relatedStatsFeatures?.forEach((e=>ne({attributes:t,graphic:e,relatedInfo:n,fieldInfoMap:r,fieldInfos:i,layer:o,timeZone:l}))))}({attributes:u,relatedInfo:e,fieldInfoMap:o,fieldInfos:t,layer:r,timeZone:a}))),n&&Object.keys(n).forEach((e=>{const l=n[e];u[e]=B({fieldName:e,fieldInfos:t,fieldInfoMap:o,layer:r,value:l,graphic:i,timeZone:a})})),u}async function W(e,t){const{layer:n,graphic:r,outFields:i,objectIds:o,returnGeometry:l,spatialReference:a}=e,u=o[0];if("number"!=typeof u&&"string"!=typeof u){const e="Could not query required fields for the specified feature. The feature's ID is invalid.",t={layer:n,graphic:r,objectId:u,requiredFields:i};return p().warn(e,t),null}if(!(0,s.BR)(n)?.operations?.supportsQuery){const e="The specified layer cannot be queried. The following fields will not be available.",t={layer:n,graphic:r,requiredFields:i,returnGeometry:l};return p().warn(e,t),null}const d=n.createQuery();return d.objectIds=o,d.outFields=i?.length?i:[n.objectIdField],d.returnGeometry=!!l,d.returnZ=!!l,d.returnM=!!l,d.outSpatialReference=a,(await n.queryFeatures(d,t)).features[0]}async function ee(e,t){let{graphic:n,popupTemplate:r,layer:i,spatialReference:o}=e;if(!i||!r)return;if("function"==typeof i.load&&await i.load(t),!n.attributes)return;const l=i.objectIdField,a=n.attributes[l];if(null==a)return;const s=[a],d=await r.getRequiredFields(i.fieldsIndex),c=(0,u.featureHasFields)(d,n),p=c?[]:d.includes(l)?d:[...d,l],m=r.returnGeometry||await async function(e){if(!e.expressionInfos?.length)return!1;const t=await(0,f.lw)(),{arcadeUtils:{hasGeometryFunctions:n}}=t;return n(e)}(r);if(c&&!m)return;const y=await W({layer:i,graphic:n,outFields:p,objectIds:s,returnGeometry:m,spatialReference:o},t);y&&(y.geometry&&(n.geometry=y.geometry),y.attributes&&(n.attributes={...n.attributes,...y.attributes}))}function te(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return!!e&&e.includes(I)}function ne(e){let{attributes:t,graphic:n,relatedInfo:r,fieldInfos:i,fieldInfoMap:o,layer:l,timeZone:a}=e;t&&n&&r&&Object.keys(n.attributes).forEach((e=>{const u=function(e){return`${I}${e.layerId}/${e.fieldName}`}({layerId:r.relation.id.toString(),fieldName:e}),s=n.attributes[e];t[u]=B({fieldName:u,fieldInfos:i,fieldInfoMap:o,layer:l,value:s,graphic:n,timeZone:a})}))}const re=e=>{if(!e)return!1;const t=e.toUpperCase();return t.includes("CURRENT_TIMESTAMP")||t.includes("CURRENT_DATE")||t.includes("CURRENT_TIME")},ie=e=>{let{layer:t,method:n,query:r,definitionExpression:i}=e;if(!t.capabilities?.query?.supportsCacheHint||"attachments"===n)return;const o=null!=r.where?r.where:null,l=null!=r.geometry?r.geometry:null;re(i)||re(o)||"extent"===l?.type||"tile"===r.resultType||(r.cacheHint=!0)},oe=e=>{let{query:t,layer:n,method:r}=e;ie({layer:n,method:r,query:t,definitionExpression:`${n.definitionExpression} ${n.serviceDefinitionExpression??""}`})},le=e=>{let{queryPayload:t,layer:n,method:r}=e;ie({layer:n,method:r,query:t,definitionExpression:`${n.definitionExpression} ${n.serviceDefinitionExpression??""}`})};function ae(e,t,n){return e&&t&&n?"sublayer"===t.type?de({layers:t.layer?.sublayers,map:e,relatedLayer:t,relationship:n})||de({layers:t.layer?.subtables,map:e,relatedLayer:t,relationship:n}):de({layers:e.allLayers,map:e,relatedLayer:t,relationship:n})||de({layers:e.allTables,map:e,relatedLayer:t,relationship:n}):null}function ue(e,t){return e&&"utilityNetworks"in e&&t?e.utilityNetworks?.find((e=>e.isUtilityLayer(t))):null}function se(e,t){return e?.allTables.find((e=>"feature"===e.type&&e.layerId===t.id&&e.url===t.layer?.url))}function de(e){let{map:t,relationship:n,relationship:{relatedTableId:r},relatedLayer:i,layers:o}=e;if(!o)return null;for(const l of o){if("map-image"===l.type){const e=de({layers:l.sublayers,map:t,relatedLayer:i,relationship:n})||de({layers:l.subtables,map:t,relatedLayer:i,relationship:n});if(e)return e;continue}if(!k(l))continue;if("sublayer"===i.type){if(l!==i&&l.id===r)return l.isTable?se(t,l):l;continue}const e="scene"===i.type&&i.associatedLayer?i.associatedLayer.url:i.url;if(!e)return null;if("sublayer"!==l.type){if(l!==i&&l.url===e&&l.layerId===r)return l}else if(l!==i&&l.layer?.url===e&&l.id===r)return l.isTable?se(t,l):l}return null}function fe(e){const t=e.getObjectId();return null!=t?`oid:${t}`:`uid:${e.uid}`}}}]);