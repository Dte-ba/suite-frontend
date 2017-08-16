import Ember from "ember";
import { task } from "ember-concurrency";

export default Ember.Route.extend({
  obtenerProgramas: task(function*(query) {
    let data = yield this.store.query("programa", query);
    let meta = data.get("meta");
    return { data, meta };
  }),

  model() {
    return Ember.RSVP.hash({
      tareaProgramas: this.get("obtenerProgramas"),
      columnas: [
        {
          atributo: "nombre",
          titulo: "Nombre",
          ruta: "app.programas.detalle"
        }
      ]
    });
  }
});
