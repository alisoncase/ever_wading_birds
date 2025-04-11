"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[84875],{36357:(e,t,n)=>{function i(e){return null!=s(e)||null!=o(e)}function r(e){return a.test(e)}function l(e){return s(e)??o(e)}function o(e){const t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;let n=!0;if(u&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,i=0;for(;!t&&i<=e.length;)t=!c.test(e[i]),i++;n=!t}}return n}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function s(e){const t=a.exec(e);if(!t?.groups)return null;const n=t.groups,i=+n.year,r=+n.month-1,l=+n.day,o=+(n.hours??"0"),s=+(n.minutes??"0"),c=+(n.seconds??"0");if(o>23)return null;if(s>59)return null;if(c>59)return null;const u=n.ms??"0",d=u?+u.padEnd(3,"0").slice(0,3):0;let f;if(n.isUTC||!n.offsetSign)f=Date.UTC(i,r,l,o,s,c,d);else{const e=+n.offsetHours,t=+n.offsetMinutes;f=6e4*("+"===n.offsetSign?-1:1)*(60*e+t)+Date.UTC(i,r,l,o,s,c,d)}return Number.isNaN(f)?null:f}n.d(t,{Br:()=>r,Cq:()=>i,_U:()=>l});const a=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;const c=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,u=!Number.isNaN(new Date("technology 10").getTime())},60064:(e,t,n)=>{n.d(t,{B:()=>c,GP:()=>s,ZY:()=>o,qg:()=>u});var i=n(56612),r=n(12711);const l={ar:[".",","],bg:[",","\xa0"],bs:[",","."],ca:[",","."],cs:[",","\xa0"],da:[",","."],de:[",","."],"de-ch":[".","\u2019"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[",","\xa0"],fi:[",","\xa0"],fr:[",","\u202f"],"fr-ch":[",","\u202f"],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[",","\xa0"],id:[",","."],it:[",","."],"it-ch":[".","\u2019"],ja:[".",","],ko:[".",","],lt:[",","\xa0"],lv:[",","\xa0"],mk:[",","."],nb:[",","\xa0"],nl:[",","."],no:[",","\xa0"],pl:[",","\xa0"],pt:[",","."],"pt-pt":[",","\xa0"],ro:[",","."],ru:[",","\xa0"],sk:[",","\xa0"],sl:[",","."],sr:[",","."],sv:[",","\xa0"],th:[".",","],tr:[",","."],uk:[",","\xa0"],vi:[",","."],zh:[".",","]};function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,r.JK)(),t=(e=e.toLowerCase())in l;if(!t){const n=e.split("-");n.length>1&&n[0]in l&&(e=n[0],t=!0),t||(e="en")}const[n,i,o="#,##0.###"]=l[e];return{decimal:n,group:i,pattern:o}}function s(e,t){const n=o((t={...t}).locale);t.customs=n;const i=t.pattern||n.pattern;return isNaN(e)||Math.abs(e)===1/0?null:function(e,t,n){const i=(n=n||{}).customs.group,r=n.customs.decimal,l=t.split(";"),o=l[0];if((t=l[e<0?1:0]||"-"+o).includes("%"))e*=100;else if(t.includes("\u2030"))e*=1e3;else{if(t.includes("\xa4"))throw new Error("currency notation not supported");if(t.includes("E"))throw new Error("exponential notation not supported")}const s=a,c=o.match(s);if(!c)throw new Error("unable to find a number expression in pattern: "+t);return!1===n.fractional&&(n.places=0),t.replace(s,function(e,t,n){!0===(n=n||{}).places&&(n.places=0),n.places===1/0&&(n.places=6);const i=t.split("."),r="string"==typeof n.places&&n.places.indexOf(",");let l=n.places;r?l=n.places.slice(r+1):+l>=0||(l=(i[1]||[]).length),n.round<0||(e=Number(e.toFixed(Number(l))));const o=String(Math.abs(e)).split("."),s=o[1]||"";if(i[1]||n.places){r&&(n.places=n.places.slice(0,Math.max(0,r)));const e=void 0!==n.places?n.places:i[1]&&i[1].lastIndexOf("0")+1;+e>s.length&&(o[1]=s.padEnd(Number(e),"0")),+l<s.length&&(o[1]=s.slice(0,Math.max(0,Number(l))))}else o[1]&&o.pop();const a=i[0].replace(",","");let c=a.indexOf("0");-1!==c&&(c=a.length-c,c>o[0].length&&(o[0]=o[0].padStart(c,"0")),a.includes("#")||(o[0]=o[0].slice(-c)));let u,d,f=i[0].lastIndexOf(",");if(-1!==f){u=i[0].length-f-1;const e=i[0].slice(0,f);f=e.lastIndexOf(","),-1!==f&&(d=e.length-f-1)}const p=[];for(let g=o[0];g;){const e=g.length-u;p.push(e>0?g.slice(Math.max(0,e)):g),g=e>0?g.slice(0,e):"",d&&(u=d,d=void 0)}return o[0]=p.reverse().join(n.group||","),o.join(n.decimal||".")}(e,c[0],{decimal:r,group:i,places:n.places,round:n.round}))}(e,i,t)}const a=/[#0,]*[#0](?:\.0*#*)?/;function c(e){const t=o((e=e||{}).locale),n=e.pattern||t.pattern,r=t.group,l=t.decimal;let s=1;if(n.includes("%"))s/=100;else if(n.includes("\u2030"))s/=1e3;else if(n.includes("\xa4"))throw new Error("currency notation not supported");const c=n.split(";");1===c.length&&c.push("-"+c[0]);const u=f(c,(t=>(t="(?:"+(0,i.Cj)(t,".")+")").replace(a,(t=>{const n={signed:!1,separator:e.strict?r:[r,""],fractional:e.fractional,decimal:l,exponent:!1},i=t.split(".");let o=e.places;1===i.length&&1!==s&&(i[1]="###"),1===i.length||0===o?n.fractional=!1:(void 0===o&&(o=e.pattern?i[1].lastIndexOf("0")+1:1/0),o&&null==e.fractional&&(n.fractional=!0),!e.places&&+o<i[1].length&&(o+=","+i[1].length),n.places=o);const a=i[0].split(",");return a.length>1&&(n.groupSize=a.pop().length,a.length>1&&(n.groupSize2=a.pop().length)),"("+function(e){"places"in(e=e||{})||(e.places=1/0),"string"!=typeof e.decimal&&(e.decimal="."),"fractional"in e&&!String(e.places).startsWith("0")||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);const t=d(e),n=f(e.fractional,(t=>{let n="";return t&&0!==e.places&&(n="\\"+e.decimal,e.places===1/0?n="(?:"+n+"\\d+)?":n+="\\d{"+e.places+"}"),n}),!0);let i=t+n;return n&&(i="(?:(?:"+i+")|(?:"+n+"))"),i+f(e.exponent,(t=>t?"([eE]"+d({signed:e.eSigned})+")":""))}(n)+")"}))),!0);return{regexp:u.replaceAll(/[\xa0 ]/g,"[\\s\\xa0]"),group:r,decimal:l,factor:s}}function u(e,t){const n=c(t),i=new RegExp("^"+n.regexp+"$").exec(e);if(!i)return NaN;let r=i[1];if(!i[1]){if(!i[2])return NaN;r=i[2],n.factor*=-1}return r=r.replaceAll(new RegExp("["+n.group+"\\s\\xa0]","g"),"").replace(n.decimal,"."),Number(r)*n.factor}function d(e){return"signed"in(e=e||{})||(e.signed=[!0,!1]),"separator"in e?"groupSize"in e||(e.groupSize=3):e.separator="",f(e.signed,(e=>e?"[-+]":""),!0)+f(e.separator,(t=>{if(!t)return"(?:\\d+)";" "===(t=(0,i.Cj)(t))?t="\\s":"\xa0"===t&&(t="\\s\\xa0");const n=e.groupSize,r=e.groupSize2;if(r){const e="(?:0|[1-9]\\d{0,"+(r-1)+"}(?:["+t+"]\\d{"+r+"})*["+t+"]\\d{"+n+"})";return n-r>0?"(?:"+e+"|(?:0|[1-9]\\d{0,"+(n-1)+"}))":e}return"(?:0|[1-9]\\d{0,"+(n-1)+"}(?:["+t+"]\\d{"+n+"})*)"}),!0)}const f=(e,t,n)=>{if(!Array.isArray(e))return t(e);const i=[];for(let r=0;r<e.length;r++)i.push(t(e[r]));return p(i.join("|"),Boolean(n))},p=(e,t)=>"("+(t?"?:":"")+e+")"},80396:(e,t,n)=>{n.d(t,{i_:()=>r});var i=n(95011);function r(e,t,n){t=(0,i.normalizeFieldName)(t)?.toLowerCase(),n=(0,i.normalizeFieldName)(n)?.toLowerCase();const r=e.map((e=>e.toLowerCase())),s=t?e[r.indexOf(t)]:null,a=n?e[r.indexOf(n)]:null;return{longitudeFieldName:s||e[r.indexOf(o.find((e=>r.includes(e))))],latitudeFieldName:a||e[r.indexOf(l.find((e=>r.includes(e))))]}}const l=["lat","lat83","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point_y"],o=["lon","lng","lng83","long","long83","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point_x"]},84875:(e,t,n)=>{n.r(t),n.d(t,{getCSVLayerInfo:()=>f});var i=n(23060),r=n(62631),l=n(36357),o=n(74719),s=n(60064),a=n(43103),c=n(50616),u=n(95011),d=n(80396);async function f(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{customParameters:n,signal:r}=t,l=(0,a.urlToObject)(e),s=await(0,i.default)(l.path,{query:{...l.query,...n},responseType:"native",signal:r});if(!s.data.body)throw new o.default("csv-utils:empty-csv","CSV is empty");const[c]=await Promise.allSettled([p(s.data.body)]);if(await s.data.body.cancel(),"rejected"===c.status)throw c.reason;return{url:e,customParameters:n,...c.value}}async function p(e){const t=e.getReader(),n=N(t),i=(await n.next()).value?.trim(),r=(await n.next()).value?.trim();if(t.releaseLock(),!i)throw new o.default("csv-utils:empty-csv","CSV is empty");const{delimiter:l,locationInfo:s}=function(e,t,n){e=e.trim(),t=t?.trim();const i=[],r=Array.from(new Set([n?.delimiter,...y])).filter((e=>null!=e));for(const o of r){const n=b(e,o).length,r=b(t,o).length??n;n>1&&i.push({weight:Math.min(n,r),delimiter:o})}const l=i.sort(((e,t)=>{let{weight:n}=e,{weight:i}=t;return i-n})).map((e=>{let{delimiter:t}=e;return t}));for(const o of l){const t=w(e,o).names,i=(0,d.i_)(t,n?.longitudeField,n?.latitudeField);if(i.longitudeFieldName&&i.latitudeFieldName)return{delimiter:o,locationInfo:i}}return{delimiter:l[0],locationInfo:null}}(i,r);if(!l)throw new o.default("csv-utils:invalid-delimiter","Unable to detect the delimiter from CSV",{firstLine:i,secondLine:r});const{names:a,aliases:u}=w(i,l);return{delimiter:l,fields:(await v(e,l,a,u,s)).map((e=>c.default.fromJSON(e))),latitudeField:s?.latitudeFieldName,longitudeField:s?.longitudeFieldName}}const g=/^\s*"([\S\s]*)"\s*$/,m=/""/g,h="\n",y=[","," ",";","|","\t"];async function*N(e){const t=/\r?\n/gm,n=new TextDecoder;let i="";for await(const r of async function*(e){let t=await e.read();for(;!t.done;)yield t.value,t=await e.read();e.releaseLock()}(e)){const e=`${i}${n.decode(r)}`.split(t).filter(Boolean);i=e.pop()||"",yield*e}}function x(e,t){return function*(e,t){let n=0;for(;n<=e.length;){const i=e.indexOf(t,n),r=e.slice(n,i>-1?i:void 0);n+=r.length+t.length,yield r}}(e,t)}function w(e,t){const n=b(e,t).filter(r.Ru),i=n.map((e=>(0,u.normalizeFieldName)(e)));for(let r=i.length-1;r>=0;r--)i[r]||(i.splice(r,1),n.splice(r,1));return{names:i,aliases:n}}function b(e,t){if(!e?.length)return[];const n=[];let i="",r="",l=0;const o=x(e,t);for(const s of o)if(i+=r+s,r="",l+=O(s),l%2==0){if(l>0){const e=g.exec(i);e&&n.push(e[1].replaceAll(m,'"'))}else n.push(i);i="",l=0}else r=t;return n}async function v(e,t,n,i,r){const l=e.getReader(),o=N(l),s=[],a=[];for await(const c of function(e,t,n){try{let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:()=>Object.create(null);return async function*(){let r="",l="",o=0,s=i(),a=0;for await(const c of e){const e=x(c,n);for(const c of e)if(r+=l+c,l="",o+=O(c),o%2==0){if(o>0){const e=g.exec(r);if(!e)return s=i(),a=0,r="",void(o=0);s[t[a]]=T(e[1]).replaceAll(m,'"'),a++}else s[t[a]]=T(r),a++;r="",o=0}else l=n;0===o?(yield s,s=i(),a=0):l=h}}()}catch(e){return Promise.reject(e)}}(o,n,t)){if(10===a.length)break;a.push(c)}for(let c=0;c<n.length;c++){const e=n[c],t=i[c];if(e===r?.longitudeFieldName||e===r?.latitudeFieldName)s.push({name:e,type:"esriFieldTypeDouble",alias:t});else{const n=F(a.map((t=>t[e])))??"esriFieldTypeString";s.push({name:e,type:n,alias:t,length:(0,u.getFieldDefaultLength)(n)})}}return l.releaseLock(),s}function F(e){if(!e.length)return"esriFieldTypeString";const t=/[^+\-.,0-9]/;return e.map((e=>{if(""!==e){if(!t.test(e)){let t=S(e);if(!isNaN(t))return/[.,]/.test(e)||!Number.isInteger(t)||t>214783647||t<-214783648?"esriFieldTypeDouble":"esriFieldTypeInteger";if(e.includes("E")){if(t=Number(e),!Number.isNaN(t))return"esriFieldTypeDouble";if(e.includes(",")&&(e=e.replace(",","."),t=Number(e),!Number.isNaN(t)))return"esriFieldTypeDouble"}}return(0,l.Cq)(e)?"esriFieldTypeDate":"esriFieldTypeString"}})).reduce(((e,t)=>void 0===e?t:void 0===t?e:e===t?t:"esriFieldTypeString"===e||"esriFieldTypeString"===t?"esriFieldTypeString":"esriFieldTypeDouble"===e||"esriFieldTypeDouble"===t?"esriFieldTypeDouble":void 0))}const S=function(){const e=(0,s.B)(),t=new RegExp("^"+e.regexp+"$"),n=new RegExp("["+e.group+"\\s\\xa0]","g"),i=e.factor;return r=>{const l=t.exec(r);if(e.factor=i,!l)return NaN;let o=l[1];if(!l[1]){if(!l[2])return NaN;o=l[2],e.factor*=-1}return o=o.replace(n,"").replace(e.decimal,"."),+o*e.factor}}();function T(e){return JSON.parse(JSON.stringify(e))}function O(e){let t=0,n=0;for(n=e.indexOf('"',n);n>=0;)t++,n=e.indexOf('"',n+1);return t}}}]);