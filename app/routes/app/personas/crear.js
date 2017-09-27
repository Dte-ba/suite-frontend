import Ember from "ember";

export default Ember.Route.extend({
  requiere: "personas.crear",
  perfil: Ember.inject.service(),

  model() {
    return new Ember.RSVP.hash({
      dni: ""
    }).then(valoresPorOmision => {
      let opciones = {
        dni: valoresPorOmision.dni
      };

      return this.store.createRecord("perfil", opciones);
    });
  },

  // afterModel(model) {
  //   model.set("opciones", {
  //     niveles: this.store.findAll("nivel"),
  //     areas: this.store.findAll("area"),
  //     modalidades: this.store.findAll("modalidad"),
  //     tiposDeFinanciamiento: this.store.findAll("tipo-de-financiamiento"),
  //     tiposDeGestion: this.store.findAll("tipo-de-gestion"),
  //     localidades: this.store.findAll("localidad")
  //   });
  // },

  actions: {
    willTransition: function() {
      if (this.currentModel.get("isNew")) {
        this.get("currentModel").deleteRecord();
      }
    },
    regresar() {
      return this.transitionTo("app.perfil.index");
    },
    cancelar() {
      return this.transitionTo("app.perfil.index");
    }
  }
});
