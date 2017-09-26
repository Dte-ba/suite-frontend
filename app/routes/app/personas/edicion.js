import Ember from "ember";

export default Ember.Route.extend({
  perfil: Ember.inject.service(),
  breadCrumb: { title: `Edición` },

  afterModel(model) {
    if (!this.get("perfil").tienePermiso("personas.editar")) {
      this.transitionTo("/app/");
    } else {
      model.set("usuario", model);
      model.set("validaciones", []);
      model.set("contratos", this.store.findAll("contrato"));
    }
  }
});
