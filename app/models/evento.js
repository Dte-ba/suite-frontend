import DS from "ember-data";
import Ember from "ember";
import {
  validatePresence,
  validateLength
} from "ember-changeset-validations/validators";

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
  }),

  validaciones: {
    titulo: [validatePresence(true), validateLength({ min: 2 })]
  }
});
