import Ember from "ember";

export default Ember.Controller.extend({
  notificador: Ember.inject.service(),

  actions: {
    eliminar(accion) {
      accion
        .destroyRecord()
        .then(() => {
          this.get("notificador").info("Se ha eliminado el evento.");
          this.transitionToRoute("app.agenda.index");
        })
        .catch(() => {
          this.get("notificador").error("No se pudo eliminar el evento.");
        });
    }
  }
});
