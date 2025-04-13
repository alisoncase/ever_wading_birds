"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[50702,72475,75976],{18026:(e,t,r)=>{r.d(t,{A_:()=>C,I0:()=>h,SC:()=>p,YI:()=>m,Yv:()=>c,a1:()=>f,nX:()=>y,yQ:()=>g});var i=r(75400),n=r(65920),a=r(54824),l=r(72475),o=r(50702);const s="application/x-mpegURL",u="video/mp4",d="video/webm",f={UASDatalinkLocalSet:1e4,PrecisionTimeStamp:10002,MissionId:10003,PlatformTailNumber:10004,PlatformHeadingAngle:10005,PlatformPitchAngle:10006,PlatformRollAngle:10007,PlatformTrueAirspeed:10008,PlatformIndicatedAirspeed:10009,PlatformDesignation:10010,ImageSourceSensor:10011,ImageCoordinateSystem:10012,SensorLatitude:10013,SensorLongitude:10014,SensorTrueAltitude:10015,SensorHorizontalFOV:10016,SensorVerticalFOV:10017,SensorAzimuthAngle:10018,SensorElevationAngle:10019,SensorRollAngle:10020,PlatformSlantRange:10021,TargetWidth:10022,FrameCenterLatitude:10023,FrameCenterLongitude:10024,FrameCenterElevation:10025,OffsetCorner1Latitude:10026,OffsetCorner1Longitude:10027,OffsetCorner2Latitude:10028,OffsetCorner2Longitude:10029,OffsetCorner3Latitude:10030,OffsetCorner3Longitude:10031,OffsetCorner4Latitude:10032,OffsetCorner4Longitude:10033,TargetLocationLatitude:10040,TargetLocationLongitude:10041,TargetLocationElevation:10042,TargetTrackGateWidth:10043,TargetTrackGateHeight:10044,TargetErrorEstimateHorizontal:10045,TargetErrorEstimateLateral:10046,GenericFlagData:10047,PlatformGroundSpeed:10056,PlatformGroundRange:10057,PlatformRemainingFuel:10058,PlatformCallSign:10059,SensorFOVName:10063,PlatformMagneticHeading:10064,LDSVersionNumber:10065,AlternatePlatformName:10070,EventStartTimeUTC:10072,VMTIDataSet:10074,SensorEllipsoidHeight:10075,OperationalMode:10077,CornerLatitudePoint1:10082,CornerLongitudePoint1:10083,CornerLatitudePoint2:10084,CornerLongitudePoint2:10085,CornerLatitudePoint3:10086,CornerLongitudePoint3:10087,CornerLatitudePoint4:10088,CornerLongitudePoint4:10089,SARMotionImageryMetadata:10095,SecurityClassification:20001,SecurityClassifyingAuthority:20002,SecurityClassifyingCountry:20003,SecuritySCI:20004,SecurityCaveats:20005,SecurityReleaseInstructions:20006,SecurityLDSVersion:20022,EsriVideoWidth:90001,EsriVideoHeight:90002,EsriFrameCenterLatitude:90050,EsriFrameCenterLongitude:90051,EsriCornerLatitudePt1:90052,EsriCornerLongitudePt1:90053,EsriCornerLatitudePt2:90054,EsriCornerLongitudePt2:90055,EsriCornerLatitudePt3:90056,EsriCornerLongitudePt3:90057,EsriCornerLatitudePt4:90058,EsriCornerLongitudePt4:90059,EsriFrameOutline:90060,EsriSensorPosition:90061,EsriHorizonPixelPack:90063,EsriGroundControlPoints:90064};function y(e){const{duration:t,end:r,start:i,timezone:n="UTC"}=e||{};return"number"!=typeof t?null:new o.default({duration:t||null,end:"number"==typeof r?new Date(r):null,start:"number"==typeof i?new Date(i):null,timezone:n})}function g(e,t){const r=[...t],i=r.findIndex((t=>t.equals(e)));return i>-1&&r.splice(i),r.push(e),r}function m(e){if(!e?.size)return new l.default;const t=function(e){if(!e?.size)return null;if(e.has(f.EsriSensorPosition)){const t=e.get(f.EsriSensorPosition)?.value;if(t)return i.default.fromJSON(t.geometry)}return e.has(f.SensorLongitude)&&e.has(f.SensorLatitude)&&e.has(f.SensorTrueAltitude)?new i.default({x:e.get(f.SensorLongitude)?.value,y:e.get(f.SensorLatitude)?.value,z:e.get(f.SensorTrueAltitude)?.value}):null}(e),r=function(e){return function(e){return e&&e.has(f.EsriFrameCenterLatitude)&&e.has(f.EsriFrameCenterLongitude)?new i.default({x:e.get(f.EsriFrameCenterLongitude).value,y:e.get(f.EsriFrameCenterLatitude).value,z:e.get(f.FrameCenterElevation).value}):null}(e)??function(e){return e&&e.has(f.FrameCenterLatitude)&&e.has(f.FrameCenterLongitude)?new i.default({x:e.get(f.FrameCenterLongitude)?.value,y:e.get(f.FrameCenterLatitude)?.value,z:e.get(f.FrameCenterElevation)?.value}):null}(e)}(e),o=function(e){if(!e)return null;const t=e.get(f.EsriFrameOutline)?.value;return t?n.default.fromJSON(t.geometry):function(e){if(!(e.has(f.EsriCornerLatitudePt1)&&e.has(f.EsriCornerLongitudePt1)&&e.has(f.EsriCornerLatitudePt2)&&e.has(f.EsriCornerLongitudePt2)&&e.has(f.EsriCornerLatitudePt3)&&e.has(f.EsriCornerLongitudePt3)&&e.has(f.EsriCornerLatitudePt4)&&e.has(f.EsriCornerLongitudePt4)))return null;const t=[e.get(f.EsriCornerLongitudePt1)?.value,e.get(f.EsriCornerLatitudePt1)?.value],r=[e.get(f.EsriCornerLongitudePt2)?.value,e.get(f.EsriCornerLatitudePt2)?.value],i=[e.get(f.EsriCornerLongitudePt3)?.value,e.get(f.EsriCornerLatitudePt3)?.value],a=[e.get(f.EsriCornerLongitudePt4)?.value,e.get(f.EsriCornerLatitudePt4)?.value];return new n.default({rings:[[t,r,i,a]]})}(e)??function(e){if(!(e.has(f.OffsetCorner1Latitude)&&e.has(f.OffsetCorner1Longitude)&&e.has(f.OffsetCorner2Latitude)&&e.has(f.OffsetCorner2Longitude)&&e.has(f.OffsetCorner3Latitude)&&e.has(f.OffsetCorner3Longitude)&&e.has(f.OffsetCorner4Latitude)&&e.has(f.OffsetCorner4Longitude)&&e.has(f.FrameCenterLatitude)&&e.has(f.FrameCenterLongitude)))return null;const t=e.get(f.FrameCenterLatitude)?.value,r=e.get(f.FrameCenterLongitude)?.value,i=t+e.get(f.OffsetCorner1Latitude)?.value,a=r+e.get(f.OffsetCorner1Longitude)?.value,l=t+e.get(f.OffsetCorner2Latitude)?.value,o=r+e.get(f.OffsetCorner2Longitude)?.value,s=t+e.get(f.OffsetCorner3Latitude)?.value,u=r+e.get(f.OffsetCorner3Longitude)?.value,d=t+e.get(f.OffsetCorner4Latitude)?.value,y=r+e.get(f.OffsetCorner4Longitude)?.value;return new n.default({rings:[[[a,i],[o,l],[u,s],[y,d]]]})}(e)}(e),s=function(e,t){if(!e||!t)return null;const r=[e.x,e.y,e.z??0],i=[t.x,t.y,t.z??0];return new a.default({paths:[[r,i]]})}(t,r);return new l.default({frameCenter:r,frameOutline:o,lineOfSight:s,sensorLocation:t})}function h(e){return e?.size?e.get(f.EsriGroundControlPoints)?.value??null??null:null}function p(e){return e?.size?e.get(f.EsriHorizonPixelPack)?.value??null:null}function C(e){if(!e)return s;const t=e.match(/\.(\w{3,4})(?:$|\?)/i);if(!t)return s;switch(t[1].toLowerCase()){case"mp4":return u;case"webm":return d;default:return s}}function c(e){const t=e?.layers;return t?.length?t.map((e=>({layerId:e.id,posterUrl:e.poster,sourceType:e.serviceType,title:e.name,type:e.type||"Video Layer"}))):[]}},50702:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var i=r(93800),n=r(85715),a=r(19455),l=r(48602),o=(r(21265),r(50925),r(14746),r(14800)),s=r(75269),u=r(15484);let d=class extends(n.A.ClonableMixin(a.A)){constructor(e){super(e),this.duration=null,this.end=null,this.start=null,this.timezone="UTC"}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?e.getTime():null}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?e.getTime():null}};(0,i._)([(0,l.MZ)({type:Number,json:{write:{allowNull:!0}}})],d.prototype,"duration",void 0),(0,i._)([(0,l.MZ)({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"end",void 0),(0,i._)([(0,o.w)("end")],d.prototype,"readEnd",null),(0,i._)([(0,u.K)("end")],d.prototype,"writeEnd",null),(0,i._)([(0,l.MZ)({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"start",void 0),(0,i._)([(0,o.w)("start")],d.prototype,"readStart",null),(0,i._)([(0,u.K)("start")],d.prototype,"writeStart",null),(0,i._)([(0,l.MZ)({type:String})],d.prototype,"timezone",void 0),d=(0,i._)([(0,s.$)("esri.layers.support.VideoTimeExtent")],d);const f=d},72475:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var i=r(93800),n=r(85715),a=r(19455),l=r(48602),o=(r(21265),r(50925),r(14746),r(75269)),s=r(75400),u=r(65920),d=r(54824);let f=class extends(n.A.ClonableMixin(a.A)){constructor(e){super(e),this.frameCenter=null,this.frameOutline=null,this.lineOfSight=null,this.sensorLocation=null,this.sensorTrail=null}};(0,i._)([(0,l.MZ)({type:s.default})],f.prototype,"frameCenter",void 0),(0,i._)([(0,l.MZ)({type:u.default})],f.prototype,"frameOutline",void 0),(0,i._)([(0,l.MZ)({type:d.default})],f.prototype,"lineOfSight",void 0),(0,i._)([(0,l.MZ)({type:s.default})],f.prototype,"sensorLocation",void 0),(0,i._)([(0,l.MZ)({type:d.default})],f.prototype,"sensorTrail",void 0),f=(0,i._)([(0,o.$)("esri.layers.support.TelemetryData")],f);const y=f},75976:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var i=r(93800),n=r(6946),a=r(79953),l=r(48602),o=(r(21265),r(50925),r(14746),r(75269)),s=r(18026);function u(e,t){const r={};for(const i of t){const t=e.get(i);t&&(r[t.name]=t.value)}return r}let d=class extends n.default{constructor(e){super(e),this.followingMode="follow-both",this.layer=null,this.seekLength=10,this.view=null}initialize(){this.addHandles([(0,a.watch)((()=>this.layer),(e=>{e&&e.load().then((()=>this._followTelemetry())).catch((()=>{}))}),a.initial),(0,a.watch)((()=>[this.followingMode]),(()=>this._followTelemetry()),a.initial)])}get _layerView(){return this.layer&&this.view?this.view.allLayerViews.find((e=>e.layer===this.layer))??null:null}get buffered(){return this.layer?.buffered||0}get currentTime(){return this.layer?.currentTime||0}get duration(){return this.layer?.duration||0}get ended(){return this.layer?.ended??!0}get metadata(){const e=this.layer?.metadata;return e?{missionInfo:u(e,[s.a1.MissionId,s.a1.PrecisionTimeStamp]),platformInfo:u(e,[s.a1.PlatformTailNumber,s.a1.PlatformTrueAirspeed,s.a1.PlatformCallSign,s.a1.PlatformDesignation,s.a1.PlatformGroundRange]),frameInfo:u(e,[s.a1.FrameCenterElevation,s.a1.FrameCenterLatitude,s.a1.FrameCenterLongitude])}:null}get playing(){return this.layer?.playing??!1}get state(){return this.layer?.loadError?"error":this.layer?.state}play(){this.layer?.play()}pause(){this.layer?.pause()}seekBackward(){if(this.layer){const e=this.layer.currentTime-this.seekLength;e<=0?this.layer.reset():this.layer.setCurrentTime(e)}}seekForward(){if(this.layer){const e=this.layer.currentTime+this.seekLength;e>=this.layer.duration?this.layer.reset():this.layer.setCurrentTime(e)}}seekToBeginning(){this.layer?.setCurrentTime(0)}seekToEnding(){this.layer?.setCurrentTime(this.layer.duration)}seekTo(e){this.layer?.setCurrentTime(e)}toggleSensorDisplay(){this._layerView?.visibleTelemetryElements&&(this._layerView.visibleTelemetryElements.sensorLocation=!this._layerView.visibleTelemetryElements.sensorLocation)}toggleSensorSightLineDisplay(){this._layerView?.visibleTelemetryElements&&(this._layerView.visibleTelemetryElements.lineOfSight=!this._layerView.visibleTelemetryElements.lineOfSight)}toggleFrameDisplay(){this._layerView?.visibleTelemetryElements&&(this._layerView.visibleTelemetryElements.frame=!this._layerView.visibleTelemetryElements.frame)}toggleSensorTrailDisplay(){this._layerView?.visibleTelemetryElements&&(this._layerView.visibleTelemetryElements.sensorTrail=!this._layerView.visibleTelemetryElements.sensorTrail)}toggleFrameCenterDisplay(){this._layerView?.visibleTelemetryElements&&(this._layerView.visibleTelemetryElements.frameCenter=!this._layerView.visibleTelemetryElements.frameCenter)}toggleFrameOutlineDisplay(){this._layerView?.visibleTelemetryElements&&(this._layerView.visibleTelemetryElements.frameOutline=!this._layerView.visibleTelemetryElements.frameOutline)}changePlaybackSpeed(e){this.layer&&(this.layer.playbackRate=e)}changeGraphicsColor(e){this._layerView&&(this._layerView.symbolColor=e)}_followTelemetry(){this.removeHandles("follow"),this.view&&this.layer&&this.addHandles((0,a.watch)((()=>this.layer?.telemetry),(()=>{const e=[],t="follow-sensor"===this.followingMode||"follow-both"===this.followingMode,r="follow-frame"===this.followingMode||"follow-both"===this.followingMode;t&&this.layer?.telemetry.sensorLocation&&e.push(this.layer.telemetry.sensorLocation),r&&this.layer?.telemetry.frameCenter&&e.push(this.layer.telemetry.frameCenter),e.length&&this.view?.goTo(e).catch((()=>{}))}),a.initial),"follow")}};(0,i._)([(0,l.MZ)()],d.prototype,"_layerView",null),(0,i._)([(0,l.MZ)({readOnly:!0})],d.prototype,"buffered",null),(0,i._)([(0,l.MZ)({readOnly:!0})],d.prototype,"currentTime",null),(0,i._)([(0,l.MZ)({readOnly:!0})],d.prototype,"duration",null),(0,i._)([(0,l.MZ)({readOnly:!0})],d.prototype,"ended",null),(0,i._)([(0,l.MZ)()],d.prototype,"followingMode",void 0),(0,i._)([(0,l.MZ)()],d.prototype,"layer",void 0),(0,i._)([(0,l.MZ)({readOnly:!0})],d.prototype,"metadata",null),(0,i._)([(0,l.MZ)({readOnly:!0})],d.prototype,"playing",null),(0,i._)([(0,l.MZ)()],d.prototype,"seekLength",void 0),(0,i._)([(0,l.MZ)({readOnly:!0})],d.prototype,"state",null),(0,i._)([(0,l.MZ)()],d.prototype,"view",void 0),d=(0,i._)([(0,o.$)("esri.widgets.VideoPlayer.VideoPlayerViewModel")],d);const f=d}}]);