import Vue from 'vue'

import store from './store'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import 'vue-material/dist/theme/default.css'

import App from './App.vue'

Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')