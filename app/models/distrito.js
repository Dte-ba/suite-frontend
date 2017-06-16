import DS from "ember-data";
import Ember from "ember";

export default DS.Model.extend({
  nombre: DS.attr("string"),
  region: DS.belongsTo("region"),
  localidades: DS.hasMany("localidad"),

  localidadesComoCadena: Ember.computed("localidades", function() {
    return this.get("localidades").map(e => e.get("nombre")).join(", ");
  })
});
