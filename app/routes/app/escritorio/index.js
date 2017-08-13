import Ember from "ember";
import { task } from "ember-concurrency";


export default Ember.Route.extend({
  queryParams: {
    pagina: { replace: true, refreshModel: true },
    filtro: { replace: true }
  },

  validaciones: [
    { label: 'Objetadas', value: 300 },
    { label: 'Pendientes', value: 750 },
    { label: 'Aprobadas', value: 2500 }
  ],

  obtenerValidaciones: task(function*(query) {
    let data = yield this.store.query("validacion", query);
    let meta = data.get("meta");
    return { data, meta };
  }).drop(),

  model() {
    return Ember.RSVP.hash({
      validaciones: this.get("validaciones"),
    })
  },
});
