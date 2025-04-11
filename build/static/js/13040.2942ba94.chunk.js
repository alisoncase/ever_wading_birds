"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[13040],{13040:(e,t,i)=>{i.r(t),i.d(t,{default:()=>h});var s=i(9950),a=i(12203),n=i(77957),r=(i(36080),i(77969)),l=i(42074),o=i(28429);const c="https://ekimvjwlyruqwmcnphoq.supabase.co",d="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVraW12andseXJ1cXdtY25waG9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1ODU1MDQsImV4cCI6MjA1ODE2MTUwNH0.Wsi8U7o2rlUxYuo6HCSFoQprkWaRuLzrH3l26hDf_js";const m=(0,i(37774).UU)(c,d);i(99016);var p=i(44414);const g=s.lazy((()=>i.e(99440).then(i.bind(i,99440))));const h=function(){const[e,t]=(0,s.useState)([]),[i,c]=(0,s.useState)({}),[d,h]=(0,s.useState)([]),[u,b]=(0,s.useState)(null),[y,f]=(0,s.useState)({species:"",lat:"",lon:"",date:(new Date).toISOString().split("T")[0],time:(new Date).toLocaleTimeString("en-US",{hour12:!1}).slice(0,5)}),[v,x]=(0,s.useState)(!1),[j,w]=(0,s.useState)(null),[_,S]=(0,s.useState)([]),[N,k]=(0,s.useState)(""),[D,I]=(0,s.useState)(!1),[F,T]=(0,s.useState)(!1),[C,E]=(0,s.useState)(!1),[L,z]=(0,s.useState)(""),[O,R]=(0,s.useState)(""),U=(0,s.useRef)(null),B=(0,s.useRef)(null);(0,s.useEffect)((()=>{console.log("Initializing WebMap and MapView...");const e=new n.default({basemap:"gray-vector"}),t=new a.default({container:U.current,map:e,center:[-80.898651,25.286615],zoom:9,ui:{components:["zoom","attribution"]},popup:{dockEnabled:!1,visible:!0}});B.current=t,e.basemap.baseLayers.forEach((e=>{e.popupEnabled=!1})),t.when((()=>{console.log("MapView successfully initialized."),t.ui.move("zoom","top-left");const e=document.createElement("arcgis-locate");e.view=t,e.scale=5e3,t.ui.add(e,"top-left");const i=document.createElement("arcgis-home");i.view=t,t.ui.add(i,"top-left"),t.on("click",(async e=>{const i=(await t.hitTest(e)).results.find((e=>{const t=e.graphic.layer;return t&&t.popupTemplate}));if(i){const s=i.graphic,a=s.attributes||{},n=s.layer.popupTemplate;t.popup.open({location:e.mapPoint,title:a.maplabel||n.title||"No Title",content:n.content||"No Content"})}else{t.popup.close();const{latitude:i,longitude:s}=e.mapPoint;f((e=>({...e,lat:i.toFixed(6),lon:s.toFixed(6)})))}}))})).catch((e=>{console.error("Error initializing MapView:",e)}));(async()=>{const t=async(e,t,i)=>{const{data:s,error:a}=await m.from(e).select("geom_geojson, maplabel");if(a)return console.error(`Error fetching ${t} data:`,a),null;const n=s.map(((e,t)=>({geometry:{type:"polyline",paths:JSON.parse(e.geom_geojson).coordinates},attributes:{objectid:t+1,maplabel:e.maplabel}})));return new r.default({source:n,fields:[{name:"objectid",alias:"ObjectID",type:"oid"},{name:"maplabel",alias:"Name",type:"string"}],objectIdField:"objectid",geometryType:"polyline",spatialReference:{wkid:4326},renderer:{type:"simple",symbol:{type:"simple-line",color:`rgba(${i}, 0.5)`,width:1}},title:t,visible:!0,popupEnabled:!0,popupTemplate:{title:"{maplabel}",content:"{maplabel}"},elevationInfo:{mode:"on-the-ground"}})},i=await t("roads","Roads","255, 255, 255"),s=await t("trails","Trails","77, 80, 75");i&&e.add(i),s&&e.add(s),i&&e.layers.reorder(i,0),s&&e.layers.reorder(s,0)})();(async()=>{const{data:i,error:s}=await m.from("pois").select("poitype, geom_geojson, maplabel");if(s)return void console.error("Error fetching POIs:",s);const a={"Boat Launch":"/ever_wading_birds/img/Boat_Launch.svg",Campground:"/ever_wading_birds/img/Campground.svg",Campsite:"/ever_wading_birds/img/Campsite.svg","Canoe / Kayak Access":"/ever_wading_birds/img/Canoe_Kayak_Access.svg","Entrance Station":"/ever_wading_birds/img/Entrance_Station.svg","Food Service":"/ever_wading_birds/img/Food_Service.svg","Parking Lot":"/ever_wading_birds/img/Parking_Lot.svg","Picnic Area":"/ever_wading_birds/img/Picnic_Area.svg","Ranger Station":"/ever_wading_birds/img/Ranger_Station.svg",Restroom:"/ever_wading_birds/img/Restroom.svg",Trailhead:"/ever_wading_birds/img/Trailhead.svg","Visitor Center":"/ever_wading_birds/img/Visitor_Center.svg"},n={},l=[];i.forEach((t=>{if(!n[t.poitype]){const i=new r.default({source:[],fields:[{name:"objectid",alias:"ObjectID",type:"oid"},{name:"poitype",alias:"POI Type",type:"string"},{name:"maplabel",alias:"Name",type:"string"}],objectIdField:"objectid",geometryType:"point",spatialReference:{wkid:4326},renderer:{type:"simple",symbol:{type:"picture-marker",url:a[t.poitype],width:"24px",height:"24px"}},title:t.poitype,visible:!1,popupEnabled:!0,popupTemplate:{title:"{maplabel}",content:"\n                <b>Type:</b> {poitype}<br>\n                <b>Name:</b> {maplabel}\n              "}});n[t.poitype]=i,l.push(i),e.add(i)}const i=JSON.parse(t.geom_geojson);n[t.poitype].source.push({geometry:{type:"point",longitude:i.coordinates[0],latitude:i.coordinates[1]},attributes:{objectid:n[t.poitype].source.length+1,poitype:t.poitype,maplabel:t.maplabel}})})),t.when((()=>{const e=t.map.layers;l.forEach((t=>{e.remove(t),e.add(t)}))})),c(n)})();(async()=>{const{data:e,error:t}=await m.from("birds").select("*");t?console.error("Error fetching birds:",t):h(e)})();return(async()=>{const{data:t,error:i}=await m.from("sightings").select("*");if(i)return console.error("Error fetching sightings:",i),null;const s=t.map(((e,t)=>({geometry:{type:"point",longitude:e.lon,latitude:e.lat},attributes:{sighting_id:e.sighting_id,species:e.species,formatted_date:new Date(e.date).toLocaleDateString("en-US"),time:e.time}})));S(s);const a=new r.default({source:s,fields:[{name:"sighting_id",alias:"Sighting ID",type:"oid"},{name:"species",alias:"Species",type:"string"},{name:"formatted_date",alias:"Date",type:"string"},{name:"time",alias:"Time",type:"string"}],objectIdField:"sighting_id",geometryType:"point",spatialReference:{wkid:4326},renderer:{type:"simple",symbol:{type:"picture-marker",url:"/ever_wading_birds/img/Bird.svg",width:"24px",height:"24px"}},title:"Sightings",visible:!1,popupTemplate:{title:"Sighting Details",content:"\n            <b>Species:</b> {species}<br>\n            <b>Date:</b> {formatted_date}<br> \x3c!-- Use the renamed field --\x3e\n            <b>Time:</b> {time}\n          "}});e.add(a),w(a)})(),()=>{console.log("Destroying MapView..."),t&&t.destroy()}}),[]);const M=e=>{const t=B.current;if("sightings"===e){if(j){const e=!D;if(j.visible=e,t){const i=t.map.findLayerById(j.id);i&&(i.visible=e)}I(e)}}else{const s=i[e];if(s){if(s.visible=!s.visible,t){const e=t.map.findLayerById(s.id);e&&(e.visible=s.visible)}c({...i,[e]:s})}}},P=e=>{const{name:t,value:i}=e.target;f({...y,[t]:i})};return(0,p.jsxs)(l.Kd,{basename:"/ever_wading_birds",children:[" ",(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)("div",{children:"Loading..."}),children:(0,p.jsxs)(o.BV,{children:[(0,p.jsx)(o.qh,{path:"/",element:(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{id:"mapViewDiv",ref:U,style:{height:"100vh",width:"100%"}}),(0,p.jsxs)("div",{className:"form-panel",children:[(0,p.jsx)("h3",{className:"text-center",children:"Submit a Bird Sighting"}),v?(0,p.jsxs)("div",{className:"thank-you-message text-center",children:[(0,p.jsx)("h4",{children:"Thank you for your submission!"}),(0,p.jsx)("button",{className:"btn btn-primary mt-3",onClick:()=>{f({species:"",lat:"",lon:"",date:"",time:""}),b(null),x(!1)},children:"Submit Another Sighting"})]}):(0,p.jsxs)("form",{onSubmit:async e=>{e.preventDefault();const{species:t,lat:i,lon:s,date:a,time:n}=y,l={species:t,lat:parseFloat(i),lon:parseFloat(s),date:a,time:n},{error:o}=await m.from("sightings").insert([l]);if(o)console.error("Error submitting sighting:",o);else{console.log("Sighting submitted successfully:",l),x(!0);const{data:e,error:t}=await m.from("sightings").select("*");if(t)console.error("Error fetching updated sightings:",t);else{console.log("Updated sightings data:",e),console.log("Sightings data:",e.map((e=>e.date)));const t=e.map(((e,t)=>({geometry:{type:"point",longitude:e.lon,latitude:e.lat},attributes:{sighting_id:e.sighting_id,species:e.species,formatted_date:new Date(e.date).toLocaleDateString("en-US"),time:e.time}})));S(t),console.log("Updated Features:",t);const i=B.current;if(i&&j){const e=i.map.findLayerById(j.id);e&&i.map.remove(e)}const s=new r.default({source:t,fields:[{name:"sighting_id",alias:"Sighting ID",type:"oid"},{name:"species",alias:"Species",type:"string"},{name:"formatted_date",alias:"Date",type:"string"},{name:"time",alias:"Time",type:"string"}],objectIdField:"sighting_id",geometryType:"point",spatialReference:{wkid:4326},renderer:{type:"simple",symbol:{type:"picture-marker",url:"/ever_wading_birds/img/Bird.svg",width:"24px",height:"24px"}},title:"Sightings",visible:D,popupTemplate:{title:"Sighting Details",content:e=>{const t=e.graphic.attributes;return console.log("Popup Attributes:",t),`\n                <b>Species:</b> ${t.species}<br>\n                <b>Date:</b> ${t.formatted_date}<br>\n                <b>Time:</b> ${t.time}\n              `}}});i&&i.map.add(s),w(s)}}},children:[(0,p.jsxs)("div",{className:"mb-3",children:[(0,p.jsx)("label",{htmlFor:"species",className:"form-label",children:"Select Bird Species:"}),(0,p.jsxs)("select",{id:"species",name:"species",className:"form-select",value:y.species,onChange:e=>{const t=d.find((t=>t.species===e.target.value));b(t),f({...y,species:e.target.value})},required:!0,children:[(0,p.jsx)("option",{value:"",children:"-- Select a Species --"}),d.map((e=>(0,p.jsx)("option",{value:e.species,children:e.species},e.species)))]})]}),u&&(0,p.jsxs)("div",{className:"bird-details mb-3",children:[(0,p.jsx)("h4",{children:u.species}),(0,p.jsx)("img",{src:u.photo,alt:u.species,className:"img-fluid bird-image mb-2"}),(0,p.jsxs)("p",{children:[(0,p.jsx)("strong",{children:"Photo Attribution:"})," ",(0,p.jsx)("span",{dangerouslySetInnerHTML:{__html:u.photo_attr}})]}),(0,p.jsx)("p",{children:u.info}),(0,p.jsx)("a",{href:u.info_link,target:"_blank",rel:"noopener noreferrer",children:"Learn More"})]}),(0,p.jsx)("p",{className:"text-muted mb-3",children:"Click anywhere on the map to populate the latitude and longitude fields."}),(0,p.jsxs)("div",{className:"mb-3",children:[(0,p.jsx)("label",{htmlFor:"lat",className:"form-label",children:"Latitude:"}),(0,p.jsx)("input",{type:"number",id:"lat",name:"lat",className:"form-control",value:y.lat,onChange:P,required:!0})]}),(0,p.jsxs)("div",{className:"mb-3",children:[(0,p.jsx)("label",{htmlFor:"lon",className:"form-label",children:"Longitude:"}),(0,p.jsx)("input",{type:"number",id:"lon",name:"lon",className:"form-control",value:y.lon,onChange:P,required:!0})]}),(0,p.jsxs)("div",{className:"mb-3",children:[(0,p.jsx)("label",{htmlFor:"date",className:"form-label",children:"Date:"}),(0,p.jsx)("input",{type:"date",id:"date",name:"date",className:"form-control",value:y.date,onChange:P,required:!0})]}),(0,p.jsxs)("div",{className:"mb-3",children:[(0,p.jsx)("label",{htmlFor:"time",className:"form-label",children:"Time:"}),(0,p.jsx)("input",{type:"time",id:"time",name:"time",className:"form-control",value:y.time,onChange:P,required:!0})]}),(0,p.jsx)("button",{type:"submit",className:"btn btn-primary w-100",children:"Submit Sighting"})]})]}),(0,p.jsx)("div",{className:"layer-toggles-wrapper "+(F?"minimized":""),style:{position:"absolute",bottom:"10px",left:"10px",zIndex:1e3},children:(0,p.jsxs)("div",{className:"layer-toggles",children:[(0,p.jsxs)("div",{className:"layer-header",children:[(0,p.jsx)("h5",{children:"Points of Interest"}),(0,p.jsx)("button",{className:"btn btn-sm btn-outline-secondary minimize-button",onClick:()=>{T(!F),console.log("isPOILayersMinimized:",!F)},children:F?"+":"-"})]}),!F&&(0,p.jsx)(p.Fragment,{children:Object.keys(i).sort(((e,t)=>e.localeCompare(t))).map((e=>(0,p.jsxs)("div",{className:"form-check",children:[(0,p.jsx)("input",{type:"checkbox",id:e,className:"form-check-input",checked:i[e].visible,onChange:()=>M(e)}),(0,p.jsx)("label",{htmlFor:e,className:"form-check-label",children:e})]},e)))})]})}),(0,p.jsx)("div",{className:"layer-toggles-wrapper "+(C?"minimized":""),style:{position:"absolute",bottom:"10px",left:"50%",transform:"translateX(-50%)",zIndex:1e3},children:(0,p.jsxs)("div",{className:"layer-toggles",children:[(0,p.jsxs)("div",{className:"layer-header",children:[(0,p.jsx)("h5",{children:"Sightings"}),(0,p.jsx)("button",{className:"btn btn-sm btn-outline-secondary minimize-button",onClick:()=>{E(!C),console.log("isSightingsLayersMinimized:",!C)},children:C?"+":"-"})]}),!C&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"form-check",children:[(0,p.jsx)("input",{type:"checkbox",id:"sightingsLayerToggle",className:"form-check-input",checked:D,onChange:()=>M("sightings")}),(0,p.jsx)("label",{htmlFor:"sightingsLayerToggle",className:"form-check-label",children:"View Sightings"})]}),(0,p.jsxs)("div",{className:"mb-3",children:[(0,p.jsx)("label",{htmlFor:"speciesFilter",className:"form-label",children:"Filter by Species:"}),(0,p.jsxs)("select",{id:"speciesFilter",className:"form-select",value:N,onChange:e=>k(e.target.value),children:[(0,p.jsx)("option",{value:"",children:"-- All Species --"}),d.map((e=>(0,p.jsx)("option",{value:e.species,children:e.species},e.species)))]})]}),(0,p.jsxs)("div",{className:"mb-3",children:[(0,p.jsx)("label",{htmlFor:"startDate",className:"form-label",children:"Start Date:"}),(0,p.jsx)("input",{type:"date",id:"startDate",className:"form-control",value:L,onChange:e=>z(e.target.value)})]}),(0,p.jsxs)("div",{className:"mb-3",children:[(0,p.jsx)("label",{htmlFor:"endDate",className:"form-label",children:"End Date:"}),(0,p.jsx)("input",{type:"date",id:"endDate",className:"form-control",value:O,onChange:e=>R(e.target.value)})]}),(0,p.jsx)("button",{className:"btn btn-primary w-100",onClick:()=>{if(!j||0===_.length)return void console.error("Sightings layer or its features are not initialized.");const e=_.filter((e=>{const{species:t,date:i}=e.attributes;return(!N||t===N)&&(!(L&&new Date(i)<new Date(L))&&!(O&&new Date(i)>new Date(O)))})),t=B.current;if(t&&j){const e=t.map.findLayerById(j.id);e&&t.map.remove(e)}const i=new r.default({source:e,fields:[{name:"sighting_id",alias:"Sighting ID",type:"oid"},{name:"species",alias:"Species",type:"string"},{name:"formatted_date",alias:"Date",type:"string"},{name:"time",alias:"Time",type:"string"}],objectIdField:"sighting_id",geometryType:"point",spatialReference:{wkid:4326},renderer:{type:"simple",symbol:{type:"picture-marker",url:"/ever_wading_birds/img/Bird.svg",width:"24px",height:"24px"}},title:"Sightings",visible:D,popupTemplate:{title:"Sighting Details",content:"\n          <b>Species:</b> {species}<br>\n          <b>Date:</b> {expression/formatDate}<br>\n          <b>Time:</b> {time}\n        ",expressionInfos:[{name:"formatDate",title:"Formatted Date",expression:'\n              var dateField = $feature.formatted_date;\n              if (IsEmpty(dateField)) {\n                return "No Date";\n              }\n              return dateField; // Use the preformatted string\n            '}]}});t&&t.map.add(i),w(i)},children:"Apply Filters"})]})]})})]})}),(0,p.jsx)(o.qh,{path:"/about",element:(0,p.jsx)(g,{})})]})})]})}}}]);