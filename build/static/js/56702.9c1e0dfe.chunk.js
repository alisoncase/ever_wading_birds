"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[56702],{56702:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});var r,s=i(93800),a=i(79625),o=i(35377),n=i(85715),l=i(19455),u=i(48602),p=(i(21265),i(50925),i(14746),i(14800)),d=i(75269),m=i(15484),c=i(75400),v=i(78307),y=i(93074),h=i(38602);let T=r=class extends(n.A.ClonableMixin(l.A)){constructor(e){super(e),this.arriveCurbApproach=null,this.arriveTime=null,this.arriveTimeOffset=null,this.bearing=null,this.bearingTol=null,this.cumulativeCosts=null,this.cumulativeDistance=null,this.cumulativeDuration=null,this.curbApproach=null,this.departCurbApproach=null,this.departTime=null,this.departTimeOffset=null,this.distanceToNetworkInMeters=null,this.geometry=null,this.lateDuration=null,this.locationType=null,this.name=null,this.navLatency=null,this.objectId=null,this.popupTemplate=null,this.posAlong=null,this.routeName=null,this.serviceCosts=null,this.serviceDistance=null,this.serviceDuration=null,this.sequence=null,this.sideOfEdge=null,this.snapX=null,this.snapY=null,this.snapZ=null,this.sourceId=null,this.sourceOid=null,this.status=null,this.symbol=null,this.timeWindowEnd=null,this.timeWindowEndOffset=null,this.timeWindowStart=null,this.timeWindowStartOffset=null,this.type="stop",this.violations=null,this.waitDuration=null,this.wait=null}readArriveTimeOffset(e,t){return(0,v.Zn)(t.attributes.ArriveTime,t.attributes.ArriveTimeUTC)}readCumulativeCosts(e,t){return(0,v.lh)(t.attributes,"Cumul_")}readDepartTimeOffset(e,t){return(0,v.Zn)(t.attributes.DepartTime,t.attributes.DepartTimeUTC)}readServiceCosts(e,t){return(0,v.lh)(t.attributes,"Attr_")}writeServiceCosts(e,t){(0,v.p3)(e,t,"Attr_")}writeTimeWindowEnd(e,t){null!=e&&(t.attributes||(t.attributes={}),t.attributes.TimeWindowEnd=e.getTime())}writeTimeWindowStart(e,t){null!=e&&(t.attributes||(t.attributes={}),t.attributes.TimeWindowStart=e.getTime())}readViolations(e,t){return(0,v.lh)(t.attributes,"Violation_")}readWait(e,t){return(0,v.lh)(t.attributes,"Wait_")}static fromGraphic(e){return new r({arriveCurbApproach:null!=e.attributes.ArrivalCurbApproach?y.JJ.fromJSON(e.attributes.ArrivalCurbApproach):null,arriveTime:null!=e.attributes.ArrivalTime?new Date(e.attributes.ArrivalTime):null,arriveTimeOffset:e.attributes.ArrivalUTCOffset,cumulativeCosts:null!=e.attributes.CumulativeCosts?(0,v.aZ)(JSON.parse(e.attributes.CumulativeCosts)):null,cumulativeDistance:e.attributes.CumulativeMeters??null,cumulativeDuration:e.attributes.CumulativeMinutes??null,curbApproach:null!=e.attributes.CurbApproach?y.JJ.fromJSON(e.attributes.CurbApproach):null,departCurbApproach:null!=e.attributes.DepartureCurbApproach?y.JJ.fromJSON(e.attributes.DepartureCurbApproach):null,departTime:null!=e.attributes.DepartureTime?new Date(e.attributes.DepartureTime):null,departTimeOffset:e.attributes.DepartureUTCOffset??null,geometry:e.geometry,lateDuration:e.attributes.LateMinutes??null,locationType:null!=e.attributes.LocationType?y.EM.fromJSON(e.attributes.LocationType):null,name:e.attributes.Name,objectId:e.attributes.ObjectID??e.attributes.__OBJECTID,popupTemplate:e.popupTemplate,routeName:e.attributes.RouteName,sequence:e.attributes.Sequence??null,serviceCosts:null!=e.attributes.ServiceCosts?(0,v.aZ)(JSON.parse(e.attributes.ServiceCosts)):null,serviceDistance:e.attributes.ServiceMeters??null,serviceDuration:e.attributes.ServiceMinutes??null,status:null!=e.attributes.Status?y.$r.fromJSON(e.attributes.Status):null,symbol:e.symbol,timeWindowEnd:null!=e.attributes.TimeWindowEnd?new Date(e.attributes.TimeWindowEnd):null,timeWindowEndOffset:e.attributes.TimeWindowEndUTCOffset??null,timeWindowStart:null!=e.attributes.TimeWindowStart?new Date(e.attributes.TimeWindowStart):null,timeWindowStartOffset:e.attributes.TimeWindowStartUTCOffset??null,waitDuration:e.attributes.WaitMinutes??null})}toGraphic(){const e={ObjectID:this.objectId,ArrivalCurbApproach:null!=this.arriveCurbApproach?y.JJ.toJSON(this.arriveCurbApproach):null,ArrivalTime:null!=this.arriveTime?this.arriveTime.getTime():null,ArrivalUTCOffset:this.arriveTimeOffset,CumulativeCosts:null!=this.cumulativeCosts?JSON.stringify((0,v.nA)(this.cumulativeCosts)):null,CumulativeMeters:this.cumulativeDistance,CumulativeMinutes:this.cumulativeDuration,CurbApproach:null!=this.curbApproach?y.JJ.toJSON(this.curbApproach):null,DepartureCurbApproach:null!=this.departCurbApproach?y.JJ.toJSON(this.departCurbApproach):null,DepartureTime:null!=this.departTime?this.departTime.getTime():null,DepartureUTCOffset:this.departTimeOffset,LateMinutes:this.lateDuration,LocationType:null!=this.locationType?y.EM.toJSON(this.locationType):null,Name:this.name,RouteName:this.routeName,Sequence:this.sequence,ServiceCosts:null!=this.serviceCosts?JSON.stringify((0,v.nA)(this.serviceCosts)):null,ServiceMeters:this.serviceDistance,ServiceMinutes:this.serviceDuration,Status:null!=this.status?y.$r.toJSON(this.status):null,TimeWindowEnd:null!=this.timeWindowEnd?this.timeWindowEnd.getTime():null,TimeWindowEndUTCOffset:this.timeWindowEndOffset??this.arriveTimeOffset,TimeWindowStart:null!=this.timeWindowStart?this.timeWindowStart.getTime():null,TimeWindowStartUTCOffset:this.timeWindowStartOffset??this.arriveTimeOffset,WaitMinutes:this.waitDuration};return new a.default({geometry:this.geometry,attributes:e,symbol:this.symbol,popupTemplate:this.popupTemplate})}};T.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"ArrivalCurbApproach",alias:"Arrival Curb Approach",type:"esriFieldTypeInteger"},{name:"ArrivalTime",alias:"Arrival Time",type:"esriFieldTypeDate"},{name:"ArrivalUTCOffset",alias:"Arrival Time",type:"esriFieldTypeInteger"},{name:"CumulativeCosts",alias:"Cumulative Costs",type:"esriFieldTypeString"},{name:"CumulativeMeters",alias:"Cumulative Meters",type:"esriFieldTypeDouble"},{name:"CumulativeMinutes",alias:"Cumulative Minutes",type:"esriFieldTypeDouble"},{name:"CurbApproach",alias:"Curb Approach",type:"esriFieldTypeInteger"},{name:"DepartureCurbApproach",alias:"Departure Curb Approach",type:"esriFieldTypeInteger"},{name:"DepartureTime",alias:"Departure Time",type:"esriFieldTypeDate"},{name:"DepartureUTCOffset",alias:"Departure Time",type:"esriFieldTypeInteger"},{name:"LateMinutes",alias:"Minutes Late",type:"esriFieldTypeDouble"},{name:"LocationType",alias:"Location Type",type:"esriFieldTypeInteger"},{name:"Name",alias:"Name",type:"esriFieldTypeString"},{name:"RouteName",alias:"Route Name",type:"esriFieldTypeString"},{name:"Sequence",alias:"Sequence",type:"esriFieldTypeInteger"},{name:"ServiceCosts",alias:"Service Costs",type:"esriFieldTypeString"},{name:"ServiceMeters",alias:"Service Meters",type:"esriFieldTypeDouble"},{name:"ServiceMinutes",alias:"Service Minutes",type:"esriFieldTypeDouble"},{name:"Status",alias:"Status",type:"esriFieldTypeInteger"},{name:"TimeWindowEnd",alias:"Time Window End",type:"esriFieldTypeDate"},{name:"TimeWindowEndUTCOffset",alias:"Time Window End Offset",type:"esriFieldTypeInteger"},{name:"TimeWindowStart",alias:"Time Window Start",type:"esriFieldTypeDate"},{name:"TimeWindowStartUTCOffset",alias:"Time Window Start Offset",type:"esriFieldTypeInteger"},{name:"WaitMinutes",alias:"Minutes Wait",type:"esriFieldTypeDouble"}],(0,s._)([(0,u.MZ)({type:y.JJ.apiValues,json:{read:{source:"attributes.ArrivalCurbApproach",reader:y.JJ.read}}})],T.prototype,"arriveCurbApproach",void 0),(0,s._)([(0,u.MZ)({type:Date,json:{read:{source:"attributes.ArriveTimeUTC"}}})],T.prototype,"arriveTime",void 0),(0,s._)([(0,u.MZ)()],T.prototype,"arriveTimeOffset",void 0),(0,s._)([(0,p.w)("arriveTimeOffset",["attributes.ArriveTime","attributes.ArriveTimeUTC"])],T.prototype,"readArriveTimeOffset",null),(0,s._)([(0,u.MZ)({json:{name:"attributes.Bearing",read:!1,write:!0}})],T.prototype,"bearing",void 0),(0,s._)([(0,u.MZ)({json:{name:"attributes.BearingTol",read:!1,write:!0}})],T.prototype,"bearingTol",void 0),(0,s._)([(0,u.MZ)()],T.prototype,"cumulativeCosts",void 0),(0,s._)([(0,p.w)("cumulativeCosts",["attributes"])],T.prototype,"readCumulativeCosts",null),(0,s._)([(0,u.MZ)()],T.prototype,"cumulativeDistance",void 0),(0,s._)([(0,u.MZ)()],T.prototype,"cumulativeDuration",void 0),(0,s._)([(0,u.MZ)({type:y.JJ.apiValues,json:{name:"attributes.CurbApproach",read:{reader:y.JJ.read},write:{writer:y.JJ.write}}})],T.prototype,"curbApproach",void 0),(0,s._)([(0,u.MZ)({type:y.JJ.apiValues,json:{read:{source:"attributes.DepartCurbApproach",reader:y.JJ.read}}})],T.prototype,"departCurbApproach",void 0),(0,s._)([(0,u.MZ)({type:Date,json:{read:{source:"attributes.DepartTimeUTC"}}})],T.prototype,"departTime",void 0),(0,s._)([(0,u.MZ)()],T.prototype,"departTimeOffset",void 0),(0,s._)([(0,p.w)("departTimeOffset",["attributes.DepartTime","attributes.DepartTimeUTC"])],T.prototype,"readDepartTimeOffset",null),(0,s._)([(0,u.MZ)({json:{read:{source:"attributes.DistanceToNetworkInMeters"}}})],T.prototype,"distanceToNetworkInMeters",void 0),(0,s._)([(0,u.MZ)({type:c.default,json:{write:!0}})],T.prototype,"geometry",void 0),(0,s._)([(0,u.MZ)()],T.prototype,"lateDuration",void 0),(0,s._)([(0,u.MZ)({type:y.EM.apiValues,json:{name:"attributes.LocationType",read:{reader:y.EM.read},write:{writer:y.EM.write}}})],T.prototype,"locationType",void 0),(0,s._)([(0,u.MZ)({json:{name:"attributes.Name"}})],T.prototype,"name",void 0),(0,s._)([(0,u.MZ)({json:{name:"attributes.NavLatency",read:!1,write:!0}})],T.prototype,"navLatency",void 0),(0,s._)([(0,u.MZ)({json:{name:"attributes.ObjectID"}})],T.prototype,"objectId",void 0),(0,s._)([(0,u.MZ)({type:o.default})],T.prototype,"popupTemplate",void 0),(0,s._)([(0,u.MZ)({json:{read:{source:"attributes.PosAlong"}}})],T.prototype,"posAlong",void 0),(0,s._)([(0,u.MZ)({json:{name:"attributes.RouteName"}})],T.prototype,"routeName",void 0),(0,s._)([(0,u.MZ)()],T.prototype,"serviceCosts",void 0),(0,s._)([(0,p.w)("serviceCosts",["attributes"])],T.prototype,"readServiceCosts",null),(0,s._)([(0,m.K)("serviceCosts")],T.prototype,"writeServiceCosts",null),(0,s._)([(0,u.MZ)()],T.prototype,"serviceDistance",void 0),(0,s._)([(0,u.MZ)()],T.prototype,"serviceDuration",void 0),(0,s._)([(0,u.MZ)({json:{name:"attributes.Sequence"}})],T.prototype,"sequence",void 0),(0,s._)([(0,u.MZ)({type:y.mt.apiValues,json:{read:{source:"attributes.SideOfEdge",reader:y.mt.read}}})],T.prototype,"sideOfEdge",void 0),(0,s._)([(0,u.MZ)({json:{read:{source:"attributes.SnapX"}}})],T.prototype,"snapX",void 0),(0,s._)([(0,u.MZ)({json:{read:{source:"attributes.SnapY"}}})],T.prototype,"snapY",void 0),(0,s._)([(0,u.MZ)({json:{read:{source:"attributes.SnapZ"}}})],T.prototype,"snapZ",void 0),(0,s._)([(0,u.MZ)({json:{read:{source:"attributes.SourceID"}}})],T.prototype,"sourceId",void 0),(0,s._)([(0,u.MZ)({json:{read:{source:"attributes.SourceOID"}}})],T.prototype,"sourceOid",void 0),(0,s._)([(0,u.MZ)({type:y.$r.apiValues,json:{read:{source:"attributes.Status",reader:y.$r.read}}})],T.prototype,"status",void 0),(0,s._)([(0,u.MZ)({types:h.Es})],T.prototype,"symbol",void 0),(0,s._)([(0,u.MZ)({type:Date,json:{name:"attributes.TimeWindowEnd"}})],T.prototype,"timeWindowEnd",void 0),(0,s._)([(0,m.K)("timeWindowEnd")],T.prototype,"writeTimeWindowEnd",null),(0,s._)([(0,u.MZ)()],T.prototype,"timeWindowEndOffset",void 0),(0,s._)([(0,u.MZ)({type:Date,json:{name:"attributes.TimeWindowStart"}})],T.prototype,"timeWindowStart",void 0),(0,s._)([(0,m.K)("timeWindowStart")],T.prototype,"writeTimeWindowStart",null),(0,s._)([(0,u.MZ)()],T.prototype,"timeWindowStartOffset",void 0),(0,s._)([(0,u.MZ)({readOnly:!0,json:{read:!1}})],T.prototype,"type",void 0),(0,s._)([(0,u.MZ)()],T.prototype,"violations",void 0),(0,s._)([(0,p.w)("violations",["attributes"])],T.prototype,"readViolations",null),(0,s._)([(0,u.MZ)()],T.prototype,"waitDuration",void 0),(0,s._)([(0,u.MZ)()],T.prototype,"wait",void 0),(0,s._)([(0,p.w)("wait",["attributes"])],T.prototype,"readWait",null),T=r=(0,s._)([(0,d.$)("esri.rest.support.Stop")],T);const b=T},78307:(e,t,i)=>{i.d(t,{Zn:()=>l,_s:()=>d,aZ:()=>o,lh:()=>s,nA:()=>n,o9:()=>p,p3:()=>a,r9:()=>u});var r=i(93074);function s(e,t){if(null==e)return null;const i={},s=new RegExp(`^${t}`,"i");for(const a of Object.keys(e))if(s.test(a)){const s=a.slice(t.length);i[r.et.fromJSON(s)]=e[a]}return i}function a(e,t,i){if(null!=e){t.attributes||(t.attributes={});for(const s in e){const a=r.et.toJSON(s);t.attributes[`${i}${a}`]=e[s]}}}function o(e){const t={};for(const i of Object.keys(e)){const s=i;t[r.et.fromJSON(s)]=e[i]}return t}function n(e){const t={};for(const i of Object.keys(e)){const s=i;t[r.et.toJSON(s)]=e[i]}return t}function l(e,t){return null==e||null==t?null:Math.round((e-t)/6e4)}function u(e){const t=e.toJSON(),i=t;return i.accumulateAttributeNames&&=t.accumulateAttributeNames?.join(),i.attributeParameterValues&&=JSON.stringify(t.attributeParameterValues),i.barriers&&=JSON.stringify(t.barriers),i.outSR&&=t.outSR?.wkid,i.overrides&&=JSON.stringify(t.overrides),i.polygonBarriers&&=JSON.stringify(t.polygonBarriers),i.polylineBarriers&&=JSON.stringify(t.polylineBarriers),i.restrictionAttributeNames&&=t.restrictionAttributeNames?.join(),i.stops&&=JSON.stringify(t.stops),i.travelMode&&=JSON.stringify(t.travelMode),i}function p(e){const t=e.toJSON(),i=t;return i.accumulateAttributeNames&&=t.accumulateAttributeNames?.join(),i.attributeParameterValues&&=JSON.stringify(t.attributeParameterValues),i.barriers&&=JSON.stringify(t.barriers),i.facilities&&=JSON.stringify(t.facilities),i.incidents&&=JSON.stringify(t.incidents),i.outSR&&=t.outSR?.wkid,i.overrides&&=JSON.stringify(t.overrides),i.polygonBarriers&&=JSON.stringify(t.polygonBarriers),i.polylineBarriers&&=JSON.stringify(t.polylineBarriers),i.restrictionAttributeNames&&=t.restrictionAttributeNames?.join(),i.travelMode&&=JSON.stringify(t.travelMode),i}function d(e){const t=e.toJSON(),i=t;return i.accumulateAttributeNames&&=t.accumulateAttributeNames?.join(),i.attributeParameterValues&&=JSON.stringify(t.attributeParameterValues),i.barriers&&=JSON.stringify(t.barriers),i.defaultBreaks&&=t.defaultBreaks?.join(),i.excludeSourcesFromPolygons&&=t.excludeSourcesFromPolygons?.join(),i.facilities&&=JSON.stringify(t.facilities),i.outSR&&=t.outSR?.wkid,i.overrides&&=JSON.stringify(t.overrides),i.polygonBarriers&&=JSON.stringify(t.polygonBarriers),i.polylineBarriers&&=JSON.stringify(t.polylineBarriers),i.restrictionAttributeNames&&=t.restrictionAttributeNames?.join(),i.travelMode&&=JSON.stringify(t.travelMode),i}},93074:(e,t,i)=>{i.d(t,{$n:()=>w,$r:()=>f,EM:()=>b,Ec:()=>W,JJ:()=>T,Mm:()=>M,OC:()=>k,Sr:()=>d,UO:()=>n,Vj:()=>J,WU:()=>_,Y8:()=>o,Z7:()=>l,_6:()=>g,_H:()=>v,aJ:()=>p,ag:()=>y,cQ:()=>m,dd:()=>D,dn:()=>u,et:()=>C,fe:()=>O,gD:()=>N,hE:()=>c,hY:()=>a,iM:()=>A,mt:()=>S,ow:()=>h,vS:()=>U});var r=i(42761);const s={esriCentimeters:"centimeters",esriDecimalDegrees:"decimal-degrees",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriPoints:"points",esriUnknownUnits:"unknown",esriYards:"yards"},a=(0,r.O)()(s),o=(0,r.O)()({...s,esriIntFeet:"international-feet",esriIntInches:"international-inches",esriIntMiles:"international-miles",esriIntNauticalMiles:"international-nautical-miles",esriIntYards:"international-yards"}),n=(0,r.O)()({esriAcres:"international-acres",esriAcresUS:"us-acres",esriAres:"ares",esriHectares:"hectares",esriSquareCentimeters:"square-centimeters",esriSquareDecimeters:"square-decimeters",esriSquareFeet:"square-international-feet",esriSquareFeetUS:"square-us-feet",esriSquareInches:"square-international-inches",esriSquareInchesUS:"square-us-inches",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareMiles:"square-international-miles",esriSquareMilesUS:"square-us-miles",esriSquareMillimeters:"square-millimeters",esriSquareYards:"square-international-yards",esriSquareYardsUS:"square-us-yards",esriUnknownAreaUnits:"unknown"}),l=(0,r.O)()({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards"}),u=(0,r.O)()({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards",esriNAUDays:"days",esriNAUHours:"hours",esriNAUMinutes:"minutes",esriNAUSeconds:"seconds",esriNAUKilometersPerHour:"kilometers-per-hour",esriNAUMilesPerHour:"miles-per-hour",esriNAUUnknown:"unknown"}),p=(0,r.O)()({esriDOTComplete:"complete",esriDOTCompleteNoEvents:"complete-no-events",esriDOTFeatureSets:"featuresets",esriDOTInstructionsOnly:"instructions-only",esriDOTStandard:"standard",esriDOTSummaryOnly:"summary-only"}),d=(0,r.O)()({esriNAOutputLineNone:"none",esriNAOutputLineStraight:"straight",esriNAOutputLineTrueShape:"true-shape",esriNAOutputLineTrueShapeWithMeasure:"true-shape-with-measure"}),m=(0,r.O)()({esriNAOutputPolygonNone:"none",esriNAOutputPolygonSimplified:"simplified",esriNAOutputPolygonDetailed:"detailed"}),c=(0,r.O)()({esriNFSBAllowBacktrack:"allow-backtrack",esriNFSBAtDeadEndsOnly:"at-dead-ends-only",esriNFSBNoBacktrack:"no-backtrack",esriNFSBAtDeadEndsAndIntersections:"at-dead-ends-and-intersections"}),v=(0,r.O)()({esriNATravelDirectionFromFacility:"from-facility",esriNATravelDirectionToFacility:"to-facility"}),y=(0,r.O)()({esriNATimeOfDayNotUsed:"not-used",esriNATimeOfDayUseAsStartTime:"start",esriNATimeOfDayUseAsEndTime:"end"}),h=(0,r.O)()({AUTOMOBILE:"automobile",TRUCK:"truck",WALK:"walk",OTHER:"other"}),T=(0,r.O)()({0:"either-side-of-vehicle",1:"right-side-of-vehicle",2:"left-side-of-vehicle",3:"no-u-turn"},{useNumericKeys:!0}),b=(0,r.O)()({0:"stop",1:"waypoint",2:"break"},{useNumericKeys:!0}),f=(0,r.O)()({0:"ok",1:"not-located",2:"network-element-not-located",3:"element-not-traversable",4:"invalid-field-values",5:"not-reached",6:"time-window-violation",7:"not-located-on-closest"},{useNumericKeys:!0}),S=(0,r.O)()({1:"right",2:"left"},{useNumericKeys:!0}),A=(0,r.O)()({0:"restriction",1:"scaled-cost",2:"added-cost"},{useNumericKeys:!0}),O=(0,r.O)()({0:"permit",1:"restrict"},{useNumericKeys:!0}),g=(0,r.O)()({1:"header",50:"arrive",51:"depart",52:"straight",100:"on-ferry",101:"off-ferry",102:"central-fork",103:"roundabout",104:"u-turn",150:"door",151:"stairs",152:"elevator",153:"escalator",154:"pedestrian-ramp",200:"left-fork",201:"left-ramp",202:"clockwise-roundabout",203:"left-handed-u-turn",204:"bear-left",205:"left-turn",206:"sharp-left",207:"left-turn-and-immediate-left-turn",208:"left-turn-and-immediate-right-turn",300:"right-fork",301:"right-ramp",302:"counter-clockwise-roundabout",303:"right-handed-u-turn",304:"bear-right",305:"right-turn",306:"sharp-right",307:"right-turn-and-immediate-left-turn",308:"right-turn-and-immediate-right-turn",400:"up-elevator",401:"up-escalator",402:"up-stairs",500:"down-elevator",501:"down-escalator",502:"down-stairs",1e3:"general-event",1001:"landmark",1002:"time-zone-change",1003:"traffic-event",1004:"scaled-cost-barrier-event",1005:"boundary-crossing",1006:"restriction-violation",1007:"lane"},{useNumericKeys:!0}),N=(0,r.O)()({0:"unknown",1:"segment",2:"maneuver-segment",3:"restriction-violation",4:"scaled-cost-barrier",5:"heavy-traffic",6:"slow-traffic",7:"moderate-traffic"},{useNumericKeys:!0}),w=(0,r.O)()({"NA Campus":"campus","NA Desktop":"desktop","NA Navigation":"navigation"}),D=(0,r.O)()({Kilometers:"kilometers",Miles:"miles",Meters:"meters"},{ignoreUnknown:!1}),M=(0,r.O)()({Minutes:"minutes",TimeAt1KPH:"time-at-1-kph",TravelTime:"travel-time",TruckMinutes:"truck-minutes",TruckTravelTime:"truck-travel-time",WalkTime:"walk-time"},{ignoreUnknown:!1}),C=(0,r.O)()({Kilometers:"kilometers",Miles:"miles",Meters:"meters",Minutes:"minutes",TimeAt1KPH:"time-at-1-kph",TravelTime:"travel-time",TruckMinutes:"truck-minutes",TruckTravelTime:"truck-travel-time",WalkTime:"walk-time"},{ignoreUnknown:!1}),k=(0,r.O)()({"Any Hazmat Prohibited":"any-hazmat-prohibited","Avoid Carpool Roads":"avoid-carpool-roads","Avoid Express Lanes":"avoid-express-lanes","Avoid Ferries":"avoid-ferries","Avoid Gates":"avoid-gates","Avoid Limited Access Roads":"avoid-limited-access-roads","Avoid Private Roads":"avoid-private-roads","Avoid Roads Unsuitable for Pedestrians":"avoid-roads-unsuitable-for-pedestrians","Avoid Stairways":"avoid-stairways","Avoid Toll Roads":"avoid-toll-roads","Avoid Toll Roads for Trucks":"avoid-toll-roads-for-trucks","Avoid Truck Restricted Roads":"avoid-truck-restricted-roads","Avoid Unpaved Roads":"avoid-unpaved-roads","Axle Count Restriction":"axle-count-restriction","Driving a Bus":"driving-a-bus","Driving a Taxi":"driving-a-taxi","Driving a Truck":"driving-a-truck","Driving an Automobile":"driving-an-automobile","Driving an Emergency Vehicle":"driving-an-emergency-vehicle","Height Restriction":"height-restriction","Kingpin to Rear Axle Length Restriction":"kingpin-to-rear-axle-length-restriction","Length Restriction":"length-restriction","Preferred for Pedestrians":"preferred-for-pedestrians","Riding a Motorcycle":"riding-a-motorcycle","Roads Under Construction Prohibited":"roads-under-construction-prohibited","Semi or Tractor with One or More Trailers Prohibited":"semi-or-tractor-with-one-or-more-trailers-prohibited","Single Axle Vehicles Prohibited":"single-axle-vehicles-prohibited","Tandem Axle Vehicles Prohibited":"tandem-axle-vehicles-prohibited","Through Traffic Prohibited":"through-traffic-prohibited","Truck with Trailers Restriction":"truck-with-trailers-restriction","Use Preferred Hazmat Routes":"use-preferred-hazmat-routes","Use Preferred Truck Routes":"use-preferred-truck-routes",Walking:"walking","Weight Restriction":"weight-restriction"},{ignoreUnknown:!1}),U=(0,r.O)()({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),J=(0,r.O)()({esriGeometryPoint:"point",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"envelope",esriGeometryMultipoint:"multipoint"}),_=(0,r.O)()({esriNAUTCost:"cost",esriNAUTDescriptor:"descriptor",esriNAUTRestriction:"restriction",esriNAUTHierarchy:"hierarchy"}),W=(0,r.O)()({esriDSTAltName:"alt-name",esriDSTArrive:"arrive",esriDSTBranch:"branch",esriDSTCrossStreet:"cross-street",esriDSTCumulativeLength:"cumulative-length",esriDSTDepart:"depart",esriDSTEstimatedArrivalTime:"estimated-arrival-time",esriDSTExit:"exit",esriDSTGeneral:"general",esriDSTLength:"length",esriDSTServiceTime:"service-time",esriDSTStreetName:"street-name",esriDSTSummary:"summary",esriDSTTime:"time",esriDSTTimeWindow:"time-window",esriDSTToward:"toward",esriDSTViolationTime:"violation-time",esriDSTWaitTime:"wait-time"})}}]);