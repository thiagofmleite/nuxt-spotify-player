<template>
  <div class="album">
    <div class="cover">
      <img :src="cover.url" :alt="album.name" />
    </div>
    <div class="title text-style-small">{{ album.name }}</div>
    <div class="artist text-style-small-dark">{{ artist.name }}</div>
  </div>
</template>
<script>
export default {
  props: {
    album: {
      type: Object,
      required: true
    }
  },
  computed: {
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
  }
}
</style>