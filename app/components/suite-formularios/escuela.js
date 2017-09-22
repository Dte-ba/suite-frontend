import Ember from "ember";
import { task } from "ember-concurrency";

export default Ember.Component.extend({
  store: Ember.inject.service(),
  tareaGuardar: task(function*(modelo) {
    try {
      let piso = null;

      if (!modelo.get("piso.id")) {
        piso = yield this.get("store")
          .createRecord("piso", {})
          .save();
      }

      if (piso) {
        modelo.set("piso", piso);
      }

      let escuela = yield modelo.save();

      if (this.get("cuandoGuarda")) {
        this.get("cuandoGuarda")();
      }

      return escuela;
    } catch (e) {
      throw new Error("Ha ocurrido un error del lado del servidor");
    }
  }).drop()
});
