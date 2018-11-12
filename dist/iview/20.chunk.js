webpackJsonp([20],{1026:function(t,e,a){"use strict";(function(t){function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=a(229),i=r(s),o=a(116),d=r(o),l=a(100),n=r(l);e.default={name:"return-orders",data:function(){var t=this,e=function(t,e,a){1==e||2==e?a():a(new Error("请选择退款处理"))};return{autowidthtable:"autowidthtable",payStatus:["不限","待支付","已支付"],shipStatus:["不限","待发货","已发货"],return_status:["审核中","同意","驳回"],return_reason:["未知","商品破损、损坏","商品质量问题","商品错发、漏发","收到商品与描述不符","其他"],expressage:[],expressageReady:!1,viewReturnDetail:!1,columns:[{title:"订单编号",className:"order-col-1",width:"10%",key:"order_no"},{title:"用户名",className:"order-col-3",width:"9%",align:"center",key:"member_name"},{title:"会员联系电话",key:"mobile",align:"center",className:"order-col-2"},{title:"商品名称",className:"order-col-5",align:"center",key:"product_name"},{title:"总金额",className:"order-col-5",align:"center",key:"total",render:function(t,e){return t("span",Math.floor(e.row.total))}},{title:"申请时间",align:"center",className:"order-col-4",key:"date_added"},{title:"状态",key:"return_status",className:"order-col-8",width:"9%",align:"center",render:function(e,a){return e("span",{props:{}},t.return_status[a.row.return_status-1])}},{title:"操作",key:"id",className:"order-col-11",width:250,align:"center",render:function(e,a){var r=e("Button",{props:{type:"primary",size:"small"},style:{"margin-left":"8px"},on:{click:function(){t.showEdit(a.index)}}},"审核处理"),s=e("Button",{props:{type:"primary",size:"small"},on:{click:function(){t.viewReturnOrder(a.index)}}},"退款详情"),i=e("Button",{props:{type:"primary",size:"small"},style:{"margin-left":"8px"},on:{click:function(){t.viewOrder(a.index)}}},"订单详情"),o=[s,i];return 1==a.row.return_status&&o.push(r),e("div",o)}}],saveType:"new",tableData:[],order_states:["查看全部","待支付","已支付","待发货","已发货","退款中","已退款","已完成","待评价","取消订单","确认收货","11","已删除"],page:{dataCount:0,pageCount:0,pageSize:10,pageNumber:1,pageSizeOpts:[10,20,50,100]},getLoading:!1,currentData:{id:0,order_no:"",merchant_id:0,member_name:"",total_score:1,status:1,date_added:"",cash:0,score:0},searchData:{keyword:"",searchDate:[],startDate:"",endDate:"",return_status:"",member_name:"",product_name:""},searchValidata:{},updateStatusForm:{return_status:""},updateStatusValidate:{ship_status:[{required:!0,validator:e,trigger:"blur"}]},viewModel:!1,orderDetailReady:!1,orderDetailData:{},orderDetail:[],orderShoping:[],updateStatus:!1,saveUpdateStatusLoading:!1}},methods:{viewOrder:function(t){this.currentData=this.tableData[t],this.viewModel=!0,this.orderDetailReady=!1,this.getOrderDetail()},viewReturnOrder:function(t){this.currentData=this.tableData[t],this.viewReturnDetail=!0},closeview:function(){this.viewModel=!1,this.orderDetailReady=!1,this.orderDetailData={},this.orderDetail=[],this.orderShoping=[]},showEdit:function(e){this.updateStatusForm=t.extend(!0,{},this.tableData[e]),this.updateStatusForm.dataIndex=e,this.saveType="edit",this.updateStatus=!0},cancelEdit:function(){this.updateStatusForm={},this.updateStatus=!1},cancelViewReturn:function(){this.viewReturnDetail=!1},saveUpdateStatus:function(){var e=this;this.$refs.updateStatusForm.validate(function(a){if(a){e.saveUpdateStatusLoading=!0;var r={ssid:n.default.get("ssid"),id:e.updateStatusForm.id,return_status:e.updateStatusForm.return_status};t.ajax({url:i.default.api.mall.return.review,type:"POST",dataType:"json",data:r}).done(function(a){if(e.saveUpdateStatusLoading=!1,a)if(0==a.code){e.$Message.success("操作成功！");var r=t.extend(!0,[],e.tableData);r[e.updateStatusForm.dataIndex]=e.updateStatusForm,e.updateStatusForm={},e.tableData=r,e.updateStatus=!1}else i.default.showError({vm:e,data:a,errorMsg:""});else i.default.showError({vm:e,data:a,errorMsg:"请求失败"})}).fail(function(t,a,r){e.saveUpdateStatusLoading=!1,i.default.showError({vm:e,errorMsg:"服务器通讯失败"})})}})},getOrderDetail:function(){var e=this,a={ssid:n.default.get("ssid"),order_id:this.currentData.order_id};t.ajax({url:i.default.api.mall.order.orderDetail,type:"POST",dataType:"json",data:a}).done(function(t){t?0==t.code?(e.orderDetailData=t.data,e.orderDetailReady=!0):i.default.showError({vm:e,data:t,errorMsg:""}):i.default.showError({vm:e,data:t,errorMsg:"请求失败"})}).fail(function(t,a,r){i.default.showError({vm:e,errorMsg:"服务器通讯失败"})})},getExpressage:function(){var e=this,a={ssid:n.default.get("ssid")};t.ajax({url:i.default.api.public.Expressage,type:"POST",dataType:"json",data:a}).done(function(t){t?0==t.code?(e.expressage=t.data,e.expressageReady=!0):i.default.showError({vm:e,data:t,errorMsg:""}):i.default.showError({vm:e,data:t,errorMsg:"请求失败"})}).fail(function(t,a,r){i.default.showError({vm:e,errorMsg:"服务器通讯失败"})})},changePage:function(t){this.page.pageNumber=t,this.search(t)},changePageSize:function(t){this.page.pageSize=t,this.page.pageCount=Math.ceil(this.page.dataCount/this.page.pageSize),this.search()},resetSearch:function(){this.searchData={keyword:"",searchDate:[],startDate:"",endDate:"",return_status:"",member_name:"",product_name:""},this.init()},search:function(t){this.searchData.searchDate.length&&(this.searchData.startDate=d.default.FormatDate(this.searchData.searchDate[0],"yyyy-MM-dd"),this.searchData.endDate=d.default.FormatDate(this.searchData.searchDate[1],"yyyy-MM-dd")),this.page.pageNumber=1,t&&(this.page.pageNumber=t),this.init()},init:function(){var e=this;this.getLoading=!0;var a={ssid:n.default.get("ssid"),page:this.page.pageNumber,pageSize:this.page.pageSize};""!=this.searchData.keyword&&(a.order_no=this.searchData.keyword),""!=this.searchData.member_name&&(a.member_name=this.searchData.member_name),""!=this.searchData.product_name&&(a.product_name=this.searchData.product_name),this.searchData.return_status>0&&(a.return_status=this.searchData.return_status),""!=this.searchData.startDate&&(a.startDate=this.searchData.startDate),""!=this.searchData.endDate&&(a.endDate=this.searchData.endDate),t.ajax({url:i.default.api.mall.return.list,type:"POST",dataType:"json",data:a}).done(function(t){e.getLoading=!1,t?0==t.code?(e.page.dataCount=t.data.count,e.page.pageCount=Math.ceil(e.page.dataCount/e.page.pageSize),e.tableData=t.data.list):i.default.showError({vm:e,data:t,errorMsg:""}):i.default.showError({vm:e,data:t,errorMsg:"请求失败"})}).fail(function(t,a,r){e.getLoading=!1,i.default.showError({vm:e,data:data,errorMsg:"服务器通讯失败"})})}},mounted:function(){this.getExpressage()},activated:function(){this.init()}}}).call(e,a(230))},1052:function(t,e){},1093:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"person"}}),t._v("\n            退款申请管理\n        ")],1),t._v(" "),a("div",{staticClass:"ordler-list"},[a("div",{staticClass:"search-box"},[a("Form",{ref:"searchData",attrs:{model:t.searchData,rules:t.searchValidata,inline:""}},[a("FormItem",{attrs:{prop:"keyword"}},[a("Input",{attrs:{type:"text",placeholder:"搜索订单号"},model:{value:t.searchData.keyword,callback:function(e){t.$set(t.searchData,"keyword",e)},expression:"searchData.keyword"}},[a("Icon",{attrs:{slot:"prepend",type:"ios-eye"},slot:"prepend"})],1)],1),t._v(" "),a("FormItem",{attrs:{prop:"keyword"}},[a("Input",{attrs:{type:"text",placeholder:"搜索会员名"},model:{value:t.searchData.member_name,callback:function(e){t.$set(t.searchData,"member_name",e)},expression:"searchData.member_name"}},[a("Icon",{attrs:{slot:"prepend",type:"ios-eye"},slot:"prepend"})],1)],1),t._v(" "),a("FormItem",{attrs:{prop:"keyword"}},[a("Input",{attrs:{type:"text",placeholder:"搜索商品名"},model:{value:t.searchData.product_name,callback:function(e){t.$set(t.searchData,"product_name",e)},expression:"searchData.product_name"}},[a("Icon",{attrs:{slot:"prepend",type:"ios-eye"},slot:"prepend"})],1)],1),t._v(" "),a("FormItem",{attrs:{prop:"searchDate"}},[a("DatePicker",{staticStyle:{width:"200px"},attrs:{type:"daterange",placeholder:"请选择时间范围"},model:{value:t.searchData.searchDate,callback:function(e){t.$set(t.searchData,"searchDate",e)},expression:"searchData.searchDate"}})],1),t._v(" "),a("Select",{staticStyle:{width:"100px"},attrs:{placeholder:"选择退款状态"},model:{value:t.searchData.return_status,callback:function(e){t.$set(t.searchData,"return_status",e)},expression:"searchData.return_status"}},t._l(t.return_status,function(e,r){return a("Option",{key:r,attrs:{value:r}},[t._v(t._s(e))])})),t._v(" "),a("FormItem",[a("ButtonGroup",[a("Button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){t.search()}}},[t._v("搜索")]),t._v(" "),a("Button",{on:{click:t.resetSearch}},[t._v("清空")])],1)],1)],1)],1),t._v(" "),a("Table",{staticClass:"auto-width-table",attrs:{border:"",columns:t.columns,loading:t.getLoading,data:t.tableData}}),t._v(" "),a("div",{staticClass:"page-box"},[t.page.pageCount>1?a("Page",{attrs:{total:t.page.dataCount,current:t.page.pageNumber,"show-total":"","page-size-opts":t.page.pageSizeOpts,"page-size":t.page.pageSize,"show-elevator":"",placement:"top","show-sizer":""},on:{"on-change":t.changePage,"on-page-size-change":t.changePageSize}}):t._e()],1)],1),t._v(" "),a("Modal",{attrs:{width:500},model:{value:t.viewReturnDetail,callback:function(e){t.viewReturnDetail=e},expression:"viewReturnDetail"}},[a("h3",{staticStyle:{color:"#2D8CF0"},attrs:{slot:"header"},slot:"header"},[t._v("退款详情")]),t._v(" "),a("table",{staticClass:"detail-table",attrs:{cellspacing:"0",cellpadding:"5"}},[a("tbody",[a("tr",[a("td",{staticClass:"detail-title",attrs:{width:"100"}},[t._v("订单编号")]),t._v(" "),a("td",[t._v(t._s(t.currentData.order_no))])]),t._v(" "),a("tr",[a("td",{staticClass:"detail-title"},[t._v("用户名称")]),t._v(" "),a("td",[t._v(t._s(t.currentData.member_name))])]),t._v(" "),a("tr",[a("td",{staticClass:"detail-title"},[t._v("会员联系电话")]),t._v(" "),a("td",[t._v(t._s(t.currentData.mobile))])]),t._v(" "),a("tr",[a("td",{staticClass:"detail-title"},[t._v("商品名称")]),t._v(" "),a("td",[t._v(t._s(t.currentData.product_name))])]),t._v(" "),a("tr",[a("td",{staticClass:"detail-title"},[t._v("数量")]),t._v(" "),a("td",[t._v(t._s(t.currentData.quantity))])]),t._v(" "),a("tr",[a("td",{staticClass:"detail-title"},[t._v("退货原因")]),t._v(" "),a("td",[t._v(t._s(t.return_reason[t.currentData.return_reason]))])]),t._v(" "),a("tr",[a("td",{staticClass:"detail-title"},[t._v("退货状态")]),t._v(" "),a("td",[t._v(t._s(t.return_status[t.currentData.return_status]))])]),t._v(" "),a("tr",[a("td",{staticClass:"detail-title"},[t._v("备注")]),t._v(" "),a("td",[t._v(t._s(decodeURI(t.currentData.comment)))])]),t._v(" "),a("tr",[a("td",{staticClass:"detail-title"},[t._v("新增时间")]),t._v(" "),a("td",[t._v(t._s(t.currentData.date_added))])]),t._v(" "),a("tr",[a("td",{staticClass:"detail-title"},[t._v("变更时间")]),t._v(" "),a("td",[t._v(t._s(t.currentData.date_modified))])])])]),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"primary"},on:{click:t.cancelViewReturn}},[t._v("关闭")])],1)]),t._v(" "),a("Modal",{attrs:{width:500},model:{value:t.updateStatus,callback:function(e){t.updateStatus=e},expression:"updateStatus"}},[a("h3",{staticStyle:{color:"#2D8CF0"},attrs:{slot:"header"},slot:"header"},[t._v("退款处理")]),t._v(" "),a("Form",{ref:"updateStatusForm",attrs:{model:t.updateStatusForm,"label-width":100,"label-position":"right",rules:t.updateStatusValidate}},[a("FormItem",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"订单编号："}},[t._v("\n                    "+t._s(t.updateStatusForm.order_no)+"\n                ")]),t._v(" "),a("FormItem",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"用 户 名："}},[t._v("\n                    "+t._s(t.updateStatusForm.member_name)+"\n                ")]),t._v(" "),a("FormItem",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"商品名称："}},[t._v("\n                    "+t._s(t.updateStatusForm.product_name)+"\n                ")]),t._v(" "),a("FormItem",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"数量："}},[t._v("\n                    "+t._s(t.updateStatusForm.quantity)+"\n                ")]),t._v(" "),a("FormItem",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"备注："}},[t._v("\n                    "+t._s(t.updateStatusForm.comment)+"\n                ")]),t._v(" "),a("FormItem",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"提交时间："}},[t._v("\n                    "+t._s(t.updateStatusForm.date_added)+"\n                ")]),t._v(" "),a("FormItem",{attrs:{label:"退款处理：",prop:"return_status"}},[a("RadioGroup",{model:{value:t.updateStatusForm.return_status,callback:function(e){t.$set(t.updateStatusForm,"return_status",e)},expression:"updateStatusForm.return_status"}},[a("Radio",{attrs:{label:"2"}},[a("span",[t._v("同意")])]),t._v(" "),a("Radio",{attrs:{label:"3"}},[a("span",[t._v("驳回")])])],1)],1)],1),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text"},on:{click:t.cancelEdit}},[t._v("取消")]),t._v(" "),a("Button",{attrs:{type:"primary",loading:t.saveUpdateStatusLoading},on:{click:t.saveUpdateStatus}},[t._v("保存")])],1)],1),t._v(" "),a("Modal",{attrs:{width:"900"},model:{value:t.viewModel,callback:function(e){t.viewModel=e},expression:"viewModel"}},[a("p",{staticStyle:{color:"black","font-weight":"bold","text-align":"left","font-size":"18px"},attrs:{slot:"header"},slot:"header"},[a("span",[t._v("订单详情")])]),t._v(" "),t.orderDetailReady?a("div",[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("收货人信息")]),t._v(" "),a("table",{staticClass:"detail-table",attrs:{cellspacing:"0",cellpadding:"5"}},[a("tbody",[a("tr",[a("td",{staticClass:"detail-title",attrs:{width:"80"}},[t._v("会员姓名")]),t._v(" "),a("td",{staticStyle:{"min-width":"100px"}},[t._v(t._s(t.orderDetailData.member_name))]),t._v(" "),a("td",{staticClass:"detail-title",attrs:{width:"80"}},[t._v("会员电话")]),t._v(" "),a("td",{attrs:{width:"120"}},[t._v(t._s(t.orderDetailData.mobile))]),t._v(" "),a("td",{staticClass:"detail-title",attrs:{width:"80"}},[t._v("收货人")]),t._v(" "),a("td",{staticStyle:{"min-width":"100px"}},[t._v(t._s(t.orderDetailData.shipping_member_name))]),t._v(" "),a("td",{staticClass:"detail-title",attrs:{width:"110"}},[t._v("收货人联系电话")]),t._v(" "),a("td",{attrs:{width:"120"}},[t._v(t._s(t.orderDetailData.shipping_mobile))])]),t._v(" "),a("tr",[a("td",{staticClass:"detail-title"},[t._v("收货地址1")]),t._v(" "),a("td",{attrs:{colspan:"7"}},[t._v(t._s(t.orderDetailData.shipping_address_1))])]),t._v(" "),a("tr",[a("td",{staticClass:"detail-title"},[t._v("收货地址2")]),t._v(" "),a("td",{attrs:{colspan:"7"}},[t._v(t._s(t.orderDetailData.shipping_address_2))])]),t._v(" "),a("tr",[a("td",{staticClass:"detail-title"},[t._v("邮寄方式")]),t._v(" "),a("td",[t._v(t._s(t.orderDetailData.shipping_method))]),t._v(" "),a("td",{staticClass:"detail-title"},[t._v("快递单号")]),t._v(" "),a("td",{attrs:{colspan:"2"}},[t._v(t._s(t.orderDetailData.shipping_express_no))]),t._v(" "),a("td",{staticClass:"detail-title"},[t._v("快递编号")]),t._v(" "),a("td",{attrs:{colspan:"2"}},[t._v(t._s(t.orderDetailData.shipping_express_code))])])])])]),t._v(" "),a("div",{staticStyle:{"margin-top":"20px"}},[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("商品信息")]),t._v(" "),a("table",{staticClass:"detail-table",attrs:{cellspacing:"0",cellpadding:"5"}},[a("tbody",[a("tr",[a("td",{staticClass:"detail-title",attrs:{width:"80"}},[t._v("订单ID")]),t._v(" "),a("td",{staticClass:"detail-title"},[t._v("商品名称")]),t._v(" "),a("td",{staticClass:"detail-title",attrs:{width:"80"}},[t._v("数量")]),t._v(" "),a("td",{staticClass:"detail-title",attrs:{width:"120"}},[t._v("单价")]),t._v(" "),a("td",{staticClass:"detail-title",attrs:{width:"120"}},[t._v("小计")])]),t._v(" "),t._l(t.orderDetailData.product,function(e){return a("tr",[a("td",{attrs:{align:"center"}},[t._v(t._s(e.order_id))]),t._v(" "),a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",{attrs:{align:"center"}},[t._v(t._s(e.quantity))]),t._v(" "),a("td",{attrs:{align:"right"}},[t._v("¥"+t._s(e.price))]),t._v(" "),a("td",{attrs:{align:"right"}},[t._v("¥"+t._s(e.total))])])})],2)])])],1),t._v(" "),a("div",{staticStyle:{"margin-top":"20px"}},[a("table",{attrs:{width:"100%"}},[a("tr",[a("td",{attrs:{width:"50%",valign:"top"}},[a("Card",{staticStyle:{margin:"0 20px 0 0"}},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("订单信息")]),t._v(" "),a("p",[t._v("订单总金额(元)："),a("span",{staticStyle:{"font-size":"16px",color:"red"}},[t._v("¥"+t._s(t.orderDetailData.total))])]),t._v(" "),a("p",[t._v("支付方式："),a("span",{staticStyle:{"font-size":"16px"}},[t._v(t._s(t.orderDetailData.payment_method))])]),t._v(" "),a("p",[t._v("订单状态："),a("Tag",[t._v(t._s(t.order_states[t.orderDetailData.order_status]))])],1)])],1),t._v(" "),a("td",{attrs:{valign:"top"}},[a("Card",{staticStyle:{margin:"0 0 0 10px"}},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("其他信息")]),t._v(" "),a("p",[t._v("备注：\n                                        "),a("span",{staticStyle:{"font-size":"16px"}},[t._v(t._s(decodeURI(t.orderDetailData.comment)))])]),t._v(" "),a("p",[t._v("\n                                        新增时间："),a("span",{staticStyle:{"font-size":"16px"}},[t._v(t._s(t.orderDetailData.date_added))])]),t._v(" "),a("p",[t._v("\n                                        修改时间："),a("span",{staticStyle:{"font-size":"16px"}},[t._v(t._s(t.orderDetailData.date_modified))])])])],1)])])])],1):t._e(),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"error",size:"large",long:""},on:{click:t.closeview}},[t._v("关闭")])],1)])],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},979:function(t,e,a){a(1052);var r=a(65)(a(1026),a(1093),null,null);r.options.__file="E:\\BigCousin\\document\\预购宝\\merchant\\src\\views\\mall\\return-order.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] return-order.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports}});