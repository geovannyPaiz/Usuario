import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as VueGoogleMaps from 'vue2-google-maps'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue);

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAKS0Ro4waN2Fjck8_OLn1L2ChPveFWxzg',
  },
})

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
