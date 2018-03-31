import Ember from "ember";
import { task } from "ember-concurrency";

export default Ember.Component.extend({
  tareaGuardar: task(function*(modelo) {
    try {
      yield modelo.save();
      this.cuandoGuarda(modelo);
    } catch (e) {
      throw new Error("Ha ocurrido un error del lado del servidor");
    }
  }).drop()
});
