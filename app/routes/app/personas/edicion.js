import Ember from "ember";

export default Ember.Route.extend({
  requiere: "personas.editar",
  perfil: Ember.inject.service(),

  afterModel(model) {
    if (!this.get("perfil").tienePermiso("personas.editar")) {
      this.transitionTo("/app/");
    } else {
      model.set("opciones", {
        regiones: this.store.query("region", { page_size: 3000 }),
        cargos: this.store.findAll("cargo"),
        contratos: this.store.findAll("contrato"),
        groups: this.store.findAll("group")
      });
      model.set("usuario", model);
      model.set("validaciones", []);
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
