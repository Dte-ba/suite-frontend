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
          atributo: "fechainicio",
          titulo: "Fecha Inicio"
        },
        {
          atributo: "fechafin",
          titulo: "Fecha Fin"
        },
        {
          atributo: "todoElDia",
          titulo: "Todo El día",
          template: "suite-tabla/celda-sino"
        }
      ]
    });
  }
});
