import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import state from './state'

import Box from './box'
import Home from './home'
import Services from './services'
import People from './people'
import Contact from './contact'
import Workshop from './workshop'
import Resources from './resources'
import Portfolio from './portfolio'

Vue.use(Vuex)

const store = new Vuex.Store({
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
})
store.registerModule('box', Box)
store.registerModule('home', Home)
store.registerModule('services', Services)
store.registerModule('people', People)
store.registerModule('contact', Contact)
store.registerModule('workshop', Workshop)
store.registerModule('resources', Resources)
store.registerModule('portfolio', Portfolio)

export default store
