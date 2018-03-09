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
    }
  });

  app.import("vendor/tablesort.js");
  app.import("vendor/ga.js");

  app.import("vendor/handsontable.full.min.css");
  app.import("vendor/handsontable.full.min.js");

  app.import("vendor/roboto/Roboto-Bold.ttf");
  app.import("vendor/roboto/Roboto-Light.ttf");

  app.import("vendor/daterangepicker.min.css");
  app.import("vendor/jquery.daterangepicker.js");

  app.import("vendor/jquery.timepicker.min.js");
  app.import("vendor/jquery.timepicker.css");

  app.import("node_modules/fullcalendar/dist/fullcalendar.js");
  app.import("node_modules/fullcalendar/dist/fullcalendar.css");

  app.import("node_modules/semantic-ui-calendar/dist/calendar.css");
  app.import("node_modules/semantic-ui-calendar/dist/calendar.js");

  return app.toTree();
};
