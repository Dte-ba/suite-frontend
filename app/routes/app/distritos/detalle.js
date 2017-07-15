import Ember from "ember";
import { task } from "ember-concurrency";

export default Ember.Route.extend({
  obtenerLocalidades: task(function*(query) {
    let data = yield this.store.query("localidad", query);
    let meta = data.get("meta");
    return { data, meta };
  }).drop(),

  model(params) {
    return Ember.RSVP.hash({
      tarea: this.get("obtenerLocalidades"),
      columnas: [
        {
          atributo: "nombre",
          titulo: "Nombre"
          //ruta: "app.localidad.detalle"
        }
      ]
    });
  }
});
