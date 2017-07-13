import Ember from "ember";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  breadCrumb: null,
  perfil: Ember.inject.service()

  //afterModel() {
  //  return this.get("perfil").cargar();
  //}
});
