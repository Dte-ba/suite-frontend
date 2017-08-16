import Ember from "ember";
import { task } from "ember-concurrency";
import ENV from "suite-frontend/config/environment";

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  queryParams: {
    pagina: { replace: true, refreshModel: true },
    filtro: { replace: true }
  },

  obtenerValidaciones: task(function*() {
    let url = ENV.API_URL + "/api/validaciones/estadistica";
    let resultado = yield this.get("ajax").request(url);

    let dataset = [
      { label: "Aprobadas", count: resultado.data.aprobadas },
      { label: "Objetadas", count: resultado.data.objetadas },
      { label: "Pendientes", count: resultado.data.pendientes }
    ];

    return dataset;
  }).drop(),


  obtenerEstadisticas: task(function*() {
    let url_validaciones = ENV.API_URL + "/api/validaciones/estadistica";
    let url_escuelas = ENV.API_URL + "/api/escuelas/estadistica";

    let resultado_validaciones = yield this.get("ajax").request(url_validaciones);
    let resultado_escuelas = yield this.get("ajax").request(url_escuelas);

    let dataset = {
      validaciones: resultado_validaciones,
      escuelas: resultado_escuelas
    };

    return dataset;
  }).drop(),

  model() {
    return {
      validaciones: this.get("obtenerValidaciones").perform(),
      estadisticas: this.get("obtenerEstadisticas").perform({})
    };
  }
});
