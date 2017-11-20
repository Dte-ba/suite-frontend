import Ember from "ember";
import { task } from "ember-concurrency";
import ENV from "suite-frontend/config/environment";

export default Ember.Route.extend({
  requiere: "tareas.listar",
  /*
  ajax: Ember.inject.service(),
  perfilService: Ember.inject.service("perfil"),



,

  actualizar() {
    this.get("obtenerTareas").perform();
  },

  afterModel() {
    this.actualizar();
  },

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
      tareaTareas: this.get("obtenerTareas"),

      pagina: 1,
      filtro: "",
      deshabilitarSeleccionDeRegion: soloSuRegion,

      region: regionPreSeleccionada,


    };
  },

  actions: {


  }
  */

  model() {
    return {
      columnas: [
        {
          atributo: "prioridadDeTarea.nombre",
          titulo: "Prioridad",
          promesa: "prioridadDeTarea"
        },
        {
          atributo: "titulo",
          titulo: "Título",
          ruta: "app.tareas.detalle"
        },
        {
          atributo: "fechaDeAlta",
          titulo: "Fecha de Alta",
          fecha: true
        },
        {
          titulo: "Autor",
          componente: "suite-detalle/autorDeLaTarea"
        },
        {
          atributo: "responsable.nombreCompleto",
          titulo: "Responsable",
          promesa: "responsable"
        },
        {
          titulo: "Descripción",
          componente: "suite-detalle/descripcionDeTarea"
        },
        {
          atributo: "motivoDeTarea.nombre",
          titulo: "Categoría",
          promesa: "motivoDeTarea"
        },
        {
          titulo: "Distrito",
          atributo: "escuela.localidad.distrito.nombre"
        },
        {
          titulo: "Región",
          atributo: "escuela.localidad.distrito.region.numero"
        },
        {
          atributo: "estadoDeTarea.nombre",
          titulo: "Estado",
          promesa: "estadoDeTarea"
        }
      ]
    };
  }
});
