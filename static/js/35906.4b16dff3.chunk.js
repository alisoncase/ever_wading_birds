/*! For license information please see 35906.4b16dff3.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[35906],{31937:(e,t,i)=>{function o(e,t){return(e+t)%t}i.d(t,{g:()=>o})},35906:(e,t,i)=>{i.r(t),i.d(t,{RadioButton:()=>k});var o=i(57688),a=i(41487),s=i(20443),c=i(25697),r=i(31937),n=i(7176),d=i(77204),l=i(56528),h=i(88006),u=i(36791),b=i(69842);const p="container",f=b.AH`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block;cursor:pointer}:host .container{position:relative;outline:2px solid transparent;outline-offset:2px}:host .radio{cursor:pointer;border-radius:9999px;background-color:var(--calcite-color-foreground-1);outline-color:transparent;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;box-shadow:inset 0 0 0 1px var(--calcite-color-border-input)}:host([hovered]) .radio,:host(:not([checked])[focused]:not([disabled])) .radio{box-shadow:inset 0 0 0 2px var(--calcite-color-brand)}:host([focused]) .radio{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host([disabled]) .radio{cursor:default;opacity:var(--calcite-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hovered][disabled]) .radio{box-shadow:inset 0 0 0 1px var(--calcite-color-border-input)}:host([scale=s]){--calcite-radio-size: var(--calcite-font-size--2)}:host([scale=m]){--calcite-radio-size: var(--calcite-font-size--1)}:host([scale=l]){--calcite-radio-size: var(--calcite-font-size-0)}.radio{block-size:var(--calcite-radio-size);max-inline-size:var(--calcite-radio-size);min-inline-size:var(--calcite-radio-size)}:host([scale=s][checked]) .radio,:host([hovered][scale=s][checked][disabled]) .radio{box-shadow:inset 0 0 0 4px var(--calcite-color-brand)}:host([scale=s][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 4px var(--calcite-color-brand),0 0 0 2px var(--calcite-color-foreground-1)}:host([scale=m][checked]) .radio,:host([hovered][scale=m][checked][disabled]) .radio{box-shadow:inset 0 0 0 5px var(--calcite-color-brand)}:host([scale=m][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 5px var(--calcite-color-brand),0 0 0 2px var(--calcite-color-foreground-1)}:host([scale=l][checked]) .radio,:host([hovered][scale=l][checked][disabled]) .radio{box-shadow:inset 0 0 0 6px var(--calcite-color-brand)}:host([scale=l][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 6px var(--calcite-color-brand),0 0 0 2px var(--calcite-color-foreground-1)}@media (forced-colors: active){:host([checked]) .radio:after,:host([checked][disabled]) .radio:after{content:"";inline-size:var(--calcite-radio-size);block-size:var(--calcite-radio-size);background-color:windowText;display:block}}::slotted(input[slot=hidden-form-input]){margin:0!important;opacity:0!important;outline:none!important;padding:0!important;position:absolute!important;inset:0!important;transform:none!important;-webkit-appearance:none!important;z-index:-1!important}:host([hidden]){display:none}[hidden]{display:none}`;class k extends c.WF{constructor(){super(),this.checked=!1,this.disabled=!1,this.focused=!1,this.hovered=!1,this.required=!1,this.scale="m",this.calciteInternalRadioButtonBlur=(0,c.lh)({cancelable:!1}),this.calciteInternalRadioButtonCheckedChange=(0,c.lh)({cancelable:!1}),this.calciteInternalRadioButtonFocus=(0,c.lh)({cancelable:!1}),this.calciteRadioButtonChange=(0,c.lh)({cancelable:!1}),this.listen("pointerenter",this.pointerEnterHandler),this.listen("pointerleave",this.pointerLeaveHandler),this.listen("click",this.clickHandler),this.listen("keydown",this.handleKeyDown)}static#e=(()=>this.properties={checked:7,disabled:7,focused:7,form:3,hovered:7,label:1,name:3,required:7,scale:3,value:1})();static#t=(()=>this.styles=f)();async emitCheckedChange(){this.calciteInternalRadioButtonCheckedChange.emit()}async setFocus(){await(0,u.c)(this),this.disabled||(0,n.b)(this.containerEl)}connectedCallback(){this.rootNode=this.el.getRootNode(),this.name&&this.checkLastRadioButton(),(0,h.c)(this),(0,d.c)(this),this.updateTabIndexOfOtherRadioButtonsInGroup(),super.connectedCallback()}willUpdate(e){this.hasUpdated&&e.has("checked")&&this.checkedChanged(this.checked),e.has("disabled")&&(this.hasUpdated||!1!==this.disabled)&&this.updateTabIndexOfOtherRadioButtonsInGroup(),e.has("name")&&this.checkLastRadioButton()}updated(){(0,l.u)(this)}loaded(){this.focused&&!this.disabled&&this.setFocus()}disconnectedCallback(){super.disconnectedCallback(),(0,h.d)(this),(0,d.d)(this),this.updateTabIndexOfOtherRadioButtonsInGroup()}checkedChanged(e){e&&this.uncheckOtherRadioButtonsInGroup(),this.calciteInternalRadioButtonCheckedChange.emit()}syncHiddenFormInput(e){e.type="radio"}selectItem(e,t){e[t].click()}queryButtons(){return Array.from(this.rootNode.querySelectorAll("calcite-radio-button:not([hidden])")).filter((e=>e.name===this.name))}isFocusable(){const e=this.queryButtons(),t=e.find((e=>!e.disabled)),i=e.find((e=>e.checked));return t===this.el&&!i}check(){this.disabled||(this.focused=!0,this.setFocus(),!this.checked&&(this.uncheckAllRadioButtonsInGroup(),this.checked=!0,this.calciteRadioButtonChange.emit()))}clickHandler(){this.disabled||this.check()}onLabelClick(e){if(this.disabled||this.el.hidden)return;const t=e.currentTarget,i=t.for?this.rootNode.querySelector(`calcite-radio-button[id="${t.for}"]`):t.querySelector(`calcite-radio-button[name="${this.name}"]`);i&&(i.focused=!0,this.setFocus(),!i.checked&&(this.uncheckOtherRadioButtonsInGroup(),i.checked=!0,this.calciteRadioButtonChange.emit()))}checkLastRadioButton(){const e=this.queryButtons().filter((e=>e.checked));if(e?.length>1){const t=e[e.length-1];e.filter((e=>e!==t)).forEach((e=>{e.checked=!1,e.emitCheckedChange()}))}}setContainerEl(e){this.containerEl=e}uncheckAllRadioButtonsInGroup(){this.queryButtons().forEach((e=>{e.checked&&(e.checked=!1,e.focused=!1)}))}uncheckOtherRadioButtonsInGroup(){this.queryButtons().filter((e=>e!==this.el)).forEach((e=>{e.checked&&(e.checked=!1,e.focused=!1)}))}updateTabIndexOfOtherRadioButtonsInGroup(){this.queryButtons().filter((e=>e!==this.el&&!e.disabled)).forEach((e=>{e.manager?.component.requestUpdate()}))}getTabIndex(){if(!this.disabled)return this.checked||this.isFocusable()?0:-1}pointerEnterHandler(){this.disabled||(this.hovered=!0)}pointerLeaveHandler(){this.disabled||(this.hovered=!1)}handleKeyDown(e){const{key:t}=e,{el:i}=this;if(-1===["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"," "].indexOf(t))return;if(" "===t)return this.check(),void e.preventDefault();let o=t;"rtl"===(0,n.g)(i)&&("ArrowRight"===t&&(o="ArrowLeft"),"ArrowLeft"===t&&(o="ArrowRight"));const a=Array.from(this.rootNode.querySelectorAll("calcite-radio-button:not([hidden])")).filter((e=>e.name===this.name));let s=0;const c=a.length;switch(a.some(((e,t)=>{if(e.checked)return s=t,!0})),o){case"ArrowLeft":case"ArrowUp":return e.preventDefault(),void this.selectItem(a,(0,r.g)(Math.max(s-1,-1),c));case"ArrowRight":case"ArrowDown":return e.preventDefault(),void this.selectItem(a,(0,r.g)(s+1,c));default:return}}onContainerBlur(){this.focused=!1,this.calciteInternalRadioButtonBlur.emit()}onContainerFocus(){this.disabled||(this.focused=!0,this.calciteInternalRadioButtonFocus.emit())}render(){const e=this.getTabIndex();return(0,l.I)({disabled:this.disabled,children:s.qy`<div .ariaChecked=${this.checked} .ariaLabel=${(0,h.g)(this)} class=${(0,c.CP)(p)} @blur=${this.onContainerBlur} @focus=${this.onContainerFocus} role=radio tabindex=${e??s.s6} ${(0,a.K)(this.setContainerEl)}><div class="radio"></div></div>${(0,d.H)({component:this})}`})}}(0,o.c)("calcite-radio-button",k)}}]);