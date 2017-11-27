import Ember from "ember";

export default Ember.Controller.extend({
  notificador: Ember.inject.service(),

  actions: {
    definirClave() {
      this.get("notificador").info("Se ha cambiado la clave correctamente.");
      this.transitionToRoute("app.personas.detalle", this.get("model"));
    },
    cancelar() {
      this.transitionToRoute("app.personas.detalle", this.get("model"));
    }
  }
});
