"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[85439],{73529:(e,i,a)=>{a.r(i),a.d(i,{default:()=>T});var l,o=a(93800),n=a(42761),r=a(19455),t=a(82301),s=a(48602),d=(a(21265),a(50925),a(75269));a(14746);let u=l=class extends r.A{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new l({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,o._)([(0,s.MZ)({type:String,json:{write:{isRequired:!0}}})],u.prototype,"field",void 0),(0,o._)([(0,s.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],u.prototype,"minValue",void 0),(0,o._)([(0,s.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],u.prototype,"maxValue",void 0),u=l=(0,o._)([(0,d.$)("esri.renderers.support.pointCloud.ColorModulation")],u);const c=u;var m,p=a(54542),f=a(47332);let y=m=class extends p.A{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new m({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,o._)([(0,f.e)({pointCloudFixedSizeAlgorithm:"fixed-size"})],y.prototype,"type",void 0),(0,o._)([(0,s.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],y.prototype,"size",void 0),(0,o._)([(0,s.MZ)({type:Boolean,json:{write:!0}})],y.prototype,"useRealWorldSymbolSizes",void 0),y=m=(0,o._)([(0,d.$)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],y);const h=y;var v=a(25902);const w={key:"type",base:p.A,typeMap:{"fixed-size":h,splat:v.A}},b=(0,n.O)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let g=class extends r.A{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,t.clone)(this.pointSizeAlgorithm),colorModulation:(0,t.clone)(this.colorModulation),pointsPerInch:(0,t.clone)(this.pointsPerInch)}}};(0,o._)([(0,s.MZ)({type:b.apiValues,readOnly:!0,nonNullable:!0,json:{type:b.jsonValues,read:!1,write:{writer:b.write,isRequired:!0}}})],g.prototype,"type",void 0),(0,o._)([(0,s.MZ)({types:w,json:{write:!0}})],g.prototype,"pointSizeAlgorithm",void 0),(0,o._)([(0,s.MZ)({type:c,json:{write:!0}})],g.prototype,"colorModulation",void 0),(0,o._)([(0,s.MZ)({json:{write:!0},nonNullable:!0,type:Number})],g.prototype,"pointsPerInch",void 0),g=(0,o._)([(0,d.$)("esri.renderers.PointCloudRenderer")],g),(g||(g={})).fieldTransformTypeKebabDict=new n.J({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const T=g},80459:(e,i,a)=>{a.r(i),a.d(i,{default:()=>c});var l,o=a(93800),n=a(82301),r=a(48602),t=(a(21265),a(50925),a(47332)),s=a(75269),d=a(73529);let u=l=class extends d.default{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new l({...this.cloneProperties(),field:(0,n.clone)(this.field)})}};(0,o._)([(0,t.e)({pointCloudRGBRenderer:"point-cloud-rgb"})],u.prototype,"type",void 0),(0,o._)([(0,r.MZ)({type:String,json:{write:{isRequired:!0}}})],u.prototype,"field",void 0),u=l=(0,o._)([(0,s.$)("esri.renderers.PointCloudRGBRenderer")],u);const c=u},85439:(e,i,a)=>{a.r(i),a.d(i,{createAgeRenderer:()=>G,createClassBreaksRenderer:()=>N,createContinuousRenderer:()=>J,createPCContinuousRenderer:()=>W,createPCTrueColorRenderer:()=>H,createVisualVariable:()=>j,regenerateAgeRenderer:()=>L,regenerateClassBreaksRenderer:()=>$,regenerateContinuousRenderer:()=>Z,regenerateVisualVariable:()=>U});var l=a(2925),o=a(74719),n=a(82301),r=a(80556),t=a(53957),s=a(99325),d=a(80459),u=a(94265),c=a(45023),m=a(84267),p=a(88171),f=a(80023),y=a(88311),h=a(77225),v=a(57488),w=a(70183),b=a(66787),g=a(40663),T=a(39569),z=a(17675),x=a(85151),E=a(79538),V=a(2938),S=a(72410);const M="high-to-low",I=2**53-1,k=5;async function C(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new o.default("color-visual-variable:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.sqlExpression&&!e.view)throw new o.default("color-visual-variable:missing-parameters","View is required when 'valueExpression' is specified");e.forBinning&&(0,x.p)(e,"color-visual-variable");const i={...e},a=e.forBinning?V.Mi:V.J4,l=(0,V.Jg)(i.layer,a,e.forBinning);if(!l)throw new o.default("color-visual-variable:invalid-parameters","'layer' must be one of these types: "+(0,V.Ho)(a).join(", "));const n=null!=i.signal?{signal:i.signal}:null;if(await l.load(n),"mesh"!==l.geometryType&&i.worldScale&&(!i.view||"3d"!==i.view.type))throw new o.default("color-visual-variable:invalid-parameters","'view' parameter should be an instance of SceneView when 'worldScale' parameter is true");const r=await(0,E.EG)({field:i.field,normalizationField:i.normalizationField,valueExpression:i.valueExpression}),t=(0,T.MH)(l,r,"color-visual-variable:invalid-parameters");if(t)throw t;return{...i,layer:l}}async function R(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new o.default("color-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.sqlExpression&&!e.view)throw new o.default("color-continuous-renderer:missing-parameters","View is required when 'valueExpression' is specified");e.forBinning&&(0,x.p)(e,"color-continuous-renderer");const i={...e};i.symbolType=i.symbolType||"2d",i.defaultSymbolEnabled??=!0;const a=e.forBinning?V.Mi:V.J4,l=(0,V.Jg)(i.layer,a,e.forBinning);if(!l)throw new o.default("color-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+(0,V.Ho)(a).join(", "));const n=null!=i.signal?{signal:i.signal}:null;await l.load(n);const r=l.geometryType;if(i.outlineOptimizationEnabled="polygon"===r&&i.outlineOptimizationEnabled,i.sizeOptimizationEnabled=("point"===r||"multipoint"===r||"polyline"===r)&&i.sizeOptimizationEnabled,"mesh"===r)i.symbolType="3d-volumetric",i.colorMixMode=i.colorMixMode||"replace",i.edgesType=i.edgesType||"none";else{if("3d-volumetric-uniform"===i.symbolType&&"point"!==r)throw new o.default("color-continuous-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(i.symbolType.includes("3d-volumetric")&&(!i.view||"3d"!==i.view.type))throw new o.default("color-continuous-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'")}const t=await(0,E.EG)({field:i.field,normalizationField:i.normalizationField,valueExpression:i.valueExpression}),s=(0,T.MH)(l,t,"color-continuous-renderer:invalid-parameters");if(s)throw s;return{...i,layer:l}}async function B(e){if(!e||!e.layer||!e.field&&!e.valueExpression)throw new o.default("color-class-breaks-renderer:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(e.valueExpression&&!e.view)throw new o.default("color-class-breaks-renderer:missing-parameters","View is required when 'valueExpression' is specified");e.forBinning&&(0,x.p)(e,"color-class-breaks-renderer");const i={...e};i.symbolType=i.symbolType||"2d",i.defaultSymbolEnabled??=!0,i.classificationMethod??="equal-interval",i.normalizationType=(0,E.Wy)(i);const a=e.forBinning?V.Mi:V.J4,l=(0,V.Jg)(i.layer,a,e.forBinning);if(!l)throw new o.default("color-class-breaks-renderer:invalid-parameters","'layer' must be one of these types: "+(0,V.Ho)(a).join(", "));if((null==i.minValue||null==i.maxValue)&&(null!=i.minValue||null!=i.maxValue))throw new o.default("color-class-breaks-renderer:missing-parameters","Both 'minValue' and 'maxValue' are required when specifying custom data range");const n=null!=i.signal?{signal:i.signal}:null;await l.load(n);const r=l.geometryType;if(i.outlineOptimizationEnabled="polygon"===r&&i.outlineOptimizationEnabled,"mesh"===r)i.symbolType="3d-volumetric",i.colorMixMode=i.colorMixMode||"replace",i.edgesType=i.edgesType||"none";else{if("3d-volumetric-uniform"===i.symbolType&&"point"!==r)throw new o.default("color-class-breaks-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(i.symbolType.includes("3d-volumetric")&&(!i.view||"3d"!==i.view.type))throw new o.default("color-class-breaks-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'")}const t=await(0,E.EG)({field:i.field,normalizationField:i.normalizationField}),s=(0,T.MH)(l,t,"color-class-breaks-renderer:invalid-parameters");if(s)throw s;return{...i,layer:l}}function O(e){const i={...e};delete i.basemap,delete i.colorScheme,delete i.legendOptions,delete i.symbolType,delete i.defaultSymbolEnabled,delete i.colorMixMode,delete i.edgesType;const a=i;return a.analyzeData=!(null!=i.minValue&&null!=i.maxValue),a}function q(e){const i={...e},a=!!i.symbolType?.includes("3d-volumetric");delete i.symbolType,delete i.defaultSymbolEnabled,delete i.colorMixMode,delete i.edgesType;const l=i;return l.worldScale=a,l}async function P(e){if(!(e&&e.layer&&e.view&&e.startTime&&e.endTime))throw new o.default("color-age-renderer:missing-parameters","'layer', 'view', startTime', 'endTime' parameters are required");const i={...e};i.symbolType=i.symbolType||"2d",i.defaultSymbolEnabled??=!0;const a=(0,V.Jg)(i.layer,V.J4);if(!a)throw new o.default("color-age-renderer:invalid-parameters","'layer' must be one of these types: "+(0,V.Ho)(V.J4).join(", "));const l=null!=i.signal?{signal:i.signal}:null;await a.load(l);const n=a.geometryType;if(i.outlineOptimizationEnabled="polygon"===n&&i.outlineOptimizationEnabled,i.sizeOptimizationEnabled=("point"===n||"multipoint"===n||"polyline"===n)&&i.sizeOptimizationEnabled,"mesh"===n)i.symbolType="3d-volumetric",i.colorMixMode=i.colorMixMode||"replace",i.edgesType=i.edgesType||"none";else if("3d-volumetric-uniform"===i.symbolType&&"point"!==n)throw new o.default("color-continuous-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(i.symbolType.includes("3d-volumetric")&&(!i.view||"3d"!==i.view.type))throw new o.default("color-age-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'");const r=(0,z.verifyDates)(a,i.startTime,i.endTime,"color-age-renderer:invalid-parameters");if(r)throw r;if(i.unit&&!z.supportedAgeUnits.includes(i.unit))throw new o.default("color-age-renderer:invalid-unit",`Supported units are: ${z.supportedAgeUnits.join(", ")}`);return{...i,layer:a}}async function F(e,i){let a=e.colorScheme,l=null,o=null;const{view:n}=e,r=await(0,T.Ib)(e.basemap,n);if(l=null!=r.basemapId?r.basemapId:null,o=null!=r.basemapTheme?r.basemapTheme:null,a)return{scheme:(0,S.cloneScheme)(a),basemapId:l,basemapTheme:o};const t=e.theme||M,s=(0,S.getSchemes)({theme:t,basemapTheme:o,geometryType:e.geometryType,worldScale:e.worldScale,view:n});if(s)if(l=s.basemapId,o=s.basemapTheme,e.schemeId){const i=t+"/"+l+"/"+e.schemeId;a=(0,S.getSchemeById)({id:i,geometryType:e.geometryType})}else a=s.primaryScheme;return{scheme:a,basemapId:l,basemapTheme:o}}function A(e,i,a,l){const o=(0,T.Gc)(e,i,a,!0);return{values:(0,T.TQ)(o,e,i,l),defaultValuesUsed:o.defaultValuesUsed}}async function _(e,i,a,l,o,n,r){const d=await(0,t.ud)("esri/smartMapping/t9n/smartMapping"),{field:u,defaultSymbolEnabled:c}=r,m=(0,S.cloneScheme)(e.colorScheme),p=i?.opacity,f=[e.visualVariable.clone()];return i?.visualVariables?.length&&f.push(...i.visualVariables.map((e=>e.clone()))),a?.minSize&&f.push(a.minSize),{renderer:new s.default({classBreakInfos:[{minValue:-9007199254740991,maxValue:I,symbol:(0,T.v5)(n,{type:r.symbolType,color:m.noDataColor,size:(0,T.N6)(m,n),outline:(0,T.qc)(m,n,p),meshInfo:{colorMixMode:r.colorMixMode,edgesType:r.edgesType}})}],defaultLabel:c?d.other:null,defaultSymbol:c?(0,T.v5)(n,{type:r.symbolType,color:m.noDataColor,size:(0,T.N6)(m,n),outline:(0,T.qc)(m,n,p),meshInfo:{colorMixMode:r.colorMixMode,edgesType:r.edgesType}}):null,field:u,normalizationType:l,normalizationField:o,valueExpression:r.valueExpression,valueExpressionTitle:r.valueExpressionTitle,visualVariables:f,authoringInfo:e.authoringInfo&&e.authoringInfo.clone()}),visualVariable:e.visualVariable.clone(),statistics:e.statistics,defaultValuesUsed:e.defaultValuesUsed,colorScheme:(0,S.cloneScheme)(e.colorScheme),basemapId:e.basemapId,basemapTheme:e.basemapTheme}}async function j(e){const i=await C(e),{view:a,field:n,valueExpression:t,minValue:s,maxValue:d,layer:u,normalizationField:p,signal:v,filter:w,statistics:b}=i,g=p?"field":void 0,z=await(b??(0,T.g2)({layer:u,field:n,valueExpression:t,sqlExpression:i.sqlExpression,sqlWhere:i.sqlWhere,normalizationType:g,normalizationField:p,minValue:s,maxValue:d,filter:w,view:a,signal:v})),x=u,V=n&&"function"!=typeof n?x.getField(n):null;return async function(e,i,a,n){const{field:t,theme:s}=e,d=await F({basemap:e.basemap,theme:e.theme,geometryType:a,colorScheme:e.colorScheme,worldScale:e.worldScale,view:e.view}),u=d.scheme;if(!u)throw new o.default("color-visual-variable:insufficient-info","Unable to find color scheme");const p=(0,l.Iy)(u.colors,k);if(p.length<k)throw new o.default("color-visual-variable:insufficient-info","Color scheme does not have enough colors");const v=u.id.includes("seq-"),{values:w,defaultValuesUsed:b}=A(i,s,n,v),g=(0,l.Iy)(p,k),T=new f.default({field:t??void 0,valueExpression:e.valueExpression,valueExpressionTitle:e.valueExpressionTitle,normalizationField:e.normalizationField,stops:w.map(((e,i)=>new y.default({value:e,color:g[i]}))),legendOptions:(0,r.PZ)(h.A,e.legendOptions)}),z=new m.default({type:"color",minSliderValue:null!=e.minValue?e.minValue:i.min,maxSliderValue:null!=e.maxValue?e.maxValue:i.max,theme:u.theme}),x=new c.default({visualVariables:[z]});return{basemapId:d.basemapId,basemapTheme:d.basemapTheme,visualVariable:T,statistics:i,defaultValuesUsed:b,colorScheme:(0,S.cloneScheme)(u),authoringInfo:x}}(i,z,x.geometryType,(0,E.fs)(V))}async function U(e){const{view:i,filter:a,creatorParameters:l,renderer:n,signal:r}=await async function(e){const i="regenerate-color-visual-variable";await(0,g.AC)(e,i);const a=await(0,g.mE)(e);if("class-breaks"!==a?.type)throw new o.default(`${i}:invalid-parameters`,"Renderer must be a ClassBreaksRenderer to regenerate a color visual variable");const l=a.authoringInfo,n=l?.visualVariables.find((e=>"color"===e.type)),r=a.visualVariables?.find((e=>"color"===e.type));if(!r)throw new o.default(`${i}:invalid-parameters`,"Renderer does not have a color visual variable");const{field:t,normalizationField:s,valueExpression:d,valueExpressionTitle:u}=r,c="univariate-color-size"===l?.type?l?.univariateTheme:n?.theme,{layer:m,forBinning:p,filter:f,view:y,signal:h}=e,v=await C({layer:m,field:t,valueExpression:d,valueExpressionTitle:u,normalizationField:s,theme:c,forBinning:p,filter:f,view:y,signal:h});return{...e,creatorParameters:v,renderer:a}}(e),t=n.authoringInfo?.clone(),s=t?.visualVariables.find((e=>"color"===e.type)),d=n.visualVariables?.find((e=>"color"===e.type)),{field:u,normalizationField:c,valueExpression:m,theme:p,layer:f}=l,y=await(0,T.g2)({layer:f,field:u,valueExpression:m,normalizationField:c,filter:a,view:i,signal:r}),h=u&&"function"!=typeof u?f.getField(u):null,{values:v}=A(y,p,(0,E.fs)(h),"high-to-low"===p);if(v.length!==d.stops.length)throw new o.default("regenerate-color-visual-variable:invalid-parameters","Visual variable is invalid");return d.stops.forEach(((e,i)=>e.value=v[i])),s&&(s.minSliderValue=y.min,s.maxSliderValue=y.max),{visualVariable:d,authoringInfo:t,statistics:y}}async function D(e,i){const a=await(0,t.ud)("esri/smartMapping/t9n/smartMapping"),r=e.layer,d=e.defaultSymbolEnabled,u=r.geometryType,m=e.classificationMethod,f="standard-deviation"===m,y=await F({basemap:e.basemap,geometryType:u,theme:f?"above-and-below":null,colorScheme:e.colorScheme,worldScale:!!e.symbolType?.includes("3d-volumetric"),view:e.view}),h=y.scheme,{result:v,outlineResult:w}=i,b=v.classBreakInfos,g=e.normalizationType;if(!h)throw new o.default("color-class-breaks-renderer:insufficient-info","Unable to find color scheme");const z=function(e,i){const a=e.colorsForClassBreaks;if(a?.length)for(const l of a)if(l.numClasses===i)return(0,n.clone)(l.colors);return(0,l.Iy)(e.colors,i)}(h,b.length);if(!z||z.length!==b.length)throw new o.default("color-class-breaks-renderer:insufficient-info","Color scheme does not have enough colors");const x=w?.opacity,E=new s.default({classBreakInfos:b.map(((i,a)=>({minValue:i.minValue,maxValue:i.maxValue,symbol:(0,T.v5)(u,{type:e.symbolType,color:z[a],size:(0,T.N6)(h,u),outline:(0,T.qc)(h,u,x),meshInfo:{colorMixMode:e.colorMixMode,edgesType:e.edgesType}}),label:i.label}))),defaultLabel:d?a.other:null,defaultSymbol:d?(0,T.v5)(u,{type:e.symbolType,color:h.noDataColor,size:(0,T.N6)(h,u),outline:(0,T.qc)(h,u,x),meshInfo:{colorMixMode:e.colorMixMode,edgesType:e.edgesType}}):null,field:e.field,valueExpression:e.valueExpression,valueExpressionTitle:e.valueExpressionTitle,normalizationType:g,normalizationField:e.normalizationField,normalizationTotal:"percent-of-total"===g?v.normalizationTotal:void 0,legendOptions:e.legendOptions,authoringInfo:new c.default({type:"class-breaks-color",classificationMethod:m,standardDeviationInterval:e.standardDeviationInterval})});return f||(0,p.setLabelsForClassBreaks)({classBreakInfos:E.classBreakInfos,classificationMethod:m,normalizationType:g,round:!0}),w?.visualVariables?.length&&(E.visualVariables=w.visualVariables.map((e=>e.clone()))),{renderer:E,colorScheme:(0,S.cloneScheme)(h),classBreaksResult:v,defaultValuesUsed:i.defaultValuesUsed,basemapId:y.basemapId,basemapTheme:y.basemapTheme}}async function J(e){const i=await R(e),{layer:a,view:l,signal:o,filter:n}=i,[r,t,s]=await Promise.all([j(q(i)),i.outlineOptimizationEnabled?(0,w.A)({layer:a,view:l,signal:o,filter:n}).catch(T.ou):null,i.sizeOptimizationEnabled?(0,b.default)({layer:a,view:l,signal:o,filter:n}).catch(T.ou):null]),d=i.normalizationField;return _(r,t,s,d?"field":void 0,d,a.geometryType,i)}async function Z(e){const{renderer:i,view:a,signal:l,filter:n,creatorParameters:r}=await async function(e){const i="regenerate-color-continuous-renderer";await(0,g.AC)(e,i);const a=await(0,g.mE)(e),l=(0,g.UJ)(a);if(!l||!["color-continuous","color-size"].includes(l))throw new o.default(`${i}:invalid-renderer`,"Renderer is invalid");const{authoringInfo:n,field:r,normalizationField:t,valueExpression:s,valueExpressionTitle:d}=a,u=n?.visualVariables.find((e=>"color"===e.type)),c=u?.theme,{layer:m,forBinning:p,filter:f,view:y,signal:h}=e,v=(0,g.DW)(a),w=(0,g.Rv)(a),b=await R({layer:m,field:r,valueExpression:s,valueExpressionTitle:d,normalizationField:t,theme:c,outlineOptimizationEnabled:v,sizeOptimizationEnabled:w,forBinning:p,filter:f,view:y,signal:h});return{...e,creatorParameters:b,renderer:a}}(e),{layer:t,outlineOptimizationEnabled:s,sizeOptimizationEnabled:d}=r,[u,c,m]=await Promise.all([U(e),s?(0,w.A)({layer:t,view:a,signal:l,filter:n}).catch(T.ou):null,d?(0,b.default)({layer:t,view:a,signal:l,filter:n}).catch(T.ou):null]);return(0,g.ke)(i,u.visualVariable,g.fs),(0,g.ke)(i,c?.visualVariables,g._i),(0,g.ke)(i,m?.minSize,g.kc),(0,g.Hj)(i,u.authoringInfo,"color"),{renderer:i}}async function N(e){const i=await B(e);return D(i,await(0,T.Pv)(O(i),i.outlineOptimizationEnabled))}async function $(e){const{renderer:i,creatorParameters:a}=await async function(e){const i="regenerate-color-class-breaks-renderer";await(0,g.AC)(e,i);const a=await(0,g.mE)(e);if("color-class-breaks"!==(0,g.UJ)(a))throw new o.default(`${i}:invalid-parameters`,"Renderer is invalid");const{authoringInfo:l,field:n,normalizationField:r,normalizationType:t,normalizationTotal:s,valueExpression:d,valueExpressionTitle:u}=a,{classificationMethod:c,standardDeviationInterval:m}=l,p=a.classBreakInfos.length,{layer:f,forBinning:y,filter:h,view:v,signal:w}=e,b=(0,g.DW)(a),T=await B({layer:f,field:n,valueExpression:d,valueExpressionTitle:u,normalizationType:t,normalizationField:r,normalizationTotal:s,classificationMethod:c,standardDeviationInterval:m,numClasses:p,outlineOptimizationEnabled:b,forBinning:y,filter:h,view:v,signal:w});return{...e,creatorParameters:T,renderer:a}}(e),{normalizationType:l,outlineOptimizationEnabled:n,classificationMethod:r}=a,{result:t,outlineResult:s}=await(0,T.Pv)(O(a),n),d=t.classBreakInfos;if(a.numClasses!==d.length)throw new o.default("regenerate-color-class-breaks-renderer:insufficient-info","The number of class breaks generated does not match the number of class breaks in the renderer.");return i.classBreakInfos.forEach(((e,i)=>{e.minValue=d[i].minValue,e.maxValue=d[i].maxValue,e.label=d[i].label})),i.normalizationTotal="percent-of-total"===l?t.normalizationTotal:void 0,"standard-deviation"!==r&&(0,p.setLabelsForClassBreaks)({classBreakInfos:i.classBreakInfos,classificationMethod:r,normalizationType:l,round:!0}),(0,g.ke)(i,s?.visualVariables,g._i),{renderer:i}}function H(e){return async function(e){if(!e?.layer)throw new o.default("color-point-cloud-true-color-renderer:missing-parameters","'layer' parameter is required");const i={...e,layer:e.layer},a=[V.mb.PointCloudLayer],l=(0,V.Jg)(i.layer,a);if(!l)throw new o.default("color-point-cloud-true-color-renderer:invalid-parameters","'layer' must be one of these types: "+(0,V.Ho)(a).join(", "));if(i.layer=l,i.density=i.density||25,i.size=i.size||"100%",!(0,T.Km)(i.size))throw new o.default("color-point-cloud-true-color-renderer:invalid-parameters","Invalid 'size' parameter. It should be a string of the form '100%'");const n=null!=i.signal?{signal:i.signal}:null;return await l.load(n),i}(e).then((e=>({renderer:new d.default({field:"RGB",pointsPerInch:e.density??void 0,pointSizeAlgorithm:(0,T.rm)(e.size)})})))}async function W(e){const i=await async function(e){if(!e?.layer||!e.field)throw new o.default("color-point-cloud-continuous-renderer:missing-parameters","'layer' and 'field' parameters are required");const i=e.field.toLowerCase();if("intensity"!==i&&"elevation"!==i)throw new o.default("color-point-cloud-continuous-renderer:invalid-parameters","'field' should be either 'intensity' or 'elevation'");const a={...e,layer:e.layer,field:e.field},l=[V.mb.PointCloudLayer],n=(0,V.Jg)(a.layer,l);if(!n)throw new o.default("color-point-cloud-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+(0,V.Ho)(l).join(", "));if(a.layer=n,a.density=a.density||25,a.size=a.size||"100%",!(0,T.Km)(a.size))throw new o.default("color-point-cloud-continuous-renderer:invalid-parameters","Invalid 'size' parameter. It should be a string of the form '100%'");const r=null!=a.signal?{signal:a.signal}:null;return await n.load(r),a}(e),a=i.statistics??await(0,T.g2)({layer:i.layer,field:i.field,signal:i.signal}),n=await async function(e,i){const a=i.layer,n=await F({basemap:i.basemap,colorScheme:i.colorScheme,geometryType:a.geometryType,schemeId:"elevation"===i.field.toLowerCase()?"point-cloud-elevation-scheme":"point-cloud-intensity-scheme"}),r=n.scheme;if(!r)throw new o.default("color-point-cloud-continuous-renderer:insufficient-info","Unable to find color scheme");const t=(0,l.Iy)(r.colors,k);if(t.length<k)throw new o.default("color-point-cloud-continuous-renderer:insufficient-info","Color scheme does not have enough colors");const s=(0,T.N4)(e,!1,!0),d=s?(0,T.u8)(s[0],s[1],5):(0,T.BD)(e);return{stops:(0,p.createColorStops)({values:d,isDate:!1,colors:t,labelIndexes:[0,2,4]}),basemapId:n.basemapId,basemapTheme:n.basemapTheme,statistics:e,defaultValuesUsed:!!s,colorScheme:(0,S.cloneScheme)(r)}}(a,i);return{renderer:new u.default({field:i.field,pointsPerInch:i.density??void 0,pointSizeAlgorithm:(0,T.rm)(i.size),stops:n.stops}),basemapId:n.basemapId,basemapTheme:n.basemapTheme,statistics:n.statistics,defaultValuesUsed:n.defaultValuesUsed,colorScheme:n.colorScheme}}async function G(e){const i=await P(e),{defaultSymbolEnabled:a,view:l,startTime:o,endTime:n,symbolType:r,colorMixMode:t,edgesType:s,minValue:d,maxValue:u,signal:c,filter:m}=i,p=i.layer,[f,y,h]=await Promise.all([i.unit?{unit:i.unit,statistics:null}:(0,v.A)({view:l,layer:p,startTime:o,endTime:n,minValue:d,maxValue:u,signal:c,filter:m}),i.outlineOptimizationEnabled?(0,w.A)({layer:p,view:l,signal:c,filter:m}).catch(T.ou):null,i.sizeOptimizationEnabled?(0,b.default)({layer:p,view:l,signal:c,filter:m}).catch(T.ou):null]),{unit:g,statistics:z}=f,{valueExpression:x,title:E}=await(0,T.l7)(i,g),V=await j(q({layer:p,basemap:i.basemap,valueExpression:x,symbolType:r,statistics:z,legendOptions:{title:E},colorScheme:i.colorScheme,theme:i.theme,view:l,minValue:i.minValue,maxValue:i.maxValue,filter:m,signal:c})),S={layer:p,valueExpression:x,defaultSymbolEnabled:a,symbolType:r,colorMixMode:t,edgesType:s},M=await _(V,y,h,null,null,p.geometryType,S),I=M.renderer.authoringInfo?.visualVariables;return I?.forEach((e=>(0,T.f3)(e,o,n,g))),{...M,unit:g}}async function L(e){const{renderer:i,creatorParameters:a}=await async function(e){const i="regenerate-color-age-renderer";await(0,g.AC)(e,i);const a=await(0,g.mE)(e);if("color-age"!==(0,g.UJ)(a))throw new o.default(`${i}:invalid-parameters`,"Renderer is invalid");const{authoringInfo:l}=a,n=l?.visualVariables.find((e=>"color"===e.type)),r=n.startTime,t=n.endTime,s=n.units,d=n.theme,{layer:u,filter:c,view:m,signal:p}=e,f=(0,g.DW)(a),y=(0,g.Rv)(a),h=await P({layer:u,startTime:r,endTime:t,unit:s,theme:d,outlineOptimizationEnabled:f,sizeOptimizationEnabled:y,filter:c,view:m,signal:p});return{...e,creatorParameters:h,renderer:a}}(e),{layer:l,outlineOptimizationEnabled:n,sizeOptimizationEnabled:r,startTime:t,endTime:s,theme:d,view:u,signal:c,filter:m}=a,[p,f,y]=await Promise.all([(0,v.A)({view:u,layer:l,startTime:t,endTime:s,signal:c,filter:m}),n?(0,w.A)({layer:l,view:u,signal:c,filter:m}).catch(T.ou):null,r?(0,b.default)({layer:l,view:u,signal:c,filter:m}).catch(T.ou):null]),{unit:h,statistics:z}=p,{valueExpression:x,title:E}=await(0,T.l7)(a,h),V=await j(q({layer:l,valueExpression:x,statistics:z,legendOptions:{title:E},theme:d,view:u,filter:m,signal:c}));(0,g.ke)(i,V.visualVariable,g.fs),(0,g.ke)(i,f?.visualVariables,g._i),(0,g.ke)(i,y?.minSize,g.kc),i.authoringInfo=V.authoringInfo.clone();const S=i.authoringInfo?.visualVariables;return S?.forEach((e=>(0,T.f3)(e,t,s,h))),{renderer:i}}},94265:(e,i,a)=>{a.r(i),a.d(i,{default:()=>p});var l,o=a(93800),n=a(82301),r=a(48602),t=(a(21265),a(50925),a(47332)),s=a(75269),d=a(73529),u=a(37382),c=a(88311);let m=l=class extends d.default{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new l({...this.cloneProperties(),field:(0,n.clone)(this.field),fieldTransformType:(0,n.clone)(this.fieldTransformType),stops:(0,n.clone)(this.stops),legendOptions:(0,n.clone)(this.legendOptions)})}};(0,o._)([(0,t.e)({pointCloudStretchRenderer:"point-cloud-stretch"})],m.prototype,"type",void 0),(0,o._)([(0,r.MZ)({json:{write:{isRequired:!0}},type:String})],m.prototype,"field",void 0),(0,o._)([(0,r.MZ)({type:u.A,json:{write:!0}})],m.prototype,"legendOptions",void 0),(0,o._)([(0,r.MZ)({type:d.default.fieldTransformTypeKebabDict.apiValues,json:{type:d.default.fieldTransformTypeKebabDict.jsonValues,read:d.default.fieldTransformTypeKebabDict.read,write:d.default.fieldTransformTypeKebabDict.write}})],m.prototype,"fieldTransformType",void 0),(0,o._)([(0,r.MZ)({type:[c.default],json:{write:{isRequired:!0}}})],m.prototype,"stops",void 0),m=l=(0,o._)([(0,s.$)("esri.renderers.PointCloudStretchRenderer")],m);const p=m}}]);