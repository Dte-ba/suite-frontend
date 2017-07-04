import Ember from "ember";

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord("evento", params.id);
  },

  actions: {
    guardarEvento(modelo) {
      return modelo.save().then(() => {
        this.transitionTo("app.agenda.index");
      });
    },
    cancelar() {
      return this.transitionTo("app.agenda.index");
    }
  }
});
