import Ember from "ember";
import ApplicationRouteMixin from "ember-simple-auth/mixins/application-route-mixin";

export default Ember.Route.extend(ApplicationRouteMixin, {
  sesion: Ember.inject.service(),

  model() {
    return this.store.findAll("sesion").then(data => {
      if (data.get("length") === 0) {
        return;
      } else {
        let nombre = data.get("firstObject").get("usuario");
        this.get("sesion").login(nombre);
      }
    });
  }
});
