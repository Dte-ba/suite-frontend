import DS from "ember-data";
import Ember from "ember";

export default DS.Model.extend({
  titulo: DS.attr("string"),

  fechainicio: DS.attr("string"),
  fechafin: DS.attr("string"),

  color: Ember.computed("titulo", function() {
    return "orange";
  }),

  borderColor: Ember.computed("titulo", function() {
    return "orange";
  })
});
