<template>
  <aside class="sidebar">
    <nuxt-link to="/">
      <div class="logo">
        <div class="logo-fill"></div>
        <img class="logo-img" src="~assets/images/spotify-logo.svg" alt="Spotify" />
      </div>
    </nuxt-link>
  </aside>
</template>
<style lang="scss" scoped>
.sidebar {
  margin: 2em;
  .logo {
    width: 48px;
    height: 48px;
    position: relative;
    &-img {
      width: 48px;
      height: 48px;
      position: absolute;
    }
    &-fill {
      background-color: $white;
      border-radius: 49%;
      height: 90%;
      width: 90%;
      position: absolute;
      top: 2px;
      left: 2px;
    }
  }
}
</style>
