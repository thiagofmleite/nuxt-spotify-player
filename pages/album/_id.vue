<template>
  <div class="album-single">
    <div class="album-single-info">
      <app-album-info :name="name" :images="images" :artists="artists" />
    </div>
    <div class="album-single-tracks">
      <app-tracks :tracks="tracks.items" />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import Tracks from '~/components/Tracks'
import AlbumInfo from '~/components/AlbumInfo'

export default {
  components: {
    appTracks: Tracks,
    appAlbumInfo: AlbumInfo
  },
  computed: {
    ...mapGetters({
      token: 'token'
    })
  },
  methods: {
    ...mapActions({
      setToken: 'setToken'
    })
  },
  data() {
    return {
      tracks: { items: [] },
      name: '',
      images: [],
      artists: []
    }
  },
  mounted: async function() {
    try {
      this.$axios.setToken(this.token, 'Bearer')
      const id = this.$route.params.id
      const albumData = await this.$axios.$get(`/albums/${id}`)
      this.tracks = albumData.tracks
      this.images = albumData.images
      this.artists = albumData.artists
      this.name = albumData.name
    } catch (error) {
      console.error(error)
      this.$nuxt.error({
        message: 'Ocorreu um erro'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.album-single {
  display: flex;
  align-items: stretch;
  &-tracks {
    flex-grow: 2;
  }
  &-info {
    flex-grow: 1;
  }
}

@media (max-width: 760px) {
  .album-single {
    display: block;
  }
}
</style>