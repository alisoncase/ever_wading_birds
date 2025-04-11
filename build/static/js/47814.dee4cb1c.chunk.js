"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[3885,26266,47814,71028],{26266:(e,t,n)=>{n.r(t),n.d(t,{InverseGeodeticSolverResult:()=>y,directGeodeticSolver:()=>_,geodesicAreas:()=>v,geodesicCompatibleSpatialReference:()=>z,geodesicDensify:()=>w,geodesicDistance:()=>b,geodesicLengths:()=>M,inverseGeodeticSolver:()=>R,isSupported:()=>m,pointFromDistance:()=>E});var i=n(74719),r=n(84190),a=n(80556),s=n(75400),o=n(65920),l=n(54824),u=n(93321),c=n(64226),h=n(70576);function d(e){if(!e)return null;const t=e.wkid;if(t)return c.uw[t];const n=e.wkt2??e.wkt;return n?function(e){const t=c._f.exec(e);if(!t||2!==t.length)return null;const n=t[1].split(",");if(!n||n.length<3)return null;const i=parseFloat(n[1]),r=parseFloat(n[2]);return isNaN(i)||isNaN(r)?null:{a:i,f:0===r?0:1/r}}(n):null}function f(e){const t=d(e);if(function(e){return null!=e&&"b"in e&&"eSq"in e&&"radius"in e}(t))return t;const n=t.a*(1-t.f);return Object.assign(t,{b:n,eSq:1-(n/t.a)**2,radius:(2*t.a+n)/3,densificationRatio:1e4/((2*t.a+n)/3)})}function p(e){return null!=e&&e<0?e+360:e}function g(e,t,n){const{a:i,eSq:r}=f(n),a=Math.sqrt(r),s=Math.sin(t[1]*c.eh),o=i*t[0]*c.eh;let l;return l=r>0?i*((1-r)*(s/(1-r*(s*s))-1/(2*a)*Math.log((1-a*s)/(1+a*s))))*.5:i*s,e[0]=o,e[1]=l,e}function m(e){return(0,h.EA)(e)&&!!d(e)}function v(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"square-meters";if(e.some((e=>!m(e.spatialReference))))throw new i.default("geodesic-areas:invalid-spatial-reference","the input geometries spatial reference is not supported");const n=[];for(let i=0;i<e.length;i++){const t=e[i],r=t.spatialReference,{radius:a,densificationRatio:s}=f(r),o=a*s;n.push(w(t,o))}const a=[],s=[0,0],o=[0,0];for(let i=0;i<n.length;i++){const{rings:e,spatialReference:l}=n[i];let u=0;for(let t=0;t<e.length;t++){const n=e[t];g(s,n[0],l),g(o,n[n.length-1],l);let i=o[0]*s[1]-s[0]*o[1];for(let e=0;e<n.length-1;e++)g(s,n[e+1],l),g(o,n[e],l),i+=o[0]*s[1]-s[0]*o[1];u+=i}u=(0,r.oU)(u,"square-meters",t),a.push(u/-2)}return a}function M(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"meters";if(!e)throw new i.default("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(e.some((e=>!m(e.spatialReference))))throw new i.default("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");const n=[];for(let i=0;i<e.length;i++){const a=e[i],{spatialReference:s}=a,o="polyline"===a.type?a.paths:a.rings;let l=0;for(let e=0;e<o.length;e++){const t=o[e];let n=0;for(let e=1;e<t.length;e++){const i=t[e-1][0],r=t[e][0],a=t[e-1][1],o=t[e][1];if(a!==o||i!==r){const e=new y;R(e,[i,a],[r,o],s),n+=e.distance}}l+=n}l=(0,r.oU)(l,"meters",t),n.push(l)}return n}function w(e,t){if("polyline"!==e.type&&"polygon"!==e.type)throw new i.default("geodesic-densify:invalid-geometry","the input geometry is neither polyline nor polygon");const{spatialReference:n}=e;if(!m(n))throw new i.default("geodesic-densify:invalid-spatial-reference","the input geometry spatial reference is not supported");const r="polyline"===e.type?e.paths:e.rings,s=[],c=[0,0],h=new y;for(const i of r){const e=[];s.push(e),e.push([i[0][0],i[0][1]]);let r,a,o=i[0][0],l=i[0][1];for(let s=0;s<i.length-1;s++){if(r=i[s+1][0],a=i[s+1][1],o===r&&l===a)continue;const u=[o,l];R(h,[o,l],[r,a],n);const{azimuth:d,distance:f}=h,p=f/t;if(p>1){for(let i=1;i<=p-1;i++)_(c,u,d,i*t,n),e.push(c.slice());_(c,u,d,(f+Math.floor(p-1)*t)/2,n),e.push(c.slice())}_(c,u,d,f,n),e.push(c.slice()),o=c[0],l=c[1]}}const d=(0,a.PZ)(u.default,n);return"polyline"===e.type?new l.default({paths:s,spatialReference:d}):new o.default({rings:s,spatialReference:d})}class y{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;this.distance=e,this.azimuth=t,this.reverseAzimuth=n}}function _(e,t,n,i,r){const a=t[0],s=t[1],o=a*c.eh,l=s*c.eh,u=(n??0)*c.eh,{a:h,b:d,f:p}=f(r),g=Math.sin(u),m=Math.cos(u),v=(1-p)*Math.tan(l),M=1/Math.sqrt(1+v*v),w=v*M,y=Math.atan2(v,m),_=M*g,R=_*_,b=1-R,E=b*(h*h-d*d)/(d*d),z=1+E/16384*(4096+E*(E*(320-175*E)-768)),q=E/1024*(256+E*(E*(74-47*E)-128));let D,S,A,k=i/(d*z),G=2*Math.PI;for(;Math.abs(k-G)>1e-12;)A=Math.cos(2*y+k),D=Math.sin(k),S=Math.cos(k),G=k,k=i/(d*z)+q*D*(A+q/4*(S*(2*A*A-1)-q/6*A*(4*D*D-3)*(4*A*A-3)));const x=w*D-M*S*m,N=Math.atan2(w*S+M*D*m,(1-p)*Math.sqrt(R+x*x)),Z=p/16*b*(4+p*(4-3*b)),L=Math.atan2(D*g,M*S-w*D*m)-(1-Z)*p*_*(k+Z*D*(A+Z*S*(2*A*A-1)));return e[0]=(o+L)/c.eh,e[1]=N/c.eh,e}function R(e,t,n,i){const r=t[0]*c.eh,a=t[1]*c.eh,s=n[0]*c.eh,o=n[1]*c.eh,{a:l,b:u,f:h,radius:d}=f(i),p=s-r,g=Math.atan((1-h)*Math.tan(a)),m=Math.atan((1-h)*Math.tan(o)),v=Math.sin(g),M=Math.cos(g),w=Math.sin(m),y=Math.cos(m);let _,R,b,E,z,q,D,S,A,k,G=1e3,x=p;do{if(D=Math.sin(x),S=Math.cos(x),b=Math.sqrt(y*D*(y*D)+(M*w-v*y*S)*(M*w-v*y*S)),0===b)return e.distance=0,e.azimuth=void 0,e.reverseAzimuth=void 0,e;z=v*w+M*y*S,q=Math.atan2(b,z),A=M*y*D/b,R=1-A*A,E=z-2*v*w/R,isNaN(E)&&(E=0),k=h/16*R*(4+h*(4-3*R)),_=x,x=p+(1-k)*h*A*(q+k*b*(E+k*z*(2*E*E-1)))}while(Math.abs(x-_)>1e-12&&--G>0);if(0===G){const t=d,n=Math.acos(Math.sin(a)*Math.sin(o)+Math.cos(a)*Math.cos(o)*Math.cos(s-r))*t,i=s-r,l=Math.sin(i)*Math.cos(o),u=Math.cos(a)*Math.sin(o)-Math.sin(a)*Math.cos(o)*Math.cos(i),h=Math.atan2(l,u);return e.azimuth=h/c.eh,e.distance=n,e.reverseAzimuth=void 0,e}const N=R*(l*l-u*u)/(u*u),Z=N/1024*(256+N*(N*(74-47*N)-128)),L=u*(1+N/16384*(4096+N*(N*(320-175*N)-768)))*(q-Z*b*(E+Z/4*(z*(2*E*E-1)-Z/6*E*(4*b*b-3)*(4*E*E-3)))),P=Math.atan2(y*Math.sin(x),M*w-v*y*Math.cos(x)),C=Math.atan2(M*Math.sin(x),M*w*Math.cos(x)-v*y);return e.azimuth=P/c.eh,e.distance=L,e.reverseAzimuth=C/c.eh,e}function b(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"meters";if(!e||!t)throw new i.default("geodesic-distance:missing-parameters","one or both input parameters are missing");if(!e.spatialReference||!t.spatialReference)throw new i.default("geodesic-distance:invalid-parameters","one or both input points do not have a spatial reference");if(!(0,h.aI)(e.spatialReference,t.spatialReference))throw new i.default("geodesic-distance:invalid-parameters","spatial references of input parameters do not match");const{spatialReference:a}=e;if(!m(a))throw new i.default("geodesic-distance:not-supported","input geometry spatial reference is not supported");if(e.x===t.x&&e.y===t.y)return new y(0,0,0);const s=new y;return R(s,[e.x,e.y],[t.x,t.y],a),s.distance=(0,r.oU)(s.distance,"meters",n),s.azimuth=p(s.azimuth),s.reverseAzimuth=p(s.reverseAzimuth),s}function E(e,t,n){if(!e||null==t||null==n)throw new i.default("point-from-distance:missing-parameters","one or more input parameters are missing or undefined");if(n<0||n>360)throw new i.default("point-from-distance:-of-bounds","azimuth is restricted to angles between, and including, 0\xb0 to 360\xb0 degrees");if(!e.spatialReference)throw new i.default("point-from-distance:missing-spatial-reference","the input point must have a spatial reference");const{spatialReference:r}=e;if(!m(r))throw new i.default("geodesic-distance:not-supported","input geometry spatial reference is not supported");const a=[0,0];return _(a,[e.x,e.y],n,t,r),new s.default({x:a[0],y:a[1],spatialReference:r})}function z(e){return m(e)?e:(0,h.K8)(e)?u.default.WGS84:null}},36867:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var i=n(93800),r=n(88102),a=n(42198),s=n(13561),o=n(79953),l=n(84190),u=n(48602),c=(n(21265),n(50925),n(14746),n(75269)),h=n(87465),d=n(39273);let f=class extends h.default{constructor(e){super(e),this.type="ground",this.color=new r.default("#ff7f00"),this.viewVisualizationEnabled=!0,this.numSamplesForPreview=50,this.numSamplesPerChunk=1e3,this._getQueryElevationDependencies=(0,s.B)(((e,t)=>({ground:e,groundLayers:t})))}get available(){const e=this._ground;return null!=e&&e.layers.some((e=>e.visible))}get minDemResolution(){return(0,d.W)(this._ground)}get _queryElevationDependencies(){return this._getQueryElevationDependencies(this._ground,this._groundLayers)}get _ground(){return this._viewModel?.view?.map?.ground}get _groundLayers(){return this._ground?.layers?.toArray()??[]}async queryElevation(e,t){const n=this._queryElevationDependencies;if(null==n)throw new Error("ElevationProfileLineGround: no dependencies");const{ground:i}=n;if(null==i)throw new Error("No ground configured in the view");const r=await i.queryElevation(e,t),a=(0,l.G9)(e.spatialReference),s=(0,l.G9)(i.layers.at(0).spatialReference);if(a!==s){const e=r.geometry;e.points=e.points.map((e=>{let[n,i,r]=e;return[n,i,r===t.noDataValue?r:r*s/a]}))}return r}attach(e){return(0,a.vE)([super.attach(e),(0,o.watch)((()=>this._queryElevationDependencies),(()=>this._onChange()))])}};(0,i._)([(0,u.MZ)({type:r.default,nonNullable:!0})],f.prototype,"color",void 0),(0,i._)([(0,u.MZ)()],f.prototype,"viewVisualizationEnabled",void 0),(0,i._)([(0,u.MZ)()],f.prototype,"available",null),(0,i._)([(0,u.MZ)({readOnly:!0})],f.prototype,"minDemResolution",null),(0,i._)([(0,u.MZ)()],f.prototype,"_queryElevationDependencies",null),(0,i._)([(0,u.MZ)()],f.prototype,"_ground",null),(0,i._)([(0,u.MZ)()],f.prototype,"_groundLayers",null),f=(0,i._)([(0,c.$)("esri.widgets.ElevationProfile.ElevationProfileLineGround")],f);const p=f},39273:(e,t,n)=>{n.d(t,{W:()=>o,e:()=>s});var i=n(62631),r=n(84190),a=n(10900);function s(e){if(null==e)return null;if((0,a.Q)(e))return o(e);const t=e.tileInfo;if(null==t)return null;const n=t.lods?.at(-1);return null==n?null:n.resolution*(0,r.GA)(t.spatialReference)}function o(e){if(null==e)return null;const t=e.layers.items.map(l).filter(i.Ru);return(0,i.jk)(t)??null}function l(e){return e&&"tileInfo"in e?s(e):null}}}]);