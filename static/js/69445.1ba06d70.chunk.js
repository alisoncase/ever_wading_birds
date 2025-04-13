"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[69445],{63080:(e,t,a)=>{a.d(t,{U:()=>c});var i=a(93800),s=a(79953),r=a(48602),n=(a(21265),a(50925),a(14746),a(75269));const o="sketch-handles",c=e=>{let t=class extends e{initialize(){this.addHandles((0,s.watch)((()=>this.viewModel?.sketch),(e=>{this.removeHandles(o),e&&this.addHandles([e.on("create",(e=>this.handleCreate(e))),e.on("update",(e=>this.handleUpdate(e))),e.on("undo",(e=>this.handleUndo(e))),e.on("redo",(e=>this.handleRedo(e))),e.on("delete",(e=>this.handleDelete(e))),e.on("destroy",(()=>this.handleDestroy())),e.on("duplicate",(e=>this.handleDuplicate(e))),(0,s.watch)((()=>e.activeComponent),(e=>{"draw-2d"!==e?.type&&"draw-3d"!==e?.type||(e.elevationLockOnVertexAddDisabled=!0)}),s.syncAndInitial)],o)}),s.syncAndInitial))}handleCreate(e){}handleUpdate(e){}handleUndo(e){}handleRedo(e){}handleDelete(e){}handleDestroy(){}handleDuplicate(e){}};return(0,i._)([(0,r.MZ)()],t.prototype,"type",void 0),(0,i._)([(0,r.MZ)()],t.prototype,"viewModel",void 0),t=(0,i._)([(0,n.$)("esri.widgets.OrientedImageryViewer.mixins.SketchHandlerMixin")],t),t}},69445:(e,t,a)=>{a.r(t),a.d(t,{default:()=>M});var i=a(93800),s=a(58828),r=a(20620),n=a(49959),o=a(48602),c=(a(21265),a(50925),a(14746),a(75269)),l=a(96913),d=a(58507),h=a(63080);let u=[],m=[],y=0,p=class extends((0,h.U)(r.A)){constructor(e){super(e),this.type="measurement",this.measurementArray=[],this.pixelMeasurement=0,this.pixelAreaMeasurement=0,this.polygonVertices=[],this._calculationTask=null,this._distanceCalculation=0,this._areaCalculation=null}initialize(){this.addResolvingPromise((0,l.load)())}async handleCreate(e){const t=e.toolEventInfo;switch(e.tool){case"polyline":this.handlePolylineEvents(e,t);break;case"polygon":this.handlePolygonEvents(e,t)}}handleDelete(e){this.resetDistanceMeasurements(),this.resetAreaMeasurements()}handleDestroy(){this.resetDistanceMeasurements(),this.resetAreaMeasurements()}cursorUpdatePolylineHandler(e){const{mode:t,activeViewer:a}=this.viewModel;if("none"===t||!a?.imageSize)return;if("default"===t)this.measurementArray.push(e.coordinates);else{const t={x:e.coordinates[0],y:e.coordinates[1],z:e.coordinates[2]},i=(0,d.pq)(t,a.imageSize[0],a.imageSize[1]);this.measurementArray.push([i.x,i.y])}const i=m.reduce(((e,t)=>e+t),0)+this.pixelMeasurement;this.viewModel.distanceMeasurementResult=i}async cursorUpdatePolygonHandler(e){const{mode:t,activeViewer:a}=this.viewModel;if("none"===t||!a?.imageSize)return;const i=e.coordinates;if(u=[...this.polygonVertices],"default"===t)u.push(i);else{const e={x:i[0],y:i[1],z:i[2]},t=(0,d.pq)(e,a?.imageSize[0],a?.imageSize[1]);u.push([t.x,t.y])}if(u.length<3||!this.viewModel.currentBestFeature||!this.viewModel.activeViewer?.imageSize)return;const s=u[0];u=u.filter(((e,t)=>0===t||t===u.length-1||JSON.stringify(e)!==JSON.stringify(s)));const r=await this._getAreaFromTask(u);r?.area&&r?.perimeter&&(y=r.area)}async handlePolylineEvents(e,t){const a=!this.viewModel.accuracyParametersMissing;if("cancel"===e.state)return this.resetDistanceMeasurements(),this.viewModel.distanceMeasurementResult=0,this.viewModel.distanceAccuracyArray=[],void(this.viewModel.displayNewMeasurementButton=!0);if("complete"===e.state&&e.graphic)return this.viewModel.activeViewer?.addGraphic(e.graphic),this.viewModel.measurementGraphic=e.graphic,void this.resetDistanceMeasurements();switch(t?.type){case"cursor-update":this.cursorUpdatePolylineHandler(t);break;case"vertex-add":if(this.measurementArray.length&&a){const e=await this._getAccuracyFromTask();e&&this.viewModel.distanceAccuracyArray.push(e)}this.vertexUpdatePolylineHandler()}const i=await this._getDistanceFromTask();this.pixelMeasurement=i??this.pixelMeasurement}async handlePolygonEvents(e,t){const a=!this.viewModel.accuracyParametersMissing;if("cancel"===e.state)return this.resetAreaMeasurements(),this.viewModel.areaMeasurementResult=0,this.viewModel.areaMeasurementAccuracy=0,void(this.viewModel.displayNewMeasurementButton=!0);if("complete"===e.state&&e.graphic){if(this.viewModel.activeViewer?.addGraphic(e.graphic),a){const e=await this._getAreaAccuracyFromTask(this.polygonVertices);this.viewModel.areaMeasurementAccuracy=e&&e>this.viewModel.areaMeasurementAccuracy?e:this.viewModel.areaMeasurementAccuracy}return this.viewModel.measurementGraphic=e.graphic,void this.resetAreaMeasurements()}switch(t?.type){case"vertex-add":await this.vertexAddPolygonHandler(t);break;case"cursor-update":await this.cursorUpdatePolygonHandler(t)}this.viewModel.areaMeasurementResult=y>0?y:this.pixelAreaMeasurement}async vertexAddPolygonHandler(e){const{mode:t,activeViewer:a}=this.viewModel,i=e.added,s=i[i.length-1];if(!Array.isArray(s)||"none"===t||!a?.imageSize)return;if("default"===t)this.polygonVertices.push(s);else{const e={x:s[0],y:s[1],z:s[2]},t=(0,d.pq)(e,a?.imageSize[0],a?.imageSize[1]);this.polygonVertices.push([t.x,t.y])}if(this.polygonVertices.length<3||!this.viewModel.currentBestFeature||!this.viewModel.activeViewer?.imageSize)return;const r=this.polygonVertices[0];this.polygonVertices=this.polygonVertices.filter(((e,t)=>0===t||t===this.polygonVertices.length-1||JSON.stringify(e)!==JSON.stringify(r)));const n=await this._getAreaFromTask(this.polygonVertices);if(!n?.area||!n?.perimeter)return;const{area:o}=n;this.pixelAreaMeasurement=o}vertexUpdatePolylineHandler(){this.measurementArray=this.measurementArray.slice(-1);const e=m.reduce(((e,t)=>e+t),0)+this.pixelMeasurement;this.viewModel.distanceMeasurementResult=e,this.pixelMeasurement>0&&m.push(this.pixelMeasurement)}resetDistanceMeasurements(){this.measurementArray=[],this.pixelMeasurement=0,m=[]}resetAreaMeasurements(){this.polygonVertices=[],this.pixelAreaMeasurement=0,y=0}async _getAreaFromTask(e){const{mode:t}=this.viewModel;return this._calculationTask?.abort(),this._calculationTask=(0,s.UT)((async a=>{this._areaCalculation=null;const i=await this.viewModel.calculateAreaMeasurement(e,t,a);(0,n.throwIfAborted)(a),this._areaCalculation=i})),await this._calculationTask.promise,this._areaCalculation}async _getDistanceFromTask(){const{mode:e}=this.viewModel;return this._calculationTask?.abort(),this._calculationTask=(0,s.UT)((async t=>{this._distanceCalculation=0;const a=await this.viewModel.calculateDistanceMeasurement(this.measurementArray,e,t);(0,n.throwIfAborted)(t),this._distanceCalculation=a})),await this._calculationTask.promise,this._distanceCalculation}async _getAccuracyFromTask(){const{mode:e}=this.viewModel;return"none"===e?null:(this._calculationTask?.abort(),this._calculationTask=(0,s.UT)((async t=>{this._distanceCalculation=0;const a="default"===e?await this.viewModel.calculateAccuracy(this.measurementArray,"distance",t):await this.viewModel.calculateAccuracyPanoramic(this.measurementArray,"distance",t);(0,n.throwIfAborted)(t),this._distanceCalculation=a})),await this._calculationTask.promise,this._distanceCalculation)}async _getAreaAccuracyFromTask(e){const{mode:t}=this.viewModel;return"none"===t?null:(this._calculationTask?.abort(),this._calculationTask=(0,s.UT)((async a=>{this._distanceCalculation=0;const i="default"===t?await this.viewModel.calculateAccuracy(e,"area",a):await this.viewModel.calculateAccuracyPanoramic(e,"area",a);(0,n.throwIfAborted)(a),this._distanceCalculation=i})),await this._calculationTask.promise,this._distanceCalculation)}};(0,i._)([(0,o.MZ)()],p.prototype,"type",void 0),(0,i._)([(0,o.MZ)()],p.prototype,"measurementArray",void 0),(0,i._)([(0,o.MZ)()],p.prototype,"pixelMeasurement",void 0),(0,i._)([(0,o.MZ)()],p.prototype,"pixelAreaMeasurement",void 0),(0,i._)([(0,o.MZ)()],p.prototype,"polygonVertices",void 0),p=(0,i._)([(0,c.$)("esri.widgets.OrientedImageryViewer.adapters.sketch.MeasurementAdapter")],p);const M=p}}]);