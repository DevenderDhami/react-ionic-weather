System.register(["./index-legacy-3e94e88e.js"],(function(t,e){"use strict";var n,i;return{setters:[function(t){n=t.n,i=t.p}],execute:function(){t("startTapClick",(function(t){var f,d,v,l=10*-u,p=0,m=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),L=new WeakMap,h=function(t){l=n(t),g(t)},w=function(){v&&clearTimeout(v),v=void 0,f&&(R(!1),f=void 0)},E=function(t){f||T(e(t),t)},g=function(t){T(void 0,t)},T=function(t,e){if(!t||t!==f){v&&clearTimeout(v),v=void 0;var n=i(e),a=n.x,s=n.y;if(f){if(L.has(f))throw new Error("internal error");f.classList.contains(r)||y(f,a,s),R(!0)}if(t){var u=L.get(t);u&&(clearTimeout(u),L.delete(t)),t.classList.remove(r);var d=function(){y(t,a,s),v=void 0};o(t)?d():v=setTimeout(d,c)}f=t}},y=function(t,e,n){if(p=Date.now(),t.classList.add(r),m){var i=a(t);null!==i&&(b(),d=i.addRipple(e,n))}},b=function(){void 0!==d&&(d.then((function(t){return t()})),d=void 0)},R=function(t){b();var e=f;if(e){var n=s-Date.now()+p;if(t&&n>0&&!o(e)){var i=setTimeout((function(){e.classList.remove(r),L.delete(e)}),s);L.set(e,i)}else e.classList.remove(r)}},S=document;S.addEventListener("ionGestureCaptured",w),S.addEventListener("touchstart",(function(t){l=n(t),E(t)}),!0),S.addEventListener("touchcancel",h,!0),S.addEventListener("touchend",h,!0),S.addEventListener("pointercancel",w,!0),S.addEventListener("mousedown",(function(t){if(2!==t.button){var e=n(t)-u;l<e&&E(t)}}),!0),S.addEventListener("mouseup",(function(t){var e=n(t)-u;l<e&&g(t)}),!0)}));
/*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
var e=function(t){if(void 0===t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(!(i instanceof ShadowRoot)&&i.classList.contains("ion-activatable"))return i}},o=function(t){return t.classList.contains("ion-activatable-instant")},a=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},r="ion-activated",c=100,s=150,u=2500}}}));
