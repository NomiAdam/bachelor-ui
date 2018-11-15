const webpack = require('webpack');
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2
const pkg = require('./package.json');

const libraryName = pkg.name;

let outputFile;
let
    mode;

if (env === 'build') {
    mode = 'production';
    outputFile = `${ libraryName }.min.js`;
} else {
    mode = 'development';
    outputFile = `${ libraryName }.js`;
}

const config = {
    mode,
    entry: `${ __dirname }/src/lib/index.js`,
    devtool: 'source-map',
    output: {
        path: `${ __dirname }/lib`,
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    externals: {
        react: 'react',
        ramda: 'ramda',
        styledComponent: 'styled-components',
        reactIcons: 'react-icons',
        ramdaExtension: 'ramda-extension',
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /(\.jsx|\.js)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        modules: [path.resolve('./node_modules'), path.resolve('./src')],
        extensions: ['.json', '.js'],
    },
};

module.exports = config;
