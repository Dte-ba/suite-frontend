import Ember from "ember";
import { task } from "ember-concurrency";
import ENV from "suite-frontend/config/environment";

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  queryParams: {
    pagina: { replace: true /*, refreshModel: true */ },
    filtro: { replace: true }
  },

  obtenerEscuelas: task(function*(query) {
    query.conformada = false;
    let data = yield this.store.query("escuela", query);
    let meta = data.get("meta");
    return { data, meta };
  }).drop(),

  obtenerEstadisticas: task(function*() {
    let url = ENV.API_URL + "/api/escuelas/estadistica";
    let resultado = yield this.get("ajax").request(url);
    return resultado;
  }).drop(),

  model() {
    return {
      estadisticas: this.get("obtenerEstadisticas").perform({}),
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
          titulo: "Localidad",
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
    };
  },

  actions: {
    alIngresarFiltro() {
      this.get("obtenerEscuelas").perform({});
    },
    crearUnaEscuelaNueva() {
      return this.transitionTo("app.escuelas.crear");
    }
  }
});
