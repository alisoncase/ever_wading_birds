"use strict";(self.webpackChunkever_wading_birds=self.webpackChunkever_wading_birds||[]).push([[15059],{15059:(e,t,n)=>{n.r(t),n.d(t,{TextureCompressionWorkerOutput:()=>u,compress:()=>R,compressRGBADataToKTX2:()=>d,createTextureDataKTX2:()=>A,initializeBasisEncoder:()=>B,initializeDXTEncoder:()=>T});var r=n(21772);let a;var s=n(59246);let i;var l=n(92156);let c,_,o=null,C=null;class u{constructor(e,t){this.internalFormat=e,this.compressedTexture=t}}async function R(e){const t=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=new OffscreenCanvas(e.width,e.height),r=n.getContext("2d");return t&&r.scale(1,-1),r.drawImage(e,0,t?-e.height:0),r.getImageData(0,0,n.width,n.height).data}(e.data,e.flipped);if(e.hasS3TC){C||await T();const n=new Uint8Array(t.length);C?.encode(new Uint8Array(t),e.width,e.height,n);const r=function(e,t){const n=new Int32Array(e.buffer,e.byteOffset,G);let r,a;switch(n[g]){case S:r=8,a=l.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case b:r=16,a=l.CQ.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case v:r=16,a=l.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return null}let s=1,i=n[E],c=n[w];(3&i||3&c)&&(i=i+3&-4,c=c+3&-4);const _=i,o=c;let C,u;n[f]&m&&!1!==t&&(s=Math.max(1,n[p]));let R=e.byteOffset+n[h]+4;const B=[];for(let l=0;l<s;++l)u=(i+3>>2)*(c+3>>2)*r,C=new Uint8Array(e.buffer,R,u),B.push(C),R+=u,i=Math.max(1,i>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:B},internalFormat:a,width:_,height:o}}(n,!0),a=[n.buffer];return{result:new u(r?.internalFormat??null,r?.textureData??null),transferList:a}}if(e.hasETC){o||await B();const n=await d(t,e.width,e.height,e.hasMipmap),r=n?await A(n):null,a=r?.compressedTexture?.levels.map((e=>e.buffer))||[];return{result:new u(r?.internalFormat??null,r?.compressedTexture??null),transferList:a}}return{result:new u(null,null)}}async function B(){o||(o=await(c??=(a??=(async()=>{const e=await n.e(68385).then(n.bind(n,68385)),t=await e.default({locateFile:e=>(0,r.s)(`esri/libs/basisu/${e}`)});return t.initializeBasis(),t})(),a)))}async function T(){C||(C=await(_??=(i??=(async()=>{const e=await n.e(52595).then(n.bind(n,52595));return await e.default({locateFile:e=>(0,r.s)(`esri/libs/dxtEncoder/${e}`)})})(),i)))}async function d(e,t,n,r){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:255,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,i=arguments.length>6&&void 0!==arguments[6]&&arguments[6],l=arguments.length>7&&void 0!==arguments[7]&&arguments[7];if(!o)return null;const c=new o.BasisEncoder;c.setPerceptual(!l),c.setCheckForAlpha(!0),c.setForceAlpha(!1),c.setRenormalize(l),c.setMipGen(r),c.setMipSRGB(!l),c.setCreateKTX2File(!0),c.setKTX2SRGBTransferFunc(!l),c.setQualityLevel(a),c.setCompressionLevel(s);const _=new Uint8Array(e.byteLength);c.setSliceSourceImage(0,new Uint8Array(e),t,n,i);const C=c.encode(_),u=new Uint8Array(_.buffer,0,C),R=new o.KTX2File(new Uint8Array(u));return R.isValid()?(c.delete(),u):(R.close(),R.delete(),c.delete(),null)}async function A(e){if(!o)return new u(null,null);const t=new o.KTX2File(new Uint8Array(e));t.startTranscoding();const[n,r]=t.getHasAlpha()?[s.n.ETC2_RGBA,l.CQ.COMPRESSED_RGBA8_ETC2_EAC]:[s.n.ETC1_RGB,l.CQ.COMPRESSED_RGB8_ETC2],a=t.getLevels(),i=[];for(let s=0;s<a;s++)i.push(new Uint8Array(t.getImageTranscodedSizeInBytes(s,0,0,n))),t.transcodeImage(i[s],s,0,0,n,0,-1,-1);return t.close(),t.delete(),{internalFormat:r,compressedTexture:{type:"compressed",levels:i}}}const G=31,h=1,f=2,w=3,E=4,p=7,g=21,m=131072;function y(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const S=y("DXT1"),b=y("DXT3"),v=y("DXT5")},59246:(e,t,n)=>{var r;n.d(t,{n:()=>r}),function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"}(r||(r={}))}}]);