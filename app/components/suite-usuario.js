import Ember from "ember";

export default Ember.Component.extend({
  session: Ember.inject.service(),
  perfil: Ember.inject.service(),
  classNames: ["ui", "dropdown", "icon", "item"],

  actions: {
    invalidateSession() {
      this.get("session").invalidate();
    }
  }
});
