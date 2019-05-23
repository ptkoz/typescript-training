const path = require("path");

module.exports = {
    mode: "development",
    entry: [
        "./src/index.tsx"
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js'
    },
    devServer: {
        contentBase: './public',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, 'src'),
                enforce: 'pre',
                loader: 'tslint-loader',
            },
            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, 'src'),
                loader: "ts-loader"
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        modules: ['node_modules', __dirname],
    },
    stats: {
        modules: false,
        colors: true
    },
    devtool: "cheap-module-eval-source-map",
}
