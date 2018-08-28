import Ember from "ember";
import { task } from "ember-concurrency";
import ENV from "suite-frontend/config/environment";

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  perfil: Ember.inject.service(),
  obtenerEstadisticas: task(function*() {
    let url = ENV.API_URL + "/api/eventos-de-robotica/estadistica";

    let resultado = yield this.get("ajax").request(url);

    return resultado;
  }).drop(),
  model() {
    return this.get("obtenerEstadisticas").perform({});
  }
});
