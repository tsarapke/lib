const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    publicPath: '',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    filename: 'index.js',
  },
  devtool:'nosources-source-map',
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'react',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: path.resolve(__dirname, "node_modules"),
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
}
