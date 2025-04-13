"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[22290,61692],{18867:(t,s,e)=>{e.d(s,{fz:()=>x,g7:()=>P,zo:()=>y});var i=e(22290),n=e(12834),o=e(9270),h=e(65889),r=e(54256);const m=1.4142135623730951,a=.017453292519943295,c=256,_=1024;class f{static construct(t,s,e){const i=new f;return i.x=t.x,i.y=t.y,i.m_next=-1,i.m_prev=-1,i.z=s,i.m=e,i.type=0,i}clone(){const t=new f;return t.x=this.x,t.y=this.y,t.m_next=this.m_next,t.m_prev=this.m_prev,t.z=this.z,t.m=this.m,t.type=this.type,t}asPoint2D(){return new r.P(this.x,this.y)}}class l{constructor(t){this.m_distance=-1,this.m_tolerance=-1,this.m_miterLimit=10,this.m_joins=0,this.m_progressCounter=0,this.m_bUseZ=!1,this.m_bUseM=!1,this.m_srcPts=[],this.m_srcPtCount=0,this.m_offsetPts=[],this.m_offsetPtCount=0,this.m_a1=0,this.m_a2=0,this.m_progressTracker=t}constructOffset(){const t=this.m_inputGeometry.getGeometryType();if(t===o.G.enumLine)return this.offsetLine();if(t===o.G.enumEnvelope)return this.offsetEnvelope();if((0,o.f)(t)){const t=new h.P;return t.addSegment(this.m_inputGeometry,!0),this.m_inputGeometry=t,this.constructOffset()}if(t===o.G.enumPolyline){const t=new h.P;return this.offsetMultiPath(t),t}if(t===o.G.enumPolygon){const t=new h.a;return this.offsetMultiPath(t),t}(0,o.b)("")}offsetLine(){const t=this.m_inputGeometry,s=t.getStartXY(),e=t.getEndXY(),i=new r.P;i.setSub(e,s),i.normalize(),i.leftPerpendicularThis(),i.scale(this.m_distance),s.addThis(i),e.addThis(i);const n=t.clone();return n.setStartXY(s),n.setEndXY(e),n}offsetEnvelope(){const t=this.m_inputGeometry;if(this.m_distance>0&&2!==this.m_joins){const s=new h.a;return s.addEnvelope(t,!1),this.m_inputGeometry=s,this.constructOffset()}const s=t.clone();return s.inflateCoords(this.m_distance,this.m_distance),s}progress(){}static buildPoint(t,s,e,i){i.x=t.x+s*Math.cos(e),i.y=t.y+s*Math.sin(e),i.type=t.type,i.z=t.z,i.m=t.m,i.m_next=-1,i.m_prev=-1}addPoint(t){this.m_offsetPts.push(t.clone()),this.m_offsetPtCount++}addPointEx(t,s){if(0===this.m_offsetPtCount)return void this.addPoint(t);const e=this.m_srcPtCount,i=this.m_srcPts[0===s?e-1:s-1],n=this.m_srcPts[s],o=l.dotSign(i,n,this.m_offsetPts[this.m_offsetPtCount-1],t);if(o>0)this.addPoint(t);else if(o<0)if(l.dotSign(i,n,n,this.m_offsetPts[this.m_offsetPtCount-1])>0){const n=new f;let o;o=0===s?e-2:1===s?e-1:s-2;const h=this.m_srcPts[o],m=Math.atan2(i.y-h.y,i.x-h.x);if(l.buildPoint(i,this.m_distance,m-r.l,n),this.m_offsetPts[this.m_offsetPtCount-1]=n,1===this.m_joins||2===this.m_joins){n.x=.5*(n.x+i.x),n.y=.5*(n.y+i.y),this.addPoint(n),l.buildPoint(i,this.m_distance,this.m_a1+r.l,n);const t=n.clone();t.x=.5*(t.x+i.x),t.y=.5*(t.y+i.y),t.type|=c,this.addPoint(t),this.addPoint(n)}else l.buildPoint(i,this.m_distance,this.m_a1+r.l,n),n.type|=c,this.addPoint(n);this.addPointEx(t,s)}else{const t=new f;if(l.buildPoint(n,this.m_distance,this.m_a1+r.l,t),this.addPoint(t),1===this.m_joins||2===this.m_joins){t.x=.5*(t.x+n.x),t.y=.5*(t.y+n.y),this.addPoint(t),l.buildPoint(n,this.m_distance,this.m_a2-r.l,t);const s=t.clone();s.x=.5*(s.x+n.x),s.y=.5*(s.y+n.y),s.type|=c,this.addPoint(s),this.addPoint(t)}else l.buildPoint(n,this.m_distance,this.m_a2-r.l,t),t.type|=c,this.addPoint(t)}}buildOffset(){const t=new f,s=this.m_srcPtCount;this.m_offsetPtCount=0;const e=.5*this.m_tolerance;let i=0,n=0;for(let o=0;o<s;o++){const h=this.m_srcPts[o],f=0===o?this.m_srcPts[s-1]:this.m_srcPts[o-1],d=o===s-1?this.m_srcPts[0]:this.m_srcPts[o+1];let u,P,y=0;{const t=f.x-h.x,s=f.y-h.y,e=d.x-h.x,m=d.y-h.y;u=Math.atan2(s,t),P=Math.atan2(m,e),this.m_a1=u,this.m_a2=P,0===o&&(i=u,n=P),y=r.P.orientationRobust(h.asPoint2D(),f.asPoint2D(),d.asPoint2D())}const x=P;if(P<u&&(P+=r.k),y*this.m_distance>0)if(1===this.m_joins||2===this.m_joins){l.buildPoint(h,this.m_distance,u+r.l,t),this.addPoint(t);const s=.001;t.x=h.x+(t.x-h.x)*s,t.y=h.y+(t.y-h.y)*s,this.addPoint(t),l.buildPoint(h,this.m_distance,P-r.l,t);const e=t.clone();e.x=h.x+(e.x-h.x)*s,e.y=h.y+(e.y-h.y)*s,e.type|=c,this.addPoint(e),this.addPoint(t)}else{const s=.5*(P-u),e=0===s?this.m_distance:this.m_distance/Math.abs(Math.sin(s));l.buildPoint(h,e,.5*(u+P),t),this.addPointEx(t,o)}else if(512&h.type){const s=1-e/Math.abs(this.m_distance);let i=1,n=this.m_distance<0?-Math.PI:Math.PI;if(s>-1&&s<1){let t=2*Math.acos(s);t<a&&(t=a),i=Math.trunc(Math.PI/t+1.5),i>1&&(n/=i)}i<=1&&(i=2,n/=2);let m=u+r.l;l.buildPoint(h,this.m_distance,m,t),0===o&&(t.type|=_),this.addPointEx(t,o);const c=this.m_distance/Math.cos(n/2);for(m+=n/2,l.buildPoint(h,c,m,t),t.type|=_,this.addPoint(t);--i>0;)m+=n,l.buildPoint(h,c,m,t),t.type|=_,this.addPoint(t);l.buildPoint(h,this.m_distance,P-r.l,t),t.type|=_,this.addPoint(t)}else if(1!==this.m_joins)if(0!==this.m_joins)if(2!==this.m_joins){let s;if(P=x,this.m_distance>0?(P>u&&(P-=r.k),s=u-P<r.l):(P<u&&(P+=r.k),s=P-u<r.l),s){const s=this.m_distance*m;let e;e=s<0?u+.25*Math.PI:u+3*Math.PI*.25,l.buildPoint(h,s,e,t),this.addPointEx(t,o),e=s<0?P-.25*Math.PI:P-3*Math.PI*.25,l.buildPoint(h,s,e,t),this.addPoint(t)}else{const s=.5*(P-u),e=this.m_distance/Math.abs(Math.sin(s));P<u&&(P+=r.k),l.buildPoint(h,e,(u+P)/2,t),this.addPointEx(t,o)}}else{const s=f.x-h.x,e=f.y-h.y,i=d.x-h.x,n=d.y-h.y,a=(s*i+e*n)/Math.sqrt(s*s+e*e)/Math.sqrt(i*i+n*n);if(a>1-1e-8){l.buildPoint(h,m*this.m_distance,P-.25*Math.PI,t),this.addPointEx(t,o),l.buildPoint(h,m*this.m_distance,P+.25*Math.PI,t),this.addPoint(t);continue}const c=Math.abs(this.m_distance/Math.sin(.5*Math.acos(a))),_=Math.abs(this.m_miterLimit*this.m_distance);if(c>_){const s=.5*(P-u),e=this.m_distance/Math.abs(Math.sin(s));l.buildPoint(h,e,.5*(u+P),t);const i=r.P.construct(t.x,t.y),n=r.P.construct(h.x,h.y),m=new r.P;m.setSub(i,n);const a=new r.P;a.setScaleAdd(_/m.length(),m,n);const f=Math.sqrt(c*c-this.m_distance*this.m_distance),d=(c-_)*Math.abs(this.m_distance)/f;this.m_distance>0?m.leftPerpendicularThis():m.rightPerpendicularThis(),m.scale(d/m.length());const y=new r.P;y.setAdd(a,m);const x=new r.P;x.setSub(a,m),t.x=y.x,t.y=y.y,this.addPointEx(t,o),t.x=x.x,t.y=x.y,this.addPoint(t);continue}const y=.5*(P-u),x=this.m_distance/Math.abs(Math.sin(y));l.buildPoint(h,x,.5*(u+P),t),this.addPointEx(t,o)}else{const s=1-e/Math.abs(this.m_distance);let i=1,n=P-r.l-(u+r.l);if(s>-1&&s<1){let t=2*Math.acos(s);t<a&&(t=a),i=Math.trunc(Math.abs(n)/t+1.5),i>1&&(n/=i)}const m=this.m_distance/Math.cos(.5*n);let c=u+r.l+.5*n;for(l.buildPoint(h,m,c,t),this.addPointEx(t,o);--i>0;)c+=n,l.buildPoint(h,m,c,t),this.addPoint(t)}else l.buildPoint(h,this.m_distance,u+r.l,t),this.addPointEx(t,o),l.buildPoint(h,this.m_distance,P-r.l,t),this.addPoint(t)}return this.m_a1=i,this.m_a2=n,this.addPointEx(this.m_offsetPts[0],0),this.m_offsetPts[0]=this.m_offsetPts[this.m_offsetPtCount-1].clone(),this.removeBadSegsFast()}removeBadSegsFast(){let t=!1;for(let e=0;e<this.m_offsetPtCount;e++){const t=this.m_offsetPts[e];t.m_next=e+1,t.m_prev=e-1}this.m_offsetPts[0].m_prev=this.m_offsetPtCount-2,this.m_offsetPts[this.m_offsetPtCount-2].m_next=0;let s=0;for(let e=0;e<this.m_offsetPtCount;e++)if(this.m_offsetPts[s].type&c){const e=this.deleteClosedSeg(s);if(-1===e){t=!0;break}s=e}else s=this.m_offsetPts[s].m_next;return!t&&(this.compressOffsetArray(s),!0)}deleteClosedSeg(t){const s=this.m_offsetPtCount-1;let e,i,n=t;for(let o=1;o<=s-2;o++){n=this.m_offsetPts[n].m_next,e=n,i=t;for(let t=1;t<=o;t++){if(i=this.m_offsetPts[i].m_prev,!(this.m_offsetPts[i].type&c||this.m_offsetPts[e].type&c)){const t=this.handleClosedIntersection(i,e);if(-1!==t)return t}e=this.m_offsetPts[e].m_prev}}return-1}handleClosedIntersection(t,s){const e=this.m_offsetPts[this.m_offsetPts[t].m_prev],i=this.m_offsetPts[t],n=this.m_offsetPts[this.m_offsetPts[s].m_prev],o=this.m_offsetPts[s];if(!this.sectGraphicRect(e,i,n,o))return-1;const h={pt:new f,bAtExistingPt:!1};if(((i.x-e.x)*(o.y-n.y)-(i.y-e.y)*(o.x-n.x))*this.m_distance<0&&this.findIntersection(e,i,n,o,h)&&!h.bAtExistingPt){const r=1e-8,m=Math.sqrt((i.x-e.x)*(i.x-e.x)+(i.y-e.y)*(i.y-e.y)),a=(i.x-e.x)/m,c=(i.y-e.y)/m,_=Math.sqrt((o.x-n.x)*(o.x-n.x)+(o.y-n.y)*(o.y-n.y)),f=(o.x-n.x)/_,l=(o.y-n.y)/_;let d=!1;const u=h.pt.clone();u.x+=(a+f)*r,u.y+=(c+l)*r;let P=n,y=h.pt,x=this.m_offsetPts[t].m_prev;for(;y.y>u.y!=P.y>u.y&&u.x<(P.x-y.x)*(u.y-y.y)/(P.y-y.y)+y.x&&(d=!d),P=y,x=this.m_offsetPts[x].m_next,x!==s;)y=this.m_offsetPts[x];if(d)return-1;const p=this.m_offsetPts[t].m_prev;return h.pt.type=i.type,h.pt.m_next=s,h.pt.m_prev=p,this.m_offsetPts[t]=h.pt,this.m_offsetPts[s].m_prev=t,s}return-1}sectGraphicRect(t,s,e,i){return Math.max(t.x,s.x)>=Math.min(e.x,i.x)&&Math.max(e.x,i.x)>=Math.min(t.x,s.x)&&Math.max(t.y,s.y)>=Math.min(e.y,i.y)&&Math.max(e.y,i.y)>=Math.min(t.y,s.y)}findIntersection(t,s,e,i,n){let o,h,r,m;return n.bAtExistingPt=!1,o=(s.y-t.y)*(i.x-e.x)-(s.x-t.x)*(i.y-e.y),h=(e.y-t.y)*(s.x-t.x)-(e.x-t.x)*(s.y-t.y),r=0===o?2:h/o,r>=0&&r<=1&&(m=r,o=(i.y-e.y)*(s.x-t.x)-(i.x-e.x)*(s.y-t.y),h=(t.y-e.y)*(i.x-e.x)-(t.x-e.x)*(i.y-e.y),r=0===o?2:h/o,r>=0&&r<=1)&&(n.pt.x=t.x+r*(s.x-t.x),n.pt.y=t.y+r*(s.y-t.y),this.m_bUseZ&&(n.pt.z=e.z+m*(i.z-e.z)),this.m_bUseM&&(n.pt.m=e.m+m*(i.m-e.m)),0!==m&&1!==m||0!==r&&1!==r||(n.bAtExistingPt=!0),!((0===m||1===m)&&r>0&&r<1||(0===r||1===r)&&m>0&&m<1))}compressOffsetArray(t){for(;this.m_offsetPts[t].m_prev<t;)t=this.m_offsetPts[t].m_prev;let s=0,e=t;do{const t=this.m_offsetPts[e].clone();this.m_offsetPts[s]=t,e=t.m_next,s++}while(e!==t);this.m_offsetPts[s]=this.m_offsetPts[0].clone(),this.m_offsetPtCount=s+1}addPart(t,s){if(!(s<2))for(let e=0;e<s;e++){const s=this.m_offsetPts[t+e];if(e?this.m_bUseZ?this.m_resultPath.lineTo3DCoords(s.x,s.y,s.z):this.m_resultPath.lineToCoords(s.x,s.y):this.m_bUseZ?this.m_resultPath.startPath3DCoords(s.x,s.y,s.z):this.m_resultPath.startPathCoords(s.x,s.y),this.m_bUseM){const t=this.m_resultPath.getPointCount()-1;this.m_resultPath.setAttribute(2,t,0,s.m)}}}offsetMultiPath(t){const s=(0,h.d)(this.m_inputGeometry,0,this.m_tolerance,0,this.m_progressTracker,12e3),e=s.querySegmentIterator();e.resetToFirstPath();let i=-1;for(;e.nextPath();)i++,this.offsetPath(s,i,t)}offsetPath(t,s,e){let i=t.getPathStart(s),n=t.getPathEnd(s);if(this.m_resultPath=e,t.isClosedPath(s)){const s=t.getXY(i);for(;n>i&&t.getXY(n-1).equals(s);)n--;if(n-i>=2){this.m_srcPtCount=n-i,this.m_srcPts.length=this.m_srcPtCount;for(let s=i;s<n;s++)this.progress(),this.m_srcPts[s-i]=f.construct(t.getXY(s),this.m_bUseZ?t.getAttributeAsDbl(1,s,0):0,this.m_bUseM?t.getAttributeAsDbl(2,s,0):0);this.buildOffset()&&this.addPart(0,this.m_offsetPtCount-1)}}else{const s=t.getXY(i);for(;i<n-1&&t.getXY(i+1).equals(s);)i++;const e=t.getXY(n-1);for(;i<n-1&&t.getXY(n-2).equals(e);)n--;if(n-i>=2){this.m_srcPtCount=2*(n-i)-2,this.m_srcPts.length=this.m_srcPtCount;let e=f.construct(s,this.m_bUseZ?t.getAttributeAsDbl(1,i,0):0,this.m_bUseM?t.getAttributeAsDbl(2,i,0):0);e.type|=1536,this.m_srcPts[0]=e;let o=1,h=this.m_srcPtCount-1;for(let s=i+1;s<n-1;s++,o++,h--)this.progress(),e=f.construct(t.getXY(s),this.m_bUseZ?t.getAttributeAsDbl(1,s,0):0,this.m_bUseM?t.getAttributeAsDbl(2,s,0):0),this.m_srcPts[o]=e.clone(),e.type|=_,this.m_srcPts[h]=e.clone();if(e=f.construct(t.getXY(n-1),this.m_bUseZ?t.getAttributeAsDbl(1,n-1,0):0,this.m_bUseM?t.getAttributeAsDbl(2,n-1,0):0),e.type|=512,this.m_srcPts[o]=e.clone(),this.buildOffset())if(this.m_offsetPts.length>=2){let t=-1,s=-1,e=!!(this.m_offsetPts[this.m_offsetPtCount-1].type&_);e||(t=0);for(let i=1;i<this.m_offsetPtCount;i++){this.progress();const n=!!(this.m_offsetPts[i].type&_);n?e||(s=i-1,s-t+1>1&&this.addPart(t,s-t+1)):e&&(t=i-1),e=n}e||(s=this.m_offsetPtCount-1,s-t+1>1&&this.addPart(t,s-t+1))}else{const t=0,s=this.m_offsetPtCount-1;s-t>=1&&this.addPart(t,s-t+1)}}}this.m_srcPts.length=0,this.m_srcPtCount=0,this.m_offsetPts.length=0,this.m_offsetPtCount=0}static dotSign(t,s,e,i){const n=s.x-t.x,o=s.y-t.y,h=i.x-e.x,m=i.y-e.y,a=(0,r.t)(n,o,h,m);return(0,r.e)(a)}}class d extends i.G{constructor(t,s,e,i,n,o,h){super(),this.m_progressTracker=h,this.m_index=-1,this.m_inputGeoms=t,this.m_spatialReference=s,this.m_distance=e,this.m_joins=i,this.m_miterLimit=n,this.m_flattenError=o}tock(){return!0}getRank(){return 1}next(){if(!this.m_inputGeoms)return null;let t;for(;t=this.m_inputGeoms.next();)return this.m_index=this.m_inputGeoms.getGeometryID(),this.offset(t);return null}getGeometryID(){return this.m_index}offset(t){let s;return(0,o.d)(t),s=this.m_flattenError<=0?(0,n.b)(this.m_spatialReference,t,!0).total():this.m_flattenError,function(t,s,e,i,n,h){if(null===t&&(0,o.t)(""),t.getDimension()<1&&(0,o.t)(""),n>0||(0,o.t)(""),(0,o.d)(t),0===s||t.isEmpty())return t;const r=new l(h);return r.m_bUseZ=t.hasAttribute(1),r.m_bUseM=t.hasAttribute(2),r.m_inputGeometry=t,r.m_distance=s,r.m_tolerance=n,r.m_joins=e,r.m_miterLimit=i>1?i:1,r.m_progressCounter=0,r.constructOffset()}(t,this.m_distance,this.m_joins,this.m_miterLimit,s,this.m_progressTracker)}}const u=new class{getOperatorType(){return 10108}accelerateGeometry(t,s,e){return!1}canAccelerateGeometry(t){return!1}supportsCurves(){return!0}executeMany(t,s,e,i,n,o,h){return new d(t,s,e,i,n,o,h)}execute(t,s,e,i,n,o,h){return new d(null,s,e,i,n,o,h).offset(t)}};function P(t,s,e,i,n,o){return u.execute(t,s,e,i,n,o,null)}function y(t,s,e,n,o,h){const r=u.executeMany(new i.S(t),s,e,n,o,h,null);return Array.from(r)}function x(){return u.supportsCurves()}},22290:(t,s,e)=>{e.d(s,{G:()=>i,O:()=>n,S:()=>o});class i{*[Symbol.iterator](){let t=this.next();for(;t;)yield t,t=this.next()}}class n extends i{}class o extends i{constructor(t){super(),this.m_iGeom=-1,this.m_aGeoms=t?t.slice():[]}next(){if(this.m_iGeom<this.m_aGeoms.length-1){const t=this.m_aGeoms[++this.m_iGeom];return this.m_aGeoms[this.m_iGeom]=null,t}return null}tock(){return!1}getGeometryID(){return this.m_iGeom}getRank(){return 1}}},61692:(t,s,e)=>{e.r(s),e.d(s,{execute:()=>m,executeMany:()=>a});var i=e(62631),n=e(84190),o=e(18867),h=e(5410);const r={round:0,bevel:1,miter:2,square:3};function m(t,s){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{miterLimit:i=10,flattenError:m=0,joins:a="round",unit:c}=e,_=(0,h.getSpatialReference)(t);c&&_&&(s=(0,n.UW)(s,c,_));const f=(0,h.fromGeometry)(t),l=f.getSpatialReference();return(0,h.toGeometry)((0,o.g7)(f.getGeometry(),l,s,r[a],i,m),l)}function a(t,s){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{miterLimit:m=10,flattenError:a=0,joins:c="round",unit:_}=e,f=(0,h.getSpatialReference)(t);_&&f&&(s=(0,n.UW)(s,_,f));const[l,d]=(0,h.fromGeometries)(t);return(0,o.zo)(l,d,s,r[c],m,a).map((t=>(0,h.toGeometry)(t,d))).filter(i.Ru)}}}]);