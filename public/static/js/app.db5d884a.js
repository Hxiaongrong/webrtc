(function(e){function n(n){for(var c,o,a=n[0],i=n[1],f=n[2],d=0,h=[];d<a.length;d++)o=a[d],r[o]&&h.push(r[o][0]),r[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);s&&s(n);while(h.length)h.shift()();return u.push.apply(u,f||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],c=!0,o=1;o<t.length;o++){var a=t[o];0!==r[a]&&(c=!1)}c&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},o={app:0},r={app:0},u=[];function a(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-1c92a194":"45d1f447","chunk-257a2308":"001bd0a6","chunk-3ebc12e6":"f2abac6b","chunk-4aa8e882":"ac268af5","chunk-4dd64511":"df042b06","chunk-5206e9de":"814e49be","chunk-6dbe6532":"317b6af0","chunk-763e1edf":"3c5b0b14","chunk-822e4b22":"8988ede4","chunk-a5c27bce":"f10cd174","chunk-d81b1460":"7c188e88","chunk-51df0518":"074484cb","chunk-fec7782a":"cb74c27f","chunk-ed23b480":"83e23789"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-1c92a194":1,"chunk-257a2308":1,"chunk-3ebc12e6":1,"chunk-4aa8e882":1,"chunk-4dd64511":1,"chunk-5206e9de":1,"chunk-6dbe6532":1,"chunk-763e1edf":1,"chunk-822e4b22":1,"chunk-a5c27bce":1,"chunk-51df0518":1,"chunk-fec7782a":1,"chunk-ed23b480":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise(function(n,t){for(var c="static/css/"+({}[e]||e)+"."+{"chunk-1c92a194":"c581d2cf","chunk-257a2308":"cce08b6c","chunk-3ebc12e6":"a4fa9c15","chunk-4aa8e882":"39d25d5f","chunk-4dd64511":"fe621326","chunk-5206e9de":"0e433876","chunk-6dbe6532":"0514b6d2","chunk-763e1edf":"e016bccd","chunk-822e4b22":"0e433876","chunk-a5c27bce":"7de0ffeb","chunk-d81b1460":"31d6cfe0","chunk-51df0518":"adcf8e27","chunk-fec7782a":"89c5f0cf","chunk-ed23b480":"dd4ce218"}[e]+".css",o=i.p+c,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var a=r[u],f=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(f===c||f===o))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){a=d[u],f=a.getAttribute("data-href");if(f===c||f===o)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var c=n&&n.target&&n.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");r.request=c,t(r)},h.href=o;var s=document.getElementsByTagName("head")[0];s.appendChild(h)}).then(function(){o[e]=0}));var c=r[e];if(0!==c)if(c)n.push(c[2]);else{var u=new Promise(function(n,t){c=r[e]=[n,t]});n.push(c[2]=u);var f,d=document.getElementsByTagName("head")[0],h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=a(e),f=function(n){h.onerror=h.onload=null,clearTimeout(s);var t=r[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,u=new Error("Loading chunk "+e+" failed.\n("+c+": "+o+")");u.type=c,u.request=o,t[1](u)}r[e]=void 0}};var s=setTimeout(function(){f({type:"timeout",target:h})},12e4);h.onerror=h.onload=f,d.appendChild(h)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],d=f.push.bind(f);f.push=n,f=f.slice();for(var h=0;h<f.length;h++)n(f[h]);var s=d;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},1:function(e,n){},"1a5d":function(e,n,t){var c={"./Home.vue":["bb51","chunk-4aa8e882"],"./communication/communication-min-sub.vue":["bb41","chunk-ed23b480"],"./communication/communication-sub.vue":["66b0","chunk-257a2308"],"./communication/communication.vue":["508d","chunk-4dd64511"],"./responsive/responsive.vue":["7b96","chunk-5206e9de"],"./webrtc/Speech.vue":["62a5","chunk-822e4b22"],"./webrtc/local1.vue":["1737","chunk-1c92a194"],"./webrtc/many.vue":["38bb","chunk-3ebc12e6"],"./webrtc/palette.vue":["866b","chunk-d81b1460","chunk-fec7782a"],"./webrtc/remote1.vue":["e47c","chunk-6dbe6532"],"./webrtc/room.vue":["05bf","chunk-763e1edf"],"./webrtc/transfer.vue":["9b87","chunk-a5c27bce"],"./webrtc/whiteboard.vue":["e656","chunk-d81b1460","chunk-51df0518"]};function o(e){var n=c[e];return n?Promise.all(n.slice(1).map(t.e)).then(function(){var e=n[0];return t(e)}):Promise.resolve().then(function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n})}o.keys=function(){return Object.keys(c)},o.id="1a5d",e.exports=o},2856:function(e,n,t){},"29b2":function(e,n,t){"use strict";var c=t("8055"),o=t.n(c),r=location.origin,u=o.a.connect(r);n["a"]=u},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var c=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],u={data:function(){return{name:"111"}},mounted:function(){var e=this;this.$bus.$on("busClick",function(){console.log("app",e)})}},a=u,i=(t("5c0b"),t("2877")),f=Object(i["a"])(a,o,r,!1,null,null,null);f.options.__file="App.vue";var d=f.exports,h=t("8c4f"),s=t("e2b2"),l=t.n(s);c["default"].use(h["a"]);var p=new h["a"]({routes:[{path:"/",name:"home",component:l()("Home")},{path:"/room/:roomid/:account",name:"room",component:l()("webrtc/room")},{path:"/many",name:"many",component:l()("webrtc/many")},{path:"/local1",name:"local1",component:l()("webrtc/local1")},{path:"/Speech",name:"Speech",component:l()("webrtc/Speech")},{path:"/transfer",name:"transfer",component:l()("webrtc/transfer")},{path:"/remote1",name:"remote1",component:l()("webrtc/remote1")},{path:"/palette",name:"palette",component:l()("webrtc/palette")},{path:"/whiteboard",name:"whiteboard",component:l()("webrtc/whiteboard")},{path:"/communication",name:"communication",component:l()("communication/communication")},{path:"/responsive",name:"responsive",component:l()("responsive/responsive")}]}),b=t("2f62");c["default"].use(b["a"]);var m=new b["a"].Store({state:{},mutations:{},actions:{}}),k=t("29b2"),v=t("5c96"),w=t.n(v);t("0fae");c["default"].use(w.a),k["a"].on("connect",function(){console.log("连接成功")}),k["a"].on("disconnect",function(){console.log("连接断开了")}),c["default"].config.productionTip=!1,c["default"].prototype.$bus=new c["default"],new c["default"]({router:p,store:m,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var c=t("2856"),o=t.n(c);o.a},e2b2:function(e,n,t){e.exports=function(e){return function(){return t("1a5d")("./"+e+".vue")}}}});