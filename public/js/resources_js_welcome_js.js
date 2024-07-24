"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_welcome_js"],{

/***/ "./resources/js/welcome.js":
/*!*********************************!*\
  !*** ./resources/js/welcome.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-axios */ "./node_modules/vue-axios/dist/vue-axios.es5.js");
/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/icons/plugin.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-vue/dist/bootstrap-vue.css */ "./node_modules/bootstrap-vue/dist/bootstrap-vue.css");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ "./resources/js/routes.js");
/* harmony import */ var _components_navbar_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar.vue */ "./resources/js/components/navbar.vue");
/* harmony import */ var _components_carousel_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/carousel.vue */ "./resources/js/components/carousel.vue");











__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
vue__WEBPACK_IMPORTED_MODULE_7__.default.use(vue_router__WEBPACK_IMPORTED_MODULE_8__.default);
vue__WEBPACK_IMPORTED_MODULE_7__.default.use((vue_axios__WEBPACK_IMPORTED_MODULE_0___default()), (axios__WEBPACK_IMPORTED_MODULE_1___default()));
vue__WEBPACK_IMPORTED_MODULE_7__.default.use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__.BootstrapVue);
vue__WEBPACK_IMPORTED_MODULE_7__.default.use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__.IconsPlugin);
vue__WEBPACK_IMPORTED_MODULE_7__.default.directive("focus", {
  inserted: function inserted(el) {
    el.focus();
  },
  update: function update(el, binding) {
    var value = binding.value;

    if (value) {
      vue__WEBPACK_IMPORTED_MODULE_7__.default.nextTick(function () {
        el.focus();
      });
    }
  }
});
vue__WEBPACK_IMPORTED_MODULE_7__.default.prototype.$temp = "Global Variable";
var router = new vue_router__WEBPACK_IMPORTED_MODULE_8__.default({
  mode: 'history',
  routes: _routes__WEBPACK_IMPORTED_MODULE_4__.routes
});
var navbar = new vue__WEBPACK_IMPORTED_MODULE_7__.default({
  el: '#navbar',
  render: function render(h) {
    return h(_components_navbar_vue__WEBPACK_IMPORTED_MODULE_5__.default);
  }
});
var carousel = new vue__WEBPACK_IMPORTED_MODULE_7__.default({
  el: '#carousel',
  render: function render(h) {
    return h(_components_carousel_vue__WEBPACK_IMPORTED_MODULE_6__.default);
  }
});

/***/ })

}]);