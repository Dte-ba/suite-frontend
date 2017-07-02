import Ember from "ember";

export default Ember.Route.extend({
  afterModel(model) {
    model.set(
      "tiposDeFinanciamiento",
      this.store.findAll("tipoDeFinanciamiento")
    );

    model.set("localidades", this.store.findAll("localidad"));
  },
  actions: {
    guardar(modelo) {
      modelo.save().then(() => {
        this.transitionTo("app.escuelas.detalle", modelo);
      });
    }
  }
});
