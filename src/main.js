// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  directives: {
    color: function (el, binding) {
      el.style.color = binding.value
    }
  }
})
