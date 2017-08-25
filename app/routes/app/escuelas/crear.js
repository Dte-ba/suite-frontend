import Ember from "ember";

export default Ember.Route.extend({
  perfil: Ember.inject.service(),

  model() {
    return new Ember.RSVP.hash({
      area: this.store.findRecord("area", 1)
      // titulo: "",
      // nivel: this.store.findRecord("nivel", 1),
      // autor: this.get("perfil.miPerfil"),
      // responsable: this.get("perfil.miPerfil"),
      // prioridadDeTarea: this.store.findRecord("prioridadDeTarea", 1),
      // estadosDeTareas: this.store.findAll("estadoDeTarea")
    }).then(valoresPorOmision => {
      let opciones = {
        // titulo: valoresPorOmision.titulo,
        // fechaDeAlta: moment(new Date()).format("YYYY-MM-DD"),
        // autor: valoresPorOmision.autor,
        // estadoDeTarea: valoresPorOmision.estadoDeTarea,
        // responsable: valoresPorOmision.responsable,
        // prioridadDeTarea: valoresPorOmision.prioridadDeTarea
        // nivel: valoresPorOmision.nivel
        area: valoresPorOmision.area
      };

      return this.store.createRecord("escuela", opciones);
    });
  },

  afterModel(model) {
    model.set("opciones", {
      niveles: this.store.findAll("nivel"),
      areas: this.store.findAll("area"),
      modalidades: this.store.findAll("modalidad"),
      tiposDeFinanciamiento: this.store.findAll("tipo-de-financiamiento")
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
