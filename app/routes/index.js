import Ember from "ember";

export default Ember.Route.extend({
  afterModel() {
    return this.transitionTo("login");
  }
});
