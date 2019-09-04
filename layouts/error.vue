<template>
  <div>
    <h1 class="text-style-title">Error</h1>
    <p class="text-style-subtitle">{{ error.message }}</p>
  </div>
</template>
<script>
export default {
  props: ['error'],
  layout: 'default'
}
</script>