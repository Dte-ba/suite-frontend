import Ember from "ember";
import { task } from "ember-concurrency";


export default Ember.Route.extend({
  tarea: null,

  obtenerValidaciones: task(function*(query) {
    let data = yield this.store.query("validacion", query);
    let meta = data.get("meta");
    return { data, meta };
  }).drop(),

  model() {
    return Ember.RSVP.hash({
      validaciones: this.get("obtenerValidaciones"),
    })
  },
});
