import DS from "ember-data";
import {
  validatePresence,
  validateLength
} from "ember-changeset-validations/validators";

export default DS.Model.extend({
  titulo: DS.attr("string"),
  fechaDeAlta: DS.attr("string"),
  autor: DS.belongsTo("perfil"),
  responsable: DS.belongsTo("perfil"),
  descripcion: DS.attr("string"),
  motivoDeTarea: DS.belongsTo("motivoDeTarea"),
  estadoDeTarea: DS.belongsTo("estadoDeTarea"),
  prioridadDeTarea: DS.belongsTo("prioridadDeTarea"),
  escuela: DS.belongsTo("escuela"),
  comentariosDeTarea: DS.hasMany("comentarioDeTarea"),

  validaciones: {
    titulo: [validatePresence(true), validateLength({ min: 2 })],
    escuela: [validatePresence(true)],
    descripcion: [validatePresence(true)],
    motivoDeTarea: [validatePresence(true)]
  }
});
