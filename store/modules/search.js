export const state = () => ({
  albums: { items: [] },
  artists: { items: [] }
})

export const getters = {
  albums: state => state.albums,
  artists: state => state.artists
}

export const mutations = {
  setAlbums: (state, albums) => {
    state.albums = albums
  },
  setArtists: (state, artists) => {
    state.artists = artists
  }
}

export const actions = {
  async search(
    { commit, rootGetters },
    { query, type = 'album,artist', store = true }
  ) {
    if (query) {
      const token = rootGetters.token
      this.$axios.setToken(token, 'Bearer')
      const results = await this.$axios.$get('/search', {
        params: {
          q: query,
          type
        }
      })
      if (store) {
        commit('setAlbums', results.albums)
        commit('setArtists', results.artists)
      }
      return results
    } else {
      commit('setAlbums', { items: [] })
      commit('setArtists', { items: [] })
      return null
    }
  }
}
