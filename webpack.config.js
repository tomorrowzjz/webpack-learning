var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry:{
        'pagea':'./src/pagea.js',
        'pagec':'./src/pagec.js',
        'vender' : ['lodash']
        // commonchunck:'[name].chunck.js'
    },
    output: {
        path:path.resolve(__dirname,'./dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name:'common',
            minChunks:2,
            chunks:['pagea','pageb']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names:['vender','manifest'],
            minChunks:Infinity
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:'vender',
        //     minChunks:Infinity
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:'manifest',
        //     minChunks:Infinity
        // })
    ]
}