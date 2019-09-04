export const state = () => ({
  artist: {},
  albums: { items: [] }
})

export const getters = {
  artist: state => state.artist,
  albums: state => state.albums
}

export const mutations = {
  setArtist: (state, { artist, albums }) => {
    state.artist = artist
    state.albums = albums || { items: [] }
  }
}

export const actions = {
  setArtist({ commit }, { artist, albums }) {
    commit('setArtist', { artist, albums })
  },
  async getAlbums({ dispatch, rootGetters }, artist) {
    console.info('Getting albums from', artist.name)
    const token = rootGetters.token
    this.$axios.setToken(token, 'Bearer')
    const albums = await this.$axios.$get(`/artists/${artist.id}/albums`)
    dispatch('setArtist', { artist, albums })
    return albums
  }
}
