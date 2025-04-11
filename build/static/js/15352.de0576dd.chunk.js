"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[15352],{15352:(t,e,i)=>{i.d(e,{AxisRendererXAm5:()=>s.A,AxisRendererYAm5:()=>s.a,CategoryAxisAm5:()=>l,ColumnSeriesAm5:()=>h,LineSeriesAm5:()=>s.L,ValueAxisAm5:()=>s.V,XYChartAm5:()=>s.X,XYCursorAm5:()=>s.b});var s=i(39061),a=i(59041),o=i(93800),n=i(20630);class r extends s.c{constructor(){super(...arguments),Object.defineProperty(this,"_ph",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_pw",{enumerable:!0,configurable:!0,writable:!0,value:0})}_makeGraphics(t,e){return this.makeColumn(e,t)}_makeFieldNames(){super._makeFieldNames();const t=this.get("xAxis"),e=this.get("yAxis"),i="CategoryAxis",s="ValueAxis";t.isType(i)&&(this.get("openCategoryXField")||(this._xOpenField=this._xField)),t.isType(s)&&(this.get("openValueXField")||(this._xOpenField=this._xField)),e.isType(i)&&(this.get("openCategoryYField")||(this._yOpenField=this._yField)),e.isType(s)&&(this.get("openValueYField")||(this._yOpenField=this._yField))}_prepareChildren(){super._prepareChildren();const t=this.get("xAxis"),e=this.get("yAxis"),i=this.dataItems.length,s=Math.max(0,this.startIndex()-2),a=Math.min(this.endIndex()+2,i-1);if(t.inited&&e.inited)for(let o=s;o<=a;o++){let t=this.dataItems[o];this._createGraphics(t)}}_updateChildren(){const t=this.chart;t&&(this._ph=t.plotContainer.height(),this._pw=t.plotContainer.width());const e=this.get("xAxis"),i=this.get("yAxis"),s=this.get("baseAxis"),o=this.columns.template;this.isDirty("fill")&&null==o.get("fill")&&o.set("fill",this.get("fill")),this.isDirty("fillPattern")&&null==o.get("fillPattern")&&o.set("fillPattern",this.get("fillPattern")),this.isDirty("stroke")&&null==o.get("stroke")&&o.set("stroke",this.get("stroke"));let n=0,l=0,h=0;(0,a.i)(s.series,(t=>{if(t instanceof r){const e=t.get("stacked");e&&0==h&&l++,!e&&t.get("clustered")&&l++}t===this&&(n=l-1),h++})),this.get("clustered")||(n=0,l=1),0===l&&(l=1,n=0);const g=e.get("renderer"),d=i.get("renderer"),c="cellStartLocation",m="cellEndLocation",p=g.get(c,0),u=g.get(m,1),x=d.get(c,0),_=d.get(m,1);if(this._aLocationX0=p+n/l*(u-p),this._aLocationX1=p+(n+1)/l*(u-p),this._aLocationY0=x+n/l*(_-x),this._aLocationY1=x+(n+1)/l*(_-x),e.inited&&i.inited){if(this._axesDirty||this._valuesDirty||this._stackDirty||this.isDirty("vcx")||this.isDirty("vcy")||this._sizeDirty){const t=this.dataItems.length;let e=Math.max(0,this.startIndex()-2),i=Math.min(this.endIndex()+2,t-1);for(let a=0;a<e;a++)this._toggleColumn(this.dataItems[a],!1);let s=this.dataItems[e];for(let a=e;a<=i;a++){let t=this.dataItems[a];if(null!=t.get("valueX")&&null!=t.get("valueY")){if(s=t,a>0&&e>0)for(let t=a-1;t>=0;t--){let e=this.dataItems[t];if(null!=e.get("valueX")&&null!=e.get("valueY")){s=e;break}}break}this._toggleColumn(t,!1)}for(let a=e;a<=i;a++){let t=this.dataItems[a];this._updateGraphics(t,s),null!=t.get("valueX")&&null!=t.get("valueY")&&(s=t)}for(let a=i+1;a<t;a++)this._toggleColumn(this.dataItems[a],!1)}}else this._skipped=!0;this.updateLegendMarker(this.get("tooltipDataItem")),super._updateChildren()}_createGraphics(t){let e=t.get("graphics");if(!e){e=this._makeGraphics(this.columns,t),t.set("graphics",e),e._setDataItem(t);const i=t.get("legendDataItem");if(i){const t=i.get("markerRectangle");if(t){const i=t.states.lookup("default");(0,a.i)(a.v,(s=>{const a=e.get(s,this.get(s));t.set(s,a),i.set(s,a)}))}}let s=t.get("rangeGraphics");s&&(0,a.i)(s,(t=>{t.dispose()})),s=[],t.setRaw("rangeGraphics",s),this.axisRanges.each((e=>{const i=e.container,a=this._makeGraphics(e.columns,t);s&&s.push(a),a.setPrivate("list",e.columns),i.children.push(a)}))}}createAxisRange(t){return(0,a.i)(this.dataItems,(t=>{const e=t.get("graphics");e&&(e.dispose(),t.set("graphics",void 0))})),super.createAxisRange(t)}_updateGraphics(t,e){let i=t.get("graphics");const s=this._xField,o=this._yField,n=t.get(s),r=t.get(o);if(null!=n&&null!=r){const n=this._xOpenField,r=this._yOpenField,l=this.get("locationX",t.get("locationX",.5)),h=this.get("locationY",t.get("locationY",.5)),g=this.get("openLocationX",t.get("openLocationX",l)),d=this.get("openLocationY",t.get("openLocationY",h)),c=i.get("width"),m=i.get("height"),p=this.get("stacked"),u=this.get("xAxis"),x=this.get("yAxis"),_=this.get("baseAxis"),I=u.get("start"),f=u.get("end"),y=x.get("start"),P=x.get("end");let b,v,D,T,k=this.get("vcy",1),w=this.get("vcx",1),C=!1,A=!1;if(x.isType("CategoryAxis")&&u.isType("CategoryAxis")){let e=this._aLocationX0+g-.5,i=this._aLocationX1+l-.5;if(c instanceof a.P){let t=(i-e)*(1-c.value)/2;e+=t,i-=t}if(b=u.getDataItemPositionX(t,n,e,w),v=u.getDataItemPositionX(t,s,i,w),e=this._aLocationY0+d-.5,i=this._aLocationY1+h-.5,m instanceof a.P){let t=(i-e)*(1-m.value)/2;e+=t,i-=t}D=x.getDataItemPositionY(t,r,e,k),T=x.getDataItemPositionY(t,o,i,k),t.setRaw("point",{x:b+(v-b)/2,y:D+(T-D)/2})}else if(u===_){let e=this._aLocationX0+g-.5,i=this._aLocationX1+l-.5;if(c instanceof a.P){let t=(i-e)*(1-c.value)/2;e+=t,i-=t}if(b=u.getDataItemPositionX(t,n,e,w),v=u.getDataItemPositionX(t,s,i,w),D=x.getDataItemPositionY(t,o,h,k),this._yOpenField!==this._yField)T=x.getDataItemPositionY(t,r,d,k);else if(p){let e=t.get("stackToItemY");T=e?x.getDataItemPositionY(e,o,d,e.component.get("vcy")):x.basePosition()}else T=x.basePosition();t.setRaw("point",{x:b+(v-b)/2,y:D}),A=!0}else if(x===_){let e=this._aLocationY0+d-.5,i=this._aLocationY1+h-.5;if(m instanceof a.P){let t=(i-e)*(1-m.value)/2;e+=t,i-=t}if(D=x.getDataItemPositionY(t,r,e,k),T=x.getDataItemPositionY(t,o,i,k),v=u.getDataItemPositionX(t,s,l,w),this._xOpenField!==this._xField)b=u.getDataItemPositionX(t,n,g,w);else if(p){let e=t.get("stackToItemX");b=e?u.getDataItemPositionX(e,s,g,e.component.get("vcx")):u.basePosition()}else b=u.basePosition();C=!0,t.setRaw("point",{x:v,y:D+(T-D)/2})}this._updateSeriesGraphics(t,i,b,v,D,T,C,A),b<I&&v<I||b>f&&v>f||D<y&&T<=y||D>=P&&T>P||(0,a.q)(b)||(0,a.q)(D)?this._toggleColumn(t,!1):this._toggleColumn(t,!0);let F=t.get("rangeGraphics");F&&(0,a.i)(F,(e=>{this._updateSeriesGraphics(t,e,b,v,D,T,C,A)})),this._applyGraphicsStates(t,e)}else this._toggleColumn(t,!1)}_updateSeriesGraphics(t,e,i,s,o,n,r,l){const h=e.get("width"),g=e.get("height"),d=e.get("maxWidth"),c=e.get("maxHeight"),m=this.getPoint(i,o),p=this.getPoint(s,n),u=t.get("point");if(u){const t=this.getPoint(u.x,u.y);u.x=t.x+this._x,u.y=t.y+this._y}if(i=m.x,s=p.x,o=m.y,n=p.y,(0,a.k)(h)){const t=(s-i-h)/2;i+=t,s-=t}if((0,a.k)(d)&&d<Math.abs(s-i)){const t=(s-i-d)/2;i+=t,s-=t}if((0,a.k)(g)){const t=(n-o-g)/2;o+=t,n-=t}if((0,a.k)(c)&&c<Math.abs(n-o)){const t=(n-o-c)/2;o+=t,n-=t}this.get("adjustBulletPosition")&&(r&&(s=Math.min(Math.max(0,s),this._pw),i=Math.min(Math.max(0,i),this._pw)),l&&(o=Math.min(Math.max(0,o),this._ph),n=Math.min(Math.max(0,n),this._ph))),t.setRaw("left",i),t.setRaw("right",s),t.setRaw("top",o),t.setRaw("bottom",n),e.setPrivate("width",s-i),e.setPrivate("height",n-o),e.set("x",i),e.set("y",n-(n-o))}_handleDataSetChange(){super._handleDataSetChange(),(0,a.i)(this._dataItems,(t=>{this._toggleColumn(t,!1)}))}_applyGraphicsStates(t,e){const i=t.get("graphics"),s=i.states.lookup("dropFromOpen"),o=i.states.lookup("riseFromOpen"),n=i.states.lookup("dropFromPrevious"),r=i.states.lookup("riseFromPrevious");if(s||n||o||r){const i=this.get("xAxis"),l=this.get("yAxis"),h=this.get("baseAxis");let g,d,c;h===i&&l.isType("ValueAxis")?(g=t.get(this._yOpenField),d=t.get(this._yField),c=e.get(this._yField)):h===l&&i.isType("ValueAxis")&&(g=t.get(this._xOpenField),d=t.get(this._xField),c=e.get(this._xField)),(0,a.k)(g)&&(0,a.k)(d)&&(d<g?s&&s.apply():o&&o.apply(),(0,a.k)(c)&&(d<c?n&&n.apply():r&&r.apply()))}}disposeDataItem(t){super.disposeDataItem(t);const e=t.get("graphics");e&&(this.columns.removeValue(e),e.dispose());const i=t.get("rangeGraphics");i&&(0,a.i)(i,(t=>{const e=t.getPrivate("list");e&&e.removeValue(t),t.dispose()}))}hideDataItem(t,e){const i=Object.create(null,{hideDataItem:{get:()=>super.hideDataItem}});return(0,o.d)(this,void 0,void 0,(function*(){const s=[i.hideDataItem.call(this,t,e)],o=t.get("graphics");o&&s.push(o.hide(e));const n=t.get("rangeGraphics");n&&(0,a.i)(n,(t=>{s.push(t.hide(e))})),yield Promise.all(s)}))}_toggleColumn(t,e){const i=t.get("graphics");i&&i.setPrivate("visible",e);const s=t.get("rangeGraphics");s&&(0,a.i)(s,(t=>{t.setPrivate("visible",e)}));const o=t.bullets;o&&(0,a.i)(o,(t=>{t.setPrivate("hidden",!e)}))}showDataItem(t,e){const i=Object.create(null,{showDataItem:{get:()=>super.showDataItem}});return(0,o.d)(this,void 0,void 0,(function*(){const s=[i.showDataItem.call(this,t,e)],o=t.get("graphics");o&&s.push(o.show(e));const n=t.get("rangeGraphics");n&&(0,a.i)(n,(t=>{s.push(t.show(e))})),yield Promise.all(s)}))}updateLegendMarker(t){let e=this.get("legendDataItem");if(this.get("useLastColorForLegendMarker")&&!t){const e=this.dataItems[this.endIndex()-1];e&&(t=e)}if(e){let i=this.columns.template;if(t){let e=t.get("graphics");e&&(i=e)}const s=e.get("markerRectangle");if(s&&!e.get("itemContainer").get("disabled")){const t=s.states.lookup("default");(0,a.i)(a.v,(e=>{const a=i.get(e,this.get(e));s.set(e,a),t.set(e,a)}))}}}_getTooltipTarget(t){if("bullet"==this.get("seriesTooltipTarget"))return super._getTooltipTarget(t);return t.get("graphics")||this}}Object.defineProperty(r,"className",{enumerable:!0,configurable:!0,writable:!0,value:"BaseColumnSeries"}),Object.defineProperty(r,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:s.c.classNames.concat([r.className])});class l extends s.d{constructor(){super(...arguments),Object.defineProperty(this,"_frequency",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"_itemMap",{enumerable:!0,configurable:!0,writable:!0,value:{}})}_afterNew(){this._settings.themeTags=(0,a.m)(this._settings.themeTags,["axis"]),this.fields.push("category"),this.setPrivateRaw("name","category"),this.addTag("category"),super._afterNew()}_prepareChildren(){super._prepareChildren();const t=this.dataItems.length;let e=0;this._valuesDirty&&(this._itemMap={},(0,a.i)(this.dataItems,(t=>{t.setRaw("index",e),this._itemMap[t.get("category")]=t,e++})),this.setPrivateRaw("maxZoomFactor",t)),this.setPrivateRaw("startIndex",Math.max(Math.round(this.get("start",0)*t),0)),this.setPrivateRaw("endIndex",Math.min(Math.round(this.get("end",1)*t),t)),(this._sizeDirty||this._valuesDirty||this.isDirty("start")||this.isDirty("end")||this.isPrivateDirty("endIndex")||this.isPrivateDirty("startIndex")||this.isPrivateDirty("width")||this.isPrivateDirty("height"))&&this.dataItems.length>0&&(this._handleRangeChange(),this._prepareAxisItems(),this._updateAxisRanges())}_handleRangeChange(){(0,a.i)(this.series,(t=>{let e=this.dataItems[this.startIndex()].get("category"),i=this.dataItems[this.endIndex()-1].get("category"),o=t.get("baseAxis"),n=t.get("xAxis"),r=t.get("yAxis");if(n instanceof l&&r instanceof l)t._markDirtyAxes();else if(o===this){let l,h,g=r;if(n===o?(t.get("categoryXField")&&(l="categoryX"),t.get("openCategoryXField")&&(h="openCategoryX")):r===o&&(t.get("categoryYField")&&(l="categoryY"),t.get("openCategoryYField")&&(h="openCategoryY"),g=n),g instanceof s.V&&(l||h)){let s,o;for(let i=0,a=t.dataItems.length;i<a;i++){let a=t.dataItems[i];if(l&&a.get(l)===e){s=a;break}if(h&&a.get(h)===e){s=a;break}}for(let e=t.dataItems.length-1;e>=0;e--){let s=t.dataItems[e];if(l&&s.get(l)===i){o=s;break}if(h&&s.get(h)===i){o=s;break}}let n=0,r=t.dataItems.length;s&&(n=t.dataItems.indexOf(s)),o&&(r=t.dataItems.indexOf(o)+1),t.setPrivate("startIndex",n),t.setPrivate("endIndex",r);let g=!1;for(let e=n;e<r;e++){const i=t.dataItems[e];if((0,a.i)(t.__valueXShowFields,(t=>{null!=i.get(t)&&(g=!0)})),(0,a.i)(t.__valueYShowFields,(t=>{null!=i.get(t)&&(g=!0)})),g)break}t.setPrivate("outOfSelection",!g)}t._markDirtyAxes()}}))}_prepareAxisItems(){var t;const e=this.get("renderer"),i=this.dataItems.length;let s=this.startIndex();s>0&&s--;let a=this.endIndex();a<i&&a++;const o=e.get("minorLabelsEnabled"),n=e.get("minorGridEnabled",o);let r=e.axisLength()/Math.max(e.get("minGridDistance"),1),l=Math.max(1,Math.min(i,Math.ceil((a-s)/r)));s=Math.floor(s/l)*l,this._frequency=l;for(let g=0;g<i;g++)this._toggleDataItem(this.dataItems[g],!1);let h=this.dataItems[s].get("index",0);for(let g=s;g<a;g+=l){let t=this.dataItems[g];this._createAssets(t,[]),this._toggleDataItem(t,!0);let e=l;n&&(e=1),this._prepareDataItem(t,h,e),h++}if(e.get("minorGridEnabled"))for(let g=s;g<a;g++){let e=this.dataItems[g];g%l!=0&&(this._createAssets(e,["minor"],!0),this._toggleDataItem(e,!0),this._prepareDataItem(e,0,1),o||null===(t=e.get("label"))||void 0===t||t.setPrivate("visible",!1))}this._updateGhost()}_prepareDataItem(t,e,i){let s=this.get("renderer"),o=t.get("categoryLocation",0),n=t.get("endCategoryLocation",1),r=t.get("index");(0,a.k)(r)||(r=this.categoryToIndex(t.get("category")));let l,h=this.indexToPosition(r,o),g=t.get("endCategory");g?(l=this.categoryToIndex(g),(0,a.k)(l)||(l=r)):l=r;let d,c,m=this.indexToPosition(l,n);d=t.get("isRange")?l:r+this._frequency-1,c=this.indexToPosition(d,n),s.updateLabel(t.get("label"),h,m,i),s.updateGrid(t.get("grid"),h,m),s.updateTick(t.get("tick"),h,m,i),s.updateFill(t.get("axisFill"),h,c),this._processBullet(t),s.updateBullet(t.get("bullet"),h,m);const p=this.get("fillRule");p&&p(t,e)}startIndex(){let t=this.dataItems.length;return Math.min(Math.max(this.getPrivate("startIndex",0),0),t-1)}endIndex(){let t=this.dataItems.length;return Math.max(1,Math.min(this.getPrivate("endIndex",t),t))}baseValue(){}basePosition(){return 0}getX(t){let e=this._itemMap[t];return e?this._settings.renderer.positionToCoordinate(this.indexToPosition(e.get("index",0))):NaN}getY(t){let e=this._itemMap[t];return e?this._settings.renderer.positionToCoordinate(this.indexToPosition(e.get("index",0))):NaN}getDataItemPositionX(t,e,i,s){const a=t.get(e),o=this._itemMap[a];return o?this.indexToPosition(o.get("index",0),i):NaN}getDataItemCoordinateX(t,e,i,s){return this._settings.renderer.positionToCoordinate(this.getDataItemPositionX(t,e,i,s))}getDataItemPositionY(t,e,i,s){const a=t.get(e),o=this._itemMap[a];return o?this.indexToPosition(o.get("index",0),i):NaN}getDataItemCoordinateY(t,e,i,s){return this._settings.renderer.positionToCoordinate(this.getDataItemPositionY(t,e,i,s))}indexToPosition(t,e){(0,a.k)(e)||(e=.5);let i=this.dataItems.length,s=this.get("startLocation",0);i-=s,i-=1-this.get("endLocation",1);let o=(t+e-s)/i,n=this.dataItems[t];return n&&(o+=n.get("deltaPosition",0)),o}categoryToIndex(t){let e=this._itemMap[t];return e?e.get("index"):NaN}dataItemToPosition(t){return this.indexToPosition(t.get("index"))}roundAxisPosition(t,e){return t+=(.5-e)/this.dataItems.length,this.indexToPosition(this.axisPositionToIndex(t),e)}axisPositionToIndex(t){let e=this.dataItems.length;return(0,a.f)(Math.floor(t*e),0,e-1)}getTooltipText(t,e){const i=this.dataItems[this.axisPositionToIndex(t)];if(i){const t=i.get("label");if(t)return(0,a.s)(t,this.get("tooltipText",""))}}_updateTooltipText(t,e){t._setDataItem(this.dataItems[this.axisPositionToIndex(e)]),t.label.text.markDirtyText()}getSeriesItem(t,e){if(this.dataItems.length>0){let i=this.getPrivate("name")+this.get("renderer").getPrivate("letter"),s=this.axisPositionToIndex(e),a=t.dataItems[s],o=this.dataItems[s],n=o.get("category");if(a&&o&&a.get(i)===n)return a;for(let e=0,r=t.dataItems.length;e<r;e++){let s=t.dataItems[e];if(s.get(i)===n)return s}}}zoomToIndexes(t,e,i){let s=this.dataItems.length;this.zoom(t/s,e/s,i)}zoomToCategories(t,e,i){this.zoomToIndexes(this.categoryToIndex(t),this.categoryToIndex(e)+1,i)}getCellWidthPosition(){return this._frequency/this.dataItems.length/(this.get("end",1)-this.get("start",0))}nextPosition(t){null==t&&(t=1),"Y"==this.get("renderer").getPrivate("letter")&&(t*=-1);const e=this.getPrivate("tooltipPosition",0),i=(0,a.f)(this.axisPositionToIndex(e)+t,0,this.dataItems.length-1);return this.toGlobalPosition(this.indexToPosition(i))}}Object.defineProperty(l,"className",{enumerable:!0,configurable:!0,writable:!0,value:"CategoryAxis"}),Object.defineProperty(l,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:s.d.classNames.concat([l.className])});class h extends r{constructor(){super(...arguments),Object.defineProperty(this,"columns",{enumerable:!0,configurable:!0,writable:!0,value:this.addDisposer(new a.t(a.u.new({}),(()=>n.R._new(this._root,{position:"absolute",themeTags:(0,a.m)(this.columns.template.get("themeTags",[]),["series","column"])},[this.columns.template]))))})}makeColumn(t,e){const i=this.mainContainer.children.push(e.make());return i._setDataItem(t),e.push(i),i}_processAxisRange(t){super._processAxisRange(t),t.columns=new a.t(a.u.new({}),(()=>n.R._new(this._root,{position:"absolute",themeTags:(0,a.m)(t.columns.template.get("themeTags",[]),["series","column"])},[this.columns.template,t.columns.template])))}}Object.defineProperty(h,"className",{enumerable:!0,configurable:!0,writable:!0,value:"ColumnSeries"}),Object.defineProperty(h,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:r.classNames.concat([h.className])})}}]);