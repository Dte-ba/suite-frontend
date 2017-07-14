import Ember from "ember";

export default Ember.Route.extend({
  breadCrumb: null,
  afterModel() {
    this.transitionTo("app.escritorio.index");
  }
});
