import { SORT_CARDS } from './mutation-types'

const mutations = {
  [SORT_CARDS]: function(state, activeTag) {
    state.cards.push(state.cards.shift())
  }
}
export default mutations
