import Ember from "ember";
import { task } from "ember-concurrency";

export default Ember.Route.extend({
  queryParams: {
    pagina: { replace: true, refreshModel: true },
    filtro: { replace: true }
  },

  obtenerEscuelas: task(function*(query) {
    let data = yield this.store.query("escuela", query);
    let meta = data.get("meta");
    return { data, meta };
  }).drop(),

  model() {
    return Ember.RSVP.hash({
      tareaEscuelas: this.get("obtenerEscuelas"),
      columnas: [
        {
          atributo: "nombre",
          titulo: "Nombre",
          ruta: "app.escuelas.detalle"
        },
        {
          atributo: "cue",
          titulo: "CUE"
        },
        {
          atributo: "localidad.distrito.region.numero",
          titulo: "Region",
          promesa: "localidad.distrito.region"
        },
        {
          atributo: "localidad.nombre",
          titulo: "Region",
          promesa: "localidad"
        },
        {
          atributo: "nivel.nombre",
          titulo: "Modalidad",
          promesa: "nivel"
        },
        {
          atributo: "programas",
          titulo: "Programas",
          template: "suite-tabla/celda-programas"
        },
        {
          atributo: "piso.estado",
          titulo: "Piso",
          template: "suite-tabla/celda-pisos"
        }
      ]
    });
  },

  actions: {
    alIngresarFiltro() {
      this.get("obtenerEscuelas").perform({});
    }
  }
});
