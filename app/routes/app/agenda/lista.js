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
          atributo: "fecha_inicio",
          titulo: "Inicio"
        },
        {
          atributo: "fecha_fin",
          titulo: "Fin"
        },
        {
          atributo: "titulo",
          titulo: "Título"
        },
        {
          atributo: "escuela.localidad.distrito.region.numero",
          titulo: "Region"
        },
        {
          atributo: "escuela.nombre",
          titulo: "Ubicación"
        },
        {
          atributo: "escuela.cue",
          titulo: "CUE"
        },
        {
          atributo: "responsable.nombreCompleto",
          titulo: "responsable"
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
