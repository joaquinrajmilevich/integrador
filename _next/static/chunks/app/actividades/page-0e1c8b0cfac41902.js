(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[421],{7947:function(e,t,n){Promise.resolve().then(n.bind(n,1672))},1672:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(9268),A=n(3534),i={src:"/integrador//_next/static/media/senias-0-md.98367d66.jpg",height:845,width:768,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABwMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAKgX/8QAGhABAAIDAQAAAAAAAAAAAAAAAgMRAAEEBf/aAAgBAQABPwCdiDXJ6kAvplNvS3dFnP/EABgRAAIDAAAAAAAAAAAAAAAAAAABAhJS/9oACAECAQE/AKxyj//EABYRAAMAAAAAAAAAAAAAAAAAAAAxQf/aAAgBAwEBPwB0/9k=",blurWidth:7,blurHeight:8},o=n(5512),a={src:"/integrador//_next/static/media/jugando-sm.26cd876d.jpg",height:515,width:498,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAwEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAiCT/xAAeEAACAgAHAAAAAAAAAAAAAAABAwIEABEhIjEyQf/aAAgBAQABPwCDHvtsqsgZpgzYeuRI148OP//EABYRAQEBAAAAAAAAAAAAAAAAAAIAIf/aAAgBAgEBPwBNZf/EABYRAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAgBAwEBPwAyX//Z",blurWidth:8,blurHeight:8};n(707),n(3794),n(6268),n(9259);var c=n(6394),s=n.n(c);n(7745),n(5625);var u=n(6006);function l(e){return"[object Object]"===Object.prototype.toString.call(e)||Array.isArray(e)}function d(e,t){let n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;let A=JSON.stringify(Object.keys(e.breakpoints||{})),i=JSON.stringify(Object.keys(t.breakpoints||{}));return A===i&&n.every(n=>{let r=e[n],A=t[n];return"function"==typeof r?`${r}`==`${A}`:l(r)&&l(A)?d(r,A):r===A})}function f(e){return e.concat().sort((e,t)=>e.name>t.name?1:-1).map(e=>e.options)}function g(e){return"number"==typeof e}function m(e){return"string"==typeof e}function p(e){return"boolean"==typeof e}function h(e){return"[object Object]"===Object.prototype.toString.call(e)}function x(e){return Math.abs(e)}function E(e){return Math.sign(e)}function b(e){return v(e).map(Number)}function w(e){return e[B(e)]}function B(e){return Math.max(0,e.length-1)}function v(e){return Object.keys(e)}function Q(e,t){return void 0!==t.MouseEvent&&e instanceof t.MouseEvent}function j(e,t){let n=x(e-t);function r(n){return n<e||n>t}return{length:n,max:t,min:e,constrain:function(n){return r(n)?n<e?e:t:n},reachedAny:r,reachedMax:function(e){return e>t},reachedMin:function(t){return t<e},removeOffset:function(e){return n?e-n*Math.ceil((e-t)/n):e}}}function C(){let e=[],t={add:function(n,r,A,i={passive:!0}){return n.addEventListener(r,A,i),e.push(()=>n.removeEventListener(r,A,i)),t},clear:function(){e=e.filter(e=>e())}};return t}function y(e){let t=e;function n(e){return g(e)?e:e.get()}return{get:function(){return t},set:function(e){t=n(e)},add:function(e){t+=n(e)},subtract:function(e){t-=n(e)}}}function I(e,t,n){let r="x"===e.scroll?function(e){return`translate3d(${e}px,0px,0px)`}:function(e){return`translate3d(0px,${e}px,0px)`},A=n.style,i=!1;return{clear:function(){i||(A.transform="",n.getAttribute("style")||n.removeAttribute("style"))},to:function(e){i||(A.transform=r(t.apply(e)))},toggleActive:function(e){i=!e}}}let D={align:"center",axis:"x",container:null,slides:null,containScroll:null,direction:"ltr",slidesToScroll:1,breakpoints:{},dragFree:!1,dragThreshold:10,inViewThreshold:0,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function M(e,t,n){let r,A,i,o,a;let c=e.ownerDocument,s=c.defaultView,u=function(e){function t(e,t){return function e(t,n){return[t,n].reduce((t,n)=>(v(n).forEach(r=>{let A=t[r],i=n[r],o=h(A)&&h(i);t[r]=o?e(A,i):i}),t),{})}(e,t||{})}return{mergeOptions:t,optionsAtMedia:function(n){let r=n.breakpoints||{},A=v(r).filter(t=>e.matchMedia(t).matches).map(e=>r[e]).reduce((e,n)=>t(e,n),{});return t(n,A)},optionsMediaQueries:function(t){return t.map(e=>v(e.breakpoints||{})).reduce((e,t)=>e.concat(t),[]).map(e.matchMedia)}}}(s),l=(a=[],{init:function(e,t){return(a=e.filter(({options:e})=>!1!==u.optionsAtMedia(e).active)).forEach(e=>e.init(t,u)),e.reduce((e,t)=>Object.assign(e,{[t.name]:t}),{})},destroy:function(){a=a.filter(e=>e.destroy())}}),d=C(),f=C(),S=function(){let e;let t={},n={init:function(t){e=t},emit:function(r){return(t[r]||[]).forEach(t=>t(e,r)),n},off:function(e,r){return t[e]=(t[e]||[]).filter(e=>e!==r),n},on:function(e,r){return t[e]=(t[e]||[]).concat([r]),n}};return n}(),{animationRealms:P}=M,{mergeOptions:N,optionsAtMedia:k,optionsMediaQueries:F}=u,{on:L,off:O,emit:R}=S,U=!1,H=N(D,M.globalOptions),K=N(H),T=[];function z(t,n){if(U)return;let a=P.find(e=>e.window===s),u=a||function(e){let t=1e3/60,n=[],r=null,A=0,i=0;function o(a){r||(r=a);let c=a-r;for(r=a,A+=c;A>=t;)n.forEach(({animation:e})=>e.update()),A-=t;i&&e.requestAnimationFrame(o)}return{start:function(t){n.includes(t)||n.push(t),i||(i=e.requestAnimationFrame(o))},stop:function(t){(n=n.filter(e=>e!==t)).length||(e.cancelAnimationFrame(i),r=null,A=0,i=0)},reset:function(){r=null,A=0},window:e}}(s);if(a||P.push(u),K=k(H=N(H,t)),T=n||T,!function(){let{container:t,slides:n}=K,r=m(t)?e.querySelector(t):t;i=r||e.children[0];let A=m(n)?i.querySelectorAll(n):n;o=[].slice.call(A||i.children)}(),r=function(e,t,n,r,A,i,o,a){let c,s;let{align:u,axis:l,direction:d,startIndex:f,inViewThreshold:m,loop:h,duration:v,dragFree:D,dragThreshold:M,slidesToScroll:S,skipSnaps:P,containScroll:N}=i,k=t.getBoundingClientRect(),F=n.map(e=>e.getBoundingClientRect()),L=function(e){let t="rtl"===e?-1:1;return{apply:function(e){return e*t}}}(d),O=function(e,t){let n="y"===e?"y":"x";return{scroll:n,cross:"y"===e?"x":"y",startEdge:"y"===n?"top":"rtl"===t?"right":"left",endEdge:"y"===n?"bottom":"rtl"===t?"left":"right",measureSize:function(e){let{width:t,height:r}=e;return"x"===n?t:r}}}(l,d),R=O.measureSize(k),U={measure:function(e){return R*(e/100)}},H=function(e,t){let n={start:function(){return 0},center:function(e){return(t-e)/2},end:function(e){return t-e}};return{measure:function(r){return g(e)?t*Number(e):n[e](r)}}}(u,R),K=!h&&!!N,T=h||!!N,{slideSizes:z,slideSizesWithGaps:Z}=function(e,t,n,r,A,i){let{measureSize:o,startEdge:a,endEdge:c}=e,s=n[0]&&A,u=function(){if(!s)return 0;let e=n[0];return x(t[a]-e[a])}(),l=function(){if(!s)return 0;let e=i.getComputedStyle(w(r));return parseFloat(e.getPropertyValue(`margin-${c}`))}(),d=n.map(o),f=n.map((e,t,n)=>{let r=t===B(n);return t?r?d[t]+l:n[t+1][a]-e[a]:d[t]+u}).map(x);return{slideSizes:d,slideSizesWithGaps:f}}(O,k,F,n,T,A),Y=function(e,t,n){let r=g(n);return{groupSlides:function(A){return r?b(A).filter(e=>e%n==0).map(e=>A.slice(e,e+n)):b(A).reduce((n,r)=>{let A=t.slice(w(n),r+1),i=A.reduce((e,t)=>e+t,0);return!r||i>e?n.concat(r):n},[]).map((e,t,n)=>A.slice(e,n[t+1]))}}}(R,Z,S),{snaps:G,snapsAligned:W}=function(e,t,n,r,A,i,o){let{startEdge:a,endEdge:c}=e,{groupSlides:s}=i,u=s(r).map(e=>w(e)[c]-e[0][a]).map(x).map(t.measure),l=r.map(e=>n[a]-e[a]).map(e=>-x(e)),d=function(){let e=w(l)-w(A);return s(l).map(e=>e[0]).map((t,n,r)=>{let A=n===B(r);return o&&!n?0:o&&A?e:t+u[n]})}();return{snaps:l,snapsAligned:d}}(O,H,k,F,Z,Y,K),V=-w(G)+w(Z),{snapsContained:_}=function(e,t,n,r){let A=j(-t+e,n[0]),i=n.map(A.constrain).map(e=>parseFloat(e.toFixed(3))),o=function(){if(t<=e)return[A.max];if("keepSnaps"===r)return i;let{min:n,max:o}=function(){let e=i[0],t=w(i),n=i.lastIndexOf(e),r=i.indexOf(t)+1;return j(n,r)}();return i.slice(n,o)}();return{snapsContained:o}}(R,V,W,N),J=K?_:W,{limit:X}=function(e,t,n){let r=t[0],A=n?r-e:w(t),i=j(A,r);return{limit:i}}(V,J,h),q=function e(t,n,r){let{constrain:A}=j(0,t),i=t+1,o=a(n);function a(e){return r?x((i+e)%i):A(e)}function c(){return e(t,o,r)}let s={get:function(){return o},set:function(e){return o=a(e),s},add:function(e){return c().set(o+e)},clone:c};return s}(B(J),f,h),$=q.clone(),ee=b(n),et=({dragHandler:e,scrollBody:t,scrollBounds:n,scrollLooper:r,eventHandler:A,animation:i,slideLooper:o,translate:a,options:{loop:c}})=>{let s=e.pointerDown();c||n.constrain(s);let u=t.seek().settled();u&&!s&&(i.stop(),A.emit("settle")),u||A.emit("scroll"),c&&(r.loop(t.direction()),o.loop()),a.to(eA.get())},en={start:()=>a.start(eu),stop:()=>a.stop(eu),update:()=>et(eu)},er=J[q.get()],eA=y(er),ei=y(er),eo=function(e,t,n,r){let A=!0,i=0,o=0,a=n,c=r;function s(e){return a=e,l}function u(e){return c=e,l}let l={direction:function(){return o},duration:function(){return a},seek:function(){let n=t.get()-e.get(),r=!a;return r?(i=0,e.set(t)):(i+=n/a,i*=c,e.add(i)),A=.001>x(n),l},settled:function(){return A},useBaseFriction:function(){return u(r)},useBaseDuration:function(){return s(n)},useDirection:function(e){return o=E(e),l},useFriction:u,useDuration:s};return l}(eA,ei,v,.68),ea=function(e,t,n,r,A){let{reachedAny:i,removeOffset:o,constrain:a}=r;function c(e){return e.concat().sort((e,t)=>x(e)-x(t))[0]}function s(t,r){let A=[t,t+n,t-n];if(!e)return A[0];if(!r)return c(A);let i=A.filter(e=>E(e)===r);return c(i)}return{byDistance:function(n,r){let c=A.get()+n,{index:u,distance:l}=function(n){let r=e?o(n):a(n),A=t.map(e=>e-r).map(e=>s(e,0)).map((e,t)=>({diff:e,index:t})).sort((e,t)=>x(e.diff)-x(t.diff)),{index:i}=A[0];return{index:i,distance:r}}(c),d=!e&&i(c);if(!r||d)return{index:u,distance:n};let f=t[u]-l,g=n+s(f,0);return{index:u,distance:g}},byIndex:function(e,n){let r=t[e]-A.get(),i=s(r,n);return{index:e,distance:i}},shortcut:s}}(h,J,V,X,ei),ec=function(e,t,n,r,A,i,o){function a(r){let a=r.distance,c=r.index!==t.get();A.useDirection(a),i.add(a),a&&e.start(),c&&(n.set(t.get()),t.set(r.index),o.emit("select"))}return{distance:function(e,t){let n=r.byDistance(e,t);a(n)},index:function(e,n){let A=t.clone().set(e),i=r.byIndex(A.get(),n);a(i)}}}(en,q,$,ea,eo,ei,o),es=function(e,t,n,r,A,i,o){let{removeOffset:a,constrain:c}=A,s=i?[0,t,-t]:[0],u=l(s,o);function l(t,A){let i=t||s,o=function(e){let t=e||0;return n.map(e=>{let n=j(.5,e-.5);return n.constrain(e*t)})}(A);return i.reduce((t,A)=>{let i=r.map((t,r)=>({start:t-n[r]+o[r]+A,end:t+e-o[r]+A,index:r}));return t.concat(i)},[])}return{check:function(e,t){let n=i?a(e):c(e);return(t||u).reduce((e,t)=>{let{index:r,start:A,end:i}=t,o=e.includes(r);return!o&&A<n&&i>n?e.concat([r]):e},[])},findSlideBounds:l}}(R,V,z,G,X,h,m),eu={ownerDocument:r,ownerWindow:A,eventHandler:o,containerRect:k,slideRects:F,animation:en,axis:O,direction:L,dragHandler:function(e,t,n,r,A,i,o,a,c,s,u,l,d,f,g,m,h,b,w){let{cross:B}=e,v=["INPUT","SELECT","TEXTAREA"],y={passive:!1},I=C(),D=C(),M=j(50,225).constrain(g.measure(20)),S={mouse:300,touch:400},P={mouse:500,touch:600},N=m?43:25,k=!1,F=0,L=0,O=!1,R=!1,U=!1,H=!1;function K(e){let n=o.readPoint(e),r=o.readPoint(e,B),A=x(n-F),a=x(r-L);if(!R&&!H&&(!e.cancelable||!(R=A>a)))return T(e);let s=o.pointerMove(e),l=t.apply(s);A>h&&(U=!0),u.useFriction(.3).useDuration(1),l&&u.useDirection(l),c.start(),i.add(l),e.preventDefault()}function T(e){let n=l.byDistance(0,!1),r=n.index!==d.get(),A=o.pointerUp(e)*function(){let e=m?P:S,t=H?"mouse":"touch";return e[t]}(),i=function(e,t){let n=d.add(-1*E(e)),r=l.byDistance(e,!m).distance;return m||x(e)<M?r:b&&t?.5*r:l.byIndex(n.get(),0).distance}(t.apply(A),r),a=function(e,t){var n,r;if(0===e||0===t||x(e)<=x(t))return 0;let A=(n=x(e),r=x(t),x(n-r));return x(A/e)}(A,i);R=!1,O=!1,D.clear(),u.useDuration(N-10*a).useFriction(.68+a/50),s.distance(i,!m),H=!1,f.emit("pointerUp")}function z(e){U&&(e.stopPropagation(),e.preventDefault())}return{init:function(e,t){t&&I.add(n,"dragstart",e=>e.preventDefault(),y).add(n,"touchmove",()=>void 0,y).add(n,"touchend",()=>void 0).add(n,"touchstart",c).add(n,"mousedown",c).add(n,"touchcancel",T).add(n,"contextmenu",T).add(n,"click",z,!0);function c(c){(p(t)||t(e,c))&&function(e){let t=Q(e,A);H=t,(!t||0===e.button)&&!function(e){let t=e.nodeName||"";return v.includes(t)}(e.target)&&(U=m&&t&&!e.buttons&&k,k=x(i.get()-a.get())>=2,O=!0,o.pointerDown(e),u.useFriction(0).useDuration(0),i.set(a),function(){let e=H?r:n;D.add(e,"touchmove",K,y).add(e,"touchend",T).add(e,"mousemove",K,y).add(e,"mouseup",T)}(),F=o.readPoint(e),L=o.readPoint(e,B),f.emit("pointerDown"))}(c)}},pointerDown:function(){return O},destroy:function(){I.clear(),D.clear()}}}(O,L,e,r,A,ei,function(e,t){let n,r;function A(e){return e.timeStamp}function i(n,r){let A=r||e.scroll,i=`client${"x"===A?"X":"Y"}`;return(Q(n,t)?n:n.touches[0])[i]}return{pointerDown:function(e){return n=e,r=e,i(e)},pointerMove:function(e){let t=i(e)-i(r),o=A(e)-A(n)>170;return r=e,o&&(n=e),t},pointerUp:function(e){if(!n||!r)return 0;let t=i(r)-i(n),o=A(e)-A(n),a=A(e)-A(r)>170,c=t/o,s=o&&!a&&x(c)>.1;return s?c:0},readPoint:i}}(O,A),eA,en,ec,eo,ea,q,o,U,D,M,P,0),eventStore:C(),percentOfView:U,index:q,indexPrevious:$,limit:X,location:eA,options:i,resizeHandler:function(e,t,n,r,A){let i,o;let a=[],c=!1;function s(e){return A.measureSize(e.getBoundingClientRect())}return{init:function(A,u){if(!u)return;o=s(e),a=r.map(s),i=new ResizeObserver(i=>{!c&&(p(u)||u(A,i))&&function(i){for(let c of i){let i=c.target===e,u=r.indexOf(c.target),l=i?o:a[u],d=s(i?e:r[u]);if(l!==d){n.requestAnimationFrame(()=>{A.reInit(),t.emit("resize")});break}}}(i)});let l=[e].concat(r);l.forEach(e=>i.observe(e))},destroy:function(){i&&i.disconnect(),c=!0}}}(t,o,A,n,O),scrollBody:eo,scrollBounds:function(e,t,n,r,A){let i=A.measure(10),o=A.measure(50),a=j(.1,.99),c=!1;return{constrain:function(A){if(!(!c&&e.reachedAny(n.get())&&e.reachedAny(t.get())))return;let s=e.reachedMin(t.get())?"min":"max",u=x(e[s]-t.get()),l=n.get()-t.get(),d=a.constrain(u/o);n.subtract(l*d),!A&&x(l)<i&&(n.set(e.constrain(n.get())),r.useDuration(25).useBaseFriction())},toggleActive:function(e){c=!e}}}(X,eA,ei,eo,U),scrollLooper:function(e,t,n,r){let A=t.min+.1,i=t.max+.1,{reachedMin:o,reachedMax:a}=j(A,i);return{loop:function(t){if(!(1===t?a(n.get()):-1===t&&o(n.get())))return;let A=e*(-1*t);r.forEach(e=>e.add(A))}}}(V,X,eA,[eA,ei]),scrollProgress:function(e){let{max:t,length:n}=e;return{get:function(e){return-((e-t)/n)}}}(X),scrollSnaps:J,scrollTarget:ea,scrollTo:ec,slideLooper:function(e,t,n,r,A,i,o,a,c){let s=b(A),u=b(A).reverse(),l=(function(){let e=i[0]-1,t=f(u,e);return g(t,"end")})().concat(function(){let e=n-i[0]-1,t=f(s,e);return g(t,"start")}());function d(e,t){return e.reduce((e,t)=>e-A[t],t)}function f(e,t){return e.reduce((e,n)=>{let r=d(e,t);return r>0?e.concat([n]):e},[])}function g(n,A){let i="start"===A,s=o.findSlideBounds([i?-r:r]);return n.map(n=>{let A=i?0:-r,o=i?r:0,u=s.filter(e=>e.index===n)[0][i?"end":"start"];return{index:n,slideLocation:y(-1),translate:I(e,t,c[n]),target:()=>a.get()>u?A:o}})}return{canLoop:function(){return l.every(({index:e})=>{let t=s.filter(t=>t!==e);return .1>=d(t,n)})},clear:function(){l.forEach(e=>e.translate.clear())},loop:function(){l.forEach(e=>{let{target:t,translate:n,slideLocation:r}=e,A=t();A!==r.get()&&(n.to(A),r.set(A))})},loopPoints:l}}(O,L,R,V,Z,J,es,eA,n),slidesHandler:(s=!1,{init:function(e,n){n&&(c=new MutationObserver(t=>{!s&&(p(n)||n(e,t))&&function(t){for(let n of t)if("childList"===n.type){e.reInit(),o.emit("slidesChanged");break}}(t)})).observe(t,{childList:!0})},destroy:function(){c&&c.disconnect(),s=!0}}),slidesInView:es,slideIndexes:ee,slidesToScroll:Y,target:ei,translate:I(O,L,t)};return eu}(e,i,o,c,s,K,S,u),F([H,...T.map(({options:e})=>e)]).forEach(e=>d.add(e,"change",Z)),K.active){if(r.translate.to(r.location.get()),r.eventHandler.init(_),r.resizeHandler.init(_,K.watchResize),r.slidesHandler.init(_,K.watchSlides),f.add(c,"visibilitychange",()=>{c.hidden&&u.reset()}),K.loop){if(!r.slideLooper.canLoop()){Y(),z({loop:!1},n),H=N(H,{loop:!0});return}r.slideLooper.loop()}i.offsetParent&&o.length&&r.dragHandler.init(_,K.watchDrag),A=l.init(T,_)}}function Z(e,t){let n=V();Y(),z(N({startIndex:n},e),t),S.emit("reInit")}function Y(){r.dragHandler.destroy(),r.animation.stop(),r.eventStore.clear(),r.translate.clear(),r.slideLooper.clear(),r.resizeHandler.destroy(),r.slidesHandler.destroy(),l.destroy(),d.clear(),f.clear()}function G(e){let t=r[e?"target":"location"].get(),n=K.loop?"removeOffset":"constrain";return r.slidesInView.check(r.limit[n](t))}function W(e,t,n){K.active&&!U&&(r.scrollBody.useBaseFriction().useDuration(t?0:K.duration),r.scrollTo.index(e,n||0))}function V(){return r.index.get()}let _={canScrollNext:function(){let e=r.index.add(1).get();return e!==V()},canScrollPrev:function(){let e=r.index.add(-1).get();return e!==V()},containerNode:function(){return i},internalEngine:function(){return r},destroy:function(){U||(U=!0,d.clear(),Y(),S.emit("destroy"))},off:O,on:L,emit:R,plugins:function(){return A},previousScrollSnap:function(){return r.indexPrevious.get()},reInit:Z,rootNode:function(){return e},scrollNext:function(e){let t=r.index.add(1).get();W(t,!0===e,-1)},scrollPrev:function(e){let t=r.index.add(-1).get();W(t,!0===e,1)},scrollProgress:function(){return r.scrollProgress.get(r.location.get())},scrollSnapList:function(){return r.scrollSnaps.map(r.scrollProgress.get)},scrollTo:W,selectedScrollSnap:V,slideNodes:function(){return o},slidesInView:G,slidesNotInView:function(e){let t=G(e);return r.slideIndexes.filter(e=>!t.includes(e))}};return z(t,n),setTimeout(()=>S.emit("init"),0),_}function S(e={},t=[]){let n=(0,u.useRef)(e),r=(0,u.useRef)(t),[A,i]=(0,u.useState)(),[o,a]=(0,u.useState)(),c=(0,u.useCallback)(()=>{A&&A.reInit(n.current,r.current)},[A]);return(0,u.useEffect)(()=>{if("undefined"!=typeof window&&window.document&&window.document.createElement&&o){M.globalOptions=S.globalOptions;let e=M(o,n.current,r.current);return i(e),()=>e.destroy()}i(void 0)},[o,i]),(0,u.useEffect)(()=>{d(n.current,e)||(n.current=e,c())},[e,c]),(0,u.useEffect)(()=>{!function(e,t){if(e.length!==t.length)return!1;let n=f(e),r=f(t);return n.every((e,t)=>{let n=r[t];return d(e,n)})}(r.current,t)&&(r.current=t,c())},[t,c]),[a,A]}function P(){let[e,t]=S({loop:!0,dragFree:!0}),[n,A]=(0,u.useState)(0),i=(0,u.useCallback)(e=>{let t=Math.max(0,Math.min(1,e.scrollProgress()));A(100*t)},[]);return(0,u.useEffect)(()=>{t&&(i(t),t.on("reInit",i),t.on("scroll",i))},[t,i]),(0,r.jsxs)("div",{className:"embla",children:[(0,r.jsx)("div",{className:"embla__viewport",ref:e,children:(0,r.jsx)("div",{className:"embla__container",children:["/aprendiendo-sm.jpg","/jugando-1-md.jpg","/jugando-sm.jpg","/recreacion-0-md.jpg","/senias-0-md.jpg","/senias-1-md.jpg","/senias-2-md.jpg"].map((e,t)=>(0,r.jsx)("div",{className:"embla__slide",children:(0,r.jsx)(s(),{src:e,alt:"Image-".concat(t),width:400,height:300,priority:!0},t)},t))})}),(0,r.jsx)("div",{className:"embla__progress",children:(0,r.jsx)("div",{className:"embla__progress__bar",style:{transform:"translate3d(".concat(n,"%,0px,0px)")}})})]})}function N(){return(0,r.jsxs)("main",{className:"bg-white pb-4",children:[(0,r.jsx)("section",{className:"relative h-[400px] mb-3 ",children:(0,r.jsx)(A.Z,{srcImg:o.Z})}),(0,r.jsxs)("section",{className:"text-black mx-auto xl:max-w-7xl lg:max-w-4xl md:max-w-3xl sm:max-w-lg",children:[(0,r.jsxs)("div",{className:"flex flex-wrap mb-4 -mx-4",children:[(0,r.jsx)(s(),{className:"w-full lg:w-1/3 rounded-lg px-4 hidden lg:block object-cover h-56",src:i,alt:"sadas"}),(0,r.jsx)("div",{className:"w-full lg:w-2/3 px-4",children:(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("h1",{className:"font-semibold text-3xl mb-1",children:"Actividad"}),(0,r.jsx)("h1",{className:"font-semibold text-3xl",children:(0,r.jsx)("span",{className:"text-white bg-blue-500 pt-1",children:"pedag\xf3gica"})}),(0,r.jsx)("p",{children:"Creemos que la educaci\xf3n es el medio para que cada persona alcance su m\xe1ximo potencial. Por eso en GC trabajamos para ayudar a que cada ni\xf1o, ni\xf1a y adolescente pueda adquirir herramientas para lograr la alfabetizaci\xf3n y comprensi\xf3n lectora en el \xe1rea de lengua y el razonamiento a trav\xe9s de las matem\xe1ticas. Buscamos lograr estos objetivos a trav\xe9s de materiales did\xe1cticos dise\xf1ados pedag\xf3gicamente con est\xe1ndares de calidad. Adem\xe1s aprenden lenguaje de se\xf1as Argentina como un nuevo idioma, buscando la estimulaci\xf3n de la creatividad, la expresi\xf3n y la inclusi\xf3n."})]})})]}),(0,r.jsx)(P,{}),(0,r.jsxs)("div",{className:"flex flex-wrap mt-4 mb-4 -mx-4",children:[(0,r.jsx)(s(),{className:"w-full lg:w-1/3 rounded-lg px-4 hidden lg:block object-cover h-56",src:a,alt:"sadas"}),(0,r.jsx)("div",{className:"w-full lg:w-2/3 px-4",children:(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("h1",{className:"font-semibold text-3xl mb-1",children:"Deporte y"}),(0,r.jsx)("h1",{className:"font-semibold text-3xl",children:(0,r.jsx)("span",{className:"text-white bg-blue-500 pt-1",children:"Recreaci\xf3n"})}),(0,r.jsx)("p",{children:"El deporte es una de las mejores escuelas de vida y tienen el poder de transformar conductas negativas en positivas. Es el medio por el cual podemos estimular, ense\xf1ar y entrenar valores tales como la lealtad y la cooperaci\xf3n, logrando objetivos en equipo y a la vez desarrollando la creatividad, la organizaci\xf3n, la responsabilidad y la sana competencia. Por eso en GC cada d\xeda practicamos 40 minutos al deporte y la recreaci\xf3n."})]})})]})]})]})}M.animationRealms=[],M.globalOptions=void 0,S.globalOptions=void 0,n(5482)},5625:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(9268),A=n(6394),i=n.n(A),o={src:"/integrador//_next/static/media/wireframe-07.163b7303.svg",height:231,width:243,blurWidth:0,blurHeight:0},a={src:"/integrador//_next/static/media/wireframe-06.65106c83.svg",height:231,width:243,blurWidth:0,blurHeight:0},c={src:"/integrador//_next/static/media/wireframe-08.ee1807a9.svg",height:231,width:243,blurWidth:0,blurHeight:0};function s(e){let{width:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(i(),{src:o,className:"w-[".concat(t,"]")}),(0,r.jsx)("h4",{children:"Crecimiento"})]}),(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)(i(),{src:a,className:"w-[".concat(t,"]")}),(0,r.jsx)("h4",{children:"Conocimiento"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(i(),{src:c,className:"w-[".concat(t,"]")}),(0,r.jsx)("h4",{children:"Compa\xf1erismo"})]})]})}n(6268)},6268:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(9268),A=n(4646);function i(e){let{children:t}=e;return(0,r.jsx)(A.E.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.4,ease:[0,.71,.2,1.01]},children:t})}},3534:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(9268),A=n(6394),i=n.n(A);function o(e){let{children:t="",srcImg:n}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)(i(),{src:n,fill:!0,sizes:"(min-width: 808px) 50vw, 100vw",style:{objectFit:"cover"}}),t]})}},9259:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(9268),A=n(4646);function i(e){let{children:t,x:n}=e;return(0,r.jsx)(A.E.div,{initial:{opacity:0,x:n},animate:{opacity:1,x:0},transition:{duration:.5,ease:[0,.1,.7,1.01]},children:t})}},5482:function(){},5512:function(e,t){"use strict";t.Z={src:"/integrador//_next/static/media/actividades-sm.71770227.jpg",height:306,width:830,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAiBl//8QAGxAAAQUBAQAAAAAAAAAAAAAAAwECBBEhACL/2gAIAQEAAT8AMYro8WyO9DCq7l73/8QAGREAAQUAAAAAAAAAAAAAAAAAAAEDMoGx/9oACAECAQE/AHZWun//xAAZEQABBQAAAAAAAAAAAAAAAAABAAIhcrH/2gAIAQMBAT8AAEVbi//Z",blurWidth:8,blurHeight:3}},7745:function(e,t){"use strict";t.Z={src:"/integrador//_next/static/media/gc.890707a6.png",height:653,width:812,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAsklEQVR42mMAAZspvxlBdNK8fyxgge7/feK9/yvBbO2Jf7hB9Oqj91jNN8szgdj7Ll6Onn1kqxlYgcGkP0mO074Lg9hvnvzjPX7jaPmua3NuZq45/5uh8/8OsCL3aX8Sj147ZXXuzsHiZWdnv1t2KTE0YN7L/Wr9/88zMKT/V9ty8kHspL3H/y85M3nNlBO1DQwooO6/766rK9zb9myaxcDwXxLsxr1b2ZdeYWBkqP/PCACztE9ORzDAcwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6}},707:function(e,t){"use strict";t.Z={src:"/integrador//_next/static/media/home-lg.3e40be08.jpg",height:488,width:1024,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAJoL/8QAHBAAAQQDAQAAAAAAAAAAAAAAAgEDBBIAERNB/9oACAEBAAE/AJbxxgiMhpQIWLIXvQqLn//EABkRAAEFAAAAAAAAAAAAAAAAAAABAjKBsf/aAAgBAgEBPwBYsvT/xAAZEQABBQAAAAAAAAAAAAAAAAAAAQIygbH/2gAIAQMBAT8AWb6w/9k=",blurWidth:8,blurHeight:4}},3794:function(e,t){"use strict";t.Z={src:"/integrador//_next/static/media/levantando-manos-sm.6a9a8479.jpg",height:560,width:475,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABwMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAqAp//8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIDBAAREiH/2gAIAQEAAT8AgtdWLkjmIVoVVEZW30WPpOf/xAAWEQEBAQAAAAAAAAAAAAAAAAABACH/2gAIAQIBAT8AHC//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:7,blurHeight:8}}},function(e){e.O(0,[656,646,253,769,744],function(){return e(e.s=7947)}),_N_E=e.O()}]);