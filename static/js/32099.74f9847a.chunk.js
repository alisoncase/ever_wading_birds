/*! For license information please see 32099.74f9847a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[32099],{32099:(e,i,t)=>{t.r(i),t.d(i,{ComboboxItemGroup:()=>m});var o=t(57688),n=t(22912),l=t(25697),c=t(33171),a=t(59972),r=t(69842);const s="list",d="label",p="title",b=r.AH`.scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit: .5rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit: .75rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit: 1rem}:host,.list{margin:0;display:flex;flex-direction:column;padding:0}:host(:focus),.list:focus{outline:2px solid transparent;outline-offset:2px}.label{box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:0px;max-inline-size:100%}.title{--calcite-combobox-item-indent-value: calc( var(--calcite-combobox-item-spacing-unit) * var(--calcite-combobox-item-spacing-indent-multiplier) );border:0 solid;display:block;flex:1 1 0%;border-block-end-width:1px;font-weight:var(--calcite-font-weight-bold);word-wrap:break-word;word-break:break-word;padding:var(--calcite-combobox-item-spacing-unit);margin-inline-start:var(--calcite-combobox-item-indent-value);color:var(--calcite-combobox-item-group-text-color, var(--calcite-color-text-2));border-block-end-color:var(--calcite-combobox-item-group-border-color, var(--calcite-color-border-3))}::slotted(calcite-combobox-item-group:not([after-empty-group])){padding-block-start:var(--calcite-combobox-item-spacing-unit)}:host([hidden]){display:none}[hidden]{display:none}:host([item-hidden]){display:none}`;class m extends l.WF{constructor(){super(...arguments),this.guid=(0,c.g)(),this.afterEmptyGroup=!1,this.scale="m",this.itemHidden=!1}static#e=(()=>this.properties={afterEmptyGroup:7,ancestors:0,label:1,scale:1,itemHidden:7})();static#i=(()=>this.styles=b)();connectedCallback(){super.connectedCallback(),this.ancestors=(0,a.g)(this.el)}render(){const{el:e,scale:i}=this,t=(0,a.a)(e);return n.qy`<ul aria-labelledby=${this.guid??l.s6} class=${(0,l.CP)({[s]:!0,[`scale--${i}`]:!0})} role=group><li class=${(0,l.CP)({[d]:!0})} id=${this.guid??l.s6} role=presentation style=${(0,l.zl)({"--calcite-combobox-item-spacing-indent-multiplier":`${t}`})}><span class=${(0,l.CP)(p)}>${this.label}</span></li><slot></slot></ul>`}}(0,o.c)("calcite-combobox-item-group",m)},59972:(e,i,t)=>{t.d(i,{C:()=>r,I:()=>s,a:()=>u,b:()=>l,c:()=>c,d:()=>h,e:()=>p,f:()=>b,g:()=>d,h:()=>m,i:()=>g});var o=t(7176),n=t(57688);const l="CALCITE-COMBOBOX-ITEM",c="CALCITE-COMBOBOX-ITEM-GROUP",a=`${l}, ${c}`,r={input:"input",inputHidden:"input--hidden",chip:"chip",chipInvisible:"chip--invisible",selectionDisplayFit:"selection-display-fit",selectionDisplaySingle:"selection-display-single",listContainer:"list-container",icon:"icon",placeholderIcon:"placeholder-icon",selectedIcon:"selected-icon",floatingUIContainer:"floating-ui-container",screenReadersOnly:"screen-readers-only",wrapper:"wrapper",wrapperSingle:"wrapper--single",wrapperActive:"wrapper--active"},s={validationMessage:"comboboxValidationMessage"};function d(e){const i=e.parentElement?.closest(a),t=i?.parentElement?.closest(a);return[i,t].filter((e=>e))}function p(e){return e.ancestors?.filter((e=>"CALCITE-COMBOBOX-ITEM"===e.nodeName))||[]}function b(e){return(0,o.n)(e.querySelectorAll("calcite-combobox-item"))}function m(e){return(0,o.n)(e.querySelectorAll("calcite-combobox-item")).filter((e=>e.selected)).length>0}function u(e){if(!(0,n.i)())return 0;const i=document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group",e,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null),t=i.snapshotLength;if(t>0&&e.nodeName===l){for(let o=0;o<t;o++)if(i.snapshotItem(o).nodeName===c)return t}else if(e.nodeName===c)return t;return t+1}function g(e){return e.includes("single")}function h(e){return e.shortHeading||e.heading||e.textLabel}}}]);