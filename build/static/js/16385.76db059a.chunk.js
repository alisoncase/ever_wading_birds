"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[16385],{16385:(e,i,s)=>{s.r(i),s.d(i,{default:()=>N});var t=s(93800),r=s(19455),n=s(50925),a=s(87431),o=s(48602),l=(s(21265),s(14746),s(75269)),u=s(89227),p=s(28473),d=s(75400),g=s(93321),c=s(70576);function h(e){const i=/^(days?|hours?|minutes?|seconds?|d|h|m|s) since (\d{1,4})-(\d{1,2})-(\d{1,2})[ |T](\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?[\s|Z]?(([+|\-|\s?])(\d{1,2}):(\d{1,2}))?$/i.exec(e);if(null==i)return{didParse:!1};const[,s,t,r,n,a,o,l,u,p,d,g,c]=i;let h="seconds";const y=s.charAt(0).toLowerCase();"d"===y?h="days":"h"===y?h="hours":"m"===y&&(h="minutes");const m=parseInt(t,10);if(Number.isNaN(m))return{didParse:!1};const f=parseInt(r,10);if(Number.isNaN(f)||f<1||f>12)return{didParse:!1};const S=parseInt(n,10);if(Number.isNaN(S)||S<1||S>31)return{didParse:!1};if(2===f){const e=m%4==0&&(m%100!=0||m%400==0);if(e&&S>29||!e&&S>28)return{didParse:!1}}else if((4===f||6===f||9===f||11===f)&&S>30)return{didParse:!1};const v=parseInt(a,10);if(Number.isNaN(v)||v<0||v>23)return{didParse:!1};const x=parseInt(o,10);if(Number.isNaN(x)||x<0||x>59)return{didParse:!1};const z=parseInt(l,10);if(Number.isNaN(z)||z<0||z>59)return{didParse:!1};let N=1,b=0,_=0;if(d&&(N="-"===d?-1:1),g){if(b=parseInt(g,10),Number.isNaN(b)||b<0)return{didParse:!1};if(0!==b){const e=N*b;if(e<-12||e>14)return{didParse:!1}}}if(c&&(_=parseInt(c,10),Number.isNaN(_)||_<0||_>59))return{didParse:!1};const R=`${m}`.padStart(4,"0"),w=`${f}`.padStart(2,"0"),M=`${S}`.padStart(2,"0"),Z=`${v}`.padStart(2,"0"),j=`${x}`.padStart(2,"0"),I=`${z}`.padStart(2,"0");let P="Z";return 0===b&&0===_||(P=N>0?"+":"-",P+=`${b}`.padStart(2,"0"),P+=":",P+=`${_}`.padStart(2,"0")),{didParse:!0,unit:h,reference:new Date(`${R}-${w}-${M}T${Z}:${j}:${I}.000${P}`)}}let y=class extends r.A{constructor(){super(...arguments),this.values=null}};(0,t._)([(0,o.MZ)({type:[Number],json:{write:!0}})],y.prototype,"values",void 0),y=(0,t._)([(0,l.$)("esri.layers.voxel.VoxelIrregularSpacing")],y);const m=y;let f=class extends r.A{constructor(){super(...arguments),this.scale=1,this.offset=0}};(0,t._)([(0,o.MZ)({type:Number,json:{write:!0}})],f.prototype,"scale",void 0),(0,t._)([(0,o.MZ)({type:Number,json:{write:!0}})],f.prototype,"offset",void 0),f=(0,t._)([(0,l.$)("esri.layers.voxel.VoxelRegularSpacing")],f);const S=f;let v=class extends r.A{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=!0,this.isWrappedDateLine=!1,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null}get isRegular(){return(null==this.irregularSpacing||void 0===this.irregularSpacing)&&null!==this.regularSpacing}getRange(){return this.isRegular?[this.regularSpacing.offset,this.regularSpacing.offset+this.regularSpacing.scale*(this.size-1)]:Array.isArray(this.irregularSpacing?.values)&&this.irregularSpacing.values.length>1?[this.irregularSpacing.values[0],this.irregularSpacing.values[this.irregularSpacing.values.length-1]]:[0,0]}};(0,t._)([(0,o.MZ)({type:m,json:{write:!0}})],v.prototype,"irregularSpacing",void 0),(0,t._)([(0,o.MZ)({type:Boolean,json:{write:!0}})],v.prototype,"isPositiveUp",void 0),(0,t._)([(0,o.MZ)({type:Boolean,json:{write:!0}})],v.prototype,"isWrappedDateLine",void 0),(0,t._)([(0,o.MZ)({type:String,json:{write:!0}})],v.prototype,"label",void 0),(0,t._)([(0,o.MZ)({type:String,json:{write:!0}})],v.prototype,"name",void 0),(0,t._)([(0,o.MZ)({type:String,json:{write:!0}})],v.prototype,"quantity",void 0),(0,t._)([(0,o.MZ)({type:S,json:{write:!0}})],v.prototype,"regularSpacing",void 0),(0,t._)([(0,o.MZ)({type:Number,json:{write:!0}})],v.prototype,"size",void 0),(0,t._)([(0,o.MZ)({type:String,json:{write:!0}})],v.prototype,"unit",void 0),(0,t._)([(0,o.MZ)({type:Boolean,json:{read:!1}})],v.prototype,"isRegular",null),v=(0,t._)([(0,l.$)("esri.layers.voxel.VoxelDimension")],v);const x=v;let z=class extends r.A{constructor(e){super(e),this.id=0,this.dimensions=null,this.spatialReference=g.default.WGS84}get zDimension(){if(!this.dimensions)return-1;if(!Array.isArray(this.dimensions))return-1;if(4!==this.dimensions.length)return-1;for(let e=2;e<4;++e)if(this.dimensions[e].size>0)return e;return-1}get isValid(){return!!this.dimensions&&!!Array.isArray(this.dimensions)&&4===this.dimensions.length&&!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&!(-1===this.zDimension||this.dimensions[this.zDimension].size<1)}get originInLayerSpace3D(){if(!this.isValid||"xyt"===this.volumeType)return[0,0,0];const e=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),s=this.dimensions[2],t=s.isRegular?s.getRange():[0,s.size];return[e[0],i[0],t[0]]}get voxelSizeInLayerSpaceSigned(){if(!this.isValid||"xyt"===this.volumeType)return[0,0,0];const e=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),s=this.dimensions[2],t=s.isRegular?s.getRange():[0,s.size],r=[this.sizeInVoxels[0],this.sizeInVoxels[1],this.sizeInVoxels[2]];for(let n=0;n<3;++n)r[n]<2?r[n]=1:r[n]-=1;return s.isRegular&&!s.isPositiveUp&&(r[2]*=-1),[(e[1]-e[0])/r[0],(i[1]-i[0])/r[1],(t[1]-t[0])/r[2]]}get volumeType(){if(this.isValid){const e=this.dimensions[2].size>0;let i=this.dimensions[3].size>0;if(i){const e=this.dimensions[3];i="time"===e.quantity,i&&null!==e.unit&&(i=h(e.unit).didParse)}if(!e&&i)return"xyt";if(e&&i)return"xyzt"}return"xyz"}get sizeInVoxels(){if(!this.isValid)return[0,0,0];const e=this.zDimension;return[this.dimensions[0].size,this.dimensions[1].size,this.dimensions[e].size]}get timeStops(){if("xyzt"!==this.volumeType)return[];const e=this.dimensions[3],i=[],s=h(e.unit);if(s.didParse)if(e.isRegular){const t=e.regularSpacing?.offset??0,r=e.regularSpacing?.scale||1;for(let n=0;n<e.size;++n){const e=t+r*n;i.push((0,a.mi)(s.reference,e,s.unit))}}else if(Array.isArray(e.irregularSpacing?.values)&&e.irregularSpacing.values.length>0)for(let t=0;t<e.irregularSpacing.values.length;++t){const r=e.irregularSpacing.values[t];i.push((0,a.mi)(s.reference,r,s.unit))}return i}computeVoxelSpaceLocation(e){if(!this.isValid)return[0,0,0];if("xyt"===this.volumeType)return n.A.getLogger(this).error("computeVoxelSpacePosition cannot be used with XYT volumes."),[0,0,0];if(!(0,c.aI)(this.spatialReference,e.spatialReference))return n.A.getLogger(this).error("pos argument should have the same spatial reference as the VoxelLayer."),[0,0,0];const i=(0,p.fA)(e.x,e.y,e.z??0);(0,u.d)(i,i,this.originInLayerSpace3D),(0,u.E)(i,i,this.voxelSizeInLayerSpaceSigned);const s=this.dimensions[this.zDimension];if(!s.isRegular&&Array.isArray(s.irregularSpacing?.values)&&s.irregularSpacing.values.length>1){const t=e.z??0,r=s.irregularSpacing.values,n=s.isPositiveUp?1:-1,a=r.reduce(((e,i)=>Math.abs(n*i-t)<Math.abs(n*e-t)?i:e));for(let e=0;e<r.length;++e)if(r[e]===a){i[2]=e;break}}return[i[0],i[1],i[2]]}computeLayerSpaceLocation(e){if(!this.isValid)return new d.default({x:0,y:0,spatialReference:this.spatialReference});const i=(0,p.ci)(e);if((0,u.C)(i,i,this.voxelSizeInLayerSpaceSigned),(0,u.g)(i,i,this.originInLayerSpace3D),"xyt"===this.volumeType)return new d.default({x:i[0],y:i[1],spatialReference:this.spatialReference});const s=this.dimensions[this.zDimension];return s.isRegular||Array.isArray(s.irregularSpacing?.values)&&(e[2]<0?i[2]=s.irregularSpacing.values[0]:e[2]<s.irregularSpacing.values.length?i[2]=s.irregularSpacing.values[e[2]]:i[2]=s.irregularSpacing.values[s.irregularSpacing.values.length-1],s.isPositiveUp||(i[2]*=-1)),new d.default({x:i[0],y:i[1],z:i[2],spatialReference:this.spatialReference})}};(0,t._)([(0,o.MZ)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],z.prototype,"id",void 0),(0,t._)([(0,o.MZ)({type:[x],json:{write:{enabled:!0,isRequired:!0}}})],z.prototype,"dimensions",void 0),(0,t._)([(0,o.MZ)({type:g.default,json:{read:{enabled:!1}}})],z.prototype,"spatialReference",void 0),(0,t._)([(0,o.MZ)({type:Number,json:{read:!1}})],z.prototype,"zDimension",null),(0,t._)([(0,o.MZ)({type:[Boolean],json:{read:!1}})],z.prototype,"isValid",null),(0,t._)([(0,o.MZ)({type:[Number],json:{read:!1}})],z.prototype,"originInLayerSpace3D",null),(0,t._)([(0,o.MZ)({type:[Number],json:{read:!1}})],z.prototype,"voxelSizeInLayerSpaceSigned",null),(0,t._)([(0,o.MZ)({type:["xyz","xyzt","xyt"],json:{read:{enabled:!1}}})],z.prototype,"volumeType",null),(0,t._)([(0,o.MZ)({type:[Number],json:{read:!1}})],z.prototype,"sizeInVoxels",null),(0,t._)([(0,o.MZ)({type:[Date],json:{read:!1,write:!1}})],z.prototype,"timeStops",null),z=(0,t._)([(0,l.$)("esri.layers.voxel.VoxelVolume")],z);const N=z}}]);