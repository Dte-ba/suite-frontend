import DS from "ember-data";
import Ember from "ember";
import { validatePresence } from "ember-changeset-validations/validators";

export default DS.Model.extend({
  servidor: DS.attr("string"),
  serie: DS.attr("string"),
  ups: DS.attr("boolean"),
  rack: DS.attr("boolean"),
  estado: DS.attr("boolean"),
  llave: DS.attr("string"),
  escuela: DS.belongsTo("escuela"),
  upsComoCadena: Ember.computed("ups", function() {
    let ups = this.get("ups");
    if (ups === true) {
      ups = "Si";
    } else {
      ups = "No";
    }
    return ups;
  }),
  rackComoCadena: Ember.computed("rack", function() {
    let rack = this.get("rack");
    if (rack === true) {
      rack = "Si";
    } else {
      rack = "No";
    }
    return rack;
  }),
  estadoComoCadena: Ember.computed("estado", function() {
    let estado = this.get("estado");
    if (estado === true) {
      estado = "Funcionando";
    } else {
      estado = "No funciona";
    }
    return estado;
  }),

  validaciones: {
    servidor: [validatePresence(true)],
    serie: [validatePresence(true)]
  }
});
