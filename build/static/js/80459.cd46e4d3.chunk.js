"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[73529,80459],{25902:(e,o,t)=>{t.d(o,{A:()=>d});var i,r=t(93800),l=t(48602),n=(t(21265),t(50925),t(14746),t(47332)),s=t(75269),p=t(54542);let u=i=class extends p.A{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new i({scaleFactor:this.scaleFactor})}};(0,r._)([(0,n.e)({pointCloudSplatAlgorithm:"splat"})],u.prototype,"type",void 0),(0,r._)([(0,l.MZ)({type:Number,value:1,nonNullable:!0,json:{write:{isRequired:!0}}})],u.prototype,"scaleFactor",void 0),u=i=(0,r._)([(0,s.$)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],u);const d=u},54542:(e,o,t)=>{t.d(o,{A:()=>d});var i=t(93800),r=t(42761),l=t(19455),n=t(48602),s=(t(21265),t(50925),t(14746),t(75269));const p=new r.J({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let u=class extends l.A{};(0,i._)([(0,n.MZ)({type:p.apiValues,readOnly:!0,nonNullable:!0,json:{type:p.jsonValues,read:!1,write:{writer:p.write,isRequired:!0}}})],u.prototype,"type",void 0),u=(0,i._)([(0,s.$)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],u);const d=u},73529:(e,o,t)=>{t.r(o),t.d(o,{default:()=>f});var i,r=t(93800),l=t(42761),n=t(19455),s=t(82301),p=t(48602),u=(t(21265),t(50925),t(75269));t(14746);let d=i=class extends n.A{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new i({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,r._)([(0,p.MZ)({type:String,json:{write:{isRequired:!0}}})],d.prototype,"field",void 0),(0,r._)([(0,p.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],d.prototype,"minValue",void 0),(0,r._)([(0,p.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],d.prototype,"maxValue",void 0),d=i=(0,r._)([(0,u.$)("esri.renderers.support.pointCloud.ColorModulation")],d);const a=d;var c,h=t(54542),y=t(47332);let m=c=class extends h.A{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new c({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,r._)([(0,y.e)({pointCloudFixedSizeAlgorithm:"fixed-size"})],m.prototype,"type",void 0),(0,r._)([(0,p.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],m.prototype,"size",void 0),(0,r._)([(0,p.MZ)({type:Boolean,json:{write:!0}})],m.prototype,"useRealWorldSymbolSizes",void 0),m=c=(0,r._)([(0,u.$)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],m);const b=m;var w=t(25902);const v={key:"type",base:h.A,typeMap:{"fixed-size":b,splat:w.A}},_=(0,l.O)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let S=class extends n.A{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,s.clone)(this.pointSizeAlgorithm),colorModulation:(0,s.clone)(this.colorModulation),pointsPerInch:(0,s.clone)(this.pointsPerInch)}}};(0,r._)([(0,p.MZ)({type:_.apiValues,readOnly:!0,nonNullable:!0,json:{type:_.jsonValues,read:!1,write:{writer:_.write,isRequired:!0}}})],S.prototype,"type",void 0),(0,r._)([(0,p.MZ)({types:v,json:{write:!0}})],S.prototype,"pointSizeAlgorithm",void 0),(0,r._)([(0,p.MZ)({type:a,json:{write:!0}})],S.prototype,"colorModulation",void 0),(0,r._)([(0,p.MZ)({json:{write:!0},nonNullable:!0,type:Number})],S.prototype,"pointsPerInch",void 0),S=(0,r._)([(0,u.$)("esri.renderers.PointCloudRenderer")],S),(S||(S={})).fieldTransformTypeKebabDict=new l.J({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const f=S},80459:(e,o,t)=>{t.r(o),t.d(o,{default:()=>a});var i,r=t(93800),l=t(82301),n=t(48602),s=(t(21265),t(50925),t(47332)),p=t(75269),u=t(73529);let d=i=class extends u.default{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new i({...this.cloneProperties(),field:(0,l.clone)(this.field)})}};(0,r._)([(0,s.e)({pointCloudRGBRenderer:"point-cloud-rgb"})],d.prototype,"type",void 0),(0,r._)([(0,n.MZ)({type:String,json:{write:{isRequired:!0}}})],d.prototype,"field",void 0),d=i=(0,r._)([(0,p.$)("esri.renderers.PointCloudRGBRenderer")],d);const a=d}}]);