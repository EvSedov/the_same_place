const path = require('path');
// const glob = require('glob');

// const PATHS = {
//   src: path.join(__dirname, 'src')
// };

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// PurgecssPlugin удаляет какие-то стили или атрибуты в тегах
// после удаления которых перестает работать js код в навигации
// и модальных окнах bootstrap

// const PurgecssPlugin = require('purgecss-webpack-plugin');

let mode = (process.env.NODE_ENV === 'production') ? 'production' : 'development';

console.log(mode + ' mode');

module.exports = {
  mode: mode,
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    filename: '[name][contenthash].bundle.js',
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },
  devtool: 'source-map',
  devServer: {
    open: true,
    static: {
      directory: './src',
      watch: true
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/pages/index.pug',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/pages/contacts.pug',
      filename: 'contacts.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/pages/apartments.pug',
      filename: 'apartments.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/pages/recommend.pug',
      filename: 'recommend.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/pages/european-coast-in-french.pug',
      filename: 'european-coast-in-french.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/pages/rules.pug',
      filename: 'rules.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(html)$/i,
        loader: 'html-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          (mode === 'development') ? 'style-loader' : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "cssnano",
                    "postcss-preset-env",
                    {
                      // Options
                    },
                    "autoprefixer",
                    {
                      // Options
                    }
                  ],
                ],
              },
              sourceMap: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.pug$/,
        loader: '@webdiscus/pug-loader',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}