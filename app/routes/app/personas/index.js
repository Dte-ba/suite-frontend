import Ember from "ember";
import { task } from "ember-concurrency";
import ENV from "suite-frontend/config/environment";

export default Ember.Route.extend({
  perfil: Ember.inject.service("perfil"),
  ajax: Ember.inject.service(),

  obtenerPersonas: task(function*() {
    let model = this.modelFor(this.routeName);
    let data = yield this.store.query("perfil", {
      page: model.pagina,
      query: model.filtro
    });
    let meta = data.get("meta");
    return { data, meta };
  }).drop(),

  obtenerEstadisticas: task(function*() {
    let url = ENV.API_URL + "/api/perfiles/estadistica";
    let resultado = yield this.get("ajax").request(url);
    return resultado;
  }).drop(),

  actualizar() {
    this.get("obtenerPersonas").perform();
  },

  afterModel() {
    if (!this.get("perfil").tienePermiso("personas.listar")) {
      this.transitionTo("/app/");
    } else {
      this.actualizar();
    }
  },

  model() {
    return {
      pagina: 1,
      filtro: "",
      estadisticas: this.get("obtenerEstadisticas").perform({}),
      tareaPersonas: this.get("obtenerPersonas"),
      columnas: [
        {
          atributo: "nombreCompleto",
          titulo: "Apellido y nombre",
          ruta: "app.personas.detalle"
        },
        {
          atributo: "region.numero",
          titulo: "Región"
        },
        {
          atributo: "cargo.nombre",
          titulo: "Cargo"
        },
        {
          atributo: "cuit",
          titulo: "CUIL/CUIT"
        },
        {
          atributo: "emailLaboral",
          titulo: "Email Laboral"
        },
        {
          titulo: "Grupo",
          componente: "suite-detalle/group"
        },
        {
          titulo: "Contrato",
          componente: "suite-detalle/contrato"
        },
        {
          atributo: "fechaDeIngreso",
          titulo: "Fecha de Ingreso",
          fecha: true
        }
      ]
    };
  },

  actions: {
    crearUnUsuarioNuevo() {
      return this.transitionTo("app.personas.crear");
    },
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
    }
  }
});
