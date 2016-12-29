import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('ui', function() {
    this.route('tabla');
    this.route('formularios');
  });
});

export default Router;
