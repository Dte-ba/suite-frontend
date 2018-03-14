/* eslint-env node */
"use strict";

module.exports = function(environment) {
  let ENV = {
    modulePrefix: "suite-frontend",
    environment,
    rootURL: "/",
    locationType: "hash",
    usingMirage: false,

    "ember-cli-notifications": {
      includeFontAwesome: true
    },

    contentSecurityPolicy: {
      "script-src": "'self' 'unsafe-inline' 'unsafe-eval' cdn.ravenjs.com",
      "img-src": "data: app.getsentry.com"
    },

    analytics_key: "UA-98624597-1",

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    "ember-validated-form": {
      css: {
        form: "ui form",
        radio: "ui radio",
        help: "ui pointing red basic label",
        // checkbox: "ui checkbox",
        button: "ui button",
        group: "field",
        error: "error"
      }
    },
    "ember-simple-auth": {}
  };

  ENV["g-map"] = {
    libraries: ["places"],
    key: "AIzaSyAEemsVtmvQNkC1C-iZ_fk2peWAZkewcBQ"
  };

  ENV.moment = {
    includeLocales: true
  };

  if (environment === "development") {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.API_URL = "";
  }

  if (environment === "test") {
    // Testem prefers this...
    ENV.locationType = "none";

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = "#ember-testing";
    ENV.API_URL = "";
  }

  if (environment === "production") {
    ENV["ember-cli-mirage"] = {
      enabled: false
    };

    const default_api_url = "http://suite-backend.enjambrelab.com.ar";
    ENV.API_URL = process.env.SUITE_API_URL || default_api_url;
    ENV.usingMirage = false;
  }

  return ENV;
};
