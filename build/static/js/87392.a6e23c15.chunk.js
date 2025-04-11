"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[12069,20348,65455,77019,87392,99400],{12069:(t,e,i)=>{i.r(e),i.d(e,{default:()=>r});var s=i(93800),n=i(48602),a=(i(21265),i(50925),i(14746),i(75269)),o=i(65455);let l=class extends o.default{constructor(t){super(t),this.handlesSyncedToPrimary=!0}set primaryHandleEnabled(t){this._set("primaryHandleEnabled",t)}get primaryHandleEnabled(){const{stops:t}=this;if(!t?.length)return!1;const e=t.length;return(3===e||5===e)&&this._get("primaryHandleEnabled")}get values(){const{primaryHandleEnabled:t,stops:e}=this;if(!e?.length||e.length<2)return[];const i=this.getValuesFromStops();return t?3===i.length?[i[0],i[1],i[2]]:[i[0],i[2],i[4]]:[i[0],i[i.length-1]]}setValue(t,e){const{max:i,min:s,values:n}=this,a=n[t];if(isNaN(e)||a===e||e>i||e<s)return;e=this.toPrecision(e);const o=this.primaryHandleEnabled&&this.handlesSyncedToPrimary;if(o){const i=n.slice().sort(((t,e)=>t>e?1:-1))[1];(0===t&&e>i||2===t&&e<i)&&(e=i)}const l=this.getStopChanges(t,e);this.updateStops(l),o?this.notifyChange("values"):(n[t]=e,this._set("values",[...n])),this.notifyChange("labels")}getStopIndexFromValueIndex(t){const{handlesSyncedToPrimary:e,primaryHandleEnabled:i}=this;if(i){const{values:i}=this,s=i[t];if(e)return t;const n=i.slice().sort(((t,e)=>t>e?1:-1)),a=n.indexOf(s);return i.some(((t,e)=>t===s&&e!==a))?n.lastIndexOf(s):a}return super.getStopIndexFromValueIndex(t)}getStopChanges(t,e){return this.primaryHandleEnabled?this._getStopChanges(t,e):super.getStopChanges(t,e)}_getStopChanges(t,e){const{max:i,min:s,stops:n,values:a}=this,o=this.handlesSyncedToPrimary&&1===t,l=a[t],r=a.slice();o||(r[t]=e);const u=r.sort(((t,e)=>t>e?1:-1)),h=o?e:u[1],m=e-l,p=o?this.toPrecision(Math.max(Math.min(u[0]+m,i),s)):u[0],d=o?this.toPrecision(Math.max(Math.min(u[2]+m,i),s)):u[2];return 5===n.length?[{index:0,value:p},{index:1,value:this.toPrecision((h+p)/2)},{index:2,value:h},{index:3,value:this.toPrecision((h+d)/2)},{index:4,value:d}]:[{index:0,value:p},{index:1,value:h},{index:2,value:d}]}};(0,s._)([(0,n.MZ)()],l.prototype,"handlesSyncedToPrimary",void 0),(0,s._)([(0,n.MZ)()],l.prototype,"primaryHandleEnabled",null),(0,s._)([(0,n.MZ)({dependsOn:["handlesSyncedToPrimary"],readOnly:!0})],l.prototype,"values",null),l=(0,s._)([(0,a.$)("esri.widgets.smartMapping.SmartMappingPrimaryHandleSliderViewModel")],l);const r=l},20348:(t,e,i)=>{i.r(e),i.d(e,{formatDateLabel:()=>r,formatNumberLabel:()=>u,getDeviationValues:()=>h,getDynamicPathForSizeStops:()=>m,getFillFromColor:()=>g,getPathForSizeStops:()=>p,getSizesFromVariable:()=>d,getStopChanges:()=>c});var s=i(88102),n=i(66845),a=i(23224),o=i(88171),l=i(56563);function r(t){return(0,n.Yq)(new Date(t),o.timelineDateFormatOptions)}function u(t){const e=Math.floor(Math.log10(Math.abs(t)))+1,i=e<4||e>6?4:e,s=Math.abs(t)>=1e6?"compact":"standard";return(0,a.ZV)(t,{notation:s,minimumSignificantDigits:2,maximumSignificantDigits:i})}function h(t,e,i){if(null==e||null==t)return[];const s=[];for(let n=-1*i;n<=i;n++)0!==n&&s.push(e+n*t);return s}function m(t){const{max:e,min:i,padding:s,pathHeight:n,pathWidth:a,stops:o}=t,l=e-i;let r,u=`M0 0 L${a} 0 `;const h=3===o.length?[o[0],o[1],o[2]]:[o[0],o[2],o[4]],m=Math.min.apply(Math,h.map((t=>t.size))),p=Math.max(Math.abs(h[0].size-h[1].size),Math.abs(h[2].size-h[1].size));return h.reverse(),h.forEach(((t,e)=>{let{size:o,value:h}=t;const d=Math.round((o-m)/p*100)/100,c=Math.round(n-(h-i)/l*n);r=d*a,0===r&&(r=s*a),0===e&&(u+=`L${r} 0 `),u+=`L${r} ${c} `})),u+=`L${r} ${n} L0 ${n} L0 0 Z`,u}function p(t){const{bottomValue:e,bottomWidth:i,max:s,min:n,pathHeight:a,pathWidth:o,topValue:l,topWidth:r}=t,u=r*o,h=i*o,m=s-n,p=Math.round(a-(e-n)/m*a);return`M${u} 0 L${u} ${Math.round(a-(l-n)/m*a)} L${h} ${p} L${h} ${a} L0 ${a} L0 0 Z`}function d(t){let e=t.maxSize,i=t.minSize;return e instanceof l.default&&(e=e.stops[0].size),i instanceof l.default&&(i=i.stops[0].size),[e,i]}function c(t,e,i){const s=i.length-1;if(s<0)return[];const n=i[0],a=i[s]-n,o=e-t,l=[];for(let r=1;r<s;r++){const e=(i[r]-n)/a*o+t;l.push({index:r,value:e})}return l.unshift({index:0,value:t}),l.push({index:s,value:e}),l}function g(t){return t instanceof s.default?t.toCss(!0):s.default.fromString(t??"").toCss(!0)}},65455:(t,e,i)=>{i.r(e),i.d(e,{default:()=>u});var s=i(93800),n=i(48602),a=(i(21265),i(50925),i(14746),i(75269)),o=i(99400),l=i(20348);let r=class extends o.default{constructor(t){super(t),this._initialStopValues=[],this._max=null,this._min=null,this.hasTimeData=!1,this.inputFormatFunction=(t,e)=>"max"===e?this.getUnzoomedMax().toString():"min"===e?this.getUnzoomedMin().toString():t.toString(),this.inputParseFunction=null,this.labelFormatFunction=t=>{if(this.hasTimeData)return(0,l.formatDateLabel)(t);const{max:e,min:i,precision:s}=this,n=e-i>10?2:s;return(0,l.formatNumberLabel)(parseFloat(t.toFixed(n)))},this.thumbsConstrained=!1,this.zoomingEnabled=!0}set breaks(t){this._set("breaks",t),this.notifyChange("max"),this.notifyChange("min")}set stops(t){if(t?.length){const{max:e,min:i}=this,s=this.getValuesFromStops(t),n={};null!=i&&s.some((t=>t<i))&&(n.min=Math.min(...s)),null!=e&&s.some((t=>t>e))&&(n.max=Math.max(...s)),this.set({...n}),this._initialStopValues=s}else this._initialStopValues=null;this._set("stops",t||null),this.notifyChange("values")}get labels(){const{values:t}=this,e=t&&t.length?t.map(((t,e)=>this.getLabelForValue(t,"value",e))):[],i=this.getUnzoomedMax(),s=this.getUnzoomedMin();return{max:this.getLabelForValue(i,"max"),min:this.getLabelForValue(s,"min"),values:e}}get max(){const{breaks:t}=this;return t?.length?t[t.length-1].max:this.max}set max(t){const{zoomOptions:e}=this;if(null!=e?.max){const i=this.values;let s=e.max;if(t<s&&(s=t,e.max=t),i&&i.length)for(let e=0;e<i.length;e++)t<i[e]&&this.setValue(e,t);this._storeZoomMax(s,t)}else this.updateBreakMax(t),this.setMax(t);this.notifyChange("labels")}get min(){const{breaks:t}=this;return t?.length?t[0].min:this.min}set min(t){const{zoomOptions:e}=this;if(null!=e?.min){const i=this.values;let s=e.min;if(t>s&&(s=t,e.min=t),i&&i.length)for(let e=0;e<i.length;e++)t>i[e]&&this.setValue(e,t);this._storeZoomMin(s,t)}else this.updateBreakMin(t),this.setMin(t);this.notifyChange("labels")}get state(){const{max:t,min:e,values:i}=this;return null!=t&&null!=e&&i.length>0?"ready":"disabled"}get values(){const{breaks:t,stops:e}=this;if(!t&&!e)return[];if(t?.length){const e=t.map((t=>t.max));return e.pop(),e}if(e?.length<2)return[];const i=this.getValuesFromStops();return[i[0],i[i.length-1]]}set zoomOptions(t){const{zoomingEnabled:e,zoomOptions:i}=this;if(e){if(i){const e=null!=this._max?this._max:this.max,i=null!=this._min?this._min:this.min;if(t){const{max:s,min:n}=t,a=null!=s,o=null!=n,l=o?t.min:i,r=o?i:null,u=a?t.max:e,h=a?e:null;this._storeZoomMin(l,r),this._storeZoomMax(u,h)}else this.setMax(e),this.setMin(i),this._min=null,this._max=null}else if(t){const{max:e,min:i}=t;null!=i&&this._storeZoomMin(t.min,this.min),null!=e&&this._storeZoomMax(t.max,this.max)}this._set("zoomOptions",t),this.notifyChange("max"),this.notifyChange("min")}}getStopIndexFromValueIndex(t){const{stops:e}=this,i=this.values[t];return 0===t?i<=this.values[1]?0:e.length-1:1===t?this.values[0]>=i?0:e.length-1:null}getStopChanges(t,e){const i=this.stops,s=this.getStopIndexFromValueIndex(t),n=this.getValuesFromStops();n[s]=e;const[a,o]=[n[0],n[n.length-1]].sort(((t,e)=>t>e?1:-1)),l=o-a,r=i.length-1;return n.map(((t,e)=>({index:e,value:this.toPrecision(a+e*l/r)})))}setValue(t,e){const{max:i,min:s,values:n}=this,a=n[t];if(isNaN(e)||a===e||e>i||e<s)return;n[t]=this.toPrecision(e),this._set("values",[...n]);const o=n.slice().sort(((t,e)=>t>e?1:-1)),r=o[0],u=o[o.length-1],h=(0,l.getStopChanges)(r,u,this._initialStopValues??[]);this.updateStops(h),this.updateBreaks(),this.notifyChange("labels")}getValuesFromStops(t){const e=t||this.stops;return e?.map((t=>t.hasOwnProperty("ratio")?t.ratio:t.value))}updateBreaks(){const{breaks:t,values:e}=this;t?.length&&e.slice().sort(((t,e)=>t>e?1:-1)).forEach(((e,i)=>{t[i].max=e,null!=t[i+1]&&(t[i+1].min=e)}))}updateBreakMax(t){const{breaks:e,max:i,min:s}=this;!isNaN(t)&&i!==t&&null!=s&&t>s&&e?.length&&(e[e.length-1].max=t)}updateBreakMin(t){const{breaks:e,max:i,min:s}=this;!isNaN(t)&&s!==t&&null!=i&&t<i&&e?.length&&(e[0].min=t)}updateStops(t){const{stops:e}=this,i=this.getValuesFromStops();if(i?.length){for(const e of t)i[e.index]=e.value;e.forEach(((t,e)=>{t.hasOwnProperty("ratio")?t.ratio=i[e]:t.value=i[e]}))}}getUnzoomedMax(){return this.zoomOptions&&null!=this._max?this._max:this.max}getUnzoomedMin(){return this.zoomOptions&&null!=this._min?this._min:this.min}_storeZoomMax(t,e){this._max=e,this.setMax(t)}_storeZoomMin(t,e){this._min=e,this.setMin(t)}};(0,s._)([(0,n.MZ)()],r.prototype,"breaks",null),(0,s._)([(0,n.MZ)()],r.prototype,"stops",null),(0,s._)([(0,n.MZ)()],r.prototype,"hasTimeData",void 0),(0,s._)([(0,n.MZ)()],r.prototype,"inputFormatFunction",void 0),(0,s._)([(0,n.MZ)()],r.prototype,"inputParseFunction",void 0),(0,s._)([(0,n.MZ)()],r.prototype,"labelFormatFunction",void 0),(0,s._)([(0,n.MZ)({readOnly:!0})],r.prototype,"labels",null),(0,s._)([(0,n.MZ)()],r.prototype,"max",null),(0,s._)([(0,n.MZ)()],r.prototype,"min",null),(0,s._)([(0,n.MZ)({readOnly:!0})],r.prototype,"state",null),(0,s._)([(0,n.MZ)()],r.prototype,"thumbsConstrained",void 0),(0,s._)([(0,n.MZ)({readOnly:!0})],r.prototype,"values",null),(0,s._)([(0,n.MZ)()],r.prototype,"zoomingEnabled",void 0),(0,s._)([(0,n.MZ)()],r.prototype,"zoomOptions",null),r=(0,s._)([(0,a.$)("esri.widgets.smartMapping.SmartMappingSliderViewModel")],r);const u=r},87392:(t,e,i)=>{i.r(e),i.d(e,{default:()=>r});var s=i(93800),n=i(48602),a=(i(21265),i(50925),i(14746),i(75269)),o=i(12069);let l=class extends o.default{constructor(t){super(t),this.persistSizeRangeEnabled=!1}updateStops(t){const{primaryHandleEnabled:e,persistSizeRangeEnabled:i,stops:s}=this,n=this.getValuesFromStops();if(n?.length&&(t.sort(((t,e)=>t.value>e.value?1:-1)).forEach((t=>{n[t.index]=t.value})),s.forEach(((t,e)=>t.value=n[e])),e&&i)){const{stops:t}=this,e=this.getValuesFromStops(),i=t.map((t=>t.size)),s=Math.max(...i),n=Math.min(...i),a=Math.max(...e),o=Math.min(...e),l=t[5===t.length?2:1].value,r=Math.abs(a-l),u=Math.abs(o-l),h=r>u?r:u,m=s-n;if(0===h)return;t.forEach((t=>{t.size=Math.abs(t.value-l)/h*m+n}))}}};(0,s._)([(0,n.MZ)()],l.prototype,"persistSizeRangeEnabled",void 0),l=(0,s._)([(0,a.$)("esri.widgets.smartMapping.SizeSlider.SizeSliderViewModel")],l);const r=l},99400:(t,e,i)=>{i.r(e),i.d(e,{default:()=>h});var s=i(93800),n=i(6946),a=i(74719),o=i(50925),l=i(48602),r=(i(21265),i(14746),i(75269));let u=class extends n.default{constructor(t){super(t),this.precision=4,this.thumbsConstrained=!0}set effectiveMax(t){this.setEffectiveMax(t)}set effectiveMin(t){this.setEffectiveMin(t)}set labelFormatFunction(t){this._set("labelFormatFunction",t)}set inputFormatFunction(t){this._set("inputFormatFunction",t)}set inputParseFunction(t){this._set("inputParseFunction",t)}get labels(){const{max:t,min:e,values:i}=this,s=i?.length?i.map(((t,e)=>this.getLabelForValue(t,"value",e))):[];return{max:this.getLabelForValue(t,"max"),min:this.getLabelForValue(e,"min"),values:s}}set max(t){this.setMax(t)}set min(t){this.setMin(t)}get state(){const{max:t,min:e}=this;return null!=t&&null!=e&&t>e?"ready":"disabled"}set values(t){const{max:e,min:i}=this,s=this.values;s&&t&&s.length===t.length&&s.every(((e,i)=>e===t[i]))||(this._set("values",null),t?.length&&(null!=i&&t.some((t=>t<i))&&(this.min=Math.min(...t)),null!=e&&t.some((t=>t>e))&&(this.max=Math.max(...t))),this._set("values",t))}toPrecision(t){return parseFloat(t.toFixed(this.precision))}defaultLabelFormatFunction(t){const{max:e,min:i,precision:s}=this,n=null!=e&&null!=i&&e-i>10?2:s;return parseFloat(t.toFixed(n)).toString()}defaultInputFormatFunction(t){return t.toString()}defaultInputParseFunction(t){return parseFloat(t)}getBounds(){const{effectiveMax:t,effectiveMin:e,max:i,min:s}=this;return{min:null!=e&&null!=s?Math.max(s,e):s,max:null!=t&&null!=i?Math.min(i,t):i}}getBoundsForValueAtIndex(t){const{thumbsConstrained:e,values:i}=this,{min:s,max:n}=this.getBounds();if(e&&i){const e=t-1,a=t+1;return{min:null!=i[e]?i[e]:s,max:null!=i[a]?i[a]:n}}return{min:s,max:n}}getLabelForValue(t,e,i){return null==t?null:this.labelFormatFunction?this.labelFormatFunction(t,e,i):this.defaultLabelFormatFunction(t)}setMax(t){const{max:e,values:i}=this;if(null==t)return void this._set("max",null);if(isNaN(t))return void this._logError("slider:invalid-value","Supplied value for property 'max' is NaN.");const s=this.toPrecision(t);if(e!==s&&(this._set("max",s),i?.length))for(let n=0;n<i.length;n++)s<i[n]&&this.setValue(n,s)}setMin(t){const{min:e,values:i}=this;if(null==t)return void this._set("min",null);if(isNaN(t))return void this._logError("slider:invalid-value","Supplied value for property 'min' is NaN.");const s=this.toPrecision(t);if(e!==s&&(this._set("min",s),i?.length))for(let n=0;n<i.length;n++)s>i[n]&&this.setValue(n,s)}setEffectiveMax(t){if(null==t)return void this._set("effectiveMax",null);if(isNaN(t))return void this._logError("slider:invalid-value","Supplied value for property 'effectiveMax' is NaN.");const e=this.toPrecision(t);this.effectiveMax!==e&&this._set("effectiveMax",this._applyBoundsToValue(e))}setEffectiveMin(t){if(null==t)return void this._set("effectiveMin",null);if(isNaN(t))return void this._logError("slider:invalid-value","Supplied value for property 'effectiveMin' is NaN.");const e=this.toPrecision(t);this.effectiveMin!==e&&this._set("effectiveMin",this._applyBoundsToValue(e))}setValue(t,e){if(isNaN(e))return void this._logError("slider:invalid-value","Supplied value for member of property 'values' is NaN.");const{values:i}=this;if(null==i)return void this._logError("slider:invalid-value","Supplied value for member of property 'values' is null.");const s=i[t],n=this.toPrecision(e);if(s===n)return;const a=[...i];a[t]=n,this._set("values",a),this.notifyChange("labels")}_applyBoundsToValue(t){const{max:e,min:i}=this;return null!=i&&t<i?i:null!=e&&t>e?e:t}_logError(t,e,i){o.A.getLogger(this).error(new a.default(t,e,i))}};(0,s._)([(0,l.MZ)()],u.prototype,"effectiveMax",null),(0,s._)([(0,l.MZ)()],u.prototype,"effectiveMin",null),(0,s._)([(0,l.MZ)()],u.prototype,"labelFormatFunction",null),(0,s._)([(0,l.MZ)()],u.prototype,"inputFormatFunction",null),(0,s._)([(0,l.MZ)()],u.prototype,"inputParseFunction",null),(0,s._)([(0,l.MZ)({readOnly:!0})],u.prototype,"labels",null),(0,s._)([(0,l.MZ)()],u.prototype,"max",null),(0,s._)([(0,l.MZ)()],u.prototype,"min",null),(0,s._)([(0,l.MZ)()],u.prototype,"precision",void 0),(0,s._)([(0,l.MZ)({readOnly:!0})],u.prototype,"state",null),(0,s._)([(0,l.MZ)()],u.prototype,"thumbsConstrained",void 0),(0,s._)([(0,l.MZ)()],u.prototype,"values",null),u=(0,s._)([(0,r.$)("esri.widgets.Slider.SliderViewModel")],u);const h=u}}]);