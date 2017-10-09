import Ember from "ember";

export default Ember.Component.extend({
  session: Ember.inject.service(),
  perfil: Ember.inject.service(),
  classNames: ['ui', 'item', 'inline', 'dropdown'],

  didInsertElement() {
    this.$().dropdown({});
  },

  actions: {
    invalidateSession() {
      this.get("session").invalidate();
    }
  }
});
