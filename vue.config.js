module.exports = {
    chainWebpack: config => {
        config.module
            .rule('node')
            .test(/\.node$/)
            .use('node-loader')
            .loader('node-loader')
            .end();
    },
    // pluginOptions: {
    //     electronBuilder: {
    //         preload: 'src/preload.js',
    //         // Or, for multiple preload files:
    //         preload: { preload: 'src/preload.js' }
    //     }
    // },
    transpileDependencies: [
        'vuetify'
    ]
}