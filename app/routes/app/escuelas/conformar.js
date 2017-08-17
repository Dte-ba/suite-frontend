import Ember from 'ember';


export default Ember.Route.extend({
  afterModel(model) {
    model.set("motivos", this.store.findAll("MotivoDeConformacion"));
    model.set("aplicarConformacion", this.get('aplicarConformacion'));
  },

  actions: {
    cuandoFinalizoConformacion(model) {
      return this.transitionTo("app.escuelas.detalle", model);
    },

    cancelar(model) {
      return this.transitionTo("app.escuelas.detalle", model);
    }
  }
});
