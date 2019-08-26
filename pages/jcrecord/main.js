require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([9],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_cc0ab504_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(103);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(101)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-cc0ab504"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_cc0ab504_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\jcrecord\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cc0ab504", Component.options)
  } else {
    hotAPI.reload("data-v-cc0ab504", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 101:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 102:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      recordlist: {},
      pageIndex: 1
    };
  },
  onLoad: function onLoad(options) {
    var _this = this;

    this.$https.request({
      url: this.$interfaces.getFaceList,
      data: {
        data: this.$datas.getValueObj(this.pageIndex, '')
      },
      method: "post"
    }).then(function (res) {
      console.log(res.value);
      if (res.requestResult) {
        _this.recordlist = res.value;
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

  methods: {
    previewImg: function previewImg(img) {
      wx.previewImage({
        current: '', // 当前显示图片的http链接
        urls: [img] // 需要预览的图片http链接列表
      });
    }
  },
  onReachBottom: function onReachBottom() {
    var that = this;
    ++that.pageIndex;
    console.log(that.pageIndex);
    this.$https.request({
      url: this.$interfaces.getFaceList,
      data: {
        data: this.$datas.getValueObj(that.pageIndex, '')
      },
      method: "post"
    }).then(function (res) {
      //          console.log(res)
      if (res.requestResult) {
        var newarr = that.recordlist;
        //var arr = newarr.push(res.data.content.list)
        for (var i = 0; i < res.value.length; i++) {
          newarr.push(res.value[i]);
        }
        that.recordlist = newarr;
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

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('div', {
    staticClass: "header"
  }, [_vm._v("进出列表")]), _vm._v(" "), _vm._l((_vm.recordlist), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('div', {
      staticClass: "skye-flex",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "tap": function($event) {
          _vm.previewImg(item.PICURL)
        }
      }
    }, [_c('div', {
      staticClass: "left skye-flex-col4"
    }, [_vm._v(_vm._s(item.TIME))]), _vm._v(" "), _c('div', {
      staticClass: "left skye-flex-col5 textcenter"
    }, [_vm._v(_vm._s(item.POSITION))]), _vm._v(" "), _c('div', {
      staticClass: "left skye-flex-col3"
    }, [_vm._v(_vm._s(item.NAME))]), _vm._v(" "), _c('div', {
      staticClass: "clear"
    })])])
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-cc0ab504", esExports)
  }
}

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(100);
/**
 * Created by 长宝 on 2019/5/23.
 */



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ })

},[99]);