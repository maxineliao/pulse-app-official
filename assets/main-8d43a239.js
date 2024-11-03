import Ph from"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function e(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(n){if(n.ep)return;n.ep=!0;const c=e(n);fetch(n.href,c)}})();new Ph(".mySwiper-player-1",{spaceBetween:30,slidesPerView:1,speed:1500,loop:!0,centeredSlides:!0,autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},pagination:{el:".swiper-pagination-player-1",clickable:!0},navigation:{nextEl:".swiper-button-next-player-1",prevEl:".swiper-button-prev-player-1"}});new Ph(".mySwiper-player-2",{spaceBetween:30,slidesPerView:1,loop:!0,centeredSlides:!1,navigation:{nextEl:".swiper-button-next-player-2",prevEl:".swiper-button-prev-player-2"},breakpoints:{475:{slidesPerView:2},768:{slidesPerView:3}}});var O="top",k="bottom",R="right",D="left",g2="auto",D1=[O,k,R,D],g1="start",E1="end",Nh="clippingParents",X2="viewport",A1="popper",kh="reference",q2=D1.reduce(function(h,a){return h.concat([a+"-"+g1,a+"-"+E1])},[]),Q2=[].concat(D1,[g2]).reduce(function(h,a){return h.concat([a,a+"-"+g1,a+"-"+E1])},[]),Rh="beforeRead",Ih="read",$h="afterRead",Zh="beforeMain",Bh="main",zh="afterMain",Fh="beforeWrite",qh="write",Uh="afterWrite",Wh=[Rh,Ih,$h,Zh,Bh,zh,Fh,qh,Uh];function G(h){return h?(h.nodeName||"").toLowerCase():null}function I(h){if(h==null)return window;if(h.toString()!=="[object Window]"){var a=h.ownerDocument;return a&&a.defaultView||window}return h}function u1(h){var a=I(h).Element;return h instanceof a||h instanceof Element}function $(h){var a=I(h).HTMLElement;return h instanceof a||h instanceof HTMLElement}function J2(h){if(typeof ShadowRoot>"u")return!1;var a=I(h).ShadowRoot;return h instanceof a||h instanceof ShadowRoot}function zs(h){var a=h.state;Object.keys(a.elements).forEach(function(e){var s=a.styles[e]||{},n=a.attributes[e]||{},c=a.elements[e];!$(c)||!G(c)||(Object.assign(c.style,s),Object.keys(n).forEach(function(d){var r=n[d];r===!1?c.removeAttribute(d):c.setAttribute(d,r===!0?"":r)}))})}function Fs(h){var a=h.state,e={popper:{position:a.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(a.elements.popper.style,e.popper),a.styles=e,a.elements.arrow&&Object.assign(a.elements.arrow.style,e.arrow),function(){Object.keys(a.elements).forEach(function(s){var n=a.elements[s],c=a.attributes[s]||{},d=Object.keys(a.styles.hasOwnProperty(s)?a.styles[s]:e[s]),r=d.reduce(function(o,l){return o[l]="",o},{});!$(n)||!G(n)||(Object.assign(n.style,r),Object.keys(c).forEach(function(o){n.removeAttribute(o)}))})}}const tt={name:"applyStyles",enabled:!0,phase:"write",fn:zs,effect:Fs,requires:["computeStyles"]};function W(h){return h.split("-")[0]}var v1=Math.max,p2=Math.min,V1=Math.round;function U2(){var h=navigator.userAgentData;return h!=null&&h.brands&&Array.isArray(h.brands)?h.brands.map(function(a){return a.brand+"/"+a.version}).join(" "):navigator.userAgent}function Kh(){return!/^((?!chrome|android).)*safari/i.test(U2())}function L1(h,a,e){a===void 0&&(a=!1),e===void 0&&(e=!1);var s=h.getBoundingClientRect(),n=1,c=1;a&&$(h)&&(n=h.offsetWidth>0&&V1(s.width)/h.offsetWidth||1,c=h.offsetHeight>0&&V1(s.height)/h.offsetHeight||1);var d=u1(h)?I(h):window,r=d.visualViewport,o=!Kh()&&e,l=(s.left+(o&&r?r.offsetLeft:0))/n,p=(s.top+(o&&r?r.offsetTop:0))/c,g=s.width/n,u=s.height/c;return{width:g,height:u,top:p,right:l+g,bottom:p+u,left:l,x:l,y:p}}function at(h){var a=L1(h),e=h.offsetWidth,s=h.offsetHeight;return Math.abs(a.width-e)<=1&&(e=a.width),Math.abs(a.height-s)<=1&&(s=a.height),{x:h.offsetLeft,y:h.offsetTop,width:e,height:s}}function Gh(h,a){var e=a.getRootNode&&a.getRootNode();if(h.contains(a))return!0;if(e&&J2(e)){var s=a;do{if(s&&h.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function X(h){return I(h).getComputedStyle(h)}function qs(h){return["table","td","th"].indexOf(G(h))>=0}function s1(h){return((u1(h)?h.ownerDocument:h.document)||window.document).documentElement}function u2(h){return G(h)==="html"?h:h.assignedSlot||h.parentNode||(J2(h)?h.host:null)||s1(h)}function Ct(h){return!$(h)||X(h).position==="fixed"?null:h.offsetParent}function Us(h){var a=/firefox/i.test(U2()),e=/Trident/i.test(U2());if(e&&$(h)){var s=X(h);if(s.position==="fixed")return null}var n=u2(h);for(J2(n)&&(n=n.host);$(n)&&["html","body"].indexOf(G(n))<0;){var c=X(n);if(c.transform!=="none"||c.perspective!=="none"||c.contain==="paint"||["transform","perspective"].indexOf(c.willChange)!==-1||a&&c.willChange==="filter"||a&&c.filter&&c.filter!=="none")return n;n=n.parentNode}return null}function q1(h){for(var a=I(h),e=Ct(h);e&&qs(e)&&X(e).position==="static";)e=Ct(e);return e&&(G(e)==="html"||G(e)==="body"&&X(e).position==="static")?a:e||Us(h)||a}function et(h){return["top","bottom"].indexOf(h)>=0?"x":"y"}function B1(h,a,e){return v1(h,p2(a,e))}function Ws(h,a,e){var s=B1(h,a,e);return s>e?e:s}function jh(){return{top:0,right:0,bottom:0,left:0}}function Yh(h){return Object.assign({},jh(),h)}function Xh(h,a){return a.reduce(function(e,s){return e[s]=h,e},{})}var Ks=function(a,e){return a=typeof a=="function"?a(Object.assign({},e.rects,{placement:e.placement})):a,Yh(typeof a!="number"?a:Xh(a,D1))};function Gs(h){var a,e=h.state,s=h.name,n=h.options,c=e.elements.arrow,d=e.modifiersData.popperOffsets,r=W(e.placement),o=et(r),l=[D,R].indexOf(r)>=0,p=l?"height":"width";if(!(!c||!d)){var g=Ks(n.padding,e),u=at(c),v=o==="y"?O:D,f=o==="y"?k:R,y=e.rects.reference[p]+e.rects.reference[o]-d[o]-e.rects.popper[p],x=d[o]-e.rects.reference[o],w=q1(c),H=w?o==="y"?w.clientHeight||0:w.clientWidth||0:0,E=y/2-x/2,m=g[v],_=H-u[p]-g[f],A=H/2-u[p]/2+E,C=B1(m,A,_),b=o;e.modifiersData[s]=(a={},a[b]=C,a.centerOffset=C-A,a)}}function js(h){var a=h.state,e=h.options,s=e.element,n=s===void 0?"[data-popper-arrow]":s;n!=null&&(typeof n=="string"&&(n=a.elements.popper.querySelector(n),!n)||Gh(a.elements.popper,n)&&(a.elements.arrow=n))}const Qh={name:"arrow",enabled:!0,phase:"main",fn:Gs,effect:js,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function b1(h){return h.split("-")[1]}var Ys={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Xs(h,a){var e=h.x,s=h.y,n=a.devicePixelRatio||1;return{x:V1(e*n)/n||0,y:V1(s*n)/n||0}}function Ht(h){var a,e=h.popper,s=h.popperRect,n=h.placement,c=h.variation,d=h.offsets,r=h.position,o=h.gpuAcceleration,l=h.adaptive,p=h.roundOffsets,g=h.isFixed,u=d.x,v=u===void 0?0:u,f=d.y,y=f===void 0?0:f,x=typeof p=="function"?p({x:v,y}):{x:v,y};v=x.x,y=x.y;var w=d.hasOwnProperty("x"),H=d.hasOwnProperty("y"),E=D,m=O,_=window;if(l){var A=q1(e),C="clientHeight",b="clientWidth";if(A===I(e)&&(A=s1(e),X(A).position!=="static"&&r==="absolute"&&(C="scrollHeight",b="scrollWidth")),A=A,n===O||(n===D||n===R)&&c===E1){m=k;var L=g&&A===_&&_.visualViewport?_.visualViewport.height:A[C];y-=L-s.height,y*=o?1:-1}if(n===D||(n===O||n===k)&&c===E1){E=R;var V=g&&A===_&&_.visualViewport?_.visualViewport.width:A[b];v-=V-s.width,v*=o?1:-1}}var S=Object.assign({position:r},l&&Ys),F=p===!0?Xs({x:v,y},I(e)):{x:v,y};if(v=F.x,y=F.y,o){var T;return Object.assign({},S,(T={},T[m]=H?"0":"",T[E]=w?"0":"",T.transform=(_.devicePixelRatio||1)<=1?"translate("+v+"px, "+y+"px)":"translate3d("+v+"px, "+y+"px, 0)",T))}return Object.assign({},S,(a={},a[m]=H?y+"px":"",a[E]=w?v+"px":"",a.transform="",a))}function Qs(h){var a=h.state,e=h.options,s=e.gpuAcceleration,n=s===void 0?!0:s,c=e.adaptive,d=c===void 0?!0:c,r=e.roundOffsets,o=r===void 0?!0:r,l={placement:W(a.placement),variation:b1(a.placement),popper:a.elements.popper,popperRect:a.rects.popper,gpuAcceleration:n,isFixed:a.options.strategy==="fixed"};a.modifiersData.popperOffsets!=null&&(a.styles.popper=Object.assign({},a.styles.popper,Ht(Object.assign({},l,{offsets:a.modifiersData.popperOffsets,position:a.options.strategy,adaptive:d,roundOffsets:o})))),a.modifiersData.arrow!=null&&(a.styles.arrow=Object.assign({},a.styles.arrow,Ht(Object.assign({},l,{offsets:a.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:o})))),a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-placement":a.placement})}const ht={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Qs,data:{}};var t2={passive:!0};function Js(h){var a=h.state,e=h.instance,s=h.options,n=s.scroll,c=n===void 0?!0:n,d=s.resize,r=d===void 0?!0:d,o=I(a.elements.popper),l=[].concat(a.scrollParents.reference,a.scrollParents.popper);return c&&l.forEach(function(p){p.addEventListener("scroll",e.update,t2)}),r&&o.addEventListener("resize",e.update,t2),function(){c&&l.forEach(function(p){p.removeEventListener("scroll",e.update,t2)}),r&&o.removeEventListener("resize",e.update,t2)}}const st={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Js,data:{}};var tn={left:"right",right:"left",bottom:"top",top:"bottom"};function r2(h){return h.replace(/left|right|bottom|top/g,function(a){return tn[a]})}var an={start:"end",end:"start"};function Et(h){return h.replace(/start|end/g,function(a){return an[a]})}function nt(h){var a=I(h),e=a.pageXOffset,s=a.pageYOffset;return{scrollLeft:e,scrollTop:s}}function ct(h){return L1(s1(h)).left+nt(h).scrollLeft}function en(h,a){var e=I(h),s=s1(h),n=e.visualViewport,c=s.clientWidth,d=s.clientHeight,r=0,o=0;if(n){c=n.width,d=n.height;var l=Kh();(l||!l&&a==="fixed")&&(r=n.offsetLeft,o=n.offsetTop)}return{width:c,height:d,x:r+ct(h),y:o}}function hn(h){var a,e=s1(h),s=nt(h),n=(a=h.ownerDocument)==null?void 0:a.body,c=v1(e.scrollWidth,e.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),d=v1(e.scrollHeight,e.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),r=-s.scrollLeft+ct(h),o=-s.scrollTop;return X(n||e).direction==="rtl"&&(r+=v1(e.clientWidth,n?n.clientWidth:0)-c),{width:c,height:d,x:r,y:o}}function dt(h){var a=X(h),e=a.overflow,s=a.overflowX,n=a.overflowY;return/auto|scroll|overlay|hidden/.test(e+n+s)}function Jh(h){return["html","body","#document"].indexOf(G(h))>=0?h.ownerDocument.body:$(h)&&dt(h)?h:Jh(u2(h))}function z1(h,a){var e;a===void 0&&(a=[]);var s=Jh(h),n=s===((e=h.ownerDocument)==null?void 0:e.body),c=I(s),d=n?[c].concat(c.visualViewport||[],dt(s)?s:[]):s,r=a.concat(d);return n?r:r.concat(z1(u2(d)))}function W2(h){return Object.assign({},h,{left:h.x,top:h.y,right:h.x+h.width,bottom:h.y+h.height})}function sn(h,a){var e=L1(h,!1,a==="fixed");return e.top=e.top+h.clientTop,e.left=e.left+h.clientLeft,e.bottom=e.top+h.clientHeight,e.right=e.left+h.clientWidth,e.width=h.clientWidth,e.height=h.clientHeight,e.x=e.left,e.y=e.top,e}function Vt(h,a,e){return a===X2?W2(en(h,e)):u1(a)?sn(a,e):W2(hn(s1(h)))}function nn(h){var a=z1(u2(h)),e=["absolute","fixed"].indexOf(X(h).position)>=0,s=e&&$(h)?q1(h):h;return u1(s)?a.filter(function(n){return u1(n)&&Gh(n,s)&&G(n)!=="body"}):[]}function cn(h,a,e,s){var n=a==="clippingParents"?nn(h):[].concat(a),c=[].concat(n,[e]),d=c[0],r=c.reduce(function(o,l){var p=Vt(h,l,s);return o.top=v1(p.top,o.top),o.right=p2(p.right,o.right),o.bottom=p2(p.bottom,o.bottom),o.left=v1(p.left,o.left),o},Vt(h,d,s));return r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}function ts(h){var a=h.reference,e=h.element,s=h.placement,n=s?W(s):null,c=s?b1(s):null,d=a.x+a.width/2-e.width/2,r=a.y+a.height/2-e.height/2,o;switch(n){case O:o={x:d,y:a.y-e.height};break;case k:o={x:d,y:a.y+a.height};break;case R:o={x:a.x+a.width,y:r};break;case D:o={x:a.x-e.width,y:r};break;default:o={x:a.x,y:a.y}}var l=n?et(n):null;if(l!=null){var p=l==="y"?"height":"width";switch(c){case g1:o[l]=o[l]-(a[p]/2-e[p]/2);break;case E1:o[l]=o[l]+(a[p]/2-e[p]/2);break}}return o}function S1(h,a){a===void 0&&(a={});var e=a,s=e.placement,n=s===void 0?h.placement:s,c=e.strategy,d=c===void 0?h.strategy:c,r=e.boundary,o=r===void 0?Nh:r,l=e.rootBoundary,p=l===void 0?X2:l,g=e.elementContext,u=g===void 0?A1:g,v=e.altBoundary,f=v===void 0?!1:v,y=e.padding,x=y===void 0?0:y,w=Yh(typeof x!="number"?x:Xh(x,D1)),H=u===A1?kh:A1,E=h.rects.popper,m=h.elements[f?H:u],_=cn(u1(m)?m:m.contextElement||s1(h.elements.popper),o,p,d),A=L1(h.elements.reference),C=ts({reference:A,element:E,strategy:"absolute",placement:n}),b=W2(Object.assign({},E,C)),L=u===A1?b:A,V={top:_.top-L.top+w.top,bottom:L.bottom-_.bottom+w.bottom,left:_.left-L.left+w.left,right:L.right-_.right+w.right},S=h.modifiersData.offset;if(u===A1&&S){var F=S[n];Object.keys(V).forEach(function(T){var d1=[R,k].indexOf(T)>=0?1:-1,r1=[O,k].indexOf(T)>=0?"y":"x";V[T]+=F[r1]*d1})}return V}function dn(h,a){a===void 0&&(a={});var e=a,s=e.placement,n=e.boundary,c=e.rootBoundary,d=e.padding,r=e.flipVariations,o=e.allowedAutoPlacements,l=o===void 0?Q2:o,p=b1(s),g=p?r?q2:q2.filter(function(f){return b1(f)===p}):D1,u=g.filter(function(f){return l.indexOf(f)>=0});u.length===0&&(u=g);var v=u.reduce(function(f,y){return f[y]=S1(h,{placement:y,boundary:n,rootBoundary:c,padding:d})[W(y)],f},{});return Object.keys(v).sort(function(f,y){return v[f]-v[y]})}function rn(h){if(W(h)===g2)return[];var a=r2(h);return[Et(h),a,Et(a)]}function on(h){var a=h.state,e=h.options,s=h.name;if(!a.modifiersData[s]._skip){for(var n=e.mainAxis,c=n===void 0?!0:n,d=e.altAxis,r=d===void 0?!0:d,o=e.fallbackPlacements,l=e.padding,p=e.boundary,g=e.rootBoundary,u=e.altBoundary,v=e.flipVariations,f=v===void 0?!0:v,y=e.allowedAutoPlacements,x=a.options.placement,w=W(x),H=w===x,E=o||(H||!f?[r2(x)]:rn(x)),m=[x].concat(E).reduce(function(x1,J){return x1.concat(W(J)===g2?dn(a,{placement:J,boundary:p,rootBoundary:g,padding:l,flipVariations:f,allowedAutoPlacements:y}):J)},[]),_=a.rects.reference,A=a.rects.popper,C=new Map,b=!0,L=m[0],V=0;V<m.length;V++){var S=m[V],F=W(S),T=b1(S)===g1,d1=[O,k].indexOf(F)>=0,r1=d1?"width":"height",N=S1(a,{placement:S,boundary:p,rootBoundary:g,altBoundary:u,padding:l}),q=d1?T?R:D:T?k:O;_[r1]>A[r1]&&(q=r2(q));var j1=r2(q),i1=[];if(c&&i1.push(N[F]<=0),r&&i1.push(N[q]<=0,N[j1]<=0),i1.every(function(x1){return x1})){L=S,b=!1;break}C.set(S,i1)}if(b)for(var Y1=f?3:1,w2=function(J){var I1=m.find(function(Q1){var o1=C.get(Q1);if(o1)return o1.slice(0,J).every(function(C2){return C2})});if(I1)return L=I1,"break"},R1=Y1;R1>0;R1--){var X1=w2(R1);if(X1==="break")break}a.placement!==L&&(a.modifiersData[s]._skip=!0,a.placement=L,a.reset=!0)}}const as={name:"flip",enabled:!0,phase:"main",fn:on,requiresIfExists:["offset"],data:{_skip:!1}};function Lt(h,a,e){return e===void 0&&(e={x:0,y:0}),{top:h.top-a.height-e.y,right:h.right-a.width+e.x,bottom:h.bottom-a.height+e.y,left:h.left-a.width-e.x}}function bt(h){return[O,R,k,D].some(function(a){return h[a]>=0})}function pn(h){var a=h.state,e=h.name,s=a.rects.reference,n=a.rects.popper,c=a.modifiersData.preventOverflow,d=S1(a,{elementContext:"reference"}),r=S1(a,{altBoundary:!0}),o=Lt(d,s),l=Lt(r,n,c),p=bt(o),g=bt(l);a.modifiersData[e]={referenceClippingOffsets:o,popperEscapeOffsets:l,isReferenceHidden:p,hasPopperEscaped:g},a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":g})}const es={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:pn};function ln(h,a,e){var s=W(h),n=[D,O].indexOf(s)>=0?-1:1,c=typeof e=="function"?e(Object.assign({},a,{placement:h})):e,d=c[0],r=c[1];return d=d||0,r=(r||0)*n,[D,R].indexOf(s)>=0?{x:r,y:d}:{x:d,y:r}}function Mn(h){var a=h.state,e=h.options,s=h.name,n=e.offset,c=n===void 0?[0,0]:n,d=Q2.reduce(function(p,g){return p[g]=ln(g,a.rects,c),p},{}),r=d[a.placement],o=r.x,l=r.y;a.modifiersData.popperOffsets!=null&&(a.modifiersData.popperOffsets.x+=o,a.modifiersData.popperOffsets.y+=l),a.modifiersData[s]=d}const hs={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Mn};function vn(h){var a=h.state,e=h.name;a.modifiersData[e]=ts({reference:a.rects.reference,element:a.rects.popper,strategy:"absolute",placement:a.placement})}const rt={name:"popperOffsets",enabled:!0,phase:"read",fn:vn,data:{}};function gn(h){return h==="x"?"y":"x"}function un(h){var a=h.state,e=h.options,s=h.name,n=e.mainAxis,c=n===void 0?!0:n,d=e.altAxis,r=d===void 0?!1:d,o=e.boundary,l=e.rootBoundary,p=e.altBoundary,g=e.padding,u=e.tether,v=u===void 0?!0:u,f=e.tetherOffset,y=f===void 0?0:f,x=S1(a,{boundary:o,rootBoundary:l,padding:g,altBoundary:p}),w=W(a.placement),H=b1(a.placement),E=!H,m=et(w),_=gn(m),A=a.modifiersData.popperOffsets,C=a.rects.reference,b=a.rects.popper,L=typeof y=="function"?y(Object.assign({},a.rects,{placement:a.placement})):y,V=typeof L=="number"?{mainAxis:L,altAxis:L}:Object.assign({mainAxis:0,altAxis:0},L),S=a.modifiersData.offset?a.modifiersData.offset[a.placement]:null,F={x:0,y:0};if(A){if(c){var T,d1=m==="y"?O:D,r1=m==="y"?k:R,N=m==="y"?"height":"width",q=A[m],j1=q+x[d1],i1=q-x[r1],Y1=v?-b[N]/2:0,w2=H===g1?C[N]:b[N],R1=H===g1?-b[N]:-C[N],X1=a.elements.arrow,x1=v&&X1?at(X1):{width:0,height:0},J=a.modifiersData["arrow#persistent"]?a.modifiersData["arrow#persistent"].padding:jh(),I1=J[d1],Q1=J[r1],o1=B1(0,C[N],x1[N]),C2=E?C[N]/2-Y1-o1-I1-V.mainAxis:w2-o1-I1-V.mainAxis,ks=E?-C[N]/2+Y1+o1+Q1+V.mainAxis:R1+o1+Q1+V.mainAxis,H2=a.elements.arrow&&q1(a.elements.arrow),Rs=H2?m==="y"?H2.clientTop||0:H2.clientLeft||0:0,gt=(T=S==null?void 0:S[m])!=null?T:0,Is=q+C2-gt-Rs,$s=q+ks-gt,ut=B1(v?p2(j1,Is):j1,q,v?v1(i1,$s):i1);A[m]=ut,F[m]=ut-q}if(r){var yt,Zs=m==="x"?O:D,Bs=m==="x"?k:R,p1=A[_],J1=_==="y"?"height":"width",mt=p1+x[Zs],xt=p1-x[Bs],E2=[O,D].indexOf(w)!==-1,ft=(yt=S==null?void 0:S[_])!=null?yt:0,_t=E2?mt:p1-C[J1]-b[J1]-ft+V.altAxis,At=E2?p1+C[J1]+b[J1]-ft-V.altAxis:xt,wt=v&&E2?Ws(_t,p1,At):B1(v?_t:mt,p1,v?At:xt);A[_]=wt,F[_]=wt-p1}a.modifiersData[s]=F}}const ss={name:"preventOverflow",enabled:!0,phase:"main",fn:un,requiresIfExists:["offset"]};function yn(h){return{scrollLeft:h.scrollLeft,scrollTop:h.scrollTop}}function mn(h){return h===I(h)||!$(h)?nt(h):yn(h)}function xn(h){var a=h.getBoundingClientRect(),e=V1(a.width)/h.offsetWidth||1,s=V1(a.height)/h.offsetHeight||1;return e!==1||s!==1}function fn(h,a,e){e===void 0&&(e=!1);var s=$(a),n=$(a)&&xn(a),c=s1(a),d=L1(h,n,e),r={scrollLeft:0,scrollTop:0},o={x:0,y:0};return(s||!s&&!e)&&((G(a)!=="body"||dt(c))&&(r=mn(a)),$(a)?(o=L1(a,!0),o.x+=a.clientLeft,o.y+=a.clientTop):c&&(o.x=ct(c))),{x:d.left+r.scrollLeft-o.x,y:d.top+r.scrollTop-o.y,width:d.width,height:d.height}}function _n(h){var a=new Map,e=new Set,s=[];h.forEach(function(c){a.set(c.name,c)});function n(c){e.add(c.name);var d=[].concat(c.requires||[],c.requiresIfExists||[]);d.forEach(function(r){if(!e.has(r)){var o=a.get(r);o&&n(o)}}),s.push(c)}return h.forEach(function(c){e.has(c.name)||n(c)}),s}function An(h){var a=_n(h);return Wh.reduce(function(e,s){return e.concat(a.filter(function(n){return n.phase===s}))},[])}function wn(h){var a;return function(){return a||(a=new Promise(function(e){Promise.resolve().then(function(){a=void 0,e(h())})})),a}}function Cn(h){var a=h.reduce(function(e,s){var n=e[s.name];return e[s.name]=n?Object.assign({},n,s,{options:Object.assign({},n.options,s.options),data:Object.assign({},n.data,s.data)}):s,e},{});return Object.keys(a).map(function(e){return a[e]})}var St={placement:"bottom",modifiers:[],strategy:"absolute"};function Tt(){for(var h=arguments.length,a=new Array(h),e=0;e<h;e++)a[e]=arguments[e];return!a.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function y2(h){h===void 0&&(h={});var a=h,e=a.defaultModifiers,s=e===void 0?[]:e,n=a.defaultOptions,c=n===void 0?St:n;return function(r,o,l){l===void 0&&(l=c);var p={placement:"bottom",orderedModifiers:[],options:Object.assign({},St,c),modifiersData:{},elements:{reference:r,popper:o},attributes:{},styles:{}},g=[],u=!1,v={state:p,setOptions:function(w){var H=typeof w=="function"?w(p.options):w;y(),p.options=Object.assign({},c,p.options,H),p.scrollParents={reference:u1(r)?z1(r):r.contextElement?z1(r.contextElement):[],popper:z1(o)};var E=An(Cn([].concat(s,p.options.modifiers)));return p.orderedModifiers=E.filter(function(m){return m.enabled}),f(),v.update()},forceUpdate:function(){if(!u){var w=p.elements,H=w.reference,E=w.popper;if(Tt(H,E)){p.rects={reference:fn(H,q1(E),p.options.strategy==="fixed"),popper:at(E)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(V){return p.modifiersData[V.name]=Object.assign({},V.data)});for(var m=0;m<p.orderedModifiers.length;m++){if(p.reset===!0){p.reset=!1,m=-1;continue}var _=p.orderedModifiers[m],A=_.fn,C=_.options,b=C===void 0?{}:C,L=_.name;typeof A=="function"&&(p=A({state:p,options:b,name:L,instance:v})||p)}}}},update:wn(function(){return new Promise(function(x){v.forceUpdate(),x(p)})}),destroy:function(){y(),u=!0}};if(!Tt(r,o))return v;v.setOptions(l).then(function(x){!u&&l.onFirstUpdate&&l.onFirstUpdate(x)});function f(){p.orderedModifiers.forEach(function(x){var w=x.name,H=x.options,E=H===void 0?{}:H,m=x.effect;if(typeof m=="function"){var _=m({state:p,name:w,instance:v,options:E}),A=function(){};g.push(_||A)}})}function y(){g.forEach(function(x){return x()}),g=[]}return v}}var Hn=y2(),En=[st,rt,ht,tt],Vn=y2({defaultModifiers:En}),Ln=[st,rt,ht,tt,hs,as,ss,Qh,es],it=y2({defaultModifiers:Ln});const ns=Object.freeze(Object.defineProperty({__proto__:null,afterMain:zh,afterRead:$h,afterWrite:Uh,applyStyles:tt,arrow:Qh,auto:g2,basePlacements:D1,beforeMain:Zh,beforeRead:Rh,beforeWrite:Fh,bottom:k,clippingParents:Nh,computeStyles:ht,createPopper:it,createPopperBase:Hn,createPopperLite:Vn,detectOverflow:S1,end:E1,eventListeners:st,flip:as,hide:es,left:D,main:Bh,modifierPhases:Wh,offset:hs,placements:Q2,popper:A1,popperGenerator:y2,popperOffsets:rt,preventOverflow:ss,read:Ih,reference:kh,right:R,start:g1,top:O,variationPlacements:q2,viewport:X2,write:qh},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const t1=new Map,V2={set(h,a,e){t1.has(h)||t1.set(h,new Map);const s=t1.get(h);if(!s.has(a)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(a,e)},get(h,a){return t1.has(h)&&t1.get(h).get(a)||null},remove(h,a){if(!t1.has(h))return;const e=t1.get(h);e.delete(a),e.size===0&&t1.delete(h)}},bn=1e6,Sn=1e3,K2="transitionend",cs=h=>(h&&window.CSS&&window.CSS.escape&&(h=h.replace(/#([^\s"#']+)/g,(a,e)=>`#${CSS.escape(e)}`)),h),Tn=h=>h==null?`${h}`:Object.prototype.toString.call(h).match(/\s([a-z]+)/i)[1].toLowerCase(),On=h=>{do h+=Math.floor(Math.random()*bn);while(document.getElementById(h));return h},Dn=h=>{if(!h)return 0;let{transitionDuration:a,transitionDelay:e}=window.getComputedStyle(h);const s=Number.parseFloat(a),n=Number.parseFloat(e);return!s&&!n?0:(a=a.split(",")[0],e=e.split(",")[0],(Number.parseFloat(a)+Number.parseFloat(e))*Sn)},ds=h=>{h.dispatchEvent(new Event(K2))},j=h=>!h||typeof h!="object"?!1:(typeof h.jquery<"u"&&(h=h[0]),typeof h.nodeType<"u"),a1=h=>j(h)?h.jquery?h[0]:h:typeof h=="string"&&h.length>0?document.querySelector(cs(h)):null,P1=h=>{if(!j(h)||h.getClientRects().length===0)return!1;const a=getComputedStyle(h).getPropertyValue("visibility")==="visible",e=h.closest("details:not([open])");if(!e)return a;if(e!==h){const s=h.closest("summary");if(s&&s.parentNode!==e||s===null)return!1}return a},e1=h=>!h||h.nodeType!==Node.ELEMENT_NODE||h.classList.contains("disabled")?!0:typeof h.disabled<"u"?h.disabled:h.hasAttribute("disabled")&&h.getAttribute("disabled")!=="false",rs=h=>{if(!document.documentElement.attachShadow)return null;if(typeof h.getRootNode=="function"){const a=h.getRootNode();return a instanceof ShadowRoot?a:null}return h instanceof ShadowRoot?h:h.parentNode?rs(h.parentNode):null},l2=()=>{},U1=h=>{h.offsetHeight},is=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,L2=[],Pn=h=>{document.readyState==="loading"?(L2.length||document.addEventListener("DOMContentLoaded",()=>{for(const a of L2)a()}),L2.push(h)):h()},Z=()=>document.documentElement.dir==="rtl",z=h=>{Pn(()=>{const a=is();if(a){const e=h.NAME,s=a.fn[e];a.fn[e]=h.jQueryInterface,a.fn[e].Constructor=h,a.fn[e].noConflict=()=>(a.fn[e]=s,h.jQueryInterface)}})},P=(h,a=[],e=h)=>typeof h=="function"?h(...a):e,os=(h,a,e=!0)=>{if(!e){P(h);return}const s=5,n=Dn(a)+s;let c=!1;const d=({target:r})=>{r===a&&(c=!0,a.removeEventListener(K2,d),P(h))};a.addEventListener(K2,d),setTimeout(()=>{c||ds(a)},n)},ot=(h,a,e,s)=>{const n=h.length;let c=h.indexOf(a);return c===-1?!e&&s?h[n-1]:h[0]:(c+=e?1:-1,s&&(c=(c+n)%n),h[Math.max(0,Math.min(c,n-1))])},Nn=/[^.]*(?=\..*)\.|.*/,kn=/\..*/,Rn=/::\d+$/,b2={};let Ot=1;const ps={mouseenter:"mouseover",mouseleave:"mouseout"},In=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function ls(h,a){return a&&`${a}::${Ot++}`||h.uidEvent||Ot++}function Ms(h){const a=ls(h);return h.uidEvent=a,b2[a]=b2[a]||{},b2[a]}function $n(h,a){return function e(s){return pt(s,{delegateTarget:h}),e.oneOff&&i.off(h,s.type,a),a.apply(h,[s])}}function Zn(h,a,e){return function s(n){const c=h.querySelectorAll(a);for(let{target:d}=n;d&&d!==this;d=d.parentNode)for(const r of c)if(r===d)return pt(n,{delegateTarget:d}),s.oneOff&&i.off(h,n.type,a,e),e.apply(d,[n])}}function vs(h,a,e=null){return Object.values(h).find(s=>s.callable===a&&s.delegationSelector===e)}function gs(h,a,e){const s=typeof a=="string",n=s?e:a||e;let c=us(h);return In.has(c)||(c=h),[s,n,c]}function Dt(h,a,e,s,n){if(typeof a!="string"||!h)return;let[c,d,r]=gs(a,e,s);a in ps&&(d=(f=>function(y){if(!y.relatedTarget||y.relatedTarget!==y.delegateTarget&&!y.delegateTarget.contains(y.relatedTarget))return f.call(this,y)})(d));const o=Ms(h),l=o[r]||(o[r]={}),p=vs(l,d,c?e:null);if(p){p.oneOff=p.oneOff&&n;return}const g=ls(d,a.replace(Nn,"")),u=c?Zn(h,e,d):$n(h,d);u.delegationSelector=c?e:null,u.callable=d,u.oneOff=n,u.uidEvent=g,l[g]=u,h.addEventListener(r,u,c)}function G2(h,a,e,s,n){const c=vs(a[e],s,n);c&&(h.removeEventListener(e,c,!!n),delete a[e][c.uidEvent])}function Bn(h,a,e,s){const n=a[e]||{};for(const[c,d]of Object.entries(n))c.includes(s)&&G2(h,a,e,d.callable,d.delegationSelector)}function us(h){return h=h.replace(kn,""),ps[h]||h}const i={on(h,a,e,s){Dt(h,a,e,s,!1)},one(h,a,e,s){Dt(h,a,e,s,!0)},off(h,a,e,s){if(typeof a!="string"||!h)return;const[n,c,d]=gs(a,e,s),r=d!==a,o=Ms(h),l=o[d]||{},p=a.startsWith(".");if(typeof c<"u"){if(!Object.keys(l).length)return;G2(h,o,d,c,n?e:null);return}if(p)for(const g of Object.keys(o))Bn(h,o,g,a.slice(1));for(const[g,u]of Object.entries(l)){const v=g.replace(Rn,"");(!r||a.includes(v))&&G2(h,o,d,u.callable,u.delegationSelector)}},trigger(h,a,e){if(typeof a!="string"||!h)return null;const s=is(),n=us(a),c=a!==n;let d=null,r=!0,o=!0,l=!1;c&&s&&(d=s.Event(a,e),s(h).trigger(d),r=!d.isPropagationStopped(),o=!d.isImmediatePropagationStopped(),l=d.isDefaultPrevented());const p=pt(new Event(a,{bubbles:r,cancelable:!0}),e);return l&&p.preventDefault(),o&&h.dispatchEvent(p),p.defaultPrevented&&d&&d.preventDefault(),p}};function pt(h,a={}){for(const[e,s]of Object.entries(a))try{h[e]=s}catch{Object.defineProperty(h,e,{configurable:!0,get(){return s}})}return h}function Pt(h){if(h==="true")return!0;if(h==="false")return!1;if(h===Number(h).toString())return Number(h);if(h===""||h==="null")return null;if(typeof h!="string")return h;try{return JSON.parse(decodeURIComponent(h))}catch{return h}}function S2(h){return h.replace(/[A-Z]/g,a=>`-${a.toLowerCase()}`)}const Y={setDataAttribute(h,a,e){h.setAttribute(`data-bs-${S2(a)}`,e)},removeDataAttribute(h,a){h.removeAttribute(`data-bs-${S2(a)}`)},getDataAttributes(h){if(!h)return{};const a={},e=Object.keys(h.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(const s of e){let n=s.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),a[n]=Pt(h.dataset[s])}return a},getDataAttribute(h,a){return Pt(h.getAttribute(`data-bs-${S2(a)}`))}};class W1{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(a){return a=this._mergeConfigObj(a),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}_configAfterMerge(a){return a}_mergeConfigObj(a,e){const s=j(e)?Y.getDataAttribute(e,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},...j(e)?Y.getDataAttributes(e):{},...typeof a=="object"?a:{}}}_typeCheckConfig(a,e=this.constructor.DefaultType){for(const[s,n]of Object.entries(e)){const c=a[s],d=j(c)?"element":Tn(c);if(!new RegExp(n).test(d))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${d}" but expected type "${n}".`)}}}const zn="5.3.3";class U extends W1{constructor(a,e){super(),a=a1(a),a&&(this._element=a,this._config=this._getConfig(e),V2.set(this._element,this.constructor.DATA_KEY,this))}dispose(){V2.remove(this._element,this.constructor.DATA_KEY),i.off(this._element,this.constructor.EVENT_KEY);for(const a of Object.getOwnPropertyNames(this))this[a]=null}_queueCallback(a,e,s=!0){os(a,e,s)}_getConfig(a){return a=this._mergeConfigObj(a,this._element),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}static getInstance(a){return V2.get(a1(a),this.DATA_KEY)}static getOrCreateInstance(a,e={}){return this.getInstance(a)||new this(a,typeof e=="object"?e:null)}static get VERSION(){return zn}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(a){return`${a}${this.EVENT_KEY}`}}const T2=h=>{let a=h.getAttribute("data-bs-target");if(!a||a==="#"){let e=h.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),a=e&&e!=="#"?e.trim():null}return a?a.split(",").map(e=>cs(e)).join(","):null},M={find(h,a=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(a,h))},findOne(h,a=document.documentElement){return Element.prototype.querySelector.call(a,h)},children(h,a){return[].concat(...h.children).filter(e=>e.matches(a))},parents(h,a){const e=[];let s=h.parentNode.closest(a);for(;s;)e.push(s),s=s.parentNode.closest(a);return e},prev(h,a){let e=h.previousElementSibling;for(;e;){if(e.matches(a))return[e];e=e.previousElementSibling}return[]},next(h,a){let e=h.nextElementSibling;for(;e;){if(e.matches(a))return[e];e=e.nextElementSibling}return[]},focusableChildren(h){const a=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(a,h).filter(e=>!e1(e)&&P1(e))},getSelectorFromElement(h){const a=T2(h);return a&&M.findOne(a)?a:null},getElementFromSelector(h){const a=T2(h);return a?M.findOne(a):null},getMultipleElementsFromSelector(h){const a=T2(h);return a?M.find(a):[]}},m2=(h,a="hide")=>{const e=`click.dismiss${h.EVENT_KEY}`,s=h.NAME;i.on(document,e,`[data-bs-dismiss="${s}"]`,function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),e1(this))return;const c=M.getElementFromSelector(this)||this.closest(`.${s}`);h.getOrCreateInstance(c)[a]()})},Fn="alert",qn="bs.alert",ys=`.${qn}`,Un=`close${ys}`,Wn=`closed${ys}`,Kn="fade",Gn="show";class x2 extends U{static get NAME(){return Fn}close(){if(i.trigger(this._element,Un).defaultPrevented)return;this._element.classList.remove(Gn);const e=this._element.classList.contains(Kn);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),i.trigger(this._element,Wn),this.dispose()}static jQueryInterface(a){return this.each(function(){const e=x2.getOrCreateInstance(this);if(typeof a=="string"){if(e[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);e[a](this)}})}}m2(x2,"close");z(x2);const jn="button",Yn="bs.button",Xn=`.${Yn}`,Qn=".data-api",Jn="active",Nt='[data-bs-toggle="button"]',tc=`click${Xn}${Qn}`;class f2 extends U{static get NAME(){return jn}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Jn))}static jQueryInterface(a){return this.each(function(){const e=f2.getOrCreateInstance(this);a==="toggle"&&e[a]()})}}i.on(document,tc,Nt,h=>{h.preventDefault();const a=h.target.closest(Nt);f2.getOrCreateInstance(a).toggle()});z(f2);const ac="swipe",N1=".bs.swipe",ec=`touchstart${N1}`,hc=`touchmove${N1}`,sc=`touchend${N1}`,nc=`pointerdown${N1}`,cc=`pointerup${N1}`,dc="touch",rc="pen",ic="pointer-event",oc=40,pc={endCallback:null,leftCallback:null,rightCallback:null},lc={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class M2 extends W1{constructor(a,e){super(),this._element=a,!(!a||!M2.isSupported())&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return pc}static get DefaultType(){return lc}static get NAME(){return ac}dispose(){i.off(this._element,N1)}_start(a){if(!this._supportPointerEvents){this._deltaX=a.touches[0].clientX;return}this._eventIsPointerPenTouch(a)&&(this._deltaX=a.clientX)}_end(a){this._eventIsPointerPenTouch(a)&&(this._deltaX=a.clientX-this._deltaX),this._handleSwipe(),P(this._config.endCallback)}_move(a){this._deltaX=a.touches&&a.touches.length>1?0:a.touches[0].clientX-this._deltaX}_handleSwipe(){const a=Math.abs(this._deltaX);if(a<=oc)return;const e=a/this._deltaX;this._deltaX=0,e&&P(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(i.on(this._element,nc,a=>this._start(a)),i.on(this._element,cc,a=>this._end(a)),this._element.classList.add(ic)):(i.on(this._element,ec,a=>this._start(a)),i.on(this._element,hc,a=>this._move(a)),i.on(this._element,sc,a=>this._end(a)))}_eventIsPointerPenTouch(a){return this._supportPointerEvents&&(a.pointerType===rc||a.pointerType===dc)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Mc="carousel",vc="bs.carousel",n1=`.${vc}`,ms=".data-api",gc="ArrowLeft",uc="ArrowRight",yc=500,$1="next",f1="prev",w1="left",i2="right",mc=`slide${n1}`,O2=`slid${n1}`,xc=`keydown${n1}`,fc=`mouseenter${n1}`,_c=`mouseleave${n1}`,Ac=`dragstart${n1}`,wc=`load${n1}${ms}`,Cc=`click${n1}${ms}`,xs="carousel",a2="active",Hc="slide",Ec="carousel-item-end",Vc="carousel-item-start",Lc="carousel-item-next",bc="carousel-item-prev",fs=".active",_s=".carousel-item",Sc=fs+_s,Tc=".carousel-item img",Oc=".carousel-indicators",Dc="[data-bs-slide], [data-bs-slide-to]",Pc='[data-bs-ride="carousel"]',Nc={[gc]:i2,[uc]:w1},kc={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Rc={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class K1 extends U{constructor(a,e){super(a,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=M.findOne(Oc,this._element),this._addEventListeners(),this._config.ride===xs&&this.cycle()}static get Default(){return kc}static get DefaultType(){return Rc}static get NAME(){return Mc}next(){this._slide($1)}nextWhenVisible(){!document.hidden&&P1(this._element)&&this.next()}prev(){this._slide(f1)}pause(){this._isSliding&&ds(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){i.one(this._element,O2,()=>this.cycle());return}this.cycle()}}to(a){const e=this._getItems();if(a>e.length-1||a<0)return;if(this._isSliding){i.one(this._element,O2,()=>this.to(a));return}const s=this._getItemIndex(this._getActive());if(s===a)return;const n=a>s?$1:f1;this._slide(n,e[a])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(a){return a.defaultInterval=a.interval,a}_addEventListeners(){this._config.keyboard&&i.on(this._element,xc,a=>this._keydown(a)),this._config.pause==="hover"&&(i.on(this._element,fc,()=>this.pause()),i.on(this._element,_c,()=>this._maybeEnableCycle())),this._config.touch&&M2.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of M.find(Tc,this._element))i.on(s,Ac,n=>n.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(w1)),rightCallback:()=>this._slide(this._directionToOrder(i2)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),yc+this._config.interval))}};this._swipeHelper=new M2(this._element,e)}_keydown(a){if(/input|textarea/i.test(a.target.tagName))return;const e=Nc[a.key];e&&(a.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(a){return this._getItems().indexOf(a)}_setActiveIndicatorElement(a){if(!this._indicatorsElement)return;const e=M.findOne(fs,this._indicatorsElement);e.classList.remove(a2),e.removeAttribute("aria-current");const s=M.findOne(`[data-bs-slide-to="${a}"]`,this._indicatorsElement);s&&(s.classList.add(a2),s.setAttribute("aria-current","true"))}_updateInterval(){const a=this._activeElement||this._getActive();if(!a)return;const e=Number.parseInt(a.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(a,e=null){if(this._isSliding)return;const s=this._getActive(),n=a===$1,c=e||ot(this._getItems(),s,n,this._config.wrap);if(c===s)return;const d=this._getItemIndex(c),r=v=>i.trigger(this._element,v,{relatedTarget:c,direction:this._orderToDirection(a),from:this._getItemIndex(s),to:d});if(r(mc).defaultPrevented||!s||!c)return;const l=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(d),this._activeElement=c;const p=n?Vc:Ec,g=n?Lc:bc;c.classList.add(g),U1(c),s.classList.add(p),c.classList.add(p);const u=()=>{c.classList.remove(p,g),c.classList.add(a2),s.classList.remove(a2,g,p),this._isSliding=!1,r(O2)};this._queueCallback(u,s,this._isAnimated()),l&&this.cycle()}_isAnimated(){return this._element.classList.contains(Hc)}_getActive(){return M.findOne(Sc,this._element)}_getItems(){return M.find(_s,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(a){return Z()?a===w1?f1:$1:a===w1?$1:f1}_orderToDirection(a){return Z()?a===f1?w1:i2:a===f1?i2:w1}static jQueryInterface(a){return this.each(function(){const e=K1.getOrCreateInstance(this,a);if(typeof a=="number"){e.to(a);return}if(typeof a=="string"){if(e[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);e[a]()}})}}i.on(document,Cc,Dc,function(h){const a=M.getElementFromSelector(this);if(!a||!a.classList.contains(xs))return;h.preventDefault();const e=K1.getOrCreateInstance(a),s=this.getAttribute("data-bs-slide-to");if(s){e.to(s),e._maybeEnableCycle();return}if(Y.getDataAttribute(this,"slide")==="next"){e.next(),e._maybeEnableCycle();return}e.prev(),e._maybeEnableCycle()});i.on(window,wc,()=>{const h=M.find(Pc);for(const a of h)K1.getOrCreateInstance(a)});z(K1);const Ic="collapse",$c="bs.collapse",G1=`.${$c}`,Zc=".data-api",Bc=`show${G1}`,zc=`shown${G1}`,Fc=`hide${G1}`,qc=`hidden${G1}`,Uc=`click${G1}${Zc}`,D2="show",H1="collapse",e2="collapsing",Wc="collapsed",Kc=`:scope .${H1} .${H1}`,Gc="collapse-horizontal",jc="width",Yc="height",Xc=".collapse.show, .collapse.collapsing",j2='[data-bs-toggle="collapse"]',Qc={parent:null,toggle:!0},Jc={parent:"(null|element)",toggle:"boolean"};class F1 extends U{constructor(a,e){super(a,e),this._isTransitioning=!1,this._triggerArray=[];const s=M.find(j2);for(const n of s){const c=M.getSelectorFromElement(n),d=M.find(c).filter(r=>r===this._element);c!==null&&d.length&&this._triggerArray.push(n)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Qc}static get DefaultType(){return Jc}static get NAME(){return Ic}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let a=[];if(this._config.parent&&(a=this._getFirstLevelChildren(Xc).filter(r=>r!==this._element).map(r=>F1.getOrCreateInstance(r,{toggle:!1}))),a.length&&a[0]._isTransitioning||i.trigger(this._element,Bc).defaultPrevented)return;for(const r of a)r.hide();const s=this._getDimension();this._element.classList.remove(H1),this._element.classList.add(e2),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(e2),this._element.classList.add(H1,D2),this._element.style[s]="",i.trigger(this._element,zc)},d=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(n,this._element,!0),this._element.style[s]=`${this._element[d]}px`}hide(){if(this._isTransitioning||!this._isShown()||i.trigger(this._element,Fc).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,U1(this._element),this._element.classList.add(e2),this._element.classList.remove(H1,D2);for(const n of this._triggerArray){const c=M.getElementFromSelector(n);c&&!this._isShown(c)&&this._addAriaAndCollapsedClass([n],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(e2),this._element.classList.add(H1),i.trigger(this._element,qc)};this._element.style[e]="",this._queueCallback(s,this._element,!0)}_isShown(a=this._element){return a.classList.contains(D2)}_configAfterMerge(a){return a.toggle=!!a.toggle,a.parent=a1(a.parent),a}_getDimension(){return this._element.classList.contains(Gc)?jc:Yc}_initializeChildren(){if(!this._config.parent)return;const a=this._getFirstLevelChildren(j2);for(const e of a){const s=M.getElementFromSelector(e);s&&this._addAriaAndCollapsedClass([e],this._isShown(s))}}_getFirstLevelChildren(a){const e=M.find(Kc,this._config.parent);return M.find(a,this._config.parent).filter(s=>!e.includes(s))}_addAriaAndCollapsedClass(a,e){if(a.length)for(const s of a)s.classList.toggle(Wc,!e),s.setAttribute("aria-expanded",e)}static jQueryInterface(a){const e={};return typeof a=="string"&&/show|hide/.test(a)&&(e.toggle=!1),this.each(function(){const s=F1.getOrCreateInstance(this,e);if(typeof a=="string"){if(typeof s[a]>"u")throw new TypeError(`No method named "${a}"`);s[a]()}})}}i.on(document,Uc,j2,function(h){(h.target.tagName==="A"||h.delegateTarget&&h.delegateTarget.tagName==="A")&&h.preventDefault();for(const a of M.getMultipleElementsFromSelector(this))F1.getOrCreateInstance(a,{toggle:!1}).toggle()});z(F1);const kt="dropdown",td="bs.dropdown",y1=`.${td}`,lt=".data-api",ad="Escape",Rt="Tab",ed="ArrowUp",It="ArrowDown",hd=2,sd=`hide${y1}`,nd=`hidden${y1}`,cd=`show${y1}`,dd=`shown${y1}`,As=`click${y1}${lt}`,ws=`keydown${y1}${lt}`,rd=`keyup${y1}${lt}`,C1="show",id="dropup",od="dropend",pd="dropstart",ld="dropup-center",Md="dropdown-center",l1='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',vd=`${l1}.${C1}`,o2=".dropdown-menu",gd=".navbar",ud=".navbar-nav",yd=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",md=Z()?"top-end":"top-start",xd=Z()?"top-start":"top-end",fd=Z()?"bottom-end":"bottom-start",_d=Z()?"bottom-start":"bottom-end",Ad=Z()?"left-start":"right-start",wd=Z()?"right-start":"left-start",Cd="top",Hd="bottom",Ed={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Vd={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class K extends U{constructor(a,e){super(a,e),this._popper=null,this._parent=this._element.parentNode,this._menu=M.next(this._element,o2)[0]||M.prev(this._element,o2)[0]||M.findOne(o2,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Ed}static get DefaultType(){return Vd}static get NAME(){return kt}toggle(){return this._isShown()?this.hide():this.show()}show(){if(e1(this._element)||this._isShown())return;const a={relatedTarget:this._element};if(!i.trigger(this._element,cd,a).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(ud))for(const s of[].concat(...document.body.children))i.on(s,"mouseover",l2);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(C1),this._element.classList.add(C1),i.trigger(this._element,dd,a)}}hide(){if(e1(this._element)||!this._isShown())return;const a={relatedTarget:this._element};this._completeHide(a)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(a){if(!i.trigger(this._element,sd,a).defaultPrevented){if("ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))i.off(s,"mouseover",l2);this._popper&&this._popper.destroy(),this._menu.classList.remove(C1),this._element.classList.remove(C1),this._element.setAttribute("aria-expanded","false"),Y.removeDataAttribute(this._menu,"popper"),i.trigger(this._element,nd,a)}}_getConfig(a){if(a=super._getConfig(a),typeof a.reference=="object"&&!j(a.reference)&&typeof a.reference.getBoundingClientRect!="function")throw new TypeError(`${kt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return a}_createPopper(){if(typeof ns>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let a=this._element;this._config.reference==="parent"?a=this._parent:j(this._config.reference)?a=a1(this._config.reference):typeof this._config.reference=="object"&&(a=this._config.reference);const e=this._getPopperConfig();this._popper=it(a,this._menu,e)}_isShown(){return this._menu.classList.contains(C1)}_getPlacement(){const a=this._parent;if(a.classList.contains(od))return Ad;if(a.classList.contains(pd))return wd;if(a.classList.contains(ld))return Cd;if(a.classList.contains(Md))return Hd;const e=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return a.classList.contains(id)?e?xd:md:e?_d:fd}_detectNavbar(){return this._element.closest(gd)!==null}_getOffset(){const{offset:a}=this._config;return typeof a=="string"?a.split(",").map(e=>Number.parseInt(e,10)):typeof a=="function"?e=>a(e,this._element):a}_getPopperConfig(){const a={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Y.setDataAttribute(this._menu,"popper","static"),a.modifiers=[{name:"applyStyles",enabled:!1}]),{...a,...P(this._config.popperConfig,[a])}}_selectMenuItem({key:a,target:e}){const s=M.find(yd,this._menu).filter(n=>P1(n));s.length&&ot(s,e,a===It,!s.includes(e)).focus()}static jQueryInterface(a){return this.each(function(){const e=K.getOrCreateInstance(this,a);if(typeof a=="string"){if(typeof e[a]>"u")throw new TypeError(`No method named "${a}"`);e[a]()}})}static clearMenus(a){if(a.button===hd||a.type==="keyup"&&a.key!==Rt)return;const e=M.find(vd);for(const s of e){const n=K.getInstance(s);if(!n||n._config.autoClose===!1)continue;const c=a.composedPath(),d=c.includes(n._menu);if(c.includes(n._element)||n._config.autoClose==="inside"&&!d||n._config.autoClose==="outside"&&d||n._menu.contains(a.target)&&(a.type==="keyup"&&a.key===Rt||/input|select|option|textarea|form/i.test(a.target.tagName)))continue;const r={relatedTarget:n._element};a.type==="click"&&(r.clickEvent=a),n._completeHide(r)}}static dataApiKeydownHandler(a){const e=/input|textarea/i.test(a.target.tagName),s=a.key===ad,n=[ed,It].includes(a.key);if(!n&&!s||e&&!s)return;a.preventDefault();const c=this.matches(l1)?this:M.prev(this,l1)[0]||M.next(this,l1)[0]||M.findOne(l1,a.delegateTarget.parentNode),d=K.getOrCreateInstance(c);if(n){a.stopPropagation(),d.show(),d._selectMenuItem(a);return}d._isShown()&&(a.stopPropagation(),d.hide(),c.focus())}}i.on(document,ws,l1,K.dataApiKeydownHandler);i.on(document,ws,o2,K.dataApiKeydownHandler);i.on(document,As,K.clearMenus);i.on(document,rd,K.clearMenus);i.on(document,As,l1,function(h){h.preventDefault(),K.getOrCreateInstance(this).toggle()});z(K);const Cs="backdrop",Ld="fade",$t="show",Zt=`mousedown.bs.${Cs}`,bd={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Sd={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Hs extends W1{constructor(a){super(),this._config=this._getConfig(a),this._isAppended=!1,this._element=null}static get Default(){return bd}static get DefaultType(){return Sd}static get NAME(){return Cs}show(a){if(!this._config.isVisible){P(a);return}this._append();const e=this._getElement();this._config.isAnimated&&U1(e),e.classList.add($t),this._emulateAnimation(()=>{P(a)})}hide(a){if(!this._config.isVisible){P(a);return}this._getElement().classList.remove($t),this._emulateAnimation(()=>{this.dispose(),P(a)})}dispose(){this._isAppended&&(i.off(this._element,Zt),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const a=document.createElement("div");a.className=this._config.className,this._config.isAnimated&&a.classList.add(Ld),this._element=a}return this._element}_configAfterMerge(a){return a.rootElement=a1(a.rootElement),a}_append(){if(this._isAppended)return;const a=this._getElement();this._config.rootElement.append(a),i.on(a,Zt,()=>{P(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(a){os(a,this._getElement(),this._config.isAnimated)}}const Td="focustrap",Od="bs.focustrap",v2=`.${Od}`,Dd=`focusin${v2}`,Pd=`keydown.tab${v2}`,Nd="Tab",kd="forward",Bt="backward",Rd={autofocus:!0,trapElement:null},Id={autofocus:"boolean",trapElement:"element"};class Es extends W1{constructor(a){super(),this._config=this._getConfig(a),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Rd}static get DefaultType(){return Id}static get NAME(){return Td}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),i.off(document,v2),i.on(document,Dd,a=>this._handleFocusin(a)),i.on(document,Pd,a=>this._handleKeydown(a)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,i.off(document,v2))}_handleFocusin(a){const{trapElement:e}=this._config;if(a.target===document||a.target===e||e.contains(a.target))return;const s=M.focusableChildren(e);s.length===0?e.focus():this._lastTabNavDirection===Bt?s[s.length-1].focus():s[0].focus()}_handleKeydown(a){a.key===Nd&&(this._lastTabNavDirection=a.shiftKey?Bt:kd)}}const zt=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ft=".sticky-top",h2="padding-right",qt="margin-right";class Y2{constructor(){this._element=document.body}getWidth(){const a=document.documentElement.clientWidth;return Math.abs(window.innerWidth-a)}hide(){const a=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,h2,e=>e+a),this._setElementAttributes(zt,h2,e=>e+a),this._setElementAttributes(Ft,qt,e=>e-a)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,h2),this._resetElementAttributes(zt,h2),this._resetElementAttributes(Ft,qt)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(a,e,s){const n=this.getWidth(),c=d=>{if(d!==this._element&&window.innerWidth>d.clientWidth+n)return;this._saveInitialAttribute(d,e);const r=window.getComputedStyle(d).getPropertyValue(e);d.style.setProperty(e,`${s(Number.parseFloat(r))}px`)};this._applyManipulationCallback(a,c)}_saveInitialAttribute(a,e){const s=a.style.getPropertyValue(e);s&&Y.setDataAttribute(a,e,s)}_resetElementAttributes(a,e){const s=n=>{const c=Y.getDataAttribute(n,e);if(c===null){n.style.removeProperty(e);return}Y.removeDataAttribute(n,e),n.style.setProperty(e,c)};this._applyManipulationCallback(a,s)}_applyManipulationCallback(a,e){if(j(a)){e(a);return}for(const s of M.find(a,this._element))e(s)}}const $d="modal",Zd="bs.modal",B=`.${Zd}`,Bd=".data-api",zd="Escape",Fd=`hide${B}`,qd=`hidePrevented${B}`,Vs=`hidden${B}`,Ls=`show${B}`,Ud=`shown${B}`,Wd=`resize${B}`,Kd=`click.dismiss${B}`,Gd=`mousedown.dismiss${B}`,jd=`keydown.dismiss${B}`,Yd=`click${B}${Bd}`,Ut="modal-open",Xd="fade",Wt="show",P2="modal-static",Qd=".modal.show",Jd=".modal-dialog",tr=".modal-body",ar='[data-bs-toggle="modal"]',er={backdrop:!0,focus:!0,keyboard:!0},hr={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class T1 extends U{constructor(a,e){super(a,e),this._dialog=M.findOne(Jd,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Y2,this._addEventListeners()}static get Default(){return er}static get DefaultType(){return hr}static get NAME(){return $d}toggle(a){return this._isShown?this.hide():this.show(a)}show(a){this._isShown||this._isTransitioning||i.trigger(this._element,Ls,{relatedTarget:a}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Ut),this._adjustDialog(),this._backdrop.show(()=>this._showElement(a)))}hide(){!this._isShown||this._isTransitioning||i.trigger(this._element,Fd).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Wt),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){i.off(window,B),i.off(this._dialog,B),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Hs({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Es({trapElement:this._element})}_showElement(a){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=M.findOne(tr,this._dialog);e&&(e.scrollTop=0),U1(this._element),this._element.classList.add(Wt);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,i.trigger(this._element,Ud,{relatedTarget:a})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){i.on(this._element,jd,a=>{if(a.key===zd){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),i.on(window,Wd,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),i.on(this._element,Gd,a=>{i.one(this._element,Kd,e=>{if(!(this._element!==a.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Ut),this._resetAdjustments(),this._scrollBar.reset(),i.trigger(this._element,Vs)})}_isAnimated(){return this._element.classList.contains(Xd)}_triggerBackdropTransition(){if(i.trigger(this._element,qd).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==="hidden"||this._element.classList.contains(P2)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(P2),this._queueCallback(()=>{this._element.classList.remove(P2),this._queueCallback(()=>{this._element.style.overflowY=s},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const a=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),s=e>0;if(s&&!a){const n=Z()?"paddingLeft":"paddingRight";this._element.style[n]=`${e}px`}if(!s&&a){const n=Z()?"paddingRight":"paddingLeft";this._element.style[n]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(a,e){return this.each(function(){const s=T1.getOrCreateInstance(this,a);if(typeof a=="string"){if(typeof s[a]>"u")throw new TypeError(`No method named "${a}"`);s[a](e)}})}}i.on(document,Yd,ar,function(h){const a=M.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&h.preventDefault(),i.one(a,Ls,n=>{n.defaultPrevented||i.one(a,Vs,()=>{P1(this)&&this.focus()})});const e=M.findOne(Qd);e&&T1.getInstance(e).hide(),T1.getOrCreateInstance(a).toggle(this)});m2(T1);z(T1);const sr="offcanvas",nr="bs.offcanvas",Q=`.${nr}`,bs=".data-api",cr=`load${Q}${bs}`,dr="Escape",Kt="show",Gt="showing",jt="hiding",rr="offcanvas-backdrop",Ss=".offcanvas.show",ir=`show${Q}`,or=`shown${Q}`,pr=`hide${Q}`,Yt=`hidePrevented${Q}`,Ts=`hidden${Q}`,lr=`resize${Q}`,Mr=`click${Q}${bs}`,vr=`keydown.dismiss${Q}`,gr='[data-bs-toggle="offcanvas"]',ur={backdrop:!0,keyboard:!0,scroll:!1},yr={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class h1 extends U{constructor(a,e){super(a,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return ur}static get DefaultType(){return yr}static get NAME(){return sr}toggle(a){return this._isShown?this.hide():this.show(a)}show(a){if(this._isShown||i.trigger(this._element,ir,{relatedTarget:a}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Y2().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Gt);const s=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Kt),this._element.classList.remove(Gt),i.trigger(this._element,or,{relatedTarget:a})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown||i.trigger(this._element,pr).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(jt),this._backdrop.hide();const e=()=>{this._element.classList.remove(Kt,jt),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Y2().reset(),i.trigger(this._element,Ts)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const a=()=>{if(this._config.backdrop==="static"){i.trigger(this._element,Yt);return}this.hide()},e=!!this._config.backdrop;return new Hs({className:rr,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?a:null})}_initializeFocusTrap(){return new Es({trapElement:this._element})}_addEventListeners(){i.on(this._element,vr,a=>{if(a.key===dr){if(this._config.keyboard){this.hide();return}i.trigger(this._element,Yt)}})}static jQueryInterface(a){return this.each(function(){const e=h1.getOrCreateInstance(this,a);if(typeof a=="string"){if(e[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);e[a](this)}})}}i.on(document,Mr,gr,function(h){const a=M.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&h.preventDefault(),e1(this))return;i.one(a,Ts,()=>{P1(this)&&this.focus()});const e=M.findOne(Ss);e&&e!==a&&h1.getInstance(e).hide(),h1.getOrCreateInstance(a).toggle(this)});i.on(window,cr,()=>{for(const h of M.find(Ss))h1.getOrCreateInstance(h).show()});i.on(window,lr,()=>{for(const h of M.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(h).position!=="fixed"&&h1.getOrCreateInstance(h).hide()});m2(h1);z(h1);const mr=/^aria-[\w-]*$/i,Os={"*":["class","dir","id","lang","role",mr],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},xr=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),fr=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,_r=(h,a)=>{const e=h.nodeName.toLowerCase();return a.includes(e)?xr.has(e)?!!fr.test(h.nodeValue):!0:a.filter(s=>s instanceof RegExp).some(s=>s.test(e))};function Ar(h,a,e){if(!h.length)return h;if(e&&typeof e=="function")return e(h);const n=new window.DOMParser().parseFromString(h,"text/html"),c=[].concat(...n.body.querySelectorAll("*"));for(const d of c){const r=d.nodeName.toLowerCase();if(!Object.keys(a).includes(r)){d.remove();continue}const o=[].concat(...d.attributes),l=[].concat(a["*"]||[],a[r]||[]);for(const p of o)_r(p,l)||d.removeAttribute(p.nodeName)}return n.body.innerHTML}const wr="TemplateFactory",Cr={allowList:Os,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Hr={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Er={entry:"(string|element|function|null)",selector:"(string|element)"};class Vr extends W1{constructor(a){super(),this._config=this._getConfig(a)}static get Default(){return Cr}static get DefaultType(){return Hr}static get NAME(){return wr}getContent(){return Object.values(this._config.content).map(a=>this._resolvePossibleFunction(a)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(a){return this._checkContent(a),this._config.content={...this._config.content,...a},this}toHtml(){const a=document.createElement("div");a.innerHTML=this._maybeSanitize(this._config.template);for(const[n,c]of Object.entries(this._config.content))this._setContent(a,c,n);const e=a.children[0],s=this._resolvePossibleFunction(this._config.extraClass);return s&&e.classList.add(...s.split(" ")),e}_typeCheckConfig(a){super._typeCheckConfig(a),this._checkContent(a.content)}_checkContent(a){for(const[e,s]of Object.entries(a))super._typeCheckConfig({selector:e,entry:s},Er)}_setContent(a,e,s){const n=M.findOne(s,a);if(n){if(e=this._resolvePossibleFunction(e),!e){n.remove();return}if(j(e)){this._putElementInTemplate(a1(e),n);return}if(this._config.html){n.innerHTML=this._maybeSanitize(e);return}n.textContent=e}}_maybeSanitize(a){return this._config.sanitize?Ar(a,this._config.allowList,this._config.sanitizeFn):a}_resolvePossibleFunction(a){return P(a,[this])}_putElementInTemplate(a,e){if(this._config.html){e.innerHTML="",e.append(a);return}e.textContent=a.textContent}}const Lr="tooltip",br=new Set(["sanitize","allowList","sanitizeFn"]),N2="fade",Sr="modal",s2="show",Tr=".tooltip-inner",Xt=`.${Sr}`,Qt="hide.bs.modal",Z1="hover",k2="focus",Or="click",Dr="manual",Pr="hide",Nr="hidden",kr="show",Rr="shown",Ir="inserted",$r="click",Zr="focusin",Br="focusout",zr="mouseenter",Fr="mouseleave",qr={AUTO:"auto",TOP:"top",RIGHT:Z()?"left":"right",BOTTOM:"bottom",LEFT:Z()?"right":"left"},Ur={allowList:Os,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Wr={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class k1 extends U{constructor(a,e){if(typeof ns>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(a,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Ur}static get DefaultType(){return Wr}static get NAME(){return Lr}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),i.off(this._element.closest(Xt),Qt,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const a=i.trigger(this._element,this.constructor.eventName(kr)),s=(rs(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(a.defaultPrevented||!s)return;this._disposePopper();const n=this._getTipElement();this._element.setAttribute("aria-describedby",n.getAttribute("id"));const{container:c}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(c.append(n),i.trigger(this._element,this.constructor.eventName(Ir))),this._popper=this._createPopper(n),n.classList.add(s2),"ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))i.on(r,"mouseover",l2);const d=()=>{i.trigger(this._element,this.constructor.eventName(Rr)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(d,this.tip,this._isAnimated())}hide(){if(!this._isShown()||i.trigger(this._element,this.constructor.eventName(Pr)).defaultPrevented)return;if(this._getTipElement().classList.remove(s2),"ontouchstart"in document.documentElement)for(const n of[].concat(...document.body.children))i.off(n,"mouseover",l2);this._activeTrigger[Or]=!1,this._activeTrigger[k2]=!1,this._activeTrigger[Z1]=!1,this._isHovered=null;const s=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),i.trigger(this._element,this.constructor.eventName(Nr)))};this._queueCallback(s,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(a){const e=this._getTemplateFactory(a).toHtml();if(!e)return null;e.classList.remove(N2,s2),e.classList.add(`bs-${this.constructor.NAME}-auto`);const s=On(this.constructor.NAME).toString();return e.setAttribute("id",s),this._isAnimated()&&e.classList.add(N2),e}setContent(a){this._newContent=a,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(a){return this._templateFactory?this._templateFactory.changeContent(a):this._templateFactory=new Vr({...this._config,content:a,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Tr]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(a){return this.constructor.getOrCreateInstance(a.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(N2)}_isShown(){return this.tip&&this.tip.classList.contains(s2)}_createPopper(a){const e=P(this._config.placement,[this,a,this._element]),s=qr[e.toUpperCase()];return it(this._element,a,this._getPopperConfig(s))}_getOffset(){const{offset:a}=this._config;return typeof a=="string"?a.split(",").map(e=>Number.parseInt(e,10)):typeof a=="function"?e=>a(e,this._element):a}_resolvePossibleFunction(a){return P(a,[this._element])}_getPopperConfig(a){const e={placement:a,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:s=>{this._getTipElement().setAttribute("data-popper-placement",s.state.placement)}}]};return{...e,...P(this._config.popperConfig,[e])}}_setListeners(){const a=this._config.trigger.split(" ");for(const e of a)if(e==="click")i.on(this._element,this.constructor.eventName($r),this._config.selector,s=>{this._initializeOnDelegatedTarget(s).toggle()});else if(e!==Dr){const s=e===Z1?this.constructor.eventName(zr):this.constructor.eventName(Zr),n=e===Z1?this.constructor.eventName(Fr):this.constructor.eventName(Br);i.on(this._element,s,this._config.selector,c=>{const d=this._initializeOnDelegatedTarget(c);d._activeTrigger[c.type==="focusin"?k2:Z1]=!0,d._enter()}),i.on(this._element,n,this._config.selector,c=>{const d=this._initializeOnDelegatedTarget(c);d._activeTrigger[c.type==="focusout"?k2:Z1]=d._element.contains(c.relatedTarget),d._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},i.on(this._element.closest(Xt),Qt,this._hideModalHandler)}_fixTitle(){const a=this._element.getAttribute("title");a&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",a),this._element.setAttribute("data-bs-original-title",a),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(a,e){clearTimeout(this._timeout),this._timeout=setTimeout(a,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(a){const e=Y.getDataAttributes(this._element);for(const s of Object.keys(e))br.has(s)&&delete e[s];return a={...e,...typeof a=="object"&&a?a:{}},a=this._mergeConfigObj(a),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}_configAfterMerge(a){return a.container=a.container===!1?document.body:a1(a.container),typeof a.delay=="number"&&(a.delay={show:a.delay,hide:a.delay}),typeof a.title=="number"&&(a.title=a.title.toString()),typeof a.content=="number"&&(a.content=a.content.toString()),a}_getDelegateConfig(){const a={};for(const[e,s]of Object.entries(this._config))this.constructor.Default[e]!==s&&(a[e]=s);return a.selector=!1,a.trigger="manual",a}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(a){return this.each(function(){const e=k1.getOrCreateInstance(this,a);if(typeof a=="string"){if(typeof e[a]>"u")throw new TypeError(`No method named "${a}"`);e[a]()}})}}z(k1);const Kr="popover",Gr=".popover-header",jr=".popover-body",Yr={...k1.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Xr={...k1.DefaultType,content:"(null|string|element|function)"};class Mt extends k1{static get Default(){return Yr}static get DefaultType(){return Xr}static get NAME(){return Kr}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Gr]:this._getTitle(),[jr]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(a){return this.each(function(){const e=Mt.getOrCreateInstance(this,a);if(typeof a=="string"){if(typeof e[a]>"u")throw new TypeError(`No method named "${a}"`);e[a]()}})}}z(Mt);const Qr="scrollspy",Jr="bs.scrollspy",vt=`.${Jr}`,ti=".data-api",ai=`activate${vt}`,Jt=`click${vt}`,ei=`load${vt}${ti}`,hi="dropdown-item",_1="active",si='[data-bs-spy="scroll"]',R2="[href]",ni=".nav, .list-group",t0=".nav-link",ci=".nav-item",di=".list-group-item",ri=`${t0}, ${ci} > ${t0}, ${di}`,ii=".dropdown",oi=".dropdown-toggle",pi={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},li={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class _2 extends U{constructor(a,e){super(a,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return pi}static get DefaultType(){return li}static get NAME(){return Qr}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const a of this._observableSections.values())this._observer.observe(a)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(a){return a.target=a1(a.target)||document.body,a.rootMargin=a.offset?`${a.offset}px 0px -30%`:a.rootMargin,typeof a.threshold=="string"&&(a.threshold=a.threshold.split(",").map(e=>Number.parseFloat(e))),a}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(i.off(this._config.target,Jt),i.on(this._config.target,Jt,R2,a=>{const e=this._observableSections.get(a.target.hash);if(e){a.preventDefault();const s=this._rootElement||window,n=e.offsetTop-this._element.offsetTop;if(s.scrollTo){s.scrollTo({top:n,behavior:"smooth"});return}s.scrollTop=n}}))}_getNewObserver(){const a={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),a)}_observerCallback(a){const e=d=>this._targetLinks.get(`#${d.target.id}`),s=d=>{this._previousScrollData.visibleEntryTop=d.target.offsetTop,this._process(e(d))},n=(this._rootElement||document.documentElement).scrollTop,c=n>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=n;for(const d of a){if(!d.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(d));continue}const r=d.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(c&&r){if(s(d),!n)return;continue}!c&&!r&&s(d)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const a=M.find(R2,this._config.target);for(const e of a){if(!e.hash||e1(e))continue;const s=M.findOne(decodeURI(e.hash),this._element);P1(s)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,s))}}_process(a){this._activeTarget!==a&&(this._clearActiveClass(this._config.target),this._activeTarget=a,a.classList.add(_1),this._activateParents(a),i.trigger(this._element,ai,{relatedTarget:a}))}_activateParents(a){if(a.classList.contains(hi)){M.findOne(oi,a.closest(ii)).classList.add(_1);return}for(const e of M.parents(a,ni))for(const s of M.prev(e,ri))s.classList.add(_1)}_clearActiveClass(a){a.classList.remove(_1);const e=M.find(`${R2}.${_1}`,a);for(const s of e)s.classList.remove(_1)}static jQueryInterface(a){return this.each(function(){const e=_2.getOrCreateInstance(this,a);if(typeof a=="string"){if(e[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);e[a]()}})}}i.on(window,ei,()=>{for(const h of M.find(si))_2.getOrCreateInstance(h)});z(_2);const Mi="tab",vi="bs.tab",m1=`.${vi}`,gi=`hide${m1}`,ui=`hidden${m1}`,yi=`show${m1}`,mi=`shown${m1}`,xi=`click${m1}`,fi=`keydown${m1}`,_i=`load${m1}`,Ai="ArrowLeft",a0="ArrowRight",wi="ArrowUp",e0="ArrowDown",I2="Home",h0="End",M1="active",s0="fade",$2="show",Ci="dropdown",Ds=".dropdown-toggle",Hi=".dropdown-menu",Z2=`:not(${Ds})`,Ei='.list-group, .nav, [role="tablist"]',Vi=".nav-item, .list-group-item",Li=`.nav-link${Z2}, .list-group-item${Z2}, [role="tab"]${Z2}`,Ps='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',B2=`${Li}, ${Ps}`,bi=`.${M1}[data-bs-toggle="tab"], .${M1}[data-bs-toggle="pill"], .${M1}[data-bs-toggle="list"]`;class O1 extends U{constructor(a){super(a),this._parent=this._element.closest(Ei),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),i.on(this._element,fi,e=>this._keydown(e)))}static get NAME(){return Mi}show(){const a=this._element;if(this._elemIsActive(a))return;const e=this._getActiveElem(),s=e?i.trigger(e,gi,{relatedTarget:a}):null;i.trigger(a,yi,{relatedTarget:e}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(e,a),this._activate(a,e))}_activate(a,e){if(!a)return;a.classList.add(M1),this._activate(M.getElementFromSelector(a));const s=()=>{if(a.getAttribute("role")!=="tab"){a.classList.add($2);return}a.removeAttribute("tabindex"),a.setAttribute("aria-selected",!0),this._toggleDropDown(a,!0),i.trigger(a,mi,{relatedTarget:e})};this._queueCallback(s,a,a.classList.contains(s0))}_deactivate(a,e){if(!a)return;a.classList.remove(M1),a.blur(),this._deactivate(M.getElementFromSelector(a));const s=()=>{if(a.getAttribute("role")!=="tab"){a.classList.remove($2);return}a.setAttribute("aria-selected",!1),a.setAttribute("tabindex","-1"),this._toggleDropDown(a,!1),i.trigger(a,ui,{relatedTarget:e})};this._queueCallback(s,a,a.classList.contains(s0))}_keydown(a){if(![Ai,a0,wi,e0,I2,h0].includes(a.key))return;a.stopPropagation(),a.preventDefault();const e=this._getChildren().filter(n=>!e1(n));let s;if([I2,h0].includes(a.key))s=e[a.key===I2?0:e.length-1];else{const n=[a0,e0].includes(a.key);s=ot(e,a.target,n,!0)}s&&(s.focus({preventScroll:!0}),O1.getOrCreateInstance(s).show())}_getChildren(){return M.find(B2,this._parent)}_getActiveElem(){return this._getChildren().find(a=>this._elemIsActive(a))||null}_setInitialAttributes(a,e){this._setAttributeIfNotExists(a,"role","tablist");for(const s of e)this._setInitialAttributesOnChild(s)}_setInitialAttributesOnChild(a){a=this._getInnerElement(a);const e=this._elemIsActive(a),s=this._getOuterElement(a);a.setAttribute("aria-selected",e),s!==a&&this._setAttributeIfNotExists(s,"role","presentation"),e||a.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(a,"role","tab"),this._setInitialAttributesOnTargetPanel(a)}_setInitialAttributesOnTargetPanel(a){const e=M.getElementFromSelector(a);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),a.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${a.id}`))}_toggleDropDown(a,e){const s=this._getOuterElement(a);if(!s.classList.contains(Ci))return;const n=(c,d)=>{const r=M.findOne(c,s);r&&r.classList.toggle(d,e)};n(Ds,M1),n(Hi,$2),s.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(a,e,s){a.hasAttribute(e)||a.setAttribute(e,s)}_elemIsActive(a){return a.classList.contains(M1)}_getInnerElement(a){return a.matches(B2)?a:M.findOne(B2,a)}_getOuterElement(a){return a.closest(Vi)||a}static jQueryInterface(a){return this.each(function(){const e=O1.getOrCreateInstance(this);if(typeof a=="string"){if(e[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);e[a]()}})}}i.on(document,xi,Ps,function(h){["A","AREA"].includes(this.tagName)&&h.preventDefault(),!e1(this)&&O1.getOrCreateInstance(this).show()});i.on(window,_i,()=>{for(const h of M.find(bi))O1.getOrCreateInstance(h)});z(O1);const Si="toast",Ti="bs.toast",c1=`.${Ti}`,Oi=`mouseover${c1}`,Di=`mouseout${c1}`,Pi=`focusin${c1}`,Ni=`focusout${c1}`,ki=`hide${c1}`,Ri=`hidden${c1}`,Ii=`show${c1}`,$i=`shown${c1}`,Zi="fade",n0="hide",n2="show",c2="showing",Bi={animation:"boolean",autohide:"boolean",delay:"number"},zi={animation:!0,autohide:!0,delay:5e3};class A2 extends U{constructor(a,e){super(a,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return zi}static get DefaultType(){return Bi}static get NAME(){return Si}show(){if(i.trigger(this._element,Ii).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Zi);const e=()=>{this._element.classList.remove(c2),i.trigger(this._element,$i),this._maybeScheduleHide()};this._element.classList.remove(n0),U1(this._element),this._element.classList.add(n2,c2),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown()||i.trigger(this._element,ki).defaultPrevented)return;const e=()=>{this._element.classList.add(n0),this._element.classList.remove(c2,n2),i.trigger(this._element,Ri)};this._element.classList.add(c2),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(n2),super.dispose()}isShown(){return this._element.classList.contains(n2)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(a,e){switch(a.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=e;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=e;break}}if(e){this._clearTimeout();return}const s=a.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){i.on(this._element,Oi,a=>this._onInteraction(a,!0)),i.on(this._element,Di,a=>this._onInteraction(a,!1)),i.on(this._element,Pi,a=>this._onInteraction(a,!0)),i.on(this._element,Ni,a=>this._onInteraction(a,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(a){return this.each(function(){const e=A2.getOrCreateInstance(this,a);if(typeof a=="string"){if(typeof e[a]>"u")throw new TypeError(`No method named "${a}"`);e[a](this)}})}}m2(A2);z(A2);/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=(h,a,e=[])=>{const s=document.createElementNS("http://www.w3.org/2000/svg",h);return Object.keys(a).forEach(n=>{s.setAttribute(n,String(a[n]))}),e.length&&e.forEach(n=>{const c=Ns(...n);s.appendChild(c)}),s};var Fi=([h,a,e])=>Ns(h,a,e);/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=h=>Array.from(h.attributes).reduce((a,e)=>(a[e.name]=e.value,a),{}),Ui=h=>typeof h=="string"?h:!h||!h.class?"":h.class&&typeof h.class=="string"?h.class.split(" "):h.class&&Array.isArray(h.class)?h.class:"",Wi=h=>h.flatMap(Ui).map(e=>e.trim()).filter(Boolean).filter((e,s,n)=>n.indexOf(e)===s).join(" "),Ki=h=>h.replace(/(\w)(\w*)(_|-|\s*)/g,(a,e,s)=>e.toUpperCase()+s.toLowerCase()),c0=(h,{nameAttr:a,icons:e,attrs:s})=>{var f;const n=h.getAttribute(a);if(n==null)return;const c=Ki(n),d=e[c];if(!d)return console.warn(`${h.outerHTML} icon name was not found in the provided icons object.`);const r=qi(h),[o,l,p]=d,g={...l,"data-lucide":n,...s,...r},u=Wi(["lucide",`lucide-${n}`,r,s]);u&&Object.assign(g,{class:u});const v=Fi([o,g,p]);return(f=h.parentNode)==null?void 0:f.replaceChild(v,h)};/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=["svg",t,[["path",{d:"M3.5 13h6"}],["path",{d:"m2 16 4.5-9 4.5 9"}],["path",{d:"M18 7v9"}],["path",{d:"m14 12 4 4 4-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=["svg",t,[["path",{d:"M3.5 13h6"}],["path",{d:"m2 16 4.5-9 4.5 9"}],["path",{d:"M18 16V7"}],["path",{d:"m14 11 4-4 4 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=["svg",t,[["path",{d:"M21 14h-5"}],["path",{d:"M16 16v-3.5a2.5 2.5 0 0 1 5 0V16"}],["path",{d:"M4.5 13h6"}],["path",{d:"m3 16 4.5-9 4.5 9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=["svg",t,[["circle",{cx:"16",cy:"4",r:"1"}],["path",{d:"m18 19 1-7-6 1"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=["svg",t,[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=["svg",t,[["path",{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 8h12"}],["path",{d:"M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12"}],["path",{d:"M6.6 15.6A2 2 0 1 0 10 17v-5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4=["svg",t,[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"}],["path",{d:"m12 15 5 6H7Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=["svg",t,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"m9 13 2 2 4-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=["svg",t,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"M9 13h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a4=["svg",t,[["path",{d:"M6.87 6.87a8 8 0 1 0 11.26 11.26"}],["path",{d:"M19.9 14.25a8 8 0 0 0-9.15-9.15"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.26 18.67 4 21"}],["path",{d:"m2 2 20 20"}],["path",{d:"M4 4 2 6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=["svg",t,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e4=["svg",t,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M12 9v4l2 2"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=["svg",t,[["path",{d:"M11 21c0-2.5 2-2.5 2-5"}],["path",{d:"M16 21c0-2.5 2-2.5 2-5"}],["path",{d:"m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8"}],["path",{d:"M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z"}],["path",{d:"M6 21c0-2.5 2-2.5 2-5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s4=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["polyline",{points:"11 3 11 11 14 8 17 11 17 3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n4=["svg",t,[["path",{d:"M2 12h20"}],["path",{d:"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"}],["path",{d:"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"}],["path",{d:"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"}],["path",{d:"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4=["svg",t,[["path",{d:"M12 2v20"}],["path",{d:"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"}],["path",{d:"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"}],["path",{d:"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"}],["path",{d:"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4=["svg",t,[["line",{x1:"21",x2:"3",y1:"6",y2:"6"}],["line",{x1:"17",x2:"7",y1:"12",y2:"12"}],["line",{x1:"19",x2:"5",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r4=["svg",t,[["rect",{width:"6",height:"16",x:"4",y:"2",rx:"2"}],["rect",{width:"6",height:"9",x:"14",y:"9",rx:"2"}],["path",{d:"M22 22H2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=["svg",t,[["rect",{width:"16",height:"6",x:"2",y:"4",rx:"2"}],["rect",{width:"9",height:"6",x:"9",y:"14",rx:"2"}],["path",{d:"M22 22V2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o4=["svg",t,[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M17 22v-5"}],["path",{d:"M17 7V2"}],["path",{d:"M7 22v-3"}],["path",{d:"M7 5V2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p4=["svg",t,[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M10 2v20"}],["path",{d:"M20 2v20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l4=["svg",t,[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M4 2v20"}],["path",{d:"M14 2v20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M4=["svg",t,[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2"}],["path",{d:"M12 2v20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=["svg",t,[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"12",y:"7",rx:"2"}],["path",{d:"M22 2v20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g4=["svg",t,[["rect",{width:"6",height:"14",x:"6",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2"}],["path",{d:"M2 2v20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=["svg",t,[["rect",{width:"6",height:"10",x:"9",y:"7",rx:"2"}],["path",{d:"M4 22V2"}],["path",{d:"M20 22V2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4=["svg",t,[["rect",{width:"6",height:"14",x:"3",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"15",y:"7",rx:"2"}],["path",{d:"M3 2v20"}],["path",{d:"M21 2v20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=["svg",t,[["line",{x1:"3",x2:"21",y1:"6",y2:"6"}],["line",{x1:"3",x2:"21",y1:"12",y2:"12"}],["line",{x1:"3",x2:"21",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x4=["svg",t,[["line",{x1:"21",x2:"3",y1:"6",y2:"6"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12"}],["line",{x1:"17",x2:"3",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4=["svg",t,[["line",{x1:"21",x2:"3",y1:"6",y2:"6"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12"}],["line",{x1:"21",x2:"7",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=["svg",t,[["rect",{width:"6",height:"16",x:"4",y:"6",rx:"2"}],["rect",{width:"6",height:"9",x:"14",y:"6",rx:"2"}],["path",{d:"M22 2H2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A4=["svg",t,[["rect",{width:"9",height:"6",x:"6",y:"14",rx:"2"}],["rect",{width:"16",height:"6",x:"6",y:"4",rx:"2"}],["path",{d:"M2 2v20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4=["svg",t,[["path",{d:"M22 17h-3"}],["path",{d:"M22 7h-5"}],["path",{d:"M5 17H2"}],["path",{d:"M7 7H2"}],["rect",{x:"5",y:"14",width:"14",height:"6",rx:"2"}],["rect",{x:"7",y:"4",width:"10",height:"6",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C4=["svg",t,[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2"}],["path",{d:"M2 20h20"}],["path",{d:"M2 10h20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=["svg",t,[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2"}],["path",{d:"M2 14h20"}],["path",{d:"M2 4h20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E4=["svg",t,[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2"}],["path",{d:"M2 12h20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V4=["svg",t,[["rect",{width:"14",height:"6",x:"5",y:"12",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2"}],["path",{d:"M2 22h20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4=["svg",t,[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"6",rx:"2"}],["path",{d:"M2 2h20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b4=["svg",t,[["rect",{width:"10",height:"6",x:"7",y:"9",rx:"2"}],["path",{d:"M22 20H2"}],["path",{d:"M22 4H2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=["svg",t,[["rect",{width:"14",height:"6",x:"5",y:"15",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"3",rx:"2"}],["path",{d:"M2 21h20"}],["path",{d:"M2 3h20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4=["svg",t,[["path",{d:"M10 10H6"}],["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"}],["path",{d:"M8 8v4"}],["path",{d:"M9 18h6"}],["circle",{cx:"17",cy:"18",r:"2"}],["circle",{cx:"7",cy:"18",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4=["svg",t,[["path",{d:"M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"}],["path",{d:"M16 12h3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=["svg",t,[["path",{d:"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"}],["path",{d:"M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=["svg",t,[["path",{d:"M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8"}],["path",{d:"M10 5H8a2 2 0 0 0 0 4h.68"}],["path",{d:"M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8"}],["path",{d:"M14 5h2a2 2 0 0 1 0 4h-.68"}],["path",{d:"M18 22H6"}],["path",{d:"M9 2h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4=["svg",t,[["path",{d:"M12 22V8"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3"}],["circle",{cx:"12",cy:"5",r:"3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k4=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2"}],["path",{d:"M7.5 8 10 9"}],["path",{d:"m14 9 2.5-1"}],["path",{d:"M9 10h.01"}],["path",{d:"M15 10h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 15h8"}],["path",{d:"M8 9h2"}],["path",{d:"M14 9h2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=["svg",t,[["path",{d:"M2 12 7 2"}],["path",{d:"m7 12 5-10"}],["path",{d:"m12 12 5-10"}],["path",{d:"m17 12 5-10"}],["path",{d:"M4.5 7h15"}],["path",{d:"M12 16v6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=["svg",t,[["path",{d:"M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4"}],["path",{d:"M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z"}],["path",{d:"M9 12v5"}],["path",{d:"M15 12v5"}],["path",{d:"M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z4=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m14.31 8 5.74 9.94"}],["path",{d:"M9.69 8h11.48"}],["path",{d:"m7.38 12 5.74-9.94"}],["path",{d:"M9.69 16 3.95 6.06"}],["path",{d:"M14.31 16H2.83"}],["path",{d:"m16.62 12-5.74 9.94"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B4=["svg",t,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 8h.01"}],["path",{d:"M10 8h.01"}],["path",{d:"M14 8h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=["svg",t,[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}],["path",{d:"M10 4v4"}],["path",{d:"M2 8h20"}],["path",{d:"M6 4v4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=["svg",t,[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"}],["path",{d:"M10 2c1 .5 2 2 2 5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q4=["svg",t,[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2"}],["path",{d:"m9 15 3-3 3 3"}],["path",{d:"M12 12v9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=["svg",t,[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"m9.5 17 5-5"}],["path",{d:"m9.5 12 5 5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W4=["svg",t,[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=["svg",t,[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=["svg",t,[["path",{d:"M15 5H9"}],["path",{d:"M15 9v3h4l-7 7-7-7h4V9z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j4=["svg",t,[["path",{d:"M15 6v6h4l-7 7-7-7h4V6h6z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y4=["svg",t,[["path",{d:"M19 15V9"}],["path",{d:"M15 15h-3v4l-7-7 7-7v4h3v6z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=["svg",t,[["path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=["svg",t,[["path",{d:"M5 9v6"}],["path",{d:"M9 9h3V5l7 7-7 7v-4H9V9z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J4=["svg",t,[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=["svg",t,[["path",{d:"M9 19h6"}],["path",{d:"M9 15v-3H5l7-7 7 7h-4v3H9z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=["svg",t,[["path",{d:"M9 18v-6H5l7-7 7 7h-4v6H9z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=["svg",t,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2"}],["path",{d:"M17 20v-6h-2"}],["path",{d:"M15 20h4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=["svg",t,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M17 10V4h-2"}],["path",{d:"M15 10h4"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=["svg",t,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M20 8h-5"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10"}],["path",{d:"M15 14h5l-5 6h5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=["svg",t,[["path",{d:"M19 3H5"}],["path",{d:"M12 21V7"}],["path",{d:"m6 15 6 6 6-6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=["svg",t,[["path",{d:"M17 7 7 17"}],["path",{d:"M17 17H7V7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=["svg",t,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M11 4h4"}],["path",{d:"M11 8h7"}],["path",{d:"M11 12h10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=["svg",t,[["path",{d:"m7 7 10 10"}],["path",{d:"M17 7v10H7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=["svg",t,[["path",{d:"M12 2v14"}],["path",{d:"m19 9-7 7-7-7"}],["circle",{cx:"12",cy:"21",r:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=["svg",t,[["path",{d:"M12 17V3"}],["path",{d:"m6 11 6 6 6-6"}],["path",{d:"M19 21H5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=["svg",t,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"m21 8-4-4-4 4"}],["path",{d:"M17 4v16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=["svg",t,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M11 4h10"}],["path",{d:"M11 8h7"}],["path",{d:"M11 12h4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=["svg",t,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 4v16"}],["path",{d:"M15 4h5l-5 6h5"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"}],["path",{d:"M20 18h-5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=["svg",t,[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=["svg",t,[["path",{d:"m9 6-6 6 6 6"}],["path",{d:"M3 12h14"}],["path",{d:"M21 19V5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=["svg",t,[["path",{d:"M8 3 4 7l4 4"}],["path",{d:"M4 7h16"}],["path",{d:"m16 21 4-4-4-4"}],["path",{d:"M20 17H4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=["svg",t,[["path",{d:"M3 19V5"}],["path",{d:"m13 6-6 6 6 6"}],["path",{d:"M7 12h14"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=["svg",t,[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=["svg",t,[["path",{d:"M3 5v14"}],["path",{d:"M21 12H7"}],["path",{d:"m15 18 6-6-6-6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=["svg",t,[["path",{d:"m16 3 4 4-4 4"}],["path",{d:"M20 7H4"}],["path",{d:"m8 21-4-4 4-4"}],["path",{d:"M4 17h16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=["svg",t,[["path",{d:"M17 12H3"}],["path",{d:"m11 18 6-6-6-6"}],["path",{d:"M21 5v14"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=["svg",t,[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=["svg",t,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2"}],["path",{d:"M17 20v-6h-2"}],["path",{d:"M15 20h4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=["svg",t,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M17 10V4h-2"}],["path",{d:"M15 10h4"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=["svg",t,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M20 8h-5"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10"}],["path",{d:"M15 14h5l-5 6h5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=["svg",t,[["path",{d:"m21 16-4 4-4-4"}],["path",{d:"M17 20V4"}],["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=["svg",t,[["path",{d:"m5 9 7-7 7 7"}],["path",{d:"M12 16V2"}],["circle",{cx:"12",cy:"21",r:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=["svg",t,[["path",{d:"m18 9-6-6-6 6"}],["path",{d:"M12 3v14"}],["path",{d:"M5 21h14"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=["svg",t,[["path",{d:"M7 17V7h10"}],["path",{d:"M17 17 7 7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=["svg",t,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M11 12h4"}],["path",{d:"M11 16h7"}],["path",{d:"M11 20h10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=["svg",t,[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=["svg",t,[["path",{d:"M5 3h14"}],["path",{d:"m18 13-6-6-6 6"}],["path",{d:"M12 7v14"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=["svg",t,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M11 12h10"}],["path",{d:"M11 16h7"}],["path",{d:"M11 20h4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=["svg",t,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M15 4h5l-5 6h5"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"}],["path",{d:"M20 18h-5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=["svg",t,[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=["svg",t,[["path",{d:"m4 6 3-3 3 3"}],["path",{d:"M7 17V3"}],["path",{d:"m14 6 3-3 3 3"}],["path",{d:"M17 17V3"}],["path",{d:"M4 21h16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=["svg",t,[["path",{d:"M12 6v12"}],["path",{d:"M17.196 9 6.804 15"}],["path",{d:"m6.804 9 10.392 6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=["svg",t,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=["svg",t,[["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=["svg",t,[["path",{d:"M2 10v3"}],["path",{d:"M6 6v11"}],["path",{d:"M10 3v18"}],["path",{d:"M14 8v7"}],["path",{d:"M18 5v13"}],["path",{d:"M22 10v3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=["svg",t,[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=["svg",t,[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"}],["circle",{cx:"12",cy:"8",r:"6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=["svg",t,[["path",{d:"m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9"}],["path",{d:"M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=["svg",t,[["path",{d:"M4 4v16h16"}],["path",{d:"m4 20 7-7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=["svg",t,[["path",{d:"M9 12h.01"}],["path",{d:"M15 12h.01"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=["svg",t,[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"}],["path",{d:"M8 10h8"}],["path",{d:"M8 18h8"}],["path",{d:"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M12 7v10"}],["path",{d:"M15.4 10a4 4 0 1 0 0 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 18V6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M7 12h5"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["line",{x1:"12",x2:"12.01",y1:"17",y2:"17"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M8 8h8"}],["path",{d:"M8 12h8"}],["path",{d:"m13 17-5-1h1a4 4 0 0 0 0-8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"16",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"8",y2:"8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 8 3 3v7"}],["path",{d:"m12 11 3-3"}],["path",{d:"M9 12h6"}],["path",{d:"M9 16h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M8 12h4"}],["path",{d:"M10 16V9.5a2.5 2.5 0 0 1 5 0"}],["path",{d:"M8 16h7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M9 16h5"}],["path",{d:"M9 12h5a2 2 0 1 0 0-4h-3v9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M11 17V8h4"}],["path",{d:"M11 12h3"}],["path",{d:"M9 16h4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=["svg",t,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=["svg",t,[["path",{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"}],["path",{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"}],["rect",{width:"13",height:"8",x:"8",y:"6",rx:"1"}],["circle",{cx:"18",cy:"20",r:"2"}],["circle",{cx:"9",cy:"20",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m4.9 4.9 14.2 14.2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=["svg",t,[["path",{d:"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5"}],["path",{d:"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=["svg",t,[["path",{d:"M10 10.01h.01"}],["path",{d:"M10 14.01h.01"}],["path",{d:"M14 10.01h.01"}],["path",{d:"M14 14.01h.01"}],["path",{d:"M18 6v11.5"}],["path",{d:"M6 6v12"}],["rect",{x:"2",y:"6",width:"20",height:"12",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=["svg",t,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M6 12h.01M18 12h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=["svg",t,[["path",{d:"M3 5v14"}],["path",{d:"M8 5v14"}],["path",{d:"M12 5v14"}],["path",{d:"M17 5v14"}],["path",{d:"M21 5v14"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=["svg",t,[["path",{d:"M4 20h16"}],["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=["svg",t,[["path",{d:"M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"}],["line",{x1:"10",x2:"8",y1:"5",y2:"7"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12"}],["line",{x1:"7",x2:"7",y1:"19",y2:"21"}],["line",{x1:"17",x2:"17",y1:"19",y2:"21"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=["svg",t,[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"}],["path",{d:"m11 7-3 5h4l-3 5"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=["svg",t,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13"}],["line",{x1:"14",x2:"14",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=["svg",t,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=["svg",t,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=["svg",t,[["path",{d:"M10 17h.01"}],["path",{d:"M10 7v6"}],["path",{d:"M14 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"}],["path",{d:"M22 11v2"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=["svg",t,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=["svg",t,[["path",{d:"M4.5 3h15"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"}],["path",{d:"M6 14h12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=["svg",t,[["path",{d:"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1"}],["path",{d:"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66"}],["path",{d:"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=["svg",t,[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=["svg",t,[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"}],["path",{d:"M12 4v6"}],["path",{d:"M2 18h20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=["svg",t,[["path",{d:"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"}],["path",{d:"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}],["path",{d:"M3 18h18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=["svg",t,[["path",{d:"M2 4v16"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10"}],["path",{d:"M2 17h20"}],["path",{d:"M6 8v9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=["svg",t,[["circle",{cx:"12.5",cy:"8.5",r:"2.5"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=["svg",t,[["path",{d:"M13 13v5"}],["path",{d:"M17 11.47V8"}],["path",{d:"M17 11h1a3 3 0 0 1 2.745 4.211"}],["path",{d:"m2 2 20 20"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3"}],["path",{d:"M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268"}],["path",{d:"M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12"}],["path",{d:"M9 14.6V18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=["svg",t,[["path",{d:"M17 11h1a3 3 0 0 1 0 6h-1"}],["path",{d:"M9 12v6"}],["path",{d:"M13 12v6"}],["path",{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=["svg",t,[["path",{d:"M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["circle",{cx:"18",cy:"8",r:"3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=["svg",t,[["path",{d:"M18.8 4A6.3 8.7 0 0 1 20 9"}],["path",{d:"M9 9h.01"}],["circle",{cx:"9",cy:"9",r:"7"}],["rect",{width:"10",height:"6",x:"4",y:"16",rx:"2"}],["path",{d:"M14 19c3 0 4.6-1.6 4.6-1.6"}],["circle",{cx:"20",cy:"16",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=["svg",t,[["path",{d:"M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["path",{d:"M15 8h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=["svg",t,[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=["svg",t,[["path",{d:"M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["path",{d:"M15 8h6"}],["path",{d:"M18 5v6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=["svg",t,[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=["svg",t,[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=["svg",t,[["rect",{width:"13",height:"7",x:"3",y:"3",rx:"1"}],["path",{d:"m22 15-3-3 3-3"}],["rect",{width:"13",height:"7",x:"3",y:"14",rx:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=["svg",t,[["rect",{width:"13",height:"7",x:"8",y:"3",rx:"1"}],["path",{d:"m2 9 3 3-3 3"}],["rect",{width:"13",height:"7",x:"8",y:"14",rx:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=["svg",t,[["rect",{width:"7",height:"13",x:"3",y:"3",rx:"1"}],["path",{d:"m9 22 3-3 3 3"}],["rect",{width:"7",height:"13",x:"14",y:"3",rx:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=["svg",t,[["rect",{width:"7",height:"13",x:"3",y:"8",rx:"1"}],["path",{d:"m15 2-3 3-3-3"}],["rect",{width:"7",height:"13",x:"14",y:"8",rx:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=["svg",t,[["path",{d:"M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"}],["path",{d:"M15 14a5 5 0 0 0-7.584 2"}],["path",{d:"M9.964 6.825C8.019 7.977 9.5 13 8 15"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=["svg",t,[["circle",{cx:"18.5",cy:"17.5",r:"3.5"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5"}],["circle",{cx:"15",cy:"5",r:"1"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=["svg",t,[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2"}],["path",{d:"M6 20h4"}],["path",{d:"M14 10h4"}],["path",{d:"M6 14h2v6"}],["path",{d:"M14 4h2v6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=["svg",t,[["path",{d:"M10 10h4"}],["path",{d:"M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"}],["path",{d:"M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z"}],["path",{d:"M 22 16 L 2 16"}],["path",{d:"M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z"}],["path",{d:"M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=["svg",t,[["circle",{cx:"12",cy:"11.9",r:"2"}],["path",{d:"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6"}],["path",{d:"m8.9 10.1 1.4.8"}],["path",{d:"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5"}],["path",{d:"m15.1 10.1-1.4.8"}],["path",{d:"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2"}],["path",{d:"M12 13.9v1.6"}],["path",{d:"M13.5 5.4c-1-.2-2-.2-3 0"}],["path",{d:"M17 16.4c.7-.7 1.2-1.6 1.5-2.5"}],["path",{d:"M5.5 13.9c.3.9.8 1.8 1.5 2.5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=["svg",t,[["path",{d:"M16 7h.01"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"}],["path",{d:"m20 7 2 .5-2 .5"}],["path",{d:"M10 18v3"}],["path",{d:"M14 17.75V21"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=["svg",t,[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=["svg",t,[["circle",{cx:"9",cy:"9",r:"7"}],["circle",{cx:"15",cy:"15",r:"7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=["svg",t,[["path",{d:"M3 3h18"}],["path",{d:"M20 7H8"}],["path",{d:"M20 11H8"}],["path",{d:"M10 19h10"}],["path",{d:"M8 15h12"}],["path",{d:"M4 3v14"}],["circle",{cx:"4",cy:"19",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=["svg",t,[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=["svg",t,[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}],["line",{x1:"18",x2:"21",y1:"12",y2:"12"}],["line",{x1:"3",x2:"6",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=["svg",t,[["path",{d:"m17 17-5 5V12l-5 5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M14.5 9.5 17 7l-5-5v4.5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=["svg",t,[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}],["path",{d:"M20.83 14.83a4 4 0 0 0 0-5.66"}],["path",{d:"M18 12h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=["svg",t,[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=["svg",t,[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=["svg",t,[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}],["circle",{cx:"12",cy:"12",r:"4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=["svg",t,[["circle",{cx:"11",cy:"13",r:"9"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95"}],["path",{d:"m22 2-1.5 1.5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=["svg",t,[["path",{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=["svg",t,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m8 13 4-7 4 7"}],["path",{d:"M9.1 11h5.7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t5=["svg",t,[["path",{d:"M12 6v7"}],["path",{d:"M16 8v3"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M8 8v3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a5=["svg",t,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9 9.5 2 2 4-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e5=["svg",t,[["path",{d:"M2 16V4a2 2 0 0 1 2-2h11"}],["path",{d:"M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12"}],["path",{d:"M5 14H4a2 2 0 1 0 0 4h1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=["svg",t,[["path",{d:"M12 17h2"}],["path",{d:"M12 22h2"}],["path",{d:"M12 2h2"}],["path",{d:"M18 22h1a1 1 0 0 0 1-1"}],["path",{d:"M18 2h1a1 1 0 0 1 1 1v1"}],["path",{d:"M20 15v2h-2"}],["path",{d:"M20 8v3"}],["path",{d:"M4 11V9"}],["path",{d:"M4 19.5V15"}],["path",{d:"M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8"}],["path",{d:"M8 22H6.5a1 1 0 0 1 0-5H8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h5=["svg",t,[["path",{d:"M12 13V7"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9 10 3 3 3-3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s5=["svg",t,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M8 12v-2a4 4 0 0 1 8 0v2"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"9",cy:"12",r:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n5=["svg",t,[["path",{d:"M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c5=["svg",t,[["path",{d:"m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["circle",{cx:"10",cy:"8",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d5=["svg",t,[["path",{d:"m19 3 1 1"}],["path",{d:"m20 2-4.5 4.5"}],["path",{d:"M20 8v13a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14"}],["circle",{cx:"14",cy:"8",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r5=["svg",t,[["path",{d:"M18 6V4a2 2 0 1 0-4 0v2"}],["path",{d:"M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10"}],["rect",{x:"12",y:"6",width:"8",height:"5",rx:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i5=["svg",t,[["path",{d:"M10 2v8l3-3 3 3V2"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o5=["svg",t,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p5=["svg",t,[["path",{d:"M12 21V7"}],["path",{d:"m16 12 2 2 4-4"}],["path",{d:"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l5=["svg",t,[["path",{d:"M12 7v14"}],["path",{d:"M16 12h2"}],["path",{d:"M16 8h2"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}],["path",{d:"M6 12h2"}],["path",{d:"M6 8h2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M5=["svg",t,[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v5=["svg",t,[["path",{d:"M12 7v6"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g5=["svg",t,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M8 11h8"}],["path",{d:"M8 7h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u5=["svg",t,[["path",{d:"M10 13h4"}],["path",{d:"M12 6v7"}],["path",{d:"M16 8V6H8v2"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y5=["svg",t,[["path",{d:"M12 13V7"}],["path",{d:"M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2"}],["path",{d:"m9 10 3-3 3 3"}],["path",{d:"m9 5 3-3 3 3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m5=["svg",t,[["path",{d:"M12 13V7"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9 10 3-3 3 3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x5=["svg",t,[["path",{d:"M15 13a3 3 0 1 0-6 0"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["circle",{cx:"12",cy:"8",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f5=["svg",t,[["path",{d:"m14.5 7-5 5"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9.5 7 5 5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _5=["svg",t,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A5=["svg",t,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"}],["path",{d:"m9 10 2 2 4-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w5=["svg",t,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C5=["svg",t,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H5=["svg",t,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E5=["svg",t,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V5=["svg",t,[["path",{d:"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"}],["path",{d:"M8 8v1"}],["path",{d:"M12 8v1"}],["path",{d:"M16 8v1"}],["rect",{width:"20",height:"12",x:"2",y:"9",rx:"2"}],["circle",{cx:"8",cy:"15",r:"2"}],["circle",{cx:"16",cy:"15",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L5=["svg",t,[["path",{d:"M12 6V2H8"}],["path",{d:"m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"}],["path",{d:"M2 12h2"}],["path",{d:"M9 11v2"}],["path",{d:"M15 11v2"}],["path",{d:"M20 12h2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b5=["svg",t,[["path",{d:"M13.67 8H18a2 2 0 0 1 2 2v4.33"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M22 22 2 2"}],["path",{d:"M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586"}],["path",{d:"M9 13v2"}],["path",{d:"M9.67 4H12v2.33"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S5=["svg",t,[["path",{d:"M12 8V4H8"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M15 13v2"}],["path",{d:"M9 13v2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T5=["svg",t,[["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 3h1"}],["path",{d:"M14 21h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M21 14v1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O5=["svg",t,[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D5=["svg",t,[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"}],["path",{d:"m7 16.5-4.74-2.85"}],["path",{d:"m7 16.5 5-3"}],["path",{d:"M7 16.5v5.17"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"}],["path",{d:"m17 16.5-5-3"}],["path",{d:"m17 16.5 4.74-2.85"}],["path",{d:"M17 16.5v5.17"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"}],["path",{d:"M12 8 7.26 5.15"}],["path",{d:"m12 8 4.74-2.85"}],["path",{d:"M12 13.5V8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=["svg",t,[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P5=["svg",t,[["path",{d:"M16 3h3v18h-3"}],["path",{d:"M8 21H5V3h3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N5=["svg",t,[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516"}],["path",{d:"M12 13h4"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1"}],["path",{d:"M12 8h8"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2"}],["circle",{cx:"16",cy:"13",r:".5"}],["circle",{cx:"18",cy:"3",r:".5"}],["circle",{cx:"20",cy:"21",r:".5"}],["circle",{cx:"20",cy:"8",r:".5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k5=["svg",t,[["path",{d:"M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m15.7 10.4-.9.4"}],["path",{d:"m9.2 13.2-.9.4"}],["path",{d:"m13.6 15.7-.4-.9"}],["path",{d:"m10.8 9.2-.4-.9"}],["path",{d:"m15.7 13.5-.9-.4"}],["path",{d:"m9.2 10.9-.9-.4"}],["path",{d:"m10.5 15.7.4-.9"}],["path",{d:"m13.1 9.2.4-.9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R5=["svg",t,[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I5=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 9v6"}],["path",{d:"M16 15v6"}],["path",{d:"M16 3v6"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["path",{d:"M8 15v6"}],["path",{d:"M8 3v6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $5=["svg",t,[["path",{d:"M12 12h.01"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z5=["svg",t,[["path",{d:"M10 20v2"}],["path",{d:"M14 20v2"}],["path",{d:"M18 20v2"}],["path",{d:"M21 20H3"}],["path",{d:"M6 20v2"}],["path",{d:"M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12"}],["rect",{x:"4",y:"6",width:"16",height:"10",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5=["svg",t,[["path",{d:"M12 11v4"}],["path",{d:"M14 13h-4"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"}],["path",{d:"M18 6v14"}],["path",{d:"M6 6v14"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5=["svg",t,[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F5=["svg",t,[["rect",{x:"8",y:"8",width:"8",height:"8",rx:"2"}],["path",{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2"}],["path",{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q5=["svg",t,[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U5=["svg",t,[["path",{d:"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M22 13h-4v-2a4 4 0 0 0-4-4h-1.3"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"m2 2 20 20"}],["path",{d:"M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13"}],["path",{d:"M12 20v-8"}],["path",{d:"M6 13H2"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W5=["svg",t,[["path",{d:"M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}],["path",{d:"M6 13H2"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5"}],["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K5=["svg",t,[["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"}],["path",{d:"M12 20v-9"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5"}],["path",{d:"M6 13H2"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"M22 13h-4"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G5=["svg",t,[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"}],["path",{d:"M10 6h4"}],["path",{d:"M10 10h4"}],["path",{d:"M10 14h4"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j5=["svg",t,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["path",{d:"M9 22v-4h6v4"}],["path",{d:"M8 6h.01"}],["path",{d:"M16 6h.01"}],["path",{d:"M12 6h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 10h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M8 14h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y5=["svg",t,[["path",{d:"M4 6 2 7"}],["path",{d:"M10 6h4"}],["path",{d:"m22 7-2-1"}],["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2"}],["path",{d:"M4 11h16"}],["path",{d:"M8 15h.01"}],["path",{d:"M16 15h.01"}],["path",{d:"M6 19v2"}],["path",{d:"M18 21v-2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X5=["svg",t,[["path",{d:"M8 6v6"}],["path",{d:"M15 6v6"}],["path",{d:"M2 12h19.6"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"}],["circle",{cx:"7",cy:"18",r:"2"}],["path",{d:"M9 18h5"}],["circle",{cx:"16",cy:"18",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q5=["svg",t,[["path",{d:"M10 3h.01"}],["path",{d:"M14 2h.01"}],["path",{d:"m2 9 20-5"}],["path",{d:"M12 12V6.5"}],["rect",{width:"16",height:"10",x:"4",y:"12",rx:"3"}],["path",{d:"M9 12v5"}],["path",{d:"M15 12v5"}],["path",{d:"M4 17h16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J5=["svg",t,[["path",{d:"M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1"}],["path",{d:"M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9"}],["path",{d:"M21 21v-2h-4"}],["path",{d:"M3 5h4V3"}],["path",{d:"M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t3=["svg",t,[["circle",{cx:"9",cy:"7",r:"2"}],["path",{d:"M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6"}],["path",{d:"M16 13H3"}],["path",{d:"M16 17H3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a3=["svg",t,[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"}],["path",{d:"M2 21h20"}],["path",{d:"M7 8v3"}],["path",{d:"M12 8v3"}],["path",{d:"M17 8v3"}],["path",{d:"M7 4h.01"}],["path",{d:"M12 4h.01"}],["path",{d:"M17 4h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e3=["svg",t,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18"}],["path",{d:"M16 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M8 18h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h3=["svg",t,[["path",{d:"m14 18 4 4 4-4"}],["path",{d:"M16 2v4"}],["path",{d:"M18 14v8"}],["path",{d:"M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s3=["svg",t,[["path",{d:"m14 18 4-4 4 4"}],["path",{d:"M16 2v4"}],["path",{d:"M18 22v-8"}],["path",{d:"M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n3=["svg",t,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["path",{d:"M3 10h18"}],["path",{d:"m16 20 2 2 4-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c3=["svg",t,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"m9 16 2 2 4-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d3=["svg",t,[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"}],["path",{d:"M16 2v4"}],["path",{d:"M8 2v4"}],["path",{d:"M3 10h5"}],["path",{d:"M17.5 17.5 16 16.3V14"}],["circle",{cx:"16",cy:"16",r:"6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r3=["svg",t,[["path",{d:"m15.2 16.9-.9-.4"}],["path",{d:"m15.2 19.1-.9.4"}],["path",{d:"M16 2v4"}],["path",{d:"m16.9 15.2-.4-.9"}],["path",{d:"m16.9 20.8-.4.9"}],["path",{d:"m19.5 14.3-.4.9"}],["path",{d:"m19.5 21.7-.4-.9"}],["path",{d:"M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}],["path",{d:"m21.7 16.5-.9.4"}],["path",{d:"m21.7 19.5-.9-.4"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["circle",{cx:"18",cy:"18",r:"3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i3=["svg",t,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 18h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M16 18h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o3=["svg",t,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z"}],["path",{d:"M3 10h18"}],["path",{d:"M15 22v-4a2 2 0 0 1 2-2h4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p3=["svg",t,[["path",{d:"M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7"}],["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l3=["svg",t,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M10 16h4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=["svg",t,[["path",{d:"M16 19h6"}],["path",{d:"M16 2v4"}],["path",{d:"M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v3=["svg",t,[["path",{d:"M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"}],["path",{d:"M21 15.5V6a2 2 0 0 0-2-2H9.5"}],["path",{d:"M16 2v4"}],["path",{d:"M3 10h7"}],["path",{d:"M21 10h-5.5"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3=["svg",t,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M10 16h4"}],["path",{d:"M12 14v4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u3=["svg",t,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["path",{d:"M3 10h18"}],["path",{d:"M16 19h6"}],["path",{d:"M19 16v6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M16 2v4"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["path",{d:"M17 14h-6"}],["path",{d:"M13 18H7"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 18h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3=["svg",t,[["path",{d:"M16 2v4"}],["path",{d:"M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25"}],["path",{d:"m22 22-1.875-1.875"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["circle",{cx:"18",cy:"18",r:"3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x3=["svg",t,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["path",{d:"M3 10h18"}],["path",{d:"m17 22 5-5"}],["path",{d:"m17 17 5 5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f3=["svg",t,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"m14 14-4 4"}],["path",{d:"m10 14 4 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3=["svg",t,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=["svg",t,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16"}],["path",{d:"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5"}],["path",{d:"M14.121 15.121A3 3 0 1 1 9.88 10.88"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w3=["svg",t,[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"}],["circle",{cx:"12",cy:"13",r:"3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=["svg",t,[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=["svg",t,[["path",{d:"m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1"}],["path",{d:"M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657"}],["path",{d:"M14 16.5V14"}],["path",{d:"M14 6.5v1.843"}],["path",{d:"M10 10v7.5"}],["path",{d:"m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1"}],["path",{d:"m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=["svg",t,[["path",{d:"m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z"}],["path",{d:"M14 6.5v10"}],["path",{d:"M10 7.5v10"}],["path",{d:"m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1"}],["path",{d:"m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V3=["svg",t,[["path",{d:"M12 22v-4"}],["path",{d:"M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=["svg",t,[["path",{d:"M10.5 5H19a2 2 0 0 1 2 2v8.5"}],["path",{d:"M17 11h-.5"}],["path",{d:"M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"}],["path",{d:"m2 2 20 20"}],["path",{d:"M7 11h4"}],["path",{d:"M7 15h2.5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=["svg",t,[["rect",{width:"18",height:"14",x:"3",y:"5",rx:"2",ry:"2"}],["path",{d:"M7 15h4M15 15h2M7 11h2M13 11h4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3=["svg",t,[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 14h.01"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3=["svg",t,[["path",{d:"M10 2h4"}],["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 14h.01"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T3=["svg",t,[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"}],["circle",{cx:"7",cy:"17",r:"2"}],["path",{d:"M9 17h6"}],["circle",{cx:"17",cy:"17",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=["svg",t,[["path",{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2"}],["path",{d:"M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2"}],["path",{d:"M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9"}],["circle",{cx:"8",cy:"19",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=["svg",t,[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=["svg",t,[["circle",{cx:"7",cy:"12",r:"3"}],["path",{d:"M10 9v6"}],["circle",{cx:"17",cy:"12",r:"3"}],["path",{d:"M14 7v8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=["svg",t,[["path",{d:"m3 15 4-8 4 8"}],["path",{d:"M4 13h6"}],["circle",{cx:"18",cy:"12",r:"3"}],["path",{d:"M21 9v6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k3=["svg",t,[["path",{d:"m3 15 4-8 4 8"}],["path",{d:"M4 13h6"}],["path",{d:"M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=["svg",t,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["circle",{cx:"8",cy:"10",r:"2"}],["path",{d:"M8 12h8"}],["circle",{cx:"16",cy:"10",r:"2"}],["path",{d:"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=["svg",t,[["path",{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"}],["path",{d:"M2 12a9 9 0 0 1 8 8"}],["path",{d:"M2 16a5 5 0 0 1 4 4"}],["line",{x1:"2",x2:"2.01",y1:"20",y2:"20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=["svg",t,[["path",{d:"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"}],["path",{d:"M18 11V4H6v7"}],["path",{d:"M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4"}],["path",{d:"M22 11V9"}],["path",{d:"M2 11V9"}],["path",{d:"M6 4V2"}],["path",{d:"M18 4V2"}],["path",{d:"M10 4V2"}],["path",{d:"M14 4V2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=["svg",t,[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"}],["path",{d:"M8 14v.5"}],["path",{d:"M16 14v.5"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=["svg",t,[["path",{d:"M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97"}],["path",{d:"M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z"}],["path",{d:"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15"}],["path",{d:"M2 21v-4"}],["path",{d:"M7 9h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=["svg",t,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=["svg",t,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=["svg",t,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 11h8"}],["path",{d:"M7 16h3"}],["path",{d:"M7 6h12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=["svg",t,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 11h8"}],["path",{d:"M7 16h12"}],["path",{d:"M7 6h3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=["svg",t,[["path",{d:"M11 13v4"}],["path",{d:"M15 5v4"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=["svg",t,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 16h8"}],["path",{d:"M7 11h12"}],["path",{d:"M7 6h3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=["svg",t,[["path",{d:"M9 5v4"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1"}],["path",{d:"M9 15v2"}],["path",{d:"M17 3v2"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1"}],["path",{d:"M17 13v3"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=["svg",t,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"15",y:"5",width:"4",height:"12",rx:"1"}],["rect",{x:"7",y:"8",width:"4",height:"9",rx:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U3=["svg",t,[["path",{d:"M13 17V9"}],["path",{d:"M18 17v-3"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M8 17V5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=["svg",t,[["path",{d:"M13 17V9"}],["path",{d:"M18 17V5"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M8 17v-3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=["svg",t,[["path",{d:"M11 13H7"}],["path",{d:"M19 9h-4"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"15",y:"5",width:"4",height:"12",rx:"1"}],["rect",{x:"7",y:"8",width:"4",height:"9",rx:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=["svg",t,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M18 17V9"}],["path",{d:"M13 17V5"}],["path",{d:"M8 17v-3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=["svg",t,[["path",{d:"M10 6h8"}],["path",{d:"M12 16h6"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M8 11h7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=["svg",t,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"m19 9-5 5-4-4-3 3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=["svg",t,[["path",{d:"m13.11 7.664 1.78 2.672"}],["path",{d:"m14.162 12.788-3.324 1.424"}],["path",{d:"m20 4-6.06 1.515"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["circle",{cx:"12",cy:"6",r:"2"}],["circle",{cx:"16",cy:"12",r:"2"}],["circle",{cx:"9",cy:"15",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3=["svg",t,[["path",{d:"M12 20V10"}],["path",{d:"M18 20v-4"}],["path",{d:"M6 20V4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=["svg",t,[["line",{x1:"12",x2:"12",y1:"20",y2:"10"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=["svg",t,[["line",{x1:"18",x2:"18",y1:"20",y2:"10"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=["svg",t,[["path",{d:"M12 16v5"}],["path",{d:"M16 14v7"}],["path",{d:"M20 10v11"}],["path",{d:"m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"}],["path",{d:"M4 18v3"}],["path",{d:"M8 14v7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=["svg",t,[["path",{d:"M8 6h10"}],["path",{d:"M6 12h9"}],["path",{d:"M11 18h7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=["svg",t,[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=["svg",t,[["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}],["circle",{cx:"18.5",cy:"5.5",r:".5",fill:"currentColor"}],["circle",{cx:"11.5",cy:"11.5",r:".5",fill:"currentColor"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"14.5",r:".5",fill:"currentColor"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=["svg",t,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=["svg",t,[["path",{d:"M18 6 7 17l-5-5"}],["path",{d:"m22 10-7.5 7.5L13 16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3=["svg",t,[["path",{d:"M20 6 9 17l-5-5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=["svg",t,[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=["svg",t,[["path",{d:"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"}],["path",{d:"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"}],["path",{d:"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12"}],["path",{d:"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=["svg",t,[["path",{d:"m6 9 6 6 6-6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=["svg",t,[["path",{d:"m17 18-6-6 6-6"}],["path",{d:"M7 6v12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=["svg",t,[["path",{d:"m7 18 6-6-6-6"}],["path",{d:"M17 6v12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=["svg",t,[["path",{d:"m15 18-6-6 6-6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=["svg",t,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=["svg",t,[["path",{d:"m18 15-6-6-6 6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=["svg",t,[["path",{d:"m7 20 5-5 5 5"}],["path",{d:"m7 4 5 5 5-5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=["svg",t,[["path",{d:"m7 6 5 5 5-5"}],["path",{d:"m7 13 5 5 5-5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=["svg",t,[["path",{d:"m18 8 4 4-4 4"}],["path",{d:"m6 8-4 4 4 4"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=["svg",t,[["path",{d:"m9 7-5 5 5 5"}],["path",{d:"m15 7 5 5-5 5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=["svg",t,[["path",{d:"m11 17-5-5 5-5"}],["path",{d:"m18 17-5-5 5-5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M6=["svg",t,[["path",{d:"m20 17-5-5 5-5"}],["path",{d:"m4 17 5-5-5-5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=["svg",t,[["path",{d:"m6 17 5-5-5-5"}],["path",{d:"m13 17 5-5-5-5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6=["svg",t,[["path",{d:"m7 15 5 5 5-5"}],["path",{d:"m7 9 5-5 5 5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=["svg",t,[["path",{d:"m17 11-5-5-5 5"}],["path",{d:"m17 18-5-5-5 5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"4"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6=["svg",t,[["path",{d:"M10 9h4"}],["path",{d:"M12 7v5"}],["path",{d:"M14 22v-4a2 2 0 0 0-4 0v4"}],["path",{d:"M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22"}],["path",{d:"m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x6=["svg",t,[["path",{d:"M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5"}],["path",{d:"M7 12v4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=["svg",t,[["path",{d:"M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5"}],["path",{d:"M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5"}],["path",{d:"M7 12v4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 12H8"}],["path",{d:"m12 8-4 4 4 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=["svg",t,[["path",{d:"M2 12a10 10 0 1 1 10 10"}],["path",{d:"m2 22 10-10"}],["path",{d:"M8 22H2v-6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=["svg",t,[["path",{d:"M12 22a10 10 0 1 1 10-10"}],["path",{d:"M22 22 12 12"}],["path",{d:"M22 16v6h-6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=["svg",t,[["path",{d:"M2 8V2h6"}],["path",{d:"m2 2 10 10"}],["path",{d:"M12 2A10 10 0 1 1 2 12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=["svg",t,[["path",{d:"M22 12A10 10 0 1 1 12 2"}],["path",{d:"M22 2 12 12"}],["path",{d:"M16 2h6v6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}],["path",{d:"m12 16 4-4-4-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=["svg",t,[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 10-4 4-4-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m14 16-4-4 4-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m10 8 4 4-4 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m8 14 4-4 4 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6=["svg",t,[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=["svg",t,[["line",{x1:"8",x2:"16",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A6=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 18V6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=["svg",t,[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C6=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H6=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M17 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M7 12h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6=["svg",t,[["path",{d:"M7 10h10"}],["path",{d:"M7 14h10"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V6=["svg",t,[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L6=["svg",t,[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75"}],["path",{d:"M12 8v8"}],["path",{d:"M16 12H8"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=["svg",t,[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M13.4 10.6 19 5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=["svg",t,[["path",{d:"m2 2 20 20"}],["path",{d:"M8.35 2.69A10 10 0 0 1 21.3 15.65"}],["path",{d:"M19.08 19.08A10 10 0 1 1 4.92 4.92"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m5 5 14 14"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2"}],["path",{d:"M9 17v-2.34"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["polygon",{points:"10 8 16 12 10 16 10 8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=["svg",t,[["path",{d:"M12 7v4"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M22 2 2 22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=["svg",t,[["path",{d:"M18 20a6 6 0 0 0-12 0"}],["circle",{cx:"12",cy:"10",r:"4"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O6=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4"}],["circle",{cx:"15",cy:"15",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D6=["svg",t,[["path",{d:"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"}],["path",{d:"M19.65 15.66A8 8 0 0 1 8.35 4.34"}],["path",{d:"m14 10-5.5 5.5"}],["path",{d:"M14 17.85V10H6.15"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P6=["svg",t,[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"}],["path",{d:"m6.2 5.3 3.1 3.9"}],["path",{d:"m12.4 3.4 3.1 4"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N6=["svg",t,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k6=["svg",t,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4"}],["path",{d:"M21 14H11"}],["path",{d:"m15 10-4 4 4 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R6=["svg",t,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M12 11h4"}],["path",{d:"M12 16h4"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 16h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I6=["svg",t,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 14h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $6=["svg",t,[["path",{d:"M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10"}],["path",{d:"m17 10 4 4-4 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=["svg",t,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1"}],["path",{d:"M8 18h1"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=["svg",t,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5"}],["path",{d:"M4 13.5V6a2 2 0 0 1 2-2h2"}],["path",{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z6=["svg",t,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 14h6"}],["path",{d:"M12 17v-6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B6=["svg",t,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 12v-1h6v1"}],["path",{d:"M11 17h2"}],["path",{d:"M12 11v6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z6=["svg",t,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m15 11-6 6"}],["path",{d:"m9 11 6 6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F6=["svg",t,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q6=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 14.5 8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U6=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 8 10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W6=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 9.5 8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K6=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G6=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j6=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16.5 12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y6=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X6=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 14.5 16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q6=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 12 16.5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J6=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 9.5 16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 8 14"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 7.5 12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=["svg",t,[["path",{d:"M12 6v6l4 2"}],["path",{d:"M16 21.16a10 10 0 1 1 5-13.516"}],["path",{d:"M20 11.5v6"}],["path",{d:"M20 21.5h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=["svg",t,[["path",{d:"M12.338 21.994A10 10 0 1 1 21.925 13.227"}],["path",{d:"M12 6v6l2 1"}],["path",{d:"m14 18 4 4 4-4"}],["path",{d:"M18 14v8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=["svg",t,[["path",{d:"M13.228 21.925A10 10 0 1 1 21.994 12.338"}],["path",{d:"M12 6v6l1.562.781"}],["path",{d:"m14 18 4-4 4 4"}],["path",{d:"M18 22v-8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=["svg",t,[["circle",{cx:"12",cy:"17",r:"3"}],["path",{d:"M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"}],["path",{d:"m15.7 18.4-.9-.3"}],["path",{d:"m9.2 15.9-.9-.3"}],["path",{d:"m10.6 20.7.3-.9"}],["path",{d:"m13.1 14.2.3-.9"}],["path",{d:"m13.6 20.7-.4-1"}],["path",{d:"m10.8 14.3-.4-1"}],["path",{d:"m8.3 18.6 1-.4"}],["path",{d:"m14.7 15.8 1-.4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=["svg",t,[["path",{d:"M12 13v8l-4-4"}],["path",{d:"m12 21 4-4"}],["path",{d:"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=["svg",t,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M8 19v1"}],["path",{d:"M8 14v1"}],["path",{d:"M16 19v1"}],["path",{d:"M16 14v1"}],["path",{d:"M12 21v1"}],["path",{d:"M12 16v1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=["svg",t,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 17H7"}],["path",{d:"M17 21H9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=["svg",t,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 14v2"}],["path",{d:"M8 14v2"}],["path",{d:"M16 20h.01"}],["path",{d:"M8 20h.01"}],["path",{d:"M12 16v2"}],["path",{d:"M12 22h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=["svg",t,[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"}],["path",{d:"m13 12-3 5h4l-3 5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=["svg",t,[["path",{d:"M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197"}],["path",{d:"M11 20v2"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"}],["path",{d:"M7 19v2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll=["svg",t,[["path",{d:"M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197"}],["path",{d:"M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=["svg",t,[["path",{d:"m2 2 20 20"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=["svg",t,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"m9.2 22 3-7"}],["path",{d:"m9 13-3 7"}],["path",{d:"m17 13-3 7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=["svg",t,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 14v6"}],["path",{d:"M8 14v6"}],["path",{d:"M12 16v6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=["svg",t,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M8 15h.01"}],["path",{d:"M8 19h.01"}],["path",{d:"M12 17h.01"}],["path",{d:"M12 21h.01"}],["path",{d:"M16 15h.01"}],["path",{d:"M16 19h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=["svg",t,[["path",{d:"M12 2v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"M20 12h2"}],["path",{d:"m19.07 4.93-1.41 1.41"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"}],["path",{d:"M11 20v2"}],["path",{d:"M7 19v2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=["svg",t,[["path",{d:"M12 2v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"M20 12h2"}],["path",{d:"m19.07 4.93-1.41 1.41"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=["svg",t,[["path",{d:"M12 13v8"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"m8 17 4-4 4 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=["svg",t,[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=["svg",t,[["path",{d:"M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}],["path",{d:"M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=["svg",t,[["path",{d:"M16.17 7.83 2 22"}],["path",{d:"M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12"}],["path",{d:"m7.83 7.83 8.34 8.34"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=["svg",t,[["path",{d:"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z"}],["path",{d:"M12 17.66L12 22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=["svg",t,[["path",{d:"m18 16 4-4-4-4"}],["path",{d:"m6 8-4 4 4 4"}],["path",{d:"m14.5 4-5 16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=["svg",t,[["polyline",{points:"16 18 22 12 16 6"}],["polyline",{points:"8 6 2 12 8 18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=["svg",t,[["polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"}],["line",{x1:"12",x2:"12",y1:"22",y2:"15.5"}],["polyline",{points:"22 8.5 12 15.5 2 8.5"}],["polyline",{points:"2 15.5 12 8.5 22 15.5"}],["line",{x1:"12",x2:"12",y1:"2",y2:"8.5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=["svg",t,[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}],["polyline",{points:"7.5 4.21 12 6.81 16.5 4.21"}],["polyline",{points:"7.5 19.79 7.5 14.6 3 12"}],["polyline",{points:"21 12 16.5 14.6 16.5 19.79"}],["polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}],["line",{x1:"12",x2:"12",y1:"22.08",y2:"12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=["svg",t,[["path",{d:"M10 2v2"}],["path",{d:"M14 2v2"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"}],["path",{d:"M6 2v2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=["svg",t,[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"}],["path",{d:"M12 2v2"}],["path",{d:"M12 22v-2"}],["path",{d:"m17 20.66-1-1.73"}],["path",{d:"M11 10.27 7 3.34"}],["path",{d:"m20.66 17-1.73-1"}],["path",{d:"m3.34 7 1.73 1"}],["path",{d:"M14 12h8"}],["path",{d:"M2 12h2"}],["path",{d:"m20.66 7-1.73 1"}],["path",{d:"m3.34 17 1.73-1"}],["path",{d:"m17 3.34-1 1.73"}],["path",{d:"m11 13.73-4 6.93"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=["svg",t,[["circle",{cx:"8",cy:"8",r:"6"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18"}],["path",{d:"M7 6h1v4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 3v18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"M15 3v18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7.5 3v18"}],["path",{d:"M12 3v18"}],["path",{d:"M16.5 3v18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=["svg",t,[["path",{d:"M10 18H5a3 3 0 0 1-3-3v-1"}],["path",{d:"M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"m7 21 3-3-3-3"}],["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=["svg",t,[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=["svg",t,[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=["svg",t,[["path",{d:"M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"}],["path",{d:"m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"}],["path",{d:"M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"}],["path",{d:"m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=["svg",t,[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h2"}],["path",{d:"M12 18h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=["svg",t,[["path",{d:"M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z"}],["path",{d:"M20 16a8 8 0 1 0-16 0"}],["path",{d:"M12 4v4"}],["path",{d:"M10 4h4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=["svg",t,[["path",{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98"}],["ellipse",{cx:"12",cy:"19",rx:"9",ry:"3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=["svg",t,[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1"}],["path",{d:"M17 14v7"}],["path",{d:"M7 14v7"}],["path",{d:"M17 3v3"}],["path",{d:"M7 3v3"}],["path",{d:"M10 14 2.3 6.3"}],["path",{d:"m14 6 7.7 7.7"}],["path",{d:"m8 6 8 8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=["svg",t,[["path",{d:"M16 2v2"}],["path",{d:"M17.915 22a6 6 0 0 0-12 0"}],["path",{d:"M8 2v2"}],["circle",{cx:"12",cy:"12",r:"4"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=["svg",t,[["path",{d:"M16 2v2"}],["path",{d:"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"}],["path",{d:"M8 2v2"}],["circle",{cx:"12",cy:"11",r:"3"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=["svg",t,[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"}],["path",{d:"M10 21.9V14L2.1 9.1"}],["path",{d:"m10 14 11.9-6.9"}],["path",{d:"M14 19.8v-8.1"}],["path",{d:"M18 17.5V9.4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=["svg",t,[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"}],["path",{d:"M8.5 8.5v.01"}],["path",{d:"M16 15.5v.01"}],["path",{d:"M12 12v.01"}],["path",{d:"M11 17v.01"}],["path",{d:"M7 14v.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=["svg",t,[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=["svg",t,[["path",{d:"m12 15 2 2 4-4"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=["svg",t,[["line",{x1:"12",x2:"18",y1:"15",y2:"15"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=["svg",t,[["line",{x1:"15",x2:"15",y1:"12",y2:"18"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=["svg",t,[["line",{x1:"12",x2:"18",y1:"18",y2:"12"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=["svg",t,[["line",{x1:"12",x2:"18",y1:"12",y2:"18"}],["line",{x1:"12",x2:"18",y1:"18",y2:"12"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=["svg",t,[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.17 14.83a4 4 0 1 0 0-5.66"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M14.83 14.83a4 4 0 1 1 0-5.66"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=["svg",t,[["polyline",{points:"9 10 4 15 9 20"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=["svg",t,[["polyline",{points:"15 10 20 15 15 20"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=["svg",t,[["polyline",{points:"14 15 9 20 4 15"}],["path",{d:"M20 4h-7a4 4 0 0 0-4 4v12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t8=["svg",t,[["polyline",{points:"14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a8=["svg",t,[["polyline",{points:"10 15 15 20 20 15"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e8=["svg",t,[["polyline",{points:"10 9 15 4 20 9"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h8=["svg",t,[["polyline",{points:"9 14 4 9 9 4"}],["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s8=["svg",t,[["polyline",{points:"15 14 20 9 15 4"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n8=["svg",t,[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1"}],["path",{d:"M15 2v2"}],["path",{d:"M15 20v2"}],["path",{d:"M2 15h2"}],["path",{d:"M2 9h2"}],["path",{d:"M20 15h2"}],["path",{d:"M20 9h2"}],["path",{d:"M9 2v2"}],["path",{d:"M9 20v2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c8=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"}],["path",{d:"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d8=["svg",t,[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r8=["svg",t,[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i8=["svg",t,[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o8=["svg",t,[["path",{d:"M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p8=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l8=["svg",t,[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"}],["path",{d:"M5 21h14"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M8=["svg",t,[["path",{d:"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z"}],["path",{d:"M10 22v-8L2.25 9.15"}],["path",{d:"m10 14 11.77-6.87"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v8=["svg",t,[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"}],["path",{d:"M5 8h14"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"}],["path",{d:"m12 8 1-6h2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g8=["svg",t,[["circle",{cx:"12",cy:"12",r:"8"}],["line",{x1:"3",x2:"6",y1:"3",y2:"6"}],["line",{x1:"21",x2:"18",y1:"3",y2:"6"}],["line",{x1:"3",x2:"6",y1:"21",y2:"18"}],["line",{x1:"21",x2:"18",y1:"21",y2:"18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u8=["svg",t,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y8=["svg",t,[["path",{d:"M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["path",{d:"M2 6h4"}],["path",{d:"M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m8=["svg",t,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 12a9 3 0 0 0 5 2.69"}],["path",{d:"M21 9.3V5"}],["path",{d:"M3 5v14a9 3 0 0 0 6.47 2.88"}],["path",{d:"M12 12v4h4"}],["path",{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x8=["svg",t,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84"}],["path",{d:"M21 5V8"}],["path",{d:"M21 12L18 17H22L19 22"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f8=["svg",t,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _8=["svg",t,[["path",{d:"M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"}],["path",{d:"m12 9 6 6"}],["path",{d:"m18 9-6 6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A8=["svg",t,[["circle",{cx:"12",cy:"4",r:"2"}],["path",{d:"M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8"}],["path",{d:"M3.2 14.8a9 9 0 0 0 17.6 0"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w8=["svg",t,[["circle",{cx:"19",cy:"19",r:"2"}],["circle",{cx:"5",cy:"5",r:"2"}],["path",{d:"M6.48 3.66a10 10 0 0 1 13.86 13.86"}],["path",{d:"m6.41 6.41 11.18 11.18"}],["path",{d:"M3.66 6.48a10 10 0 0 0 13.86 13.86"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C8=["svg",t,[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=["svg",t,[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"}],["path",{d:"M9.2 9.2h.01"}],["path",{d:"m14.5 9.5-5 5"}],["path",{d:"M14.7 14.8h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H8=["svg",t,[["path",{d:"M12 8v8"}],["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E8=["svg",t,[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V8=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L8=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M15 9h.01"}],["path",{d:"M9 15h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b8=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M8 16h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S8=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 16h.01"}],["path",{d:"M16 16h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T8=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 16h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O8=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 12h.01"}],["path",{d:"M8 16h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D8=["svg",t,[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 14h.01"}],["path",{d:"M15 6h.01"}],["path",{d:"M18 9h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P8=["svg",t,[["path",{d:"M12 3v14"}],["path",{d:"M5 10h14"}],["path",{d:"M5 21h14"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N8=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k8=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R8=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"12",r:"5"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I8=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $8=["svg",t,[["circle",{cx:"12",cy:"6",r:"1"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12"}],["circle",{cx:"12",cy:"18",r:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z8=["svg",t,[["path",{d:"M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8"}],["path",{d:"m17 6-2.891-2.891"}],["path",{d:"M2 15c3.333-3 6.667-3 10-3"}],["path",{d:"m2 2 20 20"}],["path",{d:"m20 9 .891.891"}],["path",{d:"M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1"}],["path",{d:"M3.109 14.109 4 15"}],["path",{d:"m6.5 12.5 1 1"}],["path",{d:"m7 18 2.891 2.891"}],["path",{d:"M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B8=["svg",t,[["path",{d:"m10 16 1.5 1.5"}],["path",{d:"m14 8-1.5-1.5"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"}],["path",{d:"m16.5 10.5 1 1"}],["path",{d:"m17 6-2.891-2.891"}],["path",{d:"M2 15c6.667-6 13.333 0 20-6"}],["path",{d:"m20 9 .891.891"}],["path",{d:"M3.109 14.109 4 15"}],["path",{d:"m6.5 12.5 1 1"}],["path",{d:"m7 18 2.891 2.891"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z8=["svg",t,[["path",{d:"M2 8h20"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 16h12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F8=["svg",t,[["path",{d:"M11.25 16.25h1.5L12 17z"}],["path",{d:"M16 14v.5"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"}],["path",{d:"M8 14v.5"}],["path",{d:"M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q8=["svg",t,[["line",{x1:"12",x2:"12",y1:"2",y2:"22"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U8=["svg",t,[["path",{d:"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W8=["svg",t,[["path",{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"}],["path",{d:"M2 20h20"}],["path",{d:"M14 12v.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K8=["svg",t,[["path",{d:"M13 4h3a2 2 0 0 1 2 2v14"}],["path",{d:"M2 20h3"}],["path",{d:"M13 20h9"}],["path",{d:"M10 12v.01"}],["path",{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G8=["svg",t,[["circle",{cx:"12.1",cy:"12.1",r:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j8=["svg",t,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y8=["svg",t,[["path",{d:"m12.99 6.74 1.93 3.44"}],["path",{d:"M19.136 12a10 10 0 0 1-14.271 0"}],["path",{d:"m21 21-2.16-3.84"}],["path",{d:"m3 21 8.02-14.26"}],["circle",{cx:"12",cy:"5",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X8=["svg",t,[["path",{d:"M10 11h.01"}],["path",{d:"M14 6h.01"}],["path",{d:"M18 6h.01"}],["path",{d:"M6.5 13.1h.01"}],["path",{d:"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3"}],["path",{d:"M17.4 9.9c-.8.8-2 .8-2.8 0"}],["path",{d:"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"}],["path",{d:"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q8=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J8=["svg",t,[["path",{d:"M14 9c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1Z"}],["path",{d:"M18 6h4"}],["path",{d:"M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3"}],["path",{d:"m5 10-2 8"}],["path",{d:"M12 10v3c0 .6-.4 1-1 1H8"}],["path",{d:"m7 18 2-8"}],["path",{d:"M5 22c-1.7 0-3-1.3-3-3 0-.6.4-1 1-1h7c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t7=["svg",t,[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a7=["svg",t,[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e7=["svg",t,[["path",{d:"m2 2 8 8"}],["path",{d:"m22 2-8 8"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5"}],["path",{d:"M7 13.4v7.9"}],["path",{d:"M12 14v8"}],["path",{d:"M17 13.4v7.9"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h7=["svg",t,[["path",{d:"M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23"}],["path",{d:"m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s7=["svg",t,[["path",{d:"M14.4 14.4 9.6 9.6"}],["path",{d:"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"}],["path",{d:"m21.5 21.5-1.4-1.4"}],["path",{d:"M3.9 3.9 2.5 2.5"}],["path",{d:"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n7=["svg",t,[["path",{d:"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46"}],["path",{d:"M6 8.5c0-.75.13-1.47.36-2.14"}],["path",{d:"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76"}],["path",{d:"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c7=["svg",t,[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d7=["svg",t,[["path",{d:"M7 3.34V5a3 3 0 0 0 3 3"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"}],["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54"}],["path",{d:"M12 2a10 10 0 1 0 9.54 13"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=["svg",t,[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r7=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a7 7 0 1 0 10 10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i7=["svg",t,[["circle",{cx:"11.5",cy:"12.5",r:"3.5"}],["path",{d:"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o7=["svg",t,[["path",{d:"M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625"}],["path",{d:"M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p7=["svg",t,[["path",{d:"M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=["svg",t,[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=["svg",t,[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l7=["svg",t,[["line",{x1:"5",x2:"19",y1:"9",y2:"9"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M7=["svg",t,[["line",{x1:"5",x2:"19",y1:"9",y2:"9"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v7=["svg",t,[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"}],["path",{d:"M22 21H7"}],["path",{d:"m5 11 9 9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g7=["svg",t,[["path",{d:"m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z"}],["path",{d:"M6 8v1"}],["path",{d:"M10 8v1"}],["path",{d:"M14 8v1"}],["path",{d:"M18 8v1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u7=["svg",t,[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y7=["svg",t,[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m7=["svg",t,[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x7=["svg",t,[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f7=["svg",t,[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _7=["svg",t,[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A7=["svg",t,[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M17 18h1"}],["path",{d:"M12 18h1"}],["path",{d:"M7 18h1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w7=["svg",t,[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"}],["path",{d:"M12 12v.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C7=["svg",t,[["polygon",{points:"13 19 22 12 13 5 13 19"}],["polygon",{points:"2 19 11 12 2 5 2 19"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H7=["svg",t,[["path",{d:"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"}],["path",{d:"M16 8 2 22"}],["path",{d:"M17.5 15H9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E7=["svg",t,[["path",{d:"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}],["path",{d:"M6 8h4"}],["path",{d:"M6 18h4"}],["path",{d:"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}],["path",{d:"M14 8h4"}],["path",{d:"M14 18h4"}],["path",{d:"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V7=["svg",t,[["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M12 2v4"}],["path",{d:"m6.8 15-3.5 2"}],["path",{d:"m20.7 7-3.5 2"}],["path",{d:"M6.8 9 3.3 7"}],["path",{d:"m20.7 17-3.5-2"}],["path",{d:"m9 22 3-8 3 8"}],["path",{d:"M8 22h8"}],["path",{d:"M18 18.7a9 9 0 1 0-12 0"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L7=["svg",t,[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b7=["svg",t,[["path",{d:"M10 12v-1"}],["path",{d:"M10 18v-2"}],["path",{d:"M10 7V6"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01"}],["circle",{cx:"10",cy:"20",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S7=["svg",t,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"3",cy:"17",r:"1"}],["path",{d:"M2 17v-3a4 4 0 0 1 8 0v3"}],["circle",{cx:"9",cy:"17",r:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T7=["svg",t,[["path",{d:"M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=["svg",t,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m8 18 4-4"}],["path",{d:"M8 10v8h8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O7=["svg",t,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m14 12.5 1 5.5-3-1-3 1 1-5.5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D7=["svg",t,[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}],["path",{d:"M7 16.5 8 22l-3-1-3 1 1-5.5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P7=["svg",t,[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z"}],["path",{d:"M7 17v5"}],["path",{d:"M11.7 14.2 7 17l-4.7-2.8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=["svg",t,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 18v-2"}],["path",{d:"M12 18v-4"}],["path",{d:"M16 18v-6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=["svg",t,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 18v-1"}],["path",{d:"M12 18v-6"}],["path",{d:"M16 18v-3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=["svg",t,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m16 13-3.5 3.5-2-2L8 17"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=["svg",t,[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5"}],["path",{d:"M4.017 11.512a6 6 0 1 0 8.466 8.475"}],["path",{d:"M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N7=["svg",t,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m3 15 2 2 4-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k7=["svg",t,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m9 15 2 2 4-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R7=["svg",t,[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"8",cy:"16",r:"6"}],["path",{d:"M9.5 17.5 8 16.25V14"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I7=["svg",t,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m5 12-3 3 3 3"}],["path",{d:"m9 18 3-3-3-3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $7=["svg",t,[["path",{d:"M10 12.5 8 15l2 2.5"}],["path",{d:"m14 12.5 2 2.5-2 2.5"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=["svg",t,[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m3.2 12.9-.9-.4"}],["path",{d:"m3.2 15.1-.9.4"}],["path",{d:"M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5"}],["path",{d:"m4.9 11.2-.4-.9"}],["path",{d:"m4.9 16.8-.4.9"}],["path",{d:"m7.5 10.3-.4.9"}],["path",{d:"m7.5 17.7-.4-.9"}],["path",{d:"m9.7 12.5-.9.4"}],["path",{d:"m9.7 15.5-.9-.4"}],["circle",{cx:"6",cy:"14",r:"3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z7=["svg",t,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B7=["svg",t,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["rect",{width:"4",height:"6",x:"2",y:"12",rx:"2"}],["path",{d:"M10 12h2v6"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z7=["svg",t,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M12 18v-6"}],["path",{d:"m9 15 3 3 3-3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F7=["svg",t,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q7=["svg",t,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"10",cy:"12",r:"2"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U7=["svg",t,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M2 15h10"}],["path",{d:"m9 18 3-3-3-3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W7=["svg",t,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"}],["path",{d:"M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K7=["svg",t,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G7=["svg",t,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"4",cy:"16",r:"2"}],["path",{d:"m10 10-4.5 4.5"}],["path",{d:"m9 11 1 1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j7=["svg",t,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["circle",{cx:"10",cy:"16",r:"2"}],["path",{d:"m16 10-4.5 4.5"}],["path",{d:"m15 11 1 1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y7=["svg",t,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"5",x:"2",y:"13",rx:"1"}],["path",{d:"M8 13v-2a2 2 0 1 0-4 0v2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X7=["svg",t,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["rect",{width:"8",height:"6",x:"8",y:"12",rx:"1"}],["path",{d:"M10 12v-2a2 2 0 1 1 4 0v2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q7=["svg",t,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M3 15h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J7=["svg",t,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M9 15h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=["svg",t,[["circle",{cx:"14",cy:"16",r:"2"}],["circle",{cx:"6",cy:"18",r:"2"}],["path",{d:"M4 12.4V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-7.5"}],["path",{d:"M8 18v-7.7L16 9v7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=["svg",t,[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6"}],["path",{d:"m5 11-3 3"}],["path",{d:"m5 17-3-3h10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=["svg",t,[["path",{d:"m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["path",{d:"M8 18h1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=["svg",t,[["path",{d:"M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=["svg",t,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M3 15h6"}],["path",{d:"M6 12v6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=["svg",t,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=["svg",t,[["path",{d:"M12 17h.01"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=["svg",t,[["path",{d:"M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M16 14a2 2 0 0 0-2 2"}],["path",{d:"M20 14a2 2 0 0 1 2 2"}],["path",{d:"M20 22a2 2 0 0 0 2-2"}],["path",{d:"M16 22a2 2 0 0 1-2-2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=["svg",t,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5"}],["path",{d:"M13.3 16.3 15 18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=["svg",t,[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"m9 18-1.5-1.5"}],["circle",{cx:"5",cy:"14",r:"3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=["svg",t,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 12h8"}],["path",{d:"M10 11v2"}],["path",{d:"M8 17h8"}],["path",{d:"M14 16v2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=["svg",t,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 13h2"}],["path",{d:"M14 13h2"}],["path",{d:"M8 17h2"}],["path",{d:"M14 17h2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=["svg",t,[["path",{d:"M21 7h-3a2 2 0 0 1-2-2V2"}],["path",{d:"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z"}],["path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15"}],["path",{d:"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=["svg",t,[["path",{d:"m10 18 3-3-3-3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=["svg",t,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m8 16 2-2-2-2"}],["path",{d:"M12 18h4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=["svg",t,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=["svg",t,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M2 13v-1h6v1"}],["path",{d:"M5 12v6"}],["path",{d:"M4 18h2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=["svg",t,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M9 13v-1h6v1"}],["path",{d:"M12 12v6"}],["path",{d:"M11 18h2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=["svg",t,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M12 12v6"}],["path",{d:"m15 15-3-3-3 3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=["svg",t,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"6",x:"2",y:"12",rx:"1"}],["path",{d:"m10 15.5 4 2.5v-6l-4 2.5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=["svg",t,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m10 11 5 3-5 3v-6Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=["svg",t,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 15h.01"}],["path",{d:"M11.5 13.5a2.5 2.5 0 0 1 0 3"}],["path",{d:"M15 12a5 5 0 0 1 0 6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=["svg",t,[["path",{d:"M11 11a5 5 0 0 1 0 6"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 6.765V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-.93-.23"}],["path",{d:"M7 10.51a.5.5 0 0 0-.826-.38l-1.893 1.628A1 1 0 0 1 3.63 12H2.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.129a1 1 0 0 1 .652.242l1.893 1.63a.5.5 0 0 0 .826-.38z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=["svg",t,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=["svg",t,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m8 12.5-5 5"}],["path",{d:"m3 12.5 5 5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=["svg",t,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m14.5 12.5-5 5"}],["path",{d:"m9.5 12.5 5 5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=["svg",t,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=["svg",t,[["path",{d:"M20 7h-3a2 2 0 0 1-2-2V2"}],["path",{d:"M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"}],["path",{d:"M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 3v18"}],["path",{d:"M3 7.5h4"}],["path",{d:"M3 12h18"}],["path",{d:"M3 16.5h4"}],["path",{d:"M17 3v18"}],["path",{d:"M17 7.5h4"}],["path",{d:"M17 16.5h4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=["svg",t,[["path",{d:"M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055"}],["path",{d:"m22 3-5 5"}],["path",{d:"m17 3 5 5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=["svg",t,[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=["svg",t,[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02"}],["path",{d:"M2 12a10 10 0 0 1 18-6"}],["path",{d:"M2 16h.01"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=["svg",t,[["path",{d:"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5"}],["path",{d:"M9 18h8"}],["path",{d:"M18 3h-3"}],["path",{d:"M11 3a6 6 0 0 0-6 6v11"}],["path",{d:"M5 13h4"}],["path",{d:"M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=["svg",t,[["path",{d:"M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=["svg",t,[["path",{d:"M2 16s9-15 20-4C11 23 2 8 2 8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=["svg",t,[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"}],["path",{d:"M18 12v.5"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=["svg",t,[["path",{d:"M8 2c3 0 5 2 8 2s4-1 4-1v11"}],["path",{d:"M4 22V4"}],["path",{d:"M4 15s1-1 4-1 5 2 8 2"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=["svg",t,[["path",{d:"M17 22V2L7 7l10 5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=["svg",t,[["path",{d:"M7 22V2l10 5-10 5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=["svg",t,[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=["svg",t,[["path",{d:"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"}],["path",{d:"m5 22 14-4"}],["path",{d:"m5 18 14 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=["svg",t,[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=["svg",t,[["path",{d:"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4"}],["path",{d:"M7 2h11v4c0 2-2 2-2 4v1"}],["line",{x1:"11",x2:"18",y1:"6",y2:"6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=["svg",t,[["path",{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"}],["line",{x1:"6",x2:"18",y1:"6",y2:"6"}],["line",{x1:"12",x2:"12",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=["svg",t,[["path",{d:"M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542"}],["path",{d:"M10 2v2.343"}],["path",{d:"M14 2v6.343"}],["path",{d:"M8.5 2h7"}],["path",{d:"M7 16h9"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=["svg",t,[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"}],["path",{d:"M8.5 2h7"}],["path",{d:"M7 16h10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=["svg",t,[["path",{d:"M10 2v7.31"}],["path",{d:"M14 9.3V1.99"}],["path",{d:"M8.5 2h7"}],["path",{d:"M14 9.3a6.5 6.5 0 1 1-4 0"}],["path",{d:"M5.52 16h12.96"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=["svg",t,[["path",{d:"m3 7 5 5-5 5V7"}],["path",{d:"m21 7-5 5 5 5V7"}],["path",{d:"M12 20v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 2v2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=["svg",t,[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"}],["path",{d:"M12 20v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 2v2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=["svg",t,[["path",{d:"m17 3-5 5-5-5h10"}],["path",{d:"m17 21-5-5-5 5h10"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=["svg",t,[["path",{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=["svg",t,[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M12 10v12"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=["svg",t,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"}],["path",{d:"M12 7.5V9"}],["path",{d:"M7.5 12H9"}],["path",{d:"M16.5 12H15"}],["path",{d:"M12 16.5V15"}],["path",{d:"m8 8 1.88 1.88"}],["path",{d:"M14.12 9.88 16 8"}],["path",{d:"m8 16 1.88-1.88"}],["path",{d:"M14.12 14.12 16 16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=["svg",t,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=["svg",t,[["path",{d:"M2 12h6"}],["path",{d:"M22 12h-6"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"m19 9-3 3 3 3"}],["path",{d:"m5 15 3-3-3-3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=["svg",t,[["path",{d:"M12 22v-6"}],["path",{d:"M12 8V2"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}],["path",{d:"m15 19-3-3-3 3"}],["path",{d:"m15 5-3 3-3-3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=["svg",t,[["circle",{cx:"15",cy:"19",r:"2"}],["path",{d:"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"}],["path",{d:"M15 11v-1"}],["path",{d:"M15 17v-2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=["svg",t,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"m9 13 2 2 4-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=["svg",t,[["circle",{cx:"16",cy:"16",r:"6"}],["path",{d:"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2"}],["path",{d:"M16 14v2l1 1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=["svg",t,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M2 10h20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=["svg",t,[["path",{d:"M10 10.5 8 13l2 2.5"}],["path",{d:"m14 10.5 2 2.5-2 2.5"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=["svg",t,[["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3"}],["path",{d:"m21.7 19.4-.9-.3"}],["path",{d:"m15.2 16.9-.9-.3"}],["path",{d:"m16.6 21.7.3-.9"}],["path",{d:"m19.1 15.2.3-.9"}],["path",{d:"m19.6 21.7-.4-1"}],["path",{d:"m16.8 15.3-.4-1"}],["path",{d:"m14.3 19.6 1-.4"}],["path",{d:"m20.7 16.8 1-.4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=["svg",t,[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["circle",{cx:"12",cy:"13",r:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=["svg",t,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M12 10v6"}],["path",{d:"m15 13-3 3-3-3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=["svg",t,[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"}],["circle",{cx:"13",cy:"12",r:"2"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8"}],["circle",{cx:"20",cy:"19",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=["svg",t,[["circle",{cx:"12",cy:"13",r:"2"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M14 13h3"}],["path",{d:"M7 13h3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=["svg",t,[["path",{d:"M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5"}],["path",{d:"M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01c.95.95 1 2.53-.2 3.74L17.5 21Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=["svg",t,[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"}],["path",{d:"M2 13h10"}],["path",{d:"m9 16 3-3-3-3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=["svg",t,[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["path",{d:"M8 10v4"}],["path",{d:"M12 10v2"}],["path",{d:"M16 10v6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=["svg",t,[["circle",{cx:"16",cy:"20",r:"2"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2"}],["path",{d:"m22 14-4.5 4.5"}],["path",{d:"m21 15 1 1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=["svg",t,[["rect",{width:"8",height:"5",x:"14",y:"17",rx:"1"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=["svg",t,[["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=["svg",t,[["path",{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"}],["circle",{cx:"14",cy:"15",r:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=["svg",t,[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=["svg",t,[["path",{d:"M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5"}],["path",{d:"M2 13h10"}],["path",{d:"m5 10-3 3 3 3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=["svg",t,[["path",{d:"M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5"}],["path",{d:"M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=["svg",t,[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=["svg",t,[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["circle",{cx:"12",cy:"13",r:"2"}],["path",{d:"M12 15v5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=["svg",t,[["circle",{cx:"11.5",cy:"12.5",r:"2.5"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M13.3 14.3 15 16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=["svg",t,[["path",{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"}],["path",{d:"m21 21-1.9-1.9"}],["circle",{cx:"17",cy:"17",r:"3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=["svg",t,[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"}],["path",{d:"m8 16 3-3-3-3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=["svg",t,[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5"}],["path",{d:"M12 10v4h4"}],["path",{d:"m12 14 1.535-1.605a5 5 0 0 1 8 1.5"}],["path",{d:"M22 22v-4h-4"}],["path",{d:"m22 18-1.535 1.605a5 5 0 0 1-8-1.5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=["svg",t,[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=["svg",t,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M12 10v6"}],["path",{d:"m9 13 3-3 3 3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=["svg",t,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"m9.5 10.5 5 5"}],["path",{d:"m14.5 10.5-5 5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=["svg",t,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=["svg",t,[["path",{d:"M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"}],["path",{d:"M2 8v11a2 2 0 0 0 2 2h14"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=["svg",t,[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"}],["path",{d:"M16 17h4"}],["path",{d:"M4 13h4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=["svg",t,[["path",{d:"M12 12H5a2 2 0 0 0-2 2v5"}],["circle",{cx:"13",cy:"19",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=["svg",t,[["polyline",{points:"15 17 20 12 15 7"}],["path",{d:"M4 18v-2a4 4 0 0 1 4-4h12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=["svg",t,[["line",{x1:"22",x2:"2",y1:"6",y2:"6"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=["svg",t,[["path",{d:"M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=["svg",t,[["line",{x1:"3",x2:"15",y1:"22",y2:"22"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=["svg",t,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["rect",{width:"10",height:"8",x:"7",y:"8",rx:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=["svg",t,[["path",{d:"M2 7v10"}],["path",{d:"M6 5v14"}],["rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=["svg",t,[["path",{d:"M2 3v18"}],["rect",{width:"12",height:"18",x:"6",y:"3",rx:"2"}],["path",{d:"M22 3v18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=["svg",t,[["rect",{width:"18",height:"14",x:"3",y:"3",rx:"2"}],["path",{d:"M4 21h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 21h1"}],["path",{d:"M19 21h1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=["svg",t,[["path",{d:"M7 2h10"}],["path",{d:"M5 6h14"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=["svg",t,[["path",{d:"M3 2h18"}],["rect",{width:"18",height:"12",x:"3",y:"6",rx:"2"}],["path",{d:"M3 22h18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=["svg",t,[["line",{x1:"6",x2:"10",y1:"11",y2:"11"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=["svg",t,[["line",{x1:"6",x2:"10",y1:"12",y2:"12"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=["svg",t,[["path",{d:"m12 14 4-4"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=["svg",t,[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"}],["path",{d:"m16 16 6-6"}],["path",{d:"m8 8 6-6"}],["path",{d:"m9 7 8 8"}],["path",{d:"m21 11-8-8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=["svg",t,[["path",{d:"M6 3h12l4 6-10 13L2 9Z"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6"}],["path",{d:"M2 9h20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=["svg",t,[["path",{d:"M9 10h.01"}],["path",{d:"M15 10h.01"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=["svg",t,[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}],["path",{d:"M12 8v13"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=["svg",t,[["path",{d:"M6 3v12"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M15 6a9 9 0 0 0-9 9"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=["svg",t,[["line",{x1:"6",x2:"6",y1:"3",y2:"15"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M18 9a9 9 0 0 1-9 9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=["svg",t,[["circle",{cx:"12",cy:"12",r:"3"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=["svg",t,[["path",{d:"M12 3v6"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 15v6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=["svg",t,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7"}],["path",{d:"m15 9-3-3 3-3"}],["circle",{cx:"19",cy:"18",r:"3"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9"}],["path",{d:"m9 15 3 3-3 3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=["svg",t,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t9=["svg",t,[["circle",{cx:"12",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["circle",{cx:"18",cy:"6",r:"3"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"}],["path",{d:"M12 12v3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a9=["svg",t,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v6"}],["circle",{cx:"5",cy:"18",r:"3"}],["path",{d:"M12 3v18"}],["circle",{cx:"19",cy:"6",r:"3"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e9=["svg",t,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h9=["svg",t,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v12"}],["circle",{cx:"19",cy:"18",r:"3"}],["path",{d:"m15 9-3-3 3-3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s9=["svg",t,[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 9v12"}],["path",{d:"m21 3-6 6"}],["path",{d:"m21 9-6-6"}],["path",{d:"M18 11.5V15"}],["circle",{cx:"18",cy:"18",r:"3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n9=["svg",t,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v12"}],["path",{d:"m15 9-3-3 3-3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v3"}],["path",{d:"M19 15v6"}],["path",{d:"M22 18h-6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c9=["svg",t,[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 9v12"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v3"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d9=["svg",t,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M18 6V5"}],["path",{d:"M18 11v-1"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r9=["svg",t,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i9=["svg",t,[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o9=["svg",t,[["path",{d:"m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p9=["svg",t,[["path",{d:"M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l9=["svg",t,[["circle",{cx:"6",cy:"15",r:"4"}],["circle",{cx:"18",cy:"15",r:"4"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M9=["svg",t,[["path",{d:"M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13"}],["path",{d:"M2 12h8.5"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v9=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g9=["svg",t,[["path",{d:"M12 13V2l8 4-8 4"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u9=["svg",t,[["path",{d:"M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"}],["path",{d:"M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"}],["path",{d:"M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"}],["path",{d:"M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y9=["svg",t,[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"}],["path",{d:"M22 10v6"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m9=["svg",t,[["path",{d:"M22 5V2l-5.89 5.89"}],["circle",{cx:"16.6",cy:"15.89",r:"3"}],["circle",{cx:"8.11",cy:"7.4",r:"3"}],["circle",{cx:"12.35",cy:"11.65",r:"3"}],["circle",{cx:"13.91",cy:"5.85",r:"3"}],["circle",{cx:"18.15",cy:"10.09",r:"3"}],["circle",{cx:"6.56",cy:"13.2",r:"3"}],["circle",{cx:"10.8",cy:"17.44",r:"3"}],["circle",{cx:"5",cy:"19",r:"3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x9=["svg",t,[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"}],["path",{d:"m16 19 2 2 4-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f9=["svg",t,[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"}],["path",{d:"M16 19h6"}],["path",{d:"M19 22v-6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _9=["svg",t,[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"}],["path",{d:"m16 16 5 5"}],["path",{d:"m16 21 5-5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 12h18"}],["path",{d:"M12 3v18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}],["path",{d:"M9 3v18"}],["path",{d:"M15 3v18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A9=["svg",t,[["circle",{cx:"12",cy:"9",r:"1"}],["circle",{cx:"19",cy:"9",r:"1"}],["circle",{cx:"5",cy:"9",r:"1"}],["circle",{cx:"12",cy:"15",r:"1"}],["circle",{cx:"19",cy:"15",r:"1"}],["circle",{cx:"5",cy:"15",r:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w9=["svg",t,[["circle",{cx:"9",cy:"12",r:"1"}],["circle",{cx:"9",cy:"5",r:"1"}],["circle",{cx:"9",cy:"19",r:"1"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"15",cy:"5",r:"1"}],["circle",{cx:"15",cy:"19",r:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C9=["svg",t,[["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"19",cy:"5",r:"1"}],["circle",{cx:"5",cy:"5",r:"1"}],["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}],["circle",{cx:"19",cy:"19",r:"1"}],["circle",{cx:"5",cy:"19",r:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H9=["svg",t,[["path",{d:"M3 7V5c0-1.1.9-2 2-2h2"}],["path",{d:"M17 3h2c1.1 0 2 .9 2 2v2"}],["path",{d:"M21 17v2c0 1.1-.9 2-2 2h-2"}],["path",{d:"M7 21H5c-1.1 0-2-.9-2-2v-2"}],["rect",{width:"7",height:"5",x:"7",y:"7",rx:"1"}],["rect",{width:"7",height:"5",x:"10",y:"12",rx:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E9=["svg",t,[["path",{d:"m11.9 12.1 4.514-4.514"}],["path",{d:"M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z"}],["path",{d:"m6 16 2 2"}],["path",{d:"M8.2 9.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4 2 2 0 0 0 1.8-1.2z"}],["circle",{cx:"11.5",cy:"12.5",r:".5",fill:"currentColor"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V9=["svg",t,[["path",{d:"M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856"}],["path",{d:"M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288"}],["path",{d:"M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025"}],["path",{d:"m8.5 16.5-1-1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L9=["svg",t,[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"}],["path",{d:"m18 15 4-4"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b9=["svg",t,[["path",{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"}],["path",{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"}],["path",{d:"m2 16 6 6"}],["circle",{cx:"16",cy:"9",r:"2.9"}],["circle",{cx:"6",cy:"5",r:"3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S9=["svg",t,[["path",{d:"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"}],["path",{d:"m2 15 6 6"}],["path",{d:"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=["svg",t,[["path",{d:"M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14"}],["path",{d:"m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"}],["path",{d:"m2 13 6 6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T9=["svg",t,[["path",{d:"M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"}],["path",{d:"M14 11V9a2 2 0 1 0-4 0v2"}],["path",{d:"M10 10.5V5a2 2 0 1 0-4 0v9"}],["path",{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O9=["svg",t,[["path",{d:"M12 3V2"}],["path",{d:"M5 10a7.1 7.1 0 0 1 14 0"}],["path",{d:"M4 10h16"}],["path",{d:"M2 14h12a2 2 0 1 1 0 4h-2"}],["path",{d:"m15.4 17.4 3.2-2.8a2 2 0 0 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2L5 18"}],["path",{d:"M5 14v7H2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D9=["svg",t,[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P9=["svg",t,[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"}],["path",{d:"m21 3 1 11h-2"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"}],["path",{d:"M3 4h8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N9=["svg",t,[["path",{d:"M12 2v8"}],["path",{d:"m16 6-4 4-4-4"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 18h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k9=["svg",t,[["path",{d:"m16 6-4-4-4 4"}],["path",{d:"M12 2v8"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 18h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R9=["svg",t,[["line",{x1:"22",x2:"2",y1:"12",y2:"12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I9=["svg",t,[["path",{d:"M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"}],["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6"}],["path",{d:"M14 6a6 6 0 0 1 6 6v3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $9=["svg",t,[["line",{x1:"4",x2:"20",y1:"9",y2:"9"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z9=["svg",t,[["path",{d:"m5.2 6.2 1.4 1.4"}],["path",{d:"M2 13h2"}],["path",{d:"M20 13h2"}],["path",{d:"m17.4 7.6 1.4-1.4"}],["path",{d:"M22 17H2"}],["path",{d:"M22 21H2"}],["path",{d:"M16 13a4 4 0 0 0-8 0"}],["path",{d:"M12 5V2.5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B9=["svg",t,[["path",{d:"M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z"}],["path",{d:"M7.5 12h9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z9=["svg",t,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"m17 12 3-2v8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F9=["svg",t,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q9=["svg",t,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"}],["path",{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U9=["svg",t,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17 10v4h4"}],["path",{d:"M21 10v8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W9=["svg",t,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17 13v-3h4"}],["path",{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K9=["svg",t,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["circle",{cx:"19",cy:"16",r:"2"}],["path",{d:"M20 10c-2 2-3 3.5-3 6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G9=["svg",t,[["path",{d:"M6 12h12"}],["path",{d:"M6 20V4"}],["path",{d:"M18 20V4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j9=["svg",t,[["path",{d:"M21 14h-1.343"}],["path",{d:"M9.128 3.47A9 9 0 0 1 21 12v3.343"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3"}],["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y9=["svg",t,[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X9=["svg",t,[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q9=["svg",t,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"m12 13-1-1 2-2-3-3 2-2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J9=["svg",t,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"}],["path",{d:"m18 15-2-2"}],["path",{d:"m15 18-2-2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=["svg",t,[["line",{x1:"2",y1:"2",x2:"22",y2:"22"}],["path",{d:"M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35"}],["path",{d:"M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=["svg",t,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=["svg",t,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=["svg",t,[["path",{d:"M11 8c2-3-2-3 0-6"}],["path",{d:"M15.5 8c2-3-2-3 0-6"}],["path",{d:"M6 10h.01"}],["path",{d:"M6 14h.01"}],["path",{d:"M10 16v-4"}],["path",{d:"M14 16v-4"}],["path",{d:"M18 16v-4"}],["path",{d:"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3"}],["path",{d:"M5 20v2"}],["path",{d:"M19 20v2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=["svg",t,[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=["svg",t,[["path",{d:"m9 11-6 6v3h9l3-3"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=["svg",t,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=["svg",t,[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27"}],["path",{d:"M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26"}],["path",{d:"M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25"}],["path",{d:"M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75"}],["path",{d:"M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24"}],["path",{d:"M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28"}],["path",{d:"M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=["svg",t,[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18"}],["path",{d:"M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88"}],["path",{d:"M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87"}],["path",{d:"M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08"}],["path",{d:"M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57"}],["path",{d:"M4.93 4.93 3 3a.7.7 0 0 1 0-1"}],["path",{d:"M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=["svg",t,[["path",{d:"M12 6v4"}],["path",{d:"M14 14h-4"}],["path",{d:"M14 18h-4"}],["path",{d:"M14 8h-4"}],["path",{d:"M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"}],["path",{d:"M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=["svg",t,[["path",{d:"M10 22v-6.57"}],["path",{d:"M12 11h.01"}],["path",{d:"M12 7h.01"}],["path",{d:"M14 15.43V22"}],["path",{d:"M15 16a5 5 0 0 0-6 0"}],["path",{d:"M16 11h.01"}],["path",{d:"M16 7h.01"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 7h.01"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=["svg",t,[["path",{d:"M5 22h14"}],["path",{d:"M5 2h14"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=["svg",t,[["path",{d:"M10 12V8.964"}],["path",{d:"M14 12V8.964"}],["path",{d:"M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z"}],["path",{d:"M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=["svg",t,[["path",{d:"M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354"}],["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M15 6h6"}],["path",{d:"M18 3v6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ia=["svg",t,[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=["svg",t,[["path",{d:"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"}],["path",{d:"M12.14 11a3.5 3.5 0 1 1 6.71 0"}],["path",{d:"M15.5 6.5a3.5 3.5 0 1 0-7 0"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=["svg",t,[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"}],["path",{d:"M17 7A5 5 0 0 0 7 7"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=["svg",t,[["path",{d:"M16 10h2"}],["path",{d:"M16 14h2"}],["path",{d:"M6.17 15a3 3 0 0 1 5.66 0"}],["circle",{cx:"9",cy:"11",r:"2"}],["rect",{x:"2",y:"5",width:"20",height:"14",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=["svg",t,[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"}],["path",{d:"m14 19 3 3v-5.5"}],["path",{d:"m17 22 3-3"}],["circle",{cx:"9",cy:"9",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=["svg",t,[["path",{d:"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=["svg",t,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=["svg",t,[["path",{d:"m11 16-5 5"}],["path",{d:"M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5"}],["path",{d:"M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"}],["circle",{cx:"9",cy:"9",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=["svg",t,[["path",{d:"M16 5h6"}],["path",{d:"M19 2v6"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}],["circle",{cx:"9",cy:"9",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=["svg",t,[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"}],["path",{d:"m14 19.5 3-3 3 3"}],["path",{d:"M17 22v-5.5"}],["circle",{cx:"9",cy:"9",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=["svg",t,[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"}],["circle",{cx:"12",cy:"8",r:"2"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=["svg",t,[["path",{d:"M12 3v12"}],["path",{d:"m8 11 4 4 4-4"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=["svg",t,[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=["svg",t,[["polyline",{points:"7 8 3 12 7 16"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=["svg",t,[["polyline",{points:"3 8 7 12 3 16"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=["svg",t,[["path",{d:"M6 3h12"}],["path",{d:"M6 8h12"}],["path",{d:"m6 13 8.5 8"}],["path",{d:"M6 13h3"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=["svg",t,[["path",{d:"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7h.01"}],["path",{d:"M17 7h.01"}],["path",{d:"M7 17h.01"}],["path",{d:"M17 17h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=["svg",t,[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=["svg",t,[["line",{x1:"19",x2:"10",y1:"4",y2:"4"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=["svg",t,[["path",{d:"M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8"}],["polyline",{points:"16 14 20 18 16 22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=["svg",t,[["path",{d:"M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4"}],["polyline",{points:"8 22 4 18 8 14"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=["svg",t,[["path",{d:"M12 9.5V21m0-11.5L6 3m6 6.5L18 3"}],["path",{d:"M6 15h12"}],["path",{d:"M6 11h12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=["svg",t,[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"}],["path",{d:"M6 15v-2"}],["path",{d:"M12 15V9"}],["circle",{cx:"12",cy:"6",r:"3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=["svg",t,[["path",{d:"M6 5v11"}],["path",{d:"M12 5v6"}],["path",{d:"M18 5v14"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=["svg",t,[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=["svg",t,[["path",{d:"M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z"}],["path",{d:"m14 7 3 3"}],["path",{d:"m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=["svg",t,[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"}],["path",{d:"m21 2-9.6 9.6"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=["svg",t,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 8h4"}],["path",{d:"M14 8h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"M2 12h20"}],["path",{d:"M6 12v4"}],["path",{d:"M10 12v4"}],["path",{d:"M14 12v4"}],["path",{d:"M18 12v4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=["svg",t,[["path",{d:"M 20 4 A2 2 0 0 1 22 6"}],["path",{d:"M 22 6 L 22 16.41"}],["path",{d:"M 7 16 L 16 16"}],["path",{d:"M 9.69 4 L 20 4"}],["path",{d:"M14 8h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"}],["path",{d:"M6 8h.01"}],["path",{d:"M8 12h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=["svg",t,[["path",{d:"M10 8h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M14 8h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"M6 8h.01"}],["path",{d:"M7 16h10"}],["path",{d:"M8 12h.01"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=["svg",t,[["path",{d:"M12 2v5"}],["path",{d:"M6 7h12l4 9H2l4-9Z"}],["path",{d:"M9.17 16a3 3 0 1 0 5.66 0"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=["svg",t,[["path",{d:"m14 5-3 3 2 7 8-8-7-2Z"}],["path",{d:"m14 5-3 3-3-3 3-3 3 3Z"}],["path",{d:"M9.5 6.5 4 12l3 6"}],["path",{d:"M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=["svg",t,[["path",{d:"M9 2h6l3 7H6l3-7Z"}],["path",{d:"M12 9v13"}],["path",{d:"M9 22h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=["svg",t,[["path",{d:"M11 13h6l3 7H8l3-7Z"}],["path",{d:"M14 13V8a2 2 0 0 0-2-2H8"}],["path",{d:"M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=["svg",t,[["path",{d:"M11 4h6l3 7H8l3-7Z"}],["path",{d:"M14 11v5a2 2 0 0 1-2 2H8"}],["path",{d:"M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=["svg",t,[["path",{d:"M8 2h8l4 10H4L8 2Z"}],["path",{d:"M12 12v6"}],["path",{d:"M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=["svg",t,[["path",{d:"m12 8 6-3-6-3v10"}],["path",{d:"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"}],["path",{d:"m6.49 12.85 11.02 6.3"}],["path",{d:"M17.51 12.85 6.5 19.15"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=["svg",t,[["line",{x1:"3",x2:"21",y1:"22",y2:"22"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11"}],["polygon",{points:"12 2 20 7 4 7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=["svg",t,[["path",{d:"m5 8 6 6"}],["path",{d:"m4 14 6-6 2-3"}],["path",{d:"M2 5h12"}],["path",{d:"M7 2h1"}],["path",{d:"m22 22-5-10-5 10"}],["path",{d:"M14 18h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=["svg",t,[["rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2"}],["line",{x1:"2",x2:"22",y1:"20",y2:"20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=["svg",t,[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=["svg",t,[["path",{d:"M7 22a5 5 0 0 1-2-4"}],["path",{d:"M7 16.93c.96.43 1.96.74 2.99.91"}],["path",{d:"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}],["path",{d:"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=["svg",t,[["path",{d:"M7 22a5 5 0 0 1-2-4"}],["path",{d:"M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=["svg",t,[["path",{d:"m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12"}],["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=["svg",t,[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"}],["path",{d:"m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"}],["path",{d:"m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=["svg",t,[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=["svg",t,[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=["svg",t,[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=["svg",t,[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=["svg",t,[["rect",{width:"7",height:"18",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=["svg",t,[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=["svg",t,[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=["svg",t,[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=["svg",t,[["path",{d:"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"}],["path",{d:"M2 22 17 7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=["svg",t,[["path",{d:"M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3"}],["path",{d:"M18 6V3a1 1 0 0 0-1-1h-3"}],["rect",{width:"8",height:"12",x:"8",y:"10",rx:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=["svg",t,[["path",{d:"M15 12h6"}],["path",{d:"M15 6h6"}],["path",{d:"m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13"}],["path",{d:"M3 18h18"}],["path",{d:"M4 11h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=["svg",t,[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1"}],["path",{d:"M7 3v18"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=["svg",t,[["path",{d:"m16 6 4 14"}],["path",{d:"M12 6v14"}],["path",{d:"M8 8v12"}],["path",{d:"M4 4v16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m4.93 4.93 4.24 4.24"}],["path",{d:"m14.83 9.17 4.24-4.24"}],["path",{d:"m14.83 14.83 4.24 4.24"}],["path",{d:"m9.17 14.83-4.24 4.24"}],["circle",{cx:"12",cy:"12",r:"4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=["svg",t,[["path",{d:"M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2"}],["path",{d:"M6 12h4"}],["path",{d:"M14 12h2v8"}],["path",{d:"M6 20h4"}],["path",{d:"M14 20h4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=["svg",t,[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=["svg",t,[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=["svg",t,[["path",{d:"M9 17H7A5 5 0 0 1 7 7"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=["svg",t,[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=["svg",t,[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=["svg",t,[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=["svg",t,[["path",{d:"M11 18H3"}],["path",{d:"m15 18 2 2 4-4"}],["path",{d:"M16 12H3"}],["path",{d:"M16 6H3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=["svg",t,[["path",{d:"m3 17 2 2 4-4"}],["path",{d:"m3 7 2 2 4-4"}],["path",{d:"M13 6h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=["svg",t,[["path",{d:"m3 10 2.5-2.5L3 5"}],["path",{d:"m3 19 2.5-2.5L3 14"}],["path",{d:"M10 6h11"}],["path",{d:"M10 12h11"}],["path",{d:"M10 18h11"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=["svg",t,[["path",{d:"M16 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M10 18H3"}],["path",{d:"M21 6v10a2 2 0 0 1-2 2h-5"}],["path",{d:"m16 16-2 2 2 2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=["svg",t,[["path",{d:"M3 6h18"}],["path",{d:"M7 12h10"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=["svg",t,[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"M21 12h-6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=["svg",t,[["path",{d:"M21 15V6"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"}],["path",{d:"M12 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M12 18H3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=["svg",t,[["line",{x1:"10",x2:"21",y1:"6",y2:"6"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18"}],["path",{d:"M4 6h1v4"}],["path",{d:"M4 10h2"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=["svg",t,[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"M18 9v6"}],["path",{d:"M21 12h-6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=["svg",t,[["path",{d:"M21 6H3"}],["path",{d:"M7 12H3"}],["path",{d:"M7 18H3"}],["path",{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"}],["path",{d:"M11 10v4h4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=["svg",t,[["path",{d:"M16 12H3"}],["path",{d:"M16 18H3"}],["path",{d:"M10 6H3"}],["path",{d:"M21 18V8a2 2 0 0 0-2-2h-5"}],["path",{d:"m16 8-2-2 2-2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=["svg",t,[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1"}],["path",{d:"m3 17 2 2 4-4"}],["path",{d:"M13 6h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=["svg",t,[["path",{d:"M21 12h-8"}],["path",{d:"M21 6H8"}],["path",{d:"M21 18h-8"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=["svg",t,[["path",{d:"M12 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M12 18H3"}],["path",{d:"m16 12 5 3-5 3v-6Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=["svg",t,[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"m19 10-4 4"}],["path",{d:"m15 10 4 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=["svg",t,[["line",{x1:"8",x2:"21",y1:"6",y2:"6"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa=["svg",t,[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=["svg",t,[["path",{d:"M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0"}],["path",{d:"M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6"}],["path",{d:"M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=["svg",t,[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=["svg",t,[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["circle",{cx:"12",cy:"12",r:"7"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=["svg",t,[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["path",{d:"M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11"}],["path",{d:"M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=["svg",t,[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["circle",{cx:"12",cy:"12",r:"7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=["svg",t,[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=["svg",t,[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=["svg",t,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=["svg",t,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=["svg",t,[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}],["polyline",{points:"10 17 15 12 10 7"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=["svg",t,[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}],["polyline",{points:"16 17 21 12 16 7"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=["svg",t,[["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}],["path",{d:"M13 6h8"}],["path",{d:"M3 12h1"}],["path",{d:"M3 18h1"}],["path",{d:"M3 6h1"}],["path",{d:"M8 12h1"}],["path",{d:"M8 18h1"}],["path",{d:"M8 6h1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=["svg",t,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}],["path",{d:"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=["svg",t,[["path",{d:"M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"}],["path",{d:"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"}],["path",{d:"M10 20h4"}],["circle",{cx:"16",cy:"20",r:"2"}],["circle",{cx:"8",cy:"20",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=["svg",t,[["path",{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"}],["path",{d:"m5 8 4 4"}],["path",{d:"m12 15 4 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=["svg",t,[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"m16 19 2 2 4-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=["svg",t,[["path",{d:"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M16 19h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=["svg",t,[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=["svg",t,[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M19 16v6"}],["path",{d:"M16 19h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=["svg",t,[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"}],["path",{d:"M20 22v.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=["svg",t,[["path",{d:"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m22 22-1.5-1.5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=["svg",t,[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M20 14v4"}],["path",{d:"M20 22v.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=["svg",t,[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"m17 17 4 4"}],["path",{d:"m21 17-4 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=["svg",t,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=["svg",t,[["path",{d:"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"}],["polyline",{points:"15,9 18,9 18,11"}],["path",{d:"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2"}],["line",{x1:"6",x2:"7",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=["svg",t,[["rect",{width:"16",height:"13",x:"6",y:"4",rx:"2"}],["path",{d:"m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"}],["path",{d:"M2 8v11c0 1.1.9 2 2 2h14"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=["svg",t,[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"m9 10 2 2 4-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=["svg",t,[["path",{d:"M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"m16 18 2 2 4-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=["svg",t,[["path",{d:"M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z"}],["path",{d:"M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2"}],["path",{d:"M18 22v-3"}],["circle",{cx:"10",cy:"10",r:"3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=["svg",t,[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=["svg",t,[["path",{d:"M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M16 18h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=["svg",t,[["path",{d:"M12.75 7.09a3 3 0 0 1 2.16 2.16"}],["path",{d:"M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533"}],["path",{d:"M9.13 9.13a3 3 0 0 0 3.74 3.74"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=["svg",t,[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"M12 7v6"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=["svg",t,[["path",{d:"M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M16 18h6"}],["path",{d:"M19 15v6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=["svg",t,[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=["svg",t,[["path",{d:"M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"m21.5 15.5-5 5"}],["path",{d:"m21.5 20.5-5-5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=["svg",t,[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["circle",{cx:"12",cy:"10",r:"3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=["svg",t,[["path",{d:"M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=["svg",t,[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"}],["path",{d:"M15 5.764v15"}],["path",{d:"M9 3.236v15"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=["svg",t,[["path",{d:"M8 22h8"}],["path",{d:"M12 11v11"}],["path",{d:"m19 3-7 8-7-8Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=["svg",t,[["polyline",{points:"15 3 21 3 21 9"}],["polyline",{points:"9 21 3 21 3 15"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=["svg",t,[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=["svg",t,[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"}],["path",{d:"M11 12 5.12 2.2"}],["path",{d:"m13 12 5.88-9.8"}],["path",{d:"M8 7h8"}],["circle",{cx:"12",cy:"17",r:"5"}],["path",{d:"M12 18v-2h-.5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=["svg",t,[["path",{d:"M9.26 9.26 3 11v3l14.14 3.14"}],["path",{d:"M21 15.34V6l-7.31 2.03"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=["svg",t,[["path",{d:"m3 11 18-5v12L3 14v-3z"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=["svg",t,[["path",{d:"M6 19v-3"}],["path",{d:"M10 19v-3"}],["path",{d:"M14 19v-3"}],["path",{d:"M18 19v-3"}],["path",{d:"M8 11V9"}],["path",{d:"M16 11V9"}],["path",{d:"M12 11V9"}],["path",{d:"M2 15h20"}],["path",{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=["svg",t,[["line",{x1:"4",x2:"20",y1:"12",y2:"12"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=["svg",t,[["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"}],["path",{d:"m20 22-5-5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=["svg",t,[["path",{d:"M10 9.5 8 12l2 2.5"}],["path",{d:"m14 9.5 2 2.5-2 2.5"}],["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=["svg",t,[["path",{d:"M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1"}],["path",{d:"M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1"}],["path",{d:"M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5"}],["path",{d:"M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1"}],["path",{d:"M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1"}],["path",{d:"M3.5 17.5 2 22l4.5-1.5"}],["path",{d:"M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5"}],["path",{d:"M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=["svg",t,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=["svg",t,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=["svg",t,[["path",{d:"M20.5 14.9A9 9 0 0 0 9.1 3.5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=["svg",t,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=["svg",t,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=["svg",t,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"m10 15-3-3 3-3"}],["path",{d:"M7 12h7a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=["svg",t,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=["svg",t,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=["svg",t,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=["svg",t,[["path",{d:"M10 7.5 8 10l2 2.5"}],["path",{d:"m14 7.5 2 2.5-2 2.5"}],["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=["svg",t,[["path",{d:"M10 17H7l-4 4v-7"}],["path",{d:"M14 17h1"}],["path",{d:"M14 3h1"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 14v1a2 2 0 0 1-2 2"}],["path",{d:"M21 9v1"}],["path",{d:"M3 9v1"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M9 3h1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=["svg",t,[["path",{d:"m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"}],["path",{d:"M9 10h6"}],["path",{d:"M12 7v6"}],["path",{d:"M9 17h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=["svg",t,[["path",{d:"M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7"}],["circle",{cx:"18",cy:"6",r:"3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=["svg",t,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=["svg",t,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M16 10h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=["svg",t,[["path",{d:"M21 15V5a2 2 0 0 0-2-2H9"}],["path",{d:"m2 2 20 20"}],["path",{d:"M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=["svg",t,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M12 7v6"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=["svg",t,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=["svg",t,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"m10 7-3 3 3 3"}],["path",{d:"M17 13v-1a2 2 0 0 0-2-2H7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=["svg",t,[["path",{d:"M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7"}],["path",{d:"M16 3h5v5"}],["path",{d:"m16 8 5-5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=["svg",t,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M13 8H7"}],["path",{d:"M17 12H7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=["svg",t,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M12 7v2"}],["path",{d:"M12 13h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=["svg",t,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=["svg",t,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=["svg",t,[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=["svg",t,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=["svg",t,[["path",{d:"m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"}],["path",{d:"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"}],["circle",{cx:"16",cy:"7",r:"5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=["svg",t,[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=["svg",t,[["path",{d:"M18 12h2"}],["path",{d:"M18 16h2"}],["path",{d:"M18 20h2"}],["path",{d:"M18 4h2"}],["path",{d:"M18 8h2"}],["path",{d:"M4 12h2"}],["path",{d:"M4 16h2"}],["path",{d:"M4 20h2"}],["path",{d:"M4 4h2"}],["path",{d:"M4 8h2"}],["path",{d:"M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=["svg",t,[["path",{d:"M6 18h8"}],["path",{d:"M3 22h18"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1"}],["path",{d:"M9 14h2"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=["svg",t,[["rect",{width:"20",height:"15",x:"2",y:"4",rx:"2"}],["rect",{width:"8",height:"7",x:"6",y:"8",rx:"1"}],["path",{d:"M18 8v7"}],["path",{d:"M6 19v2"}],["path",{d:"M18 19v2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=["svg",t,[["path",{d:"M12 13v8"}],["path",{d:"M12 3v3"}],["path",{d:"M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=["svg",t,[["path",{d:"M8 2h8"}],["path",{d:"M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=["svg",t,[["path",{d:"M8 2h8"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=["svg",t,[["polyline",{points:"4 14 10 14 10 20"}],["polyline",{points:"20 10 14 10 14 4"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=["svg",t,[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=["svg",t,[["path",{d:"M5 12h14"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=["svg",t,[["path",{d:"m9 10 2 2 4-4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=["svg",t,[["path",{d:"M12 17v4"}],["path",{d:"m15.2 4.9-.9-.4"}],["path",{d:"m15.2 7.1-.9.4"}],["path",{d:"m16.9 3.2-.4-.9"}],["path",{d:"m16.9 8.8-.4.9"}],["path",{d:"m19.5 2.3-.4.9"}],["path",{d:"m19.5 9.7-.4-.9"}],["path",{d:"m21.7 4.5-.9.4"}],["path",{d:"m21.7 7.5-.9-.4"}],["path",{d:"M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"}],["path",{d:"M8 21h8"}],["circle",{cx:"18",cy:"6",r:"3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=["svg",t,[["circle",{cx:"19",cy:"6",r:"3"}],["path",{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=["svg",t,[["path",{d:"M12 13V7"}],["path",{d:"m15 10-3 3-3-3"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=["svg",t,[["path",{d:"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2"}],["path",{d:"M22 15V5a2 2 0 0 0-2-2H9"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=["svg",t,[["path",{d:"M10 13V7"}],["path",{d:"M14 13V7"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=["svg",t,[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=["svg",t,[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=["svg",t,[["path",{d:"M5.5 20H8"}],["path",{d:"M17 9h.01"}],["rect",{width:"10",height:"16",x:"12",y:"4",rx:"2"}],["path",{d:"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4"}],["circle",{cx:"17",cy:"15",r:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=["svg",t,[["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}],["rect",{x:"9",y:"7",width:"6",height:"6",rx:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=["svg",t,[["path",{d:"m9 10 3-3 3 3"}],["path",{d:"M12 13V7"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=["svg",t,[["path",{d:"m14.5 12.5-5-5"}],["path",{d:"m9.5 12.5 5-5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=["svg",t,[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=["svg",t,[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=["svg",t,[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=["svg",t,[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z"}],["path",{d:"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=["svg",t,[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=["svg",t,[["path",{d:"M12 6v.343"}],["path",{d:"M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218"}],["path",{d:"M19 13.343V9A7 7 0 0 0 8.56 2.902"}],["path",{d:"M22 22 2 2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=["svg",t,[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=["svg",t,[["path",{d:"M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z"}],["circle",{cx:"16",cy:"16",r:"6"}],["path",{d:"m11.8 11.8 8.4 8.4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=["svg",t,[["path",{d:"M14 4.1 12 6"}],["path",{d:"m5.1 8-2.9-.8"}],["path",{d:"m6 12-1.9 2"}],["path",{d:"M7.2 2.2 8 5.1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=["svg",t,[["path",{d:"M12.586 12.586 19 19"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=["svg",t,[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7"}],["path",{d:"M12 6v4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=["svg",t,[["path",{d:"M5 3v16h16"}],["path",{d:"m5 19 6-6"}],["path",{d:"m2 6 3-3 3 3"}],["path",{d:"m18 16 3 3-3 3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=["svg",t,[["polyline",{points:"5 11 5 5 11 5"}],["polyline",{points:"19 13 19 19 13 19"}],["line",{x1:"5",x2:"19",y1:"5",y2:"19"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=["svg",t,[["polyline",{points:"13 5 19 5 19 11"}],["polyline",{points:"11 19 5 19 5 13"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=["svg",t,[["path",{d:"M11 19H5V13"}],["path",{d:"M19 5L5 19"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=["svg",t,[["path",{d:"M19 13V19H13"}],["path",{d:"M5 5L19 19"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=["svg",t,[["path",{d:"M8 18L12 22L16 18"}],["path",{d:"M12 2V22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=["svg",t,[["polyline",{points:"18 8 22 12 18 16"}],["polyline",{points:"6 8 2 12 6 16"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=["svg",t,[["path",{d:"M6 8L2 12L6 16"}],["path",{d:"M2 12H22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=["svg",t,[["path",{d:"M18 8L22 12L18 16"}],["path",{d:"M2 12H22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=["svg",t,[["path",{d:"M5 11V5H11"}],["path",{d:"M5 5L19 19"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=["svg",t,[["path",{d:"M13 5H19V11"}],["path",{d:"M19 5L5 19"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=["svg",t,[["path",{d:"M8 6L12 2L16 6"}],["path",{d:"M12 2V22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=["svg",t,[["polyline",{points:"8 18 12 22 16 18"}],["polyline",{points:"8 6 12 2 16 6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=["svg",t,[["polyline",{points:"5 9 2 12 5 15"}],["polyline",{points:"9 5 12 2 15 5"}],["polyline",{points:"15 19 12 22 9 19"}],["polyline",{points:"19 9 22 12 19 15"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=["svg",t,[["circle",{cx:"8",cy:"18",r:"4"}],["path",{d:"M12 18V2l7 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=["svg",t,[["circle",{cx:"12",cy:"18",r:"4"}],["path",{d:"M16 18V2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=["svg",t,[["path",{d:"M9 18V5l12-2v13"}],["path",{d:"m9 9 12-2"}],["circle",{cx:"6",cy:"18",r:"3"}],["circle",{cx:"18",cy:"16",r:"3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=["svg",t,[["path",{d:"M9 18V5l12-2v13"}],["circle",{cx:"6",cy:"18",r:"3"}],["circle",{cx:"18",cy:"16",r:"3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=["svg",t,[["path",{d:"M9.31 9.31 5 21l7-4 7 4-1.17-3.17"}],["path",{d:"M14.53 8.88 12 2l-1.17 3.17"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=["svg",t,[["polygon",{points:"12 2 19 21 12 17 5 21 12 2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=["svg",t,[["path",{d:"M8.43 8.43 3 11l8 2 2 8 2.57-5.43"}],["path",{d:"M17.39 11.73 22 2l-9.73 4.61"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=["svg",t,[["polygon",{points:"3 11 22 2 13 21 11 13 3 11"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=["svg",t,[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=["svg",t,[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"}],["path",{d:"M18 14h-8"}],["path",{d:"M15 18h-5"}],["path",{d:"M10 6h8v4h-8V6Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=["svg",t,[["path",{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36"}],["path",{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58"}],["path",{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"}],["path",{d:"M16.37 2a20.16 20.16 0 0 1 0 20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=["svg",t,[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"}],["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["path",{d:"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=["svg",t,[["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M15 2v20"}],["path",{d:"M15 7h5"}],["path",{d:"M15 12h5"}],["path",{d:"M15 17h5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=["svg",t,[["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M9.5 8h5"}],["path",{d:"M9.5 12H16"}],["path",{d:"M9.5 16H14"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=["svg",t,[["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M16 2v20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=["svg",t,[["path",{d:"M8 2v4"}],["path",{d:"M12 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v2"}],["path",{d:"M20 12v2"}],["path",{d:"M20 18v2a2 2 0 0 1-2 2h-1"}],["path",{d:"M13 22h-2"}],["path",{d:"M7 22H6a2 2 0 0 1-2-2v-2"}],["path",{d:"M4 14v-2"}],["path",{d:"M4 8V6a2 2 0 0 1 2-2h2"}],["path",{d:"M8 10h6"}],["path",{d:"M8 14h8"}],["path",{d:"M8 18h5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=["svg",t,[["path",{d:"M8 2v4"}],["path",{d:"M12 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"16",height:"18",x:"4",y:"4",rx:"2"}],["path",{d:"M8 10h6"}],["path",{d:"M8 14h8"}],["path",{d:"M8 18h5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=["svg",t,[["path",{d:"M12 4V2"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939"}],["path",{d:"M19 10v3.343"}],["path",{d:"M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=["svg",t,[["path",{d:"M12 4V2"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4"}],["path",{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=["svg",t,[["path",{d:"M12 16h.01"}],["path",{d:"M12 8v4"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=["svg",t,[["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=["svg",t,[["path",{d:"M10 15V9"}],["path",{d:"M14 15V9"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=["svg",t,[["path",{d:"m15 9-6 6"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=["svg",t,[["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=["svg",t,[["path",{d:"M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=["svg",t,[["path",{d:"M3 3h6l6 18h6"}],["path",{d:"M14 3h7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=["svg",t,[["circle",{cx:"12",cy:"12",r:"3"}],["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=["svg",t,[["path",{d:"M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025"}],["path",{d:"m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009"}],["path",{d:"m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=["svg",t,[["path",{d:"M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"}],["path",{d:"m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"}],["path",{d:"M12 3v6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=["svg",t,[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=["svg",t,[["path",{d:"M16 16h6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=["svg",t,[["path",{d:"M12 22v-9"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=["svg",t,[["path",{d:"M16 16h6"}],["path",{d:"M19 13v6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=["svg",t,[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5"}],["path",{d:"M20.27 17.27 22 19"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=["svg",t,[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}],["path",{d:"m17 13 5 5m-5 0 5-5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=["svg",t,[["path",{d:"m7.5 4.27 9 5.15"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=["svg",t,[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"}],["path",{d:"m5 2 5 5"}],["path",{d:"M2 13h15"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=["svg",t,[["rect",{width:"16",height:"6",x:"2",y:"2",rx:"2"}],["path",{d:"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"}],["rect",{width:"4",height:"6",x:"8",y:"16",rx:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=["svg",t,[["path",{d:"M10 2v2"}],["path",{d:"M14 2v4"}],["path",{d:"M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z"}],["path",{d:"M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=["svg",t,[["path",{d:"m14.622 17.897-10.68-2.913"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=["svg",t,[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}],["path",{d:"m15 8-3 3-3-3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M14 15h1"}],["path",{d:"M19 15h2"}],["path",{d:"M3 15h2"}],["path",{d:"M9 15h1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}],["path",{d:"m9 10 3-3 3 3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m16 15-3-3 3-3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 14v1"}],["path",{d:"M9 19v2"}],["path",{d:"M9 3v2"}],["path",{d:"M9 9v1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m14 9 3 3-3 3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}],["path",{d:"m8 9 3 3-3 3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 14v1"}],["path",{d:"M15 19v2"}],["path",{d:"M15 3v2"}],["path",{d:"M15 9v1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}],["path",{d:"m10 15-3-3 3-3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"m9 16 3-3 3 3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M14 9h1"}],["path",{d:"M19 9h2"}],["path",{d:"M3 9h2"}],["path",{d:"M9 9h1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"m15 14-3 3-3-3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"M9 15h12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h12"}],["path",{d:"M15 3v18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M9 21V9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=["svg",t,[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=["svg",t,[["path",{d:"M8 21s-4-3-4-9 4-9 4-9"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=["svg",t,[["path",{d:"M9 9a3 3 0 1 1 6 0"}],["path",{d:"M12 12v3"}],["path",{d:"M11 15h2"}],["path",{d:"M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3"}],["path",{d:"M12 19v3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=["svg",t,[["path",{d:"M5.8 11.3 2 22l10.7-3.79"}],["path",{d:"M4 3h.01"}],["path",{d:"M22 8h.01"}],["path",{d:"M15 2h.01"}],["path",{d:"M22 20h.01"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=["svg",t,[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=["svg",t,[["circle",{cx:"11",cy:"4",r:"2"}],["circle",{cx:"18",cy:"8",r:"2"}],["circle",{cx:"20",cy:"16",r:"2"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=["svg",t,[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2"}],["path",{d:"M15 14h.01"}],["path",{d:"M9 6h6"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=["svg",t,[["path",{d:"M12 20h9"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=["svg",t,[["path",{d:"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"}],["path",{d:"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=["svg",t,[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"}],["path",{d:"m2.3 2.3 7.286 7.286"}],["circle",{cx:"11",cy:"11",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=["svg",t,[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=["svg",t,[["path",{d:"M12 20h9"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"}],["path",{d:"m15 5 3 3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=["svg",t,[["path",{d:"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"}],["path",{d:"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"}],["path",{d:"m15 5 4 4"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=["svg",t,[["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"}],["path",{d:"m8 6 2-2"}],["path",{d:"m18 16 2-2"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=["svg",t,[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=["svg",t,[["path",{d:"M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=["svg",t,[["line",{x1:"19",x2:"5",y1:"5",y2:"19"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=["svg",t,[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=["svg",t,[["path",{d:"M20 11H4"}],["path",{d:"M20 7H4"}],["path",{d:"M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=["svg",t,[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=["svg",t,[["polyline",{points:"18 2 22 6 18 10"}],["line",{x1:"14",x2:"22",y1:"6",y2:"6"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=["svg",t,[["polyline",{points:"16 2 16 8 22 8"}],["line",{x1:"22",x2:"16",y1:"2",y2:"8"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=["svg",t,[["line",{x1:"22",x2:"16",y1:"2",y2:"8"}],["line",{x1:"16",x2:"22",y1:"2",y2:"8"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=["svg",t,[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=["svg",t,[["polyline",{points:"22 8 22 2 16 2"}],["line",{x1:"16",x2:"22",y1:"8",y2:"2"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=["svg",t,[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=["svg",t,[["line",{x1:"9",x2:"9",y1:"4",y2:"20"}],["path",{d:"M4 7c0-1.7 1.3-3 3-3h13"}],["path",{d:"M18 20c-1.7 0-3-1.3-3-3V4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=["svg",t,[["path",{d:"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8"}],["path",{d:"M2 14h20"}],["path",{d:"M6 14v4"}],["path",{d:"M10 14v4"}],["path",{d:"M14 14v4"}],["path",{d:"M18 14v4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=["svg",t,[["path",{d:"M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912"}],["path",{d:"M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393"}],["path",{d:"M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z"}],["path",{d:"M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=["svg",t,[["path",{d:"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"}],["rect",{width:"10",height:"7",x:"12",y:"13",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=["svg",t,[["path",{d:"M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3"}],["rect",{width:"10",height:"7",x:"12",y:"13.5",ry:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=["svg",t,[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1"}],["path",{d:"M16 11h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=["svg",t,[["path",{d:"M14 3v11"}],["path",{d:"M14 9h-3a3 3 0 0 1 0-6h9"}],["path",{d:"M18 3v11"}],["path",{d:"M22 18H2l4-4"}],["path",{d:"m6 22-4-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=["svg",t,[["path",{d:"M10 3v11"}],["path",{d:"M10 9H7a1 1 0 0 1 0-6h8"}],["path",{d:"M14 3v11"}],["path",{d:"m18 14 4 4H2"}],["path",{d:"m22 18-4 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=["svg",t,[["path",{d:"M13 4v16"}],["path",{d:"M17 4v16"}],["path",{d:"M19 4H9.5a4.5 4.5 0 0 0 0 9H13"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=["svg",t,[["path",{d:"M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4"}],["path",{d:"M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7"}],["rect",{width:"16",height:"5",x:"4",y:"2",rx:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=["svg",t,[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"}],["path",{d:"m8.5 8.5 7 7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=["svg",t,[["path",{d:"M12 17v5"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89"}],["path",{d:"m2 2 20 20"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=["svg",t,[["path",{d:"M12 17v5"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=["svg",t,[["path",{d:"m2 22 1-1h3l9-9"}],["path",{d:"M3 21v-3l9-9"}],["path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=["svg",t,[["path",{d:"M15 11h.01"}],["path",{d:"M11 15h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"m2 16 20 6-6-20A20 20 0 0 0 2 16"}],["path",{d:"M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=["svg",t,[["path",{d:"M2 22h20"}],["path",{d:"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=["svg",t,[["path",{d:"M2 22h20"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=["svg",t,[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=["svg",t,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=["svg",t,[["path",{d:"M9 2v6"}],["path",{d:"M15 2v6"}],["path",{d:"M12 17v5"}],["path",{d:"M5 8h14"}],["path",{d:"M6 11V8h12v3a6 6 0 1 1-12 0Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=["svg",t,[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"}],["path",{d:"m2 22 3-3"}],["path",{d:"M7.5 13.5 10 11"}],["path",{d:"M10.5 16.5 13 14"}],["path",{d:"m18 3-4 4h6l-4 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=["svg",t,[["path",{d:"M12 22v-5"}],["path",{d:"M9 8V2"}],["path",{d:"M15 8V2"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=["svg",t,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=["svg",t,[["path",{d:"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2"}],["path",{d:"M18 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z"}],["path",{d:"M18 11.66V22a4 4 0 0 0 4-4V6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=["svg",t,[["path",{d:"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"}],["polyline",{points:"8 10 12 14 16 10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=["svg",t,[["path",{d:"M16.85 18.58a9 9 0 1 0-9.7 0"}],["path",{d:"M8 14a5 5 0 1 1 8 0"}],["circle",{cx:"12",cy:"11",r:"1"}],["path",{d:"M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=["svg",t,[["path",{d:"M10 4.5V4a2 2 0 0 0-2.41-1.957"}],["path",{d:"M13.9 8.4a2 2 0 0 0-1.26-1.295"}],["path",{d:"M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158"}],["path",{d:"m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343"}],["path",{d:"M6 6v8"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=["svg",t,[["path",{d:"M22 14a8 8 0 0 1-8 8"}],["path",{d:"M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1"}],["path",{d:"M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=["svg",t,[["path",{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"}],["path",{d:"M10 22 9 8"}],["path",{d:"m14 22 1-14"}],["path",{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=["svg",t,[["path",{d:"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z"}],["path",{d:"m22 22-5.5-5.5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=["svg",t,[["path",{d:"M18 7c0-5.333-8-5.333-8 0"}],["path",{d:"M10 7v14"}],["path",{d:"M6 21h12"}],["path",{d:"M6 13h10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=["svg",t,[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68"}],["path",{d:"M12 2v4"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=["svg",t,[["path",{d:"M12 2v10"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=["svg",t,[["path",{d:"M2 3h20"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"}],["path",{d:"m7 21 5-5 5 5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=["svg",t,[["path",{d:"M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5"}],["path",{d:"m16 19 2 2 4-4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=["svg",t,[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=["svg",t,[["path",{d:"M5 7 3 5"}],["path",{d:"M9 6V3"}],["path",{d:"m13 7 2-2"}],["circle",{cx:"9",cy:"13",r:"3"}],["path",{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"}],["path",{d:"M16 16h2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=["svg",t,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M12 9v11"}],["path",{d:"M2 9h13a2 2 0 0 1 2 2v9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=["svg",t,[["path",{d:"M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=["svg",t,[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"}],["path",{d:"M12 2v20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=["svg",t,[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3"}],["path",{d:"M21 21v.01"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7"}],["path",{d:"M3 12h.01"}],["path",{d:"M12 3h.01"}],["path",{d:"M12 16v.01"}],["path",{d:"M16 12h1"}],["path",{d:"M21 12v.01"}],["path",{d:"M12 21v-1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=["svg",t,[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=["svg",t,[["path",{d:"M13 16a3 3 0 0 1 2.24 5"}],["path",{d:"M18 12h.01"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"}],["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3"}],["path",{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=["svg",t,[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34"}],["path",{d:"M4 6h.01"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67"}],["path",{d:"M12 18h.01"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"m13.41 10.59 5.66-5.66"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=["svg",t,[["path",{d:"M12 12h.01"}],["path",{d:"M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z"}],["path",{d:"M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z"}],["path",{d:"M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=["svg",t,[["path",{d:"M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=["svg",t,[["path",{d:"M5 16v2"}],["path",{d:"M19 16v2"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2"}],["path",{d:"M18 12h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=["svg",t,[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"}],["circle",{cx:"12",cy:"9",r:"2"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1"}],["path",{d:"M9.5 18h5"}],["path",{d:"m8 22 4-11 4 11"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=["svg",t,[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=["svg",t,[["path",{d:"M20.34 17.52a10 10 0 1 0-2.82 2.82"}],["circle",{cx:"19",cy:"19",r:"2"}],["path",{d:"m13.41 13.41 4.18 4.18"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=["svg",t,[["path",{d:"M5 15h14"}],["path",{d:"M5 9h14"}],["path",{d:"m14 20-5-5 6-6-5-5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=["svg",t,[["path",{d:"M22 17a10 10 0 0 0-20 0"}],["path",{d:"M6 17a6 6 0 0 1 12 0"}],["path",{d:"M10 17a2 2 0 0 1 4 0"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=["svg",t,[["path",{d:"M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7c0 2.2 1.8 4 4 4"}],["path",{d:"M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3"}],["path",{d:"M13.2 18a3 3 0 0 0-2.2-5"}],["path",{d:"M13 22H4a2 2 0 0 1 0-4h12"}],["path",{d:"M16 9h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=["svg",t,[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=["svg",t,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M12 6.5v11"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=["svg",t,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 12h5"}],["path",{d:"M16 9.5a4 4 0 1 0 0 5.2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=["svg",t,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 7h8"}],["path",{d:"M12 17.5 8 15h1a4 4 0 0 0 0-8"}],["path",{d:"M8 11h8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=["svg",t,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"m12 10 3-3"}],["path",{d:"m9 7 3 3v7.5"}],["path",{d:"M9 11h6"}],["path",{d:"M9 15h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=["svg",t,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 13h5"}],["path",{d:"M10 17V9.5a2.5 2.5 0 0 1 5 0"}],["path",{d:"M8 17h7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=["svg",t,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 15h5"}],["path",{d:"M8 11h5a2 2 0 1 0 0-4h-3v10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=["svg",t,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M10 17V7h5"}],["path",{d:"M10 11h4"}],["path",{d:"M8 15h5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=["svg",t,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M14 8H8"}],["path",{d:"M16 12H8"}],["path",{d:"M13 16H8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=["svg",t,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=["svg",t,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}],["path",{d:"M12 12h.01"}],["path",{d:"M17 12h.01"}],["path",{d:"M7 12h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=["svg",t,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=["svg",t,[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=["svg",t,[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"}],["path",{d:"m14 16-3 3 3 3"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=["svg",t,[["path",{d:"m15 14 5-5-5-5"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=["svg",t,[["circle",{cx:"12",cy:"17",r:"1"}],["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=["svg",t,[["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=["svg",t,[["path",{d:"M3 2v6h6"}],["path",{d:"M21 12A9 9 0 0 0 6 5.3L3 8"}],["path",{d:"M21 22v-6h-6"}],["path",{d:"M3 12a9 9 0 0 0 15 6.7l3-2.7"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=["svg",t,[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"}],["path",{d:"M16 16h5v5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=["svg",t,[["path",{d:"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47"}],["path",{d:"M8 16H3v5"}],["path",{d:"M3 12C3 9.51 4 7.26 5.64 5.64"}],["path",{d:"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64"}],["path",{d:"M21 12c0 1-.16 1.97-.47 2.87"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M22 22 2 2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=["svg",t,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=["svg",t,[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=["svg",t,[["path",{d:"M17 3v10"}],["path",{d:"m12.67 5.5 8.66 5"}],["path",{d:"m12.67 10.5 8.66-5"}],["path",{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=["svg",t,[["path",{d:"M4 7V4h16v3"}],["path",{d:"M5 20h6"}],["path",{d:"M13 4 8 20"}],["path",{d:"m15 15 5 5"}],["path",{d:"m20 15-5 5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=["svg",t,[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}],["path",{d:"M11 10h1v4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=["svg",t,[["path",{d:"m2 9 3-3 3 3"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6"}],["path",{d:"m22 15-3 3-3-3"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=["svg",t,[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=["svg",t,[["path",{d:"M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"M14 4a2 2 0 0 1 2-2"}],["path",{d:"M16 10a2 2 0 0 1-2-2"}],["path",{d:"M20 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"M20 2a2 2 0 0 1 2 2"}],["path",{d:"M22 8a2 2 0 0 1-2 2"}],["path",{d:"m3 7 3 3 3-3"}],["path",{d:"M6 10V5a 3 3 0 0 1 3-3h1"}],["rect",{x:"2",y:"14",width:"8",height:"8",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=["svg",t,[["path",{d:"M14 4a2 2 0 0 1 2-2"}],["path",{d:"M16 10a2 2 0 0 1-2-2"}],["path",{d:"M20 2a2 2 0 0 1 2 2"}],["path",{d:"M22 8a2 2 0 0 1-2 2"}],["path",{d:"m3 7 3 3 3-3"}],["path",{d:"M6 10V5a3 3 0 0 1 3-3h1"}],["rect",{x:"2",y:"14",width:"8",height:"8",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=["svg",t,[["polyline",{points:"7 17 2 12 7 7"}],["polyline",{points:"12 17 7 12 12 7"}],["path",{d:"M22 18v-2a4 4 0 0 0-4-4H7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=["svg",t,[["polyline",{points:"9 17 4 12 9 7"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=["svg",t,[["polygon",{points:"11 19 2 12 11 5 11 19"}],["polygon",{points:"22 19 13 12 22 5 22 19"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=["svg",t,[["path",{d:"M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22"}],["path",{d:"m12 18 2.57-3.5"}],["path",{d:"M6.243 9.016a7 7 0 0 1 11.507-.009"}],["path",{d:"M9.35 14.53 12 11.22"}],["path",{d:"M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=["svg",t,[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=["svg",t,[["polyline",{points:"3.5 2 6.5 12.5 18 12.5"}],["line",{x1:"9.5",x2:"5.5",y1:"12.5",y2:"20"}],["line",{x1:"15",x2:"18.5",y1:"12.5",y2:"20"}],["path",{d:"M2.75 18a13 13 0 0 0 18.5 0"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=["svg",t,[["path",{d:"M6 19V5"}],["path",{d:"M10 19V6.8"}],["path",{d:"M14 19v-7.8"}],["path",{d:"M18 5v4"}],["path",{d:"M18 19v-6"}],["path",{d:"M22 19V9"}],["path",{d:"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=["svg",t,[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=["svg",t,[["path",{d:"M20 9V7a2 2 0 0 0-2-2h-6"}],["path",{d:"m15 2-3 3 3 3"}],["path",{d:"M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=["svg",t,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=["svg",t,[["path",{d:"M12 5H6a2 2 0 0 0-2 2v3"}],["path",{d:"m9 8 3-3-3-3"}],["path",{d:"M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tA=["svg",t,[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=["svg",t,[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5c.4 0 .9-.1 1.3-.2"}],["path",{d:"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12"}],["path",{d:"m2 2 20 20"}],["path",{d:"M21 15.3a3.5 3.5 0 0 0-3.3-3.3"}],["path",{d:"M15 5h-4.3"}],["circle",{cx:"18",cy:"5",r:"3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=["svg",t,[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"}],["circle",{cx:"18",cy:"5",r:"3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=["svg",t,[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6.01 18H6"}],["path",{d:"M10.01 18H10"}],["path",{d:"M15 10v4"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 12h18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 9H3"}],["path",{d:"M21 15H3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 7.5H3"}],["path",{d:"M21 12H3"}],["path",{d:"M21 16.5H3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=["svg",t,[["path",{d:"M4 11a9 9 0 0 1 9 9"}],["path",{d:"M4 4a16 16 0 0 1 16 16"}],["circle",{cx:"5",cy:"19",r:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=["svg",t,[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"}],["path",{d:"m14.5 12.5 2-2"}],["path",{d:"m11.5 9.5 2-2"}],["path",{d:"m8.5 6.5 2-2"}],["path",{d:"m17.5 15.5 2-2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=["svg",t,[["path",{d:"M6 11h8a4 4 0 0 0 0-8H9v18"}],["path",{d:"M6 15h8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA=["svg",t,[["path",{d:"M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z"}],["path",{d:"M21 14 10 2 3 14h18Z"}],["path",{d:"M10 2v16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=["svg",t,[["path",{d:"M7 21h10"}],["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"}],["path",{d:"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"}],["path",{d:"m13 12 4-4"}],["path",{d:"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=["svg",t,[["path",{d:"M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3"}],["path",{d:"M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83"}],["path",{d:"m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z"}],["path",{d:"M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=["svg",t,[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z"}],["path",{d:"m9 15 3-3"}],["path",{d:"M17 13a6 6 0 0 0-6-6"}],["path",{d:"M21 13A10 10 0 0 0 11 3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=["svg",t,[["path",{d:"M13 7 9 3 5 7l4 4"}],["path",{d:"m17 11 4 4-4 4-4-4"}],["path",{d:"m8 12 4 4 6-6-4-4Z"}],["path",{d:"m16 8 3-3"}],["path",{d:"M9 21a6 6 0 0 0-6-6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=["svg",t,[["path",{d:"M10 2v3a1 1 0 0 0 1 1h5"}],["path",{d:"M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6"}],["path",{d:"M18 22H4a2 2 0 0 1-2-2V6"}],["path",{d:"M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=["svg",t,[["path",{d:"M13 13H8a1 1 0 0 0-1 1v7"}],["path",{d:"M14 8h1"}],["path",{d:"M17 21v-4"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41"}],["path",{d:"M29.5 11.5s5 5 4 5"}],["path",{d:"M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=["svg",t,[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=["svg",t,[["circle",{cx:"19",cy:"19",r:"2"}],["circle",{cx:"5",cy:"5",r:"2"}],["path",{d:"M5 7v12h12"}],["path",{d:"m5 19 6-6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=["svg",t,[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{d:"M7 21h10"}],["path",{d:"M12 3v18"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=["svg",t,[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M14 15H9v-5"}],["path",{d:"M16 3h5v5"}],["path",{d:"M21 3 9 15"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=["svg",t,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M8 7v10"}],["path",{d:"M12 7v10"}],["path",{d:"M17 7v10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=["svg",t,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=["svg",t,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 9h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=["svg",t,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M7 12h10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=["svg",t,[["path",{d:"M17 12v4a1 1 0 0 1-1 1h-4"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M17 8V7"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M7 17h.01"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["rect",{x:"7",y:"7",width:"5",height:"5",rx:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=["svg",t,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m16 16-1.9-1.9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=["svg",t,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M7 8h8"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=["svg",t,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=["svg",t,[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"}],["path",{d:"M18 5v17"}],["path",{d:"m4 6 8-4 8 4"}],["path",{d:"M6 5v17"}],["circle",{cx:"12",cy:"9",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=["svg",t,[["path",{d:"M5.42 9.42 8 12"}],["circle",{cx:"4",cy:"8",r:"2"}],["path",{d:"m14 6-8.58 8.58"}],["circle",{cx:"4",cy:"16",r:"2"}],["path",{d:"M10.8 14.8 14 18"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=["svg",t,[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M8.12 8.12 12 12"}],["path",{d:"M20 4 8.12 15.88"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M14.8 14.8 20 20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=["svg",t,[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m22 3-5 5"}],["path",{d:"m17 3 5 5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=["svg",t,[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m17 8 5-5"}],["path",{d:"M17 3h5v5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=["svg",t,[["path",{d:"M15 12h-5"}],["path",{d:"M15 8h-5"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=["svg",t,[["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=["svg",t,[["path",{d:"m8 11 2 2 4-4"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=["svg",t,[["path",{d:"m13 13.5 2-2.5-2-2.5"}],["path",{d:"m21 21-4.3-4.3"}],["path",{d:"M9 8.5 7 11l2 2.5"}],["circle",{cx:"11",cy:"11",r:"8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=["svg",t,[["path",{d:"m13.5 8.5-5 5"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=["svg",t,[["path",{d:"m13.5 8.5-5 5"}],["path",{d:"m8.5 8.5 5 5"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=["svg",t,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=["svg",t,[["path",{d:"M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0"}],["path",{d:"M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=["svg",t,[["path",{d:"M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"}],["path",{d:"M6 12h16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=["svg",t,[["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2"}],["path",{d:"M7 14v1a2 2 0 0 0 2 2h1"}],["path",{d:"M14 7h1a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=["svg",t,[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=["svg",t,[["line",{x1:"3",x2:"21",y1:"12",y2:"12"}],["polyline",{points:"8 8 12 4 16 8"}],["polyline",{points:"16 16 12 20 8 16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=["svg",t,[["line",{x1:"12",x2:"12",y1:"3",y2:"21"}],["polyline",{points:"8 8 4 12 8 16"}],["polyline",{points:"16 16 20 12 16 8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=["svg",t,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"}],["path",{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"}],["path",{d:"M6 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"m15.7 13.4-.9-.3"}],["path",{d:"m9.2 10.9-.9-.3"}],["path",{d:"m10.6 15.7.3-.9"}],["path",{d:"m13.6 15.7-.4-1"}],["path",{d:"m10.8 9.3-.4-1"}],["path",{d:"m8.3 13.6 1-.4"}],["path",{d:"m14.7 10.8 1-.4"}],["path",{d:"m13.4 8.3-.3.9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=["svg",t,[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"}],["path",{d:"M6 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"m13 6-4 6h6l-4 6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=["svg",t,[["path",{d:"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5"}],["path",{d:"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z"}],["path",{d:"M22 17v-1a2 2 0 0 0-2-2h-1"}],["path",{d:"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z"}],["path",{d:"M6 18h.01"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=["svg",t,[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=["svg",t,[["path",{d:"M20 7h-9"}],["path",{d:"M14 17H5"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GA=["svg",t,[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=["svg",t,[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=["svg",t,[["circle",{cx:"18",cy:"5",r:"3"}],["circle",{cx:"6",cy:"12",r:"3"}],["circle",{cx:"18",cy:"19",r:"3"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=["svg",t,[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}],["polyline",{points:"16 6 12 2 8 6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15"}],["line",{x1:"9",x2:"9",y1:"9",y2:"21"}],["line",{x1:"15",x2:"15",y1:"9",y2:"21"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=["svg",t,[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=["svg",t,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=["svg",t,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m4.243 5.21 14.39 12.472"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=["svg",t,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=["svg",t,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=["svg",t,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 22V2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=["svg",t,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M9 12h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=["svg",t,[["path",{d:"m2 2 20 20"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=["svg",t,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M9 12h6"}],["path",{d:"M12 9v6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=["svg",t,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=["svg",t,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m14.5 9.5-5 5"}],["path",{d:"m9.5 9.5 5 5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=["svg",t,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=["svg",t,[["circle",{cx:"12",cy:"12",r:"8"}],["path",{d:"M12 2v7.5"}],["path",{d:"m19 5-5.23 5.23"}],["path",{d:"M22 12h-7.5"}],["path",{d:"m19 19-5.23-5.23"}],["path",{d:"M12 14.5V22"}],["path",{d:"M10.23 13.77 5 19"}],["path",{d:"M9.5 12H2"}],["path",{d:"M10.23 10.23 5 5"}],["circle",{cx:"12",cy:"12",r:"2.5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=["svg",t,[["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"}],["path",{d:"M12 10v4"}],["path",{d:"M12 2v3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=["svg",t,[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=["svg",t,[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"}],["path",{d:"M3 6h18"}],["path",{d:"M16 10a4 4 0 0 1-8 0"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=["svg",t,[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=["svg",t,[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=["svg",t,[["path",{d:"M2 22v-5l5-5 5 5-5 5z"}],["path",{d:"M9.5 14.5 16 8"}],["path",{d:"m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=["svg",t,[["path",{d:"m4 4 2.5 2.5"}],["path",{d:"M13.5 6.5a4.95 4.95 0 0 0-7 7"}],["path",{d:"M15 5 5 15"}],["path",{d:"M14 17v.01"}],["path",{d:"M10 16v.01"}],["path",{d:"M13 13v.01"}],["path",{d:"M16 10v.01"}],["path",{d:"M11 20v.01"}],["path",{d:"M17 14v.01"}],["path",{d:"M20 11v.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=["svg",t,[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=["svg",t,[["path",{d:"M12 22v-7l-2-2"}],["path",{d:"M17 8v.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0Z"}],["path",{d:"m14 14-2 2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=["svg",t,[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"}],["path",{d:"m18 2 4 4-4 4"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"}],["path",{d:"m18 14 4 4-4 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=["svg",t,[["path",{d:"M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=["svg",t,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}],["path",{d:"M17 20V8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=["svg",t,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=["svg",t,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=["svg",t,[["path",{d:"M2 20h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=["svg",t,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}],["path",{d:"M17 20V8"}],["path",{d:"M22 4v16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=["svg",t,[["path",{d:"m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284"}],["path",{d:"M3 21h18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=["svg",t,[["path",{d:"M10 9H4L2 7l2-2h6"}],["path",{d:"M14 5h6l2 2-2 2h-6"}],["path",{d:"M10 22V4a2 2 0 1 1 4 0v18"}],["path",{d:"M8 22h8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=["svg",t,[["path",{d:"M12 13v8"}],["path",{d:"M12 3v3"}],["path",{d:"M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=["svg",t,[["path",{d:"M7 18v-6a5 5 0 1 1 10 0v6"}],["path",{d:"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"}],["path",{d:"M21 12h1"}],["path",{d:"M18.5 4.5 18 5"}],["path",{d:"M2 12h1"}],["path",{d:"M12 2v1"}],["path",{d:"m4.929 4.929.707.707"}],["path",{d:"M12 12v6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=["svg",t,[["polygon",{points:"19 20 9 12 19 4 19 20"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=["svg",t,[["polygon",{points:"5 4 15 12 5 20 5 4"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=["svg",t,[["path",{d:"m12.5 17-.5-1-.5 1h1z"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"9",cy:"12",r:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=["svg",t,[["rect",{width:"3",height:"8",x:"13",y:"2",rx:"1.5"}],["path",{d:"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"}],["rect",{width:"3",height:"8",x:"8",y:"14",rx:"1.5"}],["path",{d:"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"}],["rect",{width:"8",height:"3",x:"14",y:"13",rx:"1.5"}],["path",{d:"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"}],["rect",{width:"8",height:"3",x:"2",y:"8",rx:"1.5"}],["path",{d:"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=["svg",t,[["path",{d:"M22 2 2 22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=["svg",t,[["path",{d:"m8 14-6 6h9v-3"}],["path",{d:"M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=["svg",t,[["line",{x1:"21",x2:"14",y1:"4",y2:"4"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=["svg",t,[["line",{x1:"4",x2:"4",y1:"21",y2:"14"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=["svg",t,[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12.667 8 10 12h4l-2.667 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=["svg",t,[["rect",{width:"7",height:"12",x:"2",y:"6",rx:"1"}],["path",{d:"M13 8.32a7.43 7.43 0 0 1 0 7.36"}],["path",{d:"M16.46 6.21a11.76 11.76 0 0 1 0 11.58"}],["path",{d:"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=["svg",t,[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=["svg",t,[["path",{d:"M22 11v1a10 10 0 1 1-9-10"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}],["path",{d:"M16 5h6"}],["path",{d:"M19 2v6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=["svg",t,[["path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}],["circle",{cx:"10",cy:"13",r:"8"}],["path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}],["path",{d:"M18 3 19.1 5.2"}],["path",{d:"M22 3 20.9 5.2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=["svg",t,[["line",{x1:"2",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22"}],["path",{d:"m20 16-4-4 4-4"}],["path",{d:"m4 8 4 4-4 4"}],["path",{d:"m16 4-4 4-4-4"}],["path",{d:"m8 20 4-4 4 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=["svg",t,[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"}],["path",{d:"M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"}],["path",{d:"M4 18v2"}],["path",{d:"M20 18v2"}],["path",{d:"M12 4v9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=["svg",t,[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"}],["path",{d:"M7 21h10"}],["path",{d:"M19.5 12 22 6"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=["svg",t,[["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=["svg",t,[["path",{d:"M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z"}],["path",{d:"M12 18v4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=["svg",t,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=["svg",t,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=["svg",t,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M12 6h.01"}],["circle",{cx:"12",cy:"14",r:"4"}],["path",{d:"M12 14h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=["svg",t,[["path",{d:"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"}],["path",{d:"M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"}],["path",{d:"M17 15a3.5 3.5 0 0 0-.025-4.975"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=["svg",t,[["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}],["path",{d:"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=["svg",t,[["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}],["path",{d:"m16 20 2 2 4-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tC=["svg",t,[["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M5 17A12 12 0 0 1 17 5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aC=["svg",t,[["path",{d:"M16 3h5v5"}],["path",{d:"M8 3H3v5"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"}],["path",{d:"m15 9 6-6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eC=["svg",t,[["path",{d:"M3 3h.01"}],["path",{d:"M7 5h.01"}],["path",{d:"M11 7h.01"}],["path",{d:"M3 7h.01"}],["path",{d:"M7 9h.01"}],["path",{d:"M3 11h.01"}],["rect",{width:"4",height:"4",x:"15",y:"5"}],["path",{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"}],["path",{d:"m13 14 8-2"}],["path",{d:"m13 19 8-2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hC=["svg",t,[["path",{d:"M7 20h10"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M17 12h-2l-2 5-2-10-2 5H7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 8-8 8"}],["path",{d:"M16 16H8V8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m8 8 8 8"}],["path",{d:"M16 8v8H8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m12 8-4 4 4 4"}],["path",{d:"M16 12H8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=["svg",t,[["path",{d:"M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6"}],["path",{d:"m3 21 9-9"}],["path",{d:"M9 21H3v-6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=["svg",t,[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}],["path",{d:"m21 21-9-9"}],["path",{d:"M21 15v6h-6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=["svg",t,[["path",{d:"M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6"}],["path",{d:"m3 3 9 9"}],["path",{d:"M3 9V3h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=["svg",t,[["path",{d:"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"}],["path",{d:"m21 3-9 9"}],["path",{d:"M15 3h6v6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}],["path",{d:"m12 16 4-4-4-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 16V8h8"}],["path",{d:"M16 16 8 8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 8h8v8"}],["path",{d:"m8 16 8-8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 8v8"}],["path",{d:"m8.5 14 7-4"}],["path",{d:"m8.5 10 7 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=["svg",t,[["path",{d:"M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2"}],["path",{d:"M10 22H8"}],["path",{d:"M16 22h-2"}],["circle",{cx:"8",cy:"8",r:"2"}],["path",{d:"M9.414 9.414 12 12"}],["path",{d:"M14.8 14.8 18 18"}],["circle",{cx:"8",cy:"16",r:"2"}],["path",{d:"m18 6-8.586 8.586"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 8h7"}],["path",{d:"M8 12h6"}],["path",{d:"M11 16h5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=["svg",t,[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5"}],["path",{d:"m9 11 3 3L22 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 10-4 4-4-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m14 16-4-4 4-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m10 8 4 4-4 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m8 14 4-4 4 4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=["svg",t,[["path",{d:"M10 9.5 8 12l2 2.5"}],["path",{d:"m14 9.5 2 2.5-2 2.5"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sC=["svg",t,[["path",{d:"M10 9.5 8 12l2 2.5"}],["path",{d:"M14 21h1"}],["path",{d:"m14 9.5 2 2.5-2 2.5"}],["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"}],["path",{d:"M9 21h1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nC=["svg",t,[["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"}],["path",{d:"M9 21h1"}],["path",{d:"M14 21h1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=["svg",t,[["path",{d:"M8 7v7"}],["path",{d:"M12 7v4"}],["path",{d:"M16 7v9"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M9 3h1"}],["path",{d:"M14 3h1"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 9v1"}],["path",{d:"M21 14v1"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M14 21h1"}],["path",{d:"M9 21h1"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M3 14v1"}],["path",{d:"M3 9v1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=["svg",t,[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h2"}],["path",{d:"M14 3h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v2"}],["path",{d:"M3 14v1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 10h10"}],["path",{d:"M7 14h10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}],["path",{d:"M9 11.2h5.7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 7v7"}],["path",{d:"M12 7v4"}],["path",{d:"M16 7v9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7v10"}],["path",{d:"M11 7v10"}],["path",{d:"m15 7 2 10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 16V8l4 4 4-4v8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 8h10"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=["svg",t,[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}],["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=["svg",t,[["path",{d:"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41"}],["path",{d:"M3 8.7V19a2 2 0 0 0 2 2h10.3"}],["path",{d:"m2 2 20 20"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2"}],["path",{d:"M9 17v-2.3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=["svg",t,[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7h10"}],["path",{d:"M10 7v10"}],["path",{d:"M16 17a2 2 0 0 1-2-2V7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 12H9.5a2.5 2.5 0 0 1 0-5H17"}],["path",{d:"M12 7v10"}],["path",{d:"M16 7v10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m9 8 6 4-6 4Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=["svg",t,[["path",{d:"M12 7v4"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cC=["svg",t,[["path",{d:"M7 12h2l2 5 2-10h4"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=["svg",t,[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"2"}],["circle",{cx:"8",cy:"8",r:"2"}],["path",{d:"M9.414 9.414 12 12"}],["path",{d:"M14.8 14.8 18 18"}],["circle",{cx:"8",cy:"16",r:"2"}],["path",{d:"m18 6-8.586 8.586"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M16 8.9V7H8l4 5-4 5h8v-1.9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=["svg",t,[["path",{d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3"}],["path",{d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=["svg",t,[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dC=["svg",t,[["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rC=["svg",t,[["path",{d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"}],["path",{d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=["svg",t,[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=["svg",t,[["path",{d:"M18 21a6 6 0 0 0-12 0"}],["circle",{cx:"12",cy:"11",r:"4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iC=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oC=["svg",t,[["path",{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pC=["svg",t,[["path",{d:"M15.236 22a3 3 0 0 0-2.2-5"}],["path",{d:"M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4"}],["path",{d:"M18 13h.01"}],["path",{d:"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lC=["svg",t,[["path",{d:"M5 22h14"}],["path",{d:"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z"}],["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MC=["svg",t,[["path",{d:"M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vC=["svg",t,[["path",{d:"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43"}],["path",{d:"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=["svg",t,[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uC=["svg",t,[["line",{x1:"18",x2:"18",y1:"20",y2:"4"}],["polygon",{points:"14,20 4,12 14,4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=["svg",t,[["line",{x1:"6",x2:"6",y1:"4",y2:"20"}],["polygon",{points:"10,4 20,12 10,20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=["svg",t,[["path",{d:"M11 2v2"}],["path",{d:"M5 2v2"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3"}],["circle",{cx:"20",cy:"10",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xC=["svg",t,[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"}],["path",{d:"M14 3v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 13h.01"}],["path",{d:"M16 13h.01"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fC=["svg",t,[["path",{d:"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"}],["path",{d:"M15 3v4a2 2 0 0 0 2 2h4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _C=["svg",t,[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"}],["path",{d:"M2 7h20"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AC=["svg",t,[["rect",{width:"20",height:"6",x:"2",y:"4",rx:"2"}],["rect",{width:"20",height:"6",x:"2",y:"14",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wC=["svg",t,[["rect",{width:"6",height:"20",x:"4",y:"2",rx:"2"}],["rect",{width:"6",height:"20",x:"14",y:"2",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CC=["svg",t,[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HC=["svg",t,[["path",{d:"m4 5 8 8"}],["path",{d:"m12 5-8 8"}],["path",{d:"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EC=["svg",t,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 4h.01"}],["path",{d:"M20 12h.01"}],["path",{d:"M12 20h.01"}],["path",{d:"M4 12h.01"}],["path",{d:"M17.657 6.343h.01"}],["path",{d:"M17.657 17.657h.01"}],["path",{d:"M6.343 17.657h.01"}],["path",{d:"M6.343 6.343h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VC=["svg",t,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 3v1"}],["path",{d:"M12 20v1"}],["path",{d:"M3 12h1"}],["path",{d:"M20 12h1"}],["path",{d:"m18.364 5.636-.707.707"}],["path",{d:"m6.343 17.657-.707.707"}],["path",{d:"m5.636 5.636.707.707"}],["path",{d:"m17.657 17.657.707.707"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LC=["svg",t,[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.9 4.9 1.4 1.4"}],["path",{d:"m17.7 17.7 1.4 1.4"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.3 17.7-1.4 1.4"}],["path",{d:"m19.1 4.9-1.4 1.4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bC=["svg",t,[["path",{d:"M10 9a3 3 0 1 0 0 6"}],["path",{d:"M2 12h1"}],["path",{d:"M14 21V3"}],["path",{d:"M10 4V3"}],["path",{d:"M10 21v-1"}],["path",{d:"m3.64 18.36.7-.7"}],["path",{d:"m4.34 6.34-.7-.7"}],["path",{d:"M14 12h8"}],["path",{d:"m17 4-3 3"}],["path",{d:"m14 17 3 3"}],["path",{d:"m21 15-3-3 3-3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SC=["svg",t,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TC=["svg",t,[["path",{d:"M12 2v8"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OC=["svg",t,[["path",{d:"M12 10V2"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m16 6-4 4-4-4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DC=["svg",t,[["path",{d:"m4 19 8-8"}],["path",{d:"m12 19-8-8"}],["path",{d:"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PC=["svg",t,[["path",{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"}],["path",{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"}],["path",{d:"M 7 17h.01"}],["path",{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NC=["svg",t,[["path",{d:"M10 21V3h8"}],["path",{d:"M6 16h9"}],["path",{d:"M10 9.5h7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kC=["svg",t,[["path",{d:"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"}],["path",{d:"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m18 22-3-3 3-3"}],["path",{d:"m6 2 3 3-3 3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RC=["svg",t,[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IC=["svg",t,[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $C=["svg",t,[["path",{d:"m18 2 4 4"}],["path",{d:"m17 7 3-3"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"}],["path",{d:"m9 11 4 4"}],["path",{d:"m5 19-3 3"}],["path",{d:"m14 4 6 6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZC=["svg",t,[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BC=["svg",t,[["path",{d:"M12 21v-6"}],["path",{d:"M12 9V3"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zC=["svg",t,[["path",{d:"M12 15V9"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FC=["svg",t,[["path",{d:"M14 14v2"}],["path",{d:"M14 20v2"}],["path",{d:"M14 2v2"}],["path",{d:"M14 8v2"}],["path",{d:"M2 15h8"}],["path",{d:"M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2"}],["path",{d:"M2 9h8"}],["path",{d:"M22 15h-4"}],["path",{d:"M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"}],["path",{d:"M22 9h-4"}],["path",{d:"M5 3v18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qC=["svg",t,[["path",{d:"M16 12H3"}],["path",{d:"M16 18H3"}],["path",{d:"M16 6H3"}],["path",{d:"M21 12h.01"}],["path",{d:"M21 18h.01"}],["path",{d:"M21 6h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UC=["svg",t,[["path",{d:"M15 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 9H3"}],["path",{d:"M21 15H3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WC=["svg",t,[["path",{d:"M14 10h2"}],["path",{d:"M15 22v-8"}],["path",{d:"M15 2v4"}],["path",{d:"M2 10h2"}],["path",{d:"M20 10h2"}],["path",{d:"M3 19h18"}],["path",{d:"M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6"}],["path",{d:"M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2"}],["path",{d:"M8 10h2"}],["path",{d:"M9 22v-8"}],["path",{d:"M9 2v4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KC=["svg",t,[["path",{d:"M12 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GC=["svg",t,[["rect",{width:"10",height:"14",x:"3",y:"8",rx:"2"}],["path",{d:"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"}],["path",{d:"M8 18h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jC=["svg",t,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YC=["svg",t,[["circle",{cx:"7",cy:"7",r:"5"}],["circle",{cx:"17",cy:"17",r:"5"}],["path",{d:"M12 17h10"}],["path",{d:"m3.46 10.54 7.08-7.08"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XC=["svg",t,[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QC=["svg",t,[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JC=["svg",t,[["path",{d:"M4 4v16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tH=["svg",t,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aH=["svg",t,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eH=["svg",t,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}],["path",{d:"M19 4v16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hH=["svg",t,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}],["path",{d:"M19 4v16"}],["path",{d:"M22 6 2 18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sH=["svg",t,[["circle",{cx:"17",cy:"4",r:"2"}],["path",{d:"M15.59 5.41 5.41 15.59"}],["circle",{cx:"4",cy:"17",r:"2"}],["path",{d:"M12 22s-4-9-1.5-11.5S22 12 22 12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nH=["svg",t,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"6"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cH=["svg",t,[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"}],["path",{d:"m13.56 11.747 4.332-.924"}],["path",{d:"m16 21-3.105-6.21"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"}],["path",{d:"m6.158 8.633 1.114 4.456"}],["path",{d:"m8 21 3.105-6.21"}],["circle",{cx:"12",cy:"13",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dH=["svg",t,[["circle",{cx:"4",cy:"4",r:"2"}],["path",{d:"m14 5 3-3 3 3"}],["path",{d:"m14 10 3-3 3 3"}],["path",{d:"M17 14V2"}],["path",{d:"M17 14H7l-5 8h20Z"}],["path",{d:"M8 14v8"}],["path",{d:"m9 14 5 8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rH=["svg",t,[["path",{d:"M3.5 21 14 3"}],["path",{d:"M20.5 21 10 3"}],["path",{d:"M15.5 21 12 15l-3.5 6"}],["path",{d:"M2 21h20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iH=["svg",t,[["polyline",{points:"4 17 10 11 4 5"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=["svg",t,[["path",{d:"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3"}],["path",{d:"m16 2 6 6"}],["path",{d:"M12 16H4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oH=["svg",t,[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2"}],["path",{d:"M8.5 2h7"}],["path",{d:"M14.5 16h-5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pH=["svg",t,[["path",{d:"M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2"}],["path",{d:"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2"}],["path",{d:"M3 2h7"}],["path",{d:"M14 2h7"}],["path",{d:"M9 16H4"}],["path",{d:"M20 16h-5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lH=["svg",t,[["path",{d:"M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1"}],["path",{d:"M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5"}],["path",{d:"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"}],["path",{d:"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"}],["path",{d:"M9 7v10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MH=["svg",t,[["path",{d:"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"}],["path",{d:"M7 22h1a4 4 0 0 0 4-4v-1"}],["path",{d:"M7 2h1a4 4 0 0 1 4 4v1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vH=["svg",t,[["path",{d:"M17 6H3"}],["path",{d:"M21 12H8"}],["path",{d:"M21 18H8"}],["path",{d:"M3 12v6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gH=["svg",t,[["path",{d:"M21 6H3"}],["path",{d:"M10 12H3"}],["path",{d:"M10 18H3"}],["circle",{cx:"17",cy:"15",r:"3"}],["path",{d:"m21 19-1.9-1.9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=["svg",t,[["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 3h1"}],["path",{d:"M14 21h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M21 14v1"}],["line",{x1:"7",x2:"15",y1:"8",y2:"8"}],["line",{x1:"7",x2:"17",y1:"12",y2:"12"}],["line",{x1:"7",x2:"13",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uH=["svg",t,[["path",{d:"M17 6.1H3"}],["path",{d:"M21 12.1H3"}],["path",{d:"M15.1 18H3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yH=["svg",t,[["path",{d:"M2 10s3-3 3-8"}],["path",{d:"M22 10s-3-3-3-8"}],["path",{d:"M10 2c0 4.4-3.6 8-8 8"}],["path",{d:"M14 2c0 4.4 3.6 8 8 8"}],["path",{d:"M2 10s2 2 2 5"}],["path",{d:"M22 10s-2 2-2 5"}],["path",{d:"M8 15h8"}],["path",{d:"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"}],["path",{d:"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mH=["svg",t,[["path",{d:"M2 12h10"}],["path",{d:"M9 4v16"}],["path",{d:"m3 9 3 3-3 3"}],["path",{d:"M12 6 9 9 6 6"}],["path",{d:"m6 18 3-3 1.5 1.5"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xH=["svg",t,[["path",{d:"M12 9a4 4 0 0 0-2 7.5"}],["path",{d:"M12 3v2"}],["path",{d:"m6.6 18.4-1.4 1.4"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}],["path",{d:"M4 13H2"}],["path",{d:"M6.34 7.34 4.93 5.93"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fH=["svg",t,[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _H=["svg",t,[["path",{d:"M17 14V2"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AH=["svg",t,[["path",{d:"M7 10v12"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wH=["svg",t,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CH=["svg",t,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 12h6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HH=["svg",t,[["path",{d:"M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 9h.01"}],["path",{d:"m15 9-6 6"}],["path",{d:"M15 15h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EH=["svg",t,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 12h6"}],["path",{d:"M12 9v6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VH=["svg",t,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"m9.5 14.5 5-5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LH=["svg",t,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"m9.5 14.5 5-5"}],["path",{d:"m9.5 9.5 5 5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bH=["svg",t,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M13 5v2"}],["path",{d:"M13 17v2"}],["path",{d:"M13 11v2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SH=["svg",t,[["path",{d:"M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12"}],["path",{d:"m12 13.5 3.75.5"}],["path",{d:"m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8"}],["path",{d:"M6 10V8"}],["path",{d:"M6 14v1"}],["path",{d:"M6 19v2"}],["rect",{x:"2",y:"8",width:"20",height:"13",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TH=["svg",t,[["path",{d:"m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8"}],["path",{d:"M6 10V8"}],["path",{d:"M6 14v1"}],["path",{d:"M6 19v2"}],["rect",{x:"2",y:"8",width:"20",height:"13",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OH=["svg",t,[["path",{d:"M10 2h4"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2"}],["path",{d:"m2 2 20 20"}],["path",{d:"M12 12v-2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DH=["svg",t,[["path",{d:"M10 2h4"}],["path",{d:"M12 14v-4"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"}],["path",{d:"M9 17H4v5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PH=["svg",t,[["line",{x1:"10",x2:"14",y1:"2",y2:"2"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11"}],["circle",{cx:"12",cy:"14",r:"8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NH=["svg",t,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6"}],["circle",{cx:"8",cy:"12",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kH=["svg",t,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6"}],["circle",{cx:"16",cy:"12",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RH=["svg",t,[["path",{d:"M21 4H3"}],["path",{d:"M18 8H6"}],["path",{d:"M19 12H9"}],["path",{d:"M16 16h-6"}],["path",{d:"M11 20H9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IH=["svg",t,[["ellipse",{cx:"12",cy:"11",rx:"3",ry:"2"}],["ellipse",{cx:"12",cy:"12.5",rx:"10",ry:"8.5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $H=["svg",t,[["path",{d:"M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16"}],["path",{d:"M2 14h12"}],["path",{d:"M22 14h-2"}],["path",{d:"M12 20v-6"}],["path",{d:"m2 2 20 20"}],["path",{d:"M22 16V6a2 2 0 0 0-2-2H10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZH=["svg",t,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M2 14h20"}],["path",{d:"M12 20v-6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BH=["svg",t,[["path",{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z"}],["path",{d:"M8 13v9"}],["path",{d:"M16 22v-9"}],["path",{d:"m9 6 1 7"}],["path",{d:"m15 6-1 7"}],["path",{d:"M12 6V2"}],["path",{d:"M13 2h-2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zH=["svg",t,[["rect",{width:"18",height:"12",x:"3",y:"8",rx:"1"}],["path",{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"}],["path",{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FH=["svg",t,[["path",{d:"m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20"}],["path",{d:"M16 18h-5"}],["path",{d:"M18 5a1 1 0 0 0-1 1v5.573"}],["path",{d:"M3 4h8.129a1 1 0 0 1 .99.863L13 11.246"}],["path",{d:"M4 11V4"}],["path",{d:"M7 15h.01"}],["path",{d:"M8 10.1V4"}],["circle",{cx:"18",cy:"18",r:"2"}],["circle",{cx:"7",cy:"15",r:"5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qH=["svg",t,[["path",{d:"M9.3 6.2a4.55 4.55 0 0 0 5.4 0"}],["path",{d:"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3"}],["path",{d:"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z"}],["path",{d:"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UH=["svg",t,[["path",{d:"M2 22V12a10 10 0 1 1 20 0v10"}],["path",{d:"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8"}],["path",{d:"M10 15h.01"}],["path",{d:"M14 15h.01"}],["path",{d:"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z"}],["path",{d:"m9 19-2 3"}],["path",{d:"m15 19 2 3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WH=["svg",t,[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1"}],["path",{d:"m9 15-1-1"}],["path",{d:"m15 15 1-1"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"}],["path",{d:"m8 19-2 3"}],["path",{d:"m16 19 2 3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KH=["svg",t,[["path",{d:"M2 17 17 2"}],["path",{d:"m2 14 8 8"}],["path",{d:"m5 11 8 8"}],["path",{d:"m8 8 8 8"}],["path",{d:"m11 5 8 8"}],["path",{d:"m14 2 8 8"}],["path",{d:"M7 22 22 7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=["svg",t,[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2"}],["path",{d:"M4 11h16"}],["path",{d:"M12 3v8"}],["path",{d:"m8 19-2 3"}],["path",{d:"m18 22-2-3"}],["path",{d:"M8 15h.01"}],["path",{d:"M16 15h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GH=["svg",t,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jH=["svg",t,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YH=["svg",t,[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"}],["path",{d:"M12 19v3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=["svg",t,[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XH=["svg",t,[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"}],["path",{d:"M12 22v-3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QH=["svg",t,[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"}],["path",{d:"M7 16v6"}],["path",{d:"M13 19v3"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JH=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["rect",{width:"3",height:"9",x:"7",y:"7"}],["rect",{width:"3",height:"5",x:"14",y:"7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=["svg",t,[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}],["polyline",{points:"16 17 22 17 22 11"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=["svg",t,[["path",{d:"M14.828 14.828 21 21"}],["path",{d:"M21 16v5h-5"}],["path",{d:"m21 3-9 9-4-4-6 6"}],["path",{d:"M21 8V3h-5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=["svg",t,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=["svg",t,[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=["svg",t,[["path",{d:"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sE=["svg",t,[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=["svg",t,[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18"}],["path",{d:"M4 22h16"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=["svg",t,[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"}],["path",{d:"M15 18H9"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"}],["circle",{cx:"17",cy:"18",r:"2"}],["circle",{cx:"7",cy:"18",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=["svg",t,[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"}],["path",{d:"M4.82 7.9 8 10"}],["path",{d:"M15.18 7.9 12 10"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rE=["svg",t,[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"}],["path",{d:"M7 21h10"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=["svg",t,[["path",{d:"M7 21h10"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=["svg",t,[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2"}],["polyline",{points:"17 2 12 7 7 2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oE=["svg",t,[["path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=["svg",t,[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=["svg",t,[["path",{d:"M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=["svg",t,[["polyline",{points:"4 7 4 4 20 4 20 7"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=["svg",t,[["path",{d:"M12 2v1"}],["path",{d:"M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575"}],["path",{d:"M17.5 12H22A10 10 0 0 0 9.004 3.455"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=["svg",t,[["path",{d:"M22 12a10.06 10.06 1 0 0-20 0Z"}],["path",{d:"M12 12v8a2 2 0 0 0 4 0"}],["path",{d:"M12 2v1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=["svg",t,[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=["svg",t,[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=["svg",t,[["circle",{cx:"12",cy:"17",r:"1"}],["path",{d:"M3 7v6h6"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=["svg",t,[["path",{d:"M3 7v6h6"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=["svg",t,[["path",{d:"M16 12h6"}],["path",{d:"M8 12H2"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"m19 15 3-3-3-3"}],["path",{d:"m5 9-3 3 3 3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=["svg",t,[["path",{d:"M12 22v-6"}],["path",{d:"M12 8V2"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}],["path",{d:"m15 19-3 3-3-3"}],["path",{d:"m15 5-3-3-3 3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=["svg",t,[["rect",{width:"8",height:"6",x:"5",y:"4",rx:"1"}],["rect",{width:"8",height:"6",x:"11",y:"14",rx:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=["svg",t,[["circle",{cx:"12",cy:"10",r:"1"}],["path",{d:"M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"}],["path",{d:"M6 17v.01"}],["path",{d:"M6 13v.01"}],["path",{d:"M18 17v.01"}],["path",{d:"M18 13v.01"}],["path",{d:"M14 22v-5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=["svg",t,[["path",{d:"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=["svg",t,[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=["svg",t,[["path",{d:"m19 5 3-3"}],["path",{d:"m2 22 3-3"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"}],["path",{d:"M7.5 13.5 10 11"}],["path",{d:"M10.5 16.5 13 14"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=["svg",t,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"17 8 12 3 7 8"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=["svg",t,[["circle",{cx:"10",cy:"7",r:"1"}],["circle",{cx:"4",cy:"20",r:"1"}],["path",{d:"M4.7 19.3 19 5"}],["path",{d:"m21 3-3 1 2 2Z"}],["path",{d:"M9.26 7.68 5 12l2 5"}],["path",{d:"m10 14 5 2 3.5-3.5"}],["path",{d:"m18 12 1-1 1 1-1 1Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=["svg",t,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["polyline",{points:"16 11 18 13 22 9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=["svg",t,[["circle",{cx:"18",cy:"15",r:"3"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M10 15H6a4 4 0 0 0-4 4v2"}],["path",{d:"m21.7 16.4-.9-.3"}],["path",{d:"m15.2 13.9-.9-.3"}],["path",{d:"m16.6 18.7.3-.9"}],["path",{d:"m19.1 12.2.3-.9"}],["path",{d:"m19.6 18.7-.4-1"}],["path",{d:"m16.8 12.3-.4-1"}],["path",{d:"m14.3 16.6 1-.4"}],["path",{d:"m20.7 13.8 1-.4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=["svg",t,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=["svg",t,[["path",{d:"M11.5 15H7a4 4 0 0 0-4 4v2"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["circle",{cx:"10",cy:"7",r:"4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=["svg",t,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=["svg",t,[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"m16 19 2 2 4-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=["svg",t,[["path",{d:"M2 21a8 8 0 0 1 10.434-7.62"}],["circle",{cx:"10",cy:"8",r:"5"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m19.5 14.3-.4.9"}],["path",{d:"m16.9 20.8-.4.9"}],["path",{d:"m21.7 19.5-.9-.4"}],["path",{d:"m15.2 16.9-.9-.4"}],["path",{d:"m21.7 16.5-.9.4"}],["path",{d:"m15.2 19.1-.9.4"}],["path",{d:"m19.5 21.7-.4-.9"}],["path",{d:"m16.9 15.2-.4-.9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=["svg",t,[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M22 19h-6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=["svg",t,[["path",{d:"M2 21a8 8 0 0 1 10.821-7.487"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["circle",{cx:"10",cy:"8",r:"5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=["svg",t,[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M19 16v6"}],["path",{d:"M22 19h-6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=["svg",t,[["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M2 21a8 8 0 0 1 10.434-7.62"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m22 22-1.9-1.9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=["svg",t,[["path",{d:"M2 21a8 8 0 0 1 11.873-7"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"m17 17 5 5"}],["path",{d:"m22 17-5 5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=["svg",t,[["circle",{cx:"12",cy:"8",r:"5"}],["path",{d:"M20 21a8 8 0 0 0-16 0"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=["svg",t,[["circle",{cx:"10",cy:"7",r:"4"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2"}],["circle",{cx:"17",cy:"17",r:"3"}],["path",{d:"m21 21-1.9-1.9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=["svg",t,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=["svg",t,[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=["svg",t,[["path",{d:"M18 21a8 8 0 0 0-16 0"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=["svg",t,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=["svg",t,[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"}],["path",{d:"m2.1 21.8 6.4-6.3"}],["path",{d:"m19 5-7 7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=["svg",t,[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=["svg",t,[["path",{d:"M12 2v20"}],["path",{d:"M2 5h20"}],["path",{d:"M3 3v2"}],["path",{d:"M7 3v2"}],["path",{d:"M17 3v2"}],["path",{d:"M21 3v2"}],["path",{d:"m19 5-7 7-7-7"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=["svg",t,[["path",{d:"M8 21s-4-3-4-9 4-9 4-9"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}],["path",{d:"m7.9 7.9 2.7 2.7"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor"}],["path",{d:"m13.4 10.6 2.7-2.7"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor"}],["path",{d:"m7.9 16.1 2.7-2.7"}],["circle",{cx:"16.5",cy:"16.5",r:".5",fill:"currentColor"}],["path",{d:"m13.4 13.4 2.7 2.7"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=["svg",t,[["path",{d:"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"}],["path",{d:"M16 8c4 0 6-2 6-6-4 0-6 2-6 6"}],["path",{d:"M17.41 3.6a10 10 0 1 0 3 3"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=["svg",t,[["path",{d:"M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z"}],["path",{d:"M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z"}],["path",{d:"M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=["svg",t,[["path",{d:"m2 8 2 2-2 2 2 2-2 2"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2"}],["path",{d:"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2"}],["path",{d:"M16 10.34V6c0-.55-.45-1-1-1h-4.34"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=["svg",t,[["path",{d:"m2 8 2 2-2 2 2 2-2 2"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2"}],["rect",{width:"8",height:"14",x:"8",y:"5",rx:"1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=["svg",t,[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=["svg",t,[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=["svg",t,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M2 8h20"}],["circle",{cx:"8",cy:"14",r:"2"}],["path",{d:"M8 12h8"}],["circle",{cx:"16",cy:"14",r:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=["svg",t,[["path",{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"}],["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=["svg",t,[["circle",{cx:"6",cy:"12",r:"4"}],["circle",{cx:"18",cy:"12",r:"4"}],["line",{x1:"6",x2:"18",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=["svg",t,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=["svg",t,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=["svg",t,[["path",{d:"M16 9a5 5 0 0 1 .95 2.293"}],["path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96"}],["path",{d:"m2 2 20 20"}],["path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"}],["path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tV=["svg",t,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aV=["svg",t,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eV=["svg",t,[["path",{d:"m9 12 2 2 4-4"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"}],["path",{d:"M22 19H2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hV=["svg",t,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=["svg",t,[["path",{d:"M17 14h.01"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sV=["svg",t,[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nV=["svg",t,[["circle",{cx:"8",cy:"9",r:"2"}],["path",{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=["svg",t,[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"}],["path",{d:"m14 7 3 3"}],["path",{d:"M5 6v4"}],["path",{d:"M19 14v4"}],["path",{d:"M10 2v2"}],["path",{d:"M7 8H3"}],["path",{d:"M21 16h-4"}],["path",{d:"M11 3H9"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cV=["svg",t,[["path",{d:"M15 4V2"}],["path",{d:"M15 16v-2"}],["path",{d:"M8 9h2"}],["path",{d:"M20 9h2"}],["path",{d:"M17.8 11.8 19 13"}],["path",{d:"M15 9h.01"}],["path",{d:"M17.8 6.2 19 5"}],["path",{d:"m3 21 9-9"}],["path",{d:"M12.2 6.2 11 5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dV=["svg",t,[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"}],["path",{d:"M6 18h12"}],["path",{d:"M6 14h12"}],["rect",{width:"12",height:"12",x:"6",y:"10"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rV=["svg",t,[["path",{d:"M3 6h3"}],["path",{d:"M17 6h.01"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2"}],["circle",{cx:"12",cy:"13",r:"5"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iV=["svg",t,[["circle",{cx:"12",cy:"12",r:"6"}],["polyline",{points:"12 10 12 12 13 13"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oV=["svg",t,[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pV=["svg",t,[["circle",{cx:"12",cy:"4.5",r:"2.5"}],["path",{d:"m10.2 6.3-3.9 3.9"}],["circle",{cx:"4.5",cy:"12",r:"2.5"}],["path",{d:"M7 12h10"}],["circle",{cx:"19.5",cy:"12",r:"2.5"}],["path",{d:"m13.8 17.7 3.9-3.9"}],["circle",{cx:"12",cy:"19.5",r:"2.5"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lV=["svg",t,[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MV=["svg",t,[["path",{d:"M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15"}],["path",{d:"M9 3.4a4 4 0 0 1 6.52.66"}],["path",{d:"m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05"}],["path",{d:"M20.3 20.3a4 4 0 0 1-2.3.7"}],["path",{d:"M18.6 13a4 4 0 0 1 3.357 3.414"}],["path",{d:"m12 6 .6 1"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vV=["svg",t,[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gV=["svg",t,[["circle",{cx:"12",cy:"5",r:"3"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uV=["svg",t,[["path",{d:"m2 22 10-10"}],["path",{d:"m16 8-1.17 1.17"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97"}],["path",{d:"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98"}],["path",{d:"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yV=["svg",t,[["path",{d:"M2 22 16 8"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mV=["svg",t,[["circle",{cx:"7",cy:"12",r:"3"}],["path",{d:"M10 9v6"}],["circle",{cx:"17",cy:"12",r:"3"}],["path",{d:"M14 7v8"}],["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xV=["svg",t,[["path",{d:"M12 20h.01"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fV=["svg",t,[["path",{d:"M12 20h.01"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _V=["svg",t,[["path",{d:"M12 20h.01"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AV=["svg",t,[["path",{d:"M12 20h.01"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wV=["svg",t,[["path",{d:"M12 20h.01"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CV=["svg",t,[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HV=["svg",t,[["path",{d:"M8 22h8"}],["path",{d:"M7 10h3m7 0h-1.343"}],["path",{d:"M12 15v7"}],["path",{d:"M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EV=["svg",t,[["path",{d:"M8 22h8"}],["path",{d:"M7 10h10"}],["path",{d:"M12 15v7"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VV=["svg",t,[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LV=["svg",t,[["path",{d:"m19 12-1.5 3"}],["path",{d:"M19.63 18.81 22 20"}],["path",{d:"M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bV=["svg",t,[["line",{x1:"3",x2:"21",y1:"6",y2:"6"}],["path",{d:"M3 12h15a3 3 0 1 1 0 6h-4"}],["polyline",{points:"16 16 14 18 16 20"}],["line",{x1:"3",x2:"10",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SV=["svg",t,[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TV=["svg",t,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OV=["svg",t,[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"}],["path",{d:"m10 15 5-3-5-3z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DV=["svg",t,[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PV=["svg",t,[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NV=["svg",t,[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kV=["svg",t,[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RV=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:Gi,AArrowUp:ji,ALargeSmall:Yi,Accessibility:Xi,Activity:Qi,ActivitySquare:xe,AirVent:Ji,Airplay:t4,AlarmCheck:d0,AlarmClock:e4,AlarmClockCheck:d0,AlarmClockMinus:r0,AlarmClockOff:a4,AlarmClockPlus:i0,AlarmMinus:r0,AlarmPlus:i0,AlarmSmoke:h4,Album:s4,AlertCircle:k0,AlertOctagon:ja,AlertTriangle:fh,AlignCenter:d4,AlignCenterHorizontal:n4,AlignCenterVertical:c4,AlignEndHorizontal:r4,AlignEndVertical:i4,AlignHorizontalDistributeCenter:o4,AlignHorizontalDistributeEnd:p4,AlignHorizontalDistributeStart:l4,AlignHorizontalJustifyCenter:M4,AlignHorizontalJustifyEnd:v4,AlignHorizontalJustifyStart:g4,AlignHorizontalSpaceAround:u4,AlignHorizontalSpaceBetween:y4,AlignJustify:m4,AlignLeft:x4,AlignRight:f4,AlignStartHorizontal:_4,AlignStartVertical:A4,AlignVerticalDistributeCenter:w4,AlignVerticalDistributeEnd:C4,AlignVerticalDistributeStart:H4,AlignVerticalJustifyCenter:E4,AlignVerticalJustifyEnd:V4,AlignVerticalJustifyStart:L4,AlignVerticalSpaceAround:b4,AlignVerticalSpaceBetween:S4,Ambulance:T4,Ampersand:O4,Ampersands:D4,Amphora:P4,Anchor:N4,Angry:k4,Annoyed:R4,Antenna:I4,Anvil:$4,Aperture:Z4,AppWindow:z4,AppWindowMac:B4,Apple:F4,Archive:W4,ArchiveRestore:q4,ArchiveX:U4,AreaChart:w0,Armchair:K4,ArrowBigDown:j4,ArrowBigDownDash:G4,ArrowBigLeft:X4,ArrowBigLeftDash:Y4,ArrowBigRight:J4,ArrowBigRightDash:Q4,ArrowBigUp:ao,ArrowBigUpDash:to,ArrowDown:lo,ArrowDown01:eo,ArrowDown10:ho,ArrowDownAZ:o0,ArrowDownAz:o0,ArrowDownCircle:R0,ArrowDownFromLine:so,ArrowDownLeft:no,ArrowDownLeftFromCircle:$0,ArrowDownLeftFromSquare:Ce,ArrowDownLeftSquare:fe,ArrowDownNarrowWide:co,ArrowDownRight:ro,ArrowDownRightFromCircle:Z0,ArrowDownRightFromSquare:He,ArrowDownRightSquare:_e,ArrowDownSquare:Ae,ArrowDownToDot:io,ArrowDownToLine:oo,ArrowDownUp:po,ArrowDownWideNarrow:p0,ArrowDownZA:l0,ArrowDownZa:l0,ArrowLeft:uo,ArrowLeftCircle:I0,ArrowLeftFromLine:Mo,ArrowLeftRight:vo,ArrowLeftSquare:we,ArrowLeftToLine:go,ArrowRight:fo,ArrowRightCircle:F0,ArrowRightFromLine:yo,ArrowRightLeft:mo,ArrowRightSquare:Le,ArrowRightToLine:xo,ArrowUp:So,ArrowUp01:_o,ArrowUp10:Ao,ArrowUpAZ:M0,ArrowUpAz:M0,ArrowUpCircle:q0,ArrowUpDown:wo,ArrowUpFromDot:Co,ArrowUpFromLine:Ho,ArrowUpLeft:Eo,ArrowUpLeftFromCircle:B0,ArrowUpLeftFromSquare:Ee,ArrowUpLeftSquare:be,ArrowUpNarrowWide:v0,ArrowUpRight:Vo,ArrowUpRightFromCircle:z0,ArrowUpRightFromSquare:Ve,ArrowUpRightSquare:Se,ArrowUpSquare:Te,ArrowUpToLine:Lo,ArrowUpWideNarrow:bo,ArrowUpZA:g0,ArrowUpZa:g0,ArrowsUpFromLine:To,Asterisk:Oo,AsteriskSquare:Oe,AtSign:Do,Atom:Po,AudioLines:No,AudioWaveform:ko,Award:Ro,Axe:Io,Axis3D:u0,Axis3d:u0,Baby:$o,Backpack:Zo,Badge:ep,BadgeAlert:Bo,BadgeCent:zo,BadgeCheck:y0,BadgeDollarSign:Fo,BadgeEuro:qo,BadgeHelp:Uo,BadgeIndianRupee:Wo,BadgeInfo:Ko,BadgeJapaneseYen:Go,BadgeMinus:jo,BadgePercent:Yo,BadgePlus:Xo,BadgePoundSterling:Qo,BadgeRussianRuble:Jo,BadgeSwissFranc:tp,BadgeX:ap,BaggageClaim:hp,Ban:sp,Banana:np,Bandage:cp,Banknote:dp,BarChart:T0,BarChart2:O0,BarChart3:b0,BarChart4:L0,BarChartBig:V0,BarChartHorizontal:H0,BarChartHorizontalBig:C0,Barcode:rp,Baseline:ip,Bath:op,Battery:up,BatteryCharging:pp,BatteryFull:lp,BatteryLow:Mp,BatteryMedium:vp,BatteryWarning:gp,Beaker:yp,Bean:xp,BeanOff:mp,Bed:Ap,BedDouble:fp,BedSingle:_p,Beef:wp,Beer:Hp,BeerOff:Cp,Bell:Op,BellDot:Ep,BellElectric:Vp,BellMinus:Lp,BellOff:bp,BellPlus:Sp,BellRing:Tp,BetweenHorizonalEnd:m0,BetweenHorizonalStart:x0,BetweenHorizontalEnd:m0,BetweenHorizontalStart:x0,BetweenVerticalEnd:Dp,BetweenVerticalStart:Pp,BicepsFlexed:Np,Bike:kp,Binary:Rp,Binoculars:Ip,Biohazard:$p,Bird:Zp,Bitcoin:Bp,Blend:zp,Blinds:Fp,Blocks:qp,Bluetooth:Gp,BluetoothConnected:Up,BluetoothOff:Wp,BluetoothSearching:Kp,Bold:jp,Bolt:Yp,Bomb:Xp,Bone:Qp,Book:_5,BookA:Jp,BookAudio:t5,BookCheck:a5,BookCopy:e5,BookDashed:f0,BookDown:h5,BookHeadphones:s5,BookHeart:n5,BookImage:c5,BookKey:d5,BookLock:r5,BookMarked:i5,BookMinus:o5,BookOpen:M5,BookOpenCheck:p5,BookOpenText:l5,BookPlus:v5,BookTemplate:f0,BookText:g5,BookType:u5,BookUp:m5,BookUp2:y5,BookUser:x5,BookX:f5,Bookmark:E5,BookmarkCheck:A5,BookmarkMinus:w5,BookmarkPlus:C5,BookmarkX:H5,BoomBox:V5,Bot:S5,BotMessageSquare:L5,BotOff:b5,Box:O5,BoxSelect:T5,Boxes:D5,Braces:_0,Brackets:P5,Brain:R5,BrainCircuit:N5,BrainCog:k5,BrickWall:I5,Briefcase:z5,BriefcaseBusiness:$5,BriefcaseConveyorBelt:Z5,BriefcaseMedical:B5,BringToFront:F5,Brush:q5,Bug:K5,BugOff:U5,BugPlay:W5,Building:j5,Building2:G5,Bus:X5,BusFront:Y5,Cable:J5,CableCar:Q5,Cake:a3,CakeSlice:t3,Calculator:e3,Calendar:_3,CalendarArrowDown:h3,CalendarArrowUp:s3,CalendarCheck:c3,CalendarCheck2:n3,CalendarClock:d3,CalendarCog:r3,CalendarDays:i3,CalendarFold:o3,CalendarHeart:p3,CalendarMinus:M3,CalendarMinus2:l3,CalendarOff:v3,CalendarPlus:u3,CalendarPlus2:g3,CalendarRange:y3,CalendarSearch:m3,CalendarX:f3,CalendarX2:x3,Camera:w3,CameraOff:A3,CandlestickChart:E0,Candy:E3,CandyCane:C3,CandyOff:H3,Cannabis:V3,Captions:A0,CaptionsOff:L3,Car:T3,CarFront:b3,CarTaxiFront:S3,Caravan:O3,Carrot:D3,CaseLower:P3,CaseSensitive:N3,CaseUpper:k3,CassetteTape:R3,Cast:I3,Castle:$3,Cat:Z3,Cctv:B3,ChartArea:w0,ChartBar:H0,ChartBarBig:C0,ChartBarDecreasing:z3,ChartBarIncreasing:F3,ChartBarStacked:q3,ChartCandlestick:E0,ChartColumn:b0,ChartColumnBig:V0,ChartColumnDecreasing:U3,ChartColumnIncreasing:L0,ChartColumnStacked:W3,ChartGantt:K3,ChartLine:S0,ChartNetwork:G3,ChartNoAxesColumn:O0,ChartNoAxesColumnDecreasing:j3,ChartNoAxesColumnIncreasing:T0,ChartNoAxesCombined:Y3,ChartNoAxesGantt:D0,ChartPie:P0,ChartScatter:N0,ChartSpline:X3,Check:J3,CheckCheck:Q3,CheckCircle:U0,CheckCircle2:W0,CheckSquare:Pe,CheckSquare2:Ne,ChefHat:t6,Cherry:a6,ChevronDown:e6,ChevronDownCircle:K0,ChevronDownSquare:ke,ChevronFirst:h6,ChevronLast:s6,ChevronLeft:n6,ChevronLeftCircle:G0,ChevronLeftSquare:Re,ChevronRight:c6,ChevronRightCircle:j0,ChevronRightSquare:Ie,ChevronUp:d6,ChevronUpCircle:Y0,ChevronUpSquare:$e,ChevronsDown:i6,ChevronsDownUp:r6,ChevronsLeft:l6,ChevronsLeftRight:p6,ChevronsLeftRightEllipsis:o6,ChevronsRight:v6,ChevronsRightLeft:M6,ChevronsUp:u6,ChevronsUpDown:g6,Chrome:y6,Church:m6,Cigarette:f6,CigaretteOff:x6,Circle:T6,CircleAlert:k0,CircleArrowDown:R0,CircleArrowLeft:I0,CircleArrowOutDownLeft:$0,CircleArrowOutDownRight:Z0,CircleArrowOutUpLeft:B0,CircleArrowOutUpRight:z0,CircleArrowRight:F0,CircleArrowUp:q0,CircleCheck:W0,CircleCheckBig:U0,CircleChevronDown:K0,CircleChevronLeft:G0,CircleChevronRight:j0,CircleChevronUp:Y0,CircleDashed:_6,CircleDivide:X0,CircleDollarSign:A6,CircleDot:C6,CircleDotDashed:w6,CircleEllipsis:H6,CircleEqual:E6,CircleFadingArrowUp:V6,CircleFadingPlus:L6,CircleGauge:Q0,CircleHelp:J0,CircleMinus:ta,CircleOff:b6,CircleParking:ea,CircleParkingOff:aa,CirclePause:ha,CirclePercent:sa,CirclePlay:na,CirclePlus:ca,CirclePower:da,CircleSlash:S6,CircleSlash2:ra,CircleSlashed:ra,CircleStop:ia,CircleUser:pa,CircleUserRound:oa,CircleX:la,CircuitBoard:O6,Citrus:D6,Clapperboard:P6,Clipboard:F6,ClipboardCheck:N6,ClipboardCopy:k6,ClipboardEdit:va,ClipboardList:R6,ClipboardMinus:I6,ClipboardPaste:$6,ClipboardPen:va,ClipboardPenLine:Ma,ClipboardPlus:Z6,ClipboardSignature:Ma,ClipboardType:B6,ClipboardX:z6,Clock:nl,Clock1:q6,Clock10:U6,Clock11:W6,Clock12:K6,Clock2:G6,Clock3:j6,Clock4:Y6,Clock5:X6,Clock6:Q6,Clock7:J6,Clock8:tl,Clock9:al,ClockAlert:el,ClockArrowDown:hl,ClockArrowUp:sl,Cloud:xl,CloudCog:cl,CloudDownload:ga,CloudDrizzle:dl,CloudFog:rl,CloudHail:il,CloudLightning:ol,CloudMoon:ll,CloudMoonRain:pl,CloudOff:Ml,CloudRain:gl,CloudRainWind:vl,CloudSnow:ul,CloudSun:ml,CloudSunRain:yl,CloudUpload:ua,Cloudy:fl,Clover:_l,Club:Al,Code:wl,Code2:ya,CodeSquare:Ze,CodeXml:ya,Codepen:Cl,Codesandbox:Hl,Coffee:El,Cog:Vl,Coins:Ll,Columns:ma,Columns2:ma,Columns3:xa,Columns4:bl,Combine:Sl,Command:Tl,Compass:Ol,Component:Dl,Computer:Pl,ConciergeBell:Nl,Cone:kl,Construction:Rl,Contact:Il,Contact2:fa,ContactRound:fa,Container:$l,Contrast:Zl,Cookie:Bl,CookingPot:zl,Copy:Gl,CopyCheck:Fl,CopyMinus:ql,CopyPlus:Ul,CopySlash:Wl,CopyX:Kl,Copyleft:jl,Copyright:Yl,CornerDownLeft:Xl,CornerDownRight:Ql,CornerLeftDown:Jl,CornerLeftUp:t8,CornerRightDown:a8,CornerRightUp:e8,CornerUpLeft:h8,CornerUpRight:s8,Cpu:n8,CreativeCommons:c8,CreditCard:d8,Croissant:r8,Crop:i8,Cross:o8,Crosshair:p8,Crown:l8,Cuboid:M8,CupSoda:v8,CurlyBraces:_0,Currency:g8,Cylinder:u8,Dam:y8,Database:f8,DatabaseBackup:m8,DatabaseZap:x8,Delete:_8,Dessert:A8,Diameter:w8,Diamond:E8,DiamondMinus:C8,DiamondPercent:_a,DiamondPlus:H8,Dice1:V8,Dice2:L8,Dice3:b8,Dice4:S8,Dice5:T8,Dice6:O8,Dices:D8,Diff:P8,Disc:I8,Disc2:N8,Disc3:k8,DiscAlbum:R8,Divide:$8,DivideCircle:X0,DivideSquare:Fe,Dna:B8,DnaOff:Z8,Dock:z8,Dog:F8,DollarSign:q8,Donut:U8,DoorClosed:W8,DoorOpen:K8,Dot:G8,DotSquare:qe,Download:j8,DownloadCloud:ga,DraftingCompass:Y8,Drama:X8,Dribbble:Q8,Drill:J8,Droplet:t7,Droplets:a7,Drum:e7,Drumstick:h7,Dumbbell:s7,Ear:c7,EarOff:n7,Earth:Aa,EarthLock:d7,Eclipse:r7,Edit:d2,Edit2:re,Edit3:de,Egg:p7,EggFried:i7,EggOff:o7,Ellipsis:Ca,EllipsisVertical:wa,Equal:M7,EqualNot:l7,EqualSquare:Ue,Eraser:v7,EthernetPort:g7,Euro:u7,Expand:y7,ExternalLink:m7,Eye:f7,EyeOff:x7,Facebook:_7,Factory:A7,Fan:w7,FastForward:C7,Feather:H7,Fence:E7,FerrisWheel:V7,Figma:L7,File:CM,FileArchive:b7,FileAudio:T7,FileAudio2:S7,FileAxis3D:Ha,FileAxis3d:Ha,FileBadge:D7,FileBadge2:O7,FileBarChart:Ea,FileBarChart2:Va,FileBox:P7,FileChartColumn:Va,FileChartColumnIncreasing:Ea,FileChartLine:La,FileChartPie:ba,FileCheck:k7,FileCheck2:N7,FileClock:R7,FileCode:$7,FileCode2:I7,FileCog:Sa,FileCog2:Sa,FileDiff:Z7,FileDigit:B7,FileDown:z7,FileEdit:Oa,FileHeart:F7,FileImage:q7,FileInput:U7,FileJson:K7,FileJson2:W7,FileKey:j7,FileKey2:G7,FileLineChart:La,FileLock:X7,FileLock2:Y7,FileMinus:J7,FileMinus2:Q7,FileMusic:tM,FileOutput:aM,FilePen:Oa,FilePenLine:Ta,FilePieChart:ba,FilePlus:hM,FilePlus2:eM,FileQuestion:sM,FileScan:nM,FileSearch:dM,FileSearch2:cM,FileSignature:Ta,FileSliders:rM,FileSpreadsheet:iM,FileStack:oM,FileSymlink:pM,FileTerminal:lM,FileText:MM,FileType:gM,FileType2:vM,FileUp:uM,FileVideo:mM,FileVideo2:yM,FileVolume:fM,FileVolume2:xM,FileWarning:_M,FileX:wM,FileX2:AM,Files:HM,Film:EM,Filter:LM,FilterX:VM,Fingerprint:bM,FireExtinguisher:SM,Fish:DM,FishOff:TM,FishSymbol:OM,Flag:RM,FlagOff:PM,FlagTriangleLeft:NM,FlagTriangleRight:kM,Flame:$M,FlameKindling:IM,Flashlight:BM,FlashlightOff:ZM,FlaskConical:FM,FlaskConicalOff:zM,FlaskRound:qM,FlipHorizontal:WM,FlipHorizontal2:UM,FlipVertical:GM,FlipVertical2:KM,Flower:YM,Flower2:jM,Focus:XM,FoldHorizontal:QM,FoldVertical:JM,Folder:Vv,FolderArchive:tv,FolderCheck:av,FolderClock:ev,FolderClosed:hv,FolderCode:sv,FolderCog:Da,FolderCog2:Da,FolderDot:nv,FolderDown:cv,FolderEdit:Pa,FolderGit:rv,FolderGit2:dv,FolderHeart:iv,FolderInput:ov,FolderKanban:pv,FolderKey:lv,FolderLock:Mv,FolderMinus:vv,FolderOpen:uv,FolderOpenDot:gv,FolderOutput:yv,FolderPen:Pa,FolderPlus:mv,FolderRoot:xv,FolderSearch:_v,FolderSearch2:fv,FolderSymlink:Av,FolderSync:wv,FolderTree:Cv,FolderUp:Hv,FolderX:Ev,Folders:Lv,Footprints:bv,ForkKnife:Th,ForkKnifeCrossed:Sh,Forklift:Sv,FormInput:oe,Forward:Tv,Frame:Ov,Framer:Dv,Frown:Pv,Fuel:Nv,Fullscreen:kv,FunctionSquare:We,GalleryHorizontal:Iv,GalleryHorizontalEnd:Rv,GalleryThumbnails:$v,GalleryVertical:Bv,GalleryVerticalEnd:Zv,Gamepad:Fv,Gamepad2:zv,GanttChart:D0,GanttChartSquare:F2,Gauge:qv,GaugeCircle:Q0,Gavel:Uv,Gem:Wv,Ghost:Kv,Gift:Gv,GitBranch:Yv,GitBranchPlus:jv,GitCommit:Na,GitCommitHorizontal:Na,GitCommitVertical:Xv,GitCompare:Jv,GitCompareArrows:Qv,GitFork:t9,GitGraph:a9,GitMerge:e9,GitPullRequest:r9,GitPullRequestArrow:h9,GitPullRequestClosed:s9,GitPullRequestCreate:c9,GitPullRequestCreateArrow:n9,GitPullRequestDraft:d9,Github:i9,Gitlab:o9,GlassWater:p9,Glasses:l9,Globe:v9,Globe2:Aa,GlobeLock:M9,Goal:g9,Grab:u9,GraduationCap:y9,Grape:m9,Grid:z2,Grid2X2:ka,Grid2x2:ka,Grid2x2Check:x9,Grid2x2Plus:f9,Grid2x2X:_9,Grid3X3:z2,Grid3x3:z2,Grip:C9,GripHorizontal:A9,GripVertical:w9,Group:H9,Guitar:E9,Ham:V9,Hammer:L9,Hand:D9,HandCoins:b9,HandHeart:S9,HandHelping:Ra,HandMetal:T9,HandPlatter:O9,Handshake:P9,HardDrive:R9,HardDriveDownload:N9,HardDriveUpload:k9,HardHat:I9,Hash:$9,Haze:Z9,HdmiPort:B9,Heading:G9,Heading1:z9,Heading2:F9,Heading3:q9,Heading4:U9,Heading5:W9,Heading6:K9,HeadphoneOff:j9,Headphones:Y9,Headset:X9,Heart:eg,HeartCrack:Q9,HeartHandshake:J9,HeartOff:tg,HeartPulse:ag,Heater:hg,HelpCircle:J0,HelpingHand:Ra,Hexagon:sg,Highlighter:ng,History:cg,Home:Ia,Hop:rg,HopOff:dg,Hospital:ig,Hotel:og,Hourglass:pg,House:Ia,HousePlug:lg,HousePlus:Mg,IceCream:Za,IceCream2:$a,IceCreamBowl:$a,IceCreamCone:Za,IdCard:vg,Image:_g,ImageDown:gg,ImageMinus:ug,ImageOff:yg,ImagePlay:mg,ImagePlus:xg,ImageUp:fg,Images:Ag,Import:wg,Inbox:Cg,Indent:za,IndentDecrease:Ba,IndentIncrease:za,IndianRupee:Hg,Infinity:Eg,Info:Vg,Inspect:Qe,InspectionPanel:Lg,Instagram:bg,Italic:Sg,IterationCcw:Tg,IterationCw:Og,JapaneseYen:Dg,Joystick:Pg,Kanban:Ng,KanbanSquare:Ke,KanbanSquareDashed:Be,Key:Ig,KeyRound:kg,KeySquare:Rg,Keyboard:Bg,KeyboardMusic:$g,KeyboardOff:Zg,Lamp:Kg,LampCeiling:zg,LampDesk:Fg,LampFloor:qg,LampWallDown:Ug,LampWallUp:Wg,LandPlot:Gg,Landmark:jg,Languages:Yg,Laptop:Xg,Laptop2:Fa,LaptopMinimal:Fa,Lasso:Jg,LassoSelect:Qg,Laugh:tu,Layers:hu,Layers2:au,Layers3:eu,Layout:ce,LayoutDashboard:su,LayoutGrid:nu,LayoutList:cu,LayoutPanelLeft:du,LayoutPanelTop:ru,LayoutTemplate:iu,Leaf:ou,LeafyGreen:pu,Lectern:lu,LetterText:Mu,Library:gu,LibraryBig:vu,LibrarySquare:Ge,LifeBuoy:uu,Ligature:yu,Lightbulb:xu,LightbulbOff:mu,LineChart:S0,Link:Au,Link2:_u,Link2Off:fu,Linkedin:wu,List:$u,ListCheck:Cu,ListChecks:Hu,ListCollapse:Eu,ListEnd:Vu,ListFilter:Lu,ListMinus:bu,ListMusic:Su,ListOrdered:Tu,ListPlus:Ou,ListRestart:Du,ListStart:Pu,ListTodo:Nu,ListTree:ku,ListVideo:Ru,ListX:Iu,Loader:Bu,Loader2:qa,LoaderCircle:qa,LoaderPinwheel:Zu,Locate:qu,LocateFixed:zu,LocateOff:Fu,Lock:Wu,LockKeyhole:Uu,LockKeyholeOpen:Ua,LockOpen:Wa,LogIn:Ku,LogOut:Gu,Logs:ju,Lollipop:Yu,Luggage:Xu,MSquare:je,Magnet:Qu,Mail:dy,MailCheck:Ju,MailMinus:ty,MailOpen:ay,MailPlus:ey,MailQuestion:hy,MailSearch:sy,MailWarning:ny,MailX:cy,Mailbox:ry,Mails:iy,Map:Ay,MapPin:fy,MapPinCheck:py,MapPinCheckInside:oy,MapPinHouse:ly,MapPinMinus:vy,MapPinMinusInside:My,MapPinOff:gy,MapPinPlus:yy,MapPinPlusInside:uy,MapPinX:xy,MapPinXInside:my,MapPinned:_y,Martini:wy,Maximize:Hy,Maximize2:Cy,Medal:Ey,Megaphone:Ly,MegaphoneOff:Vy,Meh:by,MemoryStick:Sy,Menu:Ty,MenuSquare:Ye,Merge:Oy,MessageCircle:Fy,MessageCircleCode:Dy,MessageCircleDashed:Py,MessageCircleHeart:Ny,MessageCircleMore:ky,MessageCircleOff:Ry,MessageCirclePlus:Iy,MessageCircleQuestion:$y,MessageCircleReply:Zy,MessageCircleWarning:By,MessageCircleX:zy,MessageSquare:sm,MessageSquareCode:qy,MessageSquareDashed:Uy,MessageSquareDiff:Wy,MessageSquareDot:Ky,MessageSquareHeart:Gy,MessageSquareMore:jy,MessageSquareOff:Yy,MessageSquarePlus:Xy,MessageSquareQuote:Qy,MessageSquareReply:Jy,MessageSquareShare:tm,MessageSquareText:am,MessageSquareWarning:em,MessageSquareX:hm,MessagesSquare:nm,Mic:dm,Mic2:Ka,MicOff:cm,MicVocal:Ka,Microchip:rm,Microscope:im,Microwave:om,Milestone:pm,Milk:Mm,MilkOff:lm,Minimize:gm,Minimize2:vm,Minus:um,MinusCircle:ta,MinusSquare:Xe,Monitor:bm,MonitorCheck:ym,MonitorCog:mm,MonitorDot:xm,MonitorDown:fm,MonitorOff:_m,MonitorPause:Am,MonitorPlay:wm,MonitorSmartphone:Cm,MonitorSpeaker:Hm,MonitorStop:Em,MonitorUp:Vm,MonitorX:Lm,Moon:Tm,MoonStar:Sm,MoreHorizontal:Ca,MoreVertical:wa,Mountain:Dm,MountainSnow:Om,Mouse:$m,MouseOff:Pm,MousePointer:Im,MousePointer2:Nm,MousePointerBan:km,MousePointerClick:Rm,MousePointerSquareDashed:ze,Move:Qm,Move3D:Ga,Move3d:Ga,MoveDiagonal:Bm,MoveDiagonal2:Zm,MoveDown:qm,MoveDownLeft:zm,MoveDownRight:Fm,MoveHorizontal:Um,MoveLeft:Wm,MoveRight:Km,MoveUp:Ym,MoveUpLeft:Gm,MoveUpRight:jm,MoveVertical:Xm,Music:ex,Music2:Jm,Music3:tx,Music4:ax,Navigation:cx,Navigation2:sx,Navigation2Off:hx,NavigationOff:nx,Network:dx,Newspaper:rx,Nfc:ix,Notebook:Mx,NotebookPen:ox,NotebookTabs:px,NotebookText:lx,NotepadText:gx,NotepadTextDashed:vx,Nut:yx,NutOff:ux,Octagon:xx,OctagonAlert:ja,OctagonMinus:mx,OctagonPause:Ya,OctagonX:Xa,Omega:fx,Option:_x,Orbit:Ax,Origami:wx,Outdent:Ba,Package:Tx,Package2:Cx,PackageCheck:Hx,PackageMinus:Ex,PackageOpen:Vx,PackagePlus:Lx,PackageSearch:bx,PackageX:Sx,PaintBucket:Ox,PaintRoller:Dx,Paintbrush:Px,Paintbrush2:Qa,PaintbrushVertical:Qa,Palette:Nx,Palmtree:xh,PanelBottom:Ix,PanelBottomClose:kx,PanelBottomDashed:Ja,PanelBottomInactive:Ja,PanelBottomOpen:Rx,PanelLeft:he,PanelLeftClose:te,PanelLeftDashed:ae,PanelLeftInactive:ae,PanelLeftOpen:ee,PanelRight:Bx,PanelRightClose:$x,PanelRightDashed:se,PanelRightInactive:se,PanelRightOpen:Zx,PanelTop:qx,PanelTopClose:zx,PanelTopDashed:ne,PanelTopInactive:ne,PanelTopOpen:Fx,PanelsLeftBottom:Ux,PanelsLeftRight:xa,PanelsRightBottom:Wx,PanelsTopBottom:Me,PanelsTopLeft:ce,Paperclip:Kx,Parentheses:Gx,ParkingCircle:ea,ParkingCircleOff:aa,ParkingMeter:jx,ParkingSquare:th,ParkingSquareOff:Je,PartyPopper:Yx,Pause:Xx,PauseCircle:ha,PauseOctagon:Ya,PawPrint:Qx,PcCase:Jx,Pen:re,PenBox:d2,PenLine:de,PenOff:tf,PenSquare:d2,PenTool:af,Pencil:nf,PencilLine:ef,PencilOff:hf,PencilRuler:sf,Pentagon:cf,Percent:df,PercentCircle:sa,PercentDiamond:_a,PercentSquare:ah,PersonStanding:rf,PhilippinePeso:of,Phone:yf,PhoneCall:pf,PhoneForwarded:lf,PhoneIncoming:Mf,PhoneMissed:vf,PhoneOff:gf,PhoneOutgoing:uf,Pi:mf,PiSquare:eh,Piano:xf,Pickaxe:ff,PictureInPicture:Af,PictureInPicture2:_f,PieChart:P0,PiggyBank:wf,Pilcrow:Ef,PilcrowLeft:Cf,PilcrowRight:Hf,PilcrowSquare:hh,Pill:Lf,PillBottle:Vf,Pin:Sf,PinOff:bf,Pipette:Tf,Pizza:Of,Plane:Nf,PlaneLanding:Df,PlaneTakeoff:Pf,Play:kf,PlayCircle:na,PlaySquare:sh,Plug:If,Plug2:Rf,PlugZap:ie,PlugZap2:ie,Plus:$f,PlusCircle:ca,PlusSquare:nh,Pocket:Bf,PocketKnife:Zf,Podcast:zf,Pointer:qf,PointerOff:Ff,Popcorn:Uf,Popsicle:Wf,PoundSterling:Kf,Power:jf,PowerCircle:da,PowerOff:Gf,PowerSquare:ch,Presentation:Yf,Printer:Qf,PrinterCheck:Xf,Projector:Jf,Proportions:t_,Puzzle:a_,Pyramid:e_,QrCode:h_,Quote:s_,Rabbit:n_,Radar:c_,Radiation:d_,Radical:r_,Radio:p_,RadioReceiver:i_,RadioTower:o_,Radius:l_,RailSymbol:M_,Rainbow:v_,Rat:g_,Ratio:u_,Receipt:H_,ReceiptCent:y_,ReceiptEuro:m_,ReceiptIndianRupee:x_,ReceiptJapaneseYen:f_,ReceiptPoundSterling:__,ReceiptRussianRuble:A_,ReceiptSwissFranc:w_,ReceiptText:C_,RectangleEllipsis:oe,RectangleHorizontal:E_,RectangleVertical:V_,Recycle:L_,Redo:T_,Redo2:b_,RedoDot:S_,RefreshCcw:D_,RefreshCcwDot:O_,RefreshCw:N_,RefreshCwOff:P_,Refrigerator:k_,Regex:R_,RemoveFormatting:I_,Repeat:B_,Repeat1:$_,Repeat2:Z_,Replace:F_,ReplaceAll:z_,Reply:U_,ReplyAll:q_,Rewind:W_,Ribbon:K_,Rocket:G_,RockingChair:j_,RollerCoaster:Y_,Rotate3D:pe,Rotate3d:pe,RotateCcw:Q_,RotateCcwSquare:X_,RotateCw:tA,RotateCwSquare:J_,Route:eA,RouteOff:aA,Router:hA,Rows:le,Rows2:le,Rows3:Me,Rows4:sA,Rss:nA,Ruler:cA,RussianRuble:dA,Sailboat:rA,Salad:iA,Sandwich:oA,Satellite:lA,SatelliteDish:pA,Save:gA,SaveAll:MA,SaveOff:vA,Scale:uA,Scale3D:ve,Scale3d:ve,Scaling:yA,Scan:HA,ScanBarcode:mA,ScanEye:xA,ScanFace:fA,ScanLine:_A,ScanQrCode:AA,ScanSearch:wA,ScanText:CA,ScatterChart:N0,School:EA,School2:Ah,Scissors:LA,ScissorsLineDashed:VA,ScissorsSquare:dh,ScissorsSquareDashedBottom:De,ScreenShare:SA,ScreenShareOff:bA,Scroll:OA,ScrollText:TA,Search:RA,SearchCheck:DA,SearchCode:PA,SearchSlash:NA,SearchX:kA,Section:IA,Send:ZA,SendHorizonal:ge,SendHorizontal:ge,SendToBack:$A,SeparatorHorizontal:BA,SeparatorVertical:zA,Server:WA,ServerCog:FA,ServerCrash:qA,ServerOff:UA,Settings:GA,Settings2:KA,Shapes:jA,Share:XA,Share2:YA,Sheet:QA,Shell:JA,Shield:iw,ShieldAlert:tw,ShieldBan:aw,ShieldCheck:ew,ShieldClose:ue,ShieldEllipsis:hw,ShieldHalf:sw,ShieldMinus:nw,ShieldOff:cw,ShieldPlus:dw,ShieldQuestion:rw,ShieldX:ue,Ship:pw,ShipWheel:ow,Shirt:lw,ShoppingBag:Mw,ShoppingBasket:vw,ShoppingCart:gw,Shovel:uw,ShowerHead:yw,Shrink:mw,Shrub:xw,Shuffle:fw,Sidebar:he,SidebarClose:te,SidebarOpen:ee,Sigma:_w,SigmaSquare:rh,Signal:Ew,SignalHigh:Aw,SignalLow:ww,SignalMedium:Cw,SignalZero:Hw,Signature:Vw,Signpost:bw,SignpostBig:Lw,Siren:Sw,SkipBack:Tw,SkipForward:Ow,Skull:Dw,Slack:Pw,Slash:Nw,SlashSquare:ih,Slice:kw,Sliders:ye,SlidersHorizontal:Rw,SlidersVertical:ye,Smartphone:Zw,SmartphoneCharging:Iw,SmartphoneNfc:$w,Smile:zw,SmilePlus:Bw,Snail:Fw,Snowflake:qw,Sofa:Uw,SortAsc:v0,SortDesc:p0,Soup:Ww,Space:Kw,Spade:Gw,Sparkle:jw,Sparkles:me,Speaker:Yw,Speech:Xw,SpellCheck:Jw,SpellCheck2:Qw,Spline:tC,Split:aC,SplitSquareHorizontal:oh,SplitSquareVertical:ph,SprayCan:eC,Sprout:hC,Square:iC,SquareActivity:xe,SquareArrowDown:Ae,SquareArrowDownLeft:fe,SquareArrowDownRight:_e,SquareArrowLeft:we,SquareArrowOutDownLeft:Ce,SquareArrowOutDownRight:He,SquareArrowOutUpLeft:Ee,SquareArrowOutUpRight:Ve,SquareArrowRight:Le,SquareArrowUp:Te,SquareArrowUpLeft:be,SquareArrowUpRight:Se,SquareAsterisk:Oe,SquareBottomDashedScissors:De,SquareChartGantt:F2,SquareCheck:Ne,SquareCheckBig:Pe,SquareChevronDown:ke,SquareChevronLeft:Re,SquareChevronRight:Ie,SquareChevronUp:$e,SquareCode:Ze,SquareDashedBottom:nC,SquareDashedBottomCode:sC,SquareDashedKanban:Be,SquareDashedMousePointer:ze,SquareDivide:Fe,SquareDot:qe,SquareEqual:Ue,SquareFunction:We,SquareGanttChart:F2,SquareKanban:Ke,SquareLibrary:Ge,SquareM:je,SquareMenu:Ye,SquareMinus:Xe,SquareMousePointer:Qe,SquareParking:th,SquareParkingOff:Je,SquarePen:d2,SquarePercent:ah,SquarePi:eh,SquarePilcrow:hh,SquarePlay:sh,SquarePlus:nh,SquarePower:ch,SquareRadical:cC,SquareScissors:dh,SquareSigma:rh,SquareSlash:ih,SquareSplitHorizontal:oh,SquareSplitVertical:ph,SquareSquare:dC,SquareStack:rC,SquareTerminal:lh,SquareUser:vh,SquareUserRound:Mh,SquareX:gh,Squircle:oC,Squirrel:pC,Stamp:lC,Star:gC,StarHalf:MC,StarOff:vC,Stars:me,StepBack:uC,StepForward:yC,Stethoscope:mC,Sticker:xC,StickyNote:fC,StopCircle:ia,Store:_C,StretchHorizontal:AC,StretchVertical:wC,Strikethrough:CC,Subscript:HC,Subtitles:A0,Sun:SC,SunDim:EC,SunMedium:VC,SunMoon:LC,SunSnow:bC,Sunrise:TC,Sunset:OC,Superscript:DC,SwatchBook:PC,SwissFranc:NC,SwitchCamera:kC,Sword:RC,Swords:IC,Syringe:$C,Table:KC,Table2:ZC,TableCellsMerge:BC,TableCellsSplit:zC,TableColumnsSplit:FC,TableOfContents:qC,TableProperties:UC,TableRowsSplit:WC,Tablet:jC,TabletSmartphone:GC,Tablets:YC,Tag:XC,Tags:QC,Tally1:JC,Tally2:tH,Tally3:aH,Tally4:eH,Tally5:hH,Tangent:sH,Target:nH,Telescope:cH,Tent:rH,TentTree:dH,Terminal:iH,TerminalSquare:lh,TestTube:oH,TestTube2:uh,TestTubeDiagonal:uh,TestTubes:pH,Text:uH,TextCursor:MH,TextCursorInput:lH,TextQuote:vH,TextSearch:gH,TextSelect:yh,TextSelection:yh,Theater:yH,Thermometer:fH,ThermometerSnowflake:mH,ThermometerSun:xH,ThumbsDown:_H,ThumbsUp:AH,Ticket:bH,TicketCheck:wH,TicketMinus:CH,TicketPercent:HH,TicketPlus:EH,TicketSlash:VH,TicketX:LH,Tickets:TH,TicketsPlane:SH,Timer:PH,TimerOff:OH,TimerReset:DH,ToggleLeft:NH,ToggleRight:kH,Tornado:RH,Torus:IH,Touchpad:ZH,TouchpadOff:$H,TowerControl:BH,ToyBrick:zH,Tractor:FH,TrafficCone:qH,Train:mh,TrainFront:WH,TrainFrontTunnel:UH,TrainTrack:KH,TramFront:mh,Trash:jH,Trash2:GH,TreeDeciduous:YH,TreePalm:xh,TreePine:XH,Trees:QH,Trello:JH,TrendingDown:tE,TrendingUp:eE,TrendingUpDown:aE,Triangle:sE,TriangleAlert:fh,TriangleRight:hE,Trophy:nE,Truck:cE,Turtle:dE,Tv:iE,Tv2:_h,TvMinimal:_h,TvMinimalPlay:rE,Twitch:oE,Twitter:pE,Type:ME,TypeOutline:lE,Umbrella:gE,UmbrellaOff:vE,Underline:uE,Undo:xE,Undo2:yE,UndoDot:mE,UnfoldHorizontal:fE,UnfoldVertical:_E,Ungroup:AE,University:Ah,Unlink:CE,Unlink2:wE,Unlock:Wa,UnlockKeyhole:Ua,Unplug:HE,Upload:EE,UploadCloud:ua,Usb:VE,User:RE,User2:Lh,UserCheck:LE,UserCheck2:wh,UserCircle:pa,UserCircle2:oa,UserCog:bE,UserCog2:Ch,UserMinus:SE,UserMinus2:Hh,UserPen:TE,UserPlus:OE,UserPlus2:Eh,UserRound:Lh,UserRoundCheck:wh,UserRoundCog:Ch,UserRoundMinus:Hh,UserRoundPen:DE,UserRoundPlus:Eh,UserRoundSearch:PE,UserRoundX:Vh,UserSearch:NE,UserSquare:vh,UserSquare2:Mh,UserX:kE,UserX2:Vh,Users:IE,Users2:bh,UsersRound:bh,Utensils:Th,UtensilsCrossed:Sh,UtilityPole:$E,Variable:ZE,Vault:BE,Vegan:zE,VenetianMask:FE,Verified:y0,Vibrate:UE,VibrateOff:qE,Video:KE,VideoOff:WE,Videotape:GE,View:jE,Voicemail:YE,Volume:aV,Volume1:XE,Volume2:QE,VolumeOff:JE,VolumeX:tV,Vote:eV,Wallet:sV,Wallet2:Oh,WalletCards:hV,WalletMinimal:Oh,Wallpaper:nV,Wand:cV,Wand2:Dh,WandSparkles:Dh,Warehouse:dV,WashingMachine:rV,Watch:iV,Waves:oV,Waypoints:pV,Webcam:lV,Webhook:vV,WebhookOff:MV,Weight:gV,Wheat:yV,WheatOff:uV,WholeWord:mV,Wifi:wV,WifiHigh:xV,WifiLow:fV,WifiOff:_V,WifiZero:AV,Wind:CV,Wine:EV,WineOff:HV,Workflow:VV,Worm:LV,WrapText:bV,Wrench:SV,X:TV,XCircle:la,XOctagon:Xa,XSquare:gh,Youtube:OV,Zap:PV,ZapOff:DV,ZoomIn:NV,ZoomOut:kV},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IV=({icons:h={},nameAttr:a="data-lucide",attrs:e={}}={})=>{if(!Object.values(h).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const s=document.querySelectorAll(`[${a}]`);if(Array.from(s).forEach(n=>c0(n,{nameAttr:a,icons:h,attrs:e})),a==="data-lucide"){const n=document.querySelectorAll("[icon-name]");n.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(n).forEach(c=>c0(c,{nameAttr:"icon-name",icons:h,attrs:e})))}};IV({icons:RV});
