import DS from "ember-data";
import Ember from "ember";

export default DS.Model.extend({
  titulo: DS.attr("string"),

  fechainicio: DS.attr("string"),
  fechafin: DS.attr("string"),

  todoElDia: DS.attr("boolean"),

  color: Ember.computed("titulo", function() {
    return "white";
  }),

  borderColor: Ember.computed("titulo", function() {
    return "#ccc";
  })
});
