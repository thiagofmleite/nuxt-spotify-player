<template>
  <div class="container-full">
    <app-modal />
    <app-aside />
    <main class="main">
      <nav class="back">
        <a class="text-style-medium" @click.prevent="$router.back()">&lt; Voltar</a>
      </nav>
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
  .back {
    padding: 1em 0;
    a {
      cursor: pointer;
      text-decoration: none;
      display: block;
    }
  }
}
</style>