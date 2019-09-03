export const state = () => ({
  albums: { items: [] },
  token: ''
})

export const getters = {
  token: state => state.token,
  albums: state => state.albums
}

export const mutations = {
  setAlbums: (state, albums) => {
    state.albums = albums
  },
  setToken: (state, token) => {
    state.token = token
  }
}

export const actions = {
  setToken({ commit }, token) {
    commit('setToken', token)
  },
  async search({ commit, getters }, query) {
    if (query) {
      const token = getters.token
      this.$axios.setToken(token, 'Bearer')
      const results = await this.$axios.$get('/search', {
        params: {
          q: query,
          type: 'album'
        }
      })
      console.log(results)
      commit('setAlbums', results.albums)
      return results
    } else {
      commit('setAlbums', { items: [] })
      return null
    }
  }
}
