import Ember from "ember";

export default Ember.Controller.extend({
  notificador: Ember.inject.service(),

  actions: {
    eliminar(tarea) {
      tarea
        .destroyRecord()
        .then(() => {
          this.get("notificador").info("Se ha eliminado la tarea.");
          this.transitionToRoute("app.tareas.index");
        })
        .catch(() => {
          this.get("notificador").error("No se pudo eliminar la tarea.");
        });
    }
  }
});
