"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[17803,73529],{17803:(e,o,t)=>{t.r(o),t.d(o,{default:()=>w});var i,r=t(93800),s=t(82301),l=t(48602),n=(t(21265),t(50925),t(47332)),a=t(75269),p=t(73529),d=t(37382),u=t(88102),c=t(19455),y=t(80556);let h=i=class extends c.A{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new i({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,s.clone)(this.color)})}};(0,r._)([(0,l.MZ)({type:String,json:{write:!0}})],h.prototype,"description",void 0),(0,r._)([(0,l.MZ)({type:String,json:{write:!0}})],h.prototype,"label",void 0),(0,r._)([(0,l.MZ)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue",isRequired:!0}}})],h.prototype,"minValue",void 0),(0,r._)([(0,l.MZ)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue",isRequired:!0}}})],h.prototype,"maxValue",void 0),(0,r._)([(0,l.MZ)({type:u.default,json:{type:[y.jz],write:{isRequired:!0}}})],h.prototype,"color",void 0),h=i=(0,r._)([(0,a.$)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],h);const m=h;var f;let b=f=class extends p.default{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new f({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,s.clone)(this.colorClassBreakInfos),legendOptions:(0,s.clone)(this.legendOptions)})}};(0,r._)([(0,n.e)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],b.prototype,"type",void 0),(0,r._)([(0,l.MZ)({json:{write:{isRequired:!0}},type:String})],b.prototype,"field",void 0),(0,r._)([(0,l.MZ)({type:d.A,json:{write:!0}})],b.prototype,"legendOptions",void 0),(0,r._)([(0,l.MZ)({type:p.default.fieldTransformTypeKebabDict.apiValues,json:{type:p.default.fieldTransformTypeKebabDict.jsonValues,read:p.default.fieldTransformTypeKebabDict.read,write:p.default.fieldTransformTypeKebabDict.write}})],b.prototype,"fieldTransformType",void 0),(0,r._)([(0,l.MZ)({type:[m],json:{write:{isRequired:!0}}})],b.prototype,"colorClassBreakInfos",void 0),b=f=(0,r._)([(0,a.$)("esri.renderers.PointCloudClassBreaksRenderer")],b);const w=b},25902:(e,o,t)=>{t.d(o,{A:()=>d});var i,r=t(93800),s=t(48602),l=(t(21265),t(50925),t(14746),t(47332)),n=t(75269),a=t(54542);let p=i=class extends a.A{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new i({scaleFactor:this.scaleFactor})}};(0,r._)([(0,l.e)({pointCloudSplatAlgorithm:"splat"})],p.prototype,"type",void 0),(0,r._)([(0,s.MZ)({type:Number,value:1,nonNullable:!0,json:{write:{isRequired:!0}}})],p.prototype,"scaleFactor",void 0),p=i=(0,r._)([(0,n.$)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],p);const d=p},54542:(e,o,t)=>{t.d(o,{A:()=>d});var i=t(93800),r=t(42761),s=t(19455),l=t(48602),n=(t(21265),t(50925),t(14746),t(75269));const a=new r.J({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let p=class extends s.A{};(0,i._)([(0,l.MZ)({type:a.apiValues,readOnly:!0,nonNullable:!0,json:{type:a.jsonValues,read:!1,write:{writer:a.write,isRequired:!0}}})],p.prototype,"type",void 0),p=(0,i._)([(0,n.$)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],p);const d=p},73529:(e,o,t)=>{t.r(o),t.d(o,{default:()=>M});var i,r=t(93800),s=t(42761),l=t(19455),n=t(82301),a=t(48602),p=(t(21265),t(50925),t(75269));t(14746);let d=i=class extends l.A{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new i({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,r._)([(0,a.MZ)({type:String,json:{write:{isRequired:!0}}})],d.prototype,"field",void 0),(0,r._)([(0,a.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],d.prototype,"minValue",void 0),(0,r._)([(0,a.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],d.prototype,"maxValue",void 0),d=i=(0,r._)([(0,p.$)("esri.renderers.support.pointCloud.ColorModulation")],d);const u=d;var c,y=t(54542),h=t(47332);let m=c=class extends y.A{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new c({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,r._)([(0,h.e)({pointCloudFixedSizeAlgorithm:"fixed-size"})],m.prototype,"type",void 0),(0,r._)([(0,a.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],m.prototype,"size",void 0),(0,r._)([(0,a.MZ)({type:Boolean,json:{write:!0}})],m.prototype,"useRealWorldSymbolSizes",void 0),m=c=(0,r._)([(0,p.$)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],m);const f=m;var b=t(25902);const w={key:"type",base:y.A,typeMap:{"fixed-size":f,splat:b.A}},v=(0,s.O)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let _=class extends l.A{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,n.clone)(this.pointSizeAlgorithm),colorModulation:(0,n.clone)(this.colorModulation),pointsPerInch:(0,n.clone)(this.pointsPerInch)}}};(0,r._)([(0,a.MZ)({type:v.apiValues,readOnly:!0,nonNullable:!0,json:{type:v.jsonValues,read:!1,write:{writer:v.write,isRequired:!0}}})],_.prototype,"type",void 0),(0,r._)([(0,a.MZ)({types:w,json:{write:!0}})],_.prototype,"pointSizeAlgorithm",void 0),(0,r._)([(0,a.MZ)({type:u,json:{write:!0}})],_.prototype,"colorModulation",void 0),(0,r._)([(0,a.MZ)({json:{write:!0},nonNullable:!0,type:Number})],_.prototype,"pointsPerInch",void 0),_=(0,r._)([(0,p.$)("esri.renderers.PointCloudRenderer")],_),(_||(_={})).fieldTransformTypeKebabDict=new s.J({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const M=_}}]);