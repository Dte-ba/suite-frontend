import DS from "ember-data";
import {
  validatePresence,
  validateLength
} from "ember-changeset-validations/validators";

export default DS.Model.extend({
  nombre: DS.attr("string"),
  telefono_particular: DS.attr("string"),
  telefono_celular: DS.attr("string"),
  horario: DS.attr("string"),
  email: DS.attr("string"),
  escuela: DS.belongsTo("escuela"),
  cargo: DS.belongsTo("cargoEscolar"),
  validaciones: {
    nombre: [validatePresence(true), validateLength({ min: 2 })],
    escuela: [validatePresence(true)],
    cargo: [validatePresence(true)]
  }
});
