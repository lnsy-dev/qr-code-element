const path = require('path');

module.exports = {
  entry: ['./src/qr-code-element.js','./styles/index.css'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    // Bundle name
    filename: 'qr-code-element.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use:['style-loader','css-loader']
     }
    ]
  }
};

