import Ember from "ember";
import ENV from "suite-frontend/config/environment";
import { task, timeout } from "ember-concurrency";

export default Ember.Component.extend({
  ajax: Ember.inject.service(),

  tareaGuardar: task(function*(modelo) {
    let base = ENV.API_URL;
    let idPerfil = modelo.get("id");
    let clave = modelo.get("clave");
    let confirmacion = modelo.get("confirmacion");
    let url = `${base}/api/perfiles/${idPerfil}/definir-clave`;

    try {
      yield timeout(1000);

      let resultado = yield this.get("ajax").request(url, {
        method: "POST",
        data: { clave, confirmacion }
      });

      if (!resultado.data.error) {
        yield timeout(1000);
        this.cuandoGuarda(modelo);
      } else {
        throw new Error(resultado.data.error);
      }
    } catch (e) {
      this.set("error", e);
      throw new Error(e);
    }
  }).drop()
});
