import Ember from "ember";
import ENV from "suite-frontend/config/environment";

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),

  actions: {
    sumar() {
      const url = `${ENV.API_URL}/api/trabajos/sumar`;
      return this.get("ajax").request(url);
    },

    generarInforme() {
      const url = `${ENV.API_URL}/api/trabajos/informe_de_perfil?perfil_id=187&desde=2017-11-01&hasta=2018-01-01`;
      return this.get("ajax").request(url);
    }
  }
});
