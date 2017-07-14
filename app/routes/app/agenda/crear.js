import Ember from "ember";

export default Ember.Route.extend({
  model() {
    let hoy = "2017-10-10T20:00";
    return this.store.createRecord("evento", {
      fechainicio: hoy,
      fechafin: hoy,
      titulo: "demo 123123"
    });
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
