import DS from "ember-data";
import Ember from "ember";

export default DS.Model.extend({
  numero: DS.attr("number"),
  municipios: DS.hasMany("municipio"),

  municipiosComoCadena: Ember.computed("municipios", function() {
    return this.get("municipios").map(e => e.get("nombre")).join(", ");
  })
});
