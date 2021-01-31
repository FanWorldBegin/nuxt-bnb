export default {
	components: true,
	head: {
		titleTemplate: "Mastering Nuxt: %s",
		htmlAttrs: {
				lang: "en"
		},
		bodyAttrs:{
				class: ["my-style"]
		},
		meta: [{
				charset: "utf-8",
		}]
	},
	router: {
		prefetchLinks: false
	},
	plugins: [
		// {
		// 	src: '~plugins/maps.client.js',
		// 	mode: 'client', //名称中已经声明
		// }
		'~plugins/maps.client.js',
		'~plugins/dataApi.js'
  ],
  modules: [
    ['~/modules/test', { message: 'myModule!!!!'}],
    '~/modules/test2'
  ]
}
