import Vue from 'vue'
import App from './App.vue'
import elementui from "element-ui"
import  'element-ui/lib/theme-chalk/index.css'
import router from "../public/router.js"
Vue.config.productionTip = false
Vue.use(elementui)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
