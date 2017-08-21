import Ember from "ember";
import { task } from "ember-concurrency";
import ENV from "suite-frontend/config/environment";

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  queryParams: {
    pagina: { replace: true /*, refreshModel: true */ },
    filtro: { replace: true }
  },

  obtenerTareas: task(function*(query) {
    let data = yield this.store.query("tarea", query);
    let meta = data.get("meta");
    return { data, meta };
  }).drop(),

  obtenerEstadisticas: task(function*() {
    let url = ENV.API_URL + "/api/tareas/estadistica";
    let resultado = yield this.get("ajax").request(url);
    return resultado;
  }).drop(),

  model() {
    return {
      estadisticas: this.get("obtenerEstadisticas").perform({}),
      tareaTareas: this.get("obtenerTareas"),
      columnas: [
        {
          atributo: "prioridadDeTarea.nombre",
          titulo: "Prioridad",
          promesa: "prioridadDeTarea"
        },
        {
          atributo: "titulo",
          titulo: "Título",
          ruta: "app.tareas.detalle"
        },
        {
          atributo: "fechaDeAlta",
          titulo: "Fecha de Alta",
          fecha: true
        },
        {
          titulo: "Autor",
          componente: "suite-detalle/autorDeLaTarea"
        },
        {
          atributo: "responsable.nombreCompleto",
          titulo: "Responsable",
          promesa: "responsable"
        },
        {
          titulo: "Descripción",
          componente: "suite-detalle/descripcionDeTarea"
        },
        {
          atributo: "motivoDeTarea.nombre",
          titulo: "Categoría",
          promesa: "motivoDeTarea"
        },
        {
          atributo: "estadoDeTarea.nombre",
          titulo: "Estado",
          promesa: "estadoDeTarea"
        }
      ]
    };
  },

  actions: {
    alIngresarFiltro() {
      this.get("obtenerTareas").perform({});
    }
  }
});
