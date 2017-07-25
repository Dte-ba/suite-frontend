import Ember from "ember";
import { task } from "ember-concurrency";

export default Ember.Route.extend({
  queryParams: {
    pagina: { replace: true, refreshModel: true },
    filtro: { replace: true }
  },

  obtenerTareas: task(function*(query) {
    let data = yield this.store.query("tarea", query);
    let meta = data.get("meta");
    return { data, meta };
  }).drop(),

  model() {
    return Ember.RSVP.hash({
      tareaTareas: this.get("obtenerTareas"),
      columnas: [
        {
          atributo: "titulo",
          titulo: "Título",
          ruta: "app.tareas.detalle"
        },
        {
          atributo: "fechaDeAlta",
          titulo: "Fecha de Alta"
        },
        {
          atributo: "autor.nombreCompleto",
          titulo: "autor",
          promesa: "autor.nombreCompleto"
        },
        {
          atributo: "responsable.nombreCompleto",
          titulo: "Responsable",
          promesa: "responsable.nombreCompleto"
        },
        {
          atributo: "descripcion",
          titulo: "Descripción",
        }
      ]
    });
  },

  actions: {
    alIngresarFiltro() {
      this.get("obtenerTareas").perform({});
    }
  }
});
