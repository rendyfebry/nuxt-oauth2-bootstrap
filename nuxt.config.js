module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'alkemi-fe',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Alkemi - Dead simple page builder' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
  modules: ['@nuxtjs/axios', '@nuxtjs/auth'],
  auth: {
    redirect: {
      callback: '/profile',
    },
    strategies: {
      google: {
        client_id: '720434796508-l0mra6p6e8n2p8ikphraho9vn11jsn99.apps.googleusercontent.com',
      },
      facebook: {
        client_id: '1291731460907199',
        userinfo_endpoint:
          'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday',
        scope: ['public_profile', 'email', 'user_birthday'],
      },
    },
  },
}
