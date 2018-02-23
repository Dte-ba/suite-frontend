import Ember from "ember";

export default Ember.Component.extend({
  errores: Ember.computed.alias("formulario.model.errors"),
  didInsertElement() {
    if (!this.get("formulario")) {
      throw new Error("Tienes que especificar el parámetro formulario.");
    }
  }
});
