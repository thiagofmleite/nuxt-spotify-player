export default async function({ route, error, app, store }) {
  try {
    const artistName = route.params.artist.replace(/-/g, ' ')
    const results = await store.dispatch('search/search', {
      query: artistName,
      type: 'artist'
    })

    const artist = results.artists.items[0]
    const albums = await store.dispatch('artists/getAlbums', artist)
  } catch (e) {
    console.error(e)
    store.dispatch('setToken', null)
    error({
      message: e.message
    })
  }
}
