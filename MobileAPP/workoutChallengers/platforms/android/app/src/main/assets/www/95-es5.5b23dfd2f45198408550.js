function _defineProperty(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{QtHV:function(t,e,o){"use strict";o.r(e),o.d(e,"iosTransitionAnimation",(function(){return d})),o.d(e,"shadow",(function(){return c})),o("54nT"),o("AfW+"),o("aiEM");var a=o("iAHb"),n=(o("kBU6"),o("Uch9")),r=function(t){return document.querySelector("".concat(t,".ion-cloned-element"))},c=function(t){return t.shadowRoot||t},l=function(t){return t.querySelector("ion-header:not(.header-collapse-condense-inactive) ion-title[size=large]")},s=function(t,e){var o=t.querySelectorAll("ion-buttons"),a=!0,n=!1,r=void 0;try{for(var c,l=o[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var s=c.value,i=s.closest("ion-header"),f=i&&!i.classList.contains("header-collapse-condense-inactive"),d=s.querySelector("ion-back-button"),m=s.classList.contains("buttons-collapse"),p="start"===s.slot||""===s.slot;if(null!==d&&p&&(m&&f&&e||!m))return d}}catch(y){n=!0,r=y}finally{try{a||null==l.return||l.return()}finally{if(n)throw r}}return null},i=function(t,e,o,n,l,s){var i=e?"calc(100% - ".concat(s.right+4,"px)"):"".concat(s.left-4,"px"),f=e?"7px":"-7px",d=e?"-4px":"4px",m=e?"-4px":"4px",p=e?"right":"left",y=e?"left":"right",u=o?[{offset:0,opacity:1,transform:"translate3d(".concat(d,", ").concat(s.top-46,"px, 0) scale(1)")},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d(".concat(f,", ").concat(l.top-40,"px, 0) scale(2.1)")}]:[{offset:0,opacity:0,transform:"translate3d(".concat(f,", ").concat(l.top-40,"px, 0) scale(2.1)")},{offset:1,opacity:1,transform:"translate3d(".concat(d,", ").concat(s.top-46,"px, 0) scale(1)")}],b=o?[{offset:0,opacity:1,transform:"translate3d(".concat(m,", ").concat(s.top-46,"px, 0) scale(1)")},{offset:.2,opacity:0,transform:"translate3d(".concat(m,", ").concat(s.top-41,"px, 0) scale(0.6)")},{offset:1,opacity:0,transform:"translate3d(".concat(m,", ").concat(s.top-41,"px, 0) scale(0.6)")}]:[{offset:0,opacity:0,transform:"translate3d(".concat(m,", ").concat(s.top-41,"px, 0) scale(0.6)")},{offset:1,opacity:1,transform:"translate3d(".concat(m,", ").concat(s.top-46,"px, 0) scale(1)")}],S=Object(a.a)(),v=Object(a.a)(),T=r("ion-back-button"),x=c(T).querySelector(".button-text"),g=c(T).querySelector("ion-icon");T.text=n.text,T.mode=n.mode,T.icon=n.icon,T.color=n.color,T.disabled=n.disabled,T.style.setProperty("display","block"),T.style.setProperty("position","fixed"),v.addElement(g),S.addElement(x),S.beforeStyles({"transform-origin":"".concat(p," center")}).beforeAddWrite((function(){n.style.setProperty("display","none"),T.style.setProperty(p,i)})).afterAddWrite((function(){n.style.setProperty("display",""),T.style.setProperty("display","none"),T.style.removeProperty(p)})).keyframes(u),v.beforeStyles({"transform-origin":"".concat(y," center")}).keyframes(b),t.addAnimation([S,v])},f=function(t,e,o,n,c,l){var s=e?"calc(100% - ".concat(n.right,"px)"):"".concat(n.left,"px"),i=e?"-18px":"18px",f=e?"right":"left",d=o?[{offset:0,opacity:0,transform:"translate3d(".concat(i,", ").concat(l.top-4,"px, 0) scale(0.49)")},{offset:.1,opacity:0},{offset:1,opacity:1,transform:"translate3d(0, ".concat(c.top-2,"px, 0) scale(1)")}]:[{offset:0,opacity:.99,transform:"translate3d(0, ".concat(c.top-2,"px, 0) scale(1)")},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d(".concat(i,", ").concat(l.top-4,"px, 0) scale(0.5)")}],m=r("ion-title"),p=Object(a.a)();m.innerText=n.innerText,m.size=n.size,m.color=n.color,p.addElement(m),p.beforeStyles(_defineProperty({"transform-origin":"".concat(f," center"),height:"46px",display:"",position:"relative"},f,s)).beforeAddWrite((function(){n.style.setProperty("display","none")})).afterAddWrite((function(){n.style.setProperty("display",""),m.style.setProperty("display","none")})).keyframes(d),t.addAnimation(p)},d=function(t,e){try{var o="opacity",r="rtl"===t.ownerDocument.dir,d=r?"-99.5%":"99.5%",m=r?"33%":"-33%",p=e.enteringEl,y=e.leavingEl,u="back"===e.direction,b=p.querySelector(":scope > ion-content"),S=p.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),v=p.querySelectorAll(":scope > ion-header > ion-toolbar"),T=Object(a.a)(),x=Object(a.a)();if(T.addElement(p).duration(e.duration||540).easing(e.easing||"cubic-bezier(0.32,0.72,0,1)").fill("both").beforeRemoveClass("ion-page-invisible"),y&&t){var g=Object(a.a)();g.addElement(t),T.addAnimation(g)}if(b||0!==v.length||0!==S.length?(x.addElement(b),x.addElement(S)):x.addElement(p.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),T.addAnimation(x),u?x.beforeClearStyles([o]).fromTo("transform","translateX(".concat(m,")"),"translateX(".concat("0%",")")).fromTo(o,.8,1):x.beforeClearStyles([o]).fromTo("transform","translateX(".concat(d,")"),"translateX(".concat("0%",")")),b){var X=c(b).querySelector(".transition-effect");if(X){var h=X.querySelector(".transition-cover"),E=X.querySelector(".transition-shadow"),A=Object(a.a)(),q=Object(a.a)(),j=Object(a.a)();A.addElement(X).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),q.addElement(h).beforeClearStyles([o]).fromTo(o,0,.1),j.addElement(E).beforeClearStyles([o]).fromTo(o,.03,.7),A.addAnimation([q,j]),x.addAnimation([A])}}var O=p.querySelector("ion-header.header-collapse-condense"),C=function(t,e,o,a,n){var r=s(a,o),c=l(n),d=l(a),m=s(n,o),p=null!==r&&null!==c&&!o,y=null!==d&&null!==m&&o;if(p){var u=c.getBoundingClientRect(),b=r.getBoundingClientRect();f(t,e,o,c,u,b),i(t,e,o,r,u,b)}else if(y){var S=d.getBoundingClientRect(),v=m.getBoundingClientRect();f(t,e,o,d,S,v),i(t,e,o,m,S,v)}return{forward:p,backward:y}}(T,r,u,p,y),k=C.forward,w=C.backward;if(v.forEach((function(t){var e,n=Object(a.a)();n.addElement(t),T.addAnimation(n);var l=Object(a.a)();l.addElement(t.querySelector("ion-title"));var s,i=Object(a.a)(),f=Array.from(t.querySelectorAll("ion-buttons,[menuToggle]")),p=t.closest("ion-header"),y=p&&p.classList.contains("header-collapse-condense-inactive");s=f.filter(u?function(t){var e=t.classList.contains("buttons-collapse");return e&&!y||!e}:function(t){return!t.classList.contains("buttons-collapse")}),i.addElement(s);var b=Object(a.a)();b.addElement(t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));var S=Object(a.a)();S.addElement(c(t).querySelector(".toolbar-background"));var v=Object(a.a)(),x=t.querySelector("ion-back-button");if(x&&v.addElement(x),n.addAnimation([l,i,b,S,v]),i.fromTo(o,.01,1),b.fromTo(o,.01,1),u)y||l.fromTo("transform","translateX(".concat(m,")"),"translateX(".concat("0%",")")).fromTo(o,.01,1),b.fromTo("transform","translateX(".concat(m,")"),"translateX(".concat("0%",")")),v.fromTo(o,.01,1);else if(O||l.fromTo("transform","translateX(".concat(d,")"),"translateX(".concat("0%",")")).fromTo(o,.01,1),b.fromTo("transform","translateX(".concat(d,")"),"translateX(".concat("0%",")")),S.beforeClearStyles([o,"transform"]),(null===(e=p)||void 0===e?void 0:e.translucent)?S.fromTo("transform",r?"translateX(-100%)":"translateX(100%)","translateX(0px)"):S.fromTo(o,.01,1),k||v.fromTo(o,.01,1),x&&!k){var g=Object(a.a)();g.addElement(c(x).querySelector(".button-text")).fromTo("transform",r?"translateX(-100px)":"translateX(100px)","translateX(0px)"),n.addAnimation(g)}})),y){var P=Object(a.a)(),L=y.querySelector(":scope > ion-content");if(P.addElement(L),P.addElement(y.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")),T.addAnimation(P),u){P.beforeClearStyles([o]).fromTo("transform","translateX(".concat("0%",")"),r?"translateX(-100%)":"translateX(100%)");var R=Object(n.b)(y);T.afterAddWrite((function(){"normal"===T.getDirection()&&R.style.setProperty("display","none")}))}else P.fromTo("transform","translateX(".concat("0%",")"),"translateX(".concat(m,")")).fromTo(o,1,.8);if(L){var W=c(L).querySelector(".transition-effect");if(W){var B=W.querySelector(".transition-cover"),z=W.querySelector(".transition-shadow"),D=Object(a.a)(),H=Object(a.a)(),J=Object(a.a)();D.addElement(W).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),H.addElement(B).beforeClearStyles([o]).fromTo(o,.1,0),J.addElement(z).beforeClearStyles([o]).fromTo(o,.7,.03),D.addAnimation([H,J]),P.addAnimation([D])}}y.querySelectorAll(":scope > ion-header > ion-toolbar").forEach((function(t){var e,n=Object(a.a)();n.addElement(t);var l=Object(a.a)();l.addElement(t.querySelector("ion-title"));var s=Object(a.a)(),i=t.querySelectorAll("ion-buttons,[menuToggle]"),f=t.closest("ion-header"),d=f&&f.classList.contains("header-collapse-condense-inactive"),p=Array.from(i).filter((function(t){var e=t.classList.contains("buttons-collapse");return e&&!d||!e}));s.addElement(p);var y=Object(a.a)(),b=t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");b.length>0&&y.addElement(b);var S=Object(a.a)();S.addElement(c(t).querySelector(".toolbar-background"));var v=Object(a.a)(),x=t.querySelector("ion-back-button");if(x&&v.addElement(x),n.addAnimation([l,s,y,v,S]),T.addAnimation(n),v.fromTo(o,.99,0),s.fromTo(o,.99,0),y.fromTo(o,.99,0),u){if(d||l.fromTo("transform","translateX(".concat("0%",")"),r?"translateX(-100%)":"translateX(100%)").fromTo(o,.99,0),y.fromTo("transform","translateX(".concat("0%",")"),r?"translateX(-100%)":"translateX(100%)"),S.beforeClearStyles([o,"transform"]),(null===(e=f)||void 0===e?void 0:e.translucent)?S.fromTo("transform","translateX(0px)",r?"translateX(-100%)":"translateX(100%)"):S.fromTo(o,.99,0),x&&!w){var g=Object(a.a)();g.addElement(c(x).querySelector(".button-text")).fromTo("transform","translateX(".concat("0%",")"),"translateX(".concat((r?-124:124)+"px",")")),n.addAnimation(g)}}else d||l.fromTo("transform","translateX(".concat("0%",")"),"translateX(".concat(m,")")).fromTo(o,.99,0).afterClearStyles(["transform",o]),y.fromTo("transform","translateX(".concat("0%",")"),"translateX(".concat(m,")")).afterClearStyles(["transform",o]),v.afterClearStyles([o]),l.afterClearStyles([o]),s.afterClearStyles([o])}))}return T}catch(U){throw U}}}}]);