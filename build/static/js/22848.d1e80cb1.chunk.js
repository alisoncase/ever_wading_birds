"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[22848],{22848:(e,t,i)=>{i.d(t,{previewWebStyleSymbol:()=>l});var n=i(23060),a=i(16804),h=i(41182),s=i(67297);async function l(e,t,i){const l=e.thumbnail?.url;if(l){const e=function(e,t){const i=!/\\.svg$/i.test(e.src)&&t?.disableUpsampling,n=Math.max(e.width,e.height);let s=null!=t?.maxSize?(0,a.Lz)(t.maxSize):h.CB.maxSize;i&&(s=Math.min(n,s));const l="number"==typeof t?.size?t?.size:null,d=Math.min(s,null!=l?(0,a.Lz)(l):n);if(d!==n){const t=0!==e.width&&0!==e.height?e.width/e.height:1;t>=1?(e.width=d,e.height=d/t):(e.width=d*t,e.height=d)}return e}((await(0,n.default)(l,{responseType:"image"})).data,i);return i?.node?(i.node.appendChild(e),i.node):e}const d=await e.fetchSymbol({acceptedFormats:s.t});return d?t(d,i):null}}}]);