const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // adding source map for better error logs.
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './build'
  },
  module: {
  rules: [{
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', 
                  '@babel/react'],
        plugins: ['@babel/plugin-proposal-class-properties']
      }
    }
  },
  {
    test: /\.less$/,
    use: [
      'style-loader',
      'css-loader',
      'less-loader',
    ],
  },
  ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve('./index.html'),
    }),
  ]
}