import Ember from "ember";

export default Ember.Route.extend({
  requiere: "personas.editar",
  perfil: Ember.inject.service(),

  afterModel(model) {
    if (!this.get("perfil").tienePermiso("personas.editar")) {
      this.transitionTo("/app/");
    } else {
      model.set("opciones", {
        cargos: this.store.findAll("cargoEscolar")
      });
      model.set("usuario", model);
    }
  },
  actions: {
    regresar(model) {
      return this.transitionTo("app.personas.detalle", model.get("id"));
    },
    cancelar(model) {
      return this.transitionTo("app.personas.detalle", model.get("id"));
    }
  }
});
