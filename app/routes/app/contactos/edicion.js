import Ember from "ember";

export default Ember.Route.extend({
  requiere: "contacto.editar",
  perfil: Ember.inject.service(),

  afterModel(model) {
    if (!this.get("perfil").tienePermiso("contacto.editar")) {
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
      let escuela_id = model.get("escuela");
      return this.transitionTo("app.escuelas.detalle", escuela_id);
    },
    cancelar(model) {
      return this.transitionTo("app.contactos.detalle", model.get("id"));
    }
  }
});
