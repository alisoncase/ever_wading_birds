"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[1295],{1295:(e,t,s)=>{s.d(t,{o:()=>Le});var i=s(44524),r=s(16804),n=s(77690),o=s(62813),a=s(92277),c=s(53978);class l extends c.r{}function h(e){const{sprite:t,isMapAligned:s,colorLocked:i,scaleSymbolsProportionally:r,isStroke:n}=e;let c=0;return s&&(c|=(0,o.mR)(a.c.bitset.isMapAligned)),i&&(c|=(0,o.mR)(a.c.bitset.colorLocked)),t.sdf&&(c|=(0,o.mR)(a.c.bitset.isSDF)),r&&(c|=(0,o.mR)(a.c.bitset.scaleSymbolsProportionally)),n&&(c|=(0,o.mR)(a.c.bitset.isStroke)),c}var u=s(93314),d=s(92156);class f extends l{get vertexSpec(){return{createComputedParams:e=>{let{pixelDimensions:t,texelDimensions:s,baseSize:i,referenceSize:n,strokeWidth:o,sizeRatio:a}=e;t||(t=e.sprite.sdf?[0,0]:[e.sprite.width,e.sprite.height]),s||(s=e.sprite.sdf?[0,0]:t),i=(0,r.Lz)(i),n=(0,r.Lz)(n),o=(0,r.Lz)(o);const c=(e.sprite.sdfDecodeCoeff??1)*a;return{...e,pixelDimensions:t,texelDimensions:s,baseSize:i,referenceSize:n,strokeWidth:o,sdfDecodeCoeff:c}},optionalAttributes:{zoomRange:{type:d.pe.SHORT,count:2,packPrecisionFactor:n.fq,pack:(e,t)=>{let{scaleInfo:s}=e,{tileInfo:i}=t;return(0,o.My)(s,i)}}},attributes:{id:{type:d.pe.UNSIGNED_BYTE,count:3,pack:"id"},bitset:{type:d.pe.UNSIGNED_BYTE,count:1,pack:h},pos:{type:d.pe.SHORT,count:2,pack:"position",packPrecisionFactor:1},offset:{type:d.pe.FLOAT,count:2,packAlternating:{count:4,pack:e=>{const t=e.texelDimensions;return[[-.5*t[0],-.5*t[1]],[.5*t[0],-.5*t[1]],[-.5*t[0],.5*t[1]],[.5*t[0],.5*t[1]]]}}},uv:{type:d.pe.SHORT,count:2,packPrecisionFactor:1,packAlternating:{count:4,packTessellation:e=>{let{texXmax:t,texXmin:s,texYmax:i,texYmin:r}=e;return[[s,r],[t,r],[s,i],[t,i]]}}},animationPointerAndBaseSizeAndReferenceSize:{type:d.pe.UNSIGNED_SHORT,count:4,packPrecisionFactor:1,pack:e=>{let{animations:t,baseSize:s,referenceSize:i}=e;return[t.dataColumn,t.dataRow,s,i]}},sizing:{type:d.pe.UNSIGNED_SHORT,count:4,packPrecisionFactor:8,pack:e=>{let{strokeWidth:t,pixelDimensions:s,baseSize:i,sprite:r,sizeRatio:n}=e;const o=Math.max(i*r.width/r.height,i),a=r.sdfDecodeCoeff*o*n;return[s[0],s[1],t,a]}},angle:{type:d.pe.BYTE,count:1,packTessellation:e=>{let{angle:t}=e;return t}}}}}_write(e,t){const s=this.evaluatedMeshParams.sprite,{textureBinding:i}=s;e.recordStart(this.instanceId,this.attributeLayout,i);const r=t.getDisplayId();if("esriGeometryPolygon"===t.geometryType){const s=t.readCentroidForDisplay();if(!s)return;const[i,n]=s.coords;this._writeQuad(e,r,i,n)}else if("esriGeometryPoint"===t.geometryType){const s=t.readXForDisplay(),i=t.readYForDisplay();this._writeQuad(e,r,s,i)}else{const s=t.readGeometryForDisplay();if(s){const{angleToLine:t}=this.evaluatedMeshParams;if(t){let t=!0,i=null,n=null;s.forEachVertex(((s,o)=>{if(null!=i&&null!=n){const a=Math.atan2(o-n,s-i)/u.rp;t&&(this._writeQuad(e,r,i,n,a),t=!1),this._writeQuad(e,r,s,o,a)}i=s,n=o}))}else s.forEachVertex(((t,s)=>{this._writeQuad(e,r,t,s)}))}}e.recordEnd()}_writeQuad(e,t,s,i){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;const o=this.evaluatedMeshParams.sprite,{rect:a}=o,c=a.x+n.hM,l=a.y+n.hM,h=a.x+a.width-n.hM,u=a.y+a.height-n.hM,d=e.vertexCount();e.recordBounds(s,i,64,64);const f={texXmin:c,texYmin:l,texXmax:h,texYmax:u,angle:r};for(let n=0;n<4;n++)this._writeVertex(e,t,s,i,f);e.indexEnsureSize(6),e.indexWrite(d),e.indexWrite(d+1),e.indexWrite(d+2),e.indexWrite(d+1),e.indexWrite(d+3),e.indexWrite(d+2)}}var p=s(26427),m=s(1441),_=s(82137),y=s(25867),g=s(99067),x=s(79455),v=s(83531),M=s(47871),b=s(85099),P=s(45622),w=s(98352),A=s(95005),k=s(32006),S=s(74715),I=s(98080),z=s(81765),L=s(39817),D=s(42888),E=s(15399),R=s(75201),T=s(46566),B=s(96538);function G(e,t,s){return e[0]=t[0]-s[0],e[1]=t[1]-s[1],e}function F(e,t){return Math.sqrt(e*e+t*t)}function N(e){const t=F(e[0],e[1]);e[0]/=t,e[1]/=t}function C(e,t){return F(e[0]-t[0],e[1]-t[1])}function O(e){return e.length-1}function W(e){let t=0;for(let s=0;s<O(e);s++)t+=Z(e,s);return t}function Z(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,[i,r]=function(e,t){return e[t+1]}(e,t);return[i,r]=[Math.round(i),Math.round(r)],Math.sqrt(i*i+r*r)*s}class j{constructor(e,t,s,i,r){this._segments=e,this._index=t,this._distance=s,this._xStart=i,this._yStart=r,this._done=!1}static create(e){return new j(e,0,0,e[0][0],e[0][1])}clone(){return new j(this._segments,this._index,this._distance,this.xStart,this.yStart)}equals(e){return this._index===e._index||e._index===this._index-1&&(0===this._distance||1===e._distance)||e._index===this._index+1&&(1===this._distance||0===e._distance)}leq(e){return this._index<e._index||this._index===e._index&&this._distance<=e._distance}geq(e){return this._index>e._index||this._index===e._index&&this._distance>=e._distance}get _segment(){return this._segments[this._index+1]}get angle(){const e=this.dy,t=(0*e+-1*-this.dx)/(1*this.length);let s=Math.acos(t);return e>0&&(s=2*Math.PI-s),s}get xStart(){return this._xStart}get yStart(){return this._yStart}get x(){return this.xStart+this.distance*this.dx}get y(){return this.yStart+this.distance*this.dy}get dx(){return this._segment[0]}get dy(){return this._segment[1]}get xMidpoint(){return this.xStart+.5*this.dx}get yMidpoint(){return this.yStart+.5*this.dy}get xEnd(){return this.xStart+this.dx}get yEnd(){return this.yStart+this.dy}get length(){const{dx:e,dy:t}=this;return Math.sqrt(e*e+t*t)}get remainingLength(){return this.length*(1-this._distance)}get backwardLength(){return this.length*this._distance}get distance(){return this._distance}get done(){return this._done}hasPrev(){return this._index-1>=0}hasNext(){return this._index+1<O(this._segments)}next(){return this.hasNext()?(this._xStart+=this.dx,this._yStart+=this.dy,this._distance=0,this._index+=1,this):null}prev(){return this.hasPrev()?(this._index-=1,this._xStart-=this.dx,this._yStart-=this.dy,this._distance=1,this):(this._done=!0,null)}_seekBackwards(e,t){const s=this.backwardLength;if(e<=s)return this._distance=(s-e)/this.length,this;let i=this.backwardLength;for(;this.prev();){if(i+this.length>e)return this._seekBackwards(e-i);i+=this.length}return this._distance=0,t?this:null}seek(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e<0)return this._seekBackwards(Math.abs(e),t);if(e<=this.remainingLength)return this._distance=(this.backwardLength+e)/this.length,this;let s=this.remainingLength;for(;this.next();){if(s+this.length>e)return this.seek(e-s,t);s+=this.length}return this._distance=1,t?this:null}}function V(e,t,s){let i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const r=W(e),n=j.create(e),o=r/2;if(!i)return n.seek(o),void(Math.abs(n.x)<B.$u&&Math.abs(n.y)<B.$u&&s(n.clone(),0,o+0*t,r));const a=Math.max((r-t)/2,0),c=Math.floor(a/t),l=o-c*t;n.seek(l);for(let h=-c;h<=c;h++)Math.abs(n.x)<B.$u&&Math.abs(n.y)<B.$u&&s(n.clone(),h,o+h*t,r),n.seek(t)}function q(e,t){const s=t;for(let i=0;i<e.length;i++){let t=e[i];Y(t,s);const r=[];r.push(t[0]);for(let e=1;e<t.length;e++){const[s,i]=t[e-1],[n,o]=t[e],a=n-s,c=o-i;r.push([a,c])}e[i]=r,t=r}return e}function Y(e,t){const s=1e-6;if(t<=0)return;const i=e.length;if(i<3)return;const r=[];let n=0;r.push(0);for(let u=1;u<i;u++)n+=C(e[u],e[u-1]),r.push(n);t=Math.min(t,.2*n);const o=[];o.push(e[0][0]),o.push(e[0][1]);const a=e[i-1][0],c=e[i-1][1],l=G([0,0],e[0],e[1]);N(l),e[0][0]+=t*l[0],e[0][1]+=t*l[1],G(l,e[i-1],e[i-2]),N(l),e[i-1][0]+=t*l[0],e[i-1][1]+=t*l[1];for(let u=1;u<i;u++)r[u]+=t;r[i-1]+=t;const h=.5*t;for(let u=1;u<i-1;u++){let n=0,a=0,c=0;for(let i=u-1;i>=0&&!(r[i+1]<r[u]-h);i--){const o=h+r[i+1]-r[u],l=r[i+1]-r[i],d=r[u]-r[i]<h?1:o/l;if(Math.abs(d)<s)break;const f=d*d,p=d*o-.5*f*l,m=d*l/t,_=e[i+1],y=e[i][0]-_[0],g=e[i][1]-_[1];n+=m/p*(_[0]*d*o+.5*f*(o*y-l*_[0])-f*d*l*y/3),a+=m/p*(_[1]*d*o+.5*f*(o*g-l*_[1])-f*d*l*g/3),c+=m}for(let o=u+1;o<i&&!(r[o-1]>r[u]+h);o++){const i=h-r[o-1]+r[u],l=r[o]-r[o-1],d=r[o]-r[u]<h?1:i/l;if(Math.abs(d)<s)break;const f=d*d,p=d*i-.5*f*l,m=d*l/t,_=e[o-1],y=e[o][0]-_[0],g=e[o][1]-_[1];n+=m/p*(_[0]*d*i+.5*f*(i*y-l*_[0])-f*d*l*y/3),a+=m/p*(_[1]*d*i+.5*f*(i*g-l*_[1])-f*d*l*g/3),c+=m}o.push(n/c),o.push(a/c)}o.push(a),o.push(c);for(let u=0,d=0;u<i;u++)e[u][0]=o[d++],e[u][1]=o[d++]}var Q=s(52537);const X=(0,P.Bj)((e=>{let t=0;if(0===e)return 1/0;for(;!(e%2);)t++,e/=2;return t}));class $ extends Q.G8{constructor(){super(...arguments),this._zoomLevel=0}_write(e,t,s,i){if(this._zoomLevel=i||0,null!=s)throw new Error("InternalError: EffectGeometry not support for LabelMeshWriter");switch(t.geometryType){case"esriGeometryPoint":{const s=t.readXForDisplay(),i=t.readYForDisplay();this._writePoint(e,s,i,t);break}case"esriGeometryEnvelope":case"esriGeometryPolygon":case"esriGeometryMultipoint":{const s=t.readCentroidForDisplay();if(!s)return;const[i,r]=s.coords;this._writePoint(e,i,r,t);break}case"esriGeometryPolyline":this._writeLines(e,t)}}_getMetricDir(){const{horizontalAlignment:e,verticalAlignment:t}=this.evaluatedMeshParams;return["center"===e?0:"right"===e?-1:1,"middle"===t?0:"bottom"===t?-1:1]}_createLineLabelMetric(e,t,s,i){const r=(0,E.Q4)(e),[n,o]=this._getMetricDir(),a=this.evaluatedMeshParams.scaleInfo?.maxScale??0,c=this.evaluatedMeshParams.scaleInfo?.minScale??0;return new T.f(r,t,s,n,o,a,c,i??null)}_writePoint(e,t,s,i){const r=this._getShaping();if(!r)return;const n=i.getDisplayId(),o=(0,D.xy)(this.evaluatedMeshParams.horizontalAlignment),a=(0,D.UD)(this.evaluatedMeshParams.verticalAlignment),c=this.evaluatedMeshParams.scaleInfo?.maxScale??0,l=this.evaluatedMeshParams.scaleInfo?.minScale??0,h=(0,E.Q4)(i.getDisplayId()),u=this._getPointReferenceBounds()||{offsetX:0,offsetY:0,size:0};e.metricStart(new T.f(h,t,s,o,a,c,l,u)),this._writeGlyphs(e,n,t,s,r,0,u),e.metricBoxWrite(r.boundsT),e.metricEnd()}_getPointReferenceBounds(){if(!this._references)return null;for(const e of this._references){const t=e.getBoundsInfo();if(t)return t}return null}_writeLines(e,t){const{scaleInfo:s,verticalAlignment:i}=this.evaluatedMeshParams,r=this.evaluatedMeshParams.repeatLabelDistance||128,n=this._getShaping("middle");if(!n)return;const a=(e,t,s,i)=>this._placeSubdivGlyphs(e,t,s,i),c=(n.bounds.width+r)/2;this._current={out:e,id:t.getDisplayId(),shaping:n,zoomRange:(0,o.My)(s,this.getTileInfo()),referenceBounds:this._getPointReferenceBounds()||{offsetX:0,offsetY:0,size:0},offsetDirection:null},this._verticalPlacement="bottom"===i?"above":"top"===i?"below":null,this._verticalPlacement?this._writeAboveAndBelowAlong(t,a,c):this._writeCenterAlong(t,a,c)}_writeAboveAndBelowAlong(e,t,s){const{repeatLabel:i}=this.evaluatedMeshParams,{shaping:r}=this._current,n=r.bounds.halfHeight,o=e.readGeometryForDisplay();if(!o)return;const a=new L.A;(0,z.kz)(a,o,!1,!1,"esriGeometryPolyline",1);const c=H(new L.A,a,n),l=H(new L.A,a,-n),h=(0,z.zv)(l,"esriGeometryPolyline",!1,!1),u=q((0,z.zv)(c,"esriGeometryPolyline",!1,!1).paths,r.bounds.width),d=q(h.paths,r.bounds.width);this._current.offsetDirection="above";for(const f of u)V(f,s,t,!!i);this._current.offsetDirection="below";for(const f of d)V(f,s,t,!!i)}_writeCenterAlong(e,t,s){const{repeatLabel:i}=this.evaluatedMeshParams,{shaping:r}=this._current,n=q(e.readLegacyGeometryForDisplay().paths,r.bounds.width);for(const o of n)V(o,s,t,!!i)}_placeSubdivGlyphs(e,t,s,i){const{allowOverrun:r,labelPosition:n,repeatLabelDistance:o}=this.evaluatedMeshParams,a=this._current.zoomRange[0],c=X(t),l=this._current.shaping.bounds.width/2,h=Math.sqrt(o||128)/2,u=Math.min(s,i-s),d=this._current.shaping.isMultiline?Q.GJ:Math.log2(u/(h+l/2)),f=0===t?d:Math.min(c,d),p=Math.max(a,this._zoomLevel+1-f),m=this._zoomLevel-p,_=this._current.shaping.bounds.width/2*2**m;this._current.shaping.isMultiline?0===t&&this._placeStraight(e,p):r&&m<0?this._placeStraightAlong(e,a):"parallel"===n?this._placeStraightAlong(e,p):"curved"===n&&this._placeCurved(e,p,_)}_placeStraight(e,t){const{out:s,id:i,shaping:r,referenceBounds:n}=this._current,{x:o,y:a}=e;s.metricStart(this._createLineLabelMetric(i,o,a)),s.metricBoxWrite(r.boundsT);const c=e.angle*(180/Math.PI)%360,l=(e.angle*(180/Math.PI)+180)%360;this._writeGlyphs(s,i,o,a,r,0,n,{clipAngle:c,mapAligned:!0,isLineLabel:!0,minZoom:t}),this._writeGlyphs(s,i,o,a,r,0,n,{clipAngle:l,mapAligned:!0,isLineLabel:!0,minZoom:t}),s.metricEnd()}_placeCurved(e,t,s){const{out:i,id:r}=this._current;i.metricStart(this._createLineLabelMetric(r,e.x,e.y));const n=e.clone(),o=e.angle*(180/Math.PI)%360,a=(e.angle*(180/Math.PI)+180)%360;this._verticalPlacement&&this._verticalPlacement!==this._current.offsetDirection||(this._placeFirst(n,t,1,o),this._placeBack(e,n,t,s,1,o),this._placeForward(e,n,t,s,1,o)),this._verticalPlacement&&this._verticalPlacement===this._current.offsetDirection||(this._placeFirst(n,t,0,a),this._placeBack(e,n,t,s,0,a),this._placeForward(e,n,t,s,0,a)),i.metricEnd()}_placeStraightAlong(e,t){const{out:s,id:i,shaping:n,zoomRange:o,referenceBounds:a}=this._current,{boxBorderLineColor:c,boxBackgroundColor:l}=this.evaluatedMeshParams,h=e.clone(),u=e.angle*(180/Math.PI)%360,d=(e.angle*(180/Math.PI)+180)%360,f=n.glyphs.length>0&&!(!c&&!l);if(s.metricStart(this._createLineLabelMetric(i,e.x,e.y)),f){const c=Math.max(t,o[0],0),l=Math.min(Q.GJ,o[1]),h=(0,w.$0)((0,A.vt)(),-e.angle),f={minZoom:c,maxZoom:l,clipAngle:u,mapAligned:!0,isLineLabel:!0},p=(0,r.Lz)(this.evaluatedMeshParams.offsetX),m=(0,r.Lz)(this.evaluatedMeshParams.offsetY);if(!this._verticalPlacement||this._verticalPlacement===this._current.offsetDirection){const t=(0,S.fA)(p,-1*m),[r,o]=n.shapeBackground((0,w.Tl)((0,A.vt)(),h,t));s.recordStart(this.instanceId,this.attributeLayout,n.glyphs[0].textureBinding);const c=2*Math.max(r.width,r.height);s.recordBounds(e.x+r.x,e.y+r.y,c,c),this._writeTextBox(s,i,e.x,e.y,o,a,f),s.recordEnd()}if(!this._verticalPlacement||this._verticalPlacement!==this._current.offsetDirection){const t=(0,S.fA)(p,m),[r,o]=n.shapeBackground((0,w.Tl)((0,A.vt)(),h,t));f.clipAngle=d,s.recordStart(this.instanceId,this.attributeLayout,n.glyphs[0].textureBinding);const c=2*Math.max(r.width,r.height);s.recordBounds(e.x+r.x,e.y+r.y,c,c),this._writeTextBox(s,i,e.x,e.y,o,a,f),s.recordEnd()}}this._verticalPlacement&&this._verticalPlacement!==this._current.offsetDirection||this._placeFirst(h,t,1,u,!0),this._verticalPlacement&&this._verticalPlacement===this._current.offsetDirection||this._placeFirst(h,t,0,d,!0),s.metricEnd()}_placeBack(e,t,s,i,r,n){const o=e.clone();let a=e.backwardLength+0;for(;o.prev()&&!(a>=i);)this._placeOnSegment(o,t,a,s,-1,r,n),a+=o.length+0}_placeForward(e,t,s,i,r,n){const o=e.clone();let a=e.remainingLength+0;for(;o.next()&&!(a>=i);)this._placeOnSegment(o,t,a,s,1,r,n),a+=o.length+0}_placeFirst(e,t,s,i){let n=arguments.length>4&&void 0!==arguments[4]&&arguments[4];const{out:o,id:a,shaping:c,zoomRange:l,referenceBounds:h}=this._current,u=c.glyphs,d=(0,r.Lz)(this.evaluatedMeshParams.offsetX),f=(0,r.Lz)(this.evaluatedMeshParams.offsetY),p=(0,S.fA)(d,f),m=(0,w.$0)((0,A.vt)(),-e.angle);(0,k.l0)(p,p,m);for(const r of u){const u=r.x>c.bounds.x?s:1-s,d=u*e.remainingLength+(1-u)*e.backwardLength,f=Math.abs(r.x+r.width/2-c.bounds.x),m=Math.max(0,this._zoomLevel+Math.log2(f/(d+0))),_=Math.max(t,n?0:m);if(r.maxZoom=Math.min(l[1],Q.GJ),r.angle=e.angle+(1-s)*Math.PI,r.minZoom=Math.max(l[0],_),this._writeLineGlyph(o,a,e.x,e.y,c.bounds,r,i,h,!0),(s||this._current.offsetDirection)&&this._isVisible(r.minZoom,r.maxZoom)){const e=new R.A(r.bounds.x+p[0],r.bounds.y+p[1],r.bounds.width,r.bounds.height);o.metricBoxWrite(e)}}}_placeOnSegment(e,t,s,i,n,o,a){const{out:c,id:l,shaping:h,referenceBounds:u}=this._current,d=h.glyphs,f=e.dx/e.length,p=e.dy/e.length,m={x:e.x+s*-n*f,y:e.y+s*-n*p},_=(0,r.Lz)(this.evaluatedMeshParams.offsetX),y=(0,r.Lz)(this.evaluatedMeshParams.offsetY),g=(0,S.fA)(_,y),x=(0,w.$0)((0,A.vt)(),-e.angle);(0,k.l0)(g,g,x);for(const r of d){const t=r.x>h.bounds.x?o:1-o;if(!(t&&1===n||!t&&-1===n))continue;const d=Math.abs(r.x+r.width/2-h.bounds.x),f=Math.max(0,this._zoomLevel+Math.log2(d/s)-.1),p=Math.max(i,this._zoomLevel+Math.log2(d/(s+e.length+0)));if(0!==f&&(r.angle=e.angle+(1-o)*Math.PI,r.minZoom=p,r.maxZoom=f,this._writeLineGlyph(c,l,m.x,m.y,h.bounds,r,a,u,!0),(o||this._current.offsetDirection)&&this._isVisible(r.minZoom,r.maxZoom))){const e=new R.A(r.bounds.x+g[0],r.bounds.y+g[1],r.bounds.width,r.bounds.height);c.metricBoxWrite(e)}}}_writeLineGlyph(e,t,s,i,r,n,a,c,l){const h=s+r.x,u=i+r.y,d=2*(this.evaluatedMeshParams.minPixelBuffer?this.evaluatedMeshParams.minPixelBuffer/this._textMeshTransformProps.fontSize:1),f=Math.max(r.width,r.height)*d;e.recordStart(this.instanceId,this.attributeLayout,n.textureBinding),e.recordBounds(h,u,f,f);const{texcoords:p,offsets:m}=n,{fontSize:_,haloSize:y,outlineSize:g}=this._textMeshTransformProps;this._writeQuad(e,t,s,i,{texcoords:p,offsets:m,fontSize:_,haloSize:y,outlineSize:g,color:(0,o.Jb)(this.evaluatedMeshParams.color),isBackground:!1,referenceBounds:c,minZoom:Math.max(this._current.zoomRange[0],n.minZoom),maxZoom:Math.min(this._current.zoomRange[1],n.maxZoom),clipAngle:a,mapAligned:l,isLineLabel:!0}),e.recordEnd()}_isVisible(e,t){const s=Math.floor(this._zoomLevel*n.fq)/n.fq;return e<=s&&s<=t}}function H(e,t,s){const{coords:i,lengths:r}=t,n=(0,I.vt)(),o=(0,I.vt)(),a=(0,I.vt)(),c=(0,I.vt)(),l=(0,I.vt)(),h=(0,I.vt)();let u=0;for(let d=0;d<r.length;d++){const t=r[d];for(let r=0;r<t;r++){const d=2*(r+u-1),f=2*(r+u),p=2*(r+u+1);r>0?(0,k.hZ)(n,i[d],i[d+1]):(0,k.hZ)(n,0,0),(0,k.hZ)(o,i[f],i[f+1]),r<t-1?(0,k.hZ)(a,i[p],i[p+1]):(0,k.hZ)(a,0,0),0===r?(0,k.hZ)(c,0,0):((0,k.jb)(c,o,n),(0,k.S8)(c,c),(0,k.hZ)(c,c[1],-c[0])),r===t-1?(0,k.hZ)(l,0,0):((0,k.jb)(l,a,o),(0,k.S8)(l,l),(0,k.hZ)(l,l[1],-l[0])),(0,k.WQ)(h,c,l),(0,k.S8)(h,h);const m=h[0]*l[0]+h[1]*l[1];0!==m&&(0,k.hs)(h,h,m),(0,k.hs)(h,h,s),e.coords.push(o[0]+h[0],o[1]+h[1])}e.lengths.push(t),u+=t}return e}var J=s(83159),U=s(82545),K=s(11896),ee=s(95338),te=s(62631),se=s(74719),ie=s(82301),re=s(50925),ne=s(96247),oe=s(8451),ae=s(32557);function ce(e){return e instanceof le?e:"object"==typeof e&&"type"in e?fe[e.type].hydrate(e):new he(e)}class le{constructor(e){this.inputs=e}encode(){const e=[];for(const t of this.inputs)e.push(...t.encode());return e.push(...this.instructions),e}}class he extends le{constructor(e){super([]),this.value=e}simplify(){return this}get instructions(){if(Array.isArray(this.value)){const[e,t,s,i]=this.value;return null!=i?ae.GA.vector4.encode([e,t||0,s||0,i]):ae.GA.vector3.encode([e,t||0,s||0])}return ae.GA.scalar.encode(this.value)}}class ue extends le{constructor(e,t){super([t]),this._config=e,this._parent=t}static hydrate(e){return new ue(e,ce(e.parent))}simplify(){if(this._config.relativeTranslation||this._config.absoluteScale)return this;const e=this._parent.simplify();if(!(e instanceof he))return this;const[t,s,i,r]=e.value,n=this._config.translation.from[0],o=this._config.translation.from[1],a=this._config.rotation.from,c=this._config.scale.from;if(n===this._config.translation.to[0]&&o===this._config.translation.to[1]&&a===this._config.rotation.to&&c===this._config.scale.to){const e=i+a,l=r*c,h=Math.sin(i),u=Math.cos(i);return new he([u*r*n-h*r*o+t,h*r*n+u*r*o+s,e,l])}return new ue(this._config,e)}get instructions(){return ae.GA.animatedTransform.encode(this._config)}}class de extends le{constructor(e,t){super([t]),this._config=e,this._parent=t}static hydrate(e){return new de(e,ce(e.parent))}simplify(){const e=this._parent.simplify();if(!(e instanceof he))return this;const[t,s,i,r]=e.value,n=this._config.color.from[0],o=this._config.color.from[1],a=this._config.color.from[2];let c=this._config.color.from[3];const l=this._config.opacity.from;return n===this._config.color.to[0]&&o===this._config.color.to[1]&&a===this._config.color.to[2]&&c===this._config.color.to[3]&&l===this._config.opacity.to?(c*=l,new he([t*n,s*o,i*a,r*c])):new de(this._config,e)}get instructions(){return ae.GA.animatedColor.encode(this._config)}}const fe={AnimatedTransform:ue,AnimatedColor:de};var pe=s(88102);function me(e){return ye(e.map((e=>xe(e))).map((e=>ce(e).simplify())))}function _e(e){const t=[];return t.push(e.transform),t.push(e.fromColor),t.push(e.toColor),t.push(e.colorMix),t.push(e.toOpacity),t.push(e.opacityMix),t}function ye(e){const t=[],s=[];let i=0;for(const r of e){const n=[...r.encode(),...ae.GA.ret.encode()];t.push([i+e.length,0,0,0]),s.push(...n),i+=n.length}return[...t,...s]}async function ge(e,t){const s=e;let i;if("number"==typeof s||"string"==typeof s||"boolean"==typeof s)i=s;else if(Array.isArray(s))i=await Promise.all(s.map((e=>ge(e,t))));else if("object"==typeof s)if("valueExpressionInfo"in s){const{valueExpressionInfo:e}=s,{expression:r}=e;i={...s,computed:await t.createComputedField({expression:r})}}else{i={};for(const e in s)i[e]=await ge(s[e],t)}return i}function xe(e,t,s){const i=e;let r;if("number"==typeof i||"string"==typeof i||"boolean"==typeof i)r=i;else if(Array.isArray(i))r=i.map((e=>xe(e,t,s)));else if("object"==typeof i)if("type"in i&&null!=i.type&&"Process"===i.type)switch(i.op){case"ArcadeColor":{const e=xe(i.value,t,s);Me(Array.isArray(e)&&4===e.length),r=[e[0]/255,e[1]/255,e[2]/255,e[3]]}break;case"Transparency":{const e=xe(i.value,t,s);Me("number"==typeof e),r=1-e/100}break;case"Divide":case"Add":{const e=xe(i.left,t,s);Me("number"==typeof e);const n=xe(i.right,t,s);switch(Me("number"==typeof n),i.op){case"Divide":r=e/n;break;case"Add":r=e+n}}break;case"Random":{const e=xe(i.seed,t,s),n=xe(i.min,t,s),o=xe(i.max,t,s),a=t.getObjectId(),c=(0,oe.A)(a||0);r=n+(0,oe.J)(c,e)*(o-n)}break;case"Cond":{const e=xe(i.condition,t,s),n=xe(i.ifTrue,t,s),o=xe(i.ifFalse,t,s);r=e?n:o}break;case"MatchWinding":{const e=xe(i.sign,t,s);let n=xe(i.angle,t,s);if(e>0)for(;n<0;)n+=2*Math.PI;else for(;n>0;)n-=2*Math.PI;r=n}}else if("computed"in i)r=function(e){if(!("computed"in e))return e;let i=e.computed.readWithDefault(t,s,[255*e.defaultValue[0],255*e.defaultValue[1],255*e.defaultValue[2],e.defaultValue[3]]);if("string"==typeof i){const e=pe.default.fromString(i);e&&(i=[e.r,e.g,e.b,e.a])}return i}(i);else{r={};for(const e in i)r[e]=xe(i[e],t,s)}return r}function*ve(e){const t=e;if(Array.isArray(t))for(const s of t)yield*ve(s);else if("object"==typeof t)if("type"in t&&null!=t.type&&"Process"===t.type)switch(t.op){case"ArcadeColor":case"Transparency":yield*ve(t.value);break;case"Divide":case"Add":yield*ve(t.left),yield*ve(t.right);break;case"Random":yield*ve(t.seed),yield*ve(t.min),yield*ve(t.max);break;case"Cond":yield*ve(t.condition),yield*ve(t.ifTrue),yield*ve(t.ifFalse);break;case"MatchWinding":yield*ve(t.sign),yield*ve(t.angle)}else if("computed"in t)yield t.computed;else for(const s in t)yield*ve(t[s])}function Me(e){if(!e)throw new Error("Assertion failed.")}var be=s(71983),Pe=s(2609);async function we(e,t){let s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const{defaultValue:i,valueExpressionInfo:r,value:n}=t;if(r){const{expression:n}=r,o=await e.createComputedField({expression:n},s);return o?{...t,computed:o,defaultValue:i}:null}return{...t,computed:new Pe.G(n),defaultValue:i}}async function Ae(e,t){const{valueExpressionInfo:s}=t,{expression:i}=s,r=await e.createComputedField({expression:i});return r?{...t,computed:r}:null}function ke(e){return"object"==typeof e&&null!=e&&(!(!("valueExpressionInfo"in e)||!e.valueExpressionInfo)||"type"in e&&"Process"===e.type&&"op"in e&&"Random"===e.op)}function Se(e){if(Array.isArray(e))for(const t of e)if(Se(t))return!0;if("object"==typeof e){if(ke(e))return!0;for(const t in e)if(Se(e[t]))return!0}return!1}class Ie{static async create(e,t,s){const i={},r=new Map,n=new Map,o=new Map,a=new Map,c=new Map,l=new Map;for(const h in s){const u=s[h];if(null!=u&&"object"==typeof u)if(Array.isArray(u)){if("object"==typeof u[0])throw new Error(`InternalError: Cannot handle ${h}. Nested array params are not supported`);i[h]=u}else if("valueExpressionInfo"in u){if(u.value){i[h]=u.value;continue}const t=await Ae(e,u);if(!t){i[h]=u.defaultValue;continue}r.set(h,t),i[h]=null}else switch(u.type){case"cim-effect-infos":if(u.effectInfos.some((e=>e.overrides.length))){n.set(h,{effects:await Promise.all(u.effectInfos.map((async t=>{const s=t.overrides.map((t=>we(e,t)));return{effect:t.effect,compiledOverrides:(await Promise.all(s)).filter(te.Ru)}})))});break}i[h]=u.effectInfos.map((e=>e.effect));break;case"cim-marker-placement-param":u.overrides.length&&o.set(h,{placementInfo:u,compiledOverrides:(await Promise.all(u.overrides.map((t=>we(e,t))))).filter(te.Ru)}),i[h]=u.placement;break;case"text-rasterization-param":{if(u.overrides.length){const t=u.overrides.map((t=>we(e,t,u.useLegacyLabelEvaluationRules)));a.set(h,{compiledOverrides:(await Promise.all(t)).filter(te.Ru),rasterizationParam:u,objectIdToResourceId:new Map});continue}const s={type:"cim-rasterization-info",resource:u.resource};i[h]=await t.fetchResourceImmediate(s)??null;break}case"sprite-rasterization-param":{if(u.overrides.length){const t=u.overrides.map((t=>we(e,t)));a.set(h,{compiledOverrides:(await Promise.all(t)).filter(te.Ru),rasterizationParam:u,objectIdToResourceId:new Map});continue}if("animated"===u.resource.type){a.set(h,{compiledOverrides:[],rasterizationParam:u,objectIdToResourceId:new Map});continue}const s={type:"cim-rasterization-info",resource:u.resource};i[h]=await t.fetchResourceImmediate(s)??null;break}case"cim-marker-transform-param":{const{params:t}=u;if(Se(t)){const s={compiledMarkerInfos:[]};await Promise.all(t.map((async t=>{const i={props:{}};for(const s in t)if(ke(t[s])){const r=await Ae(e,t[s]);i.compiledExpressionMap||(i.compiledExpressionMap=new Map);const n=i.compiledExpressionMap;r&&n.set(s,r)}else i.props[s]=t[s];s.compiledMarkerInfos.push(i)}))),c.set(h,s)}else i[h]={type:"cim-marker-transform-info",infos:t};break}case"animation-params":{const{params:s}=u,r=_e(s);if(Se(r)){const t=await Promise.all(r.map((t=>ge(t,e))));l.set(h,{params:t,propertyIdToResourceId:new Map,key:h})}else{const e=me(r),s=await t.fetchResourceImmediate({type:"animation-info",resource:e});null!=s&&"sprite"===s.type&&(i[h]={dataRow:s.rect.y,dataColumn:s.rect.x})}break}default:i[h]=u}else i[h]=u}return new Ie(s,i,r,n,o,a,c,l)}constructor(e,t,s,i,r,n,o,a){this.inputMeshParams=e,this._resolvedMeshParams=t,this._dynamicProperties=s,this._dynamicEffectProperties=i,this._dynamicPlacementProperties=r,this._dynamicAsyncProperties=n,this._dynamicTransformProperties=o,this._dynamicAsyncAnimations=a,this.evaluator=e=>e,this._arcadeDependencies=new Set;for(const c of this._expressions())(0,ne.QY)(this._arcadeDependencies,c)}get hasDynamicProperties(){return!!(this._dynamicProperties.size||this._dynamicAsyncProperties.size||this._dynamicEffectProperties.size||this._dynamicTransformProperties.size||this._dynamicPlacementProperties.size||this._dynamicAsyncAnimations.size)}get evaluatedMeshParams(){return this._evaluatedMeshParams||(this._evaluatedMeshParams=this.evaluator(this._resolvedMeshParams)),this._evaluatedMeshParams}enqueueRequest(e,t,s){for(const i of this._dynamicAsyncProperties.values()){const r=(0,ie.clone)(i.rasterizationParam.resource);"animated"===i.rasterizationParam.resource.type&&i.rasterizationParam.resource.randomizeStartTime&&(r.primitiveName="__RESERVED__PRIMITIVE__NAME__",r.startGroup=(0,oe.A)(t.getObjectId()||0));for(const{primitiveName:e,propertyName:o,computed:a,defaultValue:c,valueExpressionInfo:l}of i.compiledOverrides)try{const n="animated"===i.rasterizationParam.resource.type?r.primitiveName:e;(0,be.Ph)(r,n,o,a,t,s,c)}catch(F){re.A.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.mesh.MeshWriterInputEvaluator").errorOnce(new se.default("invalid-arcade-expression",`Encountered an error when evaluating the arcade expression '${l?.expression}' (primitive: '${e}', property: '${o}')`,F))}const n=e.enqueueRequest({type:"cim-rasterization-info",resource:r});i.objectIdToResourceId.set(t.getObjectId(),n)}for(const i of this._dynamicAsyncAnimations.values()){const r=i.params.map((e=>xe(e,t,s))).map(ce).map((e=>e.simplify())),n=ye(r),o=e.enqueueRequest({type:"animation-info",resource:n});i.propertyIdToResourceId.set(t.getObjectId()+"."+i.key,o)}}evaluateMeshParams(e,t,s){for(const[i,r]of this._dynamicProperties.entries())this._resolvedMeshParams[i]=r.computed.readWithDefault(t,s,r.defaultValue);for(const[i,r]of this._dynamicPlacementProperties.entries())for(const{computed:e,defaultValue:n,propertyName:o}of r.compiledOverrides){const a=e.readWithDefault(t,s,n);r.placementInfo.placement[o]=a,this._resolvedMeshParams[i]=r.placementInfo.placement}for(const[i,r]of this._dynamicEffectProperties.entries())for(const e of r.effects){for(const{computed:i,defaultValue:r,propertyName:n}of e.compiledOverrides){const o=i.readWithDefault(t,s,r);e.effect[n]=o}this._resolvedMeshParams[i]=r.effects.map((e=>e.effect))}for(const[i,r]of this._dynamicTransformProperties.entries()){const e={type:"cim-marker-transform-info",infos:[]};for(const i of r.compiledMarkerInfos){const r={...i.props};if(i.compiledExpressionMap)for(const[e,n]of i.compiledExpressionMap){const i=n.computed.readWithDefault(t,s,n.defaultValue);r[e]="number"==typeof i||"boolean"==typeof i?i:n.defaultValue}e.infos.push(r)}this._resolvedMeshParams[i]=e}for(const[i,r]of this._dynamicAsyncProperties.entries()){const s=r.objectIdToResourceId.get(t.getObjectId());if(null==s)continue;const n=e.getResource(s);this._resolvedMeshParams[i]=n}for(const[i,r]of this._dynamicAsyncAnimations.entries()){const s=r.propertyIdToResourceId.get(t.getObjectId()+"."+i);if(null==s)continue;const n=e.getResource(s);this._resolvedMeshParams[i]={dataRow:n.rect.y,dataColumn:n.rect.x}}return this._evaluatedMeshParams=this.evaluator(this._resolvedMeshParams),this.evaluatedMeshParams}hasArcadeDependency(e){return this._arcadeDependencies.has(e)}*_expressions(){for(const e of this._dynamicProperties.values())yield e.computed;for(const e of this._dynamicEffectProperties.values())for(const t of e.effects)for(const e of t.compiledOverrides)yield e.computed;for(const e of this._dynamicPlacementProperties.values())for(const t of e.compiledOverrides)yield t.computed;for(const e of this._dynamicAsyncProperties.values())for(const t of e.compiledOverrides)yield t.computed;for(const e of this._dynamicTransformProperties.values())for(const t of e.compiledMarkerInfos)if(null!=t.compiledExpressionMap)for(const e of t.compiledExpressionMap.values())yield e.computed;for(const e of this._dynamicAsyncAnimations.values())for(const t of e.params)yield*ve(t)}}var ze=s(55697);class Le{async createMeshWriter(e,t,s,i){const r=this._getMeshWriter(i.techniqueType),n=await Ie.create(e,t,i.inputParams),o=new r(i.id,n,i.optionalAttributes,s);return await o.loadDependencies(),o}_getMeshWriter(e){switch(e){case i.N.Fill:return y.Y;case i.N.DotDensity:return p.k;case i.N.ComplexFill:return m.KE;case i.N.PatternFill:return v.m;case i.N.GradientFill:return g.S;case i.N.OutlineFill:return x.w0;case i.N.PatternOutlineFill:return M.Q;case i.N.ComplexOutlineFill:return _.O;case i.N.Marker:return ee.H;case i.N.PieChart:return ze.v;case i.N.Text:return Q.G8;case i.N.Line:return U.Bw;case i.N.TexturedLine:return K.K;case i.N.GradientStroke:return J.F;case i.N.Heatmap:return b.h;case i.N.Label:return $;case i.N.AnimatedMarker:return f;default:throw new Error("Internal Error: Mesh writer not in the registry")}}}},2609:(e,t,s)=>{s.d(t,{G:()=>r});var i=s(11474);class r extends i.L{constructor(e){super(),this._value=e}resize(e){}read(e,t){return this._value}readWithDefault(e,t,s){return this._value}hasArcadeDependency(e){return!1}}}}]);