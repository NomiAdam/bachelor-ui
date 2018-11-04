const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/lib/index.js'),
    output: {
        path: path.resolve(__dirname, './build/lib'),
        sourceMapFilename: "path.resolve(__dirname, './build/lib/index.js.map')",
        filename: 'index.js',
        library: '',
        libraryTarget: 'commonjs',
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/react'],
                    plugins: ['babel-plugin-styled-components'],
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
