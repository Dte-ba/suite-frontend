import Ember from "ember";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";
import { UnauthorizedError } from "ember-ajax/errors";

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  breadCrumb: null,
  perfil: Ember.inject.service(),
  authenticationRoute: "login",
  requierePerfil: "robotica",
  queryParams: {
    perfilInspeccionado: {
      refreshModel: true
    }
  },

  model(params) {
    return this.get("perfil")
      .cargar(params.perfilInspeccionado)
      .catch(error => this.logoutIfInvalidSession(error));
  },

  afterModel(transition) {
    this._super(transition);

    return Ember.RSVP.hash({
      region: this.get("store").findRecord("region", this.get("perfil.data.idRegion")),
      regiones: this.get("store").findAll("region")
    });
  },

  logoutIfInvalidSession(error) {
    if (error instanceof UnauthorizedError) {
      this.transitionTo("logout");
    } else {
      throw error;
    }
  }
});
