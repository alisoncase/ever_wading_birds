"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[74458],{23414:(t,o,e)=>{e.d(o,{u:()=>i});var a=e(74719),s=e(94685),n=e(4401),r=e(12037);async function i(t,o,e){if(!t)throw new a.default("print:invalid-layout-info-task-url","Can't fetch layout template info",{url:t});if("async"===await(0,s.getMode)(t)){const a=await(0,r.O)(t,o,void 0,e||void 0);return await a.waitForJobCompletion(),(await a.fetchResultData("Output_JSON")).value}return(await(0,n.g)(t,o,null,e)).results[0].value}},74458:(t,o,e)=>{e.r(o),e.d(o,{default:()=>w});var a=e(93800),s=e(13248),n=e(74719),r=e(19455),i=e(99521),l=e(49959),u=e(48602),p=(e(21265),e(50925),e(14746),e(47332)),d=e(75269),y=e(34587),h=e(36627),c=e(66374),f=e(23414);let m=class extends r.A{constructor(t){super(t),this.description=null,this.format=null,this.state="not-loaded",this.label=null,this.layoutInfoTaskUrl=null,this.layout=null,this.layoutItem=null,this.layoutOptions=null,this.layoutTemplateInfo=null,this.type=null}get id(){return this.layoutItem?.id??`${this.layout}-${(0,i.d)(JSON.stringify(this.toJSON()))}`}get mapSurroundInfoOptions(){const t=this.layoutTemplateInfo?.layoutOptions?.mapSurroundInfos;if(!t)return null;const o={northArrow:[],scaleBar:[],legend:[]};for(const e of t)switch(e.type){case"CIMMarkerNorthArrow":o.northArrow.push(e);break;case"CIMScaleLine":o.scaleBar.push(e);break;case"CIMGroupElement":e.elements?.some((t=>"CIMScaleLine"===t.type))&&o.scaleBar.push(e);break;case"CIMLegend":o.legend.push(e)}return o}_updateLayoutOptions(t){const o=this.layoutOptions?.legend??t.layoutOptions?.hasLegend,e=this.layoutOptions?.northArrow??(this.mapSurroundInfoOptions?.northArrow.length?this.mapSurroundInfoOptions?.northArrow.some((t=>{let{visible:o}=t;return o})):void 0),a=this.layoutOptions?.scaleBar??(this.mapSurroundInfoOptions?.scaleBar.length?this.mapSurroundInfoOptions?.scaleBar.some((t=>{let{visible:o}=t;return o})):void 0);this._set("layoutOptions",{legend:o,northArrow:e,scaleBar:a})}async fetchLayoutItemTemplateInfo(t){const{layoutItem:o}=this;if(o?.id&&!this.layoutTemplateInfo&&"loaded"!==this.state)try{this._set("state","loading");const e=this.layoutInfoTaskUrl;if(!e)throw new n.default("print:invalid-layout-info-task-url","Can't fetch layout template info",{url:e});"public"!==o.access&&s.id&&await s.id.getCredential(e);const a={Layout_Item_ID:JSON.stringify({id:o.id})},r=(await(0,f.u)(e,a,t))[0];this.setLayoutTemplateInfo(r)}catch(e){this._set("state",(0,l.isAbortError)(e)?"not-loaded":"error")}}setLayoutTemplateInfo(t){this._set("layoutTemplateInfo",t),this._updateLayoutOptions(t),this._set("state","loaded")}};(0,a._)([(0,u.MZ)({json:{write:!0}})],m.prototype,"description",void 0),(0,a._)([(0,p.e)(h.U)],m.prototype,"format",void 0),(0,a._)([(0,u.MZ)({readOnly:!0})],m.prototype,"id",null),(0,a._)([(0,u.MZ)({readOnly:!0})],m.prototype,"state",void 0),(0,a._)([(0,u.MZ)({json:{write:!0}})],m.prototype,"label",void 0),(0,a._)([(0,u.MZ)()],m.prototype,"layoutInfoTaskUrl",void 0),(0,a._)([(0,u.MZ)({json:{read:c.r,write:!0}})],m.prototype,"layout",void 0),(0,a._)([(0,u.MZ)({type:y.default,json:{write:!0}})],m.prototype,"layoutItem",void 0),(0,a._)([(0,u.MZ)({readOnly:!0,json:{write:!0}})],m.prototype,"layoutOptions",void 0),(0,a._)([(0,u.MZ)({readOnly:!0})],m.prototype,"layoutTemplateInfo",void 0),(0,a._)([(0,u.MZ)({readOnly:!0})],m.prototype,"mapSurroundInfoOptions",null),(0,a._)([(0,u.MZ)()],m.prototype,"type",void 0),m=(0,a._)([(0,d.$)("esri.widgets.Print.CustomTemplate")],m);const w=m}}]);