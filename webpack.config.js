/**
 * Webpack config file for blocktron-lib
 * Sandeep Vattapparambil
 */

//Constants
const path = require('path');
const webpack = require('webpack');
const PrettierPlugin = require('prettier-webpack-plugin');
const fs = require('fs');

//Include the node modules
let nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

//Webpack config object
module.exports = {
    //set webpack build mode
    mode: 'none',
    //set target as server (node)
    target: 'node',
    //Configuration settings
    plugins: [
        new PrettierPlugin()
    ],
    //set minification flag
    optimization: {
        minimize: false
    },
    //set webpack bundle entry point
    entry: './src/index.js',
    //set webpack bundle output
    output: {
        //set output target for commonjs require
        libraryTarget: 'commonjs2',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    //set up babel transpiler
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'prettier-loader',
            exclude: /node_modules/
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    //set console logs in color
    stats: {
        colors: true
    },
    //include source-map in builds
    devtool: 'source-map'
};