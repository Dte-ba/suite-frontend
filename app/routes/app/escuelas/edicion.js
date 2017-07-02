import Ember from "ember";

export default Ember.Route.extend({
  afterModel(model) {
    model.set(
      "tiposDeFinanciamiento",
      this.store.findAll("tipoDeFinanciamiento")
    );
  },
  actions: {
    guardar(modelo) {
      modelo.save().then(() => {
        this.transitionTo("app.escuelas.edicion", modelo);
      });
    }
  }
});
