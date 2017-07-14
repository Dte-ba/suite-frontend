import Ember from "ember";

export default Ember.Route.extend({
  session: Ember.inject.service(),

  afterModel() {
    this.get("session").invalidate();
    this.transitionTo("login");
  }
});
