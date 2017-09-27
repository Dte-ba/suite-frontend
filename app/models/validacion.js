import DS from "ember-data";
import {
  validatePresence,
  validateNumber
} from "ember-changeset-validations/validators";

export default DS.Model.extend({
  fechaDeAlta: DS.attr("string"),
  autor: DS.belongsTo("perfil"),
  cantidadPedidas: DS.attr("string"),
  cantidadValidadas: DS.attr("string"),
  observaciones: DS.attr("string"),
  estado: DS.belongsTo("estado-de-validacion"),
  escuela: DS.belongsTo("escuela"),
  validaciones: {
    fechaDeAlta: [validatePresence(true)],
    escuela: [validatePresence(true)],
    observaciones: [validatePresence(true)],
    cantidadPedidas: [
      validateNumber({
        positive: true,
        integer: true,
        message: "Tiene que ser un número"
      })
    ]
  }
});
