/*! For license information please see 70879.857cf4f9.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[70879,92571],{70879:(e,t,i)=>{i.r(t),i.d(t,{Checkbox:()=>p});var o=i(57688),c=i(22912),s=i(41487),a=i(25697),l=i(7176),n=i(77204),r=i(56528),h=i(92571),d=i(88006),g=i(36791),b=i(69842);const u="toggle",k="check-svg",v=b.AH`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]) .check-svg,:host([scale=s]) .toggle{inline-size:var(--calcite-checkbox-size, .75rem);block-size:var(--calcite-checkbox-size, .75rem)}:host([scale=m]) .check-svg,:host([scale=m]) .toggle{inline-size:var(--calcite-checkbox-size, var(--calcite-font-size--1));block-size:var(--calcite-checkbox-size, var(--calcite-font-size--1))}:host([scale=l]) .check-svg,:host([scale=l]) .toggle{inline-size:var(--calcite-checkbox-size, 1rem);block-size:var(--calcite-checkbox-size, 1rem)}:host{position:relative;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}:host .check-svg{pointer-events:none;box-sizing:border-box;display:block;overflow:hidden;background-color:var(--calcite-color-foreground-1);fill:currentColor;stroke:currentColor;stroke-width:1;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;box-shadow:inset 0 0 0 1px var(--calcite-checkbox-border-color, var(--calcite-color-border-input));color:var(--calcite-checkbox-icon-color, var(--calcite-color-background))}:host([status=invalid]:not([checked])) .check-svg{box-shadow:inset 0 0 0 1px var(--calcite-color-status-danger)}:host([status=invalid]:not([checked])) .toggle:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host([checked]) .check-svg,:host([indeterminate]) .check-svg{background-color:var(--calcite-color-brand);box-shadow:inset 0 0 0 1px var(--calcite-color-brand)}:host([hovered]) .toggle .check-svg,:host .toggle:hover .check-svg{box-shadow:inset 0 0 0 2px var(--calcite-checkbox-border-color-hover, var(--calcite-color-brand))}.toggle{position:relative;outline-color:transparent}.toggle:active,.toggle:focus,.toggle:focus-visible{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.toggle:after,.toggle:before{inset-block-start:50%;inset-inline-start:50%;min-block-size:1.5rem;min-inline-size:1.5rem;position:absolute}.toggle:not(.calcite--rtl):after{content:"";transform:translate(-50%) translateY(-50%)}.toggle.calcite--rtl:before{content:"";transform:translate(50%) translateY(-50%)}@media (forced-colors: active){.check-svg{border:1px solid currentColor}}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}::slotted(input[slot=hidden-form-input]){margin:0!important;opacity:0!important;outline:none!important;padding:0!important;position:absolute!important;inset:0!important;transform:none!important;-webkit-appearance:none!important;z-index:-1!important}:host([hidden]){display:none}[hidden]{display:none}`;class p extends a.WF{constructor(){super(),this.checkedPath="M5.5 12L2 8.689l.637-.636L5.5 10.727l8.022-7.87.637.637z",this.indeterminatePath="M13 8v1H3V8z",this.onLabelClick=()=>{this.toggle()},this.toggleEl=(0,s._)(),this.checked=!1,this.disabled=!1,this.hovered=!1,this.indeterminate=!1,this.required=!1,this.scale="m",this.status="idle",this.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1},this.calciteCheckboxChange=(0,a.lh)({cancelable:!1}),this.calciteInternalCheckboxBlur=(0,a.lh)({cancelable:!1}),this.calciteInternalCheckboxFocus=(0,a.lh)({cancelable:!1}),this.listen("click",this.clickHandler),this.listen("keydown",this.keyDownHandler)}static#e=(()=>this.properties={checked:7,disabled:7,form:3,hovered:7,indeterminate:7,label:1,name:3,required:7,scale:3,status:3,validity:0,value:1})();static#t=(()=>this.styles=v)();async setFocus(){await(0,g.c)(this),this.toggleEl.value?.focus()}connectedCallback(){super.connectedCallback(),(0,d.c)(this),(0,n.c)(this)}updated(){(0,r.u)(this)}disconnectedCallback(){super.disconnectedCallback(),(0,d.d)(this),(0,n.d)(this)}syncHiddenFormInput(e){e.type="checkbox"}getPath(){return this.indeterminate?this.indeterminatePath:this.checked?this.checkedPath:""}toggle(){this.disabled||(this.checked=!this.checked,this.setFocus(),this.indeterminate=!1,this.calciteCheckboxChange.emit())}keyDownHandler(e){(0,h.i)(e.key)&&(this.toggle(),e.preventDefault())}clickHandler(){this.toggle()}onToggleBlur(){this.calciteInternalCheckboxBlur.emit(!1)}onToggleFocus(){this.calciteInternalCheckboxFocus.emit(!0)}render(){const e="rtl"===(0,l.g)(this.el);return(0,r.I)({disabled:this.disabled,children:c.qy`<div .ariaChecked=${this.checked} .ariaLabel=${(0,d.g)(this)} class=${(0,a.CP)({[u]:!0,[o.C.rtl]:e})} @blur=${this.onToggleBlur} @focus=${this.onToggleFocus} role=checkbox tabindex=${(this.disabled?void 0:0)??a.s6} ${(0,s.K)(this.toggleEl)}><svg aria-hidden=true class=${(0,a.CP)(k)} viewBox="0 0 16 16">${c.JW`<path d=${this.getPath()??a.s6} />`}</svg><slot></slot></div>${(0,n.H)({component:this})}`})}}(0,o.c)("calcite-checkbox",p)},92571:(e,t,i)=>{function o(e){return"Enter"===e||" "===e}i.d(t,{i:()=>o,n:()=>c});const c=["0","1","2","3","4","5","6","7","8","9"]}}]);