<template>
  <div>
    <section>
      <app-albums :albums="albums">
        <template slot="title">{{ artist.name }}</template>
      </app-albums>
    </section>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Albums from '~/components/Albums'

export default {
  middleware: ['getArtistAlbums'],
  components: {
    appAlbums: Albums
  },
  computed: {
    ...mapGetters({
      albums: 'modules/artists/albums',
      artist: 'modules/artists/artist'
    })
  }
}
</script>