import Ember from "ember";
import ApplicationRouteMixin from "ember-simple-auth/mixins/application-route-mixin";
import moment from "moment";

export default Ember.Route.extend(ApplicationRouteMixin, {
  sesion: Ember.inject.service(),
  analytics: Ember.inject.service(),
  routeAfterAuthentication: "app",

  beforeModel() {
    // Emitiendo un mensaje para indicar que se están ocultando deprecation
    // messages de ember-data. Estos mensajes se ocultan desde el archivo
    // "config/deprecation-workflow.js".
    /* eslint-disable no-console */
    console.log("Ocultando deprecations messages de ember-data");
    /* eslint-enable no-console */

    this.get("analytics").inicializar();
    moment.locale("es");
  },

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
