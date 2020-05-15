(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{305:function(a,e,t){"use strict";t.r(e);var s=t(9),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"从map-parseint-中引申出的认识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从map-parseint-中引申出的认识","aria-hidden":"true"}},[a._v("#")]),a._v(" 从map(parseInt)中引申出的认识")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("['1','2','3'].map(parseInt) // 1, NaN, NaN\n")])])]),t("p",[a._v("其实关于这个面试题，很久之前就看到了。但很多的答案就只是单纯说了结果是"),t("code",[a._v("1,NaN,NaN")]),a._v(",所以关于这点，很久都没Get到这个的点。")]),a._v(" "),t("h2",{attrs:{id:"发现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发现","aria-hidden":"true"}},[a._v("#")]),a._v(" 发现")]),a._v(" "),t("p",[a._v("正好最近看掘金小册的时候看到2个点，瞬间就清晰了。")]),a._v(" "),t("ul",[t("li",[a._v("1.map直接调用函数")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("var arr = [1, 2, 3];\narr.map(console.log);\n// 1 0 [1, 2, 3]\n// 2 1 [1, 2, 3]\n// 3 2 [1, 2, 3]\n")])])]),t("p",[t("code",[a._v("map")]),a._v("直接调用函数，会将"),t("code",[a._v("map")]),a._v("的所有参数全部传给"),t("code",[a._v("console.log")])]),a._v(" "),t("ul",[t("li",[a._v("2.parseInt第二个参数\n很多人使用"),t("code",[a._v("parseInt")]),a._v("都只会使用第一个参数，但其实它的第二个参数是设置转换成几进制。")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("parseInt(10, 2) // 2\n")])])]),t("h2",{attrs:{id:"解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决","aria-hidden":"true"}},[a._v("#")]),a._v(" 解决")]),a._v(" "),t("p",[a._v("所以，其实上面题目转换下就是下面这样的.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("['1','2','3'].map((v,i) => parseInt(v,i)) \n")])])]),t("p",[a._v("将数组的"),t("code",[a._v("index")]),a._v("传递给"),t("code",[a._v("parseInt")]),a._v("，作为第二个参数，故会导致2转成1进制，3转换成2进制失败，故结果是"),t("code",[a._v("NaN")])]),a._v(" "),t("Valine")],1)}),[],!1,null,null,null);e.default=r.exports}}]);