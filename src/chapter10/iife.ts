{
 // webpack.config.js
  const path = require('path');

  module.exports = {
    entry: './appModule.ts',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
  };
}

// Compiled Output
{
  let Flowers
    (function (Flowers) {
      function give(count) {
        return count + ' flowers'
      }
      Flowers.give = give
    })
  (Flowers || (Flowers = {}))
}
