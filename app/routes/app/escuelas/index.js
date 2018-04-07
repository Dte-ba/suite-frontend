import Ember from "ember";
import { task } from "ember-concurrency";
import ENV from "suite-frontend/config/environment";

export default Ember.Route.extend({
  requiere: "escuelas.listar",
  ajax: Ember.inject.service(),
  perfilService: Ember.inject.service("perfil"),
  descargas: Ember.inject.service(),

  tareaExportarEscuelas: task(function*() {
    let url = `/api/escuelas/export`;
    yield this.get("descargas").iniciar(url, "escuelas.xls");
  }).drop(),

  obtenerEstadisticas: task(function*() {
    let url = ENV.API_URL + "/api/escuelas/estadistica";
    let resultado = yield this.get("ajax").request(url);
    return resultado;
  }).drop(),

  model() {
    let soloSuRegion = !this.get("perfilService").tienePermiso("perfil.global");
    let regionPreSeleccionada = null;

    if (soloSuRegion) {
      regionPreSeleccionada = this.get("perfilService").obtenerRegion();
    } else {
      regionPreSeleccionada = Ember.Object.create({
        nombre: "Todas las regiones",
        numero: ""
      });
    }

    return {
      estadisticas: this.get("obtenerEstadisticas").perform({}),
      tareaExportar: this.get("tareaExportarEscuelas"),

      /* valores a utilizar como filtros */
      deshabilitarSeleccionDeRegion: soloSuRegion,

      region: regionPreSeleccionada,

      columnas: [
        {
          atributo: "nombre",
          titulo: "Nombre",
          ruta: "app.escuelas.detalle",
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
          promesa: "localidad"
        },
        {
          atributo: "localidad.distrito.nombre",
          titulo: "Distrito",
          promesa: "localidad.distrito"
        },
        {
          atributo: "modalidad.nombre",
          titulo: "Modalidad",
          promesa: "modalidad"
        },
        {
          atributo: "nivel.nombre",
          titulo: "Nivel",
          promesa: "nivel"
        },
        {
          atributo: "programas",
          titulo: "Programas",
          template: "suite-tabla/celda-programas"
        },
        {
          atributo: "tipoDeGestion.nombre",
          titulo: "Gestión",
          promesa: "tipoDeGestion"
        },
        {
          atributo: "piso.estado",
          titulo: "Piso",
          template: "suite-tabla/celda-pisos"
        },
        {
          atributo: "piso.llave",
          titulo: "Llave",
          template: "suite-tabla/celda-llave"
        },
        {
          atributo: "estadoDeEscuela",
          titulo: "",
          template: "suite-tabla/celda-estado-de-escuela"
        }
      ]
    };
  },
  actions: {
    crearUnaEscuelaNueva() {
      return this.transitionTo("app.escuelas.crear");
    },
    exportarEscuelas() {
      return this.get("tareaExportarEscuelas").perform();
    }
  }
});
