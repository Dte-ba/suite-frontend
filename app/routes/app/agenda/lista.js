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
          titulo: "Inicio",
          componente: "suite-detalle/fecha-acciones-lista"
        },
        {
          titulo: "Fin",
          componente: "suite-detalle/fecha-acciones-lista"
        },
        {
          titulo: "Título",
          atributo: "titulo",
          ruta: "app.agenda.detalle"
        },
        {
          titulo: "Region",
          atributo: "escuela.localidad.distrito.region.numero"
        },
        {
          titulo: "CUE",
          componente: "suite-detalle/cue"
        },
        {
          titulo: "Responsable",
          componente: "suite-detalle/responsable"
        },
        {
          titulo: "Acta",
          componente: "suite-detalle/acta-de-evento"
        },
        {
          titulo: "Traslado",
          componente: "suite-detalle/traslado"
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
