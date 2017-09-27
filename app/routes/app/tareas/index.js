import Ember from "ember";
import { task } from "ember-concurrency";
import ENV from "suite-frontend/config/environment";

export default Ember.Route.extend({
  requiere: "tareas.listar",
  ajax: Ember.inject.service(),

  obtenerTareas: task(function*() {
    let model = this.modelFor(this.routeName) || {};

    let data = yield this.store.query("tarea", {
      page: model.pagina,
      query: model.filtro
    });

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
    return {
      pagina: 1,
      filtro: "",
      estadisticas: this.get("obtenerEstadisticas").perform({}),
      tareaTareas: this.get("obtenerTareas"),
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
    crearUnaTareaNueva() {
      return this.transitionTo("app.tareas.crear");
    }
  }
});
