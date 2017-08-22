import Ember from "ember";
import { task } from "ember-concurrency";
// import ENV from "suite-frontend/config/environment";

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  queryParams: {
    pagina: { replace: true /*, refreshModel: true */ },
    filtro: { replace: true }
  },


  obtenerInforme: task(function*(query) {
    let data = yield this.store.query("evento", query);
    let meta = data.get("meta");
    return { data, meta };
  }).drop(),

  afterModel(model) {
    let dni = model.data.dni;
    let inicio = "2017-8-1";
    let fin = "2017-8-31";

    let informe = this.get("obtenerInforme").perform({ dni, inicio, fin });

    model.set("informe", informe);
    return model;
  }
});
