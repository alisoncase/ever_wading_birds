"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[77807],{77807:(e,r,i)=>{i.r(r),i.d(r,{default:()=>f});var t,s=i(93800),a=i(79625),o=i(35377),n=i(85715),l=i(19455),u=i(48602),c=(i(21265),i(50925),i(14746),i(14800)),m=i(75269),d=i(54824),p=i(78307),y=i(93074),h=i(38602);let N=t=class extends(n.A.ClonableMixin(l.A)){constructor(e){super(e),this.barrierType=null,this.costs=null,this.geometry=null,this.name=null,this.objectId=null,this.popupTemplate=null,this.scaleFactor=null,this.symbol=null,this.type="polyline-barrier"}readCosts(e,r){return(0,p.lh)(r.attributes,"Attr_")}static fromGraphic(e){return new t({barrierType:null!=e.attributes.BarrierType?y.iM.fromJSON(e.attributes.BarrierType):null,costs:null!=e.attributes.Costs?(0,p.aZ)(JSON.parse(e.attributes.Costs)):null,geometry:e.geometry,name:e.attributes.Name??null,objectId:e.attributes.ObjectID??e.attributes.__OBJECTID,popupTemplate:e.popupTemplate,scaleFactor:e.attributes.ScaleFactor??null,symbol:e.symbol})}toGraphic(){const e={ObjectID:this.objectId,BarrierType:null!=this.barrierType?y.iM.toJSON(this.barrierType):null,Costs:null!=this.costs?JSON.stringify((0,p.nA)(this.costs)):null,Name:this.name,ScaleFactor:this.scaleFactor};return new a.default({geometry:this.geometry,attributes:e,symbol:this.symbol,popupTemplate:this.popupTemplate})}};N.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"BarrierType",alias:"Barrier Type",type:"esriFieldTypeInteger"},{name:"Costs",alias:"Costs",type:"esriFieldTypeString"},{name:"Name",alias:"Name",type:"esriFieldTypeString"},{name:"ScaleFactor",alias:"Scale Factor",type:"esriFieldTypeDouble"}],(0,s._)([(0,u.MZ)({type:y.iM.apiValues,json:{read:{source:"attributes.BarrierType",reader:y.iM.read}}})],N.prototype,"barrierType",void 0),(0,s._)([(0,u.MZ)()],N.prototype,"costs",void 0),(0,s._)([(0,c.w)("costs",["attributes"])],N.prototype,"readCosts",null),(0,s._)([(0,u.MZ)({type:d.default,json:{write:!0}})],N.prototype,"geometry",void 0),(0,s._)([(0,u.MZ)({json:{name:"attributes.Name"}})],N.prototype,"name",void 0),(0,s._)([(0,u.MZ)({json:{name:"attributes.ObjectID"}})],N.prototype,"objectId",void 0),(0,s._)([(0,u.MZ)({type:o.default})],N.prototype,"popupTemplate",void 0),(0,s._)([(0,u.MZ)()],N.prototype,"scaleFactor",void 0),(0,s._)([(0,u.MZ)({types:h.Es})],N.prototype,"symbol",void 0),(0,s._)([(0,u.MZ)({readOnly:!0,json:{read:!1}})],N.prototype,"type",void 0),N=t=(0,s._)([(0,m.$)("esri.rest.support.PolylineBarrier")],N);const f=N},78307:(e,r,i)=>{i.d(r,{Zn:()=>l,_s:()=>m,aZ:()=>o,lh:()=>s,nA:()=>n,o9:()=>c,p3:()=>a,r9:()=>u});var t=i(93074);function s(e,r){if(null==e)return null;const i={},s=new RegExp(`^${r}`,"i");for(const a of Object.keys(e))if(s.test(a)){const s=a.slice(r.length);i[t.et.fromJSON(s)]=e[a]}return i}function a(e,r,i){if(null!=e){r.attributes||(r.attributes={});for(const s in e){const a=t.et.toJSON(s);r.attributes[`${i}${a}`]=e[s]}}}function o(e){const r={};for(const i of Object.keys(e)){const s=i;r[t.et.fromJSON(s)]=e[i]}return r}function n(e){const r={};for(const i of Object.keys(e)){const s=i;r[t.et.toJSON(s)]=e[i]}return r}function l(e,r){return null==e||null==r?null:Math.round((e-r)/6e4)}function u(e){const r=e.toJSON(),i=r;return i.accumulateAttributeNames&&=r.accumulateAttributeNames?.join(),i.attributeParameterValues&&=JSON.stringify(r.attributeParameterValues),i.barriers&&=JSON.stringify(r.barriers),i.outSR&&=r.outSR?.wkid,i.overrides&&=JSON.stringify(r.overrides),i.polygonBarriers&&=JSON.stringify(r.polygonBarriers),i.polylineBarriers&&=JSON.stringify(r.polylineBarriers),i.restrictionAttributeNames&&=r.restrictionAttributeNames?.join(),i.stops&&=JSON.stringify(r.stops),i.travelMode&&=JSON.stringify(r.travelMode),i}function c(e){const r=e.toJSON(),i=r;return i.accumulateAttributeNames&&=r.accumulateAttributeNames?.join(),i.attributeParameterValues&&=JSON.stringify(r.attributeParameterValues),i.barriers&&=JSON.stringify(r.barriers),i.facilities&&=JSON.stringify(r.facilities),i.incidents&&=JSON.stringify(r.incidents),i.outSR&&=r.outSR?.wkid,i.overrides&&=JSON.stringify(r.overrides),i.polygonBarriers&&=JSON.stringify(r.polygonBarriers),i.polylineBarriers&&=JSON.stringify(r.polylineBarriers),i.restrictionAttributeNames&&=r.restrictionAttributeNames?.join(),i.travelMode&&=JSON.stringify(r.travelMode),i}function m(e){const r=e.toJSON(),i=r;return i.accumulateAttributeNames&&=r.accumulateAttributeNames?.join(),i.attributeParameterValues&&=JSON.stringify(r.attributeParameterValues),i.barriers&&=JSON.stringify(r.barriers),i.defaultBreaks&&=r.defaultBreaks?.join(),i.excludeSourcesFromPolygons&&=r.excludeSourcesFromPolygons?.join(),i.facilities&&=JSON.stringify(r.facilities),i.outSR&&=r.outSR?.wkid,i.overrides&&=JSON.stringify(r.overrides),i.polygonBarriers&&=JSON.stringify(r.polygonBarriers),i.polylineBarriers&&=JSON.stringify(r.polylineBarriers),i.restrictionAttributeNames&&=r.restrictionAttributeNames?.join(),i.travelMode&&=JSON.stringify(r.travelMode),i}},93074:(e,r,i)=>{i.d(r,{$n:()=>k,$r:()=>v,EM:()=>g,Ec:()=>B,JJ:()=>f,Mm:()=>D,OC:()=>w,Sr:()=>m,UO:()=>n,Vj:()=>J,WU:()=>P,Y8:()=>o,Z7:()=>l,_6:()=>T,_H:()=>y,aJ:()=>c,ag:()=>h,cQ:()=>d,dd:()=>U,dn:()=>u,et:()=>M,fe:()=>b,gD:()=>O,hE:()=>p,hY:()=>a,iM:()=>A,mt:()=>S,ow:()=>N,vS:()=>R});var t=i(42761);const s={esriCentimeters:"centimeters",esriDecimalDegrees:"decimal-degrees",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriPoints:"points",esriUnknownUnits:"unknown",esriYards:"yards"},a=(0,t.O)()(s),o=(0,t.O)()({...s,esriIntFeet:"international-feet",esriIntInches:"international-inches",esriIntMiles:"international-miles",esriIntNauticalMiles:"international-nautical-miles",esriIntYards:"international-yards"}),n=(0,t.O)()({esriAcres:"international-acres",esriAcresUS:"us-acres",esriAres:"ares",esriHectares:"hectares",esriSquareCentimeters:"square-centimeters",esriSquareDecimeters:"square-decimeters",esriSquareFeet:"square-international-feet",esriSquareFeetUS:"square-us-feet",esriSquareInches:"square-international-inches",esriSquareInchesUS:"square-us-inches",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareMiles:"square-international-miles",esriSquareMilesUS:"square-us-miles",esriSquareMillimeters:"square-millimeters",esriSquareYards:"square-international-yards",esriSquareYardsUS:"square-us-yards",esriUnknownAreaUnits:"unknown"}),l=(0,t.O)()({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards"}),u=(0,t.O)()({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards",esriNAUDays:"days",esriNAUHours:"hours",esriNAUMinutes:"minutes",esriNAUSeconds:"seconds",esriNAUKilometersPerHour:"kilometers-per-hour",esriNAUMilesPerHour:"miles-per-hour",esriNAUUnknown:"unknown"}),c=(0,t.O)()({esriDOTComplete:"complete",esriDOTCompleteNoEvents:"complete-no-events",esriDOTFeatureSets:"featuresets",esriDOTInstructionsOnly:"instructions-only",esriDOTStandard:"standard",esriDOTSummaryOnly:"summary-only"}),m=(0,t.O)()({esriNAOutputLineNone:"none",esriNAOutputLineStraight:"straight",esriNAOutputLineTrueShape:"true-shape",esriNAOutputLineTrueShapeWithMeasure:"true-shape-with-measure"}),d=(0,t.O)()({esriNAOutputPolygonNone:"none",esriNAOutputPolygonSimplified:"simplified",esriNAOutputPolygonDetailed:"detailed"}),p=(0,t.O)()({esriNFSBAllowBacktrack:"allow-backtrack",esriNFSBAtDeadEndsOnly:"at-dead-ends-only",esriNFSBNoBacktrack:"no-backtrack",esriNFSBAtDeadEndsAndIntersections:"at-dead-ends-and-intersections"}),y=(0,t.O)()({esriNATravelDirectionFromFacility:"from-facility",esriNATravelDirectionToFacility:"to-facility"}),h=(0,t.O)()({esriNATimeOfDayNotUsed:"not-used",esriNATimeOfDayUseAsStartTime:"start",esriNATimeOfDayUseAsEndTime:"end"}),N=(0,t.O)()({AUTOMOBILE:"automobile",TRUCK:"truck",WALK:"walk",OTHER:"other"}),f=(0,t.O)()({0:"either-side-of-vehicle",1:"right-side-of-vehicle",2:"left-side-of-vehicle",3:"no-u-turn"},{useNumericKeys:!0}),g=(0,t.O)()({0:"stop",1:"waypoint",2:"break"},{useNumericKeys:!0}),v=(0,t.O)()({0:"ok",1:"not-located",2:"network-element-not-located",3:"element-not-traversable",4:"invalid-field-values",5:"not-reached",6:"time-window-violation",7:"not-located-on-closest"},{useNumericKeys:!0}),S=(0,t.O)()({1:"right",2:"left"},{useNumericKeys:!0}),A=(0,t.O)()({0:"restriction",1:"scaled-cost",2:"added-cost"},{useNumericKeys:!0}),b=(0,t.O)()({0:"permit",1:"restrict"},{useNumericKeys:!0}),T=(0,t.O)()({1:"header",50:"arrive",51:"depart",52:"straight",100:"on-ferry",101:"off-ferry",102:"central-fork",103:"roundabout",104:"u-turn",150:"door",151:"stairs",152:"elevator",153:"escalator",154:"pedestrian-ramp",200:"left-fork",201:"left-ramp",202:"clockwise-roundabout",203:"left-handed-u-turn",204:"bear-left",205:"left-turn",206:"sharp-left",207:"left-turn-and-immediate-left-turn",208:"left-turn-and-immediate-right-turn",300:"right-fork",301:"right-ramp",302:"counter-clockwise-roundabout",303:"right-handed-u-turn",304:"bear-right",305:"right-turn",306:"sharp-right",307:"right-turn-and-immediate-left-turn",308:"right-turn-and-immediate-right-turn",400:"up-elevator",401:"up-escalator",402:"up-stairs",500:"down-elevator",501:"down-escalator",502:"down-stairs",1e3:"general-event",1001:"landmark",1002:"time-zone-change",1003:"traffic-event",1004:"scaled-cost-barrier-event",1005:"boundary-crossing",1006:"restriction-violation",1007:"lane"},{useNumericKeys:!0}),O=(0,t.O)()({0:"unknown",1:"segment",2:"maneuver-segment",3:"restriction-violation",4:"scaled-cost-barrier",5:"heavy-traffic",6:"slow-traffic",7:"moderate-traffic"},{useNumericKeys:!0}),k=(0,t.O)()({"NA Campus":"campus","NA Desktop":"desktop","NA Navigation":"navigation"}),U=(0,t.O)()({Kilometers:"kilometers",Miles:"miles",Meters:"meters"},{ignoreUnknown:!1}),D=(0,t.O)()({Minutes:"minutes",TimeAt1KPH:"time-at-1-kph",TravelTime:"travel-time",TruckMinutes:"truck-minutes",TruckTravelTime:"truck-travel-time",WalkTime:"walk-time"},{ignoreUnknown:!1}),M=(0,t.O)()({Kilometers:"kilometers",Miles:"miles",Meters:"meters",Minutes:"minutes",TimeAt1KPH:"time-at-1-kph",TravelTime:"travel-time",TruckMinutes:"truck-minutes",TruckTravelTime:"truck-travel-time",WalkTime:"walk-time"},{ignoreUnknown:!1}),w=(0,t.O)()({"Any Hazmat Prohibited":"any-hazmat-prohibited","Avoid Carpool Roads":"avoid-carpool-roads","Avoid Express Lanes":"avoid-express-lanes","Avoid Ferries":"avoid-ferries","Avoid Gates":"avoid-gates","Avoid Limited Access Roads":"avoid-limited-access-roads","Avoid Private Roads":"avoid-private-roads","Avoid Roads Unsuitable for Pedestrians":"avoid-roads-unsuitable-for-pedestrians","Avoid Stairways":"avoid-stairways","Avoid Toll Roads":"avoid-toll-roads","Avoid Toll Roads for Trucks":"avoid-toll-roads-for-trucks","Avoid Truck Restricted Roads":"avoid-truck-restricted-roads","Avoid Unpaved Roads":"avoid-unpaved-roads","Axle Count Restriction":"axle-count-restriction","Driving a Bus":"driving-a-bus","Driving a Taxi":"driving-a-taxi","Driving a Truck":"driving-a-truck","Driving an Automobile":"driving-an-automobile","Driving an Emergency Vehicle":"driving-an-emergency-vehicle","Height Restriction":"height-restriction","Kingpin to Rear Axle Length Restriction":"kingpin-to-rear-axle-length-restriction","Length Restriction":"length-restriction","Preferred for Pedestrians":"preferred-for-pedestrians","Riding a Motorcycle":"riding-a-motorcycle","Roads Under Construction Prohibited":"roads-under-construction-prohibited","Semi or Tractor with One or More Trailers Prohibited":"semi-or-tractor-with-one-or-more-trailers-prohibited","Single Axle Vehicles Prohibited":"single-axle-vehicles-prohibited","Tandem Axle Vehicles Prohibited":"tandem-axle-vehicles-prohibited","Through Traffic Prohibited":"through-traffic-prohibited","Truck with Trailers Restriction":"truck-with-trailers-restriction","Use Preferred Hazmat Routes":"use-preferred-hazmat-routes","Use Preferred Truck Routes":"use-preferred-truck-routes",Walking:"walking","Weight Restriction":"weight-restriction"},{ignoreUnknown:!1}),R=(0,t.O)()({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),J=(0,t.O)()({esriGeometryPoint:"point",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"envelope",esriGeometryMultipoint:"multipoint"}),P=(0,t.O)()({esriNAUTCost:"cost",esriNAUTDescriptor:"descriptor",esriNAUTRestriction:"restriction",esriNAUTHierarchy:"hierarchy"}),B=(0,t.O)()({esriDSTAltName:"alt-name",esriDSTArrive:"arrive",esriDSTBranch:"branch",esriDSTCrossStreet:"cross-street",esriDSTCumulativeLength:"cumulative-length",esriDSTDepart:"depart",esriDSTEstimatedArrivalTime:"estimated-arrival-time",esriDSTExit:"exit",esriDSTGeneral:"general",esriDSTLength:"length",esriDSTServiceTime:"service-time",esriDSTStreetName:"street-name",esriDSTSummary:"summary",esriDSTTime:"time",esriDSTTimeWindow:"time-window",esriDSTToward:"toward",esriDSTViolationTime:"violation-time",esriDSTWaitTime:"wait-time"})}}]);