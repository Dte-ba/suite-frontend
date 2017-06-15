import Ember from "ember";

export default Ember.Service.extend({
  usuario: null,

  nombre: Ember.computed("usuario", function() {
    return this.get("usuario");
  }),

  haIniciadoSesion: Ember.computed("usuario", function() {
    return this.get("usuario");
  }),

  login(nombreDelUsuario) {
    this.set("usuario", nombreDelUsuario);
  },

  logout() {
    this.set("usuario", null);
  }
});
