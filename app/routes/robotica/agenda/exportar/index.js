import Ember from "ember";

export default Ember.Route.extend({
  actions: {
    iniciarExportacion(datos) {
      this.transitionTo("robotica.agenda.exportar.exportar", {
        queryParams: {
          desde: datos.get("desde"),
          hasta: datos.get("hasta")
        }
      });
    }
  }
});
