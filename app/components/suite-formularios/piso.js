import Ember from "ember";
import { task } from "ember-concurrency";

export default Ember.Component.extend({
  tareaGuardar: task(function*(modelo) {
    try {
      let resultado = yield modelo.save();

      if (this.get("cuandoGuarda")) {
        this.get("cuandoGuarda")();
      } else {
        return resultado;
      }
    } catch (e) {
      throw new Error("Ha ocurrido un error del lado del servidor");
    }
  }).drop()
});
