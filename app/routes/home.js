import Ember from "ember";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";
import { UnauthorizedError } from "ember-ajax/errors";

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  perfil: Ember.inject.service(),
  model(params) {
    return this.get("perfil")
      .cargar(params.perfilInspeccionado)
      .catch(error => this.logoutIfInvalidSession(error));
  },
  afterModel() {
    if (this.get("perfil.tieneAccesoARobotica")) {
      this.transitionTo("robotica.index");
    } else {
      this.transitionTo("app.escritorio.index");
    }
  },
  logoutIfInvalidSession(error) {
    if (error instanceof UnauthorizedError) {
      this.transitionTo("logout");
    } else {
      throw error;
    }
  }
});
