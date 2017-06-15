import Ember from "ember";

export default Ember.Route.extend({
  remodal: Ember.inject.service(),

  actions: {
    abrirModalConPreferenciasDeUsuario() {
      this.get("remodal").open("modalConPreferenciasDeUsuario");
    },

    cerrarDialogo() {
      this.get("remodal").close("modalConPreferenciasDeUsuario");
    }
  }
});
