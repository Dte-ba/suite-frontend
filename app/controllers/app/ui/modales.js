import Ember from "ember";

export default Ember.Controller.extend({
  mostrarDialogo: false,

  actions: {
    abrirModalConPreferenciasDeUsuario() {
      this.set("mostrarDialogo", true);
    },

    cerrarDialogo() {
      this.set("mostrarDialogo", false);
    }
  }
});
