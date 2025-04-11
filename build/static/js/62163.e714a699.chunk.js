"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[53342,62163],{53342:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var n,s=r(93800),i=r(89129),a=r(93633),l=r(59321),o=r(79953),u=r(48602),p=r(32980),c=(r(21265),r(14746),r(14800)),d=r(75269),y=r(80556),m=r(12560);let f=0,h=n=class extends(a.A.IdentifiableMixin(l.L)){constructor(e){super(e),this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.legendUrl=null,this.legendEnabled=!0,this.layer=null,this.maxScale=0,this.minScale=0,this.name=null,this.parent=null,this.popupEnabled=!1,this.queryable=!1,this.sublayers=null,this.spatialReferences=null,this.title=null,this.addHandles([(0,o.on)((()=>this.sublayers),"after-add",(e=>{let{item:t}=e;t.parent=this,t.layer=this.layer}),o.sync),(0,o.on)((()=>this.sublayers),"after-remove",(e=>{let{item:t}=e;t.layer=t.parent=null}),o.sync),(0,o.watch)((()=>this.sublayers),((e,t)=>{if(t)for(const r of t)r.layer=r.parent=null;if(e)for(const r of e)r.parent=this,r.layer=this.layer}),o.sync),(0,o.watch)((()=>this.layer),(e=>{if(this.sublayers)for(const t of this.sublayers)t.layer=e}),o.sync)])}get id(){return this._get("id")??f++}set id(e){this._set("id",e)}readLegendUrl(e,t){return t.legendUrl??t.legendURL??null}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}castSublayers(e){return(0,y.dp)(i.default.ofType(n),e)}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){const e=new n;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents?.map((e=>e.clone()))??null),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers?.map((e=>e.clone()))),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences?.map((e=>e))),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};(0,s._)([(0,u.MZ)()],h.prototype,"description",void 0),(0,s._)([(0,u.MZ)({readOnly:!0})],h.prototype,"dimensions",void 0),(0,s._)([(0,u.MZ)({type:m.default,json:{name:"extent"}})],h.prototype,"fullExtent",void 0),(0,s._)([(0,u.MZ)()],h.prototype,"fullExtents",void 0),(0,s._)([(0,u.MZ)({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],h.prototype,"id",null),(0,s._)([(0,u.MZ)({type:String,json:{name:"legendUrl",write:{ignoreOrigin:!0}}})],h.prototype,"legendUrl",void 0),(0,s._)([(0,c.w)("legendUrl",["legendUrl","legendURL"])],h.prototype,"readLegendUrl",null),(0,s._)([(0,u.MZ)({type:Boolean,json:{name:"showLegend",origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],h.prototype,"legendEnabled",void 0),(0,s._)([(0,u.MZ)()],h.prototype,"layer",void 0),(0,s._)([(0,u.MZ)()],h.prototype,"maxScale",void 0),(0,s._)([(0,u.MZ)()],h.prototype,"minScale",void 0),(0,s._)([(0,u.MZ)({readOnly:!0})],h.prototype,"effectiveScaleRange",null),(0,s._)([(0,u.MZ)({type:String,json:{write:{ignoreOrigin:!0}}})],h.prototype,"name",void 0),(0,s._)([(0,u.MZ)()],h.prototype,"parent",void 0),(0,s._)([(0,u.MZ)({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],h.prototype,"popupEnabled",void 0),(0,s._)([(0,u.MZ)({type:Boolean,json:{write:{ignoreOrigin:!0}}})],h.prototype,"queryable",void 0),(0,s._)([(0,u.MZ)()],h.prototype,"sublayers",void 0),(0,s._)([(0,p.w)("sublayers")],h.prototype,"castSublayers",null),(0,s._)([(0,u.MZ)({type:[Number],json:{read:{source:"spatialReferences"}}})],h.prototype,"spatialReferences",void 0),(0,s._)([(0,u.MZ)({type:String,json:{write:{ignoreOrigin:!0}}})],h.prototype,"title",void 0),(0,s._)([(0,u.MZ)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],h.prototype,"visible",null),h=n=(0,s._)([(0,d.$)("esri.layers.support.WMSSublayer")],h);const g=h},62163:(e,t,r)=>{r.r(t),r.d(t,{default:()=>we});var n=r(93800),s=r(32195),i=r(79625),a=r(35377),l=r(23060),o=r(89129),u=r(5100),p=r(74719),c=r(42761),d=r(82301),y=r(59321),m=r(49959),f=r(79953),h=r(43103),g=r(48602),b=r(80556),w=r(14800),x=r(75269),v=r(15484),_=r(49491),S=r(12560),M=r(93321),I=r(11099),E=r(70576),N=r(57457),F=r(24203),O=r(8592),R=r(30528),P=r(52954),Z=r(75215),A=r(39936),L=r(63625),U=r(65073),T=r(75238),j=r(63646),C=r(69953),q=r(53342),$=r(62631),V=r(51536);const B={84:4326,83:4269,27:4267};function W(e){if(!e)return null;const t={idCounter:-1};"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));const r=e.documentElement;if("ServiceExceptionReport"===r.nodeName){const e=Array.prototype.slice.call(r.childNodes).map((e=>e.textContent)).join("\r\n");throw new p.default("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",e)}const n=H("Capability",r),s=H("Service",r),i=n&&H("Request",n);if(!n||!s||!i)return null;const a=H("Layer",n);if(!a)return null;const l="WMS_Capabilities"===r.nodeName||"WMT_MS_Capabilities"===r.nodeName?r.getAttribute("version"):"1.3.0",o=J("Title",s,"")||J("Name",s,""),u=J("AccessConstraints",s,""),c=/^none$/i.test(u)?"":u,d=J("Abstract",s,""),y=parseInt(J("MaxWidth",s,"5000"),10),m=parseInt(J("MaxHeight",s,"5000"),10),f=K(i,"GetMap"),h=z(i,"GetMap"),g=ee(a,l,t);if(!g)return null;let b,w=0;const x=Array.prototype.slice.call(n.childNodes),v=g.sublayers??[],_=e=>{null!=e&&v.push(e)};x.forEach((e=>{"Layer"===e.nodeName&&(0===w?b=e:1===w?(g.name&&(g.name="",_(ee(b,l,t))),_(ee(e,l,t))):_(ee(e,l,t)),w++)}));const S=g.sublayers??[],M=g.fullExtents??[];0===S.length&&S.push(g),g.extent??=S[0].extent;const I=g.spatialReferences.length>0?g.spatialReferences:k(g),E=z(i,"GetFeatureInfo"),N=E?K(i,"GetFeatureInfo"):null,F=G(S),O=g.minScale||0,R=g.maxScale||0,P=g.dimensions??[],Z=F.reduce(((e,t)=>e.concat(t.dimensions??[])),[]),A=P.concat(Z).filter(ne);let L=null;if(A.length){const e=A.map((e=>{const{extent:t}=e;return function(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}(t)?t.map((e=>e.getTime())):t?.map((e=>[e.min.getTime(),e.max.getTime()]))})).flat(2).filter($.Ru);L={startTimeField:null,endTimeField:null,trackIdField:void 0,timeExtent:[Math.min(...e),Math.max(...e)]}}return{copyright:c,description:d,dimensions:P,extent:g.extent,fullExtents:M,featureInfoFormats:N,featureInfoUrl:E,mapUrl:h,maxWidth:y,maxHeight:m,maxScale:R,minScale:O,layers:F,spatialReferences:I,supportedImageFormatTypes:f,timeInfo:L,title:o,version:l}}function k(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const t of e.sublayers){const e=k(t);if(e.length>0)return e}return[]}function G(e){let t=[];for(const r of e)t.push(r),r.sublayers?.length&&(t=t.concat(G(r.sublayers)),delete r.sublayers);return t}function D(e,t,r){return t.getAttribute(e)??r}function H(e,t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(te(n)&&n.nodeName===e)return n}return null}function X(e,t){if(null==t)return[];const r=[];for(let n=0;n<t.childNodes.length;n++){const s=t.childNodes[n];te(s)&&s.nodeName===e&&r.push(s)}return r}function J(e,t,r){return H(e,t)?.textContent??r}function Q(e,t,r){if(!e)return null;const n=parseFloat(e.getAttribute("minx")),s=parseFloat(e.getAttribute("miny")),i=parseFloat(e.getAttribute("maxx")),a=parseFloat(e.getAttribute("maxy"));let l,o,u,p;return r?(l=isNaN(s)?-Number.MAX_VALUE:s,o=isNaN(n)?-Number.MAX_VALUE:n,u=isNaN(a)?Number.MAX_VALUE:a,p=isNaN(i)?Number.MAX_VALUE:i):(l=isNaN(n)?-Number.MAX_VALUE:n,o=isNaN(s)?-Number.MAX_VALUE:s,u=isNaN(i)?Number.MAX_VALUE:i,p=isNaN(a)?Number.MAX_VALUE:a),{xmin:l,ymin:o,xmax:u,ymax:p,spatialReference:{wkid:t}}}function z(e,t){const r=H(t,e);if(r){const e=H("DCPType",r);if(e){const t=H("HTTP",e);if(t){const e=H("Get",t);if(e){let t=function(e,t,r,n){const s=H(e,r);return s?D(t,s,n):n}("OnlineResource","xlink:href",e,null);if(t){const e=t.indexOf("&");return-1!==e&&e===t.length-1&&(t=t.slice(0,-1)),function(e,t){const r=[],n=(0,h.urlToObject)(e);for(const s in n.query)n.query.hasOwnProperty(s)&&(t.includes(s.toLowerCase())||r.push(s+"="+n.query[s]));return n.path+(r.length?"?"+r.join("&"):"")}(t,["service","request"])}}}}}return null}function K(e,t){const r=X("Operation",e);if(!r.length)return X("Format",H(t,e)).map((e=>{let{textContent:t}=e;return t})).filter($.Ru);const n=[];for(const s of r)if(s.getAttribute("name")===t){const e=X("Format",s);for(const{textContent:t}of e)null!=t&&n.push(t)}return n}function Y(e,t,r){const n=H(t,e);if(!n)return r;const{textContent:s}=n;if(null==s||""===s)return r;const i=Number(s);return isNaN(i)?r:i}function ee(e,t,r){if(!e)return null;const n=e.getAttribute("queryable")?.toLowerCase(),s="1"===n||"true"===n,i={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:s,spatialReferences:[],sublayers:null},a=H("LatLonBoundingBox",e),l=H("EX_GeographicBoundingBox",e);let o=null;a&&(o=Q(a,4326)),l&&(o=new S.default(0,0,0,0,new M.default({wkid:4326})),o.xmin=parseFloat(J("westBoundLongitude",l,"0")),o.ymin=parseFloat(J("southBoundLatitude",l,"0")),o.xmax=parseFloat(J("eastBoundLongitude",l,"0")),o.ymax=parseFloat(J("northBoundLatitude",l,"0"))),a||l||(o=new S.default(-180,-90,180,90,new M.default({wkid:4326}))),i.minScale=Y(e,"MaxScaleDenominator",0),i.maxScale=Y(e,"MinScaleDenominator",0);const u=["1.0.0","1.1.0","1.1.1"].includes(t)?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach((e=>{if("Name"===e.nodeName)i.name=e.textContent||"";else if("Title"===e.nodeName)i.title=e.textContent||"";else if("Abstract"===e.nodeName)i.description=e.textContent||"";else if("BoundingBox"===e.nodeName){const r=e.getAttribute(u);if(r&&0===r.indexOf("EPSG:")){const n=parseInt(r.slice(5),10);0===n||isNaN(n)||o||(o="1.3.0"===t?Q(e,n,(0,L.m)(n)):Q(e,n))}const n=r?.indexOf(":");if(n&&n>-1){let s=parseInt(r.slice(n+1),10);0===s||isNaN(s)||(s=B[s]??s);const a="1.3.0"===t?Q(e,s,(0,L.m)(s)):Q(e,s);a&&i.fullExtents&&i.fullExtents.push(a)}}else if(e.nodeName===u)(e.textContent?.split(" ")??[]).forEach((e=>{let t=NaN;if(e.includes(":")){const[r,n]=e.toUpperCase().split(":");"CRS"!==r&&"EPSG"!==r||(t=parseInt(n,10))}else t=parseInt(e,10);if(0!==t&&!isNaN(t)){const e=B[t]??t;i.spatialReferences.includes(e)||i.spatialReferences.push(e)}}));else if("Style"!==e.nodeName||i.legendUrl){if("Layer"===e.nodeName){const n=ee(e,t,r);n&&(n.parentLayerId=i.id,i.sublayers||(i.sublayers=[]),i.sublayers.push(n))}}else{const t=H("LegendURL",e);if(t){const e=H("OnlineResource",t);e&&(i.legendUrl=e.getAttribute("xlink:href"))}}})),i.extent=o,i.dimensions=X("Dimension",e).filter((e=>e.getAttribute("name")&&e.getAttribute("units")&&e.textContent)).map((e=>{const t=e.getAttribute("name"),r=e.getAttribute("units"),n=e.textContent,s=e.getAttribute("unitSymbol")??void 0,i=e.getAttribute("default")??void 0,a="0"!==D("default",e,"0"),l="0"!==D("nearestValue",e,"0"),o="0"!==D("current",e,"0");return ne({name:t,units:r})?{name:"time",units:"ISO8601",extent:ae(n),default:ae(i),multipleValues:a,nearestValue:l,current:o}:re({name:t,units:r})?{name:"elevation",units:r,extent:se(n),unitSymbol:s,default:se(i),multipleValues:a,nearestValue:l}:{name:t,units:r,extent:ie(n),unitSymbol:s,default:ie(i),multipleValues:a,nearestValue:l}})),i}function te(e){return e.nodeType===Node.ELEMENT_NODE}function re(e){return/^elevation$/i.test(e.name)&&/^(epsg|crs):\d+$/i.test(e.units)}function ne(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function se(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:parseFloat(t[0]),max:parseFloat(t[1]),resolution:t.length>=3&&"0"!==t[2]?parseFloat(t[2]):void 0}})).filter($.Ru):r.map((e=>parseFloat(e)))}function ie(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:t[0],max:t[1],resolution:t.length>=3&&"0"!==t[2]?t[2]:void 0}})).filter($.Ru):r}function ae(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:le(t[0]),max:le(t[1]),resolution:t.length>=3&&"0"!==t[2]?oe(t[2]):void 0}})).filter($.Ru):r.map((e=>le(e)))}function le(e){return V.c9.fromISO(e,{zone:V.mQ.utcInstance}).toJSDate()}function oe(e){const t=e.match(/(?:p(\d+y|\d+(?:\.|,)\d+y)?(\d+m|\d+(?:\.|,)\d+m)?(\d+d|\d+(?:\.|,)\d+d)?)?(?:t(\d+h|\d+(?:\.|,)\d+h)?(\d+m|\d+(?:\.|,)\d+m)?(\d+s|\d+(?:\.|,)\d+s)?)?/i);return t?{years:ue(t[1]),months:ue(t[2]),days:ue(t[3]),hours:ue(t[4]),minutes:ue(t[5]),seconds:ue(t[6])}:null}function ue(e){if(!e)return 0;const t=e.match(/(?:\d+(?:\.|,)\d+|\d+)/);if(!t)return 0;const r=t[0].replace(",",".");return Number(r)}function pe(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}function ce(e){if(!e||e.isAllTime||e.isEmpty)return;const{start:t,end:r}=e;return t&&r&&t.getTime()===r.getTime()?`${pe(t)}`:`${t?pe(t):"0000-01-01T00:00:00Z"}/${r?pe(r):"9999-12-31T23:59:59Z"}`}const de=new Set([102100,3857,102113,900913]),ye=new Set([3395,54004]);const me=new c.J({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});function fe(e){return"text/html"===e}function he(e){return"text/plain"===e}let ge=class extends((0,F.dM)((0,A.e)((0,P.J)((0,Z.j)((0,O.q)((0,R.A)((0,y.P)(N.default)))))))){constructor(){super(...arguments),this.allSublayers=new u.A({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormats=null,this.featureInfoUrl=null,this.fetchFeatureInfoFunction=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.version=null,this.addHandles([(0,f.on)((()=>this.sublayers),"after-add",(e=>{let{item:t}=e;t.parent=t.layer=this}),f.sync),(0,f.on)((()=>this.sublayers),"after-remove",(e=>{let{item:t}=e;t.layer=t.parent=null}),f.sync),(0,f.watch)((()=>this.sublayers),((e,t)=>{if(t)for(const r of t)r.layer=r.parent=null;if(e)for(const r of e)r.parent=r.layer=this}),f.sync)])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this.allSublayers.destroy()}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(m.throwIfAbortError).then((()=>this._fetchService(t))).then((()=>this._checkLayerValidity()))),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return r?new S.default({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]}):null}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}get featureInfoFormat(){return null==this.featureInfoFormats?null:this.featureInfoFormats.find(fe)??this.featureInfoFormats.find(he)??null}set featureInfoFormat(e){null==e?(this.revert("featureInfoFormat","service"),this._clearOverride("featureInfoFormat")):(fe(e)||he(e))&&this._override("featureInfoFormat",e)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("image/png")?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new M.default(t.spatialReferences[0])}writeSpatialReferences(e,t){const r=this.spatialReference?.wkid;e&&r?(t.spatialReferences=e.filter((e=>e!==r)),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return be(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return be(t.layers,r)}writeSublayers(e,t,r,n){t.layers=[];const s=new Map,i=e.flatten((e=>{let{sublayers:t}=e;return t??[]}));for(const a of i)if("number"==typeof a.parent?.id){const e=s.get(a.parent.id);null!=e?e.push(a.id):s.set(a.parent.id,[a.id])}for(const a of i){const e={sublayer:a,...n},r=a.write({parentLayerId:"number"==typeof a.parent?.id?a.parent.id:-1},e);if(s.has(a.id)&&(r.sublayerIds=s.get(a.id)),!a.sublayers&&a.name){const r=a.write({},e);delete r.id,t.layers.push(r)}}t.visibleLayers=i.filter((e=>{let{visible:t,sublayers:r}=e;return t&&!r})).map((e=>{let{name:t}=e;return t})).toArray()}set url(e){if(!e)return void this._set("url",e);const{path:t,query:r}=(0,h.urlToObject)(e);for(const s in r)/^(request|service)$/i.test(s)&&delete r[s];const n=(0,h.addQueryParameters)(t,r??{});this._set("url",n)}createExportImageParameters(e,t,r,n){const s=n?.pixelRatio??1,i=(0,I.X_)({extent:e,width:t})*s,a=new j.r({layer:this,scale:i}),{xmin:l,ymin:o,xmax:u,ymax:p,spatialReference:c}=e,d=function(e,t){let r=e.wkid;return null==t?r:(null!=r&&t.includes(r)||!e.latestWkid||(r=e.latestWkid),null!=r&&de.has(r)?t.find((e=>de.has(e)))||t.find((e=>ye.has(e)))||102100:r)}(c,this.spatialReferences),y="1.3.0"===this.version&&(0,L.m)(d)?`${o},${l},${p},${u}`:`${l},${o},${u},${p}`,m=a.toJSON(),f="1.3.0"===this.version?"crs":"srs";return{bbox:y,[f]:null==d||isNaN(d)?void 0:"EPSG:"+d,...m}}async fetchImage(e,t,r,n){const s=this.mapUrl,i=this.createExportImageParameters(e,t,r,n);if(!i.layers){const e=document.createElement("canvas");return e.width=t,e.height=r,e}const a=ce(n?.timeExtent),o={responseType:"image",query:this._mixCustomParameters({width:t,height:r,...i,time:a,...this.refreshParameters}),signal:n?.signal};return(0,l.default)(s??"",o).then((e=>e.data))}async fetchImageBitmap(e,t,r,n){const s=this.mapUrl??"",i=this.createExportImageParameters(e,t,r,n);if(!i.layers){const e=document.createElement("canvas");return e.width=t,e.height=r,e}const a=ce(n?.timeExtent),o={responseType:"blob",query:this._mixCustomParameters({width:t,height:r,...i,time:a,...this.refreshParameters}),signal:n?.signal},{data:u}=await(0,l.default)(s,o);return(0,C.m)(u,s,n?.signal)}fetchFeatureInfo(e,t,r,n,s){const i=(0,I.X_)({extent:e,width:t}),a=function(e){const t=e.filter((e=>e.popupEnabled&&e.name&&e.queryable));return t.length?t.map((e=>{let{name:t}=e;return t})).join():null}(new j.r({layer:this,scale:i}).visibleSublayers);if(null==this.featureInfoUrl||null==a)return Promise.resolve([]);if(null==this.fetchFeatureInfoFunction&&null==this.featureInfoFormat)return Promise.resolve([]);const l="1.3.0"===this.version?{I:n,J:s}:{x:n,y:s},o={query_layers:a,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r,...l},u={...this.createExportImageParameters(e,t,r),...o},p=this._mixCustomParameters(u);return null!=this.fetchFeatureInfoFunction?this.fetchFeatureInfoFunction(p):this._defaultFetchFeatureInfoFunction((0,h.addQueryParameters)(this.featureInfoUrl,p))}findSublayerById(e){return this.allSublayers.find((t=>t.id===e))}findSublayerByName(e){return this.allSublayers.find((t=>t.name===e))}serviceSupportsSpatialReference(e){return(0,U.bd)(this.url)||null!=this.spatialReferences&&this.spatialReferences.some((t=>{const r=900913===t?M.default.WebMercator:new M.default({wkid:t});return(0,E.aI)(r,e)}))}_defaultFetchFeatureInfoFunction(e){const t=document.createElement("iframe");t.src=(0,h.addProxy)(e),t.style.border="none",t.style.margin="0",t.style.width="100%",t.setAttribute("sandbox","");const r=new a.default({title:this.title,content:t}),n=new i.default({sourceLayer:this,popupTemplate:r});return Promise.resolve([n])}async _fetchService(e){if(!this.resourceInfo&&this.parsedUrl?.path){const{path:t,query:r}=this.parsedUrl,{data:n}=await(0,l.default)(t,{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...r,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=W(n)}if(this.parsedUrl){const e=new h.Url(this.parsedUrl.path),{httpsDomains:t}=s.default.request;"https"!==e.scheme||e.port&&"443"!==e.port||!e.host||t.includes(e.host)||t.push(e.host)}this.read(this.resourceInfo,{origin:"service"})}_checkLayerValidity(){if(!this.allSublayers.length)throw new p.default("wmslayer:empty-layer","The layer doesn't have any sublayer")}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t={...this.customParameters,...this.customLayerParameters};for(const r in t)e[r.toLowerCase()]=t[r];return e}};function be(e,t,r){e=e??[];const n=new Map;e.every((e=>null==e.id))&&(e=(0,d.clone)(e)).forEach(((e,t)=>e.id=t));for(const i of e){const e=new q.default;e.read(i,t),r&&!r.includes(e.name)&&(e.visible=!1),n.set(e.id,e)}const s=[];for(const i of e){const e=null!=i.id?n.get(i.id):null;if(e)if(null!=i.parentLayerId&&i.parentLayerId>=0){const t=n.get(i.parentLayerId);if(!t)continue;t.sublayers||(t.sublayers=new o.default),t.sublayers.push(e)}else s.push(e)}return s}(0,n._)([(0,g.MZ)({readOnly:!0})],ge.prototype,"allSublayers",void 0),(0,n._)([(0,g.MZ)({json:{type:Object,write:!0}})],ge.prototype,"customParameters",void 0),(0,n._)([(0,g.MZ)({json:{type:Object,write:!0}})],ge.prototype,"customLayerParameters",void 0),(0,n._)([(0,g.MZ)({type:String,json:{write:!0}})],ge.prototype,"copyright",void 0),(0,n._)([(0,g.MZ)()],ge.prototype,"description",void 0),(0,n._)([(0,g.MZ)({readOnly:!0})],ge.prototype,"dimensions",void 0),(0,n._)([(0,g.MZ)({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],ge.prototype,"fullExtent",void 0),(0,n._)([(0,w.w)(["web-document","portal-item"],"fullExtent",["extent"])],ge.prototype,"readFullExtentFromItemOrMap",null),(0,n._)([(0,v.K)(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],ge.prototype,"writeFullExtent",null),(0,n._)([(0,g.MZ)({type:[S.default]})],ge.prototype,"fullExtents",void 0),(0,n._)([(0,g.MZ)({type:String,json:{write:{ignoreOrigin:!0}}})],ge.prototype,"featureInfoFormat",null),(0,n._)([(0,g.MZ)({type:[String],readOnly:!0})],ge.prototype,"featureInfoFormats",void 0),(0,n._)([(0,g.MZ)({type:String,json:{write:{ignoreOrigin:!0}}})],ge.prototype,"featureInfoUrl",void 0),(0,n._)([(0,g.MZ)()],ge.prototype,"fetchFeatureInfoFunction",void 0),(0,n._)([(0,g.MZ)({type:String,json:{origins:{"web-document":{default:"image/png",type:me.jsonValues,read:{reader:me.read,source:"format"},write:{writer:me.write,target:"format"}}}}})],ge.prototype,"imageFormat",void 0),(0,n._)([(0,w.w)("imageFormat",["supportedImageFormatTypes"])],ge.prototype,"readImageFormat",null),(0,n._)([(0,g.MZ)({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],ge.prototype,"imageMaxHeight",void 0),(0,n._)([(0,g.MZ)({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],ge.prototype,"imageMaxWidth",void 0),(0,n._)([(0,g.MZ)()],ge.prototype,"imageTransparency",void 0),(0,n._)([(0,g.MZ)(T.fV)],ge.prototype,"legendEnabled",void 0),(0,n._)([(0,g.MZ)({type:["show","hide","hide-children"]})],ge.prototype,"listMode",void 0),(0,n._)([(0,g.MZ)({type:String,json:{write:{ignoreOrigin:!0}}})],ge.prototype,"mapUrl",void 0),(0,n._)([(0,g.MZ)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],ge.prototype,"isReference",void 0),(0,n._)([(0,g.MZ)({type:["WMS"]})],ge.prototype,"operationalLayerType",void 0),(0,n._)([(0,g.MZ)()],ge.prototype,"resourceInfo",void 0),(0,n._)([(0,g.MZ)({type:M.default,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],ge.prototype,"spatialReference",void 0),(0,n._)([(0,w.w)(["web-document","portal-item"],"spatialReference",["spatialReferences"])],ge.prototype,"readSpatialReferenceFromItemOrDocument",null),(0,n._)([(0,g.MZ)({type:[b.jz],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],ge.prototype,"spatialReferences",void 0),(0,n._)([(0,v.K)(["web-document","portal-item"],"spatialReferences")],ge.prototype,"writeSpatialReferences",null),(0,n._)([(0,g.MZ)({type:o.default.ofType(q.default),json:{write:{target:"layers",overridePolicy(e,t,r){if(function(e,t){return e.some((e=>{for(const r in e)if((0,_.R)(e,r,null,t))return!0;return!1}))}(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],ge.prototype,"sublayers",void 0),(0,n._)([(0,w.w)(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],ge.prototype,"readSublayersFromItemOrMap",null),(0,n._)([(0,w.w)("service","sublayers",["layers"])],ge.prototype,"readSublayers",null),(0,n._)([(0,v.K)("sublayers",{layers:{type:[q.default]},visibleLayers:{type:[String]}})],ge.prototype,"writeSublayers",null),(0,n._)([(0,g.MZ)({json:{read:!1},readOnly:!0,value:"wms"})],ge.prototype,"type",void 0),(0,n._)([(0,g.MZ)(T.OZ)],ge.prototype,"url",null),(0,n._)([(0,g.MZ)({type:String,json:{write:{ignoreOrigin:!0}}})],ge.prototype,"version",void 0),ge=(0,n._)([(0,x.$)("esri.layers.WMSLayer")],ge);const we=ge},63625:(e,t,r)=>{r.d(t,{m:()=>s});const n=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function s(e){return null!=e&&n.some((t=>{let[r,n]=t;return e>=r&&e<=n}))}},63646:(e,t,r)=>{r.d(t,{r:()=>o});var n=r(93800),s=r(6946),i=r(48602),a=(r(21265),r(50925),r(14746),r(75269));const l={visible:"visibleSublayers"};let o=class extends s.default{constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(l[e.propertyName])))],"layer"))}get layers(){return this.visibleSublayers.filter((e=>{let{name:t}=e;return t})).map((e=>{let{name:t}=e;return t})).join()}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:t}=this,r=e?.sublayers,n=[],s=e=>{const{minScale:r,maxScale:i,sublayers:a,visible:l}=e;l&&(0===t||(0===r||t<=r)&&(0===i||t>=i))&&(a?a.forEach(s):n.push(e))};return r?.forEach(s),n}toJSON(){const{layer:e,layers:t}=this,{imageFormat:r,imageTransparency:n,version:s}=e;return{format:r,request:"GetMap",service:"WMS",styles:"",transparent:n?"TRUE":"FALSE",version:s,layers:t}}};(0,n._)([(0,i.MZ)()],o.prototype,"layer",null),(0,n._)([(0,i.MZ)({readOnly:!0})],o.prototype,"layers",null),(0,n._)([(0,i.MZ)({type:Number})],o.prototype,"scale",void 0),(0,n._)([(0,i.MZ)({readOnly:!0})],o.prototype,"version",null),(0,n._)([(0,i.MZ)({readOnly:!0})],o.prototype,"visibleSublayers",null),o=(0,n._)([(0,a.$)("esri.layers.support.ExportWMSImageParameters")],o)},69953:(e,t,r)=>{r.d(t,{C:()=>a,m:()=>i});var n=r(74719),s=r(49959);async function i(e,t,r){let i;try{i=await createImageBitmap(e)}catch(a){throw new n.default("request:server",`Unable to load ${t}`,{url:t,error:a})}return(0,s.throwIfAborted)(r),i}async function a(e,t,r,i,a){let l;try{l=await createImageBitmap(e)}catch(o){throw new n.default("request:server",`Unable to load tile ${t}/${r}/${i}`,{error:o,level:t,row:r,col:i})}return(0,s.throwIfAborted)(a),l}}}]);