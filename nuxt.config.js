export default {
    ssr: false,
    subdirectory: "/gb4-5/",
    head: {
        title: "gb_курсовая",
        htmlAttrs: {
            lang: "ru",
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    router: {
        base: "/gb4-5/",
    },
    loading: { color: "#ff4c3b", throttle: 200, height: "3px", css: true },
    /*
     ** Global CSS
     */
    css: ["@/assets/scss/app.scss", "swiper/css/swiper.css"],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: "~/plugins/plugin.js", ssr: false },
        { src: "~/plugins/localStorage.js", ssr: false },
    ],
    /*
     ** Nuxt.js modules
     */
    modules: ["bootstrap-vue/nuxt", "@nuxtjs/axios", "vue-scrollto/nuxt"],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    generate: {
        fallback: true,
    },
    /*
     ** Build configuration
     */
    build: {
        transpile: ["vee-validate/dist/rules"],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {},
        babel: { compact: true },
    },
};