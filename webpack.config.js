var webpack = require("webpack");
var folder = __dirname;

module.exports = {
    entry: [
        folder + "/src/model/index.js",
        folder + "/src/view/index.js"
    ],
    output: {
        path: folder + "/dist/assets",
        filename: "bundle.js",
        sourceMapFilename: "bundle.map"
    },
    devtool: "#source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: ["env", "stage-0", "react"]
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader", {
                    loader: "postcss-loader",
                    options: {
                        plugins: () => [require("autoprefixer")]
                    }}]
            },
            {
                test: /\.scss/,
                use: ["style-loader","css-loader", {
                    loader: "postcss-loader",
                    options: {
                      plugins: () => [require("autoprefixer")]
                    }}, "sass-loader"]
            }
        ]
    }
};
