<template>
  <ol>
    <li v-for="(track, index) in tracks" :key="index">
      <app-track :track="track" />
    </li>
  </ol>
</template>
<script>
import Track from '~/components/Track'

export default {
  components: {
    appTrack: Track
  },
  props: {
    tracks: {
      type: Array,
      default: []
    }
  }
}
</script>