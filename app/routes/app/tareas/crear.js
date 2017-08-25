import Ember from "ember";
import { task } from "ember-concurrency";

export default Ember.Route.extend({
  perfil: Ember.inject.service(),

  model() {
    return new Ember.RSVP.hash({
      titulo: "titulo por omisión",
      estadoDeTarea: this.store.findRecord("estadoDeTarea", 1),
      autor: this.get("perfil.miPerfil"),
      responsable: this.get("perfil.miPerfil"),
      prioridadDeTarea: this.store.findRecord("prioridadDeTarea", 1),
      estadosDeTareas: this.store.findAll("estadoDeTarea")
    }).then(valoresPorOmision => {
      let opciones = {
        titulo: valoresPorOmision.titulo,
        fechaDeAlta: moment(new Date()).format('YYYY-MM-DD'),
        autor: valoresPorOmision.autor,
        estadoDeTarea: valoresPorOmision.estadoDeTarea,
        responsable: valoresPorOmision.responsable,
        prioridadDeTarea: valoresPorOmision.prioridadDeTarea
      };

      return this.store.createRecord("tarea", opciones);
    });
  },

  afterModel(model) {
    model.set("tareaGuardar", this.tareaGuardar);
    model.set("opciones", {
      prioridadesDeTareas: this.store.findAll("prioridadDeTarea"),
      motivosDeTarea: this.store.findAll("motivoDeTarea")
    });
  },

  tareaGuardar: task(function*(modelo) {
    try {
      let resultado = yield modelo.save();
      this.transitionTo("app.tareas.index");
      return resultado;
    } catch (e) {
      throw new Error("Ha ocurrido un error del lado del servidor");
    }
  }).drop(),

  actions: {
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
