import Ember from "ember";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";
import { UnauthorizedError } from "ember-ajax/errors";

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  perfil: Ember.inject.service(),
  notificador: Ember.inject.service(),

  model(params) {
    return this.get("perfil")
      .cargar(params.perfilInspeccionado)
      .catch(error => this.logoutIfInvalidSession(error));
  },
  afterModel() {
    if (this.get("perfil.tieneAccesoARobotica")) {
      this.transitionTo("robotica.index");
    } else {

      if (this.get("perfil.tieneAccesoASuite")) {
        this.transitionTo("app.escritorio.index");
      } else {
        this.get("notificador").error(`No tiene asignada ninguna aplicación`);
        Ember.run.later(() => {
          this.transitionTo("logout");
        }, 1000);
      }
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
