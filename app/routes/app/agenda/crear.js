import Ember from "ember";

export default Ember.Route.extend({
  model() {
    let hoy = moment().format("YYYY-MM-DD");

    return this.store.createRecord("evento", {
      fecha: hoy
    });
  },

  afterModel(model) {
    model.set("buscarPersonas", this.get("buscarPersonas"));
  },

  actions: {
    guardarEvento(modelo) {
      return modelo.save().then(() => {
        this.transitionTo("app.agenda.index");
      });
    },
    willTransition: function() {
      if (this.currentModel.get("isNew")) {
        this.get("currentModel").deleteRecord();
      }
    },
    cancelar() {
      return this.transitionTo("app.agenda.index");
    }
  }
});
