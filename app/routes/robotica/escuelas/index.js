import Ember from "ember";
import { task } from "ember-concurrency";
import ENV from "suite-frontend/config/environment";

export default Ember.Route.extend({
  requiere: "escuelas.listar",
  ajax: Ember.inject.service(),
  descargas: Ember.inject.service(),
  perfilService: Ember.inject.service("perfil"),

  tareaExportarEscuelas: task(function*() {
    let url = `/api/escuelas/export`;
    yield this.get("descargas").iniciar(url, "escuelas.xls");
  }).drop(),

  obtenerEstadisticas: task(function*() {
    let region = this.get("perfilService").obtenerRegion();
    let url = "";
    if (region && region.get("numero") != "27") {
      url =
        ENV.API_URL +
        "/api/escuelas/estadistica?nivel=2&localidad__distrito__region__numero=" +
        region.get("numero");
    } else {
      url = ENV.API_URL + "/api/escuelas/estadistica?nivel=2&robotica=true";
    }

    let resultado = yield this.get("ajax").request(url);
    return resultado;
  }).drop(),

  model() {
    return {
      estadisticas: this.get("obtenerEstadisticas").perform({}),
      tareaExportar: this.get("tareaExportarEscuelas"),

      columnas: [
        {
          atributo: "nombre",
          titulo: "Nombre",
          ruta: "robotica.escuelas.detalle",
          ordenamiento: "nombre"
        },
        {
          atributo: "cue",
          titulo: "CUE",
          ordenamiento: "cue"
        },
        {
          atributo: "numero_de_region",
          titulo: "Región",
          ordenamiento: "localidad__distrito__region__numero"
        },
        {
          atributo: "localidad.nombre",
          titulo: "Localidad",
          promesa: "localidad",
          ordenamiento: "localidad__nombre"
        },
        {
          atributo: "localidad.distrito.nombre",
          titulo: "Distrito",
          promesa: "localidad.distrito",
          ordenamiento: "localidad__distrito__nombre"
        },
        {
          atributo: "programas",
          titulo: "Programas",
          template: "suite-tabla/celda-programas"
        }
      ]
    };
  },
  actions: {
    // crearUnaEscuelaNueva() {
    //   return this.transitionTo("robotica.escuelas.crear");
    // },
    // exportarEscuelas() {
    //   return this.get("tareaExportarEscuelas").perform();
    // }
  }
});
