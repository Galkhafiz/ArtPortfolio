const path = require('path')

module.exports = {
    entry: {
        index: ['babel-polyfill', './src/index.js'],
        about: ['babel-polyfill', './src/about.js'],
        art: ['babel-polyfill', './src/art.js'],
        contact: ['babel-polyfill', './src/contact.js']
    }, 
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: '[name]-bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/, 
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/'
    }, 
    devtool: 'source-map'
}

// __dirname // absolute path to the root of the project
//Users/Andrew/Desktop/js-bootcamp/boilerplate/public/scripts

