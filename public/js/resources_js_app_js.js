"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_app_js"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-axios */ "./node_modules/vue-axios/dist/vue-axios.es5.js");
/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/icons/plugin.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-vue/dist/bootstrap-vue.css */ "./node_modules/bootstrap-vue/dist/bootstrap-vue.css");
/* harmony import */ var vue_country_code_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-country-code-select */ "./node_modules/vue-country-code-select/dist/vue-country-code.js");
/* harmony import */ var vue_country_code_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_country_code_select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes */ "./resources/js/routes.js");
/* harmony import */ var _components_elements_navbar_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/elements/navbar.vue */ "./resources/js/components/elements/navbar.vue");
/* harmony import */ var _components_elements_carousel_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/elements/carousel.vue */ "./resources/js/components/elements/carousel.vue");
/* harmony import */ var _components_forms_login_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/forms/login.vue */ "./resources/js/components/forms/login.vue");
/* harmony import */ var _components_forms_register_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/forms/register.vue */ "./resources/js/components/forms/register.vue");














__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
vue__WEBPACK_IMPORTED_MODULE_10__.default.use(vue_router__WEBPACK_IMPORTED_MODULE_11__.default);
vue__WEBPACK_IMPORTED_MODULE_10__.default.use((vue_axios__WEBPACK_IMPORTED_MODULE_0___default()), (axios__WEBPACK_IMPORTED_MODULE_1___default()));
vue__WEBPACK_IMPORTED_MODULE_10__.default.use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__.BootstrapVue);
vue__WEBPACK_IMPORTED_MODULE_10__.default.use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__.IconsPlugin);
vue__WEBPACK_IMPORTED_MODULE_10__.default.use((vue_country_code_select__WEBPACK_IMPORTED_MODULE_4___default()));
vue__WEBPACK_IMPORTED_MODULE_10__.default.directive("focus", {
  inserted: function inserted(el) {
    el.focus();
  },
  update: function update(el, binding) {
    var value = binding.value;

    if (value) {
      vue__WEBPACK_IMPORTED_MODULE_10__.default.nextTick(function () {
        el.focus();
      });
    }
  }
});
vue__WEBPACK_IMPORTED_MODULE_10__.default.prototype.$temp = "Global Variable";
var router = new vue_router__WEBPACK_IMPORTED_MODULE_11__.default({
  mode: 'history',
  routes: _routes__WEBPACK_IMPORTED_MODULE_5__.routes
});
var navbar = new vue__WEBPACK_IMPORTED_MODULE_10__.default({
  el: '#navbar',
  render: function render(h) {
    return h(_components_elements_navbar_vue__WEBPACK_IMPORTED_MODULE_6__.default);
  }
});
var carousel = new vue__WEBPACK_IMPORTED_MODULE_10__.default({
  el: '#carousel',
  render: function render(h) {
    return h(_components_elements_carousel_vue__WEBPACK_IMPORTED_MODULE_7__.default);
  }
});
var login = new vue__WEBPACK_IMPORTED_MODULE_10__.default({
  el: '#login',
  render: function render(h) {
    return h(_components_forms_login_vue__WEBPACK_IMPORTED_MODULE_8__.default);
  }
});
var register = new vue__WEBPACK_IMPORTED_MODULE_10__.default({
  el: '#register',
  render: function render(h) {
    return h(_components_forms_register_vue__WEBPACK_IMPORTED_MODULE_9__.default);
  }
});

/***/ })

}]);