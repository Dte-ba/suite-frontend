import Ember from "ember";

export default Ember.Component.extend({
  perfil: null,
  actions: {
    cuandoSeleccionaPerfil(perfil) {
      this.set("perfil", perfil);
    }
  }
});
