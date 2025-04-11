"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[8880],{1277:(t,e,n)=>{n.d(e,{C:()=>l,Cr:()=>p,H6:()=>f,_I:()=>y,dz:()=>g,fA:()=>u,kb:()=>h,ld:()=>v,sd:()=>m,vt:()=>c});var r=n(64682),i=n(32636),o=n(89227),a=n(28473),s=n(1696);function c(t){return t?{origin:(0,a.o8)(t.origin),vector:(0,a.o8)(t.vector)}:{origin:(0,a.vt)(),vector:(0,a.vt)()}}function l(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c();return u(t.origin,t.vector,e)}function u(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c();return(0,o.c)(n.origin,t),(0,o.c)(n.vector,e),n}function p(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c();return(0,o.c)(n.origin,t),(0,o.d)(n.vector,e,t),n}function h(t,e){const n=(0,o.d)(s.rq.get(),e,t.origin),i=(0,o.f)(t.vector,n),a=(0,o.f)(t.vector,t.vector),c=(0,r.qE)(i/a,0,1),l=(0,o.d)(s.rq.get(),(0,o.h)(s.rq.get(),t.vector,c),n);return(0,o.f)(l,l)}function y(t,e,n){return f(t,e,0,1,n)}function m(t,e,n){return(0,o.g)(n,t.origin,(0,o.h)(n,t.vector,e))}function f(t,e,n,i,a){const{vector:c,origin:l}=t,u=(0,o.d)(s.rq.get(),e,l),p=(0,o.f)(c,u)/(0,o.k)(c);return(0,o.h)(a,c,(0,r.qE)(p,n,i)),(0,o.g)(a,a,t.origin)}function g(t,e){if(M(t,function(t,e){const n=d.get();return n.origin=t,n.vector=e,n}(e.origin,e.direction),!1,x)){const{tA:e,pB:n,distance2:r}=x;if(e>=0&&e<=1)return r;if(e<0)return(0,o.s)(t.origin,n);if(e>1)return(0,o.s)((0,o.g)(s.rq.get(),t.origin,t.vector),n)}return null}function v(t,e,n){return!!M(t,e,!0,x)&&((0,o.c)(n,x.pA),!0)}function M(t,e,n,i){const a=1e-6,c=t.origin,l=(0,o.g)(s.rq.get(),c,t.vector),u=e.origin,p=(0,o.g)(s.rq.get(),u,e.vector),h=s.rq.get(),y=s.rq.get();if(h[0]=c[0]-u[0],h[1]=c[1]-u[1],h[2]=c[2]-u[2],y[0]=p[0]-u[0],y[1]=p[1]-u[1],y[2]=p[2]-u[2],Math.abs(y[0])<a&&Math.abs(y[1])<a&&Math.abs(y[2])<a)return!1;const m=s.rq.get();if(m[0]=l[0]-c[0],m[1]=l[1]-c[1],m[2]=l[2]-c[2],Math.abs(m[0])<a&&Math.abs(m[1])<a&&Math.abs(m[2])<a)return!1;const f=h[0]*y[0]+h[1]*y[1]+h[2]*y[2],g=y[0]*m[0]+y[1]*m[1]+y[2]*m[2],v=h[0]*m[0]+h[1]*m[1]+h[2]*m[2],M=y[0]*y[0]+y[1]*y[1]+y[2]*y[2],x=(m[0]*m[0]+m[1]*m[1]+m[2]*m[2])*M-g*g;if(Math.abs(x)<a)return!1;let d=(f*g-v*M)/x,b=(f+g*d)/M;n&&(d=(0,r.qE)(d,0,1),b=(0,r.qE)(b,0,1));const P=s.rq.get(),S=s.rq.get();return P[0]=c[0]+d*m[0],P[1]=c[1]+d*m[1],P[2]=c[2]+d*m[2],S[0]=u[0]+b*y[0],S[1]=u[1]+b*y[1],S[2]=u[2]+b*y[2],i.tA=d,i.tB=b,i.pA=P,i.pB=S,i.distance2=(0,o.s)(P,S),!0}const x={tA:0,tB:0,pA:(0,a.vt)(),pB:(0,a.vt)(),distance2:0},d=new i.I((()=>c()))},8056:(t,e,n)=>{n.d(e,{J:()=>d});var r=n(79625),i=n(42198),o=n(16804),a=n(80556),s=n(32006),c=n(98080),l=n(28473),u=n(75400),p=n(54824),h=n(93321),y=n(14360),m=n(64860),f=n(83031),g=n(55601),v=n(49281),M=n(34519),x=n(31814);class d extends x.b{constructor(t){super(),this._graphicsLayer=t,this._symbolPairingsByType=new Map}visualizeIntersectionPoint(t,e){return this._visualizeSnappingIndicator(new u.A({x:t.intersectionPoint[0],y:t.intersectionPoint[1],spatialReference:e.spatialReference}),this._getOrCreateSymbol("intersectionPoint",e.view.effectiveTheme.accentColor))}visualizePoint(t,e){return this._visualizeSnappingIndicator(new u.A({x:t.point[0],y:t.point[1],spatialReference:e.spatialReference}),this._getOrCreateSymbol("point",e.view.effectiveTheme.accentColor))}visualizeLine(t,e){return this._visualizeSnappingIndicator(new p.A({paths:[[[...t.lineStart],[...t.lineEnd]]],spatialReference:(0,a.PZ)(h.A,e.spatialReference)}),this._getOrCreateSymbol("line",e.view.effectiveTheme.accentColor))}visualizeParallelSign(t,e){return this._visualizeSnappingIndicator(new p.A({paths:[[[...t.lineStart],[...t.lineEnd]]],spatialReference:(0,a.PZ)(h.A,e.spatialReference)}),this._getOrCreateSymbol("parallelSign",e.view.effectiveTheme.accentColor))}visualizeRightAngleQuad(t,e){const n=(0,c.vt)(),r=(0,c.vt)(),i=(0,l.vt)();(0,s.Re)(n,(0,v.Xz)(t.centerVertex),(0,v.Xz)(t.previousVertex)),(0,s.Re)(r,(0,v.Xz)(t.nextVertex),(0,v.Xz)(t.previousVertex)),(0,s.$A)(i,n,r);const o="rightAngleQuad"+(i[2]<0?45:225);return this._visualizeSnappingIndicator(new p.A({paths:[[[...t.previousVertex],[...t.centerVertex],[...t.nextVertex]]],spatialReference:(0,a.PZ)(h.A,e.spatialReference)}),this._getOrCreateSymbol(o,e.view.effectiveTheme.accentColor))}_visualizeSnappingIndicator(t,e){const n=new r.A({geometry:t,symbol:e});return this._graphicsLayer.add(n),(0,i.hA)((()=>{this._graphicsLayer.remove(n)}))}_getOrCreateSymbol(t,e){const n=this._symbolPairingsByType;return n.get(t)?.color!==e&&n.set(t,{color:e,symbol:b(t,e)}),n.get(t).symbol}}function b(t,e){const n=[...e.toRgb(),255*e.a];switch(t){case"point":return new f.A({outline:{width:.5,color:[0,0,0,1]},size:10,color:e});case"intersectionPoint":return new f.A({outline:new m.A({width:1.5,color:e}),size:15,color:[0,0,0,0]});case"line":return new y.A({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:g.uT.Butt,joinStyle:g.wd.Round,miterLimit:10,width:(0,o.PN)(M.N.lineHintWidthTarget),color:n}]}}});case"parallelSign":return new y.A({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:-1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,1.5],[7,1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:n}]}}],scaleSymbolsProportionally:!0,respectFrame:!0},{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,-1.5],[7,-1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:n}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}});case"rightAngleQuad45":case"rightAngleQuad225":{const r="rightAngleQuad45"===t?45:225;return new y.A({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:.5,y:.5,z:0},anchorPointUnits:"Relative",size:(0,o.PN)(M.N.rightAngleHintSize),rotation:r,markerPlacement:{type:"CIMMarkerPlacementOnVertices",placePerPart:!0,angleToLine:!0,placeOnEndPoints:!1},frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[5,-5],[-5,-5],[-5,5],[5,5],[5,-5]]]},symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:(0,o.PN)(M.N.rightAngleHintOutlineSize),color:n},{type:"CIMSolidFill",enable:!0,color:[...e.toRgb(),255*e.a*.4]}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}})}}}},21369:(t,e,n)=>{n.d(e,{A6:()=>g,B8:()=>y,Xd:()=>u,Xr:()=>m,Yc:()=>L,hZ:()=>M,lw:()=>p,t2:()=>k,x8:()=>l});var r=n(13473),i=n(66509),o=n(28473),a=n(12147),s=n(89227),c=n(60548);function l(t,e,n){n*=.5;const r=Math.sin(n);return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=Math.cos(n),t}function u(t,e){const n=2*Math.acos(e[3]),r=Math.sin(n/2);return r>(0,a.FD)()?(t[0]=e[0]/r,t[1]=e[1]/r,t[2]=e[2]/r):(t[0]=1,t[1]=0,t[2]=0),n}function p(t,e,n){const r=e[0],i=e[1],o=e[2],a=e[3],s=n[0],c=n[1],l=n[2],u=n[3];return t[0]=r*u+a*s+i*l-o*c,t[1]=i*u+a*c+o*s-r*l,t[2]=o*u+a*l+r*c-i*s,t[3]=a*u-r*s-i*c-o*l,t}function h(t,e,n,r){const i=e[0],o=e[1],s=e[2],c=e[3];let l,u,p,h,y,m=n[0],f=n[1],g=n[2],v=n[3];return u=i*m+o*f+s*g+c*v,u<0&&(u=-u,m=-m,f=-f,g=-g,v=-v),1-u>(0,a.FD)()?(l=Math.acos(u),p=Math.sin(l),h=Math.sin((1-r)*l)/p,y=Math.sin(r*l)/p):(h=1-r,y=r),t[0]=h*i+y*m,t[1]=h*o+y*f,t[2]=h*s+y*g,t[3]=h*c+y*v,t}function y(t,e){const n=e[0],r=e[1],i=e[2],o=e[3],a=n*n+r*r+i*i+o*o,s=a?1/a:0;return t[0]=-n*s,t[1]=-r*s,t[2]=-i*s,t[3]=o*s,t}function m(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function f(t,e){const n=e[0]+e[4]+e[8];let r;if(n>0)r=Math.sqrt(n+1),t[3]=.5*r,r=.5/r,t[0]=(e[5]-e[7])*r,t[1]=(e[6]-e[2])*r,t[2]=(e[1]-e[3])*r;else{let n=0;e[4]>e[0]&&(n=1),e[8]>e[3*n+n]&&(n=2);const i=(n+1)%3,o=(n+2)%3;r=Math.sqrt(e[3*n+n]-e[3*i+i]-e[3*o+o]+1),t[n]=.5*r,r=.5/r,t[3]=(e[3*i+o]-e[3*o+i])*r,t[i]=(e[3*i+n]+e[3*n+i])*r,t[o]=(e[3*o+n]+e[3*n+o])*r}return t}function g(t,e,n,r){const i=.5*Math.PI/180;e*=i,n*=i,r*=i;const o=Math.sin(e),a=Math.cos(e),s=Math.sin(n),c=Math.cos(n),l=Math.sin(r),u=Math.cos(r);return t[0]=o*c*u-a*s*l,t[1]=a*s*u+o*c*l,t[2]=a*c*l-o*s*u,t[3]=a*c*u+o*s*l,t}const v=c.c,M=c.s,x=c.g,d=p,b=c.b,P=c.h,S=c.l,w=c.j,A=w,C=c.f,I=C,z=c.n,k=c.a,q=c.e;function L(t,e,n){const r=(0,s.f)(e,n);return r<-.999999?((0,s.e)(_,R,e),(0,s.H)(_)<1e-6&&(0,s.e)(_,T,e),(0,s.n)(_,_),l(t,_,Math.PI),t):r>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):((0,s.e)(_,e,n),t[0]=_[0],t[1]=_[1],t[2]=_[2],t[3]=1+r,z(t,t))}const _=(0,o.vt)(),R=(0,o.fA)(1,0,0),T=(0,o.fA)(0,1,0);const O=(0,i.vt)(),V=(0,i.vt)();const B=(0,r.vt)();Object.freeze(Object.defineProperty({__proto__:null,add:x,calculateW:function(t,e){const n=e[0],r=e[1],i=e[2];return t[0]=n,t[1]=r,t[2]=i,t[3]=Math.sqrt(Math.abs(1-n*n-r*r-i*i)),t},conjugate:m,copy:v,dot:P,equals:q,exactEquals:k,fromEuler:g,fromMat3:f,getAxisAngle:u,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},invert:y,len:A,length:w,lerp:S,mul:d,multiply:p,normalize:z,random:function(t){const e=a.Ov,n=e(),r=e(),i=e(),o=Math.sqrt(1-n),s=Math.sqrt(n);return t[0]=o*Math.sin(2*Math.PI*r),t[1]=o*Math.cos(2*Math.PI*r),t[2]=s*Math.sin(2*Math.PI*i),t[3]=s*Math.cos(2*Math.PI*i),t},rotateX:function(t,e,n){n*=.5;const r=e[0],i=e[1],o=e[2],a=e[3],s=Math.sin(n),c=Math.cos(n);return t[0]=r*c+a*s,t[1]=i*c+o*s,t[2]=o*c-i*s,t[3]=a*c-r*s,t},rotateY:function(t,e,n){n*=.5;const r=e[0],i=e[1],o=e[2],a=e[3],s=Math.sin(n),c=Math.cos(n);return t[0]=r*c-o*s,t[1]=i*c+a*s,t[2]=o*c+r*s,t[3]=a*c-i*s,t},rotateZ:function(t,e,n){n*=.5;const r=e[0],i=e[1],o=e[2],a=e[3],s=Math.sin(n),c=Math.cos(n);return t[0]=r*c+i*s,t[1]=i*c-r*s,t[2]=o*c+a*s,t[3]=a*c-o*s,t},rotationTo:L,scale:b,set:M,setAxes:function(t,e,n,r){const i=B;return i[0]=n[0],i[3]=n[1],i[6]=n[2],i[1]=r[0],i[4]=r[1],i[7]=r[2],i[2]=-e[0],i[5]=-e[1],i[8]=-e[2],z(t,f(t,i))},setAxisAngle:l,slerp:h,sqlerp:function(t,e,n,r,i,o){return h(O,e,i,o),h(V,n,r,o),h(t,O,V,2*o*(1-o)),t},sqrLen:I,squaredLength:C,str:function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}},Symbol.toStringTag,{value:"Module"}))},54380:(t,e,n)=>{n.d(e,{Fm:()=>c,Q7:()=>l});var r=n(32636),i=n(89227),o=n(28473),a=n(1277);n(1696);function s(t){return t?{p0:(0,o.o8)(t.p0),p1:(0,o.o8)(t.p1),p2:(0,o.o8)(t.p2)}:{p0:(0,o.vt)(),p1:(0,o.vt)(),p2:(0,o.vt)()}}function c(t,e,n){const r=e[0]-t[0],i=e[1]-t[1],o=n[0]-t[0],a=n[1]-t[1];return.5*Math.abs(r*a-i*o)}function l(t,e,n){return(0,i.d)(u,e,t),(0,i.d)(p,n,t),.5*(0,i.l)((0,i.e)(u,u,p))}new r.I(a.vt),new r.I((()=>s()));const u=(0,o.vt)(),p=(0,o.vt)()},54671:(t,e,n)=>{n.d(e,{Y0:()=>l,lO:()=>u});var r=n(30142),i=n(93321),o=n(70576);const a=new i.A(r.fv),s=new i.A(r.FY),c=new i.A(r.LJ),l=new i.A(r.Ro);function u(t){const e=p.get(t);if(e)return e;let n=a;if(t)if(t===s)n=s;else if(t===c)n=c;else{const e=t.wkid,r=t.latestWkid;if(null!=e||null!=r)(0,o.tl)(e)||(0,o.tl)(r)?n=s:((0,o.ZL)(e)||(0,o.ZL)(r))&&(n=c);else{const e=t.wkt2??t.wkt;if(e){const t=e.toUpperCase();t===h?n=s:t===y&&(n=c)}}}return p.set(t,n),n}const p=new Map,h=s.wkt.toUpperCase(),y=c.wkt.toUpperCase()},79984:(t,e,n)=>{n.d(e,{UT:()=>p,hs:()=>l,lR:()=>c,wW:()=>u});var r=n(64682),i=n(90772),o=n(41896),a=n(53053);function s(t,e,n,r){if(null==r||t.hasZ||(r=void 0),"point"===t.type)return t.x+=e,t.y+=n,t.hasZ&&null!=r&&(t.z+=r),t;if("multipoint"===t.type){const i=t.points;for(let t=0;t<i.length;t++)i[t]=h(i[t],e,n,r);return t}if("extent"===t.type)return t.xmin+=e,t.xmax+=e,t.ymin+=n,t.ymax+=n,null!=r&&(t.zmin??=0,t.zmin+=r,t.zmax??=0,t.zmax+=r),t;const i=(0,a.$K)(t),o="polyline"===t.type?t.paths:t.rings;for(let a=0;a<i.length;a++){const t=i[a];for(let i=0;i<t.length;i++)t[i]=h(t[i],e,n,r)}return"paths"in t?t.paths=o:t.rings=o,t}function c(t,e,n,r,i){const o=t.clone(),c=r.resolution;if("point"===o.type){if(i)s(o,e*c,-n*c);else{const t=r.state.transform,i=r.state.inverseTransform,a=t[0]*o.x+t[2]*o.y+t[4],s=t[1]*o.x+t[3]*o.y+t[5];o.x=i[0]*(a+e)+i[2]*(s+n)+i[4],o.y=i[1]*(a+e)+i[3]*(s+n)+i[5]}return o}if("multipoint"===o.type){if(i)s(o,e*c,-n*c);else{const t=o.points,i=r.state.transform,a=r.state.inverseTransform;for(let r=0;r<t.length;r++){const o=t[r],s=i[0]*o[0]+i[2]*o[1]+i[4],c=i[1]*o[0]+i[3]*o[1]+i[5],l=a[0]*(s+e)+a[2]*(c+n)+a[4],u=a[1]*(s+e)+a[3]*(c+n)+a[5];t[r]=y(o,l,u,void 0)}}return o}if("extent"===o.type){if(i)s(o,e*c,-n*c);else{const t=r.state.transform,i=r.state.inverseTransform,a=t[0]*o.xmin+t[2]*o.ymin+t[4],s=t[1]*o.xmin+t[3]*o.ymin+t[5],c=t[0]*o.xmax+t[2]*o.ymax+t[4],l=t[1]*o.xmax+t[3]*o.ymax+t[5];o.xmin=i[0]*(a+e)+i[2]*(s+n)+i[4],o.ymin=i[1]*(a+e)+i[3]*(s+n)+i[5],o.xmax=i[0]*(c+e)+i[2]*(l+n)+i[4],o.ymax=i[1]*(c+e)+i[3]*(l+n)+i[5]}return o}if(i)s(o,e*c,-n*c);else{const t=(0,a.$K)(o),i="polyline"===o.type?o.paths:o.rings,s=r.state.transform,c=r.state.inverseTransform;for(let r=0;r<t.length;r++){const i=t[r];for(let t=0;t<i.length;t++){const r=i[t],o=s[0]*r[0]+s[2]*r[1]+s[4],a=s[1]*r[0]+s[3]*r[1]+s[5],l=c[0]*(o+e)+c[2]*(a+n)+c[4],u=c[1]*(o+e)+c[3]*(a+n)+c[5];i[t]=y(r,l,u,void 0)}}"paths"in o?o.paths=i:o.rings=i}return o}function l(t,e,n,r){if("point"===t.type){const{x:i,y:o}=t,a=r?r[0]:i,s=r?r[1]:o,c=t.clone(),l=(i-a)*e+a,u=(o-s)*n+s;return c.x=l,c.y=u,c}if("multipoint"===t.type){const s=(0,a.$K)(t),c=(0,i.vt)(),[l,u,p,h]=(0,o.Yz)(c,[s]),m=r?r[0]:(l+p)/2,f=r?r[1]:(h+u)/2,g=t.clone(),v=g.points;for(let t=0;t<v.length;t++){const r=v[t],[i,o]=r,a=(i-m)*e+m,s=(o-f)*n+f;v[t]=y(r,a,s,void 0)}return g}if("extent"===t.type){const{xmin:i,xmax:o,ymin:a,ymax:s}=t,c=r?r[0]:(i+o)/2,l=r?r[1]:(s+a)/2,u=t.clone();if(u.xmin=(i-c)*e+c,u.ymax=(s-l)*n+l,u.xmax=(o-c)*e+c,u.ymin=(a-l)*n+l,u.xmin>u.xmax){const t=u.xmin,e=u.xmax;u.xmin=e,u.xmax=t}if(u.ymin>u.ymax){const t=u.ymin,e=u.ymax;u.ymin=e,u.ymax=t}return u}const s=(0,a.$K)(t),c=(0,i.vt)(),[l,u,p,h]=(0,o.Yz)(c,s),m=r?r[0]:(l+p)/2,f=r?r[1]:(h+u)/2,g=t.clone(),v="polyline"===g.type?g.paths:g.rings;for(let i=0;i<s.length;i++){const t=s[i];for(let r=0;r<t.length;r++){const o=t[r],[a,s]=o,c=(a-m)*e+m,l=(s-f)*n+f;v[i][r]=y(o,c,l,void 0)}}return"paths"in g?g.paths=v:g.rings=v,g}function u(t,e,n,r,i,o){const a=Math.sqrt((n-t)*(n-t)+(r-e)*(r-e));return Math.sqrt((i-t)*(i-t)+(o-e)*(o-e))/a}function p(t,e,n){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const o=Math.atan2(e.y-n.y,e.x-n.x)-Math.atan2(t.y-n.y,t.x-n.x),a=Math.atan2(Math.sin(o),Math.cos(o));return i?a:(0,r.KJ)(a)}function h(t,e,n,r){return y(t,t[0]+e,t[1]+n,null!=t[2]&&null!=r?t[2]+r:void 0)}function y(t,e,n,r){const i=[e,n];return t.length>2&&i.push(null!=r?r:t[2]),t.length>3&&i.push(t[3]),i}}}]);