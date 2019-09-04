<template>
  <div class="album">
    <div class="cover">
      <nuxt-link :to="linkToAlbum">
        <img :src="cover.url" :alt="album.name" />
      </nuxt-link>
    </div>
    <div class="title">
      <nuxt-link class="text-style-small" :to="linkToAlbum">{{ album.name }}</nuxt-link>
    </div>
    <div class="artist text-style-small-dark">
      <nuxt-link
        class="text-style-small-dark"
        :title="'Veja todos os álbums de ' + artist.name"
        :to="linkToArtist"
      >{{ artist.name }}</nuxt-link>
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
    linkToAlbum() {
      const { id } = this.album
      return `/album/${id}`
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
  @media (max-width: 760px) {
    flex: 0 0 90%;
  }
  padding: 1em;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
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
    a {
      text-decoration: none;
    }
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