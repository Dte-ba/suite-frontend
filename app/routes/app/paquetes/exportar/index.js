import Ember from "ember";

export default Ember.Route.extend({
  model() {
    return this.set("opciones", {
      estadosDePaquete: this.store.findAll("estadoDePaquete")
    });
  },
  actions: {
    iniciarExportacion(datos) {
      var estado = datos.get("estado.nombre");
      if (!estado) {
        estado = "Todos";
      }
      this.transitionTo("app.paquetes.exportar.exportar", {
        queryParams: {
          desde: datos.get("desde"),
          hasta: datos.get("hasta"),
          estado: estado
        }
      });
    }
  }
});
