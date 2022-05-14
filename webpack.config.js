const HtmlWebpackPlugin = require('html-webpack-plugin');

let mode = (process.env.NODE_ENV === 'production') ? 'production' : 'development';

console.log(process.env.NODE_ENV);
console.log(mode);

module.exports = {
  mode: mode,
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    rules: [

    ]

  }
}