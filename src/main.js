// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import './../node_modules/bootstrap/dist/css/bootstrap.css'
import './../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
import Notification from 'vue-notification'

Vue.use(BootstrapVue)
Vue.use(Notification)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
