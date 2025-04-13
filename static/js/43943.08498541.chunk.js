"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[43943,79538],{43943:(e,n,t)=>{t.r(n),t.d(n,{fieldNamesFromFieldInfos:()=>v,getArcadeForOrderedFields:()=>y,getArcadeForPredominanceMargin:()=>p,getArcadeForPredominantCategory:()=>d,getArcadeForPredominantCategoryAlias:()=>c,getArcadeForPredominantCategoryValue:()=>m,getArcadeForStrengthOfPredominance:()=>$,getArcadeForSumOfFields:()=>g,getPredominanceExpressions:()=>u,getSQLForPredominantCategoryName:()=>l,noDominantCategoryField:()=>r});var a=t(79538);const r="no_dominant_category";function i(e){return`(${e.map((e=>`${e} >= 0`)).join(" OR ")})`}function l(e){return{expression:o(e,{returnFieldName:!0,defaultValue:`'${r}'`})}}function o(e,n){const{returnFieldName:t,defaultValue:r,layer:i}=n,l=[];if(t&&r){const n=e.map((e=>`${e} <= 0`)).join(" AND ");l.push(`WHEN ${n} THEN ${r}`)}for(const o of e){const n=e.reduce(((e,n)=>(o!==n&&e.push(`${o} > ${n}`),e)),[]).join(" AND "),r=i&&(0,a.R3)(i,o),u=t&&`'${o}'`?`'${o}'`:r?(0,a.Ll)(o):o;l.push(`WHEN ${n} THEN ${u}`)}return`CASE ${l.join(" ")} ELSE ${r||"0"} END`}function u(e,n){const t=n.join(" + "),a={sqlExpression:`(${t})`,sqlWhere:i(n)},r={sqlExpression:`(( (${o(n,{layer:e})}) / (${t}) ) * 100)`,sqlWhere:`${i(n)} AND ((${t}) > 0)`};return{predominantCategory:{valueExpression:d(n)},size:{valueExpression:g(n),statisticsQuery:a,histogramQuery:a},opacity:{valueExpression:$(n),statisticsQuery:r,histogramQuery:r}}}function s(e){return e&&e.map((e=>`$feature["${e}"];`)).join("\n")+"\n"||""}function f(e){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const t=e.map((e=>`"${e}"`));return`\n  var fieldNames = [ ${t.join(", ")} ];\n  var numFields = ${t.length};\n  var maxValueField = null;\n  var maxValue = -Infinity;\n  var value, i, totalValue = null;\n\n  for(i = 0; i < numFields; i++) {\n    value = $feature[fieldNames[i]];\n\n    if(value > 0) {\n      if(value > maxValue) {\n        maxValue = value;\n        maxValueField = fieldNames[i];\n      }\n      else if (value == maxValue) {\n        maxValueField = null;\n      }\n    }\n    ${n?"\n  if(value != null && value >= 0) {\n    if (totalValue == null) { totalValue = 0; }\n    totalValue = totalValue + value;\n  }\n  ":""}\n  }\n  `}function d(e){const n=f(e);return`\n  ${s(e)}\n  ${n}\n  return maxValueField;\n  `}function m(e){const n=f(e);return`\n  ${s(e)}\n  ${n}\n  return maxValue;\n  `}function c(e,n){const t=v(e),a=s(t),r=e.map((e=>e.label?`"${e.label}"`:`"${e.fieldName}"`)),i=t.map((e=>`Number($feature["${e}"])`)),l=[];return n&&n.forEach(((e,n)=>{l.push(`function getValueForExpr${n}() {\n  ${e.expression} \n}`),i.push(`Number(getValueForExpr${n}())`),r.push(`"${e.title||e.name}"`)})),`\n  ${a}\n\n  ${l.length?l.join("\n"):""}\n\n  var values = [ ${i.join(", ")} ];\n  var aliases = [ ${r.join(", ")} ];\n  var numValues = ${i.length};\n  var maxValueAlias = null;\n  var maxValue = -Infinity;\n  var value, i, totalValue = null;\n\n  for(i = 0; i < numValues; i++) {\n    value = values[i];\n\n    if(value > 0) {\n      if(value > maxValue) {\n        maxValue = value;\n        maxValueAlias = aliases[i];\n      }\n      else if (value == maxValue) {\n        maxValueAlias = "Tie";\n      }\n    }\n  }\n  return maxValueAlias;\n  `}function v(e){return e.filter((e=>{let{fieldName:n}=e;return!!n})).map((e=>e.fieldName))}function p(e){return`\n  ${s(e)}\n  var fieldValues = [ ${e.map((e=>`$feature["${e}"]`)).join(", ")} ];\n  var totalValue = Sum(fieldValues);\n  var order = Reverse(Sort(fieldValues));\n  return IIF(totalValue > 0, Round(((order[0] - order[1]) / totalValue) * 100, 2), null);\n  `}function g(e){const n=s(e),t=e.map((e=>`"${e}"`));return`\n  ${n}\n  var fieldNames = [ ${t.join(", ")} ];\n  var numFields = ${t.length};\n  var value, i, totalValue = null;\n\n  for(i = 0; i < numFields; i++) {\n    value = $feature[fieldNames[i]];\n\n    if(value != null && value >= 0) {\n      if (totalValue == null) { totalValue = 0; }\n      totalValue = totalValue + value;\n    }\n  }\n\n  return totalValue;\n  `}function $(e){const n=f(e,!0);return`\n  ${s(e)}\n  ${n}\n\n  var strength = null;\n\n  if (maxValueField != null && totalValue > 0) {\n    strength = (maxValue / totalValue) * 100;\n  }\n\n  return strength;\n  `}function y(e,n){const t=s(v(e)),a=e.map((e=>`{\n    value: Number($feature["${e.fieldName}"]),\n    alias: "${e.label||e.fieldName}"\n    }`)),r=[];return n&&n.forEach(((e,n)=>{r.push(`function getValueForExpr${n}() {\n  ${e.expression} \n}`),a.push(`{\n          value: Number(getValueForExpr${n}()),\n          alias: "${e.title||e.name}"\n          }`)})),`\n  ${t}\n\n  ${r.length?r.join("\n"):""}\n\n  var groups = [ ${a.join(", ")} ];\n  var numTopValues = Count(groups);\n\n  function getValuesArray(arr){\n    var valuesArray = []\n    for(var i in arr){\n      valuesArray[i] = arr[i].value;\n    }\n    return valuesArray;\n  }\n\n  function findAliases(top5Array, fullArray){\n    var aliases = [];\n    var found = "";\n    for(var i in top5Array){\n      for(var k in fullArray){\n        if(top5Array[i] == fullArray[k].value && Find(fullArray[k].alias, found) == -1){\n          found += fullArray[k].alias;\n          aliases[Count(aliases)] = {\n            alias: fullArray[k].alias,\n            value: top5Array[i]\n          };\n        }\n      }\n    }\n    return aliases;\n  }\n\n  function getTopGroups(groupsArray){\n    var values = getValuesArray(groupsArray);\n    var top5Values = IIF(Max(values) > 0, Top(Reverse(Sort(values)),numTopValues), "no data");\n    var top5Aliases = findAliases(top5Values,groupsArray);\n\n    if(TypeOf(top5Values) == "String"){\n      return top5Values;\n    } else {\n      var content = "";\n      for(var i in top5Aliases){\n        if(top5Aliases[i].value > 0){\n          content += (i+1) + ". " + top5Aliases[i].alias + " (" + Text(top5Aliases[i].value, "#,###") + ")";\n          content += IIF(i < numTopValues-1, TextFormatting.NewLine, "");\n        }\n      }\n    }\n\n    return content;\n  }\n\n  getTopGroups(groups);\n  `}},79538:(e,n,t)=>{t.d(n,{BV:()=>T,EG:()=>V,Lk:()=>N,Ll:()=>C,Np:()=>f,R3:()=>S,SO:()=>v,T1:()=>E,UH:()=>s,Wy:()=>h,XR:()=>c,aM:()=>x,fs:()=>y,i0:()=>k,i3:()=>$});var a=t(66845),r=t(95011),i=t(96247),l=t(76983),o=t(73210),u=t(40731);const s=",",f={light:["streets","gray","topo","terrain","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector","topo-3d","navigation-3d","streets-3d","osm-3d","gray-3d"],dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector","navigation-dark-3d","streets-dark-3d","dark-gray-3d"]},d="percent-of-total",m="field",c={exclude:["median"]},v={years:365,months:30,days:1,hours:1/24,minutes:1/1440,seconds:1/86400,milliseconds:1/864e5},p=new Set(["integer","small-integer"]);let g=null;const $=["date","date-only","timestamp-offset"];function y(e){return(0,r.isDateField)(e)||(0,r.isDateOnlyField)(e)||(0,r.isTimestampOffsetField)(e)}async function V(e){const{field:n,field2:t,field3:a,normalizationField:r,valueExpression:l}=e;let o=[];if(l){if(!g){const{arcadeUtils:e}=await(0,i.lw)();g=e}o=g.extractFieldNames(l)}return n&&o.push(n),t&&o.push(t),a&&o.push(a),r&&o.push(r),o}function h(e){let n=e.normalizationType;return n||(e.normalizationField?n=m:null!=e.normalizationTotal&&(n=d)),n??void 0}function F(e){return String(e).padStart(2,"0")}function A(e,n,t){let a;return"date"===n||"number"===n?("number"===n&&(e=new Date(e)),a=`TIMESTAMP'${t?e.getFullYear():e.getUTCFullYear()}-${F((t?e.getMonth():e.getUTCMonth())+1)}-${F(t?e.getDate():e.getUTCDate())} ${F(t?e.getHours():e.getUTCHours())}:${F(t?e.getMinutes():e.getUTCMinutes())}:${F(t?e.getSeconds():e.getUTCSeconds())}'`):a=e,a}function x(e,n,t,a){const{hasQueryEngine:r}=e,i=`(${A(t,N(e,t),r)} - ${A(n,N(e,n),r)})`;let l=v[a],o="/";return l<1&&(l=1/l,o="*"),{sqlExpression:1===l?i:`(${i} ${o} ${l})`,sqlWhere:null}}function N(e,n){if(n instanceof Date)return"date";if("number"==typeof n)return"number";if("string"==typeof n){const t=e.getField(n);if("<now>"===n.toLowerCase())return;if((0,r.isDateField)(t))return"field"}}function T(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f;for(const t in n)if(n[t].includes(e))return t}function E(e,n){let t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=null;return e&&("string"==typeof e?n.includes(e)&&(a=e):a=(0,l.q3)(e)),t?a||"gray":a}function S(e,n){const t=n&&e.getField(n);return!!t&&p.has(t.type)}function C(e){return`cast(${e} as float)`}function k(e,n){const{format:t,timeZoneOptions:r,fieldType:i}=n??{};let l,s;if(r&&({timeZone:l,timeZoneName:s}=(0,u.hv)(r.layerTimeZone,r.datesInUnknownTimezone,r.viewTimeZone,(0,a.J2)(t||"short-date-short-time"),i)),"string"==typeof e&&isNaN(Date.parse("time-only"===i?`1970-01-01T${e}Z`:e)))return e;switch(i){case"date-only":{const n=(0,a.J2)(t||"short-date");return"string"==typeof e?(0,a.iS)(e,{...n}):(0,a.Yq)(e,{...n,timeZone:o.n$})}case"time-only":{const n=(0,a.J2)(t||"short-time");return"string"==typeof e?(0,a.F8)(e,n):(0,a.Yq)(e,{...n,timeZone:o.n$})}case"timestamp-offset":{if(!l&&"string"==typeof e&&new Date(e).toISOString()!==e)return e;const n=t||r?(0,a.J2)(t||"short-date-short-time"):void 0,i=n?{...n,timeZone:l,timeZoneName:s}:void 0;return"string"==typeof e?(0,a.Ey)(e,i):(0,a.Yq)(e,i)}default:{const n=t||r?(0,a.J2)(t||"short-date-short-time"):void 0;return(0,a.Yq)("string"==typeof e?new Date(e):e,n?{...n,timeZone:l,timeZoneName:s}:void 0)}}}}}]);