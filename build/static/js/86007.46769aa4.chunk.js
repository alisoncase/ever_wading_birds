"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[86007],{86007:(e,i,r)=>{r.r(i),r.d(i,{default:()=>v});var t,s=r(93800),a=r(79625),o=r(35377),n=r(85715),l=r(19455),u=r(48602),d=(r(21265),r(50925),r(14746),r(75269)),c=r(54824),m=r(93074),p=r(38602);let h=t=class extends(n.A.ClonableMixin(l.A)){constructor(e){super(e),this.directionLineType=null,this.directionPointId=null,this.distance=null,this.duration=null,this.fromLevel=null,this.geometry=null,this.objectId=null,this.popupTemplate=null,this.symbol=null,this.toLevel=null,this.type="direction-line"}static fromGraphic(e){return new t({directionLineType:m.gD.fromJSON(e.attributes.DirectionLineType),directionPointId:e.attributes.DirectionPointID,distance:e.attributes.Meters,duration:e.attributes.Minutes,fromLevel:e.attributes.FromLevel??null,geometry:e.geometry,objectId:e.attributes.ObjectID??e.attributes.__OBJECTID,popupTemplate:e.popupTemplate,symbol:e.symbol,toLevel:e.attributes.ToLevel??null})}toGraphic(){const e={ObjectID:this.objectId,DirectionLineType:null!=this.directionLineType?m.gD.toJSON(this.directionLineType):null,DirectionPointID:this.directionPointId,Meters:this.distance,Minutes:this.duration};return null!=this.fromLevel&&(e.FromLevel=this.fromLevel),null!=this.toLevel&&(e.ToLevel=this.toLevel),new a.default({geometry:this.geometry,attributes:e,symbol:this.symbol,popupTemplate:this.popupTemplate})}};h.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"DirectionLineType",alias:"Line Type",type:"esriFieldTypeInteger"},{name:"DirectionPointID",alias:"Direction Point ID",type:"esriFieldTypeInteger"},{name:"FromLevel",alias:"From Level",type:"esriFieldTypeInteger"},{name:"Meters",alias:"Meters",type:"esriFieldTypeDouble"},{name:"Minutes",alias:"Minutes",type:"esriFieldTypeDouble"},{name:"ToLevel",alias:"To Level",type:"esriFieldTypeInteger"}],(0,s._)([(0,u.MZ)({type:m.gD.apiValues,json:{read:{source:"attributes.DirectionLineType",reader:m.gD.read}}})],h.prototype,"directionLineType",void 0),(0,s._)([(0,u.MZ)({json:{read:{source:"attributes.DirectionPointID"}}})],h.prototype,"directionPointId",void 0),(0,s._)([(0,u.MZ)({json:{read:{source:"attributes.Meters"}}})],h.prototype,"distance",void 0),(0,s._)([(0,u.MZ)({json:{read:{source:"attributes.Minutes"}}})],h.prototype,"duration",void 0),(0,s._)([(0,u.MZ)({json:{read:{source:"attributes.FromLevel"}}})],h.prototype,"fromLevel",void 0),(0,s._)([(0,u.MZ)({type:c.default})],h.prototype,"geometry",void 0),(0,s._)([(0,u.MZ)({json:{read:{source:"attributes.ObjectID"}}})],h.prototype,"objectId",void 0),(0,s._)([(0,u.MZ)({type:o.default})],h.prototype,"popupTemplate",void 0),(0,s._)([(0,u.MZ)({types:p.Es})],h.prototype,"symbol",void 0),(0,s._)([(0,u.MZ)({json:{read:{source:"attributes.ToLevel"}}})],h.prototype,"toLevel",void 0),(0,s._)([(0,u.MZ)({readOnly:!0,json:{read:!1}})],h.prototype,"type",void 0),h=t=(0,s._)([(0,d.$)("esri.rest.support.DirectionLine")],h);const v=h},93074:(e,i,r)=>{r.d(i,{$n:()=>S,$r:()=>A,EM:()=>g,Ec:()=>R,JJ:()=>T,Mm:()=>U,OC:()=>w,Sr:()=>c,UO:()=>n,Vj:()=>I,WU:()=>P,Y8:()=>o,Z7:()=>l,_6:()=>k,_H:()=>h,aJ:()=>d,ag:()=>v,cQ:()=>m,dd:()=>O,dn:()=>u,et:()=>M,fe:()=>N,gD:()=>b,hE:()=>p,hY:()=>a,iM:()=>f,mt:()=>D,ow:()=>y,vS:()=>L});var t=r(42761);const s={esriCentimeters:"centimeters",esriDecimalDegrees:"decimal-degrees",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriPoints:"points",esriUnknownUnits:"unknown",esriYards:"yards"},a=(0,t.O)()(s),o=(0,t.O)()({...s,esriIntFeet:"international-feet",esriIntInches:"international-inches",esriIntMiles:"international-miles",esriIntNauticalMiles:"international-nautical-miles",esriIntYards:"international-yards"}),n=(0,t.O)()({esriAcres:"international-acres",esriAcresUS:"us-acres",esriAres:"ares",esriHectares:"hectares",esriSquareCentimeters:"square-centimeters",esriSquareDecimeters:"square-decimeters",esriSquareFeet:"square-international-feet",esriSquareFeetUS:"square-us-feet",esriSquareInches:"square-international-inches",esriSquareInchesUS:"square-us-inches",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareMiles:"square-international-miles",esriSquareMilesUS:"square-us-miles",esriSquareMillimeters:"square-millimeters",esriSquareYards:"square-international-yards",esriSquareYardsUS:"square-us-yards",esriUnknownAreaUnits:"unknown"}),l=(0,t.O)()({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards"}),u=(0,t.O)()({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards",esriNAUDays:"days",esriNAUHours:"hours",esriNAUMinutes:"minutes",esriNAUSeconds:"seconds",esriNAUKilometersPerHour:"kilometers-per-hour",esriNAUMilesPerHour:"miles-per-hour",esriNAUUnknown:"unknown"}),d=(0,t.O)()({esriDOTComplete:"complete",esriDOTCompleteNoEvents:"complete-no-events",esriDOTFeatureSets:"featuresets",esriDOTInstructionsOnly:"instructions-only",esriDOTStandard:"standard",esriDOTSummaryOnly:"summary-only"}),c=(0,t.O)()({esriNAOutputLineNone:"none",esriNAOutputLineStraight:"straight",esriNAOutputLineTrueShape:"true-shape",esriNAOutputLineTrueShapeWithMeasure:"true-shape-with-measure"}),m=(0,t.O)()({esriNAOutputPolygonNone:"none",esriNAOutputPolygonSimplified:"simplified",esriNAOutputPolygonDetailed:"detailed"}),p=(0,t.O)()({esriNFSBAllowBacktrack:"allow-backtrack",esriNFSBAtDeadEndsOnly:"at-dead-ends-only",esriNFSBNoBacktrack:"no-backtrack",esriNFSBAtDeadEndsAndIntersections:"at-dead-ends-and-intersections"}),h=(0,t.O)()({esriNATravelDirectionFromFacility:"from-facility",esriNATravelDirectionToFacility:"to-facility"}),v=(0,t.O)()({esriNATimeOfDayNotUsed:"not-used",esriNATimeOfDayUseAsStartTime:"start",esriNATimeOfDayUseAsEndTime:"end"}),y=(0,t.O)()({AUTOMOBILE:"automobile",TRUCK:"truck",WALK:"walk",OTHER:"other"}),T=(0,t.O)()({0:"either-side-of-vehicle",1:"right-side-of-vehicle",2:"left-side-of-vehicle",3:"no-u-turn"},{useNumericKeys:!0}),g=(0,t.O)()({0:"stop",1:"waypoint",2:"break"},{useNumericKeys:!0}),A=(0,t.O)()({0:"ok",1:"not-located",2:"network-element-not-located",3:"element-not-traversable",4:"invalid-field-values",5:"not-reached",6:"time-window-violation",7:"not-located-on-closest"},{useNumericKeys:!0}),D=(0,t.O)()({1:"right",2:"left"},{useNumericKeys:!0}),f=(0,t.O)()({0:"restriction",1:"scaled-cost",2:"added-cost"},{useNumericKeys:!0}),N=(0,t.O)()({0:"permit",1:"restrict"},{useNumericKeys:!0}),k=(0,t.O)()({1:"header",50:"arrive",51:"depart",52:"straight",100:"on-ferry",101:"off-ferry",102:"central-fork",103:"roundabout",104:"u-turn",150:"door",151:"stairs",152:"elevator",153:"escalator",154:"pedestrian-ramp",200:"left-fork",201:"left-ramp",202:"clockwise-roundabout",203:"left-handed-u-turn",204:"bear-left",205:"left-turn",206:"sharp-left",207:"left-turn-and-immediate-left-turn",208:"left-turn-and-immediate-right-turn",300:"right-fork",301:"right-ramp",302:"counter-clockwise-roundabout",303:"right-handed-u-turn",304:"bear-right",305:"right-turn",306:"sharp-right",307:"right-turn-and-immediate-left-turn",308:"right-turn-and-immediate-right-turn",400:"up-elevator",401:"up-escalator",402:"up-stairs",500:"down-elevator",501:"down-escalator",502:"down-stairs",1e3:"general-event",1001:"landmark",1002:"time-zone-change",1003:"traffic-event",1004:"scaled-cost-barrier-event",1005:"boundary-crossing",1006:"restriction-violation",1007:"lane"},{useNumericKeys:!0}),b=(0,t.O)()({0:"unknown",1:"segment",2:"maneuver-segment",3:"restriction-violation",4:"scaled-cost-barrier",5:"heavy-traffic",6:"slow-traffic",7:"moderate-traffic"},{useNumericKeys:!0}),S=(0,t.O)()({"NA Campus":"campus","NA Desktop":"desktop","NA Navigation":"navigation"}),O=(0,t.O)()({Kilometers:"kilometers",Miles:"miles",Meters:"meters"},{ignoreUnknown:!1}),U=(0,t.O)()({Minutes:"minutes",TimeAt1KPH:"time-at-1-kph",TravelTime:"travel-time",TruckMinutes:"truck-minutes",TruckTravelTime:"truck-travel-time",WalkTime:"walk-time"},{ignoreUnknown:!1}),M=(0,t.O)()({Kilometers:"kilometers",Miles:"miles",Meters:"meters",Minutes:"minutes",TimeAt1KPH:"time-at-1-kph",TravelTime:"travel-time",TruckMinutes:"truck-minutes",TruckTravelTime:"truck-travel-time",WalkTime:"walk-time"},{ignoreUnknown:!1}),w=(0,t.O)()({"Any Hazmat Prohibited":"any-hazmat-prohibited","Avoid Carpool Roads":"avoid-carpool-roads","Avoid Express Lanes":"avoid-express-lanes","Avoid Ferries":"avoid-ferries","Avoid Gates":"avoid-gates","Avoid Limited Access Roads":"avoid-limited-access-roads","Avoid Private Roads":"avoid-private-roads","Avoid Roads Unsuitable for Pedestrians":"avoid-roads-unsuitable-for-pedestrians","Avoid Stairways":"avoid-stairways","Avoid Toll Roads":"avoid-toll-roads","Avoid Toll Roads for Trucks":"avoid-toll-roads-for-trucks","Avoid Truck Restricted Roads":"avoid-truck-restricted-roads","Avoid Unpaved Roads":"avoid-unpaved-roads","Axle Count Restriction":"axle-count-restriction","Driving a Bus":"driving-a-bus","Driving a Taxi":"driving-a-taxi","Driving a Truck":"driving-a-truck","Driving an Automobile":"driving-an-automobile","Driving an Emergency Vehicle":"driving-an-emergency-vehicle","Height Restriction":"height-restriction","Kingpin to Rear Axle Length Restriction":"kingpin-to-rear-axle-length-restriction","Length Restriction":"length-restriction","Preferred for Pedestrians":"preferred-for-pedestrians","Riding a Motorcycle":"riding-a-motorcycle","Roads Under Construction Prohibited":"roads-under-construction-prohibited","Semi or Tractor with One or More Trailers Prohibited":"semi-or-tractor-with-one-or-more-trailers-prohibited","Single Axle Vehicles Prohibited":"single-axle-vehicles-prohibited","Tandem Axle Vehicles Prohibited":"tandem-axle-vehicles-prohibited","Through Traffic Prohibited":"through-traffic-prohibited","Truck with Trailers Restriction":"truck-with-trailers-restriction","Use Preferred Hazmat Routes":"use-preferred-hazmat-routes","Use Preferred Truck Routes":"use-preferred-truck-routes",Walking:"walking","Weight Restriction":"weight-restriction"},{ignoreUnknown:!1}),L=(0,t.O)()({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),I=(0,t.O)()({esriGeometryPoint:"point",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"envelope",esriGeometryMultipoint:"multipoint"}),P=(0,t.O)()({esriNAUTCost:"cost",esriNAUTDescriptor:"descriptor",esriNAUTRestriction:"restriction",esriNAUTHierarchy:"hierarchy"}),R=(0,t.O)()({esriDSTAltName:"alt-name",esriDSTArrive:"arrive",esriDSTBranch:"branch",esriDSTCrossStreet:"cross-street",esriDSTCumulativeLength:"cumulative-length",esriDSTDepart:"depart",esriDSTEstimatedArrivalTime:"estimated-arrival-time",esriDSTExit:"exit",esriDSTGeneral:"general",esriDSTLength:"length",esriDSTServiceTime:"service-time",esriDSTStreetName:"street-name",esriDSTSummary:"summary",esriDSTTime:"time",esriDSTTimeWindow:"time-window",esriDSTToward:"toward",esriDSTViolationTime:"violation-time",esriDSTWaitTime:"wait-time"})}}]);