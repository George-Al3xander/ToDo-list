const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin

module.exports = {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, "src/index.js"),
    }, 
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name][contenthash].js",
        clean: true,
    },
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.resolve(__dirname,"dist")
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "ToDo List",
            filename: "index.html",
            template: "src/template.html",
            favicon: "src/favicon.svg"
        }),
        new BundleAnalyzerPlugin(),          
    ],
    module: {
        rules: [
            {
               test: /\.css$/,
               use: ["style-loader", "css-loader"],
               exclude: /node_modules/,                
            }, 
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }           
        ]        
    }
    
};