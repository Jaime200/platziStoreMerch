const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src', 'Index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.[name].js',
    publicPath : '/'
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devServer: {
    open: true,
    port: 3100,
    // compress : true,
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: './index.html',
    }),
  ],
};
