const build = {
  extend(config, ctx) {
    config.devtool = ctx.isDev ? '#source-map' : false
    config.node = {
      fs: 'empty'
    }
  }
}

export default build
