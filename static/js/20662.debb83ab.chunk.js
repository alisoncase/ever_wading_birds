"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[20662],{20662:(t,e,n)=>{n.r(e),n.d(e,{execute:()=>o,isAsync:()=>r});var i=n(64030),s=n(29124),a=n(72512),h=n(60757);function o(t){let{templatePart:e,shape:n,edits:o,relationships:r,mode:l}=t;if(!(0,h.AO)(n))return;const{builderConfig:g}=e,p=(0,i.V2)(g),f=(0,i.YI)(g),c=(0,i.RT)(g),d=(0,i.Gr)(g,f),u=(0,i.kS)(g);for(const i of(0,a.Dk)(n))if((0,s.LT)({templatePart:e,edits:o,relationships:r,shape:i,distance:d,isProportional:f,offsetDistance:p,vertexBeforeOffset:c,vertexPlacement:s.nI.AtBeginning,mode:l}),u)break}const r=!1},29124:(t,e,n)=>{n.d(e,{Ii:()=>i,LT:()=>d,cY:()=>f,nI:()=>s,tr:()=>p});var i,s,a,h=n(64030),o=n(72512),r=n(60757),l=n(93449),g=n(78629);function p(t){let{templatePart:e,edits:n,relationships:s,shape:a,distance:l,isProportional:p,offsetDistance:c,vertexBeforeOffset:d,vertexPlacement:u,mode:m}=t;const B=d||0===c?a:f(a,c);if(null===B||!(0,g.isPolyline)(B))return;const A=(0,h.TR)(B);c=d?c:0;let P=0,v=null,S=0;for(let g=0;g<B.paths.length;g++){if(n.length>r.Cg&&"digitizing"===m)return;const t=B.paths[g].length,a=g===B.paths.length-1;for(let f=0;f<t;f++){if(n.length>r.Cg&&"digitizing"===m)return;if(f>0&&0!==l&&(P+=B.hasZ?(0,o.Py)(B.paths[g][f-1],B.paths[g][f],A):(0,o.eS)(B.paths[g][f-1],B.paths[g][f])),(0!==f||u!==i.NotBeginning)&&!(f===t-1&&u===i.NotEnd&&a||(0===f||f===t-1&&a)&&u===i.Interior||0===f&&l<0&&p||f===t-1&&l>0&&p)){if(0!==l){let e=1;if(p){const n=l<0?f-1:f+1;if(n>=t||n<0)continue;e=B.hasZ?(0,o.Py)(B.paths[g][f],B.paths[g][n],A):(0,o.eS)(B.paths[g][f],B.paths[g][n])}const n=P+e*l;v=B.hasZ?(0,o.mw)(B,n,c,A):(0,o.a1)(B,n,0)}else v=(0,o.RT)(B,g,f),0!==c&&(v=(0,o.LB)(v,f===t-1?[B.paths[g][f-1],B.paths[g][f]]:[B.paths[g][f],B.paths[g][f+1]],c));v&&(0,h.fS)({templatePart:e,shape:v,edits:n,relationships:s,mode:m},`V${(S+f).toString()}`)}}S+=t}}function f(t,e){return(0,l.e)(t,e,{unit:"meters",joins:"miter",miterLimit:2})}function c(t){let e=0;for(const n of t.paths)e+=n.length;return e}function d(t){let{templatePart:e,edits:n,relationships:i,shape:a,distance:r,isProportional:l,offsetDistance:p,vertexBeforeOffset:d,vertexPlacement:u,mode:m}=t;const B=d||0===p?a:f(a,p);if(null===B||!(0,g.isPolyline)(B))return;const A=(0,h.TR)(B);p=d?p:0;let P=null,v="";if(0!==r){const t=u===s.AtBeginning?0:B.paths.length-1,e=u===s.AtBeginning?0:B.paths[B.paths.length-1].length-1,n=u===s.AtBeginning?0:(0,o.Ex)(B),i=u===s.AtBeginning?B.paths[0].length:B.paths[B.paths.length-1].length;let a=1;if(l){const n=r<0?e-1:e+1;if(n>=i||n<0)return;a=B.hasZ?(0,o.Py)(B.paths[t][e],B.paths[t][n],A):(0,o.eS)(B.paths[t][e],B.paths[t][n])}const h=n+a*r;P=B.hasZ?(0,o.mw)(B,h,p,A):(0,o.a1)(B,h,p),v=u===s.AtBeginning?"V0":`V${(c(B)-1).toString()}`}else{if(P=u===s.AtBeginning?(0,o.RT)(B,0,0):(0,o.RT)(B,B.paths.length-1,B.paths[B.paths.length-1].length-1),0!==p)if(u===s.AtBeginning)P=(0,o.LB)(P,[B.paths[0][0],B.paths[0][1]],p);else{const t=B.paths[B.paths.length-1];P=(0,o.LB)(P,[t[t.length-2],t[t.length-1]],p)}v=u===s.AtBeginning?"V0":`V${(c(B)-1).toString()}`}P&&(0,h.fS)({templatePart:e,shape:P,edits:n,relationships:i,mode:m},v)}(a=i||(i={}))[a.All=0]="All",a[a.NotBeginning=1]="NotBeginning",a[a.NotEnd=2]="NotEnd",a[a.Interior=3]="Interior",function(t){t[t.AtBeginning=4]="AtBeginning",t[t.AtEnd=5]="AtEnd"}(s||(s={}))}}]);