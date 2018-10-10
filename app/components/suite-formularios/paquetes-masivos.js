import Ember from "ember";
import { task } from "ember-concurrency";
import ENV from "suite-frontend/config/environment";

export default Ember.Component.extend({
  store: Ember.inject.service(),
  perfil: Ember.inject.service(),
  solicitarPaquetes: task(function*(modelo) {
    let url = `${ENV.API_URL}/api/paquetes/importacionMasiva`;
    let perfil = this.get("perfil");
    let idPerfil = perfil.get("miPerfil.id");

    let datos = {
      escuela: modelo.get("escuela").toJSON(),
      paquetes: modelo.get("paquetes"),
      fecha: modelo.get("fechaPedido"),
      idPerfil: idPerfil
    };
    try {
      // TODO: hack porque algunas escuelas tiene cargada una URL
      //       como dirección
      datos.escuela.direccion = "";

      let response = yield Ember.$.ajax({
        url: url,
        type: "POST",
        data: JSON.stringify(datos)
      });

      if (response.data.error) {
        this.set("error", response.data.error);
        this.set("errores", response.data.errores);
      } else {
        if (this.get("on-submit")) {
          this.get("on-submit")();
        }
      }

      return response;
    } catch (e) {
      this.set("error", e.responseText.substring(0, 240) + " ...");
    }
  })
});
