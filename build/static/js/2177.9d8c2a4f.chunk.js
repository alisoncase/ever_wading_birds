"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[2177],{3481:(t,e,s)=>{s.d(e,{Fq:()=>a,Yc:()=>r,Yq:()=>n});var i=s(12560);function r(t){if(null==t)return null;switch(t.type){case"polygon":case"multipoint":case"polyline":return t.extent;case"point":return new i.A({xmin:t.x,ymin:t.y,xmax:t.x,ymax:t.y,spatialReference:t.spatialReference});case"extent":return t}return null}function n(t){if(null==t)return null;const e=t.clone();return void 0!==t.cache._geVersion&&(e.cache._geVersion=t.cache._geVersion),e}function a(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t}},10020:(t,e,s)=>{s.r(e),s.d(e,{WhereClauseCache:()=>n});var i=s(76612),r=s(60897);class n{constructor(t,e){this._cache=new i.q(t),this._invalidCache=new i.q(e)}get(t,e){const s=`${e?.uid}:${t}`,i=this._cache.get(s);if(i)return i;if(null!=this._invalidCache.get(s))return null;try{const i=r.default.create(t,{fieldsIndex:e});return this._cache.put(s,i),i}catch(n){return this._invalidCache.put(s,n),null}}getError(t,e){const s=`${e?.uid}:${t}`;return this._invalidCache.get(s)??null}}},35527:(t,e,s)=>{s.d(e,{k:()=>c});var i=s(3481),r=s(12711),n=s(51536);function a(t){if(!t)return"";const e=/(a|A|hh?|HH?|mm?|ss?|SSS|S|.)/g;let s="";for(const i of t.match(e)||[])switch(i){case"SSS":case"m":case"mm":case"h":case"hh":case"H":case"HH":case"s":case"ss":s+=i;break;case"A":case"a":s+="a";break;default:s+=`'${i}'`}return s}const o="esri.core.sql.timeonly";class c{constructor(t,e,s,i){this._hour=t,this._minute=e,this._second=s,this._millisecond=i,this.declaredRootClass=o}static isTimeOnly(t){return"object"==typeof t&&null!=t&&"declaredRootClass"in t&&t.declaredRootClass===o}get hour(){return this._hour}get minute(){return this._minute}get second(){return this._second}get millisecond(){return this._millisecond}equals(t){return c.isTimeOnly(t)&&t.hour===this.hour&&t.minute===this.minute&&t.second===this.second&&t.millisecond===this.millisecond}clone(){return new c(this.hour,this.minute,this.second,this.millisecond)}isValid(){return(0,i.Fq)(this.hour)&&(0,i.Fq)(this.minute)&&(0,i.Fq)(this.second)&&(0,i.Fq)(this.millisecond)&&this.hour>=0&&this.hour<24&&this.minute>=0&&this.minute<60&&this.second>=0&&this.second<60&&this.millisecond>=0&&this.millisecond<1e3}toString(){return`${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}:${this.second.toString().padStart(2,"0")}`+(this.millisecond>0?"."+this.millisecond.toString().padStart(3,"0"):"")}toSQLValue(){return this.toString()}toSQLWithKeyword(){return`time '${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}:${this.second.toString().padStart(2,"0")}${this.millisecond>0?"."+this.millisecond.toString().padStart(3,"0"):""}'`}toStorageString(){return`${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}:${this.second.toString().padStart(2,"0")}`}toFormat(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t||""===t?this.toString():(t=a(t))?n.c9.local(1970,1,1,this._hour,this._minute,this._second,this._millisecond).toFormat(t,{locale:(0,r.JK)(),numberingSystem:"latn"}):""}toNumber(){return this.millisecond+1e3*this.second+1e3*this.minute*60+60*this.hour*60*1e3}static fromParts(t,e,s,i){const r=new c(t,e,s,i);return r.isValid()?r:null}static fromReader(t){if(!t)return null;const e=t.split(":");return 3!==e.length?null:new c(parseInt(e[0],10),parseInt(e[1],10),parseInt(e[2],10),0)}static fromMilliseconds(t){if(t>864e5||t<0)return null;const e=Math.floor(t/1e3%60),s=Math.floor(t/6e4%60),i=Math.floor(t/36e5%24),r=Math.floor(t%1e3);return new c(i,s,e,r)}static fromDateJS(t){return new c(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds())}static fromDateTime(t){return new c(t.hour,t.minute,t.second,t.millisecond)}static fromSqlTimeStampOffset(t){return this.fromDateTime(t.toDateTime())}static fromString(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(""===t)return null;if(null===t)return null;const s=[];e?(e=a(e))&&s.push(e):null!==e&&""!==e||(s.push("HH:mm:ss"),s.push("HH:mm:ss.SSS"),s.push("hh:mm:ss a"),s.push("hh:mm:ss.SSS a"),s.push("HH:mm"),s.push("hh:mm a"),s.push("H:mm"),s.push("h:mm a"),s.push("H:mm:ss"),s.push("h:mm:ss a"),s.push("H:mm:ss.SSS"),s.push("h:mm:ss.SSS a"));for(const i of s){const e=n.c9.fromFormat(t,i);if(e.isValid)return new c(e.hour,e.minute,e.second,e.millisecond)}return null}plus(t,e){switch(t){case"days":case"years":case"months":return this.clone();case"hours":case"minutes":case"seconds":case"milliseconds":return c.fromDateTime(this.toUTCDateTime().plus({[t]:e}))}return null}toUTCDateTime(){return n.c9.utc(1970,1,1,this.hour,this.minute,this.second,this.millisecond)}difference(t,e){switch(e.toLowerCase()){case"days":case"day":case"d":return this.toUTCDateTime().diff(t.toUTCDateTime(),"days").days;case"months":case"month":return this.toUTCDateTime().diff(t.toUTCDateTime(),"months").months;case"minutes":case"minute":case"m":return"M"===e?this.toUTCDateTime().diff(t.toUTCDateTime(),"months").months:this.toUTCDateTime().diff(t.toUTCDateTime(),"minutes").minutes;case"seconds":case"second":case"s":return this.toUTCDateTime().diff(t.toUTCDateTime(),"seconds").seconds;case"milliseconds":case"millisecond":case"ms":default:return this.toUTCDateTime().diff(t.toUTCDateTime(),"milliseconds").milliseconds;case"hours":case"hour":case"h":return this.toUTCDateTime().diff(t.toUTCDateTime(),"hours").hours;case"years":case"year":case"y":return this.toUTCDateTime().diff(t.toUTCDateTime(),"years").years}}}},73974:(t,e,s)=>{s.d(e,{n:()=>c});var i=s(10844),r=s(12711),n=s(51536);function a(t){t=t.replaceAll(/LTS|LT|L{1,4}|l{1,4}/g,"[$&]");let e="";const s=/(\[[^[]*\])|(\\)?([Hh]mm(ss)?|Mo|M{1,4}|Do|DDDo|D{1,4}|d{2,4}|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;for(const i of t.match(s)||[])switch(i){case"D":e+="d";break;case"DD":e+="dd";break;case"DDD":e+="o";break;case"d":e+="c";break;case"ddd":e+="ccc";break;case"dddd":e+="cccc";break;case"M":e+="L";break;case"MM":e+="LL";break;case"MMM":e+="LLL";break;case"MMMM":e+="LLLL";break;case"YY":e+="yy";break;case"Y":case"YYYY":e+="yyyy";break;case"Q":e+="q";break;case"X":case"x":e+=i;break;default:i.length>=2&&"["===i.slice(0,1)&&"]"===i.slice(-1)?e+=`'${i.slice(1,-1)}'`:e+=`'${i}'`}return e}const o="esri.core.sql.dateonly";class c{constructor(t,e,s){this._year=t,this._month=e,this._day=s,this.declaredRootClass=o}static isDateOnly(t){return"object"==typeof t&&null!=t&&"declaredRootClass"in t&&t.declaredRootClass===o}get month(){return this._month}get monthJS(){return this._month-1}get year(){return this._year}get day(){return this._day}get isValid(){return this.toDateTime("unknown").isValid}equals(t){return c.isDateOnly(t)&&t.day===this.day&&t.month===this.month&&t.year===this.year}clone(){return new c(this._year,this._month,this._day)}toDateTime(t){return n.c9.fromObject({day:this.day,month:this.month,year:this.year},{zone:(0,i.mT)(t)})}toDateTimeLuxon(t){return n.c9.fromObject({day:this.day,month:this.month,year:this.year},{zone:(0,i.mT)(t)})}toString(){return`${this.year.toString().padStart(4,"0")}-${this.month.toString().padStart(2,"0")}-${this.day.toString().padStart(2,"0")}`}toFormat(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(null===t||""===t)return this.toString();if(e&&(t=a(t)),!t)return"";const s=this.toDateTime("unknown");return i.lY.dateTimeToArcadeDate(s).toFormat(t,{locale:(0,r.JK)(),numberingSystem:"latn"})}toArcadeDate(){const t=this.toDateTime("unknown");return i.lY.dateTimeToArcadeDate(t)}toNumber(){return this.toDateTime("unknown").toMillis()}toJSDate(){return this.toDateTime("unknown").toJSDate()}toStorageFormat(){return this.toFormat("yyyy-LL-dd",!1)}toSQLValue(){return this.toFormat("yyyy-LL-dd",!1)}toSQLWithKeyword(){return"date '"+this.toFormat("yyyy-LL-dd",!1)+"'"}plus(t,e){return c.fromDateTime(this.toUTCDateTime().plus({[t]:e}))}toUTCDateTime(){return n.c9.utc(this.year,this.month,this.day,0,0,0,0)}difference(t,e){switch(e.toLowerCase()){case"days":case"day":case"d":return this.toUTCDateTime().diff(t.toUTCDateTime(),"days").days;case"months":case"month":return this.toUTCDateTime().diff(t.toUTCDateTime(),"months").months;case"minutes":case"minute":case"m":return"M"===e?this.toUTCDateTime().diff(t.toUTCDateTime(),"months").months:this.toUTCDateTime().diff(t.toUTCDateTime(),"minutes").minutes;case"seconds":case"second":case"s":return this.toUTCDateTime().diff(t.toUTCDateTime(),"seconds").seconds;case"milliseconds":case"millisecond":case"ms":default:return this.toUTCDateTime().diff(t.toUTCDateTime(),"milliseconds").milliseconds;case"hours":case"hour":case"h":return this.toUTCDateTime().diff(t.toUTCDateTime(),"hours").hours;case"years":case"year":case"y":return this.toUTCDateTime().diff(t.toUTCDateTime(),"years").years}}static fromMilliseconds(t){const e=n.c9.fromMillis(t,{zone:n.mQ.utcInstance});return e.isValid?c.fromParts(e.year,e.month,e.day):null}static fromSeconds(t){const e=n.c9.fromSeconds(t,{zone:n.mQ.utcInstance});return e.isValid?c.fromParts(e.year,e.month,e.day):null}static fromReader(t){if(!t)return null;const e=t.split("-");return 3!==e.length?null:new c(parseInt(e[0],10),parseInt(e[1],10),parseInt(e[2],10))}static fromParts(t,e,s){const i=new c(t,e,s);return!1===i.isValid?null:i}static fromDateJS(t){return c.fromParts(t.getFullYear(),t.getMonth()+1,t.getDay())}static fromDateTime(t){return c.fromParts(t.year,t.month,t.day)}static fromSqlTimeStampOffset(t){return this.fromDateTime(t.toDateTime())}static fromString(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(""===t)return null;if(null===t)return null;const s=[];if(e)(e=a(e))&&s.push(e);else if(null===e||""===e){const e=n.c9.fromISO(t,{setZone:!0});return e.isValid?c.fromParts(e.year,e.month,e.day):null}for(const i of s){const s=n.c9.fromFormat(t,e??i);if(s.isValid)return new c(s.year,s.month,s.day)}return null}static fromNow(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"system";const e=n.c9.fromJSDate(new Date).setZone((0,i.mT)(t));return new c(e.year,e.month,e.day)}}}}]);