webpackJsonp([6],{1019:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=o(100),r=function(e){return e&&e.__esModule?e:{default:e}}(a);r.default.remove("user"),r.default.remove("user_id"),r.default.remove("merchant_id"),r.default.remove("ssid"),r.default.remove("cloud_account"),r.default.remove("cloud_status"),r.default.remove("user_power"),t.default={data:function(){return{loginCodeBaseUrl:this.$store.state.public.api.login.CodeImage+"&code=",form:{userName:"",password:"",logincode:"",random:parseInt(1e6*Math.random())},rules:{userName:[{whitespace:!0,required:!0,message:"账号不能为空",trigger:"blur"}],password:[{whitespace:!0,required:!0,message:"密码不能为空",trigger:"blur"}],logincode:[{required:!0,max:4,min:4,message:"请正确输入验证码",trigger:"blur"}]}}},methods:{handleSubmit:function(){var t=this;r.default.set("access",1),this.$refs.loginForm.validate(function(o){if(o){var a=t,s={account:t.form.userName,password:t.form.password,code:t.form.logincode,random:t.form.random},n=function(e){console.log(e),e?0==e.code&&e.data.ssid?(r.default.set("user",e.data.username),r.default.set("user_id",e.data.id),r.default.set("merchant_id",e.data.merchant_id),r.default.set("ssid",e.data.ssid),r.default.set("cloud_account",e.data.cloud_account),r.default.set("cloud_mobile",e.data.cloud_mobile),r.default.set("cloud_status",e.data.cloud_status),r.default.set("is_direct",e.data.is_direct),r.default.set("merchant_type",e.data.merchant_type),a.$store.commit("setAvator",e.data.logo),a.$store.commit("setPower"),a.$router.push({name:"home_index"})):(a.$Modal.error({title:"登录失败",content:'<span style="font-size:14px;color:red">'+e.message+'</span><br />\n                                              <p style="color:#999;padding-top:20px">错误代码：'+e.code+"</p>\n                                             "}),a.changeCodeImg()):a.$Modal.error({title:"服务器错误",content:""})},i=function(){a.$Modal.error({title:"登录失败",content:"服务器请求失败"})};e.ajax({url:t.$store.state.public.api.login.request,type:"POST",dataType:"json",data:s}).done(n).fail(i)}})},changeCodeImg:function(){this.form.random=parseInt(1e6*Math.random())},register:function(){this.$router.push({name:"register"})}}}}).call(t,o(230))},1048:function(e,t){},1075:function(e,t){},1079:function(e,t,o){e.exports=o.p+"c4cf2aa7a67b7f34fe069f9ac953e6df.png"},1122:function(e,t,o){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login",on:{keydown:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleSubmit(t)}}},[o("div",{staticClass:"login-con"},[e._m(0),e._v(" "),o("div",{staticClass:"login-right"},[o("div",{staticClass:"form-con"},[o("Form",{ref:"loginForm",attrs:{model:e.form,rules:e.rules}},[o("div",{staticStyle:{width:"518px",margin:"auto",height:"58px","margin-bottom":"20px"}},[o("FormItem",{staticStyle:{height:"58px"},attrs:{prop:"userName"}},[o("Input",{staticStyle:{height:"58px !important","line-height":"58px !important"},attrs:{placeholder:"请输入用户名"},model:{value:e.form.userName,callback:function(t){e.$set(e.form,"userName",t)},expression:"form.userName"}},[o("span",{attrs:{slot:"prepend"},slot:"prepend"},[o("Icon",{attrs:{size:28,type:"person"}})],1)])],1)],1),e._v(" "),o("div",{staticStyle:{width:"518px",margin:"auto",height:"58px","margin-bottom":"20px"}},[o("FormItem",{attrs:{prop:"password"}},[o("Input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}},[o("span",{attrs:{slot:"prepend"},slot:"prepend"},[o("Icon",{attrs:{size:14,type:"locked"}})],1)])],1)],1),e._v(" "),o("div",{staticStyle:{width:"518px",margin:"auto",height:"58px","margin-bottom":"20px"}},[o("FormItem",{staticClass:"logincode",attrs:{prop:"logincode"}},[o("Input",{staticClass:"logincode-input",staticStyle:{width:"378px",float:"left"},attrs:{maxlength:4,placeholder:"请输入验证码"},model:{value:e.form.logincode,callback:function(t){e.$set(e.form,"logincode",t)},expression:"form.logincode"}},[o("span",{attrs:{slot:"prepend"},slot:"prepend"},[o("Icon",{attrs:{size:14,type:"ios-eye"}})],1)]),e._v(" "),o("Tooltip",{staticClass:"logincode-img",attrs:{content:"看不清？点击刷新",placement:"top"}},[o("img",{attrs:{src:e.loginCodeBaseUrl+e.form.random,width:"130",height:"58"},on:{click:e.changeCodeImg}})]),e._v(" "),o("div",{staticClass:"clearfix"})],1)],1),e._v(" "),o("div",{staticStyle:{width:"518px",margin:"auto","margin-bottom":"20px"}},[o("FormItem",[o("Button",{staticStyle:{height:"58px",background:"#cea34c",border:"none"},attrs:{type:"primary",long:""},on:{click:function(t){e.handleSubmit()}}},[e._v("登录")])],1)],1)])],1)])]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-left"},[a("img",{staticClass:"loginImg",attrs:{src:o(1079)}})])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"copy-right"},[e._v("\n        © 2018陕西振华网络科技有限责任公司 "),o("br"),e._v(" 技术支持：陕西振华网络科技有限责任公司     客服热线：000-000-0000\n    ")])}]},e.exports.render._withStripped=!0},975:function(e,t,o){o(1075),o(1048);var a=o(65)(o(1019),o(1122),null,null);a.options.__file="E:\\BigCousin\\document\\预购宝\\merchant\\src\\views\\login.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports}});