import Ember from "ember";

export default Ember.Controller.extend({
  notificador: Ember.inject.service(),

  actions: {
    eliminar(accion) {
      accion
        .destroyRecord()
        .then(() => {
          this.get("notificador").info("Se ha eliminado el taller.");
          this.transitionToRoute("robotica.agenda.index");
        })
        .catch(() => {
          this.get("notificador").error("No se pudo eliminar el taller.");
        });
    }
  }
});
