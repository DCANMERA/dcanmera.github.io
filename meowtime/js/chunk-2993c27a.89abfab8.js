(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2993c27a","chunk-5922113b"],{"49c2":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"M-specification"},[i("div",{staticClass:"M-specification_con"},[i("div",{staticClass:"M-specification_img"},[i("img",{attrs:{src:t.productItemData.small_img||t.productItemData.smallImg}})]),i("div",[i("div",{staticClass:"M-rule_price"},[t._v(" "+t._s(t._f("formattingPrice")(t.productItemData.price))+" ")]),i("div",{staticClass:"M-rule_select"},[i("span",[t._v("已选：")]),t._l(t.productItemData.rules,(function(e,s){return i("span",{key:s},[t._v(" "+t._s(e.rule[e.ruleIndex].title)+" ")])}))],2)])]),t._l(t.productItemData.rules,(function(e,s){return i("div",{key:s,staticClass:"M-rule_items"},[i("div",{staticClass:"M-rule_title"},[t._v(" "+t._s(e.title)+" ")]),i("div",{staticClass:"M-rule_item_con"},t._l(e.rule,(function(a,l){return i("div",{key:l,staticClass:"M-rule_item_main",class:{active:e.ruleIndex==l,"large-text":a.title.length>=4},on:{click:function(i){return t.toggleRule(e,l,s)}}},[t._v(" "+t._s(a.title)+" ")])})),0)])})),i("div",{staticClass:"M-select_wrapper"},[i("div",{staticClass:"M-select_count"},[t._v("选择数量")]),i("div",{staticClass:"M-product_count"},[i("van-stepper",{attrs:{theme:"round","button-size":"20",integer:""},model:{value:t.productItemData.count,callback:function(e){t.$set(t.productItemData,"count",e)},expression:"productItemData.count"}})],1)]),t._t("ruleAffirm",[i("van-button",{staticClass:"M-affirm",attrs:{slot:"ruleAffirm",round:"",type:"info"},on:{click:function(e){return e.stopPropagation(),t.affirmRule(e)}},slot:"ruleAffirm"},[t._v("确认")])])],2)},a=[],l=(i("a15b"),i("d81d"),{name:"SelectRule",props:{productItemData:{type:Object,default:function(){return{count:1,price:"28.9",rules:[{rule:[{title:"冷"},{title:"热"}],ruleIndex:0,title:"温度"}],small_img:i("e585")}}}},methods:{affirmRule:function(){this.$emit("closePupop",!1)},toggleRule:function(t,e,i){if(t.ruleIndex!=e){t.ruleIndex=e;var s=[];this.productItemData.rules.map((function(t){return s.push(t.rule[t.ruleIndex].title)})),this.productItemData.rule=s.join("/"),this.$set(this.productItemData.rules,i,this.productItemData.rules[i]),this.$forceUpdate()}}}}),u=l,r=(i("5859"),i("2877")),c=Object(r["a"])(u,s,a,!1,null,null,null);e["default"]=c.exports},5859:function(t,e,i){"use strict";i("635e")},"635e":function(t,e,i){},e585:function(t,e,i){t.exports=i.p+"img/nullpic.85912e2c.png"}}]);
//# sourceMappingURL=chunk-2993c27a.89abfab8.js.map