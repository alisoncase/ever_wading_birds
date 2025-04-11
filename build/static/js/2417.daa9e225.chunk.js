"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[2417,9909],{22290:(e,t,n)=>{n.d(t,{G:()=>s,S:()=>r});class s{*[Symbol.iterator](){let e=this.next();for(;e;)yield e,e=this.next()}}class r extends s{constructor(e){super(),this.m_iGeom=-1,this.m_aGeoms=e?e.slice():[]}next(){if(this.m_iGeom<this.m_aGeoms.length-1){const e=this.m_aGeoms[++this.m_iGeom];return this.m_aGeoms[this.m_iGeom]=null,e}return null}tock(){return!1}getGeometryID(){return this.m_iGeom}getRank(){return 1}}},23368:(e,t,n)=>{n.r(t),n.d(t,{OperatorGeodeticLength:()=>m});var s=n(93800),r=n(9270),o=n(32030),a=n(65889),i=n(54256),c=n(75646),g=n(86434);class m{getOperatorType(){return 10311}supportsCurves(){return!0}accelerateGeometry(e,t,n){return!1}canAccelerateGeometry(e){return!1}execute(e,t,n,s){if(4===n)return(new o.O).execute(e,t,s);if(0===t.getCoordinateSystemType()&&(0,r.t)(""),(0,r.d)(e),e.isEmpty()||e.getDimension()<1)return 0;const m=t.getGCS(),u=(0,c.G)();m.querySpheroidData(u);const h=u.majorSemiAxis,l=u.e2,y=m.getUnit().getUnitToBaseFactor();let x;const p=e.getGeometryType();if(p===r.G.enumPolygon?x=e.getBoundary():p===r.G.enumEnvelope?x=(0,a.c)(e):(0,r.f)(p)?(x=new a.P({vd:e.getDescription()}),x.addSegment(e,!0)):x=e,x.hasNonLinearSegments()&&(x=(new g.O).execute(x,0,t.getTolerance(0),0,s)),m!==t){const n=t.getSRToGCSTransform();if(t.isPannable()){x=(0,c.w)(x,t),p===r.G.enumPolyline&&x===e&&(x=e.clone());const n=new i.E;t.getPannableExtent().queryIntervalX(n);for(let e=0,t=x.getPointCount();e<t;e++){const t=x.getXY(e);t.x=(0,c._)(t.x,n),x.setXY(e,t)}}const o=x.createInstance();x=(0,c.$)(n,x,o,s)?o:(new c.v).execute(x,n,s)}return this._ExecuteMultiPathGeodeticLength(x,n,h,l,y)}_ExecuteMultiPathGeodeticLength(e,t,n,r,o){const a={stack:[],error:void 0,hasError:!1};try{const i=(0,s.b)(a,new c.E,!1);let g=0;const m=e.querySegmentIterator();for(;m.nextPath();)for(;m.hasNextSegment();){const e=m.nextSegment(),s=e.getStartXY(),a=e.getEndXY();s.scale(o),a.scale(o),c.F.geodeticDistance(n,r,s.x,s.y,a.x,a.y,i,null,null,t),g+=i.val}return g}catch(i){a.error=i,a.hasError=!0}finally{(0,s.c)(a)}}}},32030:(e,t,n)=>{n.d(t,{O:()=>x});var s=n(9270),r=n(75646),o=n(65889),a=n(54256),i=n(12834),c=n(45204),g=n(86434),m=n(95188);function u(){return{m_pGcs:new a.P,m_xyz:new i.h,m_factor:Number.NaN,m_geoLength:Number.NaN,setValues:h,setLength:l,assign:y}}function h(e,t,n,s){this.m_factor=e,this.m_pGcs.assign(t),this.m_xyz.assign(s),this.m_geoLength=n}function l(e){this.m_geoLength=e}function y(e){this.m_pGcs.assign(e.m_pGcs),this.m_xyz.assign(e.m_xyz),this.m_factor=e.m_factor,this.m_geoLength=e.m_geoLength}class x{getOperatorType(){return 10315}supportsCurves(){return!0}accelerateGeometry(e,t,n){return!1}canAccelerateGeometry(e){return!1}_ExecuteShapePreservingLength(e,t,n,s,o){if(e.hasNonLinearSegments()&&(e=(new g.O).execute(e,0,t.getTolerance(0),0,o)),t.isPannable()){let s=90,a=-90;if(1===n.getUnit().getUnitToBaseFactor()&&(s*=Math.PI/180,a*=Math.PI/180),2===t.getCoordinateSystemType()){let e=null;const n=[0,0,0,0];e=t.getPECoordSys(),n[0]=0,n[1]=s,n[2]=0,n[3]=a,r.Z.geogToProj(e,2,n),s=n[1],a=n[3]}const i=new c.J;e.queryEnvelope(i),i.ymin=a,i.ymax=s,e=(new m.O).execute(e,i,t,o)}else{const n=t.getPCSHorizon();if((e=(new r.f).execute(e,n,t,o))===n){const t=e.clone();e=t}}return e.isEmpty()?0:this._ExecuteIterativeApproach(e,t,n,s,1,o)}_ExecuteIterativeApproach(e,t,n,o,c,g){const m=(0,r.G)();n.querySpheroidData(m);const h=m.majorSemiAxis,l=m.e2,y=n.getUnit().getUnitToBaseFactor(),x=(0,a.p)(u,40),d=(0,a.d)(40,Number.NaN),f=u(),G=u();let S;const P=[0,0,0,0],w=t.getPECoordSys(),E=new a.P,C=new a.P,v=new a.P,N=new a.P,T=new a.P;let b=0;const L=e.querySegmentIterator();for(;L.nextPath();)for(;L.hasNextSegment();){const e=L.nextSegment();E.assign(e.getStartXY()),C.assign(e.getEndXY()),2===t.getCoordinateSystemType()?(P[0]=E.x,P[1]=E.y,P[2]=C.x,P[3]=C.y,r.Z.projToGeog(w,2,P),v.x=P[0]*y,v.y=P[1]*y,N.x=P[2]*y,N.y=P[3]*y):(v.setCoordsPoint2D(E),N.setCoordsPoint2D(C),v.scale(y),N.scale(y));const n=new i.h,o=new i.h;p(h,l,v,n),p(h,l,N,o);let a=_(h,n,o);f.setValues(0,v,Number.NaN,n),G.setValues(1,N,a,o),S=c,x[0].assign(G),d[0]=c;let g=0;for(;;){g>128&&(0,s.c)("iterations exceeded");const n=.5*(f.m_factor+G.m_factor),o=e.getCoord2D(n);2===t.getCoordinateSystemType()?(P[0]=o.x,P[1]=o.y,r.Z.projToGeog(w,1,P),T.x=P[0]*y,T.y=P[1]*y):(T.setCoordsPoint2D(o),T.scale(y)),v.setCoordsPoint2D(f.m_pGcs),N.setCoordsPoint2D(G.m_pGcs);const m=new i.h;p(h,l,T,m);const u=_(h,f.m_xyz,m),E=_(h,G.m_xyz,m);a=G.m_geoLength,Number.isNaN(a)&&(a=_(h,f.m_xyz,G.m_xyz));const C=u+E,L=S===c&&C>=20&&Math.abs(C-a)>1e-8*(a+C);if(g+2<40&&(L||Math.abs(C-a)>0&&S>0))G.setLength(E),x[g].assign(G),G.setValues(n,T,u,m),x[++g].assign(G),L?(S=c,d[g]=c):(S--,d[g-1]=S,d[g]=S);else{if(b+=C,0===g)break;f.assign(G),G.assign(x[--g]),S=d[g]}}}return b}execute(e,t,n){if(t&&0!==t.getCoordinateSystemType()||(0,s.t)(""),e.isEmpty()||e.getDimension()<1)return 0;let a=null;const i=t.getGCS();i!==t&&(a=(0,r.p)(t,i,null));const c=e.getGeometryType();if(c===s.G.enumEnvelope){const s=new o.a;return s.addEnvelope(e,!1),this._ExecuteShapePreservingLength(s,t,i,a,n)}if((0,s.f)(c)){const s=new o.P;return s.addSegment(e,!0),this._ExecuteShapePreservingLength(s,t,i,a,n)}return this._ExecuteShapePreservingLength(e,t,i,a,n)}}function p(e,t,n,s){s.assign((0,r.Q)(e,t,n))}function _(e,t,n){const s=e,r=new i.h;r.setSub(t,n);const o=r.length();return 2*s*Math.asin(o/(2*s))}}}]);