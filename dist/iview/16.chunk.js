webpackJsonp([16],{1033:function(t,e,a){"use strict";(function(t){function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(229),i=s(r),o=a(116),d=s(o),n=a(100),l=s(n);e.default={name:"review-list",data:function(){var t=this;return{autowidthtable:"autowidthtable",payStatus:["不限","待支付","已支付"],review_states:["未回复","已回复"],expressage:[],expressageReady:!1,columns:[{title:"ID",width:80,key:"id"},{title:"用户名",width:120,align:"center",key:"name"},{title:"商品名称",key:"pname",width:150,align:"center"},{title:"评论",key:"text",align:"center",render:function(t,e){return t("div",{props:{},style:{"text-align":"left","padding-top":"5px","padding-bottom":"5px"}},decodeURI(e.row.text))}},{title:"评分",align:"center",width:70,key:"rating"},{title:"时间",align:"center",width:130,key:"date_added"},{title:"状态",key:"status",width:70,align:"center",render:function(e,a){return e("span",{props:{}},t.review_states[a.row.status])}},{title:"操作",key:"id",width:110,align:"center",render:function(e,a){var s=e("Button",{props:{type:"primary",size:"small"},style:{"margin-left":"8px"},on:{click:function(){t.showEdit(a.index)}}},"回复"),r=e("Button",{props:{type:"primary",size:"small"},on:{click:function(){t.viewReview(a.index)}}},"详情"),i=[r];return i.push(s),e("div",i)}}],saveType:"new",tableData:[],order_states:["查看全部","待支付","已支付","待发货","已发货","退款中","已退款","已完成","待评价","取消订单","确认收货","11","已删除"],page:{dataCount:0,pageCount:0,pageSize:10,pageNumber:1,pageSizeOpts:[10,20,50,100]},getLoading:!1,currentData:{id:0,order_no:"",merchant_id:0,member_name:"",total_score:1,status:1,date_added:"",cash:0,score:0},searchData:{keyword:"",searchDate:[],startDate:"",endDate:"",payStatus:"",shipStatus:"",member_name:"",mobile:""},searchValidata:{},updateStatusForm:{express_number:"",express_type:"",ship_status:""},updateStatusValidate:{reply:[{required:!0,message:"请输入回复内容",trigger:"blur"}]},viewModel:!1,orderDetailReady:!1,orderDetailData:{},orderDetail:[],orderShoping:[],updateStatus:!1,saveUpdateStatusLoading:!1}},methods:{viewReview:function(t){this.currentData=this.tableData[t],this.viewModel=!0},closeview:function(){this.viewModel=!1,this.orderDetailReady=!1,this.orderDetailData={},this.orderDetail=[],this.orderShoping=[]},showEdit:function(e){this.updateStatusForm=t.extend(!0,{},this.tableData[e]),this.updateStatusForm.dataIndex=e,this.saveType="edit",this.updateStatus=!0},cancelEdit:function(){this.updateStatusForm={},this.updateStatus=!1},saveUpdateStatus:function(){var e=this;this.$refs.updateStatusForm.validate(function(a){if(a){e.saveUpdateStatusLoading=!0;var s={ssid:l.default.get("ssid"),id:e.updateStatusForm.id,reply:e.updateStatusForm.reply};t.ajax({url:i.default.api.mall.reviews.reply,type:"POST",dataType:"json",data:s}).done(function(a){if(e.saveUpdateStatusLoading=!1,a)if(0==a.code){e.$Message.success("操作成功！");var s=t.extend(!0,[],e.tableData);s[e.updateStatusForm.dataIndex]=e.updateStatusForm,e.updateStatusForm={},e.tableData=s,e.updateStatus=!1}else i.default.showError({vm:e,data:a,errorMsg:""});else i.default.showError({vm:e,data:a,errorMsg:"请求失败"})}).fail(function(t,a,s){e.saveUpdateStatusLoading=!1,i.default.showError({vm:e,errorMsg:"服务器通讯失败"})})}})},changePage:function(t){this.page.pageNumber=t,this.search(t)},changePageSize:function(t){this.page.pageSize=t,this.page.pageCount=Math.ceil(this.page.dataCount/this.page.pageSize),this.search()},resetSearch:function(){this.searchData={keyword:"",searchDate:[],startDate:"",endDate:"",payStatus:"",shipStatus:"",member_name:"",mobile:""},this.init()},search:function(t){this.searchData.searchDate.length&&(this.searchData.startDate=d.default.FormatDate(this.searchData.searchDate[0],"yyyy-MM-dd"),this.searchData.endDate=d.default.FormatDate(this.searchData.searchDate[1],"yyyy-MM-dd")),this.page.pageNumber=1,t&&(this.page.pageNumber=t),this.init()},init:function(){var e=this;this.getLoading=!0;var a={ssid:l.default.get("ssid"),merchantId:l.default.get("merchant_id"),page:this.page.pageNumber,pageSize:this.page.pageSize};t.ajax({url:i.default.api.mall.reviews.list,type:"POST",dataType:"json",data:a}).done(function(t){e.getLoading=!1,t?0==t.code?(e.page.dataCount=t.data.count,e.page.pageCount=Math.ceil(e.page.dataCount/e.page.pageSize),e.tableData=t.data.list):i.default.showError({vm:e,data:t,errorMsg:""}):i.default.showError({vm:e,data:t,errorMsg:"请求失败"})}).fail(function(t,a,s){e.getLoading=!1,i.default.showError({vm:e,data:data,errorMsg:"服务器通讯失败"})})}},created:function(){console.log(13)},mounted:function(){console.log(12)},activated:function(){console.log(11),this.init()}}}).call(e,a(230))},1063:function(t,e){},1105:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"person"}}),t._v("\n            商品评论管理\n        ")],1),t._v(" "),a("div",{staticClass:"ordler-list"},[a("Table",{staticClass:"auto-width-table",attrs:{border:"",columns:t.columns,loading:t.getLoading,data:t.tableData}}),t._v(" "),a("div",{staticClass:"page-box"},[t.page.pageCount>1?a("Page",{attrs:{total:t.page.dataCount,current:t.page.pageNumber,"show-total":"","page-size-opts":t.page.pageSizeOpts,"page-size":t.page.pageSize,"show-elevator":"",placement:"top","show-sizer":""},on:{"on-change":t.changePage,"on-page-size-change":t.changePageSize}}):t._e()],1)],1),t._v(" "),a("Modal",{attrs:{width:500},model:{value:t.updateStatus,callback:function(e){t.updateStatus=e},expression:"updateStatus"}},[a("h3",{staticStyle:{color:"#2D8CF0"},attrs:{slot:"header"},slot:"header"},[t._v("订单处理")]),t._v(" "),a("Form",{ref:"updateStatusForm",attrs:{model:t.updateStatusForm,"label-width":90,"label-position":"right",rules:t.updateStatusValidate}},[a("FormItem",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"商品名称："}},[t._v("\n                    "+t._s(t.updateStatusForm.pname)+"\n                ")]),t._v(" "),a("FormItem",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"买家名称："}},[t._v("\n                    "+t._s(t.updateStatusForm.name)+"\n                ")]),t._v(" "),a("FormItem",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"评分："}},[t._v("\n                    "+t._s(t.updateStatusForm.rating)+"\n                ")]),t._v(" "),a("FormItem",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"评论："}},[t._v("\n                    "+t._s(decodeURI(t.updateStatusForm.text))+"\n                ")]),t._v(" "),a("FormItem",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"提交时间："}},[t._v("\n                    "+t._s(t.updateStatusForm.date_added)+"\n                ")]),t._v(" "),a("FormItem",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"回复状态："}},[t._v("\n                    "+t._s(t.review_states[t.updateStatusForm.status])+"\n                ")]),t._v(" "),a("FormItem",{staticStyle:{"margin-bottom":"8px"},attrs:{label:"回复内容：",prop:"reply"}},[a("Input",{attrs:{type:"textarea"},model:{value:t.updateStatusForm.reply,callback:function(e){t.$set(t.updateStatusForm,"reply",e)},expression:"updateStatusForm.reply"}})],1)],1),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text"},on:{click:t.cancelEdit}},[t._v("取消")]),t._v(" "),a("Button",{attrs:{type:"primary",loading:t.saveUpdateStatusLoading},on:{click:t.saveUpdateStatus}},[t._v("保存")])],1)],1),t._v(" "),a("Modal",{attrs:{width:"500"},model:{value:t.viewModel,callback:function(e){t.viewModel=e},expression:"viewModel"}},[a("p",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v("评论详情")])]),t._v(" "),a("table",{staticClass:"detail-table",attrs:{cellspacing:"0",cellpadding:"5"}},[a("tbody",[a("tr",[a("td",{staticClass:"detail-title",attrs:{width:"100"}},[t._v("商品名称")]),t._v(" "),a("td",[t._v(t._s(t.currentData.pname))])]),t._v(" "),a("tr",[a("td",{staticClass:"detail-title"},[t._v("买家名称")]),t._v(" "),a("td",[t._v(t._s(t.currentData.name))])]),t._v(" "),a("tr",[a("td",{staticClass:"detail-title"},[t._v("评分")]),t._v(" "),a("td",[t._v(t._s(t.currentData.rating))])]),t._v(" "),a("tr",[a("td",{staticClass:"detail-title"},[t._v("评论")]),t._v(" "),a("td",[t._v(t._s(decodeURI(t.currentData.text)))])]),t._v(" "),a("tr",[a("td",{staticClass:"detail-title"},[t._v("评论时间")]),t._v(" "),a("td",[t._v(t._s(t.currentData.date_added))])]),t._v(" "),a("tr",[a("td",{staticClass:"detail-title"},[t._v("回复状态")]),t._v(" "),a("td",[t._v(t._s(t.review_states[t.currentData.status]))])]),t._v(" "),a("tr",[a("td",{staticClass:"detail-title"},[t._v("商家回复")]),t._v(" "),a("td",[t._v(t._s(t.currentData.reply))])]),t._v(" "),a("tr",[a("td",{staticClass:"detail-title"},[t._v("商家回复时间")]),t._v(" "),a("td",[t._v(t._s(t.currentData.update_time))])])])]),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"error"},on:{click:t.closeview}},[t._v("关闭")])],1)])],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},984:function(t,e,a){a(1063);var s=a(65)(a(1033),a(1105),null,null);s.options.__file="E:\\BigCousin\\document\\预购宝\\merchant\\src\\views\\order\\review.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] review.vue: functional components are not supported with templates, they should use render functions."),t.exports=s.exports}});