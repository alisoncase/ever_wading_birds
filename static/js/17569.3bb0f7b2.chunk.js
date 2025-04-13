"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[11833,12336,17569,23682,37004,45078,63643,65207,76845,99590],{12336:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var r,n=o(93800),s=o(19455),i=o(48602),l=(o(21265),o(50925),o(14746),o(47332)),a=o(75269);let d=r=class extends s.A{constructor(e){super(e),this.type="cloudy",this.cloudCover=.5}clone(){return new r({cloudCover:this.cloudCover})}};(0,n._)([(0,l.e)({cloudy:"cloudy"}),(0,i.MZ)({json:{write:{isRequired:!0}}})],d.prototype,"type",void 0),(0,n._)([(0,i.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],d.prototype,"cloudCover",void 0),d=r=(0,n._)([(0,a.$)("esri.views.3d.environment.CloudyWeather")],d);const p=d},17569:(e,t,o)=>{o.r(t),o.d(t,{default:()=>C});var r=o(93800),n=o(19455),s=o(82301),i=o(50925),l=o(48602),a=(o(21265),o(75269)),d=o(87588),p=o(39584),u=o(48277),c=o(23682),y=o(63643),h=o(76845),w=o(99590);const v={base:h.default,key:"type",typeMap:{color:w.default}};const b={types:v,json:{read:(f=v,(e,t,o)=>{if(!e)return e;for(const r in f.typeMap)if(e.type===r){const t=new f.typeMap[r];return t.read(e,o),t}}),write:{overridePolicy:(e,t,o)=>({enabled:!o?.isPresentation})}}};var f,g;const _=(e,t,o)=>({enabled:!o?.isPresentation});let m=g=class extends n.A{constructor(e){super(e),this.lighting=new c.default,this.background=null,this.atmosphereEnabled=!0,this.starsEnabled=!0}set weather(e){(0,p.TJ)(e?.type,i.A.getLogger(this))&&this._set("weather",e)}clone(){return new g(this.cloneConstructProperties())}cloneConstructProperties(){return{lighting:this.lighting&&"virtual"===this.lighting.type?y.default.prototype.clone.call(this.lighting):c.default.prototype.clone.call(this.lighting),background:(0,s.clone)(this.background),atmosphereEnabled:this.atmosphereEnabled,starsEnabled:this.starsEnabled,weather:this.weather.clone()}}};(0,r._)([(0,l.MZ)({types:u.S,nonNullable:!0,json:{write:!0}})],m.prototype,"lighting",void 0),(0,r._)([(0,l.MZ)(b)],m.prototype,"background",void 0),(0,r._)([(0,l.MZ)({type:Boolean,nonNullable:!0,json:{write:{overridePolicy:_}}})],m.prototype,"atmosphereEnabled",void 0),(0,r._)([(0,l.MZ)({type:Boolean,nonNullable:!0,json:{write:{overridePolicy:_}}})],m.prototype,"starsEnabled",void 0),(0,r._)([(0,l.MZ)({types:p.eM,nonNullable:!0,json:{write:!0},value:new d.default})],m.prototype,"weather",null),m=g=(0,r._)([(0,a.$)("esri.webscene.Environment")],m);const C=m},23682:(e,t,o)=>{o.r(t),o.d(t,{default:()=>u});var r,n=o(93800),s=o(19455),i=o(48602),l=(o(21265),o(50925),o(14746),o(14800)),a=o(75269),d=o(15484);let p=r=class extends s.A{constructor(e){super(e),this.type="sun",this.date=null,this.directShadowsEnabled=!1,this.displayUTCOffset=null}readDate(e,t){return null!=t.datetime&&new Date(t.datetime)||null}writeDate(e,t,o){t[o]=e.getTime()}readDirectShadowsEnabled(e,t){return!!t.directShadows}writedirectShadowsEnabled(e,t,o){e&&(t[o]=e)}writeDisplayUTCOffset(e,t){null!=e&&(t.displayUTCOffset=e)}clone(){return new r(this.cloneConstructProperties())}cloneConstructProperties(){const e={directShadowsEnabled:this.directShadowsEnabled,displayUTCOffset:null!=this.displayUTCOffset?this.displayUTCOffset:null};return null!=this.date&&(e.date=new Date(this.date.getTime())),e}};(0,n._)([(0,i.MZ)({readOnly:!0,type:["sun"],json:{write:!0}})],p.prototype,"type",void 0),(0,n._)([(0,i.MZ)({type:Date,json:{type:Number,write:{target:"datetime"}}})],p.prototype,"date",void 0),(0,n._)([(0,l.w)("date",["datetime"])],p.prototype,"readDate",null),(0,n._)([(0,d.K)("date")],p.prototype,"writeDate",null),(0,n._)([(0,i.MZ)({type:Boolean,json:{default:!1,write:{target:"directShadows"}}})],p.prototype,"directShadowsEnabled",void 0),(0,n._)([(0,l.w)("directShadowsEnabled",["directShadows"])],p.prototype,"readDirectShadowsEnabled",null),(0,n._)([(0,d.K)("directShadowsEnabled")],p.prototype,"writedirectShadowsEnabled",null),(0,n._)([(0,i.MZ)({type:Number,json:{write:!0}})],p.prototype,"displayUTCOffset",void 0),(0,n._)([(0,d.K)("displayUTCOffset")],p.prototype,"writeDisplayUTCOffset",null),p=r=(0,n._)([(0,a.$)("esri.webscene.SunLighting")],p);const u=p},34214:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var r,n=o(93800),s=o(19455),i=o(48602),l=(o(21265),o(50925),o(14746),o(47332)),a=o(75269);let d=r=class extends s.A{constructor(e){super(e),this.type="rainy",this.cloudCover=.5,this.precipitation=.5}clone(){return new r({cloudCover:this.cloudCover,precipitation:this.precipitation})}};(0,n._)([(0,l.e)({rainy:"rainy"}),(0,i.MZ)({json:{write:{isRequired:!0}}})],d.prototype,"type",void 0),(0,n._)([(0,i.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],d.prototype,"cloudCover",void 0),(0,n._)([(0,i.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],d.prototype,"precipitation",void 0),d=r=(0,n._)([(0,a.$)("esri.views.3d.environment.RainyWeather")],d);const p=d},37004:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var r,n=o(93800),s=o(19455),i=o(48602),l=(o(21265),o(50925),o(14746),o(47332)),a=o(75269);let d=r=class extends s.A{constructor(e){super(e),this.type="snowy",this.cloudCover=.5,this.precipitation=.5,this.snowCover="disabled"}clone(){return new r({cloudCover:this.cloudCover,precipitation:this.precipitation,snowCover:this.snowCover})}};(0,n._)([(0,l.e)({snowy:"snowy"}),(0,i.MZ)({json:{write:{isRequired:!0}}})],d.prototype,"type",void 0),(0,n._)([(0,i.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],d.prototype,"cloudCover",void 0),(0,n._)([(0,i.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],d.prototype,"precipitation",void 0),(0,n._)([(0,i.MZ)({type:["enabled","disabled"],nonNullable:!0,json:{write:!0}})],d.prototype,"snowCover",void 0),d=r=(0,n._)([(0,a.$)("esri.views.3d.environment.SnowyWeather")],d);const p=d},39584:(e,t,o)=>{o.d(t,{TJ:()=>p,eM:()=>a,k9:()=>c,l2:()=>d,zF:()=>u});var r=o(12336),n=o(45078),s=o(34214),i=o(37004),l=o(87588);const a={key:"type",base:l.default,typeMap:{sunny:l.default,cloudy:r.default,rainy:s.default,snowy:i.default,foggy:n.default}},d=Object.keys(a.typeMap);function p(e,t){return!!d.includes(e)||(t.error(`"${e}" is not a valid weather type`),!1)}const u=1e4,c=1e5},45078:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var r,n=o(93800),s=o(19455),i=o(48602),l=(o(21265),o(50925),o(14746),o(47332)),a=o(75269);let d=r=class extends s.A{constructor(e){super(e),this.type="foggy",this.fogStrength=.5}clone(){return new r({fogStrength:this.fogStrength})}};(0,n._)([(0,l.e)({foggy:"foggy"}),(0,i.MZ)({json:{write:{isRequired:!0}}})],d.prototype,"type",void 0),(0,n._)([(0,i.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],d.prototype,"fogStrength",void 0),d=r=(0,n._)([(0,a.$)("esri.views.3d.environment.FoggyWeather")],d);const p=d},48277:(e,t,o)=>{o.d(t,{S:()=>s});var r=o(23682),n=o(63643);const s={key:"type",defaultKeyValue:"sun",base:null,typeMap:{sun:r.default,virtual:n.default}}},63643:(e,t,o)=>{o.r(t),o.d(t,{default:()=>d});var r,n=o(93800),s=o(19455),i=o(48602),l=(o(21265),o(50925),o(14746),o(75269));let a=r=class extends s.A{constructor(e){super(e),this.type="virtual",this.directShadowsEnabled=!1}clone(){return new r(this.cloneConstructProperties())}cloneConstructProperties(){return{directShadowsEnabled:this.directShadowsEnabled}}};(0,n._)([(0,i.MZ)({readOnly:!0,type:["virtual"],json:{write:{isRequired:!0}}})],a.prototype,"type",void 0),(0,n._)([(0,i.MZ)({type:Boolean,json:{default:!1,name:"directShadows",write:!0}})],a.prototype,"directShadowsEnabled",void 0),a=r=(0,n._)([(0,l.$)("esri.webscene.VirtualLighting")],a);const d=a},76845:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a});var r=o(93800),n=o(19455),s=o(48602),i=(o(21265),o(50925),o(14746),o(75269));let l=class extends n.A{constructor(e){super(e)}clone(){throw new Error("Subclasses of Background should implement their own clone method.")}};(0,r._)([(0,s.MZ)({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),l=(0,r._)([(0,i.$)("esri.webscene.background.Background")],l);const a=l},87588:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var r,n=o(93800),s=o(19455),i=o(48602),l=(o(21265),o(50925),o(14746),o(47332)),a=o(75269);let d=r=class extends s.A{constructor(e){super(e),this.type="sunny",this.cloudCover=.5}clone(){return new r({cloudCover:this.cloudCover})}};(0,n._)([(0,l.e)({sunny:"sunny"}),(0,i.MZ)({json:{write:{isRequired:!0}}})],d.prototype,"type",void 0),(0,n._)([(0,i.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],d.prototype,"cloudCover",void 0),d=r=(0,n._)([(0,a.$)("esri.views.3d.environment.SunnyWeather")],d);const p=d},99590:(e,t,o)=>{o.r(t),o.d(t,{default:()=>c});var r,n=o(93800),s=o(88102),i=o(48602),l=(o(21265),o(50925),o(14746),o(47332)),a=o(75269),d=o(78281),p=o(76845);let u=r=class extends p.default{constructor(e){super(e),this.type="color",this.color=new s.default([0,0,0,1])}clone(){return new r(this.cloneProperties())}cloneProperties(){return{color:this.color.clone()}}};(0,n._)([(0,l.e)({color:"color"},{readOnly:!0})],u.prototype,"type",void 0),(0,n._)([(0,i.MZ)((0,d.E)({nonNullable:!0}))],u.prototype,"color",void 0),u=r=(0,n._)([(0,a.$)("esri.webscene.background.ColorBackground")],u);const c=u}}]);