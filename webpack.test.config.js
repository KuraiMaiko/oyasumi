// Define this constant for easier usage
const isProd = process.env.NODE_ENV === 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const { resolve } = require('path');

const themes = ['Serenaya', 'Rui', 'Maiko'];

/**
 * @param {sting} theme
 * @returns {Object}
 */
const createConfig = (theme) => ({
    // Include source maps in development files
    devtool: isProd ? false : '#cheap-module-source-map',

    mode: isProd ? 'production' : 'development',

    entry: {
        // Main entry point of our app
        [theme]: resolve(__dirname, 'test', 'index.js'),
    },

    output: {
        // As mentioned before, built files are stored in docs
        path: resolve(__dirname, 'dump'),

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
            Contexts: resolve(__dirname, 'test', 'contexts'),
            Utils: resolve(__dirname, 'src', 'utils'),
            Sprites: resolve(__dirname, 'src', 'sprites', 'svg'),
            Styles: resolve(__dirname, 'src', 'styles', theme),
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
            filename: `${theme === themes[0].toLowerCase() ? 'index' : theme}.html`,
            title: `Oyasumi ${theme} (Test)`,
        }),
        new Dotenv({ path: './.env' }),
        new SpriteLoaderPlugin({
            plainSprite: true,
        }),
    ],

    devServer: !isProd ? {
        contentBase: resolve(__dirname, 'static'),
        hot: true,
        publicPath: '/',
        historyApiFallback: true,
    } : {},
});

module.exports = themes.map((theme) => createConfig(theme.toLowerCase()));
