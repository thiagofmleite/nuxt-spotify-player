<template>
  <div>
    <label class="label text-style-small" for>
      <slot />
    </label>
    <input class="input text-style-title" type="text" placeholder="Comece a escrever..." />
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.input {
  background-color: transparent;
  border: {
    top: 0;
    left: 0;
    right: 0;
    bottom: 1px solid $gray;
  }
  display: block;
}

.label {
  display: block;
}
</style>