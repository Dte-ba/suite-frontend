import Ember from "ember";

export default Ember.Route.extend({
  model() {
    return new Ember.RSVP.hash({
      servidor: ""
    }).then(valoresPorOmision => {
      let opciones = {
        servidor: valoresPorOmision.servidor
      };

      return this.store.createRecord("piso", opciones);
    });
  },

  actions: {
    willTransition: function() {
      if (this.currentModel.get("isNew")) {
        this.get("currentModel").deleteRecord();
      }
    },
    regresar() {
      return this.transitionTo("app.escuelas.index");
    },
    cancelar() {
      return this.transitionTo("app.escuelas.index");
    }
  }
});
