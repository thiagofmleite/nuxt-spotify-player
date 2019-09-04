<template>
  <div class="track">
    <div class="track-number text-style-context-dark">{{ track.track_number }}.</div>
    <div class="track-name text-style-context-light">{{ track.name }}</div>
    <div class="track-time text-style-context-dark">{{ duration(track.duration_ms)}}</div>
  </div>
</template>
<script>
import { convertMsToMinutes } from '~/util'
export default {
  props: {
    track: {
      type: Object,
      required: true
    }
  },
  methods: {
    duration(duration_ms) {
      return convertMsToMinutes(duration_ms)
    }
  }
}
</script>
<style lang="scss" scoped>
.track {
  display: flex;
  align-items: stretch;
  width: 100%;
  margin-bottom: 1em;
  &-number {
    flex-grow: 0;
    padding-right: 10px;
  }
  &-name {
    flex-grow: 2;
  }
  &-time {
    flex-grow: 0;
    padding-left: 10px;
  }
}
</style>