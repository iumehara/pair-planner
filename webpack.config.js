var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({template: './src/index.html'}),
      new webpack.EnvironmentPlugin(['MYJSON_BUCKET_ID',])
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader"
            },
            {
                test: /\.(css|scss)$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    }
};
