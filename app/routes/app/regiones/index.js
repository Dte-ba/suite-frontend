import Ember from "ember";
import { task } from "ember-concurrency";

export default Ember.Route.extend({
  obtenerRegiones: task(function*(query) {
    let data = yield this.store.query("region", query);
    let meta = data.get("meta");
    return { data, meta };
  }).drop(),

  model() {
    return Ember.RSVP.hash({
      tarea: this.get("obtenerRegiones"),
      columnas: [
        {
          atributo: "numero",
          titulo: "Número de región",
          ruta: "app.regiones.detalle"
        }
      ]
    });
  }
});
