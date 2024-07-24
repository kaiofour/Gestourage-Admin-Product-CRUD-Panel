"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_main_js"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/carousel.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/carousel.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "carousel",
  computed: {},
  data: function data() {
    return {};
  },
  methods: {},
  beforeMount: function beforeMount() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/navbar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/navbar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "navbar",
  computed: {},
  data: function data() {
    return {
      brand: "SIRTON"
    };
  },
  methods: {},
  beforeMount: function beforeMount() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/login.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/login.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "login",
  computed: {},
  data: function data() {
    return {
      loading: false,
      opacity: 0.50,
      blur: "2px",
      show_password: false,
      showIdentificationAlert: false,
      showPasswordAlert: false,
      showBlankAlert: false,
      focus_password: false,
      focus_identification: false,
      auth_attempt: {
        identification: null,
        password: null
      },
      account: {}
    };
  },
  methods: {
    toggle_password: function toggle_password() {
      if (this.show_password == true) {
        this.show_password = false;
      } else if (this.show_password == false) {
        this.show_password = true;
      }

      this.focus_password = true;
    },
    blur_identification: function blur_identification(event) {
      this.focus_identification = false;
    },
    blur_password: function blur_password(event) {
      this.focus_password = false;
    },
    key_identification: function key_identification() {
      this.showIdentificationAlert = false;
      this.showPasswordAlert = false;

      if (this.auth_attempt.identification != null && this.auth_attempt.identification != "") {
        var identification_character_count = this.auth_attempt.identification.length;

        if (identification_character_count > 0) {
          this.showBlankAlert = false;
        }
      }
    },
    key_password: function key_password() {
      this.showIdentificationAlert = false;
      this.showPasswordAlert = false;

      if (this.auth_attempt.password != null && this.auth_attempt.password != "") {
        var password_character_count = this.auth_attempt.password.length;

        if (password_character_count > 0) {
          this.showBlankAlert = false;
        }
      }
    },
    authentication: function authentication() {
      var _this = this;

      if (this.auth_attempt.identification == null || this.auth_attempt.identification == "" || this.auth_attempt.password == null || this.auth_attempt.password == "") {
        this.showIdentificationAlert = false;
        this.showPasswordAlert = false;
        this.showBlankAlert = true;

        if (this.auth_attempt.identification != null && this.auth_attempt.identification != "") {
          this.focus_password = true;
        } else if (this.auth_attempt.password != null && this.auth_attempt.password != "") {
          this.focus_identification = true;
        } else {
          this.focus_identification = true;
        }
      } else {
        this.loading = true;
        axios.post('/login/authentication', this.auth_attempt).then(function (response) {
          _this.loading = false;
          _this.showBlankAlert = false;
          var account = response.data;

          if (account == "Incorrect Password") {
            _this.showPasswordAlert = true;
            _this.auth_attempt.password = null;
            _this.focus_password = true;
          } else if (account == "Invalid Account") {
            _this.showIdentificationAlert = true;
            _this.auth_attempt.password = null;
            _this.focus_identification = true;
          } else {
            _this.account = account;
            location.href = '/home';
          }
        })["catch"](function (error) {
          console.log(error.data);
          _this.loading = false;
        });
      }
    },
    session_check: function session_check() {
      var _this2 = this;

      axios.post('/sirton/session_check').then(function (response) {
        if (response.data == true) {
          location.href = '/home';
        }
      })["catch"](function (error) {
        console.log(error.data);
        _this2.loading = false;
      });
    }
  },
  beforeMount: function beforeMount() {
    this.session_check();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/register.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/register.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "registration",
  computed: {},
  data: function data() {
    return {
      brand: "Company Name",
      account: {
        firstname: null,
        lastname: null
      }
    };
  },
  methods: {
    exampleMethod: function exampleMethod() {}
  },
  beforeMount: function beforeMount() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/carousel.vue?vue&type=template&id=1beb28bd&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/carousel.vue?vue&type=template&id=1beb28bd& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "carousel slide",
    attrs: {
      id: "carouselExampleControls",
      "data-ride": "carousel",
      "data-interval": "3000",
      "data-pause": "hover"
    }
  }, [_c("div", {
    staticClass: "carousel-inner"
  }, [_c("div", {
    staticClass: "carousel-item active"
  }, [_c("b-embed", {
    attrs: {
      type: "iframe",
      aspect: "16by9",
      src: "https://www.youtube.com/embed/9muQTiyzaEY",
      allowfullscreen: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "carousel-item"
  }, [_vm._m(0), _vm._v(" "), _c("img", {
    staticStyle: {
      "max-width": "100%"
    },
    attrs: {
      src: "/img/web_elements/CEBU_DWC2021.jpeg"
    }
  })])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2)]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "carousel-caption d-none d-md-block"
  }, [_c("h2", {
    staticClass: "brand"
  }, [_vm._v("CEBU: Dance Workshop Competition 2021")]), _vm._v(" "), _c("p", [_vm._v("The Core my MDF Productions")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("a", {
    staticClass: "carousel-control-prev",
    attrs: {
      href: "#carouselExampleControls",
      role: "button",
      "data-slide": "prev"
    }
  }, [_c("span", {
    staticClass: "carousel-control-prev-icon",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Previous")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("a", {
    staticClass: "carousel-control-next",
    attrs: {
      href: "#carouselExampleControls",
      role: "button",
      "data-slide": "next"
    }
  }, [_c("span", {
    staticClass: "carousel-control-next-icon",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Next")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/navbar.vue?vue&type=template&id=b1ed0ea6&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/navbar.vue?vue&type=template&id=b1ed0ea6& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("b-navbar", {
    staticClass: "navbar",
    attrs: {
      toggleable: "lg",
      variant: "warning",
      fixed: "top"
    }
  }, [_c("b-navbar-brand", {
    attrs: {
      href: "/"
    }
  }, [_c("b-icon", {
    staticStyle: {
      "margin-right": "10px"
    },
    attrs: {
      icon: "diamond-half"
    }
  }), _c("span", {
    staticClass: "brand"
  }, [_vm._v(_vm._s(_vm.brand))]), _vm._v(" | "), _c("span", {
    staticStyle: {
      "font-size": "13px"
    }
  }, [_vm._v("REAL TIME CLASS STANDING")])], 1), _vm._v(" "), _c("b-navbar-toggle", {
    attrs: {
      target: "nav-collapse"
    }
  }), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "nav-collapse",
      "is-nav": ""
    }
  }, [_c("b-navbar-nav"), _vm._v(" "), _c("b-navbar-nav", {
    staticClass: "ml-auto"
  }, [_c("b-dropdown", {
    attrs: {
      right: "",
      "no-caret": "",
      variant: "none"
    },
    scopedSlots: _vm._u([{
      key: "button-content",
      fn: function fn() {
        return [_c("b-icon", {
          attrs: {
            icon: "person"
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("b-row", [_c("b-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("b-dropdown-item", {
    attrs: {
      href: "/"
    }
  }, [_c("span", [_c("center", [_vm._v("SIGN IN")])], 1)])], 1)], 1)], 1)], 1)], 1)], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/login.vue?vue&type=template&id=954d0fe4&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/login.vue?vue&type=template&id=954d0fe4& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("b-container", [_c("b-row", [_c("b-col", {
    attrs: {
      md: "4"
    }
  }), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("transition", {
    attrs: {
      name: "fade",
      mode: "in-out"
    }
  }, [_c("b-form-group", [[_c("h4", {
    staticClass: "brand"
  }, [_vm._v("SIRTON | LOGIN PORTAL")]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("b-overlay", {
    attrs: {
      show: _vm.loading,
      rounded: "sm",
      opacity: _vm.opacity,
      blur: _vm.blur
    }
  }, [_c("transition", {
    attrs: {
      name: "fade",
      mode: "out-in"
    }
  }, [_c("b-alert", {
    staticClass: "margin-bottom-5px",
    attrs: {
      variant: "danger",
      dismissible: ""
    },
    model: {
      value: _vm.showIdentificationAlert,
      callback: function callback($$v) {
        _vm.showIdentificationAlert = $$v;
      },
      expression: "showIdentificationAlert"
    }
  }, [_c("small", [_c("b-icon", {
    attrs: {
      icon: "exclamation-circle-fill"
    }
  }), _vm._v(" Account is invalid.")], 1)])], 1), _vm._v(" "), _c("transition", {
    attrs: {
      name: "fade",
      mode: "out-in"
    }
  }, [_c("b-alert", {
    staticClass: "margin-bottom-5px",
    attrs: {
      variant: "danger",
      dismissible: ""
    },
    model: {
      value: _vm.showPasswordAlert,
      callback: function callback($$v) {
        _vm.showPasswordAlert = $$v;
      },
      expression: "showPasswordAlert"
    }
  }, [_c("small", [_c("b-icon", {
    attrs: {
      icon: "exclamation-circle-fill"
    }
  }), _vm._v(" Password is incorrect.")], 1)])], 1), _vm._v(" "), _c("transition", {
    attrs: {
      name: "fade",
      mode: "out-in"
    }
  }, [_c("b-alert", {
    staticClass: "margin-bottom-5px",
    attrs: {
      variant: "warning",
      dismissible: ""
    },
    model: {
      value: _vm.showBlankAlert,
      callback: function callback($$v) {
        _vm.showBlankAlert = $$v;
      },
      expression: "showBlankAlert"
    }
  }, [_c("small", [_c("b-icon", {
    attrs: {
      icon: "exclamation-circle-fill",
      variant: "dark"
    }
  }), _vm._v(" Your credentials are not complete.")], 1)])], 1), _vm._v(" "), _c("label", [_vm._v("Email address")]), _vm._v(" "), _c("b-input-group", [_c("b-form-input", {
    directives: [{
      name: "focus",
      rawName: "v-focus",
      value: _vm.focus_identification,
      expression: "focus_identification"
    }],
    attrs: {
      type: "email",
      size: "md",
      title: "Enter email address",
      maxlength: "165",
      placeholder: "Enter university email",
      autofocus: ""
    },
    on: {
      blur: _vm.blur_identification,
      keyup: function keyup($event) {
        return _vm.key_identification();
      }
    },
    model: {
      value: _vm.auth_attempt.identification,
      callback: function callback($$v) {
        _vm.$set(_vm.auth_attempt, "identification", $$v);
      },
      expression: "auth_attempt.identification"
    }
  })], 1), _vm._v(" "), _c("label", {
    staticClass: "margin-top-5px"
  }, [_vm._v("Password")]), _vm._v(" "), _c("b-input-group", [_c("b-form-input", {
    directives: [{
      name: "focus",
      rawName: "v-focus",
      value: _vm.focus_password,
      expression: "focus_password"
    }],
    attrs: {
      type: _vm.show_password ? "text" : "password",
      size: "md",
      "data-toggle": "tooltip",
      title: "Enter password.",
      maxlength: "60"
    },
    on: {
      blur: _vm.blur_password,
      keyup: function keyup($event) {
        return _vm.key_password();
      }
    },
    model: {
      value: _vm.auth_attempt.password,
      callback: function callback($$v) {
        _vm.$set(_vm.auth_attempt, "password", $$v);
      },
      expression: "auth_attempt.password"
    }
  }), _vm._v(" "), _c("b-input-group-prepend", {
    attrs: {
      "is-text": ""
    },
    on: {
      click: _vm.toggle_password
    }
  }, [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_c("b-icon", {
    attrs: {
      icon: _vm.show_password ? "eye-fill" : "eye-slash-fill"
    }
  })], 1)])], 1), _vm._v(" "), _c("b-button", {
    staticClass: "margin-top-10px",
    attrs: {
      type: "submit",
      block: "",
      variant: "warning"
    },
    on: {
      click: function click($event) {
        return _vm.authentication();
      }
    }
  }, [_vm._v("LOGIN")])], 1)]], 2)], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  })], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/register.vue?vue&type=template&id=d62a03e4&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/register.vue?vue&type=template&id=d62a03e4& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "register"
  }, [_c("div", [_c("h1", [_vm._v(_vm._s(_vm.brand))])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-axios */ "./node_modules/vue-axios/dist/vue-axios.esm.min.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/icons/plugin.js");
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
vue__WEBPACK_IMPORTED_MODULE_10__["default"].use(vue_axios__WEBPACK_IMPORTED_MODULE_0__["default"], (axios__WEBPACK_IMPORTED_MODULE_1___default()));
vue__WEBPACK_IMPORTED_MODULE_10__["default"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__.BootstrapVue);
vue__WEBPACK_IMPORTED_MODULE_10__["default"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__.IconsPlugin);
vue__WEBPACK_IMPORTED_MODULE_10__["default"].use((vue_country_code_select__WEBPACK_IMPORTED_MODULE_4___default()));
vue__WEBPACK_IMPORTED_MODULE_10__["default"].directive("focus", {
  inserted: function inserted(el) {
    el.focus();
  },
  update: function update(el, binding) {
    var value = binding.value;

    if (value) {
      vue__WEBPACK_IMPORTED_MODULE_10__["default"].nextTick(function () {
        el.focus();
      });
    }
  }
});
vue__WEBPACK_IMPORTED_MODULE_10__["default"].prototype.$temp = "Global Variable";
var navbar = new vue__WEBPACK_IMPORTED_MODULE_10__["default"]({
  el: '#navbar',
  render: function render(h) {
    return h(_components_elements_navbar_vue__WEBPACK_IMPORTED_MODULE_6__["default"]);
  }
});
var carousel = new vue__WEBPACK_IMPORTED_MODULE_10__["default"]({
  el: '#carousel',
  render: function render(h) {
    return h(_components_elements_carousel_vue__WEBPACK_IMPORTED_MODULE_7__["default"]);
  }
});

/***/ }),

/***/ "./resources/js/components/elements/carousel.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/elements/carousel.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _carousel_vue_vue_type_template_id_1beb28bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel.vue?vue&type=template&id=1beb28bd& */ "./resources/js/components/elements/carousel.vue?vue&type=template&id=1beb28bd&");
/* harmony import */ var _carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel.vue?vue&type=script&lang=js& */ "./resources/js/components/elements/carousel.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _carousel_vue_vue_type_template_id_1beb28bd___WEBPACK_IMPORTED_MODULE_0__.render,
  _carousel_vue_vue_type_template_id_1beb28bd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/elements/carousel.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/elements/navbar.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/elements/navbar.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _navbar_vue_vue_type_template_id_b1ed0ea6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.vue?vue&type=template&id=b1ed0ea6& */ "./resources/js/components/elements/navbar.vue?vue&type=template&id=b1ed0ea6&");
/* harmony import */ var _navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.vue?vue&type=script&lang=js& */ "./resources/js/components/elements/navbar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _navbar_vue_vue_type_template_id_b1ed0ea6___WEBPACK_IMPORTED_MODULE_0__.render,
  _navbar_vue_vue_type_template_id_b1ed0ea6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/elements/navbar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/login.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/forms/login.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _login_vue_vue_type_template_id_954d0fe4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=954d0fe4& */ "./resources/js/components/forms/login.vue?vue&type=template&id=954d0fe4&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/components/forms/login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_954d0fe4___WEBPACK_IMPORTED_MODULE_0__.render,
  _login_vue_vue_type_template_id_954d0fe4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forms/login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/register.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/forms/register.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _register_vue_vue_type_template_id_d62a03e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=d62a03e4& */ "./resources/js/components/forms/register.vue?vue&type=template&id=d62a03e4&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./resources/js/components/forms/register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_d62a03e4___WEBPACK_IMPORTED_MODULE_0__.render,
  _register_vue_vue_type_template_id_d62a03e4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forms/register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/elements/carousel.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/elements/carousel.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./carousel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/carousel.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/elements/navbar.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/elements/navbar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/navbar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/login.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/forms/login.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/register.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/forms/register.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/elements/carousel.vue?vue&type=template&id=1beb28bd&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/elements/carousel.vue?vue&type=template&id=1beb28bd& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_template_id_1beb28bd___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_template_id_1beb28bd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_template_id_1beb28bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./carousel.vue?vue&type=template&id=1beb28bd& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/carousel.vue?vue&type=template&id=1beb28bd&");


/***/ }),

/***/ "./resources/js/components/elements/navbar.vue?vue&type=template&id=b1ed0ea6&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/elements/navbar.vue?vue&type=template&id=b1ed0ea6& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_template_id_b1ed0ea6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_template_id_b1ed0ea6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_template_id_b1ed0ea6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./navbar.vue?vue&type=template&id=b1ed0ea6& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/navbar.vue?vue&type=template&id=b1ed0ea6&");


/***/ }),

/***/ "./resources/js/components/forms/login.vue?vue&type=template&id=954d0fe4&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/forms/login.vue?vue&type=template&id=954d0fe4& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_954d0fe4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_954d0fe4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_954d0fe4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=template&id=954d0fe4& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/login.vue?vue&type=template&id=954d0fe4&");


/***/ }),

/***/ "./resources/js/components/forms/register.vue?vue&type=template&id=d62a03e4&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/forms/register.vue?vue&type=template&id=d62a03e4& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_d62a03e4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_d62a03e4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_d62a03e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./register.vue?vue&type=template&id=d62a03e4& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/register.vue?vue&type=template&id=d62a03e4&");


/***/ })

}]);