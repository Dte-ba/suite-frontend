import Ember from "ember";

export default Ember.Route.extend({
  actions: {
    regresar(model) {
      return this.transitionTo("app.escuelas.detalle", model.get("escuela.id"));
    },
    cancelar(model) {
      return this.transitionTo("app.escuelas.detalle", model.get("escuela.id"));
    }
  }
});
