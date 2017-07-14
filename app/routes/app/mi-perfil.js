import Ember from "ember";

export default Ember.Route.extend({
  perfil: Ember.inject.service(),

  model() {
    return this.get("perfil.data");
  }
});
