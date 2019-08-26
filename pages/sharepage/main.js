require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(115);
/**
 * Created by 长宝 on 2019/5/28.
 */



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e41208e0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(119);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(116)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e41208e0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\sharepage\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e41208e0", Component.options)
  } else {
    hotAPI.reload("data-v-e41208e0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 116:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index__ = __webpack_require__(118);
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
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      imgurl: '',
      clickflag: '',
      ctimeflag: false,
      START_TIME: '',
      END_TIME: '',
      userid: wx.getStorageSync('userid')
    };
  },
  onLoad: function onLoad(options) {
    var that = this;
    that.typeid = options.typeid;
  },
  onShow: function onShow() {
    var _this = this;

    if (this.typeid == '01') {
      this.clickflag = true;
      this.ctimeflag = true;
      var data = {
        C_TYPEID: this.typeid
      };
      this.$https.request({
        url: this.$interfaces.getShareQRCode,
        data: {
          data: this.$datas.getValueObj(0, data)
        },
        method: "post"
      }).then(function (res) {
        console.log(res.value);
        if (res.requestResult) {
          _this.imgurl = res.value;
        } else {
          wx.showToast({
            title: '网络出错，稍后再试',
            icon: 'none'
          });
        }
      }).catch(function (err) {
        return console.log(err);
      });
    } else {
      this.clickflag = true;
      this.ctimeflag = false;
      this.START_TIME = __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].formatTime(new Date());
      this.END_TIME = __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].formatTime(new Date(new Date().getTime() + 24 * 60 * 60 * 1000));
    }
  },

  methods: {
    bindAgainChange: function bindAgainChange(e) {
      this.START_TIME = e.mp.detail.value;
    },
    bindEndChange: function bindEndChange(e) {
      this.END_TIME = e.mp.detail.value;
    },
    submit: function submit() {
      var _this2 = this;

      var data = {
        C_TYPEID: this.typeid,
        C_START_TIME: this.START_TIME,
        C_END_TIME: this.END_TIME
      };
      if (this.clickflag) {
        this.clickflag = false;
        this.$https.request({
          url: this.$interfaces.getShareQRCode,
          data: {
            data: this.$datas.getValueObj(0, data)
          },
          method: "post"
        }).then(function (res) {
          console.log(res.value);
          if (res.requestResult) {
            _this2.imgurl = res.value;
            _this2.ctimeflag = true;
            _this2.clickflag = true;
          } else {
            wx.showToast({
              title: '网络出错，稍后再试',
              icon: 'none'
            });
            _this2.clickflag = true;
          }
        }).catch(function (err) {
          return console.log(err);
        });
      }
    },
    share: function share() {
      var that = this;
      if (that.clickflag) {
        that.clickflag = false;
        wx.downloadFile({ //下载文件资源到本地，客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径
          url: that.imgurl,
          success: function success(res) {
            // 下载成功后再保存到本地
            __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].savePicToAlbum(res.tempFilePath);
            that.clickflag = true;
          }
        });
      }
    }
  },
  onShareAppMessage: function onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target);
    }
    if (this.typeid == '02') {
      return {
        title: '访客邀请',
        path: "/pages/visitordetail/main?C_OWNERID=" + this.userid + "&C_TYPEID=02&C_START_TIME=" + this.START_TIME + "&C_END_TIME=" + this.END_TIME
      };
    } else {
      return {
        title: '家人邀请',
        path: "/pages/visitordetail/main?C_OWNERID=" + this.userid + "&C_TYPEID=01"
      };
    }
  }
});

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export formatTime */
function formatNumber(n) {
  var str = n.toString();
  return str[1] ? str : '0' + str;
}

function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  var t1 = [year, month, day].map(formatNumber).join('-');
  var t2 = [hour, minute, second].map(formatNumber).join(':');

  return '' + t1;
}

function savePicToAlbum(tempFilePath) {
  var that = this;
  wx.getSetting({
    success: function success(res) {
      if (!res.authSetting['scope.writePhotosAlbum']) {
        wx.authorize({
          scope: 'scope.writePhotosAlbum',
          success: function success() {
            wx.saveImageToPhotosAlbum({
              filePath: tempFilePath,
              success: function success(res) {
                wx.showToast({
                  title: '保存成功'
                });
              },
              fail: function fail(res) {
                console.log(res);
              }
            });
          },
          fail: function fail() {
            // 用户拒绝授权,打开设置页面
            wx.openSetting({
              success: function success(data) {
                console.log("openSetting: success");
              },
              fail: function fail(data) {
                console.log("openSetting: fail");
              }
            });
          }
        });
      } else {
        wx.saveImageToPhotosAlbum({
          filePath: tempFilePath,
          success: function success(res) {
            wx.showToast({
              title: '保存成功'
            });
          },
          fail: function fail(res) {
            console.log(res);
          }
        });
      }
    },
    fail: function fail(res) {
      console.log(res);
    }
  });
}

/* harmony default export */ __webpack_exports__["a"] = ({
  formatNumber: formatNumber,
  formatTime: formatTime,
  savePicToAlbum: savePicToAlbum
});

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [(_vm.ctimeflag) ? _c('div', {
    staticClass: "erwimg"
  }, [_c('img', {
    attrs: {
      "src": _vm.imgurl,
      "alt": "erw",
      "mode": "widthFix"
    }
  })]) : _vm._e(), _vm._v(" "), (!_vm.ctimeflag) ? _c('div', {
    staticClass: "timebox"
  }, [_c('div', {
    staticClass: "skye-cells"
  }, [_c('div', {
    staticClass: "skye-cell-bd"
  }, [_vm._v("开始时间：")]), _vm._v(" "), _c('div', {
    staticClass: "skye-cell-hd"
  }, [_c('picker', {
    attrs: {
      "mode": "date",
      "value": _vm.START_TIME,
      "start": "1900-01-01",
      "end": "2100-01-01",
      "eventid": '0'
    },
    on: {
      "change": _vm.bindAgainChange
    }
  }, [_c('div', [_vm._v(_vm._s(_vm.START_TIME))])])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "skye-cells"
  }, [_c('div', {
    staticClass: "skye-cell-bd"
  }, [_vm._v("到期时间：")]), _vm._v(" "), _c('div', {
    staticClass: "skye-cell-hd"
  }, [_c('picker', {
    attrs: {
      "mode": "date",
      "value": _vm.END_TIME,
      "start": "1900-01-01",
      "end": "2100-01-01",
      "eventid": '1'
    },
    on: {
      "change": _vm.bindEndChange
    }
  }, [_c('div', [_vm._v(_vm._s(_vm.END_TIME))])])], 1)])]) : _vm._e(), _vm._v(" "), (!_vm.ctimeflag) ? _c('div', {
    staticClass: "login"
  }, [_c('button', {
    attrs: {
      "eventid": '2'
    },
    on: {
      "tap": _vm.submit
    }
  }, [_vm._v("确 定 时 间")])], 1) : _vm._e(), _vm._v(" "), (_vm.ctimeflag) ? _c('div', {
    staticClass: "share"
  }, [_c('button', {
    attrs: {
      "eventid": '3'
    },
    on: {
      "tap": _vm.share
    }
  }, [_vm._v("保存二维码")]), _vm._v(" "), _c('button', {
    attrs: {
      "open-type": "share"
    }
  }, [_vm._v("分 享")]), _vm._v(" "), _c('div', {
    staticClass: "clear"
  })], 1) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e41208e0", esExports)
  }
}

/***/ })

},[114]);