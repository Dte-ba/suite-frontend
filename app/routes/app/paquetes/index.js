import Ember from "ember";
import { task } from "ember-concurrency";
import ENV from "suite-frontend/config/environment";

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  queryParams: {
    pagina: { replace: true, refreshModel: true },
    filtro: { replace: true }
  },

  obtenerPaquetes: task(function*(query) {
    let data = yield this.store.query("paquete", query);
    let meta = data.get("meta");
    return { data, meta };
  }).drop(),

  obtenerEstadisticas: task(function*() {
    let url = ENV.API_URL + "/api/paquetes/estadistica";
    let resultado = yield this.get("ajax").request(url);
    return resultado;
  }).drop(),

  model() {
    return Ember.RSVP.hash({
      estadisticas: this.get("obtenerEstadisticas").perform({}),
      tareaPaquetes: this.get("obtenerPaquetes"),
      columnas: [
        {
          titulo: "CUE",
          componente: "suite-detalle/cue"
        },
        {
          atributo: "escuela.localidad.distrito.region.numero",
          titulo: "Región",
          promesa: "escuela"
        },
        {
          atributo: "escuela.piso.serie",
          titulo: "Nº de Serie servidor",
          promesa: "escuela"
        },
        {
          atributo: "idhardware_ma",
          titulo: "ID de hardware / Marca de Arranque"
        },
        {
          atributo: "ne",
          titulo: "NE"
        },
        {
          atributo: "fechaPedido",
          titulo: "Pedido",
          fecha: true
        },
        {
          titulo: "Estado",
          componente: "suite-detalle/estado-de-paquete"
        },
        {
          atributo: "comentario",
          titulo: "Comentarios"
        }
      ]
    });
  },

  actions: {
    alIngresarFiltro() {
      this.get("obtenerPaquetes").perform({});
    }
  }
});
