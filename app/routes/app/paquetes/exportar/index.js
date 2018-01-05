import Ember from "ember";

export default Ember.Route.extend({
  actions: {
    iniciarExportacion(datos) {
      this.transitionTo("app.paquetes.exportar.exportar", {
        queryParams: {
          desde: datos.get("desde"),
          hasta: datos.get("hasta"),
          estado: "Pendiente"
        }
      });
    }
  }
});
