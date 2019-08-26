require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(131);
/**
 * Created by 长宝 on 2019/5/23.
 */



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_79e20621_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(134);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(132)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-79e20621"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_79e20621_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\visitordetail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-79e20621", Component.options)
  } else {
    hotAPI.reload("data-v-79e20621", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 132:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      img: ['/static/images/addimg.jpg'],
      isDone: false,
      ownerid: '',
      typeid: '',
      NAME: '',
      PHONE: '',
      userid: wx.getStorageSync('userid'),
      isUpload: false,
      validateflag: false,
      validateValue: '',
      iv: '',
      encryptedData: '',
      C_START_TIME: '', //访客开始时间
      C_END_TIME: '', //访客到期时间
      fkuploadflag: false //访客照片认证成功后不给修改
    };
  },
  onLoad: function onLoad(options) {
    var _this = this;

    console.log(options);
    this.ownerid = options.C_OWNERID;
    this.typeid = options.C_TYPEID;
    this.C_START_TIME = options.C_START_TIME;
    this.C_END_TIME = options.C_END_TIME;
    this.fkuploadflag = false;
    //        this.ownerid='d27795761b4cc5bdc48d3aaae7f4fe'
    //        this.typeid='02' //01是家人
    //        this.C_START_TIME = '2019-07-18'
    //        this.C_END_TIME = '2019-07-19'
    //        console.info(this.isDone+'-1-'+this.isUpload)
    var img = wx.getStorageSync('img');
    var queryKey = wx.getStorageSync('queryKey');
    var jobNum = wx.getStorageSync('jobNum');
    var userid = wx.getStorageSync('userid');
    if (queryKey != '') {
      var data = {
        C_QUERYKEY: queryKey,
        C_JOBNUM: jobNum,
        C_USERID: userid
      };
      this.$https.request({
        url: this.$interfaces.validateImg,
        data: {
          data: this.$datas.getValueObj(0, data)
        },
        method: "post"
      }).then(function (res) {
        console.log(res);
        if (res.requestResult) {
          _this.validateflag = true;
          _this.img = img;
        } else {
          _this.validateflag = false;
          _this.validateValue = res.requestValue;
          wx.removeStorageSync('img');
          _this.img = ['/static/images/addimg.jpg'];
        }
      }).catch(function (err) {
        return console.log(err);
      });
    } else {
      if (img != '') {
        this.img = img;
      } else {
        this.img = ['/static/images/addimg.jpg'];
        this.isDone = false;
        this.isUpload = false;
      }
    }
  },
  onShow: function onShow() {
    if (this.typeid == '02') {
      console.log('show');
      //          this.C_START_TIME=''
      //          this.C_END_TIME=''
    }
  },

  methods: {
    getUserInfo: function getUserInfo(e) {
      //判断授权是否成功
      //          console.log(res.code)
      if (e.mp.detail.userInfo) {
        console.log(e.mp.detail);
        this.iv = e.mp.detail.iv;
        this.encryptedData = e.mp.detail.encryptedData;
        this.getCode();
        wx.setStorageSync('wxuser', e.mp.detail.userInfo);
      }
    },
    getCode: function getCode() {
      var _this2 = this;

      //mpvue中，提供了一个全局小程序对象wx
      wx.login({
        success: function success(res) {
          //console.log(res.code)
          _this2.getOpenid(res.code);
        }
      });
    },
    getOpenid: function getOpenid(code) {
      var _this3 = this;

      this.$https.request({
        url: this.$interfaces.getOpenid,
        data: {
          data: { code: code, iv: this.iv, encryptedData: this.encryptedData, loccode: '' }
        },
        method: "post"
      }).then(function (res) {
        console.log(res);
        wx.setStorageSync('openid', res.value.C_OPENID);
        _this3.save();
      }).catch(function (err) {
        return console.log(err);
      });
    },
    save: function save() {
      var _this4 = this;

      var data = {
        C_NAME: this.NAME,
        C_PHONE: this.PHONE,
        C_OWNERID: this.ownerid,
        C_TYPEID: this.typeid,
        C_END_TIME: this.C_END_TIME,
        C_START_TIME: this.C_START_TIME
      };
      if (data.C_PHONE.length != 11) {
        wx.showToast({
          title: '请输入正确的手机号',
          icon: 'none'
        });
        return false;
      }
      this.$https.request({
        url: this.$interfaces.addUser,
        data: {
          data: this.$datas.getValueObj(0, data)
        },
        method: "post"
      }).then(function (res) {
        console.log(res);
        if (res.requestResult) {
          wx.setStorageSync('userid', res.USERID);
          wx.setStorageSync('loccode', res.LOCCODE);
          wx.setStorageSync('a001id', res.A001ID);
          _this4.isDone = true;
        } else {
          wx.showToast({
            title: '网络出错，稍后再试',
            icon: 'none'
          });
        }
      }).catch(function (err) {
        return console.log(err);
      });
    },
    ImgUpload: function ImgUpload() {
      var that = this;
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function success(res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths;
          that.img = tempFilePaths;
          that.isUpload = true;
          //              console.log(wx.getStorageSync('userid'))
        }
      });
    },
    addImg: function addImg() {
      var that = this;
      that.isUpload = false;
      wx.uploadFile({
        url: that.$interfaces.updateImg, //仅为示例，非真实的接口地址
        filePath: that.img[0],
        name: 'file',
        formData: {
          'USERID': wx.getStorageSync('userid')
        },
        success: function success(res) {
          var data = JSON.parse(res.data);
          //do something
          wx.hideLoading();
          if (data.requestResult && data.queryKey != '') {
            console.log(data);
            wx.showToast({
              title: data.requestValue,
              icon: 'success',
              duration: 100000
            });
            wx.setStorageSync('img', data.PICURL);
            wx.setStorageSync('queryKey', data.queryKey);
            wx.setStorageSync('jobNum', data.jobNum);
            setTimeout(function () {
              var data = {
                C_QUERYKEY: wx.getStorageSync('queryKey'),
                C_JOBNUM: wx.getStorageSync('jobNum'),
                C_USERID: wx.getStorageSync('userid')
              };
              that.$https.request({
                url: that.$interfaces.validateImg,
                data: {
                  data: that.$datas.getValueObj(0, data)
                },
                method: "post"
              }).then(function (res) {
                console.log(res);
                if (res.requestResult) {
                  that.validateflag = true;
                  //                      that.img= wx.getStorageSync('img')
                  wx.showToast({
                    title: res.requestValue,
                    icon: 'success',
                    duration: 2000
                  });
                  if (that.typeid == '02') {
                    //如果是访客清除缓存
                    wx.clearStorageSync();
                    that.fkuploadflag = true;
                  }
                } else {
                  that.validateflag = false;
                  that.validateValue = res.requestValue;
                  wx.removeStorageSync('img');
                  that.img = ['/static/images/addimg.jpg'];
                }
              }).catch(function (err) {
                return console.log(err);
              });
            }, 10000);
          } else {
            wx.showToast({
              title: '上传失败，稍后再试',
              icon: 'none'
            });
          }
        }
      });
    }
  }
});

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isDone && _vm.userid == ''),
      expression: "!isDone && userid==''"
    }]
  }, [_c('img', {
    attrs: {
      "src": "/static/images/user.png",
      "alt": "name"
    }
  }), _vm._v(" 姓名")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isDone && _vm.userid == ''),
      expression: "!isDone && userid==''"
    }],
    staticClass: "boxinput"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.NAME),
      expression: "NAME"
    }],
    attrs: {
      "type": "text",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.NAME)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.NAME = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isDone && _vm.userid == ''),
      expression: "!isDone && userid==''"
    }]
  }, [_c('img', {
    attrs: {
      "src": "/static/images/mobile.png",
      "alt": "name"
    }
  }), _vm._v(" 手机号")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isDone && _vm.userid == ''),
      expression: "!isDone && userid==''"
    }],
    staticClass: "boxinput"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.PHONE),
      expression: "PHONE"
    }],
    attrs: {
      "type": "number",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.PHONE)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.PHONE = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isDone || _vm.userid != ''),
      expression: "isDone || userid!=''"
    }]
  }, [_c('p', [_c('img', {
    attrs: {
      "src": "/static/images/upload-icon.png",
      "alt": "name"
    }
  }), _vm._v(" 请上传照片")]), _vm._v(" "), _c('div', {
    staticClass: "addimg"
  }, [(!_vm.fkuploadflag) ? _c('img', {
    attrs: {
      "src": _vm.img,
      "alt": "addimg",
      "mode": "widthFix",
      "eventid": '2'
    },
    on: {
      "tap": _vm.ImgUpload
    }
  }) : _vm._e(), _vm._v(" "), (_vm.fkuploadflag) ? _c('img', {
    attrs: {
      "src": _vm.img,
      "alt": "addimg",
      "mode": "widthFix"
    }
  }) : _vm._e()])], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isDone || _vm.userid != ''),
      expression: "isDone || userid!=''"
    }],
    staticClass: "login"
  }, [_c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isUpload),
      expression: "isUpload"
    }],
    attrs: {
      "eventid": '3'
    },
    on: {
      "tap": _vm.addImg
    }
  }, [_vm._v("上 传")]), _vm._v(" "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isUpload),
      expression: "!isUpload"
    }],
    staticClass: "grey"
  }, [_vm._v("上 传")])], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isDone && _vm.userid == ''),
      expression: "!isDone && userid==''"
    }],
    staticClass: "login"
  }, [(_vm.NAME != '' && _vm.PHONE != '' && _vm.typeid == '01') ? _c('button', {
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '4'
    },
    on: {
      "getuserinfo": _vm.getUserInfo
    }
  }, [_vm._v("保 存")]) : _vm._e(), _vm._v(" "), (_vm.NAME != '' && _vm.PHONE != '' && _vm.typeid == '02') ? _c('button', {
    attrs: {
      "eventid": '5'
    },
    on: {
      "tap": _vm.save
    }
  }, [_vm._v("保 存")]) : _vm._e(), _vm._v(" "), (_vm.NAME == '' || _vm.PHONE == '' || _vm.typeid == undefined) ? _c('button', {
    staticClass: "grey"
  }, [_vm._v("保 存")]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.validateflag),
      expression: "!validateflag"
    }],
    staticClass: "tip"
  }, [_vm._v(_vm._s(_vm.validateValue))])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-79e20621", esExports)
  }
}

/***/ })

},[130]);