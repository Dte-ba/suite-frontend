import Ember from "ember";

export default Ember.Component.extend({
  session: Ember.inject.service(),
  perfil: Ember.inject.service(),
  classNames: ["ui", "item", "inline", "dropdown"],

  puedeSimularAcceso: Ember.computed("perfil", function() {
    let perfil = this.get("perfil");
    return perfil.tienePermiso("perfil.global");
  }),

  didInsertElement() {
    this.$().dropdown({});
  },

  actions: {
    invalidateSession() {
      this.get("session").invalidate();
    }
  }
});
