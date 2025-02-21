const path = require('path');
//const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: {
    main: './js/app.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  mode: 'production', // Ensure production mode is set
  optimization: {
    usedExports: true, // Enable tree shaking
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    //new BundleAnalyzerPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
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
};