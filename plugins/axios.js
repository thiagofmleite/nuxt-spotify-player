export default ({ app }) => {
  app.$axios.defaults.baseURL = 'https://api.spotify.com/v1'
}
