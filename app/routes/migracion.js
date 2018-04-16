import Ember from 'ember';

export default Ember.Route.extend({
  activate() {
    return this.transitionTo("migracion");
  }
});
