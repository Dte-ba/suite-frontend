import Ember from "ember";
import { task } from "ember-concurrency";
import ENV from "suite-frontend/config/environment";

export default Ember.Route.extend({
  requiere: "agenda.listar",

  breadCrumb: { title: "Acciones territoriales" },
  perfil: Ember.inject.service(),
  ajax: Ember.inject.service(),

  obtenerEstadisticas: task(function*() {
    let i = "2018-01-01";
    let f = "2018-12-31";
    let perfil = this.get("perfil");
    let perfilId = perfil.data.idPerfil;
    let region = perfil.data.region;

    let base = ENV.API_URL;
    let url = "";
    if (this.get("perfil").tienePermiso("perfil.global")) {
      url = `${base}/api/eventos/estadistica?inicio=${i}&fin=${f}`;
    } else {
      url = `${base}/api/eventos/estadistica?inicio=${i}&fin=${f}&perfil=${perfilId}&region=${region}`;
    }

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
