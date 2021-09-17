/*!
 * Whale v1.5.2
 * Copyright 2017-2018 zkreations
 * Developed by José Gregorio (fb.com/JGMateran)
 * Licensed under MIT (github.com/zkreations/whale/blob/master/LICENSE)
 */var whale=function(){"use strict";function e(t,a){return e.addElements(t,a)}function t(e,t){for(var a=0,n=e.length;a<n&&!1!==t.call(e[a],a,e[a]);a++);return e}function a(e){return e.trim()}function n(e){return(" "+(e.getAttribute("class")||"")+" ").replace(/[\t\r\n\f]/g," ")}function l(e,t){return-1<n(e).indexOf(t)}function s(e,s){var c=n(e);t(s.split(" "),function(t,n){n=a(n),l(e,n)||(c+=n+" ")}),e.setAttribute("class",a(c))}function c(e,l){t(l.split(" "),function(t,l){e.setAttribute("class",a(n(e).replace(" "+a(l)+" "," ")))})}function i(e,a){t(a.split(" "),function(t,a){(l(e,a)?c:s)(e,a)})}return e.extend=function(e){var t,a,n,l=1,s=arguments.length;for(l===s&&(e=this,l--);l<s;l++)if(null!=(t=arguments[l]))for(n in t)(a=t[n])!==e[n]&&(e[n]=a);return e},t([s,c,i],function(e,a){a.collection=function(e,n){t(e,function(e,t){a(t,n)})}}),e.components={},e.addElements=function(t,a){var n;if(a)e.components[t]=a;else for(n in t)e.components[n]=t[n];return this},e.extend({trim:a,forEach:t,hasClass:l,addClass:s,removeClass:c,toggleClass:i}),window.addEventListener("load",function(){var t,a=e.components;for(t in a)for(var n=0,l=document.querySelectorAll("."+t),s=l.length,c=a[t];n<s;n++)new c(l[n],n,t)}),e}();!function(){"use strict";function e(e){var t=this.classes;whale.forEach(e.querySelectorAll("a"),function(e,a){var n=a.parentNode,l=n.querySelectorAll("ul"),s=n.querySelectorAll("a"),c=document.createElement("span"),i=l[0];l.length&&(whale.addClass(n,t.parent),whale.addClass(c,t.arrow),a.appendChild(c),a.addEventListener("click",function(e){e.preventDefault(),whale.hasClass(i,t.active)?(whale.removeClass.collection(l,t.active),whale.removeClass.collection(s,t.active)):whale.addClass.collection([a,i],t.active)}))})}function t(e){var t=this.classes,a=e.querySelectorAll("."+t.item),n=e.querySelectorAll("."+t.panel);a.length&&whale.forEach(a,function(l,s){var c=s.href.split("#")[1],i=e.querySelector("#"+c);i&&(whale.hasClass(i,t.active)&&whale.addClass(s,t.active),s.addEventListener("click",function(e){e.preventDefault(),whale.forEach([a,n],function(e,a){whale.removeClass.collection(a,t.active)}),whale.addClass.collection([s,i],t.active)}))})}function a(e){var t=this.classes,a=e.getAttribute(this.data.target),n=document.getElementById(a);e.addEventListener("click",function(a){if(a.preventDefault(),whale.hasClass(n,t.active))whale.removeClass.collection([e,n],t.active);else{whale.addClass.collection([e,n],t.active);var l=function(s){var c=s.target;s===a||c===n||n.contains(c)||(whale.removeClass.collection([e,n],t.active),document.removeEventListener("click",l))};document.addEventListener("click",l)}})}e.prototype={classes:{active:"is-active",parent:"is-parent",arrow:"is-arrow"}},t.prototype.classes={item:"wjs-item",panel:"wjs-panel",active:"is-active"};var n=a.prototype={classes:{active:"is-active"},data:{target:"data-target"}},l={};function s(e){var t=this.classes,a=e.querySelector("."+t.button),n=e.querySelector("."+t.content),l=t.active;whale.hasClass(n,l)&&whale.addClass(a,l),a.addEventListener("click",function(){whale.toggleClass.collection([a,n],l)})}function c(e){var t=this.defaults,a=t.width,n=t.height,l="left="+(screen.width-a)/2+",top="+(screen.height-n)/2+",width="+a+",height="+n;e.addEventListener("click",function(e){e.preventDefault(),window.open(this.href,this.target,l)})}whale.forEach(["addClass","removeClass","toggleClass"],function(e,t){l[t]=function(e){var a,l=e.getAttribute(n.data.target),s=document.querySelectorAll("."+l);s&&e.addEventListener("click",function(){(a=whale[t])(e,n.classes.active),a.collection(s,n.classes.active)})}}),s.prototype={classes:{active:"is-active",content:"wjs-container",button:"wjs-button"}},c.prototype={defaults:{width:600,height:400}},whale.addElements(l).addElements({"wjs-menu":e,"wjs-tab":t,"wjs-spoiler":s,"wjs-outsite":a,"wjs-window":c})}();

/*! offcanvas menu */
var b=document.querySelectorAll('.offcanvas__sub-list a[href*="#"]');function c(){for(var a=0;a<b.length;a++)b[a].classList.remove("is-here");this.classList.add("is-here")}for(var d=0;d<b.length;d++)b[d].addEventListener("click",c);var e=document.querySelectorAll('.offcanvas__list > .offcanvas__item > a[href*="#"]');c=function(){for(var a=0;a<e.length;a++)e[a].classList.remove("is-active");this.classList.add("is-active")};for(d=0;d<e.length;d++)e[d].addEventListener("click",c);

/*! smooth-scroll v14.2.1 | (c) 2018 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
!(function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){return"querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype},o=function(){for(var e={},t=0;t<arguments.length;t++)!(function(t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(arguments[t]);return e},r=function(t){return!!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)},a=function(t){return parseInt(e.getComputedStyle(t).height,10)},i=function(e){var t;try{t=decodeURIComponent(e)}catch(n){t=e}return t},c=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,r=-1,a="",i=n.charCodeAt(0);++r<o;){if(0===(t=n.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t>=1&&t<=31||127==t||0===r&&t>=48&&t<=57||1===r&&t>=48&&t<=57&&45===i?a+="\\"+t.toString(16)+" ":a+=t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(r):"\\"+n.charAt(r)}var c;try{c=decodeURIComponent("#"+a)}catch(e){c="#"+a}return c},u=function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t},s=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},l=function(t,n,o,r){var a=0;if(t.offsetParent)do{a+=t.offsetTop,t=t.offsetParent}while(t);return a=Math.max(a-n-o,0),r&&(a=Math.min(a,s()-e.innerHeight)),a},d=function(e){return e?a(e)+e.offsetTop:0},f=function(e,t,n){t||history.pushState&&n.updateURL&&history.pushState({smoothScroll:JSON.stringify(n),anchor:e.id},document.title,e===document.documentElement?"#top":"#"+e.id)},m=function(t,n,o){0===t&&document.body.focus(),o||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},h=function(t,n,o,r){if(n.emitEvents&&"function"==typeof e.CustomEvent){var a=new CustomEvent(t,{bubbles:!0,detail:{anchor:o,toggle:r}});document.dispatchEvent(a)}};return function(a,p){var g,v,y,S,E,b,O,I={};I.cancelScroll=function(e){cancelAnimationFrame(O),O=null,e||h("scrollCancel",g)},I.animateScroll=function(n,r,a){var i=o(g||t,a||{}),c="[object Number]"===Object.prototype.toString.call(n),p=c||!n.tagName?null:n;if(c||p){var v=e.pageYOffset;i.header&&!S&&(S=document.querySelector(i.header)),E||(E=d(S));var y,b,C,w=c?n:l(p,E,parseInt("function"==typeof i.offset?i.offset(n,r):i.offset,10),i.clip),L=w-v,A=s(),H=0,q=function(t,o){var a=e.pageYOffset;if(t==o||a==o||(v<o&&e.innerHeight+a)>=A)return I.cancelScroll(!0),m(n,o,c),h("scrollStop",i,n,r),y=null,O=null,!0},Q=function(t){y||(y=t),H+=t-y,b=H/parseInt(i.speed,10),b=b>1?1:b,C=v+L*u(i,b),e.scrollTo(0,Math.floor(C)),q(C,w)||(O=e.requestAnimationFrame(Q),y=t)};0===e.pageYOffset&&e.scrollTo(0,0),f(n,c,i),h("scrollStart",i,n,r),I.cancelScroll(!0),e.requestAnimationFrame(Q)}};var C=function(t){if(!r()&&0===t.button&&!t.metaKey&&!t.ctrlKey&&"closest"in t.target&&(y=t.target.closest(a))&&"a"===y.tagName.toLowerCase()&&!t.target.closest(g.ignore)&&y.hostname===e.location.hostname&&y.pathname===e.location.pathname&&/#/.test(y.href)){var n=c(i(y.hash)),o=g.topOnEmptyHash&&"#"===n?document.documentElement:document.querySelector(n);o=o||"#top"!==n?o:document.documentElement,o&&(t.preventDefault(),I.animateScroll(o,y))}},w=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(g)&&history.state.anchor){var t=document.querySelector(c(i(history.state.anchor)));t&&I.animateScroll(t,null,{updateURL:!1})}},L=function(e){b||(b=setTimeout((function(){b=null,E=d(S)}),66))};return I.destroy=function(){g&&(document.removeEventListener("click",C,!1),e.removeEventListener("resize",L,!1),e.removeEventListener("popstate",w,!1),I.cancelScroll(),g=null,v=null,y=null,S=null,E=null,b=null,O=null)},I.init=function(r){if(!n())throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";I.destroy(),g=o(t,r||{}),S=g.header?document.querySelector(g.header):null,E=d(S),document.addEventListener("click",C,!1),S&&e.addEventListener("resize",L,!1),g.updateURL&&g.popstate&&e.addEventListener("popstate",w,!1)},I.init(p),I}}));

var scroll = new SmoothScroll('a[href*="#"]', {
    easing: 'easeInOutCubic',
    clip: true
});