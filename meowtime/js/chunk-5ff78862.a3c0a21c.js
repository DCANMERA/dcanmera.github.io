(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ff78862"],{"057f":function(t,e,n){var o=n("fc6a"),i=n("241c").f,r={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==r.call(t)?s(t):i(o(t))}},"277d":function(t,e,n){var o=n("23e7"),i=n("e8b5");o({target:"Array",stat:!0},{isArray:i})},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("277d");function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function i(t){if(Array.isArray(t))return o(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0");function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("fb6a"),n("b0c0"),n("25f0");function a(t,e){if(t){if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return i(t)||r(t)||a(t)||s()}},"3ca3":function(t,e,n){"use strict";var o=n("6547").charAt,i=n("69f3"),r=n("7dd0"),a="String Iterator",s=i.set,c=i.getterFor(a);r(String,"String",(function(t){s(this,{type:a,string:String(t),index:0})}),(function(){var t,e=c(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=o(n,i),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,n){"use strict";var o=n("0366"),i=n("7b0b"),r=n("9bdd"),a=n("e95a"),s=n("50c4"),c=n("8418"),u=n("35a1");t.exports=function(t){var e,n,l,f,d,g,p=i(t),h="function"==typeof this?this:Array,A=arguments.length,m=A>1?arguments[1]:void 0,b=void 0!==m,v=u(p),y=0;if(b&&(m=o(m,A>2?arguments[2]:void 0,2)),void 0==v||h==Array&&a(v))for(e=s(p.length),n=new h(e);e>y;y++)g=b?m(p[y],y):p[y],c(n,y,g);else for(f=v.call(p),d=f.next,n=new h;!(l=d.call(f)).done;y++)g=b?r(f,m,[l.value,y],!0):l.value,c(n,y,g);return n.length=y,n}},"746f":function(t,e,n){var o=n("428f"),i=n("5135"),r=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=o.Symbol||(o.Symbol={});i(e,t)||a(e,t,{value:r.f(t)})}},"9d64":function(t,e){t.exports="data:image/png;base64,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"},a4d3:function(t,e,n){"use strict";var o=n("23e7"),i=n("da84"),r=n("d066"),a=n("c430"),s=n("83ab"),c=n("4930"),u=n("fdbf"),l=n("d039"),f=n("5135"),d=n("e8b5"),g=n("861d"),p=n("825a"),h=n("7b0b"),A=n("fc6a"),m=n("c04e"),b=n("5c6c"),v=n("7c73"),y=n("df75"),S=n("241c"),C=n("057f"),I=n("7418"),k=n("06cf"),w=n("9bf2"),x=n("d1e7"),D=n("9112"),M=n("6eeb"),B=n("5692"),P=n("f772"),Q=n("d012"),E=n("90e3"),O=n("b622"),U=n("e538"),L=n("746f"),N=n("d44e"),j=n("69f3"),J=n("b727").forEach,T=P("hidden"),V="Symbol",F="prototype",G=O("toPrimitive"),q=j.set,W=j.getterFor(V),H=Object[F],R=i.Symbol,Y=r("JSON","stringify"),Z=k.f,X=w.f,z=C.f,K=x.f,_=B("symbols"),$=B("op-symbols"),tt=B("string-to-symbol-registry"),et=B("symbol-to-string-registry"),nt=B("wks"),ot=i.QObject,it=!ot||!ot[F]||!ot[F].findChild,rt=s&&l((function(){return 7!=v(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a}))?function(t,e,n){var o=Z(H,e);o&&delete H[e],X(t,e,n),o&&t!==H&&X(H,e,o)}:X,at=function(t,e){var n=_[t]=v(R[F]);return q(n,{type:V,tag:t,description:e}),s||(n.description=e),n},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof R},ct=function(t,e,n){t===H&&ct($,e,n),p(t);var o=m(e,!0);return p(n),f(_,o)?(n.enumerable?(f(t,T)&&t[T][o]&&(t[T][o]=!1),n=v(n,{enumerable:b(0,!1)})):(f(t,T)||X(t,T,b(1,{})),t[T][o]=!0),rt(t,o,n)):X(t,o,n)},ut=function(t,e){p(t);var n=A(e),o=y(n).concat(pt(n));return J(o,(function(e){s&&!ft.call(n,e)||ct(t,e,n[e])})),t},lt=function(t,e){return void 0===e?v(t):ut(v(t),e)},ft=function(t){var e=m(t,!0),n=K.call(this,e);return!(this===H&&f(_,e)&&!f($,e))&&(!(n||!f(this,e)||!f(_,e)||f(this,T)&&this[T][e])||n)},dt=function(t,e){var n=A(t),o=m(e,!0);if(n!==H||!f(_,o)||f($,o)){var i=Z(n,o);return!i||!f(_,o)||f(n,T)&&n[T][o]||(i.enumerable=!0),i}},gt=function(t){var e=z(A(t)),n=[];return J(e,(function(t){f(_,t)||f(Q,t)||n.push(t)})),n},pt=function(t){var e=t===H,n=z(e?$:A(t)),o=[];return J(n,(function(t){!f(_,t)||e&&!f(H,t)||o.push(_[t])})),o};if(c||(R=function(){if(this instanceof R)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),n=function(t){this===H&&n.call($,t),f(this,T)&&f(this[T],e)&&(this[T][e]=!1),rt(this,e,b(1,t))};return s&&it&&rt(H,e,{configurable:!0,set:n}),at(e,t)},M(R[F],"toString",(function(){return W(this).tag})),M(R,"withoutSetter",(function(t){return at(E(t),t)})),x.f=ft,w.f=ct,k.f=dt,S.f=C.f=gt,I.f=pt,U.f=function(t){return at(O(t),t)},s&&(X(R[F],"description",{configurable:!0,get:function(){return W(this).description}}),a||M(H,"propertyIsEnumerable",ft,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:R}),J(y(nt),(function(t){L(t)})),o({target:V,stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var n=R(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),o({target:"Object",stat:!0,forced:!c,sham:!s},{create:lt,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),o({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:gt,getOwnPropertySymbols:pt}),o({target:"Object",stat:!0,forced:l((function(){I.f(1)}))},{getOwnPropertySymbols:function(t){return I.f(h(t))}}),Y){var ht=!c||l((function(){var t=R();return"[null]"!=Y([t])||"{}"!=Y({a:t})||"{}"!=Y(Object(t))}));o({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,n){var o,i=[t],r=1;while(arguments.length>r)i.push(arguments[r++]);if(o=e,(g(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof o&&(e=o.call(this,t,e)),!st(e))return e}),i[1]=e,Y.apply(null,i)}})}R[F][G]||D(R[F],G,R[F].valueOf),N(R,V),Q[T]=!0},a630:function(t,e,n){var o=n("23e7"),i=n("4df4"),r=n("1c7e"),a=!r((function(t){Array.from(t)}));o({target:"Array",stat:!0,forced:a},{from:i})},b0c0:function(t,e,n){var o=n("83ab"),i=n("9bf2").f,r=Function.prototype,a=r.toString,s=/^\s*function ([^ (]*)/,c="name";o&&!(c in r)&&i(r,c,{configurable:!0,get:function(){try{return a.call(this).match(s)[1]}catch(t){return""}}})},b611:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"M-home"},[o("div",{ref:"header",staticClass:"M-header"},[o("form",{attrs:{action:"/"}},[o("van-search",{attrs:{"show-action":"",placeholder:"请输入搜索关键词"},on:{focus:function(e){return t.$goPage("Search")}},scopedSlots:t._u([{key:"right-icon",fn:function(){return[o("van-icon",{attrs:{name:"scan"}})]},proxy:!0},{key:"action",fn:function(){return[o("div",{on:{click:function(e){return t.$goPage("Search")}}},[t._v("搜索")])]},proxy:!0}])},[o("van-icon",{attrs:{slot:"left",name:n("9d64")},slot:"left"})],1)],1)]),o("van-pull-refresh",{attrs:{"success-text":"刷新成功"},on:{refresh:function(e){return t.$onRefresh(t.pullDownToRefresh)}},model:{value:t.pullDownToRefresh,callback:function(e){t.pullDownToRefresh=e},expression:"pullDownToRefresh"}},[o("div",{ref:"banner",staticClass:"M-banner"},[o("van-swipe",{attrs:{autoplay:5e3,loop:""},on:{change:t.changeCurrentIndex}},t._l(t.bannerData,(function(e,n){return o("van-swipe-item",{key:n},[o("img",{attrs:{src:e.bannerImg,title:e.name},on:{click:function(n){return t.$goDetail(e.pid)}}}),o("div",{staticClass:"M-description",class:{M_description_act:t.currentIndex==n}},[t._v(" "+t._s(e.name)+" ")])])})),1)],1),o("div",{ref:"sectorization",staticClass:"M-sectorization"},[o("van-nav-bar",{staticClass:"M-nav",scopedSlots:t._u([{key:"left",fn:function(){return[o("div",{staticClass:"M-homeAddress",on:{click:t.getShop}},[o("div",{staticClass:"M-icon"},[o("van-icon",{attrs:{name:"map-marked"}})],1),o("div",{staticClass:"M-address_detail"},[o("div",{staticClass:"M-shop"},[o("span",[t._v(t._s(t.nowAddress))]),o("span",{staticClass:"M-distance M-distance_ml"},[t._v(">")])]),o("div",{staticClass:"M-distance"},[t._v(t._s(t.shop))])])]),o("van-popup",{staticClass:"M-select_shop",attrs:{"get-container":"#app"},model:{value:t.isShow,callback:function(e){t.isShow=e},expression:"isShow"}},[o("van-area",{attrs:{title:"选择门店","area-list":t.areaList,"columns-placeholder":["请选择","请选择","请选择"]},on:{cancel:t.cancelShow,confirm:t.confirmAddress}})],1)]},proxy:!0}])},[o("div",{staticClass:"M-user",attrs:{slot:"right"},on:{click:t.linkUser},slot:"right"},[o("div",{staticClass:"M-home_userName"},[t._v(" Hi, "+t._s(t.userInfo.nickName)+" ")]),o("div",{staticClass:"M-hello"},[t._v("咖啡会让人脑洞大开哟")])])]),o("van-grid",{staticClass:"M-guide",attrs:{clickable:"",border:!1}},t._l(t.guideData,(function(e,n){return o("van-grid-item",{key:n,attrs:{replace:""},on:{click:function(n){return t.jumpJudgment(e)}}},[o("van-icon",{staticClass:"M-guide_icon",attrs:{slot:"icon",name:e.iconName},slot:"icon"}),o("span",{staticClass:"M-guide_text",attrs:{slot:"text"},slot:"text"},[t._v(t._s(e.title))])],1)})),1)],1),o("div",{staticClass:"M-product"},[o("van-list",{attrs:{finished:t.finished,offset:"40"},on:{load:t.loadData},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[o("div",{attrs:{slot:"finished"},slot:"finished"},[t._v("已加载完")]),t._l(t.goodsData,(function(e,n){return o("div",{key:n,ref:"goods",refInFor:!0,staticClass:"M-home_goods"},[o("h3",{staticClass:"M-goods_tip"},[t._v(t._s(e.title))]),o("div",{staticClass:"M-goods_content"},t._l(e.result,(function(i,r){return o("goods-item",{key:r,attrs:{item:i},on:{add:t.openPupop}},[o("van-icon",{attrs:{slot:"hot",name:"isHot"==e.key?"hot-sale":"new-arrival"},slot:"hot"}),o("van-tag",{attrs:{slot:"discount",type:"danger"},slot:"discount"},[t._v(" "+t._s("isHot"==e.key?"满减":"促销")+" ")]),o("div",{attrs:{slot:"sell"},slot:"sell"},[t._v("已售"+t._s(1732*(n*r+1))+"+")])],1)})),1)])}))],2)],1)]),o("van-popup",{attrs:{"get-container":"#app",position:"bottom",closeable:"","close-icon":"close"},model:{value:t.isShowPopup,callback:function(e){t.isShowPopup=e},expression:"isShowPopup"}},[o("select-rule",{attrs:{productItemData:t.goodsItem},on:{closePupop:t.closePupop}})],1)],1)},i=[],r=(n("d81d"),n("fb6a"),n("b0c0"),n("d3b7"),n("2909")),a=(n("f0a3"),n("e833")),s={name:"Home",components:{GoodsItem:function(){return n.e("chunk-014eb08a").then(n.bind(null,"d248"))},SelectRule:function(){return n.e("chunk-2993c27a").then(n.bind(null,"49c2"))}},data:function(){return{userInfo:"",pullDownToRefresh:!1,currentIndex:0,bannerData:[],nowAddress:"广州 天河区",shop:"440106",isShow:!1,areaList:a["a"],guideData:[{title:"咖啡钱包",iconName:"after-sale",url:"Coffeewallet"},{title:"送TA礼物",iconName:"point-gift-o",url:"Menu"},{title:"优惠活动",iconName:"coupon-o",url:"Coupon"},{title:"我的喜爱",iconName:"goods-collect-o",url:"Like"}],loading:!0,finished:!1,dataCount:1,startIndex:0,goodsData:[],goodsAllData:[{title:"爆款热销",value:1,key:"isHot"},{title:"咖啡周边",value:"coffee",key:"type"},{title:"冲调零食",value:"latte",key:"type"},{title:"舒适办公",value:"rena_ice",key:"type"}],goodsItem:[],isShowPopup:!1}},created:function(){this.getBannerData(),this.accessToGoods(),this.getUserInfo()},watch:{"$store.state.userInfo":function(t){this.userInfo=t}},methods:{getUserInfo:function(){this.$store.commit("changeInfo",this.$getUserInfo())},linkUser:function(){this.userInfo.isLogin?this.$goPage("Profile"):this.$goPage("Login")},changeCurrentIndex:function(t){this.currentIndex=t},getShop:function(){this.isShow=!0},cancelShow:function(){this.isShow=!1},confirmAddress:function(t){this.cancelShow(),this.nowAddress=t[1].name+" "+t[2].name,this.shop=t[2].code},jumpJudgment:function(t){this.$judgeToken(localStorage.getItem("__tk"))||(this.$getUserInfo(),this.$goPage(t.url))},getBannerData:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"/banner",params:{appkey:this.appkey}}).then((function(e){t.$toast.clear(),300==e.data.code&&(t.bannerData=e.data.result,t.isLoading=!1)}))},accessToGoods:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.goodsAllData.map((function(e){t.axios({method:"GET",url:"/typeProducts",params:{appkey:t.appkey,key:e.key,value:e.value}}).then((function(n){500==n.data.code&&(e.result=n.data.result,e.result.map((function(n,o){t.axios({method:"GET",url:"/productDetail",params:{appkey:t.appkey,pid:n.pid}}).then((function(n){var i=t.$formattingGoodsDetail(n.data.result[0]);e.result[o].count=i.count,e.result[o].rules=i.rules,e.result[o].rule=i.rule}))})))}))})),this.goodsData=this.goodsAllData.slice(this.startIndex,this.startIndex+this.dataCount),this.startIndex+=this.dataCount,this.loading=!1},loadData:function(){var t=this;setTimeout((function(){var e,n=t.goodsAllData.slice(t.startIndex,t.startIndex+t.dataCount);t.startIndex+=t.dataCount,(e=t.goodsData).push.apply(e,Object(r["a"])(n)),n.length<t.dataCount?t.finished=!0:t.loading=!1}),1500)},openPupop:function(t){this.goodsItem=t.item,this.isShowPopup=t.show},closePupop:function(t){this.$addPurchase(this.goodsItem),this.isShowPopup=t}}},c=s,u=n("2877"),l=Object(u["a"])(c,o,i,!1,null,null,null);e["default"]=l.exports},d28b:function(t,e,n){var o=n("746f");o("iterator")},ddb0:function(t,e,n){var o=n("da84"),i=n("fdbc"),r=n("e260"),a=n("9112"),s=n("b622"),c=s("iterator"),u=s("toStringTag"),l=r.values;for(var f in i){var d=o[f],g=d&&d.prototype;if(g){if(g[c]!==l)try{a(g,c,l)}catch(h){g[c]=l}if(g[u]||a(g,u,f),i[f])for(var p in r)if(g[p]!==r[p])try{a(g,p,r[p])}catch(h){g[p]=r[p]}}}},e01a:function(t,e,n){"use strict";var o=n("23e7"),i=n("83ab"),r=n("da84"),a=n("5135"),s=n("861d"),c=n("9bf2").f,u=n("e893"),l=r.Symbol;if(i&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};u(d,l);var g=d.prototype=l.prototype;g.constructor=d;var p=g.toString,h="Symbol(test)"==String(l("test")),A=/^Symbol\((.*)\)[^)]+$/;c(g,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=p.call(t);if(a(f,t))return"";var n=h?e.slice(7,-1):e.replace(A,"$1");return""===n?void 0:n}}),o({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,n){var o=n("b622");e.f=o},f0a3:function(t,e,n){},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-5ff78862.a3c0a21c.js.map