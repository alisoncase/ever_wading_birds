"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[1606,20348,77019,99400],{1606:(t,e,i)=>{i.r(e),i.d(e,{default:()=>u});var n=i(93800),s=i(48602),a=(i(21265),i(50925),i(14746),i(75269)),r=i(99400),l=i(20348);let o=class extends r.default{constructor(t){super(t),this.average=null,this.bins=null,this.hasTimeData=!1,this.labelFormatFunction=t=>{if(this.hasTimeData)return(0,l.formatDateLabel)(t);const{max:e,min:i,precision:n}=this,s=e-i>10?2:n;return(0,l.formatNumberLabel)(parseFloat(t.toFixed(s)))},this.rangeType="equal",this.standardDeviation=null}generateWhereClause(t){const{rangeType:e,state:i,values:n}=this;if("ready"!==i||!n?.length||null==t)return null;const s=n[0],a=n.length>1?n[n.length-1]:null;switch(e){case"equal":return`${t} = ${s}`;case"not-equal":return`${t} <> ${s}`;case"less-than":return`${t} < ${s}`;case"greater-than":return`${t} > ${s}`;case"at-least":return`${t} >= ${s}`;case"at-most":return`${t} <= ${s}`;case"between":return`${t} BETWEEN ${s} AND ${a}`;case"not-between":return`${t} NOT BETWEEN ${s} AND ${a}`;default:return null}}};(0,n._)([(0,s.MZ)()],o.prototype,"average",void 0),(0,n._)([(0,s.MZ)()],o.prototype,"bins",void 0),(0,n._)([(0,s.MZ)()],o.prototype,"hasTimeData",void 0),(0,n._)([(0,s.MZ)()],o.prototype,"labelFormatFunction",void 0),(0,n._)([(0,s.MZ)()],o.prototype,"rangeType",void 0),(0,n._)([(0,s.MZ)()],o.prototype,"standardDeviation",void 0),o=(0,n._)([(0,a.$)("esri.widgets.HistogramRangeSlider.HistogramRangeSliderViewModel")],o);const u=o},20348:(t,e,i)=>{i.r(e),i.d(e,{formatDateLabel:()=>o,formatNumberLabel:()=>u,getDeviationValues:()=>h,getDynamicPathForSizeStops:()=>p,getFillFromColor:()=>m,getPathForSizeStops:()=>c,getSizesFromVariable:()=>d,getStopChanges:()=>f});var n=i(88102),s=i(66845),a=i(23224),r=i(88171),l=i(56563);function o(t){return(0,s.Yq)(new Date(t),r.timelineDateFormatOptions)}function u(t){const e=Math.floor(Math.log10(Math.abs(t)))+1,i=e<4||e>6?4:e,n=Math.abs(t)>=1e6?"compact":"standard";return(0,a.ZV)(t,{notation:n,minimumSignificantDigits:2,maximumSignificantDigits:i})}function h(t,e,i){if(null==e||null==t)return[];const n=[];for(let s=-1*i;s<=i;s++)0!==s&&n.push(e+s*t);return n}function p(t){const{max:e,min:i,padding:n,pathHeight:s,pathWidth:a,stops:r}=t,l=e-i;let o,u=`M0 0 L${a} 0 `;const h=3===r.length?[r[0],r[1],r[2]]:[r[0],r[2],r[4]],p=Math.min.apply(Math,h.map((t=>t.size))),c=Math.max(Math.abs(h[0].size-h[1].size),Math.abs(h[2].size-h[1].size));return h.reverse(),h.forEach(((t,e)=>{let{size:r,value:h}=t;const d=Math.round((r-p)/c*100)/100,f=Math.round(s-(h-i)/l*s);o=d*a,0===o&&(o=n*a),0===e&&(u+=`L${o} 0 `),u+=`L${o} ${f} `})),u+=`L${o} ${s} L0 ${s} L0 0 Z`,u}function c(t){const{bottomValue:e,bottomWidth:i,max:n,min:s,pathHeight:a,pathWidth:r,topValue:l,topWidth:o}=t,u=o*r,h=i*r,p=n-s,c=Math.round(a-(e-s)/p*a);return`M${u} 0 L${u} ${Math.round(a-(l-s)/p*a)} L${h} ${c} L${h} ${a} L0 ${a} L0 0 Z`}function d(t){let e=t.maxSize,i=t.minSize;return e instanceof l.default&&(e=e.stops[0].size),i instanceof l.default&&(i=i.stops[0].size),[e,i]}function f(t,e,i){const n=i.length-1;if(n<0)return[];const s=i[0],a=i[n]-s,r=e-t,l=[];for(let o=1;o<n;o++){const e=(i[o]-s)/a*r+t;l.push({index:o,value:e})}return l.unshift({index:0,value:t}),l.push({index:n,value:e}),l}function m(t){return t instanceof n.default?t.toCss(!0):n.default.fromString(t??"").toCss(!0)}},99400:(t,e,i)=>{i.r(e),i.d(e,{default:()=>h});var n=i(93800),s=i(6946),a=i(74719),r=i(50925),l=i(48602),o=(i(21265),i(14746),i(75269));let u=class extends s.default{constructor(t){super(t),this.precision=4,this.thumbsConstrained=!0}set effectiveMax(t){this.setEffectiveMax(t)}set effectiveMin(t){this.setEffectiveMin(t)}set labelFormatFunction(t){this._set("labelFormatFunction",t)}set inputFormatFunction(t){this._set("inputFormatFunction",t)}set inputParseFunction(t){this._set("inputParseFunction",t)}get labels(){const{max:t,min:e,values:i}=this,n=i?.length?i.map(((t,e)=>this.getLabelForValue(t,"value",e))):[];return{max:this.getLabelForValue(t,"max"),min:this.getLabelForValue(e,"min"),values:n}}set max(t){this.setMax(t)}set min(t){this.setMin(t)}get state(){const{max:t,min:e}=this;return null!=t&&null!=e&&t>e?"ready":"disabled"}set values(t){const{max:e,min:i}=this,n=this.values;n&&t&&n.length===t.length&&n.every(((e,i)=>e===t[i]))||(this._set("values",null),t?.length&&(null!=i&&t.some((t=>t<i))&&(this.min=Math.min(...t)),null!=e&&t.some((t=>t>e))&&(this.max=Math.max(...t))),this._set("values",t))}toPrecision(t){return parseFloat(t.toFixed(this.precision))}defaultLabelFormatFunction(t){const{max:e,min:i,precision:n}=this,s=null!=e&&null!=i&&e-i>10?2:n;return parseFloat(t.toFixed(s)).toString()}defaultInputFormatFunction(t){return t.toString()}defaultInputParseFunction(t){return parseFloat(t)}getBounds(){const{effectiveMax:t,effectiveMin:e,max:i,min:n}=this;return{min:null!=e&&null!=n?Math.max(n,e):n,max:null!=t&&null!=i?Math.min(i,t):i}}getBoundsForValueAtIndex(t){const{thumbsConstrained:e,values:i}=this,{min:n,max:s}=this.getBounds();if(e&&i){const e=t-1,a=t+1;return{min:null!=i[e]?i[e]:n,max:null!=i[a]?i[a]:s}}return{min:n,max:s}}getLabelForValue(t,e,i){return null==t?null:this.labelFormatFunction?this.labelFormatFunction(t,e,i):this.defaultLabelFormatFunction(t)}setMax(t){const{max:e,values:i}=this;if(null==t)return void this._set("max",null);if(isNaN(t))return void this._logError("slider:invalid-value","Supplied value for property 'max' is NaN.");const n=this.toPrecision(t);if(e!==n&&(this._set("max",n),i?.length))for(let s=0;s<i.length;s++)n<i[s]&&this.setValue(s,n)}setMin(t){const{min:e,values:i}=this;if(null==t)return void this._set("min",null);if(isNaN(t))return void this._logError("slider:invalid-value","Supplied value for property 'min' is NaN.");const n=this.toPrecision(t);if(e!==n&&(this._set("min",n),i?.length))for(let s=0;s<i.length;s++)n>i[s]&&this.setValue(s,n)}setEffectiveMax(t){if(null==t)return void this._set("effectiveMax",null);if(isNaN(t))return void this._logError("slider:invalid-value","Supplied value for property 'effectiveMax' is NaN.");const e=this.toPrecision(t);this.effectiveMax!==e&&this._set("effectiveMax",this._applyBoundsToValue(e))}setEffectiveMin(t){if(null==t)return void this._set("effectiveMin",null);if(isNaN(t))return void this._logError("slider:invalid-value","Supplied value for property 'effectiveMin' is NaN.");const e=this.toPrecision(t);this.effectiveMin!==e&&this._set("effectiveMin",this._applyBoundsToValue(e))}setValue(t,e){if(isNaN(e))return void this._logError("slider:invalid-value","Supplied value for member of property 'values' is NaN.");const{values:i}=this;if(null==i)return void this._logError("slider:invalid-value","Supplied value for member of property 'values' is null.");const n=i[t],s=this.toPrecision(e);if(n===s)return;const a=[...i];a[t]=s,this._set("values",a),this.notifyChange("labels")}_applyBoundsToValue(t){const{max:e,min:i}=this;return null!=i&&t<i?i:null!=e&&t>e?e:t}_logError(t,e,i){r.A.getLogger(this).error(new a.default(t,e,i))}};(0,n._)([(0,l.MZ)()],u.prototype,"effectiveMax",null),(0,n._)([(0,l.MZ)()],u.prototype,"effectiveMin",null),(0,n._)([(0,l.MZ)()],u.prototype,"labelFormatFunction",null),(0,n._)([(0,l.MZ)()],u.prototype,"inputFormatFunction",null),(0,n._)([(0,l.MZ)()],u.prototype,"inputParseFunction",null),(0,n._)([(0,l.MZ)({readOnly:!0})],u.prototype,"labels",null),(0,n._)([(0,l.MZ)()],u.prototype,"max",null),(0,n._)([(0,l.MZ)()],u.prototype,"min",null),(0,n._)([(0,l.MZ)()],u.prototype,"precision",void 0),(0,n._)([(0,l.MZ)({readOnly:!0})],u.prototype,"state",null),(0,n._)([(0,l.MZ)()],u.prototype,"thumbsConstrained",void 0),(0,n._)([(0,l.MZ)()],u.prototype,"values",null),u=(0,n._)([(0,o.$)("esri.widgets.Slider.SliderViewModel")],u);const h=u}}]);