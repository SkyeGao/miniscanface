require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([10],{

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(95);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_595507f4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(98);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(96)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-595507f4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_595507f4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-595507f4", Component.options)
  } else {
    hotAPI.reload("data-v-595507f4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 96:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 97:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      iv: '',
      encryptedData: '',
      sessionkey: '',
      loccode: ''
    };
  },
  onLoad: function onLoad(options) {
    //      先判断是否有openid
    //    console.log(options.loccode)
    //    const loccode = options.loccode
    var loccode = 'Q6L3RLY5';
    if (loccode == '' || loccode == undefined) {
      console.log(loccode);
    } else {
      wx.setStorageSync('loccode', loccode);
      this.loccode = loccode;
    }
    if (wx.getStorageSync('openid') != '') {
      if (wx.getStorageSync('userid') != '') {
        wx.showLoading({
          title: '登录中...'
        });
        setTimeout(function () {
          wx.hideLoading();
          wx.switchTab({
            url: "../tindex/main"
          });
        }, 2000);
      } else {
        wx.showLoading({
          title: '注册...'
        });
        setTimeout(function () {
          wx.hideLoading();
          wx.redirectTo({
            url: "../login/main"
          });
        }, 2000);
      }
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
      var _this = this;

      //mpvue中，提供了一个全局小程序对象wx
      wx.login({
        success: function success(res) {
          //console.log(res.code)
          _this.getOpenid(res.code);
        }
      });
    },
    getOpenid: function getOpenid(code) {
      this.$https.request({
        url: this.$interfaces.getOpenid,
        data: {
          data: { code: code, iv: this.iv, encryptedData: this.encryptedData, loccode: this.loccode }
        },
        method: "post"
      }).then(function (res) {
        console.log(res);
        //        this.sessionkey = res.value.sessionkey
        wx.setStorageSync('openid', res.value.C_OPENID);
        wx.setStorageSync('userid', res.value.USERID);
        wx.setStorageSync('a001id', res.value.A001ID);
        if (res.value.C_TYPE_ID == 'A05100_C_TYPE_0000') {
          if (res.value.C_STATUS_ID == '') {
            wx.redirectTo({
              url: '../login/main'
            });
          } else {
            wx.switchTab({
              url: '../tindex/main'
            });
          }
        } else {
          wx.redirectTo({
            url: '../login/main'
          });
        }
      }).catch(function (err) {
        return console.log(err);
      });
    },
    scanCode: function scanCode() {
      wx.scanCode({
        success: function success(res) {
          console.log(res);
        }
      });
    }
  }
});

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_vm._m(0), _vm._v(" "), _c('p', [_vm._v("智能识别系统")]), _vm._v(" "), _c('div', {
    staticClass: "login"
  }, [(_vm.loccode != '') ? _c('button', {
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.getUserInfo
    }
  }, [_vm._v("微 信 登 录")]) : _vm._e(), _vm._v(" "), (_vm.loccode == '') ? _c('button', [_vm._v("请 用 微 信 扫 一 扫 进 入")]) : _vm._e()], 1)], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "inbox"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/logo.png",
      "alt": "logo",
      "mode": "widthFix"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-595507f4", esExports)
  }
}

/***/ })

},[94]);