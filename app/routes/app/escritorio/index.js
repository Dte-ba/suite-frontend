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
  totalValidaciones: task(function*() {
    let url = ENV.API_URL + "/api/validaciones/estadistica";
    let resultado = yield this.get("ajax").request(url);
    let dataset = [
      { label: "Total", count: resultado.data.total }
    ];

    return dataset;
  }).drop(),

  model() {
    return {
      validaciones: this.get("obtenerValidaciones").perform(),
      totalValidaciones: this.get("totalValidaciones").perform()

    };
  }
});
