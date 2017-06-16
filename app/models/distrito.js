import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr("string"),
  region: DS.belongsTo("region"),
  localidades: DS.hasMany("localidad")
});
