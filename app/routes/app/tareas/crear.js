import Ember from "ember";

export default Ember.Route.extend({
  requiere: "tareas.crear",
  perfil: Ember.inject.service(),

  model() {
    return new Ember.RSVP.hash({
      titulo: "",
      estadoDeTarea: this.store.findRecord("estadoDeTarea", 1),
      autor: this.get("perfil.miPerfil"),
      responsable: this.get("perfil.miPerfil"),
      prioridadDeTarea: this.store.findRecord("prioridadDeTarea", 1),
      estadosDeTareas: this.store.findAll("estadoDeTarea")
    }).then(valoresPorOmision => {
      let opciones = {
        titulo: valoresPorOmision.titulo,
        fechaDeAlta: moment(new Date()).format("YYYY-MM-DD"),
        autor: valoresPorOmision.autor,
        estadoDeTarea: valoresPorOmision.estadoDeTarea,
        responsable: valoresPorOmision.responsable,
        prioridadDeTarea: valoresPorOmision.prioridadDeTarea
      };

      return this.store.createRecord("tarea", opciones);
    });
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
    willTransition: function() {
      if (this.currentModel.get("isNew")) {
        this.get("currentModel").deleteRecord();
      }
    },

    cancelar() {
      return this.transitionTo("app.tareas.index");
    }
  }
});
