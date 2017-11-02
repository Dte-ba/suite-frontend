/* eslint-env node */
"use strict";

const EmberApp = require("ember-cli/lib/broccoli/ember-app");

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    sourcemaps: {
      enabled: false
    },
    minifyJS: {
      enabled: false
    },
    minifyCSS: {
      enabled: true
    },
    fingerprint: {
      enabled: true
    },
    SemanticUI: {
      import: {
        css: true,
        javascript: true,
        images: true,
        fonts: true
      }
    }
  });

  app.import("vendor/tablesort.js");
  app.import("vendor/ga.js");

  app.import("vendor/handsontable.full.min.css");
  app.import("vendor/handsontable.full.min.js");
  app.import("bower_components/handsontable/dist/handsontable.full.js");

  app.import("vendor/roboto/Roboto-Bold.ttf");
  app.import("vendor/roboto/Roboto-Light.ttf");

  app.import("vendor/daterangepicker.min.css");
  app.import("vendor/jquery.daterangepicker.js");

  app.import("vendor/jquery.timepicker.min.js");
  app.import("vendor/jquery.timepicker.css");

  app.import("bower_components/fullcalendar/dist/fullcalendar.js");
  app.import("bower_components/fullcalendar/dist/fullcalendar.css");
  //app.import("bower_components/fullcalendar/dist/locale/es.js");

  return app.toTree();
};
