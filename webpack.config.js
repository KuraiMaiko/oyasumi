// Define this constant for easier usage
const isProd = process.env.NODE_ENV === 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const { resolve } = require('path');

const config = {
    // Include source maps in development files
    devtool: isProd ? false : '#cheap-module-source-map',

    entry: {
        // Main entry point of our app
        app: resolve(__dirname, 'src', 'index.js'),
    },

    output: {
        // As mentioned before, built files are stored in docs
        path: resolve(__dirname, 'docs'),

        // In our case we serve assets directly from root
        publicPath: isProd ? 'https://kuraimaiko.github.io/oyasumi/' : '/',

        // We add hash to filename to avoid caching issues
        filename: '[name].[hash].js',
    },

    resolve: {
        extensions: ['*', '.js'],
        alias: {
            Modules: resolve(__dirname, 'src', 'modules'),
            Transformers: resolve(__dirname, 'src', 'transformers'),
            Components: resolve(__dirname, 'src', 'components'),
            Contexts: resolve(__dirname, 'src', 'contexts'),
            Utils: resolve(__dirname, 'src', 'utils'),
            Sprites: resolve(__dirname, 'src', 'sprites', 'svg'),
        },
        modules: [
            resolve(__dirname, 'node_modules'),
        ],
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',

                // Dependencies do not require transpilation
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: {
                            extract: true,
                            spriteFilename: 'sprites.svg',
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Oyasumi',
        }),
        new Dotenv({ path: './.env' }),
        new SpriteLoaderPlugin({
            plainSprite: true,
        }),
    ],
};

if (!isProd) {
    config.devServer = {
        contentBase: resolve(__dirname, 'static'),
        hot: true,
        publicPath: '/',
        historyApiFallback: true,
    };
}

module.exports = config;
