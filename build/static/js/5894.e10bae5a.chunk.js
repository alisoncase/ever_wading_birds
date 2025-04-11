"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[5894,8929],{3481:(e,t,r)=>{r.d(t,{Fq:()=>o,Yc:()=>i,Yq:()=>n});var s=r(12560);function i(e){if(null==e)return null;switch(e.type){case"polygon":case"multipoint":case"polyline":return e.extent;case"point":return new s.A({xmin:e.x,ymin:e.y,xmax:e.x,ymax:e.y,spatialReference:e.spatialReference});case"extent":return e}return null}function n(e){if(null==e)return null;const t=e.clone();return void 0!==e.cache._geVersion&&(t.cache._geVersion=e.cache._geVersion),t}function o(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}},35527:(e,t,r)=>{r.d(t,{k:()=>a});var s=r(3481),i=r(12711),n=r(51536);function o(e){if(!e)return"";const t=/(a|A|hh?|HH?|mm?|ss?|SSS|S|.)/g;let r="";for(const s of e.match(t)||[])switch(s){case"SSS":case"m":case"mm":case"h":case"hh":case"H":case"HH":case"s":case"ss":r+=s;break;case"A":case"a":r+="a";break;default:r+=`'${s}'`}return r}const l="esri.core.sql.timeonly";class a{constructor(e,t,r,s){this._hour=e,this._minute=t,this._second=r,this._millisecond=s,this.declaredRootClass=l}static isTimeOnly(e){return"object"==typeof e&&null!=e&&"declaredRootClass"in e&&e.declaredRootClass===l}get hour(){return this._hour}get minute(){return this._minute}get second(){return this._second}get millisecond(){return this._millisecond}equals(e){return a.isTimeOnly(e)&&e.hour===this.hour&&e.minute===this.minute&&e.second===this.second&&e.millisecond===this.millisecond}clone(){return new a(this.hour,this.minute,this.second,this.millisecond)}isValid(){return(0,s.Fq)(this.hour)&&(0,s.Fq)(this.minute)&&(0,s.Fq)(this.second)&&(0,s.Fq)(this.millisecond)&&this.hour>=0&&this.hour<24&&this.minute>=0&&this.minute<60&&this.second>=0&&this.second<60&&this.millisecond>=0&&this.millisecond<1e3}toString(){return`${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}:${this.second.toString().padStart(2,"0")}`+(this.millisecond>0?"."+this.millisecond.toString().padStart(3,"0"):"")}toSQLValue(){return this.toString()}toSQLWithKeyword(){return`time '${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}:${this.second.toString().padStart(2,"0")}${this.millisecond>0?"."+this.millisecond.toString().padStart(3,"0"):""}'`}toStorageString(){return`${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}:${this.second.toString().padStart(2,"0")}`}toFormat(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===e||""===e?this.toString():(e=o(e))?n.c9.local(1970,1,1,this._hour,this._minute,this._second,this._millisecond).toFormat(e,{locale:(0,i.JK)(),numberingSystem:"latn"}):""}toNumber(){return this.millisecond+1e3*this.second+1e3*this.minute*60+60*this.hour*60*1e3}static fromParts(e,t,r,s){const i=new a(e,t,r,s);return i.isValid()?i:null}static fromReader(e){if(!e)return null;const t=e.split(":");return 3!==t.length?null:new a(parseInt(t[0],10),parseInt(t[1],10),parseInt(t[2],10),0)}static fromMilliseconds(e){if(e>864e5||e<0)return null;const t=Math.floor(e/1e3%60),r=Math.floor(e/6e4%60),s=Math.floor(e/36e5%24),i=Math.floor(e%1e3);return new a(s,r,t,i)}static fromDateJS(e){return new a(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds())}static fromDateTime(e){return new a(e.hour,e.minute,e.second,e.millisecond)}static fromSqlTimeStampOffset(e){return this.fromDateTime(e.toDateTime())}static fromString(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(""===e)return null;if(null===e)return null;const r=[];t?(t=o(t))&&r.push(t):null!==t&&""!==t||(r.push("HH:mm:ss"),r.push("HH:mm:ss.SSS"),r.push("hh:mm:ss a"),r.push("hh:mm:ss.SSS a"),r.push("HH:mm"),r.push("hh:mm a"),r.push("H:mm"),r.push("h:mm a"),r.push("H:mm:ss"),r.push("h:mm:ss a"),r.push("H:mm:ss.SSS"),r.push("h:mm:ss.SSS a"));for(const s of r){const t=n.c9.fromFormat(e,s);if(t.isValid)return new a(t.hour,t.minute,t.second,t.millisecond)}return null}plus(e,t){switch(e){case"days":case"years":case"months":return this.clone();case"hours":case"minutes":case"seconds":case"milliseconds":return a.fromDateTime(this.toUTCDateTime().plus({[e]:t}))}return null}toUTCDateTime(){return n.c9.utc(1970,1,1,this.hour,this.minute,this.second,this.millisecond)}difference(e,t){switch(t.toLowerCase()){case"days":case"day":case"d":return this.toUTCDateTime().diff(e.toUTCDateTime(),"days").days;case"months":case"month":return this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months;case"minutes":case"minute":case"m":return"M"===t?this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months:this.toUTCDateTime().diff(e.toUTCDateTime(),"minutes").minutes;case"seconds":case"second":case"s":return this.toUTCDateTime().diff(e.toUTCDateTime(),"seconds").seconds;case"milliseconds":case"millisecond":case"ms":default:return this.toUTCDateTime().diff(e.toUTCDateTime(),"milliseconds").milliseconds;case"hours":case"hour":case"h":return this.toUTCDateTime().diff(e.toUTCDateTime(),"hours").hours;case"years":case"year":case"y":return this.toUTCDateTime().diff(e.toUTCDateTime(),"years").years}}}},39817:(e,t,r)=>{r.d(t,{A:()=>i});var s=r(42080);class i{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this.lengths=e??[],this.coords=t??[]}static fromJSON(e){return new i(e.lengths,e.coords)}static fromRect(e){const[t,r,s,n]=e,o=s-t,l=n-r;return new i([5],[t,r,o,0,0,l,-o,0,0,-l])}get isPoint(){return 0===this.lengths.length&&this.coords.length>=2}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((e,t)=>e+t))}get usedMemory(){return 64+(0,s.Qf)(this.lengths,this.coords)}area(){let e=0,t=0;if(!this.lengths.length)return 0;for(let r=0;r<this.lengths.length;r++){const s=this.lengths[r];if(s<3)continue;let i=this.coords[2*t],n=this.coords[2*t+1];for(let r=1;r<s;r+=1){const s=this.coords[2*(r+t)],o=this.coords[2*(r+t)+1];e+=-.5*(s-i)*(o+n),i=s,n=o}t+=s}return e}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let r=0;r<this.lengths.length;r++){const s=this.lengths[r];for(let r=0;r<s;r++)e(this.coords[2*(r+t)],this.coords[2*(r+t)+1]);t+=s}}deltaDecode(){const e=this.clone(),{coords:t,lengths:r}=e;let s=0;for(const i of r){for(let e=1;e<i;e++)t[2*(s+e)]+=t[2*(s+e)-2],t[2*(s+e)+1]+=t[2*(s+e)-1];s+=i}return e}clone(e){if(0===this.lengths.length)return new i([],[this.coords[0],this.coords[1]]);const t=2*(0===this.lengths.length?1:this.lengths.reduce(((e,t)=>e+t))),r=this.coords.slice(0,t);return e?(e.set(r),new i(this.lengths,e)):new i(Array.from(this.lengths),Array.from(r))}}},40602:(e,t,r)=>{function s(e,t){return e?t?4:3:t?3:2}function i(e,t,r,i){if(!t?.lengths.length)return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const l=e.coords,a=[],c=r?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:u,coords:h}=t,d=s(r,i);let m=0;for(const s of u){const e=n(c,h,m,s,r,i);e&&a.push(e),m+=s*d}if(a.sort(((e,t)=>{let s=e[2]-t[2];return 0===s&&r&&(s=e[4]-t[4]),s})),a.length){let e=6*a[0][2];l[0]=a[0][0]/e,l[1]=a[0][1]/e,r&&(e=6*a[0][4],l[2]=0!==e?a[0][3]/e:0),(l[0]<c[0]||l[0]>c[1]||l[1]<c[2]||l[1]>c[3]||r&&(l[2]<c[4]||l[2]>c[5]))&&(l.length=0)}if(!l.length){const e=t.lengths[0]?o(h,0,u[0],r,i):null;if(!e)return null;l[0]=e[0],l[1]=e[1],r&&e.length>2&&(l[2]=e[2])}return e}function n(e,t,r,i,n,o){const l=s(n,o);let a=r,c=r+l,u=0,h=0,d=0,m=0,y=0;for(let s=0,g=i-1;s<g;s++,a+=l,c+=l){const r=t[a],s=t[a+1],i=t[a+2],o=t[c],l=t[c+1],f=t[c+2];let g=r*l-o*s;m+=g,u+=(r+o)*g,h+=(s+l)*g,n&&(g=r*f-o*i,d+=(i+f)*g,y+=g),r<e[0]&&(e[0]=r),r>e[1]&&(e[1]=r),s<e[2]&&(e[2]=s),s>e[3]&&(e[3]=s),n&&(i<e[4]&&(e[4]=i),i>e[5]&&(e[5]=i))}if(m>0&&(m*=-1),y>0&&(y*=-1),!m)return null;const f=[u,h,.5*m];return n&&(f[3]=d,f[4]=.5*y),f}function o(e,t,r,i,n){const o=s(i,n);let h=t,d=t+o,m=0,y=0,f=0,g=0;for(let s=0,T=r-1;s<T;s++,h+=o,d+=o){const t=e[h],r=e[h+1],s=e[h+2],n=e[d],o=e[d+1],T=e[d+2],p=i?a(t,r,s,n,o,T):l(t,r,n,o);if(p)if(m+=p,i){const e=u(t,r,s,n,o,T);y+=p*e[0],f+=p*e[1],g+=p*e[2]}else{const e=c(t,r,n,o);y+=p*e[0],f+=p*e[1]}}return m>0?i?[y/m,f/m,g/m]:[y/m,f/m]:r>0?i?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function l(e,t,r,s){const i=r-e,n=s-t;return Math.sqrt(i*i+n*n)}function a(e,t,r,s,i,n){const o=s-e,l=i-t,a=n-r;return Math.sqrt(o*o+l*l+a*a)}function c(e,t,r,s){return[e+.5*(r-e),t+.5*(s-t)]}function u(e,t,r,s,i,n){return[e+.5*(s-e),t+.5*(i-t),r+.5*(n-r)]}r.d(t,{Q:()=>i})},42080:(e,t,r)=>{r.d(t,{Qf:()=>a,Qh:()=>o,RS:()=>i,ez:()=>h,i5:()=>d,lM:()=>n,qK:()=>u});var s=r(25048);const i=16;function n(e){if(!e)return 0;let t=u;for(const r in e)e.hasOwnProperty(r)&&(t+=l(e[r],!1));return t}function o(e){if(!e)return 0;if("number"==typeof e[0])return a(e);if(Array.isArray(e))return function(e){const t=e.length;if(0===t||"number"==typeof e[0])return c(e,8);let r=h;for(let s=0;s<t;s++)r+=l(e[s]);return r}(e);let t=u;for(const r in e)e.hasOwnProperty(r)&&(t+=l(e[r]));return t}function l(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];switch(typeof e){case"object":return t?o(e):u;case"string":return function(e){return 32+e.length}(e);case"number":return i;case"boolean":return 4;default:return 8}}function a(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce(((e,t)=>e+(t?(0,s.iu)(t)?t.byteLength+d:Array.isArray(t)?c(t,i):0:0)),0)}function c(e,t){return h+e.length*t}const u=32,h=16,d=145},52579:(e,t,r)=>{r.d(t,{A:()=>s});class s{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new s;return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}},67011:(e,t,r)=>{r.d(t,{N3:()=>l,Om:()=>o});var s=r(42080),i=r(40602),n=r(39817);class o{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;this.geometry=e,this.attributes=t,this.centroid=r,this.objectId=s,this.displayId=i}static fromJSON(e){const t=e.geometry?n.A.fromJSON(e.geometry):null,r=e.centroid?n.A.fromJSON(e.centroid):null,s=e.objectId;return new o(t,e.attributes,r,s)}weakClone(){const e=new o(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e}clone(){const e=this.geometry?.clone(),t=new o(e,{...this.attributes},this.centroid?.clone(),this.objectId);return t.displayId=this.displayId,t}ensureCentroid(e){return this.centroid??=(0,i.Q)(new n.A,this.geometry,e.hasZ,e.hasM),this.centroid}get usedMemory(){return 128+(0,s.lM)(this.attributes)+(this.geometry?.usedMemory??0)}}function l(e){return!!e.geometry?.coords?.length}},70612:(e,t,r)=>{r.d(t,{$P:()=>m,At:()=>I,J6:()=>i,JB:()=>b,Lk:()=>y,NI:()=>N,Qi:()=>D,eB:()=>w,eg:()=>T,f0:()=>g,gO:()=>p,ik:()=>S,ke:()=>h,nE:()=>d,rX:()=>f,yT:()=>F,zl:()=>s});var s,i,n,o=r(10844),l=r(73974),a=r(35527),c=r(50616),u=r(51536);function h(e){return c.A.fromJSON(e.toJSON())}function d(e){return e.toJSON?e.toJSON():e}function m(e){return e instanceof Date}function y(e){return e instanceof u.c9}function f(e){return e instanceof o.lY}function g(e){return e instanceof l.n}function T(e){return e instanceof a.k}(n=s||(s={}))[n.Standardised=0]="Standardised",n[n.StandardisedNoInterval=1]="StandardisedNoInterval",n[n.SqlServer=2]="SqlServer",n[n.Oracle=3]="Oracle",n[n.Postgres=4]="Postgres",n[n.PGDB=5]="PGDB",n[n.FILEGDB=6]="FILEGDB",n[n.NotEvaluated=7]="NotEvaluated",function(e){e[e.InFeatureSet=0]="InFeatureSet",e[e.NotInFeatureSet=1]="NotInFeatureSet",e[e.Unknown=2]="Unknown"}(i||(i={}));const p=1e3;const S={point:"point",polygon:"polygon",polyline:"polyline",multipoint:"multipoint",extent:"extent",esriGeometryPoint:"point",esriGeometryPolygon:"polygon",esriGeometryPolyline:"polyline",esriGeometryMultipoint:"multipoint",esriGeometryEnvelope:"extent",envelope:"extent"},F={point:"esriGeometryPoint",polygon:"esriGeometryPolygon",polyline:"esriGeometryPolyline",multipoint:"esriGeometryMultipoint",extent:"esriGeometryEnvelope",esriGeometryPoint:"esriGeometryPoint",esriGeometryPolygon:"esriGeometryPolygon",esriGeometryPolyline:"esriGeometryPolyline",esriGeometryMultipoint:"esriGeometryMultipoint",esriGeometryEnvelope:"esriGeometryEnvelope",envelope:"esriGeometryEnvelope"},I={"small-integer":"esriFieldTypeSmallInteger",integer:"esriFieldTypeInteger",long:"esriFieldTypeLong",single:"esriFieldTypeSingle",double:"esriFieldTypeDouble",string:"esriFieldTypeString",date:"esriFieldTypeDate","date-only":"esriFieldTypeDateOnly","time-only":"esriFieldTypeTimeOnly","timestamp-offset":"esriFieldTypeTimestampOffset",oid:"esriFieldTypeOID",geometry:"esriFieldTypeGeometry",blob:"esriFieldTypeBlob",raster:"esriFieldTypeRaster",guid:"esriFieldTypeGUID","global-id":"esriFieldTypeGlobalID",xml:"esriFieldTypeXML","big-integer":"esriFieldTypeBigInteger",esriFieldTypeSmallInteger:"esriFieldTypeSmallInteger",esriFieldTypeInteger:"esriFieldTypeInteger",esriFieldTypeLong:"esriFieldTypeLong",esriFieldTypeSingle:"esriFieldTypeSingle",esriFieldTypeDouble:"esriFieldTypeDouble",esriFieldTypeString:"esriFieldTypeString",esriFieldTypeDate:"esriFieldTypeDate",esriFieldTypeDateOnly:"esriFieldTypeDateOnly",esriFieldTypeTimeOnly:"esriFieldTypeTimeOnly",esriFieldTypeTimestampOffset:"esriFieldTypeTimestampOffset",esriFieldTypeOID:"esriFieldTypeOID",esriFieldTypeGeometry:"esriFieldTypeGeometry",esriFieldTypeBlob:"esriFieldTypeBlob",esriFieldTypeRaster:"esriFieldTypeRaster",esriFieldTypeGUID:"esriFieldTypeGUID",esriFieldTypeGlobalID:"esriFieldTypeGlobalID",esriFieldTypeXML:"esriFieldTypeXML",esriFieldTypeBigInteger:"esriFieldTypeBigInteger"};function D(e){return void 0===e?"":e=(e=(e=e.replace(/\/featureserver\/[0-9]*/i,"/FeatureServer")).replace(/\/mapserver\/[0-9]*/i,"/MapServer")).split("?")[0]}function b(e,t){t||(t={}),"function"==typeof t&&(t={cmp:t});const r="boolean"==typeof t.cycles&&t.cycles,s=t.cmp&&(i=t.cmp,function(e){return function(t,r){const s={key:t,value:e[t]},n={key:r,value:e[r]};return i(s,n)}});var i;const n=[];return function e(t){if(t?.toJSON&&"function"==typeof t.toJSON&&(t=t.toJSON()),void 0===t)return;if("number"==typeof t)return isFinite(t)?""+t:"null";if("object"!=typeof t)return JSON.stringify(t);let i,o;if(Array.isArray(t)){for(o="[",i=0;i<t.length;i++)i&&(o+=","),o+=e(t[i])||"null";return o+"]"}if(null===t)return"null";if(n.includes(t)){if(r)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}const l=n.push(t)-1,a=Object.keys(t).sort(s?.(t));for(o="",i=0;i<a.length;i++){const r=a[i],s=e(t[r]);s&&(o&&(o+=","),o+=JSON.stringify(r)+":"+s)}return n.splice(l,1),"{"+o+"}"}(e)}function N(e){switch(e.type){case"catalog":case"csv":case"feature":case"geojson":case"knowledge-graph-sublayer":case"oriented-imagery":case"subtype-group":case"wfs":return!0;default:return!1}}function w(e){switch(e.type){case"catalog-footprint":case"subtype-sublayer":return!0;default:return N(e)}}},73974:(e,t,r)=>{r.d(t,{n:()=>a});var s=r(10844),i=r(12711),n=r(51536);function o(e){e=e.replaceAll(/LTS|LT|L{1,4}|l{1,4}/g,"[$&]");let t="";const r=/(\[[^[]*\])|(\\)?([Hh]mm(ss)?|Mo|M{1,4}|Do|DDDo|D{1,4}|d{2,4}|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;for(const s of e.match(r)||[])switch(s){case"D":t+="d";break;case"DD":t+="dd";break;case"DDD":t+="o";break;case"d":t+="c";break;case"ddd":t+="ccc";break;case"dddd":t+="cccc";break;case"M":t+="L";break;case"MM":t+="LL";break;case"MMM":t+="LLL";break;case"MMMM":t+="LLLL";break;case"YY":t+="yy";break;case"Y":case"YYYY":t+="yyyy";break;case"Q":t+="q";break;case"X":case"x":t+=s;break;default:s.length>=2&&"["===s.slice(0,1)&&"]"===s.slice(-1)?t+=`'${s.slice(1,-1)}'`:t+=`'${s}'`}return t}const l="esri.core.sql.dateonly";class a{constructor(e,t,r){this._year=e,this._month=t,this._day=r,this.declaredRootClass=l}static isDateOnly(e){return"object"==typeof e&&null!=e&&"declaredRootClass"in e&&e.declaredRootClass===l}get month(){return this._month}get monthJS(){return this._month-1}get year(){return this._year}get day(){return this._day}get isValid(){return this.toDateTime("unknown").isValid}equals(e){return a.isDateOnly(e)&&e.day===this.day&&e.month===this.month&&e.year===this.year}clone(){return new a(this._year,this._month,this._day)}toDateTime(e){return n.c9.fromObject({day:this.day,month:this.month,year:this.year},{zone:(0,s.mT)(e)})}toDateTimeLuxon(e){return n.c9.fromObject({day:this.day,month:this.month,year:this.year},{zone:(0,s.mT)(e)})}toString(){return`${this.year.toString().padStart(4,"0")}-${this.month.toString().padStart(2,"0")}-${this.day.toString().padStart(2,"0")}`}toFormat(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(null===e||""===e)return this.toString();if(t&&(e=o(e)),!e)return"";const r=this.toDateTime("unknown");return s.lY.dateTimeToArcadeDate(r).toFormat(e,{locale:(0,i.JK)(),numberingSystem:"latn"})}toArcadeDate(){const e=this.toDateTime("unknown");return s.lY.dateTimeToArcadeDate(e)}toNumber(){return this.toDateTime("unknown").toMillis()}toJSDate(){return this.toDateTime("unknown").toJSDate()}toStorageFormat(){return this.toFormat("yyyy-LL-dd",!1)}toSQLValue(){return this.toFormat("yyyy-LL-dd",!1)}toSQLWithKeyword(){return"date '"+this.toFormat("yyyy-LL-dd",!1)+"'"}plus(e,t){return a.fromDateTime(this.toUTCDateTime().plus({[e]:t}))}toUTCDateTime(){return n.c9.utc(this.year,this.month,this.day,0,0,0,0)}difference(e,t){switch(t.toLowerCase()){case"days":case"day":case"d":return this.toUTCDateTime().diff(e.toUTCDateTime(),"days").days;case"months":case"month":return this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months;case"minutes":case"minute":case"m":return"M"===t?this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months:this.toUTCDateTime().diff(e.toUTCDateTime(),"minutes").minutes;case"seconds":case"second":case"s":return this.toUTCDateTime().diff(e.toUTCDateTime(),"seconds").seconds;case"milliseconds":case"millisecond":case"ms":default:return this.toUTCDateTime().diff(e.toUTCDateTime(),"milliseconds").milliseconds;case"hours":case"hour":case"h":return this.toUTCDateTime().diff(e.toUTCDateTime(),"hours").hours;case"years":case"year":case"y":return this.toUTCDateTime().diff(e.toUTCDateTime(),"years").years}}static fromMilliseconds(e){const t=n.c9.fromMillis(e,{zone:n.mQ.utcInstance});return t.isValid?a.fromParts(t.year,t.month,t.day):null}static fromSeconds(e){const t=n.c9.fromSeconds(e,{zone:n.mQ.utcInstance});return t.isValid?a.fromParts(t.year,t.month,t.day):null}static fromReader(e){if(!e)return null;const t=e.split("-");return 3!==t.length?null:new a(parseInt(t[0],10),parseInt(t[1],10),parseInt(t[2],10))}static fromParts(e,t,r){const s=new a(e,t,r);return!1===s.isValid?null:s}static fromDateJS(e){return a.fromParts(e.getFullYear(),e.getMonth()+1,e.getDay())}static fromDateTime(e){return a.fromParts(e.year,e.month,e.day)}static fromSqlTimeStampOffset(e){return this.fromDateTime(e.toDateTime())}static fromString(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(""===e)return null;if(null===e)return null;const r=[];if(t)(t=o(t))&&r.push(t);else if(null===t||""===t){const t=n.c9.fromISO(e,{setZone:!0});return t.isValid?a.fromParts(t.year,t.month,t.day):null}for(const s of r){const r=n.c9.fromFormat(e,t??s);if(r.isValid)return new a(r.year,r.month,r.day)}return null}static fromNow(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"system";const t=n.c9.fromJSDate(new Date).setZone((0,s.mT)(e));return new a(t.year,t.month,t.day)}}}}]);