import Ember from "ember";

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      eventos: this.store.findAll("evento"),
      mostrarFinesDeSemana: false
    });
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
