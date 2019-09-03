<template>
  <div>
    <section>
      <app-input>Busque por artistas, álbuns ou músicas</app-input>
    </section>
    <section>
      <app-albums>
        <template slot="title">Álbums buscados recentemente</template>
      </app-albums>
    </section>
  </div>
</template>

<script>
import Input from '~/components/Input'
import Albums from '~/components/Albums'

export default {
  components: {
    appInput: Input,
    appAlbums: Albums
  }
}
</script>
