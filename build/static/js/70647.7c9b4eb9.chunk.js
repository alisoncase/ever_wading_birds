"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[70647],{70647:(e,i,n)=>{n.r(i),n.d(i,{default:()=>l});var s=n(93800),a=n(21265),t=n(79953),d=(n(50925),n(14746),n(74719),n(75269)),r=n(85724);let u=class extends r.default{initialize(){this.addHandles([(0,t.watch)((()=>this.view.scale),(()=>this._update()),t.initial)],"constructor")}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),i=this._commandsQueue.updateTracking.updating,n=null!=this._updatingRequiredPromise,s=!this._workerProxy,t=this.dataUpdating,d=e&&(i||n||s||t);return(0,a.A)("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${d}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${i}\n  -> updatingRequiredFields ${n}\n  -> updatingProxy ${s}\n  -> updatingPipeline ${t}\n`),d}};u=(0,s._)([(0,d.$)("esri.views.2d.layers.SubtypeGroupLayerView2D")],u);const l=u}}]);