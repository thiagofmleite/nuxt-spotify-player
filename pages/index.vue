<template>
  <div>
    <section>
      <app-search-input @input="doSearch">Busque por artistas, álbuns ou músicas</app-search-input>
    </section>
    <section>
      <app-albums :albums="albums">
        <template slot="title">Álbums buscados recentemente</template>
      </app-albums>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SearchInput from '~/components/SearchInput'
import Albums from '~/components/Albums'

export default {
  components: {
    appSearchInput: SearchInput,
    appAlbums: Albums
  },
  computed: {
    ...mapGetters({
      albums: 'albums'
    })
  },
  methods: {
    ...mapActions({
      search: 'search'
    }),
    async doSearch(query) {
      try {
        this.query = query
        this.isLoading = true
        console.info('Searching for:', query)
        const results = await this.search(query)
      } catch (error) {
        console.error(error)
      } finally {
        this.isLoading = false
      }
    }
  },
  data() {
    return {
      isLoading: false,
      query: ''
    }
  }
}
</script>
