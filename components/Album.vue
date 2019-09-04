<template>
  <div class="album">
    <div class="cover">
      <img :src="cover.url" :alt="album.name" />
    </div>
    <div class="title text-style-small">{{ album.name }}</div>
    <div class="artist text-style-small-dark">
      <nuxt-link class="text-style-small-dark" :to="linkToArtist">{{ artist.name }}</nuxt-link>
    </div>
  </div>
</template>
<script>
import { slugify } from '~/util'

export default {
  props: {
    album: {
      type: Object,
      required: true
    }
  },
  computed: {
    linkToArtist() {
      const { name } = this.artist
      return `/albums/${slugify(name)}`
    },
    artist() {
      return this.album.artists[0]
    },
    cover() {
      return this.album.images[1]
    }
  }
}
</script>
<style lang="scss" scoped>
.album {
  flex: 0 0 15%;
  padding: 1em;
  .cover {
    text-align: center;
    margin-bottom: 5px;
    img {
      height: auto;
      width: 100%;
    }
  }
  .title {
    text-align: center;
    margin-bottom: 5px;
  }
  .artist {
    text-align: center;
    margin-bottom: 5px;
    a {
      text-decoration: none;
    }
  }
}
</style>