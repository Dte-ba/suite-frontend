import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr("string"),
  escuelas: DS.hasMany("escuela"),
  cantidadDeEscuelas: DS.attr("number")
});
