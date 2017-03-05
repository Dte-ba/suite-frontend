import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.API_URL,
  namespace: 'api'
});

Ember.Inflector.inflector.irregular('region', 'regiones');
Ember.Inflector.inflector.irregular('perfil', 'perfiles');
