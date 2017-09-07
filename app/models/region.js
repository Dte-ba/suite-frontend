import DS from "ember-data";
import Ember from "ember";

export default DS.Model.extend({
  numero: DS.attr("number"),
  distritos: DS.hasMany("distrito"),

  nombre: Ember.computed("numero", function() {
    let numero = this.get("numero");
    return `Región ${numero}`;
  }),

  distritosComoCadena: Ember.computed("distritos", function() {
    return this.get("distritos").map(e => e.get("nombre")).join(", ");
  })
});
