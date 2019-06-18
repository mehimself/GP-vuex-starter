const getters = {
  isAuthenticated: (state) => state.user !== null && state.user !== undefined
}

export default getters
