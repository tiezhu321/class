(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-053a2dba"],{"596a":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-card",{attrs:{shadow:"always","body-style":{padding:"20px"}}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("span",[t._v("分类管理")])]),e("el-card",{attrs:{shadow:"always","body-style":{padding:"20px"}}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("span",[t._v("乐居分类:")])]),e("el-row",{attrs:{gutter:20}},t._l(t.list,(function(a){return e("el-col",{key:a.id,attrs:{span:6}},[e("el-card",{attrs:{"body-style":{padding:"0px"}}},[e("span",{staticClass:"title"},[t._v(t._s(a.name))]),e("img",{staticClass:"img",attrs:{src:a.icon,alt:""}})])],1)})),1)],1),e("div",{staticStyle:{"margin-top":"30px"}},[t._v(" 全部分类: ")]),e("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:t.tableDate,"row-key":"id",border:"","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"}}},[e("el-table-column",{attrs:{prop:"name",label:"菜单名称",sortable:"",fixed:"left",width:"180"}}),e("el-table-column",{attrs:{prop:"icon",sortable:"",label:"icon",width:"180"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("img",{staticClass:"icon",attrs:{src:t.row.icon,alt:""}})]}}])}),e("el-table-column",{attrs:{prop:"name",label:"分类名字"}}),e("el-table-column",{attrs:{prop:"sort",label:"排序",sortable:"",width:"180"}}),e("el-table-column",{attrs:{prop:"navStatus",label:"显示状态",sortable:"",width:"180"}}),e("el-table-column",{attrs:{prop:"showStatus",label:"导航栏展示",sortable:"",width:"180"}}),e("el-table-column",{attrs:{prop:"description",label:"描述",sortable:"",width:"180"}}),e("el-table-column",{attrs:{prop:"modifyTime",label:"创建时间",sortable:"",width:"180"}})],1)],1)],1)},n=[],l=e("5530"),o=(e("7db0"),e("d3b7"),e("b0c0"),e("159b"),e("d81d"),e("60f2")),s={data:function(){return{list:[],tableDate:[]}},computed:{},created:function(){this.init()},mounted:function(){},methods:{init:function(){var t=this;Object(o["a"])().then((function(a){console.log("商品分类",a),t.list=a.data.items.find((function(t){if("乐居"==t.category.name)return t})).children,a.data.items.forEach((function(t){t.category.navStatus=t.category.navStatus?"展示":"不展示",t.category.showStatus=t.category.showStatus?"显示":"不显示"}));var e=a.data.items.map((function(t){var a=Object(l["a"])(Object(l["a"])({},t.category),{},{children:t.children});return a}));t.tableDate=e}))}}},i=s,c=(e("9a6b"),e("2877")),d=Object(c["a"])(i,r,n,!1,null,"d63e2230",null);a["default"]=d.exports},"5d03":function(t,a,e){},"60f2":function(t,a,e){"use strict";e.d(a,"a",(function(){return n}));var r=e("b775");function n(){return Object(r["a"])({url:"/lejuAdmin/category/getAllCategory"})}},"7db0":function(t,a,e){"use strict";var r=e("23e7"),n=e("b727").find,l=e("44d2"),o=e("ae40"),s="find",i=!0,c=o(s);s in[]&&Array(1)[s]((function(){i=!1})),r({target:"Array",proto:!0,forced:i||!c},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),l(s)},"9a6b":function(t,a,e){"use strict";e("5d03")}}]);