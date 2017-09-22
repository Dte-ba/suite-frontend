import Ember from "ember";

export default Ember.Route.extend({
  afterModel(model) {
    model.set("buscarPersonas", this.get("buscarPersonas"));
    model.set("categorias", this.store.findAll("categoriaDeEvento"));

    if (model.get("acta")) {
      this.transitionTo("app.agenda.detalle", model.get("id"));
    }
  },
  actions: {
    guardarEvento(modelo) {
      return modelo.save().then(() => {
        this.transitionTo("app.agenda.detalle", modelo.get("id"));
      });
    },
    cancelar(modelo) {
      return this.transitionTo("app.agenda.detalle", modelo.get("id"));
    }
  }
});
