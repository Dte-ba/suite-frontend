import Ember from "ember";
import { task } from "ember-concurrency";

export default Ember.Component.extend({
  store: Ember.inject.service(),
  tareaGuardar: task(function*(modelo) {
    try {
      let resultado = yield modelo.save();

      if (!modelo.get("piso.id")) {
        let piso = this.get("store").createRecord("piso", {
          escuela: modelo
        });

        yield piso.save();
      }

      if (this.get("cuandoGuarda")) {
        this.get("cuandoGuarda")();
      }

      return resultado;
    } catch (e) {
      throw new Error("Ha ocurrido un error del lado del servidor");
    }
  }).drop()
});
