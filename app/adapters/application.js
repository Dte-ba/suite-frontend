import DS from 'ember-data';
import ENV from '../config/environment';
import Ember from 'ember';

export default DS.JSONAPIAdapter.extend({
  host: ENV.API_URL,
  namespace: 'api'
});
