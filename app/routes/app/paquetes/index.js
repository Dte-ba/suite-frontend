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
          atributo: "escuela.cue",
          titulo: "CUE",
          promesa: "escuela",
          ruta: "app.escuelas.detalle"
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
          atributo: "idHardware",
          titulo: "ID de hardware"
        },
        {
          atributo: "marcaDeArranque",
          titulo: "Marca de arranque"
        },
        {
          atributo: "ne",
          titulo: "NE"
        },
        {
          atributo: "fechaPedido",
          titulo: "Pedido"
        },
        {
          atributo: "estado.nombre",
          titulo: "Estado",
          promesa: "estadoDePaquete"
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
