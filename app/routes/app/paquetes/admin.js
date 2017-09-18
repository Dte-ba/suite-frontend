import Ember from "ember";
import { task } from "ember-concurrency";
import ENV from "suite-frontend/config/environment";

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  obtenerPaquetes: task(function*() {
    let model = this.modelFor(this.routeName);

    let data = yield this.store.query("paquete", {
      page: model.pagina,
      query: model.filtro
    });

    let meta = data.get("meta");
    return { data, meta };
  }).drop(),

  obtenerEstadisticas: task(function*() {
    let url = ENV.API_URL + "/api/paquetes/estadistica";
    let resultado = yield this.get("ajax").request(url);
    return resultado;
  }).drop(),

  actualizar() {
    this.get("obtenerPaquetes").perform();
  },

  afterModel() {
    this.actualizar();
  },

  model() {
    return {
      pagina: 1,
      filtro: "",

      estadisticas: this.get("obtenerEstadisticas").perform({}),
      tareaPaquetes: this.get("obtenerPaquetes"),
      columnas: [
        {
          titulo: "id",
          atributo: "id"
        },
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
          atributo: "fechaPedido",
          titulo: "Pedido",
          fecha: true
        },
        {
          atributo: "ne",
          titulo: "NE"
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
          titulo: "Estado",
          componente: "suite-detalle/estado-de-paquete"
        },
        {
          atributo: "comentario",
          titulo: "Comentarios"
        },
        {
          titulo: "Acciones",
          componente: "matrix/acciones-lista"
        }
      ]
    };
  },

  actions: {
    alIngresarFiltro(valor) {
      let model = this.modelFor(this.routeName);
      Ember.set(model, "filtro", valor);
      Ember.set(model, "pagina", 1);
      this.actualizar();
    },
    crearUnPaqueteNuevo() {
      return this.transitionTo("app.paquetes.crear");
    },
    crearPaquetesMasivos() {
      return this.transitionTo("app.paquetes.crearMasivo");
    },
    cuandoCambiaPagina(pagina) {
      let model = this.modelFor(this.routeName);
      Ember.set(model, "pagina", pagina);
      this.actualizar();
    }
  }
});
