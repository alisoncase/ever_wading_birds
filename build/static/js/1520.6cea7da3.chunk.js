"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[1520],{81520:(e,t,a)=>{a.d(t,{D:()=>n,s:()=>i});var o=a(59041);function i(e,t,a,o){e.set(t,a.get(o)),a.on(o,(a=>{e.set(t,a)}))}class n extends o.T{setupDefaultRules(){super.setupDefaultRules();const e=this._root.language,t=this._root.interfaceColors,a=this._root.horizontalLayout,n=this._root.verticalLayout,r=this.rule.bind(this);r("InterfaceColors").setAll({stroke:o.C.fromHex(15066597),fill:o.C.fromHex(15987699),primaryButton:o.C.fromHex(6788316),primaryButtonHover:o.C.fromHex(6779356),primaryButtonDown:o.C.fromHex(6872182),primaryButtonActive:o.C.fromHex(6872182),primaryButtonDisabled:o.C.fromHex(14342874),primaryButtonTextDisabled:o.C.fromHex(16777215),primaryButtonText:o.C.fromHex(16777215),primaryButtonStroke:o.C.fromHex(16777215),secondaryButton:o.C.fromHex(14277081),secondaryButtonHover:o.C.fromHex(10724259),secondaryButtonDown:o.C.fromHex(9276813),secondaryButtonActive:o.C.fromHex(15132390),secondaryButtonText:o.C.fromHex(0),secondaryButtonStroke:o.C.fromHex(16777215),grid:o.C.fromHex(0),background:o.C.fromHex(16777215),alternativeBackground:o.C.fromHex(0),text:o.C.fromHex(0),alternativeText:o.C.fromHex(16777215),disabled:o.C.fromHex(11382189),positive:o.C.fromHex(5288704),negative:o.C.fromHex(11730944)});{const e=r("ColorSet");e.setAll({passOptions:{hue:.05,saturation:0,lightness:0},colors:[o.C.fromHex(6797276)],step:1,reuse:!1,startIndex:0}),e.setPrivate("currentStep",0),e.setPrivate("currentPass",0)}r("Entity").setAll({stateAnimationDuration:0,stateAnimationEasing:(0,o.o)(o.c)}),r("Component").setAll({interpolationDuration:0,interpolationEasing:(0,o.o)(o.c)}),r("Sprite").setAll({visible:!0,scale:1,opacity:1,rotation:0,position:"relative",tooltipX:o.p,tooltipY:o.p,tooltipPosition:"fixed",isMeasured:!0}),r("Sprite").states.create("default",{visible:!0,opacity:1}),r("Container").setAll({interactiveChildren:!0,setStateOnChildren:!1}),r("Graphics").setAll({strokeWidth:1}),r("Chart").setAll({width:o.a,height:o.a,interactiveChildren:!1}),r("ZoomableContainer").setAll({width:o.a,height:o.a,wheelable:!0,pinchZoom:!0,maxZoomLevel:32,minZoomLevel:1,zoomStep:2,animationEasing:(0,o.o)(o.c),animationDuration:600,maxPanOut:.4}),r("Sprite",["horizontal","center"]).setAll({centerX:o.p,x:o.p}),r("Sprite",["vertical","center"]).setAll({centerY:o.p,y:o.p}),r("Container",["horizontal","layout"]).setAll({layout:a}),r("Container",["vertical","layout"]).setAll({layout:n}),r("Pattern").setAll({repetition:"repeat",width:50,height:50,rotation:0,fillOpacity:1}),r("LinePattern").setAll({gap:6,colorOpacity:1,width:49,height:49}),r("RectanglePattern").setAll({gap:6,checkered:!1,centered:!0,maxWidth:5,maxHeight:5,width:48,height:48,strokeWidth:0}),r("CirclePattern").setAll({gap:5,checkered:!1,centered:!1,radius:3,strokeWidth:0,width:45,height:45}),r("GrainPattern").setAll({width:200,height:200,colors:[o.C.fromHex(0)],size:1,horizontalGap:0,verticalGap:0,density:1,minOpacity:0,maxOpacity:.2});{const e=r("PatternSet");e.setAll({step:1}),i(e,"color",t,"stroke")}r("LinearGradient").setAll({rotation:90}),r("Legend").setAll({fillField:"fill",strokeField:"stroke",nameField:"name",layout:o.G.new(this._root,{}),layer:30,clickTarget:"itemContainer"}),r("Container",["legend","item","itemcontainer"]).setAll({paddingLeft:5,paddingRight:5,paddingBottom:5,paddingTop:5,layout:a,setStateOnChildren:!0,interactiveChildren:!1,ariaChecked:!0,focusable:!0,ariaLabel:e.translate("Press ENTER to toggle"),role:"checkbox"});{const e=r("Rectangle",["legend","item","background"]);e.setAll({fillOpacity:0}),i(e,"fill",t,"background")}r("Container",["legend","marker"]).setAll({setStateOnChildren:!0,centerY:o.p,paddingLeft:0,paddingRight:0,paddingBottom:0,paddingTop:0,width:18,height:18}),r("RoundedRectangle",["legend","marker","rectangle"]).setAll({width:o.a,height:o.a,cornerRadiusBL:3,cornerRadiusTL:3,cornerRadiusBR:3,cornerRadiusTR:3});{const e=r("RoundedRectangle",["legend","marker","rectangle"]).states.create("disabled",{});i(e,"fill",t,"disabled"),i(e,"stroke",t,"disabled")}r("Label",["legend","label"]).setAll({centerY:o.p,marginLeft:5,paddingRight:0,paddingLeft:0,paddingTop:0,paddingBottom:0,populateText:!0}),i(r("Label",["legend","label"]).states.create("disabled",{}),"fill",t,"disabled"),r("Label",["legend","value","label"]).setAll({centerY:o.p,marginLeft:5,paddingRight:0,paddingLeft:0,paddingTop:0,paddingBottom:0,width:50,centerX:o.a,populateText:!0}),i(r("Label",["legend","value","label"]).states.create("disabled",{}),"fill",t,"disabled"),r("HeatLegend").setAll({stepCount:1}),r("RoundedRectangle",["heatlegend","marker"]).setAll({cornerRadiusTR:0,cornerRadiusBR:0,cornerRadiusTL:0,cornerRadiusBL:0}),r("RoundedRectangle",["vertical","heatlegend","marker"]).setAll({height:o.a,width:15}),r("RoundedRectangle",["horizontal","heatlegend","marker"]).setAll({width:o.a,height:15}),r("HeatLegend",["vertical"]).setAll({height:o.a}),r("HeatLegend",["horizontal"]).setAll({width:o.a}),r("Label",["heatlegend","start"]).setAll({paddingLeft:5,paddingRight:5,paddingTop:5,paddingBottom:5}),r("Label",["heatlegend","end"]).setAll({paddingLeft:5,paddingRight:5,paddingTop:5,paddingBottom:5});{const e=r("Label");e.setAll({paddingTop:8,paddingBottom:8,paddingLeft:10,paddingRight:10,fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontSize:"1em",populateText:!1}),i(e,"fill",t,"text")}r("RadialLabel").setAll({textType:"regular",centerY:o.p,centerX:o.p,inside:!1,radius:0,baseRadius:o.a,orientation:"auto",textAlign:"center"}),r("EditableLabel").setAll({editOn:"click",themeTags:["editablelabel"],multiLine:!0}),r("RoundedRectangle",["editablelabel","background"]).setAll({fillOpacity:0,fill:o.C.fromHex(0),cornerRadiusBL:3,cornerRadiusBR:3,cornerRadiusTL:3,cornerRadiusTR:3,strokeOpacity:0,stroke:o.C.fromHex(0)}),r("RoundedRectangle",["editablelabel","background"]).states.create("active",{strokeOpacity:.2}),r("RoundedRectangle").setAll({cornerRadiusTL:8,cornerRadiusBL:8,cornerRadiusTR:8,cornerRadiusBR:8}),r("PointedRectangle").setAll({pointerBaseWidth:15,pointerLength:10,cornerRadius:8}),r("Slice").setAll({shiftRadius:0,dRadius:0,dInnerRadius:0});{const e=r("Tick");e.setAll({strokeOpacity:.15,isMeasured:!1,length:4.5,position:"absolute",crisp:!0}),i(e,"stroke",t,"grid")}r("Bullet").setAll({locationX:.5,locationY:.5}),r("Tooltip").setAll({position:"absolute",getFillFromSprite:!0,getStrokeFromSprite:!1,autoTextColor:!0,paddingTop:9,paddingBottom:8,paddingLeft:10,paddingRight:10,marginBottom:5,pointerOrientation:"vertical",centerX:o.p,centerY:o.p,animationEasing:(0,o.o)(o.c),exportable:!1}),r("Polygon").setAll({animationEasing:(0,o.o)(o.c)}),r("PointedRectangle",["tooltip","background"]).setAll({strokeOpacity:.9,cornerRadius:4,pointerLength:4,pointerBaseWidth:8,fillOpacity:.9,stroke:o.C.fromHex(16777215)});{const e=r("Label",["tooltip"]);e.setAll({role:"tooltip",populateText:!0,paddingRight:0,paddingTop:0,paddingLeft:0,paddingBottom:0}),i(e,"fill",t,"alternativeText")}r("Button").setAll({paddingTop:8,paddingBottom:8,paddingLeft:10,paddingRight:10,interactive:!0,layout:a,interactiveChildren:!1,setStateOnChildren:!0,focusable:!0}),r("Button").states.create("hover",{}),r("Button").states.create("down",{stateAnimationDuration:0}),r("Button").states.create("active",{}),r("Button").states.create("disabled",{forceInactive:!0});{const e=r("RoundedRectangle",["button","background"]);i(e,"fill",t,"primaryButton"),i(e,"stroke",t,"primaryButtonStroke")}i(r("RoundedRectangle",["button","background"]).states.create("hover",{}),"fill",t,"primaryButtonHover"),i(r("RoundedRectangle",["button","background"]).states.create("down",{stateAnimationDuration:0}),"fill",t,"primaryButtonDown"),i(r("RoundedRectangle",["button","background"]).states.create("active",{}),"fill",t,"primaryButtonActive"),i(r("RoundedRectangle",["button","background"]).states.create("disabled",{}),"fill",t,"primaryButtonDisabled"),i(r("Graphics",["button","icon"]).states.create("disabled",{}),"fill",t,"primaryButtonTextDisabled"),i(r("Label",["button"]).states.create("disabled",{}),"fill",t,"primaryButtonTextDisabled");{const e=r("Graphics",["button","icon"]);e.setAll({forceInactive:!0}),i(e,"stroke",t,"primaryButtonText")}i(r("Label",["button"]),"fill",t,"primaryButtonText"),r("Button",["zoom"]).setAll({paddingTop:18,paddingBottom:18,paddingLeft:12,paddingRight:12,centerX:46,centerY:-10,y:0,x:o.a,role:"button",ariaLabel:e.translate("Zoom Out"),layer:30});{const e=r("RoundedRectangle",["background","button","zoom"]);e.setAll({cornerRadiusBL:40,cornerRadiusBR:40,cornerRadiusTL:40,cornerRadiusTR:40}),i(e,"fill",t,"primaryButton")}i(r("RoundedRectangle",["background","button","zoom"]).states.create("hover",{}),"fill",t,"primaryButtonHover"),i(r("RoundedRectangle",["background","button","zoom"]).states.create("down",{stateAnimationDuration:0}),"fill",t,"primaryButtonDown");{const e=r("Graphics",["icon","button","zoom"]);e.setAll({crisp:!0,strokeOpacity:.7,draw:e=>{e.moveTo(0,0),e.lineTo(12,0)}}),i(e,"stroke",t,"primaryButtonText")}r("Button",["resize"]).setAll({paddingTop:9,paddingBottom:9,paddingLeft:13,paddingRight:13,draggable:!0,centerX:o.p,centerY:o.p,position:"absolute",role:"slider",ariaValueMin:"0",ariaValueMax:"100",ariaLabel:e.translate("Use up and down arrows to move selection")});{const e=r("RoundedRectangle",["background","resize","button"]);e.setAll({cornerRadiusBL:40,cornerRadiusBR:40,cornerRadiusTL:40,cornerRadiusTR:40}),i(e,"fill",t,"secondaryButton"),i(e,"stroke",t,"secondaryButtonStroke")}i(r("RoundedRectangle",["background","resize","button"]).states.create("hover",{}),"fill",t,"secondaryButtonHover"),i(r("RoundedRectangle",["background","resize","button"]).states.create("down",{stateAnimationDuration:0}),"fill",t,"secondaryButtonDown");{const e=r("Graphics",["resize","button","icon"]);e.setAll({interactive:!1,crisp:!0,strokeOpacity:.5,draw:e=>{e.moveTo(0,.5),e.lineTo(0,12.5),e.moveTo(4,.5),e.lineTo(4,12.5)}}),i(e,"stroke",t,"secondaryButtonText")}r("Button",["resize","vertical"]).setAll({rotation:90,cursorOverStyle:"ns-resize"}),r("Button",["resize","horizontal"]).setAll({cursorOverStyle:"ew-resize"}),r("Button",["play"]).setAll({paddingTop:13,paddingBottom:13,paddingLeft:14,paddingRight:14,ariaLabel:e.translate("Play"),toggleKey:"active"});{const e=r("RoundedRectangle",["play","background"]);e.setAll({strokeOpacity:.5,cornerRadiusBL:100,cornerRadiusBR:100,cornerRadiusTL:100,cornerRadiusTR:100}),i(e,"fill",t,"primaryButton")}{const e=r("Graphics",["play","icon"]);e.setAll({stateAnimationDuration:0,dx:1,draw:e=>{e.moveTo(0,-5),e.lineTo(8,0),e.lineTo(0,5),e.lineTo(0,-5)}}),i(e,"fill",t,"primaryButtonText")}r("Graphics",["play","icon"]).states.create("default",{stateAnimationDuration:0}),r("Graphics",["play","icon"]).states.create("active",{stateAnimationDuration:0,draw:e=>{e.moveTo(-4,-5),e.lineTo(-1,-5),e.lineTo(-1,5),e.lineTo(-4,5),e.lineTo(-4,-5),e.moveTo(4,-5),e.lineTo(1,-5),e.lineTo(1,5),e.lineTo(4,5),e.lineTo(4,-5)}}),r("Button",["switch"]).setAll({paddingTop:4,paddingBottom:4,paddingLeft:4,paddingRight:4,ariaLabel:e.translate("Press ENTER to toggle"),toggleKey:"active",width:40,height:24,layout:null});{const e=r("RoundedRectangle",["switch","background"]);e.setAll({strokeOpacity:.5,cornerRadiusBL:100,cornerRadiusBR:100,cornerRadiusTL:100,cornerRadiusTR:100}),i(e,"fill",t,"primaryButton")}{const e=r("Circle",["switch","icon"]);e.setAll({radius:8,centerY:0,centerX:0,dx:0}),i(e,"fill",t,"primaryButtonText")}r("Graphics",["switch","icon"]).states.create("active",{dx:16}),r("Scrollbar").setAll({start:0,end:1,layer:30,animationEasing:(0,o.o)(o.c)}),r("Scrollbar",["vertical"]).setAll({marginRight:13,marginLeft:13,minWidth:12,height:o.a}),r("Scrollbar",["horizontal"]).setAll({marginTop:13,marginBottom:13,minHeight:12,width:o.a}),this.rule("Button",["scrollbar"]).setAll({exportable:!1});{const e=r("RoundedRectangle",["scrollbar","main","background"]);e.setAll({cornerRadiusTL:8,cornerRadiusBL:8,cornerRadiusTR:8,cornerRadiusBR:8,fillOpacity:.8}),i(e,"fill",t,"fill")}{const e=r("RoundedRectangle",["scrollbar","thumb"]);e.setAll({role:"slider",ariaLive:"polite",position:"absolute",draggable:!0}),i(e,"fill",t,"secondaryButton")}i(r("RoundedRectangle",["scrollbar","thumb"]).states.create("hover",{}),"fill",t,"secondaryButtonHover"),i(r("RoundedRectangle",["scrollbar","thumb"]).states.create("down",{stateAnimationDuration:0}),"fill",t,"secondaryButtonDown"),r("RoundedRectangle",["scrollbar","thumb","vertical"]).setAll({x:o.p,width:o.a,centerX:o.p,ariaLabel:e.translate("Use up and down arrows to move selection")}),r("RoundedRectangle",["scrollbar","thumb","horizontal"]).setAll({y:o.p,centerY:o.p,height:o.a,ariaLabel:e.translate("Use left and right arrows to move selection")});{const e=r("PointedRectangle",["axis","tooltip","background"]);e.setAll({cornerRadius:0}),i(e,"fill",t,"alternativeBackground")}r("Label",["axis","tooltip"]).setAll({role:void 0}),r("Label",["axis","tooltip","y"]).setAll({textAlign:"right"}),r("Label",["axis","tooltip","y","opposite"]).setAll({textAlign:"left"}),r("Label",["axis","tooltip","x"]).setAll({textAlign:"center"}),r("Tooltip",["categoryaxis"]).setAll({labelText:"{category}"}),r("Star").setAll({spikes:5,innerRadius:5,radius:10}),r("Tooltip",["stock"]).setAll({paddingTop:6,paddingBottom:5,paddingLeft:7,paddingRight:7}),r("PointedRectangle",["tooltip","stock","axis"]).setAll({pointerLength:0,pointerBaseWidth:0,cornerRadius:3}),r("Label",["tooltip","stock"]).setAll({fontSize:"0.8em"}),r("SpriteResizer").setAll({rotationStep:10,isMeasured:!1}),r("Container",["resizer","grip"]).states.create("hover",{});{const e=r("RoundedRectangle",["resizer","grip"]);e.setAll({strokeOpacity:.7,strokeWidth:1,fillOpacity:1,width:12,height:12}),i(e,"fill",t,"background"),i(e,"stroke",t,"alternativeBackground")}{const e=r("RoundedRectangle",["resizer","grip","outline"]);e.setAll({strokeOpacity:0,fillOpacity:0,width:20,height:20}),e.states.create("hover",{fillOpacity:.3}),i(e,"fill",t,"alternativeBackground")}r("RoundedRectangle",["resizer","grip","left"]).setAll({cornerRadiusBL:0,cornerRadiusBR:0,cornerRadiusTL:0,cornerRadiusTR:0}),r("RoundedRectangle",["resizer","grip","right"]).setAll({cornerRadiusBL:0,cornerRadiusBR:0,cornerRadiusTL:0,cornerRadiusTR:0});{const e=r("Rectangle",["resizer","rectangle"]);e.setAll({strokeDasharray:[2,2],strokeOpacity:.5,strokeWidth:1}),i(e,"stroke",t,"alternativeBackground")}r("Graphics",["button","plus","icon"]).setAll({x:o.p,y:o.p,draw:e=>{e.moveTo(-4,0),e.lineTo(4,0),e.moveTo(0,-4),e.lineTo(0,4)}}),r("Graphics",["button","minus","icon"]).setAll({x:o.p,y:o.p,draw:e=>{e.moveTo(-4,0),e.lineTo(4,0)}}),r("Graphics",["button","home","icon"]).setAll({x:o.p,y:o.p,svgPath:"M 8 -1 L 6 -1 L 6 7 L 2 7 L 2 1 L -2 1 L -2 7 L -6 7 L -6 -1 L -8 -1 L 0 -9 L 8 -1 Z M 8 -1"}),r("Button",["zoomtools"]).setAll({marginTop:1,marginBottom:2}),r("ZoomTools").setAll({x:o.a,centerX:o.a,y:o.a,centerY:o.a,paddingRight:10,paddingBottom:10})}}}}]);