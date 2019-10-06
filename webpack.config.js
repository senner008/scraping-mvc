const path = require('path');
var WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = env => {

  const isDev = env.development;

  var config = {
    entry: './Client/site.ts',
    output: {
      path: path.resolve(__dirname, 'wwwroot/js'),
      filename: 'bundle.js'
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
    plugins : [],
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    watch: isDev ? true : false,
    mode : Object.keys(env)[0]
  };
  return config;
};



