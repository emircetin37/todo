import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import {store} from './store/store'
import { router } from './router'

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),

})
