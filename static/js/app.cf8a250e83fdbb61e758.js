webpackJsonp([0],[,,function(t,e,s){"use strict";(function(t){var a=s(1),n=s(29),i=s(22),o=s.n(i),r=s(23),c=s.n(r);a.a.use(n.a),e.a=new n.a({mode:"history",base:t,routes:[{path:"/",component:o.a},{path:"/area",component:o.a},{path:"/lowescoupon",component:c.a}]})}).call(e,"/")},,function(t,e,s){function a(t){s(16)}var n=s(0)(s(5),s(27),a,null,null);t.exports=n.exports},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(24),n=s.n(a);e.default={name:"app",components:{Navbar:n.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"calculator",data:function(){return{inputs:[{param1:0,param2:0,res:0,bs:0}],result:0,numerator:1,denominator:16,cost:32,totalCost:0,offset:5,help:!1}},computed:{fraction:function(){return this.numerator/this.denominator}},methods:{addInput:function(t){this.inputs[t].res=Number(this.inputs[t].param1*this.inputs[t].param2/144).toFixed(5)/1,this.inputs.push({param1:"",param2:"",res:0,bs:0})},helpToggle:function(){this.help=!this.help},reverse:function(t){var e=this.inputs[t].param1;if(this.inputs[t].param1=this.inputs[t].param2,this.inputs[t].param2=e,0!==this.inputs[t].param1&&0!==this.inputs[t].param2){var s=this.inputs[t].param1,a=this.inputs[t].param2,n=this.inputs[t].bs;this.inputs[t].res=n>=1?Number(s*a/144+s*n/144).toFixed(5)/1:Number(s*a/144).toFixed(5)/1}},calThis:function(t){var e=this.inputs[t-1].param1,s=this.inputs[t-1].param2,a=this.inputs[t-1].bs;this.inputs[t-1].res=a>=1?Number(e*s/144+e*a/144).toFixed(5)/1:Number(e*s/144).toFixed(5)/1},reset:function(){this.inputs=[{param1:"",param2:"",res:0,bs:0}],this.cost=0,this.totalCost=0,this.result=0},getResult:function(){this.result=0;for(var t=0;t<this.inputs.length;t++)""!==this.inputs[t].param1&&""!==this.inputs[t].param2||this.inputs.splice(t,1),this.inputs[t].res=this.inputs[t].bs>1?Number(this.inputs[t].param1*this.inputs[t].param2/144+this.inputs[t].param1*this.inputs[t].bs/144).toFixed(5)/1:Number(this.inputs[t].param1*this.inputs[t].param2/144).toFixed(5)/1,this.result+=this.inputs[t].res.toFixed(5)/1,0!==this.cost&&this.cost>30&&(this.totalCost=((this.result+this.offset)*this.cost).toFixed(2)/1)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Lowescoupon",data:function(){return{copyData:"copy data",sequences:{tenPercent:"7685",fifteenFifty:"7633",twentyHundred:"7687",tenFifty:"7673"},lead:"47000",offs:{tenPercent:[],TenOff:[],FifteenOff:[],TwentyOff:[]}}},methods:{checkDigit:function(t){for(var e=0,s=t.split("").reverse().join(""),a=0;a<s.length;a++)e+=parseInt(s.charAt(a))*Math.pow(3,(a+1)%2);return(10-e%10)%10},paddingRandom:function(t){var e=(Math.floor(Math.random()*t)+1).toString();return 5===e.length?e:String("00000"+e).slice(-5)},genCode:function(){this.offs={tenPercent:[],TenOff:[],FifteenOff:[],TwentyOff:[]};for(var t=0;t<5;t++){var e=this.paddingRandom(99999);this.offs.tenPercent.push(this.lead+e+this.sequences.tenPercent+this.checkDigit(this.lead+e+this.sequences.tenPercent))}for(var t=0;t<5;t++){var s=this.paddingRandom(5e4);this.offs.TenOff.push(this.lead+s+this.sequences.tenFifty+this.checkDigit(this.lead+s+this.sequences.tenFifty)),this.offs.FifteenOff.push(this.lead+s+this.sequences.fifteenFifty+this.checkDigit(this.lead+s+this.sequences.fifteenFifty)),this.offs.TwentyOff.push(this.lead+s+this.sequences.twentyHundred+this.checkDigit(this.lead+s+this.sequences.twentyHundred))}}},created:function(){this.genCode()}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"navbar",data:function(){return{}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(1),n=s(4),i=s.n(n),o=s(2),r=s(3),c=s.n(r);a.a.config.productionTip=!1,a.a.use(c.a),new a.a({el:"#app",router:o.a,template:"<App/>",components:{App:i.a}})},,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,function(t,e,s){function a(t){s(17)}var n=s(0)(s(6),s(28),a,"data-v-a47e5128",null);t.exports=n.exports},function(t,e,s){function a(t){s(15)}var n=s(0)(s(7),s(26),a,"data-v-5ab7b0a4",null);t.exports=n.exports},function(t,e,s){function a(t){s(14)}var n=s(0)(s(8),s(25),a,null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[s("nav",[s("div",{staticClass:"navbar"},[s("router-link",{attrs:{to:"/area"}},[t._v("Area Calulator")]),t._v(" "),s("router-link",{attrs:{to:"/lowescoupon"}},[t._v("Lowe's Coupon")])],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("content",[s("div",{staticClass:"container"},[s("button",{staticClass:"change",attrs:{type:"button",name:"button"},on:{click:function(e){t.genCode()}}},[t._v("↻")]),t._v(" "),s("div",{staticClass:"box"},[s("h3",[t._v("10% Off Everything")]),t._v(" "),s("div",{staticClass:"table"},[t._l(t.offs.tenPercent,function(e,a){return[s("div",{staticClass:"row"},[s("div",{staticClass:"cell"},[t._v(t._s(a+1)+":")]),t._v(" "),s("div",{staticClass:"cell"},[t._v(t._s(e))]),t._v(" "),s("div",{staticClass:"cell"},[s("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e,expression:"code",arg:"copy"}]},[t._v("📋")])])])]})],2)]),t._v(" "),s("div",{staticClass:"box"},[s("h3",[t._v("$15 off 50")]),t._v(" "),s("div",{staticClass:"table"},[t._l(t.offs.FifteenOff,function(e,a){return[s("div",{staticClass:"row"},[s("div",{staticClass:"cell"},[t._v(t._s(a+1)+":")]),t._v(" "),s("div",{staticClass:"cell"},[t._v(t._s(e))]),t._v(" "),s("div",{staticClass:"cell"},[s("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e,expression:"code",arg:"copy"}]},[t._v("📋")])])])]})],2)]),t._v(" "),s("div",{staticClass:"box"},[s("h3",[t._v("$20 off 100")]),t._v(" "),s("div",{staticClass:"table"},[t._l(t.offs.TwentyOff,function(e,a){return[s("div",{staticClass:"row"},[s("div",{staticClass:"cell"},[t._v(t._s(a+1)+":")]),t._v(" "),s("div",{staticClass:"cell"},[t._v(t._s(e))]),t._v(" "),s("div",{staticClass:"cell"},[s("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e,expression:"code",arg:"copy"}]},[t._v("📋")])])])]})],2)])]),t._v(" "),s("button",{staticClass:"change",attrs:{type:"button",name:"button"},on:{click:function(e){t.genCode()}}},[t._v("↻")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("navbar"),t._v(" "),s("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("content",[s("div",{staticClass:"container"},[s("div",{staticClass:"box"},[t._m(0),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.numerator,expression:"numerator"}],staticClass:"decimal-input",attrs:{type:"text",name:""},domProps:{value:t.numerator},on:{input:function(e){e.target.composing||(t.numerator=e.target.value)}}}),s("span",[t._v("/")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.denominator,expression:"denominator"}],staticClass:"decimal-input",attrs:{type:"text",name:""},domProps:{value:t.denominator},on:{input:function(e){e.target.composing||(t.denominator=e.target.value)}}}),t._v(" "),s("p",[t._v(t._s(t.fraction))])]),t._v(" "),s("div",{staticClass:"box"},[t._m(1),t._v(" "),s("button",{staticClass:"helpToggle",attrs:{type:"button",name:"button"},on:{click:function(e){t.helpToggle()}}},[t._v("?")]),t._v(" "),t.help?s("div",{staticClass:"helpinfo"},[t._m(2),t._v(" "),t._m(3)]):t._e(),t._v(" "),t._l(t.inputs,function(e,a){return s("div",{staticClass:"area-box"},[s("span",[t._v(t._s(a+1)+". ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.param1,expression:"input.param1"}],attrs:{type:"text",placeholder:""},domProps:{value:e.param1},on:{click:function(e){t.calThis(a)},input:function(t){t.target.composing||(e.param1=t.target.value)}}}),t._v(" "),s("button",{staticClass:"reverse",attrs:{type:"button"},on:{click:function(e){t.reverse(a)}}},[t._v("⇄")]),t._v(" "),t.inputs[a+1]?s("input",{directives:[{name:"model",rawName:"v-model",value:e.param2,expression:"input.param2"}],attrs:{type:"text",placeholder:""},domProps:{value:e.param2},on:{input:function(t){t.target.composing||(e.param2=t.target.value)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:e.param2,expression:"input.param2"}],attrs:{type:"text",placeholder:""},domProps:{value:e.param2},on:{"~click":function(e){t.addInput(a)},input:function(t){t.target.composing||(e.param2=t.target.value)}}}),t._v(" "),s("label",[t._v("bs")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.bs,expression:"input.bs"}],attrs:{type:"text",id:a},domProps:{value:e.bs},on:{input:function(t){t.target.composing||(e.bs=t.target.value)}}}),t._v(" "),s("p",[t._v(t._s(e.res)+" ft"),s("span",{staticClass:"sqf"},[t._v("2")])])])})],2),t._v(" "),s("div",{staticClass:"box"},[s("div",{staticClass:"adjustment"},[t._m(4),t._v(" "),s("button",{staticClass:"helpToggle",attrs:{type:"button",name:"button"},on:{click:function(e){t.helpToggle()}}},[t._v("?")]),t._v(" "),s("br"),t._v(" "),t.help?s("div",{staticClass:"table"},[t._m(5),t._v(" "),t._m(6)]):t._e(),t._v(" "),s("div",{staticClass:"halfbox"},[s("label",{attrs:{for:"offset"}},[t._v("Offset")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.offset,expression:"offset"}],staticClass:"offset",attrs:{name:"offset",type:"text",placeholder:"Offset"},domProps:{value:t.offset},on:{input:function(e){e.target.composing||(t.offset=e.target.value)}}}),t._m(7)]),t._v(" "),s("div",{staticClass:"halfbox"},[s("label",{attrs:{for:""}},[t._v("Cost")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.cost,expression:"cost"}],staticClass:"cost",attrs:{type:"text",placeholder:"Cost"},domProps:{value:t.cost},on:{input:function(e){e.target.composing||(t.cost=e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"box btn-box"},[s("button",{attrs:{type:"button",name:"button"},on:{click:function(e){t.getResult()}}},[t._v("總數/total")]),t._v(" "),s("button",{attrs:{type:"button",name:"button"},on:{click:function(e){t.reset()}}},[t._v("重置/reset")])]),t._v(" "),s("div",{staticClass:"results"},[s("p",[t._v("總面積/total area： "+t._s(t.result)+" ft"),s("span",{staticClass:"sqf"},[t._v("2")])]),t._v(" "),s("p",[t._v("總價/total price： $"+t._s(t.totalCost))])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("轉小數"),s("br"),t._v("Fraction to decimal")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("算面積"),s("br"),t._v("Calculate area")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"cell"},[t._v("⇄")]),t._v(" "),s("div",{staticClass:"cell"},[t._v("數值互換 / swap")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"cell"},[t._v("bs")]),t._v(" "),s("div",{staticClass:"cell"},[t._v("背板高度 / backsplash height")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("調整"),s("br"),t._v("Adjustments")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"cell"},[t._v("Offset")]),t._v(" "),s("div",{staticClass:"cell"},[t._v("Extra area for error-proof")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"cell"},[t._v("Cost")]),t._v(" "),s("div",{staticClass:"cell"},[t._v("每平方尺價格/Cost per ft"),s("span",{staticClass:"sqf"},[t._v("2")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[t._v("ft"),s("span",{staticClass:"sqf"},[t._v("2")])])}]}}],[9]);
//# sourceMappingURL=app.cf8a250e83fdbb61e758.js.map