"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[3885,26266,62776,71028],{26266:(e,t,n)=>{n.r(t),n.d(t,{InverseGeodeticSolverResult:()=>y,directGeodeticSolver:()=>b,geodesicAreas:()=>m,geodesicCompatibleSpatialReference:()=>_,geodesicDensify:()=>v,geodesicDistance:()=>z,geodesicLengths:()=>w,inverseGeodeticSolver:()=>R,isSupported:()=>M,pointFromDistance:()=>k});var i=n(74719),s=n(84190),a=n(80556),r=n(75400),o=n(65920),c=n(54824),l=n(93321),h=n(64226),u=n(70576);function d(e){if(!e)return null;const t=e.wkid;if(t)return h.uw[t];const n=e.wkt2??e.wkt;return n?function(e){const t=h._f.exec(e);if(!t||2!==t.length)return null;const n=t[1].split(",");if(!n||n.length<3)return null;const i=parseFloat(n[1]),s=parseFloat(n[2]);return isNaN(i)||isNaN(s)?null:{a:i,f:0===s?0:1/s}}(n):null}function f(e){const t=d(e);if(function(e){return null!=e&&"b"in e&&"eSq"in e&&"radius"in e}(t))return t;const n=t.a*(1-t.f);return Object.assign(t,{b:n,eSq:1-(n/t.a)**2,radius:(2*t.a+n)/3,densificationRatio:1e4/((2*t.a+n)/3)})}function p(e){return null!=e&&e<0?e+360:e}function g(e,t,n){const{a:i,eSq:s}=f(n),a=Math.sqrt(s),r=Math.sin(t[1]*h.eh),o=i*t[0]*h.eh;let c;return c=s>0?i*((1-s)*(r/(1-s*(r*r))-1/(2*a)*Math.log((1-a*r)/(1+a*r))))*.5:i*r,e[0]=o,e[1]=c,e}function M(e){return(0,u.EA)(e)&&!!d(e)}function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"square-meters";if(e.some((e=>!M(e.spatialReference))))throw new i.default("geodesic-areas:invalid-spatial-reference","the input geometries spatial reference is not supported");const n=[];for(let i=0;i<e.length;i++){const t=e[i],s=t.spatialReference,{radius:a,densificationRatio:r}=f(s),o=a*r;n.push(v(t,o))}const a=[],r=[0,0],o=[0,0];for(let i=0;i<n.length;i++){const{rings:e,spatialReference:c}=n[i];let l=0;for(let t=0;t<e.length;t++){const n=e[t];g(r,n[0],c),g(o,n[n.length-1],c);let i=o[0]*r[1]-r[0]*o[1];for(let e=0;e<n.length-1;e++)g(r,n[e+1],c),g(o,n[e],c),i+=o[0]*r[1]-r[0]*o[1];l+=i}l=(0,s.oU)(l,"square-meters",t),a.push(l/-2)}return a}function w(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"meters";if(!e)throw new i.default("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(e.some((e=>!M(e.spatialReference))))throw new i.default("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");const n=[];for(let i=0;i<e.length;i++){const a=e[i],{spatialReference:r}=a,o="polyline"===a.type?a.paths:a.rings;let c=0;for(let e=0;e<o.length;e++){const t=o[e];let n=0;for(let e=1;e<t.length;e++){const i=t[e-1][0],s=t[e][0],a=t[e-1][1],o=t[e][1];if(a!==o||i!==s){const e=new y;R(e,[i,a],[s,o],r),n+=e.distance}}c+=n}c=(0,s.oU)(c,"meters",t),n.push(c)}return n}function v(e,t){if("polyline"!==e.type&&"polygon"!==e.type)throw new i.default("geodesic-densify:invalid-geometry","the input geometry is neither polyline nor polygon");const{spatialReference:n}=e;if(!M(n))throw new i.default("geodesic-densify:invalid-spatial-reference","the input geometry spatial reference is not supported");const s="polyline"===e.type?e.paths:e.rings,r=[],h=[0,0],u=new y;for(const i of s){const e=[];r.push(e),e.push([i[0][0],i[0][1]]);let s,a,o=i[0][0],c=i[0][1];for(let r=0;r<i.length-1;r++){if(s=i[r+1][0],a=i[r+1][1],o===s&&c===a)continue;const l=[o,c];R(u,[o,c],[s,a],n);const{azimuth:d,distance:f}=u,p=f/t;if(p>1){for(let i=1;i<=p-1;i++)b(h,l,d,i*t,n),e.push(h.slice());b(h,l,d,(f+Math.floor(p-1)*t)/2,n),e.push(h.slice())}b(h,l,d,f,n),e.push(h.slice()),o=h[0],c=h[1]}}const d=(0,a.PZ)(l.default,n);return"polyline"===e.type?new c.default({paths:r,spatialReference:d}):new o.default({rings:r,spatialReference:d})}class y{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;this.distance=e,this.azimuth=t,this.reverseAzimuth=n}}function b(e,t,n,i,s){const a=t[0],r=t[1],o=a*h.eh,c=r*h.eh,l=(n??0)*h.eh,{a:u,b:d,f:p}=f(s),g=Math.sin(l),M=Math.cos(l),m=(1-p)*Math.tan(c),w=1/Math.sqrt(1+m*m),v=m*w,y=Math.atan2(m,M),b=w*g,R=b*b,z=1-R,k=z*(u*u-d*d)/(d*d),_=1+k/16384*(4096+k*(k*(320-175*k)-768)),x=k/1024*(256+k*(k*(74-47*k)-128));let S,q,A,P=i/(d*_),Z=2*Math.PI;for(;Math.abs(P-Z)>1e-12;)A=Math.cos(2*y+P),S=Math.sin(P),q=Math.cos(P),Z=P,P=i/(d*_)+x*S*(A+x/4*(q*(2*A*A-1)-x/6*A*(4*S*S-3)*(4*A*A-3)));const C=v*S-w*q*M,G=Math.atan2(v*q+w*S*M,(1-p)*Math.sqrt(R+C*C)),U=p/16*z*(4+p*(4-3*z)),O=Math.atan2(S*g,w*q-v*S*M)-(1-U)*p*b*(P+U*S*(A+U*q*(2*A*A-1)));return e[0]=(o+O)/h.eh,e[1]=G/h.eh,e}function R(e,t,n,i){const s=t[0]*h.eh,a=t[1]*h.eh,r=n[0]*h.eh,o=n[1]*h.eh,{a:c,b:l,f:u,radius:d}=f(i),p=r-s,g=Math.atan((1-u)*Math.tan(a)),M=Math.atan((1-u)*Math.tan(o)),m=Math.sin(g),w=Math.cos(g),v=Math.sin(M),y=Math.cos(M);let b,R,z,k,_,x,S,q,A,P,Z=1e3,C=p;do{if(S=Math.sin(C),q=Math.cos(C),z=Math.sqrt(y*S*(y*S)+(w*v-m*y*q)*(w*v-m*y*q)),0===z)return e.distance=0,e.azimuth=void 0,e.reverseAzimuth=void 0,e;_=m*v+w*y*q,x=Math.atan2(z,_),A=w*y*S/z,R=1-A*A,k=_-2*m*v/R,isNaN(k)&&(k=0),P=u/16*R*(4+u*(4-3*R)),b=C,C=p+(1-P)*u*A*(x+P*z*(k+P*_*(2*k*k-1)))}while(Math.abs(C-b)>1e-12&&--Z>0);if(0===Z){const t=d,n=Math.acos(Math.sin(a)*Math.sin(o)+Math.cos(a)*Math.cos(o)*Math.cos(r-s))*t,i=r-s,c=Math.sin(i)*Math.cos(o),l=Math.cos(a)*Math.sin(o)-Math.sin(a)*Math.cos(o)*Math.cos(i),u=Math.atan2(c,l);return e.azimuth=u/h.eh,e.distance=n,e.reverseAzimuth=void 0,e}const G=R*(c*c-l*l)/(l*l),U=G/1024*(256+G*(G*(74-47*G)-128)),O=l*(1+G/16384*(4096+G*(G*(320-175*G)-768)))*(x-U*z*(k+U/4*(_*(2*k*k-1)-U/6*k*(4*z*z-3)*(4*k*k-3)))),N=Math.atan2(y*Math.sin(C),w*v-m*y*Math.cos(C)),j=Math.atan2(w*Math.sin(C),w*v*Math.cos(C)-m*y);return e.azimuth=N/h.eh,e.distance=O,e.reverseAzimuth=j/h.eh,e}function z(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"meters";if(!e||!t)throw new i.default("geodesic-distance:missing-parameters","one or both input parameters are missing");if(!e.spatialReference||!t.spatialReference)throw new i.default("geodesic-distance:invalid-parameters","one or both input points do not have a spatial reference");if(!(0,u.aI)(e.spatialReference,t.spatialReference))throw new i.default("geodesic-distance:invalid-parameters","spatial references of input parameters do not match");const{spatialReference:a}=e;if(!M(a))throw new i.default("geodesic-distance:not-supported","input geometry spatial reference is not supported");if(e.x===t.x&&e.y===t.y)return new y(0,0,0);const r=new y;return R(r,[e.x,e.y],[t.x,t.y],a),r.distance=(0,s.oU)(r.distance,"meters",n),r.azimuth=p(r.azimuth),r.reverseAzimuth=p(r.reverseAzimuth),r}function k(e,t,n){if(!e||null==t||null==n)throw new i.default("point-from-distance:missing-parameters","one or more input parameters are missing or undefined");if(n<0||n>360)throw new i.default("point-from-distance:-of-bounds","azimuth is restricted to angles between, and including, 0\xb0 to 360\xb0 degrees");if(!e.spatialReference)throw new i.default("point-from-distance:missing-spatial-reference","the input point must have a spatial reference");const{spatialReference:s}=e;if(!M(s))throw new i.default("geodesic-distance:not-supported","input geometry spatial reference is not supported");const a=[0,0];return b(a,[e.x,e.y],n,t,s),new r.default({x:a[0],y:a[1],spatialReference:s})}function _(e){return M(e)?e:(0,u.K8)(e)?l.default.WGS84:null}},62776:(e,t,n)=>{n.r(t),n.d(t,{default:()=>M});var i,s=n(93800),a=n(84190),r=n(48602),o=(n(21265),n(50925),n(14746),n(75269)),c=n(30142),l=n(75400),h=n(65920),u=n(93321),d=n(26266),f=n(5616),p=n(12921);let g=i=class extends h.default{constructor(e){super(e),this.center=null,this.geodesic=!1,this.numberOfPoints=60,this.radius=1e3,this.radiusUnit="meters"}initialize(){const e=this.center,t=this.numberOfPoints;if(this.hasZ=e?.hasZ??!1,0!==this.rings.length||!e)return;const n=(0,a.oU)(this.radius,this.radiusUnit,"meters"),i=e.spatialReference;let s,r="geographic";if(i.isWebMercator?r="webMercator":(null!=(i.wkid&&p.A[i.wkid])||(i.wkt2||i.wkt)&&(0,a.x1)(i.wkt2||i.wkt))&&(r="projected"),this.geodesic){let i;switch(r){case"webMercator":i=(0,f.webMercatorToGeographic)(e);break;case"projected":console.error("Creating a geodesic circle requires the center to be specified in web mercator or geographic coordinate system");break;case"geographic":i=e}s=this._createGeodesicCircle(i,n,t),"webMercator"===r&&(s=(0,f.geographicToWebMercator)(s))}else{let i;"webMercator"===r||"projected"===r?i=n/(0,a.Ao)(e.spatialReference):"geographic"===r&&(i=(0,a.vl)(n,"meters",(0,c.tO)(e.spatialReference).radius)),s=this._createPlanarCircle(e,i,t)}this.spatialReference=s.spatialReference,this.addRing(s.rings[0])}clone(){const{center:e,numberOfPoints:t,radius:n,radiusUnit:s,geodesic:a}=this;return new i({center:e?.clone(),numberOfPoints:t,radius:n,radiusUnit:s,geodesic:a})}_createGeodesicCircle(e,t,n){const i=[],s=[e.x,e.y];for(let a=0;a<360;a+=360/n){const n=this.hasZ?[0,0,e.z??0]:[0,0];(0,d.directGeodeticSolver)(n,s,a,t,u.default.WGS84),i.push(n)}return i.push(i[0]),new h.default({rings:[i]})}_createPlanarCircle(e,t,n){const i=[],s=2*Math.PI/n;for(let a=0;a<n;++a){const n=s*a,r=[e.x+Math.cos(-n)*t,e.y+Math.sin(-n)*t];this.hasZ&&r.push(e.z??0),i.push(r)}return i.push(i[0]),new h.default({spatialReference:e.spatialReference,rings:[i]})}};(0,s._)([(0,r.MZ)({type:l.default})],g.prototype,"center",void 0),(0,s._)([(0,r.MZ)()],g.prototype,"geodesic",void 0),(0,s._)([(0,r.MZ)()],g.prototype,"numberOfPoints",void 0),(0,s._)([(0,r.MZ)()],g.prototype,"radius",void 0),(0,s._)([(0,r.MZ)()],g.prototype,"radiusUnit",void 0),g=i=(0,s._)([(0,o.$)("esri.geometry.Circle")],g);const M=g}}]);