(function(e){function n(n){for(var a,c,r=n[0],i=n[1],s=n[2],l=0,d=[];l<r.length;l++)c=r[l],Object.prototype.hasOwnProperty.call(u,c)&&u[c]&&d.push(u[c][0]),u[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(n);while(d.length)d.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,c=1;c<t.length;c++){var r=t[c];0!==u[r]&&(a=!1)}a&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var a={},c={app:0},u={app:0},o=[];function r(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1e53a1af":"5be1cd55","chunk-22fbfa51":"936b20a6","chunk-24650310":"ef587d42","chunk-2482c735":"648f4f82","chunk-2d221fb8":"f4c20c36","chunk-2d226309":"dabd714b","chunk-5ff78862":"a3c0a21c","chunk-6aa3513e":"7860a88e","chunk-3039a47f":"ffa823b4","chunk-36a0cbcc":"98108c1a","chunk-37a666a9":"3b0df5c6","chunk-4f1eb563":"50c8b707","chunk-62f63dfd":"f22f5734","chunk-785484da":"b6a284e1","chunk-8601b9ec":"b9bbd9e4","chunk-885252c0":"aecf9cb6","chunk-95d37a78":"252b8c44","chunk-a44d55dc":"60b0ea62","chunk-c412a046":"104448e1","chunk-12c54857":"be50cce9","chunk-1ccd0594":"93ba8d65","chunk-68d4c33a":"ee6340c5","chunk-014eb08a":"1aaf1c0c","chunk-2993c27a":"89abfab8","chunk-5922113b":"bfa585c0"}[e]+".js"}function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-1e53a1af":1,"chunk-22fbfa51":1,"chunk-24650310":1,"chunk-2482c735":1,"chunk-5ff78862":1,"chunk-6aa3513e":1,"chunk-3039a47f":1,"chunk-36a0cbcc":1,"chunk-37a666a9":1,"chunk-4f1eb563":1,"chunk-62f63dfd":1,"chunk-785484da":1,"chunk-8601b9ec":1,"chunk-885252c0":1,"chunk-95d37a78":1,"chunk-a44d55dc":1,"chunk-c412a046":1,"chunk-12c54857":1,"chunk-1ccd0594":1,"chunk-68d4c33a":1,"chunk-014eb08a":1,"chunk-2993c27a":1,"chunk-5922113b":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-1e53a1af":"16b8e151","chunk-22fbfa51":"82cc3164","chunk-24650310":"6718549d","chunk-2482c735":"ee5aafd7","chunk-2d221fb8":"31d6cfe0","chunk-2d226309":"31d6cfe0","chunk-5ff78862":"07d426da","chunk-6aa3513e":"ee5c3242","chunk-3039a47f":"95af71ea","chunk-36a0cbcc":"fde7647e","chunk-37a666a9":"6718549d","chunk-4f1eb563":"8f8a367a","chunk-62f63dfd":"00a78140","chunk-785484da":"2087d8d2","chunk-8601b9ec":"cbf8b370","chunk-885252c0":"32512083","chunk-95d37a78":"076dced5","chunk-a44d55dc":"7474250f","chunk-c412a046":"e7256405","chunk-12c54857":"8a8a5f7c","chunk-1ccd0594":"822f67b3","chunk-68d4c33a":"2b7ea4b7","chunk-014eb08a":"3373e9f9","chunk-2993c27a":"068eaba3","chunk-5922113b":"068eaba3"}[e]+".css",u=i.p+a,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var s=o[r],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===u))return n()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){s=d[r],l=s.getAttribute("data-href");if(l===a||l===u)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var a=n&&n.target&&n.target.src||u,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete c[e],f.parentNode.removeChild(f),t(o)},f.href=u;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){c[e]=0})));var a=u[e];if(0!==a)if(a)n.push(a[2]);else{var o=new Promise((function(n,t){a=u[e]=[n,t]}));n.push(a[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=r(e);var d=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=u[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",d.name="ChunkLoadError",d.type=a,d.request=c,t[1](d)}u[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var f=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0b11":function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a=[{count:1,checked:!1,available:0,condition:"满34元可用",astrict:34,reason:"",value:2e3,price:15,name:"全国通用券/满34元可用",startAt:(new Date).valueOf()/1e3,endAt:(new Date).setFullYear((new Date).getFullYear()+1).valueOf()/1e3,valueDesc:"20",unitDesc:"元"},{count:1,checked:!1,available:0,condition:"满27元可用",astrict:27,reason:"",value:1500,price:9.9,name:"全国通用券/满27元可用",startAt:(new Date).valueOf()/1e3,endAt:(new Date).setFullYear((new Date).getFullYear()+1).valueOf()/1e3,valueDesc:"15",unitDesc:"元"},{count:1,checked:!1,available:0,condition:"满25元可用",astrict:25,reason:"",value:990,price:7.9,name:"全国通用券/满25元可用",startAt:(new Date).valueOf()/1e3,endAt:(new Date).setFullYear((new Date).getFullYear()+1).valueOf()/1e3,valueDesc:"9.9",unitDesc:"元"},{count:1,checked:!1,available:0,condition:"满15元可用",astrict:15,reason:"",value:500,price:2.5,name:"全国通用券/满15元可用",startAt:(new Date).valueOf()/1e3,endAt:(new Date).setFullYear((new Date).getFullYear()+1).valueOf()/1e3,valueDesc:"5",unitDesc:"元"},{count:1,checked:!1,available:0,condition:"满9.9元可用",astrict:9.9,reason:"",value:250,price:1.5,name:"全国通用券/9元可用",startAt:(new Date).valueOf()/1e3,endAt:(new Date).setFullYear((new Date).getFullYear()+1).valueOf()/1e3,valueDesc:"2.5",unitDesc:"元"}]},"56d7":function(e,n,t){"use strict";t.r(n);t("4de4"),t("fb6a"),t("b680"),t("d3b7"),t("4d63"),t("ac1f"),t("25f0"),t("5319"),t("66b9");var a=t("b650"),c=(t("5246"),t("6b41")),u=(t("38d5"),t("772a")),o=(t("be7f"),t("565f")),r=(t("8a58"),t("e41f")),i=(t("e7e5"),t("d399")),s=(t("537a"),t("ac28")),l=(t("a52c"),t("2ed4")),d=(t("7844"),t("5596")),f=(t("4b0a"),t("2bb1")),h=(t("db2c"),t("1125")),p=(t("5852"),t("d961")),b=(t("3df5"),t("2830")),k=(t("0ec5"),t("21ab")),m=(t("da3c"),t("0b33")),g=(t("bda7"),t("5e46")),v=(t("5f1a"),t("a3e2")),y=(t("0cc8"),t("3104")),w=(t("c3a6"),t("ad06")),D=(t("93ac"),t("bb33")),$=(t("591c"),t("7713")),A=(t("ef6f"),t("82a8")),O=(t("f06a"),t("20fb")),S=(t("91d5"),t("f0ca")),T=(t("4467"),t("c36e")),_=(t("3c32"),t("417e")),j=(t("be39"),t("efa0")),P=(t("2994"),t("2bdd")),x=(t("869a"),t("6869")),C=(t("acb7"),t("67bb")),F=(t("ab71"),t("58e6")),E=(t("66cf"),t("343b")),L=(t("e930"),t("8f80")),I=(t("c194"),t("7744")),N=(t("480b"),t("a37c")),M=(t("b76c"),t("ac3c")),Y=(t("e324"),t("453b")),B=(t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("2b0e")),R=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("keep-alive",[e.$route.meta.keepAlive?t("router-view"):e._e()],1),e.$route.meta.keepAlive?e._e():t("router-view")],1)},q=[],G=(t("5c0b"),t("2877")),H={},U=Object(G["a"])(H,R,q,!1,null,null,null),J=U.exports,V=t("9483");Object(V["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var W=t("8c4f"),K=[{path:"*",redirect:{name:"Home"}},{path:"/login",name:"Login",component:function(){return t.e("chunk-24650310").then(t.bind(null,"ede4"))},meta:{pageTitle:"登录页",keepAlive:!1}},{path:"/forgot",name:"Forgot",component:function(){return t.e("chunk-37a666a9").then(t.bind(null,"1d06"))}},{path:"/main",name:"Main",component:function(){return t.e("chunk-2d221fb8").then(t.bind(null,"cd56"))},meta:{pageTitle:"首页",keepAlive:!0},children:[{path:"home",name:"Home",component:function(){return Promise.all([t.e("chunk-2d226309"),t.e("chunk-5ff78862")]).then(t.bind(null,"b611"))},meta:{pageTitle:"首页",keepAlive:!0}},{path:"menu",name:"Menu",component:function(){return t.e("chunk-785484da").then(t.bind(null,"9ed9"))},meta:{pageTitle:"菜单页",keepAlive:!0}},{path:"shoppingbag",name:"Shoppingbag",component:function(){return t.e("chunk-4f1eb563").then(t.bind(null,"0d72"))},meta:{pageTitle:"购物包页",keepAlive:!1}},{path:"profile",name:"Profile",component:function(){return t.e("chunk-62f63dfd").then(t.bind(null,"3999"))},meta:{pageTitle:"用户页",keepAlive:!1}}]},{path:"/detail/:pid",name:"Detail",component:function(){return t.e("chunk-a44d55dc").then(t.bind(null,"6ab7"))},meta:{pageTitle:"详情页",keepAlive:!1}},{path:"/pay",name:"Pay",component:function(){return t.e("chunk-2482c735").then(t.bind(null,"9136"))},meta:{pageTitle:"支付页",keepAlive:!1}},{path:"/order",name:"Order",component:function(){return t.e("chunk-1e53a1af").then(t.bind(null,"f86d"))}},{path:"/newAddress",name:"NewAddress",component:function(){return Promise.all([t.e("chunk-2d226309"),t.e("chunk-6aa3513e")]).then(t.bind(null,"26c8"))}},{path:"/address",name:"Address",component:function(){return t.e("chunk-36a0cbcc").then(t.bind(null,"d316"))}},{path:"/person",name:"Person",component:function(){return t.e("chunk-22fbfa51").then(t.bind(null,"5671"))}},{path:"/secure",name:"Secure",component:function(){return t.e("chunk-3039a47f").then(t.bind(null,"ca8e"))}},{path:"/like",name:"Like",component:function(){return t.e("chunk-885252c0").then(t.bind(null,"94c0"))}},{path:"/search",name:"Search",component:function(){return t.e("chunk-8601b9ec").then(t.bind(null,"794b"))}},{path:"/coupon",name:"Coupon",component:function(){return t.e("chunk-c412a046").then(t.bind(null,"e83d"))}},{path:"/coffeewallet",name:"Coffeewallet",component:function(){return t.e("chunk-95d37a78").then(t.bind(null,"5a85"))},meta:{pageTitle:"钱包页",keepAlive:!1}}],Q=W["a"].prototype.push;W["a"].prototype.push=function(e){return Q.call(this,e)["catch"]((function(e){return e}))},B["a"].use(W["a"]);var X=new W["a"]({routes:K}),Z=X,z=t("2f62"),ee=t("0b11"),ne={userInfo:{},wallet:ee["a"]},te=(t("d81d"),{changeInfo:function(e,n){e.userInfo=n},changeWallet:function(e,n){n.map((function(e){e.checked&&(e.available++,e.checked=!1)})),this.state.wallet=n,localStorage.removeItem("__$"),localStorage.setItem("__$",JSON.stringify(n))}}),ae={},ce={};B["a"].use(z["a"]);var ue=new z["a"].Store({state:ne,mutations:te,actions:ae,modules:ce}),oe=t("bc3a"),re=t.n(oe),ie=t("2106"),se=t.n(ie),le=(t("a15b"),t("1276"),{install:function(e,n){e.prototype.$goBack=function(){this.$router.go(-1)},e.prototype.$goPage=function(e){this.$router.push({name:e})},e.prototype.$goDetail=function(e){this.$router.push({name:"Detail",params:{pid:e}})},e.prototype.$judgeToken=function(e){var n=this;if(!e)return this.$toast("请先登录"),setTimeout((function(){n.$router.push({name:"Login"})}),500),!0;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0})},e.prototype.$discountCountdown=function(){var e=(new Date).toLocaleDateString(),n=new Date;return n.setDate(n.getDate()+3),(e+" 至 "+n.toLocaleDateString()).replace(/\//g,"-")},e.prototype.$formattingGoodsDetail=function(e){var n=[],t=[],a=[],c=["tem","sugar","milk","cream"],u=Object.assign({},e);return u.desc&&(u.desc=u.desc.split(/\n/)),c.map((function(e){var n={};if(n.title=u[e+"_desc"],n.ruleIndex=0,n.rule=[],u[e]){var a=u[e].split("/");a.map((function(e){""!=e&&n.rule.push({title:e})})),n.rule.length>0&&t.push(n)}})),u.rules=t,u.rules.map((function(e){return a.push(e.rule[e.ruleIndex].title)})),u.rule=a.join("/"),u.count=1,n.push(u.large_img,u.small_img),u.imgData=n,u},e.prototype.$getDetail=function(e){var n=this,t={};return this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"/productDetail",params:{appkey:this.appkey,pid:e}}).then((function(e){n.$toast.clear(),n.goodsAllData.push(n.$formattingGoodsDetail(e.data.result[0]))})),t},e.prototype.$addPurchase=function(e,n){var t=this,a=localStorage.getItem("__tk");if(!this.$judgeToken(a)){var c={tokenString:a,appkey:this.appkey,count:e.count,pid:e.pid,rule:e.rule};this.axios({method:"POST",url:"/addShopcart",data:c}).then((function(e){t.$toast.clear(),700==e.data.code?t.$router.push({name:"Login"}):3e3==e.data.code&&(n?t.$router.push({name:"Pay",query:{sids:e.data.sid}}):t.$shopBagCount()),t.$toast(e.data.msg)}))}},e.prototype.$shopBagCount=function(){var e=this,n=localStorage.getItem("__tk");this.$judgeToken(n)||this.axios({method:"GET",url:"/shopcartRows",params:{appkey:this.appkey,tokenString:n}}).then((function(n){e.$toast.clear(),8e3==n.data.code&&(e.bagCount=n.data.result)}))},e.prototype.$buy=function(e){this.$router.push({name:"Pay",query:{sid:e}})},e.prototype.$onRefresh=function(e){var n=this;setTimeout((function(){n.$router.go(0),!1}),1500)},e.prototype.$getUserInfo=function(){var e=this,n={},t=localStorage.getItem("__tk");return this.axios({method:"GET",url:"/findAccountInfo",params:{appkey:this.appkey,tokenString:t}}).then((function(t){if(e.$toast.clear(),700==t.data.code&&(t.data.nickName="请先登录！",t.data.isLogin=!1,Object.assign(n,t.data)),"B001"==t.data.code){var a=t.data.result[0];a.isLogin=!0,""==a.desc&&(a.desc="暂无简介"),Object.assign(n,a)}})),n}}});t("499a");B["a"].use(a["a"]).use(c["a"]).use(u["a"]).use(o["a"]).use(r["a"]).use(i["a"]).use(s["a"]).use(l["a"]).use(d["a"]).use(f["a"]).use(h["a"]).use(p["a"]).use(b["a"]).use(k["a"]).use(m["a"]).use(g["a"]).use(v["a"]).use(y["a"]).use(w["a"]).use(D["a"]).use($["a"]).use(A["a"]).use(O["a"]).use(S["a"]).use(T["a"]).use(_["a"]).use(j["a"]).use(P["a"]).use(x["a"]).use(C["a"]).use(F["a"]).use(E["a"]).use(L["a"]).use(I["a"]).use(N["a"]).use(M["a"]).use(Y["a"]),B["a"].prototype.commonApi=le,B["a"].prototype.appkey="U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",re.a.defaults.baseURL="http://api.kele8.cn/agent/http://47.106.197.108:10002",re.a.interceptors.request.use((function(e){if("post"==e.method){var n="";for(var t in e.data)n+=t+"="+e.data[t]+"&";e.data=n.slice(0,-1)}return e})),B["a"].use(se.a,re.a),B["a"].use(le),B["a"].filter("formattingPrice",(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"￥";return t+(e-0).toFixed(n)})),B["a"].filter("formatDate",(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss",t=new Date(e),a=t.getFullYear().toString();if(/(y+)/.test(n)){var c=RegExp.$1;n=n.replace(c,a.slice(a.length-c.length))}var u={M:t.getMonth()+1,d:t.getDate(),h:t.getHours(),m:t.getMinutes(),s:t.getSeconds()};for(var o in u){var r=new RegExp("(".concat(o,"+)"));if(r.test(n)){var i=RegExp.$1;n=n.replace(i,u[o]>=10?u[o]:2==i.length?"0"+u[o]:u[o])}}return n})),B["a"].config.productionTip=!1,new B["a"]({router:Z,store:ue,render:function(e){return e(J)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";t("9c0c")},"9c0c":function(e,n,t){}});
//# sourceMappingURL=app.1346b249.js.map