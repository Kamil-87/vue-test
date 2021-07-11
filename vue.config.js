module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/vue-test/'
      : '/',

  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/_variables.scss";`
      }
    }
  }
}
