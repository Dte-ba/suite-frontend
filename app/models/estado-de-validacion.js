import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr("string"),
  validaciones: DS.hasMany("validacion")
});
