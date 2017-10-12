import Ember from "ember";
import { task } from "ember-concurrency";
import ENV from "suite-frontend/config/environment";

export default Ember.Route.extend({
  requiere: "tareas.listar",
  ajax: Ember.inject.service(),
  perfilService: Ember.inject.service("perfil"),

  obtenerTareas: task(function*() {
    let query = {};

    let model = this.modelFor(this.routeName) || {};

    query.page = model.pagina;
    query.query = model.filtro;

    query.escuela__localidad__distrito__region__numero = Ember.get(
      model,
      "region.numero"
    );

    let data = yield this.store.query("tarea", query);

    let meta = data.get("meta");
    return { data, meta };
  }).drop(),

  obtenerEstadisticas: task(function*() {
    let url = ENV.API_URL + "/api/tareas/estadistica";
    let resultado = yield this.get("ajax").request(url);
    return resultado;
  }).drop(),

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
  },

  actions: {
    alIngresarFiltro(valor) {
      let model = this.modelFor(this.routeName);
      Ember.set(model, "filtro", valor);
      Ember.set(model, "pagina", 1);
      this.actualizar();
    },
    cuandoCambiaPagina(pagina) {
      let model = this.modelFor(this.routeName);
      Ember.set(model, "pagina", pagina);
      this.actualizar();
    },
    cuandoSeleccionaRegion(region) {
      let model = this.modelFor(this.routeName);
      Ember.set(model, "region", region);
      Ember.set(model, "pagina", 1);
      this.actualizar();
    },
    crearUnaTareaNueva() {
      return this.transitionTo("app.tareas.crear");
    }
  }
});
