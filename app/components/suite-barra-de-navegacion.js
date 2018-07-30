import Ember from "ember";

export default Ember.Component.extend({
  tagName: "",
  perfil: Ember.inject.service(),
  nombreCompleto: Ember.computed.alias("perfil.nombreCompleto"),
  rol: Ember.computed.alias("perfil.rol"),
  region: Ember.computed.alias("perfil.region"),
  sidebarVisible: false,

  actions: {
    mostrarSidebar() {
      this.set("sidebarVisible", true);
    },
    ocultarSidebar() {
      this.set("sidebarVisible", false);
    }
  }
});
