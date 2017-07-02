import Ember from "ember";

export default Ember.Route.extend({
  actions: {
    guardar(modelo) {
      modelo.save().then(() => {
        this.transitionTo("app.escuelas.detalle", modelo);
      });
    }
  }
});
