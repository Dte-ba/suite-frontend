import Ember from "ember";

export default Ember.Route.extend({
  actions: {
    iniciarExportacion(datos) {
      this.transitionTo("app.personas.informes.exportar", {
        queryParams: {
          desde: datos.get("desde"),
          hasta: datos.get("hasta"),
          perfil_id: datos.get("perfil.id")
        }
      });
    }
  }
});
