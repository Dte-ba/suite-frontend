import DS from 'ember-data';

export default DS.Model.extend({
  numero: DS.attr('string'),
  nombre: DS.attr('string'),
  region: DS.belongsTo('region')
});
