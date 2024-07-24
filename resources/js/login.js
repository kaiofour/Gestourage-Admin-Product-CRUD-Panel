import Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCountryCode from "vue-country-code-select";
import {routes} from './routes';
import LoginForm from './components/forms/login.vue';

require('./bootstrap');
window.Vue = require('vue');
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueCountryCode);

Vue.directive("focus", {
  inserted: function(el) {
    el.focus();
  },
  update: function(el, binding) {
    var value = binding.value;
    if (value) {
      Vue.nextTick(function() {
        el.focus();
      });
    }
  }
});

const login = new Vue({
    el: '#login',
    render: h => h(LoginForm),
});