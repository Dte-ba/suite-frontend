import Ember from "ember";

export default Ember.Route.extend({
  breadCrumb: null,
  activate() {
    this.transitionTo("app.escritorio.index");
  }
});
