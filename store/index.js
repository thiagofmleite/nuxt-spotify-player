export const state = () => ({
  token: ''
})

export const getters = {
  token: state => state.token
}

export const mutations = {
  setToken: (state, token) => {
    state.token = token
  }
}

export const actions = {
  setToken({ commit }, token) {
    commit('setToken', token)
  }
}
