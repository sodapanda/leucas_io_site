"use strict";(self.webpackChunkleucas_io=self.webpackChunkleucas_io||[]).push([[83],{72:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},3723:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return x},P:function(){return w},S:function(){return R},_:function(){return o},a:function(){return s},b:function(){return c},g:function(){return d},h:function(){return l}});var r=a(7294),n=(a(72),a(5697)),i=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,o,l){var c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);var d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}var u,m=["children"],p=function(e){var t=e.layout,a=e.width,n=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){var t=e.children,a=o(e,m);return r.createElement(r.Fragment,null,r.createElement(p,s({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,a=e.srcSet,n=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,d=o(e,f);return r.createElement("img",s({},d,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:l}))},v=function(e){var t=e.fallback,a=e.sources,n=void 0===a?[]:a,i=e.shouldLoad,l=void 0===i||i,c=o(e,h),d=c.sizes||(null==t?void 0:t.sizes),u=r.createElement(y,s({},c,t,{sizes:d,shouldLoad:l}));return n.length?r.createElement("picture",null,n.map((function(e){var t=e.media,a=e.srcSet,n=e.type;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:d})})),u):u};y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var b=["fallback"],w=function(e){var t=e.fallback,a=o(e,b);return t?r.createElement(v,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(u=v.propTypes)?void 0:u.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var x=function(e){return r.createElement(r.Fragment,null,r.createElement(v,s({},e)),r.createElement("noscript",null,r.createElement(v,s({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=v.propTypes;var E,C,N=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},L={image:i().object.isRequired,alt:N},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],T=new Set,z=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,d=e.backgroundColor,u=e.className,m=e.class,p=e.onStartLoad,g=e.onLoad,f=e.onError,h=o(e,k),y=i.width,v=i.height,b=i.layout,w=function(e,t,a){var r={},n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(y,v,b),x=w.style,N=w.className,L=o(w,S),z=(0,r.useRef)(),O=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);m&&(u=m);var _=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,y,v);return(0,r.useEffect)((function(){E||(E=Promise.all([a.e(774),a.e(217)]).then(a.bind(a,9217)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return C=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=z.current.querySelector("[data-gatsby-image-ssr]");return r&&l()?(r.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),r.addEventListener("load",(function e(){r.removeEventListener("load",e),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(O)):C&&T.has(O)?void 0:(E.then((function(a){var r=a.renderImageToString,n=a.swapPlaceholderImage;z.current&&(z.current.innerHTML=r(s({isLoading:!0,isLoaded:T.has(O),image:i},h)),T.has(O)||(e=requestAnimationFrame((function(){z.current&&(t=n(z.current,O,T,c,p,g,f))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){T.has(O)&&C&&(z.current.innerHTML=C(s({isLoading:T.has(O),isLoaded:T.has(O),image:i},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,r.createElement)(n,s({},L,{style:s({},x,c,{backgroundColor:d}),className:N+(u?" "+u:""),ref:z,dangerouslySetInnerHTML:{__html:_},suppressHydrationWarning:!0}))},O=(0,r.memo)((function(e){return e.image?(0,r.createElement)(z,e):null}));O.propTypes=L,O.displayName="GatsbyImage";var _,q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],I=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},A=new Set(["fixed","fullWidth","constrained"]),W={src:i().string.isRequired,alt:N,width:I,height:I,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!A.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},R=(_=O,function(e){var t=e.src,a=e.__imageData,n=e.__error,i=o(e,q);return n&&console.warn(n),a?r.createElement(_,s({image:a},i)):(console.warn("Image not loaded",t),null)});R.displayName="StaticImage",R.propTypes=W},1900:function(e,t,a){a.r(t),a.d(t,{Head:function(){return s}});var r=a(7294),n=a(3723),i=a(2503);t.default=function(){return r.createElement("main",{className:"w-screen md:max-w-md md:mx-auto"},r.createElement("div",{className:"flex flex-col  mx-auto w-full"},r.createElement("div",{className:"flex flex-row items-center bg-cyan-600"},r.createElement(i.qE,{src:"/img/fastgear.png",border:!0,borderColor:"primary",shape:"circle",size:"sm",className:"m-2"}),r.createElement("div",{className:"flex flex-col"},r.createElement("p",{className:"text-white text-lg font-bold"},"FastGear"),r.createElement("p",{className:"text-white text-xs font-light"},"The only app you need to master manual car driving"))),r.createElement("p",{className:"text-4xl font-bold text-center mt-4"},"Clutch control with",r.createElement("br",null)," confidence"),r.createElement("p",{className:"text-xs mx-4 font-light text-black"},"FastGear makes it easy for learners to shift gear smoothly and fast - and never stall again.😰➡️😋"),r.createElement("div",{className:"bg-emerald-200 m-4 rounded-l-full flex items-center"},r.createElement(i.qE,{src:"/img/happy_user.jpg",border:!0,borderColor:"primary",shape:"circle",size:"sm",className:"m-2"}),r.createElement("p",{className:"text-black text-xs font-light mx-2"},"With FastGear, it takes me only 2 days to master gear shifting and clutch control.")),r.createElement("div",{className:"mx-auto w-full aspect-video px-4"},r.createElement("iframe",{className:"w-full aspect-video",src:"https://www.youtube.com/embed/vEn3C4rsYs0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),r.createElement(i.iz,null),r.createElement(n.S,{src:"../images/control.png",alt:"good",className:"w-full",__imageData:a(9074)}),r.createElement(i.iz,null),r.createElement("p",{className:"text-lg mx-4 font-bold"},"With FastGear you get:"),r.createElement("div",{className:"text-sm mx-4 mt-2"},"🚀 Faster Gear shifts"),r.createElement("div",{className:"text-sm mx-4 mt-2"},"🛝 Drive smoothly"),r.createElement("div",{className:"text-sm mx-4 mt-2"},"🔔 Engine Stall Warning"),r.createElement("div",{className:"text-sm mx-4 mt-2"},"🛞 Visual rev-matching"),r.createElement("div",{className:"h-20 mt-2"})),r.createElement(i.zx,{href:"https://play.google.com/store/apps/details?id=link.shuidada.fastgear",responsive:!0,size:"lg",color:"success",className:"fixed bottom-0  w-full md:max-w-md md:mx-auto"},"Get Started"))};var s=function(){return r.createElement("title",null,"FastGear|The only app you need to master manual car driving")}},9074:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/4dd4eb3be2952a9f4e421be31995588c/afa5c/control.png","srcSet":"/static/4dd4eb3be2952a9f4e421be31995588c/2fe1e/control.png 480w,\\n/static/4dd4eb3be2952a9f4e421be31995588c/9bec7/control.png 960w,\\n/static/4dd4eb3be2952a9f4e421be31995588c/afa5c/control.png 1920w","sizes":"(min-width: 1920px) 1920px, 100vw"},"sources":[{"srcSet":"/static/4dd4eb3be2952a9f4e421be31995588c/3a3a2/control.webp 480w,\\n/static/4dd4eb3be2952a9f4e421be31995588c/bde8a/control.webp 960w,\\n/static/4dd4eb3be2952a9f4e421be31995588c/c512e/control.webp 1920w","type":"image/webp","sizes":"(min-width: 1920px) 1920px, 100vw"}]},"width":1920,"height":1080}')}}]);
//# sourceMappingURL=component---src-pages-fastgear-tsx-dbb98d6ae102409f8b48.js.map