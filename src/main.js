import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueAnimateOnScroll from 'vue-animate-onscroll'
 
Vue.use(VueAnimateOnScroll)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
