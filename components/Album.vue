<template>
  <div class="album">
    <div class="cover">
      <img src="https://i.scdn.co/image/f1cad0d6974d6236abd07a59106e8450d85cae24" alt />
    </div>
    <div class="title text-style-small">{{ title}}</div>
    <div class="artist text-style-small-dark">{{ artist }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'Album',
      artist: 'Artist'
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