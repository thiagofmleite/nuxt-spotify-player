<template>
  <div class="albums-container">
    <h2 class="title text-style-subtitle">
      <slot name="title" />
    </h2>
    <div class="albums">
      <app-album v-for="(album, index) of albums.items" :key="index" :album="album" />
    </div>
  </div>
</template>
<script>
import Album from '~/components/Album'

export default {
  props: {
    albums: {
      type: Object,
      default: { items: [] }
    }
  },
  components: {
    appAlbum: Album
  }
}
</script>
<style scoped lang="scss">
.albums-container {
  margin-bottom: 1em;
  .title {
    margin: 1em 0;
  }
  .albums {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>