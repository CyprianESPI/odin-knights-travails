(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>h});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),s=t(667),c=t.n(s),l=new URL(t(155),t.b),u=a()(o()),d=c()(l);u.push([e.id,`:root {\n    --clr-dark: rgb(184, 139, 74);\n    --clr-light: rgb(227, 192, 111);\n    --clr-lighter: #FFD57C;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n/*border: 2px solid red;*/\n\nbody {\n    background-position: center;\n    /* Center the image */\n    background-repeat: no-repeat;\n    /* Do not repeat the image */\n    background-size: cover;\n    background-image: url(${d});\n\n    display: grid;\n    height: 100vh;\n    grid-template-rows: auto 1fr auto;\n    text-align: center;\n}\n\n#chessboard {\n    display: grid;\n    grid-template-rows: 3vw 1fr 3vw;\n    grid-template-columns: 3vw 1fr 3vw;\n    margin: auto;\n    aspect-ratio: 1;\n    height: min(90vh, 90vw);\n\n    background-color: var(--clr-light);\n    border: 10px solid var(--clr-dark);\n    box-shadow: rgba(0, 0, 0, 0.50) 0px 5px 15px;\n    border-radius: 15px;\n}\n\nmain {\n    border: 10px solid var(--clr-lighter);\n    /*var(--clr-dark);*/\n}\n\nh2 {\n    margin: auto;\n}\n\n@media only screen and (max-width: 1026px) {\n    h2 {\n        display: none;\n    }\n}\n\n.numbers,\n.letters {\n    display: flex;\n    justify-content: space-around;\n    color: var(--clr-dark);\n    filter: brightness(0.50);\n}\n\n.numbers {\n    flex-flow: column;\n}\n\n/* Part of the style is defined in board.js */\n.board {\n    display: grid;\n    height: 100%;\n    width: 100%;\n}\n\n.light {\n    background-color: var(--clr-light);\n    color: black;\n}\n\n.dark {\n    background-color: var(--clr-dark);\n    color: black;\n}\n\n.square {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* https://www.sitepoint.com/new-css3-relative-font-size/\n    vmin means 'whichever is smaller between the 1% of the ViewPort's height and the 1% of the ViewPort's width'.*/\n    font-size: 6vmin;\n    /* Avoids having write cursor on Knight div */\n    cursor: pointer;\n}\n\n.square:hover {\n    filter: brightness(0.50);\n}\n\n.target {\n    filter: brightness(0.50);\n}\n\n.busy {\n    cursor: default;\n}`,""]);const h=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var h=t(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)n[h].references++,n[h].updater(p);else{var f=o(p,r);r.byIndex=s,n.splice(s,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var c=r(e,o),l=0;l<i.length;l++){var u=t(i[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},155:(e,n,t)=>{e.exports=t.p+"3fbe3ce0cfbe033d1370.png"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),a=t.n(i),s=t(565),c=t.n(s),l=t(216),u=t.n(l),d=t(589),h=t.n(d),p=t(28),f={};f.styleTagTransform=h(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;class g{static getPosKey(e){const n=`${e[0]}_${e[1]}`;return console.debug(n,e),n}static moves(e,n){console.debug(e,n);const t={};t[g.getPosKey(e)]=[e];for(let e=0;e<15;e++){console.debug("Depth:",e);for(const[e,r]of Object.entries(t)){console.debug("Start move...",`${e}: ${r}`);for(const e of g.POSSIBLE_MOVES){const o=r[r.length-1],i=[o[0]+e[0],o[1]+e[1]];if(i[0]<0||i[0]>=y.SIZE||i[1]<0||i[1]>=y.SIZE)continue;const a=r.slice();if(a.push(i),t[g.getPosKey(i)]=a,i[0]===n[0]&&i[1]===n[1])return console.log("Found path:",a),console.debug("All paths:",t),a}}}return console.error("Path not found...",t),null}static POSSIBLE_MOVES=[[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]]}const m=g,v=class{static removeContent(e){for(;e.firstChild;)e.firstChild.remove()}static isEmpty(e){return 0===Object.keys(e).length}};class b{static SIZE=8;constructor(e){const n=document.createElement("div");n.className="board not-busy",n.style.gridTemplateColumns=`repeat(${b.SIZE}, minmax(0, 1fr))`,n.style.gridAutoRows="1fr",this.container=n,this.knightPosition=e,this.path=[]}createSquare(e,n){const t=document.createElement("div");return t.className=(e+n)%2==0?"square light":"square dark",t.addEventListener("click",(t=>{if(0!==this.path.length)return;if(this.knightPosition[0]==e&&this.knightPosition[1]==n)return;const r=m.moves(this.knightPosition,[e,n]);r.shift(),r.forEach((e=>{this.path.push(e)})),console.debug("Knight path:",this.path);for(var o=0;o<this.path.length;o++)setTimeout((()=>{console.debug(`Delayed for ${500*o} ms.`),this.knightPosition=this.path.shift(),this.render()}),500*o)})),t}render(){console.debug("Rendering board..."),v.removeContent(this.container);for(let e=0;e<b.SIZE;e++)for(let n=0;n<b.SIZE;n++){const t=this.createSquare(e,n);e==this.knightPosition[0]&&n==this.knightPosition[1]?(t.innerText="♞",t.className+=" busy"):0!==this.path.length&&(t.className+=" busy",e==this.path[this.path.length-1][0]&&n==this.path[this.path.length-1][1]&&(t.className+=" target")),this.container.appendChild(t)}console.debug("Rendered board!")}}const y=b,w=new y([0,0]);document.querySelector("main").appendChild(w.container),function(){console.log("Initialazing...");const e=new URLSearchParams(document.location.search);console.log(e),console.log("Initialazed!"),console.log("Rendering..."),w.render(),console.log("Rendered!")}()})()})();