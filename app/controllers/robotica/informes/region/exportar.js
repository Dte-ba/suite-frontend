import Ember from "ember";
import ENV from "suite-frontend/config/environment";

export default Ember.Controller.extend({
  descargas: Ember.inject.service(),
  ajax: Ember.inject.service(),

  actions: {
    generarInforme() {
      let { region, desde, hasta, aplicacion } = this.get("model.params");
      let url = `api/trabajos/informe_de_perfil_por_region?aplicacion=${aplicacion}&region=${region}&desde=${desde}&hasta=${hasta}`;
      return this.get("ajax").request(`${ENV.API_URL}/${url}`);
    }
  }
});
