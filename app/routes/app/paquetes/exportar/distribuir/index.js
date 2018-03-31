import Ember from "ember";

export default Ember.Route.extend({
  requiere: "paquetes.exportar",
  perfil: Ember.inject.service(),

  model() {
    return this.store.createRecord("distribucionDePaquete", {});
  },

  actions: {
    willTransition: function() {
      if (this.currentModel.get("isNew")) {
        this.get("currentModel").deleteRecord();
      }
    },

    cuandoGuarda(model) {
      this.transitionTo("app.paquetes.exportar.distribuir.distribuir", model.get("id"));
    }
  }
});
