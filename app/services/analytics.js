import Ember from "ember";

export default Ember.Service.extend({
  activado: false,

  inicializar() {
    this.set("activado", true);
    ga("create", "UA-98624597-1", "auto");
  },

  notifificarTransicion(ruta) {
    if (this.get("activado")) {
      Ember.run.later(() => {
        let params = {
          page: ruta,
          title: ruta
        };
        ga("send", "pageview", params);
      });
    }
  }
});
