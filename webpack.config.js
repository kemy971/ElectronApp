module.exports = {
    entry: "./src/entry.jsx",
    output: {
        path: __dirname,
        filename: "./dist/bundle.js"
    },
    module: {
        loaders: [
          { test: /\.css$/, loader: "style-loader!css-loader" },
          { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};
