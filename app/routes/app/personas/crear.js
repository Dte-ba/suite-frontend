import Ember from "ember";

export default Ember.Route.extend({
  requiere: "personas.crear",
  perfil: Ember.inject.service(),
  model() {
    return this.store.createRecord("perfil", {});
  },
  afterModel(model) {
    model.set("opciones", {
      regiones: this.store.query("region", { page_size: 3000 }),
      cargos: this.store.findAll("cargo"),
      contratos: this.store.findAll("contrato"),
      aplicaciones: this.store.findAll("aplicacion"),
      groups: this.store.findAll("group")
    });
    model.set("usuario", model);
  },
  actions: {
    willTransition: function() {
      if (this.currentModel.get("isNew")) {
        this.get("currentModel").deleteRecord();
      }
    },
    regresar() {
      return this.transitionTo("app.personas.index");
    },
    cancelar() {
      return this.transitionTo("app.personas.index");
    }
  }
});
