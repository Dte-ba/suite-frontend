import DS from "ember-data";
import Ember from "ember";
import {
  validatePresence,
  validateLength
} from "ember-changeset-validations/validators";

export default DS.Model.extend({
  titulo: DS.attr("string"),
  fecha: DS.attr("string"),
  fechaFin: DS.attr("string"),
  inicio: DS.attr("string"),
  fin: DS.attr("string"),
  todoElDia: DS.attr("boolean"),
  objetivo: DS.attr("string"),
  cantidadDeParticipantes: DS.attr("string"),
  requiereTraslado: DS.attr("boolean"),

  responsable: DS.belongsTo("perfil"),
  escuela: DS.belongsTo("escuela"),
  acompaniantes: DS.hasMany("perfil"),

  fecha_inicio: Ember.computed("fecha", "inicio", function() {
    let fecha = this.get("fecha");
    let hora = this.get("inicio");

    return `${fecha} - ${hora}`;
  }),

  fecha_fin: Ember.computed("fechaFin", "fin", function() {
    let fecha_fin = this.get("fechaFin");
    let hora = this.get("fin");

    return `${fecha_fin} - ${hora}`;
  }),

  color: Ember.computed("titulo", function() {
    return "white";
  }),

  borderColor: Ember.computed("titulo", function() {
    return "#ccc";
  }),

  validaciones: {
    titulo: [validatePresence(true), validateLength({ min: 2 })],
    fecha: [validatePresence(true)],
    fechaFin: [validatePresence(true)],
    inicio: [validatePresence(true)],
    fin: [validatePresence(true)],
    responsable: [validatePresence(true)],
    escuela: [validatePresence(true)]
  }
});
