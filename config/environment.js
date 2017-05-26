/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'suite-frontend',
    environment: environment,
    rootURL: '/',
    locationType: 'hash',
    usingMirage: false,
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

    'ember-validated-form': {
      css: {
        form: 'ui form',
        radio: 'ui radio',
        help: 'ui pointing red basic label',
        checkbox: 'ui checkbox',
        button: 'ui button',
        group: 'field',
        error: 'error'
      }
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.API_URL = '';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV['ember-cli-mirage'] = {
      enabled: false
    };

    ENV.API_URL = 'http://testing-suite-admin.dtelab.com.ar';
    ENV.usingMirage = false;
  }


  return ENV;
};
