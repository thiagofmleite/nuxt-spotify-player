<template>
  <div>
    <label class="label text-style-small" for>
      <slot />
    </label>
    <input
      class="input text-style-title"
      type="text"
      placeholder="Comece a escrever..."
      v-model="fieldValue"
    />
  </div>
</template>
<script>
export default {
  props: {
    readOnly: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    fieldValue() {
      this.$emit('input', this.fieldValue)
    }
  },
  data() {
    return {
      fieldValue: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.input {
  width: 100%;
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