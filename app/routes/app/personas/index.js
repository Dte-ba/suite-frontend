import Ember from "ember";
import { task } from "ember-concurrency";
import ENV from "suite-frontend/config/environment";

export default Ember.Route.extend({
  requiere: "personas.listar",
  perfil: Ember.inject.service("perfil"),
  ajax: Ember.inject.service(),

  obtenerEstadisticas: task(function*() {
    let url = ENV.API_URL + "/api/perfiles/estadistica";
    let resultado = yield this.get("ajax").request(url);
    return resultado;
  }).drop(),

  afterModel() {
    if (!this.get("perfil").tienePermiso("personas.listar")) {
      this.transitionTo("/app/");
    }
  },

  model() {
    return {
      estadisticas: this.get("obtenerEstadisticas").perform({})
    };
  },

  actions: {
    crearUnUsuarioNuevo() {
      return this.transitionTo("app.personas.crear");
    }
  }
});
