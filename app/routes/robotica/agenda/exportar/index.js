import Ember from "ember";

export default Ember.Route.extend({
  afterModel(model) {
    model.set("criteriosDeExportacion", [
      { key: "fechaDeCreacion", nombre: "Fecha de creación" },
      { key: "fechaDeRealizacion", nombre: "Fecha de realización" }
    ]);
    return;
  },
  actions: {
    iniciarExportacion(datos) {
      this.transitionTo("robotica.agenda.exportar.exportar", {
        queryParams: {
          desde: datos.get("desde"),
          hasta: datos.get("hasta"),
          criterio: datos.get("criterio.key")
        }
      });
    }
  }
});
