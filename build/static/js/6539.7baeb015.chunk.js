"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[6539,14967,55928],{8374:(e,n,t)=>{function r(e,n,t){t=t||2;var r,o,l,u,a,x,s,y=n&&n.length,h=y?n[0]*t:e.length,p=i(e,0,h,t,!0),v=[];if(!p||p.next===p.prev)return v;if(y&&(p=c(e,n,p,t)),e.length>80*t){r=l=e[0],o=u=e[1];for(var g=t;g<h;g+=t)(a=e[g])<r&&(r=a),(x=e[g+1])<o&&(o=x),a>l&&(l=a),x>u&&(u=x);s=0!==(s=Math.max(l-r,u-o))?1/s:0}return f(p,v,t,r,o,s),v}function i(e,n,t,r,i){var o,f;if(i===C(e,n,t,r)>0)for(o=n;o<t;o+=r)f=U(o,e[o],e[o+1],f);else for(o=t-r;o>=n;o-=r)f=U(o,e[o],e[o+1],f);if(f&&b(f,f.next)){var l=f.next;E(f),f=l}return f}function o(e,n){if(!e)return e;n||(n=e);var t,r=e;do{if(t=!1,r.steiner||!b(r,r.next)&&0!==M(r.prev,r,r.next))r=r.next;else{var i=r.prev;if(E(r),(r=n=i)===r.next)break;t=!0}}while(t||r!==n);return n}function f(e,n,t,r,i,c,s){if(e){!s&&c&&v(e,r,i,c);for(var y,h,p=e;e.prev!==e.next;)if(y=e.prev,h=e.next,c?u(e,r,i,c):l(e))n.push(y.i/t),n.push(e.i/t),n.push(h.i/t),E(e),e=h.next,p=h.next;else if((e=h)===p){s?1===s?f(e=a(o(e),n,t),n,t,r,i,c,2):2===s&&x(e,n,t,r,i,c):f(o(e),n,t,r,i,c,1);break}}}function l(e){var n=e.prev,t=e,r=e.next;if(M(n,t,r)>=0)return!1;for(var i=e.next.next;i!==e.prev;){if(w(n.x,n.y,t.x,t.y,r.x,r.y,i.x,i.y)&&M(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function u(e,n,t,r){var i=e.prev,o=e,f=e.next;if(M(i,o,f)>=0)return!1;for(var l=i.x<o.x?i.x<f.x?i.x:f.x:o.x<f.x?o.x:f.x,u=i.y<o.y?i.y<f.y?i.y:f.y:o.y<f.y?o.y:f.y,a=i.x>o.x?i.x>f.x?i.x:f.x:o.x>f.x?o.x:f.x,x=i.y>o.y?i.y>f.y?i.y:f.y:o.y>f.y?o.y:f.y,c=g(l,u,n,t,r),s=g(a,x,n,t,r),y=e.prevZ,h=e.nextZ;y&&y.z>=c&&h&&h.z<=s;){if(y!==e.prev&&y!==e.next&&w(i.x,i.y,o.x,o.y,f.x,f.y,y.x,y.y)&&M(y.prev,y,y.next)>=0)return!1;if(y=y.prevZ,h!==e.prev&&h!==e.next&&w(i.x,i.y,o.x,o.y,f.x,f.y,h.x,h.y)&&M(h.prev,h,h.next)>=0)return!1;h=h.nextZ}for(;y&&y.z>=c;){if(y!==e.prev&&y!==e.next&&w(i.x,i.y,o.x,o.y,f.x,f.y,y.x,y.y)&&M(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;h&&h.z<=s;){if(h!==e.prev&&h!==e.next&&w(i.x,i.y,o.x,o.y,f.x,f.y,h.x,h.y)&&M(h.prev,h,h.next)>=0)return!1;h=h.nextZ}return!0}function a(e,n,t){var r=e;do{var i=r.prev,f=r.next.next;!b(i,f)&&_(i,r,r.next,f)&&B(i,f)&&B(f,i)&&(n.push(i.i/t),n.push(r.i/t),n.push(f.i/t),E(r),E(r.next),r=e=f),r=r.next}while(r!==e);return o(r)}function x(e,n,t,r,i,l){var u=e;do{for(var a=u.next.next;a!==u.prev;){if(u.i!==a.i&&A(u,a)){var x=S(u,a);return u=o(u,u.next),x=o(x,x.next),f(u,n,t,r,i,l),void f(x,n,t,r,i,l)}a=a.next}u=u.next}while(u!==e)}function c(e,n,t,r){var f,l,u,a=[];for(f=0,l=n.length;f<l;f++)(u=i(e,n[f]*r,f<l-1?n[f+1]*r:e.length,r,!1))===u.next&&(u.steiner=!0),a.push(d(u));for(a.sort(s),f=0;f<a.length;f++)t=o(t=h(a[f],t),t.next);return t}function s(e,n){return e.x-n.x}function y(e){if(e.next.prev===e)return e;let n=e;for(;;){const t=n.next;if(t.prev===n||t===n||t===e)break;n=t}return n}function h(e,n){var t=function(e,n){var t,r=n,i=e.x,o=e.y,f=-1/0;do{if(o<=r.y&&o>=r.next.y&&r.next.y!==r.y){var l=r.x+(o-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(l<=i&&l>f){if(f=l,l===i){if(o===r.y)return r;if(o===r.next.y)return r.next}t=r.x<r.next.x?r:r.next}}r=r.next}while(r!==n);if(!t)return null;if(i===f)return t;var u,a=t,x=t.x,c=t.y,s=1/0;r=t;do{i>=r.x&&r.x>=x&&i!==r.x&&w(o<c?i:f,o,x,c,o<c?f:i,o,r.x,r.y)&&(u=Math.abs(o-r.y)/(i-r.x),B(r,e)&&(u<s||u===s&&(r.x>t.x||r.x===t.x&&p(t,r)))&&(t=r,s=u)),r=r.next}while(r!==a);return t}(e,n);if(!t)return n;var r=S(t,e),i=o(t,t.next);let f=y(r);return o(f,f.next),i=y(i),y(n===t?i:n)}function p(e,n){return M(e.prev,e,n.prev)<0&&M(n.next,e,e.next)<0}function v(e,n,t,r){var i=e;do{null===i.z&&(i.z=g(i.x,i.y,n,t,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,function(e){var n,t,r,i,o,f,l,u,a=1;do{for(t=e,e=null,o=null,f=0;t;){for(f++,r=t,l=0,n=0;n<a&&(l++,r=r.nextZ);n++);for(u=a;l>0||u>0&&r;)0!==l&&(0===u||!r||t.z<=r.z)?(i=t,t=t.nextZ,l--):(i=r,r=r.nextZ,u--),o?o.nextZ=i:e=i,i.prevZ=o,o=i;t=r}o.nextZ=null,a*=2}while(f>1)}(i)}function g(e,n,t,r,i){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-t)*i)|e<<8))|e<<4))|e<<2))|e<<1))|(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=32767*(n-r)*i)|n<<8))|n<<4))|n<<2))|n<<1))<<1}function d(e){var n=e,t=e;do{(n.x<t.x||n.x===t.x&&n.y<t.y)&&(t=n),n=n.next}while(n!==e);return t}function w(e,n,t,r,i,o,f,l){return(i-f)*(n-l)-(e-f)*(o-l)>=0&&(e-f)*(r-l)-(t-f)*(n-l)>=0&&(t-f)*(o-l)-(i-f)*(r-l)>=0}function A(e,n){return e.next.i!==n.i&&e.prev.i!==n.i&&!function(e,n){var t=e;do{if(t.i!==e.i&&t.next.i!==e.i&&t.i!==n.i&&t.next.i!==n.i&&_(t,t.next,e,n))return!0;t=t.next}while(t!==e);return!1}(e,n)&&(B(e,n)&&B(n,e)&&function(e,n){var t=e,r=!1,i=(e.x+n.x)/2,o=(e.y+n.y)/2;do{t.y>o!=t.next.y>o&&t.next.y!==t.y&&i<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next}while(t!==e);return r}(e,n)&&(M(e.prev,e,n.prev)||M(e,n.prev,n))||b(e,n)&&M(e.prev,e,e.next)>0&&M(n.prev,n,n.next)>0)}function M(e,n,t){return(n.y-e.y)*(t.x-n.x)-(n.x-e.x)*(t.y-n.y)}function b(e,n){return e.x===n.x&&e.y===n.y}function _(e,n,t,r){var i=m(M(e,n,t)),o=m(M(e,n,r)),f=m(M(t,r,e)),l=m(M(t,r,n));return i!==o&&f!==l||!(0!==i||!Z(e,t,n))||!(0!==o||!Z(e,r,n))||!(0!==f||!Z(t,e,r))||!(0!==l||!Z(t,n,r))}function Z(e,n,t){return n.x<=Math.max(e.x,t.x)&&n.x>=Math.min(e.x,t.x)&&n.y<=Math.max(e.y,t.y)&&n.y>=Math.min(e.y,t.y)}function m(e){return e>0?1:e<0?-1:0}function B(e,n){return M(e.prev,e,e.next)<0?M(e,n,e.next)>=0&&M(e,e.prev,n)>=0:M(e,n,e.prev)<0||M(e,e.next,n)<0}function S(e,n){var t=new z(e.i,e.x,e.y),r=new z(n.i,n.x,n.y),i=e.next,o=n.prev;return e.next=n,n.prev=e,t.next=i,i.prev=t,r.next=t,t.prev=r,o.next=r,r.prev=o,r}function U(e,n,t,r){var i=new z(e,n,t);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function E(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function z(e,n,t){this.i=e,this.x=n,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function C(e,n,t,r){for(var i=0,o=n,f=t-r;o<t;o+=r)i+=(e[f]-e[o])*(e[o+1]+e[f+1]),f=o;return i}t.d(n,{e:()=>r}),r.deviation=function(e,n,t,r){var i=n&&n.length,o=i?n[0]*t:e.length,f=Math.abs(C(e,0,o,t));if(i)for(var l=0,u=n.length;l<u;l++){var a=n[l]*t,x=l<u-1?n[l+1]*t:e.length;f-=Math.abs(C(e,a,x,t))}var c=0;for(l=0;l<r.length;l+=3){var s=r[l]*t,y=r[l+1]*t,h=r[l+2]*t;c+=Math.abs((e[s]-e[h])*(e[y+1]-e[s+1])-(e[s]-e[y])*(e[h+1]-e[s+1]))}return 0===f&&0===c?0:Math.abs((c-f)/f)},r.flatten=function(e){for(var n=e[0][0].length,t={vertices:[],holes:[],dimensions:n},r=0,i=0;i<e.length;i++){for(var o=0;o<e[i].length;o++)for(var f=0;f<n;f++)t.vertices.push(e[i][o][f]);i>0&&(r+=e[i-1].length,t.holes.push(r))}return t}},12288:(e,n,t)=>{t.d(n,{Wq:()=>r,lO:()=>s,oR:()=>y});var r,i,o=t(8374),f=t(91345),l=t(53053),u=t(66028),a=t(55239),x=t(79787),c=t(28983);function s(e){const n=y(e.rings,e.hasZ,r.CCW_IS_HOLE,e.spatialReference),t=new Array;let i=0,f=0;for(const r of n.polygons){const e=r.count,l=r.index,x=(0,u.l5)(n.position,3*l,3*e),c=r.holeIndices.map((e=>e-l)),s=(0,a.Dg)((0,o.e)(x,c,3));t.push({position:x,faces:s}),i+=x.length,f+=s.length}const l=function(e,n,t){if(1===e.length)return e[0];const r=(0,u.jh)(n),i=new Array(t);let o=0,f=0,l=0;for(const u of e){for(let e=0;e<u.position.length;e++)r[o++]=u.position[e];for(const e of u.faces)i[f++]=e+l;l=o/3}return{position:r,faces:(0,a.Dg)(i)}}(t,i,f),x=Array.isArray(l.position)?(0,c.b)(l.position,3,{originalIndices:l.faces}):(0,c.b)(l.position.buffer,6,{originalIndices:l.faces});return l.position=(0,u.xm)(new Float64Array(x.buffer)),l.faces=x.indices,l}function y(e,n,t,i){const o=e.length,f=new Array(o),l=new Array(o),a=new Array(o);let x=0;for(let r=0;r<o;++r)x+=e[r].length;let c=0,s=0,y=0;const v=(0,u.jh)(3*x);let g=0;for(let u=o-1;u>=0;u--){const x=e[u],d=t===r.CCW_IS_HOLE&&p(x,n,i);if(d&&1!==o)f[c++]=x;else{let e=x.length;for(let n=0;n<c;++n)e+=f[n].length;const t={index:g,pathLengths:new Array(c+1),count:e,holeIndices:new Array(c)};t.pathLengths[0]=x.length,x.length>0&&(a[y++]={index:g,count:x.length}),g=d?h(x,x.length-1,-1,v,g,x.length,n):h(x,0,1,v,g,x.length,n);for(let r=0;r<c;++r){const e=f[r];t.holeIndices[r]=g,t.pathLengths[r+1]=e.length,e.length>0&&(a[y++]={index:g,count:e.length}),g=h(e,0,1,v,g,e.length,n)}c=0,t.count>0&&(l[s++]=t)}}for(let r=0;r<c;++r){const e=f[r];e.length>0&&(a[y++]={index:g,count:e.length}),g=h(e,0,1,v,g,e.length,n)}return l.length=s,a.length=y,{position:v,polygons:l,outlines:a}}function h(e,n,t,r,i,o,f){i*=3;for(let l=0;l<o;++l){const o=e[n];r[i++]=o[0],r[i++]=o[1],r[i++]=f&&o[2]?o[2]:0,n+=t}return i/3}function p(e,n,t){if(!n)return!(0,l.$3)(e);const r=e.length-1;switch((0,x.S)(e,r,t)){case f._.X:return!(0,l.$3)(e,f._.Y,f._.Z);case f._.Y:return!(0,l.$3)(e,f._.X,f._.Z);case f._.Z:return!(0,l.$3)(e,f._.X,f._.Y)}}(i=r||(r={}))[i.NONE=0]="NONE",i[i.CCW_IS_HOLE=1]="CCW_IS_HOLE"},14967:(e,n,t)=>{t.r(n),t.d(n,{default:()=>c});var r,i=t(93800),o=t(85715),f=t(19455),l=t(48602),u=(t(21265),t(50925),t(14746),t(47332)),a=t(75269);let x=r=class extends(o.A.ClonableMixin(f.A)){constructor(e){super(e),this.type="georeferenced",this.origin=null}};x.absolute=new r,(0,i._)([(0,u.e)({georeferenced:"georeferenced"},{readOnly:!0})],x.prototype,"type",void 0),(0,i._)([(0,l.MZ)({type:[Number],nonNullable:!1,json:{write:!0}})],x.prototype,"origin",void 0),x=r=(0,i._)([(0,a.$)("esri.geometry.support.MeshGeoreferencedVertexSpace")],x);const c=x},20444:(e,n,t)=>{t.d(n,{CK:()=>a,E9:()=>l,Hq:()=>u,MW:()=>x,TE:()=>c,yJ:()=>s});var r=t(89227),i=t(75400),o=t(14967),f=t(55928);function l(e){return null==e.origin}function u(e){return null!=e.origin}function a(e){return u(e.vertexSpace)}function x(e,n){if(!u(e))return null;const[t,r,o]=e.origin;return new i.default({x:t,y:r,z:o,spatialReference:n})}function c(e,n){const{x:t,y:r,z:i,spatialReference:l}=e,u=[t,r,i??0];return"local"===(n?.vertexSpace??function(e){return e.isGeographic||e.isWebMercator?"local":"georeferenced"}(l))?new f.default({origin:u}):new o.default({origin:u})}function s(e,n){return e.type===n.type&&(e.origin===n.origin||null!=e.origin&&null!=n.origin&&(0,r.p)(e.origin,n.origin))}},28983:(e,n,t)=>{t.d(n,{b:()=>o});var r=t(64682),i=t(55239);function o(e,n,t){const o=Array.isArray(e),x=o?e.length/n:e.byteLength/(4*n),c=o?e:new Uint32Array(e,0,x*n),s=t?.minReduction??0,y=t?.originalIndices||null,h=y?y.length:0,p=t?.componentOffsets||null;let v=0;if(p)for(let r=0;r<p.length-1;r++){const e=p[r+1]-p[r];e>v&&(v=e)}else v=x;const g=Math.floor(1.1*v)+1;(null==a||a.length<2*g)&&(a=new Uint32Array((0,r.cU)(2*g)));for(let r=0;r<2*g;r++)a[r]=0;let d=0;const w=!!p&&!!y,A=w?h:x;let M=(0,i.my)(x);const b=new Uint32Array(h),_=1.96;let Z=0!==s?Math.ceil(4*_*_/(s*s)*s*(1-s)):A,m=1,B=p?p[1]:A;for(let r=0;r<A;r++){if(r===Z){const e=1-d/r;if(e+_*Math.sqrt(e*(1-e)/r)<s)return null;Z*=2}if(r===B){for(let e=0;e<2*g;e++)a[e]=0;if(y)for(let e=p[m-1];e<p[m];e++)b[e]=M[y[e]];B=p[++m]}const e=w?y[r]:r,t=e*n,i=u(c,t,n);let o=i%g,l=d;for(;0!==a[2*o+1];){if(a[2*o]===i){const e=a[2*o+1]-1;if(f(c,t,e*n,n)){l=M[e];break}}o++,o>=g&&(o-=g)}l===d&&(a[2*o]=i,a[2*o+1]=e+1,d++),M[e]=l}if(0!==s&&1-d/x<s)return null;if(w){for(let e=p[m-1];e<b.length;e++)b[e]=M[y[e]];M=(0,i.Dg)(b)}const S=o?new Array(d):new Uint32Array(d*n);d=0;for(let r=0;r<A;r++)M[r]===d&&(l(c,(w?y[r]:r)*n,S,d*n,n),d++);if(y&&!w){const e=new Uint32Array(h);for(let n=0;n<e.length;n++)e[n]=M[y[n]];M=(0,i.Dg)(e)}return{buffer:Array.isArray(S)?S:S.buffer,indices:M,uniqueCount:d}}function f(e,n,t,r){for(let i=0;i<r;i++)if(e[n+i]!==e[t+i])return!1;return!0}function l(e,n,t,r,i){for(let o=0;o<i;o++)t[r+o]=e[n+o]}function u(e,n,t){let r=0;for(let i=0;i<t;i++)r=e[n+i]+r|0,r=r+(r<<11)+(r>>>2)|0;return r>>>0}let a=null},40753:(e,n,t)=>{t.d(n,{a:()=>c,b:()=>l,c:()=>f,d:()=>i,e:()=>s,f:()=>x,l:()=>a,n:()=>y,t:()=>o});var r=t(8601);t(21265),t(50925);function i(e,n,t){o(e.typedBuffer,n.typedBuffer,t,e.typedBufferStride,n.typedBufferStride)}function o(e,n,t){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;if(e.length/r!==Math.ceil(n.length/i))return e;const o=e.length/r,f=t[0],l=t[1],u=t[2],a=t[4],x=t[5],c=t[6],s=t[8],y=t[9],h=t[10],p=t[12],v=t[13],g=t[14];let d=0,w=0;for(let A=0;A<o;A++){const t=n[d],o=n[d+1],A=n[d+2];e[w]=f*t+a*o+s*A+p,e[w+1]=l*t+x*o+y*A+v,e[w+2]=u*t+c*o+h*A+g,d+=i,w+=r}return e}function f(e,n,t){l(e.typedBuffer,n.typedBuffer,t,e.typedBufferStride,n.typedBufferStride)}function l(e,n,t){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;if(e.length/r!==Math.ceil(n.length/i))return;const o=e.length/r,f=t[0],l=t[1],u=t[2],a=t[3],x=t[4],c=t[5],s=t[6],y=t[7],h=t[8];let p=0,v=0;for(let g=0;g<o;g++){const t=n[p],o=n[p+1],g=n[p+2];e[v]=f*t+a*o+s*g,e[v+1]=l*t+x*o+y*g,e[v+2]=u*t+c*o+h*g,p+=i,v+=r}}function u(e,n,t){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;const o=Math.min(e.length/r,n.length/i);let f=0,l=0;for(let u=0;u<o;u++)e[l]=t*n[f],e[l+1]=t*n[f+1],e[l+2]=t*n[f+2],f+=i,l+=r;return e}function a(e,n,t,r){x(e.typedBuffer,n.typedBuffer,t,r,e.typedBufferStride,n.typedBufferStride)}function x(e,n,t,i){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:3,f=arguments.length>5&&void 0!==arguments[5]?arguments[5]:o;const l=Math.min(e.length/o,n.length/f);let u=0,a=0;const x=1/r.Tf;for(let r=0;r<l;r++)e[a]=i*(t*n[u])**x,e[a+1]=i*(t*n[u+1])**x,e[a+2]=i*(t*n[u+2])**x,u+=f,a+=o}function c(e,n,t){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;const o=e.length/r;if(o!==Math.ceil(n.length/i))return e;let f=0,l=0;for(let u=0;u<o;u++)e[l]=n[f]+t[0],e[l+1]=n[f+1]+t[1],e[l+2]=n[f+2]+t[2],f+=i,l+=r;return e}function s(e,n){y(e.typedBuffer,n.typedBuffer,e.typedBufferStride,n.typedBufferStride)}function y(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t;const i=Math.min(e.length/t,n.length/r);let o=0,f=0;for(let l=0;l<i;l++){const i=n[o],l=n[o+1],u=n[o+2],a=i*i+l*l+u*u;if(a>0){const n=1/Math.sqrt(a);e[f]=n*i,e[f+1]=n*l,e[f+2]=n*u}o+=r,f+=t}}Object.freeze(Object.defineProperty({__proto__:null,linearToSRGB:x,linearToSRGBView:a,normalize:y,normalizeView:s,scale:u,scaleView:function(e,n,t){u(e.typedBuffer,n.typedBuffer,t,e.typedBufferStride,n.typedBufferStride)},shiftRight:function(e,n,t){const r=Math.min(e.count,n.count),i=e.typedBuffer,o=e.typedBufferStride,f=n.typedBuffer,l=n.typedBufferStride;let u=0,a=0;for(let x=0;x<r;x++)i[a]=f[u]>>t,i[a+1]=f[u+1]>>t,i[a+2]=f[u+2]>>t,u+=l,a+=o},transformMat3:l,transformMat3View:f,transformMat4:o,transformMat4View:i,translate:c},Symbol.toStringTag,{value:"Module"}))},55239:(e,n,t)=>{t.d(n,{BF:()=>h,Dg:()=>i,EH:()=>y,JH:()=>f,my:()=>o,tM:()=>x});var r=t(25048);function i(e){if(Array.isArray(e)){if(e.length<r.y9)return e}else if(e.length<r.y9)return Array.from(e);let n=!0,t=!0;return e.some(((e,r)=>(n=n&&0===e,t=t&&e===r,!n&&!t))),n?y(e.length):t?x(e.length):(0,r.iu)(e)&&e.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT?e:function(e){let n=!0;for(const t of e){if(t>=65536)return(0,r.iu)(e)?e:new Uint32Array(e);t>=256&&(n=!1)}return n?new Uint8Array(e):new Uint16Array(e)}(e)}function o(e){return e<=r.y9?new Array(e):e<=65536?new Uint16Array(e):new Uint32Array(e)}function f(e){return e<=r.y9?new Array(e):new Uint32Array(e)}let l=c(131072);const u=[0],a=(()=>{const e=new Uint16Array(65536);for(let n=0;n<e.length;++n)e[n]=n;return e})();function x(e){return 1===e?u:e<r.y9?Array.from(new Uint16Array(a.buffer,0,e)):e<a.length?new Uint16Array(a.buffer,0,e):(e>l.length&&(l=c(Math.max(2*l.length,e))),new Uint32Array(l.buffer,0,e))}function c(e){const n=new Uint32Array(e);for(let t=0;t<n.length;t++)n[t]=t;return n}let s=new Uint8Array(65536);function y(e){if(1===e)return u;if(e<r.y9)return new Array(e).fill(0);if(e>s.length){const n=Math.max(2*s.length,e);s=new Uint8Array(n)}return new Uint8Array(s.buffer,0,e)}function h(){l=c(131072),s=new Uint8Array(65536)}},55928:(e,n,t)=>{t.r(n),t.d(n,{default:()=>c});var r=t(93800),i=t(85715),o=t(19455),f=t(48602),l=(t(21265),t(50925),t(14746),t(47332)),u=t(75269),a=t(28473);let x=class extends(i.A.ClonableMixin(o.A)){constructor(e){super(e),this.type="local",this.origin=(0,a.vt)()}};(0,r._)([(0,l.e)({local:"local"},{readOnly:!0})],x.prototype,"type",void 0),(0,r._)([(0,f.MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],x.prototype,"origin",void 0),x=(0,r._)([(0,u.$)("esri.geometry.support.MeshLocalVertexSpace")],x);const c=x},79787:(e,n,t)=>{t.d(n,{S:()=>u});var r=t(64682),i=t(84190),o=t(89227),f=t(91345),l=t(10872);function u(e,n,t){const u=function(e,n,t,r){const f=(e=>!Array.isArray(e[0]))(n)?(e,t)=>n[3*e+t]:(e,t)=>n[e][t],u=r?(0,i.GA)(r)/(0,i.G9)(r):1;return(0,l.lU)(e,((e,n)=>(0,o.i)(e,f(n,0)*u,f(n,1)*u,f(n,2))),t)}(a,e,n,t)?(0,l.Qj)(a):[0,0,1];return Math.abs(u[2])>Math.cos((0,r.kU)(80))?f._.Z:Math.abs(u[1])>Math.abs(u[0])?f._.Y:f._.X}const a=(0,l.vt)()}}]);