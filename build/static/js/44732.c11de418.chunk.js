"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[44732],{44732:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var o=n(93800),i=n(48602),a=(n(21265),n(50925),n(14746),n(75269)),s=n(99940),l=n(27811),c=n(49403),r=n(87118);const p={point:()=>[u("pin","point","draw.point"),u("line","polyline","draw.polyline"),u("polygon","polygon","draw.polygon")],polyline:()=>[u("line","polyline","draw.polyline")],polygon:()=>[u("polygon","polygon","draw.polygon")]};let d=class extends l.default{constructor(e){super(e),this.messages=null,this.type=null}loadDependencies(){return(0,c.W)({"action-pad":()=>Promise.all([n.e(86290),n.e(74597),n.e(29022)]).then(n.bind(n,29022)),"action-group":()=>Promise.all([n.e(86290),n.e(74597),n.e(11484)]).then(n.bind(n,11484)),action:()=>n.e(88342).then(n.bind(n,88342))})}render(){const{messages:e,type:t}=this,n=function(e){return[{icon:"cursor",messageKey:"selectFeature",action:"select-feature"},...p[e]?.()??[],{icon:"save",messageKey:"save",action:"save"},{icon:"trash",messageKey:"delete",action:"delete-feature"}]}(t);return(0,r.K)("calcite-action-pad",{expandDisabled:!0,layout:"horizontal",position:"start"},n.map((t=>{let{icon:n,messageKey:o,action:i}=t;const a=(0,s.Jt)(e,o);return(0,r.K)("calcite-action-group",null,(0,r.K)("calcite-action",{alignment:"center",bind:this,"data-action":i,icon:n,onclick:this.onAction,text:a,title:a}))})))}};function u(e,t,n){return{icon:e,messageKey:n,action:`draw-${t}`}}d.vnodeSelector="calcite-action-pad",(0,o._)([(0,i.MZ)()],d.prototype,"messages",void 0),(0,o._)([(0,i.MZ)()],d.prototype,"onAction",void 0),(0,o._)([(0,i.MZ)()],d.prototype,"type",void 0),d=(0,o._)([(0,a.$)("esri.widgets.OrientedImageryViewer.components.SketchTools")],d);const y=d}}]);