import Ember from "ember";

export default Ember.Route.extend({
  breadCrumb: { title: "Acciones territoriales" },
  perfil: Ember.inject.service(),

  model() {
    return {
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
