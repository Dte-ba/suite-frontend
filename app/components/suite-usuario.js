import Ember from "ember";

export default Ember.Component.extend({
  session: Ember.inject.service(),
  perfil: Ember.inject.service(),
  tagName: "a",
  classNames: ["ui", "dropdown", "icon", "item"],

  actions: {
    invalidateSession() {
      this.get("session").invalidate();
    }
  }
});
