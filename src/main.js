import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import moment from 'moment'
import _ from 'lodash'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import { ReactiveBoxSizeMixin } from './components/Box'
import 'vuetify/dist/vuetify.min.css'
import './firebase'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueAwesomeSwiper)

Vue.prototype.moment = moment
Vue.prototype._ = _
// Vue.mixin(ReactiveBoxSizeMixin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
