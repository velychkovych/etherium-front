const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path"),
    jsPath = "./src",
    destPath = "./build",
    srcPath = path.join(__dirname, jsPath),
    outputPath = path.join(__dirname, destPath);

module.exports = {
    optimization: {
        minimize: false,
    },
    output: {
        path: outputPath,
        filename: "bundle.[fullhash].js",
        publicPath: "/",
    },
    entry: path.join(srcPath, "index.js"),
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            filename: "index.html",
        }),
    ],
    context: srcPath,
    module: {
        rules: [
            {
                test: /\.html$/,
                use: "html-loader",
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.svg$/,
                use: "@svgr/webpack",
            },
            {
                test: /\.(eot|gltf|glb|fbx|FBX|bin|woff|woff2|ics|svg|ttf|png|jpe?g|gif|mp4|wav|mp3)$/,
                use: "url-loader?limit=8192",
            },
        ],
    },
};
