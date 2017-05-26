/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    emberFullCalendar: {
      scheduler: false
    }
    // Add options here
  });

  app.import('vendor/tablesort.js');

  app.import('bower_components/handsontable/dist/handsontable.full.css');
  app.import('bower_components/handsontable/dist/handsontable.full.js');
  app.import('vendor/es.js');

  app.import('vendor/roboto/Roboto-Bold.ttf');
  app.import('vendor/roboto/Roboto-Italic.ttf');
  app.import('vendor/roboto/Roboto-Light.ttf');
  app.import('vendor/roboto/Roboto-Medium.ttf');

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
