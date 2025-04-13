"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[5926],{5926:(e,t,o)=>{o.r(t),o.d(t,{createPCClassRenderer:()=>k,createRenderer:()=>D,regenerateRenderer:()=>_});var n=o(2925),i=o(74719),a=o(82301),l=o(53957),r=o(95011),s=o(64320),u=o(45581),c=o(37382),d=o(88171),p=o(34623),m=o(70183),y=o(66787),f=o(40663),h=o(39569),w=o(69086),g=o(85151),v=o(79538),b=o(2938),T=o(96169);async function z(e){if(!e?.layer||!e.field&&!e.valueExpression)throw new i.default("type-renderer:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(e.valueExpression&&!e.view)throw new i.default("type-renderer:missing-parameters","View is required when 'valueExpression' is specified");e.forBinning&&(0,g.p)(e,"type-renderer");const t={...e,layer:e.layer};t.symbolType=t.symbolType||"2d",t.defaultSymbolEnabled??=!0,t.sortBy??="count",t.sortEnabled??=!0,t.statistics=(0,a.clone)(t.statistics);const o=null==t.numTypes?10:t.numTypes,n=e.forBinning?b.Mi:b.J4,l=(0,b.Jg)(t.layer,n,e.forBinning);if(!l)throw new i.default("type-renderer:invalid-parameters","'layer' must be one of these types: "+(0,b.Ho)(n).join(", "));const r=null!=t.signal?{signal:t.signal}:null;await l.load(r);const s=l.geometryType;if(t.outlineOptimizationEnabled="polygon"===s&&t.outlineOptimizationEnabled,t.sizeOptimizationEnabled=("point"===s||"multipoint"===s||"polyline"===s)&&t.sizeOptimizationEnabled,"mesh"===s)t.symbolType="3d-volumetric",t.colorMixMode=t.colorMixMode||"replace",t.edgesType=t.edgesType||"none";else{if("3d-volumetric-uniform"===t.symbolType&&"point"!==s)throw new i.default("type-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(t.symbolType.includes("3d-volumetric")&&(!t.view||"3d"!==t.view.type))throw new i.default("type-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'")}const u=await(0,v.EG)({field:t.field,field2:t.field2,field3:t.field3,valueExpression:t.valueExpression}),c=(0,h.MH)(l,u,"type-renderer:invalid-parameters");if(c)throw c;return{...t,layer:l,numTypes:o}}async function x(e){let t=e.typeScheme,o=null,n=null;const i=await(0,h.Ib)(e.basemap,e.view);if(o=null!=i.basemapId?i.basemapId:null,n=null!=i.basemapTheme?i.basemapTheme:null,t)return{scheme:(0,T.cloneScheme)(t),basemapId:o,basemapTheme:n};const a=(0,T.getSchemes)({numColors:e.numColors,basemapTheme:n,geometryType:e.geometryType,theme:e.theme,worldScale:e.worldScale,view:e.view});return a&&(t=a.primaryScheme,o=a.basemapId,n=a.basemapTheme),{scheme:t,basemapId:o,basemapTheme:n}}function C(e,t){let o;return o=e.label<t.label?-1:e.label>t.label?1:0,o}function M(e,t){let o;return o=e.value<t.value?-1:e.value>t.value?1:0,o}function S(e,t){let o=t.count-e.count;return 0===o&&(o=C(e,t)),o}function q(e,t){let o=t.count-e.count;return 0===o&&(o=M(e,t)),o}function V(e,t,o){let n;"count"===t?(n=q,o&&"codedValues"in o&&o.codedValues&&(n=S)):"value"===t&&(n=M,o&&"codedValues"in o&&o.codedValues&&(n=C)),n&&e.sort(n)}async function E(e,t,o,n){const i=await(0,l.ud)("esri/smartMapping/t9n/smartMapping"),{field:a,field2:s,field3:p}=t,m=e.uniqueValueInfos,y=t.layer,f=a?y.getField(a):null,w=f?y.getFieldDomain(f.name):null,g=-1===t.numTypes?m.length:t.numTypes,b=y.geometryType,z=new u.default({field:a,field2:s,field3:p,fieldDelimiter:a&&s?v.UH:null}),C=[],M=[],S={value:null,domain:w,fieldInfo:f};m.forEach(((e,t)=>{S.value=e.value,e.label=(0,d.createUniqueValueLabel)(S);const o=e.value;(null===o||"string"==typeof o&&o.toLowerCase().includes("<null>"))&&C.unshift(t)}));for(const l of C)M.unshift(m.splice(l,1)[0]);!1!==t.sortEnabled&&V(m,t.sortBy,w),function(e,t,o){const{field:n,numTypes:i,layer:a,view:l}=t,s=n?a.getField(n):null;if(s&&((0,v.fs)(s)||(0,r.isTimeOnlyField)(s))){const t=o.filter(((e,t)=>t<i)).map((e=>e.value)),n=(0,r.isTimeOnlyField)(s)?null:(0,d.calculateDateFormatInterval)(t),u=n?d.dateFormatIntervalOptions[n]:void 0;if(e.dateFormatOptions={fieldType:s.type,format:u},l){const t=a.layer;e.dateFormatOptions.timeZoneOptions={layerTimeZone:"preferredTimeZone"in t?t.preferredTimeZone:null,viewTimeZone:l.timeZone,datesInUnknownTimezone:"datesInUnknownTimezone"in t&&t.datesInUnknownTimezone}}}}(S,t,m);const q=o?.opacity,E=await x({numColors:m.length,basemap:t.basemap,geometryType:b,typeScheme:t.typeScheme,worldScale:!!t.symbolType?.includes("3d-volumetric"),view:t.view}),I=E.scheme,D=I.colors.map((e=>e.clone())),_=(0,h.N6)(I,b),k=(0,h.qc)(I,b,q);m.forEach(((e,o)=>{S.value=e.value,e.label=(0,d.createUniqueValueLabel)(S),e.symbol=(0,h.v5)(b,{type:t.symbolType,color:D[o],size:_,outline:k,meshInfo:{colorMixMode:t.colorMixMode,edgesType:t.edgesType}})})),t.valueExpression&&(z.valueExpression=t.valueExpression,z.valueExpressionTitle=t.valueExpressionTitle),t.legendOptions&&(z.legendOptions=new c.A(t.legendOptions));for(let l=0;l<g;l++){const e=m[l];e&&z.addUniqueValueInfo({value:e.value,label:e.label,symbol:(0,h.v5)(b,{type:t.symbolType,color:D[l].clone(),size:_,outline:k,meshInfo:{colorMixMode:t.colorMixMode,edgesType:t.edgesType}})})}t.defaultSymbolEnabled&&(z.defaultSymbol=(0,h.v5)(b,{type:t.symbolType,color:I.noDataColor,size:_,outline:k,meshInfo:{colorMixMode:t.colorMixMode,edgesType:t.edgesType}}),z.defaultLabel=i.other);for(const l of M)l.symbol=(0,h.v5)(b,{type:t.symbolType,color:I.noDataColor,size:_,outline:k,meshInfo:{colorMixMode:t.colorMixMode,edgesType:t.edgesType}}),m.push(l);const O=[],R=z.uniqueValueInfos?.length??0,A=R===m.length?-1:R;if(A>-1)for(let l=A;l<m.length;l++)O.push({...m[l]});return o?.visualVariables?.length&&(z.visualVariables=o.visualVariables.map((e=>e.clone()))),n?.minSize&&(z.visualVariables?z.visualVariables.push(n.minSize):z.visualVariables=[n.minSize]),{renderer:z,uniqueValueInfos:m,excludedUniqueValueInfos:O,typeScheme:(0,T.cloneScheme)(I),basemapId:E.basemapId,basemapTheme:E.basemapTheme}}async function I(e,t){const o=e.uniqueValueInfos,i=await x({numColors:o.length,basemap:"gray",theme:"point-cloud-class",geometryType:"point",typeScheme:t}),a=i?.scheme,l="point-cloud-class"===a?.theme,r=l?a.colors:(0,n.Iy)(a?.colors??[],o.length);return V(o,"value"),o.map(((e,t)=>{const o=e.value;let n=null;return l?(n=r[o],n||(n=r[r.length-1])):n=r[t],new p.A({values:[o],color:n,label:e.label})}))}async function D(e){const t=await z(e),{layer:o,view:n,signal:i,filter:a}=t,l={layer:o,field:t.field,field2:t.field2,field3:t.field3,valueExpression:t.valueExpression,returnAllCodedValues:t.returnAllCodedValues,view:n,filter:a,signal:i},[r,s,u]=await Promise.all([null!=t.statistics?t.statistics:(0,w.default)(l),t.outlineOptimizationEnabled?(0,m.A)({layer:o,view:n,signal:i,filter:a}).catch(h.ou):null,t.sizeOptimizationEnabled?(0,y.default)({layer:o,view:n,signal:i,filter:a}).catch(h.ou):null]);return E(r,t,s,u)}async function _(e){const{creatorParameters:t,view:o,signal:n,filter:a,renderer:l}=await async function(e){const t="regenerate-type-renderer";await(0,f.AC)(e,t);const o=await(0,f.mE)(e),n=(0,f.UJ)(o);if(!n||!["type","type-size"].includes(n))throw new i.default(`${t}:invalid-parameters`,"Renderer is invalid");const{field:a,field2:l,field3:r,valueExpression:s,valueExpressionTitle:u}=o,c=o.uniqueValueInfos.length,{layer:d,forBinning:p,filter:m,view:y,signal:h}=e,w=(0,f.DW)(o),g=(0,f.Rv)(o),v=await z({layer:d,field:a,field2:l,field3:r,valueExpression:s,valueExpressionTitle:u,numTypes:c,outlineOptimizationEnabled:w,sizeOptimizationEnabled:g,forBinning:p,filter:m,view:y,signal:h});return{...e,creatorParameters:v,renderer:o}}(e),{layer:r,outlineOptimizationEnabled:s,sizeOptimizationEnabled:u}=t,[c,d]=await Promise.all([s?(0,m.A)({layer:r,view:o,signal:n,filter:a}).catch(h.ou):null,u?(0,y.default)({layer:r,view:o,signal:n,filter:a}).catch(h.ou):null]);return(0,f.ke)(l,c?.visualVariables,f._i),(0,f.ke)(l,d?.minSize,f.kc),{renderer:l}}async function k(e){const t=await async function(e){if(!e?.layer||!e.field)throw new i.default("type-point-cloud-class-renderer:missing-parameters","'layer' and 'field' parameters are required");const t={...e,layer:e.layer};t.statistics=(0,a.clone)(t.statistics);const o=[b.mb.PointCloudLayer],n=(0,b.Jg)(t.layer,o);if(!n)throw new i.default("type-point-cloud-class-renderer:invalid-parameters","'layer' must be one of these types: "+(0,b.Ho)(o).join(", "));if(t.layer=n,t.density=t.density||25,t.size=t.size||"100%",!(0,h.Km)(t.size))throw new i.default("type-point-cloud-class-renderer:invalid-parameters","Invalid 'size' parameter. It should be a string of the form '100%'");const l=null!=t.signal?{signal:t.signal}:null;await n.load(l);const r=await(0,v.EG)({field:t.field}),s=(0,h.MH)(n,r,"type-point-cloud-class-renderer:invalid-parameters");if(s)throw s;return t}(e),o=null!=t.statistics?t.statistics:await(0,w.default)({layer:t.layer,field:t.field,signal:t.signal});return{renderer:new s.default({field:t.field,pointsPerInch:t.density??void 0,pointSizeAlgorithm:(0,h.rm)(t.size),colorUniqueValueInfos:await I(o,t.typeScheme)})}}},34623:(e,t,o)=>{o.d(t,{A:()=>p});var n,i=o(93800),a=o(88102),l=o(19455),r=o(82301),s=o(48602),u=o(80556),c=o(75269);let d=n=class extends l.A{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new n({description:this.description,label:this.label,values:(0,r.clone)(this.values),color:(0,r.clone)(this.color)})}};(0,i._)([(0,s.MZ)({type:String,json:{write:!0}})],d.prototype,"description",void 0),(0,i._)([(0,s.MZ)({type:String,json:{write:!0}})],d.prototype,"label",void 0),(0,i._)([(0,s.MZ)({type:[String],json:{write:{isRequired:!0}}})],d.prototype,"values",void 0),(0,i._)([(0,s.MZ)({type:a.default,json:{type:[u.jz],write:{isRequired:!0}}})],d.prototype,"color",void 0),d=n=(0,i._)([(0,c.$)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],d);const p=d},64320:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var n,i=o(93800),a=o(82301),l=o(48602),r=(o(21265),o(50925),o(47332)),s=o(75269),u=o(73529),c=o(37382),d=o(34623);let p=n=class extends u.default{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new n({...this.cloneProperties(),field:(0,a.clone)(this.field),fieldTransformType:(0,a.clone)(this.fieldTransformType),colorUniqueValueInfos:(0,a.clone)(this.colorUniqueValueInfos),legendOptions:(0,a.clone)(this.legendOptions)})}};(0,i._)([(0,r.e)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],p.prototype,"type",void 0),(0,i._)([(0,l.MZ)({json:{write:{isRequired:!0}},type:String})],p.prototype,"field",void 0),(0,i._)([(0,l.MZ)({type:u.default.fieldTransformTypeKebabDict.apiValues,json:{type:u.default.fieldTransformTypeKebabDict.jsonValues,read:u.default.fieldTransformTypeKebabDict.read,write:u.default.fieldTransformTypeKebabDict.write}})],p.prototype,"fieldTransformType",void 0),(0,i._)([(0,l.MZ)({type:[d.A],json:{write:{isRequired:!0}}})],p.prototype,"colorUniqueValueInfos",void 0),(0,i._)([(0,l.MZ)({type:c.A,json:{write:!0}})],p.prototype,"legendOptions",void 0),p=n=(0,i._)([(0,s.$)("esri.renderers.PointCloudUniqueValueRenderer")],p);const m=p},69086:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});var n=o(74719),i=o(70934),a=o(85151),l=o(79538),r=o(2938);async function s(e){const{layerAdapter:t,...o}=await async function(e){if(!e?.layer||!e.field&&!e.valueExpression)throw new n.default("unique-values:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");const t=e.valueExpression||e.sqlExpression,o=t&&!e.sqlExpression;if(t)if(o){if(!e.view)throw new n.default("unique-values:missing-parameters","View is required when 'valueExpression' is specified")}else if(!e.valueExpression)throw new n.default("unique-values:missing-parameters","'valueExpression' parameters are required");e.forBinning&&(0,a.p)(e,"unique-values");const{layer:s,...u}=e,c=e.forBinning?r.Mi:r.G3,d=(0,r.Jg)(s,c,e.forBinning);if(!d)throw new n.default("unique-values:invalid-parameters","'layer' must be one of these types: "+(0,r.Ho)(c).join(", "));const p={layerAdapter:d,...u},m=null!=p.signal?{signal:p.signal}:null;await d.load(m);const y=await(0,l.EG)({field:p.field,field2:p.field2,field3:p.field3,valueExpression:p.valueExpression}),f=(0,i.MH)(d,y,"unique-values:invalid-parameters");if(f)throw f;p.filter&&!p.filter.spatialRelationship&&(p.filter.spatialRelationship="intersects");const h=(0,i.Wk)(p.filter,"summary-statistics:invalid-parameters");if(h)throw h;return p}(e);return t.uniqueValues(o)}},73529:(e,t,o)=>{o.r(t),o.d(t,{default:()=>T});var n,i=o(93800),a=o(42761),l=o(19455),r=o(82301),s=o(48602),u=(o(21265),o(50925),o(75269));o(14746);let c=n=class extends l.A{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new n({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,i._)([(0,s.MZ)({type:String,json:{write:{isRequired:!0}}})],c.prototype,"field",void 0),(0,i._)([(0,s.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],c.prototype,"minValue",void 0),(0,i._)([(0,s.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],c.prototype,"maxValue",void 0),c=n=(0,i._)([(0,u.$)("esri.renderers.support.pointCloud.ColorModulation")],c);const d=c;var p,m=o(54542),y=o(47332);let f=p=class extends m.A{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new p({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,i._)([(0,y.e)({pointCloudFixedSizeAlgorithm:"fixed-size"})],f.prototype,"type",void 0),(0,i._)([(0,s.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],f.prototype,"size",void 0),(0,i._)([(0,s.MZ)({type:Boolean,json:{write:!0}})],f.prototype,"useRealWorldSymbolSizes",void 0),f=p=(0,i._)([(0,u.$)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],f);const h=f;var w=o(25902);const g={key:"type",base:m.A,typeMap:{"fixed-size":h,splat:w.A}},v=(0,a.O)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let b=class extends l.A{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,r.clone)(this.pointSizeAlgorithm),colorModulation:(0,r.clone)(this.colorModulation),pointsPerInch:(0,r.clone)(this.pointsPerInch)}}};(0,i._)([(0,s.MZ)({type:v.apiValues,readOnly:!0,nonNullable:!0,json:{type:v.jsonValues,read:!1,write:{writer:v.write,isRequired:!0}}})],b.prototype,"type",void 0),(0,i._)([(0,s.MZ)({types:g,json:{write:!0}})],b.prototype,"pointSizeAlgorithm",void 0),(0,i._)([(0,s.MZ)({type:d,json:{write:!0}})],b.prototype,"colorModulation",void 0),(0,i._)([(0,s.MZ)({json:{write:!0},nonNullable:!0,type:Number})],b.prototype,"pointsPerInch",void 0),b=(0,i._)([(0,u.$)("esri.renderers.PointCloudRenderer")],b),(b||(b={})).fieldTransformTypeKebabDict=new a.J({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const T=b},96169:(e,t,o)=>{o.r(t),o.d(t,{cloneScheme:()=>T,getSchemeByName:()=>v,getSchemes:()=>g,getSchemesByTag:()=>b,getThemes:()=>w});var n=o(88102),i=o(62631),a=o(2925),l=o(43073),r=o(28245),s=o(42648);const u={light:{color:[153,153,153,.25],width:"1px"},dark:{color:[153,153,153,.25],width:"1px"},darker:{color:[26,26,26,.25],width:"1px"}},c=["tropical-bliss","desert-blooms","under-the-sea","vibrant-rainbow","ocean-bay","prairie-summer","pastel-chalk"],d=["predominant-v1","predominant-v2","predominant-v3","predominant-v4","predominant-v5","predominance-race","predominance-money","predominance-race-ethnic","predominance-rainbow","predominance-sequence"],p=["cat-symbols-strong","cat-symbols-autumnal","cat-symbols-bright","cat-symbols-midrange","cat-symbols-subdued","cat-symbols-pastel","cat-symbols-red","cat-symbols-blue","cat-symbols-green","cat-symbols-gray"],m=["cat-popup-olympic-sunset"],y="#aaaaaa",f="12px",h=(0,r.bG)({themeDictionary:{default:{name:"default",label:"Default",description:"Default theme for visualizing features by their type.",schemes:{point:{light:{common:{noDataColor:y,outline:u.light,size:"8px"},primary:"cat-dark",secondary:["cat-light"].concat(p).concat(c).concat(d).concat(m)},dark:{common:{noDataColor:y,outline:u.darker,size:"8px"},primary:"cat-light",secondary:["cat-dark"].concat(p).concat(c).concat(d).concat(m)}},polyline:{light:{common:{noDataColor:y,width:"2px"},primary:"cat-dark",secondary:["cat-light"].concat(p).concat(c).concat(d).concat(m)},dark:{common:{noDataColor:y,width:"2px"},primary:"cat-light",secondary:["cat-dark"].concat(p).concat(c).concat(d).concat(m)}},polygon:{light:{common:{noDataColor:y,outline:u.light,fillOpacity:.8},primary:"cat-dark",secondary:["cat-light"].concat(p).concat(c).concat(d).concat(m)},dark:{common:{noDataColor:y,outline:u.dark,fillOpacity:.8},primary:"cat-light",secondary:["cat-dark"].concat(p).concat(c).concat(d).concat(m)}}}},"point-cloud-class":{name:"point-cloud-class",label:"Point Cloud Class",description:"Default theme for visualizing point cloud data based on classification.",schemes:{point:{light:{primary:"point-cloud-class-scheme",secondary:[]},dark:{primary:"point-cloud-class-scheme",secondary:[]}}}}}});function w(e){return(0,r.vt)(h,e)}function g(e){const t=e.theme||"default",o=(0,r.Fq)({basemap:e.basemap,geometryType:e.geometryType,basemapTheme:e.basemapTheme,theme:h.get(t)});if(!o)return;const{schemesInfo:n,basemapId:a,basemapTheme:l}=o,s=n.common;return{primaryScheme:z(e,n.primary,s),secondarySchemes:n.secondary.map((t=>z(e,t,s))).filter(i.Ru),basemapId:a,basemapTheme:l}}function v(e){return(0,r.Ty)(e.name,g(e))}function b(e){return(0,r.YJ)(e.includedTags,e.excludedTags,g(e))}function T(e){if(!e)return;const t={...e};return t.colors=t.colors.map((e=>new n.default(e))),t.tags=[...t.tags],"noDataColor"in t&&t.noDataColor&&(t.noDataColor=new n.default(t.noDataColor)),"outline"in t&&t.outline&&(t.outline={color:t.outline.color&&new n.default(t.outline.color),width:t.outline.width}),t}function z(e,t,o){const{numColors:i}=e,r=e.theme||"default",u=l.A[t];if(!u)return;const c=i?u[i]??(0,a.Iy)(u.stops,i):u.stops,d="mesh"!==e.geometryType&&e.worldScale?e.view:null;switch(e.geometryType){case"point":case"multipoint":{if("point-cloud-class"===r)return function(e){return{name:e.name,tags:[...e.tags],theme:e.theme,colors:e.colors.map((e=>new n.default(e)))}}({theme:r,name:u.name,tags:u.tags,colors:c});const e=o;return function(e,t){return{name:e.name,tags:[...e.tags],theme:e.theme,colors:e.colors.map((e=>new n.default(e))),noDataColor:new n.default(e.noDataColor),outline:{color:new n.default(e.outline.color),width:e.outline.width},size:t?(0,s._J)(e.size,t):e.size,opacity:e.opacity}}({name:u.name,tags:u.tags,theme:r,colors:c,noDataColor:e.noDataColor,opacity:1,outline:e.outline,size:e.size},d)}case"polyline":{const e=o;return function(e,t){return{name:e.name,tags:[...e.tags],theme:e.theme,colors:e.colors.map((e=>new n.default(e))),noDataColor:new n.default(e.noDataColor),width:t?(0,s._J)(e.width,t):e.width,opacity:e.opacity}}({name:u.name,tags:u.tags,theme:r,colors:c,noDataColor:e.noDataColor,opacity:1,width:e.width},d)}case"polygon":{const e=o;return function(e,t){return{name:e.name,tags:[...e.tags],theme:e.theme,colors:e.colors.map((e=>new n.default(e))),noDataColor:new n.default(e.noDataColor),outline:{color:new n.default(e.outline.color),width:e.outline.width},opacity:e.opacity,size:t?(0,s._J)(e.size,t):e.size}}({name:u.name,tags:u.tags,theme:r,colors:c,noDataColor:e.noDataColor,opacity:e.fillOpacity||1,outline:e.outline,size:f},d)}case"mesh":{const e=o;return function(e){return{name:e.name,tags:[...e.tags],theme:e.theme,colors:e.colors.map((e=>new n.default(e))),noDataColor:new n.default(e.noDataColor),opacity:e.opacity}}({name:u.name,tags:u.tags,theme:r,colors:c,noDataColor:e.noDataColor,opacity:e.fillOpacity||1})}default:return}}}}]);