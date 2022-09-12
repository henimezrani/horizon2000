"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{72:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,n=!1,r=0;r<e.length;r++){var i=e[r];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,r)+"-"+e.slice(r),t=!1,n=a,a=!0,r++):a&&n&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,r-1)+"-"+e.slice(r-1),n=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,n=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},3723:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return E},P:function(){return w},S:function(){return A},_:function(){return o},a:function(){return s},b:function(){return c},g:function(){return u},h:function(){return l}});var n=a(7294),r=(a(72),a(5697)),i=a.n(r);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(a=i[n])>=0||(r[a]=e[a]);return r}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,a,n,r){return void 0===r&&(r={}),s({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:s({},r,{opacity:t?1:0})})}function u(e,t,a,n,r,i,o,l){var c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);var u=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var d,m=["children"],p=function(e){var t=e.layout,a=e.width,r=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){var t=e.children,a=o(e,m);return n.createElement(n.Fragment,null,n.createElement(p,s({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,a=e.srcSet,r=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,u=o(e,f);return n.createElement("img",s({},u,{decoding:"async",loading:r,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:l}))},y=function(e){var t=e.fallback,a=e.sources,r=void 0===a?[]:a,i=e.shouldLoad,l=void 0===i||i,c=o(e,h),u=c.sizes||(null==t?void 0:t.sizes),d=n.createElement(v,s({},c,t,{sizes:u,shouldLoad:l}));return r.length?n.createElement("picture",null,r.map((function(e){var t=e.media,a=e.srcSet,r=e.type;return n.createElement("source",{key:t+"-"+r+"-"+a,type:r,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:u})})),d):d};v.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},y.displayName="Picture",y.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};var b=["fallback"],w=function(e){var t=e.fallback,a=o(e,b);return t?n.createElement(y,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",s({},a))};w.displayName="Placeholder",w.propTypes={fallback:r.string,sources:null==(d=y.propTypes)?void 0:d.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var E=function(e){return n.createElement(n.Fragment,null,n.createElement(y,s({},e)),n.createElement("noscript",null,n.createElement(y,s({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;var x,N,k=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),s=3;s<n;s++)r[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:i().object.isRequired,alt:k},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],z=new Set,T=function(e){var t=e.as,r=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,d=e.className,m=e.class,p=e.onStartLoad,g=e.onLoad,f=e.onError,h=o(e,L),v=i.width,y=i.height,b=i.layout,w=function(e,t,a){var n={},r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}(v,y,b),E=w.style,k=w.className,C=o(w,S),T=(0,n.useRef)(),j=(0,n.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);m&&(d=m);var q=function(e,t,a){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(b,v,y);return(0,n.useEffect)((function(){x||(x=Promise.all([a.e(774),a.e(217)]).then(a.bind(a,9217)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return N=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,n=T.current.querySelector("[data-gatsby-image-ssr]");return n&&l()?(n.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),n.addEventListener("load",(function e(){n.removeEventListener("load",e),null==g||g({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)}))),void z.add(j)):N&&z.has(j)?void 0:(x.then((function(a){var n=a.renderImageToString,r=a.swapPlaceholderImage;T.current&&(T.current.innerHTML=n(s({isLoading:!0,isLoaded:z.has(j),image:i},h)),z.has(j)||(e=requestAnimationFrame((function(){T.current&&(t=r(T.current,j,z,c,p,g,f))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,n.useLayoutEffect)((function(){z.has(j)&&N&&(T.current.innerHTML=N(s({isLoading:z.has(j),isLoaded:z.has(j),image:i},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,n.createElement)(r,s({},C,{style:s({},E,c,{backgroundColor:u}),className:k+(d?" "+d:""),ref:T,dangerouslySetInnerHTML:{__html:q},suppressHydrationWarning:!0}))},j=(0,n.memo)((function(e){return e.image?(0,n.createElement)(T,e):null}));j.propTypes=C,j.displayName="GatsbyImage";var q,_=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],O=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},I=new Set(["fixed","fullWidth","constrained"]),M={src:i().string.isRequired,alt:k,width:O,height:O,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!I.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},A=(q=j,function(e){var t=e.src,a=e.__imageData,r=e.__error,i=o(e,_);return r&&console.warn(r),a?n.createElement(q,s({image:a},i)):(console.warn("Image not loaded",t),null)});A.displayName="StaticImage",A.propTypes=M},2618:function(e,t){t.Z=void 0;var a=function(e,t){void 0===t&&(t="start");var a=document.querySelector(e);return!!a&&(a.scrollIntoView({behavior:"smooth",block:t}),!0)};t.Z=a},7155:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7294),r=a(1597),i=function(){return n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6"},n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))},s=function(){return n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6"},n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 19.5l15-15m-15 0l15 15"}))},o=a(2618),l=a(3723),c=[{text:"Notre Histoire",url:"#notre-histoire"},{text:"Nos Engagements",url:"#nos-engagements"},{text:"Nos équipements",url:"#nos-equipements"},{text:"Accompagnement",url:"#accompagnement"},{text:"Nos ambitions",url:"#nos-ambitions"},{text:"Contact",url:"#contact"}],u=function(){var e=n.useState(!1),t=e[0],u=e[1],d=n.useState(!1),m=d[0],p=d[1];return n.useEffect((function(){var e=function(){window.scrollY>10!==m&&p(!m)};return document.addEventListener("scroll",e,{passive:!0}),function(){document.removeEventListener("scroll",e)}}),[m]),n.createElement("header",{className:"w-full","data-active":m},n.createElement("div",{className:"bg-chestnut-100 "+(m?"shadow-lg":"py-4")},n.createElement("div",{className:"max-w-7xl mx-auto px-4 lg:px-6"},n.createElement("div",{className:"flex justify-center items-center py-2 lg:justify-start lg:space-x-10"},n.createElement("div",{className:"flex justify-start lg:flex-1 truncate"},n.createElement(r.Link,{to:"/"},n.createElement("div",{className:"flex items-center justify-center"},n.createElement(l.S,{src:"../images/horizon-900-sm.png",loading:"eager",className:"w-12 mx-2",imgClassName:"h-24 w-24 object-cover",quality:100,__imageData:a(2571)}),n.createElement("h1",{className:"uppercase font-header text-3xl font-bold trucate text-chestnut-900 mx-2"},"Horizon")))),n.createElement("div",{className:"-mr-2 -my-2 ml-3 lg:hidden"},n.createElement("button",{onClick:function(e){return u(!0)},type:"button",className:"bg-chestnut-100 inline-flex p-2 intems-center justify-center focus:outline-none"},n.createElement(i,null))),n.createElement("nav",{className:"hidden lg:flex space-x-10"},c.map((function(e,t){return n.createElement(n.Fragment,{key:e.url},n.createElement("div",{className:"text-sm text-chestnut-700 hover:text-chestnut-900"},n.createElement("button",{onClick:function(){return(0,o.Z)(e.url)}},n.createElement("span",{className:"font-couture uppercase"},e.text))))}))),t?n.createElement("div",{className:"absolute z-10 top-0 inset-x-0 p-2 transform origin-top-left lg:hidden"},n.createElement("div",{className:"shadow-lg rounded-lg ring-1 ring-black ring-opacity-5 bg-white w-full"},n.createElement("div",{className:"p-5 divide-y-2 divide-gray-50"},n.createElement("div",{className:"flex items-center justify-between pb-3"},n.createElement("div",null,n.createElement("h1",{className:"text-lg text-gray-500"},"Horizon 2000")),n.createElement("div",{className:"-mr-2"},n.createElement("button",{onClick:function(e){return u(!1)},type:"button",className:"bg-white rounded-lg p-2 text-gray-500"},n.createElement(s,null)))),n.createElement("div",{className:"pt-3"},n.createElement("nav",{className:"grid gap-y-7"},c.map((function(e,t){return n.createElement(n.Fragment,{key:e.url},n.createElement("div",null,n.createElement("button",{onClick:function(){return(0,o.Z)(e.url)}},e.text)))}))))))):null))))};u.defaultProps={siteTitle:""};var d=u,m=function(e){e.siteTitle;return n.createElement("footer",{className:"bg-chestnut-50 py-0"},n.createElement("div",null,"© ",(new Date).getFullYear()," · Built with"," ",n.createElement("a",{href:"https://www.gatsbyjs.com"},"Horizon 2000")))},p=function(e){var t,a=e.children,i=(0,r.useStaticQuery)("3649515864");return n.createElement(n.Fragment,null,n.createElement("div",{className:"sticky top-0 bg-white z-50"},n.createElement(d,{siteTitle:(null===(t=i.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"})),n.createElement("main",{className:"relative"},a),n.createElement(m,null))}},9357:function(e,t,a){var n=a(7294),r=a(1597);function i(e){var t,a,i=e.description,s=e.title,o=e.children,l=(0,r.useStaticQuery)("63159454").site,c=i||l.siteMetadata.description,u=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,u?s+" | "+u:s),n.createElement("meta",{name:"description",content:c}),n.createElement("meta",{property:"og:title",content:s}),n.createElement("meta",{property:"og:description",content:c}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(a=l.siteMetadata)||void 0===a?void 0:a.author)||""}),n.createElement("meta",{name:"twitter:title",content:s}),n.createElement("meta",{name:"twitter:description",content:c}),n.createElement("style",null,"@import url('http://fonts.cdnfonts.com/css/aqua-grotesque'); @import url('http://fonts.cdnfonts.com/css/klein-trial'); @import url('http://fonts.cdnfonts.com/css/austen'); @import url('http://fonts.cdnfonts.com/css/mada');"),o)}i.defaultProps={description:""},t.Z=i},2571:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/bbab14c71e3f54a391a61bee0ff477f2/b1d67/horizon-900-sm.png","srcSet":"/static/bbab14c71e3f54a391a61bee0ff477f2/d0093/horizon-900-sm.png 78w,\\n/static/bbab14c71e3f54a391a61bee0ff477f2/c5af7/horizon-900-sm.png 156w,\\n/static/bbab14c71e3f54a391a61bee0ff477f2/b1d67/horizon-900-sm.png 312w","sizes":"(min-width: 312px) 312px, 100vw"},"sources":[{"srcSet":"/static/bbab14c71e3f54a391a61bee0ff477f2/c9b6b/horizon-900-sm.webp 78w,\\n/static/bbab14c71e3f54a391a61bee0ff477f2/c578e/horizon-900-sm.webp 156w,\\n/static/bbab14c71e3f54a391a61bee0ff477f2/9bbde/horizon-900-sm.webp 312w","type":"image/webp","sizes":"(min-width: 312px) 312px, 100vw"}]},"width":312,"height":631}')}}]);
//# sourceMappingURL=commons-3eb70de31c342c134d61.js.map