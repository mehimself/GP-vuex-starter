import { SET_USER, SET_IS_AUTHENTICATED, SET_ACTIVE_TAG } from './mutation-types'

const mutations = {
  [SET_USER](state, payload) {
    state.user = payload
  },
  [SET_IS_AUTHENTICATED](state, payload) {
    state.isAuthenticated = payload
  },
  [SET_ACTIVE_TAG](state, {routeName, value}) {
    state.activeTag = value
  }
}

export default mutations
