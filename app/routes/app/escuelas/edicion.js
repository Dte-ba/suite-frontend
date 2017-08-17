import Ember from "ember";

export default Ember.Route.extend({
  afterModel(model) {
    model.set(
      "tiposDeFinanciamiento",
      this.store.findAll("tipoDeFinanciamiento")
    );

    model.set("localidades", this.store.findAll("localidad"));

    if (model.get('conformada')) {
      // TODO: Avisar que no puede editar una escuela conformada.
      this.transitionTo("app.escuelas.detalle", model);
    }
  },
  actions: {
    guardar(modelo) {
      modelo.save().then(() => {
        this.transitionTo("app.escuelas.detalle", modelo);
      });
    }
  }
});
