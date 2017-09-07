import Ember from "ember";
import { task } from "ember-concurrency";
import ENV from "suite-frontend/config/environment";

export default Ember.Route.extend({
  breadCrumb: { title: "Acciones territoriales" },
  perfil: Ember.inject.service(),
  ajax: Ember.inject.service(),

  obtenerEstadisticas: task(function*() {
    let url = ENV.API_URL + "/api/eventos/estadistica";
    let resultado = yield this.get("ajax").request(url);
    return resultado;
  }).drop(),

  model() {
    return {
      estadisticas: this.get("obtenerEstadisticas").perform({}),
      mostrarFinesDeSemana: false,
      perfil: this.get("perfil")
    };
  },

  actions: {
    crearUnEventoNuevo() {
      return this.transitionTo("app.agenda.crear");
    },

    editarUnEvento(eventoSeleccionado) {
      return this.transitionTo("app.agenda.editar", eventoSeleccionado.id);
    }
  }
});
