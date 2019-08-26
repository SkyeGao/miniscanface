require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([11],{

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(90);
/**
 * Created by 长宝 on 2019/5/23.
 */



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_81a67514_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(93);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(91)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-81a67514"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_81a67514_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\familysq\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-81a67514", Component.options)
  } else {
    hotAPI.reload("data-v-81a67514", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 91:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 92:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      familylist: {},
      pageIndex: 1,
      sqflag: true
    };
  },
  onShow: function onShow() {
    var _this = this;

    this.pageIndex = 1;
    this.$https.request({
      url: this.$interfaces.getUserInfoByOpenID,
      data: {
        data: this.$datas.getValueObj(0, '')
      },
      method: "post"
    }).then(function (res) {
      console.log(res);
      if (res.requestResult) {
        if (res.value.C_TYPE_ID == 'A05100_C_TYPE_0001') {
          wx.showToast({
            title: '您没有该权限',
            icon: 'none',
            duration: 3000
          });
          _this.sqflag = false;
        } else {
          if (res.value.C_STATUS_ID == 'A05100_C_STATUS_0004') {
            _this.$https.request({
              url: _this.$interfaces.getFamilyList,
              data: {
                data: _this.$datas.getValueObj(_this.pageIndex, '')
              },
              method: "post"
            }).then(function (res) {
              console.log(res);
              if (res.requestResult) {
                _this.familylist = res.value;
                _this.sqflag = true;
              } else {
                wx.showToast({
                  title: '您无此权限',
                  icon: 'none'
                });
                _this.sqflag = false;
              }
            }).catch(function (err) {
              return console.log(err);
            });
          } else {
            wx.showToast({
              title: '请让物业授权',
              icon: 'none',
              duration: 3000
            });
            _this.sqflag = false;
          }
        }
      } else {
        wx.showToast({
          title: '网络出错，稍后再试',
          icon: 'none'
        });
        _this.sqflag = false;
      }
    }).catch(function (err) {
      return console.log(err);
    });
  },

  methods: {
    confirmsq: function confirmsq(id, statusid) {
      var _this2 = this;

      var data = {
        C_PANDINGID: id,
        C_STATUS: statusid,
        C_START_TIME: '',
        C_END_TIME: ''
      };
      this.$https.request({
        url: this.$interfaces.confirmUser,
        data: {
          data: this.$datas.getValueObj(0, data)
        },
        method: "post"
      }).then(function (res) {
        if (res.requestResult) {
          _this2.$https.request({
            url: _this2.$interfaces.getFamilyList,
            data: {
              data: _this2.$datas.getValueObj(1, '')
            },
            method: "post"
          }).then(function (res) {
            if (res.requestResult) {
              _this2.familylist = res.value;
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
          wx.showToast({
            title: '网络出错，稍后再试',
            icon: 'none'
          });
        }
      }).catch(function (err) {
        return console.log(err);
      });
    },
    cancel: function cancel(id, statusid) {
      var _this3 = this;

      var data = {
        C_PANDINGID: id,
        C_STATUS: statusid,
        C_START_TIME: '',
        C_END_TIME: ''
      };
      this.$https.request({
        url: this.$interfaces.confirmUser,
        data: {
          data: this.$datas.getValueObj(0, data)
        },
        method: "post"
      }).then(function (res) {
        if (res.requestResult) {
          _this3.$https.request({
            url: _this3.$interfaces.getFamilyList,
            data: {
              data: _this3.$datas.getValueObj(1, '')
            },
            method: "post"
          }).then(function (res) {
            if (res.requestResult) {
              _this3.familylist = res.value;
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
          wx.showToast({
            title: '网络出错，稍后再试',
            icon: 'none'
          });
        }
      }).catch(function (err) {
        return console.log(err);
      });
    },
    Tosharepage: function Tosharepage() {
      wx.navigateTo({
        url: '../sharepage/main?typeid=01'
      });
    }
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function onReachBottom() {
    var that = this;
    ++that.pageIndex;
    console.log(that.pageIndex);
    this.$https.request({
      url: this.$interfaces.getFamilyList,
      data: {
        data: this.$datas.getValueObj(that.pageIndex, '')
      },
      method: "post"
    }).then(function (res) {
      //          console.log(res)
      if (res.requestResult) {
        var newarr = that.familylist;
        //var arr = newarr.push(res.data.content.list)
        for (var i = 0; i < res.value.length; i++) {
          newarr.push(res.value[i]);
        }
        that.familylist = newarr;
      } else {
        wx.showToast({
          title: '网络出错，稍后再试',
          icon: 'none'
        });
      }
    }).catch(function (err) {
      return console.log(err);
    });
  }
});

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('div', {
    staticClass: "header"
  }, [_vm._v("授权列表")]), _vm._v(" "), _vm._l((_vm.familylist), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "sqlist"
    }, [_c('div', {
      staticClass: "skye-flex"
    }, [_c('div', {
      staticClass: "left skye-flex-col6"
    }, [_vm._v(_vm._s(item.NAME))]), _vm._v(" "), (item.STATUSID == 'A05100_C_STATUS_0002' || item.STATUSID == 'A05100_C_STATUS_0005') ? _c('div', {
      staticClass: "right skye-flex-col3"
    }, [_c('button', {
      staticClass: "yes",
      attrs: {
        "size": "mini",
        "eventid": '0_' + index
      },
      on: {
        "tap": function($event) {
          _vm.confirmsq(item.ID, 'APPROVE')
        }
      }
    }, [_vm._v("授权")])], 1) : _vm._e(), _vm._v(" "), (item.STATUSID == 'A05100_C_STATUS_0004') ? _c('div', {
      staticClass: "right skye-flex-col3"
    }, [_c('button', {
      staticClass: "no",
      attrs: {
        "size": "mini",
        "eventid": '1_' + index
      },
      on: {
        "tap": function($event) {
          _vm.cancel(item.ID, 'REJECT')
        }
      }
    }, [_vm._v("取消")])], 1) : _vm._e(), _vm._v(" "), (item.STATUSID == 'A05100_C_STATUS_0000') ? _c('div', {
      staticClass: "right skye-flex-col3"
    }, [_vm._v("\n          未绑定\n      ")]) : _vm._e(), _vm._v(" "), (item.STATUSID == 'A05100_C_STATUS_0001') ? _c('div', {
      staticClass: "right skye-flex-col3"
    }, [_vm._v("\n        已上传\n      ")]) : _vm._e(), _vm._v(" "), (item.STATUSID == 'A05100_C_STATUS_0003') ? _c('div', {
      staticClass: "right skye-flex-col3"
    }, [_vm._v("\n        同步失败\n      ")]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "clear"
    })])])
  }), _vm._v(" "), (_vm.sqflag) ? _c('div', {
    staticClass: "invitebut",
    attrs: {
      "eventid": '2'
    },
    on: {
      "tap": _vm.Tosharepage
    }
  }, [_vm._v("\n    邀 请\n  ")]) : _vm._e()], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-81a67514", esExports)
  }
}

/***/ })

},[89]);