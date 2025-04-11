"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[3733],{13733:(e,t,o)=>{o.r(t),o.d(t,{default:()=>te});var r=o(93800),i=o(77955),n=o(23060),s=o(74719),l=o(82301),a=o(50925),d=o(59321),u=o(93670),p=o(49959),c=o(43103),y=o(48602),f=(o(21265),o(14800)),h=o(75269),v=o(15484),m=o(57457),g=o(33979),b=o(9171),w=o(53367),_=o(8592),T=o(30528),A=o(75215),M=o(34787),x=o(80556),S=o(47332),C=o(19455);o(14746);let R=class extends C.A{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};(0,r._)([(0,y.MZ)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],R.prototype,"field",void 0),(0,r._)([(0,y.MZ)({readOnly:!0,nonNullable:!0,json:{read:!1,write:{isRequired:!0}}})],R.prototype,"type",void 0),R=(0,r._)([(0,h.$)("esri.layers.pointCloudFilters.PointCloudFilter")],R);const Z=R;var j;let I=j=class extends Z{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new j({field:this.field,requiredClearBits:(0,l.o8)(this.requiredClearBits),requiredSetBits:(0,l.o8)(this.requiredSetBits)})}};(0,r._)([(0,y.MZ)({type:[x.jz],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],I.prototype,"requiredClearBits",void 0),(0,r._)([(0,y.MZ)({type:[x.jz],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],I.prototype,"requiredSetBits",void 0),(0,r._)([(0,S.e)({pointCloudBitfieldFilter:"bitfield"})],I.prototype,"type",void 0),I=j=(0,r._)([(0,h.$)("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],I);const q=I;var P;let V=P=class extends Z{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new P({field:this.field,includedReturns:(0,l.o8)(this.includedReturns)})}};(0,r._)([(0,y.MZ)({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],V.prototype,"includedReturns",void 0),(0,r._)([(0,S.e)({pointCloudReturnFilter:"return"})],V.prototype,"type",void 0),V=P=(0,r._)([(0,h.$)("esri.layers.pointCloudFilters.PointCloudReturnFilter")],V);const F=V;var z;let B=z=class extends Z{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new z({field:this.field,mode:this.mode,values:(0,l.o8)(this.values)})}};(0,r._)([(0,y.MZ)({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],B.prototype,"mode",void 0),(0,r._)([(0,S.e)({pointCloudValueFilter:"value"})],B.prototype,"type",void 0),(0,r._)([(0,y.MZ)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],B.prototype,"values",void 0),B=z=(0,r._)([(0,h.$)("esri.layers.pointCloudFilters.PointCloudValueFilter")],B);const N={key:"type",base:Z,typeMap:{value:B,bitfield:q,return:F}};var $,E=o(75238),O=o(50616),k=o(14365),K=o(56488),D=o(17803),L=o(44294);let U=$=class extends L.A{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new $({...this.cloneProperties(),field:(0,l.o8)(this.field)})}};(0,r._)([(0,S.e)({pointCloudRGBRenderer:"point-cloud-rgb"})],U.prototype,"type",void 0),(0,r._)([(0,y.MZ)({type:String,json:{write:{isRequired:!0}}})],U.prototype,"field",void 0),U=$=(0,r._)([(0,h.$)("esri.renderers.PointCloudRGBRenderer")],U);const G=U;var W=o(94265),X=o(87614);const J={key:"type",base:L.A,typeMap:{"point-cloud-class-breaks":D.A,"point-cloud-rgb":G,"point-cloud-stretch":W.A,"point-cloud-unique-value":X.A},errorContext:"renderer"};var Q=o(41317),Y=o(1802);const H=(0,k.p)();let ee=class extends((0,M.w6)((0,b.b)((0,_.q)((0,T.A)((0,A.j)((0,d.P)((0,w.d)((0,g.p)(m.A))))))))){constructor(){super(...arguments),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t?.domain?t.domain:null}readServiceFields(e,t,o){return Array.isArray(e)?e.map((e=>{const t=new O.A;return"FieldTypeInteger"===e.type&&((e=(0,l.o8)(e)).type="esriFieldTypeInteger"),t.read(e,o),t})):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map((e=>new O.A({name:e.name,type:"ELEVATION"===e.name?"double":"integer"}))):null}set elevationInfo(e){null!=e&&"absolute-height"!==e.mode||this._set("elevationInfo",e),this._validateElevationInfo(e)}writeRenderer(e,t,o,r){(0,u.sM)("layerDefinition.drawingInfo.renderer",e.write({},r),t)}load(e){const t=null!=e?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(p.QP).then((()=>this._fetchService(t)));return this.addResolvingPromise(o),Promise.resolve(this)}createPopupTemplate(e){const t=(0,Y.tn)(this,e);return t&&(this._formatPopupTemplateReturnsField(t),this._formatPopupTemplateRGBField(t)),t}_formatPopupTemplateReturnsField(e){const t=this.fieldsIndex.get("RETURNS");if(!t)return;const o=e.fieldInfos?.find((e=>e.fieldName===t.name));if(!o)return;const r=new K.A({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`\n        var returnValue = $feature.${t.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});e.expressionInfos=[...e.expressionInfos||[],r],o.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(e){const t=this.fieldsIndex.get("RGB");if(!t)return;const o=e.fieldInfos?.find((e=>e.fieldName===t.name));if(!o)return;const r=new K.A({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`\n        var rgb = $feature.${t.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});e.expressionInfos=[...e.expressionInfos||[],r],o.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){if(await this.load(t),!this.attributeStorageInfo)throw new s.A("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const o=this.fieldsIndex.get(e);if(!o)throw new s.A("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const r of this.attributeStorageInfo)if(r.name===o.name){const e=(0,c.fj)(this.parsedUrl?.path??"",`./statistics/${r.key}`);return(0,n.A)(e,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new s.A("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(M.Xh.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(M.Xh.SAVE,e)}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new s.A("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s.A("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new s.A("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((t=>t.name===e))}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(e){(0,Q.XF)(a.A.getLogger(this),(0,Q.B)("Point cloud layers","absolute-height",e)),(0,Q.XF)(a.A.getLogger(this),(0,Q.tW)("Point cloud layers",e))}};(0,r._)([(0,y.MZ)({type:["PointCloudLayer"]})],ee.prototype,"operationalLayerType",void 0),(0,r._)([(0,y.MZ)(E.M6)],ee.prototype,"popupEnabled",void 0),(0,r._)([(0,y.MZ)({type:i.A,json:{name:"popupInfo",write:!0}})],ee.prototype,"popupTemplate",void 0),(0,r._)([(0,y.MZ)({readOnly:!0,json:{read:!1}})],ee.prototype,"defaultPopupTemplate",null),(0,r._)([(0,y.MZ)({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],ee.prototype,"opacity",void 0),(0,r._)([(0,y.MZ)({type:["show","hide"]})],ee.prototype,"listMode",void 0),(0,r._)([(0,y.MZ)({types:[N],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],ee.prototype,"filters",void 0),(0,r._)([(0,y.MZ)({type:[O.A]})],ee.prototype,"fields",void 0),(0,r._)([(0,y.MZ)(H.fieldsIndex)],ee.prototype,"fieldsIndex",void 0),(0,r._)([(0,f.w)("service","fields",["fields","attributeStorageInfo"])],ee.prototype,"readServiceFields",null),(0,r._)([(0,y.MZ)(H.outFields)],ee.prototype,"outFields",void 0),(0,r._)([(0,y.MZ)({readOnly:!0})],ee.prototype,"attributeStorageInfo",void 0),(0,r._)([(0,y.MZ)(E.Yj)],ee.prototype,"elevationInfo",null),(0,r._)([(0,y.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],ee.prototype,"path",void 0),(0,r._)([(0,y.MZ)(E.fV)],ee.prototype,"legendEnabled",void 0),(0,r._)([(0,y.MZ)({types:J,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:J},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],ee.prototype,"renderer",void 0),(0,r._)([(0,v.K)("renderer")],ee.prototype,"writeRenderer",null),(0,r._)([(0,y.MZ)({json:{read:!1},readOnly:!0})],ee.prototype,"type",void 0),ee=(0,r._)([(0,h.$)("esri.layers.PointCloudLayer")],ee);const te=ee},17803:(e,t,o)=>{o.d(t,{A:()=>g});var r,i=o(93800),n=o(82301),s=o(48602),l=(o(21265),o(50925),o(47332)),a=o(75269),d=o(44294),u=o(37382),p=o(88102),c=o(19455),y=o(80556);let f=r=class extends c.A{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new r({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,n.o8)(this.color)})}};(0,i._)([(0,s.MZ)({type:String,json:{write:!0}})],f.prototype,"description",void 0),(0,i._)([(0,s.MZ)({type:String,json:{write:!0}})],f.prototype,"label",void 0),(0,i._)([(0,s.MZ)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue",isRequired:!0}}})],f.prototype,"minValue",void 0),(0,i._)([(0,s.MZ)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue",isRequired:!0}}})],f.prototype,"maxValue",void 0),(0,i._)([(0,s.MZ)({type:p.A,json:{type:[y.jz],write:{isRequired:!0}}})],f.prototype,"color",void 0),f=r=(0,i._)([(0,a.$)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],f);const h=f;var v;let m=v=class extends d.A{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new v({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,n.o8)(this.colorClassBreakInfos),legendOptions:(0,n.o8)(this.legendOptions)})}};(0,i._)([(0,l.e)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],m.prototype,"type",void 0),(0,i._)([(0,s.MZ)({json:{write:{isRequired:!0}},type:String})],m.prototype,"field",void 0),(0,i._)([(0,s.MZ)({type:u.A,json:{write:!0}})],m.prototype,"legendOptions",void 0),(0,i._)([(0,s.MZ)({type:d.A.fieldTransformTypeKebabDict.apiValues,json:{type:d.A.fieldTransformTypeKebabDict.jsonValues,read:d.A.fieldTransformTypeKebabDict.read,write:d.A.fieldTransformTypeKebabDict.write}})],m.prototype,"fieldTransformType",void 0),(0,i._)([(0,s.MZ)({type:[h],json:{write:{isRequired:!0}}})],m.prototype,"colorClassBreakInfos",void 0),m=v=(0,i._)([(0,a.$)("esri.renderers.PointCloudClassBreaksRenderer")],m);const g=m},41317:(e,t,o)=>{o.d(t,{$7:()=>x,B:()=>M,Fo:()=>_,M7:()=>R,NN:()=>c,Q5:()=>T,Tq:()=>j,Up:()=>A,XF:()=>C,Ze:()=>m,bK:()=>l,bh:()=>p,id:()=>g,ky:()=>u,qt:()=>Z,tW:()=>S,v9:()=>y,w7:()=>a,wF:()=>s,wS:()=>b,wz:()=>h,x:()=>f,xS:()=>w,ze:()=>d});var r=o(84190),i=o(34308);function n(e){return e?Z:j}function s(e,t){return t?.mode?t.mode:n(e).mode}function l(e,t){return null!=t?t:n(e)}function a(e,t){return s(null==e||(e.hasZ??!1),t)}function d(e,t){return l(null==e||(e.hasZ??!1),t)}function u(e){const t=v(e);return a(e.geometry,t)}function p(e){const t=v(e),o=a(e.geometry,t),r=null!=t&&"on-the-ground"!==o?R(t):0,i=t?.featureExpressionInfo;return{mode:o,offset:r,featureExpressionInfo:i}}function c(e){return h(p(e))}function y(e){return h(e)||f(e)}function f(e){return"0"===e?.featureExpressionInfo?.expression}function h(e){if(!e)return!1;if("on-the-ground"===e.mode)return!1;const t=e?.featureExpressionInfo?e.featureExpressionInfo.expression:null;return!(!t||"0"===t)}function v(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function m(e,t){if(!e?.offset)return 0;const{offset:o,unit:i}=e;if("decimal-degrees"===i)return 0;const n="unknown"!==i&&i?i:"meters",s=(0,r.mq)(t);return s?(0,r.oU)(o,n,s):0}function g(e,t,o){if(!o?.mode)return;const r=e.hasZ?e.z:0,i=m(o,e.spatialReference);switch(o.mode){case"absolute-height":return r-i;case"on-the-ground":return 0;case"relative-to-ground":return r-((t.elevationProvider.getElevation(e.x,e.y,r,e.spatialReference,"ground")??0)+i);case"relative-to-scene":return r-((t.elevationProvider.getElevation(e.x,e.y,r,e.spatialReference,"scene")??0)+i)}}function b(e,t,o){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return _(e,t.x,t.y,t.hasZ?t.z:0,t.spatialReference,o,r)}function w(e,t,o,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return _(e,t[0],t[1],t.length>2?t[2]:0,o,r,i)}function _(e,t,o,r,i,n){let s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;if(null==n)return;const l=null!=s?s.mode:"absolute-height";if("on-the-ground"===l)return 0;const{absoluteZ:a}=T(t,o,r,i,e,n);return function(e,t,o,r,i,n,s,l){const a=m(s,i);switch(l){case"absolute-height":return e-a;case"relative-to-ground":return e-((n.elevationProvider.getElevation(t,o,r,i,"ground")??0)+a);case"relative-to-scene":return e-((n.elevationProvider.getElevation(t,o,r,i,"scene")??0)+a)}}(a,t,o,r,i,e,s,l)}function T(e,t,o,r,i,n){const s=m(n,r);switch(n.mode){case"absolute-height":return{absoluteZ:o+s,elevation:0};case"on-the-ground":{const o=i.elevationProvider.getElevation(e,t,0,r,"ground")??0;return{absoluteZ:o,elevation:o}}case"relative-to-ground":{const n=i.elevationProvider.getElevation(e,t,o,r,"ground")??0;return{absoluteZ:o+n+s,elevation:n}}case"relative-to-scene":{const n=i.elevationProvider.getElevation(e,t,o,r,"scene")??0;return{absoluteZ:o+n+s,elevation:n}}}}function A(e,t){if(null==t)return!1;const{mode:o}=t;return null!=o&&("scene"===e&&"relative-to-scene"===o||"ground"===e&&"absolute-height"!==o)}function M(e,t,o){return o&&o.mode!==t?`${e} only support ${t} elevation mode`:null}function x(e,t,o){return o?.mode===t?`${e} do not support ${t} elevation mode`:null}function S(e,t){return null!=t?.featureExpressionInfo&&"0"!==t.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function C(e,t){t&&e.warn(".elevationInfo=",t)}function R(e){return(e?.offset??0)*(0,i.Ao)(e?.unit)}const Z={mode:"absolute-height",offset:0},j={mode:"on-the-ground",offset:null}},44294:(e,t,o)=>{o.d(t,{A:()=>M});var r,i=o(93800),n=o(42761),s=o(19455),l=o(82301),a=o(48602),d=(o(21265),o(50925),o(75269));o(14746);let u=r=class extends s.A{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new r({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,i._)([(0,a.MZ)({type:String,json:{write:{isRequired:!0}}})],u.prototype,"field",void 0),(0,i._)([(0,a.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],u.prototype,"minValue",void 0),(0,i._)([(0,a.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],u.prototype,"maxValue",void 0),u=r=(0,i._)([(0,d.$)("esri.renderers.support.pointCloud.ColorModulation")],u);const p=u,c=new n.J({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let y=class extends s.A{};(0,i._)([(0,a.MZ)({type:c.apiValues,readOnly:!0,nonNullable:!0,json:{type:c.jsonValues,read:!1,write:{writer:c.write,isRequired:!0}}})],y.prototype,"type",void 0),y=(0,i._)([(0,d.$)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],y);const f=y;var h,v=o(47332);let m=h=class extends f{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new h({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,i._)([(0,v.e)({pointCloudFixedSizeAlgorithm:"fixed-size"})],m.prototype,"type",void 0),(0,i._)([(0,a.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],m.prototype,"size",void 0),(0,i._)([(0,a.MZ)({type:Boolean,json:{write:!0}})],m.prototype,"useRealWorldSymbolSizes",void 0),m=h=(0,i._)([(0,d.$)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],m);const g=m;var b;let w=b=class extends f{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new b({scaleFactor:this.scaleFactor})}};(0,i._)([(0,v.e)({pointCloudSplatAlgorithm:"splat"})],w.prototype,"type",void 0),(0,i._)([(0,a.MZ)({type:Number,value:1,nonNullable:!0,json:{write:{isRequired:!0}}})],w.prototype,"scaleFactor",void 0),w=b=(0,i._)([(0,d.$)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],w);const _={key:"type",base:f,typeMap:{"fixed-size":g,splat:w}},T=(0,n.O)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let A=class extends s.A{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,l.o8)(this.pointSizeAlgorithm),colorModulation:(0,l.o8)(this.colorModulation),pointsPerInch:(0,l.o8)(this.pointsPerInch)}}};(0,i._)([(0,a.MZ)({type:T.apiValues,readOnly:!0,nonNullable:!0,json:{type:T.jsonValues,read:!1,write:{writer:T.write,isRequired:!0}}})],A.prototype,"type",void 0),(0,i._)([(0,a.MZ)({types:_,json:{write:!0}})],A.prototype,"pointSizeAlgorithm",void 0),(0,i._)([(0,a.MZ)({type:p,json:{write:!0}})],A.prototype,"colorModulation",void 0),(0,i._)([(0,a.MZ)({json:{write:!0},nonNullable:!0,type:Number})],A.prototype,"pointsPerInch",void 0),A=(0,i._)([(0,d.$)("esri.renderers.PointCloudRenderer")],A),(A||(A={})).fieldTransformTypeKebabDict=new n.J({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const M=A},87614:(e,t,o)=>{o.d(t,{A:()=>g});var r,i=o(93800),n=o(82301),s=o(48602),l=(o(21265),o(50925),o(47332)),a=o(75269),d=o(44294),u=o(37382),p=o(88102),c=o(19455),y=o(80556);let f=r=class extends c.A{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new r({description:this.description,label:this.label,values:(0,n.o8)(this.values),color:(0,n.o8)(this.color)})}};(0,i._)([(0,s.MZ)({type:String,json:{write:!0}})],f.prototype,"description",void 0),(0,i._)([(0,s.MZ)({type:String,json:{write:!0}})],f.prototype,"label",void 0),(0,i._)([(0,s.MZ)({type:[String],json:{write:{isRequired:!0}}})],f.prototype,"values",void 0),(0,i._)([(0,s.MZ)({type:p.A,json:{type:[y.jz],write:{isRequired:!0}}})],f.prototype,"color",void 0),f=r=(0,i._)([(0,a.$)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],f);const h=f;var v;let m=v=class extends d.A{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new v({...this.cloneProperties(),field:(0,n.o8)(this.field),fieldTransformType:(0,n.o8)(this.fieldTransformType),colorUniqueValueInfos:(0,n.o8)(this.colorUniqueValueInfos),legendOptions:(0,n.o8)(this.legendOptions)})}};(0,i._)([(0,l.e)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],m.prototype,"type",void 0),(0,i._)([(0,s.MZ)({json:{write:{isRequired:!0}},type:String})],m.prototype,"field",void 0),(0,i._)([(0,s.MZ)({type:d.A.fieldTransformTypeKebabDict.apiValues,json:{type:d.A.fieldTransformTypeKebabDict.jsonValues,read:d.A.fieldTransformTypeKebabDict.read,write:d.A.fieldTransformTypeKebabDict.write}})],m.prototype,"fieldTransformType",void 0),(0,i._)([(0,s.MZ)({type:[h],json:{write:{isRequired:!0}}})],m.prototype,"colorUniqueValueInfos",void 0),(0,i._)([(0,s.MZ)({type:u.A,json:{write:!0}})],m.prototype,"legendOptions",void 0),m=v=(0,i._)([(0,a.$)("esri.renderers.PointCloudUniqueValueRenderer")],m);const g=m},94265:(e,t,o)=>{o.d(t,{A:()=>y});var r,i=o(93800),n=o(82301),s=o(48602),l=(o(21265),o(50925),o(47332)),a=o(75269),d=o(44294),u=o(37382),p=o(88311);let c=r=class extends d.A{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new r({...this.cloneProperties(),field:(0,n.o8)(this.field),fieldTransformType:(0,n.o8)(this.fieldTransformType),stops:(0,n.o8)(this.stops),legendOptions:(0,n.o8)(this.legendOptions)})}};(0,i._)([(0,l.e)({pointCloudStretchRenderer:"point-cloud-stretch"})],c.prototype,"type",void 0),(0,i._)([(0,s.MZ)({json:{write:{isRequired:!0}},type:String})],c.prototype,"field",void 0),(0,i._)([(0,s.MZ)({type:u.A,json:{write:!0}})],c.prototype,"legendOptions",void 0),(0,i._)([(0,s.MZ)({type:d.A.fieldTransformTypeKebabDict.apiValues,json:{type:d.A.fieldTransformTypeKebabDict.jsonValues,read:d.A.fieldTransformTypeKebabDict.read,write:d.A.fieldTransformTypeKebabDict.write}})],c.prototype,"fieldTransformType",void 0),(0,i._)([(0,s.MZ)({type:[p.A],json:{write:{isRequired:!0}}})],c.prototype,"stops",void 0),c=r=(0,i._)([(0,a.$)("esri.renderers.PointCloudStretchRenderer")],c);const y=c}}]);