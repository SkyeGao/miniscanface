require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([8],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(105);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6225bdcb_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(108);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(106)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6225bdcb_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\login\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6225bdcb", Component.options)
  } else {
    hotAPI.reload("data-v-6225bdcb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 106:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 107:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      ADDRESSID: '',
      ADDRESS: '',
      CREADITCARD: '',
      PHONE: '',
      NAME: '',
      bindSource: [],
      hideScroll: true,
      arrayHeight: 0,
      adapterSource: []
    };
  },

  methods: {
    IsLogined: function IsLogined() {
      var data = {
        C_NAME: this.NAME,
        C_CODE: this.CREADITCARD,
        C_PHONE: this.PHONE,
        C_ADDRESSID: this.ADDRESSID,
        OPENID: wx.getStorageSync('openid')
      };
      if (data.C_NAME != '' && data.C_PHONE != '' && this.ADDRESS != '') {
        if (data.ADDRESSID == '') {
          wx.showToast({
            title: '请选择房产信息',
            icon: 'none'
          });
          return false;
        }
        this.$https.request({
          url: this.$interfaces.validateUser,
          data: {
            data: this.$datas.getValueObj(0, data)
          },
          method: "post"
        }).then(function (res) {
          console.log(res);
          if (res.requestResult) {
            wx.setStorageSync('userid', res.USERID);
            wx.setStorageSync('a001id', res.A001ID);
            wx.showLoading({
              title: '登录中...'
            });
            setTimeout(function () {
              wx.hideLoading();
              wx.switchTab({
                url: "../tindex/main"
              });
            }, 1000);
          } else {
            //requestValue
            wx.showToast({
              title: res.requestValue,
              icon: 'none'
            });
          }
        }).catch(function (err) {
          return console.log(err);
        });
      } else {
        wx.showToast({
          title: '请填写信息',
          icon: 'none'
        });
      }
    },
    itemtap: function itemtap(e) {
      //        console.log(e)
      this.ADDRESSID = e.mp.currentTarget.id;
      this.ADDRESS = e.mp.currentTarget.dataset.name;
      this.hideScroll = true;
      this.bindSource = [];
    },
    bindinput: function bindinput(e) {
      var _this = this;

      //console.log(e.mp.detail.value)
      var prefix = e.mp.detail.value;
      var data = {
        C_NAME: prefix
      };
      this.$https.request({
        url: this.$interfaces.getHouseList,
        data: {
          data: this.$datas.getValueObj(0, data)
        },
        method: "post"
      }).then(function (res) {
        console.log(res);
        if (res.requestResult) {
          _this.adapterSource = res.value;
          // 如果匹配结果存在，那么将其返回，相反则返回空数组
          if (res.value.length != 0) {
            // 匹配结果存在，显示自动联想词下拉列表
            _this.hideScroll = false, _this.bindSource = res.value, _this.arrayHeight = res.value.length * 71;
          } else {
            // 匹配无结果，不现实下拉列表
            _this.hideScroll = true, _this.bindSource = [];
          }
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
  }
});

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('p', [_c('img', {
    attrs: {
      "src": "/static/images/mark-fill.png",
      "alt": "name"
    }
  }), _vm._v(" 住址 "), _c('span', {
    staticClass: "red"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "boxinput"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.ADDRESS),
      expression: "ADDRESS"
    }],
    attrs: {
      "type": "text",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.ADDRESS)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.ADDRESS = $event.target.value
      }, _vm.bindinput]
    }
  })]), _vm._v(" "), _c('scroll-view', {
    staticClass: "scrollview",
    style: (_vm.arrayHeight > 340 ? 'height:340rpx' : ''),
    attrs: {
      "scroll-y": "true",
      "hidden": _vm.hideScroll
    }
  }, _vm._l((_vm.bindSource), function(item, index) {
    return _c('view', {
      key: index
    }, [_c('view', {
      staticClass: "itemview",
      attrs: {
        "id": item.ID,
        "data-name": item.ADDRESS,
        "hover-class": "itemhover",
        "eventid": '1_' + index
      },
      on: {
        "tap": _vm.itemtap
      }
    }, [_vm._v(_vm._s(item.ADDRESS))])])
  })), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/static/images/user.png",
      "alt": "name"
    }
  }), _vm._v(" 业主姓名 "), _c('span', {
    staticClass: "red"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
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
      "eventid": '2'
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
  })]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/static/images/mobile.png",
      "alt": "name"
    }
  }), _vm._v(" 手机号 "), _c('span', {
    staticClass: "red"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
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
      "eventid": '3'
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
  })]), _vm._v(" "), _c('p', [_c('img', {
    staticStyle: {
      "width": "2em"
    },
    attrs: {
      "src": "/static/images/ID.png",
      "alt": "name"
    }
  }), _vm._v(" 身份证号")]), _vm._v(" "), _c('div', {
    staticClass: "boxinput"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.CREADITCARD),
      expression: "CREADITCARD"
    }],
    attrs: {
      "type": "idcard",
      "eventid": '4'
    },
    domProps: {
      "value": (_vm.CREADITCARD)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.CREADITCARD = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "login"
  }, [_c('button', {
    attrs: {
      "eventid": '5'
    },
    on: {
      "tap": _vm.IsLogined
    }
  }, [_vm._v("提 交")])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6225bdcb", esExports)
  }
}

/***/ })

},[104]);