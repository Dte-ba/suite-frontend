import Ember from "ember";
import { task } from "ember-concurrency";

export default Ember.Route.extend({
  obtenerEventos: task(function*(query) {
    let data = yield this.store.query("evento", query);
    let meta = data.get("meta");
    return { data, meta };
  }).drop(),

  model() {
    return Ember.RSVP.hash({
      tarea: this.get("obtenerEventos"),
      columnas: [
        {
          atributo: "titulo",
          titulo: "Título"
        },
        {
          atributo: "fecha",
          titulo: "Fecha"
        },
        {
          atributo: "inicio",
          titulo: "Hora de inicio"
        },
        {
          atributo: "fin",
          titulo: "Hora de finalización"
        },
        {
          atributo: "todoElDia",
          titulo: "Día completo",
          template: "suite-tabla/celda-sino"
        }
      ]
    });
  }
});
