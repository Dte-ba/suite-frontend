import Ember from "ember";

export default Ember.Controller.extend({
  sesion: Ember.inject.service(),
  queryParams: ["perfilInspeccionado"],
  perfilInspeccionado: null,
  perfil: Ember.inject.service(),

  actions: {
    logout() {
      let session = this.get("sesion");
      let controller = this;

      this.get("store")
        .findAll("sesion")
        .then(function(record) {
          record.content.forEach(function(rec) {
            Ember.run.once(this, function() {
              rec.deleteRecord();
              rec.save();

              session.logout();
              controller.transitionToRoute("login");
            });
          }, this);
        });
    }
  }
});
