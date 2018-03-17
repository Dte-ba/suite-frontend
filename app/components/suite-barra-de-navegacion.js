import Ember from "ember";

export default Ember.Component.extend({
  classNames: ["ui", "fixed", "menu", "inverted", "barra-de-navegacion", "z-max"],
  perfil: Ember.inject.service(),
  nombreCompleto: Ember.computed.alias("perfil.nombreCompleto"),
  rol: Ember.computed.alias("perfil.rol"),
  region: Ember.computed.alias("perfil.region"),
  sidebarVisible: true,

  actions: {
    mostrarSidebar() {
      this.set("sidebarVisible", true);
    },
    ocultarSidebar() {
      this.set("sidebarVisible", false);
    }
  }
});
