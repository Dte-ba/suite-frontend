import Ember from "ember";

import { task, timeout } from "ember-concurrency";

export default Ember.Route.extend({
  model() {
    let hoy = "2017-10-10T20:00";
    return this.store.createRecord("evento", {
      fechainicio: hoy,
      fechafin: hoy,
      titulo: "demo 123123"
    });
  },

  buscarPersonas: task(function*(term) {
    yield timeout(200);
    return this.store.query("perfil", { search: term });
  }),

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
