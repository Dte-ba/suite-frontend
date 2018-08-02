import Ember from "ember";
import { task } from "ember-concurrency";
import { timeout } from "ember-concurrency";

export default Ember.Component.extend({
  tareaGuardar: task(function*(modelo) {
    try {
      yield timeout(1000);
      yield modelo.save();
      yield timeout(500);
      this.cuandoGuarda(modelo);
    } catch (e) {
      throw new Error("Ha ocurrido un error del lado del servidor");
    }
  }).drop()
});
