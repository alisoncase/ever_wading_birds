"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[8842,9685],{6461:(r,e,t)=>{t.d(e,{c:()=>n,g:()=>a});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function a(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}},39685:(r,e,t)=>{t.r(e),t.d(e,{l:()=>u});var n,a=t(6461),o={exports:{}};const i=(0,a.g)(function(){return n||(n=1,r=o,e="undefined"!=typeof document?document.currentScript?.src:void 0,t=function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var t,n,a=Object.assign({},r),o=new Promise(((r,e)=>{t=r,n=e})),i=Object.assign({},a),u="./this.program",s="";"undefined"!=typeof document&&document.currentScript&&(s=document.currentScript.src),e&&(s=e),s=s.startsWith("blob:")?"":s.substr(0,s.replace(/[?#].*/,"").lastIndexOf("/")+1),a.print||console.log.bind(console);var l,c,f=a.printErr||console.error.bind(console);Object.assign(a,i),i=null,a.arguments&&a.arguments,a.thisProgram&&(u=a.thisProgram),a.quit&&a.quit,a.wasmBinary&&(l=a.wasmBinary);var d,h,v,m,p,g,y,w,_=!1;function b(){var r=c.buffer;a.HEAP8=d=new Int8Array(r),a.HEAP16=v=new Int16Array(r),a.HEAPU8=h=new Uint8Array(r),a.HEAPU16=m=new Uint16Array(r),a.HEAP32=p=new Int32Array(r),a.HEAPU32=g=new Uint32Array(r),a.HEAPF32=y=new Float32Array(r),a.HEAPF64=w=new Float64Array(r)}var A=[],T=[],C=[];function P(r){A.unshift(r)}function F(r){C.unshift(r)}var W=0,E=null;function S(r){a.onAbort?.(r),f(r="Aborted("+r+")"),_=!0,r+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(r);throw n(e),e}var O,$=r=>r.startsWith("data:application/octet-stream;base64,");function M(r){if(r==O&&l)return new Uint8Array(l);throw"both async and sync fetching of the wasm failed"}function j(r,e,t){return function(r){return l||"function"!=typeof fetch?Promise.resolve().then((()=>M(r))):fetch(r,{credentials:"same-origin"}).then((e=>{if(!e.ok)throw`failed to load wasm binary file at '${r}'`;return e.arrayBuffer()})).catch((()=>M(r)))}(r).then((r=>WebAssembly.instantiate(r,e))).then(t,(r=>{f(`failed to asynchronously prepare wasm: ${r}`),S(r)}))}$(O="lclayout.wasm")||(O=function(r){return a.locateFile?a.locateFile(r,s):s+r}(O));var k=r=>{for(;r.length>0;)r.shift()(a)};a.noExitRuntime;class D{constructor(r){this.excPtr=r,this.ptr=r-24}set_type(r){g[this.ptr+4>>2]=r}get_type(){return g[this.ptr+4>>2]}set_destructor(r){g[this.ptr+8>>2]=r}get_destructor(){return g[this.ptr+8>>2]}set_caught(r){r=r?1:0,d[this.ptr+12]=r}get_caught(){return 0!=d[this.ptr+12]}set_rethrown(r){r=r?1:0,d[this.ptr+13]=r}get_rethrown(){return 0!=d[this.ptr+13]}init(r,e){this.set_adjusted_ptr(0),this.set_type(r),this.set_destructor(e)}set_adjusted_ptr(r){g[this.ptr+16>>2]=r}get_adjusted_ptr(){return g[this.ptr+16>>2]}get_exception_ptr(){if(Kr(this.get_type()))return g[this.excPtr>>2];var r=this.get_adjusted_ptr();return 0!==r?r:this.excPtr}}var R={},x=r=>{for(;r.length;){var e=r.pop();r.pop()(e)}};function I(r){return this.fromWireType(g[r>>2])}var U,Y,H,V={},B={},z={},N=r=>{throw new U(r)},q=(r,e,t)=>{function n(e){var n=t(e);n.length!==r.length&&N("Mismatched type converter count");for(var a=0;a<r.length;++a)L(r[a],n[a])}r.forEach((function(r){z[r]=e}));var a=new Array(e.length),o=[],i=0;e.forEach(((r,e)=>{B.hasOwnProperty(r)?a[e]=B[r]:(o.push(r),V.hasOwnProperty(r)||(V[r]=[]),V[r].push((()=>{a[e]=B[r],++i===o.length&&n(a)})))})),0===o.length&&n(a)},G=r=>{for(var e="",t=r;h[t];)e+=Y[h[t++]];return e},J=r=>{throw new H(r)};function L(r,e){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");return function(r,e){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var n=e.name;if(r||J(`type "${n}" must have a positive integer typeid pointer`),B.hasOwnProperty(r)){if(t.ignoreDuplicateRegistrations)return;J(`Cannot register type '${n}' twice`)}if(B[r]=e,delete z[r],V.hasOwnProperty(r)){var a=V[r];delete V[r],a.forEach((r=>r()))}}(r,e,t)}var X=8,K=[],Q=[],Z=r=>{r>9&&0==--Q[r+1]&&(Q[r]=void 0,K.push(r))},rr=()=>Q.length/2-5-K.length,er=r=>(r||J("Cannot use deleted val. handle = "+r),Q[r]),tr=r=>{switch(r){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const e=K.pop()||Q.length;return Q[e]=r,Q[e+1]=1,e}}},nr={name:"emscripten::val",fromWireType:r=>{var e=er(r);return Z(r),e},toWireType:(r,e)=>tr(e),argPackAdvance:X,readValueFromPointer:I,destructorFunction:null},ar=r=>L(r,nr),or=(r,e,t)=>{if(void 0===r[e].overloadTable){var n=r[e];r[e]=function(){for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return r[e].overloadTable.hasOwnProperty(a.length)||J(`Function '${t}' called with an invalid number of arguments (${a.length}) - expects one of (${r[e].overloadTable})!`),r[e].overloadTable[a.length].apply(this,a)},r[e].overloadTable=[],r[e].overloadTable[n.argCount]=n}},ir=(r,e,t)=>{a.hasOwnProperty(r)?((void 0===t||void 0!==a[r].overloadTable&&void 0!==a[r].overloadTable[t])&&J(`Cannot register public name '${r}' twice`),or(a,r,r),a.hasOwnProperty(t)&&J(`Cannot register multiple overloads of a function with the same number of arguments (${t})!`),a[r].overloadTable[t]=e):(a[r]=e,void 0!==t&&(a[r].numArguments=t))},ur=(r,e,t)=>{switch(e){case 1:return t?function(r){return this.fromWireType(d[r])}:function(r){return this.fromWireType(h[r])};case 2:return t?function(r){return this.fromWireType(v[r>>1])}:function(r){return this.fromWireType(m[r>>1])};case 4:return t?function(r){return this.fromWireType(p[r>>2])}:function(r){return this.fromWireType(g[r>>2])};default:throw new TypeError(`invalid integer width (${e}): ${r}`)}},sr=(r,e)=>Object.defineProperty(e,"name",{value:r}),lr=r=>{var e=Jr(r),t=G(e);return Xr(e),t},cr=(r,e)=>{var t=B[r];return void 0===t&&J(`${e} has unknown type ${lr(r)}`),t},fr=(r,e)=>{switch(e){case 4:return function(r){return this.fromWireType(y[r>>2])};case 8:return function(r){return this.fromWireType(w[r>>3])};default:throw new TypeError(`invalid float width (${e}): ${r}`)}};var dr,hr,vr,mr=(r,e,t)=>{a.hasOwnProperty(r)||N("Replacing nonexistent public symbol"),void 0!==a[r].overloadTable&&void 0!==t?a[r].overloadTable[t]=e:(a[r]=e,a[r].argCount=t)},pr=[],gr=r=>{var e=pr[r];return e||(r>=pr.length&&(pr.length=r+1),pr[r]=e=dr.get(r)),e},yr=function(r,e){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return r.includes("j")?((r,e,t)=>(r=r.replace(/p/g,"i"),(0,a["dynCall_"+r])(e,...t)))(r,e,t):gr(e)(...t)},wr=(r,e)=>{var t=(r=G(r)).includes("j")?((r,e)=>function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return yr(r,e,n)})(r,e):gr(e);return"function"!=typeof t&&J(`unknown function pointer with signature ${r}: ${e}`),t},_r=(r,e,t)=>{switch(e){case 1:return t?r=>d[r]:r=>h[r];case 2:return t?r=>v[r>>1]:r=>m[r>>1];case 4:return t?r=>p[r>>2]:r=>g[r>>2];default:throw new TypeError(`invalid integer width (${e}): ${r}`)}},br=(r,e,t,n)=>{if(!(n>0))return 0;for(var a=t,o=t+n-1,i=0;i<r.length;++i){var u=r.charCodeAt(i);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&r.charCodeAt(++i)),u<=127){if(t>=o)break;e[t++]=u}else if(u<=2047){if(t+1>=o)break;e[t++]=192|u>>6,e[t++]=128|63&u}else if(u<=65535){if(t+2>=o)break;e[t++]=224|u>>12,e[t++]=128|u>>6&63,e[t++]=128|63&u}else{if(t+3>=o)break;e[t++]=240|u>>18,e[t++]=128|u>>12&63,e[t++]=128|u>>6&63,e[t++]=128|63&u}}return e[t]=0,t-a},Ar=r=>{for(var e=0,t=0;t<r.length;++t){var n=r.charCodeAt(t);n<=127?e++:n<=2047?e+=2:n>=55296&&n<=57343?(e+=4,++t):e+=3}return e},Tr="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,Cr=(r,e)=>r?((r,e,t)=>{for(var n=e+t,a=e;r[a]&&!(a>=n);)++a;if(a-e>16&&r.buffer&&Tr)return Tr.decode(r.subarray(e,a));for(var o="";e<a;){var i=r[e++];if(128&i){var u=63&r[e++];if(192!=(224&i)){var s=63&r[e++];if((i=224==(240&i)?(15&i)<<12|u<<6|s:(7&i)<<18|u<<12|s<<6|63&r[e++])<65536)o+=String.fromCharCode(i);else{var l=i-65536;o+=String.fromCharCode(55296|l>>10,56320|1023&l)}}else o+=String.fromCharCode((31&i)<<6|u)}else o+=String.fromCharCode(i)}return o})(h,r,e):"",Pr="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0,Fr=(r,e)=>{for(var t=r,n=t>>1,a=n+e/2;!(n>=a)&&m[n];)++n;if((t=n<<1)-r>32&&Pr)return Pr.decode(h.subarray(r,t));for(var o="",i=0;!(i>=e/2);++i){var u=v[r+2*i>>1];if(0==u)break;o+=String.fromCharCode(u)}return o},Wr=(r,e,t)=>{if(t??=2147483647,t<2)return 0;for(var n=e,a=(t-=2)<2*r.length?t/2:r.length,o=0;o<a;++o){var i=r.charCodeAt(o);v[e>>1]=i,e+=2}return v[e>>1]=0,e-n},Er=r=>2*r.length,Sr=(r,e)=>{for(var t=0,n="";!(t>=e/4);){var a=p[r+4*t>>2];if(0==a)break;if(++t,a>=65536){var o=a-65536;n+=String.fromCharCode(55296|o>>10,56320|1023&o)}else n+=String.fromCharCode(a)}return n},Or=(r,e,t)=>{if(t??=2147483647,t<4)return 0;for(var n=e,a=n+t-4,o=0;o<r.length;++o){var i=r.charCodeAt(o);if(i>=55296&&i<=57343&&(i=65536+((1023&i)<<10)|1023&r.charCodeAt(++o)),p[e>>2]=i,(e+=4)+4>a)break}return p[e>>2]=0,e-n},$r=r=>{for(var e=0,t=0;t<r.length;++t){var n=r.charCodeAt(t);n>=55296&&n<=57343&&++t,e+=4}return e},Mr=(r,e,t)=>{var n=[],a=r.toWireType(n,t);return n.length&&(g[e>>2]=tr(n)),a},jr=[],kr={},Dr=r=>{var e=kr[r];return void 0===e?G(r):e},Rr=Reflect.construct;vr=()=>performance.now();var xr=r=>{var e=(r-c.buffer.byteLength+65535)/65536;try{return c.grow(e),b(),1}catch(n){}},Ir={},Ur=()=>{if(!Ur.strings){var r={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:u||"./this.program"};for(var e in Ir)void 0===Ir[e]?delete r[e]:r[e]=Ir[e];var t=[];for(var e in r)t.push(`${e}=${r[e]}`);Ur.strings=t}return Ur.strings},Yr=r=>r%4==0&&(r%100!=0||r%400==0),Hr=[31,29,31,30,31,30,31,31,30,31,30,31],Vr=[31,28,31,30,31,30,31,31,30,31,30,31];var Br=(r,e)=>{d.set(r,e)},zr=(r,e,t,n)=>{var a=g[n+40>>2],o={tm_sec:p[n>>2],tm_min:p[n+4>>2],tm_hour:p[n+8>>2],tm_mday:p[n+12>>2],tm_mon:p[n+16>>2],tm_year:p[n+20>>2],tm_wday:p[n+24>>2],tm_yday:p[n+28>>2],tm_isdst:p[n+32>>2],tm_gmtoff:p[n+36>>2],tm_zone:a?Cr(a):""},i=Cr(t),u={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var s in u)i=i.replace(new RegExp(s,"g"),u[s]);var l=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],c=["January","February","March","April","May","June","July","August","September","October","November","December"];function f(r,e,t){for(var n="number"==typeof r?r.toString():r||"";n.length<e;)n=t[0]+n;return n}function d(r,e){return f(r,e,"0")}function h(r,e){function t(r){return r<0?-1:r>0?1:0}var n;return 0===(n=t(r.getFullYear()-e.getFullYear()))&&0===(n=t(r.getMonth()-e.getMonth()))&&(n=t(r.getDate()-e.getDate())),n}function v(r){switch(r.getDay()){case 0:return new Date(r.getFullYear()-1,11,29);case 1:return r;case 2:return new Date(r.getFullYear(),0,3);case 3:return new Date(r.getFullYear(),0,2);case 4:return new Date(r.getFullYear(),0,1);case 5:return new Date(r.getFullYear()-1,11,31);case 6:return new Date(r.getFullYear()-1,11,30)}}function m(r){var e=((r,e)=>{for(var t=new Date(r.getTime());e>0;){var n=Yr(t.getFullYear()),a=t.getMonth(),o=(n?Hr:Vr)[a];if(!(e>o-t.getDate()))return t.setDate(t.getDate()+e),t;e-=o-t.getDate()+1,t.setDate(1),a<11?t.setMonth(a+1):(t.setMonth(0),t.setFullYear(t.getFullYear()+1))}return t})(new Date(r.tm_year+1900,0,1),r.tm_yday),t=new Date(e.getFullYear(),0,4),n=new Date(e.getFullYear()+1,0,4),a=v(t),o=v(n);return h(a,e)<=0?h(o,e)<=0?e.getFullYear()+1:e.getFullYear():e.getFullYear()-1}var y={"%a":r=>l[r.tm_wday].substring(0,3),"%A":r=>l[r.tm_wday],"%b":r=>c[r.tm_mon].substring(0,3),"%B":r=>c[r.tm_mon],"%C":r=>d((r.tm_year+1900)/100|0,2),"%d":r=>d(r.tm_mday,2),"%e":r=>f(r.tm_mday,2," "),"%g":r=>m(r).toString().substring(2),"%G":m,"%H":r=>d(r.tm_hour,2),"%I":r=>{var e=r.tm_hour;return 0==e?e=12:e>12&&(e-=12),d(e,2)},"%j":r=>d(r.tm_mday+((r,e)=>{for(var t=0,n=0;n<=e;t+=r[n++]);return t})(Yr(r.tm_year+1900)?Hr:Vr,r.tm_mon-1),3),"%m":r=>d(r.tm_mon+1,2),"%M":r=>d(r.tm_min,2),"%n":()=>"\n","%p":r=>r.tm_hour>=0&&r.tm_hour<12?"AM":"PM","%S":r=>d(r.tm_sec,2),"%t":()=>"\t","%u":r=>r.tm_wday||7,"%U":r=>{var e=r.tm_yday+7-r.tm_wday;return d(Math.floor(e/7),2)},"%V":r=>{var e=Math.floor((r.tm_yday+7-(r.tm_wday+6)%7)/7);if((r.tm_wday+371-r.tm_yday-2)%7<=2&&e++,e){if(53==e){var t=(r.tm_wday+371-r.tm_yday)%7;4==t||3==t&&Yr(r.tm_year)||(e=1)}}else{e=52;var n=(r.tm_wday+7-r.tm_yday-1)%7;(4==n||5==n&&Yr(r.tm_year%400-1))&&e++}return d(e,2)},"%w":r=>r.tm_wday,"%W":r=>{var e=r.tm_yday+7-(r.tm_wday+6)%7;return d(Math.floor(e/7),2)},"%y":r=>(r.tm_year+1900).toString().substring(2),"%Y":r=>r.tm_year+1900,"%z":r=>{var e=r.tm_gmtoff,t=e>=0;return e=(e=Math.abs(e)/60)/60*100+e%60,(t?"+":"-")+String("0000"+e).slice(-4)},"%Z":r=>r.tm_zone,"%%":()=>"%"};for(var s in i=i.replace(/%%/g,"\0\0"),y)i.includes(s)&&(i=i.replace(new RegExp(s,"g"),y[s](o)));var w=function(r){var e=Ar(r)+1,t=new Array(e);return br(r,t,0,t.length),t}(i=i.replace(/\0\0/g,"%"));return w.length>e?0:(Br(w,r),w.length-1)};U=a.InternalError=class extends Error{constructor(r){super(r),this.name="InternalError"}},(()=>{for(var r=new Array(256),e=0;e<256;++e)r[e]=String.fromCharCode(e);Y=r})(),H=a.BindingError=class extends Error{constructor(r){super(r),this.name="BindingError"}},Q.push(0,1,void 0,1,null,1,!0,1,!1,1),a.count_emval_handles=rr,hr=a.UnboundTypeError=((r,e)=>{var t=sr(e,(function(r){this.name=e,this.message=r;var t=new Error(r).stack;void 0!==t&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""))}));return t.prototype=Object.create(r.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return void 0===this.message?this.name:`${this.name}: ${this.message}`},t})(Error,"UnboundTypeError");var Nr,qr={a:(r,e,t)=>{throw new D(r).init(e,t),r},k:r=>{var e=R[r];delete R[r];var t=e.rawConstructor,n=e.rawDestructor,a=e.fields,o=a.map((r=>r.getterReturnType)).concat(a.map((r=>r.setterArgumentType)));q([r],o,(r=>{var o={};return a.forEach(((e,t)=>{var n=e.fieldName,i=r[t],u=e.getter,s=e.getterContext,l=r[t+a.length],c=e.setter,f=e.setterContext;o[n]={read:r=>i.fromWireType(u(s,r)),write:(r,e)=>{var t=[];c(f,r,l.toWireType(t,e)),x(t)}}})),[{name:e.name,fromWireType:r=>{var e={};for(var t in o)e[t]=o[t].read(r);return n(r),e},toWireType:(r,e)=>{for(var a in o)if(!(a in e))throw new TypeError(`Missing field: "${a}"`);var i=t();for(a in o)o[a].write(i,e[a]);return null!==r&&r.push(n,i),i},argPackAdvance:X,readValueFromPointer:I,destructorFunction:n}]}))},z:(r,e,t,n,a)=>{},w:(r,e,t,n)=>{L(r,{name:e=G(e),fromWireType:function(r){return!!r},toWireType:function(r,e){return e?t:n},argPackAdvance:X,readValueFromPointer:function(r){return this.fromWireType(h[r])},destructorFunction:null})},t:(r,e,t)=>{r=G(r),q([],[e],(e=>(e=e[0],a[r]=e.fromWireType(t),[])))},M:ar,r:(r,e,t,n)=>{function a(){}e=G(e),a.values={},L(r,{name:e,constructor:a,fromWireType:function(r){return this.constructor.values[r]},toWireType:(r,e)=>e.value,argPackAdvance:X,readValueFromPointer:ur(e,t,n),destructorFunction:null}),ir(e,a)},j:(r,e,t)=>{var n=cr(r,"enum");e=G(e);var a=n.constructor,o=Object.create(n.constructor.prototype,{value:{value:t},constructor:{value:sr(`${n.name}_${e}`,(function(){}))}});a.values[t]=o,a[e]=o},v:(r,e,t)=>{L(r,{name:e=G(e),fromWireType:r=>r,toWireType:(r,e)=>e,argPackAdvance:X,readValueFromPointer:fr(e,t),destructorFunction:null})},e:(r,e,t,n,a,o,i)=>{var u=((r,e)=>{for(var t=[],n=0;n<r;n++)t.push(g[e+4*n>>2]);return t})(e,t);r=(r=>{const e=(r=r.trim()).indexOf("(");return-1!==e?r.substr(0,e):r})(r=G(r)),a=wr(n,a),ir(r,(function(){((r,e)=>{var t=[],n={};throw e.forEach((function r(e){n[e]||B[e]||(z[e]?z[e].forEach(r):(t.push(e),n[e]=!0))})),new hr(`${r}: `+t.map(lr).join([", "]))})(`Cannot call ${r} due to unbound types`,u)}),e-1),q([],u,(t=>{var n=[t[0],null].concat(t.slice(1));return mr(r,function(r,e,t,n,a){var o=e.length;o<2&&J("argTypes array size mismatch! Must at least get return value and 'this' types!"),e[1];var i=function(r){for(var e=1;e<r.length;++e)if(null!==r[e]&&void 0===r[e].destructorFunction)return!0;return!1}(e),u="void"!==e[0].name,s=o-2,l=new Array(s),c=[],f=[];return sr(r,(function(){arguments.length!==s&&J(`function ${r} called with ${arguments.length} arguments, expected ${s}`),f.length=0,c.length=1,c[0]=a;for(var t=0;t<s;++t)l[t]=e[t+2].toWireType(f,t<0||arguments.length<=t?void 0:arguments[t]),c.push(l[t]);return function(r){if(i)x(f);else for(var t=2;t<e.length;t++){var n=1===t?void 0:l[t-2];null!==e[t].destructorFunction&&e[t].destructorFunction(n)}if(u)return e[0].fromWireType(r)}(n(...c))}))}(r,n,0,a,o),e-1),[]}))},m:(r,e,t,n,a)=>{e=G(e);var o=r=>r;if(0===n){var i=32-8*t;o=r=>r<<i>>>i}var u=e.includes("unsigned");L(r,{name:e,fromWireType:o,toWireType:u?function(r,e){return this.name,e>>>0}:function(r,e){return this.name,e},argPackAdvance:X,readValueFromPointer:_r(e,t,0!==n),destructorFunction:null})},f:(r,e,t)=>{var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][e];function a(r){var e=g[r>>2],t=g[r+4>>2];return new n(d.buffer,t,e)}L(r,{name:t=G(t),fromWireType:a,argPackAdvance:X,readValueFromPointer:a},{ignoreDuplicateRegistrations:!0})},L:(r,e)=>{ar(r)},u:(r,e)=>{var t="std::string"===(e=G(e));L(r,{name:e,fromWireType(r){var e,n=g[r>>2],a=r+4;if(t)for(var o=a,i=0;i<=n;++i){var u=a+i;if(i==n||0==h[u]){var s=Cr(o,u-o);void 0===e?e=s:(e+=String.fromCharCode(0),e+=s),o=u+1}}else{var l=new Array(n);for(i=0;i<n;++i)l[i]=String.fromCharCode(h[a+i]);e=l.join("")}return Xr(r),e},toWireType(r,e){var n;e instanceof ArrayBuffer&&(e=new Uint8Array(e));var a="string"==typeof e;a||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||J("Cannot pass non-string to std::string"),n=t&&a?Ar(e):e.length;var o=Lr(4+n+1),i=o+4;if(g[o>>2]=n,t&&a)((r,e,t)=>{br(r,h,e,t)})(e,i,n+1);else if(a)for(var u=0;u<n;++u){var s=e.charCodeAt(u);s>255&&(Xr(i),J("String has UTF-16 code units that do not fit in 8 bits")),h[i+u]=s}else for(u=0;u<n;++u)h[i+u]=e[u];return null!==r&&r.push(Xr,o),o},argPackAdvance:X,readValueFromPointer:I,destructorFunction(r){Xr(r)}})},s:(r,e,t)=>{var n,a,o,i;t=G(t),2===e?(n=Fr,a=Wr,i=Er,o=r=>m[r>>1]):4===e&&(n=Sr,a=Or,i=$r,o=r=>g[r>>2]),L(r,{name:t,fromWireType:r=>{for(var t,a=g[r>>2],i=r+4,u=0;u<=a;++u){var s=r+4+u*e;if(u==a||0==o(s)){var l=n(i,s-i);void 0===t?t=l:(t+=String.fromCharCode(0),t+=l),i=s+e}}return Xr(r),t},toWireType:(r,n)=>{"string"!=typeof n&&J(`Cannot pass non-string to C++ string type ${t}`);var o=i(n),u=Lr(4+o+e);return g[u>>2]=o/e,a(n,u+4,o+e),null!==r&&r.push(Xr,u),u},argPackAdvance:X,readValueFromPointer:I,destructorFunction(r){Xr(r)}})},l:(r,e,t,n,a,o)=>{R[r]={name:G(e),rawConstructor:wr(t,n),rawDestructor:wr(a,o),fields:[]}},c:(r,e,t,n,a,o,i,u,s,l)=>{R[r].fields.push({fieldName:G(e),getterReturnType:t,getter:wr(n,a),getterContext:o,setterArgumentType:i,setter:wr(u,s),setterContext:l})},x:(r,e)=>{L(r,{isVoid:!0,name:e=G(e),argPackAdvance:0,fromWireType:()=>{},toWireType:(r,e)=>{}})},F:()=>1,J:(r,e,t)=>h.copyWithin(r,e,e+t),g:(r,e,t)=>(r=er(r),e=cr(e,"emval::as"),Mr(e,t,r)),y:(r,e,t,n)=>(r=jr[r])(null,e=er(e),t,n),p:(r,e,t,n,a)=>(r=jr[r])(e=er(e),e[t=Dr(t)],n,a),b:Z,n:(r,e,t)=>{var n=((r,e)=>{for(var t=new Array(r),n=0;n<r;++n)t[n]=cr(g[e+4*n>>2],"parameter "+n);return t})(r,e),a=n.shift();r--;var o=new Array(r),i=`methodCaller<(${n.map((r=>r.name)).join(", ")}) => ${a.name}>`;return(r=>{var e=jr.length;return jr.push(r),e})(sr(i,((e,i,u,s)=>{for(var l=0,c=0;c<r;++c)o[c]=n[c].readValueFromPointer(s+l),l+=n[c].argPackAdvance;var f=1===t?Rr(i,o):i.apply(e,o);return Mr(a,u,f)})))},h:(r,e)=>(r=er(r),e=er(e),tr(r[e])),q:()=>tr([]),K:r=>{r=er(r);for(var e=new Array(r.length),t=0;t<r.length;t++)e[t]=r[t];return tr(e)},o:r=>tr(Dr(r)),d:r=>{var e=er(r);x(e),Z(r)},i:(r,e)=>{var t=(r=cr(r,"_emval_take_value")).readValueFromPointer(e);return tr(t)},E:()=>{S("")},G:()=>Date.now(),A:()=>2147483648,I:vr,H:r=>{var e=h.length,t=2147483648;if((r>>>=0)>t)return!1;for(var n=(r,e)=>r+(e-r%e)%e,a=1;a<=4;a*=2){var o=e*(1+.2/a);o=Math.min(o,r+100663296);var i=Math.min(t,n(Math.max(r,o),65536));if(xr(i))return!0}return!1},C:(r,e)=>{var t=0;return Ur().forEach(((n,a)=>{var o=e+t;g[r+4*a>>2]=o,((r,e)=>{for(var t=0;t<r.length;++t)d[e++]=r.charCodeAt(t);d[e]=0})(n,o),t+=n.length+1})),0},D:(r,e)=>{var t=Ur();g[r>>2]=t.length;var n=0;return t.forEach((r=>n+=r.length+1)),g[e>>2]=n,0},B:(r,e,t,n,a)=>zr(r,e,t,n)},Gr=function(){var r={a:qr};function e(r,e){return Gr=r.exports,c=Gr.N,b(),dr=Gr.Q,function(r){T.unshift(r)}(Gr.O),function(){if(W--,a.monitorRunDependencies?.(W),0==W&&E){var r=E;E=null,r()}}(),Gr}if(W++,a.monitorRunDependencies?.(W),a.instantiateWasm)try{return a.instantiateWasm(r,e)}catch(o){f(`Module.instantiateWasm callback failed with error: ${o}`),n(o)}return function(r,e,t,n){return r||"function"!=typeof WebAssembly.instantiateStreaming||$(e)||"function"!=typeof fetch?j(e,t,n):fetch(e,{credentials:"same-origin"}).then((r=>WebAssembly.instantiateStreaming(r,t).then(n,(function(r){return f(`wasm streaming compile failed: ${r}`),f("falling back to ArrayBuffer instantiation"),j(e,t,n)}))))}(l,O,r,(function(r){e(r.instance)})).catch(n),{}}(),Jr=r=>(Jr=Gr.P)(r),Lr=a._malloc=r=>(Lr=a._malloc=Gr.R)(r),Xr=a._free=r=>(Xr=a._free=Gr.S)(r),Kr=r=>(Kr=Gr.T)(r);function Qr(){function r(){Nr||(Nr=!0,a.calledRun=!0,_||(k(T),t(a),a.onRuntimeInitialized&&a.onRuntimeInitialized(),function(){if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;)F(a.postRun.shift());k(C)}()))}W>0||(function(){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)P(a.preRun.shift());k(A)}(),W>0||(a.setStatus?(a.setStatus("Running..."),setTimeout((function(){setTimeout((function(){a.setStatus("")}),1),r()}),1)):r()))}if(a.dynCall_viijii=(r,e,t,n,o,i,u)=>(a.dynCall_viijii=Gr.U)(r,e,t,n,o,i,u),a.dynCall_iiiiij=(r,e,t,n,o,i,u)=>(a.dynCall_iiiiij=Gr.V)(r,e,t,n,o,i,u),a.dynCall_iiiiijj=(r,e,t,n,o,i,u,s,l)=>(a.dynCall_iiiiijj=Gr.W)(r,e,t,n,o,i,u,s,l),a.dynCall_iiiiiijj=(r,e,t,n,o,i,u,s,l,c)=>(a.dynCall_iiiiiijj=Gr.X)(r,e,t,n,o,i,u,s,l,c),E=function r(){Nr||Qr(),Nr||(E=r)},a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);a.preInit.length>0;)a.preInit.pop()();return Qr(),o},r.exports=t),o.exports;var r,e,t}()),u=Object.freeze(Object.defineProperty({__proto__:null,default:i},Symbol.toStringTag,{value:"Module"}))}}]);