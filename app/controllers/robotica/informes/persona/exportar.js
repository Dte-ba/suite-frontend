import Ember from "ember";
import ENV from "suite-frontend/config/environment";

export default Ember.Controller.extend({
  descargas: Ember.inject.service(),
  ajax: Ember.inject.service(),

  actions: {
    generarInforme() {
      let { perfil_id, desde, hasta, aplicacion } = this.get("model.params");

      let url = `api/trabajos/informe_de_perfil?perfil_id=${perfil_id}&desde=${desde}&hasta=${hasta}&aplicacion=${aplicacion}`;
      return this.get("ajax").request(`${ENV.API_URL}/${url}`);
    }
  }
});
