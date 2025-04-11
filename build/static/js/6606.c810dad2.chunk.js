"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[6606],{56606:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Me});var n,s=r(93800),i=r(32195),a=r(79625),o=r(77955),l=r(23060),u=r(48690),p=r(5100),c=r(74719),d=r(42761),m=r(82301),y=r(59321),h=r(49959),f=r(79953),g=r(43103),b=r(48602),w=r(80556),x=r(14800),v=r(75269),_=r(15484),S=r(49491),M=r(12560),A=r(93321),I=r(11099),E=r(70576),N=r(57457),F=r(24203),O=r(8592),R=r(30528),P=r(52954),Z=r(75215),L=r(39936),U=r(63625),T=r(65073),C=r(75238),j=r(63646),q=r(69953),$=r(93633),B=r(32980);r(21265),r(14746);let V=0,W=n=class extends($.A.IdentifiableMixin(y.L)){constructor(e){super(e),this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.legendUrl=null,this.legendEnabled=!0,this.layer=null,this.maxScale=0,this.minScale=0,this.name=null,this.parent=null,this.popupEnabled=!1,this.queryable=!1,this.sublayers=null,this.spatialReferences=null,this.title=null,this.addHandles([(0,f.on)((()=>this.sublayers),"after-add",(e=>{let{item:t}=e;t.parent=this,t.layer=this.layer}),f.OH),(0,f.on)((()=>this.sublayers),"after-remove",(e=>{let{item:t}=e;t.layer=t.parent=null}),f.OH),(0,f.wB)((()=>this.sublayers),((e,t)=>{if(t)for(const r of t)r.layer=r.parent=null;if(e)for(const r of e)r.parent=this,r.layer=this.layer}),f.OH),(0,f.wB)((()=>this.layer),(e=>{if(this.sublayers)for(const t of this.sublayers)t.layer=e}),f.OH)])}get id(){return this._get("id")??V++}set id(e){this._set("id",e)}readLegendUrl(e,t){return t.legendUrl??t.legendURL??null}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}castSublayers(e){return(0,w.dp)(u.A.ofType(n),e)}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){const e=new n;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents?.map((e=>e.clone()))??null),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers?.map((e=>e.clone()))),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences?.map((e=>e))),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};(0,s._)([(0,b.MZ)()],W.prototype,"description",void 0),(0,s._)([(0,b.MZ)({readOnly:!0})],W.prototype,"dimensions",void 0),(0,s._)([(0,b.MZ)({type:M.A,json:{name:"extent"}})],W.prototype,"fullExtent",void 0),(0,s._)([(0,b.MZ)()],W.prototype,"fullExtents",void 0),(0,s._)([(0,b.MZ)({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],W.prototype,"id",null),(0,s._)([(0,b.MZ)({type:String,json:{name:"legendUrl",write:{ignoreOrigin:!0}}})],W.prototype,"legendUrl",void 0),(0,s._)([(0,x.w)("legendUrl",["legendUrl","legendURL"])],W.prototype,"readLegendUrl",null),(0,s._)([(0,b.MZ)({type:Boolean,json:{name:"showLegend",origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],W.prototype,"legendEnabled",void 0),(0,s._)([(0,b.MZ)()],W.prototype,"layer",void 0),(0,s._)([(0,b.MZ)()],W.prototype,"maxScale",void 0),(0,s._)([(0,b.MZ)()],W.prototype,"minScale",void 0),(0,s._)([(0,b.MZ)({readOnly:!0})],W.prototype,"effectiveScaleRange",null),(0,s._)([(0,b.MZ)({type:String,json:{write:{ignoreOrigin:!0}}})],W.prototype,"name",void 0),(0,s._)([(0,b.MZ)()],W.prototype,"parent",void 0),(0,s._)([(0,b.MZ)({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],W.prototype,"popupEnabled",void 0),(0,s._)([(0,b.MZ)({type:Boolean,json:{write:{ignoreOrigin:!0}}})],W.prototype,"queryable",void 0),(0,s._)([(0,b.MZ)()],W.prototype,"sublayers",void 0),(0,s._)([(0,B.w)("sublayers")],W.prototype,"castSublayers",null),(0,s._)([(0,b.MZ)({type:[Number],json:{read:{source:"spatialReferences"}}})],W.prototype,"spatialReferences",void 0),(0,s._)([(0,b.MZ)({type:String,json:{write:{ignoreOrigin:!0}}})],W.prototype,"title",void 0),(0,s._)([(0,b.MZ)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],W.prototype,"visible",null),W=n=(0,s._)([(0,v.$)("esri.layers.support.WMSSublayer")],W);const k=W;var H=r(62631),G=r(51536);const D={84:4326,83:4269,27:4267};function X(e){if(!e)return null;const t={idCounter:-1};"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));const r=e.documentElement;if("ServiceExceptionReport"===r.nodeName){const e=Array.prototype.slice.call(r.childNodes).map((e=>e.textContent)).join("\r\n");throw new c.A("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",e)}const n=Q("Capability",r),s=Q("Service",r),i=n&&Q("Request",n);if(!n||!s||!i)return null;const a=Q("Layer",n);if(!a)return null;const o="WMS_Capabilities"===r.nodeName||"WMT_MS_Capabilities"===r.nodeName?r.getAttribute("version"):"1.3.0",l=ee("Title",s,"")||ee("Name",s,""),u=ee("AccessConstraints",s,""),p=/^none$/i.test(u)?"":u,d=ee("Abstract",s,""),m=parseInt(ee("MaxWidth",s,"5000"),10),y=parseInt(ee("MaxHeight",s,"5000"),10),h=ne(i,"GetMap"),f=re(i,"GetMap"),g=ie(a,o,t);if(!g)return null;let b,w=0;const x=Array.prototype.slice.call(n.childNodes),v=g.sublayers??[],_=e=>{null!=e&&v.push(e)};x.forEach((e=>{"Layer"===e.nodeName&&(0===w?b=e:1===w?(g.name&&(g.name="",_(ie(b,o,t))),_(ie(e,o,t))):_(ie(e,o,t)),w++)}));const S=g.sublayers??[],M=g.fullExtents??[];0===S.length&&S.push(g),g.extent??=S[0].extent;const A=g.spatialReferences.length>0?g.spatialReferences:J(g),I=re(i,"GetFeatureInfo"),E=I?ne(i,"GetFeatureInfo"):null,N=z(S),F=g.minScale||0,O=g.maxScale||0,R=g.dimensions??[],P=N.reduce(((e,t)=>e.concat(t.dimensions??[])),[]),Z=R.concat(P).filter(le);let L=null;if(Z.length){const e=Z.map((e=>{const{extent:t}=e;return function(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}(t)?t.map((e=>e.getTime())):t?.map((e=>[e.min.getTime(),e.max.getTime()]))})).flat(2).filter(H.Ru);L={startTimeField:null,endTimeField:null,trackIdField:void 0,timeExtent:[Math.min(...e),Math.max(...e)]}}return{copyright:p,description:d,dimensions:R,extent:g.extent,fullExtents:M,featureInfoFormats:E,featureInfoUrl:I,mapUrl:f,maxWidth:m,maxHeight:y,maxScale:O,minScale:F,layers:N,spatialReferences:A,supportedImageFormatTypes:h,timeInfo:L,title:l,version:o}}function J(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const t of e.sublayers){const e=J(t);if(e.length>0)return e}return[]}function z(e){let t=[];for(const r of e)t.push(r),r.sublayers?.length&&(t=t.concat(z(r.sublayers)),delete r.sublayers);return t}function K(e,t,r){return t.getAttribute(e)??r}function Q(e,t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(ae(n)&&n.nodeName===e)return n}return null}function Y(e,t){if(null==t)return[];const r=[];for(let n=0;n<t.childNodes.length;n++){const s=t.childNodes[n];ae(s)&&s.nodeName===e&&r.push(s)}return r}function ee(e,t,r){return Q(e,t)?.textContent??r}function te(e,t,r){if(!e)return null;const n=parseFloat(e.getAttribute("minx")),s=parseFloat(e.getAttribute("miny")),i=parseFloat(e.getAttribute("maxx")),a=parseFloat(e.getAttribute("maxy"));let o,l,u,p;return r?(o=isNaN(s)?-Number.MAX_VALUE:s,l=isNaN(n)?-Number.MAX_VALUE:n,u=isNaN(a)?Number.MAX_VALUE:a,p=isNaN(i)?Number.MAX_VALUE:i):(o=isNaN(n)?-Number.MAX_VALUE:n,l=isNaN(s)?-Number.MAX_VALUE:s,u=isNaN(i)?Number.MAX_VALUE:i,p=isNaN(a)?Number.MAX_VALUE:a),{xmin:o,ymin:l,xmax:u,ymax:p,spatialReference:{wkid:t}}}function re(e,t){const r=Q(t,e);if(r){const e=Q("DCPType",r);if(e){const t=Q("HTTP",e);if(t){const e=Q("Get",t);if(e){let t=function(e,t,r,n){const s=Q(e,r);return s?K(t,s,n):n}("OnlineResource","xlink:href",e,null);if(t){const e=t.indexOf("&");return-1!==e&&e===t.length-1&&(t=t.slice(0,-1)),function(e,t){const r=[],n=(0,g.An)(e);for(const s in n.query)n.query.hasOwnProperty(s)&&(t.includes(s.toLowerCase())||r.push(s+"="+n.query[s]));return n.path+(r.length?"?"+r.join("&"):"")}(t,["service","request"])}}}}}return null}function ne(e,t){const r=Y("Operation",e);if(!r.length)return Y("Format",Q(t,e)).map((e=>{let{textContent:t}=e;return t})).filter(H.Ru);const n=[];for(const s of r)if(s.getAttribute("name")===t){const e=Y("Format",s);for(const{textContent:t}of e)null!=t&&n.push(t)}return n}function se(e,t,r){const n=Q(t,e);if(!n)return r;const{textContent:s}=n;if(null==s||""===s)return r;const i=Number(s);return isNaN(i)?r:i}function ie(e,t,r){if(!e)return null;const n=e.getAttribute("queryable")?.toLowerCase(),s="1"===n||"true"===n,i={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:s,spatialReferences:[],sublayers:null},a=Q("LatLonBoundingBox",e),o=Q("EX_GeographicBoundingBox",e);let l=null;a&&(l=te(a,4326)),o&&(l=new M.A(0,0,0,0,new A.A({wkid:4326})),l.xmin=parseFloat(ee("westBoundLongitude",o,"0")),l.ymin=parseFloat(ee("southBoundLatitude",o,"0")),l.xmax=parseFloat(ee("eastBoundLongitude",o,"0")),l.ymax=parseFloat(ee("northBoundLatitude",o,"0"))),a||o||(l=new M.A(-180,-90,180,90,new A.A({wkid:4326}))),i.minScale=se(e,"MaxScaleDenominator",0),i.maxScale=se(e,"MinScaleDenominator",0);const u=["1.0.0","1.1.0","1.1.1"].includes(t)?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach((e=>{if("Name"===e.nodeName)i.name=e.textContent||"";else if("Title"===e.nodeName)i.title=e.textContent||"";else if("Abstract"===e.nodeName)i.description=e.textContent||"";else if("BoundingBox"===e.nodeName){const r=e.getAttribute(u);if(r&&0===r.indexOf("EPSG:")){const n=parseInt(r.slice(5),10);0===n||isNaN(n)||l||(l="1.3.0"===t?te(e,n,(0,U.m)(n)):te(e,n))}const n=r?.indexOf(":");if(n&&n>-1){let s=parseInt(r.slice(n+1),10);0===s||isNaN(s)||(s=D[s]??s);const a="1.3.0"===t?te(e,s,(0,U.m)(s)):te(e,s);a&&i.fullExtents&&i.fullExtents.push(a)}}else if(e.nodeName===u)(e.textContent?.split(" ")??[]).forEach((e=>{let t=NaN;if(e.includes(":")){const[r,n]=e.toUpperCase().split(":");"CRS"!==r&&"EPSG"!==r||(t=parseInt(n,10))}else t=parseInt(e,10);if(0!==t&&!isNaN(t)){const e=D[t]??t;i.spatialReferences.includes(e)||i.spatialReferences.push(e)}}));else if("Style"!==e.nodeName||i.legendUrl){if("Layer"===e.nodeName){const n=ie(e,t,r);n&&(n.parentLayerId=i.id,i.sublayers||(i.sublayers=[]),i.sublayers.push(n))}}else{const t=Q("LegendURL",e);if(t){const e=Q("OnlineResource",t);e&&(i.legendUrl=e.getAttribute("xlink:href"))}}})),i.extent=l,i.dimensions=Y("Dimension",e).filter((e=>e.getAttribute("name")&&e.getAttribute("units")&&e.textContent)).map((e=>{const t=e.getAttribute("name"),r=e.getAttribute("units"),n=e.textContent,s=e.getAttribute("unitSymbol")??void 0,i=e.getAttribute("default")??void 0,a="0"!==K("default",e,"0"),o="0"!==K("nearestValue",e,"0"),l="0"!==K("current",e,"0");return le({name:t,units:r})?{name:"time",units:"ISO8601",extent:ce(n),default:ce(i),multipleValues:a,nearestValue:o,current:l}:oe({name:t,units:r})?{name:"elevation",units:r,extent:ue(n),unitSymbol:s,default:ue(i),multipleValues:a,nearestValue:o}:{name:t,units:r,extent:pe(n),unitSymbol:s,default:pe(i),multipleValues:a,nearestValue:o}})),i}function ae(e){return e.nodeType===Node.ELEMENT_NODE}function oe(e){return/^elevation$/i.test(e.name)&&/^(epsg|crs):\d+$/i.test(e.units)}function le(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function ue(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:parseFloat(t[0]),max:parseFloat(t[1]),resolution:t.length>=3&&"0"!==t[2]?parseFloat(t[2]):void 0}})).filter(H.Ru):r.map((e=>parseFloat(e)))}function pe(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:t[0],max:t[1],resolution:t.length>=3&&"0"!==t[2]?t[2]:void 0}})).filter(H.Ru):r}function ce(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:de(t[0]),max:de(t[1]),resolution:t.length>=3&&"0"!==t[2]?me(t[2]):void 0}})).filter(H.Ru):r.map((e=>de(e)))}function de(e){return G.c9.fromISO(e,{zone:G.mQ.utcInstance}).toJSDate()}function me(e){const t=e.match(/(?:p(\d+y|\d+(?:\.|,)\d+y)?(\d+m|\d+(?:\.|,)\d+m)?(\d+d|\d+(?:\.|,)\d+d)?)?(?:t(\d+h|\d+(?:\.|,)\d+h)?(\d+m|\d+(?:\.|,)\d+m)?(\d+s|\d+(?:\.|,)\d+s)?)?/i);return t?{years:ye(t[1]),months:ye(t[2]),days:ye(t[3]),hours:ye(t[4]),minutes:ye(t[5]),seconds:ye(t[6])}:null}function ye(e){if(!e)return 0;const t=e.match(/(?:\d+(?:\.|,)\d+|\d+)/);if(!t)return 0;const r=t[0].replace(",",".");return Number(r)}function he(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}function fe(e){if(!e||e.isAllTime||e.isEmpty)return;const{start:t,end:r}=e;return t&&r&&t.getTime()===r.getTime()?`${he(t)}`:`${t?he(t):"0000-01-01T00:00:00Z"}/${r?he(r):"9999-12-31T23:59:59Z"}`}const ge=new Set([102100,3857,102113,900913]),be=new Set([3395,54004]);const we=new d.J({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});function xe(e){return"text/html"===e}function ve(e){return"text/plain"===e}let _e=class extends((0,F.dM)((0,L.e)((0,P.J)((0,Z.j)((0,O.q)((0,R.A)((0,y.P)(N.A)))))))){constructor(){super(...arguments),this.allSublayers=new p.A({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormats=null,this.featureInfoUrl=null,this.fetchFeatureInfoFunction=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.version=null,this.addHandles([(0,f.on)((()=>this.sublayers),"after-add",(e=>{let{item:t}=e;t.parent=t.layer=this}),f.OH),(0,f.on)((()=>this.sublayers),"after-remove",(e=>{let{item:t}=e;t.layer=t.parent=null}),f.OH),(0,f.wB)((()=>this.sublayers),((e,t)=>{if(t)for(const r of t)r.layer=r.parent=null;if(e)for(const r of e)r.parent=r.layer=this}),f.OH)])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this.allSublayers.destroy()}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(h.QP).then((()=>this._fetchService(t))).then((()=>this._checkLayerValidity()))),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return r?new M.A({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]}):null}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}get featureInfoFormat(){return null==this.featureInfoFormats?null:this.featureInfoFormats.find(xe)??this.featureInfoFormats.find(ve)??null}set featureInfoFormat(e){null==e?(this.revert("featureInfoFormat","service"),this._clearOverride("featureInfoFormat")):(xe(e)||ve(e))&&this._override("featureInfoFormat",e)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("image/png")?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new A.A(t.spatialReferences[0])}writeSpatialReferences(e,t){const r=this.spatialReference?.wkid;e&&r?(t.spatialReferences=e.filter((e=>e!==r)),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return Se(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return Se(t.layers,r)}writeSublayers(e,t,r,n){t.layers=[];const s=new Map,i=e.flatten((e=>{let{sublayers:t}=e;return t??[]}));for(const a of i)if("number"==typeof a.parent?.id){const e=s.get(a.parent.id);null!=e?e.push(a.id):s.set(a.parent.id,[a.id])}for(const a of i){const e={sublayer:a,...n},r=a.write({parentLayerId:"number"==typeof a.parent?.id?a.parent.id:-1},e);if(s.has(a.id)&&(r.sublayerIds=s.get(a.id)),!a.sublayers&&a.name){const r=a.write({},e);delete r.id,t.layers.push(r)}}t.visibleLayers=i.filter((e=>{let{visible:t,sublayers:r}=e;return t&&!r})).map((e=>{let{name:t}=e;return t})).toArray()}set url(e){if(!e)return void this._set("url",e);const{path:t,query:r}=(0,g.An)(e);for(const s in r)/^(request|service)$/i.test(s)&&delete r[s];const n=(0,g.a6)(t,r??{});this._set("url",n)}createExportImageParameters(e,t,r,n){const s=n?.pixelRatio??1,i=(0,I.X_)({extent:e,width:t})*s,a=new j.r({layer:this,scale:i}),{xmin:o,ymin:l,xmax:u,ymax:p,spatialReference:c}=e,d=function(e,t){let r=e.wkid;return null==t?r:(null!=r&&t.includes(r)||!e.latestWkid||(r=e.latestWkid),null!=r&&ge.has(r)?t.find((e=>ge.has(e)))||t.find((e=>be.has(e)))||102100:r)}(c,this.spatialReferences),m="1.3.0"===this.version&&(0,U.m)(d)?`${l},${o},${p},${u}`:`${o},${l},${u},${p}`,y=a.toJSON(),h="1.3.0"===this.version?"crs":"srs";return{bbox:m,[h]:null==d||isNaN(d)?void 0:"EPSG:"+d,...y}}async fetchImage(e,t,r,n){const s=this.mapUrl,i=this.createExportImageParameters(e,t,r,n);if(!i.layers){const e=document.createElement("canvas");return e.width=t,e.height=r,e}const a=fe(n?.timeExtent),o={responseType:"image",query:this._mixCustomParameters({width:t,height:r,...i,time:a,...this.refreshParameters}),signal:n?.signal};return(0,l.A)(s??"",o).then((e=>e.data))}async fetchImageBitmap(e,t,r,n){const s=this.mapUrl??"",i=this.createExportImageParameters(e,t,r,n);if(!i.layers){const e=document.createElement("canvas");return e.width=t,e.height=r,e}const a=fe(n?.timeExtent),o={responseType:"blob",query:this._mixCustomParameters({width:t,height:r,...i,time:a,...this.refreshParameters}),signal:n?.signal},{data:u}=await(0,l.A)(s,o);return(0,q.m)(u,s,n?.signal)}fetchFeatureInfo(e,t,r,n,s){const i=(0,I.X_)({extent:e,width:t}),a=function(e){const t=e.filter((e=>e.popupEnabled&&e.name&&e.queryable));return t.length?t.map((e=>{let{name:t}=e;return t})).join():null}(new j.r({layer:this,scale:i}).visibleSublayers);if(null==this.featureInfoUrl||null==a)return Promise.resolve([]);if(null==this.fetchFeatureInfoFunction&&null==this.featureInfoFormat)return Promise.resolve([]);const o="1.3.0"===this.version?{I:n,J:s}:{x:n,y:s},l={query_layers:a,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r,...o},u={...this.createExportImageParameters(e,t,r),...l},p=this._mixCustomParameters(u);return null!=this.fetchFeatureInfoFunction?this.fetchFeatureInfoFunction(p):this._defaultFetchFeatureInfoFunction((0,g.a6)(this.featureInfoUrl,p))}findSublayerById(e){return this.allSublayers.find((t=>t.id===e))}findSublayerByName(e){return this.allSublayers.find((t=>t.name===e))}serviceSupportsSpatialReference(e){return(0,T.bd)(this.url)||null!=this.spatialReferences&&this.spatialReferences.some((t=>{const r=900913===t?A.A.WebMercator:new A.A({wkid:t});return(0,E.aI)(r,e)}))}_defaultFetchFeatureInfoFunction(e){const t=document.createElement("iframe");t.src=(0,g.yM)(e),t.style.border="none",t.style.margin="0",t.style.width="100%",t.setAttribute("sandbox","");const r=new o.A({title:this.title,content:t}),n=new a.A({sourceLayer:this,popupTemplate:r});return Promise.resolve([n])}async _fetchService(e){if(!this.resourceInfo&&this.parsedUrl?.path){const{path:t,query:r}=this.parsedUrl,{data:n}=await(0,l.A)(t,{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...r,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=X(n)}if(this.parsedUrl){const e=new g.s0(this.parsedUrl.path),{httpsDomains:t}=i.A.request;"https"!==e.scheme||e.port&&"443"!==e.port||!e.host||t.includes(e.host)||t.push(e.host)}this.read(this.resourceInfo,{origin:"service"})}_checkLayerValidity(){if(!this.allSublayers.length)throw new c.A("wmslayer:empty-layer","The layer doesn't have any sublayer")}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t={...this.customParameters,...this.customLayerParameters};for(const r in t)e[r.toLowerCase()]=t[r];return e}};function Se(e,t,r){e=e??[];const n=new Map;e.every((e=>null==e.id))&&(e=(0,m.o8)(e)).forEach(((e,t)=>e.id=t));for(const i of e){const e=new k;e.read(i,t),r&&!r.includes(e.name)&&(e.visible=!1),n.set(e.id,e)}const s=[];for(const i of e){const e=null!=i.id?n.get(i.id):null;if(e)if(null!=i.parentLayerId&&i.parentLayerId>=0){const t=n.get(i.parentLayerId);if(!t)continue;t.sublayers||(t.sublayers=new u.A),t.sublayers.push(e)}else s.push(e)}return s}(0,s._)([(0,b.MZ)({readOnly:!0})],_e.prototype,"allSublayers",void 0),(0,s._)([(0,b.MZ)({json:{type:Object,write:!0}})],_e.prototype,"customParameters",void 0),(0,s._)([(0,b.MZ)({json:{type:Object,write:!0}})],_e.prototype,"customLayerParameters",void 0),(0,s._)([(0,b.MZ)({type:String,json:{write:!0}})],_e.prototype,"copyright",void 0),(0,s._)([(0,b.MZ)()],_e.prototype,"description",void 0),(0,s._)([(0,b.MZ)({readOnly:!0})],_e.prototype,"dimensions",void 0),(0,s._)([(0,b.MZ)({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],_e.prototype,"fullExtent",void 0),(0,s._)([(0,x.w)(["web-document","portal-item"],"fullExtent",["extent"])],_e.prototype,"readFullExtentFromItemOrMap",null),(0,s._)([(0,_.K)(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],_e.prototype,"writeFullExtent",null),(0,s._)([(0,b.MZ)({type:[M.A]})],_e.prototype,"fullExtents",void 0),(0,s._)([(0,b.MZ)({type:String,json:{write:{ignoreOrigin:!0}}})],_e.prototype,"featureInfoFormat",null),(0,s._)([(0,b.MZ)({type:[String],readOnly:!0})],_e.prototype,"featureInfoFormats",void 0),(0,s._)([(0,b.MZ)({type:String,json:{write:{ignoreOrigin:!0}}})],_e.prototype,"featureInfoUrl",void 0),(0,s._)([(0,b.MZ)()],_e.prototype,"fetchFeatureInfoFunction",void 0),(0,s._)([(0,b.MZ)({type:String,json:{origins:{"web-document":{default:"image/png",type:we.jsonValues,read:{reader:we.read,source:"format"},write:{writer:we.write,target:"format"}}}}})],_e.prototype,"imageFormat",void 0),(0,s._)([(0,x.w)("imageFormat",["supportedImageFormatTypes"])],_e.prototype,"readImageFormat",null),(0,s._)([(0,b.MZ)({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],_e.prototype,"imageMaxHeight",void 0),(0,s._)([(0,b.MZ)({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],_e.prototype,"imageMaxWidth",void 0),(0,s._)([(0,b.MZ)()],_e.prototype,"imageTransparency",void 0),(0,s._)([(0,b.MZ)(C.fV)],_e.prototype,"legendEnabled",void 0),(0,s._)([(0,b.MZ)({type:["show","hide","hide-children"]})],_e.prototype,"listMode",void 0),(0,s._)([(0,b.MZ)({type:String,json:{write:{ignoreOrigin:!0}}})],_e.prototype,"mapUrl",void 0),(0,s._)([(0,b.MZ)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],_e.prototype,"isReference",void 0),(0,s._)([(0,b.MZ)({type:["WMS"]})],_e.prototype,"operationalLayerType",void 0),(0,s._)([(0,b.MZ)()],_e.prototype,"resourceInfo",void 0),(0,s._)([(0,b.MZ)({type:A.A,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],_e.prototype,"spatialReference",void 0),(0,s._)([(0,x.w)(["web-document","portal-item"],"spatialReference",["spatialReferences"])],_e.prototype,"readSpatialReferenceFromItemOrDocument",null),(0,s._)([(0,b.MZ)({type:[w.jz],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],_e.prototype,"spatialReferences",void 0),(0,s._)([(0,_.K)(["web-document","portal-item"],"spatialReferences")],_e.prototype,"writeSpatialReferences",null),(0,s._)([(0,b.MZ)({type:u.A.ofType(k),json:{write:{target:"layers",overridePolicy(e,t,r){if(function(e,t){return e.some((e=>{for(const r in e)if((0,S.R)(e,r,null,t))return!0;return!1}))}(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],_e.prototype,"sublayers",void 0),(0,s._)([(0,x.w)(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],_e.prototype,"readSublayersFromItemOrMap",null),(0,s._)([(0,x.w)("service","sublayers",["layers"])],_e.prototype,"readSublayers",null),(0,s._)([(0,_.K)("sublayers",{layers:{type:[k]},visibleLayers:{type:[String]}})],_e.prototype,"writeSublayers",null),(0,s._)([(0,b.MZ)({json:{read:!1},readOnly:!0,value:"wms"})],_e.prototype,"type",void 0),(0,s._)([(0,b.MZ)(C.OZ)],_e.prototype,"url",null),(0,s._)([(0,b.MZ)({type:String,json:{write:{ignoreOrigin:!0}}})],_e.prototype,"version",void 0),_e=(0,s._)([(0,v.$)("esri.layers.WMSLayer")],_e);const Me=_e},63625:(e,t,r)=>{r.d(t,{m:()=>s});const n=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function s(e){return null!=e&&n.some((t=>{let[r,n]=t;return e>=r&&e<=n}))}},63646:(e,t,r)=>{r.d(t,{r:()=>l});var n=r(93800),s=r(6946),i=r(48602),a=(r(21265),r(50925),r(14746),r(75269));const o={visible:"visibleSublayers"};let l=class extends s.A{constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(o[e.propertyName])))],"layer"))}get layers(){return this.visibleSublayers.filter((e=>{let{name:t}=e;return t})).map((e=>{let{name:t}=e;return t})).join()}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:t}=this,r=e?.sublayers,n=[],s=e=>{const{minScale:r,maxScale:i,sublayers:a,visible:o}=e;o&&(0===t||(0===r||t<=r)&&(0===i||t>=i))&&(a?a.forEach(s):n.push(e))};return r?.forEach(s),n}toJSON(){const{layer:e,layers:t}=this,{imageFormat:r,imageTransparency:n,version:s}=e;return{format:r,request:"GetMap",service:"WMS",styles:"",transparent:n?"TRUE":"FALSE",version:s,layers:t}}};(0,n._)([(0,i.MZ)()],l.prototype,"layer",null),(0,n._)([(0,i.MZ)({readOnly:!0})],l.prototype,"layers",null),(0,n._)([(0,i.MZ)({type:Number})],l.prototype,"scale",void 0),(0,n._)([(0,i.MZ)({readOnly:!0})],l.prototype,"version",null),(0,n._)([(0,i.MZ)({readOnly:!0})],l.prototype,"visibleSublayers",null),l=(0,n._)([(0,a.$)("esri.layers.support.ExportWMSImageParameters")],l)},69953:(e,t,r)=>{r.d(t,{C:()=>a,m:()=>i});var n=r(74719),s=r(49959);async function i(e,t,r){let i;try{i=await createImageBitmap(e)}catch(a){throw new n.A("request:server",`Unable to load ${t}`,{url:t,error:a})}return(0,s.Te)(r),i}async function a(e,t,r,i,a){let o;try{o=await createImageBitmap(e)}catch(l){throw new n.A("request:server",`Unable to load tile ${t}/${r}/${i}`,{error:l,level:t,row:r,col:i})}return(0,s.Te)(a),o}}}]);