require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(121);
/**
 * Created by 长宝 on 2019/5/23.
 */



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_07e7b4d2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(124);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(122)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-07e7b4d2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_07e7b4d2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\tindex\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-07e7b4d2", Component.options)
  } else {
    hotAPI.reload("data-v-07e7b4d2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 122:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 123:
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
      picurl: '',
      loccodeflag: true,
      title: ''
    };
  },
  onLoad: function onLoad() {},
  onShow: function onShow() {
    var _this = this;

    if (wx.getStorageSync('loccode') == '') {
      wx.showToast({
        title: '小区信息错误，请重新扫码',
        icon: 'none',
        duration: 9999999
      });
      this.loccodeflag = false;
    } else {
      this.loccodeflag = true;
      this.$https.request({
        url: this.$interfaces.validateOwnerImg,
        data: {
          data: this.$datas.getValueObj(0, '')
        },
        method: "post"
      }).then(function (res) {
        console.log(res);
        if (res.requestResult) {
          _this.picurl = res.picurl;
          _this.title = res.value.A001NAME;
        } else {
          wx.showToast({
            title: res.requestValue,
            icon: 'none',
            duration: 2000
          });
          _this.title = res.value.A001NAME;
          _this.picurl = '';
        }
      }).catch(function (err) {
        return console.log(err);
      });
    }
  },

  methods: {
    Toupload: function Toupload() {
      wx.navigateTo({
        url: '../upload/main?picurl=' + this.picurl
      });
    },
    Tofamilysq: function Tofamilysq() {
      wx.navigateTo({
        url: '../familysq/main'
      });
    },
    Tovisitorsq: function Tovisitorsq() {
      wx.navigateTo({
        url: '../visitorsq/main'
      });
    },
    Tojcrecord: function Tojcrecord() {
      wx.navigateTo({
        url: '../jcrecord/main'
      });
    }
  }
});

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('p', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
    staticClass: "skye-grids"
  }, [(_vm.loccodeflag) ? _c('div', {
    staticClass: "left skye-grid",
    attrs: {
      "eventid": '0'
    },
    on: {
      "tap": _vm.Tofamilysq
    }
  }, [_c('div', {
    staticClass: "skye-grid-but"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/jrsq.png",
      "alt": "家人授权"
    }
  }), _vm._v(" "), _c('p', [_vm._v("家人授权")])], 1)]) : _vm._e(), _vm._v(" "), (!_vm.loccodeflag) ? _c('div', {
    staticClass: "left skye-grid"
  }, [_c('div', {
    staticClass: "skye-grid-but"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/jrsq.png",
      "alt": "家人授权"
    }
  }), _vm._v(" "), _c('p', [_vm._v("家人授权")])], 1)]) : _vm._e(), _vm._v(" "), (_vm.loccodeflag) ? _c('div', {
    staticClass: "left skye-grid",
    attrs: {
      "eventid": '1'
    },
    on: {
      "tap": _vm.Tovisitorsq
    }
  }, [_c('div', {
    staticClass: "skye-grid-but"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/fksq.png",
      "alt": "访客授权"
    }
  }), _vm._v(" "), _c('p', [_vm._v("访客授权")])], 1)]) : _vm._e(), _vm._v(" "), (!_vm.loccodeflag) ? _c('div', {
    staticClass: "left skye-grid"
  }, [_c('div', {
    staticClass: "skye-grid-but"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/fksq.png",
      "alt": "访客授权"
    }
  }), _vm._v(" "), _c('p', [_vm._v("访客授权")])], 1)]) : _vm._e(), _vm._v(" "), (_vm.loccodeflag) ? _c('div', {
    staticClass: "left skye-grid",
    attrs: {
      "eventid": '2'
    },
    on: {
      "tap": _vm.Tojcrecord
    }
  }, [_c('div', {
    staticClass: "skye-grid-but"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/record.png",
      "alt": "进出记录"
    }
  }), _vm._v(" "), _c('p', [_vm._v("进出记录")])], 1)]) : _vm._e(), _vm._v(" "), (!_vm.loccodeflag) ? _c('div', {
    staticClass: "left skye-grid"
  }, [_c('div', {
    staticClass: "skye-grid-but"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/record.png",
      "alt": "进出记录"
    }
  }), _vm._v(" "), _c('p', [_vm._v("进出记录")])], 1)]) : _vm._e(), _vm._v(" "), (_vm.loccodeflag) ? _c('div', {
    staticClass: "left skye-grid",
    attrs: {
      "eventid": '3'
    },
    on: {
      "tap": _vm.Toupload
    }
  }, [_c('div', {
    staticClass: "skye-grid-but"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/upload.png",
      "alt": "上传图片"
    }
  }), _vm._v(" "), _c('p', [_vm._v("上传照片")])], 1)]) : _vm._e(), _vm._v(" "), (!_vm.loccodeflag) ? _c('div', {
    staticClass: "left skye-grid"
  }, [_c('div', {
    staticClass: "skye-grid-but"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/upload.png",
      "alt": "上传图片"
    }
  }), _vm._v(" "), _c('p', [_vm._v("上传照片")])], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "clear"
  })])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-07e7b4d2", esExports)
  }
}

/***/ })

},[120]);