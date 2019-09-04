<template>
  <div class="container-full">
    <app-modal />
    <app-aside />
    <main class="main">
      <nuxt />
    </main>
  </div>
</template>
<script>
import Aside from '~/components/Aside'
import TokenModal from '~/components/TokenModal'
export default {
  components: {
    appAside: Aside,
    appModal: TokenModal
  }
}
</script>
<style lang="scss" scoped>
.container-full {
  display: flex;
  align-items: stretch;
}
.main {
  box-sizing: border-box;
  padding: 4em 1em 0;
  flex-grow: 2;
}
</style>