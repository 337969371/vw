




let isDevelopment = process.env.NODE_ENV === 'development' ? true : false
let folder = process.env.APP_TYPE ? 'mobile' : 'pc'
export default {
    // mode:'spa',
    // target: 'static',
    srcDir: folder,
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/style-resources', '@nuxtjs/component-cache'],
    plugins: [
        {"src": '~/plugins/init', ssr: false}
    ],
    generate:{
        dir: `dist/${folder}`, 
        devtools: true,
        // subFolders: false
    },
    components: true,
    router: {
        base: isDevelopment ?  '/pc/' : '/pc/'

    },
    build:{
        cache: true,
        extractCSS: true,
        optimization: {
            splitChunks: {
              cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.(css|vue)$/,
                    chunks: 'all',
                    enforce: true
                }
              }
            }
        },
        filenames:{
            app: ({ isDev }) => isDev ? '[name].js' : '[contenthash].js',
            chunk: ({ isDev }) => isDev ? '[name].js' : '[contenthash].js',
            css: ({ isDev }) => isDev ? '[name].css' : '[contenthash].css',
            img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
            font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
            video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'
        },
        cssSourceMap: false,
        devtools: true,
        // publicPath: './'
    },
    globalName: 'VW',
    css:['~/assets/css/common.styl'],
    styleResources: {
        stylus: './assets/css/main.styl'
    },
    head:{
        // titleTemplate: '首页',
        meta: [
            {charset: 'utf-8'},
            {name: 'renderer', content: 'webkit'},
            {name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=0'},
            {name: 'format-detection', content: 'telephone=no, email=no'}
        ]
    },
    loading: {
        color: 'yellow'
    }
}