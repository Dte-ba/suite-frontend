import DS from 'ember-data';

export default DS.Model.extend({
  cue: DS.attr("number"),
  nombre: DS.attr("string"),
  direccion: DS.attr("string"),
  telefono: DS.attr("string"),
  email: DS.attr("string"),
  latitud: DS.attr("number"),
  longitud: DS.attr("number"),
  localidad: DS.belongsTo("localidad"),
  // tipoDeFinanciamiento: DS.belongsTo("tipoDeFinanciamiento"),
  tipoDeGestion: DS.belongsTo("tipoDeGestion"),
  nivel: DS.belongsTo("nivel"),
  area: DS.belongsTo("area"),
  programas: DS.hasMany("programa"),

  programasComoCadena: Ember.computed("programas", function() {
    return this.get("programas").map(e => e.get("nombre")).join(", ");
  })
});
