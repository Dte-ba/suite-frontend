import Ember from "ember";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";
import { UnauthorizedError } from "ember-ajax/errors";
import ENV from "../config/environment";

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  breadCrumb: null,
  perfil: Ember.inject.service(),
  authenticationRoute: "login",

  afterModel() {
    return this.get("perfil")
      .cargar()
      .then(() => {
        let perfil = this.get("perfil").data;

        if (ENV.enviroment === "production") {
          this.get("raven").inicializarContexto({
            id: perfil.username,
            nombre: perfil.nombre,
            apellido: perfil.apellido,
            region: "??"
          });

          this.get("raven").info("Ingresa correctamente");

          this.get("raven").registrarAccion({
            mensaje: "Ingresa correctamente"
          });

          this.get("raven").capturarErroresGlobales();
        }
      })
      .catch(error => this.logoutIfInvalidSession(error));
  },

  logoutIfInvalidSession(error) {
    if (error instanceof UnauthorizedError) {
      this.transitionTo("logout");
    } else {
      throw error;
    }
  }
});
