(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12f54635"],{"13d5":function(t,a,e){"use strict";var s=e("23e7"),i=e("d58f").left,n=e("a640"),c=e("ae40"),l=e("2d00"),o=e("605d"),r=n("reduce"),u=c("reduce",{1:0}),m=!o&&l>79&&l<83;s({target:"Array",proto:!0,forced:!r||!u||m},{reduce:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},9136:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pay"},[e("NavBar",{staticClass:"toFixed",attrs:{"text-center":t.cinemaName},on:{"left-click":function(a){return t.$goBack()}}}),e("div",{staticClass:"seat-block"},[e("div",{staticClass:"info-block"},[e("div",{staticClass:"movie-info box-flex middle"},[e("div",{staticClass:"flex"},[e("div",{staticClass:"title line-ellipsis"},[t._v(t._s(t.$route.query.nm))]),e("div",{staticClass:"info line-ellipsis"},[e("span",[t._v(" "+t._s(t._f("formatDate")(new Date,"yyyy-MM-dd hh:mm"))+" ")]),e("span",{staticClass:"version line-ellipsis"},[t._v(" "+t._s(t.$route.query.oriLang)+" "+t._s(t.$route.query.ver.substring(0,t.$route.query.ver.indexOf("/")))+" ")])])])]),e("ul",{staticClass:"reminder-list"},[e("li",{staticClass:"reminder-item",class:{height20:!t.isShowTip}},[e("img",{attrs:{src:"http://p1.meituan.net/movie/77717de09967c29cd5b3d1f76309ac841254.png"}}),e("div",[t._v("观影需全程佩戴口罩,电影放映期间影厅内禁止饮食,感谢配合！")]),e("span",{staticClass:"reminder-num",on:{click:function(a){t.isShowTip=!t.isShowTip}}},[t._v(" 1条通知 "),e("i",{staticClass:"iconfont",class:t.isShowTip?"icon-up":"icon-down"})])])])]),e("div",{staticClass:"select-block animate"},[e("div",{staticClass:"seat-block-wrap animate"},[e("div",{staticClass:"hall-name-wrapper animate"},[e("span",{staticClass:"hall-name"},[t._v(t._s(t.cinemaHallType))])]),e("div",{staticClass:"seats-block animate"},t._l(t.seatsData,(function(a,s){return e("div",{key:s,staticClass:"seats-wrap animate"},[e("div",{staticClass:"row-nav"},[t._v(t._s(s+1))]),t._l(a.seats,(function(a,s){return e("div",{key:s,staticClass:"wrap",attrs:{"data-status":a.seatStatus},on:{click:function(e){return t.selectPlan(a)}}},[e("div",{staticClass:"seat"})])}))],2)})),0)])]),e("div",{staticClass:"buy-block",attrs:{"data-show":t.planData.seats.length>0?"submit":"recommend"}},[t._m(0),t.planData.seats.length>0?e("div",{staticClass:"price-block"},[e("div",{staticClass:"title-block"},[t._v(" 已选座位 ")]),e("div",{staticClass:"box-flex selected-block"},t._l(t.planData.seats,(function(a,s){return e("div",{key:s,staticClass:"selected-seat-item",on:{click:function(e){t.planData.seats.splice(s,1),a.seatStatus=1}}},[e("p",{staticClass:"selected-seat-info"},[t._v(" "+t._s(a.rowId)+"排"+t._s(a.columnId>10?a.columnId:"0"+a.columnId)+"座 ")]),e("p",{staticClass:"price-info"},[t._v(" ¥"+t._s(a.price)+" ")]),e("span",{staticClass:"iconfont close icon-close"})])})),0)]):t._e(),e("div",{staticClass:"submit-block box-flex"},[e("div",{staticClass:"submit flex",on:{click:t.submit}},[t._v(" "+t._s(t.getTotalPrice)+"确认选座 ")])])])])],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cinema-info"},[e("div",{staticClass:"seat-type-info"},[e("span",{staticClass:"text-middle"},[e("img",{staticClass:"icon",attrs:{src:"http://p1.meituan.net/movie/9dfff6fd525a7119d44e5734ab0e9fb41244.png"}}),e("span",{staticClass:"text"},[t._v("可选")])]),e("span",{staticClass:"text-middle"},[e("img",{staticClass:"icon",attrs:{src:"http://p0.meituan.net/moviemachine/2af4c987b1758563e22258c077139cdf842.png"}}),e("span",{staticClass:"text"},[t._v("已售")])]),e("span",{staticClass:"text-middle"},[e("img",{staticClass:"icon",attrs:{src:"http://p0.meituan.net/moviemachine/4abd89a0c0a864694b27c54d229fa7f41099.png"}}),e("span",{staticClass:"text"},[t._v("不可售")])])])])}],n=(e("99af"),e("4160"),e("d81d"),e("13d5"),e("a434"),e("159b"),e("5530")),c=(e("e5f5"),e("2f62")),l={name:"Pay",data:function(){return{cinemaName:"",cinemaHallType:"",seatsData:[],isShowTip:!1,planData:{cinemaHallType:"",cinemaName:"",movieName:"",movieDur:"",seats:[],date:""}}},created:function(){var t=this;setTimeout((function(){t.$toast.clear()}),2e3),this.cinemaName=this.cinema.nm?this.cinema.nm:JSON.parse(sessionStorage.getItem("cinema")).nm;var a=JSON.parse(localStorage.getItem("seats".concat(this.$route.query.id).concat(this.cinema.id)));a?this.seatsData=a:(this.seatsData=this.seat,this.seatsData.map((function(t){t.seats.map((function(t){3==t.seatStatus&&(t.seatStatus=1)}))})))},computed:Object(n["a"])({getTotalPrice:function(){return 0==this.planData.seats.length?"":"￥".concat(this.planData.seats.reduce((function(t,a){return t+a.price}),0))}},Object(c["c"])("cinemaModule",{seat:function(t){return t.seat},cinema:function(t){return t.cinema},movieImg:function(t){return t.movieImg}})),methods:Object(n["a"])(Object(n["a"])({},Object(c["b"])("cinemaModule",{setPlan:"setPlan",setSeat:"setSeat",setMovieId:"setMovieId"})),{},{selectPlan:function(t){var a=this;switch(!0){case 1==t.seatStatus:if(this.planData.seats.length>3)return void this.$toast("一次最多选择四张电影票");t.seatStatus=2,this.planData.seats.push(t);break;case 2==t.seatStatus:this.planData.seats.map((function(e,s){e.columnId==t.columnId&&e.rowId==t.rowId&&a.planData.seats.splice(s,1)})),t.seatStatus=1;break;case 3==t.seatStatus:this.$toast("座位已售");break;case 4==t.seatStatus:this.$toast("座位不可用");break}},submit:function(){var t="";0!=this.planData.seats.length?(t=sessionStorage.getItem("cinema")?JSON.parse(sessionStorage.getItem("cinema")).nm:this.cinema.nm,this.$toast("提交订单成功"),this.planData.date=(new Date).getTime(),this.planData.cinemaHallType=this.cinemaHallType,this.planData.cinemaName=t,this.planData.movieId=this.$route.query.id,this.planData.movieName=this.$route.query.nm,this.planData.movieDur=this.$route.query.dur,this.planData.movieImg=this.movieImg,this.setMovieId(this.$route.query.id),this.setSeat(this.planData),this.setPlan(this.planData),this.$goPage({name:"Order"})):this.$toast("请选择座位")}}),beforeRouteEnter:function(t,a,e){document.querySelectorAll(".mask").forEach((function(t,a){return t.remove()})),e()}},o=l,r=e("2877"),u=Object(r["a"])(o,s,i,!1,null,null,null);a["default"]=u.exports},a434:function(t,a,e){"use strict";var s=e("23e7"),i=e("23cb"),n=e("a691"),c=e("50c4"),l=e("7b0b"),o=e("65f0"),r=e("8418"),u=e("1dde"),m=e("ae40"),d=u("splice"),p=m("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,h=Math.min,v=9007199254740991,b="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!d||!p},{splice:function(t,a){var e,s,u,m,d,p,g=l(this),C=c(g.length),_=i(t,C),y=arguments.length;if(0===y?e=s=0:1===y?(e=0,s=C-_):(e=y-2,s=h(f(n(a),0),C-_)),C+e-s>v)throw TypeError(b);for(u=o(g,s),m=0;m<s;m++)d=_+m,d in g&&r(u,m,g[d]);if(u.length=s,e<s){for(m=_;m<C-s;m++)d=m+s,p=m+e,d in g?g[p]=g[d]:delete g[p];for(m=C;m>C-s+e;m--)delete g[m-1]}else if(e>s)for(m=C-s;m>_;m--)d=m+s-1,p=m+e-1,d in g?g[p]=g[d]:delete g[p];for(m=0;m<e;m++)g[m+_]=arguments[m+2];return g.length=C-s+e,u}})},d58f:function(t,a,e){var s=e("1c0b"),i=e("7b0b"),n=e("44ad"),c=e("50c4"),l=function(t){return function(a,e,l,o){s(e);var r=i(a),u=n(r),m=c(r.length),d=t?m-1:0,p=t?-1:1;if(l<2)while(1){if(d in u){o=u[d],d+=p;break}if(d+=p,t?d<0:m<=d)throw TypeError("Reduce of empty array with no initial value")}for(;t?d>=0:m>d;d+=p)d in u&&(o=e(o,u[d],d,r));return o}};t.exports={left:l(!1),right:l(!0)}},e5f5:function(t,a,e){}}]);
//# sourceMappingURL=chunk-12f54635.6cd57bee.js.map