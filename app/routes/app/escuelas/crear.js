import Ember from "ember";

export default Ember.Route.extend({
  perfil: Ember.inject.service(),

  model() {
    return new Ember.RSVP.hash({
      nombre: "",
      area: this.store.findRecord("area", 1),
      motivoDeConformacion: "",
      localidad: "",
      padre: "",
      piso: ""
    }).then(valoresPorOmision => {
      let opciones = {
        nombre: valoresPorOmision.nombre,
        area: valoresPorOmision.area,
        motivoDeConformacion: valoresPorOmision.motivoDeConformacion,
        localidad: valoresPorOmision.localidad,
        padre: valoresPorOmision.padre,
        piso: valoresPorOmision.piso

      };

      return this.store.createRecord("escuela", opciones);
    });
  },

  afterModel(model) {
    model.set("opciones", {
      niveles: this.store.findAll("nivel"),
      areas: this.store.findAll("area"),
      modalidades: this.store.findAll("modalidad"),
      tiposDeFinanciamiento: this.store.findAll("tipo-de-financiamiento"),
      tiposDeGestion: this.store.findAll("tipo-de-gestion"),
      localidades: this.store.findAll("localidad")
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
