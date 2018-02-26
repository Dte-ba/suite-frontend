import Ember from "ember";

export default Ember.Route.extend({
  requiere: "personas.crear",
  perfil: Ember.inject.service(),
  model() {
    return this.store.createRecord("contacto", {});
  },
  afterModel(model) {
    if (!this.get("perfil").tienePermiso("personas.crear")) {
      this.transitionTo("/app/");
    } else {
      model.set("opciones", {
        cargos: this.store.findAll("cargoEscolar")
      });
      model.set("usuario", model);
    }
  },
  actions: {
    willTransition: function() {
      if (this.currentModel.get("isNew")) {
        this.get("currentModel").deleteRecord();
      }
    },
    regresar(model) {
      return this.transitionTo("app.contactos.detalle", model.get("id"));
    },
    cancelar(model) {
      return this.transitionTo("app.contactos.detalle", model.get("id"));
    }
  }
});
