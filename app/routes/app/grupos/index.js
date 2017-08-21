import Ember from "ember";
import { task } from "ember-concurrency";

export default Ember.Route.extend({
  obtenerGrupos: task(function*(query) {
    let data = yield this.store.query("group", query);
    let meta = data.get("meta");
    return { data, meta };
  }).drop(),

  model() {
    return Ember.RSVP.hash({
      tareaGrupos: this.get("obtenerGrupos"),
      columnas: [
        {
          atributo: "name",
          titulo: "Nombre",
          ruta: "app.grupos.detalle"
        }
      ]
    });
  }
});
