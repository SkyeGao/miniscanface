require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_weui_css__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_weui_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_weui_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_skye_css__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_skye_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_skye_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_index__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_interfaces__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_interfaces___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__utils_interfaces__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_https__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_data__ = __webpack_require__(88);









__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_4__store_index__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$interfaces = __WEBPACK_IMPORTED_MODULE_5__utils_interfaces___default.a;
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$https = __WEBPACK_IMPORTED_MODULE_6__utils_https__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$datas = __WEBPACK_IMPORTED_MODULE_7__utils_data__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(42);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(40)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d76f66b", Component.options)
  } else {
    hotAPI.reload("data-v-7d76f66b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 40:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getters__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mutations__ = __webpack_require__(49);
/**
 * Created by 长宝 on 2019/5/23.
 */






__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

var state = {
  isAuthenicated: false,
  user: null,
  openId: '',
  isPhoned: false,
  phonenums: null
};

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  state: state,
  getters: __WEBPACK_IMPORTED_MODULE_2__getters__,
  actions: __WEBPACK_IMPORTED_MODULE_3__actions__,
  mutations: __WEBPACK_IMPORTED_MODULE_4__mutations__
}));

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAuthenicated", function() { return isAuthenicated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openId", function() { return openId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPhoned", function() { return isPhoned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phonenums", function() { return phonenums; });
/**
 * Created by 长宝 on 2019/5/23.
 */
var isAuthenicated = function isAuthenicated(state) {
  return state.isAuthenicated;
};
var user = function user(state) {
  return state.user;
};
var openId = function openId(state) {
  return state.openId;
};
var isPhoned = function isPhoned(state) {
  return state.isPhoned;
};
var phonenums = function phonenums(state) {
  return state.phonenums;
};

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIsAuthenicated", function() { return setIsAuthenicated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOpenId", function() { return setOpenId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIsPhoned", function() { return setIsPhoned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPhonenums", function() { return setPhonenums; });
/**
 * Created by 长宝 on 2019/5/23.
 */
var setIsAuthenicated = function setIsAuthenicated(_ref, data) {
  var commit = _ref.commit;

  commit('setIsAuthenicated', data);
};

var setUser = function setUser(_ref2, data) {
  var commit = _ref2.commit;

  commit('setUser', data);
};

var setOpenId = function setOpenId(_ref3, data) {
  var commit = _ref3.commit;

  commit('setOpenId', data);
};

var setIsPhoned = function setIsPhoned(_ref4, data) {
  var commit = _ref4.commit;

  commit('setIsPhoned', data);
};

var setPhonenums = function setPhonenums(_ref5, data) {
  var commit = _ref5.commit;

  commit('setPhonenums', data);
};

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIsAuthenicated", function() { return setIsAuthenicated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOpenId", function() { return setOpenId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIsPhoned", function() { return setIsPhoned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPhonenums", function() { return setPhonenums; });
/**
 * Created by 长宝 on 2019/5/23.
 */
var setIsAuthenicated = function setIsAuthenicated(state, data) {
  state.isAuthenicated = data;
};

var setUser = function setUser(state, data) {
  state.user = data;
};

var setOpenId = function setOpenId(state, data) {
  state.openId = data;
};
//验证是否绑定手机
var setIsPhoned = function setIsPhoned(state, data) {
  state.isPhoned = data;
};
var setPhonenums = function setPhonenums(state, data) {
  state.phonenums = data;
};

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

/**
 * Created by 长宝 on 2019/5/23.
 */
var domain = 'https://wxxcx1.paisun.net/smartlandmd/wxapp/'; //接口根路径
//   const domain = 'http://192.168.1.30:9090/smartlandtest/wxapp/'//接口根路径
var interfaces = {
  //获取openid的接口
  getOpenid: domain + 'getLogin.bk',
  validateUser: domain + 'validateUser.bk', //户主认证和绑定
  updateImg: domain + 'updateImg.bk', //上传图片
  getFamilyList: domain + 'getFamilyList.bk', //家人授权
  addUser: domain + 'addUser.bk', //同住人或者访客注册
  validateImg: domain + 'validateImg.bk', //认证图片
  confirmUser: domain + 'confirmUser.bk', //业主确认同住人或者访客的接口
  getVisitList: domain + 'getVisitList.bk', //访客授权
  getShareQRCode: domain + 'getShareQRCode.bk', //获取二维码
  getFaceList: domain + 'getFaceList.bk', //进出记录list
  validateOwnerImg: domain + 'validateOwnerImg.bk', //验证上传照片是否通过
  getUserInfoByOpenID: domain + 'getUserInfoByOpenID.bk',
  getHouseList: domain + 'getHouseList.bk' //----  获取房子list
};
module.exports = interfaces;

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);

/**
 * Created by 长宝 on 2019/5/23.
 */
var https = {
  request: function request() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var url = options.url,
        data = options.data,
        header = options.header,
        method = options.method;
    //加载动画

    wx.showLoading({
      title: '加载中...'
    });

    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      wx.request({
        url: url,
        data: data,
        header: header,
        method: method,
        success: function success(res) {
          wx.hideLoading();

          //判断网络
          if (res.statusCode == 404) {
            reject();
            return false;
          } else if (res.statusCode != 200) {
            wx.showToast({
              title: '网络出错，稍后再试',
              icon: 'none'
            });
            return false;
          }
          //成功返回数据
          resolve(res.data);
        },
        fail: function fail(err) {
          //失败
          wx.hideLoading();
          reject(err);
        },
        complete: function complete() {
          wx.hideLoading();
        }
      });
    });
  }
};
/* harmony default export */ __webpack_exports__["a"] = (https);

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by 长宝 on 2019/5/31.
 */
var getValueObj = function getValueObj(page, data) {
  var valueObj = {
    OPENID: wx.getStorageSync('openid'),
    USERID: wx.getStorageSync('userid'),
    GRPCODE: '',
    ORGCODE: '',
    LOCCODE: wx.getStorageSync('loccode'),
    // LOCCODE:'Q6L3RLY5',
    A001ID: wx.getStorageSync('a001id'),
    content: {
      I_PAGENUM: page,
      AVALUE: data
    }
  };
  return valueObj;
};

/* harmony default export */ __webpack_exports__["a"] = ({
  getValueObj: getValueObj
});

/***/ })

},[38]);