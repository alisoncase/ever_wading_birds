/*! For license information please see 5732.fc8c4f16.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[5732],{5732:(e,t,s)=>{s.r(t),s.d(t,{ChipGroup:()=>r});var i=s(57688),l=s(20443),c=s(41487),a=s(25697),n=s(7176),d=s(56528),h=s(36791);const o=s(69842).AH`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.container{display:flex;inline-size:100%;flex-wrap:wrap;gap:.5rem}::slotted(calcite-chip){flex:none}:host([scale=s]) .container{gap:.25rem}:host([scale=l]) .container{gap:.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`;class r extends a.WF{constructor(){super(),this.items=[],this.slotRefEl=(0,c._)(),this.disabled=!1,this.scale="m",this.selectedItems=[],this.selectionMode="none",this.calciteChipGroupSelect=(0,a.lh)({cancelable:!1}),this.listen("calciteInternalChipKeyEvent",this.calciteInternalChipKeyEventListener),this.listen("calciteChipClose",this.calciteChipCloseListener),this.listen("calciteChipSelect",this.calciteChipSelectListener),this.listen("calciteInternalChipSelect",this.calciteInternalChipSelectListener),this.listen("calciteInternalSyncSelectedChips",this.calciteInternalSyncSelectedChips)}static#e=(()=>this.properties={disabled:7,label:1,scale:3,selectedItems:0,selectionMode:3})();static#t=(()=>this.styles=o)();async setFocus(){if(await(0,h.c)(this),!this.disabled)return(this.selectedItems[0]||this.items[0])?.setFocus()}willUpdate(e){e.has("selectionMode")&&(this.hasUpdated||"none"!==this.selectionMode)&&this.updateItems()}updated(){(0,d.u)(this)}calciteInternalChipKeyEventListener(e){if(e.composedPath().includes(this.el)){const t=this.items?.filter((e=>!e.disabled));switch(e.detail.key){case"ArrowRight":(0,n.d)(t,e.detail.target,"next");break;case"ArrowLeft":(0,n.d)(t,e.detail.target,"previous");break;case"Home":(0,n.d)(t,e.detail.target,"first");break;case"End":(0,n.d)(t,e.detail.target,"last")}}e.stopPropagation()}calciteChipCloseListener(e){const t=e.target;this.items?.includes(t)&&(this.items?.indexOf(t)>0?(0,n.d)(this.items,t,"previous"):0===this.items?.indexOf(t)?(0,n.d)(this.items,t,"next"):(0,n.d)(this.items,t,"first")),this.items=this.items?.filter((e=>e!==t)),e.stopPropagation()}calciteChipSelectListener(e){e.composedPath().includes(this.el)&&this.setSelectedItems(!0,e.target),e.stopPropagation()}calciteInternalChipSelectListener(e){e.composedPath().includes(this.el)&&this.setSelectedItems(!1,e.target),e.stopPropagation()}calciteInternalSyncSelectedChips(e){e.composedPath().includes(this.el)&&(this.updateSelectedItems(),"single"===this.selectionMode&&this.selectedItems.length>1&&this.setSelectedItems(!1,e.target)),e.stopPropagation()}updateItems(e){const t=this.slotRefEl.value?.assignedElements({flatten:!0}).filter((e=>e?.matches("calcite-chip")));this.items=e?(0,n.s)(e):t,!(this.items?.length<1)&&(this.items?.forEach((e=>{e.interactive=!0,e.scale=this.scale,e.selectionMode=this.selectionMode,e.parentChipGroup=this.el})),this.setSelectedItems(!1))}updateSelectedItems(){this.selectedItems=this.items?.filter((e=>e.selected))}setSelectedItems(e,t){t&&this.items?.forEach((e=>{const s=t===e;switch(this.selectionMode){case"multiple":s&&(e.selected=!e.selected);break;case"single":e.selected=!!s&&!e.selected;break;case"single-persist":e.selected=!!s}})),this.updateSelectedItems(),e&&this.calciteChipGroupSelect.emit()}render(){const e="none"===this.selectionMode||"multiple"===this.selectionMode?"group":"radiogroup",{disabled:t}=this;return(0,d.I)({disabled:t,children:l.qy`<div .ariaLabel=${this.label} class="container" .role=${e}><slot @slotchange=${this.updateItems} ${(0,c.K)(this.slotRefEl)}></slot></div>`})}}(0,i.c)("calcite-chip-group",r)}}]);