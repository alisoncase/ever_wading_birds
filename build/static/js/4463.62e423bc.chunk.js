"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[4463,65925,81788],{286:(e,t,i)=>{i.d(t,{A:()=>h});var o,r=i(93800),n=i(19455),s=i(82301),a=i(48602),l=(i(21265),i(50925),i(75269)),p=i(75400);let d=o=class extends n.A{constructor(){super(...arguments),this.blockWidth=void 0,this.blockHeight=void 0,this.compression=null,this.origin=null,this.firstPyramidLevel=null,this.maximumPyramidLevel=null,this.pyramidScalingFactor=2,this.pyramidBlockWidth=null,this.pyramidBlockHeight=null,this.isVirtualTileInfo=!1,this.tileInfo=null,this.transposeInfo=null,this.blockBoundary=null}clone(){return new o({blockWidth:this.blockWidth,blockHeight:this.blockHeight,compression:this.compression,origin:(0,s.clone)(this.origin),firstPyramidLevel:this.firstPyramidLevel,maximumPyramidLevel:this.maximumPyramidLevel,pyramidResolutions:(0,s.clone)(this.pyramidResolutions),pyramidScalingFactor:this.pyramidScalingFactor,pyramidBlockWidth:this.pyramidBlockWidth,pyramidBlockHeight:this.pyramidBlockHeight,isVirtualTileInfo:this.isVirtualTileInfo,tileInfo:(0,s.clone)(this.tileInfo),transposeInfo:(0,s.clone)(this.transposeInfo),blockBoundary:(0,s.clone)(this.blockBoundary)})}};(0,r._)([(0,a.MZ)({type:Number,json:{write:!0}})],d.prototype,"blockWidth",void 0),(0,r._)([(0,a.MZ)({type:Number,json:{write:!0}})],d.prototype,"blockHeight",void 0),(0,r._)([(0,a.MZ)({type:String,json:{write:!0}})],d.prototype,"compression",void 0),(0,r._)([(0,a.MZ)({type:p.default,json:{write:!0}})],d.prototype,"origin",void 0),(0,r._)([(0,a.MZ)({type:Number,json:{write:!0}})],d.prototype,"firstPyramidLevel",void 0),(0,r._)([(0,a.MZ)({type:Number,json:{write:!0}})],d.prototype,"maximumPyramidLevel",void 0),(0,r._)([(0,a.MZ)({json:{write:!0}})],d.prototype,"pyramidResolutions",void 0),(0,r._)([(0,a.MZ)({type:Number,json:{write:!0}})],d.prototype,"pyramidScalingFactor",void 0),(0,r._)([(0,a.MZ)({type:Number,json:{write:!0}})],d.prototype,"pyramidBlockWidth",void 0),(0,r._)([(0,a.MZ)({type:Number,json:{write:!0}})],d.prototype,"pyramidBlockHeight",void 0),(0,r._)([(0,a.MZ)({type:Boolean,json:{write:!0}})],d.prototype,"isVirtualTileInfo",void 0),(0,r._)([(0,a.MZ)({json:{write:!0}})],d.prototype,"tileInfo",void 0),(0,r._)([(0,a.MZ)()],d.prototype,"transposeInfo",void 0),(0,r._)([(0,a.MZ)({json:{write:!0}})],d.prototype,"blockBoundary",void 0),d=o=(0,r._)([(0,l.$)("esri.layers.support.RasterStorageInfo")],d);const h=d},4463:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var o,r=i(93800),n=i(19455),s=i(82301),a=i(48602),l=(i(21265),i(50925),i(75269)),p=i(12560),d=i(93321),h=i(81788),u=i(24889),c=i(65925),m=i(286);let y=o=class extends n.A{constructor(e){super(e),this.attributeTable=null,this.bandCount=null,this.colormap=null,this.extent=null,this.format=void 0,this.height=null,this.width=null,this.histograms=null,this.keyProperties={},this.multidimensionalInfo=null,this.noDataValue=null,this.pixelSize=null,this.pixelType=null,this.isPseudoSpatialReference=!1,this.spatialReference=null,this.statistics=null,this.storageInfo=null,this.transform=null}get bandInfos(){const e=this.keyProperties.BandProperties,{bandCount:t}=this;if(!e?.length||e.length<t){const e=[];for(let i=1;i<=t;i++)e.push(new h.default({name:"band_"+i}));return e}const i=e.map((e=>h.default.fromJSON(e)));for(let o=0;o<i.length;o++)i[o].name=i[o].name||"band_"+(o+1);return i}get dataType(){const e=this.keyProperties?.DataType?.toLowerCase()??"generic";return"stdtime"===e?"standard-time":e}get nativeExtent(){return this._get("nativeExtent")||this.extent}set nativeExtent(e){e&&this._set("nativeExtent",e)}get nativePixelSize(){if(null==this.transform||!this.transform.affectsPixelSize)return this.pixelSize;const e=this.nativeExtent;return{x:e.width/this.width,y:e.height/this.height}}get hasMultidimensionalTranspose(){return!!this.storageInfo?.transposeInfo}get sensorInfo(){if(this.keyProperties?.SensorName)return c.default.fromJSON(this.keyProperties)}clone(){return new o({attributeTable:(0,s.clone)(this.attributeTable),bandCount:this.bandCount,colormap:(0,s.clone)(this.colormap),extent:(0,s.clone)(this.extent),format:this.format,height:this.height,width:this.width,histograms:(0,s.clone)(this.histograms),keyProperties:(0,s.clone)(this.keyProperties),multidimensionalInfo:(0,s.clone)(this.multidimensionalInfo),noDataValue:this.noDataValue,pixelSize:(0,s.clone)(this.pixelSize),pixelType:this.pixelType,isPseudoSpatialReference:this.isPseudoSpatialReference,spatialReference:(0,s.clone)(this.spatialReference),statistics:(0,s.clone)(this.statistics),storageInfo:(0,s.clone)(this.storageInfo),transform:(0,s.clone)(this.transform)})}};(0,r._)([(0,a.MZ)({json:{write:!0}})],y.prototype,"attributeTable",void 0),(0,r._)([(0,a.MZ)({json:{write:!0}})],y.prototype,"bandCount",void 0),(0,r._)([(0,a.MZ)({readOnly:!0})],y.prototype,"bandInfos",null),(0,r._)([(0,a.MZ)({json:{write:!0}})],y.prototype,"colormap",void 0),(0,r._)([(0,a.MZ)({type:String,readOnly:!0})],y.prototype,"dataType",null),(0,r._)([(0,a.MZ)({type:p.default,json:{write:!0}})],y.prototype,"extent",void 0),(0,r._)([(0,a.MZ)({type:p.default,json:{write:!0}})],y.prototype,"nativeExtent",null),(0,r._)([(0,a.MZ)({json:{write:!0}})],y.prototype,"nativePixelSize",null),(0,r._)([(0,a.MZ)({json:{write:!0}})],y.prototype,"format",void 0),(0,r._)([(0,a.MZ)({json:{write:!0}})],y.prototype,"height",void 0),(0,r._)([(0,a.MZ)({json:{write:!0}})],y.prototype,"width",void 0),(0,r._)([(0,a.MZ)({json:{write:!0}})],y.prototype,"hasMultidimensionalTranspose",null),(0,r._)([(0,a.MZ)({json:{write:!0}})],y.prototype,"histograms",void 0),(0,r._)([(0,a.MZ)({json:{write:!0}})],y.prototype,"keyProperties",void 0),(0,r._)([(0,a.MZ)({json:{write:!0}})],y.prototype,"multidimensionalInfo",void 0),(0,r._)([(0,a.MZ)({json:{write:!0}})],y.prototype,"noDataValue",void 0),(0,r._)([(0,a.MZ)({json:{write:!0}})],y.prototype,"pixelSize",void 0),(0,r._)([(0,a.MZ)({type:u.e8.apiValues,json:{write:!0}})],y.prototype,"pixelType",void 0),(0,r._)([(0,a.MZ)()],y.prototype,"isPseudoSpatialReference",void 0),(0,r._)([(0,a.MZ)({readOnly:!0})],y.prototype,"sensorInfo",null),(0,r._)([(0,a.MZ)({type:d.default,json:{write:!0}})],y.prototype,"spatialReference",void 0),(0,r._)([(0,a.MZ)({json:{write:!0}})],y.prototype,"statistics",void 0),(0,r._)([(0,a.MZ)({type:m.A,json:{write:!0}})],y.prototype,"storageInfo",void 0),(0,r._)([(0,a.MZ)({json:{write:!0}})],y.prototype,"transform",void 0),y=o=(0,r._)([(0,l.$)("esri.layers.support.RasterInfo")],y);const v=y},24889:(e,t,i)=>{i.d(t,{SZ:()=>r,e8:()=>s,hm:()=>n});var o=i(42761);const r=(0,o.O)()({RSP_NearestNeighbor:"nearest",RSP_BilinearInterpolation:"bilinear",RSP_CubicConvolution:"cubic",RSP_Majority:"majority"}),n=(0,o.O)()({esriNoDataMatchAny:"any",esriNoDataMatchAll:"all"}),s=(0,o.O)()({U1:"u1",U2:"u2",U4:"u4",U8:"u8",S8:"s8",U16:"u16",S16:"s16",U32:"u32",S32:"s32",F32:"f32",F64:"f64",C64:"c64",C128:"c128",UNKNOWN:"unknown"})},65925:(e,t,i)=>{i.r(t),i.d(t,{default:()=>u});var o,r=i(93800),n=i(19455),s=i(48602),a=(i(21265),i(50925),i(14746),i(14800)),l=i(75269),p=i(15484);function d(e){return e=Number(e),isNaN(e)?void 0:e}let h=o=class extends n.A{constructor(){super(...arguments),this.acquisitionDate=void 0,this.cloudCover=void 0,this.productName=void 0,this.sensorName=null,this.sensorAzimuth=void 0,this.sensorElevation=void 0,this.sunAzimuth=void 0,this.sunElevation=void 0}readAcquisitionDate(e){return new Date(e)}writeAcquisitionDate(e,t){t.AcquisitionDate=e.getTime()}clone(){return new o({acquisitionDate:this.acquisitionDate,cloudCover:this.cloudCover,productName:this.productName,sensorName:this.sensorName,sensorAzimuth:this.sensorAzimuth,sensorElevation:this.sensorElevation,sunAzimuth:this.sunAzimuth,sunElevation:this.sunElevation})}};(0,r._)([(0,s.MZ)({type:Date,json:{name:"AcquisitionDate",write:!0}})],h.prototype,"acquisitionDate",void 0),(0,r._)([(0,a.w)("acquisitionDate")],h.prototype,"readAcquisitionDate",null),(0,r._)([(0,p.K)("acquisitionDate")],h.prototype,"writeAcquisitionDate",null),(0,r._)([(0,s.MZ)({json:{name:"CloudCover",read:{reader:d},write:!0}})],h.prototype,"cloudCover",void 0),(0,r._)([(0,s.MZ)({json:{name:"ProductName",write:!0}})],h.prototype,"productName",void 0),(0,r._)([(0,s.MZ)({json:{name:"SensorName",write:!0}})],h.prototype,"sensorName",void 0),(0,r._)([(0,s.MZ)({json:{name:"SensorAzimuth",read:{reader:d},write:!0}})],h.prototype,"sensorAzimuth",void 0),(0,r._)([(0,s.MZ)({json:{name:"SensorElevation",read:{reader:d},write:!0}})],h.prototype,"sensorElevation",void 0),(0,r._)([(0,s.MZ)({json:{name:"SunAzimuth",read:{reader:d},write:!0}})],h.prototype,"sunAzimuth",void 0),(0,r._)([(0,s.MZ)({json:{name:"SunElevation",read:{reader:d},write:!0}})],h.prototype,"sunElevation",void 0),h=o=(0,r._)([(0,l.$)("esri.layers.support.RasterSensorInfo")],h);const u=h},81788:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var o,r=i(93800),n=i(19455),s=i(48602),a=(i(21265),i(50925),i(14746),i(75269));function l(e){return e=Number(e),isNaN(e)?void 0:e}let p=o=class extends n.A{constructor(){super(...arguments),this.name=null,this.minWavelength=void 0,this.maxWavelength=void 0,this.radianceBias=void 0,this.radianceGain=void 0,this.reflectanceBias=void 0,this.reflectanceGain=void 0,this.solarIrradiance=void 0}clone(){return new o({name:this.name,minWavelength:this.minWavelength,maxWavelength:this.maxWavelength,radianceBias:this.radianceBias,radianceGain:this.radianceGain,reflectanceBias:this.reflectanceBias,reflectanceGain:this.reflectanceGain,solarIrradiance:this.solarIrradiance})}};(0,r._)([(0,s.MZ)({json:{name:"BandName",write:!0}})],p.prototype,"name",void 0),(0,r._)([(0,s.MZ)({json:{name:"WavelengthMin",read:{reader:l},write:!0}})],p.prototype,"minWavelength",void 0),(0,r._)([(0,s.MZ)({json:{name:"WavelengthMax",read:{reader:l},write:!0}})],p.prototype,"maxWavelength",void 0),(0,r._)([(0,s.MZ)({json:{name:"RadianceBias",read:{reader:l},write:!0}})],p.prototype,"radianceBias",void 0),(0,r._)([(0,s.MZ)({json:{name:"RadianceGain",read:{reader:l},write:!0}})],p.prototype,"radianceGain",void 0),(0,r._)([(0,s.MZ)({json:{name:"ReflectanceBias",read:{reader:l},write:!0}})],p.prototype,"reflectanceBias",void 0),(0,r._)([(0,s.MZ)({json:{name:"ReflectanceGain",read:{reader:l},write:!0}})],p.prototype,"reflectanceGain",void 0),(0,r._)([(0,s.MZ)({json:{name:"SolarIrradiance",read:{reader:l},write:!0}})],p.prototype,"solarIrradiance",void 0),p=o=(0,r._)([(0,a.$)("esri.layers.support.RasterBandInfo")],p);const d=p}}]);