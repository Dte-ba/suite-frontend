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
    var ruta = Ember.getOwner(this).lookup("controller:application")
      .currentPath;
    if (ruta) {
      var aplicacionActual = ruta.split(".")[0];
    } else {
      aplicacionActual = "";
    }
    this.set("aplicacionActual", aplicacionActual);
    this.$().dropdown({});
  },

  actions: {
    invalidateSession() {
      this.get("session").invalidate();
    }
  }
});
