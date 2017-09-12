import Ember from "ember";

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord("tarea", params.id);
  },

  afterModel(model) {
    model.set("opciones", {
      prioridadesDeTareas: this.store.findAll("prioridadDeTarea"),
      motivosDeTarea: this.store.findAll("motivoDeTarea")
    });
  },
  actions: {
    guardarTarea(modelo) {
      return modelo.save().then(() => {
        this.transitionTo("app.tareas.index");
      });
    },
    cancelar() {
      return this.transitionTo("app.tareas.index");
    }
  }
});
