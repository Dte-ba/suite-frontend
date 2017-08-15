import Ember from "ember";

export default Ember.Component.extend({
  session: Ember.inject.service(),
  perfil: Ember.inject.service(),
  tagName: "",

  actions: {
    invalidateSession() {
      this.get("session").invalidate();
    }
  }
});
