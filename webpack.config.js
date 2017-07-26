const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var inProduction = (process.env.NODE_ENV === 'production');

module.exports = {
    entry: {
        app: [
            './public/js/index.js'
        ],
        cms: [
            
            'formvalidation/dist/css/formValidation.css',
            'formvalidation/dist/js/formValidation.js',
            'formvalidation/dist/js/framework/semantic.js',
            'semantic-ui/dist/semantic.css',
            'semantic-ui/dist/semantic.js',
            './public/css/cms.css',
            './public/js/cms.js'
            
        ]
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                loader: 'url-loader'
            },
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader"
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'url-loader'
            } 
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].min.css"),
        
        new webpack.LoaderOptionsPlugin({
            minimize: inProduction
        }),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' // Specify the common bundle's name.
        })
    ]
};

if(inProduction) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    );
}