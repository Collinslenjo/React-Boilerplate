var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      },
      { test : /\.jsx?/, include : APP_DIR + '/css/bootstrap.min.css', loader : 'babel-loader'},
      { test : /\.jsx?/, include : APP_DIR + '/css/material-dashboard.css', loader : 'babel-loader'},
      { test : /\.jsx?/, include : APP_DIR + '/css/demo.css', loader : 'babel-loader'},
      { test : /\.jsx?/, include : APP_DIR + '/css/style.css', loader : 'babel-loader'},
      { test : /\.jsx?/, include : APP_DIR + '/js/bootstrap.min.js', loader : 'babel-loader'},
      { test : /\.jsx?/, include : APP_DIR + '/js/material.min.js', loader : 'babel-loader'},
      { test : /\.jsx?/, include : APP_DIR + '/js/material-dashboard.js', loader : 'babel-loader'},
      { test : /\.jsx?/, include : APP_DIR + '/js/jquery-3.1.0.min.js', loader : 'babel-loader'},
      { test : /\.jsx?/, include : APP_DIR + '/js/main.js', loader : 'babel-loader'}
    ]
  }
};

module.exports = config;
