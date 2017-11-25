//import { ExtendedAPIPlugin } from './C:/Users/penghuiwu/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/webpack';
//import { Plugin } from './C:/Users/penghuiwu/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/webpack';

const path = require('path')
const extracTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname,'build'),
        filename: "bundle.js",
        publicPath: 'build/'
    },
    //babel
    module: {
        rules:[
            {
                //babel
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                //url
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'images/[name].[hash].[ext]'
                        }
                    }
                ]
            },{
                test: /\.css$/,
                // use: ['style-loader',
                //     {
                //         loader: 'css-loader',
                //         options:{
                //             modules: true
                //         }
                //     }
                // ]
                loader: extracTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            module: true
                        }
                    }]
                })
            }
        ]
    },
    plugins: [
        new extracTextPlugin("css/[name].[hash].css")
    ]
}