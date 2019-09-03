<template>
  <div id="modal" class="modal" :class="activeClass">
    <div class="modal-content">
      <form @submit.prevent="setToken(newToken)">
        <div class="form-field">
          <label>Informe um token</label>
          <input type="text" v-model="newToken" />
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      token: 'token'
    }),
    activeClass() {
      if (!this.token) {
        return 'show'
      }
      return 'hide'
    }
  },
  methods: {
    ...mapActions({
      setToken: 'setToken'
    })
  },
  data() {
    return {
      newToken: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  &.show {
    display: block;
  }
  &.hide {
    display: none;
  }
}

.modal-content {
  background-color: $black;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
</style>