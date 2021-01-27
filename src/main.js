import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Base file for scss, includes reset and variables //
import '@/assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
