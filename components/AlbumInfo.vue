<template>
  <div class="album-info">
    <div class="album-info-cover" v-if="this.images.length > 0">
      <img class="album-info-cover-image" :src="imageCover" alt />
    </div>
    <div class="album-info-data">
      <div class="name text-style-context-center">{{ name }}</div>
      <div v-if="artists.length > 0" class="artist text-style-small-dark">{{ artist }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    images: {
      type: Array,
      default: []
    },
    artists: {
      type: Array,
      default: []
    },
    name: {
      type: String
    }
  },
  computed: {
    imageCover() {
      return this.images[1].url
    },
    artist() {
      return this.artists[0].name
    }
  }
}
</script>
<style lang="scss" scoped>
.album-info {
  &-cover {
    text-align: center;
    margin-bottom: 1em;
    &-image {
      margin: 0 auto;
      display: block;
    }
  }
  .artist {
    margin-top: 0.5em;
    text-align: center;
  }
}
</style>