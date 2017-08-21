import Ember from "ember";
import { task } from "ember-concurrency";
import ENV from "suite-frontend/config/environment";

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  queryParams: {
    pagina: { replace: true, refreshModel: true },
    filtro: { replace: true }
  },

  obtenerValidaciones: task(function*(query) {
    let data = yield this.store.query("validacion", query);
    let meta = data.get("meta");
    return { data, meta };
  }).drop(),

  obtenerEstadisticas: task(function*() {
    let url = ENV.API_URL + "/api/validaciones/estadistica";
    let resultado = yield this.get("ajax").request(url);
    return resultado;
  }).drop(),

  model() {
    return Ember.RSVP.hash({
      estadisticas: this.get("obtenerEstadisticas").perform({}),
      tareaValidaciones: this.get("obtenerValidaciones"),
      columnas: [
        {
          atributo: "fechaDeAlta",
          titulo: "Pedido el",
          fecha: true
        },
        {
          atributo: "",
          titulo: "Pedidas"
        },
        {
          atributo: "",
          titulo: "Validadas"
        },
        {
          titulo: "Pedida por",
          componente: "suite-detalle/autor"
        },
        {
          atributo: "estado.nombre",
          titulo: "Estado",
          promesa: "estado"
        },
        {
          atributo: "observaciones",
          titulo: "Observaciones"
        },
        {
          atributo: "escuela.nombre",
          titulo: "Escuela",
          promesa: "escuela",
          ruta: "app.escuelas.detalle"
        },
        {
          atributo: "escuela.cue",
          titulo: "CUE",
          promesa: "escuela"
        },
        {
          atributo: "escuela.localidad.distrito.region.numero",
          titulo: "Región",
          promesa: "escuela"
        },
        {
          atributo: "escuela.localidad.nombre",
          titulo: "Localidad",
          promesa: "escuela.localidad"
        }
      ]
    });
  },

  actions: {
    alIngresarFiltro() {
      this.get("obtenerValidaciones").perform({});
    }
  }
});
