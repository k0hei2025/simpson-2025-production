(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{148:e=>{e.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_47779d",variable:"__variable_47779d"}},1026:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return n}});let i=r(4232);function n(e,t){let r=(0,i.useRef)(null),n=(0,i.useRef)(null);return(0,i.useCallback)(i=>{if(null===i){let e=r.current;e&&(r.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(r.current=s(e,i)),t&&(n.current=s(t,i))},[e,t])}function s(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1188:e=>{e.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_59774e",variable:"__variable_59774e"}},2439:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return _}});let i=r(4252),n=r(8365),s=r(7876),a=n._(r(4232)),l=i._(r(8477)),o=i._(r(9836)),u=r(4915),d=r(6904),c=r(72);r(546);let f=r(8265),m=i._(r(3829)),p=r(1026),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/simpson-2025-production/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,r,i,n,s,a){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function b(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}let v=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:n,height:l,width:o,decoding:u,className:d,style:c,fetchPriority:f,placeholder:m,loading:g,unoptimized:v,fill:x,onLoadRef:_,onLoadingCompleteRef:w,setBlurComplete:y,setShowAltText:j,sizesInput:E,onLoad:S,onError:O,...N}=e,C=(0,a.useCallback)(e=>{e&&(O&&(e.src=e.src),e.complete&&h(e,m,_,w,y,v,E))},[r,m,_,w,y,O,v,E]),P=(0,p.useMergedRef)(t,C);return(0,s.jsx)("img",{...N,...b(f),loading:g,width:o,height:l,decoding:u,"data-nimg":x?"fill":"1",className:d,style:c,sizes:n,srcSet:i,src:r,ref:P,onLoad:e=>{h(e.currentTarget,m,_,w,y,v,E)},onError:e=>{j(!0),"empty"!==m&&y(!0),O&&O(e)}})});function x(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...b(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,i),null):(0,s.jsx)(o.default,{children:(0,s.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let _=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(f.RouterContext),i=(0,a.useContext)(c.ImageConfigContext),n=(0,a.useMemo)(()=>{var e;let t=g||i||d.imageConfigDefault,r=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),n=t.deviceSizes.sort((e,t)=>e-t),s=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:r,deviceSizes:n,qualities:s}},[i]),{onLoad:l,onLoadingComplete:o}=e,p=(0,a.useRef)(l);(0,a.useEffect)(()=>{p.current=l},[l]);let h=(0,a.useRef)(o);(0,a.useEffect)(()=>{h.current=o},[o]);let[b,_]=(0,a.useState)(!1),[w,y]=(0,a.useState)(!1),{props:j,meta:E}=(0,u.getImgProps)(e,{defaultLoader:m.default,imgConf:n,blurComplete:b,showAltText:w});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v,{...j,unoptimized:E.unoptimized,placeholder:E.placeholder,fill:E.fill,onLoadRef:p,onLoadingCompleteRef:h,setBlurComplete:_,setShowAltText:y,sizesInput:e.sizes,ref:t}),E.priority?(0,s.jsx)(x,{isAppRouter:!r,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3657:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return o},getImageProps:function(){return l}});let i=r(4252),n=r(4915),s=r(2439),a=i._(r(3829));function l(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/simpson-2025-production/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let o=s.Image},3829:(e,t)=>{"use strict";function r(e){var t;let{config:r,src:i,width:n,quality:s}=e,a=s||(null==(t=r.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.path+"?url="+encodeURIComponent(i)+"&w="+n+"&q="+a+(i.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},4587:(e,t,r)=>{e.exports=r(3657)},4915:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(546);let i=r(5284),n=r(6904);function s(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r,l;let o,u,d,{src:c,sizes:f,unoptimized:m=!1,priority:p=!1,loading:g,className:h,quality:b,width:v,height:x,fill:_=!1,style:w,overrideSrc:y,onLoad:j,onLoadingComplete:E,placeholder:S="empty",blurDataURL:O,fetchPriority:N,decoding:C="async",layout:P,objectFit:R,objectPosition:k,lazyBoundary:z,lazyRoot:M,...I}=e,{imgConf:D,showAltText:G,blurComplete:F,defaultLoader:A}=t,T=D||n.imageConfigDefault;if("allSizes"in T)o=T;else{let e=[...T.deviceSizes,...T.imageSizes].sort((e,t)=>e-t),t=T.deviceSizes.sort((e,t)=>e-t),i=null==(r=T.qualities)?void 0:r.sort((e,t)=>e-t);o={...T,allSizes:e,deviceSizes:t,qualities:i}}if(void 0===A)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let L=I.loader||A;delete I.loader,delete I.srcSet;let B="__next_img_default"in L;if(B){if("custom"===o.loader)throw Object.defineProperty(Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=L;L=t=>{let{config:r,...i}=t;return e(i)}}if(P){"fill"===P&&(_=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!f&&(f=t)}let W="",X=a(v),q=a(x);if((l=c)&&"object"==typeof l&&(s(l)||void 0!==l.src)){let e=s(c)?c.default:c;if(!e.src)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!e.height||!e.width)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(u=e.blurWidth,d=e.blurHeight,O=O||e.blurDataURL,W=e.src,!_){if(X||q){if(X&&!q){let t=X/e.width;q=Math.round(e.height*t)}else if(!X&&q){let t=q/e.height;X=Math.round(e.width*t)}}else X=e.width,q=e.height}}let V=!p&&("lazy"===g||void 0===g);(!(c="string"==typeof c?c:W)||c.startsWith("data:")||c.startsWith("blob:"))&&(m=!0,V=!1),o.unoptimized&&(m=!0),B&&!o.dangerouslyAllowSVG&&c.split("?",1)[0].endsWith(".svg")&&(m=!0);let U=a(b),J=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:k}:{},G?{}:{color:"transparent"},w),Y=F||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:X,heightInt:q,blurWidth:u,blurHeight:d,blurDataURL:O||"",objectFit:J.objectFit})+'")':'url("'+S+'")',H=Y?{backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},$=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:s,sizes:a,loader:l}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:o,kind:u}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,a),d=o.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:o.map((e,i)=>l({config:t,src:r,quality:s,width:e})+" "+("w"===u?e:i+1)+u).join(", "),src:l({config:t,src:r,quality:s,width:o[d]})}}({config:o,src:c,unoptimized:m,width:X,quality:U,sizes:f,loader:L});return{props:{...I,loading:V?"lazy":g,fetchPriority:N,width:X,height:q,decoding:C,className:h,style:{...J,...H},sizes:$.sizes,srcSet:$.srcSet,src:y||$.src},meta:{unoptimized:m,priority:p,placeholder:S,fill:_}}}},5284:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:s,objectFit:a}=e,l=i?40*i:t,o=n?40*n:r,u=l&&o?"viewBox='0 0 "+l+" "+o+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},6760:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(9306)}])},9306:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var i=r(7876),n=r(4587),s=r.n(n),a=r(148),l=r.n(a),o=r(1188),u=r.n(o);function d(){return(0,i.jsxs)("div",{className:"".concat(l().variable," ").concat(u().variable," grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"),children:[(0,i.jsxs)("main",{className:"flex flex-col gap-8 row-start-2 items-center sm:items-start",children:[(0,i.jsx)(s(),{className:"dark:invert",src:"/next.svg",alt:"Next.js logo",width:180,height:38,priority:!0}),(0,i.jsxs)("ol",{className:"list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]",children:[(0,i.jsxs)("li",{className:"mb-2",children:["Get started by editing"," ",(0,i.jsx)("code",{className:"bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold",children:"src/pages/index.tsx"}),"."]}),(0,i.jsx)("li",{children:"Save and see your changes instantly."})]}),(0,i.jsxs)("div",{className:"flex gap-4 items-center flex-col sm:flex-row",children:[(0,i.jsxs)("a",{className:"rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5",href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(s(),{className:"dark:invert",src:"/vercel.svg",alt:"Vercel logomark",width:20,height:20}),"Deploy now"]}),(0,i.jsx)("a",{className:"rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44",href:"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:"Read our docs"})]})]}),(0,i.jsxs)("footer",{className:"row-start-3 flex gap-6 flex-wrap items-center justify-center",children:[(0,i.jsxs)("a",{className:"flex items-center gap-2 hover:underline hover:underline-offset-4",href:"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(s(),{"aria-hidden":!0,src:"/file.svg",alt:"File icon",width:16,height:16}),"Learn"]}),(0,i.jsxs)("a",{className:"flex items-center gap-2 hover:underline hover:underline-offset-4",href:"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(s(),{"aria-hidden":!0,src:"/window.svg",alt:"Window icon",width:16,height:16}),"Examples"]}),(0,i.jsxs)("a",{className:"flex items-center gap-2 hover:underline hover:underline-offset-4",href:"https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(s(),{"aria-hidden":!0,src:"/globe.svg",alt:"Globe icon",width:16,height:16}),"Go to nextjs.org →"]})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(6760)),_N_E=e.O()}]);