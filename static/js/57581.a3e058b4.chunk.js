"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[57581],{57581:(t,e,o)=>{o.r(e),o.d(e,{default:()=>f});var n,r=o(93800),i=o(19455),l=o(48602),a=o(80556),d=(o(21265),o(14746),o(75269));function s(t){const{exifInfo:e,exifName:o,tagName:n}=t;if(!e||!o||!n)return null;const r=e.find((t=>t.name===o));return r?function(t){const{tagName:e,tags:o}=t;if(!o||!e)return null;const n=o.find((t=>t.name===e));return n?.value||null}({tagName:n,tags:r.tags}):null}const p={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};let u=n=class extends i.A{constructor(t){super(t),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null}get orientationInfo(){const{exifInfo:t}=this,e=s({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:t});return p[e]||null}clone(){return new n({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};(0,r._)([(0,l.MZ)({type:String})],u.prototype,"contentType",void 0),(0,r._)([(0,l.MZ)()],u.prototype,"exifInfo",void 0),(0,r._)([(0,l.MZ)({readOnly:!0})],u.prototype,"orientationInfo",null),(0,r._)([(0,l.MZ)({type:a.jz})],u.prototype,"id",void 0),(0,r._)([(0,l.MZ)({type:String})],u.prototype,"globalId",void 0),(0,r._)([(0,l.MZ)({type:String})],u.prototype,"keywords",void 0),(0,r._)([(0,l.MZ)({type:String})],u.prototype,"name",void 0),(0,r._)([(0,l.MZ)({json:{read:!1}})],u.prototype,"parentGlobalId",void 0),(0,r._)([(0,l.MZ)({json:{read:!1}})],u.prototype,"parentObjectId",void 0),(0,r._)([(0,l.MZ)({type:a.jz})],u.prototype,"size",void 0),(0,r._)([(0,l.MZ)({json:{read:!1}})],u.prototype,"url",void 0),u=n=(0,r._)([(0,d.$)("esri.rest.query.support.AttachmentInfo")],u);const f=u}}]);