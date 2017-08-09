import Ember from "ember";
import { task } from "ember-concurrency";

export default Ember.Route.extend({
  queryParams: {
    pagina: { replace: true, refreshModel: true },
    filtro: { replace: true }
  },

  obtenerEventos: task(function*(query) {
    let data = yield this.store.query("evento", query);
    let meta = data.get("meta");
    return { data, meta };
  }).drop(),

  model() {
    return Ember.RSVP.hash({
      tareaEventos: this.get("obtenerEventos"),
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
          titulo: "Título",
          ruta: "app.agenda.detalle"
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
          titulo: "Responsable"
        },
        {
          atributo: "",
          titulo: "Traslado"
        },
        {
          atributo: "",
          titulo: "Acta"
        },
        {
          atributo: "",
          titulo: "Autorización"
        },
        {
          atributo: "",
          titulo: "Comentarios"
        },
        {
          atributo: "todoElDia",
          titulo: "Día completo",
          template: "suite-tabla/celda-sino"
        }
      ]
    });
  },

  actions: {
    alIngresarFiltro() {
      this.get("obtenerEventos").perform({});
    }
  }
});
