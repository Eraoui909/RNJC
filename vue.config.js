//module.exports = {
//    publicPath: ''
//}

module.exports = {
    // options...
    publicPath: process.env.NODE_ENV === 'production'
        ? '/conferences/RNJC-SI/22/'
        : '',

    // Other options include:
    outputDir: undefined,
    assetsDir: undefined,
    runtimeCompiler: undefined,
    productionSourceMap: undefined,
    parallel: undefined,
    css: undefined
}